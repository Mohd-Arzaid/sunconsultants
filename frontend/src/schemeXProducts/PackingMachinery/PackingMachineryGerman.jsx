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

const PackingMachineryGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Verpackungsmaschinen</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung für alle Arten von Maschinen zum Füllen, Verschließen, Versiegeln, Etikettieren von Flaschen, Verpacken oder Wickeln und (oder) deren Baugruppen/Unterbaugruppen/Komponenten markiert einen bedeutenden Schritt zur Standardisierung von Sicherheit und Qualität in Indiens Fertigungssektor."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Verpackungsmaschinen, BIS Schema X Zertifizierung für Verpackungsmaschinen, Schema X Zertifizierung für Verpackungsmaschinen, BIS für Verpackungsmaschinen, OTR für Verpackungsmaschinen"
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
          content="BIS Schema X Zertifizierung für Verpackungsmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Verpackungsmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Verpackungsmaschinen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Verpackungsmaschinen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
        />

        {/* Hreflang Tags for Multi-language Support */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery"
        />
        <link
          rel="alternate"
          hrefLang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-machines-de-conditionnement"
        />
        <link
          rel="alternate"
          hrefLang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
        />
        <link
          rel="alternate"
          hrefLang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-moc-dong-goi"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-maquinaria-de-empaque"
        />
        <link
          rel="alternate"
          hrefLang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-pojang-gigye"
        />
        <link
          rel="alternate"
          hrefLang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-mesin-pengemasan"
        />
        <link
          rel="alternate"
          hrefLang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-macchinari-per-imballaggio"
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-pakkingu-kikai"
        />
        <link
          rel="alternate"
          hrefLang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-bao-zhuang-ji-xie-ren-zheng"
        />
        <link
          rel="alternate"
          hrefLang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-pack"
        />
        <link
          rel="alternate"
          hrefLang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-verpakkingsmachines"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-maadat-al-taabia-wa-al-taghlif"
        />
      </Helmet>

      <PackingMachineryGermanBreadcrumb />
      <PackingMachineryGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default PackingMachineryGerman;

const PackingMachineryGermanBreadcrumb = () => {
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
                  BIS Schema X Zertifizierung für Verpackungsmaschinen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PackingMachineryGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const PackingMachineryGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Schema X Zertifizierung für Verpackungsmaschinen
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-filling-closing-sealing-labelling.png"
            title="BIS Lizenz Maschinen zum Füllen, Verschließen, Versiegeln, Etikettieren"
            alt="BIS Schema X Zertifizierung für Verpackungsmaschinen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Verpackungsmaschinen sind für Industrien in den Bereichen
          Lebensmittel, Getränke, Pharmazie, Chemie, Konsumgüter und Logistik
          unerlässlich. Dies sind die Maschinen, die für die ordnungsgemäße,
          sichere und qualitativ hochwertige Verpackung der Produkte sorgen.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Um Sicherheit, Zuverlässigkeit und Rentabilität zu gewährleisten, hat
          BIS (Bureau of Indian Standards) die BIS Schema X Zertifizierung für
          Verpackungsmaschinen obligatorisch gemacht. Diese Zertifizierung wird
          bereitgestellt, um zu garantieren, dass alle Verpackungsmaschinen, ob
          sie in Indien verkauft oder nach Indien importiert werden, den
          geltenden nationalen Qualitätsstandards entsprechen.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Blog beschreiben wir die Bedeutung der Schema X
          Zertifizierung für Verpackungsmaschinen, die Rolle der OTR für
          Verpackungsmaschinen und den Prozess zur Erlangung einer BIS-Lizenz
          und des BIS-Standardzeichens für Verpackungsmaschinen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS-Zertifizierung für Verpackungsmaschinen wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Verpackungsmaschinen werden in allen Unternehmen für folgende Zwecke
          eingesetzt:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Lebensmittel- und Getränkeverpackung</li>
          <li>Medikamente und medizinische Produkte</li>
          <li>Verpackung in chemischen und industriellen Industrien</li>
          <li>Konsum- und Einzelhandelsprodukte</li>
          <li>Verpackungslösungen für den Exportmarkt</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In Abwesenheit von BIS für Verpackungsmaschinen: Nicht von BIS
          zertifizierte Produkte können zu folgenden Problemen führen:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Ausfälle bei der Verpackung, Produktintegrität und Kontamination
          </li>
          <li>Sicherheitsrisiken in Lebensmittel- und Pharmasegmenten.</li>
          <li>Ineffizienter Betrieb und Ausfallzeiten</li>
          <li>Nichteinhaltung der staatlichen Einkaufsregeln</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das BIS-Zeichen auf Verpackungsmaschinen versichert dem Käufer
          Qualität, Sicherheit und lange Lebensdauer.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist X-Schema Zertifizierung für Verpackungsmaschinen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Verpackungsmaschinen sind Teil II der Schema X Zertifizierung unter
          den BIS Konformitätsbewertungsverordnungen 2018, und die Einhaltung
          ist für indische sowie ausländische Hersteller obligatorisch.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Wesentliche Merkmale der BIS Schema X Zertifizierung für
          Verpackungsmaschinen:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Geeignet für jede Verpackungsmaschine (manuell, halbautomatisch &
            automatisch)
          </li>
          <li>
            Notwendigkeit, Produkte zu testen, Fabriken zu auditieren und
            Qualität zu kontrollieren.
          </li>
          <li>Obligatorisch für Verkäufe und Importe in Indien</li>
          <li>
            Gewährt die Erlaubnis, das BIS-Zeichen für Verpackungsmaschinen auf
            zertifizierter Ausrüstung zu verwenden
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR für Verpackungsmaschinen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Der Compliance-Rahmen für den Hersteller ist unter der Omnibus
          Technical Regulation (OTR) für Verpackungsmaschinen vorgeschrieben,
          die vom Ministerium für Schwerindustrie im Jahr 2024 herausgegeben
          wurde.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Verpackungsmaschinen müssen mit BIS Schema X Zertifikat
          abgedeckt sein und alle Verpackungsmaschinen müssen bis zum 01.09.2026
          eine BIS-Lizenz für Verpackungsmaschinen erhalten. Die
          Verpackungsmaschine, die nicht zertifiziert ist, kann ab dem 1.
          September 2026 nicht mehr hergestellt, verkauft und nach Indien
          importiert werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS Schema X für Verpackungsmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheit & Hygiene: Zertifizierte Verpackungsmaschinen vermeiden
            auch Kontaminationsprobleme (Lebensmittel und Pharma).
          </li>
          <li>
            Qualitätssicherung: Hält Maschinen reibungslos und effizient am
            Laufen.
          </li>
          <li>
            Marktvorteil: Eine BIS Verpackungsmaschinen-Lizenz ist eine häufig
            erforderliche Lizenzierungsanforderung für
            Regierungsausschreibungen.
          </li>
          <li>
            Verbrauchervertrauen: Das BIS (Bureau of Indian Standards) Zeichen
            für Verpackungsmaschinen spiegelt Qualität wider und gewährleistet
            ein Maß an Glaubwürdigkeit.
          </li>
          <li>
            Globaler Marktzugang: Ausländische Marken haben durch
            Produktregistrierung einfachen Zugang zu Indiens reguliertem Markt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Verpackungsmaschinen unter Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Verpackungsmaschinen umfasst eine
          breite Vielfalt von Verpackungsmaschinen.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Lebensmittel- und Getränkeverpackungsmaschinen</li>
          <li>Blister- und Streifenverpackungsmaschinen für Pharma</li>
          <li>Wickel-, Versiegelungs- und Füllmaschinen</li>
          <li>Kartonierungs- und Etikettiermaschinen</li>
          <li>Vakuum- und Schrumpfverpackungssysteme</li>
          <li>Schüttgut- und Industrie-Verpackungsmaschinen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Art von Verpackungsmaschinen muss den Anforderungen der
          entsprechenden indischen Standards (IS-Codes) entsprechen,
          einschließlich IS 16819:2018/ISO 12100: 2010 Sicherheit von Maschinen
          Allgemeine Grundsätze für Design - Risikobewertung und
          Risikominderung).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Maschinentyp sollte entsprechenden indischen Standards für Leistung,
          Sicherheit, Sauberkeit und Effizienz entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prozess für BIS-Lizenz für Verpackungsmaschinen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Anwendbare Standards identifizieren: Identifizieren Sie geeignete
            IS-Codes für Ihre Klasse von Verpackungsmaschinen.
          </li>
          <li>
            Tests in BIS-anerkannten Laboren: Obligatorische Leistungs-,
            Hygiene- und Sicherheitstests.
          </li>
          <li>
            Fabrikinspektion: BIS-Personal führt persönliche Audits am
            Produktionsstandort durch.
          </li>
          <li>
            Antrag & Dokumentation: Hochladen von Testberichten, technischen
            Spezifikationen und Qualitätshandbüchern.
          </li>
          <li>
            Ausstellung der BIS-Lizenz für Verpackungsmaschinen: Kann nach
            Erhalt der Genehmigung für Verpackungsmaschinen nach Verlassen der
            Fabrikräumlichkeiten verwendet werden.
          </li>
          <li>
            Laufende Compliance: Während zufälliger BIS-Checks und
            Überwachungsprozesse zusammen mit der Überprüfung von Produktproben
            aus den Regalen wird rund um die Uhr Konsistenz aufrechterhalten.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wenn Sie die OTR für Verpackungsmaschinen nicht erfüllen und bis zum
          1. September 2026 nicht zertifiziert sind:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot der Herstellung/des Imports von nicht zertifizierter
            Ausrüstung
          </li>
          <li>Schwere Geldstrafen, Produktbeschlagnahmung</li>
          <li>Ausschluss von PSU-Projekten und öffentlichen Ausschreibungen</li>
          <li>Anhaltender Markenrufschaden und Verlust der Glaubwürdigkeit</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung von Verpackungsmaschinen unter OTR für
          Verpackungsmaschinen (2024) ist eine wichtige Initiative zur
          Sicherheits- und Qualitätsstandardisierung im industriellen
          Verpackungsbereich des Landes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Importeure/Exporteure und Hersteller profitieren bereits von
          BIS-Lizenz für Verpackungsmaschinen und BIS-Kennzeichnung als
          strategisches Werkzeug, das Marktzugang und Vertrauenswürdigkeit
          bietet und ihnen hilft, sich in einem hyperregulierten Markt zu
          behaupten.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const PackingMachineryGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Schema X Zertifizierung für Verpackungsmaschinen";

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
