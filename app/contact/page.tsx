// app/contact/page.tsx
import Button from "@/components/Button";

export const metadata = {
  title: "Contact | The Anchor",
  description: "Find us in Haydon Bridge on the South Tyne.",
};

export default function ContactPage() {
  return (
    <main>
      {/* TitleBand (no hero) */}
      <section className="section pt-10 pb-6">
        <div className="container-wide">
          <h1 className="text-3xl sm:text-4xl font-display font-bold">Contact</h1>
          <p className="mt-2 text-timber/80">
            We’re in Haydon Bridge on the South Tyne — a short hop from Hadrian’s Wall.
          </p>
          <div className="rule my-6" />
        </div>
      </section>

      {/* Map + details */}
      <section className="section pt-0">
        <div className="container-wide grid lg:grid-cols-[2fr_1fr] gap-6 items-stretch">
          {/* Map */}
          <div className="card p-0 overflow-hidden">
            <iframe
              title="Anchor Hotel map"
              className="block w-full h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.981024352248!2d-2.2487357!3d54.9738939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487eebe2f8c1a9d1%3A0x8a8e2a8a0f0d2ec4!2sThe%20Anchor%20Hotel!5e0!3m2!1sen!2suk!4v1700000000000"
            />
          </div>

          {/* Details */}
          <div className="card p-6 flex flex-col">
            <div className="space-y-2">
              <h2 className="text-xl font-display font-bold">The Anchor Hotel</h2>
              <p className="text-timber/80">
                Church St<br />Haydon Bridge<br />Northumberland<br />NE47 6AB
              </p>
              <p className="mt-2">
                Tel:{" "}
                <a className="link" href="tel:+441234567890">01234 567 890</a><br />
                Email:{" "}
                <a className="link" href="mailto:info@theanchorbridge.co.uk">info@theanchorbridge.co.uk</a>
              </p>
            </div>

            <div className="mt-5">
              <Button
                href="https://www.google.com/maps/dir/?api=1&destination=The+Anchor+Hotel+Haydon+Bridge"
                variant="cta"
                size="lg"
              >
                Get directions
              </Button>
            </div>

            <p className="mt-4 text-sm text-timber/70">
              Parking available. Walkers and cyclists welcome.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
