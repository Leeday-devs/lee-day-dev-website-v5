"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ExternalLink, Code, Brain, Server, Smartphone, Globe, Database, Zap, Monitor, ShoppingCart, Calendar, Users, TrendingUp, Shield, Palette } from "lucide-react"

interface PortfolioItem {
  id: number
  name: string
  category: "new-build" | "redesign"
  description: string
  scope: string
  objectives: string[]
  technologies: string[]
  features: string[]
  challenges: string[]
  results: string[]
  timeline: string
  budget: string
  image: string
  beforeImage?: string
  url?: string
  clientTestimonial?: {
    quote: string
    author: string
    position: string
  }
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    name: "TechFlow E-commerce Platform",
    category: "new-build",
    description: "Complete e-commerce solution built from scratch with AI-powered product recommendations and automated inventory management.",
    scope: "Full-stack e-commerce development with AI integration, payment processing, and admin dashboard",
    objectives: [
      "Create modern, mobile-first shopping experience",
      "Implement AI-driven product recommendations",
      "Integrate secure payment processing",
      "Build comprehensive admin dashboard",
      "Ensure scalable architecture for growth"
    ],
    technologies: ["Next.js", "TypeScript", "Stripe API", "PostgreSQL", "AI/ML APIs", "Tailwind CSS"],
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Multi-payment gateway integration",
      "Advanced search and filtering",
      "Customer analytics dashboard",
      "Mobile-responsive design"
    ],
    challenges: [
      "Complex inventory synchronization across multiple warehouses",
      "Real-time AI recommendation engine implementation",
      "Secure payment processing with multiple gateways",
      "Performance optimization for large product catalogs"
    ],
    results: [
      "300% increase in conversion rates",
      "45% reduction in cart abandonment",
      "99.9% uptime since launch",
      "50% increase in average order value",
      "Processed over £2M in transactions"
    ],
    timeline: "12 weeks",
    budget: "£15,000 - £25,000",
    image: "/placeholder.svg?height=400&width=600&text=TechFlow+E-commerce+Platform",
    url: "https://techflow-demo.com",
    clientTestimonial: {
      quote: "Lee transformed our business idea into a powerful e-commerce platform that exceeded all expectations. The AI recommendations alone increased our sales by 40%.",
      author: "Sarah Mitchell",
      position: "CEO, TechFlow Ltd"
    }
  },
  {
    id: 2,
    name: "MedCare Clinic Portal",
    category: "new-build",
    description: "Healthcare management system with AI appointment scheduling, patient communication tools, and secure medical records.",
    scope: "HIPAA-compliant healthcare platform with patient portal, appointment system, and telemedicine integration",
    objectives: [
      "Streamline patient appointment booking",
      "Implement secure patient communication",
      "Create comprehensive medical records system",
      "Enable telemedicine consultations",
      "Ensure HIPAA compliance throughout"
    ],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Encryption APIs", "Healthcare APIs"],
    features: [
      "AI-powered appointment scheduling",
      "Secure patient messaging system",
      "Telemedicine video consultations",
      "Electronic health records (EHR)",
      "Prescription management",
      "Insurance verification system"
    ],
    challenges: [
      "HIPAA compliance and data encryption",
      "Real-time video consultation implementation",
      "Complex appointment scheduling algorithms",
      "Integration with existing medical systems"
    ],
    results: [
      "60% reduction in appointment scheduling time",
      "90% patient satisfaction rate",
      "40% increase in consultation efficiency",
      "Zero security incidents since launch",
      "Serving 5,000+ active patients"
    ],
    timeline: "16 weeks",
    budget: "£25,000 - £40,000",
    image: "/placeholder.svg?height=400&width=600&text=MedCare+Clinic+Portal",
    url: "https://medcare-demo.com",
    clientTestimonial: {
      quote: "The platform has revolutionized how we manage patient care. The AI scheduling system alone has saved us 20 hours per week.",
      author: "Dr. James Wilson",
      position: "Medical Director, MedCare Clinic"
    }
  },
  {
    id: 3,
    name: "Creative Studio Portfolio",
    category: "new-build",
    description: "Interactive portfolio website for creative agency with dynamic animations, project showcases, and client testimonials.",
    scope: "Creative portfolio with interactive elements, content management system, and performance optimization",
    objectives: [
      "Showcase creative work with stunning visuals",
      "Create engaging user interactions",
      "Implement easy content management",
      "Optimize for fast loading times",
      "Ensure mobile responsiveness"
    ],
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel", "Cloudinary", "GSAP"],
    features: [
      "Interactive project galleries",
      "Smooth scroll animations",
      "Dynamic content management",
      "Client testimonial carousel",
      "Contact form with validation",
      "SEO optimization"
    ],
    challenges: [
      "Balancing visual appeal with performance",
      "Complex animation synchronization",
      "Image optimization for various formats",
      "Cross-browser compatibility for animations"
    ],
    results: [
      "200% increase in client inquiries",
      "95+ PageSpeed Insights score",
      "50% longer average session duration",
      "Featured in design showcases",
      "Won 'Best Portfolio Design' award"
    ],
    timeline: "8 weeks",
    budget: "£8,000 - £15,000",
    image: "/placeholder.svg?height=400&width=600&text=Creative+Studio+Portfolio",
    url: "https://creative-demo.com",
    clientTestimonial: {
      quote: "Our new portfolio website is absolutely stunning. We've seen a dramatic increase in high-quality leads since launch.",
      author: "Emma Thompson",
      position: "Creative Director, Studio Flux"
    }
  },
  {
    id: 4,
    name: "Legacy Manufacturing Website",
    category: "redesign",
    description: "Complete transformation of outdated manufacturing website into modern, mobile-responsive platform with improved UX.",
    scope: "Full website redesign, content migration, SEO optimization, and performance enhancement",
    objectives: [
      "Modernize outdated design and functionality",
      "Improve mobile responsiveness",
      "Enhance search engine visibility",
      "Streamline user navigation",
      "Integrate modern contact systems"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "jQuery", "Bootstrap", "Google Analytics"],
    features: [
      "Responsive mobile design",
      "Product catalog with search",
      "Quote request system",
      "Company timeline showcase",
      "News and updates section",
      "Multi-language support"
    ],
    challenges: [
      "Migrating 15 years of legacy content",
      "Maintaining SEO rankings during transition",
      "Integrating with existing ERP system",
      "Training staff on new CMS"
    ],
    results: [
      "400% increase in mobile traffic",
      "150% improvement in page load speed",
      "80% increase in quote requests",
      "300% boost in organic search traffic",
      "Reduced bounce rate by 45%"
    ],
    timeline: "10 weeks",
    budget: "£12,000 - £20,000",
    image: "/placeholder.svg?height=400&width=600&text=Modern+Manufacturing+Website",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Old+Manufacturing+Website",
    url: "https://legacy-manufacturing-demo.com",
    clientTestimonial: {
      quote: "The website transformation exceeded our expectations. We're finally proud to send clients to our website again.",
      author: "Robert Chen",
      position: "Operations Manager, Legacy Manufacturing"
    }
  },
  {
    id: 5,
    name: "Restaurant Chain Optimization",
    category: "redesign",
    description: "Performance optimization and mobile redesign for restaurant chain website with online ordering integration.",
    scope: "UX/UI redesign, performance optimization, online ordering system integration, and mobile app development",
    objectives: [
      "Improve website loading speed",
      "Enhance mobile ordering experience",
      "Integrate with existing POS system",
      "Implement loyalty program",
      "Optimize for local SEO"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Google Maps API"],
    features: [
      "Online ordering system",
      "Real-time order tracking",
      "Loyalty points program",
      "Location-based menu pricing",
      "Table reservation system",
      "Customer review integration"
    ],
    challenges: [
      "Integrating with legacy POS systems",
      "Handling high-traffic ordering periods",
      "Synchronizing menu across multiple locations",
      "Implementing real-time order tracking"
    ],
    results: [
      "250% increase in online orders",
      "70% faster page load times",
      "90% mobile user satisfaction",
      "35% increase in customer retention",
      "£500K additional monthly revenue"
    ],
    timeline: "14 weeks",
    budget: "£20,000 - £35,000",
    image: "/placeholder.svg?height=400&width=600&text=Modern+Restaurant+Website",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Old+Restaurant+Website",
    url: "https://restaurant-chain-demo.com",
    clientTestimonial: {
      quote: "The new ordering system has transformed our business. Online orders now make up 60% of our revenue.",
      author: "Maria Rodriguez",
      position: "Franchise Owner, Bella Vista Restaurants"
    }
  },
  {
    id: 6,
    name: "Financial Services Modernization",
    category: "redesign",
    description: "Security-focused redesign of financial services website with enhanced user experience and compliance features.",
    scope: "Security audit, UX redesign, compliance implementation, and performance optimization",
    objectives: [
      "Enhance website security measures",
      "Improve user trust and credibility",
      "Ensure regulatory compliance",
      "Streamline client onboarding",
      "Implement secure document sharing"
    ],
    technologies: ["Next.js", "TypeScript", "Auth0", "Encryption APIs", "Compliance Tools", "Security Scanners"],
    features: [
      "Multi-factor authentication",
      "Secure client portal",
      "Document encryption system",
      "Compliance reporting tools",
      "Risk assessment calculator",
      "Live chat with advisors"
    ],
    challenges: [
      "Meeting strict financial regulations",
      "Implementing bank-level security",
      "Migrating sensitive client data",
      "Maintaining system performance with security layers"
    ],
    results: [
      "100% compliance audit pass",
      "Zero security incidents",
      "60% faster client onboarding",
      "40% increase in client satisfaction",
      "Reduced support tickets by 50%"
    ],
    timeline: "18 weeks",
    budget: "£30,000 - £50,000",
    image: "/placeholder.svg?height=400&width=600&text=Secure+Financial+Website",
    beforeImage: "/placeholder.svg?height=400&width=600&text=Old+Financial+Website",
    url: "https://financial-services-demo.com",
    clientTestimonial: {
      quote: "Lee's expertise in financial compliance and security gave us complete confidence. The new platform has strengthened client trust significantly.",
      author: "David Park",
      position: "Managing Director, Park Financial Advisors"
    }
  }
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<PortfolioItem | null>(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const openLightbox = (item: PortfolioItem) => {
    setLightboxImage(item)
    setLightboxOpen(true)
    setShowBeforeAfter(false)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage(null)
    setShowBeforeAfter(false)
  }

  const getServiceIcon = (tech: string) => {
    if (tech.includes("Next.js") || tech.includes("React")) return <Code className="w-4 h-4" />
    if (tech.includes("AI") || tech.includes("ML")) return <Brain className="w-4 h-4" />
    if (tech.includes("Node.js") || tech.includes("Express")) return <Server className="w-4 h-4" />
    if (tech.includes("Mobile") || tech.includes("Responsive")) return <Smartphone className="w-4 h-4" />
    if (tech.includes("Database") || tech.includes("MongoDB") || tech.includes("PostgreSQL")) return <Database className="w-4 h-4" />
    if (tech.includes("Stripe") || tech.includes("Payment")) return <ShoppingCart className="w-4 h-4" />
    return <Globe className="w-4 h-4" />
  }

  const getCategoryIcon = (category: string) => {
    return category === "new-build" ? <Zap className="w-4 h-4" /> : <Palette className="w-4 h-4" />
  }

  const getCategoryColor = (category: string) => {
    return category === "new-build" ? "text-green-400" : "text-purple-400"
  }

  const currentItem = portfolioItems[currentIndex]

  return (
    <>
      <div className="relative">
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4 bg-gray-800/50 rounded-full p-2">
            <button className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
              All Projects
            </button>
            <button className="px-4 py-2 rounded-full text-gray-400 hover:text-white text-sm font-medium transition-colors">
              New Builds
            </button>
            <button className="px-4 py-2 rounded-full text-gray-400 hover:text-white text-sm font-medium transition-colors">
              Redesigns
            </button>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className="animated-card glow-effect p-8 rounded-2xl">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Image Section */}
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-xl animated-border">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name} - ${item.description}`}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                          onClick={() => openLightbox(item)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                            onClick={() => openLightbox(item)}
                          >
                            View Details
                          </Button>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm ${getCategoryColor(item.category)}`}>
                            {getCategoryIcon(item.category)}
                            <span className="text-sm font-medium capitalize">
                              {item.category === "new-build" ? "New Build" : "Redesign"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4">{item.scope}</p>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>

                      {/* Key Objectives */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Objectives</h4>
                        <ul className="space-y-2">
                          {item.objectives.slice(0, 3).map((objective, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.slice(0, 4).map((tech, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-600/50"
                            >
                              {getServiceIcon(tech)}
                              <span className="text-sm text-gray-300">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results Preview */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {item.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="bg-gray-900/30 p-3 rounded-lg border border-gray-600/20">
                              <div className="flex items-center space-x-2 mb-1">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span className="text-green-400 text-sm font-medium">Success</span>
                              </div>
                              <p className="text-gray-300 text-sm">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>{item.budget}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button
                          className="enhanced-button text-white"
                          onClick={() => openLightbox(item)}
                        >
                          View Case Study
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                        {item.url && (
                          <Button
                            variant="outline"
                            className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
                            onClick={() => window.open(item.url, "_blank")}
                          >
                            Live Site
                            <Globe className="ml-2 w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-3 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} of {portfolioItems.length} projects
          </span>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightboxOpen && lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full p-2 text-white hover:bg-gray-800 transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div className="animated-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gray-900/95 p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{lightboxImage.name}</h3>
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center space-x-2 ${getCategoryColor(lightboxImage.category)}`}>
                        {getCategoryIcon(lightboxImage.category)}
                        <span className="font-medium capitalize">
                          {lightboxImage.category === "new-build" ? "New Build Project" : "Redesign Project"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{lightboxImage.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{lightboxImage.budget}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {lightboxImage.beforeImage && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    >
                      {showBeforeAfter ? "Show After" : "Show Before"}
                    </Button>
                  )}
                </div>
                <p className="text-gray-300 text-lg">{lightboxImage.description}</p>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={showBeforeAfter && lightboxImage.beforeImage ? lightboxImage.beforeImage : lightboxImage.image}
                  alt={`${lightboxImage.name} - ${showBeforeAfter ? 'Before' : 'After'} ${lightboxImage.category} project`}
                  className="w-full h-auto max-h-[50vh] object-contain bg-gray-800"
                />
                {showBeforeAfter && (
                  <div className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Before Redesign
                  </div>
                )}
              </div>

              {/* Detailed Content */}
              <div className="bg-gray-900/95 p-6 space-y-8">
                {/* Project Scope */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Project Scope</h4>
                  <p className="text-gray-300">{lightboxImage.scope}</p>
                </div>

                {/* Objectives, Features, Technologies Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Objectives */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {lightboxImage.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-green-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {lightboxImage.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-purple-400" />
                      Technologies
                    </h4>
                    <div className="space-y-2">
                      {lightboxImage.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-full">
                          {getServiceIcon(tech)}
                          <span className="text-sm text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-yellow-400" />
                    Challenges & Solutions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lightboxImage.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-600/30">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-yellow-400 text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-300 text-sm">{challenge}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results & Impact */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Results & Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lightboxImage.results.map((result, index) => (
                      <div key={index} className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <TrendingUp className="w-3 h-3 text-green-400" />
                          </div>
                          <p className="text-green-100 text-sm font-medium">{result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {lightboxImage.clientTestimonial && (
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-400" />
                      Client Testimonial
                    </h4>
                    <blockquote className="text-blue-100 italic mb-4">
                      "{lightboxImage.clientTestimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{lightboxImage.clientTestimonial.author}</div>
                        <div className="text-blue-300 text-sm">{lightboxImage.clientTestimonial.position}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                  {lightboxImage.url && (
                    <Button
                      className="enhanced-button text-white"
                      onClick={() => window.open(lightboxImage.url, "_blank")}
                    >
                      View Live Site
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => window.open("mailto:leedaydevs@gmail.com?subject=Project Inquiry&body=I'm interested in a similar project to " + lightboxImage.name, "_blank")}
                  >
                    Start Similar Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}