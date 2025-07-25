import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import LocaleSwitcher from "@/components/locale-switcher"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css"
import Script from "next/script"

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Carregue as mensagens do idioma (supondo que estejam em /messages/{locale}.json)
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    // Se não achar o arquivo, mostra 404
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-ST7RSG0Q52`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ST7RSG0Q52');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="google-adsense-account" content="ca-pub-2627213694460628"/>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2627213694460628"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.className} pb-20 md:pb-0`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Seletor de idioma no topo */}
          <div className="fixed top-2 right-2 z-50">
            <LocaleSwitcher />
          </div>
          {children}
        </NextIntlClientProvider>

        <SpeedInsights />
        <Analytics />
        <Navigation />
      </body>
    </html>
  )
}
