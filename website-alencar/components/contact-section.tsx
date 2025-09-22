import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Vamos conversar sobre seu projeto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Entre em contato conosco e descubra como podemos transformar sua empresa através da tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale conosco</h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Você é uma empresa ou empreendedor buscando soluções tecnológicas inovadoras? Estamos aqui para ajudar.
                Vamos construir algo incrível juntos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contato@alencarconsultorias.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-muted-foreground">+55 (11) 9999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-golden-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Pronto para começar?</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sobrenome</label>
                    <Input placeholder="Seu sobrenome" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Empresa</label>
                  <Input placeholder="Nome da sua empresa" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea placeholder="Conte-nos sobre seu projeto..." rows={4} />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-golden-primary hover:bg-golden-secondary text-white"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
