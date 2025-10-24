"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Smartphone, 
  Bot, 
  Users, 
  BarChart3, 
  Zap,
  CheckCircle2
} from "lucide-react"

export function DiferenciaisSacSection() {
  const diferenciais = [
    {
      icon: Smartphone,
      title: "Atendimento Multicanal",
      description: "Integração completa entre telefone, e-mail, chat online e WhatsApp em uma única plataforma.",
      highlights: ["Unificação de canais", "Histórico centralizado", "Resposta consistente"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: Bot,
      title: "Automação com IA",
      description: "Inteligência artificial para respostas automáticas, triagem inteligente e redução do tempo de resposta.",
      highlights: ["Chatbots inteligentes", "Triagem automática", "Respostas 24/7"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais treinados para implantação, configuração e treinamento da sua equipe interna.",
      highlights: ["Consultores experientes", "Treinamento completo", "Suporte contínuo"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: BarChart3,
      title: "Monitoramento Avançado",
      description: "Acompanhamento de indicadores como SLA, NPS, tempo de resposta e satisfação do cliente.",
      highlights: ["Dashboards em tempo real", "Relatórios detalhados", "KPIs personalizados"],
      color: "from-golden-primary to-golden-secondary"
    }
  ]

  const stats = [
    { number: "95%", label: "Satisfação Média", description: "dos clientes atendidos" },
    { number: "60%", label: "Redução de Custos", description: "operacionais do SAC" },
    { number: "24h", label: "Tempo de Implantação", description: "sistema básico" },
    { number: "99%", label: "Uptime Garantido", description: "disponibilidade do sistema" }
  ]

  const integracoes = [
    "Sistemas CRM (Salesforce, HubSpot, Pipedrive)",
    "Plataformas de e-commerce (Shopify, WooCommerce)",
    "ERPs corporativos (SAP, Oracle, TOTVS)",
    "Ferramentas de helpdesk (Zendesk, Freshdesk)",
    "Sistemas de telefonia (VoIP, PABX)",
    "Plataformas de redes sociais"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-golden-primary/10 text-golden-primary px-4 py-2 text-sm font-medium">
            Nossos Diferenciais
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Por que contratar o SAC da Alencar Consultorias?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos tecnologia de ponta, expertise em atendimento ao cliente e 
            metodologia comprovada para entregar resultados excepcionais.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-golden-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diferenciais Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {diferenciais.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-golden-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-golden-primary" />
                      <span className="text-sm text-gray-800 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrações */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Integração com Sistemas Existentes
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nosso SAC se integra perfeitamente com os sistemas que sua empresa já utiliza, 
                garantindo continuidade operacional e aproveitamento máximo dos investimentos existentes.
              </p>
              
              <div className="grid gap-3">
                {integracoes.map((integracao, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-golden-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-golden-primary" />
                    </div>
                    <span className="text-gray-800 font-medium">{integracao}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl p-8 text-gray-900">
                <div className="space-y-6">
                  <div className="text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4 opacity-80 text-white" />
                    <h4 className="text-xl font-semibold mb-2">Implementação Rápida</h4>
                    <p className="opacity-90">
                      Nosso SAC pode ser implementado em sua empresa em 
                      <span className="font-bold text-2xl block mt-2">até 7 dias</span>
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-80">Tempo de treinamento</span>
                      <span className="font-semibold">2-3 dias</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="opacity-80">Suporte pós-implantação</span>
                      <span className="font-semibold">Ilimitado</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-golden-primary text-white p-3 rounded-full shadow-lg">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-golden-secondary text-white p-3 rounded-full shadow-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
