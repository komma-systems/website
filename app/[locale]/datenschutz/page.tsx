import type { Metadata } from "next"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / Privacy Policy",
    ...localeAlternatesMetadata("/datenschutz", locale),
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-14 font-sans text-white sm:px-10">
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-400">Datenschutzerklärung</p>

        <section className="mt-12 space-y-10 text-[1.02rem] leading-[1.75] text-slate-100">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              1. Data controller
            </h2>
            <p className="mt-3 font-medium text-white">KOMMA Genossenschaft</p>
            <p className="mt-3">In der Specki 3</p>
            <p>9494 Schaan</p>
            <p>Liechtenstein</p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:contact@komma.systems"
                className="text-white underline underline-offset-4 hover:text-slate-200"
              >
                contact@komma.systems
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              2. Data we collect
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-white">Site hosting</h3>
                <p className="mt-3">
                  When you visit this site, our hosting platform (Vercel, Inc., United States)
                  processes technical data needed to deliver the site, including IP addresses and
                  standard request metadata in server and edge logs. This processing is for
                  operating, securing, and troubleshooting the service only. We do not use analytics
                  or marketing tracking on this site. Further detail on how Vercel handles data is
                  available in{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 hover:text-slate-200"
                  >
                    Vercel&apos;s privacy policy
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">Contact form</h3>
                <p className="mt-3">
                  When you use the contact form, we collect your email address and the message you
                  send. Messages are delivered using Resend (Resend, Inc., United States), which
                  acts as a processor on our instructions. We use this information only to read and
                  respond to your enquiry.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              3. Legal basis
            </h2>
            <p className="mt-3">
              Applicable law is the Liechtenstein Data Protection Act (Datenschutzgesetz, DSG) of
              2018, which transposes Liechtenstein&apos;s EEA obligations and is materially aligned
              with the EU General Data Protection Regulation (GDPR). References below to articles of
              the GDPR are to the equivalent bases under the DSG 2018.
            </p>
            <p className="mt-4">
              Processing of contact form data is based on Art. 6(1)(b) GDPR / DSG 2018 (steps prior
              to entering into a contract or handling your request) and, where applicable, Art.
              6(1)(f) GDPR / DSG 2018 (our legitimate interest in responding to enquiries).
              Processing of hosting and log data is based on Art. 6(1)(f) GDPR / DSG 2018 (legitimate
              interest in providing a secure, available website).
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              4. Data retention
            </h2>
            <p className="mt-3">
              Hosting and infrastructure logs are retained for the periods described by Vercel and
              only as long as necessary for the purposes above. Contact submissions are kept for as
              long as needed to handle your enquiry and for a reasonable follow-up period, and in
              any case typically no longer than 24 months, unless a longer retention is required by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              5. Your rights
            </h2>
            <p className="mt-3">
              Under the Liechtenstein DSG 2018 you have the right of access, rectification, erasure,
              restriction of processing, data portability, and the right to object where
              applicable (these correspond to the rights familiar from the GDPR). To exercise these
              rights, contact us at{" "}
              <a
                href="mailto:contact@komma.systems"
                className="text-white underline underline-offset-4 hover:text-slate-200"
              >
                contact@komma.systems
              </a>
              . We will respond within one calendar month. If a request is complex or numerous, we
              may extend that period by up to two further months where permitted by law; we will
              inform you within the first month if an extension applies. You also have the right to
              lodge a complaint with a supervisory authority:
            </p>
            <p className="mt-4 font-medium text-white">Datenschutzstelle Liechtenstein</p>
            <p className="mt-2">Städtle 38</p>
            <p>FL-9490 Vaduz</p>
            <p className="mt-2">
              <a
                href="mailto:info.dss@llv.li"
                className="text-white underline underline-offset-4 hover:text-slate-200"
              >
                info.dss@llv.li
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.datenschutzstelle.li"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4 hover:text-slate-200"
              >
                datenschutzstelle.li
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              6. International transfers
            </h2>
            <p className="mt-3">
              Vercel and Resend are US companies. Using their services can involve transfers of
              personal data to the United States and other countries. Liechtenstein is part of the
              EEA; where data is transferred to countries not covered by an adequacy decision,
              applicable law (DSG 2018) requires appropriate safeguards.
            </p>
            <p className="mt-4">
              For these processors, safeguards are typically set out in their customer agreements
              and, where offered, in a data processing agreement (DPA). Those instruments often
              incorporate the EU Commission&apos;s standard contractual clauses (SCCs) or another
              approved transfer mechanism for processor processing. The exact tool that governs your
              relationship depends on the terms and DPA (if any) accepted between KOMMA
              Genossenschaft and each provider. We recommend reviewing Vercel&apos;s and
              Resend&apos;s current DPA and privacy materials and confirming that you have accepted
              the processing terms that apply to your account.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              7. Third-party processors
            </h2>
            <p className="mt-3">
              We do not sell your personal data and do not share it with third parties for their
              marketing purposes. We use the processors described in this policy only to operate this
              website and the contact channel.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              8. Cookies
            </h2>
            <p className="mt-3">
              This site does not use tracking or marketing cookies. Only technically necessary
              mechanisms required for basic site function may apply (for example session or
              security-related cookies from the hosting platform).
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
