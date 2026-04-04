import Link from "next/link"
import { getRequestLocale } from "@/lib/request-locale"
import type { Locale } from "@/lib/i18n"

const footerCopy: Record<Locale, { impressum: string; privacy: string }> = {
  en: { impressum: "Impressum", privacy: "Privacy Policy" },
  de: { impressum: "Impressum", privacy: "Datenschutz" },
}

export async function SiteFooter() {
  const locale: Locale = await getRequestLocale()
  const labels = footerCopy[locale]
  const prefix = `/${locale}`

  return (
    <footer className="border-t border-slate-800 bg-black px-6 py-8 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href={prefix} className="komma-title text-2xl text-white">
          KOMMA
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <Link href={`${prefix}/impressum`} className="underline underline-offset-4 hover:text-white">
            {labels.impressum}
          </Link>
          <Link href={`${prefix}/datenschutz`} className="underline underline-offset-4 hover:text-white">
            {labels.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
