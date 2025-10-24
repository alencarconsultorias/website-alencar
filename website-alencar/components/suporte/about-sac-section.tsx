"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageSquare, TrendingUp, Shield } from "lucide-react"

export function AboutSacSection() {
  const features = [
    {
      icon: Users,
      title: "Ponto de Contato Principal",
      description: "O SAC é a ponte entre sua empresa e seus clientes, oferecendo suporte direto e personalizado."
    },
    {
      icon: MessageSquare,
      title: "Comunicação Eficiente",
      description: "Canal dedicado para dúvidas, reclamações, sugestões e feedbacks dos seus clientes."
    },
    {
      icon: TrendingUp,
      title: "Fidelização de Clientes",
      description: "Um bom atendimento transforma clientes satisfeitos em promotores da sua marca."
    },
    {
      icon: Shield,
      title: "Proteção da Reputação",
      description: "Resolução rápida de problemas evita crises e mantém a imagem positiva da empresa."
    }
  ]

  return (
    <section id="about-sac" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            O que é o Setor de Atendimento ao Cliente?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            O SAC é muito mais que um simples canal de comunicação. É o coração da experiência do cliente, 
            responsável por construir relacionamentos duradouros, resolver problemas rapidamente e 
            transformar cada interação em uma oportunidade de fortalecer a confiança na sua marca.
          </p>
          <div className="bg-white rounded-2xl p-8 border-2 border-golden-primary/30 shadow-lg">
            <p className="text-gray-800 text-lg font-medium">
              "Um SAC bem estruturado não é um centro de custos, 
              é um centro de resultados que gera valor e diferenciação competitiva."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-golden-primary" />
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

        {/* Importância do SAC */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Por que o SAC é Fundamental para sua Empresa?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Para o Cliente:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Resolução rápida de problemas</li>
                  <li>• Sensação de ser valorizado</li>
                  <li>• Confiança na marca</li>
                  <li>• Facilidade de comunicação</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Para a Empresa:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Aumento da retenção de clientes</li>
                  <li>• Insights valiosos do mercado</li>
                  <li>• Melhoria contínua dos produtos</li>
                  <li>• Vantagem competitiva</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
