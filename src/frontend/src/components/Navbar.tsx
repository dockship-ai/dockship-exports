import { COMPANY } from "@/lib/constants";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Global Reach", href: "#global" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle background when scrolled
      setIsScrolled(currentScrollY > 60);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      data-ocid="nav.section"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        animation: "navbarSlideDown 0.5s ease forwards",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition:
          "transform 0.35s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: isScrolled ? "oklch(0.18 0.04 258)" : "transparent",
        boxShadow: isScrolled
          ? "0 4px 24px oklch(0.18 0.04 258 / 40%)"
          : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 focus-visible:outline-none"
            aria-label="Dockship Exports - scroll to top"
          >
            <img
              src="/assets/uploads/unnamed-removebg-preview-1.png"
              alt="Dockship Exports Logo"
              className="h-9 w-9 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span
              className="font-display text-base sm:text-lg font-bold text-white tracking-tight leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Dockship Exports Pvt. Ltd.
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid="nav.link"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 relative group focus-visible:outline-none focus-visible:text-white"
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "oklch(0.63 0.19 47)" }}
                />
              </button>
            ))}
          </nav>

          {/* Right Side: Social Icons + Phone + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Social Icons — desktop */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <SiWhatsapp size={16} />
              </a>
            </div>

            {/* Phone pill */}
            <a
              href={`tel:${COMPANY.phones[0]}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label={`Call us at ${COMPANY.phones[0]}`}
            >
              <Phone size={11} />
              <span>{COMPANY.phones[0]}</span>
            </a>

            {/* Hamburger — mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden py-4 border-t border-white/10"
            style={{ animation: "mobileMenuOpen 0.25s ease forwards" }}
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  data-ocid="nav.link"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile social row */}
              <div className="flex items-center gap-4 px-4 pt-3 mt-2 border-t border-white/10">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <SiInstagram size={18} />
                </a>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <SiLinkedin size={18} />
                </a>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <SiWhatsapp size={18} />
                </a>
                <a
                  href={`tel:${COMPANY.phones[0]}`}
                  className="flex items-center gap-1.5 ml-auto text-xs font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <Phone size={12} />
                  <span>{COMPANY.phones[0]}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
