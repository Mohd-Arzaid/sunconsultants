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
  "https://bis-certifications.com/all-india-first/bis-license-for-polyester-fibre-filled-pillow-is-18930-2024";
const PAGE_IMAGE_SRC =
  "/IndiaNo1Img/BISLicenseofPolyesterFibreFilledPillow.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofpolyesterfibrefilledpillow.webp";
const PDF_SRC = "/pdf/IS18930AIF.pdf";

const PAGE_TITLE =
  "All India First BIS License for Polyester Fibre Filled Pillow under IS 18930:2024";
const META_DESCRIPTION =
  "Get complete information about BIS Certification for Polyester Fibre Filled Pillow under IS 18930:2024. Learn about ISI Mark requirements, Indian Standards, scope, compliance, and the All India First BIS License granted for Polyester Fibre Filled Pillow in India.";
const META_KEYWORDS =
  "All India First License, Polyester Fibre Filled Pillow Certification, BIS Certification for Polyester Fibre Filled Pillow";

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
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
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
      name: "Who received the All India First BIS License for Polyester Fibre Filled Pillow under IS 18930:2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The All India First BIS License for Polyester Fibre Filled Pillow under IS 18930:2024 was granted to M/s. Alok Industries Limited with BIS Licence Number (CM/L) 7100155803",
      },
    },
    {
      "@type": "Question",
      name: "What is IS 18930:2024?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IS 18930:2024 is the applicable Indian Standard developed for Polyester Fibre Filled Pillow products, providing a framework for quality requirements and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Why is BIS Certification important for Polyester Fibre Filled Pillow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification for Polyester Fibre Filled Pillow helps ensure quality consistency, consumer confidence, regulatory compliance, and adherence to recognized Indian standards.",
      },
    },
    {
      "@type": "Question",
      name: "What does the ISI Mark indicate on a Polyester Fibre Filled Pillow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ISI Mark for Polyester Fibre Filled Pillow indicates that the product conforms to the relevant BIS requirements and has been certified under the applicable Indian Standard.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of receiving the First BIS License in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Receiving the First BIS License in India under a newly introduced standard demonstrates industry leadership, commitment to quality, and early adoption of regulatory compliance requirements.",
      },
    },
  ],
};

