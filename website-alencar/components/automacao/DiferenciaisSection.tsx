import { Shield, Users, Zap, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiferenciaisSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-golden-primary/10 text-golden-primary mb-4 text-sm font-medium">Nossos Diferenciais</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Por que escolher a Alencar Consultorias?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experiência, dedicação e foco total em soluções inteligentes, personalizadas e realmente seguras para seu patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow group hover:shadow-xl transition-all">
            <Shield className="w-10 h-10 text-golden-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Atendimento 100% Personalizado</h3>
            <p className="text-gray-600 mb-3">Projetos pensados sob medida para as reais demandas do seu ambiente.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow group hover:shadow-xl transition-all">
            <Users className="w-10 h-10 text-golden-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Equipe Especializada</h3>
            <p className="text-gray-600 mb-3">Profissionais altamente qualificados em eletrônica, TI e segurança.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow group hover:shadow-xl transition-all">
            <Zap className="w-10 h-10 text-golden-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Tecnologia de Última Geração</h3>
            <p className="text-gray-600 mb-3">Só trabalhamos com equipamentos reconhecidos por qualidade e inovação.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl shadow group hover:shadow-xl transition-all">
            <CheckCircle2 className="w-10 h-10 text-golden-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Garantia de Satisfação</h3>
            <p className="text-gray-600 mb-3">Suporte dedicado, pós-venda próximo e garantia de excelência no serviço.</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#contato">
            <Button size="lg" className="bg-golden-primary text-white hover:bg-golden-secondary px-10 py-4 font-bold text-lg">
              Solicitar orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
