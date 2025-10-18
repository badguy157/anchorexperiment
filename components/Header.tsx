'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/rooms', label: 'Stay' },
  { href: '/eat-and-drink', label: 'Eat & Drink' },
  { href: '/entertainment', label: 'What’s On' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/explore', label: 'Explore' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'bg-parchment/90 backdrop-blur supports-[backdrop-filter]:bg-parchment/70' : 'bg-parchment'}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline">
        <img src="/logo.svg" alt="The Anchor logo" className="h-8 w-auto" />
          <span className="font-display text-xl tracking-tight text-forest">The Anchor</span>
          <span className="ml-2 text-xs uppercase tracking-[0.2em] text-timber/60">Haydon Bridge · 1422</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] no-underline ${pathname === l.href ? 'active' : 'text-timber/80 hover:text-forest'}`}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href="/#booking" className="btn btn-primary no-underline">Book Your Stay</a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          <span>☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone/60 bg-parchment">
          <nav className="px-4 py-3 flex flex-col gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="py-2 text-timber">{l.label}</Link>
            ))}
            <a href="/#booking" className="btn btn-primary no-underline">Book Your Stay</a>
          </nav>
        </div>
      )}
    </header>
  );
}
