import { cookies, headers } from "next/headers"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"

/** Set by middleware on localized routes (matches URL segment, not cookie). */
export const LOCALE_HEADER = "x-komma-locale"

/** Full pathname including locale prefix, e.g. /en/contact — set by middleware. */
export const PATHNAME_HEADER = "x-komma-pathname"

export async function getRequestLocale(): Promise<Locale> {
  const h = await headers()
  const pathname = h.get(PATHNAME_HEADER)
  if (pathname) {
    const seg = pathname.split("/").filter(Boolean)[0]
    if (seg && isLocale(seg)) return seg
  }
  const fromPath = h.get(LOCALE_HEADER)
  if (fromPath && isLocale(fromPath)) return fromPath

  const cookieStore = await cookies()
  const raw = cookieStore.get("NEXT_LOCALE")?.value
  if (raw && isLocale(raw)) return raw

  return defaultLocale
}
