import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "LD Web Development – Custom Web Development & AI Integration UK",
  description:
    "Professional web development & AI integration services in London. Custom websites, hosting, AI chatbots & automation solutions for UK businesses by LD Web Development.",
  keywords:
    "web development, AI integration, custom websites, hosting, chatbots, London, UK, responsive design, e-commerce, automation, LD Web Development",
  authors: [{ name: "Lee Day", url: "https://ldwebdevelopment.co.uk" }],
  creator: "LD Web Development",
  publisher: "LD Web Development - a part of Hosting Easy Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ldwebdevelopment.co.uk",
    title: "LD Web Development – Custom Web Development & AI Integration UK",
    description:
      "Professional web development & AI integration services in London. Custom websites, hosting, AI chatbots & automation solutions for UK businesses by LD Web Development.",
    siteName: "LD Web Development",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LD Web Development - Web Development & AI Integration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LD Web Development – Custom Web Development & AI Integration UK",
    description:
      "Professional web development & AI integration services in London. Custom websites, hosting, AI chatbots & automation solutions by LD Web Development.",
    images: ["/og-image.jpg"],
    creator: "@ldwebdev",
  },
  alternates: {
    canonical: "https://ldwebdevelopment.co.uk",
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "London",
    "geo.position": "51.5254;-0.0863",
    ICBM: "51.5254, -0.0863",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Performance & SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://ldwebdevelopment.co.uk/#business",
              name: "LD Web Development",
              alternateName: "LD Development",
              legalName: "Hosting Easy Ltd",
              description:
                "Professional web development and AI integration services specializing in custom websites, hosting solutions, and intelligent automation for UK businesses.",
              url: "https://ldwebdevelopment.co.uk",
              telephone: "+44-7586-266007",
              email: "LeeDayDevs@gmail.com",
              priceRange: "££-£££",
              currenciesAccepted: "GBP",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              foundingDate: "2019",
              slogan: "Transform your business with cutting-edge web solutions and intelligent AI integration",

              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor 86-90, Paul Street",
                addressLocality: "London",
                addressRegion: "England",
                addressCountry: "GB",
                postalCode: "EC2A 4NE",
              },

              areaServed: [
                {
                  "@type": "City",
                  name: "London",
                  addressCountry: "GB",
                },
                {
                  "@type": "City",
                  name: "Windsor",
                  addressCountry: "GB",
                },
                {
                  "@type": "Country",
                  name: "United Kingdom",
                },
              ],

              geo: {
                "@type": "GeoCoordinates",
                latitude: "51.5254",
                longitude: "-0.0863",
              },

              founder: {
                "@type": "Person",
                name: "Lee Day",
                jobTitle: "CEO & Lead Developer",
                description:
                  "Professional web developer with 5+ years experience in custom development and AI integration",
                knowsAbout: [
                  "Web Development",
                  "AI Integration",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Cloud Hosting",
                ],
                alumniOf: "Computer Science",
              },

              employee: {
                "@type": "Person",
                name: "Lee Day",
                jobTitle: "CEO & Lead Developer",
              },

              parentOrganization: {
                "@type": "Organization",
                name: "Hosting Easy Ltd",
                identifier: "15169743",
                description: "UK Registered Company",
              },

              identifier: {
                "@type": "PropertyValue",
                name: "UK Company Number",
                value: "15169743",
              },

              serviceType: "Web Development & AI Integration",

              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development & AI Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Web Development",
                      description: "Modern, responsive websites built with cutting-edge technologies",
                      category: "Web Development",
                      provider: {
                        "@type": "ProfessionalService",
                        name: "LD Web Development",
                      },
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "GBP",
                      price: "1500-5000",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Integration Services",
                      description: "Intelligent chatbots and AI assistants for business automation",
                      category: "AI Development",
                      provider: {
                        "@type": "ProfessionalService",
                        name: "LD Web Development",
                      },
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "GBP",
                      price: "2000-8000",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Hosting & Maintenance",
                      description: "Reliable hosting solutions with ongoing maintenance and support",
                      category: "Web Hosting",
                      provider: {
                        "@type": "ProfessionalService",
                        name: "LD Web Development",
                      },
                    },
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      priceCurrency: "GBP",
                      price: "50-200",
                      billingIncrement: "Monthly",
                    },
                  },
                ],
              },

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "24",
                bestRating: "5",
                worstRating: "1",
              },

              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Sarah Johnson",
                  },
                  reviewBody:
                    "Exceptional web development service. LD Web Development delivered our e-commerce platform on time and within budget. The AI chatbot integration has significantly improved our customer service.",
                },
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Michael Chen",
                  },
                  reviewBody:
                    "Professional, reliable, and innovative. The custom website LD Web Development built for our startup has helped us secure significant funding. Highly recommended!",
                },
              ],

              sameAs: ["https://linkedin.com/in/leeday", "https://github.com/leeday", "https://twitter.com/ldwebdev"],

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],

              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+44-7586-266007",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  areaServed: "GB",
                },
                {
                  "@type": "ContactPoint",
                  email: "LeeDayDevs@gmail.com",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  areaServed: "GB",
                },
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
