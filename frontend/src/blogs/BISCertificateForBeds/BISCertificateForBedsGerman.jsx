import FaqAuthorGerman from "@/components/common/FaqAuthor/FaqAuthorGerman";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import ManyUsersAlsoReadGerman from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadGerman";
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

const BISCertificateForBedsGerman = () => {
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

export default BISCertificateForBedsGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Betten | IS 17635:2022 BIS-Lizenz";
  const ogTitle = "BIS-Zertifizierung für Betten – IS 17635:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Betten | IS 17635:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Betten nach IS 17635:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Betten nach IS 17635:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Betten nach IS 17635:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien kennen.";
  const metaKeywords =
    "BIS-Zertifikat für Betten, BIS-Lizenz für Betten, IS 17635:2022, BIS-Zertifizierung für Betten";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/betten-is-17635";
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
                    <Link to="/">Home</Link>
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
                    BIS-Zertifikat für Betten – IS 17635:2022
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
          BIS-Zertifikat für Betten – Vollständiger Leitfaden IS 17635:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="BIS-Lizenz für Betten"
            alt="BIS-Zertifikat für Betten - BIS-Zertifizierung IS 17635:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Betten ist eine obligatorische
          Konformitätsanforderung in Indien für Hersteller und Importeure von
          Betten, die für den häuslichen und gewerblichen Gebrauch bestimmt
          sind. Gemäß der neuesten indischen Norm IS 17635:2022 – Betten
          (Sicherheitsanforderungen) müssen alle Betten strenge Sicherheits-,
          Haltbarkeits-, Struktur- und Leistungskriterien erfüllen, bevor sie
          auf dem indischen Markt verkauft werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten sind wesentliche Möbelprodukte, die täglich in Häusern, Hotels,
          Krankenhäusern, Hostels, PG-Unterkünften und institutionellen
          Einrichtungen verwendet werden. Jede strukturelle Schwäche, scharfe
          Kanten, Materialversagen oder schlechte Tragfähigkeit kann zu schweren
          Verletzungen führen. Um solche Risiken zu verhindern, schreibt das
          Bureau of Indian Standards (BIS) die BIS-Zertifizierung für Betten
          vor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt alles über die BIS-Lizenz für
          Betten, einschließlich anwendbarer Normen, Zertifizierungsprozess,
          Testanforderungen, Dokumente, Gebühren, Zeitpläne, Strafen und
          Vorteile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein Konformitätsbewertungssystem, das vom
          Bureau of Indian Standards, der nationalen Normungsbehörde Indiens,
          eingeführt wurde.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Was ist ein BIS-Zertifikat?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat bestätigt, dass ein Produkt den indischen Normen
          entspricht und sicher, zuverlässig und gebrauchstauglich ist.
          Zertifizierte Produkte tragen das BIS-Zertifizierungszeichen,
          allgemein bekannt als ISI-Zeichen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Es bedeutet, dass das Produkt erfolgreich bestanden hat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laborprüfungen</li>
          <li>Werksinspektion</li>
          <li>Qualitätskontrolle-Verifizierung</li>
          <li>Sicherheitskonformitätsbewertung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Logo auf Betten versichert Kunden, dass das Produkt staatlich
          genehmigte Qualitäts- und Sicherheitsstandards erfüllt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Norm anwendbar für Betten – IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die anwendbare indische Norm für Betten ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17635:2022</strong> – Betten: Sicherheitsanforderungen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Norm definiert wesentliche Sicherheits- und
          Leistungsanforderungen für Betten, die in Wohn- und Gewerbeumgebungen
          verwendet werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 17635:2022 deckt ab
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Festigkeit</li>
          <li>Tragfähigkeit</li>
          <li>Stabilität und Haltbarkeit</li>
          <li>Materialqualität</li>
          <li>Kanten- und Oberflächenbearbeitung</li>
          <li>Sicherheit gegen Einsturz</li>
          <li>Fehlen von Einklemmgefahren</li>
          <li>Langzeitleistung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jedes in Indien hergestellte oder importierte Bett muss IS 17635:2022
          entsprechen und eine BIS-Registrierung für Betten erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Betten obligatorisch ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten werden über längere Zeiträume verwendet und tragen
          kontinuierlich menschliches Gewicht. Schlecht konstruierte Betten
          können Verletzungen, Einsturz oder langfristige Gesundheitsrisiken
          verursachen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gründe, warum BIS-Zertifizierung für Betten erforderlich ist
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gewährleistet strukturelle Integrität</li>
          <li>Verhindert Einsturz und Bruch</li>
          <li>Kontrolliert Materialqualität</li>
          <li>Eliminiert scharfe Kanten und unsichere Oberflächen</li>
          <li>Schützt Verbraucher</li>
          <li>Gewährleistet einheitliche nationale Qualität</li>
          <li>Obligatorisch gemäß BIS-Benachrichtigung</li>
          <li>Erforderlich für den legalen Verkauf in Indien</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS-Lizenz für Betten ist der Verkauf oder Import von Betten in
          Indien illegal.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Betten (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess in Indien folgt einem strukturierten
          Verfahren unter dem ISI-Zertifizierungsschema.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Norm und Produktumfang identifizieren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Anwendbarkeit unter IS 17635:2022 bestätigen und Produktvarianten
          bestimmen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – BIS-Antrag (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Antrag über das BIS Manak Online-Portal einreichen mit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerdetails</li>
          <li>Werksadresse</li>
          <li>Produktbeschreibung</li>
          <li>Markenname</li>
          <li>Qualitätskontroll-Details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – BIS-Zertifizierungsgebühren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Anfallende Gebühren zahlen, einschließlich:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Testgebühren</li>
          <li>Inspektionsgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Produkttests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Proben werden in von BIS anerkannten Laboratorien getestet.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests umfassen
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Statischer Belastungstest</li>
          <li>Haltbarkeitstest</li>
          <li>Stabilitätstest</li>
          <li>Verbindungsfestigkeitstest</li>
          <li>Oberflächenbearbeitungstest</li>
          <li>Kantensicherheitstest</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Werksinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter inspiziert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungseinrichtung</li>
          <li>Rohstoffkontrolle</li>
          <li>Prozesstests</li>
          <li>Qualitätssicherungssystem</li>
          <li>Prüfausrüstung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach Konformität stellt BIS aus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Zeichen-Genehmigung</li>
          <li>CML-Nummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Post-Zertifizierungs-Konformität
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Überwachungsinspektionen</li>
          <li>Verlängerung alle 1–2 Jahre</li>
          <li>Laufende Qualitätskontrolle</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Betten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Diese Norm deckt die Anforderungen bezüglich der
          Leistung und Sicherheit von Betten für Erwachsene für den häuslichen
          und nicht-häuslichen Gebrauch ab.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Diese Norm gilt für vollständig hergestellte/
          gefertigte Betten. Sie gilt auch für montagefertige Einheiten; in
          diesem Fall gelten die Anforderungen dieser Norm für die montierten
          Einheiten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.3</strong> Diese Norm deckt keine Wasserbetten, Luftbetten,
          Klappbetten, Etagenbetten und Betten für Menschen mit besonderen
          Bedürfnissen ab, noch die Betten für Gesundheits- und medizinische
          Zwecke.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Betten erforderliche Dokumente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hier ist eine vollständige Liste der BIS-Zertifikatsdokumente:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werksregistrierung/Lizenz</li>
          <li>Fertigungsprozess-Flussdiagramm</li>
          <li>Maschinenliste</li>
          <li>Prüfausrüstungsliste</li>
          <li>Kalibrierungszertifikate</li>
          <li>Werkslayout</li>
          <li>Qualitätskontrollplan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adressnachweis</li>
          <li>Ausweisdokument</li>
          <li>Markenautorisierung</li>
          <li>Markenzeichen-Zertifikat (falls zutreffend)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktzeichnungen</li>
          <li>Spezifikationen</li>
          <li>Stückliste</li>
          <li>Interne Prüfberichte</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für Betten (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Betten müssen rigorosen Tests unterzogen werden, um die Konformität
          sicherzustellen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Obligatorische Tests
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
                  Abmessungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilitätstest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikale statische Belastung auf Bettbasis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikale statische Belastung auf Seitenleiste
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Horizontale statische Belastungstests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertikaler Stoßtest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests müssen nur in von BIS genehmigten Laboratorien durchgeführt
          werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen und wie man sie vermeidet
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Falsche Normauswahl</strong> – Überprüfen Sie immer die
            richtige indische Norm.
          </li>
          <li>
            <strong>Schlechte Dokumentation</strong> – Fehlende Dokumente
            verursachen Verzögerungen; bereiten Sie sie im Voraus vor.
          </li>
          <li>
            <strong>Fehlgeschlagene Labortests</strong> – Stellen Sie sicher,
            dass hochwertige Materialien und Konstruktion verwendet werden.
          </li>
          <li>
            <strong>Werk nicht bereit</strong> – Stellen Sie sicher, dass QMS
            und Prüfausrüstung ordnungsgemäß gewartet werden.
          </li>
          <li>
            <strong>Markeninkongruenz</strong> – Der Markenname muss mit dem
            Lizenzantrag übereinstimmen.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Betten
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal Verkauf in Indien</li>
          <li>Erhöhtes Kundenvertrauen</li>
          <li>Zugang zu E-Commerce-Plattformen</li>
          <li>Berechtigung für Regierungsausschreibungen</li>
          <li>Reduzierte Haftung</li>
          <li>Starke Markenglaubwürdigkeit</li>
          <li>Konformität mit indischen Normen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf von Betten ohne BIS-Zertifizierung kann führen zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schweren Geldstrafen</li>
          <li>Produktbeschlagnahme</li>
          <li>Geschäftsschließung</li>
          <li>Rechtliche Schritte</li>
          <li>Marktverbot</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer braucht ein BIS-Zertifikat für Betten?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die folgenden Einheiten müssen eine BIS-Lizenz für Betten erhalten:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller</li>
          <li>Importeure</li>
          <li>Möbelmarken</li>
          <li>OEM/ODM-Lieferanten</li>
          <li>E-Commerce-Verkäufer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Fertigungseinheit erfordert eine separate BIS-Lizenz.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum uns für BIS-Zertifizierung für Betten wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wir bieten BIS-Beratung von Anfang bis Ende, einschließlich:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Norm-Mapping</li>
          <li>Dokumentationsunterstützung</li>
          <li>Testkoordination</li>
          <li>Antragseinreichung</li>
          <li>Werksinspektionsabwicklung</li>
          <li>BIS-Verbindung</li>
          <li>Lizenzausstellung</li>
          <li>Verlängerungs- und Überwachungsunterstützung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Betten nach IS 17635:2022 ist eine
          obligatorische rechtliche Anforderung, die Sicherheit, Qualität und
          Haltbarkeit gewährleistet. Die Erlangung einer BIS-Lizenz für Betten
          schützt Verbraucher, stärkt den Markenwert und ermöglicht den
          rechtmäßigen Marktzugang in ganz Indien. Mit Expertenunterstützung
          wird der Zertifizierungsprozess nahtlos und effizient.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – BIS-Zertifikat für Betten
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist BIS-Zertifizierung für Betten in Indien obligatorisch?
              </strong>
              <br />
              Ja, gemäß IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Wie ist die Gültigkeit des BIS-Zertifikats?</strong>
              <br />
              1–2 Jahre, verlängerbar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Können ausländische Hersteller sich bewerben?</strong>
              <br />
              Ja, unter FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Kann das BIS-Zertifikat online beantragt werden?
              </strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Ist das ISI-Zeichen auf Betten obligatorisch?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Wie lange dauert der Prozess?</strong>
              <br />
              30–45 Tage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Werden sowohl Holz- als auch Metallbetten abgedeckt?
              </strong>
              <br />
              Ja, wenn sie IS 17635:2022 entsprechen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Ist die Werksinspektion obligatorisch?</strong>
              <br />
              Ja.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Können Händler BIS beantragen?</strong>
              <br />
              Nur Markeninhaber mit Fertigungskontrolle.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Betten - PDF IS 17635:2022"
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
              ISI-ZEICHEN (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
