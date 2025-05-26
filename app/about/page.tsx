"use client"

import { Navigation } from "@/components/navigation"
import { AnimatedElement } from "@/components/animated-element"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />

      <main className="flex-1 flex flex-col pt-12">
        <section className="flex items-start justify-center px-4 pt-2 min-h-screen">
          <div className="w-full max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-12">
              <h1 className="komma-title text-4xl md:text-5xl text-center mb-8">About Us</h1>
            </AnimatedElement>

            <div className="space-y-16">
              {/* Charlie's Section */}
              <AnimatedElement animation="fade-up" delay={100}>
                <div className="bg-cream text-black rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Charlie Fisher</h2>
                  <p className="text-black/80 mb-6">
                    Charlie is known for his advice, research and activism on operationalising the long-term stewardship of land, 
                    particularly in the pursuit of urban affordable housing. With a background in architecture, he is completing a 
                    PhD in Spatial Planning and was on the team that launched the first tokenised land trust.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/charlie-fisher-123456789/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </AnimatedElement>

              {/* Clara's Section */}
              <AnimatedElement animation="fade-up" delay={200}>
                <div className="bg-cream text-black rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Clara Gromaches</h2>
                  <p className="text-black/80 mb-6">
                  Clara (she/her) is an architect and housing activist working in the intersection of regenerative architecture, collective+ co-operative housing and technology projects, to leverage the power self-organization to replicate rural housing commons. She works as a consultant through her practice ACT3, is part of the Operations team at dOrg —a DAO organized as a workers co-operative that provides web3 development services— and is a visitor professor at University of Girona (Spain).
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/cgromaches/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black/80 hover:text-black transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
