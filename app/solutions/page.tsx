import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Customer Support Automation",
    items: [
      "AI chatbots",
      "Ticket classification",
      "Automated responses",
      "Customer data routing"
    ],
    image: "/images/Solutions/Customer Support.jpg",
    imageAlt: "AI-powered customer support automation"
  },
  {
    title: "Sales Automation",
    items: [
      "Lead qualification",
      "CRM updates",
      "Automated follow-ups",
      "Sales analytics"
    ],
    image: "/images/Solutions/Sales Automation.jpg",
    imageAlt: "Sales automation and CRM integration"
  },
  {
    title: "Operations Automation",
    items: [
      "Inventory forecasting",
      "Order processing",
      "Data extraction",
      "Workflow orchestration"
    ],
    image: "/images/Solutions/Operations Automation.jpg",
    imageAlt: "Operations and supply chain automation"
  },
  {
    title: "Finance Automation",
    items: [
      "Invoice automation",
      "Expense categorization",
      "Financial reporting",
      "Risk analysis"
    ],
    image: "/images/Solutions/Finance Automation.jpg",
    imageAlt: "Finance and accounting automation"
  }
];

export default function SolutionsPage() {
  return (
    <div className="pb-6 pt-6 sm:pb-10 sm:pt-10 lg:pb-16">
      <div className="container-page space-y-8 sm:space-y-12">
        <header className="max-w-2xl">
          <p className="section-heading">Solutions</p>
          <h1 className="section-title">AI Solutions by Business Function</h1>
          <p className="section-subtitle">
            AI solutions customized for key business functions—customer support,
            sales, operations, and finance.
          </p>
        </header>

        {/* Hero image */}
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/Solutions/Hero.jpg"
            alt="AI solutions across customer support, sales, operations and finance"
            width={1200}
            height={480}
            className="h-[132px] w-full object-cover sm:h-72 lg:h-80"
            priority
          />
        </div>

        {/* Solution cards with images */}
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.title} className="card-surface overflow-hidden p-0">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={solution.image}
                  alt={solution.imageAlt}
                  width={600}
                  height={340}
                  className="h-[132px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-52"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="text-card-title text-lg font-semibold">
                  {solution.title}
                </h2>
                <ul className="mt-3 space-y-1.5 text-card-body text-sm">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-indigo-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with background image */}
        <section className="relative overflow-hidden rounded-2xl shadow-soft">
          <Image
            src="/images/Solutions/CTA Section.jpg"
            alt="Book a free workflow assessment"
            width={1200}
            height={320}
            className="h-64 w-full object-cover sm:h-64"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 bg-slate-900/65 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:bg-slate-900/55">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Want to See How This Applies to Your Business?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80">
                Book a free workflow assessment and we&apos;ll map concrete AI
                automation opportunities across your key processes.
              </p>
            </div>
            <Link
              href="/book-consultation"
              className="btn-primary w-full justify-center whitespace-nowrap sm:w-auto"
            >
              Book a Free Workflow Assessment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
