import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | The Anchor Bridge',
  description: 'Six centuries of history at The Anchor Bridge. From 1422 to today, discover the story of our historic riverside inn in Haydon Bridge.',
};

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Anchor Hotel and Ivy Pathway.png"
            alt="Historic Anchor Bridge building"
            fill
            className="object-cover brightness-75"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center text-offwhite px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl">
            Six centuries on the South Tyne
          </p>
        </div>
      </section>

      <section className="section-padding bg-offwhite">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-brass text-brown px-6 py-3 rounded-full text-2xl font-heading font-semibold mb-6">
                Est. 1422
              </div>
              <h2 className="font-heading text-4xl font-bold text-forest mb-6">
                Six Centuries of Welcome
              </h2>
              <p className="text-brown text-lg leading-relaxed">
                For over six centuries, The Anchor Bridge has stood on the banks of the South Tyne, welcoming travelers and serving locals in the heart of Haydon Bridge.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-8 border-2 border-brass">
              <h3 className="font-heading text-2xl font-semibold text-forest mb-4">
                1422 — The Beginning
              </h3>
              <p className="text-brown leading-relaxed">
                Founded in 1422, The Anchor Bridge began as a riverside inn serving medieval traders and travelers crossing the South Tyne. The building's original stone foundations still stand today, a testament to centuries of Northumberland craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream rounded-lg p-6 border border-brass">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                  Tudor & Stuart Era
                </h3>
                <p className="text-brown">
                  Through the turbulent Border Reiver period, the inn provided safe haven for travelers navigating the contested English-Scottish borderlands.
                </p>
              </div>

              <div className="bg-cream rounded-lg p-6 border border-brass">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                  Victorian Prosperity
                </h3>
                <p className="text-brown">
                  The arrival of the railway brought new prosperity, with the inn serving industrialists, merchants, and tourists exploring Hadrian's Wall.
                </p>
              </div>

              <div className="bg-cream rounded-lg p-6 border border-brass">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                  20th Century
                </h3>
                <p className="text-brown">
                  Through two world wars and social change, The Anchor Bridge remained a constant presence in Haydon Bridge community life.
                </p>
              </div>

              <div className="bg-cream rounded-lg p-6 border border-brass">
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                  Today
                </h3>
                <p className="text-brown">
                  We honor our heritage while embracing modern comfort, offering visitors the same warm welcome that has defined us for six centuries.
                </p>
              </div>
            </div>

            <div className="bg-forest text-offwhite rounded-lg p-8 text-center">
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Become Part of Our Story
              </h3>
              <p className="text-lg mb-6">
                Join the countless travelers who have found rest, refreshment, and good company at The Anchor Bridge.
              </p>
              <a href="/rooms" className="btn-primary">
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
