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
  intro3: string
  partners: string
  partnersIntro: string
  who: {
    label: string
    lead: string
    paths: { title: string; body: string; action: string; cta: string }[]
  }
  howWeWork: string
  howWeWorkLead: string
  howSteps: { key: string; label: string; description: string }[]
  howClosingLead: string
  howClosing: string
  ourApproach: string
  areasHeading: string
  areasIntro: string
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
    "A research and civic technology studio using artistic inquiry and real-world demonstration to shift collective imagination around how we value, own, govern and care for what we hold in common, beginning with land and housing.",
  intro2:
    "Our action is made possible through place-based partnerships with citizens, municipalities, philanthropy and the private sector. Together, we research, design and test new mechanisms across governance, finance, relations and technology.",
  intro3:
    "We demonstrate them in real places, document what works as patterns, and turn those patterns into models, tools and civic technologies that others can use and adapt.",
  partners: "Partners",
  partnersIntro: "Working with organisations advancing new forms of collective action.",
  who: {
    label: "Who we work with",
    lead: "We work with the people closest to a place, the institutions that shape it, and the organisations that support or extend what is being built there. Depending on the project, they join us as partners, as funders, or as both.",
    paths: [
      {
        title: "Public institutions",
        body: "Municipalities, districts and public agencies navigating housing, participation and other collective challenges within real institutional constraints.",
        action: "We work alongside existing teams to research conditions, design new mechanisms and test them in practice.",
        cta: "Talk to us about your process",
      },
      {
        title: "Funders and philanthropy",
        body: "Foundations, philanthropies and public funding programmes, from local grants to EU instruments, looking to turn knowledge and capital into practical experiments with wider potential.",
        action: "We connect research and funding to real places, building demonstrators, evidence and tools rather than research that ends with a report.",
        cta: "Talk to us about funding a project",
      },
      {
        title: "Communities and land projects",
        body: "Cooperatives, land trusts, tenant groups and neighbourhood initiatives building new forms of collective ownership and care.",
        action: "We help turn a shared ambition into the mechanisms, relationships and infrastructure needed to make it viable.",
        cta: "Talk to us about your project",
      },
      {
        title: "Private businesses",
        body: "Companies whose work shapes a place or depends on it: developers, operators, tourism actors and technology firms.",
        action: "We design mechanisms and partnerships through which commercial activity contributes to what a place holds in common.",
        cta: "Talk to us about a partnership",
      },
      {
        title: "Researchers and partners",
        body: "Universities, institutes, practices and organisations exploring new approaches to land, housing, governance and civic technology.",
        action: "We bring research, fieldwork and experimentation together, in direct collaborations and as partners in European consortia, where different forms of knowledge and capability produce something neither could build alone.",
        cta: "Talk to us about collaborating",
      },
    ],
  },
  howWeWork: "How we work",
  howWeWorkLead: "We start from the realities of a place, working with the people and institutions already shaping it. What we learn in one place can inform what is built in another.",
  howSteps: [
    { key: "research", label: "Research", description: "Understand the conditions, relationships and systems shaping what is possible in a place." },
    { key: "design", label: "Mechanism Design", description: "Develop new mechanisms of governance, finance, relations and technology with the people involved." },
    { key: "demonstrate", label: "Demonstrators", description: "Build and test them in real places, with the communities and institutions involved." },
    { key: "learn", label: "Patterns", description: "Document what works, what does not, and why, turning experience into patterns that can travel." },
    { key: "adapt", label: "Tools", description: "Build the tools and infrastructure that help others use and adapt proven mechanisms." },
  ],
  howClosingLead: "One place informs the next.",
  howClosing: "A mechanism proven in one place can be picked up in another, with each place starting further ahead.",
  ourApproach: "Areas of practice",
  areasHeading: "Areas of practice",
  areasIntro: "We develop these mechanisms across four interconnected areas.",
  approachCards: [
    {
      key: "wealth",
      heading: "Inverting Civic Wealth",
      description:
        "Supporting communities through co-designing innovative economic tools to enhance control over housing and land ownership. Pooled funding, community-driven exit strategies, multi-capital currencies, and bioregional banking reshape how wealth flows within neighbourhoods and interconnected communities.",
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
        "Integrating governance into everyday life through human-centric design. Including sociocratic decision-making, digital coordination tools, and innovative hardware to enhance collective collaboration by smoothly connecting digital and physical spaces.",
    },
    {
      key: "technology",
      heading: "Building Civic Technology",
      description:
        "We build the technology these mechanisms run on. AI that processes deliberation on the device, hardware built for the room, knowledge graphs that keep collective positions traceable, and decentralised registries validated by many hands. Prototyped in real deployments and designed to stay with the communities using them.",
    },
  ],
  initiatives: "Initiatives",
  loadingInitiatives: "Loading initiatives...",
  collective: "The Collective",
  collectiveIntro:
    "Our collaborators bring deep expertise from leading organisations and institutions advancing equitable, commons-based civic action.",
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
    "Ein Studio für Forschung und zivilgesellschaftliche Technologie, das mit künstlerischer Erkundung und realen Demonstratoren das kollektive Bild davon verschiebt, wie wir das gemeinsam Gehaltene schätzen, besitzen, verwalten und pflegen, beginnend mit Boden und Wohnen.",
  intro2:
    "Unser Handeln wird durch ortsbezogene Partnerschaften mit Bürgerinnen und Bürgern, Kommunen, Philanthropie und der Privatwirtschaft möglich. Gemeinsam erforschen, entwerfen und erproben wir neue Mechanismen in Governance, Finanzen, Beziehungen und Technologie.",
  intro3:
    "Wir demonstrieren sie an realen Orten, dokumentieren als Muster, was funktioniert, und übersetzen diese Muster in Modelle, Werkzeuge und zivilgesellschaftliche Technologien, die andere nutzen und anpassen können.",
  partners: "Partner",
  partnersIntro: "Wir arbeiten mit Organisationen, die neue Formen kollektiven Handelns vorantreiben.",
  who: {
    label: "Mit wem wir arbeiten",
    lead: "Wir arbeiten mit den Menschen, die einem Ort am nächsten sind, mit den Institutionen, die ihn prägen, und mit den Organisationen, die das Entstehende stützen oder weitertragen. Je nach Projekt begleiten sie uns als Partner, als Förderer oder als beides.",
    paths: [
      {
        title: "Öffentliche Institutionen",
        body: "Kommunen, Landkreise und Behörden, die Wohnen, Beteiligung und andere kollektive Aufgaben innerhalb realer institutioneller Zwänge bewältigen.",
        action: "Wir arbeiten an der Seite bestehender Teams, erforschen Bedingungen, entwerfen neue Mechanismen und erproben sie in der Praxis.",
        cta: "Sprechen Sie mit uns über Ihren Prozess",
      },
      {
        title: "Förderer und Philanthropie",
        body: "Stiftungen, Philanthropie und öffentliche Förderprogramme, von lokalen Zuschüssen bis zu EU-Instrumenten, die Wissen und Kapital in praktische Experimente mit größerem Potenzial verwandeln wollen.",
        action: "Wir verbinden Forschung und Förderung mit realen Orten und bauen Demonstratoren, Evidenz und Werkzeuge, nicht Forschung, die mit einem Bericht endet.",
        cta: "Sprechen Sie mit uns über eine Förderung",
      },
      {
        title: "Gemeinschaften und Landprojekte",
        body: "Genossenschaften, Land-Trusts, Mietergruppen und Nachbarschaftsinitiativen, die neue Formen kollektiven Eigentums und kollektiver Sorge aufbauen.",
        action: "Wir helfen, aus einer geteilten Ambition die Mechanismen, Beziehungen und Infrastruktur zu entwickeln, die sie tragfähig machen.",
        cta: "Sprechen Sie mit uns über Ihr Projekt",
      },
      {
        title: "Privatwirtschaft",
        body: "Unternehmen, deren Arbeit einen Ort prägt oder von ihm abhängt: Entwickler, Betreiber, Tourismusakteure und Technologiefirmen.",
        action: "Wir gestalten Mechanismen und Partnerschaften, durch die wirtschaftliche Aktivität zu dem beiträgt, was ein Ort gemeinsam hält.",
        cta: "Sprechen Sie mit uns über eine Partnerschaft",
      },
      {
        title: "Forschende und Partner",
        body: "Universitäten, Institute, Praxen und Organisationen, die neue Ansätze zu Land, Wohnen, Governance und ziviler Technologie erproben.",
        action: "Wir bringen Forschung, Feldarbeit und Experiment zusammen, in direkten Kooperationen und als Partner in europäischen Konsortien, wo unterschiedliche Formen von Wissen und Können etwas hervorbringen, das keine Seite allein bauen könnte.",
        cta: "Sprechen Sie mit uns über eine Zusammenarbeit",
      },
    ],
  },
  howWeWork: "Wie wir arbeiten",
  howWeWorkLead: "Wir beginnen bei den Realitäten eines Ortes und arbeiten mit den Menschen und Institutionen, die ihn bereits prägen. Was wir an einem Ort lernen, kann einfließen in das, was an einem anderen entsteht.",
  howSteps: [
    { key: "research", label: "Forschung", description: "Die Bedingungen, Beziehungen und Systeme verstehen, die bestimmen, was an einem Ort möglich ist." },
    { key: "design", label: "Mechanismus-Design", description: "Neue Mechanismen für Governance, Finanzen, Beziehungen und Technologie gemeinsam mit den Beteiligten entwickeln." },
    { key: "demonstrate", label: "Demonstratoren", description: "Sie an realen Orten bauen und erproben, mit den beteiligten Gemeinschaften und Institutionen." },
    { key: "learn", label: "Muster", description: "Dokumentieren, was funktioniert, was nicht, und warum, und Erfahrung in Muster übersetzen, die wandern können." },
    { key: "adapt", label: "Werkzeuge", description: "Die Werkzeuge und Infrastruktur bauen, die anderen helfen, bewährte Mechanismen zu nutzen und anzupassen." },
  ],
  howClosingLead: "Ein Ort informiert den nächsten.",
  howClosing: "Ein Mechanismus, der sich an einem Ort bewährt hat, kann am nächsten aufgegriffen werden, und jeder Ort beginnt ein Stück weiter vorn.",
  ourApproach: "Praxisfelder",
  areasHeading: "Praxisfelder",
  areasIntro: "Wir entwickeln diese Mechanismen in vier miteinander verbundenen Feldern.",
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
    {
      key: "technology",
      heading: "Zivilgesellschaftliche Technologie bauen",
      description:
        "Wir bauen die Technologie, auf der diese Mechanismen laufen. KI, die Deliberation direkt auf dem Gerät verarbeitet, Hardware für den Raum, Wissensgraphen, die kollektive Positionen nachvollziehbar halten, und dezentrale Register, die von vielen Händen validiert werden. Erprobt in realen Einsätzen und so gestaltet, dass sie bei den Gemeinschaften bleibt, die sie nutzen.",
    },
  ],
  initiatives: "Initiativen",
  loadingInitiatives: "Initiativen werden geladen...",
  collective: "Das Kollektiv",
  collectiveIntro:
    "Unsere Kooperationspartnerinnen vereinen tiefe Expertise in der Leitung von Organisationen und arbeiten mit führenden Institutionen zusammen, die eine gerechte, commons-basierte zivile Praxis voranbringen.",
  advisors: "Beirat",
  advisorsIntro: "Unser Beirat unterstützt unsere Mission mit strategischer Begleitung und Fachwissen.",
}

export const homeMessages: Record<Locale, HomeMessages> = { en, de }
