export default function MapBlock() {
    return (
      <section className="section-sm">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display">Find Us</h2>
          <div className="rule my-6"></div>
          <div className="card overflow-hidden">
            <iframe
              title="Map – The Anchor Hotel, Haydon Bridge"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: 'block' }}
              src={
                "https://www.google.com/maps?q=The%20Anchor%20Hotel%20Haydon%20Bridge&output=embed&z=15"
              }
            />
          </div>
        </div>
      </section>
    );
  }
  