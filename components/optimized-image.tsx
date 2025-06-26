"use client"

import { useState, useRef, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  placeholder,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Generate responsive srcSet for different screen sizes
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes("placeholder.svg")) {
      return baseSrc
    }

    const sizes = [480, 768, 1024, 1280, 1920]
    return sizes.map((size) => `${baseSrc}?w=${size}&q=${quality} ${size}w`).join(", ")
  }

  const generateSizes = () => {
    return "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
  }

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
        >
          {/* Show Lee Day about image as placeholder for about section images */}
          {src.includes("lee-day-about") ? (
            <img
              src="/placeholder.svg?height=500&width=400&text=Lee+Day+Professional+Photo"
              alt="Lee Day placeholder"
              className="w-full h-full object-cover opacity-50"
            />
          ) : placeholder ? (
            <div className="text-gray-400 text-sm text-center p-4">{placeholder}</div>
          ) : (
            <div className="text-gray-400 text-sm text-center p-4">Loading...</div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div
          className="absolute inset-0 bg-gray-800 flex items-center justify-center border border-gray-600"
          style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
        >
          <div className="text-gray-400 text-sm text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Image failed to load
          </div>
        </div>
      )}

      {/* Actual image */}
      {(isInView || priority) && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          srcSet={generateSrcSet(src)}
          sizes={generateSizes()}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined,
          }}
        />
      )}
    </div>
  )
}
