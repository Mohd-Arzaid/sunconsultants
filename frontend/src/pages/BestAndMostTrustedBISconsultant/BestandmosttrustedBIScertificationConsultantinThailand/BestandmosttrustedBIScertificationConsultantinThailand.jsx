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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-thailand";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantThailand.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantThailand.webp";

const PAGE_TITLE =
  "Best and most trusted BIS Consultant in Thailand – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Thailand manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in Thailand — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Thailand, BIS certification Thailand, FMCS certification Thailand manufacturers, BIS registration Thailand";

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
      name: "Do Thai manufacturers need a legal entity or office in India to apply for BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You do not need an Indian office or local company. However, you must appoint an Authorized Indian Representative (AIR). Sun Certifications India provides AIR services, so Thai manufacturers can complete the entire BIS process without establishing any local presence in India.",
      },
    },
    {
      "@type": "Question",
      name: "Will our TISI certification be recognised by BIS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TISI certification is not directly equivalent to BIS and is not automatically accepted. However, holding TISI or ISO certification demonstrates a structured quality management system — which strengthens your factory audit readiness and documentation package. We advise on how to leverage your existing certifications effectively during the BIS process.",
      },
    },
    {
      "@type": "Question",
      name: "Will a BIS officer travel to Thailand for the factory audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for FMCS (ISI Mark) and Scheme X certifications, BIS officials conduct an overseas factory inspection at your Thai manufacturing facility. Sun Certifications India prepares your team thoroughly before the visit so there are no surprises on audit day.",
      },
    },
    {
      "@type": "Question",
      name: "Does the ASEAN-India FTA reduce or eliminate the need for BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The AIFTA reduces import duties on eligible Thai products but does not exempt them from mandatory BIS certification. Customs clearance and BIS compliance are separate requirements — both must be met.",
      },
    },
    {
      "@type": "Question",
      name: "Can one BIS licence cover multiple product models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, yes — multiple models within the same product family can be covered under a single BIS licence, subject to BIS approval. We advise on the most efficient licensing strategy upfront.",
      },
    },
  ],
};

const INDIA_PRIORITY_POINTS = [
  "The ASEAN-India Free Trade Agreement (AIFTA) is already in force — Thai goods benefit from reduced or zero import duties on thousands of product lines, making India cost-competitive for Thai exporters",
  "India's infrastructure boom is driving massive demand for construction materials, electrical equipment, and industrial machinery — areas where Thai manufacturers are globally competitive",
  "Thailand's position as a major hub for Japanese and Korean OEM manufacturing means many Thai factories already produce to international quality standards — making BIS compliance more achievable than manufacturers expect",
  "India's automotive sector — one of the largest in the world — is a major buyer of Thai-manufactured components, rubber parts, and precision assemblies",
  "The Indian government's PLI (Production Linked Incentive) schemes are drawing global supply chain investment, creating new procurement opportunities for foreign suppliers",
];

