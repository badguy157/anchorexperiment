// components/RoomCTA.tsx
"use client";

import Button from "@/components/Button";

type RoomCTAProps = {
  /** If false, the button is disabled and clicking scrolls to the booking widget */
  hasDates: boolean;
  /** /book href with any query params (room, checkIn, checkOut, guests) */
  href: string;
};

export default function RoomCTA({ hasDates, href }: RoomCTAProps) {
  if (!hasDates) {
    const scrollToWidget = () => {
      const el = document.getElementById("booking");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <button
        type="button"
        onClick={scrollToWidget}
        aria-disabled="true"
        className="btn btn-gold w-full opacity-60 cursor-not-allowed"
        title="Choose dates above to book"
      >
        Book now
      </button>
    );
  }

  return (
    <Button href={href} variant="cta" full>
      Book now
    </Button>
  );
}
