// app/story/page.tsx
import Image from "next/image";
import Timeline from "@/components/Timeline";
import PlaqueFrame from "@/components/PlaqueFrame";

export const metadata = { title: "Our Story · The Anchor" };

export default function StoryPage() {
  return (
    <main>
      {/* Hero image */}
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
      />

      {/* Centered page header */}
      <section className="section bg-offwhite">
        <header className="container-wide text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Six Centuries of Welcome
          </h1>
        <p className="mt-2 text-timber/80 max-w-2xl mx-auto">
            From court and gaol to riverside inn, still rooted in Northumberland craft.
          </p>
          <div className="rule my-6" />
        </header>

        {/* 1) Chronicle + framed plaque (content first) */}
        <section className="section pt-0">
          <div className="container-wide grid lg:grid-cols-[1.2fr_.8fr] gap-6 items-start">
            {/* Narrative */}
            <article className="card p-6">
              <h2 className="font-display text-2xl font-bold">Chronicle</h2>

              <p className="mt-3 text-timber/90">
                The Anchor stands on ground long tied to local justice and hospitality.
                Records point to an inn here in 1422, when the site also served as a
                court and gaol. A century later, a letter from the Earl of Northumberland
                to Cardinal Wolsey in 1528 mentions the execution of Jamys Noble.
              </p>

              <p className="mt-3 text-timber/90">
                Through the early modern period the premises formed part of the leet and
                court baron of the Barony of Langley. After the 1715 Jacobite rising,
                Radcliffe lands were confiscated and administered via Greenwich Hospital.
              </p>

              <p className="mt-3 text-timber/90">
                By the mid-eighteenth century the house had taken the name “The Anchor,”
                a nod to that Admiralty link. Reports speak of a courthouse on the south
                bank with a commodious inn raised by the commissioners. What was known
                as the Admiral’s House—now incorporated within the hotel—accommodated
                their receivers on business.
              </p>

              <p className="mt-3 text-timber/90">
                In the coaching era the Anchor grew busy thanks to its midway position
                between Newcastle and Carlisle. In 1812 it became the original meeting
                place of the Haydon Hunt, often cited as the oldest hunt in Northumberland.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                  <h3 className="font-semibold">Key dates</h3>
                  <ul className="mt-2 list-disc pl-5 text-timber/90">
                    <li><strong>1422</strong>: first reference to an inn on this site</li>
                    <li><strong>1528</strong>: letter mentions execution of Jamys Noble</li>
                    <li><strong>1715</strong>: estate passes to Admiralty / Greenwich Hospital</li>
                    <li><strong>c.1750s</strong>: “The Anchor” name in use; inn enlarged</li>
                    <li><strong>1812</strong>: Haydon Hunt meets at The Anchor</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4">
                  <h3 className="font-semibold">Today</h3>
                  <p className="mt-2 text-timber/90">
                    Still an inn and café by the South Tyne, with simple rooms and breakfast,
                    a lively bar, and a quiet garden welcoming walkers, cyclists and families.
                  </p>
                </div>
              </div>
            </article>

            {/* Framed plaque */}
            <PlaqueFrame />
          </div>
        </section>

        {/* 2) Compact timeline summary (moved below chronicle) */}
        <Timeline />
      </section>
    </main>
  );
}
