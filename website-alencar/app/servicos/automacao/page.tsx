import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { HeroSection } from "@/components/automacao/HeroSection"
import { DescricaoSection } from "@/components/automacao/DescricaoSection"
import { ServicosSection } from "@/components/automacao/ServicosSection"
import { DiferenciaisSection } from "@/components/automacao/DiferenciaisSection"
import { DepoimentoSection } from "@/components/automacao/DepoimentoSection"
import { GaleriaSection } from "@/components/automacao/GaleriaSection"

export const metadata = {
  title: "Automação e Segurança Inteligente | Alencar Consultorias",
  description: "Automação residencial e empresarial, instalação de câmeras (CFTV), integração com assistentes virtuais e sistemas inteligentes sob medida. Segurança, tecnologia, personalização e monitoramento para sua casa ou empresa.",
}

export default function AutomacaoCamerasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DescricaoSection />
      <ServicosSection />
      <DiferenciaisSection />
      <DepoimentoSection />
      <GaleriaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
