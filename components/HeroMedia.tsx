export default function HeroMedia() {
  return (
    <section className="hero-wrap">
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero.jpg"
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
      </div>

      <div className="hero-overlay">
        <div className="hero-inner">
          <div className="max-w-2xl">
            <p className="hero-kicker">Riverside Inn · Northumberland</p>
            <h1 className="hero-title mt-3">Six Centuries of Welcome on the South Tyne</h1>
            <p className="hero-sub mt-4">
              Rooms with breakfast, honest food & ale, and a village pub that still feels like a village pub.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#booking" className="btn btn-primary no-underline">Check Availability</a>
              <a href="/eat-and-drink" className="btn btn-outline no-underline">See Menus</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-white/85 text-sm">
              <li>Best rate here</li>
              <li>Breakfast included</li>
              <li>Walk to Hadrian’s Wall</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
