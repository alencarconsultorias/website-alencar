import { Card, CardContent } from "@/components/ui/card"

const SOLUTIONS = [
  { title: "ERP", description: "Gestão integrada de recursos empresariais." },
  { title: "CRM", description: "Gestão de relacionamento com clientes." },
  { title: "Atendimento & Automação", description: "Chatbots, assistentes e fluxos de atendimento." },
  { title: "Logística & Operações", description: "Roteirização, tracking e otimização de entregas." },
  { title: "Business Intelligence", description: "Dashboards e análises para tomada de decisão." },
  { title: "Colaboração & Produtividade", description: "Soluções para comunicação e trabalho em equipe." },
]

export function SalesPortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">Portfólio de Soluções</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SOLUTIONS.map((solution) => (
            <Card key={solution.title} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


