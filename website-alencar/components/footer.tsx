import Image from "next/image"
import { Phone, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/alencar-logo.png"
              alt="Alencar Consultorias"
              width={200}
              height={60}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/80 max-w-md text-pretty">
              Transformando empresas através da tecnologia. Somos especialistas em consultoria tecnológica e
              desenvolvimento de soluções inovadoras.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-golden-primary">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Infraestrutura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Segurança Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Vendas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-golden-primary transition-colors">
                  Suporte e Atendimento ao Cliente
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-golden-primary">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>contato@alencarconsultorias.com.br</li>
              <li>+55 (11) 99567-6003</li>
              <li>São Paulo, Brasil</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-golden-primary">Siga-nos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5511995676003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-golden-primary transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="WhatsApp"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/alencar-consultorias/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-golden-primary transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/alencarconsultorias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-golden-primary transition-colors p-2 rounded-full hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 Alencar Consultorias. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-golden-primary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-golden-primary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
