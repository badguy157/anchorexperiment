// components/HeroMedia.tsx
"use client";

export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        <video autoPlay loop muted playsInline src="/hero.mp4" />
        <div className="hero-overlay">
          <div className="hero-inner">
            <div className="glass-panel p-6 sm:p-8 md:p-10 max-w-3xl rounded-2xl">
              <div className="hero-kicker">Riverside Inn · Northumberland</div>
              <h1 className="hero-title">Six Centuries of Welcome on the South Tyne</h1>
              <p className="hero-sub mt-3">
                Rooms with breakfast, honest food &amp; ale, and a village pub that still feels like a village pub.
              </p>

              {/* CTA row */}
              <div className="mt-5 flex gap-3">
                <a
                  href="/rooms#booking"
                  className="inline-flex items-center rounded-xl px-5 py-2.5 btn-cta no-underline focus:outline-none focus:ring-2 focus:ring-brass/40"
                >
                  Book Your Stay
                </a>

                <a
                  href="/eat-and-drink"
                  className="inline-flex items-center rounded-xl px-5 py-2.5 btn-light no-underline focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  See Menus
                </a>
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
