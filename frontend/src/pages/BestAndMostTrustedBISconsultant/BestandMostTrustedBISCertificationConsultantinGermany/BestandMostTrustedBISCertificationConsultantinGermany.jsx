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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-germany";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-germany";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BISConsultantinGermany.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BISConsultantinGermany.webp";

const PAGE_TITLE =
  "Best and Most Trusted BIS Certification Consultant in Germany – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for German manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc. — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Germany, BIS certification Germany, FMCS certification German manufacturers, BIS registration Germany";

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
      name: "Do German manufacturers need a local entity in India to apply for BIS License?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You do not need a legal entity or office in India. However, you must appoint an Authorized Indian Representative (AIR). Sun Certifications India provides AIR services, so German companies can apply for BIS certification without setting up any local presence.",
      },
    },
    {
      "@type": "Question",
      name: "Will our CE mark or TÜV certificate be accepted by BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CE marking and TÜV certificates are not directly equivalent to BIS certification and are not automatically accepted.",
      },
    },
    {
      "@type": "Question",
      name: "Will a BIS officer actually travel to our factory in Germany?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for FMCS (ISI Mark) certification, BIS officials conduct an overseas factory audit at your German manufacturing facility. This is a standard part of the FMCS process. Sun Certifications India prepares you thoroughly for this visit so there are no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How much does BIS certification cost for a German manufacturer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total costs include BIS government fees, laboratory testing charges, and consultancy fees. The overall investment varies by product category and applicable scheme. We provide a detailed cost estimate after the initial product assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Can one BIS licence cover multiple product models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, a single BIS licence can cover multiple models within the same product family, subject to BIS approval.",
      },
    },
  ],
};

const INDIA_PRIORITY_POINTS = [
  "India's manufacturing sector is expanding rapidly under the Production Linked Incentive (PLI) schemes, creating demand for high-quality machinery, components, and raw materials",
  "The India-EU Free Trade Agreement (FTA) negotiations are advancing — early market entry positions German brands ahead of the curve",
  "India's growing middle class is driving demand for premium European-quality consumer electronics, appliances, and automotive components",
  "Indian industries are actively upgrading their supply chains and sourcing from Germany for precision engineering, industrial machinery, and specialty chemicals",
  "The Make in India initiative is attracting German OEMs and Tier-1 suppliers to set up or expand operations",
];

const BIS_OVERVIEW_POINTS = [
  "The mandatory product list is continuously expanding through new QCOs — what was optional two years ago may be mandatory today",
  "Foreign manufacturers cannot apply directly — they must appoint an Authorized Indian Representative (AIR) who acts as the official liaison with BIS on their behalf",
  "BIS conducts overseas factory audits for foreign manufacturers under the FMCS scheme — a BIS officer travels to your German facility to verify compliance",
  "Products imported without valid BIS License can be detained at Indian customs, leading to costly delays and potential rejection",
];

