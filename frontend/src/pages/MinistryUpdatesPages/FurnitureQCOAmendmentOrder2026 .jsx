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
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const FurnitureQCOAmendmentOrder2026 = () => {
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

export default FurnitureQCOAmendmentOrder2026;

const MetaTags = () => {
  const title =
    "BIS Latest Update on IS 9873 Toy Safety Standard";
  const ogTitle = "BIS Issues New Toy Safety Standard IS 9873 (Part 1):2025 – Full Compliance Guide";
  const twitterTitle = "BIS Issues New Toy Safety Standard IS 9873 (Part 1):2025 – Full Compliance Guide";
  const metaDescription =
    "BIS releases implementation guidelines for IS 9873 (Part 1):2025 Toy Safety Standard replacing IS 9873:2019. Check transition rules, testing changes, deadlines & compliance requirements";
  const ogDescription =
    "Learn about BIS IS 9873 (Part 1):2025 replacing IS 9873:2019. Understand new testing rules, labelling changes, ride-on toy limits and transition deadline 22 March 2027.";
  const twitterDescription =
    "Learn about BIS IS 9873 (Part 1):2025 replacing IS 9873:2019. Understand new testing rules, labelling changes, ride-on toy limits and transition deadline 22 March 2027.";
  const metaKeywords = "BIS toy safety standard , BIS certification for toys , Toys QCO India , toy safety certification India";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/bis-certification-update-is-9873-toy-safety";
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
                    Latest BIS Implementation Guidelines for IS 9873
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Latest BIS Implementation Guidelines for IS 9873 (Part 1):2025 – Toy Safety Standard Updated
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/ministryUpdatesBlogsImages/BISCertificationforToysIS9873(Part1)2025.png"
            title="BIS Certification for Toys IS 9873 (Part 1):2025 – Toy Safety Standard Updated"
            alt="BIS Certification for Toys IS 9873 (Part 1):2025 – Latest implementation guidelines for toy safety standard replacing IS 9873:2019"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) has officially released implementation guidelines for the revised IS 9873 (Part 1):2025 – Safety of Toys (Mechanical and Physical Properties) through the Central Marks Department-2 (CMD-2).
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This update replaces the earlier IS 9873 (Part 1):2019 and aligns Indian toy safety regulations with the latest international ISO 8124-1 safety framework.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The guidelines are effective immediately, and BIS has clearly defined transition provisions for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Existing BIS license holders</li>
          <li>New applicants applying for BIS certification</li>
          <li>Manufacturers seeking change in scope of licence</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The earlier standard IS 9873 (Part 1):2019 will remain valid only until 22 March 2027, after which it will be completely withdrawn.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This notification is extremely important for toy manufacturers, importers, and brand owners operating in India because compliance under BIS certification for toys is mandatory under the Toys (Quality Control) Order.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Overview of the Revised Toy Safety Standard
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The updated IS 9873 (Part 1):2025 focuses on improving child safety while reducing unnecessary compliance burden where risk is minimal. The revision introduces technical clarifications, updated safety limits, and improved testing procedures.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Major Objectives of the Revision
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Harmonization with global toy safety standards</li>
          <li>Improved safety assessment of modern toys</li>
          <li>Clearer warning and labeling instructions</li>
          <li>Rationalized testing requirements</li>
          <li>Safety coverage for new toy categories</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The revised standard ensures better protection for children while also providing manufacturers practical flexibility in implementation.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Key Changes Introduced in IS 9873 (Part 1):2025
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The updated standard contains several important technical modifications related to warnings, labeling, testing methodology, and safety limits.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          1. Changes in Labelling Requirements
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The revised standard relaxes certain warning label requirements, especially for hazards related to fixed loops and nooses.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Earlier rules required strict warnings even where risk was minimal, but the new standard now introduces risk-based labeling.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          Impact on Manufacturers:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fewer unnecessary warning labels</li>
          <li>Cleaner product packaging</li>
          <li>Reduced compliance complexity</li>
          <li>Better consumer understanding</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          2. Defined Warning Placement Requirements
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The new standard clearly specifies the placement of warnings instead of leaving interpretation open to manufacturers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This avoids compliance disputes during inspection and surveillance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          Benefits:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Uniformity across the industry</li>
          <li>Reduced rejection during BIS inspection</li>
          <li>Easier packaging design approval</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          3. Expanded Scope – Toys Attached Over Cots &amp; Cradles
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The scope of the standard now explicitly covers toys that are:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hung above cradles</li>
          <li>Suspended over cots</li>
          <li>Attached to infant sleeping areas</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These toys previously fell into interpretational gaps, but the revision brings them directly under regulated safety checks.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          4. Enhanced Testing for Folding Toys
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The revised IS 9873 (Part 1):2025 introduces reasonably foreseeable abuse testing for folding toys.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This means toys will now be tested based on real-world child usage scenarios instead of only laboratory-perfect conditions.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          Examples:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Repeated folding</li>
          <li>Improper handling</li>
          <li>Child weight pressure</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This significantly improves safety reliability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          5. New Speed Limits for Electrically Driven Ride-On Toys
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Battery-operated ride-on toys now have defined speed categories and safety evaluation parameters.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers producing electric ride-on toys must evaluate:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maximum speed</li>
          <li>Stability</li>
          <li>Impact resistance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This is one of the most critical changes in the revised standard.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          6. Sound Level Relaxation for Pull &amp; Push Toys
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The permissible sound level limit has been relaxed:
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">
          <strong>Old Limit:</strong> 85 dB
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>New Limit:</strong> 94 dB
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This change reduces product rejection rates without compromising safety.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Transition Rules for Existing BIS Licence Holders
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS has introduced a smooth migration path to prevent business disruption.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cases Where New Testing is NOT Required
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          No fresh test reports are needed if changes are limited to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Editorial revisions</li>
          <li>Labelling adjustments</li>
          <li>Relaxed safety requirements</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers only need to submit a declaration/undertaking confirming compliance with the revised standard.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Guidelines for New BIS Licence Applicants
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The new guidelines also clarify how fresh applicants will be processed during the transition period.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          Until 21 March 2027
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Applicants have two options:
        </p>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Apply under IS 9873 (Part 1):2019 (old standard)</li>
          <li>Apply under IS 9873 (Part 1):2025 (new standard)</li>
        </ol>

        <p className="text-gray-600 text-base font-geist mb-4">
          If samples are already tested under the old standard, applicants may continue using those reports.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, they can voluntarily shift to the revised standard by submitting a declaration.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3 font-semibold">
          After 22 March 2027
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>No licence will be granted under the 2019 version</li>
          <li>Only IS 9873 (Part 1):2025 applications will be accepted</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The introduction of IS 9873 (Part 1):2025 marks a significant step in strengthening toy safety regulations in India while simplifying compliance procedures for manufacturers.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The revised standard balances child safety, international alignment, and industry practicality. With the final implementation deadline set for 22 March 2027, businesses have sufficient time to transition — but early preparation is essential to avoid regulatory complications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Toy manufacturers and importers should begin reviewing their products, testing requirements, and certification status immediately to ensure uninterrupted sales in the Indian market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          1. What is IS 9873 (Part 1):2025?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 9873 (Part 1):2025 is the revised Indian Standard issued by the Bureau of Indian Standards (BIS) for mechanical and physical safety requirements of toys. It replaces IS 9873 (Part 1):2019 and aligns Indian toy regulations with international ISO 8124-1 safety standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          2. When will IS 9873 (Part 1):2019 be withdrawn?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The old toy safety standard IS 9873 (Part 1):2019 will be officially withdrawn on 22 March 2027. After this date, all toys sold in India must comply only with IS 9873 (Part 1):2025.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          3. Is BIS certification mandatory for toys in India?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS certification is mandatory for toys under the Toys (Quality Control) Order issued by the Government of India. Manufacturers and importers cannot sell toys in India without a valid BIS licence.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          4. Do existing BIS licence holders need fresh testing?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Not always. Fresh testing is not required if the changes are related only to labelling updates, editorial revisions, and relaxed safety limits. However, testing is required for folding toys and electrically driven ride-on toys where new technical provisions apply.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          5. What are the major changes in IS 9873 (Part 1):2025?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Key updates include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Relaxed warning labelling requirements</li>
          <li>Defined placement of safety warnings</li>
          <li>Coverage of toys attached over cots and cradles</li>
          <li>Abuse testing for folding toys</li>
          <li>Speed limits for ride-on toys</li>
          <li>Sound limit increase from 85 dB to 94 dB for push &amp; pull toys</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          6. Can new applicants still apply under IS 9873:2019?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, but only until 21 March 2027. After 22 March 2027, BIS will accept applications only under IS 9873 (Part 1):2025.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          7. What happens if manufacturers do not update before the deadline?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Failure to transition before 22 March 2027 may result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Suspension of BIS licence</li>
          <li>Product sale prohibition in India</li>
          <li>Shipment rejection at customs</li>
          <li>Market recall actions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          8. Are importers also required to comply with the new standard?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Indian importers and foreign manufacturers exporting toys to India must also comply with IS 9873 (Part 1):2025 and obtain BIS certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          9. What is the sound level limit for toys in the revised standard?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The permissible sound limit for push and pull toys has been increased from 85 dB to 94 dB under IS 9873 (Part 1):2025.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          10. Do ride-on electric toys require additional approval?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Electrically driven ride-on toys must comply with newly defined speed categories and may require additional testing or scope inclusion in the BIS licence.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          11. Is declaration submission mandatory for transition?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Existing licence holders must submit an undertaking/declaration confirming compliance with IS 9873 (Part 1):2025 even if no new testing is required.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3 mt-4">
          12. When should manufacturers start the transition process?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers should start immediately to avoid inspection failures, shipment delays, and licence suspension before March 2027.
        </p>

        <ServiceAuthorEng />
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
