import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
            <div className="mb-4">
              <p className="mb-2">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Datenerfassung auf dieser Website</h3>
            <div className="mb-4">
              <p className="mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="mb-2">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
                Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="mb-2">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="mb-2">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="mb-2">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs).
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">2. Hosting</h2>
            <div className="mb-4">
              <p className="mb-2">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">Externes Hosting</h3>
              <p className="mb-2">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
                werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Datenschutz</h3>
            <div className="mb-4">
              <p className="mb-2">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie
                dieser Datenschutzerklärung.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <div className="mb-4">
              <p className="mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mb-1">
                <strong>BriCon Sicherheitstechnik UG (haftungsbeschränkt)</strong>
              </p>
              <p className="mb-1">Gewerbepark Görden</p>
              <p className="mb-1">Am Elisabethhof 14</p>
              <p className="mb-1">14772 Brandenburg an der Havel</p>
              <p className="mb-1">Telefon: +49 (0) 3381 79 73 434</p>
              <p className="mb-1">Telefax: +49 (0) 3381 79 73 44 917</p>
              <p className="mb-2">E-Mail: info@alarmsysteme-brandenburg.de</p>
              <p className="mb-2">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o.
                Ä.) entscheidet.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Speicherdauer</h3>
            <div className="mb-4">
              <p className="mb-2">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kontaktformular</h3>
            <div className="mb-4">
              <p className="mb-2">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="mb-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">5. Ihre Rechte</h2>
            <div className="mb-4">
              <p className="mb-2">Sie haben jederzeit das Recht:</p>
              <ul className="list-disc pl-6 mb-2 space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p className="mb-2">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns gerne eine E-Mail oder wenden Sie sich direkt
                an die für den Datenschutz verantwortliche Person in unserer Organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
