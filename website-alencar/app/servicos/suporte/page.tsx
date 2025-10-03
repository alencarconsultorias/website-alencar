import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SuporteHeroSection } from '@/components/suporte/hero-section'
import { AboutSacSection } from '@/components/suporte/about-sac-section'
import { DiferenciaisSacSection } from '@/components/suporte/diferenciais-sac-section'
import { BeneficiosSacSection } from '@/components/suporte/beneficios-sac-section'
import { ComoFuncionaSection } from '@/components/suporte/como-funciona-section'
import { CtaFinalSacSection } from '@/components/suporte/cta-final-sac-section'

export const metadata: Metadata = {
  title: 'SAC - Setor de Atendimento ao Cliente | Alencar Consultorias',
  description: 'SAC inteligente e eficiente para sua empresa. Atendimento multicanal, automação com IA e equipe especializada. Melhore a experiência do cliente com a Alencar Consultorias.',
  keywords: 'SAC, atendimento ao cliente, suporte técnico, atendimento multicanal, CRM, automação, inteligência artificial, experiência do cliente, fidelização',
}

export default function SuportePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SuporteHeroSection />
      <AboutSacSection />
      <DiferenciaisSacSection />
      <BeneficiosSacSection />
      <ComoFuncionaSection />
      <CtaFinalSacSection />
      <Footer />
    </main>
  )
}
