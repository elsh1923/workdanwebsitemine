export interface TourPackage {
  id: string
  title: string
  href: string
  image: string
  heroImage: string
  tags: string[]
  categories: string[]
  price: string
  priceRaw: number
  duration: string
  rating: number
  reviews: number
  description: string
}

export const packages: TourPackage[] = [
  {
    id: "dubai-tour",
    title: "Dubai Luxury Tour",
    href: "/packages/dubai-tour",
    image: "/packages/dubai-tour/dubai-hero-section.jpeg",
    heroImage: "/ChatGPT Image Oct 8, 2026, 10_18_51 PM.png",
    tags: ["Modern Luxury", "Desert Safari", "Skyline"],
    categories: ["Luxury"],
    price: "$1,890+",
    priceRaw: 1890,
    duration: "5-7 Days",
    rating: 4.9,
    reviews: 148,
    description:
      "Immerse in futuristic marvels, desert glamping under Arabian skies, world-class dining, and ultra-luxurious beachfront resorts.",
  },
  {
    id: "china-tour",
    title: "China Guangzhou & Shanghai",
    href: "/packages/china-tour",
    image: "/packages/china-tour/package-china.jpeg",
    heroImage: "/chine landing.png",
    tags: ["Cultural Heritage", "Trade & Commerce", "Ancient"],
    categories: ["Cultural"],
    price: "$2,250+",
    priceRaw: 2250,
    duration: "8-10 Days",
    rating: 4.8,
    reviews: 112,
    description:
      "Discover the harmonic blend of ancient dynasties, imperial gardens, futuristic metropolises, and vibrant Cantonese culinary heritage.",
  },
  {
    id: "turkey-tour",
    title: "Istanbul, Turkey",
    href: "/packages/turkey-tour",
    image: "/packages/turkey-tour/turkey-hero.jpeg",
    heroImage: "/turk istanbul.png",
    tags: ["Historic Marvels", "Aegean Coast", "Bosphorus"],
    categories: ["Cultural", "Heritage"],
    price: "$1,680+",
    priceRaw: 1680,
    duration: "6-8 Days",
    rating: 4.9,
    reviews: 96,
    description:
      "Where East meets West along the Bosphorus Strait. Explore Ottoman palaces, the Hagia Sophia, and hot air balloons over Cappadocia.",
  },
  {
    id: "thailand-tour",
    title: "Thailand Island Paradise",
    href: "/packages/thailand-tour",
    image: "/packages/thailand-tour/thailand.jpeg",
    heroImage: "/ChatGPT Image Oct 8, 2026, 11_07_01 PM.png",
    tags: ["Tropical", "Islands", "Temples"],
    categories: ["Tropical"],
    price: "$1,590+",
    priceRaw: 1590,
    duration: "7-9 Days",
    rating: 4.8,
    reviews: 134,
    description:
      "Crystal waters, tropical retreats, ancient temples, and exquisite Thai cuisine in paradise destinations.",
  },
  {
    id: "delhi-tour",
    title: "Delhi & Royal India",
    href: "/packages/delhi-tour",
    image: "/packages/delhi-tour/delhi-herosection.jpeg",
    heroImage: "/delhi.png",
    tags: ["Heritage", "Imperial", "Bazaars"],
    categories: ["Heritage", "Cultural"],
    price: "$1,450+",
    priceRaw: 1450,
    duration: "6-8 Days",
    rating: 4.7,
    reviews: 89,
    description:
      "Imperial architecture, vibrant bazaars, Mughal heritage, and the iconic Taj Mahal in the heart of royal India.",
  },
]
