"use client"

import { useEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ChevronDown } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"
import { RippleButton } from "@/components/ripple-button"
import { MaskedVideoText } from '@/components/MaskedVideoText'
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
    imgClassName: "h-16 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.justopensource.io/",
    src: "/Partners/just.svg",
    alt: "Just",
    imgClassName: "h-10 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.cltweb.org/",
    src: "/Partners/New-CLT-Center-Text-logo.svg",
    alt: "Community Land Trust Center",
    imgClassName: "h-14 filter grayscale brightness-200 contrast-50",
  },
  {
    href: "https://www.curvelabs.eu/",
    src: "/Partners/curve-labs.svg",
    alt: "Curve Labs",
    imgClassName: "h-14 w-auto filter grayscale brightness-200 contrast-50",
  },
] as const

export function HomePageClient() {
  const params = useParams()
  const rawLocale = params.locale as string
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const t = homeMessages[locale]

  const [opacity, setOpacity] = useState(0)
  const [isActionActive, setIsActionActive] = useState(false)
  const [actionHover, setActionHover] = useState(false)
  const [showSecondParagraph, setShowSecondParagraph] = useState(false)
  const [chevronClicked, setChevronClicked] = useState(false)
  const [textColorWhite, setTextColorWhite] = useState(false)
  const [initiatives, setInitiatives] = useState<any[]>([])
  const [initiativesLoading, setInitiativesLoading] = useState(true)
  const introductionSectionRef = useRef<HTMLDivElement>(null)
  const approachSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start the fade-in animation after component mounts
    const timer = setTimeout(() => setOpacity(1), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show the second paragraph after 5 seconds only if chevron was clicked
    if (chevronClicked) {
      const paragraphTimer = setTimeout(() => setShowSecondParagraph(true), 5000)
      return () => clearTimeout(paragraphTimer)
    }
  }, [chevronClicked])

  useEffect(() => {
    // Make text white after 5 seconds OR when user starts scrolling
    if (chevronClicked) {
      const scrollHandler = () => {
        setTextColorWhite(true)
      }

      // Add scroll listener
      window.addEventListener('scroll', scrollHandler)

      // Set timer for 5 seconds
      const whiteTimer = setTimeout(() => {
        setTextColorWhite(true)
      }, 5000)

      return () => {
        window.removeEventListener('scroll', scrollHandler)
        clearTimeout(whiteTimer)
      }
    }
  }, [chevronClicked])

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

  const handleChevronClick = () => {
    setChevronClicked(true)
    if (introductionSectionRef.current) {
      const elementTop = introductionSectionRef.current.offsetTop
      const offsetPosition = elementTop - 100 // Scroll 100px higher than the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

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

  const handleTouchStart = () => setIsActionActive(true)
  const handleTouchEnd = () => setIsActionActive(false)

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />


      <main className="flex-1 flex flex-col pt-12">
        {/* Hero Section */}
        <section className="flex items-start justify-center px-4 pt-2 min-h-screen">
          <div
            className="w-full max-w-4xl transition-opacity duration-3000 ease-in-out mt-8 md:mt-16"
            style={{ opacity }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-16">
              {/* KOMMA title - positioned to the left */}
              <div className="text-left mb-5 md:mb-0 relative inline-block align-top">
                <span className={`komma-title text-4xl md:text-5xl block transition-colors duration-300 ${actionHover ? 'text-[#222]' : 'text-white'}`}
                  style={{ verticalAlign: 'top' }}
                >KOMMA</span>
              </div>

              {/* Main content - description */}
              <div className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-2">
                <div className={`pb-16 md:pb-20 transition-colors duration-300 ${actionHover ? 'text-[#222]' : 'text-white'}`}> 
                  {t.hero.line1}
                  <br />
                  {t.hero.line2}
                  <br />
                  {t.hero.line3}
                  <br />
                  {t.hero.line4}
                  <br />
                  {t.hero.between ? `${t.hero.between} ` : null}
                  <span className="relative inline-block cursor-pointer align-baseline"
                    style={{ verticalAlign: 'baseline' }}
                    onMouseEnter={() => setActionHover(true)}
                    onMouseLeave={() => setActionHover(false)}
                  >
                    {/* Sensing SVG, slightly lower */}
                    <img
                      src="/01Sensing.svg"
                      alt={t.sensingAlt}
                      className="h-[1.2em] w-auto align-bottom relative"
                      style={{ top: '0.15em' }}
                      draggable={false}
                    />
                  </span>{" "}
                  {t.hero.and}{" "}
                  <span
                    className="relative inline-block cursor-pointer align-baseline"
                    style={{ verticalAlign: 'baseline' }}
                    onMouseEnter={() => setActionHover(true)}
                    onMouseLeave={() => setActionHover(false)}
                  >
                    <MaskedVideoText
                      svgSrc="/02Action.svg"
                      videoSrc="/blob_video.mp4"
                      alt={t.actionAlt}
                      className="h-[1.2em] w-auto align-baseline"
                      hover={actionHover}
                    />
                  </span>
                </div>

                <AnimatedElement animation="fade-in" delay={500}>
                  <div>
                    <p
                      className={`text-lg md:text-xl lg:text-2xl leading-relaxed text-left transition-opacity duration-300 ${actionHover ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                      style={{ color: '#e4e4e4' }}
                    >
                      {t.researchSubtitle.split("\n").map((line, i) => (
                        <span key={i}>
                          {i > 0 ? <br /> : null}
                          {line}
                        </span>
                      ))}
                    </p>
                    <span
                      onMouseEnter={() => setActionHover(true)}
                      onMouseLeave={() => setActionHover(false)}
                      className="inline-block mt-16"
                    >
                      <RippleButton 
                        onClick={handleChevronClick} 
                        className="animate-bounce p-16"
                      >
                        <ChevronDown size={32} className="text-white opacity-70 hover:opacity-100 transition-opacity" />
                      </RippleButton>
                    </span>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        <section id="introduction" ref={introductionSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black mt-20 scroll-mt-48 min-h-[50vh] flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fade-in" className="mb-12">
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-0" style={{ lineHeight: 1.5 }}>
                <span className="komma-title">KOMMA</span> {t.intro1}
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
            <div className="group partners-marquee-mask w-full overflow-hidden">
              <div className="flex w-max motion-safe:animate-marquee motion-reduce:animate-none motion-reduce:translate-x-0 group-hover:[animation-play-state:paused] group-has-[:focus-visible]:[animation-play-state:paused]">
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center gap-14 md:gap-20 pr-14 md:pr-20"
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                    {PARTNER_LOGOS.map((partner) => (
                      <a
                        key={`${copy}-${partner.alt}`}
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={copy === 1 ? -1 : undefined}
                        className="inline-flex shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                      >
                        <img src={partner.src} alt={partner.alt} className={partner.imgClassName} />
                      </a>
                    ))}
                  </div>
                ))}
              </div>
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
        <section id="initiatives" className="hidden py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#46403e]">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  {t.initiatives}
                </h2>
                <span className="font-normal text-xs sm:text-sm text-white leading-relaxed align-super relative -top-1 sm:-top-2">
                  {initiativesLoading ? '...' : initiatives.length}
                </span>
              </div>
            </AnimatedElement>

            <div className="space-y-0">
              {initiativesLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-gray-400">{t.loadingInitiatives}</p>
                </div>
              ) : (
                initiatives.map((project, idx) => (
                <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={project.id}>
                  <a 
                    href={`/${locale}/initiatives/${project.slug}`}
                    className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_120px] lg:grid-cols-[1fr_auto_auto_150px] gap-3 sm:gap-4 lg:gap-6 items-start py-4 sm:py-6 hover:bg-[#1a1a1a] transition-colors duration-200 px-3 sm:px-4 border-b border-dashed border-[#a29f9f] last:border-b-0 cursor-pointer"
                  >
                    {/* Mobile: Title and Image Row */}
                    <div className="flex justify-between items-start gap-3 w-full sm:contents">
                      {/* Project Title */}
                      <div className="flex-1 min-w-0 sm:col-span-1">
                        <h3 className="font-light text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Project Image - Always visible on mobile, positioned in grid on larger screens */}
                      <div className="sm:hidden w-20 h-16 bg-left bg-no-repeat bg-cover flex-shrink-0 bg-gray-600" />
                      <div className="hidden sm:block w-[120px] lg:w-[150px] h-20 lg:h-28 bg-left bg-no-repeat bg-cover flex-shrink-0 bg-gray-600" />
                    </div>

                    {/* Mobile: Phase and Tags Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 w-full sm:contents">
                      {/* Stage */}
                      <div className="whitespace-nowrap">
                        <span className="font-normal text-base sm:text-lg lg:text-xl text-white leading-relaxed px-2 py-1 bg-[#1a1a1a] sm:bg-transparent sm:p-0">
                          {project.stage}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-row sm:flex-col gap-2 min-w-0 sm:min-w-[120px] lg:min-w-[140px]">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="font-normal text-sm sm:text-base lg:text-lg text-gray-300 sm:text-white leading-relaxed"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </AnimatedElement>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Team & Advisors Section */}
        <section id="team" className="py-16 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8 text-black">
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

              {/* Clara Gromaches */}
              <AnimatedElement animation="fade-in" delay={200}>
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
                    Clara is a consultant, researcher and business operator on decentralised technologies. With a background in Architecture she developed regenerative housing projects, incubated cooperative housing projects, advised on affordable housing policy making to municipalities in Barcelona and manages operations at a decentralized tech workers cooperative.
                  </p>
                </div>
              </AnimatedElement>

              {/* Bradley C Royes */}
              <AnimatedElement animation="fade-in" delay={300}>
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
                    Bradley is a strategic designer and innovator working at the intersection of culture, AI-native systems, and human-centered technology. Currently the Node Manager for Foresight Institute's Berlin AI Node and leading AI Builders Berlin as Community Director, he brings experience design, blending applied research with grassroots organising and urban rituals.
                  </p>
                </div>
              </AnimatedElement>

              {/* Livia Deschermayer */}
              <AnimatedElement animation="fade-in" delay={400}>
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
                    Livia is an artist and published social researcher in the field of token engineering with deep practice on decentralized ecosystems within topics of governance, culture and incentivization. Her contributions include designing social system protocols and leading the Cultural Build initiative at Commons Stack.
                  </p>
                </div>
              </AnimatedElement>

              {/* Jeff Emmett */}
              <AnimatedElement animation="fade-in" delay={500}>
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
              <AnimatedElement animation="fade-in" delay={600}>
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
                    Rita is an artist and researcher whose work centers on multispecies perspectives within organisational contexts. She explores the convergence of art and sustainability, developing creative and transdisciplinary experiences to challenge conventional paradigms and cultivate new imaginaries for transformative change.
                  </p>
                </div>
              </AnimatedElement>

              {/* Robert Matijević */}
              <AnimatedElement animation="fade-in" delay={700}>
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
      </main>
    </div>
  )
}
