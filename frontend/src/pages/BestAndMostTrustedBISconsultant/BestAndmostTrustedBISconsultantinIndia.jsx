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
  "https://bis-certifications.com/best-bis-consultant-india";
const PAGE_IMAGE_SRC = "/blogImages/bestbisconsultantindia.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/bestbisconsultantindia.webp";

const PAGE_TITLE =
  "Best and most trusted BIS consultant in India – Sun Certifications India";
const META_DESCRIPTION =
  "Looking for a best and trusted BIS consultant in India? Sun Certifications India offers end-to-end BIS certification, ISI Mark, CRS, FMCS License, and multi-ministry compliance since 2016.";
const META_KEYWORDS =
  "BIS Consultant in India, BIS Certification Consultants India, BIS Registration Consultant, ISI Mark Consultant India, BIS Consultant Delhi, BIS Consultant Gurugram, FMCS Consultant India, CRS Certification Consultant";

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
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description:
    "Looking for a best and trusted BIS consultant in India? Sun Certifications India offers end-to-end BIS certification, ISI Mark, CRS, FMCS License, and multi-ministry compliance since 2016",
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
      name: "How long does BIS certification take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by scheme. CRS registration for electronics typically takes 30 to 60 working days, provided all documents and test reports are accurate. ISI Mark certification for domestic manufacturers can take 45 to 90 working days depending on the product and BIS workload. FMCS certification involves overseas factory audits and generally takes longer — typically 3 to 6 months from start to finish.",
      },
    },
    {
      "@type": "Question",
      name: "Is BIS certification mandatory for imports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most regulated product categories. Products imported without valid BIS certification can be detained at customs. The list of mandatory products is continuously updated through QCOs, so it is important to verify requirements before importing.",
      },
    },
    {
      "@type": "Question",
      name: "Can foreign manufacturers apply for BIS certification directly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foreign manufacturers can apply under the FMCS scheme. However, they are required to appoint an Authorized Indian Representative (AIR) who acts on their behalf with BIS. Sun Certifications India offers AIR services as part of our foreign manufacturer support.",
      },
    },
    {
      "@type": "Question",
      name: "What documents are typically required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Documentation requirements vary by scheme and product. Generally, they include product technical specifications, test reports from BIS-approved labs, manufacturing process documents, and company registration details. We provide a customized document checklist after your initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sun Certifications India handle post-certification compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. License renewal, surveillance audit support, and amendments to existing BIS licenses are part of our ongoing services.",
      },
    },
  ],
};

