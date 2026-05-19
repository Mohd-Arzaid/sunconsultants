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
  "https://bis-certifications.com/blogImages/BISLicenseforCementPipesandFittingsforSewerageandDrainage.png";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Cement Pipes and Fittings for Sewerage and Drainage under IS 6908:1991, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/cement-pipes-and-fittings-for-sewarage-and-drainage-is-6908",
  },
  headline:
    "BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage – IS 6908:1991",
  description: schemaDescription,
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
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage – IS 6908:1991",
  image: blogImageUrl,
  description: schemaDescription,
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
      name: "What determines the BIS certification cost for asbestos-cement sewerage pipes and fittings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification cost for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage depends on factors such as product range, pipe diameters, number of fittings, and testing requirements under IS 6908:1991. Costs also include laboratory testing fees, inspection charges, and documentation preparation. Manufacturers with multiple product variants may incur higher expenses due to additional testing and evaluation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIS certification cover both sewer pipes and fittings under a single application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage can cover both pipes and associated fittings under a single application, provided they are manufactured in the same facility using a consistent production process. However, each category—pipes and fittings—must be tested separately under IS 6908:1991 to ensure compliance. The manufacturer must clearly declare all product types and specifications during the bis certificate process for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a validity period for BIS certification of sewerage pipes and fittings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BIS License for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage is granted for a specific validity period, after which it must be renewed. The renewal process requires manufacturers to demonstrate continued compliance with IS 6908:1991. Regular surveillance audits during the validity period ensure that product quality is maintained. Failure to comply with standards may lead to suspension or cancellation of the license.",
      },
    },
    {
      "@type": "Question",
      name: "Is product testing mandatory for all pipe sizes and fittings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, testing is generally required for different sizes and types to ensure compliance with IS 6908:1991. Representative samples may be selected to cover a range of specifications, but all variants must meet performance standards. This ensures that the BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage applies uniformly across the product range.",
      },
    },
    {
      "@type": "Question",
      name: "Can manufacturers apply without having in-house testing facilities?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturers can apply even without a fully equipped internal laboratory, provided they maintain basic quality control systems. Testing can be conducted in BIS recognized laboratories. However, having in-house testing capabilities can help identify issues early and improve efficiency during the bis certificate process for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage.",
      },
    },
    {
      "@type": "Question",
      name: "How are raw materials evaluated during BIS certification for these products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raw materials such as cement, asbestos fibers, and additives are carefully evaluated during the certification process. The BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage requires manufacturers to maintain consistent material quality and proper storage conditions. During audits, records of suppliers, material testing reports, and quality checks are reviewed to ensure that the final product meets IS 6908:1991 requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are common reasons for rejection during BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applications may be rejected due to failed product testing, incomplete documentation, or inadequate quality control systems. For example, pipes may fail strength or leakage tests, or manufacturing processes may not meet consistency requirements. The bis certificate process for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage requires strict adherence to IS 6908:1991, and any deviation can result in delays or rejection.",
      },
    },
    {
      "@type": "Question",
      name: "Are there specific labelling requirements under BIS certification for these pipes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, certified products must carry the ISI mark along with details such as manufacturer name, size, batch number, and license number. Proper labelling ensures traceability and helps buyers identify compliant products. The BIS Licence for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage requires strict adherence to marking guidelines, and incorrect labelling can lead to compliance issues or penalties.",
      },
    },
    {
      "@type": "Question",
      name: "What are the consequences of selling non-certified pipes in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Selling non-certified products can result in penalties, product seizure, and restrictions on market access. Additionally, non-compliant pipes may fail prematurely, causing environmental damage and financial losses. The BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage ensures that only reliable products are used in critical systems.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification support environmental safety in drainage systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage plays a vital role in protecting the environment. Leak-proof pipes prevent contamination of soil and groundwater, while durable materials reduce the need for frequent replacements. By ensuring compliance with IS 6908:1991, certification helps maintain safe and efficient wastewater management systems, contributing to overall environmental sustainability.",
      },
    },
  ],
};

