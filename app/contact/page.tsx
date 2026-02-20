import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | ZytmossAI"
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-page space-y-6 sm:space-y-10">
        <header className="max-w-2xl">
          <p className="section-heading">Contact</p>
          <h1 className="section-title">Start Your AI Automation Journey</h1>
          <p className="section-subtitle">
            Share a few details about your business and we&apos;ll follow up
            within 24 hours to schedule your strategy session.
          </p>
        </header>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="card-surface">
              <h2 className="text-card-title text-sm font-semibold">
                Prefer to Book Directly?
              </h2>
              <p className="mt-2 text-card-muted text-sm">
                Use our booking link to choose a time that works for you.
              </p>
              <a
                href="https://calendly.com/zytmossai-support/30min"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-4 flex w-full justify-center"
              >
                Open Calendly
              </a>
            </div>

            <div className="card-surface text-card-muted text-xs">
              <p className="font-semibold text-card-body">What to Expect</p>
              <ul className="mt-2 space-y-1.5">
                <li>• 30–45 minute discovery call</li>
                <li>• Review of your current workflows</li>
                <li>• Initial automation opportunities</li>
                <li>• Next steps for proposal and implementation</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
