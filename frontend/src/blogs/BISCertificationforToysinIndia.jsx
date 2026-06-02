import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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
  "https://bis-certifications.com/blogs/isi-products/bis-license-for-toys";
const PAGE_IMAGE_SRC = "/blogImages/BISLicenseforToys.png";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/BISLicensefortoys.webp";
const PDF_SRC = "/pdf/toys.pdf";

const PAGE_TITLE =
  "BIS Certification for Toys in India – Complete Guide to IS 9873  & IS 15644";
const SEO_TITLE =
  "BIS Certificate for Toys | Complete Guide - IS 9873 and IS 15644";
const META_DESCRIPTION =
  "Get BIS Certificate for Toys under IS 9873 and IS 15644. Process, documents, testing, cost & timeline for BIS Certification in India.";
const OG_DESCRIPTION =
  "Complete guide to BIS License for Toys as per IS 9873 and IS 15644. Process, Cost, Documents, Testing & BIS license benefits.";
const TWITTER_DESCRIPTION =
  "Apply for BIS Certificate for Toys under IS 9873 and IS 15644. Learn BIS process, documents, testing, fees & timeline in India.";
const META_KEYWORDS =
  "BIS Certificate for Toys, BIS License for Toys, IS 9873 and IS 15644, BIS Certification for Toys, BIS License for Electric Toys, BIS License for Non-Electric Toys, BIS Certificate for Electric Toys, BIS Certificate for Non-Electric Toys";
const SCHEMA_DESCRIPTION =
  "A comprehensive guide to BIS Certification for Toys under IS 9873 & IS 15644, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  headline: PAGE_TITLE,
  description: SCHEMA_DESCRIPTION,
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
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: PAGE_TITLE,
  image: SCHEMA_IMAGE_URL,
  description: SCHEMA_DESCRIPTION,
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
      name: "Why is BIS certification important for toys sold in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification is important because toys are directly used by children, who are more vulnerable to injuries and health risks caused by unsafe products. The certification framework helps evaluate mechanical safety, chemical safety, electrical protection, flammability resistance, and structural durability before toys enter the market. It also helps manufacturers and importers demonstrate compliance with Indian toy safety regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Which toys require BIS certification under Indian regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Almost all toys intended for children below 14 years of age require BIS certification before being sold in India. This includes both electric and non-electric toys such as dolls, puzzles, ride-on toys, educational toys, remote-controlled toys, battery-operated toys, construction kits, activity toys, and plush toys. Different toy categories may require compliance with different BIS standards.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between IS 9873 and IS 15644 standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IS 9873 series mainly applies to non-electric toys and covers areas such as mechanical safety, flammability, toxic elements, activity toys, finger paints, and phthalate restrictions. IS 15644:2006 specifically applies to electric toys and focuses on electrical safety aspects including insulation, overheating protection, leakage current, battery safety, and protection against electric shock during toy usage.",
      },
    },
    {
      "@type": "Question",
      name: "Can one toy require compliance with multiple BIS standards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many toys require compliance with multiple BIS standards depending on their materials, design, and functionality. For example, a battery-operated plush toy may require IS 9873 Part 1 for mechanical safety, Part 2 for flammability, Part 3 for chemical migration, and IS 15644 for electrical safety. BIS compliance is therefore often multi-layered for complex toy products.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major safety risks evaluated during toy testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toy testing evaluates various hazards that may arise during real-world child interaction. These include choking risks from detachable parts, sharp edges, toxic chemical migration, overheating, fire hazards, battery leakage, electrical shock, weak structural components, and instability in activity toys. Testing helps identify these risks before products are released into the consumer market.",
      },
    },
    {
      "@type": "Question",
      name: "Why is heavy metal testing important for children's toys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Children frequently place toys in their mouths, especially infants and toddlers. If toy paints, coatings, plastics, or decorative finishes contain excessive levels of lead, cadmium, mercury, or other toxic elements, harmful chemicals may enter the child's body. Heavy metal testing under IS 9873 Part 3 helps ensure toy materials remain within safe permissible limits.",
      },
    },
    {
      "@type": "Question",
      name: "Are imported toys also required to obtain BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, imported toys must also comply with Indian BIS regulations before they can be sold in the Indian market. Customs authorities may stop shipments of non-compliant toys at ports if proper certification and labeling requirements are not fulfilled. Importers are responsible for ensuring foreign-manufactured toys meet all applicable Indian safety standards.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a toy product fails BIS laboratory testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a toy fails laboratory testing, the manufacturer must identify the reason for non-compliance and implement corrective modifications. Common failures may involve weak structural parts, excessive heavy metal content, overheating, sharp edges, or unsafe battery compartments. Revised product samples must then undergo re-testing before BIS certification approval can be considered.",
      },
    },
    {
      "@type": "Question",
      name: "Why are factory inspections conducted during BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Factory inspections help verify whether manufacturers can consistently produce toys that meet applicable safety standards. BIS officials review production systems, quality control procedures, testing facilities, calibration records, raw material management, and traceability systems. The inspection process ensures that certified toys maintain consistent quality across commercial production batches and not just in sample testing.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification help toy manufacturers and brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification helps toy businesses improve regulatory compliance, consumer confidence, retail acceptance, and long-term brand credibility. Certified products are generally viewed as safer and more reliable by parents, retailers, distributors, and e-commerce platforms. The certification also reduces the risk of product recalls, legal complications, customs delays, and market restrictions arising from non-compliance.",
      },
    },
  ],
};

