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

const CranesGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Schema X Zertifizierung für Krane</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Das Bureau of Indian Standards (BIS) hat die obligatorische Schema X Zertifizierung für alle Arten von Kranen und deren Baugruppen, Unterbaugruppen und Komponenten eingeführt."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Krane, BIS Schema X Zertifizierung für Krane, Schema X Zertifizierung für Krane, BIS für Krane, OTR für Krane"
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
          content="BIS Schema X Zertifizierung für Krane in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Krane in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-krane"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Krane in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Krane in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-krane"
        />

        {/* Hreflang Tags for Multi-language Support - English is the default language */}
        <link
          rel="alternate"
          hreflang="en"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
        />
        <link
          rel="alternate"
          hreflang="ja"
          href="https://bis-certifications.com/bis-sukiimu-x-ninshoo-kurein"
        />
        <link
          rel="alternate"
          hreflang="zh"
          href="https://bis-certifications.com/bis-fang-an-x-qi-zhong-ji-ren-zheng"
        />
        <link
          rel="alternate"
          hreflang="fr"
          href="https://bis-certifications.com/certification-bis-schema-x-pour-ponts-roulants"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-krane"
        />
        <link
          rel="alternate"
          hreflang="vi"
          href="https://bis-certifications.com/chung-nhan-bis-scheme-x-cho-can-cau"
        />
        <link
          rel="alternate"
          hreflang="es"
          href="https://bis-certifications.com/certificacion-bis-scheme-x-para-gruas"
        />
        <link
          rel="alternate"
          hreflang="ko"
          href="https://bis-certifications.com/bis-seukim-x-injeung-keurein"
        />
        <link
          rel="alternate"
          hreflang="id"
          href="https://bis-certifications.com/sertifikasi-bis-skema-x-untuk-derek"
        />
        <link
          rel="alternate"
          hreflang="it"
          href="https://bis-certifications.com/certificazione-bis-schema-x-per-gru"
        />
        <link
          rel="alternate"
          hreflang="th"
          href="https://bis-certifications.com/kan-rap-rong-bis-phaen-x-samrab-khren"
        />
        <link
          rel="alternate"
          hreflang="nl"
          href="https://bis-certifications.com/bis-schema-x-certificering-voor-kranen"
        />
        <link
          rel="alternate"
          hreflang="ar"
          href="https://bis-certifications.com/shahadat-bis-mukhatat-x-lil-rafaat"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
        />
      </Helmet>

      <CranesGermanBreadcrumb />
      <CranesGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default CranesGerman;

