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

const BISCertificateForBunkBeds = () => {
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

export default BISCertificateForBunkBeds;

const MetaTags = () => {
  const title = "BIS Certificate for Bunk Beds | IS 17636:2022 BIS License";
  const ogTitle = "BIS Certification for Bunk Beds – IS 17636:2022 Guide";
  const twitterTitle = "BIS License for Bunk Beds | IS 17636:2022";
  const metaDescription =
    "Get BIS Certificate for bunk beds under IS 17636:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for bunk beds as per IS 17636:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for bunk beds under IS 17636:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Bunk Beds, BIS License for Bunk Beds, IS 17636:2022, BIS Certification for Bunk Beds";
  const websiteUrl =
    "https://bis-certifications.com/bis-certification-for-bunk-beds-is-17636";
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
                    BIS Certificate for Bunk Beds – IS 17636:2022
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
          BIS Certificate for Bunk Beds – Complete Guide to IS 17636:2022 BIS
          Certification
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBunkBeds.png"
            title="BIS License for Bunk Beds"
            alt="BIS Certificate for Bunk Beds - IS 17636:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Bunk Beds is a mandatory requirement in India
          under IS 17636:2022, which lays down the safety, performance, and
          structural requirements for bunk beds used in homes, hostels,
          dormitories, PG accommodations, schools, hotels, and commercial
          establishments. Any manufacturer—Indian or foreign—must obtain a BIS
          Certification for Bunk Beds before selling, importing, exporting, or
          distributing bunk beds in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With increasing demand for space-saving furniture, bunk beds have
          become an essential product category. However, safety risks such as
          falling, collapse, entrapment, and structural failure make BIS License
          for Bunk Beds crucial to ensure consumer protection. This
          comprehensive page will guide you through the BIS Registration for
          Bunk Beds, testing requirements, documentation, fees, timelines,
          penalties, and benefits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are a manufacturer, importer, exporter, trader, or
          start-up, this guide helps you understand the compliance requirements
          under the Bureau of Indian Standards (BIS).
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a quality and safety compliance program governed
          by the Bureau of Indian Standards, the national standards body of
          India. It ensures that products conform to specified Indian Standards
          and are safe, reliable, and fit for use.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          What is BIS Certificate?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS certificate is an official license issued to a manufacturer
          allowing them to use the ISI Mark, demonstrating compliance with
          BIS-prescribed product standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          It proves the product has passed:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Laboratory testing</li>
          <li>Factory inspection</li>
          <li>Quality control assessment</li>
          <li>Safety compliance</li>
          <li>Conformance to Indian Standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS-certified product displays the BIS Logo, also known as the ISI
          Mark, signifying that it meets Indian quality benchmarks.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Which BIS Standard Applies to Bunk Beds? (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bunk beds fall under compulsory BIS certification as per the newly
          introduced standard:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17636:2022</strong> — Bunk Beds – Safety Requirements
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This standard ensures that bunk beds meet strict safety, construction,
          and durability criteria. It covers:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural stability</li>
          <li>Guardrails</li>
          <li>Entrapment hazards</li>
          <li>Load-bearing capacity</li>
          <li>Dimensional requirements</li>
          <li>Material specifications</li>
          <li>Edges and surface finish</li>
          <li>Ladder construction</li>
          <li>Durability and performance tests</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any manufacturer wanting to sell bunk beds in India must obtain a BIS
          License for Bunk Beds under IS 17636:2022.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification is Required for Bunk Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bunk beds are widely used by children and adults, and safety concerns
          make compliance essential. BIS has made certification mandatory to
          prevent:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Collapse or structural failure</li>
          <li>Entrapment of body parts</li>
          <li>Falling from the upper bunk</li>
          <li>Ladder-related injuries</li>
          <li>Poor material quality</li>
          <li>Fire hazards</li>
          <li>Hazardous finishes or sharp edges</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Reasons BIS License for Bunk Beds is Mandatory
        </h3>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensures mechanical strength and durability</li>
          <li>Protects consumers—especially children—from injury</li>
          <li>Maintains uniform quality standards</li>
          <li>Helps brands build trust and credibility</li>
          <li>Ensures compliance with government regulations</li>
          <li>Prevents legal issues and penalties</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without BIS registration, manufacturers and importers cannot legally
          sell the product in the Indian market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Bunk Beds (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification process in India involves testing,
          documentation, and factory inspections. Here is the step-by-step
          procedure:
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 1 — Determine Applicability & Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>IS 17636:2022</strong> — Mandatory
          </li>
          <li>Confirm the product category and manufacturing unit details.</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 2 — BIS Application (Form Submission)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Apply online through the BIS Manak Online Portal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Requirements include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturer details</li>
          <li>Factory address and proof</li>
          <li>Product category & brand</li>
          <li>Manufacturing capabilities</li>
          <li>Quality control processes</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This step starts the official approval cycle.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 3 — Pay BIS Certificate Cost
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After submission, pay:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Testing fees</li>
          <li>Audit fees</li>
          <li>Marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          Fees depend on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of product variants</li>
          <li>Brand names</li>
          <li>Factory location</li>
          <li>Testing parameters</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 4 — Sample Testing (As per IS 17636:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testing is conducted in a BIS-recognized laboratory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tests include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural stability test</li>
          <li>Impact test</li>
          <li>Entrapment test</li>
          <li>Guardrail strength test</li>
          <li>Finish quality test</li>
          <li>Ladder safety test</li>
          <li>Load test</li>
          <li>Durability test</li>
          <li>Edge safety evaluation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The test report is directly uploaded to the BIS portal.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 5 — BIS Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer visits the factory to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quality management system</li>
          <li>Raw material control</li>
          <li>In-process inspections</li>
          <li>Final product testing</li>
          <li>Production capability</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          They check compliance with BIS Scheme of Testing & Inspection (STI).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 6 — Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Once all steps are cleared, BIS issues a:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>ISI Mark Approval</li>
          <li>CML License Number</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          You can now legally use the BIS Mark on bunk beds and packaging.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 7 — Post-License Obligations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain internal testing</li>
          <li>Allow periodic BIS inspections</li>
          <li>Renew the license every 1 or 2 years</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License for Bunk Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> This standard covers the requirements relating to
          the performance and safety that is strength, stability and durability
          of bunk beds for domestic and non-domestic use. This standard also
          applies to single beds for use at a height of the bed base of 800 mm
          or more above finished floor level, irrespective of the use to which
          the space below is put.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> This standard applies to completely manufactured/
          fabricated bunk beds. It also applies to ready-to-assemble units; in
          that case the requirements of this standard shall apply to the
          assembled unit.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Bunk Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Here is a complete list of BIS Certificate Documents:
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flowchart</li>
          <li>List of machinery & equipment</li>
          <li>List of test equipment</li>
          <li>Calibration certificates</li>
          <li>Factory layout/plant layout</li>
          <li>Authorization letter from CEO/Director</li>
          <li>ISO 9001 certificate (if available)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identity proof</li>
          <li>Address proof</li>
          <li>Brand authorization (if third-party brand)</li>
          <li>Trademark registration document (optional)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications</li>
          <li>Bill of materials</li>
          <li>Safety features description</li>
          <li>Quality control plan</li>
          <li>Internal test reports</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Undertaking & declarations</li>
          <li>Test request form</li>
          <li>Sample approval letter</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Having proper documents reduces delays and ensures smooth approval.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements for Bunk Beds (IS 17636:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is a mandatory part of the BIS registration process. Bunk beds
          undergo rigorous tests to ensure safety and durability.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Scheme of Inspection and Testing for Bunk Beds
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Top Bed Safety Barriers
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Gaps
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bed Base
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ladder
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strength of Frame and Fastenings
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Fastening of Upper Bed to lower Bed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Tests must be performed at a BIS-recognized lab only.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Incorrect Product Categorization</strong>
            <br />
            Always verify the correct Indian Standard.
          </li>
          <li>
            <strong>Improper Documentation</strong>
            <br />
            Missing documents cause delays—prepare them beforehand.
          </li>
          <li>
            <strong>Failed Lab Tests</strong>
            <br />
            Ensure high-quality materials, welding, guardrails, and finishing.
          </li>
          <li>
            <strong>Factory Not Ready for Inspection</strong>
            <br />
            Ensure QMS and test equipment are properly maintained.
          </li>
          <li>
            <strong>Trademark Issues</strong>
            <br />
            Brand name must match license application.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          Solving these early reduces processing time drastically.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legally sell bunk beds in India</li>
          <li>Build trust with customers</li>
          <li>Reduce product returns</li>
          <li>Improve brand reputation</li>
          <li>Ensure safety compliance</li>
          <li>Gain competitive advantage</li>
          <li>Expand into retail chains & e-commerce platforms</li>
          <li>Access government tenders</li>
          <li>Avoid penalties & legal actions</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selling bunk beds without BIS Certification may result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Financial penalties</li>
          <li>Factory closure orders</li>
          <li>Legal prosecution</li>
          <li>Ban from Indian market</li>
          <li>Blacklisting of brand</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance is not optional—it is mandatory.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Bunk Beds?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          The following entities must obtain a BIS License for Bunk Beds:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Importers</li>
          <li>Distributors</li>
          <li>E-commerce sellers</li>
          <li>OEM/ODM manufacturers</li>
          <li>Furniture brands & retailers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Every factory (not company) requires a separate BIS license.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end support for BIS Registration for Bunk Beds,
          including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standard interpretation (IS 17636:2022)</li>
          <li>Documentation preparation</li>
          <li>Lab testing coordination</li>
          <li>BIS portal application</li>
          <li>Factory inspection support</li>
          <li>Communication with BIS officers</li>
          <li>License approval assistance</li>
          <li>Post-certification compliance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          With years of expertise, we ensure fast, accurate, and hassle-free BIS
          certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs — BIS Certification for Bunk Beds
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS certification mandatory for bunk beds in India?
              </strong>
              <br />
              Yes. Under IS 17636:2022, it is compulsory for all manufacturers
              and importers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. How long does BIS Certification for bunk beds take?
              </strong>
              <br />
              Typically 30–45 days depending on readiness and documentation.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Can foreign manufacturers apply for BIS?</strong>
              <br />
              Yes, through the FMCS (Foreign Manufacturers Certification
              Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Can I apply for a BIS Certificate online?</strong>
              <br />
              Yes, through the BIS Manak Online Portal.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. What tests are required for bunk bed certification?
              </strong>
              <br />
              Load test, guardrail test, stability test, impact test, entrapment
              test, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. How long is a BIS license valid?</strong>
              <br />
              Usually 1–2 years and renewable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Can one license cover multiple models?</strong>
              <br />
              Only if they fall within the same standard and category.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Is ISI Mark required on bunk beds?</strong>
              <br />
              Yes, the ISI Mark is mandatory after certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. What happens if my product fails lab testing?</strong>
              <br />
              You must modify the product and resubmit samples.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>11. Does BIS check factory infrastructure?</strong>
              <br />
              Yes, during inspection.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>12. Can traders apply for BIS?</strong>
              <br />
              Only if they are brand owners and have a contract with
              manufacturers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>13. What is the BIS Logo?</strong>
              <br />
              It is the standard ISI Mark symbol indicating product conformity.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                14. What documents are needed for BIS certification?
              </strong>
              <br />
              Factory license, layout, machinery list, BOM, QC plan, test
              reports, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>15. Is BIS testing done at the factory?</strong>
              <br />
              No, only at BIS-recognized laboratories.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Bunk Beds under IS 17636:2022 is not
          only mandatory but also essential for ensuring consumer safety,
          product reliability, and legal compliance in India. The certification
          process involves product testing, documentation, factory inspection,
          and license issuance. With proper planning and expert guidance, the
          process becomes smooth, fast, and cost-effective.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are a manufacturer, importer, or brand owner, getting BIS
          certification strengthens your market position, increases customer
          trust, and unlocks new business opportunities. Our expert consulting
          team is ready to assist you with end-to-end BIS Certification for bunk
          beds.
        </p>

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
