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
    <header className={`site-header ${scrolled ? 'bg-parchment/90 backdrop-blur supports-[backdrop-filter]:bg-parchment/70' : 'bg-parchment'}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        {/* Brand takes flex space so it never collides with the nav */}
        <Link href="/" className="flex-1 min-w-0 flex items-center gap-2 no-underline">
          {/* Use your existing file */}
          <img src="/logo.svg" alt="The Anchor logo" className="h-8 w-auto shrink-0" />
          <span className="font-display text-xl tracking-tight text-forest shrink-0">The Anchor</span>
          <span className="hidden lg:inline-block text-xs uppercase tracking-[0.2em] text-timber/60 whitespace-nowrap ml-2">
            Haydon Bridge · 1422
          </span>
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          <span>☰</span>
        </button>
      </div>

      {/* Mobile drawer */}
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
