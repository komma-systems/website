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
    title: "Komma / Impressum",
    ...localeAlternatesMetadata("/impressum", locale),
  }
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-14 font-sans text-white sm:px-10">
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Impressum</h1>

        <div className="mt-12 space-y-10 text-[1.02rem] leading-[1.75] text-slate-100">
          <div>
            <p className="font-medium text-white">Komma Genossenschaft</p>
            <p className="mt-3">In der Specki 3</p>
            <p>9494 Schaan</p>
            <p>Liechtenstein</p>
            <p className="mt-3">Handelsregister: FL-0002.754.170-8</p>
            <p>Eingetragen am: 25.03.2026</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Contact</h2>
            <p className="mt-3">Email: contact@komma.systems</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Responsible for content (§ 18 Abs. 2 MStV)
            </h2>
            <p className="mt-3">Charlie Fisher</p>
            <p className="mt-1">In der Specki 3, 9494 Schaan, Liechtenstein</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Disclaimer</h2>
            <p className="mt-3">We are not liable for the content of external links.</p>
            <p className="mt-3">
              The operators of linked pages are solely responsible for their content.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
