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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-south-korea";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSouthKorea.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSouthKorea.webp";

const PAGE_TITLE =
  "Best and most trusted BIS certification Consultant in South Korea – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for South Korea manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in South Korea — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in South Korea, BIS certification South Korea, FMCS certification South Korea manufacturers, BIS registration South Korea";

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
      name: "Can we use our KC Mark test reports for BIS CRS registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "KC Mark test reports and KOLAS-accredited test reports are different documents. KC Mark testing certifies compliance with Korean Standards (KS) for the Korean market — these reports are not accepted by BIS.",
      },
    },
    {
      "@type": "Question",
      name: "We have 50+ product models launching in India this year — how do we manage BIS registration at this scale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is exactly the operational challenge that distinguishes Korean electronics brands from manufacturers in other categories. Sun Certifications India manages high-volume CRS portfolios as a structured programme — not as individual applications.",
      },
    },
    {
      "@type": "Question",
      name: "Does the India-Korea CEPA reduce or eliminate BIS certification requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The CEPA reduces import duties on eligible Korean products — it has no effect on BIS mandatory certification requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can our Korean headquarters manage BIS without an India office?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and this is the standard operating model for most Korean manufacturers. BIS requires an Authorized Indian Representative (AIR) — a legally registered Indian entity — to file and manage applications on the Korean manufacturer's behalf.",
      },
    },
    {
      "@type": "Question",
      name: "Samsung India and LG India already have BIS certifications — do Korean component suppliers to these companies also need separate BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on whether the Korean supplier is the declared manufacturer of a product sold in India.",
      },
    },
  ],
};

const INDIA_PRIORITY_POINTS = [
  "India's PLI scheme for electronics is attracting Samsung, LG, and Dixon Technologies to domestic manufacturing — pulling Korean Tier-1 and Tier-2 component suppliers toward India-facing BIS compliance",
  "India's electric vehicle transition is creating demand for Korean lithium battery technology from Samsung SDI, LG Energy Solution, and SK On — all requiring BIS for Indian market batteries and energy storage systems",
  "India's steel and infrastructure boom is sustaining POSCO's India operations and creating demand for Korean high-tensile and specialty steel products beyond what POSCO India manufactures locally",
  "Korean home appliance brands — LG, Samsung, Coway, Winia — are competing directly for India's rapidly growing premium appliance market against Chinese and European brands where BIS registration speed is a direct competitive variable",
];

