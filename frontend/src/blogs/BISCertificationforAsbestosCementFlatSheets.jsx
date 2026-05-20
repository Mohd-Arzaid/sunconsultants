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
  "https://bis-certifications.com/blogImages/BISLicenseforCementFlatSheets.png";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Cement Flat Sheets under IS 2096:1992, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/cement-flat-sheets-is-2096",
  },
  headline:
    "BIS Certification for Asbestos Cement Flat Sheets – IS 2096:1992",
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
  name: "BIS Certification for Asbestos Cement Flat Sheets – IS 2096:1992",
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
      name: "What is the BIS certification cost for Asbestos Cement Flat Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification cost for Asbestos Cement Flat Sheets varies depending on factors such as product variants, testing requirements, and inspection scope. Costs typically include application fees, laboratory testing charges, factory audit expenses, and annual license fees. Manufacturers producing multiple sheet sizes or thicknesses may incur higher costs due to additional testing. Proper planning and accurate documentation can help control expenses and avoid unnecessary delays in the certification process.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to obtain BIS Certification for these sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The bis certification process for Asbestos Cement Flat Sheets generally takes 30 to 60 days, depending on testing timelines and document verification. Delays may occur if samples fail testing or if there are gaps in documentation. Efficient coordination with BIS recognized laboratories and readiness for factory inspection can significantly reduce approval time and ensure faster certification.",
      },
    },
    {
      "@type": "Question",
      name: "What tests are conducted under IS 2096:1992?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing under IS 2096:1992 includes flexural strength tests, water absorption checks, dimensional accuracy verification, and durability assessments. These tests ensure that the sheets can withstand environmental conditions and structural loads. Testing must be conducted in BIS recognized laboratories to ensure compliance and reliability.",
      },
    },
    {
      "@type": "Question",
      name: "What factors influence the BIS certification cost for Asbestos Cement Flat Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BIS certification cost for Asbestos Cement Flat Sheets depends on multiple factors such as manufacturing scale, number of product variants, testing complexity, and factory readiness. Costs typically include application fees, product testing charges, inspection expenses, and annual license fees. If multiple thicknesses or grades are manufactured, each may require separate testing. Additionally, non-compliance during inspection may increase costs due to re-evaluation. Therefore, manufacturers should plan their budget considering both initial and recurring certification expenses.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification improve the reliability of asbestos cement flat sheets in construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS certification ensures that asbestos cement flat sheets meet defined performance benchmarks such as strength, durability, and resistance to environmental conditions. These sheets are widely used in roofing, cladding, and partitions, where failure can lead to structural risks. Certification verifies that the sheets maintain consistent thickness, density, and bonding strength. This reduces the chances of cracking, warping, or premature deterioration, ensuring that builders and contractors can rely on the product for long-term construction applications.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical timeline for obtaining BIS certification for Asbestos Cement Flat Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The BIS certification process generally takes between 30 to 60 days, depending on how quickly documentation, testing, and inspection stages are completed. Sample testing in BIS-recognized laboratories is often the most time-consuming step, especially if re-testing is required. Factory inspections also depend on scheduling and readiness. Delays can occur if documentation is incomplete or manufacturing processes do not meet standard requirements. Proper preparation and expert guidance can significantly reduce the overall certification timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Can imported asbestos cement flat sheets be sold in India without BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Imported asbestos cement flat sheets cannot be legally marketed in India without meeting applicable BIS requirements. Importers must ensure that the foreign manufacturer obtains a BIS License under the relevant certification scheme. This includes compliance with IS 2096: 1992, product testing in approved laboratories, and factory audits. Without certification, products may be stopped at customs, leading to financial losses, shipment delays, and legal complications for importers and distributors.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification support large infrastructure and government projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Government tenders and infrastructure projects often require certified materials to ensure durability and compliance with safety norms. BIS Certification for Asbestos Cement Flat Sheets acts as a pre-approved quality benchmark, making it easier for manufacturers to participate in such projects. Certified products are more likely to be selected because they reduce risk for contractors and project authorities. This not only improves market access but also enhances the manufacturer's credibility in large-scale construction sectors.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a manufacturer fails the factory inspection during certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a manufacturer fails the factory inspection, BIS may issue observations or non-conformity reports that must be addressed before proceeding. Common issues include inadequate quality control systems, lack of testing equipment, or poor record-keeping practices. The manufacturer is required to implement corrective actions and may need to undergo re-inspection. This can delay the certification process and increase costs. Maintaining proper quality assurance procedures is essential for successful inspection clearance.",
      },
    },
    {
      "@type": "Question",
      name: "What role does labelling play in BIS certification compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Labelling is a critical aspect of BIS compliance because it communicates essential product information to users and regulators. Certified asbestos cement flat sheets must carry the ISI mark along with details such as manufacturer name, standard number (IS 2096: 1992), and license number. Incorrect or missing labeling can result in regulatory action, even if the product itself meets quality standards. Proper labeling ensures traceability, authenticity, and compliance in the marketplace.",
      },
    },
  ],
};

