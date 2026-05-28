import type { Locale } from "@/lib/i18n"

type ApproachCard = { key: string; heading: string; description: string }

export type HomeMessages = {
  hero: {
    headline: string
    kinetic: string
    sub: string
  }
  intro1: string
  intro2: string
  whyHeading: string
  whyBody1: string
  whyBody2: string
  partners: string
  ourApproach: string
  ourApproachIntro: string
  strategiesHeading: string
  strategiesIntro: string
  approachCards: ApproachCard[]
  technologyHeading: string
  technologyBody: string
  initiatives: string
  loadingInitiatives: string
  collective: string
  collectiveIntro: string
  advisors: string
  advisorsIntro: string
  commaNote: string
}

const en: HomeMessages = {
  hero: {
    headline: "Enclosures,",
    kinetic: "unwound",
    sub: "We bring communities, public authorities and funders together to co-create new mechanisms and tools to hold land and housing in common.",
  },
  intro1:
    "KOMMA is a collective that uses applied research, artistic inquiry and real-world demonstration to shift how we value, own and care for what is held in common.",
  intro2:
    "We're architects, researchers, economists, technologists, facilitators and community builders who work from place to unlock the legal, cultural and economic means to hold land and housing in common.",
  whyHeading: "Unwinding enclosures",
  whyBody1:
    "Enclosure is the act of fencing land in. There is an older, stranger fence, built the other way around. An exclosure is fenced against grazing so that what is inside can recover and grow back. Inside it, something is allowed to return.",
  whyBody2:
    "Most of what we do takes the shape of an exclosure. We find one place where a fence can be loosened, and build a small, protected space for a community to hold land and housing together, kept open using the ordinary rules of the system around it. We do not try to undo everything at once; we loosen one thread at a time.",
  partners: "Partners",
  ourApproach: "Approach",
  ourApproachIntro:
    "Every project starts on the ground. We spend time in a place, learning how ownership, finance and law work there, and reading its social dynamics and momentum. We work in several places at once, so we can observe how similar patterns unfold. With the stakeholders involved, we co-design the mechanisms that loosen them, then build and test demonstrators in a specific place. The ones that work become tools other communities can adapt to their local contexts.",
  strategiesHeading: "Mechanism design strategies",
  strategiesIntro:
    "A mechanism is the working arrangement we build for a place: a concrete way for a community to hold land or housing together. Each one usually draws on several of the strategies below at once, in a mix shaped by the place.",
  approachCards: [
    {
      key: "wealth",
      heading: "Inverting Civic Wealth",
      description:
        "When a place improves, the gains usually go to whoever owns the property. We design ways to keep that value local and circulating: pooled funds, community-led exit strategies, multi-capital currencies, and bioregional banking.",
    },
    {
      key: "agreements",
      heading: "Modernising Agreements",
      description:
        "The legal form is where most of the unwinding happens. We build modular, adaptable agreements: bundles of rights, distributed and customary validation, and contracts that are easy to read and change.",
    },
    {
      key: "rituals",
      heading: "Cultivating Playful Rituals",
      description:
        "Agreements only hold if people use them. We bring governance into everyday life: sociocratic decision-making, simple digital tools, and hardware that connects physical and digital spaces.",
    },
  ],
  technologyHeading: "Technology",
  technologyBody:
    "Some of these mechanisms need software to run, so we build it ourselves: registries, pooled-commitment tools, ways for a group to decide together. We design it to run locally and stay in the hands of the people using it.",
  initiatives: "Initiatives",
  loadingInitiatives: "Loading initiatives...",
  collective: "The Collective",
  collectiveIntro:
    "Between us we have run funds, incubated co-ops, advised municipalities, and built the research and tools this work runs on.",
  advisors: "Advisors",
  advisorsIntro: "People we turn to for advice on finance, governance and technology.",
  commaNote:
    "A comma is a pause: a moment to slow down and understand before moving to action. That is the work, sensing and then action. Our value is in the pause.",
}

