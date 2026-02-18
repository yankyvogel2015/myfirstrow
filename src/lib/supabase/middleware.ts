import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Refreshes the Supabase session on every request via middleware.
 * This ensures the auth token in the cookie is always fresh.
 *
 * SECURITY:
 * - Runs BEFORE any page renders
 * - Rewrites cookies in-flight so RSC/Route Handlers always see a valid session
 * - Redirects unauthenticated users away from protected routes
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // Guard: if env vars are missing, let the request through instead of crashing.
  // This prevents MIDDLEWARE_INVOCATION_FAILED on Vercel if vars aren't configured yet.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase env vars missing — middleware skipping auth checks.");
    return supabaseResponse;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // --- STEP 1: Handle stray OAuth codes FIRST (before any session checks) ---
  // If an OAuth code arrives at the wrong URL (e.g. due to Supabase Site URL fallback,
  // www/non-www mismatch, or Cloudflare redirect), forward it to /auth/callback
  // immediately so the PKCE code exchange can happen.
  const isCallbackRoute = request.nextUrl.pathname.startsWith("/auth/callback");
  if (!isCallbackRoute) {
    const authCode = request.nextUrl.searchParams.get("code");
    if (authCode) {
      const callbackUrl = new URL("/auth/callback", request.url);
      callbackUrl.searchParams.set("code", authCode);
      // Preserve "next" param if present, otherwise don't add extra params
      const next = request.nextUrl.searchParams.get("next");
      if (next) callbackUrl.searchParams.set("next", next);
      return NextResponse.redirect(callbackUrl);
    }
  }

  // --- STEP 2: Public route check ---
  const isPublicRoute =
    request.nextUrl.pathname === "/login" || isCallbackRoute;

  // Let /auth/callback through immediately — no session check needed
  if (isCallbackRoute) {
    return supabaseResponse;
  }

  // --- STEP 3: Validate session server-side ---
  // IMPORTANT: Do NOT use supabase.auth.getSession() here.
  // getUser() validates the token server-side with Supabase Auth.
  // getSession() only reads the JWT without validation — insecure for middleware.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If not logged in and trying to access ANY non-public route → redirect to login
  if (!user && !isPublicRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If logged-in user visits /login, redirect to dashboard
  if (user && request.nextUrl.pathname === "/login") {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return supabaseResponse;
}
