interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'breadcrumb'
  data?: any
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseOrganization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Alencar Consultorias",
      "description": "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
      "url": "https://alencarconsultorias.com.br",
      "logo": "https://alencarconsultorias.com.br/alencar-icon.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-99567-6003",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://www.linkedin.com/company/alencar-consultorias/",
        "https://www.instagram.com/alencarconsultorias/",
        "https://wa.me/5511995676003"
      ]
    }

    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Alencar Consultorias",
          "url": "https://alencarconsultorias.com.br",
          "description": "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
          "publisher": baseOrganization,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://alencarconsultorias.com.br/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "Desenvolvimento de Software",
          "description": data?.description || "Desenvolvimento de software personalizado com as melhores tecnologias do mercado",
          "provider": baseOrganization,
          "serviceType": "Software Development",
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Tecnologia",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desenvolvimento de Software"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consultoria Tecnológica"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transformação Digital"
                }
              }
            ]
          }
        }

      case 'breadcrumb':
        return data

      default:
        return baseOrganization
    }
  }

  const structuredData = getStructuredData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
