// app/story/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | The Anchor Hotel",
  description:
    "How The Anchor Hotel came to be — our history, the building, and the people who shaped it.",
  openGraph: {
    title: "Our Story | The Anchor Hotel",
    description:
      "How The Anchor Hotel came to be — our history, the building, and the people who shaped it.",
    type: "article",
    images: [{ url: "/images/story-hero.jpg" }],
  },
};

export default function StoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "The Anchor Hotel",
    url: "https://your-domain.example", // ← replace with your real domain
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anchorage",
      addressRegion: "AK",
      addressCountry: "US",
    },
    award: "Anchorage Heritage Site", // remove if not applicable
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mb-12 grid items-center gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">
            The Story of The Anchor Hotel
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From a neighborhood landmark to a warm, modern stay — this is our
            journey, the community that shaped us, and the building that still
            anchors our sense of place in Anchorage.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/rooms"
              className="rounded-2xl border bg-foreground px-5 py-3 text-background shadow hover:opacity-90"
            >
              Explore Rooms
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border px-5 py-3 shadow hover:bg-accent"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/story-hero.jpg" // replace with your image or remove the <Image />
            alt="Historic exterior of The Anchor Hotel in Anchorage"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Origins */}
      <section className="prose prose-zinc max-w-none dark:prose-invert">
        <h2>Beginnings</h2>
        <p>
          The Anchor Hotel started with a simple belief: hospitality should feel
          personal, crafted, and rooted in its surroundings. We restored this
          property with respect for its original bones — keeping what’s
          beautiful, updating what’s needed, and adding a touch of Anchorage
          character to every room.
        </p>
        <p>
          Through seasons of midnight sun and winter quiet, we’ve prioritized
          craftsmanship, natural materials, and energy-smart upgrades so the
          space feels welcoming the moment you step inside.
        </p>
      </section>

      {/* Timeline */}
      <section className="my-12">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">Milestones</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            A few highlights along the way.
          </p>
        </div>
        <ol className="relative space-y-8 border-l pl-6">
          <li>
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border bg-background" />
            <h3 className="font-medium">Original Construction (19XX)</h3>
            <p className="text-sm text-muted-foreground">
              The structure that would become The Anchor Hotel takes shape on a
              quiet Anchorage block.
            </p>
          </li>
          <li>
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border bg-background" />
            <h3 className="font-medium">Thoughtful Restoration (20XX)</h3>
            <p className="text-sm text-muted-foreground">
              Modern systems meet preserved period details through careful,
              craftsman-led updates.
            </p>
          </li>
          <li>
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border bg-background" />
            <h3 className="font-medium">Community Opening (20XX)</h3>
            <p className="text-sm text-muted-foreground">
              We open our doors and begin welcoming guests and neighbors.
            </p>
          </li>
        </ol>
      </section>

      {/* Plaque / Recognition */}
      <section className="mt-16 grid gap-8 md:grid-cols-[0.9fr,1.1fr]">
        <div className="overflow-hidden rounded-2xl border p-4">
          <Image
            src="/images/plaque.jpg" // put your photo at public/images/plaque.jpg
            alt="Bronze heritage plaque mounted near the entrance"
            width={1200}
            height={900}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Anchorage Heritage Recognition
          </h2>
          <p className="mt-2 text-muted-foreground">
            Our building is recognized for its contribution to Anchorage’s
            cultural and architectural story.
          </p>

          <div className="mt-6 rounded-xl bg-muted/40 p-4 text-sm">
            <p className="mb-2 font-medium">Plaque Inscription</p>
            <pre className="whitespace-pre-wrap font-mono text-sm leading-6">
{`ANCHORAGE HERITAGE SITE
Established 19XX

This property is recognized for its contribution
to the cultural and architectural history of Anchorage.

(Replace this with the exact plaque wording,
including original line breaks.)`}
            </pre>
          </div>

          {/* Optional citation link */}
          {/* <a
            href="https://example.org/heritage/your-page"
            className="mt-4 inline-block underline underline-offset-4"
          >
            Anchorage Heritage Council
          </a> */}
        </div>
      </section>

      {/* Ethos */}
      <section className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-semibold">Our Ethos</h3>
          <p className="mt-2 text-muted-foreground">
            Hospitality starts with listening — to our guests, our neighborhood,
            and this place. Expect small, thoughtful touches: locally roasted
            coffee, cozy textiles, and details that make Anchorage winters
            warmer and summers lighter.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-semibold">Looking Ahead</h3>
          <p className="mt-2 text-muted-foreground">
            We’re committed to sustainable improvements and community-minded
            partnerships, while preserving the character that makes The Anchor
            Hotel unmistakably Anchorage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="my-16 rounded-2xl border p-8 text-center">
        <h3 className="text-2xl font-semibold">Come write your own chapter</h3>
        <p className="mt-2 text-muted-foreground">
          Whether you’re here for midnight sun or northern lights, we’d love to
          host you.
        </p>
        <div className="mt-6">
          <Link
            href="/rooms"
            className="inline-block rounded-2xl border bg-foreground px-6 py-3 text-background shadow hover:opacity-90"
          >
            See availability
          </Link>
        </div>
      </section>
    </main>
  );
}
