// app/story/page.tsx
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Story • The Anchor",
  description:
    "Six centuries on the South Tyne — The Anchor’s story from court & gaol to riverside inn.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Est. 1422"
        title="Six Centuries of Welcome"
        sub="From court & gaol to riverside inn — still rooted in Northumberland craft."
        image="/anchor-hero.jpg"
        position="center 35%"
        align="left"
      />

      <section className="page-section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            From Court &amp; Gaol to Riverside Inn
          </h2>
          <div className="rule my-6" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="page-card">
              <p className="text-sm text-timber/70">1422 — The Beginning</p>
              <h3 className="text-lg font-display font-semibold mt-1">Court &amp; Gaol</h3>
              <p className="mt-2 text-timber/85">
                Records point to a courthouse and gaol on this site.
              </p>
            </div>

            <div className="page-card">
              <p className="text-sm text-timber/70">1700s</p>
              <h3 className="text-lg font-display font-semibold mt-1">Coaching Inn</h3>
              <p className="mt-2 text-timber/85">
                Travellers crossed the South Tyne and supped by the fire.
              </p>
            </div>

            <div className="page-card">
              <p className="text-sm text-timber/70">1900s</p>
              <h3 className="text-lg font-display font-semibold mt-1">Riverside Tavern</h3>
              <p className="mt-2 text-timber/85">
                Local ales and salmon suppers became our staples.
              </p>
            </div>

            <div className="page-card">
              <p className="text-sm text-timber/70">Today</p>
              <h3 className="text-lg font-display font-semibold mt-1">Inn &amp; Café</h3>
              <p className="mt-2 text-timber/85">
                Rooms with breakfast, a lively bar, and a quiet café garden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
