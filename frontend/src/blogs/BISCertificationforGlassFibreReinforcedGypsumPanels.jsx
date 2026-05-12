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

const blogImageUrl =
  "https://bis-certifications.com/blogImages/BISLicenseforGlassFibreReinforcedGypsumPanels.webp";
const canonicalUrl =
  "https://bis-certifications.com/blogs/isi-products/glass-fibre-reinforced-gypsum-panels-is-17400";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "BIS Certification for Glass Fibre Reinforced Gypsum Panels – IS 17400:2021",
  description:
    "A comprehensive guide to BIS Certification for Glass Fibre Reinforced Gypsum Panels under IS 17400:2021, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
  image: blogImageUrl,
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
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "BIS Certification for Glass Fibre Reinforced Gypsum Panels – IS 17400:2021",
  image: blogImageUrl,
  description:
    "A comprehensive guide to BIS Certification for Glass Fibre Reinforced Gypsum Panels under IS 17400:2021, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
      name: "What factors influence the BIS certification cost for Glass Fibre Reinforced Gypsum Panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification cost for Glass Fibre Reinforced Gypsum Panels depends on testing complexity, panel size variations, and the number of product variants submitted. Since these panels require structural, fire, and moisture testing, laboratory charges can vary significantly. Additionally, inspection fees and documentation preparation also contribute to the overall cost of bis certification for Glass Fibre Reinforced Gypsum Panels.",
      },
    },
    {
      "@type": "Question",
      name: "Why is fire resistance testing important in BIS certification for these panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fire resistance testing ensures that GFRG panels can withstand high temperatures without losing structural integrity. Since these panels are used in building walls and ceilings, their ability to resist fire spread is critical. BIS certification evaluates this aspect to ensure occupant safety and compliance with construction safety requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can imported GFRG panels obtain BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, imported panels can obtain a BIS Certificate for Glass Fibre Reinforced Gypsum Panels. However, importers must ensure that the foreign manufacturing unit complies with IS 17400:2021. Additional documentation, including authorization from the manufacturer and detailed technical specifications, is required during the certification process.",
      },
    },
    {
      "@type": "Question",
      name: "Is BIS certification required for all types of GFRG panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certification is required for panels that fall within the scope of IS 17400:2021. This includes panels used in structural and non-structural applications in buildings. Manufacturers must verify whether their product specifications align with the standard before applying for a BIS License for Glass Fibre Reinforced Gypsum Panels.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification improve market acceptance of GFRG panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified panels are more likely to be accepted by builders, architects, and government agencies. The BIS Licence for Glass Fibre Reinforced Gypsum Panels acts as proof of compliance with performance standards, making it easier for manufacturers to enter large-scale construction projects and infrastructure developments.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple panel sizes be covered under one BIS license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, multiple sizes can be included under a single license if they fall within the defined scope and meet testing requirements. However, each variation must be evaluated to ensure compliance with IS 17400:2021. This allows manufacturers to offer a range of products under one certification framework.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification evaluate the bonding strength between gypsum and glass fibres?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification for Glass Fibre Reinforced Gypsum Panels places strong emphasis on the bonding integrity between gypsum and embedded glass fibres. During testing under IS 17400:2021, panels are subjected to flexural and load-bearing tests to ensure that fibres do not delaminate under stress. Weak bonding can lead to cracks or structural failure, especially in load-bearing applications, making this evaluation critical for long-term durability.",
      },
    },
    {
      "@type": "Question",
      name: "Are there specific density requirements for GFRG panels under BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IS 17400:2021 defines density parameters to ensure that panels achieve the right balance between strength and weight. BIS certification verifies that panels are neither too porous nor excessively dense. Low-density panels may compromise strength, while overly dense panels can increase load on structures. Maintaining optimal density ensures consistent structural performance and ease of installation in prefabricated construction.",
      },
    },
    {
      "@type": "Question",
      name: "Does BIS certification cover thermal insulation properties of GFRG panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, thermal performance is an important aspect of GFRG panels. BIS certification under IS 17400:2021 evaluates how effectively panels resist heat transfer. This is especially relevant in regions with extreme temperatures, where panels contribute to indoor comfort and energy efficiency. Proper insulation properties reduce reliance on heating and cooling systems, making buildings more sustainable.",
      },
    },
    {
      "@type": "Question",
      name: "What are the marking and labeling requirements for certified GFRG panels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified panels must display specific markings, including the ISI mark, manufacturer details, and standard reference. BIS certification ensures that labeling is clear and traceable, allowing buyers to verify compliance. Incorrect or missing labeling can lead to rejection in construction projects, making it essential for manufacturers to follow prescribed marking guidelines under IS 17400:2021.",
      },
    },
  ],
};

