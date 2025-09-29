'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface PreloadResource {
  href: string
  as: 'script' | 'style' | 'image' | 'font' | 'fetch'
  type?: string
  crossOrigin?: 'anonymous' | 'use-credentials'
}

const criticalResources: PreloadResource[] = [
  // Fontes críticas
  {
    href: '/fonts/geist-sans.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  // Imagens críticas (hero, logo)
  {
    href: '/alencar-icon.png',
    as: 'image'
  },
  {
    href: '/business-consulting-technology-workspace.jpg',
    as: 'image'
  }
]

const routeResources: Record<string, PreloadResource[]> = {
  '/servicos/desenvolvimento': [
    {
      href: '/computer-science-innovation-technology.jpg',
      as: 'image'
    },
    {
      href: '/modern-technology-innovation-digital-transformatio.jpg',
      as: 'image'
    }
  ],
  '/parceiros': [
    {
      href: '/images/control-mob-logo.png',
      as: 'image'
    },
    {
      href: '/images/digital-cont-logo.png',
      as: 'image'
    }
  ]
}

export function ResourcePreloader() {
  const router = useRouter()

  useEffect(() => {
    // Preload recursos críticos
    criticalResources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.type) link.type = resource.type
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin
      document.head.appendChild(link)
    })

    // Preload recursos baseado na rota atual
    const currentPath = window.location.pathname
    const currentResources = routeResources[currentPath]
    
    if (currentResources) {
      currentResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = resource.href
        link.as = resource.as
        if (resource.type) link.type = resource.type
        if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin
        document.head.appendChild(link)
      })
    }

    // Prefetch de rotas importantes no hover
    const handleLinkHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest('a[href^="/"]') as HTMLAnchorElement
      
      if (link && link.href) {
        const url = new URL(link.href)
        const pathname = url.pathname
        
        // Prefetch da rota
        router.prefetch(pathname)
        
        // Preload recursos específicos da rota
        const resources = routeResources[pathname]
        if (resources) {
          resources.forEach(resource => {
            const preloadLink = document.createElement('link')
            preloadLink.rel = 'preload'
            preloadLink.href = resource.href
            preloadLink.as = resource.as
            document.head.appendChild(preloadLink)
          })
        }
      }
    }

    // Adicionar listeners para hover em links
    document.addEventListener('mouseover', handleLinkHover)
    
    return () => {
      document.removeEventListener('mouseover', handleLinkHover)
    }
  }, [router])

  return null
}
