import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || request.nextUrl.hostname

  // When accessed via strikepools.komma.systems, serve the strikepools page
  if (hostname === "strikepools.komma.systems" || hostname?.endsWith(".strikepools.komma.systems")) {
    if (!request.nextUrl.pathname.startsWith("/strikepools")) {
      const url = request.nextUrl.clone()
      url.pathname = "/strikepools"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}
