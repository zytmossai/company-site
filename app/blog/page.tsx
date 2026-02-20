import Link from "next/link";

const publishedArticles = [
  {
    title: "AI vs Traditional Automation",
    description:
      "Understand the differences between rules-based automation and AI-powered workflows, and when to use each.",
    slug: "ai-vs-traditional-automation",
  },
  {
    title: "Top 10 Processes Every Business Should Automate",
    description:
      "From reporting to customer support, explore the high-ROI workflows to automate first.",
    slug: "top-10-processes-to-automate",
  },
];

const upcomingArticles = [
  {
    title: "How SMEs Can Reduce Costs Using AI Automation",
    description:
      "A practical breakdown of where small and mid-sized businesses can start with automation to reduce operational costs.",
  },
  {
    title: "Is Your Business Ready for AI?",
    description:
      "A readiness checklist for teams considering AI-powered automation and integrations.",
  },
];

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-page space-y-10 sm:space-y-16">
        <header className="max-w-2xl">
          <p className="section-heading">Insights</p>
          <h1 className="section-title">AI Automation Resources & Articles</h1>
          <p className="section-subtitle">
            Content designed to help you understand what to automate, how to
            measure ROI, and how to roll out AI inside your organization.
          </p>
        </header>

        {/* Actionable Insights - Published Articles */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Actionable Insights
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Published articles ready to read now
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {publishedArticles.map((article) => (
              <article key={article.slug} className="card-surface">
                <h3 className="text-card-title text-base font-semibold">
                  {article.title}
                </h3>
                <p className="mt-2 text-card-muted text-sm">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="btn-secondary mt-4 w-full sm:w-auto"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Upcoming Resources */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Upcoming Resources
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              New content currently in development
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingArticles.map((article) => (
              <article key={article.title} className="card-muted">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-card-title text-base font-semibold">
                    {article.title}
                  </h3>
                  <span className="badge-in-progress shrink-0">
                    In Progress
                  </span>
                </div>
                <p className="mt-2 text-card-muted text-sm">
                  {article.description}
                </p>
              </article>
            ))}
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Want early access when this is published?{" "}
              <Link
                href="/lead-magnet"
                className="font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Join the Automation Checklist
              </Link>
            </p>
          </div>
        </section>

        {/* Checklist CTA */}
        <section className="card-surface">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-card-title text-lg font-semibold">
                Free AI Automation Readiness Checklist
              </h2>
              <p className="mt-2 text-card-muted text-sm">
                Download our free checklist to discover automation opportunities
                in your business. We&apos;ll also send practical tips on
                implementing AI the right way.
              </p>
            </div>
            <Link
              href="/lead-magnet"
              className="btn-primary w-full justify-center whitespace-nowrap sm:w-auto"
            >
              Get Free Checklist
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

