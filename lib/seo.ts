// lib/seo.ts
type RoomJsonLd = {
    name: string;
    description?: string;
    priceFrom?: string; // "£95"
    occupancy?: number; // 2, 4, etc.
  };
  
  export function roomOfferJsonLd(hotelName: string, rooms: RoomJsonLd[]) {
    const offers = rooms.map((r) => ({
      "@type": "Offer",
      name: r.name,
      description: r.description,
      priceSpecification: r.priceFrom
        ? { "@type": "UnitPriceSpecification", priceCurrency: "GBP", price: r.priceFrom.replace(/[^\d.]/g, "") }
        : undefined,
      eligibleQuantity: r.occupancy ? { "@type": "QuantitativeValue", value: r.occupancy } : undefined,
      availability: "http://schema.org/InStock",
    }));
  
    return {
      "@context": "https://schema.org",
      "@type": "Hotel",
      name: hotelName,
      makesOffer: offers,
    };
  }
  