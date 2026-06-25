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
  LANG_PAGE_BY_ENGLISH_PATH,
  SCHEME_X_PATH,
} from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";
import ConsultantCountryInterlinksGrid from "@/pages/BestAndMostTrustedBISconsultant/ConsultantCountryInterlinksGrid";

const CANONICAL_URL =
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-gulf-countries";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-gulf-countries";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantsGulfCountries.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantsGulfCountries.png";

const PAGE_TITLE =
  "Best and most trusted BIS Consultant in gulf countries – Sun Certifications India";
const H1_HEADING =
  "BIS Certification Consultant for GCC Manufacturers – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for gulf countries manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc. in gulf countries— including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in gulf countries, BIS certification gulf countries, FMCS certification gulf countries manufacturers, BIS registration gulf countries";

const SCHEMA_HEADLINE =
  "BIS Certification Consultant for GCC Manufacturers – Sun Certifications India";

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
      name: "The India-UAE CEPA is in force — does it reduce or waive BIS requirements for UAE manufacturers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The India-UAE CEPA reduces import duties on eligible UAE-origin manufactured goods — it has no effect on BIS mandatory certification requirements.",
      },
    },
    {
      "@type": "Question",
      name: "We are a trading company in Jebel Ali — we re-export goods from China and Korea to India. Can we get BIS certification for these products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BIS certification must be held by the legal manufacturer — the entity whose factory produces the product.",
      },
    },
    {
      "@type": "Question",
      name: "We are a Saudi petrochemical manufacturer (SABIC supply chain) — which BIS scheme applies to our chemical products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemical products and petrochemical compounds fall primarily under the FMCS (ISI Mark) scheme — requiring an overseas factory audit at your Saudi facility by BIS officials.",
      },
    },
    {
      "@type": "Question",
      name: "We manufacture aluminium products in Oman (SOHAR Aluminium supply chain) — what is our BIS pathway?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aluminium and aluminium alloy products are under mandatory ISI Mark QCOs — FMCS certification with an overseas factory audit at your Oman facility is the applicable pathway.",
      },
    },
    {
      "@type": "Question",
      name: "Kuwait and Qatar don't have a separate FTA with India — does that put our products at a disadvantage versus UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From a BIS compliance perspective, all GCC manufacturers are on equal footing — BIS certification requirements apply equally regardless of whether an FTA exists between your country and India.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "India-GCC collective bilateral trade exceeded $160 billion in 2023 — India is the GCC's single largest trade partner",
  "The India-UAE CEPA (in force since May 2022) provides preferential duties on UAE-origin manufactured goods entering India — the first such deal India signed with a Middle Eastern nation",
  "India-GCC Free Trade Agreement negotiations are actively progressing — when concluded, it will cover all six GCC nations and dramatically expand the commercial case for GCC manufacturers targeting India",
  "3.5 million Indians in UAE, 2.5 million in Saudi Arabia — the diaspora creates permanent retail, distribution, and B2B demand for GCC-manufactured products in India",
  "India's petrochemical and plastics sector sources heavily from GCC refineries — SABIC, EQUATE, and QAPCO products flow into Indian industrial supply chains at scale",
];

const BIS_PRIORITY_POINTS = [
  "Saudi Arabia's Vision 2030 industrial diversification is producing new categories of manufactured exports — aluminium, plastics, specialty chemicals, consumer goods — all requiring BIS for Indian market access",
  "The UAE-India CEPA duty concessions are most valuable when combined with BIS compliance — certified products clear customs faster and face less scrutiny",
  "India's PLI schemes in electronics, chemicals, and textiles are creating new Indian OEM customers who require BIS-certified components and materials from GCC suppliers",
  "Jebel Ali Free Zone — the world's largest free zone — processes significant re-export volumes to India; manufacturers need to understand the BIS implications for both direct manufacturing and re-export scenarios",
];

