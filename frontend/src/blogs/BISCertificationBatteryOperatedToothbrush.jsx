import FaqAuthorEng from "@/components/common/FaqAuthorEng";
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

const BISCertificateForBatteryOperatedToothbrush = () => {
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

export default BISCertificateForBatteryOperatedToothbrush;

const MetaTags = () => {
  const title =
    "BIS Certificate for Battery Operated Toothbrush | IS 302 (Part 1):2024 BIS License";
  const ogTitle =
    "BIS Certification for Battery Operated Toothbrush – IS 302 (Part 1):2024 Guide";
  const twitterTitle =
    "BIS License for Battery Operated Toothbrush | IS 302 (Part 1):2024";
  const metaDescription =
    "Get BIS Certificate for Battery Operated Toothbrush under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Battery Operated Toothbrush as per IS 302 (Part 1):2024. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Battery Operated Toothbrush under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Battery Operated Toothbrush, BIS License for Battery Operated Toothbrush, IS 302 (Part 1):2024, BIS Certification for Battery Operated Toothbrush";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/battery-operated-tootbrush-is-302";
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
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certificate for Battery Operated Toothbrush – IS 302
                    (Part 1):2024
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
          BIS Certification Battery-Operated Toothbrush – Complete Guide to IS
          302 (Part 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforBatteryOperatedTootbrush.png"
            title="BIS License for Battery Operated Toothbrush"
            alt="BIS Certificate for Battery Operated Toothbrush - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Indian oral-care market has witnessed rapid growth in recent
          years, with Battery-Operated Toothbrushes becoming a preferred choice
          among consumers seeking better hygiene, convenience, and effective
          plaque removal. These toothbrushes are widely used in homes, hotels,
          hospitals, travel kits, and personal care routines, especially by
          children, elderly users, and people with limited hand mobility. Since
          battery-operated toothbrushes combine electrical components,
          batteries, moisture exposure, and direct contact with the human body,
          safety and quality compliance are critically important.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Improper design or substandard manufacturing of a battery-operated
          toothbrush can result in electric shock, battery leakage, overheating,
          fire hazards, or mechanical injury. To protect consumers and regulate
          product quality, the Government of India mandates that such electrical
          personal-care appliances comply with Indian safety standards.
          Therefore, obtaining a BIS Certificate for Battery-Operated Toothbrush
          under IS 302 (Part 1):2024 is a mandatory legal requirement before
          manufacturing, importing, selling, or distributing these products in
          India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A valid BIS Certification for Battery-Operated Toothbrush confirms
          that the product has been tested and approved for electrical safety,
          insulation, mechanical strength, moisture resistance, and overall user
          protection. This detailed guide is written for manufacturers, foreign
          manufacturers, importers, brand owners, traders, distributors,
          e-commerce sellers, and compliance professionals who want a complete
          understanding of the BIS License for Battery-Operated Toothbrush,
          including certification process, testing requirements, documents,
          cost, timelines, penalties, and post-certification obligations.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is India&apos;s official conformity assessment
          system administered by the Bureau of Indian Standards. BIS operates
          under the Ministry of Consumer Affairs and is responsible for
          developing Indian Standards and ensuring that products sold in the
          Indian market meet prescribed safety, quality, and reliability
          benchmarks.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Certificate meaning refers to an authorization issued by BIS
          that allows a manufacturer or importer to sell a product that conforms
          to a specific Indian Standard (IS). This certification also permits
          the use of the BIS certification mark (ISI Mark) on approved products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS certification exists to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Protect consumers from unsafe electrical and electronic products
          </li>
          <li>Reduce risks of electric shock, fire, and mechanical hazards</li>
          <li>Ensure uniform quality across domestic and imported goods</li>
          <li>Enable regulatory enforcement and market surveillance</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          ISI Mark Explanation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Mark (ISI Mark) on a battery-operated toothbrush indicates
          that:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The product complies with IS 302 (Part 1):2024</li>
          <li>Electrical insulation and construction are safe</li>
          <li>The appliance is legally approved for sale in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Battery-Operated Toothbrush
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024 – Safety of Household and Similar Electrical
          Appliances
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for battery-operated toothbrushes is IS
          302 (Part 1):2024, which specifies general safety requirements for
          electrical appliances intended for household and similar use,
          including personal-care devices.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Scope of IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          This standard covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety of appliances powered by batteries</li>
          <li>Protection against electric shock and moisture ingress</li>
          <li>Mechanical safety and construction requirements</li>
          <li>Heating, abnormal operation, and component reliability</li>
          <li>Insulation, creepage, and clearance distances</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1):2024 aims to ensure that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Battery-operated toothbrushes operate safely under normal and fault
            conditions
          </li>
          <li>
            Users are protected from electrical, thermal, and mechanical hazards
          </li>
          <li>Batteries and internal circuits do not overheat or leak</li>
          <li>The product remains safe during repeated daily use</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers of battery-operated toothbrushes</li>
          <li>Importers and distributors</li>
          <li>Foreign manufacturers supplying to India</li>
          <li>Brand owners and private-label sellers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Battery-Operated Toothbrush
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Non-certified toothbrushes may lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock due to poor insulation</li>
          <li>Battery leakage or explosion</li>
          <li>Overheating during prolonged use</li>
          <li>Mechanical injury from faulty vibration mechanisms</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under applicable BIS Notifications and electrical safety regulations,
          battery-operated toothbrushes fall under mandatory BIS certification.
          Selling such products without certification is a violation of Indian
          law.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance can result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of products</li>
          <li>Heavy financial penalties</li>
          <li>Import bans and customs rejection</li>
          <li>Legal prosecution under the BIS Act</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Market & Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Battery-Operated Toothbrush helps businesses:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Build consumer trust and confidence</li>
          <li>Enable listing on e-commerce platforms</li>
          <li>Qualify for institutional and retail supply chains</li>
          <li>Strengthen long-term brand reputation</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Battery-Operated Toothbrush
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The first step involves confirming:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product category: Battery-operated toothbrush</li>
          <li>Power source and battery type</li>
          <li>Applicable standard: IS 302 (Part 1):2024</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Certification Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers or importers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Register on the BIS portal</li>
          <li>Submit the BIS Application online</li>
          <li>Upload technical and legal documents</li>
          <li>Pay applicable government fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This step is commonly known as BIS apply online or BIS certificate
          registration.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost typically includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application and processing fee</li>
          <li>Product testing charges</li>
          <li>Factory inspection charges</li>
          <li>License and marking fee</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The total cost of BIS certification depends on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product complexity</li>
          <li>Battery design and enclosure</li>
          <li>Manufacturing location</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Product Sample Testing (As per IS 302 Part 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Samples are tested in BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Moisture resistance</li>
          <li>Heating and abnormal operation</li>
          <li>Insulation resistance</li>
          <li>Dielectric strength</li>
          <li>Mechanical strength</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process and assembly line</li>
          <li>Quality control systems</li>
          <li>Battery sourcing and safety controls</li>
          <li>In-house testing facilities</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After successful testing and inspection:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS issues the Bureau of Indian Standards License</li>
          <li>The manufacturer is authorized to affix the ISI Mark</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After approval:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surveillance audits are conducted</li>
          <li>Market samples may be tested</li>
          <li>Periodic license renewal is mandatory</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery and test equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Brand authorization (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical circuit diagrams</li>
          <li>Battery specifications and datasheets</li>
          <li>Component list</li>
          <li>User manual and labeling artwork</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Test request form</li>
          <li>Declarations and undertakings</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These are collectively referred to as BIS CERTIFICATE DOCUMENTS or BIS
          CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory tests include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock protection test</li>
          <li>Moisture resistance test</li>
          <li>Heating and abnormal operation test</li>
          <li>Insulation resistance test</li>
          <li>Dielectric strength test</li>
          <li>Mechanical strength test</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be conducted only at BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Common Problems
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Failure in moisture or insulation tests</li>
          <li>Unsafe battery enclosure design</li>
          <li>Overheating during abnormal operation</li>
          <li>Incomplete documentation</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Solutions & Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conduct pre-compliance testing</li>
          <li>Use certified batteries and components</li>
          <li>Ensure proper sealing and insulation</li>
          <li>Engage experienced BIS consultants</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian safety laws</li>
          <li>Protection from penalties and seizures</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Nationwide market access</li>
          <li>Acceptance by retailers and e-commerce platforms</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS Mark improves customer trust</li>
          <li>Differentiation from non-certified products</li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Easier entry into organized retail and healthcare markets</li>
          <li>Long-term business sustainability</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance with BIS requirements can result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy financial penalties</li>
          <li>Product recalls</li>
          <li>Import restrictions</li>
          <li>Legal prosecution</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Battery-Operated Toothbrush?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Authorized Indian Representative)</li>
          <li>Traders and brand owners</li>
          <li>E-commerce sellers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end BIS certification consulting services,
          including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product applicability assessment</li>
          <li>Documentation preparation and verification</li>
          <li>Coordination with BIS-recognized laboratories</li>
          <li>Factory inspection and audit support</li>
          <li>Faster approvals with reduced queries</li>
          <li>Post-certification compliance and renewals</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Our expertise in electrical and personal-care appliances ensures a
          smooth, compliant, and time-bound certification journey.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Battery-Operated Toothbrush under IS
          302 (Part 1):2024 is a crucial legal and safety requirement for
          entering and sustaining the Indian market. BIS Certification for
          Battery-Operated Toothbrush ensures electrical safety, moisture
          protection, and user confidence, while the BIS License for
          Battery-Operated Toothbrush strengthens brand credibility and
          regulatory compliance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, timely BIS compliance not only
          prevents penalties but also unlocks access to organized retail,
          healthcare channels, and e-commerce platforms. With expert guidance
          and structured compliance support, the BIS certification process
          becomes efficient, reliable, and fully aligned with Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Battery-Operated Toothbrush
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q1. Is BIS certification mandatory for battery-operated
              toothbrushes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, it is mandatory under IS 302 (Part 1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q2. What is the BIS certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q3. How long does BIS certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 6–8 weeks for Indian manufacturers and 12-16 weeks for
              foreign manufacturers.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q4. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It depends on product design and testing scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q5. Can importers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, with proper authorization.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q6. Is ISI Mark compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, ISI marking is mandatory after certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q7. Are moisture resistance tests required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, they are critical for toothbrush safety.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q8. Is factory inspection mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts a factory audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q9. Can multiple models be covered?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, subject to testing approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q10. Is BIS apply online compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, all applications are submitted online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q11. Can foreign brands obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q12. What happens if non-certified products are sold?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Penalties, seizure, and legal action may follow.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q13. Is renewal required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS licenses require periodic renewal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q14. Does BIS certification improve sales?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, it significantly increases consumer trust.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
              Q15. Can consultants reduce approval time?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, experienced consultants help avoid delays.
            </p>
          </div>
        </div>

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
