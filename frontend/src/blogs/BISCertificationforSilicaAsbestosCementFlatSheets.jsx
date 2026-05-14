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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/silica-asbestos-cement-flat-sheets-is-13000",
  },
  headline:
    "BIS Certification for Silica-Asbestos-Cement Flat Sheets – IS 13000:1990",
  description:
    "A comprehensive guide to BIS Certification for Silica Asbestos Cement Flat Sheets under IS 13000:1990, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
  image:
    "https://bis-certifications.com/blogImages/BISLicenseforSilicaAsbestosCementFlatSheets.webp",
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
  name: "BIS Certification for Silica-Asbestos-Cement Flat Sheets – IS 13000:1990",
  image:
    "https://bis-certifications.com/blogImages/BISLicenseforSilicaAsbestosCementFlatSheets.webp",
  description:
    "A comprehensive guide to BIS Certification for Silica Asbestos Cement Flat Sheets under IS 13000:1990, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
      name: "What factors influence the BIS certification cost for Silica-Asbestos-Cement Flat Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of BIS Certification for Silica-Asbestos-Cement Flat Sheets depends on multiple factors such as product complexity, number of variants, laboratory testing requirements, and factory inspection scope. Manufacturers must also account for application fees, audit charges, and annual license fees. If additional testing is required due to non-compliance, the overall cost may increase. Proper preparation and accurate documentation can help control certification expenses effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Can imported sheets obtain BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, imported products must also obtain a BIS License for Silica-Asbestos-Cement Flat Sheets before entering the Indian market. Foreign manufacturers must appoint an authorized representative in India and comply with the same testing and inspection requirements. Certification ensures that imported sheets meet Indian standards and are safe for use in construction projects.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification ensure uniform thickness in silica-asbestos-cement flat sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uniform thickness is critical for structural balance and installation stability. BIS Certification for Silica-Asbestos-Cement Flat Sheets requires strict adherence to dimensional tolerances specified in IS 13000: 1990. During testing, sheets are measured at multiple points to ensure consistency. Uneven thickness can lead to weak spots, cracking, or improper fitting during installation. Certification ensures that manufacturers maintain precision during pressing and curing processes, resulting in reliable and structurally consistent sheets.",
      },
    },
    {
      "@type": "Question",
      name: "Are BIS-certified flat sheets suitable for high-humidity or coastal environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, BIS Certification for Silica-Asbestos-Cement Flat Sheets ensures that products are tested for resistance to moisture and environmental exposure. Sheets used in coastal or high-humidity regions must withstand water absorption and prevent degradation over time. IS 13000: 1990 includes durability-related evaluations to confirm that certified sheets can perform reliably in such challenging conditions without losing strength or stability.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification address surface finish quality in flat sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surface finish plays an important role in both aesthetics and performance. BIS Certification for Silica-Asbestos-Cement Flat Sheets ensures that sheets have a smooth and uniform surface free from visible defects such as cracks, voids, or uneven textures. IS 13000: 1990 includes visual inspection and quality checks to ensure that the surface is suitable for applications like painting, coating, or direct use in construction.",
      },
    },
    {
      "@type": "Question",
      name: "Can BIS certification improve the resale or long-term value of construction projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, using materials with BIS Certification for Silica-Asbestos-Cement Flat Sheets can enhance the long-term value of buildings. Certified materials are associated with reliability and compliance, which can positively influence property valuation and buyer confidence. Projects built with certified materials are also less likely to face structural issues, reducing maintenance costs and improving overall lifecycle performance.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification impact infrastructure and government project approvals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIS Certification for Silica-Asbestos-Cement Flat Sheets plays a crucial role in public infrastructure projects. Government tenders often specify IS 13000: 1990 compliance as a mandatory requirement. Certified products are preferred because they ensure predictable performance under load, environmental exposure, and long-term usage. Without a BIS License for Silica-Asbestos-Cement Flat Sheets, suppliers may be disqualified from participating in large-scale construction or public works contracts.",
      },
    },
    {
      "@type": "Question",
      name: "What are the risks of using non-certified silica-asbestos-cement flat sheets in construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using non-certified sheets can result in serious structural and safety concerns. These may include uneven thickness, poor bonding between cement and asbestos fibers, and reduced load-bearing capacity. Over time, such defects can lead to cracks, breakage, or failure under stress. BIS Certification for Silica-Asbestos-Cement Flat Sheets ensures that the product meets minimum strength and durability benchmarks, reducing long-term risks in construction projects.",
      },
    },
    {
      "@type": "Question",
      name: "Does BIS certification include evaluation of raw material sourcing for these sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the BIS certification process for Silica-Asbestos-Cement Flat Sheets involves scrutiny of raw materials such as cement, asbestos fibers, and additives. Manufacturers must maintain consistent quality in sourcing and storage to meet IS 13000: 1990 requirements. During factory audits, inspectors verify material handling procedures, supplier records, and quality checks to ensure that raw materials contribute to the final product's performance and compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can imported silica-asbestos-cement flat sheets be sold in India without BIS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, imported products must comply with Indian standards before entering the market. Foreign manufacturers must obtain BIS Certification for Silica-Asbestos-Cement Flat Sheets through the Foreign Manufacturers Certification Scheme (FMCS). Without this certification, imported sheets cannot be legally sold or distributed in India. Importers are also responsible for ensuring that the products meet IS 13000: 1990 requirements before shipment.",
      },
    },
  ],
};

