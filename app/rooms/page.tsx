// app/rooms/page.tsx
import Button from "@/components/Button";
import RoomGallery from "@/components/RoomGallery";
import BookingWidget from "@/components/BookingWidget";

export const metadata = {
  title: "Rooms | The Anchor",
  description:
    "Comfortable riverside rooms with breakfast included. Doubles, twins and a flexible family room at The Anchor Hotel, Haydon Bridge.",
};

export default function RoomsPage() {
  return (
    <main>
      {/* Page header (no hero image) */}
      <section className="section-sm">
        <div className="container-wide">
          <h1 className="text-3xl sm:text-4xl font-display font-bold">Stay</h1>
          <p className="mt-2 text-timber/80">
            Comfortable riverside rooms with breakfast included.
          </p>
          <div className="rule my-6" />
        </div>
      </section>

      {/* Quick availability widget (same as homepage) */}
      <section id="booking" className="section-sm">
        <div className="container-wide">
          <BookingWidget />
          {/* Reassurance bar */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="card p-3 text-center text-sm font-semibold text-timber/90">
              Best rate here
            </div>
            <div className="card p-3 text-center text-sm font-semibold text-timber/90">
              Breakfast included
            </div>
            <div className="card p-3 text-center text-sm font-semibold text-timber/90">
              Secure booking
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
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

              <p className="mt-3">
                Warm, comfortable and a little bit quirky—recently refreshed
                doubles with views of countryside and river. All rooms have a
                flat-screen TV and tea &amp; coffee.
              </p>

              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Sleeps:</strong> up to 2
                </li>
                <li>
                  <strong>Bed:</strong> Double
                </li>
                <li>
                  <strong>Bathroom:</strong> Private ensuite
                </li>
                <li>
                  <strong>Breakfast:</strong> Full English included
                </li>
                <li>
                  <strong>Wi-Fi:</strong> Free
                </li>
                <li>
                  <strong>Extras:</strong> Original features; some with
                  fireplaces / wooden shutters
                </li>
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

              <p className="mt-3">
                Charming double with original wooden shutters and a private
                bathroom across the passage—warm, comfortable and
                characterful.
              </p>

              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Sleeps:</strong> up to 2
                </li>
                <li>
                  <strong>Bed:</strong> Double
                </li>
                <li>
                  <strong>Bathroom:</strong> Private (separate room)
                </li>
                <li>
                  <strong>Breakfast:</strong> Full English included
                </li>
                <li>
                  <strong>Wi-Fi:</strong> Free
                </li>
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

              <p className="mt-3">
                Two comfortable single beds with an ensuite—cosy, quiet and close
                to the river.
              </p>

              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Sleeps:</strong> up to 2
                </li>
                <li>
                  <strong>Beds:</strong> 2 × Single
                </li>
                <li>
                  <strong>Bathroom:</strong> Private ensuite
                </li>
                <li>
                  <strong>Breakfast:</strong> Full English included
                </li>
                <li>
                  <strong>Wi-Fi:</strong> Free
                </li>
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
                Refurbished family room with countryside &amp; river views—warm,
                comfortable and flexible for small families.
              </p>

              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Sleeps:</strong> up to 4 (2 adults + 1 child under 16 as
                  standard)
                </li>
                <li>
                  <strong>Beds:</strong> 2 × Single &amp; 1 × Double (cot/extra bed
                  on request; extra charge may apply)
                </li>
                <li>
                  <strong>Bathroom:</strong> Private ensuite
                </li>
                <li>
                  <strong>Breakfast:</strong> Full English included
                </li>
                <li>
                  <strong>Wi-Fi:</strong> Free
                </li>
                <li>
                  <strong>In-room:</strong> Flat-screen TV, tea &amp; coffee making
                  facilities
                </li>
              </ul>

              <div className="mt-5">
                <Button href="/rooms#booking" variant="cta" full>
                  Check availability
                </Button>
              </div>
              <p className="text-forest mt-2 font-semibold">From £115 / night</p>
            </div>
          </article>

          {/* Policies / quick info */}
          <div className="card p-5 lg:col-span-2">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-timber/80">
              <li>
                <strong>Check-in:</strong> from 3pm · <strong>Check-out:</strong> by
                11am
              </li>
              <li>
                <strong>Breakfast:</strong> included with all stays
              </li>
              <li>
                <strong>Parking:</strong> village parking nearby
              </li>
              <li>
                <strong>Pets:</strong> please enquire before booking
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
