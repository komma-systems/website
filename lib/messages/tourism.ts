import type { Locale } from "@/lib/i18n"

export type TourismMessages = {
  tagline: [string, string]
  back: string
  side: {
    initiative: string
    initiativeValue: string
    stage: string
    stageValue: string
    places: string
    placesValue: string[]
    team: string
    teamValue: string[]
    contact: string
    contactCta: string
  }
  intro: string[]
  problemLabel: string
  problem: string[]
  whatLabel: string
  whatLead: string
  what: { title: string; body: string }[]
  principlesLabel: string
  principles: { title: string; body: string }[]
  pilotLabel: string
  pilotLead: string
  stats: { figure: string; body: string }[]
  tiers: string
  nextLabel: string
  next: string[]
}

const en: TourismMessages = {
  back: "← Back to KOMMA",
  tagline: [
    "Bringing tourism value home:",
    "funding housing and land commons from the value tourism extracts.",
  ],
  side: {
    initiative: "Initiative",
    initiativeValue: "Tourism-to-Housing Impact Fund",
    stage: "Stage",
    stageValue: "Exploration",
    places: "Places",
    placesValue: [
      "Pilot: Barcelona & Costa Brava, Catalonia",
      "Model for saturated destinations: Venice, the Greek islands",
    ],
    team: "Team",
    teamValue: ["Clara Gromaches (Project Lead)"],
    contact: "Contact",
    contactCta: "Work with us →",
  },
  intro: [
    "Tourism draws enormous value out of the places people visit, and leaves the costs behind: rising rents, displaced residents, a social fabric worn thin. The Tourism-to-Housing Impact Fund turns a share of that value back into the place it comes from, as permanently affordable housing held in common.",
    "It is a finance mechanism and a demonstrator, piloted in Barcelona and the Costa Brava in Catalonia, and built for the kind of destination where tourism pressure runs highest: Venice, the Greek islands, anywhere visitors price residents out of their own home.",
  ],
  problemLabel: "The Problem",
  problem: [
    "Two economies share one street. Over a decade, tourist numbers in Barcelona rose by half while rents climbed 68% and salaries by 3.4%. One in two renters is now at risk of poverty, and barely 1.2% of housing is social, against roughly 15% across the EU.",
    "Meanwhile the city's hotels clear about €1.5bn in profit a year. Tourism's gains flow to private operators and global platforms; its costs, the instability, the displacement, the upkeep of a strained public realm, stay with the community. The capital to buy land and buildings before the speculative market does is exactly what non-profit housing cannot reach.",
  ],
  whatLabel: "How it works",
  whatLead:
    "A five-step flow, with an ethical-finance partner holding the money and the municipality underpinning it with land, legal facilitation and political backing.",
  what: [
    {
      title: "Funders",
      body: "Tourism operators and impact investors join as members and contribute into the fund under multi-year agreements.",
    },
    {
      title: "The lender",
      body: "An ethical-finance partner holds the fund and lends where banks will not. In Catalonia that is Coop57 (the ethical-finance cooperative that already lends to cohousing), with Fiare Banca Etica (an ethical bank) as the alternative.",
    },
    {
      title: "The pool",
      body: "Inside sits a ring-fenced Tourism Impact Pool, a first-loss guarantee that returns certificates and a modest yield, and unlocks credit at several times its own size.",
    },
    {
      title: "The homes",
      body: "The fund lends to cooperative housing and land commons, co-ops and community land trusts, where residents repay an affordable use fee and legal wrappers lock each home out of the speculative market for good.",
    },
    {
      title: "The proof",
      body: "Stewards verify the homes and square metres delivered, the pool issues its certificates, and use fees recycle to service the members' return.",
    },
  ],
  principlesLabel: "Design Principles",
  principles: [
    {
      title: "Ownership to stewardship",
      body: "Every project funded is cooperative, resident-stewarded, and legally locked out of resale. The commons only grows.",
    },
    {
      title: "A reputation others chase",
      body: "Contributing earns a verified, tiered certificate, a star in a credible guide to impact-positive stays. Like the Michelin guide, it makes funding local housing the thing operators compete for.",
    },
    {
      title: "Counted in homes and square metres",
      body: "The only success metric is the number of permanently affordable homes and the area of housing-and-land commons created. The certificate proves both.",
    },
  ],
  pilotLabel: "The pilot",
  pilotLead:
    "A worked model for a single Barcelona building, conservative throughout.",
  stats: [
    {
      figure: "€2m",
      body: "pilot bond, 10 years at a tiered coupon of 0 to 2.5%, funding about 8 homes in Barcelona.",
    },
    {
      figure: "~60 homes / yr",
      body: "from even 1% of the city's annual hotel profit, and several times that once the pool backs credit.",
    },
    {
      figure: "€58bn to €90bn",
      body: "forecast impact-tourism market through 2034; 43% of travellers say they would pay more for a stay with social impact.",
    },
  ],
  tiers: "★ worth a stay · ★★ worth a detour · ★★★ worth the journey",
  nextLabel: "What's next",
  next: [
    "The Fund is being developed as the demonstrator a European consortium can form around, in particular the New European Bauhaus Facility's line on how communities finance and own local assets.",
    "In parallel, the first conversations are opening with land-holding mission foundations that buy land out of speculation, and with a Catalan ethical-finance partner to hold the pool. These relationships take months, and they are the critical path.",
  ],
}

