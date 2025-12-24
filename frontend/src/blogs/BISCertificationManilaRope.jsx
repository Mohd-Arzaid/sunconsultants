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

const BISCertificationManilaRope = () => {
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

export default BISCertificationManilaRope;

const MetaTags = () => {
  const title = "BIS Certificate for Manila Ropes | IS 1084:2005 BIS License";
  const ogTitle = "BIS Certification for Manila Ropes – IS 1084:2005 Guide";
  const twitterTitle = "BIS License for Manila Ropes | IS 1084:2005";
  const metaDescription =
    "Get BIS Certificate for Manila Ropes under IS 1084:2005. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Manila Ropes as per IS 1084:2005. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Manila Ropes under IS 1084:2005. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Manila Ropes, BIS License for Manila Ropes, IS 1084:2005, BIS Certification for Manila Ropes";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/manila-ropes-is-1084";
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
                    BIS Certificate for Manila Ropes – IS 1084:2005
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
          BIS Certification Manila Rope – Complete Guide to IS 1084:2005
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforManilaRopes.png"
            title="BIS License for Manila Ropes"
            alt="BIS Certificate for Manila Ropes - IS 1084:2005 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The demand for Manila Ropes continues to remain strong across marine
          operations, shipping, agriculture, construction, industrial lifting,
          packaging, and general-purpose utility applications. Known for their
          natural fibre strength, flexibility, and durability, Manila ropes are
          widely preferred where grip, abrasion resistance, and shock absorption
          are critical. However, because these ropes are often used in
          load-bearing and safety-critical environments, quality inconsistency
          can lead to serious accidents, financial losses, and legal
          consequences.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This is where BIS Certification for Manila Rope becomes extremely
          important. In India, compliance with IS 1084:2005 is a regulatory
          requirement for manufacturers and importers who want to sell or
          distribute Manila ropes in the Indian market. Obtaining a BIS
          Certificate for Manila Rope ensures that the product meets prescribed
          Indian Standards for construction, performance, strength, and safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This detailed guide is written for Indian manufacturers, foreign
          manufacturers, importers, traders, procurement managers, compliance
          officers, and exporters who want complete clarity on BIS Certification
          for Manila Rope, the BIS certification process in India, applicable
          tests, documents, costs, timelines, and post-certification
          responsibilities.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a conformity assessment system administered by
          the Bureau of Indian Standards, the national standards authority of
          India. The primary objective of BIS is to ensure that products sold in
          India conform to Indian Standards (IS) relating to quality, safety,
          reliability, and performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In simple terms, the BIS Certificate meaning refers to an official
          approval granted by BIS that authorizes a manufacturer to use the ISI
          Mark on products that comply with a specific Indian Standard.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certificate Full Form and Purpose
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>BIS Certification full form:</strong> Bureau of Indian
            Standards Certification
          </li>
          <li>
            The certification assures consumers and regulators that the product
            has been tested and manufactured under a controlled system as per
            applicable standards.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          ISI Mark Explained
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The ISI Mark is the visible compliance symbol used on products
          certified under BIS&apos;s product certification scheme. For Manila
          ropes, the ISI Mark confirms compliance with IS 1084:2005 and
          signifies:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consistent product quality</li>
          <li>Verified tensile and performance characteristics</li>
          <li>Legal permission to sell in India</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Why BIS Exists
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS exists to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protect consumers from unsafe or substandard products</li>
          <li>Promote standardization and quality culture</li>
          <li>Support fair trade and industrial growth</li>
          <li>Enable regulatory enforcement in the Indian market</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Manila Rope
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          IS 1084:2005 – Specification for Manila Ropes
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for Manila ropes is IS 1084:2005, which
          specifies the constructional requirements, material quality,
          performance parameters, dimensions, tolerances, and testing methods
          for Manila fibre ropes.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard is designed to ensure that:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ropes have adequate breaking strength</li>
          <li>Fibre quality and rope construction are consistent</li>
          <li>Ropes perform safely under load without premature failure</li>
          <li>
            Users are protected from risks such as snapping, slippage, or fibre
            degradation
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers producing Manila ropes</li>
          <li>Importers sourcing Manila ropes from overseas</li>
          <li>Foreign manufacturers supplying to India</li>
          <li>Traders selling ISI-marked Manila ropes</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Manila Rope
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Consumer and Workplace Safety
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manila ropes are frequently used for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Lifting and tying loads</li>
          <li>Mooring and marine handling</li>
          <li>Agricultural bundling</li>
          <li>Temporary rigging</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure of a rope can result in serious injuries, fatalities, or
          property damage. BIS certification ensures minimum safety performance.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under various BIS notifications, rope products falling under mandatory
          certification must comply with the relevant IS. Selling non-certified
          products can attract enforcement action.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Without a BIS License for Manila Rope, manufacturers and importers may
          face:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizures</li>
          <li>Heavy penalties</li>
          <li>Business disruptions</li>
          <li>Criminal liability in case of accidents</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Market and Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Certified products enjoy:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Higher buyer trust</li>
          <li>Eligibility for government and PSU tenders</li>
          <li>Acceptance by large industrial buyers</li>
          <li>Reduced rejection and dispute risks</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Manila Rope
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The first step is confirming that the product falls under IS 1084:2005
          and determining:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rope type and construction</li>
          <li>Diameter range</li>
          <li>End-use application</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The manufacturer must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Register on the BIS application portal</li>
          <li>Select the appropriate product and standard</li>
          <li>Submit the BIS application along with required documents</li>
          <li>Pay the applicable government fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This step is often referred to as BIS apply online or BIS certificate
          registration.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost includes:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>License fee</li>
          <li>Annual marking fee</li>
          <li>Sample testing charges</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          The overall cost of BIS certification depends on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of rope sizes</li>
          <li>Testing complexity</li>
          <li>Factory location</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Product Sample Testing (As per IS 1084:2005)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samples are drawn and sent to BIS-recognized laboratories for testing
          against the standard&apos;s requirements.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer conducts a factory audit to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing infrastructure</li>
          <li>Quality control system</li>
          <li>Raw material handling</li>
          <li>In-house testing facilities</li>
          <li>Record maintenance</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After successful testing and inspection:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS issues the Bureau of Indian Standards License</li>
          <li>
            The manufacturer is authorized to use the ISI Mark on Manila ropes
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Post-approval obligations include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Routine surveillance audits</li>
          <li>Market sample testing</li>
          <li>License renewal</li>
          <li>Compliance with marking and labeling norms</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of BIS License as per IS 1084:2005
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard prescribes the requirements of the following types of
          electromechanically made manila ropes:
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>a)</strong> Hawser-laid manila ropes of diameter 6 mm to 128
          mm and with linear density from 32 to 11 380 ktex.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          <strong>b)</strong> Shroud-laid manila ropes of diameter 8 mm to 128
          mm and with linear density from 54 to 11 380 ktex.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>c)</strong> Cable-laid manila ropes of diameter 40 to 144 mm
          and with a linear density from 1 030 to 13 105 ktex.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any change in material, process, or location requires prior BIS
          approval.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery and test equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Trademark authorization (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications</li>
          <li>Raw material details</li>
          <li>Quality control plan</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Completed BIS application form</li>
          <li>Test request details</li>
          <li>Undertakings and declarations</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These are commonly referred to as BIS CERTIFICATE DOCUMENTS or BIS
          CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 1084:2005
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory tests include:
        </p>

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
                  6.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Manila Fibres
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Yarn
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Strands
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Ropes
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lubrication
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Rot-proofing Treatment
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Mass of Coil
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Pitch
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Length of coil
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testing must be conducted only at BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Common Issues
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incorrect rope construction</li>
          <li>Failure in breaking strength tests</li>
          <li>Incomplete documentation</li>
          <li>Non-compliant marking</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conduct pre-testing before official submission</li>
          <li>Align production with IS requirements</li>
          <li>Maintain proper records</li>
          <li>Engage experienced BIS consultants</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian regulations</li>
          <li>Protection from enforcement actions</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wider market acceptance</li>
          <li>Eligibility for institutional buyers</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use of ISI Mark enhances credibility</li>
          <li>Signals quality assurance</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Easier entry into organized retail</li>
          <li>Acceptance by export-oriented buyers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance can lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Monetary fines</li>
          <li>Cancellation of business licenses</li>
          <li>Product bans</li>
          <li>Legal prosecution under BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Manila Rope?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Indian representative)</li>
          <li>Traders selling under own brand</li>
          <li>E-commerce sellers listing Manila ropes</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end BIS Certification support, including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Applicability assessment</li>
          <li>Documentation preparation</li>
          <li>Coordination with labs</li>
          <li>Factory audit support</li>
          <li>Faster approval handling</li>
          <li>Post-certification compliance management</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our experience in rope and fibre products ensures smooth, compliant,
          and time-bound certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Manila Rope
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q1. Is BIS Certification mandatory for Manila rope in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, Manila ropes must comply with IS 1084:2005 to be legally sold
              in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q2. What is the BIS certificate meaning?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is official approval confirming product compliance with Indian
              Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q3. How long does BIS certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 30–60 working days, subject to testing and inspection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q4. What is the BIS certificate cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs vary based on product range and testing requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q5. Can importers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, importers can apply with proper authorization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q6. Is the ISI Mark mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, certified Manila ropes must carry the ISI Mark.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q7. Can foreign manufacturers get BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q8. What happens if non-certified ropes are sold?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Penalties, seizures, and legal action may follow.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q9. Is online application mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS apply online through the official portal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q10. Are renewals required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS licenses must be renewed periodically.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q11. Can multiple sizes be covered under one license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, if tested and approved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q12. Do traders need BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If selling under own brand, yes.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q13. Are BIS notifications applicable to ropes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, relevant notifications mandate compliance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q14. What labs are used for testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Only BIS-recognized laboratories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q15. Can consultants speed up the process?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, experienced consultants reduce errors and delays.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Manila Rope under IS 1084:2005 is not
          just a legal requirement but a strategic step toward ensuring safety,
          quality, and market credibility. With rising regulatory enforcement
          and buyer awareness, BIS Certification for Manila Rope protects
          businesses from compliance risks while strengthening brand trust.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to manufacture, import, or sell Manila ropes in
          India, securing a BIS License for Manila Rope at the right time is
          essential. Professional guidance ensures a smooth certification
          journey, faster approvals, and long-term compliance success.
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
