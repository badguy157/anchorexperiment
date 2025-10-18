'use client';

import { useState } from 'react';

type Room = {
  title: string;
  desc: string;
  priceFrom?: string;
  href: string;
  images: string[];
};

const ROOMS: Room[] = [
  {
    title: 'Double Room – Ensuite',
    desc: 'Comfortable double with ensuite, classic furnishings and everything you need for a cosy stay.',
    priceFrom: '£95 / night',
    href: '/rooms#double',
    images: ['/rooms/double-1.jpg','/rooms/double-2.jpg','/rooms/double-3.jpg'],
  },
  {
    title: 'Twin Room – Ensuite',
    desc: 'Two beds, ensuite bathroom and a peaceful night by the river.',
    priceFrom: '£95 / night',
    href: '/rooms#twin',
    images: ['/rooms/twin-1.jpg','/rooms/twin-2.jpg'],
  },
  {
    title: 'Family Room',
    desc: 'A flexible space for families, close to everything in the village.',
    priceFrom: '£115 / night',
    href: '/rooms#family',
    images: ['/rooms/family-1.jpg','/rooms/family-2.jpg','/rooms/family-3.jpg'],
  },
];

function RoomCard({ room }: { room: Room }) {
  const [idx, setIdx] = useState(0);
  const photos = room.images;

  const go = (d: -1 | 1) => setIdx(s => (s + d + photos.length) % photos.length);

  return (
    <article className="card overflow-hidden">
      {/* Image / Carousel */}
      <div className="relative">
        <img src={photos[idx]} alt="" className="w-full h-56 md:h-64 object-cover" />
        {/* photo count badge */}
        <span className="absolute top-3 right-3 rounded-full bg-black/55 text-white text-xs px-2 py-1 shadow">
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </span>

        {/* arrows (if multiple) */}
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white"
              aria-label="Next photo"
            >
              ›
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${i === idx ? 'bg-white' : 'bg-white/55'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Copy */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{room.title}</h3>
          {room.priceFrom && (
            <div className="text-forest font-semibold whitespace-nowrap">
              From {room.priceFrom}
            </div>
          )}
        </div>

        <p className="mt-2 text-timber/80">{room.desc}</p>

        {/* Premium CTA */}
        <div className="mt-5">
          <a href={room.href} className="room-cta no-underline text-center block">
            Check availability
          </a>
        </div>
      </div>
    </article>
  );
}

export default function RoomsPage() {
  return (
    <>
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="page-hero-inner">
          <h1>Rooms</h1>
          <p className="mt-3">Riverside rooms with breakfast included.</p>
        </div>
      </section>

      <section className="page-section container-wide">
        <div className="grid gap-6 md:grid-cols-2">
          {ROOMS.map((r) => (
            <RoomCard key={r.title} room={r} />
          ))}
        </div>
      </section>
    </>
  );
}
