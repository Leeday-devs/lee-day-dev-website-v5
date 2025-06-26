"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function SimpleServices({ onNavigate }: { onNavigate: (section: string) => void }) {
  const services = [
    {
      id: "website",
      title: "Professional Website",
      subtitle: "Look credible and trustworthy",
      description:
        "A beautiful website that works perfectly on phones, tablets, and computers. Customers can easily find your contact info, services, and book appointments.",
      price: "£350",
      features: [
        "Works on all devices",
        "Easy for customers to use",
        "Contact forms that work",
        "Shows up in Google searches",
        "Looks professional and trustworthy",
      ],
      popular: false,
      color: "blue",
    },
    {
      id: "smart-assistant",
      title: "Smart Customer Assistant",
      subtitle: "Never miss a customer again",
      description:
        "A smart helper that answers customer questions 24/7, even when you're busy or closed. It can book appointments and capture leads automatically.",
      price: "£300",
      features: [
        "Answers questions instantly",
        "Works 24 hours a day",
        "Books appointments automatically",
        "Captures customer details",
        "Saves you hours every week",
      ],
      popular: true,
      color: "green",
    },
    {
      id: "complete-package",
      title: "Complete Business Package",
      subtitle: "Everything you need to succeed online",
      description:
        "Professional website + smart assistant + reliable hosting. Everything your small business needs to attract customers and grow online.",
      price: "£550",
      originalPrice: "£650",
      features: [
        "Professional website included",
        "24/7 smart customer assistant",
        "Reliable hosting and security",
        "Easy to update yourself",
        "Priority support from me",
      ],
      popular: false,
      color: "purple",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Simple Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Can I Do For Your Business?</h2>
        <p className="text-xl text-gray-300">Simple solutions that help you get more customers and save time</p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative bg-white/10 backdrop-blur-sm rounded-2xl border-2 p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
              service.popular
                ? "border-green-500/50 shadow-green-500/20 shadow-xl"
                : "border-white/20 hover:border-gray-600"
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.subtitle}</p>

              <div className="mb-4">
                {service.originalPrice && (
                  <span className="text-gray-400 line-through text-lg mr-2">{service.originalPrice}</span>
                )}
                <span className="text-3xl font-bold text-white">{service.price}</span>
                <span className="text-gray-400 text-sm ml-1">one-time</span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

            <div className="space-y-3 mb-8">
              <h4 className="text-white font-semibold">What you get:</h4>
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button
                className={`w-full py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  service.popular
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500"
                }`}
                onClick={() => onNavigate("contact")}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <a
                href={`https://wa.me/447586266007?text=Hi! I'm interested in the ${service.title} for my business. Can we chat about this?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-all duration-300 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Quick WhatsApp Chat
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Guarantee */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">My Promise to You</h3>
        <p className="text-gray-200 text-lg mb-6">
          If you're not completely happy with your website, I'll make it right or give you your money back. No questions
          asked. That's my 30-day guarantee.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            30-Day Money Back Promise
          </div>
          <div className="flex items-center text-blue-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            Free Changes During Build
          </div>
          <div className="flex items-center text-purple-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            Always Here to Help
          </div>
        </div>
      </div>
    </div>
  )
}
