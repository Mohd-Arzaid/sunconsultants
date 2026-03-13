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

const BISCRSMigrationto2023 = () => {
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

export default BISCRSMigrationto2023;

const MetaTags = () => {
  const title =
    "IS/IEC 62368-1:2023 BIS CRS Migration – Latest Notification";
  const ogTitle =
    "BIS CRS Migration to IS/IEC 62368-1:2023 – Latest BIS Notification & Compliance";
  const twitterTitle =
    "BIS CRS Update: Migration to IS/IEC 62368-1:2023";
  const metaDescription =
    "BIS introduces IS/IEC 62368-1:2023 replacing IS 13252 (Part 1):2010 and IS 616:2017 under CRS. Learn products covered, migration process, and the BIS compliance deadline of 01 Nov 2028.";
  const ogDescription =
    "The Government of India has introduced IS/IEC 62368-1:2023 under the BIS CRS scheme. Learn about affected products, migration requirements, and the 2028 compliance deadline.";
  const twitterDescription =
    "Latest BIS notification on CRS migration replacing IS 13252 and IS 616. Understand affected products, compliance rules, and the deadline of 01 November 2028.";
  const metaKeywords =
    "BIS CRS Migration, BIS CRS notification 2026, BIS CRS update, IS IEC 62368-1:2023 BIS";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-crs-migration-is-iec-62368-1-2023";
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS CRS Migration to IS/IEC 62368-1:2023 – Latest BIS
                    Notification
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
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          BIS CRS Migration to IS/IEC 62368-1:2023 – Latest BIS Notification
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) has issued new implementation
          guidelines for migration to IS/IEC 62368-1:2023 under the Electronics
          and Information Technology Goods (Requirement of Compulsory
          Registration) Order, 2021 (CRO). These guidelines, dated 09 March
          2026, follow the MeitY notification of 29 October 2025 and introduce a
          major safety standard transition for electronic and ICT equipment in
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The new standard{" "}
          <strong>
            IS/IEC 62368-1:2023 – Audio/Video, Information and Communication
            Technology Equipment – Safety Requirements
          </strong>{" "}
          will replace the existing standards IS 13252 (Part 1):2010 and IS
          616:2017 for many product categories covered under the BIS Compulsory
          Registration Scheme (CRS). Manufacturers, importers, and brand owners
          must ensure compliance with the new BIS standard before the transition
          deadline to continue selling products in India.
        </p>

     

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is IS/IEC 62368-1:2023?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS/IEC 62368-1:2023 is the latest hazard-based safety standard for
          audio, video, information technology, and communication technology
          equipment. Unlike earlier prescriptive safety standards, this standard
          uses a{" "}
          <strong>hazard-based engineering approach (HBSE)</strong> to address
          safety risks associated with electronic products.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard covers safety requirements for products such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Information technology equipment</li>
          <li>Audio and video devices</li>
          <li>Communication technology equipment</li>
          <li>Consumer electronics</li>
          <li>Power supplies and accessories</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The objective is to improve product safety, harmonize international
          standards, and enhance consumer protection in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS CRS Migration Notification – Key Highlights
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. New Standard Introduced
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has notified{" "}
          <strong>IS/IEC 62368-1:2023</strong> under the BIS CRS scheme. This
          standard supersedes the following BIS standards:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>IS 13252 (Part 1):2010</li>
          <li>IS 616:2017</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Concurrent Running Period
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The government has allowed a transition period until{" "}
          <strong>01 November 2028</strong>. During this period:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Both old standards and the new standard will run simultaneously.</li>
          <li>Manufacturers may obtain BIS registration under either standard.</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          After the transition period ends:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>IS 13252 (Part 1):2010 and IS 616:2017 will be withdrawn.</li>
          <li>All registrations must comply with IS/IEC 62368-1:2023.</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Deadline for Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The final compliance deadline is{" "}
          <strong>01 November 2028</strong>. After this date, products not
          complying with IS/IEC 62368-1:2023 cannot be registered or sold in
          India under CRS.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Products Covered Under the New BIS Standard
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The migration applies to a large number of electronic and ICT
          products under BIS CRS. Major product categories include:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Electronics
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>LED / LCD / Plasma Televisions</li>
          <li>Smart Speakers</li>
          <li>Bluetooth Speakers</li>
          <li>Wireless Headphones &amp; Earphones</li>
          <li>Video Cameras</li>
          <li>Digital Cameras</li>
          <li>Webcams</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IT &amp; Computing Equipment
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Laptops, notebooks, and tablets</li>
          <li>Printers, MFDs, plotters, and scanners</li>
          <li>Automatic Data Processing Machines</li>
          <li>USB external hard drives</li>
          <li>External solid-state storage devices</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Communication &amp; Mobile Devices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Mobile phones</li>
          <li>Wireless keyboards</li>
          <li>Smart watches</li>
          <li>Set top boxes</li>
          <li>Telephone answering machines</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Power &amp; Accessories
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Power adaptors</li>
          <li>SMPS (Switch Mode Power Supplies)</li>
          <li>Power banks</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Security &amp; Surveillance
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>CCTV cameras</li>
          <li>CCTV recorders</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Devices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>POS terminals</li>
          <li>Cash registers</li>
          <li>ATM machines</li>
          <li>Passport readers and smart card readers</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Overall, more than 38 product categories under CRS are impacted by
          this transition.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why This CRS Migration is Important
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The introduction of IS/IEC 62368-1:2023 aligns India with
          international safety standards for electronic and ICT equipment. Key
          benefits include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Improved electrical safety standards</li>
          <li>Harmonization with global IEC regulations</li>
          <li>Better consumer protection</li>
          <li>Simplified safety evaluation framework</li>
          <li>Support for modern electronic technologies</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers exporting products to India must now ensure full
          compliance with the new BIS safety framework.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          How to Obtain BIS CRS Certification under IS/IEC 62368-1:2023
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS CRS registration process includes:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1 – Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted in a BIS-recognized laboratory as per
          IS/IEC 62368-1:2023.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2 – Document Preparation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Required documents include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Test reports</li>
          <li>Product specifications</li>
          <li>Manufacturer details</li>
          <li>Authorization letter</li>
          <li>Trademark documents</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3 – BIS Portal Application
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Submit the application through the BIS CRS online portal.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4 – Registration Approval
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once approved, BIS issues a CRS Registration Number, allowing the
          product to be sold in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS CRS migration to IS/IEC 62368-1:2023 represents a significant
          regulatory update for electronics and ICT equipment in India.
          Manufacturers must prepare for this transition before{" "}
          <strong>01 November 2028</strong>, when the previous standards IS
          13252 (Part 1):2010 and IS 616:2017 will be withdrawn.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Companies should begin upgrading testing, documentation, and
          certification processes early to avoid disruptions in the Indian
          market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQs) – BIS CRS Migration to IS/IEC
          62368-1:2023
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the latest BIS CRS notification regarding IS/IEC
          62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) issued implementation guidelines
          on 09 March 2026 regarding the migration to IS/IEC 62368-1:2023 under
          the Electronics and Information Technology Goods (Requirement of
          Compulsory Registration) Order, 2021. This new safety standard
          replaces IS 13252 (Part 1):2010 and IS 616:2017 for multiple
          electronic and ICT products registered under the BIS Compulsory
          Registration Scheme (CRS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. What is IS/IEC 62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS/IEC 62368-1:2023 is a safety standard for audio, video, information
          technology, and communication technology equipment. It introduces a
          hazard-based safety engineering approach and is designed to replace
          older safety standards previously used under the BIS CRS scheme.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Which BIS standards are being replaced by IS/IEC 62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The new standard IS/IEC 62368-1:2023 replaces the following BIS
          standards:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>IS 13252 (Part 1):2010 – Safety of Information Technology Equipment</li>
          <li>
            IS 616:2017 – Safety of Audio, Video and Similar Electronic Apparatus
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These standards will be gradually withdrawn after the transition
          period.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What is the deadline to implement IS/IEC 62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The last date for concurrent running of the old and new standards is{" "}
          <strong>01 November 2028</strong>. After this date, IS 13252 (Part
          1):2010 and IS 616:2017 will be withdrawn and all BIS CRS
          registrations must comply with IS/IEC 62368-1:2023.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Can manufacturers still apply for BIS CRS registration under the
          old standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, during the transition period manufacturers can still apply under
          IS 13252 (Part 1):2010 and IS 616:2017. However, applicants must
          provide a declaration confirming that they will migrate to IS/IEC
          62368-1:2023 before the deadline of 01 November 2028.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. What products are covered under the new BIS standard IS/IEC
          62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The migration applies to many electronics and IT products including
          laptops and tablets, mobile phones, televisions, Bluetooth speakers,
          smart watches, printers and scanners, CCTV cameras, power banks, USB
          external hard drives, wireless headphones and earphones, and smart
          speakers. More than 38 product categories under the BIS CRS scheme are
          affected by this update.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. What must existing BIS CRS license holders do?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Existing BIS license holders must conduct product testing as per
          IS/IEC 62368-1:2023, submit test reports from a BIS recognized
          laboratory, upload documents through the standard
          revision/amendment/essential requirement option in the BIS portal, and
          provide declarations confirming compliance for series models. Failure
          to complete the migration before the deadline may lead to cancellation
          of the BIS license or deletion of product models from the license
          scope.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Do mobile phones and televisions require additional BIS standards?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Some product categories require compliance with additional
          standards along with IS/IEC 62368-1:2023, including IS 18112:2025 for
          LED/LCD/Plasma televisions, IS 16333 (Part 3):2022 for mobile phones,
          and security requirements for IP-based CCTV cameras. If migration
          affects these standards, updated test reports must also be submitted.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. What happens if a manufacturer does not migrate to the new
          standard?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If manufacturers do not implement IS/IEC 62368-1:2023 before 01
          November 2028, their BIS CRS license may become invalid, BIS may
          cancel the license, and the product may not be allowed to be sold in
          India. Therefore, companies must ensure timely compliance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. How can manufacturers obtain BIS CRS certification under IS/IEC
          62368-1:2023?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          To obtain BIS CRS registration under the new standard, manufacturers
          must get the product tested in a BIS recognized laboratory, prepare
          required documentation and technical files, submit the application on
          the BIS CRS online portal, and receive the CRS registration number
          after approval. This registration is mandatory before selling the
          product in the Indian market.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/1773317652459.pdf"
          title="BIS CRS Migration to IS/IEC 62368-1:2023 – Official BIS Guidelines PDF"
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
