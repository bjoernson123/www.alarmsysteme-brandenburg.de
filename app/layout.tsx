import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bricon Sicherheitstechnik - Ihr Sicherheitsexperte",
  description:
    "Professionelle Sicherheitstechnik für Brandenburg an der Havel. Alarmanlagen, Videoüberwachung, Smart Home Sicherheit und mechanische Sicherheitstechnik vom Fachbetrieb.",
  keywords:
    "Bricon Sicherheitstechnik, Alarmanlagen Brandenburg, Sicherheitstechnik, Videoüberwachung, Smart Home, Einbruchschutz",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
