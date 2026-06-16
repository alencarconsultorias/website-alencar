import Image from "next/image"
import { ShoppingCart, Settings, Headphones, Code2 } from "lucide-react"

const services = [
  { label: "Vendas", href: "/servicos/vendas", Icon: ShoppingCart },
  { label: "Implantação", href: "/servicos/implantacao", Icon: Settings },
  { label: "Suporte", href: "/servicos/suporte", Icon: Headphones },
  { label: "Desenvolvimento", href: "/servicos/desenvolvimento", Icon: Code2 },
]

export function ApproachSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 text-balance">15+ anos de experiência em tecnologia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Explore nossos serviços para adequar o seu modelo de negócio e melhorar o seu padrão de qualidade, seja qual for o software.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl">
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src="/home/services/professional-business-team-working-with-technology.jpg"
                  alt="Equipe Alencar Consultorias"
                  width={1000}
                  height={1000}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Service tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                className="block bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-golden-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{label}</h3>
                    <div className="flex items-center text-blue-600 text-sm mt-1">
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
