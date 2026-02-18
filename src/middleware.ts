import { updateSession } from "@/lib/supabase/middleware";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware — runs on the Edge before every matched request.
 *
 * Responsibilities:
 * 1. Refresh Supabase auth session (cookie rotation)
 * 2. Redirect unauthenticated users from protected routes
 * 3. Redirect authenticated users away from /login
 *
 * SECURITY: This is the first line of defense for route protection.
 * It runs before any Server Component or Route Handler.
 */
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico and other static assets
     * - Public assets in /public
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
