import FaqAuthorEng from "@/components/common/FaqAuthor/FaqAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ManyUsersAlsoRead from "@/components/manual/ManyUsersAlsoRead/ManyUsersAlsoRead";
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
import LanguageSelector from "./LanguageSelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const SUB_HEADING_CLASS =
  "text-lg font-geist font-semibold text-[#1A8781] mb-2 mt-1";

const LIST_CLASS =
  "list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist";

const BISCertificateForBeds = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <LanguageSelector />
      <Services />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default BISCertificateForBeds;

const MetaTags = () => {
  const title = "BIS Certificate for Beds | IS 17635:2022 BIS License";
  const ogTitle = "BIS Certification for Beds – IS 17635:2022 Guide";
  const twitterTitle = "BIS License for Beds | IS 17635:2022";
  const metaDescription =
    "Get BIS Certificate for beds under IS 17635:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for beds as per IS 17635:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for beds under IS 17635:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Beds, BIS License for Beds, IS 17635:2022, BIS Certification for Beds";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/beds-is-17635";
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
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      {/* Hreflang Tags */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://bis-certifications.com/blogs/isi-products/beds-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href="https://bis-certifications.com/blogs/isi-products/asrat-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="zh"
        href="https://bis-certifications.com/blogs/isi-products/chuangju-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="nl"
        href="https://bis-certifications.com/blogs/isi-products/bedden-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="fr"
        href="https://bis-certifications.com/blogs/isi-products/lits-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="de"
        href="https://bis-certifications.com/blogs/isi-products/betten-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="id"
        href="https://bis-certifications.com/blogs/isi-products/ranjang-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="it"
        href="https://bis-certifications.com/blogs/isi-products/letti-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href="https://bis-certifications.com/blogs/isi-products/beddo-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="ko"
        href="https://bis-certifications.com/blogs/isi-products/chimdae-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://bis-certifications.com/blogs/isi-products/camas-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="th"
        href="https://bis-certifications.com/blogs/isi-products/teng-is-17635"
      />
      <link
        rel="alternate"
        hrefLang="vi"
        href="https://bis-certifications.com/blogs/isi-products/giuong-is-17635"
      />

      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://bis-certifications.com/blogs/isi-products/beds-is-17635",
          },
          headline: "BIS Certificate for Beds",
          description:
            "BIS certification for beds in India is a mandatory quality assurance, primarily under IS 17635:2022, ensuring safety, durability, and performance standards.",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
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
          datePublished: "2026-02-01",
          dateModified: "2026-04-14",
        })}
      </script>

      {/* Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "BIS Certificate for Beds",
          image:
            "https://bis-certifications.com/BISCertificationProductsImages/BISLicenseforBeds.png",
          description:
            "BIS certification for beds in India is a mandatory quality assurance, primarily under IS 17635:2022, ensuring safety, durability, and performance standards.",
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
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Is BIS certification mandatory for beds in India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, under IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "What is the BIS Certificate validity?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "1–2 years, renewable.",
              },
            },
            {
              "@type": "Question",
              name: "Can foreign manufacturers apply?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, under FMCS.",
              },
            },
            {
              "@type": "Question",
              name: "Can BIS Certificate be applied online?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes.",
              },
            },
            {
              "@type": "Question",
              name: "Is ISI Mark mandatory on beds?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes.",
              },
            },
            {
              "@type": "Question",
              name: "How long does the process take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "30–45 days.",
              },
            },
            {
              "@type": "Question",
              name: "Are wooden and metal beds both covered?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, if compliant with IS 17635:2022.",
              },
            },
            {
              "@type": "Question",
              name: "Is factory inspection mandatory?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes.",
              },
            },
            {
              "@type": "Question",
              name: "Can traders apply for BIS?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Only brand owners with manufacturing control.",
              },
            },
          ],
        })}
      </script>
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
                    BIS Certificate for Beds – IS 17635:2022
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
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certificate for Beds – IS 17635:2022 Complete Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/BISCertificationProductsImages/BISLicenseforBeds.png"
            title="BIS License for Beds"
            alt="BIS Certificate for Beds - IS 17635:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Beds is a mandatory compliance requirement in
          India for manufacturers and importers of beds intended for domestic
          and commercial use. As per the latest Indian Standard IS 17635:2022 –
          Beds (Safety Requirements), all beds must meet strict safety,
          durability, structural, and performance benchmarks before being sold
          in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beds are essential furniture products used daily across homes, hotels,
          hospitals, hostels, PG accommodations, and institutional facilities.
          Any structural weakness, sharp edges, material failure, or poor load
          capacity can result in serious injuries. To prevent such risks, the
          Bureau of Indian Standards (BIS) mandates  {" "}
                    <a
                        href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
                        className="text-blue-600 hover:underline"
                        rel="noopener noreferrer"
                    >
                        BIS Certification
                    </a>{" "} for Beds.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything about BIS License for
          Beds, including applicable standards, certification process, testing
          requirements, documents, fees, timelines, penalties, and benefits.
        </p>

     

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Highlights of BIS Certification for Beds
        </h2>

        <div className="mt-2 mb-6 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Particulars
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Product", "Beds"],
                ["Indian Standard", "IS 17635:2022"],
                ["Title of Standard", "Beds – Specification"],
                ["Certification Scheme", "BIS ISI Mark Certification"],
                ["Regulatory Authority", "Bureau of Indian Standards (BIS)"],
                ["Applicable Mark", "ISI Mark"],
                [
                  "Eligible Applicants",
                  "Indian Manufacturers and Foreign Manufacturers",
                ],
                [
                  "Compliance Requirement",
                  "Mandatory under applicable Furniture QCO (Quality Control Order)",
                ],
              ].map(([particular, details], index) => (
                <TableRow
                  key={particular}
                  className={`hover:bg-white/50 transition-colors border-b border-gray-200/30 ${index % 2 === 1 ? "bg-white/30" : ""}`}
                >
                  <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                    {particular}
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                    {particular === "Certification Scheme" ? (
                      <a
                        href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
                        className="text-blue-600 hover:underline"
                      >
                        BIS ISI Mark Certification
                      </a>
                    ) : particular === "Compliance Requirement" ? (
                      <>
                        Mandatory under applicable{" "}
                        <a
                          href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-beds"
                          className="text-blue-600 hover:underline"
                        >
                          <strong>Furniture QCO (Quality Control Order)</strong>
                        </a>
                      </>
                    ) : (
                      details
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification for Beds?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Beds is a conformity assessment process through
          which manufacturers demonstrate that their products comply with the
          requirements specified in IS 17635:2022. Once compliance is verified
          through testing, factory assessment, and regulatory review, the
          manufacturer is granted a BIS licence and may affix the ISI Mark on
          certified products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification framework is intended to ensure that beds available in
          the Indian market satisfy established requirements related to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structural strength</li>
          <li>Stability</li>
          <li>Durability</li>
          <li>Surface performance</li>
          <li>Safety during normal use</li>
          <li>Performance under foreseeable misuse conditions</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These requirements help create a consistent benchmark for quality and
          consumer protection across different bed designs and manufacturing
          materials.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Important for Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beds directly affect user safety because they are designed to support
          significant loads over extended periods. Poorly designed or inadequately
          tested products can experience structural failure, instability,
          deformation, or premature deterioration.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 addresses these concerns by defining standardized
          performance and safety requirements that manufacturers must satisfy
          before their products enter the market. The standard includes
          requirements relating to strength, stability, durability, workmanship,
          and surface performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          For manufacturers, BIS certification offers several advantages:
        </p>

        <ul className={LIST_CLASS}>
          <li>Legal authorization to sell covered products in India</li>
          <li>Demonstration of compliance with Indian Standards</li>
          <li>Improved market acceptance</li>
          <li>Enhanced consumer confidence</li>
          <li>Reduced risk of regulatory action</li>
          <li>Competitive advantage in institutional and commercial procurement</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Overview of IS 17635:2022 for Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has introduced Quality Control Orders for
          several furniture products to ensure that products placed on the market
          meet prescribed safety and quality requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Where IS 17635:2022 is covered under the applicable Furniture QCO,
          manufacturers are required to obtain BIS certification under Scheme-I and
          use the Standard Mark (ISI Mark) in accordance with BIS licensing
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 is the Indian Standard that specifies the performance and
          safety requirements for beds intended for adult users in domestic and
          non-domestic environments. The standard establishes requirements that
          help ensure beds remain safe, functional, and durable throughout their
          intended service life.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Purpose of IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 was developed to provide a comprehensive performance-based
          standard applicable to modern bed designs manufactured using various
          materials and construction methods. The standard supersedes the earlier
          IS 7259 (Part 1):1988, which primarily focused on wooden beds.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard evaluates beds without limiting compliance to a particular
          material or manufacturing process. Instead, it focuses on how the
          finished product performs under prescribed testing conditions. This
          approach enables consistent assessment of wooden, metal, engineered
          wood, and other bed constructions.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Scope of IS 17635:2022</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          According to the standard, IS 17635:2022 covers requirements related to
          the performance and safety of beds designed for adult users. The
          standard applies to products intended for use in both domestic and
          non-domestic settings.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Completely manufactured beds</li>
          <li>Fabricated beds</li>
          <li>Ready-to-assemble beds after assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This ensures that products supplied in assembled or knock-down form are
          evaluated using the same performance and safety criteria.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Objectives of the Standard</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The primary objectives of IS 17635:2022 include:
        </p>

        <ul className={LIST_CLASS}>
          <li>Ensuring user safety</li>
          <li>Verifying structural strength</li>
          <li>Assessing product stability</li>
          <li>Evaluating durability under repeated use</li>
          <li>Establishing minimum performance requirements</li>
          <li>Promoting consistent product quality across manufacturers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard also includes testing methodologies intended to evaluate
          beds under normal use conditions and reasonably foreseeable misuse
          scenarios.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Products Covered Under IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 17635:2022 applies to beds intended for adult users in both
          domestic and non-domestic environments. The standard focuses on the
          performance, safety, strength, stability, and durability of the finished
          product rather than restricting compliance to a specific material or
          manufacturing method.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Completely manufactured beds</li>
          <li>Fabricated beds</li>
          <li>Ready-to-assemble (RTA) beds after assembly</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers supplying beds in knock-down condition must ensure that
          the assembled product complies with all applicable requirements of the
          standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>Note:</strong> This standard does not cover waterbeds, airbeds,
          foldaway beds, bunk beds and beds for people with special needs, nor
          the beds for healthcare and medical purposes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            Also check Furniture Products Covered Under Mandatory BIS
            Certification —
          </strong>{" "}
          <a
            href="https://bis-certifications.com/blogs/isi-products/furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <strong>BIS Certification for furniture</strong>
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Key Requirements Under IS 17635:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The primary objective of IS 17635:2022 is to ensure that beds remain
          safe, stable, durable, and fit for their intended purpose throughout
          normal usage conditions. To achieve this objective, the standard
          establishes several key performance requirements.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Stability Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beds must demonstrate adequate resistance to overturning and
          instability during normal use. Stability testing evaluates whether the
          product remains secure when subjected to expected loading conditions
          and user movements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A stable bed minimizes the risk of accidents and improves overall user
          safety.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Strength Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Strength tests assess the ability of the bed structure to withstand
          significant loads without structural failure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          These evaluations typically examine:
        </p>

        <ul className={LIST_CLASS}>
          <li>Bed frame integrity</li>
          <li>Joint strength</li>
          <li>Load-bearing capacity</li>
          <li>Resistance to excessive deformation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The purpose is to ensure that the product can safely support intended
          users during everyday operation.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Durability Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Durability testing simulates long-term use through repeated loading and
          movement cycles.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The objective is to determine whether:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structural connections remain secure</li>
          <li>Components continue functioning correctly</li>
          <li>Product performance remains acceptable over time</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Durability requirements help ensure that certified beds maintain
          reliability throughout their expected service life.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Surface Performance Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 17635:2022 references surface performance requirements applicable to
          furniture finishes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Depending on the construction and materials used, surfaces may be
          evaluated for resistance to:
        </p>

        <ul className={LIST_CLASS}>
          <li>Mechanical damage</li>
          <li>Wet heat</li>
          <li>Dry heat</li>
          <li>Staining</li>
          <li>Adhesion performance</li>
          <li>Abrasion and wear</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These requirements help preserve both functionality and appearance
          during normal use.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Design and Workmanship Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard also contains requirements related to design quality and
          workmanship.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Among other considerations:
        </p>

        <ul className={LIST_CLASS}>
          <li>Accessible edges should not present injury hazards.</li>
          <li>Sharp edges and unsafe projections should be avoided.</li>
          <li>Hollow sections should be properly closed where required.</li>
          <li>Moving components should be designed to reduce injury risk.</li>
          <li>
            The finished product should conform to the declared design and model
            specifications.
          </li>
        </ul>

        <h3 className={SUB_HEADING_CLASS}>Safety Requirements</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Safety is a core principle throughout IS 17635:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard incorporates requirements intended to reduce risks arising
          from:
        </p>

        <ul className={LIST_CLASS}>
          <li>Structural collapse</li>
          <li>Sharp edges</li>
          <li>Unsafe projections</li>
          <li>Component failure</li>
          <li>Repeated use stresses</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with these requirements helps ensure that beds remain safe
          under normal use and reasonably foreseeable misuse conditions.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Is BIS Certification for Beds Mandatory in India?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, for furniture products covered under the applicable Quality
          Control Order, BIS certification is mandatory before such products
          can be manufactured, imported, sold, distributed, stored, or offered
          for sale in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must verify the latest notification status and
          implementation dates issued by the Government of India because
          regulatory requirements may be updated from time to time.
        </p>

        <h3 className={SUB_HEADING_CLASS}>Requirement to Use the ISI Mark</h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The ISI Mark serves as evidence that a product conforms to the relevant
          Indian Standard and is manufactured under a valid BIS licence.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The mark may only be applied after:
        </p>

        <ul className={LIST_CLASS}>
          <li>Successful product testing</li>
          <li>Factory assessment</li>
          <li>BIS approval of the application</li>
          <li>Grant of licence</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unauthorized use of the ISI Mark is prohibited under the BIS Act,
          2016.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          BIS Certification Process for Beds (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certification process in India follows a structured procedure
          under the ISI Certification Scheme.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 1 – Identify Standard & Product Scope
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Confirm applicability under IS 17635:2022 and determine product
          variants.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 2 – BIS Application (Online)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Submit application through the BIS Manak Online Portal with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturer details</li>
          <li>Factory address</li>
          <li>Product description</li>
          <li>Brand name</li>
          <li>Quality control details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 3 – BIS Certification Fees
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Pay applicable fees including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Processing fee</li>
          <li>Testing charges</li>
          <li>Inspection charges</li>
          <li>Marking fees</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 4 – Product Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Samples are tested at BIS-recognized laboratories.
        </p>
        <h4 className="text-base font-geist font-medium text-[#1e1e1e] mb-2">
          Testing Includes
        </h4>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Static load test</li>
          <li>Durability test</li>
          <li>Stability test</li>
          <li>Joint strength test</li>
          <li>Surface finish test</li>
          <li>Edge safety test</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 5 – Factory Inspection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer inspects:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing facility</li>
          <li>Raw material control</li>
          <li>In-process testing</li>
          <li>Quality assurance system</li>
          <li>Testing equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 6 – Grant of BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After compliance, BIS issues:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certificate</li>
          <li>ISI Mark permission</li>
          <li>CML number</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step 7 – Post-Certification Compliance
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surveillance inspections</li>
          <li>Renewal every 1–2 years</li>
          <li>Ongoing quality control</li>
        </ul>

     

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification of Beds
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Here is a complete list of BIS Certificate Documents:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration/license</li>
          <li>Manufacturing process flowchart</li>
          <li>Machinery list</li>
          <li>Testing equipment list</li>
          <li>Calibration certificates</li>
          <li>Factory layout</li>
          <li>Quality control plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Address proof</li>
          <li>ID proof</li>
          <li>Brand authorization</li>
          <li>Trademark certificate (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product drawings</li>
          <li>Specifications</li>
          <li>Bill of materials</li>
          <li>Internal test reports</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements for Beds (IS 17635:2022)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Beds must undergo rigorous testing to ensure compliance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-4">
          Mandatory Tests
        </h3>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requirement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Design and workmanship
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Stability Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Static Load on Bed Base
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.4.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Static Load on Side Rail
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.5.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Horizontal Static Load Tests
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Vertical Impact Test
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          Testing must be conducted only at BIS-approved labs.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Incorrect standard selection</strong> – Always verify the
            correct Indian Standard.
          </li>
          <li>
            <strong>Poor documentation</strong> – Missing documents cause
            delays; prepare them beforehand.
          </li>
          <li>
            <strong>Failed lab tests</strong> – Ensure high-quality materials
            and construction.
          </li>
          <li>
            <strong>Factory non-readiness</strong> – Ensure QMS and test
            equipment are properly maintained.
          </li>
          <li>
            <strong>Trademark mismatch</strong> – Brand name must match license
            application.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Selling beds without BIS certification can lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy fines</li>
          <li>Product seizure</li>
          <li>Business shutdown</li>
          <li>Legal action</li>
          <li>Market ban</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification for Beds?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end BIS consulting, including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Standard mapping</li>
          <li>Documentation support</li>
          <li>Testing coordination</li>
          <li>Application filing</li>
          <li>Factory inspection handling</li>
          <li>BIS liaison</li>
          <li>License issuance</li>
          <li>Renewal & surveillance support</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Beds under IS 17635:2022 is a mandatory legal
          requirement that ensures safety, quality, and durability. Obtaining a
          BIS License for Beds protects consumers, strengthens brand value, and
          enables lawful market access across India. With expert support, the
          certification process becomes seamless and efficient.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certificate for Beds
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>
                1. Is BIS certification mandatory for beds in India?
              </strong>
              <br />
              Yes, under IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>2. What is the BIS Certificate validity?</strong>
              <br />
              1–2 years, renewable.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>3. Can foreign manufacturers apply?</strong>
              <br />
              Yes, under FMCS.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>4. Can BIS Certificate be applied online?</strong>
              <br />
              Yes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>5. Is ISI Mark mandatory on beds?</strong>
              <br />
              Yes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>6. How long does the process take?</strong>
              <br />
              30–45 days.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>7. Are wooden and metal beds both covered?</strong>
              <br />
              Yes, if compliant with IS 17635:2022.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>8. Is factory inspection mandatory?</strong>
              <br />
              Yes.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-base font-geist mb-2">
              <strong>9. Can traders apply for BIS?</strong>
              <br />
              Only brand owners with manufacturing control.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-17635-2022-Sun-Certifications-India.pdf"
            title="BIS Certificate for Beds - IS 17635:2022 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">ISI Mark Certificate</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">BIS FMCS License</a>
          </li>
        </ul>

        <ManyUsersAlsoRead />

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
