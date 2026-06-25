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
  BIS_CERTIFICATE_PATH,
  CRS_PATH,
  FMCS_PATH,
  getOtherCountryLinks,
  LANG_PAGE_BY_ENGLISH_PATH,
  SCHEME_X_PATH,
} from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";

const CANONICAL_URL =
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-indonesia";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-indonesia";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantIndonesia.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantIndonesia.webp";

const PAGE_TITLE =
  "Best and most trusted BIS certification Consultant in Indonesia – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Indonesia manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in Indonesia — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Indonesia, BIS certification Indonesia, FMCS certification Indonesia manufacturers, BIS registration Indonesia";

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
  datePublished: "2026-06-13",
  dateModified: "2026-06-13",
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
      name: "We have SNI certification for our product — is BIS not required if we already have SNI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SNI and BIS are entirely separate national certification frameworks with no mutual recognition. SNI certifies compliance with Indonesian national standards for the Indonesian market. BIS certifies compliance with Indian Standards (IS numbers) for the Indian market. A product holding SNI certification must still obtain separate BIS certification before it can legally be imported into or sold in India. The two run in parallel — one does not substitute for the other.",
      },
    },
    {
      "@type": "Question",
      name: "We are an electronics assembler in Batam — our components come from China and Taiwan. Who needs BIS — us or our component suppliers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification must be held by the legal manufacturer — the entity whose name appears on the product and whose factory produces it. If you assemble finished electronics products in Batam and export them to India under your brand or your customer's brand, BIS certification must be obtained in your name as the Indonesian manufacturer.",
      },
    },
    {
      "@type": "Question",
      name: "AIFTA gives us preferential duties into India — does it reduce or remove BIS requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The ASEAN-India Free Trade Agreement provides preferential import duty rates on eligible Indonesian products — it does not affect BIS mandatory certification requirements in any way.",
      },
    },
    {
      "@type": "Question",
      name: "We supply palm oil processing machinery manufactured in Indonesia — does BIS Scheme X apply to us?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Scheme X is expanding to cover industrial processing equipment, including food processing and agri-processing machinery.",
      },
    },
    {
      "@type": "Question",
      name: "We are an Indonesian furniture manufacturer supplying IKEA India — do we need BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Furniture and wood products are under active BIS QCO review. BIS certification responsibility still lies with you as the manufacturer.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "India-Indonesia bilateral trade crossed $38 billion in 2023 — making India one of Indonesia's top 5 trading partners",
  "ASEAN-India Free Trade Agreement (AIFTA) is in force — Indonesian goods benefit from preferential or zero import duties across thousands of tariff lines entering India",
  "Indonesia is India's largest ASEAN supplier of coal but the relationship is actively diversifying into manufactured goods, chemicals, and consumer products",
  "India's palm oil imports from Indonesia alone exceed $7 billion annually — Indonesia's largest agri-commodity export to India, processed through Indian FMCG and food manufacturing supply chains",
  "India's construction and infrastructure boom is generating sustained demand for Indonesian plywood, engineered wood, and stone products — categories under active BIS QCO expansion",
];

const INDIA_PRIORITY_POINTS = [
  "India's middle class — projected to reach 500 million by 2030 — is driving demand for consumer electronics, furniture, personal care goods, and packaged food products: all categories where Indonesian manufacturing is competitive",
  "India's PLI (Production Linked Incentive) schemes in textiles, electronics, and food processing are creating new B2B sourcing opportunities for Indonesian component and raw material suppliers",
  "Indonesian manufacturers already supplying to global brands like IKEA, H&M, and Unilever from their Indonesian factories are finding their Indian-market shipments suddenly subject to BIS requirements they were not aware of",
  "The Indonesia-India bilateral investment relationship is growing — Indonesian conglomerates like Salim Group, Sinar Mas, and Indofood have India-facing operations that increasingly require BIS compliance on their product lines",
];

