"use client"

import Link from "next/link"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  return (
    <footer className="bg-gray-900 text-white py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Bricon Sicherheitstechnik</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Ihr vertrauensvoller Partner für professionelle Sicherheitstechnik in Brandenburg und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/leistungen#alarmanlagen"
                  className="hover:text-white transition-colors"
                  onClick={handleClick}
                >
                  Alarmanlagen
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen#videoueberwachung"
                  className="hover:text-white transition-colors"
                  onClick={handleClick}
                >
                  Videoüberwachung
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen#mechanische-sicherheit"
                  className="hover:text-white transition-colors"
                  onClick={handleClick}
                >
                  Mechanische Sicherheit
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen#schutzraum"
                  className="hover:text-white transition-colors"
                  onClick={handleClick}
                >
                  Schutzraum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors" onClick={handleClick}>
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors" onClick={handleClick}>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors" onClick={handleClick}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors" onClick={handleClick}>
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 md:mt-8 md:pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Bricon Sicherheitstechnik. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
