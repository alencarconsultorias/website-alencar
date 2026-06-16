import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Contato | Alencar Consultorias",
  description:
    "Entre em contato com a Alencar Consultorias para falar sobre seu projeto e tirar dúvidas.",
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-golden-primary/20 border border-golden-primary/30 px-4 py-2 rounded-full text-sm font-medium mb-6 text-golden-primary">
              <Mail className="w-4 h-4" />
              Fale com a nossa equipe
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Vamos conversar sobre
              <span className="text-golden-primary"> seu projeto</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Preencha o formulário ou nos chame pelo WhatsApp. Respondemos rápido.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
