"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ExternalLink, Code, Globe, Smartphone, Monitor, Palette, Zap, Calendar, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

interface WebsiteProject {
  id: number
  name: string
  category: "business" | "ecommerce" | "portfolio" | "healthcare" | "creative"
  description: string
  designApproach: string
  keyFeatures: string[]
  technologies: string[]
  designElements: string[]
  results: string[]
  timeline: string
  budget: string
  image: string
  url?: string
  clientTestimonial?: {
    quote: string
    author: string
    position: string
  }
}

const websiteProjects: WebsiteProject[] = [
  {
    id: 1,
    name: "TechFlow E-commerce Platform",
    category: "ecommerce",
    description: "Modern e-commerce platform with clean, conversion-focused design and seamless user experience across all devices.",
    designApproach: "Minimalist design with strategic use of white space, bold typography, and intuitive navigation to maximize conversions and user engagement.",
    keyFeatures: [
      "Mobile-first responsive design",
      "Product showcase with high-quality imagery",
      "Streamlined checkout process",
      "Advanced search and filtering",
      "Customer account dashboard",
      "Wishlist and comparison tools"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Vercel"],
    designElements: [
      "Custom color palette with brand consistency",
      "Typography hierarchy for readability",
      "Interactive product galleries",
      "Micro-animations for engagement",
      "Accessibility-first approach",
      "Performance-optimized images"
    ],
    results: [
      "300% increase in conversion rates",
      "45% reduction in cart abandonment",
      "95+ PageSpeed Insights score",
      "50% increase in average order value"
    ],
    timeline: "8-12 weeks",
    budget: "£8,000 - £15,000",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://techflow-demo.com",
    clientTestimonial: {
      quote: "The design perfectly captures our brand while driving incredible results. Sales increased by 300% within the first month.",
      author: "Sarah Mitchell",
      position: "CEO, TechFlow Ltd"
    }
  },
  {
    id: 2,
    name: "MedCare Clinic Website",
    category: "healthcare",
    description: "Professional healthcare website with patient-focused design, appointment booking, and secure communication features.",
    designApproach: "Clean, trustworthy design with calming colors and clear information hierarchy to build patient confidence and ease of use.",
    keyFeatures: [
      "Online appointment booking system",
      "Patient portal with secure login",
      "Service information with clear pricing",
      "Doctor profiles and specialties",
      "Contact forms with HIPAA compliance",
      "Responsive design for all devices"
    ],
    technologies: ["React", "Node.js", "MongoDB", "HIPAA-compliant hosting", "SSL encryption"],
    designElements: [
      "Medical-grade color scheme",
      "Professional photography integration",
      "Clear call-to-action buttons",
      "Trust indicators and certifications",
      "Easy-to-read typography",
      "Intuitive navigation structure"
    ],
    results: [
      "60% increase in online appointments",
      "90% patient satisfaction with website",
      "40% reduction in phone inquiries",
      "100% HIPAA compliance maintained"
    ],
    timeline: "10-14 weeks",
    budget: "£12,000 - £20,000",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://medcare-demo.com",
    clientTestimonial: {
      quote: "The website has transformed how patients interact with our practice. Booking appointments online has been a game-changer.",
      author: "Dr. James Wilson",
      position: "Medical Director, MedCare Clinic"
    }
  },
  {
    id: 3,
    name: "Creative Studio Portfolio",
    category: "creative",
    description: "Stunning portfolio website showcasing creative work with interactive galleries and smooth animations.",
    designApproach: "Bold, visual-first design with dynamic layouts and creative interactions that showcase the studio's artistic capabilities.",
    keyFeatures: [
      "Interactive project galleries",
      "Smooth scroll animations",
      "Video background integration",
      "Client testimonial carousel",
      "Contact form with validation",
      "Social media integration"
    ],
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "GSAP", "Cloudinary"],
    designElements: [
      "Dynamic grid layouts",
      "Custom animations and transitions",
      "High-impact visual storytelling",
      "Creative typography treatments",
      "Immersive user experience",
      "Mobile-optimized interactions"
    ],
    results: [
      "200% increase in client inquiries",
      "Featured in design showcases",
      "50% longer session duration",
      "Won 'Best Portfolio Design' award"
    ],
    timeline: "6-8 weeks",
    budget: "£5,000 - £10,000",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://creative-demo.com",
    clientTestimonial: {
      quote: "Our new portfolio website is absolutely stunning. We've seen a dramatic increase in high-quality leads since launch.",
      author: "Emma Thompson",
      position: "Creative Director, Studio Flux"
    }
  },
  {
    id: 4,
    name: "Professional Services Firm",
    category: "business",
    description: "Corporate website design emphasizing trust, expertise, and professional credibility with clear service presentation.",
    designApproach: "Professional, authoritative design with strategic use of corporate colors and structured layouts to convey expertise and reliability.",
    keyFeatures: [
      "Service pages with detailed descriptions",
      "Team member profiles",
      "Case study presentations",
      "Client testimonials section",
      "Resource library and blog",
      "Contact and consultation booking"
    ],
    technologies: ["WordPress", "Custom PHP", "MySQL", "Advanced SEO", "Security plugins"],
    designElements: [
      "Corporate color scheme",
      "Professional photography",
      "Structured information hierarchy",
      "Trust badges and certifications",
      "Clean, readable layouts",
      "Consistent branding throughout"
    ],
    results: [
      "150% increase in consultation requests",
      "80% improvement in search rankings",
      "65% longer average session time",
      "40% increase in qualified leads"
    ],
    timeline: "8-10 weeks",
    budget: "£6,000 - £12,000",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://professional-services-demo.com",
    clientTestimonial: {
      quote: "The website perfectly represents our firm's professionalism and has significantly increased our client base.",
      author: "Robert Chen",
      position: "Managing Partner, Chen & Associates"
    }
  },
  {
    id: 5,
    name: "Restaurant Chain Website",
    category: "business",
    description: "Appetizing restaurant website with online ordering, location finder, and mouth-watering food photography.",
    designApproach: "Food-focused design with warm colors, appetizing imagery, and intuitive ordering flow to drive online sales and reservations.",
    keyFeatures: [
      "Online ordering system",
      "Menu with high-quality food photos",
      "Location finder with maps",
      "Table reservation system",
      "Loyalty program integration",
      "Customer review showcase"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Google Maps API"],
    designElements: [
      "Warm, appetizing color palette",
      "Professional food photography",
      "Easy-to-navigate menu layouts",
      "Mobile-optimized ordering flow",
      "Location-based customization",
      "Social proof integration"
    ],
    results: [
      "250% increase in online orders",
      "90% mobile user satisfaction",
      "35% increase in customer retention",
      "£500K additional monthly revenue"
    ],
    timeline: "10-12 weeks",
    budget: "£10,000 - £18,000",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://restaurant-chain-demo.com",
    clientTestimonial: {
      quote: "The new website has transformed our business. Online orders now make up 60% of our revenue.",
      author: "Maria Rodriguez",
      position: "Franchise Owner, Bella Vista Restaurants"
    }
  },
  {
    id: 6,
    name: "Personal Portfolio Website",
    category: "portfolio",
    description: "Modern personal portfolio showcasing skills, projects, and achievements with clean, professional design.",
    designApproach: "Minimalist, personal branding approach with focus on showcasing work and personality through thoughtful design choices.",
    keyFeatures: [
      "Project showcase with case studies",
      "Skills and experience timeline",
      "Downloadable resume/CV",
      "Contact form and social links",
      "Blog for thought leadership",
      "Dark/light mode toggle"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "Vercel"],
    designElements: [
      "Personal brand color scheme",
      "Clean typography hierarchy",
      "Interactive project previews",
      "Smooth page transitions",
      "Responsive grid layouts",
      "Accessibility considerations"
    ],
    results: [
      "400% increase in job opportunities",
      "Featured in design communities",
      "90% positive feedback from visitors",
      "Secured dream job within 3 months"
    ],
    timeline: "4-6 weeks",
    budget: "£2,500 - £5,000",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://personal-portfolio-demo.com",
    clientTestimonial: {
      quote: "My new portfolio website helped me land my dream job. The design perfectly represents my skills and personality.",
      author: "Alex Johnson",
      position: "UX Designer"
    }
  }
]

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxProject, setLightboxProject] = useState<WebsiteProject | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Projects", icon: <Globe className="w-4 h-4" /> },
    { id: "business", label: "Business", icon: <Monitor className="w-4 h-4" /> },
    { id: "ecommerce", label: "E-commerce", icon: <Smartphone className="w-4 h-4" /> },
    { id: "creative", label: "Creative", icon: <Palette className="w-4 h-4" /> },
    { id: "portfolio", label: "Portfolio", icon: <Code className="w-4 h-4" /> },
  ]

  const filteredProjects = activeCategory === "all" 
    ? websiteProjects 
    : websiteProjects.filter(project => project.category === activeCategory)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length)
  }

  const openLightbox = (project: WebsiteProject) => {
    setLightboxProject(project)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxProject(null)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      business: "text-blue-400",
      ecommerce: "text-green-400",
      creative: "text-purple-400",
      portfolio: "text-yellow-400",
      healthcare: "text-red-400"
    }
    return colors[category as keyof typeof colors] || "text-gray-400"
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      business: <Monitor className="w-4 h-4" />,
      ecommerce: <Smartphone className="w-4 h-4" />,
      creative: <Palette className="w-4 h-4" />,
      portfolio: <Code className="w-4 h-4" />,
      healthcare: <Globe className="w-4 h-4" />
    }
    return icons[category as keyof typeof icons] || <Globe className="w-4 h-4" />
  }

  const currentProject = filteredProjects[currentIndex]

  if (!currentProject) return null

  return (
    <>
      <div className="relative">
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-gray-800/50 rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setCurrentIndex(0)
                }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Carousel */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <div className="animated-card glow-effect p-8 rounded-2xl">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Image Section */}
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-xl animated-border">
                        <img
                          src={project.image}
                          alt={`${project.name} - Professional website design and development`}
                          className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                          onClick={() => openLightbox(project)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                            onClick={() => openLightbox(project)}
                          >
                            View Details
                          </Button>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                            {getCategoryIcon(project.category)}
                            <span className="text-sm font-medium capitalize">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{project.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4">Website Design & Development</p>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Design Approach */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Palette className="w-5 h-5 mr-2 text-purple-400" />
                          Design Approach
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.designApproach}</p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-green-400" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.keyFeatures.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-blue-400" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <div
                              key={index}
                              className="bg-gray-900/50 px-3 py-1 rounded-full border border-gray-600/50 text-sm text-gray-300"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Results Preview */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                          Results
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {project.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                              <p className="text-green-100 text-sm font-medium">{result}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>{project.budget}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        <Button
                          className="enhanced-button text-white"
                          onClick={() => openLightbox(project)}
                        >
                          View Full Project
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {filteredProjects.length > 1 && (
          <>
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
          </>
        )}

        {/* Dots Indicator */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center space-x-3 mt-8">
            {filteredProjects.map((_, index) => (
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
        )}

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} of {filteredProjects.length} projects
          </span>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {lightboxOpen && lightboxProject && (
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
                    <h3 className="text-3xl font-bold text-white mb-2">{lightboxProject.name}</h3>
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center space-x-2 ${getCategoryColor(lightboxProject.category)}`}>
                        {getCategoryIcon(lightboxProject.category)}
                        <span className="font-medium capitalize">
                          {lightboxProject.category} Website
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{lightboxProject.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{lightboxProject.budget}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">{lightboxProject.description}</p>
              </div>

              {/* Image Section */}
              <div className="relative">
                <img
                  src={lightboxProject.image}
                  alt={`${lightboxProject.name} - Website design showcase`}
                  className="w-full h-auto max-h-[50vh] object-contain bg-gray-800"
                />
              </div>

              {/* Detailed Content */}
              <div className="bg-gray-900/95 p-6 space-y-8">
                {/* Design Approach */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                    <Palette className="w-5 h-5 mr-2 text-purple-400" />
                    Design Approach
                  </h4>
                  <p className="text-gray-300">{lightboxProject.designApproach}</p>
                </div>

                {/* Features, Design Elements, Technologies Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-green-400" />
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {lightboxProject.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Design Elements */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-purple-400" />
                      Design Elements
                    </h4>
                    <ul className="space-y-2">
                      {lightboxProject.designElements.map((element, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-blue-400" />
                      Technologies
                    </h4>
                    <div className="space-y-2">
                      {lightboxProject.technologies.map((tech, index) => (
                        <div key={index} className="bg-gray-800/50 px-3 py-1 rounded-full">
                          <span className="text-sm text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results & Impact */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Results & Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {lightboxProject.results.map((result, index) => (
                      <div key={index} className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                        <div className="flex items-start space-x-3">
                          <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                          <p className="text-green-100 text-sm font-medium">{result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {lightboxProject.clientTestimonial && (
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h4 className="text-lg font-bold text-white mb-3">Client Testimonial</h4>
                    <blockquote className="text-blue-100 italic mb-4">
                      "{lightboxProject.clientTestimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-sm">
                          {lightboxProject.clientTestimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{lightboxProject.clientTestimonial.author}</div>
                        <div className="text-blue-300 text-sm">{lightboxProject.clientTestimonial.position}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                  <Button
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => window.open("mailto:leedaydevs@gmail.com?subject=Website Design Inquiry&body=I'm interested in a website similar to " + lightboxProject.name, "_blank")}
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