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

const BISCertificateForFurnitureWithElectricallyMotorizedParts = () => {
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

export default BISCertificateForFurnitureWithElectricallyMotorizedParts;

const MetaTags = () => {
  const title =
    "BIS Certificate for Furniture with Electrically Motorized Parts";
  const ogTitle =
    "BIS Certificate for Furniture with Electrically Motorized Parts";
  const twitterTitle =
    "BIS Certificate for Furniture with Electrically Motorized Parts";
  const metaDescription =
    "Get BIS Certificate for Furniture with Electrically Motorized Parts under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Furniture with Electrically Motorized Parts as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Furniture with Electrically Motorized Parts under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Furniture with Electrically Motorized Parts, BIS License for Furniture with Electrically Motorized Parts, IS 302 (Part 1):2024, BIS Certification for Furniture with Electrically Motorized Parts";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/furniture-with-electrically-motorized-parts";
  const websiteName = "Sun Certifications India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
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
                    BIS Certificate for Furniture with Electrically Motorized
                    Parts
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
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Furniture with Electrically Motorized Parts –
          Complete Guide to IS 302 (Part 1):2024
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFurniturewithElectricallyMotorizedParts.png"
            title="BIS Certification for Furniture with Electrically Motorized Parts"
            alt="BIS Certificate for Furniture with Electrically Motorized Parts - IS 302 (Part 1):2024"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture with electrically motorized parts—such as adjustable beds,
          motorized recliner sofas, and height-adjustable desks—must comply with
          IS 302 (Part 1):2024 before being sold in India. A valid BIS
          Certificate for Furniture with Electrically Motorized Parts confirms
          electrical safety, insulation reliability, motor protection, and user
          safety under Indian electrical appliance regulations.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Furniture technology has evolved rapidly in recent years. Modern
          furniture products are no longer static; they increasingly include
          electric motors, control circuits, sensors, actuators, and
          remote-control mechanisms. Examples include motorized recliner
          chairs, electric adjustable beds, hospital beds, height-adjustable
          desks, massage sofas, and smart ergonomic furniture.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          These products combine mechanical structures with electrical
          components, which introduces potential safety risks. Faulty wiring,
          insulation breakdown, overheating motors, or controller malfunction can
          expose users to electric shock, fire hazards, mechanical injury, or
          device failure. Since such furniture is used in homes, hospitals,
          offices, and commercial facilities, ensuring electrical safety is
          essential.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          To address these safety concerns, India requires such appliances to
          comply with national electrical safety regulations. Manufacturers
          and importers must obtain a BIS Certificate for Furniture with
          Electrically Motorized Parts under IS 302 (Part 1):2024 before these
          products can legally be manufactured, imported, or sold in the Indian
          market.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          What is BIS Certification?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is India&apos;s official conformity assessment
          program administered by the Bureau of Indian Standards. The system
          ensures electrical, electronic, and consumer products comply with
          defined safety and quality benchmarks before they enter the market.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Applicable BIS Standard for Furniture with Electrically Motorized
          Parts
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024 — Safety of Household and Similar Electrical
          Appliances
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard specifies safety requirements for electrical appliances
          used in homes and similar environments. It also applies to furniture
          products that incorporate electrical motors or electronic control
          systems.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          IS 302 (Part 1):2024 covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Electric adjustable beds</li>
          <li>Motorized recliner chairs</li>
          <li>Electric hospital beds</li>
          <li>Height-adjustable desks</li>
          <li>Motorized sofas and massage furniture</li>
          <li>Smart ergonomic furniture</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The standard aims to ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Protection against electric shock</li>
          <li>Motor overheating protection</li>
          <li>Electrical insulation integrity</li>
          <li>Mechanical safety during movement</li>
          <li>Fire hazard prevention</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Domestic manufacturers</li>
          <li>Importers and distributors</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Private-label brands</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Why BIS Certification is Mandatory for Furniture with Electrically
          Motorized Parts
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Electrically motorized furniture may expose users to risks such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Electric shock from wiring faults</li>
          <li>Fire hazards from motor overheating</li>
          <li>Mechanical injury due to sudden movement</li>
          <li>Controller malfunction</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Since these products combine electrical and mechanical systems,
          safety certification is essential.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Indian BIS for Furniture with Electrically Motorized Parts mandates
          certification before commercial sale.
        </p>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Failure to obtain certification can lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Product seizure</li>
          <li>Heavy financial penalties</li>
          <li>Customs rejection of imports</li>
          <li>Legal prosecution</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market and Business Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Certification improves:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Product credibility</li>
          <li>Retail acceptance</li>
          <li>Institutional procurement eligibility</li>
          <li>Consumer trust</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Step-by-Step BIS Certification Process for Furniture with
          Electrically Motorized Parts
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Manufacturers must identify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Product category</li>
          <li>Motor rating</li>
          <li>Voltage specifications</li>
          <li>Electrical components used</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS application process for Furniture with Electrically
          Motorized Parts includes:
        </p>
        <ol className="list-decimal ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Registration on the BIS portal</li>
          <li>Submission of the BIS application</li>
          <li>Upload of technical and legal documents</li>
          <li>Payment of applicable fees</li>
        </ol>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The bis certificate cost for Furniture with Electrically Motorized
          Parts depends on several factors:
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For a deeper understanding of the BIS framework, you can <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process</a> of BIS certification in India.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Number of product models</li>
          <li>Complexity of electrical components</li>
          <li>Testing requirements</li>
          <li>Manufacturing location</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2">
          Typical cost components include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Application fee</li>
          <li>Product testing charges</li>
          <li>Factory inspection fee</li>
          <li>License fee</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Product samples are tested at BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Insulation resistance</li>
          <li>Dielectric strength</li>
          <li>Temperature rise</li>
          <li>Mechanical safety</li>
          <li>Abnormal operation</li>
          <li>Electrical leakage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          BIS inspectors verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Manufacturing processes</li>
          <li>Quality control procedures</li>
          <li>Electrical safety testing facilities</li>
          <li>Component traceability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Once compliance is confirmed:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>BIS issues the license</li>
          <li>Manufacturer is authorized to use the ISI mark</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          After certification:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Periodic surveillance audits may occur</li>
          <li>Market samples may be tested</li>
          <li>License renewal is required</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Documents Required for BIS Certification
        </h2>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>Machinery list</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Trademark authorization</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Electrical circuit diagrams</li>
          <li>Motor specifications</li>
          <li>Controller details</li>
          <li>User manual</li>
        </ul>
        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Application forms</li>
          <li>Declarations and undertakings</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form bis certification documents for Furniture
          with Electrically Motorized Parts.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>
        <p className="text-gray-600 text-base font-geist mb-2">
          Mandatory tests include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Electric strength test</li>
          <li>Leakage current test</li>
          <li>Temperature rise test</li>
          <li>Abnormal operation test</li>
          <li>Mechanical movement safety test</li>
          <li>Insulation resistance test</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted only at BIS-recognized laboratories.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>
            <strong>Legal Benefits:</strong> Compliance with national
            regulations
          </li>
          <li>
            <strong>Commercial Benefits:</strong> Access to organized retail and
            institutional markets
          </li>
          <li>
            <strong>Branding Benefits:</strong> Consumer trust and credibility
          </li>
          <li>
            <strong>Market Expansion:</strong> Better acceptance in
            international trade
          </li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Who Needs BIS Certification for Furniture with Electrically
          Motorized Parts?
        </h2>
        <p className="text-gray-600 text-base font-geist mb-2">
          Certification is required for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-600 text-base font-geist">
          <li>Manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers exporting to India</li>
          <li>Traders and distributors</li>
          <li>E-commerce sellers</li>
        </ul>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Furniture with Electrically
          Motorized Parts under IS 302 (Part 1):2024 is essential for legally
          manufacturing, importing, and selling electrically powered furniture
          in India. A valid BIS Certification for Furniture with Electrically
          Motorized Parts ensures electrical safety, motor protection, and
          regulatory compliance, while the BIS License for Furniture with
          Electrically Motorized Parts strengthens product credibility and
          market acceptance.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and importers who secure certification early can
          reduce regulatory risk and position their products confidently in
          India&apos;s rapidly growing smart furniture market.
        </p>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-3 mt-6">
          FAQs – BIS Certification for Furniture with Electrically Motorized
          Parts
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Why does electrically motorized furniture require BIS
          certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Motorized furniture contains electrical motors, wiring, power
          adapters, and control systems. These components operate under load
          and may generate heat during operation. If the electrical system is
          poorly designed or insulated, it can lead to electric shock or fire
          hazards. BIS certification ensures that the product has been tested
          for electrical safety, insulation reliability, mechanical
          stability, and overheating protection before it reaches consumers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Which types of furniture fall under this certification category?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The regulation typically applies to furniture that contains
          electrical motors or automated movement mechanisms. Examples include
          electric adjustable beds, motorized recliner chairs,
          height-adjustable office desks, hospital beds, massage chairs, and
          smart furniture with automated positioning systems. Any furniture
          product that includes powered movement or electrical components may
          fall within this category and require compliance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Can imported motorized furniture be sold in India without BIS
          approval?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          No. Imported furniture that contains electrical motors or control
          systems must comply with Indian electrical safety standards before it
          can be sold in the country. Customs authorities may block or
          confiscate shipments that do not carry valid BIS certification
          documentation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. How long does it take to obtain BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process generally takes around four to eight weeks
          if the product and documentation are prepared properly. However, the
          timeline may extend if testing failures occur, additional documents
          are required, or factory inspection scheduling delays arise.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. What happens if the product fails laboratory testing?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          If the product fails safety testing, the manufacturer receives a
          detailed test report explaining the failure. The product must then
          be redesigned or improved to meet safety requirements and
          resubmitted for testing before certification can proceed.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Is factory inspection mandatory during the certification process?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS officers must verify the manufacturing facility to ensure
          the factory has the capability to consistently produce products that
          meet the required safety standard. They review quality control
          procedures, equipment, and testing practices.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. Can multiple furniture models be covered under a single BIS
          license?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes, similar models that share the same electrical design and safety
          features may be grouped under one license. However, major
          differences in motor specifications, electrical circuits, or
          structural design may require separate evaluation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. What safety tests are performed during certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The testing process usually includes insulation resistance testing,
          electric strength testing, leakage current measurement, temperature
          rise evaluation, abnormal operation testing, and mechanical safety
          evaluation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. Is BIS certification required for both residential and commercial
          furniture?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. The certification requirement applies regardless of whether the
          furniture is used in homes, offices, hospitals, hotels, or other
          commercial facilities.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. Does certification cover electronic accessories such as remote
          controls?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Remote controllers, adapters, and electrical control units that
          form part of the product are evaluated during safety testing to
          ensure safe operation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          11. How long is a BIS license valid?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The license remains valid as long as the manufacturer maintains
          compliance with BIS regulations and completes periodic renewals and
          surveillance requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          12. Can startups or small manufacturers apply for BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. BIS certification is available to manufacturers of all sizes as
          long as they meet the technical, documentation, and testing
          requirements.
        </p>

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
        <FaqAuthorEng questionNumber={3} />
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
