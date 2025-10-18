'use client';

import Image from 'next/image';
import Link from 'next/link';

export type RoomCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  amenities: string[];
  description: string;
};

export default function RoomCard({
  id,
  name,
  price,
  image,
  amenities,
  description,
}: RoomCardProps) {
  return (
    <div className="bg-offwhite rounded-lg overflow-hidden border border-cream shadow-sm hover:shadow-md transition-shadow">
      {/* Clicking the image already goes to the room page */}
      <Link href={`/rooms#${id}`} className="relative block h-56 group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="sr-only">View {name} details</span>
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          {/* 🔗 Make the NAME click through to the same place */}
          <Link
            href={`/rooms#${id}`}
            className="font-heading text-xl font-semibold text-forest hover:underline decoration-2 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-brass rounded"
          >
            {name}
          </Link>
          <span className="text-forest font-semibold">{price}</span>
        </div>

        <p className="text-sm mb-3 line-clamp-2">{description}</p>

        <ul className="text-sm text-brown/80 mb-4 list-disc pl-5 space-y-1">
          {amenities.slice(0, 3).map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        <div className="flex gap-2">
          <Link href={`/rooms#${id}`} className="btn-secondary">
            Room details
          </Link>
          <Link href="/rooms" className="btn-primary">
            Check availability
          </Link>
        </div>
      </div>
    </div>
  );
}
