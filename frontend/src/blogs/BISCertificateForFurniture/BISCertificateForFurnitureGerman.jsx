import FaqAuthorGerman from "@/components/common/FaqAuthor/FaqAuthorGerman";
import ManyUsersAlsoReadGerman from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadGerman";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Building2,
  Check,
  ClipboardCheck,
  Clock,
  Eye,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Package,
  RefreshCw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  SlashIcon,
} from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterGerman from "@/components/manual/Footer/FooterGerman";

const BISCertificateForFurnitureGerman = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterGerman />
    </div>
  );
};

export default BISCertificateForFurnitureGerman;

const MetaTags = () => {
  const title =
    "BIS-Zertifikat für Möbel in Indien | BIS-Zertifizierung, Lizenz & Prozessleitfaden";
  const ogTitle =
    "BIS-Zertifikat für Möbel in Indien - Vollständiger BIS-Zertifizierungsleitfaden";
  const twitterTitle =
    "BIS-Zertifikat für Möbel | Vollständiger BIS-Zertifizierungsleitfaden des indischen BIS";
  const metaDescription =
    "BIS-Zertifikat für Möbel in Indien - vollständiger Leitfaden zu BIS-Zertifizierung, BIS-Lizenz, Kosten, Dokumenten, Standards, Prozess, Online-Antrag & BIS-Marke für Möbelhersteller.";
  const ogDescription =
    "Suchen Sie nach BIS-Zertifizierung für Möbel in Indien? Erfahren Sie mehr über BIS-Lizenz, BIS-Marke, anwendbare Standards, Zertifizierungsprozess, Kosten, Dokumente & Compliance-Anforderungen im Detail.";
  const twitterDescription =
    "Vollständiger Leitfaden zum BIS-Zertifikat für Möbel in Indien - BIS-Zertifizierungsprozess, Kosten, Dokumente, BIS-Marke, Standards & Online-Antrag erklärt.";
  const metaKeywords =
    "BIS-Zertifikat für Möbel, BIS-Zertifizierung für Möbel, BIS-Lizenz für Möbel, Was ist BIS, Indisches BIS";
  const websiteUrl = "https://bis-certifications.com/blogs/isi-products/mobel";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter der Operationen bei Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Startseite</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Neueste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifizierung für Möbel in Indien
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const TABLE_WRAP =
  "mt-6 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]";

const SectionDivider = () => (
  <div className="service-left-content-divider my-8 md:my-10" />
);

const SectionHeading = ({ children }) => (
  <h2 className="text-xl md:text-2xl font-geist font-bold text-[#1e1e1e] mb-4 pl-4 border-l-4 border-[#1A8781]">
    {children}
  </h2>
);

const SubSectionHeading = ({ children }) => (
  <h3 className="text-base md:text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-4">
    {children}
  </h3>
);

const IntroCallout = ({ children }) => (
  <div className="rounded-md bg-[#EAF3FF] border-l-4 border-[#1A8781] px-4 py-3 mb-6">
    {children}
  </div>
);

const CheckPointsList = ({ points, variant = "check" }) => {
  const Icon = variant === "warning" ? AlertTriangle : Check;
  const iconBg =
    variant === "warning" ? "bg-amber-500/10" : "bg-green-500/10";

  return (
    <div className="bg-white/50 rounded-xl p-4 ring-1 ring-gray-900/[0.05] mt-2 mb-4">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div
              className={`${iconBg} p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5`}
            >
              <Icon size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-base text-[#42434d] tracking-wide text-left max-w-full leading-relaxed flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NumberedSteps = ({ steps, showTimeline = true }) => {
  if (!showTimeline) {
    return (
      <div className="mt-4 mb-4 flex flex-col gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
          >
            <div className="w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-geist">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 border-l-2 border-[#1A8781]/30 ml-3 pl-6 flex flex-col gap-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative bg-white/70 rounded-lg p-4 ring-1 ring-gray-900/[0.05]"
        >
          <div className="absolute -left-[31px] top-4 w-7 h-7 rounded-full bg-[#1A8781] text-white text-xs font-bold flex items-center justify-center">
            {index + 1}
          </div>
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-1">
            {step.title}
          </h3>
          <p className="text-gray-600 text-base font-geist">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

const InfoCardGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 ring-1 ring-gray-900/[0.06] hover:ring-gray-900/[0.12] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {Icon && (
              <div className="mb-3 w-9 h-9 rounded-full bg-[#1A8781]/10 text-[#1A8781] flex items-center justify-center">
                <Icon size={18} />
              </div>
            )}
            <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base font-geist leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const FaqAccordion = ({ items }) => {
  return (
    <div className="rounded-xl bg-white/60 p-4 md:p-5 ring-1 ring-gray-900/[0.06]">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left font-geist font-semibold text-[#1e1e1e] hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 font-geist text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS-Zertifizierung für Möbel in Indien: Vollständiger Leitfaden zu
          BIS-Standards, ISI-Marke, Prozess &amp; Compliance
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS-Lizenz für Möbel"
            alt="BIS-Zertifizierung für Möbel in Indien - ISI-Marken-Leitfaden"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Möbel sind ein wesentlicher Bestandteil von Wohnungen, Büros und
            öffentlichen Räumen. Die Gewährleistung von Sicherheit, Haltbarkeit
            und Qualität von Möbeln ist sowohl für Verbraucher als auch für
            Hersteller von entscheidender Bedeutung. In Indien ist die{" "}
            <strong>BIS-Zertifizierung für Möbel</strong> gemäß der Furniture
            (Quality Control) Order, 2025 für bestimmte Möbelkategorien
            obligatorisch. Dieser Leitfaden bietet einen detaillierten Überblick
            über BIS-Standards, ISI-Marken, den Zertifizierungsprozess und
            Compliance-Anforderungen.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Was ist die BIS-Zertifizierung für Möbel?
        </SectionHeading>

        <SubSectionHeading>
          Bedeutung der BIS-Zertifizierung für Möbel
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Die BIS-Zertifizierung ist ein formeller Prozess, bei dem das Bureau
          of Indian Standards (BIS) Produkte bewertet, um sicherzustellen, dass
          sie den indischen Standards entsprechen. Für Möbel gewährleistet diese
          Zertifizierung, dass Produkte definierte Sicherheits-, Leistungs- und
          Qualitätsparameter erfüllen. Nach der Zertifizierung können
          Hersteller die <strong>ISI-Marke</strong> auf ihren Möbeln verwenden
          und damit die Compliance gegenüber Käufern signalisieren.
        </p>

        <SubSectionHeading>
          Unterschied zwischen BIS-Zertifizierung und ISI-Marke für Möbel
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS-Zertifizierung</strong> — Der Prozess der Bewertung,
              Prüfung und Genehmigung durch BIS.
            </>,
            <>
              <strong>ISI-Marke</strong> — Eine Marke, die nach der
              BIS-Zertifizierung erteilt wird und anzeigt, dass das Produkt den
              indischen Standards entspricht. Die ISI-Marke ist die sichtbare
              Compliance-Garantie für Verbraucher.
            </>,
          ]}
        />

        <SubSectionHeading>
          Warum die BIS-Zertifizierung für Möbelhersteller und Importeure
          wichtig ist
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Rechtliche Compliance mit indischen Vorschriften",
            "Zugang zum indischen Markt und zu staatlichen Beschaffungsmöglichkeiten",
            "Stärkeres Verbrauchervertrauen und Wettbewerbsvorteil",
            "Geringeres Risiko von Rückrufen, Strafen oder Importbeschränkungen",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS-Zertifizierungsanforderungen für Möbelhersteller
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Anforderung
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Zertifizierungsbehörde", "Bureau of Indian Standards (BIS)"],
                ["Zertifizierungsschema", "Schema-I (ISI-Marken-Zertifizierung)"],
                ["Anwendbares Gesetz", "Furniture (Quality Control) Order, 2025"],
                ["Obligatorische Kennzeichnung", "ISI-Marke mit BIS-Lizenznummer"],
                [
                  "Produkttest",
                  "Erforderlich über BIS-anerkannte Laboratorien",
                ],
                ["Fabrikinspektion", "Obligatorisch vor Lizenzerteilung"],
                [
                  "Anwendbar auf",
                  "Indische Hersteller, ausländische Hersteller, Importeure",
                ],
                ["Überwachung nach Zertifizierung", "Erforderlich"],
                [
                  "Lizenzverlängerung",
                  "Periodische Verlängerung gemäß BIS-Anforderungen",
                ],
              ].map(([req, details], i) => (
                <TableRow
                  key={req}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {req}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <SectionDivider />

        <SectionHeading>
          Regulatorischer Rahmen für die BIS-Zertifizierung von Möbeln in Indien
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "Die Furniture QCO 2025 schreibt vor, dass bestimmte Möbelkategorien den BIS-Standards entsprechen müssen. Die QCO bildet die rechtliche Grundlage für die obligatorische Zertifizierung und legt die abgedeckten Möbeltypen fest.",
            },
            {
              icon: Building2,
              title: "Rolle des Bureau of Indian Standards (BIS)",
              description:
                "BIS entwickelt indische Standards (IS), bewertet Fertigungseinheiten, führt Produkttests durch und erteilt Lizenzen für die Verwendung der ISI-Marke. Es überwacht die Compliance durch Audits und Überwachung.",
            },
          ]}
        />

        <SubSectionHeading>
          Obligatorische vs. freiwillige BIS-Zertifizierung für Möbel
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Obligatorisch</strong> — Kategorien, die unter der
              Furniture QCO aufgeführt sind, wie Betten, Stühle und Lagereinheiten.
            </>,
            <>
              <strong>Freiwillig</strong> — Hersteller können zusätzliche
              Produktkategorien freiwillig zertifizieren lassen, um die
              Marktglaubwürdigkeit zu erhöhen.
            </>,
          ]}
        />

        <SubSectionHeading>
          Anwendbarkeit der Furniture QCO auf Hersteller und Importeure
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Indische Hersteller, die unter die QCO fallende Möbel produzieren",
            "Ausländische Hersteller, die nach Indien exportieren",
            "Importeure, die Möbel im Inland verkaufen",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Unter BIS-Zertifizierung abgedeckte Möbelprodukte
        </SectionHeading>

        <SubSectionHeading>
          Möbelkategorien und anwendbare BIS-Standards
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Möbelkategorie
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Anwendbarer indischer Standard
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Standardtitel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Zertifizierungsanforderung
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Arbeitsstühle",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Allgemeine Stühle und Hocker",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Tische und Schreibtische",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Lagereinheiten",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Betten",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Etagenbetten",
                  standard: "IS 17636:2022",
                  title:
                    "Furniture – Bunk Beds for Domestic Use – Requirements and Test Methods",
                  link: "/blogs/isi-products/bunk-beds-is-17636",
                },
              ].map((row, i) => (
                <TableRow
                  key={row.standard}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-[#1e1e1e]">
                    <Link
                      to={row.link}
                      className="text-blue-600 hover:underline"
                    >
                      {row.category}
                    </Link>
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.standard}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-200/50 text-gray-600">
                    {row.title}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-3 md:px-4 py-3 text-gray-600">
                    Obligatorisch gemäß Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle abgedeckten Produkte müssen den relevanten BIS-Standards
          entsprechen und eine gültige ISI-Marke tragen, bevor sie in Indien
          verkauft werden. Diese Standards definieren die Mindestanforderungen
          für Sicherheit, Stabilität und Benutzerfreundlichkeit von Möbeln.
        </p>

        <SectionDivider />

        <SectionHeading>
          BIS-Standards für Möbel und ihre Anforderungen
        </SectionHeading>

        <SubSectionHeading>
          Leistungsanforderungen gemäß BIS-Möbelstandards
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Möbel müssen der normalen Nutzung standhalten, ohne sich zu verformen
          oder strukturell zu versagen.
        </p>
        <CheckPointsList
          points={[
            "Tragfähigkeit unter normalen und Spitzenlastbedingungen",
            "Verbindungsfestigkeit und Haltbarkeit der Verbindungen",
            "Materialstabilität ohne Verwerfung oder Abbau",
          ]}
        />

        <SubSectionHeading>
          Sicherheits- und Haltbarkeitsprüfungsanforderungen
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Möbel müssen Sicherheitsnormen erfüllen, um Unfälle zu verhindern,
          sowie Haltbarkeitsstandards, um eine lange Lebensdauer zu
          gewährleisten.
        </p>
        <CheckPointsList
          points={[
            "Verhinderung des Umkippens (Stühle, Hocker und instabile Einheiten)",
            "Verhinderung des Einsturzes unter Nennlast (Betten, Etagenbetten, Lagereinheiten)",
            "Langfristige Haltbarkeit durch Wiederholungsnutzungs-Leistungstests",
          ]}
        />

        <SubSectionHeading>
          Bei der Zertifizierung bewertete Qualitätsparameter
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Materialqualität und Oberflächenfinish",
            "Tragfähigkeit",
            "Stabilität, Ergonomie und Sicherheitsmerkmale",
          ]}
        />

        <SubSectionHeading>
          Compliance-Anforderungen für verschiedene Möbelkategorien
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Jeder Möbeltyp hat spezifische IS-Standards mit Abmessungen,
          Leistungstests und zulässigen Toleranzen. Die Einhaltung gewährleistet
          Einheitlichkeit und Qualität bei allen Herstellern.
        </p>

        <SectionDivider />

        <SectionHeading>
          Wer benötigt eine BIS-Zertifizierung für Möbel?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Indische Möbelhersteller",
              description:
                "Alle inländischen Hersteller von unter der Furniture QCO fallenden Möbeln müssen vor dem Verkauf eine BIS-Zertifizierung erhalten.",
            },
            {
              icon: Globe,
              title: "Ausländische Hersteller, die Möbel nach Indien exportieren",
              description:
                "Exporteure müssen BIS-Standards einhalten, um Möbel legal in Indien zu verkaufen und die ISI-Marke zu verwenden.",
            },
            {
              icon: Package,
              title: "Möbelimporteure und Markeninhaber",
              description:
                "Importeure müssen sicherstellen, dass die Möbel, die sie nach Indien bringen, den BIS-Normen entsprechen, auch wenn sie im Ausland hergestellt wurden.",
            },
            {
              icon: ShoppingCart,
              title: "E-Commerce-Verkäufer und Einzelhändler",
              description:
                "Online- und Offline-Händler, die Möbel unter abgedeckten Kategorien verkaufen, müssen die BIS-Zertifizierung überprüfen, um rechtliche Haftungsrisiken zu vermeiden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS-ISI-Zertifizierung für Möbel: Schritt-für-Schritt-Prozess
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Produktidentifikation und Auswahl des anwendbaren Standards",
              description:
                "Identifizieren Sie die Möbelkategorie und den relevanten BIS-Standard (IS 17631–IS 17636) für Tests und Zertifizierung.",
            },
            {
              title: "Produkttest in BIS-anerkannten Laboratorien",
              description:
                "Möbel werden in BIS-zugelassenen Labors auf Festigkeit, Stabilität und Haltbarkeit getestet. Testberichte sind für den Antrag obligatorisch.",
            },
            {
              title: "Einreichung des BIS-Antrags",
              description:
                "Hersteller reichen einen Antrag bei BIS mit Produktspezifikationen, technischen Details und Testberichten ein.",
            },
            {
              title: "Fabrikinspektion und Bewertung",
              description:
                "BIS führt ein Fabrikaudit durch, um Fertigungsprozesse, Qualitätskontrollsysteme und Produktionskonsistenz zu prüfen.",
            },
            {
              title: "Erteilung der BIS-Lizenz und ISI-Marken-Genehmigung",
              description:
                "Nach Genehmigung erteilt BIS eine Lizenz, die es dem Hersteller erlaubt, die ISI-Marke auf zertifizierten Möbeln zu verwenden.",
            },
            {
              title: "Compliance-Anforderungen nach der Zertifizierung",
              description:
                "Regelmäßige Audits, periodische Tests und die Einhaltung der BIS-Standards sind erforderlich, um die Zertifizierung aufrechtzuerhalten.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Erforderliche Dokumente für die BIS-Zertifizierung von Möbeln
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Unternehmensregistrierung und Fertigungsdokumente</strong> —
              Gewerbelizenzen, GST-Registrierung und Details zur
              Fertigungsstätte.
            </>,
            <>
              <strong>Technische Produktspezifikationen und Zeichnungen</strong>{" "}
              — Detaillierte Konstruktionen, verwendete Materialien und
              Montageanleitungen.
            </>,
            <>
              <strong>Testberichte und Qualitätskontrolldokumente</strong> —
              Berichte von BIS-zugelassenen Labors, die die Einhaltung der
              IS-Standards nachweisen.
            </>,
            <>
              <strong>Fabrik- und Produktionsprozessdokumente</strong> —
              Qualitätsmanagementsysteme, Prozessablauf und
              Inspektionsverfahren.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Prüfanforderungen für BIS-zertifizierte Möbel
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Prüfbereich
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Zweck
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Festigkeitstest",
                  "Überprüft die Tragfähigkeit",
                ],
                [
                  "Stabilitätstest",
                  "Verhindert Umkippen und Einsturz",
                ],
                [
                  "Haltbarkeitstest",
                  "Bewertet die Leistung bei wiederholter Nutzung",
                ],
                [
                  "Strukturelle Integritätsprüfung",
                  "Bewertet Verbindungen, Rahmen und Anschlüsse",
                ],
                [
                  "Sicherheitstest",
                  "Reduziert das Verletzungsrisiko bei normaler Nutzung",
                ],
                [
                  "Funktionale Leistungsprüfung",
                  "Bestätigt beabsichtigte Funktionalität und Benutzerfreundlichkeit",
                ],
              ].map(([area, purpose], i) => (
                <TableRow
                  key={area}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${i % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {area}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {purpose}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Möbel müssen in BIS-anerkannten Labors getestet werden, um
          Sicherheits-, Leistungs- und Haltbarkeitsansprüche zu validieren.
        </p>

        <SectionDivider />

        <SectionHeading>
          ISI-Marke für Möbel: Verwendung und Compliance-Anforderungen
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Was die ISI-Marke anzeigt</strong> — Bestätigt, dass Möbel
              den indischen Standards entsprechen und von BIS zertifiziert wurden.
            </>,
            <>
              <strong>Regeln für die Anbringung der ISI-Marke</strong> — Die
              Marke sollte sichtbar, dauerhaft und gemäß den BIS-Richtlinien
              korrekt formatiert sein.
            </>,
            <>
              <strong>Folgen des Missbrauchs</strong> — Die illegale Verwendung
              kann zu Strafen, Lizenzwiderruf und rechtlichen Schritten gemäß
              dem BIS-Gesetz von 2016 führen.
            </>,
            <>
              <strong>Wie Käufer überprüfen können</strong> — Verbraucher können
              die Lizenznummer auf der offiziellen Website von BIS überprüfen.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Zeitrahmen, Gültigkeit und Verlängerung der BIS-Zertifizierung
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Zertifizierungszeitrahmen für Möbelprodukte",
              description:
                "In der Regel 2–3 Monate, abhängig von Test- und Fabrikinspektionsplänen.",
            },
            {
              icon: ShieldCheck,
              title: "Gültigkeit der BIS-Lizenz",
              description:
                "Die Lizenz ist 1–3 Jahre gültig und muss vor Ablauf verlängert werden.",
            },
            {
              icon: RefreshCw,
              title: "Verlängerungsprozess für die BIS-Zertifizierung",
              description:
                "Die Verlängerung umfasst aktualisierte Testberichte, Fabrikinspektionen und Compliance-Bestätigung.",
            },
            {
              icon: Eye,
              title: "Überwachung und laufende Compliance-Anforderungen",
              description:
                "BIS führt Stichproben-Audits und Tests durch, um die kontinuierliche Einhaltung der Standards sicherzustellen.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Vorteile von BIS-zertifizierten Möbeln
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Rechtliche Compliance und Marktzugang</strong> —
              Obligatorisch für den Verkauf bestimmter Möbeltypen in Indien.
            </>,
            <>
              <strong>Verbesserte Produktqualität und Verbrauchervertrauen</strong>{" "}
              — BIS-Zertifizierung signalisiert Zuverlässigkeit und Sicherheit.
            </>,
            <>
              <strong>Wettbewerbsvorteil für Hersteller</strong> —
              Zertifizierte Möbel haben höhere Marktglaubwürdigkeit und
              Beschaffungsberechtigung.
            </>,
            <>
              <strong>Berechtigung für staatliche Beschaffung</strong> — Nur
              BIS-zertifizierte Produkte können an staatliche oder institutionelle
              Käufer geliefert werden.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Strafen bei Nichteinhaltung der BIS-Möbelvorschriften
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Herstellung oder Verkauf nicht zertifizierter Möbel</strong>{" "}
              — Verstößt gegen die QCO und führt zu Geldstrafen und
              Produktbeschlagnahme.
            </>,
            <>
              <strong>Importbeschränkungen für nicht konforme Möbel</strong> —
              Nicht zertifizierte Importe können am Zoll blockiert werden.
            </>,
            <>
              <strong>Strafen gemäß dem BIS-Gesetz von 2016</strong> — Umfassen
              Geldstrafen, Freiheitsstrafen und Verkaufsverbote.
            </>,
            <>
              <strong>Geschäftsrisiken bei Nichteinhaltung</strong> — Verlust
              des Verbrauchervertrauens, Rechtsstreitigkeiten und eingeschränkter
              Marktzugang.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Herausforderungen bei der Erlangung der BIS-Zertifizierung für Möbel
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identifizierung des richtigen indischen Standards",
              description:
                "Hersteller müssen sicherstellen, dass ihr Produkt dem anwendbaren IS 17631–IS 17636 Standard entspricht.",
            },
            {
              title: "Verwaltung von Test- und Dokumentationsanforderungen",
              description:
                "Ordnungsgemäße Labortests und Dokumentation sind für die Genehmigung obligatorisch.",
            },
            {
              title: "Behebung von Fabrikaudit-Bemerkungen",
              description:
                "Nichteinhaltung während Audits kann die Zertifizierung verzögern.",
            },
            {
              title: "Aufrechterhaltung der kontinuierlichen Compliance nach der Zertifizierung",
              description:
                "Laufende Qualitätsüberwachung und Einhaltung der BIS-Standards sind erforderlich, um Strafen zu vermeiden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Wie Sun Certifications India helfen kann
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Unterstützung bei Antrag und Dokumentation",
              description:
                "Beratung bei der Einreichung eines vollständigen und korrekten BIS-Antrags.",
            },
            {
              icon: FlaskConical,
              title: "Unterstützung bei Produkttests",
              description:
                "Hilft bei der Koordination mit BIS-zugelassenen Laboratorien.",
            },
            {
              icon: ClipboardCheck,
              title: "Auditvorbereitung und Compliance-Beratung",
              description:
                "Stellt sicher, dass Fabrikprozesse vor der Inspektion den BIS-Anforderungen entsprechen.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance-Management nach Lizenzerteilung",
              description:
                "Berät zu Aufzeichnungsführung, Überwachungsaudits und Standardaktualisierungen.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Häufig gestellte Fragen zur BIS-Zertifizierung für Möbel
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "Ist die BIS-Zertifizierung für alle Möbelprodukte obligatorisch?",
              answer:
                "Nein. Nur Möbel, die unter der Furniture QCO 2025 aufgeführt sind, erfordern eine obligatorische BIS-Zertifizierung.",
            },
            {
              question:
                "Können importierte Möbel ohne BIS-Zertifizierung verkauft werden?",
              answer:
                "Nein. Möbel unter den obligatorischen Kategorien dürfen in Indien nicht ohne BIS-Genehmigung verkauft werden.",
            },
            {
              question: "Wie lange dauert die Möbelzertifizierung?",
              answer:
                "In der Regel 2–3 Monate, abhängig von Tests und Inspektionen.",
            },
            {
              question:
                "Was ist der Unterschied zwischen BIS-Zertifizierung und ISI-Marke?",
              answer:
                "Die BIS-Zertifizierung ist der Genehmigungsprozess; die ISI-Marke ist das Zertifizierungslabel, das auf Möbeln angebracht wird.",
            },
            {
              question:
                "Welche BIS-Standards gelten für Möbel?",
              answer:
                "IS 17631–IS 17636 decken Stühle, Hocker, Arbeitsstühle, Tische, Betten, Etagenbetten und Lagereinheiten ab.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Verwandte Ressourcen</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS-ISI-Zertifizierung
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS-Zertifikat für ausländische Hersteller
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadGerman />

        <FaqAuthorGerman questionNumber={2} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifizierungsberater
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Marke (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registrierung
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfallmanagement
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Registrierungszertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-MARKE (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
