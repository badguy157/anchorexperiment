// components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

const NAV = [
  { href: "/rooms", label: "Stay" },
  { href: "/eat-and-drink", label: "Eat & Drink" },
  { href: "/whats-on", label: "What’s On" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore", label: "Explore" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container-wide h-16 flex items-center justify-between gap-4">
        {/* <-- PNG logo only */}
        <BrandLogo size={40} showWordmark linkToHome variant="dark" />

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map(({ href, label }) => {
            const active = pathname?.startsWith(href);
            return (
              <Link key={href} href={href} className={active ? "active font-semibold" : ""}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          {/* UPDATED: send to Rooms page (no #booking anchor) */}
          <Link href="/rooms" className="btn btn-gold btn--sm no-underline">
            Book Your Stay
          </Link>
        </div>
      </div>
    </header>
  );
}
