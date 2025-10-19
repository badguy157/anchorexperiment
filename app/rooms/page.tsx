// app/rooms/page.tsx
import Button from "@/components/Button";
import RoomGallery from "@/components/RoomGallery";

export const metadata = {
  title: "Rooms | The Anchor",
};

export default function RoomsPage() {
  return (
    <main>
      {/* Page hero */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/anchor-hero.jpg')" }}
      >
        <div className="page-hero-inner">
          <h1>Stay</h1>
          <p>Comfortable riverside rooms with breakfast included.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-10">
          {/* Double Room — Ensuite */}
          <article className="card p-6 grid lg:grid-cols-2 gap-6 items-start">
            <RoomGallery
              alt="Double Room — Ensuite"
              images={[
                "/rooms/double-ensuite/double-ensuite-1.jpg",
                "/rooms/double-ensuite/double-ensuite-2.jpg",
                "/rooms/double-ensuite/double-ensuite-3.jpg",
                "/rooms/double-ensuite/double-ensuite-4.jpg",
                "/rooms/double-ensuite/double-ensuite-5.jpg",
              ]}
            />
            <div>
              <h2 className="text-xl font-display font-bold">
                Double Room – Ensuite
              </h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Ensuite bathroom</li>
                <li>Breakfast included</li>
                <li>Free Wi-Fi</li>
                <li>Tea &amp; coffee</li>
                <li>Sleeps up to 2</li>
              </ul>
              <div className="mt-5">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
              <p className="text-forest mt-2 font-semibold">From £95 / night</p>
            </div>
          </article>

          {/* Double Room — Ensuite with Separate Private Bathroom */}
          <article className="card p-6 grid lg:grid-cols-2 gap-6 items-start">
            <RoomGallery
              alt="Double Room – Ensuite with Separate Private Bathroom"
              images={[
                "/rooms/double-room-bathroom/bedroom1.jpg",
                "/rooms/double-room-bathroom/bedroom2.jpg",
                "/rooms/double-room-bathroom/bedroom3.jpg",
                "/rooms/double-room-bathroom/bedroom4.jpg",
              ]}
            />
            <div>
              <h2 className="text-xl font-display font-bold">
                Double Room – Ensuite (Separate Private Bathroom)
              </h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Private bathroom (separate room)</li>
                <li>Breakfast included</li>
                <li>Free Wi-Fi</li>
                <li>Tea &amp; coffee</li>
                <li>Sleeps up to 2</li>
              </ul>
              <div className="mt-5">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
              <p className="text-forest mt-2 font-semibold">From £95 / night</p>
            </div>
          </article>

          {/* Twin Room — Ensuite */}
          <article className="card p-6 grid lg:grid-cols-2 gap-6 items-start">
            <RoomGallery
              alt="Twin Room — Ensuite"
              images={[
                "/rooms/twin-room-ensuite/twin1.jpg",
                "/rooms/twin-room-ensuite/twin2.jpg",
                "/rooms/twin-room-ensuite/twin3.jpg",
                "/rooms/twin-room-ensuite/twin4.jpg",
                "/rooms/twin-room-ensuite/twin5.jpg",
                "/rooms/twin-room-ensuite/twin6.jpg",
              ]}
            />
            <div>
              <h2 className="text-xl font-display font-bold">Twin Room – Ensuite</h2>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Two beds</li>
                <li>Ensuite bathroom</li>
                <li>Breakfast included</li>
                <li>Peaceful night by the river</li>
              </ul>
              <div className="mt-5">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
              <p className="text-forest mt-2 font-semibold">From £95 / night</p>
            </div>
          </article>

          {/* Family Suite */}
          <article className="card p-6 grid lg:grid-cols-2 gap-6 items-start">
            <RoomGallery
              alt="Family Suite"
              images={[
                "/rooms/family-suite/family1.jpg",
                "/rooms/family-suite/family2.jpg",
                "/rooms/family-suite/family3.jpg",
                "/rooms/family-suite/family4.jpg",
                "/rooms/family-suite/family5.jpg",
              ]}
            />
            <div>
              <h2 className="text-xl font-display font-bold">Family Room</h2>
              <p className="mt-3">
                A flexible space for families, close to everything in the village.
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Breakfast included</li>
                <li>Free Wi-Fi</li>
                <li>Tea &amp; coffee</li>
              </ul>
              <div className="mt-5">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
              <p className="text-forest mt-2 font-semibold">From £115 / night</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
