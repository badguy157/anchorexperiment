// app/contact/page.tsx

export const metadata = {
  title: "Contact – The Anchor Hotel",
  description:
    "Get in touch with The Anchor Hotel in Haydon Bridge. Find our details or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with /public/anchor-hero.jpg */}
      <section
        className="relative w-full h-[48vh] min-h-[360px] overflow-hidden"
        aria-label="The Anchor Hotel"
        style={{
          backgroundImage: "url('/anchor-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="container-wide pb-10">
            <div className="max-w-2xl">
              <h1 className="text-offwhite font-display text-4xl sm:text-5xl">
                Contact
              </h1>
              <p className="text-offwhite/85 mt-3">
                We’d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section">
        <div className="container-wide grid lg:grid-cols-2 gap-6">
          {/* Simple static form (no onSubmit handler to keep it a Server Component) */}
          <div className="card p-6">
            <h2 className="text-xl font-display font-semibold mb-4">
              Send us a message
            </h2>
            <form method="post" action="#">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="input mb-4"
                placeholder="Your name"
                required
              />

              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="input mb-4"
                placeholder="you@example.com"
                required
              />

              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                className="textarea mb-4"
                rows={6}
                placeholder="How can we help?"
                required
              />

              <button
                type="submit"
                className="inline-flex items-center rounded-xl px-5 py-2.5 bg-brass text-offwhite font-medium shadow-md hover:shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-brass/40"
              >
                Send
              </button>
            </form>
          </div>

          {/* Hotel details */}
          <div className="card p-6">
            <h2 className="text-xl font-display font-semibold mb-3">
              Hotel details
            </h2>
            <div className="space-y-2 text-timber/85">
              <div className="font-semibold text-timber">The Anchor Hotel</div>
              <div>
                Haydon Bridge
                <br />
                Northumberland
                <br />
                NE47 6AB
              </div>
              <div className="pt-2">
                Tel:{" "}
                <a className="link" href="tel:+441234567890">
                  01234 567 890
                </a>
                <br />
                Email:{" "}
                <a className="link" href="mailto:info@theanchorbridge.co.uk">
                  info@theanchorbridge.co.uk
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl px-4 py-2 bg-brass text-offwhite font-medium shadow-md hover:shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-brass/40"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
