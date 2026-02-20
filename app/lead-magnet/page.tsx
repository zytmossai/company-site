import { LeadMagnetForm } from "@/components/LeadMagnetForm";

export const metadata = {
  title: "AI Automation Readiness Checklist | ZytmossAI"
};

export default function LeadMagnetPage() {
  return (
    <div className="section">
      <div className="container-page space-y-6 sm:space-y-10">
        <header className="max-w-2xl">
          <p className="section-heading">Free Resource</p>
          <h1 className="section-title">
            Free AI Automation Readiness Checklist
          </h1>
          <p className="section-subtitle">
            Download our free checklist to discover automation opportunities in
            your business. We&apos;ll also send practical tips on implementing
            AI the right way.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <LeadMagnetForm />

          <aside className="card-surface flex flex-col justify-center text-sm">
            <h2 className="text-card-title text-base font-semibold">
              What&apos;s Inside the Checklist
            </h2>
            <p className="mt-2 text-card-muted">
              You&apos;ll get instant access to a practical assessment that covers:
            </p>
            <ul className="mt-4 space-y-3 text-card-body">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-indigo-500">•</span>
                Processes most businesses should automate first
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-indigo-500">•</span>
                Signals your team is ready for AI
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-indigo-500">•</span>
                Common pitfalls to avoid
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 text-indigo-500">•</span>
                How to estimate cost and time savings
              </li>
            </ul>

            <div className="card-inner-box mt-6">
              <p className="text-card-body text-sm leading-relaxed">
                <strong>Instant delivery.</strong> Submit the form and get the checklist in your inbox within seconds. Check spam if needed.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
