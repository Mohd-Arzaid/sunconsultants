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

const BISCertificateForChairAndStoolsGerman = () => {
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

export default BISCertificateForChairAndStoolsGerman;

const MetaTags = () => {
  const title = "BIS-Zertifikat für Stühle & Hocker | IS 17632:2022 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Stühle & Hocker – IS 17632:2022 Leitfaden";
  const twitterTitle = "BIS-Lizenz für Stühle & Hocker | IS 17632:2022";
  const metaDescription =
    "Erhalten Sie ein BIS-Zertifikat für Stühle & Hocker nach IS 17632:2022. Prozess, Dokumente, Tests, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Stühle & Hocker gemäß IS 17632:2022. Erfahren Sie Prozess, Kosten, Dokumente, Tests und BIS-Lizenzvorteile.";
  const twitterDescription =
    "Beantragen Sie ein BIS-Zertifikat für Stühle & Hocker nach IS 17632:2022. Lernen Sie den BIS-Prozess, Dokumente, Tests, Gebühren und Zeitplan in Indien kennen.";
  const metaKeywords =
    "BIS-Zertifikat für Stühle & Hocker, BIS-Lizenz für Stühle & Hocker, IS 17632:2022, BIS-Zertifizierung für Stühle & Hocker";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632";
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
                    BIS-Zertifikat für Stühle & Hocker – IS 17632:2022
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
          BIS-Zertifikat für Stühle und Hocker für allgemeine Zwecke –
          Vollständiger Leitfaden zu IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="BIS-Lizenz für Stühle & Hocker"
            alt="BIS-Zertifikat für Stühle & Hocker - IS 17632:2022 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Stühle und Hocker für allgemeine Zwecke ist
          eine obligatorische Anforderung nach dem indischen Standard IS
          17632:2022. Dieser Standard legt die Sicherheits-, Haltbarkeits- und
          Leistungsanforderungen für Stühle und Hocker fest, die in Wohnungen,
          Büros, gewerblichen Bereichen, Bildungseinrichtungen, Cafeterias,
          Restaurants, Hotels und öffentlichen Räumen verwendet werden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stühle und Hocker gehören zu den am häufigsten verwendeten
          Möbelstücken und sind ständig Belastungen, Bewegungen und wiederholtem
          Stress ausgesetzt. Ein strukturell schwacher Stuhl oder Hocker kann
          plötzlich zusammenbrechen und zu Verletzungen führen. Um solche
          Gefahren zu verhindern und die Verbrauchersicherheit zu gewährleisten,
          verlangt das Bureau of Indian Standards (BIS) von jedem Hersteller und
          Importeur, eine BIS-Zertifizierung für Stühle und Hocker zu erhalten,
          bevor sie diese in Indien verkaufen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Seite bietet einen vollständigen Leitfaden zur
          BIS-Zertifizierung für Stühle und Hocker nach IS 17632:2022,
          einschließlich des Zertifizierungsprozesses, erforderlicher Dokumente,
          Testanforderungen, Gebühren, Herausforderungen, Strafen und Vorteile.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein Produkt-Compliance-System, das vom
          Bureau of Indian Standards, der nationalen Normungsbehörde Indiens,
          verwaltet wird.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Zertifikat stellt sicher, dass ein Produkt:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Den indischen Sicherheits- und Qualitätsstandards entspricht</li>
          <li>BIS-zugelassene Labortests bestanden hat</li>
          <li>Einer Fabrikinspektion unterzogen wurde</li>
          <li>
            Verbraucher vor unsicheren oder minderwertigen Produkten schützt
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zertifizierte Produkte tragen das ISI-Markenzeichen, was die
          Einhaltung der indischen Standards demonstriert.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Anwendbarer Standard – IS 17632:2022 für Stühle & Hocker
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Standard für Stühle und Hocker ist:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> – Stühle und Hocker für allgemeine
          Zwecke: Sicherheitsanforderungen
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Dieser Standard deckt alle nicht spezialisierten Stühle und Hocker ab,
          die für Sitzzwecke in Wohnungen, Büros, gewerblichen Umgebungen,
          öffentlichen Orten und institutionellen Einrichtungen verwendet
          werden.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produkte, die unter IS 17632:2022 abgedeckt sind
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stühle für allgemeine Zwecke</li>
          <li>Esszimmerstühle</li>
          <li>Büro-Besucherstühle</li>
          <li>Lernstühle</li>
          <li>Cafeteria-Stühle</li>
          <li>Restaurant-Stühle</li>
          <li>Besprechungsraum-Stühle</li>
          <li>Wartebereich-Stühle</li>
          <li>Holzstühle</li>
          <li>Metallstühle</li>
          <li>Kunststoffstühle (nicht spezialisiert)</li>
          <li>Hocker für allgemeine Zwecke</li>
          <li>Barhocker</li>
          <li>Esszimmerhocker</li>
          <li>Tritthocker (innerhalb definierter Kriterien)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wichtige Sicherheits- und Leistungsparameter
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 bewertet:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Strukturelle Festigkeit</li>
          <li>Stabilität</li>
          <li>Haltbarkeit bei wiederholter Verwendung</li>
          <li>Sitzfestigkeit</li>
          <li>Rückenlehnenleistung</li>
          <li>Bein-Impact-Widerstand</li>
          <li>Verbindungsfestigkeit</li>
          <li>Oberflächenqualität</li>
          <li>Kanten- und Ecken-Sicherheit</li>
          <li>Materialqualität</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle in Indien verkauften Stühle und Hocker müssen diesen Parametern
          entsprechen und eine BIS-Lizenz für Stühle und Hocker erhalten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Stühle & Hocker obligatorisch ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stühle und Hocker tragen menschliches Gewicht und werden häufig in
          allen Umgebungen verwendet. Strukturelles Versagen kann zu führen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zusammenbrechende Stühle</li>
          <li>Bruch der Beine</li>
          <li>Sitzrissbildung</li>
          <li>Rückenlehnenversagen</li>
          <li>Verletzungen durch scharfe Kanten</li>
          <li>Instabilität, die zu Stürzen führt</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Vorteile der BIS-Zertifizierung
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Gewährleistet sichere Sitzprodukte</li>
          <li>Verhindert Unfälle und Verletzungen</li>
          <li>Verbessert die Produkthaltbarkeit</li>
          <li>Verhindert minderwertige Importe</li>
          <li>Etabliert einheitliche Marktqualität</li>
          <li>Erhöht das Kundenvertrauen</li>
          <li>Obligatorisch nach indischem Recht (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS-Zertifizierung können Hersteller Stühle oder Hocker in Indien
          nicht legal verkaufen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess für Stühle und Hocker (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der BIS-Prozess folgt dem ISI-Mark-Zertifizierungsschema, das Tests,
          Inspektionen und Antragsprüfungen umfasst.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 1 – Produkttyp & Standard identifizieren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Bestätigen Sie, dass der Stuhl/Hocker unter IS 17632:2022 fällt.
          Identifizieren Sie Designvarianten und verwendete Materialien.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 2 – BIS-Antrag online einreichen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Antrag wird über das BIS Manak Online-Portal eingereicht und
          erfordert:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Herstellerdetails</li>
          <li>Fabrikinformationen</li>
          <li>Produktspezifikationen</li>
          <li>Marken-/Markendetails</li>
          <li>Fertigungsprozess-Workflow</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 3 – BIS-Zertifizierungsgebühren zahlen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Gebühren umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsgebühr</li>
          <li>Bearbeitungsgebühr</li>
          <li>Musterprüfungsgebühren</li>
          <li>Fabrikinspektionsgebühren</li>
          <li>Kennzeichnungsgebühren</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 4 – Produkttests gemäß IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatorische Tests werden in einem BIS-anerkannten Labor
          durchgeführt.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests umfassen:
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stabilitätstest</li>
          <li>Festigkeitstest für Sitz</li>
          <li>Rückenlehnen-Haltbarkeitstest</li>
          <li>Bein-Vorwärts-/Seitwärts-/Rückwärts-Belastungstest</li>
          <li>Sitz-Impact-Test</li>
          <li>Falltest</li>
          <li>Ermüdungstest</li>
          <li>Oberflächenfinish-Test</li>
          <li>Scharfkanten-Test</li>
          <li>Strukturelle Haltbarkeit unter wiederholten Zyklen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testergebnisse müssen vollständige Einhaltung von IS 17632:2022
          zeigen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 5 – Fabrikinspektion durch BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beamter besucht die Fabrik, um zu bewerten:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungsprozess</li>
          <li>Rohstoffinspektion</li>
          <li>Qualitätskontrollverfahren</li>
          <li>Testfähigkeit</li>
          <li>Kalibrierung der Ausrüstung</li>
          <li>Produktionsvolumen</li>
          <li>Einhaltung des BIS-Schemas für Tests & Inspektionen (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 6 – Erteilung der BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Wenn Tests und Inspektion erfolgreich sind, erteilt BIS:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Zertifikat (ISI-Mark-Lizenz)</li>
          <li>CML-Nummer</li>
          <li>
            Genehmigung zur Anbringung des ISI-Markenzeichens auf Stühlen und
            Hockern
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Schritt 7 – Nachlizenz-Verpflichtungen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Das ISI-Markenzeichen gemäß BIS-Kennzeichnungsanforderungen
            verwenden
          </li>
          <li>Qualitätskontrollaufzeichnungen führen</li>
          <li>Regelmäßigen BIS-Überwachungsinspektionen unterzogen werden</li>
          <li>Lizenz alle 1–2 Jahre erneuern</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Umfang der BIS-Lizenz für Stühle & Hocker
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieser Standard deckt die Anforderungen für Stühle und Hocker für
          allgemeine Zwecke ab. Dieser Standard gilt für vollständig
          hergestellte/gefertigte Stühle und Hocker für allgemeine Zwecke. Er
          gilt auch für montagefertige Einheiten; in diesem Fall gelten die
          Anforderungen dieses Standards für die montierten Einheiten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung von Stühlen & Hockern erforderliche
          Dokumente
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fabriklizenz/Registrierung</li>
          <li>Fertigungsprozess-Flussdiagramm</li>
          <li>Maschinenliste</li>
          <li>Liste der internen Testausrüstung</li>
          <li>Kalibrierungszertifikate</li>
          <li>Fabriklayout & Grundriss</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stuhl/Hocker-Zeichnungen</li>
          <li>Abmessungen & Spezifikationen</li>
          <li>Stückliste</li>
          <li>Beschreibung der Sicherheitsmerkmale</li>
          <li>Interne Qualitätstestberichte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Dokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identitäts- & Adressnachweis</li>
          <li>Markenautorisierungsschreiben</li>
          <li>Markenzertifikat (optional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Antragsdokumente
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antragsformular</li>
          <li>Testanfrageformular</li>
          <li>Erklärungsformulare</li>
          <li>Autorisierungsschreiben</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testanforderungen für Stühle & Hocker (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 umfasst umfangreiche mechanische, strukturelle und
          Sicherheits- Tests.
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
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vorwärts-Überkippen und Seitwärts-Überkippen für Stühle ohne
                  Armlehnen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rückwärts-Überkippen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Seitwärts-Überkippen für Stühle mit Armlehnen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Hocker/ Poufs (Alle Richtungen)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Festigkeitstest
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Diese Tests gewährleisten eine sichere tägliche Nutzung unter realen
          Bedingungen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen & wie man sie vermeidet
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Stuhl fällt Stabilitätstests durch</strong>
            <br />
            Tritt aufgrund ungleichmäßiger Gewichtsverteilung auf.
            <br />
            Lösung: Beindesign verbessern, Grundfläche verbreitern.
          </li>
          <li>
            <strong>Schwache Verbindungen verursachen Testfehler</strong>
            <br />
            Lösung: Verstärkte Materialien & bessere Verbinder verwenden.
          </li>
          <li>
            <strong>Unzureichende interne Testausrüstung</strong>
            <br />
            Lösung: Erforderliche BIS-konforme Instrumente installieren.
          </li>
          <li>
            <strong>Dokumentationsinkonsistenzen</strong>
            <br />
            Lösung: Dokumente systematisch vor der Beantragung vorbereiten.
          </li>
          <li>
            <strong>Produktvarianten nicht ordnungsgemäß zugeordnet</strong>
            <br />
            Lösung: Produkte basierend auf Struktur & Testparametern gruppieren.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Stühle & Hocker
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechtliche Erlaubnis zum Verkauf in Indien</li>
          <li>Verbesserte Produktsicherheit</li>
          <li>Erhöhtes Kundenvertrauen</li>
          <li>Geringeres Produkthaftungsrisiko</li>
          <li>Erforderlich für E-Commerce-Listen</li>
          <li>Wesentlich für Regierungsausschreibungen</li>
          <li>Höhere Markenglaubwürdigkeit</li>
          <li>Wettbewerbsvorteil</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Strafen bei Nichteinhaltung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf von Stühlen oder Hockern ohne BIS-Zertifizierung kann zu
          führen:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Schwere Geldstrafen</li>
          <li>Produktrückruf/Beschlagnahme</li>
          <li>Kündigung von Fabriklizenzen</li>
          <li>Strafverfolgung</li>
          <li>Importbeschränkungen</li>
          <li>Markt-Sperrliste</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Strafen werden nach dem BIS-Gesetz von 2016 durchgesetzt.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt eine BIS-Zertifizierung für Stühle & Hocker?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obligatorisch für:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Ausländische Hersteller, die nach Indien exportieren</li>
          <li>Importeure</li>
          <li>Markeninhaber/Händler</li>
          <li>OEM/ODM-Lieferanten</li>
          <li>Einzelhandelsketten</li>
          <li>Online-Verkäufer</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Fabrik benötigt eine separate BIS-Lizenz.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das BIS-Zertifikat für Stühle und Hocker für allgemeine Zwecke nach IS
          17632:2022 ist obligatorisch, um Produktsicherheit, strukturelle
          Stabilität und Haltbarkeit zu gewährleisten. Die BIS-Zertifizierung
          hilft Herstellern nicht nur, hohe Qualitätsstandards
          aufrechtzuerhalten, sondern ermöglicht auch den rechtlichen
          Marktzugang und erhöht das Verbrauchervertrauen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit professioneller Unterstützung wird der Zertifizierungsprozess—von
          Tests bis Inspektion und Genehmigung—reibungslos, vorhersehbar und
          vollständig konform.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS-Zertifikat für Stühle und Hocker
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Ist die BIS-Zertifizierung für Stühle und Hocker
                obligatorisch?
              </strong>
              <br />
              Ja, gemäß IS 17632:2022 müssen alle Stühle und Hocker für
              allgemeine Zwecke BIS-zertifiziert sein, bevor sie in Indien
              verkauft werden.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Welche Tests sind erforderlich?</strong>
              <br />
              Stabilitäts-, Festigkeits-, Haltbarkeits-, Impact-, Ermüdungs- und
              Material- Sicherheitstests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Wie lange dauert die BIS-Zertifizierung?</strong>
              <br />
              Typischerweise 30–45 Tage.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Was kostet die Zertifizierung?</strong>
              <br />
              Etwa ₹60.000–₹1,30.000 je nach Tests und Inspektion.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Können ausländische Hersteller sich bewerben?</strong>
              <br />
              Ja, unter dem FMCS-Schema.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Ist die ISI-Kennzeichnung obligatorisch?</strong>
              <br />
              Ja, nach Erteilung der BIS-Lizenz.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Warum fallen Stühle bei BIS-Tests durch?</strong>
              <br />
              Häufige Ursachen sind schwache Beine, schlechte
              Verbindungsfestigkeit und Instabilität.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Können mehrere Modelle unter einer Lizenz abgedeckt werden?
              </strong>
              <br />
              Nur wenn sie Ähnlichkeits- und Standard-Compliance-Kriterien
              erfüllen.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Ist eine Fabrikinspektion erforderlich?</strong>
              <br />
              Ja, sie ist obligatorisch für die ISI-Mark-Zertifizierung.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. Welche Dokumente werden benötigt?</strong>
              <br />
              Fabriklizenz, technische Spezifikationen, Maschinenliste, QC-Plan,
              Produkt- Zeichnungen usw.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Stühle & Hocker - IS 17632:2022 PDF"
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
