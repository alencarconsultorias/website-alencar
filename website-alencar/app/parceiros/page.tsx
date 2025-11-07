import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BreadcrumbSEO } from "@/components/breadcrumb-seo"

export const metadata = {
  title: "Parceiros Estratégicos",
  description: "Conheça os parceiros estratégicos da Alencar Consultorias. Ecossistema de tecnologia de ponta com Control Mob, Digital Contabilidade e outros parceiros especializados.",
  keywords: [
    "parceiros estratégicos",
    "ecossistema tecnológico",
    "Control Mob",
    "Digital Contabilidade",
    "parcerias empresariais",
    "soluções integradas",
    "rede de parceiros",
    "colaboração tecnológica"
  ],
  openGraph: {
    title: "Parceiros Estratégicos | Alencar Consultorias",
    description: "Construímos resultados ao lado de um ecossistema de tecnologia de ponta. Conheça nossos parceiros estratégicos e suas especialidades.",
    url: "https://alencarconsultorias.com.br/parceiros",
    images: [
      {
        url: "/og-parceiros.jpg",
        width: 1200,
        height: 630,
        alt: "Parceiros Estratégicos - Alencar Consultorias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parceiros Estratégicos | Alencar Consultorias",
    description: "Ecossistema de tecnologia de ponta com parceiros especializados em soluções empresariais.",
    images: ["/og-parceiros.jpg"],
  },
  alternates: {
    canonical: "/parceiros",
  },
}

type Partner = {
  name: string
  description: string
  logoSrc: string
  site?: string
  highlight?: boolean
  about?: string
  products?: string[]
}

const partners: Partner[] = [
  {
    name: "Control Mob",
    description:
      "Plataforma completa para gestão e automação de processos, parceira estratégica em modernização e produtividade.",
    logoSrc: "/partners/control-mob-logo.png",
    site: "https://controlmob.com.br",
    highlight: true,
    about:
      "A Control Mob é uma empresa de tecnologia focada em soluções de gestão, automação e produtividade para negócios que buscam escalar com eficiência e qualidade.",
    products: [
      "ERP e gestão integrada",
      "Aplicativos móveis de operação",
      "Automação de processos (BPM)",
      "Painéis e relatórios de performance",
    ],
  },
  {
    name: "Digital Contabilidade",
    description:
      "Especialistas em impostos e contabilidade, oferecendo auxílio fiscal para indivíduos e pequenas empresas com assessoria de ponta.",
    logoSrc: "/partners/digital-cont-logo.jpeg",
    site: "https://www.digitalcontsp.com.br",
    highlight: false,
    about:
      "A Digital Contabilidade é especializada em fornecer assessoria fiscal de qualidade para clientes pessoais e corporativos, com profissionais especialistas em impostos e planejamento tributário.",
    products: [
      "Assessoria fiscal especializada",
      "Planejamento de impostos",
      "Contabilistas profissionais",
      "Auxílio para declaração de IR",
    ],
  },
]

export default function ParceirosPage() {
  const breadcrumbItems = [
    { name: "Parceiros" }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <BreadcrumbSEO items={breadcrumbItems} />

      <section className="pt-20 pb-12 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Parceiros</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Construímos resultados ao lado de um ecossistema de tecnologia de ponta. Conheça alguns dos parceiros com
              quem a Alencar Consultorias trabalha.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <Card
                key={partner.name}
                className={partner.highlight ? "border-golden-primary/40 shadow-lg" : undefined}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 rounded bg-muted overflow-hidden">
                      <Image src={partner.logoSrc} alt={partner.name} fill className="object-contain p-2" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      {partner.highlight && (
                        <span className="inline-block mt-1 text-xs font-medium text-golden-primary">Parceiro destaque</span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                  {partner.about && (
                    <p className="mt-3 text-sm text-foreground/90">{partner.about}</p>
                  )}
                  {partner.products && partner.products.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {partner.products.map((product) => (
                        <span
                          key={product}
                          className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-foreground/90 bg-background"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  )}
                  {partner.site && (
                    <Link
                      href={partner.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-golden-primary hover:underline"
                    >
                      Visitar site
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


