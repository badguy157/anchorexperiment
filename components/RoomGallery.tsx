// components/RoomGallery.tsx
"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Props = {
  images: string[];
  alt?: string; // optional, we'll create a sensible fallback
};

export default function RoomGallery({ images, alt }: Props) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  // Close on ESC in lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const altText = (i: number) =>
    `${alt ?? "Room photo"} — image ${i + 1} of ${images.length}`;

  return (
    <>
      {/* Main (non-expanded) viewer with arrows always visible */}
      <div className="relative overflow-hidden rounded-xl ring-1 ring-black/5">
        <img
          src={images[idx]}
          alt={altText(idx)}
          className="block w-full h-auto cursor-zoom-in select-none"
          onClick={() => setLightbox(true)}
        />

        {/* Left / Right arrow controls (always shown) */}
        <button
          aria-label="Previous image"
          onClick={prev}
          className={clsx(
            "absolute left-2 top-1/2 -translate-y-1/2",
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            "bg-black/45 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          )}
        >
          ‹
        </button>

        <button
          aria-label="Next image"
          onClick={next}
          className={clsx(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "inline-flex h-9 w-9 items-center justify-center rounded-full",
            "bg-black/45 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
          )}
        >
          ›
        </button>

        {/* little dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIdx(i)}
              className={clsx(
                "h-1.5 w-1.5 rounded-full cursor-pointer",
                i === idx ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-[1px] flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[idx]}
              alt={altText(idx)}
              className="block w-full h-auto rounded-lg"
            />

            <button
              aria-label="Close"
              onClick={() => setLightbox(false)}
              className="absolute top-2 right-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              ✕
            </button>

            <button
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              ‹
            </button>

            <button
              aria-label="Next image"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
