import Link from "next/link"
import { getRequestLocale } from "@/lib/request-locale"
import type { Locale } from "@/lib/i18n"

const footerCopy: Record<
  Locale,
  {
    taglineBefore: string
    between: string
    and: string
    sensingAlt: string
    actionAlt: string
    contact: string
    impressum: string
    privacy: string
  }
> = {
  en: {
    taglineBefore:
      "a pause, transition, integration, or inflection point punctuating the dynamic relationship",
    between: "between",
    and: "and",
    sensingAlt: "sensing",
    actionAlt: "action",
    contact: "Contact",
    impressum: "Impressum",
    privacy: "Privacy Policy",
  },
  de: {
    taglineBefore:
      "eine Pause, ein Übergang, eine Integration oder ein Wendepunkt, der die dynamische Beziehung",
    between: "zwischen",
    and: "und",
    sensingAlt: "Wahrnehmen",
    actionAlt: "Handeln",
    contact: "Kontakt",
    impressum: "Impressum",
    privacy: "Datenschutz",
  },
}

export async function SiteFooter() {
  const locale: Locale = await getRequestLocale()
  const t = footerCopy[locale]
  const prefix = `/${locale}`

  return (
    <footer className="border-t border-slate-800 bg-black px-6 py-12 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-16">
          <Link href={prefix} className="komma-title text-3xl text-white shrink-0">
            KOMMA
          </Link>

          <p className="max-w-md text-base leading-relaxed text-slate-300 md:text-right">
            {t.taglineBefore} {t.between}{" "}
            <img
              src="/01Sensing.svg"
              alt={t.sensingAlt}
              className="relative top-[0.15em] inline-block h-[1.1em] w-auto align-baseline"
              draggable={false}
            />{" "}
            {t.and}{" "}
            <img
              src="/02Action.svg"
              alt={t.actionAlt}
              className="relative top-[0.15em] inline-block h-[1.1em] w-auto align-baseline"
              draggable={false}
            />
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href={`${prefix}/contact`} className="underline underline-offset-4 hover:text-white">
              {t.contact}
            </Link>
            <Link href={`${prefix}/impressum`} className="underline underline-offset-4 hover:text-white">
              {t.impressum}
            </Link>
            <Link href={`${prefix}/datenschutz`} className="underline underline-offset-4 hover:text-white">
              {t.privacy}
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://x.com/komma_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/company/komma-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <span className="text-slate-500">© 2026 KOMMA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
