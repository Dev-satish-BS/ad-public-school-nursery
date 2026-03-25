import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Category = "All" | "Holi Celebration" | "Classroom";

const allPhotos = [
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.31.00-019d23e2-9787-7019-8915-50925abd6d70-2.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.33.28-019d23e2-97e6-70a9-b2b1-e85115ad2d23-4.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-03_at_09.44.02-019d23e2-9886-7210-9a19-d2a37370903d-5.jpeg",
    category: "Classroom" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.31.55-019d23e2-98ec-73ce-9386-c79503f6a23c-6.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.32.05-019d23e2-98e8-7224-ae98-952bf43e71c3-7.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.34.00-019d23e2-9926-70f4-9e87-ad147c1aaa27-8.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-03_at_09.44.16-019d23e2-98dc-7710-9d9d-b988cf97c794-9.jpeg",
    category: "Classroom" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.32.27-019d23e2-9913-7181-b865-04291f3953dd-10.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.34.51-019d23e2-9950-7446-96d9-fd10decf3bae-11.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.31.29-019d23e2-9905-734d-b832-eb637e10262e-12.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.32.45-019d23e2-9939-7683-991d-ca67e44028ee-13.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.32.21-019d23e2-98be-767f-92cd-2e006e29b007-14.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.34.30-019d23e2-9a5e-70ca-8d39-280870e255e2-15.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.34.18-019d23e2-9a2e-705b-a0d9-89e95dbcfd84-16.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.35.03-019d23e2-9a5a-75eb-b2da-a9aa1f79fcd1-17.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.35.25-019d23e2-9a34-76cc-8bcc-8f145ed53de5-18.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.33.52-019d23e2-9a3e-772f-8980-f2da13e976f7-19.jpeg",
    category: "Holi Celebration" as Category,
  },
  {
    src: "/assets/uploads/whatsapp_image_2026-02-27_at_09.31.13-019d23e2-99fa-759c-a4a2-1bbf48bbd6b7-20.jpeg",
    category: "Holi Celebration" as Category,
  },
];

const categories: Category[] = ["All", "Holi Celebration", "Classroom"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  useScrollReveal();
  useEffect(() => {
    document.title = "Gallery – A. D Public School Nursery";
  }, []);

  const filtered =
    active === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === active);

  return (
    <div className="overflow-x-hidden">
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.912 0.04 215 / 0.3) 0%, oklch(0.952 0.05 95 / 0.3) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            Moments of joy, learning, and celebration at A. D Public School.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-10"
            data-ocid="gallery.tab"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-pill text-sm font-semibold transition-all btn-hover ${
                  active === cat
                    ? "bg-primary text-white shadow-card"
                    : "bg-white text-muted-foreground shadow-xs hover:bg-muted"
                }`}
                data-ocid="gallery.toggle"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.src}
                className="aspect-square overflow-hidden rounded-2xl shadow-xs hover:shadow-card hover:scale-105 transition-all cursor-pointer"
                data-ocid={`gallery.item.${i + 1}`}
              >
                <img
                  src={photo.src}
                  alt={`${photo.category} ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="gallery.empty_state"
            >
              No items in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
