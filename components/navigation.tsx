"use client"

import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavigationProps {
  hideContact?: boolean
}

export function Navigation({ hideContact }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [showLogo, setShowLogo] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100)
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 py-2.5 z-50">
      <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-300 ${
        showLogo ? `${scrolled ? 'mt-4 bg-black/50' : 'mt-4 bg-black'} backdrop-blur-sm rounded-full px-6 py-3` : 'bg-transparent'
      }`}>
        <div>
          {showLogo ? (
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/Logo.png"
                alt="KOMMA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          ) : (
            <div className="w-[120px]" />
          )}
        </div>

        <ul className="hidden md:flex gap-x-8 text-base">
          {!hideContact && (
            <li>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">
                Contact
              </Link>
            </li>
          )}
        </ul>

        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col gap-y-6 text-xl text-center">
            <li>
              <Link href="/" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            {!hideContact && (
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
