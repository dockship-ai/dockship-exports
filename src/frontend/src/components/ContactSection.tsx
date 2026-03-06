import { useActor } from "@/hooks/useActor";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { toast } from "sonner";
import "./ContactSection.css";

const EMAILJS_SERVICE_ID = "service_qzat8v4";
const EMAILJS_TEMPLATE_ID = "template_cki3cam";
const EMAILJS_PUBLIC_KEY = "rbRLqEVKK1M6xJ4t3";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useScrollAnimation(0.1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setIsSubmitting(true);
    try {
      // Send via EmailJS programmatically to Gmail inbox
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          message: form.message,
          to_email: "dockship.ad@gmail.com",
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY,
      );

      // Also try backend (non-blocking)
      if (actor && !isFetching) {
        actor
          .submitContact(form.name, form.email, form.phone, form.message)
          .catch(() => {});
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again or use WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none transition-all duration-200 focus:ring-2 border border-gray-200 focus:border-transparent bg-white placeholder-gray-400";
  const inputStyle = {
    "--tw-ring-color": "oklch(0.63 0.19 47 / 50%)",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: CTA Banner */}
          <div
            className="rounded-2xl p-8 lg:p-12 animate-fade-left"
            style={{ backgroundColor: "oklch(0.18 0.04 258)" }}
          >
            <p
              className="section-label mb-4"
              style={{ color: "oklch(0.72 0.17 47)" }}
            >
              Let&apos;s Connect
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-black text-white mb-6"
              style={{ letterSpacing: "-0.02em", lineHeight: "1.1" }}
            >
              Ready to partner
              <br />
              with Dockship?
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Whether you&apos;re sourcing pharmaceutical formulations,
              dermatology products, or medical equipment — we have the
              expertise, certifications, and reach to make your export vision a
              reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="contact.primary_button"
                className="btn-orange text-sm px-6 py-3 rounded-lg"
              >
                Book Now
              </button>
              <a
                href={COMPANY.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.secondary_button"
                className="btn-outline-white text-sm px-6 py-3 rounded-lg"
              >
                <SiWhatsapp size={14} />
                Global Connect
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 border-t border-white/10 pt-8">
              <a
                href={`tel:${COMPANY.phones[0]}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 20%)" }}
                >
                  <Phone size={14} style={{ color: "oklch(0.72 0.17 47)" }} />
                </div>
                <span>{COMPANY.phones[0]}</span>
              </a>
              <a
                href={`tel:${COMPANY.phones[1]}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 20%)" }}
                >
                  <Phone size={14} style={{ color: "oklch(0.72 0.17 47)" }} />
                </div>
                <span>{COMPANY.phones[1]}</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 20%)" }}
                >
                  <Mail size={14} style={{ color: "oklch(0.72 0.17 47)" }} />
                </div>
                <span>{COMPANY.email}</span>
              </a>
              <a
                href={COMPANY.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 20%)" }}
                >
                  <MessageCircle
                    size={14}
                    style={{ color: "oklch(0.72 0.17 47)" }}
                  />
                </div>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-fade-right">
            <p className="section-label mb-3">Send a Message</p>
            <h3
              className="font-display text-2xl lg:text-3xl font-black mb-6"
              style={{
                color: "oklch(0.18 0.04 258)",
                letterSpacing: "-0.02em",
              }}
            >
              Get in Touch
            </h3>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="rounded-2xl p-8 text-center border border-green-100"
                style={{ backgroundColor: "oklch(0.97 0.02 142)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "oklch(0.63 0.19 47 / 15%)" }}
                >
                  <svg
                    className="w-7 h-7"
                    style={{ color: "oklch(0.63 0.19 47)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    role="img"
                    aria-label="Message sent successfully"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4
                  className="font-display text-xl font-bold mb-2"
                  style={{ color: "oklch(0.18 0.04 258)" }}
                >
                  Message Sent!
                </h4>
                <p className="text-gray-600 text-sm mb-6">
                  Your message has been delivered directly to our Gmail inbox.
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  data-ocid="contact.secondary_button"
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold underline"
                  style={{ color: "oklch(0.63 0.19 47)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-ocid="contact.form"
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Full Name{" "}
                    <span aria-hidden="true" className="text-orange-600">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.name)
                        setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Your full name"
                    autoComplete="name"
                    data-ocid="contact.name_input"
                    className={`${inputClass} ${errors.name ? "border-red-400 focus:ring-red-300" : ""}`}
                    style={inputStyle}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-xs text-red-600"
                      data-ocid="contact.error_state"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address{" "}
                    <span aria-hidden="true" className="text-orange-600">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.email)
                        setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="your@email.com"
                    autoComplete="email"
                    data-ocid="contact.email_input"
                    className={`${inputClass} ${errors.email ? "border-red-400 focus:ring-red-300" : ""}`}
                    style={inputStyle}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-xs text-red-600"
                      data-ocid="contact.error_state"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    data-ocid="contact.phone_input"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Message{" "}
                    <span aria-hidden="true" className="text-orange-600">
                      *
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.message)
                        setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Tell us about your product requirements, target markets, or any questions..."
                    rows={5}
                    data-ocid="contact.message_textarea"
                    className={`${inputClass} resize-none ${errors.message ? "border-red-400 focus:ring-red-300" : ""}`}
                    style={inputStyle}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-xs text-red-600"
                      data-ocid="contact.error_state"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || isFetching}
                    data-ocid="contact.submit_button"
                    className="send-message-btn disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

                {/* Chat on WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=919791299562"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border-2 transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    borderColor: "#25D366",
                    color: "#25D366",
                    backgroundColor: "transparent",
                  }}
                >
                  <SiWhatsapp size={17} />
                  Chat on WhatsApp
                </a>

                <p className="text-xs text-gray-400 text-center">
                  Your message will be delivered directly to
                  dockship.ad@gmail.com via EmailJS.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
