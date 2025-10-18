export default function Footer(){
  return (
    <footer className="footer mt-16">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="" className="h-8 w-auto" />
            <span className="font-display text-xl">The Anchor</span>
          </div>
          <p className="mt-3 text-sm">
            Haydon Bridge, Northumberland · On the River South Tyne.
          </p>
          <p className="mt-2 text-xs meta">Est. 1422</p>
        </div>

        <div>
          <h3>Find Us</h3>
          <p className="mt-2 text-sm">
            Church St, Haydon Bridge NE47<br/>
            <a className="underline" target="_blank" href="https://maps.google.com">Get directions</a>
          </p>
          <p className="mt-2 text-sm"><a href="tel:+44">+44 (0) ————</a></p>
          <p className="text-sm"><a href="mailto:hello@example.com">hello@example.com</a></p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li>Mon–Thu: 12:00–22:00</li>
            <li>Fri–Sat: 12:00–23:00</li>
            <li>Sun: 12:00–21:00</li>
          </ul>
          <p className="mt-3 text-xs meta">Kitchen hours vary; see menus.</p>
        </div>

        <div>
          <h3>Good to Know</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <p className="mt-3 text-xs meta">Alcohol licensing info here.</p>
        </div>
      </div>

      <div className="divider" />

      <div className="container-wide py-4 text-xs meta flex flex-col sm:flex-row justify-between gap-2">
        <span>© 2025 The Anchor Hotel, Haydon Bridge.</span>
        <span>Best rate when you book direct.</span>
      </div>
    </footer>
  );
}
