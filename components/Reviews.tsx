// components/Reviews.tsx
import { Star } from 'lucide-react';

type Review = {
  name: string;
  text: string;
  rating?: number;
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
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: r.rating ?? 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 text-brass fill-brass" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-timber/90 leading-relaxed">{r.text}</p>
              <p className="mt-4 text-sm text-timber/70">— {r.name}</p>
            </article>
          ))}
        </div>

        {/* Intentionally no "More Reviews" button */}
      </div>
    </section>
  );
}
