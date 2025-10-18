// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-16 bg-forest text-offwhite">
      <div className="container-wide py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-display font-semibold uppercase tracking-[0.08em] text-sm text-offwhite/90">
            Find Us
          </h4>
          <p className="mt-3 text-offwhite/90">
            Haydon Bridge, Northumberland · On the River South Tyne.<br />
            Est. 1422
          </p>
          <p className="mt-3">
            <span className="font-semibold text-offwhite/95">Tel:</span>{' '}
            <a className="link" href="tel:+441234567890">01234 567 890</a><br />
            <span className="font-semibold text-offwhite/95">Email:</span>{' '}
            <a className="link" href="mailto:info@theanchorbridge.co.uk">info@theanchorbridge.co.uk</a>
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold uppercase tracking-[0.08em] text-sm text-offwhite/90">
            Opening Hours
          </h4>
          <p className="mt-3 text-offwhite/90">
            Mon–Thu: 12:00–22:00<br />
            Fri–Sat: 12:00–23:00<br />
            Sun: 12:00–21:00
          </p>
          <p className="mt-2 text-offwhite/75">Kitchen hours vary; see menus.</p>
        </div>

        <div>
          <h4 className="font-display font-semibold uppercase tracking-[0.08em] text-sm text-offwhite/90">
            Good to Know
          </h4>
          <ul className="mt-3 space-y-1">
            <li><a className="link" href="/privacy">Privacy</a></li>
            <li><a className="link" href="/terms">Terms</a></li>
            <li><a className="link" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold uppercase tracking-[0.08em] text-sm text-offwhite/90">
            Follow Us
          </h4>
          <div className="mt-3 flex items-center gap-3">
            <a
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/10 hover:bg-offwhite/20"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-offwhite" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-2a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
            <a
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-offwhite/10 hover:bg-offwhite/20"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-offwhite" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.3V12h2.3V9.7c0-2.3 1.3-3.6 3.4-3.6.98 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container-wide pb-8 flex items-center justify-between text-offwhite/70 text-sm">
        <p>© 2025 The Anchor Hotel, Haydon Bridge.</p>
        <p>Best rate when you book direct.</p>
      </div>
    </footer>
  );
}
