// Content for the five destination tour pages. Strings here are the English source text;
// the page translates each one through the "tr." dictionary (lib/i18n/tours.ts).
export type DayIcon = "Plane" | "Camera" | "Anchor" | "Compass" | "ShoppingBag" | "Building2"

export interface TourActivity { name: string; price: string; img: string; desc: string; about: string; highlights: string[]; duration: string; timing: string; requirements: string[]; rules: string[] }
export interface TourPackage {
  name: "Standard" | "Premium" | "Luxury"
  price: string
  nights: string
  hotel: string
  badge: string | null
  features: string[]
}
export interface TourDay { title: string; icon: DayIcon; activities: string[] }
export interface TourFaq { q: string; a: string }

export interface TourConfig {
  id: "dubai" | "turkey" | "china" | "delhi" | "thailand"
  shortName: string
  waName: string
  heroImage: string
  heroAlt: string
  location: string
  flag: string
  titleLines: [string, string]
  description: string
  fromPrice: string
  premiumPrice: string
  approval: string
  trustHotels: string
  activitiesIntro: string
  activities: TourActivity[]
  packages: TourPackage[]
  itineraryIntro: string
  itinerary: TourDay[]
  included: string[]
  excluded: string[]
  stickyFeatures: string[]
  testimonial: { quote: string; author: string }
  faqIntro: string
  faqs: TourFaq[]
  ctaBadge: string
  ctaTitle: [string, string]
  commentsPlaceholder: string
}

const nights = { n5: "5 Nights / 6 Days", n7: "7 Nights / 8 Days", n10: "10 Nights / 11 Days" }

