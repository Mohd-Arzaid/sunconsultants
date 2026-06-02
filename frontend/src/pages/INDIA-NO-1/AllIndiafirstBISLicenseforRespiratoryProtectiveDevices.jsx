import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
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

const CANONICAL_URL =
  "https://bis-certifications.com/all-india-first/bis-license-for-respiratory-protective-devices-is-19089-2025";
const PAGE_IMAGE_SRC = "/IndiaNo1Img/RespiratoryProtectiveDevices.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofrespiratoryprotectivedevices.webp";
const PDF_SRC = "/pdf/IS19089AIF.pdf";

const PAGE_TITLE =
  "All India first BIS License for Respiratory Protective Devices under IS 19089:2025";
const META_DESCRIPTION =
  "Get complete information about BIS Certification for Respiratory Protective Devices under IS 19089:2025. Learn about ISI Mark requirements, Indian Standards, scope, compliance, and the All India First BIS License granted for Respiratory Protective Devices in India.";
const META_KEYWORDS =
  "All India First License, Respiratory Safety Equipment Certification, BIS Certification for Respiratory Protective Devices";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: PAGE_TITLE,
  description: META_DESCRIPTION,
  image: SCHEMA_IMAGE_URL,
  author: {
    "@type": "Person",
    name: "Dhruv Aggarwal",
    url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
  },
  publisher: {
    "@type": "Organization",
    name: "Sun Certifications India",
    logo: {
      "@type": "ImageObject",
      url: "https://bis-certifications.com/company-logo/company-logo.webp",
    },
  },
  datePublished: "2026-05-29",
  dateModified: "2026-05-29",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description: META_DESCRIPTION,
  brand: {
    "@type": "Brand",
    name: "Sun Certifications India",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "58042",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BIS Certification for Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification for Respiratory Protective Devices is a quality certification issued by the Bureau of Indian Standards confirming that the product complies with the requirements of IS 19089:2025.",
      },
    },
    {
      "@type": "Question",
      name: "Which Indian Standard applies to Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The applicable Indian Standard for Respiratory Protective Devices is IS 19089:2025.",
      },
    },
    {
      "@type": "Question",
      name: "Why is BIS Certification important for Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification ensures that Respiratory Protective Devices meet safety, quality, filtration, and performance requirements necessary for effective respiratory protection.",
      },
    },
    {
      "@type": "Question",
      name: "What does the ISI Mark on Respiratory Protective Devices indicate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ISI Mark indicates that the product complies with the applicable Indian Standard and has been evaluated under BIS quality and safety requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is covered under IS 19089:2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IS 19089:2025 covers performance requirements, testing procedures, filtration efficiency, breathing resistance, sealing performance, durability, and safety parameters for Respiratory Protective Devices.",
      },
    },
  ],
};

