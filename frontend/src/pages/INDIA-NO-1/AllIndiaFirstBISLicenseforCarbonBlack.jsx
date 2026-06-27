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
  "https://bis-certifications.com/all-india-first/bis-license-carbon-black-17440-2020";
const PAGE_IMAGE_SRC = "/IndiaNo1Img/BISLicenseofCarbonBlack.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/allindiafirstbislicenseofcarbonblack.webp";
const PDF_SRC = "/pdf/IS-17440-AIF.pdf";

const PAGE_TITLE =
  "All India First BIS License for Carbon Black under IS 17440:2020";
const META_DESCRIPTION =
  "Get complete information about all India first BIS Certification for Carbon Black under IS 17440:2020. Check requirements , process and documentation of ISI mark license for Carbon Black.";
const META_KEYWORDS =
  "All India First BIS License for Carbon Black, Carbon Black BIS certification, BIS Certification for Carbon Black, BIS License for Carbon Black, BIS Licence for Carbon Black, ISI Mark License for Carbon Black , ISI mark certificate for Carbon Black, IS 17440:2020";

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
  datePublished: "2026-06-20",
  dateModified: "2026-06-20",
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
      name: "Who received the All India First BIS License for Carbon Black under IS 17440:2020?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The All India First BIS License for Carbon Black under IS 17440:2020 was granted to M/s EPSILON CARBON PVT LTD. with BIS Licence Number CM/L 6800168114.",
      },
    },
    {
      "@type": "Question",
      name: "What is BIS Certification for Carbon Black?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification for Carbon Black is a conformity assessment process conducted by BIS to verify that the product complies with the requirements specified under IS 17440:2020 and is eligible to bear the ISI Mark.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of the First BIS License in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The First BIS License in India signifies that the manufacturer was the first to successfully meet all BIS requirements for the product category and obtain certification under the applicable Indian Standard.",
      },
    },
    {
      "@type": "Question",
      name: "What is IS 17440:2020?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IS 17440:2020 is the Indian Standard applicable to Carbon Black. It establishes the quality and conformity requirements that manufacturers must follow to obtain BIS certification.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the ISI Mark for Carbon Black important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ISI Mark for Carbon Black indicates that the product has been evaluated under the BIS certification system and complies with the requirements of the applicable Indian Standard, helping build confidence among buyers and industry stakeholders.",
      },
    },
  ],
};

