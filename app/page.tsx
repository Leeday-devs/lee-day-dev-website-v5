"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, Zap, CheckCircle } from "lucide-react"
import { AccessibleNavigation } from "@/components/accessible-navigation"
import { OptimizedImage } from "@/components/optimized-image"
import { IntersectionObserver } from "@/components/intersection-observer"
import { PortfolioCarousel } from "@/components/portfolio-carousel"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Pricing } from "@/components/pricing"
import { FAQSection } from "@/components/faq-section"
import { ProcessSection } from "@/components/process-section"
import { TrustBadges, MiniTrustBadges } from "@/components/trust-badges"
import { SocialProofSection } from "@/components/social-proof-section"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

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
      element.focus({ preventScroll: true })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <AccessibleNavigation scrollY={scrollY} onNavigate={scrollToSection} />

      {/* Chat Widget */}
      <ChatWidget />

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Vibrant Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-yellow-400">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-gray-900/60"></div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-teal-400/30 rounded-full blur-sm"></div>
            <div className="absolute right-10 top-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300/20 to-orange-400/20 rounded-full"></div>
            <div className="absolute top-20 right-1/4 w-16 h-16 bg-pink-500/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-500/40 rounded-full animate-bounce"></div>

            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
              <svg width="200" height="100" viewBox="0 0 200 100" className="text-pink-500/60">
                <path d="M10,50 Q100,10 190,50" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </div>

            <div className="absolute bottom-1/3 right-1/4">
              <svg width="150" height="80" viewBox="0 0 150 80" className="text-orange-500/60">
                <path d="M10,40 Q75,10 140,40" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>

            <div className="absolute top-1/4 left-1/3 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-45"></div>
            <div className="absolute bottom-1/4 right-1/3 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 transform -rotate-45"></div>
          </div>

          {/* Main Content Container */}
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-8">
              {/* Left Side - Professional Image */}
              <div className="relative flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/40 to-teal-400/40 rounded-full transform scale-110 blur-lg"></div>
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 border-4 border-white/20 shadow-2xl">
                    <OptimizedImage
                      src="/images/lee-day-professional.png"
                      alt="Lee Day - Professional Web Developer and AI Integration Specialist"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority={true}
                      placeholder="Professional photo loading..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center animate-ping">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-left space-y-8">
                <div className="inline-block">
                  <span className="bg-white/10 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-300/30">
                    WE ARE THE PROFESSIONAL
                  </span>
                </div>

                <div className="space-y-4">
                  <h1
                    id="hero-heading"
                    className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight"
                  >
                    <span className="block text-white drop-shadow-lg">CUSTOM WEB</span>
                    <span className="block text-white drop-shadow-lg">DEVELOPMENT</span>
                    <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                      & AI INTEGRATION
                    </span>
                  </h1>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold text-cyan-300">
                    Supercharge Your Small Business with Us!
                  </h2>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">Our Services</h3>
                    <p className="text-gray-200 leading-relaxed max-w-md">
                      Helping small businesses thrive online with affordable web solutions and smart AI automation. From
                      professional websites to intelligent customer support.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20"
                    onClick={() => scrollToSection("pricing")}
                  >
                    View Pricing
                    <ArrowRight className="ml-2" size={20} />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-cyan-300 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get a Quote
                  </Button>
                </div>

                <div className="flex space-x-4 pt-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" className="w-full h-20 fill-gray-800">
              <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <IntersectionObserver>
          <section
            id="services"
            className="py-20 bg-gray-800 scroll-mt-20 relative overflow-hidden"
            aria-labelledby="services-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <nav className="flex justify-center mb-4" aria-label="Breadcrumb">
                  <ol className="flex items-center space-x-2 text-sm text-gray-400">
                    <li>
                      <button onClick={() => scrollToSection("hero")} className="hover:text-blue-400 transition-colors">
                        Home
                      </button>
                    </li>
                    <li>
                      <span className="mx-2">/</span>
                    </li>
                    <li className="text-blue-400 font-medium">Services</li>
                  </ol>
                </nav>

                <h2
                  id="services-heading"
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight mb-6"
                >
                  <span className="block text-white drop-shadow-lg">PROFESSIONAL WEB</span>
                  <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
                    DEVELOPMENT SERVICES
                  </span>
                </h2>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
                  Transform your small business with our comprehensive digital solutions
                </p>
              </div>

              {/* Service Categories Legend */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                  <span className="text-cyan-300 text-sm font-medium">Web Development</span>
                </div>
                <div className="flex items-center bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/30">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                  <span className="text-pink-300 text-sm font-medium">AI Solutions</span>
                </div>
                <div className="flex items-center bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-300 text-sm font-medium">Hosting & Support</span>
                </div>
                <div className="flex items-center bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-orange-300 text-sm font-medium">E-commerce</span>
                </div>
                <div className="flex items-center bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-yellow-300 text-sm font-medium">Marketing & SEO</span>
                </div>
              </div>

              {/* Services Grid with Flip Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Custom Web Development */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-cyan-500/20 px-2 py-1 rounded-full border border-cyan-500/30">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-1"></div>
                          <span className="text-cyan-300 text-xs font-medium">Web Dev</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors drop-shadow-md">
                            Custom Websites
                          </h3>
                          <span className="text-xs text-cyan-300 font-medium">Professional Presence</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Stand out from competitors</strong> with a professional website
                        that converts visitors into customers and builds instant credibility.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Mobile-First Design
                        </div>
                        <div className="text-cyan-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl border-2 border-cyan-500/50 p-6 flex flex-col justify-between shadow-xl shadow-cyan-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Custom Websites</h3>
                        <div className="text-2xl font-black text-cyan-300 mb-2">from £350</div>
                        <p className="text-gray-200 text-sm mb-4">Complete professional website package</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I'm interested in a custom website for my business. Can we discuss pricing and options?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Customer Support */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-pink-500/20 px-2 py-1 rounded-full border border-pink-500/30">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-1"></div>
                          <span className="text-pink-300 text-xs font-medium">AI</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors drop-shadow-md">
                            AI Support Bots
                          </h3>
                          <span className="text-xs text-pink-300 font-medium">24/7 Availability</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Never miss a customer</strong> again. AI chatbots work around the
                        clock to answer questions and capture leads while you sleep.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Instant Responses
                        </div>
                        <div className="text-pink-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border-2 border-pink-500/50 p-6 flex flex-col justify-between shadow-xl shadow-pink-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">AI Support Bots</h3>
                        <div className="text-2xl font-black text-pink-300 mb-2">from £300</div>
                        <p className="text-gray-200 text-sm mb-4">24/7 intelligent customer support</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I'm interested in AI chatbot solutions for my business. Can we discuss how this can help me?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secure Hosting */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          <span className="text-green-300 text-xs font-medium">Hosting</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-green-300 transition-colors drop-shadow-md">
                            Secure Hosting
                          </h3>
                          <span className="text-xs text-green-300 font-medium">Worry-Free</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Focus on your business</strong> while we handle the technical
                        stuff. Fast, secure hosting with automatic backups and updates.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          99.9% Uptime
                        </div>
                        <div className="text-green-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl border-2 border-green-500/50 p-6 flex flex-col justify-between shadow-xl shadow-green-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure Hosting</h3>
                        <div className="text-2xl font-black text-green-300 mb-2">from £40</div>
                        <p className="text-gray-200 text-sm mb-4">Monthly hosting & maintenance</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I need reliable hosting for my business website. Can we discuss your hosting packages?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* E-commerce Solutions */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-orange-500/20 px-2 py-1 rounded-full border border-orange-500/30">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
                          <span className="text-orange-300 text-xs font-medium">E-commerce</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors drop-shadow-md">
                            E-commerce Sites
                          </h3>
                          <span className="text-xs text-orange-300 font-medium">Online Store</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Start selling online</strong> with a professional e-commerce
                        website that handles payments, inventory, and orders automatically.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Payment Integration
                        </div>
                        <div className="text-orange-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl border-2 border-orange-500/50 p-6 flex flex-col justify-between shadow-xl shadow-orange-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">E-commerce Sites</h3>
                        <div className="text-2xl font-black text-orange-300 mb-2">from £800</div>
                        <p className="text-gray-200 text-sm mb-4">Complete online store solution</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I'm interested in an e-commerce website for my business. Can we discuss online store solutions?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO & Marketing */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-yellow-500/20 px-2 py-1 rounded-full border border-yellow-500/30">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          <span className="text-yellow-300 text-xs font-medium">SEO</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors drop-shadow-md">
                            SEO & Marketing
                          </h3>
                          <span className="text-xs text-yellow-300 font-medium">Get Found Online</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Attract more customers</strong> with local SEO optimization and
                        digital marketing strategies that get your business found online.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Local SEO Focus
                        </div>
                        <div className="text-yellow-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border-2 border-yellow-500/50 p-6 flex flex-col justify-between shadow-xl shadow-yellow-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">SEO & Marketing</h3>
                        <div className="text-2xl font-black text-yellow-300 mb-2">from £200</div>
                        <p className="text-gray-200 text-sm mb-4">Monthly SEO & marketing</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I need help with SEO and digital marketing for my business. Can we discuss strategies to get found online?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Redesign */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                          <span className="text-purple-300 text-xs font-medium">Redesign</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors drop-shadow-md">
                            Website Redesign
                          </h3>
                          <span className="text-xs text-purple-300 font-medium">Fresh New Look</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Modernize your existing website</strong> with a fresh design that
                        converts better and reflects your brand's evolution.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Modern Design
                        </div>
                        <div className="text-purple-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl border-2 border-purple-500/50 p-6 flex flex-col justify-between shadow-xl shadow-purple-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Website Redesign</h3>
                        <div className="text-2xl font-black text-purple-300 mb-2">from £450</div>
                        <p className="text-gray-200 text-sm mb-4">Complete website makeover</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I need a website redesign to modernize my business online. Can we discuss giving my site a fresh new look?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Apps */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-teal-500/20 px-2 py-1 rounded-full border border-teal-500/30">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-1"></div>
                          <span className="text-teal-300 text-xs font-medium">Mobile</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors drop-shadow-md">
                            Mobile Apps
                          </h3>
                          <span className="text-xs text-teal-300 font-medium">iOS & Android</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Reach customers everywhere</strong> with custom mobile apps that
                        work seamlessly on both iOS and Android devices.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Cross-Platform
                        </div>
                        <div className="text-teal-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border-2 border-teal-500/50 p-6 flex flex-col justify-between shadow-xl shadow-teal-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Mobile Apps</h3>
                        <div className="text-2xl font-black text-teal-300 mb-2">from £1200</div>
                        <p className="text-gray-200 text-sm mb-4">Custom mobile app development</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I'm interested in developing a mobile app for my business. Can we discuss mobile app solutions?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Automation */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-indigo-500/20 px-2 py-1 rounded-full border border-indigo-500/30">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-1"></div>
                          <span className="text-indigo-300 text-xs font-medium">Automation</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors drop-shadow-md">
                            Business Automation
                          </h3>
                          <span className="text-xs text-indigo-300 font-medium">Save Time</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Automate repetitive tasks</strong> and streamline your business
                        processes to save time and reduce human error.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          Process Optimization
                        </div>
                        <div className="text-indigo-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border-2 border-indigo-500/50 p-6 flex flex-col justify-between shadow-xl shadow-indigo-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Business Automation</h3>
                        <div className="text-2xl font-black text-indigo-300 mb-2">from £600</div>
                        <p className="text-gray-200 text-sm mb-4">Custom automation solutions</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I want to automate some business processes to save time and improve efficiency. Can we discuss automation solutions?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maintenance & Support */}
                <div className="flip-card group relative h-80">
                  <div className="flip-card-inner">
                    <div className="flip-card-front bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20">
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="flex items-center bg-emerald-500/20 px-2 py-1 rounded-full border border-emerald-500/30">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
                          <span className="text-emerald-300 text-xs font-medium">Support</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors drop-shadow-md">
                            Maintenance & Support
                          </h3>
                          <span className="text-xs text-emerald-300 font-medium">Peace of Mind</span>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 drop-shadow-sm">
                        <strong className="text-white">Keep your website running smoothly</strong> with ongoing
                        maintenance, updates, and technical support when you need it.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-200">
                          <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                          24/7 Monitoring
                        </div>
                        <div className="text-emerald-300 text-xs font-medium">Hover for pricing</div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-xl border-2 border-emerald-500/50 p-6 flex flex-col justify-between shadow-xl shadow-emerald-500/20">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Maintenance & Support</h3>
                        <div className="text-2xl font-black text-emerald-300 mb-2">from £25</div>
                        <p className="text-gray-200 text-sm mb-4">Monthly maintenance plans</p>
                      </div>
                      <div className="space-y-2">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg py-2 text-sm"
                          onClick={() => scrollToSection("contact")}
                        >
                          Get a Quote
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                        <a
                          href="https://wa.me/447586266007?text=Hi! I need ongoing maintenance and support for my website. Can we discuss maintenance plans?"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                        >
                          <WhatsAppIcon className="w-4 h-4 mr-1" />
                          WhatsApp Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </IntersectionObserver>

        {/* Process Section */}
        <IntersectionObserver>
          <section
            id="process"
            className="py-20 bg-gray-900 scroll-mt-20"
            aria-labelledby="process-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="process-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  How We Work Together
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our proven 6-step process ensures your project is delivered on time, on budget, and exceeds your
                  expectations
                </p>
              </div>
              <ProcessSection />
            </div>
          </section>
        </IntersectionObserver>

        {/* Pricing Section - Moved above Portfolio */}
        <IntersectionObserver>
          <section
            id="pricing"
            className="py-20 bg-gray-800 scroll-mt-20"
            aria-labelledby="pricing-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="pricing-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Affordable solutions designed specifically for small businesses. No hidden fees, no surprises.
                </p>
              </div>
              <Pricing />
            </div>
          </section>
        </IntersectionObserver>

        {/* Portfolio Section - Now after Pricing */}
        <IntersectionObserver>
          <section
            id="portfolio"
            className="py-20 bg-gray-900 scroll-mt-20"
            aria-labelledby="portfolio-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="portfolio-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how we've helped small businesses transform their online presence and grow their customer base
                </p>
              </div>
              <PortfolioCarousel />
            </div>
          </section>
        </IntersectionObserver>

        {/* Social Proof Section */}
        <IntersectionObserver>
          <section
            id="social-proof"
            className="py-20 bg-gray-800 scroll-mt-20"
            aria-labelledby="social-proof-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="social-proof-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  Trusted by Small Businesses
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join 50+ small business owners who've transformed their online presence with our solutions
                </p>
              </div>
              <SocialProofSection />
            </div>
          </section>
        </IntersectionObserver>

        {/* Trust Badges Section */}
        <IntersectionObserver>
          <section id="trust" className="py-20 bg-gray-900 scroll-mt-20" aria-labelledby="trust-heading" tabIndex={-1}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <TrustBadges variant="full" />
            </div>
          </section>
        </IntersectionObserver>

        {/* Testimonials Section */}
        <IntersectionObserver>
          <section
            id="testimonials"
            className="py-20 bg-gray-800 scroll-mt-20"
            aria-labelledby="testimonials-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="testimonials-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real feedback from real small business owners who've seen real results
                </p>
              </div>
              <Testimonials />
            </div>
          </section>
        </IntersectionObserver>

        {/* About Section */}
        <IntersectionObserver>
          <section id="about" className="py-20 bg-gray-900 scroll-mt-20" aria-labelledby="about-heading" tabIndex={-1}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    id="about-heading"
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                  >
                    About Lee Day
                  </h2>
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      Hi, I'm Lee Day, a passionate web developer and AI integration specialist based in London. I've
                      been helping small businesses establish their online presence and leverage cutting-edge technology
                      to grow their customer base.
                    </p>
                    <p>
                      With over 5 years of experience in web development and a deep understanding of AI technologies, I
                      specialize in creating affordable, effective solutions that deliver real results for small
                      business owners.
                    </p>
                    <p>
                      My mission is simple: to make professional web development and AI automation accessible to every
                      small business, regardless of budget or technical expertise.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                      <div className="text-gray-300 text-sm">Projects Completed</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                      <div className="text-gray-300 text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl transform rotate-3 blur-lg"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                      <OptimizedImage
                        src="/images/lee-day-about.png"
                        alt="Lee Day working on web development projects in his modern office setup"
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-xl"
                        placeholder="About image loading..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </IntersectionObserver>

        {/* Contact Section */}
        <IntersectionObserver>
          <section
            id="contact"
            className="py-20 bg-gray-800 scroll-mt-20"
            aria-labelledby="contact-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="contact-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  Get Your Free Quote
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Ready to transform your small business with a professional website and AI automation? Let's discuss
                  your project and create a solution that fits your budget and goals.
                </p>
                <MiniTrustBadges />
              </div>
              <ContactForm />
            </div>
          </section>
        </IntersectionObserver>

        {/* FAQ Section */}
        <IntersectionObserver>
          <section id="faq" className="py-20 bg-gray-900 scroll-mt-20" aria-labelledby="faq-heading" tabIndex={-1}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2
                  id="faq-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 section-title"
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Get answers to common questions about our web development and AI services
                </p>
              </div>
              <FAQSection />
            </div>
          </section>
        </IntersectionObserver>
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  )
}
