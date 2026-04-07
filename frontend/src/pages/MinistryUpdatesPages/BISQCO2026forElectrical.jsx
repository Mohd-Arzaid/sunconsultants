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

const BISQCO2026forElectrical = () => {
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

export default BISQCO2026forElectrical;

const MetaTags = () => {
  const title =
    "Latest QCO update for Electrical Appliances 2026 - IS 302 (Part 1): 2024";
  const ogTitle =
    "Latest QCO update for Electrical Appliances 2026 - IS 302 (Part 1): 2024";
  const twitterTitle =
    "Latest QCO update for Electrical Appliances 2026 - IS 302 (Part 1): 2024";
  const metaDescription =
    "BIS QCO 2026 mandates IS 302 (Part 1): 2024 for electrical appliances in India. Learn BIS certification, ISI mark requirements, implementation dates, product list, exemptions, and compliance process for manufacturers and importers.";
  const ogDescription =
    "BIS QCO 2026 mandates IS 302 (Part 1): 2024 for electrical appliances in India. Learn BIS certification, ISI mark requirements, implementation dates, product list, exemptions, and compliance process for manufacturers and importers.";
  const twitterDescription =
    "BIS QCO 2026 mandates IS 302 (Part 1): 2024 for electrical appliances in India. Learn BIS certification, ISI mark requirements, implementation dates, product list, exemptions, and compliance process for manufacturers and importers.";
  const metaKeywords =
    "BIS QCO 2026, BIS certification electrical appliances, IS 302 standard India, IS 302 Part 1 2024";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-qco-2026-is-302-part-1-2024-electrical-appliances";
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
                    BIS QCO 2026 for Electrical Appliances
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
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          BIS QCO 2026 for Electrical Appliances - IS 302 (Part 1): 2024
          Extended | Complete Guide
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has issued a major regulatory update through
          the Safety of Household, Commercial and Similar Electrical Appliances
          (Quality Control) Order, 2026, introducing mandatory compliance with
          IS 302 (Part 1): 2024.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This new QCO replaces the earlier 2025 order and significantly
          expands the scope of BIS certification for electrical appliances in
          India, making ISI mark certification mandatory for a wide range of
          products.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          If you are a manufacturer, importer, or seller of electrical
          appliances, understanding this QCO is critical for legal compliance
          and market access.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per the official Gazette notification dated 6 April 2026, the
          Ministry of Commerce and Industry has enforced this order under the
          Bureau of Indian Standards Act, 2016.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          This QCO mandates that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            All covered electrical appliances must comply with IS 302 (Part 1):
            2024
          </li>
          <li>Products must bear the ISI mark under BIS certification</li>
          <li>Certification must be obtained under Scheme-I of BIS</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This regulation ensures that electrical appliances meet strict safety,
          performance, and quality standards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is IS 302 (Part 1): 2024?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1): 2024 is the Indian Standard aligned with IEC
          60335-1: 2020, covering:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Safety requirements for electrical appliances</li>
          <li>Protection against electric shock</li>
          <li>Fire hazards and overheating</li>
          <li>Mechanical safety</li>
          <li>Performance and durability</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard is applicable to household, commercial, and similar
          electrical appliances.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Applicability of the BIS QCO
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          According to the notification:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Applies to electrical appliances with up to 250V (single-phase)
          </li>
          <li>
            Applies to up to 480V (other appliances including DC and
            battery-operated)
          </li>
          <li>Covers household appliances</li>
          <li>Covers commercial appliances</li>
          <li>Covers battery-operated and DC appliances</li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Important Implementation Timeline of Latest QCO - IS 302 (Part
          1):2024
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The QCO clearly defines phased implementation:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-gray-300 text-left text-gray-700 font-geist">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">Category</th>
                <th className="border border-gray-300 px-3 py-2">
                  Implementation Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Large Enterprises
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  1 October 2026
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Medium Enterprises
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  1 October 2026
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Small Enterprises
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  1 January 2027
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Micro Enterprises
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  1 April 2027
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-base font-geist mb-4">
          This timeline ensures smooth transition and compliance for MSMEs.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for IS 302 (Part 1): 2024
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          To comply with this QCO, businesses must follow:
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1: Application Filing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Submit BIS application with product details.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2: Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testing in BIS-approved labs for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Performance</li>
          <li>Durability</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3: Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">BIS inspects:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing unit</li>
          <li>Quality control system</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4: Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">After approval:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI mark can be used</li>
          <li>Product can be sold legally</li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration documents</li>
          <li>Manufacturing license</li>
          <li>Test reports</li>
          <li>Product specifications</li>
          <li>Quality control documents</li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          List of Products Covered Under IS 302 (Part 1): 2024
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          Major categories include:
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Household Appliances
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Vacuum cleaners</li>
          <li>Dishwashers</li>
          <li>Food processors</li>
          <li>Electric kettles</li>
          <li>Coffee makers</li>
          <li>Electric heaters</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Kitchen Appliances
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cooking ranges</li>
          <li>Ovens and hobs</li>
          <li>Fryers and grills</li>
          <li>Steam cookers</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Personal Care Appliances
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hair clippers</li>
          <li>Shavers</li>
          <li>Massage devices</li>
          <li>Oral hygiene devices</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Equipment
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Commercial ovens</li>
          <li>Electric grills and fryers</li>
          <li>Kitchen machines</li>
          <li>Dishwashing machines</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Specialized Equipment
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Air cleaners</li>
          <li>Water heaters</li>
          <li>Heating mats</li>
          <li>Sauna equipment</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Battery Operated Appliances
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Battery vacuum cleaners</li>
          <li>Battery shavers</li>
          <li>Battery juicers</li>
          <li>Battery air purifiers</li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS QCO 2026 for Electrical Appliances marks a significant
          regulatory advancement in India&apos;s product safety and quality
          ecosystem. With the implementation and extension of IS 302 (Part 1):
          2024, the government has reinforced its commitment to ensuring that
          all household, commercial, and similar electrical appliances meet
          globally aligned safety standards.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          One of the most important aspects of this notification is the
          extension and continued applicability of IS 302 (Part 1): 2024, which
          is harmonized with IEC 60335-1: 2020. This extension ensures that
          manufacturers and importers now have a clear, updated compliance
          framework focused on electrical safety, fire resistance, performance
          reliability, and consumer protection.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          By extending this standard under QCO 2026, the government has
          replaced the previous 2025 order and expanded coverage to 90+
          categories of electrical appliances, including modern and
          battery-operated devices.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The phased implementation timeline begins from 1 October 2026 for
          large and medium enterprises, followed by 1 January 2027 for small
          enterprises, and 1 April 2027 for micro enterprises. This transition
          period supports MSMEs in obtaining BIS certification, ISI mark
          approval, and product testing compliance.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is mandatory for all applicable products. Without a
          valid BIS license under IS 302 (Part 1): 2024, businesses cannot
          manufacture, import, or sell electrical appliances in the Indian
          market.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          The QCO also includes balanced provisions such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>6-month stock clearance period</li>
          <li>R&amp;D import exemption (up to 200 units annually)</li>
          <li>Export exemptions</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Overall, this extension under BIS QCO 2026 aligns India with
          international safety standards while strengthening domestic
          manufacturing quality. Companies that secure BIS certification and ISI
          marking early can avoid legal risks and build stronger market trust.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs - IS 302 (Part 1): 2024 QCO
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the BIS QCO 2026 for electrical appliances?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS QCO 2026 mandates compulsory BIS certification and ISI marking
          for household, commercial, and similar electrical appliances in India.
          It ensures compliance with IS 302 (Part 1): 2024 for safety, quality,
          and performance standards.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. What is IS 302 (Part 1): 2024?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 302 (Part 1): 2024 is an Indian safety standard aligned with IEC
          60335-1. It specifies general safety requirements for electrical
          appliances, including protection against electric shock, fire hazards,
          and mechanical risks.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Is BIS certification mandatory under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, BIS certification is mandatory. All applicable electrical
          appliances must comply with IS 302 (Part 1): 2024 and carry the ISI
          mark before manufacturing, importing, or selling in India.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What are the implementation dates of this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation starts from 1 October 2026 for large enterprises, 1
          January 2027 for small enterprises, and 1 April 2027 for micro
          enterprises, ensuring a phased compliance approach.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Which products are covered under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The QCO covers over 90 electrical appliances, including kitchen
          appliances, personal care devices, commercial equipment, heating
          devices, and battery-operated appliances used in household and
          commercial applications.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Are battery-operated appliances included in BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, battery-operated and DC-powered appliances are included under this
          QCO, provided they fall within the specified voltage limits and
          product categories.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Is BIS certification required for imported electrical appliances?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, importers must obtain BIS certification before importing
          electrical appliances into India. Non-certified products are not
          allowed to be sold or distributed in the Indian market.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Are export products covered under this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No, products manufactured in India exclusively for export are exempt
          from BIS certification under this QCO.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. What is the stock clearance provision in this QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and importers can sell existing stock manufactured
          before implementation for up to 6 months, provided they declare it to
          BIS as per guidelines.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. What happens if a business does not comply with BIS QCO 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance can lead to penalties, product seizure, and legal
          action under the BIS Act, 2016, making BIS certification essential for
          market entry.
        </p>

        <ServiceAuthorEng />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/newbisextention2026.pdf"
          title="BIS QCO 2026 for Electrical Appliances PDF"
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
