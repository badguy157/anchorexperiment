// components/StickyRoomsCTA.tsx
"use client";

import Button from "@/components/Button";

export default function StickyRoomsCTA() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <div className="rounded-2xl bg-parchment/80 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur supports-[backdrop-filter]:bg-parchment/60">
        <Button href="/rooms#booking" variant="cta" className="w-full">
          Check availability
        </Button>
      </div>
    </div>
  );
}
