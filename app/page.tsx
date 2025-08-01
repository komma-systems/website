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
                <span className="komma-title">Komma</span> is a Action-Research & Venture Collective with over a decade of experience working with citizens, 
                municipalities, philanthropy and the construction sector to conceptualise a New Civics 
                catalysed by decentralised technology.
              </p>
            </AnimatedElement>
          </div>
        </section>

        <section ref={approachSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black scroll-mt-48">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-white">
                Our <span className="italic">Approach</span>
              </h2>
              <p className="text-lg md:text-xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Engaging with the fundamentals of how we own, value and care for what we hold in common.
              </p>
              <p className="text-base text-center text-gray-400 max-w-3xl mx-auto leading-relaxed mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8">Focus Areas</h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  key: 'tech',
                  heading: "Growing Community Wealth",
                  description: "Empowering communities through innovative economic tools designed to enhance control over housing and land ownership. Pooled funding, community-driven exit strategies, multi-capital currencies, and bioregional banking reshape how wealth flows within neighborhoods and interconnected communities."
                },
                {
                  key: 'research',
                  heading: "Modernizing Agreements & Policies",
                  description: "Enabling modular and automated legal and governance frameworks for stewardship agreements that redefine how communities own and care. Implementing interoperable organizational models to create scalable civic systems that meet communities evolving needs."
                },
                {
                  key: 'community',
                  heading: "Cultivating Playful Rituals",
                  description: "Integrating governance into everyday life through the human-centric design. Including sociocratic decision-making, digital coordination tools, and innovative wearables to enhance collective collaboration by smoothly connecting digital and physical spaces."
                }
              ].map((item, idx) => (
                <AnimatedElement animation="fade-up" delay={100 * (idx + 1)} key={`duplicate-${item.key}`}>
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

            {/* Case Studies Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-12">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Algorithmic Currency in Action</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Using smart algorithms, the currency protocol pulls tokenized assets likes homes or land into community control by a commons capture device that distributes governance and access rights automonosly while buying back shares from stakeholders. Designed to support the emergence of bioregional banking systems as well, the protocol adapts strategies depending on local context, offering a scalable model for decentralized commons management.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                      <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">#infrastructure</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Neighbourhood Finance Tools in Berlin</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Enabling transparent and equitable management of community-generated revenue in two Berlin neighbourhoods through innovative financial tools. These tools include a user-friendly platform for a community savings scheme, a flexible rate bond product, and a mortgage reversion scheme to support homeowners. Together, these mechanisms foster sustainable development of common good spaces and empower local community initiatives.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Impact Tourism Fund for Affordable Housing in Barcelona</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Funneling capital investment into affordable housing by leveraging the lucrative Barcelona hotel industry through innovative digital bonds and ex-urance products. This fund encourages hotels to contribute to local communities by attracting impact tourism that aligns business success with social responsibility, creating a sustainable cycle of investment and positive community impact.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Cross-Border Cooperative for Housing</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Connecting housing cooperatives across countries to enable shared stewardship and governance of housing commons. Blockchain-based agreements and decentralized legal tools simplifies cross-border collaboration, increases transparency, and opens access to financing. It empowers members to co-own and manage housing sustainably with trusted, user-friendly technology.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">#communities</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Agreements Platform for Housing and Land Projects</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Simplifying housing and land development streamlining access to finance and legal certainty through peer-to-peer lending, tokenized investments, and democratized crowdfunding. With on-chain legal contracts and tailored insurance products, the platform builds trust, reduces founder risk, and makes treasury management effortless.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Unlocking Nature Value in Rural Germany</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Transforming rural regions by harnessing the power of nature. This initiative helps local governments and communities use participatory digital tools to unlock the hidden value of trees, forests and green landscapes. Through two hands-on pilot projects in Germany, local actors co-create better ways to care for forests, manage green spaces and support public services.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 0</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">#communities</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#finance</span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Wearables to Enable Physical & Digital Rituals</h4>
                    <p className="text-sm text-white/80 mb-4">
                      This project uses small NFC chips in wearable devices to help people interact with their city in fun and meaningful ways. Instead of forcing rules, it encourages people to work together and make agreements by sharing trust and cooperating openly. Wearing these devices makes it easy to join in community activities and influence how public spaces are used.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 2</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">#community</span>
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Art as Means for Systemic Experimentation</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Exploring artistic concepts and installations as interactive experiences to open imagination and discover capabilities and user-interfaces of AI & distributed technologies. Collaboration with CROSSLUCID artist collective.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 2</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">#art</span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">#communities</span>
                    </div>
                  </div>
                </div>
                <div className="border border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm flex flex-col h-full">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-3">Sensed Governance Practises</h4>
                    <p className="text-sm text-white/80 mb-4">
                      Reimagining how communities govern shared resources by bringing physical presence and sensory awareness back into decision-making. Recognizing the body as a crucial sensor for collective wellbeing, this project develops innovative workshop tools and a practical playbook to empower local leaders and communities to turn collective ideals into tangible actions.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">Phase 2</span>
                    <div className="flex gap-1">
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">#governance</span>
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">#community</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-black">
                Harnessing diversity of <span className="italic">perspectives</span> and <span className="italic">disciplines</span>
              </h2>
              <p className="text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our team brings together deep expertise across architecture design, spatial planning, legal and agreements frameworks, financing tools, decentralised technologies, token engineering, and collective governance, with over a decade of experience advancing equitable, commons-based housing and innovative civic frameworks.
              </p>
            </AnimatedElement>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Charlie Fisher */}
              <AnimatedElement animation="fade-up" delay={100}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                      alt="Charlie Fisher"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Charlie Fisher</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Charlie is an advisor, researcher and founder active in the challenge of operationalising the long-term stewardship of land, 
                    particularly in the pursuit of urban affordable housing. With a background in architecture, he is completing a PhD in Spatial Planning 
                    and was on the team that launched the first tokenised land trust.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/fishercharlie/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="/team/charlie" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
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
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" 
                      alt="Clara Gromaches"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Clara Gromaches</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Clara is a consultant, researcher and business operator at the intersection of regenerative architecture, affordable housing, and decentralized technoogy to replicate housing and land commons. 
                    With a background in Architecture she developed regenerative housing projects, incubated cooperative housing projects, policy making for municipalities in Spain and Operations at a web3-native workers cooperative.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="https://www.linkedin.com/in/cgromaches/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="/team/clara" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
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
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                      alt="Bradley C Royes"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Bradley C Royes</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Bradley is a strategic designer with expertise in creating innovative solutions at the intersection of 
                    technology, society, and business. His work focuses on developing human-centered approaches to complex 
                    challenges in urban development and civic innovation.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Livia Deschermayer */}
              <AnimatedElement animation="fade-up" delay={400}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" 
                      alt="Livia Deschermayer"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Livia Deschermayer</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Livia is an artist and published social researcher in the field of token engineering with over 6 years of practice 
                    in the web3 space on the topics of governance, culture and incentivization. Her contributions include designing 
                    social system protocols, stewarding a 2 years long working group on soft governance and culture and leading the Cultural Build initiative at Commons Stack which implemented Elinor Ostrom's principles in the Token Engineering Commons.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Jeff Emmett */}
              <AnimatedElement animation="fade-up" delay={500}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" 
                      alt="Jeff Emmett"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Jeff Emmett</h3>
                  <p className="text-lg text-gray-600 mb-4">Advisor</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Jeff is a researcher and technical writer at BlockScience. Along with Michael Zargham & Griff Green, 
                    he co-founded the Commons Stack to build out a toolkit of modular components that can be used for 
                    polycentric governance of DAO ecosystems. He is involved in multiple open research initiatives into novel resource allocation patterns like bonding curves and conviction voting that could facilitate a future of data-driven algorithmic policy and computer-aided governance.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>

              {/* Caroline Paulick-Thiel */}
              <AnimatedElement animation="fade-up" delay={600}>
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 overflow-hidden rounded-full bg-gray-200">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face" 
                      alt="Caroline Paulick-Thiel"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Caroline Paulick-Thiel</h3>
                  <p className="text-lg text-gray-600 mb-4">Advisor</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Caroline is a strategic designer and expert in transformative public sector innovation. Trained in Design (BA) 
                    and Public Policy (MPP), she has extensive experience in developing and leading participatory processes to address 
                    public challenges. In 2015, she co-founded Politics for Tomorrow, and facilitates societal transformation processes in collaboration with political-administrative institutions from the local to the highest federal level in Germany and internationally.
                  </p>
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                        <path d="M8 12h8v2H8zm0 4h8v2H8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 bg-[#D9D9D9]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className="font-silkscreen text-2xl text-black mb-6">KOMMA</p>
              
              {/* Social Media Links */}
              <div className="flex justify-center gap-6 mb-6">
                <a 
                  href="https://x.com/komma_systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/komma-systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.597 2.001 3.597 4.601v5.595z"/>
                  </svg>
                </a>
                <a 
                  href="https://kommasystems.substack.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                  </svg>
                </a>
              </div>
              
              {/* Made with love text */}
              <p className="text-sm text-black">
                Made with <span className="text-black">♥</span> between Berlin & Barcelona
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
