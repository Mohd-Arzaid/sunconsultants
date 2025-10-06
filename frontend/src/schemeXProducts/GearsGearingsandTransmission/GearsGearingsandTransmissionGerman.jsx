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

const GearsGearingsandTransmissionGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Schema X Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung ist obligatorisch für Hersteller, die sich mit allen Arten von Zahnrädern und Getrieben, Zahnrädern, Kettenrädern, Übertragungselementen, Kugel- oder Rollenschrauben, Getriebekästen und Geschwindigkeitsänderern befassen."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Zahnräder, Getriebe und Übertragungselemente, BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente, Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente, BIS für Zahnräder, Getriebe und Übertragungselemente, OTR für Zahnräder, Getriebe und Übertragungselemente"
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
          content="BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
        />
      </Helmet>

      <GearsGearingsandTransmissionGermanBreadcrumb />
      <GearsGearingsandTransmissionGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default GearsGearingsandTransmissionGerman;

const GearsGearingsandTransmissionGermanBreadcrumb = () => {
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
                  BIS Schema X Zertifizierung für Zahnräder, Getriebe und
                  Übertragungselemente
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="BIS Schema X Zertifizierung für Zahnräder, Getriebe und Übertragungselemente"
            title="BIS Schema X Lizenz für Zahnräder und Getriebe, Zahnräder, Kettenräder"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In der sich verändernden Welt der Industrie ist die Sicherheit und
          Qualität mechanischer Komponenten sehr wichtig. Nach dem Bureau of
          Indian Standards müssen alle in Indien hergestellten Maschinen- und
          elektrischen Komponenten den von BIS festgelegten Sicherheits- und
          Qualitätsstandards entsprechen und sind im Maschinen- und
          Elektrogerätesicherheitsverordnung (Omnibus Technical Regulation) von
          2024 detailliert beschrieben. Die Verordnung umfasst mechanische
          Module, Komponenten und Baugruppen wie Zahnräder, Getriebeelemente und
          die verschiedenen Teile von Übertragungen, die für das Funktionieren
          von Maschinen in jeder Industrie unerlässlich sind.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Alle Hersteller, inländische oder ausländische, sind verpflichtet, die
          Standardanforderungen der Schema X Zertifizierung bis zum 1. September
          2026 zu erfüllen, wie sie von der Verordnung festgelegt und vom
          Ministerium für Schwerindustrie eingeführt wurden. Alle Hersteller in
          der Industrie der Zahnräder und Getriebekästen und all ihre
          zugehörigen Übertragungselemente müssen dieser Verordnung entsprechen,
          damit sie Zugang zum Markt haben und Standards für die Industrie
          setzen können.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dieser Blog enthält alle wichtigen Informationen für die
          Zertifizierung von Zahnrädern, Getriebekästen und zugehörigen
          Übertragungsteilen sowie warum sie wertvoll ist, ihre Reichweite, die
          Zertifizierungsvorteile und die notwendigen Unterlagen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum Schema X für Zahnräder, Getriebe und Übertragungselemente
          wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diese mechanischen Teile sind wichtig in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Autos, Lastwagen und Zügen</li>
          <li>Flug- und Verteidigungsausrüstung</li>
          <li>Fertigungsmaschinen und Robotik</li>
          <li>Energie- und Stromerzeugungssysteme</li>
          <li>Marine (Schwer- und Leichtbauindustrie)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS für Zahnräder, Getriebe und Übertragungselemente sind die
          Gefahren hoch:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Getriebeausfälle führen zu Ausfällen und kostspieligen Ausfallzeiten
          </li>
          <li>Gesundheitsrisiken in Transport- und Schwerindustrie</li>
          <li>Ineffiziente Energieübertragung und Energiedissipation</li>
          <li>
            Begrenzte Zugänglichkeit von öffentlichen Ausschreibungen und
            Beschaffungsmöglichkeiten
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Schließlich bietet die Schema X Zertifizierung von Zahnrädern,
          Getrieben und Übertragungselementen erhöhte Haltbarkeit, minimiertes
          Betriebsrisiko und ist konsistent mit inländischen Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente ist Teil der BIS
          Konformitätsbewertungsverordnungen von 2018. Sie definiert strenge
          Benchmarks für Design, Materialqualität und Betriebsleistung.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wesentliche Merkmale der Schema X Zertifizierung sind:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Obligatorisch für alle Hersteller (indische und ausländische)</li>
          <li>
            Geeignet für verschiedene Zahnräder, Wellen und Übertragungsteile
          </li>
          <li>Führt Produkttests in BIS-genehmigten Laboren durch</li>
          <li>Umfasst Fabrikaudits zur Validierung der Qualitätskontrolle</li>
          <li>
            Berechtigt zur Verwendung des BIS-Standardzeichens, sobald das
            Produkt zertifiziert ist
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR für Zahnräder, Getriebe und Übertragungselemente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ministerium für Schwerindustrie hat die Omnibus Technical
          Regulation (OTR) 2024 für Zahnräder, Getriebe und Übertragungselemente
          verabschiedet.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance-Datum: Alle Produzenten und Importeure müssen bis zum 1.
          September 2026 eine Zertifizierung besitzen. Nach diesem Tag können
          nicht zertifizierte Güter nicht mehr hergestellt, importiert oder in
          Indien verkauft werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheit und Zuverlässigkeit: Es vermeidet unbeaufsichtigte
            Ausfälle von wichtigen Systemanwendungen.
          </li>
          <li>
            Marktwettbewerb: Zertifizierte Unternehmen genießen Vorzug in sowohl
            öffentlichen als auch privaten Ausschreibungen.
          </li>
          <li>
            Kundenvertrauen: Käufer haben Vertrauen in Produkte mit offizieller
            BIS-Anerkennung.
          </li>
          <li>
            Rechtliche Compliance: Keine Strafen mit der OTR für Zahnräder,
            Getriebe und Übertragungsteile.
          </li>
          <li>
            Globaler Markteintritt: Ermöglicht ausländischen Herstellern den
            einfachen Eintritt in den indischen Markt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Zahnrädern und Übertragungsteilen enthalten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Schema X Zertifizierung gilt für eine Vielzahl von Zahnrädern,
          Getrieben und Übertragungselementen wie folgende:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Stirn-, Schräg-, Kegel- und Schneckenradzahnräder</li>
          <li>Zahnradwellen und Kupplungen</li>
          <li>Getriebekästen und Übertragungsteile</li>
          <li>Komponenten von Ketten- und Riemenantrieb</li>
          <li>
            Zahnräder verwendet in Luftfahrt und Robotik, hochwertigen
            Automobilen, Motorrädern.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Alle Arten müssen indischen Standards (IS-Codes) entsprechen wie IS
          16819:2018/ISO 12100:2010 (Sicherheit von Maschinen Allgemeine
          Grundsätze für Design - Risikobewertung und Risikominderung). Jede Art
          von Produkt muss dem entsprechenden indischen Standard bezüglich
          seines Designs und seiner Leistung entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren der BIS-Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Anwendbare Standards identifizieren: Konsultieren Sie IS-Codes, die
          für Ihre Zahnrad-/Übertragungsprodukte anwendbar sind.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Produkttests: Entwickeln Sie Material- und Leistungstests in
            BIS-akkreditierten Laboren.
          </li>
          <li>
            Fabrikaudit: BIS kommt für Q.S.-Audit auf der Produktionsstätte.
          </li>
          <li>
            Dokumentation einreichen: Teilen Sie technische Details, Testpapiere
            und Qualitätshandbücher mit.
          </li>
          <li>
            Lizenzgewährung: BIS gewährt nach Überprüfung der Dokumente auf
            Genauigkeit die Zertifizierung und erlaubt die Verwendung des
            Standardzeichens.
          </li>
          <li>
            Laufende Compliance: Häufige Audits und Nachtests zur
            Aufrechterhaltung der Gültigkeit der Zertifizierung.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Nicht-Compliance zur BIS-Zertifizierung von Zahnrädern, Getrieben und
          Übertragungselementen unter der OTR für Zahnräder, Getriebe und
          Übertragungselemente führt zu:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs und der Herstellung von nicht zertifizierten
            Artikeln
          </li>
          <li>Beschlagnahmung von Gütern und Geldstrafen</li>
          <li>Ungeeignetheit für Regierungsausschreibungen und Verträge</li>
          <li>Reputationsschäden über die lange Zeit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Zertifizierung für Zahnräder, Getriebe und
          Übertragungselemente, benachrichtigt unter der OTR für Zahnräder,
          Getriebe und Übertragungselemente (2024) wäre ein wichtiger Schritt
          zur Verbesserung der Qualitäts- und Sicherheitsstandards von
          Ingenieur- und Fertigungsstrukturen in Indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Hersteller und Importeure von Zahnrädern, Getrieben und
          Kraftübertragungslösungen, die Verkäufe auf dem indischen Markt
          suchen, werden feststellen, dass ihre Gewinne steigen und sich Türen
          zu Marktgewinnen öffnen werden, indem sie Schema X Zertifizierung für
          Zahnräder, Getriebe und Kraftübertragungssysteme beantragen.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Zahnräder, Getriebe und Übertragungselemente";

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
