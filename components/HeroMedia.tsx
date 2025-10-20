// components/HeroMedia.tsx
"use client";

import Button from "@/components/Button";

export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        <video autoPlay loop muted playsInline src="/hero.mp4" />
        <div className="hero-overlay">
          <div className="hero-inner">
            {/* Glass panel with tighter max width so the title doesn’t feel too wide */}
            <div className="glass-panel max-w-3xl md:max-w-4xl p-6 sm:p-8 md:p-10 rounded-2xl">
              <div className="hero-kicker">Riverside Inn · Northumberland</div>

              {/* Tighter letter spacing + max width keeps lines from wrapping awkwardly */}
              <h1 className="hero-title max-w-[22ch] md:max-w-[24ch] tracking-[-0.01em]">
                Six Centuries of Welcome on the South Tyne
              </h1>

              {/* Slightly smaller & narrower subhead for legibility on video */}
              <p className="hero-sub mt-3 max-w-[58ch]">
                Rooms with breakfast, honest food &amp; ale, and a village pub that
                still feels like a village pub.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
