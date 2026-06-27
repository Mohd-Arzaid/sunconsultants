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
  "https://bis-certifications.com/blogImages/BISLicenseforPrimaryLead.webp";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://bis-certifications.com/blogs/isi-products/primary-lead-is-27-2023",
  },
  headline: "BIS Certification for Primary Lead – Complete Guide to IS 27:2023",
  description:
    "A comprehensive guide to BIS Certification for Primary Lead under IS 27:2023, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
  name: "BIS Certification for Primary Lead – Complete Guide to IS 27:2023",
  image: blogImageUrl,
  description:
    "A comprehensive guide to BIS Certification for Primary Lead under IS 27:2023, covering the certification process, testing requirements, cost structure, documents, compliance guidelines, and regulatory obligations in India.",
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
      name: "Is BIS Certification mandatory for Primary Lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If Primary Lead is covered under the applicable Quality Control Order (QCO), obtaining a BIS Certification for Primary Lead becomes mandatory before manufacturing, importing, or selling the product in India.",
      },
    },
    {
      "@type": "Question",
      name: "Which Indian Standard applies to Primary Lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The applicable Indian Standard is IS 27:2023, which specifies the quality, composition, testing, and conformity requirements for Primary Lead.",
      },
    },
    {
      "@type": "Question",
      name: "Who issues the BIS License for Primary Lead?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Bureau of Indian Standards (BIS) grants the BIS License after evaluating the manufacturing facility, testing capabilities, and product conformity with IS 27:2023.",
      },
    },
    {
      "@type": "Question",
      name: "Can foreign manufacturers obtain a BIS License?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Overseas manufacturers exporting Primary Lead to India can apply for BIS Certification through the applicable certification scheme for foreign manufacturing units.",
      },
    },
    {
      "@type": "Question",
      name: "Is product testing mandatory for BIS Certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Product samples must be tested in BIS-recognized laboratories to demonstrate compliance with the technical requirements specified under IS 27:2023.",
      },
    },
  ],
};

