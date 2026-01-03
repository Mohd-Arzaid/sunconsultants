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

const BISCertificateforGeneralPurposeChairsandStools = () => {
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

export default BISCertificateforGeneralPurposeChairsandStools;

const MetaTags = () => {
  const title =
    "BIS Certificate for Chairs & Stools | IS 17632:2022 BIS License";
  const ogTitle = "BIS Certification for Chairs & Stools – IS 17632:2022 Guide";
  const twitterTitle = "BIS License for Chairs & Stools | IS 17632:2022";
  const metaDescription =
    "Get BIS Certificate for Chairs & Stools under IS 17632:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Chairs & Stools as per IS 17632:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Chairs & Stools under IS 17632:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Chairs & Stools , BIS License for Chairs & Stools , IS 17632:2022 , BIS Certification for Chairs & Stools";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/chairs-and-stools-is-17632";
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
                    BIS Certificate for General Purpose Chairs and Stools – IS
                    17632:2022
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certificate for General Purpose Chairs and Stools – Complete Guide
          to IS 17632:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforchairsandstools.webp"
            title="BIS License for General Purpose Chairs and Stools"
            alt="BIS Certificate for General Purpose Chairs and Stools - IS 17632:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for General Purpose Chairs and Stools is a
          mandatory requirement under Indian Standard IS 17632:2022. This
          standard specifies the safety, durability, and performance
          requirements for chairs and stools used in homes, offices, commercial
          areas, educational institutions, cafeterias, restaurants, hotels, and
          public spaces.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chairs and stools are among the most used furniture items and are
          constantly subjected to load, movement, and repetitive stress. A
          structurally weak chair or stool can collapse suddenly, leading to
          injuries. To prevent such hazards and ensure consumer safety, the
          Bureau of Indian Standards (BIS) requires every manufacturer and
          importer to obtain BIS Certification for Chairs and Stools before
          selling them in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This page provides a complete guide to BIS Certification for chairs
          and stools under IS 17632:2022, including the certification process,
          required documents, testing requirements, fees, challenges, penalties,
          and benefits.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a product compliance system governed by the
          Bureau of Indian Standards, the national standards authority of India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS Certificate ensures that a product:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Meets Indian safety and quality standards</li>
          <li>Has passed BIS-approved lab testing</li>
          <li>Has undergone factory inspection</li>
          <li>Saves consumers from unsafe or substandard products</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certified products display the ISI Mark, demonstrating compliance with
          Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Standard – IS 17632:2022 for Chairs & Stools
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Standard for chairs and stools is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17632:2022</strong> — General Purpose Chairs and Stools:
          Safety Requirements
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers all non-specialized chairs and stools used for
          seating purposes in homes, offices, commercial environments, public
          places, and institutional settings.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Products Covered Under IS 17632:2022
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>General-purpose chairs</li>
          <li>Dining chairs</li>
          <li>Office visitor chairs</li>
          <li>Study chairs</li>
          <li>Cafeteria chairs</li>
          <li>Restaurant chairs</li>
          <li>Meeting room chairs</li>
          <li>Waiting area chairs</li>
          <li>Wooden chairs</li>
          <li>Metal chairs</li>
          <li>Plastic chairs (non-specialized)</li>
          <li>General-purpose stools</li>
          <li>Bar stools</li>
          <li>Dining stools</li>
          <li>Step stools (within defined criteria)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Safety & Performance Parameters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17632:2022 evaluates:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural strength</li>
          <li>Stability</li>
          <li>Durability under repeated use</li>
          <li>Seat strength</li>
          <li>Backrest performance</li>
          <li>Leg impact resistance</li>
          <li>Joint strength</li>
          <li>Surface finish quality</li>
          <li>Edge and corner safety</li>
          <li>Material quality</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All chairs and stools sold in India must comply with these parameters
          and obtain a BIS License for Chairs and Stools.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Chairs & Stools
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Chairs and stools bear human weight and are used frequently across all
          environments. Structural failure can lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Collapsing chairs</li>
          <li>Breakage of legs</li>
          <li>Seat cracking</li>
          <li>Backrest failure</li>
          <li>Injury due to sharp edges</li>
          <li>Instability leading to falls</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Benefits of BIS Certification
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensures safe seating products</li>
          <li>Prevents accidents and injuries</li>
          <li>Improves product durability</li>
          <li>Prevents substandard imports</li>
          <li>Establishes uniform market quality</li>
          <li>Enhances customer confidence</li>
          <li>Mandatory by Indian law (BIS QCOs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without BIS Certification, manufacturers cannot legally sell chairs or
          stools in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Chairs and Stools (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS process follows the ISI Mark Certification Scheme, involving
          testing, inspection, and application verification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1 – Identify Product Type & Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Confirm that the chair/stool falls under IS 17632:2022.</li>
          <li>Identify design variants and materials used.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2 – Submit BIS Application Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Application is filed through the BIS Manak Online Portal, requiring:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturer details</li>
          <li>Factory information</li>
          <li>Product specifications</li>
          <li>Brand/trademark details</li>
          <li>Manufacturing process workflow</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3 – Pay BIS Certification Fees
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Fees include:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Processing fee</li>
          <li>Sample testing charges</li>
          <li>Factory inspection fees</li>
          <li>Marking fees</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4 – Product Testing as per IS 17632:2022
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory testing is performed in a BIS-recognized laboratory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tests Include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stability Test</li>
          <li>Strength Test for Seat</li>
          <li>Backrest Durability Test</li>
          <li>Leg Forward/Side/Rearward Loading Test</li>
          <li>Seat Impact Test</li>
          <li>Drop Test</li>
          <li>Fatigue Test</li>
          <li>Surface Finish Test</li>
          <li>Sharp Edge Test</li>
          <li>Structural durability under repeated cycles</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Test results must show full compliance with IS 17632:2022.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 5 – Factory Inspection by BIS
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer visits the factory to evaluate:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process</li>
          <li>Raw material inspection</li>
          <li>Quality control procedures</li>
          <li>Testing capability</li>
          <li>Calibration of equipment</li>
          <li>Production volume</li>
          <li>Compliance with BIS Scheme of Testing & Inspection (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 6 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          If testing and inspection are successful, BIS issues:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate (ISI Mark License)</li>
          <li>CML Number</li>
          <li>Approval to affix the ISI Mark on chairs and stools</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 7 – Post-License Obligations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use the ISI Mark as per BIS labeling requirements</li>
          <li>Maintain quality control records</li>
          <li>Undergo regular BIS surveillance inspections</li>
          <li>Renew license every 1–2 years</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License for Chairs & Stools
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers the requirements for general purpose chairs and
          stools. This standard applies to completely manufactured/fabricated
          general purpose chairs and stools. It also applies to
          ready-to-assemble units; in that case the requirements of this
          standard shall apply to the assembled units.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Chairs & Stools
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory license/registration</li>
          <li>Manufacturing process flowchart</li>
          <li>Machinery list</li>
          <li>In-house testing equipment list</li>
          <li>Calibration certificates</li>
          <li>Factory layout & floor plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chair/stool drawings</li>
          <li>Dimensions & specifications</li>
          <li>Bill of materials</li>
          <li>Safety features description</li>
          <li>Internal quality test reports</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identity & address proof</li>
          <li>Brand authorization letter</li>
          <li>Trademark certificate (optional)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application form</li>
          <li>Test request form</li>
          <li>Declaration forms</li>
          <li>Authorization letter</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for Chairs & Stools (IS 17632:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 includes extensive mechanical, structural, and safety
          testing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Mandatory Tests
        </h3>

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
                  Forwards Overbalancing and Sideways Overbalancing for Chairs
                  without Arms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rearwards Overbalancing
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sideways Overbalancing for Chairs with Arms
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stools/ Poufs (All Directions)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength Test
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          These tests ensure safe daily use under real-world conditions.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Chair failing stability tests</strong>
            <br />
            Occurs due to improper weight distribution.
            <br />
            Fix: Improve leg design, widen base area.
          </li>
          <li>
            <strong>Weak joints causing test failures</strong>
            <br />
            Fix: Use reinforced materials & better connectors.
          </li>
          <li>
            <strong>Inadequate in-house testing equipment</strong>
            <br />
            Fix: Install required BIS-compliant instruments.
          </li>
          <li>
            <strong>Documentation inconsistencies</strong>
            <br />
            Fix: Prepare documents systematically before applying.
          </li>
          <li>
            <strong>Product variants not mapped properly</strong>
            <br />
            Fix: Group products based on structure & test parameters.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Chairs & Stools
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal permission to sell in India</li>
          <li>Improved product safety</li>
          <li>Enhanced customer trust</li>
          <li>Lower product liability risk</li>
          <li>Required for e-commerce listings</li>
          <li>Essential for government tenders</li>
          <li>Higher brand credibility</li>
          <li>Competitive advantage</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selling chairs or stools without BIS certification may lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary fines</li>
          <li>Product recall/seizure</li>
          <li>Cancellation of factory licenses</li>
          <li>Criminal prosecution</li>
          <li>Import restrictions</li>
          <li>Market blacklisting</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Penalties are enforced under the BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Chairs & Stools?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Importers</li>
          <li>Brand owners/traders</li>
          <li>OEM/ODM suppliers</li>
          <li>Retail chains</li>
          <li>Online sellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each factory requires a separate BIS License.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for General Purpose Chairs and Stools under IS
          17632:2022 is mandatory for ensuring product safety, structural
          stability, and durability. BIS certification not only helps
          manufacturers maintain high-quality standards but also enables legal
          market access and increases consumer confidence.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With professional assistance, the certification process—from testing
          to inspection and approval—becomes smooth, predictable, and fully
          compliant.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Chairs and Stools
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certification mandatory for chairs and stools?
              </strong>
              <br />
              Yes, as per IS 17632:2022, all general-purpose chairs and stools
              must be BIS certified before being sold in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. What tests are required?</strong>
              <br />
              Stability, strength, durability, impact, fatigue, and material
              safety tests.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. How long does BIS certification take?</strong>
              <br />
              Typically 30–45 days.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. What is the certification cost?</strong>
              <br />
              Around ₹60,000–₹1,30,000 depending on testing and inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Can foreign manufacturers apply?</strong>
              <br />
              Yes, under the FMCS scheme.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Is ISI marking mandatory?</strong>
              <br />
              Yes, after BIS license is granted.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Why do chairs fail BIS testing?</strong>
              <br />
              Common causes include weak legs, poor joint strength, and
              instability.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                8. Can multiple models be covered under one license?
              </strong>
              <br />
              Only if they meet similarity and standard compliance criteria.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is a factory inspection required?</strong>
              <br />
              Yes, it is compulsory for ISI mark certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. What documents are needed?</strong>
              <br />
              Factory license, technical specs, machinery list, QC plan, product
              drawings, etc.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
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
