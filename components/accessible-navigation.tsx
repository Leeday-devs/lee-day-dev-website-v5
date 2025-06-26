"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  scrollY: number
  onNavigate: (sectionId: string) => void
}

export function AccessibleNavigation({ scrollY, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const navigationItems = [
    { id: "services", label: "Services", description: "View our web development and AI services", color: "cyan" },
    { id: "process", label: "Process", description: "See how we work together", color: "indigo" },
    {
      id: "portfolio",
      label: "Portfolio",
      description: "Browse our featured projects and case studies",
      color: "purple",
    },
    { id: "about", label: "About", description: "Learn about Lee Day and our expertise", color: "blue" },
    { id: "contact", label: "Contact", description: "Get in touch for your project quote", color: "green" },
  ]

  // Avoid document/window during SSR
  const progressWidth =
    typeof document !== "undefined"
      ? Math.min((scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)
      : 0

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMenuOpen) return

      switch (event.key) {
        case "Escape":
          setIsMenuOpen(false)
          buttonRef.current?.focus()
          break
        case "ArrowDown":
          event.preventDefault()
          setFocusedIndex((prev) => (prev < navigationItems.length - 1 ? prev + 1 : 0))
          break
        case "ArrowUp":
          event.preventDefault()
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : navigationItems.length - 1))
          break
        case "Enter":
        case " ":
          if (focusedIndex >= 0) {
            event.preventDefault()
            handleNavigation(navigationItems[focusedIndex].id)
          }
          break
        case "Tab":
          // Allow natural tab navigation within menu
          break
        default:
          // Handle first letter navigation
          const firstLetter = event.key.toLowerCase()
          const matchingIndex = navigationItems.findIndex((item) => item.label.toLowerCase().startsWith(firstLetter))
          if (matchingIndex >= 0) {
            setFocusedIndex(matchingIndex)
          }
          break
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen, focusedIndex, navigationItems])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMenuOpen(false)
    setFocusedIndex(-1)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setFocusedIndex(-1)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <a
              href="#main-content"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md"
              aria-label="LD Web Development - Go to main content"
            >
              LD Web Development
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative hover:text-${item.color}-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-1 group`}
                role="menuitem"
                aria-describedby={`${item.id}-description`}
              >
                {item.label}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-${item.color}-400 transition-all duration-300 group-hover:w-full`}
                ></div>
                <span id={`${item.id}-description`} className="sr-only">
                  {item.description}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-800"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left hover:text-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-md px-2 py-2 ${
                    focusedIndex === index ? "bg-gray-800 text-blue-400" : ""
                  }`}
                  role="menuitem"
                  aria-describedby={`mobile-${item.id}-description`}
                  tabIndex={focusedIndex === index ? 0 : -1}
                >
                  {item.label}
                  <span id={`mobile-${item.id}-description`} className="sr-only">
                    {item.description}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </nav>
  )
}
