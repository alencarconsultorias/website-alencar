import { Button } from "@/components/ui/button"

export function SalesHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Serviço Comercial para
            <span className="text-golden-primary"> Venda de Software</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Consultoria comercial ponta a ponta: da descoberta à prova de conceito, negociação,
            implantação e sucesso do cliente — para você adquirir o software certo, com resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contato">
              <Button className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 text-lg">
                Solicitar uma Consultoria
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


