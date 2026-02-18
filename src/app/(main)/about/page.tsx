export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          About MyFirstRow
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          We build data infrastructure for the live events industry. Our systems
          provide reliable, real-time access to ticket inventory, pricing, and
          availability — enabling businesses to make informed decisions with
          confidence.
        </p>
      </div>

      {/* Mission */}
      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            The problem
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Live event data is fragmented, inconsistent, and difficult to access
            programmatically. Businesses that depend on ticket data spend more
            time fighting unreliable data sources than building their products.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Scraping is brittle. Official APIs have limitations. And the data
            quality gap between what&apos;s available and what&apos;s needed is
            significant.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Our approach
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            MyFirstRow provides a single, reliable API that aggregates and
            normalizes live event data. We handle the complexity of data
            collection so you can focus on building your application.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our infrastructure is built for accuracy and uptime. We invest in
            engineering — not marketing — because data quality speaks for itself.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-20 border-t border-border pt-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Principles
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Reliability first",
              description:
                "Our systems are designed for continuous uptime. Monitoring, redundancy, and graceful degradation are not afterthoughts — they are foundational.",
            },
            {
              title: "Data accuracy",
              description:
                "Stale or incorrect data is worse than no data. We validate, reconcile, and timestamp everything so you always know exactly what you're working with.",
            },
            {
              title: "Security by default",
              description:
                "API keys are hashed at rest. All communication is encrypted. Rate limiting, access controls, and audit logging are built into the core architecture.",
            },
            {
              title: "Developer experience",
              description:
                "Clean API design, predictable error handling, comprehensive documentation. Integration should take minutes, not weeks.",
            },
            {
              title: "Transparency",
              description:
                "Clear pricing, honest status pages, straightforward terms. No hidden fees, no surprise rate limits, no data reselling.",
            },
            {
              title: "Compliance",
              description:
                "We operate within the boundaries of platform terms of service and applicable law. Sustainable data access requires responsible engineering.",
            },
          ].map((value) => (
            <div key={value.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-20 border-t border-border pt-20">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            For enterprise inquiries, partnership opportunities, or technical
            questions, reach out to our team.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            hello@myfirstrow.com
          </p>
        </div>
      </div>
    </div>
  );
}
