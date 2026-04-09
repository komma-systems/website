export default function AccessPendingPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <h1 className="font-[family-name:var(--font-silkscreen)] text-xl tracking-tight text-foreground">
        Access not yet granted
      </h1>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Your GitHub account is signed in, but you are not yet on the collaborator list. Please contact the KOMMA team
        if you believe this is a mistake.
      </p>
    </main>
  )
}
