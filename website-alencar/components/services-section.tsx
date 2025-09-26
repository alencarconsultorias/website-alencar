import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Implantação de Software",
      description: "Implementação completa de soluções de software personalizadas para sua empresa, garantindo integração perfeita com seus processos existentes",
      image: "/business-consulting-technology-workspace.jpg",
      link: "#",
    },
    {
      title: "Vendas de Software",
      description: "Comercialização de soluções de software inovadoras, oferecendo as melhores tecnologias para impulsionar o crescimento do seu negócio",
      image: "/professional-business-team-working-with-technology.jpg",
      link: "#",
    },
    {
      title: "Suporte e Atendimento ao Cliente",
      description: "Assistência técnica especializada e suporte contínuo para garantir o funcionamento otimizado de suas soluções de software",
      image: "/business-handshake-partnership-professional-meetin.jpg",
      link: "#",
    },
    {
      title: "Desenvolvimento de Software",
      description: "Criação de aplicações personalizadas e sistemas sob medida, desenvolvidos com as mais modernas tecnologias e metodologias ágeis",
      image: "/computer-science-innovation-technology.jpg",
      link: "#",
    },
    {
      title: "Fluxo Financeiro e Jurídico",
      description: "Soluções especializadas em gestão financeira e compliance jurídico para empresas de software, garantindo conformidade e eficiência operacional",
      image: "/modern-technology-innovation-digital-transformatio.jpg",
      link: "#",
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-normal text-gray-900 mb-2 text-balance leading-snug">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-pretty">{service.description}</p>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
