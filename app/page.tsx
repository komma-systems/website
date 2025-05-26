"use client"

import { useEffect, useState, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { ChevronDown } from "lucide-react"
import { AnimatedElement } from "@/components/animated-element"
import { RippleButton } from "@/components/ripple-button"

export default function Home() {
  const [opacity, setOpacity] = useState(0)
  const [isActionActive, setIsActionActive] = useState(false)
  const descriptionSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start the fade-in animation after component mounts
    const timer = setTimeout(() => setOpacity(1), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleChevronClick = () => {
    descriptionSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
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
              <div className="text-left mb-5 md:mb-0">
                <h1 className="komma-title text-4xl md:text-5xl">KOMMA</h1>
              </div>

              {/* Main content - description */}
              <div className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-2">
                <p className="pb-16 md:pb-20">
                  a pause, transition,
                  <br />
                  integration, or inflection
                  <br />
                  point punctuating the
                  <br />
                  dynamic relationship
                  <br />
                  between{" "}
                  <span className="font-mono relative">
                    <span className="absolute inset-0 flex flex-col justify-center">
                      <span className="h-[1px] bg-white w-full my-[2px]"></span>
                      <span className="h-[1px] bg-white w-full my-[2px]"></span>
                      <span className="h-[1px] bg-white w-full my-[2px]"></span>
                      <span className="h-[1px] bg-white w-full my-[2px]"></span>
                    </span>
                    <span className="relative z-10">sensing</span>
                  </span>{" "}
                  and{" "}
                  <span
                    className={`action-text ${isActionActive ? "active" : ""}`}
                    onClick={() => setIsActionActive(!isActionActive)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    action
                  </span>
                </p>

                {/* Chevron with Ripple Effect */}
                <RippleButton onClick={handleChevronClick} className="flex justify-center mt-4 animate-bounce">
                  <ChevronDown size={32} className="text-white opacity-70 hover:opacity-100 transition-opacity" />
                </RippleButton>
              </div>
            </div>
          </div>
        </section>

        <section ref={descriptionSectionRef} className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed">
                Komma is an action-research studio with over a decade of experience working with citizens, 
                municipalities, philanthropy and the construction sector to conceptualise a new civics 
                catalysed by decentralised technology.
              </p>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-8">Our Approach</h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Thematic Boxes */}
              <AnimatedElement animation="fade-up" delay={100}>
                <div className="bg-cream text-black rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Research</h3>
                  <p className="text-black/80">
                    We conduct in-depth research to understand the complex challenges of urban development 
                    and identify opportunities for innovation.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" delay={200}>
                <div className="bg-cream text-black rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Action</h3>
                  <p className="text-black/80">
                    We translate research into practical solutions, working directly with communities 
                    and stakeholders to implement change.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement animation="fade-up" delay={300}>
                <div className="bg-cream text-black rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Technology</h3>
                  <p className="text-black/80">
                    We leverage decentralized technology to create more transparent, efficient, and 
                    equitable urban systems.
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