export const tours: Record<TourConfig["id"], TourConfig> = {
  dubai: {
    id: "dubai",
    shortName: "Dubai Tour",
    waName: "Dubai Tour",
    heroImage: "/ChatGPT Image Oct 8, 2026, 10_18_51 PM.png",
    heroAlt: "Dubai luxury skyline at dusk",
    location: "Dubai, United Arab Emirates",
    flag: "🇦🇪",
    titleLines: ["Dubai", "Luxury Tour"],
    description:
      "Futuristic skyscrapers, golden desert safaris, world-class dining, and ultra-luxurious beachfront resorts — an Arabian journey unlike any other.",
    fromPrice: "74,657",
    premiumPrice: "115,000",
    approval: "99",
    trustHotels: "5-Star Hotels",
    activitiesIntro: "Premium activities available as add-ons or already included in select package tiers.",
    activities: [
      { name: "City Tour", price: "100 AED", img: "/city tour image.png", desc: "Guided tour of Dubai's iconic landmarks — Burj Khalifa, Dubai Frame, Downtown & more", about: "See the best of modern and old Dubai in one guided tour. Your guide takes you to the city's famous landmarks and shares the stories behind them.", highlights: ["Burj Khalifa and Downtown Dubai", "Dubai Frame viewpoint", "Photo stops at iconic landmarks"], duration: "About 4–6 hours", timing: "Usually a morning or afternoon pick-up from your hotel", requirements: ["Comfortable walking shoes", "Your hotel name for pick-up"], rules: ["Modest, comfortable clothing is recommended", "Some attractions have their own entry tickets, opening hours and time slots"] },
      { name: "Desert Safari", price: "100 AED", img: "/ChatGPT Image Oct 8, 2026, 10_31_03 PM.png", desc: "4×4 dune bashing, camel rides, sandboarding & traditional Bedouin BBQ dinner", about: "An evening in the Arabian desert with a 4×4 ride over the dunes, followed by a traditional camp dinner under the open sky.", highlights: ["4×4 dune bashing", "Camel ride and sandboarding", "Bedouin camp BBQ dinner with live entertainment"], duration: "About 5–6 hours, afternoon to evening", timing: "Afternoon pick-up, back at your hotel in the evening", requirements: ["Comfortable clothing and closed shoes", "Sun protection and water", "Tell us about back, neck or heart problems in advance"], rules: ["Pregnant travelers are usually advised not to join the dune bashing", "Follow the guide's and crew's safety instructions"] },
      { name: "Cruise Dinner", price: "150 AED", img: "/cruise dinner.png", desc: "Elegant dinner cruise on Dubai Creek or Marina — breathtaking skyline views", about: "Enjoy dinner on the water while the city lights glow around you. A relaxed, elegant evening, ideal for couples, families and special occasions.", highlights: ["Dinner on board", "Skyline views from the water", "Departure from Dubai Creek or Marina"], duration: "About 2 hours", timing: "Evening departure", requirements: ["Smart-casual dress", "Tell us about allergies and dietary needs in advance"], rules: ["The menu is set by the cruise operator", "Arrive at the boarding point on time"] },
      { name: "Dhow Cruise", price: "Included", img: "/cruise dinner.png", desc: "Traditional wooden dhow sunset sail on Dubai Creek — a timeless experience", about: "Sail on a traditional wooden dhow at sunset and see old Dubai from the water. A calm, memorable way to end the day.", highlights: ["Sunset sail on Dubai Creek", "Traditional wooden dhow", "Views of old Dubai from the water"], duration: "About 1–2 hours", timing: "Around sunset", requirements: ["Comfortable clothing"], rules: ["Follow the guide's and crew's safety instructions", "The schedule can change with weather or local conditions"] },
    ],
    packages: [
      { name: "Standard", price: "74,657", nights: nights.n5, hotel: "3–4 ★ Hotel", badge: null, features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group city tour", "Desert safari (shared)"] },
      { name: "Premium", price: "115,000", nights: nights.n7, hotel: "5 ★ Hotel", badge: "Most Popular", features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private city tour", "Desert safari (private 4×4)", "Burj Khalifa At The Top", "Dubai Marina cruise"] },
      { name: "Luxury", price: "Contact Us", nights: nights.n10, hotel: "Burj Al Arab / Atlantis", badge: "Bespoke", features: ["Business class flights", "Visa VIP processing", "Chauffeured Rolls-Royce", "All meals included", "Private guide all days", "Private yacht evening", "Helicopter city tour", "Personal concierge service"] },
    ],
    itineraryIntro: "A flexible guide to your Dubai experience — every day can be tailored to your pace.",
    itinerary: [
      { title: "Arrival & Downtown Dubai", icon: "Plane", activities: ["Airport pick-up in private transfer", "Hotel check-in & welcome briefing", "Evening at Burj Khalifa observation deck (124th floor)", "Dubai Fountain show & The Dubai Mall"] },
      { title: "Desert Safari Adventure", icon: "Compass", activities: ["Morning free / optional morning city tour", "Afternoon: Red dune bashing in 4×4 Land Cruiser", "Camel ride & sandboarding", "Bedouin camp BBQ dinner with live entertainment"] },
      { title: "Heritage & Old Dubai", icon: "Camera", activities: ["Al Fahidi Historical District walking tour", "Dubai Museum visit", "Abra ride across Dubai Creek", "Gold Souk & Spice Souk exploration", "Sunset at Dubai Frame"] },
      { title: "Palm Jumeirah & Marina", icon: "Anchor", activities: ["Palm Jumeirah monorail to Atlantis", "Aquaventure Waterpark (optional, Premium+)", "Dubai Marina Walk & JBR beach", "Evening yacht dinner cruise (Luxury tier)"] },
      { title: "Shopping & Departure", icon: "ShoppingBag", activities: ["Morning: Mall of the Emirates or Dubai Mall", "Ski Dubai (optional)", "Farewell lunch at a rooftop restaurant", "Airport drop-off & departure"] },
    ],
    included: ["Return flights (Addis Ababa ↔ Dubai)", "UAE Tourist Visa processing", "5-star / 4-star hotel (per tier)", "Private airport transfers both ways", "Professional licensed tour guide", "Desert Safari with BBQ dinner", "Entrance fees to all listed sites", "Daily breakfast at hotel"],
    excluded: ["Personal spending & shopping", "Travel insurance (recommended)", "Optional activities not in itinerary", "Lunch & dinner (Standard tier)", "Gratuities / tips for guides"],
    stickyFeatures: ["Return flights included", "Visa processing handled", "Private airport transfers", "5-star hotel (Premium tier)", "Desert safari with BBQ dinner"],
    testimonial: { quote: "Workdan made our Dubai trip absolutely flawless. Every detail was handled perfectly — from the visa to the desert safari.", author: "Selam T., Addis Ababa" },
    faqIntro: "Everything you need to know before booking your Dubai journey.",
    faqs: [
      { q: "What's the best time to visit Dubai?", a: "November to March offers the most comfortable weather (18–30 °C) and is ideal for outdoor activities, desert safaris, and beach days. Summer months are intensely hot but indoor attractions remain world-class and hotel rates drop significantly." },
      { q: "Do I need a visa for Dubai?", a: "Visa requirements vary by nationality. Ethiopian passport holders require a pre-approved UAE visa. Workdan handles your complete visa application — we have a 99 % approval record and manage all documentation, embassy submissions, and tracking." },
      { q: "What is included in the package price?", a: "All packages include return flights, hotel accommodation, airport transfers, visa processing, and listed tour activities. Premium and Luxury tiers add private guides, desert safari with BBQ dinner, and 5-star dining experiences. A detailed inclusions sheet is shared on booking." },
      { q: "Can the itinerary be customised?", a: "Absolutely. Every Workdan package is built around your preferences. Extend your stay, swap activities, add a yacht charter, or arrange a private shopping concierge — simply mention your wish list during consultation and we craft it around your budget." },
      { q: "Are these tours family-friendly?", a: "Yes. We accommodate solo travellers, couples, families with young children, and group corporate trips. Theme park days, kid-friendly beaches, and family suites at partnered hotels can all be arranged on request." },
      { q: "How do I confirm my booking?", a: "Send your enquiry via WhatsApp or the booking form below. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and guide you through the full process — from visa to boarding." },
    ],
    ctaBadge: "Limited Spots Available",
    ctaTitle: ["Ready to Experience", "Dubai?"],
    commentsPlaceholder: "Desert safari, honeymoon package, dietary needs...",
  },

  turkey: {
    id: "turkey",
    shortName: "Turkey Tour",
    waName: "Turkey Tour",
    heroImage: "/turk istanbul.png",
    heroAlt: "Istanbul skyline with Bosphorus",
    location: "Istanbul, Turkey",
    flag: "🇹🇷",
    titleLines: ["Turkey &", "Istanbul Tour"],
    description:
      "Where East meets West — ancient empires, turquoise coastlines, mystical Cappadocia, and the timeless magic of Istanbul's Grand Bazaar.",
    fromPrice: "74,657",
    premiumPrice: "115,000",
    approval: "98",
    trustHotels: "5-Star Hotels",
    activitiesIntro: "Iconic activities included in your package or available as premium add-ons.",
    activities: [
      { name: "Istanbul City Tour", price: "Included", img: "/packages/turkey-tour/turkey-hero.jpeg", desc: "Blue Mosque, Hagia Sophia, Topkapi Palace, Grand Bazaar & Spice Market", about: "Walk through the heart of historic Istanbul with a licensed guide, from grand mosques and palaces to the lively bazaars.", highlights: ["Blue Mosque and Hagia Sophia", "Topkapi Palace", "Grand Bazaar and Spice Market"], duration: "Full day, about 8 hours", timing: "Morning start", requirements: ["Comfortable walking shoes", "Shoulders and knees covered for mosques; women should bring a headscarf"], rules: ["Mosques close to visitors during prayer times, so the order of visits may change", "Photography rules vary by site"] },
      { name: "Cappadocia Balloon", price: "Add-on", img: "/packages/turkey-tour/turkey-hero.jpeg", desc: "Sunrise hot-air balloon flight over otherworldly fairy-chimney valleys", about: "Float over the famous fairy-chimney valleys of Cappadocia at sunrise in a hot-air balloon. Flights run weather permitting.", highlights: ["Sunrise hot-air balloon flight", "Views over fairy-chimney valleys", "Perfect for photos"], duration: "About 3 hours in total, with about 1 hour in the air", timing: "Very early pick-up, before sunrise", requirements: ["Warm clothing for the early morning", "Good health and the ability to climb into the basket"], rules: ["Flights depend on weather and can be cancelled by the operator", "Age and weight limits are set by the balloon operator", "Pregnant travelers and people with serious back or heart problems may not be allowed to fly"] },
      { name: "Bosphorus Cruise", price: "Included", img: "/packages/turkey-tour/turkey-hero.jpeg", desc: "Evening dinner cruise through the strait connecting Europe and Asia", about: "Cruise the strait that separates Europe from Asia and see palaces, mosques and waterfront neighborhoods from the water. The evening dinner cruise adds music and a relaxed atmosphere.", highlights: ["Evening dinner cruise", "Views of two continents", "Palaces and waterfront from the water"], duration: "About 2–3 hours for the dinner cruise", timing: "Evening", requirements: ["Smart-casual dress and a light jacket", "Tell us about allergies and dietary needs in advance"], rules: ["The menu is set by the cruise operator", "Arrive at the pier on time"] },
      { name: "Turkish Bath (Hamam)", price: "Add-on", img: "/packages/turkey-tour/turkey-hero.jpeg", desc: "Traditional Ottoman hammam experience — steam, scrub & relaxation", about: "Relax the Turkish way in a traditional hammam with steam, a scrub and time to unwind.", highlights: ["Traditional Ottoman hammam", "Steam and scrub", "Relaxation after sightseeing"], duration: "About 1–2 hours", timing: "Usually afternoon or evening, after sightseeing", requirements: ["Tell us about skin or health conditions in advance"], rules: ["Some hammams have separate sections or times for women and men", "Avoid a heavy meal just before"] },
    ],
    packages: [
      { name: "Standard", price: "74,657", nights: nights.n5, hotel: "3–4 ★ Hotel", badge: null, features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group Istanbul tour", "Bosphorus boat ride"] },
      { name: "Premium", price: "115,000", nights: nights.n7, hotel: "5 ★ Hotel", badge: "Most Popular", features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private Istanbul tour", "Cappadocia 2 nights", "Balloon flight", "Bosphorus dinner cruise"] },
      { name: "Luxury", price: "Contact Us", nights: nights.n10, hotel: "Ciragan Palace / Four Seasons", badge: "Bespoke", features: ["Business class flights", "VIP visa processing", "Chauffeured transfers", "All meals included", "Private guide all days", "Private yacht Bosphorus", "Ephesus day trip", "Personal concierge"] },
    ],
    itineraryIntro: "A flexible guide to your Turkey experience — every day can be tailored to your pace.",
    itinerary: [
      { title: "Arrival in Istanbul", icon: "Plane", activities: ["Airport pick-up in private transfer", "Hotel check-in & welcome briefing", "Evening stroll along the Bosphorus waterfront", "Welcome dinner at rooftop restaurant"] },
      { title: "Sultanahmet Heritage", icon: "Camera", activities: ["Blue Mosque (Sultan Ahmed Camii) visit", "Hagia Sophia museum tour", "Topkapi Palace & harem", "Grand Bazaar shopping afternoon"] },
      { title: "Bosphorus & European Side", icon: "Anchor", activities: ["Dolmabahçe Palace morning tour", "Bosphorus cruise past the continents", "Ortaköy square & waterside cafés", "Evening dinner cruise with live music"] },
      { title: "Cappadocia Wonder", icon: "Compass", activities: ["Domestic flight to Nevşehir (Premium+)", "Göreme Open-Air Museum visit", "Underground city & cave hotel check-in", "Sunrise hot-air balloon flight over valleys"] },
      { title: "Spice Market & Departure", icon: "ShoppingBag", activities: ["Egyptian Spice Bazaar", "Turkish delight & souvenir shopping", "Farewell lunch at local meyhane", "Airport transfer & departure"] },
    ],
    included: ["Return flights (Addis Ababa ↔ Istanbul)", "Turkey Tourist Visa processing", "4-star / 5-star hotel (per tier)", "Private airport transfers both ways", "Professional licensed tour guide", "Bosphorus cruise", "Entrance fees to all listed sites", "Daily breakfast at hotel"],
    excluded: ["Personal spending & shopping", "Travel insurance (recommended)", "Cappadocia balloon (Standard tier)", "Lunch & dinner (Standard tier)", "Gratuities / tips for guides"],
    stickyFeatures: ["Return flights included", "Visa processing handled", "Private airport transfers", "5-star hotel (Premium tier)", "Bosphorus dinner cruise"],
    testimonial: { quote: "Workdan made our Istanbul trip absolutely magical — the private guide, Bosphorus cruise, and Cappadocia balloon were flawless.", author: "Meron A., Addis Ababa" },
    faqIntro: "Everything you need to know before booking your Turkey journey.",
    faqs: [
      { q: "Do I need a visa for Turkey?", a: "Ethiopian passport holders require a Turkey tourist visa. Workdan handles the full e-Visa or sticker-visa process — documentation, submission and tracking — with a 98% approval record. Most applications are approved within 3–5 business days." },
      { q: "What is the best time to visit Turkey?", a: "April–May and September–October offer the most pleasant temperatures (18–25 °C) and fewer crowds, ideal for Istanbul sightseeing and Cappadocia balloon rides. Summer is hot but perfect for Aegean coastlines. Winter brings magical snow-dusted landscapes and lower prices." },
      { q: "Is Turkey safe for tourists?", a: "Turkey is generally very safe for tourists, with well-developed tourism infrastructure, English-speaking locals in major cities, and heavy security presence around heritage sites. Our guides provide constant support and we offer 24/7 emergency assistance throughout your trip." },
      { q: "What is included in the package price?", a: "All packages include return flights, Turkish visa processing, hotel accommodation, airport transfers, and listed tour activities. Premium and Luxury tiers add private guided tours, Bosphorus dinner cruise, and 5-star hotel stays. Full inclusions are confirmed at booking." },
      { q: "Can I see both Istanbul and Cappadocia?", a: "Yes — our Premium and Luxury packages include a domestic flight or overnight bus to Cappadocia so you can experience the iconic hot-air balloon sunrise over the fairy chimneys. Istanbul stays are typically 3–4 nights and Cappadocia 2 nights." },
      { q: "How do I book?", a: "Send your enquiry via WhatsApp or the booking form. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and guide you from visa to boarding — everything handled under one roof." },
    ],
    ctaBadge: "Limited Spots Available",
    ctaTitle: ["Ready to Experience", "Turkey?"],
    commentsPlaceholder: "Cappadocia balloon, honeymoon package, dietary needs...",
  },

  china: {
    id: "china",
    shortName: "China Tour",
    waName: "China Guangzhou Tour",
    heroImage: "/chine landing.png",
    heroAlt: "Guangzhou skyline at night",
    location: "Guangzhou, China",
    flag: "🇨🇳",
    titleLines: ["China", "Guangzhou Tour"],
    description:
      "World-class trade fairs, futuristic skylines, ancient heritage, and limitless wholesale shopping — the ultimate business and leisure destination.",
    fromPrice: "89,000",
    premiumPrice: "145,000",
    approval: "99",
    trustHotels: "5-Star Hotels",
    activitiesIntro: "Trade, culture & cuisine — every day in Guangzhou delivers something extraordinary.",
    activities: [
      { name: "Guangzhou City Tour", price: "Included", img: "/packages/china-tour/package-china.jpeg", desc: "Canton Tower, Chen Clan Academy, Shamian Island & Zhujiang New Town", about: "Discover Guangzhou's modern skyline and its historic corners in one guided day.", highlights: ["Canton Tower", "Chen Clan Academy", "Shamian Island and Zhujiang New Town"], duration: "Full day, about 8 hours", timing: "Morning start", requirements: ["Comfortable walking shoes", "Cash or a payment app for small purchases"], rules: ["Some attractions have their own entry tickets, opening hours and time slots", "Large bags may not be allowed at some sites"] },
      { name: "Canton Fair Visit", price: "Included", img: "/packages/china-tour/package-china.jpeg", desc: "Professional guided tour of the world's biggest trade fair — all phases covered", about: "A professional guide helps you move around one of the world's biggest trade fairs and focus on the suppliers that matter to your business.", highlights: ["Guided Fair visit, all phases covered", "Registration and escort support", "Help with supplier meetings and catalogues"], duration: "Full days; the number of days depends on the phases you attend", timing: "During the Fair's daytime opening hours", requirements: ["Valid passport", "Canton Fair registration and badge (we help you register)", "Business cards and a list of the products you want to source"], rules: ["The Fair runs in phases with different product categories and dates, which we confirm for your trip", "Badges are personal and cannot be shared"] },
      { name: "Shopping Tour", price: "Included", img: "/china-front.png", desc: "Wholesale markets, electronics hubs, fabric districts & Baiyun Leather City", about: "Shop smart in Guangzhou's wholesale districts with a guide who knows the markets and helps with translation and bargaining.", highlights: ["Wholesale markets and electronics hubs", "Fabric districts and Baiyun Leather City", "Translation and bargaining support"], duration: "About 6–8 hours", timing: "Daytime, when wholesale markets are open", requirements: ["A list of products and your budget", "Cash or a payment app; many sellers prefer mobile payment"], rules: ["Ask sales about shipping and freight before you buy", "Minimum order quantities and prices are set by each seller"] },
      { name: "Pearl River Cruise", price: "Add-on", img: "/china-front.png", desc: "Evening illuminated cruise along the Pearl River past Guangzhou's glittering skyline", about: "See Guangzhou's skyline glitter from the water on an evening cruise along the Pearl River.", highlights: ["Evening illuminated cruise", "Skyline views", "A relaxed end to the day"], duration: "About 1–2 hours", timing: "Evening", requirements: ["A light jacket"], rules: ["Boarding closes at the departure time", "The schedule can change with weather or local conditions"] },
    ],
    packages: [
      { name: "Standard", price: "89,000", nights: nights.n5, hotel: "3–4 ★ Hotel", badge: null, features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Canton Fair registration", "Group city tour"] },
      { name: "Premium", price: "145,000", nights: nights.n7, hotel: "5 ★ Hotel", badge: "Most Popular", features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private Canton Fair escort", "Shopping guide & translation", "Pearl River dinner cruise", "Wholesale market tour"] },
      { name: "Luxury", price: "Contact Us", nights: nights.n10, hotel: "Ritz-Carlton / W Guangzhou", badge: "Bespoke", features: ["Business class flights", "VIP visa processing", "Chauffeured transfers", "All meals included", "Private business consultant", "Factory inspection tours", "Freight forwarding referral", "Personal concierge"] },
    ],
    itineraryIntro: "A flexible guide to your China experience — every day can be tailored to your business or leisure needs.",
    itinerary: [
      { title: "Arrival in Guangzhou", icon: "Plane", activities: ["Airport pick-up in private transfer", "Hotel check-in & city orientation", "Cantonese welcome dinner in Tianhe District", "Evening stroll along Zhujiang New Town"] },
      { title: "Canton Fair — Phase 1", icon: "Building2", activities: ["Registration & badge collection at Fair entrance", "Electronics, machinery & hardware halls", "Supplier networking & catalogue collection", "Evening hosted dinner with trade contacts"] },
      { title: "Canton Fair — Phase 2 & City", icon: "Camera", activities: ["Textiles, home décor & gifts halls", "Afternoon: Chen Clan Academy & Old Canton", "Shamian Island colonial architecture walk", "Pearl River evening cruise (Premium+)"] },
      { title: "Wholesale Market Day", icon: "ShoppingBag", activities: ["Baiyun Leather City for bags & accessories", "Guangzhou International Toy & Gift Fair area", "Electronics wholesale in Huaqiangbei district", "Expert translation & bargaining support"] },
      { title: "Canton Tower & Departure", icon: "Compass", activities: ["Canton Tower observation deck views", "Last-minute shopping at Zhujiang New Town", "Farewell dim sum lunch", "Airport transfer & departure"] },
    ],
    included: ["Return flights (Addis Ababa ↔ Guangzhou)", "Chinese Tourist / Business Visa", "4-star / 5-star hotel (per tier)", "Private airport transfers both ways", "Canton Fair registration & escort", "Professional guide & translator", "Entrance fees to all listed sites", "Daily breakfast at hotel"],
    excluded: ["Personal shopping & purchases", "Travel insurance (recommended)", "Lunch & dinner (Standard tier)", "Freight / shipping costs", "Gratuities / tips for guides"],
    stickyFeatures: ["Return flights included", "Visa processing handled", "Canton Fair registration", "Private guide & translator", "5-star hotel (Premium tier)"],
    testimonial: { quote: "Workdan's Canton Fair package was seamless — visa, hotel, translation, all sorted. I sourced everything I needed in 4 days.", author: "Dawit K., Addis Ababa" },
    faqIntro: "Everything you need to know before booking your China journey.",
    faqs: [
      { q: "Do I need a visa to visit China?", a: "Ethiopian passport holders require a Chinese tourist visa. Workdan handles the full application — documentation, consular submission, and tracking. We also assist with business visas for Canton Fair attendees. Processing typically takes 5–7 working days." },
      { q: "What is the Canton Fair and when does it run?", a: "The Canton Fair (China Import and Export Fair) is one of the world's largest trade fairs, held twice a year in Guangzhou — Phase 1 in mid-April and Phase 2 in late October/November. It covers electronics, textiles, home goods, machinery, and more. Workdan arranges registration, hotel, and guided Fair visits." },
      { q: "Is it safe to travel in China?", a: "China is one of the safest countries for tourists with very low petty crime, excellent public transport, and efficient emergency services. Our local guides are fluent in Mandarin and experienced with Ethiopian travellers, ensuring smooth navigation through cities and markets." },
      { q: "What is included in the package price?", a: "All packages include return flights, Chinese visa processing, hotel accommodation, airport transfers, and listed tour activities. Premium tier adds private guided shopping tours, Canton Fair escort, and translation services. Full inclusions confirmed at booking." },
      { q: "How do I pay for shopping in China?", a: "WeChat Pay and Alipay are dominant, but major malls accept credit cards. Our guides help you set up WeChat Pay for a seamless shopping experience. We also recommend carrying some RMB cash for street markets and smaller vendors." },
      { q: "Can you help with bulk buying or business purchases?", a: "Yes — Workdan specialises in business travel to Guangzhou. We provide factory liaison, translation, quality inspection guidance, and freight forwarding referrals. Tell us your product category and we will assign a dedicated business travel consultant." },
    ],
    ctaBadge: "Canton Fair Spots Filling Fast",
    ctaTitle: ["Ready to Explore", "Guangzhou?"],
    commentsPlaceholder: "Canton Fair dates, product categories, business visa...",
  },

  delhi: {
    id: "delhi",
    shortName: "Delhi Tour",
    waName: "Delhi & Royal India Tour",
    heroImage: "/delhi.png",
    heroAlt: "Taj Mahal and Delhi heritage",
    location: "Delhi & Agra, India",
    flag: "🇮🇳",
    titleLines: ["Delhi &", "Royal India Tour"],
    description:
      "Imperial Mughal grandeur, the world's most beautiful monument, vibrant bazaars, and the spice-laden soul of Old Delhi — India in all its glory.",
    fromPrice: "65,000",
    premiumPrice: "99,000",
    approval: "99",
    trustHotels: "5-Star Hotels",
    activitiesIntro: "Ancient wonders, royal palaces, spice markets, and the iconic Taj Mahal — all in one journey.",
    activities: [
      { name: "Taj Mahal Day Trip", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Express train to Agra — Taj Mahal, Agra Fort & Mehtab Bagh sunset viewpoint", about: "Take the express train to Agra and visit one of the world's most famous monuments, then see the great fort and enjoy the sunset viewpoint.", highlights: ["Taj Mahal visit", "Agra Fort", "Mehtab Bagh sunset viewpoint"], duration: "Full day, about 12 hours, with about 2.5–3 hours of train travel each way", timing: "Early start from Delhi, back in the evening", requirements: ["Passport or a copy for ticket and security checks", "Comfortable walking shoes", "Sun protection and water"], rules: ["The Taj Mahal is closed to visitors on Fridays", "Security checks are strict: large bags, food, tripods and some electronics are not allowed inside"] },
      { name: "Old Delhi Heritage Walk", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Red Fort, Jama Masjid, Chandni Chowk spice market & Humayun's Tomb", about: "Explore the lanes of Old Delhi on foot, from imperial monuments to the spice market.", highlights: ["Red Fort and Jama Masjid", "Chandni Chowk spice market", "Humayun's Tomb"], duration: "About 4–5 hours", timing: "Morning is best, before the heat and crowds", requirements: ["Comfortable walking shoes", "Shoulders and knees covered for mosques; women should bring a headscarf"], rules: ["Mosques may close to visitors during prayer times", "Keep your valuables safe in crowded lanes"] },
      { name: "Shopping at Markets", price: "Included", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Connaught Place, Dilli Haat, Lajpat Nagar & Janpath for textiles & crafts", about: "Pick up textiles, crafts and souvenirs in Delhi's best-known markets.", highlights: ["Connaught Place and Janpath", "Dilli Haat crafts", "Lajpat Nagar for fabrics"], duration: "About 3–4 hours", timing: "Afternoon to evening", requirements: ["Cash in rupees for small shops"], rules: ["Bargaining is normal in most markets", "Some markets close one day a week; we check before your visit"] },
      { name: "Rajasthan Day Tour", price: "Add-on", img: "/packages/delhi-tour/delhi-herosection.jpeg", desc: "Jaipur Pink City — Amber Fort, City Palace & Hawa Mahal in one day", about: "Visit Jaipur, the Pink City, in one long day and see its famous palaces and forts.", highlights: ["Amber Fort", "City Palace", "Hawa Mahal"], duration: "Full day of 12 hours or more, including a long road journey each way", timing: "Very early start from Delhi", requirements: ["Valid passport", "Comfortable walking shoes", "Sun protection and water"], rules: ["Travel time depends on traffic", "Some attractions have their own entry tickets, opening hours and time slots"] },
    ],
    packages: [
      { name: "Standard", price: "65,000", nights: nights.n5, hotel: "3–4 ★ Hotel", badge: null, features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group Delhi city tour", "Red Fort & Humayun Tomb"] },
      { name: "Premium", price: "99,000", nights: nights.n7, hotel: "5 ★ Hotel", badge: "Most Popular", features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private Delhi tour", "Taj Mahal Agra day trip", "Old Delhi food walk", "Rajasthan optional add-on"] },
      { name: "Luxury", price: "Contact Us", nights: nights.n10, hotel: "Oberoi / Leela Palace", badge: "Bespoke", features: ["Business class flights", "VIP visa processing", "Chauffeured transfers", "All meals included", "Private historian guide", "Golden Triangle tour", "Luxury train experience", "Personal concierge"] },
    ],
    itineraryIntro: "A flexible guide to your India experience — every day can be tailored to your pace.",
    itinerary: [
      { title: "Arrival in Delhi", icon: "Plane", activities: ["Airport pick-up in private transfer", "Hotel check-in & welcome briefing", "Evening walk in Lodhi Garden", "Welcome dinner at a rooftop restaurant"] },
      { title: "Old Delhi Heritage", icon: "Camera", activities: ["Red Fort morning tour", "Jama Masjid & Chandni Chowk spice market", "Rickshaw ride through Old Delhi lanes", "Humayun's Tomb & Lodhi Colony murals"] },
      { title: "New Delhi Monuments", icon: "Building2", activities: ["India Gate & Rajpath ceremonial boulevard", "Qutub Minar UNESCO World Heritage site", "Lotus Temple & Akshardham Temple", "Connaught Place evening shopping"] },
      { title: "Taj Mahal Agra Day Trip", icon: "Compass", activities: ["Express train to Agra (2.5 hrs)", "Taj Mahal sunrise or afternoon visit", "Agra Fort & Itmad-ud-Daulah (Baby Taj)", "Return to Delhi — evening free"] },
      { title: "Shopping & Departure", icon: "ShoppingBag", activities: ["Dilli Haat handicrafts & textiles", "Lajpat Nagar market for fabrics & spices", "Farewell North Indian thali lunch", "Airport transfer & departure"] },
    ],
    included: ["Return flights (Addis Ababa ↔ Delhi)", "Indian Tourist Visa processing", "4-star / 5-star hotel (per tier)", "Private airport transfers both ways", "Professional licensed tour guide", "Taj Mahal day trip (Premium+)", "Entrance fees to all listed sites", "Daily breakfast at hotel"],
    excluded: ["Personal spending & shopping", "Travel insurance (recommended)", "Rajasthan day tour (Standard tier)", "Lunch & dinner (Standard tier)", "Gratuities / tips for guides"],
    stickyFeatures: ["Return flights included", "Visa processing handled", "Private airport transfers", "5-star hotel (Premium tier)", "Taj Mahal day trip (Premium+)"],
    testimonial: { quote: "Seeing the Taj Mahal at sunrise was life-changing. Workdan arranged everything perfectly — visa, hotel, guide, Agra train.", author: "Tigist M., Addis Ababa" },
    faqIntro: "Everything you need to know before booking your India journey.",
    faqs: [
      { q: "What are the visa requirements for India?", a: "Ethiopian passport holders require an Indian tourist visa. Workdan handles the complete e-Visa application (available for 171+ countries) — documentation, submission, and tracking. Tourist e-Visas are typically approved within 3–5 working days." },
      { q: "What is the best time to visit Delhi?", a: "October to March is ideal — temperatures are pleasant (8–25 °C) and perfect for monument sightseeing. Summer (April–June) reaches 45 °C and is best avoided outdoors. Monsoon (July–September) brings lush greenery with occasional heavy rain but fewer crowds." },
      { q: "Is Delhi safe for tourists?", a: "Delhi is generally safe for tourists when sensible precautions are taken. Our tours include experienced local guides, 24/7 emergency support, and pre-vetted vehicles. We brief all travellers on local customs, dress codes for religious sites, and neighbourhood safety." },
      { q: "Can I visit the Taj Mahal on this trip?", a: "Yes — our Premium and Luxury packages include a full-day Agra trip (3 hrs by express train from Delhi) to visit the Taj Mahal, Agra Fort, and Mehtab Bagh at sunset. The Standard tier can add this as an optional day trip." },
      { q: "What is included in the package price?", a: "All packages include return flights, Indian visa processing, hotel accommodation, airport transfers, and listed tour activities. Premium adds private guided tours, Taj Mahal day trip, and cultural dinner evenings. Full inclusions confirmed at booking." },
      { q: "How do I book?", a: "Send your enquiry via WhatsApp or the booking form. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and guide you from visa to boarding — all handled under one roof." },
    ],
    ctaBadge: "Limited Spots Available",
    ctaTitle: ["Ready to Discover", "Royal India?"],
    commentsPlaceholder: "Taj Mahal visit, Rajasthan extension, honeymoon package...",
  },

  thailand: {
    id: "thailand",
    shortName: "Thailand Tour",
    waName: "Thailand Tour",
    heroImage: "/ChatGPT Image Oct 8, 2026, 11_07_01 PM.png",
    heroAlt: "Thailand temples and beaches",
    location: "Bangkok & Phuket, Thailand",
    flag: "🇹🇭",
    titleLines: ["Thailand", "Paradise Tour"],
    description:
      "Ancient golden temples, vibrant street markets, turquoise Andaman beaches, and the world's most exciting food scene — the Land of Smiles awaits.",
    fromPrice: "69,000",
    premiumPrice: "109,000",
    approval: "99",
    trustHotels: "5-Star Resorts",
    activitiesIntro: "Golden temples, bustling night markets, pristine beaches, and flavours that will change how you think about food.",
    activities: [
      { name: "Bangkok City Tour", price: "Included", img: "/packages/thailand-tour/thailand.jpeg", desc: "Grand Palace, Wat Phra Kaew, Wat Arun & Khao San Road — the best of Bangkok in a day", about: "See Bangkok's royal and spiritual highlights in a single day, from the Grand Palace to the lively backpacker street.", highlights: ["Grand Palace and Wat Phra Kaew", "Wat Arun", "Khao San Road"], duration: "Full day, about 8 hours", timing: "Morning start", requirements: ["Shoulders and knees covered for the Grand Palace and temples", "Comfortable walking shoes"], rules: ["The Grand Palace has a strict dress code: no sleeveless tops, shorts or see-through clothing", "Remove your shoes before entering temple buildings"] },
      { name: "Temple Circuit", price: "Included", img: "/packages/thailand-tour/TRAVEL.png", desc: "Wat Pho reclining Buddha, Wat Saket golden mountain & canal boat to riverside temples", about: "Visit Bangkok's most famous temples, including a giant reclining Buddha and a golden hilltop temple, and ride a canal boat to riverside temples.", highlights: ["Wat Pho reclining Buddha", "Wat Saket golden mountain", "Canal boat to riverside temples"], duration: "About 4–6 hours", timing: "Morning or late afternoon", requirements: ["Shoulders and knees covered for temples", "Comfortable walking shoes"], rules: ["Show respect to Buddha images: do not touch them or point your feet at them", "Remove your shoes before entering temple buildings"] },
      { name: "Beach Resort Day", price: "Included", img: "/packages/thailand-tour/thailand.jpeg", desc: "Phuket or Pattaya beach escape — snorkelling, island hopping & sunset on the Andaman Sea", about: "Escape the city for a day of sea and sun at a Phuket or Pattaya beach, with snorkeling and island hopping.", highlights: ["Phuket or Pattaya beach", "Snorkeling and island hopping", "Sunset by the sea"], duration: "Full day", timing: "Depends on your flight and the resort", requirements: ["Swimwear, sunscreen and a towel", "Passport for the domestic flight"], rules: ["Sea conditions can change boat and snorkeling plans", "Follow the lifeguard flags and the guide's safety instructions"] },
      { name: "Thai Cooking Class", price: "Add-on", img: "/packages/thailand-tour/TRAVEL.png", desc: "Market tour & hands-on cooking lesson — pad thai, green curry & mango sticky rice", about: "Learn to cook Thai classics with a market visit and a hands-on lesson.", highlights: ["Market tour", "Hands-on cooking lesson", "Pad thai, green curry and mango sticky rice"], duration: "About 3–4 hours, including the market visit", timing: "Morning or afternoon session", requirements: ["Tell us about allergies and dietary needs in advance"], rules: ["The menu depends on the cooking school and the season", "Closed shoes are recommended in the kitchen"] },
    ],
    packages: [
      { name: "Standard", price: "69,000", nights: nights.n5, hotel: "3–4 ★ Hotel", badge: null, features: ["Return flights", "Visa processing", "Shared transfers", "Breakfast daily", "Group Bangkok city tour", "Grand Palace & Wat Pho"] },
      { name: "Premium", price: "109,000", nights: nights.n7, hotel: "5 ★ Resort", badge: "Most Popular", features: ["Return flights", "Visa processing", "Private transfers", "Breakfast & dinner", "Private Bangkok tour", "Beach resort (2 nights)", "Thai cooking class", "Sunset dinner cruise"] },
      { name: "Luxury", price: "Contact Us", nights: nights.n10, hotel: "Mandarin Oriental", badge: "Bespoke", features: ["Business class flights", "VIP visa processing", "Chauffeured transfers", "All meals & minibar", "Private historian guide", "Private island day charter", "Muay Thai VIP evening", "Personal concierge"] },
    ],
    itineraryIntro: "A flexible guide to your Thailand experience — every day can be tailored to your interests.",
    itinerary: [
      { title: "Arrival in Bangkok", icon: "Plane", activities: ["Suvarnabhumi Airport private pick-up", "Hotel check-in & welcome briefing", "Evening Chao Phraya river walk", "Rooftop bar dinner with city views"] },
      { title: "Grand Palace & Temples", icon: "Camera", activities: ["Grand Palace & Emerald Buddha temple", "Wat Pho reclining Buddha & massage", "Tuk-tuk ride through old Bangkok", "Flower market at Pak Khlong Talat"] },
      { title: "Bangkok Culture & Markets", icon: "ShoppingBag", activities: ["Wat Arun at sunrise by longtail boat", "Chatuchak Weekend Market (8,000 stalls)", "Jim Thompson House & silk district", "Night food tour at Yaowarat Chinatown"] },
      { title: "Beach Resort Day", icon: "Anchor", activities: ["Domestic flight to Phuket or Pattaya", "Beach resort check-in & snorkelling", "Island hopping or speedboat tour", "Seafood dinner on the beach"] },
      { title: "Leisure & Departure", icon: "Compass", activities: ["Thai cooking class at a local school", "Spa & traditional Thai massage session", "Last shopping at Central World mall", "Airport transfer & departure"] },
    ],
    included: ["Return flights (Addis Ababa ↔ Bangkok)", "Thai Tourist Visa processing", "4-star / 5-star hotel (per tier)", "Private airport transfers both ways", "Licensed local tour guide", "Beach resort stay (Premium+)", "Entrance fees to all listed sites", "Daily breakfast at hotel"],
    excluded: ["Personal spending & shopping", "Travel insurance (recommended)", "Thai cooking class (Standard tier)", "Lunch & dinner (Standard tier)", "Gratuities / tips for guides"],
    stickyFeatures: ["Return flights included", "Visa processing handled", "Private airport transfers", "5-star resort (Premium tier)", "Beach extension (Premium+)"],
    testimonial: { quote: "The Grand Palace, the night markets, the beach — Thailand exceeded every expectation. Workdan's team handled every detail perfectly.", author: "Biruk A., Addis Ababa" },
    faqIntro: "Everything you need to know before booking your Thailand adventure.",
    faqs: [
      { q: "What are the visa requirements for Thailand?", a: "Ethiopian passport holders can obtain a Thailand Tourist Visa on arrival (30 days) or apply in advance for a 60-day single-entry visa. Workdan handles the full visa application — documents, submission, and tracking — so you arrive stress-free." },
      { q: "What is the best time to visit Thailand?", a: "November to February is peak season — cool, dry weather perfect for beach and sightseeing. March to May is hot and sunny (great for islands). June to October is rainy season with lush scenery and fewer crowds. Bangkok city tours are excellent year-round." },
      { q: "Is Thailand safe for first-time travellers?", a: "Thailand is one of Asia's most tourist-friendly destinations. Our packages include licensed local guides, vetted transport, hotel security briefings, and 24/7 Workdan support. We cover temple dress codes, traffic safety in Bangkok, and island swimming flags." },
      { q: "Can I combine Bangkok and a beach destination?", a: "Absolutely — our Premium and Luxury packages include a Phuket or Koh Samui beach extension (2–3 nights) after Bangkok. The Standard tier can add a domestic flight + beach resort as an optional add-on. Koh Phi Phi day trips are also available." },
      { q: "What is included in the package price?", a: "All packages include return international flights, visa processing, hotel accommodation, airport transfers, and listed tour activities with guides. Premium adds private tours, beach resort extension, Thai cooking class, and sunset dinner cruise. Full details confirmed at booking." },
      { q: "How do I book?", a: "Send your enquiry via WhatsApp or the booking form on this page. Our consultants respond within 2 hours, confirm availability, issue a proforma invoice, and manage your entire journey from visa to boarding pass." },
    ],
    ctaBadge: "Limited Spots Available",
    ctaTitle: ["Ready for the", "Land of Smiles?"],
    commentsPlaceholder: "Beach extension, cooking class, honeymoon package...",
  },
}
