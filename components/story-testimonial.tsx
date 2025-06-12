import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface StoryTestimonialProps {
  name: string
  journey: string
  quote: string
  imageSrc: string
}

export default function StoryTestimonial({ name, journey, quote, imageSrc }: StoryTestimonialProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-4 border-blue-400">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-blue-400">{journey}</p>
          </div>
        </div>
        <div className="mt-4 relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-400 opacity-50" />
          <p className="pl-6 italic text-muted-foreground">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}
