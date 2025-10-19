// app/rooms/page.tsx
import RoomGallery from "@/components/RoomGallery";
import Button from "@/components/Button";

type Room = {
  slug: string;
  name: string;
  price: string;
  bullets: string[];
  images: string[];
};

const rooms: Room[] = [
  {
    slug: "double-ensuite",
    name: "Double Room – Ensuite",
    price: "From £95 / night",
    bullets: [
      "Ensuite bathroom",
      "Breakfast included",
      "Free Wi-Fi",
      "Tea & coffee",
      "Sleeps up to 2",
    ],
    images: [
      "/rooms/double-ensuite/double-ensuite-1.jpg",
      "/rooms/double-ensuite/double-ensuite-2.jpg",
      "/rooms/double-ensuite/double-ensuite-3.jpg",
      "/rooms/double-ensuite/double-ensuite-4.jpg",
      "/rooms/double-ensuite/double-ensuite-5.jpg",
    ],
  },
  {
    slug: "double-room-bathroom",
    name: "Double Room – Ensuite (Separate Private Bathroom)",
    price: "From £95 / night",
    bullets: [
      "Private bathroom (separate but for your exclusive use)",
      "Breakfast included",
      "Free Wi-Fi",
      "Tea & coffee",
    ],
    images: [
      "/rooms/double-room-bathroom/bedroom1.jpg",
      "/rooms/double-room-bathroom/bedroom2.jpg",
      "/rooms/double-room-bathroom/bedroom3.jpg",
      "/rooms/double-room-bathroom/bedroom4.jpg",
    ],
  },
  {
    slug: "twin-room-ensuite",
    name: "Twin Room – Ensuite",
    price: "From £95 / night",
    bullets: [
      "Two beds",
      "Ensuite bathroom",
      "Breakfast included",
      "Peaceful night by the river",
    ],
    images: [
      "/rooms/twin-room-ensuite/twin1.jpg",
      "/rooms/twin-room-ensuite/twin2.jpg",
      "/rooms/twin-room-ensuite/twin3.jpg",
      "/rooms/twin-room-ensuite/twin4.jpg",
      "/rooms/twin-room-ensuite/twin5.jpg",
      "/rooms/twin-room-ensuite/twin6.jpg",
    ],
  },
  {
    slug: "family-suite",
    name: "Family Room",
    price: "From £115 / night",
    bullets: ["A flexible space for families, close to everything in the village."],
    images: [
      "/rooms/family-suite/family1.jpg",
      "/rooms/family-suite/family2.jpg",
      "/rooms/family-suite/family3.jpg",
      "/rooms/family-suite/family4.jpg",
      "/rooms/family-suite/family5.jpg",
    ],
  },
];

export const metadata = { title: "Rooms – The Anchor" };

export default function RoomsPage() {
  return (
    <main className="section">
      <div className="container-wide space-y-10" id="availability">
        {rooms.map((room) => (
          <article key={room.slug} className="card overflow-hidden">
            <RoomGallery images={room.images} />
            <div className="p-6 md:p-7 grid md:grid-cols-[1fr_auto] gap-4">
              <div>
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-xl md:text-2xl font-bold">{room.name}</h2>
                  <span className="text-forest font-semibold">{room.price}</span>
                </div>
                <ul className="mt-3 space-y-2 text-timber/90">
                  {room.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex md:items-center">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
