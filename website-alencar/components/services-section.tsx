import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      title: "Explore nossos produtos e recursos",
      description: "Conheça nossa plataforma de consultoria, Google Workspace e muito mais",
      image: "/business-consulting-technology-workspace.jpg",
      link: "#",
    },
    {
      title: "Saiba tudo sobre nossos modelos de IA",
      description: "E descubra suas capacidades",
      image: "/artificial-intelligence-neural-network-blue.jpg",
      link: "#",
    },
    {
      title: "Veja como estamos resolvendo alguns dos",
      description: "maiores desafios em ciência da computação",
      image: "/computer-science-innovation-technology.jpg",
      link: "#",
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
