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

const BISCertificateForChairAndStools = () => {
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

export default BISCertificateForChairAndStools;

const MetaTags = () => {
  const title = "BIS Certification for General Purpose Chairs and Stools | IS 17632:2022";
  const ogTitle = "BIS Certification for General Purpose Chairs and Stools | IS 17632:2022";
  const twitterTitle = "BIS Certification for General Purpose Chairs and Stools | IS 17632:2022";
  const metaDescription =
    "Learn everything about BIS Certification for General Purpose Chairs and Stools under IS 17632:2022. Understand ISI Mark requirements, testing, certification process, documents, benefits, and FAQs";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS Certification for General Purpose Chairs and Stools, IS 17632:2022, ISI Mark Chairs and Stools, BIS License Chairs Stools, BIS Certification Furniture";
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
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/bis-certification-for-chair-&-stools-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-wa-masaaid-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/yizi-he-dengzi-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/stoelen-en-krukken-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-et-tabourets-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/stuhle-und-hocker-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-dan-bangku-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-e-sgabelli-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/isu-to-suturu-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/uija-mich-seutul-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-y-taburetes-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-lae-mang-is-17632"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-va-ghe-dau-is-17632"
      />
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
                    BIS Certification for General Purpose Chairs and Stools (IS 17632:2022)
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
          BIS Certification for General Purpose Chairs and Stools (IS 17632:2022)
          – Complete ISI Mark Certification Guide
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforchairsandstools.png"
            title="BIS License for General Purpose Chairs and Stools"
            alt="BIS Certification for General Purpose Chairs and Stools - IS 17632:2022 ISI Mark Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          General purpose chairs and stools are among the most commonly used
          furniture products across homes, offices, educational institutions,
          healthcare facilities, retail establishments, public spaces, and commercial
          environments. Since these seating products are subjected to regular and
          prolonged use, they must meet specific quality, safety, strength, and
          durability requirements to ensure reliable performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With increasing emphasis on product quality and consumer safety, compliance
          with Indian Standards has become an important requirement for furniture
          manufacturers and importers. BIS Certification for General Purpose Chairs
          and Stools under IS 17632:2022 helps ensure that products meet prescribed
          performance and safety requirements before being placed on the Indian
          market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification under the Bureau of Indian Standards (BIS) allows
          manufacturers to use the ISI Mark on compliant products. The ISI Mark
          serves as an assurance that the product conforms to recognized Indian
          quality standards and has undergone the required evaluation process.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As the furniture industry continues to grow and procurement agencies
          increasingly prefer certified products, BIS Certification has become an
          important compliance and market-access requirement for manufacturers.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Highlights of BIS Certification for General Purpose Chairs and Stools
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
                ["Product Name", "General Purpose Chairs and Stools"],
                ["Applicable Indian Standard", "IS 17632:2022"],
                ["Certification Type", "BIS Product Certification"],
                ["Certification Scheme", "Scheme-I (ISI Mark Certification)"],
                ["Applicable Mark", "ISI Mark"],
                ["Regulatory Authority", "Bureau of Indian Standards"],
                ["Applicable Ministry", "Ministry of Commerce and Industry"],
                ["Compliance Requirement", "Mandatory under applicable Quality Control Order (QCO)"],
                ["Product Category", "Furniture"],
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
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-chairs-and-stools"
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
          What is BIS Certification for General Purpose Chairs and Stools?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for General Purpose Chairs and Stools is a conformity
          assessment process conducted under the BIS Product Certification Scheme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of certification is to verify that the product complies with
          the requirements specified in IS 17632:2022. Once certification is
          granted, manufacturers are authorized to use the ISI Mark on their products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification process evaluates various aspects of product performance,
          including:
        </p>

        <ul className={LIST_CLASS}>
          <li>Strength</li>
          <li>Stability</li>
          <li>Durability</li>
          <li>Structural performance</li>
          <li>Safety requirements</li>
          <li>Material quality</li>
          <li>Workmanship</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification helps ensure that seating products supplied in the Indian
          market meet established quality and safety benchmarks.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overview of IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17632:2022 is the Indian Standard that specifies requirements for
          General Purpose Chairs and Stools.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard establishes requirements related to safety, strength,
          durability, stability, and overall performance of seating furniture
          intended for general use.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Completely manufactured chairs and stools</li>
          <li>Fabricated chairs and stools</li>
          <li>Ready-to-assemble products after assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The purpose of the standard is to ensure that furniture products provide
          safe, reliable, and durable performance throughout their intended service
          life.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Requirements Under IS 17632:2022
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Strength Requirements</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          General purpose chairs and stools must possess adequate structural strength
          to withstand expected loading conditions during normal use.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stability Requirements</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The furniture should remain stable during intended use and should not
          present unnecessary tipping risks.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Durability Requirements</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Products must be capable of maintaining their structural integrity and
          performance over repeated usage cycles.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Safety Requirements</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard includes safety-related requirements intended to minimize risks
          associated with furniture use.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Material Quality and Workmanship</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The quality of materials, manufacturing practices, assembly methods, joints,
          and finishing contribute significantly to compliance with the standard.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Ergonomic Considerations</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard incorporates performance-related considerations that contribute
          to user comfort and practical functionality.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Products Covered Under IS 17632:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard generally applies to:
        </p>

        <ul className={LIST_CLASS}>
          <li>General purpose chairs</li>
          <li>General purpose stools</li>
          <li>Fixed seating furniture intended for general use</li>
          <li>Ready-to-assemble seating products after assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers should review the scope of the standard carefully to determine
          applicability to their products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
        Also Check 
        Furniture Products Covered Under Mandatory BIS Certification -{" "}
        <a href="https://bis-certifications.com/blogs/isi-products/furniture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
           BIS Certification for furniture
        </a>
        </p>

        

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certification Mandatory for General Purpose Chairs and Stools?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Furniture products covered under the applicable Furniture Quality
          Control Order (QCO) are required to comply with the relevant Indian Standard
          and obtain BIS Certification before being manufactured, imported, sold,
          distributed, or supplied in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers covered under the applicable regulatory framework must obtain
          a BIS licence and comply with marking requirements prescribed by BIS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Before certification is granted, product samples must be evaluated through
          testing conducted at recognized laboratories.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Testing generally focuses on the following parameters:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Structural Performance Evaluation —</strong> Determines whether
            the chair or stool can withstand normal usage conditions without failure.
          </li>
          <li>
            <strong>Stability Testing —</strong> Assesses whether the furniture
            remains stable during intended use and resists tipping.
          </li>
          <li>
            <strong>Strength Assessment —</strong> Evaluates load-bearing capability
            and structural integrity of frames, joints, and supports.
          </li>
          <li>
            <strong>Durability Evaluation —</strong> Checks performance retention
            after repeated usage cycles over the product&apos;s service life.
          </li>
          <li>
            <strong>Safety Assessment —</strong> Identifies potential hazards and
            verifies compliance with prescribed safety requirements.
          </li>
          <li>
            <strong>Workmanship Inspection —</strong> Reviews construction quality,
            finishing, assembly integrity, and overall build standards.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Product Marking Requirements
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Products certified under IS 17632:2022 are generally required to carry
          identifying information such as:
        </p>

        <ul className={LIST_CLASS}>
          <li>Manufacturer&apos;s name or trademark</li>
          <li>Model or design identification</li>
          <li>Batch or lot number</li>
          <li>Date of manufacture</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark may only be applied after obtaining a valid BIS licence.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for General Purpose Chairs and Stools
        </h2>

        <h3 className={SUB_HEADING_CLASS}>Step 1: Product Scope Evaluation</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The first step involves determining whether the product falls within the
          scope of IS 17632:2022 and the applicable Furniture QCO.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Review the chair or stool type, intended use, materials, and construction
          before initiating the certification process.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 2: Documentation Preparation</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The manufacturer prepares technical and compliance documentation required
          for certification, including company records, factory details, product
          specifications, and quality control procedures.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Complete and accurate documentation helps avoid unnecessary delays during
          BIS review.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 3: Product Testing</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Representative samples are tested at a BIS-recognized laboratory to verify
          compliance with the requirements of IS 17632:2022.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          The laboratory test report is a key technical document supporting the
          certification application.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 4: BIS Application Submission</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The certification application is submitted along with supporting
          documentation, test reports, and manufacturing information.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          BIS reviews the application for completeness and technical compliance before
          proceeding further.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 5: Factory Inspection</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS may evaluate the manufacturing facility, production systems, and quality
          control processes to verify the ability to consistently produce compliant
          products.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          This assessment typically covers production infrastructure, QC systems, raw
          material controls, and product traceability.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 6: Technical Review</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The application, test reports, and inspection findings are reviewed by BIS
          before a certification decision is made.
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          Any observations or deficiencies raised during review must be addressed by
          the applicant.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 7: Grant of Licence</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Upon satisfactory compliance, BIS grants the licence and authorizes the use
          of the ISI Mark on certified general purpose chairs and stools.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must continue to comply with BIS requirements throughout the
          licence period.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Compliance with Indian Regulations —</strong> Meet mandatory
            quality and safety requirements under the applicable Furniture QCO.
          </li>
          <li>
            <strong>Legal Market Access —</strong> Supply certified chairs and stools
            in India in accordance with applicable regulatory requirements.
          </li>
          <li>
            <strong>Enhanced Product Credibility —</strong> The ISI Mark demonstrates
            conformity with recognized Indian standards.
          </li>
          <li>
            <strong>Increased Customer Confidence —</strong> Consumers and
            institutional buyers prefer products evaluated against established
            benchmarks.
          </li>
          <li>
            <strong>Competitive Advantage —</strong> Greater acceptance in commercial
            and government procurement processes.
          </li>
          <li>
            <strong>Improved Brand Reputation —</strong> Demonstrates commitment to
            product quality, safety, and long-term reliability.
          </li>
          <li>
            <strong>Support for MSMEs —</strong> Helps small and medium manufacturers
            strengthen market presence and build customer trust.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges Faced During Certification
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Product Testing Failures —</strong> Design or manufacturing
            deficiencies may result in non-compliance during laboratory evaluation.
          </li>
          <li>
            <strong>Documentation Issues —</strong> Incomplete or inconsistent records
            frequently cause certification delays.
          </li>
          <li>
            <strong>Manufacturing Compliance Gaps —</strong> Quality control systems
            may require improvement before certification can be granted.
          </li>
          <li>
            <strong>Regulatory Complexity —</strong> Managing testing, inspections,
            and certification procedures can be challenging without expert guidance.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India assists manufacturers, importers, exporters, and
          businesses with regulatory compliance requirements across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">Our services include:</p>

        <ul className={LIST_CLASS}>
          <li>Product applicability assessment</li>
          <li>BIS certification consulting</li>
          <li>Documentation support</li>
          <li>Laboratory testing coordination</li>
          <li>Factory inspection preparation</li>
          <li>Application management</li>
          <li>Regulatory compliance assistance</li>
          <li>Post-certification support</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our objective is to help clients navigate certification requirements
          efficiently and achieve compliance with minimal delays.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for General Purpose Chairs and Stools under IS 17632:2022
          plays an important role in ensuring product quality, safety, strength,
          stability, and durability. The certification helps manufacturers demonstrate
          compliance with Indian Standards while strengthening customer confidence and
          supporting market access.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As demand for quality-assured furniture products continues to grow, BIS
          Certification and the ISI Mark provide valuable assurance to consumers,
          institutions, and procurement agencies. Manufacturers that invest in
          compliance not only meet regulatory requirements but also enhance their
          competitiveness and long-term market reputation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to obtain BIS Certification for General Purpose Chairs
          and Stools under IS 17632:2022, Sun Certifications India can provide expert
          guidance and end-to-end compliance support throughout the certification
          process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for General Purpose Chairs and Stools (IS 17632:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. What is IS 17632:2022?</strong>
              <br />
              IS 17632:2022 is the Indian Standard that specifies requirements for
              General Purpose Chairs and Stools.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                2. Is BIS Certification mandatory for General Purpose Chairs and
                Stools?
              </strong>
              <br />
              Products covered under the applicable Furniture Quality Control Order
              are required to comply with BIS certification requirements.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. What is the ISI Mark?</strong>
              <br />
              The ISI Mark is the standard certification mark issued under the BIS
              Product Certification Scheme.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Who can apply for BIS Certification?</strong>
              <br />
              Both Indian manufacturers and foreign manufacturers can apply for
              certification.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Does BIS Certification require product testing?</strong>
              <br />
              Yes. Product testing is an important component of the certification
              process.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                6. Are ready-to-assemble chairs covered under IS 17632:2022?
              </strong>
              <br />
              Yes. The standard applies to ready-to-assemble products after assembly.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. What products are excluded from the scope of IS 17632:2022?
              </strong>
              <br />
              Products such as reclining chairs, rocking chairs, tilting chairs,
              settees, and certain specialized seating products are generally excluded.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. What are the benefits of obtaining BIS Certification?</strong>
              <br />
              Benefits include regulatory compliance, improved product credibility,
              enhanced customer confidence, and better market acceptance.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Can foreign manufacturers obtain BIS Certification?</strong>
              <br />
              Yes. Foreign manufacturers can apply through the applicable BIS
              certification route for overseas manufacturers.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. How can Sun Certifications India help?</strong>
              <br />
              Sun Certifications India provides end-to-end support for BIS
              certification, including documentation, testing coordination,
              application management, and compliance assistance.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17632-2022-Sun-Certifications-India.pdf"
            title="BIS Certificate for Chair & Stools - IS 17632:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Certification</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS Certification for Foreign Manufacturer</a>
          </li>
        </ul>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={1} />
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
