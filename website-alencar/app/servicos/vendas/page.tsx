import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SalesHeroSection } from "@/components/sales/sales-hero-section"
import { SalesAboutSection } from "@/components/sales/sales-about-section"
import { SalesDifferentialsSection } from "@/components/sales/sales-differentials-section"
import { SalesBenefitsSection } from "@/components/sales/sales-benefits-section"
import { SalesPortfolioSection } from "@/components/sales/sales-portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { SalesFinalCtaSection } from "@/components/sales/sales-final-cta-section"
import { SalesToolsCarousel } from "@/components/sales/sales-tools-carousel"

export const metadata = {
  title: "Vendas de Software | Alencar Consultorias",
  description:
    "Consultoria comercial para aquisição de softwares: atendimento consultivo, provas de conceito, implantação e suporte pós-venda.",
}

export default function SalesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SalesHeroSection />
      <SalesToolsCarousel />
      <SalesAboutSection />
      <SalesDifferentialsSection />
      <SalesBenefitsSection />
      <SalesPortfolioSection />
      <SalesFinalCtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
