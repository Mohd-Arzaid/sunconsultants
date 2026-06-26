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
  LANG_PAGE_BY_ENGLISH_PATH,
  SCHEME_X_PATH,
} from "@/pages/BestAndMostTrustedBISconsultant/consultantCountryInterlinks";
import ConsultantCountryInterlinksGrid from "@/pages/BestAndMostTrustedBISconsultant/ConsultantCountryInterlinksGrid";
import ConsultantIntroButtonRow from "@/pages/BestAndMostTrustedBISconsultant/ConsultantIntroButtonRow";

const CANONICAL_URL =
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-italy";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-italy";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantinItaly.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantinItaly.webp";

const PAGE_TITLE =
  "Best and most trusted BIS certification Consultant in Italy – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Italy manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in Italy — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Italy, BIS certification Italy, FMCS certification Italy manufacturers, BIS registration Italy";

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
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
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
      name: "We have been selling textile machinery to India for 15 years — why do we suddenly need BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India's Bureau of Indian Standards has been progressively expanding its mandatory Quality Control Orders (QCOs) under BIS Certification to cover industrial machinery and capital equipment etc. Products that crossed Indian customs freely under earlier regulations now require valid BIS certificate. This is not retroactive for installed equipment, but applies to all new shipments in regulated categories.",
      },
    },
    {
      "@type": "Question",
      name: "Does our CE marking cover BIS Scheme X requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — CE marking has no legal recognition in India and provides no exemption from BIS requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Our ceramic tile equipment has shipped to India for years without any certification. Has something changed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BIS QCOs for industrial equipment under BIS certification have been expanding progressively.",
      },
    },
    {
      "@type": "Question",
      name: "How long does BIS certification take for an Italian manufacturer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From complete documentation submission, BIS certification typically takes 90 to 120 working days — subject to BIS processing timelines and overseas audit scheduling. The overseas factory audit scheduling (BIS officers travelling to Italy) can add lead time.",
      },
    },
    {
      "@type": "Question",
      name: "Can our Accredia-accredited test reports be used for BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accredia-accredited laboratory reports may be accepted for CRS registrations (electronics and IT products) under mutual recognition arrangements. For BIS Scheme X machinery, Accredia lab reports cannot be submitted as a substitute for IS-standard testing — BIS-recognized laboratory testing per the applicable IS number is required.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "Bilateral trade exceeded €14 billion in 2023 — and is growing",
  "Italy is among India's top 10 EU trade partners, with machinery consistently the dominant export category",
  "Italian machinery exports to India have grown 25% in the past two years — driven by India's textile sector expansion, construction boom, and FMCG industry growth",
  "The India-EU FTA is under active negotiation — when concluded, it will reduce import duties on Italian goods further, making India even more commercially attractive for Italian exporters",
];

const INDIA_PRIORITY_POINTS = [
  "India's textile sector — centred in Gujarat, Punjab, and Tamil Nadu — is one of the largest in the world and continues to invest heavily in Italian spinning, weaving, and finishing equipment",
  "India's ceramic tile industry, led by clusters in Morbi (Gujarat), is the world's second-largest producer — and Italian kiln, press, and glazing equipment is the technology standard",
  "India's FMCG sector — growing at 10%+ annually — runs on packaging and processing lines where Italian engineering brands set the benchmark",
  "The Indian government's PLI (Production Linked Incentive) schemes are injecting capital into textiles, food processing, and manufacturing — directly benefiting Italian equipment suppliers",
];

