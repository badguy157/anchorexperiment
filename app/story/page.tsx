// app/story/page.tsx
export const metadata = { title: 'Our Story – The Anchor' };

export default function StoryPage() {
  return (
    <>
      {/* Hero image only */}
      <section className="relative">
        <div className="aspect-[16/6] w-full overflow-hidden">
          <img
            src="/venues/anchor-hero.jpg"
            alt="The Anchor Hotel exterior"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Content block */}
      <section className="section">
        <div className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">Six Centuries of Welcome</h1>
          <p className="mt-3 text-timber/80">
            For over six centuries, The Anchor has stood on the banks of the South Tyne, welcoming
            travellers and serving locals in the heart of Haydon Bridge.
          </p>

          <div className="rule my-8" />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="font-semibold">1422 — The Beginning</h3>
              <p className="mt-2 text-timber/80">
                Founded in 1422, The Anchor Bridge began as a riverside inn serving medieval traders
                and travellers crossing the South Tyne.
              </p>
            </article>

            <article className="card p-6">
              <h3 className="font-semibold">A Living Local</h3>
              <p className="mt-2 text-timber/80">
                Today we’re a village pub, restaurant, and inn—still rooted in the craft and rhythm
                of Northumberland life.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
