import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>

            <div className="mb-8">
              <p className="mb-2">
                <strong>BriCon Sicherheitstechnik UG (haftungsbeschränkt)</strong>
              </p>
              <p className="mb-2">Gewerbepark Görden</p>
              <p className="mb-2">Am Elisabethhof 14</p>
              <p className="mb-2">14772 Brandenburg an der Havel</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h3>
            <div className="mb-8">
              <p className="mb-2">Telefon: +49 (0) 3381 79 73 434</p>
              <p className="mb-2">Telefax: +49 (0) 3381 79 73 44 917</p>
              <p className="mb-2">E-Mail: info@alarmsysteme-brandenburg.de</p>
              <p className="mb-2">Internet: www.alarmsysteme-brandenburg.de</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Registereintrag</h3>
            <div className="mb-8">
              <p className="mb-2">Eintragung im Handelsregister Potsdam</p>
              <p className="mb-2">Registernummer: 28595P</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Geschäftsführung</h3>
            <div className="mb-8">
              <p className="mb-2">Björn Rüsing, Dirk Kronberg-Barty</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Widerspruch gegen Werbe-Mails</h3>
            <div className="mb-8">
              <p className="mb-4">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
                Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
                Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">EU-Streitschlichtung</h3>
            <div className="mb-8">
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  className="text-gray-700 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h3>
            <div className="mb-8">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
            <div className="mb-8">
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h3>
            <div className="mb-8">
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h3>
            <div className="mb-8">
              <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
