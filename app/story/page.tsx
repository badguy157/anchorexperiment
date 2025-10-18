// app/story/page.tsx
export const metadata = { title: "Our Story · The Anchor" };

export default function StoryPage() {
  return (
    <>
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
      >
        <div className="page-hero-inner">
          <h1>Six Centuries of Welcome</h1>
          <p>
            From court &amp; gaol to riverside inn — still rooted in Northumberland craft.
          </p>
        </div>
      </div>

      <section className="page-section pt-12">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            From Court &amp; Gaol to Riverside Inn
          </h2>
          <div className="rule my-6" />

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1422 — The Beginning</div>
              <h3 className="font-display font-semibold">Court &amp; Gaol</h3>
              <p className="mt-2">
                Records point to a courthouse and gaol on this site, serving medieval
                traders and travellers crossing the South Tyne.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1700s</div>
              <h3 className="font-display font-semibold">Coaching Inn</h3>
              <p className="mt-2">
                Travellers crossed the South Tyne and supped by the fire. Hospitality
                — plain and kind — became a habit.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">1900s</div>
              <h3 className="font-display font-semibold">Riverside Tavern</h3>
              <p className="mt-2">
                Local ales and salmon suppers became our staples; the Anchor’s
                garden was a neighbourly meeting place.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-timber/70 text-sm mb-1">Today</div>
              <h3 className="font-display font-semibold">Inn &amp; Café</h3>
              <p className="mt-2">
                Rooms with breakfast, a lively bar, and a quiet café garden —
                still welcoming walkers, cyclists, and families beside the river.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