const BISCertificationforToysinIndia = () => {
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

export default BISCertificationforToysinIndia;

const MetaTags = () => {
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{SEO_TITLE}</title>
      <meta name="description" content={META_DESCRIPTION} />
      <meta name="keywords" content={META_KEYWORDS} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={SEO_TITLE} />
      <meta property="og:description" content={OG_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={SCHEMA_IMAGE_URL} />
      <meta name="twitter:title" content={SEO_TITLE} />
      <meta name="twitter:description" content={TWITTER_DESCRIPTION} />
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
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificate for Toys – IS 9873 and IS 15644
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
            title="BIS Certification for Toys in India"
            alt="BIS Certificate for Toys under IS 9873 and IS 15644 - BIS Certification in India"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toy safety in India is regulated through the IS 9873 series for
          non-electric toys and IS 15644:2006 for electric toys. These standards
          establish requirements related to mechanical safety, flammability, toxic
          substances, electrical protection, chemical migration, and structural
          durability to ensure toys sold for children are safe during normal and
          foreseeable use.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toys are designed to entertain, educate, and support child
          development, but they also represent one of the most safety-sensitive
          product categories in the consumer market. Unlike household products
          used under supervision by adults, toys are handled directly by children
          who may pull, twist, bite, throw, or misuse products during play.
          Because of this, toy safety regulations must evaluate risks far beyond
          normal product performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India&apos;s toy market has grown rapidly in recent years with the rise
          of educational products, STEM learning kits, remote-controlled
          vehicles, battery-operated toys, sensory toys, activity structures,
          slime kits, plush products, and digitally interactive learning systems.
          This growth has increased the need for stronger safety controls covering
          physical hazards, toxic materials, overheating, sharp edges, and unsafe
          chemicals.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To regulate this sector, India introduced mandatory quality requirements
          under the Toys (Quality Control) framework, requiring toys for children
          below 14 years of age to comply with specified Indian Standards and
          carry the ISI mark under BIS Certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Certification for Toys applies to both:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Non-electric toys under the IS 9873 series</li>
          <li>Electric toys under IS 15644:2006</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          These standards collectively evaluate:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mechanical and physical safety</li>
          <li>Flammability resistance</li>
          <li>Chemical migration limits</li>
          <li>Electrical safety</li>
          <li>Structural strength</li>
          <li>Battery safety</li>
          <li>Toxic substance restrictions</li>
          <li>Activity toy stability</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The{" "}
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS Certificate
          </Link>{" "}
          for Toys is therefore not only a compliance requirement but also a
          critical safety assurance mechanism for manufacturers, importers,
          distributors, e-commerce sellers, and toy brands operating in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Toys - IS 9873 &amp; IS 15644
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Children interact with toys differently depending on age, developmental
          stage, and play behaviour. An infant may chew or swallow parts of a toy,
          while older children may apply force, climb on structures, or repeatedly
          impact products during play.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because of these varied interactions, toy safety standards in India are
          divided into multiple technical parts, each addressing a specific
          category of risk.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Certificate for Toys evaluates whether toys remain safe during:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Normal play</li>
          <li>Rough handling</li>
          <li>Accidental misuse</li>
          <li>Environmental exposure</li>
          <li>Long-duration usage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          For non-electric toys, the primary focus is on:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Choking prevention</li>
          <li>Structural durability</li>
          <li>Sharp edge elimination</li>
          <li>Material safety</li>
          <li>Flammability control</li>
          <li>Chemical migration limits</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          For electric toys, additional evaluation includes:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical insulation</li>
          <li>Temperature rise control</li>
          <li>Leakage current safety</li>
          <li>Battery protection</li>
          <li>Fire hazard reduction</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS License for Toys ensures that products are designed and
          manufactured in a way that minimizes foreseeable risks to children.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">For example:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>A painted toy may contain excessive lead content in coatings.</li>
          <li>A battery-operated toy may overheat during charging.</li>
          <li>A plush toy may ignite rapidly if exposed to flame.</li>
          <li>A climbing structure may collapse under load.</li>
          <li>A toy vehicle wheel may detach and create a choking hazard.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification framework addresses each of these risks through
          separate standards and laboratory testing procedures.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standards for Toys
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure the safety, quality, and reliability of toys available in the
          Indian market, the Bureau of Indian Standards (BIS) has established a
          comprehensive framework of Indian Standards for toy safety. Currently,
          BIS has published 10 Indian Standards covering various aspects of toy
          design, manufacturing, performance, and safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The mandatory BIS standards for toys include:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 1):2019 / ISO 8124-1:2018
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies the mechanical and physical safety requirements
          for toys, ensuring that products are designed and manufactured to
          minimize risks such as choking, sharp edges, entrapment, and other
          physical hazards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 2):2017 / ISO 8124-2
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard lays down flammability requirements for toys, helping to
          reduce fire-related risks and ensuring safer use by children.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 3):2020 / ISO 8124-3
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard regulates the migration of certain toxic elements from toy
          materials and coatings, protecting children from exposure to harmful
          substances.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 4):2017 / ISO 8124-4
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers safety requirements for activity toys such as
          swings, slides, and similar equipment intended for domestic use by
          children.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 7):2017 / ISO 8124-7
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies safety requirements and test methods for finger
          paints used by children, ensuring that the products are safe and
          non-toxic.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 9873 (Part 9):2017
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard addresses the permissible limits of phthalates in toys and
          children&apos;s products, helping to safeguard children from potentially
          harmful chemicals.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 15644:2006 / IEC 62115
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies safety requirements for electric toys, including
          electrical, thermal, and mechanical aspects, ensuring safe operation
          during intended use.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with these BIS standards is essential for obtaining BIS
          Certification for Toys and demonstrating conformity with India&apos;s toy
          safety regulations. Manufacturers and importers must ensure that their
          products meet the applicable requirements before entering the Indian
          market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for BIS Certification of Toys - IS 9873 Series
          &amp; IS 15644
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing for toys must be conducted in BIS recognized laboratories
          according to applicable Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Mechanical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          These tests evaluate whether toys can withstand physical handling
          without becoming hazardous.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Important Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Drop testing</li>
          <li>Compression testing</li>
          <li>Torque testing</li>
          <li>Tension testing</li>
          <li>Flexure testing</li>
          <li>Bite testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Purpose
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          These tests help identify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Small detachable parts</li>
          <li>Sharp edges</li>
          <li>Weak structural areas</li>
          <li>Breakage risks</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Flammability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Flammability testing evaluates how quickly toy materials ignite and
          spread flames.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Important Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flame spread analysis</li>
          <li>Surface ignition testing</li>
          <li>Burn rate testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Purpose
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests help reduce fire-related injuries in fabric and plush toys.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Chemical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Chemical testing evaluates toxic substance migration from toy materials.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Important Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy metal migration analysis</li>
          <li>Lead content testing</li>
          <li>Cadmium testing</li>
          <li>Phthalate testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Purpose
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests help prevent harmful chemical exposure during mouthing or
          prolonged contact.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Electrical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Electric toys undergo additional testing for electrical hazards.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Important Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Leakage current testing</li>
          <li>Insulation resistance testing</li>
          <li>Heating tests</li>
          <li>Battery safety analysis</li>
          <li>Abnormal operation testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Purpose
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          These tests help prevent:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock</li>
          <li>Burns</li>
          <li>Overheating</li>
          <li>Fire hazards</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Structural and Stability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Activity toys and ride-on toys require stability evaluation.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Important Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Static load testing</li>
          <li>Dynamic load testing</li>
          <li>Anchorage strength testing</li>
          <li>Stability analysis</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Purpose
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests help prevent falls and structural collapse during use.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Toys
        </h2>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseProcessforToys.png"
            title="BIS Certification Process for Toys"
            alt="BIS Certification Process for Toys in India - IS 9873 and IS 15644"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Toys plays a critical role in improving child
          safety across the Indian toy market. Toys today involve a combination of
          mechanical structures, electrical systems, coatings, plastics, textiles,
          and interactive components, making safety evaluation far more complex
          than simple visual inspection.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The IS 9873 series and IS 15644:2006 collectively establish a
          comprehensive compliance framework covering physical safety,
          flammability, toxic substances, electrical protection, structural
          durability, and chemical restrictions. These standards help ensure that
          toys remain safe during real-world child interaction and foreseeable
          misuse conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers, importers, distributors, and private label brands
          dealing in toys must carefully evaluate all applicable standards
          depending on toy design, materials, and functionality. A valid BIS
          Certificate for Toys not only fulfils Indian regulatory requirements but
          also strengthens consumer confidence, product reliability, retail
          acceptance, and long-term brand credibility.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS License for Toys in India - IS 9873 &amp; IS 15644
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why is BIS certification important for toys sold in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification is important because toys are directly used by
              children, who are more vulnerable to injuries and health risks caused
              by unsafe products. The certification framework helps evaluate
              mechanical safety, chemical safety, electrical protection,
              flammability resistance, and structural durability before toys enter
              the market. It also helps manufacturers and importers demonstrate
              compliance with Indian toy safety regulations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Which toys require BIS certification under Indian regulations?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Almost all toys intended for children below 14 years of age require
              BIS certification before being sold in India. This includes both
              electric and non-electric toys such as dolls, puzzles, ride-on toys,
              educational toys, remote-controlled toys, battery-operated toys,
              construction kits, activity toys, and plush toys. Different toy
              categories may require compliance with different BIS standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the difference between IS 9873 and IS 15644 standards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The IS 9873 series mainly applies to non-electric toys and covers
              areas such as mechanical safety, flammability, toxic elements,
              activity toys, finger paints, and phthalate restrictions. IS
              15644:2006 specifically applies to electric toys and focuses on
              electrical safety aspects including insulation, overheating
              protection, leakage current, battery safety, and protection against
              electric shock during toy usage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can one toy require compliance with multiple BIS standards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, many toys require compliance with multiple BIS standards
              depending on their materials, design, and functionality. For example,
              a battery-operated plush toy may require IS 9873 Part 1 for
              mechanical safety, Part 2 for flammability, Part 3 for chemical
              migration, and IS 15644 for electrical safety. BIS compliance is
              therefore often multi-layered for complex toy products.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What are the major safety risks evaluated during toy testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Toy testing evaluates various hazards that may arise during
              real-world child interaction. These include choking risks from
              detachable parts, sharp edges, toxic chemical migration, overheating,
              fire hazards, battery leakage, electrical shock, weak structural
              components, and instability in activity toys. Testing helps identify
              these risks before products are released into the consumer market.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Why is heavy metal testing important for children&apos;s toys?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Children frequently place toys in their mouths, especially infants
              and toddlers. If toy paints, coatings, plastics, or decorative
              finishes contain excessive levels of lead, cadmium, mercury, or other
              toxic elements, harmful chemicals may enter the child&apos;s body.
              Heavy metal testing under IS 9873 Part 3 helps ensure toy materials
              remain within safe permissible limits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Are imported toys also required to obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, imported toys must also comply with Indian BIS regulations
              before they can be sold in the Indian market. Customs authorities
              may stop shipments of non-compliant toys at ports if proper
              certification and labeling requirements are not fulfilled. Importers
              are responsible for ensuring foreign-manufactured toys meet all
              applicable Indian safety standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What happens if a toy product fails BIS laboratory testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If a toy fails laboratory testing, the manufacturer must identify the
              reason for non-compliance and implement corrective modifications.
              Common failures may involve weak structural parts, excessive heavy
              metal content, overheating, sharp edges, or unsafe battery
              compartments. Revised product samples must then undergo re-testing
              before BIS certification approval can be considered.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Why are factory inspections conducted during BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Factory inspections help verify whether manufacturers can
              consistently produce toys that meet applicable safety standards. BIS
              officials review production systems, quality control procedures,
              testing facilities, calibration records, raw material management, and
              traceability systems. The inspection process ensures that certified
              toys maintain consistent quality across commercial production batches
              and not just in sample testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How does BIS certification help toy manufacturers and brands?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification helps toy businesses improve regulatory compliance,
              consumer confidence, retail acceptance, and long-term brand
              credibility. Certified products are generally viewed as safer and
              more reliable by parents, retailers, distributors, and e-commerce
              platforms. The certification also reduces the risk of product
              recalls, legal complications, customs delays, and market restrictions
              arising from non-compliance.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
             ISI Mark Registration
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
             BIS License for Foreign Manufacturer
            </a>
          </li>
        </ul>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={1} />
      </div>

      {/* <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src={PDF_SRC}
          title="BIS Certification Process for Toys PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
      </div> */}
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
