import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function InnovationSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-sm font-semibold text-golden-primary uppercase tracking-widest">Parceiro Oficial</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-balance leading-tight">
              Sistema SaaS e Mobile com
              <span className="text-golden-primary"> Control Mob</span>
            </h2>
            <p className="text-lg text-gray-600 text-pretty leading-relaxed">
              A Control Mob oferece uma plataforma SaaS e Mobile robusta para os setores de armazenagem, logística, serviços técnicos e trade marketing. Como parceiro oficial autorizado, a Alencar é o canal para venda, implantação e suporte dessas soluções.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full bg-transparent"
            >
              <Link href="/parceiros">Conheça o Control Mob</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/partners/control-mob-logo.png"
                alt="Control Mob — Sistema SaaS e Mobile"
                width={600}
                height={400}
                className="w-full h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