const BIS_OVERVIEW_POINTS = [
  "KC Mark ≠ BIS certification. The KC (Korea Certification) Mark is South Korea's mandatory national safety certification — administered by the National Radio Research Agency (NRA) and Korea Testing Laboratory (KTL). KC Mark certifies compliance with Korean Standards (KS) for the Korean market. BIS certifies compliance with Indian Standards (IS numbers) for the Indian market. Both are mandatory national schemes — but they have zero mutual recognition. A product holding a valid KC Mark must still obtain separate BIS certification for India, starting from the beginning.",
  "KS (Korean Industrial Standards) ≠ IS (Indian Standards). Korean Standards and Indian Standards are developed independently. Technical parameters, test methods, and performance benchmarks differ between KS and IS — sometimes substantially. A product that passes KS testing may not meet IS parameters for the same characteristic, and vice versa. IS-specific testing is required regardless of KS compliance.",
  "KOLAS-accredited lab reports may be accepted for CRS. The Korea Laboratory Accreditation Scheme (KOLAS) is Korea's national laboratory accreditation framework under KATS (Korean Agency for Technology and Standards). For CRS registrations (electronics and IT products), KOLAS-accredited laboratory test reports may be accepted by BIS under mutual recognition — a significant advantage for Korean electronics manufacturers with comprehensive existing test documentation. Sun Certifications India evaluates KOLAS report acceptability per product before recommending any retesting — avoiding unnecessary cost for manufacturers with large test libraries.",
  "KC Mark test reports are not KOLAS reports. KC Mark testing and KOLAS-accredited laboratory testing are separate processes. KC Mark test reports from KTL, UL Korea, or Bureau Veritas Korea are not the same as KOLAS-accredited IS-parameter test reports. This distinction matters practically — Korean manufacturers should not assume KC test documentation automatically qualifies for BIS KOLAS evaluation.",
  "Foreign manufacturers cannot apply to BIS directly. Korean companies must appoint an Authorized Indian Representative (AIR) — a legally registered Indian entity that files BIS applications, signs all documents, and manages all correspondence with BIS. For high-volume Korean electronics brands, the AIR relationship is operational and ongoing — not a one-time formality.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "Deep knowledge of CRS, FMCS, and Scheme X requirements across every Korean export category",
  },
  {
    offer: "High-volume CRS management",
    benefit:
      "We handle simultaneous multi-product, multi-model CRS pipelines — Samsung/LG scale is not a challenge",
  },
  {
    offer: "KOLAS report evaluation",
    benefit:
      "We assess every existing KOLAS report before recommending retesting — maximising cost efficiency",
  },
  {
    offer: "AIR services — ongoing",
    benefit:
      "We serve as your permanent Authorized Indian Representative across all products and all schemes",
  },
  {
    offer: "KC-to-IS documentation mapping",
    benefit:
      "We identify exactly where KS and IS differ for your product — no unnecessary rework",
  },
  {
    offer: "Launch calendar alignment",
    benefit:
      "We align BIS registration timelines to Indian product launch schedules",
  },
  {
    offer: "FMCS audit preparation",
    benefit:
      "IS-specific mock audits for Korean factories — not KC or ISO audit formats",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
  },
  {
    offer: "Post-certification portfolio management",
    benefit:
      "Renewals, new model registrations, surveillance audits — managed as an ongoing programme",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinSouthKorea = () => {
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

export default BestandmosttrustedBIScertificationConsultantinSouthKorea;

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
                    Best and most trusted BIS certification Consultant in South
                    Korea
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
          South Korea and India signed one of Asia&apos;s most consequential trade
          deals in 2010 — yet Korean electronics, steel, and appliance brands are
          still losing Indian market share to competitors who secured BIS
          certification faster.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The India-Korea CEPA reduced import duties. It did not reduce BIS
          requirements. And for Korean manufacturers — from Suwon-based Samsung
          divisions to LG&apos;s Changwon appliance factories, from POSCO&apos;s Pohang
          steel operations to SK Hynix&apos;s semiconductor fabs — BIS certification
          remains the single most operationally demanding compliance requirement
          for the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The reason is volume. No country faces the sheer scale of BIS
          registration complexity that Korean electronics manufacturers do. Samsung
          alone launches dozens of product models annually in India — every new
          Galaxy variant, every new television series, every new home appliance
          model requires its own BIS CRS registration. LG&apos;s home appliance line —
          refrigerators, washing machines, air conditioners, dishwashers,
          microwaves — runs across hundreds of model variants, each requiring
          separate BIS tracking. A single delayed CRS registration means a product
          cannot legally launch in India on schedule, regardless of how much
          marketing investment sits behind it.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The KC Mark — Korea&apos;s mandatory national certification scheme — is not
          the problem. Korean manufacturers understand mandatory certification.
          The problem is that KC Mark has zero equivalence with BIS, and the BIS
          portal, IS standards, and KOLAS report acceptance logic operate on
          Indian regulatory terms that require an experienced Indian hand to
          navigate efficiently.
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
          , we have been managing BIS registrations for foreign manufacturers
          since 2016. We understand high-volume CRS registration pipelines, KOLAS
          lab report evaluation, and FMCS audit preparation for Korean factories.
          If your Korean company is selling — or wants to sell — in India, this
          page tells you exactly how we handle it.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for South Korean Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Korea&apos;s domestic market is sophisticated but saturated — and Korean
          conglomerates understood this before most. Samsung, LG, Hyundai, and
          POSCO did not invest billions in India because India was convenient.
          They invested because India is the world&apos;s most consequential long-term
          consumer market, and early positioning creates durable advantages.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          That thesis has proven correct. And the opportunity has only deepened.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Korean manufacturers beyond the conglomerates are prioritising BIS
          certification now:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Korean Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards body
          under the Ministry of Consumer Affairs. Products under mandatory Quality
          Control Orders (QCOs) cannot legally enter, be sold, or be distributed in
          India without valid BIS certification — regardless of KC Mark status, KS
          certification, or any other Korean compliance credential.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How Korea&apos;s certifications relate to BIS — precisely:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Korean Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. CRS — Compulsory Registration Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The dominant BIS scheme for Korean manufacturers — and the one that
          creates the most operational complexity given Korea&apos;s electronics product
          volume and launch velocity. No factory audit required — but BIS-recognized
          laboratory testing is mandatory for every registered product model.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. FMCS — Foreign Manufacturers Certification Scheme (ISI Mark)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For Korean manufacturers whose products fall under mandatory ISI Mark QCO
          categories — POSCO steel, LG Chem chemicals, battery products, and
          automotive components.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. BIS Scheme X</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For Korean industrial machinery and capital equipment manufacturers —
          expanding under mandatory QCOs.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification documents for South Korea companies
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          KOLAS report usability is evaluated per product before any testing is
          recommended. Sun Certifications India provides a customised document
          checklist after initial consultation — including KS-to-IS gap analysis.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (South Korea)</li>
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
          BIS Certification Process for South Korean Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Product Portfolio Assessment and Prioritisation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We map your product portfolio, launch priorities, and applicable BIS
          schemes before any application work begins.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 2 — Appoint an Authorized Indian Representative (AIR)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India can serve as your ongoing AIR across all
          products and schemes.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 3 — KOLAS Report Evaluation and Testing Strategy
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We assess existing KOLAS reports per product before recommending any
          retesting.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4 — Map existing KS technical files, KC certification documentation,
          and KOLAS test data against IS requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We identify exactly where KS and IS differ for your product — minimising
          unnecessary documentation rework.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 5 — BIS Application Filing</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We prepare and file complete applications through the BIS portal and
          manage all official correspondence.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 6 — BIS Factory Audit in Korea
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For ISI Mark and Scheme X certifications, BIS officials travel to the
          Korean manufacturing facility. We coordinate and prepare your team for
          the inspection.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7 — Licence Grant and Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants your certification and your
          products can legally enter the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Sun Certifications India is best and most trusted BIS consultant in
          South Korea
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Korean manufacturers need a BIS consultant who understands high-volume CRS
          registration pipelines, KOLAS report evaluation, and the operational
          reality of managing BIS compliance across a product portfolio that
          refreshes every 6–12 months.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Korean Manufacturers
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
          Korea&apos;s electronics dominance in India is real — and it is built
          entirely on BIS-registered products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Every Samsung Galaxy in an Indian pocket has a CRS registration behind
          it. Every LG refrigerator in an Indian kitchen carries an ISI Mark. Every
          POSCO steel coil in an Indian factory went through BIS. The conglomerates
          understood this early — and built their India market leadership in part
          by treating BIS compliance as a competitive tool rather than a compliance
          burden.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The same logic applies to every Korean manufacturer entering India today.
          A faster CRS registration means an earlier launch date. An earlier launch
          date means market share captured before the competitor. In India&apos;s
          electronics market — where Samsung and Chinese brands fight for every
          percentage point — BIS registration speed is not administrative. It is
          strategic.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Can we use our KC Mark test reports for BIS CRS registration?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          KC Mark test reports and KOLAS-accredited test reports are different
          documents. KC Mark testing certifies compliance with Korean Standards
          (KS) for the Korean market — these reports are not accepted by BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We have 50+ product models launching in India this year — how do we
          manage BIS registration at this scale?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This is exactly the operational challenge that distinguishes Korean
          electronics brands from manufacturers in other categories. Sun
          Certifications India manages high-volume CRS portfolios as a structured
          programme — not as individual applications.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Does the India-Korea CEPA reduce or eliminate BIS certification
          requirements?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. The CEPA reduces import duties on eligible Korean products — it has
          no effect on BIS mandatory certification requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can our Korean headquarters manage BIS without an India office?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes — and this is the standard operating model for most Korean
          manufacturers. BIS requires an Authorized Indian Representative (AIR) —
          a legally registered Indian entity — to file and manage applications on
          the Korean manufacturer&apos;s behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Samsung India and LG India already have BIS certifications — do Korean
          component suppliers to these companies also need separate BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          It depends on whether the Korean supplier is the declared manufacturer
          of a product sold in India.
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
