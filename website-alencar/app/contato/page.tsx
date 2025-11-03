import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contato | Alencar Consultorias",
  description:
    "Entre em contato com a Alencar Consultorias para falar sobre seu projeto e tirar dúvidas.",
}

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24" />
      <ContactSection />
      <Footer />
    </main>
  )
}
