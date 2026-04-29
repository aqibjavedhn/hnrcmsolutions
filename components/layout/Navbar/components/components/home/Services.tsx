import Link from "next/link";

const services = [
  "Medical Billing",
  "Credentialing",
  "Denial Management",
  "Virtual Assistants",
  "Patient Help Desk",
];

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Our Core Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service}
              className="glass rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{service}</h3>

              <p className="text-white/70 mt-4">
                High-quality scalable healthcare RCM services designed
                to improve operational efficiency and revenue.
              </p>

              <Link
                href="/services"
                className="inline-block mt-6 text-cyanPrimary"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}