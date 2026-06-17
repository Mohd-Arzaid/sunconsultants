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
  "https://bis-certifications.com/best-and-most-trusted-bis-consultant-spain";
const PAGE_IMAGE_SRC =
  "/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSpain.webp";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/BestandMostTrustedBISCertificationConsultant/BestBISConsultantSpain.webp";

const PAGE_TITLE =
  "Best and most trusted BIS certification Consultant in Spain – Sun Certifications India";
const META_DESCRIPTION =
  "BIS certification for Spain manufacturers made simple. Sun Certifications India handles FMCS License, CRS registration etc in Spain — including AIR services & factory audit preparation.";
const META_KEYWORDS =
  "BIS consultant in Spain, BIS certification Spain, FMCS certification Spain manufacturers, BIS registration Spain";

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
      name: "We have CE marking and AENOR certification — do we still need separate BIS certification for India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, without exception. CE marking certifies compliance with EU directives for the European market. AENOR certifies compliance with UNE standards for the Spanish and broader European market. Neither has any legal standing in India. BIS certifies compliance with Indian Standards (IS numbers) — an independent national framework.",
      },
    },
    {
      "@type": "Question",
      name: "Siemens Gamesa has wind operations in both Spain and India — how does BIS apply to Spanish-manufactured components shipped to India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wind turbine components and electrical generation equipment fall under BIS Scheme X as mandatory certification categories expand.",
      },
    },
    {
      "@type": "Question",
      name: "Can our ENAC-accredited laboratory test reports be used for BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For CRS registrations (electronics and electrical products), ENAC-accredited laboratory reports may be considered under mutual recognition. For FMCS and Scheme X applications, ENAC reports are not a substitute for IS-standard testing at BIS-recognized laboratories.",
      },
    },
    {
      "@type": "Question",
      name: "Our ceramic sanitary ware (Roca-style) is CE marked and sold across Europe — why does India need separate certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "India's BIS mandatory standards for ceramic sanitary ware are based on IS specifications — not European EN standards. The technical parameters, test methods, and marking requirements differ between CE and BIS.",
      },
    },
    {
      "@type": "Question",
      name: "We are a Spanish chemical manufacturer — do our REACH-compliant products need BIS in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "REACH compliance is a European Union chemical regulation with no equivalence or recognition in India. India's BIS and other regulatory frameworks (like Ministry of Chemicals QCOs) govern chemical products in India independently.",
      },
    },
  ],
};

const TRADE_FACTS = [
  "Spain-India bilateral trade reached €5.8 billion in 2023 — growing 12% year-on-year and accelerating",
  "Spain is among India's top 15 EU trade partners, with machinery, automotive components, and chemicals as the dominant export categories",
  "Siemens Gamesa — Spanish-headquartered — is one of India's largest wind energy suppliers, with manufacturing partnerships across Gujarat and Tamil Nadu",
  "Gestamp operates 4 manufacturing plants in India supplying body components to Maruti Suzuki, Hyundai, and Tata Motors — drawing heavily on Spanish engineering and supply chains",
  "The India-EU FTA, under active negotiation, is expected to significantly reduce import duties on Spanish goods — making now the right time to establish BIS compliance ahead of the tariff reduction window",
];

const INDIA_PRIORITY_POINTS = [
  "India's renewable energy target of 500 GW by 2030 is creating sustained demand for wind turbine components, solar mounting structures, and electrical infrastructure — all categories where Spanish engineering is globally competitive",
  "India's automotive sector — the third-largest in the world — is actively sourcing Spanish-origin stampings, mirror systems, seating components, and electronic modules through Gestamp, Ficosa, and Grupo Antolin India operations",
  "India's ceramics and tiles market — second only to China globally — presents direct competition and partnership opportunities for Spanish ceramic equipment and tile manufacturers; Porcelanosa and Roca have demonstrated that Spanish ceramic brands command premium positioning in India",
  "India's pharmaceutical and chemical sector is sourcing Spanish specialty chemicals and process equipment at growing volumes",
  "Inditex's India sourcing and retail operations create upstream supply chain demand for accessories, packaging, and textile inputs from Spanish suppliers",
];