const BIS_OVERVIEW_POINTS = [
  "SNI (Standar Nasional Indonesia) is not recognised by BIS. Indonesia's mandatory national standard — administered by BSN (Badan Standardisasi Nasional) — has no mutual recognition with BIS. A product certified to SNI standards is not automatically compliant with BIS Indian Standards, even where the technical parameters overlap.",
  "BPOM registration does not substitute for BIS. Indonesia's BPOM (Badan Pengawas Obat dan Makanan) governs cosmetics, pharmaceuticals, and food products in Indonesia — it has no equivalence with India's BIS regime or CDSCO requirements.",
  "KAN-accredited lab reports have limited applicability. Reports from KAN (Komite Akreditasi Nasional) accredited laboratories are not currently on BIS's accepted mutual recognition list for most schemes. For CRS (electronics) registrations, Sun Certifications India evaluates per product whether KAN reports can be considered — but Indonesian manufacturers should plan for BIS-recognized laboratory testing in most cases.",
  "LSPro product certifications are not BIS equivalents. Indonesia's LSPro (Lembaga Sertifikasi Produk) product certification marks have no standing with Indian customs or BIS.",
  "Foreign manufacturers cannot apply to BIS directly. Indonesian companies must appoint an Authorized Indian Representative (AIR) — a legally registered Indian entity that applies on their behalf, signs all BIS documents, and manages all correspondence with the bureau.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "We track every new QCO — including those affecting rubber, electronics, and chemical categories dominant in Indonesian exports",
  },
  {
    offer: "AIR services",
    benefit:
      "We serve as your Authorized Indian Representative — no India entity needed",
  },
  {
    offer: "SNI-to-IS gap analysis",
    benefit:
      "We map existing SNI documentation against IS requirements — avoiding wasted rework",
  },
  {
    offer: "KAN lab report evaluation",
    benefit:
      "We confirm per product whether KAN reports are acceptable before recommending retesting",
  },
  {
    offer: "FMCS and Scheme X audit preparation",
    benefit:
      "We have prepared overseas manufacturers for BIS factory inspections — including IS-specific mock audits",
  },
  {
    offer: "Supply chain clarity",
    benefit:
      "We advise on who holds BIS when Indonesian factories assemble products with foreign-origin components",
  },
  {
    offer: "Dedicated project manager",
    benefit: "One contact, defined milestones, no ambiguity",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
  },
  {
    offer: "Post-certification support",
    benefit: "Renewals, surveillance audits, amendments — handled proactively",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinIndonesia = () => {
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

export default BestandmosttrustedBIScertificationConsultantinIndonesia;

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
                    Best and most trusted BIS certification Consultant in
                    Indonesia
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
          Indonesia and India are the two largest economies in Southeast and South
          Asia — and for decades, they have largely sold past each other rather
          than to each other. That is changing rapidly.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indonesia is the world&apos;s largest archipelago economy, the fourth
          most populous country on earth, and a manufacturing powerhouse in palm
          oil derivatives, coal and mineral processing equipment, rubber products,
          textiles, electronics assembly, furniture, and fast-moving consumer
          goods. Indian buyers are actively sourcing from Indonesian suppliers
          across every one of these categories.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India has a mandatory product certification regime that operates
          independently of SNI, BPOM, or any Indonesian certification system.
          The{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS) governs what enters India — and for
          a growing list of product categories, no BIS certification means no legal
          entry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          At{" "}
          <a
            href="https://bis-certifications.com/"
            className="text-blue-600 font-bold underline"
            rel="noopener noreferrer"
          >
            Sun Certifications India
          </a>
          , we have been helping manufacturers of Indonesia — including
          manufacturers from ASEAN nations navigating BIS certification — get
          certified efficiently since 2016. If your Indonesian business is
          targeting India, this page tells you exactly what BIS requires, why it
          matters, and how we handle it for you.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for Manufacturers of Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India and Indonesia are natural trading partners — two of the
          world&apos;s fastest-growing large economies, geographically proximate,
          and increasingly aligned on industrial strategy. The numbers reflect a
          relationship that is still well below its potential — which is precisely
          the opportunity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Key trade facts:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {TRADE_FACTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Indonesian manufacturers are prioritising India now:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Indonesian Manufacturers Need to
          Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) operates under India&apos;s Ministry of
          Consumer Affairs and governs product quality and safety for the Indian
          market. Every product regulated under a Quality Control Order (QCO) must
          hold valid{" "}
          <Link
            to={BIS_CERTIFICATE_PATH}
            className="text-blue-600 font-bold underline"
          >
            BIS certification
          </Link>{" "}
          before it can be legally imported into,
          sold within, or distributed across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          What Indonesian manufacturers must understand about their existing
          certifications:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Indonesian Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
        1. {" "}
          <Link to={FMCS_PATH} className="font-bold underline">
            FMCS Certification
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The primary route for Indonesian manufacturers seeking the ISI Mark —
          India&apos;s most widely recognized mandatory quality certification for
          regulated goods.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
        2. {" "}
          <Link to={CRS_PATH} className="font-bold underline">
            CRS Registration
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics and IT products — the fastest-growing BIS compliance
          category for Indonesian electronics assemblers and exporters. No factory
          audit required — but product testing at a BIS-recognized laboratory is
          mandatory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={SCHEME_X_PATH} className="font-bold underline">
            3. BIS Scheme X
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory certification for industrial machinery and capital equipment —
          expanding rapidly under new QCOs.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Indonesia Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Product Assessment and Scheme Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We identify the correct BIS scheme and applicable Indian Standard for
          your product before any application work begins.
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
          Step 4 — Identify the BIS-recognized laboratory for your product
          category and get testing done
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your product is tested against the applicable Indian Standard at a
          BIS-approved or mutually recognized laboratory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 5 — Prepare and submit the complete application through the BIS
          portal
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We file your application on the BIS portal and manage all official
          correspondence with BIS on your behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 6 — BIS Factory Audit in Indonesia (Scheme X / FMCS)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials travel to your Indonesian manufacturing facility. We
          coordinate and prepare your team for the inspection.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7 — BIS issues the Scheme X registration certificate or ISI Mark
          licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants your certification and your
          product can legally enter the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification in Indonesia
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Indonesia)</li>
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
          Why Sun Certifications India is best and most trusted{" "}
          <Link
            to={LANG_PAGE_BY_ENGLISH_PATH[PAGE_PATH]}
            className="font-bold underline"
          >
            BIS consultant in Indonesia
          </Link>
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indonesian manufacturers entering India need a consultant who understands
          ASEAN supply chain realities, the SNI-to-IS documentation gap, and the
          practical complexity of managing overseas BIS certification from Jakarta,
          Surabaya, or Batam.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Indonesian Manufacturers
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
          Indonesia is one of Asia&apos;s most consequential manufacturing
          economies — rubber from Sumatra runs in tyres across Indian roads, palm
          oil from Kalimantan moves through Indian FMCG supply chains, electronics
          assembled in Batam power Indian homes, and furniture crafted in Java fills
          Indian apartments. Indonesian manufacturing is already present in India.
          What many Indonesian exporters are only now discovering is that BIS
          certification is what makes that presence legal and sustainable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The AIFTA has lowered the tariff barrier. BIS certification is the
          compliance barrier — and it is entirely manageable with the right partner.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          We have SNI certification for our product — is BIS not required if we
          already have SNI?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          SNI and BIS are entirely separate national certification frameworks with
          no mutual recognition. SNI certifies compliance with Indonesian national
          standards for the Indonesian market. BIS certifies compliance with Indian
          Standards (IS numbers) for the Indian market. A product holding SNI
          certification must still obtain separate BIS certification before it can
          legally be imported into or sold in India. The two run in parallel — one
          does not substitute for the other.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We are an electronics assembler in Batam — our components come from China
          and Taiwan. Who needs BIS — us or our component suppliers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification must be held by the legal manufacturer — the entity
          whose name appears on the product and whose factory produces it. If you
          assemble finished electronics products in Batam and export them to India
          under your brand or your customer&apos;s brand, BIS certification must be
          obtained in your name as the Indonesian manufacturer.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          AIFTA gives us preferential duties into India — does it reduce or remove
          BIS requirements?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. The ASEAN-India Free Trade Agreement provides preferential import
          duty rates on eligible Indonesian products — it does not affect BIS
          mandatory certification requirements in any way.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We supply palm oil processing machinery manufactured in Indonesia — does
          BIS Scheme X apply to us?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X is expanding to cover industrial processing equipment,
          including food processing and agri-processing machinery.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We are an Indonesian furniture manufacturer supplying IKEA India — do we
          need BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture and wood products are under active BIS QCO review. BIS
          certification responsibility still lies with you as the manufacturer.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Also check our BIS expertise in other countries
        </h2>

        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 text-base font-geist">
          {getOtherCountryLinks(PAGE_PATH).map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className="text-blue-600 font-bold underline">
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
