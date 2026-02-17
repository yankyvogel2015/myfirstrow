import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Dashboard layout — Server Component.
 * Acts as an auth gate: every child route inherits this check.
 *
 * SECURITY:
 * - Session is validated server-side via getUser() (not getSession())
 * - If no valid session, redirect to /login
 * - This is a secondary check — middleware handles it first,
 *   but defense-in-depth means we check again here.
 */
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  if (!supabase) {
    redirect("/login");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {children}
    </div>
  );
}
