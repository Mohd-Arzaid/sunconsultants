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

const EmbroideryMachinesGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Stickmaschinen</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Mit der BIS Schema X Zertifizierung für Stickmaschinen stellen Hersteller sicher, dass ihre Produkte rechtlich konform, technisch überlegen und von Kunden vertrauenswürdig sind"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Stickmaschinen, BIS Schema X Zertifizierung für Stickmaschinen, Schema X Zertifizierung für Stickmaschinen, BIS für Stickmaschinen, OTR für Stickmaschinen"
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
          content="BIS Schema X Zertifizierung für Stickmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Stickmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-stickmaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Stickmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Stickmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-stickmaschinen"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-a-broderie"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-stickmaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-theu"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-bordado"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-jasu-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-mesin-bordir"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-macchine-da-ricamo"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-shishu-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-ci-xiu-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-thai-rua"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-borduurmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-alat-al-tatriz"
        />
      </Helmet>

      <EmbroideryMachinesGermanBreadcrumb />
      <EmbroideryMachinesGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default EmbroideryMachinesGerman;

const EmbroideryMachinesGermanBreadcrumb = () => {
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
                  BIS Schema X Zertifizierung für Stickmaschinen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const EmbroideryMachinesGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const EmbroideryMachinesGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Zertifizierung für Stickmaschinen
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="BIS Schema X Zertifizierung für Stickmaschinen"
            title="BIS Schema X Lizenz für Stickmaschinen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Der Sticksektor ist ein wichtiger Teil von Indiens Textil- und
          Bekleidungsindustrie und produziert wertschöpfende Stoffe für Mode,
          Haushalt und Export. Computerisierte Mehrkopf-Stickmaschinen oder
          Industriemaschinen sind unverzichtbar für hohe Qualität bei bestickten
          Produkten, da sie Effizienz und Präzision beim Sticken bieten.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Um Sicherheit, Stabilität und Leistung zu gewährleisten, hat BIS (Das
          Bureau of Indian Standards) die obligatorische Zertifizierung für
          Stickmaschinen unter dem Zertifizierungsschema X von BIS durchgesetzt.
          Dies stellt sicher, dass nur Maschinen, die den indischen Standards
          entsprechen, in den indischen Markt zugelassen werden.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Artikel werden wir die Bedeutung der BIS Schema X
          Genehmigung für Stickmaschinen, Vorschriften unter der OTR (Order of
          the Textile Rules) für Stickmaschinen und den Prozess zur Erlangung
          der BIS-Lizenz für Stickmaschinen diskutieren.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS für Stickmaschinen wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stickmaschinen werden verwendet:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Bekleidungs- und Kleidungsfabriken</li>
          <li>
            Produktion von Heimtextilien (Vorhänge, Bettwäsche, Kissenbezüge)
          </li>
          <li>Maßgeschneiderte Stickerei und Couture-Häuser</li>
          <li>Exportorientierte Textilfabriken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Risiken ohne BIS für Stickmaschinen sind:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Schlechte Stichqualität und gebrochene Fäden.</li>
          <li>Übermäßige mechanische Ausfallzeiten der Maschine</li>
          <li>Sicherheitsrisiken in industriellen Umgebungen</li>
          <li>Ausschluss sowohl von inländischen als auch von Exportmärkten</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das BIS-Zeichen für Stickmaschinen ist eine Garantie für die Kunden,
          dass Ihr Produkt streng getestet und zertifiziert wurde und allen
          notwendigen Richtlinien von BIS entspricht.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X für Stickmaschinen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Rahmen für die BIS Schema X Zertifizierung für Stickmaschinen
          basiert auf den unter den BIS Konformitätsbewertungsverordnungen von
          2018 erwähnten Parametern (die für die Compliance im
          Qualitätsmanagement unter den Industrieausrüstungsanbietern entwickelt
          wurden).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Merkmale der Schema X Zertifizierung für Stickmaschinen:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obligatorisch für sowohl indische als auch ausländische Hersteller
          </li>
          <li>Umfasst Tests, Sicherheitsprüfungen und Effizienzverifikation</li>
          <li>Regelmäßige Fabrikbesuche und Qualitätsaudits erforderlich</li>
          <li>
            Erlaubt das Anbringen des BIS-Zeichens unter einer Lizenz für
            Stickmaschinen für Produkte, die zertifiziert sind
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Stickmaschinen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ministerium für Schwerindustrie hatte die Omnibus Technical
          Regulation (OTR) 2024 für Stickmaschinen eingeführt, die die
          Zertifizierung für alle Maschinen vorschreibt, die unter die Kategorie
          der Stickmaschinen fallen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Hersteller und Importeure müssen bis zum 1. September
          2026 eine BIS-Lizenz für Stickmaschinen erhalten, die in Indien
          verkauft oder importiert werden sollen, um Strafen oder Verfolgung zu
          vermeiden. Danach können nicht zertifizierte Stickmaschinen nicht
          gehandelt oder für kommerzielle Zwecke in Indien verwendet werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Stickmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Produktsicherheit & Zuverlässigkeit: Zertifizierbare Maschinen
            erfüllen erwartete und Sicherheitsstandards.
          </li>
          <li>
            Marktakzeptanz: BIS-Lizenz für Stickmaschinen ist obligatorisch für
            Regierungsausschreibungen und Mengenverträge.
          </li>
          <li>
            Käufervertrauen: Stickmaschinen sind BIS-markiert, was ihre Qualität
            und ihren Standard bestätigt.
          </li>
          <li>
            Regulatorische Compliance: Entspricht OTR für Stickmaschinen und
            führt nicht zu Strafen.
          </li>
          <li>
            Exportvorteil: Indische Käufer haben Seelenfrieden mit
            zertifizierten Maschinen und internationale Unternehmen erhalten
            leichteren Zugang zu Indien.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Stickmaschinen unter Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Schema X Zertifizierung für Stickmaschinen ist anwendbar für:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Stickmaschinen mit mehreren Köpfen</li>
          <li>Maschinengesteuerte computerisierte Stickerei</li>
          <li>Stickmaschinen mit einem Kopf</li>
          <li>Maschinen für Kettenstich-Stickerei</li>
          <li>Schiffli-Stickmaschinen</li>
          <li>Spezialisierte Textilstickausrüstung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jede Kategorie kann dem entsprechenden IS-Standard (IS-Codes)
          entsprechen, wie IS 17361 (Teil 1): 2020 / ISO 11111 (Teil 1): 2016
          (Textilmaschinen Sicherheitsanforderungen Teil 1 Allgemeine
          Anforderungen). Alle müssen notwendigerweise ihren jeweiligen IS-Codes
          für Design, Haltbarkeit, Sicherheit und Wirtschaftlichkeit im Betrieb
          entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Lizenz für Stickmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Relevante Standards identifizieren: Suchen Sie nach den IS-Codes,
            die für Ihr Maschinenmodell der Stickerei relevant sind.
          </li>
          <li>
            Produkttests: Maschinen werden in BIS-akkreditierten Laboren auf
            Sicherheit und Leistung getestet.
          </li>
          <li>
            Fabrikinspektion: BIS-Auditoren kommen in die Fabrik, um die
            Qualitätskontrolle zu bewerten.
          </li>
          <li>
            Dokumentation & Antrag: Stellen Sie BIS technische Berichte,
            Handbücher und Qualitätsdokumente zur Verfügung.
          </li>
          <li>
            BIS-Lizenz für Stickmaschinen: Bei Annahme haben die Hersteller die
            Möglichkeit, ihre Produkte mit dem BIS-Zeichen zu markieren.
          </li>
          <li>
            Laufende Compliance: Routinemäßige Inspektionen und Nachtests
            gewährleisten laufende Compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Konsequenzen des Fehlens einer BIS-Zertifizierung für
          Stickmaschinen unter OTR für Stickmaschinen sind ab dem 1. September
          2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Einschränkungen beim Verkauf/Import von nicht zertifizierten
            Maschinen
          </li>
          <li>Geldstrafen, Strafen und potenzielle Produktbeschlagnahmungen</li>
          <li>Ungeeignetheit für bedeutende Regierungs- und Exportverträge</li>
          <li>Langfristige Schädigung des Markenrufs</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Implikation der BIS Schema X Zertifizierung für Stickmaschinen in
          OTR für Stickmaschinen (2024) ist ein Meilenstein für den indischen
          Textil- und Sticksektor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Aus Sicht der Hersteller und Importeure von Stickmaschinen ist die
          Erlangung der BIS-Registrierung für Stickmaschinen und das Anbringen
          eines BIS-Zeichens für Stickmaschinen nicht nur eine Compliance mit
          den gesetzlichen Anforderungen, sondern hat auch eine enorme Akzeptanz
          für die Produktqualität, Marktvertrauen & Wettbewerbsvorteil für die
          Textilindustrie in Indiens ständig wachsender Textilindustrie.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const EmbroideryMachinesGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Stickmaschinen";

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
