"use client"

import type { React } from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Zap,
  Shield,
  Award,
  Heart,
  ExternalLink,
  Send,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

interface FooterProps {
  className?: string
  onNavigate?: (sectionId: string) => void
}

export function Footer({ className = "", onNavigate }: FooterProps) {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setSubscribeStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubscribeStatus("success")
      setEmail("")
    } catch (error) {
      setSubscribeStatus("error")
    } finally {
      setIsSubscribing(false)
    }
  }

  const handleNavigation = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Custom Web Development", href: "services" },
    { name: "AI Integration", href: "services" },
    { name: "E-commerce Solutions", href: "services" },
    { name: "Website Hosting", href: "services" },
    { name: "SEO Optimization", href: "services" },
    { name: "Maintenance & Support", href: "services" },
  ]

  const quickLinks = [
    { name: "About", href: "about" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Pricing", href: "pricing" },
    { name: "Contact", href: "contact" },
    { name: "FAQ", href: "faq" },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/leeday",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/leeday",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ldwebdev",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/447586266007",
      icon: <WhatsAppIcon className="w-5 h-5" />,
      color: "hover:text-green-400",
    },
  ]

  const trustBadges = [
    {
      icon: <Shield className="w-4 h-4" />,
      text: "SSL Secured",
      color: "text-green-400",
    },
    {
      icon: <Award className="w-4 h-4" />,
      text: "Certified Developer",
      color: "text-blue-400",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      text: "99.9% Uptime",
      color: "text-yellow-400",
    },
  ]

  return (
    <footer className={`relative bg-gray-900 border-t border-gray-800 ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info & Mission */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">LD Web Development</h3>
                    <p className="text-sm text-gray-400">Hosting Easy Ltd</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming small businesses with cutting-edge web solutions and intelligent AI integration. We build
                  modern, responsive websites that drive growth and enhance customer engagement.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2">
                      <div className={badge.color}>{badge.icon}</div>
                      <span className="text-gray-300 text-xs font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(service.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-left"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <ExternalLink className="w-5 h-5 mr-2 text-purple-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-left"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <Mail className="w-5 h-5 mr-2 text-green-400" />
                Get In Touch
              </h4>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+447586266007" className="hover:text-white transition-colors duration-300">
                    +44-7586-266007
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-green-400" />
                  <a href="mailto:LeeDayDevs@gmail.com" className="hover:text-white transition-colors duration-300">
                    LeeDayDevs@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                  <div className="text-sm">
                    <p>3rd Floor 86-90, Paul Street</p>
                    <p>London EC2A 4NE, UK</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest web development tips and AI insights delivered to your inbox.
                </p>

                {subscribeStatus === "success" ? (
                  <div className="text-green-400 text-sm flex items-center">
                    <Send className="w-4 h-4 mr-2" />
                    Thanks for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        required
                      />
                      <Button
                        type="submit"
                        disabled={isSubscribing || !email}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubscribing ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    {subscribeStatus === "error" && (
                      <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Copyright & Legal */}
              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-2">
                  © {currentYear} LD Web Development - A part of Hosting Easy Ltd. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-500">
                  <a href="/privacy-policy" className="hover:text-gray-300 transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="hover:text-gray-300 transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="/cookie-policy" className="hover:text-gray-300 transition-colors duration-300">
                    Cookie Policy
                  </a>
                  <span>UK Company No: 15169743</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm hidden sm:block">Follow us:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Made with Love */}
            <div className="text-center mt-8 pt-6 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm flex items-center justify-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for small businesses across the UK by
                leeday.uk
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Floating Back to Top Button
export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowRight className="w-5 h-5 transform -rotate-90" />
    </button>
  )
}
