import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
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
import FooterEng from "@/components/manual/Footer/FooterEng";

const BISCertificateForFurniture = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default BISCertificateForFurniture;

const MetaTags = () => {
  const title =
    "BIS Certification for Furniture in India | ISI Mark Guide";
  const ogTitle =
    "BIS Certification for Furniture in India | ISI Mark Guide";
  const twitterTitle =
    "BIS Certification for Furniture in India | ISI Mark Guide";
  const metaDescription =
    "Complete guide to BIS certification for furniture in India. Learn BIS standards, ISI mark process, testing, and compliance for manufacturers & importers.";
  const ogDescription =
    "Complete guide to BIS certification for furniture in India. Learn BIS standards, ISI mark process, testing, and compliance for manufacturers & importers.";
  const twitterDescription =
    "Complete guide to BIS certification for furniture in India. Learn BIS standards, ISI mark process, testing, and compliance for manufacturers & importers.";
  const metaKeywords =
    "bis certification for furniture, bis certification for furniture in India, bis standards for furniture, BIS ISI Certificate for furnitures, BIS certified furnitures, bis certified furniture manufacturers in India, ISI Certification for Furniture, ISI Mark for furniture, ISI consultant for furniture";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/furniture";
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
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certification for Furniture in India
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
        <ServicesRightSideContentEng />
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
          BIS Certification for Furniture in India: Complete Guide to BIS
          Standards, ISI Mark, Process &amp; Compliance
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS License for Furniture"
            alt="BIS Certification for Furniture in India - ISI Mark Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <IntroCallout>
          <p className="text-gray-700 text-base font-geist leading-relaxed">
            Furniture is an essential part of homes, offices, and public spaces.
            Ensuring the safety, durability, and quality of furniture is crucial
            for consumers and manufacturers alike. In India,{" "}
            <strong>BIS certification for furniture</strong> is a mandatory
            requirement for certain categories of furniture under the Furniture
            (Quality Control) Order, 2025. This guide provides a detailed
            overview of BIS standards, ISI marks, the certification process, and
            compliance requirements.
          </p>
        </IntroCallout>

        <SectionDivider />

        <SectionHeading>
          What is BIS Certification for Furniture?
        </SectionHeading>

        <SubSectionHeading>
          Meaning of BIS Certification for Furniture
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is a formal process by which the Bureau of Indian
          Standards (BIS) evaluates products to ensure they comply with Indian
          standards. For furniture, this certification ensures that products
          meet defined safety, performance, and quality parameters. Once
          certified, manufacturers can use the <strong>ISI mark</strong> on their
          furniture, signaling compliance to buyers.
        </p>

        <SubSectionHeading>
          Difference Between BIS Certification and ISI Mark for Furniture
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>BIS Certification</strong> — The process of evaluation,
              testing, and approval by BIS.
            </>,
            <>
              <strong>ISI Mark</strong> — A mark granted after BIS certification
              that indicates the product meets Indian standards. The ISI mark is
              the visible assurance of compliance for consumers.
            </>,
          ]}
        />

        <SubSectionHeading>
          Why BIS Certification is Important for Furniture Manufacturers and
          Importers
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Legal compliance with Indian regulations",
            "Access to the Indian market and government procurement opportunities",
            "Enhanced consumer trust and competitive advantage",
            "Reduced risks of recalls, penalties, or import restrictions",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS Certification Requirements for Furniture Manufacturers
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Requirement
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Certification Authority", "Bureau of Indian Standards (BIS)"],
                ["Certification Scheme", "Scheme-I (ISI Mark Certification)"],
                ["Applicable Law", "Furniture (Quality Control) Order, 2025"],
                ["Mandatory Marking", "ISI Mark with BIS Licence Number"],
                [
                  "Product Testing",
                  "Required through BIS-recognized laboratories",
                ],
                ["Factory Inspection", "Mandatory before licence grant"],
                [
                  "Applicable To",
                  "Indian Manufacturers, Foreign Manufacturers, Importers",
                ],
                ["Post-Certification Surveillance", "Required"],
                [
                  "Licence Renewal",
                  "Periodic renewal as per BIS requirements",
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
          Regulatory Framework for BIS Certification of Furniture in India
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Scale,
              title: "Furniture (Quality Control) Order, 2025",
              description:
                "The Furniture QCO 2025 mandates that certain furniture categories must comply with BIS standards. The QCO provides the legal basis for compulsory certification and outlines the types of furniture covered.",
            },
            {
              icon: Building2,
              title: "Role of the Bureau of Indian Standards (BIS)",
              description:
                "BIS develops Indian Standards (IS), evaluates manufacturing units, conducts product testing, and issues licenses for the use of the ISI mark. It also monitors compliance through audits and surveillance.",
            },
          ]}
        />

        <SubSectionHeading>
          Mandatory vs Voluntary BIS Certification for Furniture
        </SubSectionHeading>
        <CheckPointsList
          points={[
            <>
              <strong>Mandatory</strong> — Categories specified under the Furniture
              QCO, such as beds, chairs, and storage units.
            </>,
            <>
              <strong>Voluntary</strong> — Manufacturers can choose certification
              for additional product categories to enhance market credibility.
            </>,
          ]}
        />

        <SubSectionHeading>
          Applicability of the Furniture QCO to Manufacturers and Importers
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Indian manufacturers producing furniture covered under the QCO",
            "Foreign manufacturers exporting to India",
            "Importers selling furniture domestically",
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Furniture Products Covered Under BIS Certification
        </SectionHeading>

        <SubSectionHeading>
          Furniture Categories and Applicable BIS Standards
        </SubSectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Furniture Category
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Applicable Indian Standard
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 border-r border-gray-300/50 text-[#1e1e1e]">
                  Standard Title
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-sm md:text-base px-3 md:px-4 py-3 text-[#1e1e1e]">
                  Certification Requirement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  category: "Work Chairs",
                  standard: "IS 17631:2022",
                  title:
                    "Furniture – Chairs for Office Work – Requirements and Test Methods",
                  link: "/blogs/isi-products/work-chairs-is-17631",
                },
                {
                  category: "General Purpose Chairs & Stools",
                  standard: "IS 17632:2022",
                  title:
                    "Furniture – General Purpose Chairs and Stools – Requirements and Test Methods",
                  link: "/blogs/isi-products/chairs-and-stools-is-17632",
                },
                {
                  category: "Tables and Desks",
                  standard: "IS 17633:2022",
                  title:
                    "Furniture – Tables and Desks – Requirements and Test Methods",
                  link: "/blogs/isi-products/tables-&-desks-is-17633",
                },
                {
                  category: "Storage Units",
                  standard: "IS 17634:2022",
                  title:
                    "Furniture – Storage Units – Requirements and Test Methods",
                  link: "/blogs/isi-products/storage-unit-is-17634",
                },
                {
                  category: "Beds",
                  standard: "IS 17635:2022",
                  title:
                    "Furniture – Beds – Requirements and Test Methods",
                  link: "/blogs/isi-products/beds-is-17635",
                },
                {
                  category: "Bunk Beds",
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
                    Mandatory under Furniture QCO
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          All covered products must comply with the relevant BIS standards and
          carry a valid ISI mark before being sold in India. These standards
          define the minimum requirements for furniture safety, stability, and
          usability.
        </p>

        <SectionDivider />

        <SectionHeading>
          BIS Standards for Furniture and Their Requirements
        </SectionHeading>

        <SubSectionHeading>
          Performance Requirements Under BIS Furniture Standards
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Furniture must withstand normal use without deformation or structural
          failure.
        </p>
        <CheckPointsList
          points={[
            "Weight-bearing capacity under normal and peak load conditions",
            "Joint strength and connection durability",
            "Material stability without warping or degradation",
          ]}
        />

        <SubSectionHeading>
          Safety and Durability Testing Requirements
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-2">
          Furniture must meet safety norms to prevent accidents and durability
          standards to ensure longevity.
        </p>
        <CheckPointsList
          points={[
            "Prevention of tipping (chairs, stools, and unstable units)",
            "Prevention of collapse under rated load (beds, bunk beds, storage)",
            "Long-term durability through repeated-use performance tests",
          ]}
        />

        <SubSectionHeading>
          Quality Parameters Evaluated During Certification
        </SubSectionHeading>
        <CheckPointsList
          points={[
            "Material quality and finish",
            "Load-bearing capacity",
            "Stability, ergonomics, and safety features",
          ]}
        />

        <SubSectionHeading>
          Compliance Requirements for Different Furniture Categories
        </SubSectionHeading>
        <p className="text-gray-600 text-base font-geist mb-4">
          Each furniture type has specific IS standards detailing dimensions,
          performance tests, and permissible tolerances. Compliance ensures
          uniformity and quality across manufacturers.
        </p>

        <SectionDivider />

        <SectionHeading>
          Who Needs BIS Certification for Furniture?
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Factory,
              title: "Indian Furniture Manufacturers",
              description:
                "All domestic manufacturers of furniture covered under the Furniture QCO must obtain BIS certification before selling products.",
            },
            {
              icon: Globe,
              title: "Foreign Manufacturers Exporting Furniture to India",
              description:
                "Exporters must comply with BIS standards to legally sell furniture in India and use the ISI mark.",
            },
            {
              icon: Package,
              title: "Furniture Importers and Brand Owners",
              description:
                "Importers must ensure that the furniture they bring into India complies with BIS norms, even if manufactured abroad.",
            },
            {
              icon: ShoppingCart,
              title: "E-Commerce Sellers and Retail Businesses",
              description:
                "Online and offline retailers selling furniture under covered categories must verify BIS certification to avoid legal liabilities.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          BIS ISI Certification for Furniture: Step-by-Step Process
        </SectionHeading>

        <NumberedSteps
          steps={[
            {
              title: "Product Identification and Applicable Standard Selection",
              description:
                "Identify the furniture category and relevant BIS standard (IS 17631–IS 17636) for testing and certification.",
            },
            {
              title: "Product Testing in BIS-Recognized Laboratories",
              description:
                "Furniture is tested for strength, stability, and durability in BIS-approved labs. Test reports are mandatory for application.",
            },
            {
              title: "Submission of BIS Application",
              description:
                "Manufacturers submit an application to BIS with product specifications, technical details, and test reports.",
            },
            {
              title: "Factory Inspection and Assessment",
              description:
                "BIS conducts a factory audit to check manufacturing processes, quality control systems, and production consistency.",
            },
            {
              title: "Grant of BIS Licence and ISI Mark Permission",
              description:
                "Upon approval, BIS issues a license allowing the manufacturer to use the ISI mark on certified furniture.",
            },
            {
              title: "Post-Certification Compliance Requirements",
              description:
                "Regular audits, periodic testing, and adherence to BIS standards are required to maintain certification.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Documents Required for BIS Certification of Furniture
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Company Registration and Manufacturing Documents</strong> —
              Business licenses, GST registration, and manufacturing facility
              details.
            </>,
            <>
              <strong>Product Technical Specifications and Drawings</strong> —
              Detailed designs, materials used, and assembly instructions.
            </>,
            <>
              <strong>Test Reports and Quality Control Documents</strong> —
              Reports from BIS-approved labs demonstrating compliance with IS
              standards.
            </>,
            <>
              <strong>Factory and Production Process Documents</strong> —
              Quality management systems, process flow, and inspection
              procedures.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Testing Requirements for BIS Certified Furniture
        </SectionHeading>

        <div className={TABLE_WRAP}>
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Testing Area
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Purpose
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                [
                  "Strength Testing",
                  "Verifies load-bearing capability",
                ],
                [
                  "Stability Testing",
                  "Prevents tipping and collapse",
                ],
                [
                  "Durability Testing",
                  "Assesses performance over repeated use",
                ],
                [
                  "Structural Integrity Testing",
                  "Evaluates joints, frames, and connections",
                ],
                [
                  "Safety Testing",
                  "Reduces risk of injury during normal use",
                ],
                [
                  "Functional Performance Testing",
                  "Confirms intended functionality and usability",
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
          Furniture must undergo testing in BIS-recognized labs to validate
          safety, performance, and durability claims.
        </p>

        <SectionDivider />

        <SectionHeading>
          ISI Mark for Furniture: Usage and Compliance Requirements
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>What the ISI Mark Indicates</strong> — Confirms that
              furniture meets Indian standards and has been certified by BIS.
            </>,
            <>
              <strong>Rules for Affixing the ISI Mark</strong> — The mark should
              be visible, permanent, and correctly formatted as per BIS
              guidelines.
            </>,
            <>
              <strong>Consequences of Misuse</strong> — Illegal use can lead to
              penalties, license cancellation, and legal action under the BIS
              Act, 2016.
            </>,
            <>
              <strong>How Buyers Can Verify</strong> — Consumers can verify the
              license number on BIS&apos;s official website.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Timeline, Validity, and Renewal of BIS Certification
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: Clock,
              title: "Certification Timeline for Furniture Products",
              description:
                "Typically 2–3 months, depending on testing and factory inspection schedules.",
            },
            {
              icon: ShieldCheck,
              title: "Validity of BIS Licence",
              description:
                "The licence is valid for 1–3 years and requires renewal before expiry.",
            },
            {
              icon: RefreshCw,
              title: "Renewal Process for BIS Certification",
              description:
                "Renewal includes updated test reports, factory inspections, and compliance confirmation.",
            },
            {
              icon: Eye,
              title: "Surveillance and Ongoing Compliance Requirements",
              description:
                "BIS conducts random audits and tests to ensure continuous adherence to standards.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Benefits of BIS Certified Furniture
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <strong>Legal Compliance and Market Access</strong> — Mandatory for
              selling certain furniture types in India.
            </>,
            <>
              <strong>Improved Product Quality and Consumer Trust</strong> — BIS
              certification signals reliability and safety.
            </>,
            <>
              <strong>Competitive Advantage for Manufacturers</strong> —
              Certified furniture has higher market credibility and procurement
              eligibility.
            </>,
            <>
              <strong>Eligibility for Government Procurement</strong> — Only
              BIS-certified products can be supplied to government or
              institutional buyers.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Penalties for Non-Compliance with BIS Furniture Regulations
        </SectionHeading>

        <CheckPointsList
          variant="warning"
          points={[
            <>
              <strong>Manufacturing or Selling Non-Certified Furniture</strong> —
              Violates the QCO, resulting in fines and product seizure.
            </>,
            <>
              <strong>Import Restrictions on Non-Compliant Furniture</strong> —
              Non-certified imports can be blocked at customs.
            </>,
            <>
              <strong>Penalties Under the BIS Act, 2016</strong> — Includes
              monetary fines, imprisonment, and prohibition from selling
              products.
            </>,
            <>
              <strong>Business Risks of Non-Compliance</strong> — Loss of
              consumer trust, legal disputes, and restricted market access.
            </>,
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Challenges in Obtaining BIS Certification for Furniture
        </SectionHeading>

        <NumberedSteps
          showTimeline={false}
          steps={[
            {
              title: "Identifying the Correct Indian Standard",
              description:
                "Manufacturers must ensure their product matches the applicable IS 17631–IS 17636 standard.",
            },
            {
              title: "Managing Testing and Documentation Requirements",
              description:
                "Proper lab testing and documentation are mandatory for approval.",
            },
            {
              title: "Addressing Factory Audit Observations",
              description:
                "Non-compliance during audits can delay certification.",
            },
            {
              title: "Maintaining Continuous Compliance After Certification",
              description:
                "Ongoing quality monitoring and adherence to BIS standards are required to avoid penalties.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          How Sun Certifications India Can Help
        </SectionHeading>

        <InfoCardGrid
          items={[
            {
              icon: FileText,
              title: "Application and Documentation Support",
              description:
                "Guidance in submitting a complete and accurate BIS application.",
            },
            {
              icon: FlaskConical,
              title: "Assistance with Product Testing",
              description:
                "Helps coordinate with BIS-approved laboratories.",
            },
            {
              icon: ClipboardCheck,
              title: "Audit Preparation and Compliance Guidance",
              description:
                "Ensures factory processes meet BIS requirements before inspection.",
            },
            {
              icon: ShieldCheck,
              title: "Post-Licensing Compliance Management",
              description:
                "Advises on record-keeping, surveillance audits, and standard updates.",
            },
          ]}
        />

        <SectionDivider />

        <SectionHeading>
          Frequently Asked Questions About BIS Certification for Furniture
        </SectionHeading>

        <FaqAccordion
          items={[
            {
              question:
                "Is BIS Certification Mandatory for All Furniture Products?",
              answer:
                "No. Only furniture listed under the Furniture QCO 2025 requires mandatory BIS certification.",
            },
            {
              question:
                "Can Imported Furniture Be Sold Without BIS Certification?",
              answer:
                "No. Furniture under the mandatory categories cannot be sold in India without BIS approval.",
            },
            {
              question: "How Long Does Furniture Certification Take?",
              answer:
                "Typically 2–3 months, depending on testing and inspections.",
            },
            {
              question:
                "What Is the Difference Between BIS Certification and an ISI Mark?",
              answer:
                "BIS certification is the approval process; the ISI mark is the certification label displayed on furniture.",
            },
            {
              question:
                "What Are the Applicable BIS Standards for Furniture?",
              answer:
                "IS 17631–IS 17636 cover chairs, stools, work chairs, tables, beds, bunk beds, and storage units.",
            },
          ]}
        />

        <SectionDivider />


        <SectionHeading>
          Related Resources
        </SectionHeading>

        <CheckPointsList
          points={[
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS ISI Certification
              </a>
            </>,
            <>
              <a
                href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
                className="text-blue-600 hover:underline"
              >
                BIS Certificate for Foreign Manufacturer
              </a>
            </>,
          ]}
        />

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={2} />
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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
