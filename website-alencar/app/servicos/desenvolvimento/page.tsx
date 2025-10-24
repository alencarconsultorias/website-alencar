import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DevelopmentHeroSection } from "@/components/development/development-hero-section"
import { TechStackSection } from "@/components/development/tech-stack-section"
import { DevelopmentProcessSection } from "@/components/development/development-process-section"
import { ProjectTypesSection } from "@/components/development/project-types-section"
import { ContactSection } from "@/components/contact-section"

export const metadata = {
  title: "Desenvolvimento de Software | Alencar Consultorias",
  description: "Desenvolvimento de software personalizado com as melhores tecnologias do mercado: Next.js, React, TypeScript, Firebase, PostgreSQL, AWS, Docker e muito mais.",
}

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DevelopmentHeroSection />
      <TechStackSection />
      <DevelopmentProcessSection />
      <ProjectTypesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
