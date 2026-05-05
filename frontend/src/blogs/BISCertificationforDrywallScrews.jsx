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

const BISCertificationforDrywallScrews = () => {
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

export default BISCertificationforDrywallScrews;

const MetaTags = () => {
  const title =
    "BIS Certificate for Drywall Screws - Process, Cost, Documentation";
  const ogTitle =
    "BIS Certificate for Drywall Screws - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Drywall Screws - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Drywall Screws under IS 18507:2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Drywall Screws as per IS 18507:2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Drywall Screws under IS 18507:2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Drywall Screws, BIS License for Drywall Screws, IS 18507:2024, BIS Certification for Drywall Screws";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/drywall-screws-is-18507";
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

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": websiteUrl,
          },
          headline:
            "BIS Certification for Drywall Screws – Complete Guide to IS 18507:2024",
          description:
            "A comprehensive guide to BIS Certification for Drywall Screws under IS 18507:2024, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
          image:
            "https://bis-certifications.com/blogImages/BISCertificationforDrywallScrews.webp",
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

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "BIS Certification for Drywall Screws",
          image:
            "https://bis-certifications.com/blogImages/BISCertificationforDrywallScrews.png",
          description:
            "A comprehensive guide to BIS Certification for Drywall Screws under IS 18507:2024, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
          brand: {
            "@type": "Brand",
            name: "Sun Certifications India",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "55017",
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the cost of BIS certification for Drywall Screws?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The BIS certification cost for Drywall Screws depends on testing, inspection, and application fees. It varies based on product variants and manufacturing complexity.",
              },
            },
            {
              "@type": "Question",
              name: "How long does the BIS certification process take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The BIS certification process for Drywall Screws typically takes 4–8 weeks, depending on testing timelines and documentation accuracy.",
              },
            },
            {
              "@type": "Question",
              name: "Is BIS certification mandatory for all drywall screws?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, if covered under IS 18507:2024, certification is required for legal sale in India.",
              },
            },
            {
              "@type": "Question",
              name: "What tests are conducted for drywall screws?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Tests include tensile strength, torque resistance, pull-out strength, and corrosion resistance.",
              },
            },
            {
              "@type": "Question",
              name: "Can foreign manufacturers apply for BIS certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, through the Foreign Manufacturers Certification Scheme (FMCS).",
              },
            },
            {
              "@type": "Question",
              name: "What documents are required for BIS certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Documents include factory registration, product specifications, test reports, and quality manuals.",
              },
            },
            {
              "@type": "Question",
              name: "What happens if my product fails testing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You must improve the product quality and reapply for testing.",
              },
            },
            {
              "@type": "Question",
              name: "Is factory inspection mandatory?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, BIS conducts inspections to verify manufacturing and quality control systems.",
              },
            },
            {
              "@type": "Question",
              name: "Can one license cover multiple screw sizes?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, if they fall under the same product category and standard.",
              },
            },
            {
              "@type": "Question",
              name: "What is the validity of the BIS license?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Typically, it is granted for a specific period and requires renewal.",
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
                    BIS Certification for Drywall Screws – IS 18507:2024
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
          BIS Certification for Drywall Screws – Complete Guide to IS 18507:2024
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISCertificationforDrywallScrews.png"
            title="BIS Certification for Drywall Screws"
            alt="BIS Certification for Drywall Screws – Complete Guide to IS 18507:2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Drywall Screws ensures that fasteners used in gypsum board installations meet strength, corrosion resistance, and dimensional accuracy requirements as defined under IS 18507:2024. In India, this certification is essential to guarantee structural reliability, prevent installation failures, and enable legal sale in regulated markets.{" "}
        
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Drywall screws may appear like small hardware components, but they play a critical role in modern construction systems. Whether it&apos;s residential interiors, commercial partitioning, or modular structures, drywall screws are responsible for holding gypsum boards securely onto metal or wooden frames. A slight compromise in their strength, threading, or coating can result in loose panels, cracks, or even structural instability over time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          In India&apos;s rapidly growing construction sector, the demand for drywall systems has increased significantly due to their speed, cost efficiency, and clean finish. However, this also raises concerns about the quality of fastening components used in these systems. Poor-quality screws can corrode quickly, strip during installation, or fail under load.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address these concerns, regulatory oversight has been introduced through BIS Certification for Drywall Screws under IS 18507:2024. This ensures that every screw used in drywall installations meets defined mechanical and chemical standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, obtaining a BIS Certificate for Drywall Screws is not just about compliance—it is about ensuring that their product performs reliably in real-world construction environments.
        </p>
        <a
            href="https://bis-certifications.com/bis-qco-updates/bis-certificate-for-drywall-screws-specification"
            className="text-blue-600 hover:underline"
          >
            Also read the QCO Notification for Drywall Screws – Specification
          </a>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Drywall Screws
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          When it comes to drywall screws, certification is not merely about labeling—it is about verifying that each screw can withstand installation stress, maintain grip strength, and resist environmental degradation over time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Unlike general fasteners, drywall screws are specifically engineered for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penetrating gypsum boards without cracking them</li>
          <li>Anchoring firmly into metal or wooden studs</li>
          <li>Maintaining hold without loosening due to vibration or load</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Drywall Screws evaluates these characteristics through standardized testing and inspection procedures. It ensures that the screws:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Have consistent thread design for proper grip</li>
          <li>Exhibit adequate tensile strength</li>
          <li>Are coated properly to prevent rusting</li>
          <li>Maintain dimensional precision</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          From a regulatory standpoint, BIS certification acts as a quality checkpoint before the product reaches construction sites. It ensures that builders, contractors, and end users are not exposed to substandard fastening materials that could compromise structural integrity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Drywall Screws
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4 font-semibold">
          IS 18507:2024
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Indian Standard IS 18507:2024 is specifically developed to regulate drywall screws used in construction and interior applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          This standard defines:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mechanical properties of drywall screws</li>
          <li>
            Dimensional specifications such as length, diameter, and thread pitch
          </li>
          <li>Coating requirements for corrosion resistance</li>
          <li>Performance benchmarks under load conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Coverage
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 18507:2024 applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Self-tapping drywall screws</li>
          <li>Fine thread and coarse thread screws</li>
          <li>Screws used for metal and wooden framing</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard focuses on ensuring that drywall screws:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Do not break or deform during installation</li>
          <li>Provide consistent holding strength</li>
          <li>Resist corrosion in humid environments</li>
          <li>Maintain thread integrity during usage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard incorporates testing methodologies that simulate real-life installation conditions, such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Torque resistance testing</li>
          <li>Pull-out strength evaluation</li>
          <li>Coating adhesion testing</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          By aligning with IS 18507:2024, manufacturers demonstrate that their product is suitable for India&apos;s construction requirements and environmental conditions.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Drywall screws are small components with a significant impact on construction safety and durability. Ensuring their quality is not optional—it is essential for reliable building performance. The BIS Certification for Drywall Screws under IS 18507:2024 provides a structured framework to verify that these fasteners meet required standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS License for Drywall Screws is a strategic step toward regulatory compliance, market acceptance, and long-term business growth. By adhering to BIS requirements, businesses not only meet legal obligations but also contribute to safer and more dependable construction practices across India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Drywall Screws
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the cost of BIS certification for Drywall Screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost for Drywall Screws depends on testing, inspection, and application fees. It varies based on product variants and manufacturing complexity.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. How long does the BIS certification process take?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification process for Drywall Screws typically takes 4–8 weeks, depending on testing timelines and documentation accuracy.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Is BIS certification mandatory for all drywall screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, if covered under IS 18507:2024, certification is required for legal sale in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What tests are conducted for drywall screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Tests include tensile strength, torque resistance, pull-out strength, and corrosion resistance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Can foreign manufacturers apply for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, through the Foreign Manufacturers Certification Scheme (FMCS).
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. What documents are required for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Documents include factory registration, product specifications, test reports, and quality manuals.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. What happens if my product fails testing?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          You must improve the product quality and reapply for testing.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Is factory inspection mandatory?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, BIS conducts inspections to verify manufacturing and quality control systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. Can one license cover multiple screw sizes?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, if they fall under the same product category and standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. What is the validity of the BIS license?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Typically, it is granted for a specific period and requires renewal.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <p className="text-gray-600 text-base font-geist mb-3">
          <a
            href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="text-blue-600 hover:underline"
          >
            Check complete details about documentation, cost, and process for foreign manufacturers
          </a>
        </p>
        <p className="text-gray-600 text-base font-geist mb-6">
          <a
            href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
            className="text-blue-600 hover:underline"
          >
            Check complete details about documentation, cost, and process for Indian manufacturers
          </a>
        </p>

        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/pdf/18507_2024.pdf"
            title="BIS Certification for Drywall Screws - IS 18507:2024 PDF"
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
