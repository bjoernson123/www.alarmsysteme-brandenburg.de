import { Camera, Lock, CheckCircle, DoorClosed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AlarmBellIcon } from "@/components/alarm-bell-icon"

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Unsere <span className="text-gray-700">Leistungen</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Umfassende Sicherheitslösungen für Ihr Zuhause und Ihr Unternehmen. Von der professionellen Beratung bis
              zur fachgerechten Installation und Wartung.
            </p>
          </div>
        </div>
      </section>

      {/* Hauptleistungen */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
            {/* Alarmanlagen */}
            <div id="alarmanlagen" className="space-y-8 scroll-mt-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <AlarmBellIcon className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Alarmanlagen</h2>
              </div>
              <Image
                src="/modern-alarm-system-control-panel.jpg"
                alt="Moderne Alarmanlage"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-600">
                  Professionelle Alarmanlagen für optimalen Einbruchschutz. Wir bieten sowohl kabelgebundene als auch
                  moderne Funksysteme für jeden Bedarf.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>VdS-zertifizierte Systeme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Funk- und Kabelgebundene Lösungen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>24/7 Überwachung möglich</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Individuelle Sicherheitskonzepte</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Videoüberwachung */}
            <div id="videoueberwachung" className="space-y-8 scroll-mt-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Camera className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Videoüberwachung</h2>
              </div>
              <Image
                src="/professional-security-cameras-surveillance-system.jpg"
                alt="Videoüberwachungssystem"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-600">
                  Professionelle Kamerasysteme für Innen- und Außenbereiche. Hochauflösende Aufzeichnung und
                  Live-Überwachung für maximale Sicherheit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>4K Ultra HD Kameras</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Nachtsicht-Technologie</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Remote-Zugriff per App</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Cloud- und lokale Speicherung</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mechanische Sicherheit */}
            <div id="mechanische-sicherheit" className="space-y-8 scroll-mt-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <Lock className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Mechanische Sicherheit</h2>
              </div>
              <Image
                src="/security-door-locks-and-window-protection-systems.jpg"
                alt="Mechanische Sicherheitstechnik"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-600">
                  Mechanische Sicherheitslösungen als erste Verteidigungslinie. Hochwertige Tür- und Fenstersicherungen
                  nach aktuellen Standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Sicherheitstüren und -schlösser</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Fenstersicherungen</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Tresore und Safes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Schließanlagen und Zutrittskontrolle</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Schutzraum */}
            <div id="schutzraum" className="space-y-8 scroll-mt-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <DoorClosed className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Schutzraum</h2>
              </div>
              <Image
                src="/secure-safe-room-panic-room-reinforced-door.jpg"
                alt="Schutzraum"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <p className="text-gray-600">
                  Professionelle Schutzraumlösungen bieten maximale Sicherheit in Notfallsituationen. Von der Planung
                  bis zur Umsetzung – wir realisieren Ihren sicheren Rückzugsort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Hochsichere Panikreäume</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Verstärkte Türen und Wände</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Notfall-Kommunikationssysteme</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Unabhängige Strom- und Luftversorgung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Bereich */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unser Service</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Von der ersten Beratung bis zur regelmäßigen Wartung – wir begleiten Sie langfristig.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle>Kostenlose Beratung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Individuelle Sicherheitsanalyse und maßgeschneiderte Lösungsvorschläge für Ihre Bedürfnisse.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle>Professionelle Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Fachgerechte Montage durch zertifizierte Techniker mit jahrelanger Erfahrung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle>Wartung & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Regelmäßige Wartung und 24/7 Notfallservice für dauerhaft zuverlässigen Schutz.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Bereit für mehr Sicherheit?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich kostenlos beraten und finden Sie die optimale Sicherheitslösung für Ihre Bedürfnisse.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">Jetzt Beratungstermin vereinbaren</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
