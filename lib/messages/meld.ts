import type { Locale } from "@/lib/i18n"

export type MeldMessages = {
  tagline: [string, string]
  back: string
  side: {
    initiative: string
    stage: string
    stageValue: string
    places: string
    placesValue: string[]
    projects: string
    device: string
    team: string
    teamValue: string[]
    partners: string
    contact: string
    contactCta: string
  }
  intro: string[]
  problemLabel: string
  problem: string[]
  whatLabel: string
  what: { title: string; body: string }[]
  principlesLabel: string
  principles: { title: string; body: string }[]
  insideLabel: string
  featured: { tag: string; pill: string; title: string; body: string; imageAlt: string }
  cards: { tag: string; title: string; desc: string }[]
  fieldLabel: string
  field: { tag: string; meta: string[]; title: string; body: string; cta: string | null; href: string | null }[]
}

const en: MeldMessages = {
  back: "← Back to KOMMA",
  tagline: ["Making physical space programmable", "at the threshold of shared memory"],
  side: {
    initiative: "Initiative",
    stage: "Stage",
    stageValue: "In deployment",
    places: "Places",
    placesValue: ["Herzogtum Lauenburg, DE", "Ludwigslust-Parchim, DE", "Alpbach, AT"],
    projects: "Projects",
    device: "Device",
    team: "Team",
    teamValue: ["Charlie Fisher (Project Lead)", "Robert Matijevic (Technical Lead)"],
    partners: "Partners",
    contact: "Contact",
    contactCta: "Work with Meld →",
  },
  intro: [
    "Assemblies, consultations, and workshops produce hours of spoken deliberation that is hard to track, harder to compare, and rarely reflected in the decisions that follow. Governance fails because what people say disappears.",
    "Meld is KOMMA's answer. A hardware device and privacy-preserving platform that captures deliberation in the room, processes it locally, and returns it to the people who spoke, without raw audio ever leaving the space.",
  ],
  problemLabel: "The Problem",
  problem: [
    "The tools available today force a bad choice. Either the audio goes to commercial cloud AI, which public-sector settings cannot responsibly accept, or it becomes a flat transcript that someone spends hours analysing by hand. Either way, the knowledge citizens generate never takes a durable form that could accumulate, travel between places, or inform the next decision, so each assembly starts over from the beginning without the accumulated context.",
  ],
  whatLabel: "What Meld Does",
  what: [
    { title: "Capture", body: "The device sits in the room. Participants consent with a physical NFC tap, and transcription and anonymisation happen on the device itself, running KairOS." },
    { title: "Structure", body: "After each session, a knowledge graph maps the themes, the relationships between contributions, and how positions shift from one session to the next." },
    { title: "Return", body: "Through the Kair platform, facilitators and participants receive the conversation back, legible, comparable, and ready to act on." },
  ],
  principlesLabel: "Design Principles",
  principles: [
    {
      title: "Consent as action",
      body: "Nothing is captured before an NFC tap, and anyone can withdraw at any time without identifying themselves.",
    },
    {
      title: "Edge-first",
      body: "Raw audio stays on local hardware, and the system runs without internet, built for rural and low-connectivity settings.",
    },
    {
      title: "Minimal trace by default",
      body: "Exports carry graph structures and metadata only, useful without being personally attributable.",
    },
  ],
  insideLabel: "Inside the initiative",
  featured: {
    tag: "Deployment",
    pill: "Announcement coming soon",
    title: "First production deployment",
    body: "Meld is entering its first production deployment through a publicly funded programme in rural Germany. Full details of the implementation, the places involved, and our partners will be announced here shortly.",
    imageAlt: "The Meld device and the Kair app",
  },
  cards: [
    {
      tag: "Platform",
      title: "Kair",
      desc: "Structures deliberation into a queryable knowledge graph, with an open API to build on.",
    },
    {
      tag: "Hardware",
      title: "Device",
      desc: "Captures and processes deliberation in the room. Raw audio never leaves it.",
    },
  ],
  fieldLabel: "From the field",
  field: [
    {
      tag: "Forum",
      meta: ["26–30 Aug 2026", "Alpbach, AT"],
      title: "Meld at the European Forum Alpbach",
      body: "A live demonstration of Meld with the 10x100 network at the European Forum Alpbach: consent-first deliberation captured in the room, processed on the device, and returned to participants as structured sensemaking.",
      cta: "Register →",
      href: "https://10x100.kair.is/",
    },
    {
      tag: "Participate",
      meta: ["Ongoing"],
      title: "Bring Meld to your process",
      body: "We work with municipalities, assemblies, and facilitators who want their deliberation captured on their own terms. Get in touch to talk about a session or a pilot.",
      cta: "Talk to us about a pilot →",
      href: "/contact",
    },
  ],
}

