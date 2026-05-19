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
  "https://bis-certifications.com/blogImages/BISLicenseforCorrugatedandSemiCorrugatedCementSheets.png";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets under IS 459:1992, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/corrugated-and-semi-corrugated-cement-sheets-is-459",
  },
  headline:
    "BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets – IS 459:1992",
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
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets – IS 459:1992",
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
      name: "What is the cost of BIS certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification cost for Corrugated and Semi–Corrugated Asbestos Cement Sheets depends on several factors such as testing requirements, factory size, and application fees. Costs typically include laboratory testing charges, inspection fees, and annual license fees. Manufacturers should also consider internal costs like quality control improvements. While the initial investment may seem high, certification ensures long-term market access and reduces the risk of product rejection, making it a valuable investment.",
      },
    },
    {
      "@type": "Question",
      name: "What tests are conducted under IS 459:1992?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing includes mechanical strength tests, water absorption tests, dimensional checks, and durability evaluations. These tests ensure that the sheets can withstand environmental stress and maintain performance over time. Testing must be conducted in BIS recognized laboratories, and results must meet the requirements specified in IS 459:1992. Manufacturers often conduct internal pre-testing to ensure compliance before submitting samples.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIS certification help in government tenders and infrastructure projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, having a BIS Certificate for Corrugated and Semi–Corrugated Asbestos Cement Sheets significantly improves eligibility for government tenders and infrastructure projects. Public sector projects often require certified materials to ensure long-term reliability and safety. Contractors and project authorities prefer certified sheets because they reduce risks associated with structural failures. Without certification, manufacturers may be excluded from large-scale projects, limiting their market opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "Can foreign manufacturers apply for BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foreign manufacturers can obtain certification through designated schemes. They must appoint an authorized representative in India and comply with the same testing and inspection requirements as domestic manufacturers. This ensures that imported products meet the same quality standards as locally produced sheets, maintaining consistency across the market.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification impact the durability of corrugated asbestos cement sheets in real-life conditions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification ensures that corrugated and semi–corrugated asbestos cement sheets are tested under conditions that simulate actual environmental exposure such as rain, heat, and wind pressure. The certification process verifies whether the sheets can maintain their structural integrity over time without cracking, warping, or absorbing excess moisture. This is especially important for roofing applications where sheets are constantly exposed to harsh weather. Certified sheets typically last longer and reduce maintenance costs, making them more reliable for long-term infrastructure use.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a product fails BIS testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a product fails testing, the manufacturer must identify the cause, make necessary improvements, and re-submit samples. Common reasons include improper material composition or inadequate curing. Addressing these issues before re-testing helps ensure compliance and prevents repeated failures, saving time and cost.",
      },
    },
    {
      "@type": "Question",
      name: "What role does raw material quality play in obtaining BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raw materials are critical in the bis certification process for Corrugated and Semi–Corrugated Asbestos Cement Sheets. The proportion and quality of cement, asbestos fiber, and additives directly affect the sheet's strength and durability. BIS evaluation includes checking whether manufacturers use consistent and approved raw materials. Poor-quality inputs can lead to brittle sheets or uneven surfaces, which fail during testing. Maintaining strict control over raw material sourcing and mixing ratios significantly improves the chances of obtaining certification successfully.",
      },
    },
    {
      "@type": "Question",
      name: "Are there specific marking requirements after obtaining the BIS license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, after receiving the BIS License for Corrugated and Semi–Corrugated Asbestos Cement Sheets, manufacturers must follow strict marking guidelines. Each sheet or batch must display the ISI mark along with license details, batch number, and manufacturer identification. This marking ensures traceability in case of defects or complaints. Incorrect or missing markings can lead to non-compliance issues, even if the product quality meets standards, so proper labeling is a critical part of ongoing compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Is there any difference between corrugated and semi–corrugated sheets in certification requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While both types fall under IS 459:1992, there are slight differences in evaluation based on their design and application. Corrugated sheets are typically tested for higher load-bearing capacity due to their use in roofing, while semi–corrugated sheets may be assessed differently depending on their structural role. However, both must meet core requirements such as strength, durability, and dimensional accuracy to qualify for the BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification support quality consistency across batches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certification requires manufacturers to implement a consistent production process, including standardized mixing, forming, and curing methods. During factory audits, inspectors check whether quality is maintained across different production batches. This ensures that every sheet produced meets the same performance criteria. Without such controls, batch-to-batch variation could lead to unreliable products. The certification system enforces discipline in manufacturing, leading to uniform quality.",
      },
    },
  ],
};