const CranesGermanBreadcrumb = () => {
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
                <BreadcrumbPage>BIS Schema X für Krane</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CranesGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CranesGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const CranesGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS SCHEMA X FÜR KRANE
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Cranes.png"
            alt="BIS Schema X Zertifizierung für Krane"
            title="BIS Schema X Lizenz für Krane"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Krane werden hauptsächlich zum Heben und Transportieren von
          Materialien in Fertigung, Bau, Produktion und Bergbau verwendet. Da
          ihre Funktionalität sicherheitskritisch sein kann, können
          unqualifizierte oder schlechte Qualitätskrane zu Rutschen und Stürzen,
          Geräteausfällen oder kostspieligen Verlusten führen.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Angesichts dieser Gefahren hat das Bureau of Indian Standards (BIS)
          die BIS-Zertifizierung für Krane unter Schema – X Zertifizierung
          obligatorisch gemacht. Dies stellt sicher, dass die in Indien
          verwendeten Krane sicher, zuverlässig, effizient und von
          Weltklasse-Qualität sind.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Blog führen wir Sie über die Bedeutung der BIS Schema X
          Registrierung für Krane, die rechtlichen Aspekte von OTR für Krane und
          wie Sie eine BIS-Lizenz für Krane erhalten und das BIS-Standardzeichen
          für Krane markieren.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Warum BIS für Krane wichtig ist
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Krane werden weit verbreitet verwendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Gebäude- und Infrastrukturarbeiten</li>
          <li>Seehäfen, Schiffsanlagen und anderen Logistikzentren</li>
          <li>Fabriken und Montageanlagen</li>
          <li>Metallbergbau und schweres Materialhandling</li>
          <li>Kraftwerke und andere Industrien</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Ohne BIS für Krane können nicht zertifizierte Geräte verursachen:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Mechanische Ausfälle und Unfälle</li>
          <li>Reduzierte Verfügbarkeit und erhöhte Wartungskosten</li>
          <li>Verlust der Berechtigung für Regierungsprojekte</li>
          <li>
            Arbeiter und Infrastruktur sind Sicherheitsgefahren ausgesetzt
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Das BIS-Zeichen für Krane gibt sowohl Verbrauchern als auch
          Regulierungsbehörden Vertrauen, dass ein Produkt Indiens robusten
          Qualitäts- und Sicherheitsnormen entspricht.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist BIS Schema X Zertifizierung für Krane?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Schema X Zertifizierung für Krane unter BIS ist obligatorisch unter
          den BIS Konformitätsbewertungsverordnungen von 2018, die
          Produktzertifizierung für kritische Maschinen vorschreiben.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Hauptmerkmale von Schema X für Krane:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Erforderlich für sowohl inländische als auch ausländische Hersteller
          </li>
          <li>
            Anwendbar auf alle Hauptkategorien von Kranen & unter indischen
            Standards benachrichtigt
          </li>
          <li>
            Produkttests, Fabrikaudits und laufende Compliance-Bewertungen sind
            vorgeschrieben
          </li>
          <li>
            Gibt Lizenz für die Verwendung des BIS-Zeichens auf Kranen auf
            zertifizierten Produkten
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Krane
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Omnibus Technical Regulation (OTR) für Krane, die 2024 vom
          Ministerium für Schwerindustrie benachrichtigt wurde, strebt an,
          Zertifizierung vorzuschreiben.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Hersteller/Importeure von Kranen müssen spätestens bis
          zum 01. September 2026 eine BIS-Lizenz für Krane unter Schema X
          erhalten. Danach können nicht zertifizierte Krane nicht vermarktet
          oder importiert oder in öffentlichen Ausschreibungen in Indien
          verwendet werden.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Krane
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Verbesserte Sicherheit: Zertifizierte Krane minimieren mechanische
            Ausfälle und Unfälle.
          </li>
          <li>
            Marktvorteil: Regierungsstellen und Unternehmen bevorzugen
            BIS-zertifizierte Krane in E-Ausschreibungen und Massenprojekten.
          </li>
          <li>
            Verbraucher- & Auftragnehmervertrauen: BIS-Zeichen für Krane schafft
            Vertrauen in Qualität und Zuverlässigkeit.
          </li>
          <li>
            Globaler Markteintritt: Für Überseehersteller ermöglicht die
            BIS-Lizenz für Krane problemloses Eindringen in den regulierten
            indischen Markt.
          </li>
          <li>
            Compliance mit indischem Recht: Verhindert Strafen, Einziehungen und
            Ausschluss von Regierungsverträgen.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Cranes Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Kranen in Schema X Zertifizierung enthalten
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Krane sind unter der Schema X Zertifizierung aufgelistet und sind von
          verschiedenen Arten, z.B.:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Turmkrane</li>
          <li>Mobile Krane</li>
          <li>Portalkrane und Goliath-Krane</li>
          <li>OH/BR Krane</li>
          <li>Raupenkrane</li>
          <li>Auslegerkrane</li>
          <li>Schwimmkrane</li>
          <li>Industrielle und Werkstattkrane</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Jede Variante sollte verpflichtet sein, angemessene indische Standards
          (IS-Codes) einzuhalten wie IS 4573:2020 für kraftbetriebene mobile
          Krane Spezifikation und IS/ISO 15442:2012 für Krane -
          Sicherheitsanforderungen für Ladekrane.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Der Gerätetyp muss den relevanten indischen Standards (IS-Codes) für
          Design, Tragfähigkeit, Sicherheit und Leistung entsprechen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Verfahren zur Erlangung der BIS-Lizenz für Krane
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Relevante IS-Standards identifizieren: Identifizieren Sie den
            indischen Standard, der für Ihren Krantyp gilt.
          </li>
          <li>
            Tests in BIS-anerkannten Laboren: Es ist obligatorisch, Sicherheits-
            und Wirksamkeitstests durchzuführen.
          </li>
          <li>
            Fabrikinspektion: BIS führt Inspektionen von Produktionsstätten und
            Qualitätssystemen durch.
          </li>
          <li>
            Antrag & Dokumentation: Präsentieren Sie technische Berichte,
            Testergebnisse und Qualitätshandbücher.
          </li>
          <li>
            BIS-Lizenz für Krane: Nach Genehmigung hat der Hersteller das
            Privileg, das BIS-Zeichen für Krane anzuwenden.
          </li>
          <li>
            Laufende Compliance: Regelmäßige Audits und Inspektionen
            gewährleisten laufende Compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Was passiert, wenn man OTR für Krane nicht befolgt und bis zum 1.
          September 2026 keine BIS-Zertifizierung für Krane erhält?
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Verbot des Verkaufs und Imports von nicht zertifizierten Kranen
          </li>
          <li>Produktbeschlagnahmungen und hohe Geldstrafen</li>
          <li>Disqualifikation von Regierungs- und PSU-Ausschreibungen</li>
          <li>Langfristige negative Markenauswirkung</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Durchsetzung der BIS Schema X Zertifizierung wird ein bedeutender
          Meilenstein sein, der Sicherheit, Zuverlässigkeit verbessert und
          gemeinsame Industriestandards in Indien bietet.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Für Kranhersteller, Importeure, Exporteure ist es wichtig, eine
          BIS-Lizenz für Krane zu haben und kann sich über ein
          Online-Bewerbungsportal für BIS-Registrierung von Kranen bewerben, um
          dem Standard zu entsprechen, Verbrauchervertrauen aufzubauen und auch
          potenzielle Konflikte mit BIS oder der indischen Regierung zu
          vermeiden.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const CranesGermanMainContentRight = () => {
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
  const currentPageName = "SchemaX Produkt - BIS Zertifizierung für Krane";

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
