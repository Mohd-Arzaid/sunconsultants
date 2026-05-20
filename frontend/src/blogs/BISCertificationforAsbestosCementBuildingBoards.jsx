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
  "https://bis-certifications.com/blogImages/BISLicenseforCementPipesandFittings.png";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Cement Building Boards under IS 2098:1997, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/cement-building-boards-is-2098",
  },
  headline:
    "BIS Certification for Asbestos Cement Building Boards – IS 2098:1997",
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
  name: "BIS Certification for Asbestos Cement Building Boards – IS 2098:1997",
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
      name: "What is the typical BIS certification cost for Asbestos Cement Building Boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification cost for Asbestos Cement Building Boards varies depending on factors such as product variants, testing requirements, and factory inspection complexity. Costs usually include application fees, laboratory testing charges, inspection fees, and annual license fees. Manufacturers with multiple board sizes or densities may incur higher costs due to additional testing. Proper planning and documentation can help reduce unexpected expenses during the certification process.",
      },
    },
    {
      "@type": "Question",
      name: "What tests are conducted under IS 2098:1997?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing under IS 2098:1997 includes strength tests, water absorption tests, dimensional accuracy checks, and durability assessments. These tests ensure that the boards can withstand environmental conditions and structural loads. Testing must be conducted in BIS recognized laboratories to ensure reliability and compliance with regulatory requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is BIS certification mandatory for imported boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, imported Asbestos Cement Building Boards must also comply with BIS Certification requirements. Importers need to obtain certification under the Foreign Manufacturers Certification Scheme (FMCS). This ensures that imported products meet the same quality standards as domestically manufactured boards.",
      },
    },
    {
      "@type": "Question",
      name: "Can a manufacturer apply for multiple product variants under one license?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, manufacturers can include multiple variants such as different thicknesses or densities under one BIS License, provided all variants comply with IS 2098:1997. However, each variant may require separate testing to ensure compliance, which can affect the overall bis license cost for Asbestos Cement Building Boards.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a product fails laboratory testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a product fails testing, the manufacturer must identify and correct the issues in the production process. This may involve adjusting raw material composition, curing methods, or manufacturing techniques. The product must then be retested to demonstrate compliance before certification can proceed.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIS certification be transferred if ownership of the manufacturing unit changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, a BIS License for Asbestos Cement Building Boards is not automatically transferable when ownership changes. The new owner must apply for a fresh certification or request modification of the existing license through proper legal documentation. BIS evaluates whether the manufacturing setup, quality control systems, and product specifications remain consistent. This ensures that certification is always linked to a verified manufacturing entity rather than just the product name.",
      },
    },
    {
      "@type": "Question",
      name: "What role does curing play in BIS compliance for asbestos cement boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Curing is a crucial stage in manufacturing asbestos cement boards, directly affecting their strength and durability. BIS Certification for Asbestos Cement Building Boards requires manufacturers to follow controlled curing processes to ensure proper hydration of cement and bonding with fibers. Improper curing can lead to weak boards that fail strength or durability tests. During factory audits, inspectors closely examine curing conditions, duration, and consistency to confirm compliance with IS 2098:1997.",
      },
    },
    {
      "@type": "Question",
      name: "Are there restrictions on raw materials used in certified boards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BIS Certification for Asbestos Cement Building Boards requires strict control over raw materials such as cement quality, fiber content, and additives. The composition must meet defined parameters to ensure strength, durability, and safety. Using substandard or inconsistent materials can lead to failure in laboratory testing. Manufacturers must maintain traceability of raw materials and conduct regular checks to ensure that every batch meets the required specifications.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification impact large infrastructure or government projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many government and infrastructure projects, only certified construction materials are approved for use. Having a BIS Certificate for Asbestos Cement Building Boards significantly improves eligibility for such projects. Contractors and project authorities rely on certification as proof of compliance with technical standards. This reduces the need for additional verification and ensures that materials used in public infrastructure meet durability and safety expectations over long service periods.",
      },
    },
    {
      "@type": "Question",
      name: "Is it necessary to retest products after making minor design or thickness changes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, even minor changes in design, thickness, or composition may require retesting under the BIS certification process for Asbestos Cement Building Boards. Such changes can affect strength, weight, and durability characteristics. BIS requires manufacturers to notify any modifications and may mandate fresh testing to ensure continued compliance with IS 2098:1997. This prevents variations in product quality that could impact real-world performance.",
      },
    },
  ],
};

