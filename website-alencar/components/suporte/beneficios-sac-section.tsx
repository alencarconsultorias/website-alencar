"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Heart, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  Star,
  CheckCircle,
  Target,
  Gauge
} from "lucide-react"

export function BeneficiosSacSection() {
  const beneficios = [
    {
      icon: Heart,
      title: "Clientes Mais Satisfeitos",
      description: "Atendimento rápido e eficiente resulta em maior satisfação e experiência positiva do cliente.",
      metrics: "Aumento de 35% na satisfação",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: Zap,
      title: "Resolução Mais Rápida",
      description: "Automação e triagem inteligente reduzem drasticamente o tempo de resolução de problemas.",
      metrics: "60% mais rápido na resolução",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: DollarSign,
      title: "Redução de Custos",
      description: "Otimização de processos e automação reduzem significativamente os custos operacionais.",
      metrics: "Economia de até 40% nos custos",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Melhoria Contínua",
      description: "Relatórios detalhados e análises permitem identificar oportunidades de melhoria constante.",
      metrics: "Insights baseados em dados",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    },
    {
      icon: Star,
      title: "Reputação da Marca",
      description: "Excelente atendimento fortalece a imagem da empresa e gera recomendações positivas.",
      metrics: "Aumento de 50% no NPS",
      color: "from-golden-primary to-golden-secondary",
      bgColor: "bg-golden-primary/10"
    }
  ]

  const impactoFinanceiro = [
    {
      icon: Target,
      title: "ROI Comprovado",
      value: "3-4 meses",
      description: "Tempo médio para retorno do investimento"
    },
    {
      icon: Gauge,
      title: "Redução de Custos",
      value: "40%",
      description: "Economia média em custos operacionais"
    },
    {
      icon: CheckCircle,
      title: "Aumento de Fidelização",
      value: "65%",
      description: "Clientes mais propensos a permanecer"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-golden-primary/10 text-golden-primary px-4 py-2 text-sm font-medium">
            Resultados Comprovados
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resultados do SAC Estruturado
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresas que implementam nosso SAC experimentam transformações significativas 
            em satisfação do cliente, eficiência operacional e resultados financeiros.
          </p>
        </div>

        {/* Benefícios Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beneficios.map((beneficio, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="p-0">
                <div className={`${beneficio.bgColor} p-6 pb-4`}>
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${beneficio.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <beneficio.icon className="w-6 h-6 text-golden-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {beneficio.title}
                  </h3>
                </div>
                
                <div className="p-6 pt-4">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {beneficio.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white text-golden-primary border border-golden-primary/30">
                    <CheckCircle className="w-4 h-4 text-golden-primary" />
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
              Impacto Financeiro do SAC Profissional
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Investir em um SAC estruturado gera retornos mensuráveis e 
              impacto positivo direto no resultado da empresa.
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
          {/* Removed div clients depoiments*/}
        </div> 

        {/* Comparativo Antes/Depois */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Transformação Real: Antes vs Depois do SAC
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Antes */}
            <Card className="border-2 border-gray-200 bg-gray-50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex p-3 bg-gray-500 rounded-full mb-4">
                    <Star className="w-6 h-6 text-golden-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Antes do SAC Estruturado
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Atendimento lento e ineficiente",
                    "Clientes insatisfeitos e reclamações",
                    "Perda de clientes para concorrência",
                    "Custos altos de operação",
                    "Falta de controle e métricas",
                    "Imagem da marca prejudicada"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
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
                    <CheckCircle className="w-6 h-6 text-golden-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-golden-primary mb-2">
                    Depois do SAC Alencar
                  </h4>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Atendimento rápido e multicanal",
                    "Clientes satisfeitos e fidelizados",
                    "Retenção alta e recomendações",
                    "Redução significativa de custos",
                    "Métricas e relatórios detalhados",
                    "Marca fortalecida no mercado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-golden-primary flex-shrink-0" />
                      <span className="text-gray-800">{item}</span>
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
