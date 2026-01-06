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

const BISCertificateForBunkBedsGerman = () => {
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

export default BISCertificateForBunkBedsGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Etagenbetten | IS 17636:2022 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Etagenbetten – IS 17636:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Etagenbetten | IS 17636:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Etagenbetten nach IS 17636:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Etagenbetten gemäß IS 17636:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Etagenbetten nach IS 17636:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien kennen.";
  const metaKeywords =
    "BIS-Zertifikat für Etagenbetten, BIS-Lizenz für Etagenbetten, IS 17636:2022, BIS-Zertifizierung für Etagenbetten";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/etagenbetten-is-17636";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter der Betriebsabteilung bei Sun Certification India";

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
                    BIS-Zertifikat für Etagenbetten – IS 17636:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifikat für Etagenbetten – Vollständiger Leitfaden zur IS
          17636:2022 BIS-Zertifizierung
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="BIS-Lizenz für Etagenbetten"
            alt="BIS-Zertifikat für Etagenbetten - IS 17636:2022 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Etagenbetten ist eine obligatorische
          Anforderung in Indien nach IS 17636:2022, das die Sicherheits-,
          Leistungs- und strukturellen Anforderungen für Etagenbetten festlegt,
          die in Wohnungen, Hostels, Schlafsälen, PG-Unterkünften, Schulen,
          Hotels und gewerblichen Einrichtungen verwendet werden. Jeder
          Hersteller—ob indisch oder ausländisch—muss eine BIS Zertifizierung
          für Etagenbetten erhalten, bevor er Etagenbetten im indischen Markt
          verkauft, importiert, exportiert oder vertreibt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit der steigenden Nachfrage nach platzsparenden Möbeln sind
          Etagenbetten zu einer wesentlichen Produktkategorie geworden.
          Sicherheitsrisiken wie Stürze, Zusammenbrüche, Einklemmungen und
          strukturelle Ausfälle machen die BIS-Lizenz für Etagenbetten jedoch
          entscheidend, um den Verbraucherschutz zu gewährleisten. Diese
          umfassende Seite führt Sie durch die BIS-Registrierung für
          Etagenbetten, Testanforderungen, Dokumentation, Gebühren, Zeitpläne,
          Strafen und Vorteile.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ob Sie Hersteller, Importeur, Exporteur, Händler oder Start-up sind,
          dieser Leitfaden hilft Ihnen, die Compliance-Anforderungen unter dem
          Bureau of Indian Standards (BIS) zu verstehen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein Qualitäts- und
          Sicherheits-Compliance-Programm, das vom Bureau of Indian Standards,
          der nationalen Normungsorganisation Indiens, verwaltet wird. Es stellt
          sicher, dass Produkte den festgelegten indischen Standards entsprechen
          und sicher, zuverlässig und gebrauchstauglich sind.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Was ist ein BIS-Zertifikat?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat ist eine offizielle Lizenz, die einem Hersteller
          ausgestellt wird und es ihm ermöglicht, das ISI-Zeichen zu verwenden,
          was die Einhaltung der von BIS vorgeschriebenen Produktstandards
          demonstriert.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Es beweist, dass das Produkt bestanden hat:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laborprüfungen</li>
          <li>Werksinspektion</li>
          <li>Qualitätskontrolle-Bewertung</li>
          <li>Sicherheits-Compliance</li>
          <li>Konformität mit indischen Standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-zertifiziertes Produkt zeigt das BIS-Logo, auch bekannt als
          das ISI Zeichen, an, was bedeutet, dass es indische Qualitätsstandards
          erfüllt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Welcher BIS-Standard gilt für Etagenbetten? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Etagenbetten fallen unter die obligatorische BIS-Zertifizierung gemäß
          dem neu eingeführten Standard:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Etagenbetten –
          Sicherheitsanforderungen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dieser Standard stellt sicher, dass Etagenbetten strenge Sicherheits-,
          Konstruktions- und Haltbarkeitskriterien erfüllen. Er umfasst:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Stabilität</li>
          <li>Schutzgeländer</li>
          <li>Einklemmgefahren</li>
          <li>Tragfähigkeit</li>
          <li>Abmessungsanforderungen</li>
          <li>Materialspezifikationen</li>
          <li>Kanten und Oberflächenbeschichtung</li>
          <li>Leiterkonstruktion</li>
          <li>Haltbarkeits- und Leistungstests</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder Hersteller, der Etagenbetten in Indien verkaufen möchte, muss
          eine BIS Lizenz für Etagenbetten nach IS 17636:2022 erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum ist BIS-Zertifizierung für Etagenbetten erforderlich?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Etagenbetten werden häufig von Kindern und Erwachsenen verwendet, und
          Sicherheitsbedenken machen Compliance unerlässlich. BIS hat die
          Zertifizierung obligatorisch gemacht, um zu verhindern:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zusammenbruch oder strukturelles Versagen</li>
          <li>Einklemmung von Körperteilen</li>
          <li>Sturz vom oberen Bett</li>
          <li>Leiter-bezogene Verletzungen</li>
          <li>Schlechte Materialqualität</li>
          <li>Brandgefahren</li>
          <li>Gefährliche Beschichtungen oder scharfe Kanten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gründe, warum die BIS-Lizenz für Etagenbetten obligatorisch ist
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gewährleistet mechanische Festigkeit und Haltbarkeit</li>
          <li>Schützt Verbraucher—insbesondere Kinder—vor Verletzungen</li>
          <li>Hält einheitliche Qualitätsstandards aufrecht</li>
          <li>Hilft Marken, Vertrauen und Glaubwürdigkeit aufzubauen</li>
          <li>Stellt die Einhaltung staatlicher Vorschriften sicher</li>
          <li>Verhindert rechtliche Probleme und Strafen</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS-Registrierung können Hersteller und Importeure das Produkt
          nicht legal im indischen Markt verkaufen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Schritt-für-Schritt BIS-Zertifizierungsprozess für Etagenbetten (IS
          17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Zertifizierungsprozess in Indien umfasst Tests, Dokumentation
          und Werksinspektionen. Hier ist das Schritt-für-Schritt Verfahren:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 — Anwendbarkeit und Standard bestimmen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Obligatorisch
          </li>
          <li>
            Bestätigen Sie die Produktkategorie und Details der
            Fertigungseinheit.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 — BIS-Antrag (Formularübermittlung)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Bewerben Sie sich online über das BIS Manak Online Portal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Anforderungen umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerdetails</li>
          <li>Werkadresse und Nachweis</li>
          <li>Produktkategorie & Marke</li>
          <li>Fertigungskapazitäten</li>
          <li>Qualitätskontrollprozesse</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser Schritt startet den offiziellen Genehmigungszyklus.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 — BIS-Zertifikatskosten bezahlen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Nach der Einreichung zahlen Sie:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühren</li>
          <li>Testgebühren</li>
          <li>Prüfgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Gebühren hängen ab von:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Anzahl der Produktvarianten</li>
          <li>Markennamen</li>
          <li>Werkstandort</li>
          <li>Testparameter</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 — Probenprüfung (Gemäß IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Die Prüfung wird in einem BIS-anerkannten Labor durchgeführt.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tests umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Struktureller Stabilitätstest</li>
          <li>Schlagtest</li>
          <li>Einklemmtest</li>
          <li>Schutzgeländer-Festigkeitstest</li>
          <li>Oberflächenqualitätstest</li>
          <li>Leitersicherheitstest</li>
          <li>Belastungstest</li>
          <li>Haltbarkeitstest</li>
          <li>Kantensicherheitsbewertung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Prüfbericht wird direkt auf das BIS-Portal hochgeladen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 — BIS-Werksinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter besucht das Werk, um zu überprüfen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Qualitätsmanagementsystem</li>
          <li>Rohstoffkontrolle</li>
          <li>Zwischenprüfungen</li>
          <li>Endproduktprüfung</li>
          <li>Produktionskapazität</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sie überprüfen die Einhaltung des BIS-Schemas für Prüfung und
          Inspektion (STI).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 — Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Sobald alle Schritte abgeschlossen sind, stellt BIS aus:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat</li>
          <li>ISI-Zeichen-Genehmigung</li>
          <li>CML-Lizenznummer</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sie können jetzt das BIS-Zeichen legal auf Etagenbetten und
          Verpackungen verwenden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 — Nach-Lizenz-Verpflichtungen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interne Tests durchführen</li>
          <li>Periodische BIS-Inspektionen zulassen</li>
          <li>Die Lizenz alle 1 oder 2 Jahre erneuern</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Geltungsbereich der BIS-Lizenz für Etagenbetten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> Dieser Standard umfasst die Anforderungen
          bezüglich der Leistung und Sicherheit, das heißt Festigkeit,
          Stabilität und Haltbarkeit von Etagenbetten für den häuslichen und
          nicht-häuslichen Gebrauch. Dieser Standard gilt auch für Einzelbetten,
          die in einer Höhe der Bettbasis von 800 mm oder mehr über dem fertigen
          Fußbodenniveau verwendet werden, unabhängig von der Verwendung, für
          die der Raum darunter genutzt wird.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> Dieser Standard gilt für vollständig
          hergestellte/ gefertigte Etagenbetten. Er gilt auch für montagefertige
          Einheiten; in diesem Fall gelten die Anforderungen dieses Standards
          für die montierte Einheit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Etagenbetten erforderliche Dokumente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hier ist eine vollständige Liste der BIS-Zertifikatsdokumente:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werkregistrierungszertifikat</li>
          <li>Fertigungsprozess-Flussdiagramm</li>
          <li>Liste der Maschinen & Ausrüstung</li>
          <li>Liste der Prüfausrüstung</li>
          <li>Kalibrierungszertifikate</li>
          <li>Werklayout/Anlagenlayout</li>
          <li>Autorisierungsschreiben von CEO/Direktor</li>
          <li>ISO 9001 Zertifikat (falls verfügbar)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identitätsnachweis</li>
          <li>Adressnachweis</li>
          <li>Markenautorisierung (bei Drittmarke)</li>
          <li>Markenregistrierungsdokument (optional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktspezifikationen</li>
          <li>Stückliste</li>
          <li>Beschreibung der Sicherheitsmerkmale</li>
          <li>Qualitätskontrollplan</li>
          <li>Interne Prüfberichte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verpflichtungserklärungen & Erklärungen</li>
          <li>Prüfantragsformular</li>
          <li>Proben-Genehmigungsschreiben</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ordnungsgemäße Dokumente reduzieren Verzögerungen und gewährleisten
          eine reibungslose Genehmigung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prüfanforderungen für Etagenbetten (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Prüfungen sind ein obligatorischer Teil des
          BIS-Registrierungsprozesses. Etagenbetten unterziehen sich strengen
          Tests, um Sicherheit und Haltbarkeit zu gewährleisten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Schema für Inspektion und Prüfung von Etagenbetten
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
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sicherheitsbarrieren für oberes Bett
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lücken
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bettbasis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Leiter
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeit von Rahmen und Befestigungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stabilität
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Befestigung des oberen Bettes am unteren Bett
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests müssen nur in einem BIS-anerkannten Labor durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen & wie man sie vermeidet
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Falsche Produktkategorisierung</strong>
            <br />
            Überprüfen Sie immer den korrekten indischen Standard.
          </li>
          <li>
            <strong>Unzureichende Dokumentation</strong>
            <br />
            Fehlende Dokumente verursachen Verzögerungen—bereiten Sie sie im
            Voraus vor.
          </li>
          <li>
            <strong>Fehlgeschlagene Labortests</strong>
            <br />
            Stellen Sie hochwertige Materialien, Schweißarbeiten, Schutzgeländer
            und Oberflächenbehandlung sicher.
          </li>
          <li>
            <strong>Werk nicht bereit für Inspektion</strong>
            <br />
            Stellen Sie sicher, dass QMS und Prüfausrüstung ordnungsgemäß
            gewartet werden.
          </li>
          <li>
            <strong>Markenprobleme</strong>
            <br />
            Der Markenname muss mit dem Lizenzantrag übereinstimmen.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die frühzeitige Lösung dieser Probleme reduziert die Bearbeitungszeit
          erheblich.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Hersteller & Importeure
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtlich Etagenbetten in Indien verkaufen</li>
          <li>Vertrauen bei Kunden aufbauen</li>
          <li>Produktrückgaben reduzieren</li>
          <li>Markenreputation verbessern</li>
          <li>Sicherheits-Compliance gewährleisten</li>
          <li>Wettbewerbsvorteil erlangen</li>
          <li>Erweiterung in Einzelhandelsketten & E-Commerce-Plattformen</li>
          <li>Zugang zu staatlichen Ausschreibungen</li>
          <li>Strafen & rechtliche Schritte vermeiden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichteinhaltung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf von Etagenbetten ohne BIS-Zertifizierung kann zu Folgendem
          führen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktbeschlagnahme</li>
          <li>Geldstrafen</li>
          <li>Werkstilllegungsanordnungen</li>
          <li>Rechtliche Verfolgung</li>
          <li>Verbot vom indischen Markt</li>
          <li>Schwarze Liste der Marke</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance ist nicht optional—sie ist obligatorisch.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt eine BIS-Zertifizierung für Etagenbetten?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die folgenden Unternehmen müssen eine BIS-Lizenz für Etagenbetten
          erhalten:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller, die nach Indien exportieren</li>
          <li>Importeure</li>
          <li>Vertriebspartner</li>
          <li>E-Commerce-Verkäufer</li>
          <li>OEM/ODM-Hersteller</li>
          <li>Möbelmarken & Einzelhändler</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jedes Werk (nicht Unternehmen) benötigt eine separate BIS-Lizenz.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum uns für BIS-Zertifizierungsberatung wählen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Wir bieten umfassende Unterstützung für die BIS-Registrierung von
          Etagenbetten, einschließlich:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standardinterpretation (IS 17636:2022)</li>
          <li>Dokumentationsvorbereitung</li>
          <li>Labortestkoordination</li>
          <li>BIS-Portal-Antrag</li>
          <li>Werksinspektionsunterstützung</li>
          <li>Kommunikation mit BIS-Beamten</li>
          <li>Lizenzgenehmigungsunterstützung</li>
          <li>Nach-Zertifizierungs-Compliance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit jahrelanger Expertise gewährleisten wir eine schnelle, genaue und
          problemlose BIS Zertifizierung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs — BIS-Zertifizierung für Etagenbetten
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für Etagenbetten in Indien
                obligatorisch?
              </strong>
              <br />
              Ja. Nach IS 17636:2022 ist sie für alle Hersteller und Importeure
              obligatorisch.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Wie lange dauert die BIS-Zertifizierung für Etagenbetten?
              </strong>
              <br />
              Typischerweise 30–45 Tage, abhängig von Bereitschaft und
              Dokumentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. Können ausländische Hersteller sich für BIS bewerben?
              </strong>
              <br />
              Ja, über das FMCS (Foreign Manufacturers Certification Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Kann ich mich online für ein BIS-Zertifikat bewerben?
              </strong>
              <br />
              Ja, über das BIS Manak Online Portal.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Welche Tests sind für die Etagenbetten-Zertifizierung
                erforderlich?
              </strong>
              <br />
              Belastungstest, Schutzgeländer-Test, Stabilitätstest, Schlagtest,
              Einklemmtest usw.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Wie lange ist eine BIS-Lizenz gültig?</strong>
              <br />
              Normalerweise 1–2 Jahre und erneuerbar.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Kann eine Lizenz mehrere Modelle abdecken?</strong>
              <br />
              Nur wenn sie unter denselben Standard und dieselbe Kategorie
              fallen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Ist das ISI-Zeichen auf Etagenbetten erforderlich?
              </strong>
              <br />
              Ja, das ISI-Zeichen ist nach der Zertifizierung obligatorisch.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                10. Was passiert, wenn mein Produkt die Labortests nicht
                besteht?
              </strong>
              <br />
              Sie müssen das Produkt ändern und Proben erneut einreichen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. Überprüft BIS die Werksinfrastruktur?</strong>
              <br />
              Ja, während der Inspektion.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Können Händler sich für BIS bewerben?</strong>
              <br />
              Nur wenn sie Markeninhaber sind und einen Vertrag mit Herstellern
              haben.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. Was ist das BIS-Logo?</strong>
              <br />
              Es ist das standardmäßige ISI-Zeichen-Symbol, das die
              Produktkonformität anzeigt.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. Welche Dokumente werden für die BIS-Zertifizierung benötigt?
              </strong>
              <br />
              Werkslizenz, Layout, Maschinenliste, Stückliste, QC-Plan,
              Prüfberichte usw.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. Werden BIS-Tests im Werk durchgeführt?</strong>
              <br />
              Nein, nur in BIS-anerkannten Labors.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Erlangung eines BIS-Zertifikats für Etagenbetten nach IS
          17636:2022 ist nicht nur obligatorisch, sondern auch wesentlich, um
          Verbrauchersicherheit, Produktzuverlässigkeit und rechtliche
          Compliance in Indien zu gewährleisten. Der Zertifizierungsprozess
          umfasst Produkttests, Dokumentation, Werksinspektion und
          Lizenzausstellung. Mit ordnungsgemäßer Planung und fachkundiger
          Anleitung wird der Prozess reibungslos, schnell und kosteneffektiv.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ob Sie Hersteller, Importeur oder Markeninhaber sind, die BIS
          Zertifizierung stärkt Ihre Marktposition, erhöht das Kundenvertrauen
          und erschließt neue Geschäftsmöglichkeiten. Unser Expertenteam für
          Beratung ist bereit, Sie bei der umfassenden BIS-Zertifizierung für
          Etagenbetten zu unterstützen.
        </p>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17636-2021-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Etagenbetten - IS 17636:2021 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
