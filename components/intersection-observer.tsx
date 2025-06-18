"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface IntersectionObserverProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  animationClass?: string
}

export function IntersectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  animationClass = "fade-in-section",
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return (
    <div ref={elementRef} className={`${animationClass} ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  )
}