const BISCertificationforAsbestos = () => {
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

export default BISCertificationforAsbestos;

const MetaTags = () => {
  const title =
    "BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage - Process, Cost, Documents";
  const ogTitle =
    "BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage - Process, Cost, Documents";
  const twitterTitle =
    "BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage - Process, Cost, Documents";
  const metaDescription =
    "Get BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage under IS 6908:1991. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Cement Pipes and Fittings for Sewerage and Drainage as per IS 6908:1991. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage under IS 6908:1991. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage, BIS License for Cement Pipes and Fittings for Sewerage and Drainage, IS 6908:1991, BIS Certification for Cement Pipes and Fittings for Sewerage and Drainage";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cement-pipes-and-fittings-for-sewarage-and-drainage-is-6908";
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
      <meta property="og:image" content={blogImageUrl} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={blogImageUrl} />
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
                    BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage
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
          BIS Certification for Asbestos – Cement Pipes and Fittings for
          Sewerage and Drainage – IS 6908:1991
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCementPipesandFittingsforSewerageandDrainage.png"
            title="BIS Certification for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage"
            alt="BIS Certificate for Cement Pipes and Fittings for Sewerage and Drainage - IS 6908:1991 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Asbestos – Cement Pipes and Fittings for Sewerage
          and Drainage under IS 6908:1991 confirms that these underground pipeline
          components meet strict requirements for strength, leakage resistance, and
          durability. In India, this certification is essential to ensure reliable
          wastewater transport systems, prevent environmental contamination, and
          support long-term infrastructure safety in sewerage and drainage networks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sewerage and drainage networks operate quietly beneath cities, industrial
          zones, and residential layouts, yet they carry one of the most critical
          responsibilities—safe disposal of wastewater. Any failure in these systems
          can lead to leakage, soil contamination, and public health hazards. This
          makes the reliability of materials such as Asbestos – Cement Pipes and
          Fittings for Sewerage and Drainage extremely important.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike above-ground construction materials, these pipes must perform
          continuously under invisible but intense conditions. They face internal
          chemical reactions from sewage, external soil pressure, groundwater
          infiltration, and mechanical stresses from traffic loads above. Even a
          minor crack or joint failure can result in large-scale infrastructure
          problems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address these challenges, the BIS Certificate for Asbestos – Cement
          Pipes and Fittings for Sewerage and Drainage ensures that such products
          are designed and manufactured to withstand real-world conditions. For
          manufacturers, importers, and suppliers, this certification is not just
          about compliance—it is about demonstrating that their products are capable
          of supporting critical sanitation infrastructure over long periods without
          failure.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certificate for Asbestos – Cement Pipes and Fittings
          for Sewerage and Drainage – IS 6908:1991
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          When it comes to underground drainage systems, product performance cannot
          be verified visually once installed. Pipes are buried beneath layers of
          soil, roads, and structures, making repairs complex and expensive.
          Therefore, the reliability of these products must be ensured before
          installation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Asbestos – Cement Pipes and Fittings for
          Sewerage and Drainage is structured to evaluate whether the product can
          sustain long-term operational stress. It focuses on the interaction between
          material composition, manufacturing precision, and environmental exposure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For instance:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pipes must resist crushing forces from soil and external loads.</li>
          <li>Fittings must maintain alignment and tightness to avoid leakage.</li>
          <li>
            The internal surface must allow smooth wastewater flow without
            obstruction.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This certification process ensures that manufacturers follow consistent
          production practices and maintain quality at every stage. It also provides
          confidence to municipal authorities, contractors, and engineers that the
          products will perform reliably in demanding conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In practical terms, the BIS License for Asbestos – Cement Pipes and
          Fittings for Sewerage and Drainage acts as a technical assurance that the
          product has been evaluated against standardized criteria and is suitable
          for long-term infrastructure use. When you plan the licence route itself,
          it helps to align product-specific work with how Indian BIS operates
          overall —{" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Asbestos – Cement Pipes and Fittings for
          Sewerage and Drainage – IS 6908:1991
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for this product is{" "}
          <strong>IS 6908:1991</strong>, which outlines the technical and performance
          requirements for asbestos-cement pipes and fittings used in sewerage and
          drainage systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 6908:1991
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Asbestos-cement pipes designed for sewerage and drainage</li>
          <li>Pipe fittings such as bends, junctions, and connectors</li>
          <li>Products used in gravity-based wastewater systems</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          It focuses on ensuring that these components can operate effectively in
          underground environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Municipal sewer pipelines</li>
          <li>Residential drainage systems</li>
          <li>Industrial wastewater disposal lines</li>
          <li>Stormwater drainage networks</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Each category requires pipes and fittings that can handle different flow
          conditions and environmental exposures.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 6908:1991 aims to ensure that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pipes maintain structural integrity under load</li>
          <li>Joints remain leak-proof during operation</li>
          <li>Materials resist chemical degradation from sewage</li>
          <li>Products maintain dimensional consistency for proper installation</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These objectives are critical for preventing system failures and ensuring
          uninterrupted wastewater flow.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard incorporates key design considerations such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uniform wall thickness for strength distribution</li>
          <li>Resistance to bending and cracking</li>
          <li>Hydraulic efficiency for smooth flow</li>
          <li>Compatibility of fittings for secure connections</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These principles ensure that the BIS Licence for Asbestos – Cement Pipes
          and Fittings for Sewerage and Drainage is granted only to products that
          meet real-world engineering requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 6908:1991
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is a fundamental part of the certification process, as it verifies
          whether the product can perform under actual operating conditions. Since
          these pipes are used in critical infrastructure, testing must be thorough
          and standardized.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be conducted in BIS recognized laboratories, ensuring
          consistency and accuracy.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Safety testing focuses on structural reliability:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Crushing Strength Test:</strong> Evaluates the pipe&apos;s ability
            to withstand external loads such as soil pressure and traffic weight.
          </li>
          <li>
            <strong>Hydrostatic Pressure Test:</strong> Assesses resistance to
            internal pressure and ensures no leakage occurs.
          </li>
          <li>
            <strong>Joint Integrity Test:</strong> Verifies that fittings and joints
            remain secure under operational stress.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests ensure that the pipeline system remains stable and leak-free.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Performance tests assess how efficiently the pipes function:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flow efficiency testing to ensure smooth wastewater movement</li>
          <li>Dimensional accuracy checks for proper alignment during installation</li>
          <li>Surface finish evaluation to prevent blockages or sediment buildup</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These factors directly impact the effectiveness of drainage systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durability is essential for long-term infrastructure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemical resistance tests to simulate exposure to sewage</li>
          <li>Environmental exposure tests to evaluate weathering effects</li>
          <li>Long-term load tests to replicate underground conditions</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests confirm that the pipes can maintain performance over extended
          periods.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality consistency is verified through:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Raw material inspection</li>
          <li>Manufacturing process evaluation</li>
          <li>Batch-wise product testing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This ensures that every unit produced under the BIS Certification for
          Asbestos – Cement Pipes and Fittings for Sewerage and Drainage meets the
          same standards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sewerage and drainage systems are essential for maintaining hygiene,
          environmental safety, and urban functionality. The reliability of these
          systems depends heavily on the quality of pipes and fittings used. Since
          these components are installed underground and are difficult to replace,
          their performance must be ensured before deployment.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Asbestos – Cement Pipes and Fittings for Sewerage
          and Drainage provides this assurance by verifying that products meet the
          requirements of IS 6908:1991. Through rigorous testing and quality
          evaluation, the BIS Certification for Asbestos – Cement Pipes and Fittings
          for Sewerage and Drainage ensures that manufacturers deliver products
          capable of withstanding real-world conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For businesses aiming to build trust, achieve regulatory compliance, and
          participate in infrastructure development, obtaining a BIS License for
          Asbestos – Cement Pipes and Fittings for Sewerage and Drainage is not just
          a requirement—it is a strategic investment in quality, reliability, and
          long-term success.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Asbestos – Cement Pipes and Fittings for
          Sewerage and Drainage – IS 6908:1991
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What determines the BIS certification cost for asbestos-cement
              sewerage pipes and fittings?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS Certification cost for Asbestos – Cement Pipes and Fittings
              for Sewerage and Drainage depends on factors such as product range,
              pipe diameters, number of fittings, and testing requirements under IS
              6908:1991. Costs also include laboratory testing fees, inspection
              charges, and documentation preparation. Manufacturers with multiple
              product variants may incur higher expenses due to additional testing
              and evaluation requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Can BIS certification cover both sewer pipes and fittings under a
              single application?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, the BIS Certification for Asbestos – Cement Pipes and Fittings
              for Sewerage and Drainage can cover both pipes and associated fittings
              under a single application, provided they are manufactured in the same
              facility using a consistent production process. However, each
              category—pipes and fittings—must be tested separately under IS
              6908:1991 to ensure compliance. The manufacturer must clearly declare
              all product types and specifications during the bis certificate process
              for Asbestos – Cement Pipes and Fittings for Sewerage and Drainage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Is there a validity period for BIS certification of sewerage pipes
              and fittings?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, the BIS License for Asbestos – Cement Pipes and Fittings for
              Sewerage and Drainage is granted for a specific validity period, after
              which it must be renewed. The renewal process requires manufacturers to
              demonstrate continued compliance with IS 6908:1991. Regular
              surveillance audits during the validity period ensure that product
              quality is maintained. Failure to comply with standards may lead to
              suspension or cancellation of the license.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Is product testing mandatory for all pipe sizes and fittings?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, testing is generally required for different sizes and types to
              ensure compliance with IS 6908:1991. Representative samples may be
              selected to cover a range of specifications, but all variants must meet
              performance standards. This ensures that the BIS Certification for
              Asbestos – Cement Pipes and Fittings for Sewerage and Drainage applies
              uniformly across the product range.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Can manufacturers apply without having in-house testing facilities?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers can apply even without a fully equipped internal
              laboratory, provided they maintain basic quality control systems.
              Testing can be conducted in BIS recognized laboratories. However,
              having in-house testing capabilities can help identify issues early and
              improve efficiency during the bis certificate process for Asbestos –
              Cement Pipes and Fittings for Sewerage and Drainage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. How are raw materials evaluated during BIS certification for these
              products?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Raw materials such as cement, asbestos fibers, and additives are
              carefully evaluated during the certification process. The BIS
              Certification for Asbestos – Cement Pipes and Fittings for Sewerage
              and Drainage requires manufacturers to maintain consistent material
              quality and proper storage conditions. During audits, records of
              suppliers, material testing reports, and quality checks are reviewed to
              ensure that the final product meets IS 6908:1991 requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What are common reasons for rejection during BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Applications may be rejected due to failed product testing, incomplete
              documentation, or inadequate quality control systems. For example,
              pipes may fail strength or leakage tests, or manufacturing processes
              may not meet consistency requirements. The bis certificate process for
              Asbestos – Cement Pipes and Fittings for Sewerage and Drainage requires
              strict adherence to IS 6908:1991, and any deviation can result in delays
              or rejection.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Are there specific labelling requirements under BIS certification
              for these pipes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, certified products must carry the ISI mark along with details such
              as manufacturer name, size, batch number, and license number. Proper
              labelling ensures traceability and helps buyers identify compliant
              products. The BIS Licence for Asbestos – Cement Pipes and Fittings for
              Sewerage and Drainage requires strict adherence to marking guidelines,
              and incorrect labelling can lead to compliance issues or penalties.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. What are the consequences of selling non-certified pipes in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Selling non-certified products can result in penalties, product
              seizure, and restrictions on market access. Additionally, non-compliant
              pipes may fail prematurely, causing environmental damage and financial
              losses. The BIS Certification for Asbestos – Cement Pipes and Fittings
              for Sewerage and Drainage ensures that only reliable products are used
              in critical systems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How does BIS certification support environmental safety in drainage
              systems?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS Certification for Asbestos – Cement Pipes and Fittings for
              Sewerage and Drainage plays a vital role in protecting the environment.
              Leak-proof pipes prevent contamination of soil and groundwater, while
              durable materials reduce the need for frequent replacements. By ensuring
              compliance with IS 6908:1991, certification helps maintain safe and
              efficient wastewater management systems, contributing to overall
              environmental sustainability.
            </p>
          </div>
        </div>
<div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Mark Certification Scheme</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS (Foreign Manufacturers Certification Scheme)</a>
          </li>
        </ul>

        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/pdf/6908_1991_reff2022.pdf"
            title="IS 6908:1991 - Asbestos Cement Pipes and Fittings for Sewerage and Drainage PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
