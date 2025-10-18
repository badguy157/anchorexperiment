import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  image: string;
  walkIn?: boolean;
  href: string;
  menuHref?: string; // optional: link to PDF or menu page
};

export default function VenueCard({ name, description, image, walkIn, href, menuHref }: Props) {
  return (
    <div className="bg-offwhite rounded-lg overflow-hidden shadow-md border border-cream flex flex-col">
      <div className="relative h-48">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading text-xl font-semibold text-forest">{name}</h3>
        <p className="text-brown mt-2">{description}</p>
        {walkIn !== undefined && (
          <p className="text-sm text-brown/80 mt-1">{walkIn ? "Walk-ins welcome" : "Booking recommended"}</p>
        )}

        <div className="mt-4 flex gap-3">
          <Link href={href} className="btn-secondary" data-gtag="venue_view" data-label={name}>
            View details
          </Link>
          {menuHref && (
            <a
              href={menuHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              data-gtag="venue_menu"
              data-label={name}
            >
              View menu
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
