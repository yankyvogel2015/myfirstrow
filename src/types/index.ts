/**
 * Shared TypeScript types for MyFirstRow.
 * Keep this file focused on domain types — UI component props belong with their components.
 */

/** Pricing plan tiers */
export type PlanTier = "free" | "pro" | "enterprise";

/** Plan definition for the pricing page */
export interface PlanDefinition {
  id: PlanTier;
  name: string;
  description: string;
  price: string; // Display price (e.g., "$49/mo")
  priceNote?: string; // e.g., "billed annually"
  features: string[];
  highlighted?: boolean; // Visual emphasis on recommended plan
  cta: string; // Call-to-action button text
  /** Future: Stripe price ID for checkout integration */
  stripePriceId?: string;
}

/** User profile (synced from Supabase auth.users) */
export interface UserProfile {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  tier: PlanTier;
  createdAt: string;
}

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}
