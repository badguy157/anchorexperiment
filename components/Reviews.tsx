'use client';

export default function Reviews() {
  const reviews = [
    {
      name: 'Emily P.',
      text: 'Fantastic riverside location and a cracking breakfast.',
      stars: 5,
    },
    {
      name: 'James R.',
      text: 'Room spotless, staff friendly, bar was lively!',
      stars: 5,
    },
    {
      name: 'Sophie M.',
      text: 'Lovely stay — will definitely be back.',
      stars: 5,
    },
  ];

  return (
    <section className="bg-offwhite py-16 md:py-20 border-t border-cream/60">
      <div className="container-custom px-4">
        <h2 className="text-center font-heading text-3xl md:text-4xl font-extrabold text-forest mb-10 md:mb-14">
          What Our Guests Say
        </h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-cream shadow-sm p-6 md:p-7"
            >
              {/* stars */}
              <div className="flex gap-1 text-brass text-xl mb-4" aria-label={`${r.stars} out of 5 stars`}>
                {'★★★★★'.slice(0, r.stars)}
              </div>

              <p className="text-brown/90 leading-relaxed mb-5 italic">“{r.text}”</p>
              <p className="text-forest font-semibold">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
