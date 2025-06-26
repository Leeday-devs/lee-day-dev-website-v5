"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  rating: number
  image: string
  businessType: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Mitchell's Bakery",
    role: "Owner",
    content:
      "LD Web Development transformed our bakery's online presence. The AI chatbot handles customer inquiries 24/7, and our online orders increased by 150% in just 3 months!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=SM",
    businessType: "Local Bakery",
  },
  {
    id: 2,
    name: "James Thompson",
    company: "Thompson Plumbing",
    role: "Managing Director",
    content:
      "The AI booking system has been a game-changer. Customers can book appointments anytime, and we've reduced missed calls by 80%. Lee delivered exactly what we needed.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=JT",
    businessType: "Plumbing Services",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    company: "Bloom Flower Studio",
    role: "Creative Director",
    content:
      "The custom CMS makes it so easy to update our seasonal arrangements. The website perfectly captures our brand aesthetic and attracts new customers daily.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=ER",
    businessType: "Flower Shop",
  },
  {
    id: 4,
    name: "Michael Chen",
    company: "Chen's Auto Repair",
    role: "Owner",
    content:
      "The AI assistant handles bookings and basic questions, saving us hours every week. Our customers love the instant responses, and we can focus on fixing cars.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=MC",
    businessType: "Auto Repair",
  },
  {
    id: 5,
    name: "Lisa Parker",
    company: "Parker Legal Services",
    role: "Solicitor",
    content:
      "Professional, reliable, and understanding of small business needs. The website has helped establish credibility with new clients and the maintenance is worry-free.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=LP",
    businessType: "Legal Services",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 rounded-full blur-xl"></div>

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-20">
          <Quote className="w-12 h-12 text-blue-400" />
        </div>

        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < currentTestimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-400 text-sm">({currentTestimonial.rating}.0)</span>
          </div>

          {/* Testimonial Content */}
          <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 italic">
            "{currentTestimonial.content}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {currentTestimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">{currentTestimonial.name}</div>
                <div className="text-blue-400 text-sm font-medium">{currentTestimonial.role}</div>
                <div className="text-gray-400 text-sm">{currentTestimonial.company}</div>
              </div>
            </div>

            {/* Business Type Badge */}
            <div className="hidden sm:block">
              <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600/50">
                {currentTestimonial.businessType}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={prevTestimonial}
          className="text-gray-400 hover:text-white hover:bg-gray-800/50 p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={nextTestimonial}
          className="text-gray-400 hover:text-white hover:bg-gray-800/50 p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Compact Trust Indicators */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
          <div className="text-xl font-bold text-green-400 mb-1">50+</div>
          <div className="text-gray-400 text-xs">Happy Clients</div>
        </div>
        <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
          <div className="text-xl font-bold text-blue-400 mb-1">5.0</div>
          <div className="text-gray-400 text-xs">Average Rating</div>
        </div>
        <div className="text-center p-4 bg-gray-900/30 rounded-xl border border-gray-700/30">
          <div className="text-xl font-bold text-purple-400 mb-1">100%</div>
          <div className="text-gray-400 text-xs">Satisfaction</div>
        </div>
      </div>
    </div>
  )
}
