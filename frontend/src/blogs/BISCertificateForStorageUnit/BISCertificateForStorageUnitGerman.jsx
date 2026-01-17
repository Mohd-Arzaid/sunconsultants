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

const BISCertificateForStorageUnitGerman = () => {
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

export default BISCertificateForStorageUnitGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Lagereinheiten | IS 17634:2022 BIS-Lizenz";
  const ogTitle = "BIS-Zertifizierung für Lagereinheiten – IS 17634:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Lagereinheiten | IS 17634:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Lagereinheiten nach IS 17634:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Lagereinheiten nach IS 17634:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Lagereinheiten nach IS 17634:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien kennen.";
  const metaKeywords =
    "BIS-Zertifikat für Lagereinheiten, BIS-Lizenz für Lagereinheiten, IS 17634:2022, BIS-Zertifizierung für Lagereinheiten";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/lagereinheiten-is-17634";
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
                    BIS-Zertifikat für Lagereinheiten – IS 17634:2022
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
          BIS-Zertifikat für Lagereinheiten – Vollständiger Leitfaden zur IS 17634:2022
          BIS-Zertifizierung
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforStorageUnits.png"
            title="BIS-Lizenz für Lagereinheiten"
            alt="BIS-Zertifikat für Lagereinheiten - IS 17634:2022 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Lagereinheiten ist eine obligatorische Anforderung gemäß
          dem indischen Standard IS 17634:2022. Dieser Standard deckt die wesentlichen
          Sicherheits-, Haltbarkeits- und strukturellen Leistungsanforderungen für alle
          Arten von Lagermöbeln ab, die in Wohnungen, Büros, Schulen, gewerblichen
          Einrichtungen und Industrieanlagen verwendet werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Lagereinheiten umfassen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schränke</li>
          <li>Kleiderschränke</li>
          <li>Regaleinheiten</li>
          <li>Schubladen & Kommoden</li>
          <li>Aktenschränke</li>
          <li>Seitenlagereinheiten</li>
          <li>Modulare Lagersysteme</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Da Lagereinheiten in Wohn- und Gewerberäumen weit verbreitet sind, sind ihre
          strukturelle Stabilität und Sicherheit äußerst wichtig. Minderwertige
          Lagereinheiten können umkippen, zusammenbrechen oder aufgrund von scharfen
          Kanten, schwachen Verbindungen oder instabiler Konstruktion Verletzungen
          verursachen. Um die Kundensicherheit und Produktqualität zu gewährleisten, ist
          die BIS-Zertifizierung für Lagereinheiten in Indien obligatorisch.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser vollständige Leitfaden erläutert IS 17634:2022, Zertifizierungsanforderungen,
          BIS-Prozess, Dokumentation, Tests, Gebühren, Zeitpläne, Strafen und Vorteile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist eine BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist eine Konformitätsbewertung durch Dritte, die vom
          Bureau of Indian Standards ausgestellt wird und sicherstellt, dass Produkte den
          indischen Sicherheits- und Qualitätsstandards entsprechen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Zertifikat bestätigt, dass ein Produkt:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Den indischen Standards entspricht</li>
          <li>Laborprüfungen bestanden hat</li>
          <li>Einer Werksinspektion unterzogen wurde</li>
          <li>Kontinuierliche Qualitätskontrolle befolgt</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zertifizierte Produkte tragen das BIS-Zeichen (ISI-Zeichen).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Welcher BIS-Standard gilt für Lagereinheiten? (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der obligatorische BIS-Standard für Lagereinheiten ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17634:2022</strong> – Lagereinheiten: Sicherheitsanforderungen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dieser Standard deckt alle Arten von Lagermöbeln ab. Er definiert die
          Sicherheits-, Haltbarkeits-, Tragfähigkeits- und Designanforderungen, um eine
          sichere Verwendung unter täglichen Betriebsbedingungen zu gewährleisten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wichtige Anforderungen von IS 17634:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Stabilität</li>
          <li>Tragfähigkeit</li>
          <li>Schubladenfestigkeit</li>
          <li>Kippwiderstand</li>
          <li>Materialqualität</li>
          <li>Kantensicherheit</li>
          <li>Oberflächenbeschichtung</li>
          <li>Haltbarkeit bei wiederholter Verwendung</li>
          <li>Fehlen von Einklemmgefahren</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ob in Indien hergestellt oder importiert, alle Lagereinheiten müssen vor dem
          Verkauf eine BIS-Registrierung für Lagereinheiten durchlaufen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Lagereinheiten obligatorisch ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Lagereinheiten werden häufig verwendet und tragen oft schwere Lasten.
          Strukturelles Versagen kann zu schweren Verletzungen oder Sachschäden führen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gründe, warum eine BIS-Zertifizierung erforderlich ist
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verhindert Kippgefahren</li>
          <li>Gewährleistet Tragfähigkeit</li>
          <li>Verbessert Haltbarkeit und Lebensdauer</li>
          <li>Eliminiert scharfe Kanten und gefährliche Beschichtungen</li>
          <li>Gewährleistet Kindersicherheit bei Wohnnutzung</li>
          <li>Harmonisiert Produktqualität</li>
          <li>Obligatorisch gemäß BIS-Qualitätskontrollverordnungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kein Hersteller oder Importeur kann Lagereinheiten ohne eine BIS-Lizenz für
          Lagereinheiten legal verkaufen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Lagereinheiten (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Zertifizierung folgt dem ISI-Schema (Konformitätsbewertungsschema-I) mit
          Produkttests und Werksinspektion.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Anwendbarkeit identifizieren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Analysieren Sie, ob das Lagermöbelmodell unter folgende Kategorien fällt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Schränke, Regale, Schubladen, Kleiderschrankeinheiten, Aktenschrankeinheiten
            oder ähnliche Möbel.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bestätigen Sie den korrekten Standard: IS 17634:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – BIS-Antragstellung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Beantragen Sie online über das BIS Manak Online-Portal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">Einreichen:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Geschäftsdaten</li>
          <li>Informationen zur Fertigungseinheit</li>
          <li>Produktklassifizierung</li>
          <li>Markenname</li>
          <li>Prozessflussdiagramme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – BIS-Gebühren zahlen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Umfasst:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Produkttestgebühr</li>
          <li>Werksinspektionsgebühren</li>
          <li>Kennzeichnungsgebühr</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Produkttests (IS 17634:2022 Anforderungen)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Proben werden in einem BIS-anerkannten Labor getestet.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Das Labor bewertet:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilität</li>
          <li>Strukturelle Festigkeit</li>
          <li>Tragfähigkeit</li>
          <li>Schubladenhaltbarkeit</li>
          <li>Regalfestigkeit</li>
          <li>Sicherheit von Kanten und Ecken</li>
          <li>Grenzwerte für gefährliche Stoffe</li>
          <li>Leistung bei wiederholter Verwendung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Testergebnisse müssen vollständige Konformität widerspiegeln.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Werksinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter überprüft:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungsprozess</li>
          <li>Qualitätskontrollsystem</li>
          <li>Rohstoffinspektionen</li>
          <li>Interne Testfähigkeit</li>
          <li>Kalibrierung von Instrumenten</li>
          <li>Einhaltung des Prüf- und Inspektionsschemas (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach erfolgreicher Bewertung stellt BIS aus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>Genehmigung zur Verwendung des ISI-Zeichens</li>
          <li>CML-Nummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Anforderungen nach der Lizenzierung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kennzeichnungsanforderungen befolgen</li>
          <li>Qualitätssysteme aufrechterhalten</li>
          <li>BIS-Überwachungsinspektionen</li>
          <li>Lizenzverlängerung alle 1–2 Jahre</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Lagereinheiten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Dieser Standard deckt die Anforderungen bezüglich der
          Leistung und Sicherheit von Lagereinheiten ab, einschließlich ihrer beweglichen
          und unbeweglichen Teile, die für den häuslichen Gebrauch und für den
          institutionellen Gebrauch wie das Abheften von Papieren oder Ähnliches bestimmt
          sind.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Dieser Standard gilt für vollständig
          hergestellte/gefertigte Lagereinheiten. Er gilt auch für
          montagefertige Einheiten, in diesem Fall gelten die Anforderungen dieses
          Standards für die montierten Einheiten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Lagereinheiten erforderliche Dokumente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nachfolgend finden Sie die vollständige Liste der BIS-ZERTIFIZIERUNGSDOKUMENTE:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Fertigungsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werksregistrierungszertifikat</li>
          <li>Grundrissplan</li>
          <li>Fertigungsprozessflussdiagramm</li>
          <li>Maschinenliste</li>
          <li>Liste der Prüfgeräte</li>
          <li>Kalibrierungszertifikate</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ausweiskopie</li>
          <li>Adressnachweis</li>
          <li>Markenautorisierung (falls zutreffend)</li>
          <li>Markenzertifikat (optional, aber empfohlen)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktzeichnungen</li>
          <li>Montagediagramme</li>
          <li>Stückliste</li>
          <li>Interne Prüfberichte</li>
          <li>Sicherheitsmerkmale</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsformular</li>
          <li>Werksautorisierungsschreiben</li>
          <li>Testanfrageschreiben</li>
          <li>Erklärungsformulare</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vollständige Dokumentation hilft, Bearbeitungsverzögerungen zu vermeiden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prüfanforderungen für Lagereinheiten (IS 17634:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Strenge Tests stellen sicher, dass das Produkt Sicherheits- und Haltbarkeitsstandards
          erfüllt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Wichtige Tests nach IS 17634:2022
        </h3>

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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abmessung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Allgemein
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Durchbiegung von Regalen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von Regalstützen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dauerlasttest für Ober- und Unterseiten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von Kleiderbügelstützen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Herauslösen von Kleiderbügeln
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test für Struktur und Untergestell
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Falltest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tests für Einheiten mit Rollen oder Rädern
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von Drehtüren
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zuschlagtest von Drehtüren
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zuschlag-/Öffnungstest von Schiebetüren und horizontalen
                  Rollfronten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von unten angeschlagenen Klappen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Falltest für oben angeschlagene Klappen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zuschlag-/Öffnungstest von vertikalen Rollfronten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von Ausziehelementen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.4 / 7.3.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zuschlag-/Öffnungstest von Ausziehelementen / Verlagerung von
                  Ausziehelementböden
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verriegelungstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeitstest für Verriegelungs- und Rastmechanismen für
                  Ausziehelemente
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verriegelungs- und Rastmechanismen für Türen, Klappen und
                  Rollfronten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zugkrafttest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Top-Load-Ease-Zyklustest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.10
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Falltest – Dynamisch – für Einheiten mit Sitzflächen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bewegliche Teile, Regalstützen, Ober- und Unterseiten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dauerlasttest (Überlast)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Herauslösetest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vom Boden getragene Einheiten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Einheiten, die auf eine Höhe von 1 000 mm oder weniger eingestellt werden können
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Einheiten, die auf eine Höhe eingestellt werden können
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Öffnen von Türen, Ausziehelementen und Klappen, alle Lagereinheiten
                  unbelastet
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Alle Lagerbereiche unbelastet und alle Türen, Ausziehelemente
                  und Klappen geöffnet
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Alle Lagerbereiche unbelastet mit Kipplast
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Alle Lagerbereiche belastet mit Kipplast
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Türen, Ausziehelemente und Klappen geschlossen und verriegelt, alle
                  Lagereinheiten belastet
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikalkraft-Stabilitätstest für Lagereinheiten
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilitätstest für Sockel/Lagereinheiten mit Sitzflächen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dynamischer Stabilitätstest für Einheiten mit Rollen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeitstest für Wandbefestigungen
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests sind obligatorisch und müssen nur in einem BIS-zugelassenen Labor durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen und wie man sie vermeidet
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Falsche Klassifizierung der Lagereinheit</strong>
            <br />
            Bestätigen Sie immer den Umfang gemäß IS 17634:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Werk nicht vorbereitet</strong>
            <br />
            QMS, Kalibrierung und interne Tests müssen vor der
            Inspektion bereit sein.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Produkttestfehler</strong>
            <br />
            Stellen Sie sicher:
          </p>
          <ul className="list-disc ml-6 mb-2 space-y-1 text-gray-600 text-base font-geist">
            <li>Regalfestigkeit</li>
            <li>Schubladenhaltbarkeit</li>
            <li>Kippstabilität</li>
          </ul>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Fehlende Dokumente</strong>
            <br />
            Vermeiden Sie Verzögerungen, indem Sie die Dokumentation im Voraus vorbereiten.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Markenname stimmt nicht überein</strong>
            <br />
            Muss mit Marke und Etikett übereinstimmen.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Lagereinheiten
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Obligatorische rechtliche Compliance</li>
          <li>Kundensicherheitsgarantie</li>
          <li>Erhöhte Marktglaubwürdigkeit</li>
          <li>Berechtigung für E-Commerce & Einzelhandelsketten</li>
          <li>Reduziertes Produktausfallrisiko</li>
          <li>Berechtigung für Regierungsausschreibungen</li>
          <li>Markendifferenzierung</li>
          <li>Höheres Verbrauchervertrauen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichteinhaltung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf oder Import von Lagereinheiten ohne BIS-Genehmigung kann zu folgenden
          Konsequenzen führen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schwere Geldstrafen</li>
          <li>Produktbeschlagnahme</li>
          <li>Herstellungsverbot</li>
          <li>Strafverfolgung</li>
          <li>Markenaufnahme in die schwarze Liste</li>
          <li>Marktrückzug</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Einhaltung ist gemäß BIS-Regeln und Qualitätskontrollverordnungen (QCOs)
          obligatorisch.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt eine BIS-Zertifizierung für Lagereinheiten?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller</li>
          <li>Importeure</li>
          <li>Händler (Markeninhaber)</li>
          <li>OEM- & ODM-Lieferanten</li>
          <li>Einzelhandels- & Online-Möbelmarken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jedes Werk benötigt eine separate BIS-Lizenz.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum uns für BIS-Zertifizierungsberatung wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wir bieten vollständige End-to-End-Unterstützung:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standardinterpretation (IS 17634:2022)</li>
          <li>Produktklassifizierung</li>
          <li>Dokumentationsvorbereitung</li>
          <li>Koordination mit BIS-anerkannten Labors</li>
          <li>Testunterstützung</li>
          <li>BIS-Portal-Einreichung</li>
          <li>Werksinspektionsanleitung</li>
          <li>Lizenzgenehmigung</li>
          <li>Verlängerung und Überwachung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unsere Expertise gewährleistet einen schnellen, reibungslosen und fehlerfreien
          Zertifizierungsprozess.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Erlangung des BIS-Zertifikats für Lagereinheiten nach IS 17634:2022 ist
          unerlässlich, um Produktsicherheit, strukturelle Leistung und
          Haltbarkeit zu gewährleisten. Es ist auch eine obligatorische rechtliche Anforderung
          für den Verkauf oder Import von Lagermöbeln in Indien. Mit ordnungsgemäßer Dokumentation,
          Tests und fachkundiger Anleitung wird der Zertifizierungsprozess
          nahtlos.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unser engagiertes BIS-Beratungsteam gewährleistet schnelle Genehmigung, genaue
          Dokumentation und End-to-End-Compliance-Unterstützung für Hersteller und
          Importeure.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs — BIS-Zertifikat für Lagereinheiten (IS 17634:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist eine BIS-Zertifizierung für Lagereinheiten in Indien obligatorisch?
              </strong>
              <br />
              Ja. Die BIS-Zertifizierung für Lagereinheiten ist gemäß
              dem indischen Standard IS 17634:2022 – Lagereinheiten: Sicherheitsanforderungen
              obligatorisch. Dieser Standard wurde in eine Qualitätskontrollverordnung
              (QCO) aufgenommen, was bedeutet, dass kein Hersteller, Importeur oder
              Verkäufer legal Lagereinheiten auf dem indischen
              Markt ohne BIS-Genehmigung verkaufen darf.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Welche Arten von Lagereinheiten werden unter IS 17634:2022 abgedeckt?
              </strong>
              <br />
              IS 17634:2022 gilt für eine Vielzahl von Lagermöbeln, die in
              Wohn-, Gewerbe- und institutionellen Räumen verwendet werden.
              <br />
              Der Standard deckt ab:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Schränke (Holz, Metall, modular)</li>
              <li>Schränke & Kleiderschränke</li>
              <li>Regaleinheiten</li>
              <li>Aktenschränke</li>
              <li>Schubladeneinheiten & Kommoden</li>
              <li>Sideboards & modulare Lagersysteme</li>
              <li>Bürolagereinheiten</li>
              <li>Kompakte Lagermöbel</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Welche Tests werden für die BIS-Zertifizierung von Lagereinheiten
                durchgeführt?
              </strong>
              <br />
              Lagereinheiten durchlaufen mehrere obligatorische Tests, um ihre
              Haltbarkeit, Festigkeit, Sicherheit und Leistung zu bewerten.
              <br />
              Wichtige Tests umfassen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>
                Stabilitätstest: Stellt sicher, dass die Einheit während der Verwendung oder
                Schubladenerweiterung nicht umkippt.
              </li>
              <li>
                Statischer Lasttest: Misst die Tragfähigkeit von Regalen,
                Schubladen und Hauptstruktur.
              </li>
              <li>
                Haltbarkeits-/Ausdauertest: Überprüft die Leistung von Schubladen,
                Türen und Regalen über wiederholte Nutzungszyklen.
              </li>
              <li>
                Regalfestigkeitstest: Bewertet Durchbiegung oder Biegung unter Last.
              </li>
              <li>
                Aufpralltest: Gewährleistet strukturellen Widerstand gegen versehentliche
                Aufpralle.
              </li>
              <li>
                Kippwiderstandstest: Überprüft die Kippsicherheit, wenn
                Schubladen voll beladen und ausgefahren sind.
              </li>
              <li>
                Kantensicherheits- & Beschichtungstest: Stellt sicher, dass keine scharfen Kanten oder gefährlichen
                Beschichtungen vorhanden sind.
              </li>
              <li>Materialsicherheitstest: Bestätigt ungiftige, sichere Materialien.</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Wie lange dauert der BIS-Zertifizierungsprozess für Lagereinheiten?
              </strong>
              <br />
              Der typische BIS-Zertifizierungszeitplan für Lagereinheiten beträgt 30–45
              Arbeitstage, abhängig von der Produktbereitschaft und Dokumentationsqualität.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Können ausländische Hersteller eine BIS-Zertifizierung für
                Lagereinheiten beantragen?
              </strong>
              <br />
              Ja. Ausländische Hersteller müssen eine BIS-Zertifizierung unter dem
              FMCS (Foreign Manufacturers Certification Scheme) erhalten.
              <br />
              Wichtige Anforderungen umfassen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Ein lokaler indischer Vertreter (AIR)</li>
              <li>Produkttests in einem BIS-zugelassenen indischen Labor</li>
              <li>Übersee-Werksinspektion durch BIS-Beamte</li>
              <li>Einhaltung von IS 17634:2022</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Was passiert, wenn das Lagereinheitsprodukt die BIS-Tests nicht besteht?
              </strong>
              <br />
              Wenn die Probe einen obligatorischen Test nicht besteht:
            </p>
            <ol className="list-decimal ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Der Hersteller erhält einen Fehlerbericht.</li>
              <li>Sie müssen notwendige Design-/Materialänderungen vornehmen.</li>
              <li>Überarbeitete Proben müssen zur erneuten Prüfung eingereicht werden.</li>
            </ol>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Ist eine Werksinspektion für die BIS-Zertifizierung obligatorisch?
              </strong>
              <br />
              Ja. Eine Werksinspektion ist für alle ISI-Marken-
              Zertifizierungen obligatorisch, einschließlich Lagereinheiten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Können Händler oder Markeninhaber eine BIS-Zertifizierung beantragen?
              </strong>
              <br />
              Ja, aber nur wenn:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Sie die Marke besitzen, und</li>
              <li>
                Sie eine rechtlich autorisierte Fertigungsvereinbarung mit einem
                tatsächlichen Werk haben
              </li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              BIS-Lizenzen werden werkweise, nicht unternehmensweise ausgestellt.
              <br />
              Daher muss der tatsächliche Fertigungsstandort Tests
              und Inspektionen unterzogen werden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Können mehrere Modelle von Lagereinheiten unter einer BIS-
                Lizenz abgedeckt werden?
              </strong>
              <br />
              Nur wenn:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>Die Modelle unter denselben Standard fallen</li>
              <li>Sie im selben Werk hergestellt werden</li>
              <li>Sie ähnliche Konstruktion und Rohstoffe teilen</li>
              <li>Sie denselben Testparametern entsprechen</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Welche Kennzeichnungsanforderungen müssen nach der
                Zertifizierung befolgt werden?
              </strong>
              <br />
              Nach der Genehmigung muss das Produkt anzeigen:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>ISI-Zeichen (BIS-Zertifizierungszeichen)</li>
              <li>Standardnummer (IS 17634:2022)</li>
              <li>CML-Lizenznummer</li>
              <li>Herstellername und -adresse</li>
              <li>Chargen- oder Seriennummer</li>
            </ul>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17634-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Lagereinheiten - IS 17634:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={3} />
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
                Indiens bester Zertifikatsberater
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
