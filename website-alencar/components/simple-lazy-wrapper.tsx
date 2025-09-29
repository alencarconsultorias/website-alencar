'use client'

import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { LoadingSpinner } from './loading-spinner'

interface SimpleLazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export function SimpleLazyWrapper({
  children,
  fallback = <LoadingSpinner className="py-20" />,
  threshold = 0.1,
  rootMargin = '100px'
}: SimpleLazyWrapperProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    once: true
  })

  useEffect(() => {
    if (isVisible) {
      // Pequeno delay para suavizar a transição
      const timer = setTimeout(() => {
        setShouldRender(true)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div ref={ref}>
      {shouldRender ? children : fallback}
    </div>
  )
}
