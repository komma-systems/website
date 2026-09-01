import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { eventsMessages, splitEvents } from "@/lib/messages/events"
import { FieldEvents } from "@/components/field-events"

export const metadata: Metadata = {
  title: "KOMMA / Events",
  robots: { index: false, follow: false },
}

// Re-render at most daily so events roll from Upcoming to Past without a deploy
export const revalidate = 86400

const labelClasses = "mb-4 font-silkscreen text-base sm:text-lg uppercase tracking-[0.18em] text-cream"

type PageProps = { params: Promise<{ locale: string }> }

export default async function EventsPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = eventsMessages[locale]
  const today = new Date().toISOString().slice(0, 10)
  const { upcoming, past } = splitEvents(locale, today)

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

          <div className="max-w-[820px]">
            <p className={labelClasses}>{t.upcomingLabel}</p>
            {upcoming.length > 0 ? (
              <FieldEvents items={upcoming} locale={locale} />
            ) : (
              <p className="text-[1.05rem] text-white/60">{t.emptyUpcoming}</p>
            )}

            {past.length > 0 && (
              <div className="mt-20">
                <p className={labelClasses}>{t.pastLabel}</p>
                <div className="opacity-60">
                  <FieldEvents items={past} locale={locale} />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
