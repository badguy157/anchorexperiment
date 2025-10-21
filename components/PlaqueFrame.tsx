// components/PlaqueFrame.tsx
import Image from "next/image";

export default function PlaqueFrame({
  src = "/history-plaque.jpg",
  alt = "Historic plaque describing the history of The Anchor",
  caption = "Heritage plaque summarising archival notes, from the 1422 inn reference and Tudor correspondence to Greenwich Hospital’s stewardship and the coaching-inn era.",
}: {
  src?: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <aside className="card overflow-hidden p-0">
      {/* Outer frame */}
      <div className="bg-forest/95 p-1 rounded-b-none">
        {/* Brass frame edge */}
        <div className="border-4 border-brass rounded-md p-2 bg-gradient-to-b from-brass/10 to-transparent">
          {/* Mat */}
          <div className="rounded-md bg-parchment p-2 ring-1 ring-black/10">
            {/* Plaque */}
            <figure className="relative w-full h-80 sm:h-[28rem] rounded-sm overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Caption */}
      <figcaption className="p-4 text-sm text-timber/80">
        {caption}
      </figcaption>
    </aside>
  );
}
