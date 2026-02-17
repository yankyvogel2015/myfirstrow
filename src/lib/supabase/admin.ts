import { createClient } from "@supabase/supabase-js";

/**
 * Supabase admin client using the service_role key.
 * This bypasses ALL Row Level Security policies.
 *
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SECURITY CRITICAL                                          ║
 * ║  This file must NEVER be imported from:                     ║
 * ║    - Any file with 'use client'                             ║
 * ║    - Any file under src/components/ (unless server-only)    ║
 * ║    - Any page.tsx that is a Client Component                ║
 * ║                                                              ║
 * ║  Allowed usage:                                              ║
 * ║    - Route Handlers (src/app/api/*)                         ║
 * ║    - Server Components (verified server-only)               ║
 * ║    - Server Actions                                          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * Lazy-initialized admin client.
 * Throws only when actually called, not at module load time.
 * This prevents build/deploy crashes when env vars aren't set yet.
 */
export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL. " +
        "Ensure these are set in .env.local (local) or Vercel Environment Variables (production)."
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
