// app/story/page.tsx

export const metadata = {
  title: "Our Story – The Anchor Hotel",
  description:
    "Six centuries of welcome on the South Tyne—learn about The Anchor Hotel's history in Haydon Bridge.",
};

export default function StoryPage() {
  return (
    <>
      {/* Hero with /public/anchor-hero.jpg */}
      <section
        className="relative w-full h-[48vh] min-h-[360px] overflow-hidden"
        aria-label="The Anchor Hotel exterior"
        style={{
          backgroundImage: "url('/anchor-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="container-wide pb-10">
            <div className="max-w-3xl">
              <div className="text-offwhite/85 uppercase tracking-[0.2em] text-xs">
                Est. 1422
              </div>
              <h1 className="text-offwhite font-display text-4xl sm:text-5xl mt-2">
                Six Centuries of Welcome
              </h1>
              <p className="text-offwhite/85 mt-3">
                For over six centuries, The Anchor has stood on the banks of the
                South Tyne, welcoming travellers and serving locals in the heart
                of Haydon Bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-p:text-timber/85">
            <h2>The Beginning</h2>
            <p>
              Founded in 1422, The Anchor Bridge began as a riverside inn
              serving medieval traders and travellers crossing the South Tyne.
              The building’s original stone foundations still stand today—a
              testament to centuries of Northumberland craftsmanship.
            </p>

            <h2>A Living Local</h2>
            <p>
              Today, we’re a village pub, restaurant, and inn—still rooted in
              the craft and rhythm of Northumberland life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
