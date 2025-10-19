'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  alt: string;
};

export default function RoomGallery({ images, alt }: Props) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length]
  );

  // keyboard nav when lightbox open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, prev, next]);

  return (
    <>
      {/* main image */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={images[index]}
          alt={alt}
          width={1500}
          height={1000}
          className="w-full h-[320px] md:h-[360px] object-cover cursor-zoom-in"
          onClick={() => setOpen(true)}
          priority={false}
        />

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full h-9 w-9 grid place-items-center"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full h-9 w-9 grid place-items-center"
          aria-label="Next image"
        >
          ›
        </button>

        {/* dots */}
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`}
            />
          ))}
        </div>
      </div>

      {/* lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 grid place-items-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index]}
              alt={alt}
              width={2000}
              height={1400}
              className="w-full h-auto rounded-xl"
            />
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full h-10 w-10 grid place-items-center"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full h-10 w-10 grid place-items-center"
              aria-label="Next"
            >
              ›
            </button>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 bg-white/20 text-white rounded-full h-10 w-10 grid place-items-center"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
