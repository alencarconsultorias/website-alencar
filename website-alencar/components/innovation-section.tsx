import { Button } from "@/components/ui/button"
import Image from "next/image"

export function InnovationSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-balance leading-tight">
              Novos recursos de IA chegando na
              <span className="text-golden-primary"> Alencar</span>
            </h2>
            <p className="text-lg text-gray-600 text-pretty leading-relaxed">
              A Alencar está adicionando IA a mais pessoas, e isso vai tornar a consultoria mais útil para todos.
            </p>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full bg-transparent"
            >
              <a href="#contato">
                Confira
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/alencar-icon.png"
                alt="AI Innovation"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