const de: MeldMessages = {
  back: "← Zurück zu KOMMA",
  tagline: ["Physischen Raum programmierbar machen,", "an der Schwelle des gemeinsamen Gedächtnisses"],
  side: {
    initiative: "Initiative",
    stage: "Phase",
    stageValue: "Im Einsatz",
    places: "Orte",
    placesValue: ["Herzogtum Lauenburg, DE", "Ludwigslust-Parchim, DE", "Alpbach, AT"],
    projects: "Projekte",
    device: "Gerät",
    team: "Team",
    teamValue: ["Charlie Fisher (Projektleitung)", "Robert Matijevic (Technische Leitung)"],
    partners: "Partner",
    contact: "Kontakt",
    contactCta: "Mit Meld arbeiten →",
  },
  intro: [
    "Versammlungen, Beteiligungsverfahren und Workshops erzeugen Stunden gesprochener Deliberation, die schwer nachzuverfolgen ist, sich kaum vergleichen lässt und sich selten in den Entscheidungen widerspiegelt, die darauf folgen. Governance scheitert, weil verschwindet, was Menschen sagen.",
    "Meld ist KOMMAs Antwort. Ein Hardware-Gerät und eine datenschutzfreundliche Plattform, die Deliberation im Raum erfasst, lokal verarbeitet und den Menschen zurückgibt, die gesprochen haben, ohne dass Rohaudio jemals den Raum verlässt.",
  ],
  problemLabel: "Das Problem",
  problem: [
    "Die heutigen Werkzeuge erzwingen eine schlechte Wahl. Entweder geht das Audio an kommerzielle Cloud-KI, was der öffentliche Sektor nicht verantworten kann, oder es wird zu einem flachen Transkript, das jemand in stundenlanger Handarbeit auswertet. So oder so gewinnt das Wissen, das Bürgerinnen und Bürger erzeugen, nie eine dauerhafte Form, die sich ansammeln, zwischen Orten wandern oder die nächste Entscheidung informieren könnte, und jede Versammlung beginnt wieder von vorn, ohne den angesammelten Kontext.",
  ],
  whatLabel: "Was Meld macht",
  what: [
    { title: "Erfassen", body: "Das Gerät steht im Raum. Teilnehmende willigen per NFC-Tippen ein; Transkription und Anonymisierung geschehen direkt auf dem Gerät, das auf KairOS läuft." },
    { title: "Strukturieren", body: "Nach jeder Sitzung bildet ein Wissensgraph die Themen ab, die Beziehungen zwischen Beiträgen, und wie sich Positionen von Sitzung zu Sitzung verschieben." },
    { title: "Zurückgeben", body: "Über die Kair-Plattform erhalten Moderierende und Teilnehmende das Gespräch zurück, lesbar, vergleichbar und handlungsfähig." },
  ],
  principlesLabel: "Gestaltungsprinzipien",
  principles: [
    {
      title: "Einwilligung als Handlung",
      body: "Nichts wird erfasst, bevor ein NFC-Tag getippt wurde, und jede Person kann sich jederzeit zurückziehen, ohne sich zu identifizieren.",
    },
    {
      title: "Edge-first",
      body: "Rohaudio bleibt auf der lokalen Hardware, und das System läuft ohne Internet, gebaut für ländliche Regionen mit schwacher Anbindung.",
    },
    {
      title: "Minimale Spuren als Standard",
      body: "Exporte enthalten nur Graphstrukturen und Metadaten, nützlich, ohne einzelnen Personen zuzuordnen zu sein.",
    },
  ],
  insideLabel: "In der Initiative",
  featured: {
    tag: "Einsatz",
    pill: "Ankündigung folgt in Kürze",
    title: "Erster Produktiveinsatz",
    body: "Meld geht über ein öffentlich gefördertes Programm im ländlichen Deutschland in seinen ersten Produktiveinsatz. Alle Einzelheiten zur Umsetzung, zu den beteiligten Orten und zu unseren Partnern werden hier in Kürze bekannt gegeben.",
    imageAlt: "Das Meld-Gerät und die Kair-App",
  },
  cards: [
    {
      tag: "Plattform",
      title: "Kair",
      desc: "Strukturiert Deliberation in einen abfragbaren Wissensgraphen, mit offener API zum Weiterbauen.",
    },
    {
      tag: "Hardware",
      title: "Gerät",
      desc: "Erfasst und verarbeitet Deliberation im Raum. Rohaudio verlässt es nie.",
    },
  ],
  fieldLabel: "Aus der Praxis",
  field: [
    {
      tag: "Forum",
      meta: ["26.–30. Aug 2026", "Alpbach, AT"],
      title: "Meld beim Europäischen Forum Alpbach",
      body: "Eine Live-Demonstration von Meld mit dem 10x100-Netzwerk beim Europäischen Forum Alpbach. Deliberation wird mit Einwilligung im Raum erfasst, auf dem Gerät verarbeitet und den Teilnehmenden als strukturierte Auswertung zurückgegeben.",
      cta: "Anmelden →",
      href: "https://10x100.kair.is/",
    },
    {
      tag: "Mitmachen",
      meta: ["Laufend"],
      title: "Meld in Ihren Prozess holen",
      body: "Wir arbeiten mit Kommunen, Versammlungen und Moderierenden, die ihre Deliberation zu eigenen Bedingungen erfassen wollen. Melden Sie sich, um über eine Sitzung oder ein Pilotprojekt zu sprechen.",
      cta: "Über ein Pilotprojekt sprechen →",
      href: "/contact",
    },
  ],
}

export const meldMessages: Record<Locale, MeldMessages> = { en, de }
