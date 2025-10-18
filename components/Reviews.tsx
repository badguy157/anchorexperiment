// components/Reviews.tsx
type Review = {
  name: string;
  location?: string;
  text: string;
  stars?: number; // 1–5
};

const REVIEWS: Review[] = [
  {
    name: "Megan R.",
    location: "Newcastle upon Tyne",
    text: "Lovely room and the roast was spot on. Staff were warm and the river setting is gorgeous.",
    stars: 5,
  },
  {
    name: "Tom S.",
    location: "Leeds",
    text: "Proper Northumbrian welcome. Great ales and a cracking breakfast included.",
    stars: 5,
  },
  {
    name: "Alice P.",
    location: "Edinburgh",
    text: "Walked to Hadrian’s Wall from the village—perfect base and the pub still feels like a local.",
    stars: 4,
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-brass">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <path d="M8 1.6l1.9 3.8 4.2.6-3 3 0.7 4.3L8 11.7 4.1 13.3 4.8 9 1.8 6l4.2-.6L8 1.6z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section">
      <div className="container-wide">
        <h2 className="font-display text-3xl sm:text-4xl">Recent Reviews</h2>
        <div className="rule my-6"></div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <Stars n={r.stars ?? 5} />
              <p className="mt-3 text-timber/90">{r.text}</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-timber/70">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-forest/15 text-forest font-semibold">
                  {r.name.split(' ').map(x => x[0]).join('').slice(0,2)}
                </div>
                <div>
                  <div className="font-semibold text-timber">{r.name}</div>
                  {r.location && <div className="text-timber/70">{r.location}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a href="/reviews" className="btn btn-outline no-underline">More reviews</a>
        </div>
      </div>
    </section>
  );
}
