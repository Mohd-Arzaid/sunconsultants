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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-japan";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantJapan.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantJapan.webp";

const PAGE_TITLE =
  "Best and Most Trusted BIS Certification Consultant in Japan – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Japan manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc. in Japan — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Japan, BIS certification Japan, FMCS certification Japan manufacturers, BIS registration Japan";

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
  datePublished: "2026-06-11",
  dateModified: "2026-06-11",
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
      name: "Do Japanese manufacturers need a company or branch office in India to obtain BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Japanese manufacturers are not required to establish a legal entity in India. However, they must appoint an Authorized Indian Representative (AIR) to communicate with BIS on their behalf.",
      },
    },
    {
      "@type": "Question",
      name: "Can JIS certification replace BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. JIS certification and BIS certification are separate regulatory frameworks. Products covered under mandatory BIS requirements must obtain BIS approval regardless of existing JIS certifications.",
      },
    },
    {
      "@type": "Question",
      name: "Will BIS officials visit our manufacturing facility in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For certification schemes such as FMCS and Scheme X, BIS may conduct an on-site factory inspection at the Japanese manufacturing facility as part of the approval process.",
      },
    },
    {
      "@type": "Question",
      name: "How long does BIS certification take for Japanese manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on the product category, testing requirements, documentation readiness, and applicable certification scheme. Most projects require several weeks to a few months for completion.",
      },
    },
    {
      "@type": "Question",
      name: "Can Sun Certifications India act as our Authorized Indian Representative (AIR)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete AIR services for foreign manufacturers, allowing Japanese companies to obtain BIS certification without establishing a local presence in India.",
      },
    },
  ],
};

const INDIA_PRIORITY_POINTS = [
  "India and Japan share a long-standing strategic and economic partnership supported by strong government-to-government cooperation.",
  "Demand for high-quality industrial machinery, automation systems, and precision equipment continues to increase across Indian industries.",
  "Rapid infrastructure development is creating opportunities for Japanese technology providers and engineering companies.",
  "India's automotive sector remains one of the largest and fastest-growing markets globally, offering significant opportunities for Japanese automotive manufacturers and component suppliers.",
  "Rising demand for premium consumer electronics and electrical products aligns well with Japan's reputation for quality and reliability.",
  "Ongoing supply chain diversification efforts are encouraging Japanese manufacturers to expand business operations and market access within India.",
];

const BIS_OVERVIEW_POINTS = [
  "BIS certification is granted for specific products and applicable certification schemes.",
  "The list of regulated products continues to expand as new Quality Control Orders are introduced by the Indian government.",
  "Foreign manufacturers are required to appoint an Authorized Indian Representative (AIR) to communicate with BIS on their behalf.",
  "Certain certification schemes require BIS officials to conduct factory inspections at overseas manufacturing facilities.",
  "Non-compliant shipments may face customs clearance issues, detention, or import restrictions.",
  "Existing certifications such as JIS (Japanese Industrial Standards), ISO certifications, or other Japanese quality approvals do not automatically replace BIS certification requirements.",
];

const BENEFITS_ROWS = [
  {
    offer: "BIS Expertise Since 2016",
    benefit: "Extensive experience with foreign manufacturer certification",
  },
  {
    offer: "Dedicated Project Management",
    benefit: "Single point of contact throughout the certification process",
  },
  {
    offer: "AIR Services",
    benefit: "Complete Authorized Indian Representative support",
  },
  {
    offer: "Documentation Assistance",
    benefit: "Accurate preparation and review of all required documents",
  },
  {
    offer: "Factory Audit Support",
    benefit: "End-to-end preparation for BIS inspections",
  },
  {
    offer: "Technical Compliance Guidance",
    benefit: "Assistance in understanding applicable Indian Standards",
  },
  {
    offer: "Transparent Pricing",
    benefit: "Clear project scope with no hidden costs",
  },
  {
    offer: "Post-Certification Support",
    benefit: "Renewals, amendments, surveillance, and ongoing compliance",
  },
];

