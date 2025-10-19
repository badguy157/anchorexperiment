// components/Button.tsx
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    variant?: "cta" | "primary" | "light" | "outline";
    full?: boolean;
  };

const cls = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export default function Button({
  href,
  children,
  className,
  variant = "cta",
  full,
  ...rest
}: Props) {
  const base = "btn rounded-xl font-semibold";
  const byVariant =
    variant === "cta"
      ? "btn-cta"
      : variant === "primary"
      ? "btn-primary"
      : variant === "light"
      ? "btn-light"
      : "btn-outline";

  const width = full ? "w-full" : "";

  if (href) {
    return (
      <a href={href} className={cls(base, byVariant, width, className)} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls(base, byVariant, width, className)} {...(rest as any)}>
      {children}
    </button>
  );
}
