import type { Metadata } from "next"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / Strike Pools",
    description: "Strike Pools — A KOMMA initiative",
    ...localeAlternatesMetadata("/strikepools", locale),
  }
}

export default function StrikepoolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
