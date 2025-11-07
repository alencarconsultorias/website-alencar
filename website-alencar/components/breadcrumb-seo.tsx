import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { StructuredData } from "./structured-data"

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbSEOProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSEO({ items }: BreadcrumbSEOProps) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://alencarconsultorias.com.br"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": item.href ? `https://alencarconsultorias.com.br${item.href}` : undefined
      }))
    ]
  }

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbStructuredData} />
      <nav aria-label="Breadcrumb" className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link 
                href="/" 
                className="flex items-center hover:text-foreground transition-colors"
                aria-label="Página inicial"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4" />
                {item.href && index < items.length - 1 ? (
                  <Link 
                    href={item.href} 
                    className="hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
