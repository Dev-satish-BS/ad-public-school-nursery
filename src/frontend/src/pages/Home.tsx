import { Link } from "@tanstack/react-router";
import { GraduationCap, Palette, Shield, Star } from "lucide-react";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  {
    icon: Shield,
    label: "Safe & Secure Campus",
    desc: "CCTV-monitored, gated campus with trained security staff for your child's safety.",
    cardBg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    accentColor: "bg-school-blue",
  },
  {
    icon: GraduationCap,
    label: "Experienced Teachers",
    desc: "Qualified educators with 10+ years of early childhood development expertise.",
    cardBg: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-400",
    accentColor: "bg-school-blush",
  },
  {
    icon: Palette,
    label: "Activity-Based Learning",
    desc: "Hands-on activities, art, music, and play that make learning truly joyful.",
    cardBg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    accentColor: "bg-school-yellow",
  },
  {
    icon: Star,
    label: "Fun & Friendly Environment",
    desc: "A warm, inclusive atmosphere where every child feels loved and celebrated.",
    cardBg: "bg-lime-50",
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
    accentColor: "bg-school-cta",
  },
];

const programs = [
  {
    title: "Playgroup",
    age: "1.5 \u2013 2.5 years",
    desc: "Gentle introduction to structured play and social interaction in a cozy, safe setting.",
    img: "/assets/generated/program-playgroup.dim_600x400.png",
    tagBg: "bg-sky-100 text-sky-700",
  },
  {
    title: "Nursery",
    age: "2.5 \u2013 3.5 years",
    desc: "Building language, creativity, and motor skills through guided activities and storytelling.",
    img: "/assets/generated/program-nursery.dim_600x400.png",
    tagBg: "bg-pink-100 text-pink-700",
  },
  {
    title: "LKG / UKG",
    age: "3.5 \u2013 5.5 years",
    desc: "A solid academic foundation with phonics, numbers, science, and critical thinking.",
    img: "/assets/generated/program-lkg.dim_600x400.png",
    tagBg: "bg-amber-100 text-amber-700",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    text: "My daughter absolutely loves going to school every morning. The teachers are so warm and patient. It's been the best decision for her development!",
    rating: 5,
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-600",
    borderColor: "border-sky-200",
  },
  {
    name: "Rahul Mehta",
    text: "The activity-based curriculum is outstanding. My son has grown so much in confidence and communication skills since joining A. D Public School.",
    rating: 5,
    avatarBg: "bg-pink-100",
    avatarText: "text-pink-500",
    borderColor: "border-pink-200",
  },
  {
    name: "Kavita Patel",
    text: "Safe environment, caring staff, and a beautifully designed campus. We couldn't be happier with our choice for our little one!",
    rating: 5,
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-600",
    borderColor: "border-amber-200",
  },
];

const galleryTiles = [
  {
    label: "Art Class",
    from: "from-pink-200",
    to: "to-pink-100",
    emoji: "\uD83C\uDFA8",
  },
  {
    label: "Annual Day",
    from: "from-yellow-200",
    to: "to-yellow-100",
    emoji: "\uD83C\uDF89",
  },
  {
    label: "Sports Day",
    from: "from-blue-200",
    to: "to-blue-100",
    emoji: "\u26BD",
  },
  {
    label: "Classroom",
    from: "from-green-200",
    to: "to-green-100",
    emoji: "\uD83D\uDCDA",
  },
  {
    label: "Music Time",
    from: "from-purple-200",
    to: "to-purple-100",
    emoji: "\uD83C\uDFB5",
  },
  {
    label: "Parent Day",
    from: "from-orange-200",
    to: "to-orange-100",
    emoji: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",
  },
];

const stats = [
  {
    num: "500+",
    label: "Happy Students",
    icon: "\uD83D\uDC76",
    bg: "bg-school-blue/40",
  },
  {
    num: "25+",
    label: "Expert Teachers",
    icon: "\uD83D\uDC69\u200D\uD83C\uDFEB",
    bg: "bg-school-blush/40",
  },
  {
    num: "18+",
    label: "Years of Excellence",
    icon: "\uD83C\uDFC6",
    bg: "bg-school-yellow/60",
  },
];

