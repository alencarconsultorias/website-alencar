import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { InnovationSection } from "@/components/innovation-section"
import { ApproachSection } from "@/components/approach-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <InnovationSection />
      <ApproachSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