const BISCertificationforAsbestosCementBuildingBoards = () => {
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

export default BISCertificationforAsbestosCementBuildingBoards;

const MetaTags = () => {
  const title =
    "BIS Certificate for Cement Building Boards - Process, Cost, Documents";
  const ogTitle =
    "BIS Certificate for Cement Building Boards - Process, Cost, Documents";
  const twitterTitle =
    "BIS Certificate for Cement Building Boards - Process, Cost, Documents";
  const metaDescription =
    "Get BIS Certificate for Cement Building Boards under IS 2098:1997. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Cement Building Boards as per IS 2098:1997. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Cement Building Boards under IS 2098:1997. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Cement Building Boards, BIS License for Cement Building Boards, IS 2098:1997 , BIS Certification for Cement Building Boards";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cement-building-boards-is-2098";
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
                    BIS Certificate for Asbestos Cement Building Boards
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
          BIS Certification for Asbestos Cement Building Boards – IS 2098:1997
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCementPipesandFittings.png"
            title="BIS Certification for Asbestos Cement Building Boards"
            alt="BIS Certificate for Cement Building Boards - IS 2098:1997 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Building Boards under IS 2098:1997
          ensures that these boards meet strict requirements for strength, durability, and
          safe usage in construction applications. Certification is essential in India to
          regulate structural reliability, prevent material degradation, and ensure
          long-term performance in residential, commercial, and industrial building
          environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Asbestos Cement Building Boards are widely used in modern construction due to their
          versatility, durability, and resistance to moisture, heat, and fire. These boards
          are commonly installed in ceilings, partitions, wall cladding, and roofing
          underlays, making them a crucial component in both residential and industrial
          infrastructure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because these boards are integrated into structural and semi-structural elements,
          any compromise in their quality can lead to safety hazards, premature
          deterioration, or costly repairs. For example, a poorly manufactured board may
          crack under load, absorb excessive moisture, or lose strength over time, affecting
          the stability of installations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India, regulatory oversight ensures that such construction materials perform
          consistently across varying environmental conditions. This is where BIS
          Certification for Asbestos Cement Building Boards becomes important. It serves as
          a verification mechanism that confirms whether the product has been designed,
          manufactured, and tested according to IS 2098:1997.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and sellers, obtaining a BIS License for Asbestos
          Cement Building Boards is not just a compliance requirement—it is a signal to the
          market that the product can be relied upon in demanding construction scenarios.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certificate for Asbestos Cement Building Boards - IS 2098:1997
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Building Boards focuses on validating how
          well the product performs when used in real construction environments. Unlike
          decorative materials, these boards must handle structural stress, exposure to
          moisture, and temperature fluctuations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          During manufacturing, asbestos cement boards are created by combining cement with
          reinforcing fibers, which are then compressed and cured into flat sheets.
          Variations in raw material quality, mixing ratios, curing conditions, or pressing
          techniques can significantly impact the board&apos;s strength and durability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification framework evaluates whether:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The boards maintain uniform thickness and density</li>
          <li>They resist cracking, warping, or delamination</li>
          <li>They can withstand environmental exposure</li>
          <li>They retain mechanical strength over time</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This process ensures that end-users—whether contractors, builders, or
          homeowners—receive products that perform reliably throughout their lifecycle.
          When you plan the licence route itself, it helps to align product-specific work
          with how Indian BIS operates overall —{" "}
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
          Applicable BIS Standard for Asbestos Cement Building Boards - IS 2098:1997
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 2098:1997
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard <strong>IS 2098:1997</strong> outlines the technical specifications for
          asbestos cement flat boards used in building applications. It defines the
          requirements for manufacturing, testing, and quality control to ensure that the
          boards meet structural and performance expectations.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">This standard applies to flat sheets used in:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ceiling panels</li>
          <li>Partition walls</li>
          <li>Cladding systems</li>
          <li>Insulation backing</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 2098:1997 categorizes boards based on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thickness</li>
          <li>Density</li>
          <li>Intended application (load-bearing vs non-load-bearing)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">The standard ensures that boards:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain structural integrity under load</li>
          <li>Resist moisture absorption</li>
          <li>Withstand environmental exposure</li>
          <li>Provide fire resistance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">The standard incorporates:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mechanical strength testing</li>
          <li>Water absorption limits</li>
          <li>Dimensional stability checks</li>
          <li>Surface finish requirements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These criteria ensure that every BIS Certified product is suitable for long-term
          construction use.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 2098:1997
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing ensures that boards meet structural and environmental performance
          expectations.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Safety Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural strength evaluation</li>
          <li>Crack resistance testing</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Performance Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing capacity</li>
          <li>Flexural strength</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Durability Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Moisture resistance</li>
          <li>Weather exposure testing</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thickness consistency</li>
          <li>Surface finish</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be conducted in BIS recognized laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">Conclusion</h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Building Boards is essential for ensuring
          that construction materials meet the performance and durability expectations
          required in real-world applications. By complying with IS 2098:1997, manufacturers
          demonstrate their commitment to producing reliable and safe products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS License for Asbestos Cement Building Boards not only enables
          regulatory compliance but also strengthens market credibility and long-term business
          growth. For manufacturers, importers, and sellers, investing in certification is a
          strategic step toward building trust, ensuring product reliability, and expanding
          market opportunities in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Asbestos Cement Building Boards - IS 2098:1997
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the typical BIS certification cost for Asbestos Cement Building Boards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The bis certification cost for Asbestos Cement Building Boards varies depending
              on factors such as product variants, testing requirements, and factory inspection
              complexity. Costs usually include application fees, laboratory testing charges,
              inspection fees, and annual license fees. Manufacturers with multiple board sizes
              or densities may incur higher costs due to additional testing. Proper planning and
              documentation can help reduce unexpected expenses during the certification process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What tests are conducted under IS 2098:1997?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing under IS 2098:1997 includes strength tests, water absorption tests,
              dimensional accuracy checks, and durability assessments. These tests ensure that
              the boards can withstand environmental conditions and structural loads. Testing must
              be conducted in BIS recognized laboratories to ensure reliability and compliance
              with regulatory requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Is BIS certification mandatory for imported boards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, imported Asbestos Cement Building Boards must also comply with BIS
              Certification requirements. Importers need to obtain certification under the
              Foreign Manufacturers Certification Scheme (FMCS). This ensures that imported
              products meet the same quality standards as domestically manufactured boards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can a manufacturer apply for multiple product variants under one license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, manufacturers can include multiple variants such as different thicknesses or
              densities under one BIS License, provided all variants comply with IS 2098:1997.
              However, each variant may require separate testing to ensure compliance, which can
              affect the overall bis license cost for Asbestos Cement Building Boards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What happens if a product fails laboratory testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If a product fails testing, the manufacturer must identify and correct the issues
              in the production process. This may involve adjusting raw material composition,
              curing methods, or manufacturing techniques. The product must then be retested
              to demonstrate compliance before certification can proceed.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Can BIS certification be transferred if ownership of the manufacturing unit
              changes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, a BIS License for Asbestos Cement Building Boards is not automatically
              transferable when ownership changes. The new owner must apply for a fresh
              certification or request modification of the existing license through proper legal
              documentation. BIS evaluates whether the manufacturing setup, quality control
              systems, and product specifications remain consistent. This ensures that
              certification is always linked to a verified manufacturing entity rather than
              just the product name.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What role does curing play in BIS compliance for asbestos cement boards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Curing is a crucial stage in manufacturing asbestos cement boards, directly
              affecting their strength and durability. BIS Certification for Asbestos Cement
              Building Boards requires manufacturers to follow controlled curing processes to
              ensure proper hydration of cement and bonding with fibers. Improper curing can
              lead to weak boards that fail strength or durability tests. During factory audits,
              inspectors closely examine curing conditions, duration, and consistency to confirm
              compliance with IS 2098:1997.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Are there restrictions on raw materials used in certified boards?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS Certification for Asbestos Cement Building Boards requires strict control
              over raw materials such as cement quality, fiber content, and additives. The
              composition must meet defined parameters to ensure strength, durability, and safety.
              Using substandard or inconsistent materials can lead to failure in laboratory testing.
              Manufacturers must maintain traceability of raw materials and conduct regular checks
              to ensure that every batch meets the required specifications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. How does BIS certification impact large infrastructure or government projects?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In many government and infrastructure projects, only certified construction materials
              are approved for use. Having a BIS Certificate for Asbestos Cement Building Boards
              significantly improves eligibility for such projects. Contractors and project
              authorities rely on certification as proof of compliance with technical standards.
              This reduces the need for additional verification and ensures that materials used in
              public infrastructure meet durability and safety expectations over long service periods.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Is it necessary to retest products after making minor design or thickness changes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, even minor changes in design, thickness, or composition may require retesting
              under the BIS certification process for Asbestos Cement Building Boards. Such changes
              can affect strength, weight, and durability characteristics. BIS requires manufacturers
              to notify any modifications and may mandate fresh testing to ensure continued
              compliance with IS 2098:1997. This prevents variations in product quality that could
              impact real-world performance.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6" />


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
            src="/pdf/2098_1997_reff2022.pdf"
            title="IS 2098:1997 - Asbestos Cement Building Boards PDF"
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
