import { useElementVisible } from "@/hooks/useScrollAnimation";
import { useCallback, useState } from "react";

// Replace with your local asset import if you downloaded a background
import globalBg from "@/assets/global-reach.jpg";
const STATS = [
  { value: 50, suffix: "+", label: "Countries Served" },
  { value: 1000, suffix: "+", label: "Shipments Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Products Exported" },
];
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);

  return { count, start };
}
function StatCounter({
  value,
  suffix,
  label,
}: { value: number; suffix: string; label: string }) {
  const { count, start } = useCounter(value);
  const ref = useElementVisible(start, 0.5);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center px-4 py-6">
      <p
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-black mb-2"
        style={{ color: "oklch(0.72 0.17 47)" }}
        aria-label={`${value}${suffix} ${label}`}
      >
        {count}
        <span>{suffix}</span>
      </p>
      <p className="text-white/70 text-sm sm:text-base font-medium">{label}</p>
    </div>
  );
}
export default function GlobalReachSection() {
  return (
    <section
      id="global"
      data-ocid="global.section"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={globalBg}
          alt="Global shipping and logistics network"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.04 258 / 92%) 0%, oklch(0.18 0.04 258 / 88%) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3" style={{ color: "oklch(0.72 0.17 47)" }}>
            Our Impact
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            A Truly Global Reach
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            From Chennai to continents — Dockship Exports delivers healthcare
            products across the world with precision and trust.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="global.primary_button"
            className="btn-orange text-base px-8 py-4 rounded-xl"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
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
