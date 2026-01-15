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

const BISCertificateForSeamlessPipesAndTubesGerman = () => {
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

export default BISCertificateForSeamlessPipesAndTubesGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Nahtlose Rohre & Rohre | IS 17875:2022 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Nahtlose Rohre & Rohre – IS 17875:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Nahtlose Rohre & Rohre | IS 17875:2022";
  const metaDescription =
    "Erhalten Sie das BIS-Zertifikat für Nahtlose Rohre & Rohre unter IS 17875:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Nahtlose Rohre & Rohre gemäß IS 17875:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie das BIS-Zertifikat für Nahtlose Rohre & Rohre unter IS 17875:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Nahtlose Rohre & Rohre, BIS-Lizenz für Nahtlose Rohre & Rohre, IS 17875:2022, BIS-Zertifizierung für Nahtlose Rohre & Rohre";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/nahtlose-rohre-und-rohre-is-17875";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter des Betriebs bei Sun Certification India";

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
                    BIS-Zertifikat für Nahtlose Rohre & Rohre – IS 17875:2022
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
          BIS-Zertifikat für Nahtlose Rohre und Rohre unter IS 17875:2022 —
          Vollständiger Zertifizierungsleitfaden
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="BIS-Lizenz für Nahtlose Rohre & Rohre"
            alt="BIS-Zertifikat für Nahtlose Rohre & Rohre - IS 17875:2022 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nahtlose Stahlrohre und Rohre sind weithin für ihre überlegene
          Leistung in kritischen, hochdruck- und hochtemperaturanwendungen
          anerkannt. Sie sind unerlässlich in Branchen wie Öl & Gas,
          Petrochemie, Raffinerien, Schwerindustrie, Automobil, thermische
          Anlagen, Luft- und Raumfahrt, Hydraulik und allgemeine mechanische
          Systeme. Da nahtlose Rohre keine geschweißte Naht haben, bieten sie im
          Vergleich zu geschweißten Rohren größere Festigkeit, Einheitlichkeit
          und Druckhandhabungsfähigkeit.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Um sicherzustellen, dass Hersteller eine konsistente
          Produktionsqualität einhalten und sichere, fehlerfreie Produkte auf
          den indischen Markt liefern, hat die indische Regierung die
          BIS-Zertifizierung für nahtlose Rohre und Rohre unter IS 17875:2022
          obligatorisch gemacht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese umfassende Seite erklärt den gesamten Prozess der Erlangung
          einer BIS-Lizenz, einschließlich Dokumentation, obligatorischer Tests,
          Qualitätskonformitätsanforderungen, Gebühren, Zeitpläne, technische
          Herausforderungen, Vorteile, Strafen und Branchenanwendbarkeit —
          geschrieben in einem erweiterten, sehr detaillierten und SEO-reichen
          Format.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung für Nahtlose Rohre und Rohre?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat ist eine offizielle Genehmigung, die vom Bureau of
          Indian Standards ausgestellt wird und bestätigt, dass der Hersteller
          nahtlose Rohre/Rohre gemäß den unter IS 17875:2022 definierten
          Spezifikationen produziert.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nahtlose Rohre müssen strenge Tests in Bezug auf durchlaufen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Druckwiderstand</li>
          <li>Zugfestigkeit</li>
          <li>Schlagzähigkeit</li>
          <li>Biegefähigkeit</li>
          <li>Chemische Zusammensetzung</li>
          <li>Maßgenauigkeit</li>
          <li>Zerstörungsfreie Bewertungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nur Hersteller, die diese Leistungsanforderungen erfüllen, erhalten
          das ISI-Markenzeichen, das es ihnen ermöglicht, nahtlose Rohre in
          Indien legal zu produzieren, zu importieren oder zu verkaufen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hauptziele der BIS-Zertifizierung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Verhindern, dass minderwertige oder gefährliche Rohrleitungssysteme
            in industrielle Lieferketten gelangen
          </li>
          <li>Konsistente und zuverlässige Fertigungsqualität gewährleisten</li>
          <li>
            Branchen schützen, die auf Hochdruck-Flüssigkeits- oder
            Gasübertragung angewiesen sind
          </li>
          <li>Nationale Sicherheits- und Qualitätsmaßstäbe aufrechterhalten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Verständnis von IS 17875:2022 — Die Indische Norm für Nahtlose Rohre &
          Rohre
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 spezifiziert die Qualitäts-, Test-, Fertigungs- und
          Leistungsanforderungen für nahtlose Stahlrohre und Rohre, die für
          allgemeine Dienste bestimmt sind.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Nahtlose Rohre & Rohre
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Diese Norm deckt die Anforderungen für nahtlose
          Edelstahlrohre und Rohre für allgemeine Dienste ab.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Diese Norm spezifiziert nicht die Anforderungen
          für nahtlose Edelstahlrohre und Rohre, die für unterschiedliche Zwecke
          bestimmt sind, die von separaten Indischen Normen abgedeckt werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendungen Abgedeckt unter IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Öl- und Gaspipelines</li>
          <li>Hochtemperatur-Flüssigkeitsdienst</li>
          <li>Kesselrohre</li>
          <li>Chemieverarbeitungsanlagen</li>
          <li>Hydraulische und pneumatische Systeme</li>
          <li>Wärmetauscher</li>
          <li>Strukturelle Anwendungen</li>
          <li>Automobilkomponenten</li>
          <li>Dampfanwendungen</li>
          <li>Hochdruckindustriepipelines</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wichtige Qualitätsparameter in IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Anforderungen an die Chemische Zusammensetzung:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Spezifiziert Grenzwerte für Kohlenstoff, Mangan, Chrom, Nickel,
          Molybdän, Schwefel, Phosphor usw.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Mechanische Eigenschaften:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zugfestigkeit</li>
          <li>Streckgrenze</li>
          <li>Härte</li>
          <li>Duktilität</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Maßtoleranzen:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Außendurchmesser</li>
          <li>Wandstärke</li>
          <li>Längentoleranzen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Oberflächenbedingungen:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Rohre müssen frei von Rissen, Laminierungen, Nähten, Kratzern oder
          anderen schädlichen Defekten sein.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Hydrostatischer Test:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Stellt sicher, dass Rohre dem Innendruck ohne Leckage standhalten
          können.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Zerstörungsfreie Prüfung (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Umfasst Wirbelstrom-, Ultraschall- oder Magnetpulverprüfung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vollständiger BIS-Zertifizierungsprozess für Nahtlose Rohre (IS
          17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess für nahtlose Rohre ist technischer und
          detaillierter als die meisten anderen Produkte, da die Fertigungs- und
          Testanforderungen umfangreich sind. Nachfolgend finden Sie eine sehr
          detaillierte Schritt-für-Schritt-Erklärung.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 1 — Anwendbarkeit Bestimmen & Produktkategorisierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Hersteller muss:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Alle verwendeten Stahlqualitäten identifizieren</li>
          <li>Abmessungen und Dickenbereiche bestimmen</li>
          <li>
            Bestätigen, ob alle Varianten in den Anwendungsbereich von IS 17875
            fallen
          </li>
          <li>Produktklassifizierung für BIS-Tests vorbereiten</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Eine einzelne BIS-Lizenz kann mehrere Größen und Qualitäten abdecken,
          wenn sie dieselbe Fertigungsanlage und denselben Prozess teilen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 2 — Dokumentation Vorbereiten & Online-BIS-Antrag Einreichen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Hersteller muss eine Anfrage auf dem Manak Online BIS-Portal
          stellen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Informationen umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikdetails und Layout</li>
          <li>Produktionskapazität und Prozesse</li>
          <li>Ofen- und Wärmebehandlungsdetails</li>
          <li>Walz-, Durchstoß- und Ziehgeräte</li>
          <li>Qualitätskontrollsysteme</li>
          <li>Dokumentation zur Rohstoffbeschaffung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Falsche Einreichung ist eine der häufigsten Ursachen für die Ablehnung
          von BIS-Anträgen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 3 — Gebührenzahlung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Die Gebühren umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Labortestgebühren</li>
          <li>Inspektions- und Reisekosten</li>
          <li>Markierungsgebühr basierend auf dem Produktionsvolumen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 4 — Probenauswahl & BIS-Laborprüfung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nahtlose Rohre unterziehen sich umfangreichen mechanischen und
          chemischen Tests.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dies ist der zeitaufwändigste und technischste Teil der
          BIS-Zertifizierung.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Chemische Zusammensetzungsprüfung</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Durchgeführt mit:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Optische Emissionsspektroskopie</li>
          <li>Nasschemische Methoden</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Stellt sicher, dass die genaue chemische Zusammensetzung gemäß IS
          17875 eingehalten wird.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Mechanische Prüfung</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Zugprüfung</strong> — Bewertet die maximale Zugfestigkeit,
            Streckgrenze und Dehnung.
          </li>
          <li>
            <strong>Härteprüfung</strong> — Bestätigt die Materialzähigkeit.
          </li>
          <li>
            <strong>Abflachungsprüfung</strong> — Testet Duktilität und
            Schweißbarkeit (obwohl nahtlos, prüft die Abflachung die
            Materialintegrität).
          </li>
          <li>
            <strong>Aufweitung / Flanschprüfung</strong> — Stellt sicher, dass
            Verformbarkeit ohne Rissbildung gegeben ist.
          </li>
          <li>
            <strong>Schlagprüfung (Charpy)</strong> — Bewertet die Leistung bei
            niedrigen Temperaturen.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Hydrostatischer Test</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Rohre werden hohem Innendruck ausgesetzt, um sicherzustellen, dass
          keine Leckage oder Verformung auftritt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Zerstörungsfreie Prüfung</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Obligatorisch für die Erkennung interner Fehler.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Methoden umfassen:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ultraschallinspektion</li>
          <li>Wirbelstromuntersuchung</li>
          <li>Magnetpulverinspektion (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Visuelle & Maßprüfung</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Bewertet:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Oberflächenbeschaffenheit</li>
          <li>Geradheit</li>
          <li>Ovalität</li>
          <li>Dicken toleranz</li>
          <li>Durchmesser genauigkeit</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Metallurgische Untersuchung</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Die Mikrostrukturanalyse bestätigt die Korngröße, die Wirksamkeit der
          Wärmebehandlung und die Materialstabilität.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 5 — BIS-Fabrikinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sobald die Testergebnisse erfolgreich sind, besuchen BIS-Beamte die
          Fabrik.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sie inspizieren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rohstofflagerung</li>
          <li>Ofen-/Wärmebehandlungsprozesse</li>
          <li>Durchstoßmühlen, Reduzierer & Kaltziehstände</li>
          <li>Hydrostatische Testeinrichtung</li>
          <li>NDT-Einrichtung</li>
          <li>Laborgeräte & Kalibrierung</li>
          <li>Qualitätskontrollprotokolle</li>
          <li>Fertigungs kapazitätsverifizierung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Fabrik muss vollständig mit dem Schema für Tests & Inspektion
          (STI) übereinstimmen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 6 — Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Wenn Tests und Inspektion die BIS-Anforderungen erfüllen, erhält der
          Hersteller:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>CML-Nummer</li>
          <li>
            Genehmigung zur Verwendung des ISI-Markenzeichens auf nahtlosen
            Rohren
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS kann Anträge ablehnen, wenn auch nur eine Anforderung nicht
          erfüllt wird — was Expertenberatung extrem wertvoll macht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          SCHRITT 7 — Post-Zertifizierungsverpflichtungen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ISI-Markenzeichen korrekt auf Etiketten, Verpackungen und Rohren
            verwenden
          </li>
          <li>Interne Tests gemäß STI aufrechterhalten</li>
          <li>Regelmäßige BIS-Überwachungsinspektionen durchlaufen</li>
          <li>Sicherstellen, dass jede Charge IS 17875:2022 entspricht</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das Versäumnis, die Konformität aufrechtzuerhalten, kann zur
          Lizenzaussetzung oder -kündigung führen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Nahtlosen Rohren Erforderliche
          Dokumente
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          A. Fertigungs- & Produktionsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriklizenz</li>
          <li>Layoutdiagramm mit Maschinenpositionierung</li>
          <li>Qualitätskontrollprozesshandbuch</li>
          <li>Wärmebehandlungsaufzeichnungen</li>
          <li>Rohstoffmühlen-Testzertifikate</li>
          <li>Walz-/Durchstoßprozessdetails</li>
          <li>Ziehstanddetails</li>
          <li>Kalibrierungszertifikate für Testgeräte</li>
          <li>Interne Testberichte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          B. Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stückliste</li>
          <li>Chemische Qualitätsspezifikationen</li>
          <li>Mechanische Eigenschaftsblätter</li>
          <li>Maßtoleranzdiagramme</li>
          <li>Zeichnungen & Spezifikationen von Rohren</li>
          <li>Dokumentation des Materialrückverfolgungssystems</li>
          <li>Standardbetriebsverfahren für die Produktion</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          C. Rechtliche & Organisationsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Autorisierungsschreiben</li>
          <li>Marken-/Markenzeichen-Eigentumsdokument</li>
          <li>Identitäts- & Adressnachweise</li>
          <li>Verpflichtungen & Erklärungen gemäß BIS-Anforderungen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für Nahtlose Rohre unter IS 17875:2022
        </h2>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Klausel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Anforderungen
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
                  Aufweitungsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abflachungsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Korngröße
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dichtheitsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verarbeitung, Finish, Aussehen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
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
          Häufige Herausforderungen bei der BIS-Zertifizierung
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Fehler bei der chemischen Zusammensetzungsprüfung</strong>
            <br />
            Tritt aufgrund inkonsistenter Stahlqualitäten auf.
          </li>
          <li>
            <strong>Fehler bei mechanischen Tests</strong>
            <br />
            Oft verursacht durch falsche Wärmebehandlung.
          </li>
          <li>
            <strong>NDT-Ablehnung</strong>
            <br />
            Interne Risse oder Einschlüsse können zum Probenversagen führen.
          </li>
          <li>
            <strong>Unzureichende Kalibrierung</strong>
            <br />
            Führt zu ungenauen Testdaten.
          </li>
          <li>
            <strong>STI-Nichtkonformität</strong>
            <br />
            Falsche Protokollführung während der Inspektion wird zu einem
            Hauptablehnungsgrund.
          </li>
          <li>
            <strong>Maßabweichung</strong>
            <br />
            Rohrdurchmesser- oder Dickeninkonsistenzen verursachen Versagen.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Nahtlose Rohre
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtliche Genehmigung zur Herstellung/Verkauf in Indien</li>
          <li>Gewährleistet Sicherheit und Zuverlässigkeit</li>
          <li>Verbessert den Markenruf</li>
          <li>Wesentlich für Regierungsausschreibungen</li>
          <li>Erforderlich von PSU und privaten Industrien</li>
          <li>Schützt Verbraucher vor minderwertigen Produkten</li>
          <li>Erhöht die Exportwettbewerbsfähigkeit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen für Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Unter dem BIS-Gesetz führt der Verkauf nicht zertifizierter nahtloser
          Rohre zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktbeschlagnahme</li>
          <li>Schwere Strafen</li>
          <li>Fertigungsstopp</li>
          <li>Importbeschränkungen</li>
          <li>Markenaufnahme auf die schwarze Liste</li>
          <li>Strafverfolgung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer Muss die BIS-Zertifizierung Erhalten?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller, die nach Indien exportieren</li>
          <li>Händler (Markeninhaber)</li>
          <li>OEM & Ingenieurunternehmen</li>
          <li>Importeure und Großhändler</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Fertigungseinheit muss eine separate Lizenz erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Nahtlose Rohre und Rohre unter IS 17875:2022
          ist eine kritische regulatorische Anforderung, die sicherstellt, dass
          Hochdruck-Dienstrohre Indiens strenge Sicherheits- und
          Qualitätsstandards erfüllen. Von der chemischen Zusammensetzung bis
          zur fortgeschrittenen zerstörungsfreien Prüfung stellt BIS sicher,
          dass jedes zertifizierte Rohr langlebig, fehlerfrei und in der Lage
          ist, unter anspruchsvollen industriellen Bedingungen zu funktionieren.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit professioneller Beratung können Hersteller den
          Zertifizierungsprozess rationalisieren, Verzögerungen minimieren und
          die Konformität reibungslos erreichen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs — Nahtlose Rohre BIS-Zertifizierung (Erweitert & SEO-Reich)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Warum ist die BIS-Zertifizierung für nahtlose Rohre
                obligatorisch?
              </strong>
              <br />
              Weil nahtlose Rohre in Hochdruck- und sicherheitskritischen
              Anwendungen verwendet werden. Regierungsvorschriften stellen
              sicher, dass nur hochwertige Rohre auf den indischen Markt
              gelangen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welche Norm gilt für nahtlose Rohre?</strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wie lange dauert der Zertifizierungsprozess?</strong>
              <br />
              Typischerweise 40-60 Tage für Indische Hersteller und etwa 120
              Tage für ausländische Hersteller, abhängig von der Testlast und
              der Inspektionsplanung.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Welche Tests sind erforderlich?</strong>
              <br />
              Chemische Analyse, Zugtest, Härte, hydrostatisch, NDT, Abflachung,
              Aufweitung und Maßprüfungen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Können ausländische Unternehmen die BIS-Zertifizierung
                beantragen?
              </strong>
              <br />
              Ja, über das FMCS-Schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Was passiert, wenn das Produkt die Tests nicht besteht?
              </strong>
              <br />
              Es muss korrigiert und erneut getestet werden; BIS wird die Lizenz
              nicht ausstellen, bis vollständige Konformität erreicht ist.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Welche Dokumente sind erforderlich?</strong>
              <br />
              Fabriklizenz, Maschinenliste, Testgeräte, Zeichnungen,
              Qualitätskontroll dokumente, Rohstoffzertifikate usw.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Ist die ISI-Markierung obligatorisch?</strong>
              <br />
              Ja. Es ist illegal, nahtlose Rohre zu verkaufen, ohne das
              ISI-Markenzeichen anzugeben.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Sind mehrere Qualitäten in einer Lizenz erlaubt?
              </strong>
              <br />
              Ja, wenn sie mit derselben Anlage und demselben Prozess produziert
              werden (vorbehaltlich BIS-Genehmigung).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Wie lange ist die BIS-Lizenz gültig?</strong>
              <br />
              1-2 Jahre, unbegrenzt erneuerbar.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17875-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Nahtlose Rohre & Rohre - IS 17875:2022 PDF"
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
                alt="BIS-Logo"
                title="BIS-Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Markenzeichen (ISI-Lizenz) für Ausländische Herstellung
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
                alt="LMPC-Logo"
                title="LMPC-Logo"
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
                alt="ISI-Markenzeichen-Logo"
                title="ISI-Markenzeichen-Logo"
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
