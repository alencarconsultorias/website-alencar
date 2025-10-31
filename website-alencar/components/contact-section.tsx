"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export function ContactSection() {
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)

    try {
      const formEl = e.currentTarget
      const data = new FormData(formEl)
      const payload = {
        firstName: String(data.get("firstName") || ""),
        lastName: String(data.get("lastName") || ""),
        email: String(data.get("email") || ""),
        company: String(data.get("company") || ""),
        message: String(data.get("message") || ""),
      }

      // Prefer EmailJS if envs exist
      const svc = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const tmpl = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const pub = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (svc && tmpl && pub) {
        await emailjs.send(svc, tmpl, payload, { publicKey: pub })
      } else if (process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
        // Fallback to Web3Forms
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
            subject: "Novo contato pelo site",
            from_name: `${payload.firstName} ${payload.lastName}`.trim(),
            from_email: payload.email,
            company: payload.company,
            message: payload.message,
          }),
        })
        const json = await res.json()
        if (!res.ok || json.success !== true) {
          throw new Error(json?.message || "Falha no envio pelo Web3Forms")
        }
      } else {
        throw new Error("Configuração de envio ausente. Defina EmailJS ou WEB3FORMS.")
      }

      toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.")
      formEl.reset()
    } catch (err: any) {
      toast.error(
        typeof err?.message === "string"
          ? `Não foi possível enviar sua mensagem: ${err.message}`
          : "Não foi possível enviar sua mensagem. Tente novamente."
      )
    } finally {
      setLoading(false)
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
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input name="firstName" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Sobrenome</label>
                    <Input name="lastName" placeholder="Seu sobrenome" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Empresa</label>
                  <Input name="company" placeholder="Nome da sua empresa" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea name="message" placeholder="Conte-nos sobre seu projeto..." rows={4} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-golden-primary hover:bg-golden-secondary text-white"
                  disabled={loading}
                  size="lg"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
