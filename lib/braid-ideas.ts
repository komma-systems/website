export type BraidIdea = {
  id: string
  title: string
  summary: string
}

/** Newest first. */
export const braidIdeas: readonly BraidIdea[] = [
  {
    id: "BRAID-Phone-Recording",
    title: "BRAID Phone Recording",
    summary: "How participants join a session with their own phone. No account needed.",
  },
  {
    id: "BRAID-Handy-Aufnahme",
    title: "BRAID Handy-Aufnahme",
    summary: "So nehmen Teilnehmende mit dem eigenen Handy an einer Sitzung teil. Ein Konto ist nicht nötig.",
  },
]

const knownIds = new Set(braidIdeas.map((idea) => idea.id))

export function isBraidIdeaId(value: string): boolean {
  return knownIds.has(value)
}

export function braidIdeaAssetPath(id: string): string {
  return `/meld/braid-ideas/${id}.html`
}

export function braidIdeaHref(id: string): string {
  return `/meld/braid-ideas/${id}`
}
