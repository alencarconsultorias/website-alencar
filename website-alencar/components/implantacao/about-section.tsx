"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Cog, TrendingUp } from "lucide-react"

export function AboutImplantacaoSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Planejamento Estratégico",
      description: "Análise completa dos processos atuais e definição da melhor estratégia de implementação."
    },
    {
      icon: Cog,
      title: "Configuração Personalizada",
      description: "Adaptação do software às necessidades específicas da sua empresa e fluxos de trabalho."
    },
    {
      icon: Users,
      title: "Treinamento Especializado",
      description: "Capacitação completa da equipe para utilizar o sistema de forma eficiente e produtiva."
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Contínuo",
      description: "Suporte pós-implantação para garantir o sucesso e otimização contínua dos resultados."
    }
  ]

  return (
    <section id="about-implantacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            O que é Implantação de Software?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            A implantação de software vai muito além da simples instalação técnica. É um processo estratégico 
            que envolve planejamento detalhado, adaptação às necessidades específicas do negócio, treinamento 
            da equipe e acompanhamento contínuo para garantir o máximo retorno do investimento.
          </p>
          <div className="bg-white rounded-2xl p-8 border-2 border-golden-primary/30 shadow-lg">
            <p className="text-gray-800 text-lg font-medium">
              "Uma implantação bem-sucedida não é apenas sobre tecnologia, 
              é sobre transformar a forma como sua empresa opera e cresce."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Nosso Processo de Implantação
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-golden-primary to-golden-secondary rounded-full hidden lg:block" />
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Análise e Diagnóstico",
                  description: "Avaliação completa dos processos atuais, identificação de necessidades e definição de objetivos.",
                  side: "left"
                },
                {
                  step: "02", 
                  title: "Planejamento Estratégico",
                  description: "Elaboração do plano de implementação, cronograma detalhado e definição de marcos importantes.",
                  side: "right"
                },
                {
                  step: "03",
                  title: "Configuração e Customização",
                  description: "Adaptação do software às necessidades específicas, configuração de módulos e integrações.",
                  side: "left"
                },
                {
                  step: "04",
                  title: "Treinamento e Capacitação",
                  description: "Treinamento completo da equipe, criação de manuais e estabelecimento de boas práticas.",
                  side: "right"
                },
                {
                  step: "05",
                  title: "Go-Live e Suporte",
                  description: "Entrada em produção com acompanhamento intensivo e suporte especializado contínuo.",
                  side: "left"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.side === 'right' ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-golden-primary to-golden-secondary rounded-full flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-white border-4 border-golden-primary rounded-full relative z-10" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
