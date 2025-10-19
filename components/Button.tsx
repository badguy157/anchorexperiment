// components/Button.tsx
import clsx from "clsx";
import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  variant?: "cta" | "light" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  full?: boolean;                                        // makes the button 100% width
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"]; // <-- added
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];       // <-- added
};

export default function Button({
  children,
  href,
  onClick,
  variant = "cta",
  size = "md",
  className,
  full = false,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const base = "btn";
  const byVariant =
    variant === "cta"
      ? "btn-gold"
      : variant === "light"
      ? "btn-light"
      : variant === "dark"
      ? "btn-contrast"
      : "btn-outline";

  const bySize = size === "lg" ? "btn--lg" : size === "sm" ? "btn--sm" : "";

  const classes = clsx(base, byVariant, bySize, full && "w-full", className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
