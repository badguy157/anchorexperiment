// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={active ? "active px-3 py-2" : "px-3 py-2 hover:underline"}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-lg">The Anchor</Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/rooms">Stay</NavLink>
          <NavLink href="/eat-and-drink">Eat &amp; Drink</NavLink>
          <NavLink href="/whats-on">What’s On</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/explore">Explore</NavLink>
          <NavLink href="/story">Our Story</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          {/* CTA in the navbar */}
          <Button href="/rooms#booking" variant="cta" className="ml-3">
            Book Your Stay
          </Button>
        </nav>
      </div>
    </header>
  );
}
