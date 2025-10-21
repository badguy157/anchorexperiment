// app/explore/page.tsx
import Image from "next/image";
import Link from "next/link";
import { attractions } from "@/lib/data";

// ---- Extra cards to round out the grid (edit freely) ----
const EXTRA_ATTRACTIONS = [
  {
    title: "North Pennines AONB",
    distance: "20–30 mins",
    image: "/explore/north-pennines.jpg",
    description:
      "Open moorland, big skies and stone villages across the Area of Outstanding Natural Beauty.",
    href: "https://www.northpennines.org.uk/",
  },
  {
    title: "Tyne Valley Railway",
    distance: "8–10 min walk",
    image: "/explore/tyne-valley-railway.jpg",
    description:
      "Scenic trains along the Tyne between Carlisle and Newcastle. Hexham is one stop away.",
    href: "https://www.northernrailway.co.uk/",
  },
];

const HIGHLIGHTS = [...attractions, ...EXTRA_ATTRACTIONS];

type Walk = { name: string; distance: string; time: string; note?: string };
type Trip = { name: string; time: string; note?: string; href?: string };

const WALKS_FROM_DOOR: Walk[] = [
  { name: "South Tyne Riverside Loop", distance: "2.5 mi / 4 km", time: "50–70 mins", note: "Flat, easy; pub at the end (nice at dusk)." },
  { name: "Haydon Old Church & Ridge", distance: "3.5 mi / 5.6 km", time: "1.5–2 hrs", note: "Short climb; big valley views." },
  { name: "Allen Banks Woodland", distance: "Varies", time: "1–3 hrs", note: "15 mins by car; suspension bridge & riverside trails." },
];

const DAY_TRIPS: Trip[] = [
  { name: "Vindolanda & Roman Army Museum", time: "20–30 mins", note: "Live archaeology & world-class digs", href: "https://www.vindolanda.com/" },
  { name: "Hadrian’s Wall (Steel Rigg / Crag Lough)", time: "25 mins", note: "Iconic ridge walk", href: "https://www.nationaltrail.co.uk/" },
  { name: "Hexham & Abbey", time: "15 mins", note: "Market town & indie shops", href: "https://www.visitnorthumberland.com/" },
  { name: "Kielder Water & Forest Park", time: "45–60 mins", note: "Dark skies, biking, water sports", href: "https://www.visitkielder.com/" },
  { name: "Langley Castle", time: "5–10 mins", note: "14th-century fortress & tearoom", href: "https://www.langleycastle.co.uk/" },
];

export default function ExplorePage() {
  return (
    <main className="section bg-offwhite">
      {/* Header */}
      <header className="container-wide text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-bold">Explore Northumberland</h1>
        <p className="mt-2 text-timber/80 max-w-2xl mx-auto">
          Walk Hadrian’s Wall, wander woodlands, and discover riverside villages from our doorstep.
        </p>
        <div className="rule my-6" />
      </header>

      <div className="container-wide">
        {/* 1) Highlights nearby */}
        <section aria-labelledby="highlights-title">
          <h2 id="highlights-title" className="sr-only">Highlights nearby</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIGHLIGHTS.map((a: any, i: number) => {
              const src = a.image ?? "/Anchor Hotel and Ivy Pathway.png";
              return (
                <article
                  key={`${a.title}-${i}`}
                  className="bg-cream rounded-lg overflow-hidden border border-cream shadow-sm flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={src}
                      alt={a.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading text-xl font-semibold text-forest">{a.title}</h3>
                    {a.distance ? (
                      <p className="text-brass font-semibold mt-1">{a.distance}</p>
                    ) : null}
                    <p className="text-brown mt-2 flex-1">{a.description}</p>
                    {a.href ? (
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 link"
                      >
                        Official site
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* soft divider */}
        <div className="my-8 border-t border-stone/40" />

        {/* 2) Context second: map + quick distances */}
        <section className="grid lg:grid-cols-[1.4fr_.6fr] gap-6 items-stretch">
          <div className="card p-0 overflow-hidden">
            <iframe
              title="The Anchor Hotel — map"
              className="block w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.981024352248!2d-2.2487357!3d54.9738939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eebe2f8c1a9d1%3A0x8a8e2a8a0f0d2ec4!2sThe%20Anchor%20Hotel!5e0!3m2!1sen!2suk!4v1700000000000"
            />
          </div>
          <aside className="card p-5">
            <h2 className="font-display text-lg font-bold text-forest">Where we are</h2>
            <p className="mt-2 text-timber/90">
              Haydon Bridge sits between Hexham and Haltwhistle on the River South Tyne—perfect for
              Hadrian’s Wall country, woodland valleys and dark skies.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-timber/80">
              <li><strong>Hexham:</strong> ~15 mins</li>
              <li><strong>Vindolanda:</strong> ~20–25 mins</li>
              <li><strong>Steel Rigg (Wall):</strong> ~25 mins</li>
              <li><strong>Kielder:</strong> ~45–60 mins</li>
            </ul>
          </aside>
        </section>

        {/* 3) Helpful cards: walks / day trips / practical */}
        <section className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Walks from the door */}
          <div className="card p-5">
            <h2 className="font-display text-lg font-bold text-forest">Walks from the door</h2>
            <ul className="mt-3 space-y-2">
              {WALKS_FROM_DOOR.map((w, i) => (
                <li key={i} className="text-timber/90">
                  <span className="font-semibold">{w.name}</span>
                  <span className="text-timber/70"> — {w.distance} · {w.time}</span>
                  {w.note ? <div className="text-sm text-timber/70">{w.note}</div> : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Day trips */}
          <div className="card p-5">
            <h2 className="font-display text-lg font-bold text-forest">Day trips</h2>
            <ul className="mt-3 space-y-2">
              {DAY_TRIPS.map((t, i) => (
                <li key={i} className="text-timber/90">
                  {t.href ? (
                    <a href={t.href} target="_blank" rel="noopener noreferrer" className="link font-semibold">
                      {t.name}
                    </a>
                  ) : (
                    <span className="font-semibold">{t.name}</span>
                  )}
                  <span className="text-timber/70"> — {t.time}</span>
                  {t.note ? <div className="text-sm text-timber/70">{t.note}</div> : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Practical info */}
          <div className="card p-5">
            <h2 className="font-display text-lg font-bold text-forest">Practical info</h2>
            <ul className="mt-3 space-y-2 text-timber/90">
              <li><strong>By train:</strong> Haydon Bridge station (8–10 min walk). Hexham is the next stop east.</li>
              <li><strong>By car:</strong> A69 to Haydon Bridge. Parking available in the village near the inn.</li>
              <li><strong>Buses:</strong> Regular services along the Tyne Valley (check local timetables).</li>
              <li><strong>Seasons:</strong> Wildflowers late spring; best Wall walking May–Oct; dark skies all year.</li>
            </ul>
            <div className="mt-3 text-sm text-timber/70">
              Need suggestions? Ask at the bar—we’re happy to point you to a favourite route.
            </div>
          </div>
        </section>

        <div className="text-center mt-10">
          <Link href="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}