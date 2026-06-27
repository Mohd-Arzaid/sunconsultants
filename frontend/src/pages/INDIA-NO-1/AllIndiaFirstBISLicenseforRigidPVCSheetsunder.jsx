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
  "https://bis-certifications.com/all-india-first/bis-license-for-rigid-pvc-sheet-is-6307-2023";
const PAGE_IMAGE_SRC = "/blogImages/BISLicenseofRigidPVCSheet.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofrigidpvcsheet.webp";
const PDF_SRC = "/pdf/IS-6307-AIF.pdf";

const PAGE_TITLE =
  "All India First BIS License for Rigid PVC Sheets under IS 6307:2023";
const META_TITLE =
  "All India first BIS License for Rigid PVC Sheet under IS 6307:2023";
const META_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Rigid PVC Sheet under IS 6307:2023. Check requirements , process and documentation of ISI mark license for Rigid PVC Sheet.";
const META_KEYWORDS =
  "All India First BIS License for Rigid PVC Sheet, Rigid PVC Sheet BIS certification, BIS Certification for Rigid PVC Sheet, BIS License for Rigid PVC Sheet, BIS Licence for Rigid PVC Sheet, ISI Mark License for Rigid PVC Sheet , ISI mark certificate for Rigid PVC Sheet, IS 6307:2023";
const SCHEMA_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Rigid PVC Sheet under IS 6307:2023. Check requirements, process and documentation of ISI mark license for Rigid PVC Sheet.";

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
      name: "Who received the All India First BIS License for Rigid PVC Sheets under IS 6307:2023?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first BIS license for Rigid PVC Sheets under IS 6307:2023 was granted to M/s. AVSL INDUSTRIES LIMITED with Licence Number CM/L 8400356212.",
      },
    },
    {
      "@type": "Question",
      name: "What is the applicable Indian Standard for Rigid PVC Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The applicable Indian Standard is IS 6307:2023, under which BIS certification has been granted for Rigid PVC Sheets.",
      },
    },
    {
      "@type": "Question",
      name: "Why is BIS Certification for Rigid PVC Sheets important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification helps ensure quality, consistency, regulatory compliance, and customer confidence while promoting standardized manufacturing practices.",
      },
    },
    {
      "@type": "Question",
      name: "What does the ISI Mark for Rigid PVC Sheets indicate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ISI Mark indicates that the product conforms to the applicable BIS standard and has been manufactured under a valid BIS license.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find detailed information about Rigid PVC Sheets and BIS certification requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can visit the dedicated product page for Rigid PVC Sheets to explore detailed information regarding product specifications, applications, certification requirements, testing procedures, and compliance guidelines.",
      },
    },
  ],
};

