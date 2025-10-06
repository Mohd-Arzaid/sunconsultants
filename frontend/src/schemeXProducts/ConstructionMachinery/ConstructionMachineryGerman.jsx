import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SlashIcon,
  PhoneCall,
  User,
  Phone,
  Mail,
  MessageCircle,
  SendHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import { Helmet } from "react-helmet-async";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import ServiceAuthorGerman from "@/components/manual/ServiceAuthor/ServiceAuthorGerman";
import { ServicesGerman } from "../PumpsAndLiquidElevators/PumpsAndLiquidElevatorsGerman";
import FooterGerman from "@/components/manual/Footer/FooterGerman";

const ConstructionMachineryGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Baumaschinen</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung ist für Bau-, Erdbewegungs- und Bergbaumaschinen obligatorisch, um Sicherheit, Qualität und Standardisierung in kritischen Industriesektoren zu gewährleisten"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Baumaschinen, BIS Schema X Zertifizierung für Baumaschinen, Schema X Zertifizierung für Baumaschinen, BIS für Baumaschinen, OTR für Baumaschinen"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Leiter der Betriebe bei Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Schema X Zertifizierung für Baumaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Baumaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-baumaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Baumaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Baumaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-baumaschinen"
        />
      </Helmet>

      <ConstructionMachineryGermanBreadcrumb />
      <ConstructionMachineryGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default ConstructionMachineryGerman;

const ConstructionMachineryGermanBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Startseite</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/SchemeX-Products">SchemaX Produkte</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage>BIS Schema X für Baumaschinen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachineryGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const ConstructionMachineryGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS ZERTIFIZIERUNG FÜR BAUMASCHINEN
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="BIS Schema X Zertifizierung für Baumaschinen"
            title="BIS Schema X Lizenz für Baumaschinen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Bagger, Lader, Bulldozer, Betonmischer und Straßenwalzen sind die
          Hauptbaumaschinen, die im Infrastrukturbau Indiens verwendet werden.
          Die höhere Nachfrage nach sicheren und zuverlässigen Maschinen
          resultiert aus riesigen Investitionen in Autobahnen, Smart Cities,
          Fabriken und Wohnungsbau.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Das Bureau of Indian Standards (BIS) hat die BIS-Zertifizierung unter
          Schema-X für Baumaschinen obligatorisch gemacht, um Qualitäts-,
          Service- und Sicherheitsgarantie zu bieten. Es stellt sicher, dass ein
          Gerät den indischen Standards entspricht, bevor es zum Verkauf oder
          Import in Indien verfügbar gemacht wird.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Hier in diesem Artikel werden Sie über BIS Schema X Zertifizierung für
          Baumaschinen, die Anforderung von OTR für Baumaschinen und den Prozess
          der Erlangung einer BIS-Lizenz für Baumaschinen und des BIS-Zeichens
          für Baumaschinen erfahren.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS für Baumaschinen wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Baumaschinen werden im Infrastrukturausbau und auf riesigen Baustellen
          eingesetzt.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Straßen- und Autobahnentwicklung</li>
          <li>Immobilien- und Wohnungsprojekte</li>
          <li>Bergbau und Steinbruch</li>
          <li>Industriebau und Schwermaschinenbau</li>
          <li>Häfen, Flughäfen und Metro-Projekte</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Folgen des Fehlens von BIS für Baugeräte sind folgende:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Geräteausfall und teure Ausfallzeiten</li>
          <li>Höhere Wahrscheinlichkeit von Unfällen und Gefahrenrisiken</li>
          <li>Nicht-Compliance mit Regierungsausschreibungen</li>
          <li>Erhöhte Wartungs- und Betriebskosten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das BIS-Zeichen für Baumaschinen zeigt an, dass das Produkt sicher,
          zuverlässig und in Übereinstimmung mit indischen Standards ist.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Baumaschinen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung wird durch die Bureau of Indian
          Standards (BIS) Konformitätsbewertungsanforderungen (2018) abgedeckt,
          die Richtlinien für Produkte bereitstellen. In diesem Schema
          entscheidet das BIS über die Qualität des Produkts und stellt sicher,
          dass es Gesundheitsgefahren für Menschen mindert.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hauptmerkmale - Schema X Zertifizierung für Baugeräte:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatorisch für inländische und ausländische Hersteller</li>
          <li>Umfasst alle Arten von Schwermaschinen und Baugeräten</li>
          <li>
            Produkttests sind ein Muss, Fabrikbesuche obligatorisch und
            Compliance-Audits müssen regelmäßig durchgeführt werden
          </li>
          <li>Ermächtigt die Verwendung des BIS-Zeichens für Baumaschinen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Baugeräte
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Schema X Zertifizierung wird als Teil der 2024 Omnibus Technical
          Regulation (OTR) für Baumaschinen obligatorisch, die vom Ministerium
          für Schwerindustrie angekündigt wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Hersteller und Importeure sollten eine BIS-Lizenz für
          Baumaschinen unter Schema X vor dem 01. September 2026 erhalten. Ab
          diesem Datum dürfen nicht zertifizierte Geräte nicht für öffentliche
          Infrastrukturprogramme produziert, transportiert oder verkauft werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Baugeräte oder -maschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheit & Zuverlässigkeit: Reduziert das Risiko von mechanischen
            Ausfällen oder Unfällen auf Baustellen.
          </li>
          <li>
            Marktzugang & Ausschreibungsberechtigung: BIS-zertifizierte Produkte
            sind für Regierungs- und PSU-Ausschreibungen berechtigt.
          </li>
          <li>
            Verbraucher- & Auftragnehmervertrauen: Das BIS-Zeichen für
            Baumaschinen gewährleistet sichere und qualitativ hochwertige
            Produkte für alle Käufer.
          </li>
          <li>
            Globaler Markteintritt: Eine BIS-Lizenz für Baumaschinen kann für
            ausländische Unternehmen vorteilhaft sein für einfachen Zugang zu
            indischen Märkten.
          </li>
          <li>
            Rechtliche Compliance: Straffreiheit von Geldstrafen, Verboten und
            Sanktionen unter der OTR für Baumaschinen.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Baugeräten unter Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Zertifizierung für Baumaschinen ist für verschiedene
          Kategorien von Geräten anwendbar wie:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Bagger und Baggerlader</li>
          <li>Bulldozer und Straßenwalzen</li>
          <li>Krane auf Baustellen</li>
          <li>Betonmischer und Mischanlagen</li>
          <li>Asphaltanlagen und Fertiger</li>
          <li>Ramm- und Bohrmaschinen</li>
          <li>Materialhandhabungs- und Erdbewegungsgeräte</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jede Kategorie muss die relevanten indischen Standards (IS-Codes)
          gemäß IS 17055 (Teil 7):2020, IS 17055 (Teil 8):2020 und IS 17055
          (Teil 12):2020 in Bezug auf Design, Sicherheit, Leistung usw.
          erfüllen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Lizenz für Baugeräte
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Anwendbare Standards identifizieren: Finden Sie heraus, welcher
            IS-Code für Ihren Typ von Baumaschinen gilt.
          </li>
          <li>
            Produkttests: Führen Sie Sicherheits- und Leistungstests in
            BIS-anerkannten Laboren durch.
          </li>
          <li>
            Fabrikinspektion: BIS-Auditoren untersuchen wörtliche QC- und
            Produktionsprozesse.
          </li>
          <li>
            Antrag & Dokumentation: Stellen Sie Berichte, Spezifikationen und
            Handbücher zur Überprüfung zur Verfügung.
          </li>
          <li>
            BIS-Lizenz für Baumaschinen: Bei Aufnahme sind Hersteller
            berechtigt, das BIS-Zeichen für Baumaschinen anzubringen.
          </li>
          <li>
            Laufende Compliance: Häufige Inspektionen und Überwachung halten
            laufende Compliance aufrecht.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Massenausfall oder Nichtausstellung des BIS-Zertifikats für
          Baumaschinen bis zum 1. September 2026 im Rahmen der OTR für
          Baumaschinen wird folgende Auswirkungen haben:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs und Imports von nicht zertifizierten Geräten
          </li>
          <li>Große Geldstrafen und Produktbeschlagnahmungen</li>
          <li>Disqualifikation von Regierungsprojekten und Auszeichnungen</li>
          <li>Unbegrenzter potenzieller Schaden für den Ruf für viele Jahre</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die obligatorische Umsetzung der BIS Schema X Zertifizierung für
          Baumaschinen unter OTR für Baumaschinen (2024) ist ein bedeutender
          Schritt in Richtung Sicherheit, Effizienz sowie Standardisierung in
          der einheimischen Industrie Indiens.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für Hersteller, Importeure und Exporteure von Baumaschinen ist die
          Erlangung einer BIS-Lizenz für Baumaschinen und das Anbringen des
          BIS-Zeichens für Baumaschinen nicht nur eine Compliance-Anforderung,
          sondern ein strategischer Schritt, um neue Märkte zu erschließen, den
          boomenden indischen Baumarkt zu durchdringen und Ihren Ruf langfristig
          aufzubauen.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const ConstructionMachineryGermanMainContentRight = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Get current page URL and name for form submission
  const currentUrl = window.location.href;
  const currentPageName =
    "SchemaX Produkt - BIS Zertifizierung für Baumaschinen";

  // Add BASE_URL like other forms
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use BASE_URL like other forms
      const response = await fetch(`${BASE_URL}/contact/submit-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageUrl: currentUrl,
          pageName: currentPageName,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: result.message });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px] ">
      <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Header */}
        <div className="flex gap-2 items-center">
          <PhoneCall className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Kostenlosen Rückruf anfordern
          </div>
        </div>

        {/* Intro Text */}
        <p className="mt-3 text-sm text-gray-600 font-geist">
          Hinterlassen Sie Ihre Daten unten und unsere Experten werden Sie
          innerhalb von 24 Stunden zurückrufen, um Ihre regulatorischen
          Compliance-Bedürfnisse zu besprechen.
        </p>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm font-geist ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Ihr Name*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              placeholder="Telefonnummer*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="E-Mail-Adresse*"
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageCircle className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Erforderliche Zertifizierung*"
              rows="3"
              required
              className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            ></textarea>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center">
              {isSubmitting ? "Wird gesendet..." : "Rückruf anfordern"}
              <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </form>

        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500 font-geist">
          Durch das Absenden dieses Formulars stimmen Sie unserer{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Datenschutzrichtlinie
          </a>{" "}
          zu und stimmen zu, kontaktiert zu werden.
        </p>
      </div>
    </div>
  );
};
