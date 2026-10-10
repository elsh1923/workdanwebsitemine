// Merges the core dictionary with one file per area. Add new areas here.
import { en } from "./en"
import { am } from "./am"
import { flightsEn, flightsAm } from "./flights"
import { hotelsEn, hotelsAm } from "./hotels"
import { aboutEn, aboutAm } from "./about"
import { servicesEn, servicesAm } from "./services"
import { contactEn, contactAm } from "./contact"
import { galleryEn, galleryAm } from "./gallery"
import { toursEn, toursAm } from "./tours"
import { pccEn, pccAm } from "./pcc"

export const dictionaries: Record<"en" | "am", Record<string, string>> = {
  en: { ...en, ...flightsEn, ...hotelsEn, ...aboutEn, ...servicesEn, ...contactEn, ...galleryEn, ...toursEn, ...pccEn },
  am: { ...am, ...flightsAm, ...hotelsAm, ...aboutAm, ...servicesAm, ...contactAm, ...galleryAm, ...toursAm, ...pccAm },
}


