import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const BISCertificationCombinationSideCuttingPliersGerman = () => {
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




export default BISCertificationCombinationSideCuttingPliersGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Kombinationszangen mit Seitenschneide | IS 3650:1981 BIS-Lizenz";
  const ogTitle =
    "BIS-Zertifizierung für Kombinationszangen mit Seitenschneide – Leitfaden IS 3650:1981";
  const twitterTitle =
    "BIS-Lizenz für Kombinationszangen mit Seitenschneide | IS 3650:1981";
  const metaDescription =
    "BIS-Zertifikat für Kombinationszangen mit Seitenschneide nach IS 3650:1981. Ablauf, Dokumente, Prüfung, Kosten und Zeitplan für die BIS-Zertifizierung in Indien.";
  const ogDescription =
    "Vollständiger Leitfaden zur BIS-Zertifizierung für Kombinationszangen mit Seitenschneide gemäß IS 3650:1981. Ablauf, Kosten, Dokumente, Prüfung und Vorteile der BIS-Lizenz.";
  const twitterDescription =
    "BIS-Zertifikat für Kombinationszangen mit Seitenschneide nach IS 3650:1981 beantragen. BIS-Ablauf, Dokumente, Prüfung, Gebühren und Zeitplan in Indien.";
  const metaKeywords =
    "BIS-Zertifikat für Kombinationszangen mit Seitenschneide, BIS-Lizenz für Kombinationszangen mit Seitenschneide, IS 3650:1981, BIS-Zertifizierung für Kombinationszangen mit Seitenschneide";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/kombinationszangen-seitenschneide-is-3650";
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
                    <Link to="/Blogs">Neueste Beiträge</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifikat für Kombinationszangen mit Seitenschneide – IS
                    3650:1981
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
          BIS-Zertifizierung Kombinationszangen mit Seitenschneide – Vollständiger Leitfaden IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="BIS-Lizenz für Kombinationszangen mit Seitenschneide"
            alt="BIS-Zertifikat für Kombinationszangen mit Seitenschneide - IS 3650:1981 BIS-Zertifizierung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kombinationszangen mit Seitenschneide gehören zu den am häufigsten verwendeten
          Handwerkzeugen bei Elektroarbeiten, mechanischer Wartung, Bau, Fertigungsstätten,
          Werkstätten, Kfz-Service und Haushaltsreparaturen. Diese Werkzeuge sind für mehrere
          Funktionen ausgelegt: Greifen, Biegen, Verdrehen und Schneiden von Drähten.
          Da sie häufig zum Schneiden von Metalldrähten, elektrischen Leitern und kleinen
          Bauteilen verwendet werden, können Zangen minderer Qualität zu Werkzeugbruch,
          Stromschlaggefahren, Handverletzungen und schweren Arbeitsunfällen führen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Um Sicherheit, Haltbarkeit und gleichmäßige Qualität zu gewährleisten, schreibt
          die indische Regierung die Einhaltung der indischen Normen für Handwerkzeuge vor.
          Der Erwerb eines BIS-Zertifikats für Kombinationszangen mit Seitenschneide nach
          IS 3650:1981 ist eine zentrale rechtliche und qualitative Anforderung für
          Hersteller und Importeure, die diese Werkzeuge in Indien verkaufen. Eine gültige
          BIS-Zertifizierung für Kombinationszangen mit Seitenschneide bestätigt, dass das
          Produkt auf mechanische Festigkeit, Schneidleistung, Materialhärte und
          Gesamtsicherheit geprüft wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese detaillierte Produktseite richtet sich an Hersteller, ausländische
          Hersteller, Importeure, Händler, Vertreiber, Hardware-Marken, E-Commerce-Verkäufer
          und Compliance-Experten, die ein vollständiges Verständnis der BIS-Lizenz für
          Kombinationszangen mit Seitenschneide wünschen – inkl. BIS-Zertifizierungsprozess
          in Indien, Prüfanforderungen, Dokumentation, Kosten, Zeitplänen, Sanktionen und Vorteilen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Was ist die BIS-Zertifizierung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein Konformitätsbewertungssystem für Produkte,
          das vom Bureau of Indian Standards geregelt wird, der nationalen Behörde
          Indiens für Normung, Zertifizierung und Qualitätssicherung.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Bedeutung des BIS-Zertifikats
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Die Bedeutung des BIS-Zertifikats bezieht sich auf die offizielle Genehmigung
          durch das BIS, die bestätigt, dass ein Produkt der gültigen indischen Norm
          (IS) entspricht und unter einem kontrollierten Qualitätssystem hergestellt wird.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Die Hauptziele der BIS-Zertifizierung sind:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Verbraucher vor unsicheren Produkten schützen</li>
          <li>Gleichbleibende Produktqualität gewährleisten</li>
          <li>Die Durchsetzung von Vorschriften unterstützen</li>
          <li>Normung in der indischen Industrie fördern</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI-Marke erklärt
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Das BIS-Zertifizierungszeichen, allgemein als ISI-Marke bekannt, ist ein
          Symbol für Vertrauen und Konformität. Bei Kombinationszangen mit Seitenschneide
          zeigt die ISI-Marke an, dass:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Das Werkzeug die Anforderungen von IS 3650:1981 erfüllt</li>
          <li>Mechanische und Schneidleistung geprüft sind</li>
          <li>Das Produkt für den Verkauf in Indien rechtlich zugelassen ist</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Anwendbare BIS-Norm für Kombinationszangen mit Seitenschneide
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Spezifikation für Kombinationszangen
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die anwendbare indische Norm für dieses Produkt ist IS 3650:1981, die
          die Anforderungen an Kombinationszangen mit Seitenschneiden für
          Greif- und Schneidanwendungen festlegt.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendungsbereich von IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Diese Norm deckt ab:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Kombinationszangen mit Seitenschneiden</li>
          <li>Abmessungen, Form und Anforderungen an die Oberflächenbeschaffenheit</li>
          <li>Materialqualität und Wärmebehandlung</li>
          <li>Mechanische Festigkeit und Schneidleistung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Sicherheit, Leistung und Prüfzweck
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 soll sicherstellen, dass:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Zangen ausreichende Schneidkapazität haben</li>
          <li>Backen und Schneiden nicht absplittern oder verformen</li>
          <li>Griffe sicheren Halt und wo nötig Isolierung bieten</li>
          <li>Das Werkzeug unter normalen Arbeitsbedingungen zuverlässig arbeitet</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wer muss sich konform verhalten
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hersteller von Kombinationszangen mit Seitenschneide in Indien</li>
          <li>Importeure und Händler</li>
          <li>Ausländische Hersteller, die den indischen Markt beliefern</li>
          <li>Marken, die Zangen unter Eigenmarken verkaufen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Warum die BIS-Zertifizierung für Kombinationszangen mit Seitenschneide verpflichtend ist
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Risiken für die Verbrauchersicherheit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Minderwertige Zangen können führen zu:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Plötzlichem Bruch beim Schneiden</li>
          <li>Rutschen und Handverletzungen</li>
          <li>Stromschlaggefahren bei elektrischen Anwendungen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Staatliche und regulatorische Konformität
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Gemäß BIS-Normen und BIS-Mitteilungen müssen Handwerkzeuge wie
          Kombinationszangen, die unter IS 3650:1981 fallen, die BIS-
          Zertifizierungsanforderungen erfüllen, bevor sie in Indien verkauft werden dürfen.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Konsequenzen
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der Verkauf oder Import nicht zertifizierter Zangen kann zu Folgendem führen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Beschlagnahme der Produkte durch Behörden</li>
          <li>Geldstrafen</li>
          <li>Widerruf von Handelslizenzen</li>
          <li>Strafverfolgung nach dem BIS-Gesetz</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markt- und Markenvorteile
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Eine BIS-Lizenz für Kombinationszangen mit Seitenschneide hilft Marken:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vertrauen bei Käufern und Auftragnehmern aufzubauen</li>
          <li>Sich für staatliche und PSU-Ausschreibungen zu qualifizieren</li>
          <li>Mit etablierten Hardware-Marken zu konkurrieren</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierungsprozess Schritt für Schritt für Kombinationszangen mit Seitenschneide
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Anwendbarkeit und Normidentifikation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Der erste Schritt ist die Bestätigung, dass das Produkt:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Unter Kombinationszangen mit Seitenschneide fällt</li>
          <li>Unter IS 3650:1981 fällt</li>
          <li>In Größe und Verwendung dem Anwendungsbereich der Norm entspricht</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Onlineantragsverfahren
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Hersteller müssen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Im BIS-Portal registrieren</li>
          <li>IS 3650:1981 unter Produktnormen auswählen</li>
          <li>Das BIS-Antragsformular ausfüllen</li>
          <li>Alle erforderlichen Unterlagen hochladen</li>
          <li>Anfallende Gebühren zahlen</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Phase wird häufig als BIS-Onlineantrag oder BIS-
          Zertifikatsregistrierung bezeichnet.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Gebühren und Kostenstruktur für die BIS-Lizenz
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Die BIS-Zertifizierungskosten umfassen in der Regel:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Antrags- und Bearbeitungsgebühren</li>
          <li>Produktprüfgebühren</li>
          <li>Werksinspektionsgebühren</li>
          <li>Lizenz- und Kennzeichnungsgebühren</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die Gesamtkosten der BIS-Zertifizierung hängen ab von:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Anzahl der Varianten</li>
          <li>Prüfkomplexität</li>
          <li>Standort des Werks</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Produktmusterprüfung (gemäß IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Muster werden in von BIS anerkannten Laboren geprüft auf:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Härte der Schneide</li>
          <li>Schneidleistung</li>
          <li>Mechanische Festigkeit</li>
          <li>Maßgenauigkeit</li>
          <li>Oberflächenbeschaffenheit und Verarbeitung</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Werksinspektion und Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Ein BIS-Beauftragter führt ein Werksaudit durch zur Überprüfung von:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fertigungsprozess</li>
          <li>Wärmebehandlung und Oberflächenbehandlung</li>
          <li>Qualitätsmanagementsystem</li>
          <li>Prüf- und Inspektionsanlagen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Erteilung der BIS-Lizenz und ISI-Marke
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Nach erfolgreicher Prüfung und Inspektion:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Erteilt das BIS die Bureau of Indian Standards-Lizenz</li>
          <li>
            Der Hersteller darf die ISI-Marke auf zugelassenen Zangen führen
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Konformität nach der Zertifizierung
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Anforderungen nach der Zulassung umfassen:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Überwachungsinspektionen</li>
          <li>Marktstichprobenprüfungen</li>
          <li>Fristgerechte Lizenzverlängerung</li>
          <li>Kontinuierliche Einhaltung von IS 3650:1981</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Für die BIS-Zertifizierung erforderliche Unterlagen
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Herstellerunterlagen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Werksregistrierungszertifikat</li>
          <li>Fertigungsablaufdiagramm</li>
          <li>Liste der Maschinen und Prüfgeräte</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Unterlagen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Firmengründungszertifikat</li>
          <li>GST-Registrierung</li>
          <li>Markenautorisation (falls zutreffend)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technische Unterlagen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Produktzeichnungen und -spezifikationen</li>
          <li>Rohstoffangaben</li>
          <li>Wärmebehandlungs- und QC-Plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS-Antragsunterlagen
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-Antragsformular</li>
          <li>Prüfantragsdetails</li>
          <li>Erklärungen und Zusicherungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sie werden zusammen als BIS-ZERTIFIKATSDOKUMENTE oder BIS-
          ZERTIFIZIERUNGSDOKUMENTE bezeichnet.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Prüfanforderungen gemäß IS 3650:1981
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pflichtprüfungen umfassen:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Anforderungen
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fertigung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Verarbeitung und Oberflächenbeschaffenheit
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Konservierung und Verpackung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Abmessungen
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Härte
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolierung (außer Isolationsprüfung)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Isolationsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Schneidprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rohrgreifprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Schlagprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Torsionsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Griffbelastungsprüfung
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Biegeprüfung
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Alle Prüfungen müssen ausschließlich in von BIS anerkannten Laboren durchgeführt werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Häufige Herausforderungen und wie man sie vermeidet
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Häufige Probleme
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Versagen bei Härte- oder Schneidprüfungen</li>
          <li>Ungeeignete Wärmebehandlung</li>
          <li>Schlechte Oberflächenbeschaffenheit</li>
          <li>Unvollständige Dokumentation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interne Vorprüfungen durchführen</li>
          <li>Richtige Wärmebehandlungsverfahren einhalten</li>
          <li>Qualitätsaufzeichnungen chargenweise führen</li>
          <li>Fachkundige BIS-Beratung in Anspruch nehmen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Hersteller und Importeure
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rechtliche Vorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vollständige Einhaltung der indischen Vorschriften</li>
          <li>Schutz vor Strafen und Beschlagnahmen</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kommerzielle Vorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Akzeptanz durch Händler und Auftragnehmer</li>
          <li>Eignung für Groß- und institutionelle Aufträge</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markenvorteile
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI-Marke stärkt die Markenglaubwürdigkeit</li>
          <li>Abgrenzung von unstrukturierten Lieferanten</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Markterweiterung
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eintritt in organisierte Hardware-Einzelhandelsketten</li>
          <li>Größere Akzeptanz in exportorientierten Unternehmen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Sanktionen bei Nichtkonformität
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Nichtkonformität kann führen zu:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hohen Geldstrafen</li>
          <li>Produktbeschlagnahme</li>
          <li>Geschäftsunterbrechung</li>
          <li>Rechtlichen Schritten nach dem BIS-Gesetz</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Wer benötigt die BIS-Zertifizierung für Kombinationszangen mit Seitenschneide?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indische Hersteller</li>
          <li>Importeure</li>
          <li>Ausländische Hersteller (mit autorisiertem indischen Vertreter)</li>
          <li>Händler mit Eigenmarkenverkauf</li>
          <li>E-Commerce-Verkäufer, die Zangen anbieten</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Erwerb eines BIS-Zertifikats für Kombinationszangen mit Seitenschneide nach
          IS 3650:1981 ist eine zentrale rechtliche und qualitative Anforderung für den
          Verkauf dieser Werkzeuge in Indien. Die BIS-Zertifizierung für Kombinationszangen
          mit Seitenschneide gewährleistet Produktsicherheit, gleichbleibende Leistung und
          regulatorische Konformität, während die BIS-Lizenz für Kombinationszangen mit
          Seitenschneide die Markenglaubwürdigkeit und Marktakzeptanz stärkt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Für Hersteller, Importeure und Verkäufer vermeidet rechtzeitige Konformität nicht
          nur Sanktionen, sondern eröffnet auch Zugang zu größeren Märkten und langfristigem
          Geschäftswachstum. Mit fachkundiger Begleitung wird der BIS-Zertifizierungsprozess
          reibungsloser, schneller und vollständig konform mit indischen Normen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQ – BIS-Zertifizierung für Kombinationszangen mit Seitenschneide
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F1. Ist die BIS-Zertifizierung für Kombinationszangen mit Seitenschneide verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, die Einhaltung von IS 3650:1981 ist in Indien verpflichtend.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F2. Was ist die vollständige Bezeichnung des BIS-Zertifikats?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F3. Wie lange dauert der BIS-Zertifizierungsprozess?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In der Regel 30–60 Arbeitstage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F4. Was kostet das BIS-Zertifikat?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Die Kosten hängen vom Prüfumfang und den Produktvarianten ab.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F5. Können Importeure die BIS-Zertifizierung beantragen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, mit entsprechender Autorisierung des Herstellers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F6. Ist die ISI-Marke verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, die ISI-Kennzeichnung ist nach der Zertifizierung verpflichtend.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F7. Können ausländische Hersteller die BIS-Zertifizierung erhalten?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, über einen autorisierten indischen Vertreter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F8. Welche Prüfungen sind nach IS 3650:1981 erforderlich?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Härte, Schneidleistung, Festigkeit und Maßprüfungen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F9. Ist die Werksinspektion verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, das BIS führt ein Werksaudit durch.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F10. Können mehrere Größen unter einer Lizenz fallen?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, vorbehaltlich Prüfung und Genehmigung.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F11. Was passiert, wenn nicht zertifizierte Zangen verkauft werden?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Strafen, Beschlagnahme und rechtliche Schritte können erfolgen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F12. Ist der BIS-Onlineantrag verpflichtend?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, Anträge werden nur online eingereicht.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F13. Sind Verlängerungen für BIS-Lizenzen erforderlich?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, Lizenzen müssen regelmäßig verlängert werden.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              F14. Können Berater Genehmigungsverzögerungen reduzieren?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Ja, professionelle Berater helfen, Fehler und Ablehnungen zu vermeiden.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="BIS-Zertifikat für Kombinationszangen mit Seitenschneide - PDF IS 3650:1981"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={2} />
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
              Unsere Leistungen
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
              ISI-Marke (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
