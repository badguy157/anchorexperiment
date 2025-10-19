'use client';

import Link from 'next/link';

export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        {/* Your existing video tag; kept minimal here */}
        <video autoPlay muted loop playsInline preload="metadata">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <div className="hero-inner">
            <div className="glass-panel max-w-3xl p-6 sm:p-8 md:p-10 rounded-2xl">
              <p className="hero-kicker">RIVERSIDE INN · NORTHUMBERLAND</p>
              <h1 className="hero-title">
                Six Centuries of Welcome
                <br /> on the South Tyne
              </h1>
              <p className="hero-sub mt-3">
                Rooms with breakfast, honest food & ale, and a village pub that still
                feels like a village pub.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* CTA: Book Your Stay */}
                <Link href="#booking" className="btn-cta rounded-xl px-5 py-2.5">
                  Book Your Stay
                </Link>

                {/* Secondary button */}
                <Link
                  href="/eat-and-drink"
                  className="btn-light rounded-xl px-5 py-2.5"
                >
                  See Menus
                </Link>
              </div>

              <div className="hero-badges">
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
