import { ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.png"; // permanent white logo
import heroVideo from "@/assets/hero-DPTZ3cKg.mp4";        // bundled video asset
export default function HeroSection() {
  const handleScrollDown = () => {
    const aboutEl = document.getElementById("about");
    if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookNow = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          tabIndex={-1}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.10 0.04 258 / 82%) 0%, oklch(0.15 0.04 258 / 70%) 50%, oklch(0.12 0.03 258 / 85%) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.98 0.003 240))",
          }}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo overlay */}
        <img
          src={logoWhite}
          alt="Dockship Logo"
          className="h-32 w-auto mx-auto mb-8"
        />

        {/* Section label */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-widest uppercase"
          style={{
            animation: "heroFadeUp 0.6s ease 0.1s both",
            backgroundColor: "oklch(0.63 0.19 47 / 15%)",
            border: "1px solid oklch(0.63 0.19 47 / 35%)",
            color: "oklch(0.83 0.17 47)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "oklch(0.63 0.19 47)",
              animation: "pulse-orange 2s infinite",
            }}
          />
          Globally Certified Export Company
        </div>

        {/* Headline */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
          style={{
            animation: "heroFadeUp 0.7s ease 0.2s both",
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
          }}
        >
          Global Trade in{" "}
          <span className="block mt-1" style={{ color: "oklch(0.72 0.17 47)" }}>
            Dermatology &amp;
          </span>
          <span className="block mt-1">Medical Exports</span>
        </h1>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          style={{ animation: "heroFadeUp 0.7s ease 0.45s both" }}
        >
          <button
            type="button"
            onClick={handleBookNow}
            data-ocid="hero.primary_button"
            className="text-base px-10 py-4 rounded-xl font-black tracking-wide uppercase transition-all duration-300 shadow-2xl"
            style={{
              backgroundColor: "oklch(0.63 0.19 47)",
              color: "#fff",
              border: "2px solid oklch(0.72 0.19 47)",
              boxShadow:
                "0 0 32px oklch(0.63 0.19 47 / 60%), 0 4px 24px oklch(0.63 0.19 47 / 40%)",
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.08em",
            }}
          >
            Book Now
          </button>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12 text-white/50 text-xs font-semibold tracking-wider uppercase"
          style={{ animation: "heroFadeUp 0.7s ease 0.65s both" }}
        >
          {[
            "IEC Certified",
            "CDSCO Approved",
            "Pharmexcil Member",
            "FSSAI Licensed",
          ].map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "oklch(0.63 0.19 47)" }}
              />
              {cert}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={handleScrollDown}
        aria-label="Scroll down to learn more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-full p-2"
        style={{ animation: "float-chevron 1.8s ease-in-out infinite" }}
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

// Force clean build 2026-03-17 18:52:20
