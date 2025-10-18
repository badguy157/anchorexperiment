// app/contact/page.tsx
export const metadata = { title: 'Contact – The Anchor' };

export default function ContactPage() {
  return (
    <>
      {/* Hero image only */}
      <section className="relative">
        <div className="aspect-[16/6] w-full overflow-hidden">
          <img
            src="/venues/anchor-hero.jpg"
            alt="The Anchor Hotel exterior"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-wide">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold">Contact</h1>
          <div className="rule my-6" />

          <div className="grid gap-6 lg:grid-cols-2">
            <form className="card p-6">
              <h2 className="text-xl font-semibold">Send us a message</h2>
              <div className="mt-4 space-y-4">
                <input className="input" placeholder="Your name" />
                <input className="input" placeholder="you@example.com" type="email" />
                <textarea className="textarea" placeholder="How can we help?" rows={6} />
                <button type="submit" className="btn btn-primary w-fit">Send</button>
              </div>
            </form>

            <div className="card p-6">
              <h2 className="text-xl font-semibold">Hotel details</h2>
              <p className="mt-3">
                The Anchor Hotel<br />
                Haydon Bridge<br />
                Northumberland<br />
                NE47 6AB
              </p>
              <p className="mt-3">
                <span className="font-semibold">Tel:</span>{' '}
                <a href="tel:+441234567890" className="underline">01234 567 890</a>
              </p>
              <p className="mt-2">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@theanchorbridge.co.uk" className="underline">
                  info@theanchorbridge.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
