"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, CheckCircle } from "lucide-react"
import Image from "next/image"

export function ImplantacaoHeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('cta-final')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Settings className="w-4 h-4" />
                Implantação Especializada
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Implantação de Software com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Suporte Especializado
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Transforme processos e garanta resultados com uma implantação eficiente e personalizada para o seu negócio.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              {[
                "Planejamento personalizado para cada empresa",
                "Suporte especializado durante toda a jornada",
                "Acompanhamento pós-implantação garantido"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Solicitar uma Proposta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 px-8 py-4 text-lg"
                onClick={() => {
                  const aboutSection = document.getElementById('about-implantacao')
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-2xl" />
              
              {/* Software Implementation Illustration */}
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white text-right">
                    <div className="text-sm opacity-80">Status</div>
                    <div className="font-semibold">Implementando...</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: "Análise de Requisitos", progress: 100 },
                    { label: "Configuração do Sistema", progress: 85 },
                    { label: "Treinamento da Equipe", progress: 60 },
                    { label: "Testes e Validação", progress: 40 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-white text-sm">
                        <span>{item.label}</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-white rounded-full h-2 transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="text-sm opacity-80 mb-1">Próxima Etapa</div>
                  <div className="font-semibold">Go-Live e Suporte Contínuo</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <Settings className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
