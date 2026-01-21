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

const BISCertificateForWeldedPipesAndTubesGerman = () => {
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

export default BISCertificateForWeldedPipesAndTubesGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Geschweißte Rohre & Rohre | IS 17876:2022 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Geschweißte Rohre & Rohre – IS 17876:2022 Leitfaden";
  const twitterTitle =
    "BIS-Lizenz für Geschweißte Rohre & Rohre | IS 17876:2022";
  const metaDescription =
    "Erhalten Sie das BIS-Zertifikat für Geschweißte Rohre & Rohre unter IS 17876:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Geschweißte Rohre & Rohre gemäß IS 17876:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie das BIS-Zertifikat für Geschweißte Rohre & Rohre unter IS 17876:2022. Lernen Sie BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Geschweißte Rohre & Rohre, BIS-Lizenz für Geschweißte Rohre & Rohre, IS 17876:2022, BIS-Zertifizierung für Geschweißte Rohre & Rohre";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/geschweißte-rohre-und-rohre-is-17876";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter der Betriebe bei Sun Certification India";

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
                    BIS-Zertifikat für Geschweißte Rohre & Rohre – IS 17876:2022
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
          BIS-Zertifikat für Geschweißte Rohre und Rohre aus Edelstahl gemäß IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="BIS-Lizenz für Geschweißte Rohre & Rohre"
            alt="BIS-Zertifikat für Geschweißte Rohre & Rohre - BIS-Zertifizierung IS 17876:2022"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Geschweißte Rohre und Rohre aus Edelstahl werden in verschiedenen
          Branchen wie Bauwesen, chemische Verarbeitung, Lebensmittel &
          Getränke, Wasserverteilung, strukturelle Anwendungen und allgemeinem
          Ingenieurwesen umfassend verwendet. Da diese Rohre Flüssigkeiten, Gase
          und in einigen Fällen korrosive Chemikalien transportieren, müssen ihre
          Festigkeit, Korrosionsbeständigkeit und Herstellungsintegrität vor
          dem Markteintritt überprüft werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Um die Qualität zu regeln und die öffentliche und industrielle
          Sicherheit zu gewährleisten, hat die Regierung Indiens die
          BIS-Zertifizierung für geschweißte Rohre und Rohre aus Edelstahl
          gemäß IS 17876:2022 obligatorisch gemacht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt den vollständigen
          BIS-Genehmigungsprozess, Dokumentation, Testanforderungen, Kosten,
          Zeitplan, Herstellerpflichten, Vorteile und Compliance-Regeln —
          geschrieben in einem frischen und einzigartigen Format, das eine
          Null-Duplikation mit vorherigem Inhalt gewährleistet.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung für Geschweißte Rohre & Rohre aus
          Edelstahl ?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Bureau of Indian Standards (BIS) regelt die Produktqualität in
          Indien durch verschiedene Zertifizierungssysteme. Ein Produkt, das
          unter eine obligatorische Qualitätskontrollverordnung (QCO) fällt, muss
          eine BIS-Lizenz erhalten, bevor es hergestellt, importiert, gelagert,
          verkauft oder vertrieben wird.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Was die BIS-Zertifizierung Gewährleistet
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Zertifikat bestätigt, dass geschweißte Rohre/Rohre aus
          Edelstahl:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dimensionale Genauigkeit erfüllen</li>
          <li>Erforderliche mechanische Festigkeit besitzen</li>
          <li>Korrosionsbeständigkeit aufweisen</li>
          <li>Mit genehmigten Edelstahlqualitäten hergestellt werden</li>
          <li>Den indischen Testbedingungen entsprechen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Zertifizierung müssen die Produkte das ISI-Zeichen zusammen
          mit der Lizenznummer (CML) tragen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Norm für Geschweißte Rohre & Rohre aus Edelstahl – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die anwendbare Norm ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Geschweißte Rohre und Rohre aus
          Edelstahl für Allgemeinen Service
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Norm beschreibt:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemische Zusammensetzung</li>
          <li>Anforderungen an mechanische Eigenschaften</li>
          <li>Herstellungstoleranzen</li>
          <li>Dimensionsspezifikationen</li>
          <li>Richtlinien für Oberfläche und Finish</li>
          <li>Hydrostatische und zerstörungsfreie Prüfungen</li>
          <li>Sicherheitsleistungskriterien</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Rohre werden für allgemeine Serviceanwendungen verwendet, was
          bedeutet, dass sie eine breite Palette von Betriebsumgebungen erfüllen
          müssen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für IS 17876:2022 Produkte Obligatorisch
          ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Geschweißte Rohre aus Edelstahl werden weit verbreitet verwendet in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wasserpipelines</li>
          <li>Chemischer Transport</li>
          <li>Lebensmittel- und Pharmaanlagen</li>
          <li>Strukturelles Ingenieurwesen</li>
          <li>Abluft- und Belüftungssysteme</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wenn sie nicht ordnungsgemäß hergestellt werden, können diese Rohre
          führen zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Leckageausfällen</li>
          <li>Bersten unter Druck</li>
          <li>Korrosion und Kontamination</li>
          <li>Struktureller Instabilität</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Um zu verhindern, dass minderwertige Materialien in die
          Lieferkette gelangen, erfordert BIS, dass jeder Hersteller —
          inländisch oder ausländisch — die BIS-Lizenz für Geschweißte Rohre
          und Rohre aus Edelstahl erhält.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Zertifizierungsverfahren umfasst strenge Labortests und
          Inspektionen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Produktkategorie & Qualität Identifizieren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bewerten Sie die spezifische(n) Edelstahlqualität(en), die
          hergestellt werden, und bestätigen Sie, dass sie unter IS 17876:2022
          fallen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – Online-Antrag Einreichen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen über das Manak Online BIS-Portal einen Antrag
          stellen und einreichen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikdetails</li>
          <li>Produktionskapazität</li>
          <li>Prozessflussdiagramm</li>
          <li>Rohstoffquellen</li>
          <li>Qualitätssicherungsdokumentation</li>
          <li>Marken- und Markendetails</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – BIS-Gebühren Zahlen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Zahlungen umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühren</li>
          <li>Bearbeitungsgebühren</li>
          <li>Testgebühren</li>
          <li>Fabrikinspektionsgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Fabrikinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS-Beamte inspizieren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktionssequenz</li>
          <li>Rohstofflagerung</li>
          <li>Schweißmaschinen</li>
          <li>Glüh-/Wärmebehandlungsprozesse</li>
          <li>Qualitätsdokumentation</li>
          <li>Testinfrastruktur</li>
          <li>Kalibrierungsaufzeichnungen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sie überprüfen die Einhaltung des Test- und Inspektionsschemas (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Wenn alle Parameter den BIS-Anforderungen entsprechen, erhält der
          Hersteller:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Marken-Autorisierung</li>
          <li>Eine eindeutige CML-Lizenznummer</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Post-Lizenz-Verpflichtungen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Lizenzinhaber müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laufende interne Qualitätstests aufrechterhalten</li>
          <li>Das ISI-Zeichen korrekt verwenden</li>
          <li>Bei periodischen BIS-Überwachungsinspektionen kooperieren</li>
          <li>Die Lizenz rechtzeitig erneuern</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Geschweißte Rohre & Rohre aus Edelstahl
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Diese Norm deckt die Anforderungen für geschweißte
          Rohre und Rohre aus Edelstahl für allgemeine Dienste ab.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Diese Norm spezifiziert keine Anforderungen für
          geschweißte Rohre und Rohre aus Edelstahl, die für bestimmte Zwecke
          bestimmt sind und von separaten indischen Normen abgedeckt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung Erforderliche Dokumente (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Herstellungsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriklizenz/Registrierung</li>
          <li>Layoutdiagramm</li>
          <li>Prozessflussdiagramm</li>
          <li>Maschinenliste (Schweißen, Formen, Glühen, Testen)</li>
          <li>Liste der internen Testausrüstung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Qualitätsspezifikationen</li>
          <li>Chemische & mechanische Testdaten</li>
          <li>Schweißverfahrensspezifikationen</li>
          <li>Wärmebehandlungsaufzeichnungen</li>
          <li>Dimensions-Toleranzdiagramme</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identitätsnachweis</li>
          <li>Adressnachweis</li>
          <li>Markenbesitzdokumente</li>
          <li>Bevollmächtigter Unterzeichnerbrief</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ausgefülltes Antragsformular</li>
          <li>Verpflichtungen & Erklärungen</li>
          <li>Testanforderungsdokumente</li>
          <li>Etikettendesign für ISI-Kennzeichnung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen Gemäß IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tests sind der Kern der BIS-Genehmigung und stellen sicher, dass jede
          Charge strenge Qualitätsstandards erfüllt.
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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pfannenanalyse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Produktanalyse
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Zuganforderungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rohre
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rohre
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bördelprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Umgekehrte Abflachungsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abflachungsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Korngröße
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dichtheitsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verarbeitung, Finish, Erscheinungsbild
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abmessungen und Toleranzen
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Herausforderungen Während der BIS-Zertifizierung
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fehlschlagen bei Chemischen Zusammensetzungstests</strong>
            <br />
            Nicht standardmäßige Legierungselemente oder Verunreinigungen führen
            zur Ablehnung.
          </li>
          <li>
            <strong>Schweißfehler Während der ZfP</strong>
            <br />
            Schlechte Schweißprozesse oder inkonsistente Wärmebehandlung können
            Fehler verursachen.
          </li>
          <li>
            <strong>Dimensionale Nichtkonformität</strong>
            <br />
            Wanddickenvariationen führen häufig zu Fehlern.
          </li>
          <li>
            <strong>Unvollständige Dokumentation</strong>
            <br />
            Fehlende oder unklare Aufzeichnungen verzögern die
            Lizenzgenehmigung.
          </li>
          <li>
            <strong>Kalibrierungsprobleme</strong>
            <br />
            Nicht kalibrierte Ausrüstung führt zu unzuverlässigen Testergebnissen.
          </li>
          <li>
            <strong>Falsche Marken-/Etikettensubmission</strong>
            <br />
            ISI-Marken-Design muss den BIS-Spezifikationen entsprechen.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Rohre & Rohre aus Edelstahl
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtliche Genehmigung zur Herstellung/Veräußerung in Indien</li>
          <li>Gewährleistung von Qualität und Sicherheit</li>
          <li>Verbesserter Ruf und Marktglaubwürdigkeit</li>
          <li>Akzeptanz durch Regierungs- und PSU-Ausschreibungen</li>
          <li>Erhöhtes Exportpotenzial</li>
          <li>Reduzierte Produktausfallrisiken</li>
          <li>Schutz vor gefälschten oder minderwertigen Konkurrenten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen für Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller/Importeure, die nicht zertifizierte Produkte verkaufen,
          stehen vor:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktbeschlagnahme</li>
          <li>Schwere Strafen gemäß BIS-Gesetz</li>
          <li>Schließung der Herstellungsbetriebe</li>
          <li>Importbeschränkungen</li>
          <li>Rechtliche Verfolgung</li>
          <li>Stornierung bestehender Lizenzen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance ist obligatorisch und wird strikt durchgesetzt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer Muss die BIS-Lizenz für Geschweißte Rohre und Rohre aus Edelstahl
          Erhalten?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Überseeische Hersteller, die nach Indien exportieren</li>
          <li>Importeure von Edelstahlrohren</li>
          <li>OEM-Lieferanten</li>
          <li>Industrielle Händler</li>
          <li>Private-Label-Marken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder Herstellungsstandort muss seine eigene Lizenz erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Geschweißte Rohre und Rohre aus Edelstahl gemäß
          IS 17876:2022 gewährleistet die Zuverlässigkeit, Haltbarkeit und
          Leistung kritischer Rohrprodukte, die in verschiedenen Branchen
          verwendet werden. Mit der jetzt durchgesetzten obligatorischen
          Zertifizierung müssen Hersteller und Importeure ihre Prozesse, Tests
          und Dokumentation mit den BIS-Anforderungen abstimmen, um ihre Produkte
          legal auf dem indischen Markt anzubieten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit fachkundiger Anleitung wird der BIS-Lizenzierungsprozess schneller,
          reibungsloser und vollständig konform.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs — BIS-Zertifizierung für Geschweißte Rohre & Rohre aus Edelstahl
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für geschweißte Rohre aus
                Edelstahl obligatorisch?
              </strong>
              <br />
              Ja. Gemäß IS 17876:2022 ist die BIS-Zertifizierung für alle
              Hersteller und Importeure obligatorisch.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welche Tests sind erforderlich?</strong>
              <br />
              Chemische Analyse, Zugtest, Härtetest, hydrostatische Tests, ZfP,
              Abflachung und Dimensionsprüfungen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wie lange dauert die BIS-Zertifizierung?</strong>
              <br />
              Typischerweise 35–50 Tage für indische Hersteller und etwa 120
              Tage für ausländische Hersteller, abhängig von der Bereitschaft
              für Tests und Inspektionen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Können ausländische Hersteller die BIS-Zertifizierung erhalten?
              </strong>
              <br />
              Ja, über das FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Welche Dokumente sind erforderlich?</strong>
              <br />
              Fabriklizenz, Testausrüstungsliste, BOM, Prozessfluss, Zeichnungen,
              QC-Plan, Markendokumente usw.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Was passiert, wenn eine Probe beim Testen versagt?</strong>
              <br />
              Der Hersteller muss das Problem korrigieren, das Produkt überarbeiten
              und erneut zur Prüfung einreichen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Ist die ISI-Kennzeichnung nach Genehmigung obligatorisch?</strong>
              <br />
              Ja. Produkte müssen das ISI-Zeichen + CML-Nummer anzeigen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Sind alle Qualitäten unter IS 17876 abgedeckt?</strong>
              <br />
              Nur spezifische Qualitäten, die in der Norm definiert sind, sind
              qualifiziert.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Wie oft führt BIS Überwachungen durch?</strong>
              <br />
              Periodische Audits und zufällige Probenprüfungen werden während der
              Lizenzgültigkeit durchgeführt.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17876-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Geschweißte Rohre & Rohre - IS 17876:2022 PDF"
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
              BIS-Marke (ISI-Lizenz) für Ausländische Herstellung
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
              ISI-MARKE (BIS) für Indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
