import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    /** Supabase `collaborators.id` when the user is on the whitelist */
    id?: string
    user: {
      accessGranted: boolean
      role?: string
      /** GitHub login from the OAuth profile */
      githubUsername?: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessGranted?: boolean
    role?: string
    collaboratorId?: string
    githubUsername?: string
  }
}
