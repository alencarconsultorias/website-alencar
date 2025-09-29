import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-golden-primary border-t-transparent",
          sizeClasses[size]
        )}
        role="status"
        aria-label="Carregando..."
      >
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="h-16 bg-muted animate-pulse" />
      
      {/* Hero Section Skeleton */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-4 max-w-3xl">
            <div className="h-12 bg-muted animate-pulse rounded" />
            <div className="h-6 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-6 bg-muted animate-pulse rounded w-1/2" />
          </div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-48 bg-muted animate-pulse rounded" />
                <div className="h-4 bg-muted animate-pulse rounded" />
                <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
