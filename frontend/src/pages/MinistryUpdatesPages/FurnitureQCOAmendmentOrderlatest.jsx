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

const FurnitureQCOAmendmentOrderlatest = () => {
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

export default FurnitureQCOAmendmentOrderlatest;

const MetaTags = () => {
  const title =
    "Furniture QCO Amendment Order 2026 – Complete Guide";
  const ogTitle =
    "Furniture QCO 2026 – BIS Certification for Furniture in India";
  const twitterTitle =
    "BIS Certification for Furniture – Furniture QCO 2026 Guide";
  const metaDescription =
    "Understand Furniture QCO 2026 and mandatory BIS certification for furniture in India. Learn ISI mark requirements, exemptions, R&D imports, old stock clearance and export rules. Step-by-step compliance guide for manufacturers and importers.";
  const ogDescription =
    "Complete guide to BIS certification under Furniture Quality Control Order 2026. Learn exemptions, documentation, R&D import rules and approval process.";
  const twitterDescription =
    "Mandatory BIS certification for furniture explained. Check compliance steps, exemptions and approval process in India.";
  const metaKeywords =
    "furniture qco 2026, bis certification for furniture, furniture quality control order, isi mark furniture";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/latest-furniture-qco-2026";
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
                    Furniture QCO Amendment Order 2026 – Complete Guide
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
          Furniture QCO Amendment Order 2026 – Complete Guide
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          On 13 February 2026, the Ministry of Commerce &amp; Industry published Notification S.O. 774(E), the Furniture (Quality Control) Amendment Order, 2026. This amends the original 2025 Furniture QCO to clarify exemptions and compliance rules. Under these regulations, most furniture items (chairs, tables, beds, etc.) now require BIS certification and the ISI mark before sale or import in India. Failure to comply can lead to penalties or shipment delays, so manufacturers and importers must act quickly.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Key Exemptions Introduced
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The 2026 Amendment adds three significant exemptions to the Order:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          R&amp;D Import Exemption
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A manufacturer (with a valid or pending BIS license) may import up to 200 units per year of specified furniture items exclusively for research and development. These units must not be sold commercially; they are intended only for testing. After use, they should be destroyed (scrapped), and the manufacturer must keep detailed, yearly records of these R&amp;D imports and submit them to the government.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Existing Stock Clearance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture goods covered by the Order that were manufactured or imported before the Order&apos;s effective date can still be sold under conditions. Such inventory may be cleared within 12 months of enforcement, provided the manufacturer (BIS-licensed or applicant) submits a self-declaration to BIS about this pre-existing stock. In other words, there is a one-year grace period (until Feb 2027) to sell off old stock without the BIS mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Export-Oriented Import Exemption
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-ISI furniture items (and their components) imported solely for export are exempt from the QCO, subject to paperwork. The importer must furnish a letterhead declaration to the government listing invoice/consignment details and undertake that these goods will not enter the domestic market. The manufacturer must also maintain verifiable records of these imports and the resulting export products.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These updated provisions ease the transition to full compliance, by allowing limited R&amp;D usage, a sell-off period for old inventory, and continued import of export-bound items under strict documentation.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Must Comply and Compliance Steps
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          All manufacturers and importers of the covered furniture categories (work chairs, stools, tables, beds, etc.) must meet the QCO requirements. In practice, they should:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Obtain BIS Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Apply for a BIS license under Scheme I (Schedule II). This involves product testing at BIS-recognized labs and a factory audit. Once approved, products must display the BIS Standard Mark (ISI mark) on labels and packaging.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Use the Correct Standards
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Ensure each product conforms to its applicable Indian Standard (e.g. IS 17631 for work chairs, IS 17632 for stools, etc.). BIS certification will be granted only for products tested against the correct IS code.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Maintain Exemption Records
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If using the R&amp;D or export exemptions, keep detailed logs and declarations as required. For R&amp;D imports, scrap the units after testing and retain records. For exports, keep the government-issued undertaking and shipping documents on file.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          File Declarations for Old Stock
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If you have pre-enforcement stock, prepare and submit the self-declaration to BIS detailing those items, so you can legally sell them within the 12-month window.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Monitor Deadlines
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Remember that 13 Feb 2026 is the enforcement date. The exemption window for existing stock lasts 12 months from then, and the 200-unit R&amp;D limit resets each financial year.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          By following these steps, businesses can align with the amended Order and avoid compliance issues. Companies should also stay updated via the official Gazette or BIS releases for any further changes.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the Furniture (Quality Control) Amendment Order, 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Furniture (Quality Control) Amendment Order, 2026 is a government regulation issued by the Ministry of Commerce &amp; Industry that updates the Furniture QCO 2025. It makes BIS certification mandatory for specified furniture products and introduces exemptions related to R&amp;D imports, old stock clearance, and export-only imports.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Is BIS certification mandatory for furniture in India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Manufacturers and importers must obtain a BIS license and use the ISI mark before selling covered furniture products in India after implementation of the order.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. What types of furniture are covered under Furniture QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Generally covered categories include: Chairs &amp; office chairs, Tables &amp; desks, Beds, Storage furniture, Institutional and domestic furniture.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What is the effective date of Furniture QCO 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The amendment becomes applicable from the date of publication in the Official Gazette (February 2026).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Can manufacturers sell old stock without BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Furniture manufactured or imported before implementation can be sold for up to 12 months, but only after submitting a self-declaration to BIS.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Is there any exemption for research &amp; development (R&amp;D)?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Manufacturers can import up to 200 units per financial year for testing or R&amp;D purposes, provided: Items are not sold commercially; they are scrapped after use; records are maintained and submitted to government authorities.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Are export-only furniture imports exempt from BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Furniture imported only for export does not require BIS certification if: A declaration is submitted to the government; products are not sold in India; proper records are maintained for audit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Do foreign manufacturers need BIS certification for exporting furniture to India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Foreign manufacturers must obtain BIS FMCS certification before exporting regulated furniture products to India.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/FurnitureQCORevised.pdf"
          title="Furniture QCO Amendment Order 2026 – Revised Order PDF"
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
