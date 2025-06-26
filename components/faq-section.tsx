"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: "general" | "pricing" | "process" | "technical"
}

const faqData: FAQItem[] = [
  {
    id: "how-long-website",
    question: "How long does it take to build a website?",
    answer:
      "Most small business websites take 1-2 weeks from start to finish. This includes design, development, content integration, and testing. More complex projects with e-commerce or custom features may take 2-4 weeks. I'll give you a precise timeline during our free consultation.",
    category: "process",
  },
  {
    id: "ongoing-support",
    question: "Do you provide ongoing support after launch?",
    answer:
      "I offer comprehensive hosting and maintenance packages starting from £25/month. This includes security updates, backups, performance monitoring, and technical support. You'll never be left to figure things out on your own.",
    category: "general",
  },
  {
    id: "cost-breakdown",
    question: "What's included in the website price?",
    answer:
      "Every website includes responsive design, mobile optimization, contact forms, basic SEO setup, Google Analytics, social media integration, and 1 month of free hosting. You own the website completely - no ongoing fees unless you choose our hosting/maintenance services.",
    category: "pricing",
  },
  {
    id: "changes-after-launch",
    question: "What if I need changes after the website is live?",
    answer:
      "All websites come with a 30-day warranty for bug fixes and minor adjustments. After that, I offer affordable maintenance packages or can train you to make simple updates yourself. Major changes are quoted separately but always at fair rates.",
    category: "process",
  },
  {
    id: "ai-chatbot-work",
    question: "How do AI chatbots actually help my business?",
    answer:
      "AI chatbots work 24/7 to answer customer questions, book appointments, and capture leads even when you're closed. They can handle 80% of common inquiries instantly, freeing up your time for important tasks while ensuring customers always get immediate responses.",
    category: "technical",
  },
  {
    id: "hosting-required",
    question: "Do I have to use your hosting services?",
    answer:
      "Not at all! You can host your website anywhere you like. However, my hosting packages are specifically optimized for the websites I build, include automatic backups, security monitoring, and priority support. Many clients find it more convenient and cost-effective.",
    category: "technical",
  },
  {
    id: "payment-terms",
    question: "How does payment work?",
    answer:
      "I typically ask for 50% upfront to begin work and 50% upon completion. For larger projects, we can arrange a payment plan. I accept bank transfers, card payments, and can provide invoices for business accounting. No hidden fees ever.",
    category: "pricing",
  },
  {
    id: "design-input",
    question: "Can I have input on the design?",
    answer:
      "This is YOUR website. I work closely with you throughout the design process, showing you mockups and getting your feedback. You'll see exactly what your website will look like before any coding begins. Unlimited revisions during the design phase.",
    category: "process",
  },
  {
    id: "mobile-friendly",
    question: "Will my website work on mobile phones?",
    answer:
      "Yes, every website I build is mobile-first and fully responsive. With over 60% of web traffic coming from mobile devices, I ensure your site looks perfect and loads fast on phones, tablets, and desktops. This also helps with Google rankings.",
    category: "technical",
  },
  {
    id: "seo-included",
    question: "Is SEO included or extra?",
    answer:
      "Basic SEO setup is included with every website - proper page titles, meta descriptions, fast loading, mobile optimization, and Google Analytics. For ongoing SEO and local search optimization, I offer separate monthly packages starting from £200/month.",
    category: "pricing",
  },
]

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "general", label: "General", icon: HelpCircle },
  { id: "pricing", label: "Pricing", icon: HelpCircle },
  { id: "process", label: "Process", icon: HelpCircle },
  { id: "technical", label: "Technical", icon: HelpCircle },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = activeCategory === "all" ? faqData : faqData.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
                : "bg-gray-800/50 border-gray-600/50 text-gray-400 hover:bg-gray-700/50 hover:border-gray-500/50"
            }`}
          >
            <category.icon className="w-4 h-4 mr-2" />
            {category.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {filteredFAQs.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
              aria-expanded={openItems.includes(item.id)}
            >
              <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
              <div className="flex-shrink-0">
                {openItems.includes(item.id) ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {openItems.includes(item.id) && (
              <div className="px-6 pb-4">
                <div className="border-t border-gray-700/50 pt-4">
                  <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            I'm here to help! Get in touch for a free consultation where we can discuss your specific needs and answer
            any questions about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:LeeDayDevs@gmail.com"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Email Me Directly
            </a>
            <a
              href="https://wa.me/447586266007?text=Hi! I have some questions about your web development services. Can we chat?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
