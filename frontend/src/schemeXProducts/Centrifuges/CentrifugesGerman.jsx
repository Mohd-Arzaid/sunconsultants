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

const CentrifugesGerman = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Schema X Zertifizierung für Zentrifugen und Filter- oder
          Reinigungsmaschinen
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Schema X Zertifizierung für Zentrifugen, Filter- oder Reinigungsmaschinen für Flüssigkeiten und Gase und/oder deren Baugruppen, Unterbaugruppen und Komponenten ist ein entscheidender regulatorischer Meilenstein für den Industrieanlagensektor"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Zertifizierung für Zentrifugen, BIS Schema X Zertifizierung für Zentrifugen, Schema X Zertifizierung für Zentrifugen, BIS für Zentrifugen, OTR für Zentrifugen"
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
          content="BIS Schema X Zertifizierung für Zentrifugen in Indien | Vollständiger Leitfaden"
        />
        <meta
          property="og:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Zentrifugen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Schema X Zertifizierung für Zentrifugen in Indien | Vollständiger Leitfaden"
        />
        <meta
          name="twitter:description"
          content="Erfahren Sie alles über BIS Schema X Zertifizierung für Zentrifugen in Indien. Verstehen Sie OTR 2024 Compliance, BIS Lizenzprozess, ISI Markenanforderungen und wie Sie vor der September 2026 Deadline zertifiziert werden"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
        />
      </Helmet>

      <CentrifugesGermanBreadcrumb />
      <CentrifugesGermanMainContent />
      <ServicesGerman />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default CentrifugesGerman;

