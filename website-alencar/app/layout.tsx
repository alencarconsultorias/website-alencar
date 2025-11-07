import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import { Suspense } from "react"
<<<<<<< HEAD
import { ScrollToTop } from "@/components/scroll-to-top"
=======
import { StructuredData } from "@/components/structured-data"
>>>>>>> e82c8c2 (feat(WA-22):SEO-Configs)
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Alencar Consultorias - Transformação Digital e Tecnologia",
    template: "%s | Alencar Consultorias"
  },
  description: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital. Impulsione seu negócio com nossas soluções inovadoras.",
  keywords: [
    "consultoria tecnológica",
    "transformação digital", 
    "desenvolvimento de software",
    "soluções empresariais",
    "tecnologia",
    "inovação",
    "consultoria TI",
    "sistemas empresariais",
    "automação",
    "digitalização"
  ],
  authors: [{ name: "Alencar Consultorias" }],
  creator: "Alencar Consultorias",
  publisher: "Alencar Consultorias",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alencarconsultorias.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://alencarconsultorias.com.br",
    title: "Alencar Consultorias - Transformação Digital e Tecnologia",
    description: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
    siteName: "Alencar Consultorias",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alencar Consultorias - Transformação Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alencar Consultorias - Transformação Digital e Tecnologia",
    description: "Líder em soluções tecnológicas para empresas. Consultoria especializada, desenvolvimento de software e transformação digital.",
    images: ["/og-image.jpg"],
    creator: "@alencarconsultorias",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/home/alencar-icon.png",
    shortcut: "/home/alencar-icon.png",
    apple: "/home/alencar-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ScrollToTop />
        <Analytics />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
