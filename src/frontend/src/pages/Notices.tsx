import { Bell, Calendar, MapPin } from "lucide-react";
import { useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Notices() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Notices – A. D Public School Nursery";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.906 0.04 355 / 0.3) 0%, oklch(0.952 0.05 95 / 0.3) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-pill text-sm font-semibold text-primary mb-5 shadow-xs">
            <Bell className="w-4 h-4" />
            Parent Communications
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Notice Board
          </h1>
          <p className="text-lg text-muted-foreground">
            Important updates for parents
          </p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Holiday Notice 1 – Holi */}
          <div
            className="reveal bg-white rounded-3xl shadow-card overflow-hidden mb-6"
            data-ocid="notices.card.1"
          >
            <div
              className="px-6 py-4 flex items-start justify-between gap-4"
              style={{ background: "oklch(0.96 0.08 90 / 0.45)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-amber-700 bg-amber-100 px-3 py-1 rounded-pill mb-2">
                    Holiday Notice
                  </span>
                  <h2 className="text-xl font-extrabold text-foreground">
                    School Closed – Holi Celebrations
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Posted: 25 March 2026</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-base text-foreground leading-relaxed">
                The school will remain closed on{" "}
                <span className="font-semibold">2nd, 3rd, and 4th March</span>{" "}
                on the occasion of <span className="font-semibold">Holi</span>.{" "}
                The school will reopen on{" "}
                <span className="font-semibold">5th March</span>.
              </p>
            </div>
          </div>

          {/* Holiday Notice 2 – Ashtami & Ram Navami */}
          <div
            className="reveal bg-white rounded-3xl shadow-card overflow-hidden mb-6"
            data-ocid="notices.card.2"
          >
            <div
              className="px-6 py-4 flex items-start justify-between gap-4"
              style={{ background: "oklch(0.96 0.08 90 / 0.45)" }}
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wide text-amber-700 bg-amber-100 px-3 py-1 rounded-pill mb-2">
                    Holiday Notice
                  </span>
                  <h2 className="text-xl font-extrabold text-foreground">
                    School Closed – Ashtami &amp; Ram Navami
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Posted: 25 March 2026</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-base text-foreground leading-relaxed">
                The school will remain closed on{" "}
                <span className="font-semibold">26th March</span> and{" "}
                <span className="font-semibold">27th March</span> on the
                occasion of{" "}
                <span className="font-semibold">Ashtami and Ram Navami</span>.{" "}
                The school will reopen on{" "}
                <span className="font-semibold">30th March</span>.
              </p>
            </div>
          </div>

          {/* Exam Datesheet Card */}
          <div
            className="reveal bg-white rounded-3xl shadow-card overflow-hidden"
            data-ocid="notices.card.3"
          >
            {/* Card Header */}
            <div className="bg-school-blue/30 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-pill mb-2">
                  Examination
                </span>
                <h2 className="text-xl font-extrabold text-foreground">
                  Exam Datesheet – March 2026
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 mt-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Posted: 7 March 2026</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Please find below the examination datesheet for March 2026. All
                parents are requested to ensure their child is prepared
                accordingly. For any queries, contact the school reception.
              </p>

              {/* Datesheet Image */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm max-w-sm w-full">
                  <img
                    src="/assets/uploads/whatsapp_image_2026-03-07_at_18.25.54-019d23e2-95df-7617-a684-32a49f58f072-1.jpeg"
                    alt="Exam Datesheet March 2026"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                📌 Please save this datesheet for reference.
              </p>
            </div>
          </div>

          {/* Empty state hint for future notices */}
          <p className="text-center text-xs text-muted-foreground mt-10">
            More notices will appear here as they are posted by the school.
          </p>
        </div>
      </section>
    </div>
  );
}
