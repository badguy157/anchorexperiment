'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/rooms', label: 'Stay' },
  { href: '/eat-and-drink', label: 'Eat & Drink' },
  { href: '/entertainment', label: 'What’s On' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/explore', label: 'Explore' },
  { href: '/story', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

function BrandMark() {
  return (
    <span className="flex items-center gap-2 text-forest" aria-label="The Anchor Hotel – Haydon Bridge">
      {/* simple anchor crest */}
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
        <path d="M3 12c4-5 14-5 18 0" />
        <circle cx="12" cy="5.5" r="1.6" />
        <path d="M12 7.5v7M9.5 11.5h5" />
        <path d="M7.5 14.5c.8 2.5 2.6 4 4.5 4s3.7-1.5 4.5-4" />
        <path d="M5 20c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0 2-.8 3 0" />
      </svg>
      <span className="font-heading font-semibold text-[18px] md:text-[19px] tracking-wide hidden sm:inline">
        The Anchor Hotel – Haydon Bridge
      </span>
    </span>
  );
}

function DesktopLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link href={href} className="relative px-1.5 py-1 text-[15px] text-brown hover:text-forest transition-colors group">
      <span className={active ? 'text-forest font-medium' : ''}>{label}</span>
      <span className={['absolute left-0 -bottom-0.5 h-[2px] w-full bg-forest transition-all duration-200', active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'].join(' ')} />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all',
          scrolled ? 'bg-cream/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md border-b border-cream shadow-sm' : 'bg-cream border-b border-cream',
        ].join(' ')}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between px-4 h-[74px]">
            <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brass rounded">
              <BrandMark />
            </Link>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((l) => (
                <DesktopLink key={l.href} href={l.href} label={l.label} active={pathname === l.href} />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/rooms" className="hidden sm:inline-flex items-center justify-center rounded-lg px-4 py-2 text-[15px] font-semibold text-forest bg-brass hover:brightness-95 transition" data-gtag="cta_book_header">
                Check availability
              </Link>

              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden p-2 text-forest focus:outline-none focus:ring-2 focus:ring-brass rounded"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <nav className="lg:hidden border-t border-cream px-4 py-3 bg-cream/95 backdrop-blur-md" aria-label="Mobile navigation">
              <div className="flex flex-col">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={['px-1.5 py-3 text-[16px] transition-colors', pathname === l.href ? 'text-forest font-medium' : 'text-brown hover:text-forest'].join(' ')}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Link href="/rooms" className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-[16px] font-semibold text-forest bg-brass hover:brightness-95 transition" onClick={() => setOpen(false)} data-gtag="cta_book_header_mobile">
                    Check availability
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* No spacer here; we push content down from layout instead */}
    </>
  );
}
