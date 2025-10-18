// app/rooms/page.tsx
import PageHero from "@/components/PageHero";
import Image from "next/image";

export const metadata = {
  title: "Rooms & Rates • The Anchor",
  description:
    "Simple, comfortable rooms with breakfast included — a short walk from the bridge.",
};

type Room = {
  title: string;
  price: string;
  points: string[];
  images: string[]; // from /public/rooms/...
};

const rooms: Room[] = [
  {
    title: "Double Room – Ensuite",
    price: "From £95 / night",
    points: [
      "Ensuite bathroom",
      "Breakfast included",
      "Free Wi-Fi",
      "Tea & coffee",
      "Sleeps up to 2",
    ],
    images: [
      "/rooms/double-ensuite/double-ensuite-1.jpg",
      "/rooms/double-ensuite/double-ensuite-2.jpg",
    ],
  },
  {
    title: "Twin Room – Ensuite",
    price: "From £95 / night",
    points: [
      "Two beds",
      "Ensuite bathroom",
      "Breakfast included",
      "Peaceful night by the river",
    ],
    images: ["/rooms/twin-room-ensuite/twin1.jpg"],
  },
  {
    title: "Family Room",
    price: "From £115 / night",
    points: ["Flexible space", "Breakfast included", "Close to the village"],
    images: ["/rooms/family-suite/family1.jpg"],
  },
  {
    title: "Double – Private Bathroom",
    price: "From £90 / night",
    points: [
      "Private bathroom (separate)",
      "Breakfast included",
      "Great value",
    ],
    images: ["/rooms/double-room-bathroom/bedroom1.jpg"],
  },
];

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Stay"
        title="Rooms & Rates"
        sub="Simple, comfortable rooms with breakfast included — a short walk from the bridge."
        image="/anchor-hero.jpg"
        position="center 40%"
        align="left"
      />

      <section className="page-section">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <article key={room.title} className="page-card p-0 overflow-hidden">
              {/* lead image */}
              {room.images?.[0] ? (
                <div className="relative h-64 w-full">
                  <Image
                    fill
                    src={room.images[0]}
                    alt={room.title}
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={false}
                  />
                </div>
              ) : null}

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-display font-semibold">{room.title}</h3>
                  <p className="text-forest font-semibold">{room.price}</p>
                </div>

                <ul className="mt-3 space-y-1 text-timber/85">
                  {room.points.map((pt) => (
                    <li key={pt}>• {pt}</li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a href="#availability" className="room-cta inline-flex">
                    Check availability
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Availability anchor (placeholder to avoid broken link) */}
      <div id="availability" />
    </>
  );
}
