import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * OAuth Callback Route Handler
 *
 * After Google OAuth consent, Supabase redirects here with an authorization code.
 * We exchange it server-side (PKCE flow) — the code never touches client JS.
 *
 * SECURITY:
 * - Code exchange happens entirely on the server
 * - Session cookies are set directly on the redirect response
 * - Redirect target is validated to prevent open redirect attacks
 * - Uses data.user from exchange response (no separate getUser() call)
 *
 * IMPORTANT: We create a Supabase client that reads from the request cookies and
 * writes directly onto the redirect response object. This ensures cookies survive
 * even through CDN proxies (Cloudflare) that might strip Set-Cookie from redirects.
 */

function getRedirectOrigin(request: NextRequest): string {
  // Priority: explicit env var > x-forwarded-host > request origin
  // This handles Vercel behind Cloudflare correctly
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) return siteUrl;

  const forwardedHost = request.headers.get("x-forwarded-host");
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";
  if (forwardedHost) return `${forwardedProto}://${forwardedHost}`;

  return new URL(request.url).origin;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";
  const origin = getRedirectOrigin(request);

  // Validate redirect target — must be a relative path on our own origin
  const redirectTo = next.startsWith("/") ? next : "/dashboard";

  if (!code) {
    console.error("[auth/callback] No code parameter received");
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("[auth/callback] Missing Supabase env vars");
    return NextResponse.redirect(`${origin}/login?error=config_error`);
  }

  // Create the redirect response FIRST — we'll set cookies on it
  const response = NextResponse.redirect(`${origin}${redirectTo}`);

  // Prevent CDN/proxy caching of this redirect (preserves Set-Cookie headers)
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");

  // Build a Supabase client that reads from request cookies
  // and writes directly onto the response object
  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("[auth/callback] Code exchange failed:", error.message);
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
  }

  // Use the user from the exchange response directly — no extra getUser() call
  // (a second getUser() can trigger setAll and overwrite the session cookies we just set)
  const user = data.session?.user;

  if (!user) {
    console.error("[auth/callback] Exchange succeeded but no user in response");
    return NextResponse.redirect(`${origin}/login?error=auth_failed`);
  }

  // --- EMAIL ALLOWLIST (development only) ---
  const allowedEmails = process.env.ALLOWED_EMAILS;
  if (allowedEmails) {
    const allowlist = allowedEmails
      .split(",")
      .map((e) => e.trim().toLowerCase());

    if (!user.email || !allowlist.includes(user.email.toLowerCase())) {
      console.warn(`[auth/callback] Blocked login for: ${user.email}`);
      await supabase.auth.signOut();
      return NextResponse.redirect(`${origin}/login?error=access_denied`);
    }
  }
  // --- END ALLOWLIST ---

  console.log(`[auth/callback] Login successful for: ${user.email}`);

  // Return the redirect response WITH the auth cookies attached
  return response;
}
