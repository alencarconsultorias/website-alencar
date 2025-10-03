"use client"

import { Button } from "@/components/ui/button"
import { HeadphonesIcon, MessageCircle, Phone, Mail } from "lucide-react"

export function SuporteHeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('cta-final-sac')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-sac')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-golden-primary px-4 py-2 rounded-full text-sm font-medium mb-6 text-white">
            <HeadphonesIcon className="w-4 h-4" />
            SAC Profissional
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            SAC Inteligente e 
            <span className="text-golden-primary"> Eficiente</span>
            <span className="block">para sua Empresa</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ofereça um atendimento multicanal, rápido e de qualidade para seus clientes. 
            Transforme seu SAC em um diferencial competitivo com tecnologia e expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 text-lg"
              onClick={scrollToContact}
            >
              Quero Melhorar Meu Atendimento
            </Button>
            <Button 
              variant="outline" 
              className="border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-white px-8 py-3 text-lg"
              onClick={scrollToAbout}
            >
              Saiba Mais
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">95%</div>
            <div className="text-gray-600">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">24/7</div>
            <div className="text-gray-600">Disponibilidade</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">-60%</div>
            <div className="text-gray-600">Tempo de Resposta</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">+40%</div>
            <div className="text-gray-600">Eficiência</div>
          </div>
        </div>

        {/* Canais de Atendimento Preview */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
            Atendimento Multicanal Integrado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-golden-primary" />
              </div>
              <span className="text-sm text-gray-600">Telefone</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-golden-primary" />
              </div>
              <span className="text-sm text-gray-600">E-mail</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-golden-primary" />
              </div>
              <span className="text-sm text-gray-600">Chat Online</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-golden-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-golden-primary" />
              </div>
              <span className="text-sm text-gray-600">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
