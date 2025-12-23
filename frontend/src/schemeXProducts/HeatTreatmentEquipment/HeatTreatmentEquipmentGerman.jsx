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

const HeatTreatmentEquipmentGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung schreibt vor, dass alle Arten von Maschinen zur Behandlung von Material durch einen Prozess mit Temperaturänderung und/oder deren Baugruppen/Komponenten BIS-zertifiziert sein müssen"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Wärmebehandlungsausrüstung, BIS Schema X Zertifizierung für thermische Verarbeitungsausrüstung, Schema X Zertifizierung für Wärmebehandlungsausrüstung, BIS für thermische Verarbeitungsausrüstung, OTR für Wärmebehandlungsausrüstung"
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
          content="BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="BIS Schema X Zertifizierung schreibt vor, dass alle Arten von Maschinen zur Behandlung von Material durch einen Prozess mit Temperaturänderung und/oder deren Baugruppen/Komponenten BIS-zertifiziert sein müssen"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-equipements-de-traitement-thermique"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-yeolcheori-jangbi"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-netsu-shori-souchi"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-re-chu-li-she-bei-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-uppakon-bambat-khwam-ron"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-warmtebehandelingsapparatuur"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-mualaja-al-harariya"
        />
      </Helmet>

      <HeatTreatmentEquipmentGermanBreadcrumb />
      <HeatTreatmentEquipmentGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default HeatTreatmentEquipmentGerman;

