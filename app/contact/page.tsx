// app/contact/page.tsx
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact · The Anchor" };

export default function ContactPage() {
  return (
    <main>
      {/* Hero image */}
      <div
        className="page-hero"
        style={{ backgroundImage: `url('/anchor-hero.jpg')` }}
      />

      {/* Header */}
      <section className="section bg-offwhite">
        <header className="container-wide text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-timber/80 max-w-2xl mx-auto">
            Questions about rooms, menus, or events? We’re happy to help.
          </p>
          <div className="rule my-6" />
        </header>

        {/* Form + details */}
        <div className="container-wide grid lg:grid-cols-[2fr_1fr] gap-6 items-start">
          {/* Form card */}
          <div className="card p-6">
            <h2 className="font-display text-xl font-bold">Send us a message</h2>
            <p className="text-timber/80 mt-1">We aim to reply within 24 hours.</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>

          {/* Details card */}
          <aside className="card p-6">
            <h2 className="font-display text-xl font-bold">Hotel details</h2>

            <div className="mt-3 space-y-2 text-timber/90">
              <p className="font-semibold">The Anchor Hotel</p>
              <p className="text-timber/80">
                Church St
                <br />
                Haydon Bridge
                <br />
                Northumberland
                <br />
                NE47 6AB
              </p>

              <p>
                Tel:{" "}
                <a className="link" href="tel:+441434211073">
                  01434 211073
                </a>
                <br />
                Email:{" "}
                <a className="link" href="mailto:hello@anchorhotelhaydonbridge.com">
                  hello@anchorhotelhaydonbridge.com
                </a>
              </p>

              <div className="pt-2">
                <Button
                  href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                  variant="cta"
                >
                  Get directions
                </Button>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Opening hours</h3>
                <ul className="mt-1 text-sm text-timber/80 space-y-1">
                  <li>Mon–Thu: 12:00–22:00</li>
                  <li>Fri–Sat: 12:00–23:00</li>
                  <li>Sun: 12:00–21:00</li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Good to know</h3>
                <ul className="mt-1 text-sm text-timber/80 space-y-1">
                  <li>Parking available in village nearby</li>
                  <li>Breakfast included with all stays</li>
                  <li>Pets — please enquire before booking</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="section">
        <div className="container-wide">
          <div className="card p-0 overflow-hidden">
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
    </main>
  );
}
