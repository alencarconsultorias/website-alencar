import { Card, CardContent } from "@/components/ui/card"

export function DevelopmentProcessSection() {
  const processSteps = [
    {
      step: "01",
      title: "Descoberta & Análise",
      description: "Entendemos suas necessidades, objetivos de negócio e requisitos técnicos através de workshops e entrevistas detalhadas.",
      duration: "1-2 semanas"
    },
    {
      step: "02", 
      title: "Planejamento & Arquitetura",
      description: "Definimos a arquitetura do sistema, escolhemos as tecnologias adequadas e criamos um roadmap detalhado do projeto.",
      duration: "1 semana"
    },
    {
      step: "03",
      title: "Design & Prototipação",
      description: "Criamos wireframes, mockups e protótipos interativos para validar a experiência do usuário antes do desenvolvimento.",
      duration: "2-3 semanas"
    },
    {
      step: "04",
      title: "Desenvolvimento Ágil",
      description: "Desenvolvemos em sprints com entregas incrementais, mantendo você sempre informado sobre o progresso do projeto.",
      duration: "4-12 semanas"
    },
    {
      step: "05",
      title: "Testes & QA",
      description: "Realizamos testes automatizados e manuais rigorosos para garantir qualidade, performance e segurança da aplicação.",
      duration: "1-2 semanas"
    },
    {
      step: "06",
      title: "Deploy & Monitoramento",
      description: "Fazemos o deploy em produção com infraestrutura otimizada e configuramos monitoramento contínuo da aplicação.",
      duration: "1 semana"
    }
  ]

  const methodologies = [
    {
      name: "Scrum",
      description: "Framework ágil para gestão eficiente de projetos"
    },
    {
      name: "Clean Code",
      description: "Código limpo, legível e fácil de manter"
    },
    {
      name: "TDD",
      description: "Desenvolvimento orientado por testes"
    },
    {
      name: "CI/CD",
      description: "Integração e entrega contínua automatizada"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso Processo de Desenvolvimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimos uma metodologia comprovada que garante entregas de qualidade, 
            dentro do prazo e orçamento estabelecidos.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-golden-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="text-sm text-golden-primary font-semibold">
                    Duração: {step.duration}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Metodologias & Boas Práticas
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aplicamos as melhores práticas da indústria para garantir código de qualidade e projetos bem-sucedidos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {methodologies.map((methodology, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{methodology.name}</h4>
              <p className="text-gray-600 text-sm">{methodology.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e vamos transformar sua ideia em realidade.
            </p>
            <button className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
