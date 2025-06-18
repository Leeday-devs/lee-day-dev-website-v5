"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ExternalLink, Code, Brain, Server } from "lucide-react"

interface PortfolioItem {
  id: number
  name: string
  description: string
  role: string
  services: string[]
  image: string
  url?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "TechCorp Solutions",
    description: "Modern corporate website with integrated AI chatbot for customer support and lead generation.",
    role: "Full-Stack Development & AI Integration",
    services: ["Custom Development", "AI Chatbot", "Hosting & Maintenance"],
    image: "/placeholder.svg?height=400&width=600&text=TechCorp+Solutions+Website",
    url: "https://techcorp-demo.com",
  },
  {
    id: 2,
    name: "EcoGreen Marketplace",
    description: "E-commerce platform with AI-powered product recommendations and automated inventory management.",
    role: "E-commerce Development & AI Tools",
    services: ["E-commerce Platform", "AI Recommendations", "Cloud Hosting"],
    image: "/placeholder.svg?height=400&width=600&text=EcoGreen+Marketplace+Dashboard",
    url: "https://ecogreen-demo.com",
  },
  {
    id: 3,
    name: "MedCare Portal",
    description: "Healthcare management system with AI appointment scheduling and patient communication tools.",
    role: "Healthcare Platform & AI Automation",
    services: ["Custom Platform", "AI Scheduling", "Secure Hosting"],
    image: "/placeholder.svg?height=400&width=600&text=MedCare+Portal+Interface",
    url: "https://medcare-demo.com",
  },
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const openLightbox = (item: PortfolioItem) => {
    setLightboxImage(item)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
  }

  const getServiceIcon = (service: string) => {
    if (service.includes("Development") || service.includes("Platform")) return <Code className="w-4 h-4" />
    if (service.includes("AI") || service.includes("Chatbot")) return <Brain className="w-4 h-4" />
    if (service.includes("Hosting")) return <Server className="w-4 h-4" />
    return <Code className="w-4 h-4" />
  }

  return (
    <>
      <div className="relative">
        {/* Main Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                  {/* Image Section */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl bg-gray-900 border border-gray-600">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.name} - ${item.description} - Web development project by Lee Day`}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={() => openLightbox(item)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                          onClick={() => openLightbox(item)}
                        >
                          View Full Size
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-blue-400 font-semibold mb-4">{item.role}</p>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-3">
                      {item.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-gray-900/50 px-3 py-2 rounded-full border border-gray-600/50"
                        >
                          {getServiceIcon(service)}
                          <span className="text-sm text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    {item.url && (
                      <Button
                        variant="outline"
                        className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                        onClick={() => window.open(item.url, "_blank")}
                      >
                        View Live Site
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-2 text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
              <div className="relative">
                <img
                  src={lightboxImage.image || "/placeholder.svg"}
                  alt={`${lightboxImage.name} - Detailed view of ${lightboxImage.role} project showcasing ${lightboxImage.services.join(", ")}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.name}</h3>
                <p className="text-blue-400 font-semibold mb-3">{lightboxImage.role}</p>
                <p className="text-gray-300 mb-4">{lightboxImage.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lightboxImage.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600/50"
                    >
                      {getServiceIcon(service)}
                      <span className="text-sm text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>

                {lightboxImage.url && (
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={() => window.open(lightboxImage.url, "_blank")}
                  >
                    View Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
