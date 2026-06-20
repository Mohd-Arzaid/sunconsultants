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
import {
  CRS_PATH,
  FMCS_PATH,
  getOtherCountryLinks,
  SCHEME_X_PATH,
} from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";

const CANONICAL_URL =
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-china";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-china";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BISConsultantsinChina.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BISConsultantsinChina.png";

const PAGE_TITLE =
  "Best and most trusted BIS Consultant in China – Sun Certifications India";
const H1_HEADING =
  "BIS Certification Consultant for Chinese Manufacturers – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for China manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc. in China— including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in China, BIS certification China, FMCS certification China manufacturers, BIS registration China";

const SCHEMA_HEADLINE =
  "Best and Most Trusted BIS Certification Consultant in China – Sun Certifications India";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: SCHEMA_HEADLINE,
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
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: SCHEMA_HEADLINE,
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
      name: "Are India's Quality Control Orders specifically targeting Chinese products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "QCOs are not legally framed as country-specific measures — they apply to all imported products in regulated categories regardless of origin.",
      },
    },
    {
      "@type": "Question",
      name: "Can our CCC certification speed up the BIS process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CCC certification does not accelerate BIS processing or reduce any BIS requirements — there is no mutual recognition between CCC and BIS.",
      },
    },
    {
      "@type": "Question",
      name: "We have 100+ product SKUs being exported to India — how do we manage BIS registration at this scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is the defining operational challenge for large Chinese electronics and consumer goods manufacturers. Sun Certifications India manages high-volume BIS portfolios as a structured programme — not as individual applications.",
      },
    },
    {
      "@type": "Question",
      name: "Our products are currently at Indian customs without BIS certification — what happens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Products in mandatory QCO categories detained at Indian customs without valid BIS certification face several consequences, if BIS certification cannot be demonstrated within the customs authority's timeline, goods may be re-exported at the importer's cost or destroyed.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "Bilateral trade exceeded $135 billion in 2023 — making China India's largest single import source despite import restrictions and geopolitical friction",
  "India's electronics imports from China exceed $25 billion annually — covering mobile phone components, consumer electronics, LED products, and power equipment",
  "POSCO, Tata Steel, and JSW compete with Chinese steel imports across structural steel, stainless steel, and specialty alloys — all categories under active BIS QCO enforcement",
  "India's solar energy programme — targeting 500 GW by 2030 — runs substantially on Chinese panels, inverters, and mounting systems; BIS certification for solar components is a growing mandatory requirement",
  "India's toy market — one of the world's fastest growing — was specifically targeted by a 2020 BIS QCO on toys, explicitly designed to regulate the volume of Chinese toy imports",
];

const COMMERCIAL_PRIORITY_POINTS = [
  "Indian retailers — Reliance Retail, D-Mart, Amazon India, Flipkart — are increasingly requiring BIS certification as a vendor onboarding condition for Chinese suppliers",
  "Indian importers and distributors are under growing customs scrutiny for Chinese-origin goods — a detained shipment costs more in demurrage and relationship damage than BIS certification ever would",
  "India's PLI scheme for electronics and solar is creating new Indian OEM customers who require BIS-certified components from Chinese suppliers",
  "The Make in India push is expanding QCO coverage rapidly — categories exempt from BIS last year may be mandatory today",
];

