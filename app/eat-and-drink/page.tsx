// app/eat-and-drink/page.tsx
import Image from "next/image";
import Button from "@/components/Button";
import { venues } from "@/lib/data";

const MAIN_MENU_URL =
  "https://53905ae8-8219-4d16-a948-a6ba2c427c35.usrfiles.com/ugd/53905a_5691da07576a4caf98b489692df4281e.pdf";

// Set when you have it; leave null for a disabled-looking button.
const BREAKFAST_MENU_URL: string | null = null;

// ---- Ordering helpers ----
type Kind = "restaurant" | "bar" | "cafe" | "lounge" | "other";

function kindOf(v: any): Kind {
  const id = String(v.id || "").toLowerCase();
  const name = String(v.name || "").toLowerCase();

  if (id.includes("restaurant") || /salmon/.test(name)) return "restaurant";
  if (id.includes("bar") || /bar|judge|barrel/.test(name)) return "bar";
  if (id.includes("cafe") || id.includes("café") || /cafe|café/.test(name)) return "cafe";
  if (id.includes("lounge") || id.includes("commodore") || /lounge/.test(name)) return "lounge";
  return "other";
}

const ORDER: Kind[] = ["restaurant", "bar", "cafe", "lounge"];
const rank = (v: any) => {
  const k = kindOf(v);
  const i = ORDER.indexOf(k);
  return i === -1 ? 999 : i;
};
const sortedVenues = [...venues].sort((a, b) => rank(a) - rank(b));

export default function EatDrink() {
  return (
    <main className="section bg-offwhite">
      {/* Centered page header */}
      <header className="container-wide text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-bold">Eat &amp; Drink</h1>
        <p className="mt-2 text-timber/80 max-w-2xl mx-auto">
          Café treats, local ales and hearty Northumbrian fare.
        </p>
        <div className="rule my-6" />
      </header>

      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedVenues.map((venue) => {
            const isRestaurant =
              venue.id === "restaurant" ||
              /salmon/.test(String(venue.name || "").toLowerCase());

            return (
              <section
                key={venue.id || venue.name}
                id={venue.id}
                className="bg-cream rounded-lg overflow-hidden border border-cream"
              >
                <div className="relative h-56">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-heading text-2xl font-semibold text-forest mb-1">
                    {venue.name}
                  </h2>

                  <p className="text-brown mb-3">{venue.description}</p>

                  {/* Show hours ONLY for Salmon’s Leap Restaurant */}
                  {isRestaurant && (
                    <p className="text-sm text-brown/80 mb-4">
                      <span className="font-semibold">Kitchen hours (daily):</span>{" "}
                      Breakfast 5:00–9:00 · Lunch 12:00–14:00 · Dinner 17:00–20:00
                    </p>
                  )}

                  {/* Actions */}
                  {isRestaurant ? (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {/* Main Menu (PDF) — forest green */}
                      <Button
                        href={MAIN_MENU_URL}
                        variant="light"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="!bg-forest !text-white !border-forest hover:!bg-forest/90"
                      >
                        View Main Menu (PDF)
                      </Button>

                      {/* Breakfast Menu (coming soon if no URL yet) */}
                      {BREAKFAST_MENU_URL ? (
                        <Button
                          href={BREAKFAST_MENU_URL}
                          variant="light"
                          size="sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!bg-forest !text-white !border-forest hover:!bg-forest/90"
                        >
                          View Breakfast Menu (PDF)
                        </Button>
                      ) : (
                        <span
                          className="btn btn--sm btn-light opacity-60 cursor-not-allowed"
                          aria-disabled="true"
                          title="Breakfast menu coming soon"
                        >
                          View Breakfast Menu (coming soon)
                        </span>
                      )}
                    </div>
                  ) : (
                    // Other venues: no hours, no details button
                    <div className="mt-1" />
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
