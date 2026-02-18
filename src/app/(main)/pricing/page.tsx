import Link from "next/link";
import { PLANS } from "@/lib/constants";

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pricing
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Start free. Upgrade when your needs grow. Every plan includes access
            to our core API with no hidden fees.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col rounded-xl border p-8 ${
              plan.highlighted
                ? "border-accent bg-card shadow-sm"
                : "border-border bg-card"
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-semibold text-foreground">
              {plan.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {plan.description}
            </p>

            <div className="mt-6">
              <span className="text-3xl font-semibold text-foreground">
                {plan.price}
              </span>
              {plan.priceNote && (
                <span className="ml-2 text-sm text-muted-foreground">
                  {plan.priceNote}
                </span>
              )}
            </div>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={plan.id === "enterprise" ? "/about" : "/login"}
              className={`mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                plan.highlighted
                  ? "bg-accent text-accent-foreground hover:opacity-90"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
      </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              q: "Can I change plans later?",
              a: "Yes. You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle.",
            },
            {
              q: "What happens if I exceed my rate limit?",
              a: "Requests beyond your limit receive a 429 status code. We don't charge overages — upgrade your plan for higher limits.",
            },
            {
              q: "Do you offer annual billing?",
              a: "Annual billing with a discount will be available soon. Contact us for early access to annual pricing.",
            },
            {
              q: "Is there a free trial for Pro?",
              a: "Yes. The Pro plan includes a 14-day free trial with full access to all features. No credit card required to start.",
            },
          ].map((item) => (
            <div key={item.q}>
              <h3 className="text-sm font-semibold text-foreground">
                {item.q}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}
