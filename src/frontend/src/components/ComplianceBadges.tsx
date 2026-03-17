import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";
const CERTIFICATIONS = [
  {
    id: 1,
    short: "FSSAI",
    name: "Food Safety & Standards Authority of India",
    description: "Licensed for food-adjacent product exports",
   img: "/assets/fssai.jpg",
  },
  {
    id: 2,
    short: "APEDA",
    name: "Agricultural & Processed Food Products Export",
    description: "Authorized under APEDA for export development",
    img: "/assets/apeda.jpg",
  },
  {
    id: 3,
    short: "IEC",
    name: "Import Export Code — DGFT",
    description: "Government-issued code for international trade",
    img: "/assets/iec.webp",
  },
  {
    id: 4,
    short: "Pharmexcil",
    name: "Pharmaceuticals Export Promotion Council",
    description: "Member of India's leading pharma export body",
   img: "/assets/pharmexcil.png",
  },
  {
    id: 5,
    short: "Spices Board",
    name: "Spices Board of India",
    description: "Certified member of Spices Board India",
    img: "/assets/Spices_Board.jpg",
  },
  {
    id: 6,
    short: "Drug Licensed",
    name: "Drugs Licensed",
    description: "Regulatory approval for drugs & medical devices",
    img: "/assets/drug-license-registration_(1).png",
  },
];
export default function ComplianceBadges() {
  const sectionRef = useScrollAnimation(0.1);
  return (
    <section
      id="certifications"
      data-ocid="certifications.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-3" style={{ color: "oklch(0.72 0.17 47)" }}>
            Compliance & Trust
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Certified &amp; Compliant
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Every shipment backed by internationally recognized certifications —
            your assurance of quality, legality, and trust.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.id}
              className={`cert-badge bg-white rounded-xl p-5 flex flex-col items-center text-center animate-on-scroll stagger-${idx + 1}`}
            >
              {/* Logo Image */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 overflow-hidden"
                style={{ backgroundColor: "oklch(0.97 0.003 240)" }}
              >
                <img
                  src={cert.img}
                  alt={`${cert.short} certification logo`}
                  className="w-full h-full object-contain p-1"
                  loading="lazy"
                />
              </div>

              {/* Short name */}
              <p
                className="font-display text-base font-black mb-1"
                style={{ color: "oklch(0.18 0.04 258)" }}
              >
                {cert.short}
              </p>

              {/* Full name */}
              <p
                className="text-xs font-semibold mb-1.5 leading-tight"
                style={{ color: "oklch(0.63 0.19 47)" }}
              >
                {cert.name}
              </p>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-snug hidden lg:block">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-on-scroll stagger-4">
          <p
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
            style={{
              backgroundColor: "oklch(0.63 0.19 47 / 15%)",
              border: "1px solid oklch(0.63 0.19 47 / 30%)",
            }}
          >
            <Shield size={14} style={{ color: "oklch(0.72 0.17 47)" }} />
            Verified &amp; Trusted by Indian and International Regulatory Authorities
          </p>
        </div>
      </div>
    </section>
  );
}
