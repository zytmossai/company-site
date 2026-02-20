import Image from "next/image";

const industries = [
  {
    title: "E-commerce",
    items: [
      "Order automation",
      "Customer support bots",
      "Inventory and fulfillment workflows"
    ],
    image: "/images/Industries/E-commerce.jpg",
    imageAlt: "E-commerce automation and fulfillment"
  },
  {
    title: "Agencies",
    items: [
      "Client reporting automation",
      "Content workflow automation",
      "Internal project coordination"
    ],
    image: "/images/Industries/Agencies.jpg",
    imageAlt: "Agency workflow and reporting automation"
  },
  {
    title: "Healthcare",
    items: [
      "Document automation",
      "AI-driven analytics",
      "Operational workflow support"
    ],
    image: "/images/Industries/Healthcare.jpg",
    imageAlt: "Healthcare document and analytics automation"
  },
  {
    title: "Finance",
    items: [
      "Risk analysis automation",
      "Data compliance workflows",
      "Reporting and reconciliation support"
    ],
    image: "/images/Industries/Finance.jpg",
    imageAlt: "Finance risk and compliance automation"
  }
];

export default function IndustriesPage() {
  return (
    <div className="section">
      <div className="container-page space-y-6 sm:space-y-10">
        <header className="max-w-2xl">
          <p className="section-heading">Industries</p>
          <h1 className="section-title">Where We Deliver Impact</h1>
          <p className="section-subtitle">
            We work with teams across e-commerce, agencies, healthcare,
            finance, and professional services that want to scale through
            intelligent automation.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <section
              key={industry.title}
              className="card-surface overflow-hidden p-0"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  width={600}
                  height={320}
                  className="h-[132px] w-full object-cover sm:h-52 transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h2 className="text-card-title text-lg font-semibold">
                  {industry.title}
                </h2>
                <ul className="mt-3 space-y-1.5 text-card-body text-sm">
                  {industry.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

