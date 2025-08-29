import React from 'react';
import Image from 'next/image';

export default function SobreNos() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Sobre Nós"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Sobre Nós
          </h1>
        </div>
      </section>

      {/* História Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fundada com o compromisso de excelência e inovação, nossa empresa tem se dedicado
              a fornecer soluções de alta qualidade para nossos clientes. Ao longo dos anos,
              construímos uma reputação sólida baseada em confiança, profissionalismo e resultados.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nossa jornada começou com uma visão clara: transformar o mercado através de
              serviços excepcionais e atendimento personalizado. Hoje, continuamos a crescer
              e evoluir, sempre mantendo nossos valores fundamentais.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/history.jpg"
              alt="Nossa História"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excelência</h3>
              <p className="text-gray-600">
                Buscamos a excelência em tudo o que fazemos, desde o atendimento ao cliente
                até a entrega de nossos serviços.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inovação</h3>
              <p className="text-gray-600">
                Estamos sempre à frente, buscando novas soluções e tecnologias para melhor
                atender nossos clientes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integridade</h3>
              <p className="text-gray-600">
                Agimos com transparência e ética em todas as nossas relações e negociações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Visão Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
            <p className="text-gray-600">
              Proporcionar soluções inovadoras e de alta qualidade que superem as expectativas
              de nossos clientes, contribuindo para o sucesso de seus negócios.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h2>
            <p className="text-gray-600">
              Ser referência no mercado, reconhecida pela excelência em nossos serviços e
              pelo compromisso com a satisfação dos clientes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 