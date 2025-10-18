// app/page.tsx
import HeroMedia from '@/components/HeroMedia';
import StickyBook from '@/components/StickyBook';
import Eventstrip from '@/components/Eventstrip';
import Timeline from '@/components/Timeline';
import BookingWidget from '@/components/BookingWidget';
import Reviews from '@/components/Reviews';
import VenueCard from '@/components/VenueCard';

export default function Home() {
  return (
    <>
      <HeroMedia />
      <StickyBook />

      {/* Rooms promo */}
      <section className="section-sm">
        <div className="container-narrow">
          <div className="card p-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-display font-semibold">
              Riverside Rooms · Breakfast Included
            </h2>
            <p className="mt-2 text-timber/80">
              Simple, comfortable rooms a short walk from the bridge.
            </p>
            <div className="mt-5">
              {/* solid button for contrast */}
              <a href="/rooms" className="btn btn-primary no-underline">
                Browse Rooms
              </a>
            </div>
          </div>
        </div>
      </section>

      <BookingWidget />

      <Eventstrip />

      {/* Eat & Drink */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold">
            Eat &amp; Drink
          </h2>
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

      {/* Timeline & reviews */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold">
            From Court &amp; Gaol to Riverside Inn
          </h2>
          <div className="rule my-6"></div>
          <Timeline />
        </div>
      </section>

      <Reviews />

      {/* Find Us / Map */}
      <section id="find-us" className="section">
        <div className="container-wide grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <iframe
              title="Google map to The Anchor Hotel"
              className="w-full h-[420px] rounded-xl shadow-md border border-stone/30"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.0660375859722!2d-2.24661!3d54.9733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487de6b37b2f2e63%3A0x8b6a0b5b8e3f2cc5!2sAnchor%20Hotel%2C%20Haydon%20Bridge!5e0!3m2!1sen!2suk!4v0000000000"
            />
          </div>

          <aside className="md:col-span-2 card p-6">
            <h3 className="font-display text-xl font-semibold">The Anchor Hotel</h3>
            <p className="mt-2 text-sm text-timber/85">
              Church St<br />
              Haydon Bridge<br />
              Northumberland<br />
              NE47 6AB
            </p>

            <p className="mt-4">
              Tel:{' '}
              <a className="link" href="tel:+441234567890">
                01234 567 890
              </a>
              <br />
              Email:{' '}
              <a className="link" href="mailto:info@theanchorbridge.co.uk">
                info@theanchorbridge.co.uk
              </a>
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* HIGH CONTRAST primary button */}
              <a
                className="btn btn-primary no-underline"
                target="_blank"
                rel="noreferrer"
                href="https://maps.google.com/?q=Anchor+Hotel+Haydon+Bridge"
              >
                Get directions
              </a>
              {/* Contact button removed on purpose (redundant) */}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
