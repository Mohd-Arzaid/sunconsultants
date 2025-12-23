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

const MetalCuttingMachinesGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Metallschneidemaschinen</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS-Zertifizierung ist jetzt obligatorisch für alle Arten von Metallschneidemaschinen und/oder deren Baugruppen, Unterbaugruppen und Komponenten, die unter HS-Codes 8456 bis 8461 fallen"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Metallschneidemaschinen, BIS Schema X Zertifizierung für Metallschneidemaschinen, Schema X Zertifizierung für Metallschneidemaschinen, BIS für Metallschneidemaschinen, OTR für Metallschneidemaschinen"
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
          content="BIS Schema X Zertifizierung für Metallschneidemaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Metallschneidemaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Metallschneidemaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Metallschneidemaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-outils-de-machines-de-coupe-metallique"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kinzoku-setsusaku-kousaku-kikai"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-jin-shu-qie-xiao-ji-chuang-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-tat-lohak"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-metaalsnijmachines"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-adawat-alat-qata-al-maadin"
        />
      </Helmet>

      <MetalCuttingMachinesGermanBreadcrumb />
      <MetalCuttingMachinesGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default MetalCuttingMachinesGerman;

const MetalCuttingMachinesGermanBreadcrumb = () => {
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
                  BIS Zertifizierung für Metallschneidemaschinen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const MetalCuttingMachinesGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MetalCuttingMachinesGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const MetalCuttingMachinesGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Zertifizierung für Metallschneidemaschinen
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-metal-cutting-machine- tools.png"
            alt="BIS Schema X Zertifizierung für Metallschneidemaschinen"
            title="BIS Schema X Lizenz Metallschneidemaschinen Werkzeuge"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Metallschneiden ist die Arbeitspferd-Fertigungstechnologie, die
          Indiens Motor-, Automobil-, Luftfahrt- und Fertigungsindustrien
          untermauert. Diese Maschinen reichen von CNC-Drehmaschinen und
          Fräsmaschinen bis hin zu Laserschneidern und helfen dabei, die
          Produktion hoch und die Kosten niedrig in Industrien überall zu
          halten. Da die Nachfrage nach hochwertigen Maschinen in Indien
          gestiegen ist, hat die Regierung die BIS-Zertifizierung von
          Metallschneidemaschinen obligatorisch gemacht, um Qualität und
          Sicherheit zu gewährleisten.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Gemäß der BIS (Bureau of Indian Standard) Schema X Zertifizierung für
          Metallschneidemaschinen müssen sowohl ausländische als auch indische
          Hersteller indische Standards erfüllen, bevor sie auf dem indischen
          Markt verkauft werden können. Dies ist ein Weg, die Maschine sicher in
          Betrieb zu nehmen und gleichzeitig das Kundenvertrauen zu
          gewährleisten.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dieser Beitrag bietet Informationen bezüglich der Schema X
          Zertifizierung für Metallschneidemaschinen, der OTR-Anforderung 2024
          für Metallschneidemaschinen und des Verfahrens zur Erlangung einer
          BIS-Lizenz für Metallschneidemaschinen, um das BIS-Zeichen für
          Metallschneidemaschinen anzubringen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum ist BIS für Metallschneidemaschinen obligatorisch?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Metallschneidemaschinen werden angewendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Auto- und Autokomponentenfertigung</li>
          <li>Luftfahrt- und Verteidigungsindustrie</li>
          <li>Schwerindustrie und Bauwesen</li>
          <li>Elektronik- und Elektroindustrien</li>
          <li>Werkzeugformenbau und Druckguss</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unternehmen, denen BIS für Metallschneidemaschinen fehlt, können
          ausgesetzt sein:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Schlechte Bearbeitungsgenauigkeit und niedrige Ausbeute</li>
          <li>
            Maschinenausfälle und Produktionsverlust Betriebszeit vs.
            Ausfallzeit.
          </li>
          <li>Potenzielle Gefahren für den Bediener</li>
          <li>
            Ausschluss von öffentlichen Ausschreibungen und regulierten
            Unternehmen
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das BIS-Zeichen versichert Ihnen, dass die Metallschneidemaschinen den
          vom Bureau festgelegten Qualitätsnormen entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Metallschneidemaschinen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Metallschneidemaschinen fällt
          unter die BIS Konformitätsbewertungsverordnungen von 2018, die
          formuliert wurden, um sicherzustellen, dass das Produkt die
          notwendigen Qualitätsstandards erfüllt, was das Bedürfnis der heutigen
          Zeit für Industrieausrüstungen ist.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Merkmale der Schema X Zertifizierung für
          Metallschneidemaschinen
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obligatorisch für sowohl indische als auch ausländische Hersteller
          </li>
          <li>
            Anwendbar für eine Vielzahl von Metallschneidemaschinen, die unter
            indischen Standards benachrichtigt wurden
          </li>
          <li>Umfasst Labortests, Fabrikinspektionen und regelmäßige Audits</li>
          <li>
            Autorisiert die Anzeige des BIS-Zeichens für
            Metallschneidemaschinen.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Obligatorische BIS OTR für Metallschneidemaschinen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Anordnungen des Ministeriums für Schwerindustrie bezüglich der
          Omnibus Technical Regulation (OTR) für Metallschneidemaschinen im Jahr
          2024 haben die Zertifizierung obligatorisch gemacht.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: BIS-Lizenz wird für alle Hersteller und Importeure von
          Metallschneidemaschinen ab dem 1. September 2026 obligatorisch sein.
          Ab diesem Datum können nicht zertifizierte Maschinen nicht zum Verkauf
          angeboten, importiert oder in Indien installiert werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Metallschneidemaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Produktzuverlässigkeit: Maschinen sind für Genauigkeit, Haltbarkeit
            und konsistente Leistung zertifiziert.
          </li>
          <li>
            Marktwettbewerb: Eine BIS-Lizenz für Metallschneidemaschinen ist
            obligatorisch, um mehrere Industrie- und Regierungsaufträge zu
            erhalten.
          </li>
          <li>
            Kundenvertrauen: Das BIS-Zeichen für Metallschneidemaschinen
            inspiriert Vertrauen beim Käufer.
          </li>
          <li>
            Rechtliche Compliance: Entsprechung der OTR für
            Metallschneidemaschinen und BIS.
          </li>
          <li>
            Globaler Vorteil: Einfachere Zugangsmöglichkeiten für ausländische
            Hersteller zum indischen Markt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Metal Cutting Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Metallschneidemaschinen innerhalb der Schema X Genehmigung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Schema X Zertifikat umfasst die folgenden Typen für
          Metallschneidemaschinen, ist aber nicht darauf beschränkt:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>CNC-Drehmaschinen und Drehzentren</li>
          <li>Fräsmaschinen</li>
          <li>Bohrmaschinen</li>
          <li>Schleifmaschinen</li>
          <li>CNC-Schneidemaschinen</li>
          <li>Laserschneidemaschinen oder -maschinen</li>
          <li>Plasmaschneidemaschinen</li>
          <li>Maschinen für Wasserstrahlschneiden</li>
          <li>Bandsäge- und Bügelsägemaschinen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Alle diese Arten von Metallschneidemaschinen müssen relevanten
          indischen Standards (IS-Codes) folgen, wie IS 17277 (Teil 1): 2019 /
          ISO 16092-1: 2017 (Werkzeugmaschinen Sicherheit Pressen Teil 1
          Allgemeine Sicherheitsanforderungen). Jedes Modell der Maschine muss
          seinen eigenen IS-Code bezüglich Sicherheit, Energieeffizienz und
          Genauigkeit erfüllen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Lizenz für Metallschneidemaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Anwendbare IS-Standards identifizieren: Wählen Sie den richtigen
            Standard entsprechend dem Maschinentyp.
          </li>
          <li>
            Produkttests: Übergeben Sie Maschinen für Experimente im Labor der
            staatlich anerkannten BIS-Laboratorien.
          </li>
          <li>
            Fabrikaudit: Vor-Ort-Besuche werden von BIS-Beamten durchgeführt, um
            angemessene Qualitätsproduktion zu gewährleisten.
          </li>
          <li>
            Dokumentationseinreichung: Stellen Sie technische Handbücher,
            Testberichte und Qualitätssicherungsdokumente zur Verfügung.
          </li>
          <li>
            Gewährung der BIS-Lizenz für Metallschneidemaschinen: Hersteller
            können jetzt das BIS-Zeichen unter der Produktzertifizierung gemäß
            dem obigen Standard anbringen.
          </li>
          <li>
            Laufende Compliance: Periodische Überwachung und Audits werden
            durchgeführt, um laufende Compliance mit BIS zu gewährleisten.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Nicht-Compliance der BIS-Zertifizierung für
          Metallschneidemaschinen unter der OTR für Metallschneidemaschinen kann
          zu folgenden Folgen führen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs/Imports von nicht zertifizierten Maschinen
          </li>
          <li>Hohe Geldstrafen und Produktbeschlagnahmung</li>
          <li>Ausschluss von Regierungsverträgen</li>
          <li>Langfristiger Marken- und Geschäftsreputationsschaden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Zertifizierung für Metallschneidemaschinen in OTR für
          Metallschneidemaschinen (2024) spielt eine wichtige Rolle in Indiens
          industrieller Genauigkeit, Sicherheit und Zuverlässigkeit.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für Hersteller und Importeure ist das Haben einer BIS-Lizenz für
          Metallschneidemaschinen und das Anbringen des BIS-Zeichens auf
          Metallschneidemaschinen nicht nur eine Compliance-Maßnahme, sondern
          eine strategische Investition, die eine zusammengesetzte Rendite in
          Form von Produktqualität, Verbrauchervertrauen und Marktüberlegenheit
          bietet.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const MetalCuttingMachinesGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Metallschneidemaschinen";

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
