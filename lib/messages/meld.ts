import type { Locale } from "@/lib/i18n"

export type MeldMessages = {
  tagline: [string, string]
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
  what: string[]
  principlesLabel: string
  principles: { title: string; body: string }[]
  insideLabel: string
  featured: { tag: string; pill: string; title: string; body: string; imageAlt: string }
  cards: { tag: string; title: string; desc: string }[]
  fieldLabel: string
  field: { tag: string; meta: string[]; title: string; body: string; cta: string | null; href: string | null }[]
}

const en: MeldMessages = {
  tagline: ["Making physical space programmable", "at the threshold of shared memory"],
  side: {
    initiative: "Initiative",
    stage: "Stage",
    stageValue: "In deployment",
    places: "Places",
    placesValue: ["Rural Germany", "Alpbach, AT"],
    projects: "Projects",
    device: "Device",
    team: "Team",
    teamValue: ["Charlie Fisher (Project Lead)", "Robert Matijevic (Technical Lead)"],
    partners: "Partners",
    contact: "Contact",
    contactCta: "Work with Meld →",
  },
  intro: [
    "Governance fails because what people say disappears. Citizen assemblies, community consultations, and municipal workshops produce hours of spoken deliberation that is difficult to track, impossible to compare across sessions, and rarely reflected in the decisions that follow. Meld is KOMMA's initiative to address that.",
    "Meld is a hardware device and spatial AI platform designed for deployment in civic settings. It captures spoken deliberation in the room, processes it locally, and returns structured sensemaking outputs to facilitators and participants without raw audio ever leaving the space. It is the physical and technical infrastructure for a new kind of civic listening.",
  ],
  problemLabel: "The Problem",
  problem: [
    "Public deliberation sits at the heart of democratic renewal, but the tools available to it are broken. Existing approaches either rely on commercial cloud AI that creates unacceptable data sovereignty and privacy risks in public sector settings, or they produce flat transcripts that demand hours of manual analysis. Neither is fit for deployment in the places that need participatory tools most: under-resourced municipalities, rural communities, and administrations without specialist technical capacity.",
    "Beneath this is a deeper structural problem. Democratic processes generate rich, layered knowledge from citizens and communities, but that knowledge has no durable form. It does not accumulate. It does not travel. It does not inform the next session or the next decision. Each assembly starts from scratch.",
  ],
  whatLabel: "What Meld Does",
  what: [
    "The Meld device sits in the room during civic assemblies and public workshops. Participants register consent through a physical NFC tap before their voice enters the pipeline. Transcription, anonymisation, and initial sensemaking happen locally on the device, powered by KairOS, the operating system for relational technology developed within the initiative.",
    "After each session, the Embers Engine constructs a knowledge graph from the discussion: extracting themes, relationships, and patterns across contributions, and connecting them to prior sessions through a Temporal Deliberation Graph. Facilitators receive structured outputs that make the conversation legible, comparable, and actionable.",
    "The underlying platform is Kair, named for Kairos, the Greek concept of qualitative or relational time. Where Chronos measures the passing of moments, Kairos names the moment when something shifts. Kair is built to locate and hold those moments in civic life.",
  ],
  principlesLabel: "Design Principles",
  principles: [
    {
      title: "Consent as action",
      body: "Participation in the pipeline is an active, physical choice. Each participant taps an NFC tag before their contributions are captured. Withdrawal is possible at any time, at the level of a session or a single exchange, without requiring identification.",
    },
    {
      title: "Edge-first",
      body: "Raw audio stays on local hardware. Only de-identified transcripts and structured graph outputs leave the device. The platform operates without internet connectivity, which is essential for deployment in rural and low-connectivity settings.",
    },
    {
      title: "Minimal trace by default",
      body: "Exports contain graph structures and metadata only. The system is designed so that the outputs of deliberation are useful without being personally attributable.",
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
  tagline: ["Physischen Raum programmierbar machen,", "an der Schwelle des gemeinsamen Gedächtnisses"],
  side: {
    initiative: "Initiative",
    stage: "Phase",
    stageValue: "Im Einsatz",
    places: "Orte",
    placesValue: ["Ländliches Deutschland", "Alpbach, AT"],
    projects: "Projekte",
    device: "Gerät",
    team: "Team",
    teamValue: ["Charlie Fisher (Projektleitung)", "Robert Matijevic (Technische Leitung)"],
    partners: "Partner",
    contact: "Kontakt",
    contactCta: "Mit Meld arbeiten →",
  },
  intro: [
    "Governance scheitert, weil verschwindet, was Menschen sagen. Bürgerversammlungen, Beteiligungsverfahren und kommunale Workshops erzeugen Stunden gesprochener Deliberation, die schwer nachzuverfolgen ist, sich über Sitzungen hinweg kaum vergleichen lässt und sich selten in den Entscheidungen widerspiegelt, die darauf folgen. Meld ist KOMMAs Initiative, um das zu ändern.",
    "Meld ist ein Hardware-Gerät und eine räumliche KI-Plattform für den Einsatz in zivilgesellschaftlichen Kontexten. Es erfasst gesprochene Deliberation im Raum, verarbeitet sie lokal und gibt strukturierte Auswertungen an Moderierende und Teilnehmende zurück, ohne dass Rohaudio jemals den Raum verlässt. Es ist die physische und technische Infrastruktur für eine neue Art des zivilen Zuhörens.",
  ],
  problemLabel: "Das Problem",
  problem: [
    "Öffentliche Deliberation steht im Zentrum demokratischer Erneuerung, doch die verfügbaren Werkzeuge versagen. Bestehende Ansätze stützen sich entweder auf kommerzielle Cloud-KI, die im öffentlichen Sektor inakzeptable Risiken für Datensouveränität und Privatsphäre schafft, oder sie erzeugen flache Transkripte, die Stunden manueller Auswertung verlangen. Beides taugt nicht für die Orte, die Beteiligungswerkzeuge am dringendsten brauchen: unterfinanzierte Kommunen, ländliche Gemeinden und Verwaltungen ohne eigene technische Kapazitäten.",
    "Darunter liegt ein tieferes strukturelles Problem. Demokratische Prozesse erzeugen reiches, vielschichtiges Wissen von Bürgerinnen, Bürgern und Gemeinschaften, aber dieses Wissen hat keine dauerhafte Form. Es sammelt sich nicht an. Es wandert nicht. Es informiert weder die nächste Sitzung noch die nächste Entscheidung. Jede Versammlung beginnt bei null.",
  ],
  whatLabel: "Was Meld macht",
  what: [
    "Das Meld-Gerät steht während Bürgerversammlungen und öffentlichen Workshops im Raum. Teilnehmende erklären ihre Einwilligung durch ein physisches NFC-Tippen, bevor ihre Stimme in die Verarbeitung gelangt. Transkription, Anonymisierung und erste Auswertung geschehen lokal auf dem Gerät, betrieben von KairOS, dem in der Initiative entwickelten Betriebssystem für relationale Technologie.",
    "Nach jeder Sitzung baut die Embers Engine einen Wissensgraphen aus der Diskussion. Sie extrahiert Themen, Beziehungen und Muster über die Beiträge hinweg und verbindet sie über einen Temporal Deliberation Graph mit früheren Sitzungen. Moderierende erhalten strukturierte Ergebnisse, die das Gespräch lesbar, vergleichbar und handlungsfähig machen.",
    "Die zugrunde liegende Plattform ist Kair, benannt nach Kairos, dem griechischen Begriff für qualitative, relationale Zeit. Wo Chronos das Verstreichen der Momente misst, benennt Kairos den Moment, in dem sich etwas verschiebt. Kair ist gebaut, um diese Momente im zivilen Leben zu finden und zu halten.",
  ],
  principlesLabel: "Gestaltungsprinzipien",
  principles: [
    {
      title: "Einwilligung als Handlung",
      body: "Die Teilnahme an der Verarbeitung ist eine aktive, physische Entscheidung. Jede Person tippt einen NFC-Tag, bevor ihre Beiträge erfasst werden. Ein Rückzug ist jederzeit möglich, für eine Sitzung oder einen einzelnen Wortbeitrag, ohne dass eine Identifizierung nötig wäre.",
    },
    {
      title: "Edge-first",
      body: "Rohaudio bleibt auf der lokalen Hardware. Nur de-identifizierte Transkripte und strukturierte Graph-Ergebnisse verlassen das Gerät. Die Plattform funktioniert ohne Internetverbindung, was für den Einsatz in ländlichen Regionen mit schwacher Anbindung entscheidend ist.",
    },
    {
      title: "Minimale Spuren als Standard",
      body: "Exporte enthalten ausschließlich Graphstrukturen und Metadaten. Das System ist so gestaltet, dass die Ergebnisse der Deliberation nützlich sind, ohne einzelnen Personen zugeordnet werden zu können.",
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
