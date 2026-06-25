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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-vietnam";
const PAGE_PATH = "/best-and-most-trusted-bis-consultant-vietnam";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantVietnam.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantVietnam.webp";

const PAGE_TITLE =
  "Best and most trusted BIS certification Consultant in Vietnam – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Vietnam manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in Vietnam — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Vietnam, BIS certification Vietnam, FMCS certification Vietnam manufacturers, BIS registration Vietnam";

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
      name: "We are a Korean-owned factory in Vietnam — who applies for BIS, us (the Vietnamese entity) or our Korean parent company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Vietnamese legal manufacturing entity applies for BIS — not the Korean parent. BIS certification is tied to the factory where the product is physically manufactured.",
      },
    },
    {
      "@type": "Question",
      name: "AIFTA gives us preferential import duties into India — does it reduce or remove BIS requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The ASEAN-India Free Trade Agreement provides preferential tariff rates on Vietnamese-origin goods — it has no bearing on BIS mandatory certification requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Our Vietnamese factory makes products for a US brand that sells in India — who needs BIS, us or the US brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Vietnamese factory needs BIS — not the US brand's Indian operations.",
      },
    },
    {
      "@type": "Question",
      name: "Can our Vietnamese laboratory test reports (VILAS / VinaLAB) be used for BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. VILAS (Vietnam Laboratory Accreditation Scheme) accreditation is not currently recognized by BIS for any certification scheme — including CRS, FMCS, and Scheme X.",
      },
    },
    {
      "@type": "Question",
      name: "We manufacture garments and apparel in Vietnam for export to India — do we need BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apparel and readymade garments are not currently under BIS mandatory QCO requirements.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "India-Vietnam bilateral trade exceeded $15 billion in 2023, growing at 18% year-on-year — one of the fastest growth rates in India's ASEAN trade portfolio",
  "Vietnam is India's 5th largest ASEAN trade partner — and the gap with higher-ranked partners is closing quickly",
  "The ASEAN-India Free Trade Agreement (AIFTA) is in force — Vietnamese-origin goods benefit from preferential or zero import duties on thousands of tariff lines entering India",
  "Electronics and electrical products — Vietnam's dominant export category — are among the most heavily BIS-regulated product groups in India's mandatory QCO framework",
  "India's footwear market — one of the world's largest — is actively importing from Vietnamese factories in the Nike and Adidas supply chains, where BIS compliance is now a market access requirement",
];

const BIS_PRIORITY_POINTS = [
  "India's PLI scheme for electronics is attracting global brands to Indian manufacturing — but those same brands' Vietnamese supply chains need BIS for India-market products",
  "Indian retailers and e-commerce platforms — Flipkart, Amazon India, Reliance Retail — are increasingly requiring BIS certification as a vendor onboarding condition",
  "India's customs enforcement on electronics at JNPT Mumbai, Chennai, and Nhava Sheva is intensifying — unregistered CRS products are being detained with greater frequency",
  "Vietnamese furniture manufacturers supplying global brands are finding Indian buyers now requiring BIS documentation before placing orders",
];

const BIS_OVERVIEW_POINTS = [
  "QUACERT product certifications have no BIS standing. QUACERT (Vietnam Certification Centre) issues product conformity certificates for the Vietnamese market — these are not recognized by BIS and cannot be submitted as part of a BIS application.",
  "VILAS laboratory accreditation is not recognized for BIS submissions. Vietnam's national laboratory accreditation scheme (VILAS) is not currently on BIS's accepted mutual recognition list. Test reports from VILAS-accredited laboratories — including VinaLAB facilities — cannot be submitted for BIS CRS, FMCS, or Scheme X applications. All Vietnamese products require testing at BIS-recognized laboratories.",
  "ISO 9001 and brand-specific quality certifications help but do not replace BIS. Vietnamese factories in the Samsung, Nike, or Intel supply chains typically hold IATF, ISO 9001, or brand-specific quality audits. These demonstrate manufacturing quality maturity — useful context for BIS factory audits — but they certify compliance with international quality management systems, not with Indian Standards.",
  "The manufacturer holds BIS — not the brand. This is the most critical point for Vietnamese factories. If a Korean-invested entity in Bac Ninh manufactures electronics for export to India, that Vietnamese legal entity must hold the BIS registration — not Samsung Korea, not the Indian distributor. The AIR appointed in India must represent the Vietnamese manufacturing entity specifically.",
];

