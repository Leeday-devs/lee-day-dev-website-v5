"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, Zap, CheckCircle, Smartphone, Globe, Database, Cpu, Bot, Layers, Terminal, Wifi, Cloud, Rocket, Settings, Monitor, Mail, Phone, MapPin, Clock, Users } from "lucide-react"
import { PortfolioCarousel } from "@/components/portfolio-carousel"
import { ContactForm } from "@/components/contact-form"
import { AccessibleNavigation } from "@/components/accessible-navigation"
import { OptimizedImage } from "@/components/optimized-image"
import { IntersectionObserver } from "@/components/intersection-observer"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      // Update focus for screen readers
      element.focus({ preventScroll: true })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <AccessibleNavigation scrollY={scrollY} onNavigate={scrollToSection} />

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Building amazing digital experiences
            </p>
            <Button onClick={() => scrollToSection('about')} className="bg-blue-600 hover:bg-blue-700">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-300">
              We are passionate developers creating innovative solutions for the modern web.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 no-print" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">© 2024 Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}