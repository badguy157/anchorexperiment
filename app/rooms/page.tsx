'use client';

import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/data";
import { useState } from "react";

export default function RoomsPage() {
  // Track which image is active per room id
  const [active, setActive] = useState<Record<string, number>>({});

  return (
    <div className="section-padding bg-offwhite">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-forest mb-2">Stay With Us</h1>
          <p className="text-brown max-w-2xl mx-auto">Comfortable rooms with character, breakfast included.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {rooms.map((room) => {
            const idx = active[room.id] ?? 0;
            const current = room.gallery[idx] ?? room.image;

            return (
              <section key={room.id} id={room.id} className="bg-cream rounded-lg border border-brass/40 overflow-hidden">
                {/* Media */}
                <div className="relative h-72">
                  <Image src={current} alt={room.name} fill className="object-cover" sizes="(max-width:768px)100vw,50vw" />
                </div>

                {/* Thumbs */}
                <div className="flex gap-2 overflow-x-auto p-3 bg-offwhite border-t border-cream">
                  {room.gallery.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActive((s) => ({ ...s, [room.id]: i }))}
                      className={[
                        "relative h-16 w-24 rounded overflow-hidden shrink-0 border",
                        i === idx ? "border-brass ring-2 ring-brass" : "border-cream hover:border-brass/60"
                      ].join(" ")}
                      aria-label={`View photo ${i + 1} of ${room.name}`}
                      type="button"
                    >
                      <Image src={src} alt={`${room.name} photo ${i + 1}`} fill className="object-cover" sizes="96px" />
                    </button>
                  ))}
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="font-heading text-2xl font-semibold text-forest">{room.name}</h2>
                    <span className="text-forest font-semibold">{room.price}</span>
                  </div>
                  <p className="mb-4">{room.description}</p>
                  <ul className="list-disc pl-5 space-y-1 text-brown/90 mb-6">
                    {room.amenities.map((a) => <li key={a}>{a}</li>)}
                    <li>Sleeps up to {room.capacity}</li>
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/rooms" className="btn-primary">Check availability</Link>
                    <Link href="/" className="btn-secondary">Back to home</Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
