
export default function Servicos() {
  const servicos = [
    {
      titulo: "Consultoria Comercial",
      descricao:
        "Ajudamos sua empresa a otimizar vendas, definir estratégias comerciais e escalar resultados com apoio tecnológico.",
    },
    {
      titulo: "Implantação de Sistemas",
      descricao:
        "Executamos implantações completas de ERPs, CRMs e sistemas personalizados, com foco em performance e aderência aos processos.",
    },
    {
      titulo: "Suporte Técnico",
      descricao:
        "Oferecemos suporte remoto e presencial para sistemas, infraestrutura e tecnologia em geral, com SLAs definidos.",
    },
    {
      titulo: "Marketing Digital",
      descricao:
        "Gerenciamos redes sociais, tráfego pago, automações e funis de venda integrados aos sistemas utilizados.",
    },
    {
      titulo: "Desenvolvimento de Software",
      descricao:
        "Projetamos e desenvolvemos sistemas sob medida com foco em usabilidade, performance e escalabilidade.",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3">{servico.titulo}</h2>
            <p className="text-gray-600">{servico.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}