const AllIndiaFirstBISLicenseforRigidPVCSheetsunder = () => {
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

export default AllIndiaFirstBISLicenseforRigidPVCSheetsunder;

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
      <meta property="og:title" content={META_TITLE} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={META_TITLE} />
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
                    All India First BIS License for Rigid PVC Sheets
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
          The grant of the All India First BIS License for Rigid PVC Sheets under
          IS 6307:2023 marks a significant milestone for the Indian plastics and
          polymer industry. The{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS), India&apos;s national standards body, has awarded the
          country&apos;s first license for this product category to M/s. AVSL
          INDUSTRIES LIMITED under Licence Number CM/L 8400356212. This
          achievement reflects the company&apos;s commitment to quality,
          compliance, and adherence to Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As India continues to strengthen its quality infrastructure and
          manufacturing ecosystem, BIS certification plays a crucial role in
          ensuring that products available in the market meet prescribed safety
          and quality benchmarks. The issuance of the first BIS license for Rigid
          PVC Sheets under the latest Indian Standard demonstrates the
          industry&apos;s progress toward standardized and quality-assured
          manufacturing practices.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Importance of the All India First BIS License for Rigid PVC Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Receiving the First{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS License
          </Link>{" "}
          in India for any product category is a noteworthy achievement. It
          indicates that the manufacturer has successfully demonstrated
          compliance with all applicable BIS requirements and has become a
          pioneer in adopting the latest Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          In the case of Rigid PVC Sheets, the first BIS license has been
          granted to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>License Holder: M/s. AVSL INDUSTRIES LIMITED</li>
          <li>BIS Licence Number: CM/L 8400356212</li>
          <li>Indian Standard: IS 6307:2023</li>
          <li>Branch Office: Jaipur Branch Office</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Being the first license holder under a newly implemented standard
          reflects strong quality management systems, manufacturing excellence,
          and readiness to align with evolving regulatory requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The recognition also sets a benchmark for other manufacturers seeking
          BIS certification for Rigid PVC Sheets and contributes to raising
          industry-wide quality standards.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Rigid PVC Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <Link
            to="/blogs/isi-products/rigid-pvc-sheet-is-6307-2023"
            className="text-blue-600 hover:underline"
          >
            BIS Certification for Rigid PVC Sheets
          </Link>{" "}
          serves as an assurance that the product conforms to the requirements
          specified under the relevant Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The certification process involves comprehensive evaluation by BIS,
          including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Assessment of manufacturing facilities</li>
          <li>Verification of quality control systems</li>
          <li>Product testing as per applicable standards</li>
          <li>Inspection and compliance review</li>
          <li>Ongoing surveillance after grant of license</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers obtaining BIS certification demonstrate their commitment
          to delivering products that consistently meet established quality
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For buyers, contractors, project developers, industrial users, and
          procurement agencies, the presence of a valid BIS license provides
          confidence regarding product reliability and conformity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark for Rigid PVC Sheets further acts as a visible symbol of
          quality and compliance, helping customers identify products that meet
          Indian regulatory requirements.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 6307:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for this certification is IS 6307:2023.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indian Standards are developed by BIS through a structured process
          involving industry experts, manufacturers, technical committees,
          regulators, and other stakeholders.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of IS 6307:2023 is to establish uniform quality
          requirements for Rigid PVC Sheets manufactured and supplied within the
          Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The introduction of this standard provides a consistent framework that
          manufacturers can follow to ensure quality and reliability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With the grant of the All India First BIS License for Rigid PVC Sheets
          under IS 6307:2023, the implementation of this standard has entered an
          important phase where manufacturers begin aligning their production
          systems with the updated requirements.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of IS 6307:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 6307:2023 broadly covers quality requirements
          applicable to Rigid PVC Sheets and provides a framework for conformity
          assessment under the BIS certification scheme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The standard establishes requirements intended to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Promote product consistency</li>
          <li>Ensure manufacturing quality</li>
          <li>Support reliable performance</li>
          <li>Facilitate standardization across the industry</li>
          <li>Strengthen confidence among users and buyers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          By defining a common quality benchmark, IS 6307:2023 helps
          manufacturers and consumers operate within a transparent and recognized
          quality ecosystem.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          It is important to note that this page focuses on the BIS license
          achievement and industry significance. Readers looking for detailed
          product specifications, technical parameters, testing requirements,
          and compliance criteria can refer to the
       
          
            dedicated product page for Rigid PVC Sheets
          
          .
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Industries Using Rigid PVC Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rigid PVC Sheets are widely used across numerous industrial and
          commercial sectors due to their versatility and suitability for various
          applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Some of the major industries utilizing Rigid PVC Sheets include:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Construction Industry
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Used in building and infrastructure-related applications where durable
          sheet materials are required.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Industrial Manufacturing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Various manufacturing sectors utilize PVC sheets in fabrication and
          industrial processes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Signage and Advertising
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          PVC sheets are commonly employed in display systems, signage, branding,
          and promotional applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Furniture and Interior Applications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The material finds usage in interior design and furniture-related
          manufacturing processes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Packaging and Fabrication
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Many packaging and fabrication industries rely on PVC sheet products
          for specialized requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Electrical and Engineering Sectors
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Rigid PVC Sheets are also utilized in engineering and industrial
          environments where standardized materials are preferred.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As industrial demand continues to grow, the importance of ensuring
          product quality through BIS Certification for Rigid PVC Sheets becomes
          increasingly significant.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Rigid PVC Sheets
          under IS 6307:2023 to M/s. AVSL INDUSTRIES LIMITED represents an
          important development in India&apos;s quality assurance landscape. With
          Licence Number CM/L 8400356212, the company has become the first
          manufacturer in the country to receive BIS certification for this
          product category under the latest Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement highlights the growing importance of quality
          compliance, standardization, and adherence to BIS requirements across
          Indian industries. As more manufacturers adopt the standard, the industry
          can expect improved consistency, enhanced consumer confidence, and
          greater alignment with national quality objectives.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The milestone not only benefits the license holder but also contributes
          to the broader goal of strengthening India&apos;s manufacturing
          ecosystem through recognized quality standards and certification
          practices.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs for Rigid PVC Sheets
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Who received the All India First BIS License for Rigid PVC
              Sheets under IS 6307:2023?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The first BIS license for Rigid PVC Sheets under IS 6307:2023 was
              granted to M/s. AVSL INDUSTRIES LIMITED with Licence Number CM/L
              8400356212.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is the applicable Indian Standard for Rigid PVC Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The applicable Indian Standard is IS 6307:2023, under which BIS
              certification has been granted for Rigid PVC Sheets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Why is BIS Certification for Rigid PVC Sheets important?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification helps ensure quality, consistency, regulatory
              compliance, and customer confidence while promoting standardized
              manufacturing practices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What does the ISI Mark for Rigid PVC Sheets indicate?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The ISI Mark indicates that the product conforms to the applicable
              BIS standard and has been manufactured under a valid BIS license.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Where can I find detailed information about Rigid PVC Sheets
              and BIS certification requirements?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              You can visit the{" "}
              <Link
                to="/blogs/isi-products/rigid-pvc-sheet-is-6307-2023"
                className="text-blue-600 hover:underline"
              >
                dedicated product page for Rigid PVC Sheets
              </Link>{" "}
              to explore detailed information regarding product specifications,
              applications, certification requirements, testing procedures, and
              compliance guidelines.
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
              ISI Mark Certification
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS Certification
            </a>
          </li>
        </ul>

        <FaqAuthorEng questionNumber={1} />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src={PDF_SRC}
          title="All India First BIS License for Rigid PVC Sheets under IS 6307:2023 PDF"
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
