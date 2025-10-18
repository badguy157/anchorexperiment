// app/contact/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Contact – The Anchor",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[46vh] min-h-[320px]">
        <Image
          src="/hero-image.jpg"                 // uses /public/hero-image.jpg
          alt="The Anchor Hotel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-10 container-wide">
          <h1 className="font-display text-4xl md:text-5xl text-white drop-shadow">
            Contact
          </h1>
          <p className="mt-2 text-white/90 drop-shadow">
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Existing contact form + details below this… */}
      {/* ... */}
    </>
  );
}
