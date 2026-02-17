import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * MAINTENANCE MODE — Site is offline.
 * Remove this block and restore the auth middleware when ready to go live.
 */
export function middleware(request: NextRequest) {
  // Allow Next.js internals through
  if (request.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>MyFirstRow</title>
  <style>
    body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #fafaf9; color: #1c1917; }
    .container { text-align: center; padding: 2rem; }
    h1 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.025em; }
    p { color: #78716c; font-size: 0.875rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>MyFirstRow</h1>
    <p>Coming soon.</p>
  </div>
</body>
</html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
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
