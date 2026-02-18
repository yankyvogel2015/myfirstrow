export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About MyFirstRow
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We build data infrastructure for the live events industry. Reliable,
            real-time access to ticket inventory, pricing, and availability —
            enabling businesses to make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* Problem / Approach */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-border md:grid-cols-2">
            <div className="border-b border-border bg-background p-10 md:border-b-0 md:border-r">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-xs font-semibold text-muted-foreground">
                01
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                The problem
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Live event data is fragmented, inconsistent, and difficult to
                access programmatically. Businesses that depend on ticket data
                spend more time fighting unreliable data sources than building
                their products.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Scraping is brittle. Official APIs have limitations. And the data
                quality gap between what&apos;s available and what&apos;s needed
                is significant.
              </p>
            </div>

            <div className="bg-background p-10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-xs font-semibold text-muted-foreground">
                02
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                Our approach
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                MyFirstRow provides a single, reliable API that aggregates and
                normalizes live event data. We handle the complexity of data
                collection so you can focus on building your application.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our infrastructure is built for accuracy and uptime. We invest in
                engineering — not marketing — because data quality speaks for
                itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Our principles
            </h2>
            <p className="mt-3 text-muted-foreground">
              The standards we hold ourselves to, every day.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Reliability first",
                description:
                  "Continuous uptime by design. Monitoring, redundancy, and graceful degradation are foundational — not afterthoughts.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                ),
                title: "Data accuracy",
                description:
                  "Stale data is worse than no data. We validate, reconcile, and timestamp everything so you know exactly what you're working with.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                title: "Security by default",
                description:
                  "API keys hashed at rest. All traffic encrypted. Rate limiting, access controls, and audit logging built into the core.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
                title: "Developer experience",
                description:
                  "Clean API design, predictable error handling, comprehensive docs. Integration should take minutes, not weeks.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Transparency",
                description:
                  "Clear pricing, honest status pages, straightforward terms. No hidden fees, no surprise rate limits, no data reselling.",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                ),
                title: "Compliance",
                description:
                  "We operate within platform terms of service and applicable law. Sustainable data access requires responsible engineering.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              For enterprise inquiries, partnership opportunities, or technical
              questions — we&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@myfirstrow.com"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              hello@myfirstrow.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
