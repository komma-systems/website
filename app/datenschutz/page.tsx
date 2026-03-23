import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz — Meld",
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-14 font-sans text-white sm:px-10">
      {/* 
        If any external service is added later (fonts, analytics, 
        contact form, etc.) this policy must be updated before deployment.
        Review with legal counsel if the hosting provider changes.
      */}
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-3 text-sm text-slate-400">Privacy Policy</p>

        <section className="mt-12 space-y-10 text-[1.02rem] leading-[1.75] text-slate-100">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">[LEGAL ENTITY NAME — same as Impressum]</p>
            <p>[ADDRESS]</p>
            <p>E-Mail: [EMAIL]</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p className="mt-3">
              Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt,
              kein Tracking durchgeführt und keine Analyse-Tools eingesetzt.
            </p>
            <p className="mt-4">
              Beim Abruf dieser Website werden durch den Hosting-Anbieter technisch notwendige
              Server-Logfiles gespeichert. Diese enthalten: IP-Adresse (anonymisiert), Datum und
              Uhrzeit des Zugriffs, aufgerufene URL, Referrer-URL, verwendeter Browser. Diese
              Daten werden nicht mit anderen Datenquellen zusammengeführt und nach spätestens 7
              Tagen gelöscht.
            </p>
            <p className="mt-4">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              technischen Bereitstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              3. Hosting
            </h2>
            <p className="mt-3">Diese Website wird gehostet bei:</p>
            <p>[HOSTING PROVIDER NAME AND ADDRESS]</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              4. Externe Dienste
            </h2>
            <p className="mt-3">
              Es werden keine externen Dienste, Schriften, Skripte oder Inhalte Dritter
              eingebunden.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              5. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben nach der DSGVO folgende Rechte gegenüber uns hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-6">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-4">Zur Ausübung dieser Rechte wenden Sie sich bitte an: [EMAIL]</p>
            <p className="mt-4">
              Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren.
            </p>
          </div>
        </section>

        <hr className="my-12 border-slate-800" />

        <section>
          <p className="text-sm leading-7 text-slate-300">
            This website does not collect personal data, use cookies, or load any third-party
            scripts or analytics. Server log files are stored by the hosting provider for a
            maximum of 7 days for technical purposes only. For data subject requests, contact:
            [EMAIL]
          </p>
        </section>
      </div>
    </main>
  )
}
