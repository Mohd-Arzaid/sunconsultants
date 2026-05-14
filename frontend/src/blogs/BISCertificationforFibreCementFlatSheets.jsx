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
  "https://bis-certifications.com/blogImages/BISLicenseforFibreCementFlatSheets.webp";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/fibre-cement-flat-sheets-is-14862",
  },
  headline:
    "BIS Certification for Fibre Cement Flat Sheets – IS 14862:2000",
  description:
    "A comprehensive guide to BIS Certification for Fibre Cement Flat Sheets under IS 14862:2000, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
  name: "BIS Certification for Fibre Cement Flat Sheets – IS 14862:2000",
  image: blogImageUrl,
  description:
    "A comprehensive guide to BIS Certification for Fibre Cement Flat Sheets under IS 14862:2000, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
      name: "Why is BIS certification important for fibre cement flat sheets used in construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fibre cement sheets are widely used in walls, ceilings, and cladding, where structural stability matters. BIS certification ensures these sheets can withstand load, moisture, and environmental exposure without cracking, bending, or deteriorating prematurely in real construction conditions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of fibre cement flat sheets are covered under IS 14862:2000?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard covers non-asbestos fibre cement flat sheets used for partitions, ceilings, cladding, and similar applications. It includes sheets of varying thicknesses designed to meet specific structural and non-structural building requirements.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification ensure strength in fibre cement flat sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certification requires testing of flexural strength and load-bearing capacity. These tests ensure the sheet can resist bending and mechanical stress during installation and long-term use without structural failure or surface cracking.",
      },
    },
    {
      "@type": "Question",
      name: "What role does water absorption testing play in certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Water absorption tests evaluate how much moisture a sheet can retain. Lower absorption ensures the sheet maintains its shape and strength, preventing swelling, warping, or weakening when exposed to rain or humidity.",
      },
    },
    {
      "@type": "Question",
      name: "Why is thickness uniformity critical in fibre cement flat sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uneven thickness can lead to weak points, increasing the risk of breakage during installation or use. BIS certification ensures consistent thickness across the sheet for uniform strength and reliable performance.",
      },
    },
    {
      "@type": "Question",
      name: "Can fibre cement sheets without certification be used in building projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Using non-certified sheets increases the risk of premature failure, especially in load-bearing or exposed applications. Certified sheets provide assurance of durability, making them more suitable for both residential and commercial construction.",
      },
    },
    {
      "@type": "Question",
      name: "How does BIS certification improve durability in outdoor applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certified sheets are tested for weather resistance, ensuring they can handle temperature changes, rain, and sunlight without degrading. This makes them suitable for external cladding and exposed construction areas.",
      },
    },
    {
      "@type": "Question",
      name: "What manufacturing issues can cause failure in BIS testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Improper cement-to-fibre ratio, inadequate curing, and poor compaction can lead to weak sheets. These defects may result in low strength, higher water absorption, or surface cracks, leading to rejection during certification testing.",
      },
    },
    {
      "@type": "Question",
      name: "How are fibre cement sheets tested for bending strength?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samples are subjected to flexural load tests where force is applied until bending occurs. This determines the sheet's ability to withstand structural stress during installation and use without cracking.",
      },
    },
    {
      "@type": "Question",
      name: "Why is curing process important for BIS-certified sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proper curing allows the cement matrix to gain strength and stability. Insufficient curing can result in brittle sheets, reduced durability, and failure under load or environmental stress conditions.",
      },
    },
  ],
};

