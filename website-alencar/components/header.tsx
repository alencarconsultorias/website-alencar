"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-golden-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="cursor-pointer">
              <Image
                src="/images/alencar-logo.png"
                alt="Alencar Consultorias"
                width={200}
                height={60}
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="#servicos" className="text-foreground hover:text-golden-primary transition-colors font-medium inline-flex items-center py-2">
                Serviços
                <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {/* Invisible bridge to prevent menu from disappearing */}
              <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                <div className="min-w-[220px] rounded-md border border-golden-primary/20 bg-white shadow-lg backdrop-blur-sm">
                  <div className="py-2">
                    <a href="#servicos-implantacao" className="block px-4 py-3 text-sm text-foreground hover:bg-golden-primary/10 hover:text-golden-primary transition-all duration-200 transform hover:translate-x-1">
                      Implantação
                    </a>
                    <a href="#servicos-suporte" className="block px-4 py-3 text-sm text-foreground hover:bg-golden-primary/10 hover:text-golden-primary transition-all duration-200 transform hover:translate-x-1">
                      Suporte
                    </a>
                    <a href="/servicos/vendas" className="block px-4 py-3 text-sm text-foreground hover:bg-golden-primary/10 hover:text-golden-primary transition-all duration-200 transform hover:translate-x-1">
                      Venda
                    </a>
                    <a href="/servicos/desenvolvimento" className="block px-4 py-3 text-sm text-foreground hover:bg-golden-primary/10 hover:text-golden-primary transition-all duration-200 transform hover:translate-x-1">
                      Desenvolvimento de Software
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#sobre" className="text-foreground hover:text-golden-primary transition-colors font-medium">
              Sobre
            </a>
            <a href="/parceiros" className="text-foreground hover:text-golden-primary transition-colors font-medium">
              Parceiros
            </a>
            <a href="#contato" className="text-foreground hover:text-golden-primary transition-colors font-medium">
              Contato
            </a>
            <Button className="bg-golden-primary hover:bg-golden-secondary text-white">Fale Conosco</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-golden-primary/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#inicio" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                Início
              </a>
              <div className="flex flex-col">
                <a href="#servicos" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                  Serviços
                </a>
                <div className="mt-2 ml-4 flex flex-col space-y-2">
                  <a href="#servicos-implantacao" className="text-sm text-foreground/80 hover:text-golden-primary transition-colors">
                    Implantação
                  </a>
                  <a href="#servicos-suporte" className="text-sm text-foreground/80 hover:text-golden-primary transition-colors">
                    Suporte
                  </a>
                  <a href="#servicos-venda" className="text-sm text-foreground/80 hover:text-golden-primary transition-colors">
                    Venda
                  </a>
                  <a href="/servicos/desenvolvimento" className="text-sm text-foreground/80 hover:text-golden-primary transition-colors">
                    Desenvolvimento de Software
                  </a>
                </div>
              </div>
              <a href="#sobre" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="/parceiros" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                Parceiros
              </a>
              <a href="#contato" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                Contato
              </a>
              <Button className="bg-golden-primary hover:bg-golden-secondary text-white w-fit">Fale Conosco</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
