import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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

const blogImageUrl =
  "https://bis-certifications.com/blogImages/BISLicenseforShallowCorrugatedAsbestosCementSheets.webp";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Shallow Corrugated Asbestos Cement Sheets under IS 13008:1990, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/shallow-corrugated-asbestos-cement-sheets-is-13008",
  },
  headline:
    "BIS Certification for Shallow Corrugated Asbestos Cement Sheets – IS 13008:1990",
  description: schemaDescription,
  image: blogImageUrl,
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
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "BIS Certification for Shallow Corrugated Asbestos Cement Sheets – IS 13008:1990",
  image: blogImageUrl,
  description: schemaDescription,
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
      name: "Why is BIS certification important for shallow corrugated asbestos cement sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These sheets are used in roofing where they face weather and load conditions. Certification ensures they maintain structural integrity, resist water leakage, and perform reliably in industrial, agricultural, and residential applications.",
      },
    },
    {
      "@type": "Question",
      name: "What does IS 13008:1990 specify for these sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard defines requirements for dimensions, corrugation profile, strength, and water resistance. It ensures that sheets provide proper drainage, withstand environmental exposure, and maintain durability throughout their service life.",
      },
    },
    {
      "@type": "Question",
      name: "How are these sheets tested for strength during certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samples undergo flexural strength testing where load is applied to check resistance to bending. This ensures the sheets can handle installation stress and external loads without cracking or breaking.",
      },
    },
    {
      "@type": "Question",
      name: "What role does corrugation design play in certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The shallow corrugation pattern enhances load distribution and water drainage. Certification ensures the design is consistent and effective, preventing water accumulation and structural weakness.",
      },
    },
    {
      "@type": "Question",
      name: "Can defective sheets cause leakage problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, improper manufacturing or poor surface quality can lead to cracks or gaps, allowing water penetration. Certification ensures sheets are water-tight and suitable for roofing applications.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification improve durability of these sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified sheets are tested for resistance to environmental factors like rain and sunlight. This ensures long-term performance without deterioration or loss of strength.",
      },
    },
    {
      "@type": "Question",
      name: "Are these sheets suitable for industrial roofing applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, certified sheets are widely used in factories and warehouses due to their durability and ability to withstand environmental stress and load conditions.",
      },
    },
    {
      "@type": "Question",
      name: "What manufacturing defects can lead to rejection in BIS testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Improper fibre distribution, uneven thickness, poor curing, and incorrect corrugation profiles can result in weak sheets that fail strength or water resistance tests.",
      },
    },
    {
      "@type": "Question",
      name: "How does certification ensure proper water drainage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard specifies corrugation dimensions that allow efficient water flow, preventing accumulation and leakage during heavy rainfall.",
      },
    },
    {
      "@type": "Question",
      name: "Is factory inspection necessary for certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, inspectors verify production processes, raw material quality, and curing methods to ensure consistent product quality.",
      },
    },
  ],
};

