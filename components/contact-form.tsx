"use client"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"

const successCopy: Record<
  Locale,
  { title: string; body: string; again: string }
> = {
  en: {
    title: "Message sent",
    body: "Thank you for reaching out. We will get back to you as soon as we can.",
    again: "Send another message",
  },
  de: {
    title: "Nachricht gesendet",
    body: "Vielen Dank für Ihre Nachricht. Wir melden uns so bald wie möglich bei Ihnen.",
    again: "Weitere Nachricht senden",
  },
}

type ContactFormProps = {
  locale?: string
}

export function ContactForm({ locale: localeProp }: ContactFormProps = {}) {
  const locale: Locale =
    localeProp !== undefined && isLocale(localeProp) ? localeProp : defaultLocale
  const t = successCopy[locale]
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      setIsLoading(true)
      
      const form = event.currentTarget
      const formData = new FormData(form)
      const name = formData.get("name") as string
      const email = formData.get("email") as string
      const message = formData.get("message") as string

      if (!name || !email || !message) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "All fields are required",
        })
        return
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      let data: { error?: string } = {}
      try {
        data = (await response.json()) as { error?: string }
      } catch {
        // non-JSON error body
      }

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.error || "Failed to send message. Please try again later.",
        })
        return
      }

      form.reset()
      setSubmitted(true)
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="space-y-6 font-sans text-center sm:text-left" role="status" aria-live="polite">
        <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
          <svg
            className="h-6 w-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-medium text-white font-silkscreen uppercase tracking-wider">{t.title}</h2>
          <p className="text-base text-white/80 leading-relaxed">{t.body}</p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-white hover:to-blue-500 hover:border-transparent hover:text-black"
        >
          {t.again}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 font-sans">
      <div className="space-y-4">
        <label htmlFor="name" className="block text-sm uppercase tracking-wider text-white/60 font-silkscreen">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
          disabled={isLoading}
          className="w-full bg-transparent rounded-lg p-3 text-base border border-white/10 focus:border-white placeholder:text-white/40 resize-none transition-colors disabled:opacity-50"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="email" className="block text-sm uppercase tracking-wider text-white/60 font-silkscreen">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          disabled={isLoading}
          className="w-full bg-transparent rounded-lg p-3 text-base border border-white/10 focus:border-white placeholder:text-white/40 resize-none transition-colors disabled:opacity-50"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-sm uppercase tracking-wider text-white/60 font-silkscreen">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          disabled={isLoading}
          spellCheck="false"
          suppressHydrationWarning
          className="w-full bg-transparent rounded-lg p-3 text-base border border-white/10 focus:border-white placeholder:text-white/40 resize-none transition-colors disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gradient-to-r hover:from-pink-500 hover:via-white hover:to-blue-500 hover:border-transparent hover:text-black"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
} 