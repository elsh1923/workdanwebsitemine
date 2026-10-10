// Hotels page and hotel cards.
export const hotelsEn = {
  "hotels.badge": "Workdan Exclusive Stays",
  "hotels.title": "Luxury Accommodations",
  "hotels.desc":
    "Browse our handpicked selection of the world's most prestigious hotels across our prime destinations. Experience unmatched luxury and let our VIP concierges handle your reservations.",
  "hotels.inquire": "Inquire with Sales",

  "hotels.loc.dubai": "Dubai, UAE",
  "hotels.loc.istanbul": "Istanbul, Turkey",
  "hotels.loc.guangzhou": "Guangzhou, China",

  "hotels.burj.name": "Burj Al Arab Jumeirah",
  "hotels.burj.desc":
    "The global icon of Arabian luxury. Experience unparalleled opulence with private butler service, underwater dining, and exclusive access to the Burj Al Arab Terrace.",
  "hotels.burj.a1": "Private Beach", "hotels.burj.a2": "Butler Service", "hotels.burj.a3": "Talise Spa", "hotels.burj.a4": "Infinity Pool",

  "hotels.ciragan.name": "Çırağan Palace Kempinski",
  "hotels.ciragan.desc":
    "Experience the grandeur of the Ottoman Empire at this stunning palace on the Bosphorus. A seamless blend of historical luxury and modern sophistication.",
  "hotels.ciragan.a1": "Bosphorus View", "hotels.ciragan.a2": "Heated Pool", "hotels.ciragan.a3": "Palace Spa", "hotels.ciragan.a4": "Helipad",

  "hotels.fourseasons.name": "Four Seasons Hotel",
  "hotels.fourseasons.desc":
    "Soaring above the Pearl River, this architectural masterpiece occupies the top floors of the IFC. Breathtaking cityscapes, Michelin-starred dining, and cloud-level spa serenity.",
  "hotels.fourseasons.a1": "Sky Lobby", "hotels.fourseasons.a2": "Michelin Dining", "hotels.fourseasons.a3": "Cloud Spa", "hotels.fourseasons.a4": "Executive Club",

  "hotels.atlantis.name": "Atlantis The Royal",
  "hotels.atlantis.desc":
    "A new standard of luxury in Dubai. Featuring daring architecture, celebrity chef restaurants, and the most spectacular pool landscapes in the world.",
  "hotels.atlantis.a1": "Cloud 22 Pool", "hotels.atlantis.a2": "Nobu by the Beach", "hotels.atlantis.a3": "AWAY Spa", "hotels.atlantis.a4": "Skyblaze Fountain",

  "hotels.peninsula.name": "The Peninsula",
  "hotels.peninsula.desc":
    "Set along the dazzling Bosphorus waterfront in the historic Karaköy district, this is a showcase of Turkish artistry and world-class Peninsula luxury.",
  "hotels.peninsula.a1": "Private Boat Dock", "hotels.peninsula.a2": "Rooftop Restaurant", "hotels.peninsula.a3": "Indoor Pool", "hotels.peninsula.a4": "Luxury Boutiques",

  "hotels.rosewood.name": "Rosewood",
  "hotels.rosewood.desc":
    "At 108 stories high, it's the tallest 5-star hotel in the world. Experience ultra-luxury lifestyle with panoramic views, sky bars, and unparalleled service.",
  "hotels.rosewood.a1": "Sky Bar", "hotels.rosewood.a2": "Sense Spa", "hotels.rosewood.a3": "Indoor Pool", "hotels.rosewood.a4": "Butler Service",

  // Search bar
  "hotels.selectDate": "Select date",
  "hotels.search.destination": "Destination", "hotels.search.checkIn": "Check-in", "hotels.search.checkOut": "Check-out",
  "hotels.search.guests": "Rooms & Guests", "hotels.search.button": "Search Hotels",
  "hotels.allDestinations": "All destinations",
  "hotels.room": "{n} Room", "hotels.rooms": "{n} Rooms", "hotels.guest": "{n} Guest", "hotels.guests": "{n} Guests",
  "hotels.roomsLabel": "Rooms", "hotels.guestsLabel": "Guests", "hotels.done": "Done",

  // Filters and sorting
  "hotels.filters": "Filters", "hotels.reset": "Reset all",
  "hotels.f.destination": "Destination", "hotels.f.price": "Price per night", "hotels.f.amenities": "Amenities",
  "hotels.p.under": "Under {a}", "hotels.p.range": "{a} – {b}", "hotels.p.over": "Over {a}",
  "hotels.am.pool": "Swimming pool", "hotels.am.spa": "Spa", "hotels.am.beach": "Beach access",
  "hotels.am.dining": "Fine dining", "hotels.am.butler": "Butler service", "hotels.am.view": "Scenic views",
  "hotels.count": "{n} properties found", "hotels.count1": "1 property found",
  "hotels.sort": "Sort by", "hotels.sort.recommended": "Recommended", "hotels.sort.low": "Price: Low to High", "hotels.sort.high": "Price: High to Low",
  "hotels.currency": "Currency",
  "hotels.sampleNote": "Rates shown are indicative samples per room, per night. Our sales team confirms live availability and the final price before you pay anything.",
  "hotels.noResults": "No hotels match your filters", "hotels.noResultsDesc": "Try changing or clearing a filter.",
  "hotels.showResults": "Show {n} hotels",

  // Hotel card
  "hotels.pick": "Workdan Pick", "hotels.class": "{n}-star hotel", "hotels.vip": "VIP concierge handles your booking",
  "hotels.from": "From", "hotels.perNight": "per night", "hotels.taxes": "+ taxes & fees",
  "hotels.estTotal": "Est. total for {nights}: {amount}",
  "hotels.night": "{n} night", "hotels.nights": "{n} nights",
  "hotels.book": "Book Now",
} as const

