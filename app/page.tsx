import Link from "next/link";
import Image from "next/image";

function LeadMagnetBanner() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="card-surface flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-heading">Free Resource</p>
            <h2 className="text-card-title mt-2 text-lg sm:text-xl">
              Free AI Automation Readiness Checklist
            </h2>
            <p className="text-card-muted mt-2 max-w-xl text-sm">
              Discover hidden automation opportunities inside your business. Get
              a practical checklist you can use with or without us.
            </p>
          </div>
          <Link
            href="/lead-magnet"
            className="btn-secondary w-full justify-center whitespace-nowrap sm:w-auto"
          >
            Download the Checklist
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero — background image with overlay */}
      <section className="relative min-h-[480px] overflow-hidden border-b border-slate-200 pt-6 sm:min-h-[520px] sm:pt-10 lg:min-h-[580px] dark:border-slate-800/60">
        <div className="absolute inset-0">
          <Image
            src="/images/Home/Hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-slate-900/55 dark:bg-slate-900/65" aria-hidden />
        <div className="container-page relative z-10 py-6 sm:py-10">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            <div className="text-white">
              <span className="pill-primary mb-4">
                We help businesses reduce operational costs by up to 40% using
                custom AI automation.
              </span>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Transform Your Business with Custom AI Automation
              </h1>
              <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
                We design and implement tailored AI solutions that eliminate
                repetitive work, reduce operational costs, and unlock scalable
                growth.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link href="/book-consultation" className="btn-primary w-full sm:w-auto">
                  Book a Free Strategy Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
                >
                  Get a Free Automation Audit
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/70">
                Website → Free Audit → Strategy Call → Proposal → Project
              </p>
            </div>

            <div className="card-surface relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-gradient-radial" />
              <div className="relative space-y-4">
                <p className="section-heading text-xs font-medium uppercase tracking-[0.2em]">
                  Automation Snapshot
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="card-inner-box">
                    <p className="stat-label">Potential Cost Savings</p>
                    <p className="stat-value text-[20px] sm:text-2xl">Up to 40%</p>
                    <p className="text-card-muted mt-1 text-xs">
                      By replacing manual workflows with AI automation.
                    </p>
                  </div>
                  <div className="card-inner-box">
                    <p className="stat-label">Hours Saved Monthly</p>
                    <p className="stat-value text-[20px] sm:text-2xl">20–60+</p>
                    <p className="text-card-muted mt-1 text-xs">
                      Across operations, customer support, and reporting.
                    </p>
                  </div>
                </div>
                <div className="card-inner-box">
                  <p className="text-card-title text-xs font-semibold">
                    What we automate:
                  </p>
                  <ul className="text-card-muted mt-2 space-y-1 text-xs">
                    <li>• Reporting & analytics</li>
                    <li>• Order & invoice handling</li>
                    <li>• Customer support workflows</li>
                    <li>• CRM & sales follow-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="section border-t py-6">
        <div className="container-page">
          <div className="relative min-h-[140px] overflow-hidden rounded-2xl shadow-soft sm:min-h-[130px]">
            <Image
              src="/images/Home/Trust Bar.jpg"
              alt=""
              width={1200}
              height={200}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900/80 px-4 py-6 dark:bg-slate-900/75">
              <p className="text-center text-sm font-bold uppercase tracking-[0.15em] text-white sm:text-base">
                Trusted by growing teams across:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                {["E-commerce", "Agencies", "Finance", "Professional Services"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex shrink-0 rounded-full border-2 border-white/40 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/Home/Problem.jpg"
              alt="Manual work causing inefficiency — before and after AI automation"
              width={600}
              height={420}
              className="h-[132px] w-full object-cover sm:h-80"
            />
          </div>
          <div>
            <p className="section-heading">The Problem</p>
            <h2 className="section-title">Manual Work Is Slowing Your Growth</h2>
            <p className="section-subtitle">
              Many businesses struggle with inefficient workflows, disconnected
              systems, and time-consuming manual processes. These inefficiencies
              increase operational costs, reduce accuracy, and limit
              scalability.
            </p>
            <div className="card-surface mt-6">
              <ul className="text-card-body space-y-3 text-sm">
                <li>• Repetitive tasks draining team productivity</li>
                <li>• Slow reporting and data analysis</li>
                <li>• High labor costs</li>
                <li>• Human error in daily operations</li>
                <li>• Disconnected tools and software</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="section-heading">The Solution</p>
            <h2 className="section-title">
              AI Automation Built Around Your Business
            </h2>
            <p className="section-subtitle">
              We analyze your workflows and implement custom AI-powered systems
              that integrate seamlessly with your existing tools. Our solutions
              are designed to deliver measurable ROI and long-term scalability.
            </p>
            <div className="card-surface mt-6">
              <p className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                What we deliver
              </p>
              <ul className="text-card-body mt-4 space-y-3 text-sm">
                <li>• Workflow automation</li>
                <li>• AI-driven reporting</li>
                <li>• Smart data processing</li>
                <li>• CRM and ERP integration</li>
                <li>• Customer support automation</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/services" className="btn-secondary inline-flex w-full justify-center sm:w-auto">
                  Explore All Services
                </Link>
                <Link
                  href="/book-consultation"
                  className="btn-primary inline-flex w-full justify-center sm:w-auto"
                >
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/Home/Solution.jpg"
              alt="AI brain connecting CRM, ERP and support systems"
              width={600}
              height={420}
              className="h-[132px] w-full object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8 max-w-2xl">
            <p className="section-heading">How We Work</p>
            <h2 className="section-title">Our 4-Step Implementation Process</h2>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row md:items-stretch md:gap-0">
            {[
              {
                title: "Discovery & Workflow Audit",
                text: "We map your current processes, tools, and bottlenecks.",
                image: "/images/Home/Our Process - Discovery.jpg"
              },
              {
                title: "Automation Strategy & Roadmap",
                text: "We prioritize use cases and design a pragmatic automation plan.",
                image: "/images/Home/Our Process - Strategy.jpg"
              },
              {
                title: "Implementation & Integration",
                text: "We build, test, and integrate AI-powered workflows into your stack.",
                image: "/images/Home/Our Process - Implementation.jpg"
              },
              {
                title: "Optimization & Ongoing Support",
                text: "We monitor, optimize, and extend your automation as you scale.",
                image: "/images/Home/Our Process - Optimization.jpg"
              }
            ].flatMap((step, index) => {
              const card = (
                <div
                  key={step.title}
                  className="relative min-h-[200px] min-w-0 flex-1 overflow-hidden rounded-2xl border border-slate-200/80 shadow-soft sm:min-h-[220px] dark:border-slate-700/80"
                >
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-slate-900/70 dark:bg-slate-900/65"
                    aria-hidden
                  />
                  <div className="relative z-10 flex min-h-[200px] flex-col p-4 sm:min-h-[220px] sm:p-6">
                    <div className="mt-auto">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                        Step {index + 1}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/85">{step.text}</p>
                    </div>
                  </div>
                </div>
              );
              const arrow = (
                <div
                  key={`arrow-${index}`}
                  className="flex shrink-0 items-center justify-center py-2 md:w-6 md:py-0"
                  aria-hidden
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="rotate-90 text-slate-400 md:rotate-0 dark:text-slate-500"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              );
              return index < 3 ? [card, arrow] : [card];
            })}
          </div>
          <p className="section-subtitle mt-6 text-sm">
            You get full transparency, measurable results, and continuous
            optimization.
          </p>
        </div>
      </section>

      {/* Case study preview */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <p className="section-heading">Proven Results</p>
              <h2 className="section-title">Real Outcomes, Not Just Promises</h2>
              <p className="section-subtitle">
                Even if you are early in your AI journey, we focus on tangible
                wins you can measure—time saved, costs reduced, and accuracy
                improved.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/images/Home/Case Study Preview.jpg"
                  alt="Case study results preview"
                  width={700}
                  height={380}
                  className="h-[132px] w-full object-cover sm:h-64"
                />
              </div>
              <Link
                href="/case-studies"
                className="btn-secondary mt-6 inline-flex w-full justify-center sm:w-auto"
              >
                View Full Case Studies
              </Link>
            </div>
            <div className="card-surface flex flex-col justify-center">
              <p className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                E-commerce Company
              </p>
              <ul className="text-card-body mt-4 space-y-2 text-sm">
                <li>• Reduced manual order processing time by 35%</li>
                <li>• Saved 20+ hours per week</li>
                <li>• Improved data accuracy by 98%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <LeadMagnetBanner />

      {/* Final CTA */}
      <section className="section">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/Home/Final CTA.jpg"
              alt="Ready to automate and scale your business"
              width={1200}
              height={320}
              className="h-64 w-full object-cover sm:h-64"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-slate-900/65 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:bg-slate-900/55">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Ready to Automate and Scale?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/80">
                  Book a free consultation and receive a personalized AI
                  automation roadmap for your business.
                </p>
              </div>
              <Link
                href="/book-consultation"
                className="btn-primary w-full justify-center whitespace-nowrap sm:w-auto"
              >
                Book My Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
