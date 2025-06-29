"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {
  CalendarDays,
  MapPin,
  Users,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Plane,
  CheckCircle,
  Upload,
  X,
  Plus,
  Minus,
  AlertCircle,
  Check,
  ChevronsUpDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface PassengerCounts {
  adults: number
  children: number
  infants: number
}

interface FormData {
  from: string
  to: string
  departDate: string
  returnDate: string
  passengers: PassengerCounts
  name: string
  email: string
  phone: string
  message: string
  images: (File | string)[]
}

interface FormErrors {
  from?: string
  to?: string
  departDate?: string
  returnDate?: string
  passengers?: string
  name?: string
  email?: string
  phone?: string
}

interface Airport {
  label: string
  value: string
}

export default function BookingForm() {
  const [airportOptions, setAirportOptions] = useState<Airport[]>([])
  const [tripType, setTripType] = useState<"roundtrip" | "oneway" | "multicity">("roundtrip")
  const [step, setStep] = useState(1)
  const [openFrom, setOpenFrom] = useState(false)
  const [openTo, setOpenTo] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    name: "",
    email: "",
    phone: "",
    message: "",
    images: [],
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    fetch("/data/airports.json")
      .then((res) => res.json())
      .then((data: Airport[]) => {
        // Ensure the data matches the Airport interface
        const formattedOptions = data.map((airport) => ({
          label: airport.label,
          value: airport.value,
        }))
        setAirportOptions(formattedOptions)
      })
      .catch((error) => {
        console.error("Error fetching airports:", error)
      })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }))
    }
  }

  const handleAirportSelect = (field: "from" | "to", value: string) => {
    const selectedAirport = airportOptions.find((airport) => airport.value === value)
    setFormData((prev) => ({
      ...prev,
      [field]: selectedAirport ? selectedAirport.label : value,
    }))

    // Clear error when user selects
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    // Close the popover
    if (field === "from") setOpenFrom(false)
    if (field === "to") setOpenTo(false)
  }

  const formatWhatsAppMessage = () => {
    const { name, phone, email, from, to, departDate, returnDate, passengers, message, images } = formData
    const passengerCount = `👥 Adults: ${passengers.adults}, Children: ${passengers.children}, Infants: ${passengers.infants}`
    const imgLinks = images.length > 0 ? images.map((url) => `📎 ${url}`).join("\n") : "No attachments"

    const text = `
✈️ *New Flight Booking Inquiry* ✈️

🧍 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🛫 From: ${from}
🛬 To: ${to}
📅 Departure: ${departDate}
${tripType === "roundtrip" ? `📅 Return: ${returnDate}` : ""}
${passengerCount}
📝 Message: ${message || "No message"}
📁 Documents:
${imgLinks}
    `.trim()

    const encoded = encodeURIComponent(text)
    return `https://wa.me/251906700007?text=${encoded}`
  }

  const handlePassengerChange = (type: keyof PassengerCounts, increment: boolean) => {
    setFormData((prev) => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: increment ? prev.passengers[type] + 1 : Math.max(0, prev.passengers[type] - 1),
      },
    }))
    // Clear passenger errors
    if (errors.passengers) {
      setErrors((prev) => ({ ...prev, passengers: undefined }))
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/")
      const isValidSize = file.size <= 5 * 1024 * 1024
      return isValidType && isValidSize
    })

    const uploadedUrls: string[] = []

    for (const file of validFiles) {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", "booking_upload") // your Cloudinary upload preset

      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dj9nxwgc5/image/upload", {
          method: "POST",
          body: formData,
        })
        const data = await res.json()
        uploadedUrls.push(data.secure_url)
      } catch (err) {
        console.error("Cloudinary upload failed", err)
      }
    }

    // Save URLs to formData.images
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...uploadedUrls].slice(0, 5),
    }))
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.from.trim()) {
      newErrors.from = "Departure city is required"
    }
    if (!formData.to.trim()) {
      newErrors.to = "Destination city is required"
    }
    if (!formData.departDate) {
      newErrors.departDate = "Departure date is required"
    }
    if (tripType === "roundtrip" && !formData.returnDate) {
      newErrors.returnDate = "Return date is required for round trip"
    }
    if (tripType === "roundtrip" && formData.departDate && formData.returnDate) {
      if (new Date(formData.returnDate) <= new Date(formData.departDate)) {
        newErrors.returnDate = "Return date must be after departure date"
      }
    }

    const totalPassengers = formData.passengers.adults + formData.passengers.children + formData.passengers.infants
    if (totalPassengers === 0) {
      newErrors.passengers = "At least one passenger is required"
    }
    if (formData.passengers.adults === 0 && (formData.passengers.children > 0 || formData.passengers.infants > 0)) {
      newErrors.passengers = "At least one adult is required when traveling with children or infants"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-()]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    setErrors({}) // Clear errors when going back
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep2()) return

    setIsSubmitted(true)
    const waLink = formatWhatsAppMessage()

    // Open WhatsApp with pre-filled message
    window.open(waLink, "_blank")

    // Reset form
    setTimeout(() => {
      setIsSubmitted(false)
      setStep(1)
      setFormData({
        from: "",
        to: "",
        departDate: "",
        returnDate: "",
        passengers: {
          adults: 1,
          children: 0,
          infants: 0,
        },
        name: "",
        email: "",
        phone: "",
        message: "",
        images: [],
      })
      setErrors({})
    }, 3000)
  }

  const getTotalPassengers = () => {
    return formData.passengers.adults + formData.passengers.children + formData.passengers.infants
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-2xl rounded-3xl border border-gray-200 overflow-hidden bg-white">
        <CardContent className="p-0">
          {/* Progress indicator */}
          <div className="bg-blue-50 p-4">
            <div className="flex justify-between items-center px-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                      ${step >= item ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
                  >
                    {item}
                  </div>
                  <span className="text-xs mt-1 text-gray-600">
                    {item === 1 ? "Flight Details" : item === 2 ? "Personal Info" : "Confirm"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 flex items-center justify-center gap-2">
              <span className="text-blue-600">
                <Plane className="inline-block" />
              </span>
              {step === 1
                ? "Book Your Flight"
                : step === 2
                  ? "Your Details"
                  : isSubmitted
                    ? "Flight Booking Confirmed!"
                    : "Review & Submit"}
            </h2>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Trip Type Toggle */}
                  <div className="flex justify-center gap-3">
                    {["roundtrip", "oneway", "multicity"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setTripType(type as any)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          tripType === type
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* From and To Fields with Airport Suggestions */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* From Field */}
                    <div className="space-y-2">
                      <Label htmlFor="from" className="flex items-center gap-1 text-gray-700">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        Departure City
                      </Label>
                      <Popover open={openFrom} onOpenChange={setOpenFrom}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openFrom}
                            className={cn(
                              "w-full justify-between rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                              errors.from ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
                              !formData.from && "text-muted-foreground",
                            )}
                          >
                            {formData.from || "Select departure city..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search airports..." />
                            <CommandList>
                              <CommandEmpty>No airport found.</CommandEmpty>
                              <CommandGroup>
                                {airportOptions.map((airport) => (
                                  <CommandItem
                                    key={airport.value}
                                    value={airport.label}
                                    onSelect={() => handleAirportSelect("from", airport.value)}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        formData.from === airport.label ? "opacity-100" : "opacity-0",
                                      )}
                                    />
                                    {airport.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      {errors.from && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.from}
                        </p>
                      )}
                    </div>

                    {/* To Field */}
                    <div className="space-y-2">
                      <Label htmlFor="to" className="flex items-center gap-1 text-gray-700">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        Destination City
                      </Label>
                      <Popover open={openTo} onOpenChange={setOpenTo}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openTo}
                            className={cn(
                              "w-full justify-between rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                              errors.to ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "",
                              !formData.to && "text-muted-foreground",
                            )}
                          >
                            {formData.to || "Select destination city..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search airports..." />
                            <CommandList>
                              <CommandEmpty>No airport found.</CommandEmpty>
                              <CommandGroup>
                                {airportOptions.map((airport) => (
                                  <CommandItem
                                    key={airport.value}
                                    value={airport.label}
                                    onSelect={() => handleAirportSelect("to", airport.value)}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        formData.to === airport.label ? "opacity-100" : "opacity-0",
                                      )}
                                    />
                                    {airport.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      {errors.to && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.to}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="departDate" className="flex items-center gap-1 text-gray-700">
                        <CalendarDays className="w-4 h-4 text-blue-600" />
                        Departure Date
                      </Label>
                      <Input
                        type="date"
                        id="departDate"
                        className={`rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                          errors.departDate ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                        value={formData.departDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                      />
                      {errors.departDate && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.departDate}
                        </p>
                      )}
                    </div>

                    {tripType === "roundtrip" && (
                      <div className="space-y-2">
                        <Label htmlFor="returnDate" className="flex items-center gap-1 text-gray-700">
                          <CalendarDays className="w-4 h-4 text-blue-600" />
                          Return Date
                        </Label>
                        <Input
                          type="date"
                          id="returnDate"
                          className={`rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                            errors.returnDate ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                          }`}
                          value={formData.returnDate}
                          onChange={handleInputChange}
                          min={formData.departDate || new Date().toISOString().split("T")[0]}
                        />
                        {errors.returnDate && (
                          <p className="text-red-500 text-sm flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.returnDate}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Passengers Section */}
                  <div className="space-y-4">
                    <Label className="flex items-center gap-1 text-gray-700">
                      <Users className="w-4 h-4 text-blue-600" />
                      Passengers
                    </Label>
                    <div className="bg-gray-50 p-4 rounded-xl space-y-4">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">Adults</p>
                          <p className="text-sm text-gray-500">12+ years</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("adults", false)}
                            disabled={formData.passengers.adults <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{formData.passengers.adults}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("adults", true)}
                            disabled={getTotalPassengers() >= 9}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">Children</p>
                          <p className="text-sm text-gray-500">2-11 years</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("children", false)}
                            disabled={formData.passengers.children <= 0}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{formData.passengers.children}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("children", true)}
                            disabled={getTotalPassengers() >= 9}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-800">Infants</p>
                          <p className="text-sm text-gray-500">Under 2 years</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("infants", false)}
                            disabled={formData.passengers.infants <= 0}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">{formData.passengers.infants}</span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-8 h-8 p-0 rounded-full bg-transparent"
                            onClick={() => handlePassengerChange("infants", true)}
                            disabled={
                              getTotalPassengers() >= 9 || formData.passengers.infants >= formData.passengers.adults
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    {errors.passengers && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.passengers}
                      </p>
                    )}

                    <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium">
                        Total: {getTotalPassengers()} passenger{getTotalPassengers() !== 1 ? "s" : ""}
                      </p>
                      {formData.passengers.infants > 0 && (
                        <p className="text-xs mt-1">
                          Note: Infants must be accompanied by adults (1 infant per adult maximum)
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    className="w-full mt-4 text-base py-6 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                    size="lg"
                    onClick={nextStep}
                  >
                    Continue to Personal Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-1 text-gray-700">
                        <User className="w-4 h-4 text-blue-600" />
                        Full Name (as on passport)
                      </Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className={`rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                          errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1 text-gray-700">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                          errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1 text-gray-700">
                        <Phone className="w-4 h-4 text-blue-600" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+251 911 123 456"
                        className={`rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500 ${
                          errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""
                        }`}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Image Upload Section */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1 text-gray-700">
                        <Upload className="w-4 h-4 text-blue-600" />
                        Upload Documents/Images (Optional)
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                        <input
                          type="file"
                          id="images"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label htmlFor="images" className="cursor-pointer flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-gray-400" />
                          <p className="text-sm text-gray-600">Click to upload passport, ID, or other documents</p>
                          <p className="text-xs text-gray-500">PNG, JPG up to 5MB each (max 5 files)</p>
                        </label>
                      </div>

                      {/* Display uploaded images */}
                      {formData.images.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 mt-3">
                          {formData.images.map((file, index) => (
                            <div key={index} className="relative group">
                              <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-2">
                                <Upload className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 truncate">
                                  {file instanceof File ? file.name : "Image URL"}
                                </span>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="w-6 h-6 p-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => removeImage(index)}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-1 text-gray-700">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        Special Requests
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Meal preferences, seat selection, accessibility needs, etc."
                        className="rounded-xl min-h-[100px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 py-6 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                      onClick={prevStep}
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      className="flex-1 py-6 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                      onClick={nextStep}
                    >
                      Review Flight Booking
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && !isSubmitted && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Flight Booking Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-blue-600" />
                      Flight Booking Summary
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Trip Type</p>
                        <p className="font-medium">{tripType.charAt(0).toUpperCase() + tripType.slice(1)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Passengers</p>
                        <p className="font-medium">{getTotalPassengers()}</p>
                        <div className="text-xs text-gray-600 mt-1">
                          {formData.passengers.adults > 0 &&
                            `${formData.passengers.adults} Adult${formData.passengers.adults > 1 ? "s" : ""}`}
                          {formData.passengers.children > 0 &&
                            `, ${formData.passengers.children} Child${formData.passengers.children > 1 ? "ren" : ""}`}
                          {formData.passengers.infants > 0 &&
                            `, ${formData.passengers.infants} Infant${formData.passengers.infants > 1 ? "s" : ""}`}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-medium">{formData.from || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">To</p>
                        <p className="font-medium">{formData.to || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Departure Date</p>
                        <p className="font-medium">{formData.departDate || "Not specified"}</p>
                      </div>
                      {tripType === "roundtrip" && (
                        <div>
                          <p className="text-sm text-gray-500">Return Date</p>
                          <p className="font-medium">{formData.returnDate || "Not specified"}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Passenger Information</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{formData.name || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email || "Not provided"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{formData.phone || "Not provided"}</p>
                        </div>
                        {formData.images.length > 0 && (
                          <div>
                            <p className="text-sm text-gray-500">Documents</p>
                            <p className="font-medium">
                              {formData.images.length} file{formData.images.length > 1 ? "s" : ""} uploaded
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {formData.message && (
                      <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">Special Requests</h4>
                        <p className="text-gray-700">{formData.message}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> This is a booking inquiry. Our team will contact you within minutes with
                      flight options and pricing details.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 py-6 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                      onClick={prevStep}
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      className="flex-1 py-6 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                      onClick={handleSubmit}
                    >
                      Submit Flight Inquiry
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && isSubmitted && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Flight Inquiry Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your flight booking inquiry. Our travel experts will contact you within 24 hours with
                    the best flight options and pricing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
