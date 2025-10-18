"use client";

type Review = {
  quote: string;
  author: string;
  rating?: number; // default 5
};

const REVIEWS: Review[] = [
  {
    quote:
      "Cozy room, lovely breakfast, and the river view was perfect.",
    author: "Sarah K.",
    rating: 5,
  },
  {
    quote:
      "Proper pub downstairs and friendly staff. Will be back!",
    author: "Tom P.",
    rating: 5,
  },
  {
    quote:
      "Great base for walking Hadrian’s Wall. Clean and comfortable.",
    author: "Elena R.",
    rating: 5,
  },
];

function Star({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  // Inline star that follows currentColor, so Tailwind text color works
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 17.27l-5.18 3.05 1.3-5.59-4.32-3.76 5.66-.49L12 5l2.54 5.48 5.66.49-4.32 3.76 1.3 5.59z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-display font-bold">
          Recent Reviews
        </h2>

        <div className="rule my-6" />

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, idx) => (
            <article key={idx} className="card p-6">
              <div className="mb-2 flex gap-1 text-brass">
                {Array.from({ length: r.rating ?? 5 }).map((_, i) => (
                  <Star key={i} size={16} />
                ))}
              </div>
              <p className="text-timber/90">{r.quote}</p>
              <div className="mt-3 text-sm text-timber/70">— {r.author}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
