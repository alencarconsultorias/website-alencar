export const seoConfig = {
  defaultTitle: "Alencar Consultorias - Transformação Digital e Tecnologia",
  titleTemplate: "%s | Alencar Consultorias",
  defaultDescription: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital. Impulsione seu negócio com nossas soluções inovadoras.",
  siteUrl: "https://alencarconsultorias.com.br",
  siteName: "Alencar Consultorias",
  
  // Informações da empresa
  company: {
    name: "Alencar Consultorias",
    description: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
    phone: "+55-11-99567-6003",
    whatsapp: "https://wa.me/5511995676003",
    email: "contato@alencarconsultorias.com.br",
    address: {
      locality: "São Paulo",
      country: "BR"
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/alencar-consultorias/",
      instagram: "https://www.instagram.com/alencarconsultorias/",
      twitter: "@alencarconsultorias"
    }
  },

  // Keywords globais
  keywords: [
    "consultoria tecnológica",
    "transformação digital", 
    "desenvolvimento de software",
    "soluções empresariais",
    "tecnologia",
    "inovação",
    "consultoria TI",
    "sistemas empresariais",
    "automação",
    "digitalização"
  ],

  // Imagens padrão
  images: {
    default: "/og-image.jpg",
    development: "/og-desenvolvimento.jpg",
    partners: "/og-parceiros.jpg",
    logo: "/alencar-icon.png"
  },

  // Configurações específicas por página
  pages: {
    home: {
      title: "Alencar Consultorias - Transformação Digital e Tecnologia",
      description: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital. Impulsione seu negócio com nossas soluções inovadoras.",
      keywords: [
        "consultoria tecnológica",
        "transformação digital",
        "desenvolvimento de software",
        "soluções empresariais",
        "tecnologia",
        "inovação"
      ]
    },
    development: {
      title: "Desenvolvimento de Software Personalizado",
      description: "Desenvolvimento de software personalizado com as melhores tecnologias do mercado: Next.js, React, TypeScript, Firebase, PostgreSQL, AWS, Docker. Soluções escaláveis para seu negócio.",
      keywords: [
        "desenvolvimento de software",
        "aplicações web",
        "sistemas personalizados",
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "PostgreSQL",
        "AWS",
        "Docker",
        "desenvolvimento full-stack",
        "soluções escaláveis"
      ]
    },
    partners: {
      title: "Parceiros Estratégicos",
      description: "Conheça os parceiros estratégicos da Alencar Consultorias. Ecossistema de tecnologia de ponta com Control Mob, Digital Contabilidade e outros parceiros especializados.",
      keywords: [
        "parceiros estratégicos",
        "ecossistema tecnológico",
        "Control Mob",
        "Digital Contabilidade",
        "parcerias empresariais",
        "soluções integradas",
        "rede de parceiros",
        "colaboração tecnológica"
      ]
    }
  }
}

export function generateMetadata(pageKey: keyof typeof seoConfig.pages, customData?: Partial<any>) {
  const pageConfig = seoConfig.pages[pageKey]
  const baseUrl = seoConfig.siteUrl
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    openGraph: {
      title: `${pageConfig.title} | ${seoConfig.siteName}`,
      description: pageConfig.description,
      url: customData?.url ? `${baseUrl}${customData.url}` : baseUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: customData?.image || seoConfig.images.default,
          width: 1200,
          height: 630,
          alt: `${pageConfig.title} - ${seoConfig.siteName}`,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageConfig.title} | ${seoConfig.siteName}`,
      description: pageConfig.description,
      images: [customData?.image || seoConfig.images.default],
      creator: seoConfig.company.socialMedia.twitter,
    },
    alternates: {
      canonical: customData?.url || "/",
    },
    ...customData
  }
}
