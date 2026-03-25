import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const programs = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 years",
    color: "bg-school-blue",
    img: "/assets/generated/program-playgroup.dim_600x400.png",
    desc: "Our Playgroup is designed for the youngest learners — a safe space for first explorations, social bonding, and foundational sensory development.",
    curriculum: [
      "Sensory play activities",
      "Circle time & songs",
      "Art & craft basics",
      "Story time",
      "Outdoor play",
    ],
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 years",
    color: "bg-school-blush",
    img: "/assets/generated/program-nursery.dim_600x400.png",
    desc: "Nursery builds on foundational skills with structured activities targeting language development, number sense, and creative expression.",
    curriculum: [
      "Phonics & language",
      "Number recognition 1–20",
      "Drawing & painting",
      "Dance & movement",
      "Group projects",
    ],
  },
  {
    title: "LKG / UKG",
    age: "3.5 – 5.5 years",
    color: "bg-school-yellow",
    img: "/assets/generated/program-lkg.dim_600x400.png",
    desc: "LKG/UKG prepares children for formal schooling with a structured curriculum covering English, Mathematics, EVS, and life skills.",
    curriculum: [
      "Reading & writing",
      "Mathematics up to 100",
      "Environmental science",
      "Computers basics",
      "Public speaking",
    ],
  },
];

const routine = [
  {
    time: "8:00 AM",
    activity: "Morning Assembly & Prayer",
    color: "bg-school-blue",
  },
  {
    time: "8:30 AM",
    activity: "Circle Time & Calendar",
    color: "bg-school-blush",
  },
  {
    time: "9:00 AM",
    activity: "Academic Learning Session",
    color: "bg-school-yellow",
  },
  {
    time: "10:00 AM",
    activity: "Snack Break & Free Play",
    color: "bg-school-cta",
  },
  {
    time: "10:30 AM",
    activity: "Art, Music, or Activity",
    color: "bg-school-blue",
  },
  {
    time: "11:30 AM",
    activity: "Outdoor Play & Sports",
    color: "bg-school-blush",
  },
  {
    time: "12:00 PM",
    activity: "Story Time & Wind Down",
    color: "bg-school-yellow",
  },
  { time: "12:30 PM", activity: "Dismissal", color: "bg-school-cta" },
];

const activities = [
  {
    icon: "🎵",
    title: "Music & Rhythm",
    desc: "Singing, instruments, and music play that develop listening and coordination skills.",
  },
  {
    icon: "🎨",
    title: "Visual Arts",
    desc: "Painting, drawing, clay modeling, and craft projects that spark imagination.",
  },
  {
    icon: "⚽",
    title: "Sports & Movement",
    desc: "Age-appropriate outdoor games and exercises that build strength and teamwork.",
  },
  {
    icon: "🎭",
    title: "Drama & Role Play",
    desc: "Theatrical activities that boost confidence, empathy, and communication.",
  },
  {
    icon: "🔬",
    title: "Science Exploration",
    desc: "Simple experiments and nature walks that make science fun and tangible.",
  },
  {
    icon: "💻",
    title: "Digital Literacy",
    desc: "Age-appropriate tablet activities that introduce children to technology safely.",
  },
];

export default function Programs() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Programs – A. D Public School Nursery";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.952 0.05 95 / 0.3) 0%, oklch(0.906 0.04 355 / 0.3) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-muted-foreground">
            Curriculum designed for every stage of early childhood, from 1.5 to
            5.5 years.
          </p>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className={`reveal grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              data-ocid={`programs.card.${i + 1}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-72 object-cover rounded-3xl shadow-card"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className={`inline-block ${p.color} text-foreground text-xs font-semibold px-3 py-1 rounded-pill mb-3`}
                >
                  {p.age}
                </div>
                <h2 className="text-3xl font-extrabold text-foreground mb-3">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <h4 className="font-semibold text-foreground mb-3">
                  What your child will learn:
                </h4>
                <ul className="space-y-2">
                  {p.curriculum.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div
                        className={`w-5 h-5 ${p.color} rounded-full flex items-center justify-center shrink-0`}
                      >
                        <span className="text-xs">✓</span>
                      </div>
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/admission"
                  className="mt-6 inline-flex items-center px-6 py-2.5 font-semibold text-white bg-primary rounded-pill btn-hover shadow-xs"
                  data-ocid="programs.primary_button"
                >
                  Enroll in {p.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-20 px-4 bg-school-blue/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              A Day at A. D School
            </h2>
            <p className="text-muted-foreground">
              A thoughtfully structured day that balances learning, play, and
              rest.
            </p>
          </div>
          <div className="space-y-4">
            {routine.map((r, i) => (
              <div
                key={r.time}
                className="reveal flex gap-4 items-center bg-white rounded-2xl p-4 shadow-card"
                style={{ transitionDelay: `${i * 60}ms` }}
                data-ocid={`routine.item.${i + 1}`}
              >
                <div
                  className={`${r.color} rounded-xl px-3 py-2 text-xs font-bold text-foreground shrink-0 w-24 text-center`}
                >
                  {r.time}
                </div>
                <p className="text-sm font-medium text-foreground">
                  {r.activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              Beyond the Classroom
            </h2>
            <p className="text-muted-foreground">
              A rich variety of co-curricular activities for holistic
              development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <div
                key={a.title}
                className="reveal bg-white rounded-3xl p-6 shadow-card card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`activities.card.${i + 1}`}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
