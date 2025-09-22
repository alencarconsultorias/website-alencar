import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Alencar Consultorias - Transformação Digital e Tecnologia",
  description:
    "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
  generator: "v0.app",
  icons: {
    icon: "/alencar-icon.png",
    shortcut: "/alencar-icon.png",
    apple: "/alencar-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
