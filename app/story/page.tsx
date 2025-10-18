import Image from 'next/image';

export const metadata = {
  title: 'Our Story – The Anchor Hotel',
  description:
    'Six centuries on the South Tyne: from Court & Gaol to a riverside inn with rooms, restaurant and bar.',
};

export default function StoryPage() {
  return (
    <>
      {/* HERO: make wrapper relative + fixed height so next/image can render */}
      <div className="relative h-[420px] w-full">
        <Image
          src="/venues/anchor-hero.jpg" // EXACT file that exists in /public/venues
          alt="The Anchor Hotel exterior beside the South Tyne"
          fill
          priority
          className="object-cover"
        />
        {/* soft top/bottom gradient so text (if any) stays readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
      </div>

      {/* Your existing story content can stay as-is under here */}
      <section className="section">
        <div className="container-narrow text-center">
          <span className="inline-block rounded-full bg-brass/15 px-3 py-1 text-[12px] font-semibold tracking-[0.18em] text-brass">
            EST. 1422
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl">Six Centuries of Welcome</h1>
          <p className="mt-3 text-forest/80">
            For over six centuries, The Anchor has stood on the banks of the South Tyne,
            welcoming travellers and serving locals in Haydon Bridge.
          </p>
        </div>
      </section>
    </>
  );
}
