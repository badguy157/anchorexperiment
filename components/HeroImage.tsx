'use client';

import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  height?: number; // default 420
  children?: React.ReactNode; // optional overlay content (we’ll keep it empty on Story/Contact)
};

export default function HeroImage({ src, alt, height = 420, children }: Props) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height }}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* subtle top->bottom gradient so white text would read if we ever add it */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.10)_35%,rgba(0,0,0,0)_70%)]" />
      {children ? (
        <div className="absolute inset-0 flex items-end">
          <div className="container-wide pb-8 text-white drop-shadow-md">
            {children}
          </div>
        </div>
      ) : null}
    </section>
  );
}
