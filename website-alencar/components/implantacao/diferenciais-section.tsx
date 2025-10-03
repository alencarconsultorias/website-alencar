"use client"

import { Card, CardContent } from "@/components/ui/card"
import { 
  Target, 
  HeadphonesIcon, 
  GraduationCap, 
  Shield, 
  TrendingUp, 
  Clock,
  Users,
  CheckCircle2
} from "lucide-react"

export function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: Target,
      title: "Planejamento Personalizado",
      description: "Cada empresa é única. Desenvolvemos estratégias específicas para suas necessidades e objetivos de negócio.",
      highlights: ["Análise detalhada", "Estratégia customizada", "Roadmap personalizado"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Equipe dedicada de especialistas disponível durante toda a jornada de implementação e além.",
      highlights: ["Suporte 24/7", "Especialistas dedicados", "Resposta rápida"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: GraduationCap,
      title: "Treinamento Completo",
      description: "Capacitação abrangente para sua equipe, garantindo aproveitamento máximo do sistema implementado.",
      highlights: ["Treinamento prático", "Material didático", "Certificação"],
      color: "from-golden-primary to-golden-secondary"
    },
    {
      icon: Shield,
      title: "Acompanhamento Pós-Implantação",
      description: "Monitoramento contínuo e otimizações para garantir o sucesso a longo prazo do seu investimento.",
      highlights: ["Monitoramento ativo", "Otimizações contínuas", "Relatórios de performance"],
      color: "from-golden-primary to-golden-secondary"
    }
  ]

  const stats = [
    { number: "98%", label: "Taxa de Sucesso", description: "em implantações realizadas" },
    { number: "15+", label: "Anos de Experiência", description: "no mercado de TI" },
    { number: "200+", label: "Projetos Entregues", description: "com excelência" },
    { number: "24/7", label: "Suporte Disponível", description: "quando você precisar" }
  ]

  const beneficiosEmpresa = [
    "Redução de falhas operacionais em até 80%",
    "Aumento de produtividade em média de 45%",
    "Padronização completa de processos",
    "ROI positivo em até 6 meses",
    "Escalabilidade para crescimento futuro",
    "Integração com sistemas existentes"
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
            Por que escolher a Alencar Consultorias?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos experiência técnica, metodologia comprovada e foco no cliente para 
            entregar implantações que realmente transformam negócios.
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
                    <item.icon className="w-6 h-6 text-white" />
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
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefícios para Empresa */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Resultados Comprovados para sua Empresa
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossa metodologia comprovada garante que sua implantação não apenas funcione, 
                mas transforme positivamente a operação da sua empresa.
              </p>
              
              <div className="grid gap-3">
                {beneficiosEmpresa.map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-golden-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-golden-primary" />
                    </div>
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-golden-primary to-golden-secondary rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h4 className="text-xl font-semibold mb-2">Crescimento Garantido</h4>
                    <p className="opacity-90">
                      Empresas que implementam com nossa metodologia veem crescimento médio de 
                      <span className="font-bold text-2xl block mt-2">35% em eficiência</span>
                    </p>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="opacity-80">Tempo médio de ROI</span>
                      <span className="font-semibold">4-6 meses</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="opacity-80">Satisfação do cliente</span>
                      <span className="font-semibold">98%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-golden-primary text-white p-3 rounded-full shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-golden-secondary text-white p-3 rounded-full shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
