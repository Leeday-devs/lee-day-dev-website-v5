"use client"

import type React from "react"

import { Shield, Award, Users, Clock, CheckCircle, Zap, Lock } from "lucide-react"

interface TrustBadge {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
  verified: boolean
}

const trustBadges: TrustBadge[] = [
  {
    id: "ssl",
    name: "SSL Secured",
    description: "256-bit encryption",
    icon: <Lock className="w-5 h-5" />,
    color: "green",
    verified: true,
  },
  {
    id: "gdpr",
    name: "GDPR Compliant",
    description: "Data protection certified",
    icon: <Shield className="w-5 h-5" />,
    color: "blue",
    verified: true,
  },
  {
    id: "uptime",
    name: "99.9% Uptime",
    description: "Guaranteed availability",
    icon: <Zap className="w-5 h-5" />,
    color: "yellow",
    verified: true,
  },
  {
    id: "support",
    name: "24/7 Support",
    description: "Always here to help",
    icon: <Clock className="w-5 h-5" />,
    color: "purple",
    verified: true,
  },
  {
    id: "certified",
    name: "Certified Developer",
    description: "Professional qualifications",
    icon: <Award className="w-5 h-5" />,
    color: "orange",
    verified: true,
  },
  {
    id: "clients",
    name: "50+ Happy Clients",
    description: "Proven track record",
    icon: <Users className="w-5 h-5" />,
    color: "pink",
    verified: true,
  },
]

const clientLogos = [
  {
    name: "Mitchell's Bakery",
    logo: "/images/logos/mitchells-bakery.png",
    industry: "Food & Beverage",
  },
  {
    name: "Thompson Plumbing",
    logo: "/images/logos/thompson-plumbing.png",
    industry: "Home Services",
  },
  {
    name: "Bloom Flower Studio",
    logo: "/images/logos/bloom-flower-studio.png",
    industry: "Retail",
  },
  {
    name: "Chen's Auto Repair",
    logo: "/images/logos/chens-auto-repair.png",
    industry: "Automotive",
  },
  {
    name: "Parker Legal Services",
    logo: "/images/logos/parker-legal-services.png",
    industry: "Legal",
  },
  {
    name: "Green Valley Landscaping",
    logo: "/images/logos/green-valley-landscaping.png",
    industry: "Landscaping",
  },
]

const securityBadges = [
  {
    name: "SSL Certificate",
    description: "Secure Socket Layer",
    icon: <Shield className="w-8 h-8" />,
    color: "green",
  },
  {
    name: "GDPR Compliant",
    description: "Data Protection",
    icon: <Lock className="w-8 h-8" />,
    color: "blue",
  },
  {
    name: "PCI Compliant",
    description: "Payment Security",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "purple",
  },
]

interface TrustBadgesProps {
  variant?: "compact" | "full" | "inline"
  showClientLogos?: boolean
  showSecurityBadges?: boolean
}

export function TrustBadges({ variant = "full", showClientLogos = true, showSecurityBadges = true }: TrustBadgesProps) {
  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {trustBadges.slice(0, 4).map((badge) => (
          <div
            key={badge.id}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-2"
          >
            <div className="text-white">{badge.icon}</div>
            <span className="text-white text-sm font-medium">{badge.name}</span>
            {badge.verified && <CheckCircle className="w-4 h-4 text-green-400" />}
          </div>
        ))}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {trustBadges.map((badge) => (
          <div
            key={badge.id}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2"
          >
            <div className="text-white">{badge.icon}</div>
            <span className="text-white text-xs font-medium">{badge.name}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {/* Main Trust Badges */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6 text-center">Trusted by Small Businesses Across the UK</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-white mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h4 className="text-white text-sm font-semibold mb-1">{badge.name}</h4>
              <p className="text-gray-400 text-xs">{badge.description}</p>
              {badge.verified && (
                <div className="flex items-center justify-center mt-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-xs">Verified</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Security Badges */}
      {showSecurityBadges && (
        <div>
          <h3 className="text-lg font-bold text-white mb-6 text-center">Security & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-white mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{badge.name}</h4>
                <p className="text-gray-400 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Client Logos */}
      {showClientLogos && (
        <div>
          <h3 className="text-lg font-bold text-white mb-6 text-center">Trusted by Local Businesses</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="text-white font-bold text-sm">${client.name}</div>`
                      }
                    }}
                  />
                </div>
                <h4 className="text-white text-xs font-medium mb-1">{client.name}</h4>
                <p className="text-gray-400 text-xs">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trust Guarantee */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-green-400 mr-3" />
          <h3 className="text-xl font-bold text-white">Our Guarantee</h3>
        </div>
        <p className="text-gray-200 mb-4">
          We're so confident in our work that we offer a 30-day satisfaction guarantee. If you're not completely happy
          with your website, we'll make it right or refund your money.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-4 h-4 mr-2" />
            30-Day Money Back Guarantee
          </div>
          <div className="flex items-center text-blue-400">
            <CheckCircle className="w-4 h-4 mr-2" />
            Free Revisions Included
          </div>
          <div className="flex items-center text-purple-400">
            <CheckCircle className="w-4 h-4 mr-2" />
            Ongoing Support
          </div>
        </div>
      </div>
    </div>
  )
}

// Mini Trust Badges for Forms
export function MiniTrustBadges() {
  return (
    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
      <div className="flex items-center">
        <Shield className="w-3 h-3 mr-1 text-green-400" />
        SSL Secured
      </div>
      <div className="flex items-center">
        <Lock className="w-3 h-3 mr-1 text-blue-400" />
        GDPR Compliant
      </div>
      <div className="flex items-center">
        <CheckCircle className="w-3 h-3 mr-1 text-purple-400" />
        Verified Business
      </div>
    </div>
  )
}
