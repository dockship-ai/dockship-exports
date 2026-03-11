import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Globe, Package, Shield } from "lucide-react";

const USP_ITEMS = [
  {
    icon: Shield,
    text: "Certified Compliance — IEC, CDSCO, Pharmexcil, APEDA, FSSAI, Trademark",
  },
  {
    icon: Globe,
    text: "Global Reach — Trusted export partnerships in 50+ countries",
  },
  {
    icon: Package,
    text: "Fast Logistics — Cold-chain and standard logistics tailored to each market",
  },
  {
    icon: CheckCircle,
    text: "Quality Assurance — Rigorous testing meets international pharmacopoeia standards",
  },
];

export default function AboutSection() {
  const sectionRef = useScrollAnimation(0.15);

  return (
    <section
      id="about"
      data-ocid="about.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className="animate-fade-left">
            <p className="section-label mb-3">About Us</p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-6"
              style={{
                color: "oklch(0.18 0.04 258)",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}
            >
              Trusted Globally.
              <br />
              <span style={{ color: "oklch(0.63 0.19 47)" }}>
                Certified Locally.
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              <strong className="text-gray-900">
                Dockship Exports Private Limited
              </strong>{" "}
              is a globally trusted export company specializing in
              pharmaceutical formulations, medical devices, and dermatology
              products. Backed by{" "}
              <strong>IEC, GST, CDSCO, and Trademark</strong> certifications, we
              ensure compliance, quality, and trust in every shipment — from
              India to the world.
            </p>

            {/* USP List */}
            <ul className="space-y-4">
              {USP_ITEMS.map((item, idx) => (
                <li
                  key={item.text}
                  className={`flex items-start gap-3 animate-on-scroll stagger-${idx + 1}`}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "oklch(0.63 0.19 47 / 12%)" }}
                  >
                    <item.icon
                      size={16}
                      style={{ color: "oklch(0.63 0.19 47)" }}
                    />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="about.primary_button"
                className="btn-orange text-sm px-7 py-3 rounded-lg"
              >
                Partner With Us
              </button>
            </div>
          </div>

          {/* Visual column */}
          <div className="animate-fade-right">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/uploads/Screenshot-2024-06-10-181359-1--5.png"
                  alt="Aerial view of Dockship's global container port operations"
                  className="w-full h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating stats card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-5 shadow-xl"
                style={{
                  backgroundColor: "oklch(0.18 0.04 258)",
                  minWidth: "200px",
                }}
              >
                <div className="text-white">
                  <p
                    className="font-display text-3xl font-black"
                    style={{ color: "oklch(0.72 0.17 47)" }}
                  >
                    50+
                  </p>
                  <p className="text-white/70 text-sm font-medium mt-0.5">
                    Countries Served
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-xl p-4 shadow-lg"
                style={{
                  backgroundColor: "white",
                  border: "2px solid oklch(0.63 0.19 47 / 20%)",
                }}
              >
                <p
                  className="font-display text-2xl font-black"
                  style={{ color: "oklch(0.63 0.19 47)" }}
                >
                  6+
                </p>
                <p className="text-gray-600 text-xs font-medium mt-0.5">
                  Certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
