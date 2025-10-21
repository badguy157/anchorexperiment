// components/Eventstrip.tsx
import Button from "@/components/Button";

type EventItem = {
  day: string;   // "Wed"
  name: string;  // "Trivia Night"
  time: string;  // "19:30" | "Matchdays"
  href?: string;
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export default function Eventstrip() {
  const items: EventItem[] = [
    { day: "Wed", name: "Trivia Night",  time: "19:30" },
    { day: "Fri", name: "Karaoke",       time: "20:00" },
    { day: "Sat", name: "Live Football", time: "Matchdays" },
    { day: "Fri", name: "Poker Night",   time: "19:30" },
  ];

  const maxShow = 6;
  const shown = items.slice(0, maxShow);
  const hasOverflow = items.length > shown.length;

  // If no items, show centered empty state with the correct link
  if (items.length === 0) {
    return (
      <section aria-labelledby="events-title" className="mt-6 sm:mt-8">
        <div className="container-wide">
          <div className="border-t border-stone/40" />
          <h2
            id="events-title"
            className="mt-3 text-center text-xs tracking-wide text-timber/70"
          >
            THIS WEEK AT THE ANCHOR
          </h2>
          <div className="card mt-4 p-4 text-sm text-timber text-center">
            No events this week — <a className="link" href="/entertainment">see the calendar</a>.
          </div>
          <div className="mt-4 border-b border-stone/40" />
        </div>
      </section>
    );
  }

  // IMPORTANT: point tiles to /entertainment (not /whats-on)
  const linkFor = (i: EventItem) => i.href || `/entertainment#${slugify(`${i.day}-${i.name}`)}`;

  const tileClasses =
    "block rounded-2xl bg-white p-3 shadow-md ring-1 ring-stone/40 " +
    "hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brass/60";

  return (
    <section aria-labelledby="events-title" className="mt-6 sm:mt-8">
      <div className="container-wide">
        {/* top separator */}
        <div className="border-t border-stone/40" />

        {/* Centered eyebrow/header */}
        <h2
          id="events-title"
          className="mt-3 mb-3 px-1 text-center text-xs tracking-wide text-timber/70"
        >
          THIS WEEK AT THE ANCHOR
        </h2>

        {/* Mobile: horizontal snap */}
        <div className="md:hidden">
          <ul
            role="list"
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-1 no-scrollbar"
            aria-label="Upcoming events"
          >
            {shown.map((i, idx) => (
              <li key={idx} className="flex-none snap-start min-w-[220px]">
                <a
                  href={linkFor(i)}
                  className={tileClasses}
                  aria-label={`${i.day} ${i.time} — ${i.name}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-timber">
                      <div className="text-xs text-timber/60">{i.day}</div>
                      <div className="font-semibold">{i.name}</div>
                    </div>
                    <div className="text-sm text-timber/70">{i.time}</div>
                  </div>
                </a>
              </li>
            ))}

            {hasOverflow && (
              <li className="flex-none snap-start min-w-[180px]">
                <a
                  href="/entertainment"
                  className={tileClasses + " text-center font-medium text-timber"}
                  aria-label="View more events"
                >
                  + more
                </a>
              </li>
            )}
          </ul>

          {/* Centered button (mobile) */}
          <div className="mt-3 px-1 flex justify-center">
            <Button href="/entertainment" variant="dark" size="sm">
              View all events
            </Button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:block">
          <ul role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Upcoming events">
            {shown.map((i, idx) => (
              <li key={idx}>
                <a
                  href={linkFor(i)}
                  className={tileClasses}
                  aria-label={`${i.day} ${i.time} — ${i.name}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-timber">
                      <div className="text-xs text-timber/60">{i.day}</div>
                      <div className="font-semibold">{i.name}</div>
                    </div>
                    <div className="text-sm text-timber/70">{i.time}</div>
                  </div>
                </a>
              </li>
            ))}

            {hasOverflow && (
              <li>
                <a
                  href="/entertainment"
                  className={tileClasses + " text-center font-medium text-timber"}
                  aria-label="View more events"
                >
                  + more
                </a>
              </li>
            )}
          </ul>

          {/* Centered button (desktop) */}
          <div className="mt-3 flex justify-center">
            <Button href="/entertainment" variant="dark" size="sm">
              View all events
            </Button>
          </div>
        </div>

        {/* bottom separator */}
        <div className="mt-4 border-b border-stone/40" />
      </div>
    </section>
  );
}
