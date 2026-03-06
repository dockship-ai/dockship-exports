import { COMPANY } from "@/lib/constants";
import { ChevronRight, Heart, Mail, Phone } from "lucide-react";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Certifications", href: "#certifications" },
  { label: "Global Reach", href: "#global" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const CERTIFICATIONS_LIST = [
  "IEC — Import Export Code",
  "CDSCO — Drug Regulator",
  "Pharmexcil Member",
  "APEDA Authorized",
  "FSSAI Licensed",
  "Trademark Registered",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "dockship-exports";

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.section"
      style={{ backgroundColor: "oklch(0.12 0.03 258)" }}
    >
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/assets/uploads/unnamed-removebg-preview-1.png"
                alt="AD Logo"
                className="h-10 w-10 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div>
                <span
                  className="font-display text-2xl font-black tracking-tight text-white"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  DOCK
                </span>
                <span
                  className="font-display text-2xl font-black tracking-tight"
                  style={{
                    color: "oklch(0.63 0.19 47)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  SHIP
                </span>
                <span className="ml-2 text-xs font-semibold text-white/50 tracking-widest uppercase">
                  EXPORTS
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              India&apos;s trusted export partner for pharmaceutical
              formulations, dermatology products, and medical equipment.
              Certified. Compliant. Global.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                style={{ backgroundColor: "oklch(0.63 0.19 47 / 12%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 25%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 12%)";
                }}
              >
                <SiInstagram size={15} />
              </a>
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                style={{ backgroundColor: "oklch(0.63 0.19 47 / 12%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 25%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 12%)";
                }}
              >
                <SiLinkedin size={15} />
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                style={{ backgroundColor: "oklch(0.63 0.19 47 / 12%)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 25%)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "oklch(0.63 0.19 47 / 12%)";
                }}
              >
                <SiWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-display text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.72 0.17 47)" }}
            >
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
                      data-ocid="footer.link"
                    >
                      <ChevronRight
                        size={13}
                        className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                        style={{ color: "oklch(0.63 0.19 47)" }}
                      />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Certifications */}
          <div>
            <h4
              className="font-display text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.72 0.17 47)" }}
            >
              Certifications
            </h4>
            <ul className="space-y-2.5">
              {CERTIFICATIONS_LIST.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.63 0.19 47)" }}
                  />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="font-display text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "oklch(0.72 0.17 47)" }}
            >
              Contact Us
            </h4>
            <address className="not-italic space-y-3">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone
                    size={13}
                    style={{ color: "oklch(0.63 0.19 47)", flexShrink: 0 }}
                  />
                  {phone}
                </a>
              ))}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail
                  size={13}
                  style={{ color: "oklch(0.63 0.19 47)", flexShrink: 0 }}
                />
                {COMPANY.email}
              </a>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "oklch(1 0 0 / 8%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            {/* Copyright */}
            <p>
              &copy; {currentYear} Dockship Exports Private Limited | Directors:{" "}
              <span className="text-white/60">
                {COMPANY.directors.join(" & ")}
              </span>
            </p>

            {/* Caffeine attribution */}
            <p className="flex items-center gap-1.5">
              Built with{" "}
              <Heart
                size={11}
                className="fill-current"
                style={{ color: "oklch(0.63 0.19 47)" }}
              />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/60 hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