const AllIndiaFirstBISLicenseforCarbonBlack = () => {
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

export default AllIndiaFirstBISLicenseforCarbonBlack;

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
                    All India First BIS License for Carbon Black
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
          The Indian manufacturing sector continues to move towards higher
          standards of quality, safety, and consistency through the
          implementation of mandatory quality regulations and certification
          systems. One of the most important quality assurance frameworks in
          India is the certification system administered by the{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards 
          </a>
           {" "}(BIS) . BIS certification
          ensures that products manufactured and supplied in the Indian market
          conform to the prescribed Indian Standards and meet the required
          quality benchmarks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A significant milestone has been achieved in the Carbon Black industry
          with the grant of the All India First BIS License for Carbon Black
          under IS 17440:2020 to M/s EPSILON CARBON PVT LTD. The company
          received BIS Licence Number CM/L 6800168114, making it the first
          manufacturer in India to obtain BIS certification for this product
          under the applicable Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This achievement highlights the manufacturer&apos;s commitment to
          quality, regulatory compliance, and adherence to national standards. It
          also reflects the growing importance of BIS certification in
          strengthening consumer confidence and supporting industrial development
          across India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Significance of the All India First BIS Certificate for Carbon Black
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Receiving the First{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS License
          </Link>{" "}
          in India for a product category is a remarkable accomplishment. It
          demonstrates that the manufacturer has successfully fulfilled all the
          requirements prescribed by BIS and has established a quality
          management system capable of consistently producing products that
          comply with the relevant Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          For Carbon Black manufacturers, obtaining the first BIS license carries
          several advantages:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Recognition as an industry pioneer.</li>
          <li>Demonstration of commitment to quality and compliance.</li>
          <li>Enhanced market credibility and customer trust.</li>
          <li>Competitive advantage in regulated markets.</li>
          <li>
            Improved acceptance among industrial buyers and government
            procurement agencies.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Carbon Black to M/s
          EPSILON CARBON PVT LTD. sets a benchmark for other manufacturers
          seeking compliance with Indian quality standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As India continues to emphasize product quality and standardization,
          early adopters of BIS certification often gain stronger market
          positioning and improved business opportunities.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Carbon Black
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Carbon Black is intended to ensure that the
          product conforms to the quality, performance, and consistency
          requirements specified under the applicable Indian Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification process generally involves:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application submission to BIS.</li>
          <li>Product testing in BIS-recognized laboratories.</li>
          <li>Assessment of manufacturing facilities.</li>
          <li>Verification of quality control systems.</li>
          <li>Grant of BIS License upon successful compliance.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once certified, manufacturers are authorized to use the ISI Mark for
          Carbon Black, indicating conformity with the applicable Indian
          Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The presence of the ISI Mark serves as a visible assurance that the
          product has undergone rigorous evaluation and complies with established
          quality requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, obtaining a BIS License for Carbon Black not only
          supports regulatory compliance but also strengthens their reputation
          in domestic and international markets.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable Indian Standard – IS 17440:2020
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for this certification is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 17440:2020 – Carbon Black</strong>
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This Indian Standard was developed to establish uniform quality
          requirements and evaluation criteria for Carbon Black products supplied
          within the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Indian Standards play a crucial role in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standardizing product quality.</li>
          <li>Improving reliability and consistency.</li>
          <li>Supporting industrial growth.</li>
          <li>Facilitating fair trade practices.</li>
          <li>Enhancing customer confidence.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of IS 17440:2020 helps ensure that manufacturers
          maintain consistent production quality and comply with nationally
          accepted requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By adhering to this standard, manufacturers contribute to the broader
          objective of promoting quality infrastructure and industrial
          excellence in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of IS 17440:2020
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The scope of IS 17440:2020 primarily focuses on establishing
          requirements for Carbon Black products covered under the standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard provides a framework for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quality assessment.</li>
          <li>Product conformity evaluation.</li>
          <li>Testing requirements.</li>
          <li>Manufacturing consistency.</li>
          <li>Compliance verification.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective is to ensure that Carbon Black products supplied in the
          market meet defined quality expectations and can perform reliably in
          their intended industrial applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standards such as IS 17440:2020 support the creation of a structured
          quality ecosystem by ensuring that manufacturers follow uniform
          production and quality control practices.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This contributes to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Better product reliability.</li>
          <li>Reduced quality variations.</li>
          <li>Improved customer satisfaction.</li>
          <li>Increased industrial confidence.</li>
          <li>Strengthened supply chain performance.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers seeking BIS certification under IS 17440:2020 must
          demonstrate compliance with all applicable provisions before the
          grant of a BIS license.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The grant of the All India First BIS License for Carbon Black under IS
          17440:2020 to M/s EPSILON CARBON PVT LTD. marks an important
          milestone in India&apos;s quality assurance landscape.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With BIS Licence Number CM/L 6800168114, the company has become the
          first manufacturer in India to receive BIS certification for Carbon
          Black under the applicable Indian Standard. This achievement reflects a
          strong commitment to quality, regulatory compliance, and industry
          leadership.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As BIS certification continues to play a critical role in promoting
          standardization and consumer confidence, achievements such as this
          encourage greater adoption of quality standards across industries.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of IS 17440:2020 and the growing emphasis on
          Bureau of Indian Standards Certification will continue to support
          India&apos;s vision of manufacturing excellence, product reliability,
          and global competitiveness.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs for BIS Certificate for Carbon Black
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Who received the All India First BIS License for Carbon Black
              under IS 17440:2020?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The All India First BIS License for Carbon Black under IS
              17440:2020 was granted to M/s EPSILON CARBON PVT LTD. with BIS
              Licence Number CM/L 6800168114.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is BIS Certification for Carbon Black?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification for Carbon Black is a conformity assessment
              process conducted by BIS to verify that the product complies with
              the requirements specified under IS 17440:2020 and is eligible to
              bear the ISI Mark.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the significance of the First BIS License in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The First BIS License in India signifies that the manufacturer was
              the first to successfully meet all BIS requirements for the product
              category and obtain certification under the applicable Indian
              Standard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What is IS 17440:2020?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 17440:2020 is the Indian Standard applicable to Carbon Black.
              It establishes the quality and conformity requirements that
              manufacturers must follow to obtain BIS certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Why is the ISI Mark for Carbon Black important?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The ISI Mark for Carbon Black indicates that the product has been
              evaluated under the BIS certification system and complies with the
              requirements of the applicable Indian Standard, helping build
              confidence among buyers and industry stakeholders.
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
          title="All India First BIS License for Carbon Black under IS 17440:2020 PDF"
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
