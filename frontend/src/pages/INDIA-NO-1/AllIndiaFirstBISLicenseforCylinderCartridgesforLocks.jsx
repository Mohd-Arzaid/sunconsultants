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
  "https://bis-certifications.com/all-india-first/bis-license-for-cylinder-cartridges-for-locks-is-18841";
const PAGE_IMAGE_SRC =
  "/blogImages/BISLicenseforCylinderCartridgesforLocks.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofcylindercartridgesforlocks.webp";
const PDF_SRC = "/pdf/Circular-on-AIF-18841.pdf";

const PAGE_TITLE =
  "All India First BIS License for Cylinder Cartridges for Locks under IS 18841";
const OG_TITLE =
  "All India first BIS Certificate for Cylinder Cartridges for Locks under IS 18841";
const TWITTER_TITLE =
  "All India first BIS Licence for Cylinder Cartridges for Locks under IS 18841";
const META_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Cylinder Cartridges for Locks under IS 18841. Check requirements , process and documentation of ISI mark license for Cylinder Cartridges for Locks.";
const OG_DESCRIPTION =
  "Get complete information about all India first BIS License for Cylinder Cartridges for Locks under IS 18841. Check requirements , process and documentation of ISI mark license for Cylinder Cartridges for Locks.";
const TWITTER_DESCRIPTION =
  "Get complete information about all India first BIS Certificate for Cylinder Cartridges for Locks under IS 18841. Check requirements , process and documentation of ISI mark license for Cylinder Cartridges for Locks.";
const META_KEYWORDS =
  "All India First BIS License for Cylinder Cartridges for Locks, Cylinder Cartridges for Locks BIS certification, BIS Certification for Cylinder Cartridges for Locks, BIS License for Cylinder Cartridges for Locks, BIS Licence for Cylinder Cartridges for Locks, ISI Mark License for Cylinder Cartridges for Locks , ISI mark certificate for Cylinder Cartridges for Locks";
const SCHEMA_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Cylinder Cartridges for Locks under IS 18841. Check requirements, process and documentation of ISI mark license for Cylinder Cartridges for Locks.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: PAGE_TITLE,
  description: SCHEMA_DESCRIPTION,
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
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description: SCHEMA_DESCRIPTION,
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
      name: "What is the All India First BIS License for Cylinder Cartridges for Locks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is the first BIS licence granted in India under IS 18841 for Cylinder Cartridges for Locks, awarded to DORSET INDUSTRIES PRIVATE LIMITED.",
      },
    },
    {
      "@type": "Question",
      name: "What is IS 18841?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IS 18841 is the Indian Standard applicable to Cylinder Cartridges for Locks and establishes quality requirements for this product category.",
      },
    },
    {
      "@type": "Question",
      name: "Why is BIS Certification important for Cylinder Cartridges for Locks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification helps ensure quality, consistency, reliability, and compliance with recognized Indian Standards.",
      },
    },
    {
      "@type": "Question",
      name: "Who received the first BIS licence under IS 18841?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DORSET INDUSTRIES PRIVATE LIMITED received the first BIS licence under IS 18841 with Licence Number 9512622820.",
      },
    },
  ],
};

