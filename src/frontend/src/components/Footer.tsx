import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/programs", label: "Programs" },
  { path: "/gallery", label: "Gallery" },
  { path: "/admission", label: "Admission" },
  { path: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white/5 rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-school-sky/20 flex items-center justify-center">
                <span className="text-school-blue text-lg" aria-hidden="true">
                  &#x1F333;
                </span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">
                  A. D Public School
                </p>
                <p className="text-xs text-white/60">Nursery</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Nurturing little minds with love, creativity, and world-class
              early education since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-school-cta">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    data-ocid="nav.link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-school-cta">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-school-pink shrink-0" />
                123 Sunshine Avenue, Andheri West, Mumbai - 400058
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex gap-2 text-sm text-white/70 hover:text-white"
                  data-ocid="contact.link"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-school-blue shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@adpublicschool.in"
                  className="flex gap-2 text-sm text-white/70 hover:text-white"
                  data-ocid="contact.link"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-school-cta shrink-0" />
                  info@adpublicschool.in
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold mb-4 text-school-cta">Find Us</h4>
            <div className="rounded-xl overflow-hidden h-32">
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
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {year}. Built with{" "}
          <span className="text-school-pink">&#x2665;</span> using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
