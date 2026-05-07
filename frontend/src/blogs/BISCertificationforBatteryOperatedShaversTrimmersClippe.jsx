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

const BLOG_URL =
  "https://bis-certifications.com/blogs/isi-products/battery-operated-shavers-trimmers-clippers-&similar-appliances";

const BISCertificationforBatteryOperatedShaversTrimmersClippe = () => {
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

export default BISCertificationforBatteryOperatedShaversTrimmersClippe;

const MetaTags = () => {
  const title =
    "BIS Certificate for Battery Operated Shavers, Trimmers, Clippers & Similar Appliances";
  const ogTitle =
    "BIS Certificate for Battery Operated Shavers, Trimmers, Clippers & Similar Appliances";
  const twitterTitle =
    "BIS License for Shavers, Trimmers, Clippers & Similar Appliances | IS 302 (Part 1):2024";
  const metaDescription =
    "Get BIS Certificate for Shavers, Trimmers, Clippers & Similar Appliances under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Shavers, Trimmers, Clippers & Similar Appliances as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Shavers, Trimmers, Clippers & Similar Appliances under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Shavers, Trimmers, Clippers & Similar Appliances, BIS License for Shavers, Trimmers, Clippers & Similar Appliances, IS 302 (Part 1):2024, BIS Certification for Shavers, Trimmers, Clippers & Similar Appliances";
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
      <meta property="og:url" content={BLOG_URL} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={BLOG_URL} />
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
                    BIS Certificate for Shavers, Trimmers, Clippers & Similar
                    Appliances
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
          BIS Certification for Shavers, Trimmers, Clippers and Similar
          Appliances- Complete Guide to IS 302 (Part 1):2024
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          Shavers, trimmers, clippers & similar appliances sold in India must
          comply with IS 302 (Part 1):2024 and obtain BIS approval before sale.
          A valid BIS Certificate for Shavers, Trimmers, Clippers confirms
          electrical insulation safety, battery protection, overheating control,
          and mechanical safety. Without BIS certification, manufacturing,
          importing, or selling these grooming appliances in India is illegal.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Personal grooming appliances including electric shavers, beard
          trimmers, and hair clippers have become essential consumer electronics
          in India&apos;s fast-growing personal care market. These devices are
          used daily across homes, salons, barbershops, hotels, gyms, travel
          kits, and professional grooming studios. Modern grooming tools operate
          using rechargeable batteries, high-speed motors, precision blades, and
          electronic control circuits. Because they operate in close contact with
          the human body often on wet skin product safety is critically
          important.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Any defect in insulation, earthing, battery protection, motor speed
          regulation, or enclosure sealing can lead to electric shock, burns,
          cuts, overheating, battery explosion, or fire hazards. To protect
          consumers and standardize safety, India requires compliance with
          national electrical appliance safety rules.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Therefore, obtaining a BIS Certificate for Shavers, Trimmers, Clippers
          under IS 302 (Part 1):2024 is a mandatory legal requirement before
          manufacturing, importing, distributing, or selling these products in
          India. A valid BIS Certification for Shavers, Trimmers, Clippers
          confirms that the appliance has undergone safety testing and quality
          evaluation according to Indian electrical standards.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything manufacturers, importers,
          startups, private-label brands, and compliance teams need to know
          about the BIS License for Shavers, Trimmers, Clippers including
          process, documentation, testing, cost, timeline, risks, and compliance
          responsibilities.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is India&apos;s national product safety and quality
          approval system regulated by the Bureau of Indian Standards. The
          organization develops Indian Standards and ensures regulated products
          meet defined safety benchmarks before entering the market.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS certificate is an official license issued to a manufacturer
          confirming that the product complies with a specific Indian Standard.
          The manufacturer is then allowed to use the ISI mark on the product.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Shavers, Trimmers, Clippers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>
            IS 302 (Part 1):2024 - Safety of Household and Similar Electrical
            Appliances
          </strong>
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for grooming appliances is IS 302 (Part
          1):2024, which specifies general safety requirements for electrical
          appliances used in household and similar environments.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Rechargeable shavers</li>
          <li>Cordless trimmers</li>
          <li>Electric clippers</li>
          <li>Personal grooming kits</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Intent
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protection from electric shock</li>
          <li>Motor overheating prevention</li>
          <li>Battery safety</li>
          <li>Mechanical injury protection</li>
          <li>Insulation durability</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Domestic manufacturers</li>
          <li>Importers</li>
          <li>Foreign brands selling in India</li>
          <li>Private label marketers</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Shavers, Trimmers, Clippers &
          Similar Appliances
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Non-compliant grooming appliances can cause:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Skin burns due to overheating</li>
          <li>Electric shock in wet conditions</li>
          <li>Blade injuries</li>
          <li>Battery explosion during charging</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Indian BIS for Shavers, Trimmers, Clippers mandates certification
          before sale.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Consequences
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Selling uncertified products may result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Penalties</li>
          <li>Import rejection</li>
          <li>Legal prosecution</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Business Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Certification improves:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Consumer trust</li>
          <li>Marketplace acceptance</li>
          <li>Brand credibility</li>
          <li>Retail onboarding</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Shavers, Trimmers, Clippers
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">Identify:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Appliance category</li>
          <li>Battery rating</li>
          <li>Charging method</li>
          <li>Motor type</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS application process for Shavers, Trimmers, Clippers includes:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Online registration</li>
          <li>Application submission</li>
          <li>Document upload</li>
          <li>Fee payment</li>
        </ol>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The bis certificate cost for Shavers, Trimmers, Clippers depends on:
        </p>
        <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of models</li>
          <li>Testing complexity</li>
          <li>Factory location</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2">
          Cost components:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Lab testing fees</li>
          <li>Inspection charges</li>
          <li>License fee</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Products undergo testing for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock protection</li>
          <li>Heating and abnormal operation</li>
          <li>Battery charging safety</li>
          <li>Insulation resistance</li>
          <li>Mechanical strength</li>
          <li>Blade safety</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Inspectors verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Production process</li>
          <li>Quality control</li>
          <li>Component traceability</li>
          <li>Safety testing capability</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory license</li>
          <li>Process flow</li>
          <li>Machinery list</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration</li>
          <li>GST</li>
          <li>Brand authorization</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Circuit diagrams</li>
          <li>Battery details</li>
          <li>User manual</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application form</li>
          <li>Declarations</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These form bis certification documents for Shavers, Trimmers, Clippers
          & Similar Appliances.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Shavers, Trimmers, Clippers under IS
          302 (Part 1):2024 is essential for legal sale in India. BIS
          Certification for Shavers, Trimmers, Clippers ensures electrical
          safety, battery protection, and consumer trust, while the BIS License
          for Shavers, Trimmers, Clippers enables market entry and regulatory
          compliance.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, early certification reduces risk,
          builds credibility, and secures long-term success in India&apos;s
          expanding grooming appliance market.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Is BIS certification compulsory for electric shavers, trimmers,
              and hair clippers in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Electric grooming appliances fall under the category of
              electrical household appliances covered by IS 302 (Part 1):2024.
              Since these products operate using batteries or electricity and
              come in direct contact with human skin often in moist environments
              they are considered safety-critical products. Therefore,
              manufacturers and importers must obtain BIS approval before selling
              them in the Indian market. Without certification, the products
              cannot legally be sold, listed online, or cleared through customs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. What exactly does the BIS Certificate confirm for grooming
              appliances?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certificate verifies that the product has passed multiple
              electrical, mechanical, and thermal safety checks. These include
              protection against electric shock, safe insulation, proper battery
              charging behavior, motor overheating protection, blade safety, and
              durability during abnormal operation. Essentially, the certificate
              assures regulators and consumers that the device will not cause
              injury during normal usage or predictable misuse.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. Who is responsible for applying for BIS certification
              manufacturer or importer?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The responsibility depends on the supply chain structure. If the
              product is made in India, the Indian manufacturer must apply. If
              the product is imported, the foreign manufacturer must apply
              through an Authorized Indian Representative (AIR). Importers or
              traders cannot independently certify a product unless they legally
              represent the manufacturer and take compliance responsibility.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What is the typical BIS certification process for shavers and
              trimmers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process generally involves identification of applicable
              standard and product category, online application submission on the
              BIS portal, submission of technical documents and drawings, product
              sample testing at BIS-recognized laboratories, factory inspection
              by BIS officers, grant of license and permission to use ISI mark,
              and ongoing surveillance with compliance monitoring. The process is
              regulatory and technical, not just paperwork, because physical
              product testing is mandatory.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How long does it take to obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Under normal circumstances, certification takes approximately 4 to
              8 weeks. However, the timeline may increase if test samples fail
              and require redesign, factory documentation is incomplete,
              additional clarifications are requested by BIS, or multiple product
              variants are included in the application. Proper preparation
              significantly reduces delays.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What tests are performed on shavers, trimmers, and clippers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The appliances are tested for both electrical and mechanical
              safety. Typical evaluations include electric shock protection,
              insulation resistance and dielectric strength, heating and abnormal
              operation, battery charging safety, leakage current limits,
              mechanical strength of housing, blade safety and accessibility, and
              moisture resistance. These tests simulate real-world usage
              conditions to ensure consumer protection.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What happens if a product fails during testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If the sample fails any safety test, BIS does not reject the
              application immediately. Instead, the manufacturer receives a test
              report explaining the failure reason. The product can be redesigned
              or improved and resubmitted for testing. Certification proceeds
              once the product meets all safety criteria.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Can multiple models or variants be covered under one BIS
              license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, but only if the variants are technically similar. For example,
              different color variants or minor cosmetic differences can be
              included. However, changes in motor rating, battery capacity,
              charging circuit, or structural design may require additional
              evaluation or separate approval.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. What documents are required during BIS application?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The application requires legal, technical, and manufacturing
              records such as company registration and GST details, factory
              layout and manufacturing process, bill of materials and circuit
              diagrams, battery and charger specifications, user manual with
              safety instructions, and quality control procedures. The goal is to
              demonstrate that the product can consistently meet the tested
              safety standard during mass production.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Is factory inspection mandatory for certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. BIS officers physically inspect the manufacturing facility to
              verify production capability and quality control systems. They
              confirm that the factory can consistently produce products
              identical to the tested sample. Certification cannot be granted
              based only on lab testing.
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
              href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for foreign manufacturers
            </a>
          </li>
          <li>
            <a
              href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
              className="text-blue-600 hover:underline"
            >
              Get details about BIS certification for Indian manufacturers
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

