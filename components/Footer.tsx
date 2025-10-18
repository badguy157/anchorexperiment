import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="site-footer bg-forest text-offwhite mt-10">
      <div className="container-wide py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="footer-heading">Find Us</h4>
          <p className="mt-2">
            Haydon Bridge, Northumberland · On the River South Tyne.
            <br />
            Est. 1422
          </p>
          <p className="mt-3">
            <a className="link" href="https://maps.google.com?q=NE476AB" target="_blank">
              Get directions
            </a>
            <br />
            <span className="font-medium">Tel:</span>{' '}
            <a className="link" href="tel:+441234567890">01234 567 890</a>
            <br />
            <span className="font-medium">Email:</span>{' '}
            <a className="link" href="mailto:info@theanchorbridge.co.uk">info@theanchorbridge.co.uk</a>
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Opening Hours</h4>
          <p className="mt-2">
            Mon–Thu: 12:00–22:00
            <br />
            Fri–Sat: 12:00–23:00
            <br />
            Sun: 12:00–21:00
            <br />
            <span className="text-offwhite/80">Kitchen hours vary; see menus.</span>
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Good to know</h4>
          <ul className="mt-2 space-y-2">
            <li><a className="link" href="/privacy">Privacy</a></li>
            <li><a className="link" href="/terms">Terms</a></li>
            <li><a className="link" href="/contact">Contact</a></li>
          </ul>

          <h4 className="footer-heading mt-6">Follow us</h4>
          <div className="mt-3 flex items-center gap-3">
            <a className="social" aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 9.5zM18 6.2a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
            </a>
            <a className="social" aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H6v4h3v8z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-offwhite/80 text-sm">
        Best rate when you book direct.
      </div>
    </footer>
  );
}
