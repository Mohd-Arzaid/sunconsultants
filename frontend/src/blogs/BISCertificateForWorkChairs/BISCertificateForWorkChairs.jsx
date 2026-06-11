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
  const title = "BIS Certification for Work Chairs | IS 17631:2022";
  const ogTitle = "BIS Certification for Work Chairs | IS 17631:2022";
  const twitterTitle = "BIS Certification for Work Chairs | IS 17631:2022";
  const metaDescription =
    "Learn everything about BIS Certification for Work Chairs under IS 17631:2022. Understand ISI Mark requirements, testing, certification process, documents, benefits, and FAQs";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "BIS Certification for Work Chairs, IS 17631:2022, ISI Mark Work Chairs, BIS License Work Chairs, BIS Certification Furniture";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631";
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
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/work-chairs-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/karasi-al-amal-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/gong-zuo-yi-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/werkstoelen-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/chaises-de-travail-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/arbeitsstuhle-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/kursi-kerja-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/sedie-da-lavoro-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/sagyou-you-isu-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/eobmuyong-uija-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/sillas-de-trabajo-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/ghao-ngan-is-17631"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/ghe-lam-viec-is-17631"
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
                    BIS Certification for Work Chairs (IS 17631:2022)
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
          BIS Certification for Work Chairs (IS 17631:2022) – Complete ISI Mark
          Certification Guide
        </h1>

        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforworkchairs.png"
            title="BIS License for Work Chairs"
            alt="BIS Certification for Work Chairs - IS 17631:2022 ISI Mark Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Work chairs have become an essential part of modern workplaces,
          educational institutions, government offices, co-working spaces, and home
          office environments. As organizations place greater emphasis on employee
          comfort, productivity, workplace ergonomics, and occupational well-being,
          the demand for high-quality work chairs continues to grow.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A poorly designed chair can negatively impact posture, comfort, and
          productivity. For this reason, quality, safety, durability, and ergonomic
          performance are critical considerations for manufacturers, buyers, and
          procurement agencies. To ensure uniform quality standards across the
          industry, the Bureau of Indian Standards (BIS) has established IS
          17631:2022, the Indian Standard applicable to work chairs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers covered under the applicable regulatory framework are
          required to obtain BIS Certification and use the ISI Mark on compliant
          products. BIS Certification demonstrates that the work chair has been
          evaluated against prescribed requirements relating to safety, strength,
          stability, durability, and ergonomic performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything manufacturers, importers,
          furniture brands, procurement professionals, and business owners need to
          know about BIS Certification for Work Chairs under IS 17631:2022.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Quick Overview of BIS Certification for Work Chairs
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
                ["Product", "Work Chairs"],
                ["Applicable Indian Standard", "IS 17631:2022"],
                ["Certification Type", "BIS Product Certification"],
                ["Applicable Certification Scheme", "Scheme-I (ISI Mark Certification)"],
                ["Applicable Mark", "ISI Mark"],
                ["Regulatory Authority", "Bureau of Indian Standards (BIS)"],
                ["Applicable Ministry", "Ministry of Commerce and Industry"],
                ["Compliance Requirement", "Mandatory under applicable Furniture QCO (Quality Control Order)"],
                [
                  "Eligible Applicants",
                  "Indian Manufacturers and Foreign Manufacturers ",
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
                    {particular === "Applicable Certification Scheme" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        Scheme-I (ISI Mark Certification)
                      </a>
                    ) : particular === "Compliance Requirement" ? (
                      <>
                        Mandatory under applicable{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-work-chairs"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Furniture QCO (Quality Control Order)</strong>
                        </a>
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
          What is BIS Certification for Work Chairs?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Work Chairs is a conformity assessment process
          conducted under the Bureau of Indian Standards Product Certification
          Scheme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The purpose of certification is to verify that work chairs comply with the
          requirements specified under IS 17631:2022. Upon successful certification,
          manufacturers are permitted to use the ISI Mark on their products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification process evaluates various performance and safety aspects
          of work chairs, including:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ergonomic design</li>
          <li>Structural integrity</li>
          <li>Stability</li>
          <li>Durability</li>
          <li>Safety requirements</li>
          <li>Workmanship</li>
          <li>Product performance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark provides assurance that the product has been assessed against
          recognized Indian standards and meets the prescribed quality requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Important for Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Work chairs are used for extended periods in offices, educational
          institutions, commercial establishments, and home workspaces. Since users
          spend a significant portion of their day seated, the quality and ergonomic
          performance of these chairs directly affect comfort and workplace
          efficiency.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS Certification helps ensure that certified work chairs:
        </p>

        <ul className={LIST_CLASS}>
          <li>Meet prescribed safety requirements</li>
          <li>Provide reliable performance</li>
          <li>Offer adequate structural strength</li>
          <li>Maintain stability during use</li>
          <li>Support long-term durability</li>
          <li>Comply with Indian quality standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, certification helps demonstrate product quality while
          supporting regulatory compliance and market acceptance.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overview of IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17631:2022 is the Indian Standard that specifies requirements for work
          chairs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard establishes requirements related to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Safety</li>
          <li>Strength</li>
          <li>Stability</li>
          <li>Durability</li>
          <li>Ergonomic considerations</li>
          <li>Functional performance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective is to ensure that work chairs are capable of providing safe
          and reliable performance during prolonged use in workplace environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1">Scope of IS 17631:2022</h3> 

        <p className="text-gray-600 text-base font-geist mb-3">
          According to the standard, IS 17631:2022 covers work chairs and applies to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Completely manufactured work chairs</li>
          <li>Fabricated work chairs</li>
          <li>Ready-to-assemble work chairs after assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The requirements of the standard apply to the assembled product intended
          for use.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Types of Work Chairs Covered Under IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Depending on product design and intended application, the standard may
          apply to various categories of workplace seating furniture, including:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Office Work Chairs —</strong> Seating used in corporate offices,
            administrative departments, and professional workplace settings.
          </li>
          <li>
            <strong>Task Chairs —</strong> Chairs built for daily desk work,
            workstations, and routine seated tasks.
          </li>
          <li>
            <strong>Adjustable Work Chairs —</strong> Models with height, tilt, or
            other adjustable features to improve comfort and ergonomics.
          </li>
          <li>
            <strong>Institutional Work Chairs —</strong> Chairs supplied to schools,
            colleges, government offices, and commercial institutions.
          </li>
          <li>
            <strong>Home Office Chairs —</strong> Work chairs designed for remote
            work, freelancers, and residential office setups.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Review product design, mechanism, and intended use carefully to confirm
          whether your chair falls within the scope of IS 17631:2022.
        </p>

        <p className="text-black-600 text-base font-geist mb-4">
          <strong>
            Also check Furniture Products Covered Under Mandatory BIS
            Certification —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS Certification for furniture</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Requirements Under IS 17631:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard focuses on several important performance characteristics that
          contribute to the quality and safety of work chairs.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Ergonomic Design —</strong> Addresses user comfort, seat and
            backrest support, adjustability, and proper posture to reduce fatigue
            and improve workplace productivity.
          </li>
          <li>
            <strong>Strength Requirements —</strong> Frame, joints, and supporting
            structures must withstand normal use without failure or loss of
            integrity.
          </li>
          <li>
            <strong>Stability Requirements —</strong> Chairs must resist tipping and
            remain stable during regular seated use and movement.
          </li>
          <li>
            <strong>Durability Requirements —</strong> Products must perform
            consistently after prolonged and repeated daily use over their intended
            service life.
          </li>
          <li>
            <strong>Safety Requirements —</strong> Design and construction must
            minimize avoidable hazards from instability, defects, or unsafe build.
          </li>
          <li>
            <strong>Material Quality —</strong> Components and finishes must meet
            quality standards that support safe, durable, and reliable performance.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for BIS Certification of Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Before certification is granted, product samples are evaluated through
          testing at a recognized laboratory. Testing helps verify compliance with
          the requirements specified under IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Key Tests Conducted</h3>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
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
              {[
                ["4", "Design and workmanship"],
                ["7.3.1", "Front Edge Overturning"],
                ["7.3.2", "Forwards Overturning"],
                [
                  "7.3.3",
                  "Forwards Overturning for Chairs with Foot Rest",
                ],
                [
                  "7.3.4",
                  "Sideways Overturning for Chairs Without Arm Rests",
                ],
                [
                  "7.3.5",
                  "Sideways Overturning for Chairs With Arm Rests",
                ],
                [
                  "7.3.6",
                  "Rearwards Overturning for Chairs Without Back Rest",
                ],
                ["7.4.1", "Seat Front Edge Static Load Test"],
                ["7.4.2", "Combined Seat and Back Static Load Test"],
                ["7.4.3", "Arm Rest Downward Static Load Test — Central"],
                ["7.4.4", "Arm Rest Downward Static Load Test — Front"],
                ["7.4.5", "Arm Rest Sideways Static Load Test"],
                ["7.4.6", "Foot Rest Static Load Test"],
              ].map(([clause, requirement], index) => (
                <TableRow
                  key={clause}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {clause}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {requirement}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS Certification under IS 17631:2022 must complete a
          structured certification process.
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Step 1: Product Applicability Assessment —</strong> Confirm
            whether the work chair falls under IS 17631:2022 and the applicable
            Furniture QCO before starting certification.
          </li>
          <li>
            <strong>Step 2: Documentation Preparation —</strong> Compile technical,
            manufacturing, quality control, and legal records required for BIS
            review.
          </li>
          <li>
            <strong>Step 3: Product Testing —</strong> Submit samples to a
            BIS-recognized laboratory for evaluation against IS 17631:2022.
          </li>
          <li>
            <strong>Step 4: Application Submission —</strong> File the BIS application
            with test reports, factory details, and supporting compliance documents.
          </li>
          <li>
            <strong>Step 5: Factory Inspection —</strong> BIS assesses production
            systems, QC procedures, and traceability at the manufacturing facility.
          </li>
          <li>
            <strong>Step 6: Technical Review —</strong> BIS evaluates the application,
            lab results, and inspection findings before final approval.
          </li>
          <li>
            <strong>Step 7: Grant of BIS Licence —</strong> On successful compliance,
            BIS issues the licence and authorizes use of the ISI Mark on certified
            work chairs.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Indian Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indian manufacturers typically apply through the domestic certification
          route. The process generally includes:
        </p>

        <ul className={LIST_CLASS}>
          <li>Product testing at a BIS-recognized laboratory</li>
          <li>Documentation review and BIS application filing</li>
          <li>Factory assessment and technical evaluation by BIS</li>
          <li>Grant of BIS licence and ISI Mark authorization</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Post-certification, manufacturers must maintain ongoing compliance with BIS
          surveillance, marking, and quality requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Foreign Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers intending to export work chairs to India must also
          obtain BIS Certification before supplying products covered under mandatory
          certification requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The process generally includes:
        </p>

        <ul className={LIST_CLASS}>
          <li>Appointment of an Authorized Indian Representative (AIR)</li>
          <li>Overseas product testing and factory assessment</li>
          <li>BIS application review and certification approval</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This ensures imported products meet the same quality and safety requirements
          applicable to domestic manufacturers.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Work Chairs
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Documentation is a critical part of the BIS certification process for work
          chairs. Requirements may differ based on whether the applicant is an Indian
          manufacturer, foreign manufacturer, or importer, and on the certification
          scheme followed. Incomplete or inconsistent records are among the most
          common reasons for application delays.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The following documents are commonly required during BIS certification of
          work chairs under IS 17631:2022:
        </p>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Business Documents —</strong> Company registration certificate,
            manufacturing licence (if applicable), GST registration, business address
            proof, and authorized signatory details with identity and address proof.
          </li>
          <li>
            <strong>Manufacturing Documents —</strong> Factory layout plan,
            manufacturing process flow chart, list of production machinery and test
            equipment, and details of production infrastructure and installed capacity.
          </li>
          <li>
            <strong>Product Documents —</strong> Product specifications, engineering
            or technical drawings, product catalogue or model list, bill of materials
            (BOM), and details of raw materials, components, and critical parts used
            in the work chair.
          </li>
          <li>
            <strong>Quality Control Documents —</strong> Written quality control
            procedures, incoming material inspection records, in-process and finished
            goods inspection reports, internal testing methods, and calibration
            certificates for measuring and testing equipment.
          </li>
          <li>
            <strong>Certification Documents —</strong> Test reports from a
            BIS-recognized laboratory, duly filled BIS application forms, declarations
            and undertakings, label or marking samples, and any additional documents
            prescribed by BIS for the specific certification route.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All documents should be accurate, complete, and consistent with the product
          details submitted in the BIS application. Manufacturers are advised to
          review documentation requirements carefully before filing to avoid
          unnecessary delays in certification processing.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Work Chairs
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Regulatory Compliance —</strong> Meet mandatory Indian standards
            and QCO requirements for lawful manufacture and sale.
          </li>
          <li>
            <strong>Legal Market Access —</strong> Supply certified work chairs in
            India without regulatory risk for covered product categories.
          </li>
          <li>
            <strong>Enhanced Credibility —</strong> The ISI Mark signals verified
            quality, safety, and conformity with IS 17631:2022.
          </li>
          <li>
            <strong>Customer Confidence —</strong> Corporate buyers, institutions,
            and end users trust products tested against national benchmarks.
          </li>
          <li>
            <strong>Better Procurement —</strong> Improves eligibility in government,
            institutional, and large-volume commercial tenders.
          </li>
          <li>
            <strong>Stronger Brand Reputation —</strong> Demonstrates commitment to
            quality, ergonomics, and long-term product reliability.
          </li>
          <li>
            <strong>Improved Quality Control —</strong> Encourages structured QC
            systems, traceability, and consistent production standards.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges Faced During BIS Certification
        </h2>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Technical interpretation —</strong> Mapping IS 17631:2022 clauses
            to specific chair designs, mechanisms, and variants can be complex.
          </li>
          <li>
            <strong>Testing failures —</strong> Weak frames, poor stability, or
            mechanism issues often lead to overturning or load test rejection.
          </li>
          <li>
            <strong>Documentation gaps —</strong> Mismatched drawings, incomplete QC
            records, or missing declarations commonly delay approval.
          </li>
          <li>
            <strong>Factory compliance —</strong> Production controls, traceability,
            and in-house testing may need upgrading before licence grant.
          </li>
          <li>
            <strong>Regulatory coordination —</strong> Aligning lab testing, BIS
            inspections, and follow-up queries takes time without expert support.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Sun Certifications India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India is a regulatory compliance consultancy assisting
          manufacturers, importers, exporters, and businesses in obtaining various
          certifications and approvals required for the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our team provides end-to-end assistance for BIS Certification of Work Chairs
          under IS 17631:2022.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Our Services Include</h3>

        <ul className={`${LIST_CLASS} space-y-3`}>
          <li>
            <strong>Product Applicability Assessment —</strong> We confirm whether
            your work chairs fall under IS 17631:2022 and the applicable QCO.
          </li>
          <li>
            <strong>BIS Compliance Consulting —</strong> Expert guidance on
            certification routes, obligations, and standard requirements.
          </li>
          <li>
            <strong>Documentation Assistance —</strong> Preparation, review, and
            organization of all BIS application and factory records.
          </li>
          <li>
            <strong>Testing Coordination —</strong> End-to-end support for sample
            submission and testing at recognized laboratories.
          </li>
          <li>
            <strong>Factory Inspection Support —</strong> Readiness checks for BIS
            factory assessment and compliance evaluations.
          </li>
          <li>
            <strong>Application Management —</strong> Handling BIS filings,
            follow-ups, and regulatory communication on your behalf.
          </li>
          <li>
            <strong>Post-Certification Support —</strong> Ongoing assistance with
            surveillance, marking rules, and licence maintenance requirements.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Work Chairs under IS 17631:2022 plays an important
          role in ensuring quality, safety, durability, stability, and ergonomic
          performance in workplace seating products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By obtaining BIS Certification and using the ISI Mark, manufacturers can
          demonstrate compliance with Indian standards, strengthen customer
          confidence, improve product credibility, and support long-term business
          growth.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are an Indian manufacturer or an overseas manufacturer seeking
          access to the Indian market, understanding the requirements of IS 17631:2022
          is an essential step toward regulatory compliance and market success.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to obtain BIS Certification for Work Chairs under IS
          17631:2022, Sun Certifications India can help simplify the process through
          expert regulatory guidance and end-to-end compliance support.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Work Chairs (IS 17631:2022)
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>1. What is BIS Certification for Work Chairs?</strong>
              <br />
              BIS Certification confirms that work chairs comply with the
              requirements of IS 17631:2022 and applicable certification
              requirements.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. What is IS 17631:2022?</strong>
              <br />
              IS 17631:2022 is the Indian Standard that specifies requirements for
              work chairs, including safety, strength, stability, durability, and
              ergonomic considerations.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Is BIS Certification mandatory for work chairs?</strong>
              <br />
              Work chairs covered under the applicable regulatory framework are
              required to comply with BIS certification requirements.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. What is the ISI Mark?</strong>
              <br />
              The ISI Mark is the standard certification mark issued under the BIS
              Product Certification Scheme.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Who can apply for BIS Certification?</strong>
              <br />
              Both Indian manufacturers and foreign manufacturers can apply.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. Does BIS Certification require product testing?</strong>
              <br />
              Yes. Product testing is an important part of the certification process.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                7. Do imported work chairs require BIS Certification?
              </strong>
              <br />
              Products covered under mandatory certification requirements must comply
              with applicable BIS regulations before being supplied in India.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. What tests are conducted under IS 17631:2022?</strong>
              <br />
              The standard includes evaluations such as design and workmanship
              assessment, dimensional verification, stability testing, and static load
              testing.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Why is ergonomic design important for work chairs?</strong>
              <br />
              Ergonomic design helps improve user comfort, supports proper posture,
              and contributes to a better workplace experience.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>10. How can Sun Certifications India help?</strong>
              <br />
              Sun Certifications India provides assistance with applicability
              assessment, documentation, testing coordination, inspection preparation,
              application management, and compliance support.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17631-2022-Sun-Certifications-India.pdf"
            title="BIS Certificate for Work Chairs - IS 17631:2022 PDF"
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline"> ISI Certificate</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS Certificate for Foreign Manufacturer</a>
          </li>
        </ul>

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
