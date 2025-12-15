import FaqAuthorEng from "@/components/common/FaqAuthorEng";
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

const BISCertificateForWorkChairs = () => {
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

export default BISCertificateForWorkChairs;

const MetaTags = () => {
  const title = "BIS Certificate for Work Chairs | IS 17631:2022 BIS License";
  const ogTitle = "BIS Certification for Work Chairs – IS 17631:2022 Guide";
  const twitterTitle = "BIS License for Work Chairs | IS 17631:2022";
  const metaDescription =
    "Get BIS Certificate for Work Chairs under IS 17631:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Work Chairs as per IS 17631:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Work Chairs under IS 17631:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Work Chairs, BIS License for Work Chairs, IS 17631:2022, BIS Certification for Work Chairs";
  const websiteUrl =
    "https://bis-certifications.com/bis-certification-for-work-chairs-is-17631";
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
                    BIS Certificate for Work Chairs – IS 17631:2022
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
          BIS Certificate for Work Chairs – A Complete Compliance Guide for IS
          17631:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="BIS License for Work Chairs"
            alt="BIS Certificate for Work Chairs - IS 17631:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The increasing use of office and task seating—whether in corporate
          workspaces, co-working centers, home offices, or institutional
          setups—has made safety and ergonomic performance essential. To ensure
          manufacturers supply structurally stable, durable, and user-safe
          seating products, the Government of India has mandated BIS
          Certification for Work Chairs under IS 17631:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Work chairs typically endure repetitive loading, continuous body
          movement, tilting, swiveling, and height adjustments. A failure in any
          performance feature can lead to severe injury. This is why compliance
          with IS 17631:2022 – Work Chairs: Safety Requirements is now
          compulsory for all manufacturers and importers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This guide explains the complete BIS licensing process, including
          standards, testing, fees, documentation, responsibilities, benefits,
          and challenges—crafted with fresh content to avoid duplication across
          your website.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) oversees the quality and safety
          of products supplied within the Indian market. Any product falling
          under an Indian Standard listed in a mandatory Quality Control Order
          must be evaluated and certified by BIS before sale.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certificate – What It Represents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS Certificate indicates that a work chair:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Has passed performance and durability testing</li>
          <li>Meets material and construction specifications</li>
          <li>Is safe for long-term daily usage</li>
          <li>
            Complies with the ergonomic and structural guidelines in Indian
            Standards
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers who meet these requirements are issued a BIS License
          allowing them to affix the ISI Mark.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Applicable Standard for Work Chairs – IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The governing standard for task and office work chairs is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17631:2022</strong> – Work Chairs: Safety Requirements
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This standard focuses on seating intended for extended use in working
          environments.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Products Covered Under This Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ergonomic office chairs</li>
          <li>Task chairs</li>
          <li>Swivel chairs</li>
          <li>Work desk chairs</li>
          <li>Adjustable-height work chairs</li>
          <li>Executive work chairs</li>
          <li>Mesh or fabric-back work chairs</li>
          <li>Chairs equipped with armrests</li>
          <li>Chairs with tilting/locking mechanisms</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why IS 17631:2022 Compliance Is Critical
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Work chairs differ significantly from general-purpose chairs because
          they:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Support continuous movement</li>
          <li>Use mechanical and adjustment mechanisms</li>
          <li>Carry dynamic loads</li>
          <li>Require durability for prolonged use</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Poorly built chairs may fail at:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Base joints</li>
          <li>Swivel mechanisms</li>
          <li>Gas lift systems</li>
          <li>Seat/back support</li>
          <li>Leg or caster structure</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          This can lead to workplace injuries, operational downtime, and product
          liability issues.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Mandatory BIS Certification Ensures
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Safe ergonomic design</li>
          <li>Reliable load-bearing capacity</li>
          <li>Strong durability under cyclic testing</li>
          <li>Resistance to mechanical wear</li>
          <li>Compliance with user safety parameters</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Thus, obtaining a BIS License for Work Chairs is non-negotiable for
          Indian and foreign manufacturers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License for Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers the requirements of work chairs. This standard
          applies to completely manufactured/fabricated work chairs. It also
          applies to ready-to-assemble units; in that case the requirements of
          this standard shall apply to the assembled units.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Work Chairs (IS 17631:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process for work chairs involves a mixture of lab
          evaluation, factory auditing, and technical scrutiny.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 1 – Product Evaluation & Standard Mapping
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Identify all chair variants and align them with IS 17631:2022.
          Understand which models share the same construction and which require
          separate testing.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 2 – Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The manufacturer submits the application via the Manak Online BIS
          Portal. Information required includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing site details</li>
          <li>Raw material controls</li>
          <li>Technical specifications</li>
          <li>Production capabilities</li>
          <li>Brand ownership documentation</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 3 – Fee Payment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fees must be paid for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application</li>
          <li>Processing</li>
          <li>Testing</li>
          <li>Inspection</li>
          <li>Marking</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 4 – Sample Testing (IS 17631:2022 Requirements)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS-recognized laboratory evaluates the chair against multiple
          safety and performance criteria.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Work Chair Tests Include
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seat and back static load tests</li>
          <li>Durability loading cycles</li>
          <li>Swivel/rotation testing</li>
          <li>Tilt mechanism endurance</li>
          <li>Gas lift mechanism performance</li>
          <li>Caster strength and rolling resistance</li>
          <li>Base stability and overload testing</li>
          <li>Armrest load capability</li>
          <li>Impact resistance tests</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The lab issues a detailed test report to BIS.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 5 – Factory Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS inspectors review the facility's:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Production system</li>
          <li>Material inspection records</li>
          <li>Internal quality assurance processes</li>
          <li>Testing instruments & calibration logs</li>
          <li>Compliance with the Scheme of Testing & Inspection (STI)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 6 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Once conformity is confirmed, BIS grants:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The BIS License/ISI Mark certification</li>
          <li>A unique CML number</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 7 – Consistent Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain ongoing internal checks</li>
          <li>Follow marking rules</li>
          <li>Cooperate during surveillance inspections</li>
          <li>Renew the license periodically</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A complete set of documents ensures faster approval.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Business & Factory Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration</li>
          <li>Manufacturing diagram & layout</li>
          <li>Production workflow</li>
          <li>Machinery list</li>
          <li>Test equipment list</li>
          <li>Calibration certificates</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chair engineering drawings</li>
          <li>Mechanism specifications</li>
          <li>Material data sheets</li>
          <li>Bill of materials</li>
          <li>Assembly instructions</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identity proof of authorized signatory</li>
          <li>Brand authorization letters</li>
          <li>Trademark certificate</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS-Specific Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application form</li>
          <li>Undertakings</li>
          <li>Test request form</li>
          <li>Label samples</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Work chairs undergo more complex testing than general chairs due to
          moving parts.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Key Tests Conducted
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requirements
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
                  7.3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Front Edge Overturning
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Forwards Overturning
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Forwards Overturning for Chairs with Foot Rest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sideways Overturning for Chairs Without Arm Rests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Sideways Overturning for Chairs With Arm Rests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rearwards Overturning for Chairs Without Back Rest
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Seat Front Edge Static Load Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Combined Seat and Back Static Load Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arm Rest Downward Static Load Test — Central
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arm Rest Downward Static Load Test — Front
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Arm Rest Sideways Static Load Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Foot Rest Static Load Test
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          These tests simulate months or years of regular use within a few days.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges in BIS Certification for Work Chairs
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>✔ 1. Failure in mechanical/tilt testing</strong> – Often
            caused by weak mechanisms or low-grade hardware.
          </li>
          <li>
            <strong>✔ 2. Gas lift mechanism non-compliance</strong> – Gas lifts
            must meet strict pressure and safety parameters.
          </li>
          <li>
            <strong>✔ 3. Inadequate testing infrastructure</strong> – Work chair
            testing requires specialized rigs.
          </li>
          <li>
            <strong>✔ 4. Incorrect product grouping</strong> – Different
            mechanisms = separate testing.
          </li>
          <li>
            <strong>✔ 5. STI non-compliance</strong> – STI errors can delay
            license issuance.
          </li>
          <li>
            <strong>✔ 6. Document mismatches</strong> – Brand name and model
            name must match BIS application exactly.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Work Chairs
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Facilitates legal sales across India</li>
          <li>Boosts customer trust & brand reputation</li>
          <li>Ensures long-term durability</li>
          <li>Reduces warranty claims and failures</li>
          <li>Protects from regulatory penalties</li>
          <li>Enables listing on e-commerce platforms</li>
          <li>Mandatory for government tenders and corporate supplies</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Selling Work Chairs Without BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance can result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy financial penalties</li>
          <li>Confiscation of inventory</li>
          <li>Production shutdown orders</li>
          <li>Import prohibition</li>
          <li>Criminal prosecution</li>
          <li>Cancellation of business license</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Strict enforcement is carried out under the BIS Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Must Obtain BIS Certification for Work Chairs?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Brand owners</li>
          <li>Importers</li>
          <li>OEM/ODM suppliers</li>
          <li>Warehouse distributors</li>
          <li>Retail and online furniture brands</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each factory requires a unique BIS license.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Work Chairs under IS 17631:2022 is crucial for
          ensuring safe, durable, and ergonomically sound seating products in
          India. Mandatory certification enhances customer trust, reduces
          product liability risks, and ensures compliance with national quality
          standards. With professional support, the certification journey—from
          testing to inspection to licensing—becomes efficient and predictable.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Work Chairs (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. Which chairs fall under IS 17631:2022?</strong>
              <br />
              Any chair designed for work environments, including office
              ergonomic chairs, task chairs, swivel chairs, and adjustable
              chairs.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Is BIS Certification mandatory for work chairs?
              </strong>
              <br />
              Yes. BIS certification is compulsory before manufacturing,
              selling, or importing work chairs in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                3. What makes work chair testing different from general chair
                testing?
              </strong>
              <br />
              Work chairs use mechanisms like swivels, gas lifts, tilt systems,
              and casters—requiring advanced mechanical and endurance testing.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. How long does BIS certification take?</strong>
              <br />
              Typically 30–45 days for indian manufacturer and around 120 days
              for foreign manufacturers, depending on testing and documentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Can foreign manufacturers apply?</strong>
              <br />
              Yes, through the FMCS (Foreign Manufacturers Certification
              Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. What if a chair fails BIS testing?</strong>
              <br />
              It must be redesigned, corrected, and retested until it meets IS
              17631:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. What documents are required for BIS application?
              </strong>
              <br />
              Factory details, product drawings, machinery list, QC documents,
              brand ownership, and legal papers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Do all chair models require separate testing?</strong>
              <br />
              If models differ in design, mechanism, or structure, separate
              testing may be needed.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI marking mandatory after approval?</strong>
              <br />
              Yes, the ISI mark must appear on the product, label, and
              packaging.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={4} />
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
