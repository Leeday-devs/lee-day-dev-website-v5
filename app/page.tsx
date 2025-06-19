"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Brain, Zap, CheckCircle, TrendingUp } from "lucide-react"
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
          {/* Background with improved contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "30px 30px",
              }}
              aria-hidden="true"
            ></div>
          </div>

          {/* Floating Background Elements - Repositioned to not overlap main content */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left Code Snippet */}
            <div className="absolute top-20 left-4 lg:left-10 opacity-15 animate-float-slow">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 backdrop-blur-sm max-w-xs">
                <div className="text-blue-400 text-xs font-mono">
                  {'<div className="hero">'}
                  <br />
                  {"  <h1>Welcome</h1>"}
                  <br />
                  {"</div>"}
                </div>
              </div>
            </div>

            {/* Top Right AI Code */}
            <div className="absolute top-32 right-4 lg:right-20 opacity-15 animate-float-medium">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3 backdrop-blur-sm max-w-xs">
                <div className="text-purple-400 text-xs font-mono">
                  {"AI.chat({"}
                  <br />
                  {'  model: "gpt-4"'}
                  <br />
                  {"})"}
                </div>
              </div>
            </div>

            {/* Bottom Left API Code */}
            <div className="absolute bottom-32 left-4 lg:left-20 opacity-15 animate-float-fast">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 backdrop-blur-sm max-w-xs">
                <div className="text-green-400 text-xs font-mono">
                  {"const api = await"}
                  <br />
                  {'  fetch("/api/ai")'}
                </div>
              </div>
            </div>

            {/* Bottom Right Mobile Mockup */}
            <div className="absolute bottom-20 right-4 lg:right-10 opacity-20 animate-float-mobile">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-700/50 w-32 lg:w-40">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  <div className="bg-gray-900 px-3 py-1 flex items-center justify-center">
                    <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-1 animate-spin-slow"></div>
                      <div className="text-white text-xs font-bold">Mobile</div>
                    </div>
                    <div className="space-y-1">
                      <div className="bg-gray-700/50 rounded p-1">
                        <div className="w-full h-1 bg-blue-400/50 rounded animate-progress"></div>
                      </div>
                      <div className="bg-gray-700/50 rounded p-1">
                        <div className="w-3/4 h-1 bg-green-400/50 rounded animate-progress delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area with Better Contrast */}
          <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Main Content Background for Better Readability */}
              <div className="relative">
                {/* Content Background Overlay */}
                <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm rounded-3xl -m-8 border border-gray-700/30"></div>

                {/* Main Content */}
                <div className="relative z-10 py-16 px-8">
                  <div className="animate-fade-in-up">
                    <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      <span className="block bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                        Custom Web Development
                      </span>
                      <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        & AI Integration
                      </span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                      Transform your business with cutting-edge web solutions and intelligent AI integration. From
                      concept to deployment, LD Web Development delivers exceptional digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => scrollToSection("portfolio")}
                        aria-describedby="portfolio-button-description"
                      >
                        See Portfolio
                        <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                        <span id="portfolio-button-description" className="sr-only">
                          View featured projects and case studies
                        </span>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 backdrop-blur-sm"
                        onClick={() => scrollToSection("contact")}
                        aria-describedby="quote-button-description"
                      >
                        Get a Quote
                        <span id="quote-button-description" className="sr-only">
                          Contact us for a free project consultation
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Floating Elements - Positioned to not interfere with main content */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Left Side - AI Chat Widget */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 animate-float-chat opacity-80">
              <div className="bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-cyan-400/30 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">AI Assistant</div>
                    <div className="text-cyan-100 text-xs flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                      Online
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="bg-white/10 rounded-lg p-2 animate-message-appear">
                    <div className="text-white text-xs">👋 Hi! How can I help you today?</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 ml-4 animate-message-appear delay-1000">
                    <div className="text-white text-xs">I need a website for my business</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 animate-message-appear delay-2000">
                    <div className="text-white text-xs">Perfect! I can help you create a professional website.</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-white/10 rounded-full px-3 py-1">
                    <div className="text-white/60 text-xs animate-typing-dots">Typing...</div>
                  </div>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Analytics Dashboard */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 animate-float-analytics opacity-80">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-gray-700/50 max-w-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white font-medium text-sm">Analytics</div>
                  <div className="text-green-400 text-xs flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +24%
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Visitors</span>
                    <span className="text-white text-sm font-bold animate-counter">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Conversions</span>
                    <span className="text-green-400 text-sm font-bold animate-counter delay-300">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">AI Interactions</span>
                    <span className="text-blue-400 text-sm font-bold animate-counter delay-600">342</span>
                  </div>

                  {/* Mini Chart */}
                  <div className="flex items-end space-x-1 h-8">
                    <div className="bg-blue-500/50 w-2 h-4 rounded animate-bar-grow"></div>
                    <div className="bg-blue-500/70 w-2 h-6 rounded animate-bar-grow delay-100"></div>
                    <div className="bg-blue-500 w-2 h-8 rounded animate-bar-grow delay-200"></div>
                    <div className="bg-blue-500/80 w-2 h-5 rounded animate-bar-grow delay-300"></div>
                    <div className="bg-blue-500/60 w-2 h-7 rounded animate-bar-grow delay-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Showcase - Website Preview */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 pointer-events-none hidden md:block">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden opacity-60 animate-pulse-glow">
              {/* Browser Header */}
              <div className="bg-gray-900/90 px-4 py-2 flex items-center space-x-2 border-b border-gray-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <div className="flex-1 bg-gray-800/50 rounded-md px-3 py-1 ml-4">
                  <div className="text-gray-400 text-sm font-mono animate-typing">https://your-business.com</div>
                </div>
              </div>

              {/* Website Preview Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between animate-slide-in-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg animate-spin-slow"></div>
                    <div className="text-white font-bold text-sm">Your Business</div>
                  </div>
                  <div className="flex space-x-4 text-xs text-gray-300">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="text-center py-4 animate-fade-in-up">
                  <h2 className="text-lg font-bold text-white mb-2 animate-text-shimmer">
                    Transform Your Business Online
                  </h2>
                  <div className="inline-flex bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm animate-bounce-subtle">
                    Get Started
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-30" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <IntersectionObserver>
          <section
            id="services"
            className="py-20 bg-gray-800 scroll-mt-20"
            aria-labelledby="services-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-responsive-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Professional Web Development Services
                  </span>
                </h2>
                <p className="text-responsive-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive web and AI solutions tailored to your business needs
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Custom Web Development */}
                <article className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-16 h-16 text-blue-400 group-hover:text-blue-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    Custom Web Development
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-responsive-base">
                    Modern, responsive websites built with cutting-edge technologies. From sleek landing pages to
                    complex web applications that drive business growth.
                  </p>
                  <button
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 group-hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
                    aria-label="Learn more about custom web development services"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </button>
                </article>

                {/* Hosting & Maintenance */}
                <article className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/10">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-16 h-16 text-green-400 group-hover:text-green-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300">
                    Hosting & Maintenance
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-responsive-base">
                    Reliable hosting solutions with ongoing maintenance and support. Keep your website fast, secure, and
                    running smoothly with proactive monitoring.
                  </p>
                  <button
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-all duration-300 group-hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-md p-1"
                    aria-label="Learn more about hosting and maintenance services"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </button>
                </article>

                {/* AI Assistant Integration */}
                <article className="group bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 md:col-span-2 lg:col-span-1">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-16 h-16 text-purple-400 group-hover:text-purple-300" aria-hidden="true" />
                  </div>
                  <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    AI Assistant Integration
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-responsive-base">
                    Intelligent chatbots and AI assistants that enhance user experience. Automate customer support and
                    streamline business processes with smart automation.
                  </p>
                  <button
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-all duration-300 group-hover:translate-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 rounded-md p-1"
                    aria-label="Learn more about AI assistant integration services"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </button>
                </article>
              </div>
            </div>
          </section>
        </IntersectionObserver>

        {/* Portfolio Section */}
        <IntersectionObserver>
          <section
            id="portfolio"
            className="py-20 bg-gray-900 scroll-mt-20"
            aria-labelledby="portfolio-heading"
            tabIndex={-1}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="portfolio-heading" className="text-responsive-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Portfolio Projects
                  </span>
                </h2>
                <p className="text-responsive-xl text-gray-300 max-w-3xl mx-auto">
                  Explore some of our recent projects showcasing custom development, AI integration, and comprehensive
                  hosting solutions
                </p>
              </div>

              <PortfolioCarousel />
            </div>
          </section>
        </IntersectionObserver>

        {/* AI Portal Feature Highlight Section */}
        <IntersectionObserver>
          <section
            className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            aria-labelledby="ai-portal-heading"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Section */}
                <div className="animate-slide-in-left">
                  <div className="mb-8">
                    <h2 id="ai-portal-heading" className="text-responsive-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        LD Development AI Portal
                      </span>
                      <br />
                      <span className="text-white">Advanced AI Management Platform</span>
                    </h2>
                    <p className="text-responsive-xl text-gray-300 leading-relaxed">
                      Powerful AI management platform designed for businesses to deploy, monitor, and optimize their AI
                      assistants with ease.
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-4 mb-8" role="list">
                    <li className="flex items-center group">
                      <div
                        className="w-2 h-2 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"
                        aria-hidden="true"
                      ></div>
                      <span className="text-responsive-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                        Manage AI assistants from a centralized dashboard
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <div
                        className="w-2 h-2 bg-blue-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"
                        aria-hidden="true"
                      ></div>
                      <span className="text-responsive-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                        Deploy custom-trained bots tailored to your business
                      </span>
                    </li>
                    <li className="flex items-center group">
                      <div
                        className="w-2 h-2 bg-purple-400 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"
                        aria-hidden="true"
                      ></div>
                      <span className="text-responsive-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                        Secure client log-in with role-based access control
                      </span>
                    </li>
                  </ul>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-responsive-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                    aria-describedby="ai-portal-button-description"
                  >
                    Explore AI Portal
                    <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                    <span id="ai-portal-button-description" className="sr-only">
                      Learn more about the LD Development AI Portal features and capabilities
                    </span>
                  </Button>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative animate-slide-in-right">
                  {/* Background Glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"
                    aria-hidden="true"
                  ></div>

                  {/* Main Dashboard Container */}
                  <div
                    className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl"
                    role="img"
                    aria-label="AI Portal Dashboard interface showing active bots, conversations, and client statistics"
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-white" aria-hidden="true" />
                        </div>
                        <span className="text-white font-semibold">AI Portal Dashboard</span>
                      </div>
                      <div className="flex space-x-2" aria-label="Connection status indicators">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" title="Connected"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" title="Warning"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full" title="Offline"></div>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                        <div className="text-cyan-400 text-sm font-medium">Active Bots</div>
                        <div className="text-white text-xl font-bold">12</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                        <div className="text-blue-400 text-sm font-medium">Conversations</div>
                        <div className="text-white text-xl font-bold">1.2k</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600/30">
                        <div className="text-purple-400 text-sm font-medium">Clients</div>
                        <div className="text-white text-xl font-bold">24</div>
                      </div>
                    </div>

                    {/* AI Assistant List */}
                    <div className="space-y-3">
                      <div className="text-gray-300 text-sm font-medium mb-2">AI Assistants</div>

                      <div className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-600/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">CS</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Customer Support Bot</div>
                            <div className="text-gray-400 text-xs">Active • 24/7</div>
                          </div>
                        </div>
                        <div
                          className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                          aria-label="Active status"
                        ></div>
                      </div>

                      <div className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-600/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">SB</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Sales Bot</div>
                            <div className="text-gray-400 text-xs">Training • 85% complete</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" aria-label="Training status"></div>
                      </div>

                      <div className="flex items-center justify-between bg-gray-900/30 rounded-lg p-3 border border-gray-600/20">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">TB</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">Tech Support Bot</div>
                            <div className="text-gray-400 text-xs">Scheduled • Launches tomorrow</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full" aria-label="Scheduled status"></div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-600/30">
                      <div className="flex space-x-2" aria-label="Dashboard controls">
                        <div className="w-6 h-6 bg-cyan-500/20 rounded border border-cyan-500/30 flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                        <div className="w-6 h-6 bg-gray-600/20 rounded border border-gray-600/30"></div>
                        <div className="w-6 h-6 bg-gray-600/20 rounded border border-gray-600/30"></div>
                      </div>
                      <div className="text-xs text-gray-400">Last updated: 2 min ago</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </IntersectionObserver>

        {/* About Section */}
        <IntersectionObserver>
          <section id="about" className="py-20 bg-gray-900 scroll-mt-20" aria-labelledby="about-heading" tabIndex={-1}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Photo Section */}
                <div className="relative animate-slide-in-left">
                  <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-gray-700">
                    <OptimizedImage
                      src="/placeholder.svg?height=320&width=320"
                      alt="Lee Day - Professional Web Developer and AI Integration Specialist at LD Web Development based in London"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority={false}
                      placeholder="Professional headshot loading..."
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
                    aria-hidden="true"
                  ></div>
                </div>

                {/* Biography Section */}
                <div className="animate-slide-in-right">
                  <div className="mb-6">
                    <h2 id="about-heading" className="text-responsive-4xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Lee Day
                      </span>
                    </h2>
                    <p className="text-responsive-xl text-blue-400 font-semibold mb-2">CEO & Lead Developer</p>
                    <p className="text-gray-400 flex items-center mb-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></span>
                      LD Web Development
                    </p>
                    <p className="text-gray-500 text-sm">Part of Hosting Easy Ltd | UK Company No. 15169743</p>
                  </div>

                  <p className="text-responsive-lg text-gray-300 mb-6 leading-relaxed">
                    With over 5 years of proven expertise in web development and AI integration, I specialize in
                    creating responsive, high-performance websites and intelligent automation solutions that drive real
                    business results.
                  </p>

                  <p className="text-gray-400 mb-8 leading-relaxed text-responsive-base">
                    From responsive development using cutting-edge frameworks to implementing AI tools that streamline
                    operations, LD Web Development provides comprehensive hosting and deployment solutions. Our clients
                    trust us to deliver projects on time, within budget, and with ongoing support that ensures long-term
                    success.
                  </p>

                  {/* Key Expertise */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Responsive Web Development",
                      "AI Tools & Integration",
                      "Hosting & Deployment",
                      "Ongoing Support",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-300 text-responsive-base">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-responsive-xl font-bold mb-4 text-white">
                      Why Clients Trust LD Web Development
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-blue-400 mb-1">50+</div>
                        <div className="text-responsive-sm text-gray-400">Successful Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-purple-400 mb-1">5+</div>
                        <div className="text-responsive-sm text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-responsive-sm text-gray-400">Client Satisfaction</div>
                      </div>
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
                <h2 id="contact-heading" className="text-responsive-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Contact LD Web Development for Your Project
                  </span>
                </h2>
                <p className="text-responsive-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your business with modern web solutions? Get in touch for a free consultation and
                  personalized quote.
                </p>
              </div>

              <ContactForm />
            </div>
          </section>
        </IntersectionObserver>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 no-print" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="text-responsive-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                LD Web Development
              </div>
              <p className="text-gray-400 text-responsive-sm leading-relaxed mb-4">
                Professional web development and AI integration services. Creating modern, responsive websites that
                drive business growth.
              </p>

              <p className="text-gray-500 text-xs mb-2">A part of Hosting Easy Ltd&nbsp;| UK Company No. 15169743</p>

              <div className="flex space-x-4" role="list" aria-label="Social media links">
                <a
                  href="https://linkedin.com/in/leeday"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-label="LinkedIn profile"
                >
                  <span className="text-xs text-gray-400 hover:text-white">Li</span>
                </a>
                <a
                  href="https://github.com/leeday"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                  aria-label="GitHub profile"
                >
                  <span className="text-xs text-gray-400 hover:text-white">Gh</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-responsive-base">Quick Links</h3>
              <nav role="navigation" aria-label="Footer navigation">
                <ul className="space-y-3">
                  {[
                    { id: "hero", label: "Home" },
                    { id: "about", label: "About" },
                    { id: "services", label: "Services" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-responsive-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-responsive-base">Services</h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Hosting & Creation",
                  "AI Integration",
                  "E-commerce Solutions",
                  "Website Maintenance",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-responsive-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-responsive-base">Contact Info</h3>
              <address className="space-y-3 not-italic">
                <a
                  href="tel:+447586266007"
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-responsive-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
                >
                  +44 7586 266 007
                </a>
                <a
                  href="mailto:LeeDayDevs@gmail.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-responsive-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 rounded-md"
                >
                  LeeDayDevs@gmail.com
                </a>
                <span className="block text-gray-400 text-responsive-sm">
                  3rd Floor, 86-90 Paul Street
                  <br />
                  London EC2A 4NE
                </span>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-responsive-sm mb-4 md:mb-0">
              © 2025 LD Development – a part of Hosting Easy Ltd · UK Registered Company · CN 15169743. All rights
              reserved.
            </div>
            <nav className="flex space-x-6 text-responsive-sm" aria-label="Legal links">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap.xml"
                className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md p-1"
              >
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