const FMCS_HOW_IT_WORKS = [
  "BIS officials travel to the Vietnamese manufacturing facility for an overseas factory audit",
  "Factory must demonstrate compliance with applicable IS standard",
  "AIR must be appointed in India before application",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "Deep knowledge of CRS, FMCS, and Scheme X requirements across Vietnam's top export categories",
  },
  {
    offer: "Foreign-invested factory expertise",
    benefit:
      "We have navigated Korean, Japanese, and Taiwanese parent-factory BIS coordination multiple times",
  },
  {
    offer: "AIR services",
    benefit:
      "We represent the Vietnamese manufacturing entity before BIS — no India presence required",
  },
  {
    offer: "VILAS report guidance",
    benefit:
      "We confirm upfront that VILAS reports are not accepted — avoiding wasted testing costs",
  },
  {
    offer: "IS-specific audit preparation",
    benefit:
      "Mock audits built around IS parameters — not ISO or brand-specific audit formats",
  },
  {
    offer: "Entity clarity",
    benefit:
      "We resolve the manufacturer-vs-brand-owner question before application — not during BIS queries",
  },
  {
    offer: "Dedicated project manager",
    benefit:
      "One contact across Vietnamese factory, overseas parent, and BIS — clear milestones",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
  },
  {
    offer: "Post-certification support",
    benefit:
      "Renewals, surveillance audits, and model change amendments handled proactively",
  },
];

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const TABLE_CLASS =
  "w-full min-w-[480px] border-collapse border border-gray-300 text-sm font-geist text-gray-600";
const TH_CLASS =
  "border border-gray-300 px-4 py-2 text-left font-semibold text-[#1e1e1e] bg-gray-50";
const TD_CLASS = "border border-gray-300 px-4 py-2 align-top";

