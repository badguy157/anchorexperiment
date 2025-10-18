type Props = {
  title: string;
  image: string;
  blurb: string;
  href: string;
};

export default function VenueCard({ title, image, blurb, href }: Props) {
  return (
    <article className="card overflow-hidden">
      <img src={image} alt="" className="w-full h-52 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-timber/80">{blurb}</p>
        <div className="mt-4">
          <a href={href} className="btn btn-contrast no-underline">Learn more</a>
        </div>
      </div>
    </article>
  );
}
