export default function Footer(){
  return (
    <footer className="footer mt-16">
      <div className="container-wide py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-8 w-8 rounded-full" />
            <span className="font-display text-xl text-forest">The Anchor</span>
          </div>
          <p className="mt-3 text-sm text-timber/80">
            Haydon Bridge, Northumberland · On the River South Tyne.
          </p>
          <p className="mt-2 text-xs text-timber/60">Est. 1422</p>
        </div>

        <div>
          <h3 className="font-semibold">Find Us</h3>
          <p className="mt-2 text-sm text-timber/80">
            Church St, Haydon Bridge NE47<br/>
            <a className="underline" href="https://maps.google.com" target="_blank">Get directions</a>
          </p>
          <p className="mt-2 text-sm"><a href="tel:+44" className="no-underline">+44 (0) ————</a></p>
          <p className="text-sm"><a href="mailto:hello@example.com" className="no-underline">hello@example.com</a></p>
        </div>

        <div>
          <h3 className="font-semibold">Opening Hours</h3>
          <ul className="mt-2 text-sm text-timber/80 space-y-1">
            <li>Mon–Thu: 12:00–22:00</li>
            <li>Fri–Sat: 12:00–23:00</li>
            <li>Sun: 12:00–21:00</li>
          </ul>
          <p className="mt-3 text-xs text-timber/60">Kitchen hours vary; see menus.</p>
        </div>

        <div>
          <h3 className="font-semibold">Good to Know</h3>
          <ul className="mt-2 text-sm space-y-1">
            <li><a className="no-underline" href="/privacy">Privacy</a></li>
            <li><a className="no-underline" href="/terms">Terms</a></li>
            <li><a className="no-underline" href="/contact">Contact</a></li>
          </ul>
          <p className="mt-3 text-xs text-timber/60">Alcohol licensing info here.</p>
        </div>
      </div>
      <div className="border-t border-stone/60 py-4">
        <div className="container-wide text-xs text-timber/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2025 The Anchor Hotel, Haydon Bridge.</span>
          <span>Best rate when you book direct.</span>
        </div>
      </div>
    </footer>
  );
}