const SCHEME_ROWS = [
  {
    productType: "Industrial goods / ISI Mark products",
    scheme: "FMCS",
    audit: "Yes (overseas)",
  },
  {
    productType: "Electronics & IT products",
    scheme: "CRS",
    audit: "No",
  },
  {
    productType: "Machinery & capital equipment",
    scheme: "Scheme X",
    audit: "Yes",
  },
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience (since 2016)",
    benefit:
      "Deep knowledge of IS standards, QCOs, and BIS procedures — not generalist consultants",
  },
  {
    offer: "AIR services included",
    benefit:
      "We serve as your Authorized Indian Representative — one less entity to manage",
  },
  {
    offer: "FMCS audit preparation",
    benefit:
      "We have prepared multiple foreign manufacturers for overseas BIS inspections",
  },
  {
    offer: "European lab report evaluation",
    benefit:
      "We assess whether your existing DAkkS / TÜV test reports can be accepted by BIS",
  },
  {
    offer: "Dedicated project manager",
    benefit: "One point of contact from first consultation to licence grant",
  },
  {
    offer: "Transparent pricing",
    benefit: "Fixed scope, no hidden charges, clear milestones",
  },
  {
    offer: "Post-certification support",
    benefit: "Renewals, surveillance audits, and amendments handled proactively",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandMostTrustedBISCertificationConsultantinGermany = () => {
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

export default BestandMostTrustedBISCertificationConsultantinGermany;

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
                    Best and Most Trusted BIS Certification Consultant in Germany
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
          Germany is one of India&apos;s most important trade partners in Europe —
          and the relationship is only growing stronger. With bilateral trade
          exceeding $30 billion annually and India emerging as one of the
          fastest-growing consumer markets in the world, German manufacturers
          across engineering, automotive, electronics, chemicals, and machinery
          are increasingly looking to establish a serious presence in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          But entering the Indian market is not as simple as shipping your
          products and finding a distributor. India has a mandatory product
          certification regime governed by the{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS)
          — and for most regulated product categories, BIS certification is a
          legal prerequisite before your product can be imported, sold, or
          distributed in India.
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
          , we have been helping foreign manufacturers — including a growing
          number of German companies — navigate India&apos;s BIS certification
          requirements since 2016. We understand the documentation standards, the
          audit process, and the specific challenges that European manufacturers
          face when dealing with Indian regulatory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are a German manufacturer looking to enter the Indian market,
          here you get everything you need to know — and how we can make the
          process straightforward.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for German Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          India is no longer just an emerging market. It is the world&apos;s most
          populous country, the fifth-largest economy globally, and one of the
          fastest-growing consumer bases for industrial goods, electronics,
          machinery, and specialty chemicals — all categories where German
          manufacturers hold a strong global reputation.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Why German companies are prioritising India right now:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What German Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards
          body, established under the BIS Act, 2016, and operating under the
          Ministry of Consumer Affairs. Every product that falls under a mandatory
          Quality Control Order (QCO) must carry a valid BIS certificate before
          it can be legally sold or imported into India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Key facts for German manufacturers:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <Link
              to={BIS_CERTIFICATE_PATH}
              className="text-blue-600 hover:underline"
            >
              BIS certification
            </Link>
            {" is product-specific and scheme-specific — not a single blanket approval"}
          </li>
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For German manufacturers who are used to CE marking, TÜV certification,
          or ISO standards, it is important to understand that BIS operates
          independently — CE marks and TÜV certificates are not automatically
          accepted as equivalents, though test reports from accredited European
          labs may be accepted under mutual recognition in some cases.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to German Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Depending on your product category, one or more of the following BIS
          schemes will apply:
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link
            to={FMCS_PATH}
            className="hover:underline"
          >
            1. FMCS — Foreign Manufacturers Certification Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The primary scheme for overseas manufacturers seeking the ISI Mark for
          their products sold in India.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> Most industrial
          and consumer goods categories under mandatory ISI Mark QCOs — steel
          products, electrical equipment, chemicals, automotive components, and
          more.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link
            to={CRS_PATH}
            className="hover:underline"
          >
            2. CRS — Compulsory Registration Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics and IT products — no factory audit required, but product
          testing at a BIS-recognized lab is mandatory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> Laptops, LED
          lights, power banks, adapters, set-top boxes, wireless devices, and
          70+ other electronics categories.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          <Link
            to={SCHEME_X_PATH}
            className="hover:underline"
          >
            3. BIS Scheme X
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For industrial machinery and electrical equipment — a growing mandatory
          scheme covering capital goods.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> Weaving machines,
          embroidery machines, packing equipment, industrial motors, gear systems,
          and more — categories where German engineering brands are highly active.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>Product Type</th>
                <th className={TH_CLASS}>Applicable Scheme</th>
                <th className={TH_CLASS}>Factory Audit Required</th>
              </tr>
            </thead>
            <tbody>
              {SCHEME_ROWS.map((row) => (
                <tr key={row.productType}>
                  <td className={TD_CLASS}>{row.productType}</td>
                  <td className={TD_CLASS}>{row.scheme}</td>
                  <td className={TD_CLASS}>{row.audit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Germany)</li>
          <li>
            Product technical file — specifications, drawings, bill of materials
          </li>
          <li>Test reports from BIS-approved laboratory</li>
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
          BIS Certification Process for German Manufacturers
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
          Step 6 — BIS officer visits your manufacturing facility in Germany
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For FMCS and Scheme X, we coordinate and prepare your team for the BIS
          factory inspection at your German facility.
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
          Why Sun Certifications India is best and most trusted{" "}
          <Link
            to={LANG_PAGE_BY_ENGLISH_PATH[PAGE_PATH]}
            className="hover:underline"
          >
            BIS consultant in Germany
          </Link>
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          German manufacturers are accustomed to precision, process discipline,
          and clear accountability. That is exactly how we operate.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>What It Means for You</th>
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
          India represents a significant and growing opportunity for German
          manufacturers — but regulatory compliance is the gateway. BIS
          certification is not optional for most product categories, and
          attempting to navigate the FMCS process, overseas factory audits, and
          Indian Standard documentation requirements without experienced local
          support leads to delays, rejections, and unnecessary costs.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India has been doing this work since 2016. We
          understand both sides — the documentation discipline that German
          manufacturers already bring to the table, and the specific procedural
          expectations of BIS. Our job is to bridge that gap efficiently, without
          unnecessary back-and-forth, and with complete transparency at every
          stage.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Do German manufacturers need a local entity in India to apply for BIS
          License?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. You do not need a legal entity or office in India. However, you
          must appoint an Authorized Indian Representative (AIR). Sun
          Certifications India provides AIR services, so German companies can
          apply for BIS certification without setting up any local presence.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Will our CE mark or TÜV certificate be accepted by BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          CE marking and TÜV certificates are not directly equivalent to BIS
          certification and are not automatically accepted.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Will a BIS officer actually travel to our factory in Germany?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes — for FMCS (ISI Mark) certification, BIS officials conduct an
          overseas factory audit at your German manufacturing facility. This is a
          standard part of the FMCS process. Sun Certifications India prepares
          you thoroughly for this visit so there are no surprises.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How much does BIS certification cost for a German manufacturer?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Total costs include BIS government fees, laboratory testing charges,
          and consultancy fees. The overall investment varies by product category
          and applicable scheme. We provide a detailed cost estimate after the
          initial product assessment.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can one BIS licence cover multiple product models?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In many cases, a single BIS licence can cover multiple models within
          the same product family, subject to BIS approval.
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
