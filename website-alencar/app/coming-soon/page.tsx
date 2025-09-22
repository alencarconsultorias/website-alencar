import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="mx-auto mb-8 h-16 w-16 relative">
          <Image src="/images/alencar-icon.png" alt="Alencar Consultorias" fill sizes="64px" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Em breve</h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Estamos trabalhando para lançar nossa nova experiência. Volte em breve para novidades.
        </p>
        <div className="flex gap-3 justify-center">
          <Button asChild>
            <Link href="mailto:contato@alencarconsultorias.com">Fale conosco</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://www.linkedin.com/company/alencar-consultorias/" target="_blank" rel="noreferrer noopener">LinkedIn</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}


