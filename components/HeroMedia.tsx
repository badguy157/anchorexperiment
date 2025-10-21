// components/HeroMedia.tsx
"use client";

import Button from "@/components/Button";
import HeritagePlaque from "@/components/HeritagePlaque";

export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        <video autoPlay loop muted playsInline src="/hero.mp4" />
        <div className="hero-overlay">
          <div className="hero-inner">
            <div className="glass-panel max-w-3xl md:max-w-4xl p-6 sm:p-8 md:p-10 rounded-2xl">
              <div className="hero-kicker">Riverside Inn · Northumberland</div>

              <h1 className="hero-title mt-2">
                The Anchor Hotel, Haydon Bridge
              </h1>

              {/* updated copy (no “village” repetition) */}
              <p className="hero-sub mt-3 max-w-[58ch]">
                Rooms with breakfast, honest food &amp; ale, and a pub that still
                feels like a pub.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/rooms#booking" variant="cta">Book Your Stay</Button>
                <Button href="/eat-and-drink" variant="light">See Menus</Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="hero-badge">Best rate here</span>
                <span className="hero-badge">Breakfast included</span>
                <span className="hero-badge">Walk to Hadrian’s Wall</span>
              </div>

              {/* Compact, mobile-friendly plaque */}
              <HeritagePlaque />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
