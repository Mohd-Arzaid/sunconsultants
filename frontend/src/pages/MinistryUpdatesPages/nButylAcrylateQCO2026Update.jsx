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

const nButylAcrylateQCO2026Update = () => {
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

export default nButylAcrylateQCO2026Update;

const MetaTags = () => {
  const title =
    "n-Butyl Acrylate QCO 2026 Postponed - BIS Certification Update India";
  const ogTitle = title;
  const twitterTitle = title;
  const metaDescription =
    "n-Butyl Acrylate QCO 2026 postponed till 10 July 2026. Check BIS certification update, compliance timeline & impact on importers and manufacturers.";
  const ogDescription = metaDescription;
  const twitterDescription = metaDescription;
  const metaKeywords =
    "n-Butyl Acrylate QCO 2026, BIS certification n-Butyl Acrylate India, BIS QCO postponement July 2026, n-Butyl Acrylate BIS license, BIS notification chemicals";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/n-butyl-acrylate-qco-update";
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
            "@id":
              "https://bis-certifications.com/ministry-updates/n-butyl-acrylate-qco-update",
          },
          headline:
            "n-Butyl Acrylate QCO 2026 Update: BIS Certification Postponed Till 10 July 2026",
          description:
            "n-Butyl Acrylate QCO 2026 postponed till 10 July 2026. Check BIS certification update, compliance timeline & impact on importers and manufacturers.",
          image: "https://bis-certifications.com/blogImages/QCOforn-ButylAcrylate.webp",
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
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Product",
          name: "n-Butyl Acrylate QCO 2026 Update: BIS Certification Postponed Till 10 July 2026",
          image:
            "https://bis-certifications.com/blogImages/BISCertificationfortelescopicballbearing.webp",
          description:
            "n-Butyl Acrylate QCO 2026 postponed till 10 July 2026. Check BIS certification update, compliance timeline & impact on importers and manufacturers.",
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

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is the new deadline for n-Butyl Acrylate QCO?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The compliance requirement has been suspended until 10 July 2026. After this date, BIS certification will again become mandatory.",
              },
            },
            {
              "@type": "Question",
              name: "Is BIS certification for n-Butyl Acrylate mandatory now?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No, BIS certification is temporarily not required from 10 April 2026 to 10 July 2026 as per the latest government notification.",
              },
            },
            {
              "@type": "Question",
              name: "Why was the QCO of n-Butyl Acrylate postponed?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The postponement was due to global supply chain disruptions, ensuring continuous availability of n-Butyl Acrylate in the Indian market.",
              },
            },
            {
              "@type": "Question",
              name: "Who is affected by this QCO notification of n-Butyl Acrylate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Manufacturers, importers, traders, and distributors dealing with n-Butyl Acrylate in India are directly impacted.",
              },
            },
            {
              "@type": "Question",
              name: "What happens after July 10, 2026?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "After this date, compliance with BIS standards becomes mandatory again, and non-compliant products may face legal action.",
              },
            },
            {
              "@type": "Question",
              name: "Is import allowed without BIS during this period?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, import of n-Butyl Acrylate without BIS certification is allowed only during the suspension period.",
              },
            },
            {
              "@type": "Question",
              name: "Should businesses still apply for BIS certification for n-Butyl Acrylate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, businesses should start the process now to avoid delays and ensure compliance before the deadline.",
              },
            },
            {
              "@type": "Question",
              name: "Will the deadline be extended again?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "There is no official confirmation of further extension. Businesses should plan based on the current deadline of 10 July 2026.",
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    n-Butyl Acrylate QCO 2026 Update
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <img
          src="/ministryUpdatesBlogsImages/QCOfornButylAcrylate.png"
          alt="QCO temporarily suspended for n-Butyl Acrylate IS 14709:1999"
          title="QCO temporarily suspended for n-Butyl Acrylate IS 14709:1999"
          className="w-full rounded-lg mb-6"
        />

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          n-Butyl Acrylate QCO 2026 Update: BIS Certification Postponed Till 10 July 2026
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Government of India has officially announced a temporary suspension
          of BIS compliance under the n-Butyl Acrylate (Quality Control) Order,
          2021 through a Gazette notification dated 10 April 2026.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per the notification, the mandatory requirement to comply with
          Indian Standards for n-Butyl Acrylate has been suspended from 10 April
          2026 to 10 July 2026 due to global supply chain disruptions.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This n-Butyl Acrylate QCO 2026 update is highly significant for
          manufacturers, importers, and traders dealing with chemicals in India,
          as it directly impacts BIS certification requirements and market
          operations.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is n-Butyl Acrylate (Quality Control) Order, 2021?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The n-Butyl Acrylate (Quality Control) Order, 2021 is a regulatory
          framework issued under the Bureau of Indian Standards (BIS) Act, 2016
          to ensure product quality, safety, and standardization.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Key Features of the QCO:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mandates BIS certification for n-Butyl Acrylate in India</li>
          <li>Requires products to conform to Indian Standards</li>
          <li>Ensures quality control in the chemical industry</li>
          <li>Applies to manufacturers, importers, distributors and traders</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under this order, selling or importing non-compliant products without a
          valid BIS license is prohibited.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Latest QCO Update of n-Butyl Acrylate April 2026
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Chemicals and Fertilizers (Department of Chemicals and
          Petrochemicals) issued a notification (S.O. 1854(E)) on 10 April 2026.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Key Highlights of the Notification:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>QCO temporarily suspended</li>
          <li>Effective period: from 10 April 2026 to 10 July 2026</li>
          <li>Reason: To prevent disruption in supply chain</li>
          <li>Legal basis: Section 16 and Section 25 of BIS Act, 2016</li>
          <li>Applies to n-Butyl Acrylate compliance requirements</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Reason for Postponement: Supply Chain Disruption
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The government has clearly stated that the decision was taken due to
          global supply chain disruptions.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Key Reasons behind the QCO Suspension:
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>International supply constraints</li>
          <li>Raw material shortages</li>
          <li>Logistics and transportation delays</li>
          <li>Need to ensure continuous availability of n-Butyl Acrylate</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          The temporary suspension ensures that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Market supply remains stable</li>
          <li>Industries dependent on the chemical are not affected</li>
          <li>Import flow is not restricted due to compliance barriers</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Compliance Timeline: Key Dates to Remember
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Understanding the timeline is critical for businesses planning their
          compliance strategy.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Timeline Breakdown:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Original QCO Enforcement: Based on 2021 order</li>
          <li>Latest Notification Date: 10 April 2026</li>
          <li>Suspension Start Date: 10 April 2026</li>
          <li>Suspension End Date: 10 July 2026</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          After 10 July 2026:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS certification becomes mandatory again</li>
          <li>
            Non-compliance may lead to import restrictions, legal penalties and
            product seizure
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What Businesses Should Do Now
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Even though compliance is temporarily relaxed, businesses should use
          this time strategically.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Start BIS Certification Process
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Apply for BIS license in advance</li>
          <li>Avoid last-minute delays before July 2026</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Conduct Product Testing
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Ensure products meet Indian Standards</li>
          <li>Work with BIS-recognized laboratories</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Prepare Documentation
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Technical files</li>
          <li>Test reports</li>
          <li>Manufacturing details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Monitor Regulatory Updates
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Stay informed about any further extensions or changes</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Plan Inventory Strategically
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Balance supply during the exemption period</li>
          <li>Avoid non-compliant stock post-deadline</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-semibold text-[#1e1e1e] mb-4">
          Conclusion: n-Butyl Acrylate Compliance in India
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The n-Butyl Acrylate notification April 2026 offers temporary relief to
          the chemical industry, ensuring uninterrupted supply amid global
          challenges.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          However, this BIS QCO postponement until 10 July 2026 should not be
          seen as a long-term relaxation. Businesses must prepare for full
          compliance once the suspension period ends.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2 font-semibold">
          Key Takeaway:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The exemption is temporary</li>
          <li>
            BIS certification will become mandatory again after 10 July 2026
          </li>
          <li>Early compliance preparation is essential for smooth operations</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This update reflects the government&apos;s balanced approach-supporting
          industry needs while maintaining long-term quality control under Indian
          standards.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get details about BIS certification for foreign manufacturers
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get details about BIS certification for Indian manufacturers
            </a>
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the new deadline for n-Butyl Acrylate QCO?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The compliance requirement has been suspended until 10 July 2026. After
          this date, BIS certification will again become mandatory.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Is BIS certification for n-Butyl Acrylate mandatory now?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No, BIS certification is temporarily not required from 10 April 2026 to
          10 July 2026 as per the latest government notification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Why was the QCO of n-Butyl Acrylate postponed?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The postponement was due to global supply chain disruptions, ensuring
          continuous availability of n-Butyl Acrylate in the Indian market.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Who is affected by this QCO notification of n-Butyl Acrylate?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers, importers, traders, and distributors dealing with
          n-Butyl Acrylate in India are directly impacted.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. What happens after July 10, 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After this date, compliance with BIS standards becomes mandatory again,
          and non-compliant products may face legal action.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Is import allowed without BIS during this period?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, import of n-Butyl Acrylate without BIS certification is allowed
          only during the suspension period.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Should businesses still apply for BIS certification for n-Butyl Acrylate?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, businesses should start the process now to avoid delays and ensure
          compliance before the deadline.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Will the deadline be extended again?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          There is no official confirmation of further extension. Businesses
          should plan based on the current deadline of 10 July 2026.
        </p>

        <ServiceAuthorEng />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/n-Butyl-Acrylate-Quality-Control-Order-2021.pdf"
          title="n-Butyl Acrylate QCO 2026 update PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
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
