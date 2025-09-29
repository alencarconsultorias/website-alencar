'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: React.ReactNode
  once?: boolean
}

export function LazySection({
  children,
  className,
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  once = true
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            setHasBeenVisible(true)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, once])

  const shouldRender = once ? hasBeenVisible || isVisible : isVisible

  return (
    <div ref={ref} className={cn(className)}>
      {shouldRender ? children : (fallback || <div className="min-h-[200px]" />)}
    </div>
  )
}
