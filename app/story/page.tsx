// app/story/page.tsx
export const metadata = { title: 'Our Story – The Anchor Hotel' };

export default function StoryPage() {
  return (
    <>
      {/* Robust hero: image always visible with set height */}
      <section className="relative h-[46vh] min-h-[320px]">
        <img
          src="/venues/anchor-hero.jpg"
          alt="The Anchor Hotel exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* soft top gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent" />
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="badge mb-4">Est. 1422</p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold">
            Six Centuries of Welcome
          </h1>
          <p className="mt-3 text-timber/85">
            For over six centuries, The Anchor has stood on the banks of the South Tyne, welcoming
            travellers and serving locals in the heart of Haydon Bridge.
          </p>

          {/* Your timelines/blocks can follow here… */}
        </div>
      </section>
    </>
  );
}
