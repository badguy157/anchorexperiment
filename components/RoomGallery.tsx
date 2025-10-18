// components/RoomGallery.tsx
"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export default function RoomGallery({ images, alt }: Props) {
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);

  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl">
        {/* main image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[idx]}
          alt={alt}
          className="block w-full h-[360px] sm:h-[420px] object-cover cursor-zoom-in"
          onClick={() => setZoom(true)}
        />

        {/* arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 hover:bg-black/60 text-white w-9 h-9 grid place-items-center"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 hover:bg-black/60 text-white w-9 h-9 grid place-items-center"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === idx ? "bg-white" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* lightbox */}
      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/80 grid place-items-center p-4"
          onClick={() => setZoom(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx]}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
          />
        </div>
      )}
    </>
  );
}
