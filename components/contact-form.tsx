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

  const isFormValid = formData.name && formData.email && formData.message && formData.gdprConsent

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 font-medium">Thank you for your message!</p>
            <p className="text-green-300 text-sm mt-1">I'll get back to you within 24 hours to discuss your project.</p>
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
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Your company name (optional)"
            />
          </div>

          {/* Service Interest */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
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
              I consent to Lee Day storing and processing my personal data for the purpose of responding to my inquiry.
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
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none"
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
        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 text-blue-400 mr-2" />
            Service Areas
          </h3>

          {/* Map Container */}
          <div className="relative h-64 bg-gray-900/50 rounded-lg border border-gray-600 overflow-hidden mb-4">
            <img
              src="/placeholder.svg?height=256&width=400&text=London+%26+Windsor+Service+Areas"
              alt="Service area map showing London and Windsor locations where Lee Day provides web development and AI integration services"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

            {/* Location Markers */}
            <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium bg-gray-900/80 px-2 py-1 rounded whitespace-nowrap">
                London
              </div>
            </div>
            <div className="absolute top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium bg-gray-900/80 px-2 py-1 rounded whitespace-nowrap">
                Windsor
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm">
            Serving clients across London, Windsor, and surrounding areas. Remote collaboration available worldwide.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
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
                  href="tel:+447123456789"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +44-7123-456789
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
                <p className="text-gray-400">London & Windsor, UK</p>
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
          </div>
        </div>
      </div>
    </div>
  )
}
