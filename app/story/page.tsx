// app/story/page.tsx
export const metadata = {
  title: "Our Story · The Anchor",
  description: "From court & gaol to riverside inn — six centuries beside the South Tyne.",
};

export default function StoryPage() {
  return (
    <main>
      {/* Editorial hero (image only, no text on image) */}
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
        aria-hidden="true"
      />

      {/* TitleBand below hero */}
      <section className="section pt-10 pb-6">
        <div className="container-wide">
          <h1 className="text-3xl sm:text-4xl font-display font-bold">
            Six Centuries of Welcome
          </h1>
          <p className="mt-2 text-timber/80">
            From court &amp; gaol to riverside inn — still rooted in Northumbrian craft.
          </p>
          <div className="rule my-6" />
        </div>
      </section>

      {/* Timeline / Cards */}
      <section className="section pt-0">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1422 — The Beginning</div>
              <h2 className="font-display font-semibold">Court &amp; Gaol</h2>
              <p className="mt-2">
                Records point to a courthouse and gaol on this site, serving medieval
                traders and travellers crossing the South Tyne.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1700s</div>
              <h2 className="font-display font-semibold">Coaching Inn</h2>
              <p className="mt-2">
                Travellers crossed the South Tyne and supped by the fire. Hospitality —
                plain and kind — became a habit.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1900s</div>
              <h2 className="font-display font-semibold">Riverside Tavern</h2>
              <p className="mt-2">
                Local ales and salmon suppers became our staples; the Anchor’s garden
                was a neighbourly meeting place.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">Today</div>
              <h2 className="font-display font-semibold">Inn &amp; Café</h2>
              <p className="mt-2">
                Rooms with breakfast, a lively bar, and a quiet café garden — still
                welcoming walkers, cyclists, and families beside the river.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
