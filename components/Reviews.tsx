export default function Reviews(){
  const items = [
    { quote: 'Warm, genuine welcome and a cracking pint.', src: 'Google', stars: 5 },
    { quote: 'Perfect base for Hadrian’s Wall walks.', src: 'Tripadvisor', stars: 5 },
    { quote: 'Rooms comfy, breakfast spot on.', src: 'Booking.com', stars: 4 },
  ];
  return (
    <section className="section">
      <div className="container-narrow">
        <h2 className="text-3xl sm:text-4xl font-display text-center">Guests Say</h2>
        <div className="rule my-6 mx-auto max-w-md"></div>
        <ul className="grid sm:grid-cols-3 gap-6">
          {items.map((r, idx)=>(
            <li key={idx} className="card p-5 text-center">
              <div className="text-brass text-lg" aria-hidden>
                {'★★★★★☆☆☆☆☆'.slice(0, r.stars)}
              </div>
              <p className="mt-3 text-timber/90">{r.quote}</p>
              <div className="mt-3 text-xs text-timber/60">— {r.src}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
