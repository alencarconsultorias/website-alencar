
export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e Descrição */}
        <div>
          <img src="/vercel.svg" alt="Logo UDS" className="h-10 mb-4" />
          <p className="text-sm text-neutral-400">
            Transformamos ideias em soluções digitais inovadoras.
          </p>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Institucional</h3>
          <ul className="space-y-1 text-neutral-400 text-sm">
            <li><a href="/sobre" className="hover:text-white">Sobre nós</a></li>
            <li><a href="/carreiras" className="hover:text-white">Carreiras</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Contato</h3>
          <ul className="space-y-1 text-neutral-400 text-sm">
            <li>Email: contato@alencarconsultorias.com.br</li>
            <li>Telefone: (00) 0000-0000</li>
            <li>Endereço: Av. Exemplo, 123 - São Paulo/SP</li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Redes sociais</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">🔗</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">📸</a>
            <a href="#" aria-label="YouTube" className="hover:text-white">▶️</a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="mt-12 border-t border-neutral-800 pt-4 text-sm text-neutral-500 text-center">
        © {new Date().getFullYear()} Nome da Sua Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}
