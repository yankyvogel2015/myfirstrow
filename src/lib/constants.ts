import type { PlanDefinition, NavLink } from "@/types";

/**
 * Non-secret application constants.
 * This file is safe to import anywhere (client or server).
 */

export const SITE_NAME = "MyFirstRow";
export const SITE_DESCRIPTION =
  "Real-time event data infrastructure. Access Ticketmaster inventory, pricing, and availability through a reliable, well-documented API.";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export const PLANS: PlanDefinition[] = [
  {
    id: "free",
    name: "Starter",
    description: "For exploration and prototyping.",
    price: "Free",
    features: [
      "100 API requests / day",
      "Basic event search",
      "Community support",
      "Standard rate limits",
    ],
    cta: "Get started",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For production applications and businesses.",
    price: "$99/mo",
    priceNote: "billed monthly",
    features: [
      "10,000 API requests / day",
      "Real-time availability data",
      "Priority support",
      "Webhook notifications",
      "Advanced filtering",
      "99.9% uptime SLA",
    ],
    highlighted: true,
    cta: "Start free trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For high-volume and mission-critical use cases.",
    price: "Custom",
    features: [
      "Unlimited API requests",
      "Dedicated infrastructure",
      "Custom integrations",
      "24/7 engineering support",
      "Audit logging",
      "Custom SLA",
      "SOC 2 compliance",
    ],
    cta: "Contact sales",
  },
];
