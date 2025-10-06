import { Button } from "@/components/ui/button"

export function SalesFinalCtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Descubra o software certo para sua empresa</h2>
          <p className="text-gray-300 mb-8">
            Fale com um consultor comercial e receba uma recomendação personalizada com base nas suas metas e
            processos.
          </p>
          <a href="#contato">
            <Button className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 text-lg">
              Fale com um Consultor Comercial
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}


