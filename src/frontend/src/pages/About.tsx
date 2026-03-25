import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const teachers = [
  {
    name: "Mrs. Anita Sharma",
    role: "Head Teacher & Founder",
    color: "bg-school-blue",
    emoji: "\uD83D\uDC69\u200D\uD83C\uDFEB",
  },
  {
    name: "Ms. Pooja Nair",
    role: "Nursery Coordinator",
    color: "bg-school-blush",
    emoji: "\uD83D\uDC69",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Activity & Sports Head",
    color: "bg-school-yellow",
    emoji: "\uD83E\uDDD1\u200D\uD83C\uDFA8",
  },
  {
    name: "Ms. Divya Menon",
    role: "Music & Arts Teacher",
    color: "bg-school-cta",
    emoji: "\uD83D\uDC69\u200D\uD83C\uDFA4",
  },
];

const methodologies = [
  {
    title: "Play-Based Learning",
    icon: "\uD83C\uDFAE",
    desc: "Children learn best through play. Our structured play sessions build cognitive, social, and emotional skills naturally.",
    color: "bg-school-blue",
  },
  {
    title: "Montessori Approach",
    icon: "\uD83D\uDD2C",
    desc: "Child-led exploration with carefully designed materials that encourage independence and self-discovery.",
    color: "bg-school-blush",
  },
  {
    title: "Story & Language",
    icon: "\uD83D\uDCD6",
    desc: "Daily storytime, phonics, and conversations to build strong language foundations from an early age.",
    color: "bg-school-yellow",
  },
];

const safetyMeasures = [
  "24/7 CCTV surveillance across campus",
  "Biometric entry & exit tracking",
  "Trained female caretakers always on duty",
  "Fire safety equipment & regular drills",
  "Child-proof furniture and play equipment",
  "Medical room with first aid supplies",
];

const safetyIcons = [
  { emoji: "\uD83D\uDEE1\uFE0F", label: "Secure", color: "bg-school-blue" },
  { emoji: "\uD83D\uDCF8", label: "CCTV", color: "bg-school-blush" },
  { emoji: "\uD83C\uDFE5", label: "Medical", color: "bg-school-yellow" },
  { emoji: "\uD83D\uDD11", label: "Biometric", color: "bg-school-cta" },
];

export default function About() {
  useScrollReveal();
  useEffect(() => {
    document.title = "About Us \u2013 A. D Public School Nursery";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Page Hero */}
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.906 0.04 355 / 0.3) 0%, oklch(0.912 0.04 215 / 0.3) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/70 text-xs font-semibold px-3 py-1 rounded-pill mb-4">
            Our Story
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            About A. D Public School
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of nurturing over 3,000+ young minds since 2005, built on
            love, trust, and excellence.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Our Story &amp; Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A. D Public School Nursery was established in 2005 by Mrs. Anita
              Sharma with a vision to create a school where children don&apos;t
              just study&#x2014;they thrive. Located in the heart of Andheri
              West, our school has been a beacon of quality early childhood
              education for nearly two decades.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe every child is born with unique gifts. Our role is to
              create the perfect environment where those gifts can flourish.
              Through a blend of structured learning, free play, arts, music,
              and physical activity, we prepare children for school, and more
              importantly, for life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our classrooms are bright, welcoming spaces filled with books, art
              supplies, building blocks, and wonder. Every corner is designed to
              spark curiosity and encourage exploration.
            </p>
          </div>
          <div className="reveal">
            <img
              src="/assets/generated/hero-classroom.dim_800x600.png"
              alt="Inside our bright and welcoming school campus"
              className="w-full h-80 object-cover rounded-3xl shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 px-4 bg-school-blue/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              Teaching Methodology
            </h2>
            <p className="text-muted-foreground">
              Our multi-modal approach ensures every child learns in the way
              that suits them best.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {methodologies.map((m, i) => (
              <div
                key={m.title}
                className="reveal bg-white rounded-3xl p-7 shadow-card card-hover text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
                data-ocid={`methodology.card.${i + 1}`}
              >
                <div
                  className={`w-16 h-16 ${m.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl`}
                  aria-hidden="true"
                >
                  {m.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {m.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-block bg-school-blush text-xs font-semibold px-3 py-1 rounded-pill mb-4">
              Safety First
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mb-4">
              Your Child&apos;s Safety is Our Priority
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We have invested in world-class safety infrastructure to ensure
              every parent can drop their child at our gates with complete peace
              of mind.
            </p>
            <ul className="space-y-3">
              {safetyMeasures.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div
                    className="w-5 h-5 rounded-full bg-school-blue flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-xs">&#x2713;</span>
                  </div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {safetyIcons.map(({ emoji, label, color }) => (
              <div
                key={label}
                className={`${color} rounded-3xl p-6 flex flex-col items-center justify-center aspect-square`}
              >
                <span className="text-4xl mb-2" aria-hidden="true">
                  {emoji}
                </span>
                <p className="font-bold text-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 px-4 bg-school-yellow/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-3">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              Passionate educators who make school a second home for your little
              one.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((t, i) => (
              <div
                key={t.name}
                className="reveal bg-white rounded-3xl p-6 text-center shadow-card card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`staff.card.${i + 1}`}
              >
                <div
                  className={`w-20 h-20 ${t.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}
                  aria-hidden="true"
                >
                  {t.emoji}
                </div>
                <h4 className="font-bold text-foreground mb-1">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-foreground text-white rounded-3xl p-10 shadow-card reveal">
          <h2 className="text-3xl font-extrabold mb-4">
            Come Visit Our Campus
          </h2>
          <p className="text-white/70 mb-6">
            Schedule a free campus visit and see why thousands of parents trust
            us with their children.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/admission"
              className="px-7 py-3 font-semibold bg-school-cta text-foreground rounded-pill btn-hover"
              data-ocid="about.primary_button"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 font-semibold bg-white/10 text-white rounded-pill hover:bg-white/20 transition btn-hover"
              data-ocid="about.secondary_button"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
