import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gray-700">Kontakt</span> aufnehmen
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Lassen Sie sich kostenlos beraten – wir finden die optimale Sicherheitslösung für Sie.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                  <CardDescription>
                    Erreichen Sie uns telefonisch, per E-Mail oder besuchen Sie uns vor Ort.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                      <p className="text-gray-600 mb-2">+49 3381 79 73 434</p>
                      <p className="text-sm text-gray-500">Rufen Sie uns an für eine persönliche Beratung</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                      <p className="text-gray-600 mb-2">info@alarmsysteme-brandenburg.de</p>
                      <p className="text-sm text-gray-500">Wir antworten innerhalb von 24 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600 mb-2">
                        Am Elisabethhof 14
                        <br />
                        14772 Brandenburg an der Havel
                      </p>
                      <p className="text-sm text-gray-500">Termine nach Vereinbarung</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Anfrage senden</CardTitle>
                  <CardDescription>
                    Schildern Sie uns Ihr Anliegen – wir melden uns schnellstmöglich bei Ihnen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Vorname *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                          placeholder="Ihr Vorname"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Nachname *</label>
                        <input
                          type="text"
                          required
                          className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                          placeholder="Ihr Nachname"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">E-Mail *</label>
                      <input
                        type="email"
                        required
                        className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Telefon</label>
                      <input
                        type="tel"
                        className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Betreff</label>
                      <select className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                        <option value="">Bitte wählen...</option>
                        <option value="beratung">Kostenlose Beratung</option>
                        <option value="alarmanlagen">Alarmanlagen</option>
                        <option value="videoueberwachung">Videoüberwachung</option>
                        <option value="mechanisch">Mechanische Sicherheit</option>
                        <option value="schutzraum">Schutzraum</option>
                        <option value="wartung">Wartung & Service</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Nachricht *</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full p-2.5 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" id="privacy" required className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        Ich habe die{" "}
                        <a href="/datenschutz" className="text-gray-700 hover:underline font-medium">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zu. *
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-base md:text-lg py-3">
                      Nachricht senden
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
