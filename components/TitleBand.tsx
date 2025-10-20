// components/TitleBand.tsx
type Props = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  
  export default function TitleBand({ eyebrow, title, subtitle }: Props) {
    return (
      <section className="bg-parchment/70 border-y border-stone/30">
        <div className="container-custom py-10">
          {eyebrow ? (
            <div className="uppercase tracking-[0.18em] text-sm text-timber/60 mb-2">
              {eyebrow}
            </div>
          ) : null}
  
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest tracking-tight">
            {title}
          </h1>
  
          {subtitle ? (
            <p className="mt-2 text-brown text-lg max-w-3xl">
              {subtitle}
            </p>
          ) : null}
  
          {/* soft divider */}
          <div className="mt-6 h-[2px] rounded-full bg-[repeating-linear-gradient(90deg,rgba(60,44,34,.28)_0_10px,rgba(60,44,34,.12)_10px_20px)]" />
        </div>
      </section>
    );
  }
  