import FaqAuthorGerman from "@/components/common/FaqAuthor/FaqAuthorGerman";
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

const BISCertificateCompsitSyntheticFibreGerman  = () => {
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

export default BISCertificateCompsitSyntheticFibreGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Verbund-Synthetikfaserseile | IS 14928:2001 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Verbund-Synthetikfaserseile – Leitfaden IS 14928:2001";
  const twitterTitle =
    "BIS-Lizenz für Verbund-Synthetikfaserseile | IS 14928:2001";
  const metaDescription =
    "BIS-Zertifikat für Verbund-Synthetikfaserseile nach IS 14928:2001. Ablauf, Dokumente, Prüfung, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Verbund-Synthetikfaserseile nach IS 14928:2001. Ablauf, Kosten, Dokumente, Prüfung und Vorteile der BIS-Lizenz.";
  const twitterDescription =
    "BIS-Zertifikat für Verbund-Synthetikfaserseile nach IS 14928:2001 beantragen. BIS-Ablauf, Dokumente, Prüfung, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Verbund-Synthetikfaserseile, BIS-Lizenz für Verbund-Synthetikfaserseile, IS 14928:2001, BIS-Zertifizierung für Verbund-Synthetikfaserseile";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/verbund-synthetikfaserseile-is-14928";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter Betrieb bei Sun Certification India";

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
                    <Link to="/Blogs">Neueste Artikel</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifikat für Verbund-Synthetikfaserseile – IS
                    14928:2001
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
          BIS-Zertifizierung Verbund-Synthetikfaserseile – Vollständiger Leitfaden
          IS 14928:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCompositeSyntheticFibreRopes.png"
            title="BIS-Lizenz für Verbund-Synthetikfaserseile"
            alt="BIS-Zertifikat für Verbund-Synthetikfaserseile - IS 14928:2001 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Verbund-Synthetikfaserseile werden in der Schifffahrt, in Häfen,
          Offshore-Anlagen, Fischerei, Bauwesen, Landwirtschaft und bei der
          Schwerlast-Handhabung eingesetzt. Diese Seile werden aus zwei oder
          mehr synthetischen Fasern—z. B. Polyester, Polypropylen, Nylon oder
          anderen Kunstfasern—hergestellt und bieten eine ausgewogene Mischung
          aus Festigkeit, Flexibilität, Abriebfestigkeit, Auftrieb und
          Haltbarkeit. Da Verbund-Synthetikfaserseile häufig für tragende,
          Schlepp-, Verankerungs- und Hebeanwendungen sowie sicherheitskritische
          Einsätze genutzt werden, kann bereits ein kleiner Qualitätsmangel zu
          schweren Unfällen, Geräteschäden oder Betriebsausfällen führen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zur Risikobeherrschung und gleichbleibenden Qualität schreibt die
          indische Regierung die BIS-Zertifizierung für Verbund-Synthetikfaserseile
          nach der gültigen indischen Norm IS 14928:2001 vor. Ein gültiges
          BIS-Zertifikat für Verbund-Synthetikfaserseile ist für Hersteller und
          Importeure gesetzlich erforderlich, bevor diese Produkte in Indien
          hergestellt, verkauft, vertrieben oder importiert werden dürfen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Seite ist ein vollständiger, compliance-orientierter Leitfaden
          zur BIS-Zertifizierung für Verbund-Synthetikfaserseile, inklusive
          Anwendungsbereich der IS 14928:2001, Sicherheitszielen, Prüfanforderungen,
          Dokumentation, Kosten und schrittweisem Zertifizierungsablauf. Sie richtet
          sich an Hersteller, Importeure, ausländische Hersteller, Händler und
          Online-Verkäufer, die verstehen möchten, wie man eine BIS-Lizenz für
          Verbund-Synthetikfaserseile in Indien erhält.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein Konformitätsbewertungssystem für Produkte,
          das vom Bureau of Indian Standards (BIS) betrieben wird und auf dem
          BIS-Gesetz von 2016 basiert. Das BIS ist für die Entwicklung indischer
          Normen, die Zertifizierung von Produkten und die Einhaltung von
          Sicherheits-, Qualitäts- und Leistungsanforderungen für in Indien
          verkaufte Waren zuständig.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Bedeutung des BIS-Zertifikats bezieht sich auf die formelle
          Genehmigung durch das BIS, die bestätigt, dass ein Produkt der
          relevanten indischen Norm entspricht. Nach der Zertifizierung darf der
          Hersteller das BIS-Zertifizierungszeichen, allgemein als ISI-Zeichen
          bekannt, auf Produkt und Verpackung verwenden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Erklärung zum ISI-Zeichen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das ISI-Zeichen besagt, dass:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Das Produkt in einem vom BIS anerkannten Labor geprüft wurde</li>
          <li>Die Fertigungsstätte von BIS-Mitarbeitern bewertet wurde</li>
          <li>
            Laufende Qualitätskontroll- und Überwachungsmechanismen vorhanden sind
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Warum es das BIS gibt
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS dient dazu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verbraucher- und Arbeitssicherheit zu schützen</li>
          <li>Die Verbreitung mangelhafter Produkte zu verhindern</li>
          <li>Einheitlichkeit und Zuverlässigkeit industrieller Güter zu gewährleisten</li>
          <li>Regulierung und fairen Handel zu stärken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bei Verbund-Synthetikfaserseilen—oft unter gefährlichen und hohen
          Belastungen eingesetzt—spielt die BIS-Zertifizierung eine zentrale
          Rolle für Unfallvermeidung und Qualitätssicherung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Anwendbare BIS-Norm für Verbund-Synthetikfaserseile
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die für dieses Produkt geltende indische Norm ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14928:2001</strong> – Verbund-Synthetikfaserseile
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Norm legt Anforderungen an Materialien, Konstruktion, Abmessungen,
          Leistungseigenschaften, Kennzeichnung, Probenahme und Prüfung von
          Verbund-Synthetikfaserseilen fest.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendungsbereich der IS 14928:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die IS 14928:2001 umfasst:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Seile aus einer Kombination verschiedener synthetischer Fasern
          </li>
          <li>
            Verschiedene Seilkonstruktionen (geschlagene und geflochtene Strukturen)
          </li>
          <li>
            Seile für maritime, Fischerei-, Industrie- und Allgemeinanwendungen
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sicherheit, Leistung und Prüfziel
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Norm soll gewährleisten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ausreichende Bruchfestigkeit und Tragfähigkeit</li>
          <li>Gleichmäßigen Durchmesser und Konstruktionsqualität</li>
          <li>
            Beständigkeit gegen Abrieb, Feuchtigkeit und Umwelteinflüsse
          </li>
          <li>Vorhersehbare und sichere Leistung über die Nutzungsdauer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wer muss sich konform verhalten
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Einhaltung der IS 14928:2001 ist verpflichtend für:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller von Verbund-Synthetikfaserseilen</li>
          <li>Importeure, die diese Seile auf dem indischen Markt anbieten</li>
          <li>Ausländische Hersteller mit Vertrieb über indische Vertreter</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Verbund-Synthetikfaserseile verpflichtend ist
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Risiken für Verbraucher- und Arbeitssicherheit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verbund-Synthetikfaserseile werden eingesetzt für:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verankerungs- und Schleppbetrieb</li>
          <li>Heben und Sichern schwerer Lasten</li>
          <li>Fischernetze und maritime Ausrüstung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein Seilbruch kann zu Verletzungen, Todesfällen, Schiffsbeschädigungen
          und Projektverzögerungen führen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Gesetzliche Konformität
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gemäß BIS-Bekanntmachungen und Qualitätsanforderungen dürfen unter
          IS 14928:2001 fallende Produkte ohne BIS-Zertifizierung nicht legal
          verkauft werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Rechtliche Folgen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nichteinhaltung kann führen zu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Beschlagnahme nicht zertifizierter Produkte</li>
          <li>Geldstrafen nach dem BIS-Gesetz</li>
          <li>Strafverfolgung und rechtlichen Schritten</li>
          <li>Ablehnung der Importabfertigung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Markt- und Markenvorteile
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Eine BIS-Lizenz für Verbund-Synthetikfaserseile verbessert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Das Kundenvertrauen</li>
          <li>Die Teilnahmeberechtigung bei staatlichen und öffentlichen Ausschreibungen</li>
          <li>Die Glaubwürdigkeit der Marke im In- und Export</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess Schritt für Schritt für Verbund-Synthetikfaserseile
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendbarkeit und Normidentifikation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Prozess beginnt mit der Bestätigung, dass das Produkt unter die
          IS 14928:2001 fällt. Dazu gehört die Ermittlung von:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Faserzusammensetzung und -mischung</li>
          <li>Seilkonstruktionstyp</li>
          <li>Durchmesserbereich und vorgesehenem Einsatz</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Eine genaue Zuordnung vermeidet Prüffehler und Ablehnung des Antrags.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Onlineantragsverfahren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller müssen den BIS-Antrag online über das BIS-Portal stellen und
          einreichen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktdetails</li>
          <li>Werk- und Fertigungsinformationen</li>
          <li>Qualitätskontrollmaßnahmen</li>
          <li>Details zum Prüfantrag</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein korrekt ausgefüllter BIS-Antrag ist für eine zeitnahe Bearbeitung entscheidend.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gebühren und Kostenstruktur
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Kosten des BIS-Zertifikats umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühren</li>
          <li>Prüfkosten in BIS-anerkannten Laboren</li>
          <li>Werksinspektionsgebühren</li>
          <li>Jährliche Lizenz- und Kennzeichnungsgebühren</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Gesamtkosten der BIS-Zertifizierung variieren je nach Seilkonstruktion,
          Größenbereich und Prüfumfang. Eine gute Planung hilft, die Kosten der
          BIS-Zertifizierung und BIS-Lizenz effektiv zu steuern.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produktmusterprüfung (gemäß IS 14928:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produktmuster werden in BIS-anerkannten Laboren entnommen und geprüft,
          um die Konformität mit allen Anforderungen der Norm zu bestätigen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Werksinspektion und Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-Mitarbeiter führen ein Werksaudit durch, um zu prüfen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Steuerung des Fertigungsprozesses</li>
          <li>Rohstoffhandhabung</li>
          <li>Eigene Prüfeinrichtungen</li>
          <li>Qualitätssicherungssysteme und -aufzeichnungen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Erteilung der BIS-Lizenz und des ISI-Zeichens
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sind alle Anforderungen erfüllt, erteilt das BIS die Lizenz des Bureau of
          Indian Standards; der Hersteller darf dann das ISI-Zeichen auf
          Verbund-Synthetikfaserseilen verwenden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Konformität nach der Zertifizierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Zertifizierung muss der Lizenzinhaber:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eine gleichbleibende Produktqualität sicherstellen</li>
          <li>Periodische Überwachungsaudits zulassen</li>
          <li>Das BIS über Änderungen bei Material, Prozess oder Konstruktion informieren</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung erforderliche Dokumente
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werksregistrierungszertifikat</li>
          <li>Fertigungsablaufdiagramm</li>
          <li>Liste der Maschinen und Prüfgeräte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Firmengründungszertifikat</li>
          <li>GST-Registrierung</li>
          <li>Vollmacht für den Unterzeichner</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktspezifikationen und -zeichnungen</li>
          <li>Rohstoffspezifikationen</li>
          <li>Interne Prüfverfahren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vollständig ausgefülltes BIS-Antragsformular</li>
          <li>Prüfantragsschreiben</li>
          <li>Kennzeichnungs- und Etikettierungsdetails</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zusammen bilden diese die erforderlichen BIS-ZERTIFIZIERUNGSDOKUMENTE.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prüfanforderungen gemäß IS 14928:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pflichtprüfungen umfassen:
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
                  5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Konstruktion
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Struktur
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Behandlung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Seil
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Durchmesser
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Masse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bruchfestigkeit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Länge
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Alle Prüfungen dürfen nur in vom BIS anerkannten Laboren durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen und wie man sie vermeidet
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Falsche Produktklassifizierung</strong>
            <br />
            Lösung: Vor der Zertifizierung eine technische Bewertung durchführen.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Prüfungen nicht bestanden</strong>
            <br />
            Lösung: Rohstoffqualität und Prozesskontrollen an die IS 14928:2001 anpassen.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Unvollständige Dokumentation</strong>
            <br />
            Lösung: BIS-spezifische Unterlagen sorgfältig erstellen und vor der Einreichung prüfen.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Audit-Nichtkonformität</strong>
            <br />
            Lösung: Ordentliche Aufzeichnungen, Kalibrierung und interne Qualitätsprüfungen führen.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Hersteller und Importeure
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Vorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Einhaltung indischer Vorschriften</li>
          <li>Reibungslose Zollabfertigung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kommerzielle Vorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Teilnahmeberechtigung bei staatlichen und institutionellen Ausschreibungen</li>
          <li>Bessere Akzeptanz bei Käufern</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markenvorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Berechtigte Nutzung des BIS-Zeichens</li>
          <li>Größeres Vertrauen und Marktglaubwürdigkeit</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markterweiterung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zugang zu regulierten Branchen</li>
          <li>Langfristiges Geschäftswachstum</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanktionen bei Nichteinhaltung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Fehlen einer BIS-Zertifizierung kann führen zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hohen Geldstrafen</li>
          <li>Beschlagnahme oder Rückruf von Produkten</li>
          <li>Importverboten</li>
          <li>Strafverfolgung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer braucht die BIS-Zertifizierung für Verbund-Synthetikfaserseile?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Importeure</li>
          <li>Ausländische Hersteller mit Lieferung nach Indien</li>
          <li>Händler und Vertreiber</li>
          <li>Online-Verkäufer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Stelle, die Verbund-Synthetikfaserseile auf dem indischen Markt
          anbietet, muss die BIS-Konformität sicherstellen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat für Verbund-Synthetikfaserseile nach IS 14928:2001
          zu erhalten ist sowohl eine gesetzliche Pflicht als auch eine zentrale
          Sicherheitsanforderung. Eine gültige BIS-Zertifizierung bzw. BIS-Lizenz
          für Verbund-Synthetikfaserseile gewährleistet die Einhaltung der
          Vorschriften, schützt Endnutzer und stärkt die Glaubwürdigkeit am Markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für Hersteller und Importeure geht es bei der BIS-Zertifizierung nicht
          nur um die Genehmigung—sondern um Vertrauen, Sicherheit und nachhaltiges
          Geschäftswachstum. Mit fachgerechter Vorbereitung und fachkundiger
          Begleitung kann der BIS-Zertifizierungsprozess in Indien reibungslos
          und effizient abgeschlossen werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – BIS-Zertifizierung für Verbund-Synthetikfaserseile
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Was bedeutet BIS?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards (Indisches Normungsinstitut).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Ist die BIS-Zertifizierung für Verbund-Synthetikfaserseile verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, gemäß IS 14928:2001.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Was bedeutet BIS-Zertifikat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Zertifikat des Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Kann ich das BIS-Zertifikat online beantragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, über das offizielle BIS-Portal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Wie lange dauert die BIS-Zertifizierung?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In der Regel 1–2 Monate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Was kostet die BIS-Zertifizierung?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Es kommt auf den Prüf- und Auditumfang an.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Brauchen Importeure die BIS-Zertifizierung?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Importeure müssen sicherstellen, dass die Produkte zertifiziert sind.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Können ausländische Hersteller einen Antrag stellen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, über einen bevollmächtigten indischen Vertreter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Ist die BIS-Registrierung dasselbe wie die BIS-Lizenz?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nein, Faserseile erfordern eine BIS-Lizenz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Was passiert, wenn ein Produkt die Prüfung nicht besteht?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Korrekturmaßnahmen und eine erneute Prüfung sind erforderlich.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Ist die ISI-Kennzeichnung verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, nach der Zertifizierung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Wie lange gilt die BIS-Lizenz?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In der Regel 1–2 Jahre, verlängerbar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Sind Überwachungsaudits verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, das BIS führt regelmäßige Audits durch.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Kann der Lizenzumfang später erweitert werden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, durch Genehmigung einer Umfangserweiterung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Dürfen nicht zertifizierte Produkte online verkauft werden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nein, auch der Online-Verkauf erfordert BIS-Konformität.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-14928-2001-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Verbund-Synthetikfaserseile - PDF IS 14928:2001"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={1} />
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
              Unsere Leistungen
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
                alt="BIS-Logo"
                title="BIS-Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Zeichen (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO-Logo"
                title="CDSCO-Logo"
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
                alt="BISCRS-Logo"
                title="BISCRS-Logo"
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
                alt="Kunststoffabfallmanagement"
                title="Kunststoffabfallmanagement"
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
                alt="EPR-Zertifikat-Logo"
                title="EPR-Zertifikat-Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikat-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC-Logo"
                title="LMPC-Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikat-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS-Logo"
                title="BIS-Logo"
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
                alt="ISI-Zeichen-Logo"
                title="ISI-Zeichen-Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-Zeichen (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
