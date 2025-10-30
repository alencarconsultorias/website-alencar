import Image from "next/image"

export function GaleriaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900">Galeria de Instalações</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Exemplo de imagens – troque pelo caminho correto e adicione/remova conforme necessário */}
          <div className="flex flex-col items-center">
            <Image src="/images/instalacao-exemplo-1.jpg" alt="Câmeras instaladas em residência" width={400} height={300} className="rounded-xl shadow-md object-cover" />
            <span className="text-sm mt-2 text-gray-700 text-center">Câmeras instaladas em residência</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/instalacao-exemplo-2.jpg" alt="Painel de automação em empresa" width={400} height={300} className="rounded-xl shadow-md object-cover" />
            <span className="text-sm mt-2 text-gray-700 text-center">Painel de automação em empresa</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/instalacao-exemplo-3.jpg" alt="Instalação de sensores e alarmes" width={400} height={300} className="rounded-xl shadow-md object-cover" />
            <span className="text-sm mt-2 text-gray-700 text-center">Instalação de sensores e alarmes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
