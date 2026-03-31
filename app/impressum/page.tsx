import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Komma / Impressum",
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-14 font-sans text-white sm:px-10">
      {/* 
        Legal entity to be confirmed before launch. 
        Until Berlin UG is registered, verify with legal counsel 
        which entity (Komma Genossenschaft LI or Berlin UG i.G.) 
        should appear here.
      */}
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Impressum</h1>
        <p className="mt-4 text-sm text-slate-400">Angaben gemäß § 5 TMG / DDG</p>

        <dl className="mt-12 space-y-10 text-[1.02rem] leading-[1.75] text-slate-100">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Verantwortlich für den Inhalt:
            </dt>
            <dd className="mt-3 space-y-1">
              <p>[LEGAL ENTITY NAME]</p>
              <p>[STREET ADDRESS]</p>
              <p>[POSTCODE] [CITY]</p>
              <p>[COUNTRY]</p>
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Kontakt:</dt>
            <dd className="mt-3">
              <p>E-Mail: [EMAIL ADDRESS]</p>
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Registrierung:
            </dt>
            <dd className="mt-3 space-y-1">
              <p>[REGISTRATION TYPE, e.g. Genossenschaft / Handelsregister]</p>
              <p>Registernummer: [NUMBER]</p>
              <p>Registergericht: [COURT OR AUTHORITY]</p>
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Umsatzsteuer-Identifikationsnummer (falls zutreffend):
            </dt>
            <dd className="mt-3">
              <p>USt-IdNr.: [VAT ID]</p>
            </dd>
          </div>
        </dl>
      </div>
    </main>
  )
}
