"use client"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { AnimatedElement } from "@/components/animated-element"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { homeMessages } from "@/lib/messages/home"

const PARTNER_LOGOS = [
  {
    href: "http://foresight.org/",
    src: "/Partners/Vector-Foresight-Logo-dark-blue.svg.png",
    alt: "Foresight Institute",
    imgClassName: "h-16 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://consensys.io/",
    src: "/Partners/Consensys_logo_2023.svg",
    alt: "Consensys",
    imgClassName: "h-12 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.justopensource.io/",
    src: "/Partners/just.svg",
    alt: "Just",
    imgClassName: "h-10 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.cltweb.org/",
    src: "/Partners/clt-center.svg",
    alt: "International Center for Community Land Trusts",
    imgClassName: "h-14 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.curvelabs.eu/",
    src: "/Partners/curve-labs-wordmark.svg",
    alt: "Curve Labs",
    imgClassName: "h-12 w-auto filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://impacthub.net/",
    src: "/Partners/impact-hub.svg",
    alt: "Impact Hub",
    imgClassName: "h-14 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://ethereum.foundation/",
    src: "/Partners/ethereum-foundation-wordmark.svg",
    alt: "Ethereum Foundation",
    imgClassName: "h-12 w-auto filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://soam.earth/",
    src: "/Partners/soam.svg",
    alt: "SOAM",
    imgClassName: "h-12 filter grayscale brightness-200 contrast-50",
  },
] as const

const INITIATIVES = [
  {
    id: "meld",
    title: "Meld",
    description:
      "Civic deliberation infrastructure: a hardware device and privacy-preserving platform that captures deliberation in the room, processes it locally, and returns structured documentation.",
    stage: "In deployment",
    tags: ["governance", "tech", "AI"],
    projects: [
      { name: "Kair (platform)", href: "https://kair.is/" },
      { name: "Device", href: "https://meld.earth/" },
      { name: "10x100", href: "https://10x100.kair.is/" },
      { name: "InnoVer", href: null },
    ],
    href: "/meld",
  },
  {
    id: "relational-wealth-flows",
    title: "Relational Wealth Flows",
    description:
      "Mechanism design for how neighbourhoods capture and circulate the value they create together. A year of research and workshops in Berlin distilled the design principles that now drive threshold pools.",
    stage: "Exploration",
    tags: ["finance", "ownership", "tech"],
    projects: [
      { name: "Thresholds", href: "https://luma.com/8b7u93xt?tk=zBWUVi" },
      { name: "Tourism to Housing Fund", href: "https://frin.notion.site/Local-Affordable-Housing-Funded-by-Tourism-in-Catalonia-2e179ea359ae8016b8a5f2663625aa71" },
    ],
    href: null,
  },
  {
    id: "weave",
    title: "Weve",
    description:
      "Agreements infrastructure beginning with land: a registry that records land as the relationships between the people who hold it, validated together by many parties, from formal titles to customary claims. Built on Kair\u2019s relational bundles with spatial mapping on the front, it grows toward the registry layer for community land trusts.",
    stage: "In development",
    tags: ["agreements", "land", "tech"],
    projects: [
      { name: "Land mapping", href: null },
      { name: "Kair (relational bundles)", href: "https://kair.is/" },
    ],
    href: null,
  },
  {
    id: "sensed-governance",
    title: "Sensed Governance",
    description:
      "A practice group and pattern library for embodied governance: how groups sense together before they decide together. Rooted in social ritual and the role of the body in decision-making, it develops attunement practices, ritual openings, and decision patterns for the same rooms where Meld listens.",
    stage: "Research",
    tags: ["governance", "ritual"],
    projects: [
      { name: "Pattern book", href: null },
      { name: "Gravity and Grace (residency)", href: "https://www.gravitygrace.quest/berlin" },
    ],
    href: null,
  },
  {
    id: "exclsr",
    title: "EXCLSR",
    description:
      "The Unwinding Enclosure Academy: courses and masterclasses that gather the mechanisms places use to hold land and housing in common, and translate them into patterns others can adapt.",
    stage: "Education",
    tags: ["education", "commons"],
    projects: [
      { name: "A Tale of Planetary Enclosure", href: null },
      { name: "Pattern wiki", href: null },
      { name: "EX:CLSR fund", href: null },
    ],
    href: null,
  },
] as const

