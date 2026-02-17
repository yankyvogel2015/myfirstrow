export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          API Documentation
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Everything you need to integrate MyFirstRow into your application.
          Clean REST API with predictable responses.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[240px_1fr]">
        {/* Sidebar navigation */}
        <nav className="hidden lg:block">
          <ul className="sticky top-24 space-y-1">
            {[
              "Authentication",
              "Base URL",
              "Rate Limits",
              "Error Handling",
              "Events",
              "Availability",
              "Security",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="space-y-16">
          {/* Authentication */}
          <section id="authentication">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Authentication
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All API requests require authentication via an API key. Include your
              key in the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">Authorization</code> header.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-muted p-4">
              <pre className="overflow-x-auto font-mono text-sm text-foreground">
{`curl -H "Authorization: Bearer mfr_live_your_key_here" \\
  https://api.myfirstrow.com/v1/events`}
              </pre>
            </div>
            <div className="mt-4 rounded-lg border border-border bg-card p-4">
              <p className="text-xs font-semibold text-foreground">⚠ Security</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Never expose your API key in client-side code, public repositories,
                or browser requests. API keys should only be used in server-side
                applications.
              </p>
            </div>
          </section>

          {/* Base URL */}
          <section id="base-url">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Base URL
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All API endpoints are served from a single base URL:
            </p>
            <div className="mt-4 rounded-xl border border-border bg-muted p-4">
              <code className="font-mono text-sm text-foreground">
                https://api.myfirstrow.com/v1
              </code>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              All requests must use HTTPS. HTTP requests will be rejected.
            </p>
          </section>

          {/* Rate Limits */}
          <section id="rate-limits">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Rate Limits
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rate limits depend on your plan tier. Limits are applied per API key.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Plan
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Requests / day
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Burst limit
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Starter</td>
                    <td className="px-4 py-3 text-muted-foreground">100</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      10 req/min
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">Pro</td>
                    <td className="px-4 py-3 text-muted-foreground">10,000</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      100 req/min
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-muted-foreground">
                      Enterprise
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Unlimited
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rate limit information is included in response headers:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                X-RateLimit-Remaining
              </code>
              ,{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                X-RateLimit-Reset
              </code>
              .
            </p>
          </section>

          {/* Error Handling */}
          <section id="error-handling">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Error Handling
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The API uses standard HTTP status codes. Errors include a JSON body
              with a human-readable message.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-muted p-4">
              <pre className="overflow-x-auto font-mono text-sm text-foreground">
{`{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "You have exceeded your daily request limit.",
    "status": 429
  }
}`}
              </pre>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Meaning
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["200", "Success"],
                    ["400", "Bad request — check your parameters"],
                    ["401", "Unauthorized — invalid or missing API key"],
                    ["403", "Forbidden — insufficient plan permissions"],
                    ["404", "Not found"],
                    ["429", "Rate limit exceeded"],
                    ["500", "Internal server error"],
                  ].map(([status, meaning]) => (
                    <tr key={status}>
                      <td className="px-4 py-3">
                        <code className="font-mono text-foreground">{status}</code>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {meaning}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Events endpoint */}
          <section id="events">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Events
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs font-medium text-accent-foreground">
                GET
              </span>
              <code className="font-mono text-sm text-foreground">
                /v1/events
              </code>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Search and retrieve event data. Supports filtering by keyword,
              date range, venue, and category.
            </p>
            <h3 className="mt-8 text-sm font-semibold text-foreground">
              Query parameters
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Parameter
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["keyword", "string", "Search term for event name or artist"],
                    ["date_from", "string", "Start date (ISO 8601)"],
                    ["date_to", "string", "End date (ISO 8601)"],
                    ["venue_id", "string", "Filter by venue identifier"],
                    ["limit", "integer", "Results per page (default: 20, max: 100)"],
                    ["offset", "integer", "Pagination offset"],
                  ].map(([param, type, desc]) => (
                    <tr key={param}>
                      <td className="px-4 py-3">
                        <code className="font-mono text-foreground">{param}</code>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Availability endpoint */}
          <section id="availability">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Availability
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded bg-accent px-2 py-0.5 font-mono text-xs font-medium text-accent-foreground">
                GET
              </span>
              <code className="font-mono text-sm text-foreground">
                /v1/events/:id/availability
              </code>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Get real-time ticket availability and pricing for a specific event.
              Requires Pro plan or higher.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-muted p-4">
              <pre className="overflow-x-auto font-mono text-sm text-foreground">
{`{
  "event_id": "evt_abc123",
  "available_sections": [
    {
      "section": "Floor A",
      "row": "1",
      "available_seats": 4,
      "price_range": {
        "min": 125.00,
        "max": 250.00,
        "currency": "USD"
      }
    }
  ],
  "last_updated": "2026-02-17T12:00:00Z"
}`}
              </pre>
            </div>
          </section>

          {/* Security best practices */}
          <section id="security">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Security Best Practices
            </h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  title: "Keep keys server-side",
                  description:
                    "Never include API keys in client-side JavaScript, mobile apps, or public repositories. All API calls should originate from your backend.",
                },
                {
                  title: "Rotate keys regularly",
                  description:
                    "Generate new API keys periodically and revoke old ones. You can manage keys from your dashboard.",
                },
                {
                  title: "Use HTTPS exclusively",
                  description:
                    "All API communication must use HTTPS. Requests over HTTP will be rejected. Do not disable certificate verification.",
                },
                {
                  title: "Monitor usage",
                  description:
                    "Review your API usage regularly in the dashboard. Unusual spikes may indicate a compromised key.",
                },
                {
                  title: "Implement error handling",
                  description:
                    "Handle 401 and 429 responses gracefully. Implement exponential backoff for retries.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
