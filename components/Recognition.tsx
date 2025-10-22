// components/Recognition.tsx
import Image from "next/image";

type Props = {
  plaqueSrc: string;        // e.g. "/images/plaque.jpg"
  plaqueAlt: string;        // descriptive alt text
  headline?: string;        // e.g. "Recognized by the Anchorage Heritage Council"
  blurb?: string;           // short 1–2 sentence context
  transcript: string;       // full plaque text (transcribed)
  citeHref?: string;        // link to source/organization page (optional)
  citeLabel?: string;       // e.g. "Anchorage Heritage Council"
  awardName?: string;       // for JSON-LD "award" (optional)
};

export default function Recognition({
  plaqueSrc,
  plaqueAlt,
  headline = "Recognition",
  blurb,
  transcript,
  citeHref,
  citeLabel,
  awardName,
}: Props) {
  return (
    <section id="recognition" className="mx-auto my-16 max-w-5xl px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Recognition</h2>
        {headline && headline !== "Recognition" && (
          <p className="mt-1 text-sm text-muted-foreground">{headline}</p>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr,2fr] items-start">
        <figure className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={plaqueSrc}
            alt={plaqueAlt}
            width={1200}
            height={1600}
            className="h-auto w-full object-cover"
            priority={false}
          />
          {citeHref && citeLabel && (
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              Source:{" "}
              <a
                href={citeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {citeLabel}
              </a>
            </figcaption>
          )}
        </figure>

        <div>
          {blurb && <p className="mb-4 text-base">{blurb}</p>}
          <div className="rounded-xl border p-4 bg-card">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Full plaque text (transcribed)
            </p>
            <p className="whitespace-pre-wrap leading-relaxed">{transcript}</p>
          </div>
        </div>
      </div>

      {/* Optional JSON-LD for a small SEO bump */}
      {awardName && (
        <script
          type="application/ld+json"
          // If you already publish LocalBusiness JSON-LD elsewhere, merge this instead of adding a second block.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Anchor Experiment", // <-- change to your property/business name
              image: plaqueSrc.startsWith("/") ? undefined : plaqueSrc,
              award: awardName,
              url: "https://anchorexperiment.example.com", // <-- your site URL
            }),
          }}
        />
      )}
    </section>
  );
}
