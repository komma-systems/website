import type { Locale } from "@/lib/i18n"

export type SlidesMessages = {
  back: string
  title: string
  intro: string
  open: string
  empty: string
}

const en: SlidesMessages = {
  back: "← Back to KOMMA",
  title: "Presentations",
  intro: "Latest presentations from KOMMA.",
  open: "Open presentation",
  empty: "No presentations yet.",
}

const de: SlidesMessages = {
  back: "← Zurück zu KOMMA",
  title: "Präsentationen",
  intro: "Aktuelle Präsentationen von KOMMA.",
  open: "Präsentation öffnen",
  empty: "Noch keine Präsentationen.",
}

export const slidesMessages: Record<Locale, SlidesMessages> = { en, de }
