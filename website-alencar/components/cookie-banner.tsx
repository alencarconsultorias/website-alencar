"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      // Small delay to prevent hydration mismatch or immediate flash
      const timer = setTimeout(() => setShowBanner(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out animate-in slide-in-from-bottom-full">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-2 text-center md:text-left flex-1">
          <h3 className="text-lg font-semibold tracking-tight">
            Nós valorizamos sua privacidade
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdos. Ao clicar em "Aceitar Todos", você concorda com o uso de cookies. Você pode recusar cookies não essenciais clicando em "Apenas Necessários". Para saber mais, leia nossa{" "}
            <Link href="/politica-de-privacidade" className="font-medium underline underline-offset-4 hover:text-foreground">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 min-w-fit w-full md:w-auto">
          <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto">
            Apenas Necessários
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto">
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  )
}