const BestAndMostTrustedBISconsultantinIndia = () => {
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

export default BestAndMostTrustedBISconsultantinIndia;

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
                    <Link to="/best-most-trusted-bis-consultant">
                      Best &amp; Most Trusted BIS Consultant
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Best and most trusted BIS consultant in India
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

       

        <p className="text-gray-600 text-base font-geist mb-4 font-semibold">
          Navigating BIS certification is complicated. We make it
          straightforward.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Since 2016, Sun Certifications India has been one of the most trusted
          BIS certification consultants for manufacturers, importers, and foreign
          companies looking to enter or operate in the Indian market. Based in
          Delhi and serving clients across the globe, we have guided thousands of
          businesses through BIS certification, BIS registration, ISI Mark
          certificate, FMCS certificate, and multi-ministry compliance — all
          under one roof.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are a domestic manufacturer seeking an ISI mark license or
          a foreign company trying to understand India&apos;s Bureau of Indian
          Standards requirements for the first time, our team handles every step
          of the process for you.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What Is BIS Certification and Why Does It Matter?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is India&apos;s national standards
          body, operating under the Ministry of Consumer Affairs. BIS
          certification is a legal requirement for a growing list of product
          categories — and for good reason. It signals that a product meets
          India&apos;s quality, safety, and performance benchmarks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without valid BIS certification, manufacturers and importers face
          serious consequences: products cannot legally enter the Indian market,
          customs clearance can be held up, and businesses can face penalties,
          seizure of goods, or even legal action.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The government has been steadily expanding the list of mandatory BIS
          products through Quality Control Orders (QCOs). Today, the mandatory
          list covers electronics, electrical appliances, steel and alloys,
          footwear, chemicals, automotive components, toys, household items,
          furniture, glassware, and much more. If you sell in India, the question
          is rarely whether you need BIS certification — it&apos;s which scheme
          applies and how to get it done efficiently.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes We Handle
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India is experienced and most trusted bis license
          consultant across all major BIS certification schemes:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark Certification (Product Certification Scheme)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The most widely recognized quality mark in India. Mandatory for domestic
          manufacturers across dozens of product categories including cement, steel
          pipes, electrical switches, gas cylinders, footwear, and more. We manage
          testing coordination, factory inspections, documentation, and license
          grant end-to-end.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          CRS Registration (Compulsory Registration Scheme)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory for electronics and IT products such as laptops, mobile
          phones, LED lights, power banks, adapters, set-top boxes, and over 70+
          other product categories. We coordinate BIS-approved laboratory testing
          and handle the entire registration process.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          FMCS Certification (Foreign Manufacturers Certification Scheme)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Designed for overseas manufacturers who want to sell their products in
          India under the ISI Mark. This scheme involves factory audits conducted
          by BIS officials at the manufacturing site abroad. We prepare our foreign
          clients thoroughly for every stage of the audit and documentation
          process.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Scheme X Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A newer mandatory scheme covering machinery and electrical equipment —
          including industrial machinery, weaving machines, embroidery machines,
          packing equipment, and more. This scheme has been progressively expanded
          and is now applicable to a wide range of capital goods.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate of Conformity (CoC)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Required for specific product segments where BIS conformity must be
          demonstrated through third-party testing and declaration.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Procedure for Obtaining BIS Certificate
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Securing a BIS certificate — whether you are an Indian manufacturer or a
          foreign company — involves a clear, structured process. Here is a
          step-by-step breakdown:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1 — Identify the Applicable Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Determine the relevant Indian Standard (IS) that applies to your
          product. Every product regulated under BIS falls under a specific IS
          number, which governs the testing parameters, quality benchmarks, and
          labelling requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2 — Establish Testing Facilities
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Set up an in-house laboratory that meets the requirements of the
          applicable IS standard. BIS requires manufacturers to have the necessary
          testing infrastructure at their facility before a licence can be granted.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3 — Create a BIS Portal Account
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Indian manufacturers must register on the BIS online portal to initiate
          the application process. Foreign manufacturers apply through a
          designated Authorized Indian Representative (AIR).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4 — Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Get the product tested at a BIS-recognized laboratory as per the
          applicable Indian Standard Specifications (ISS). Accurate, complete test
          reports are critical — any gaps can delay or reject the application.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 5 — Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          File the BIS application along with the test report and all required
          supporting documents through the BIS portal or the relevant branch
          office.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 6 — Query Resolution
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials review the application and may raise queries or ask for
          additional clarifications. Prompt and accurate responses at this stage
          keep the application moving forward.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 7 — Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS officer visits the manufacturing facility to verify compliance —
          checking that the production processes, equipment, and quality controls
          align with the applicable IS standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 8 — Sample Verification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          During the inspection, product samples are tested in the in-house
          laboratory. The BIS officer seals samples for independent
          re-verification at a BIS laboratory.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 9 — Audit Completion
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once inspection and sample verification activities are completed, the
          audit is formally finalized and the file is submitted for final review.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 10 — Grant of Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If all requirements are satisfied, BIS grants the certification licence
          to the manufacturer. The ISI Mark can then be legally applied to the
          product.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Business registration documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your company incorporation certificate, GST registration, or firm
          registration — proof that your business legally exists and is authorized
          to manufacture or import.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturing process flow chart
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A step-by-step diagram showing how your product is made — from raw
          materials to finished goods. BIS uses this to verify that your production
          process is consistent and controlled.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          List of machinery and equipment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A complete inventory of the machines and testing equipment present at
          your facility, along with calibration records. This confirms you have the
          infrastructure to meet BIS standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product details and technical specifications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Detailed documentation covering your product&apos;s design, dimensions,
          materials, performance parameters, and intended use — aligned with the
          applicable Indian Standard (IS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Test reports from BIS-recognized labs
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Official test reports confirming your product has been tested against
          the relevant ISS parameters at a laboratory recognized by BIS. These
          reports are the core of your application.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality control manual
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A documented system describing how your factory monitors and maintains
          product quality — covering inspection procedures, testing frequency,
          rejection criteria, and corrective actions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Trademark certificate
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If your brand name or logo will appear alongside the ISI Mark on the
          product or packaging, a registered trademark certificate is required as
          part of the application.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Sun Certifications India as Your BIS Consultant?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          There are many BIS consultants in India. Here is what makes working with
          Sun Certifications India a different experience:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Nearly a Decade of Regulatory Experience
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We have been working exclusively in regulatory compliance since 2016.
          BIS certification is not a side offering for us — it is the core of
          what we do. Our team understands the procedural nuances, application
          timelines, documentation requirements, and evolving QCO landscape in a
          way that only years of hands-on experience can build.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          One Dedicated Point of Contact
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          When you work with us, you get a dedicated project manager who handles
          your file from start to finish. You are never passed between teams or
          left wondering what stage your application is at. We keep you informed
          at every milestone.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Multi-Ministry Expertise Under One Roof
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification rarely exists in isolation. Many products require
          parallel clearances — LMPC for import labelling, WPC for wireless
          devices, CDSCO for cosmetics and medical devices, PESO for petroleum
          equipment, or AIR (Authorized Indian Representative) registration for
          foreign manufacturers. We handle all of these, so you never have to
          coordinate multiple agencies.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Foreign Manufacturer Support
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We work extensively with international clients who need to navigate
          India&apos;s certification requirements from overseas. We understand the
          documentation expectations, the language barriers, and the timelines
          that make FMCS and CRS approvals challenging for foreign companies.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          No Hidden Costs. No Unnecessary Delays.
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We are transparent about timelines and fees from day one. Our team does
          not overpromise approvals or create unnecessary back-and-forth. If there
          is a complication, we tell you early and provide solutions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Industries We Serve
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Our clients include businesses in electronics, electrical equipment,
          footwear, toys, furniture, steel and alloys, automotive components,
          chemicals, skin and hair care appliances, and more.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is no longer optional for most product categories sold
          in India. With Quality Control Orders (BIS QCOs) expanding across
          sectors and enforcement tightening year on year, manufacturers and
          importers who delay certification are taking on real business and legal
          risk.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          At the same time, BIS certification does not have to be a painful
          process. With the right consultant — one who knows the documentation,
          the labs, the BIS procedures, and the common pitfalls — it becomes a
          manageable, predictable process with a clear endpoint.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Here is why businesses trust Sun Certifications India:
        </p>

        <ul className="list-none mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            ✅ We have been doing this since 2016 — not as a side service, but as
            our core expertise
          </li>
          <li>
            ✅ We serve both domestic manufacturers and international companies
            across industries
          </li>
          <li>
            ✅ We take full ownership of your certification file — from first
            consultation to license grant
          </li>
          <li>
            ✅ We keep you informed at every stage — no chasing, no guessing
          </li>
          <li>
            ✅ We handle compliance beyond BIS — LMPC, WPC, CDSCO, PESO, AIR — so
            you never need to coordinate multiple agencies
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          If your product needs to be in the Indian market — legally, safely, and
          without delay — Sun Certifications India is the partner you need.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          How long does BIS certification take?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Timelines vary by scheme. CRS registration for electronics typically
          takes 30 to 60 working days, provided all documents and test reports are
          accurate. ISI Mark certification for domestic manufacturers can take 45
          to 90 working days depending on the product and BIS workload. FMCS
          certification involves overseas factory audits and generally takes longer
          — typically 3 to 6 months from start to finish.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Is BIS certification mandatory for imports?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, for most regulated product categories. Products imported without
          valid BIS certification can be detained at customs. The list of
          mandatory products is continuously updated through QCOs, so it is
          important to verify requirements before importing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Can foreign manufacturers apply for BIS certification directly?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers can apply under the FMCS scheme. However, they are
          required to appoint an Authorized Indian Representative (AIR) who acts
          on their behalf with BIS. Sun Certifications India offers AIR services as
          part of our foreign manufacturer support.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What documents are typically required?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Documentation requirements vary by scheme and product. Generally, they
          include product technical specifications, test reports from BIS-approved
          labs, manufacturing process documents, and company registration details.
          We provide a customized document checklist after your initial consultation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Does Sun Certifications India handle post-certification compliance?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. License renewal, surveillance audit support, and amendments to
          existing BIS licenses are part of our ongoing services.
        </p>

        <FaqAuthorEng questionNumber={1} />
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
