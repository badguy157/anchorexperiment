'use client';

import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

type ActiveMap = Record<string, number>;

export default function RoomsPage() {
  // Track which image index is active per room id
  const [active, setActive] = useState<ActiveMap>({});

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    roomId: string | null;
    index: number;
  }>({ open: false, roomId: null, index: 0 });

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox({ open: false, roomId: null, index: 0 });
      if (e.key === "ArrowRight") nav(+1);
      if (e.key === "ArrowLeft") nav(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  const nav = (delta: number) => {
    if (!lightbox.roomId) return;
    const room = rooms.find(r => r.id === lightbox.roomId);
    if (!room) return;
    const total = Math.max(1, room.gallery?.length ?? 0);
    const next = (lightbox.index + delta + total) % total;
    setLightbox(l => ({ ...l, index: next }));
  };

  // Lightweight swipe support for the lightbox (mobile)
  const swipeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!lightbox.open || !swipeRef.current) return;
    let startX = 0, startY = 0, dx = 0, dy = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      dx = e.touches[0].clientX - startX; dy = e.touches[0].clientY - startY;
    };
    const onTouchEnd = () => {
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        nav(dx < 0 ? +1 : -1);
      }
      startX = startY = dx = dy = 0;
    };
    const el = swipeRef.current;
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.open]);

  return (
    <div className="section-padding bg-offwhite">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-bold text-forest mb-2">Stay With Us</h1>
          <p className="text-brown max-w-2xl mx-auto">
            Comfortable rooms with character, breakfast included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {rooms.map((room) => {
            const idx = active[room.id] ?? 0;
            const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
            const current = gallery[idx];

            const setIdx = (i: number) =>
              setActive((s) => ({ ...s, [room.id]: (i + gallery.length) % gallery.length }));

            const next = () => setIdx(idx + 1);
            const prev = () => setIdx(idx - 1);

            return (
              <section
                key={room.id}
                id={room.id}
                className="bg-cream rounded-lg border border-brass/40 overflow-hidden"
              >
                {/* Media with overlay arrows */}
                <div className="relative h-72">
                  <button
                    type="button"
                    onClick={() => setLightbox({ open: true, roomId: room.id, index: idx })}
                    className="absolute inset-0 z-10"
                    aria-label={`Expand ${room.name} photo`}
                  />
                  <Image
                    src={current}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px)100vw,50vw"
                    priority={false}
                  />

                  {/* Left Arrow */}
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 hover:bg-black/50 border border-white/30 backdrop-blur-sm transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/35 hover:bg-black/50 border border-white/30 backdrop-blur-sm transition"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                      <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                </div>

                {/* Minimal dots instead of thumbnail strip (no scrollbar) */}
                <div className="flex items-center justify-center gap-2 py-3 bg-offwhite border-t border-cream">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to photo ${i + 1} of ${room.name}`}
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        i === idx ? "bg-[var(--brass)]" : "bg-[var(--cream)] hover:bg-[var(--brass)]/70"
                      ].join(" ")}
                      type="button"
                    />
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
                    {room.amenities.map((a: string) => <li key={a}>{a}</li>)}
                    <li>Sleeps up to {room.capacity}</li>
                  </ul>

                  {/* Buttons: removed "Back to home" as requested */}
                  <div className="flex flex-wrap gap-3">
                    <Link href="/rooms" className="btn-primary">Check availability</Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox.open && lightbox.roomId && (
        <div
          ref={swipeRef}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={(e) => {
            // close when clicking backdrop (not the image or controls)
            if (e.target === e.currentTarget) {
              setLightbox({ open: false, roomId: null, index: 0 });
            }
          }}
        >
          <div className="relative w-full max-w-5xl aspect-[16/10]">
            {/* Close */}
            <button
              onClick={() => setLightbox({ open: false, roomId: null, index: 0 })}
              aria-label="Close"
              className="absolute top-2 right-2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/30"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M18.3 5.71 12 12.01l-6.29-6.3L4.29 7.1 10.59 13.4l-6.3 6.3 1.42 1.41 6.29-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z"/>
              </svg>
            </button>

            {/* Get current gallery & item */}
            {(() => {
              const room = rooms.find(r => r.id === lightbox.roomId)!;
              const gallery = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];
              const src = gallery[lightbox.index];
              return (
                <>
                  <Image
                    src={src}
                    alt={`${room.name} photo ${lightbox.index + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />

                  {/* Lightbox arrows */}
                  <button
                    onClick={() => nav(-1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/30"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => nav(+1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/30"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                      <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>

                  {/* Dots in lightbox */}
                  <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setLightbox(l => ({ ...l, index: i }))}
                        aria-label={`Go to photo ${i + 1}`}
                        className={[
                          "h-2.5 w-2.5 rounded-full",
                          i === lightbox.index ? "bg-[var(--brass)]" : "bg-white/50 hover:bg-white/80"
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
