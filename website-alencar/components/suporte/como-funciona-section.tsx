"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Settings, GraduationCap, BarChart3 } from "lucide-react"

export function ComoFuncionaSection() {
  const etapas = [
    {
      numero: "01",
      icon: Search,
      titulo: "Análise e Diagnóstico",
      descricao: "Avaliamos seu atendimento atual, identificamos gargalos e definimos objetivos específicos para o novo SAC.",
      detalhes: [
        "Auditoria do atendimento atual",
        "Mapeamento de processos",
        "Definição de KPIs",
        "Cronograma personalizado"
      ],
      tempo: "2-3 dias"
    },
    {
      numero: "02",
      icon: Settings,
      titulo: "Implantação e Configuração",
      descricao: "Configuramos a plataforma, integramos com seus sistemas existentes e personalizamos conforme suas necessidades.",
      detalhes: [
        "Configuração da plataforma",
        "Integração com sistemas",
        "Personalização de fluxos",
        "Testes de funcionamento"
      ],
      tempo: "3-5 dias"
    },
    {
      numero: "03",
      icon: GraduationCap,
      titulo: "Treinamento da Equipe",
      descricao: "Capacitamos sua equipe para utilizar o sistema de forma eficiente e oferecemos suporte completo.",
      detalhes: [
        "Treinamento prático",
        "Manuais personalizados",
        "Simulações reais",
        "Certificação da equipe"
      ],
      tempo: "2-3 dias"
    },
    {
      numero: "04",
      icon: BarChart3,
      titulo: "Monitoramento e Otimização",
      descricao: "Acompanhamos os resultados, fornecemos relatórios detalhados e otimizamos continuamente o desempenho.",
      detalhes: [
        "Monitoramento 24/7",
        "Relatórios mensais",
        "Ajustes contínuos",
        "Suporte especializado"
      ],
      tempo: "Contínuo"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-golden-primary/10 text-golden-primary px-4 py-2 text-sm font-medium">
            Metodologia Comprovada
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Como Funciona na Prática
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa metodologia estruturada garante uma implementação suave e resultados rápidos. 
            Acompanhamos cada etapa para garantir o sucesso do seu projeto.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-golden-primary via-golden-secondary to-golden-primary rounded-full" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {etapas.map((etapa, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - Desktop */}
                <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-golden-primary rounded-full border-4 border-white shadow-lg z-10" />
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group mt-16 lg:mt-0">
                  <CardContent className="p-6 text-center">
                    {/* Número da Etapa */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{etapa.numero}</span>
                    </div>
                    
                    {/* Ícone */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-golden-primary/10 rounded-xl mb-4">
                      <etapa.icon className="w-6 h-6 text-golden-primary" />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {etapa.titulo}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {etapa.descricao}
                    </p>
                    
                    {/* Tempo */}
                    <div className="inline-flex items-center justify-center bg-golden-primary/10 text-golden-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {etapa.tempo}
                    </div>
                    
                    {/* Detalhes */}
                    <div className="space-y-2 text-left">
                      {etapa.detalhes.map((detalhe, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-golden-primary rounded-full flex-shrink-0" />
                          <span>{detalhe}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Garantias */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossas Garantias para Você
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com total transparência e assumimos o compromisso 
              com o sucesso do seu projeto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-golden-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Implementação Garantida</h4>
              <p className="text-gray-600 text-sm">Sistema funcionando em até 7 dias ou seu dinheiro de volta</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-golden-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Suporte Ilimitado</h4>
              <p className="text-gray-600 text-sm">Suporte técnico e consultoria sem limite de chamados</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-golden-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Resultados Mensuráveis</h4>
              <p className="text-gray-600 text-sm">Relatórios mensais com métricas de performance e ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
