import Timeline from '@/components/Timeline';

export default function StoryPage(){
  return (
    <>
      {/* Page hero — works even if you don’t have an image; remove url to rely on gradient */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/images/story-hero.jpg')" }}
      >
        <div className="page-hero-inner">
          <h1>Our Story</h1>
          <p className="mt-3">Six centuries on the South Tyne</p>
        </div>
      </section>

      <section className="page-section">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block rounded-full bg-brass/90 text-timber px-4 py-2 text-sm font-semibold">
            Est. 1422
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-display">Six Centuries of Welcome</h2>
          <p className="mt-4 text-timber/80">
            For over six centuries, The Anchor has stood on the banks of the South Tyne, welcoming
            travellers and serving locals in the heart of Haydon Bridge.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="page-card">
            <h3 className="text-xl font-semibold">1422 — The Beginning</h3>
            <p className="mt-2 text-timber/80">
              Founded in 1422, the Anchor Bridge began as a riverside inn serving medieval traders
              and travellers crossing the South Tyne.
            </p>
          </div>
          <div className="page-card">
            <h3 className="text-xl font-semibold">A Living Local</h3>
            <p className="mt-2 text-timber/80">
              Today, we’re a village pub, restaurant, and inn—still rooted in the craft and rhythm
              of Northumberland life.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Timeline />
        </div>
      </section>
    </>
  );
}