const BIS_OVERVIEW_POINTS = [
  "CE marking is not recognised by BIS. Spain's primary product compliance mechanism — CE marking under EU directives — has no legal standing in India. Indian customs does not treat CE as a substitute for BIS, and BIS auditors do not accept CE Technical Files as IS-standard compliance evidence. CE marking certifies fitness for the European market; BIS certifies fitness for the Indian market. They are parallel, independent systems.",
  "AENOR certification has no BIS equivalence. Spain's Asociación Española de Normalización (UNE) standards and AENOR product certifications — widely recognised across Europe and Latin America — are not recognised by BIS. Products certified by AENOR must still obtain separate BIS certification for India.",
  "ENAC-accredited laboratory reports have limited applicability. Spain's national accreditation body ENAC (Entidad Nacional de Acreditación) accredits laboratories to ISO 17025. For CRS (electronics) registrations, ENAC-accredited lab reports may be considered under mutual recognition arrangements — Sun Certifications India evaluates this per product. For FMCS and Scheme X, BIS-recognized laboratory testing per the applicable IS standard is required regardless of ENAC accreditation.",
  "UNE standards ≠ Indian Standards. Spanish products manufactured and tested to UNE norms must have their technical documentation rebuilt around the applicable IS number for BIS purposes. The gap analysis between UNE and IS standards is a critical early step — one that Sun Certifications India conducts for every Spanish manufacturer we work with.",
  "Foreign manufacturers cannot apply to BIS directly. Spanish companies must appoint an Authorized Indian Representative (AIR) — a legally registered Indian entity that files the BIS application, signs all documents, and manages all correspondence with BIS on the Spanish manufacturer's behalf.",
];

