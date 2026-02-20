import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "AI Workflow Automation",
    description:
      "We design automation systems that eliminate repetitive manual tasks and increase operational efficiency.",
    includes: [
      "Data entry automation",
      "Document processing",
      "Reporting automation",
      "Task orchestration"
    ],
    image: "/images/Services/AI Workflow Automation.jpg",
    imageAlt: "AI workflow automation — robotic arm processing documents"
  },
  {
    title: "AI Integration & API Development",
    description:
      "We integrate AI into your existing systems to ensure seamless operations and data flow.",
    includes: [
      "CRM integration",
      "ERP integration",
      "Custom API connections",
      "Third-party automation"
    ],
    image: "/images/Services/AI Integration & API Development.jpg",
    imageAlt: "AI integration and API development visualization"
  },
  {
    title: "AI Consulting & Strategy",
    description:
      "We help you build a structured automation roadmap that aligns with your business goals.",
    includes: [
      "AI readiness assessment",
      "ROI analysis",
      "Implementation strategy",
      "Process optimization"
    ],
    image: "/images/Services/AI Consulting & Strategy.jpg",
    imageAlt: "AI consulting and strategy session"
  },
  {
    title: "Custom AI Development",
    description:
      "When off-the-shelf tools are not enough, we build custom AI solutions aligned to your operations.",
    includes: [
      "Machine learning models",
      "Predictive analytics",
      "NLP-based solutions",
      "Computer vision solutions"
    ],
    image: "/images/Services/Custom AI Development.jpg",
    imageAlt: "Custom AI development — machine learning and neural networks"
  }
];

export default function ServicesPage() {
  return (
    <div className="pb-6 pt-6 sm:pb-10 sm:pt-10 lg:pb-16">
      <div className="container-page space-y-10 sm:space-y-16">
        <header className="max-w-2xl">
          <p className="section-heading">Services</p>
          <h1 className="section-title">Custom AI Automation Services</h1>
          <p className="section-subtitle">
            We provide end-to-end AI automation solutions tailored to your
            operational needs—from strategy and design to implementation and
            optimization.
          </p>
        </header>

        <div className="space-y-10 sm:space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  isEven ? "" : "md:[direction:rtl]"
                }`}
              >
                <div className="overflow-hidden rounded-2xl shadow-soft md:[direction:ltr]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={420}
                    className="h-[132px] w-full object-cover sm:h-72"
                  />
                </div>
                <div className="md:[direction:ltr]">
                  <h2 className="text-card-title text-xl font-semibold sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="text-card-muted mt-3 text-sm">
                    {service.description}
                  </p>
                  <p className="mt-5 section-heading text-xs font-semibold uppercase tracking-[0.2em]">
                    Includes
                  </p>
                  <ul className="mt-3 space-y-2 text-card-body text-sm">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-indigo-500">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-consultation"
                    className="btn-secondary mt-6 inline-flex w-full justify-center sm:w-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <section className="card-surface">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-card-title text-lg font-semibold">
                Not Sure Where to Start?
              </h2>
              <p className="mt-2 max-w-xl text-card-muted text-sm">
                Schedule a free strategy call and we&apos;ll assess your current
                workflows and identify high-impact automation opportunities.
              </p>
            </div>
            <Link href="/book-consultation" className="btn-primary w-full justify-center whitespace-nowrap sm:w-auto">
              Book a Free Consultation
            </Link>
          </div>
          <p className="mt-3 text-page-muted text-xs">
            Pricing: Custom based on scope and complexity. Internally, we work
            across small ($5k–$15k), mid-size ($15k–$50k), and enterprise
            ($50k+) implementations.
          </p>
        </section>
      </div>
    </div>
  );
}
