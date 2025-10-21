// app/page.tsx
import HeroMedia from "@/components/HeroMedia";
import StickyBook from "@/components/StickyBook";
import Eventstrip from "@/components/Eventstrip";
import BookingWidget from "@/components/BookingWidget";
import Reviews from "@/components/Reviews";
import VenueCard from "@/components/VenueCard";
import Button from "@/components/Button";
import TitleBand from "@/components/TitleBand";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroMedia />
      <StickyBook />

      {/* Rooms promo (kept as a centered card) */}
      <section className="section-sm">
        <div className="container-narrow">
          <div className="card p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-bold">
              Riverside Rooms · Breakfast Included
            </h2>
            <p className="mt-2 text-timber/80">
              Simple, comfortable rooms a short walk from the bridge.
            </p>

            <div className="mt-5">
              <Button href="/rooms" variant="cta">Browse Rooms</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick availability widget */}
      <BookingWidget />

      {/* Optional strip */}
      <Eventstrip />

      {/* Eat & Drink — centered, uniform header */}
      <TitleBand
        eyebrow="Food & Drink"
        title="Eat & Drink"
        subtitle="Local ales pulled right, honest Northumbrian plates, and a quiet garden café."
      />
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            <VenueCard
              title="Judge & Barrel Bar"
              image="/venues/judge-barrel-bar.jpg"
              blurb="Local ales pulled right; crackling fires in season."
              href="/eat-and-drink#bar"
            />
            <VenueCard
              title="Salmon’s Leap Restaurant"
              image="/venues/salmons-leap.jpg"
              blurb="Hearty Northumbrian plates and a proper Sunday roast."
              href="/eat-and-drink#restaurant"
            />
            <VenueCard
              title="Secret Garden Café"
              image="/venues/secret-garden-cafe.jpg"
              blurb="Morning coffee and pastries in a quiet walled garden."
              href="/eat-and-drink#cafe"
            />
          </div>
        </div>
      </section>

      {/* Our Story — centered, uniform header */}
      <TitleBand
        eyebrow="History"
        title="Our Story"
        subtitle="Six centuries beside the South Tyne, still welcoming travellers, walkers and families."
      />
      <section className="section">
        <div className="container-wide">
          {/* Compact, inline story cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <article className="card p-5">
              <div className="text-brass font-semibold">1422</div>
              <h3 className="mt-1 font-semibold">Court &amp; Gaol</h3>
              <p className="mt-2 text-timber/80">
                Records point to a courthouse and gaol on this site.
              </p>
            </article>

            <article className="card p-5">
              <div className="text-brass font-semibold">1700s</div>
              <h3 className="mt-1 font-semibold">Coaching Inn</h3>
              <p className="mt-2 text-timber/80">
                Travelers crossed the South Tyne and supped by the fire.
              </p>
            </article>

            <article className="card p-5">
              <div className="text-brass font-semibold">1900s</div>
              <h3 className="mt-1 font-semibold">Riverside Tavern</h3>
              <p className="mt-2 text-timber/80">
                Local ales and salmon suppers became our staples.
              </p>
            </article>

            <article className="card p-5">
              <div className="text-brass font-semibold">Today</div>
              <h3 className="mt-1 font-semibold">Inn &amp; Café</h3>
              <p className="mt-2 text-timber/80">
                Rooms with breakfast, a lively bar, and a quiet café garden.
              </p>
            </article>
          </div>

          {/* Read more CTA (subtle, centered, doesn’t compete with gold CTAs) */}
          <div className="mt-6 text-center">
            <Button href="/story" variant="dark" size="sm">
              Read more about our history
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials — centered, uniform header */}
      <TitleBand
        eyebrow="Kind Words"
        title="What Guests Say"
        subtitle="Recent comments from guests who stayed, dined and explored from The Anchor."
      />
      <section
        className="section"
        id="testimonials"
        aria-labelledby="testimonials-heading"
      >
        {/* Card list from your component */}
        <Reviews showTitle={false} />
      </section>

      {/* Find Us — centered, uniform header */}
      <TitleBand
        eyebrow="Visit"
        title="Find Us"
        subtitle="We’re right by the bridge in Haydon Bridge—easy for Hadrian’s Wall, Hexham and Kielder."
      />
      <section className="section">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
            {/* Map */}
            <div className="card p-0 overflow-hidden">
              <iframe
                title="Anchor Hotel map"
                className="block w-full h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.981024352248!2d-2.2487357!3d54.9738939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eebe2f8c1a9d1%3A0x8a8e2a8a0f0d2ec4!2sThe%20Anchor%20Hotel!5e0!3m2!1sen!2suk!4v1700000000000"
              />
            </div>

            {/* Details / CTA */}
            <div className="card p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold">The Anchor Hotel</h3>
                <p className="text-timber/80">
                  Church St
                  <br />
                  Haydon Bridge
                  <br />
                  Northumberland
                  <br />
                  NE47 6AB
                </p>
                <p className="mt-2">
                  Tel:{" "}
                  <a className="link" href="tel:+441234567890">
                    01234 567 890
                  </a>
                  <br />
                  Email:{" "}
                  <a className="link" href="mailto:info@theanchorbridge.co.uk">
                    info@theanchorbridge.co.uk
                  </a>
                </p>
              </div>

              <div className="mt-5 flex gap-3">
                <Button
                  href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                  variant="cta"
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
