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

const CompressorsGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Kompressoren</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung für Kompressoren, Baugruppen oder Komponenten ist unter der Omnibus Technical Regulation Order 2024 obligatorisch und verbessert Produktsicherheit und Standardisierung in Indien"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Kompressoren, BIS Schema X Zertifizierung für Kompressoren, Schema X Zertifizierung für Kompressoren, BIS für Kompressoren, OTR für Kompressoren"
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
          content="BIS Schema X Zertifizierung für Kompressoren in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Kompressoren in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-kompressoren"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Kompressoren in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Kompressoren in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-kompressoren"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-konpuresa"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-ya-suo-ji-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-compresseurs"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-kompressoren"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-nen-khi"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-compresores"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-apchukgi"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-kompresor"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-compressori"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-kompresor"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-compressoren"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-daghitat"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
        />
      </Helmet>

      <CompressorsGermanBreadcrumb />
      <CompressorsGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default CompressorsGerman;

const CompressorsGermanBreadcrumb = () => {
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
                <BreadcrumbPage>BIS Schema X für Kompressoren</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CompressorsGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CompressorsGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const CompressorsGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS SCHEMA X FÜR KOMPRESSOREN
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Compressors.png"
            title="BIS Schema X Lizenz für Kompressoren"
            alt="BIS Schema X Zertifizierung für Kompressoren"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Kompressoren sind wichtige Geräte in verschiedenen Industrien wie
          Kältetechnik, HVAC, Petrochemie, Fertigung, Lebensmittelverarbeitung
          und pharmazeutischen Anwendungen. Die aufstrebende indische Industrie
          wächst in rasantem Tempo und Qualität und Sicherheit von Kompressoren
          ist von größter Bedeutung.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Um dies sicherzustellen, hat das Bureau of Indian Standards (BIS) die
          BIS-Zertifizierung für Kompressoren unter Schema X Zertifizierung
          implementiert. Diese Zertifizierung stellt sicher, dass jeder
          Kompressor, der in die indische Region eingeführt wird, bestimmten
          Sicherheits-, Leistungs- und Effizienzstandards entspricht.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Leitfaden bieten wir BIS Schema X Zertifizierung für
          Kompressoren und OTR für Kompressoren und wie Hersteller die
          BIS-Lizenz für Kompressoren erhalten können, um das BIS-Zeichen für
          Kompressoren in Indien zu verwenden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Compressors is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS für Kompressoren wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Kompressoren werden verwendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Klimaanlagen-/Kältesysteme</li>
          <li>Gasübertragungsleitungen und -speicherung</li>
          <li>Öl- und Gasverarbeitungsanlagen</li>
          <li>Stromerzeugungsanlagen und chemische Industrieanlagen</li>
          <li>Produktion von Lebensmitteln und Getränken</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder Typ sollte die anwendbaren indischen Standards (IS-Codes) wie IS
          17093:2019 erfüllen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In Abwesenheit von BIS für Kompressoren könnten minderwertige oder
          nicht markierte Produkte führen zu:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Ausfall, Wartungsperioden und Leerlaufzeit</li>
          <li>
            Verschwenderische Energieproduktion gegen hohe
            Energienutzungsrechnungen
          </li>
          <li>Sicherheitsrisiken wie Überhitzung oder Lecks</li>
          <li>Verlust von Reputation und monetären Schäden</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Daher ist das BIS-Zeichen für Kompressoren, für das ISI-Zertifizierung
          durchgeführt wurde, eine Garantie für Sicherheit, Zuverlässigkeit und
          Qualität.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Kompressoren?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS Schema X Zertifizierung für Kompressoren ist das
          Konformitätsbewertungsschema in Indien unter den BIS
          Konformitätsbewertungsverordnungen von 2018. Es soll überprüfen, dass
          sowohl inländische als auch ausländische Hersteller den indischen
          Qualitätsstandards entsprechen.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Merkmale des Schema X Zertifikats für Kompressoren:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Obligatorisch für alle Hersteller (sowohl indische als auch
            ausländische)
          </li>
          <li>
            Deckt verschiedene Arten von Kompressoren ab, die unter indischen
            Standards benachrichtigt wurden
          </li>
          <li>
            Bietet Drittanbieter-Tests, Fabrikinspektionen und periodische
            Compliance-Überprüfungen
          </li>
          <li>
            Erlaubt die Verwendung des BIS-Zeichens für Kompressoren auf den
            Produkten des Lizenznehmers als zertifizierte Produkte
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Kompressoren
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Omnibus Technical Regulation (OTR) für Kompressoren, die 2024 vom
          Ministerium für Schwerindustrie veröffentlicht wurde, schreibt Schema
          X Zertifizierung für Kompressoren vor.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance-Deadline: Bis zum 1. September 2026 müssen alle Hersteller
          und Importeure eine gültige BIS-Lizenz für Kompressoren unter Schema –
          X haben. Jede Nicht-Compliance führt zu einem vollständigen Verbot des
          Verkaufs und Imports von nicht zertifizierten Kompressoren in Indien.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Kompressoren
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheit & Leistung: Hilft, Gefahren wie Lecks, Überhitzung und
            Maschinenausfälle zu vermeiden.
          </li>
          <li>
            Marktzugang: Von BIS zertifizierte Kompressoren können in
            öffentlichen Ausschreibungen und Regierungsprojekten verwendet
            werden.
          </li>
          <li>
            Verbrauchervertrauen: Das BIS-Zeichen für Kompressoren gibt einem
            Käufer das Vertrauen, dass das Produkt den indischen Standards
            entspricht.
          </li>
          <li>
            Wettbewerbsvorteil: Nur zertifizierte Marken gewinnen mehr Vertrauen
            und Marktpräferenz.
          </li>
          <li>
            Zugänglicher Markteintritt internationaler Marken: Eine BIS-Lizenz
            für Kompressoren erleichtert ausländischen Herstellern den einfachen
            Zugang zum indischen Markt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Compressor Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Kompressoren unter BIS Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Zertifizierung ist für verschiedene Arten von
          Kompressoren verfügbar wie:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Verdrängungs-Kolbenkompressoren</li>
          <li>Rotationskompressoren</li>
          <li>Schraubenkompressoren</li>
          <li>Turbokompressoren</li>
          <li>Axialkompressoren</li>
          <li>Industrielle und tragbare Luftkompressoren</li>
          <li>Klimaanlagen- und Kältekompressoren</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Die verschiedenen Techniken von Kompressoren müssen den jeweiligen
          indischen Standards entsprechen, die die Anforderungen für Leistung,
          Energieverbrauch, Materialqualität und Sicherheit festlegen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Schritt-für-Schritt BIS-Lizenz für Kompressoren – Wie bewerben?
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Anwendbare Standards identifizieren: Finden Sie den entsprechenden
            IS-Code Ihres Kompressors.
          </li>
          <li>
            Produkttests: Führen Sie obligatorische Leistungs-, Sicherheits- und
            Energieeffizienztests in BIS-anerkannten Laboren durch.
          </li>
          <li>
            Fabrikinspektion: BIS-Personal führt Vor-Ort-Besuche durch, um
            Fertigungsverfahren und Qualitätskontrollmethoden zu überprüfen.
          </li>
          <li>
            Dokumentation & Antrag: Fügen Sie Testberichte, technische
            Spezifikationen und Qualitätshandbücher zu Ihrer BIS-Bewerbung
            hinzu.
          </li>
          <li>
            Ausstellung der BIS-Lizenz für Kompressoren: Bei Annahme erhält der
            Hersteller das Recht, das BIS-Zeichen für Kompressoren zu verwenden.
          </li>
          <li>
            Laufende Compliance: Regelmäßige Überwachungsaudits & Produkttests
            werden von BIS für fortgesetzte Compliance durchgeführt.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die bis zum 1. September 2026 keine BIS-Zertifizierung für
          Kompressoren unter der OTR für Kompressoren erhalten, unterliegen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verkauf/Import von nicht typgeprüften Kompressoren nicht erlaubt
          </li>
          <li>Einziehung von nicht konformen Gütern und Geschäftsstrafen</li>
          <li>Verbot von Regierungsausschreibungen und PSU-Geschäften</li>
          <li>Indischer Markt verliert Vertrauen</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Umsetzung der BIS Schema X Zertifizierung für Kompressoren durch
          OBR für Kompressoren (2024) ist ein bedeutender Schritt vorwärts für
          Industriesicherheit, Energieeffizienz und Qualitätssicherung in
          Indien.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Hersteller, Importeure und Exporteure, die den Prozess der Erlangung
          des BIS-Zertifikats für Kompressoren durchlaufen und das
          BIS-Zertifikat für Kompressoren sichern, verdienen das Recht, Teil
          dieses Marktes zu sein, indem sie sicherstellen, dass die Produkte,
          die sie dem indischen Verbraucher anbieten, als sicher zu verwenden
          gelten, weniger Umweltrisiken haben und von guter Qualität sind.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const CompressorsGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Kompressoren";

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
