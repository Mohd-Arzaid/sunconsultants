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

const MachineToolsGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Werkzeugmaschinen</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung ist obligatorisch für Werkzeugmaschinen einschließlich Drehmaschinen, Fräsmaschinen, Bohrmaschinen, Schleifmaschinen, CNC-Systeme und Werkzeuge zur Bearbeitung von Stein, Keramik, Beton und ähnlichen Materialien"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Werkzeugmaschinen, BIS Schema X Zertifizierung für Werkzeugmaschinen, Schema X Zertifizierung für Werkzeugmaschinen, BIS für Werkzeugmaschinen, OTR für Werkzeugmaschinen"
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
          content="BIS Schema X Zertifizierung für Werkzeugmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Werkzeugmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Werkzeugmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Werkzeugmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
        />
      </Helmet>

      <MachineToolsGermanBreadcrumb />
      <MachineToolsGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default MachineToolsGerman;

const MachineToolsGermanBreadcrumb = () => {
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
                  BIS Schema X Zertifizierung für Werkzeugmaschinen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const MachineToolsGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MachineToolsGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const MachineToolsGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Zertifizierung für Werkzeugmaschinen
        </h1>

        {/* BIS Scheme X License Image */}
        <div className="mb-6">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            BIS Schema X Lizenz für Werkzeugmaschinen
          </h3>
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Machine-Tools.png"
            alt="BIS Schema X Zertifizierung für Werkzeugmaschinen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Unter Berücksichtigung von Qualität und Sicherheit als kritisch hat
          BIS (Bureau of Indian Standards) die Sicherheit und Standards
          verschiedener Industrien durch Schema X Zertifizierung angeführt.
          Diese Zertifizierung ist von größter Bedeutung für die Hersteller von
          Werkzeugmaschinen, die zur Bearbeitung von Materialien wie Stein,
          Keramik, Beton, Asbestzement und ähnlichen mineralischen Gläsern und
          anderen Bearbeitungswerkzeugen entwickelt wurden. Die
          Zertifizierungscompliance erfüllt nicht nur die nationalen
          Sicherheitsanforderungen, sondern steigert erheblich die
          Glaubwürdigkeit und Marktfähigkeit solcher Produkte.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Diese Schema X Zertifizierung ist eine Anforderung unter der
          Maschinen- und Elektrogerätesicherheitsverordnung (Omnibus Technical
          Regulation, 2024). Die Verordnung bescheinigt, dass die Hersteller der
          Maschinen und Elektrogeräte das Standardzeichen auf ihrer Ausrüstung
          haben müssen. Die Zertifizierung umfasst technische Dateivorbereitung,
          Fabrikaudits, unabhängige Produktprüfung und Lizenzierung, und die
          endgültige Deadline ist der 1. September 2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dieser Blog deckt alle notwendigen Informationen im Zusammenhang mit
          Schema X Zertifizierung für alle Arten von Werkzeugmaschinen zur
          Bearbeitung von Stein, Keramik, Beton, Asbestzement oder ähnlichen
          Mineralien (oder) und deren Baugruppen/Unterbaugruppen/Komponenten,
          ihre Bedeutung, Reichweite, Zertifizierungsprozess, Vorteile und
          benötigte Dokumentation ab.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Werkzeugmaschinen wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Werkzeugmaschinen sind unverzichtbar in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Automobil- und Flugzeugteilproduktion</li>
          <li>Schiffbau und Schwerindustrie</li>
          <li>Der Herstellung von Stromerzeugungsausrüstung</li>
          <li>Eisenbahnen, Verteidigung und Präzisionswerkzeuge</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS-Zertifizierung umfassen die Risiken:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Unzureichende & inkonsistente Produktqualität</li>
          <li>
            Fehlfunktionen in der Ausrüstung und Verzögerungen in der Produktion
          </li>
          <li>Risiken für Bediener</li>
          <li>Rechtliche Bedenken wegen Verletzung indischer Gesetze</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Durch die Durchsetzung der Compliance schützt die Schema X
          Zertifizierung Industrien vor diesen Risiken. Sie gilt auch für alle
          Arten von Werkzeugmaschinen zur Bearbeitung von Stein, Keramik, Beton,
          Asbestzement oder ähnlichen Mineralien (oder) und deren
          Baugruppen/Unterbaugruppen/Komponenten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Werkzeugmaschinen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mit der BIS Schema X Zertifizierung unter den BIS
          Konformitätsbewertungsverordnungen von 2018 sind solche Tests,
          Inspektionen und Lizenzierungen für das identifizierte Produkt
          Werkzeugmaschine obligatorisch geworden, bevor sie im Land
          hergestellt, importiert oder verkauft wird.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Highlights:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Anwendbar für indische und importierte Hersteller</li>
          <li>
            Umfasst Werkzeugmaschinen wie Drehmaschinen, Fräsmaschinen,
            Bohrmaschinen, Schleifmaschinen, Hobelmaschinen, CNC-Systeme und
            mehr
          </li>
          <li>Tests werden nur in BIS-genehmigten Laboren durchgeführt.</li>
          <li>Fabrikaudits und Qualitätssystemprüfungen sind obligatorisch</li>
          <li>
            Nur erfolgreiche Antragsteller erhalten die BIS-Lizenz zur
            Verwendung des Standardzeichens auf ihren Produkten
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR für Werkzeugmaschinen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ministerium für Schwerindustrie hat die Omnibus Technical
          Regulation (OTR) veröffentlicht, die BIS Schema X Zertifizierung für
          Werkzeugmaschinen vorschreibt.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Produzenten und Importeure müssen bis zum 1. September
          2026 eine BIS-Zertifizierung haben. Ab dem Datum einer solchen
          Benachrichtigung darf jede nicht zertifizierte Werkzeugmaschine nicht
          mehr in Indien hergestellt, verkauft oder importiert werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Werkzeugmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Qualitätssicherung: Verifizierte Genauigkeit, die Haltbarkeit
            zertifizierter Werkzeuge.
          </li>
          <li>
            Marktzugang – wesentlich für den Eintritt in öffentliche und private
            Sektorarbeit.
          </li>
          <li>
            Verbrauchervertrauen – Das BIS-Standardzeichen ist die Garantie für
            Qualität & Sicherheit des Produkts.
          </li>
          <li>
            Wettbewerbsvorteil - Autorisierte Hersteller werden für
            Ausschreibungen und Beschaffung bevorzugt.
          </li>
          <li>
            Risikominderung – Keine Geräteausfälle, erhöhte Bedienersicherheit
            und Ausfallzeitverhinderung.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prozess der BIS-Zertifizierung von Werkzeugmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Standards identifizieren – Korrelieren Sie den Typ der
            Werkzeugmaschine und ihre Verwendung mit indischen Standards.
          </li>
          <li>
            Produkttests – Leistungs-, Sicherheits- und Haltbarkeitstests in
            BIS-akkreditierten Laboren.
          </li>
          <li>
            Fabrikaudit – Qualitätskontrollaudit der Produktion von
            Elektrogeräten.
          </li>
          <li>
            Dokumentation: Technische Berichte, Handbücher und
            Compliance-Nachweis müssen bereitgestellt werden.
          </li>
          <li>
            Lizenzgewährung – BIS erteilt eine Lizenz (Zertifikat) und erlaubt
            die Verwendung des Standardzeichens.
          </li>
          <li>
            Überwachung – Regelmäßige Überprüfungen und Stichprobeninspektionen
            sind vorhanden, um zu bestätigen, dass sie sich an die Regeln
            halten.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Schema X Zertifizierung ist obligatorisch für alle Maschinen zur
          Bearbeitung von Stein, Keramik, Beton, Asbestzement oder ähnlichen
          Mineralien (oder) und deren Baugruppen/Unterbaugruppen/Teile.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Nichteinhaltung der BIS-Zertifizierungsnormen unter OTR kann zu
          folgenden Folgen führen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot gegen Produktion, Import und Handel mit nicht zertifizierten
            Waren
          </li>
          <li>Einziehung von Gütern und Geldstrafen in A.c._MUTINY.</li>
          <li>Verlust von Verteidigungs- und Regierungsverträgen</li>
          <li>Dauerhafter Marken- und Reputationsschaden langfristig</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          Die BIS Schema X Zertifizierung, erforderlich unter der OTR 2024, ist
          nicht nur eine regulatorische Verpflichtung—sie ist der Schlüssel zu
          Vertrauen, Sicherheit und Erfolg in Indiens Fertigungsindustrie.
          Zertifizierung ist wichtig für indische & globale Hersteller für
          Marktzugang, Compliance und langfristigen Erfolg.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const MachineToolsGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Werkzeugmaschinen";

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
