// lib/data.ts
// Single source of truth for homepage + rooms + eat & drink + explore + events

export type Venue = {
  id: string;
  name: string;
  description: string;
  image: string; // /venues/filename.jpg
  walkIn?: boolean;
  hours?: string;
  menuHref?: string;
};

export type Room = {
  id: string;
  name: string;
  price: string;
  image: string; // primary image
  amenities: string[];
  description: string;
  capacity: number;
  gallery: string[]; // list of image paths
};

export type EventItem = {
  title: string;
  time: string;
  venue: string;
  description: string;
};

export type Attraction = {
  title: string;
  description: string;
  distance: string;
  image: string;
};

export type Review = {
  author: string;
  quote: string;
  rating: number; // 1..5
};

export const venues: Venue[] = [
  {
    id: "secret-garden-cafe",
    name: "Secret Garden Café",
    description: "Coffee, pastries and light bites from morning till late afternoon.",
    image: "/venues/secret-garden-cafe.jpg",
    walkIn: true,
    hours: "08:00–17:00 daily",
  },
  {
    id: "salmons-leap-restaurant",
    name: "Salmon’s Leap Restaurant",
    description: "Seasonal British classics, local game & river-fresh specials.",
    image: "/venues/salmons-leap.jpg",
    walkIn: true,
    hours: "Thu–Sun, 12:00–15:00, 18:00–21:00",
  },
  {
    id: "judge-and-barrel-bar",
    name: "Judge & Barrel Bar",
    description: "Cask ales, fine whiskies, pool table & arcade machine.",
    image: "/venues/judge-barrel-bar.jpg",
    walkIn: true,
    hours: "Mon–Thu 12:00–23:00 · Fri–Sat 12:00–00:00 · Sun 12:00–22:30",
  },
  {
    id: "commodore-lounge",
    name: "Commodore Lounge & Entertainment",
    description: "Live music, karaoke, quizzes & big-match screenings.",
    image: "/venues/commodore-lounge.jpg",
    walkIn: true,
    hours: "Event-led openings",
  },
];

export const rooms: Room[] = [
  {
    id: "double-ensuite",
    name: "Double Room – Ensuite",
    price: "From £95 / night",
    image: "/rooms/double-ensuite/double-ensuite-1.jpg",
    amenities: ["Ensuite bathroom", "Breakfast included", "Free Wi-Fi", "Tea & coffee"],
    description:
      "Comfortable double with ensuite, classic furnishings and everything you need for a cosy stay.",
    capacity: 2,
    gallery: [
      "/rooms/double-ensuite/double-ensuite-1.jpg",
      "/rooms/double-ensuite/double-ensuite-2.jpg",
      "/rooms/double-ensuite/double-ensuite-3.jpg",
      "/rooms/double-ensuite/double-ensuite-4.jpg",
      "/rooms/double-ensuite/double-ensuite-5.jpg",
    ],
  },
  {
    id: "double-private-bathroom",
    name: "Double Room – Separate Private Bathroom",
    price: "From £90 / night",
    image: "/rooms/double-room-bathroom/bedroom1.jpg",
    amenities: ["Private bathroom (separate)", "Breakfast included", "Free Wi-Fi", "Tea & coffee"],
    description:
      "Spacious double with its own private (separate) bathroom just outside the room.",
    capacity: 2,
    gallery: [
      "/rooms/double-room-bathroom/bedroom1.jpg",
      "/rooms/double-room-bathroom/bedroom2.jpg",
      "/rooms/double-room-bathroom/bedroom3.jpg",
      "/rooms/double-room-bathroom/bedroom4.jpg",
    ],
  },
  {
    id: "twin-room-ensuite",
    name: "Twin Room – Ensuite",
    price: "From £95 / night",
    image: "/rooms/twin-room-ensuite/twin1.jpg",
    amenities: ["Ensuite bathroom", "Breakfast included", "Free Wi-Fi", "Tea & coffee"],
    description: "Two comfy single beds with ensuite — ideal for friends or family.",
    capacity: 2,
    gallery: [
      "/rooms/twin-room-ensuite/twin1.jpg",
      "/rooms/twin-room-ensuite/twin2.jpg",
      "/rooms/twin-room-ensuite/twin3.jpg",
      "/rooms/twin-room-ensuite/twin4.jpg",
      "/rooms/twin-room-ensuite/twin5.jpg",
      "/rooms/twin-room-ensuite/twin6.jpg",
    ],
  },
  {
    id: "family-suite",
    name: "Family Room – Ensuite",
    price: "From £130 / night",
    image: "/rooms/family-suite/family1.jpg",
    amenities: ["Ensuite bathroom", "Breakfast included", "Free Wi-Fi", "Tea & coffee"],
    description: "Spacious family room sleeping up to four with room to relax.",
    capacity: 4,
    gallery: [
      "/rooms/family-suite/family1.jpg",
      "/rooms/family-suite/family2.jpg",
      "/rooms/family-suite/family3.jpg",
      "/rooms/family-suite/family4.jpg",
      "/rooms/family-suite/family5.jpg",
    ],
  },
];

export const events: EventItem[] = [
  { title: "Live Football", time: "Matchdays", venue: "Commodore Lounge", description: "Premier League & cup games on the big screen." },
  { title: "Trivia Night", time: "Wednesdays 7:30pm", venue: "Commodore Lounge", description: "Teams up to 6 · Prizes & bar tab." },
  { title: "Friday Karaoke", time: "Fridays 8pm", venue: "Commodore Lounge", description: "Sing your heart out — crowd-pleasers welcome." },
];

export const attractions: Attraction[] = [
  { title: "Hadrian’s Wall", description: "UNESCO World Heritage Roman frontier.", distance: "15 min", image: "/explore/hadrians-wall.jpg" },
  { title: "Hexham Abbey", description: "Glorious 7th-century abbey & market town.", distance: "12 min", image: "/explore/hexham-abbey.jpg" },
  { title: "Allen Banks", description: "Woodland gorge & riverside walks.", distance: "15 min", image: "/explore/allen-banks.jpg" },
  { title: "Kielder Water", description: "Reservoir, dark skies & trails.", distance: "45 min", image: "/explore/kielder.jpg" },
];

export const reviews: Review[] = [
  { author: "Emily P.", quote: "Fantastic riverside location and a cracking breakfast.", rating: 5 },
  { author: "James R.", quote: "Room spotless, staff friendly, bar was lively!", rating: 5 },
  { author: "Sophie M.", quote: "Lovely stay — will definitely be back.", rating: 4 },
];
