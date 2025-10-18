type Props = {
  title: string;
  image: string;
  desc: string;
  price?: string;
  href: string; // link to book / availability
};

export default function RoomCard({ title, image, desc, price, href }: Props) {
  return (
    <article className="card overflow-hidden">
      <img src={image} alt="" className="w-full h-56 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        {price && <p className="mt-1 text-forest font-semibold">{price}</p>}
        <p className="mt-2 text-timber/80">{desc}</p>

        <div className="mt-5">
          {/* Redesigned CTA */}
          <a href={href} className="room-cta no-underline text-center">Check availability</a>
        </div>
      </div>
    </article>
  );
}
