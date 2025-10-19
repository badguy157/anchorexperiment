'use client';

import { useState } from 'react';

type Room = {
  id: string;
  title: string;
  price: string;
  bullets: string[];
  images: string[];         // array of image paths in /public
  blurb?: string;
};

const ROOMS: Room[] = [
  {
    id: 'double',
    title: 'Double Room — Ensuite',
    price: 'From £95 / night',
    bullets: [
      'Ensuite bathroom',
      'Breakfast included',
      'Free Wi-Fi',
      'Tea & coffee',
      'Sleeps up to 2',
    ],
    images: [
      '/rooms/double/1.jpg',
      '/rooms/double/2.jpg',
      '/rooms/double/3.jpg',
    ],
  },
  {
    id: 'twin',
    title: 'Twin Room — Ensuite',
    price: 'From £95 / night',
    bullets: [
      'Two beds',
      'Ensuite bathroom',
      'Breakfast included',
      'Peaceful night by the river',
    ],
    images: [
      '/rooms/twin/1.jpg',
      '/rooms/twin/2.jpg',
      '/rooms/twin/3.jpg',
    ],
  },
  {
    id: 'double-ext',
    title: 'Double Room — Ensuite (Private External Bathroom)',
    price: 'From £95 / night',
    bullets: [
      'Private external bathroom (not shared)',
      'Breakfast included',
      'Free Wi-Fi',
      'Tea & coffee',
      'Sleeps up to 2',
    ],
    // If you don’t have this image set yet, you can reuse double images safely.
    images: [
      '/rooms/double-ext/1.jpg',
      '/rooms/double-ext/2.jpg',
      '/rooms/double-ext/3.jpg',
    ],
  },
  {
    id: 'family',
    title: 'Family Room',
    price: 'From £115 / night',
    bullets: [
      'A flexible space for families',
      'Close to everything in the village',
    ],
    images: [
      '/rooms/family/1.jpg',
      '/rooms/family/2.jpg',
      '/rooms/family/3.jpg',
    ],
  },
];

/* ---------- Lightbox with arrows ---------- */
function Lightbox({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(index);

  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl"
      >
        ×
      </button>

      <button
        aria-label="Previous image"
        onClick={prev}
        className="absolute left-4 sm:left-8 text-white/90 hover:text-white text-3xl"
      >
        ‹
      </button>

      <img
        src={images[i]}
        alt=""
        className="max-h-[85vh] max-w-[92vw] rounded-xl shadow-2xl"
      />

      <button
        aria-label="Next image"
        onClick={next}
        className="absolute right-4 sm:right-8 text-white/90 hover:text-white text-3xl"
      >
        ›
      </button>
    </div>
  );
}

/* ---------- Small carousel for each card ---------- */
function Carousel({
  images,
  onOpen,
}: {
  images: string[];
  onOpen: (startIndex: number) => void;
}) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="relative overflow-hidden rounded-xl ring-1 ring-black/5">
      <img
        src={images[i]}
        alt=""
        className="w-full h-[420px] object-cover cursor-zoom-in"
        onClick={() => onOpen(i)}
      />

      {/* arrows for the inline carousel */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/35 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-black/45"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/35 text-white rounded-full h-8 w-8 flex items-center justify-center hover:bg-black/45"
        aria-label="Next"
      >
        ›
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/60 hover:bg-white/80'}`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function RoomsPage() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <main>
      {/* Page hero */}
      <section
        className="page-hero"
        style={{ backgroundImage: `url(/anchor-hero.jpg)` }}
      >
        <div className="page-hero-inner">
          <h1>Rooms</h1>
          <p>Riverside rooms with breakfast included.</p>
        </div>
      </section>

      <section className="container-wide py-12 space-y-10">
        {ROOMS.map((room) => (
          <div
            key={room.id}
            className="grid lg:grid-cols-[2fr_1fr] gap-6 items-start"
          >
            <Carousel
              images={room.images}
              onOpen={(start) => setLightbox({ images: room.images, index: start })}
            />

            <div className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-xl sm:text-2xl font-bold">
                  {room.title}
                </h2>
                <div className="text-forest font-semibold">{room.price}</div>
              </div>

              <ul className="mt-4 space-y-2 text-timber/85">
                {room.bullets.map((b, i) => (
                  <li key={i} className="list-disc ml-5">{b}</li>
                ))}
              </ul>

              <div className="mt-5">
                <a href="/#booking" className="btn-cta rounded-xl px-5 py-2.5 w-full sm:w-auto inline-flex justify-center">
                  Check availability
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </main>
  );
}