const BIS_OVERVIEW_POINTS = [
  "GSO (Gulf Standards Organisation) certification is not recognised by BIS. The Gulf Standards Organisation administers unified GCC standards — GSO marks certify compliance with Gulf technical standards for the GCC market. BIS certifies compliance with Indian Standards (IS numbers) for the Indian market. They are parallel, independent systems with no mutual recognition.",
  "ESMA (UAE) certification has no BIS equivalence. The Emirates Authority for Standardisation and Metrology administers UAE's national standards — ESMA marks carry no standing with Indian customs or BIS inspectors.",
  "SASO (Saudi Arabia) certification is not accepted by BIS. The Saudi Standards, Metrology and Quality Organisation certifies products for the Saudi market. SASO certification does not substitute for BIS, and SASO-compliant products still require separate BIS registration for India.",
  "FASB (Bahrain), DGSM (Kuwait), and MOCI (Oman/Qatar) marks are not BIS equivalents. Every GCC nation's national standards body operates independently from BIS. No GCC-level or national certification transfers to Indian market compliance.",
  "The India-UAE CEPA reduces import duties — it does not reduce BIS requirements. This is the most commonly misunderstood point among UAE exporters. The CEPA provides preferential tariff rates on UAE-origin goods — customs duty compliance and BIS certification are governed by separate Indian laws. Both must be satisfied independently.",
  "BIS certification is held by the manufacturer — not the re-exporter. This is critical for GCC trading companies. Goods manufactured in China, Europe, or Asia and re-exported through Jebel Ali or Dammam to India must hold BIS certification in the name of the original manufacturer — not the UAE or Saudi trading entity. A GCC trading company cannot obtain BIS on behalf of a foreign manufacturer.",
  "Foreign manufacturers must appoint an Authorized Indian Representative (AIR). GCC companies cannot apply to BIS directly. An AIR — a legally registered Indian entity — must file all applications, sign all documents, and manage all BIS correspondence on the GCC manufacturer's behalf.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "Deep knowledge of FMCS, CRS, and Scheme X across GCC's top export categories",
  },
  {
    offer: "Re-export clarity",
    benefit:
      "We resolve the manufacturer vs. re-exporter BIS question upfront — before costly mistakes",
  },
  {
    offer: "AIR services",
    benefit: "We represent your GCC entity before BIS — no India office required",
  },
  {
    offer: "GSO-to-IS gap analysis",
    benefit:
      "We map existing GCC certification documentation against IS requirements",
  },
  {
    offer: "CEPA and FTA expertise",
    benefit:
      "We advise on how India-UAE CEPA and India-GCC FTA interact with BIS obligations",
  },
  {
    offer: "Multi-country GCC coverage",
    benefit: "UAE, Saudi Arabia, Kuwait, Oman, Qatar, Bahrain — all handled under one relationship",
  },
  {
    offer: "Dedicated project manager",
    benefit: "One point of contact, clear milestones, no ambiguity",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
  },
  {
    offer: "Post-certification support",
    benefit: "Renewals, surveillance audits, amendments — proactively managed",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestAndMostTrustedBISCertificationConsultantInArabic = () => {
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

export default BestAndMostTrustedBISCertificationConsultantInArabic;

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
                    Best and most trusted BIS Consultant in Gulf countries
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
          The Gulf Cooperation Council and India share one of the world&apos;s
          most consequential trade relationships — and it is built on more than
          oil.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The India-UAE CEPA, which came into force in 2022, was the fastest trade
          agreement India has ever negotiated. Saudi Arabia&apos;s Vision 2030 is
          actively diversifying the Kingdom&apos;s manufacturing base into
          petrochemicals, aluminium, plastics, and consumer goods — all categories
          with direct BIS implications for Indian market exports. Kuwait, Oman,
          Qatar, and Bahrain collectively supply India with energy, chemicals,
          aluminium, and an expanding range of manufactured goods through one of
          the world&apos;s most active bilateral trade corridors.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India is the GCC&apos;s largest trading partner collectively — bilateral
          trade between India and the six GCC nations exceeded $160 billion in
          2023. The Indian diaspora of over 8.9 million people across the GCC
          creates permanent commercial and cultural connectivity. Indian businesses
          source from GCC manufacturers. GCC conglomerates invest in Indian
          infrastructure. The relationship runs deep in both directions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          But here is what GCC manufacturers — whether in Dubai&apos;s Jebel Ali
          Free Zone, Saudi Arabia&apos;s Jubail Industrial City, Oman&apos;s Sohar
          Industrial Port, or Qatar&apos;s Mesaieed Industrial Area — consistently
          discover when they begin exporting manufactured goods to India: India&apos;s{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS) operates entirely independently of ESMA, SASO, GSO, or any GCC
          certification framework.{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 font-bold underline"
          >
            BIS certification
          </Link>{" "}
          is mandatory for dozens of
          regulated product categories — and no GCC quality mark, no GSO standard,
          and no India-GCC trade agreement waives that requirement.
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
          , we have been helping foreign manufacturers — including manufacturers
          from across the GCC — navigate India&apos;s BIS certification
          requirements since 2016. This page covers everything GCC manufacturers
          need to know about BIS, and how we handle the entire process on your
          behalf.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for GCC Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India is not just a trade partner for the GCC — it is a strategic
          priority. India&apos;s 1.4 billion consumers, rapidly growing
          manufacturing sector, and infrastructure ambitions make it the single
          most important non-GCC market for Gulf-based manufacturers looking beyond
          their home region.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Key trade facts:</h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {TRADE_FACTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3 className={SUB_HEADING_CLASS}>
          Why GCC manufacturers are prioritising BIS certification now:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What GCC Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards body
          under the Ministry of Consumer Affairs. Every product regulated under a
          mandatory Quality Control Order (QCO) must hold valid BIS certification
          before it can legally be imported into, sold within, or distributed
          across India.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How GCC certification frameworks relate to BIS — precisely:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to GCC Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1.{""}
          <Link to={FMCS_PATH} className="font-bold underline">
    Foreign Manufacturers Certification Scheme (ISI Mark)
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The primary BIS scheme for GCC manufacturers — covering petrochemicals,
          aluminium, steel, specialty chemicals, and consumer goods under mandatory
          ISI Mark QCOs.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. {""}
          <Link to={CRS_PATH} className="font-bold underline">
Compulsory Registration Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics and IT products manufactured in the GCC — less dominant
          than FMCS for Gulf manufacturers but applicable to UAE&apos;s growing
          electronics assembly sector and smart device manufacturers.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          3. {" "}
          <Link to={SCHEME_X_PATH} className="font-bold underline">
BIS Scheme X Certification
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For industrial machinery and capital equipment manufactured in the GCC —
          expanding under new QCOs.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          GCC certification marks (ESMA, SASO, GSO) are not accepted as BIS
          equivalents for any scheme. Sun Certifications India provides a
          customised document checklist for your specific product and GCC country
          after initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (GCC country)</li>
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
          BIS Certificate Process for GCC Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Clarify Manufacturing Entity and Re-export Status
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We establish whether your GCC entity is the legal manufacturer or a
          re-exporter — this determines who must hold BIS certification before any
          application proceeds.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 2 — Product Assessment and Scheme Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We review your product category, applicable Indian Standard, and the
          correct BIS scheme — FMCS, CRS, or Scheme X.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 3 — Appoint an Authorized Indian Representative (AIR)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India can serve as your AIR, eliminating the need to
          find a separate entity.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4 — GSO-to-IS Documentation Gap Analysis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We map your existing GCC certification documentation against Indian
          Standard requirements and identify gaps before testing or filing.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 5 — Identify BIS-recognized laboratory for your product and IS
          standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your product is tested against the applicable Indian Standard at a
          BIS-approved or mutually recognized laboratory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 6 — BIS Application Filing</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We file your complete application on the BIS portal and manage all
          official correspondence with BIS on your behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7 — BIS Factory Audit in GCC (FMCS / Scheme X)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For FMCS and Scheme X, we coordinate and prepare your team for the BIS
          factory inspection at your GCC manufacturing facility.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 8 — Licence Grant</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants your certification licence and
          your product can legally enter the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Sun Certifications India is best and most trusted{" "}
          <Link
            to={LANG_PAGE_BY_ENGLISH_PATH[PAGE_PATH]}
            className="font-bold underline"
          >
            BIS consultant in Gulf countries
          </Link>
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>What It Means for GCC Manufacturers</th>
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
          The GCC-India relationship is one of the world&apos;s most structurally
          important — built on energy trade, diaspora connectivity, investment
          flows, and a rapidly deepening manufacturing partnership. Saudi Vision
          2030 is creating new GCC-manufactured products. The India-UAE CEPA has
          opened preferential market access. The India-GCC FTA is on the horizon.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is the compliance foundation that makes all of this
          commercially real.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you manufacture aluminium in Bahrain, petrochemicals in Kuwait,
          specialty chemicals in Qatar, steel in Oman, gold jewellery in Dubai, or
          plastics in Jubail — BIS certification is what determines whether your
          products can legally enter India&apos;s 1.4 billion-consumer market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          The India-UAE CEPA is in force — does it reduce or waive BIS requirements
          for UAE manufacturers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. The India-UAE CEPA reduces import duties on eligible UAE-origin
          manufactured goods — it has no effect on BIS mandatory certification
          requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We are a trading company in Jebel Ali — we re-export goods from China and
          Korea to India. Can we get BIS certification for these products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. BIS certification must be held by the legal manufacturer — the
          entity whose factory produces the product.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We are a Saudi petrochemical manufacturer (SABIC supply chain) — which BIS
          scheme applies to our chemical products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Chemical products and petrochemical compounds fall primarily under the
          FMCS (ISI Mark) scheme — requiring an overseas factory audit at your
          Saudi facility by BIS officials.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We manufacture aluminium products in Oman (SOHAR Aluminium supply chain)
          — what is our BIS pathway?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Aluminium and aluminium alloy products are under mandatory ISI Mark QCOs
          — FMCS certification with an overseas factory audit at your Oman facility
          is the applicable pathway.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Kuwait and Qatar don&apos;t have a separate FTA with India — does that
          put our products at a disadvantage versus UAE?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          From a BIS compliance perspective, all GCC manufacturers are on equal
          footing — BIS certification requirements apply equally regardless of
          whether an FTA exists between your country and India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <ConsultantCountryInterlinksGrid currentEnglishPath={PAGE_PATH} />

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
