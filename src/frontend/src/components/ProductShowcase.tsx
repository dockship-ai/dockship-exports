import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    title: "Dermatology Products",
    image: "/assets/generated/dermatology-products.dim_800x500.jpg",
    alt: "Premium dermatology skincare serums and creams — Dockship Exports",
    description:
      "Premium skincare serums, anti-aging creams, medicated formulations for dermatological export. Compliant with global standards for sensitive-skin care.",
    tags: ["Serums", "Creams", "Medicated Formulations"],
    animClass: "animate-fade-left",
    stagger: 1,
  },
  {
    id: 2,
    title: "Pharmaceutical Formulations",
    image: "/assets/generated/pharma-formulations.dim_800x500.jpg",
    alt: "Pharmaceutical tablets, capsules and blister packs — Dockship Exports",
    description:
      "Tablets, capsules, syrups, injectables — meeting global pharmacopoeia standards. GMP-certified manufacturing with end-to-end quality traceability.",
    tags: ["Tablets", "Capsules", "Injectables"],
    animClass: "animate-on-scroll",
    stagger: 2,
  },
  {
    id: 3,
    title: "Medical Equipment",
    image: "/assets/generated/medical-equipment.dim_800x500.jpg",
    alt: "Medical diagnostic devices and surgical instruments — Dockship Exports",
    description:
      "Diagnostic devices, surgical instruments, monitoring equipment for hospitals and clinics worldwide. CDSCO-approved, globally shipped.",
    tags: ["Diagnostic Devices", "Surgical Instruments", "Monitoring"],
    animClass: "animate-fade-right",
    stagger: 3,
  },
];

export default function ProductShowcase() {
  const sectionRef = useScrollAnimation(0.1);

  return (
    <section
      id="products"
      data-ocid="products.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.98 0.003 240)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <p className="section-label mb-3">What We Export</p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mb-4"
            style={{ color: "oklch(0.18 0.04 258)", letterSpacing: "-0.02em" }}
          >
            Our Product Portfolio
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Three verticals of global healthcare exports — all backed by
            certified compliance and trusted logistics.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              data-ocid={`products.item.${product.id}`}
              className={`product-card bg-white rounded-2xl overflow-hidden shadow-md cursor-default group ${product.animClass} stagger-${product.stagger}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Orange gradient on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.63 0.19 47 / 25%) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-display text-xl font-bold mb-3 transition-colors duration-200"
                  style={{ color: "oklch(0.18 0.04 258)" }}
                >
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "oklch(0.63 0.19 47 / 10%)",
                        color: "oklch(0.55 0.18 47)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
                  style={{ color: "oklch(0.63 0.19 47)" }}
                  aria-label={`Enquire about ${product.title}`}
                >
                  <span className="group-hover/link:underline">
                    Enquire Now
                  </span>
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