const BestandmosttrustedBIScertificationConsultantinVietnam = () => {
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

export default BestandmosttrustedBIScertificationConsultantinVietnam;

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
                    Best and most trusted BIS certification Consultant in Vietnam
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
          Vietnam is no longer just a low-cost assembly hub.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Samsung builds more smartphones in Vietnam than anywhere else on earth.
          Intel&apos;s largest global assembly and test facility sits outside Ho Chi
          Minh City. LG manufactures home appliances in Hai Phong. Nike and Adidas
          run some of their highest-volume footwear factories in Binh Duong and
          Dong Nai. Vietnam&apos;s manufacturing identity has been transformed in a
          decade — from garment stitching to semiconductor packaging, from basic
          assembly to precision electronics.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          And Vietnam&apos;s exports to India are growing fast. But here is the
          compliance reality that catches Vietnamese factories — and their foreign
          parent companies — off guard: BIS certification is held by the
          manufacturer, not the brand owner.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          When a Samsung Vietnam entity manufactures electronics for the Indian
          market, BIS certification must be obtained by the Vietnamese legal
          manufacturer — not by Samsung Korea, not by the Indian importer, and not
          by the brand&apos;s Indian distributor. The same applies to every
          Korean-invested, Japanese-invested, Taiwanese-invested, or
          Chinese-invested factory in Vietnam producing goods destined for India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This manufacturing-entity vs. brand-owner distinction is the single most
          misunderstood aspect of BIS compliance for Vietnamese factories — and it
          is where costly delays and customs detentions originate.
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
          , we have navigated this exact complexity with foreign-invested Vietnamese
          factories across electronics, footwear, furniture, and industrial goods
          since 2016. We know how to coordinate BIS certification between the
          Vietnamese legal entity, the overseas parent company, and the Indian
          regulatory system — efficiently, and without the confusion that typically
          accompanies cross-jurisdictional certification processes.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for Vietnamese Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vietnam and India are among the world&apos;s fastest-growing trade
          relationships — driven not just by geography and ASEAN connectivity but by
          the structural complementarity of their manufacturing bases. Vietnam
          produces what India&apos;s growing middle class increasingly wants to buy.
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
          Why Vietnamese factories are prioritising BIS certification now:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Vietnamese Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold underline"
          >
            Bureau of Indian Standards
          </a>
          ) is India&apos;s national standards body
          under the Ministry of Consumer Affairs. Products in mandatory QCO
          categories cannot legally enter, be sold in, or be distributed within
          India without valid

            BIS certification

          — regardless of what certifications
          they carry in Vietnam or in the brand owner&apos;s home country.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          What Vietnamese manufacturers must understand about existing
          certifications:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            STAMEQ certification does not substitute for BIS. Vietnam&apos;s
            Directorate for Standards, Metrology and Quality (STAMEQ) administers
            Vietnam&apos;s national standards framework — including TCVN (Vietnamese
            National Standards). TCVN standards and BIS Indian Standards (IS
            numbers) are separate frameworks with no mutual recognition.
            STAMEQ-certified products still require separate{" "}
            <Link
              to={BIS_CERTIFICATE_PATH}
              className="text-blue-600 font-bold underline"
            >
              BIS certification
            </Link>{" "}
            for India.
          </li>
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Vietnamese Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. {" "}
          <Link to={CRS_PATH} className="font-bold underline">
            Compulsory Registration Scheme
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The most immediately relevant scheme for Vietnamese manufacturers —
          covering the electronics and IT products that dominate Vietnam&apos;s
          export profile. No factory audit required — but testing at a
          BIS-recognized laboratory is mandatory for every product model.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. {" "}
          <Link to={FMCS_PATH} className="font-bold underline">
  Foreign Manufacturers Certification Scheme (ISI Mark)
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          For Vietnamese manufacturers whose products fall under mandatory ISI Mark
          QCO categories.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2">How it works:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {FMCS_HOW_IT_WORKS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h3 className={SUB_HEADING_CLASS}>
          3. {" "}
          <Link to={SCHEME_X_PATH} className="font-bold underline">
             BIS Scheme X Certification
          </Link>
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For industrial machinery and capital equipment manufactured in Vietnam —
          expanding under new QCOs. BIS officials travel to the Vietnamese
          manufacturing facility for an overseas factory audit.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for manufacturers of Vietnam
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Product Assessment and Scheme Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We confirm whether your product falls under a mandatory QCO and identify
          the correct BIS scheme and IS standard.
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
          We prepare your technical documentation and align it with applicable
          Indian Standards requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4 — Identify the BIS-recognized laboratory for your product category
          and get testing done
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
          We file your application and manage all official correspondence with BIS
          on your behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 6 — BIS Factory Audit in Vietnam (Scheme X / FMCS)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials travel to your Vietnamese manufacturing facility. We
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
          Documents Required for BIS Certification in Vietnam
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Vietnam)</li>
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
            BIS consultant in Vietnam
          </Link>
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Vietnamese factories — whether locally owned or foreign-invested — need a
          BIS consultant who understands the manufacturer-vs-brand-owner complexity,
          VILAS lab report limitations, and the reality of coordinating
          certification across Hanoi, Seoul, Tokyo, and New Delhi simultaneously.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Vietnamese Manufacturers
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
          Vietnam&apos;s manufacturing ecosystem is one of the most sophisticated in
          Asia — and it is increasingly India-facing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Samsung smartphones assembled in Thai Nguyen, footwear stitched in Binh
          Duong for Nike, electronics packaged in Bac Ninh for the global market —
          these products are moving toward India in growing volumes. BIS
          certification is the compliance step that converts Vietnamese production
          capacity into legal Indian market access.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The foreign-invested factory question — who holds BIS when the
          manufacturer is Vietnamese but the brand is Korean, Japanese, or American
          — is not an obstacle. It is a coordination challenge that Sun
          Certifications India has resolved for multiple Vietnamese factories across
          multiple industries.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          We are a Korean-owned factory in Vietnam — who applies for BIS, us (the
          Vietnamese entity) or our Korean parent company?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Vietnamese legal manufacturing entity applies for BIS — not the Korean
          parent. BIS certification is tied to the factory where the product is
          physically manufactured.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          AIFTA gives us preferential import duties into India — does it reduce or
          remove BIS requirements?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. The ASEAN-India Free Trade Agreement provides preferential tariff
          rates on Vietnamese-origin goods — it has no bearing on BIS mandatory
          certification requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Our Vietnamese factory makes products for a US brand that sells in India
          — who needs BIS, us or the US brand?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your Vietnamese factory needs BIS — not the US brand&apos;s Indian
          operations.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can our Vietnamese laboratory test reports (VILAS / VinaLAB) be used for
          BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. VILAS (Vietnam Laboratory Accreditation Scheme) accreditation is not
          currently recognized by BIS for any certification scheme — including CRS,
          FMCS, and Scheme X.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We manufacture garments and apparel in Vietnam for export to India — do we
          need BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Apparel and readymade garments are not currently under BIS mandatory QCO
          requirements.
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
