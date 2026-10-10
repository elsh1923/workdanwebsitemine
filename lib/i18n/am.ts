// Amharic dictionary (አማርኛ). Keys must match en.ts exactly — TypeScript enforces this.
import type { TranslationKey } from "./en"

export const am: Record<TranslationKey, string> = {
  // Language toggle
  "lang.switchToAmharic": "ወደ አማርኛ ቀይር",
  "lang.switchToEnglish": "ወደ እንግሊዝኛ ቀይር",

  // Brand name
  "brand.name": "ወርቅ ዳን የጉዞ ወኪል",
  "brand.agent": "ወርቅ ዳን የጉዞ ወኪል",

  // Theme toggle
  "theme.toggle": "ገጽታ ቀይር",
  "theme.toLight": "ወደ ብሩህ ገጽታ ቀይር",
  "theme.toDark": "ወደ ጨለማ ገጽታ ቀይር",

  // Common
  "common.days": "ቀናት",
  "common.startingFrom": "መነሻ ዋጋ",
  "common.exploreTour": "ጉብኝቱን ይመልከቱ",
  "common.inquireRates": "ዋጋ ይጠይቁ",
  "common.home": "መነሻ",
  "common.backToTop": "ወደ ላይ ተመለስ",

  // Navbar
  "nav.home": "መነሻ",
  "nav.destinations": "መዳረሻዎች",
  "nav.services": "አገልግሎቶች",
  "nav.flights": "በረራዎች",
  "nav.hotels": "ሆቴሎች",
  "nav.about": "ስለ እኛ",
  "nav.gallery": "ማዕከለ ስዕል",
  "nav.contact": "ያግኙን",
  "nav.contactUs": "ያግኙን",
  "nav.planJourney": "ጉዞዎን ያቅዱ",
  "nav.brandTag": "ልዩ ጉዞዎችን እናዘጋጃለን",
  "nav.curatedDestinations": "የተመረጡ መዳረሻዎች",
  "nav.viewAll": "ሁሉንም ይመልከቱ",
  "nav.specializedServices": "ልዩ አገልግሎቶች",
  "nav.destinationsPackages": "መዳረሻዎችና ፓኬጆች",
  "nav.toggleMenu": "ምናሌውን ክፈት/ዝጋ",

  "nav.pkg.dubai.title": "የዱባይ የቅንጦት ጉብኝት",
  "nav.pkg.dubai.desc": "ዘመናዊ ቅንጦት፣ የበረሃ ሳፋሪና ዓለም አቀፍ የሰማይ መስመር",
  "nav.pkg.dubai.tag": "ተወዳጅ",
  "nav.pkg.china.title": "የቻይና ጓንግዙ ድንቆች",
  "nav.pkg.china.desc": "ጥንታዊ ቅርስ፣ ዓለም አቀፍ የንግድ ማዕከላትና ባህል",
  "nav.pkg.china.tag": "ባህላዊ",
  "nav.pkg.thailand.title": "የታይላንድ ደሴት ገነት",
  "nav.pkg.thailand.desc": "ጥርት ያለ ውሃ፣ ሞቃታማ ማረፊያዎችና ውብ ቤተ መቅደሶች",
  "nav.pkg.thailand.tag": "ሞቃታማ",
  "nav.pkg.delhi.title": "ዴልሂና ንጉሣዊ ሕንድ",
  "nav.pkg.delhi.desc": "ንጉሣዊ ሥነ ሕንፃ፣ ሕያው ገበያዎችና ቅርስ",
  "nav.pkg.delhi.tag": "ቅርስ",
  "nav.pkg.turkey.title": "ቱርክና የኢስታንቡል ምስጢር",
  "nav.pkg.turkey.desc": "ምሥራቅና ምዕራብ የሚገናኙበት፤ ቤተ መንግሥቶችና የኤጂያን የባሕር ዳርቻ",
  "nav.pkg.turkey.tag": "ታሪካዊ",

  "nav.svc.planning.title": "ልዩ የጉዞ ዕቅድና ምክር",
  "nav.svc.planning.desc": "ለግለሰብ፣ ለቤተሰብና ለክብር እንግዶች ፍላጎት የተበጁ የጉዞ መርሐ ግብሮች።",
  "nav.svc.uae.title": "የዩኤኢ የንግድ ምክር አገልግሎቶች",
  "nav.svc.uae.desc": "በዩኤኢ ገበያ የኩባንያ ምስረታ፣ ፈቃድና የድርጅት ምክር።",
  "nav.svc.visa.title": "ዓለም አቀፍ የቪዛ አገልግሎት",
  "nav.svc.visa.desc": "ከጅምር እስከ ፍጻሜ የሰነድ ዕገዛና ፈጣን የቪዛ አያያዝ።",
  "nav.svc.pcc.title": "የዩኤኢ ከወንጀል ነጻ ማረጋገጫ (PCC) ማስረጋገጥ አገልግሎት",
  "nav.svc.pcc.desc": "ለዩኤኢ የነዋሪነት፣ የሥራና የንግድ ቪዛ የሚያስፈልግ ከወንጀል ነጻ ማረጋገጫ ማስረጋገጥ።",

  // Footer
  "footer.brandTag": "ልዩ የቅንጦት ጉዞ ወኪል",
  "footer.about":
    "ከፍተኛ ደረጃ ያላቸው ልዩ ጉዞዎችን፣ የተረጋገጠ የአየር መንገድ ትኬት፣ የ5-ኮከብ ሆቴል ቦታ ማስያዝና የተሟላ የዩኤኢ ኩባንያ ምስረታ አገልግሎቶችን እናቀርባለን።",
  "footer.newsletterTitle": "የVIP ጋዜጣ",
  "footer.newsletterDesc": "ልዩ የበረራ ቅናሾችን፣ የወቅት ጉዞ መርሐ ግብሮችንና የቪዛ ዝማኔዎችን ይቀበሉ።",
  "footer.emailPlaceholder": "ኢሜይል አድራሻዎን ያስገቡ",
  "footer.subscribed": "✓ ተመዝግበዋል",
  "footer.subscribe": "ለዝማኔዎች ይመዝገቡ",
  "footer.featuredTours": "ተመራጭ ጉብኝቶች",
  "footer.pkg.dubai": "የዱባይ የቅንጦት ጉብኝት",
  "footer.pkg.thailand": "የታይላንድ ደሴት ጉብኝት",
  "footer.pkg.china": "የቻይና ጓንግዙ የንግድ ጉብኝት",
  "footer.pkg.delhi": "ዴልሂና ንጉሣዊ ሕንድ",
  "footer.pkg.turkey": "ቱርክና የኢስታንቡል ምስጢር",
  "footer.svc.planning": "የጉዞ ዕቅድና ምክር",
  "footer.svc.uae": "የዩኤኢ የንግድ ምስረታና ምክር",
  "footer.svc.visa": "ዓለም አቀፍ የቪዛ አገልግሎት",
  "footer.svc.pcc": "የዩኤኢ PCC ማስረጋገጥ",
  "footer.svc.booking": "የበረራና የሆቴል ቦታ ማስያዝ",
  "footer.offices": "ዋና መሥሪያ ቤትና ቅርንጫፍ ቢሮዎች",
  "footer.addisHq": "አዲስ አበባ ዋና ቢሮ • ኢትዮጵያ",
  "footer.mainOffice": "ዋና ቢሮ",
  "footer.addisAddress": "መገናኛ ዋች ህንጻ 2ኛ ፎቅ፣ አዲስ አበባ",
  "footer.sharjahHub": "ሻርጃ ማዕከል • ዩኤኢ",
  "footer.regionalOffice": "የክልል ቢሮ",
  "footer.sharjahAddress": "ሻርጃ ቢዝነስ ሴንተር፣ ምድር ቤት፣ ዩኤኢ",
  "footer.bookTrip": "ጉዞ ይያዙ",
  "footer.rights": "መብቱ በሕግ የተጠበቀ ነው።",

  // Hero
  "hero.badge": "ወርቅ ዳን ልዩ የቅንጦት ጉዞ ወኪል",
  "hero.title1": "የማይረሳ ጉዞ፣",
  "hero.title2": "ገደብ የለሽ ዓለም",

  // Featured packages card
  "featured.title": "አሁን ያሉ ፓኬጆች",
  "featured.label": "አሁን ያሉ ፓኬጆች",
  "featured.choose": "ፓኬጅ ይምረጡ",
  "featured.show": "{title}ን አሳይ",
  "featured.prev": "ቀዳሚ ፓኬጅ",
  "featured.next": "ቀጣይ ፓኬጅ",

  // Package catalogue
  "pkg.dubai-tour.title": "የዱባይ የቅንጦት ጉብኝት",
  "pkg.dubai-tour.desc":
    "በወደፊቱ ዘመን ድንቅ ሕንፃዎች ይደነቁ፤ በአረብ ሰማይ ሥር በበረሃ ድንኳን ያሳልፉ፤ ዓለም አቀፍ ደረጃውን የጠበቀ ምግብ ይቅመሱ፤ እጅግ በቅንጦት በተሞሉ የባሕር ዳርቻ ሪዞርቶች ይዝናኑ።",
  "pkg.china-tour.title": "የቻይና ጓንግዙና ሻንጋይ",
  "pkg.china-tour.desc":
    "የጥንት ሥርወ መንግሥታት፣ የንጉሣዊ የአትክልት ስፍራዎች፣ የወደፊት ዘመን ከተሞችና የካንቶናውያን ምግብ ቅርስ ተስማምተው የተዋሃዱበትን ዓለም ያግኙ።",
  "pkg.turkey-tour.title": "ኢስታንቡል፣ ቱርክ",
  "pkg.turkey-tour.desc":
    "ምሥራቅና ምዕራብ በቦስፎረስ ሰርጥ ዳር የሚገናኙበት ስፍራ። የኦቶማን ቤተ መንግሥቶችን፣ አያ ሶፊያን እንዲሁም በቀጰዶቅያ ላይ የሚበሩ ፊኛዎችን ይጎብኙ።",
  "pkg.thailand-tour.title": "የታይላንድ ደሴት ገነት",
  "pkg.thailand-tour.desc":
    "ጥርት ያለ ውሃ፣ ሞቃታማ ማረፊያዎች፣ ጥንታዊ ቤተ መቅደሶችና ድንቅ የታይ ምግብ በገነት መሰል መዳረሻዎች።",
  "pkg.delhi-tour.title": "ዴልሂና ንጉሣዊ ሕንድ",
  "pkg.delhi-tour.desc":
    "በንጉሣዊቷ ሕንድ ልብ ውስጥ ንጉሣዊ ሥነ ሕንፃ፣ ሕያው ገበያዎች፣ የሙጋል ቅርስና ታዋቂው ታጅ ማሃል።",

  // Package tags
  "tag.Modern Luxury": "ዘመናዊ ቅንጦት",
  "tag.Desert Safari": "የበረሃ ሳፋሪ",
  "tag.Skyline": "የሰማይ መስመር",
  "tag.Cultural Heritage": "ባህላዊ ቅርስ",
  "tag.Trade & Commerce": "ንግድና ቢዝነስ",
  "tag.Ancient": "ጥንታዊ",
  "tag.Historic Marvels": "ታሪካዊ ድንቆች",
  "tag.Aegean Coast": "የኤጂያን የባሕር ዳርቻ",
  "tag.Bosphorus": "ቦስፎረስ",
  "tag.Tropical": "ሞቃታማ",
  "tag.Islands": "ደሴቶች",
  "tag.Temples": "ቤተ መቅደሶች",
  "tag.Heritage": "ቅርስ",
  "tag.Imperial": "ንጉሣዊ",
  "tag.Bazaars": "ገበያዎች",

  // Home — destinations
  "home.dest.badge": "በጥንቃቄ የተመረጡ የጉዞ መርሐ ግብሮች",
  "home.dest.title": "ታሪክ የሚናገሩ መዳረሻዎች",
  "home.dest.desc":
    "እያንዳንዱ መዳረሻ የማይረሱ ትዝታዎችን፣ ልዩ ገጠመኞችንና እንከን የለሽ ቅንጦትን ለማቅረብ በጉዞ ባለሙያዎቻችን በጥንቃቄ ተዘጋጅቷል።",
  "home.dest.viewAll": "ሁሉንም ልዩ ፓኬጆች ይመልከቱ",
  "home.dest.dubai.title": "ዱባይ፣ ዩኤኢ",
  "home.dest.dubai.desc":
    "በወደፊቱ ዘመን ድንቅ ሕንፃዎች ይደነቁ፤ በአረብ ሰማይ ሥር በበረሃ ድንኳን ያሳልፉ፤ ዓለም አቀፍ ደረጃውን የጠበቀ ምግብ ይቅመሱ፤ እጅግ በቅንጦት በተሞሉ የባሕር ዳርቻ ሪዞርቶች ይዝናኑ።",
  "home.dest.turkey.title": "ኢስታንቡል፣ ቱርክ",
  "home.dest.turkey.desc":
    "ምሥራቅና ምዕራብ በቦስፎረስ ሰርጥ ዳር የሚገናኙበት ስፍራ። የኦቶማን ቤተ መንግሥቶችን፣ አያ ሶፊያን እንዲሁም በቀጰዶቅያ ላይ የሚበሩ ፊኛዎችን ይጎብኙ።",
  "home.dest.china.title": "ጓንግዙ፣ ቻይና",
  "home.dest.china.desc":
    "የካንቶን ትርኢት የንግድ ጉዞዎች፣ የወደፊት ዘመን የከተማ ገጽታ፣ የጅምላ ግብይት አካባቢዎችና ጥንታዊ ቅርስ — ከቪዛ እስከ ሆቴል ቻይናን ቀላል እናደርጋለን።",

  // Home — Telegram banner
  "home.tg.badge": "የVIP ጉዞ ክለብ",
  "home.tg.title": "ለልዩ ቅናሾችና ፈጣን ማሳወቂያዎች የቴሌግራም ቻናላችንን ይቀላቀሉ",
  "home.tg.desc":
    "የአጭር ጊዜ የበረራ ቅናሾችን፣ የወቅት የዕረፍት ማስተዋወቂያዎችን፣ የቅንጦት ሆቴል ጥቅሞችንና የቪዛ ፖሊሲ ዝማኔዎችን ቀድመው የሚያገኙ ይሁኑ።",
  "home.tg.cta": "የቴሌግራም ቻናላችንን ይቀላቀሉ",

  // Home — services
  "home.svc.badge": "ሁሉን አቀፍ የጉዞ አገልግሎት",
  "home.svc.title": "ዋና አገልግሎቶቻችን",
  "home.svc.desc":
    "የቤተሰብ ዕረፍት፣ የኩባንያ ምስረታ ወይም ዓለም አቀፍ የቪዛ ሂደት እያዘጋጁም ቢሆን፣ የተሟላ ምርጥ አገልግሎት እንሰጣለን።",
  "home.svc.featured": "ተመራጭ አገልግሎት",
  "home.svc.discover": "ዝርዝሩን ይመልከቱ",
  "home.svc.planning.title": "የጉዞ ዕቅድና ምክር",
  "home.svc.planning.desc":
    "ለእርስዎ ልዩ የጉዞ ስልት የተበጀ የጉዞ መርሐ ግብር ዝግጅት፣ የቅንጦት ሆቴል ቦታ ማስያዝ፣ የአየር መንገድ ትኬትና የVIP የመሬት ትራንስፖርት።",
  "home.svc.planning.f1": "ለግል ዕረፍት፣ ለጫጉላና ለቤተሰብ የተበጁ መርሐ ግብሮች",
  "home.svc.planning.f2": "የተረጋገጡ የ5-ኮከብ ሆቴሎችና የግል ሪዞርቶች ምርጫ",
  "home.svc.planning.f3": "ምቹ ሰዓት ያላቸው ቀጥተኛ የአየር መንገድ ቦታ ማስያዣዎች",
  "home.svc.planning.f4": "የባለሙያ የመዳረሻ መረጃና የ24/7 ምክር",
  "home.svc.uae.title": "የዩኤኢ የንግድ ምክር አገልግሎቶች",
  "home.svc.uae.desc":
    "በዩኤኢ ሥራ፣ ቅርንጫፍ ቢሮና ንግድ ለሚጀምሩ ሥራ ፈጣሪዎችና ድርጅቶች ከጅምር እስከ ፍጻሜ የሚሰጥ ስትራቴጂክ ምክር።",
  "home.svc.uae.f1": "የዋና ምድር፣ የነጻ ዞንና የኦፍሾር ኩባንያ ምስረታ",
  "home.svc.uae.f2": "የንግድ ፈቃድ፣ የኢንቨስተር ቪዛና የድርጅት ባንክ ሂሳብ",
  "home.svc.uae.f3": "የሕግ ሰነድ ሂደትና የኤምባሲ ማረጋገጫዎች",
  "home.svc.uae.f4": "ወደ ገበያ ለመግባት ስትራቴጂክ ምክርና የአካባቢ ስፖንሰርሺፕ",
  "home.svc.visa.title": "ዓለም አቀፍ የቪዛ ዕገዛና አገልግሎት",
  "home.svc.visa.desc":
    "ለቱሪስቶች፣ ለንግድ ተጓዦችና ለተማሪዎች አስተማማኝና ከፍተኛ ትክክለኛነት ያለው የቪዛ ማመልከቻ ዕገዛና የኤምባሲ ሰነድ አስተዳደር።",
  "home.svc.visa.f1": "የቱሪስት፣ የንግድ፣ የትራንዚትና የሕክምና ቪዛ ማመልከቻ",
  "home.svc.visa.f2": "የመጽደቅ ዕድልን ለመጨመር ጥልቅ የሰነድ ግምገማ",
  "home.svc.visa.f3": "የኤምባሲ ቀጠሮ ማስያዝና ለቃለ መጠይቅ ዝግጅት",
  "home.svc.visa.f4": "ፈጣን ክትትልና የቅጽበት ሁኔታ ማሳወቂያ",
  "home.svc.pcc.title": "የዩኤኢ PCC ማስረጋገጥ አገልግሎት",
  "home.svc.pcc.desc":
    "ለዩኤኢ የነዋሪነት፣ የቅጥርና የንግድ ቪዛ ማመልከቻ የሚያስፈልግ ከወንጀል ነጻ ማረጋገጫዎን (PCC) ያለ ብዙ ድካም ማስረጋገጥ።",
  "home.svc.pcc.f1": "ከወንጀል ነጻ ማረጋገጫ (PCC) ማስረጋገጥ",
  "home.svc.pcc.f2": "የውጭ ጉዳይ ሚኒስቴርና የዩኤኢ ኤምባሲ ህጋዊ ማድረግ",
  "home.svc.pcc.f3": "ውድቅ እንዳይሆንና እንዳይዘገይ የሰነድ ግምገማ",
  "home.svc.pcc.f4": "የተረጋገጠው የምስክር ወረቀትዎ እስኪደርስ የሁኔታ ማሳወቂያ",

  // Home — TikTok
  "home.tt.badge": "@workdantravel ይከተሉ",
  "home.tt.title": "ጉዞዎቻችንን በተግባር ይመልከቱ",
  "home.tt.desc": "ከትዕይንት ጀርባ ያሉ ጊዜያት፣ የመዳረሻ ድምቀቶችና የጉዞ መነሳሻ — በቀጥታ ከቲክቶካችን።",
  "home.tt.follow": "በቲክቶክ ይከተሉን",
  "home.tt.watch": "በቲክቶክ ይመልከቱ ↗",

  // Home — testimonials
  "home.story.badge": "የደንበኞች ተሞክሮ",
  "home.story.title": "የተጓዦች ታሪኮች",
  "home.story.desc": "ለተከበሩ እንግዶቻችን የጉዞ ሕልሞችን ወደ እንከን የለሽ የዕድሜ ልክ ትዝታዎች እንዴት እንደቀየርን ይመልከቱ።",
  "home.story.verified": "የተረጋገጠ ተጓዥ",
  "home.story.1.name": "ኤልያስ ብርሃኑ",
  "home.story.1.journey": "ልዩ የዱባይና የቅንጦት ዕረፍት ጉብኝት",
  "home.story.1.quote":
    "ጉዞው በሙሉ እንከን በሌለው መልኩ ተቀናጅቶ ነበር። ከአየር ማረፊያ የVIP አቀባበል እስከ ባሕር ዳርቻ ቪላችን ድረስ፣ ወርቅ ዳን እያንዳንዱን ዝርዝር በእውነተኛ ሙያዊነት ተንከባክቧል። ያለ ችግር መጓዝ ለሚፈልግ ሁሉ በጣም እመክራለሁ።",
  "home.story.1.location": "አዲስ አበባ፣ ኢትዮጵያ",
  "home.story.2.name": "ሜአዛ አበበ",
  "home.story.2.journey": "የዩኤኢ የንግድ ምስረታና የቪዛ ምክር",
  "home.story.2.quote":
    "የዩኤኢ ኩባንያ ምዝገባና የነዋሪነት ቪዛ ሂደት ከባድ ሊመስል ይችላል፤ የወርቅ ዳን የሻርጃ ቡድን ግን ቀላል አድርጎታል። የአካባቢ ዕውቀታቸው፣ ታማኝነታቸውና ፈጣን ግንኙነታቸው ወደር የለውም።",
  "home.story.2.location": "ዱባይ፣ ዩኤኢ",
  "home.story.3.name": "ዳዊት ታደሰ",
  "home.story.3.journey": "የቻይና የንግድ ትርኢትና የጓንግዙ ጉብኝት",
  "home.story.3.quote":
    "በመመሪያ በተደገፈው ፓኬጃቸው የካንቶን ትርኢት መካፈል ያለ ችግር ነበር። የሆቴል ቦታ ማስያዝ፣ የአካባቢ ትርጉምና ትራንስፖርት በሰዓቱ ተፈጽሟል። ቀጣዩን የቡድን ጉብኝታችንንም በእርግጠኝነት ከወርቅ ዳን ጋር እንይዛለን።",
  "home.story.3.location": "ጓንግዙ / አዲስ አበባ",

  // Home — about
  "home.about.badge": "ቅርሳችንና ራዕያችን",
  "home.about.title": "ከእርስዎ ጋር ለዘላለም የሚኖሩ ታሪኮችን እንሠራለን",
  "home.about.p1":
    "ወርቅ ዳን የጉዞ ወኪል የተመሠረተው ጉዞ ከተራ ጉብኝት በላይ መሆን አለበት በሚል መሠረታዊ እምነት ነው — መነሳሳትን የሚፈጥርና አህጉራትን አቋርጦ ሰዎችን የሚያገናኝ የሚያበለጽግ ጉዞ ሊሆን ይገባል።",
  "home.about.p2":
    "በአዲስ አበባ ኢትዮጵያና በሻርጃ ዩኤኢ ባሉን ቢሮዎች፣ ዓለም አቀፍ መዳረሻዎችን በልዩ አገልግሎት፣ በተረጋገጠ የአየር ትኬት፣ በቅንጦት የዕረፍት ዝግጅትና በሙያዊ የንግድ ምስረታ መፍትሔዎች እናገናኛለን።",
  "home.about.years": "የተዋሃደ የሥራ ልምድ ዓመታት",
  "home.about.iata": "የIATA ደረጃዎችን የተከተለ",
  "home.about.quote": "\"ጉዞ ሲገዙ የሚያበለጽግዎ ብቸኛው ነገር ነው።\"",
  "home.about.philosophy": "የወርቅ ዳን የጉዞ ፍልስፍና",

  // Home — FAQ
  "home.faq.badge": "የተለመዱ ጥያቄዎች",
  "home.faq.title": "ተደጋግመው የሚጠየቁ ጥያቄዎች",
  "home.faq.desc": "ከወርቅ ዳን የጉዞ ወኪል ጋር ስለመያዝ ማወቅ የሚፈልጉት ሁሉ።",
  "home.faq.1.q": "ከወርቅ ዳን ጋር ጉብኝት ወይም በረራ እንዴት እይዛለሁ?",
  "home.faq.1.a":
    "በድረ ገጻችን ላይ ባለው 'ጉዞዎን ያቅዱ' የቦታ ማስያዣ ቅጽ በቀጥታ መያዝ ይችላሉ፤ ወይም በዋትስአፕ (+251 906700007) ወይም በኢሜይል ሊያገኙን ይችላሉ። ቡድናችን ቦታዎን ለማረጋገጥ በደቂቃዎች ውስጥ ምላሽ ይሰጣል።",
  "home.faq.2.q": "የትኞቹን መዳረሻዎች ያካትታሉ?",
  "home.faq.2.a":
    "ዱባይ (ዩኤኢ)፣ ቻይና (ጓንግዙና ሻንጋይ)፣ ኢስታንቡል (ቱርክ)፣ ባንኮክና ፉኬት (ታይላንድ) እንዲሁም ዴልሂ (ሕንድ) ጨምሮ በዓለም አቀፍ የቅንጦት ፓኬጆች ላይ ልዩ ነን። በጥያቄዎ መሠረት ሌሎች መዳረሻዎችንም እናስተናግዳለን።",
  "home.faq.3.q": "የቪዛ ዕገዛ ይሰጣሉ?",
  "home.faq.3.a":
    "አዎ — የዓለም አቀፍ ቪዛ አገልግሎታችን የቱሪስት፣ የንግድ፣ የትራንዚትና የሕክምና ቪዛዎችን ያካትታል። የሰነድ ግምገማ፣ የኤምባሲ ቀጠሮ ማስያዝና የቅጽበት ሁኔታ ማሳወቂያዎችን እናቀርባለን።",
  "home.faq.4.q": "የዩኤኢ የንግድ ምክር አገልግሎት ምን ምን ያካትታል?",
  "home.faq.4.a":
    "ለዋና ምድር (Mainland)፣ ለነጻ ዞንና ለኦፍሾር ኩባንያዎች ከጅምር እስከ ፍጻሜ የዩኤኢ ኩባንያ ምስረታ እናቀርባለን። ይህም የንግድ ፈቃድ፣ የኢንቨስተር ቪዛ፣ የድርጅት ባንክ ሂሳብ መክፈት፣ የሕግ ሰነድ ሂደትና የኤምባሲ ማረጋገጫዎችን ያካትታል።",
  "home.faq.5.q": "የIATA ማረጋገጫ አስፈላጊ ነው? እናንተስ ተመዝግባችኋል?",
  "home.faq.5.a":
    "አዎ — የIATA (ዓለም አቀፍ የአየር ትራንስፖርት ማኅበር) ማረጋገጫ ዓለም አቀፍ የአቪዬሽንና የትኬት ደረጃዎችን እንደምናሟላ ያረጋግጣል። ወርቅ ዳን የጉዞ ወኪል ሙሉ በሙሉ በIATA ዕውቅና የተሰጠው ሲሆን ለደንበኞች የተረጋገጠ የአየር መንገድ ትኬትና የገንዘብ ደኅንነት ዋስትና ይሰጣል።",
  "home.faq.6.q": "በኢትዮጵያም በዩኤኢም ቢሮ አላችሁ?",
  "home.faq.6.a":
    "አዎ። ዋና ቢሮአችን መገናኛ ዋች ህንጻ 2ኛ ፎቅ፣ አዲስ አበባ፣ ኢትዮጵያ ይገኛል። የክልል ቢሮአችን ደግሞ ሻርጃ ቢዝነስ ሴንተር፣ ምድር ቤት፣ ዩኤኢ ነው። ሁለቱም ቢሮዎች የ24/7 የደንበኛ አገልግሎት ይሰጣሉ።",
  "home.faq.still": "ተጨማሪ ጥያቄ አለዎት? ቡድናችን ሊረዳዎ ዝግጁ ነው።",
  "home.faq.contact": "ቡድናችንን ያግኙ",

  // Time zones strip
  "tz.title": "ዓለም አቀፍ ሥራዎችና የቅጽበት ዴስክ",
  "tz.city.Addis Ababa": "አዲስ አበባ",
  "tz.city.Dubai": "ዱባይ",
  "tz.city.London": "ለንደን",
  "tz.city.Guangzhou": "ጓንግዙ",
  "tz.role.Addis Ababa": "ዋና መሥሪያ ቤት • ኢትዮጵያ",
  "tz.role.Dubai": "የክልል ማዕከል • ዩኤኢ",
  "tz.role.London": "የአውሮፓ አጋር • እንግሊዝ",
  "tz.role.Guangzhou": "የእስያ ሥራዎች • ቻይና",

  // Packages page
  "packages.badge": "ልዩ የጉዞ መርሐ ግብሮች",
  "packages.title": "የተመረጡ የቅንጦት ፓኬጆች",
  "packages.desc":
    "በዓለም እጅግ ድንቅ መዳረሻዎች ላይ በእጅ የተሠሩ ጉዞዎች — ከፍጹምነት ያነሰ ለማይቀበል መራጭ ተጓዥ የተዘጋጁ።",
  "packages.stat1": "5 ታዋቂ መዳረሻዎች",
  "packages.stat2": "4.8+ አማካይ ደረጃ",
  "packages.stat3": "ከ5 – 10 ቀን መርሐ ግብሮች",
  "packages.breadcrumb": "ፓኬጆች",
  "packages.filter.All Destinations": "ሁሉም መዳረሻዎች",
  "packages.filter.Luxury": "ቅንጦት",
  "packages.filter.Cultural": "ባህላዊ",
  "packages.filter.Tropical": "ሞቃታማ",
  "packages.filter.Heritage": "ቅርስ",
  "packages.empty": "ለዚህ ምድብ ምንም ፓኬጅ አልተገኘም።",
  "packages.why.kicker": "የወርቅ ዳን ልዩነት",
  "packages.why.title": "ለምን ከእኛ ጋር ይጓዛሉ?",
  "packages.why.iata.title": "የIATA ዕውቅና ያለው",
  "packages.why.iata.desc": "ሊተማመኑባቸው የሚችሉ በዓለም አቀፍ ደረጃ ዕውቅና ያላቸው የጉዞ ባለሙያዎች።",
  "packages.why.vip.title": "የVIP አገልግሎት",
  "packages.why.vip.desc": "ልዩ የሆቴል ማሻሻያዎች፣ የላውንጅ አገልግሎትና ቅድሚያ የመሳፈር መብት።",
  "packages.why.support.title": "የ24/7 ድጋፍ",
  "packages.why.support.desc": "በዓለም ላይ በየትኛውም ቦታ ቢሆኑ ሌት ተቀን የሚደረግ ዕገዛ።",
  "packages.why.rates.title": "ምርጥ ዋጋ",
  "packages.why.rates.desc": "ምንም ድብቅ ክፍያ የሌለበት ተወዳዳሪ ዋጋ — ዋስትና እንሰጣለን።",
  "packages.cta.badge": "ጉዞዎን ዛሬ ይጀምሩ",
  "packages.cta.title1": "ለመያዝ",
  "packages.cta.title2": "ዝግጁ ነዎት?",
  "packages.cta.desc":
    "የጉዞ ባለሙያዎቻችን ለሕልምዎ የሚስማማ ልዩ የጉዞ መርሐ ግብር ያዘጋጁልዎ። ተራ ጉዞዎች የሉም — ድንቅ ተሞክሮዎች ብቻ።",
  "packages.cta.plan": "ጉዞዎን ያቅዱ",
  "packages.cta.talk": "ባለሙያ ያነጋግሩ",
}
