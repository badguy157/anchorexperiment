import HeroImage from '@/components/HeroImage';

export const metadata = {
  title: 'Our Story – The Anchor Hotel',
  description:
    'Six centuries of welcome on the South Tyne – from court & gaol to village inn.',
};

export default function StoryPage() {
  return (
    <>
      <HeroImage
        src="/venues/anchor-hero.jpg"
        alt="The Anchor Hotel exterior on the river"
        height={420}
      />

      <section className="section">
        <div className="container-narrow">
          <p className="kicker">Est. 1422</p>
          <h1 className="text-4xl font-display">Six Centuries of Welcome</h1>
          <p className="mt-4 text-forest/80">
            For over six centuries, The Anchor has stood on the banks of the
            South Tyne, welcoming travellers and serving locals in the heart of
            Haydon Bridge.
          </p>

          <div className="rule my-8" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-5">
              <p className="kicker">1422 — The Beginning</p>
              <p>
                Founded in 1422, The Anchor Bridge began as a riverside inn
                serving medieval traders and travellers crossing the South Tyne.
              </p>
            </div>
            <div className="card p-5">
              <p className="kicker">A Living Local</p>
              <p>
                Today, we’re a village pub, restaurant, and inn—still rooted in
                the craft and rhythm of Northumberland life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
