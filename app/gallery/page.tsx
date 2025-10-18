import Image from 'next/image';

const gallery: { alt: string; src: string }[] = [
  { alt: 'Anchor exterior', src: '/Anchor Hotel and Ivy Pathway.png' },
  { alt: 'Secret Garden Café', src: '/venues/secret-garden-cafe.jpg' },
  { alt: 'Salmon’s Leap Restaurant', src: '/venues/salmons-leap.jpg' },
  { alt: 'Judge & Barrel Bar', src: '/venues/judge-barrel-bar.jpg' },
  { alt: 'Commodore Lounge', src: '/venues/commodore-lounge.jpg' },
  { alt: 'Double ensuite', src: '/rooms/double-ensuite-1.jpg' },
  { alt: 'Twin ensuite', src: '/rooms/twin-room-ensuite/twin1.jpg' },
  { alt: 'Family suite', src: '/rooms/family-suite/family1.jpg' },
  { alt: 'Hadrian’s Wall', src: '/explore/hadrians-wall.jpg' },
  { alt: 'Hexham Abbey', src: '/explore/hexham-abbey.jpg' },
  { alt: 'Allen Banks', src: '/explore/allen-banks.jpg' },
  { alt: 'Kielder', src: '/explore/kielder.jpg' },
];

export default function GalleryPage() {
  return (
    <main className="section-padding bg-offwhite">
      <div className="container-custom">
        <h1 className="font-heading text-4xl font-bold text-forest mb-10 text-center">Gallery</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((g, i) => (
            <div key={i} className="relative h-56 rounded-lg overflow-hidden border border-cream bg-cream">
              <Image
                src={g.src || '/Anchor Hotel and Ivy Pathway.png'}
                alt={g.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
