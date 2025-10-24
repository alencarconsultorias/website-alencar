import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <Image
        src="/images/alencar-logo.png"
        alt="Alencar Consultorias"
        width={160}
        height={40}
        priority
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">404 - Página não encontrada</h1>
        <p className="text-muted-foreground max-w-xl">
          A página que você procura pode ter sido movida, removida ou não existe.
        </p>
      </div>
      <Link href="/">
        <Button size="lg" className="mt-2">Voltar para a página inicial</Button>
      </Link>
    </main>
  );
}
