"use client"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      setIsLoading(true)
      
      const form = event.currentTarget
      const formData = new FormData(form)
      const email = formData.get("email") as string
      const message = formData.get("message") as string

      if (!email || !message) {
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
          to: "hello@komma.systems",
          from: "Komma Systems <onboarding@resend.dev>",
          subject: "New Contact Form Submission",
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      toast({
        title: "Success",
        description: "Message sent successfully! We'll get back to you soon.",
      })

      // Reset form
      form.reset()
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

  return (
    <form onSubmit={handleSubmit} className="space-y-8 font-sans">
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