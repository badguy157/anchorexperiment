import Image from "next/image";
import Link from "next/link";
import VenueCard from "@/components/VenueCard";
import RoomCard from "@/components/RoomCard";
import { venues, rooms, events, attractions, reviews } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video
          className="video-bleed"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          preload="metadata"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay px-4 max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
            The Anchor Hotel
          </h1>
          <p className="font-heading text-2xl md:text-3xl mb-3 opacity-90">
            Riverside Tavern & Inn Since 1422
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Eat, drink, and stay by the South Tyne in the heart of Haydon Bridge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="btn-primary text-lg px-8 py-3 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Check Availability
            </Link>
            <Link
              href="/eat-and-drink"
              className="btn-secondary text-lg px-8 py-3 rounded-lg bg-offwhite text-forest hover:bg-cream shadow-md hover:scale-105 transition-transform"
            >
              Eat & Drink
            </Link>
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
              <h2 className="font-heading text-4xl font-bold text-forest mb-6">
                Six Centuries of Welcome
              </h2>
              <div className="space-y-4 text-brown leading-relaxed">
                <p>
                  For over six centuries, The Anchor has welcomed travelers and
                  locals alike.
                </p>
                <p>
                  Nestled beside the River South Tyne in Haydon Bridge, our inn,
                  tavern, and café offer hearty food, well-kept drinks, and a
                  restful night’s sleep — all with the charm of a truly historic
                  Northumberland setting.
                </p>
              </div>
              <Link
                href="/story"
                className="inline-block mt-6 text-forest font-semibold hover:text-brass transition-colors"
              >
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
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              Eat & Drink — Our Venues
            </h2>
            <p className="text-brown text-lg max-w-2xl mx-auto">
              From morning coffee to evening ale, we have the perfect spot for
              every occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((v) => (
              <VenueCard
                key={v.id}
                name={v.name}
                description={v.description}
                image={v.image}
                walkIn={false}
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
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              Stay With Us
            </h2>
            <p className="text-brown text-lg max-w-2xl mx-auto">
              Four room types — all with breakfast included.
            </p>
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
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              What’s On
            </h2>
            <p className="text-brown text-lg">
              Join us for regular events in the Commodore Lounge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-offwhite rounded-lg p-6 border-2 border-brass shadow"
              >
                <h3 className="font-heading text-2xl font-semibold text-forest mb-2">
                  {event.title}
                </h3>
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
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              Explore Northumberland
            </h2>
            <p className="text-brown text-lg">
              Your perfect base for discovering the region
            </p>
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
                  <h3 className="font-heading text-xl font-semibold text-forest mb-2">
                    {a.title}
                  </h3>
                  <p className="text-brass text-sm font-semibold mb-2">
                    {a.distance}
                  </p>
                  <p
