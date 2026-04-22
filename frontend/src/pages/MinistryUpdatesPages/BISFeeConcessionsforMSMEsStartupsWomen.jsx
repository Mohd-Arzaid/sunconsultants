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
import React, { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import FooterEng from "@/components/manual/Footer/FooterEng";

const VideoSection = lazy(
  () => import("@/components/manual/home-page-sections/VideoSection")
);

const BISFeeConcessionsforMSMEsStartupsWomen  = () => {         
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <Suspense
        fallback={
          <div className="max-w-full mx-auto px-4 py-8 md:px-12 md:pt-16 md:pb-2 bg-white">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
        }
      >
        <VideoSection />
      </Suspense>
      <FooterEng />
    </div>
  );
};

export default BISFeeConcessionsforMSMEsStartupsWomen; 

const MetaTags = () => {
  const title =
    "BIS Fee Concessions for MSMEs & Startups - Latest QCO Update for Marking Fee";
  const ogTitle =
    "BIS Fee Concessions for MSMEs & Startups - Latest QCO Update for Marking Fee";
  const twitterTitle =
    "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029.";
  const metaDescription =
    "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029.";
  const ogDescription =
    "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029.";
  const twitterDescription =
    "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029.";
  const metaKeywords =
    "QCO minimum marking fee, BIS marking fee 2026, BIS certification cost India, MSME BIS benefits, BIS fee concession 2026";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-marking-fee-latest-qco-update";
  const websiteName = "Sun Certifications India";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://bis-certifications.com/ministry-updates/bis-marking-fee-latest-qco-update",
    },
    headline: "BIS Fee Concessions for MSMEs, Startups & Women Entrepreneurs",
    description:
      "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029",
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
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
  };

  const ratingSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "BIS Fee Concessions for MSMEs, Startups & Women Entrepreneurs",
    description:
      "BIS introduces major concessions on minimum marking fee. Get full details on MSME benefits, startup discounts, eligibility, and BIS certification cost reduction till 2029.",
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
        name: "What is a Quality Control Order (QCO)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Quality Control Order (QCO) is a government regulation that mandates BIS certification for specific products. It ensures that these products meet Indian safety and quality standards before being sold in the market.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum marking fee in BIS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The minimum marking fee is a fixed annual charge that manufacturers must pay to BIS for using the ISI mark, regardless of production volume. It is part of the total BIS certification cost.",
        },
      },
      {
        "@type": "Question",
        name: "Who gets concessions under the BIS marking fee 2026 update?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Micro enterprises, small enterprises, startups, and women entrepreneurs are eligible for concessions ranging from 50% to 80%, along with additional benefits for women-led businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is the validity of these concessions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The concessions are valid until 31 May 2029, as per the official notification.",
        },
      },
      {
        "@type": "Question",
        name: "Do MSMEs get benefits in BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, MSMEs receive significant fee reductions under this update, making BIS certification more affordable and easier to maintain.",
        },
      },
      {
        "@type": "Question",
        name: "How can startups apply for BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Startups can apply through the BIS online portal by submitting required documents, product test reports, and application forms. Professional consultants can help simplify the process.",
        },
      },
      {
        "@type": "Question",
        name: "Does this update reduce overall BIS certification cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the reduction in the minimum marking fee directly lowers the annual cost associated with maintaining a BIS license.",
        },
      },
      {
        "@type": "Question",
        name: "Is this applicable to all QCO products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The concession applies to eligible enterprises dealing with QCO-covered products. However, applicability may vary depending on specific product categories and BIS guidelines.",
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(ratingSchema)}
      </script>
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
                    BIS Marking Fee QCO Update
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
  const [shouldLoadPdf, setShouldLoadPdf] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      
       
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          BIS Fee Concessions for MSMEs, Startups &amp; Women Entrepreneurs
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS marking fee structure is one of the most important factors
          that determines the overall BIS certification cost for manufacturers
          in India. In March 2026, the Bureau of Indian Standards introduced a
          significant revision in the Annual Minimum Marking Fee under Quality
          Control Orders (QCOs).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This update brings major relief in the form of fee concessions for
          MSMEs, startups, and women entrepreneurs, making compliance more
          affordable and encouraging wider adoption of Indian standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to obtain a BIS license or are already operating
          under a QCO, this update can directly impact your cost structure and
          business strategy.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is the Minimum Marking Fee?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Under various Quality Control Orders in India, certain products must
          comply with Indian standards and carry the ISI mark. To use this
          certification, manufacturers are required to pay a marking fee, which
          includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Annual Minimum Marking Fee (fixed base fee)</li>
          <li>Variable marking fee based on production volume</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The minimum marking fee under QCO ensures that BIS receives a fixed
          annual amount regardless of production levels. It is a mandatory part
          of the BIS license fee structure and plays a key role in overall
          certification expenses.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          As per the latest Gazette notification, BIS has introduced concessional
          rates on the annual minimum marking fee, valid until 31 May 2029:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Micro Enterprises: 80% concession</li>
          <li>Small Enterprises: 50% concession</li>
          <li>Startups: 80% concession</li>
          <li>
            Women Entrepreneurs: Additional 10% concession on applicable fees
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This update significantly reduces the BIS certification cost,
          especially for small and emerging businesses.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Detailed Breakdown of Fee Concessions according to latest QCO
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Micro Enterprises - Maximum Benefit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Micro enterprises can avail an 80% reduction in the QCO minimum
          marking fee. This is a major relief for small manufacturers who often
          face financial constraints in meeting compliance requirements. Lower
          fees make it easier to enter regulated markets.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Small Enterprises - Substantial Savings
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Small enterprises are eligible for a 50% concession, which reduces the
          ongoing cost of maintaining BIS certification and encourages more
          businesses to comply with mandatory standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Startups - Encouraging Innovation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          To support innovation and new businesses, startups are also offered an
          80% concession. This makes BIS certification for startups much more
          accessible, especially for companies launching new products in
          regulated sectors.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Women Entrepreneurs - Additional Advantage
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Women-led businesses receive an extra 10% concession on the already
          reduced fee. This initiative promotes inclusive growth and encourages
          greater participation of women in manufacturing and
          compliance-driven industries.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          How This Update Impacts BIS Certification Cost
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS marking fee 2026 revision directly reduces the financial burden
          associated with certification. Since the minimum marking fee is a
          compulsory annual cost, lowering it has several benefits:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Makes BIS certification more affordable</li>
          <li>Reduces entry barriers for new manufacturers</li>
          <li>Encourages MSMEs to comply with QCO requirements</li>
          <li>Promotes adoption of Indian quality standards</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For many businesses, this update translates into significant yearly
          savings, making compliance more practical and sustainable.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-[#1A8781] hover:underline"
          >
            Check complete details about documentation, cost, and process.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS marking fee 2026 update is a major step towards making
          compliance more accessible and business-friendly. With concessions of
          up to 80%, MSMEs, startups, and women entrepreneurs can now obtain and
          maintain BIS certification at a significantly lower cost.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to apply for BIS certification or want to
          understand how these concessions apply to your business, expert
          guidance can help you navigate the process efficiently.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <Link
              to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-[#1A8781] hover:underline"
            >
              Get details about BIS certification for foreign manufacturers
            </Link>
          </li>
          <li>
            <Link
              to="/a-guide-to-bis-certification-indian-bis"
              className="text-[#1A8781] hover:underline"
            >
              Get details about BIS certification for Indian manufacturers
            </Link>
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is a Quality Control Order (QCO)?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A Quality Control Order (QCO) is a government regulation that mandates
          BIS certification for specific products. It ensures that these products
          meet Indian safety and quality standards before being sold in the
          market.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. What is the minimum marking fee in BIS?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The minimum marking fee is a fixed annual charge that manufacturers
          must pay to BIS for using the ISI mark, regardless of production
          volume. It is part of the total BIS certification cost.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Who gets concessions under the BIS marking fee 2026 update?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Micro enterprises, small enterprises, startups, and women
          entrepreneurs are eligible for concessions ranging from 50% to 80%,
          along with additional benefits for women-led businesses.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What is the validity of these concessions?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The concessions are valid until 31 May 2029, as per the official
          notification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Do MSMEs get benefits in BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, MSMEs receive significant fee reductions under this update,
          making BIS certification more affordable and easier to maintain.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. How can startups apply for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Startups can apply through the BIS online portal by submitting
          required documents, product test reports, and application forms.
          Professional consultants can help simplify the process.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Does this update reduce overall BIS certification cost?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, the reduction in the minimum marking fee directly lowers the
          annual cost associated with maintaining a BIS license.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Is this applicable to all QCO products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The concession applies to eligible enterprises dealing with QCO-covered
          products. However, applicability may vary depending on specific
          product categories and BIS guidelines.
        </p>

        <ServiceAuthorEng />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {!shouldLoadPdf ? (
          <div className="p-6 md:p-8 bg-white flex flex-col items-center gap-4">
            <p className="text-sm md:text-base text-gray-700 text-center font-geist">
              Load the official Gazette PDF on demand to improve mobile page
              performance.
            </p>
            <button
              type="button"
              onClick={() => setShouldLoadPdf(true)}
              className="px-5 py-2.5 rounded-md bg-[#1A8781] text-white font-medium hover:bg-[#156d68] transition-colors"
            >
              Load Official PDF
            </button>
          </div>
        ) : (
          <iframe
            src="/pdf/MinimumMarkingfeeQCO.pdf"
            title="BIS Fee Concessions for MSMEs, Startups and Women Entrepreneurs PDF"
            loading="lazy"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        )}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
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
