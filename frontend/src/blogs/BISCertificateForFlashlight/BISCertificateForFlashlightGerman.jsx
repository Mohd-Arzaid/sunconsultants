import FaqAuthorEngGerman from "@/components/common/FaqAuthor/FaqAuthorEngGerman";
import ManyUsersAlsoReadGerman from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadGerman";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterGerman from "@/components/manual/Footer/FooterGerman";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForFlashlightGerman = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default BISCertificateForFlashlightGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Taschenlampe | IS 2083:2024 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Taschenlampe – IS 2083:2024 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Taschenlampe | IS 2083:2024";
  const metaDescription =
    "Erhalten Sie das BIS-Zertifikat für Taschenlampe gemäß IS 2083:2024. Prozess, Dokumente, Tests, Kosten und Zeitrahmen für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Taschenlampe gemäß IS 2083:2024. Erfahren Sie mehr über Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie das BIS-Zertifikat für Taschenlampe gemäß IS 2083:2024. Erfahren Sie mehr über BIS-Prozess, Dokumente, Tests, Gebühren und Zeitrahmen in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Taschenlampe, BIS-Lizenz für Taschenlampe, IS 2083:2024, BIS-Zertifizierung für Taschenlampe";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/taschenlampe-is-2083";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter der Operationen bei Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Startseite</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Neueste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifikat für Taschenlampe – IS 2083:2024
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifikat für Taschenlampe gemäß IS 2083:2024 – Vollständiger
          Compliance-Leitfaden
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="BIS-Lizenz für Taschenlampe"
            alt="BIS-Zertifikat für Taschenlampe - IS 2083:2024 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Taschenlampen (gemeinhin als Taschenlampen bezeichnet) sind
          wesentliche tragbare Beleuchtungsgeräte, die in Haushalten,
          Industrien, Notfalldiensten, Sicherheitseinsätzen, Outdoor-Aktivitäten
          und Katastrophenmanagement eingesetzt werden. Da Taschenlampen
          elektrische Produkte sind, die Batterien, Schaltkreise, Lichtquellen
          und Gehäuse umfassen, ist die Einhaltung von Qualitäts- und
          Sicherheitsstandards von entscheidender Bedeutung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zur Regulierung der Produktqualität, Leistung und
          Verbrauchersicherheit hat das Bureau of Indian Standards (BIS) die IS
          2083:2024 – Taschenlampe: Spezifikation benachrichtigt und die
          BIS-Zertifizierung für in Indien verkaufte, hergestellte oder
          importierte Taschenlampen obligatorisch gemacht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Seite bietet eine umfassende und originale Erklärung der
          BIS-Zertifizierung für Taschenlampen und deckt den anwendbaren
          Standard, den Zertifizierungsprozess, Testanforderungen,
          Dokumentation, Gebühren, Zeitrahmen, Strafen und
          Compliance-Verantwortlichkeiten ab.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung und warum gilt sie für Taschenlampen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Bureau of Indian Standards (BIS) ist Indiens nationale
          Normungsbehörde, die dafür verantwortlich ist, dass auf dem indischen
          Markt verkaufte Produkte vorgeschriebene Sicherheits-, Qualitäts- und
          Leistungsstandards erfüllen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung der BIS-Zertifizierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Zertifikat bestätigt, dass eine Taschenlampe:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dem indischen Standard IS 2083:2024 entspricht</li>
          <li>Alle obligatorischen Labortests bestanden hat</li>
          <li>Elektrische, mechanische und Leistungsanforderungen erfüllt</li>
          <li>Für den Verbrauchergebrauch sicher ist</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Genehmigung ist der Hersteller berechtigt, die ISI-Marke
          anzubringen, die die Einhaltung der indischen Standards signalisiert.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Anwendbarer indischer Standard – IS 2083:2024 (Taschenlampe:
          Spezifikation)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Taschenlampe: Spezifikation
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 definiert die Konstruktions-, Leistungs-, Sicherheits-
          und Testanforderungen für tragbare Taschenlampen zur allgemeinen
          Beleuchtung.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendungsbereich von IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Standard umfasst:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Handgehaltene Taschenlampen (Fackeln)</li>
          <li>Batteriebetriebene Taschenlampen</li>
          <li>Wiederaufladbare Taschenlampen</li>
          <li>LED-Taschenlampen</li>
          <li>Not- und Gebrauchstaschenlampen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schlüsselbereiche des Standards
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische Sicherheit</li>
          <li>Lichtleistung</li>
          <li>Mechanische Festigkeit</li>
          <li>Batteriekompatibilität</li>
          <li>Schalterhaltbarkeit</li>
          <li>Schutz vor Überhitzung</li>
          <li>Widerstand gegen normalen Verschleiß</li>
          <li>Kennzeichnungs- und Etikettierungsanforderungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Taschenlampe, die unter diesen Anwendungsbereich fällt, muss eine
          BIS-Lizenz für Taschenlampen erhalten, bevor sie auf den indischen
          Markt gelangt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum ist die BIS-Zertifizierung für Taschenlampen obligatorisch
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Taschenlampen werden von Verbrauchern aller Altersgruppen und in
          kritischen Situationen wie Notfällen, Stromausfällen und industriellen
          Betrieben weit verbreitet eingesetzt. Minderwertige Taschenlampen
          können verursachen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische Kurzschlüsse</li>
          <li>Batterieleckage oder Explosion</li>
          <li>Überhitzung</li>
          <li>Brandgefahr</li>
          <li>Schlechte Beleuchtungsleistung</li>
          <li>Vorzeitiger Ausfall</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Zertifizierung gewährleistet
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Elektrische und Benutzersicherheit</li>
          <li>Konstante Lichtleistung</li>
          <li>Langlebige Konstruktion</li>
          <li>Sicherer Batteriebetrieb</li>
          <li>Einhaltung der indischen regulatorischen Anforderungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Verkauf nicht zertifizierter Taschenlampen ist ein Rechtsverstoß
          gemäß dem BIS-Gesetz von 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Anwendungsbereich der BIS-Lizenz für Taschenlampen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Diese Norm legt die Anforderungen und Tests für
          Taschenlampen fest, die mit austauschbaren Primärbatterien und
          austauschbaren/eingebauten Sekundärbatterien mit einer maximalen
          Spannung von 48 V Gleichstrom betrieben werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Diese Norm gilt für vorfokussierte sowie
          fokussierbare Taschenlampen mit Glühlampe und LED-Modul als
          Lichtquelle.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> Die folgenden sind nicht im Anwendungsbereich
          dieser Norm enthalten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Kabel- und steckerverbundene Handleuchten, die in den
            Anwendungsbereich von IS 10322 (Teil 5/Abschnitt 6) fallen;
          </li>
          <li>
            Notbeleuchtung, die in den Anwendungsbereich von IS 10322 (Teil
            5/Abschnitt 8) fällt; und
          </li>
          <li>Taschenlampen, die für gefährliche Standorte bestimmt sind.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Taschenlampen (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess für Taschenlampen wird im Rahmen des
          ISI-Markenzertifizierungsschemas (Schema-I) durchgeführt und umfasst
          mehrere Phasen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Produktidentifikation & Standardzuordnung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Hersteller muss bestätigen, dass das Produkt gemäß IS 2083:2024
          als Taschenlampe qualifiziert ist und Folgendes identifizieren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Art der Taschenlampe</li>
          <li>Stromquelle (Batterie/wiederaufladbar)</li>
          <li>Lichtquelle (LED, Glühlampe usw.)</li>
          <li>Varianten und Modelle</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – Online-BIS-Antrag
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Antrag wird über das BIS Manak Online-Portal eingereicht, zusammen
          mit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerangaben</li>
          <li>Fabrikadresse</li>
          <li>Produktbeschreibung</li>
          <li>Marken-/Markenzeichenangaben</li>
          <li>Informationen zum Herstellungsprozess</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – Zahlung der BIS-Gebühren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Anwendbare Gebühren umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühren</li>
          <li>Produkttestgebühren</li>
          <li>Fabrikinspektionsgebühren</li>
          <li>Markierungsgebühr</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Produkttest gemäß IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proben werden in einem BIS-anerkannten Labor getestet.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Obligatorische Tests für Taschenlampen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lichtstärketest</li>
          <li>Lichtleistungsstabilitätstest</li>
          <li>Batterie-Ausdauertest</li>
          <li>Schalterbetriebstest</li>
          <li>Mechanische Festigkeit (Falltest)</li>
          <li>Isolationswiderstandstest</li>
          <li>Temperaturanstiegstest</li>
          <li>Elektrischer Sicherheitstest</li>
          <li>Kennzeichnungs- und Etikettierungsprüfung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testberichte werden vom Labor direkt an BIS übermittelt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Fabrikinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beauftragter führt eine Vor-Ort-Inspektion durch, um Folgendes
          zu überprüfen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungsaufbau</li>
          <li>Qualitätskontrollsystem</li>
          <li>Eingangsinspektion von Materialien</li>
          <li>Prozesskontrolle</li>
          <li>Fertigprodukttest</li>
          <li>Kalibrierung von Prüfinstrumenten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Einhaltung des Prüf- und Inspektionsschemas (STI) ist
          obligatorisch.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach erfolgreichen Tests und Inspektion stellt BIS Folgendes aus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Markengenehmigung</li>
          <li>CML (Certificate of Manufacturing Licence) Nummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Hersteller kann nun legal Taschenlampen in Indien herstellen und
          verkaufen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Compliance nach der Zertifizierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach der Zertifizierung müssen Hersteller:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI-Marke korrekt auf Produkt und Verpackung verwenden</li>
          <li>Chargenweise Qualitätsaufzeichnungen führen</li>
          <li>BIS-Überwachungsinspektionen zulassen</li>
          <li>Lizenz regelmäßig erneuern</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Erforderliche Dokumente für die BIS-Zertifizierung von Taschenlampen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fertigungsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikregistrierung/Lizenz</li>
          <li>Fertigungsprozess-Flussdiagramm</li>
          <li>Maschinenliste</li>
          <li>Interne Testausrüstungsliste</li>
          <li>Kalibrierungszertifikate</li>
          <li>Fabriklayout</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktspezifikationsblatt</li>
          <li>Schaltpläne</li>
          <li>Batteriespezifikationen</li>
          <li>Stückliste</li>
          <li>Interne Testberichte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identitätsnachweis des autorisierten Unterzeichners</li>
          <li>Adressnachweis</li>
          <li>Markenermächtigungsschreiben</li>
          <li>Markenzertifikat (falls zutreffend)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-spezifische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Antragsformular</li>
          <li>Verpflichtungen und Erklärungen</li>
          <li>Testanforderungsschreiben</li>
          <li>Etikettengestaltung (ISI-Markierungsformat)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen gemäß IS 2083:2024 (Detailliert)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Taschenlampen müssen strengen Tests unterzogen werden, um Sicherheit
          und Leistung zu gewährleisten.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nur Produkte, die alle obligatorischen Tests bestehen, qualifizieren
          sich für die BIS-Genehmigung.
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Klausel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Anforderung
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test für Oberflächenveredelung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Überprüfung der Abmessungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Überprüfung der Kennzeichnungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Funktionstest für Schalter
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolationswiderstandstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lichtverteilungstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Schaltkreisstrom der LED-Taschenlampe
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test für Ladestrom bei wiederaufladbaren Taschenlampen mit
                  eingebauter Batterie
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen bei der BIS-Zertifizierung für Taschenlampen
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fehler beim Temperaturanstiegstest</li>
          <li>Inkonsistente Lichtleistung</li>
          <li>Schlechte Schalterhaltbarkeit</li>
          <li>Batteriekompatibilitätsprobleme</li>
          <li>Falsches ISI-Etikettenformat</li>
          <li>Unvollständige Dokumentation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vortests und Expertenberatung reduzieren Ablehnungsrisiken erheblich.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Taschenlampen-Hersteller
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtliche Erlaubnis zum Verkauf in Indien</li>
          <li>Erhöhtes Verbrauchervertrauen</li>
          <li>Verbesserte Produktzuverlässigkeit</li>
          <li>Akzeptanz auf E-Commerce-Plattformen</li>
          <li>Berechtigung für öffentliche Beschaffung</li>
          <li>Reduzierte Haftung und Rückrufe</li>
          <li>Starke Markenglaubwürdigkeit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen für den Verkauf von Taschenlampen ohne BIS-Zertifizierung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nichteinhaltung kann zu Folgendem führen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktbeschlagnahmung</li>
          <li>Hohe Geldstrafen</li>
          <li>Importverbote</li>
          <li>Produktionsstilllegungen</li>
          <li>Strafrechtliche Verfolgung gemäß BIS-Gesetz</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt eine BIS-Zertifizierung für Taschenlampen?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller, die nach Indien exportieren</li>
          <li>Importeure</li>
          <li>Markeninhaber</li>
          <li>OEM/ODM-Lieferanten</li>
          <li>Online-Verkäufer und Händler</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Produktionseinheit benötigt eine separate BIS-Lizenz.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Taschenlampen gemäß IS 2083:2024 ist eine
          obligatorische regulatorische Anforderung, die Sicherheit, Leistung
          und Zuverlässigkeit tragbarer Beleuchtungsprodukte in Indien
          gewährleistet. Die Einhaltung schützt nicht nur Verbraucher, sondern
          stärkt auch die Markenglaubwürdigkeit und den Marktzugang. Mit
          professioneller Beratung können Hersteller und Importeure die
          BIS-Zertifizierung reibungslos und effizient erreichen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS-Zertifikat für Taschenlampe (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für Taschenlampen in Indien
                obligatorisch?
              </strong>
              <br />
              Ja. Taschenlampen, die unter IS 2083:2024 fallen, müssen
              BIS-zertifiziert sein.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welche Norm gilt für Taschenlampen?</strong>
              <br />
              IS 2083:2024 – Taschenlampe: Spezifikation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wie lange dauert der BIS-Prozess?</strong>
              <br />
              Etwa 30–45 Arbeitstage für indische Hersteller und etwa 120 Tage
              für ausländische Hersteller.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Können ausländische Hersteller eine BIS-Zertifizierung
                beantragen?
              </strong>
              <br />
              Ja, über das FMCS-Schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Ist die ISI-Kennzeichnung obligatorisch?</strong>
              <br />
              Ja, die ISI-Marke muss auf zertifizierten Taschenlampen angebracht
              sein.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Was passiert, wenn eine Taschenlampe die Tests nicht besteht?
              </strong>
              <br />
              Das Produkt muss korrigiert und erneut getestet werden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Sind wiederaufladbare Taschenlampen auch abgedeckt?
              </strong>
              <br />
              Ja, wenn sie in den Anwendungsbereich von IS 2083:2024 fallen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Wie lange ist die BIS-Lizenz gültig?</strong>
              <br />
              1–2 Jahre, erneuerbar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Können mehrere Modelle unter einer Lizenz abgedeckt werden?
              </strong>
              <br />
              Ja, wenn sie die Ähnlichkeitskriterien erfüllen.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-2083-2024-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Taschenlampe - IS 2083:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadGerman />
        <FaqAuthorEngGerman questionNumber={4} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifizierungsberater
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Marke (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registrierung
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfallmanagement
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Registrierungszertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-MARKE (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
