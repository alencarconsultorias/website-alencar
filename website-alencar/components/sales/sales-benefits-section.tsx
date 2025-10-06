import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, LineChart, Settings, CheckCircle2, Headset } from "lucide-react"

const BENEFITS = [
  {
    icon: Settings,
    title: "Alinhamento preciso às necessidades",
    description: "Seleção assertiva com base em diagnóstico e critérios objetivos.",
  },
  {
    icon: LineChart,
    title: "Produtividade e eficiência",
    description: "Ferramentas certas para aumentar performance e otimizar processos.",
  },
  {
    icon: CheckCircle2,
    title: "Redução de custos",
    description: "Evite gastos com licenças inadequadas e sobreposição de ferramentas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e confiabilidade",
    description: "Soluções testadas, com compliance e alto nível de segurança.",
  },
  {
    icon: Headset,
    title: "Sucesso do cliente contínuo",
    description: "Acompanhamento antes, durante e após a implantação com foco em resultados.",
  },
  {
    icon: Settings,
    title: "Melhoria Continua",
    description: "Retenção de clientes, pos-vendas, pesquisas de NPS e outros.",
  },
]

export function SalesBenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
          Benefícios globais para o seu negócio
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <benefit.icon className="text-golden-primary" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


