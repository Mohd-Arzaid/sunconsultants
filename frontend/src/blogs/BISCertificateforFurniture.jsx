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

const BISCertificateForFurniture = () => {
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

export default BISCertificateForFurniture;

const MetaTags = () => {
  const title =
    "BIS Certificate for Furniture in India | BIS Certification, License & Process Guide";
  const ogTitle =
    "BIS Certificate for Furniture in India - Complete BIS Certification Guide";
  const twitterTitle =
    "BIS Certificate for Furniture | Complete BIS Certification Guide of Indian BIS";
  const metaDescription =
    "BIS Certificate for Furniture in India - complete guide on BIS Certification, BIS License, cost, documents, standards, process, online application & BIS Mark for furniture manufacturers.";
  const ogDescription =
    "Looking for BIS Certification for Furniture in India? Learn about BIS License, BIS Mark, applicable standards, certification process, cost, documents & compliance requirements in detail.";
  const twitterDescription =
    "Complete guide to BIS Certificate for Furniture in India - BIS Certification process, cost, documents, BIS Mark, standards & online application explained.";
  const metaKeywords =
    "BIS Certificate for Furniture, BIS Certification for Furniture, BIS License for Furniture, BIS Licence for Furniture, What is BIS, Indian BIS";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/furniture";
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
                    BIS Certificate for Furniture in India – Complete Detailed
                    Guide
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
          BIS Certificate for Furniture in India – Complete Detailed Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniture.png"
            title="BIS License for Furniture"
            alt="BIS Certificate for Furniture in India - Complete BIS Certification Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Introduction: BIS Certification and the Indian Furniture Industry
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India, product quality, safety, and standardization are governed by
          a central statutory authority known as the Bureau of Indian Standards
          (BIS). BIS is the national standards organization of India,
          established under the BIS Act to ensure that products sold in the
          Indian market conform to defined safety, quality, and performance
          benchmarks.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Full Form stands for Bureau of Indian Standards. It functions
          under the Ministry of Consumer Affairs, Food & Public Distribution,
          Government of India. BIS plays a crucial role in protecting consumer
          interests while supporting manufacturers through a transparent
          standardization and certification ecosystem.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Indian furniture industry has witnessed rapid growth due to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Urbanization</li>
          <li>Expansion of residential and commercial infrastructure</li>
          <li>
            Growth in hospitality, education, healthcare, and co-living sectors
          </li>
          <li>Rising consumer awareness about product safety and durability</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture is no longer considered a purely aesthetic product. It is
          directly linked to user safety, ergonomics, structural stability, fire
          resistance, and long-term durability. Incidents involving collapsing
          beds, unsafe bunk beds, unstable chairs, or substandard storage units
          have raised concerns among regulators and consumers alike.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          To address these risks, BIS Certification for Furniture has become a
          critical compliance requirement. BIS ensures that furniture products
          meet Indian Standards (IS) relating to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural strength</li>
          <li>Load-bearing capacity</li>
          <li>Material quality</li>
          <li>Design safety</li>
          <li>Performance under usage conditions</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, exporters, MSMEs, startups, and
          furniture brand owners, obtaining a BIS Certificate for Furniture is
          no longer just a regulatory formality—it is a market necessity.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification for Furniture Matters
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>It ensures legal compliance under Indian regulations</li>
          <li>It enhances consumer trust and brand credibility</li>
          <li>It enables unrestricted sale and distribution across India</li>
          <li>It minimizes product liability risks</li>
          <li>It improves export readiness and global acceptance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide is designed to be the most authoritative and
          detailed resource on BIS Certification for Furniture in India. Whether
          you are a first-time manufacturer or an established furniture brand,
          this guide answers every possible question related to BIS License for
          Furniture, BIS Registration for Furniture, applicable standards,
          process, cost, documents, timelines, and post-certification
          compliance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certificate for Furniture?
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate for Furniture is an official approval granted by the
          Bureau of Indian Standards confirming that a specific furniture
          product complies with the relevant Indian Standard (IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What is BIS Mark?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Mark, commonly known as the ISI Mark, is a standard conformity
          mark that appears on certified products. It signifies that the
          furniture has:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Passed laboratory testing</li>
          <li>Cleared factory inspection</li>
          <li>Met all standard requirements</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Logo Explanation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Logo represents the authority of BIS as India&apos;s national
          standards body. When used with the ISI Mark on furniture products, it
          assures buyers that the product complies with BIS Standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate India – Legal Status
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In India, manufacturing, importing, or selling furniture products
          covered under notified standards without BIS Certification can lead
          to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of goods</li>
          <li>Heavy monetary penalties</li>
          <li>Prosecution under BIS Act</li>
          <li>Ban on sale or import</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hence, a BIS Certificate for Furniture in India holds strong legal
          importance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Important for Furniture Products
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Furniture is critical for multiple reasons:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Safety & Structural Integrity
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture failures can cause injuries or fatalities. BIS Standards
          evaluate:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing capacity</li>
          <li>Stability against tipping</li>
          <li>Joint strength</li>
          <li>Material performance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Quality & Durability
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Certified furniture products ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Long service life</li>
          <li>Resistance to wear and tear</li>
          <li>Uniform performance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Consumer Trust
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification Mark builds instant confidence among buyers,
          institutions, and bulk purchasers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Market Access
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Many government tenders, institutional buyers, and large corporations
          mandate BIS-certified furniture.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Legal Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Selling non-certified furniture under mandatory BIS norms can attract
          penalties and legal action.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Furniture Products Covered Under BIS Certification
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture is a broad general category under BIS, covering multiple
          product types, each governed by different Indian Standards (IS
          Numbers).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Major Furniture Categories Covered:
        </h3>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          1. Work Chairs
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Used in offices, factories, and commercial spaces. Standards focus on
          ergonomics, stability, and load performance.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          2. General Purpose Chairs and Stools
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Used in homes, schools, and public spaces. BIS evaluates structural
          safety and material strength.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          3. Tables and Desks
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Includes office desks, study tables, workstations. Standards test load
          capacity and surface durability.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          4. Storage Units
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Almirahs, cabinets, lockers, shelves. Emphasis on stability, sharp
          edges, and safe access.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          5. Beds
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Single beds, double beds, folding beds. BIS checks frame strength and
          long-term performance.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          6. Bunk Beds
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Highly regulated due to safety risks. Focus on guardrails, ladder
          safety, and fall prevention.
        </p>

        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          7. Upholstered Composites for Non-Domestic Furniture
        </h4>
        <p className="text-gray-600 text-base font-geist mb-4">
          Used in offices, hotels, auditoriums. Standards include fire
          resistance and durability tests.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Other Furniture Products
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>School furniture</li>
          <li>Institutional seating</li>
          <li>Hospital furniture</li>
          <li>Modular furniture</li>
          <li>Metal & wooden furniture systems</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Each product category has its own applicable IS Number, notified
          separately by BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Standards Applicable to Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What are BIS Standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Standards are technical specifications published by BIS to define:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Material requirements</li>
          <li>Performance parameters</li>
          <li>Testing methods</li>
          <li>Marking guidelines</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Meaning of IS Numbers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          An IS Number (Indian Standard Number) uniquely identifies a standard
          applicable to a product.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Notification Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS issues official BIS Notifications making certain standards
          mandatory. Once notified:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance becomes compulsory</li>
          <li>Non-certified products are illegal</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          How to Identify the Correct BIS Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identify product category</li>
          <li>Study applicable IS scope</li>
          <li>Confirm standard applicability</li>
          <li>Avoid wrong standard selection (a common mistake)</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Types of BIS Certification Applicable for Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS License under ISI Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture products are generally covered under the ISI Certification
          Scheme, which involves:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product testing</li>
          <li>Factory inspection</li>
          <li>Surveillance audits</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Registration
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Registration is mainly for electronics and IT products. Furniture
          usually requires BIS License, not Registration.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Furniture in India
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1: Pre-Application Preparation
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identify applicable IS Standard</li>
          <li>Assess product design compliance</li>
          <li>Prepare technical documentation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2: BIS Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Submit BIS Application with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product details</li>
          <li>Manufacturing details</li>
          <li>Standard reference</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3: BIS Apply Online
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Application is filed through BIS online portal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4: Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samples tested in BIS-recognized labs.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 5: Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officers verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process</li>
          <li>Quality control</li>
          <li>Testing facilities</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 6: Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Upon compliance, BIS grants the license.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 7: Use of BIS Certification Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturer can affix BIS Mark / ISI Mark.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification for Furniture
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Key Documents Include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration proof</li>
          <li>Product drawings & specifications</li>
          <li>Raw material details</li>
          <li>Test reports</li>
          <li>Quality control records</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Common Documentation Mistakes:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Incorrect standard reference</li>
          <li>Incomplete test data</li>
          <li>Mismatch in product scope</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Cost of BIS Certification for Furniture
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Cost Components:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Government application fees</li>
          <li>Testing charges</li>
          <li>Inspection fees</li>
          <li>License fees</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Factors:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product complexity</li>
          <li>Number of models</li>
          <li>Testing requirements</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Note: Professional consultancy fees are separate from government fees.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Timeline for BIS Certificate Registration
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Average Timeline:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Testing: 3–6 weeks</li>
          <li>Inspection: 1–2 weeks</li>
          <li>License Grant: 2–4 weeks</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total: 8–12 weeks (approx.)
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          How to Get BIS Certification in India for Furniture Manufacturers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Practical Tips:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Choose correct IS standard</li>
          <li>Ensure factory readiness</li>
          <li>Maintain testing records</li>
          <li>Avoid documentation errors</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certificate Online Application – Practical Overview
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Online Portal Challenges:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Technical errors</li>
          <li>Document upload issues</li>
          <li>Standard selection confusion</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Proper guidance reduces delays.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Use of BIS Mark & BIS Certification Mark After Approval
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Marking Rules:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Correct IS reference</li>
          <li>License number</li>
          <li>Proper size & visibility</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance can lead to suspension.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Challenges in BIS Certification for Furniture
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpreting standards</li>
          <li>Product testing failures</li>
          <li>Inspection non-conformities</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Role of BIS Consultants in Furniture Certification
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Professional BIS consultants help by:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifying correct standards</li>
          <li>Managing testing & inspection</li>
          <li>Reducing approval time</li>
          <li>Avoiding costly rejections</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Furniture is a cornerstone of quality, safety,
          and legal compliance in India&apos;s growing furniture market. Whether
          you are a manufacturer, importer, or brand owner, obtaining a BIS
          Certificate for Furniture in India ensures:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Regulatory compliance</li>
          <li>Consumer trust</li>
          <li>Long-term market success</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          By understanding the BIS Certification Process, Standards, Costs, and
          Compliance requirements, businesses can confidently navigate the
          regulatory landscape and build safer, stronger, and more reliable
          furniture products for the Indian market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions for BIS License
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certification mandatory for all furniture products in
              India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, BIS Certification is mandatory only for those furniture
              products that are covered under notified BIS Standards. However,
              once a furniture product category is notified by the Bureau of
              Indian Standards, manufacturing, importing, selling, or
              distributing that product without a valid BIS License becomes
              illegal in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Which furniture products require BIS License instead of BIS
              Registration?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Furniture products generally fall under the ISI Certification
              Scheme, which requires a BIS License, not BIS Registration. BIS
              Registration (CRS) mainly applies to electronics and IT products,
              whereas furniture products require testing + factory inspection +
              BIS License.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Can imported furniture be sold in India without BIS Certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. Imported furniture products covered under mandatory BIS
              Standards must have BIS Certification before customs clearance.
              Importing non-certified furniture may result in:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Customs detention</li>
              <li>Re-export or destruction</li>
              <li>Heavy penalties</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Foreign manufacturers must obtain BIS License before exporting
              furniture to India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Can foreign furniture manufacturers apply for BIS Certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Foreign manufacturers can apply under the Foreign
              Manufacturers Certification Scheme (FMCS). They must:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Appoint an Authorized Indian Representative (AIR)</li>
              <li>Comply with Indian Standards</li>
              <li>Allow BIS factory inspection abroad.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certification required for handmade or small-scale
              furniture manufacturers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, if the furniture product is covered under a mandatory BIS
              standard, then even MSMEs, startups, and small-scale units must
              obtain BIS Certification. There is no exemption based on
              production volume.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certification required for wooden furniture?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, wooden furniture products such as beds, chairs, tables,
              desks, and storage units may require BIS Certification if they
              fall under notified standards. BIS standards apply to both wooden
              and metal furniture, depending on product type and usage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Can one BIS License cover multiple furniture models?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, multiple models or variants can be covered under a single BIS
              License, provided:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>They fall under the same IS Standard</li>
              <li>Construction, material, and design parameters are similar</li>
              <li>BIS approves the grouping during application.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Can BIS Certification be transferred to another manufacturer?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. BIS License is non-transferable. Each manufacturer must obtain
              their own BIS Certificate, even if the product design is
              identical.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What is BIS Certificate?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is official proof of compliance with BIS Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Is BIS Certification mandatory for furniture?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, for furniture products covered under notified standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              How to get BIS Certification in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Through testing, inspection, and BIS license approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What is BIS Mark?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              A conformity mark showing BIS approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS Certification Cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Depends on product type, testing, and scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              BIS Full Form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards.
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
