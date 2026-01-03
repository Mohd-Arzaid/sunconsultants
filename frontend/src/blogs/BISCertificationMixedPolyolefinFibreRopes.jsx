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

const BISCertificationMixedPolyolefinFibreRopes = () => {
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

export default BISCertificationMixedPolyolefinFibreRopes;

const MetaTags = () => {
  const title =
    "BIS Certificate for Mixed Polyolefin Fibre Ropes IS 14929:2022 BIS License";
  const ogTitle =
    "BIS Certification for Mixed Polyolefin Fibre Ropes – IS 14929:2022 Guide";
  const twitterTitle =
    "BIS License for Mixed Polyolefin Fibre Ropes | IS 14929:2022";
  const metaDescription =
    "Get BIS Certificate for Mixed Polyolefin Fibre Ropes under IS 14929:2022. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Mixed Polyolefin Fibre Ropes as per IS 14929:2022. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Mixed Polyolefin Fibre Ropes under IS 14929:2022. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Mixed Polyolefin Fibre Ropes, BIS License for Mixed Polyolefin Fibre Ropes, IS 14929:2022, BIS Certification for Mixed Polyolefin Fibre Ropes";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022";
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
                    BIS Certificate for Mixed Polyolefin Fibre Ropes – IS
                    14929:2022
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
          BIS Certification Mixed Polyolefin Fibre Ropes – Complete Guide to IS
          14929:2022
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforMixedPolyolefinFibreRopes.png"
            title="BIS License for Mixed Polyolefin Fibre Ropes"
            alt="BIS Certificate for Mixed Polyolefin Fibre Ropes - IS 14929:2022 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mixed polyolefin fibre ropes are widely used in marine operations,
          ports and harbours, shipping, fishing, agriculture, material handling,
          construction activities, offshore installations, and general
          industrial applications. These ropes are manufactured using a blend of
          polyolefin fibres, typically polypropylene and polyethylene, to
          achieve a balance of strength, flexibility, abrasion resistance,
          buoyancy, and cost-effectiveness. Due to their lightweight nature and
          resistance to moisture, mixed polyolefin fibre ropes are preferred in
          environments where corrosion resistance and ease of handling are
          essential.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because these ropes are often used in load-bearing, mooring, towing,
          lifting, and securing applications, any failure can result in serious
          safety hazards, operational losses, and legal consequences. To ensure
          consistent quality, safety, and performance, the Government of India
          mandates BIS Certification for Mixed Polyolefin Fibre Ropes as per IS
          14929:2022.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          A valid BIS Certificate for Mixed Polyolefin Fibre Ropes is a legal
          requirement for manufacturers and importers before these products can
          be sold, distributed, or imported into India. This comprehensive guide
          explains the BIS Certification for Mixed Polyolefin Fibre Ropes,
          including applicable standards, testing requirements, documentation,
          certification process, cost factors, and compliance obligations. This
          page is essential reading for manufacturers, importers, foreign
          suppliers, traders, and e-commerce sellers dealing with mixed
          polyolefin fibre ropes in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a product conformity assessment system
          administered by the Bureau of Indian Standards (BIS), the national
          standards authority of India. BIS operates under the BIS Act, 2016 and
          is responsible for formulating Indian Standards, certifying products,
          and ensuring that goods sold in India meet prescribed safety and
          quality benchmarks.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate meaning refers to official recognition that a
          product conforms to a specific Indian Standard. Once certified, the
          manufacturer is authorized to use the BIS Certification Mark, commonly
          known as the ISI Mark, on the product and its packaging.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark Explanation
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The ISI Mark indicates that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The product has been tested in a BIS-recognized laboratory</li>
          <li>
            The manufacturing facility has been evaluated by BIS officials
          </li>
          <li>
            Continuous quality control and surveillance mechanisms are in place
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Why BIS Exists
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS exists to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protect consumer and worker safety</li>
          <li>Prevent the sale of substandard products</li>
          <li>Ensure uniformity in product quality</li>
          <li>Support regulatory enforcement and fair trade</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          For fibre ropes used in critical industrial and marine operations, BIS
          certification ensures reliability and reduces safety risks.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Mixed Polyolefin Fibre Ropes
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product is:
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          🔹 <strong>IS 14929:2022</strong> – Mixed Polyolefin Fibre Ropes
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          This standard specifies the material requirements, construction
          details, dimensional tolerances, mechanical properties, performance
          characteristics, marking, and testing methods for mixed polyolefin
          fibre ropes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance with IS 14929:2022 is mandatory for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers of mixed polyolefin fibre ropes</li>
          <li>Importers supplying these ropes in the Indian market</li>
          <li>Foreign manufacturers selling through Indian entities</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Mixed Polyolefin Fibre Ropes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Consumer & Worker Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Mixed polyolefin fibre ropes are commonly used in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Mooring and towing operations</li>
          <li>Load securing and lifting</li>
          <li>Fishing and aquaculture activities</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Failure of ropes during use can lead to injuries, accidents, vessel
          damage, and operational downtime.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Under BIS notifications and quality control regulations, products
          covered by IS 14929:2022 cannot be legally sold without BIS
          certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance may result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of non-certified goods</li>
          <li>Financial penalties</li>
          <li>Prosecution under the BIS Act</li>
          <li>Import clearance rejection</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Market & Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS License for Mixed Polyolefin Fibre Ropes enhances:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Customer trust and confidence</li>
          <li>Acceptance in government and institutional procurement</li>
          <li>Brand reputation in domestic and export markets</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Mixed Polyolefin Fibre
          Ropes
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The first step is confirming that the product falls under IS
          14929:2022. This includes identifying:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Fibre composition and blend ratio</li>
          <li>Rope construction type</li>
          <li>Diameter range and intended application</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Correct classification ensures accurate testing and faster approval.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must submit the BIS application online through the
          official BIS portal. The application includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product and factory details</li>
          <li>Manufacturing process flow</li>
          <li>Quality control systems</li>
          <li>Test arrangements</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Accuracy and completeness of the BIS application are critical to avoid
          delays.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS certificate cost includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Product testing charges</li>
          <li>Factory inspection fees</li>
          <li>Annual license and marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The overall BIS certification cost depends on product scope, testing
          complexity, and audit requirements. Proper planning helps manage the
          cost of BIS certification effectively.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing (as per IS 14929:2022)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Product samples are tested in BIS-recognized laboratories to verify
          compliance with the standard before certification proceeds.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials conduct a factory audit to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing capability and process control</li>
          <li>Raw material handling</li>
          <li>In-house testing facilities</li>
          <li>Quality assurance and record-keeping systems</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Upon successful compliance, BIS grants the Bureau of Indian Standards
          License, allowing the manufacturer to affix the ISI Mark on mixed
          polyolefin fibre ropes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After certification, manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Maintain consistent product quality</li>
          <li>Comply with periodic surveillance audits</li>
          <li>Inform BIS of any changes in material or process</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License as per IS 14929:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS license specifies:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Approved rope constructions</li>
          <li>Diameter ranges and linear density</li>
          <li>Declared breaking strength values</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The license is valid only for the approved scope and manufacturing
          location. Any modification requires BIS approval.
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
          <li>Factory registration certificate</li>
          <li>Manufacturing process flow chart</li>
          <li>List of machinery and testing equipment</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Company incorporation certificate</li>
          <li>GST registration</li>
          <li>Authorized signatory authorization</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications and drawings</li>
          <li>Raw material specifications</li>
          <li>In-house test procedures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Duly filled BIS application form</li>
          <li>Test request letter</li>
          <li>Marking and labeling details</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These collectively form the mandatory BIS CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 14929:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory tests include:
        </p>

        <div className="mt-6 md:mt-8 overflow-x-auto rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
          <Table className="min-w-full border-collapse">
            <TableHeader>
              <TableRow className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300/50 text-[#1e1e1e]">
                  Clause
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1e1e1e]">
                  Requirement
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Construction and manufacture
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Lay
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Labelling
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Packaging, invoicing and delivery length
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Linear Density
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Minimum Breaking Strength
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          All tests must be conducted only in BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <div className="space-y-3 mb-4">
          <p className="text-gray-600 text-base font-geist">
            <strong>Incorrect Product Classification</strong>
            <br />
            Solution: Conduct a pre-certification assessment before applying.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Test Failures</strong>
            <br />
            Solution: Align raw materials and manufacturing controls with IS
            14929:2022.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Incomplete Documentation</strong>
            <br />
            Solution: Prepare BIS-specific documents carefully and
            systematically.
          </p>
          <p className="text-gray-600 text-base font-geist">
            <strong>Audit Non-Compliance</strong>
            <br />
            Solution: Maintain proper quality records and internal audits.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Manufacturers & Importers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian regulations</li>
          <li>Smooth customs clearance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Eligibility for government and PSU tenders</li>
          <li>Increased market acceptance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Use of BIS Mark</li>
          <li>Improved customer confidence</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into regulated industrial sectors</li>
          <li>Long-term business growth</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to obtain BIS certification may result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary penalties</li>
          <li>Product seizure or recall</li>
          <li>Import bans</li>
          <li>Legal prosecution</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Mixed Polyolefin Fibre Ropes?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers</li>
          <li>Traders and distributors</li>
          <li>E-commerce sellers</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any entity placing these products in the Indian market must ensure BIS
          compliance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Mixed Polyolefin Fibre Ropes under IS
          14929:2022 is both a legal requirement and a critical safety measure.
          A valid BIS Certification / BIS License for Mixed Polyolefin Fibre
          Ropes ensures product reliability, regulatory compliance, and market
          credibility.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, BIS certification is not merely an
          approval—it is a foundation for trust, safety, and long-term business
          success. With the right technical preparation and expert support, the
          BIS certification process in India can be completed smoothly and
          efficiently.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to manufacture or import mixed polyolefin fibre
          ropes in India, obtaining BIS certification is the smartest step
          toward compliance and sustainable growth.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Mixed Polyolefin Fibre Ropes
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is the BIS Full Form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              BIS stands for Bureau of Indian Standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for mixed polyolefin fibre
              ropes?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, it is mandatory under IS 14929:2022.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the BIS Certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Can I apply for BIS certificate online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, manufacturers can BIS apply online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How long does the BIS certification process take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 1–2 months, depending on readiness.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The cost varies based on testing and audit scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Do importers need BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, importers must ensure certified products.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Can foreign manufacturers apply for BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Is BIS registration the same as BIS license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, fibre ropes require a BIS license.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What happens if products fail testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Corrective actions and retesting are required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. Is ISI marking mandatory after certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, ISI marking is compulsory.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. How long is the BIS license valid?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Generally 1–2 years, renewable.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Are surveillance audits compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts periodic audits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Can the license scope be extended later?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through a scope extension process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Can uncertified ropes be sold online?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No, e-commerce sales also require BIS compliance.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />

        <FaqAuthorEng questionNumber={2} />
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
