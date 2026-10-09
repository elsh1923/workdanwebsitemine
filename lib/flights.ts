export type TripType = "one-way" | "round-trip" | "multi-city"
export type Cabin = "Any" | "Economy" | "Premium Economy" | "Business" | "First"
export type Currency = "USD" | "ETB"

export interface Airport { code: string; name: string; city: string }
export interface Pax { adults: number; children: number; infants: number }

export interface SearchState extends Pax {
  trip: TripType
  cabin: Cabin
  airline: string
  channel: string
  from: string
  to: string
  depart: string
  ret: string
}

export const airports: Airport[] = [
  { code: "ADD", name: "Bole International Airport", city: "Addis Ababa" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
  { code: "SHJ", name: "Sharjah International Airport", city: "Sharjah" },
  { code: "DOH", name: "Hamad International Airport", city: "Doha" },
  { code: "JED", name: "King Abdulaziz International Airport", city: "Jeddah" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "Delhi" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok" },
  { code: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi" },
  { code: "LHR", name: "Heathrow Airport", city: "London" },
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York" },
]

export const airportLabel = (a: Airport) => `${a.name} (${a.code})`

export function resolveAirport(input: string): Airport | undefined {
  const q = input.trim().toLowerCase()
  if (!q) return undefined
  const code = q.match(/\(([a-z]{3})\)\s*$/)
  if (code) return airports.find((a) => a.code.toLowerCase() === code[1])
  return (
    airports.find((a) => a.code.toLowerCase() === q || a.city.toLowerCase() === q || a.name.toLowerCase() === q) ??
    airports.find((a) => a.name.toLowerCase().includes(q) || a.city.toLowerCase().includes(q))
  )
}

export const cabins: Cabin[] = ["Any", "Economy", "Premium Economy", "Business", "First"]
export const channels = ["All Channels", "Airline Direct", "Consolidator Fares"]
export const ETB_PER_USD = 150 // indicative only; final amount is confirmed at ticketing

const CABIN_FACTOR: Record<Cabin, number> = { Any: 1, Economy: 1, "Premium Economy": 1.6, Business: 3, First: 4.5 }
const ROUTE_FACTOR: Record<string, number> = { DXB: 1, SHJ: 1, DOH: 1, JED: 1.05, NBO: 0.7, IST: 1.3, DEL: 1.35, BKK: 1.55, CAN: 1.7, LHR: 2.1, JFK: 3 }

export const defaultSearch: SearchState = {
  trip: "round-trip",
  cabin: "Any",
  adults: 1,
  children: 0,
  infants: 0,
  airline: "All Airlines",
  channel: "All Channels",
  from: airportLabel(airports[0]),
  to: airportLabel(airports[1]),
  depart: "2026-10-09",
  ret: "2026-10-12",
}

// Mock fares — swap for the live GDS response when the API is connected.
interface FlightTemplate {
  id: string; airline: string; code: string; number: string
  depTime: string; minutes: number; stops: 0 | 1; via?: string
  base: number; taxes: number; channel: string
}

const templates: FlightTemplate[] = [
  { id: "et662", airline: "Ethiopian Airlines", code: "ET", number: "662", depTime: "19:55", minutes: 255, stops: 0, base: 395, taxes: 95, channel: "Airline Direct" },
  { id: "et600", airline: "Ethiopian Airlines", code: "ET", number: "600", depTime: "21:40", minutes: 255, stops: 0, base: 380, taxes: 95, channel: "Airline Direct" },
  { id: "ek724", airline: "Emirates", code: "EK", number: "724", depTime: "15:30", minutes: 255, stops: 0, base: 420, taxes: 85, channel: "Airline Direct" },
  { id: "fz626", airline: "flydubai", code: "FZ", number: "626", depTime: "08:20", minutes: 260, stops: 0, base: 360, taxes: 80, channel: "Consolidator Fares" },
  { id: "qr1427", airline: "Qatar Airways", code: "QR", number: "1427", depTime: "01:35", minutes: 405, stops: 1, via: "DOH", base: 350, taxes: 110, channel: "Consolidator Fares" },
]

export interface Flight {
  id: string; tplId: string; airline: string; code: string; flightNumber: string
  from: string; to: string; depTime: string; arrTime: string; nextDay: boolean
  duration: string; stops: 0 | 1; via?: string; base: number; taxes: number; channel: string
}

const pad = (n: number) => String(n).padStart(2, "0")

function build(t: FlightTemplate, from: string, to: string): Flight {
  const factor = ROUTE_FACTOR[to] ?? ROUTE_FACTOR[from] ?? 1.5
  const minutes = Math.round(t.minutes * factor)
  const [h, m] = t.depTime.split(":").map(Number)
  const total = h * 60 + m + minutes
  return {
    id: `${t.id}-${from}-${to}`,
    tplId: t.id,
    airline: t.airline,
    code: t.code,
    flightNumber: `${t.code} ${t.number}`,
    from,
    to,
    depTime: t.depTime,
    arrTime: `${pad(Math.floor(total / 60) % 24)}:${pad(total % 60)}`,
    nextDay: total >= 24 * 60,
    duration: `${Math.floor(minutes / 60)} hours ${minutes % 60} minutes`,
    stops: t.stops,
    via: t.via,
    base: Math.round(t.base * factor),
    taxes: Math.round(t.taxes * (1 + (factor - 1) / 2)),
    channel: t.channel,
  }
}

export const getFlights = (from: string, to: string) => templates.map((t) => build(t, from, to))
export const getFlight = (tplId: string, from: string, to: string) => {
  const t = templates.find((x) => x.id === tplId)
  return t ? build(t, from, to) : undefined
}
export const airlineNames = Array.from(new Set(templates.map((t) => t.airline)))

export function priceLeg(f: Flight, pax: Pax, cabin: Cabin) {
  const payers = pax.adults + pax.children
  const fare = Math.round(f.base * CABIN_FACTOR[cabin])
  const base = fare * payers + Math.round(fare * 0.1) * pax.infants
  const taxes = f.taxes * payers
  const fee = Math.round((base + taxes) * 0.1) + 25 * payers
  return { base, taxes, fee, total: base + taxes + fee }
}

export function formatMoney(usd: number, cur: Currency) {
  if (cur === "ETB") return `${Math.round(usd * ETB_PER_USD).toLocaleString("en-US")} ETB`
  return `$${Math.round(usd).toLocaleString("en-US")}`
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export const parseDate = (s: string) => {
  const [y, m, d] = s.split("-").map(Number)
  return new Date(y, m - 1, d)
}
export const toISO = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
export const addDays = (s: string, n: number) => {
  const d = parseDate(s)
  d.setDate(d.getDate() + n)
  return toISO(d)
}
export const diffDays = (a: string, b: string) => Math.round((parseDate(b).getTime() - parseDate(a).getTime()) / 86400000)
export const fmtField = (s: string) => { const d = parseDate(s); return `${pad(d.getDate())} ${MONTHS[d.getMonth()]} ${d.getFullYear()}` }
export const fmtMeta = (s: string) => { const d = parseDate(s); return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}` }
export const fmtStrip = (s: string) => { const d = parseDate(s); return { weekday: DAYS[d.getDay()], day: `${MONTHS[d.getMonth()]} ${d.getDate()}` } }

export const paxTotal = (p: Pax) => p.adults + p.children + p.infants
