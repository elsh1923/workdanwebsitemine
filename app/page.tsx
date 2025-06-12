"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"
import Image from "next/image"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  TextField,
  IconButton,
  easing,
} from "@mui/material"
import { BriefcaseBusiness, PlaneTakeoff } from "lucide-react"



import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Map, Palmtree, Utensils, Mountain, Waves, MenuIcon } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import StoryTestimonial from "@/components/story-testimonial"
import ServiceCard from "@/components/service-card"
import { Camera } from "lucide-react"



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative h-[90vh] overflow-hidden">
          <Image
            src="/hero-section/hero-section.png"
            alt="A successful travelers journy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
            data-aos="fade-right"
          >
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Experience the World Through a Traveler's Eyes
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl">
              Where every destination becomes a story, every journey an adventure, and every moment a memory etched in
              time.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/booking">
                <Button size="lg" className="bg-blue-400 hover:bg-blue-500">
                  Book A Tour
                </Button>
              </Link>
              {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Journeys
              </Button> */}
            </div>
          </div>
        </section>

        <section id="destinations" className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
                data-aos="fade-up"
              >
                Destinations That Tell a Story
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Each place has a tale to tell, a secret to share, and an experience waiting to unfold. Discover the
                narratives that make these destinations more than just places on a map.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <DestinationCard
                title="The Last Bell in Kyoto"
                description="Every morning at dawn, the bell at Shōren-in Temple tolls but not quite as it used to.
                             Years ago, the bell was struck by a monk with a deliberate rhythm, a ritual of resonance meant to stir both gods and passersby. Now, it’s an old woman in soft tabi socks, once a temple apprentice, who volunteers for the morning task. She walks the garden path alone, stopping briefly to bow toward the camphor trees that have outlived emperors.
                             Her hand rests on the bell’s beam, and then—thud. Not loud. Not grand. But steady.
                             She told me the bell doesn't just mark time; it remembers it. Each tone carries the breath of monks who no longer walk here, of prayers whispered during war, of wedding chants sung before the city knew neon.
                             In Kyoto, where tradition risks turning ornamental, one woman still gives voice to silence. And in that low, lingering toll, time doesn’t pass—it deepens."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Palmtree className="h-5 w-5" />}
                tags={["Cultural", "Spiritual", "Historical", "Japan"]}
              />
              <DestinationCard
                title="The Ink Beneath the Stones of Rome"
                description="In Trastevere, away from the Vatican’s sweep and the Colosseum’s grandeur, there's a cobbled alley where the stones rise unevenly like the street is remembering something.
                             Here, beneath the surface, archaeologists once found fragments of a Roman tavern wall. Not marble, not noble—just plaster, layered with ink. Messages from drunk poets, graffiti from gamblers, a crude drawing of a donkey wearing a senator’s toga.
                             A local bartender told me, laughing, that his great-grandfather poured wine over that very spot for luck—long before the diggers came. “The old Rome,” he said, “was less Caesar, more chaos.”
                             And maybe that's what makes this alley sing louder than the Forum. Not its monuments, but its mischief. The way people etched themselves into a city already full of gods.
                             Rome remembers. But not always the way you expect."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Waves className="h-5 w-5" />}
                tags={["Coastal", "Culinary", "Romantic", "Italy"]}
              />
              <DestinationCard
                title="The Rhythm Carved in Havana"
                description="At dusk, the Malecón fills with sound—not music from speakers, but from skin meeting drum.
                             Lázaro, a retired mechanic with hands like polished wood, sets his battered conga beneath a crumbling archway. He plays as if tracing a memory—each beat rising from somewhere deeper than flesh. When I asked who taught him, he tapped his chest and said, “The drum was always here.”
                             His rhythm is old—older than Fidel, older than Spanish, born from the crossings of ships and sorrow. On Sundays, teenagers gather around him, echoing the beat, learning not from instruction but from vibration. No one writes it down. No one needs to.
                             In Havana, stories don’t survive in libraries. They live in the body, in hips that sway at twilight, in rhythms that outlast regimes.
                             Lázaro drums not to perform, but to remember. And the city answers in footstep and song."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Mountain className="h-5 w-5" />}
                tags={["Adventure", "Historical", "Mystical", "Cuba"]}
              />
              <DestinationCard
                title="The Shadow That Follows the Sphinx"
                description="She never moves, but she watches everything.
                             The Sphinx has stared across the Giza Plateau longer than history can comfortably explain. Tourists come for her profile, her silence, her size. But one guide—Amir, wiry, chain-smoking, with a poet’s soul—told me to watch the shadow.
                             Midday, he said, her shadow points directly toward the Nile. Always.” He believes it was a map, a divine compass, guiding lost travelers back to life. Not superstition, he shrugged. Just old wisdom.
                             And then, almost sheepishly, he showed me his forearm. Inked there was a rough outline of the Sphinx’s shadow from above. So I always know where I’m going, he said, grinning.
                             In Egypt, even the silence casts meaning. The shadow tells the story that the monument does not: not of kings or gods, but of direction, of orientation, of how to keep moving forward even when time stands still."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Utensils className="h-5 w-5" />}
                tags={["Cultural", "Culinary", "Bustling", "Egypt"]}
              />
              <DestinationCard
                title="The Man Who Weaves the Sky in Rajasthan"
                description="Every spring in Jaipur, the skies bloom. Not with birds, but with kites—saffron, indigo, vermilion—fighting for wind, for glory, for a moment of flight.
                             On the edge of the Pink City, I met Karim, an old kite-maker whose fingers worked faster than sight. His designs weren’t fancy—no glitter or gold—just careful lines, balance, a whisper of bamboo.
                             “These are not toys,” he said, smiling. “They are letters to the sky.”
                             His father had taught him the craft during Partition, when flight meant freedom. Now, Karim’s grandson battles digital distractions and cheap imports, but still returns each January to fly what they’ve made—three generations tethered by string.
                             In Rajasthan, tradition is not preserved in temples. It lives in the air, pulled taut between fingers, flicked into motion, stitched with longing.
                             And when Karim launches his first kite of the season, he looks up—not to win, but to remember."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Map className="h-5 w-5" />}
                tags={["Nature", "Peaceful", "Majestic", "India"]}
              />
              <DestinationCard
                title="The Wind that Sings in the Scottish Highlands"
                description="In Glencoe, the hills do not roll—they brood.
                             I stood alone on a narrow path near Buachaille Etive Mòr, when the wind shifted—hard and sudden, like it was saying something. A shepherd had warned me: “The glen remembers.”
                             He meant the massacre, of course—1692, when kin turned on kin over clan and crown. But he also meant the deeper remembering: the way mist clings to heather, the way the moor hushes footfalls, the strange calm before sudden storms.
                             That afternoon, I heard it—the wind weaving through the grass, striking rocks, keening low. Some say it’s science: acoustics, geography. Others say it’s mourning.
                             The Highlands hold stories in their breath. They don’t demand to be told—they just ask to be felt."
                imageSrc="/placeholder.svg?height=400&width=600"
                icon={<Palmtree className="h-5 w-5" />}
                tags={["Island", "Scenic", "Romantic", "Scotland"]}
              />
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-blue-400 hover:bg-blue-500">
                Explore All Destinations
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-stone-100">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
                data-aos="fade-up"
              >Our Services</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                We craft immersive travel experiences tailored to your desires. Each service is designed to engage all
                your senses and create memories that last a lifetime.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Travel Planning & Consultation"
                description="Whether you’re planning a honeymoon, a solo trip, or a group adventure, our Travel Planning & Consultation service takes the stress out of organizing your journey."
                icon={PlaneTakeoff}
                features={[
                  "Tailored travel plans based on your interests, time, and budget.",
                  "Guidance with document preparation and application tracking.",
                  "Expert suggestions on where to go and when to go.",
                  "Smart cost breakdowns to make the most of your money.",
                  "Personalized advice and recommendations via call, chat, or in-person.",
                ]}
                popular={true}
              />
              <ServiceCard
                title="🇦🇪 UAE Business Consultant Activities"
                description="From company setup to strategic advisory, our UAE Business Consultant services provide end-to-end support for entrepreneurs and corporations looking to establish and grow in the UAE market."
                icon={BriefcaseBusiness}
                features={[
                  "Complete support for Mainland, Free Zone, and Offshore company formation.",
                  "Professional document handling, licensing, and visa services.",
                  "Expert business strategy and market entry advisory.",
                  "Banking, taxation, and legal document assistance under one roof.",
                  "Networking, events, and branding support for scaling businesses.",
                ]}
                popular={true}
              />
              {/* <ServiceCard
                title="Cultural Immersion Experiences"
                description="Connect deeply with local traditions, arts, and ways of life."
                icon={Palmtree}
                features={[
                  "Private access to cultural ceremonies and rituals",
                  "Hands-on workshops with master craftspeople",
                  "Meaningful exchanges with local communities",
                  "Language introduction with practical phrases",
                  "Cultural etiquette guidance",
                ]}
              />
              <ServiceCard
                title="Wilderness & Adventure Narratives"
                description="Experience the natural world through carefully crafted outdoor journeys."
                icon={Mountain}
                features={[
                  "Expert naturalist guides for wildlife encounters",
                  "Secluded hiking trails away from crowds",
                  "Sunrise and sunset experiences in breathtaking locations",
                  "Comfortable yet authentic wilderness accommodations",
                  "Conservation-focused activities",
                ]}
              />
              <ServiceCard
                title="Luxury Transportation Curation"
                description="Travel in comfort with our seamlessly arranged transportation services."
                icon={Waves}
                features={[
                  "Private drivers familiar with scenic routes",
                  "Luxury vehicle selection based on terrain and preference",
                  "Helicopter and private boat transfers to remote locations",
                  "Vintage and specialty vehicle experiences",
                  "24/7 transportation concierge",
                ]}
              />
              <ServiceCard
                title="Storytelling Photography Service"
                description="Capture your journey through professional photography that tells your travel story."
                icon={Camera}
                features={[
                  "Professional photographer for half or full-day sessions",
                  "Candid moments captured without intrusion",
                  "Destination-specific iconic and hidden photo locations",
                  "Professionally edited digital gallery",
                  "Handcrafted photo book of your journey",
                ]}
              /> */}
            </div>
          </div>
        </section>

        <section id="experiences" className="py-20 bg-stone-100">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
                data-aos="fade-up"
              >Curated Experiences</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                More than just activities, these are moments that become part of your personal narrative, carefully
                crafted to engage all your senses and create memories that linger long after you've returned home.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="A traditional cooking class in a rustic Italian kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">Culinary Journey</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-500">Tuscan Kitchen Secrets</h3>
                  <p className="text-muted-foreground mb-4">
                    Your hands dusted with flour, the earthy aroma of truffles in the air, and the passionate
                    instructions of a local nonna guiding you through generations-old recipes. As you knead, chop, and
                    sauté, the kitchen becomes a theater of sensory delight, culminating in a feast enjoyed with new
                    friends as the Tuscan sun sets over rolling vineyards.
                  </p>
                  <Button variant="outline" className="w-full">
                    Discover This Experience
                  </Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="A small boat navigating through bioluminescent waters at night"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Waves className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium text-blue-500">Natural Wonder</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-500">Bioluminescent Bay Kayaking</h3>
                  <p className="text-muted-foreground mb-4">
                    The paddle breaks the dark water, releasing a swirl of blue-green light that seems to come from
                    another world. The night is velvet around you, stars above mirrored by the glowing organisms below.
                    Each movement creates a new constellation in the water, while the rhythmic sounds of the nocturnal
                    forest provide a natural symphony to this magical experience.
                  </p>
                  <Button variant="outline" className="w-full">
                    Discover This Experience
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-blue-400 hover:bg-blue-500">
                Browse All Experiences
              </Button>
            </div>
          </div>
        </section>

        <section id="stories" className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
                data-aos="fade-up"
              >Traveler Chronicles</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Every journey creates a unique narrative. Here are the stories of fellow travelers who embarked on their
                own adventures, returning with tales that inspire and transport.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <StoryTestimonial
                name="Elena Moretti"
                journey="Sacred Valley Expedition"
                quote="The moment our guide led us through a hidden path to witness a traditional Quechua ceremony, I felt something shift within me. It wasn't just the haunting melodies or the fragrant smoke of sacred herbs – it was the realization that I was no longer an observer but had become part of a living, breathing story thousands of years in the making."
                imageSrc="/placeholder.svg?height=100&width=100"
              />
              <StoryTestimonial
                name="James Thornton"
                journey="Japanese Countryside Retreat"
                quote="I still dream of those misty mornings at the ryokan, when I would slide open the paper doors to reveal the private garden, steam rising from the natural hot spring as red-crowned cranes waded through the shallow pond. The simple breakfast of grilled fish and miso soup, prepared with such reverence, taught me more about Japanese philosophy than any book ever could."
                imageSrc="/placeholder.svg?height=100&width=100"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Read More Stories
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-amber-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-blue-500"
                  data-aos="fade-up"
                >Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Wanderlust Chronicles began with a simple belief: that travel should be more than checking
                  destinations off a list – it should be about collecting stories that transform us.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded by a collective of passionate storytellers and seasoned travelers, we've spent decades
                  exploring the hidden corners of our world, forging connections with local communities, and curating
                  experiences that engage all the senses.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our mission is to craft journeys that weave you into the fabric of a place – where you don't just
                  visit, but truly experience. Where every meal tells the history of a culture, every landscape whispers
                  its secrets, and every interaction becomes a chapter in your personal travel narrative.
                </p>
                <Button className="bg-blue-400 hover:bg-blue-500">Meet Our Team</Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Our team of travel storytellers gathered around a map, planning the next adventure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-400 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Begin Your Story</h2>
            <p className="max-w-2xl mx-auto text-amber-100 mb-10">
              Every great journey begins with a single step. Let us help you write the first page of your next travel
              story.
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-200">
                Start Planning
              </Button>
            </Link>
          </div>
        </section>
      </main>

    </div>
  )
}
