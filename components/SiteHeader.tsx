// components/SiteHeader.tsx
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-wide h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl font-display tracking-tight text-forest">The Anchor</span>
          <span className="hidden sm:inline text-timber/60">· HAYDON BRIDGE · 1422</span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          <Link href="/rooms" className="hover:underline">
            Stay
          </Link>
          <Link href="/eat-and-drink" className="hover:underline">
            Eat &amp; Drink
          </Link>
          <Link href="/whats-on" className="hover:underline">
            What’s On
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/explore" className="hover:underline">
            Explore
          </Link>
          <Link href="/story" className="hover:underline">
            Our Story
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          {/* Book button */}
          <Link
            href="/book"
            className="btn-cta rounded-xl px-4 py-2 text-sm font-semibold no-underline"
          >
            Book Your Stay
          </Link>
        </nav>
      </div>
    </header>
  );
}