export function HomePageClient() {
  const params = useParams()
  const rawLocale = params.locale as string
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const t = homeMessages[locale]

  const [showSecondParagraph, setShowSecondParagraph] = useState(false)
  const [textColorWhite, setTextColorWhite] = useState(false)
  const [initiatives, setInitiatives] = useState<any[]>([])
  const [initiativesLoading, setInitiativesLoading] = useState(true)
  const introductionSectionRef = useRef<HTMLDivElement>(null)
  const approachSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reveal the second paragraph after 5 seconds
    const paragraphTimer = setTimeout(() => setShowSecondParagraph(true), 5000)
    return () => clearTimeout(paragraphTimer)
  }, [])

  useEffect(() => {
    // Make text white after 5 seconds OR when user starts scrolling
    const scrollHandler = () => {
      setTextColorWhite(true)
    }
    window.addEventListener('scroll', scrollHandler)
    const whiteTimer = setTimeout(() => {
      setTextColorWhite(true)
    }, 5000)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      clearTimeout(whiteTimer)
    }
  }, [])

  useEffect(() => {
    // Fetch initiatives from Notion API
    async function fetchInitiatives() {
      try {
        const response = await fetch('/api/initiatives')
        if (response.ok) {
          const data = await response.json()
          setInitiatives(data)
        } else {
          // Fallback to hardcoded initiatives if API fails
          setInitiatives([
            {
              id: 'algorithmic-currency',
              title: 'Algorithmic Currency in Action',
              stage: 'Stage 1',
              tags: ['#governance', '#finance', '#community'],
              slug: 'algorithmic-currency',
              prod: true
            },
            {
              id: 'neighbourhood-finance',
              title: 'Neighbourhood Finance Tools in Berlin',
              stage: 'Stage 1',
              tags: ['#governance', '#finance', '#community'],
              slug: 'neighbourhood-finance',
              prod: true
            },
            {
              id: 'arts-experimentation',
              title: 'Arts as a Means for Systemic Experimentation',
              stage: 'Stage 1',
              tags: ['#governance', '#finance', '#community'],
              slug: 'arts-experimentation',
              prod: true
            },
            {
              id: 'cross-border-housing',
              title: 'Cross-Border Cooperative for Housing',
              stage: 'Stage 1',
              tags: ['#governance', '#finance', '#community'],
              slug: 'cross-border-housing',
              prod: true
            },
            {
              id: 'agreements-platform',
              title: 'Agreements Platform for Housing and Land Projects',
              stage: 'Stage 1',
              tags: ['#governance', '#finance', '#community'],
              slug: 'agreements-platform',
              prod: true
            }
          ])
        }
      } catch (error) {
        console.error('Failed to fetch initiatives:', error)
        // Use fallback data
        setInitiatives([
          {
            id: 'algorithmic-currency',
            title: 'Algorithmic Currency in Action',
            stage: 'Stage 1',
            tags: ['#governance', '#finance', '#community'],
            slug: 'algorithmic-currency',
            prod: true
          }
        ])
      } finally {
        setInitiativesLoading(false)
      }
    }

    fetchInitiatives()
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const elementTop = targetElement.offsetTop
        const offsetPosition = elementTop - 100 // Scroll 100px higher than the element to account for nav bar
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleApproachChevronClick = () => {
    approachSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />


      <main className="flex-1 flex flex-col pt-12">
        <section id="introduction" ref={introductionSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black scroll-mt-48 min-h-[70vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fade-in" className="mb-12">
              <span className="komma-title block text-3xl md:text-4xl mb-10">KOMMA</span>
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-0" style={{ lineHeight: 1.5 }}>
                {t.intro1}
              </p>
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-0 mt-6 transition-colors duration-1000" style={{ lineHeight: 1.5, color: showSecondParagraph ? (textColorWhite ? 'white' : '#333') : '#666' }}>
                {t.intro2}
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-8 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <div className="font-silkscreen text-base md:text-lg tracking-widest uppercase text-white filter grayscale brightness-200 contrast-50 mb-8">{t.partners}</div>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 md:gap-x-24">
              {PARTNER_LOGOS.map((partner) => (
                <a
                  key={partner.alt}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  <img src={partner.src} alt={partner.alt} className={partner.imgClassName} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" ref={approachSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black scroll-mt-48">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8">{t.ourApproach}</h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.approachCards.map((item, idx) => (
                <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={item.key}>
                  <div className="edge-lines-rounded-xl flex flex-col items-center justify-center min-h-[220px] h-full rounded-xl p-8 bg-transparent text-white transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-center w-full mb-4">
                      {item.heading}
                    </h3>
                    <p className="text-base md:text-lg font-normal text-center">
                      {item.description}
                    </p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  {t.initiatives}
                </h2>
                <span className="font-normal text-xs sm:text-sm text-white leading-relaxed align-super relative -top-1 sm:-top-2">
                  {INITIATIVES.length}
                </span>
              </div>
            </AnimatedElement>

            <div>
              {INITIATIVES.map((initiative, idx) => {
                const Row = (
                  <div className="group grid grid-cols-1 sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[4.5rem_1fr] gap-x-10 lg:gap-x-14 border-t border-white/25 py-8 sm:py-10 px-1 sm:px-2 transition-colors duration-200 hover:bg-white/[0.04]">
                    <span className="hidden sm:block font-silkscreen text-sm text-white/40 leading-none pt-2">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-x-10 gap-y-5 items-start">
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-4">
                          <h3 className="font-extralight text-[26px] sm:text-3xl lg:text-[40px] text-white tracking-[-0.01em] leading-tight group-hover:translate-x-1 transition-transform duration-200">
                            {initiative.title}
                          </h3>
                          {initiative.href && (
                            <span className="text-white/40 text-xl sm:text-2xl transition-all duration-200 group-hover:text-white group-hover:translate-x-1">
                              →
                            </span>
                          )}
                        </div>

                        <p className="mt-3 font-mono text-[13px] text-white/50">
                          {initiative.tags.join(" / ")}
                        </p>

                        <p className="mt-5 text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                          {initiative.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                          <span className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-white/40">
                            Projects
                          </span>
                          {initiative.projects.map((project) =>
                            project.href ? (
                              <a
                                key={project.name}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="font-mono text-sm text-white/85 border-b border-white/30 pb-0.5 transition-colors hover:text-cream hover:border-cream"
                              >
                                {project.name}
                                <span className="text-[11px] text-white/40"> ↗</span>
                              </a>
                            ) : (
                              <span key={project.name} className="font-mono text-sm text-white/60">
                                {project.name}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-3.5">
                        <span className="font-mono font-semibold text-[13.5px] uppercase tracking-[0.14em] text-white whitespace-nowrap">
                          <span className="text-cream text-[9px] align-[2px] mr-2">●</span>
                          {initiative.stage}
                        </span>
                        <div className="w-full aspect-[4/3] mt-1 overflow-hidden outline outline-1 outline-white/15 opacity-80 group-hover:opacity-100 transition-opacity">
                          <img
                            src={`/initiatives/${initiative.id}.svg`}
                            alt=""
                            className="w-full h-full object-cover [image-rendering:pixelated] grayscale"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
                return (
                  <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={initiative.id}>
                    {initiative.href ? (
                      <a href={`/${locale}${initiative.href}`} className="block cursor-pointer">
                        {Row}
                      </a>
                    ) : (
                      Row
                    )}
                  </AnimatedElement>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team & Advisors Section */}
        <section id="team" className="py-16 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight text-left mb-8 text-black">
                {t.collective}
              </h2>
              <p className="text-lg md:text-xl text-left text-gray-600 max-w-4xl leading-relaxed">
                {t.collectiveIntro}
              </p>
            </AnimatedElement>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Charlie Fisher */}
              <AnimatedElement animation="fade-in" delay={100}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <a
                      href={`/${locale}/team/charlie`}
                      className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
                    >
                      Charlie Fisher
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fishercharlie/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                  Charlie works on practical demonstrations of decentralised technologies 
                  for enhancing the delivery of affordable housing and commons-based landholding. 
                  As a researcher, founder, and project advisor, he ran an architecture practice for 
                  a decade, and was a key advisor on large scale new housing developments in England. 
                  In 2022 he co-founded Oasa, a Swiss token-issuer for networked land projects.
                  </p>
                </div>
              </AnimatedElement>

              {/* Franz Josef Allmayer */}
              <AnimatedElement animation="fade-in" delay={200}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Franz Josef Allmayer</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/franz-josef-allmayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Franz works on digital infrastructure for decentralised governance and regenerative finance. He builds infrastructure to govern, finance, and verify impacts at internet scale at ixo, and contributes to Hypha developing tools for community-led economies and bioregional currencies such as SEEDS. He also founded Integrity.Earth, an independent think-and-do tank for regenerative development.
                  </p>
                </div>
              </AnimatedElement>

              {/* Clara Gromaches */}
              <AnimatedElement animation="fade-in" delay={300}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <a
                      href={`/${locale}/team/clara`}
                      className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
                    >
                      Clara Gromaches
                    </a>
                    <a
                      href="https://www.linkedin.com/in/cgromaches/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Clara is a consultant, researcher and business operator on decentralised technologies. With a background in Architecture she developed regenerative housing projects, incubated cooperative housing projects, advised on affordable housing policy making to municipalities in Barcelona and manages operations at a decentralised tech workers cooperative.
                  </p>
                </div>
              </AnimatedElement>

              {/* Bradley C Royes */}
              <AnimatedElement animation="fade-in" delay={400}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Bradley Clark Royes</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/bradleyroyes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Bradley is a strategic designer and innovator working at the intersection of culture, AI-native systems, and human-centred technology. Currently the Node Manager for Foresight Institute's Berlin AI Node and leading AI Builders Berlin as Community Director, he brings experience design, blending applied research with grassroots organising and urban rituals.
                  </p>
                </div>
              </AnimatedElement>

              {/* Livia Deschermayer */}
              <AnimatedElement animation="fade-in" delay={500}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Livia Deschermayer</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/livia-deschermayer-8759418b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Livia is an artist and published social researcher in the field of token engineering with deep practice on decentralised ecosystems within topics of governance, culture and incentivisation. Her contributions include designing social system protocols and leading the Cultural Build initiative at Commons Stack.
                  </p>
                </div>
              </AnimatedElement>

              {/* Jeff Emmett */}
              <AnimatedElement animation="fade-in" delay={600}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Jeff Emmett</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/jeff-emmett-05268139/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Jeff is a researcher and technical writer at BlockScience. Along with Michael Zargham & Griff Green,
                    he co-founded the Commons Stack to build out a toolkit of modular components that can be used for
                    polycentric governance of DAO ecosystems. He is involved in multiple open research initiatives into novel resource allocation patterns like bonding curves and conviction voting that could facilitate a future of data-driven algorithmic policy and computer-aided governance.
                  </p>
                </div>
              </AnimatedElement>

              {/* Rita Palma */}
              <AnimatedElement animation="fade-in" delay={700}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <a
                      href={`/${locale}/team/rita`}
                      className="text-2xl font-bold text-black hover:text-gray-600 transition-colors"
                    >
                      Rita Palma
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rita-santos-palma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Rita is an artist and researcher whose work centres on multispecies perspectives within organisational contexts. She explores the convergence of art and sustainability, developing creative and transdisciplinary experiences to challenge conventional paradigms and cultivate new imaginaries for transformative change.
                  </p>
                </div>
              </AnimatedElement>

              {/* Robert Matijević */}
              <AnimatedElement animation="fade-in" delay={800}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Robert Matijević</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/robertfd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Robert Matijević is a fullstack developer and technical lead with a decade of experience shipping software and leading engineering teams across complex, multi-layer systems. He brings a generalist depth across frontend, backend, and infrastructure that lets him move fluidly between architecture decisions and hands-on implementation with an expertise in Rust. Alongside his professional work, Robert pursues a personal fascination with the world's writing systems. He joined KOMMA as Meld Initiative Technical Lead in 2025, where he leads development of the Kair platform.
                  </p>
                </div>
              </AnimatedElement>

            </div>

            {/* Subheading for Advisors */}
            <AnimatedElement animation="fade-in" className="mb-12 mt-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-left mb-6 text-black">
                {t.advisors}
              </h3>
              <p className="text-base md:text-lg text-left text-gray-600 max-w-4xl leading-relaxed mb-8">
                {t.advisorsIntro}
              </p>
            </AnimatedElement>

            {/* Advisors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/*
              Caroline Paulick-Thiel (archived)
              <AnimatedElement animation="fade-up" delay={800}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Caroline Paulick-Thiel</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/caroline-paulick-thiel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Caroline is a strategic designer and expert in transformative public sector innovation. Trained in Design and Public Policy, she has extensive experience in participatory processes and innovative policy to address public challenges. She co-founded Politics for Tomorrow, and facilitates societal transformation processes in collaboration with political-administrative institutions from the local to the highest federal level in Germany and internationally.
                  </p>
                </div>
              </AnimatedElement>
              */}

              {/* Dan Lewis */}
              <AnimatedElement animation="fade-up" delay={800}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Dan Lewis</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/danalexilewis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Dan Lewis is a software developer, cooperative entrepreneur, and business coach rooted in the Enspiral network, where he serves as a Foundation Steward. With a background spanning technical architecture, organisational design, and decentralised coordination, he brings a rare cross-disciplinary perspective to the future of collaborative work. He advises KOMMA Systems on the Meld Initiative.
                  </p>
                </div>
              </AnimatedElement>

              {/* Kate Beecroft */}
              <AnimatedElement animation="fade-up" delay={900}>
                <div className="text-left">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-black">Kate Beecroft</h3>
                    <div className="flex gap-3 ml-4">
                      <a
                        href="https://www.linkedin.com/in/kate-beecroft-a3a20955"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Kate designs and implements governance for decentralised organisations, supporting high level strategic leadership at some of the most forward-thinking organisations and networks.
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">
                    Kate is working with us on Noumenal, our initiative on the role of the body in decision-making.
                  </p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4">
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Upcoming Events
              </h2>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr_auto] gap-x-9 gap-y-3 items-start border-t border-white/25 py-8 px-1 sm:px-2 hover:bg-white/[0.04] transition-colors">
                <div>
                  <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">Forum</p>
                  <p className="mt-1.5 font-mono text-[13px] text-white/60 leading-relaxed">
                    26–30 Aug 2026
                    <br />
                    Alpbach, AT
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    <a
                      href="https://www.alpbach.org/blog/urban-transformation-and-bioregional-resilience-the-micro-macro-deal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream transition-colors"
                    >
                      Meld at the European Forum Alpbach
                    </a>
                  </h3>
                  <p className="mt-2 text-base text-gray-300 leading-relaxed max-w-2xl">
                    A live demonstration of Meld with the{" "}
                    <a
                      href="https://www.alpbach.org/blog/urban-transformation-and-bioregional-resilience-the-micro-macro-deal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-white/30 hover:text-cream hover:border-cream transition-colors"
                    >
                      10x100 network
                    </a>{" "}
                    at the European Forum Alpbach: consent-first deliberation captured in the room,
                    processed on the device, and returned to participants as structured sensemaking.
                  </p>
                </div>
                <a
                  href="https://10x100.kair.is/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center font-mono text-[13px] text-white/70 border border-white/25 rounded-full px-4 py-2 whitespace-nowrap transition-colors hover:text-cream hover:border-cream"
                >
                  Register →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr_auto] gap-x-9 gap-y-3 items-start border-t border-white/25 py-8 px-1 sm:px-2 hover:bg-white/[0.04] transition-colors">
                <div>
                  <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">Keynote</p>
                  <p className="mt-1.5 font-mono text-[13px] text-white/60 leading-relaxed">
                    10–12 Sep 2026
                    <br />
                    Höllental, AT
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    <a
                      href="https://valleyofthecommons.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream transition-colors"
                    >
                      KOMMA at the Valley of the Commons
                    </a>
                  </h3>
                  <p className="mt-2 text-base text-gray-300 leading-relaxed max-w-2xl">
                    Clara keynotes &ldquo;Housing as a Commons&rdquo;: how land became property, and
                    what a century of collective housing, from Red Vienna to La Borda, teaches about
                    owning, funding and governing in common. Charlie follows with &ldquo;Knowing at the
                    Boundaries&rdquo;, on mapping land ownership to open sites to community-led futures.
                  </p>
                </div>
                <a
                  href="https://valleyofthecommons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center font-mono text-[13px] text-white/70 border border-white/25 rounded-full px-4 py-2 whitespace-nowrap transition-colors hover:text-cream hover:border-cream"
                >
                  Programme →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr_auto] gap-x-9 gap-y-3 items-start border-t border-white/25 py-8 px-1 sm:px-2 hover:bg-white/[0.04] transition-colors">
                <div>
                  <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">Forum</p>
                  <p className="mt-1.5 font-mono text-[13px] text-white/60 leading-relaxed">
                    15–16 Sep 2026
                    <br />
                    Brussels, BE
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    <a
                      href="https://k-erc.eu/2026/08/horizon-europe-category/33982/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream transition-colors"
                    >
                      Korea-EU Horizon Europe Researchers Consulting Forum
                    </a>
                  </h3>
                  <p className="mt-2 text-base text-gray-300 leading-relaxed max-w-2xl">
                    Consortium building between Korean and European researchers towards the 2027
                    Horizon Europe Cluster 4 calls (Digital, Industry and Space), organised by the
                    Korea-EU Research Centre (KERC) and the National Research Foundation of Korea.
                  </p>
                </div>
                <a
                  href="https://k-erc.eu/2026/08/horizon-europe-category/33982/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center font-mono text-[13px] text-white/70 border border-white/25 rounded-full px-4 py-2 whitespace-nowrap transition-colors hover:text-cream hover:border-cream"
                >
                  Details →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr_auto] gap-x-9 gap-y-3 items-start border-t border-white/25 py-8 px-1 sm:px-2 hover:bg-white/[0.04] transition-colors">
                <div>
                  <p className="font-silkscreen text-[0.65rem] uppercase tracking-widest text-cream">Workshop</p>
                  <p className="mt-1.5 font-mono text-[13px] text-white/60 leading-relaxed">
                    October 2026
                    <br />
                    Vaduz, LI
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    <a
                      href="https://luma.com/ycmcreer?tk=7ObFX9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream transition-colors"
                    >
                      Threshold #2: Designing Progressive Housing Mechanisms
                    </a>
                  </h3>
                  <p className="mt-2 text-base text-gray-300 leading-relaxed max-w-2xl">
                    The second network gathering of practitioners, researchers and institutional actors
                    advancing alternative housing models: diagnosing the housing system&rsquo;s structural
                    challenges, evaluating mechanisms such as Rent Credit Obligations and Tokenised
                    Access Rights, and identifying European demonstration sites. Organised with Autonomic.
                  </p>
                </div>
                <a
                  href="https://luma.com/ycmcreer?tk=7ObFX9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center font-mono text-[13px] text-white/70 border border-white/25 rounded-full px-4 py-2 whitespace-nowrap transition-colors hover:text-cream hover:border-cream"
                >
                  Register →
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
