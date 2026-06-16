const testimonials = [
  {
    name: "Ricardo Almeida",
    role: "Diretor de Operações",
    company: "LogiStar Transportes",
    text: "A Alencar conduziu toda a implantação do nosso sistema de gestão em tempo recorde. A equipe foi extremamente comprometida e o suporte pós-implantação nos deu a tranquilidade que precisávamos.",
  },
  {
    name: "Fernanda Costa",
    role: "Gerente de TI",
    company: "Distribuidora Meridian",
    text: "Trabalhamos com a Alencar no desenvolvimento de uma plataforma customizada. Eles entenderam exatamente o nosso negócio e entregaram algo que superou as expectativas em prazo e qualidade.",
  },
  {
    name: "Paulo Mendonça",
    role: "CEO",
    company: "Grupo Estrutura",
    text: "Somos clientes da Alencar há mais de 3 anos. O suporte é ágil, resolutivo e o relacionamento é de verdadeira parceria. Recomendo para qualquer empresa que leve tecnologia a sério.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-golden-primary uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
              <svg className="w-8 h-8 text-golden-primary/40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 leading-relaxed text-pretty flex-1">{t.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role} · {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
