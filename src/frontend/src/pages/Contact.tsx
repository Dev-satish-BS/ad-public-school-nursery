import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Contact \u2013 A. D Public School Nursery";
  }, []);

  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      setError("Not connected. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        message: form.message,
        timestamp: BigInt(Date.now()),
      });
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-x-hidden">
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.906 0.04 355 / 0.3) 0%, oklch(0.912 0.04 215 / 0.3) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We&apos;d love to hear from you. Reach out for admissions, queries,
            or to schedule a visit.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 reveal">
            <h2 className="text-2xl font-extrabold text-foreground mb-6">
              Contact Information
            </h2>

            {[
              {
                icon: MapPin,
                label: "Address",
                value:
                  "123 Sunshine Avenue, Andheri West, Mumbai \u2013 400058",
                color: "bg-school-blush",
                href: undefined,
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 98765 43210",
                color: "bg-school-blue",
                href: "tel:+919876543210",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@adpublicschool.in",
                color: "bg-school-yellow",
                href: "mailto:info@adpublicschool.in",
              },
            ].map(({ icon: Icon, label, value, color, href }) => (
              <div
                key={label}
                className="flex gap-4 bg-white rounded-2xl p-4 shadow-card"
              >
                <div
                  className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-medium text-foreground hover:text-primary"
                      data-ocid="contact.link"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-pill text-sm font-semibold btn-hover shadow-xs"
                data-ocid="contact.primary_button"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-pill text-sm font-semibold btn-hover shadow-xs"
                data-ocid="contact.secondary_button"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden h-52 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8311!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzExLjAiTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="A. D Public School Location on Google Maps"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div
              className="bg-white rounded-3xl p-8 shadow-card"
              data-ocid="contact.modal"
            >
              {success ? (
                <div
                  className="text-center py-10"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 font-semibold bg-primary text-white rounded-pill"
                    data-ocid="contact.primary_button"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold text-foreground mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    We usually respond within a few hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-medium text-foreground mb-1 block"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-medium text-foreground mb-1 block"
                      >
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="text-sm font-medium text-foreground mb-1 block"
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="text-sm font-medium text-foreground mb-1 block"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>
                    {error && (
                      <p
                        className="text-destructive text-sm"
                        data-ocid="contact.error_state"
                      >
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 font-semibold bg-primary text-white rounded-pill btn-hover flex items-center justify-center gap-2 disabled:opacity-60"
                      data-ocid="contact.submit_button"
                    >
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
