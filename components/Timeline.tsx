// components/Timeline.tsx
export default function Timeline() {
  const items = [
    { era: "1422", title: "Court & Gaol", text: "Records point to a courthouse and gaol on this site." },
    { era: "1700s", title: "Coaching Inn", text: "Travellers crossed the South Tyne and supped by the fire." },
    { era: "1900s", title: "Riverside Tavern", text: "Local ales and salmon suppers became our staples." },
    { era: "Today", title: "Inn & Café", text: "Rooms with breakfast, a lively bar, and a quiet café garden." },
  ];

  return (
    <section className="section pt-0">
      <div className="container-wide">
        {/* Subtle section label */}
        <div className="text-center mb-4">
          <p className="text-xs tracking-wide text-timber/60">TIMELINE</p>
        </div>

        {/* Slimmer cards for summary feel */}
        <div className="grid md:grid-cols-4 gap-5">
          {items.map((i) => (
            <div key={i.title} className="card p-5">
              <div className="text-brass font-semibold">{i.era}</div>
              <div className="mt-1 font-semibold">{i.title}</div>
              <p className="mt-2 text-timber/80">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
