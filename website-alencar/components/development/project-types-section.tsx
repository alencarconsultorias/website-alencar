import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProjectTypesSection() {
  const projectTypes = [
    {
      title: "Aplicações Web",
      description: "Sistemas web modernos, responsivos e escaláveis para sua empresa.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)", 
        "Sistemas de gestão (ERP/CRM)",
        "E-commerce completo",
        "Dashboards e painéis analíticos"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      icon: "🌐",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com performance otimizada.",
      features: [
        "Apps nativos iOS/Android",
        "Apps híbridos multiplataforma",
        "Integração com APIs",
        "Push notifications",
        "Funcionalidades offline"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      icon: "📱",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "APIs & Backend",
      description: "Arquiteturas robustas e APIs RESTful/GraphQL para suas aplicações.",
      features: [
        "APIs RESTful e GraphQL",
        "Microserviços escaláveis",
        "Autenticação e autorização",
        "Integração com terceiros",
        "Documentação completa"
      ],
      technologies: ["Node.js", "Python", "Java", "C#"],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce",
      description: "Plataformas de vendas online completas com gestão integrada.",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Gateway de pagamento",
        "Gestão de estoque",
        "Painel administrativo"
      ],
      technologies: ["Next.js", "Stripe", "PayPal", "WooCommerce"],
      icon: "🛒",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Sistemas Corporativos",
      description: "Soluções empresariais customizadas para otimizar processos internos.",
      features: [
        "ERP personalizado",
        "CRM integrado",
        "Gestão de recursos humanos",
        "Controle financeiro",
        "Relatórios e analytics"
      ],
      technologies: ["React", "PostgreSQL", "Docker", "AWS"],
      icon: "🏢",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Integrações",
      description: "Conectamos seus sistemas existentes com novas tecnologias.",
      features: [
        "Integração de sistemas legados",
        "APIs de terceiros",
        "Migração de dados",
        "Sincronização em tempo real",
        "Webhooks e automações"
      ],
      technologies: ["Node.js", "Python", "REST", "GraphQL"],
      icon: "🔗",
      color: "from-teal-500 to-blue-500"
    }
  ]

  const industries = [
    { name: "Saúde", icon: "🏥" },
    { name: "Educação", icon: "🎓" },
    { name: "Varejo", icon: "🛍️" },
    { name: "Financeiro", icon: "💰" },
    { name: "Logística", icon: "🚚" },
    { name: "Imobiliário", icon: "🏠" },
    { name: "Agricultura", icon: "🌾" },
    { name: "Indústria", icon: "🏭" }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tipos de Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos soluções personalizadas para diferentes necessidades e segmentos de mercado.
          </p>
        </div>

        {/* Project Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {projectTypes.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{project.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Principais recursos:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="text-golden-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button asChild className="w-full bg-golden-primary hover:bg-golden-secondary text-white">
                  <Link href="/#contato">Solicitar Orçamento</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Segmentos Atendidos
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Temos experiência desenvolvendo soluções para diversos setores da economia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-golden-primary/10 transition-colors">
              <div className="text-3xl mb-2">{industry.icon}</div>
              <div className="text-sm font-medium text-gray-700">{industry.name}</div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="bg-gradient-to-r from-golden-primary to-golden-secondary rounded-2xl p-8 text-center text-black max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Veja nossos projetos em ação
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-golden-primary hover:bg-gray-100 px-8 py-3">
              <Link href="/#contato">Ver Portfólio</Link>
            </Button>
            <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
              <Link href="/#contato">Agendar Reunião</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
