"use client"

import React from 'react'
import Image from 'next/image'
import { Box, Container, Typography, Chip } from "@mui/material"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Plane, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    // console.log("Form submitted:", formData)
    const {
      name,
      email,
      phone,
      service,
      message,
  } = formData

  // WhatsApp redirect URL (your business number below)
  const messages = `
    *Name*: ${name}
    *Email*: ${email}
    *Phone*: ${phone}
    *Service*: ${service}
    *Message*: ${message || 'N/A'}
  `.trim()

   // WhatsApp redirect URL (your business number below)
    const phoneNumber = "251906700007" // <- Replace with your WhatsApp number (without +)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages)}`

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div>
      <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)", /* A dark, semi-transparent black */
              zIndex: 1,
            },
          }}
        >
          <Box
            component="img"
            src="/about-us/aboutUs-hero-section.png?height=1080&width=1920&text=Ethiopian+Landscape"
            alt="About Wanderlust Chronicles"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, color: "white", textAlign: "left" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "5rem" },
              mb: 2,
              textShadow: "0 4px 8px rgba(0,0,0,0.3)",
              background: "linear-gradient(135deg, rgba(65, 105, 225, 0.8) 0%, rgba(0, 0, 255, 0.9) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h4"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 4,
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              fontWeight: 300,
            }}
          >

          </Typography>
        </Container>
      </Box>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to embark on your next adventure? We're here to help you plan the perfect journey. Contact us today
            and let's make your travel dreams come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-teal-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-teal-100">
                  Fill out the form below and we'll get back to you within minutes.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+xxx xxxx xxxx"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700 font-medium">
                        Service Interest
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="border-gray-300 focus:border-teal-500 focus:ring-teal-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="desert-safari">Desert Safari</SelectItem>
                          <SelectItem value="city-tours">City Tours</SelectItem>
                          <SelectItem value="adventure-packages">Adventure Packages</SelectItem>
                          <SelectItem value="travel-planning">Travel Planning & Consultation</SelectItem>
                          <SelectItem value="business-consulting">UAE Business Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium rounded-lg transition-colors duration-200"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gray-900 text-white rounded-t-lg">
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Sharjah Business Center,
                      <br />
                      Ground Floor, UAE
                      <br />
                      {/* P.O. Box 12345 */}
                    </p>
                    <br />
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Addis Ababa Office
                      <br />
                      Megenagna Wach Bldg. 2nd Floor, 1000 ADDIS ABABA, Ethiopia
                      <br />
                      {/* P.O. Box 12345 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600 text-sm">
                      Main: +251 906700007
                      <br />
                      WhatsApp: +251 906700007
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600 text-sm">
                    workdantrading@gmail.com
                      <br />
                      workdaneuae@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-teal-500 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Monday - Sunday</span>
                    <span className="text-gray-600">24/7 Open</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Emergency Support:</strong> Available 24/7 for existing bookings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white justify-start" asChild>
                  <a href="https://wa.me/+251906700007" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-3 h-5 w-5" />
                    WhatsApp Chat
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-600 hover:bg-teal-50 justify-start"
                  asChild
                >
                  <a href="tel:+251906700007">
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-16">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gray-900 text-white">
              <CardTitle className="text-2xl">Find Us</CardTitle>
              <CardDescription className="text-gray-300">
                Visit our office in the heart of Dubai's Business Bay
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Google Maps integration would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Call to Action */}
        {/* <div className="mt-16 text-center bg-gradient-to-r from-teal-500 to-orange-500 rounded-2xl p-12 text-white">
          <Plane className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Let's turn your travel dreams into unforgettable memories</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium">
              <Users className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg font-medium"
            >
              <Plane className="mr-2 h-5 w-5" />
              View Packages
            </Button>
          </div>
        </div> */}
      </div>
    </section>
      </Box>
    </div>
  )
}

export default ContactPage
