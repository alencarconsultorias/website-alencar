import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 text-balance leading-tight">
              Venda, implantação, suporte e desenvolvimento para
              <span className="text-golden-primary font-medium"> qualquer software</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg text-pretty leading-relaxed">
              A Alencar Consultorias é o parceiro completo para empresas que precisam comercializar, implantar, manter ou desenvolver soluções de software — de qualquer segmento.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 rounded-full font-medium">
                <Link href="/#servicos">Nossos Serviços</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium bg-transparent">
                <Link href="/#contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src="/home/alencar-icon.png"
                  alt="Alencar Consultorias"
                  width={300}
                  height={300}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
