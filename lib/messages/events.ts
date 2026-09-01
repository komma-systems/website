import type { Locale } from "@/lib/i18n"
import { meldMessages } from "@/lib/messages/meld"

export type EventsMessages = {
  back: string
  title: string
  intro: string
  upcomingLabel: string
  pastLabel: string
  emptyUpcoming: string
}

const en: EventsMessages = {
  back: "← Back to KOMMA",
  title: "Events",
  intro: "Where you can find us: residencies, forums, and sessions where our work is live in the field.",
  upcomingLabel: "Upcoming",
  pastLabel: "Past",
  emptyUpcoming: "No upcoming events at the moment. Past events are listed below.",
}

const de: EventsMessages = {
  back: "← Zurück zu KOMMA",
  title: "Veranstaltungen",
  intro: "Wo Sie uns finden: Residenzen, Foren und Sitzungen, bei denen unsere Arbeit live im Einsatz ist.",
  upcomingLabel: "Kommend",
  pastLabel: "Vergangen",
  emptyUpcoming: "Derzeit keine kommenden Veranstaltungen. Vergangene Veranstaltungen finden Sie unten.",
}

export const eventsMessages: Record<Locale, EventsMessages> = { en, de }

export type SiteEvent = (typeof meldMessages)["en"]["field"][number]

// KOMMA-wide events that live on the homepage events section. Kept here as data
// so the /events page stays complete; the homepage markup is still hand-built.
const siteEventsEn: SiteEvent[] = [
  {
    tag: "Keynote",
    meta: ["10–12 Sep 2026", "Höllental, AT"],
    title: "KOMMA at the Valley of the Commons",
    body: "Clara keynotes “Housing as a Commons”: how land became property, and what a century of collective housing, from Red Vienna to La Borda, teaches about owning, funding and governing in common. Charlie follows with “Knowing at the Boundaries”, on mapping land ownership to open sites to community-led futures.",
    cta: "Programme →",
    href: "https://valleyofthecommons.com/",
    end: "2026-09-12",
  },
  {
    tag: "Forum",
    meta: ["15–16 Sep 2026", "Brussels, BE"],
    title: "Korea-EU Horizon Europe Researchers Consulting Forum",
    body: "Consortium building between Korean and European researchers towards the 2027 Horizon Europe Cluster 4 calls (Digital, Industry and Space), organised by the Korea-EU Research Centre (KERC) and the National Research Foundation of Korea.",
    cta: "Details →",
    href: "https://k-erc.eu/2026/08/horizon-europe-category/33982/",
    end: "2026-09-16",
  },
  {
    tag: "Workshop",
    meta: ["October 2026", "Vaduz, LI"],
    title: "Threshold #2: Designing Progressive Housing Mechanisms",
    body: "The second network gathering of practitioners, researchers and institutional actors advancing alternative housing models: diagnosing the housing system’s structural challenges, evaluating mechanisms such as Rent Credit Obligations and Tokenised Access Rights, and identifying European demonstration sites. Organised with Autonomic.",
    cta: "Register →",
    href: "https://luma.com/ycmcreer?tk=7ObFX9",
    start: "2026-10-01",
    end: "2026-10-31",
  },
]

const siteEventsDe: SiteEvent[] = [
  {
    tag: "Keynote",
    meta: ["10.–12. Sep 2026", "Höllental, AT"],
    title: "KOMMA beim Valley of the Commons",
    body: "Clara hält die Keynote „Housing as a Commons“: wie Land zu Eigentum wurde und was ein Jahrhundert kollektiven Wohnens, vom Roten Wien bis La Borda, über gemeinschaftliches Besitzen, Finanzieren und Verwalten lehrt. Charlie folgt mit „Knowing at the Boundaries“ über die Kartierung von Landeigentum, um Orte für gemeinschaftlich getragene Zukünfte zu öffnen.",
    cta: "Programm →",
    href: "https://valleyofthecommons.com/",
    end: "2026-09-12",
  },
  {
    tag: "Forum",
    meta: ["15.–16. Sep 2026", "Brüssel, BE"],
    title: "Korea-EU Horizon Europe Researchers Consulting Forum",
    body: "Konsortialbildung zwischen koreanischen und europäischen Forschenden für die Horizon-Europe-Cluster-4-Ausschreibungen 2027 (Digital, Industrie und Raumfahrt), organisiert vom Korea-EU Research Centre (KERC) und der National Research Foundation of Korea.",
    cta: "Einzelheiten →",
    href: "https://k-erc.eu/2026/08/horizon-europe-category/33982/",
    end: "2026-09-16",
  },
  {
    tag: "Workshop",
    meta: ["Oktober 2026", "Vaduz, LI"],
    title: "Threshold #2: Designing Progressive Housing Mechanisms",
    body: "Das zweite Netzwerktreffen von Praktiker:innen, Forschenden und institutionellen Akteuren, die alternative Wohnmodelle voranbringen: Diagnose der strukturellen Probleme des Wohnsystems, Bewertung von Mechanismen wie Rent Credit Obligations und Tokenised Access Rights sowie Identifikation europäischer Demonstrationsorte. Organisiert mit Autonomic.",
    cta: "Anmelden →",
    href: "https://luma.com/ycmcreer?tk=7ObFX9",
    start: "2026-10-01",
    end: "2026-10-31",
  },
]

const siteEvents: Record<Locale, SiteEvent[]> = { en: siteEventsEn, de: siteEventsDe }

// All dated events across the site: KOMMA-wide events plus the Meld field list.
export function allEvents(locale: Locale): SiteEvent[] {
  return [...siteEvents[locale], ...meldMessages[locale].field.filter((item) => item.end)]
}

export function splitEvents(locale: Locale, today: string) {
  const events = allEvents(locale)
  const upcoming = events
    .filter((e) => e.end! >= today)
    .sort((a, b) => ((a.start ?? a.end)! > (b.start ?? b.end)! ? 1 : -1))
  const past = events.filter((e) => e.end! < today).sort((a, b) => (a.end! < b.end! ? 1 : -1))
  return { upcoming, past }
}
