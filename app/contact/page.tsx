import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation hideContact />

      <main className="flex-1 flex items-center justify-center p-6 sm:p-8 md:p-12 pt-16 sm:pt-20">
        <div className="w-full max-w-4xl">
          <div className="flex items-center mb-8 sm:mb-10 md:mb-12">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="text-sm uppercase tracking-wider font-silkscreen">Back</span>
            </Link>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 komma-title">Contact</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-base sm:text-lg">
                We're always interested in new collaborations and projects. Get in touch to discuss how we can work
                together.
              </p>

              <div className="space-y-4 mt-6 sm:mt-8">
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

            <div className="bg-[#111] p-6 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}
