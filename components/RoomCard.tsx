'use client';

import { useState } from 'react';

type Props = {
  title: string;
  desc: string;
  href: string;          // booking / availability link
  priceFrom?: string;    // e.g. "£95 / night"
  image?: string;        // single image (backwards compatible)
  images?: string[];     // multiple images
};

export default function RoomCard({
  title,
  desc,
  href,
  priceFrom,
  image,
  images,
}: Props) {
  const photos = images && images.length > 0 ? images : (image ? [image] : []);
  const [idx, setIdx] = useState(0);

  const go = (dir: -1 | 1) => {
    if (photos.length < 2) return;
    setIdx(s => (s + dir + photos.length) % photos.length);
  };

  return (
    <article className="card overflow-hidden">
      {/* Image / Carousel */}
      <div className="relative">
        {photos.length > 0 ? (
          <>
            <img
              src={photos[idx]}
              alt=""
              className="w-full h-56 md:h-64 object-cover transition"
            />

            {/* photo count badge */}
            {photos.length > 1 && (
              <span className="absolute top-3 right-3 rounded-full bg-black/55 text-white text-xs px-2 py-1 shadow">
                {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
              </span>
            )}

            {/* arrows (only if multiple) */}
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
          </>
        ) : (
          <div className="w-full h-56 md:h-64 bg-stone/20" />
        )}
      </div>

      {/* Copy */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {priceFrom && (
            <div className="text-forest font-semibold whitespace-nowrap">
              From {priceFrom}
            </div>
          )}
        </div>

        <p className="mt-2 text-timber/80">{desc}</p>

        {/* CTA */}
        <div className="mt-5">
          <a href={href} className="room-cta no-underline text-center block">
            Check availability
          </a>
        </div>
      </div>
    </article>
  );
}