const BISCertificationforPrimaryLeadIs272023 = () => {
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

export default BISCertificationforPrimaryLeadIs272023;

const MetaTags = () => {
  const title =
    "BIS Certification for Primary Lead | IS 27:2023 | Complete Guide";
  const ogTitle =
    "BIS Certification for Primary Lead | IS 27:2023 | Complete Guide";
  const twitterTitle =
    "BIS Certification for Primary Lead | IS 27:2023 | Complete Guide";
  const metaDescription =
    "Learn everything about BIS Certification for Primary Lead under IS 27:2023, including the certification process, required documents, testing requirements, costs, eligibility, and compliance guidelines for manufacturers and importers in India.";
  const ogDescription =
    "Learn everything about BIS Certification for Primary Lead under IS 27:2023, including the certification process, required documents, testing requirements, costs, eligibility, and compliance guidelines for manufacturers and importers in India.";
  const twitterDescription =
    "Learn everything about BIS Certification for Primary Lead under IS 27:2023, including the certification process, required documents, testing requirements, costs, eligibility, and compliance guidelines for manufacturers and importers in India.";
  const metaKeywords =
    "BIS Certificate for Primary Lead, BIS License for Primary Lead, BIS Certification for Primary Lead, BIS Licence for Primary Lead, Primary Lead BIS , Primary Lead BIS Certificate";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/primary-lead-is-27-2023";
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
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
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
                    BIS Certification for Primary Lead
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
          BIS Certification for Primary Lead – Complete Guide to IS 27:2023
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforPrimaryLead.webp"
            title="Primary Lead - IS 27:2023"
            alt="Primary Lead - IS 27:2023"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            BIS Certification
          </Link>{" "}
          for Primary Lead under IS 27:2023 is a mandatory quality certification
          for manufacturers of Primary Lead covered under the applicable{" "}
          <Link
            to="/bis-qco-updates/bis-certificate-for-bis-qco-notification-for-primary-lead"
            className="text-blue-600 hover:underline"
          >
            Quality Control Order (QCO)
          </Link>
          . The certification confirms that the product meets the requirements of
          IS 27:2023 regarding quality, composition, manufacturing, testing, and
          performance, allowing compliant manufacturers to use the ISI Mark and
          legally sell the product in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Primary Lead is one of the most widely used non-ferrous metals in
          industrial manufacturing. It serves as a critical raw material for
          industries producing lead-acid batteries, radiation shielding products,
          cable sheathing, alloys, chemicals, and several engineering
          applications. Since the quality and purity of Primary Lead directly
          influence the performance and safety of end products, maintaining
          standardized manufacturing practices is essential.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure consistent product quality and safeguard industrial users, the{" "}
          <a
            href="https://www.bis.gov.in/?lang=en"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bureau of Indian Standards
          </a>{" "}
          (BIS) has established IS 27:2023, the Indian Standard that specifies
          the quality requirements for Primary Lead. Where notified under the
          applicable Quality Control Order (QCO), manufacturers must obtain a
          BIS Certificate for Primary Lead before manufacturing, importing,
          distributing, or selling the product in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are a domestic manufacturer, foreign manufacturer, importer,
          supplier, or business dealing in Primary Lead, understanding the BIS
          Certification for Primary Lead, its legal requirements, testing
          procedures, and licensing process is essential for uninterrupted
          business operations and regulatory compliance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This guide explains everything you need to know about obtaining a BIS
          License for Primary Lead under IS 27:2023.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is the National Standards Body of
          India responsible for developing Indian Standards and operating product
          certification schemes that ensure the safety, reliability, and quality
          of products available in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certification demonstrates that a product has been evaluated
          according to the applicable Indian Standard and complies with all
          prescribed technical, quality, and safety requirements. After successful
          evaluation, manufacturers receive a BIS License, enabling them to use
          the ISI Mark on certified products wherever applicable.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark acts as a symbol of conformity, assuring buyers, industries,
          government agencies, and regulators that the product consistently
          satisfies Indian quality standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For regulated products such as Primary Lead, obtaining a BIS Certificate
          is not merely a quality initiative—it becomes a statutory compliance
          requirement whenever covered under the relevant government notification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why is BIS Certification Important?
        </h3>

        <p className="text-gray-600 text-base font-geist mb-2">
          BIS Certification offers several important advantages:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensures uniform product quality</li>
          <li>Establishes manufacturing consistency</li>
          <li>Builds customer and industrial confidence</li>
          <li>Supports regulatory compliance</li>
          <li>Reduces quality-related disputes</li>
          <li>Improves acceptance in government procurement</li>
          <li>Enhances credibility in domestic and international markets</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, a BIS Licence for Primary Lead also demonstrates
          commitment to producing standardized materials that meet recognized
          Indian quality benchmarks.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Primary Lead – IS 27:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for Primary Lead is IS 27:2023.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies the technical requirements, quality parameters,
          chemical composition, manufacturing expectations, sampling methods,
          inspection requirements, and testing procedures applicable to Primary
          Lead manufactured for industrial applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of IS 27:2023 is to ensure that Primary Lead supplied in
          the market possesses the required purity, consistency, and performance
          characteristics needed for downstream manufacturing processes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard establishes uniform quality requirements that help
          manufacturers produce reliable material while enabling buyers to procure
          products meeting nationally accepted specifications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 27:2023
        </h3>

        <p className="text-gray-600 text-base font-geist mb-2">
          IS 27:2023 generally covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Quality requirements for Primary Lead</li>
          <li>Chemical composition specifications</li>
          <li>Manufacturing consistency</li>
          <li>Sampling procedures</li>
          <li>Inspection requirements</li>
          <li>Product conformity evaluation</li>
          <li>Test methods</li>
          <li>Acceptance criteria</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The standard provides manufacturers with a comprehensive framework for
          maintaining product quality throughout the manufacturing process.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with IS 27:2023 ensures that Primary Lead supplied in India
          maintains consistent quality suitable for industrial use across multiple
          sectors.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Primary Lead?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has increasingly introduced Quality Control
          Orders (QCOs) covering industrial raw materials to strengthen product
          quality, consumer protection, and industrial safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Where Primary Lead falls under the applicable QCO, manufacturers must
          obtain a BIS Certification for Primary Lead before placing the product in
          the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to comply may result in regulatory action, including
          restrictions on manufacturing, import, distribution, or sale.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Ensures Product Quality
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Primary Lead is widely used in products where material quality directly
          affects durability, electrical performance, corrosion resistance, and
          manufacturing efficiency.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A certified manufacturing system helps ensure that every production
          batch meets standardized quality requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Promotes Industrial Safety
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Industries using Primary Lead depend on consistent chemical composition
          and controlled manufacturing processes. Variations in purity or
          composition may affect production quality and operational performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification minimizes such risks through standardized quality
          control and periodic surveillance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Legal Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers covered under the notified Quality Control Order must
          comply with BIS requirements before marketing the product.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS License for Primary Lead enables manufacturers to legally
          manufacture and sell compliant products in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Strengthens Market Credibility
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Industrial buyers increasingly prefer certified suppliers because
          standardized products reduce procurement risks and improve
          manufacturing reliability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark serves as visible evidence that the product conforms to
          Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Supports Fair Competition
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Standardized quality requirements create a level playing field by
          ensuring all manufacturers meet the same technical benchmarks, thereby
          discouraging the circulation of inferior or non-conforming products.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License for Primary Lead as per IS 27:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS License for Primary Lead covers products manufactured in
          accordance with the technical requirements prescribed under IS 27:2023
          and applicable certification guidelines issued by BIS.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification applies to manufacturers whose production facilities
          consistently comply with the requirements relating to manufacturing
          processes, quality management, testing capability, inspection systems,
          and product conformity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A valid BIS License authorizes eligible manufacturers to apply the ISI
          Mark to Primary Lead produced under controlled manufacturing conditions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability of the Certification
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification generally applies to manufacturers producing Primary
          Lead intended for industrial and commercial applications where
          compliance with Indian Standards is required.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The scope typically includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Domestic manufacturing units supplying the Indian market</li>
          <li>
            Foreign manufacturers exporting Primary Lead to India through the
            applicable BIS certification scheme
          </li>
          <li>Production facilities maintaining the required quality assurance systems</li>
          <li>
            Manufacturing units capable of carrying out prescribed testing and
            inspection requirements
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturing Requirements
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          To obtain and maintain the BIS Certificate for Primary Lead,
          manufacturers are expected to establish adequate quality control systems
          that ensure every production batch conforms to IS 27:2023.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Key expectations generally include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Controlled manufacturing processes</li>
          <li>Documented quality procedures</li>
          <li>Batch identification and traceability</li>
          <li>In-house quality control arrangements</li>
          <li>Availability of testing facilities as prescribed by BIS</li>
          <li>Qualified technical personnel</li>
          <li>Proper inspection records</li>
          <li>Correct marking and labeling practices</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS also conducts factory assessments and periodic surveillance activities
          to verify continued compliance with the requirements of the certification
          scheme.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Maintaining these systems not only helps manufacturers retain their BIS
          License but also improves operational efficiency, product consistency,
          and customer confidence over the long term.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 27:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing is one of the most important stages in obtaining a BIS
          Certification for Primary Lead. Before granting a BIS License for
          Primary Lead, the Bureau of Indian Standards verifies that the product
          satisfies all the technical requirements specified under IS 27:2023.
          These tests confirm that the material consistently meets the prescribed
          quality and performance criteria.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers are expected to maintain an effective quality control
          system and carry out routine inspections during production. In addition
          to in-house quality checks, product samples are tested in BIS-recognized
          laboratories to verify conformity with the applicable Indian Standard.
          Test reports generated by laboratories that are not recognized by BIS
          are generally not accepted for certification purposes.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The exact testing requirements depend on the provisions of IS 27:2023 and
          the relevant Scheme of Inspection and Testing (SIT). During
          certification, BIS may evaluate product samples for parameters such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Chemical composition of Primary Lead</li>
          <li>Purity requirements</li>
          <li>Percentage of lead content</li>
          <li>Limits for specified impurities</li>
          <li>Sampling and inspection requirements</li>
          <li>Dimensional or physical characteristics, where applicable</li>
          <li>Marking and identification requirements</li>
          <li>Any additional quality parameters prescribed under IS 27:2023</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Apart from product testing, BIS officers also verify the
          manufacturer&apos;s testing infrastructure during the factory inspection.
          The manufacturing unit should have suitable laboratory equipment,
          calibrated measuring instruments, documented quality procedures, and
          trained personnel capable of conducting routine quality checks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          After the BIS License is granted, manufacturers are required to continue
          testing production batches at specified intervals to ensure ongoing
          compliance. BIS may also conduct surveillance inspections and draw market
          or factory samples for independent testing. Consistent compliance helps
          manufacturers retain their license and maintain confidence among
          industrial buyers.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Primary Lead?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The requirement for a BIS Certificate for Primary Lead extends to
          different stakeholders involved in manufacturing and supplying the product
          in India. Where the applicable Quality Control Order makes certification
          mandatory, compliance becomes a legal requirement before the product
          can be sold or distributed.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Domestic Manufacturers
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Indian manufacturers producing Primary Lead must obtain a BIS
          Certification for Primary Lead before supplying the product in the
          domestic market if it falls under the mandatory certification regime.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          The manufacturing facility is evaluated by BIS for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Production capability</li>
          <li>Quality management system</li>
          <li>Manufacturing process</li>
          <li>Testing facilities</li>
          <li>Product conformity with IS 27:2023</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Only after successful evaluation is a BIS License granted.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Foreign Manufacturers
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers located outside India intending to export Primary Lead to
          India are also required to comply with BIS requirements wherever
          mandatory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          Foreign manufacturers generally obtain certification under the applicable
          BIS scheme for overseas manufacturing units. The certification process
          typically includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application submission</li>
          <li>Technical document review</li>
          <li>Factory inspection</li>
          <li>Product testing</li>
          <li>Compliance verification</li>
          <li>Grant of BIS License</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Once certified, eligible foreign manufacturers can supply compliant
          Primary Lead to the Indian market.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Importers
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Although the BIS License is issued to the manufacturer rather than the
          importer, importers have the responsibility of ensuring that imported
          Primary Lead complies with applicable Indian regulations.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Importing non-certified products covered under mandatory BIS requirements
          may result in customs clearance issues, regulatory action, or
          restrictions on sale within India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Importers should therefore verify that their overseas suppliers possess a
          valid BIS License before placing purchase orders.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Traders and Distributors
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wholesalers, distributors, stockists, and retailers dealing in Primary
          Lead should ensure that the products they procure originate from
          BIS-certified manufacturers whenever certification is mandatory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Sourcing compliant products helps reduce regulatory risks while improving
          customer confidence and supply chain reliability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          E-commerce Sellers
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Businesses selling industrial materials through online marketplaces should
          also verify compliance before listing products. Displaying or supplying
          non-compliant products where BIS certification is mandatory may lead to
          regulatory consequences and marketplace restrictions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Verifying the validity of the manufacturer&apos;s ISI Mark Certificate and
          BIS License before offering products online is considered a good
          compliance practice.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Primary Lead under IS 27:2023 is an
          important step toward ensuring product quality, regulatory compliance,
          and market acceptance in India. The certification confirms that the
          product has been manufactured in accordance with established Indian
          Standards and satisfies the prescribed technical and quality
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, a BIS Certification for Primary Lead demonstrates a
          commitment to consistent production, quality assurance, and responsible
          manufacturing practices. It also authorizes the use of the ISI Mark,
          which enhances credibility among industrial buyers, government
          organizations, and commercial customers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are an Indian manufacturer, overseas producer, importer, or
          supplier, understanding the requirements of IS 27:2023 and obtaining the
          necessary BIS License for Primary Lead can help ensure uninterrupted
          market access, reduce compliance risks, and strengthen long-term business
          growth.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By maintaining proper testing procedures, quality control systems, and
          ongoing conformity with BIS requirements, manufacturers can continue to
          meet industry expectations while contributing to a safer and more
          reliable supply chain.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Primary Lead
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Is BIS Certification mandatory for Primary Lead?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. If Primary Lead is covered under the applicable Quality Control
              Order (QCO), obtaining a BIS Certification for Primary Lead becomes
              mandatory before manufacturing, importing, or selling the product in
              India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Which Indian Standard applies to Primary Lead?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The applicable Indian Standard is IS 27:2023, which specifies the
              quality, composition, testing, and conformity requirements for Primary
              Lead.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Who issues the BIS License for Primary Lead?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The Bureau of Indian Standards (BIS) grants the BIS License after
              evaluating the manufacturing facility, testing capabilities, and
              product conformity with IS 27:2023.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can foreign manufacturers obtain a BIS License?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Overseas manufacturers exporting Primary Lead to India can apply
              for BIS Certification through the applicable certification scheme for
              foreign manufacturing units.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. Is product testing mandatory for BIS Certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Product samples must be tested in BIS-recognized laboratories to
              demonstrate compliance with the technical requirements specified under
              IS 27:2023.
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
              BIS ISI Certification
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              BIS FMCS Certificate
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
