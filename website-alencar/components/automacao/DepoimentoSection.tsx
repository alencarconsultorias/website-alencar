import { MessageCircle } from "lucide-react"

export function DepoimentoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-golden-primary/10 via-white to-golden-secondary/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-2xl p-8 border flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <MessageCircle className="w-16 h-16 text-golden-primary opacity-80" />
          </div>
          <div>
            <p className="text-lg italic text-gray-800 mb-2">“A automação instalada pela Alencar Consultorias revolucionou a segurança da nossa empresa. Agora monitoro tudo do celular e até controlo a iluminação remotamente!”</p>
            <span className="block text-sm text-gray-600">Diretor de Operações, setor logístico</span>
          </div>
        </div>
      </div>
    </section>
  )
}
