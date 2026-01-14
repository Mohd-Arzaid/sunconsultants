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

const BISCertificateForFurnitureGerman = () => {
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

export default BISCertificateForFurnitureGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Möbel in Indien | BIS-Zertifizierung, Lizenz & Prozessleitfaden";
  const ogTitle =
    "BIS-Zertifikat für Möbel in Indien - Vollständiger BIS-Zertifizierungsleitfaden";
  const twitterTitle =
    "BIS-Zertifikat für Möbel | Vollständiger BIS-Zertifizierungsleitfaden des indischen BIS";
  const metaDescription =
    "BIS-Zertifikat für Möbel in Indien - vollständiger Leitfaden zu BIS-Zertifizierung, BIS-Lizenz, Kosten, Dokumenten, Standards, Prozess, Online-Antrag & BIS-Marke für Möbelhersteller.";
  const ogDescription =
    "Suchen Sie nach BIS-Zertifizierung für Möbel in Indien? Erfahren Sie mehr über BIS-Lizenz, BIS-Marke, anwendbare Standards, Zertifizierungsprozess, Kosten, Dokumente & Compliance-Anforderungen im Detail.";
  const twitterDescription =
    "Vollständiger Leitfaden zum BIS-Zertifikat für Möbel in Indien - BIS-Zertifizierungsprozess, Kosten, Dokumente, BIS-Marke, Standards & Online-Antrag erklärt.";
  const metaKeywords =
    "BIS-Zertifikat für Möbel, BIS-Zertifizierung für Möbel, BIS-Lizenz für Möbel, Was ist BIS, Indisches BIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/mobel";
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
                    BIS-Zertifikat für Möbel in Indien – Vollständiger
                    Detaillierter Leitfaden
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
          BIS-Zertifikat für Möbel in Indien – Vollständiger Detaillierter
          Leitfaden
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS-Lizenz für Möbel"
            alt="BIS-Zertifikat für Möbel in Indien - Vollständiger BIS-Zertifizierungsleitfaden"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Einführung: BIS-Zertifizierung und die indische Möbelindustrie
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          In Indien werden Produktqualität, Sicherheit und Standardisierung von
          einer zentralen gesetzlichen Behörde namens Bureau of Indian Standards
          (BIS) geregelt. BIS ist die nationale Normungsorganisation Indiens,
          die unter dem BIS-Gesetz gegründet wurde, um sicherzustellen, dass
          Produkte, die auf dem indischen Markt verkauft werden, den definierten
          Sicherheits-, Qualitäts- und Leistungsstandards entsprechen.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS steht für Bureau of Indian Standards. Es arbeitet unter dem
          Ministerium für Verbraucherangelegenheiten, Lebensmittel & öffentliche
          Verteilung der Regierung Indiens. BIS spielt eine entscheidende Rolle
          beim Schutz der Verbraucherinteressen und unterstützt Hersteller durch
          ein transparentes Ökosystem für Standardisierung und Zertifizierung.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die indische Möbelindustrie hat aufgrund folgender Faktoren ein
          rasantes Wachstum erlebt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanisierung</li>
          <li>Ausbau der Wohn- und Gewerbeinfrastruktur</li>
          <li>
            Wachstum in den Bereichen Gastgewerbe, Bildung, Gesundheitswesen und
            Co-Living
          </li>
          <li>
            Steigendes Verbraucherbewusstsein für Produktsicherheit und
            Haltbarkeit
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Möbel werden nicht mehr als rein ästhetisches Produkt betrachtet. Sie
          sind direkt mit Benutzersicherheit, Ergonomie, struktureller
          Stabilität, Feuerbeständigkeit und langfristiger Haltbarkeit
          verbunden. Vorfälle mit einstürzenden Betten, unsicheren Etagenbetten,
          instabilen Stühlen oder minderwertigen Lagereinheiten haben Bedenken
          bei Regulierungsbehörden und Verbrauchern gleichermaßen aufkommen
          lassen.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Um diesen Risiken zu begegnen, ist die BIS-Zertifizierung für Möbel zu
          einer kritischen Compliance-Anforderung geworden. BIS stellt sicher,
          dass Möbelprodukte den indischen Standards (IS) in Bezug auf
          entsprechen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Festigkeit</li>
          <li>Tragfähigkeit</li>
          <li>Materialqualität</li>
          <li>Designsicherheit</li>
          <li>Leistung unter Nutzungsbedingungen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Für Hersteller, Importeure, Exporteure, KMU, Startups und
          Möbelmarkeninhaber ist die Erlangung eines BIS-Zertifikats für Möbel
          nicht mehr nur eine regulatorische Formalität – es ist eine
          Marktnotwendigkeit.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Möbel wichtig ist
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Sie gewährleistet rechtliche Compliance unter indischen Vorschriften
          </li>
          <li>
            Sie stärkt das Verbrauchervertrauen und die Markenglaubwürdigkeit
          </li>
          <li>
            Sie ermöglicht uneingeschränkten Verkauf und Vertrieb in ganz Indien
          </li>
          <li>Sie minimiert Produkthaftungsrisiken</li>
          <li>Sie verbessert die Exportbereitschaft und globale Akzeptanz</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser umfassende Leitfaden ist als die maßgeblichste und
          detaillierteste Ressource zur BIS-Zertifizierung für Möbel in Indien
          konzipiert. Ob Sie ein erstmaliger Hersteller oder eine etablierte
          Möbelmarke sind, dieser Leitfaden beantwortet jede mögliche Frage im
          Zusammenhang mit BIS-Lizenz für Möbel, BIS-Registrierung für Möbel,
          anwendbaren Standards, Prozess, Kosten, Dokumenten, Zeitplänen und
          Compliance nach der Zertifizierung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist ein BIS-Zertifikat für Möbel?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ein BIS-Zertifikat für Möbel ist eine offizielle Genehmigung, die vom
          Bureau of Indian Standards erteilt wird und bestätigt, dass ein
          bestimmtes Möbelprodukt dem relevanten indischen Standard (IS)
          entspricht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Was ist die BIS-Marke?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Marke, allgemein als ISI-Marke bekannt, ist ein
          Standardkonformitätszeichen, das auf zertifizierten Produkten
          erscheint. Es bedeutet, dass das Möbel:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Labortests bestanden hat</li>
          <li>Fabrikinspektion bestanden hat</li>
          <li>Alle Standardanforderungen erfüllt hat</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Logo Erklärung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Logo repräsentiert die Autorität von BIS als Indiens nationale
          Normungsbehörde. Wenn es zusammen mit der ISI-Marke auf Möbelprodukten
          verwendet wird, versichert es Käufern, dass das Produkt den
          BIS-Standards entspricht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Zertifikat Indien – Rechtlicher Status
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In Indien kann die Herstellung, der Import oder der Verkauf von
          Möbelprodukten, die unter benachrichtigten Standards fallen, ohne
          BIS-Zertifizierung zu Folgendem führen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Beschlagnahme von Waren</li>
          <li>Schwere Geldstrafen</li>
          <li>Strafverfolgung nach BIS-Gesetz</li>
          <li>Verkaufs- oder Importverbot</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Daher hat ein BIS-Zertifikat für Möbel in Indien eine starke
          rechtliche Bedeutung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Möbelprodukte wichtig ist
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Möbel ist aus mehreren Gründen kritisch:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Sicherheit & Strukturelle Integrität
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Möbelausfälle können Verletzungen oder Todesfälle verursachen.
          BIS-Standards bewerten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tragfähigkeit</li>
          <li>Stabilität gegen Kippen</li>
          <li>Verbindungsfestigkeit</li>
          <li>Materialleistung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Qualität & Haltbarkeit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Zertifizierte Möbelprodukte gewährleisten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lange Lebensdauer</li>
          <li>Widerstandsfähigkeit gegen Verschleiß</li>
          <li>Einheitliche Leistung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Verbrauchervertrauen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierungsmarke schafft sofortiges Vertrauen bei Käufern,
          Institutionen und Großkäufern.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Marktzugang
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Viele Regierungsausschreibungen, institutionelle Käufer und große
          Unternehmen schreiben BIS-zertifizierte Möbel vor.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Rechtliche Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Verkauf nicht zertifizierter Möbel unter obligatorischen
          BIS-Normen kann Strafen und rechtliche Schritte nach sich ziehen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Unter BIS-Zertifizierung abgedeckte Möbelprodukte
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Möbel ist eine breite allgemeine Kategorie unter BIS, die mehrere
          Produkttypen umfasst, die jeweils von verschiedenen indischen
          Standards (IS-Nummern) geregelt werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wichtige abgedeckte Möbelkategorien:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Arbeitsstühle
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verwendet in Büros, Fabriken und Gewerberäumen. Standards
          konzentrieren sich auf Ergonomie, Stabilität und Lastleistung.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. Allgemeine Stühle und Hocker
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verwendet in Wohnungen, Schulen und öffentlichen Räumen. BIS bewertet
          strukturelle Sicherheit und Materialfestigkeit.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Tische und Schreibtische
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Umfasst Büroschreibtische, Schreibtische, Arbeitsplätze. Standards
          testen Tragfähigkeit und Oberflächenhaltbarkeit.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Lagereinheiten
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Schränke, Regale, Spinde, Regale. Schwerpunkt auf Stabilität, scharfen
          Kanten und sicherem Zugang.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Betten
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Einzelbetten, Doppelbetten, Klappbetten. BIS prüft Rahmenfestigkeit
          und langfristige Leistung.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Etagenbetten
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aufgrund von Sicherheitsrisiken stark reguliert. Fokus auf
          Schutzgeländer, Leitersicherheit und Sturzprävention.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Polstermöbel für nicht-häusliche Möbel
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Verwendet in Büros, Hotels, Auditorien. Standards umfassen
          Feuerbeständigkeits- und Haltbarkeitstests.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Andere Möbelprodukte
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schulmöbel</li>
          <li>Institutionelle Sitzgelegenheiten</li>
          <li>Krankenhausmöbel</li>
          <li>Modulare Möbel</li>
          <li>Metall- und Holzmöbelsysteme</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Produktkategorie hat ihre eigene anwendbare IS-Nummer, die
          separat von BIS benachrichtigt wird.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Auf Möbel anwendbare BIS-Standards
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Was sind BIS-Standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-Standards sind technische Spezifikationen, die von BIS
          veröffentlicht werden, um zu definieren:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Materialanforderungen</li>
          <li>Leistungsparameter</li>
          <li>Prüfmethoden</li>
          <li>Kennzeichnungsrichtlinien</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung von IS-Nummern
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Eine IS-Nummer (Indian Standard Number) identifiziert eindeutig einen
          auf ein Produkt anwendbaren Standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Benachrichtigungsprozess
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS gibt offizielle BIS-Benachrichtigungen heraus, die bestimmte
          Standards obligatorisch machen. Einmal benachrichtigt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wird Compliance obligatorisch</li>
          <li>Sind nicht zertifizierte Produkte illegal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wie man den richtigen BIS-Standard identifiziert
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktkategorie identifizieren</li>
          <li>Anwendbaren IS-Bereich studieren</li>
          <li>Standardanwendbarkeit bestätigen</li>
          <li>Falsche Standardauswahl vermeiden (ein häufiger Fehler)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Arten der BIS-Zertifizierung für Möbel
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Lizenz unter ISI-Schema
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Möbelprodukte fallen im Allgemeinen unter das
          ISI-Zertifizierungsschema, das umfasst:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produkttest</li>
          <li>Fabrikinspektion</li>
          <li>Überwachungsaudits</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Registrierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Registrierung gilt hauptsächlich für Elektronik- und
          IT-Produkte. Möbel erfordern normalerweise eine BIS-Lizenz, keine
          Registrierung.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Möbel in Indien
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1: Vorbereitung vor der Antragstellung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Anwendbaren IS-Standard identifizieren</li>
          <li>Produktdesign-Compliance bewerten</li>
          <li>Technische Dokumentation vorbereiten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2: BIS-Antrag
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-Antrag einreichen mit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktdetails</li>
          <li>Fertigungsdetails</li>
          <li>Standardreferenz</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3: BIS Online beantragen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Antrag wird über das BIS-Online-Portal eingereicht.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4: Produkttest
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proben werden in BIS-anerkannten Labors getestet.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5: Fabrikinspektion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS-Beamte überprüfen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungsprozess</li>
          <li>Qualitätskontrolle</li>
          <li>Prüfeinrichtungen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6: Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bei Einhaltung erteilt BIS die Lizenz.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7: Verwendung der BIS-Zertifizierungsmarke
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller können die BIS-Marke / ISI-Marke anbringen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prüfanforderungen für Möbel
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tests sind ein obligatorischer Teil des BIS-Registrierungsprozesses.
          Möbel unterliegen strengen Tests, um Sicherheit und Haltbarkeit zu
          gewährleisten.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Obligatorische Tests für Möbel:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Struktureller Lasttest</li>
          <li>Stabilitätstest</li>
          <li>Schutzgeländer-Festigkeitstest</li>
          <li>Schlagtest</li>
          <li>Einklemmgefahr-Test</li>
          <li>Leiter-Festigkeits- und Winkel-Test</li>
          <li>Materialsicherheitstest</li>
          <li>Kantenradius- und Schärfe-Test</li>
          <li>Matratzenstütztest</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Tests müssen nur in einem BIS-anerkannten Labor durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Erforderliche Dokumente für BIS-Zertifizierung für Möbel
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Wichtige Dokumente umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabrikregistrierungsnachweis</li>
          <li>Produktzeichnungen & Spezifikationen</li>
          <li>Rohmaterialdetails</li>
          <li>Testberichte</li>
          <li>Qualitätskontrollaufzeichnungen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Häufige Dokumentationsfehler:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falsche Standardreferenz</li>
          <li>Unvollständige Testdaten</li>
          <li>Abweichung im Produktumfang</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Kosten der BIS-Zertifizierung für Möbel
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Zertifikatskostenkomponenten:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Staatliche Antragsgebühren</li>
          <li>Testgebühren</li>
          <li>Inspektionsgebühren</li>
          <li>Lizenzgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Zertifizierungskostenfaktoren:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktkomplexität</li>
          <li>Anzahl der Modelle</li>
          <li>Testanforderungen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hinweis: Professionelle Beratungsgebühren sind von staatlichen
          Gebühren getrennt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Zeitrahmen für BIS-Zertifikatsregistrierung
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durchschnittlicher Zeitrahmen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tests: 3–6 Wochen</li>
          <li>Inspektion: 1–2 Wochen</li>
          <li>Lizenzvergabe: 2–4 Wochen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gesamt: 8–12 Wochen (ca.)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wie man BIS-Zertifizierung in Indien für Möbelhersteller erhält
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Praktische Tipps:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Richtigen IS-Standard wählen</li>
          <li>Fabrikbereitschaft sicherstellen</li>
          <li>Testaufzeichnungen führen</li>
          <li>Dokumentationsfehler vermeiden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifikat Online-Antrag – Praktische Übersicht
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Online-Portal-Herausforderungen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Technische Fehler</li>
          <li>Dokument-Upload-Probleme</li>
          <li>Standardauswahl-Verwirrung</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Richtige Anleitung reduziert Verzögerungen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Verwendung der BIS-Marke & BIS-Zertifizierungsmarke nach Genehmigung
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Kennzeichnungsregeln:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Korrekte IS-Referenz</li>
          <li>Lizenznummer</li>
          <li>Angemessene Größe & Sichtbarkeit</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nichteinhaltung kann zur Suspendierung führen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Herausforderungen bei der BIS-Zertifizierung für Möbel
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpretation von Standards</li>
          <li>Produkttestfehler</li>
          <li>Inspektions-Nichtkonformitäten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Rolle von BIS-Beratern bei der Möbelzertifizierung
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Professionelle BIS-Berater helfen durch:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifizierung der richtigen Standards</li>
          <li>Verwaltung von Tests & Inspektion</li>
          <li>Reduzierung der Genehmigungszeit</li>
          <li>Vermeidung kostspieliger Ablehnungen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung für Möbel ist ein Eckpfeiler für Qualität,
          Sicherheit und rechtliche Compliance im wachsenden Möbelmarkt Indiens.
          Ob Sie Hersteller, Importeur oder Markeninhaber sind, die Erlangung
          eines BIS-Zertifikats für Möbel in Indien gewährleistet:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Regulatorische Compliance</li>
          <li>Verbrauchervertrauen</li>
          <li>Langfristiger Markterfolg</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durch das Verständnis des BIS-Zertifizierungsprozesses, der Standards,
          Kosten und Compliance-Anforderungen können Unternehmen sicher durch
          die regulatorische Landschaft navigieren und sicherere, stärkere und
          zuverlässigere Möbelprodukte für den indischen Markt entwickeln.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufig gestellte Fragen zur BIS-Lizenz
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Ist die BIS-Zertifizierung für alle Möbelprodukte in Indien
              obligatorisch?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nein, die BIS-Zertifizierung ist nur für die Möbelprodukte
              obligatorisch, die unter benachrichtigten BIS-Standards fallen.
              Sobald jedoch eine Möbelproduktkategorie vom Bureau of Indian
              Standards benachrichtigt wird, wird die Herstellung, der Import,
              der Verkauf oder die Verteilung dieses Produkts ohne gültige
              BIS-Lizenz in Indien illegal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Welche Möbelprodukte erfordern eine BIS-Lizenz statt einer
              BIS-Registrierung?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Möbelprodukte fallen im Allgemeinen unter das
              ISI-Zertifizierungsschema, das eine BIS-Lizenz erfordert, nicht
              eine BIS-Registrierung. Die BIS-Registrierung (CRS) gilt
              hauptsächlich für Elektronik- und IT-Produkte, während
              Möbelprodukte Tests + Fabrikinspektion + BIS-Lizenz erfordern.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Können importierte Möbel in Indien ohne BIS-Zertifizierung
              verkauft werden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nein. Importierte Möbelprodukte, die unter obligatorischen
              BIS-Standards fallen, müssen vor der Zollabfertigung eine
              BIS-Zertifizierung haben. Der Import nicht zertifizierter Möbel
              kann zu Folgendem führen:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Zollfestnahme</li>
              <li>Wiederausfuhr oder Vernichtung</li>
              <li>Schwere Strafen</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ausländische Hersteller müssen eine BIS-Lizenz erhalten, bevor sie
              Möbel nach Indien exportieren.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Können ausländische Möbelhersteller eine BIS-Zertifizierung
              beantragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja. Ausländische Hersteller können unter dem Foreign Manufacturers
              Certification Scheme (FMCS) beantragen. Sie müssen:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Einen autorisierten indischen Vertreter (AIR) ernennen</li>
              <li>Den indischen Standards entsprechen</li>
              <li>BIS-Fabrikinspektion im Ausland zulassen.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Ist die BIS-Zertifizierung für handgefertigte oder kleinere
              Möbelhersteller erforderlich?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, wenn das Möbelprodukt unter einem obligatorischen BIS-Standard
              fällt, müssen auch KMU, Startups und kleinere Einheiten eine
              BIS-Zertifizierung erhalten. Es gibt keine Ausnahme basierend auf
              dem Produktionsvolumen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Ist die BIS-Zertifizierung für Holzmöbel erforderlich?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, Holzmöbelprodukte wie Betten, Stühle, Tische, Schreibtische
              und Lagereinheiten können eine BIS-Zertifizierung erfordern, wenn
              sie unter benachrichtigten Standards fallen. BIS-Standards gelten
              sowohl für Holz- als auch für Metallmöbel, abhängig vom Produkttyp
              und der Verwendung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kann eine BIS-Lizenz mehrere Möbelmodelle abdecken?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, mehrere Modelle oder Varianten können unter einer einzigen
              BIS-Lizenz abgedeckt werden, vorausgesetzt:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Sie fallen unter denselben IS-Standard</li>
              <li>Konstruktion, Material und Designparameter sind ähnlich</li>
              <li>BIS genehmigt die Gruppierung während der Antragstellung.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Kann die BIS-Zertifizierung auf einen anderen Hersteller
              übertragen werden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Nein. Die BIS-Lizenz ist nicht übertragbar. Jeder Hersteller muss
              sein eigenes BIS-Zertifikat erhalten, auch wenn das Produktdesign
              identisch ist.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Was ist ein BIS-Zertifikat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Es ist ein offizieller Nachweis der Einhaltung der BIS-Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Ist die BIS-Zertifizierung für Möbel obligatorisch?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, für Möbelprodukte, die unter benachrichtigten Standards
              fallen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Wie erhält man eine BIS-Zertifizierung in Indien?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Durch Tests, Inspektion und BIS-Lizenzgenehmigung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Was ist die BIS-Marke?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ein Konformitätszeichen, das die BIS-Genehmigung zeigt.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS-Zertifizierungskosten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Hängt von Produkttyp, Tests und Umfang ab.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS Vollform?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
            </p>
          </div>
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
