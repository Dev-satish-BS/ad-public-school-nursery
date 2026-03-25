import { Link } from "@tanstack/react-router";
import { Menu, TreePine, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/gallery", label: "Gallery" },
  { to: "/notices", label: "Notices" },
  { to: "/admission", label: "Admission" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-white rounded-pill px-5 py-2.5 shadow-card">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-full bg-school-blue flex items-center justify-center">
              <TreePine className="w-5 h-5 text-school-sky" />
            </div>
            <span className="font-bold text-sm leading-tight text-foreground hidden sm:block">
              A. D Public School <br />
              <span className="text-primary font-semibold text-xs">
                Nursery
              </span>
            </span>
            <span className="font-bold text-sm text-foreground sm:hidden">
              A. D School
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground rounded-pill transition-colors hover:text-foreground"
                activeProps={{
                  className:
                    "bg-school-blue text-foreground px-3 py-1.5 text-sm font-semibold rounded-pill",
                }}
                activeOptions={{ exact: link.to === "/" }}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/admission"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold bg-school-cta text-foreground rounded-pill btn-hover shadow-xs"
              data-ocid="nav.primary_button"
            >
              Enroll Now
            </Link>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 bg-white rounded-2xl shadow-card p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2.5 text-sm font-medium text-muted-foreground rounded-xl hover:bg-muted"
                activeProps={{
                  className:
                    "bg-school-blue text-foreground font-semibold px-4 py-2.5 text-sm rounded-xl",
                }}
                activeOptions={{ exact: link.to === "/" }}
                onClick={() => setOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admission"
              className="mt-2 px-4 py-2.5 text-sm font-semibold bg-school-cta text-foreground rounded-pill text-center"
              onClick={() => setOpen(false)}
              data-ocid="nav.primary_button"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
