// app/entertainment/page.tsx
import TitleBand from "@/components/TitleBand";
import { events } from "@/lib/data";

export const metadata = { title: "What’s On · The Anchor" };

export default function EntertainmentPage() {
  return (
    <main>
      <TitleBand
        eyebrow="Events"
        title="What’s On"
        subtitle="Live music nights, quiz evenings, and local happenings at The Anchor."
        align="center"
      />

      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event: any, i: number) => (
              <article key={i} className="card p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 text-sm text-timber/70">
                  {event.date && (
                    <span className="inline-flex items-center rounded-full border border-black/10 px-2 py-0.5 bg-white/70">
                      {event.date}
                    </span>
                  )}
                  {event.time && <span>{event.time}</span>}
                  {event.location && <span className="truncate">{event.location}</span>}
                </div>

                <h2 className="mt-2 font-display text-xl font-semibold text-forest">
                  {event.title}
                </h2>

                {event.description && (
                  <p className="mt-2 text-timber/90">{event.description}</p>
                )}

                {(event.tags?.length || event.price) && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {event.tags?.map((t: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-xs rounded-full border border-black/10 bg-white/70 px-2 py-0.5 text-timber/80"
                      >
                        {t}
                      </span>
                    ))}
                    {event.price && (
                      <span className="text-xs rounded-full border border-black/10 bg-white/70 px-2 py-0.5 text-timber/80">
                        {event.price}
                      </span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
