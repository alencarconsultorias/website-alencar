import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Building2, Flag, Handshake, Rocket, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Sobre Nós | Alencar Consultorias",
  description:
    "Conheça a história, missão, visão, valores e atuação da Alencar Consultorias. Tecnologia e consultoria com foco em resultado.",
}

export default function AboutPage() {
  const valores = [
    { icon: Target, title: "Comprometimento", desc: "Trabalhamos com foco em resultado e responsabilidade com cada cliente." },
    { icon: Rocket, title: "Inovação", desc: "Aplicamos tecnologia e metodologias atuais para gerar vantagem competitiva." },
    { icon: Building2, title: "Transparência", desc: "Relações claras, expectativas alinhadas e comunicação constante." },
    { icon: Award, title: "Qualidade", desc: "Excelência em entrega, processos e atendimento." },
    { icon: Users, title: "Foco no Cliente", desc: "Parceria verdadeira para entender e resolver necessidades reais." },
  ]

  const areas = [
    { icon: Handshake, title: "Comercial", desc: "Apoio consultivo em aquisição de software e estratégias comerciais." },
    { icon: Flag, title: "Implantação", desc: "Metodologia comprovada para implementar sistemas com segurança e rapidez." },
    { icon: Users, title: "Suporte", desc: "Atendimento contínuo e orientado a performance operacional." },
    { icon: Rocket, title: "Marketing", desc: "Estratégias digitais para alavancar posicionamento e geração de demanda." },
    { icon: Building2, title: "Desenvolvimento (em breve)", desc: "Soluções sob medida para acelerar sua transformação digital." },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-golden-primary/20 border border-golden-primary/30 px-4 py-2 rounded-full text-sm font-medium mb-6 text-golden-primary">
              <Building2 className="w-4 h-4" />
              Tecnologia e Consultoria
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transformando negócios através da
              <span className="text-golden-primary"> tecnologia</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Especialistas em soluções que unem consultoria estratégica, processos otimizados e
              tecnologia de ponta para impulsionar resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-golden-primary/10 px-3 py-1 rounded-full text-sm font-medium text-golden-primary mb-2">
                Nossa Jornada
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossa História</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                A Alencar Consultorias nasceu com o propósito de aproximar empresas da tecnologia que gera resultado.
                Ao longo dos anos, consolidamos parcerias estratégicas e uma metodologia própria para conduzir
                projetos de ponta a ponta, do diagnóstico à operação.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Um dos marcos dessa jornada é nossa parceria com a <span className="font-semibold text-golden-primary">Vallysys Sistemas</span>,
                potencializando entregas em implantação, suporte e evolução contínua das plataformas adotadas pelos nossos clientes.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-golden-primary/5 to-golden-secondary/5 rounded-xl p-4 border border-golden-primary/10">
                  <div className="text-3xl font-bold text-golden-primary mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Anos de experiência</div>
                </div>
                <div className="bg-gradient-to-br from-golden-primary/5 to-golden-secondary/5 rounded-xl p-4 border border-golden-primary/10">
                  <div className="text-3xl font-bold text-golden-primary mb-1">200+</div>
                  <div className="text-gray-600 text-sm">Projetos entregues</div>
                </div>
                <div className="bg-gradient-to-br from-golden-primary/5 to-golden-secondary/5 rounded-xl p-4 border border-golden-primary/10">
                  <div className="text-3xl font-bold text-golden-primary mb-1">98%</div>
                  <div className="text-gray-600 text-sm">Satisfação</div>
                </div>
                <div className="bg-gradient-to-br from-golden-primary/5 to-golden-secondary/5 rounded-xl p-4 border border-golden-primary/10">
                  <div className="text-3xl font-bold text-golden-primary mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Suporte</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/home/services/business-handshake-partnership-professional-meetin.jpg"
                  alt="Parceria e profissionalismo"
                  width={800}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-golden-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">+500</div>
                <div className="text-sm opacity-90">Clientes atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nossos Pilares</h2>
            <p className="text-gray-600">O que nos guia e define nosso propósito</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="w-20 h-20 text-blue-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Entregar soluções tecnológicas personalizadas que otimizem processos e a gestão do negócio.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-golden-primary to-golden-secondary"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Rocket className="w-20 h-20 text-golden-primary" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-golden-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-golden-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Visão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ser referência nacional em consultoria tecnológica e desenvolvimento de soluções inovadoras.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Valores */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-20 h-20 text-green-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Valores</h3>
                  <div className="space-y-3">
                    {valores.map((v, i) => (
                      <div className="flex items-start gap-3" key={i}>
                        <div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <v.icon className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{v.title}</div>
                          <div className="text-gray-600 text-xs leading-relaxed">{v.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Atuação */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nossa Atuação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Soluções completas para cada etapa da sua jornada tecnológica</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {areas.map((a, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-golden-primary/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-golden-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-golden-primary/20 transition-colors">
                      <a.icon className="w-7 h-7 text-golden-primary" />
                    </div>
                    <div className="font-bold text-gray-900 mb-2">{a.title}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{a.desc}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiro Estratégico */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Parceiro Estratégico</h2>
              <p className="text-gray-700 mb-6">
                A parceria com a <span className="font-semibold">Vallysys Sistemas</span> fortalece nossa capacidade de entrega,
                unindo experiência de consultoria com plataformas robustas para gestão, atendimento e produtividade.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-golden-primary/20 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Sinergia</div>
                  <p className="text-gray-700 text-sm">Combinação de metodologia + plataforma para aceleração de resultados.</p>
                </div>
                <div className="bg-white rounded-xl border border-golden-primary/20 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Confiabilidade</div>
                  <p className="text-gray-700 text-sm">Arquitetura estável com suporte contínuo e evolução do produto.</p>
                </div>
                <div className="bg-white rounded-xl border border-golden-primary/20 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Performance</div>
                  <p className="text-gray-700 text-sm">Implantações com alto índice de satisfação e ROI acelerado.</p>
                </div>
                <div className="bg-white rounded-xl border border-golden-primary/20 p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Escalabilidade</div>
                  <p className="text-gray-700 text-sm">Soluções prontas para acompanhar o crescimento do negócio.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md px-6 py-5 w-full flex items-center justify-center">
                <Image
                  src="https://static.wixstatic.com/media/a7e8e4_958a8418c0e8428a87310845ee2811b4~mv2.png/v1/fill/w_323,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nova%20Vallysys-curvas2.png"
                  alt="Vallysys Sistemas"
                  width={323}
                  height={74}
                  className="h-[40px] w-auto md:h-[56px] object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <Image src="/home/services/professional-business-team-working-with-technology.jpg" alt="Equipe e tecnologia" width={640} height={480} className="w-full h-36 md:h-44 object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <Image src="/home/services/modern-technology-innovation-digital-transformatio.jpg" alt="Transformação digital" width={640} height={480} className="w-full h-36 md:h-44 object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <Image src="/home/services/business-consulting-technology-workspace.jpg" alt="Consultoria e workspace" width={640} height={480} className="w-full h-36 md:h-44 object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <Image src="/home/services/computer-science-innovation-technology.jpg" alt="Inovação e ciência da computação" width={640} height={480} className="w-full h-36 md:h-44 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-golden-primary/20 border border-golden-primary/30 px-4 py-2 rounded-full text-sm font-medium mb-6 text-golden-primary">
              <Users className="w-4 h-4" />
              Vamos Conversar
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Nossa equipe está pronta para entender seus desafios e desenhar a solução ideal para sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-golden-primary hover:bg-golden-secondary text-white px-8 py-6 text-lg">
                <Link href="/#contato">Fale Conosco</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white hover:text-golden-primary px-8 py-6 text-lg">
                <Link href="/servicos/implantacao">Conheça Nossos Serviços</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-golden-primary mb-2">15+</div>
                <div className="text-gray-400 text-sm">Anos no mercado</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-primary mb-2">98%</div>
                <div className="text-gray-400 text-sm">Clientes satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-primary mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Suporte disponível</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
