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

const BISNotificationonRevisedStandards = () => {
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

export default BISNotificationonRevisedStandards;

const MetaTags = () => {
  const title =
    "Latest BIS Notification for LED Luminaires 2026 | IS 10322 Revised Standards Guide";
  const ogTitle =
    "Latest BIS Notification for LED Luminaires 2026 | IS 10322 Revised Standards Guide";
  const twitterTitle =
    "Latest BIS Notification for LED Luminaires 2026 | IS 10322 Revised Standards Guide";
  const metaDescription =
    "BIS has revised LED luminaire standards to IS 10322:2026. Check compliance deadline, guidelines, and certification process.";
  const ogDescription =
    "BIS has revised LED luminaire standards to IS 10322:2026. Check compliance deadline, guidelines, and certification process.";
  const twitterDescription =
    "BIS has revised LED luminaire standards to IS 10322:2026. Check compliance deadline, guidelines, and certification process.";
  const metaKeywords =
    "LED luminaires BIS, BIS registration LED lights, CRO scheme India, BIS compliance LED, BIS certification for LED luminaires";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-for-led-luminaires-2026";
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
                    BIS Notification on Revised Standards for LED Luminaires
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
          BIS Notification on Revised Standards for LED Luminaires - IS
          10322:2026
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) has officially issued a
          notification regarding the revision of standards for LED luminaires
          under the Compulsory Registration Scheme (CRS). As per the latest
          update dated 20 March 2026, the existing standard IS 10322 (Part
          1):2014 has been revised and replaced with IS 10322 (Part 1):2026.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This update significantly impacts manufacturers, importers, and
          businesses involved in LED lighting products in India. Compliance
          with the revised standard is mandatory within the specified timeline
          to continue operating under BIS certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Key Highlights of BIS License for LED Luminaire
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Revised standard: IS 10322 (Part 1):2026</li>
          <li>Applicable under: Compulsory Registration Order (CRO)</li>
          <li>Affected products: LED luminaires (multiple categories)</li>
          <li>Last date for compliance: 02 August 2026</li>
          <li>Immediate implementation of guidelines</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to comply within the deadline may result in cancellation of
          BIS license or removal of products from scope.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          List of Products Covered Under Revised BIS Standards
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The following LED lighting products are covered under the revised BIS
          standards:
        </p>
        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Fixed General Purpose LED Luminaires
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 1):2012</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 1):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Recessed LED Luminaires
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 2):2012</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 2):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. LED Luminaires for Road and Street Lighting
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 3):2012</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 3):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. LED Flood Lights
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 5):2013</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 5):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. LED Hand Lamps
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 6):2013</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 6):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. LED Lighting Chains
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 7):2017</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 7):2026</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. LED Luminaires for Emergency Lighting
            </h3>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Old Standard: IS 10322 (Part 5/Sec 8):2013</li>
              <li>Revised Standard: IS 10322 (Part 5/Sec 8):2026</li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Guidelines for Existing BIS License Holders
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers already holding a BIS registration certificate must
          follow these steps:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Implement IS 10322:2026 before the deadline</li>
          <li>Submit test reports from BIS-recognized laboratories</li>
          <li>Ensure all models comply with revised standards</li>
          <li>Provide undertaking for remaining product variants</li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Guidelines for New BIS Applicants
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          If you are applying for BIS certification for LED lights, here&apos;s
          what you need to know:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Applications submitted before deadline can use old or revised
            standard
          </li>
          <li>Mandatory declaration required for future compliance</li>
          <li>
            After 02 August 2026, only revised standard (IS 10322:2026) will be
            accepted
          </li>
        </ul>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          How to Get BIS Certification for LED Luminaires
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          To comply with IS 10322:2026, manufacturers must:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identify applicable product category</li>
          <li>Test products in BIS-approved labs</li>
          <li>Prepare technical documents</li>
          <li>Submit BIS registration application</li>
          <li>Obtain BIS certificate</li>
          <li>Ensure ongoing compliance</li>
        </ol>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The revision of IS 10322:2026 for LED luminaires marks a significant
          step toward improving electrical safety, performance, and global
          alignment of lighting products in India.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and importers must urgently upgrade their compliance
          strategy to meet BIS requirements before 02 August 2026. Early action
          will help avoid regulatory risks and ensure uninterrupted business
          operations.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions - BIS Certification for LED Luminaires (IS
          10322:2026)
        </h2>
        <div className="space-y-4 text-gray-600 text-base font-geist mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              1. What is BIS certification for LED luminaires?
            </h3>
            <p>
              BIS certification for LED luminaires is a mandatory requirement
              under the Compulsory Registration Scheme (CRS) where manufacturers
              must obtain a BIS certificate to sell LED lighting products in
              India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              2. What is the revised BIS standard for LED lights?
            </h3>
            <p>
              The revised BIS standard for LED luminaires is IS 10322 (Part
              1):2026, which replaces the earlier IS 10322:2014.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              3. What is the last date to comply with IS 10322:2026?
            </h3>
            <p>
              The last date for compliance with the revised BIS standard IS
              10322:2026 is 02 August 2026.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              4. Is BIS registration mandatory for LED luminaires?
            </h3>
            <p>
              Yes, BIS registration is mandatory for LED luminaires under the
              BIS CRS scheme.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              5. What happens if BIS compliance is not completed before the
              deadline?
            </h3>
            <p>
              The BIS license may be cancelled, or the product may be removed
              from the BIS certification scope.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              6. Do existing BIS license holders need to upgrade to IS
              10322:2026?
            </h3>
            <p>
              Yes, existing BIS license holders must upgrade to IS 10322:2026
              by submitting new test reports and ensuring full compliance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              7. Can new applicants apply under the old BIS standard?
            </h3>
            <p>
              New applicants can apply under the old standard only until 02
              August 2026 and must provide a declaration to transition.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              8. What are the key changes in BIS standard IS 10322:2026?
            </h3>
            <p>
              Key changes include IPX9 protection, EMF safety requirements, PELV
              systems, updated marking requirements, and enhanced testing
              criteria.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              9. How to get BIS certification for LED luminaires in India?
            </h3>
            <p>
              Manufacturers must test products in BIS-approved labs, submit
              documents, apply for BIS registration, and meet IS 10322:2026
              requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-1">
              10. Why is BIS certification important for LED products?
            </h3>
            <p>
              BIS certification ensures product safety, quality, and compliance
              with Indian regulations for legal sale in the market.
            </p>
          </div>
        </div>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/BISNotificationRevisedStandards.pdf"
          title="BIS Notification Revised Standards PDF"
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
