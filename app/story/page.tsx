// app/story/page.tsx
export default function StoryPage() {
  return (
    <>
      {/* Use the hero poster as a safe default; swap to a dedicated image later if you want */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="page-hero-inner">
          <h1>Our Story</h1>
          <p className="mt-3">Six centuries on the South Tyne.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block rounded-full bg-brass/30 text-forest px-4 py-1 text-sm font-semibold">
            Est. 1422
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Six Centuries of Welcome
          </h2>
          <p className="mt-3 text-timber/80">
            For over six centuries, The Anchor has stood on the banks of the South
            Tyne, welcoming travellers and serving locals in the heart of Haydon
            Bridge.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="page-card">
            <h3 className="font-semibold">1422 — The Beginning</h3>
            <p className="mt-2 text-timber/80">
              Founded in 1422, The Anchor began as a riverside inn serving medieval
              traders and travellers crossing the South Tyne.
            </p>
          </div>

          <div className="page-card">
            <h3 className="font-semibold">A Living Local</h3>
            <p className="mt-2 text-timber/80">
              Today we’re a village pub, restaurant, and inn—still rooted in the
              craft and rhythm of Northumberland life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
