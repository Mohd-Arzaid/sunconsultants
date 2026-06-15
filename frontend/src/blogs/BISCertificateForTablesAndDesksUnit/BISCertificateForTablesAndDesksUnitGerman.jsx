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
                    BIS-Zertifizierung für Tische und Schreibtische (IS 17633:2022)
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
          BIS-Zertifizierung für Tische und Schreibtische (IS 17633:2022) –
          Vollständiger Leitfaden zur ISI-Marken-Zertifizierung
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS-Lizenz für Tische und Schreibtische"
            alt="BIS-Zertifizierung für Tische und Schreibtische - IS 17633:2022 ISI-Marken-Leitfaden"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tische und Schreibtische gehören zu den am häufigsten verwendeten
          Möbelprodukten in Büros, Bildungseinrichtungen, Gewerbebetrieben,
          Regierungsorganisationen und Wohnräumen. Da von diesen Produkten
          erwartet wird, dass sie der regelmäßigen Nutzung standhalten und
          gleichzeitig Benutzersicherheit, Stabilität und Haltbarkeit
          gewährleisten, ist die Einhaltung anerkannter Qualitätsnormen für
          Hersteller und Importeure zunehmend wichtig geworden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In Indien müssen Tische und Schreibtische, die unter IS 17633:2022
          fallen, die geltenden Qualitäts- und Sicherheitsanforderungen des
          Bureau of Indian Standards (BIS) erfüllen. Hersteller, die diese
          Anforderungen erfolgreich erfüllen, können eine BIS-Lizenz erhalten
          und die ISI-Marke auf ihren Produkten verwenden, was die
          Konformität mit der relevanten indischen Norm belegt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Zertifizierungsprozess bewertet verschiedene Aspekte der
          Produktleistung, einschließlich Festigkeit, Stabilität, Haltbarkeit,
          Verarbeitung, Abmessungen und allgemeine Sicherheit. Die Einhaltung
          hilft Unternehmen nicht nur, regulatorische Anforderungen zu
          erfüllen, sondern verbessert auch die Produktglaubwürdigkeit und die
          Marktakzeptanz.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden erklärt alles, was Hersteller,
          Importeure, Möbelmarken und Beschaffungsexperten über die
          BIS-Zertifizierung für Tische und Schreibtische nach IS 17633:2022
          wissen müssen, einschließlich Anwendbarkeit,
          Zertifizierungsanforderungen, Testparametern, Dokumentation,
          Vorteilen und dem Zertifizierungsprozess.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wichtige Highlights der BIS-Zertifizierung für Tische und Schreibtische
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
                ["Produkt", "Tische und Schreibtische"],
                ["Anwendbare Norm", "IS 17633:2022"],
                ["Zertifizierungstyp", "BIS-Produktzertifizierung"],
                ["Anwendbare Marke", "ISI-Marke"],
                ["Zertifizierungsschema", "Schema-I (ISI-Marken-Zertifizierung)"],
                ["Regulierungsbehörde", "Bureau of Indian Standards (BIS)"],
                ["Anwendbarer Sektor", "Möbel"],
                [
                  "Berechtigte Antragsteller",
                  "Indische Hersteller und ausländische Hersteller",
                ],
                [
                  "Compliance-Anforderung",
                  "Obligatorisch unter geltender Möbel-QCO (Quality Control Order)",
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
                    {particular === "Zertifizierungsschema" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Schema-I (ISI-Marken-Zertifizierung)
                      </a>
                    ) : particular === "Compliance-Anforderung" ? (
                      <>
                        Obligatorisch unter geltender {" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                         <strong>Möbel-QCO (Quality Control Order)</strong>
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
          Was ist die BIS-Zertifizierung für Tische und Schreibtische?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Tische und Schreibtische ist ein
          Konformitätsbewertungsprozess, der im Rahmen des
          Produktzertifizierungsschemas des Bureau of Indian Standards (BIS)
          durchgeführt wird. Die Zertifizierung bestätigt, dass das Produkt die
          in IS 17633:2022 festgelegten Anforderungen erfüllt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach erfolgreicher Zertifizierung dürfen Hersteller die ISI-Marke auf
          ihren Produkten verwenden, was die Einhaltung der geltenden indischen
          Norm anzeigt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Zertifizierung soll sicherstellen, dass auf dem indischen Markt
          gelieferte Tische und Schreibtische die festgelegten Anforderungen
          erfüllen in Bezug auf:
        </p>

        <ul className={LIST_CLASS}>
          <li>Strukturelle Festigkeit und Stabilität bei normaler Nutzung</li>
          <li>Haltbarkeit, Benutzersicherheit und Materialverarbeitung</li>
          <li>Vollständige Leistungsanforderungen nach IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für Käufer und Beschaffungsstellen dient die ISI-Marke als Garantie
          dafür, dass die Möbel anhand anerkannter Qualitäts- und
          Sicherheitsmaßstäbe bewertet wurden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Überblick über IS 17633:2022 für Tische und Schreibtische
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 ist die indische Norm, die Leistungs- und
          Sicherheitsanforderungen für Tische und Schreibtische festlegt, die
          für erwachsene Benutzer in sitzenden und stehenden Anwendungen
          bestimmt sind.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm deckt beides ab:
        </p>

        <ul className={LIST_CLASS}>
          <li>Vollständig hergestellte (gebrauchsfertige) Tische und Schreibtische</li>
          <li>Montagefertige (RTA) Einheiten — getestet nach vollständiger Montage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ziel der Norm besteht darin, Mindestanforderungen an Leistung und
          Sicherheit festzulegen, die dazu beitragen, dass Möbel während ihrer
          gesamten vorgesehenen Lebensdauer stabil, haltbar und sicher bleiben.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Wichtige Bereiche unter IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Norm konzentriert sich auf mehrere wichtige Leistungsmerkmale,
          darunter:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Festigkeitsanforderungen —</strong> Tische und Schreibtische
            müssen den erwarteten Lasten bei normaler Nutzung ohne Versagen oder
            übermäßige Verformung standhalten.
          </li>
          <li>
            <strong>Stabilitätsanforderungen —</strong> Möbel müssen bei der
            Nutzung stabil bleiben und unter vorhersehbaren Belastungsbedingungen
            dem Kippen widerstehen.
          </li>
          <li>
            <strong>Haltbarkeitsanforderungen —</strong> Produkte müssen ihre
            Leistung und strukturelle Integrität nach wiederholter Nutzung über
            einen längeren Zeitraum beibehalten.
          </li>
          <li>
            <strong>Sicherheitsanforderungen —</strong> Konstruktion und Bauweise
            müssen Risiken durch Instabilität, scharfe Kanten, unsichere Bauweise
            oder strukturelles Versagen minimieren.
          </li>
          <li>
            <strong>Verarbeitung &amp; Konstruktionsqualität —</strong>
            Verarbeitung, Montage, Verbindungen, Befestigungselemente und der
            gesamte Aufbau werden auf zuverlässige Langzeitleistung bewertet.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Ist die BIS-Zertifizierung für Tische und Schreibtische in Indien obligatorisch?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ja. Tische und Schreibtische, die unter die geltende Möbel-Quality
          Control Order (QCO) fallen, müssen die relevante indische Norm
          einhalten und eine BIS-Zertifizierung erhalten, bevor sie auf dem
          indischen Markt hergestellt, importiert, verkauft, vertrieben oder
          angeboten werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Das Ziel der obligatorischen Zertifizierung ist es:
        </p>

        <ul className={LIST_CLASS}>
          <li>Eine höhere Produktqualität in der gesamten Möbelindustrie zu gewährleisten</li>
          <li>Die Verbrauchersicherheit durch verifizierte Normen zu schützen</li>
          <li>Zu verhindern, dass minderwertige Möbel auf den Markt gelangen</li>
          <li>Standardisierung und einheitliche Qualitätsmaßstäbe zu fördern</li>
          <li>Das Käufervertrauen in ISI-markierte Produkte aufzubauen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die unter die geltenden Vorschriften fallen, müssen eine
          BIS-Lizenz erhalten und die ISI-Marke gemäß den BIS-Anforderungen
          verwenden.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Sehen Sie auch die Möbelprodukte, die unter die obligatorische
            BIS-Zertifizierung fallen —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS-Zertifizierung für Möbel</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Produktumfang unter IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Umfang von IS 17633:2022 erstreckt sich auf verschiedene
          Kategorien von Tischen und Schreibtischen, die für erwachsene Benutzer
          in Wohn-, Gewerbe-, institutionellen und Arbeitsplatzumgebungen
          konzipiert sind.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Beispiele für häufig abgedeckte Produkte sind:
        </p>

        <ul className={LIST_CLASS}>
          <li>Büro-, Schreib- und Computerschreibtische</li>
          <li>Arbeitsplätze und Mehrzweckschreibtische</li>
          <li>Konferenz- und Besprechungstische</li>
          <li>Institutions- und Labortische</li>
          <li>Co-Working- und Gewerbemöbel</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller sollten die Produktspezifikationen und den
          Verwendungszweck sorgfältig prüfen, um festzustellen, ob ihre Produkte
          in den Anwendungsbereich von IS 17633:2022 fallen.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wichtige technische Anforderungen unter IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Um die BIS-Zertifizierung zu erhalten, müssen Tische und Schreibtische
          verschiedene von der Norm festgelegte Leistungs- und
          Sicherheitsanforderungen erfüllen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Strukturelle Integrität —</strong> Produkte müssen unter
            vorgeschriebenen Lasten funktionieren; Verbindungen und
            Tragstrukturen bleiben während der Prüfung sicher.
          </li>
          <li>
            <strong>Tragfähigkeit —</strong> Tische und Schreibtische müssen
            festgelegte Lasten ohne inakzeptable Verformung, Beschädigung oder
            Versagen tragen.
          </li>
          <li>
            <strong>Stabilitätsleistung —</strong> Möbel müssen bei der Nutzung
            stabil bleiben und Kipprisiken reduzieren, die Verletzungen oder
            Sachschäden verursachen könnten.
          </li>
          <li>
            <strong>Haltbarkeitsleistung —</strong> Produkte müssen wiederholten
            Nutzungszyklen standhalten und dabei eine akzeptable Leistung
            beibehalten.
          </li>
          <li>
            <strong>Material &amp; Verarbeitung —</strong> Materialien,
            Endbearbeitung und Montagemethoden müssen Qualitätskontrollen für
            eine konsistente Produktion erfüllen.
          </li>
          <li>
            <strong>Sicherheitsaspekte —</strong> Die Konstruktion muss Gefahren
            durch die Möbelnutzung für Verbraucher und institutionelle Käufer
            minimieren.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Möbelhersteller wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der indische Möbelmarkt ist zunehmend qualitätsbewusst geworden.
          Regierungsabteilungen, Bildungseinrichtungen, Unternehmenskäufer und
          große Beschaffungsstellen bevorzugen oft Produkte, die anerkannte
          Normen erfüllen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Erhalt der BIS-Zertifizierung hilft Herstellern:
        </p>

        <ul className={LIST_CLASS}>
          <li>Die Einhaltung der geltenden indischen Normen nachzuweisen</li>
          <li>Die Produktglaubwürdigkeit und den Markenruf zu steigern</li>
          <li>Das Vertrauen von Kunden und institutionellen Käufern zu gewinnen</li>
          <li>Die Akzeptanz bei staatlicher und Unternehmensbeschaffung zu verbessern</li>
          <li>Interne Qualitätsmanagementpraktiken zu stärken</li>
          <li>Sich entwickelnden regulatorischen Anforderungen voraus zu sein</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für Hersteller, die langfristiges Wachstum anstreben, wird die
          BIS-Zertifizierung oft sowohl als Compliance-Anforderung als auch als
          strategischer Geschäftsvorteil betrachtet.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für Tische und Schreibtische unter IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bevor ein Hersteller die BIS-Zertifizierung erhalten kann, müssen
          Produktmuster durch Tests in einem BIS-anerkannten Labor anhand der
          geltenden Anforderungen von IS 17633:2022 bewertet werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ziel der Tests besteht darin, zu überprüfen, ob die Möbel die
          vorgeschriebenen Normen für Sicherheit, Stabilität, Festigkeit,
          Haltbarkeit und Gesamtleistung erfüllen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obwohl die genauen Testparameter je nach Produktdesign und
          Zertifizierungsanforderungen variieren können, werden Hersteller im
          Allgemeinen auf die folgenden Merkmale geprüft:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Design &amp; Verarbeitung —</strong> Konstruktionsqualität,
            Montage, Endbearbeitung und allgemeine Produktintegrität werden für
            eine sichere Langzeitnutzung untersucht.
          </li>
          <li>
            <strong>Maßprüfung —</strong> Kritische Maße werden anhand der Norm
            und der genehmigten Produktspezifikationen überprüft.
          </li>
          <li>
            <strong>Stabilitätsprüfung —</strong> Bestätigt, dass das Produkt bei
            normaler Nutzung stabil bleibt, und kennzeichnet Kipp- oder
            strukturelle Schwächen.
          </li>
          <li>
            <strong>Statische Lastprüfung —</strong> Überprüft die Tragfähigkeit
            ohne Versagen, übermäßige Verformung oder Beschädigung.
          </li>
          <li>
            <strong>Festigkeitsprüfung —</strong> Bewertet Rahmen, Verbindungen
            und Stützen unter Betriebsbelastungen bei regelmäßiger Nutzung.
          </li>
          <li>
            <strong>Haltbarkeitsbewertung —</strong> Überprüft die Beibehaltung
            der Leistung nach wiederholten Nutzungszyklen.
          </li>
          <li>
            <strong>Sicherheitsbewertung —</strong> Schließt vermeidbare Risiken
            durch Instabilität, Mängel oder unsichere Designmerkmale aus.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Tische und Schreibtische
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die eine BIS-Zertifizierung nach IS 17633:2022 anstreben,
          müssen einen strukturierten Zertifizierungsprozess befolgen, der vom
          Bureau of Indian Standards festgelegt wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obwohl die spezifischen Anforderungen je nach Antragstellertyp und
          Fertigungsstandort variieren können, bleibt der allgemeine Prozess
          ähnlich.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 1: Bewertung des Produktumfangs
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der erste Schritt besteht darin, festzustellen, ob das Produkt in den
          Anwendungsbereich von IS 17633:2022 und der geltenden Quality Control
          Order fällt. Eine technische Überprüfung der Produktspezifikationen,
          des Verwendungszwecks, der Materialien und der Konstruktion wird in der
          Regel vor Einleitung des Zertifizierungsprozesses durchgeführt.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 2: Vorbereitung der Dokumentation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Hersteller bereitet die erforderliche Dokumentation vor,
          einschließlich Unternehmensinformationen, Fertigungsdetails,
          Produktspezifikationen, Qualitätskontrollverfahren und unterstützenden
          technischen Aufzeichnungen. Eine ordnungsgemäße Dokumentation ist
          entscheidend, da Mängel in dieser Phase die Zertifizierung verzögern
          können.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 3: Produktprüfung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Produktmuster werden in einem BIS-anerkannten Labor getestet, um die
          Einhaltung der Anforderungen von IS 17633:2022 zu überprüfen. Der
          Testbericht dient als eines der primären technischen Dokumente zur
          Unterstützung des Zertifizierungsantrags.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 4: Einreichung des Antrags
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Antrag wird zusammen mit unterstützenden Dokumenten,
          Testberichten, Fertigungsinformationen und
          Qualitätsmanagementaufzeichnungen eingereicht. Der Antrag wird vom BIS
          auf Vollständigkeit und technische Konformität geprüft.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 5: Fabrikbewertung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Das BIS kann eine Fabrikinspektion durchführen, um zu bewerten:
        </p>
        <ul className={LIST_CLASS}>
          <li>Fertigungsinfrastruktur und Produktionskapazitäten</li>
          <li>Qualitätskontrollsysteme und interne Testeinrichtungen</li>
          <li>Rohstoffkontrollen und Produktrückverfolgbarkeitsmechanismen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ziel besteht darin, die Fähigkeit des Herstellers zu überprüfen,
          konsistent konforme Produkte herzustellen.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 6: Bewertung und Überprüfung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS überprüft den Antrag, die Inspektionsergebnisse und die
          Laborprüfberichte, bevor es eine Zertifizierungsentscheidung trifft.
          Alle während des Überprüfungsprozesses aufgeworfenen Beobachtungen
          müssen vom Antragsteller behandelt werden.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Schritt 7: Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nach erfolgreichem Abschluss aller Anforderungen erteilt das BIS die
          Lizenz und autorisiert den Hersteller, die ISI-Marke auf
          zertifizierten Tischen und Schreibtischen zu verwenden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierung für indische Hersteller
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indische Hersteller beantragen die Zertifizierung in der Regel im
          Rahmen des vom BIS vorgeschriebenen inländischen
          Zertifizierungsverfahrens. Der Prozess umfasst typischerweise:
        </p>

        <ul className={LIST_CLASS}>
          <li>Produktprüfung in einem BIS-anerkannten Labor</li>
          <li>Antragseinreichung mit unterstützenden Dokumenten</li>
          <li>Fabrikinspektion und technische Überprüfung durch das BIS</li>
          <li>Erteilung der BIS-Lizenz und ISI-Marken-Autorisierung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nach der Zertifizierung müssen Hersteller weiterhin die
          BIS-Anforderungen einhalten und während der gesamten Lizenzlaufzeit
          eine konsistente Produktqualität aufrechterhalten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierung für ausländische Hersteller
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ausländische Hersteller, die Tische und Schreibtische nach Indien
          exportieren möchten, müssen ebenfalls eine BIS-Zertifizierung
          erhalten, bevor sie Produkte liefern, die unter die geltende Quality
          Control Order fallen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Zertifizierungsprozess umfasst im Allgemeinen:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bestellung eines autorisierten indischen Vertreters (AIR)</li>
          <li>Produktprüfung und Fabrikbewertung im Ausland</li>
          <li>Dokumentenprüfung und BIS-Zertifizierungsgenehmigung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ausländische Hersteller müssen die kontinuierliche Einhaltung der
          BIS-Anforderungen sicherstellen, um die Gültigkeit der Zertifizierung
          aufrechtzuerhalten.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Erforderliche Dokumente für die BIS-Zertifizierung von Tischen und Schreibtischen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Dokumentationsanforderungen können je nach Hersteller und
          Zertifizierungsweg variieren. Die folgenden Dokumente sind jedoch
          während des Zertifizierungsprozesses üblicherweise erforderlich.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Geschäfts- und Rechtsdokumente</h3>
        <ul className={LIST_CLASS}>
          <li>Unternehmensregistrierung, Fertigungslizenz und GST (falls zutreffend)</li>
          <li>Angaben zum autorisierten Unterzeichner und Identitätsnachweis</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Fertigungsinformationen</h3>
        <ul className={LIST_CLASS}>
          <li>Prozessablaufdiagramm, Fabriklayout und Maschinendetails</li>
          <li>Produktionsinfrastruktur und Kapazitätsaufzeichnungen</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Produktinformationen</h3>
        <ul className={LIST_CLASS}>
          <li>Produktspezifikationen, technische Zeichnungen und Katalog</li>
          <li>Stückliste und Material-/Komponentendetails</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Qualitätskontrolldokumente</h3>
        <ul className={LIST_CLASS}>
          <li>Interne Test-, Inspektions- und QC-Verfahren</li>
          <li>Qualitätskontrollaufzeichnungen und Geräte-Kalibrierungsberichte</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Zertifizierungsdokumente</h3>
        <ul className={LIST_CLASS}>
          <li>Laborprüfberichte und ausgefüllte BIS-Antragsformulare</li>
          <li>Erklärungen, Verpflichtungen und andere vom BIS vorgeschriebene Dokumente</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller sollten sicherstellen, dass alle Dokumente vor der
          Einreichung korrekt, vollständig und konsistent sind.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen während der BIS-Zertifizierung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obwohl der Zertifizierungsprozess bei ordnungsgemäßer Verwaltung
          unkompliziert ist, stoßen Hersteller oft auf mehrere
          Herausforderungen.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technische Auslegung —</strong> Die Zuordnung der
            Anforderungen von IS 17633:2022 zu spezifischen Produktdesigns kann
            ohne fachkundige Beratung schwierig sein.
          </li>
          <li>
            <strong>Testfehler —</strong> Schwache Verbindungen, schlechte
            Stabilität oder Materialprobleme führen oft zur Ablehnung bei
            Labortests.
          </li>
          <li>
            <strong>Dokumentationslücken —</strong> Unvollständige oder nicht
            übereinstimmende Aufzeichnungen sind eine häufige Ursache für
            Antragsverzögerungen.
          </li>
          <li>
            <strong>Fabrikkonformität —</strong> QC-Systeme,
            Rückverfolgbarkeit oder Produktionskontrollen müssen möglicherweise
            vor der Lizenzerteilung verbessert werden.
          </li>
          <li>
            <strong>Regulatorische Koordination —</strong> Die Abstimmung von
            Labortests, Inspektionen und BIS-Nachverfolgungen erfordert ohne
            strukturierte Unterstützung Zeit.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile professioneller Unterstützung bei der BIS-Zertifizierung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Zusammenarbeit mit einem erfahrenen BIS-Berater kann Herstellern
          helfen, kostspielige Verzögerungen zu vermeiden und den
          Zertifizierungsweg zu optimieren.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Professionelle Unterstützung umfasst typischerweise:
        </p>

        <ul className={LIST_CLASS}>
          <li>Überprüfung des Produktumfangs und Normenauslegung</li>
          <li>Dokumentationsvorbereitung und Antragseinreichung</li>
          <li>Koordination von Labortests und Fabrikinspektionen</li>
          <li>Laufende Compliance- und Unterstützung nach der Zertifizierung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dies ermöglicht es Herstellern, sich auf die Produktion zu
          konzentrieren, während regulatorische Anforderungen effizient
          behandelt werden.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum Sun Certifications India wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India ist eine Beratungsfirma für regulatorische
          Compliance, die Hersteller, Importeure, Exporteure und Unternehmen bei
          Zertifizierungs- und Genehmigungsanforderungen in ganz Indien
          unterstützt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unsere Experten bieten umfassende Unterstützung für die
          BIS-Zertifizierung für Tische und Schreibtische nach IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Unsere Dienstleistungen umfassen</h3>

        <ul className={LIST_CLASS}>
          <li>Bewertung der Produktanwendbarkeit und BIS-Compliance-Beratung</li>
          <li>Dokumentationsunterstützung und Antragsverwaltung</li>
          <li>Testkoordination und Unterstützung bei der Fabrikinspektion</li>
          <li>Regulatorische Kommunikation und Compliance-Unterstützung nach der Zertifizierung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unser Ziel ist es, Unternehmen dabei zu helfen, den
          Zertifizierungsprozess effizient zu navigieren und dabei Verzögerungen
          und Compliance-Herausforderungen zu minimieren.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Tische und Schreibtische nach IS
          17633:2022 ist eine wichtige Anforderung für Hersteller, die konforme
          Möbelprodukte auf dem indischen Markt liefern möchten. Die
          Zertifizierung trägt dazu bei, dass Tische und Schreibtische die
          festgelegten Normen in Bezug auf Sicherheit, Stabilität, Haltbarkeit,
          Festigkeit und Qualität erfüllen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Durch den Erhalt der BIS-Zertifizierung und die Verwendung der
          ISI-Marke können Hersteller die Einhaltung indischer Normen
          nachweisen, das Kundenvertrauen verbessern, ihre Marktposition stärken
          und langfristiges Geschäftswachstum unterstützen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wenn Sie planen, eine BIS-Zertifizierung für Tische und Schreibtische
          nach IS 17633:2022 zu erhalten, kann Sun Certifications India Sie mit
          umfassender Compliance-Unterstützung begleiten und Ihnen helfen, den
          Zertifizierungsprozess effizient und sicher zu navigieren.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS-Zertifizierung für Tische und Schreibtische (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Was ist IS 17633:2022?</strong>
              <br />
              IS 17633:2022 ist die vom Bureau of Indian Standards (BIS)
              veröffentlichte indische Norm, die Mindestanforderungen an
              Leistung, Stabilität, Haltbarkeit und Sicherheit für Tische und
              Schreibtische festlegt, die für erwachsene Benutzer in sitzenden
              und stehenden Anwendungen bestimmt sind.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Ist die BIS-Zertifizierung für Tische und Schreibtische obligatorisch?</strong>
              <br />
              Ja — für Produkte, die unter die geltende Möbel-Quality Control
              Order (QCO) fallen. Hersteller und Importeure müssen eine gültige
              BIS-Lizenz besitzen und IS 17633:2022 einhalten, bevor sie solche
              Möbel in Indien herstellen, importieren, verkaufen oder
              vertreiben.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Welche Zertifizierungsmarke gilt für Tische und Schreibtische?</strong>
              <br />
              Zertifizierte Tische und Schreibtische sind berechtigt, die
              ISI-Marke im Rahmen des BIS-Produktzertifizierungsschemas zu
              tragen, was anzeigt, dass das Produkt der geltenden indischen Norm
              entspricht.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Wer kann die BIS-Zertifizierung beantragen?</strong>
              <br />
              Sowohl indische Hersteller als auch ausländische Hersteller können
              die Zertifizierung beantragen, sofern ihre Tische und Schreibtische
              in den Anwendungsbereich der geltenden QCO fallen und die
              Anforderungen von IS 17633:2022 erfüllen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Was ist der Zweck der BIS-Zertifizierung?</strong>
              <br />
              Die BIS-Zertifizierung bestätigt, dass Möbel national anerkannte
              Maßstäbe für Sicherheit, strukturelle Leistung, Haltbarkeit und
              Verarbeitung erfüllen — und trägt dazu bei, Endbenutzer zu schützen
              und Qualitätsstandards auf dem Markt aufrechtzuerhalten.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Welche Produkte werden unter IS 17633:2022 abgedeckt?</strong>
              <br />
              Die Norm deckt Tische und Schreibtische für Erwachsene ab, die in
              Büros, Bildungseinrichtungen, Gewerbebetrieben und
              Arbeitsplatzumgebungen verwendet werden — einschließlich
              Büroschreibtischen, Arbeitsplätzen, Schreibtischen, Konferenztischen
              und ähnlichen Möbelkategorien.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Ist eine Laborprüfung obligatorisch?</strong>
              <br />
              Ja. Produktmuster müssen in einem BIS-anerkannten Labor getestet
              werden, und der resultierende Testbericht ist ein wichtiges
              Dokument im Zertifizierungsantrag, um die Einhaltung von IS
              17633:2022 nachzuweisen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Können importierte Tische und Schreibtische ohne BIS-Zertifizierung verkauft werden?</strong>
              <br />
              Nein. Importierte Produkte, die unter die obligatorische
              Zertifizierung fallen, können in Indien nicht legal ohne gültige
              BIS-Genehmigung geliefert werden. Importeure müssen die Einhaltung
              der geltenden Norm sicherstellen, bevor sie Produkte auf den Markt
              bringen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Welche Rolle spielt eine Fabrikinspektion?</strong>
              <br />
              Das BIS führt eine Fabrikbewertung durch, um zu überprüfen, ob der
              Hersteller eine ausreichende Produktionsinfrastruktur,
              Qualitätskontrollsysteme und Produktrückverfolgbarkeit unterhält,
              um konsistent konforme Tische und Schreibtische herzustellen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Wie kann Sun Certifications India helfen?</strong>
              <br />
              Sun Certifications India bietet umfassende Unterstützung —
              einschließlich Bewertung des Produktumfangs,
              Dokumentationsvorbereitung, Koordination von Labortests,
              BIS-Antragsverwaltung, Vorbereitung auf die Fabrikinspektion und
              Compliance-Unterstützung nach der Zertifizierung für Tische und
              Schreibtische nach IS 17633:2022.
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Verwandte Ressourcen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI-Marken-Lizenz</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS-FMCS-Zertifikat</a>
          </li>
        </ul>

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
