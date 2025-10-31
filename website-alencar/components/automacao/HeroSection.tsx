import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automação e Segurança para
            <span className="text-golden-primary"> Casa ou Empresa</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Soluções inteligentes de monitoramento, proteção eletrônica e automação sob medida. <strong> Conforto, praticidade e proteção </strong> — tudo conectado à sua rotina, <br /> em um só lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contato">
              <Button className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 text-lg">
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
