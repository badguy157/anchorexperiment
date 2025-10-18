// components/Reviews.tsx

// Tiny inline star icon so we don't depend on lucide-react
function StarIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 17.27l-5.4 3.26 1.64-6.03L3 9.74l6.19-.53L12 3.5l2.81 5.71 6.19.53-5.24 4.76 1.64 6.03z" />
    </svg>
  );
}

type Review = {
  name: string;
  text: string;
  rating?: number; // 1..5
};

const REVIEWS: Review[] = [
  { name: 'Sarah K.', text: 'Cozy room, lovely breakfast, and the river view was perfect.', rating: 5 },
  { name: 'Tom P.', text: 'Proper pub downstairs and friendly staff. Will be back!', rating: 5 },
  { name: 'Elena R.', text: 'Great base for walking Hadrian’s Wall. Clean and comfortable.', rating: 4 },
];

export default function Reviews() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">Recent Reviews</h2>
        <div className="rule my-6"></div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <article key={i} className="card p-5 flex flex-col">
              <div className="flex items-center gap-2 text-brass">
                {Array.from({ length: r.rating ?? 5 }).map((_, idx) => (
                  <StarIcon key={idx} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-3 text-timber/90 leading-relaxed">{r.text}</p>
              <p className="mt-4 text-sm text-timber/70">— {r.name}</p>
            </article>
          ))}
        </div>

        {/* "More Reviews" intentionally removed */}
      </div>
    </section>
  );
}
