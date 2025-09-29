'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '50px',
  once = true
}: UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

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

  return {
    ref,
    isVisible: once ? hasBeenVisible || isVisible : isVisible,
    hasBeenVisible
  }
}