function SectionHeading({
  badge,
  badgeBg = "bg-school-blue/30",
  title,
  subtitle,
}: {
  badge: string;
  badgeBg?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12 reveal">
      <span className={`section-badge ${badgeBg} text-foreground/70`}>
        {badge}
      </span>
      <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
        {title}
      </h2>
      <span className="section-heading-accent" aria-hidden="true" />
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title =
      "A. D Public School Nursery \u2013 Where Little Minds Grow";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ───────────── Hero ───────────── */}
      <section
        className="relative min-h-[90vh] flex items-center px-4 py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, oklch(0.95 0.03 355 / 0.5) 0%, oklch(0.965 0.025 215 / 0.5) 50%, oklch(0.97 0.04 88 / 0.25) 100%), oklch(0.974 0.003 100)",
        }}
      >
        {/* Large ambient blobs */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-30"
            style={{
              background: "oklch(0.906 0.04 355 / 0.5)",
              filter: "blur(72px)",
            }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-25"
            style={{
              background: "oklch(0.912 0.04 215 / 0.6)",
              filter: "blur(64px)",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full opacity-15"
            style={{
              background: "oklch(0.862 0.12 88 / 0.4)",
              filter: "blur(80px)",
            }}
          />
          {/* Floating emoji accents */}
          <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">
            &#x2601;&#xFE0F;
          </div>
          <div className="absolute top-32 right-20 text-3xl animate-float-slow opacity-50">
            &#x2B50;
          </div>
          <div className="absolute bottom-32 left-20 text-3xl animate-float-delay opacity-60">
            &#x1F49B;
          </div>
          <div className="absolute top-48 left-1/4 text-2xl animate-float-slow opacity-40">
            &#x1F338;
          </div>
          <div className="absolute bottom-20 right-1/4 text-3xl animate-float opacity-50">
            &#x2728;
          </div>
          <div className="absolute top-16 right-1/3 text-2xl animate-float-delay opacity-40">
            &#x1F308;
          </div>
        </div>

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-pill px-4 py-2 text-sm font-medium text-muted-foreground mb-6 shadow-xs border border-white/60">
              <span aria-hidden="true">&#x1F3C6;</span> Rated #1 Play School in
              Mumbai
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Where Little Minds
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(120deg, oklch(0.65 0.12 215), oklch(0.72 0.1 355))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Grow Big Dreams
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Safe, nurturing &amp; activity-based learning environment where
              every child&apos;s unique potential is discovered and celebrated.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/admission"
                className="inline-flex items-center px-7 py-3 font-semibold text-white bg-primary rounded-pill shadow-card btn-hover"
                data-ocid="hero.primary_button"
              >
                Enroll Now &#x1F392;
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3 font-semibold text-foreground bg-white/70 border border-school-blush rounded-pill shadow-xs btn-hover backdrop-blur-sm"
                data-ocid="hero.secondary_button"
              >
                Book a Visit &#x1F4C5;
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex gap-3 mt-10 flex-wrap">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 ${s.bg} rounded-2xl px-4 py-3 shadow-xs`}
                  aria-label={`${s.num} ${s.label}`}
                >
                  <span className="text-xl" aria-hidden="true">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-lg font-extrabold text-foreground leading-none">
                      {s.num}
                    </p>
                    <p className="text-xs text-muted-foreground leading-none mt-0.5">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="hidden sm:block w-px h-8 bg-foreground/10 ml-1"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right blob illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-[340px] h-[340px] lg:w-[420px] lg:h-[420px]">
              <div
                className="absolute inset-0 animate-blob"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.912 0.04 215 / 0.7), oklch(0.906 0.04 355 / 0.7))",
                  borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
                }}
                aria-hidden="true"
              />
              <img
                src="/assets/generated/hero-classroom.dim_800x600.png"
                alt="Happy children learning in a colorful classroom"
                className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover shadow-card"
                style={{ borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%" }}
              />
              <div
                className="absolute -top-4 -right-4 text-5xl animate-float"
                aria-hidden="true"
              >
                &#x2601;&#xFE0F;
              </div>
              <div
                className="absolute -bottom-4 -left-4 text-4xl animate-float-delay"
                aria-hidden="true"
              >
                &#x1F49B;
              </div>
              <div
                className="absolute top-1/2 -right-8 text-3xl animate-float-slow"
                aria-hidden="true"
              >
                &#x2B50;
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 56V28C240 0 480 56 720 28C960 0 1200 56 1440 28V56H0Z"
              fill="oklch(0.974 0.003 100)"
            />
          </svg>
        </div>
      </section>

      {/* ───────────── Highlights ───────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="&#x2728; Why Choose Us"
            badgeBg="bg-sky-100"
            title="Why Choose A. D Public School?"
            subtitle="We provide an environment where children grow, learn, and thrive with confidence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`reveal ${h.cardBg} rounded-3xl overflow-hidden shadow-card card-hover text-center`}
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`highlights.card.${i + 1}`}
              >
                {/* Colored top accent strip */}
                <div
                  className={`h-1.5 w-full ${h.accentColor}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div
                    className={`w-16 h-16 ${h.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xs`}
                  >
                    <h.icon className={`w-8 h-8 ${h.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{h.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Programs ───────────── */}
      <section className="py-20 px-4 bg-school-blue/20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="&#x1F4DA; Programs"
            badgeBg="bg-pink-100"
            title="Our Programs"
            subtitle="Thoughtfully designed programs for every stage of early childhood development."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div
                key={p.title}
                className="reveal bg-white rounded-3xl overflow-hidden shadow-card card-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
                data-ocid={`programs.card.${i + 1}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-3 right-3 ${p.tagBg} text-xs font-semibold px-3 py-1 rounded-pill backdrop-blur-sm`}
                  >
                    {p.age}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    data-ocid="programs.secondary_button"
                  >
                    Learn More <span aria-hidden="true">&#x2192;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── About ───────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="section-badge bg-school-blush/60 text-foreground/70">
              About Our School
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-1">
              Nurturing Every Child&apos;s Potential Since 2005
            </h2>
            <span
              className="section-heading-accent text-left mx-0 mb-4"
              style={{ marginLeft: 0 }}
              aria-hidden="true"
            />
            <p className="text-muted-foreground leading-relaxed mb-4 mt-4">
              A. D Public School Nursery was founded with a simple yet powerful
              belief &#x2014; that every child deserves the best start in life.
              Our school blends modern early education principles with a warm,
              homely environment.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-full bg-school-blue flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-sm">&#x1F3AF;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Our Mission
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To provide a safe, stimulating, and joyful learning
                    environment that nurtures curiosity and builds confident
                    learners.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div
                  className="w-8 h-8 rounded-full bg-school-blush flex items-center justify-center shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <span className="text-sm">&#x1F31F;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Our Vision
                  </p>
                  <p className="text-sm text-muted-foreground">
                    To be the most trusted early childhood institution where
                    every child&apos;s unique talent is discovered and
                    celebrated.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center px-6 py-2.5 font-semibold text-white bg-primary rounded-pill btn-hover shadow-xs"
              data-ocid="about.primary_button"
            >
              Learn More About Us &#x2192;
            </Link>
          </div>
          <div className="reveal">
            <div className="relative">
              <img
                src="/assets/generated/hero-classroom.dim_800x600.png"
                alt="Children enjoying activities at our school"
                className="w-full h-80 object-cover rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 bg-school-cta rounded-2xl p-4 shadow-card">
                <p className="font-extrabold text-2xl text-foreground">18+</p>
                <p className="text-xs font-medium text-foreground/70">
                  Years of Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Gallery ───────────── */}
      <section className="py-20 px-4 bg-school-yellow/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="&#x1F5BC;&#xFE0F; Gallery"
            badgeBg="bg-amber-100"
            title="Life at A. D School"
            subtitle="Glimpses of the joyful moments our little ones experience every day."
          />
          <div className="bg-white rounded-3xl p-6 shadow-card reveal">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryTiles.map((tile, i) => (
                <div
                  key={tile.label}
                  className={`bg-gradient-to-br ${tile.from} ${tile.to} rounded-2xl flex flex-col items-center justify-center h-36 cursor-pointer hover:scale-105 transition-transform`}
                  data-ocid={`gallery.item.${i + 1}`}
                >
                  <span className="text-4xl mb-2" aria-hidden="true">
                    {tile.emoji}
                  </span>
                  <p className="text-sm font-semibold text-foreground/70">
                    {tile.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/gallery"
                className="inline-flex items-center px-6 py-2.5 font-semibold text-white bg-primary rounded-pill btn-hover shadow-xs"
                data-ocid="gallery.primary_button"
              >
                View Full Gallery &#x1F5BC;&#xFE0F;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Testimonials ───────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            badge="&#x2764; Parent Reviews"
            badgeBg="bg-pink-100"
            title="What Parents Say"
            subtitle="Hear from the families who trust us with their little ones."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal bg-white rounded-3xl p-6 shadow-card card-hover relative border-l-4 ${t.borderColor}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                data-ocid={`testimonials.card.${i + 1}`}
              >
                {/* Decorative quote mark */}
                <span
                  className="quote-mark text-muted-foreground/20"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <div
                  className="flex gap-0.5 mb-3"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }, (_, j) => j).map(
                    (starIdx) => (
                      <span
                        key={starIdx}
                        className="text-amber-400 text-lg"
                        aria-hidden="true"
                      >
                        &#x2605;
                      </span>
                    ),
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-bold ${t.avatarText} text-base shadow-xs`}
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Verified Parent
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CTA Banner ───────────── */}
      <section className="py-20 px-4">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-10 lg:p-16 text-center shadow-card reveal relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.25 0.03 215), oklch(0.18 0 0))",
          }}
        >
          {/* Subtle glow accents */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20"
            style={{
              background: "oklch(0.779 0.088 215 / 0.6)",
              filter: "blur(48px)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-20"
            style={{
              background: "oklch(0.862 0.07 355 / 0.6)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <span className="section-badge bg-white/10 text-white/70 mb-4">
              &#x1F4E3; Admissions Open
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Give Your Child the Best Start in Life
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Admissions open for 2025-26 academic year. Limited seats
              available.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/admission"
                className="px-8 py-3 font-semibold bg-school-cta text-foreground rounded-pill btn-hover shadow-xs"
                data-ocid="cta.primary_button"
              >
                Enroll Now &#x1F392;
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 font-semibold bg-white/10 text-white rounded-pill hover:bg-white/20 transition-colors btn-hover border border-white/20"
                data-ocid="cta.secondary_button"
              >
                Contact Us &#x1F4DE;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
