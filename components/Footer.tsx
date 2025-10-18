// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="footer mt-12">
      <div className="container-wide py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold">Find Us</h3>
            <p className="mt-2">
              Haydon Bridge, Northumberland · On the River South Tyne.<br />
              <span className="meta">Est. 1422</span>
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
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <ul className="mt-2 space-y-1">
              <li>Mon–Thu: 12:00–22:00</li>
              <li>Fri–Sat: 12:00–23:00</li>
              <li>Sun: 12:00–21:00</li>
            </ul>
            <p className="mt-2 text-sm meta">Kitchen hours vary; see menus.</p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold">Good to Know</h3>
            <ul className="mt-2 space-y-1">
              <li><a className="underline" href="/privacy">Privacy</a></li>
              <li><a className="underline" href="/terms">Terms</a></li>
              <li><a className="underline" href="/contact">Contact</a></li>
            </ul>

            {/* Follow us */}
            <div className="mt-6">
              <h4 className="text-base font-semibold">Follow Us</h4>
              <div className="mt-3 flex items-center gap-3">
                <a
                  aria-label="Instagram"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 hover:bg-white/15"
                >
                  {/* Instagram icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-offwhite">
                    <rect x="2.5" y="2.5" width="13" height="13" rx="3" />
                    <circle cx="9" cy="9" r="3" />
                    <circle cx="13" cy="5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>

                <a
                  aria-label="Facebook"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 hover:bg-white/15"
                >
                  {/* Facebook icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-offwhite">
                    <path d="M10.5 6.5V5.2c0-.6.4-1.1 1-1.1h1.4V2H11c-1.9 0-3.2 1.3-3.2 3.1v1.4H6v2.1h1.8V16h2.1V8.6h1.8l.3-2.1h-2.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="divider mt-10 mb-6"></div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="meta">&copy; {new Date().getFullYear()} The Anchor Hotel, Haydon Bridge.</div>
          <div className="meta">Best rate when you book direct.</div>
        </div>
      </div>
    </footer>
  );
}
