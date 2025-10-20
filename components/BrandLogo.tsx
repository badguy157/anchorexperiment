// components/BrandLogo.tsx
// Always render the PNG in /public/logo.png (no SVG variants or marks).

import Link from "next/link";

type Props = {
  size?: number;                // pixel height for the mark
  showWordmark?: boolean;       // show text to the right
  linkToHome?: boolean;         // wrap in <Link href="/" />
  variant?: "dark" | "light";   // wordmark color
};

export default function BrandLogo({
  size = 40,
  showWordmark = true,
  linkToHome = false,
  variant = "dark",
}: Props) {
  const content = (
    <div className="flex items-center gap-2" aria-label="The Anchor Hotel – Haydon Bridge">
      <img
        src="/logo.png"
        alt="The Anchor Hotel"
        height={size}
        style={{ height: size, width: "auto" }}
        className="shrink-0 select-none"
      />
      {showWordmark && (
        <div className={`leading-tight select-none ${variant === "dark" ? "text-forest" : "text-offwhite"}`}>
          <div className="font-heading font-semibold text-base md:text-lg tracking-wide">
            The Anchor Hotel – Haydon Bridge
          </div>
        </div>
      )}
    </div>
  );

  return linkToHome ? (
    <Link href="/" className="no-underline" aria-label="Go to home">
      {content}
    </Link>
  ) : (
    content
  );
}
