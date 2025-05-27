"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicos = [
    {
      titulo: "Suporte e Atendimento",
      descricao: "Suporte técnico especializado",
      href: "/servicos#suporteeatendimentoaocliente"
    },
    {
      titulo: "Implantação de Software",
      descricao: "Implementação completa de sistemas",
      href: "/servicos#implantacaodesoftware"
    },
    {
      titulo: "Venda de Software",
      descricao: "Soluções tecnológicas personalizadas",
      href: "/servicos#vendadesoftware"
    },
    {
      titulo: "Marketing",
      descricao: "Estratégias digitais integradas",
      href: "/servicos#marketing"
    }
  ];

  return (
    <header className="w-full px-6 py-4 bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <img src="/next.svg" alt="Logo" className="h-10" />
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-blue-600 transition">
            Início
          </Link>
          
          {/* Dropdown de Serviços */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex items-center cursor-pointer">
              <span className="text-gray-800 group-hover:text-blue-600 transition">Serviços</span>
              <svg 
                className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Submenu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              {servicos.map((servico, index) => (
                <Link
                  key={index}
                  href={servico.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <div className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                    {servico.titulo}
                  </div>
                  <div className="text-sm text-gray-600">{servico.descricao}</div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/cases" className="text-gray-800 hover:text-blue-600 transition">
            Cases
          </Link>
          <Link href="/sobre" className="text-gray-800 hover:text-blue-600 transition">
            Sobre
          </Link>
          <Link href="/equipe" className="text-gray-800 hover:text-blue-600 transition">
            Equipe
          </Link>
          <Link href="/mobile" className="text-gray-800 hover:text-blue-600 transition">
            Mobile
          </Link>
        </nav>

        {/* Botão CTA */}
        <Link href="/contato">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition">
            Fale com a gente
          </button>
        </Link>
      </div>
    </header>
  )
}
