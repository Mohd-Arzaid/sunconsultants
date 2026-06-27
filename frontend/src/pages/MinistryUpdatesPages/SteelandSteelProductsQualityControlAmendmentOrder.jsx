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

const PAGE_URL =
  "https://bis-certifications.com/ministry-updates/steel-and-steel-products-quality-control-amendment-order-2026";
const SCHEMA_IMAGE_URL =
  "https://bis-certifications.com/blogImages/steelandsteelproductsamendment2026.webp";

const SteelandSteelProductsQualityControlAmendmentOrder = () => {
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

export default SteelandSteelProductsQualityControlAmendmentOrder;

const MetaTags = () => {
  const title =
    "Steel and Steel Products (Quality Control) Amendment Order, 2026 | Complete QCO Update";
  const ogTitle =
    "Steel and Steel Products (Quality Control) Amendment Order, 2026 | Complete QCO Update";
  const twitterTitle =
    "Steel and Steel Products (Quality Control) Amendment Order, 2026 | Complete QCO Update";
  const metaDescription =
    "Learn about the Steel and Steel Products (Quality Control) Amendment Order, 2026. Understand the 3-year abeyance, deferred enforcement till 31 March 2027, affected IS standards, and BIS compliance requirements.";
  const metaKeywords =
    "BIS Certification for Steel Products, Steel and Steel Products (Quality Control) Order, 2024, ISI Certification Process, BIS Certification for Importers, Latest BIS Notifications";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    headline:
      "Steel and Steel Products (Quality Control) Amendment Order, 2026",
    description: metaDescription,
    image: SCHEMA_IMAGE_URL,
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
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
  };

  const ratingSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Steel and Steel Products (Quality Control) Amendment Order, 2026",
    image: SCHEMA_IMAGE_URL,
    description: metaDescription,
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
        name: "What is the Steel and Steel Products (Quality Control) Amendment Order, 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Steel and Steel Products (Quality Control) Amendment Order, 2026 is a notification issued by the Ministry of Steel that amends the Steel and Steel Products (Quality Control) Order, 2024. The amendment provides temporary compliance relief by placing certain products under three-year abeyance and deferring enforcement for selected stainless steel products until 31 March 2027, allowing manufacturers and importers additional time to comply with BIS Quality Control requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Which steel products have been placed under three-year abeyance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The following products have been placed under three-year abeyance from the date of publication of the amendment: IS 2879:1998 – Steel Tubes for Mechanical and General Engineering Purposes; IS 5518:1996 – Steel Wire Ropes for General Engineering. During this period, the Quality Control Order (QCO) enforcement for these products will remain on hold.",
        },
      },
      {
        "@type": "Question",
        name: "Which products have their enforcement deferred until 31 March 2027?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The amendment defers enforcement for the following stainless steel products until 31 March 2027: IS 5522:2014 – Stainless Steel Sheets and Strips for Utensils; IS 6911:2017 – Stainless Steel Plates, Sheets and Strips; IS 15997:2012 – Low Nickel Austenitic Stainless Steel Sheets and Strips for Utensils and Kitchen Appliances. After this date, these products are expected to come under mandatory enforcement unless the Government issues another notification.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between 'Abeyance' and 'Deferred Enforcement'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Abeyance means that enforcement has been placed on hold for a specified period—in this amendment, three years. Deferred Enforcement, on the other hand, means that enforcement has been postponed until a specific date, which is 31 March 2027 for the notified stainless steel products. Both provide temporary relief, but the duration and applicability are different.",
        },
      },
      {
        "@type": "Question",
        name: "Do manufacturers still need to apply for BIS certification after this amendment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This amendment does not permanently exempt the listed products from BIS certification. It only postpones the enforcement of the applicable Quality Control Order for the specified period. Manufacturers and importers are encouraged to begin preparing for BIS certification in advance so they can meet compliance requirements once enforcement becomes applicable.",
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
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href={PAGE_URL} />
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
                    Steel and Steel Products QCO Amendment Order, 2026
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
          src="/ministryUpdatesBlogsImages/SteelProductsAmendmentQCO2026.webp"
          alt="Steel and Steel Products Quality Control Amendment Order 2026"
          title="Steel and Steel Products Quality Control Amendment Order 2026"
          className="w-full rounded-lg mb-6"
        />

        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          Steel and Steel Products (Quality Control) Amendment Order, 2026
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Steel has issued The Steel and Steel Products (Quality
          Control) Amendment Order, 2026 which has given significant relief to
          the makers, importers, suppliers and traders of the certain steel
          products.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This is an update without any new Quality Control standards but provides
          some temporary respite by deferring the implementation of specified
          Indian Standards (IS). The government has taken two different paths:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <span className="font-semibold">Abeyance (3 Year Hold)</span>
          </li>
          <li>
            <span className="font-semibold">
              Enforcement Deferred (Enforcement Deferred till 31 March 2027)
            </span>
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This modification is crucial for your business if you manufacture,
          import or supply any of these steel products as it directly affects
          your compliance schedule under the{" "}
          <Link
            to="/ministry-updates/steel-products-amendment-2025"
            className="text-[#008080] hover:underline"
          >
            Steel and Steel Products (Quality Control) Order, 2024
          </Link>
          . The amendment shall take effect on the date of its publication in the
          Official Gazette.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is the Steel and Steel Products (Quality Control) Amendment
          Order, 2026?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Steel and Steel Products (Quality Control) Order, 2024 issued
          earlier under the terms of the{" "}
          <a
            href="https://www.bis.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#008080] hover:underline"
          >
            Bureau of Indian Standards (BIS)
          </a>{" "}
          Act, 2016 stands amended by the Steel and Steel Products (Quality
          Control) Amendment Order, 2026.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The change does not remove any product from the Quality Control Order
          (QCO) on a permanent basis. Instead, it is temporarily suspending
          enforcement for some products to allow manufacturers and importers with
          additional time to prepare for compliance.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The decision has been reached by the Central Government in conjunction
          with the Bureau of Indian Standards (BIS) in the interest of public
          administration and industry readiness.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
          Two Major Relief Measures Announced
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The greatest aspect of the change is that the Government has brought
          in two different categories of relief.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  S. No.
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  IS Standard
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Product
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  23
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 2879:1998
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Tubes for Mechanical and General Engineering Purposes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  129
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5518:1996
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire Ropes for General Engineering
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is the meaning of &quot;Abeyance&quot;?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Simply put, abeyance is the suspension of the obligation to enforce.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For these two items the mandatory QCO enforcement will not be in effect
          for three years. Producers and importers will have more time until
          compliance is required. Existing enforcement requirements are suspended
          during this period.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This gives a comfort to several engineering steel tube industries and
          general engineering steel wire rope enterprises.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  S. No.
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  IS Standard
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Product
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  51
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5522:2014
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Sheets and Strips for Utensils
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  52
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6911:2017
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Plates, Sheets and Strips
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  53
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15997:2012
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Low Nickel Austenitic Stainless Steel Sheets and Strips for
                  Utensils and Kitchen Appliances
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The enforcement for these products has not been put in abeyance for
          three years, but has simply been postponed until 31 March 2027. The
          Quality Control requirements are expected to be effective after this
          date until notified by the Government to the contrary.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Abeyance vs Deferred Enforcement – What&apos;s the Difference?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Many businesses are confusing these two terms, but they are not the
          same.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Abeyance
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Deferred Enforcement
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Enforcement is kept on hold.
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Enforcement is postponed to a specified future date.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Valid for three years from publication.
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Valid only until 31 March 2027.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Applies to two products.
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Applies to three stainless steel products.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Longer compliance window.
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Shorter compliance extension.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Has the Government Issued This Amendment?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The notification does not specify the reasons, although the adjustments
          are often made to:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Allow extra time to manufacturers to attain BIS compliance.</li>
          <li>Ease immediate compliance burdens on industry.</li>
          <li>
            Address implementation problems for manufacturers and importers.
          </li>
          <li>
            Make the transition under the Quality Control Order smoother.
          </li>
          <li>Keep production and supply chains running smoothly.</li>
        </ol>
        <p className="text-gray-600 text-base font-geist mb-4">
          For many companies, getting a BIS mark means testing of products,
          inspection of plant, paperwork and licensing and this can take quite a
          bit of time. Temporary reprieve allows firms to carry out these
          activities more efficiently.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Will Be Affected by This Amendment?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-3">
          The amendment is particularly relevant for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Steel manufacturers</li>
          <li>Stainless steel manufacturers</li>
          <li>Steel tube manufacturers</li>
          <li>Steel wire rope manufacturers</li>
          <li>Kitchen utensil manufacturers</li>
          <li>Stainless steel sheet producers</li>
          <li>Importers of steel products</li>
          <li>Traders and distributors</li>
          <li>OEM manufacturers</li>
          <li>BIS consultants</li>
          <li>Compliance managers</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          If your products fall under any of the above IS standards, you should
          review your compliance roadmap based on the revised enforcement
          timelines.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Should Manufacturers Stop Preparing for BIS Certification?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          One of the major misconception is that these items don&apos;t require
          BIS certification anymore. That&apos;s not what the amendment says.
          But the notice just delays enforcement for some products. Businesses
          should continue preparing for future compliance with steps like:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identification of the relevant Indian Standard.</li>
          <li>Technical requirements review.</li>
          <li>Product testing, if applicable.</li>
          <li>Factory documentation preparation.</li>
          <li>
            Planning their BIS certification process ahead of enforcement
            resumption.
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Getting ready early helps you prevent last-minute compliance headaches
          when enforcement becomes effective.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Summary of the Amendment
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Steel and Steel Products (Quality Control) Amendment Order, 2026
          brings in two distinct relaxations in compliance:
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Products in 3-Year Abeyance
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 2879:1998 – Steel tubes for mechanical engineering and general
            engineering purposes
          </li>
          <li>
            IS 5518:1996 – Steel Wire Ropes for General Engineering Products
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          With Enforcement Deferred to 31 March 2027
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 5522:2014 – Stainless Steel Sheets and Strips for Utensils
          </li>
          <li>IS 6911:2017 – Stainless Steel Plates, Sheets and Strips</li>
          <li>
            IS 15997:2012 – Low Nickel Austenitic Stainless Steel Sheets and
            Strips for Utensils and Kitchen Appliances
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These modifications amend the Steel and Steel Products (Quality
          Control) Order, 2024 and shall come into force on the date of
          publication in the Official Gazette.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Need Assistance with BIS Certification?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Even though enforcement has been temporarily relaxed for selected steel
          products, manufacturers and importers should continue preparing for BIS
          compliance well in advance. Starting the certification process early
          can help avoid delays once enforcement becomes mandatory.
        </p>
        <p className="text-gray-600 text-base font-geist mb-3">
          Our BIS experts assist manufacturers with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Certification for Steel Products</li>
          <li>ISI Mark Certification</li>
          <li>Product testing coordination</li>
          <li>Documentation support</li>
          <li>Factory inspection guidance</li>
          <li>
            End-to-end BIS compliance for domestic and foreign manufacturers
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          If your product falls under the Steel and Steel Products (Quality
          Control) Order, our team can help you understand the latest
          notification and plan your certification process with confidence.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQ&apos;s
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. What is the Steel and Steel Products (Quality Control) Amendment
          Order, 2026?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Steel and Steel Products (Quality Control) Amendment Order, 2026 is
          a notification issued by the Ministry of Steel that amends the Steel
          and Steel Products (Quality Control) Order, 2024. The amendment
          provides temporary compliance relief by placing certain products under
          three-year abeyance and deferring enforcement for selected stainless
          steel products until 31 March 2027, allowing manufacturers and
          importers additional time to comply with BIS Quality Control
          requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Which steel products have been placed under three-year abeyance?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The following products have been placed under three-year abeyance from
          the date of publication of the amendment:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 2879:1998 – Steel Tubes for Mechanical and General Engineering
            Purposes
          </li>
          <li>IS 5518:1996 – Steel Wire Ropes for General Engineering</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          During this period, the Quality Control Order (QCO) enforcement for
          these products will remain on hold.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Which products have their enforcement deferred until 31 March 2027?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The amendment defers enforcement for the following stainless steel
          products until 31 March 2027:
        </p>
        <ul className="list-disc ml-6 mb-3 space-y-2 text-gray-600 text-base font-geist">
          <li>
            IS 5522:2014 – Stainless Steel Sheets and Strips for Utensils
          </li>
          <li>IS 6911:2017 – Stainless Steel Plates, Sheets and Strips</li>
          <li>
            IS 15997:2012 – Low Nickel Austenitic Stainless Steel Sheets and
            Strips for Utensils and Kitchen Appliances
          </li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          After this date, these products are expected to come under mandatory
          enforcement unless the Government issues another notification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. What is the difference between &apos;Abeyance&apos; and
          &apos;Deferred Enforcement&apos;?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Abeyance means that enforcement has been placed on hold for a
          specified period—in this amendment, three years. Deferred Enforcement,
          on the other hand, means that enforcement has been postponed until a
          specific date, which is 31 March 2027 for the notified stainless steel
          products. Both provide temporary relief, but the duration and
          applicability are different.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Do manufacturers still need to apply for BIS certification after
          this amendment?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. This amendment does not permanently exempt the listed products
          from BIS certification. It only postpones the enforcement of the
          applicable Quality Control Order for the specified period.
          Manufacturers and importers are encouraged to begin preparing for BIS
          certification in advance so they can meet compliance requirements
          once enforcement becomes applicable.
        </p>

        <ServiceAuthorEng />
      </div>

      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/Steel-and-Steel-Products-Quality-Control-Amendment-Order-2026-1.pdf"
          title="Steel and Steel Products Quality Control Amendment Order 2026 PDF"
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
      </div>
    </div>
  );
};
