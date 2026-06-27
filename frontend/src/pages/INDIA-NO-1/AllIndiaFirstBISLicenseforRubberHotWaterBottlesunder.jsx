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
  "https://bis-certifications.com/all-india-first/bis-license-for-rubber-hot-water-bottles-is-1867-2023";
const PAGE_IMAGE_SRC =
  "/blogImages/AllIndiaFirstBISLicenseofRubberHotWaterBottles.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofrubberhotwaterbottles.webp";
const PDF_SRC = "/pdf/IS-1867-AIF.pdf";

const PAGE_TITLE =
  "All India First BIS License for Rubber Hot Water Bottles under IS 1867:2023";
const META_TITLE =
  "All India first BIS License for Rubber Hot Water Bottles under IS 1867:2023";
const OG_TITLE =
  "All India first BIS Certificate for Rubber Hot Water Bottles under IS 1867:2023";
const TWITTER_TITLE =
  "All India first BIS Licence for Rubber Hot Water Bottles under IS 1867:2023";
const META_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Rubber Hot Water Bottles under IS 1867:2023. Check requirements , process and documentation of ISI mark license for Rubber Hot Water Bottles.";
const OG_DESCRIPTION =
  "Get complete information about all India first BIS License for Rubber Hot Water Bottles under IS 1867:2023. Check requirements , process and documentation of ISI mark license for Rubber Hot Water Bottles.";
const TWITTER_DESCRIPTION =
  "Get complete information about all India first BIS Certificate for Rubber Hot Water Bottles under IS 1867:2023. Check requirements , process and documentation of ISI mark license for Rubber Hot Water Bottles.";
const META_KEYWORDS =
  "All India First BIS License for Rubber Hot Water Bottles, Rubber Hot Water Bottles BIS certification, BIS Certification for Rubber Hot Water Bottles, BIS License for Rubber Hot Water Bottles, BIS Licence for Rubber Hot Water Bottles, ISI Mark License for Rubber Hot Water Bottles , ISI mark certificate for Rubber Hot Water Bottles, IS 1867:2023";
const SCHEMA_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Rubber Hot Water Bottles under IS 1867:2023. Check requirements, process and documentation of ISI mark license for Rubber Hot Water Bottles.";

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
      name: "What is the All India First BIS License for Rubber Hot Water Bottles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The All India First BIS License for Rubber Hot Water Bottles refers to the first BIS certification granted under IS 1867:2023 to M/s. Duckback (India) Limited.",
      },
    },
    {
      "@type": "Question",
      name: "What is IS 1867:2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IS 1867:2023 is the Indian Standard applicable to Rubber Hot Water Bottles and provides quality requirements for this product category.",
      },
    },
    {
      "@type": "Question",
      name: "Why is BIS Certification important for Rubber Hot Water Bottles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification helps ensure quality, consistency, consumer confidence, and compliance with recognized Indian Standards.",
      },
    },
    {
      "@type": "Question",
      name: "Who received the first BIS licence under IS 1867:2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M/s. Duckback (India) Limited received the All India First BIS License under IS 1867:2023 with Licence Number 5100291488.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of purchasing BIS-certified Rubber Hot Water Bottles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS-certified products provide greater confidence regarding quality, manufacturing consistency, and compliance with established Indian Standards.",
      },
    },
  ],
};

