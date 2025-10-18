'use client';

export default function ContactPage() {
  return (
    <div className="section-padding bg-offwhite">
      <div className="container-custom">
        <h1 className="font-heading text-4xl font-bold text-forest mb-8 text-center">Contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-cream rounded-lg p-8 border-2 border-brass">
            <h2 className="font-heading text-2xl font-semibold text-forest mb-4">Send us a message</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // no-op submit (demo)
              }}
            >
              <input
                className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <textarea
                className="w-full rounded-lg border border-cream bg-offwhite px-4 py-3 h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-brass"
                placeholder="Message"
                name="message"
                required
              />
              <button className="btn-primary" type="submit">Send</button>
            </form>
          </div>

          <div className="bg-cream rounded-lg p-8 border-2 border-brass">
            <h2 className="font-heading text-2xl font-semibold text-forest mb-4">Hotel details</h2>
            <div className="space-y-2">
              <p className="font-semibold text-forest">The Anchor Hotel</p>
              <p>Haydon Bridge</p>
              <p>Northumberland</p>
              <p>NE47 6AB</p>
              <p className="mt-3">
                📞 <a href="tel:+441234567890" className="hover:text-brass">01234 567 890</a>
              </p>
              <p>
                ✉️ <a href="mailto:info@theanchorbridge.co.uk" className="hover:text-brass">info@theanchorbridge.co.uk</a>
              </p>
            </div>
          </div>
        </div>

        {/* Map block kept on the homepage per our last change. If you want it duplicated here, say the word. */}
      </div>
    </div>
  );
}
