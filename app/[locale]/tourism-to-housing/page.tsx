import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"
import { tourismMessages } from "@/lib/messages/tourism"

const tourismDescription =
  "The Tourism-to-Housing Impact Fund turns a share of tourism's value into permanently affordable housing held in common. A finance mechanism and demonstrator by KOMMA, in exploration for high-pressure destinations like Catalonia and Venice."

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / Tourism-to-Housing Impact Fund",
    description: tourismDescription,
    openGraph: {
      title: "KOMMA / Tourism-to-Housing Impact Fund",
      description: tourismDescription,
      url: "https://komma.systems/tourism-to-housing",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "KOMMA / Tourism-to-Housing Impact Fund",
      description: tourismDescription,
    },
    ...localeAlternatesMetadata("/tourism-to-housing", locale),
  }
}

const proseClasses = "[text-wrap:pretty] text-[1.125rem] leading-[1.8] text-slate-100"
const labelClasses = "mb-5 mt-14 font-silkscreen text-base sm:text-lg uppercase tracking-[0.18em] text-cream"

const sideLabel =
  "mt-6 block font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 first:mt-0"
const sideValue = "font-grotesk text-[14.5px] font-light leading-7 text-white/85"
const sideLink =
  "font-grotesk text-[14px] font-light leading-7 text-white border-b border-white/30 hover:text-cream hover:border-cream transition-colors"

type PageProps = { params: Promise<{ locale: string }> }

export default async function TourismToHousingPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = tourismMessages[locale]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-20 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-24 md:ml-[336px]">
            <Link
              href={`/${locale}#initiatives`}
              className="mb-8 inline-block font-silkscreen text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-cream"
            >
              {t.back}
            </Link>
            <h1 className="tf-0 font-silkscreen text-3xl leading-tight tracking-tight sm:text-4xl">
              Tourism-to-Housing Impact Fund
            </h1>
            <p className="mt-5 text-lg text-slate-200">
              {t.tagline[0]}
              <br />
              {t.tagline[1]}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-x-24 gap-y-12 md:grid-cols-[240px_1fr]">
            {/* Metadata sidebar */}
            <aside className="md:sticky md:top-28 md:self-start">
              <span className={sideLabel}>{t.side.initiative}</span>
              <span className={sideValue}>{t.side.initiativeValue}</span>
              <span className={sideLabel}>{t.side.stage}</span>
              <span className={sideValue}>
                <span className="mr-2 align-[1px] text-[8px]" style={{ color: "#575757" }}>●</span>
                {t.side.stageValue}
              </span>
              <span className={sideLabel}>{t.side.places}</span>
              <span className={sideValue}>
                {t.side.placesValue.map((pl, i) => (
                  <span key={pl}>
                    {i > 0 ? <br /> : null}
                    {pl}
                  </span>
                ))}
              </span>
              <span className={sideLabel}>{t.side.team}</span>
              <span className={sideValue}>
                {t.side.teamValue.map((member, i) => (
                  <span key={member}>
                    {i > 0 ? <br /> : null}
                    {member}
                  </span>
                ))}
              </span>
              <span className={sideLabel}>{t.side.contact}</span>
              <p className="leading-7">
                <Link href={`/${locale}/contact`} className={sideLink}>
                  {t.side.contactCta}
                </Link>
              </p>
            </aside>

            {/* Narrative */}
            <div className="max-w-[680px]">
              {t.intro.map((para, i) => (
                <p key={i} className={`${proseClasses}${i > 0 ? " mt-6" : ""}`}>
                  {para}
                </p>
              ))}

              <p className={labelClasses}>{t.problemLabel}</p>
              {t.problem.map((para, i) => (
                <p key={i} className={`${proseClasses}${i > 0 ? " mt-6" : ""}`}>
                  {para}
                </p>
              ))}

              <p className={labelClasses}>{t.whatLabel}</p>
              <p className={`${proseClasses} mb-7 text-white`}>{t.whatLead}</p>
              <div className="space-y-5">
                {t.what.map((step, i) => (
                  <div key={step.title} className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-x-5 gap-y-1 border-l border-white/20 pl-5">
                    <p className="font-grotesk text-[15px] font-medium uppercase tracking-[0.16em] pt-1 text-white/55">
                      {String(i + 1).padStart(2, "0")} {step.title}
                    </p>
                    <p className="[text-wrap:pretty] text-[1.1rem] leading-[1.75] text-gray-200">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>

              <p className={labelClasses}>{t.principlesLabel}</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {t.principles.map((pr) => (
                  <article key={pr.title}>
                    <h3 className="text-lg font-semibold leading-snug text-white/60">{pr.title}</h3>
                    <p className="[text-wrap:pretty] mt-3 text-[0.95rem] leading-relaxed text-white">
                      {pr.body}
                    </p>
                  </article>
                ))}
              </div>

              <p className={labelClasses}>{t.researchLabel}</p>
              {t.research.map((para, i) => (
                <p key={i} className={`${proseClasses}${i > 0 ? " mt-6" : ""}`}>
                  {para}
                </p>
              ))}

              {/* A worked model */}
              <div className="mt-20">
                <p className="mb-2 font-silkscreen text-base sm:text-lg uppercase tracking-[0.18em] text-cream">
                  {t.pilotLabel}
                </p>
                <p className={`${proseClasses} mb-7`}>{t.pilotLead}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {t.stats.map((stat) => (
                    <div key={stat.figure} className="border-t border-white/20 pt-4">
                      <p className="text-field text-3xl font-light tracking-tight sm:text-4xl">
                        {stat.figure}
                      </p>
                      <p className="[text-wrap:pretty] mt-3 text-[0.95rem] leading-relaxed text-gray-300">
                        {stat.body}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 font-grotesk text-[15px] tracking-[0.04em] text-white/70">
                  {t.tiers}
                </p>
              </div>

              {/* What's next */}
              <div className="mt-20">
                <p className="mb-5 font-silkscreen text-base sm:text-lg uppercase tracking-[0.18em] text-cream">
                  {t.nextLabel}
                </p>
                {t.next.map((para, i) => (
                  <p key={i} className={`${proseClasses}${i > 0 ? " mt-6" : ""}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={`/${locale}#initiatives`}
            className="mt-16 inline-block font-silkscreen text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-cream"
          >
            {t.back}
          </Link>
        </div>
      </main>
    </>
  )
}
