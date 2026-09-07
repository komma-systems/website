import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Source_Serif_4, Silkscreen, IBM_Plex_Mono, Space_Grotesk } from "next/font/google"
import { SiteFooter } from "@/components/site-footer"
import { AuthProvider } from "@/app/providers"
import { getRequestLocale } from "@/lib/request-locale"
import { getSiteBaseUrl } from "@/lib/site-url"
import type { Locale } from "@/lib/i18n"

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-serif",
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-space-grotesk",
  preload: false,
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  preload: false,
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteBaseUrl()),
  title: "KOMMA",
  description: "KOMMA is a cooperative that designs and builds the tools to hold land and housing in common. A research and relational technology studio using real-world demonstration to shift how we value, own, govern and care for what we hold in common.",
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
    title: "KOMMA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KOMMA" }],
    description: "KOMMA is a cooperative that designs and builds the tools to hold land and housing in common. A research and relational technology studio using real-world demonstration to shift how we value, own, govern and care for what we hold in common.",
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
    <html lang={lang} className={`${serif.variable} ${silkscreen.variable} ${plexMono.variable} ${spaceGrotesk.variable}`.trim()}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "KOMMA",
              legalName: "Komma Genossenschaft",
              url: "https://komma.systems",
              logo: "https://komma.systems/favicon.svg",
              description:
                "KOMMA is a cooperative that designs and builds the tools to hold land and housing in common.",
              founder: [
                { "@type": "Person", name: "Charles Fisher" },
                { "@type": "Person", name: "Clara Gromaches" },
              ],
              subOrganization: {
                "@type": "Organization",
                name: "Komma Systems UG (haftungsbeschränkt)",
              },
              sameAs: ["https://github.com/komma-systems"],
              knowsAbout: [
                "community land trusts",
                "cooperative housing",
                "land registries",
                "civic deliberation",
                "commons governance",
              ],
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <AuthProvider>
          {children}
          <SiteFooter />
        </AuthProvider>
        {/* Cloudflare Web Analytics: cookieless, manual install because the
            domain points straight at Vercel and edge injection cannot run */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "11702da51e284bf0bfd5a49a72b0de03"}'
        />
      </body>
    </html>
  )
}