const WHAT_MAKES_US_DIFFERENT = [
  "Strong understanding of BIS procedures and regulatory expectations.",
  "Experience working with international manufacturers.",
  "Fast response times and proactive communication.",
  "Structured project execution and milestone tracking.",
  "Long-term compliance support beyond licence approval.",
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinJapan = () => {
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

export default BestandmosttrustedBIScertificationConsultantinJapan;

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
                  <BreadcrumbPage className="whitespace-nowrap">
                    Best and Most Trusted BIS Certification Consultant in Japan
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
            alt={PAGE_TITLE}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Japan has long been recognised as one of the world&apos;s leading
          manufacturing economies, known for its commitment to quality,
          innovation, and precision engineering. From advanced electronics and
          industrial machinery to automotive components and consumer products,
          Japanese manufacturers have built a strong reputation across global
          markets. As India continues to emerge as one of the fastest-growing
          economies in the world, an increasing number of Japanese companies are
          exploring new opportunities to expand their presence in the Indian
          market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, entering India requires more than identifying customers and
          distribution channels. Many products are subject to mandatory compliance
          requirements regulated by the Bureau of Indian Standards (BIS). Without
          the appropriate BIS certification, regulated products cannot be legally
          imported, sold, or distributed in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          At{" "}
          <a
            href="https://bis-certifications.com/"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Sun Certifications India
          </a>
          , we have been assisting foreign manufacturers with BIS certification
          and regulatory compliance since 2016. We work closely with overseas
          companies to simplify the certification process, manage documentation,
          coordinate testing requirements, and support manufacturers throughout
          their interactions with BIS authorities.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For Japanese manufacturers planning to export products to India,
          understanding BIS requirements at an early stage can save significant
          time, cost, and operational challenges later in the process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India – A Growing Opportunity for Japanese Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s economic transformation over the last decade has created
          substantial opportunities for international manufacturers. With a
          population of more than 1.4 billion people, rising consumer spending,
          expanding infrastructure investments, and government-led industrial
          development initiatives, India has become a strategic market for global
          brands seeking long-term growth.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For Japanese companies, India represents more than just a large consumer
          market. It is increasingly becoming a key manufacturing hub, technology
          partner, and investment destination.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Japanese companies are strengthening their presence in India
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Japanese Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is India&apos;s national standards
          authority operating under the BIS Act, 2016. BIS develops product
          standards and administers certification schemes designed to ensure
          product quality, safety, and performance within the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For products covered under mandatory Quality Control Orders (QCOs),
          obtaining BIS certification is not optional. Manufacturers must secure
          the applicable BIS approval before their products can enter commercial
          distribution channels in India.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Important points for Japanese manufacturers
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Japanese Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Depending on the product category, Japanese manufacturers may be required
          to obtain certification under one of the following BIS schemes.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          1. FMCS — Foreign Manufacturers Certification Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          FMCS license is designed for overseas manufacturers seeking permission to
          use the ISI Mark on products intended for the Indian market. This scheme
          involves a factory inspection conducted by BIS officials at the
          manufacturing facility.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. CRS — Compulsory Registration Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          CRS applies primarily to electronics and information technology products.
          Unlike FMCS, factory inspections are generally not required. However,
          product testing through a BIS-recognised laboratory is mandatory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. BIS Scheme X</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X is a relatively new certification framework covering various
          categories of industrial machinery and capital equipment. Many product
          categories manufactured by Japanese engineering companies may fall under
          this scheme.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification in Japan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Japan)</li>
          <li>
            Product technical file — specifications, drawings, bill of materials
          </li>
          <li>
            Test reports from BIS-approved or mutually recognized laboratory
          </li>
          <li>Manufacturing process flow chart</li>
          <li>
            List of plant, machinery, and testing equipment with calibration
            records
          </li>
          <li>Quality control plan and in-house testing procedures</li>
          <li>
            Appointment letter for Authorized Indian Representative (AIR)
          </li>
          <li>Authorization letter on company letterhead</li>
        </ol>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Japan Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Initial Consultation and Product Assessment
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We review your product category, applicable Indian Standard, and the
          correct BIS scheme before any application work begins.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 2 — Appoint an Authorized Indian Representative (AIR)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India can serve as your AIR, eliminating the need to
          find a separate entity.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 3 — Gap Analysis and Documentation Preparation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We prepare and review all technical files, manufacturing records, and
          supporting documents required for your BIS application.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4 — Product testing at a BIS-recognized laboratory
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your product is tested against the applicable Indian Standard at a
          BIS-approved laboratory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 5 — Submit the complete application with all documents and fees
          through the BIS portal
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We file your application on the BIS portal and manage all official
          correspondence with BIS on your behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 6 — BIS officer visits your manufacturing facility in Japan
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For FMCS and Scheme X, we coordinate and prepare your team for the BIS
          factory inspection at your Japanese facility.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7 — Licence Grant and Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants your certification licence and
          your product can legally enter the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Sun Certifications India is the Best and Most Trusted BIS Consultant
          in Japan
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          For Japanese manufacturers, successful certification requires more than
          simply submitting an application. It requires accurate documentation,
          regulatory expertise, technical understanding, and proactive project
          management.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          That is where Sun Certifications India adds value.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>Benefits for Japanese Manufacturers</th>
              </tr>
            </thead>
            <tbody>
              {BENEFITS_ROWS.map((row) => (
                <tr key={row.offer}>
                  <td className={TD_CLASS}>{row.offer}</td>
                  <td className={TD_CLASS}>{row.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className={SUB_HEADING_CLASS}>What Makes Us Different</h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {WHAT_MAKES_US_DIFFERENT.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our objective is not simply to obtain a licence but to help manufacturers
          build a reliable and sustainable compliance framework for the Indian
          market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India continues to offer significant growth opportunities for Japanese
          manufacturers across electronics, machinery, automotive components,
          industrial products, and advanced technologies. However, entering the
          Indian market requires compliance with applicable BIS regulations, many of
          which are mandatory before products can be imported or sold.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Navigating certification requirements without local expertise often leads
          to unnecessary delays, documentation issues, and increased costs. Working
          with an experienced BIS consultancy allows manufacturers to focus on
          business growth while ensuring regulatory compliance is handled
          efficiently.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Since 2016, Sun Certifications India has been supporting foreign
          manufacturers through every stage of the BIS certification process. From
          initial product assessment and documentation preparation to testing
          coordination, factory audit support, and licence approval, we provide
          end-to-end assistance designed to simplify compliance and accelerate
          market entry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If your company is planning to export products from Japan to India, our
          team is ready to help you achieve BIS certification with confidence and
          clarity.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Do Japanese manufacturers need a company or branch office in India to
          obtain BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. Japanese manufacturers are not required to establish a legal entity
          in India. However, they must appoint an Authorized Indian Representative
          (AIR) to communicate with BIS on their behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can JIS certification replace BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. JIS certification and BIS certification are separate regulatory
          frameworks. Products covered under mandatory BIS requirements must obtain
          BIS approval regardless of existing JIS certifications.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Will BIS officials visit our manufacturing facility in Japan?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. For certification schemes such as FMCS and Scheme X, BIS may conduct
          an on-site factory inspection at the Japanese manufacturing facility as
          part of the approval process.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How long does BIS certification take for Japanese manufacturers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The timeline depends on the product category, testing requirements,
          documentation readiness, and applicable certification scheme. Most
          projects require several weeks to a few months for completion.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can Sun Certifications India act as our Authorized Indian Representative
          (AIR)?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. We provide complete AIR services for foreign manufacturers, allowing
          Japanese companies to obtain BIS certification without establishing a
          local presence in India.
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
