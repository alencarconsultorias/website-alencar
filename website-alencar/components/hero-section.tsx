import { Button } from "@/components/ui/button"
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
              Tudo que você precisa para
              <span className="text-golden-primary font-medium"> transformar</span> seu negócio
            </h1>
            <p className="text-xl text-gray-600 max-w-lg text-pretty leading-relaxed">
              Conheça os mais novos membros da família Alencar, incluindo consultoria em IA, transformação digital e
              muito mais.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium">
              <a href="#contato">
                Comecar
              </a>
            </Button>
          </div>

          {/* Product Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src="/images/alencar-icon.png"
                  alt="Alencar Technology"
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