const BISCertificationforSilicaAsbestosCementFlatSheets = () => {
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

export default BISCertificationforSilicaAsbestosCementFlatSheets;

const MetaTags = () => {
  const title =
    "BIS Certificate for Silica Asbestos Cement Flat Sheets - Process, Cost, Documentation";
  const ogTitle =
    "BIS Certificate for Silica Asbestos Cement Flat Sheets - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Silica Asbestos Cement Flat Sheets - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Silica Asbestos Cement Flat Sheets under IS 13000:1990. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Silica Asbestos Cement Flat Sheets as per IS 13000:1990. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Silica Asbestos Cement Flat Sheets under IS 13000:1990. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Silica Asbestos Cement Flat Sheets, BIS License for Silica Asbestos Cement Flat Sheets, IS 13000:1990 , BIS Certification for Silica Asbestos Cement Flat Sheets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/silica-asbestos-cement-flat-sheets-is-13000";
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
                    BIS Certificate for Silica Asbestos Cement Flat Sheets
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
          BIS Certification for Silica-Asbestos-Cement Flat Sheets – IS
          13000:1990
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforSilicaAsbestosCementFlatSheets.webp"
            title="BIS Certification for Silica-Asbestos-Cement Flat Sheets"
            alt="BIS Certificate for Silica Asbestos Cement Flat Sheets - IS 13000:1990 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Silica-Asbestos-Cement Flat Sheets under IS
          13000:1990 ensures that these construction-grade sheets meet defined
          strength, durability, and safety benchmarks for roofing, partitioning,
          and cladding applications in India. Certification is required to
          verify material consistency, structural performance, and safe usage in
          building environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Silica-asbestos-cement flat sheets are widely used in the construction
          industry for roofing, wall partitioning, false ceilings, and industrial
          enclosures. Their popularity comes from their ability to provide a
          combination of rigidity, weather resistance, and cost efficiency. These
          sheets are commonly seen in warehouses, factories, rural housing, and
          temporary structures where durability and affordability are key
          considerations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, the performance of these sheets directly impacts structural
          safety. If the material composition is not properly controlled, sheets
          may crack, warp, or fail under environmental stress. Poorly manufactured
          sheets can also lead to issues such as water seepage, reduced
          load-bearing capacity, and faster degradation over time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India&apos;s construction ecosystem, where climatic conditions vary
          from extreme heat to heavy rainfall, ensuring consistent quality in
          building materials is essential. This is where the BIS Certificate for
          Silica-Asbestos-Cement Flat Sheets becomes highly relevant. It provides
          a structured framework to verify that every sheet produced meets
          performance expectations suitable for Indian conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and suppliers, obtaining a BIS
          Certification for Silica-Asbestos-Cement Flat Sheets is not just about
          regulatory compliance—it is about delivering reliable building
          materials that perform consistently across diverse applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Silica-Asbestos-Cement Flat
          Sheets– IS 13000:1990
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Silica-asbestos-cement flat sheets are composite materials made by
          combining cement, silica, and asbestos fibers. The fibers provide
          reinforcement, while cement acts as a binding agent. This combination
          must be precisely controlled to ensure uniform strength and stability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Silica-Asbestos-Cement Flat Sheets focuses on
          validating this composition and the resulting product performance. It
          ensures that the sheets:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain structural integrity under load</li>
          <li>Resist cracking during handling and installation</li>
          <li>
            Perform reliably under exposure to moisture and temperature changes
          </li>
          <li>Offer consistent thickness and density across batches</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          From a regulatory standpoint, certification ensures that manufacturers
          follow standardized production practices rather than relying on
          variable or unverified processes. For example, improper curing of
          cement sheets can lead to internal weaknesses that are not visible during
          initial inspection but can cause failure later.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For end users—such as builders, contractors, and homeowners—certified
          sheets provide assurance that the material will not fail prematurely,
          reducing the risk of repair costs and safety hazards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Silica-Asbestos-Cement Flat Sheets – IS
          13000:1990
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The relevant standard governing this product is{" "}
          <strong>IS 13000:1990</strong>, which specifies requirements for
          silica-asbestos-cement flat sheets used in construction.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 13000:1990
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">This standard covers:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Flat sheets manufactured using cement and asbestos fibers</li>
          <li>Sheets intended for roofing, cladding, and partitioning</li>
          <li>Products used in both residential and industrial structures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Objectives of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          IS 13000: 1990 is designed to ensure that the sheets:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Possess adequate mechanical strength to withstand handling and installation</li>
          <li>Maintain dimensional stability over time</li>
          <li>
            Resist environmental degradation such as moisture absorption and
            thermal expansion
          </li>
          <li>Provide uniform thickness and surface finish</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Considerations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The standard outlines requirements for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Raw material quality (cement grade, fiber composition)</li>
          <li>Manufacturing processes (mixing, pressing, curing)</li>
          <li>Physical and mechanical properties (density, bending strength)</li>
          <li>Surface characteristics and finish</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          By aligning with IS 13000: 1990, manufacturers ensure that their products
          meet consistent quality benchmarks suitable for Indian construction
          conditions.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 13000:1990
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing ensures that sheets meet performance expectations.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Structural integrity under load</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Bending strength</li>
          <li>Dimensional stability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Resistance to moisture and weather</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thickness consistency</li>
          <li>Surface finish</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All testing must be conducted in BIS-recognized laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Silica-Asbestos-Cement Flat Sheets under IS
          13000: 1990 plays a critical role in ensuring that construction materials
          used across India meet consistent performance and safety expectations.
          From manufacturing processes to final product testing, certification
          ensures that every sheet delivers reliability in real-world conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and suppliers, obtaining a BIS Certificate for
          Silica-Asbestos-Cement Flat Sheets is not just a regulatory
          requirement—it is a strategic step toward building trust, expanding
          market access, and ensuring long-term business growth.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Silica-Asbestos-Cement Flat Sheets
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What factors influence the BIS certification cost for
              Silica-Asbestos-Cement Flat Sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The cost of BIS Certification for Silica-Asbestos-Cement Flat Sheets
              depends on multiple factors such as product complexity, number of
              variants, laboratory testing requirements, and factory inspection
              scope. Manufacturers must also account for application fees, audit
              charges, and annual license fees. If additional testing is required
              due to non-compliance, the overall cost may increase. Proper
              preparation and accurate documentation can help control certification
              expenses effectively.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Can imported sheets obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, imported products must also obtain a BIS License for
              Silica-Asbestos-Cement Flat Sheets before entering the Indian market.
              Foreign manufacturers must appoint an authorized representative in
              India and comply with the same testing and inspection requirements.
              Certification ensures that imported sheets meet Indian standards and
              are safe for use in construction projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. How does BIS certification ensure uniform thickness in
              silica-asbestos-cement flat sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Uniform thickness is critical for structural balance and installation
              stability. BIS Certification for Silica-Asbestos-Cement Flat Sheets
              requires strict adherence to dimensional tolerances specified in IS
              13000: 1990. During testing, sheets are measured at multiple points
              to ensure consistency. Uneven thickness can lead to weak spots,
              cracking, or improper fitting during installation. Certification
              ensures that manufacturers maintain precision during pressing and
              curing processes, resulting in reliable and structurally consistent
              sheets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Are BIS-certified flat sheets suitable for high-humidity or
              coastal environments?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS Certification for Silica-Asbestos-Cement Flat Sheets
              ensures that products are tested for resistance to moisture and
              environmental exposure. Sheets used in coastal or high-humidity
              regions must withstand water absorption and prevent degradation over
              time. IS 13000: 1990 includes durability-related evaluations to
              confirm that certified sheets can perform reliably in such challenging
              conditions without losing strength or stability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS certification address surface finish quality in flat
              sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Surface finish plays an important role in both aesthetics and
              performance. BIS Certification for Silica-Asbestos-Cement Flat
              Sheets ensures that sheets have a smooth and uniform surface free
              from visible defects such as cracks, voids, or uneven textures. IS
              13000: 1990 includes visual inspection and quality checks to ensure
              that the surface is suitable for applications like painting, coating,
              or direct use in construction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Can BIS certification improve the resale or long-term value of
              construction projects?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, using materials with BIS Certification for
              Silica-Asbestos-Cement Flat Sheets can enhance the long-term value of
              buildings. Certified materials are associated with reliability and
              compliance, which can positively influence property valuation and buyer
              confidence. Projects built with certified materials are also less
              likely to face structural issues, reducing maintenance costs and
              improving overall lifecycle performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. How does BIS certification impact infrastructure and government
              project approvals?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS Certification for Silica-Asbestos-Cement Flat Sheets plays a
              crucial role in public infrastructure projects. Government tenders
              often specify IS 13000: 1990 compliance as a mandatory requirement.
              Certified products are preferred because they ensure predictable
              performance under load, environmental exposure, and long-term usage.
              Without a BIS License for Silica-Asbestos-Cement Flat Sheets,
              suppliers may be disqualified from participating in large-scale
              construction or public works contracts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What are the risks of using non-certified
              silica-asbestos-cement flat sheets in construction?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Using non-certified sheets can result in serious structural and
              safety concerns. These may include uneven thickness, poor bonding
              between cement and asbestos fibers, and reduced load-bearing capacity.
              Over time, such defects can lead to cracks, breakage, or failure under
              stress. BIS Certification for Silica-Asbestos-Cement Flat Sheets
              ensures that the product meets minimum strength and durability
              benchmarks, reducing long-term risks in construction projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Does BIS certification include evaluation of raw material sourcing
              for these sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, the BIS certification process for Silica-Asbestos-Cement Flat
              Sheets involves scrutiny of raw materials such as cement, asbestos
              fibers, and additives. Manufacturers must maintain consistent quality
              in sourcing and storage to meet IS 13000: 1990 requirements. During
              factory audits, inspectors verify material handling procedures,
              supplier records, and quality checks to ensure that raw materials
              contribute to the final product&apos;s performance and compliance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Can imported silica-asbestos-cement flat sheets be sold in India
              without BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, imported products must comply with Indian standards before
              entering the market. Foreign manufacturers must obtain BIS
              Certification for Silica-Asbestos-Cement Flat Sheets through the
              Foreign Manufacturers Certification Scheme (FMCS). Without this
              certification, imported sheets cannot be legally sold or distributed
              in India. Importers are also responsible for ensuring that the
              products meet IS 13000: 1990 requirements before shipment.
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
