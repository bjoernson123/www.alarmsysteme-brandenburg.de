import { CheckCircle, Award, Users, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Über <span className="text-gray-700">Bricon Sicherheitstechnik</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Ihr vertrauensvoller Partner für professionelle Sicherheitstechnik in Brandenburg und Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* Unternehmen */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sicherheit ist unser Handwerk
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Seit über 15 Jahren sind wir Ihr regionaler Spezialist für Sicherheitstechnik in Brandenburg an der
                Havel und Umgebung. Unser erfahrenes Team plant, installiert und wartet Ihre Sicherheitsanlagen mit
                höchster Professionalität und Zuverlässigkeit.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Als VdS-zertifizierter Fachbetrieb stehen wir für Qualität, Kompetenz und Vertrauen. Wir verstehen, dass
                Sicherheit mehr ist als nur Technik – es geht um Ihr Wohlbefinden und den Schutz dessen, was Ihnen
                wichtig ist.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>VdS-zertifizierte Fachkräfte</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Über 15 Jahre Branchenerfahrung</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>500+ erfolgreich realisierte Projekte</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>24/7 Notfallservice</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/security-technician-installing-alarm-system.jpg"
                alt="Professionelle Installation von Sicherheitstechnik"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns in allem, was wir tun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Qualität</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Wir verwenden nur hochwertige, zertifizierte Komponenten und arbeiten nach den neuesten Standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Vertrauen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparente Beratung, faire Preise und zuverlässige Umsetzung – darauf können Sie sich verlassen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Zuverlässigkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pünktliche Termine, schnelle Reaktionszeiten und langfristige Betreuung Ihrer Anlagen.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200">
              <CardHeader>
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-gray-700" />
                </div>
                <CardTitle>Kompetenz</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kontinuliche Weiterbildung und Zertifizierungen halten unser Wissen auf dem neuesten Stand.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie einen unverbindlichen Beratungstermin und überzeugen Sie sich von unserer Kompetenz.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
