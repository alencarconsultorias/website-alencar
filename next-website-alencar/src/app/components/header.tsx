import Link from 'next/link'

export default function Header() {
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
          <Link href="/servicos" className="text-gray-800 hover:text-blue-600 transition">
            Serviços
          </Link>
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
