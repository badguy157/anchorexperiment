// app/explore/page.tsx
import Image from "next/image";
import Link from "next/link";
import TitleBand from "@/components/TitleBand";
import { attractions } from "@/lib/data";

export const metadata = { title: "Explore · The Anchor" };

export default function ExplorePage() {
  return (
    <main className="bg-offwhite">
      <TitleBand
        eyebrow="Around Us"
        title="Explore Northumberland"
        subtitle="Walk Hadrian’s Wall, wander woodlands, and discover riverside villages from our doorstep."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((a, i) => {
              const src = a.image ?? "/Anchor Hotel and Ivy Pathway.png"; // safe fallback
              return (
                <article
                  key={`${a.title}-${i}`}
                  className="bg-cream rounded-lg overflow-hidden border border-cream shadow-sm"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={src}
                      alt={a.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <h2 className="font-heading text-xl font-semibold text-forest mb-2">
                      {a.title}
                    </h2>

                    {"distance" in a && a.distance ? (
                      <p className="text-brass font-semibold mb-2">
                        {(a as any).distance}
                      </p>
                    ) : null}

                    <p className="text-brown">{a.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
