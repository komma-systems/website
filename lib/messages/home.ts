import type { Locale } from "@/lib/i18n"

type ApproachCard = { key: string; heading: string; description: string }

export type HomeMessages = {
  hero: {
    line1: string
    line2: string
    line3: string
    line4: string
    between: string
    and: string
  }
  sensingAlt: string
  actionAlt: string
  researchSubtitle: string
  intro1: string
  intro2: string
  partners: string
  ourApproach: string
  approachCards: ApproachCard[]
  initiatives: string
  loadingInitiatives: string
  collective: string
  collectiveIntro: string
  advisors: string
  advisorsIntro: string
}

const en: HomeMessages = {
  hero: {
    line1: "a pause, transition,",
    line2: "integration, or inflection",
    line3: "point punctuating the",
    line4: "dynamic relationship",
    between: "between",
    and: "and",
  },
  sensingAlt: "sensing",
  actionAlt: "action",
  researchSubtitle: "Research and strategy to \nforge a new civics",
  intro1:
    "is a venture collective utilising applied research, artistic inquiry and real-world demonstration to shift collective imagination on how we value, own and care for what is held in common.",
  intro2:
    "Our action is made possible through place-based partnerships with citizens, municipalities, philanthropy and the private sector to develop experiments, products and tools that conceptualise a new civics catalysed by decentralised technology.",
  partners: "Partners",
  ourApproach: "Our Approach",
  approachCards: [
    {
      key: "wealth",
      heading: "Inverting Civic Wealth",
      description:
        "Supporting communities through co-designing innovative economic tools to enhance control over housing and land ownership. Pooled funding, community-driven exit strategies, multi-capital currencies, and bioregional banking reshape how wealth flows within neighborhoods and interconnected communities.",
    },
    {
      key: "agreements",
      heading: "Modernising Agreements",
      description:
        "Crafting modular and automated governance, policy and legal frameworks that redefine how communities own and care. We work to implement interoperable organisational models to create scalable systems that meet evolving needs.",
    },
    {
      key: "rituals",
      heading: "Cultivating Playful Rituals",
      description:
        "Integrating governance into everyday life through the human-centric design. Including sociocratic decision-making, digital coordination tools, and innovative hardware to enhance collective collaboration by smoothly connecting digital and physical spaces.",
    },
  ],
  initiatives: "Initiatives",
  loadingInitiatives: "Loading initiatives...",
  collective: "The Collective",
  collectiveIntro:
    "Our collaborators bring together deep expertise across organisational design, agreements frameworks, financing tools, decentralised technologies, token engineering, and collective governance, with experience leading organisations, and working alongside leading institutions, who are advancing equitable, commons-based civic action.",
  advisors: "Advisors",
  advisorsIntro: "Our advisory board provides strategic guidance and expertise to support our mission.",
}

const de: HomeMessages = {
  hero: {
    line1: "eine Pause, ein Übergang,",
    line2: "eine Integration oder ein Wendepunkt,",
    line3: "der die dynamische Beziehung",
    line4: "strukturiert und ordnet —",
    between: "zwischen",
    and: "und",
  },
  sensingAlt: "Wahrnehmen",
  actionAlt: "Handeln",
  researchSubtitle: "Forschung und Strategie für \neine neue Zivilgesellschaft",
  intro1:
    "ist ein Venture-Kollektiv, das mit angewandter Forschung, künstlerischer Erkundung und realen Demonstratoren das kollektive Bild davon verschiebt, wie wir das Gemeingute schätzen, besitzen und pflegen.",
  intro2:
    "Unser Handeln wird durch ortsbezogene Partnerschaften mit Bürgerinnen und Bürgern, Kommunen, Philanthropie und der Privatwirtschaft möglich — um Experimente, Produkte und Werkzeuge zu entwickeln, die eine neue Zivilgesellschaft denken, ausgelöst durch dezentrale Technologie.",
  partners: "Partner",
  ourApproach: "Unser Ansatz",
  approachCards: [
    {
      key: "wealth",
      heading: "Ziviles Gemeinwohl neu denken",
      description:
        "Gemeinschaften unterstützen, indem wir innovative ökonomische Werkzeuge mitgestalten — für mehr Kontrolle über Wohnen und Land. Gemeinsame Finanzierung, gemeinschaftlich gesteuerte Exit-Strategien, Multi-Kapital-Währungen und bioregionales Banking verändern, wie Wohlstand in Quartieren und vernetzten Gemeinschaften fließt.",
    },
    {
      key: "agreements",
      heading: "Vereinbarungen modernisieren",
      description:
        "Modulare und automatisierte Governance-, Politik- und Rechtsrahmen, die neu definieren, wie Gemeinschaften besitzen und fürsorgen. Wir setzen interoperable Organisationsmodelle um, um skalierbare Systeme für sich wandelnde Bedürfnisse zu schaffen.",
    },
    {
      key: "rituals",
      heading: "Spielerische Rituale kultivieren",
      description:
        "Governance in den Alltag integrieren — humanzentriert gestaltet. Mit sociokratischer Entscheidungsfindung, digitalen Koordinationswerkzeugen und innovativer Hardware, die kollektive Zusammenarbeit verbindet und digitale und physische Räume nahtlos verzahnt.",
    },
  ],
  initiatives: "Initiativen",
  loadingInitiatives: "Initiativen werden geladen...",
  collective: "Das Kollektiv",
  collectiveIntro:
    "Unsere Kooperationspartnerinnen vereinen tiefe Expertise in Organisationsgestaltung, Vereinbarungsrahmen, Finanzierungsinstrumenten, dezentralen Technologien, Token-Engineering und kollektiver Governance — mit Erfahrung in Leitung von Organisationen und Zusammenarbeit mit führenden Institutionen, die eine gerechte, commons-basierte zivile Praxis voranbringen.",
  advisors: "Beirat",
  advisorsIntro: "Unser Beirat unterstützt unsere Mission mit strategischer Begleitung und Fachwissen.",
}

export const homeMessages: Record<Locale, HomeMessages> = { en, de }
