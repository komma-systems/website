import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meld — Komma Systems",
  description:
    "Meld is a hardware device and spatial AI platform for civic deliberation. Built by Komma Systems.",
  alternates: {
    canonical: "https://meld.komma.systems",
  },
}

const sectionLabelClasses =
  "mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"

const proseClasses = "text-[1.06rem] leading-[1.75] text-slate-100"

export default function MeldPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-14 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-[680px]">
          <header className="mb-16 pb-10">
            <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-7xl">Meld</h1>
            <p className="mt-5 text-lg text-slate-200">
              Making physical space programmable
              <br />
              at the threshold of shared memory
            </p>
            <Link
              href="https://komma.systems"
              className="mt-8 inline-block text-sm font-medium uppercase tracking-wider text-teal-300 underline decoration-teal-500/70 underline-offset-4 transition-colors hover:text-teal-200 font-silkscreen"
            >
              ← BACK
            </Link>
          </header>

          <section className="mb-14">
            <p className={proseClasses}>
              Governance fails because what people say
              disappears. Citizen assemblies, community consultations, and municipal workshops
              produce hours of spoken deliberation that is difficult to track, impossible to compare
              across sessions, and rarely reflected in the decisions that follow. Meld is Komma&apos;s
              initiative to address that.
            </p>
            <p className={`${proseClasses} mt-6`}>
              Meld is a hardware device and spatial AI platform designed for deployment in civic
              settings. It captures spoken deliberation in the room, processes it locally, and
              returns structured sensemaking outputs to facilitators and participants without raw
              audio ever leaving the space. It is the physical and technical infrastructure for a new
              kind of civic listening.
            </p>
          </section>

          <section className="mb-14">
            <p className={sectionLabelClasses}>The Problem</p>
            <p className={proseClasses}>
              Public deliberation sits at the heart of democratic renewal, but the tools available to
              it are broken. Existing approaches either rely on commercial cloud AI that creates
              unacceptable data sovereignty and privacy risks in public sector settings, or they
              produce flat transcripts that demand hours of manual analysis. Neither is fit for
              deployment in the places that need participatory tools most: under-resourced
              municipalities, rural communities, and administrations without specialist technical
              capacity.
            </p>
            <p className={`${proseClasses} mt-6`}>
              Beneath this is a deeper structural problem. Democratic processes generate rich,
              layered knowledge from citizens and communities, but that knowledge has no durable form.
              It does not accumulate. It does not travel. It does not inform the next session or the
              next decision. Each assembly starts from scratch.
            </p>
          </section>

          <section className="mb-14">
            <p className={sectionLabelClasses}>What Meld Does</p>
            <p className={proseClasses}>
              The Meld device sits in the room during civic assemblies and public workshops.
              Participants register consent through a physical NFC tap before their voice enters the
              pipeline. Transcription, anonymisation, and initial sensemaking happen locally on the
              device, powered by KairOS - the operating system for relational technology developed
              within the initiative.
            </p>
            <p className={`${proseClasses} mt-6`}>
              After each session, the Embers Engine constructs a knowledge graph from the discussion:
              extracting themes, relationships, and patterns across contributions, and connecting them
              to prior sessions through a Temporal Deliberation Graph. Facilitators receive
              structured outputs that make the conversation legible, comparable, and actionable.
            </p>
            <p className={`${proseClasses} mt-6`}>
              The underlying platform is Kair, named for Kairos - the Greek concept of qualitative or
              relational time. Where Chronos measures the passing of moments, Kairos names the moment
              when something shifts. Kair is built to locate and hold those moments in civic life.
            </p>
          </section>

          <section className="mb-14">
            <p className={sectionLabelClasses}>Design Principles</p>
            <div className="space-y-8">
              <article>
                <h3 className="text-base font-semibold text-white">Consent as action</h3>
                <p className={`${proseClasses} mt-2`}>
                  Participation in the pipeline is an active, physical choice. Each participant taps
                  an NFC tag before their contributions are captured. Withdrawal is possible at any
                  time, at the level of a session or a single exchange, without requiring
                  identification.
                </p>
              </article>
              <article>
                <h3 className="text-base font-semibold text-white">Edge-first</h3>
                <p className={`${proseClasses} mt-2`}>
                  Raw audio stays on local hardware. Only de-identified transcripts and structured
                  graph outputs leave the device. The platform operates without internet connectivity,
                  which is essential for deployment in rural and low-connectivity settings.
                </p>
              </article>
              <article>
                <h3 className="text-base font-semibold text-white">Minimal trace by default</h3>
                <p className={`${proseClasses} mt-2`}>
                  Exports contain graph structures and metadata only. The system is designed so that
                  the outputs of deliberation are useful without being personally attributable.
                </p>
              </article>
            </div>
          </section>

          <section className="mb-14">
            <p className={sectionLabelClasses}>Current Deployment</p>
            {/* <p className={proseClasses}>
              Meld&apos;s first production deployment is InnoVER - a BMBF-funded public
              procurement running from 2026 to 2027 across two rural Landkreise in northern Germany:
              Herzogtum Lauenburg in Schleswig-Holstein, and Ludwigslust-Parchim in
              Mecklenburg-Vorpommern. The contracting authority is NextLearning e.V., with research
              collaboration on the Temporal Deliberation Graph underway with the Max Planck Institute
              for Geoanthropology.
            </p> */}
            {/* <p className={`${proseClasses} mt-6`}>
              This is the first instantiation of the Kair Network: Komma&apos;s vision for a distributed
              set of places where civic deliberation is captured, structured, and returned to
              communities as usable knowledge.
            </p> */}
          </section>

          <section className="mb-16">
            <p className={sectionLabelClasses}>Team + Partners</p>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-300">
                  Team
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-slate-100">
                  Charlie Fisher (Project Lead)
                </p>
                <p className="text-[1rem] leading-7 text-slate-100">
                  Robert Matijevic (Technical Lead)
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-300">
                  Partners
                </h3>
                <p className="mt-3 text-[1rem] leading-7 text-slate-100">NextLearning e.V.</p>
                <p className="text-[1rem] leading-7 text-slate-100">
                  Max Planck Institute for Geoanthropology
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
