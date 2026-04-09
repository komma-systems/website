import { auth } from "@/auth"
import { createAdminClient } from "@/lib/supabase/admin"
import { format } from "date-fns"
import { redirect } from "next/navigation"
import ReactMarkdown from "react-markdown"

type CollaboratorProjectRow = {
  role_on_project: string | null
  projects: {
    id: string
    name: string
    status: string | null
    wiki_content: string | null
  } | null
}

type AgreementRow = {
  id: string
  title: string | null
  type: string | null
  signed_at: string | null
  document_url: string | null
}

type LedgerRow = {
  id: string
  reason: string | null
  amount: string | number | null
  issued_at: string
  issued_by: string | null
}

function StatusBadge({ status }: { status: string | null }) {
  const label = status?.trim() ? status.trim() : "Unset"
  return (
    <span className="inline-flex shrink-0 items-center rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium capitalize text-muted-foreground">
      {label}
    </span>
  )
}

function formatAgreementType(type: string | null) {
  if (!type) return "—"
  return type.replace(/_/g, " ")
}

function formatMgpAmount(value: string | number | null): string {
  if (value === null || value === undefined) return "0"
  const n = Number(value)
  if (Number.isNaN(n)) return String(value)
  if (Number.isInteger(n)) return String(n)
  return n.toLocaleString(undefined, { maximumFractionDigits: 2 })
}

function WikiBlock({ markdown }: { markdown: string }) {
  return (
    <div
      className="mt-3 rounded-md border border-border bg-muted/20 p-4 text-sm leading-relaxed text-foreground [&_a]:text-foreground [&_a]:underline [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.875em] [&_h1]:mb-2 [&_h1]:text-base [&_h1]:font-semibold [&_h2]:mb-2 [&_h2]:text-sm [&_h2]:font-semibold [&_li]:ml-4 [&_li]:list-disc [&_ol]:ml-4 [&_ol]:list-decimal [&_p+p]:mt-2 [&_pre]:mt-2 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-muted [&_pre]:p-3 [&_ul]:mt-1"
    >
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default async function PortalDashboardPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")
  if (!session.user.accessGranted) redirect("/portal/access-pending")

  const collaboratorId = session.id
  const githubUsername = session.user.githubUsername
  if (!collaboratorId || !githubUsername) {
    redirect("/portal/access-pending")
  }

  const supabase = createAdminClient()

  let displayName: string | null = null
  let projects: CollaboratorProjectRow[] = []
  let agreements: AgreementRow[] = []
  let ledger: LedgerRow[] = []

  if (supabase) {
    const [collabRes, projectsRes, agreementsRes, ledgerRes] = await Promise.all([
      supabase
        .from("collaborators")
        .select("display_name")
        .eq("id", collaboratorId)
        .maybeSingle(),
      supabase
        .from("collaborator_projects")
        .select("role_on_project, projects(id, name, status, wiki_content)")
        .eq("collaborator_id", collaboratorId),
      supabase
        .from("agreements")
        .select("id, title, type, signed_at, document_url")
        .eq("collaborator_id", collaboratorId)
        .order("signed_at", { ascending: false, nullsFirst: false }),
      supabase
        .from("mgp_ledger")
        .select("id, reason, amount, issued_at, issued_by")
        .eq("collaborator_id", collaboratorId)
        .order("issued_at", { ascending: false }),
    ])

    if (collabRes.error) console.error("[portal/dashboard] collaborators", collabRes.error.message)
    else displayName = collabRes.data?.display_name ?? null

    if (projectsRes.error) console.error("[portal/dashboard] collaborator_projects", projectsRes.error.message)
    else projects = (projectsRes.data ?? []) as CollaboratorProjectRow[]

    if (agreementsRes.error) console.error("[portal/dashboard] agreements", agreementsRes.error.message)
    else agreements = (agreementsRes.data ?? []) as AgreementRow[]

    if (ledgerRes.error) console.error("[portal/dashboard] mgp_ledger", ledgerRes.error.message)
    else ledger = (ledgerRes.data ?? []) as LedgerRow[]
  }

  const headerName = displayName?.trim() || session.user.name?.trim() || githubUsername
  const avatarSrc =
    session.user.image?.trim() ||
    `https://avatars.githubusercontent.com/${encodeURIComponent(githubUsername)}?s=128`

  const mgpTotal = ledger.reduce((sum, row) => sum + Number(row.amount ?? 0), 0)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <header className="flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-center sm:gap-6">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element -- OAuth / GitHub avatar URLs */}
            <img
              src={avatarSrc}
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">{headerName}</h1>
            <p className="mt-1 text-sm text-muted-foreground">@{githubUsername}</p>
            {session.user.role ? (
              <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                {session.user.role}
              </p>
            ) : null}
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Projects
          </h2>
          {projects.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No projects assigned yet.</p>
          ) : (
            <ul className="mt-4 space-y-6">
              {projects.map((row, index) => {
                const p = row.projects
                if (!p) {
                  return (
                    <li
                      key={`missing-project-${index}`}
                      className="rounded-lg border border-border bg-card p-5 shadow-sm"
                    >
                      <p className="text-sm text-muted-foreground">Project details unavailable.</p>
                    </li>
                  )
                }
                const wiki = p.wiki_content?.trim() ?? ""
                return (
                  <li
                    key={p.id}
                    className="rounded-lg border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2 gap-y-2">
                      <h3 className="text-base font-semibold">{p.name}</h3>
                      <StatusBadge status={p.status} />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Your role:</span>{" "}
                      {row.role_on_project?.trim() ? row.role_on_project : "—"}
                    </p>
                    {wiki ? (
                      <WikiBlock markdown={wiki} />
                    ) : (
                      <p className="mt-3 text-sm italic text-muted-foreground">No wiki content.</p>
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Agreements
          </h2>
          {agreements.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">No agreements on file.</p>
          ) : (
            <div className="mt-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-4 py-3 font-medium">Title</th>
                    <th className="px-4 py-3 font-medium">Type</th>
                    <th className="px-4 py-3 font-medium">Signed</th>
                    <th className="px-4 py-3 font-medium">Document</th>
                  </tr>
                </thead>
                <tbody>
                  {agreements.map((a) => (
                    <tr key={a.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">{a.title?.trim() ? a.title : "—"}</td>
                      <td className="px-4 py-3 capitalize">{formatAgreementType(a.type)}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {a.signed_at
                          ? format(new Date(a.signed_at), "d MMM yyyy")
                          : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {a.document_url?.trim() ? (
                          <a
                            href={a.document_url}
                            className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            MGP balance
          </h2>
          <p className="mt-4 text-4xl font-semibold tabular-nums tracking-tight">
            {formatMgpAmount(mgpTotal)} <span className="text-lg font-normal text-muted-foreground">MGP</span>
          </p>
          {ledger.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No ledger entries yet.</p>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-4 py-3 font-medium">Reason</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Issued by</th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.map((row) => (
                    <tr key={row.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">{row.reason?.trim() ? row.reason : "—"}</td>
                      <td className="px-4 py-3 tabular-nums font-medium">
                        {formatMgpAmount(row.amount)}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {format(new Date(row.issued_at), "d MMM yyyy, HH:mm")}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {row.issued_by?.trim() ? row.issued_by : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
