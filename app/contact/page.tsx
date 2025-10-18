import HeroImage from '@/components/HeroImage';

export const metadata = {
  title: 'Contact – The Anchor Hotel',
  description:
    'How to reach The Anchor Hotel in Haydon Bridge, Northumberland.',
};

export default function ContactPage() {
  return (
    <>
      <HeroImage
        src="/venues/anchor-hero.jpg"
        alt="The Anchor Hotel beside the South Tyne"
        height={420}
      />

      <section className="section">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {/* Simple form (static; no client handlers in Server Components) */}
          <div className="card p-6">
            <h2 className="text-2xl font-display">Contact</h2>
            <p className="mt-2 text-forest/80">We’d love to hear from you.</p>

            {/* remove onSubmit to keep this a Server Component */}
            <form className="mt-6 space-y-4" action="#">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-stone/30 px-3 py-2 bg-white"
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-stone/30 px-3 py-2 bg-white"
              />
              <textarea
                placeholder="How can we help?"
                className="min-h-[140px] w-full rounded-lg border border-stone/30 px-3 py-2 bg-white"
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
              <a className="link" href="tel:+441234567890">01234 567 890</a>
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
