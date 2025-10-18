import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest/95 text-offwhite border-t border-cream pt-12 pb-8">
      <div className="container-custom px-4">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr_1.4fr] md:grid-cols-2 items-start">


          {/* Brand / Address */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-cream">
              The Anchor Hotel
            </h3>
            <address className="not-italic text-offwhite/90 space-y-1">
              <p>Haydon Bridge</p>
              <p>Northumberland</p>
              <p>NE47 6AB</p>
            </address>

            <div className="mt-3 space-y-1 text-offwhite/90">
              <p>
                📞{" "}
                <a
                  href="tel:+441234567890"
                  className="hover:text-brass transition-colors"
                >
                  01234 567 890
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:info@theanchorbridge.co.uk"
                  className="hover:text-brass transition-colors"
                >
                  info@theanchorbridge.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2 text-offwhite/90">
              <li><Link href="/rooms" className="hover:text-brass">Rooms</Link></li>
              <li><Link href="/eat-and-drink" className="hover:text-brass">Eat &amp; Drink</Link></li>
              <li><Link href="/entertainment" className="hover:text-brass">What’s On</Link></li>
              <li><Link href="/gallery" className="hover:text-brass">Gallery</Link></li>
              <li><Link href="/explore" className="hover:text-brass">Explore</Link></li>
              <li><Link href="/contact" className="hover:text-brass">Contact</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cream">
              Opening Hours
            </h4>
            <div className="text-offwhite/90 space-y-3">
              <div>
                <p className="font-semibold text-brass">Secret Garden Café</p>
                <p>8:00–17:00 (Daily)</p>
              </div>
              <div>
                <p className="font-semibold text-brass">Judge &amp; Barrel Bar</p>
                <p>Mon–Thu 12:00–23:00</p>
                <p>Fri–Sat 12:00–00:00</p>
                <p>Sun 12:00–22:30</p>
              </div>
              <div>
                <p className="font-semibold text-brass">Salmon’s Leap Restaurant</p>
                <p>Thu–Sun 12:00–15:00, 18:00–21:00</p>
              </div>
            </div>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cream">
              Find Us
            </h4>
            <div className="rounded-xl overflow-hidden border border-cream/70 shadow-lg hover:shadow-brass/30 transition-shadow duration-300">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.052948751908!2d-2.246349423107107!3d54.97540577399251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e899f8cb19833%3A0x398e7d0e6b88f7ce!2sThe%20Anchor%20Hotel%2C%20Haydon%20Bridge!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-sm text-offwhite/70 gap-2">
          <p>&copy; {new Date().getFullYear()} The Anchor Hotel. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brass transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brass transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
