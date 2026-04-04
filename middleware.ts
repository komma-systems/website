import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { LOCALE_HEADER, PATHNAME_HEADER } from "@/lib/request-locale"
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n"

const LOCALE_COOKIE = "NEXT_LOCALE"

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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next()
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
