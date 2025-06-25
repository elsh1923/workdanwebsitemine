import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features: string[]
  popular?: boolean
  link?: string
}

export default function ServiceCard({ title, description, icon: Icon, features, popular, link }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg h-full flex flex-col relative overflow-hidden">
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md bg-blue-400 hover:bg-blue-500 text-white">
            Most Popular
          </Badge>
        </div>
      )}
      <CardContent className="pt-6 pb-0 flex-1">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-amber-100 text-blue-400">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
        <p className="text-muted-foreground text-center mb-6">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-6">
        <Link href={link || "#"}>
          <Button className="w-full bg-blue-400 hover:bg-blue-500">Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
