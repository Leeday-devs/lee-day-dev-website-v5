"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function SimplifiedHero({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <div className="text-center space-y-8 max-w-4xl mx-auto">
      {/* Simple Badge */}
      <div className="inline-block">
        <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-300/30">
          ✓ HELPING SMALL BUSINESSES SUCCEED ONLINE
        </span>
      </div>

      {/* Clear, Simple Headline */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
          <span className="block text-white drop-shadow-lg">GET MORE CUSTOMERS</span>
          <span className="block bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            WITH A PROFESSIONAL WEBSITE
          </span>
        </h1>
      </div>

      {/* Simple Value Proposition */}
      <div className="space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-300">
          I help small business owners like you get found online and attract more customers
        </h2>

        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          No confusing tech talk. No hidden fees. Just a beautiful website that works on phones, tablets, and computers
          - plus smart tools to help you serve customers better.
        </p>
      </div>

      {/* Simple Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2">Look Professional</h3>
          <p className="text-gray-300 text-sm">Stand out from competitors with a website that builds trust</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold mb-2">Get Found Online</h3>
          <p className="text-gray-300 text-sm">Show up when customers search for your services</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3 className="text-white font-semibold mb-2">Save Time</h3>
          <p className="text-gray-300 text-sm">Smart tools handle customer questions automatically</p>
        </div>
      </div>

      {/* Simple Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          onClick={() => onNavigate("pricing")}
        >
          See Prices (Starting £350)
          <ArrowRight className="ml-2" size={20} />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
          onClick={() => onNavigate("contact")}
        >
          Get Free Quote
        </Button>
      </div>

      {/* Trust Indicator */}
      <div className="text-center pt-4">
        <p className="text-gray-300 text-sm mb-2">Trusted by 50+ small businesses across the UK</p>
        <div className="flex justify-center items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-gray-400 text-sm ml-2">5.0 stars</span>
        </div>
      </div>
    </div>
  )
}
