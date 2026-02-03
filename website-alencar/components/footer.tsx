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
                <a href="/servicos/implantacao" className="hover:text-golden-primary transition-colors">
                  Implantação de Software
                </a>
              </li>
              <li>
                <a href="/servicos/suporte" className="hover:text-golden-primary transition-colors">
                  Suporte e Atendimento ao Cliente
                </a>
              </li>
              <li>
                <a href="/servicos/vendas" className="hover:text-golden-primary transition-colors">
                  Vendas de Software
                </a>
              </li>
              <li>
                <a href="/servicos/desenvolvimento" className="hover:text-golden-primary transition-colors">
                  Desenvolvimento de Software
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="/" className="hover:text-golden-primary transition-colors">
                  Estratégica Financeira e Jurídica
                </a>
                <span className="text-xs bg-golden-primary text-white px-2 py-0.5 rounded">Em breve</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="/" className="hover:text-golden-primary transition-colors">
                  Segurança Residencial e Comercial
                </a>
                <span className="text-xs bg-golden-primary text-white px-2 py-0.5 rounded">Em breve</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-golden-primary">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="mailto:contato@alencarconsultorias.com.br" className="hover:text-golden-primary transition-colors">
                  contato@alencarconsultorias.com.br
                </a>
              </li>
              {/* <li>+55 (11) 99999-9999</li> */}
              <li>São Paulo, Brasil</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-golden-primary">Siga-nos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/551199999999" /* Em breve numero novo da Alencar*/
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
              <a href="/politica-de-privacidade" className="text-white/60 hover:text-golden-primary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-white/60 hover:text-golden-primary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
