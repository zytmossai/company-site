import Script from "next/script";

export const metadata = {
  title: "Book Strategy Call | ZytmossAI"
};

export default function BookConsultationPage() {
  return (
    <div className="section">
      <div className="container-page space-y-6 sm:space-y-10">
        <header className="max-w-2xl">
          <p className="section-heading">Book a Call</p>
          <h1 className="section-title">Book Your Free Strategy Call</h1>
          <p className="section-subtitle">
            Share a few details about your business and choose a time that works
            for you. We&apos;ll use this session to explore automation
            opportunities and outline next steps.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="card-surface">
            <p className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
              Calendar
            </p>
            <div className="mt-4">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/zytmossai-support/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card-surface text-card-muted text-xs">
              <p className="font-semibold text-card-body">What We&apos;ll Cover</p>
              <ul className="mt-2 space-y-1.5">
                <li>• Overview of your current workflows</li>
                <li>• Top 2–3 automation opportunities</li>
                <li>• Potential cost and time savings</li>
                <li>• Next steps: proposal → project</li>
              </ul>
            </div>
            <div className="card-surface text-card-muted text-xs">
              <p className="font-semibold text-card-body">Our Process</p>
              <p className="mt-2">
                Website → Free Audit → Strategy Call → Proposal → Project
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

