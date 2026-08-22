import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"
import { meldMessages } from "@/lib/messages/meld"

const meldDescription =
  "Meld is a hardware device and spatial AI platform for civic deliberation. Built by KOMMA Systems."

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / Meld",
    description: meldDescription,
    openGraph: {
      title: "KOMMA / Meld",
      description: meldDescription,
      url: "https://meld.komma.systems",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "KOMMA / Meld",
      description: meldDescription,
    },
    ...localeAlternatesMetadata("/meld", locale),
  }
}

const proseClasses = "[text-wrap:pretty] text-[1.06rem] leading-[1.75] text-slate-100"
const labelClasses = "mb-4 mt-12 font-silkscreen text-[0.7rem] uppercase tracking-[0.24em] text-cream"

const sideLabel =
  "mt-6 block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/40 first:mt-0"
const sideValue = "font-mono text-[13px] leading-7 text-white/70"
const sideLink =
  "font-mono text-[13px] leading-7 text-white border-b border-white/30 hover:text-cream hover:border-cream transition-colors"

type PageProps = { params: Promise<{ locale: string }> }

export default async function MeldPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = meldMessages[locale]
  const cardHrefs = ["https://kair.is/", "https://meld.earth/"]
  const cardImgs = ["/meld/kair.svg", "/meld/device.svg"]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-20 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14">
            <h1 className="font-silkscreen text-5xl tracking-tight text-white sm:text-6xl">Meld</h1>
            <p className="mt-5 text-lg text-slate-200">
              {t.tagline[0]}
              <br />
              {t.tagline[1]}
            </p>
          </header>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-[240px_1fr]">
            {/* Metadata sidebar */}
            <aside className="md:sticky md:top-28 md:self-start">
              <span className={sideLabel}>{t.side.initiative}</span>
              <span className={sideValue}>Meld</span>
              <span className={sideLabel}>{t.side.stage}</span>
              <span className={sideValue}>{t.side.stageValue}</span>
              <span className={sideLabel}>{t.side.places}</span>
              <span className={sideValue}>
                {t.side.placesValue[0]}
                <br />
                {t.side.placesValue[1]}
              </span>
              <span className={sideLabel}>{t.side.projects}</span>
              <p className="leading-7">
                <a href="https://kair.is/" target="_blank" rel="noopener noreferrer" className={sideLink}>
                  Kair
                </a>
                <br />
                <a href="https://meld.earth/" target="_blank" rel="noopener noreferrer" className={sideLink}>
                  {t.side.device}
                </a>

              </p>
              <span className={sideLabel}>{t.side.team}</span>
              <span className={sideValue}>
                {t.side.teamValue[0]}
                <br />
                {t.side.teamValue[1]}
              </span>
              <span className={sideLabel}>{t.side.partners}</span>
              <a
                href="https://www.nextlearning.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex opacity-80 transition-opacity hover:opacity-100"
              >
                <img
                  src="/Partners/nextlearning.svg"
                  alt="nextlearning e.V."
                  className="h-7 w-auto brightness-0 invert opacity-80"
                />
              </a>
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
              {t.what.map((para, i) => (
                <p key={i} className={`${proseClasses}${i > 0 ? " mt-6" : ""}`}>
                  {para}
                </p>
              ))}

              <p className={labelClasses}>{t.principlesLabel}</p>
              <div className="space-y-8">
                {t.principles.map((pr) => (
                  <article key={pr.title}>
                    <h3 className="text-base font-semibold text-white">{pr.title}</h3>
                    <p className={`${proseClasses} mt-2`}>{pr.body}</p>
                  </article>
                ))}
              </div>

              {/* Inside the initiative */}
              <div className="mt-20">
                <p className="mb-6 font-silkscreen text-[0.7rem] uppercase tracking-[0.24em] text-white/45">
                  {t.insideLabel}
                </p>

                <div className="border border-white/25">
                  <img
                    src="/meld/innover-slide.png"
                    alt={t.featured.imageAlt}
                    className="w-full"
                  />
                  <div className="p-7 sm:p-9 sm:pt-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">
                        {t.featured.tag}
                      </p>
                      <span className="rounded-full border border-cream/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-cream">
                        {t.featured.pill}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-light tracking-tight text-white sm:text-3xl">
                      {t.featured.title}
                    </h3>
                    <p className={`${proseClasses} mt-3 !text-[0.98rem] text-gray-300`}>
                      {t.featured.body}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {t.cards.map((card, i) => (
                    <a
                      key={card.title}
                      href={cardHrefs[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group border border-white/25 p-6 transition-colors hover:bg-white/[0.04]"
                    >
                      <img
                        src={cardImgs[i]}
                        alt=""
                        className="mb-4 w-full outline outline-1 outline-white/10"
                      />
                      <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-white/40">
                        {card.tag}
                      </p>
                      <h3 className="mt-3 text-xl font-light tracking-tight text-white">
                        {card.title}
                        <span className="ml-2 text-white/40 transition-colors group-hover:text-cream">
                          →
                        </span>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">{card.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* From the field */}
              <div className="mt-20">
                <p className="mb-2 font-silkscreen text-[0.7rem] uppercase tracking-[0.24em] text-white/45">
                  {t.fieldLabel}
                </p>
                <div>
                  {t.field.map((item) => {
                    const Row = (
                      <div className="grid grid-cols-1 gap-x-9 gap-y-3 border-t border-white/25 py-8 transition-colors hover:bg-white/[0.04] sm:grid-cols-[130px_1fr]">
                        <div>
                          <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">
                            {item.tag}
                          </p>
                          <p className="mt-1.5 font-mono text-[13px] leading-relaxed text-white/60">
                            {item.meta.map((m, i) => (
                              <span key={m}>
                                {i > 0 ? <br /> : null}
                                {m}
                              </span>
                            ))}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-light tracking-tight text-white sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className={`${proseClasses} mt-2 !text-[0.98rem] text-gray-300`}>
                            {item.body}
                          </p>
                          {item.cta && (
                            <p className="mt-4">
                              <span className="inline-block rounded-full border border-white/25 px-4 py-2 font-mono text-[13px] text-white/70 transition-colors group-hover:border-cream">
                                {item.cta}
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    )
                    return item.href ? (
                      <a
                        key={item.title}
                        href={item.href.startsWith("/") ? `/${locale}${item.href}` : item.href}
                        target={item.href.startsWith("/") ? undefined : "_blank"}
                        rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
                        className="group block cursor-pointer"
                      >
                        {Row}
                      </a>
                    ) : (
                      <div key={item.title}>{Row}</div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
