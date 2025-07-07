import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comparar Calorias - Compare & Calcule calorias de alimentos",
  icons: {
    icon: '/favicon.ico', 
  },
  description:
    "Registre itens, compare seu conteúdo calórico e calcule equivalências para fazer melhores escolhas diéticas.",
  keywords: "calorias, calculadora de calorias, comparar calorias, comparar alimentos, nutrição, dieta, saúde, comparador de calorias, emagrecer",
    generator: 'MariaF'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
      </head>
      <body className={`${inter.className} pb-20 md:pb-0`}>
        {children}
        <SpeedInsights />
        <Analytics />
        <Navigation />
      </body>
    </html>
  )
}