const CentrifugesGermanBreadcrumb = () => {
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
                  BIS Zertifizierung für Zentrifugen
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CentrifugesGermanMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesGermanMainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const CentrifugesGermanMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS ZERTIFIZIERUNG FÜR ZENTRIFUGEN
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-centrifuges-filtering-or-purifying-machinery.png"
            title="BIS Schema X Lizenz für Zentrifugen"
            alt="BIS Schema X Zertifizierung für Zentrifugen und Filter- oder Reinigungsmaschinen"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Zentrifugen sind lebenswichtige Maschinen, die weit verbreitet in
          Laboratorien, Pharmazeutik, Lebensmittelverarbeitung, Biotechnologie,
          Petrochemie und Bergbauindustrie eingesetzt werden. Diese Maschinen
          arbeiten durch Rotation, und die schnelle Drehung trennt Gemische,
          diese Trennung ist wesentlich für präzise, sichere und schnelle
          Verarbeitung.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Mit breiteren Anwendungen in verschiedenen Industrien ist es kritisch,
          die Zuverlässigkeit und Sicherheit von Zentrifugen zu erhöhen. Um die
          Qualitätskontrollparameter für Zentrifugen aufrechtzuerhalten, hat das
          BIS ein Schema der BIS-Zertifizierung eingeführt, bekannt als Schema-X
          Zertifizierung für Zentrifugen.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In diesem Beitrag werden wir behandeln: Was ist BIS Schema X
          Zertifizierung für Zentrifugen, Was ist OTR für Zentrifugen, und Wie
          man eine BIS-Lizenz für Zentrifugen mit dem offiziellen BIS-Zeichen
          für Zentrifugen erhält.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Bedeutung von BIS für Zentrifugen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Zentrifugen werden verwendet in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pharmazeutik und Biotechnologie-Sektor</li>
          <li>Lebensmittelverarbeitung und Getränkeherstellung</li>
          <li>Ölraffinerien und petrochemische Industrien</li>
          <li>Medizinische Laboratorien</li>
          <li>Umwelt- und Wasseraufbereitung</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das Fehlen von BIS für Zentrifugen könnte zur Verwendung von
          minderwertiger Qualität oder nicht zertifizierten Zentrifugen führen,
          was folgendes zur Folge haben kann:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Mechanische Ausfallrisiken</li>
          <li>Möglichkeit der Kontamination in empfindlichen Sektoren</li>
          <li>Verlorene Zeit und verlorene Einnahmen</li>
          <li>Niedrige Effizienz und erhöhter Energieverbrauch</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Eine BIS-zertifizierte Zentrifuge mit BIS-Zeichen für Zentrifugen
          impliziert Sicherheit, Qualität und Vertrauen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Was ist das BIS Schema X Zertifikat für Zentrifugen?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS Schema X Zertifizierung von Zentrifugen ist das obligatorische
          Zertifizierungsschema unter den BIS Konformitätsbewertungsverordnungen
          von 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Schema X Zertifizierung für Zentrifugen: Hauptmerkmale:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Anwendbar auf indische sowie ausländische Hersteller</li>
          <li>
            Gilt für alle Arten von Zentrifugen, die in Industrie- und
            F&E-Laboren zu finden sind
          </li>
          <li>
            Angemessene Mengen an Produkttests, Audits und
            Compliance-Validierung sind ein Muss
          </li>
          <li>
            Ermöglicht es Herstellern, sich für BIS-Registrierung auf der
            Grundlage der oben erwähnten Zertifizierung für Zentrifugen zu
            bewerben.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR für Zentrifugen
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Das OTR für Zentrifugen wurde 2024 vom Ministerium für Schwerindustrie
          veröffentlicht, das Schema X Zertifizierung erfordert.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: Alle Hersteller und Importeure müssen bis zum 1. September
          2026 eine gültige BIS-Lizenz für Zentrifugen unter Schema X erhalten.
          "Dies wird verhindern, dass nicht zertifizierte Zentrifugen verkauft,
          importiert oder an Ausschreibungen im ganzen Land teilgenommen
          werden", sagten Regierungsbeamte.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Vorteile der BIS-Zertifizierung für Zentrifugen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Sicherheit & Compliance: Vermeidet Unfälle aufgrund mechanischer
            Ausfälle bei hohen Geschwindigkeiten.
          </li>
          <li>
            Qualität & Zuverlässigkeit: Zertifizierte Zentrifugen arbeiten mit
            Dezimationsgenauigkeit und Präzision.
          </li>
          <li>
            Marktzugang: Eine BIS-Zentrifugen-Lizenz ist typischerweise für
            Beschaffungen durch öffentliche Stellen erforderlich.
          </li>
          <li>
            Verbrauchervertrauen: BIS-Zeichen für Zentrifugen gibt Kunden
            Auskunft über Produktqualität und Haltbarkeit.
          </li>
          <li>
            Wettbewerbsvorteil: BIS-zertifizierte Marken/Hersteller werden in
            kontrollierten Märkten und für Regierungsausschreibungen bevorzugt.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Arten von Zentrifugen unter BIS-Zertifizierungsschema
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Schema X Akkreditierung für Zentrifugen deckt verschiedene Arten
          ab wie:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Laborzentrifugen</li>
          <li>Industrielle Separatoren</li>
          <li>Zentrifuge, gekühlt</li>
          <li>Ultrazentrifugen</li>
          <li>Gaszentrifugen</li>
          <li>Korbzentrifugen</li>
          <li>Dekanter-Zentrifugen</li>
          <li>Kontinuierliche und Batch-Zentrifugen</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Alle diese Arten müssen die anwendbaren indischen Standards (IS-Codes)
          erfüllen wie IS 16819:2018/ISO 12100:2010 (Sicherheit von Maschinen -
          Allgemeine Gestaltungsleitsätze - Risikobeurteilung und
          Risikominderung). Alle Varianten sollten die entsprechenden indischen
          Standards (IS-Codes) für Qualität, Sicherheit und Energieeffizienz
          erfüllen.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Prozess der BIS-Zertifizierung für Zentrifugen
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Relevante Standards identifizieren: Beziehen Sie sich auf IS-Codes,
            die für Ihren Typ von Zentrifuge relevant sind.
          </li>
          <li>
            Produkttests: Führen Sie industrieübliche erforderliche Leistungs-
            und Sicherheitstests in BIS-akkreditierten Laboren durch.
          </li>
          <li>
            Fabrikinspektion: Überprüfen Sie Qualitätssicherungssysteme in
            Produktionsstätten durch BIS-Beamte.
          </li>
          <li>
            Antrag & Dokumentation: Stellen Sie technische Anforderungen,
            Qualitätshandbuch und Testberichte zur Verfügung.
          </li>
          <li>
            Ausstellung der BIS-Lizenz für Zentrifugen: Sie können das
            BIS-Zeichen anbringen, nachdem es genehmigt wurde.
          </li>
          <li>
            Laufende Compliance: BIS überprüft und führt unangekündigte Audits
            für Standards-Compliance durch.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Strafen für Nicht-Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Hersteller, die nicht alle Modellzentrifugen bis zum 1. September 2026
          mit BIS-Zertifizierung für Zentrifugen zertifiziert haben, laufen
          Gefahr:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Verkauf/Import von nicht zertifizierten Zentrifugen verboten</li>
          <li>Einziehung von nicht konformen Geräten und Geldstrafen</li>
          <li>
            Sie werden für alle Regierungs- oder PSU-Ausschreibungen ungeeignet
          </li>
          <li>Markenwert dauerhaft in Indien beeinträchtigt</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Fazit
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Die Umsetzung der BIS Schema X Zertifizierung für Zentrifugen in OTR
          2024 ist ein Schritt, um Sicherheit, Effizienz und Qualität in den
          Industrie- und Laborsektor in Indien zu bringen.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Hersteller, Importeure und Exporteure nutzen diesen Prozess, indem sie
          BIS-Zertifizierung für Zentrifugen sichern, indem sie BIS-Lizenz für
          Zentrifugen erhalten und das BIS-Zeichen für Zentrifugen auf ihrem
          Produkt anbringen, was zeigt, dass ihr Produkt die lokalen
          Marktregulierungssysteme und die Anforderungen der Kunden erfüllt.
        </p>

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const CentrifugesGermanMainContentRight = () => {
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
    "SchemaX Produkt - BIS Zertifizierung für Zentrifugen";

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
