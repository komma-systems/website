import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { LOCALE_HEADER, PATHNAME_HEADER } from "@/lib/request-locale"
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n"
import { deckAssetPath, isDeckId, slidesHost } from "@/lib/slides"

const LOCALE_COOKIE = "NEXT_LOCALE"

function authSecret(): string | undefined {
  return process.env.NEXTAUTH_SECRET ?? process.env.AUTH_SECRET
}

function preferredFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale
  const lower = header.toLowerCase()
  if (lower.startsWith("de") || lower.includes("de-de") || lower.includes("de-at") || lower.includes("de-ch")) {
    return "de"
  }
  return defaultLocale
}

function resolveLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value
  if (cookie && isLocale(cookie)) return cookie
  return preferredFromAcceptLanguage(request.headers.get("accept-language"))
}

async function handlePortalAndLogin(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl
  const secret = authSecret()

  const token = secret
    ? await getToken({
        req: request,
        secret,
      })
    : null

  if (pathname === "/login") {
    if (token?.accessGranted === true) {
      return NextResponse.redirect(new URL("/portal/dashboard", request.url))
    }
    if (token) {
      return NextResponse.redirect(new URL("/portal/access-pending", request.url))
    }
    return NextResponse.next()
  }

  if (pathname.startsWith("/portal")) {
    if (pathname === "/portal/access-pending") {
      if (!token) {
        return NextResponse.redirect(new URL("/login", request.url))
      }
      if (token.accessGranted === true) {
        return NextResponse.redirect(new URL("/portal/dashboard", request.url))
      }
      return NextResponse.next()
    }

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    if (token.accessGranted !== true) {
      return NextResponse.redirect(new URL("/portal/access-pending", request.url))
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}

function requestHost(request: NextRequest): string {
  const raw = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? ""
  return raw.split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? ""
}

function rewriteDeck(request: NextRequest, id: string): NextResponse {
  const url = request.nextUrl.clone()
  url.pathname = deckAssetPath(id)
  return NextResponse.rewrite(url)
}

function rewriteSlidesCatalog(request: NextRequest, pathname: string): NextResponse {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(LOCALE_HEADER, defaultLocale)
  requestHeaders.set(PATHNAME_HEADER, pathname)

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}/slides`

  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  })
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (pathname === "/login" || pathname.startsWith("/portal")) {
    return handlePortalAndLogin(request)
  }

  // Decks stay out of locale routing. komma.systems/slides/<id> and
  // slides.komma.systems/<id> both serve the same HTML file.
  const deckFromSlidesPath = pathname.match(/^(?:\/(?:en|de))?\/slides\/([^/]+)$/)
  if (deckFromSlidesPath && isDeckId(deckFromSlidesPath[1])) {
    return rewriteDeck(request, deckFromSlidesPath[1])
  }

  const onSlidesHost = requestHost(request) === slidesHost
  if (onSlidesHost) {
    if (pathname === "/" || pathname === "/slides") {
      return rewriteSlidesCatalog(request, "/slides")
    }
    const bareDeck = pathname.match(/^\/([^/]+)$/)
    if (bareDeck && isDeckId(bareDeck[1]) && !isLocale(bareDeck[1])) {
      return rewriteDeck(request, bareDeck[1])
    }
  }

  if (pathname === "/slides") {
    return rewriteSlidesCatalog(request, pathname)
  }

  // Keep the public Meld entry path locale-neutral (e.g. meld.komma.systems -> /meld).
  // We internally rewrite to the default locale route so users are not redirected
  // through language filtering.
  if (pathname === "/meld" || pathname.startsWith("/meld/")) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set(LOCALE_HEADER, defaultLocale)
    requestHeaders.set(PATHNAME_HEADER, pathname)

    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`

    return NextResponse.rewrite(url, {
      request: {
        headers: requestHeaders,
      },
    })
  }

  const pathnameLocale = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  )

  if (pathnameLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set(LOCALE_HEADER, pathnameLocale)
    requestHeaders.set(PATHNAME_HEADER, pathname)

    const res = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    res.cookies.set(LOCALE_COOKIE, pathnameLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    })
    return res
  }

  const locale = resolveLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  const res = NextResponse.redirect(url)
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  })
  return res
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
