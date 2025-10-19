// components/RoomGallery.tsx
"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function RoomGallery({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const next = () => setI((p) => (p + 1) % images.length);

  return (
    <>
      <div className="relative">
        <img
          src={images[i]}
          alt=""
          className="w-full h-[320px] md:h-[360px] object-cover rounded-t-2xl cursor-zoom-in"
          onClick={() => setOpen(true)}
        />
        {/* dots */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={"h-2 w-2 rounded-full " + (idx === i ? "bg-white" : "bg-white/60")}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <button className="absolute inset-0" onClick={() => setOpen(false)} aria-label="Close" />
          <div className="relative max-w-5xl w-full px-6">
            <img src={images[i]} alt="" className="w-full max-h-[80svh] object-contain rounded-lg" />
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <Button onClick={prev} variant="light" aria-label="Previous">{'‹'}</Button>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <Button onClick={next} variant="light" aria-label="Next">{'›'}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
