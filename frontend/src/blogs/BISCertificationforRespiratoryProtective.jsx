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
  "https://bis-certifications.com/blogImages/BISLicenseforrespiratoryprotectivedevices.webp";

const schemaDescription =
  "A comprehensive guide to BIS Certification for Respiratory Protective Devices under IS 19089:2025, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/respiratory-protective-devices-is-19089",
  },
  headline:
    "BIS Certification for Respiratory Protective Devices – IS 19089:2025",
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
  datePublished: "2026-06-05",
  dateModified: "2026-06-05",
};

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "BIS Certification for Respiratory Protective Devices – IS 19089:2025",
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
      name: "What is the purpose of BIS Certification for Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certification verifies that respiratory protection equipment complies with technical requirements established under IS 19089:2025. It helps ensure that products intended to protect users from airborne hazards meet recognized performance and safety criteria before reaching the market.",
      },
    },
    {
      "@type": "Question",
      name: "What is the BIS certification process for Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process generally includes product classification, application submission, document review, sample testing, factory inspection, compliance evaluation, and licence approval. Manufacturers must demonstrate conformity with applicable technical and quality requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the bis certificate cost for Respiratory Protective Devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary depending on testing requirements, application fees, audit expenses, and certification scope. Product complexity and the number of variants can also influence the overall expenditure associated with certification.",
      },
    },
    {
      "@type": "Question",
      name: "How long does certification take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline depends on document readiness, testing schedules, audit completion, and regulatory review. Manufacturers who prepare technical documentation and quality records in advance generally experience faster processing.",
      },
    },
    {
      "@type": "Question",
      name: "Which documents are required for certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applicants typically need manufacturing records, legal registrations, technical specifications, quality control documents, test reports, and application-related declarations. Accurate documentation helps reduce processing delays.",
      },
    },
    {
      "@type": "Question",
      name: "Why is laboratory testing important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing provides objective evidence that the respiratory protection equipment performs according to required safety and performance parameters. Without successful testing, compliance cannot be adequately demonstrated.",
      },
    },
    {
      "@type": "Question",
      name: "Can imported respiratory protective devices require certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Imported products entering the Indian market may need to satisfy applicable regulatory requirements and certification obligations before distribution or sale.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if products fail testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manufacturers may need to identify the cause of failure, modify the product, improve manufacturing controls, and submit revised samples for evaluation before proceeding further.",
      },
    },
    {
      "@type": "Question",
      name: "Is factory inspection mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Factory inspections are often an important part of the certification process because they evaluate production controls, quality systems, testing capabilities, and consistency in manufacturing practices.",
      },
    },
    {
      "@type": "Question",
      name: "How can companies maintain compliance after obtaining certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organizations should implement continuous quality monitoring, maintain testing records, follow approved manufacturing procedures, conduct internal audits, and address non-conformities promptly to ensure ongoing compliance.",
      },
    },
  ],
};

