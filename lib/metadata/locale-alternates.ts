import type { Metadata } from "next"
import { defaultLocale, isLocale, pathnameWithLocale, type Locale } from "@/lib/i18n"

/**
 * hreflang + canonical for the current path across locales.
 * @param pathWithoutLocale `/`, `/contact`, `/initiatives/slug`, etc.
 */
export function localeAlternatesMetadata(
  pathWithoutLocale: string,
  activeLocale: string
): Pick<Metadata, "alternates"> {
  const locale: Locale = isLocale(activeLocale) ? activeLocale : defaultLocale
  const rest =
    !pathWithoutLocale || pathWithoutLocale === "/"
      ? "/"
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`

  return {
    alternates: {
      canonical: pathnameWithLocale(locale, rest),
      languages: {
        en: pathnameWithLocale("en", rest),
        de: pathnameWithLocale("de", rest),
        "x-default": pathnameWithLocale(defaultLocale, rest),
      },
    },
  }
}
