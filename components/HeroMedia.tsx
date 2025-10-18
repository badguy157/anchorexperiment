export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        <video autoPlay muted loop playsInline poster="/hero.jpg">
          <source src="/hero.webm" type="video/webm" />
        </video>
      </div>

      <div className="hero-overlay">
        <div className="hero-inner">
          {/* Glass panel improves readability over any frame */}
          <div className="glass-panel max-w-2xl p-6">
            <p className="hero-kicker">Riverside Inn · Northumberland</p>
            <h1 className="hero-title mt-2">Six Centuries of Welcome on the South Tyne</h1>
            <p className="hero-sub mt-4">
              Rooms with breakfast, honest food & ale, and a village pub that still feels like a village pub.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#booking" className="btn btn-primary no-underline">Book Your Stay</a>
              <a href="/eat-and-drink" className="btn btn-light no-underline">See Menus</a>
            </div>

            <div className="hero-badges">
              <span className="hero-badge">Best rate here</span>
              <span className="hero-badge">Breakfast included</span>
              <span className="hero-badge">Walk to Hadrian’s Wall</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