const AllIndiaFirstBISLicenseforCylinderCartridgesforLocks = () => {
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

export default AllIndiaFirstBISLicenseforCylinderCartridgesforLocks;

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
      <meta property="og:title" content={OG_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={TWITTER_TITLE} />
      <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
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
                    All India First BIS License for Cylinder Cartridges for
                    Locks
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
          The{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS) continues to strengthen product quality, safety, and consumer
          confidence across India through its certification framework. In a
          significant milestone for the lock and security hardware industry, the
          All India First BIS License for Cylinder Cartridges for Locks under IS
          18841 has been granted to DORSET INDUSTRIES PRIVATE LIMITED under
          Licence Number CM/L 9512622820.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Receiving the first BIS licence under a newly introduced Indian
          Standard is a noteworthy achievement. It reflects an organization&apos;s
          commitment to quality assurance, regulatory compliance, and
          manufacturing excellence. This milestone also demonstrates the
          industry&apos;s readiness to align with evolving quality benchmarks
          established by BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As India continues to promote quality-conscious manufacturing under
          the vision of self-reliance and global competitiveness, such recognitions
          serve as important benchmarks for the entire industry.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Importance of the All India First BIS License
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the First{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS License
          </Link>{" "}
          in India for a product category carries special significance. It
          represents the first successful compliance with all requirements
          prescribed under the relevant Indian Standard and BIS certification
          framework.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For Cylinder Cartridges for Locks, this achievement establishes a
          quality benchmark for manufacturers operating in the locking systems
          and architectural hardware sector.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Key reasons why the first licence is important include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Demonstrates leadership in quality compliance.</li>
          <li>Encourages industry-wide adoption of Indian Standards.</li>
          <li>Enhances trust among buyers, architects, builders, and consumers.</li>
          <li>Promotes standardized manufacturing practices.</li>
          <li>Supports India&apos;s quality infrastructure initiatives.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The recognition of DORSET INDUSTRIES PRIVATE LIMITED as the first
          licensee under IS 18841 highlights the company&apos;s commitment to
          delivering products that meet nationally recognized quality standards.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Cylinder Cartridges for Locks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <Link
            to="/blogs/isi-products/cylinder-cartridges-for-locks-is-18841"
            className="text-blue-600 hover:underline"
          >
            BIS Certification for Cylinder Cartridges for Locks
          </Link>{" "}
          serves as an assurance that products comply with quality requirements
          specified by the Bureau of Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cylinder cartridges form a critical component of modern locking
          systems. Their reliability directly impacts security, durability, and
          overall lock performance. BIS certification helps ensure that
          manufacturers maintain consistent production quality and comply with
          prescribed standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The certification process generally includes:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application submission to BIS.</li>
          <li>Product testing in approved laboratories.</li>
          <li>Factory assessment and verification.</li>
          <li>Evaluation of quality control systems.</li>
          <li>Grant of licence upon successful compliance.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          After obtaining the licence, manufacturers are authorized to use the
          ISI Mark in accordance with BIS guidelines.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification framework benefits both manufacturers and consumers
          by promoting transparency, quality assurance, and market confidence.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 18841
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product category is:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 18841:2024 – Cylinder Cartridges for Locks
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 18841 has been developed to establish a uniform quality framework
          for Cylinder Cartridges for Locks manufactured and supplied within
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The standard aims to promote:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consistent product quality.</li>
          <li>Reliable manufacturing practices.</li>
          <li>Standardized evaluation criteria.</li>
          <li>Improved product performance.</li>
          <li>Greater confidence among stakeholders.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The introduction of this standard reflects the growing importance of
          standardized security hardware within India&apos;s infrastructure and
          construction sectors.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License under IS 18841 marks an
          important step in the implementation and adoption of this newly
          established standard.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of IS 18841
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 18841 primarily relates to Cylinder Cartridges used in
          lock systems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard provides a framework for evaluating and maintaining
          quality requirements relevant to the product category.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Broadly, the standard supports:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product standardization.</li>
          <li>Quality consistency.</li>
          <li>Manufacturing control.</li>
          <li>Inspection and testing requirements.</li>
          <li>Market confidence in certified products.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          By establishing uniform benchmarks, IS 18841 contributes to improving
          quality levels across the lock manufacturing and architectural hardware
          industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS certification under this standard are
          expected to demonstrate conformity with prescribed requirements before
          obtaining the BIS licence.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Industries Using Cylinder Cartridges for Locks
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cylinder Cartridges for Locks are widely used across numerous sectors
          where security and controlled access are essential.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Major industries include:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Residential Construction
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Modern homes increasingly use advanced locking systems that
          incorporate cylinder cartridges for improved security.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Buildings
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Office complexes, shopping centers, and business establishments rely on
          secure lock systems to protect assets and manage access.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hospitality Industry
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hotels, resorts, and serviced apartments utilize locking systems that
          require dependable cylinder mechanisms.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Educational Institutions
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Schools, colleges, and universities use lock systems across classrooms,
          laboratories, and administrative facilities.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Healthcare Facilities
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hospitals and medical centers require secure access management for
          patient safety and operational efficiency.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government Infrastructure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Government offices and public facilities often adopt standardized
          locking systems to ensure security and compliance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Industrial Facilities
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Factories, warehouses, and manufacturing plants depend on secure
          locking solutions to safeguard assets and restricted areas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The widespread use of Cylinder Cartridges for Locks highlights the
          importance of maintaining quality standards throughout the supply
          chain.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Cylinder Cartridges
          for Locks under IS 18841 to DORSET INDUSTRIES PRIVATE LIMITED
          represents a significant milestone in India&apos;s quality assurance
          ecosystem. With Licence Number 9512622820, the company has become the
          first manufacturer in the country to obtain BIS certification under
          this Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement reflects the growing importance of standardization,
          quality compliance, and consumer confidence within the lock and
          security hardware industry. As more manufacturers adopt BIS
          certification, the industry will benefit from improved quality
          benchmarks, enhanced credibility, and stronger market trust.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The continued implementation of Indian Standards such as IS 18841 will
          play a vital role in strengthening India&apos;s manufacturing
          excellence and supporting the country&apos;s vision of quality-led
          growth.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs for Cylinder Cartridges for Locks
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the All India First BIS License for Cylinder Cartridges
              for Locks?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is the first BIS licence granted in India under IS 18841 for
              Cylinder Cartridges for Locks, awarded to DORSET INDUSTRIES PRIVATE
              LIMITED.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is IS 18841?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 18841 is the Indian Standard applicable to Cylinder Cartridges
              for Locks and establishes quality requirements for this product
              category.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Why is BIS Certification important for Cylinder Cartridges for
              Locks?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification helps ensure quality, consistency, reliability,
              and compliance with recognized Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Who received the first BIS licence under IS 18841?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              DORSET INDUSTRIES PRIVATE LIMITED received the first BIS licence
              under IS 18841 with Licence Number 9512622820.
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
              BIS FMCS License
            </a>
          </li>
        </ul>

        <FaqAuthorEng questionNumber={1} />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src={PDF_SRC}
          title="All India First BIS License for Cylinder Cartridges for Locks under IS 18841 PDF"
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