const BIS_OVERVIEW_POINTS = [
  "BIS certification is product-specific and scheme-specific — there is no single blanket approval for your company",
  "The mandatory product list is continuously expanding — categories that were unregulated two years ago may be mandatory today",
  "Foreign manufacturers cannot apply to BIS directly — you must appoint an Authorized Indian Representative (AIR) who acts as your official liaison with BIS in India",
  "For ISI Mark products, BIS conducts overseas factory audits — a BIS officer travels to your Thai manufacturing facility to verify compliance",
  "Products imported into India without valid BIS certification in regulated categories can be detained at customs, resulting in costly delays, penalties, or destruction of goods",
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
    offer: "Thai lab report evaluation",
    benefit:
      "We assess whether your existing TISI or accredited Thai lab reports are acceptable to BIS",
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

const BestandmosttrustedBIScertificationConsultantinThailand = () => {
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

export default BestandmosttrustedBIScertificationConsultantinThailand;

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
                    Best and most trusted BIS Consultant in Thailand
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
          Thailand and India share more than just geography — they share one of
          the most dynamic and fast-growing trade relationships in Asia. As a
          leading manufacturing hub for electronics, automotive components,
          rubber products, food processing machinery, and petrochemicals, Thailand
          is home to thousands of manufacturers who are actively looking to
          expand into new markets. India, with its 1.4 billion consumers and
          rapidly growing industrial base, is an increasingly attractive
          destination.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          But selling products in India is not as simple as finding a local
          distributor. India has a mandatory product certification framework
          governed by the Bureau of Indian Standards (BIS) — and for most
          regulated product categories, BIS certification is a legal requirement
          before your product can be imported, sold, or distributed anywhere in
          India.
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
          , we have been helping foreign manufacturers navigate India&apos;s BIS
          certification requirements since 2016. We understand the documentation
          expectations, the overseas factory audit process, and the specific
          challenges that Thai manufacturers face when entering the Indian
          regulatory system for the first time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are a manufacturer based in Thailand looking to access the Indian
          market, this page gives you everything you need — and shows you exactly
          how we make the process manageable.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Thailand-based manufacturers are prioritising India:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Thailand companies need to know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) is India&apos;s national standards body,
          established under the BIS Act, 2016, and operating under the Ministry
          of Consumer Affairs. Every product regulated under a Quality Control
          Order (QCO) must carry a valid BIS certification before it can be
          legally sold or imported into India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Key facts every Thai manufacturer must understand:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Thailand Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. FMCS — Foreign Manufacturers Certification Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The primary route for overseas manufacturers seeking the ISI Mark —
          India&apos;s most recognised quality certification.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> Steel products,
          electrical equipment, automotive components, rubber products,
          chemicals, and all other mandatory ISI Mark categories.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. CRS — Compulsory Registration Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics and IT products — no factory audit required, but product
          testing at a BIS-recognized laboratory is mandatory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> LED lights, power
          adapters, laptops, mobile accessories, set-top boxes, wireless chargers,
          and 70+ other electronics categories.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. BIS Scheme X</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A mandatory scheme for industrial machinery and electrical equipment —
          progressively expanded to cover a wide range of capital goods.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-semibold">Applicable to:</span> Food processing
          equipment, packing machines, industrial motors, weaving machines,
          embroidery machines, and more — product categories where Thai
          manufacturers are globally active.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification in Thailand
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Document requirements vary by scheme and product category. Sun
          Certifications India provides a customised checklist for your specific
          product after the initial consultation.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Thailand)</li>
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
          BIS Certification Process for Thailand Manufacturers
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
          Step 6 — BIS officer visits your manufacturing facility in Thailand
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For FMCS and Scheme X, we coordinate and prepare your team for the BIS
          factory inspection at your Thai facility.
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
          Why Sun Certifications India is best and most trusted BIS consultant in
          Thailand
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Thai manufacturers entering the Indian market need a consultant who
          understands both the regulatory process and the practical realities of
          managing certification from overseas. That is exactly what Sun
          Certifications India delivers.
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
          India is one of the most significant market opportunities available to
          Thai manufacturers right now — and the ASEAN-India trade relationship
          makes it more accessible than ever. But BIS certification is the gateway,
          and navigating the FMCS process, overseas factory audits, and Indian
          Standard documentation requirements from Thailand requires experienced
          local support.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India has been managing BIS certification for foreign
          manufacturers since 2016. We know what BIS auditors look for, we know how
          to prepare a factory in another country for an overseas inspection, and
          we know how to keep the process moving without unnecessary delays.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions of Thailand Companies about BIS Certification
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Do Thai manufacturers need a legal entity or office in India to apply
          for BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. You do not need an Indian office or local company. However, you must
          appoint an Authorized Indian Representative (AIR). Sun Certifications
          India provides AIR services, so Thai manufacturers can complete the
          entire BIS process without establishing any local presence in India.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Will our TISI certification be recognised by BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          TISI certification is not directly equivalent to BIS and is not
          automatically accepted. However, holding TISI or ISO certification
          demonstrates a structured quality management system — which strengthens
          your factory audit readiness and documentation package. We advise on how
          to leverage your existing certifications effectively during the BIS
          process.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Will a BIS officer travel to Thailand for the factory audit?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes — for FMCS (ISI Mark) and Scheme X certifications, BIS officials
          conduct an overseas factory inspection at your Thai manufacturing
          facility. Sun Certifications India prepares your team thoroughly before
          the visit so there are no surprises on audit day.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Does the ASEAN-India FTA reduce or eliminate the need for BIS
          certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. The AIFTA reduces import duties on eligible Thai products but does
          not exempt them from mandatory BIS certification. Customs clearance and
          BIS compliance are separate requirements — both must be met.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can one BIS licence cover multiple product models?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          In many cases, yes — multiple models within the same product family can
          be covered under a single BIS licence, subject to BIS approval. We advise
          on the most efficient licensing strategy upfront.
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
