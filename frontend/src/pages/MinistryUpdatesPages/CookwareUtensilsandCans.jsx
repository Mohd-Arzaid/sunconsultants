import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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

const CookwareUtensilsandCans = () => {
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

export default CookwareUtensilsandCans;

const MetaTags = () => {
  const title =
    "Cookware QCO 2026: BIS Certification for Utensils, Sinks & Cans | ISI Mark Guide";
  const ogTitle =
    "Cookware QCO 2026: BIS Certification for Utensils, Sinks & Cans | ISI Mark Guide";
  const twitterTitle =
    "Cookware QCO 2026: BIS Certification for Utensils, Sinks & Cans | ISI Mark Guide";
  const metaDescription =
    "Complete guide to Cookware, Utensils and Cans QCO 2026 issued by the Government of India. Learn BIS certification requirements, implementation dates, cost, exemptions, and compliance process for manufacturers.";
  const ogDescription =
    "Complete guide to Cookware, Utensils and Cans QCO 2026 issued by the Government of India. Learn BIS certification requirements, implementation dates, cost, exemptions, and compliance process for manufacturers.";
  const twitterDescription =
    "Complete guide to Cookware, Utensils and Cans QCO 2026 issued by the Government of India. Learn BIS certification requirements, implementation dates, cost, exemptions, and compliance process for manufacturers.";
  const metaKeywords =
    "cookware qco 2026, BIS certification cookware, BIS QCO utensils, ISI mark utensils";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/cookware-qco-2026";
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
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Cookware QCO 2026
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
        <MainContentLeft />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          Cookware, Utensils and Cans for Foods and Beverages (QCO) Quality
          Control Order, 2026
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has introduced a significant regulatory update
          through the Cookware, Utensils and Cans for Foods and Beverages
          (Quality Control) Order, 2026, issued by the Ministry of Steel. This
          Quality Control Order (QCO) mandates BIS certification and ISI marking
          for specific stainless steel and food-grade metal products to ensure
          safety, quality, and compliance with Indian standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As per the official Gazette notification dated 30 March 2026, the
          Government has exercised powers under the Bureau of Indian Standards
          Act, 2016 to regulate cookware and food-contact products in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This order replaces the earlier Cookware, Utensils and Cans for Foods
          and Beverages (Quality Control) Order, 2025, specifically for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stainless steel utensils</li>
          <li>Stainless steel sinks</li>
          <li>Metal cans used for food and beverages</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective is to ensure that all such products meet Indian Standards
          (IS standards) and carry the ISI mark under BIS certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This article provides a complete breakdown of the QCO notification,
          including applicability, implementation dates, exemptions, BIS
          certification requirements, and its impact on manufacturers and
          importers.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Key Highlights of the Cookware, Utensils and Cans for Foods and
          Beverages QCO 2026
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Mandatory BIS Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          All specified products must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conform to relevant Indian Standards</li>
          <li>Carry the Standard Mark (ISI Mark)</li>
          <li>
            Be certified under Scheme-I of BIS (Conformity Assessment
            Regulations, 2018)
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Effective Immediately
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The order comes into force from the date of publication in the Gazette,
          i.e., 30 March 2026.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Applicable Products
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The QCO applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cookware for food and beverages</li>
          <li>Stainless steel utensils</li>
          <li>Stainless steel kitchen sinks</li>
          <li>Three-piece round open top metal cans</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Products Covered Under the QCO
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The notification clearly specifies the following products along with
          their respective Indian Standards:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Stainless Steel Utensils
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>IS 14756:2024</li>
          <li>Covers kitchen utensils used for food preparation and consumption</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Stainless Steel Sinks (Domestic Use)
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>IS 13983:1994</li>
          <li>Includes kitchen sinks used in households</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Metal Cans for Food &amp; Beverages
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>IS 18427:2024</li>
          <li>Covers three-piece round open top cans</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          These standards ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Food safety</li>
          <li>Corrosion resistance</li>
          <li>Structural durability</li>
          <li>Hygiene compliance</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Implementation Timeline (Very Important for SEO Snippet)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The QCO provides a structured implementation timeline based on
          enterprise size:
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full min-w-[320px] font-geist text-sm text-left">
            <thead className="bg-[#1A8781] text-white">
              <tr>
                <th className="px-3 py-3 font-semibold">Category</th>
                <th className="px-3 py-3 font-semibold whitespace-nowrap">
                  Implementation Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Large Enterprises</td>
                <td className="px-3 py-2.5 text-gray-600">1 October 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Medium Enterprises</td>
                <td className="px-3 py-2.5 text-gray-600">1 October 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Small Enterprises</td>
                <td className="px-3 py-2.5 text-gray-600">1 January 2026</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Micro Enterprises</td>
                <td className="px-3 py-2.5 text-gray-600">1 April 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          This phased implementation helps MSMEs comply without sudden
          disruption.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Important Exemptions Under the QCO
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The notification also provides certain exemptions, which are critical
          for businesses:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Export-Oriented Products
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Products manufactured in India exclusively for export are exempted
          from this QCO.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Existing Stock Clearance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers and importers are allowed to sell existing stock if:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>The goods were manufactured or imported before implementation</li>
          <li>They have applied for BIS certification</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">
          They can sell such stock for up to 6 months from the applicable
          implementation date, provided:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            A declaration certified by a Chartered Accountant is submitted to
            BIS
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Imported Pre-Filled Products
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The QCO does not apply to imported goods that are already filled with
          material (solid, liquid, or gas).
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for Covered Products
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          To comply with this QCO, businesses must follow the BIS certification
          process:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1: Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Submit application with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product details</li>
          <li>Manufacturing information</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2: Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testing must be conducted in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS-approved laboratories</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3: Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials inspect:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process</li>
          <li>Quality control system</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4: Grant of License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">Once approved:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS license is issued</li>
          <li>ISI mark can be used</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration certificate</li>
          <li>Manufacturing license</li>
          <li>Test reports</li>
          <li>Quality control documents</li>
          <li>Factory layout</li>
          <li>Product details</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Cost for Cookware, Utensils &amp; Cans (ISI Mark Fees)
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Understanding the cost of BIS certification (ISI mark) is crucial for
          manufacturers and importers planning compliance under the Cookware QCO
          2026. The total cost is not fixed and depends on multiple factors such
          as product type, testing requirements, factory location, and
          certification scheme.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Application Fee
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approx. ₹1,000</li>
          <li>Paid at the time of submitting the BIS application</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Product Testing Charges
        </h3>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Approx. ₹5,000 to ₹50,000+ (can go higher)</li>
          <li>
            Depends on:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Product type (utensils, sinks, cans)</li>
              <li>Number of tests required</li>
              <li>Laboratory charges</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is mandatory in BIS-approved labs.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Factory Inspection Charges
        </h3>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Approx. ₹7,000 or more</li>
          <li>
            Includes:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Inspection of manufacturing unit</li>
              <li>Quality control verification</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. BIS License Fee
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approx. ₹1,000 per year</li>
          <li>Paid after approval for use of ISI mark</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Marking Fee (ISI Mark Usage Fee)
        </h3>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Variable cost (very important)</li>
          <li>
            Charged based on:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Production volume</li>
              <li>Product category</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-3">This fee can be:</p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>Per unit basis</li>
          <li>Or minimum annual marking fee</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          (Defined by BIS for each Indian Standard)
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Total Cost Summary
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full min-w-[360px] font-geist text-sm text-left">
            <thead className="bg-[#1A8781] text-white">
              <tr>
                <th className="px-3 py-3 font-semibold">Cost Component</th>
                <th className="px-3 py-3 font-semibold">Estimated Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Application Fee</td>
                <td className="px-3 py-2.5 text-gray-600">₹1,000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Testing Charges</td>
                <td className="px-3 py-2.5 text-gray-600">₹5,000 – ₹50,000+</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Inspection Fee</td>
                <td className="px-3 py-2.5 text-gray-600">₹7,000+</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">License Fee</td>
                <td className="px-3 py-2.5 text-gray-600">₹1,000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700">Marking Fee</td>
                <td className="px-3 py-2.5 text-gray-600">Variable</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">
                  Total Estimated Cost
                </td>
                <td className="px-3 py-2.5 text-gray-600">
                  ₹50,000 – ₹1,50,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Cookware, Utensils and Cans QCO 2026 is a major regulatory step
          towards ensuring food safety, product quality, and consumer protection
          in India. By making BIS certification and ISI marking mandatory, the
          government aims to eliminate substandard products and promote
          standardized manufacturing practices.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, this QCO presents both compliance
          challenges and growth opportunities. Businesses that adapt quickly and
          obtain BIS certification will gain a strong competitive advantage in
          the market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs – Cookware QCO 2026
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the Cookware QCO 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Cookware, Utensils and Cans for Foods and Beverages (Quality
          Control) Order, 2026 is a government regulation that mandates BIS
          certification and ISI marking for specific food-contact products to
          ensure safety and quality standards in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Is BIS certification mandatory under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, BIS certification is mandatory. All specified products must comply
          with Indian Standards and carry the ISI mark before being sold in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Which products are covered under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The QCO covers stainless steel utensils, stainless steel sinks for
          domestic use, and three-piece round open top metal cans used for food
          and beverages.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What are the implementation dates?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Implementation starts from:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>1 October 2025 (large enterprises)</li>
          <li>1 January 2026 (small enterprises)</li>
          <li>1 April 2026 (micro enterprises)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Are export products covered under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No, products manufactured in India exclusively for export are exempted
          from this QCO.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Can existing stock be sold after implementation?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, existing stock can be sold for up to 6 months after
          implementation, provided a declaration is submitted to BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Is BIS certification required for imported products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, importers must ensure that products comply with Indian Standards
          and are BIS certified before importing into India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. What happens if a business does not comply?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance can result in penalties, product seizure, and legal
          action under the BIS Act.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. Who enforces this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is responsible for certification
          and enforcement.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. Are R&amp;D imports allowed?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, up to 200 units per year can be imported for R&amp;D purposes, but
          they cannot be sold commercially.
        </p>

        <ServiceAuthorEng />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/1775115401067.pdf"
          title="Cookware, Utensils and Cans for Foods and Beverages (Quality Control) Order, 2026 PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
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
