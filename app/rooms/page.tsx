// app/rooms/page.tsx
import RoomGallery from "@/components/RoomGallery";

const doubleImages = [
  "/rooms/double-ensuite/double-ensuite-1.jpg",
  "/rooms/double-ensuite/double-ensuite-2.jpg",
  "/rooms/double-ensuite/double-ensuite-3.jpg",
  "/rooms/double-ensuite/double-ensuite-4.jpg",
  "/rooms/double-ensuite/double-ensuite-5.jpg",
];

const twinImages = [
  "/rooms/twin-room-ensuite/twin1.jpg",
  "/rooms/twin-room-ensuite/twin2.jpg",
  "/rooms/twin-room-ensuite/twin3.jpg",
  "/rooms/twin-room-ensuite/twin4.jpg",
  "/rooms/twin-room-ensuite/twin5.jpg",
  "/rooms/twin-room-ensuite/twin6.jpg",
];

const familyImages = [
  "/rooms/family-suite/family1.jpg",
  "/rooms/family-suite/family2.jpg",
  "/rooms/family-suite/family3.jpg",
  "/rooms/family-suite/family4.jpg",
  "/rooms/family-suite/family5.jpg",
];

export default function RoomsPage() {
  return (
    <>
      {/* Page hero */}
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
      >
        <div className="page-hero-inner">
          <h1>Stay</h1>
          <p>Comfortable riverside rooms with breakfast included.</p>
        </div>
      </div>

      {/* spacing below hero */}
      <section className="page-section pt-12">
        <div className="grid lg:grid-cols-2 gap-8 container-wide">
          {/* Double */}
          <article className="card p-0 overflow-hidden">
            <RoomGallery images={doubleImages} alt="Double Room – Ensuite" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold">Double Room – Ensuite</h2>
                <div className="text-forest font-semibold">From £95 / night</div>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Ensuite bathroom</li>
                <li>Breakfast included</li>
                <li>Free Wi-Fi</li>
                <li>Tea &amp; coffee</li>
                <li>Sleeps up to 2</li>
              </ul>
              <a href="/book" className="room-cta mt-5 inline-block text-center">
                Check availability
              </a>
            </div>
          </article>

          {/* Twin */}
          <article className="card p-0 overflow-hidden">
            <RoomGallery images={twinImages} alt="Twin Room – Ensuite" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold">Twin Room – Ensuite</h2>
                <div className="text-forest font-semibold">From £95 / night</div>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Two beds</li>
                <li>Ensuite bathroom</li>
                <li>Breakfast included</li>
                <li>Peaceful night by the river</li>
              </ul>
              <a href="/book" className="room-cta mt-5 inline-block text-center">
                Check availability
              </a>
            </div>
          </article>

          {/* Family */}
          <article className="card p-0 overflow-hidden lg:col-span-2">
            <RoomGallery images={familyImages} alt="Family Room" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-display font-bold">Family Room</h2>
                <div className="text-forest font-semibold">From £115 / night</div>
              </div>
              <p className="mt-3">
                A flexible space for families, close to everything in the village.
              </p>
              <a href="/book" className="room-cta mt-5 inline-block text-center">
                Check availability
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
