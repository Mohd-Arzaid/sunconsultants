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

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

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
  const title = "BIS Certification for Tables and Desks | IS 17633:2022";
  const ogTitle = "BIS Certification for Tables and Desks | IS 17633:2022";
  const twitterTitle = "BIS Certification for Tables and Desks | IS 17633:2022";
  const metaDescription =
    "Learn everything about BIS Certification for Tables and Desks under IS 17633:2022. Understand ISI Mark requirements, testing, certification process, documents, benefits, and compliance guidance.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS Certification for Tables and Desks, IS 17633:2022, ISI Mark Tables and Desks, BIS License Tables and Desks, BIS Certification Furniture";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/tables-&-desks-is-17633";
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
                    BIS Certification for Tables and Desks (IS 17633:2022)
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
          BIS Certification for Tables and Desks (IS 17633:2022) – Complete ISI
          Mark Certification Guide
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforTables&Desks.png"
            title="BIS License for Tables and Desks"
            alt="BIS Certification for Tables and Desks - IS 17633:2022 ISI Mark Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Tables and desks are among the most widely used furniture products
          across offices, educational institutions, commercial establishments,
          government organizations, and residential spaces. Since these products
          are expected to withstand regular use while ensuring user safety,
          stability, and durability, compliance with recognized quality standards
          has become increasingly important for manufacturers and importers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India, tables and desks covered under IS 17633:2022 are required to
          comply with the applicable quality and safety requirements prescribed
          by the Bureau of Indian Standards (BIS). Manufacturers that
          successfully meet these requirements can obtain a BIS licence and use
          the ISI Mark on their products, demonstrating conformity with the
          relevant Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process evaluates various aspects of product
          performance, including strength, stability, durability, workmanship,
          dimensions, and overall safety. Compliance not only helps businesses
          meet regulatory requirements but also improves product credibility and
          market acceptance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything manufacturers, importers,
          furniture brands, and procurement professionals need to know about BIS
          Certification for Tables and Desks under IS 17633:2022, including
          applicability, certification requirements, testing parameters,
          documentation, benefits, and the certification process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Highlights of BIS Certification for Tables and Desks
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particular
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Product", "Tables and Desks"],
                ["Applicable Standard", "IS 17633:2022"],
                ["Certification Type", "BIS Product Certification"],
                ["Applicable Mark", "ISI Mark"],
                ["Certification Scheme", "Scheme-I (ISI Mark Certification)"],
                ["Regulatory Authority", "Bureau of Indian Standards (BIS)"],
                ["Applicable Sector", "Furniture"],
                [
                  "Eligible Applicants",
                  "Indian Manufacturers and Foreign Manufacturers",
                ],
                [
                  "Compliance Requirement",
                  "Mandatory under applicable Quality Control Order (QCO)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Certification Scheme" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (ISI Mark Certification)
                      </a>
                    ) : particular === "Compliance Requirement" ? (
                      <>
                        Mandatory under applicable Quality Control Order (
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-tables-and-desks"
                          className="text-blue-600 hover:underline"
                        >
                          QCO
                        </a>
                        )
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification for Tables and Desks?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Tables and Desks is a conformity assessment process
          conducted under the Bureau of Indian Standards (BIS) Product Certification
          Scheme. The certification confirms that the product complies with the
          requirements specified in IS 17633:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Upon successful certification, manufacturers are permitted to use the ISI
          Mark on their products, indicating compliance with the applicable Indian
          Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification is intended to ensure that tables and desks supplied in
          the Indian market meet established requirements relating to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structural strength and stability during normal use</li>
          <li>Durability, user safety, and material workmanship</li>
          <li>Full performance requirements under IS 17633:2022</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For buyers and procurement agencies, the ISI Mark serves as an assurance
          that the furniture has been evaluated against recognized quality and safety
          benchmarks.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overview of IS 17633:2022 for Tables and Desks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17633:2022 is the Indian Standard that specifies performance and safety
          requirements for tables and desks intended for adult users in sitting and
          standing applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard covers both:
        </p>

        <ul className={LIST_CLASS}>
          <li>Fully manufactured (ready-made) tables and desks</li>
          <li>Ready-to-assemble (RTA) units — tested after complete assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of the standard is to establish minimum performance and safety
          requirements that help ensure furniture remains stable, durable, and safe
          throughout its intended service life.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Key Areas Covered Under IS 17633:2022
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard focuses on several important performance characteristics,
          including:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Strength Requirements —</strong> Tables and desks must withstand
            expected loads during normal use without failure or excessive deformation.
          </li>
          <li>
            <strong>Stability Requirements —</strong> Furniture must remain stable in
            use and resist tipping under foreseeable loading conditions.
          </li>
          <li>
            <strong>Durability Requirements —</strong> Products must retain performance
            and structural integrity after repeated use over an extended period.
          </li>
          <li>
            <strong>Safety Requirements —</strong> Design and construction must
            minimize risks from instability, sharp edges, unsafe build, or structural
            failure.
          </li>
          <li>
            <strong>Workmanship &amp; Construction Quality —</strong> Workmanship,
            assembly, joints, fasteners, and overall build are assessed for reliable
            long-term performance.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certification for Tables and Desks Mandatory in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Tables and desks covered under the applicable Furniture Quality
          Control Order (QCO) are required to comply with the relevant Indian
          Standard and obtain BIS Certification before being manufactured, imported,
          sold, distributed, or offered in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The objective of mandatory certification is to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ensure higher product quality across the furniture industry</li>
          <li>Protect consumer safety through verified standards</li>
          <li>Prevent substandard furniture from entering the market</li>
          <li>Promote standardization and uniform quality benchmarks</li>
          <li>Build buyer confidence in ISI Mark-certified products</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers covered under the applicable regulations must obtain a BIS
          licence and use the ISI Mark in accordance with BIS requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Also check Furniture Products Covered Under Mandatory BIS Certification —{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            className="text-blue-600 hover:underline"
          >
            BIS Certification for furniture
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Product Scope Covered Under IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 17633:2022 extends to various categories of tables and
          desks designed for adult users across residential, commercial,
          institutional, and workplace environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Examples of products commonly covered include:
        </p>

        <ul className={LIST_CLASS}>
          <li>Office, study, and computer desks</li>
          <li>Workstations and multi-purpose desks</li>
          <li>Conference and meeting tables</li>
          <li>Institutional and laboratory tables</li>
          <li>Co-working and commercial-use furniture</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers should carefully review the product specifications and
          intended use to determine whether their products fall within the scope of
          IS 17633:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Technical Requirements Under IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          To obtain BIS certification, tables and desks must satisfy various
          performance and safety requirements specified by the standard.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Structural Integrity —</strong> Products must perform under
            prescribed loads; joints and supporting structures stay secure during
            testing.
          </li>
          <li>
            <strong>Load-Bearing Performance —</strong> Tables and desks must support
            specified loads without unacceptable deformation, damage, or failure.
          </li>
          <li>
            <strong>Stability Performance —</strong> Furniture must remain stable in
            use and reduce tipping risks that could cause injury or property damage.
          </li>
          <li>
            <strong>Durability Performance —</strong> Products must withstand
            repeated usage cycles while maintaining acceptable performance.
          </li>
          <li>
            <strong>Material &amp; Workmanship —</strong> Materials, finishing, and
            assembly methods must meet quality controls for consistent production.
          </li>
          <li>
            <strong>Safety Considerations —</strong> Design must minimize hazards from
            furniture use for consumers and institutional buyers.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification Matters for Furniture Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Indian furniture market has become increasingly quality-conscious.
          Government departments, educational institutions, corporate buyers, and
          large procurement agencies often prefer products that comply with
          recognized standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Obtaining BIS certification helps manufacturers:
        </p>

        <ul className={LIST_CLASS}>
          <li>Prove compliance with applicable Indian standards</li>
          <li>Boost product credibility and brand reputation</li>
          <li>Win customer and institutional buyer confidence</li>
          <li>Improve acceptance in government and corporate procurement</li>
          <li>Strengthen in-house quality management practices</li>
          <li>Stay ahead of evolving regulatory requirements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers seeking long-term growth, BIS certification is often
          viewed as both a compliance requirement and a strategic business advantage.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for Tables and Desks Under IS 17633:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Before a manufacturer can obtain BIS certification, product samples must
          be evaluated against the applicable requirements of IS 17633:2022 through
          testing at a BIS-recognized laboratory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of testing is to verify that the furniture meets the
          prescribed standards for safety, stability, strength, durability, and
          overall performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          While the exact test parameters may vary depending on product design and
          certification requirements, manufacturers are generally assessed for the
          following characteristics:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Design &amp; Workmanship —</strong> Construction quality, assembly,
            finishing, and overall product integrity are examined for safe long-term use.
          </li>
          <li>
            <strong>Dimensional Verification —</strong> Critical measurements are
            checked against the standard and approved product specifications.
          </li>
          <li>
            <strong>Stability Testing —</strong> Confirms the product stays stable in
            normal use and flags tipping or structural weaknesses.
          </li>
          <li>
            <strong>Static Load Testing —</strong> Verifies load-bearing capacity
            without failure, excessive deformation, or damage.
          </li>
          <li>
            <strong>Strength Testing —</strong> Assesses frames, joints, and supports
            under operational stresses during regular use.
          </li>
          <li>
            <strong>Durability Assessment —</strong> Checks performance retention after
            repeated usage cycles.
          </li>
          <li>
            <strong>Safety Assessment —</strong> Rules out avoidable risks from
            instability, defects, or unsafe design features.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Tables and Desks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS certification under IS 17633:2022 must follow a
          structured certification process established by the Bureau of Indian
          Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Although specific requirements may vary based on the applicant type and
          manufacturing location, the general process remains similar.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1: Product Scope Assessment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The first step involves determining whether the product falls within the
          scope of IS 17633:2022 and the applicable Quality Control Order. A technical
          review of the product specifications, intended use, materials, and
          construction is usually carried out before initiating the certification
          process.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 2: Documentation Preparation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The manufacturer prepares the required documentation, including company
          information, manufacturing details, product specifications, quality control
          procedures, and supporting technical records. Proper documentation is
          critical because deficiencies at this stage can delay certification.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 3: Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Product samples are tested at a BIS-recognized laboratory to verify
          compliance with the requirements of IS 17633:2022. The test report serves
          as one of the primary technical documents supporting the certification
          application.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4: Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS application is submitted along with supporting documents, test
          reports, manufacturing information, and quality management records. The
          application is reviewed by BIS for completeness and technical compliance.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 5: Factory Assessment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS may conduct a factory inspection to evaluate:
        </p>
        <ul className={LIST_CLASS}>
          <li>Manufacturing infrastructure and production capabilities</li>
          <li>Quality control systems and in-house testing facilities</li>
          <li>Raw material controls and product traceability mechanisms</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The objective is to verify the manufacturer&apos;s ability to consistently
          produce compliant products.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 6: Evaluation and Review
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS reviews the application, inspection findings, and laboratory test
          reports before making a certification decision. Any observations raised
          during the review process must be addressed by the applicant.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7: Grant of BIS Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Upon successful completion of all requirements, BIS grants the licence and
          authorizes the manufacturer to use the ISI Mark on certified tables and
          desks.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Indian Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indian manufacturers generally apply under the domestic certification
          procedure prescribed by BIS. The process typically includes:
        </p>

        <ul className={LIST_CLASS}>
          <li>Product testing at a BIS-recognized laboratory</li>
          <li>Application submission with supporting documents</li>
          <li>Factory inspection and technical review by BIS</li>
          <li>Grant of BIS licence and ISI Mark authorization</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once certified, manufacturers must continue complying with BIS requirements
          and maintain consistent product quality throughout the licence period.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Foreign Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers intending to export tables and desks to India must
          also obtain BIS certification before supplying products covered under the
          applicable Quality Control Order.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification process generally involves:
        </p>

        <ul className={LIST_CLASS}>
          <li>Appointment of an Authorized Indian Representative (AIR)</li>
          <li>Product testing and factory assessment overseas</li>
          <li>Documentation review and BIS certification approval</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers must ensure ongoing compliance with BIS requirements
          to maintain certification validity.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Tables and Desks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Documentation requirements may vary depending on the manufacturer and
          certification route. However, the following documents are commonly required
          during the certification process.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Business and Legal Documents</h3>
        <ul className={LIST_CLASS}>
          <li>Company registration, manufacturing licence, and GST (if applicable)</li>
          <li>Authorized signatory details and identity proof</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Manufacturing Information</h3>
        <ul className={LIST_CLASS}>
          <li>Process flow chart, factory layout, and machinery details</li>
          <li>Production infrastructure and capacity records</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Product Information</h3>
        <ul className={LIST_CLASS}>
          <li>Product specifications, technical drawings, and catalogue</li>
          <li>Bill of materials and material/component details</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Quality Control Documents</h3>
        <ul className={LIST_CLASS}>
          <li>Internal testing, inspection, and QC procedures</li>
          <li>Quality control records and equipment calibration reports</li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Certification Documents</h3>
        <ul className={LIST_CLASS}>
          <li>Laboratory test reports and completed BIS application forms</li>
          <li>Declarations, undertakings, and other BIS-prescribed documents</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers should ensure that all documentation is accurate, complete,
          and consistent before submission.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges During BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Although the certification process is straightforward when properly managed,
          manufacturers often encounter several challenges.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technical interpretation —</strong> Mapping IS 17633:2022
            requirements to specific product designs can be difficult without expert
            guidance.
          </li>
          <li>
            <strong>Testing failures —</strong> Weak joints, poor stability, or
            material issues often lead to lab test rejection.
          </li>
          <li>
            <strong>Documentation gaps —</strong> Incomplete or mismatched records
            are a frequent cause of application delays.
          </li>
          <li>
            <strong>Factory compliance —</strong> QC systems, traceability, or
            production controls may need upgrading before licence grant.
          </li>
          <li>
            <strong>Regulatory coordination —</strong> Aligning lab testing,
            inspections, and BIS follow-ups takes time without structured support.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of Professional BIS Certification Assistance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Working with an experienced BIS consultant can help manufacturers avoid
          costly delays and streamline the certification journey.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Professional support typically includes:
        </p>

        <ul className={LIST_CLASS}>
          <li>Product scope review and standard interpretation</li>
          <li>Documentation preparation and application filing</li>
          <li>Lab testing and factory inspection coordination</li>
          <li>Ongoing compliance and post-certification support</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This allows manufacturers to focus on production while ensuring regulatory
          requirements are addressed efficiently.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India is a regulatory compliance consultancy assisting
          manufacturers, importers, exporters, and businesses with certification and
          approval requirements across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our experts provide end-to-end support for BIS Certification for Tables and
          Desks under IS 17633:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Our Services Include</h3>

        <ul className={LIST_CLASS}>
          <li>Product applicability assessment and BIS compliance consulting</li>
          <li>Documentation support and application management</li>
          <li>Testing coordination and factory inspection assistance</li>
          <li>Regulatory communication and post-certification compliance support</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our goal is to help businesses navigate the certification process efficiently
          while minimizing delays and compliance challenges.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Tables and Desks under IS 17633:2022 is an important
          requirement for manufacturers seeking to supply compliant furniture products
          in the Indian market. The certification helps ensure that tables and desks
          meet established standards relating to safety, stability, durability,
          strength, and quality.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By obtaining BIS Certification and using the ISI Mark, manufacturers can
          demonstrate compliance with Indian standards, improve customer confidence,
          strengthen their market position, and support long-term business growth.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to obtain BIS Certification for Tables and Desks under
          IS 17633:2022, Sun Certifications India can assist you with end-to-end
          compliance support, helping you navigate the certification process
          efficiently and confidently.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Tables and Desks (IS 17633:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. What is IS 17633:2022?</strong>
              <br />
              IS 17633:2022 is the Indian Standard published by the Bureau of Indian
              Standards (BIS) that sets minimum performance, stability, durability, and
              safety requirements for tables and desks intended for adult users in sitting
              and standing applications.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. Is BIS certification mandatory for tables and desks?</strong>
              <br />
              Yes — for products covered under the applicable Furniture Quality Control
              Order (QCO). Manufacturers and importers must hold a valid BIS licence and
              comply with IS 17633:2022 before manufacturing, importing, selling, or
              distributing such furniture in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Which certification mark is applicable to tables and desks?</strong>
              <br />
              Certified tables and desks are authorized to bear the ISI Mark under the
              BIS Product Certification Scheme, indicating that the product conforms to
              the applicable Indian Standard.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Who can apply for BIS certification?</strong>
              <br />
              Both Indian manufacturers and foreign manufacturers may apply, provided
              their tables and desks fall within the scope of the applicable QCO and meet
              the requirements of IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. What is the purpose of BIS certification?</strong>
              <br />
              BIS certification confirms that furniture meets nationally recognized
              benchmarks for safety, structural performance, durability, and workmanship —
              helping protect end users and maintain quality standards across the market.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. What products are covered under IS 17633:2022?</strong>
              <br />
              The standard covers adult-use tables and desks used in offices, educational
              institutions, commercial establishments, and workplace environments — including
              office desks, workstations, study tables, conference tables, and similar
              furniture categories.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Is laboratory testing mandatory?</strong>
              <br />
              Yes. Product samples must be tested at a BIS-recognized laboratory, and the
              resulting test report is a key document in the certification application to
              demonstrate compliance with IS 17633:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Can imported tables and desks be sold without BIS certification?</strong>
              <br />
              No. Imported products that fall under mandatory certification cannot be
              legally supplied in India without valid BIS approval. Importers must ensure
              compliance with the applicable standard before placing products on the
              market.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. What is the role of a factory inspection?</strong>
              <br />
              BIS conducts factory assessment to verify that the manufacturer maintains
              adequate production infrastructure, quality control systems, and product
              traceability to consistently manufacture compliant tables and desks.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. How can Sun Certifications India help?</strong>
              <br />
              Sun Certifications India offers end-to-end assistance — including product
              scope assessment, documentation preparation, laboratory testing coordination,
              BIS application management, factory inspection readiness, and post-certification
              compliance support for tables and desks under IS 17633:2022.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17633-2022-Sun-Certifications-India.pdf"
            title="BIS Certificate for Tables & Desks - IS 17633:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Mark License</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS Certificate</a>
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
