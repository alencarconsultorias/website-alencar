export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header Moderno */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700">Alencar Consultorias</div>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#sobre" className="hover:text-blue-700">Sobre</a>
            <a href="#servicos" className="hover:text-blue-700">Serviços</a>
            <a href="#contato" className="hover:text-blue-700">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluções em Tecnologia para o Sucesso do Seu Negócio
          </h1>
          <p className="text-lg md:text-xl mb-8">
            A Alencar Consultorias oferece serviços em Comercial, Implantação, Suporte, Marketing e Desenvolvimento.
          </p>
          <a
            href="#servicos"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            Conheça nossos serviços
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6" id="sobre">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre a Alencar Consultorias</h2>
          <p className="text-lg text-gray-600">
            Atuamos com foco em tecnologia, independentemente da área de atuação do cliente. Nosso objetivo 
            é entregar qualidade onde houver falta de controle, gestão ou processos não padronizados.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-50 py-16 px-6" id="servicos">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Comercial',
                descricao: 'Apoiamos a venda de produtos tecnológicos com foco em resultado.',
              },
              {
                titulo: 'Implantação',
                descricao: 'Implementação de soluções com acompanhamento técnico e estratégico.',
              },
              {
                titulo: 'Suporte',
                descricao: 'Atendimento rápido e eficiente com foco na satisfação do cliente.',
              },
              {
                titulo: 'Marketing',
                descricao: 'Estratégias para posicionar sua marca e alavancar seus canais digitais.',
              },
              {
                titulo: 'Desenvolvimento',
                descricao: 'Em breve: soluções sob medida com foco em performance e escalabilidade.',
              },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{s.titulo}</h3>
                <p className="text-gray-600">{s.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cliente principal */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nosso Cliente Principal</h2>
          <p className="text-lg text-gray-700 mb-4">
            Atuamos fortemente com a <strong>Vallysys Sistemas</strong>, oferecendo venda, suporte, implantação 
            e serviços administrativos da plataforma.
          </p>
          <a
            href="https://www.vallysyssistemas.com.br"
            className="text-blue-700 font-medium hover:underline"
            target="_blank"
          >
            Acesse o site da Vallysys →
          </a>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-blue-700 text-white py-16 px-6" id="contato">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
          <p className="mb-6">
            Estamos prontos para ajudar seu negócio a crescer com tecnologia.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/alencarconsultorias/"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/alencar-consultorias/"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer Moderno */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-2">Alencar Consultorias</h3>
            <p className="text-gray-400">Tecnologia e gestão para o futuro do seu negócio.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links úteis</h4>
            <ul className="space-y-1">
              <li><a href="#sobre" className="hover:underline text-gray-300">Sobre</a></li>
              <li><a href="#servicos" className="hover:underline text-gray-300">Serviços</a></li>
              <li><a href="#contato" className="hover:underline text-gray-300">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Redes Sociais</h4>
            <ul className="space-y-1">
              <li><a href="https://www.instagram.com/alencarconsultorias/" target="_blank" className="hover:underline text-gray-300">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/alencar-consultorias/" target="_blank" className="hover:underline text-gray-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} Alencar Consultorias. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
