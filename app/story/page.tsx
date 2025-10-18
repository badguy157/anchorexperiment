// app/story/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Our Story – The Anchor",
};

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[46vh] min-h-[320px]">
        <Image
          src="/hero-image.jpg"                   // uses /public/hero-image.jpg
          alt="The Anchor Hotel exterior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* a gentle top fade so nav/logo stay readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-10 container-wide">
          <h1 className="font-display text-4xl md:text-5xl text-white drop-shadow">
            Our Story
          </h1>
          <p className="mt-2 text-white/90 drop-shadow">
            Six centuries on the South Tyne
          </p>
        </div>
      </section>

      {/* Existing story content below this… */}
      {/* ... */}
    </>
  );
}
