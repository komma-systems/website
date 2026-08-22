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
    cta: string
    paths: { title: string; body: string; action: string; cta: string }[]
  }
  howWeWork: string
  howWeWorkLead: string
  howWeWorkLead2: string
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
    "A research and\ncivic technology studio using\nartistic inquiry and real-world demonstration to shift collective imagination around how we value, own, govern and care for what we hold in common, beginning with land and housing.",
  intro2:
    "Our action is made possible through place-based partnerships with citizens, municipalities, philanthropy and the private sector. Together, we research, design and test new mechanisms across governance, finance, relations and technology.",
  intro3:
    "We demonstrate them in real places, document what works as patterns, and turn those patterns into models, tools and civic technologies that others can use and adapt.",
  partners: "Partners",
  partnersIntro: "Working with organisations advancing new forms of collective action.",
  who: {
    label: "Who we work with",
    lead: "Our work is made possible through place-based partnerships. We work with the people closest to the ground, the institutions that shape the territory, and the organisations that can help new models take root and be adapted in new contexts.",
    cta: "Let\u2019s talk",
    paths: [
      {
        title: "Public institutions",
        body: "Municipalities, districts and public agencies facing housing, participation and other collective challenges within real institutional constraints.",
        action: "We work alongside existing teams to understand the conditions, design new mechanisms and test them in practice.",
        cta: "Talk to us about your process",
      },
      {
        title: "Funders and philanthropy",
        body: "Foundations, philanthropies and public funding programmes looking to turn research and capital into practical experiments with wider relevance.",
        action: "We connect funding to real places, producing demonstrators, evidence and tools that can inform what comes next.",
        cta: "Talk to us about funding a project",
      },
      {
        title: "Private businesses",
        body: "Developers, operators, tourism actors and technology companies whose work shapes a place or depends on it.",
        action: "We design partnerships and mechanisms that connect commercial activity with the long-term value and care of a place.",
        cta: "Talk to us about a partnership",
      },
      {
        title: "Communities and land projects",
        body: "Cooperatives, land trusts, tenant groups and neighbourhood initiatives building new forms of collective ownership and care.",
        action: "We help turn a shared ambition into the relationships, mechanisms and infrastructure needed to make it viable.",
        cta: "Talk to us about your project",
      },
      {
        title: "Researchers and\ninstitutional partners",
        body: "Universities, institutes and practices exploring new approaches to land, housing, governance and civic technology.",
        action: "We bring applied research into contact with real places, combining different forms of knowledge to develop and test new approaches.",
        cta: "Talk to us about collaborating",
      },
      {
        title: "European consortia",
        body: "Coordinators and partners assembling European research and innovation projects, from Horizon Europe to EIT and Erasmus+.",
        action: "We contribute live pilots, civic technology expertise, community relationships and deployment experience, grounding proposals in real places and practical work.",
        cta: "Talk to us about your consortium",
      },
    ],
  },
  howWeWork: "How we work",
  howWeWorkLead: "We start from the realities of a place, working with the people and institutions already shaping it. Together, we research, design and test new mechanisms across governance, finance, relations and technology.",
  howWeWorkLead2: "We demonstrate them, document what works as patterns, and turn those patterns into models, tools and civic technologies that others can use and adapt. What we learn in one place can inform what is built in another.",
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
  areasIntro: "The mechanisms we develop respond to the specific conditions of each place. They might change how resources are financed, how ownership and governance are structured, how people coordinate, or the infrastructure through which they act together. Rather than applying a fixed model, we combine these different levers to build what the situation requires.",
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
    "Ein Studio für Forschung und\nzivilgesellschaftliche Technologie,\ndas mit künstlerischer Erkundung und realen Demonstratoren das kollektive Bild davon verschiebt, wie wir das gemeinsam Gehaltene schätzen, besitzen, verwalten und pflegen, beginnend mit Boden und Wohnen.",
  intro2:
    "Unser Handeln wird durch ortsbezogene Partnerschaften mit Bürgerinnen und Bürgern, Kommunen, Philanthropie und der Privatwirtschaft möglich. Gemeinsam erforschen, entwerfen und erproben wir neue Mechanismen in Governance, Finanzen, Beziehungen und Technologie.",
  intro3:
    "Wir demonstrieren sie an realen Orten, dokumentieren als Muster, was funktioniert, und übersetzen diese Muster in Modelle, Werkzeuge und zivilgesellschaftliche Technologien, die andere nutzen und anpassen können.",
  partners: "Partner",
  partnersIntro: "Wir arbeiten mit Organisationen, die neue Formen kollektiven Handelns vorantreiben.",
  who: {
    label: "Mit wem wir arbeiten",
    lead: "Unsere Arbeit wird durch ortsbezogene Partnerschaften möglich. Wir arbeiten mit den Menschen vor Ort, mit den Institutionen, die das Territorium prägen, und mit den Organisationen, die neuen Modellen helfen können, Wurzeln zu schlagen und in neuen Kontexten Anwendung zu finden.",
    cta: "Sprechen Sie mit uns",
    paths: [
      {
        title: "Öffentliche Institutionen",
        body: "Kommunen, Landkreise und Behörden, die Wohnen, Beteiligung und andere kollektive Aufgaben innerhalb realer institutioneller Zwänge bewältigen.",
        action: "Wir arbeiten an der Seite bestehender Teams, um die Bedingungen zu verstehen, neue Mechanismen zu entwerfen und sie in der Praxis zu erproben.",
        cta: "Sprechen Sie mit uns über Ihren Prozess",
      },
      {
        title: "Förderer und Philanthropie",
        body: "Stiftungen, Philanthropie und öffentliche Förderprogramme, die Forschung und Kapital in praktische Experimente mit größerer Relevanz verwandeln wollen.",
        action: "Wir verbinden Förderung mit realen Orten und schaffen Demonstratoren, Evidenz und Werkzeuge, die prägen können, was als Nächstes kommt.",
        cta: "Sprechen Sie mit uns über eine Förderung",
      },
      {
        title: "Privatwirtschaft",
        body: "Entwickler, Betreiber, Tourismusakteure und Technologieunternehmen, deren Arbeit einen Ort prägt oder von ihm abhängt.",
        action: "Wir gestalten Partnerschaften und Mechanismen, die wirtschaftliche Aktivität mit dem langfristigen Wert und der Pflege eines Ortes verbinden.",
        cta: "Sprechen Sie mit uns über eine Partnerschaft",
      },
      {
        title: "Gemeinschaften und Landprojekte",
        body: "Genossenschaften, Land-Trusts, Mietergruppen und Nachbarschaftsinitiativen, die neue Formen kollektiven Eigentums und kollektiver Sorge aufbauen.",
        action: "Wir helfen, aus einer geteilten Ambition die Beziehungen, Mechanismen und Infrastruktur zu entwickeln, die sie tragfähig machen.",
        cta: "Sprechen Sie mit uns über Ihr Projekt",
      },
      {
        title: "Forschende und\ninstitutionelle Partner",
        body: "Universitäten, Institute und Praxen, die neue Ansätze zu Land, Wohnen, Governance und ziviler Technologie erproben.",
        action: "Wir bringen angewandte Forschung in Kontakt mit realen Orten und verbinden unterschiedliche Formen von Wissen, um neue Ansätze zu entwickeln und zu erproben.",
        cta: "Sprechen Sie mit uns über eine Zusammenarbeit",
      },
      {
        title: "Europäische Konsortien",
        body: "Koordinatoren und Partner, die europäische Forschungs- und Innovationsprojekte aufbauen, von Horizon Europe bis EIT und Erasmus+.",
        action: "Wir bringen laufende Piloten, Expertise in ziviler Technologie, Beziehungen zu Gemeinschaften und Einsatzerfahrung ein und verankern Anträge in realen Orten und praktischer Arbeit.",
        cta: "Sprechen Sie mit uns über Ihr Konsortium",
      },
    ],
  },
  howWeWork: "Wie wir arbeiten",
  howWeWorkLead: "Wir beginnen bei den Realitäten eines Ortes und arbeiten mit den Menschen und Institutionen, die ihn bereits prägen. Gemeinsam erforschen, entwerfen und erproben wir neue Mechanismen in Governance, Finanzen, Beziehungen und Technologie.",
  howWeWorkLead2: "Wir demonstrieren sie, dokumentieren als Muster, was funktioniert, und übersetzen diese Muster in Modelle, Werkzeuge und zivilgesellschaftliche Technologien, die andere nutzen und anpassen können. Was wir an einem Ort lernen, kann einfließen in das, was an einem anderen entsteht.",
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
  areasIntro: "Die Mechanismen, die wir entwickeln, antworten auf die spezifischen Bedingungen jedes Ortes. Sie können verändern, wie Ressourcen finanziert werden, wie Eigentum und Governance strukturiert sind, wie Menschen sich koordinieren oder über welche Infrastruktur sie gemeinsam handeln. Wir kombinieren diese Hebel, um zu bauen, was die Situation verlangt.",
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
