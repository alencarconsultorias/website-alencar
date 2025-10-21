import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImplantacaoHeroSection } from '@/components/implantacao/hero-section'
import { AboutImplantacaoSection } from '@/components/implantacao/about-section'
import { DiferenciaisSection } from '@/components/implantacao/diferenciais-section'
import { BeneficiosSection } from '@/components/implantacao/beneficios-section'
import { CtaFinalSection } from '@/components/implantacao/cta-final-section'

export const metadata: Metadata = {
  title: 'Implantação de Software | Alencar Consultorias',
  description: 'Implantação de software com suporte especializado. Transforme processos e garanta resultados com planejamento personalizado, treinamento e acompanhamento pós-implantação.',
  keywords: 'implantação de software, implementação de sistemas, suporte especializado, consultoria em TI, migração de sistemas, treinamento de equipe',
}

export default function ImplantacaoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImplantacaoHeroSection />
      <AboutImplantacaoSection />
      <DiferenciaisSection />
      <BeneficiosSection />
      <CtaFinalSection />
      <Footer />
    </main>
  )
}
