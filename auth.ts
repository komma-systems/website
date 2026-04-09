import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import { createAdminClient } from "@/lib/supabase/admin"

type CollaboratorRow = { id: string; role: string }

async function fetchCollaborator(githubUsername: string): Promise<CollaboratorRow | null> {
  const supabase = createAdminClient()
  if (!supabase) return null
  const { data, error } = await supabase
    .from("collaborators")
    .select("id, role")
    .eq("github_username", githubUsername)
    .maybeSingle()
  if (error) {
    console.error("[auth] collaborators lookup failed", error.message)
    return null
  }
  if (!data?.id) return null
  return { id: data.id, role: String(data.role) }
}

async function applyCollaboratorClaims(
  token: Record<string, unknown>,
  githubUsername: string | undefined
): Promise<void> {
  if (!githubUsername) return
  const row = await fetchCollaborator(githubUsername)
  if (row) {
    token.accessGranted = true
    token.role = row.role
    token.collaboratorId = row.id
  } else {
    token.accessGranted = false
    delete token.role
    delete token.collaboratorId
  }
}

export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  session: { strategy: "jwt" },
  trustHost: true,
  callbacks: {
    async jwt({ token, account, profile, trigger }) {
      if (profile && typeof profile === "object" && "login" in profile) {
        token.githubUsername = String((profile as { login: string }).login)
      }

      const githubUsername = token.githubUsername as string | undefined
      const shouldLookup =
        Boolean(account) || trigger === "signIn" || trigger === "update"

      if (githubUsername && shouldLookup) {
        await applyCollaboratorClaims(token, githubUsername)
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessGranted = token.accessGranted === true
        if (typeof token.role === "string") session.user.role = token.role
        if (typeof token.githubUsername === "string") {
          session.user.githubUsername = token.githubUsername
        }
      }
      if (typeof token.collaboratorId === "string") {
        session.id = token.collaboratorId
      } else {
        delete session.id
      }
      return session
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
