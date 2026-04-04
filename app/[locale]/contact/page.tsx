import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

const copy: Record<Locale, { back: string; title: string; intro: string; social: string }> = {
  en: {
    back: "Back",
    title: "Contact",
    intro:
      "We're always interested in new collaborations. Get in touch to discuss how we can make something happen.",
    social: "Social",
  },
  de: {
    back: "Zurück",
    title: "Kontakt",
    intro:
      "Wir sind immer an neuen Kooperationen interessiert. Schreiben Sie uns, wenn Sie etwas verwirklichen möchten.",
    social: "Social",
  },
}

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "Komma / Contact",
    ...localeAlternatesMetadata("/contact", locale),
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = copy[locale]
  const prefix = `/${locale}`

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation hideContact />

      <main className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12 pt-16 sm:pt-20">
        <div className="w-full max-w-4xl">
          <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
            <Link href={prefix} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="text-sm uppercase tracking-wider font-silkscreen">{t.back}</span>
            </Link>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 komma-title">{t.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-base sm:text-lg">{t.intro}</p>

              <div className="space-y-4 mt-6 sm:mt-8">
                <div>
                  <h2 className="text-xs sm:text-sm uppercase tracking-wider text-white/60 mb-1">{t.social}</h2>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="hover:opacity-80 transition-opacity text-base sm:text-lg">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}
