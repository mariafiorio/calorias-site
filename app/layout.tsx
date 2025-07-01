import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Food Calorie Calculator - Compare & Calculate Food Calories",
  description:
    "Register food items, compare their caloric content, and calculate equivalences to make informed dietary choices.",
  keywords: "food calories, calorie calculator, food comparison, nutrition, diet",
    generator: 'v0.dev'
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
        <Navigation />
      </body>
    </html>
  )
}
