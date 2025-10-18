import Image from 'next/image';

export const metadata = {
  title: 'Contact – The Anchor Hotel',
  description: 'How to reach The Anchor Hotel in Haydon Bridge, Northumberland.',
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative h-[420px] w-full">
        <Image
          src="/venues/anchor-hero.jpg" // EXACT, lowercase path that exists
          alt="The Anchor Hotel"
          fill
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/15" />
      </div>

      <section className="section">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {/* Form without client handlers (keeps this a Server Component) */}
          <div className="card p-6">
            <h2 className="text-2xl font-display">Contact</h2>
            <p className="mt-2 text-forest/80">We’d love to hear from you.</p>

            <form className="mt-6 space-y-4" action="#">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-stone/30 bg-white px-3 py-2"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-stone/30 bg-white px-3 py-2"
              />
              <textarea
                placeholder="How can we help?"
                className="min-h-[140px] w-full rounded-lg border border-stone/30 bg-white px-3 py-2"
              />
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>

          {/* Hotel details */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold">The Anchor Hotel</h3>
            <p className="mt-2">
              Haydon Bridge
              <br />
              Northumberland
              <br />
              NE47 6AB
            </p>

            <p className="mt-4">
              <span className="font-medium">Tel:</span>{' '}
              <a className="link" href="tel:+441234567890">
                01234 567 890
              </a>
              <br />
              <span className="font-medium">Email:</span>{' '}
              <a className="link" href="mailto:info@theanchorbridge.co.uk">
                info@theanchorbridge.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
