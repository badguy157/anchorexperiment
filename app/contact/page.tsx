// app/contact/page.tsx
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact • The Anchor",
  description:
    "Questions about rooms, menus, or events? Contact The Anchor Hotel in Haydon Bridge.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        sub="Questions about rooms, menus, or events? We’re happy to help."
        image="/anchor-hero.jpg"
        position="center 25%"
        align="left"
      />

      <section className="page-section">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 container-wide">
          {/* Contact form (static; no JS handler) */}
          <div className="page-card">
            <h2 className="text-2xl font-display font-bold mb-4">Send us a message</h2>
            <form action="#" method="post" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-black/10 px-3 py-2 bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <button type="submit" className="btn-cta inline-flex px-5 py-2.5 rounded-xl">
                Send
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="page-card">
            <h2 className="text-2xl font-display font-bold mb-4">Hotel details</h2>
            <p className="text-timber/80">
              The Anchor Hotel
              <br />
              Haydon Bridge
              <br />
              Northumberland
              <br />
              NE47 6AB
            </p>

            <p className="mt-4">
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
                className="inline-flex items-center rounded-xl px-4 py-2 bg-brass text-forest font-medium shadow-md hover:shadow-lg hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-brass/40"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="container-wide mt-6">
          <div className="card overflow-hidden">
            <iframe
              title="Anchor Hotel map"
              className="block w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.981024352248!2d-2.2487357!3d54.9738939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eebe2f8c1a9d1%3A0x8a8e2a8a0f0d2ec4!2sThe%20Anchor%20Hotel!5e0!3m2!1sen!2suk!4v1700000000000"
            />
          </div>
        </div>
      </section>
    </>
  );
}
