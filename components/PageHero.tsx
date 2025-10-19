// components/PageHero.tsx
type PageHeroProps = {
    eyebrow?: string;
    title: string;
    sub?: string;
    image: string;              // e.g. "/anchor-hero.jpg"
    position?: string;          // e.g. "center 30%"
    align?: "left" | "center";  // default "left"
  };
  
  export default function PageHero({
    eyebrow,
    title,
    sub,
    image,
    position = "center",
    align = "left",
  }: PageHeroProps) {
    return (
      <section
        className={`page-hero ${align === "left" ? "page-hero--left" : ""}`}
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
      >
        <div className="page-hero-inner">
          {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
          <h1 className="hero-h1">{title}</h1>
          {sub ? <p className="hero-subtext">{sub}</p> : null}
        </div>
      </section>
    );
  }
  