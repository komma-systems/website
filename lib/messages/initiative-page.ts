import type { Locale } from "@/lib/i18n"

export const initiativePageUi: Record<
  Locale,
  {
    loading: string
    notFoundTitle: string
    notFoundBody: string
    backHome: string
    backList: string
    teaser: string
    status: string
    published: string
    draft: string
    stage: string
    created: string
    lastUpdated: string
    ctaTitle: string
    ctaBody: string
    contact: string
  }
> = {
  en: {
    loading: "Loading initiative...",
    notFoundTitle: "Initiative Not Found",
    notFoundBody: "The requested initiative could not be found.",
    backHome: "Back to Home",
    backList: "Back to Initiatives",
    teaser: "Learn more about this initiative and how it contributes to our mission.",
    status: "Status",
    published: "Published",
    draft: "Draft",
    stage: "Stage",
    created: "Created",
    lastUpdated: "Last Updated",
    ctaTitle: "Interested in this initiative?",
    ctaBody: "Get in touch to learn more about our work and how you can get involved.",
    contact: "Contact Us",
  },
  de: {
    loading: "Initiative wird geladen...",
    notFoundTitle: "Initiative nicht gefunden",
    notFoundBody: "Die angeforderte Initiative konnte nicht gefunden werden.",
    backHome: "Zur Startseite",
    backList: "Zurück zu den Initiativen",
    teaser: "Mehr über diese Initiative und ihren Beitrag zu unserer Mission.",
    status: "Status",
    published: "Veröffentlicht",
    draft: "Entwurf",
    stage: "Phase",
    created: "Erstellt",
    lastUpdated: "Zuletzt aktualisiert",
    ctaTitle: "Interesse an dieser Initiative?",
    ctaBody: "Kontaktieren Sie uns, um mehr über unsere Arbeit und Mitwirkung zu erfahren.",
    contact: "Kontakt",
  },
}
