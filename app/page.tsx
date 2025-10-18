// app/page.tsx
import HeroMedia from '@/components/HeroMedia';
import StickyBook from '@/components/StickyBook';
import Eventstrip from '@/components/Eventstrip';
import Timeline from '@/components/Timeline';
import BookingWidget from '@/components/BookingWidget';
import Reviews from '@/components/Reviews';
import VenueCard from '@/components/VenueCard';
import RoomCard from '@/components/RoomCard';

export default function Home() {
  return (
    <>
      <HeroMedia />
      <StickyBook />

      {/* PROMO / ROOMS TEASER */}
      <div className="section-sm">
        <div className="container-narrow">
          <div className="card p-6 text-center">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl">
              Riverside Rooms · Breakfast Included
            </h2>
            <p className="mt-2 text-timber/80 text-base sm:text-lg">
              Simple, comfortable rooms a short walk from the bridge.
            </p>
            <div className="mt-5">
              <a href="/rooms" className="btn btn-primary no-underline">
                Browse Rooms
              </a>
            </div>
          </div>
        </div>
      </div>

      <BookingWidget />

      <Eventstrip />

      {/* EAT & DRINK */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold">Eat &amp; Drink</h2>
          <div className="rule my-6"></div>
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

      <Timeline />
      <Reviews />

      {/* FIND US (Map) */}
      <section className="section">
        <div className="container-wide">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">Find Us</h2>
          <div className="rule my-6" />

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="card overflow-hidden">
                <iframe
                  title="Anchor Hotel Location"
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                  src="https://www.google.com/maps?q=Anchor+Hotel+Haydon+Bridge&output=embed"
                />
              </div>
            </div>

            {/* Address & Actions */}
            <div className="lg:col-span-1">
              <div className="card p-6 h-full">
                <h3 className="text-xl font-semibold">The Anchor Hotel</h3>
                <p className="mt-3 text-timber/80">
                  Church St<br />
                  Haydon Bridge<br />
                  Northumberland<br />
                  NE47 6AB
                </p>

                <div className="mt-4 space-y-2">
                  <div>
                    <span className="font-semibold">Tel: </span>
                    <a href="tel:+441234567890" className="underline">
                      01234 567 890
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">Email: </span>
                    <a href="mailto:info@theanchorbridge.co.uk" className="underline">
                      info@theanchorbridge.co.uk
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://maps.google.com/?q=Anchor+Hotel+Haydon+Bridge"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline no-underline"
                  >
                    Get directions
                  </a>
                  {/* Filled, high-contrast CTA as requested */}
                  <a href="/contact" className="btn btn-primary no-underline">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
