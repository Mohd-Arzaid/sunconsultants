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

const BISCertificateForTablesAndDesksUnitGerman = () => {
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

export default BISCertificateForTablesAndDesksUnitGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Tische & Schreibtische | IS 17633:2022 BIS-Lizenz";
  const ogTitle = "BIS-Zertifizierung für Tische & Schreibtische – IS 17633:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Tische & Schreibtische | IS 17633:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Tische & Schreibtische nach IS 17633:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Tische & Schreibtische nach IS 17633:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Tische & Schreibtische nach IS 17633:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien kennen.";
  const metaKeywords =
    "BIS-Zertifikat für Tische & Schreibtische, BIS-Lizenz für Tische & Schreibtische, IS 17633:2022, BIS-Zertifizierung für Tische & Schreibtische";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tische-und-schreibtische-is-17633";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    BIS-Zertifikat für Tische & Schreibtische – IS 17633:2022
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
          BIS-Zertifikat für Tische und Schreibtische – Vollständiger Leitfaden zur BIS-Zertifizierung IS 17633:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS-Lizenz für Tische und Schreibtische"
            alt="BIS-Zertifikat für Tische und Schreibtische - BIS-Zertifizierung IS 17633:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Tische und Schreibtische ist für alle
          Hersteller, Importeure und Verkäufer von Tischen und Schreibtischen in Indien obligatorisch.
          Gemäß der indischen Norm IS 17633:2022 – Tische und Schreibtische: Sicherheits-
          Anforderungen müssen diese Möbelstücke getestet und vom
          Bureau of Indian Standards (BIS) zertifiziert werden, bevor sie legal verkauft werden können
          auf dem indischen Markt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tische und Schreibtische sind wesentliche Bestandteile von Häusern, Büros, Schulen,
          Universitäten, Gewerberäumen, Gastronomieumgebungen und
          industriellen Arbeitsplätzen. Da sie oft Gewicht, Stöße und
          kontinuierliche Nutzung unterstützen, sind ihre strukturelle Festigkeit und Sicherheit kritisch.
          Um Verbraucherschutz und Produktzuverlässigkeit zu gewährleisten, schreibt das BIS
          obligatorische Zertifizierung vor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt IS 17633:2022, den BIS-Registrierungs-
          prozess, Tests, erforderliche Dokumentation, Gebühren, Zeitpläne, Strafen
          und Vorteile für Hersteller und Importeure.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein regulatorischer Compliance-Prozess, der von
          dem Bureau of Indian Standards, Indiens nationaler Normungsbehörde, verwaltet wird.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat bestätigt, dass das Produkt die Sicherheits-, Qualitäts-,
          Leistungs- und Haltbarkeitsanforderungen erfüllt, die von den indischen Normen festgelegt wurden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vorteile der BIS-Zertifizierung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gewährleistet Verbrauchersicherheit</li>
          <li>Unterstützt hochwertige Fertigung</li>
          <li>Reduziert das Produktausfallrisiko</li>
          <li>Verbessert die Marktakzeptanz</li>
          <li>Gesetzlich erforderlich unter BIS Quality Control Orders (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Genehmigung trägt das Produkt die BIS-Marke (ISI-Marke) zusammen mit
          der Lizenznummer.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Welche indische Norm gilt für Tische & Schreibtische? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die anwendbare BIS-Norm ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Tische und Schreibtische: Sicherheits-
          Anforderungen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Norm definiert Leistungs-, strukturelle Sicherheits- und Haltbarkeits-
          anforderungen für alle Arten von Tischen und Schreibtischen, die in Wohn-,
          gewerblichen, gastronomischen und institutionellen Umgebungen verwendet werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Abgedeckte Produkte
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Büroschreibtische</li>
          <li>Computerschreibtische</li>
          <li>Arbeitstische</li>
          <li>Esstische</li>
          <li>Couch-Tische</li>
          <li>Arbeitsschreibtische</li>
          <li>Schulungstische</li>
          <li>Schul-/Hochschulschreibtische</li>
          <li>Lehrertische</li>
          <li>Modulare Arbeitsplatz-Tische</li>
          <li>Schreibtische</li>
          <li>Besprechungs-/Konferenztische</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wichtige Sicherheitsparameter unter IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Stabilität</li>
          <li>Tragfähigkeit</li>
          <li>Schlagfestigkeit</li>
          <li>Horizontale/vertikale Kraftleistung</li>
          <li>Oberflächenqualität</li>
          <li>Kantensicherheit</li>
          <li>Haltbarkeit bei wiederholter Nutzung</li>
          <li>Materialsicherheit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder in Indien verkaufte Tisch oder Schreibtisch muss diesen Parametern entsprechen
          durch BIS-Registrierung für Tische & Schreibtische.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Tische und Schreibtische obligatorisch ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tische und Schreibtische sind häufig genutzte Möbelstücke, die in Häusern, Büros,
          Schulen und öffentlichen Bereichen zu finden sind. Strukturelle Ausfälle können Unfälle verursachen
          wie:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zusammenbruch unter Gewicht</li>
          <li>Verletzungen durch scharfe Kanten</li>
          <li>Instabilität während der Nutzung</li>
          <li>Bruch von Verbindungen</li>
          <li>Oberflächenablösung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Um diese Gefahren zu vermeiden, gewährleistet die BIS-Zertifizierung:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sichere Konstruktion und Bauweise</li>
          <li>Einhaltung der strukturellen Lastanforderungen</li>
          <li>Langlebige Leistung</li>
          <li>Verhinderung von Kippen und Zusammenbruch</li>
          <li>Hochwertige Materialauswahl</li>
          <li>Einheitliche Marktstandards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Verkauf von Tischen und Schreibtischen ohne BIS-Lizenz für Tische & Schreibtische ist
          in Indien illegal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Tische und Schreibtische (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess folgt dem ISI-Schema (Konformitäts-
          Bewertungsschema–I), das Produkttests und Fabrikinspektionen umfasst.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Produktkategorie & Norm identifizieren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bestätigen Sie, dass der Tisch/Schreibtisch unter IS 17633:2022 fällt. Identifizieren Sie die Anzahl
          der Varianten und Materialien.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – BIS-Antrag einreichen (Online-Einreichung)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Füllen Sie den Antrag im BIS Manak Online-Portal aus mit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerdetails</li>
          <li>Fabrikadresse</li>
          <li>Produktspezifikationen</li>
          <li>Markendetails</li>
          <li>Qualitätskontrollsysteme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – Zahlung der BIS-Zertifizierungsgebühren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Umfasst:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Produkttestgebühren</li>
          <li>Fabrikinspektionsgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Musterprüfung in einem BIS-anerkannten Labor
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Produkte müssen vollständige Tests durchlaufen, wie unter IS 17633:2022 vorgeschrieben.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Durchgeführte Tests
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitätstest</li>
          <li>Festigkeitstest (statische Last)</li>
          <li>Haltbarkeitstest (wiederholte Belastung)</li>
          <li>Schlagtest</li>
          <li>Durchbiegungsmessung</li>
          <li>Kanten- und Oberflächensicherheitstest</li>
          <li>Arbeitsplatzlasttest</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das Labor lädt die Testberichte direkt an das BIS hoch.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – BIS-Fabrikinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter besucht die Fertigungsstätte, um zu überprüfen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Qualitätsmanagementsystem</li>
          <li>Interne Testfähigkeit</li>
          <li>Rohstoffkontrolle</li>
          <li>Produktionslinie & Maschinen</li>
          <li>Kalibrierung von Instrumenten</li>
          <li>Einhaltung von STI (Schema für Tests & Inspektion)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Das BIS erteilt:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Marken-Genehmigung</li>
          <li>Eindeutige CML-Lizenznummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Danach kann der Hersteller Tische/Schreibtische legal kennzeichnen und in
          Indien verkaufen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Compliance nach Lizenzierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aufzeichnungen gemäß STI führen</li>
          <li>ISI-Kennzeichnung korrekt verwenden</li>
          <li>Periodische BIS-Inspektionen zulassen</li>
          <li>Lizenz alle 1–2 Jahre erneuern</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Tische & Schreibtische
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Diese Norm deckt die Anforderungen bezüglich
          der Leistung und Sicherheit ab, d. h. Festigkeit, Stabilität und Haltbarkeit
          von Tischen und Schreibtischen, die in sitzender und/oder stehender
          Position verwendet werden, von Erwachsenen genutzt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Diese Norm gilt für vollständig hergestellte/
          gefertigte Tische und Schreibtische. Sie gilt auch für montagefertige
          Einheiten; in diesem Fall gelten die Anforderungen dieser Norm für
          die montierten Einheiten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Erforderliche Dokumente für die BIS-Zertifizierung von Tischen & Schreibtischen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fertigungsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriklizenz</li>
          <li>Maschinenliste</li>
          <li>Testausrüstungsliste</li>
          <li>Kalibrierungszertifikate</li>
          <li>Fabriklayout</li>
          <li>Prozessablaufdiagramm</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tisch-/Schreibtisch-Zeichnungen</li>
          <li>Stückliste</li>
          <li>Produktspezifikationen</li>
          <li>Interne Qualitätstestberichte</li>
          <li>Fotos/Videos des Produkts</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ausweiskopie des autorisierten Unterzeichners</li>
          <li>Adressnachweis</li>
          <li>Markenautorisierungsschreiben</li>
          <li>Markenregistrierungszertifikat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ausgefülltes Antragsformular</li>
          <li>Herstellerverpflichtung</li>
          <li>Testanfrageschreiben</li>
          <li>Autorisierungsschreiben</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vollständige Dokumentation gewährleistet schnellere Genehmigungen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen unter IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Tests bewerten Festigkeit, Stabilität, Haltbarkeit und Sicherheit.
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
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Design und Verarbeitung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilitätstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Angegebene Last
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Für gelegentliche schwere Lasten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit unter horizontaler statischer Kraft
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Allgemein
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikaler Schlagtest für Glastischplatten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikaler Schlagtest für alle anderen Tischplatten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Durchbiegung von Tischplatten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Falltest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests müssen nur in BIS-genehmigten Labors durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen & Wie man sie vermeidet
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Produkt fällt bei Last- oder Haltbarkeitstests durch</strong>
            <br />
            Lösung: Verbindungen verstärken, BIS-konforme Materialien verwenden, Verstärkung
            hinzufügen.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Unvollständige Dokumentation</strong>
            <br />
            Lösung: Alle rechtlichen, technischen und Fertigungsdokumente
            im Voraus vorbereiten.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Fabrik fehlt geeignete Testausrüstung</strong>
            <br />
            Lösung: Erforderliche Instrumente installieren und Kalibrierung gemäß
            BIS-Richtlinien aufrechterhalten.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Falsche Kennzeichnung</strong>
            <br />
            Lösung: Sicherstellen, dass die ISI-Kennzeichnung den BIS-Regeln genau folgt.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Fehlklassifizierung von Produktmodellen</strong>
            <br />
            Lösung: Professionelle Beratung einholen, um Varianten
            korrekt zu kategorisieren.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Tische & Schreibtische
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtliche Autorisierung zum Verkauf in Indien</li>
          <li>Erhöhtes Kundenvertrauen</li>
          <li>Bessere Produkthaltbarkeit</li>
          <li>Zugang zu großen Einzelhändlern & E-Commerce-Plattformen</li>
          <li>Geringeres Produkthaftungsrisiko</li>
          <li>Höhere Markenglaubwürdigkeit</li>
          <li>Einhaltung staatlicher QCOs</li>
          <li>Wettbewerbsvorteil auf dem Markt</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf oder die Verteilung von Tischen/Schreibtischen ohne BIS-Zertifizierung kann
          führen zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktbeschlagnahme</li>
          <li>Schwere Geldstrafen</li>
          <li>Strafrechtliche Verfolgung</li>
          <li>Importverbot</li>
          <li>Geschäftsschließungsanordnungen</li>
          <li>Lizenzwiderruf</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Bureau of Indian Standards Act, 2016 verhängt strenge Strafen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt die BIS-Zertifizierung für Tische & Schreibtische?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Zertifizierung ist obligatorisch für:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller</li>
          <li>Importeure</li>
          <li>Händler/Markeninhaber</li>
          <li>OEM/ODM-Lieferanten</li>
          <li>Möbelhändler</li>
          <li>E-Commerce-Verkäufer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Fabrik muss eine separate BIS-Lizenz erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum uns für BIS-Zertifizierungsberatung wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wir bieten umfassende Unterstützung:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Normeninterpretation (IS 17633:2022)</li>
          <li>Produktklassifizierung</li>
          <li>Dokumentationserstellung</li>
          <li>Testkoordination</li>
          <li>BIS-Portal-Einreichung</li>
          <li>Fabrikinspektionsunterstützung</li>
          <li>Kontinuierliche Nachverfolgung mit BIS</li>
          <li>Lizenzgenehmigung</li>
          <li>Verlängerung und Compliance-Management</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unsere Expertise gewährleistet schnelle, problemlose und fehlerfreie Zertifizierung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Tische und Schreibtische unter IS 17633:2022 ist eine
          obligatorische Konformitätsanforderung, die Produktsicherheit,
          Leistung, Haltbarkeit und Einhaltung nationaler Normen gewährleistet.
          Hersteller und Importeure müssen Produkttests, Fabrik-
          inspektionen durchlaufen und alle BIS-Dokumentations- und Kennzeichnungsregeln einhalten, um
          die ISI-Marke zu erhalten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit fachkundiger Unterstützung wird der gesamte Zertifizierungsprozess
          reibungslos, schnell und vollständig konform mit BIS-Vorschriften.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – BIS-Zertifikat für Tische & Schreibtische (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für Tische und Schreibtische obligatorisch?
              </strong>
              <br />
              Ja. Gemäß IS 17633:2022 müssen alle Tische und Schreibtische
              BIS-zertifiziert sein, bevor sie in Indien verkauft werden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welche Tests sind für die Zertifizierung erforderlich?</strong>
              <br />
              Obligatorische Tests umfassen Stabilitäts-, Festigkeits-, Haltbarkeits-,
              Durchbiegungs-, Schlag- und Oberflächensicherheitstests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wie hoch sind die BIS-Zertifizierungskosten?</strong>
              <br />
              Die Kosten liegen zwischen ₹65.000 – ₹1.30.000, abhängig von Test-
              und Inspektionsfaktoren.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Benötigen ausländische Hersteller die BIS-Zertifizierung?
              </strong>
              <br />
              Ja, über das FMCS-Schema, das Übersee-Fabrik-
              inspektionen durch das BIS umfasst.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Kann eine Lizenz mehrere Tisch-/Schreibtisch-Modelle abdecken?
              </strong>
              <br />
              Ja, aber nur wenn die Modelle in Konstruktion und Test-
              parametern ähnlich sind.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wie lange dauert der BIS-Prozess?</strong>
              <br />
              Etwa 30–45 Tage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Ist das Testen in einem BIS-anerkannten Labor obligatorisch?</strong>
              <br />
              Ja, nur BIS-genehmigte Labors können die Tests durchführen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Was passiert, wenn das Produkt durchfällt?</strong>
              <br />
              Es muss neu gestaltet und erneut zur Prüfung eingereicht werden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Ist die ISI-Kennzeichnung nach der Zertifizierung obligatorisch?</strong>
              <br />
              Ja, die ISI-Marke ist auf dem Produkt und der Verpackung erforderlich.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Welche Dokumente werden benötigt?</strong>
              <br />
              Technische Zeichnungen, Stückliste, Fabrikdokumente, Testberichte, QC-Plan
              und rechtliche Dokumente.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Tische & Schreibtische - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={2} />
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
                Indiens Bester Zertifikatsberater
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
              BIS-Marke (ISI-Lizenz) für ausländische Fertigung
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
                alt="EPR-Zertifikat logo"
                title="EPR-Zertifikat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikat Zertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC-Zertifikat logo"
                title="LMPC-Zertifikat logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikat Zertifizierungen
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
                alt="ISI-Marke logo"
                title="ISI-Marke logo"
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
