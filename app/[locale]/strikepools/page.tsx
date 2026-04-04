"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"

export default function StrikepoolsPage() {
  const params = useParams()
  const raw = params.locale as string
  const locale: Locale = isLocale(raw) ? raw : defaultLocale

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation hideContact={false} />

      <main className="flex-1 flex flex-col pt-12">
        {/* Hero Section - matching main site styling */}
        <section className="flex items-start justify-center px-4 pt-2 min-h-[80vh]">
          <div className="w-full max-w-4xl mt-8 md:mt-16">
            <div className="flex flex-col md:flex-row md:items-start gap-5 md:gap-16">
              <div className="text-left mb-5 md:mb-0">
                <span className="komma-title text-4xl md:text-5xl block text-white">
                  Strike Pools
                </span>
              </div>
              <div className="text-lg md:text-xl lg:text-2xl leading-relaxed space-y-2">
                <p className="pb-8 text-white">
                  A KOMMA initiative
                  <br />
                  <span className="text-gray-400">Coming soon</span>
                </p>
                <Link
                  href={`/${locale}`}
                  className="inline-block text-white/80 hover:text-white transition-colors text-base underline underline-offset-4"
                >
                  ← Back to KOMMA
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
