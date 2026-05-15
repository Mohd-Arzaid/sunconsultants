import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const HEADING_STYLES = {
  h1: "text-2xl md:text-3xl font-playfair font-bold text-[#1e1e1e] mb-5 text-left leading-tight",
  h2: "text-xl md:text-2xl font-geist font-semibold text-[#1e1e1e] mb-4 leading-snug",
  h3: "text-lg md:text-xl font-geist font-semibold text-[#1e1e1e] mb-3 leading-snug",
  faq: "text-base md:text-lg font-geist font-semibold text-[#1e1e1e] mb-2 mt-4 leading-relaxed",
};

const BISFMCSCertificationGoesFullyDigital = () => {
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

export default BISFMCSCertificationGoesFullyDigital;

const MetaTags = () => {
  const title =
    "BIS FMCS Goes Digital: MANAK Online Mandatory from 1 June 2026";
  const ogTitle =
    "BIS FMCS Goes Digital: MANAK Online Mandatory from 1 June 2026";
  const twitterTitle =
    "BIS FMCS Goes Digital: MANAK Online Mandatory from 1 June 2026";
  const metaDescription =
    "BIS FMCS certification process is going fully digital. Offline applications will be accepted only till 31 May 2026.";
  const ogDescription =
    "BIS FMCS certification process is going fully digital. Offline applications will be accepted only till 31 May 2026.";
  const twitterDescription =
    "BIS FMCS certification process is going fully digital. Offline applications will be accepted only till 31 May 2026.";
  const metaKeywords =
    "BIS FMCS online portal, FMCS digitalization, BIS FMCS process, FMCS online filing";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-fmcs-certification-process-digitalization";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  const articleDescription =
    "BIS will accept FMCS applications only through MANAK Online from 1 June 2026. Learn how the new digital FMCS system impacts foreign manufacturers, BIS certification timelines, documentation, and compliance preparation.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": websiteUrl,
    },
    headline:
      "BIS FMCS Certification Goes Fully Digital: Offline Applications Accepted Only Till 31 May 2026",
    description: articleDescription,
    image: "https://bis-certifications.com/blogImages/fmcsportalupdate.webp",
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
    datePublished: "2026-05-15",
    dateModified: "2026-05-15",
  };

  const ratingSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "BIS FMCS Certification Goes Fully Digital: Offline Applications Accepted Only Till 31 May 2026",
    image: "https://bis-certifications.com/blogImages/fmcsportalupdate.webp",
    description: articleDescription,
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
        name: "What is the last date for submitting offline FMCS applications to BIS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Bureau of Indian Standards has announced that offline FMCS applications will be accepted only until 31 May 2026. After this date, all applications must be submitted through the MANAK Online portal.",
        },
      },
      {
        "@type": "Question",
        name: "Is MANAK Online mandatory for FMCS applications from 1 June 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, from 1 June 2026 onwards, BIS will accept FMCS applications exclusively through the MANAK Online system. Physical or offline submissions will no longer be accepted.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of the MANAK Online portal for foreign manufacturers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The MANAK Online portal offers online application filing, real-time application tracking, centralized document submission, faster communication, and improved transparency in the BIS certification process.",
        },
      },
      {
        "@type": "Question",
        name: "How can foreign manufacturers prepare for the new digital FMCS process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foreign manufacturers should organize technical and compliance documents in advance, ensure product test reports meet Indian Standards, understand the MANAK Online filing process, review BIS documentation requirements carefully, and work with experienced BIS consultants for smoother approvals.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if an FMCS application contains incomplete or incorrect documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Under the new digital FMCS system, incomplete or incorrect documentation may lead to faster scrutiny, application delays, or even rejection. Since the MANAK Online portal standardizes the BIS certification process, foreign manufacturers must ensure that all documents, test reports, and compliance details are accurate before submission.",
        },
      },
    ],
  };

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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS FMCS Goes Fully Digital
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
        <img
          src="/ministryUpdatesBlogsImages/FMCSPortalUpdate.png"
          alt="BIS FMCS certification goes fully digital through MANAK Online portal"
          title="BIS FMCS certification goes fully digital through MANAK Online portal"
          className="w-full rounded-lg mb-6"
        />

        <h1 className={HEADING_STYLES.h1}>
          BIS FMCS Certification Goes Fully Digital: Offline Applications Accepted
          Only Till 31 May 2026
        </h1>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) has officially announced a major
          transition under the Foreign Manufacturers Certification Scheme (FMCS).
          The certification process for foreign manufacturers is now moving toward
          complete digitalization through the MANAK Online portal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per the latest update, offline FMCS applications will be accepted only
          until 31 May 2026, and from 1 June 2026 onwards, all applications must be
          submitted exclusively through the online system.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This is one of the most significant developments in the BIS certification
          ecosystem for overseas manufacturers planning to enter the Indian market.
          The shift not only changes how applications are filed but also transforms
          the overall compliance and approval process under BIS.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For foreign manufacturers dealing with mandatory Indian standards and
          product certification requirements, understanding this transition is now
          essential.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          What is FMCS under BIS?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Foreign Manufacturers Certification Scheme (FMCS) is a certification
          scheme operated by BIS for overseas manufacturers who wish to export
          products to India under mandatory Indian Standards.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under FMCS, eligible foreign manufacturers can obtain a BIS certificate
          and use the ISI mark on their products after complying with the applicable
          Indian Standard and completing the required certification process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Traditional FMCS Process: Major Challenges for Foreign Manufacturers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          For many years, the FMCS certification process was heavily dependent on
          manual procedures and physical documentation.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Foreign manufacturers often faced several operational challenges, such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Extensive paperwork and physical file submissions</li>
          <li>Delays in communication and document verification</li>
          <li>Lack of real-time application tracking</li>
          <li>Dependence on manual follow-ups with BIS offices</li>
          <li>Difficulty in predicting approval timelines</li>
          <li>Repeated documentation clarifications</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          In many cases, the biggest issue was not only the time required for BIS
          certification but also the uncertainty involved in the process.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers planning product launches in India often struggled because
          compliance timelines were difficult to estimate accurately.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          BIS Introduces MANAK Online Portal for FMCS
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          To modernize the certification process, BIS has introduced the MANAK
          Online portal for FMCS applications. The most important update is now
          officially confirmed:
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Offline FMCS applications will be accepted only till 31 May 2026. From 1
          June 2026 onwards, BIS will accept only online applications through MANAK
          Online.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This announcement clearly indicates that BIS is moving toward a completely
          digital certification environment.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Key Features of the MANAK Online System
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The MANAK Online portal is designed to simplify and standardize the FMCS
          certification process.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          1. Online Application Filing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers can now submit BIS certification applications
          digitally without relying on physical file submissions.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          2. Centralized Document Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          All technical documents, authorization letters, factory details, and
          compliance records can be uploaded directly through the online portal.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          3. Real-Time Application Tracking
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Applicants can monitor the status of their BIS FMCS application at
          different stages.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          4. Reduced Physical Coordination
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The online system minimizes dependency on manual coordination and repeated
          follow-ups.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          5. Structured Workflow Management
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The portal standardizes the overall certification process, making
          documentation and approvals more organized.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Why Professional BIS Certification support matters
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The transition to digital FMCS certification increases the importance of
          compliance accuracy.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          A professional BIS consultant can assist with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>FMCS application filing</li>
          <li>Documentation review</li>
          <li>Product testing coordination</li>
          <li>Factory inspection preparation</li>
          <li>BIS compliance management</li>
          <li>Online portal submission support</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This helps foreign manufacturers reduce rejection risks and improve
          certification timelines.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Why Choose Sun Certifications India for FMCS BIS Certification?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          As the BIS FMCS certification process becomes fully digital through the
          MANAK Online portal, foreign manufacturers need more than basic compliance
          support. They need a reliable partner who understands both the technical
          requirements and the evolving digital certification framework.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Sun Certifications India provides end-to-end assistance for foreign
          manufacturers seeking BIS certification under FMCS.
        </p>

        <h3 className={HEADING_STYLES.h3}>
          Our FMCS Certification Services Include
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS FMCS application filing support</li>
          <li>MANAK Online portal assistance</li>
          <li>Documentation review and compliance verification</li>
          <li>Coordination for product testing</li>
          <li>Factory inspection preparation support</li>
          <li>Guidance on applicable Indian Standards</li>
          <li>End-to-end BIS certification consultancy</li>
          <li>Assistance in reducing delays and rejection risks</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The decision by BIS to make FMCS applications fully digital marks a major
          transformation in India&apos;s regulatory and certification framework.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          With offline applications ending on 31 May 2026 and mandatory online filing
          starting from 1 June 2026, foreign manufacturers must adapt quickly to the
          new compliance environment.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          The MANAK Online portal is not just a technology upgrade—it represents a
          shift toward:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Faster certification systems</li>
          <li>Structured compliance workflows</li>
          <li>Greater transparency</li>
          <li>Standardized documentation practices</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          In the coming years, success in BIS certification will depend less on
          follow-ups and more on preparation, documentation quality, and compliance
          accuracy.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Foreign manufacturers that prepare early for the digital transition will be
          better positioned to achieve faster approvals and smoother market entry into
          India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className={HEADING_STYLES.h2}>
          Frequently Asked Questions (FAQs)
        </h2>

        <h3 className={HEADING_STYLES.faq}>
          1. What is the last date for submitting offline FMCS applications to BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards has announced that offline FMCS applications
          will be accepted only until 31 May 2026. After this date, all applications
          must be submitted through the MANAK Online portal.
        </p>

        <h3 className={HEADING_STYLES.faq}>
          2. Is MANAK Online mandatory for FMCS applications from 1 June 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, from 1 June 2026 onwards, BIS will accept FMCS applications exclusively
          through the MANAK Online system. Physical or offline submissions will no
          longer be accepted.
        </p>

        <h3 className={HEADING_STYLES.faq}>
          3. What are the benefits of the MANAK Online portal for foreign
          manufacturers?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The MANAK Online portal offers several advantages, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Online application filing</li>
          <li>Real-time application tracking</li>
          <li>Centralized document submission</li>
          <li>Faster communication</li>
          <li>Improved transparency in the BIS certification process</li>
        </ul>

        <h3 className={HEADING_STYLES.faq}>
          4. How can foreign manufacturers prepare for the new digital FMCS process?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Foreign manufacturers should:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Organize technical and compliance documents in advance</li>
          <li>Ensure product test reports meet Indian Standards</li>
          <li>Understand the MANAK Online filing process</li>
          <li>Review BIS documentation requirements carefully</li>
          <li>Work with experienced BIS consultants for smoother approvals</li>
        </ul>

        <h3 className={HEADING_STYLES.faq}>
          5. What happens if an FMCS application contains incomplete or incorrect
          documents?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under the new digital FMCS system, incomplete or incorrect documentation may
          lead to faster scrutiny, application delays, or even rejection. Since the
          MANAK Online portal standardizes the BIS certification process, foreign
          manufacturers must ensure that all documents, test reports, and compliance
          details are accurate before submission.
        </p>

        <ServiceAuthorEng />
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
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist text-center text-[#1E1E1E]">
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
                width="130"
                height="130"
                loading="lazy"
                decoding="async"
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
