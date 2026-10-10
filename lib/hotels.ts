// Hotel listing data. Prices are indicative samples (USD per room per night); the sales team confirms
// live availability and the final rate. Replace with a booking API when access is granted.
export type CityId = "dubai" | "istanbul" | "guangzhou"
export type AmenityId = "pool" | "spa" | "beach" | "dining" | "butler" | "view"

export interface Hotel {
  id: string
  city: CityId
  stars: number
  imageSrc: string
  priceUsd: number
  tags: AmenityId[]
  // English names used in the WhatsApp message so the sales team always reads the same text
  english: { name: string; location: string }
}

export const cities: CityId[] = ["dubai", "istanbul", "guangzhou"]
export const amenityIds: AmenityId[] = ["pool", "spa", "beach", "dining", "butler", "view"]

export const priceBuckets = [
  { id: "b1", min: 0, max: 500 },
  { id: "b2", min: 500, max: 800 },
  { id: "b3", min: 800, max: 1200 },
  { id: "b4", min: 1200, max: Infinity },
] as const

export const hotels: Hotel[] = [
  {
    id: "burj",
    city: "dubai",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    priceUsd: 1650,
    tags: ["beach", "butler", "spa", "pool"],
    english: { name: "Burj Al Arab Jumeirah", location: "Dubai, UAE" },
  },
  {
    id: "ciragan",
    city: "istanbul",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1541480601022-2308c0f01587?q=80&w=800&auto=format&fit=crop",
    priceUsd: 720,
    tags: ["view", "pool", "spa"],
    english: { name: "Çırağan Palace Kempinski", location: "Istanbul, Turkey" },
  },
  {
    id: "fourseasons",
    city: "guangzhou",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1551882547-ff40c0d129df?q=80&w=800&auto=format&fit=crop",
    priceUsd: 480,
    tags: ["dining", "spa", "view"],
    english: { name: "Four Seasons Hotel", location: "Guangzhou, China" },
  },
  {
    id: "atlantis",
    city: "dubai",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop",
    priceUsd: 950,
    tags: ["pool", "dining", "spa", "beach"],
    english: { name: "Atlantis The Royal", location: "Dubai, UAE" },
  },
  {
    id: "peninsula",
    city: "istanbul",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    priceUsd: 640,
    tags: ["dining", "pool", "view"],
    english: { name: "The Peninsula", location: "Istanbul, Turkey" },
  },
  {
    id: "rosewood",
    city: "guangzhou",
    stars: 5,
    imageSrc: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=800&auto=format&fit=crop",
    priceUsd: 430,
    tags: ["view", "spa", "pool", "butler"],
    english: { name: "Rosewood", location: "Guangzhou, China" },
  },
]

export const inBucket = (usd: number, id: string) => {
  const b = priceBuckets.find((x) => x.id === id)
  return !!b && usd >= b.min && usd < b.max
}