const de: HomeMessages = {
  hero: {
    headline: "Einhegungen,",
    kinetic: "aufgelöst",
    sub: "Wir bringen Gemeinschaften, öffentliche Verwaltungen und Fördernde zusammen, um gemeinsam neue Mechanismen und Werkzeuge zu entwickeln, Land und Wohnen gemeinschaftlich zu halten.",
  },
  intro1:
    "KOMMA ist ein Kollektiv, das mit angewandter Forschung, künstlerischer Erkundung und realen Demonstratoren verschiebt, wie wir das Gemeingut schätzen, besitzen und pflegen.",
  intro2:
    "Wir sind Architekt:innen, Forschende, Ökonom:innen, Technolog:innen, Moderator:innen und Community-Builder, die vom Ort aus arbeiten, um die rechtlichen, kulturellen und ökonomischen Mittel zu erschließen, Land und Wohnen gemeinschaftlich zu halten.",
  whyHeading: "Einhegungen rückgängig machen",
  whyBody1:
    "Einhegung ist das Einzäunen von Land. Es gibt einen älteren, seltsameren Zaun, andersherum gebaut. Eine Exclosure ist gegen Beweidung eingezäunt, damit das, was innen ist, sich erholen und nachwachsen kann. Innen darf etwas zurückkehren.",
  whyBody2:
    "Das meiste, was wir tun, hat die Form einer Exclosure. Wir finden einen Ort, an dem sich ein Zaun lockern lässt, und bauen einen kleinen, geschützten Raum, in dem eine Gemeinschaft Land und Wohnen gemeinsam halten kann, offen gehalten mit den gewöhnlichen Regeln des Systems ringsum. Wir versuchen nicht, alles auf einmal rückgängig zu machen; wir lockern einen Faden nach dem anderen.",
  partners: "Partner",
  ourApproach: "Ansatz",
  ourApproachIntro:
    "Jedes Projekt beginnt vor Ort. Wir verbringen Zeit an einem Ort und lernen, wie Eigentum, Finanzierung und Recht dort funktionieren, und lesen seine sozialen Dynamiken und sein Momentum. Wir arbeiten an mehreren Orten zugleich, sodass wir beobachten können, wie sich ähnliche Muster entfalten. Gemeinsam mit den Beteiligten gestalten wir die Mechanismen, die sie lockern, und bauen und erproben dann Demonstratoren an einem konkreten Ort. Die, die funktionieren, werden zu Werkzeugen, die andere Gemeinschaften an ihren lokalen Kontext anpassen können.",
  strategiesHeading: "Strategien im Mechanismus-Design",
  strategiesIntro:
    "Ein Mechanismus ist die konkrete Anordnung, die wir für einen Ort bauen: eine handfeste Art, wie eine Gemeinschaft Land oder Wohnen gemeinsam halten kann. Jeder stützt sich meist auf mehrere der folgenden Strategien zugleich, in einer vom Ort geprägten Mischung.",
  approachCards: [
    {
      key: "wealth",
      heading: "Ziviles Gemeinwohl neu denken",
      description:
        "Wenn ein Ort sich verbessert, gehen die Gewinne meist an die, denen die Immobilien gehören. Wir gestalten Wege, diesen Wert lokal und zirkulierend zu halten: gemeinsame Fonds, gemeinschaftlich gesteuerte Exit-Strategien, Multi-Kapital-Währungen und bioregionales Banking.",
    },
    {
      key: "agreements",
      heading: "Vereinbarungen modernisieren",
      description:
        "In der Rechtsform passiert das meiste Rückgängigmachen. Wir bauen modulare, anpassbare Vereinbarungen: Bündel von Rechten, verteilte und gewohnheitsmäßige Validierung und Verträge, die leicht zu lesen und zu ändern sind.",
    },
    {
      key: "rituals",
      heading: "Spielerische Rituale kultivieren",
      description:
        "Vereinbarungen halten nur, wenn Menschen sie nutzen. Wir bringen Governance in den Alltag: sociokratische Entscheidungsfindung, einfache digitale Werkzeuge und Hardware, die physische und digitale Räume verbindet.",
    },
  ],
  technologyHeading: "Technologie",
  technologyBody:
    "Manche dieser Mechanismen brauchen Software, also bauen wir sie selbst: Register, Werkzeuge für gepoolte Zusagen, Wege für eine Gruppe, gemeinsam zu entscheiden. Wir gestalten sie so, dass sie lokal läuft und in den Händen derer bleibt, die sie nutzen.",
  initiatives: "Initiativen",
  loadingInitiatives: "Initiativen werden geladen...",
  collective: "Das Kollektiv",
  collectiveIntro:
    "Zusammen haben wir Fonds verwaltet, Genossenschaften aufgebaut, Kommunen beraten und die Forschung und Werkzeuge entwickelt, auf denen diese Arbeit beruht.",
  advisors: "Beirat",
  advisorsIntro: "Menschen, die wir um Rat fragen, zu Finanzen, Governance und Technologie.",
  commaNote:
    "Ein Komma ist eine Pause: ein Moment, innezuhalten und zu verstehen, bevor man zum Handeln übergeht. Das ist die Arbeit, Wahrnehmen und dann Handeln. Unser Wert liegt in der Pause.",
}

export const homeMessages: Record<Locale, HomeMessages> = { en, de }