const BISCertificationforCorrugatedandSemi = () => {
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

export default BISCertificationforCorrugatedandSemi;

const MetaTags = () => {
  const title =
    "BIS Certificate for Corrugated and Semi Corrugated Cement Sheets - IS 459:1992";
  const ogTitle =
    "BIS Certificate for Corrugated and Semi Corrugated Cement Sheets - IS 459:1992";
  const twitterTitle =
    "BIS Certificate for Corrugated and Semi Corrugated Cement Sheets - IS 459:1992";
  const metaDescription =
    "Get BIS Certificate for Corrugated and Semi Corrugated Cement Sheets under IS 459:1992. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Corrugated and Semi Corrugated Cement Sheets as per IS 459:1992. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Corrugated and Semi Corrugated Cement Sheets under IS 459:1992. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Corrugated and Semi Corrugated Cement Sheets, BIS License for Corrugated and Semi Corrugated Cement Sheets, IS 459:1992 , BIS Certification for Corrugated and Semi Corrugated Cement Sheets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/corrugated-and-semi-corrugated-cement-sheets-is-459";
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
                    BIS Certificate for Corrugated and Semi–Corrugated Asbestos Cement Sheets
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
          BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement
          Sheets – IS 459:1992
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCorrugatedandSemiCorrugatedCementSheets.png"
            title="BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets"
            alt="BIS Certificate for Corrugated and Semi Corrugated Cement Sheets - IS 459:1992 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Corrugated and Semi–Corrugated Asbestos Cement
          Sheets under IS 459:1992 confirms that roofing and cladding sheets meet
          defined strength, durability, and performance benchmarks. In India,
          certification is required to ensure these sheets can withstand environmental
          stress, prevent structural failures, and deliver long-term safety in
          construction applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Corrugated and semi–corrugated asbestos cement sheets are widely used across
          India in industrial roofing, rural housing, warehouses, agricultural sheds,
          and low-cost infrastructure projects. Their popularity comes from their
          affordability, ease of installation, weather resistance, and thermal
          insulation properties. From factory rooftops to poultry farms and storage
          units, these sheets serve as a critical structural covering material.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, the same features that make them useful also introduce risks. These
          sheets are constantly exposed to sunlight, heavy rainfall, wind loads, and
          sometimes chemical environments. If the sheets are poorly manufactured, they
          may crack under pressure, absorb excessive moisture, or degrade faster than
          expected. This can result in leakage, structural instability, or safety
          hazards for occupants.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address such concerns, India has established a structured regulatory
          framework to ensure that only quality-tested sheets are used in construction.
          This is where BIS Certification for Corrugated and Semi–Corrugated Asbestos
          Cement Sheets becomes essential. It acts as a structured quality verification
          mechanism that ensures the sheets perform reliably under real-life conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, obtaining a BIS License for Corrugated and Semi–Corrugated
          Asbestos Cement Sheets enables access to regulated markets. For importers and
          sellers, it ensures that the products they distribute meet Indian performance
          expectations. For end users, it provides confidence that the roofing material
          will endure environmental stress without premature failure.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Corrugated and Semi–Corrugated Asbestos
          Cement Sheets - IS 459:1992
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Corrugated asbestos cement sheets are not just flat construction materials;
          they are engineered to provide strength through their wave-like structure. The
          corrugation enhances load-bearing capacity and helps in water drainage, making
          them suitable for roofs exposed to heavy rainfall.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process for these sheets is designed specifically around how
          they are manufactured and used. Unlike decorative products, these sheets must
          perform structurally. A minor flaw in composition, curing, or thickness can
          lead to cracking or deformation over time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Corrugated and Semi–Corrugated Asbestos Cement Sheets
          focuses on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensuring uniform thickness across the sheet</li>
          <li>Maintaining proper fiber-cement bonding</li>
          <li>Verifying resistance to moisture absorption</li>
          <li>Testing mechanical strength under load</li>
          <li>Evaluating durability under environmental exposure</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, a sheet installed on an industrial warehouse must withstand wind
          uplift forces. If the sheet lacks structural integrity, it may break or
          detach, leading to property damage and safety risks. Certification ensures such
          scenarios are minimized through strict manufacturing controls. When you plan the
          licence route itself, it helps to align product-specific work with how Indian BIS
          operates overall —{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Corrugated and Semi–Corrugated Asbestos Cement
          Sheets - IS 459:1992
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The relevant standard governing these products is{" "}
          <strong>IS 459:1992</strong>. This standard provides a detailed framework for
          manufacturing, testing, and performance evaluation of corrugated and
          semi–corrugated sheets.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 459:1992
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">This standard covers:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Corrugated asbestos cement sheets used for roofing</li>
          <li>Semi–corrugated sheets used in specific structural applications</li>
          <li>Sheets intended for both industrial and residential use</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard classifies sheets based on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Profile type (corrugated or semi–corrugated)</li>
          <li>Dimensions and thickness</li>
          <li>Load-bearing capacity</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 459:1992 is designed to ensure that sheets:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Do not crack under expected loads</li>
          <li>Resist water penetration during heavy rainfall</li>
          <li>Maintain shape and strength over time</li>
          <li>Provide consistent performance across batches</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">The standard emphasizes:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Controlled mixing of cement and asbestos fibers</li>
          <li>Proper curing processes to achieve strength</li>
          <li>Dimensional accuracy for proper installation</li>
          <li>Testing for mechanical and environmental durability</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For instance, sheets used in coastal regions must resist salt-laden air, while
          those used in rural areas must endure temperature fluctuations. The standard
          ensures that sheets are suitable for such varied conditions.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 459:1992
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing ensures that sheets perform reliably in real-world conditions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Safety Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing capacity</li>
          <li>Impact resistance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Performance Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Water absorption</li>
          <li>Flexural strength</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Durability Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Weather resistance</li>
          <li>Aging performance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dimensional checks</li>
          <li>Surface finish inspection</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be conducted in BIS recognized laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">Conclusion</h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Corrugated and semi–corrugated asbestos cement sheets play a crucial role in
          India&apos;s construction landscape, especially in cost-sensitive and large-scale
          applications. However, their performance directly impacts safety, durability,
          and structural reliability. This makes BIS Certification for Corrugated and
          Semi–Corrugated Asbestos Cement Sheets an essential requirement rather than just
          a regulatory formality.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Corrugated and Semi–Corrugated Asbestos Cement
          Sheets ensures that products meet the performance expectations defined under IS
          459:1992. It enables manufacturers to access regulated markets, build trust with
          buyers, and deliver consistent quality. Whether you are a manufacturer, importer,
          or distributor, securing a BIS Licence for Corrugated and Semi–Corrugated
          Asbestos Cement Sheets is a strategic step toward compliance, credibility, and
          long-term success in the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Corrugated and Semi–Corrugated Asbestos Cement
          Sheets - IS 459:1992
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the cost of BIS certification for Corrugated and Semi–Corrugated
              Asbestos Cement Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The bis certification cost for Corrugated and Semi–Corrugated Asbestos Cement
              Sheets depends on several factors such as testing requirements, factory size,
              and application fees. Costs typically include laboratory testing charges,
              inspection fees, and annual license fees. Manufacturers should also consider
              internal costs like quality control improvements. While the initial investment
              may seem high, certification ensures long-term market access and reduces the
              risk of product rejection, making it a valuable investment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What tests are conducted under IS 459:1992?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing includes mechanical strength tests, water absorption tests, dimensional
              checks, and durability evaluations. These tests ensure that the sheets can
              withstand environmental stress and maintain performance over time. Testing must
              be conducted in BIS recognized laboratories, and results must meet the
              requirements specified in IS 459:1992. Manufacturers often conduct internal
              pre-testing to ensure compliance before submitting samples.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Can BIS certification help in government tenders and infrastructure
              projects?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, having a BIS Certificate for Corrugated and Semi–Corrugated Asbestos Cement
              Sheets significantly improves eligibility for government tenders and
              infrastructure projects. Public sector projects often require certified
              materials to ensure long-term reliability and safety. Contractors and project
              authorities prefer certified sheets because they reduce risks associated with
              structural failures. Without certification, manufacturers may be excluded from
              large-scale projects, limiting their market opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can foreign manufacturers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Foreign manufacturers can obtain certification through designated schemes. They
              must appoint an authorized representative in India and comply with the same
              testing and inspection requirements as domestic manufacturers. This ensures that
              imported products meet the same quality standards as locally produced sheets,
              maintaining consistency across the market.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS certification impact the durability of corrugated asbestos
              cement sheets in real-life conditions?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification ensures that corrugated and semi–corrugated asbestos cement
              sheets are tested under conditions that simulate actual environmental exposure
              such as rain, heat, and wind pressure. The certification process verifies
              whether the sheets can maintain their structural integrity over time without
              cracking, warping, or absorbing excess moisture. This is especially important for
              roofing applications where sheets are constantly exposed to harsh weather.
              Certified sheets typically last longer and reduce maintenance costs, making them
              more reliable for long-term infrastructure use.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What happens if a product fails BIS testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If a product fails testing, the manufacturer must identify the cause, make
              necessary improvements, and re-submit samples. Common reasons include improper
              material composition or inadequate curing. Addressing these issues before
              re-testing helps ensure compliance and prevents repeated failures, saving time
              and cost.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What role does raw material quality play in obtaining BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Raw materials are critical in the bis certification process for Corrugated and
              Semi–Corrugated Asbestos Cement Sheets. The proportion and quality of cement,
              asbestos fiber, and additives directly affect the sheet&apos;s strength and
              durability. BIS evaluation includes checking whether manufacturers use
              consistent and approved raw materials. Poor-quality inputs can lead to brittle
              sheets or uneven surfaces, which fail during testing. Maintaining strict control
              over raw material sourcing and mixing ratios significantly improves the chances
              of obtaining certification successfully.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Are there specific marking requirements after obtaining the BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, after receiving the BIS License for Corrugated and Semi–Corrugated Asbestos
              Cement Sheets, manufacturers must follow strict marking guidelines. Each sheet or
              batch must display the ISI mark along with license details, batch number, and
              manufacturer identification. This marking ensures traceability in case of defects
              or complaints. Incorrect or missing markings can lead to non-compliance issues,
              even if the product quality meets standards, so proper labeling is a critical
              part of ongoing compliance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is there any difference between corrugated and semi–corrugated sheets in
              certification requirements?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              While both types fall under IS 459:1992, there are slight differences in
              evaluation based on their design and application. Corrugated sheets are typically
              tested for higher load-bearing capacity due to their use in roofing, while
              semi–corrugated sheets may be assessed differently depending on their structural
              role. However, both must meet core requirements such as strength, durability, and
              dimensional accuracy to qualify for the BIS Certification for Corrugated and
              Semi–Corrugated Asbestos Cement Sheets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How does BIS certification support quality consistency across batches?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certification requires manufacturers to implement a consistent production process,
              including standardized mixing, forming, and curing methods. During factory audits,
              inspectors check whether quality is maintained across different production batches.
              This ensures that every sheet produced meets the same performance criteria. Without
              such controls, batch-to-batch variation could lead to unreliable products. The
              certification system enforces discipline in manufacturing, leading to uniform
              quality.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6" />


        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Mark Certification Scheme</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS (Foreign Manufacturers Certification Scheme)</a>
          </li>
        </ul>

        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/pdf/459.pdf"
            title="IS 459:1992 - Corrugated and Semi Corrugated Asbestos Cement Sheets PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
