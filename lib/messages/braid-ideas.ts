import type { Locale } from "@/lib/i18n"

export type BraidIdeasMessages = {
  back: string
  title: string
  intro: string
  open: string
  empty: string
}

const en: BraidIdeasMessages = {
  back: "← Back to Meld",
  title: "Braid ideas",
  intro: "Short guides for joining a Braid session from a phone.",
  open: "Open",
  empty: "No guides yet.",
}

const de: BraidIdeasMessages = {
  back: "← Zurück zu Meld",
  title: "Braid-Ideen",
  intro: "Kurze Anleitungen, um einer Braid-Sitzung mit dem Handy beizutreten.",
  open: "Öffnen",
  empty: "Noch keine Anleitungen.",
}

export const braidIdeasMessages: Record<Locale, BraidIdeasMessages> = { en, de }
