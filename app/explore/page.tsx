// app/explore/page.tsx
import Image from "next/image";
import Link from "next/link";
import { attractions } from "@/lib/data";

export default function ExplorePage() {
  return (
    <main className="section-padding bg-offwhite">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">
            Explore Northumberland
          </h1>
          <p className="text-brown text-lg max-w-2xl mx-auto">
            Walk Hadrian’s Wall, wander woodlands, and discover riverside villages from our doorstep.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((a, i) => {
            const src = a.image ?? "/Anchor Hotel and Ivy Pathway.png"; // <- SAFE fallback
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-heading text-xl font-semibold text-forest mb-2">
                    {a.title}
                  </h2>
                  {"distance" in a && a.distance ? (
                    <p className="text-brass font-semibold mb-2">{(a as any).distance}</p>
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
    </main>
  );
}
