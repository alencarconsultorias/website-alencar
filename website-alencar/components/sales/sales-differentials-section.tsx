import { CheckCircle2 } from "lucide-react"

const DIFFERENTIALS = [
  "Discovery estruturado (diagnóstico e mapeamento de processos)",
  "Business case e ROI estimado antes da compra",
  "Provas de conceito guiadas com critérios de sucesso (PoC)",
  "Negociação orientada a valor e compliance de licenciamento",
  "Plano de implantação com gestão de mudança",
  "Acompanhamento pós-venda e KPIs de adoção",
]

export function SalesDifferentialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
            Nossa forma de conduzir a venda de software
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {DIFFERENTIALS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-sm">
                <CheckCircle2 className="text-golden-primary shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )}


