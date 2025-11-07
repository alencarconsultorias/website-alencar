import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DevelopmentHeroSection } from "@/components/development/development-hero-section"
import { TechStackSection } from "@/components/development/tech-stack-section"
import { DevelopmentProcessSection } from "@/components/development/development-process-section"
import { ProjectTypesSection } from "@/components/development/project-types-section"
import { ContactSection } from "@/components/contact-section"
import { StructuredData } from "@/components/structured-data"
import { BreadcrumbSEO } from "@/components/breadcrumb-seo"

export const metadata = {
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
  ],
  openGraph: {
    title: "Desenvolvimento de Software Personalizado | Alencar Consultorias",
    description: "Desenvolvimento de software personalizado com as melhores tecnologias do mercado. Soluções escaláveis e inovadoras para impulsionar seu negócio.",
    url: "https://alencarconsultorias.com.br/servicos/desenvolvimento",
    images: [
      {
        url: "/og-desenvolvimento.jpg",
        width: 1200,
        height: 630,
        alt: "Desenvolvimento de Software - Alencar Consultorias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Software Personalizado | Alencar Consultorias",
    description: "Desenvolvimento de software personalizado com as melhores tecnologias do mercado. Soluções escaláveis e inovadoras.",
    images: ["/og-desenvolvimento.jpg"],
  },
  alternates: {
    canonical: "/servicos/desenvolvimento",
  },
}

export default function DevelopmentPage() {
  const serviceData = {
    name: "Desenvolvimento de Software Personalizado",
    description: "Desenvolvimento de software personalizado com as melhores tecnologias do mercado: Next.js, React, TypeScript, Firebase, PostgreSQL, AWS, Docker. Soluções escaláveis para seu negócio."
  }

  const breadcrumbItems = [
    { name: "Serviços", href: "/servicos" },
    { name: "Desenvolvimento de Software" }
  ]

  return (
    <main className="min-h-screen">
      <StructuredData type="service" data={serviceData} />
      <Header />
      <BreadcrumbSEO items={breadcrumbItems} />
      <DevelopmentHeroSection />
      <TechStackSection />
      <DevelopmentProcessSection />
      <ProjectTypesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
