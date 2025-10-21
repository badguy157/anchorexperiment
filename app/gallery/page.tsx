// app/gallery/page.tsx
import Image from "next/image";
import TitleBand from "@/components/TitleBand";

export const metadata = { title: "Gallery · The Anchor" };

const gallery: { alt: string; src: string }[] = [
  // NEW additions from /public
  { alt: "Heritage plaque", src: "/history-plaque.jpg" },
  { alt: "Hero poster still", src: "/hero-poster.jpg" },
  { alt: "Anchor riverside hero", src: "/anchor-hero.jpg" },

  // Existing images
  { alt: "Anchor exterior", src: "/Anchor Hotel and Ivy Pathway.png" },
  { alt: "Secret Garden Café", src: "/venues/secret-garden-cafe.jpg" },
  { alt: "Salmon’s Leap Restaurant", src: "/venues/salmons-leap.jpg" },
  { alt: "Judge & Barrel Bar", src: "/venues/judge-barrel-bar.jpg" },
  { alt: "Commodore Lounge", src: "/venues/commodore-lounge.jpg" },
  { alt: "Double ensuite", src: "/rooms/double-ensuite/double-ensuite-1.jpg" },
  { alt: "Twin ensuite", src: "/rooms/twin-room-ensuite/twin1.jpg" },
  { alt: "Family suite", src: "/rooms/family-suite/family1.jpg" },
  { alt: "Hadrian’s Wall", src: "/explore/hadrians-wall.jpg" },
  { alt: "Hexham Abbey", src: "/explore/hexham-abbey.jpg" },
  { alt: "Allen Banks", src: "/explore/allen-banks.jpg" },
  { alt: "Kielder", src: "/explore/kielder.jpg" },
];

export default function GalleryPage() {
  return (
    <main>
      <TitleBand
        eyebrow="Photos"
        title="Gallery"
        subtitle="A look around the inn — rooms, bar, café garden and village."
        align="center"
      />

      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden border border-cream bg-cream"
              >
                <Image
                  src={g.src || "/Anchor Hotel and Ivy Pathway.png"}
                  alt={g.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
                <figcaption className="sr-only">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
