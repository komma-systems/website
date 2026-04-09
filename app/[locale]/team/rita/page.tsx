import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / Rita Palma",
    ...localeAlternatesMetadata("/team/rita", locale),
  }
}

export default function RitaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Rita Palma</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-300 mb-4">Artist and Researcher</p>
            <p className="text-gray-300 mb-4">Rita is an artist and researcher whose work centers on multispecies perspectives within organisational contexts. She explores the convergence of art and sustainability, developing creative and transdisciplinary experiences to challenge conventional paradigms and cultivate new imaginaries for transformative change.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Connect</h2>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rita-santos-palma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
