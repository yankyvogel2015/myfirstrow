import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * OAuth Callback Route Handler
 *
 * After Google OAuth consent, Supabase redirects here with an authorization code.
 * We exchange it server-side (PKCE flow) — the code never touches client JS.
 *
 * SECURITY:
 * - Code exchange happens entirely on the server
 * - Session is set via httpOnly cookies
 * - Redirect target is validated to prevent open redirect attacks
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  // Validate redirect target — must be a relative path on our own origin
  // This prevents open redirect attacks via the `next` parameter
  const redirectTo = next.startsWith("/") ? next : "/dashboard";

  if (code) {
    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.redirect(`${origin}/login?error=config_error`);
    }
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // --- EMAIL ALLOWLIST (development only) ---
      // If ALLOWED_EMAILS is set, only those emails can log in.
      // Remove the env var or leave it empty to allow all users.
      const allowedEmails = process.env.ALLOWED_EMAILS;
      if (allowedEmails) {
        const allowlist = allowedEmails
          .split(",")
          .map((e) => e.trim().toLowerCase());
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user?.email || !allowlist.includes(user.email.toLowerCase())) {
          // Not on the allowlist — sign them out and reject
          await supabase.auth.signOut();
          return NextResponse.redirect(
            `${origin}/login?error=access_denied`
          );
        }
      }
      // --- END ALLOWLIST ---

      // Redirect to dashboard after successful login
      // Use NEXT_PUBLIC_SITE_URL for reliable redirects behind Cloudflare/Vercel proxy
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || origin;
      return NextResponse.redirect(`${siteUrl}${redirectTo}`);
    }
  }

  // Auth failed — redirect to login with error indicator
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
