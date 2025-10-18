// app/contact/page.tsx
import Link from "next/link";

export const metadata = { title: "Contact · The Anchor" };

export default function ContactPage() {
  return (
    <>
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
      >
        <div className="page-hero-inner">
          <h1>Contact</h1>
          <p>Questions about rooms, menus, or events? We’re happy to help.</p>
        </div>
      </div>

      <section className="page-section pt-12">
        <div className="container-wide grid lg:grid-cols-2 gap-6">
          {/* Form (no handlers = SSR-safe) */}
          <div className="card p-6">
            <h2 className="text-xl font-display font-bold">Send us a message</h2>
            <form action="#" method="post" className="mt-4 space-y-4">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  name="name"
                  className="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full rounded-xl border border-black/10 bg-white/80 px-3 py-2"
                  placeholder="How can we help?"
                />
              </div>

              <button type="submit" className="btn-cta rounded-xl px-4 py-2">
                Send
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="card p-6">
            <h2 className="text-xl font-display font-bold">Hotel details</h2>
            <p className="mt-2 text-timber/80">
              The Anchor Hotel
              <br />
              Haydon Bridge
              <br />
              Northumberland
              <br />
              NE47 6AB
            </p>

            <p className="mt-3">
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

            <div className="mt-5">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta rounded-xl px-4 py-2 inline-flex"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