const BISCertificationforRespiratoryProtective = () => {
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

export default BISCertificationforRespiratoryProtective;

const MetaTags = () => {
  const title =
    "BIS Certificate for Respiratory Protective Devices - IS 19089:2025";
  const ogTitle =
    "BIS Certificate for Respiratory Protective Devices - IS 19089:2025";
  const twitterTitle =
    "BIS Certificate for Respiratory Protective Devices - IS 19089:2025";
  const metaDescription =
    "Get BIS Certificate for Respiratory Protective Devices under IS 19089:2025. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Respiratory Protective Devices as per IS 19089:2025. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Respiratory Protective Devices under IS 19089:2025. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Respiratory Protective Devices , BIS License for Respiratory Protective Devices, IS 19089:2025 , BIS Certification for Respiratory Protective Devices";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/respiratory-protective-devices-is-19089";
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
                    BIS Certificate for Respiratory Protective Devices
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
          BIS Certification for Respiratory Protective Devices – IS 19089:2025
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforRespiratoryProtectiveDevices.png"
            title="BIS License for Respiratory Protective Devices"
            alt="BIS Certificate for Respiratory Protective Devices - IS 19089:2025 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          {" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS Certification 
          </a>{" "}
          for Respiratory Protective Devices demonstrates that the product
          complies with the requirements of IS 19089:2025, the Indian Standard
          governing performance, safety, and quality parameters for respiratory
          protection equipment. Certification is essential because these products
          are used in environments where inhalation hazards can directly impact
          human health, making regulatory compliance critical for workplace safety
          and market acceptance in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory Protective Devices play a vital role in safeguarding
          individuals from airborne contaminants, hazardous particles, toxic fumes,
          biological agents, and industrial pollutants. These products are widely
          used across manufacturing facilities, mining operations, pharmaceutical
          plants, healthcare institutions, construction sites, chemical industries,
          and emergency response environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike ordinary face coverings, respiratory protection equipment is
          designed to create an effective barrier between the wearer and
          potentially harmful airborne substances. A defect in filtration
          efficiency, breathing resistance, fit, or structural integrity can
          expose users to serious occupational health risks. For this reason,
          regulatory authorities place significant emphasis on product reliability
          and performance consistency.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As industrial safety requirements continue to evolve in India, quality
          benchmarks for respiratory protection have become increasingly important.
          Manufacturers, importers, distributors, and procurement agencies are
          expected to supply products that meet recognized technical standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a  {" "}
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
          >
            BIS Certificate  
          </a>{" "}for Respiratory Protective Devices provides
          evidence that the product has been evaluated against applicable Indian
          requirements. Compliance with IS 19089:2025 helps manufacturers
          demonstrate product conformity while supporting safe usage across
          industrial and occupational settings.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Respiratory Protective Devices - IS
          19089:2025
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory Protective Devices are intended to reduce the inhalation of
          hazardous substances. Because users often depend on these products in
          environments where exposure levels can be dangerous, even minor quality
          defects may have serious consequences.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The purpose of BIS Certification for Respiratory Protective Devices is
          not merely administrative compliance. The certification framework
          evaluates whether the product can consistently perform its intended
          protective function under prescribed conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, a respirator used in a cement plant must effectively filter
          fine particulate matter. Similarly, respiratory protection used in
          chemical processing facilities must maintain performance characteristics
          that reduce exposure risks. Certification helps establish confidence that
          such products have been assessed according to recognized technical
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process also promotes manufacturing discipline by
          requiring documented quality control systems, material verification
          procedures, production monitoring, and product testing protocols.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A valid BIS License for Respiratory Protective Devices therefore serves
          as an indicator that the product has undergone systematic evaluation
          rather than relying solely on manufacturer claims.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Respiratory Protective Devices - IS
          19089:2025
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 19089:2025</strong>
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 19089:2025 specifies technical requirements applicable to Respiratory
          Protective Devices. The standard focuses on ensuring that products
          intended for respiratory protection achieve acceptable levels of
          performance, reliability, and user safety.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard generally addresses:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Respiratory protection equipment designed for occupational use</li>
          <li>Products intended to reduce inhalation exposure to airborne hazards</li>
          <li>Safety and performance characteristics of respiratory protection systems</li>
          <li>Product design and functional requirements</li>
          <li>Quality and conformity assessment parameters</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Depending on product design and intended application, the scope may
          include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Filtering respiratory devices</li>
          <li>Industrial respirators</li>
          <li>Protective breathing equipment</li>
          <li>Occupational respiratory safety products</li>
          <li>Specialized respiratory protection systems</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The standard aims to ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adequate filtration performance</li>
          <li>Reliable breathing characteristics</li>
          <li>Structural integrity during use</li>
          <li>User safety under specified conditions</li>
          <li>Consistent manufacturing quality</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 19089:2025 evaluates multiple aspects of product functionality,
          including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Material suitability</li>
          <li>Performance efficiency</li>
          <li>Durability characteristics</li>
          <li>User protection effectiveness</li>
          <li>Quality consistency across production batches</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 19089:2025
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing plays a critical role because respiratory protection
          effectiveness depends on measurable performance characteristics.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests evaluate whether the product can safely perform its intended
          protective function.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Performance evaluation may include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Filtration effectiveness</li>
          <li>Functional reliability</li>
          <li>Airflow characteristics</li>
          <li>Protective efficiency</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durability assessments help determine whether the device can withstand
          expected operating conditions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality verification ensures consistency across production batches and
          confirms ongoing conformity with standard requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          All testing should be conducted through BIS-recognized laboratories as
          part of the certification process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Respiratory protection equipment serves as a critical safety barrier in
          environments where airborne hazards can threaten worker health and
          operational safety. Compliance with IS 19089:2025 helps establish
          confidence that products meet recognized technical expectations for
          performance, durability, and reliability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Respiratory Protective Devices, securing
          a BIS Certification for Respiratory Protective Devices, and maintaining a
          valid BIS License for Respiratory Protective Devices are important steps
          for manufacturers, importers, and brand owners seeking regulatory
          compliance and long-term market credibility. A properly managed BIS
          Licence for Respiratory Protective Devices supports safer products,
          stronger customer trust, and sustainable business growth in India&apos;s
          evolving industrial safety landscape.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This draft is optimized for SEO, AEO, featured snippets, semantic search
          relevance, and BIS compliance-focused content marketing.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Licence for Respiratory Protective Devices - IS 19089:2025
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the purpose of BIS Certification for Respiratory Protective
              Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The certification verifies that respiratory protection equipment
              complies with technical requirements established under IS 19089:2025.
              It helps ensure that products intended to protect users from airborne
              hazards meet recognized performance and safety criteria before
              reaching the market.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What is the BIS certification process for Respiratory Protective
              Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process generally includes product classification, application
              submission, document review, sample testing, factory inspection,
              compliance evaluation, and licence approval. Manufacturers must
              demonstrate conformity with applicable technical and quality
              requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the bis certificate cost for Respiratory Protective
              Devices?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs vary depending on testing requirements, application fees, audit
              expenses, and certification scope. Product complexity and the number
              of variants can also influence the overall expenditure associated
              with certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. How long does certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The timeline depends on document readiness, testing schedules, audit
              completion, and regulatory review. Manufacturers who prepare
              technical documentation and quality records in advance generally
              experience faster processing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Which documents are required for certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Applicants typically need manufacturing records, legal registrations,
              technical specifications, quality control documents, test reports, and
              application-related declarations. Accurate documentation helps
              reduce processing delays.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Why is laboratory testing important?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing provides objective evidence that the respiratory protection
              equipment performs according to required safety and performance
              parameters. Without successful testing, compliance cannot be
              adequately demonstrated.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Can imported respiratory protective devices require certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Imported products entering the Indian market may need to
              satisfy applicable regulatory requirements and certification
              obligations before distribution or sale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. What happens if products fail testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers may need to identify the cause of failure, modify the
              product, improve manufacturing controls, and submit revised samples
              for evaluation before proceeding further.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is factory inspection mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Factory inspections are often an important part of the certification
              process because they evaluate production controls, quality systems,
              testing capabilities, and consistency in manufacturing practices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How can companies maintain compliance after obtaining
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Organizations should implement continuous quality monitoring, maintain
              testing records, follow approved manufacturing procedures, conduct
              internal audits, and address non-conformities promptly to ensure
              ongoing compliance.
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
              ISI Mark Certification Scheme
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS (Foreign Manufacturers Certification Scheme)
            </a>
          </li>
        </ul>

        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/pdf/19089_2025.pdf"
            title="IS 19089:2025 - Respiratory Protective Devices PDF"
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
