import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Vendas de Software",
      description: "Representamos e comercializamos soluções de software de qualquer segmento, conectando empresas às melhores tecnologias do mercado.",
      image: "/home/services/professional-business-team-working-with-technology.jpg",
      link: "/servicos/vendas",
    },
    {
      title: "Implantação de Software",
      description: "Conduzimos a implantação completa de qualquer software, adaptando processos e preparando sua equipe para operar com excelência.",
      image: "/home/services/business-consulting-technology-workspace.jpg",
      link: "/servicos/implantacao",
    },
    {
      title: "Suporte e Atendimento ao Cliente",
      description: "Suporte técnico especializado e atendimento contínuo para garantir que seu software funcione sem interrupções, independentemente da solução.",
      image: "/home/services/business-handshake-partnership-professional-meetin.jpg",
      link: "/servicos/suporte",
    },
    {
      title: "Desenvolvimento de Software",
      description: "Criamos aplicações e sistemas sob medida — do zero ou adaptando soluções existentes — com tecnologias modernas e metodologias ágeis.",
      image: "/home/services/computer-science-innovation-technology.jpg",
      link: "/servicos/desenvolvimento",
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <Card
                className="border-0 shadow-none hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={480}
                      height={270}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
