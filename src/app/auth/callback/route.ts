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
 *
 * IMPORTANT: We do NOT use the shared createClient() from lib/supabase/server.ts here.
 * That client uses cookies() from next/headers, which sets cookies on an implicit response.
 * In a Route Handler that returns NextResponse.redirect(), those cookies are LOST.
 * Instead, we create a Supabase client that reads from the request cookies and
 * writes directly onto the redirect response object.
 */
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "/dashboard";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || requestUrl.origin;

  // Validate redirect target — must be a relative path on our own origin
  const redirectTo = next.startsWith("/") ? next : "/dashboard";

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.redirect(`${siteUrl}/login?error=config_error`);
    }

    // Create the redirect response FIRST — we'll set cookies on it
    const response = NextResponse.redirect(`${siteUrl}${redirectTo}`);

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

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // --- EMAIL ALLOWLIST (development only) ---
      const allowedEmails = process.env.ALLOWED_EMAILS;
      if (allowedEmails) {
        const allowlist = allowedEmails
          .split(",")
          .map((e) => e.trim().toLowerCase());
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user?.email || !allowlist.includes(user.email.toLowerCase())) {
          await supabase.auth.signOut();
          return NextResponse.redirect(
            `${siteUrl}/login?error=access_denied`
          );
        }
      }
      // --- END ALLOWLIST ---

      // Return the redirect response WITH the auth cookies attached
      return response;
    }
  }

  // Auth failed — redirect to login with error indicator
  return NextResponse.redirect(`${siteUrl}/login?error=auth_failed`);
}
