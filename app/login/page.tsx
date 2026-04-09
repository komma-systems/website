"use client"

import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center gap-8 px-6 py-16">
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-silkscreen)] text-xl tracking-tight text-foreground">
          KOMMA portal
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Sign in with your GitHub account to continue.
        </p>
      </div>
      <button
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/portal/dashboard" })}
        className="rounded-md border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Sign in with GitHub
      </button>
    </main>
  )
}