const BISCertificationforShallowCorrugatedAsbestosCementSheets = () => {
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

export default BISCertificationforShallowCorrugatedAsbestosCementSheets;

const MetaTags = () => {
  const title =
    "BIS Certificate for Shallow Corrugated Asbestos Cement Sheets - IS 13008:1990";
  const ogTitle =
    "BIS Certificate for Shallow Corrugated Asbestos Cement Sheets - IS 13008:1990";
  const twitterTitle =
    "BIS Certificate for Shallow Corrugated Asbestos Cement Sheets - IS 13008:1990";
  const metaDescription =
    "Get BIS Certificate for Shallow Corrugated Asbestos Cement Sheets under IS 13008:1990. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Shallow Corrugated Asbestos Cement Sheets as per IS 13008:1990. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Shallow Corrugated Asbestos Cement Sheets under IS 13008:1990. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Shallow Corrugated Asbestos Cement Sheets, BIS License for Shallow Corrugated Asbestos Cement Sheets, IS 13008:1990, BIS Certification for Shallow Corrugated Asbestos Cement Sheets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/shallow-corrugated-asbestos-cement-sheets-is-13008";
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
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={blogImageUrl} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={blogImageUrl} />
      <link rel="canonical" href={websiteUrl} />
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
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificate for Shallow Corrugated Asbestos Cement Sheets
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
          BIS Certification for Shallow Corrugated Asbestos Cement Sheets – IS
          13008:1990
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforShallowCorrugatedAsbestosCementSheets.webp"
            title="BIS Certification for Shallow Corrugated Asbestos Cement Sheets"
            alt="BIS Certificate for Shallow Corrugated Asbestos Cement Sheets - IS 13008:1990 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Shallow Corrugated Asbestos Cement Sheets confirms
          that roofing sheets comply with IS 13008:1990, ensuring strength,
          weather resistance, and dimensional accuracy. Certification is required
          in India to verify that these sheets can safely withstand environmental
          exposure and structural loads in industrial, agricultural, and low-cost
          housing applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Shallow corrugated asbestos cement sheets are widely used in roofing
          applications across India, especially in industrial sheds, warehouses,
          rural housing, and agricultural structures. Their popularity comes from
          their cost-effectiveness, durability, and ability to provide protection
          against harsh weather conditions such as heavy rain, sunlight, and wind.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike flat construction materials, these sheets are designed with
          shallow corrugations that improve load distribution and water drainage.
          This structural design allows them to perform efficiently in sloped
          roofing systems. However, their performance depends heavily on
          manufacturing precision, material composition, and curing processes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Since these sheets often serve as the primary barrier between indoor
          spaces and external environmental conditions, any defect can lead to
          serious issues such as water leakage, structural weakness, or premature
          deterioration. Additionally, improper handling of asbestos-based
          materials can raise safety concerns during manufacturing and
          installation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To regulate such risks, the Bureau of Indian Standards has established
          a structured certification system for these products. A BIS Certificate
          for Shallow Corrugated Asbestos Cement Sheets ensures that manufacturers
          follow controlled production methods and meet defined technical
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, certification is not just a regulatory
          formality—it is a validation that their sheets can perform reliably
          under real-world roofing conditions. For buyers, it provides confidence
          that the product will deliver long-term durability and safety.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Shallow Corrugated Asbestos Cement
          Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          When discussing BIS Certification for Shallow Corrugated Asbestos Cement
          Sheets, it is important to understand how the certification directly
          relates to the product&apos;s functional role in roofing systems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          These sheets are constantly exposed to environmental stress, including
          rainfall, UV radiation, temperature variations, and wind loads. The
          corrugated design enhances strength, but only if the sheet is
          manufactured with precise thickness, proper fibre distribution, and
          consistent curing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification evaluates key performance aspects such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing capacity across corrugations</li>
          <li>Resistance to water penetration</li>
          <li>Stability under thermal expansion</li>
          <li>Surface integrity and crack resistance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, in agricultural storage facilities, roofing sheets must
          withstand both heat and humidity without warping. Similarly, in
          industrial settings, sheets must resist chemical exposure and maintain
          structural integrity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification system ensures that manufacturers maintain consistency
          in raw material usage, mixing ratios, and production techniques. This is
          critical because even small variations can lead to weak points in the
          sheet, increasing the risk of breakage or leakage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By enforcing these standards, certification acts as a quality benchmark
          that protects end-users from substandard products and ensures reliable
          roofing performance.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Shallow Corrugated Asbestos Cement Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for this product is{" "}
          <strong>IS 13008:1990</strong>, which specifies requirements for shallow
          corrugated asbestos cement sheets used in roofing and cladding.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 13008:1990
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers sheets designed with shallow corrugations for
          roofing applications. It defines requirements related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dimensions and corrugation profiles</li>
          <li>Mechanical strength</li>
          <li>Water tightness</li>
          <li>Surface finish</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard applies to sheets used in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Industrial roofing systems</li>
          <li>Agricultural structures</li>
          <li>Low-cost housing</li>
          <li>Temporary and semi-permanent buildings</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 13008:1990 ensures that sheets:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Withstand environmental exposure without degradation</li>
          <li>Provide effective water drainage through corrugation design</li>
          <li>Maintain structural integrity under load</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard incorporates:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Controlled corrugation geometry for strength</li>
          <li>Uniform thickness for load distribution</li>
          <li>Proper bonding between cement and fibres</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These principles ensure long-term performance and reliability.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Shallow corrugated asbestos cement sheets play a critical role in
          roofing systems across India. Ensuring their reliability is essential for
          both safety and long-term performance. A BIS Certification for Shallow
          Corrugated Asbestos Cement Sheets confirms that the product meets the
          technical requirements of IS 13008:1990.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS Certificate for Shallow
          Corrugated Asbestos Cement Sheets is a key step toward regulatory
          compliance and market acceptance. A BIS License for Shallow Corrugated
          Asbestos Cement Sheets not only enables legal distribution but also
          strengthens brand trust and ensures consistent product quality in
          demanding construction environments.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Shallow Corrugated Asbestos Cement Sheets
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why is BIS certification important for shallow corrugated
              asbestos cement sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              These sheets are used in roofing where they face weather and load
              conditions. Certification ensures they maintain structural
              integrity, resist water leakage, and perform reliably in industrial,
              agricultural, and residential applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What does IS 13008:1990 specify for these sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The standard defines requirements for dimensions, corrugation
              profile, strength, and water resistance. It ensures that sheets
              provide proper drainage, withstand environmental exposure, and
              maintain durability throughout their service life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. How are these sheets tested for strength during certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Samples undergo flexural strength testing where load is applied to
              check resistance to bending. This ensures the sheets can handle
              installation stress and external loads without cracking or breaking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What role does corrugation design play in certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The shallow corrugation pattern enhances load distribution and water
              drainage. Certification ensures the design is consistent and
              effective, preventing water accumulation and structural weakness.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Can defective sheets cause leakage problems?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, improper manufacturing or poor surface quality can lead to
              cracks or gaps, allowing water penetration. Certification ensures
              sheets are water-tight and suitable for roofing applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. How does BIS certification improve durability of these sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certified sheets are tested for resistance to environmental factors
              like rain and sunlight. This ensures long-term performance without
              deterioration or loss of strength.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Are these sheets suitable for industrial roofing applications?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, certified sheets are widely used in factories and warehouses due
              to their durability and ability to withstand environmental stress
              and load conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What manufacturing defects can lead to rejection in BIS testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Improper fibre distribution, uneven thickness, poor curing, and
              incorrect corrugation profiles can result in weak sheets that fail
              strength or water resistance tests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. How does certification ensure proper water drainage?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The standard specifies corrugation dimensions that allow efficient
              water flow, preventing accumulation and leakage during heavy rainfall.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Is factory inspection necessary for certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, inspectors verify production processes, raw material quality,
              and curing methods to ensure consistent product quality.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for foreign manufacturers
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for Indian manufacturers
            </a>
          </li>
        </ul>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={4} />
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
