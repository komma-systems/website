import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Komma / Strike Pools",
  description: "Strike Pools — A KOMMA initiative",
}

export default function StrikepoolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
