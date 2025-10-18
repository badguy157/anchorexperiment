// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-forest text-offwhite mt-12">
      <div className="container-wide py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/90">
              Find Us
            </h3>
            <div className="mt-3 space-y-2 text-offwhite/80">
              <p>
                Haydon Bridge, Northumberland · On the River South Tyne.
                <br />
                Est. 1422
              </p>
              <p>
                <a href="https://maps.google.com/?q=Anchor+Hotel+Haydon+Bridge" target="_blank" rel="noreferrer" className="underline">
                  Get directions
                </a>
              </p>
              <p>
                <span className="font-semibold text-offwhite">Tel:</span>{' '}
                <a href="tel:+441234567890" className="underline">
                  01234 567 890
                </a>
              </p>
              <p>
                <span className="font-semibold text-offwhite">Email:</span>{' '}
                <a href="mailto:info@theanchorbridge.co.uk" className="underline">
                  info@theanchorbridge.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/90">
              Opening Hours
            </h3>
            <div className="mt-3 space-y-1 text-offwhite/80">
              <p>Mon–Thu: 12:00–22:00</p>
              <p>Fri–Sat: 12:00–23:00</p>
              <p>Sun: 12:00–21:00</p>
              <p className="text-offwhite/60 text-sm">Kitchen hours vary; see menus.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/90">
              Good to Know
            </h3>
            <ul className="mt-3 space-y-1 text-offwhite/80">
              <li><a href="/privacy" className="underline">Privacy</a></li>
              <li><a href="/terms" className="underline">Terms</a></li>
              <li><a href="/contact" className="underline">Contact</a></li>
            </ul>

            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-offwhite/90">
              Follow Us
            </h4>
            <div className="mt-3 flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/10 hover:bg-offwhite/20 transition"
              >
                {/* Instagram glyph */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM18 6.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
              <a
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/10 hover:bg-offwhite/20 transition"
              >
                {/* Facebook glyph */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.5 22v-8h2.6l.4-3H13.5V9.3c0-.9.3-1.5 1.7-1.5h1.8V5.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h3v8h3.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-8 mb-4 opacity-20"></div>

        <div className="flex items-center justify-between text-sm text-offwhite/70">
          <p>© 2025 The Anchor Hotel, Haydon Bridge.</p>
          <p>Best rate when you book direct.</p>
        </div>
      </div>
    </footer>
  );
}
