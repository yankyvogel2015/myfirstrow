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
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Construct absolute URL for redirect
      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        // In development, redirect to localhost
        return NextResponse.redirect(`${origin}${redirectTo}`);
      } else if (forwardedHost) {
        // In production behind a proxy (Cloudflare/Vercel), use forwarded host
        return NextResponse.redirect(
          `https://${forwardedHost}${redirectTo}`
        );
      } else {
        return NextResponse.redirect(`${origin}${redirectTo}`);
      }
    }
  }

  // Auth failed — redirect to login with error indicator
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
