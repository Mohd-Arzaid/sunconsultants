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

const BISCertificationforDishwashers = () => {
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

export default BISCertificationforDishwashers;

const MetaTags = () => {
  const title = "BIS Certificate for Dishwashers - Process, Cost, Documentation";
  const ogTitle = "BIS Certificate for Dishwashers - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Dishwashers - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Dishwashers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Dishwashers as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Dishwashers under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Dishwashers, BIS License for Dishwashers, IS 302 (Part 1):2024, BIS Certification for Dishwashers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/dishwashers";
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
                    BIS Certificate for Dishwashers
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
          BIS Certification for Dishwashers - Complete Guide
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforDishwashers.webp"
            title="BIS License for Dishwashers"
            alt="BIS Certificate for Dishwashers - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Dishwashers ensures that electrically operated
          dishwashing appliances comply with IS 302 (Part 1):2024, focusing on
          safe operation in water-intensive environments, protection against
          electrical hazards, and reliable cleaning performance. This
          certification is essential in India to ensure safe household usage and
          regulatory approval for market entry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dishwashers are no longer considered luxury appliances in India. They
          are rapidly becoming a necessity in urban households, restaurants,
          hotels, and commercial kitchens. With increasing water scarcity
          concerns and the need for hygienic cleaning, dishwashers provide a
          controlled, efficient, and time-saving solution.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, unlike many kitchen appliances, dishwashers operate under
          high-temperature water cycles, pressurized spray systems, and
          continuous electrical input, often running for extended periods. These
          conditions create a complex safety environment where water, heat, and
          electricity coexist within a closed system.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If not designed correctly, dishwashers can pose serious risks such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical leakage due to water ingress</li>
          <li>Overheating of heating elements</li>
          <li>Pressure-related failures in water circulation systems</li>
          <li>Malfunctioning sensors leading to unsafe operation</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address these risks, Indian regulations require compliance with IS
          302 (Part 1):2024, ensuring that dishwashers meet strict electrical and
          operational safety parameters.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Dishwashers is therefore not just a
          regulatory formality. It is a validation that the appliance is
          engineered to perform safely in real-world Indian usage conditions,
          including voltage fluctuations, hard water, and frequent usage cycles.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Dishwashers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dishwashers are uniquely complex appliances because they combine
          multiple systems into a single unit:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical heating system</li>
          <li>Water intake and drainage system</li>
          <li>Spray arms and rotating mechanisms</li>
          <li>Electronic control panels</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This integration makes safety evaluation more intricate compared to
          simpler appliances.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Dishwashers focuses on how these systems
          interact under real conditions. For example:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Can the internal wiring remain safe despite constant exposure to
            moisture?
          </li>
          <li>
            Does the heating element maintain controlled temperatures without
            overheating?
          </li>
          <li>
            Are the spray systems properly insulated from electrical components?
          </li>
          <li>Can the appliance safely shut down in case of malfunction?</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Instead of only checking performance, the certification evaluates
          whether the dishwasher can handle long washing cycles, high water
          pressure, detergent exposure, and electrical load simultaneously,
          without posing any risk to users.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Dishwashers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 302 (Part 1):2024</strong>
          <br />
          This standard provides the safety framework for electrical appliances
          like dishwashers, focusing on electrical integrity, thermal
          performance, and operational safety.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Domestic dishwashers</li>
          <li>Built-in and freestanding dishwashers</li>
          <li>Commercial dishwashing units</li>
          <li>Appliances operating with water and electricity simultaneously</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fully automatic dishwashers</li>
          <li>Semi-automatic dishwashers</li>
          <li>Compact countertop units</li>
          <li>Industrial dishwashing systems</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Safe operation under high-temperature cycles</li>
          <li>Stability of internal components under pressure</li>
          <li>Resistance to water leakage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Water-tight sealing of electrical compartments</li>
          <li>Heat resistance of internal materials</li>
          <li>Performance of sensors and control systems</li>
          <li>Durability of spray and pumping mechanisms</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This ensures that the appliance remains safe even under continuous and
          heavy usage.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Dishwashers
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Electrical Safety in Water-Based Systems
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Dishwashers operate with large volumes of water, making insulation
          critical. Poor design can result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shocks</li>
          <li>Short circuits</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Thermal Safety
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          High-temperature wash cycles can lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Overheating</li>
          <li>Damage to internal components</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Pressure and Mechanical Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Water pumps and spray systems create pressure that must be controlled
          to avoid:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Leakage</li>
          <li>Structural failure</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Consumer Protection
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Safe usage in homes and commercial kitchens</li>
          <li>Consistent performance across cycles</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Regulatory Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Without a BIS License for Dishwashers, products may face:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sales restrictions</li>
          <li>Regulatory penalties</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Brand Trust and Market Entry
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS Licence for Dishwashers helps manufacturers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Build credibility</li>
          <li>Gain customer confidence</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Dishwashers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability &amp; Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must confirm that their dishwasher falls under IS 302
          (Part 1):2024, based on its functionality and design.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The application includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications</li>
          <li>Manufacturing details</li>
          <li>Technical documentation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost for Dishwashers includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Testing charges</li>
          <li>Inspection fees</li>
          <li>License fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Dishwashers depends on product
          complexity and testing scope.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testing in BIS-recognized labs evaluates:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Thermal performance</li>
          <li>Water resistance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection &amp; Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Inspectors assess:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing processes</li>
          <li>Quality control measures</li>
          <li>Product consistency</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After approval, the manufacturer receives a BIS License for
          Dishwashers, allowing ISI marking.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain quality consistency</li>
          <li>Allow periodic inspections</li>
          <li>Ensure ongoing compliance</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mt-4 mb-4">
          <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process etc.</a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          All bis certification documents for Dishwashers must be complete and
          accurate.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Factory license and manufacturing details.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Business registration and authorization letters.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Circuit diagrams, product design specifications, and component details.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Application forms, test reports, and declarations.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted in BIS-recognized laboratories.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Electric shock protection and insulation resistance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Cleaning efficiency and water usage.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Continuous operation cycles and pump and motor endurance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Leakage tests and heat resistance.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Dishwashers operate in a demanding environment where water, heat, and
          electricity interact continuously, making safety compliance essential.
          Obtaining a BIS Certification for Dishwashers under IS 302 (Part
          1):2024 ensures that the product is designed to handle these
          conditions safely and efficiently.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, securing a BIS License for
          Dishwashers is not only necessary for regulatory compliance but also a
          key step in building trust and establishing a strong presence in the
          Indian appliance market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs - BIS Certification for Dishwashers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why are dishwashers considered high-risk appliances under BIS
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Dishwashers are high-risk because water, electricity, and heat
              operate together in a closed system. BIS certification ensures safe
              insulation, controlled temperature, and safe shutdown during faults.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. How does IS 302 (Part 1):2024 address water leakage risks in
              dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The standard checks seals, gaskets, and enclosures under pressure
              and drainage stress to ensure water does not reach electrical areas.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What design changes are often required to obtain a BIS License
              for Dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers often improve waterproof sealing, insulation quality,
              thermal protection, wiring routing, and pump-system strength.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What are the most common reasons dishwashers fail BIS testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Common failures include water leakage into electrical compartments,
              excessive temperature rise, weak insulation, improper earthing, and
              control-system faults.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS testing simulate real kitchen conditions for
              dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS testing runs continuous cycles under varying pressure,
              temperature, detergent load, and abnormal conditions like blocked
              filters or voltage fluctuation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Is BIS certification required for both domestic and commercial
              dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Both domestic and commercial dishwashers must comply because
              core safety risks remain the same.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What role does insulation play in BIS compliance for
              dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Insulation prevents leakage current and shock risk in moisture-heavy
              operation, and it is a key pass/fail parameter in BIS testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. How does BIS certification impact dishwasher installation
              requirements?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Certified products are safer for integration with Indian voltage,
              water pressure, and drainage setups, reducing installation risks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. What is the typical BIS certification cost for Dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs include application, lab testing, factory inspection, and
              annual license fees. Exact cost varies by model complexity and test
              scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How long does it take to obtain a BIS Certificate for
              Dishwashers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification process typically takes around 4 to 8 weeks,
              depending on test completion, documentation quality, and inspection
              findings.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Related Resources
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for FMCS</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for ISI</a>
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

