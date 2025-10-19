export default function Timeline() {
  return (
    <section className="section">
      <div className="container-wide">
        {/* section heading in a subtle card */}
        <div className="card px-5 py-4 mb-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Story</h2>
          <p className="mt-1 text-timber/80">From Court &amp; Gaol to Riverside Inn</p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            {
              era: '1422',
              title: 'Court & Gaol',
              text: 'Records point to a courthouse and gaol on this site.',
            },
            {
              era: '1700s',
              title: 'Coaching Inn',
              text: 'Travelers crossed the South Tyne and supped by the fire.',
            },
            {
              era: '1900s',
              title: 'Riverside Tavern',
              text: 'Local ales and salmon suppers became our staples.',
            },
            {
              era: 'Today',
              title: 'Inn & Café',
              text: 'Rooms with breakfast, a lively bar, and a quiet café garden.',
            },
          ].map((i) => (
            <div key={i.title} className="card p-5">
              <div className="text-brass font-medium">{i.era}</div>
              <div className="mt-1 font-semibold">{i.title}</div>
              <p className="mt-2 text-timber/80">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
