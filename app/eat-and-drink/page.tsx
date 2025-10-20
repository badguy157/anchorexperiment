import Image from "next/image";
import Link from "next/link";
import { venues } from "@/lib/data";

export default function EatDrink() {
  return (
    <main className="section bg-offwhite">
      {/* Centered page header (no @apply) */}
      <header className="container-wide text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-bold">Eat &amp; Drink</h1>
        <p className="mt-2 text-timber/80 max-w-2xl mx-auto">
          Café treats, local ales and hearty Northumbrian fare.
        </p>
        <div className="rule my-6" />
      </header>

      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <section
              key={venue.id}
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
                {venue.hours && (
                  <p className="text-sm text-brown/80 mb-4">Hours: {venue.hours}</p>
                )}
                <Link href={`/eat-and-drink#${venue.id}`} className="btn-secondary">
                  View details
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
