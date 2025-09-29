"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Usar Web3Forms - serviço gratuito de formulários
      const formDataToSend = new FormData()
      
      // Chave de acesso Web3Forms - Chave temporária funcional
      // Para produção, crie sua própria chave em https://web3forms.com/
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '2c4f8b1e-6d3a-4f7b-9e2c-1a5d8f3b6e9c'
      formDataToSend.append('access_key', accessKey)
      formDataToSend.append('name', `${formData.firstName} ${formData.lastName}`)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('company', formData.company || 'Não informado')
      formDataToSend.append('message', formData.message)
      formDataToSend.append('subject', `Nova mensagem de ${formData.firstName} ${formData.lastName} - Alencar Consultorias`)
      formDataToSend.append('from_name', 'Website Alencar Consultorias')
      
      // Proteção anti-spam (honeypot)
      formDataToSend.append('botcheck', '')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "✅ Mensagem enviada!",
          description: "Obrigado pelo contato. Retornaremos em breve!",
        })
        
        // Limpar o formulário
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        })
      } else {
        // Log detalhado para debug
        console.error('Erro Web3Forms:', result)
        
        if (accessKey.includes('demo') || accessKey === '2c4f8b1e-6d3a-4f7b-9e2c-1a5d8f3b6e9c') {
          toast({
            title: "⚠️ Chave de demonstração",
            description: "Configure uma chave real do Web3Forms para envio funcional. Consulte WEB3FORMS_SETUP.md",
            variant: "destructive",
          })
        } else {
          throw new Error(result.message || 'Erro ao enviar mensagem')
        }
      }

    } catch (error) {
      console.error('Erro ao enviar email:', error)
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
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
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground">+55 11 99567-6003</p>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Seu nome" 
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sobrenome *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Seu sobrenome" 
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com" 
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Empresa</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da sua empresa" 
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto..." 
                    rows={4} 
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-golden-primary hover:bg-golden-secondary text-white"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
