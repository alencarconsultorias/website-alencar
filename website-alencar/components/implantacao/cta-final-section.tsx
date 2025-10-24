"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react"

export function CtaFinalSection() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5511995676003?text=Olá! Gostaria de saber mais sobre os serviços de Implantação de Software da Alencar Consultorias.', '_blank')
  }

  const handleEmailContact = () => {
    window.location.href = 'mailto:contato@alencarconsultorias.com.br?subject=Interesse em Implantação de Software'
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const garantias = [
    "Análise gratuita das suas necessidades",
    "Proposta personalizada sem compromisso",
    "Metodologia comprovada com 98% de sucesso",
    "Suporte especializado 24/7",
    "Garantia de satisfação"
  ]

  return (
    <section id="cta-final" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-golden-primary px-4 py-2 rounded-full text-sm font-medium mb-6 text-white">
            <Star className="w-4 h-4 text-white" />
            Transformação Garantida
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            Pronto para transformar sua empresa com a 
            <span className="block text-golden-primary">implantação certa?</span>
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Não deixe sua empresa ficar para trás. Comece hoje mesmo sua jornada de transformação 
            digital com quem entende do assunto.
          </p>

          {/* Garantias */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {garantias.map((garantia, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-golden-primary flex-shrink-0" />
                <span className="text-gray-800 font-medium">{garantia}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp CTA */}
          <Card className="border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-golden-primary rounded-full mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fale com um Especialista
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Converse diretamente com nossos especialistas via WhatsApp. 
                Resposta rápida e atendimento personalizado.
              </p>
              
              <Button 
                size="lg"
                className="bg-golden-primary text-white hover:bg-golden-secondary px-8 py-4 text-lg w-full font-semibold"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chamar no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-golden-primary" />
                Resposta em até 30 minutos
              </div>
            </CardContent>
          </Card>

          {/* Email CTA */}
          <Card className="border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 bg-golden-primary rounded-full mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solicite uma Proposta
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Envie-nos um email detalhando suas necessidades e receba 
                uma proposta personalizada e sem compromisso.
              </p>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-white bg-transparent px-8 py-4 text-lg w-full"
                onClick={handleEmailContact}
              >
                <Mail className="mr-2 w-5 h-5" />
                Enviar Email
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-golden-primary" />
                Proposta em até 24 horas
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Urgência e Benefícios */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🚀 Oferta Especial por Tempo Limitado
            </h3>
            
            <p className="text-gray-600 text-lg mb-6">
              Empresas que iniciam sua implantação este mês recebem:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-primary mb-2">✓</div>
                <div className="text-gray-900 font-semibold mb-1">Análise Gratuita</div>
                <div className="text-gray-600 text-sm">Diagnóstico completo sem custo</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-primary mb-2">✓</div>
                <div className="text-gray-900 font-semibold mb-1">Desconto de 15%</div>
                <div className="text-gray-600 text-sm">Na primeira fase do projeto</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-primary mb-2">✓</div>
                <div className="text-gray-900 font-semibold mb-1">Suporte Estendido</div>
                <div className="text-gray-600 text-sm">3 meses adicionais grátis</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-golden-primary text-white hover:bg-golden-secondary font-bold px-8 py-4 text-lg"
                onClick={handleWhatsAppContact}
              >
                Aproveitar Oferta Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-golden-primary text-golden-primary hover:bg-golden-primary hover:text-white bg-transparent px-8 py-4 text-lg"
                onClick={scrollToTop}
              >
                Saber Mais Sobre o Serviço
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
