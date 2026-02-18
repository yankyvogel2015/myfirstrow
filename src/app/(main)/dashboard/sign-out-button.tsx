"use client";

import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";

/**
 * Sign out button — Client Component (needs browser interaction).
 *
 * SECURITY:
 * - Calls supabase.auth.signOut() which clears httpOnly cookies
 * - Redirects to home after sign out
 */
export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="inline-flex h-9 items-center rounded-md border border-border px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      Sign out
    </button>
  );
}
