// components/HeroMedia.tsx
import Link from "next/link";

export default function HeroMedia() {
  return (
    <div className="hero-wrap">
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay">
        <div className="hero-inner px-4">
          <div className="glass-panel max-w-3xl p-6 sm:p-8">
            <div className="hero-kicker">RIVERSIDE INN · NORTHUMBERLAND</div>
            <h1 className="hero-title mt-2">Six Centuries of Welcome on the South Tyne</h1>
            <p className="hero-sub mt-3">
              Rooms with breakfast, honest food &amp; ale, and a village pub that still feels like a village pub.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/book" className="btn-cta rounded-xl px-5 py-2.5 no-underline">
                Book Your Stay
              </Link>
              <Link
                href="/eat-and-drink#menus"
                className="btn-light rounded-xl px-5 py-2.5 no-underline"
              >
                See Menus
              </Link>
            </div>

            <div className="hero-badges mt-4">
              <span className="hero-badge">Best rate here</span>
              <span className="hero-badge">Breakfast included</span>
              <span className="hero-badge">Walk to Hadrian’s Wall</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
