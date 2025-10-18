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

      <div className="section-sm">
        <div className="container-narrow">
          <div className="card p-6 text-center">
            <h2 className="text-2xl font-display">Riverside Rooms · Breakfast Included</h2>
            <p className="mt-2 text-timber/80">
              Simple, comfortable rooms a short walk from the bridge.
            </p>
            <div className="mt-4">
              <a href="/rooms" className="btn btn-outline no-underline">Browse Rooms</a>
            </div>
          </div>
        </div>
      </div>

      <BookingWidget />
      <Eventstrip />

      <section className="section">
        <div className="container-wide">
          {/* ⬇️ Changed here: made heading bold */}
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

      {/* Our Story strip on home with bold title */}
      <section className="section">
  <div className="container-wide">
    <Timeline />
  </div>
</section>


      <Reviews />
    </>
  );
}
