export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function stripLocaleFromPathname(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean)
  const first = parts[0]
  if (first === "en" || first === "de") {
    const rest = parts.slice(1).join("/")
    return rest ? `/${rest}` : "/"
  }
  return pathname || "/"
}

export function pathnameWithLocale(locale: Locale, pathWithoutLocale: string): string {
  if (!pathWithoutLocale || pathWithoutLocale === "/") {
    return `/${locale}`
  }
  return `/${locale}${pathWithoutLocale.startsWith("/") ? "" : "/"}${pathWithoutLocale}`
}
