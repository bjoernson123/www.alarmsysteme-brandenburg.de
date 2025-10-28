"use client"

import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={handleClick}>
            <Image
              src="/images/bricon-logo.jpg"
              alt="Bricon Sicherheitstechnik Logo"
              width={300}
              height={90}
              className="h-16 w-auto"
            />
            <div className="hidden lg:block border-l border-gray-300 pl-3">
              <p className="text-sm text-gray-600 leading-tight">
                Wir sichern Ihr Zuhause.
                <br />
                <span className="font-semibold text-gray-800">Besser Bricon - mit Sicherheit</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/leistungen"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onClick={handleClick}
            >
              Leistungen
            </Link>
            <Link
              href="/ueber-uns"
              className="text-gray-700 hover:text-gray-900 transition-colors"
              onClick={handleClick}
            >
              Über uns
            </Link>
            <Link href="/kontakt" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={handleClick}>
              Kontakt
            </Link>
            <Button className="bg-gray-700 hover:bg-gray-800" asChild>
              <Link href="/kontakt" onClick={handleClick}>
                <Phone className="h-4 w-4 mr-2" />
                Jetzt beraten lassen
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu öffnen">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/leistungen"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={handleClick}
              >
                Leistungen
              </Link>
              <Link
                href="/ueber-uns"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={handleClick}
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                onClick={handleClick}
              >
                Kontakt
              </Link>
              <Button className="bg-gray-700 hover:bg-gray-800 w-full" asChild>
                <Link href="/kontakt" onClick={handleClick}>
                  <Phone className="h-4 w-4 mr-2" />
                  Jetzt beraten lassen
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