const BENEFITS_ROWS = [
  {
    offer: "10+ years of BIS experience",
    benefit:
      "Deep knowledge of IS standards, QCO updates, and scheme-specific requirements across Spain's top export categories",
  },
  {
    offer: "AIR services",
    benefit:
      "We serve as your Authorized Indian Representative — no India office required",
  },
  {
    offer: "UNE-to-IS gap analysis",
    benefit:
      "We map CE Technical Files and AENOR documentation against IS requirements — minimising documentation rework",
  },
  {
    offer: "ENAC report evaluation",
    benefit:
      "We confirm per product whether ENAC-accredited lab reports are usable — before you retest",
  },
  {
    offer: "Scheme X specialisation",
    benefit:
      "Wind energy components, food machinery, industrial equipment — we track every Scheme X QCO expansion",
  },
  {
    offer: "Automotive compliance expertise",
    benefit:
      "IATF 16949 documentation is a strong foundation — we build the IS-specific layer on top",
  },
  {
    offer: "Dedicated project manager",
    benefit:
      "One contact from first consultation to certificate — clear milestones, no handoffs",
  },
  {
    offer: "Multi-ministry compliance",
    benefit: "BIS + LMPC + WPC + CDSCO + PESO — all in-house",
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

const BestandmosttrustedBIScertificationConsultantinSpain = () => {
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

export default BestandmosttrustedBIScertificationConsultantinSpain;

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
                    Best and most trusted BIS certification Consultant in Spain
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
          Spain is not the first European country that comes to mind when Indian
          buyers think about industrial imports — but it should be.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Inditex (Zara&apos;s parent) sources and supplies fashion accessories
          globally from Spain. Gestamp manufactures automotive stampings for Tata,
          Maruti, and Hyundai plants across India. Gamesa — now Siemens Gamesa —
          builds wind turbine components in Anoye and Baroda for India&apos;s
          renewable energy sector. Roca dominates India&apos;s premium bathroom
          fittings market from its Spanish manufacturing base. Ficosa supplies
          automotive mirrors and camera systems to Indian OEMs. Spain&apos;s
          industrial footprint in India is deeper, more specific, and more
          technically sophisticated than most people realise.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          What Spanish manufacturers are now discovering — some mid-shipment, some
          mid-contract — is that India&apos;s{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS)
          mandatory certification regime is expanding rapidly. Products that
          entered India freely under earlier import conditions now require valid
          BIS certification before they can legally clear Indian customs. For
          Spanish manufacturers in automotive components, renewable energy
          equipment, ceramics, chemicals, and machinery, the compliance landscape
          has shifted.
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
          , we have been working with European manufacturers navigating BIS since
          2016. We understand how Spanish CE-marked, AENOR-certified products
          relate to BIS Indian Standards — and we know exactly where the gaps are.
          If your Spanish business exports to India, this page is where your BIS
          compliance process begins.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why India — The Opportunity for Spanish Manufacturers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Spain and India have historically undertraded relative to the size of
          both economies. That is changing — driven by India&apos;s infrastructure
          expansion, renewable energy ambitions, automotive sector growth, and a
          consumer market that is increasingly receptive to European quality
          positioning.
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
          Why Spanish manufacturers are prioritising India:
        </h2>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {INDIA_PRIORITY_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Overview — What Spanish Manufacturers Need to Know
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS (Bureau of Indian Standards) operates under India&apos;s Ministry of
          Consumer Affairs and certifies products against Indian Standards (IS
          numbers) — India&apos;s own national technical standards framework. Every
          product regulated under a mandatory Quality Control Order (QCO) must hold
          valid BIS certification before it can be legally imported, sold, or
          installed in India.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          How Spain&apos;s existing certifications relate to BIS:
        </h3>

        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          {BIS_OVERVIEW_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Schemes Applicable to Spanish Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          1. FMCS — Foreign Manufacturers Certification Scheme (ISI Mark)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The primary route for Spanish manufacturers whose products fall under
          mandatory ISI Mark QCO categories — particularly automotive components,
          steel products, chemicals, and ceramics.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          2. CRS — Compulsory Registration Scheme
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For electronics, electrical products, and IT hardware — applicable to
          Spanish manufacturers of control systems, industrial electronics, and
          electrical components. No factory audit required — but testing at a
          BIS-recognized laboratory is mandatory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>3. BIS Scheme X</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The scheme most rapidly expanding in relevance for Spanish manufacturers
          — covering industrial machinery and capital equipment under mandatory
          QCOs.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification in Spain
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Requirements vary by scheme and product. Sun Certifications India
          provides a customised document checklist for your product after initial
          consultation — including UNE-to-IS gap analysis and assessment of ENAC
          report usability.
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration / incorporation certificate (Spain)</li>
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
          BIS Certification Process for Spanish Manufacturers
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          Step 1 — Product Assessment and QCO Status Confirmation
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
          Step 3 — UNE-to-IS Documentation Gap Analysis
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We map your existing CE Technical Files and AENOR documentation against
          applicable IS requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 4 — Identify the correct BIS-recognized laboratory for your
          product&apos;s IS standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Your product is tested against the applicable Indian Standard at a
          BIS-approved or mutually recognized laboratory.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 5 — Prepare and file the complete BIS application through the BIS
          portal or BIS Headquarter
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          We file your application and manage all official correspondence with BIS
          on your behalf.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Step 6 — BIS Factory Audit in Spain</h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials travel to your Spanish manufacturing facility — assessing
          IS-standard specific compliance. We coordinate and prepare your team for
          the inspection.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Step 7 — Licence Grant and Certification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once all requirements are met, BIS grants your certification and your
          product can legally enter the Indian market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Sun Certifications India is best and most trusted BIS consultant in
          Spain
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Spanish manufacturers entering India need a BIS consultant who
          understands CE-to-IS documentation gaps, the AENOR-BIS distinction, and
          the specific compliance pressure points for automotive, renewable energy,
          and machinery exporters targeting India.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className={TABLE_CLASS}>
            <thead>
              <tr>
                <th className={TH_CLASS}>What We Offer</th>
                <th className={TH_CLASS}>
                  What It Means for Spanish Manufacturers
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
          Spain&apos;s industrial presence in India is more substantial than
          bilateral trade figures alone suggest. Gestamp stampings reinforce
          India&apos;s cars. Siemens Gamesa turbines power India&apos;s grid. Roca
          fittings equip India&apos;s buildings. Ficosa camera systems guide
          India&apos;s vehicles. Spanish engineering is already contributing to
          India&apos;s industrial story — quietly, specifically, and at scale.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification is the regulatory underpinning that keeps that
          contribution legally sound. For Spanish manufacturers entering India for
          the first time, or those already supplying who have not yet verified their
          BIS status, the compliance process is manageable — but it must be done
          correctly, with clear understanding of where CE marking ends and Indian
          Standards begin.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className={SUB_HEADING_CLASS}>
          We have CE marking and AENOR certification — do we still need separate
          BIS certification for India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, without exception. CE marking certifies compliance with EU
          directives for the European market. AENOR certifies compliance with UNE
          standards for the Spanish and broader European market. Neither has any
          legal standing in India. BIS certifies compliance with Indian Standards
          (IS numbers) — an independent national framework.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Siemens Gamesa has wind operations in both Spain and India — how does
          BIS apply to Spanish-manufactured components shipped to India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Wind turbine components and electrical generation equipment fall under
          BIS Scheme X as mandatory certification categories expand.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Can our ENAC-accredited laboratory test reports be used for BIS
          certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          For CRS registrations (electronics and electrical products), ENAC-accredited
          laboratory reports may be considered under mutual recognition. For FMCS
          and Scheme X applications, ENAC reports are not a substitute for
          IS-standard testing at BIS-recognized laboratories.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          Our ceramic sanitary ware (Roca-style) is CE marked and sold across
          Europe — why does India need separate certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s BIS mandatory standards for ceramic sanitary ware are based
          on IS specifications — not European EN standards. The technical
          parameters, test methods, and marking requirements differ between CE and
          BIS.
        </p>

        <h3 className={SUB_HEADING_CLASS}>
          We are a Spanish chemical manufacturer — do our REACH-compliant products
          need BIS in India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          REACH compliance is a European Union chemical regulation with no
          equivalence or recognition in India. India&apos;s BIS and other
          regulatory frameworks (like Ministry of Chemicals QCOs) govern chemical
          products in India independently.
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
