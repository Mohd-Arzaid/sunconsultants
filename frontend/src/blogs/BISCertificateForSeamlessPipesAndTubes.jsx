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

const BISCertificateForSeamlessPipesAndTubes = () => {
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

export default BISCertificateForSeamlessPipesAndTubes;

const MetaTags = () => {
  const title =
    "BIS Certificate for Seamless Pipes & Tubes | IS 17875:2022 BIS License";
  const ogTitle =
    "BIS Certification for Seamless Pipes & Tubes – IS 17875:2022 Guide";
  const twitterTitle = "BIS License for Seamless Pipes & Tubes | IS 17875:2022";
  const metaDescription =
    "Get BIS Certificate for Seamless Pipes & Tubes under IS 17875:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Seamless Pipes & Tubes as per IS 17875:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Seamless Pipes & Tubes under IS 17875:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Seamless Pipes & Tubes, BIS License for Seamless Pipes & Tubes, IS 17875:2022, BIS Certification for Seamless Pipes & Tubes";
  const websiteUrl =
    "https://bis-certifications.com/bis-certification-for-seamless-pipes-and-tubes-is-17875";
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
                    BIS Certificate for Seamless Pipes & Tubes – IS 17875:2022
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
          BIS Certificate for Seamless Pipes and Tubes under IS 17875:2022 —
          Complete Certification Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforSeamlessPipes&Tubes.png"
            title="BIS License for Seamless Pipes & Tubes"
            alt="BIS Certificate for Seamless Pipes & Tubes - IS 17875:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Seamless steel pipes and tubes are widely recognized for their
          superior performance in critical, high-pressure, and high-temperature
          applications. They are essential in industries such as oil & gas,
          petrochemicals, refineries, heavy engineering, automotive, thermal
          plants, aerospace, hydraulics, and general mechanical systems. Since
          seamless pipes have no welded seam, they offer greater strength,
          uniformity, and pressure-handling capability compared to welded pipes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure that manufacturers follow consistent production quality and
          supply safe, defect-free products into the Indian market, the
          Government of India has made BIS Certification mandatory for seamless
          pipes and tubes under IS 17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive page explains the entire process of obtaining a BIS
          License, including documentation, mandatory testing, quality
          compliance requirements, fees, timelines, technical challenges,
          benefits, penalties, and industry applicability — written in an
          extended, deeply detailed, and SEO-rich format.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification for Seamless Pipes and Tubes?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate is an official approval issued by the Bureau of
          Indian Standards, confirming that the manufacturer produces seamless
          pipes/tubes according to the specifications defined under IS
          17875:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Seamless pipes must undergo strict testing related to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pressure resistance</li>
          <li>Tensile strength</li>
          <li>Impact toughness</li>
          <li>Bendability</li>
          <li>Chemical composition</li>
          <li>Dimensional accuracy</li>
          <li>Non-destructive evaluations</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Only manufacturers who meet these performance requirements receive the
          ISI Mark, enabling them to legally produce, import, or sell seamless
          pipes in India.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Key Objectives of BIS Certification
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Prevent substandard or hazardous piping systems from entering
            industrial supply chains
          </li>
          <li>Ensure consistent and reliable manufacturing quality</li>
          <li>
            Protect industries relying on high-pressure fluid or gas
            transmission
          </li>
          <li>Maintain national safety and quality benchmarks</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Understanding IS 17875:2022 — The Indian Standard for Seamless Pipes &
          Tubes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17875:2022 specifies the quality, testing, manufacturing, and
          performance requirements for seamless steel pipes and tubes intended
          for general service.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License for Seamless Pipes & Tubes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> This standard covers the requirements for
          seamless stainless steel pipes and tubes for general services.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> This standard does not specify requirements of
          seamless Stainless Steel pipes and tubes intended for distinct
          purposes, which are covered by separate Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Applications Covered Under IS 17875:2022
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Oil and gas pipelines</li>
          <li>High-temperature fluid service</li>
          <li>Boiler tubes</li>
          <li>Chemical processing plants</li>
          <li>Hydraulic and pneumatic systems</li>
          <li>Heat exchangers</li>
          <li>Structural applications</li>
          <li>Automobile components</li>
          <li>Steam applications</li>
          <li>High-pressure industrial pipelines</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Key Quality Parameters in IS 17875:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>1. Chemical Composition Requirements:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Specifies limits for carbon, manganese, chromium, nickel, molybdenum,
          sulfur, phosphorus, etc.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>2. Mechanical Properties:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Tensile strength</li>
          <li>Yield strength</li>
          <li>Hardness</li>
          <li>Ductility</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>3. Dimensional Tolerances:</strong>
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Outside diameter</li>
          <li>Wall thickness</li>
          <li>Length tolerances</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>4. Surface Conditions:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Pipes must be free from cracks, laminations, seams, scoring, or any
          detrimental defects.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>5. Hydrostatic Testing:</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Ensures pipes can withstand internal pressure without leakage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>6. Non-Destructive Testing (NDT):</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Includes eddy current, ultrasonic testing, or magnetic particle
          testing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Complete BIS Certification Process for Seamless Pipes (IS 17875:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification process for seamless pipes is more technical and
          detailed than most other products because the manufacturing and
          testing requirements are extensive. Below is a highly detailed
          step-by-step explanation.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 1 — Determine Applicability & Product Categorization
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The manufacturer must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identify all grades of steel being used</li>
          <li>Determine the dimensions and thickness ranges</li>
          <li>
            Confirm whether all variants fall within the scope of IS 17875
          </li>
          <li>Prepare product classification for BIS testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          A single BIS license may cover multiple sizes and grades if they share
          the same manufacturing facility and process.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 2 — Prepare Documentation & File Online BIS Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The manufacturer must apply on the Manak Online BIS Portal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Information includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory details and layout</li>
          <li>Production capacity and processes</li>
          <li>Furnace and heat treatment details</li>
          <li>Rolling, piercing, and drawing equipment</li>
          <li>Quality control systems</li>
          <li>Raw material sourcing documentation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Incorrect filing is one of the most common causes of BIS application
          rejection.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 3 — Fee Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The fees include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Processing fee</li>
          <li>Lab testing charges</li>
          <li>Inspection and travel costs</li>
          <li>Marking fee based on production volume</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 4 — Sample Selection & BIS Laboratory Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Seamless pipes undergo extensive mechanical and chemical testing.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This is the most time-consuming and most technical part of BIS
          certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Chemical Composition Test</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Performed using:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Optical emission spectroscopy</li>
          <li>Wet chemical methods</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Ensures the exact chemical composition as per IS 17875.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Mechanical Testing</strong>
        </p>
        <ol className="list-decimal ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Tensile Test</strong> — Evaluates ultimate tensile strength,
            yield point, and elongation.
          </li>
          <li>
            <strong>Hardness Test</strong> — Confirms material toughness.
          </li>
          <li>
            <strong>Flattening Test</strong> — Tests ductility and weldability
            (even though seamless, flattening checks material integrity).
          </li>
          <li>
            <strong>Flaring / Flanging Test</strong> — Ensures deformability
            without cracking.
          </li>
          <li>
            <strong>Impact Test (Charpy)</strong> — Evaluates performance at low
            temperatures.
          </li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Hydrostatic Test</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Pipes are subjected to high internal pressure to ensure no leakage or
          deformation occurs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ NDT – Non-Destructive Testing</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Mandatory for detecting internal flaws.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Methods include:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ultrasonic Inspection</li>
          <li>Eddy Current Examination</li>
          <li>Magnetic Particle Inspection (MPI)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Visual & Dimensional Inspection</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-3 ml-4">
          Evaluates:
        </p>
        <ul className="list-disc ml-10 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surface finish</li>
          <li>Straightness</li>
          <li>Ovality</li>
          <li>Thickness tolerance</li>
          <li>Diameter accuracy</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>✔ Metallurgical Examination</strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4 ml-4">
          Microstructure analysis confirms grain structure, heat treatment
          effectiveness, and material stability.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 5 — BIS Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Once test results are successful, BIS officers visit the factory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">They inspect:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Raw material storage</li>
          <li>Furnace/heat treatment processes</li>
          <li>Piercing mills, reducers & cold-draw benches</li>
          <li>Hydrostatic test facility</li>
          <li>NDT facility</li>
          <li>Laboratory equipment & calibration</li>
          <li>Quality control logbooks</li>
          <li>Manufacturing capacity verification</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The factory must comply fully with the Scheme of Testing & Inspection
          (STI).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 6 — Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          If testing and inspection satisfy BIS requirements, the manufacturer
          receives:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>CML number</li>
          <li>Authorization to use ISI Mark on seamless pipes</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS may reject applications if even one requirement is not met —
          making expert guidance extremely valuable.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          STEP 7 — Post-Certification Obligations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use ISI Mark correctly on labels, packaging, and pipes</li>
          <li>Maintain internal testing as per STI</li>
          <li>Undergo regular BIS surveillance inspections</li>
          <li>Ensure every batch complies with IS 17875:2022</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to maintain compliance can result in license suspension or
          cancellation.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Seamless Pipes
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          A. Manufacturing & Production Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory license</li>
          <li>Layout diagram with machinery positioning</li>
          <li>Quality control process manual</li>
          <li>Heat treatment records</li>
          <li>Raw material mill test certificates</li>
          <li>Rolling/piercing process details</li>
          <li>Drawing bench details</li>
          <li>Calibration certificates for test equipment</li>
          <li>In-house test reports</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          B. Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bill of materials</li>
          <li>Chemical grade specifications</li>
          <li>Mechanical property sheets</li>
          <li>Dimensional tolerance charts</li>
          <li>Drawings & specifications of pipes</li>
          <li>Material traceability system documentation</li>
          <li>Standard operating procedures for production</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          C. Legal & Organizational Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Authorization letter</li>
          <li>Brand/trademark ownership document</li>
          <li>Identity & address proofs</li>
          <li>Undertakings & declarations as required by BIS</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements for Seamless Pipes under IS 17875:2022
        </h2>

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
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ladle Analysis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Product Analysis
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  10.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tensile Requirements
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pipes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tubes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  13.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flaring Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flattening Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Grain Size
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Leak Tightness Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  21
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Workmanship, Finish, Appearance
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  23
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions and Tolerances
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges in BIS Certification
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Failure in chemical composition test</strong>
            <br />
            Occurs due to inconsistent steel grades.
          </li>
          <li>
            <strong>Failure of mechanical tests</strong>
            <br />
            Often caused by incorrect heat treatment.
          </li>
          <li>
            <strong>NDT rejection</strong>
            <br />
            Internal cracks or inclusions may cause sample failure.
          </li>
          <li>
            <strong>Inadequate calibration</strong>
            <br />
            Leads to inaccurate test data.
          </li>
          <li>
            <strong>STI non-compliance</strong>
            <br />
            Incorrect record-keeping during inspection becomes a major rejection
            reason.
          </li>
          <li>
            <strong>Dimensional variation</strong>
            <br />
            Pipe diameter or thickness inconsistencies cause failure.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Seamless Pipes
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal approval to manufacture/sell in India</li>
          <li>Ensures safety and reliability</li>
          <li>Improves brand reputation</li>
          <li>Essential for government tenders</li>
          <li>Required by PSU and private industries</li>
          <li>Protects consumers from substandard products</li>
          <li>Enhances export competitiveness</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Under the BIS Act, selling non-certified seamless pipes results in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product confiscation</li>
          <li>Heavy penalties</li>
          <li>Manufacturing shutdown</li>
          <li>Import restrictions</li>
          <li>Brand blacklisting</li>
          <li>Criminal prosecution</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Must Obtain BIS Certification?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Traders (brand owners)</li>
          <li>OEM & engineering companies</li>
          <li>Importers and stockists</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Every manufacturing unit must obtain a separate license.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Seamless Pipes and Tubes under IS 17875:2022
          is a critical regulatory requirement ensuring that high-pressure
          service pipes meet India's rigorous safety and quality standards. From
          chemical composition to advanced non-destructive testing, BIS ensures
          that every certified pipe is durable, defect-free, and capable of
          performing under demanding industrial conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With professional guidance, manufacturers can streamline the
          certification journey, minimize delays, and achieve compliance
          smoothly.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs — Seamless Pipes BIS Certification (Extended & SEO-Rich)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Why is BIS Certification mandatory for seamless pipes?
              </strong>
              <br />
              Because seamless pipes are used in high-pressure and
              safety-critical applications. Government regulations ensure only
              high-quality pipes enter the Indian market.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Which standard applies to seamless pipes?</strong>
              <br />
              IS 17875:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. How long does the certification process take?</strong>
              <br />
              Typically 40–60 days for Indian Manufacturer and around 120 days
              for foreign manufacturer, depending on testing load and inspection
              scheduling.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. What tests are needed?</strong>
              <br />
              Chemical analysis, tensile test, hardness, hydrostatic, NDT,
              flattening, flaring, and dimensional checks.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                5. Can foreign companies apply for BIS certification?
              </strong>
              <br />
              Yes, through the FMCS scheme.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. What if the product fails testing?</strong>
              <br />
              It must be corrected and retested; BIS will not issue the license
              until full compliance is achieved.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. What documents are required?</strong>
              <br />
              Factory license, machinery list, test equipment, drawings, QC
              documents, raw material certificates, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Is ISI marking compulsory?</strong>
              <br />
              Yes. It is illegal to sell seamless pipes without showing the ISI
              mark.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Are multiple grades allowed in one license?</strong>
              <br />
              Yes, if produced using the same facility and process (subject to
              BIS approval).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. How long is the BIS license valid?</strong>
              <br />
              1–2 years, renewable indefinitely.
            </p>
          </div>
        </div>

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