const BISCertificationforFibreCementFlatSheets = () => {
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

export default BISCertificationforFibreCementFlatSheets;

const MetaTags = () => {
  const title =
    "BIS Certificate for Fibre Cement Flat Sheets - Process, Cost, Documentation";
  const ogTitle =
    "BIS Certificate for Fibre Cement Flat Sheets - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Fibre Cement Flat Sheets - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Fibre Cement Flat Sheets under IS 14862:2000. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Fibre Cement Flat Sheets as per IS 14862:2000. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Fibre Cement Flat Sheets under IS 14862:2000. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Fibre Cement Flat Sheets, BIS License for Fibre Cement Flat Sheets, IS 14862:2000, BIS Certification for Fibre Cement Flat Sheets";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/fibre-cement-flat-sheets-is-14862";
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
                    BIS Certificate for Fibre Cement Flat Sheets
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
          BIS Certification for Fibre Cement Flat Sheets – IS 14862:2000
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFibreCementFlatSheets.webp"
            title="BIS Certification for Fibre Cement Flat Sheets"
            alt="BIS Certificate for Fibre Cement Flat Sheets - IS 14862:2000 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Fibre Cement Flat Sheets confirms that sheets
          used in construction meet the technical requirements of IS
          14862:2000, including strength, dimensional stability, and weather
          resistance. Certification is required in India to ensure these sheets
          perform reliably in roofing, cladding, and partition applications
          without structural or safety risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fibre cement flat sheets have become a core material in modern
          construction, especially in applications such as wall panels,
          ceilings, partitions, and exterior cladding. Their popularity comes
          from a combination of properties—lightweight structure, resistance to
          moisture, fire-retardant characteristics, and ease of installation.
          From residential homes to industrial sheds and commercial buildings,
          these sheets are widely used across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, the performance of fibre cement sheets is directly influenced
          by their composition and manufacturing process. Variations in cement
          quality, fibre reinforcement, curing methods, or thickness uniformity
          can significantly impact durability and load-bearing capacity. A
          poorly manufactured sheet may crack under stress, absorb excess
          moisture, or degrade when exposed to environmental conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address these concerns, the Bureau of Indian Standards has
          established a regulatory framework that evaluates fibre cement sheets
          based on defined technical benchmarks. For manufacturers, obtaining a
          BIS Certificate for Fibre Cement Flat Sheets is not just about fulfilling
          regulatory requirements—it is about ensuring that their product can
          withstand real construction environments, from heavy rainfall to
          temperature fluctuations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With infrastructure development accelerating across India, certified
          building materials are increasingly preferred in government and
          private projects. For importers, contractors, and distributors,
          choosing BIS-certified fibre cement sheets ensures reliability,
          reduces maintenance costs, and aligns with compliance expectations.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Fibre Cement Flat Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          When evaluating BIS Certification for Fibre Cement Flat Sheets, it is
          essential to consider how certification directly relates to real-world
          construction usage rather than viewing it as a generic approval.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          These sheets are subjected to multiple stress factors once installed.
          They must handle mechanical loads, resist cracking, and maintain
          stability under environmental exposure. Unlike decorative materials,
          fibre cement sheets often serve as functional structural
          elements—meaning any failure can impact safety and building integrity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process assesses:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Load-bearing strength for structural applications</li>
          <li>Resistance to moisture absorption and swelling</li>
          <li>Stability under temperature changes</li>
          <li>Surface integrity and resistance to cracking</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, in roofing or external cladding, sheets are exposed to
          rain, UV radiation, and wind pressure. If the sheet absorbs water
          excessively or lacks proper curing, it may warp or weaken over time.
          Certification ensures such risks are minimized through strict testing
          and quality control measures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Additionally, certification requires manufacturers to maintain
          consistent production standards. This is critical because even minor
          variations in raw material ratios or curing conditions can lead to
          performance inconsistencies. By enforcing uniformity, the certification
          system ensures that every sheet produced meets the same level of
          quality.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For builders and contractors, this translates into predictable
          performance, reducing the chances of structural issues or premature
          replacement.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Fibre Cement Flat Sheets
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The relevant standard for this product category is{" "}
          <strong>IS 14862:2000</strong>, which provides detailed technical
          specifications for fibre cement flat sheets used in building
          applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 14862:2000
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard applies to non-asbestos fibre cement flat sheets
          manufactured using a combination of cement and reinforcing fibres. It
          defines requirements related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Physical and mechanical properties</li>
          <li>Dimensional accuracy</li>
          <li>Surface finish</li>
          <li>Water absorption limits</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard includes sheets used for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Interior wall partitions</li>
          <li>External cladding systems</li>
          <li>False ceilings</li>
          <li>Industrial and commercial building panels</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 14862:2000 is designed to ensure that fibre cement sheets:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain structural integrity under load</li>
          <li>Resist moisture penetration</li>
          <li>Provide long-term durability</li>
          <li>Perform consistently across different environmental conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard incorporates engineering considerations such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uniform thickness distribution</li>
          <li>Proper fibre-cement bonding</li>
          <li>Controlled curing processes</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These principles ensure that sheets remain stable and reliable
          throughout their service life.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          In construction, the reliability of materials directly impacts
          structural safety and longevity. A BIS Certification for Fibre Cement
          Flat Sheets ensures that these widely used building components meet the
          rigorous requirements of IS 14862:2000.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS Certificate for Fibre
          Cement Flat Sheets is essential for compliance, market access, and brand
          trust. It demonstrates that the product can withstand real-world
          conditions without compromising performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By securing a BIS License for Fibre Cement Flat Sheets, businesses
          position themselves as reliable suppliers in a competitive market while
          contributing to safer and more durable construction practices across
          India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Fibre Cement Flat Sheets
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why is BIS certification important for fibre cement flat sheets
              used in construction?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Fibre cement sheets are widely used in walls, ceilings, and
              cladding, where structural stability matters. BIS certification
              ensures these sheets can withstand load, moisture, and environmental
              exposure without cracking, bending, or deteriorating prematurely in
              real construction conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What types of fibre cement flat sheets are covered under IS
              14862:2000?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The standard covers non-asbestos fibre cement flat sheets used for
              partitions, ceilings, cladding, and similar applications. It
              includes sheets of varying thicknesses designed to meet specific
              structural and non-structural building requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. How does BIS certification ensure strength in fibre cement flat
              sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certification requires testing of flexural strength and
              load-bearing capacity. These tests ensure the sheet can resist
              bending and mechanical stress during installation and long-term use
              without structural failure or surface cracking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What role does water absorption testing play in certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Water absorption tests evaluate how much moisture a sheet can
              retain. Lower absorption ensures the sheet maintains its shape and
              strength, preventing swelling, warping, or weakening when exposed to
              rain or humidity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Why is thickness uniformity critical in fibre cement flat sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Uneven thickness can lead to weak points, increasing the risk of
              breakage during installation or use. BIS certification ensures
              consistent thickness across the sheet for uniform strength and
              reliable performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Can fibre cement sheets without certification be used in
              building projects?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Using non-certified sheets increases the risk of premature failure,
              especially in load-bearing or exposed applications. Certified
              sheets provide assurance of durability, making them more suitable for
              both residential and commercial construction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. How does BIS certification improve durability in outdoor
              applications?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certified sheets are tested for weather resistance, ensuring they
              can handle temperature changes, rain, and sunlight without degrading.
              This makes them suitable for external cladding and exposed
              construction areas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What manufacturing issues can cause failure in BIS testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Improper cement-to-fibre ratio, inadequate curing, and poor
              compaction can lead to weak sheets. These defects may result in low
              strength, higher water absorption, or surface cracks, leading to
              rejection during certification testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. How are fibre cement sheets tested for bending strength?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Samples are subjected to flexural load tests where force is applied
              until bending occurs. This determines the sheet&apos;s ability to
              withstand structural stress during installation and use without
              cracking.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Why is curing process important for BIS-certified sheets?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Proper curing allows the cement matrix to gain strength and
              stability. Insufficient curing can result in brittle sheets, reduced
              durability, and failure under load or environmental stress
              conditions.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for foreign manufacturers</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for Indian manufacturers</a>
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

