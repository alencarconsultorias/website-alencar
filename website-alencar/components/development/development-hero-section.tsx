import { Button } from "@/components/ui/button"

export function DevelopmentHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Desenvolvimento de
            <span className="text-golden-primary"> Software</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Criamos soluções digitais robustas e escaláveis utilizando as tecnologias mais modernas do mercado. 
            Do conceito à implementação, transformamos suas ideias em produtos digitais de alta qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 text-lg">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" className="border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-white px-8 py-3 text-lg">
              Ver Portfólio
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">50+</div>
            <div className="text-gray-600">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">15+</div>
            <div className="text-gray-600">Tecnologias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">99%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-primary mb-2">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}
