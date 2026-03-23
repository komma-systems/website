import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function isNextInternalOrAssetPath(pathname: string) {
  const lastSegment = pathname.split("/").pop() ?? ""
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/favicon.svg" ||
    pathname.startsWith("/favicon-") ||
    /\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|woff2?|txt|xml|webmanifest)$/i.test(lastSegment)
  )
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (isNextInternalOrAssetPath(pathname)) {
    return NextResponse.next()
  }

  const hostHeader = request.headers.get("host") || request.nextUrl.hostname
  const hostname = hostHeader.split(":")[0] ?? hostHeader

  // strikepools.komma.systems → /strikepools
  if (hostname === "strikepools.komma.systems" || hostname.endsWith(".strikepools.komma.systems")) {
    if (!pathname.startsWith("/strikepools")) {
      const url = request.nextUrl.clone()
      url.pathname = "/strikepools"
      return NextResponse.rewrite(url)
    }
  }

  // meld.komma.systems → /meld (keep legal pages reachable on same host)
  if (hostname === "meld.komma.systems" || hostname.endsWith(".meld.komma.systems")) {
    const allowed =
      pathname.startsWith("/meld") ||
      pathname === "/impressum" ||
      pathname === "/datenschutz"
    if (!allowed) {
      const url = request.nextUrl.clone()
      url.pathname = "/meld"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}
