import Image from "next/image";
import Link from "next/link";
import VenueCard from "@/components/VenueCard";
import RoomCard from "@/components/RoomCard";
import { venues, rooms, events, attractions, reviews } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      {/* HERO (video) */}
{/* HERO (video, cropped + polished copy/buttons) */}
<section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
  {/* Video background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <video
      className="h-full w-full object-cover scale-110 md:scale-[1.15] will-change-transform"
      autoPlay
      muted
      loop
      playsInline
      poster="/hero-poster.jpg"
      preload="metadata"
    >
      <source src="/hero.webm" type="video/webm" />
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Readability overlays */}
    <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
  </div>

  {/* Copy + CTAs */}
  <div className="relative z-10 mx-auto max-w-4xl px-4">
    <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 md:p-10">
      <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-offwhite drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        The Anchor Hotel
      </h1>
      <p className="font-heading text-2xl md:text-3xl mt-2 text-offwhite/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
        Riverside Tavern &amp; Inn Since 1422
      </p>
      <p className="mt-3 md:mt-4 text-base md:text-lg text-offwhite/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
        Eat, drink, and stay by the South Tyne in the heart of Haydon Bridge.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Primary */}
        <Link
          href="/rooms"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base md:text-lg font-semibold
                     bg-[var(--brass)] text-forest shadow-lg shadow-black/25
                     ring-1 ring-black/20 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5
                     transition duration-200"
        >
          Check availability
        </Link>

        {/* Secondary */}
        <Link
          href="/eat-and-drink"
          className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base md:text-lg font-semibold
                     bg-white/90 text-[var(--forest)] hover:bg-white shadow-lg shadow-black/20
                     ring-1 ring-black/10 hover:-translate-y-0.5 transition duration-200"
        >
          Eat &amp; Drink
        </Link>
      </div>
    </div>
  </div>
</section>



      {/* STORY */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/Anchor Hotel and Ivy Pathway.png"
                alt="Historic Anchor Hotel building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl font-bold text-forest mb-6">Six Centuries of Welcome</h2>
              <div className="space-y-4 text-brown leading-relaxed">
                <p>For over six centuries, The Anchor has welcomed travelers and locals alike.</p>
                <p>
                  Nestled beside the River South Tyne in Haydon Bridge, our inn, tavern, and café offer hearty food,
                  well-kept drinks, and a restful night’s sleep — all with the charm of a truly historic Northumberland setting.
                </p>
              </div>
              <Link href="/story" className="inline-block mt-6 text-forest font-semibold hover:text-brass transition-colors">
                Read our full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EAT & DRINK */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">Eat & Drink — Our Venues</h2>
            <p className="text-brown text-lg max-w-2xl mx-auto">
              From morning coffee to evening ale, we have the perfect spot for every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((v) => (
              <VenueCard
                key={v.id}
                name={v.name}
                description={v.description}
                image={v.image}
                walkIn={false} // per your request
                href={`/eat-and-drink#${v.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">Stay With Us</h2>
            <p className="text-brown text-lg max-w-2xl mx-auto">Four room types — all with breakfast included.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-4">
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                amenities={room.amenities}
                description={room.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT’S ON */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">What’s On</h2>
            <p className="text-brown text-lg">Join us for regular events in the Commodore Lounge</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-offwhite rounded-lg p-6 border-2 border-brass shadow">
                <h3 className="font-heading text-2xl font-semibold text-forest mb-2">{event.title}</h3>
                <p className="text-brass font-semibold mb-2">{event.time}</p>
                <p className="text-brown text-sm mb-3">{event.venue}</p>
                <p className="text-brown">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">Explore Northumberland</h2>
          <p className="text-brown text-lg">Your perfect base for discovering the region</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((a, index) => (
              <div
                key={index}
                className="bg-offwhite rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-cream"
              >
                <div className="relative h-48">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-xl font-semibold text-forest mb-2">{a.title}</h3>
                  <p className="text-brass text-sm font-semibold mb-2">{a.distance}</p>
                  <p className="text-brown text-sm">{a.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/explore" className="btn-secondary">Explore More</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS – now on cream band to keep the alternating pattern */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl font-bold text-forest">What Our Guests Say</h2>
            <p className="text-brown mt-3 max-w-2xl mx-auto">
              Genuine snippets from recent stays at The Anchor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((r, index) => (
              <article
                key={index}
                className="bg-white border border-cream rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4" aria-label={`${r.rating} out of 5 stars`}>
                  {[...Array(r.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brass" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brown mb-4 italic leading-relaxed">“{r.quote}”</p>
                <p className="font-semibold text-forest">— {r.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
