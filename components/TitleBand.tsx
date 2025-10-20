// components/TitleBand.tsx
type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function TitleBand({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section className="bg-parchment/70 border-y border-stone/30">
      <div className="container-wide py-10">
        {eyebrow ? (
          <div
            className={`uppercase tracking-[0.18em] text-sm text-timber/60 mb-2 ${alignClasses}`}
          >
            {eyebrow}
          </div>
        ) : null}

        <h1
          className={`font-display text-3xl sm:text-4xl font-bold text-forest tracking-tight ${alignClasses}`}
        >
          {title}
        </h1>

        {subtitle ? (
          <p className={`mt-2 text-timber/80 max-w-2xl ${alignClasses}`}>
            {subtitle}
          </p>
        ) : null}

        <div className="rule my-6" />
      </div>
    </section>
  );
}
