// app/rooms/page.tsx
'use client';

import { useState } from 'react';

/** Safe image that falls back to /anchor-hero.jpg to avoid blank boxes */
function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [src, setSrc] = useState(props.src || '/anchor-hero.jpg');
  return (
    <img
      {...props}
      src={src}
      onError={() => setSrc('/anchor-hero.jpg')}
      alt={props.alt || ''}
    />
  );
}

type Room = {
  title: string;
  desc: string;
  priceFrom?: string;
  href: string;
  images: string[];
};

/** EXACT paths from your screenshot */
const ROOMS: Room[] = [
  {
    title: 'Double Room – Ensuite',
    desc:
      'Comfortable double with ensuite, classic furnishings and everything you need for a cosy stay.',
    priceFrom: '£95 / night',
    href: '/rooms#double-ensuite',
    images: [
      '/rooms/double-ensuite/double-ensuite-1.jpg',
      '/rooms/double-ensuite/double-ensuite-2.jpg',
      '/rooms/double-ensuite/double-ensuite-3.jpg',
      '/rooms/double-ensuite/double-ensuite-4.jpg',
      '/rooms/double-ensuite/double-ensuite-5.jpg',
    ],
  },
  {
    title: 'Double Room – Ensuite (Private Bathroom)',
    desc:
      'A double with a private bathroom across the hall — your own key, towels, and full amenities.',
    priceFrom: '£90 / night',
    href: '/rooms#double-room-bathroom',
    images: [
      '/rooms/double-room-bathroom/bedroom1.jpg',
      '/rooms/double-room-bathroom/bedroom2.jpg',
      '/rooms/double-room-bathroom/bedroom3.jpg',
      '/rooms/double-room-bathroom/bedroom4.jpg',
    ],
  },
  {
    title: 'Twin Room – Ensuite',
    desc: 'Two beds, ensuite bathroom and a peaceful night by the river.',
    priceFrom: '£95 / night',
    href: '/rooms#twin-room-ensuite',
    images: [
      '/rooms/twin-room-ensuite/twin1.jpg',
      '/rooms/twin-room-ensuite/twin2.jpg',
      '/rooms/twin-room-ensuite/twin3.jpg',
      '/rooms/twin-room-ensuite/twin4.jpg',
      '/rooms/twin-room-ensuite/twin5.jpg',
      '/rooms/twin-room-ensuite/twin6.jpg',
    ],
  },
  {
    title: 'Family Suite',
    desc:
      'A flexible space for families, close to everything in the village.',
    priceFrom: '£115 / night',
    href: '/rooms#family-suite',
    images: [
      '/rooms/family-suite/family1.jpg',
      '/rooms/family-suite/family2.jpg',
      '/rooms/family-suite/family3.jpg',
      '/rooms/family-suite/family4.jpg',
      '/rooms/family-suite/family5.jpg',
    ],
  },
];

function RoomCard({ room }: { room: Room }) {
  const photos = room.images?.length ? room.images : ['/anchor-hero.jpg'];
  const [idx, setIdx] = useState(0);

  const go = (d: -1 | 1) => setIdx((s) => (s + d + photos.length) % photos.length);

  return (
    <article className="card overflow-hidden">
      {/* Image / Carousel */}
      <div className="relative">
        <SafeImg
          src={photos[idx]}
          alt=""
          className="w-full h-56 md:h-64 object-cover"
        />

        {/* photo count badge */}
        <span className="absolute top-3 right-3 rounded-full bg-black/55 text-white text-xs px-2 py-1 shadow">
          {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
        </span>

        {/* arrows */}
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
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === idx ? 'bg-white' : 'bg-white/55'
                  }`}
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
        style={{
          backgroundImage: "url('/anchor-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
