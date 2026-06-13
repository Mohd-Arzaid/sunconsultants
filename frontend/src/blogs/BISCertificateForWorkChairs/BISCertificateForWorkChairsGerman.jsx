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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForWorkChairsGerman = () => {
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

export default BISCertificateForWorkChairsGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Arbeitsstühle | IS 17631:2022 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Arbeitsstühle – IS 17631:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Arbeitsstühle | IS 17631:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Arbeitsstühle nach IS 17631:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Arbeitsstühle gemäß IS 17631:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Arbeitsstühle nach IS 17631:2022. Erfahren Sie BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Arbeitsstühle, BIS-Lizenz für Arbeitsstühle, IS 17631:2022, BIS-Zertifizierung für Arbeitsstühle";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
      />
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
                    BIS-Zertifizierung für Arbeitsstühle (IS 17631:2022)
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
          BIS-Zertifizierung für Arbeitsstühle (IS 17631:2022) – Vollständiger
          ISI-Marken-Zertifizierungsleitfaden
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="BIS-Lizenz für Arbeitsstühle"
            alt="BIS-Zertifizierung für Arbeitsstühle - IS 17631:2022 ISI-Marken-Leitfaden"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Arbeitsstühle sind zu einem unverzichtbaren Bestandteil moderner
          Arbeitsplätze, Bildungseinrichtungen, Behörden, Co-Working-Spaces und
          Home-Office-Umgebungen geworden. Da Unternehmen zunehmend Wert auf
          Mitarbeiterkomfort, Produktivität, ergonomische Arbeitsplatzgestaltung
          und betriebliches Wohlbefinden legen, steigt die Nachfrage nach
          hochwertigen Arbeitsstühlen kontinuierlich.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ein schlecht konstruierter Stuhl kann Haltung, Komfort und
          Produktivität negativ beeinflussen. Aus diesem Grund sind Qualität,
          Sicherheit, Haltbarkeit und ergonomische Leistung entscheidende
          Kriterien für Hersteller, Einkäufer und Beschaffungsstellen. Um
          einheitliche Qualitätsstandards in der Branche sicherzustellen, hat das
          Bureau of Indian Standards (BIS) IS 17631:2022 als indischen Standard
          für Arbeitsstühle festgelegt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die unter den geltenden regulatorischen Rahmenbedingungen
          fallen, müssen eine BIS-Zertifizierung erhalten und das ISI-Zeichen
          auf konformen Produkten anbringen. Die BIS-Zertifizierung belegt, dass
          der Arbeitsstuhl anhand der vorgeschriebenen Anforderungen in Bezug
          auf Sicherheit, Festigkeit, Stabilität, Haltbarkeit und ergonomische
          Leistung bewertet wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt alles, was Hersteller, Importeure,
          Möbelmarken, Beschaffungsfachleute und Unternehmer über die
          BIS-Zertifizierung für Arbeitsstühle gemäß IS 17631:2022 wissen
          müssen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kurzüberblick zur BIS-Zertifizierung für Arbeitsstühle
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Merkmal
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Produkt", "Arbeitsstühle"],
                ["Anwendbarer indischer Standard", "IS 17631:2022"],
                ["Zertifizierungstyp", "BIS-Produktzertifizierung"],
                [
                  "Anwendbares Zertifizierungsschema",
                  "Scheme-I (ISI-Marken-Zertifizierung)",
                ],
                ["Anwendbare Marke", "ISI-Marke"],
                [
                  "Regulierungsbehörde",
                  "Bureau of Indian Standards (BIS)",
                ],
                ["Zuständiges Ministerium", "Ministerium für Handel und Industrie"],
                [
                  "Compliance-Anforderung",
                  "Obligatorisch gemäß anwendbarer Furniture QCO (Quality Control Order)",
                ],
                [
                  "Berechtigte Antragsteller",
                  "Indische Hersteller und ausländische Hersteller ",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Anwendbares Zertifizierungsschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (ISI-Marken-Zertifizierung)
                      </a>
                    ) : particular === "Compliance-Anforderung" ? (
                      <>
                        Obligatorisch gemäß anwendbarer{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Furniture QCO (Quality Control Order)</strong>
                        </a>
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung für Arbeitsstühle?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Arbeitsstühle ist ein Konformitätsbewertungsverfahren,
          das im Rahmen des BIS-Produktzertifizierungsschemas durchgeführt wird.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zweck der Zertifizierung ist die Überprüfung, ob Arbeitsstühle den
          Anforderungen gemäß IS 17631:2022 entsprechen. Nach erfolgreicher
          Zertifizierung dürfen Hersteller das ISI-Zeichen auf ihren Produkten
          anbringen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Zertifizierungsprozess bewertet verschiedene Leistungs- und
          Sicherheitsaspekte von Arbeitsstühlen, darunter:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ergonomisches Design</li>
          <li>Strukturelle Integrität</li>
          <li>Stabilität</li>
          <li>Haltbarkeit</li>
          <li>Sicherheitsanforderungen</li>
          <li>Verarbeitungsqualität</li>
          <li>Produktleistung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die ISI-Marke bietet die Gewissheit, dass das Produkt anhand anerkannter
          indischer Standards bewertet wurde und die vorgeschriebenen
          Qualitätsanforderungen erfüllt.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Arbeitsstühle wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Arbeitsstühle werden über lange Zeiträume in Büros, Bildungseinrichtungen,
          gewerblichen Betrieben und Home-Office-Arbeitsplätzen genutzt. Da Nutzer
          einen erheblichen Teil ihres Tages im Sitzen verbringen, beeinflussen
          Qualität und ergonomische Leistung dieser Stühle unmittelbar Komfort
          und Effizienz am Arbeitsplatz.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die BIS-Zertifizierung trägt dazu bei sicherzustellen, dass zertifizierte
          Arbeitsstühle:
        </p>

        <ul className={LIST_CLASS}>
          <li>Die vorgeschriebenen Sicherheitsanforderungen erfüllen</li>
          <li>Zuverlässige Leistung bieten</li>
          <li>Ausreichende strukturelle Festigkeit aufweisen</li>
          <li>Während der Nutzung stabil bleiben</li>
          <li>Langfristige Haltbarkeit gewährleisten</li>
          <li>Indischen Qualitätsstandards entsprechen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für Hersteller hilft die Zertifizierung, Produktqualität nachzuweisen und
          unterstützt gleichzeitig regulatorische Compliance und Marktakzeptanz.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Überblick über IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 ist der indische Standard, der Anforderungen für
          Arbeitsstühle festlegt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Standard definiert Anforderungen in Bezug auf:
        </p>

        <ul className={LIST_CLASS}>
          <li>Sicherheit</li>
          <li>Festigkeit</li>
          <li>Stabilität</li>
          <li>Haltbarkeit</li>
          <li>Ergonomische Aspekte</li>
          <li>Funktionale Leistung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ziel ist es sicherzustellen, dass Arbeitsstühle bei längerer Nutzung in
          Arbeitsumgebungen sichere und zuverlässige Leistung bieten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1">
          Anwendungsbereich von IS 17631:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Gemäß dem Standard umfasst IS 17631:2022 Arbeitsstühle und gilt für:
        </p>

        <ul className={LIST_CLASS}>
          <li>Vollständig hergestellte Arbeitsstühle</li>
          <li>Gefertigte Arbeitsstühle</li>
          <li>Montagefertige Arbeitsstühle nach der Montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Anforderungen des Standards gelten für das montierte Produkt, das
          zur Nutzung bestimmt ist.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Arten von Arbeitsstühlen, die unter IS 17631:2022 fallen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Je nach Produktdesign und vorgesehenem Einsatz kann der Standard für
          verschiedene Kategorien von Arbeitsplatz-Sitzmöbeln gelten, darunter:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Büro-Arbeitsstühle —</strong> Sitzmöbel für Unternehmensbüros,
            Verwaltungsabteilungen und professionelle Arbeitsumgebungen.
          </li>
          <li>
            <strong>Task Chairs —</strong> Stühle für tägliche Schreibtischarbeit,
            Arbeitsplätze und routinemäßige sitzende Tätigkeiten.
          </li>
          <li>
            <strong>Verstellbare Arbeitsstühle —</strong> Modelle mit
            Höhen-, Neigungs- oder anderen Verstellfunktionen zur Verbesserung
            von Komfort und Ergonomie.
          </li>
          <li>
            <strong>Institutionelle Arbeitsstühle —</strong> Stühle für Schulen,
            Hochschulen, Behörden und gewerbliche Einrichtungen.
          </li>
          <li>
            <strong>Home-Office-Stühle —</strong> Arbeitsstühle für Remote-Arbeit,
            Freelancer und häusliche Büroeinrichtungen.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prüfen Sie Produktdesign, Mechanismus und vorgesehenen Einsatz sorgfältig,
          um zu bestätigen, ob Ihr Stuhl in den Anwendungsbereich von IS 17631:2022
          fällt.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Prüfen Sie auch Möbelprodukte, die unter der obligatorischen
            BIS-Zertifizierung fallen —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS-Zertifizierung für Möbel</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wichtige Anforderungen gemäß IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Standard konzentriert sich auf mehrere wichtige Leistungsmerkmale,
          die zur Qualität und Sicherheit von Arbeitsstühlen beitragen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Ergonomisches Design —</strong> Berücksichtigt Nutzerkomfort,
            Sitz- und Rückenlehnenstütze, Verstellbarkeit und korrekte Haltung zur
            Reduzierung von Ermüdung und Steigerung der Produktivität am Arbeitsplatz.
          </li>
          <li>
            <strong>Festigkeitsanforderungen —</strong> Rahmen, Verbindungen und
            tragende Strukturen müssen der normalen Nutzung ohne Versagen oder
            Verlust der Integrität standhalten.
          </li>
          <li>
            <strong>Stabilitätsanforderungen —</strong> Stühle müssen dem Kippen
            widerstehen und bei regulärer sitzender Nutzung und Bewegung stabil
            bleiben.
          </li>
          <li>
            <strong>Haltbarkeitsanforderungen —</strong> Produkte müssen nach
            langfristiger und wiederholter täglicher Nutzung über ihre vorgesehene
            Lebensdauer hinweg konstante Leistung erbringen.
          </li>
          <li>
            <strong>Sicherheitsanforderungen —</strong> Design und Konstruktion
            müssen vermeidbare Gefahren durch Instabilität, Mängel oder unsichere
            Verarbeitung minimieren.
          </li>
          <li>
            <strong>Materialqualität —</strong> Komponenten und Oberflächen müssen
            Qualitätsstandards erfüllen, die sichere, langlebige und zuverlässige
            Leistung unterstützen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für die BIS-Zertifizierung von Arbeitsstühlen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vor der Erteilung der Zertifizierung werden Produktproben in einem
          anerkannten Labor geprüft. Die Tests dienen der Überprüfung der
          Einhaltung der Anforderungen gemäß IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Wichtigste durchgeführte Tests</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Design und Verarbeitung"],
                ["7.3.1", "Vorderkanten-Umkippen"],
                ["7.3.2", "Vorwärts-Umkippen"],
                [
                  "7.3.3",
                  "Vorwärts-Umkippen für Stühle mit Fußstütze",
                ],
                [
                  "7.3.4",
                  "Seitwärts-Umkippen für Stühle ohne Armlehnen",
                ],
                [
                  "7.3.5",
                  "Seitwärts-Umkippen für Stühle mit Armlehnen",
                ],
                [
                  "7.3.6",
                  "Rückwärts-Umkippen für Stühle ohne Rückenlehne",
                ],
                ["7.4.1", "Sitz-Vorderkanten-Statiklasttest"],
                ["7.4.2", "Kombinierter Sitz- und Rücken-Statiklasttest"],
                ["7.4.3", "Armlehnen-Abwärts-Statiklasttest — Zentral"],
                ["7.4.4", "Armlehnen-Abwärts-Statiklasttest — Vorne"],
                ["7.4.5", "Armlehnen-Seitwärts-Statiklasttest"],
                ["7.4.6", "Fußstütze-Statiklasttest"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Arbeitsstühle
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die eine BIS-Zertifizierung gemäß IS 17631:2022 anstreben,
          müssen einen strukturierten Zertifizierungsprozess durchlaufen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Schritt 1: Bewertung der Produktanwendbarkeit —</strong>{" "}
            Bestätigen Sie, ob der Arbeitsstuhl unter IS 17631:2022 und die
            anwendbare Furniture QCO fällt, bevor Sie mit der Zertifizierung
            beginnen.
          </li>
          <li>
            <strong>Schritt 2: Dokumentationsvorbereitung —</strong> Stellen Sie
            technische, produktionsbezogene, qualitätskontrollbezogene und
            rechtliche Unterlagen zusammen, die für die BIS-Prüfung erforderlich
            sind.
          </li>
          <li>
            <strong>Schritt 3: Produkttests —</strong> Reichen Sie Proben in einem
            BIS-anerkannten Labor zur Bewertung gemäß IS 17631:2022 ein.
          </li>
          <li>
            <strong>Schritt 4: Antragseinreichung —</strong> Reichen Sie den
            BIS-Antrag mit Prüfberichten, Werksdetails und unterstützenden
            Compliance-Dokumenten ein.
          </li>
          <li>
            <strong>Schritt 5: Werksinspektion —</strong> BIS bewertet
            Produktionssysteme, QC-Verfahren und Rückverfolgbarkeit in der
            Fertigungsstätte.
          </li>
          <li>
            <strong>Schritt 6: Technische Prüfung —</strong> BIS wertet Antrag,
            Laborergebnisse und Inspektionsbefunde aus, bevor die endgültige
            Genehmigung erteilt wird.
          </li>
          <li>
            <strong>Schritt 7: Erteilung der BIS-Lizenz —</strong> Bei
            erfolgreicher Konformität erteilt BIS die Lizenz und autorisiert die
            Verwendung des ISI-Zeichens auf zertifizierten Arbeitsstühlen.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierung für indische Hersteller
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indische Hersteller beantragen in der Regel über das inländische
          Zertifizierungsverfahren. Der Prozess umfasst typischerweise:
        </p>

        <ul className={LIST_CLASS}>
          <li>Produkttests in einem BIS-anerkannten Labor</li>
          <li>Dokumentenprüfung und BIS-Antragstellung</li>
          <li>Werksbewertung und technische Beurteilung durch BIS</li>
          <li>Erteilung der BIS-Lizenz und ISI-Marken-Autorisierung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Zertifizierung müssen Hersteller die laufende Einhaltung der
          BIS-Überwachungs-, Kennzeichnungs- und Qualitätsanforderungen
          aufrechterhalten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierung für ausländische Hersteller
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ausländische Hersteller, die Arbeitsstühle nach Indien exportieren
          möchten, müssen ebenfalls eine BIS-Zertifizierung erhalten, bevor sie
          Produkte liefern, die unter obligatorische Zertifizierungsanforderungen
          fallen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Prozess umfasst in der Regel:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bestellung eines Authorized Indian Representative (AIR)</li>
          <li>Produkttests im Ausland und Werksbewertung</li>
          <li>BIS-Antragsprüfung und Zertifizierungsgenehmigung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dies stellt sicher, dass importierte Produkte dieselben Qualitäts- und
          Sicherheitsanforderungen erfüllen, die auch für inländische Hersteller
          gelten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Erforderliche Dokumente für die BIS-Zertifizierung von Arbeitsstühlen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dokumentation ist ein entscheidender Bestandteil des
          BIS-Zertifizierungsprozesses für Arbeitsstühle. Die Anforderungen
          können je nachdem variieren, ob der Antragsteller ein indischer
          Hersteller, ausländischer Hersteller oder Importeur ist und welches
          Zertifizierungsschema befolgt wird. Unvollständige oder widersprüchliche
          Unterlagen gehören zu den häufigsten Gründen für Verzögerungen bei
          Anträgen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die folgenden Dokumente werden bei der BIS-Zertifizierung von
          Arbeitsstühlen gemäß IS 17631:2022 üblicherweise benötigt:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Geschäftsdokumente —</strong> Firmenregistrierungsbescheinigung,
            Herstellungslizenz (falls zutreffend), GST-Registrierung,
            Nachweis der Geschäftsadresse sowie Angaben zum autorisierten
            Unterzeichner mit Identitäts- und Adressnachweis.
          </li>
          <li>
            <strong>Produktionsdokumente —</strong> Werkshlayoutplan,
            Fertigungsprozessflussdiagramm, Liste der Produktionsmaschinen und
            Prüfausrüstung sowie Details zur Produktionsinfrastruktur und
            installierten Kapazität.
          </li>
          <li>
            <strong>Produktdokumente —</strong> Produktspezifikationen,
            technische oder Konstruktionszeichnungen, Produktkatalog oder
            Modellliste, Stückliste (BOM) sowie Details zu Rohmaterialien,
            Komponenten und kritischen Teilen des Arbeitsstuhls.
          </li>
          <li>
            <strong>Qualitätskontrolldokumente —</strong> Schriftliche
            Qualitätskontrollverfahren, Prüfprotokolle für eingehendes Material,
            Prüfberichte für Zwischen- und Endprodukte, interne Testmethoden
            sowie Kalibrierungszertifikate für Mess- und Prüfausrüstung.
          </li>
          <li>
            <strong>Zertifizierungsdokumente —</strong> Prüfberichte aus einem
            BIS-anerkannten Labor, ordnungsgemäß ausgefüllte BIS-Antragsformulare,
            Erklärungen und Verpflichtungen, Etiketten- oder Kennzeichnungsmuster
            sowie alle weiteren von BIS für den jeweiligen Zertifizierungsweg
            vorgeschriebenen Dokumente.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle Dokumente sollten korrekt, vollständig und konsistent mit den im
          BIS-Antrag angegebenen Produktdetails sein. Herstellern wird empfohlen,
          die Dokumentationsanforderungen sorgfältig zu prüfen, bevor sie den
          Antrag einreichen, um unnötige Verzögerungen im Zertifizierungsprozess
          zu vermeiden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Arbeitsstühle
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Regulatorische Compliance —</strong> Erfüllung obligatorischer
            indischer Standards und QCO-Anforderungen für rechtmäßige Herstellung
            und den Verkauf.
          </li>
          <li>
            <strong>Rechtlicher Marktzugang —</strong> Lieferung zertifizierter
            Arbeitsstühle in Indien ohne regulatorisches Risiko für abgedeckte
            Produktkategorien.
          </li>
          <li>
            <strong>Stärkere Glaubwürdigkeit —</strong> Die ISI-Marke signalisiert
            geprüfte Qualität, Sicherheit und Konformität mit IS 17631:2022.
          </li>
          <li>
            <strong>Kundenvertrauen —</strong> Unternehmenskunden, Institutionen
            und Endnutzer vertrauen Produkten, die an nationalen Benchmarks
            getestet wurden.
          </li>
          <li>
            <strong>Bessere Beschaffungschancen —</strong> Verbessert die
            Eignung für Regierungs-, institutionelle und großvolumige gewerbliche
            Ausschreibungen.
          </li>
          <li>
            <strong>Stärkerer Markenruf —</strong> Zeigt Engagement für Qualität,
            Ergonomie und langfristige Produktzuverlässigkeit.
          </li>
          <li>
            <strong>Verbesserte Qualitätskontrolle —</strong> Fördert strukturierte
            QC-Systeme, Rückverfolgbarkeit und einheitliche Produktionsstandards.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen bei der BIS-Zertifizierung
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technische Interpretation —</strong> Die Zuordnung der
            IS-17631:2022-Klauseln zu spezifischen Stuhldesigns, Mechanismen und
            Varianten kann komplex sein.
          </li>
          <li>
            <strong>Testfehler —</strong> Schwache Rahmen, mangelnde Stabilität
            oder Mechanismusprobleme führen häufig zur Ablehnung bei
            Umkipp- oder Lasttests.
          </li>
          <li>
            <strong>Dokumentationslücken —</strong> Abweichende Zeichnungen,
            unvollständige QC-Unterlagen oder fehlende Erklärungen verzögern
            Genehmigungen häufig.
          </li>
          <li>
            <strong>Werks-Compliance —</strong> Produktionskontrollen,
            Rückverfolgbarkeit und interne Tests müssen möglicherweise vor der
            Lizenzerteilung verbessert werden.
          </li>
          <li>
            <strong>Regulatorische Koordination —</strong> Die Abstimmung von
            Labortests, BIS-Inspektionen und Nachfragen erfordert ohne
            fachkundige Unterstützung Zeit.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum Sun Certifications India wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India ist eine Beratungsgesellschaft für regulatorische
          Compliance, die Hersteller, Importeure, Exporteure und Unternehmen bei
          der Erlangung verschiedener Zertifizierungen und Genehmigungen für den
          indischen Markt unterstützt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unser Team bietet umfassende Unterstützung bei der BIS-Zertifizierung
          von Arbeitsstühlen gemäß IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Unsere Leistungen umfassen</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Bewertung der Produktanwendbarkeit —</strong> Wir prüfen, ob
            Ihre Arbeitsstühle unter IS 17631:2022 und die anwendbare QCO fallen.
          </li>
          <li>
            <strong>BIS-Compliance-Beratung —</strong> Fachkundige Beratung zu
            Zertifizierungswegen, Pflichten und Standardanforderungen.
          </li>
          <li>
            <strong>Dokumentationsunterstützung —</strong> Vorbereitung, Prüfung
            und Organisation aller BIS-Antrags- und Werksunterlagen.
          </li>
          <li>
            <strong>Testkoordination —</strong> Umfassende Unterstützung bei der
            Probenabgabe und Prüfung in anerkannten Laboratorien.
          </li>
          <li>
            <strong>Unterstützung bei Werksinspektion —</strong> Vorbereitungsprüfungen
            für BIS-Werksbewertungen und Compliance-Beurteilungen.
          </li>
          <li>
            <strong>Antragsmanagement —</strong> Bearbeitung von BIS-Anträgen,
            Nachverfolgungen und regulatorischer Kommunikation in Ihrem Namen.
          </li>
          <li>
            <strong>Support nach der Zertifizierung —</strong> Laufende Unterstützung
            bei Überwachung, Kennzeichnungsregeln und Lizenzpflege.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Arbeitsstühle gemäß IS 17631:2022 spielt eine
          wichtige Rolle bei der Sicherstellung von Qualität, Sicherheit,
          Haltbarkeit, Stabilität und ergonomischer Leistung bei
          Arbeitsplatz-Sitzmöbeln.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Durch die Erlangung der BIS-Zertifizierung und die Verwendung des
          ISI-Zeichens können Hersteller die Einhaltung indischer Standards
          nachweisen, das Kundenvertrauen stärken, die Produktglaubwürdigkeit
          verbessern und langfristiges Geschäftswachstum unterstützen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ob Sie ein indischer Hersteller oder ein ausländischer Hersteller sind,
          der Zugang zum indischen Markt anstrebt – das Verständnis der
          Anforderungen von IS 17631:2022 ist ein wesentlicher Schritt hin zu
          regulatorischer Compliance und Markterfolg.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wenn Sie planen, eine BIS-Zertifizierung für Arbeitsstühle gemäß IS
          17631:2022 zu erhalten, kann Sun Certifications India den Prozess durch
          fachkundige regulatorische Beratung und umfassende Compliance-Unterstützung
          vereinfachen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS-Zertifizierung für Arbeitsstühle (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Was ist die BIS-Zertifizierung für Arbeitsstühle?</strong>
              <br />
              Die BIS-Zertifizierung bestätigt, dass Arbeitsstühle den
              Anforderungen von IS 17631:2022 und den geltenden
              Zertifizierungsvorgaben entsprechen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Was ist IS 17631:2022?</strong>
              <br />
              IS 17631:2022 ist der indische Standard, der Anforderungen für
              Arbeitsstühle festlegt, einschließlich Sicherheit, Festigkeit,
              Stabilität, Haltbarkeit und ergonomischer Aspekte.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Ist die BIS-Zertifizierung für Arbeitsstühle obligatorisch?
              </strong>
              <br />
              Arbeitsstühle, die unter den geltenden regulatorischen
              Rahmenbedingungen fallen, müssen die BIS-Zertifizierungsanforderungen
              erfüllen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Was ist die ISI-Marke?</strong>
              <br />
              Die ISI-Marke ist das standardmäßige Zertifizierungszeichen, das im
              Rahmen des BIS-Produktzertifizierungsschemas vergeben wird.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Wer kann eine BIS-Zertifizierung beantragen?</strong>
              <br />
              Sowohl indische als auch ausländische Hersteller können einen Antrag
              stellen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Erfordert die BIS-Zertifizierung Produkttests?
              </strong>
              <br />
              Ja. Produkttests sind ein wichtiger Bestandteil des
              Zertifizierungsprozesses.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Benötigen importierte Arbeitsstühle eine BIS-Zertifizierung?
              </strong>
              <br />
              Produkte, die unter obligatorische Zertifizierungsanforderungen
              fallen, müssen vor der Lieferung in Indien die geltenden
              BIS-Vorschriften erfüllen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Welche Tests werden gemäß IS 17631:2022 durchgeführt?</strong>
              <br />
              Der Standard umfasst Bewertungen wie Design- und Verarbeitungsprüfung,
              Maßkontrolle, Stabilitätstests und Statiklasttests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Warum ist ergonomisches Design für Arbeitsstühle wichtig?
              </strong>
              <br />
              Ergonomisches Design verbessert den Nutzerkomfort, unterstützt eine
              korrekte Haltung und trägt zu einem besseren Arbeitserlebnis bei.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Wie kann Sun Certifications India helfen?</strong>
              <br />
              Sun Certifications India unterstützt bei Anwendbarkeitsprüfung,
              Dokumentation, Testkoordination, Inspektionsvorbereitung,
              Antragsmanagement und Compliance-Betreuung.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Arbeitsstühle - IS 17631:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Verwandte Ressourcen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              {" "}
              ISI-Zertifikat
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS-Zertifikat für ausländische Hersteller
            </a>
          </li>
        </ul>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={4} />
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
                alt="LMPC logo"
                title="LMPC logo"
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
