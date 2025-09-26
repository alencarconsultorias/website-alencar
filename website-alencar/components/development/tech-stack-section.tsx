import { Card, CardContent } from "@/components/ui/card"

export function TechStackSection() {
  const techCategories = [
    {
      title: "Frontend",
      description: "Interfaces modernas e responsivas",
      technologies: [
        { name: "React", description: "Biblioteca JavaScript para UIs", icon: "⚛️" },
        { name: "Next.js", description: "Framework React para produção", icon: "▲" },
        { name: "TypeScript", description: "JavaScript com tipagem estática", icon: "🔷" },
        { name: "Tailwind CSS", description: "Framework CSS utilitário", icon: "🎨" },
        { name: "Vue.js", description: "Framework JavaScript progressivo", icon: "💚" },
      ]
    },
    {
      title: "Backend",
      description: "APIs robustas e escaláveis",
      technologies: [
        { name: "Node.js", description: "Runtime JavaScript no servidor", icon: "🟢" },
        { name: "Python", description: "Linguagem versátil e poderosa", icon: "🐍" },
        { name: "Java", description: "Linguagem enterprise robusta", icon: "☕" },
        { name: "PHP", description: "Linguagem web consolidada", icon: "🐘" },
        { name: "C#", description: "Linguagem Microsoft .NET", icon: "🔵" },
      ]
    },
    {
      title: "Banco de Dados",
      description: "Armazenamento seguro e eficiente",
      technologies: [
        { name: "PostgreSQL", description: "Banco relacional avançado", icon: "🐘" },
        { name: "MySQL", description: "Banco relacional popular", icon: "🐬" },
        { name: "MongoDB", description: "Banco NoSQL flexível", icon: "🍃" },
        { name: "Firebase", description: "Plataforma Google completa", icon: "🔥" },
        { name: "Redis", description: "Cache em memória rápido", icon: "🔴" },
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Infraestrutura moderna e automatizada",
      technologies: [
        { name: "AWS", description: "Serviços cloud da Amazon", icon: "☁️" },
        { name: "Docker", description: "Containerização de aplicações", icon: "🐳" },
        { name: "Kubernetes", description: "Orquestração de containers", icon: "⚙️" },
        { name: "Git", description: "Controle de versão distribuído", icon: "📝" },
        { name: "GitHub Actions", description: "CI/CD automatizado", icon: "🚀" },
      ]
    },
    {
      title: "Mobile",
      description: "Apps nativos e híbridos",
      technologies: [
        { name: "React Native", description: "Apps mobile multiplataforma", icon: "📱" },
        { name: "Flutter", description: "Framework Google para mobile", icon: "💙" },
        { name: "Swift", description: "Linguagem nativa iOS", icon: "🍎" },
        { name: "Kotlin", description: "Linguagem moderna para Android", icon: "🤖" },
        { name: "Ionic", description: "Framework híbrido web", icon: "⚡" },
      ]
    },
    {
      title: "Ferramentas",
      description: "Produtividade e qualidade",
      technologies: [
        { name: "VS Code", description: "Editor de código moderno", icon: "💻" },
        { name: "Figma", description: "Design e prototipação", icon: "🎨" },
        { name: "Postman", description: "Teste de APIs", icon: "📮" },
        { name: "Jest", description: "Framework de testes", icon: "🧪" },
        { name: "ESLint", description: "Análise de código", icon: "🔍" },
      ]
    }
  ]

  return (
    <section id="servicos-desenvolvimento" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossa Stack Tecnológica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utilizamos as tecnologias mais modernas e confiáveis do mercado para garantir 
            que seus projetos sejam robustos, escaláveis e estejam sempre atualizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-2xl">{tech.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                        <p className="text-sm text-gray-600">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">E muito mais...</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "GraphQL", "Prisma", "Supabase", "Vercel", "Netlify", "Heroku", 
              "Digital Ocean", "Azure", "Google Cloud", "Stripe", "PayPal",
              "Socket.io", "WebRTC", "Electron", "PWA", "WebAssembly"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-golden-primary/10 text-golden-primary rounded-full text-sm font-medium hover:bg-golden-primary hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
