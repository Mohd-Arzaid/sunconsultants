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

const BISCertificateForWeldedPipesAndTubes = () => {
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

export default BISCertificateForWeldedPipesAndTubes;

const MetaTags = () => {
  const title =
    "BIS Certificate for Welded Pipes & Tubes | IS 17876:2022 BIS License";
  const ogTitle =
    "BIS Certification for Welded Pipes & Tubes – IS 17876:2022 Guide";
  const twitterTitle = "BIS License for Welded Pipes & Tubes | IS 17876:2022";
  const metaDescription =
    "Get BIS Certificate for Welded Pipes & Tubes under IS 17876:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Welded Pipes & Tubes as per IS 17876:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Welded Pipes & Tubes under IS 17876:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Welded Pipes & Tubes, BIS License for Welded Pipes & Tubes, IS 17876:2022, BIS Certification for Welded Pipes & Tubes";
  const websiteUrl =
    "https://bis-certifications.com/bis-certification-for-welded-pipes-and-tubes-is-17876";
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
                    BIS Certificate for Welded Pipes & Tubes – IS 17876:2022
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
          BIS Certificate for Stainless Steel Welded Pipes and Tubes under IS
          17876:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforWeldedPipes&Tubes.png"
            title="BIS License for Welded Pipes & Tubes"
            alt="BIS Certificate for Welded Pipes & Tubes - IS 17876:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stainless steel welded pipes and tubes are extensively used across
          industries such as construction, chemical processing, food & beverage,
          water distribution, structural applications, and general engineering.
          As these pipes carry fluids, gases, and in some cases corrosive
          chemicals, their strength, corrosion resistance, and manufacturing
          integrity must be verified before they enter the market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To regulate quality and ensure public and industrial safety, the
          Government of India has made BIS Certification mandatory for stainless
          steel welded pipes and tubes under IS 17876:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains the complete BIS approval process,
          documentation, testing requirements, cost, timeline, manufacturer
          obligations, benefits, and compliance rules — written in a fresh and
          unique format, ensuring zero duplication with previous content.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification for Stainless Steel Welded Pipes & Tubes?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) regulates product quality in
          India through various certification schemes. A product that falls
          under a mandatory Quality Control Order (QCO) must obtain a BIS
          License before it is manufactured, imported, stocked, sold, or
          distributed.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          What BIS Certification Ensures
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS certificate confirms that stainless steel welded pipes/tubes:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Meet dimensional accuracy</li>
          <li>Possess required mechanical strength</li>
          <li>Display corrosion resistance</li>
          <li>Are manufactured using approved grades of stainless steel</li>
          <li>Comply with Indian testing conditions</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once certified, products must bear the ISI Mark along with the license
          (CML) number.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Standard for Stainless Steel Welded Pipes & Tubes – IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 17876:2022</strong> – Stainless Steel Welded Pipes and
          Tubes for General Service
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This standard outlines:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemical composition</li>
          <li>Mechanical property requirements</li>
          <li>Manufacturing tolerances</li>
          <li>Dimensional specifications</li>
          <li>Surface and finish guidelines</li>
          <li>Hydrostatic and non-destructive testing</li>
          <li>Safety performance criteria</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These pipes are used for general service applications, meaning they
          must meet a broad range of operational environments.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for IS 17876:2022 Products
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Stainless steel welded pipes are widely used in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Water pipelines</li>
          <li>Chemical transport</li>
          <li>Food & pharmaceutical plants</li>
          <li>Structural engineering</li>
          <li>Exhaust and ventilation systems</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          If not manufactured properly, these pipes can lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Leakage failures</li>
          <li>Burst under pressure</li>
          <li>Corrosion and contamination</li>
          <li>Structural instability</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          To prevent substandard materials from entering the supply chain, BIS
          requires every manufacturer — domestic or foreign — to secure the BIS
          License for Stainless Steel Welded Pipes and Tubes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification procedure involves rigorous laboratory testing and
          inspection.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 1 – Identify Product Category & Grade
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Evaluate the specific grade(s) of stainless steel being manufactured
          and confirm they fall under IS 17876:2022.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 2 – Submit Online Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must apply through the Manak Online BIS Portal,
          submitting:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory details</li>
          <li>Production capacity</li>
          <li>Process flow diagram</li>
          <li>Raw material sources</li>
          <li>Quality assurance documentation</li>
          <li>Brand & trademark details</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 3 – Pay BIS Fees
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Payments include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application charges</li>
          <li>Processing fees</li>
          <li>Testing fees</li>
          <li>Factory inspection charges</li>
          <li>Marking fees</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 4 – Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials inspect:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Production sequence</li>
          <li>Raw material storage</li>
          <li>Welding machinery</li>
          <li>Annealing/heat treatment processes</li>
          <li>Quality documentation</li>
          <li>Testing infrastructure</li>
          <li>Calibration records</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          They verify compliance with the Scheme of Testing & Inspection (STI).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 5 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          If all parameters meet BIS requirements, the manufacturer receives:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>ISI Mark authorization</li>
          <li>A unique CML license number</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Step 6 – Post-License Obligations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          License holders must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain ongoing internal quality testing</li>
          <li>Use the ISI Mark correctly</li>
          <li>Cooperate during periodic BIS surveillance inspections</li>
          <li>Renew the license on time</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License for Stainless Steel Welded Pipes & Tubes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.1</strong> This standard covers the requirements for welded
          stainless steel pipes and tubes for general services.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>1.2</strong> This standard does not specify requirements of
          welded stainless steel pipes and tubes intended for distinct purposes,
          which are covered by separate Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification (IS 17876:2022)
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          1. Manufacturing Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory license/registration</li>
          <li>Layout diagram</li>
          <li>Process flow chart</li>
          <li>Machinery list (welding, forming, annealing, testing)</li>
          <li>In-house test equipment list</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          2. Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Grade specifications</li>
          <li>Chemical & mechanical test data</li>
          <li>Welding procedure specifications</li>
          <li>Heat treatment records</li>
          <li>Dimensional tolerance charts</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          3. Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identity proof</li>
          <li>Address proof</li>
          <li>Brand ownership documents</li>
          <li>Authorized signatory letter</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          4. BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Filled application form</li>
          <li>Undertakings & declarations</li>
          <li>Test request documents</li>
          <li>Label artwork for ISI marking</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements Under IS 17876:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is the core of BIS approval and ensures that every batch meets
          strict quality standards.
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
                  Flanging Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  14
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Reverse Flattening Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  15
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Flattening Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  16
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Grain Size
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  17
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Leak Tightness Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  22
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Workmanship, Finish, Appearance
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
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
          Challenges Faced During BIS Certification
        </h2>

        <ol className="list-decimal ml-6 mb-4 space-y-3 text-gray-600 text-base font-geist">
          <li>
            <strong>Failing Chemical Composition Tests</strong>
            <br />
            Non-standard alloying elements or impurities cause rejection.
          </li>
          <li>
            <strong>Weld Defects During NDT</strong>
            <br />
            Poor welding processes or inconsistent heat treatment can create
            flaws.
          </li>
          <li>
            <strong>Dimensional Non-Conformance</strong>
            <br />
            Wall thickness variations commonly lead to failures.
          </li>
          <li>
            <strong>Incomplete Documentation</strong>
            <br />
            Missing or unclear records delay license approval.
          </li>
          <li>
            <strong>Calibration Issues</strong>
            <br />
            Uncalibrated equipment results in unreliable test results.
          </li>
          <li>
            <strong>Incorrect branding/label submission</strong>
            <br />
            ISI mark artwork must match BIS specifications.
          </li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Stainless Steel Pipes & Tubes
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Legal approval to manufacture/sell in India</li>
          <li>Assurance of quality and safety</li>
          <li>Improved reputation and market credibility</li>
          <li>Acceptability by government and PSU tenders</li>
          <li>Increased export potential</li>
          <li>Reduced product failure risks</li>
          <li>Protection against counterfeit or substandard competitors</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers/importers selling non-certified products face:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Heavy penalties under the BIS Act</li>
          <li>Closure of manufacturing operations</li>
          <li>Import restrictions</li>
          <li>Legal prosecution</li>
          <li>Cancellation of existing licenses</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance is mandatory and strictly enforced.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Must Obtain BIS License for SS Welded Pipes and Tubes?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Overseas manufacturers exporting to India</li>
          <li>Importers of stainless steel pipes</li>
          <li>OEM suppliers</li>
          <li>Industrial distributors</li>
          <li>Private label brands</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each manufacturing location must obtain its own license.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Stainless Steel Welded Pipes and Tubes under
          IS 17876:2022 ensures the reliability, durability, and performance of
          critical piping products used across multiple industries. With
          mandatory certification now enforced, manufacturers and importers must
          align their processes, testing, and documentation with BIS
          requirements to legally supply their products in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With expert guidance, the BIS licensing process becomes faster,
          smoother, and fully compliant.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs — BIS Certification for Stainless Steel Welded Pipes & Tubes
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS Certification mandatory for stainless steel welded
                pipes?
              </strong>
              <br />
              Yes. Under IS 17876:2022, BIS certification is compulsory for all
              manufacturers and importers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. What tests are required?</strong>
              <br />
              Chemical analysis, tensile test, hardness test, hydrostatic
              testing, NDT, flattening, and dimensional checks.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. How long does BIS certification take?</strong>
              <br />
              Typically 35–50 days for Indian Manufacturer and around 120 days
              for foreign manufacturer, depending on testing and inspection
              readiness.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                4. Can foreign manufacturers obtain BIS certification?
              </strong>
              <br />
              Yes, through the FMCS (Foreign Manufacturers Certification
              Scheme).
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. What documents are required?</strong>
              <br />
              Factory license, test equipment list, BOM, process flow, drawings,
              QC plan, brand documents, etc.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. What if a sample fails testing?</strong>
              <br />
              The manufacturer must correct the issue, rework the product, and
              resubmit for testing.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is ISI marking mandatory after approval?</strong>
              <br />
              Yes. Products must display ISI Mark + CML number.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Are all grades covered under IS 17876?</strong>
              <br />
              Only specific grades defined under the standard qualify.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. How often does BIS conduct surveillance?</strong>
              <br />
              Periodic audits and random sample testing are performed during the
              license validity.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={3} />
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
