"use client"

import { useEffect, useState, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { ChevronDown } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"
import { RippleButton } from "@/components/ripple-button"
import { MaskedVideoText } from '@/components/MaskedVideoText'

export default function Home() {
  const [opacity, setOpacity] = useState(0)
  const [isActionActive, setIsActionActive] = useState(false)
  const [actionHover, setActionHover] = useState(false)
  const [showSecondParagraph, setShowSecondParagraph] = useState(false)
  const introductionSectionRef = useRef<HTMLDivElement>(null)
  const approachSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start the fade-in animation after component mounts
    const timer = setTimeout(() => setOpacity(1), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show the second paragraph after 5 seconds
    const timer = setTimeout(() => setShowSecondParagraph(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleChevronClick = () => {
    if (introductionSectionRef.current) {
      const elementTop = introductionSectionRef.current.offsetTop
      const offsetPosition = elementTop - 100 // Scroll 100px higher than the element
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
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
                  a pause, transition,
                  <br />
                  integration, or inflection
                  <br />
                  point punctuating the
                  <br />
                  dynamic relationship
                  <br />
                  between{" "}
                  <span className="relative inline-block cursor-pointer align-baseline"
                    style={{ verticalAlign: 'baseline' }}
                    onMouseEnter={() => setActionHover(true)}
                    onMouseLeave={() => setActionHover(false)}
                  >
                    {/* Sensing SVG, slightly lower */}
                    <img
                      src="/01Sensing.svg"
                      alt="sensing"
                      className="h-[1.2em] w-auto align-bottom relative"
                      style={{ top: '0.15em' }}
                      draggable={false}
                    />
                  </span>{" "}
                  and{" "}
                  <span
                    className="relative inline-block cursor-pointer align-baseline"
                    style={{ verticalAlign: 'baseline' }}
                    onMouseEnter={() => setActionHover(true)}
                    onMouseLeave={() => setActionHover(false)}
                  >
                    <MaskedVideoText
                      svgSrc="/02Action.svg"
                      videoSrc="/blob_video.mp4"
                      alt="action"
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
                      Research and strategy to <br />forge a new civics
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
                <span className="komma-title">Komma</span> is a venture collective utilising applied research, artistic inquiry and real-world demonstration to shift collective imagination on how we value, own and care for what is held in common. 
              </p>
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-0 mt-6 transition-colors duration-1000" style={{ lineHeight: 1.5, color: showSecondParagraph ? 'white' : '#666' }}>
                Our action is made possible through place-based partnerships with citizens, municipalities, philanthropy and the private sector to develop experiments, products and tools to conceptualise a new civics catalysed by decentralised technology.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-8 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <div className="font-silkscreen text-base md:text-lg tracking-widest uppercase text-gray-300 mb-4">Partners</div>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <img src="/Partners/Consensys_logo_2023.svg" alt="Consensys" className="h-8 filter grayscale brightness-110 contrast-75" />
              <img src="/Partners/politics-for-tomorrow_logo_1.0.svg" alt="Politics for Tomorrow" className="h-8 filter grayscale brightness-110 contrast-75" />
            </div>
          </div>
        </section>

        <section ref={approachSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black scroll-mt-48">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8">Our Approach</h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  key: 'wealth',
                  heading: "Growing Civic Wealth",
                  description: "Supporting communities through innovative economic tools designed to enhance control over housing and land ownership. Pooled funding, community-driven exit strategies, multi-capital currencies, and bioregional banking reshape how wealth flows within neighborhoods and interconnected communities."
                },
                {
                  key: 'agreements',
                  heading: "Modernizing Agreements",
                  description: "Enabling modular and automated legal, policy and governance frameworks for stewardship agreements that redefine how communities own and care. Implementing interoperable organisational models to create scalable civic systems that meet communities evolving needs."
                },
                {
                  key: 'rituals',
                  heading: "Cultivating Playful Rituals",
                  description: "Integrating governance into everyday life through the human-centric design. Including sociocratic decision-making, digital coordination tools, and innovative wearables to enhance collective collaboration by smoothly connecting digital and physical spaces."
                }
              ].map((item, idx) => (
                <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={item.key}>
                  <div className="flex flex-col items-center justify-center min-h-[220px] h-full border border-white rounded-xl p-8 bg-transparent text-white transition-all duration-300">
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
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#46403e]">
                <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Initiatives
                </h2>
                <span className="font-normal text-xs sm:text-sm text-white leading-relaxed align-super relative -top-1 sm:-top-2">
                  5
                </span>
              </div>
            </AnimatedElement>

            <div className="space-y-0">
              {[
                {
                  id: 'algorithmic-currency',
                  title: 'Algorithmic Currency in Action',
                  phase: 'Phase 1',
                  tags: ['#governance', '#finance', '#community']
                },
                {
                  id: 'neighbourhood-finance',
                  title: 'Neighbourhood Finance Tools in Berlin',
                  phase: 'Phase 1',
                  tags: ['#governance', '#finance', '#community']
                },
                {
                  id: 'arts-experimentation',
                  title: 'Arts as a Means for Systemic Experimentation',
                  phase: 'Phase 1',
                  tags: ['#governance', '#finance', '#community']
                },
                {
                  id: 'cross-border-housing',
                  title: 'Cross-Border Cooperative for Housing',
                  phase: 'Phase 1',
                  tags: ['#governance', '#finance', '#community']
                },
                {
                  id: 'agreements-platform',
                  title: 'Agreements Platform for Housing and Land Projects',
                  phase: 'Phase 1',
                  tags: ['#governance', '#finance', '#community']
                }
              ].map((project, idx) => (
                <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={project.id}>
                  <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_120px] lg:grid-cols-[1fr_auto_auto_150px] gap-3 sm:gap-4 lg:gap-6 items-start py-4 sm:py-6 hover:bg-[#1a1a1a] transition-colors duration-200 px-3 sm:px-4 border-b border-dashed border-[#a29f9f] last:border-b-0">
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
                      {/* Phase */}
                      <div className="whitespace-nowrap">
                        <span className="font-normal text-base sm:text-lg lg:text-xl text-white leading-relaxed px-2 py-1 bg-[#1a1a1a] sm:bg-transparent sm:p-0">
                          {project.phase}
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
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-8 text-black">
                Team
              </h2>
              <p className="text-lg md:text-xl text-left text-gray-600 max-w-4xl leading-relaxed">
                Our team brings together deep expertise across architecture design, spatial planning, legal and agreements frameworks, financing tools, decentralised technologies, token engineering, and collective governance, with over a decade of experience advancing equitable, commons-based housing and innovative civic frameworks.
              </p>
            </AnimatedElement>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Charlie Fisher */}
              <AnimatedElement animation="fade-up" delay={100}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Charlie Fisher</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                  Charlie works on practical demonstrations of decentralised technologies for enhancing the delivery of affordable housing and commons-based landholding. As a researcher, founder, and project advisor, he ran an architecture practice for a decade, and was a key advisor on large scale new housing developments in England. He co-founded Oasa, a Swiss token-issuer for networked land projects.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/fishercharlie/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                    <a 
                      href="/team/charlie" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Clara Gromaches */}
              <AnimatedElement animation="fade-up" delay={200}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Clara Gromaches</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    Clara is a consultant, researcher and business operator. With a background in Architecture she developed regenerative housing projects, incubated cooperative housing projects, adviced on affordable housing policy making to municipalities in Barcelona and manages operations at a decentralized tech workers cooperative.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/cgromaches/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                    <a 
                      href="/team/clara" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Bradley C Royes */}
              <AnimatedElement animation="fade-up" delay={300}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Bradley Clark Royes</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    Bradley is a strategic designer and innovator working at the intersection of culture, AI-native systems, and human-centered technology. He leads AI Builders Berlin as Community Director & DevRel and co-founded experience design collective seks.design, blending applied research with grassroots organizing and urban rituals.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/bradleyroyes/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Livia Deschermayer */}
              <AnimatedElement animation="fade-up" delay={400}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Livia Deschermayer</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    Livia is an artist and published social researcher in the field of token engineering with over six years of practice on the decentralized ecosystem with topics of governance, culture and incentivization. Her contributions include designing social system protocols, stewarding a 2 years long working group on soft governance and culture and leading the Cultural Build initiative at Commons Stack.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/livia-deschermayer-8759418b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Jeff Emmett */}
              <AnimatedElement animation="fade-up" delay={500}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Jeff Emmett</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    Jeff is a researcher and technical writer at BlockScience. Along with Michael Zargham & Griff Green, 
                    he co-founded the Commons Stack to build out a toolkit of modular components that can be used for 
                    polycentric governance of DAO ecosystems. He is involved in multiple open research initiatives into novel resource allocation patterns like bonding curves and conviction voting that could facilitate a future of data-driven algorithmic policy and computer-aided governance.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/jeff-emmett-05268139/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>


            </div>
          </div>
        </section>

        {/* Advisors Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-8 text-black">
                Advisors
              </h2>
            </AnimatedElement>

            {/* Advisors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Caroline Paulick-Thiel */}
              <AnimatedElement animation="fade-up" delay={100}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 text-left">Caroline Paulick-Thiel</h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    Caroline is a strategic designer and expert in transformative public sector innovation. Trained in Design and Public Policy, she has extensive experience in participatory processes and innovative policy to address public challenges. She co-founded Politics for Tomorrow, and facilitates societal transformation processes in collaboration with political-administrative institutions from the local to the highest federal level in Germany and internationally.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/caroline-paulick-thiel/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 filter brightness-0 invert" />
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-[#D9D9D9]">
          <div className="max-w-7xl mx-auto">
            <p className="text-center font-silkscreen text-2xl text-black">KOMMA</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
