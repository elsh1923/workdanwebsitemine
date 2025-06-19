"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Home, Package, Settings, Users, ChevronDown, Plane, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const packagesItems = [
  {
    title: "Desert Safari",
    href: "/packages/desert-safari",
    description: "Explore the beauty of the desert with a guided tour",
    icon: MapPin,
  },
  {
    title: "City Tours",
    href: "/packages/city-tours",
    description: "Discover the best attractions in major cities",
    icon: MapPin,
  },
  {
    title: "Adventure Packages",
    href: "/packages/adventure",
    description: "Thrilling adventures for the bold traveler",
    icon: MapPin,
  },
]

const servicesItems = [
  {
    title: "Travel Planning & Consultation",
    href: "/services/travel-planning-consultation",
    description:
      "Whether you're planning a honeymoon, a solo trip, or a group adventure, our Travel Planning & Consultation service takes the stress out of organizing your journey.",
    icon: Plane,
  },
  {
    title: "UAE Business Consultant Activities",
    href: "/services/uae-business-consultant-activities",
    description:
      "From company setup to strategic advisory, our UAE Business Consultant services provide end-to-end support for entrepreneurs and corporations looking to establish and grow in the UAE market.",
    icon: Settings,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex items-center">
            {/* <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center"> */}
              <Image src="/logo/navbar-workdan-logo.png" alt="workdan logo" width={100} height={200} />
            {/* </div> */}
            <div className="ml-3">
              <div className="text-xl font-bold text-blue-500">workdan tour and travel</div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about-us"
                  className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-200"
                >
                  Get to Know Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-base bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                Packages
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] p-4 space-y-2">
                  {packagesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="h-5 w-5 text-blue-500" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-base bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[500px] p-4 space-y-2">
                  {servicesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="flex items-start space-x-3">
                            <item.icon className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                              <p className="text-xs text-gray-600 mt-1 line-clamp-3">{item.description}</p>
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            asChild
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
          >
            <Link href="/deals">Travel Deals</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-3 text-left">
               <Image src="/logo/navbar-workdan-logo.png" alt="workdan logo" width={100} height={200} />
                <div>
                  <div className="text-lg font-bold text-blue-500">workdan tour and travel</div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                href="/"
                className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>

              <Link
                href="/about-us"
                className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5" />
                <span>Who We Are</span>
              </Link>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5" />
                    <span>Packages</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-3 ml-8">
                  {packagesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Settings className="h-5 w-5" />
                    <span>Services</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-3 ml-8">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <div className="pt-6 space-y-3">
                <Button
                  asChild
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full font-medium"
                >
                  <Link href="/deals" onClick={() => setIsOpen(false)}>
                    Travel Deals
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
