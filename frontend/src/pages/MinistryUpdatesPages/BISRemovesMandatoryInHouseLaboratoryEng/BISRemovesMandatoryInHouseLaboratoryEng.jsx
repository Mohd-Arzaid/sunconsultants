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
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const BISRemovesMandatoryInHouseLaboratoryEng = () => {
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

export default BISRemovesMandatoryInHouseLaboratoryEng;

const MetaTags = () => {
  const title =
    "BIS Removes Mandatory In-House Laboratory Requirement for Product Certification";
  const ogTitle =
    "BIS Notification: In-House Lab No Longer Mandatory for BIS Certification";
  const twitterTitle =
    "BIS Notification: In-House Lab No Longer Mandatory for BIS Certification";
  const metaDescription =
    "BIS has officially removed the mandatory in-house laboratory requirement for most products under BIS certification. Manufacturers can now use external BIS-recognised or ISO 17025 accredited labs.";
  const ogDescription =
    "The Bureau of Indian Standards (BIS) has relaxed the in-house laboratory requirement for BIS certification. Manufacturers can now opt for shared, cluster-based, or external accredited labs, reducing compliance costs and improving ease of doing business";
  const twitterDescription =
    "The Bureau of Indian Standards (BIS) has relaxed the in-house laboratory requirement for BIS certification. Manufacturers can now opt for shared, cluster-based, or external accredited labs, reducing compliance costs and improving ease of doing business";
  const metaKeywords =
    "BIS certification, BIS in-house laboratory requirement, BIS notification, BIS licence update, BIS product certification India";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-in-house-lab-requirement";
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
                    BIS Removes Mandatory In-House Laboratory Requirement
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
          BIS Removes Mandatory In-House Laboratory Requirement for Manufacturers
        </h1>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Major Compliance Relief for BIS Certification | Latest BIS Update
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          In a significant move aimed at improving ease of doing business in India, the Bureau of Indian Standards (BIS) has officially removed the mandatory requirement for manufacturers to maintain an in-house testing laboratory for operating BIS product certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This change, announced through an official circular dated 16 December 2025, is expected to reduce compliance costs, simplify certification processes, and benefit MSMEs and new manufacturers across India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What Has Changed in BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Earlier, manufacturers were generally expected to set up and maintain an in-house laboratory to comply with BIS certification requirements. With the new clarification:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>In-house laboratories are no longer compulsory for most products</li>
          <li>Manufacturers can choose flexible and cost-effective testing alternatives</li>
          <li>BIS has allowed greater freedom in defining Quality Assurance Plans (QAPs)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This marks a shift from infrastructure-based compliance to outcome-based quality assurance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Alternatives to In-House Testing for BIS License
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers can now meet testing requirements through:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Shared testing facilities</li>
          <li>Cluster-based common laboratories</li>
          <li>Outsourced testing to:
            <ul className="list-circle ml-6 mt-2 space-y-1">
              <li>BIS recognised / empanelled laboratories</li>
              <li>Any ISO/IEC 17025 accredited laboratory</li>
            </ul>
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This flexibility is particularly beneficial for startups, MSMEs, and manufacturers operating in industrial clusters.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Flexibility in Quality Assurance Plans (QAP)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS has clarified that the Scheme of Inspection and Testing (SIT) mentioned in BIS product manuals is recommendatory, not mandatory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers are now free to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Design their own Quality Assurance Plan</li>
          <li>Define inspection, testing frequency, and control mechanisms</li>
          <li>Ensure product compliance with the relevant Indian Standard through internal systems</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This allows manufacturers to align BIS compliance with their actual production realities.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Need Expert Help with BIS Compliance?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Misinterpreting this notification may lead to non-compliance or licence delays.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Our BIS experts help manufacturers:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interpret BIS notifications correctly</li>
          <li>Identify applicable testing routes</li>
          <li>Prepare QAP documentation</li>
          <li>Obtain or renew BIS licences smoothly</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Is an in-house laboratory still mandatory for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              No. As per the latest circular issued by the Bureau of Indian Standards (BIS) on 16 December 2025, maintaining an in-house laboratory is no longer mandatory for most products under BIS product certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Why did BIS remove the in-house laboratory requirement?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              BIS removed the mandatory in-house lab requirement to reduce compliance costs, improve ease of doing business, and support MSMEs and startup manufacturers while maintaining product quality through alternative testing mechanisms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What testing options can manufacturers use instead of an in-house lab?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers can use:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-gray-600 text-base font-geist">
              <li>Shared testing facilities</li>
              <li>Cluster-based common laboratories</li>
              <li>BIS recognised or empanelled laboratories</li>
              <li>Any laboratory accredited as per ISO/IEC 17025</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can BIS testing be outsourced to private laboratories?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Yes. BIS testing can be outsourced to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-600 text-base font-geist">
              <li>BIS-recognised laboratories, or</li>
              <li>Any ISO/IEC 17025 accredited laboratory</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mt-2">
              as permitted under the revised guidelines.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Is the Scheme of Inspection and Testing (SIT) mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              No. BIS has clarified that the Scheme of Inspection and Testing (SIT) mentioned in product manuals is recommendatory in nature. Manufacturers are free to declare and follow their own Quality Assurance Plan (QAP).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What is a Quality Assurance Plan (QAP) under BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              A Quality Assurance Plan (QAP) is a documented system defined by the manufacturer outlining inspection, testing, controls, and corrective actions to ensure that products consistently comply with the applicable Indian Standard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Is this notification applicable to existing BIS licence holders?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Yes. This notification applies to both existing BIS licence holders and new applicants, provided their product category is not excluded.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Will BIS still conduct factory inspections?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Yes. BIS will continue to conduct factory inspections, surveillance audits, and sample testing to ensure continued compliance with Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Can this change speed up BIS certification approvals?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Yes. By removing the need to set up an in-house lab, manufacturers can reduce approval timelines, lower infrastructure costs, and proceed faster with BIS certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Is professional consultation recommended after this update?
            </h3>
            <p className="text-gray-600 text-base font-geist">
              Yes. Each product category has specific certification rules. Professional BIS guidance helps avoid misinterpretation, non-compliance, or licence suspension.
            </p>
          </div>
        </div>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/In-House-Lab-Circular-Dec-2025.pdf"
          title="BIS In-House Laboratory Circular December 2025 PDF"
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
