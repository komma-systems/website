import type { Metadata } from "next"
import { InitiativePageClient } from "./initiative-page-client"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return localeAlternatesMetadata(`/initiatives/${slug}`, locale)
}

export default function InitiativePage() {
  return <InitiativePageClient />
}
