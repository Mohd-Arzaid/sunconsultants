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
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";

const BISCertificationforMassageAppliances = () => {
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

export default BISCertificationforMassageAppliances;

const MetaTags = () => {
  const title =
    "BIS Certification for Massage Appliances – Complete Guide ";
  const ogTitle =
    "BIS Certification for Massage Appliances – IS 302 (Part 1):2024 Guide";
  const twitterTitle =
    "BIS License for Massage Appliances | IS 302 (Part 1):2024";
  const metaDescription =
    "Get BIS Certificate for Battery Operated Massage Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Battery Operated Massage Appliances as per IS 302 (Part 1):2024. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Battery Operated Massage Appliances under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Massage Appliances, BIS License for Massage Appliances, IS 302 (Part 1):2024, BIS Certification for Massage Appliances";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/battery-operated-massage-appliances";
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
                    BIS Certification for Massage Appliances – IS 302 (Part 1):2024
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
          BIS Certification for Massage Appliances – Complete Guide to IS 302 (Part 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseformassageappliances.png"
            title="BIS License for Massage Appliances"
            alt="BIS Certificate for Massage Appliances - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Battery Operated Massage Appliances sold in India must comply with IS 302 (Part 1):2024 and obtain BIS approval. A BIS Certificate for massage appliances confirms electrical safety, battery protection, insulation integrity, and user safety. Without BIS certification, manufacturing, importing, or selling such massage devices in India is illegal.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Battery operated massage appliances have moved from being luxury wellness products to everyday personal-care devices. Handheld body massagers, neck massagers, foot massagers, muscle stimulators, and portable vibration-based massage tools are now widely used across homes, gyms, physiotherapy clinics, wellness centers, hotels, and e-commerce platforms in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          These appliances combine electric motors, rechargeable batteries, control circuits, and direct human body contact. Any defect—whether in insulation, battery design, overheating control, or enclosure sealing—can expose users to electric shock, burns, battery leakage, fire hazards, or mechanical injury. Because of these risks, the Indian government mandates strict safety compliance before such products can enter the market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for massage appliances under IS 302 (Part 1):2024 is therefore a legal requirement. A valid BIS Certification for massage appliances confirms that the product has passed rigorous safety testing and factory inspection as per Indian electrical safety standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This in-depth guide is written for manufacturers, importers, foreign brands, private-label sellers, startups, and compliance teams who want a clear, end-to-end understanding of the BIS License for massage appliances, including scope, certification process, testing, documents, costs, timelines, penalties, and post-approval obligations.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is India's official product conformity and safety assurance framework administered by the Bureau of Indian Standards. BIS operates under the Ministry of Consumer Affairs and is responsible for developing Indian Standards and ensuring that products sold in India meet prescribed levels of safety, quality, and reliability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Certificate meaning refers to a license issued by BIS authorizing a manufacturer (or importer, in specific cases) to manufacture, import, and sell a product that conforms to a notified Indian Standard (IS). This certificate allows the product to carry the BIS certification mark, commonly known as the ISI Mark.
        </p>


        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Battery Operated Massage Appliances
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 302 (Part 1):2024</strong> – Safety of Household and Similar Electrical Appliances
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for battery operated massage appliances is IS 302 (Part 1):2024, which specifies general safety requirements for household and similar electrical appliances, including personal-care and wellness devices.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1):2024 aims to ensure that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Motors do not overheat during prolonged massage cycles</li>
          <li>Batteries remain stable and safe during charging and use</li>
          <li>Live parts are adequately insulated from the user</li>
          <li>The appliance remains safe even under abnormal conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Compliance with IS 302 (Part 1):2024 is mandatory for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers of massage appliances</li>
          <li>Importers and distributors</li>
          <li>Foreign manufacturers supplying to India</li>
          <li>Brand owners and private-label sellers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Massage Appliances
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Non-certified massage appliances may cause:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock due to insulation failure</li>
          <li>Burns from overheating motors or enclosures</li>
          <li>Battery leakage, swelling, or fire</li>
          <li>Mechanical injury from vibration or moving parts</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Because massage appliances are used directly on the human body, even small defects can result in serious harm.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under applicable BIS Notifications and electrical safety regulations, battery operated massage appliances fall under mandatory BIS certification. Selling these products without approval is a violation of Indian law.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Failure to obtain BIS certification can lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of products by authorities</li>
          <li>Heavy financial penalties</li>
          <li>Import rejection at customs</li>
          <li>Prosecution under the BIS Act</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market & Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for massage appliances helps brands:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Build consumer trust and credibility</li>
          <li>Enable listings on Amazon, Flipkart, and other platforms</li>
          <li>Qualify for institutional and healthcare procurement</li>
          <li>Reduce liability and recall risks</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Massage Appliances
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The first step is confirming:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product type: Battery operated massage appliance</li>
          <li>Power rating, battery type, charging method</li>
          <li>Applicable standard: IS 302 (Part 1):2024</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Variants with different batteries, motors, or enclosures may require separate evaluation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for massage appliances typically includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application and processing fees</li>
          <li>Testing charges at BIS-recognized labs</li>
          <li>Factory inspection and audit fees</li>
          <li>License and marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for massage appliances depends on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product complexity</li>
          <li>Battery chemistry and charger design</li>
          <li>Number of models and variants</li>
          <li>Domestic vs foreign manufacturing location</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing (As per IS 302 Part 1:2024)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samples are tested in BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Heating and abnormal operation</li>
          <li>Battery safety and charging behavior</li>
          <li>Insulation resistance</li>
          <li>Dielectric strength</li>
          <li>Mechanical strength and enclosure safety</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing and assembly processes</li>
          <li>Quality control and testing systems</li>
          <li>Battery sourcing and safety controls</li>
          <li>Traceability of critical components</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After successful testing and inspection:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS issues the Bureau of Indian Standards License</li>
          <li>The manufacturer is authorized to affix the ISI Mark</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          After approval:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surveillance audits are conducted</li>
          <li>Market samples may be tested</li>
          <li>Periodic license renewal is mandatory</li>
          <li>Continuous compliance with IS 302 (Part 1):2024 is required</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS license specifies:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approved models and variants</li>
          <li>Manufacturing location</li>
          <li>Electrical ratings and battery type</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The license applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Household and personal use</li>
          <li>Commercial wellness and physiotherapy usage</li>
          <li>Offline retail and e-commerce sales</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Any change in design, battery, motor, or charger requires prior BIS approval.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration or MSME certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery and test equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Trademark or brand authorization</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical circuit diagrams</li>
          <li>Battery and charger specifications</li>
          <li>Motor and control board details</li>
          <li>User manual, safety instructions, and labels</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Test request form</li>
          <li>Declarations and undertakings</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form the bis certificate documents for massage appliances.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Mandatory tests include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock protection test</li>
          <li>Heating and abnormal operation test</li>
          <li>Battery safety and charging test</li>
          <li>Insulation resistance test</li>
          <li>Dielectric strength test</li>
          <li>Mechanical strength and enclosure test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be performed only at BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Common Problems
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Failure in heating or abnormal operation tests</li>
          <li>Unsafe battery enclosure or charger design</li>
          <li>Incomplete technical documentation</li>
          <li>Factory not ready for BIS audit</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Solutions & Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conduct pre-compliance testing</li>
          <li>Use certified batteries and chargers</li>
          <li>Prepare documentation aligned with IS 302</li>
          <li>Work with experienced BIS consultants</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Full regulatory compliance</li>
          <li>Smooth customs clearance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eligibility for government tenders</li>
          <li>Increased buyer acceptance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use of BIS Mark</li>
          <li>Enhanced trust and credibility</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into regulated sectors</li>
          <li>Long-term business sustainability</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance with BIS requirements may lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary fines</li>
          <li>Seizure of non-compliant products</li>
          <li>Cancellation of licenses and registrations</li>
          <li>Legal prosecution under the BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Massage Appliances?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Authorized Indian Representative)</li>
          <li>Traders and private-label sellers</li>
          <li>E-commerce sellers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why Choose Us for BIS Certification Consulting?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          We provide end-to-end BIS certification consulting, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Applicability and gap assessment</li>
          <li>Documentation preparation and review</li>
          <li>Coordination with BIS-recognized labs</li>
          <li>Factory inspection support</li>
          <li>Faster approvals with fewer queries</li>
          <li>Post-certification compliance and renewals</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Our experience across personal-care, wellness, and battery-operated appliances ensures a smooth and predictable certification journey.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for massage appliances under IS 302 (Part 1):2024 is not optional—it is a legal and safety necessity. BIS Certification for massage appliances ensures electrical, battery, and user safety, while the BIS License for massage appliances builds trust, enables market access, and protects long-term business viability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, early compliance prevents regulatory risk and positions the brand as safe, reliable, and future-ready in India's growing wellness market.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Massage Appliances
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q1. Is BIS certification mandatory for massage appliances?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, battery operated massage appliances must comply with IS 302 (Part 1):2024.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q2. What is the BIS certificate cost for massage appliances?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Costs vary based on testing scope, product design, and factory location.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q3. Can importers apply for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, with proper manufacturer authorization.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q4. Is ISI Mark compulsory?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, after BIS license grant.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q5. Are battery safety tests included?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, battery and charging safety are mandatory.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q6. Is factory inspection required?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, BIS conducts an on-site audit.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q7. How long does certification take?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Typically 4–8 weeks for Indian manufacturers and 12-16 weeks for foreign manufacturers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q8. Can multiple models be covered?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, subject to BIS evaluation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q9. Can foreign brands obtain BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, through an Authorized Indian Representative.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Q10. Is renewal required?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, BIS licenses must be renewed periodically.
        </p>

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