const AllIndiaFirstBISLicenseforPolyesterFibreFilledPillow = () => {
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

export default AllIndiaFirstBISLicenseforPolyesterFibreFilledPillow;

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
                    All India First BIS License for Polyester Fibre Filled
                    Pillow
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
          The granting of the All India First  <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS License
          </Link>{" "} for Polyester Fibre
          Filled Pillow under IS 18930:2024 marks an important milestone in
          India&apos;s quality assurance and standardization ecosystem. The
          Bureau of Indian Standards (BIS), the national standards body of
          India, plays a crucial role in ensuring that products available in the
          market meet prescribed quality, safety, and performance requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In a significant development, M/s. Alok Industries Limited has been
          awarded the All India First{" "}
         
            BIS License
       
          for Polyester Fibre Filled Pillow under IS 18930:2024. The company has
          been granted BIS Licence
          Number (CM/L): 7100155803, making it the first organization in India
          to achieve BIS certification for this product category under the newly
          established Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement demonstrates the organization&apos;s commitment to
          quality, compliance, and consumer confidence while setting a benchmark
          for the industry. The certification also highlights the growing
          importance of standardization in the home furnishing and bedding
          sector.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Significance of the All India First BIS License
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Receiving the All India First BIS License for Polyester Fibre Filled
          Pillow is a noteworthy accomplishment. Being the first license holder
          under a newly introduced Indian Standard reflects a company&apos;s
          proactive approach toward regulatory compliance and quality
          excellence.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards Certification process involves thorough
          evaluation, testing, and verification before a license is granted.
          Therefore, obtaining the first certification under a new standard
          demonstrates readiness to align with evolving quality requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The recognition awarded to M/s. Alok Industries Limited establishes
          industry leadership and showcases its commitment to producing quality
          products that comply with Indian standards. Such achievements often
          encourage other manufacturers to follow standardized production
          practices, ultimately benefiting consumers and the market as a whole.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The issuance of the first BIS license also signifies the beginning of
          a structured compliance framework for manufacturers operating within
          this product segment.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Polyester Fibre Filled Pillow
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Polyester Fibre Filled Pillow serves as an
          assurance that the product conforms to the requirements specified
          under IS 18930:2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification process conducted by BIS evaluates multiple aspects
          of manufacturing, quality control, testing procedures, and compliance
          systems. Once a manufacturer successfully fulfills all prescribed
          requirements, a BIS licence is granted.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For consumers, a BIS-certified product provides confidence regarding
          quality and reliability. For manufacturers, obtaining a BIS License
          for Polyester Fibre Filled Pillow enhances market credibility and
          demonstrates adherence to nationally recognized standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As regulatory awareness increases across industries, BIS certification
          is becoming an important factor in establishing consumer trust and
          strengthening brand reputation.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 18930:2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product is IS 18930:2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard has been developed to establish quality requirements and
          performance benchmarks for Polyester Fibre Filled Pillow products
          manufactured and supplied in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indian Standards are formulated through a structured process involving
          technical experts, industry stakeholders, testing laboratories, and
          regulatory authorities. Their objective is to ensure consistency,
          quality, safety, and reliability across product categories.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of IS 18930:2024 provides manufacturers with a
          clear compliance framework while helping consumers identify products
          that meet recognized quality requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Industries Using Polyester Fibre Filled Pillow
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Polyester Fibre Filled Pillows are widely used across multiple sectors
          and applications due to their comfort, durability, and versatility.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Some major industries and sectors utilizing these products include:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Residential Housing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Households across India use polyester fibre filled pillows as part of
          everyday bedding and home furnishing requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Hospitality Industry
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hotels, resorts, guest houses, and serviced apartments rely heavily on
          quality bedding products to enhance customer comfort.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Healthcare Facilities
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hospitals, nursing homes, and healthcare institutions use pillows as
          essential components of patient care environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Institutional Accommodation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Hostels, dormitories, educational institutions, and training centers
          frequently procure bedding products in large quantities.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Home Furnishing Sector
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The broader home furnishing industry incorporates polyester fibre
          filled pillows into comprehensive bedding and comfort solutions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As demand for quality-certified products continues to grow,
          BIS-certified pillows are expected to gain greater market preference
          among institutional buyers and individual consumers alike.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Polyester Fibre
          Filled Pillow under IS 18930:2024 represents a significant milestone
          for both the manufacturer and the industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By awarding BIS Licence Number 7100155803 to M/s. Alok Industries
          Limited, the Bureau of Indian Standards has recognized the
          company&apos;s compliance with the requirements established under the
          newly introduced standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement reflects a commitment to quality, regulatory
          compliance, and consumer confidence while setting an example for other
          manufacturers operating within the sector.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As BIS certification continues to play an increasingly important role
          in India&apos;s quality infrastructure, milestones such as the First
          BIS License in India contribute to stronger standardization practices,
          improved product quality, and enhanced trust among consumers and
          businesses alike.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Who received the All India First BIS License for Polyester
              Fibre Filled Pillow under IS 18930:2024?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The All India First BIS License for Polyester Fibre Filled Pillow
              under IS 18930:2024 was granted to M/s. Alok Industries Limited
              with BIS Licence Number (CM/L) 7100155803.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is IS 18930:2024?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 18930:2024 is the applicable Indian Standard developed for
              Polyester Fibre Filled Pillow products, providing a framework for
              quality requirements and compliance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Why is BIS Certification important for Polyester Fibre Filled
              Pillow?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification for Polyester Fibre Filled Pillow helps ensure
              quality consistency, consumer confidence, regulatory compliance,
              and adherence to recognized Indian standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What does the ISI Mark indicate on a Polyester Fibre Filled
              Pillow?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The ISI Mark for Polyester Fibre Filled Pillow indicates that the
              product conforms to the relevant BIS requirements and has been
              certified under the applicable Indian Standard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What is the significance of receiving the First BIS License in
              India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Receiving the First BIS License in India under a newly introduced
              standard demonstrates industry leadership, commitment to quality,
              and early adoption of regulatory compliance requirements.
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
          title="All India First BIS License for Polyester Fibre Filled Pillow under IS 18930:2024 PDF"
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
