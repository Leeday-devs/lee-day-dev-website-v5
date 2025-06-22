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
          className="section-hero"
          aria-labelledby="hero-heading"
        >
          {/* Animated Background */}
          <div className="hero-animated-bg" aria-hidden="true"></div>
          
          {/* Floating Tech Icons */}
          <div className="floating-tech-icons" aria-hidden="true">
            {/* Web Development Icons */}
            <div className="floating-icon icon-1">
              <Code className="w-8 h-8" />
            </div>
            <div className="floating-icon icon-2">
              <Globe className="w-6 h-6" />
            </div>
            <div className="floating-icon icon-3">
              <Smartphone className="w-7 h-7" />
            </div>
            <div className="floating-icon icon-4">
              <Monitor className="w-8 h-8" />
            </div>
            <div className="floating-icon icon-5">
              <Database className="w-6 h-6" />
            </div>
            <div className="floating-icon icon-6">
              <Terminal className="w-7 h-7" />
            </div>
            <div className="floating-icon icon-7">
              <Layers className="w-6 h-6" />
            </div>
            <div className="floating-icon icon-8">
              <Cloud className="w-8 h-8" />
            </div>
            
            {/* AI & Tech Icons */}
            <div className="floating-icon icon-9">
              <Brain className="w-8 h-8" />
            </div>
            <div className="floating-icon icon-10">
              <Bot className="w-7 h-7" />
            </div>
            <div className="floating-icon icon-11">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="floating-icon icon-12">
              <Zap className="w-7 h-7" />
            </div>
            <div className="floating-icon icon-13">
              <Settings className="w-6 h-6" />
            </div>
            <div className="floating-icon icon-14">
              <Wifi className="w-7 h-7" />
            </div>
            <div className="floating-icon icon-15">
              <Rocket className="w-8 h-8" />
            </div>
          </div>
          
          {/* Neural Network Animation */}
          <div className="neural-network" aria-hidden="true">
            <div className="neural-node" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
            <div className="neural-node" style={{ top: '40%', left: '25%', animationDelay: '1s' }}></div>
            <div className="neural-node" style={{ top: '60%', left: '35%', animationDelay: '2s' }}></div>
            <div className="neural-node" style={{ top: '30%', left: '70%', animationDelay: '0.5s' }}></div>
            <div className="neural-node" style={{ top: '50%', left: '80%', animationDelay: '1.5s' }}></div>
            <div className="neural-node" style={{ top: '70%', left: '90%', animationDelay: '2.5s' }}></div>
            
            <div className="neural-connection" style={{ top: '25%', left: '18%', width: '150px', transform: 'rotate(25deg)', animationDelay: '0s' }}></div>
            <div className="neural-connection" style={{ top: '45%', left: '28%', width: '120px', transform: 'rotate(-15deg)', animationDelay: '1s' }}></div>
            <div className="neural-connection" style={{ top: '35%', left: '40%', width: '200px', transform: 'rotate(10deg)', animationDelay: '2s' }}></div>
          </div>
          
          {/* Particle System */}
          <div className="particles" aria-hidden="true">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>

          <div className="relative z-10 container text-center">
            <div className="animate-fade-in-up hero-content-backdrop">
              <h1 id="hero-heading" className="text-responsive-5xl font-bold mb-6 leading-tight hero-text-shadow">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Custom Web Development
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  & AI Integration
                </span>
              </h1>

              <p className="text-responsive-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed hero-text-shadow">
                Transform your business with cutting-edge web solutions and intelligent AI integration. From concept to
                deployment, I deliver exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-responsive-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-responsive-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <IntersectionObserver>
          <section
            id="services"
            className="section-secondary scroll-mt-20"
            aria-labelledby="services-heading"
            tabIndex={-1}
          >
            {/* Animated Background */}
            <div className="section-animated-bg" aria-hidden="true"></div>
            
            {/* Floating Micro Icons */}
            <div className="section-floating-icons" aria-hidden="true">
              <div className="micro-icon">
                <Code className="w-4 h-4" />
              </div>
              <div className="micro-icon">
               <Brain className="w-4 h-4" />
             </div>
             <div className="micro-icon">
               <Zap className="w-4 h-4" />
             </div>
             <div className="micro-icon">
               <Globe className="w-4 h-4" />
             </div>
             <div className="micro-icon">
               <Settings className="w-4 h-4" />
              </div>
            </div>

            <div className="container relative z-10">
              <div className="text-center mb-16">
               <h2 id="services-heading" className="text-responsive-4xl font-bold mb-6 section-heading">
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
               <article className="group animated-card glow-effect p-8 rounded-2xl transition-all duration-500">
                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                   <Code className="w-16 h-16 text-blue-400 group-hover:text-blue-300 pulse-accent" aria-hidden="true" />
                 </div>
                 <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300 text-white">
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
               <article className="group animated-card glow-effect p-8 rounded-2xl transition-all duration-500">
                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                   <Zap className="w-16 h-16 text-green-400 group-hover:text-green-300 pulse-accent" aria-hidden="true" />
                 </div>
                 <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-green-300 transition-colors duration-300 text-white">
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
               <article className="group animated-card glow-effect p-8 rounded-2xl transition-all duration-500 md:col-span-2 lg:col-span-1">
                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                   <Brain className="w-16 h-16 text-purple-400 group-hover:text-purple-300 pulse-accent" aria-hidden="true" />
                 </div>
                 <h3 className="text-responsive-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300 text-white">
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
            className="py-20 bg-gray-900 scroll-mt-20 relative overflow-hidden"
            aria-labelledby="portfolio-heading"
            tabIndex={-1}
          >
            {/* Animated Background */}
            <div className="section-animated-bg-alt" aria-hidden="true"></div>
            
            {/* Floating Micro Icons */}
            <div className="section-floating-icons" aria-hidden="true">
              <div className="micro-icon">
                <Monitor className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Database className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Cloud className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Rocket className="w-4 h-4" />
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 id="portfolio-heading" className="text-responsive-4xl font-bold mb-6 section-heading">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Portfolio Projects
                  </span>
                </h2>
                <p className="text-responsive-xl text-gray-300 max-w-3xl mx-auto">
                  Explore some of my recent projects showcasing custom development, AI integration, and comprehensive
                  hosting solutions
                </p>
              </div>

              <PortfolioCarousel />
            </div>
          </section>
        </IntersectionObserver>

        {/* About Section */}
        <IntersectionObserver>
          <section id="about" className="section-primary scroll-mt-20" aria-labelledby="about-heading" tabIndex={-1}>
            {/* Animated Background */}
            <div className="section-animated-bg-alt" aria-hidden="true"></div>
            
            {/* Floating Micro Icons */}
            <div className="section-floating-icons" aria-hidden="true">
              <div className="micro-icon">
                <Code className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Globe className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Layers className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Wifi className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <CheckCircle className="w-4 h-4" />
              </div>
            </div>

            <div className="container relative z-10">
              <div className="grid-2 gap-12 items-center">
                {/* Photo Section */}
                <div className="relative animate-slide-up">
                  <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl overflow-hidden card-primary aspect-square">
                    <OptimizedImage
                      src="/placeholder.svg?height=320&width=320"
                      alt="Lee Day - Professional Web Developer and AI Integration Specialist based in London and Windsor"
                      width={320}
                      height={320}
                      className="img-cover"
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
                <div className="animate-slide-up">
                  <div className="mb-6">
                    <h2 id="about-heading" className="text-responsive-4xl font-bold mb-2 section-heading text-white">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Lee Day
                      </span>
                    </h2>
                    <p className="text-responsive-xl text-blue-400 font-semibold mb-2">CEO & Lead Developer</p>
                    <p className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></span>
                      London & Windsor
                    </p>
                  </div>

                  <p className="text-responsive-lg text-gray-300 mb-6 leading-relaxed">
                    With over 5 years of proven expertise in web development and AI integration, I specialize in
                    creating responsive, high-performance websites and intelligent automation solutions that drive real
                    business results.
                  </p>

                  <p className="text-gray-400 mb-8 leading-relaxed text-responsive-base">
                    From responsive development using cutting-edge frameworks to implementing AI tools that streamline
                    operations, I provide comprehensive hosting and deployment solutions. My clients trust me to deliver
                    projects on time, within budget, and with ongoing support that ensures long-term success.
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
                  <div className="card-secondary">
                    <h3 className="text-responsive-xl font-bold mb-4 text-white">Why Clients Trust Me</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-blue-400 mb-1 pulse-accent">50+</div>
                        <div className="text-responsive-sm text-gray-400">Successful Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-purple-400 mb-1 pulse-accent">5+</div>
                        <div className="text-responsive-sm text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-responsive-2xl font-bold text-green-400 mb-1 pulse-accent">100%</div>
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
            className="section-secondary scroll-mt-20"
            aria-labelledby="contact-heading"
            tabIndex={-1}
          >
            {/* Animated Background */}
            <div className="section-animated-bg" aria-hidden="true"></div>
            
            {/* Floating Micro Icons */}
            <div className="section-floating-icons" aria-hidden="true">
              <div className="micro-icon">
                <Mail className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Phone className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <Clock className="w-4 h-4" />
              </div>
              <div className="micro-icon">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="container relative z-10">
              <div className="text-center mb-16">
                <h2 id="contact-heading" className="text-responsive-4xl font-bold mb-6 section-heading">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Contact Lee Day for Your Project
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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="nav-logo text-responsive-2xl mb-4">
                LD Web Development
              </div>
              <p className="text-gray-400 text-responsive-sm leading-relaxed mb-4">
                Professional web development and AI integration services. Creating modern, responsive websites that
                drive business growth.
              </p>
              <div className="flex space-x-4" role="list" aria-label="Social media links">
                <a
                  href="https://linkedin.com/in/leeday"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 focus-visible"
                  aria-label="LinkedIn profile"
                >
                  <span className="text-xs text-gray-400 hover:text-white">Li</span>
                </a>
                <a
                  href="https://github.com/leeday"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 focus-visible"
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
                        onClick={() => scrollToSection(item.id)}
                        className="nav-link text-responsive-sm"
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
                      className="nav-link text-responsive-sm"
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
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center" aria-hidden="true">
                    <span className="text-blue-400 text-xs">📞</span>
                  </div>
                  <a
                    href="tel:07586266007"
                    className="nav-link text-responsive-sm"
                  >
                    07586266007
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500/20 rounded flex items-center justify-center" aria-hidden="true">
                    <span className="text-green-400 text-xs">✉</span>
                  </div>
                  <a
                    href="mailto:leedaydevs@gmail.com"
                    className="nav-link text-responsive-sm"
                  >
                    leedaydevs@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-purple-500/20 rounded flex items-center justify-center" aria-hidden="true">
                    <span className="text-purple-400 text-xs">📍</span>
                  </div>
                  <div className="text-gray-400 text-responsive-sm">
                    <div>3rd Floor 86-90, Paul Street</div>
                    <div>London EC2A 4NE, UK</div>
                  </div>
                </div>
              </address>

              {/* Business Hours */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2 text-responsive-sm">Business Hours</h4>
                <div className="text-gray-400 text-responsive-xs space-y-1">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Weekend: By Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-responsive-sm mb-4 md:mb-0">
              © 2024 LD Web Development. All rights reserved.
            </div>
            <nav className="flex space-x-6 text-responsive-sm" aria-label="Legal links">
              <a
                href="/privacy-policy"
                className="nav-link"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="nav-link"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap.xml"
                className="nav-link"
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