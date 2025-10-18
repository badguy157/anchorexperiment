'use client';

import { useState } from 'react';

export default function HeroMedia({
  src,
  fallback,
  alt,
  className = 'w-full h-full object-cover',
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      onError={() => setCurrent(fallback)}
    />
  );
}
