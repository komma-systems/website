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
  const introductionSectionRef = useRef<HTMLDivElement>(null)
  const approachSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start the fade-in animation after component mounts
    const timer = setTimeout(() => setOpacity(1), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleChevronClick = () => {
    introductionSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
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
                        className="animate-bounce"
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
              <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl px-4 sm:px-0" style={{ lineHeight: 1.15 }}>
                <span className="komma-title">Komma</span> is an action-research studio with over a decade of experience working with citizens, 
                municipalities, philanthropy and the construction sector to conceptualise a new civics 
                catalysed by decentralised technology.
              </p>
            </AnimatedElement>
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
                  key: 'tech',
                  heading: "Technology & Urban Environments",
                  description: "Komma works at the intersection of technology and urban environments, creating processes that encourage everyday acts of civic engagement."
                },
                {
                  key: 'research',
                  heading: (<><span>Researching</span><br /><span>hard to see roots</span></>),
                  description: "Engaging with the fundamentals of how we own, value and care for what we hold in common "
                },
                {
                  key: 'community',
                  heading: "Community Building",
                  description: "We develop solutions that reinforce positive civic habits and build stronger, more connected communities for the long term."
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

        {/* Team Section - with gray background */}
        <section id="team" className="relative py-16 px-4 sm:px-6 md:px-8 bg-[#D9D9D9] scroll-mt-0">
          {/* Video background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              src="/Video_of_Comma_Blob_Ready (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Frosted overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
          </div>
          
          {/* Content overlay */}
          <div className="relative w-full flex justify-end">
            {/* Team box */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <div className="rounded-xl p-8 bg-white/90 backdrop-blur-sm text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:backdrop-blur-md">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-12">Team</h2>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Charlie Fisher</h3>
                    <p className="text-black/80 mb-6">
                      Charlie is an advisor, researcher and activism concerning the operationalisation of long-term stewardship of land, particularly in the pursuit of urban affordable housing. With a background in architecture, he is completing a PhD in Spatial Planning and was on the team that launched the first tokenised land trust.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/fishercharlie/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Clara Gromaches</h3>
                    <p className="text-black/80 mb-6">
                      Clara works in the intersection of regenerative architecture, affordable housing and technology projects, to leverage the power of self-organization to replicate housing commons. As an architect and independent consultant, she has been a member of Auquer i Prats, developed regen housing projects, advised municipalities on initiating affordable cooperative housing projects in Spain and is an Operations member at dOrg, a web3 native workers co-operative organized as DAO since 2019.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/cgromaches/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/></svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
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