const BIS_OVERVIEW_POINTS = [
  "CCC (China Compulsory Certification) ≠ BIS. The CCC mark — administered by CNCA (Certification and Accreditation Administration of China) — is China's mandatory national product safety certification scheme. CCC certifies compliance with Chinese GB standards for the Chinese market. BIS certifies compliance with Indian Standards (IS numbers) for the Indian market. Both are mandatory national schemes — but they have zero mutual recognition. Indian customs officials do not recognise CCC marks, and BIS auditors do not accept GB-standard compliance as IS-standard compliance.",
  "GB Standards ≠ Indian Standards (IS). China's Guobiao (GB) standards and India's Bureau of Indian Standards (IS) are developed independently. For many product categories — toys, electronics, steel, chemicals — GB and IS parameters differ substantially in test methods, performance benchmarks, and safety thresholds. IS-specific testing is required regardless of GB compliance history.",
  "CNAS-accredited lab reports may be accepted for CRS — with evaluation. China's national laboratory accreditation body CNAS (China National Accreditation Service for Conformity Assessment) accredits testing laboratories to ISO 17025. For CRS registrations (electronics and IT products), CNAS-accredited laboratory test reports may be accepted by BIS under mutual recognition arrangements — but this is evaluated per product. Sun Certifications India assesses whether existing CNAS reports meet IS-standard test parameters before recommending any retesting. For FMCS products (ISI Mark categories), BIS-approved laboratory testing is required regardless of CNAS accreditation — CNAS reports cannot be substituted.",
  "CCC test reports ≠ CNAS lab reports. CCC certification testing and CNAS-accredited IS-parameter testing are different documents. Many Chinese manufacturers assume their CCC test documentation qualifies for BIS CNAS evaluation — it does not without specific IS-parameter coverage. This distinction must be clarified before any lab report is submitted.",
  "Foreign manufacturers cannot apply to BIS directly. Chinese companies must appoint an Authorized Indian Representative (AIR) — a legally registered Indian entity that files BIS applications, signs all documents, and manages all correspondence with BIS. For Chinese manufacturers with large product portfolios, the AIR relationship is ongoing and operationally significant — not a one-time formality.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "Deep knowledge of every QCO category affecting Chinese exports — toys, electronics, steel, chemicals, solar",
  },
  {
    offer: "High-volume CRS management",
    benefit:
      "We handle 50–100+ model registration pipelines — simultaneous multi-product filing is standard for us",
  },
  {
    offer: "CNAS report evaluation",
    benefit:
      "We assess every CNAS report before recommending retesting — maximising existing test library value",
  },
  {
    offer: "AIR services — ongoing",
    benefit:
      "We serve as your permanent AIR across all products and all BIS schemes",
  },
  {
    offer: "GB-to-IS documentation mapping",
    benefit:
      "We identify exactly where GB and IS parameters differ for your product — no unnecessary rework",
  },
  {
    offer: "QCO monitoring",
    benefit:
      "We track every new QCO announcement affecting Chinese import categories — proactive compliance",
  },
  {
    offer: "FMCS audit preparation",
    benefit:
      "IS-specific mock audits for Chinese factories — not GB or CCC audit formats",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
  },
  {
    offer: "Post-certification portfolio management",
    benefit:
      "Renewals, new model additions, surveillance audits — managed as a continuous programme",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestAndMostTrustedBISCertificationConsultantInChinese = () => {
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

export default BestAndMostTrustedBISCertificationConsultantInChinese;

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
                    Best and most trusted BIS Consultant in China
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
          {H1_HEADING}
        </h1>

        <div className="mb-6">
          <img
            src={PAGE_IMAGE_SRC}
            title={H1_HEADING}
            alt={H1_HEADING}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          India has introduced more Quality Control Orders targeting Chinese import
          categories than any other country — yet Chinese manufacturers who secure
          BIS certification are consistently winning Indian market share over those
          who do not.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This is the reality of the India-China trade relationship. On one side:
          India&apos;s government expanding mandatory BIS certification to toys,
          electronics, steel, chemicals, solar panels, furniture, and packaging
          machinery — product categories where Chinese manufacturers hold dominant
          global supply positions. On the other: Chinese factories that have
          completed BIS certification are clearing Indian customs, landing on Indian
          shelves, and building distributor relationships.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification has become the single most consequential compliance
          variable for Chinese manufacturers targeting India — more impactful than
          import duties, more operationally demanding than GST registration, and more
          urgently enforced than it has ever been before.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The manufacturers getting this right are not the largest factories or the
          ones with the most established Indian relationships. They are the ones who
          started BIS certification early, managed the multi-product registration
          complexity efficiently, and understood that CCC certification and GB
          standards — however rigorous — carry zero weight at Indian customs.
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
          , we have been helping chinese manufacturers navigate BIS since 2016. We
          understand the scale of Chinese product portfolios, the CNAS lab report
          evaluation process, and the specific QCO categories where BIS enforcement
          is tightest for Chinese-origin goods. If your Chinese factory is exporting
          or planning to export to India, this page is your operational starting
          point.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Market Chinese Manufacturers Cannot Ignore
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India is not an optional market for Chinese manufacturers — it is a
          strategic imperative. With bilateral trade exceeding $135 billion in 2023,
          China is India&apos;s largest import source by a significant margin.
          Chinese goods dominate Indian electronics retail, industrial supply chains,
          construction materials, toy markets, and chemical procurement. That
          dominance is built on price competitiveness, supply chain depth, and
          manufacturing scale — and it is increasingly contingent on BIS compliance.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Key trade facts:</h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {TRADE_FACTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3 className={SUB_HEADING_CLASS}>
          Why BIS certification is now a commercial priority — not just a compliance
          requirement:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {COMMERCIAL_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Chinese Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards body
          under the Ministry of Consumer Affairs. Products covered by mandatory
          Quality Control Orders (QCOs) cannot legally enter, be sold, or be
          distributed in India without valid BIS certification — and for
          Chinese-origin goods, customs enforcement has never been stricter.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How China&apos;s existing certifications relate to BIS — precisely:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Chinese Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={CRS_PATH} className="hover:underline">
            1. CRS — Compulsory Registration Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The most immediately relevant scheme for Chinese electronics, IT, and LED
          product manufacturers — and the highest-volume BIS registration category
          for Chinese exporters.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          No factory audit required — but BIS-recognized laboratory testing is
          mandatory for every product model.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={FMCS_PATH} className="hover:underline">
            2. FMCS — Foreign Manufacturers Certification Scheme (ISI Mark)
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For Chinese manufacturers whose products fall under mandatory ISI Mark QCO
          categories — the scheme facing the strictest BIS enforcement for
          Chinese-origin goods.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={SCHEME_X_PATH} className="hover:underline">
            3. BIS Scheme X Certification
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For Chinese industrial machinery and capital equipment manufacturers —
          expanding under mandatory QCOs across packaging machinery, industrial
          equipment, and processing systems.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification in China
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (China)</li>
          <li>
            Product technical file — specifications, drawings, bill of materials
          </li>
          <li>Test reports from BIS-approved or mutually recognized laboratory</li>
          <li>Manufacturing process flow chart</li>
          <li>
            List of plant, machinery, and testing equipment with calibration records
          </li>
          <li>Quality control plan and in-house testing procedures</li>
          <li>
            Appointment letter for Authorized Indian Representative (AIR)
          </li>
          <li>Authorization letter on company letterhead</li>
        </ol>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Chinese Manufacturers
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
          BIS-approved or mutually recognized laboratory.
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
          Step 6 — BIS officer visits your manufacturing facility in China
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For FMCS and Scheme X, we coordinate and prepare your team for the BIS
          factory inspection at your Chinese facility.
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
          in China
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Chinese manufacturers need a BIS consultant who understands large-scale
          product portfolio management, CNAS report evaluation, the specific QCO
          categories where Chinese-origin goods face strictest enforcement, and the
          operational complexity of managing BIS compliance across dozens of product
          categories simultaneously.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Chinese Manufacturers
                </th>
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

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is not a barrier for Chinese manufacturers — it is a
          market access strategy.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The evidence is in the market data. Xiaomi holds BIS CRS registration
          across its entire India product range — and is India&apos;s second-largest
          smartphone brand. Haier holds ISI Mark certification for its India-market
          appliances — and has built one of India&apos;s top five home appliance
          brands. LONGi and JA Solar have pursued BIS certification for their solar
          products — and continue to supply India&apos;s largest renewable energy
          projects. Chinese manufacturers who treated BIS as a strategic investment,
          not a compliance burden, are the ones leading their categories in India
          today.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The manufacturers who delayed — waiting to see if QCO enforcement would
          tighten, hoping Indian importers would manage the compliance risk, assuming
          their Indian distributor&apos;s assurances were reliable — are the ones
          whose containers sit at Nhava Sheva and whose Indian customers have started
          looking for alternatives.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Are India&apos;s Quality Control Orders specifically targeting Chinese
          products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          QCOs are not legally framed as country-specific measures — they apply to
          all imported products in regulated categories regardless of origin.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can our CCC certification speed up the BIS process?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          CCC certification does not accelerate BIS processing or reduce any BIS
          requirements — there is no mutual recognition between CCC and BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We have 100+ product SKUs being exported to India — how do we manage BIS
          registration at this scale?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This is the defining operational challenge for large Chinese electronics
          and consumer goods manufacturers. Sun Certifications India manages
          high-volume BIS portfolios as a structured programme — not as individual
          applications.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Our products are currently at Indian customs without BIS certification —
          what happens?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Products in mandatory QCO categories detained at Indian customs without
          valid BIS certification face several consequences, if BIS certification
          cannot be demonstrated within the customs authority&apos;s timeline, goods
          may be re-exported at the importer&apos;s cost or destroyed.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Also check our BIS expertise in other countries
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 text-base font-geist">
          {getOtherCountryLinks(PAGE_PATH).map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className="text-blue-600 hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>

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
            to={FMCS_PATH}
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
            to={CRS_PATH}
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