const HeatTreatmentEquipmentGermanBreadcrumb = () => {
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
                  BIS Zertifizierung für Wärmebehandlungsausrüstung
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="BIS Schema X Lizenz für Materialbehandlung"
            alt="BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Wärmebehandlungsausrüstung ist eine der kritischsten Anwendungen in
          Industrien wie Automobil, Luftfahrt, Gießerei, Schmiede und
          Schwerindustrie. Dies sind die Geräte, die die physikalischen und
          mechanischen Eigenschaften von Metallen durch Operationen wie Glühen,
          Abschrecken, Härten, Anlassen usw. verändern.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Angesichts ihrer Bedeutung hat das Bureau of Indian Standards (BIS)
          die BIS-Zertifizierung für Wärmebehandlungsausrüstung unter Schema X
          Zertifizierung für obligatorisch erklärt. Das stellt sicher, dass
          sowohl indische als auch globale Hersteller den strengen indischen
          Standards entsprechen, bevor sie die Ausrüstung im Land vermarkten.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Beitrag werden wir die Bedeutung der BIS Schema X
          Zertifizierung für Wärmebehandlungsausrüstung, die OTR für
          Wärmebehandlungsausrüstung und den Prozess zur Erlangung einer
          BIS-Lizenz für Wärmebehandlungsausrüstung mit dem BIS-Zeichen für
          Wärmebehandlungsausrüstung erklären.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS für Wärmebehandlungsausrüstung obligatorisch ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wärmebehandlungsofen wird häufig verwendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Metall- und metallurgischen Industrien</li>
          <li>Automobil- und Luftfahrtproduktion</li>
          <li>Werkzeug- und Formenbau</li>
          <li>Energie- und anderen Schwerindustrieanlagen</li>
          <li>Verteidigung und Präzisionsmaschinenbau</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In Abwesenheit von BIS für Wärmebehandlungsausrüstung können schlechte
          Qualitätsmaschinen verursachen:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Überhitzung oder unsachgemäße Verarbeitung</li>
          <li>Endproduktmechanismus- und Strukturausfälle</li>
          <li>Erhöhter Energieverbrauch und Mangel an Effizienz</li>
          <li>Sicherheitsgefahren für Bediener</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS-Zertifizierung garantiert nicht nur, dass die Ausrüstung
          ordnungsgemäß und sicher entsprechend industriellen
          Leistungsanforderungen funktioniert, sondern erfüllt auch
          Umweltkriterien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist Schema X Zertifizierung von Wärmebehandlungsausrüstung?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Schema X - Wärmebehandlungsausrüstung steht im Einklang mit dem
          Ministerium für Stahl, Regierung von Indien, welches ein
          obligatorisches Zertifizierungsschema unter Indiens BIS
          Konformitätsbewertungsverordnungen von 2018 ist.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wichtige Highlights der BIS Schema X Zertifizierung für
          Wärmebehandlungsausrüstung:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Erforderlich für US- und ausländische Hersteller</li>
          <li>
            Kann für die meisten Arten von Wärmebehandlungs- und Brennausrüstung
            verwendet werden
          </li>
          <li>
            Einschließlich Produkttests, Fabrikbodenprüfungen und fortlaufenden
            Compliance-Audits.
          </li>
          <li>
            Hersteller berechtigt zur Verwendung des BIS-Standardzeichens.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Wärmebehandlungsausrüstung
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ministerium für Schwerindustrie brachte 2024 die Omnibus Technical
          Regulation (OTR) für Wärmebehandlungsausrüstung ein, wobei die
          Compliance mit Schema X obligatorisch gemacht wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Produzenten und Importeure müssen bis zum 1. September
          2026 eine gültige BIS-Lizenz für Wärmebehandlungsausrüstung erhalten.
          Nach diesem Datum werden nicht zertifizierte
          Wärmebehandlungsausrüstungen nicht für Verkauf, Import oder
          Ausschreibung in öffentlichen Ausschreibungen berechtigt sein.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Wärmebehandlungsausrüstung
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Betriebssicherheit: Schutz vor Überhitzung, ungleichmäßiger
            Behandlung und Geräteausfällen.
          </li>
          <li>
            Produktzuverlässigkeit: Stellt sicher, dass behandelte Artikel
            Härte-, Haltbarkeits- und Zähigkeitsspezifikationen erfüllen
          </li>
          <li>
            Energieeffizienz: Zertifizierte Ausrüstung wird auf optimalen
            Energieverbrauch getestet, wodurch Betriebskosten gesenkt werden.
          </li>
          <li>
            Marktzugang: BIS-Zeichen für Wärmebehandlungsausrüstung ist häufig
            obligatorisch für öffentliche Beschaffung und
            Regierungsausschreibungen.
          </li>
          <li>
            Globaler Vorteil: Globale Marken können durch Erlangung der
            BIS-Lizenz für Wärmebehandlungsausrüstung einfachen Zugang zum
            indischen Markt erhalten.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Wärmebehandlungsausrüstung unter Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung umfasst
          eine große Anzahl von Maschinen wie:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Glühöfen</li>
          <li>Abschrecköfen</li>
          <li>Härte- und Anlassöfen</li>
          <li>Rotationsöfen für kontinuierliche Wärmebehandlung</li>
          <li>Aufkohlungs- und Nitrieröfen</li>
          <li>Induktions- und elektrische Wärmebehandlungsausrüstung</li>
          <li>Gas- und ölbefeuerte Wärmebehandlungsgeräte</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jeder Typ muss relevanten indischen Standards (IS-Codes) wie IS
          16819:2018/ISO 12100:2010 entsprechen. Leistungsmerkmale,
          Materialklassen und Energieeinsparungsmerkmale müssen den relevanten
          indischen Standards (IS-Codes) für jeden Ausrüstungstyp entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Lizenz für Wärmebehandlungsausrüstung
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Relevante IS-Standards identifizieren: Wenn der Entwurf
            kategoriebezogen ist, verifizieren Sie, ob der vorgeschlagene
            Standard Ihrer Ausrüstungskategorie entspricht und welche IS-Nummer.
          </li>
          <li>
            Tests in BIS-anerkannten Laboren: Führen Sie Leistungs-,
            Sicherheits- und Effizienztests durch.
          </li>
          <li>
            Fabrikinspektion: BIS untersucht Qualitätskontrollsysteme und
            Produktionsanlagen.
          </li>
          <li>
            Antrag & Dokumentation: Stellen Sie Ergebnisse, die durchgeführten
            Tests und technische Spezifikationen und Qualitätshandbücher zur
            Verfügung.
          </li>
          <li>
            Ausstellung der BIS-Lizenz: Genehmigung ermöglicht die Verwendung
            des BIS-Zeichens für Wärmebehandlungsausrüstung.
          </li>
          <li>
            Laufende Compliance: Audits und Inspektionen werden regelmäßig
            durchgeführt, um Qualitätsstandards aufrechtzuerhalten.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wenn die OTR der Wärmebehandlungsausrüstung bis zum 01. Sep 2026 nicht
          erfüllt wird:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs/Imports von nicht zertifizierter Ausrüstung
          </li>
          <li>Geldstrafen und Produktbeschlagnahmung</li>
          <li>Nicht berechtigt für Regierungs- und PSU-Ausschreibungen</li>
          <li>
            Verlust des Markenwerts über die lange Zeit im indischen Markt
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obligatorische Durchsetzung der Schema X Zertifizierung für
          Wärmebehandlungsausrüstung unter der OTR 2024 ist ein bedeutender
          Meilenstein bei der Verbesserung von Indiens Industriestandards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für Hersteller, Importeure und Exporteure der
          Wärmebehandlungsausrüstung ist der Prozess zur Erlangung der
          BIS-Zertifizierung für Wärmebehandlungsausrüstung, zur Erlangung der
          BIS-Lizenz für Wärmebehandlungsausrüstung und zur Verwendung des
          BIS-Standardzeichens für Wärmebehandlungsausrüstung nicht nur
          Compliance, sondern geht darum, sichere Produkte und verständliche
          zuverlässige Produktgedanken zu etablieren, die wettbewerbsfähig im
          Markt sind unter Erlangung eines regulierten Marktes.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Schema X Zertifizierung für Wärmebehandlungsausrüstung";

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
