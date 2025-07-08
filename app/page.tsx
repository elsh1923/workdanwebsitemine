"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"
import Image from "next/image"
import { BriefcaseBusiness, PlaneTakeoff } from "lucide-react"
import TimezonesDisplay from '@/components/time-zones-dIsplay'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import { Pagination, Autoplay } from 'swiper/modules';
import { Typography } from "@mui/material"
import {
  Verified,
  Groups,
  Security,
  TravelExplore,
  Public, // replacing Eco with Public (globe-like icon)
  ShoppingBag,
} from "@mui/icons-material"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Compass, Map, Palmtree, Utensils, Mountain, Waves, File, MenuIcon, MapPin, Clock } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import StoryTestimonial from "@/components/story-testimonial"
import ServiceCard from "@/components/service-card"
import { Camera } from "lucide-react"
import HeroSection from "@/components/hero-section"
import LogoClouds from "@/components/logo-clouds"
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    })
  }, [])
  const values = [
    {
      id: 0,
      title: 'Authentic Experiences',
      description:
        'We create genuine connections between travelers and local communities, ensuring every journey tells a unique story.',
      icon: Groups,
      color: '#1976d2',
    },
    {
      id: 1,
      title: 'Safety & Security',
      description:
        'Your safety is our top priority. We maintain the highest safety standards and provide 24/7 support throughout your journey.',
      icon: Security,
      color: '#d32f2f',
    },
    {
      id: 2,
      title: 'Sustainable Tourism',
      description:
        "We promote responsible travel that benefits local communities and preserves Ethiopia's natural and cultural heritage.",
      icon: Public, // new icon used here
      color: '#2e7d32',
    },
    {
      id: 3,
      title: 'Expert Guidance',
      description:
        "Our experienced local guides provide deep insights into Ethiopia's history, culture, and hidden treasures.",
      icon: TravelExplore,
      color: '#ed6c02',
    },
    {
      id: 4,
      title: 'Affordable',
      description:
        "We offer competitive rates and flexible packages to suit your budget and preferences.",
      icon: ShoppingBag,
      color: '#f59e0b',
    },
    {
      id: 5,
      title: 'Fast and Reliable',
      description:
        "We guarantee timely delivery and exceptional customer service to ensure a seamless travel experience.",
      icon: Clock,
      color: '#0ea5e9',
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <section id="destinations" className="py-8">
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
                title="Dubai UAE"
                description="Dubai is the capital of the United Arab Emirates, a country known for its modernity, luxury, and innovation. It's a bustling metropolis with a rich history and a vibrant culture. Whether you're looking for a luxurious getaway or a thrilling adventure, Dubai has something for everyone."
                imageSrc="/dubai-front.png?height=400&width=600"
                icon={<Palmtree className="h-5 w-5" />}
                tags={["Cultural", "Luxury", "Modern", "UAE"]}
              />
              <DestinationCard
                title="China Guangzhou"
                description="Guangzhou is the capital city of the People's Republic of China, a country known for its rich history, culture, and cuisine. It's a bustling metropolis with a mix of modern and traditional architecture, as well as a vibrant food scene. Whether you're looking for a cultural experience or a bustling nightlife, Guangzhou has something for everyone."
                imageSrc="/china-front.png?height=400&width=600"
                icon={<MapPin className="h-5 w-5" />}
                tags={["Cultural", "Historical", "Chinese"]}
              />
              <DestinationCard
                title="Turkey Istanbul"
                description="Istanbul is the capital city of Turkey, a country known for its rich history, culture, and cuisine. It's a bustling metropolis with a mix of modern and traditional architecture, as well as a vibrant food scene. Whether you're looking for a cultural experience or a bustling nightlife, Istanbul has something for everyone."
                imageSrc="/turkey-front.png?height=400&width=600"
                icon={<MapPin className="h-5 w-5" />}
                tags={["Cultural", "Historical", "Turkish"]}
              />
              {/* <DestinationCard
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
              /> */}
            </div>

          </div>
        </section>
        {/* Core Values Section */}
        <section className="bg-white dark:bg-gray-900 py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <Typography variant="h2" component="h2" gutterBottom fontWeight="bold" color="primary.main">Core Values We Offer</Typography>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                We believe travel is more than sightseeing, it's storytelling.
              </p>
            </div>

            <div className="space-y-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
              data-aos="fade-up"
            >
              {values.map((value, index) => (
                <div key={value.id} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                    <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-blue-500">{value.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-7 bg-stone-100">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
              // data-aos="fade-up"
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
                link="/services/travel-planning-consultation"
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
                link="/services/uae-business-consultant-activities"
              />
              <ServiceCard
                title="Visa Services"
                description="We assist travelers with fast and reliable visa processing for multiple destinations. Whether it's tourist, business, or transit visas, our team ensures a smooth and hassle-free experience, handling all the paperwork and embassy communication for you."
                icon={File} // if using Lucide
                features={[
                  "Tourist, Business, and Transit visa support",
                  "Guidance on visa requirements and eligibility",
                  "Document preparation and embassy submission",
                  "Expedited processing for urgent travel needs",
                  "Real-time updates on application status",
                ]}
                popular={true}
                link="/services/visa-services"
              />

              {/*<ServiceCard
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
        {/* <LogoClouds /> */}
        <section id="stories" className="py-7">
          <div className="container">
            <div className="mb-12 text-center">
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-500"
              // data-aos="fade-up"
              >
                Traveler Chronicles
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Every journey creates a unique narrative. Here are the stories of fellow travelers who embarked on their
                own adventures, returning with tales that inspire and transport.
              </p>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000, // 5 seconds delay between slides
                disableOnInteraction: false, // Keeps autoplay running even after user interaction
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <StoryTestimonial
                  name="Eliyas Birhanu"
                  journey="Ethiopian Cultural Experience"
                  quote="The experience was truly unforgettable. The guide was knowledgeable and the organization was excellent despite the challenging environment. Standing at the edge of the Erta Ale volcano at night was a once-in-a-lifetime experience."
                  imageSrc="/placeholder.svg?height=100&width=100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StoryTestimonial
                  name="Meaza Abebe"
                  journey="Ethiopian Cultural Experience"
                  quote="The experience was truly unforgettable. The guide was knowledgeable and the organization was excellent despite the challenging environment. Standing at the edge of the Erta Ale volcano at night was a once-in-a-lifetime experience."
                  imageSrc="/placeholder.svg?height=100&width=100"
                />
              </SwiperSlide>
              {/* Add more SwiperSlide components for additional testimonials */}

            </Swiper>
          </div>
        </section>

        <section id="about" className="py-7 bg-amber-50">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-blue-500"
                // data-aos="fade-up"
                >Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Workdane Tour and Travel began with a simple belief: that travel should be more than checking
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
                {/* <Button className="bg-blue-400 hover:bg-blue-500">Meet Our Team</Button> */}
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

        <section className="text-white">
          <TimezonesDisplay />
        </section>
      </main>

    </div>
  )
}
