import Link from "next/link"
import { getRequestLocale } from "@/lib/request-locale"
import type { Locale } from "@/lib/i18n"
import { homeMessages } from "@/lib/messages/home"

const footerCopy: Record<Locale, { contact: string; impressum: string; privacy: string }> = {
  en: { contact: "Contact", impressum: "Impressum", privacy: "Privacy Policy" },
  de: { contact: "Kontakt", impressum: "Impressum", privacy: "Datenschutz" },
}

export async function SiteFooter() {
  const locale: Locale = await getRequestLocale()
  const labels = footerCopy[locale]
  const hero = homeMessages[locale].hero
  const { sensingAlt, actionAlt } = homeMessages[locale]
  const prefix = `/${locale}`

  return (
    <footer className="bg-[#1c1c1c] px-6 py-14 text-white sm:px-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-10">
        <div>
          <Link href={prefix} className="komma-title inline-block text-2xl text-white md:text-3xl">
            KOMMA
          </Link>

          <div className="mt-8 text-lg leading-relaxed md:text-xl lg:text-2xl">
            {hero.line1}
            <br />
            {hero.line2}
            <br />
            {hero.line3}
            <br />
            {hero.line4}
            <br />
            {hero.between ? `${hero.between} ` : null}
            <img
              src="/01Sensing.svg"
              alt={sensingAlt}
              className="relative top-[0.15em] inline-block h-[1.2em] w-auto align-baseline"
              draggable={false}
            />{" "}
            {hero.and}{" "}
            <img
              src="/02Action.svg"
              alt={actionAlt}
              className="relative top-[0.15em] inline-block h-[1.2em] w-auto align-baseline"
              draggable={false}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href={`${prefix}/impressum`} className="underline underline-offset-4 hover:text-white">
              {labels.impressum}
            </Link>
            <Link href={`${prefix}/datenschutz`} className="underline underline-offset-4 hover:text-white">
              {labels.privacy}
            </Link>
            <span className="text-white/40">© KOMMA 2026</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href={`${prefix}/contact`} className="underline underline-offset-4 hover:text-white">
              {labels.contact}
            </Link>
            <a
              href="https://www.linkedin.com/company/komma-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/komma_systems"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
