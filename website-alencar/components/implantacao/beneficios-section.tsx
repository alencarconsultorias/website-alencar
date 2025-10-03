"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Workflow, 
  Zap, 
  RefreshCw, 
  BarChart3, 
  ArrowUpRight,
  CheckCircle,
  Target,
  Gauge
} from "lucide-react"

export function BeneficiosSection() {
  const beneficios = [
    {
      icon: Workflow,
      title: "Processos Padronizados",
      description: "Uniformização de procedimentos em toda a organização, eliminando inconsistências e melhorando a qualidade.",
      metrics: "Redução de 70% em variações de processo",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: Zap,
      title: "Maior Eficiência Operacional",
      description: "Automação de tarefas repetitivas e otimização de fluxos de trabalho para máxima produtividade.",
      metrics: "Aumento médio de 45% na produtividade",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: RefreshCw,
      title: "Menos Retrabalho e Erros",
      description: "Validações automáticas e controles integrados que previnem erros e eliminam retrabalho desnecessário.",
      metrics: "Redução de 80% em erros operacionais",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: BarChart3,
      title: "Maior Controle e Gestão",
      description: "Dashboards em tempo real e relatórios detalhados para tomada de decisão baseada em dados.",
      metrics: "Visibilidade 100% dos processos",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: ArrowUpRight,
      title: "Escalabilidade para o Futuro",
      description: "Arquitetura flexível que cresce junto com seu negócio, suportando expansão sem limitações.",
      metrics: "Suporte a crescimento de 300%+",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    }
  ]

  const impactoFinanceiro = [
    {
      icon: Target,
      title: "ROI Comprovado",
      value: "4-6 meses",
      description: "Tempo médio para retorno do investimento"
    },
    {
      icon: Gauge,
      title: "Redução de Custos",
      value: "35%",
      description: "Economia média em custos operacionais"
    },
    {
      icon: CheckCircle,
      title: "Aumento de Receita",
      value: "25%",
      description: "Crescimento médio em faturamento"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-golden-primary/10 text-golden-primary px-4 py-2 text-sm font-medium">
            Resultados Garantidos
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resultados que sua empresa conquista
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa metodologia comprovada entrega benefícios tangíveis que transformam 
            a operação da sua empresa e impulsionam o crescimento sustentável.
          </p>
        </div>

        {/* Benefícios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className={`${beneficio.bgColor} p-6 pb-4`}>
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${beneficio.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <beneficio.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {beneficio.title}
                  </h3>
                </div>
                
                <div className="p-6 pt-4">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {beneficio.description}
                  </p>
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${beneficio.color} text-white`}>
                    <CheckCircle className="w-4 h-4" />
                    {beneficio.metrics}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impacto Financeiro */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Impacto Financeiro Comprovado
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Nossos clientes experimentam resultados financeiros significativos 
              já nos primeiros meses após a implantação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactoFinanceiro.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                  <item.icon className="w-8 h-8 text-golden-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-golden-primary mb-2">
                  {item.value}
                </div>
                <div className="font-semibold text-white mb-2">
                  {item.title}
                </div>
                <div className="text-gray-300 text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <p className="text-lg italic text-gray-200 mb-4">
                "A implantação transformou completamente nossa operação. Em 6 meses, 
                já tínhamos recuperado o investimento e hoje operamos com 40% mais eficiência."
              </p>
              <div className="text-sm text-gray-400">
                CEO de empresa do setor de manufatura
              </div>
            </div>
          </div>
        </div>

        {/* Comparativo Antes/Depois */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Transformação Real: Antes vs Depois
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Antes */}
            <Card className="border-2 border-gray-200 bg-gray-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-gray-500 rounded-full mb-4">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Antes da Implantação
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Processos manuais e inconsistentes",
                    "Retrabalho constante e erros frequentes",
                    "Falta de visibilidade dos dados",
                    "Dificuldade para escalar operações",
                    "Decisões baseadas em intuição",
                    "Custos operacionais elevados"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Depois */}
            <Card className="border-2 border-golden-primary/20 bg-golden-primary/5">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-golden-primary rounded-full mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-golden-primary mb-2">
                    Depois da Implantação
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Processos automatizados e padronizados",
                    "Qualidade consistente e zero retrabalho",
                    "Dashboards em tempo real",
                    "Escalabilidade ilimitada",
                    "Decisões baseadas em dados",
                    "Redução significativa de custos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-golden-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
