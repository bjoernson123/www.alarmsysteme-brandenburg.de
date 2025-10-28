import { Shield, Camera, Lock, Phone, Star, CheckCircle, DoorClosed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AlarmBellIcon } from "@/components/alarm-bell-icon"
import { BreakInStats } from "@/components/break-in-stats"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sicherheit beginnt mit <span className="text-gray-700">Vertrauen</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Von der ersten Beratung bis zur fertigen Installation – wir stehen für Lösungen, die Ihnen ein gutes
                Gefühl geben.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-700 hover:bg-gray-800" asChild>
                  <Link href="/kontakt">
                    <Phone className="h-5 w-5 mr-2" />
                    Kostenlose Beratung
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 bg-transparent" asChild>
                  <Link href="/leistungen">Leistungen entdecken</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-security-system-with-cameras-and-alarm-pane.jpg"
                alt="Moderne Sicherheitstechnik"
                width={500}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Einbruchsstatistik */}
      <BreakInStats />

      {/* Vertrauenselemente */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15+ Jahre Erfahrung</h3>
              <p className="text-gray-600">Langjährige Expertise in der Sicherheitstechnik</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">VdS-zertifiziert</h3>
              <p className="text-gray-600">Höchste Qualitätsstandards und Zertifizierungen</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ zufriedene Kunden</h3>
              <p className="text-gray-600">Vertrauen durch bewährte Lösungen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Umfassende Sicherheitslösungen aus einer Hand – von der Beratung bis zur Wartung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/leistungen#alarmanlagen">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-gray-200">
                <CardHeader className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <AlarmBellIcon className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle>Alarmanlagen</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Funk- und kabelgebundene Alarmsysteme für optimalen Schutz vor Einbruch
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/leistungen#videoueberwachung">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-gray-200">
                <CardHeader className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle>Videoüberwachung</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Professionelle Kamerasysteme für Innen- und Außenbereiche
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/leistungen#mechanische-sicherheit">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-gray-200">
                <CardHeader className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle>Mechanische Sicherheit</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Tür- und Fenstersicherungen, Tresore & Wertschutzschränke und Sicherheitstüren für zusätzlichen
                    mechanischen Schutz
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/leistungen#schutzraum">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-gray-200">
                <CardHeader className="text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <DoorClosed className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle>Schutzraum</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Professionelle Schutzraumlösungen für maximale Sicherheit in Notfallsituationen
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gray-700 hover:bg-gray-800" asChild>
              <Link href="/leistungen">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
