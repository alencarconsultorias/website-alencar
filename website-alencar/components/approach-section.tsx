import Image from "next/image"

export function ApproachSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 text-balance">10 anos de experiência em tecnologia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Explore nossos servicos para adequar o seu modelo de negocio e melhorar o seu padrao de qualidade seja ele qual for!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Main Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 shadow-2xl">
              <div className="relative h-96 flex items-center justify-center">
                <Image
                  src="/images/alencar-icon.png"
                  alt="Alencar 10"
                  width={250}
                  height={250}
                  className="object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Product Variants */}
          <div className="space-y-8">
            <a href="/servicos/vendas" className="block bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                  <Image
                    src="/images/alencar-icon.png"
                    alt="Alencar 10"
                    width={32}
                    height={32}
                    className="object-contain brightness-0 invert sepia saturate-[10000%] hue-rotate-[35deg]"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Vendas</h3>
                  <div className="flex items-center text-blue-600 text-sm">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            <a href="/servicos/implantacao" className="block bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                  <Image
                    src="/images/alencar-icon.png"
                    alt="Alencar 10 Pro Fold"
                    width={32}
                    height={32}
                    className="object-contain brightness-0 invert sepia saturate-[10000%] hue-rotate-[35deg]"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Implantação</h3>
                  <div className="flex items-center text-blue-600 text-sm">
                    <span>Saiba mais</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