const de: TourismMessages = {
  back: "← Zurück zu KOMMA",
  tagline: [
    "Den Wert des Tourismus zurückbringen:",
    "Wohn- und Landallmenden (housing and land commons) finanzieren aus dem Wert, den der Tourismus abschöpft.",
  ],
  side: {
    initiative: "Initiative",
    initiativeValue: "Tourism-to-Housing Impact Fund",
    stage: "Phase",
    stageValue: "Erkundung (Exploration)",
    places: "Orte",
    placesValue: [
      "Pilot: Barcelona & Costa Brava, Katalonien",
      "Modell für übersättigte Reiseziele: Venedig, die griechischen Inseln",
    ],
    team: "Team",
    teamValue: ["Clara Gromaches (Projektleitung)"],
    contact: "Kontakt",
    contactCta: "Mit uns arbeiten →",
  },
  intro: [
    "Der Tourismus zieht enormen Wert aus den besuchten Orten und lässt die Kosten zurück: steigende Mieten, verdrängte Bewohner:innen, ein ausgedünntes soziales Gefüge. Der Tourism-to-Housing Impact Fund (Tourismus-zu-Wohnraum-Wirkungsfonds) führt einen Teil dieses Werts dorthin zurück, woher er kommt, als dauerhaft bezahlbaren Wohnraum, der gemeinschaftlich gehalten wird.",
    "Er ist ein Finanzmechanismus und ein Demonstrator, pilotiert in Barcelona und an der Costa Brava in Katalonien, und gebaut für jene Reiseziele, an denen der touristische Druck am höchsten ist: Venedig, die griechischen Inseln, überall dort, wo Besucher:innen die Einheimischen aus den eigenen Wohnungen verdrängen.",
  ],
  problemLabel: "Das Problem",
  problem: [
    "Zwei Ökonomien teilen sich eine Straße. In einem Jahrzehnt stieg die Zahl der Tourist:innen in Barcelona um die Hälfte, während die Mieten um 68% und die Gehälter um 3,4% zunahmen. Jede:r zweite Mieter:in ist heute von Armut bedroht, und kaum 1,2% des Wohnraums ist sozial, gegenüber rund 15% in der EU.",
    "Zugleich erwirtschaften die Hotels der Stadt etwa 1,5 Mrd. € Gewinn pro Jahr. Die Erträge des Tourismus fließen an private Betreiber und globale Plattformen; seine Kosten, die Instabilität, die Verdrängung, die Pflege eines strapazierten öffentlichen Raums, bleiben bei der Gemeinschaft. Das Kapital, um Land und Gebäude zu kaufen, bevor der spekulative Markt es tut, ist genau das, was gemeinnütziges Wohnen nicht erreicht.",
  ],
  whatLabel: "Wie es funktioniert",
  whatLead:
    "Ein Ablauf in fünf Schritten, bei dem ein ethischer Finanzpartner das Geld hält und die Kommune ihn mit Land, rechtlicher Begleitung und politischer Rückendeckung unterlegt.",
  what: [
    {
      title: "Die Geldgeber",
      body: "Tourismusbetreiber und Impact-Investoren treten als Mitglieder bei und zahlen über mehrjährige Vereinbarungen in den Fonds ein.",
    },
    {
      title: "Der Kreditgeber",
      body: "Ein ethischer Finanzpartner hält den Fonds und vergibt Kredite, wo Banken es nicht tun. In Katalonien ist das Coop57 (die ethische Finanzgenossenschaft, die bereits Cohousing finanziert), mit Fiare Banca Etica (einer ethischen Bank) als Alternative.",
    },
    {
      title: "Der Pool",
      body: "Darin liegt ein abgegrenzter Tourism Impact Pool (Tourismus-Wirkungspool), eine First-Loss-Garantie (Erstverlustabsicherung), die Zertifikate und eine moderate Rendite zurückgibt und Kredit in mehrfacher Höhe ihrer selbst freisetzt.",
    },
    {
      title: "Die Wohnungen",
      body: "Der Fonds vergibt Kredite an genossenschaftlichen Wohnraum und Landallmenden, Kooperativen und Community Land Trusts (gemeinschaftliche Bodentreuhänder), bei denen Bewohner:innen eine bezahlbare Nutzungsgebühr zahlen und rechtliche Hüllen jede Wohnung dauerhaft dem spekulativen Markt entziehen.",
    },
    {
      title: "Der Nachweis",
      body: "Steward:innen verifizieren die gelieferten Wohnungen und Quadratmeter, der Pool stellt seine Zertifikate aus, und die Nutzungsgebühren fließen zurück, um die Rendite der Mitglieder zu bedienen.",
    },
  ],
  principlesLabel: "Gestaltungsprinzipien",
  principles: [
    {
      title: "Von Eigentum zu Fürsorge (stewardship)",
      body: "Jedes finanzierte Projekt ist genossenschaftlich, von Bewohner:innen getragen und rechtlich vom Wiederverkauf ausgeschlossen. Die Allmende wächst nur.",
    },
    {
      title: "Ein Ruf, dem andere nacheifern",
      body: "Wer einzahlt, erhält ein verifiziertes, gestuftes Zertifikat, einen Stern in einem glaubwürdigen Führer zu wirkungsvollen Aufenthalten. Wie der Michelin-Führer macht es die Finanzierung lokalen Wohnraums zu dem, worum Betreiber konkurrieren.",
    },
    {
      title: "Gemessen in Wohnungen und Quadratmetern",
      body: "Der einzige Erfolgsmaßstab ist die Zahl der dauerhaft bezahlbaren Wohnungen und die Fläche an geschaffenen Wohn- und Landallmenden. Das Zertifikat belegt beides.",
    },
  ],
  pilotLabel: "Der Pilot",
  pilotLead:
    "Ein durchgerechnetes Modell für ein einzelnes Gebäude in Barcelona, durchweg konservativ.",
  stats: [
    {
      figure: "2 Mio. €",
      body: "Pilot-Anleihe, 10 Jahre mit einem gestuften Kupon von 0 bis 2,5%, finanziert etwa 8 Wohnungen in Barcelona.",
    },
    {
      figure: "~60 Wohnungen / Jahr",
      body: "aus schon 1% des jährlichen Hotelgewinns der Stadt, und ein Vielfaches davon, sobald der Pool Kredit absichert.",
    },
    {
      figure: "58 bis 90 Mrd. €",
      body: "prognostizierter Markt für Impact-Tourismus bis 2034; 43% der Reisenden würden für einen Aufenthalt mit sozialer Wirkung mehr zahlen.",
    },
  ],
  tiers: "★ eine Reise wert · ★★ einen Umweg wert · ★★★ die ganze Reise wert",
  nextLabel: "Wie es weitergeht",
  next: [
    "Der Fonds wird als Demonstrator entwickelt, um den sich ein europäisches Konsortium bilden kann, insbesondere entlang der Linie der New European Bauhaus Facility dazu, wie Gemeinschaften lokale Vermögenswerte finanzieren und besitzen.",
    "Parallel öffnen sich die ersten Gespräche mit landhaltenden Stiftungen, die Boden der Spekulation entziehen, und mit einem katalanischen ethischen Finanzpartner, der den Pool hält. Diese Beziehungen brauchen Monate und sind der kritische Pfad.",
  ],
}

export const tourismMessages: Record<Locale, TourismMessages> = { en, de }
