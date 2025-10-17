"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Settings, CheckCircle } from "lucide-react"

export function ImplantacaoHeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('cta-final')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Implantação de
                <span className="text-golden-primary"> Software</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
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
                  <span className="text-gray-800">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Solicitar uma Proposta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-white px-8 py-4 text-lg"
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
            <div className="relative bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-golden-primary/20 to-golden-secondary/20 rounded-2xl" />
              
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
            
            <div className="absolute -bottom-4 -left-4 bg-golden-primary text-white p-3 rounded-full shadow-lg">
              <Settings className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">98%</div>
            <div className="text-gray-600">Taxa de Sucesso</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">15+</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">200+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}
