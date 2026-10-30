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
    tag: "Conference",
    meta: ["3 to 6 Nov 2026", "Jio World Centre, Mumbai"],
    title: "KOMMA at Devcon 8",
    body: "KOMMA is at Devcon 8, Ethereum’s flagship gathering, in Mumbai: a talk on programmable cadastral institutions, letting a community govern its own land record with the rules for what is immutable, adjustable and discretionary held in verifiable infrastructure and privacy by design; the “Liability, Records & Justice” panel at the Onchain Legal Summit; and the EX:Risk: Dharavi installation. All at the Jio World Centre, Devcon’s first edition in India.",
    cta: "Devcon →",
    href: "https://devcon.org/",
    end: "2026-11-06",
  },
  {
    tag: "Panel",
    meta: ["3 to 6 Nov 2026", "Mumbai, IN"],
    title: "KOMMA at the Onchain Legal Summit",
    body: "KOMMA joins the “Liability, Records & Justice” panel at the Onchain Legal Summit, the legal and governance track of Devcon 8 Mumbai. The summit asks what an onchain entity is in law and who answers for it: we bring the view from land and housing, on how liability, civic records and justice hold up when ownership and entities move onchain. Held at the Legal & Governance Community Hub, at the main Devcon venue.",
    cta: "Register →",
    href: "https://luma.com/cw0h549b",
    end: "2026-11-06",
  },
  {
    tag: "Installation",
    meta: ["3 to 6 Nov 2026", "Jio World Centre, Mumbai"],
    title: "EX:Risk: Dharavi",
    body: "An installation of EX:Risk, KOMMA’s civic-sensing work, grounded in Dharavi: reading the early signs from the ground up, pairing what residents notice with what the data shows, so a neighbourhood and its municipal and regional levels can share one legible signal. Shown at the Jio World Centre during Devcon 8.",
    end: "2026-11-06",
  },
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
  {
    tag: "Exhibition",
    meta: ["3–6 Nov 2026", "Mumbai, IN"],
    title: "Ex:Risk Dharavi: weaving belonging",
    body: "A participatory, interactive installation by Clara, rooted in belonging and place, selected for the Infinite Garden Artist Cohort at Devcon 8 India.",
    cta: "Devcon →",
    href: "https://devcon.org/",
    end: "2026-11-06",
  },
]

const siteEventsDe: SiteEvent[] = [
  {
    tag: "Conference",
    meta: ["3. bis 6. Nov 2026", "Jio World Centre, Mumbai"],
    title: "KOMMA bei der Devcon 8",
    body: "KOMMA ist bei der Devcon 8, Ethereums wichtigstem Treffen, in Mumbai: mit einem Vortrag (talk) über programmierbare Katasterinstitutionen (programmable cadastral institutions), die es einer Gemeinschaft erlauben, ihr eigenes Landregister zu führen, wobei die Regeln für das, was unveränderlich, anpassbar und im Ermessen liegt, in überprüfbarer Infrastruktur gehalten werden, mit Datenschutz by design; auf dem Panel „Liability, Records & Justice“ (Haftung, Register und Justiz) beim Onchain Legal Summit; und mit der Installation EX:Risk: Dharavi. Alles im Jio World Centre, die erste Devcon in Indien.",
    cta: "Devcon →",
    href: "https://devcon.org/",
    end: "2026-11-06",
  },
  {
    tag: "Panel",
    meta: ["3. bis 6. Nov 2026", "Mumbai, IN"],
    title: "KOMMA beim Onchain Legal Summit",
    body: "KOMMA nimmt am Panel „Liability, Records & Justice“ (Haftung, Register und Justiz) beim Onchain Legal Summit teil, dem Rechts- und Governance-Track der Devcon 8 Mumbai. Der Summit fragt, was eine Onchain-Einheit rechtlich ist und wer für sie einsteht: Wir bringen die Perspektive aus Land und Wohnen ein, dazu, wie Haftung, zivile Register und Justiz standhalten, wenn Eigentum und Rechtsträger onchain wandern. Im Legal & Governance Community Hub, am Hauptveranstaltungsort der Devcon.",
    cta: "Anmelden →",
    href: "https://luma.com/cw0h549b",
    end: "2026-11-06",
  },
  {
    tag: "Installation",
    meta: ["3. bis 6. Nov 2026", "Jio World Centre, Mumbai"],
    title: "EX:Risk: Dharavi",
    body: "Eine Installation von EX:Risk, der Civic-Sensing-Arbeit (bürgernahe Sensorik) von KOMMA, verortet in Dharavi: Sie liest die frühen Signale von unten nach oben und verbindet, was Bewohner:innen bemerken, mit dem, was die Daten zeigen, sodass ein Viertel und seine kommunale und regionale Ebene ein gemeinsames, lesbares Signal teilen können. Gezeigt im Jio World Centre während der Devcon 8.",
    end: "2026-11-06",
  },
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
  {
    tag: "Ausstellung",
    meta: ["3.–6. Nov 2026", "Mumbai, IN"],
    title: "Ex:Risk Dharavi: Zugehörigkeit weben",
    body: "Eine partizipative, interaktive Installation von Clara, verwurzelt in Zugehörigkeit und Ort, ausgewählt für das Infinite Garden Artist Cohort (Künstler:innen-Kohorte) auf der Devcon 8 India.",
    cta: "Devcon →",
    href: "https://devcon.org/",
    end: "2026-11-06",
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
