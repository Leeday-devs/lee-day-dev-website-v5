"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  FileText,
  Code,
  Rocket,
  HeadphonesIcon,
  CheckCircle,
  Clock,
  Users,
  ArrowRight,
  Phone,
  Calendar,
  Lightbulb,
  Target,
  TestTube,
  Shield,
} from "lucide-react"

interface ProcessStep {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  duration: string
  deliverables: string[]
  color: string
  gradient: string
}

const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Consultation",
    subtitle: "Understanding Your Business",
    description:
      "We start with a comprehensive consultation to understand your business goals, target audience, budget, and specific requirements. This ensures we build exactly what you need.",
    icon: <MessageCircle className="w-8 h-8" />,
    duration: "1-2 days",
    deliverables: [
      "Free 30-minute consultation call",
      "Business requirements analysis",
      "Target audience identification",
      "Budget and timeline discussion",
      "Technical requirements assessment",
      "Competitive analysis overview",
    ],
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "planning",
    number: "02",
    title: "Planning & Strategy",
    subtitle: "Creating Your Roadmap",
    description:
      "Based on our discovery, we create a detailed project plan with wireframes, technical specifications, and a clear timeline. You'll know exactly what to expect.",
    icon: <FileText className="w-8 h-8" />,
    duration: "2-3 days",
    deliverables: [
      "Detailed project proposal",
      "Site architecture & wireframes",
      "Technical specification document",
      "Content strategy outline",
      "SEO strategy planning",
      "Project timeline with milestones",
    ],
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "design",
    number: "03",
    title: "Design & Development",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our development phase combines beautiful design with robust functionality. You'll see regular progress updates and have opportunities to provide feedback throughout.",
    icon: <Code className="w-8 h-8" />,
    duration: "1-3 weeks",
    deliverables: [
      "Custom responsive design",
      "Mobile-first development",
      "Content management system",
      "SEO optimization implementation",
      "Performance optimization",
      "Regular progress updates",
    ],
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "testing",
    number: "04",
    title: "Testing & Review",
    subtitle: "Ensuring Everything Works",
    description:
      "Before launch, we thoroughly test everything across devices and browsers. You'll have time to review and request any final adjustments.",
    icon: <TestTube className="w-8 h-8" />,
    duration: "2-3 days",
    deliverables: [
      "Cross-browser testing",
      "Mobile responsiveness testing",
      "Performance speed testing",
      "SEO audit and optimization",
      "Security vulnerability check",
      "Client review and feedback session",
    ],
    color: "orange",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch & Go Live",
    subtitle: "Making You Visible Online",
    description:
      "We handle the technical launch process, set up analytics, and ensure everything runs smoothly. Your website goes live with zero downtime.",
    icon: <Rocket className="w-8 h-8" />,
    duration: "1 day",
    deliverables: [
      "Domain and hosting setup",
      "SSL certificate installation",
      "Google Analytics configuration",
      "Search Console setup",
      "Backup system implementation",
      "Launch day monitoring",
    ],
    color: "red",
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "support",
    number: "06",
    title: "Ongoing Support",
    subtitle: "We're Here When You Need Us",
    description:
      "After launch, we provide training, documentation, and ongoing support. You're never left to figure things out alone - we're your long-term technology partner.",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    duration: "Ongoing",
    deliverables: [
      "Website training session",
      "Comprehensive documentation",
      "30-day warranty period",
      "Monthly maintenance options",
      "Priority support access",
      "Future enhancement planning",
    ],
    color: "teal",
    gradient: "from-teal-500 to-cyan-500",
  },
]

const processHighlights = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Clear Timelines",
    description: "Every project has defined milestones and realistic deadlines",
    color: "blue",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Regular Communication",
    description: "Weekly updates and always available for questions",
    color: "green",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Quality Guarantee",
    description: "30-day warranty and satisfaction guarantee on all work",
    color: "purple",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Focused",
    description: "Every decision is made with your business goals in mind",
    color: "orange",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string>("discovery")
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  const toggleExpanded = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
  }

  const activeStepData = processSteps.find((step) => step.id === activeStep) || processSteps[0]

  return (
    <div className="space-y-16">
      {/* Process Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processHighlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 text-center hover:border-gray-600/50 transition-all duration-300"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${highlight.color}-500/20 mb-4`}
            >
              <div className={`text-${highlight.color}-400`}>{highlight.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
            <p className="text-gray-400 text-sm">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Process Timeline */}
      <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50 p-8">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Our 6-Step Process</h3>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-700 rounded-full">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-500"
                style={{
                  width: `${((processSteps.findIndex((s) => s.id === activeStep) + 1) / processSteps.length) * 100}%`,
                }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-6 gap-4 relative">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`relative w-16 h-16 rounded-full border-4 transition-all duration-300 mb-4 mx-auto flex items-center justify-center ${
                      activeStep === step.id
                        ? `bg-gradient-to-r ${step.gradient} border-white text-white shadow-lg scale-110`
                        : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
                    }`}
                  >
                    {activeStep === step.id ? step.icon : <span className="font-bold">{step.number}</span>}
                  </button>
                  <h4
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      activeStep === step.id ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="mt-12 bg-gray-900/50 rounded-xl border border-gray-700/50 p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${activeStepData.gradient} flex items-center justify-center mr-4`}
                  >
                    {activeStepData.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeStepData.title}</h3>
                    <p className="text-gray-400">{activeStepData.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">{activeStepData.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Duration: {activeStepData.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">What You Get:</h4>
                <ul className="space-y-3">
                  {activeStepData.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, index) => (
            <div key={step.id} className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden">
              <button
                onClick={() => toggleExpanded(step.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center mr-4`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.duration}</p>
                  </div>
                </div>
                <ArrowRight
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedStep === step.id ? "rotate-90" : ""
                  }`}
                />
              </button>

              {expandedStep === step.id && (
                <div className="px-6 pb-6 border-t border-gray-700/50">
                  <p className="text-gray-300 mb-4 mt-4">{step.description}</p>
                  <h4 className="text-white font-semibold mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Our Process Works */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Our Process Works</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">No Surprises</h4>
            <p className="text-gray-300 text-sm">
              Clear communication and defined milestones mean you always know what's happening and when.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Results-Driven</h4>
            <p className="text-gray-300 text-sm">
              Every step is designed to deliver measurable results that help grow your business.
            </p>
          </div>

          <div className="text-center md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Partnership Approach</h4>
            <p className="text-gray-300 text-sm">
              We work with you, not just for you. Your input and feedback shape the final result.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start Options */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Choose how you'd like to begin your project. We offer flexible options to fit your schedule and preferences.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Phone Consultation</h4>
            <p className="text-gray-400 text-sm mb-4">
              Quick 15-30 minute call to discuss your needs and get immediate answers.
            </p>
            <a
              href="tel:+447586266007"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
            >
              Call Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-green-500/50 transition-all duration-300">
            <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">WhatsApp Chat</h4>
            <p className="text-gray-400 text-sm mb-4">
              Send a message with your project details and get a response within hours.
            </p>
            <a
              href="https://wa.me/447586266007?text=Hi! I'd like to discuss a web development project. Can we chat about the process?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
            >
              Start Chat
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-300">
            <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Detailed Consultation</h4>
            <p className="text-gray-400 text-sm mb-4">
              Fill out our contact form for a comprehensive project discussion and quote.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Get Quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
