"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { defaultLocale, isLocale, pathnameWithLocale, stripLocaleFromPathname, type Locale } from "@/lib/i18n"

const navCopy: Record<Locale, { contact: string; home: string }> = {
  en: { contact: "Contact", home: "Home" },
  de: { contact: "Kontakt", home: "Start" },
}

function useLocaleFromPath(): Locale {
  const pathname = usePathname()
  const first = pathname.split("/").filter(Boolean)[0]
  return first && isLocale(first) ? first : defaultLocale
}

function LocaleSwitcher() {
  const pathname = usePathname()
  const locale = useLocaleFromPath()
  const pathWithoutLocale = stripLocaleFromPathname(pathname)

  const linkClass = (target: Locale) =>
    `text-sm tracking-wide transition-opacity ${
      locale === target ? "text-white opacity-100" : "text-white/50 hover:text-white/80"
    }`

  return (
    <div className="flex items-center gap-1.5 font-silkscreen" aria-label="Language">
      <Link href={pathnameWithLocale("en", pathWithoutLocale)} className={linkClass("en")} lang="en">
        EN
      </Link>
      <span className="text-white/30 select-none" aria-hidden>
        /
      </span>
      <Link href={pathnameWithLocale("de", pathWithoutLocale)} className={linkClass("de")} lang="de">
        DE
      </Link>
    </div>
  )
}

interface NavigationProps {
  hideContact?: boolean
}

export function Navigation({ hideContact }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [showLogo, setShowLogo] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const locale = useLocaleFromPath()
  const prefix = `/${locale}`
  const labels = navCopy[locale]

  React.useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100)
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 py-2.5 z-50">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${
          showLogo
            ? `${scrolled ? "mt-4 bg-black/50" : "mt-4 bg-black"} backdrop-blur-sm rounded-full px-6 py-3`
            : "bg-transparent"
        }`}
      >
        <div>
          {showLogo ? (
            <Link href={prefix} className="hover:opacity-80 transition-opacity">
              <Image src="/Logo.png" alt="KOMMA" width={120} height={40} className="h-8 w-auto" />
            </Link>
          ) : (
            <div className="w-[120px]" />
          )}
        </div>

        <div className="hidden md:flex items-center gap-x-8 text-base">
          <LocaleSwitcher />
          {!hideContact && (
            <Link href={`${prefix}/contact`} className="hover:opacity-80 transition-opacity">
              {labels.contact}
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LocaleSwitcher />
          <button className="text-white p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <button className="absolute top-4 right-4 text-white p-2" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
          <ul className="flex flex-col gap-y-6 text-xl text-center">
            <li>
              <Link
                href={prefix}
                className="hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                {labels.home}
              </Link>
            </li>
            {!hideContact && (
              <li>
                <Link
                  href={`${prefix}/contact`}
                  className="hover:opacity-80 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {labels.contact}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
