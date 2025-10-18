// components/MapSection.tsx
export default function MapSection() {
    return (
      <section className="section">
        <div className="container-wide">
          <h2 className="font-display text-3xl sm:text-4xl">Find Us</h2>
          <div className="rule my-6"></div>
  
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5">
                {/* 16:9 responsive wrapper */}
                <div className="relative pb-[56.25%]">
                  <iframe
                    title="Anchor Hotel Map"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Anchor%20Hotel%20Haydon%20Bridge&output=embed"
                  />
                </div>
              </div>
            </div>
  
            {/* Contact snippet */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold">The Anchor Hotel</h3>
              <p className="mt-2 text-timber/80">
                Church St, Haydon Bridge<br />Northumberland, NE47 6AB
              </p>
              <div className="mt-4 space-y-1">
                <a className="underline" href="https://maps.google.com/?q=Anchor Hotel Haydon Bridge" target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <div>
                  <span className="font-semibold">Tel:</span>{' '}
                  <a className="underline" href="tel:+441234567890">01234 567 890</a>
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{' '}
                  <a className="underline" href="mailto:info@theanchorbridge.co.uk">info@theanchorbridge.co.uk</a>
                </div>
              </div>
  
              <div className="mt-6">
                <a href="/contact" className="btn btn-outline no-underline">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  