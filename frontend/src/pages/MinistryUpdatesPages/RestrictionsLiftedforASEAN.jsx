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

const RestrictionsLiftedforASEAN = () => {
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

export default RestrictionsLiftedforASEAN;

const MetaTags = () => {
  const title =
    "BIS Lifts Restrictions for ASEAN & Overseas Manufacturers";
  const ogTitle = "BIS Latest Update: Restrictions Lifted for ASEAN & Foreign Manufacturers";
  const twitterTitle = "BIS Latest Update: Restrictions Lifted for ASEAN & Foreign Manufacturers";
  const metaDescription =
    "BIS Latest Update: restrictions lifted for ASEAN and overseas manufacturers. Pending BIS licenses cleared and new certifications processed faster in India.";
  const ogDescription =
    "The Bureau of Indian Standards has removed country-specific restrictions on ASEAN and overseas manufacturers, enabling faster BIS certification and smoother entry into India.";
  const twitterDescription =
    "The Bureau of Indian Standards has removed country-specific restrictions on ASEAN and overseas manufacturers, enabling faster BIS certification and smoother entry into India.";
  const metaKeywords = "BIS lifted restrictions, BIS license India latest news, BIS update for foreign manufacturers, BIS FMCS scheme";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-certification-update-asean-manufacturers";
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
                    Restrictions Lifted for ASEAN & Overseas Manufacturers
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
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Restrictions Lifted for ASEAN & Overseas Companies
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/ministryUpdatesBlogsImages/BISCertification.jpg"
            title="BIS Update: Restrictions Lifted for ASEAN & Overseas Manufacturers in India"
            alt="BIS lifts product-specific restrictions for ASEAN and overseas manufacturers, enabling faster certification and smoother market entry into India"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Indian regulatory landscape has taken a significant step toward easing global trade. The Bureau of Indian Standards (BIS) has removed earlier product- and country-specific restrictions that were affecting manufacturers from ASEAN nations and other overseas regions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This major BIS update directly benefits exporters, compliance managers, and manufacturers aiming to enter or expand in the Indian market. Applications that were earlier delayed or stalled are now being actively processed, restoring confidence in India&apos;s product certification ecosystem.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What Is the Bureau of Indian Standards (BIS)?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards is India&apos;s national standards authority, operating under the BIS Act. It is responsible for developing Indian Standards and ensuring that products sold in India meet defined safety, quality, and performance benchmarks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is mandatory for hundreds of products across sectors such as electronics, electrical goods, machinery, construction materials, chemicals, consumer products, and industrial equipment. For foreign manufacturers, BIS compliance is a legal prerequisite to export regulated products into India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What Restrictions Were Previously Imposed?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          In recent years, BIS had imposed additional scrutiny and operational restrictions on certain overseas manufacturers, particularly from select ASEAN and non-ASEAN countries. These measures were not blanket bans but resulted in practical challenges such as:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Slower processing of BIS license applications</li>
          <li>Delays in factory inspections and audits</li>
          <li>Pending applications remaining on hold for extended periods</li>
          <li>Limited acceptance of new applications under FMCS and CRS</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Countries such as Vietnam, Thailand, Indonesia, Turkey, and others were disproportionately impacted, creating uncertainty for exporters targeting India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Latest BIS Update – Restrictions Lifted for ASEAN & Overseas Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          As per the latest Bureau of Indian Standards update, these country-specific limitations have now been removed. BIS is processing applications from overseas manufacturers in a normal, streamlined manner.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Key highlights of the BIS lifted restrictions include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Removal of informal country-based barriers</li>
          <li>Resumption of routine factory audits and inspections</li>
          <li>Clearance of long-pending BIS license applications</li>
          <li>Acceptance of new applications across multiple product categories</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This decision aligns with India&apos;s broader objective of facilitating ease of doing business and supporting compliant international trade.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Impact on Pending BIS License Applications
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          One of the most important outcomes of this BIS update for foreign manufacturers is the clearance of pending applications. Files that were previously under prolonged review are now being actively evaluated by BIS officers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This means:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Faster movement from application to inspection</li>
          <li>Reduced uncertainty for compliance planning</li>
          <li>Improved coordination between BIS, labs, and manufacturers</li>
          <li>Quicker issuance of BIS licenses where compliance is met</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For companies that had paused production or shipments due to certification delays, this update offers immediate relief.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          How to Apply for BIS Certification Now
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          With restrictions lifted, foreign manufacturers can proceed with BIS certification without additional country-related concerns. The general process includes:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identifying the applicable Indian Standard</li>
          <li>Selecting the correct BIS scheme (CRS, FMCS, or ISI Mark)</li>
          <li>Product testing at a BIS-recognized laboratory</li>
          <li>Filing the online BIS application</li>
          <li>Factory inspection (where applicable)</li>
          <li>Grant of BIS license</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Working with experienced BIS consultants helps ensure faster documentation, audit readiness, and regulatory alignment.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion – A Positive Shift for Global Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The latest Bureau of Indian Standards update marks a crucial step toward transparent, predictable, and trade-friendly regulation. By lifting restrictions on ASEAN and overseas manufacturers, BIS has reaffirmed India&apos;s commitment to quality-driven global trade rather than country-based limitations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For exporters, compliance professionals, and Indian importers, this update reduces uncertainty and opens new opportunities for faster market entry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to apply for BIS certification in India or want clarity on CRS, FMCS, or ISI requirements after this update, professional guidance can significantly reduce timelines and compliance risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Contact our BIS compliance experts today for application support, regulatory consultation, and end-to-end certification assistance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          Has BIS officially lifted restrictions on ASEAN manufacturers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS is now processing applications from ASEAN and overseas manufacturers normally, and earlier country-specific limitations have been removed.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          Are pending BIS license applications being cleared?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Pending applications that were earlier delayed are now under active review and clearance, subject to compliance fulfillment.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          Does this update apply to CRS and FMCS schemes?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. The update impacts BIS CRS certification, BIS FMCS scheme, and ISI mark licensing for foreign manufacturers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          Will BIS inspections for foreign factories resume normally?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS factory audits and inspections under FMCS are continuing as per standard procedures.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          Is BIS certification mandatory even after restrictions are lifted?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. The lifting of restrictions does not remove mandatory compliance. BIS certification remains compulsory for notified products.
        </p>

        <ServiceAuthorEng />
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
