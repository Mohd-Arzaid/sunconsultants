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

const PowerSemiconductorsGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung gilt für alle Arten von Leistungshalbleiter-Wandlern und deren Baugruppen/Unterbaugruppen/Komponenten zur Gewährleistung von Qualität und Sicherheit in Indien"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Leistungshalbleiter-Wandler, BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler, Schema X Zertifizierung für Leistungshalbleiter-Wandler, BIS für Leistungshalbleiter-Wandler, OTR für Leistungshalbleiter-Wandler"
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
          content="BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-leistungshalbleiter-wandler"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-leistungshalbleiter-wandler"
        />
      </Helmet>

      <PowerSemiconductorsGermanBreadcrumb />
      <PowerSemiconductorsGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default PowerSemiconductorsGerman;

const PowerSemiconductorsGermanBreadcrumb = () => {
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
                <BreadcrumbPage>
                  BIS Schema X für Leistungshalbleiter-Wandler
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PowerSemiconductorsGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const PowerSemiconductorsGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X für Leistungshalbleiter-Wandler
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler"
            title="BIS Schema X Lizenz für Leistungshalbleiter-Wandler"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Leistungshalbleiter-Wandler ermöglichen die effektive Ausführung und
          Modifikation von elektrischer Leistung von einer Form zur anderen in
          verschiedenen Anwendungen. Diese Anwendungen reichen von erneuerbaren
          Energien, Elektrofahrzeugen, Industrieautomatisierung und
          Konsumelektronik. Sie dienen als Basis für elektrische und
          elektronische Geräte und Ausrüstungen. Aufgrund der Bedeutung und
          wachsenden Relevanz der Geräte in den Energie- und Industriesektoren
          des Landes hat das Bureau of Indian Standards (BIS) die Zertifizierung
          von Leistungshalbleiter-Wandlern unter dem Schema X
          Zertifizierungsrahmen aufgenommen.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Gemäß der Anordnung des Ministeriums für Schwerindustrie wird von
          allen Arten von Herstellern erwartet, unabhängig davon, ob sie lokal
          oder im Ausland tätig sind, bis zum 1. September 2026 die
          BIS-Zertifizierung für Leistungshalbleiter-Wandler und deren
          Unterbaugruppen und Komponenten einzuhalten. Die BIS Schema X
          Zertifizierung für Leistungshalbleiter-Wandler ist ein regulatorisches
          Zertifizierungsschema, ein Schritt zur Verbesserung der indischen
          Fertigung durch verbesserte Sicherheit, Qualität und global
          wettbewerbsfähige Standards.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dieser Blog wird dabei helfen, die notwendigen Informationen über
          Dokumentation bezüglich der Schema X Zertifizierung für alle
          Unterbaugruppen, Komponenten und/oder Arten von
          Leistungshalbleiter-Wandlern, deren Reichweite und Bedeutung, den
          Zertifizierungsprozess, Vorteile und andere Informationen
          bereitzustellen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Bedeutung von BIS für Leistungshalbleiter-Wandler
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Anwendungen von Leistungshalbleiter-Wandlern umfassen:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Solar- und Windkraftprojekte</li>
          <li>EV-Ladestationen & Antriebe</li>
          <li>Fabrikautomatisierung und Robotik</li>
          <li>Konsumelektronik und PSU</li>
          <li>Übertragungs- und Verteilungsnetzwerk</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne Zertifizierung umfassen die Risiken:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Elektrische Fehlfunktion und Überhitzung</li>
          <li>Unsichere Bedingungen und Gerätefehlfunktionen</li>
          <li>Reduzierte Energieeffizienz</li>
          <li>
            Negative Ausschreibungsergebnisse von Regierungsprojekten und
            Ausschreibungen
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Leistungshalbleiter-Wandler mit Schema X Zertifizierung zeigen an,
          dass diese Produkte den strengen indischen Standards für Leistung,
          Sicherheit und Zuverlässigkeit entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist das BIS Schema X Zertifikat für Leistungshalbleiter-Wandler?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler steht
          unter den BIS Konformitätsbewertungsverordnungen von 2018. Sie stellt
          sicher, dass Produkte robuste Tests, Inspektionen und
          Compliance-Checks durchlaufen, bevor sie den indischen Markt
          erreichen.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Merkmale:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Obligatorisch für alle ausländischen und indischen Hersteller</li>
          <li>
            Umfasst eine umfassende Einführung in Leistungshalbleiter-Geräte,
            Gate-Drive-Design und passive Komponenten.
          </li>
          <li>Produkttests sind in BIS-akkreditierten Laboren obligatorisch</li>
          <li>
            Ausschluss aus kommunalen Arbeiten und Projekten und Ausschreibungen
            der Regierung.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Die Zertifizierung stellt sicher, dass Leistungshalbleiter-Wandler den
          strengen indischen Standards für Leistung, Sicherheit und Haltbarkeit
          entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler ist
          unter den BIS Konformitätsbewertungsverordnungen von 2018 abgedeckt.
          Sie zeigt, dass ein Produkt strenge Tests, Inspektionen und Compliance
          in Indien erfordern würde, bevor es hier auf den Markt gebracht wird.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Merkmale:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatorisch für indische und ausländische Produzenten</li>
          <li>
            Umfasst eine breite Palette von Leistungshalbleiter-Anwendungen
            (AC-DC, DC-DC, DC-AC und AC-AC)
          </li>
          <li>
            Schreibt Festigkeits- und Sicherheitszertifizierung durch
            BIS-genehmigte Labore vor
          </li>
          <li>Umfasst Fabrik- und Qualitätssystemaudits</li>
          <li>
            Gewährt das Recht zur Verwendung des BIS-Standardzeichens, wenn das
            Produkt auch BIS-lizenziert ist.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Leistungshalbleiter-Wandler
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die neue Omnibus Technical Regulation (OTR) 2024 für
          Leistungshalbleiter-Wandler wurde vom Ministerium für Schwerindustrie
          veröffentlicht. Diese OTR-Anordnung schreibt Schema X Zertifizierung
          für diese Produkte vor, um Qualität und Verbrauchersicherheit zu
          gewährleisten.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance-Datum: Alle Hersteller und Importeure müssen bis zum 1.
          September 2026 zertifiziert sein. Nach diesem Grenzdatum können nicht
          zertifizierte Wandler nicht mehr hergestellt, verkauft oder nach
          Indien importiert werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Leistungshalbleiter-Wandler
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Produktsicherheit: Reduziert das Risiko von Überhitzung,
            Brandunfällen und Kurzschlüssen.
          </li>
          <li>
            Energieeffizienz: Garantiert optimierte Leistung und Einhaltung von
            energiesparenden Standards.
          </li>
          <li>
            Marktzugang: OTR für Leistungshalbleiter-Wandler erfordert
            Zertifizierung für Marktzugang in Indien.
          </li>
          <li>
            Wettbewerbsvorteil: Regierungs- und private Ausschreibungen
            bevorzugen zertifizierte Produkte.
          </li>
          <li>
            Kundenvertrauen: Das BIS-Standardzeichen zeigt Zuverlässigkeit,
            Sicherheit und Qualität an.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Registrierung für Leistungshalbleiter-Wandler
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Anwendbare IS-Standards identifizieren: Identifizieren Sie die
            anwendbaren indischen Standards für die Art des Wandlers.
          </li>
          <li>
            Produkttests: Alle Leistungs- oder Sicherheitstests müssen in
            BIS-akkreditierten Laboren durchgeführt werden.
          </li>
          <li>
            Fabrikinspektion: BIS-Auditoren überprüfen Produktionslinien,
            Qualitätskontrolle und Sicherheitsoperationen.
          </li>
          <li>
            Dokumentationseinreichung: Stellen Sie uns technische
            Spezifikationen, Testberichte und Compliance-Aufzeichnungen zur
            Verfügung.
          </li>
          <li>
            Lizenzgewährung: Nach Genehmigung gewährt BIS eine Lizenz zur
            Verwendung des Standardzeichens.
          </li>
          <li>
            Kontinuierliche Compliance: Regelmäßige Audits und Stichprobentests
            stellen sicher, dass die Zertifizierung aufrechterhalten wird.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nichteinhaltung der BIS-Zertifizierung für Leistungshalbleiter-Wandler
          unter der OTR für Leistungshalbleiter-Wandler kann zu folgenden Folgen
          führen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Kein Verkauf, Herstellung oder Import von nicht zertifizierten
            Produkten
          </li>
          <li>Beschlagnahmung von Gütern und Geldstrafen</li>
          <li>
            Ausschluss von der Teilnahme an Regierungsausschreibungen, Verträgen
          </li>
          <li>Reputationsschaden auf dem indischen Markt</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Leistungshalbleiter-Wandler,
          vorgeschrieben unter der OTR für Leistungshalbleiter-Wandler (2024),
          stellt eine bahnbrechende Verordnung dar, die sichere, effiziente und
          hochwertige Produkte in Indiens schnell wachsenden Energie- und
          Elektronikmärkten vorschreibt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für Hersteller und Importeure ist das Haben einer Schema X
          Zertifizierung für Leistungshalbleiter-Wandler nicht nur obligatorisch
          – es ist eine Gelegenheit, Kundenvertrauen, Compliance und Zugang zu
          einem größeren Markt zu gewinnen.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const PowerSemiconductorsGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Leistungshalbleiter-Wandler";

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

