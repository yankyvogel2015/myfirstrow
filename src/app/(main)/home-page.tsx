import Link from "next/link";
import { PLANS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Event data infrastructure
            <br />
            <span className="text-muted-foreground">you can rely on.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Access real-time Ticketmaster inventory, pricing, and availability
            through a clean, well-documented API. Built for developers and
            businesses who need accurate data at scale.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Built for production
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every layer is designed for reliability, accuracy, and security.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                Real-time data
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Inventory and pricing updated continuously. No stale caches,
                no guesswork. Get data as it changes.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                Secure by design
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                API keys are hashed at rest. All traffic encrypted. Rate limiting,
                audit logging, and role-based access built in from day one.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">
                Developer-first
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Clean REST API, predictable responses, comprehensive
                documentation. Integrate in minutes, not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three steps to production-ready event data.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create an account",
                description:
                  "Sign up with Google. Your account is ready in seconds — no credit card required.",
              },
              {
                step: "02",
                title: "Get your API key",
                description:
                  "Generate a secure API key from your dashboard. Each key is scoped to your plan and usage limits.",
              },
              {
                step: "03",
                title: "Start querying",
                description:
                  "Use our REST API to search events, check availability, and access real-time pricing data.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-card p-6">
                <span className="text-xs font-medium text-muted-foreground">
                  {item.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-muted-foreground">
              Start free. Scale when you need to.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl border p-6 ${
                  plan.highlighted
                    ? "border-accent bg-background shadow-sm"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.description}
                </p>
                <p className="mt-4 text-2xl font-semibold text-foreground">
                  {plan.price}
                </p>
                {plan.priceNote && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.priceNote}
                  </p>
                )}
                <ul className="mt-6 space-y-2.5">
                  {plan.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
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
                  href="/pricing"
                  className="mt-6 inline-flex h-9 w-full items-center justify-center rounded-md border border-border text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Create a free account and start accessing event data in minutes.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-accent px-8 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Create free account
          </Link>
        </div>
      </section>
    </div>
  );
}
