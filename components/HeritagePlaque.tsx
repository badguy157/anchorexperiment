// components/HeritagePlaque.tsx
"use client";

import Image from "next/image";
import Button from "@/components/Button";

/**
 * Compact heritage plaque row that fits nicely on small screens.
 * - Stacks label & button on mobile
 * - Keeps everything within the glass panel width
 * - Uses subtle ring so it doesn’t feel heavy over the video
 */
export default function HeritagePlaque() {
  return (
    <div className="mt-4 rounded-xl bg-black/25 ring-1 ring-white/10 p-2.5 sm:p-3 text-offwhite">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/badges/history-plaque.png"
            alt="Heritage plaque"
            width={24}
            height={24}
            className="shrink-0 rounded"
          />
          <span className="text-sm leading-tight">
            Heritage-recognized inn (Haydon Bridge)
          </span>
        </div>

        {/* push the button to the right on larger screens */}
        <div className="sm:ml-auto">
          <Button
            href="/story#plaque"
            variant="light"
            size="sm"
            className="!px-3 !py-1.5"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
