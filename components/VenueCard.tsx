import Link from 'next/link';

type VenueCardProps = {
  title: string;
  image: string;   // path in /public, e.g. "/venues/salmons-leap.jpg"
  blurb: string;
  href: string;    // link to section or page
};

export default function VenueCard({ title, image, blurb, href }: VenueCardProps) {
  return (
    <article className="card overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden">
        {/* You can swap to next/image later if you like */}
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl">{title}</h3>
        <p className="mt-2 text-sm text-timber/80">{blurb}</p>
        <div className="mt-4">
          <Link href={href} className="btn btn-outline no-underline">
            Learn more
          </Link>
        </div>
      </div>
    </article>
  );
}
