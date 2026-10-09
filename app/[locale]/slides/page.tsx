import type { Metadata } from "next"
import Link from "next/link"
import { headers } from "next/headers"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"
import { slidesMessages } from "@/lib/messages/slides"
import { presentationHref, presentations } from "@/lib/slides"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = slidesMessages[locale]
  return {
    title: `KOMMA / ${t.title}`,
    description: t.intro,
    ...localeAlternatesMetadata("/slides", locale),
  }
}

type PageProps = { params: Promise<{ locale: string }> }

export default async function SlidesPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = slidesMessages[locale]
  const headerList = await headers()
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host")

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-20 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-16">
            <Link
              href={`/${locale}`}
              className="mb-8 inline-block font-silkscreen text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-cream"
            >
              {t.back}
            </Link>
            <h1 className="tf-0 font-silkscreen text-5xl tracking-tight sm:text-6xl">{t.title}</h1>
            <p className="mt-5 max-w-[680px] text-lg text-slate-200">{t.intro}</p>
          </header>

          {presentations.length > 0 ? (
            <ul className="flex max-w-[820px] flex-col gap-4">
              {presentations.map((presentation) => (
                <li key={presentation.id}>
                  <article className="rounded-2xl border border-white/15 px-6 py-6">
                    <h2 className="text-3xl font-normal tracking-tight">
                      <Link href={presentationHref(presentation.id, host)} className="hover:text-cream">
                        {presentation.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-200">{presentation.summary}</p>
                    <Link
                      href={presentationHref(presentation.id, host)}
                      className="mt-5 inline-block font-grotesk text-sm text-white/80 underline decoration-white/30 underline-offset-4 hover:text-cream hover:decoration-cream"
                    >
                      {t.open}
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[1.05rem] text-white/60">{t.empty}</p>
          )}
        </div>
      </main>
    </>
  )
}
