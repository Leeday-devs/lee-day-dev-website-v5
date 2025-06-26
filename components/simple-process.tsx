"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, FileText, Code, Rocket } from "lucide-react"

export function SimpleProcess({ onNavigate }: { onNavigate: (section: string) => void }) {
  const steps = [
    {
      number: "1",
      title: "We Chat About Your Business",
      description:
        "Tell me about your business, what you do, and what you want to achieve online. This is completely free and no pressure.",
      icon: <MessageCircle className="w-8 h-8" />,
      duration: "30 minutes",
    },
    {
      number: "2",
      title: "I Create Your Plan",
      description:
        "I'll design exactly what your website will look like and how it will work. You'll see everything before I start building.",
      icon: <FileText className="w-8 h-8" />,
      duration: "2-3 days",
    },
    {
      number: "3",
      title: "I Build Your Website",
      description:
        "I create your professional website and set up any smart tools you need. I'll keep you updated on progress.",
      icon: <Code className="w-8 h-8" />,
      duration: "1-2 weeks",
    },
    {
      number: "4",
      title: "Your Business Goes Live",
      description:
        "I launch your website and show you how everything works. Your business is now ready to attract customers online!",
      icon: <Rocket className="w-8 h-8" />,
      duration: "1 day",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We'll Work Together</h2>
        <p className="text-xl text-gray-300">Simple steps, clear communication, no surprises</p>
      </div>

      {/* Process Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="text-center">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {step.number}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
            <div className="text-sm text-blue-400 font-medium">{step.duration}</div>
          </div>
        ))}
      </div>

      {/* Why This Works */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Why Small Business Owners Love Working With Me
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🗣️</div>
            <h4 className="text-white font-semibold mb-2">Plain English</h4>
            <p className="text-gray-300 text-sm">
              No confusing tech talk. I explain everything in simple terms you can understand.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h4 className="text-white font-semibold mb-2">Fair Pricing</h4>
            <p className="text-gray-300 text-sm">
              Upfront pricing with no hidden costs. You know exactly what you're paying for.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="text-white font-semibold mb-2">Personal Service</h4>
            <p className="text-gray-300 text-sm">
              You work directly with me, not a big company. I care about your success.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let's have a quick chat about your business. No pressure, no sales pitch - just a friendly conversation about
          how I can help you succeed online.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          onClick={() => onNavigate("contact")}
        >
          Let's Chat About Your Business
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  )
}
