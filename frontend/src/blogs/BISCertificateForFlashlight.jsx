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

const BISCertificateForFlashlight = () => {
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

export default BISCertificateForFlashlight;

const MetaTags = () => {
  const title = "BIS Certificate for Flashlight | IS 2083:2024 BIS License";
  const ogTitle = "BIS Certification for Flashlight – IS 2083:2024 Guide";
  const twitterTitle = "BIS License for Flashlight | IS 2083:2024";
  const metaDescription =
    "Get BIS Certificate for Flashlight under IS 2083:2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Flashlight as per IS 2083:2024. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Flashlight under IS 2083:2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Flashlight, BIS License for Flashlight, IS 2083:2024, BIS Certification for Flashlight";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/flashlight-is-2083";
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
                    BIS Certificate for Flashlight – IS 2083:2024
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
          BIS Certificate for Flashlight under IS 2083:2024 – Complete
          Compliance Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforFlashlight.png"
            title="BIS License for Flashlight"
            alt="BIS Certificate for Flashlight - IS 2083:2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Flashlights (commonly referred to as torches) are essential portable
          lighting devices used across households, industries, emergency
          services, security operations, outdoor activities, and disaster
          management. Because flashlights are electrical products that involve
          batteries, circuitry, light sources, and enclosures, quality and
          safety compliance is critical.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To regulate product quality, performance, and consumer safety, the
          Bureau of Indian Standards (BIS) has notified IS 2083:2024 –
          Flashlight: Specification, making BIS Certification mandatory for
          flashlights sold, manufactured, or imported into India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This page provides a comprehensive and original explanation of BIS
          Certification for flashlights, covering the applicable standard,
          certification process, testing requirements, documentation, fees,
          timelines, penalties, and compliance responsibilities.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification and Why It Applies to Flashlights
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is India's national standards
          authority responsible for ensuring that products sold in the Indian
          market meet prescribed safety, quality, and performance benchmarks.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Meaning of BIS Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS Certificate confirms that a flashlight:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conforms to Indian Standard IS 2083:2024</li>
          <li>Has passed all mandatory laboratory tests</li>
          <li>Meets electrical, mechanical, and performance requirements</li>
          <li>Is safe for consumer use</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once approved, the manufacturer is permitted to affix the ISI Mark,
          which signifies compliance with Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 2083:2024 (Flashlight: Specification)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 2083:2024</strong> – Flashlight: Specification
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2083:2024 defines the construction, performance, safety, and
          testing requirements for portable flashlights used for general
          illumination.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Scope of IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Handheld flashlights (torches)</li>
          <li>Battery-operated flashlights</li>
          <li>Rechargeable flashlights</li>
          <li>LED flashlights</li>
          <li>Emergency and utility flashlights</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Key Areas Covered by the Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Luminous performance</li>
          <li>Mechanical strength</li>
          <li>Battery compatibility</li>
          <li>Switch durability</li>
          <li>Protection against overheating</li>
          <li>Resistance to normal wear and tear</li>
          <li>Marking and labeling requirements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any flashlight that falls under this scope must obtain a BIS License
          for Flashlight before entering the Indian market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Flashlights
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Flashlights are widely used by consumers of all age groups and in
          critical situations such as emergencies, power outages, and industrial
          operations. Substandard flashlights can cause:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical short circuits</li>
          <li>Battery leakage or explosion</li>
          <li>Overheating</li>
          <li>Fire hazards</li>
          <li>Poor illumination performance</li>
          <li>Premature failure</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certification Ensures
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical and user safety</li>
          <li>Consistent light output</li>
          <li>Durable construction</li>
          <li>Safe battery operation</li>
          <li>Compliance with Indian regulatory requirements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Selling non-certified flashlights is a legal violation under the BIS
          Act, 2016.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License for Flashlight
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> This standard specifies the requirements and
          tests for flashlights powered by replaceable primary batteries and
          replaceable/built-in secondary batteries with a maximum voltage of 48
          V d.c.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> This standard is applicable to pre-focused as
          well as focusing type of flashlights with incandescent bulb and LED
          module as light source.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1.3</strong> The following are not covered under the scope of
          this standard:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Cord and plug connected handlamps that are within the scope of IS
            10322 (Part 5/Sec 6);
          </li>
          <li>
            Emergency lighting that is within the scope of IS 10322 (Part 5/Sec
            8); and
          </li>
          <li>Flashlights that are intended for hazardous locations.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Flashlights (IS 2083:2024)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification process for flashlights is conducted under the
          ISI Mark Certification Scheme (Scheme-I) and involves multiple stages.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 1 – Product Identification & Standard Mapping
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The manufacturer must confirm that the product qualifies as a
          flashlight under IS 2083:2024 and identify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Type of flashlight</li>
          <li>Power source (battery/rechargeable)</li>
          <li>Light source (LED, bulb, etc.)</li>
          <li>Variants and models</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 2 – Online BIS Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The application is submitted through the BIS Manak Online Portal,
          along with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturer details</li>
          <li>Factory address</li>
          <li>Product description</li>
          <li>Brand/trademark details</li>
          <li>Manufacturing process information</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 3 – Payment of BIS Fees
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Applicable fees include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Processing charges</li>
          <li>Product testing fees</li>
          <li>Factory inspection charges</li>
          <li>Marking fee</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 4 – Product Testing as per IS 2083:2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samples are tested at a BIS-recognized laboratory.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Mandatory Tests for Flashlights
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Luminous intensity test</li>
          <li>Light output stability test</li>
          <li>Battery endurance test</li>
          <li>Switch operation test</li>
          <li>Mechanical strength (drop test)</li>
          <li>Insulation resistance test</li>
          <li>Temperature rise test</li>
          <li>Electrical safety test</li>
          <li>Marking and labeling verification</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Test reports are directly submitted to BIS by the laboratory.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 5 – Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer conducts an on-site inspection to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing setup</li>
          <li>Quality control system</li>
          <li>Incoming material inspection</li>
          <li>In-process checks</li>
          <li>Finished product testing</li>
          <li>Calibration of test instruments</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with the Scheme of Testing and Inspection (STI) is
          mandatory.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 6 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After successful testing and inspection, BIS issues:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>ISI Mark approval</li>
          <li>CML (Certificate of Manufacturing Licence) number</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The manufacturer can now legally manufacture and sell flashlights in
          India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 7 – Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After certification, manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use ISI Mark correctly on product and packaging</li>
          <li>Maintain batch-wise quality records</li>
          <li>Allow BIS surveillance inspections</li>
          <li>Renew the license periodically</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Flashlights
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Manufacturing Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration/license</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery</li>
          <li>In-house testing equipment list</li>
          <li>Calibration certificates</li>
          <li>Factory layout</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specification sheet</li>
          <li>Circuit diagrams</li>
          <li>Battery specifications</li>
          <li>Bill of materials</li>
          <li>Internal test reports</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identity proof of authorized signatory</li>
          <li>Address proof</li>
          <li>Brand authorization letter</li>
          <li>Trademark certificate (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS-Specific Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Undertakings and declarations</li>
          <li>Test request letter</li>
          <li>Label artwork (ISI marking format)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements under IS 2083:2024 (Detailed)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Flashlights must undergo rigorous testing to ensure safety and
          performance.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Only products passing all mandatory tests qualify for BIS approval.
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
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test for Finish
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Checking of dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Checking of markings
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Functional test for switch
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Insulation resistance test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Light distribution test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  18
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Circuit current of LED flashlight
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  19
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Test for charging current in built-in rechargeable
                  battery-operated flashlights
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges in BIS Certification for Flashlights
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Failure in temperature rise test</li>
          <li>Inconsistent luminous output</li>
          <li>Poor switch durability</li>
          <li>Battery compatibility issues</li>
          <li>Incorrect ISI label format</li>
          <li>Incomplete documentation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Pre-testing and expert guidance significantly reduce rejection risks.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Flashlight Manufacturers
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal permission to sell in India</li>
          <li>Enhanced consumer trust</li>
          <li>Improved product reliability</li>
          <li>Acceptance on e-commerce platforms</li>
          <li>Eligibility for government procurement</li>
          <li>Reduced liability and recalls</li>
          <li>Strong brand credibility</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Selling Flashlights Without BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance may result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Heavy monetary penalties</li>
          <li>Import bans</li>
          <li>Manufacturing shutdowns</li>
          <li>Criminal prosecution under BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Flashlights?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Importers</li>
          <li>Brand owners</li>
          <li>OEM/ODM suppliers</li>
          <li>Online sellers and distributors</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each manufacturing unit requires a separate BIS license.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Flashlight under IS 2083:2024 is a mandatory
          regulatory requirement that ensures safety, performance, and
          reliability of portable lighting products in India. Compliance not
          only protects consumers but also strengthens brand credibility and
          market access. With professional guidance, manufacturers and importers
          can achieve BIS certification smoothly and efficiently.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Flashlight (IS 2083:2024)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certification mandatory for flashlights in India?
              </strong>
              <br />
              Yes. Flashlights covered under IS 2083:2024 must be BIS certified.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Which standard applies to flashlights?</strong>
              <br />
              IS 2083:2024 – Flashlight: Specification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. How long does the BIS process take?</strong>
              <br />
              Approximately 30–45 working days for Indian Manufacturers and
              around 120 days for Foreign Manufacturers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Can foreign manufacturers apply for BIS certification?
              </strong>
              <br />
              Yes, through the FMCS scheme.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Is ISI marking mandatory?</strong>
              <br />
              Yes, ISI Mark must be displayed on certified flashlights.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. What happens if a flashlight fails testing?</strong>
              <br />
              The product must be corrected and retested.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Are rechargeable flashlights also covered?</strong>
              <br />
              Yes, if they fall within the scope of IS 2083:2024.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. How long is the BIS license valid?</strong>
              <br />
              1–2 years, renewable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                9. Can multiple models be covered under one license?
              </strong>
              <br />
              Yes, if they meet similarity criteria.
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