const BIS_OVERVIEW_POINTS = [
  "IMQ certification is not recognised by BIS. Italy's IMQ safety mark covers Italian and EU market requirements. BIS certifies products against Indian Standards (IS numbers) — a separate, India-specific framework.",
  "Accredia accreditation is partially useful. Accredia-accredited laboratory test reports may be considered for CRS (electronics/IT product) registrations under mutual recognition arrangements. However, for BIS certification, Accredia lab reports are not a substitute — testing must be conducted at a BIS-recognized laboratory per the applicable IS standard.",
  "UNI standards ≠ Indian Standards. Italian products certified to UNI norms are not automatically compliant with IS specifications. BIS audit preparation must be rebuilt around the applicable IS number for your product.",
  "Italian manufacturers cannot apply directly. Italian companies must appoint an Authorized Indian Representative (AIR) — a legally registered Indian entity that acts as official liaison with BIS, signs all applications, and receives all BIS correspondence.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience (since 2016)",
    benefit:
      "Deep knowledge of BIS QCO expansions — we track every new notification",
  },
  {
    offer: "AIR services",
    benefit:
      "We serve as your Authorized Indian Representative — no India office required",
  },
  {
    offer: "CE-to-IS gap analysis",
    benefit:
      "We map your existing CE Technical Files against IS requirements — minimising rework",
  },
  {
    offer: "BIS certification specialisation",
    benefit:
      "We have prepared overseas manufacturers for BIS certification factory inspections",
  },
  {
    offer: "Accredia report evaluation",
    benefit:
      "We assess whether existing Accredia lab reports are usable for CRS — before you retest",
  },
  {
    offer: "Dedicated project manager",
    benefit:
      "One contact, clear milestones, no ambiguity — from first consultation to certificate",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO and more — all in-house",
  },
  {
    offer: "Post-certification support",
    benefit:
      "Renewals, surveillance audits, and product change amendments handled proactively",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinItaly = () => {
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

export default BestandmosttrustedBIScertificationConsultantinItaly;

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
                    Best and most trusted BIS certification Consultant in Italy
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

        <ConsultantIntroButtonRow />

        <p className="text-gray-600 text-base font-geist mb-4">
          The mills of Surat, Ludhiana, and Coimbatore run on Marzoli spinning
          frames and Savio winding machines. The floors of Indian homes, hotels,
          and metro stations are shaped by Italian ceramic tile equipment. The
          FMCG products on Indian supermarket shelves move through IMA and Coesia
          packaging lines. Italian machinery is not a newcomer to India — it is
          embedded in India&apos;s industrial infrastructure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Which is precisely why BIS Certification matters so urgently for Italian
          manufacturers right now.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          is expanding its mandatory
          Quality Control Orders (QCOs) to cover industrial machinery and capital
          equipment under BIS Schemes. For Italian textile machinery brands,
          ceramic equipment manufacturers, and packaging line suppliers who have
          shipped to India for 10, 15, even 20 years without any certification
          requirement — the rules have changed. Products that crossed Indian
          customs freely last year may now require valid BIS License before they
          can legally enter India.
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
          , we have been tracking these QCO expansions since 2016. We work with
          foreign manufacturers — including Italian machinery companies navigating
          BIS certification — to get certification done efficiently, without
          disrupting existing supply contracts or customer relationships.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If your Italian business sells to India and you have not yet checked your{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 font-bold underline"
          >
            BIS certificate
          </Link>{" "}
          requirement, this page is where that process begins.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for Italian Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India and Italy have built a trade relationship on complementary
          strengths — Italy&apos;s design and engineering excellence meeting
          India&apos;s manufacturing scale and growth appetite. That relationship
          is deepening structurally, not just commercially.
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
          Why Italian manufacturers are prioritising India:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Italian Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards body,
          operating under the Ministry of Consumer Affairs. Every product regulated
          under a mandatory Quality Control Order (QCO) must carry valid BIS
          certificate before it can legally be imported, sold, or installed in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          What Italian manufacturers must understand about their existing
          certifications:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            CE marking does not apply in India. The CE mark is a European
            Economic Area requirement — it has no legal recognition or equivalent
            standing in India. Indian customs does not treat CE marking as a
            substitute for  BIS certification.
          </li>
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Italian Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={SCHEME_X_PATH} className="font-bold underline">
            1. BIS Scheme X  
          </Link>
           {""} The Primary Scheme for Italian Machinery Exporters
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X is the mandatory certification route for industrial machinery
          and electrical equipment exported to India. It is the scheme that
          Italian manufacturers are encountering most urgently as QCOs expand.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. {" "}
          <Link to={FMCS_PATH} className="font-bold underline">
          Foreign Manufacturers Certification Scheme (ISI Mark)
          </Link>

          
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For Italian manufacturers whose products fall under mandatory ISI Mark
          categories — industrial goods, chemicals, steel products, and consumer
          goods under QCOs.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link to={CRS_PATH} className="font-bold underline">
            3. CRS — Compulsory Registration Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics and IT products — less commonly applicable to Italian
          manufacturers, but relevant for Italian automation control panels,
          embedded electronics, and electrical switchgear.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Italian Manufacturers
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
          Step 6 — BIS Factory Audit in Italy (Scheme X / FMCS)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials travel to your Italian manufacturing facility. We
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
          Documents Required for BIS Certification in Italy
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Italy)</li>
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
          Why Sun Certifications India is best{" "}
          <Link
            to={LANG_PAGE_BY_ENGLISH_PATH[PAGE_PATH]}
            className="font-bold underline"
          >
            BIS consultant in Italy
          </Link>
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Italian manufacturers work to exacting engineering standards and expect
          the same precision from their service partners. Sun Certifications
          India brings the same structured, process-driven approach to BIS
          certification.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Italian Manufacturers
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
          Italian machinery is woven into the fabric of Indian manufacturing —
          literally and figuratively. The spinning frames in Surat&apos;s textile
          mills, the tile presses in Morbi&apos;s ceramic clusters, the packaging
          lines in Mumbai&apos;s FMCG plants — Italian engineering has earned its
          place in India&apos;s industrial story through decades of performance
          and reliability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is not a threat to that relationship. It is a
          regulatory formality — one that Sun Certifications India can handle
          efficiently and completely, so Italian manufacturers stay on the right
          side of Indian customs without disrupting the supply relationships they
          have built over years.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          We have been selling textile machinery to India for 15 years — why do we
          suddenly need BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s Bureau of Indian Standards has been progressively expanding
          its mandatory Quality Control Orders (QCOs) under BIS Certification to
          cover industrial machinery and capital equipment etc. Products that
          crossed Indian customs freely under earlier regulations now require
          valid BIS certificate. This is not retroactive for installed equipment,
          but applies to all new shipments in regulated categories.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Does our CE marking cover BIS Scheme X requirements?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No — CE marking has no legal recognition in India and provides no
          exemption from BIS requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Our ceramic tile equipment has shipped to India for years without any
          certification. Has something changed?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS QCOs for industrial equipment under BIS certification have
          been expanding progressively.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How long does BIS certification take for an Italian manufacturer?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          From complete documentation submission, BIS certification typically
          takes 90 to 120 working days — subject to BIS processing timelines and
          overseas audit scheduling. The overseas factory audit scheduling (BIS
          officers travelling to Italy) can add lead time.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can our Accredia-accredited test reports be used for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Accredia-accredited laboratory reports may be accepted for CRS
          registrations (electronics and IT products) under mutual recognition
          arrangements. For BIS Scheme X machinery, Accredia lab reports cannot be
          submitted as a substitute for IS-standard testing — BIS-recognized
          laboratory testing per the applicable IS number is required.
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
