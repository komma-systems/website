"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { AnimatedElement } from "@/components/animated-element"
import { ChevronLeft, ExternalLink, Tag } from "lucide-react"
import Link from "next/link"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { initiativePageUi } from "@/lib/messages/initiative-page"

interface Initiative {
  id: string
  title: string
  slug: string
  stage: string
  tags: string[]
  prod: boolean
  createdAt: string
  updatedAt: string
}

export function InitiativePageClient() {
  const params = useParams()
  const rawLocale = params.locale as string
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const slug = params.slug as string
  const ui = initiativePageUi[locale]
  const dateLocale = locale === "de" ? "de-DE" : "en-US"

  const [initiative, setInitiative] = useState<Initiative | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchInitiative() {
      try {
        const response = await fetch(`/api/initiatives/${slug}`)
        if (!response.ok) {
          throw new Error("Initiative not found")
        }
        const data = await response.json()
        setInitiative(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load initiative")
      } finally {
        setLoading(false)
      }
    }

    fetchInitiative()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>{ui.loading}</p>
        </div>
      </div>
    )
  }

  if (error || !initiative) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{ui.notFoundTitle}</h1>
          <p className="mb-6">{error || ui.notFoundBody}</p>
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ChevronLeft size={16} />
            {ui.backHome}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <Link
            href={`/${locale}#initiatives`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft size={16} />
            {ui.backList}
          </Link>
        </div>

        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {initiative.stage}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(initiative.createdAt).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{initiative.title}</h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">{ui.teaser}</p>
            </AnimatedElement>
          </div>
        </section>

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

        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" delay={400}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{ui.status}</h3>
                    <p className="text-xl text-white capitalize">
                      {initiative.prod ? ui.published : ui.draft}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{ui.stage}</h3>
                    <p className="text-xl text-white">{initiative.stage}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{ui.created}</h3>
                    <p className="text-xl text-white">
                      {new Date(initiative.createdAt).toLocaleDateString(dateLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-2">{ui.lastUpdated}</h3>
                    <p className="text-xl text-white">
                      {new Date(initiative.updatedAt).toLocaleDateString(dateLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 md:px-8 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fade-in" delay={600}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{ui.ctaTitle}</h2>
              <p className="text-lg text-gray-300 mb-8">{ui.ctaBody}</p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                {ui.contact}
                <ExternalLink size={16} />
              </Link>
            </AnimatedElement>
          </div>
        </section>
      </main>
    </div>
  )
}
