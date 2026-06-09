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
import { SlashIcon } from "lucide-react";

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

const SectionDivider = () => <div className="h-px w-full bg-gray-300 my-6" />;

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

        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture is an essential part of homes, offices, and public spaces.
          Ensuring the safety, durability, and quality of furniture is crucial
          for consumers and manufacturers alike. In India,{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS certification for furniture
          </Link>{" "}
          is a mandatory requirement for certain categories of furniture under
          the Furniture (Quality Control) Order, 2025. This guide provides a
          detailed overview of BIS standards, ISI marks, the certification
          process, and compliance requirements.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification for Furniture?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Meaning of BIS Certification for Furniture
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is a formal process by which the Bureau of Indian
          Standards (BIS) evaluates products to ensure they comply with Indian
          standards. For furniture, this certification ensures that products
          meet defined safety, performance, and quality parameters. Once
          certified, manufacturers can use the{" "}
          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="text-blue-600 hover:underline"
          >
            ISI mark
          </Link>{" "}
          on their furniture, signaling compliance to buyers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Difference Between BIS Certification and ISI Mark for Furniture
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>BIS Certification:</strong> The process of evaluation,
            testing, and approval by BIS.
          </li>
          <li>
            <strong>ISI Mark:</strong> A mark granted after BIS certification
            that indicates the product meets Indian standards. The ISI mark is
            the visible assurance of compliance for consumers.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why BIS Certification is Important for Furniture Manufacturers and
          Importers
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal compliance with Indian regulations.</li>
          <li>
            Access to the Indian market and government procurement opportunities.
          </li>
          <li>Enhanced consumer trust and competitive advantage.</li>
          <li>
            Reduced risks of recalls, penalties, or import restrictions.
          </li>
        </ul>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Requirements for Furniture Manufacturers
        </h2>

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

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Regulatory Framework for BIS Certification of Furniture in India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Overview of the Furniture (Quality Control) Order, 2025
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Furniture QCO 2025 mandates that certain furniture categories must
          comply with BIS standards. The QCO provides the legal basis for
          compulsory certification and outlines the types of furniture covered.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Role of the Bureau of Indian Standards (BIS)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS develops Indian Standards (IS), evaluates manufacturing units,
          conducts product testing, and issues licenses for the use of the ISI
          mark. It also monitors compliance through audits and surveillance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mandatory vs Voluntary BIS Certification for Furniture
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Mandatory:</strong> Categories specified under the Furniture
            QCO, such as beds, chairs, and storage units.
          </li>
          <li>
            <strong>Voluntary:</strong> Manufacturers can choose certification
            for additional product categories to enhance market credibility.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability of the Furniture QCO to Manufacturers and Importers
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers producing furniture covered under the QCO.</li>
          <li>Foreign manufacturers exporting to India.</li>
          <li>Importers selling furniture domestically.</li>
        </ul>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Furniture Products Covered Under BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Furniture Categories and Applicable BIS Standards
        </h3>

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

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Standards for Furniture and Their Requirements
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Requirements Under BIS Furniture Standards
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture must withstand normal use without deformation or structural
          failure. Tests include weight-bearing capacity, joint strength, and
          material stability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Durability Testing Requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture must meet safety norms to prevent accidents (e.g., tipping of
          chairs or collapse of beds) and durability standards to ensure
          longevity.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Parameters Evaluated During Certification
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Material quality and finish.</li>
          <li>Load-bearing capacity.</li>
          <li>Stability, ergonomics, and safety features.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Compliance Requirements for Different Furniture Categories
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Each furniture type has specific IS standards detailing dimensions,
          performance tests, and permissible tolerances. Compliance ensures
          uniformity and quality across manufacturers.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Furniture?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Indian Furniture Manufacturers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          All domestic manufacturers of furniture covered under the Furniture QCO
          must obtain BIS certification before selling products.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Foreign Manufacturers Exporting Furniture to India
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Exporters must comply with BIS standards to legally sell furniture in
          India and use the ISI mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Furniture Importers and Brand Owners
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Importers must ensure that the furniture they bring into India complies
          with BIS norms, even if manufactured abroad.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          E-Commerce Sellers and Retail Businesses
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Online and offline retailers selling furniture under covered categories
          must verify BIS certification to avoid legal liabilities.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS ISI Certification for Furniture: Step-by-Step Process
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Identification and Applicable Standard Selection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identify the furniture category and relevant BIS standard (IS
          17631–IS 17636) for testing and certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Testing in BIS-Recognized Laboratories
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture is tested for strength, stability, and durability in
          BIS-approved labs. Test reports are mandatory for application.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Submission of BIS Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers submit an application to BIS with product specifications,
          technical details, and test reports.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection and Assessment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS conducts a factory audit to check manufacturing processes, quality
          control systems, and production consistency.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS Licence and ISI Mark Permission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Upon approval, BIS issues a license allowing the manufacturer to use the
          ISI mark on certified furniture.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance Requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Regular audits, periodic testing, and adherence to BIS standards are
          required to maintain certification.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Company Registration and Manufacturing Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Business licenses, GST registration, and manufacturing facility
          details.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Technical Specifications and Drawings
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Detailed designs, materials used, and assembly instructions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Test Reports and Quality Control Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Reports from BIS-approved labs demonstrating compliance with IS
          standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory and Production Process Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality management systems, process flow, and inspection procedures.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for BIS Certified Furniture
        </h2>

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

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          ISI Mark for Furniture: Usage and Compliance Requirements
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What Does the ISI Mark on Furniture Indicate?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI mark confirms that furniture meets Indian standards and has
          been certified by BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rules for Affixing the ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The mark should be visible, permanent, and correctly formatted as per
          BIS guidelines.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consequences of Misuse of the ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Illegal use can lead to penalties, license cancellation, and legal action
          under the BIS Act, 2016.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          How Buyers Can Verify BIS Certified Furniture
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Consumers can verify the license number on BIS&apos;s official website.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Timeline, Validity, and Renewal of BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Certification Timeline for Furniture Products
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Typically 2–3 months, depending on testing and factory inspection
          schedules.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Validity of BIS Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The licence is valid for 1–3 years and requires renewal before expiry.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Renewal Process for BIS Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Renewal includes updated test reports, factory inspections, and
          compliance confirmation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Surveillance and Ongoing Compliance Requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS conducts random audits and tests to ensure continuous adherence to
          standards.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certified Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Compliance and Market Access
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory for selling certain furniture types in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Improved Product Quality and Consumer Trust
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification signals reliability and safety.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Competitive Advantage for Furniture Manufacturers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Certified furniture has higher market credibility and procurement
          eligibility.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Eligibility for Government and Institutional Procurement
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Only BIS-certified products can be supplied to government or
          institutional buyers.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance with BIS Furniture Regulations
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturing or Selling Non-Certified Furniture
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Violates the QCO, resulting in fines and product seizure.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Import Restrictions on Non-Compliant Furniture
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-certified imports can be blocked at customs.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Penalties Under the BIS Act, 2016
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Includes monetary fines, imprisonment, and prohibition from selling
          products.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Business Risks Associated with Non-Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Loss of consumer trust, legal disputes, and restricted market access.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Challenges in Obtaining BIS Certification for Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Identifying the Correct Indian Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must ensure their product matches the applicable IS
          17631–IS 17636 standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Managing Testing and Documentation Requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proper lab testing and documentation are mandatory for approval.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Addressing Factory Audit Observations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance during audits can delay certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Maintaining Continuous Compliance After Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ongoing quality monitoring and adherence to BIS standards are required
          to avoid penalties.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          How Sun Certifications India Can Help
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Application and Documentation Support
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Guidance in submitting a complete and accurate BIS application.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Assistance with Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Helps coordinate with BIS-approved laboratories.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Audit Preparation and Compliance Guidance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ensures factory processes meet BIS requirements before inspection.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Licensing Compliance Management
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Advises on record-keeping, surveillance audits, and standard updates.
        </p>

        <SectionDivider />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions About BIS Certification for Furniture
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certification Mandatory for All Furniture Products?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              No. Only furniture listed under the Furniture QCO 2025 requires
              mandatory BIS certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Can Imported Furniture Be Sold Without BIS Certification?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              No. Furniture under the mandatory categories cannot be sold in
              India without BIS approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              How Long Does Furniture Certification Take?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Typically 2–3 months, depending on testing and inspections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What Is the Difference Between BIS Certification and an ISI Mark?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              BIS certification is the approval process; the ISI mark is the
              certification label displayed on furniture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What Are the Applicable BIS Standards for Furniture?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              IS 17631–IS 17636 cover chairs, stools, work chairs, tables, beds,
              bunk beds, and storage units.
            </p>
          </div>
        </div>

        <SectionDivider />


        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">BIS ISI Certification</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS Certificate for Foreign Manufacturer</a>
          </li>
        </ul>

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
