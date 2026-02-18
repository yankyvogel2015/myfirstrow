import { SITE_NAME } from "@/lib/constants";

/**
 * Auth layout — completely clean. No header, no footer, no navigation.
 * Only shows the login form centered on a blank page.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="mb-8 text-lg font-semibold tracking-tight text-foreground">
        {SITE_NAME}
      </div>
      {children}
    </div>
  );
}
