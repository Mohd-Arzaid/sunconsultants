import FaqAuthorDutch from "@/components/common/FaqAuthor/FaqAuthorDutch";
import ManyUsersAlsoReadDutch from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoReadDutch";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
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
import FooterDutch from "@/components/manual/Footer/FooterDutch";

const BISCertificateForFurnitureDutch = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterDutch />
    </div>
  );
};

export default BISCertificateForFurnitureDutch;

const MetaTags = () => {
  const title =
    "BIS Certificaat voor Meubels in India | BIS Certificering, Licentie & Proces Gids";
  const ogTitle =
    "BIS Certificaat voor Meubels in India - Volledige BIS Certificeringsgids";
  const twitterTitle =
    "BIS Certificaat voor Meubels | Volledige BIS Certificeringsgids van Indiaas BIS";
  const metaDescription =
    "BIS Certificaat voor Meubels in India - volledige gids over BIS Certificering, BIS Licentie, kosten, documenten, normen, proces, online aanvraag & BIS Markering voor meubelfabrikanten.";
  const ogDescription =
    "Zoekt u BIS Certificering voor Meubels in India? Leer over BIS Licentie, BIS Markering, toepasselijke normen, certificeringsproces, kosten, documenten & nalevingsvereisten in detail.";
  const twitterDescription =
    "Volledige gids voor BIS Certificaat voor Meubels in India - BIS Certificeringsproces, kosten, documenten, BIS Markering, normen & online aanvraag uitgelegd.";
  const metaKeywords =
    "BIS Certificaat voor Meubels, BIS Certificering voor Meubels, BIS Licentie voor Meubels, Wat is BIS, Indiaas BIS";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/meubels";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Laatste Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificering voor Meubels in India
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
        <ServicesRightSideContentDutch />
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
          BIS Certificering voor Meubels in India: Volledige Gids over BIS
          Normen, ISI Markering, Proces &amp; Naleving
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS Licentie voor Meubels"
            alt="BIS Certificering voor Meubels in India - ISI Markering Gids"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Meubels zijn een essentieel onderdeel van woningen, kantoren en
            openbare ruimtes. Het waarborgen van de veiligheid, duurzaamheid en
            kwaliteit van meubels is cruciaal voor zowel consumenten als
            fabrikanten. In India is{" "}
            <strong>BIS Certificering voor Meubels</strong> een verplichte
            vereiste voor bepaalde meubelcategorieën onder de Furniture (Quality
            Control) Order, 2025. Deze gids biedt een gedetailleerd overzicht
            van BIS Normen, ISI Markering, het certificeringsproces en
            nalevingsvereisten.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          Wat is BIS Certificering voor Meubels?
        </SectionHeading>

        <SubSectionHeading>
          Betekenis van BIS Certificering voor Meubels
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certificering is een formeel proces waarbij het Bureau of Indian
          Standards (BIS) producten evalueert om te verzekeren dat ze voldoen
          aan Indiase Normen. Voor meubels garandeert deze certificering dat
          producten voldoen aan gedefinieerde veiligheids-, prestatie- en
          kwaliteitsparameters. Na certificering kunnen fabrikanten de{" "}
          <strong>ISI Markering</strong> op hun meubels gebruiken, wat naleving
          aan kopers signaleert.
        </p>

        <SubSectionHeading>
          Verschil tussen BIS Certificering en ISI Markering voor Meubels
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS Certificering</strong> — Het proces van evaluatie,
              testen en goedkeuring door BIS.
            </>,
            <>
              <strong>ISI Markering</strong> — Een markering die na BIS
              Certificering wordt verleend en aangeeft dat het product voldoet
              aan Indiase Normen. De ISI Markering is de zichtbare garantie van
              naleving voor consumenten.
            </>,
          ]}
        />

        <SubSectionHeading>
          Waarom BIS Certificering belangrijk is voor meubelfabrikanten en
          importeurs
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Wettelijke naleving van Indiase regelgeving",
            "Toegang tot de Indiase markt en overheidsaanbestedingen",
            "Versterkt consumentenvertrouwen en concurrentievoordeel",
            "Verminderd risico op terugroepacties, boetes of importbeperkingen",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS Certificeringsvereisten voor Meubelfabrikanten
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Vereiste
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Certificeringsautoriteit", "Bureau of Indian Standards (BIS)"],
                ["Certificeringsschema", "Schema-I (ISI Markering Certificering)"],
                ["Toepasselijke wet", "Furniture (Quality Control) Order, 2025"],
                ["Verplichte markering", "ISI Markering met BIS Licentienummer"],
                [
                  "Producttesten",
                  "Vereist via BIS-erkende laboratoria",
                ],
                ["Fabrieksinspectie", "Verplicht vóór licentieverlening"],
                [
                  "Van toepassing op",
                  "Indiase fabrikanten, buitenlandse fabrikanten, importeurs",
                ],
                ["Toezicht na certificering", "Vereist"],
                [
                  "Licentieverlenging",
                  "Periodieke verlenging volgens BIS-vereisten",
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
          Regelgevend kader voor BIS Certificering van Meubels in India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "De Furniture QCO 2025 schrijft voor dat bepaalde meubelcategorieën moeten voldoen aan BIS Normen. De QCO vormt de juridische basis voor verplichte certificering en beschrijft de gedekte meubeltypen.",
            },
            {
              icon: Building2,
              title: "Rol van het Bureau of Indian Standards (BIS)",
              description:
                "BIS ontwikkelt Indiase Normen (IS), evalueert productie-eenheden, voert producttesten uit en verleent licenties voor het gebruik van de ISI Markering. Het houdt naleving in de gaten via audits en toezicht.",
            },
          ]}
        />

        <SubSectionHeading>
          Verplichte vs. vrijwillige BIS Certificering voor Meubels
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Verplicht</strong> — Categorieën gespecificeerd onder de
              Furniture QCO, zoals bedden, stoelen en opslageenheden.
            </>,
            <>
              <strong>Vrijwillig</strong> — Fabrikanten kunnen ervoor kiezen
              extra productcategorieën te certificeren om marktgeloofwaardigheid
              te vergroten.
            </>,
          ]}
        />

        <SubSectionHeading>
          Toepasbaarheid van de Furniture QCO op fabrikanten en importeurs
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Indiase fabrikanten die meubels produceren die onder de QCO vallen",
            "Buitenlandse fabrikanten die naar India exporteren",
            "Importeurs die meubels binnenlands verkopen",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Meubelproducten gedekt onder BIS Certificering
        </SectionHeading>

        <SubSectionHeading>
          Meubelcategorieën en toepasselijke BIS Normen
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Meubelcategorie
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Toepasselijke Indiase Norm
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Normtitel
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Certificeringsvereiste
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Werkstoelen",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "Algemene Doel Stoelen en Krukken",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Tafels en Bureaus",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Opslageenheden",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Bedden",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Stapelbedden",
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
                    Verplicht onder Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Alle gedekte producten moeten voldoen aan de relevante BIS Normen en
          een geldige ISI Markering dragen voordat ze in India worden verkocht.
          Deze normen definiëren de minimumvereisten voor veiligheid,
          stabiliteit en bruikbaarheid van meubels.
        </p>

        <SectionDivider />

        <SectionHeading>
          BIS Normen voor Meubels en hun vereisten
        </SectionHeading>

        <SubSectionHeading>
          Prestatievereisten onder BIS Meubelnormen
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Meubels moeten normaal gebruik weerstaan zonder vervorming of
          structureel falen.
        </p>
        <CheckPointsList
          points={[
            "Draagvermogen onder normale en piekbelastingsomstandigheden",
            "Verbindingssterkte en duurzaamheid van verbindingen",
            "Materiaalstabiliteit zonder vervorming of degradatie",
          ]}
        />

        <SubSectionHeading>
          Veiligheids- en duurzaamheidstestvereisten
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Meubels moeten voldoen aan veiligheidsnormen om ongevallen te
          voorkomen en duurzaamheidsnormen om een lange levensduur te
          waarborgen.
        </p>
        <CheckPointsList
          points={[
            "Voorkoming van kantelen (stoelen, krukken en instabiele eenheden)",
            "Voorkoming van instorting onder nominale belasting (bedden, stapelbedden, opslag)",
            "Langetermijnduurzaamheid door herhaald gebruik prestatietests",
          ]}
        />

        <SubSectionHeading>
          Kwaliteitsparameters geëvalueerd tijdens certificering
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Materiaalkwaliteit en afwerking",
            "Draagvermogen",
            "Stabiliteit, ergonomie en veiligheidskenmerken",
          ]}
        />

        <SubSectionHeading>
          Nalevingsvereisten voor verschillende meubelcategorieën
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Elk meubeltype heeft specifieke IS Normen met afmetingen,
          prestatietests en toegestane toleranties. Naleving zorgt voor
          uniformiteit en kwaliteit bij alle fabrikanten.
        </p>

        <SectionDivider />

        <SectionHeading>
          Wie heeft BIS Certificering voor Meubels nodig?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Indiase Meubelfabrikanten",
              description:
                "Alle binnenlandse fabrikanten van meubels die onder de Furniture QCO vallen, moeten BIS Certificering verkrijgen voordat ze producten verkopen.",
            },
            {
              icon: Globe,
              title: "Buitenlandse fabrikanten die meubels naar India exporteren",
              description:
                "Exporteurs moeten voldoen aan BIS Normen om meubels legaal in India te verkopen en de ISI Markering te gebruiken.",
            },
            {
              icon: Package,
              title: "Meubelimporteurs en merkeigenaren",
              description:
                "Importeurs moeten ervoor zorgen dat de meubels die ze naar India brengen voldoen aan BIS Normen, ook als ze in het buitenland zijn geproduceerd.",
            },
            {
              icon: ShoppingCart,
              title: "E-commerce verkopers en retailbedrijven",
              description:
                "Online en offline retailers die meubels onder gedekte categorieën verkopen, moeten BIS Certificering verifiëren om juridische aansprakelijkheid te vermijden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS ISI Certificering voor Meubels: Stapsgewijs Proces
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Productidentificatie en selectie van toepasselijke norm",
              description:
                "Identificeer de meubelcategorie en relevante BIS Norm (IS 17631–IS 17636) voor testen en certificering.",
            },
            {
              title: "Producttesten in BIS-erkende laboratoria",
              description:
                "Meubels worden getest op sterkte, stabiliteit en duurzaamheid in BIS-goedgekeurde laboratoria. Testrapporten zijn verplicht voor de aanvraag.",
            },
            {
              title: "Indiening van BIS Aanvraag",
              description:
                "Fabrikanten dienen een aanvraag in bij BIS met productspecificaties, technische details en testrapporten.",
            },
            {
              title: "Fabrieksinspectie en beoordeling",
              description:
                "BIS voert een fabrieksaudit uit om productieprocessen, kwaliteitscontrolesystemen en productieconsistentie te controleren.",
            },
            {
              title: "Verlening van BIS Licentie en ISI Markering toestemming",
              description:
                "Na goedkeuring verleent BIS een licentie waarmee de fabrikant de ISI Markering op gecertificeerde meubels mag gebruiken.",
            },
            {
              title: "Nalevingsvereisten na certificering",
              description:
                "Regelmatige audits, periodieke testen en naleving van BIS Normen zijn vereist om de certificering te behouden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Documenten vereist voor BIS Certificering van Meubels
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Bedrijfsregistratie en productiedocumenten</strong> —
              Bedrijfslicenties, GST-registratie en details van de
              productiefaciliteit.
            </>,
            <>
              <strong>Technische productspecificaties en tekeningen</strong> —
              Gedetailleerde ontwerpen, gebruikte materialen en
              montage-instructies.
            </>,
            <>
              <strong>Testrapporten en kwaliteitscontroledocumenten</strong> —
              Rapporten van BIS-goedgekeurde laboratoria die naleving van IS
              Normen aantonen.
            </>,
            <>
              <strong>Fabrieks- en productieprocesdocumenten</strong> —
              Kwaliteitsmanagementsystemen, processtroom en
              inspectieprocedures.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Testvereisten voor BIS-gecertificeerde Meubels
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Testgebied
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Doel
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Sterktetest",
                  "Verifieert draagvermogen",
                ],
                [
                  "Stabiliteitstest",
                  "Voorkomt kantelen en instorting",
                ],
                [
                  "Duurzaamheidstest",
                  "Beoordeelt prestaties bij herhaald gebruik",
                ],
                [
                  "Structurele integriteitstest",
                  "Evalueert verbindingen, frames en aansluitingen",
                ],
                [
                  "Veiligheidstest",
                  "Vermindert risico op letsel bij normaal gebruik",
                ],
                [
                  "Functionele prestatietest",
                  "Bevestigt beoogde functionaliteit en bruikbaarheid",
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
          Meubels moeten worden getest in BIS-erkende laboratoria om
          veiligheids-, prestatie- en duurzaamheidsclaims te valideren.
        </p>

        <SectionDivider />

        <SectionHeading>
          ISI Markering voor Meubels: Gebruik en nalevingsvereisten
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Wat de ISI Markering aangeeft</strong> — Bevestigt dat
              meubels voldoen aan Indiase Normen en zijn gecertificeerd door BIS.
            </>,
            <>
              <strong>Regels voor het aanbrengen van de ISI Markering</strong> —
              De markering moet zichtbaar, permanent en correct geformatteerd
              zijn volgens BIS-richtlijnen.
            </>,
            <>
              <strong>Gevolgen van misbruik</strong> — Illegaal gebruik kan
              leiden tot boetes, licentie-intrekking en juridische stappen onder
              de BIS-wet van 2016.
            </>,
            <>
              <strong>Hoe kopers kunnen verifiëren</strong> — Consumenten kunnen
              het licentienummer verifiëren op de officiële website van BIS.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Tijdlijn, geldigheid en verlenging van BIS Certificering
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Certificeringstijdlijn voor meubelproducten",
              description:
                "Doorgaans 2–3 maanden, afhankelijk van test- en fabrieksinspectieschema&apos;s.",
            },
            {
              icon: ShieldCheck,
              title: "Geldigheid van BIS Licentie",
              description:
                "De licentie is 1–3 jaar geldig en moet vóór het verstrijken worden verlengd.",
            },
            {
              icon: RefreshCw,
              title: "Verlengingsproces voor BIS Certificering",
              description:
                "Verlenging omvat bijgewerkte testrapporten, fabrieksinspecties en bevestiging van naleving.",
            },
            {
              icon: Eye,
              title: "Toezicht en doorlopende nalevingsvereisten",
              description:
                "BIS voert steekproefaudits en testen uit om continue naleving van normen te waarborgen.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Voordelen van BIS-gecertificeerde Meubels
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Wettelijke naleving en markttoegang</strong> — Verplicht
              voor de verkoop van bepaalde meubeltypen in India.
            </>,
            <>
              <strong>Verbeterde productkwaliteit en consumentenvertrouwen</strong>{" "}
              — BIS Certificering signaleert betrouwbaarheid en veiligheid.
            </>,
            <>
              <strong>Concurrentievoordeel voor fabrikanten</strong> —
              Gecertificeerde meubels hebben hogere marktgeloofwaardigheid en
              aanbestedingsgeschiktheid.
            </>,
            <>
              <strong>Geschiktheid voor overheidsaanbestedingen</strong> — Alleen
              BIS-gecertificeerde producten kunnen worden geleverd aan
              overheids- of institutionele kopers.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Straffen bij niet-naleving van BIS Meubelregelgeving
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Productie of verkoop van niet-gecertificeerde meubels</strong>{" "}
              — Schendt de QCO, wat leidt tot boetes en inbeslagname van
              producten.
            </>,
            <>
              <strong>Importbeperkingen voor niet-conforme meubels</strong> —
              Niet-gecertificeerde importen kunnen bij de douane worden
              geblokkeerd.
            </>,
            <>
              <strong>Straffen onder de BIS-wet van 2016</strong> — Omvat
              geldboetes, gevangenisstraf en verbod op verkoop van producten.
            </>,
            <>
              <strong>Bedrijfsrisico&apos;s bij niet-naleving</strong> — Verlies
              van consumentenvertrouwen, juridische geschillen en beperkte
              markttoegang.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Uitdagingen bij het verkrijgen van BIS Certificering voor Meubels
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identificatie van de juiste Indiase Norm",
              description:
                "Fabrikanten moeten ervoor zorgen dat hun product overeenkomt met de toepasselijke IS 17631–IS 17636 norm.",
            },
            {
              title: "Beheer van test- en documentatievereisten",
              description:
                "Correcte laboratoriumtesten en documentatie zijn verplicht voor goedkeuring.",
            },
            {
              title: "Aanpakken van fabrieksaudit-opmerkingen",
              description:
                "Niet-naleving tijdens audits kan certificering vertragen.",
            },
            {
              title: "Behoud van continue naleving na certificering",
              description:
                "Doorlopende kwaliteitsbewaking en naleving van BIS Normen zijn vereist om boetes te vermijden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Hoe Sun Certifications India kan helpen
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Ondersteuning bij aanvraag en documentatie",
              description:
                "Begeleiding bij het indienen van een volledige en correcte BIS Aanvraag.",
            },
            {
              icon: FlaskConical,
              title: "Ondersteuning bij producttesten",
              description:
                "Helpt bij coördinatie met BIS-goedgekeurde laboratoria.",
            },
            {
              icon: ClipboardCheck,
              title: "Auditvoorbereiding en nalevingsbegeleiding",
              description:
                "Zorgt ervoor dat fabrieksprocessen voldoen aan BIS-vereisten vóór inspectie.",
            },
            {
              icon: ShieldCheck,
              title: "Nalevingsbeheer na licentieverlening",
              description:
                "Adviseert over administratie, toezichtsaudits en normupdates.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Veelgestelde Vragen over BIS Certificering voor Meubels
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "Is BIS Certificering verplicht voor alle meubelproducten?",
              answer:
                "Nee. Alleen meubels die onder de Furniture QCO 2025 zijn opgenomen, vereisen verplichte BIS Certificering.",
            },
            {
              question:
                "Kunnen geïmporteerde meubels worden verkocht zonder BIS Certificering?",
              answer:
                "Nee. Meubels onder de verplichte categorieën mogen in India niet worden verkocht zonder BIS-goedkeuring.",
            },
            {
              question: "Hoe lang duurt meubelcertificering?",
              answer:
                "Doorgaans 2–3 maanden, afhankelijk van testen en inspecties.",
            },
            {
              question:
                "Wat is het verschil tussen BIS Certificering en ISI Markering?",
              answer:
                "BIS Certificering is het goedkeuringsproces; de ISI Markering is het certificeringslabel dat op meubels wordt aangebracht.",
            },
            {
              question:
                "Welke BIS Normen zijn van toepassing op meubels?",
              answer:
                "IS 17631–IS 17636 dekken stoelen, krukken, werkstoelen, tafels, bedden, stapelbedden en opslageenheden.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>Gerelateerde Bronnen</SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS ISI Certificering
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS Certificaat voor Buitenlandse Fabrikanten
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoReadDutch />

        <FaqAuthorDutch questionNumber={2} />
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
              Onze Diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Beste Certificaat Consultant
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
              BIS Merk (ISI Licentie) voor Buitenlandse Fabricage
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
              CDSCO Registratie Certificering
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
              BIS (CRS) Registratie
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
              Plasticafvalbeheer
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
              EPR Certificaat certificeringen
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
              LMPC Certificaat certificeringen
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
              BIS Registratie Certificaat
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
              ISI MERK (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
