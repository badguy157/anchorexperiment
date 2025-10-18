export default function Timeline(){
    const events = [
      { year: '1422', title: 'Court & Gaol', blurb: 'Records point to a courthouse and gaol on this site.' },
      { year: '1700s', title: 'Coaching Inn', blurb: 'Travelers crossed the South Tyne and supped by the fire.' },
      { year: '1900s', title: 'Riverside Tavern', blurb: 'Local ales and salmon suppers became our staples.' },
      { year: 'Today', title: 'Inn & Café', blurb: 'Rooms with breakfast, a lively bar, and a quiet café garden.' },
    ];
    return (
      <section className="section">
        <div className="container-wide">
          <p className="uppercase tracking-[0.2em] text-timber/60 text-xs">Our Story</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display">From Court &amp; Gaol to Riverside Inn</h2>
          <div className="rule my-6"></div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map(e=>(
              <li key={e.year} className="card p-5">
                <div className="text-brass font-display text-2xl">{e.year}</div>
                <div className="font-semibold mt-1">{e.title}</div>
                <p className="text-sm mt-2 text-timber/80">{e.blurb}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  