import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Source_Serif_4, Silkscreen } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { AuthProvider } from "@/app/providers"
import { getRequestLocale } from "@/lib/request-locale"
import { getSiteBaseUrl } from "@/lib/site-url"
import type { Locale } from "@/lib/i18n"

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteBaseUrl()),
  title: "KOMMA / Initiative",
  description: "A pause, transition, integration, or inflection point punctuating the dynamic relationship between sensing and action",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-32.png",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "KOMMA / Initiative",
    description: "A pause, transition, integration, or inflection point punctuating the dynamic relationship between sensing and action",
    type: "website",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang: Locale = await getRequestLocale()

  return (
    <html lang={lang} className={`${sourceSerif.variable} ${silkscreen.variable}`.trim()}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <AuthProvider>
          {children}
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  )
}
