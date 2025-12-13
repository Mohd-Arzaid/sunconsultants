import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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
import { SlashIcon } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificateForTablesAndDesksUnit = () => {
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

export default BISCertificateForTablesAndDesksUnit;

const MetaTags = () => {
  const title =
    "BIS Certificate for Tables & Desks | IS 17633:2022 BIS License";
  const ogTitle = "BIS Certification for Tables & Desks – IS 17633:2022 Guide";
  const twitterTitle = "BIS License for Tables & Desks | IS 17633:2022";
  const metaDescription =
    "Get BIS Certificate for Tables & Desks under IS 17633:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Tables & Desks as per IS 17633:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Tables & Desks under IS 17633:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Tables & Desks, BIS License for Tables & Desks, IS 17633:2022, BIS Certification for Tables & Desks";
  const websiteUrl =
    "https://bis-certifications.com/bis-certification-for-tables-&-desks-unit-is-17633";
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
                    <Link to="/bis-certification-products">
                      BIS Certification Products
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificate for Tables & Desks – IS 17633:2022
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

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certificate for Tables and Desks – Complete Guide to IS 17633:2022
          BIS Certification
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS License for Tables and Desks"
            alt="BIS Certificate for Tables and Desks - IS 17633:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Tables and Desks is mandatory for all
          manufacturers, importers, and sellers of tables and desks in India.
          Under the Indian Standard IS 17633:2022 – Tables and Desks: Safety
          Requirements, these furniture items must be tested and certified by
          the Bureau of Indian Standards (BIS) before they can be legally sold
          in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tables and desks are essential components of homes, offices, schools,
          universities, commercial spaces, hospitality environments, and
          industrial workplaces. Because they often support weight, impact, and
          continuous usage, their structural strength and safety are critical.
          To ensure consumer protection and product reliability, BIS mandates
          compulsory certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains IS 17633:2022, the BIS registration
          process, testing, required documentation, fees, timelines, penalties,
          and benefits for manufacturers and importers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a regulatory compliance process administered by
          the Bureau of Indian Standards, India's national standards authority.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate confirms that the product meets the safety, quality,
          performance, and durability requirements set by Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Benefits of BIS Certification
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensures consumer safety</li>
          <li>Supports high-quality manufacturing</li>
          <li>Reduces product failure risk</li>
          <li>Improves market acceptance</li>
          <li>Legally required under BIS Quality Control Orders (QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once approved, the product bears the BIS Mark (ISI Mark) along with
          the license number.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Which Indian Standard Applies to Tables & Desks? – IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable BIS standard is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17633:2022</strong> – Tables and Desks: Safety
          Requirements
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This standard defines performance, structural safety, and durability
          requirements for all types of tables and desks used in residential,
          commercial, hospitality, and institutional environments.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Products Covered
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Office desks</li>
          <li>Computer desks</li>
          <li>Study tables</li>
          <li>Dining tables</li>
          <li>Coffee tables</li>
          <li>Work desks</li>
          <li>Training desks</li>
          <li>School/college desks</li>
          <li>Teacher tables</li>
          <li>Modular workstation tables</li>
          <li>Writing tables</li>
          <li>Meeting/conference tables</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Key Safety Parameters Under IS 17633:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural stability</li>
          <li>Load-bearing capacity</li>
          <li>Impact resistance</li>
          <li>Horizontal/vertical force performance</li>
          <li>Surface finish quality</li>
          <li>Edge safety</li>
          <li>Durability under repetitive use</li>
          <li>Material safety</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Every table or desk sold in India must comply with these parameters
          through BIS Registration for Tables & Desks.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Tables and Desks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tables and desks are high-use furniture items found in homes, offices,
          schools, and public areas. Structural failures can cause accidents
          such as:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Collapsing under weight</li>
          <li>Sharp edge injuries</li>
          <li>Instability during use</li>
          <li>Breakage of joints</li>
          <li>Surface detachment</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          To avoid these hazards, BIS certification ensures:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Safe design and construction</li>
          <li>Compliance with structural load requirements</li>
          <li>Durable performance</li>
          <li>Prevention of tipping and collapse</li>
          <li>High-quality material selection</li>
          <li>Uniform market standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Selling tables and desks without a BIS License for Tables & Desks is
          illegal in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for Tables and Desks (IS 17633:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification process follows the ISI Scheme (Conformity
          Assessment Scheme–I), which includes product testing and factory
          inspection.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 1 – Identify Product Category & Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirm that the table/desk falls under IS 17633:2022. Identify number
          of variants and materials.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 2 – File BIS Application (Online Submission)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fill the application on the BIS Manak Online Portal with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturer details</li>
          <li>Factory address</li>
          <li>Product specifications</li>
          <li>Trademark details</li>
          <li>Quality control systems</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 3 – Payment of BIS Certification Fees
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Includes:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Processing fee</li>
          <li>Product testing charges</li>
          <li>Factory inspection fees</li>
          <li>Marking fees</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 4 – Sample Testing in a BIS-Recognized Laboratory
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Products must undergo full testing as prescribed under IS 17633:2022.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Tests Conducted
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stability Test</li>
          <li>Strength Test (Static Load)</li>
          <li>Durability Test (Repetitive Loading)</li>
          <li>Impact Test</li>
          <li>Deflection Measurement</li>
          <li>Edge and Surface Safety Test</li>
          <li>Workspace Load Test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Lab uploads the test reports directly to BIS.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 5 – BIS Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer visits the manufacturing facility to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quality management system</li>
          <li>In-house testing capability</li>
          <li>Raw material control</li>
          <li>Production line & machinery</li>
          <li>Calibration of instruments</li>
          <li>Compliance with STI (Scheme of Testing & Inspection)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 6 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS issues:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>ISI Mark approval</li>
          <li>Unique CML license number</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          After this, the manufacturer can legally mark and sell tables/desks in
          India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 7 – Post-License Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain records as per STI</li>
          <li>Use ISI marking correctly</li>
          <li>Allow periodic BIS inspections</li>
          <li>Renew license every 1–2 years</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License for Tables & Desks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> This standard covers the requirements relating to
          the performance and safety that is, strength, stability and durability
          of tables and desks to be used for in a seated and/or standing
          positions, used by adults.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> This standard applies to completely manufactured/
          fabricated tables and desks. It also applies to ready-to-assemble
          units; in that case the requirements of this standard shall apply to
          the assembled units.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Tables & Desks
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Manufacturing Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory license</li>
          <li>Machinery list</li>
          <li>Testing equipment list</li>
          <li>Calibration certificates</li>
          <li>Factory layout</li>
          <li>Process flowchart</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Table/desk drawings</li>
          <li>Bill of materials</li>
          <li>Product specifications</li>
          <li>Internal quality test reports</li>
          <li>Photos/videos of the product</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Authorized signatory ID proof</li>
          <li>Address proof</li>
          <li>Brand authorization letter</li>
          <li>Trademark registration certificate</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Filled application form</li>
          <li>Manufacturer's undertaking</li>
          <li>Test request letter</li>
          <li>Letter of authorization</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Complete documentation ensures faster approvals.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements under IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The testing evaluates strength, stability, durability, and safety.
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requirement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Design and workmanship
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stated load
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.1.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  For occasional heavy loads
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength under horizontal static force
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  General
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Impact Test for Glass Table Tops
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Impact Test for All Other Table Tops
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Deflection of Table Tops
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.9
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Drop Test
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testing must be conducted only at BIS-approved laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>1. Product failing load or durability tests</strong>
            <br />
            Solution: Strengthen joints, use BIS-compliant materials, add
            reinforcement.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>2. Incomplete documentation</strong>
            <br />
            Solution: Prepare all legal, technical, and manufacturing documents
            in advance.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>3. Factory lacking proper testing equipment</strong>
            <br />
            Solution: Install required instruments and maintain calibration as
            per BIS guidelines.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>4. Incorrect labeling</strong>
            <br />
            Solution: Ensure ISI marking follows BIS rules exactly.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>5. Misclassification of product models</strong>
            <br />
            Solution: Get professional guidance to categorize variants
            correctly.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Tables & Desks
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal authorization to sell in India</li>
          <li>Increased customer trust</li>
          <li>Better product durability</li>
          <li>Access to major retailers & e-commerce platforms</li>
          <li>Lower product liability risk</li>
          <li>Higher brand credibility</li>
          <li>Compliance with government QCOs</li>
          <li>Competitive market advantage</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selling or distributing tables/desks without BIS certification may
          result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Heavy fines</li>
          <li>Criminal prosecution</li>
          <li>Ban on imports</li>
          <li>Business closure orders</li>
          <li>License cancellation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards Act, 2016 enforces stringent penalties.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Tables & Desks?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          This certification is mandatory for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers</li>
          <li>Importers</li>
          <li>Traders/brand owners</li>
          <li>OEM/ODM suppliers</li>
          <li>Furniture distributors</li>
          <li>E-commerce sellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each factory must obtain a separate BIS License.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end assistance:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standard interpretation (IS 17633:2022)</li>
          <li>Product classification</li>
          <li>Documentation drafting</li>
          <li>Testing coordination</li>
          <li>BIS portal filing</li>
          <li>Factory inspection support</li>
          <li>Continuous follow-up with BIS</li>
          <li>License approval</li>
          <li>Renewal and compliance management</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our expertise ensures fast, hassle-free, and error-free certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Tables and Desks under IS 17633:2022 is a
          mandatory conformity requirement that ensures product safety,
          performance, durability, and compliance with national standards.
          Manufacturers and importers must undergo product testing, factory
          inspection, and meet all BIS documentation and labeling rules to
          obtain the ISI Mark.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With expert assistance, the entire certification process becomes
          smooth, fast, and fully compliant with BIS regulations.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Tables & Desks (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS certification mandatory for tables and desks?
              </strong>
              <br />
              Yes. As per IS 17633:2022, all tables and desks must be
              BIS-certified before being sold in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. What tests are required for certification?</strong>
              <br />
              Mandatory tests include stability, strength, durability,
              deflection, impact, and surface safety tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. What is the BIS certification cost?</strong>
              <br />
              The cost ranges between ₹65,000 – ₹1,30,000, depending on testing
              and inspection factors.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Do foreign manufacturers need BIS Certification?
              </strong>
              <br />
              Yes, through the FMCS scheme, which includes overseas factory
              inspections by BIS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Can one license cover multiple table/desk models?
              </strong>
              <br />
              Yes, but only if models are similar in construction and testing
              parameters.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. How long does the BIS process take?</strong>
              <br />
              Approximately 30–45 days.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is testing mandatory in a BIS-recognized lab?</strong>
              <br />
              Yes, only BIS-approved laboratories can conduct the tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. What happens if the product fails?</strong>
              <br />
              It must be redesigned and resubmitted for testing.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI marking mandatory after certification?</strong>
              <br />
              Yes, ISI Mark is required on the product and packaging.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. What documents are needed?</strong>
              <br />
              Technical drawings, BOM, factory documents, test reports, QC plan,
              and legal documents.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <ServiceAuthorEng />
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
                India's Best Certificate Consultant
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