const BISCertificationforGlassFibreReinforcedGypsumPanels = () => {
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

export default BISCertificationforGlassFibreReinforcedGypsumPanels;

const MetaTags = () => {
  const title =
    "BIS Certificate for Glass Fibre Reinforced Gypsum Panels";
  const ogTitle =
    "BIS Certificate for Glass Fibre Reinforced Gypsum Panels";
  const twitterTitle =
    "BIS Certificate for Glass Fibre Reinforced Gypsum Panels";
  const metaDescription =
    "Get BIS Certificate for Glass Fibre Reinforced Gypsum Panels under IS 17400:2021. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Glass Fibre Reinforced Gypsum Panels as per IS 17400:2021. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Glass Fibre Reinforced Gypsum Panels under IS 17400:2021. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Glass Fibre Reinforced Gypsum Panels, BIS License for Glass Fibre Reinforced Gypsum Panels, IS 17400:2021 , BIS Certification for Glass Fibre Reinforced Gypsum Panels";
  const websiteUrl = canonicalUrl;
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
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
                    BIS Certificate for Glass Fibre Reinforced Gypsum Panels
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
          BIS Certification for Glass Fibre Reinforced Gypsum Panels – IS
          17400:2021
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforGlassFibreReinforcedGypsumPanels.webp"
            title="BIS Certification for Glass Fibre Reinforced Gypsum Panels"
            alt="BIS Certificate for Glass Fibre Reinforced Gypsum Panels - IS 17400:2021 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Glass Fibre Reinforced Gypsum Panels under IS
          17400:2021 confirms that these panels meet defined structural strength,
          fire resistance, and durability benchmarks required for safe building
          applications in India. Certification is essential to ensure that
          panels used in walls, partitions, and ceilings perform reliably under
          load, moisture, and fire exposure conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Glass Fibre Reinforced Gypsum (GFRG) panels have emerged as a
          transformative material in modern construction, especially in
          prefabricated housing, modular structures, and rapid infrastructure
          development. These panels are valued for their lightweight nature,
          structural strength, thermal insulation properties, and ease of
          installation. From residential buildings to commercial spaces, GFRG
          panels are increasingly replacing conventional brick and concrete
          systems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, the very characteristics that make these panels efficient
          also demand strict quality control. Since GFRG panels are often used
          as load-bearing or partition elements, any compromise in material
          strength, dimensional accuracy, or fire resistance can directly impact
          building safety. For example, poorly manufactured panels may crack
          under stress, absorb moisture, or fail during fire exposure, leading
          to severe structural risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India&apos;s construction ecosystem, regulatory oversight ensures
          that such materials meet defined performance expectations before being
          deployed in buildings. This is where BIS Certification for Glass Fibre
          Reinforced Gypsum Panels becomes critical. It provides a structured
          validation process that evaluates manufacturing practices, material
          composition, and product performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and suppliers, obtaining a BIS License
          for Glass Fibre Reinforced Gypsum Panels is not just about
          compliance—it is a gateway to participating in government projects,
          large-scale infrastructure developments, and quality-conscious
          private construction markets.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Glass Fibre Reinforced Gypsum
          Panels – IS 17400:2021
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          When it comes to construction materials like GFRG panels, certification
          is not merely a formality—it is a technical validation of how the
          product behaves under real-world conditions. These panels are expected
          to withstand mechanical loads, environmental exposure, and fire hazards
          while maintaining structural integrity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Glass Fibre Reinforced Gypsum Panels focuses
          on evaluating multiple dimensions of product performance:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Structural reliability:</strong> Panels must support loads
            without cracking or deforming.
          </li>
          <li>
            <strong>Fire resistance:</strong> Gypsum-based materials naturally
            resist fire, but reinforcement and manufacturing quality influence
            performance.
          </li>
          <li>
            <strong>Moisture behavior:</strong> Since gypsum is sensitive to
            water, panels must be engineered to resist excessive absorption.
          </li>
          <li>
            <strong>Dimensional stability:</strong> Panels should maintain
            uniform thickness and shape to ensure proper installation.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification ensures that every panel leaving the factory is
          consistent in quality and capable of performing its intended function
          in construction. For example, in prefabricated housing projects, where
          panels are assembled rapidly on-site, uniformity and reliability are
          critical. A single defective panel can disrupt the entire structural
          alignment.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Licence for Glass Fibre Reinforced Gypsum Panels acts as a
          formal assurance that the product has undergone rigorous evaluation and
          meets predefined benchmarks tailored specifically for this category.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Glass Fibre Reinforced Gypsum Panels – IS
          17400:2021
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard governing this product category is{" "}
          <strong>IS 17400:2021</strong>, which provides detailed specifications
          for manufacturing, testing, and performance evaluation of GFRG panels.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 17400:2021
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          This standard applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing and non-load-bearing GFRG panels</li>
          <li>Panels used in walls, partitions, and slabs</li>
          <li>
            Prefabricated construction systems using gypsum-based reinforced
            panels
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Objectives of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          IS 17400:2021 is designed to ensure that panels:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain structural strength under static and dynamic loads</li>
          <li>Exhibit resistance to fire and heat exposure</li>
          <li>Retain dimensional accuracy for seamless assembly</li>
          <li>Perform consistently under varying environmental conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The standard outlines specific requirements related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Core material composition (gypsum quality and additives)</li>
          <li>Glass fibre reinforcement distribution</li>
          <li>Panel thickness, density, and weight</li>
          <li>Load-bearing capacity and flexural strength</li>
          <li>Fire resistance duration</li>
          <li>Water absorption limits</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For instance, panels used in multi-story prefabricated buildings must
          demonstrate higher load-bearing capacity compared to those used for
          interior partitions. IS 17400:2021 ensures that such distinctions are
          addressed through precise testing protocols.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 17400:2021
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is conducted in BIS-recognized laboratories and includes:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fire resistance evaluation</li>
          <li>Structural load testing</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flexural strength</li>
          <li>Impact resistance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Water absorption</li>
          <li>Environmental exposure</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Dimensional accuracy</li>
          <li>Density and composition checks</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Glass Fibre Reinforced Gypsum Panels under
          IS 17400:2021 plays a vital role in ensuring that construction
          materials meet the performance demands of modern infrastructure. From
          structural strength to fire resistance, certification validates every
          critical aspect of panel performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and suppliers, obtaining a BIS License for Glass
          Fibre Reinforced Gypsum Panels is not just about meeting regulatory
          requirements—it is about building trust, ensuring safety, and unlocking
          market opportunities. By following the defined bis certification process
          for Glass Fibre Reinforced Gypsum Panels, businesses can confidently
          deliver reliable products that meet the evolving needs of the
          construction industry in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Glass Fibre Reinforced Gypsum Panels
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What factors influence the BIS certification cost for Glass
              Fibre Reinforced Gypsum Panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The bis certification cost for Glass Fibre Reinforced Gypsum
              Panels depends on testing complexity, panel size variations, and the
              number of product variants submitted. Since these panels require
              structural, fire, and moisture testing, laboratory charges can vary
              significantly. Additionally, inspection fees and documentation
              preparation also contribute to the overall cost of bis certification
              for Glass Fibre Reinforced Gypsum Panels.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Why is fire resistance testing important in BIS certification
              for these panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Fire resistance testing ensures that GFRG panels can withstand high
              temperatures without losing structural integrity. Since these panels
              are used in building walls and ceilings, their ability to resist fire
              spread is critical. BIS certification evaluates this aspect to ensure
              occupant safety and compliance with construction safety requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Can imported GFRG panels obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, imported panels can obtain a BIS Certificate for Glass Fibre
              Reinforced Gypsum Panels. However, importers must ensure that the
              foreign manufacturing unit complies with IS 17400:2021. Additional
              documentation, including authorization from the manufacturer and
              detailed technical specifications, is required during the
              certification process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Is BIS certification required for all types of GFRG panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certification is required for panels that fall within the scope of
              IS 17400:2021. This includes panels used in structural and
              non-structural applications in buildings. Manufacturers must verify
              whether their product specifications align with the standard before
              applying for a BIS License for Glass Fibre Reinforced Gypsum Panels.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS certification improve market acceptance of GFRG
              panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certified panels are more likely to be accepted by builders,
              architects, and government agencies. The BIS Licence for Glass Fibre
              Reinforced Gypsum Panels acts as proof of compliance with performance
              standards, making it easier for manufacturers to enter large-scale
              construction projects and infrastructure developments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Can multiple panel sizes be covered under one BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, multiple sizes can be included under a single license if they
              fall within the defined scope and meet testing requirements. However,
              each variation must be evaluated to ensure compliance with IS
              17400:2021. This allows manufacturers to offer a range of products
              under one certification framework.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. How does BIS certification evaluate the bonding strength between
              gypsum and glass fibres?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification for Glass Fibre Reinforced Gypsum Panels places
              strong emphasis on the bonding integrity between gypsum and embedded
              glass fibres. During testing under IS 17400:2021, panels are
              subjected to flexural and load-bearing tests to ensure that fibres
              do not delaminate under stress. Weak bonding can lead to cracks or
              structural failure, especially in load-bearing applications, making
              this evaluation critical for long-term durability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Are there specific density requirements for GFRG panels under BIS
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, IS 17400:2021 defines density parameters to ensure that panels
              achieve the right balance between strength and weight. BIS
              certification verifies that panels are neither too porous nor
              excessively dense. Low-density panels may compromise strength, while
              overly dense panels can increase load on structures. Maintaining
              optimal density ensures consistent structural performance and ease of
              installation in prefabricated construction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Does BIS certification cover thermal insulation properties of
              GFRG panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, thermal performance is an important aspect of GFRG panels. BIS
              certification under IS 17400:2021 evaluates how effectively panels
              resist heat transfer. This is especially relevant in regions with
              extreme temperatures, where panels contribute to indoor comfort and
              energy efficiency. Proper insulation properties reduce reliance on
              heating and cooling systems, making buildings more sustainable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What are the marking and labeling requirements for certified
              GFRG panels?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certified panels must display specific markings, including the ISI
              mark, manufacturer details, and standard reference. BIS certification
              ensures that labeling is clear and traceable, allowing buyers to
              verify compliance. Incorrect or missing labeling can lead to
              rejection in construction projects, making it essential for
              manufacturers to follow prescribed marking guidelines under IS
              17400:2021.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for foreign manufacturers
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for Indian manufacturers
            </a>
          </li>
        </ul>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={4} />
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
