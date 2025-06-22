"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Mail, Phone, Clock } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
  gdprConsent: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    gdprConsent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const serviceOptions = [
    { value: "", label: "Select a service..." },
    { value: "web-development", label: "Custom Web Development" },
    { value: "hosting-creation", label: "Hosting & Website Creation" },
    { value: "ai-integration", label: "AI Assistant Integration" },
    { value: "ecommerce", label: "E-commerce Solutions" },
    { value: "ai-portal", label: "LD Development AI Portal" },
    { value: "consultation", label: "General Consultation" },
    { value: "other", label: "Other" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create WhatsApp message with form details
      const whatsappMessage = createWhatsAppMessage(formData)
      
      // Simulate form submission - in a real app, this would send to your backend
      const emailData = {
        to: "leedaydevs@gmail.com",
        subject: `New Quote Request from ${formData.name}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service Interest: ${serviceOptions.find((s) => s.value === formData.service)?.label || "Not specified"}
Message: ${formData.message}

GDPR Consent: ${formData.gdprConsent ? "Yes" : "No"}
Submitted: ${new Date().toLocaleString()}
        `,
      }

      // In a real implementation, you would send this to your backend API
      console.log("Form submission:", emailData)

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Open WhatsApp with pre-filled message
      window.open(whatsappMessage, '_blank')
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        gdprConsent: false,
      })
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Function to create WhatsApp message URL with form data
  const createWhatsAppMessage = (data: FormData) => {
    const serviceLabel = serviceOptions.find((s) => s.value === data.service)?.label || "Not specified"
    
    const message = `Hi Lee! 👋

I just submitted a quote request through your website and wanted to connect directly via WhatsApp.

📋 *Project Details:*
• Name: ${data.name}
• Email: ${data.email}
• Company: ${data.company || "Not provided"}
• Service Interest: ${serviceLabel}

💬 *Project Description:*
${data.message}

I'm looking forward to discussing this project with you!

Best regards,
${data.name}`

    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/447586266007?text=${encodedMessage}`
  }

  const isFormValid = formData.name && formData.email && formData.message && formData.gdprConsent

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <div className="card-primary">
        <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 font-medium">Thank you for your message!</p>
            <p className="text-green-300 text-sm mt-1">
              Your request has been sent and WhatsApp should have opened with your details. 
              I'll also respond via email within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 font-medium">Something went wrong.</p>
            <p className="text-red-300 text-sm mt-1">Please try again or contact me directly.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your company name (optional)"
            />
          </div>

          {/* Service Interest */}
          <div>
            <label htmlFor="service" className="form-label">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="form-input"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-gray-900">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="form-input resize-vertical"
              placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
            />
          </div>

          {/* GDPR Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="gdprConsent"
              name="gdprConsent"
              checked={formData.gdprConsent}
              onChange={handleInputChange}
              required
              className="mt-1 w-4 h-4 text-blue-600 bg-gray-900 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="gdprConsent" className="text-sm text-gray-300 leading-relaxed">
              I consent to LD Web Development storing and processing my personal data for the purpose of responding to my inquiry.
              You can withdraw your consent at any time. *
            </label>
          </div>

          {/* Privacy Note */}
          <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Privacy Notice:</strong> Your personal information will only be used to
              respond to your inquiry and provide relevant service information. We never share your data with third
              parties. For more details, see our{" "}
              <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Sending Request...
              </>
            ) : (
              <>
                Request Quote
                <ArrowRight className="ml-2" size={20} />
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Map and Contact Info */}
      <div className="space-y-8">
        {/* Map Placeholder */}
        <div className="card-secondary">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 text-blue-400 mr-2 pulse-accent" />
            Service Areas
          </h3>

          {/* Map Container */}
          <div className="relative h-80 bg-gray-900/50 rounded-lg border border-gray-600 overflow-hidden mb-4">
            {/* Interactive Map Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-purple-900/20"></div>
            
            {/* Map Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>
            </div>

            {/* UK Outline Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-64">
                {/* Simplified UK Shape */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-tl-3xl rounded-tr-lg rounded-bl-2xl rounded-br-xl transform rotate-12 opacity-40"></div>
                
                {/* London Marker */}
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative group cursor-pointer">
                    <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse shadow-lg border-2 border-white/50 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap font-medium">
                        London
                      </div>
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 w-6 h-6 bg-blue-500/30 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Windsor Marker */}
                <div className="absolute top-3/4 left-2/5 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative group cursor-pointer">
                    <div className="w-5 h-5 bg-purple-500 rounded-full animate-pulse shadow-lg border-2 border-white/50 group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-gray-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap font-medium">
                        Windsor
                      </div>
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 w-5 h-5 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                {/* Service Area Coverage */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse border border-blue-400/20"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse border border-blue-400/30" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>

            {/* Global Service Indicator */}
            <div className="absolute top-4 right-4">
              <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Worldwide Service</span>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-30">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 120 200 Q 140 180 160 200"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Interactive Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20"></div>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-gray-900/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-600/50">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-xs">Primary Service Area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-white text-xs">Extended Coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm">
            Primary service areas in London and Windsor with remote collaboration available worldwide for all projects.
          </p>
        </div>

        {/* Contact Information */}
        <div className="card-secondary">
          <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <a
                  href="tel:07586266007"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  07586266007
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <a
                  href="mailto:leedaydevs@gmail.com"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  leedaydevs@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400">London, UK • Worldwide Service</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-medium">Business Hours</p>
                <div className="text-gray-400 text-sm">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-blue-300 font-medium text-sm">⚡ Quick Response</p>
            <p className="text-blue-200 text-sm">
              I typically respond to all inquiries within 24 hours during business days.
            </p>

            {/* WhatsApp Quick Contact */}
            <div className="mt-6">
              <a
                href="https://wa.me/447586266007?text=Hi%20Lee!%20👋%0A%0AI'm%20interested%20in%20discussing%20a%20web%20development%20project.%20Could%20we%20chat%3F%0A%0AServices%20I'm%20interested%20in:%0A•%20Custom%20Web%20Development%0A•%20AI%20Integration%0A•%20Hosting%20%26%20Maintenance%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 btn-accent px-4 py-3 rounded-xl hover-lift focus-visible"
                aria-label="Contact via WhatsApp for instant messaging"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">WhatsApp Chat</div>
                  <div className="text-green-100 text-xs">Instant response • Available now</div>
                </div>
                <div className="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}