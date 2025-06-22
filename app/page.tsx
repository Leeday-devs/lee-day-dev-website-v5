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
          {/* ... Rest of the component code ... */}
        </section>

        {/* ... Other sections ... */}

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 no-print" role="contentinfo">
          {/* ... Footer content ... */}
        </footer>
      </main>
    </div>
  )