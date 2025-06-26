"use client"

import { useState } from "react"
import { Star, Quote, ArrowLeft, ArrowRight, Users, Award, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialProofItem {
  id: string
  type: "review" | "case_study" | "testimonial"
  name: string
  company: string
  role: string
  content: string
  rating: number
  image: string
  businessType: string
  results?: {
    metric: string
    improvement: string
    timeframe: string
  }
  verified: boolean
}

const socialProofData: SocialProofItem[] = [
  {
    id: "1",
    type: "case_study",
    name: "Sarah Mitchell",
    company: "Mitchell's Bakery",
    role: "Owner",
    content:
      "LD Web Development transformed our bakery's online presence. The AI chatbot handles customer inquiries 24/7, and our online orders increased by 150% in just 3 months!",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=SM",
    businessType: "Local Bakery",
    results: {
      metric: "Online Orders",
      improvement: "+150%",
      timeframe: "3 months",
    },
    verified: true,
  },
  {
    id: "2",
    type: "testimonial",
    name: "James Thompson",
    company: "Thompson Plumbing",
    role: "Managing Director",
    content:
      "The AI booking system has been a game-changer. Customers can book appointments anytime, and we've reduced missed calls by 80%. Lee delivered exactly what we needed.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=JT",
    businessType: "Plumbing Services",
    results: {
      metric: "Missed Calls",
      improvement: "-80%",
      timeframe: "2 months",
    },
    verified: true,
  },
  {
    id: "3",
    type: "review",
    name: "Emma Rodriguez",
    company: "Bloom Flower Studio",
    role: "Creative Director",
    content:
      "The custom CMS makes it so easy to update our seasonal arrangements. The website perfectly captures our brand aesthetic and attracts new customers daily.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=ER",
    businessType: "Flower Shop",
    verified: true,
  },
  {
    id: "4",
    type: "case_study",
    name: "Michael Chen",
    company: "Chen's Auto Repair",
    role: "Owner",
    content:
      "The AI assistant handles bookings and basic questions, saving us hours every week. Our customers love the instant responses, and we can focus on fixing cars.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60&text=MC",
    businessType: "Auto Repair",
    results: {
      metric: "Time Saved",
      improvement: "15 hours/week",
      timeframe: "Ongoing",
    },
    verified: true,
  },
]

const trustStats = [
  {
    number: "50+",
    label: "Happy Clients",
    icon: <Users className="w-6 h-6" />,
    color: "blue",
  },
  {
    number: "5.0",
    label: "Average Rating",
    icon: <Star className="w-6 h-6" />,
    color: "yellow",
  },
  {
    number: "100%",
    label: "Satisfaction Rate",
    icon: <Award className="w-6 h-6" />,
    color: "green",
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <Clock className="w-6 h-6" />,
    color: "purple",
  },
]

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filter, setFilter] = useState<"all" | "review" | "case_study" | "testimonial">("all")

  const filteredData = filter === "all" ? socialProofData : socialProofData.filter((item) => item.type === filter)

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredData.length) % filteredData.length)
  }

  const currentItem = filteredData[currentIndex]

  return (
    <div className="space-y-12">
      {/* Trust Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trustStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
          >
            <div
              className={`text-${stat.color}-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              {stat.icon}
            </div>
            <div className={`text-2xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
            <div className="text-gray-300 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { key: "all", label: "All Feedback" },
          { key: "case_study", label: "Case Studies" },
          { key: "testimonial", label: "Testimonials" },
          { key: "review", label: "Reviews" },
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => {
              setFilter(filterOption.key as any)
              setCurrentIndex(0)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === filterOption.key
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Main Social Proof Display */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-teal-500/10 rounded-full blur-xl"></div>

          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-20">
            <Quote className="w-12 h-12 text-blue-400" />
          </div>

          <div className="relative z-10">
            {/* Type Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentItem.type === "case_study"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : currentItem.type === "testimonial"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  }`}
                >
                  {currentItem.type === "case_study"
                    ? "Case Study"
                    : currentItem.type === "testimonial"
                      ? "Testimonial"
                      : "Review"}
                </span>
                {currentItem.verified && (
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">Verified</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < currentItem.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                  />
                ))}
                <span className="ml-2 text-gray-400 text-sm">({currentItem.rating}.0)</span>
              </div>
            </div>

            {/* Content */}
            <blockquote className="text-lg text-gray-200 leading-relaxed mb-6 italic">
              "{currentItem.content}"
            </blockquote>

            {/* Results (for case studies) */}
            {currentItem.results && (
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
                <h4 className="text-white font-semibold mb-2">Results Achieved:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">{currentItem.results.improvement}</div>
                    <div className="text-gray-300 text-sm">{currentItem.results.metric}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">{currentItem.results.timeframe}</div>
                    <div className="text-gray-300 text-sm">Timeframe</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">ROI</div>
                    <div className="text-gray-300 text-sm">Positive Return</div>
                  </div>
                </div>
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {currentItem.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                    <span className="text-xs text-white">✓</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-white">{currentItem.name}</div>
                  <div className="text-blue-400 text-sm font-medium">{currentItem.role}</div>
                  <div className="text-gray-400 text-sm">{currentItem.company}</div>
                </div>
              </div>

              {/* Business Type Badge */}
              <div className="hidden sm:block">
                <span className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600/50">
                  {currentItem.businessType}
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
            onClick={prevItem}
            className="text-gray-400 hover:text-white hover:bg-gray-800/50 p-2 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {filteredData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextItem}
            className="text-gray-400 hover:text-white hover:bg-gray-800/50 p-2 rounded-full"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-gray-300 mb-4">
          Join 50+ small businesses who've transformed their online presence with LD Web Development
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          Start Your Success Story
        </Button>
      </div>
    </div>
  )
}