export const hotelsAm: Record<keyof typeof hotelsEn, string> = {
  "hotels.badge": "የወርቅ ዳን ልዩ ማረፊያዎች",
  "hotels.title": "የቅንጦት ማረፊያዎች",
  "hotels.desc":
    "የዓለም እጅግ የተከበሩ ሆቴሎችን በዋና መዳረሻዎቻችን ላይ በጥንቃቄ ከተመረጠው ዝርዝራችን ይመልከቱ። ወደር የለሽ ቅንጦት ይለማመዱ፤ የቦታ ማስያዝ ሥራዎን የVIP አገልግሎት ሰጪዎቻችን ይከታተሉ።",
  "hotels.inquire": "ከሽያጭ ክፍል ጋር ይጠይቁ",

  "hotels.loc.dubai": "ዱባይ፣ ዩኤኢ",
  "hotels.loc.istanbul": "ኢስታንቡል፣ ቱርክ",
  "hotels.loc.guangzhou": "ጓንግዙ፣ ቻይና",

  "hotels.burj.name": "ቡርጅ አል አረብ ጁሜይራ",
  "hotels.burj.desc":
    "የአረብ ቅንጦት ዓለም አቀፍ ምልክት። በግል አገልጋይ፣ በውሃ ውስጥ ምግብና ወደ ቡርጅ አል አረብ ቴራስ ልዩ መግቢያ አማካኝነት ወደር የለሽ ድሎት ይለማመዱ።",
  "hotels.burj.a1": "የግል የባሕር ዳርቻ", "hotels.burj.a2": "የግል አገልጋይ አገልግሎት", "hotels.burj.a3": "ታሊሴ ስፓ", "hotels.burj.a4": "ኢንፊኒቲ መዋኛ",

  "hotels.ciragan.name": "ቺራን ቤተ መንግሥት ኬምፒንስኪ",
  "hotels.ciragan.desc":
    "በቦስፎረስ ዳር በሚገኘው በዚህ አስደናቂ ቤተ መንግሥት የኦቶማን ግዛትን ግርማ ይለማመዱ። የታሪካዊ ቅንጦትና የዘመናዊ ውበት እንከን የለሽ ድብልቅ።",
  "hotels.ciragan.a1": "የቦስፎረስ እይታ", "hotels.ciragan.a2": "የሞቀ መዋኛ", "hotels.ciragan.a3": "የቤተ መንግሥት ስፓ", "hotels.ciragan.a4": "የሄሊኮፕተር ማረፊያ",

  "hotels.fourseasons.name": "ፎር ሲዝንስ ሆቴል",
  "hotels.fourseasons.desc":
    "ከፐርል ወንዝ በላይ ከፍ ብሎ የሚገኘው ይህ የሥነ ሕንፃ ድንቅ ሥራ የIFC ላይኛ ፎቆችን ይዟል። አስደናቂ የከተማ እይታ፣ ሚሼሊን ኮከብ ያላቸው ምግብ ቤቶችና በደመና ከፍታ ላይ የስፓ ሰላም።",
  "hotels.fourseasons.a1": "ስካይ ሎቢ", "hotels.fourseasons.a2": "ሚሼሊን ምግብ ቤት", "hotels.fourseasons.a3": "ክላውድ ስፓ", "hotels.fourseasons.a4": "ኤግዚኪዩቲቭ ክለብ",

  "hotels.atlantis.name": "አትላንቲስ ዘ ሮያል",
  "hotels.atlantis.desc":
    "በዱባይ አዲስ የቅንጦት ደረጃ። ደፋር ሥነ ሕንፃ፣ በታዋቂ ሼፎች የሚመሩ ምግብ ቤቶችና በዓለም እጅግ አስደናቂ የመዋኛ ገጽታዎች።",
  "hotels.atlantis.a1": "ክላውድ 22 መዋኛ", "hotels.atlantis.a2": "ኖቡ በባሕር ዳርቻ", "hotels.atlantis.a3": "አዌይ ስፓ", "hotels.atlantis.a4": "ስካይብሌዝ ምንጭ",

  "hotels.peninsula.name": "ዘ ፔኒንሱላ",
  "hotels.peninsula.desc":
    "በታሪካዊው ካራኮይ ወረዳ በሚያንጸባርቀው የቦስፎረስ የባሕር ዳር የሚገኘው ይህ ሆቴል የቱርክ ጥበብና የዓለም ደረጃ ያለው የፔኒንሱላ ቅንጦት ማሳያ ነው።",
  "hotels.peninsula.a1": "የግል ጀልባ መቆሚያ", "hotels.peninsula.a2": "የጣሪያ ላይ ምግብ ቤት", "hotels.peninsula.a3": "የቤት ውስጥ መዋኛ", "hotels.peninsula.a4": "የቅንጦት ሱቆች",

  "hotels.rosewood.name": "ሮዝዉድ",
  "hotels.rosewood.desc":
    "108 ፎቅ ከፍታ ያለው ይህ ሆቴል በዓለም ረጅሙ የ5-ኮከብ ሆቴል ነው። በሰፊ እይታ፣ በሰማይ ባሮችና በወደር የለሽ አገልግሎት እጅግ የቅንጦት ኑሮ ይለማመዱ።",
  "hotels.rosewood.a1": "ስካይ ባር", "hotels.rosewood.a2": "ሴንስ ስፓ", "hotels.rosewood.a3": "የቤት ውስጥ መዋኛ", "hotels.rosewood.a4": "የግል አገልጋይ አገልግሎት",

  "hotels.selectDate": "ቀን ይምረጡ",
  "hotels.search.destination": "መዳረሻ", "hotels.search.checkIn": "መግቢያ", "hotels.search.checkOut": "መውጫ",
  "hotels.search.guests": "ክፍሎችና እንግዶች", "hotels.search.button": "ሆቴሎችን ፈልግ",
  "hotels.allDestinations": "ሁሉም መዳረሻዎች",
  "hotels.room": "{n} ክፍል", "hotels.rooms": "{n} ክፍሎች", "hotels.guest": "{n} እንግዳ", "hotels.guests": "{n} እንግዶች",
  "hotels.roomsLabel": "ክፍሎች", "hotels.guestsLabel": "እንግዶች", "hotels.done": "ጨርስ",

  "hotels.filters": "ማጣሪያዎች", "hotels.reset": "ሁሉንም አጽዳ",
  "hotels.f.destination": "መዳረሻ", "hotels.f.price": "የአንድ ሌሊት ዋጋ", "hotels.f.amenities": "አገልግሎቶች",
  "hotels.p.under": "ከ{a} በታች", "hotels.p.range": "{a} – {b}", "hotels.p.over": "ከ{a} በላይ",
  "hotels.am.pool": "መዋኛ", "hotels.am.spa": "ስፓ", "hotels.am.beach": "የባሕር ዳርቻ መዳረሻ",
  "hotels.am.dining": "ምርጥ ምግብ ቤት", "hotels.am.butler": "የግል አገልጋይ አገልግሎት", "hotels.am.view": "ማራኪ እይታ",
  "hotels.count": "{n} ማረፊያዎች ተገኝተዋል", "hotels.count1": "1 ማረፊያ ተገኝቷል",
  "hotels.sort": "ደርድር", "hotels.sort.recommended": "የሚመከር", "hotels.sort.low": "ዋጋ፦ ከዝቅተኛ ወደ ከፍተኛ", "hotels.sort.high": "ዋጋ፦ ከከፍተኛ ወደ ዝቅተኛ",
  "hotels.currency": "ገንዘብ",
  "hotels.sampleNote": "የሚታዩት ዋጋዎች ለአንድ ክፍል በአንድ ሌሊት የተገመቱ ናሙናዎች ናቸው። ከመክፈልዎ በፊት የሽያጭ ቡድናችን ትክክለኛውን ተገኝነትና የመጨረሻ ዋጋ ያረጋግጣል።",
  "hotels.noResults": "ከማጣሪያዎችዎ ጋር የሚስማማ ሆቴል የለም", "hotels.noResultsDesc": "ማጣሪያ ይቀይሩ ወይም ያጽዱ።",
  "hotels.showResults": "{n} ሆቴሎችን አሳይ",

  "hotels.pick": "የወርቅ ዳን ምርጫ", "hotels.class": "{n}-ኮከብ ሆቴል", "hotels.vip": "የVIP አገልግሎት ሰጪያችን ቦታ ማስያዝዎን ይከታተላል",
  "hotels.from": "ከ", "hotels.perNight": "በሌሊት", "hotels.taxes": "+ ታክስና ክፍያዎች",
  "hotels.estTotal": "ለ{nights} የተገመተ ጠቅላላ፦ {amount}",
  "hotels.night": "{n} ሌሊት", "hotels.nights": "{n} ሌሊቶች",
  "hotels.book": "አሁን ይያዙ",
}
