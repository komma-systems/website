import type { Metadata } from "next"
import { HomePageClient } from "./home-page-client"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return localeAlternatesMetadata("/", locale)
}

export default function HomePage() {
  return <HomePageClient />
}
