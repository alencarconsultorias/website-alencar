import { Card, CardContent } from "@/components/ui/card"
import { Camera, Bot, Smartphone, MonitorSmartphone } from "lucide-react"

export function ServicosSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Serviços de Automação e Segurança</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center py-10">
              <Camera className="w-12 h-12 text-golden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Instalação de Câmeras (CFTV IP/Analógico)</h3>
              <p className="text-center text-gray-700">Monitoramento 24h com acesso remoto, gravação em nuvem e visão noturna para garantir máxima segurança.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center py-10">
              <Bot className="w-12 h-12 text-golden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Automação de Iluminação, Portões, Persianas e Som</h3>
              <p className="text-center text-gray-700">Controle total de ambientes pelo celular, agendas personalizadas e integração com sensores inteligentes.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center py-10">
              <Smartphone className="w-12 h-12 text-golden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Integração com Assistentes Virtuais</h3>
              <p className="text-center text-gray-700">Comando de voz com Alexa, Google Home, etc. Controle inteligente e automatizado de todos os sistemas.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center py-10">
              <MonitorSmartphone className="w-12 h-12 text-golden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Monitoramento Remoto e Sistemas Inteligentes</h3>
              <p className="text-center text-gray-700">Visualização em tempo real, alarmes automáticos e relatórios de eventos na palma da mão.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
