// app/eat-and-drink/page.tsx
import Image from "next/image";
import Link from "next/link";
import TitleBand from "@/components/TitleBand";
import { venues } from "@/lib/data";

export const metadata = { title: "Eat & Drink · The Anchor" };

export default function EatDrink() {
  return (
    <main className="bg-offwhite">
      <TitleBand
        eyebrow="Food & Bar"
        title="Eat & Drink"
        subtitle="Café treats, local ales and hearty Northumbrian fare."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <section
                key={venue.id}
                id={venue.id}
                className="bg-cream rounded-lg overflow-hidden border border-cream shadow-sm"
              >
                <div className="relative h-56">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-heading text-2xl font-semibold text-forest mb-1">
                    {venue.name}
                  </h2>
                  <p className="text-brown mb-3">{venue.description}</p>
                  {venue.hours && (
                    <p className="text-sm text-brown/80 mb-4">
                      <span className="font-semibold">Hours:</span> {venue.hours}
                    </p>
                  )}

                  <Link href={`/eat-and-drink#${venue.id}`} className="btn-secondary">
                    View details
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
