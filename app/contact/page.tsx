// app/contact/page.tsx
export const metadata = { title: 'Contact – The Anchor Hotel' };

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[320px]">
        <img
          src="/venues/anchor-hero.jpg"
          alt="The Anchor Hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-transparent" />
      </section>

      <section className="section">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          {/* Form column (static example to keep SSG happy) */}
          <div className="card p-6">
            <h1 className="font-display text-2xl sm:text-3xl font-semibold">Contact</h1>
            <p className="mt-2 text-timber/85">We’d love to hear from you.</p>
            <form className="mt-5 space-y-4">
              <label className="block">
                <span className="text-sm">Name</span>
                <input className="input mt-1 w-full" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm">Email</span>
                <input className="input mt-1 w-full" placeholder="you@example.com" />
              </label>
              <label className="block">
                <span className="text-sm">Message</span>
                <textarea className="input mt-1 w-full h-32" placeholder="How can we help?" />
              </label>
              <button type="button" className="btn btn-primary">Send</button>
            </form>
          </div>

          {/* Details column */}
          <aside className="card p-6">
            <h2 className="font-display text-xl font-semibold">Hotel details</h2>
            <p className="mt-2">
              The Anchor Hotel<br />
              Haydon Bridge<br />
              Northumberland<br />
              NE47 6AB
            </p>
            <p className="mt-3">
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
          </aside>
        </div>
      </section>
    </>
  );
}
