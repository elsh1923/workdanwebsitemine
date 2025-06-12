'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CalendarDays, MapPin, Users, User, Mail, Phone, MessageSquare, ArrowRight, ArrowLeft, Plane, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BookingForm() {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway' | 'multicity'>('roundtrip')
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    travelers: '1',
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    setStep(prev => prev + 1)
  }

  const prevStep = () => {
    setStep(prev => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Flight Booking Form submitted:', formData)
    setIsSubmitted(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setStep(1)
      setFormData({
        from: '',
        to: '',
        departDate: '',
        returnDate: '',
        travelers: '1',
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
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
                      ${step >= item ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {item}
                  </div>
                  <span className="text-xs mt-1 text-gray-600">
                    {item === 1 ? 'Flight Details' : item === 2 ? 'Personal Info' : 'Confirm'}
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
              {step === 1 ? 'Book Your Flight' : 
               step === 2 ? 'Your Details' : 
               isSubmitted ? 'Flight Booking Confirmed!' : 'Review & Submit'}
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
                    {['roundtrip', 'oneway', 'multicity'].map(type => (
                      <button
                        key={type}
                        onClick={() => setTripType(type as any)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          tripType === type
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* From and To Fields */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="from" className="flex items-center gap-1 text-gray-700">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        Departure City
                      </Label>
                      <Input 
                        id="from" 
                        placeholder="e.g., Addis Ababa (ADD)" 
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.from}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to" className="flex items-center gap-1 text-gray-700">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        Destination City
                      </Label>
                      <Input 
                        id="to" 
                        placeholder="e.g., Lalibela (LLI), Gondar (GDQ)" 
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.to}
                        onChange={handleInputChange}
                      />
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
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.departDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    {tripType === 'roundtrip' && (
                      <div className="space-y-2">
                        <Label htmlFor="returnDate" className="flex items-center gap-1 text-gray-700">
                          <CalendarDays className="w-4 h-4 text-blue-600" />
                          Return Date
                        </Label>
                        <Input 
                          type="date" 
                          id="returnDate" 
                          className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          value={formData.returnDate}
                          onChange={handleInputChange}
                          min={formData.departDate || new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    )}
                  </div>

                  {/* Passengers */}
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="flex items-center gap-1 text-gray-700">
                      <Users className="w-4 h-4 text-blue-600" />
                      Number of Passengers
                    </Label>
                    <Select 
                      value={formData.travelers} 
                      onValueChange={(value) => handleSelectChange(value, 'travelers')}
                    >
                      <SelectTrigger className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Select number of passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Passenger' : 'Passengers'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
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
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1 text-gray-700">
                        <Phone className="w-4 h-4 text-blue-600" />
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        placeholder="+251 911 123 456" 
                        className="rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
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
                      className="flex-1 py-6 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100"
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
                        <p className="font-medium">
                          {tripType.charAt(0).toUpperCase() + tripType.slice(1)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Passengers</p>
                        <p className="font-medium">{formData.travelers}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">From</p>
                        <p className="font-medium">{formData.from || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">To</p>
                        <p className="font-medium">{formData.to || 'Not specified'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Departure Date</p>
                        <p className="font-medium">{formData.departDate || 'Not specified'}</p>
                      </div>
                      {tripType === 'roundtrip' && (
                        <div>
                          <p className="text-sm text-gray-500">Return Date</p>
                          <p className="font-medium">{formData.returnDate || 'Not specified'}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">Passenger Information</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{formData.name || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{formData.phone || 'Not provided'}</p>
                        </div>
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
                      <strong>Note:</strong> This is a booking inquiry. Our team will contact you within 24 hours with flight options and pricing details.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      className="flex-1 py-6 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-100"
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
                    Thank you for your flight booking inquiry. Our travel experts will contact you within 24 hours with the best flight options and pricing.
                  </p>
                  <p className="text-sm text-gray-500">
                    Confirmation details have been sent to {formData.email || 'your email address'}
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