const AllIndiafirstBISLicenseforRespiratoryProtectiveDevices = () => {
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

export default AllIndiafirstBISLicenseforRespiratoryProtectiveDevices;

const MetaTags = () => {
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={META_DESCRIPTION} />
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={META_DESCRIPTION} />
      <meta name="twitter:image" content={SCHEMA_IMAGE_URL} />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(ratingSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                    <Link to="/all-india-first">India&apos;s NO 1</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    All India First BIS License for Respiratory Protective Devices
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
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          {PAGE_TITLE}
        </h1>

        <div className="mb-6">
          <img
            src={PAGE_IMAGE_SRC}
            title={PAGE_TITLE}
            alt={`${PAGE_TITLE} - BIS Certification`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS), under the Government of India,
          has officially granted the All India First License for Respiratory
          Protective Devices under IS 19089:2025, marking a significant
          milestone in the Indian industrial safety and respiratory protection
          sector. This achievement reflects successful compliance with the
          latest Indian Standard for Respiratory Protective Devices and
          demonstrates adherence to stringent BIS quality, safety, and
          performance requirements. The grant of the{" "}
          <a
            href="https://www.bis.gov.in/whats-new/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            All India First BIS License
          </a>{" "}
          highlights the growing importance of certified respiratory safety
          equipment in India and reinforces the commitment toward manufacturing
          reliable, high-performance, and BIS Approved Respiratory Protective
          Devices for industrial, healthcare, and hazardous working environments.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Respiratory Protective Devices
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory Protective Devices play a critical role in safeguarding
          workers, healthcare professionals, industrial personnel, and emergency
          responders from harmful airborne contaminants, toxic gases, dust
          particles, fumes, aerosols, and infectious agents. With increasing
          awareness regarding occupational safety, industrial hygiene, and
          workplace health standards, the demand for high-quality Respiratory
          Protective Devices has significantly increased across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure product reliability, performance efficiency, and user
          safety, the Bureau of Indian Standards (BIS) has introduced quality
          regulations and compliance requirements for Respiratory Protective
          Devices under the applicable Indian Standard IS 19089:2025. Obtaining
          {" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
          BIS Certificate
          </a>{" "}
           for Respiratory Protective Devices demonstrates that
          the product complies with stringent Indian safety and quality
          benchmarks established for respiratory protection equipment.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Respiratory Protective Devices is an
          important quality assurance mechanism that helps manufacturers
          maintain consistent product performance while enhancing consumer trust
          and market credibility. Products carrying the ISI Mark for
          Respiratory Protective Devices indicate conformity with the
          prescribed Indian Standard for Respiratory Protective Devices and
          confirm that the product has undergone rigorous testing and quality
          evaluation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS Approval for Respiratory Protective Devices
          must ensure compliance with all technical specifications, safety
          requirements, and performance parameters mentioned under IS
          19089:2025. The BIS License of Respiratory Protective Devices is
          especially important for industries where respiratory hazards are
          common, including chemical manufacturing, pharmaceuticals, mining,
          construction, oil &amp; gas, healthcare, metal processing, and
          disaster management sectors.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of the Indian Standard for Respiratory Protective
          Devices also supports the Government of India&apos;s objective of
          promoting safe industrial practices, occupational health protection,
          and standardization in critical safety equipment.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          About Respiratory Protective Devices
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory Protective Devices (RPDs) are specialized safety equipment
          designed to protect users from inhaling hazardous airborne substances
          that may adversely affect respiratory health. These devices are widely
          used in environments where air contamination levels exceed safe
          exposure limits or where oxygen deficiency may pose serious risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory Protective Devices are engineered to filter, purify, or
          supply breathable air depending on the operational requirements and
          hazard conditions. They are commonly utilized across industrial,
          medical, firefighting, chemical handling, laboratory, and emergency
          response applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Major Applications of Respiratory Protective Devices
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Respiratory Protective Devices are extensively used in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemical and petrochemical industries</li>
          <li>Pharmaceutical manufacturing units</li>
          <li>Hospitals and healthcare facilities</li>
          <li>Mining and construction sites</li>
          <li>Cement and metal processing plants</li>
          <li>Firefighting operations</li>
          <li>Disaster response and rescue operations</li>
          <li>Paint and coating industries</li>
          <li>Welding and fabrication sectors</li>
          <li>Hazardous material handling environments</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard for Respiratory Protective Devices
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 19089:2025 – Respiratory Protective Devices
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for Respiratory Protective Devices is
          IS 19089:2025. This standard has been formulated by the Bureau of
          Indian Standards to establish uniform quality, safety, testing, and
          performance requirements for respiratory protection equipment used in
          various industrial and occupational environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The primary objective of IS 19089:2025 is to ensure that Respiratory
          Protective Devices provide reliable protection against hazardous
          airborne contaminants while maintaining user comfort, durability, and
          operational effectiveness.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of the Standard – IS 19089:2025
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 19089:2025 covers the requirements, classification,
          performance criteria, testing methods, and quality evaluation
          parameters applicable to Respiratory Protective Devices intended for
          protection against hazardous airborne contaminants.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard broadly addresses various categories of respiratory
          protection equipment used across industrial, healthcare, and
          emergency-response applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 19089:2025 generally covers:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Respiratory protective equipment designed for industrial safety</li>
          <li>Devices intended to protect against dust, fumes, gases, and aerosols</li>
          <li>Air-filtering respiratory systems</li>
          <li>Breathing protection devices for occupational usage</li>
          <li>Respiratory devices used in hazardous environments</li>
          <li>Protective systems intended for emergency response application</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Respiratory Protective Devices is an essential
          quality assurance requirement that supports industrial safety,
          occupational health protection, and regulatory compliance in India.
          Compliance with IS 19089:2025 ensures that Respiratory Protective
          Devices meet stringent safety, filtration, durability, and performance
          requirements necessary for protecting users against hazardous airborne
          contaminants.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark for Respiratory Protective Devices serves as an important
          indicator of product reliability, safety, and adherence to Indian
          Standards. With growing awareness regarding workplace safety and
          respiratory health, BIS Approved Respiratory Protective Devices are
          becoming increasingly important across multiple industrial and
          healthcare sectors.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First License under IS 19089:2025 further
          highlights the advancement of standardized respiratory safety equipment
          manufacturing in India and reinforces the importance of maintaining
          high-quality safety products for industrial and commercial applications.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What is BIS Certification for Respiratory Protective Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification for Respiratory Protective Devices is a quality
              certification issued by the Bureau of Indian Standards confirming
              that the product complies with the requirements of IS 19089:2025.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Which Indian Standard applies to Respiratory Protective Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The applicable Indian Standard for Respiratory Protective Devices
              is IS 19089:2025.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Why is BIS Certification important for Respiratory Protective Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification ensures that Respiratory Protective Devices meet
              safety, quality, filtration, and performance requirements necessary
              for effective respiratory protection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What does the ISI Mark on Respiratory Protective Devices indicate?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The ISI Mark indicates that the product complies with the
              applicable Indian Standard and has been evaluated under BIS quality
              and safety requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              What is covered under IS 19089:2025?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 19089:2025 covers performance requirements, testing procedures,
              filtration efficiency, breathing resistance, sealing performance,
              durability, and safety parameters for Respiratory Protective
              Devices.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
             ISI Mark License
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
             BIS FMCS Certificate
            </a>
          </li>
        </ul>

        <FaqAuthorEng questionNumber={1} />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src={PDF_SRC}
          title="All India First BIS License for Respiratory Protective Devices under IS 19089:2025 PDF"
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
