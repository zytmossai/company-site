import Link from "next/link";
import Image from "next/image";

export default function CaseStudiesPage() {
  return (
    <div className="pb-6 pt-6 sm:pb-10 sm:pt-10 lg:pb-16">
      <div className="container-page space-y-8 sm:space-y-12">
        {/* Hero with overlay */}
        <div className="relative overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/Case Studies/Hero.jpg"
            alt="AI automation in action — before and after results"
            width={1200}
            height={480}
            className="h-[180px] w-full object-cover sm:h-72 lg:h-80"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">Case Studies</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              AI Automation in Action
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
              Structured examples of how we help businesses reduce operational
              costs, save time, and improve accuracy with custom AI automation.
            </p>
          </div>
        </div>

        {/* Results highlight */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <p className="section-heading">By the Numbers</p>
            <h2 className="section-title">Consistent, Measurable Impact</h2>
            <p className="section-subtitle">
              Every engagement is tracked against clear outcomes. Here&apos;s
              what our clients typically achieve within the first 90 days.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: "Up to 40%", label: "Cost Reduction" },
              { value: "20+ hrs", label: "Saved Weekly" },
              { value: "98%", label: "Data Accuracy" }
            ].map((stat) => (
              <div key={stat.label} className="card-inner-box text-center">
                <p className="stat-value text-xl">{stat.value}</p>
                <p className="stat-label mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case study cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* E-commerce */}
          <article className="card-surface overflow-hidden p-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Case Studies/Case Study Card - Ecommerce Brand.jpg"
                alt="E-commerce brand case study — 30% efficiency gain"
                width={600}
                height={400}
                className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <p className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                Client Overview
              </p>
              <h2 className="mt-2 text-card-title text-lg font-semibold">
                E-commerce Brand
              </h2>
              <p className="mt-2 text-card-muted text-sm">
                Mid-size e-commerce company processing hundreds of orders daily
                with manual workflows.
              </p>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Challenge
                </h3>
                <p className="mt-2 text-card-body text-sm">
                  Manual order processing and reporting causing delays, errors,
                  and rising operational costs.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Solution
                </h3>
                <p className="mt-2 text-card-body text-sm">
                  Custom AI-powered order and reporting automation integrated
                  directly with their e-commerce platform and CRM.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Results
                </h3>
                <ul className="mt-2 space-y-1.5 text-card-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    30% operational cost reduction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    18 hours saved weekly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    Improved reporting accuracy
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Digital Agency */}
          <article className="card-surface overflow-hidden p-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Case Studies/Case Study Card - Digital Agency.jpg"
                alt="Digital agency case study — 50% faster reporting"
                width={600}
                height={400}
                className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <p className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                Client Overview
              </p>
              <h2 className="mt-2 text-card-title text-lg font-semibold">
                Digital Agency
              </h2>
              <p className="mt-2 text-card-muted text-sm">
                Growth-focused agency managing recurring reporting and content
                operations for multiple clients.
              </p>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Challenge
                </h3>
                <p className="mt-2 text-card-body text-sm">
                  Manual report creation and content approvals taking hours every
                  week and slowing delivery.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Solution
                </h3>
                <p className="mt-2 text-card-body text-sm">
                  AI-assisted reporting templates and workflow automation for
                  content status tracking and approvals.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                  The Results
                </h3>
                <ul className="mt-2 space-y-1.5 text-card-body text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    50% faster reporting cycles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    Fewer missed deadlines
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-indigo-500">•</span>
                    Increased client satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Final CTA with background image */}
        <section className="relative overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/Case Studies/Final CTA.jpg"
            alt="Get similar results for your business"
            width={1200}
            height={320}
            className="h-64 w-full object-cover sm:h-64"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-slate-900/65 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:bg-slate-900/55">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Get Similar Results for Your Business
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Share your current processes and we&apos;ll outline a tailored
                AI automation plan focused on measurable impact.
              </p>
            </div>
            <Link href="/book-consultation" className="btn-primary w-full justify-center whitespace-nowrap sm:w-auto">
              Book a Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