const AllIndiaFirstBISLicenseforRubberHotWaterBottlesunder = () => {
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

export default AllIndiaFirstBISLicenseforRubberHotWaterBottlesunder;

const MetaTags = () => {
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{META_TITLE}</title>
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
                    All India First BIS License for Rubber Hot Water Bottles
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
          (BIS) plays a crucial role in strengthening India&apos;s quality
          infrastructure by establishing standards that promote safety,
          reliability, and consumer confidence. BIS certification serves as an
          assurance that products manufactured and sold in India conform to
          prescribed quality requirements and meet recognized national standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In a significant achievement for the healthcare and rubber products
          industry, the All India First BIS License for Rubber Hot Water Bottles
          under IS 1867:2023 has been granted to M/s. Duckback (India) Limited
          with BIS Licence Number (CM/L) 5100291488.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Receiving the first BIS licence under a newly implemented Indian
          Standard is a remarkable milestone. It reflects a manufacturer&apos;s
          commitment to quality, regulatory compliance, consumer safety, and
          manufacturing excellence. The achievement also highlights the increasing
          importance of standardization in products that are widely used for
          therapeutic, healthcare, and personal comfort applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the first licence under IS 1867:2023 establishes an
          important benchmark for the industry and encourages other manufacturers
          to adopt quality-focused production practices aligned with BIS
          requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Importance of the All India First BIS License for Rubber Hot Water
          Bottles
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The recognition of being awarded the First{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS License
          </Link>{" "}
          in India under a specific Indian Standard is a prestigious
          accomplishment.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          When a company becomes the first licensee under a newly introduced or
          revised standard, it demonstrates its readiness to meet the latest
          quality requirements before others in the market. Such recognition often
          reflects strong quality management systems, manufacturing capabilities,
          testing compliance, and commitment to consumer safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The All India First BIS License for Rubber Hot Water Bottles carries
          significance for several reasons:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Establishes a quality benchmark for the industry.</li>
          <li>Demonstrates compliance with the latest Indian Standard.</li>
          <li>Enhances trust among consumers and healthcare users.</li>
          <li>Promotes the adoption of standardized manufacturing practices.</li>
          <li>Encourages other manufacturers to pursue BIS certification.</li>
          <li>Supports India&apos;s vision of quality-driven manufacturing.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For M/s. Duckback (India) Limited, this achievement reflects leadership
          in product quality and commitment to delivering products that meet
          nationally recognized standards.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Rubber Hot Water Bottles
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <Link
            to="/blogs/isi-products/rubber-hot-water-bottles-is-1867-2023"
            className="text-blue-600 hover:underline"
          >
            BIS Certification for Rubber Hot Water Bottles
          </Link>{" "}
          is a formal recognition that a product complies with the requirements
          specified under the applicable Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rubber Hot Water Bottles are commonly used for providing warmth,
          comfort, and temporary relief from muscular discomfort. Since these
          products come into direct contact with users and are exposed to heated
          water, maintaining quality and safety is extremely important.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS certification process typically involves:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Submission of an application to BIS.</li>
          <li>Product testing as per applicable standards.</li>
          <li>Factory inspection and assessment.</li>
          <li>Verification of quality control measures.</li>
          <li>Evaluation of manufacturing processes.</li>
          <li>Grant of licence upon successful compliance.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once certified, manufacturers are permitted to use the ISI Mark in
          accordance with BIS guidelines, indicating that the product conforms
          to prescribed quality requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Licence for Rubber Hot Water Bottles provides confidence to
          distributors, retailers, institutions, and consumers regarding product
          quality and consistency.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 1867:2023
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 1867:2023 – Rubber Hot Water Bottles
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product category is IS
          1867:2023.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard provides the quality framework applicable to Rubber Hot
          Water Bottles manufactured and supplied in India. It establishes
          uniform requirements that help ensure product consistency, quality
          assurance, and consumer confidence.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of IS 1867:2023 demonstrates BIS&apos;s continued
          efforts to strengthen quality standards across consumer and
          healthcare-related products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Rubber Hot Water
          Bottles under IS 1867:2023 marks an important milestone in the adoption
          of this standard by the industry.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 1867:2023
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 1867:2023 primarily covers Rubber Hot Water Bottles
          intended for use in applications where heat retention and user comfort
          are important.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The standard provides a framework for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product quality requirements.</li>
          <li>Manufacturing consistency.</li>
          <li>Inspection and testing procedures.</li>
          <li>Quality control measures.</li>
          <li>Compliance evaluation.</li>
          <li>Standardized production practices.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rather than focusing on individual product features, the standard aims
          to establish a uniform quality benchmark for manufacturers operating
          within this product category.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Through standardization, IS 1867:2023 helps improve consumer confidence
          while encouraging industry-wide quality enhancement.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS certification under this standard are required
          to demonstrate conformity with prescribed requirements before being
          granted a licence.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Industries Using Rubber Hot Water Bottles
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rubber Hot Water Bottles are widely used across several sectors due to
          their practical utility and comfort applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Healthcare Sector
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hospitals, clinics, physiotherapy centers, and healthcare facilities often
          utilize hot water bottles for patient comfort and supportive care.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Home Healthcare
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Many households use Rubber Hot Water Bottles as part of everyday comfort
          and wellness practices.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Wellness and Therapy Centers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Spa facilities, wellness clinics, and therapeutic centers frequently use
          hot water bottles as supportive comfort products.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Elderly Care Facilities
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Care homes and assisted living facilities often use such products to
          improve comfort and warmth for residents.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Rehabilitation Centers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Rehabilitation and physiotherapy centers may use hot water bottles as
          part of supportive patient care programs.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Retail Industry
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Rubber Hot Water Bottles are widely distributed through pharmacies,
          healthcare stores, supermarkets, and online retail channels.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The widespread use of these products highlights the importance of
          maintaining consistent quality standards through BIS certification.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Rubber Hot Water
          Bottles under IS 1867:2023 to M/s. Duckback (India) Limited with
          Licence Number 5100291488 represents a significant milestone for the
          Indian rubber products and healthcare support industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement demonstrates the growing emphasis on quality,
          standardization, consumer safety, and manufacturing excellence within
          India. It also reflects the important role played by BIS in
          establishing trusted quality benchmarks across industries.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As more manufacturers pursue BIS Certification for Rubber Hot Water
          Bottles, the industry can expect greater product reliability, improved
          consumer confidence, and stronger adherence to national quality
          standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The adoption of IS 1867:2023 will continue to strengthen India&apos;s
          quality ecosystem and support the country&apos;s vision of globally
          competitive manufacturing.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs for Rubber Hot Water Bottles
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the All India First BIS License for Rubber Hot Water
              Bottles?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The All India First BIS License for Rubber Hot Water Bottles refers
              to the first BIS certification granted under IS 1867:2023 to M/s.
              Duckback (India) Limited.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is IS 1867:2023?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 1867:2023 is the Indian Standard applicable to Rubber Hot Water
              Bottles and provides quality requirements for this product category.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Why is BIS Certification important for Rubber Hot Water
              Bottles?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification helps ensure quality, consistency, consumer
              confidence, and compliance with recognized Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Who received the first BIS licence under IS 1867:2023?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              M/s. Duckback (India) Limited received the All India First BIS
              License under IS 1867:2023 with Licence Number 5100291488.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What are the benefits of purchasing BIS-certified Rubber Hot
              Water Bottles?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS-certified products provide greater confidence regarding quality,
              manufacturing consistency, and compliance with established Indian
              Standards.
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
          title="All India First BIS License for Rubber Hot Water Bottles under IS 1867:2023 PDF"
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
