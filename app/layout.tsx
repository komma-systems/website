import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Source_Serif_4, Silkscreen } from "next/font/google"

// Load Source Serif Pro (Source Serif 4 is the updated version)
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-source-serif",
  preload: true,
  display: "swap",
})

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  preload: true,
  display: "swap",
})

export const metadata: Metadata = {
  title: "KOMMA",
  description: "A pause, transition, integration, or inflection point punctuating the dynamic relationship between sensing and action",
  generator: 'v0.dev',
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  openGraph: {
    title: "KOMMA",
    description: "A pause, transition, integration, or inflection point punctuating the dynamic relationship between sensing and action",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${silkscreen.variable}`.trim()}>
      <body>{children}</body>
    </html>
  )
}
