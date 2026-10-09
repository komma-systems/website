export const slidesHost = "slides.komma.systems"

export type Presentation = {
  id: string
  title: string
  summary: string
}

/** Newest first. Prepend a deck here when adding a presentation. */
export const presentations: readonly Presentation[] = [
  {
    id: "10x100-at-day-1500",
    title: "10x100 at Day 1500",
    summary:
      "The window opened at European Forum Alpbach in September 2022. Today is close to day 1500.",
  },
]

const deckIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

export function isDeckId(value: string): boolean {
  return deckIdPattern.test(value)
}

export function deckAssetPath(id: string): string {
  return `/slide-decks/${id}.html`
}

export function presentationHref(id: string, host: string | null): string {
  const hostname = host?.split(":")[0]?.toLowerCase() ?? ""
  if (hostname === slidesHost) return `/${id}`
  return `/slides/${id}`
}
