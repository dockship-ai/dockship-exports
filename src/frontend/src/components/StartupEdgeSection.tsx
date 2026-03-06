import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Globe, Shield, TrendingUp, Users, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: Users,
    title: "Trusted Export Partnerships",
    description:
      "We build long-term relationships with buyers, distributors, and logistics partners across 50+ countries — grounded in transparency, reliability, and mutual growth.",
  },
  {
    icon: Shield,
    title: "Fully Certified & Compliant",
    description:
      "IEC, CDSCO, Pharmexcil, FSSAI, and Trademark registrations are fully in place. Compliance is not an afterthought — it is the foundation of every shipment.",
  },
  {
    icon: Award,
    title: "Quality Over Volume",
    description:
      "We prioritise verified, pharma-grade supply chains over speed. Every product we export meets destination-country regulatory standards.",
  },
  {
    icon: Globe,
    title: "Multi-Continent Reach",
    description:
      "Active export lanes across Asia, Africa, the Middle East, and Europe. Our logistics partners ensure last-mile delivery with full documentation.",
  },
  {
    icon: TrendingUp,
    title: "High-Growth Sector Focus",
    description:
      "Dermatology and medical exports are high-demand, high-value sectors. Our dedicated expertise in these categories ensures reliable, specialised supply chains.",
  },
  {
    icon: Zap,
    title: "Agile & Responsive",
    description:
      "As a lean, focused team we move fast. Custom sourcing, rapid quotes, and direct director-level communication — no layers, no delays.",
  },
];

export default function StartupEdgeSection() {
  const sectionRef = useScrollAnimation(0.05);

  return (
    <section
      id="global"
      data-ocid="global.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/global-logistics.dim_1200x600.jpg"
          alt="Global shipping network"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.04 258 / 94%) 0%, oklch(0.18 0.04 258 / 90%) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="section-label mb-3"
            style={{ color: "oklch(0.72 0.17 47)" }}
          >
            Why Partner With Us
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            The Dockship Edge
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Built on certified compliance, global logistics expertise, and a
            commitment to quality — here is what sets Dockship apart.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                style={{ backgroundColor: "oklch(0.18 0.04 258 / 60%)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 18%)" }}
                >
                  <Icon
                    size={22}
                    style={{ color: "oklch(0.72 0.17 47)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="global.primary_button"
            className="btn-orange text-base px-8 py-4 rounded-xl"
          >
            Partner With Us
          </button>
          <button
            type="button"
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="global.secondary_button"
            className="btn-outline-white text-base px-8 py-4 rounded-xl"
          >
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}
