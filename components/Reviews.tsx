export default function Reviews() {
  const items = [
    {
      text: 'Cozy room, lovely breakfast, and the river view was perfect.',
      author: 'Sarah K.',
    },
    {
      text: 'Proper pub downstairs and friendly staff. Will be back!',
      author: 'Tom P.',
    },
    {
      text: 'Great base for walking Hadrian’s Wall. Clean and comfortable.',
      author: 'Elena R.',
    },
  ];

  return (
    <section className="section">
      <div className="container-wide">
        <div className="card px-5 py-4 mb-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Recent Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex gap-1 text-brass" aria-hidden>
                {'★★★★★'.split('').map((s, i) => <span key={i}>★</span>)}
              </div>
              <p className="mt-3">{it.text}</p>
              <div className="mt-4 text-timber/70">— {it.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
