import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />

      <main className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12 pt-16 sm:pt-20">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 komma-title">Contact</h1>

          <div className="space-y-6">
            <p className="text-base sm:text-lg">
              We're always interested in new collaborations and projects. Get in touch to discuss how we can work
              together.
            </p>

            <div className="space-y-4 mt-6 sm:mt-8">
              <div>
                <h2 className="text-xs sm:text-sm uppercase tracking-wider text-white/60 mb-1">Email</h2>
                <a
                  href="mailto:hello@komma.systems"
                  className="text-base sm:text-lg hover:text-blue-300 transition-colors"
                >
                  hello@komma.systems
                </a>
              </div>

              <div>
                <h2 className="text-xs sm:text-sm uppercase tracking-wider text-white/60 mb-1">Social</h2>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="hover:opacity-80 transition-opacity text-base sm:text-lg">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
