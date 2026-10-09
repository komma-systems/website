export type Presentation = {
  title: string
  summary: string
  path: string
}

/** Newest first. Prepend a deck here when adding a presentation. */
export const presentations: readonly Presentation[] = [
  {
    title: "10x100 at Day 1500",
    summary:
      "The window opened at European Forum Alpbach in September 2022. Today is close to day 1500.",
    path: "/decks/10x100-at-day-1500.html",
  },
]