const BISCertificationforAsbestosCementFlatSheets = () => {
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

export default BISCertificationforAsbestosCementFlatSheets;

const MetaTags = () => {
  const title =
    "BIS Certificate for Cement Flat Sheets - Process, Cost, Documents";
  const ogTitle =
    "BIS Certificate for Cement Flat Sheets - Process, Cost, Documents";
  const twitterTitle =
    "BIS Certificate for Cement Flat Sheets - Process, Cost, Documents";
  const metaDescription =
    "Get BIS Certificate for Cement Flat Sheets under IS 2096:1992. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Cement Flat Sheets as per IS 2096:1992. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Cement Flat Sheets under IS 2096:1992. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Cement Flat Sheets, BIS License for Cement Flat Sheets, IS 2096:1992, BIS Certification for Cement Flat Sheets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cement-flat-sheets-is-2096";
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
                    BIS Certificate for Asbestos Cement Flat Sheets
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
          BIS Certification for Asbestos Cement Flat Sheets – IS 2096: 1992
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCementFlatSheets.png"
            title="BIS Certification for Asbestos Cement Flat Sheets"
            alt="BIS Certificate for Cement Flat Sheets - IS 2096:1992 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Flat Sheets under IS 2096:1992
          verifies that sheets used in roofing, partitions, and cladding meet defined
          strength, moisture resistance, and durability criteria. Certification is
          required in India to control structural performance, ensure safe long-term use
          in buildings, and maintain consistency across manufactured construction
          materials.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Asbestos Cement Flat Sheets are widely used across construction sectors in
          India, particularly in roofing systems, wall partitions, industrial sheds, and
          cladding applications. These sheets are valued for their ability to withstand
          environmental stress, resist fire, and provide long-lasting performance in both
          residential and commercial structures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, their performance depends heavily on manufacturing precision. If raw
          materials are not properly proportioned or curing is inconsistent, the sheets may
          crack, absorb moisture, or lose structural integrity over time. Such failures can
          lead to leaks in roofing, instability in partitions, or costly repairs in
          infrastructure projects.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This is why regulatory control over such materials is critical. BIS Certification
          for Asbestos Cement Flat Sheets plays a central role in ensuring that each sheet
          used in construction meets established technical benchmarks. It acts as a
          validation system that checks whether the product can handle real-life conditions
          such as load, weather exposure, and long-term usage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS License for Asbestos Cement Flat
          Sheets is not just about meeting legal requirements—it is about proving that their
          products are reliable, consistent, and suitable for demanding construction
          environments.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Asbestos Cement Flat Sheets - IS 2096: 1992
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Flat Sheets is designed to evaluate how
          these sheets perform when used in practical construction scenarios. Since these
          sheets are often exposed to varying weather conditions, structural loads, and
          installation stresses, their quality must be consistent and dependable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process examines several product-specific aspects:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Material composition: Ensuring the correct ratio of cement and reinforcing fibers</li>
          <li>Manufacturing uniformity: Maintaining consistent thickness and density across batches</li>
          <li>Structural performance: Verifying that sheets can withstand bending, pressure, and load</li>
          <li>Environmental resistance: Checking resistance to moisture, heat, and weathering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, a roofing sheet used in a coastal region must resist humidity and
          salt exposure, while a partition sheet in a commercial building must maintain
          dimensional stability over time. BIS Certification ensures that such variations in
          usage do not compromise product performance. When you plan the licence route itself,
          it helps to align product-specific work with how Indian BIS operates overall —{" "}
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
          Applicable BIS Standard for Asbestos Cement Flat Sheets - IS 2096: 1992
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 2096: 1992
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard <strong>IS 2096:1992</strong> specifies the requirements for asbestos
          cement flat sheets used in building applications. It provides detailed guidelines
          for manufacturing, testing, and quality control to ensure consistent performance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">This standard applies to flat sheets used in:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Roofing underlays</li>
          <li>Wall partitions</li>
          <li>Cladding systems</li>
          <li>False ceilings</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard classifies sheets based on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thickness</li>
          <li>Density</li>
          <li>Intended application</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">IS 2096:1992 ensures that sheets:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain strength under load</li>
          <li>Resist moisture penetration</li>
          <li>Withstand environmental exposure</li>
          <li>Provide durability over long service periods</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">The standard includes:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flexural strength requirements</li>
          <li>Water absorption limits</li>
          <li>Dimensional tolerance checks</li>
          <li>Surface quality parameters</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These principles ensure that every BIS Certified product is capable of delivering
          reliable performance in construction applications.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 2096: 1992
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Safety Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural strength evaluation</li>
          <li>Crack resistance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Performance Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing capacity</li>
          <li>Flexural strength</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">Durability Tests</h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Moisture resistance</li>
          <li>Weather exposure</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thickness consistency</li>
          <li>Surface finish</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All testing must be conducted in BIS recognized laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">Conclusion</h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Asbestos Cement Flat Sheets is essential for ensuring that
          construction materials meet the performance and durability requirements expected in
          real-world applications. By complying with IS 2096:1992, manufacturers demonstrate
          their commitment to quality, reliability, and long-term product performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS License for Asbestos Cement Flat Sheets not only ensures regulatory
          compliance but also strengthens market credibility and expands business
          opportunities. For manufacturers, importers, and sellers, certification is a
          strategic investment that supports growth, trust, and consistent product quality in
          the Indian construction sector.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Asbestos Cement Flat Sheets
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the BIS certification cost for Asbestos Cement Flat Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The bis certification cost for Asbestos Cement Flat Sheets varies depending on
              factors such as product variants, testing requirements, and inspection scope.
              Costs typically include application fees, laboratory testing charges, factory
              audit expenses, and annual license fees. Manufacturers producing multiple sheet
              sizes or thicknesses may incur higher costs due to additional testing. Proper
              planning and accurate documentation can help control expenses and avoid
              unnecessary delays in the certification process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. How long does it take to obtain BIS Certification for these sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The bis certification process for Asbestos Cement Flat Sheets generally takes
              30 to 60 days, depending on testing timelines and document verification. Delays
              may occur if samples fail testing or if there are gaps in documentation.
              Efficient coordination with BIS recognized laboratories and readiness for
              factory inspection can significantly reduce approval time and ensure faster
              certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What tests are conducted under IS 2096:1992?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing under IS 2096:1992 includes flexural strength tests, water absorption
              checks, dimensional accuracy verification, and durability assessments. These
              tests ensure that the sheets can withstand environmental conditions and
              structural loads. Testing must be conducted in BIS recognized laboratories to
              ensure compliance and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What factors influence the BIS certification cost for Asbestos Cement Flat
              Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification cost for Asbestos Cement Flat Sheets depends on multiple
              factors such as manufacturing scale, number of product variants, testing
              complexity, and factory readiness. Costs typically include application fees,
              product testing charges, inspection expenses, and annual license fees. If
              multiple thicknesses or grades are manufactured, each may require separate
              testing. Additionally, non-compliance during inspection may increase costs due
              to re-evaluation. Therefore, manufacturers should plan their budget considering
              both initial and recurring certification expenses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS certification improve the reliability of asbestos cement flat
              sheets in construction?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS certification ensures that asbestos cement flat sheets meet defined
              performance benchmarks such as strength, durability, and resistance to
              environmental conditions. These sheets are widely used in roofing, cladding,
              and partitions, where failure can lead to structural risks. Certification
              verifies that the sheets maintain consistent thickness, density, and bonding
              strength. This reduces the chances of cracking, warping, or premature
              deterioration, ensuring that builders and contractors can rely on the product
              for long-term construction applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What is the typical timeline for obtaining BIS certification for Asbestos
              Cement Flat Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification process generally takes between 30 to 60 days, depending
              on how quickly documentation, testing, and inspection stages are completed.
              Sample testing in BIS-recognized laboratories is often the most time-consuming
              step, especially if re-testing is required. Factory inspections also depend
              on scheduling and readiness. Delays can occur if documentation is incomplete or
              manufacturing processes do not meet standard requirements. Proper preparation
              and expert guidance can significantly reduce the overall certification
              timeline.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Can imported asbestos cement flat sheets be sold in India without BIS
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Imported asbestos cement flat sheets cannot be legally marketed in India without
              meeting applicable BIS requirements. Importers must ensure that the foreign
              manufacturer obtains a BIS License under the relevant certification scheme.
              This includes compliance with IS 2096: 1992, product testing in approved
              laboratories, and factory audits. Without certification, products may be
              stopped at customs, leading to financial losses, shipment delays, and legal
              complications for importers and distributors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. How does BIS certification support large infrastructure and government
              projects?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Government tenders and infrastructure projects often require certified materials
              to ensure durability and compliance with safety norms. BIS Certification for
              Asbestos Cement Flat Sheets acts as a pre-approved quality benchmark, making it
              easier for manufacturers to participate in such projects. Certified products are
              more likely to be selected because they reduce risk for contractors and project
              authorities. This not only improves market access but also enhances the
              manufacturer&apos;s credibility in large-scale construction sectors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. What happens if a manufacturer fails the factory inspection during
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If a manufacturer fails the factory inspection, BIS may issue observations or
              non-conformity reports that must be addressed before proceeding. Common issues
              include inadequate quality control systems, lack of testing equipment, or poor
              record-keeping practices. The manufacturer is required to implement corrective
              actions and may need to undergo re-inspection. This can delay the certification
              process and increase costs. Maintaining proper quality assurance procedures is
              essential for successful inspection clearance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What role does labelling play in BIS certification compliance?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Labelling is a critical aspect of BIS compliance because it communicates essential
              product information to users and regulators. Certified asbestos cement flat sheets
              must carry the ISI mark along with details such as manufacturer name, standard
              number (IS 2096: 1992), and license number. Incorrect or missing labeling can
              result in regulatory action, even if the product itself meets quality standards.
              Proper labeling ensures traceability, authenticity, and compliance in the
              marketplace.
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
            src="/pdf/2096_1992_reff2022.pdf"
            title="IS 2096:1992 - Asbestos Cement Flat Sheets PDF"
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
