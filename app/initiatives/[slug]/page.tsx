"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { AnimatedElement } from "@/components/animated-element"
import { ChevronLeft, ExternalLink, Calendar, Tag } from "lucide-react"
import Link from "next/link"

interface InitiativePageProps {
  params: {
    slug: string
  }
}

interface Initiative {
  id: string
  title: string
  description: string
  phase: string
  tags: string[]
  status: string
  slug: string
  createdAt: string
  updatedAt: string
}

export default function InitiativePage({ params }: InitiativePageProps) {
  const [initiative, setInitiative] = useState<Initiative | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchInitiative() {
      try {
        const response = await fetch(`/api/initiatives/${params.slug}`)
        if (!response.ok) {
          throw new Error('Initiative not found')
        }
        const data = await response.json()
        setInitiative(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load initiative')
      } finally {
        setLoading(false)
      }
    }

    fetchInitiative()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Loading initiative...</p>
        </div>
      </div>
    )
  }

  if (error || !initiative) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Initiative Not Found</h1>
          <p className="mb-6">{error || 'The requested initiative could not be found.'}</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            Back to Initiatives
          </Link>
        </div>

        {/* Initiative Header */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {initiative.phase}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(initiative.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {initiative.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                {initiative.description}
              </p>
            </AnimatedElement>
          </div>
        </section>

        {/* Tags Section */}
        {initiative.tags.length > 0 && (
          <section className="py-8 px-4 sm:px-6 md:px-8 bg-black border-t border-gray-800">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="fade-in" delay={200}>
                <div className="flex flex-wrap gap-3">
                  {initiative.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimatedElement>
            </div>
          </section>
        )}

        {/* Initiative Details */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" delay={400}>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Status & Phase */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">Status</h3>
                    <p className="text-xl text-white capitalize">{initiative.status}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">Phase</h3>
                    <p className="text-xl text-white">{initiative.phase}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">Created</h3>
                    <p className="text-xl text-white">
                      {new Date(initiative.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">Last Updated</h3>
                    <p className="text-xl text-white">
                      {new Date(initiative.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fade-in" delay={600}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Interested in this initiative?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get in touch to learn more about our work and how you can get involved.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Contact Us
                <ExternalLink size={16} />
              </Link>
            </AnimatedElement>
          </div>
        </section>
      </main>
    </div>
  )
}
