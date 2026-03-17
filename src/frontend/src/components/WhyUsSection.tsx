import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckSquare, Headphones, Package, Shield } from "lucide-react";
import whyPartnerBg from "@/assets/why-partner-bg.jpg"; // background image
const FEATURES = [
  {
    id: 1,
    Icon: Shield,
    title: "Regulatory Expertise",
    description:
      "Our team navigates complex international drug and device regulations — CDSCO, FDA, CE, and more — so your shipments clear customs without delays.",
  },
  {
    id: 2,
    Icon: Package,
    title: "Cold-Chain Logistics",
    description:
      "Temperature-sensitive products deserve temperature-sensitive care. We manage cold-chain and ambient logistics tailored to each destination.",
  },
  {
    id: 3,
    Icon: Headphones,
    title: "End-to-End Support",
    description:
      "From documentation and labeling to customs clearance and final delivery — our dedicated team guides you at every step of the export journey.",
  },
  {
    id: 4,
    Icon: CheckSquare,
    title: "Quality Assurance",
    description:
      "Every product is tested against international pharmacopoeia and dermatological standards before shipment. Zero compromises on quality.",
  },
];
export default function WhyUsSection() {
  const sectionRef = useScrollAnimation(0.1);
  return (
    <section
      id="why"
      data-ocid="why.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 relative"
      style={{
        backgroundImage: `url(${whyPartnerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-3">Our Advantage</p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: "oklch(0.98 0.003 240)", letterSpacing: "-0.02em" }}
          >
            Why Choose Dockship?
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
            More than an exporter — a trusted global healthcare supply partner
            with deep expertise and genuine care.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 animate-on-scroll stagger-${idx + 1}`}
              style={{
                borderBottom: "3px solid transparent",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderBottomColor =
                  "oklch(0.63 0.19 47)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderBottomColor =
                  "transparent";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ backgroundColor: "oklch(0.63 0.19 47 / 10%)" }}
              >
                <feature.Icon
                  size={22}
                  style={{ color: "oklch(0.63 0.19 47)" }}
                />
              </div>

              {/* Title */}
              <h3
                className="font-display text-lg font-bold mb-2"
                style={{ color: "oklch(0.18 0.04 258)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
