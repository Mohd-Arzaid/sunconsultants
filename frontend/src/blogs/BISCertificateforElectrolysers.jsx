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

const BISCertificateforElectrolysers = () => {
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

export default BISCertificateforElectrolysers;

const MetaTags = () => {
  const title =
    "BIS Certificate for Electrolysers - Complete Guide";
  const ogTitle =
    "BIS Certificate for Electrolysers - Complete Guide";
  const twitterTitle =
    "BIS Certificate for Electrolysers - Complete Guide";
  const metaDescription =
    "Get BIS Certificate for Electrolysers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Electrolysers as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Electrolysers under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Electrolysers, BIS License for Electrolysers, IS 302 (Part 1):2024, BIS Certification for Electrolysers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/electrolysers";
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
                    BIS Certificate for Electrolysers – Complete Guide
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
          BIS Certificate for Electrolysers – Complete Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforElectrolysers.png"
            title="BIS License for Electrolysers"
            alt="BIS Certificate for Electrolysers - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Electrolysers are electrical devices that split water into hydrogen and oxygen using electrolysis. Because they involve high electrical currents, power electronics, and pressurized gases, they must meet strict electrical safety requirements. A valid BIS Certificate for Electrolysers under IS 302 (Part 1):2024 confirms compliance with Indian electrical safety standards before these systems can be legally manufactured, imported, or sold in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Electrolyser technology is becoming one of the most important components of the global clean energy transition. Electrolysers are systems that use electricity to split water into hydrogen and oxygen through the electrolysis process. Hydrogen produced through electrolysis—often referred to as green hydrogen when renewable energy is used—is increasingly being adopted across industries such as energy, transportation, chemicals, steel production, and power storage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          India has also announced strong policy initiatives for hydrogen production under the National Green Hydrogen Mission, which has significantly increased demand for electrolyser technologies. These systems are used in industrial hydrogen generation plants, laboratory hydrogen generators, energy storage applications, and hydrogen fueling infrastructure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because electrolysers operate with high electrical loads, electrolytic cells, conductive electrolytes, control systems, and power electronics, improper design can create serious safety hazards. Electrical faults may cause overheating, insulation failure, electrical shocks, or fire hazards. Therefore, regulatory safety standards are essential to ensure these systems are safe for operation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To regulate the safety of electrical appliances and equipment, India requires compliance with the national standards established by the Bureau of Indian Standards. Manufacturers and importers must obtain a BIS Certificate for Electrolysers under IS 302 (Part 1):2024, which covers the safety of household and similar electrical appliances.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Electrolysers confirms that the product has undergone safety testing, electrical evaluation, and factory verification to ensure compliance with Indian standards. A valid BIS License for Electrolysers also allows the manufacturer to use the ISI certification mark, indicating that the product meets recognized safety benchmarks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything manufacturers, importers, technology startups, and industrial equipment suppliers need to know about obtaining a BIS Licence for Electrolysers in India. It covers certification requirements, application procedures, testing standards, compliance obligations, documentation requirements, certification costs, and regulatory penalties.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is the official product conformity assessment scheme administered by the Bureau of Indian Standards (BIS). The primary objective of this certification system is to ensure that products sold in India meet defined standards for safety, performance, and quality. Electrical equipment, including electrolysers, must comply with applicable Indian standards before entering the market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Electrolysers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          IS 302 (Part 1):2024 — Safety of Electrical Appliances
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for electrolyser systems is IS 302 (Part 1):2024, which defines electrical safety requirements for appliances operating with electricity. Although electrolysers are industrial equipment, they contain several components covered by electrical appliance safety regulations, including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Power supply systems</li>
          <li>Control circuits</li>
          <li>Heating and electrolytic cells</li>
          <li>Electrical insulation and wiring</li>
          <li>Electronic control modules</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Compliance is mandatory for:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrolyser manufacturers in India</li>
          <li>Importers bringing electrolyser systems into India</li>
          <li>Foreign manufacturers exporting electrolysers to India</li>
          <li>Private-label technology companies</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Electrolysers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Electrolysers are complex electrochemical systems that combine electrical engineering, chemical processes, and mechanical components. Because of this complexity, regulatory safety certification is essential.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer and Operator Safety Risks
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Potential hazards associated with electrolysers include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical shock from high-voltage systems</li>
          <li>Thermal hazards due to overheating</li>
          <li>Leakage currents in conductive electrolytes</li>
          <li>Short circuits in power electronics</li>
          <li>Fire risks due to insulation failure</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification ensures that these risks are minimized through standardized testing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Electrolysers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The certification process begins with determining whether the electrolyser system falls within the scope of the relevant BIS standard. Manufacturers must evaluate:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical ratings</li>
          <li>Power supply specifications</li>
          <li>Control systems</li>
          <li>Heating or electrochemical components</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS application process for Electrolysers involves the following steps:
        </p>

        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Registration on the BIS certification portal</li>
          <li>Submission of product details and technical specifications</li>
          <li>Uploading supporting documentation</li>
          <li>Payment of application fees</li>
        </ol>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for Electrolysers depends on several factors, including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product complexity</li>
          <li>Number of models</li>
          <li>Laboratory testing requirements</li>
          <li>Factory inspection costs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-3">
          Typical cost components include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application fee</li>
          <li>Product testing charges</li>
          <li>Inspection expenses</li>
          <li>Certification license fee</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The bis certification cost for Electrolysers may vary depending on project scale and testing complexity.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Electrolyser systems must undergo testing in BIS-recognized laboratories. Testing evaluates:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical insulation</li>
          <li>Leakage current</li>
          <li>Temperature rise</li>
          <li>Mechanical stability</li>
          <li>Operational safety</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials conduct a factory audit to verify:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process controls</li>
          <li>Quality assurance procedures</li>
          <li>Production consistency</li>
          <li>Testing equipment availability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          Once the product successfully completes testing and inspection:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS grants the certification license</li>
          <li>The manufacturer receives authorization to use the ISI mark</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          After obtaining certification, manufacturers must maintain compliance through:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Periodic surveillance audits</li>
          <li>Random product testing</li>
          <li>License renewal</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS license defines the scope of certified products and their technical specifications. For electrolysers, the license may cover:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Hydrogen generation units</li>
          <li>Industrial electrolytic hydrogen systems</li>
          <li>Water electrolysis equipment</li>
          <li>Compact hydrogen generators</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The certification applies to both industrial installations and laboratory hydrogen generation equipment.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must submit several documents during the certification process.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration certificate</li>
          <li>Manufacturing process flowchart</li>
          <li>Machinery and equipment list</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company registration certificate</li>
          <li>GST registration</li>
          <li>Trademark authorization</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical circuit diagrams</li>
          <li>Product specifications</li>
          <li>Bill of materials</li>
          <li>Product operation manual</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Compliance declarations</li>
          <li>Test reports</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form the bis certification documents for Electrolysers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Electrolyser systems must pass several safety tests. Key Tests Include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Insulation resistance test</li>
          <li>Electric strength test</li>
          <li>Leakage current test</li>
          <li>Temperature rise test</li>
          <li>Abnormal operation test</li>
          <li>Mechanical safety test</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted only in BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Electrolysers?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          The following entities must obtain certification before selling electrolysers in India:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li><strong>Manufacturers</strong> — Domestic manufacturers must obtain BIS certification before production.</li>
          <li><strong>Importers</strong> — Importers must ensure the product is certified before customs clearance.</li>
          <li><strong>Foreign Manufacturers</strong> — Foreign manufacturers must obtain certification through authorized Indian representatives.</li>
          <li><strong>Traders and Distributors</strong> — Businesses distributing electrolysers must ensure the product carries a valid BIS mark.</li>
          <li><strong>E-Commerce Sellers</strong> — Online platforms must verify certification before listing electrical equipment.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Electrolysers under IS 302 (Part 1):2024 is essential for manufacturers and importers planning to introduce electrolyser technology in the Indian market. A valid BIS Certification for Electrolysers confirms that the equipment meets national electrical safety standards, while the BIS License for Electrolysers ensures legal compliance and allows the use of the ISI mark.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          As India accelerates its transition toward hydrogen-based energy systems, companies that secure a BIS Licence for Electrolysers will be better positioned to participate in emerging clean energy projects while maintaining the highest standards of safety and reliability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Electrolysers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is an electrolyser and why does it require BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              An electrolyser is an electrical device that splits water into hydrogen and oxygen through electrolysis. Because it operates using electricity and involves conductive electrolytes, there are risks related to electrical insulation, leakage current, and overheating. BIS certification ensures the system has been tested according to Indian safety standards and can operate safely in industrial or laboratory environments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for electrolysers in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, electrical equipment that falls under the scope of applicable BIS standards must obtain certification before being sold in the Indian market. Electrolysers that include electrical power systems, control circuits, or heating components must comply with BIS safety regulations.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. How long does the BIS certification process take for electrolysers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The certification process generally takes 4–8 weeks, depending on product complexity and laboratory testing timelines. If the product fails initial testing, modifications may be required, which can extend the approval process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What are the main tests performed during certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing focuses on electrical safety and operational stability. Common tests include insulation resistance testing, electric strength testing, leakage current measurement, temperature rise evaluation, and abnormal operation testing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What documents are required for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Applicants must provide several documents, including company registration certificates, product technical specifications, electrical circuit diagrams, user manuals, manufacturing process details, and BIS application forms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. Can imported electrolysers be sold without BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No. Imported electrolysers must comply with Indian BIS standards before they can be sold or distributed. Customs authorities may refuse entry of products that lack valid certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What happens if the electrolyser fails testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              If a product fails laboratory testing, the manufacturer receives a report detailing the issues. The product must be modified to meet safety requirements and resubmitted for testing before certification can be granted.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Is factory inspection mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. BIS conducts factory inspections to ensure that the manufacturer has appropriate production controls and testing facilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. How long is a BIS license valid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The license typically remains valid as long as the manufacturer complies with BIS regulations and successfully completes surveillance inspections.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. Can multiple electrolyser models be certified together?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, similar product variants with identical design characteristics may be grouped under a single license if they meet BIS grouping guidelines.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Does BIS certification improve product credibility?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes. Certification enhances trust among customers, industrial buyers, and project developers by demonstrating compliance with recognized safety standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. What is the cost of BIS certification for electrolysers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The cost of BIS certification for Electrolysers varies depending on testing requirements, number of models, and inspection scope. Manufacturers should consider application fees, laboratory testing charges, and license fees when estimating total costs.
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
