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

const DieselGeneratorGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Dieselgeneratoren</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Die BIS Schema X Zertifizierung für Dieselgeneratoren und deren Komponenten ist ein zentraler regulatorischer Schritt zur Standardisierung und Sicherung der Qualität und Sicherheit in Indien."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Dieselgeneratoren, BIS Schema X Zertifizierung für Dieselgeneratoren, Schema X Zertifizierung für Dieselgeneratoren, BIS für Dieselgeneratoren, OTR für Dieselgeneratoren"
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
          content="BIS Schema X Zertifizierung für Dieselgeneratoren in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Dieselgeneratoren in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Dieselgeneratoren in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Dieselgeneratoren in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-dizeru-hatsudenki"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-chai-you-fa-dian-ji-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-generateurs-diesel"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-may-phat-dien-diesel"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-generadores-diesel"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-dijel-baljeongi"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-generator-diesel"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-generatori-diesel"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khrueang-khuean-ngan-fa-fa-diesel"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-dieselgeneratoren"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-mawalid-al-dizil"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
        />
      </Helmet>

      <DieselGeneratorGermanBreadcrumb />
      <DieselGeneratorGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default DieselGeneratorGerman;

const DieselGeneratorGermanBreadcrumb = () => {
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
                  BIS Schema X Zertifizierung für Dieselgeneratoren
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const DieselGeneratorGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const DieselGeneratorGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS SCHEMA X ZERTIFIZIERUNG FÜR DIESELGENERATOR
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="BIS Schema X Zertifizierung für Dieselgeneratoren"
            title="BIS Schema X Lizenz für Dieselgenerator"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Dieselgeneratoren werden in gewerblichen Einrichtungen, Industrien,
          Krankenhäusern, Infrastrukturprojekten, Wohnprojekten und an vielen
          weiteren Orten als sekundäre Stromquelle verwendet. Als
          wirtschaftliche Vermögenswerte mit der Verantwortung, die Kontinuität
          der Stromversorgung zu gewährleisten, ist es wichtig, dass die
          Maschinen sicher, effizient und den nationalen Standards entsprechend
          sind.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In einem Bemühen, dies zu tun, ist die BIS-Zertifizierung des
          Dieselgenerators in der Schema X Zertifizierung des Bureau of Indian
          Standards (BIS) enthalten. Dieses Schema wurde eingeführt, um
          sicherzustellen, dass sowohl nationale als auch globale Hersteller die
          strengen und strikten indischen Standards erfüllen, bevor sie ihre
          Produkte in Indien verkaufen.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Dieser Beitrag erläutert die Bedeutung der BIS Schema X Zertifizierung
          von Dieselgeneratoren, das OTR-Mandat von 2024 und wie Hersteller die
          Zertifizierung in Anspruch nehmen können.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Bedeutung von BIS für Dieselgeneratoren
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dieselgeneratoren werden verwendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Fabriken und Arbeitsstätten</li>
          <li>Krankenhäusern und Notfallhelfern</li>
          <li>Rechenzentren und IT-Hubs</li>
          <li>Gewerblichen und Wohngebäuden</li>
          <li>Öffentlichen Arbeiten und Versorgungsunternehmen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Risiken sind enorm, wenn die Dieselgeneratoren nicht ordnungsgemäß
          zertifiziert sind:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Messgeräteausfälle (mechanisch und elektrisch) führen zu
            Versorgungsmangel
          </li>
          <li>
            Hohes Risiko von Feuer und Sicherheitsgefahren in nicht konformen
            Einheiten
          </li>
          <li>Zu hohe Emissionen und energieineffizient</li>
          <li>Rechtliche Barrieren, Ausschluss von Ausschreibungen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Die Dieselgeneratoren können leicht die Schema X Zertifizierung
          erfüllen, die es den Herstellern ermöglicht, Produkte zu verkaufen,
          die sicher, zuverlässig und umweltfreundlich für die Verwendung in
          Indien sind.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung von Dieselgeneratoren?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Schema X Zertifizierung für Dieselgeneratoren ist ein offizieller
          Zertifizierungsprozess und ein System, das durch die BIS
          Konformitätsbewertungsverordnungen 2018 etabliert wurde. Es schreibt
          strenge Tests und Qualitätsbewertungen vor, um die Einhaltung
          indischer Standards zu validieren.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Highlights der Schema X Zertifizierung:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Alle Hersteller - sowohl indische als auch ausländische -
            Obligatorische Anforderung
          </li>
          <li>
            Anwendbar für alle Arten von Dieselgeneratoren mit unterschiedlicher
            Kapazität
          </li>
          <li>Einschließlich Produkttests in BIS-autorisierten Laboren</li>
          <li>
            Fabrikaudit, Werkstattbesuche und Produktionsprozessprüfung, um
            unabhängig Vor-Ort-Fabrikinspektionen durchzuführen, um Qualitäts-
            und Sicherheitsstandards zu gewährleisten.
          </li>
          <li>
            Bietet die Lizenz zur Verwendung des BIS-Standardzeichens bei
            Lizenzierung
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Dieselgeneratoren (DGs)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Ministerium für Schwerindustrie hat 2024 eine Benachrichtigung für
          die OTR für Dieselgeneratoren herausgegeben.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Durchsetzungsdatum: Alle Produzenten und Importeure müssen bis zum 1.
          September 2026 zertifiziert werden. Ab diesem Datum wird die
          Produktion, der Verkauf oder Import von nicht zertifizierten
          Dieselgeneratoren in Indien verboten.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Dieselgeneratoren
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheitsgarantie: Minimiert mechanische Ausfälle, basierend auf
            Brandschutztechnologie zur Verhinderung von Feuer, Kurzschlüssen und
            Unfällen.
          </li>
          <li>
            Umwelt-Compliance: Stellt sicher, dass energieeinsparende und
            emissionsreduzierende Standards befolgt werden.
          </li>
          <li>
            Marktzugang: OTR für Dieselgeneratoren - Zertifizierung ist
            obligatorisch für den Verkauf in Indien
          </li>
          <li>
            Kundenvertrauen: Das BIS-Standardzeichen gewährleistet hohe
            Zuverlässigkeit und Sicherheit.
          </li>
          <li>
            Ausschreibungsberechtigung: Für Regierungs-/PSU-Verträge müssen
            Produkte zertifiziert sein.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Dieselgeneratoren unter Schema X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Dieselgeneratoren-Zertifizierungsschema X umfasst die folgenden
          Gruppen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mobile Hausgeneratoren mit Diesel</li>
          <li>Gewerbliche Dieselgeneratoren (hohe Kapazität)</li>
          <li>Notstrom- und Standby-Stromversorgungsgeneratoren</li>
          <li>
            Geräuschlose Dieselgeneratoren für gewerbliche Anwendung und
            städtische Nutzung
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Jeder Untertyp muss den anwendbaren indischen Standards (IS-Codes)
          entsprechen, wie IS 16819:2018 / ISO 12100:2010 (Sicherheit von
          Maschinen - Allgemeine Gestaltungsleitsätze - Risikobeurteilung &
          Risikominderung). Jeder Typ muss seine eigenen indischen Standards
          erfüllen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren für BIS-Zertifizierung von Dieselgeneratoren
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Anwendbare Standards identifizieren: Finden Sie die IS-Codes für den
            Typ des Generators heraus.
          </li>
          <li>
            Produkttests: Führen Sie Sicherheits-, Leistungs- und Emissionstests
            in BIS-anerkannten Laboratorien durch.
          </li>
          <li>
            Fabrikaudit: BIS-Beamte untersuchen den Prozess der
            Qualitätskontrolle der Fertigung.
          </li>
          <li>
            Dokumentationseinreichung: Stellen Sie Spezifikationen,
            Testergebnisse und Compliance-Dokumentation zur Verfügung.
          </li>
          <li>
            Lizenzgewährung: Bei Genehmigung erteilt BIS eine Lizenz und erlaubt
            die Verwendung des Standardzeichens.
          </li>
          <li>
            Laufende Compliance: Audits und Produktinspektionen werden
            durchgeführt, um sicherzustellen, dass die Zertifizierung gültig
            bleibt.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Versäumnis, die BIS-Zertifizierung für Dieselgeneratoren der OTR
          für Dieselgeneratoren einzuhalten, kann zu folgenden Folgen führen:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs, Imports und der Herstellung von nicht
            zertifizierten Geräten.
          </li>
          <li>Güter werden beschlagnahmt und finanzielle Strafen verhängt</li>
          <li>Ungeeignetheit für Regierungsverträge</li>
          <li>Dauerhafte reputations- und finanzielle Schäden</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS Schema X Zertifizierung für Dieselgeneratoren gemäß OTR für
          Dieselgeneratoren (2024) ist ein wichtiger Meilenstein auf dem Weg zur
          Verbesserung der Produktsicherheit, Zuverlässigkeit und Effizienz in
          der indischen Strom-Backup-Industrie.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für die Hersteller/Importeure ist die Schema X Zertifizierung für
          Dieselgeneratoren nicht nur eine rechtliche Notwendigkeit, sondern ein
          Wettbewerbsvorteil, der Glaubwürdigkeit, Einhaltung und Marktvertrauen
          widerspiegelt.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const DieselGeneratorGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Dieselgeneratoren";

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
