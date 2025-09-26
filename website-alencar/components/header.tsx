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
            <Image
              src="/images/alencar-logo.png"
              alt="Alencar Consultorias"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-golden-primary transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-golden-primary transition-colors font-medium">
              Serviços
            </a>
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
              <a href="#servicos" className="text-foreground hover:text-golden-primary transition-colors font-medium">
                Serviços
              </a>
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
