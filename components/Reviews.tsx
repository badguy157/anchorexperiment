// components/Reviews.tsx
type ReviewsProps = {
  /** Show the big heading card at the top. Default: true */
  showTitle?: boolean;
};

type Review = {
  rating: number; // 1–5
  text: string;
  author: string;
  source: "Google" | "Booking.com" | "Tripadvisor";
  date: string; // e.g. "Sep 2025"
  tag?: string; // e.g. "Couple", "Solo", "Family"
};

const REVIEWS: Review[] = [
  {
    rating: 5,
    text:
      "Riverside room was spotless and quiet. Proper breakfast (great coffee) and a warm hello every morning.",
    author: "Hannah D.",
    source: "Google",
    date: "Sep 2025",
    tag: "Couple",
  },
  {
    rating: 5,
    text:
      "Ideal base for Hadrian’s Wall—15–25 mins to the best stretches. Pub downstairs is friendly with good ales.",
    author: "Alex M.",
    source: "Booking.com",
    date: "Aug 2025",
    tag: "Walker",
  },
  {
    rating: 5,
    text:
      "Loved the salmon special and Sunday roast. Service was relaxed and genuine, not rushed.",
    author: "Priya S.",
    source: "Tripadvisor",
    date: "Aug 2025",
    tag: "Restaurant",
  },
  {
    rating: 5,
    text:
      "Family room worked perfectly—kids had their own beds, and breakfast included made it easy.",
    author: "Matt & Jo",
    source: "Google",
    date: "Jul 2025",
    tag: "Family",
  },
  {
    rating: 5,
    text:
      "Comfy bed, hot shower, and the river view at dusk is something else. Staff went out of their way with tips.",
    author: "Elena R.",
    source: "Google",
    date: "Jun 2025",
    tag: "Solo",
  },
  {
    rating: 5,
    text:
      "Quiet café garden for morning pastries; later, a proper pint by the fire. Feels like a real inn.",
    author: "Tom P.",
    source: "Tripadvisor",
    date: "May 2025",
    tag: "Bar & Café",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="text-brass" aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}{" "}
      <span className="sr-only">{`${n} out of 5`}</span>
    </div>
  );
}

function SourceBadge({ source }: { source: Review["source"] }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-0.5 text-xs text-timber/80 ring-1 ring-black/5">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden />
      {source}
    </span>
  );
}

export default function Reviews({ showTitle = true }: ReviewsProps) {
  return (
    <div className="container-wide">
      {showTitle && (
        <div className="card p-6 mb-6">
          <h3 className="text-2xl font-display font-semibold">Recent Reviews</h3>
          <p className="mt-1 text-timber/80 text-sm">
            Highlights from Google, Booking.com and Tripadvisor.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((r, i) => (
          <article key={i} className="card p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <Stars n={r.rating} />
              <SourceBadge source={r.source} />
            </div>

            <p className="mt-3">{r.text}</p>

            <div className="mt-4 flex items-center justify-between text-sm text-timber/70">
              <span>— {r.author}</span>
              <span>
                {r.tag ? <span className="mr-2">{r.tag}</span> : null}
                {r.date}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Optional CTA to bolster trust; hide if not needed */}
      <div className="mt-6 text-center">
        <a href="/gallery" className="btn-light btn--sm">
          See more of the inn
        </a>
      </div>
    </div>
  );
}
