import React from 'react'
import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"

import { MenuIcon } from "lucide-react"


function Navbar() {
  return (
      <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center justify-between">
    <nav className="flex items-center gap-36">
      <a
        href="/"
        className="flex items-center gap-2"
      >
        <Image
          src="/logo/navbar-workdan-logo.png"
          className="max-h-16"
          alt="workdan logo"
          width={100}
          height={300}
        />
        <span className="font-semibold tracking-tighter text-blue-400">
          Workdan Tour and Travel
        </span>
      </a>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#destinations"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              Destinations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/services"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#stories"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              Traveler Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about-us"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/packages"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              Packages
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="gallery"
              className={`${navigationMenuTriggerStyle()} text-xl relative group transition-colors duration-300 hover:text-blue-500`}
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden items-start gap-4 lg:flex">
        <Link href="/booking">
          <Button className="bg-blue-400 hover:bg-blue-500">Book a tour</Button>
          </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="max-h-screen overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <a
                href="#"
                className="flex items-center gap-2"
              >
                <img
                  src="/logo/navbar-workdan-logo.png"
                  className="max-h-8"
                  alt="Shadcn UI Navbar"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Workdan Tour and Travel
                </span>
              </a>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-4">
            <div className="flex flex-col gap-6">
              <a href="/#destinations" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                Destinations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/#stories" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                Traveler Stories
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/about-us" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/packages" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                Packages
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/gallery" className="font-medium relative group transition-colors duration-300 hover:text-blue-500">
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Link href="/booking">
                <Button className="bg-blue-400 hover:bg-blue-500">Book a tour</Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </div>
</section>
  )
}

export default Navbar
