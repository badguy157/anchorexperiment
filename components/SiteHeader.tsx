'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/stay', label: 'Stay' },
  { href: '/eat-and-drink', label: 'Eat & Drink' },
  { href: '/whats-on', label: `What’s On` },
  { href: '/gallery', label: 'Gallery' },
  { href: '/explore', label: 'Explore' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <header className="site-header">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 font-display text-lg hover:opacity-90">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10">
            {/* tiny anchor mark */}
            ⚓
          </span>
          <span className="hidden sm:block">The Anchor</span>
          <span className="hidden md:block text-timber/70">HAYDON BRIDGE · 1422</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => (
            <Link
              key={i.href}
              href={i.href}
              className={clsx('transition', isActive(i.href) ? 'active' : 'text-timber/90 hover:text-forest')}
            >
              {i.label}
            </Link>
          ))}

          {/* Book Your Stay — navbar CTA */}
          <Link
            href="/rooms"
            className="btn-cta rounded-xl px-4 py-2 leading-none"
          >
            Book Your Stay
          </Link>
        </nav>
      </div>
    </header>
  );
}
