// app/page.tsx
import HeroMedia from "@/components/HeroMedia";
import StickyBook from "@/components/StickyBook";
import Eventstrip from "@/components/Eventstrip";
import Timeline from "@/components/Timeline";
import BookingWidget from "@/components/BookingWidget";
import Reviews from "@/components/Reviews";
import VenueCard from "@/components/VenueCard";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroMedia />
      <StickyBook />

      {/* Rooms promo */}
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

      {/* Optional strip (keep if you had it before) */}
      <Eventstrip />

      {/* Eat & Drink */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Eat &amp; Drink
          </h2>
          <div className="rule my-6" />

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

      {/* Our Story (timeline + CTA) */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Our Story</h2>
          <div className="rule my-6" />
        </div>

        {/* The timeline component you already had */}
        <Timeline />

        <div className="container-wide mt-6">
          <Button href="/story" variant="cta">Read the Full Story</Button>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Recent Reviews</h2>
          <div className="rule my-6" />
        </div>
        <Reviews />
      </section>

      {/* Find Us + Map */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Find Us</h2>
          <div className="rule my-6" />

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

            {/* Details / Call to action */}
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
