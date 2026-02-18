import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "./sign-out-button";

/**
 * Dashboard page — Server Component.
 * Fetches user data server-side. No tokens in client JS.
 */
export default async function DashboardPage() {
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

  // Determine role: admin if email is in ALLOWED_EMAILS, otherwise Starter
  const allowedEmails = process.env.ALLOWED_EMAILS;
  const isAdmin = allowedEmails
    ?.split(",")
    .map((e) => e.trim().toLowerCase())
    .includes(user.email?.toLowerCase() ?? "");

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back, {user.user_metadata?.full_name || user.email}
          </p>
        </div>
        <SignOutButton />
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Account card */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-sm font-medium text-muted-foreground">Account</h2>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{user.email}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Name</p>
              <p className="text-sm font-medium text-foreground">
                {user.user_metadata?.full_name || "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Plan</p>
              <p className="text-sm font-medium text-foreground">
                {isAdmin ? "Admin" : "Starter"}
              </p>
            </div>
          </div>
        </div>

        {/* Usage card (placeholder) */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-sm font-medium text-muted-foreground">
            API Usage
          </h2>
          <div className="mt-4">
            <p className="text-3xl font-semibold text-foreground">—</p>
            <p className="mt-1 text-xs text-muted-foreground">
              requests today
            </p>
          </div>
          <div className="mt-6">
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 w-0 rounded-full bg-accent" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              0 / 100 daily limit
            </p>
          </div>
        </div>

        {/* API key card (placeholder) */}
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-sm font-medium text-muted-foreground">API Key</h2>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              API key management coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
