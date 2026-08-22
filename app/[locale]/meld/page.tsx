import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

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

const sideLabel =
  "mt-6 block font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/40 first:mt-0"
const sideValue = "font-mono text-[13px] leading-7 text-white/70"
const sideLink =
  "font-mono text-[13px] leading-7 text-white border-b border-white/30 hover:text-cream hover:border-cream transition-colors"

const fieldItems = [
  {
    tag: "Forum",
    meta: ["26–30 Aug 2026", "Alpbach, AT"],
    title: "Meld at the European Forum Alpbach",
    body:
      "A live demonstration of Meld with the 10x100 network at the European Forum Alpbach: consent-first deliberation captured in the room, processed on the device, and returned to participants as structured sensemaking.",
    cta: "Register →",
    href: "https://10x100.kair.is/",
  },
  {
    tag: "Participate",
    meta: ["Ongoing"],
    title: "Bring Meld to your process",
    body:
      "We work with municipalities, assemblies, and facilitators who want their deliberation captured on their own terms. Get in touch to talk about a session or a pilot.",
    cta: "Talk to us about a pilot →",
    href: "/contact",
  },
] as const

type PageProps = { params: Promise<{ locale: string }> }

export default async function MeldPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-20 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14">
            <h1 className="font-silkscreen text-5xl tracking-tight text-white sm:text-6xl">Meld</h1>
            <p className="mt-5 text-lg text-slate-200">
              Making physical space programmable
              <br />
              at the threshold of shared memory
            </p>
          </header>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-[240px_1fr]">
            {/* Metadata sidebar */}
            <aside className="md:sticky md:top-28 md:self-start">
              <span className={sideLabel}>Initiative</span>
              <span className={sideValue}>Meld</span>
              <span className={sideLabel}>Stage</span>
              <span className={sideValue}>In deployment</span>
              <span className={sideLabel}>Places</span>
              <span className={sideValue}>
                Rural Germany
                <br />
                Alpbach, AT
              </span>
              <span className={sideLabel}>Projects</span>
              <p className="leading-7">
                <a href="https://kair.is/" target="_blank" rel="noopener noreferrer" className={sideLink}>
                  Kair
                </a>
                <br />
                <a href="https://meld.earth/" target="_blank" rel="noopener noreferrer" className={sideLink}>
                  Device
                </a>
                <br />
                <a
                  href="https://10x100.kair.is/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sideLink}
                >
                  10x100
                </a>
              </p>
              <span className={sideLabel}>Team</span>
              <span className={sideValue}>
                Charlie Fisher (Project Lead)
                <br />
                Robert Matijevic (Technical Lead)
              </span>
              <span className={sideLabel}>Partners</span>
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
              <span className={sideLabel}>Contact</span>
              <p className="leading-7">
                <Link href={`/${locale}/contact`} className={sideLink}>
                  Work with Meld →
                </Link>
              </p>
            </aside>

            {/* Narrative */}
            <div className="max-w-[680px]">
              <p className={proseClasses}>
                Governance fails because what people say disappears. Citizen assemblies, community
                consultations, and municipal workshops produce hours of spoken deliberation that is
                difficult to track, impossible to compare across sessions, and rarely reflected in
                the decisions that follow. Meld is KOMMA&apos;s initiative to address that.
              </p>
              <p className={`${proseClasses} mt-6`}>
                Meld is a hardware device and spatial AI platform designed for deployment in civic
                settings. It captures spoken deliberation in the room, processes it locally, and
                returns structured sensemaking outputs to facilitators and participants without raw
                audio ever leaving the space. It is the physical and technical infrastructure for a
                new kind of civic listening.
              </p>

              <p className={`${proseClasses} mt-10`}>
                Public deliberation sits at the heart of democratic renewal, but the tools available
                to it are broken. Existing approaches either rely on commercial cloud AI that creates
                unacceptable data sovereignty and privacy risks in public sector settings, or they
                produce flat transcripts that demand hours of manual analysis. Neither is fit for
                deployment in the places that need participatory tools most: under-resourced
                municipalities, rural communities, and administrations without specialist technical
                capacity.
              </p>
              <p className={`${proseClasses} mt-6`}>
                Beneath this is a deeper structural problem. Democratic processes generate rich,
                layered knowledge from citizens and communities, but that knowledge has no durable
                form. It does not accumulate. It does not travel. It does not inform the next session
                or the next decision. Each assembly starts from scratch.
              </p>

              <p className={`${proseClasses} mt-10`}>
                The Meld device sits in the room during civic assemblies and public workshops.
                Participants register consent through a physical NFC tap before their voice enters
                the pipeline. Transcription, anonymisation, and initial sensemaking happen locally on
                the device, powered by KairOS, the operating system for relational technology
                developed within the initiative.
              </p>
              <p className={`${proseClasses} mt-6`}>
                After each session, the Embers Engine constructs a knowledge graph from the
                discussion: extracting themes, relationships, and patterns across contributions, and
                connecting them to prior sessions through a Temporal Deliberation Graph. Facilitators
                receive structured outputs that make the conversation legible, comparable, and
                actionable.
              </p>
              <p className={`${proseClasses} mt-6`}>
                The underlying platform is Kair, named for Kairos, the Greek concept of qualitative
                or relational time. Where Chronos measures the passing of moments, Kairos names the
                moment when something shifts. Kair is built to locate and hold those moments in civic
                life.
              </p>

              <div className="mt-12 space-y-8">
                <article>
                  <h3 className="text-base font-semibold text-white">Consent as action</h3>
                  <p className={`${proseClasses} mt-2`}>
                    Participation in the pipeline is an active, physical choice. Each participant
                    taps an NFC tag before their contributions are captured. Withdrawal is possible
                    at any time, at the level of a session or a single exchange, without requiring
                    identification.
                  </p>
                </article>
                <article>
                  <h3 className="text-base font-semibold text-white">Edge-first</h3>
                  <p className={`${proseClasses} mt-2`}>
                    Raw audio stays on local hardware. Only de-identified transcripts and structured
                    graph outputs leave the device. The platform operates without internet
                    connectivity, which is essential for deployment in rural and low-connectivity
                    settings.
                  </p>
                </article>
                <article>
                  <h3 className="text-base font-semibold text-white">Minimal trace by default</h3>
                  <p className={`${proseClasses} mt-2`}>
                    Exports contain graph structures and metadata only. The system is designed so
                    that the outputs of deliberation are useful without being personally
                    attributable.
                  </p>
                </article>
              </div>

              {/* The system: featured projects inside Meld */}
              <div className="mt-20">
                <p className="mb-6 font-silkscreen text-[0.7rem] uppercase tracking-[0.24em] text-white/45">
                  Inside the initiative
                </p>

                {/* InnoVER: the featured deployment, full width */}
                <div className="border border-white/25 p-7 sm:p-9">
                  <img src="/meld/innover.svg" alt="" className="mb-6 w-full outline outline-1 outline-white/10" />
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">
                      Deployment
                    </p>
                    <span className="rounded-full border border-cream/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-cream">
                      Announcement coming soon
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-light tracking-tight text-white sm:text-3xl">
                    First production deployment
                  </h3>
                  <p className={`${proseClasses} mt-3 !text-[0.98rem] text-gray-300`}>
                    Meld is entering its first production deployment through a publicly funded
                    programme in rural Germany. Full details of the implementation, the places
                    involved, and our partners will be announced here shortly.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <a
                      href="https://www.nextlearning.earth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 transition-opacity hover:opacity-100"
                    >
                      <img
                        src="/Partners/nextlearning.svg"
                        alt="nextlearning e.V."
                        className="h-6 w-auto brightness-0 invert"
                      />
                    </a>
                    <a
                      href="https://www.10x100.cc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 transition-opacity hover:opacity-100"
                    >
                      <img
                        src="/Partners/10x100.svg"
                        alt="10x100"
                        className="h-6 w-auto brightness-0 invert"
                      />
                    </a>
                    <a
                      href="https://foresight.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 transition-opacity hover:opacity-100"
                    >
                      <img
                        src="/Partners/Vector-Foresight-Logo-dark-blue.svg.png"
                        alt="Foresight Institute"
                        className="h-8 w-auto brightness-0 invert"
                      />
                    </a>
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/50">
                      Max Planck Institute of Geoanthropology
                    </span>
                    <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/50">
                      Bundesministerium für Bildung und Forschung
                    </span>
                  </div>
                </div>

                {/* The parts of the system */}
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <a
                    href="https://kair.is/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/25 p-6 transition-colors hover:bg-white/[0.04]"
                  >
                    <img src="/meld/kair.svg" alt="" className="mb-4 w-full outline outline-1 outline-white/10" />
                    <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-white/40">
                      Platform
                    </p>
                    <h3 className="mt-3 text-xl font-light tracking-tight text-white">
                      Kair
                      <span className="ml-2 text-white/40 transition-colors group-hover:text-cream">→</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Structures deliberation into a queryable knowledge graph, with an open API to
                      build on.
                    </p>
                  </a>
                  <a
                    href="https://meld.earth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/25 p-6 transition-colors hover:bg-white/[0.04]"
                  >
                    <img src="/meld/device.svg" alt="" className="mb-4 w-full outline outline-1 outline-white/10" />
                    <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-white/40">
                      Hardware
                    </p>
                    <h3 className="mt-3 text-xl font-light tracking-tight text-white">
                      Device
                      <span className="ml-2 text-white/40 transition-colors group-hover:text-cream">→</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Captures and processes deliberation in the room. Raw audio never leaves it.
                    </p>
                  </a>
                  <a
                    href="https://10x100.kair.is/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-white/25 p-6 transition-colors hover:bg-white/[0.04]"
                  >
                    <img src="/meld/10x100.svg" alt="" className="mb-4 w-full outline outline-1 outline-white/10" />
                    <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-white/40">
                      Network
                    </p>
                    <h3 className="mt-3 text-xl font-light tracking-tight text-white">
                      10x100
                      <span className="ml-2 text-white/40 transition-colors group-hover:text-cream">→</span>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Meld live with the 10x100 network, demonstrated at the European Forum Alpbach.
                    </p>
                  </a>
                </div>
              </div>

              {/* From the field */}
              <div className="mt-20">
                <p className="mb-2 font-silkscreen text-[0.7rem] uppercase tracking-[0.24em] text-white/45">
                  From the field
                </p>
                <div>
                  {fieldItems.map((item) => {
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
