"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star, Zap, Brain, Settings } from "lucide-react"

interface PricingTier {
  id: string
  name: string
  price: string
  description: string
  icon: React.ReactNode
  features: string[]
  popular?: boolean
  cta: string
  timeline: string
  monthlyFee?: string
}

const pricingTiers: PricingTier[] = [
  {
    id: "website",
    name: "Professional Website",
    price: "£350",
    description: "Perfect for small businesses looking to establish a professional online presence",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Responsive design for all devices",
      "Up to 5 pages (Home, About, Services, Contact, etc.)",
      "Contact form integration",
      "Basic SEO optimization",
      "Google Analytics setup",
      "Social media integration",
      "1 month free hosting included",
      "Mobile-friendly design",
      "Fast loading optimization",
      "Basic maintenance guide",
    ],
    cta: "Get Started",
    timeline: "1-2 weeks delivery",
    monthlyFee: "£40/month after",
  },
  {
    id: "ai-automation",
    name: "AI Automation",
    price: "£300",
    description: "Smart chatbots and automation to handle customer inquiries 24/7",
    icon: <Brain className="w-6 h-6" />,
    features: [
      "Custom AI chatbot for your business",
      "24/7 customer support automation",
      "Appointment booking system",
      "FAQ automation",
      "Lead capture and qualification",
      "Integration with existing website",
      "Multi-platform deployment",
      "Basic analytics dashboard",
      "Training on your business data",
      "1 month of adjustments included",
    ],
    popular: false,
    cta: "Add AI Power",
    timeline: "3-5 days setup",
    monthlyFee: "from £20/month usage",
  },
  {
    id: "custom-cms",
    name: "Custom CMS",
    price: "£500",
    description: "Easy-to-use content management system tailored to your business needs",
    icon: <Settings className="w-6 h-6" />,
    features: [
      "Custom admin dashboard",
      "Easy content editing interface",
      "Image and media management",
      "User role management",
      "Content scheduling",
      "SEO-friendly content tools",
      "Backup and restore functionality",
      "Mobile-responsive admin panel",
      "Training session included",
      "3 months of support included",
    ],
    cta: "Get Custom CMS",
    timeline: "1-3 weeks delivery",
    monthlyFee: "£40/month after",
  },
  {
    id: "ai-custom-tools",
    name: "AI Custom Built Tools",
    price: "£400",
    description: "Bespoke AI solutions tailored specifically to your business processes and workflows",
    icon: <Brain className="w-6 h-6" />,
    features: [
      "Custom AI tool development",
      "Business process automation",
      "Data analysis and insights",
      "Integration with existing systems",
      "Custom training on your data",
      "API development and integration",
      "Workflow optimization",
      "Performance monitoring",
      "Dedicated support during development",
      "Documentation and training included",
    ],
    cta: "Build Custom AI",
    timeline: "2-4 weeks delivery",
    monthlyFee: "from £20/month usage",
  },
]

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [showPackageDeals, setShowPackageDeals] = useState(false)

  return (
    <div className="space-y-12">
      {/* Toggle Switch */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800/50 rounded-full p-1 border border-gray-600">
          <div className="flex">
            <button
              onClick={() => setShowPackageDeals(false)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                !showPackageDeals
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Individual Services
            </button>
            <button
              onClick={() => setShowPackageDeals(true)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                showPackageDeals
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Package Deals 💰
            </button>
          </div>
        </div>
      </div>

      {!showPackageDeals ? (
        <>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="flex items-center bg-gray-700/50 hover:bg-cyan-500/20 px-4 py-2 rounded-full border border-gray-600 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
              <span className="text-cyan-300 text-sm font-medium">Web Development</span>
            </button>
            <button className="flex items-center bg-gray-700/50 hover:bg-pink-500/20 px-4 py-2 rounded-full border border-gray-600 hover:border-pink-500/30 transition-all duration-300">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-pink-300 text-sm font-medium">AI Solutions</span>
            </button>
            <button className="flex items-center bg-gray-700/50 hover:bg-green-500/20 px-4 py-2 rounded-full border border-gray-600 hover:border-green-500/30 transition-all duration-300">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-green-300 text-sm font-medium">Hosting & Support</span>
            </button>
            <button className="flex items-center bg-gray-700/50 hover:bg-purple-500/20 px-4 py-2 rounded-full border border-gray-600 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-purple-300 text-sm font-medium">All Packages</span>
            </button>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-gray-800/50 rounded-2xl border p-4 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
                  tier.popular
                    ? "border-blue-500/50 shadow-blue-500/20 shadow-xl"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                {tier.id === "website" && (
                  <div className="absolute -top-3 left-4">
                    <div className="flex items-center bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                      <span className="text-cyan-300 text-xs font-medium">Web Development</span>
                    </div>
                  </div>
                )}
                {tier.id === "ai-automation" && (
                  <div className="absolute -top-3 left-4">
                    <div className="flex items-center bg-pink-500/20 px-3 py-1 rounded-full border border-pink-500/30">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      <span className="text-pink-300 text-xs font-medium">AI Solutions</span>
                    </div>
                  </div>
                )}
                {tier.id === "custom-cms" && (
                  <div className="absolute -top-3 left-4">
                    <div className="flex items-center bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-500/30">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                      <span className="text-cyan-300 text-xs font-medium">Web Development</span>
                    </div>
                  </div>
                )}
                {tier.id === "ai-custom-tools" && (
                  <div className="absolute -top-3 left-4">
                    <div className="flex items-center bg-pink-500/20 px-3 py-1 rounded-full border border-pink-500/30">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      <span className="text-pink-300 text-xs font-medium">AI Solutions</span>
                    </div>
                  </div>
                )}

                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                      tier.popular ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-700/50 text-gray-300"
                    }`}
                  >
                    <div className={tier.popular ? "text-white" : "text-gray-300"}>{tier.icon}</div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 text-xs mb-3 leading-tight">{tier.description}</p>

                  <div className="mb-3">
                    <span className="text-xl font-bold text-white">from {tier.price}</span>
                    <span className="text-gray-400 text-xs ml-1">setup</span>
                    {tier.monthlyFee && <div className="text-xs text-gray-400 mt-1">+ {tier.monthlyFee}</div>}
                  </div>

                  <div className="text-xs text-gray-500">{tier.timeline}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {tier.features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-xs leading-tight">{feature}</span>
                    </li>
                  ))}
                  {tier.features.length > 6 && (
                    <li className="text-gray-500 text-xs italic">+ {tier.features.length - 6} more features</li>
                  )}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-1 text-sm font-semibold rounded-full transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      : "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.cta}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Package Deals */
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">💰 Package Deals - Save More!</h3>
            <p className="text-gray-300">Combine services and save on your small business digital transformation</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Website + AI Package */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Website + AI Automation</h4>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">£650</div>
                  <div className="text-2xl font-bold text-green-400">£550</div>
                  <div className="text-xs text-green-400">Save £100</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Complete online presence with intelligent customer support automation
              </p>
              <div className="text-sm text-gray-500 mb-4">+ £40/month hosting + from £20/month AI usage</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Professional responsive website
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  24/7 AI customer support bot
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Integrated booking system
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Package Deal
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>

            {/* Complete Business Package */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/50 relative hover:border-purple-400/70 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute -top-3 right-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Best Value
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Complete Business Suite</h4>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">£1,250</div>
                  <div className="text-2xl font-bold text-purple-400">£1,000</div>
                  <div className="text-xs text-purple-400">Save £250</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Everything you need: Website, AI automation, and custom CMS for complete control
              </p>
              <div className="text-sm text-gray-500 mb-4">+ £40/month hosting + from £20/month AI usage</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Professional website with CMS
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  AI automation suite
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom content management
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Priority support included
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Best Value
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>

            {/* Website + Custom CMS Package */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Website + Custom CMS</h4>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">£850</div>
                  <div className="text-2xl font-bold text-orange-400">£750</div>
                  <div className="text-xs text-orange-400">Save £100</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Professional website with easy-to-use content management system for full control
              </p>
              <div className="text-sm text-gray-500 mb-4">+ £40/month hosting</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Responsive professional website
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom admin dashboard
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Easy content editing tools
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Training session included
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Package Deal
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>

            {/* AI Automation + Custom Tools Package */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">AI Automation + Custom Tools</h4>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">£700</div>
                  <div className="text-2xl font-bold text-cyan-400">£600</div>
                  <div className="text-xs text-cyan-400">Save £100</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Complete AI solution with chatbot and custom business automation tools
              </p>
              <div className="text-sm text-gray-500 mb-4">+ from £20/month AI usage</div>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  24/7 AI customer support bot
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Custom AI business tools
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Process automation
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2" />
                  Advanced analytics dashboard
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Package Deal
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-blue-400 text-lg">💡</span>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">What's Included in Every Project</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Free consultation to understand your business needs</li>
              <li>• Ongoing support during development</li>
              <li>• Training on how to use your new systems</li>
              <li>• 30-day warranty on all work</li>
              <li>• Affordable monthly hosting and maintenance options</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
