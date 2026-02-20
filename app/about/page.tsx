import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-page space-y-6 sm:space-y-10">
        <header className="max-w-2xl">
          <p className="section-heading">About</p>
          <h1 className="section-title">
            We Make AI Practical, Measurable, and ROI-Driven
          </h1>
          <p className="section-subtitle">
            Our mission is to help businesses unlock efficiency through
            intelligent automation. We believe AI should be practical, secure,
            and aligned with measurable business outcomes.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-4 text-hero-sub text-sm">
            <p>
              We combine technical expertise with business strategy to design
              and implement automation systems that create real impact. For each
              engagement, we focus on outcomes first—time saved, accuracy
              improved, and costs reduced—then choose the right AI tooling to
              support that vision.
            </p>
            <p>
              Our experience spans SMEs, e-commerce brands, agencies, and
              professional services teams who want to scale without simply
              adding more headcount. We plug into your existing stack, avoid
              unnecessary complexity, and ship automations that your team will
              actually use.
            </p>
          </div>

          <aside className="card-surface space-y-4">
            <h2 className="text-card-title text-sm font-semibold">Our Values</h2>
            <ul className="space-y-2 text-card-body text-sm">
              <li>• Business-first mindset</li>
              <li>• Measurable ROI</li>
              <li>• Security and compliance</li>
              <li>• Long-term partnerships</li>
            </ul>
          </aside>
        </section>

        <section className="card-surface">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-card-title text-lg font-semibold">
                Let&apos;s Build Your Automation Strategy
              </h2>
              <p className="mt-2 max-w-xl text-card-muted text-sm">
                Whether you&apos;re just starting with AI or looking to expand
                existing automations, we&apos;ll help you prioritize the
                highest-ROI initiatives.
              </p>
            </div>
            <Link href="/book-consultation" className="btn-primary w-full justify-center sm:w-auto">
              Book a Free Call
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

