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

      <BookingWidget />

      <Eventstrip />

      {/* … Eat & Drink + Timeline + Reviews (unchanged) … */}

      {/* Find Us + Map */}
      <section className="section">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold">Find Us</h2>
          <div className="rule my-6"></div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
            <div className="card p-0 overflow-hidden">
              <iframe
                title="Anchor Hotel map"
                className="block w-full h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.981024352248!2d-2.2487357!3d54.9738939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eebe2f8c1a9d1%3A0x8a8e2a8a0f0d2ec4!2sThe%20Anchor%20Hotel!5e0!3m2!1sen!2suk!4v1700000000000"
              />
            </div>

            <div className="card p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold">The Anchor Hotel</h3>
                <p className="text-timber/80">
                  Church St<br/>Haydon Bridge<br/>Northumberland<br/>NE47 6AB
                </p>
                <p className="mt-2">
                  Tel: <a className="link" href="tel:+441234567890">01234 567 890</a><br/>
                  Email: <a className="link" href="mailto:info@theanchorbridge.co.uk">info@theanchorbridge.co.uk</a>
                </p>
              </div>

              <div className="mt-5">
                <Button
                  href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                  target="_blank"
                  rel="noopener noreferrer"
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
