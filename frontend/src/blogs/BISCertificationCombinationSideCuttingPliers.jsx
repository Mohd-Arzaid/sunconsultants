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

const BISCertificationCombinationSideCuttingPliers = () => {
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




export default BISCertificationCombinationSideCuttingPliers;

const MetaTags = () => {
  const title =
    "BIS Certificate for Combination Side Cutting Pliers | IS 3650:1981 BIS License";
  const ogTitle =
    "BIS Certification for Combination Side Cutting Pliers – IS 3650:1981 Guide";
  const twitterTitle =
    "BIS License for Combination Side Cutting Pliers | IS 3650:1981";
  const metaDescription =
    "Get BIS Certificate for Combination Side Cutting Pliers under IS 3650:1981. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Combination Side Cutting Pliers as per IS 3650:1981. Know process, cost, documents, testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Combination Side Cutting Pliers under IS 3650:1981. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Combination Side Cutting Pliers, BIS License for Combination Side Cutting Pliers, IS 3650:1981, BIS Certification for Combination Side Cutting Pliers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/combination-side-cutting-pliers-is-3650";
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
                    BIS Certificate for Combination Side Cutting Pliers – IS
                    3650:1981
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
          BIS Certification Combination Side Cutting Pliers – Complete Guide to
          IS 3650:1981
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforCombinationSideCuttingPliers.png"
            title="BIS License for Combination Side Cutting Pliers"
            alt="BIS Certificate for Combination Side Cutting Pliers - IS 3650:1981 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Combination Side Cutting Pliers are one of the most commonly used hand
          tools across electrical work, mechanical maintenance, construction,
          manufacturing units, workshops, automotive servicing, and household
          repair activities. These tools are designed to perform multiple
          functions such as gripping, bending, twisting, and cutting wires.
          Because they are frequently used for cutting metal wires, electrical
          conductors, and small components, poor-quality pliers can cause tool
          breakage, electric shock risks, hand injuries, and serious workplace
          accidents.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure safety, durability, and uniform quality, the Government of
          India mandates compliance with Indian Standards for hand tools.
          Obtaining a BIS Certificate for Combination Side Cutting Pliers under
          IS 3650:1981 is a critical legal and quality requirement for
          manufacturers and importers selling these tools in India. A valid BIS
          Certification for Combination Side Cutting Pliers confirms that the
          product has been tested for mechanical strength, cutting efficiency,
          material hardness, and overall safety performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This detailed product page is created for manufacturers, foreign
          manufacturers, importers, traders, distributors, hardware brands,
          e-commerce sellers, and compliance professionals who want a complete
          understanding of the BIS License for Combination Side Cutting Pliers,
          including the BIS certification process in India, testing
          requirements, documentation, cost, timelines, penalties, and benefits.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a product conformity assessment system regulated
          by the Bureau of Indian Standards, which is India&apos;s national
          authority for standardization, certification, and quality assurance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS Certificate meaning refers to official approval issued by BIS
          confirming that a product conforms to the applicable Indian Standard
          (IS) and is manufactured under a controlled quality system.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The main objectives of BIS certification are:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protecting consumers from unsafe products</li>
          <li>Ensuring consistent product quality</li>
          <li>Supporting regulatory enforcement</li>
          <li>Encouraging standardization in Indian industry</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark Explained
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification mark, commonly known as the ISI Mark, is a
          symbol of trust and compliance. For combination side cutting pliers,
          the ISI Mark indicates that:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The tool meets IS 3650:1981 requirements</li>
          <li>Mechanical and cutting performance is verified</li>
          <li>The product is legally approved for sale in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Combination Side Cutting Pliers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 3650:1981</strong> – Specification for Combination Pliers
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for this product is IS 3650:1981, which
          specifies the requirements for combination pliers with side cutting
          edges used for gripping and cutting applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 3650:1981
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          This standard covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Combination pliers with side cutting edges</li>
          <li>Dimensions, shape, and finish requirements</li>
          <li>Material quality and heat treatment</li>
          <li>Mechanical strength and cutting performance</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 3650:1981 is designed to ensure that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Pliers have sufficient cutting capacity</li>
          <li>Jaws and cutting edges do not chip or deform</li>
          <li>Handles provide safe grip and insulation where applicable</li>
          <li>The tool performs reliably under normal working conditions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturers of combination side cutting pliers in India</li>
          <li>Importers and distributors</li>
          <li>Foreign manufacturers supplying to the Indian market</li>
          <li>Brands selling pliers under private labels</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Combination Side Cutting Pliers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Substandard pliers may lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sudden breakage during cutting</li>
          <li>Slipping and hand injuries</li>
          <li>Electric shock hazards in electrical applications</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Government and Regulatory Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per BIS standards and BIS notifications, hand tools like
          combination pliers covered under IS 3650:1981 must comply with BIS
          certification requirements before being sold in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Selling or importing non-certified pliers can result in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product seizure by authorities</li>
          <li>Financial penalties</li>
          <li>Cancellation of trade licenses</li>
          <li>Legal prosecution under the BIS Act</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market and Brand Benefits
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Combination Side Cutting Pliers helps brands:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Build trust with buyers and contractors</li>
          <li>Qualify for government and PSU tenders</li>
          <li>Compete with established hardware brands</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Combination Side Cutting
          Pliers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The first step is confirming that the product:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Falls under combination side cutting pliers</li>
          <li>Is covered by IS 3650:1981</li>
          <li>Matches the scope of the standard in terms of size and use</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Register on the BIS portal</li>
          <li>Select IS 3650:1981 under product standards</li>
          <li>Fill the BIS application form</li>
          <li>Upload all required documents</li>
          <li>Pay applicable fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This stage is commonly referred to as BIS apply online or BIS
          certificate registration.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS License
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost generally includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application and processing fees</li>
          <li>Product testing charges</li>
          <li>Factory inspection charges</li>
          <li>License and marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The total cost of BIS certification depends on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of variants</li>
          <li>Testing complexity</li>
          <li>Factory location</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing (As per IS 3650:1981)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Samples are tested at BIS-recognized laboratories for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cutting edge hardness</li>
          <li>Cutting performance</li>
          <li>Mechanical strength</li>
          <li>Dimensional accuracy</li>
          <li>Surface finish and workmanship</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS officer conducts a factory audit to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process</li>
          <li>Heat treatment and finishing operations</li>
          <li>Quality control system</li>
          <li>Testing and inspection facilities</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After successful testing and inspection:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS issues the Bureau of Indian Standards License</li>
          <li>
            The manufacturer is permitted to use the ISI Mark on approved pliers
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Post-approval requirements include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Surveillance inspections</li>
          <li>Market sample testing</li>
          <li>Timely license renewal</li>
          <li>Continuous compliance with IS 3650:1981</li>
        </ul>

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
          <li>Trademark authorization (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product drawings and specifications</li>
          <li>Raw material details</li>
          <li>Heat treatment and QC plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Test request details</li>
          <li>Declarations and undertakings</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These are collectively known as BIS CERTIFICATE DOCUMENTS or BIS
          CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 3650:1981
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
                  Requirements
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Manufacture
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Workmanship and finish
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  12
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Preservation and packing
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  3.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Dimensions
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Hardness
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Insulation (except insulation test)
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.7
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Insulation test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.1.1
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Cutting Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.2
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Tube Gripping Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.3
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Shock Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.4
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Torsion Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30 bg-white/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  9.5
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Handle Load Test
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-white/50 transition-colors border-b border-gray-200/30">
                <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200/50 text-[#1e1e1e]">
                  8.6
                </TableCell>
                <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-gray-600">
                  Bend Test
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-gray-600 text-base pt-4 font-geist mb-4">
          All tests must be conducted at BIS-recognized laboratories only.
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
          <li>Failure in hardness or cutting tests</li>
          <li>Improper heat treatment</li>
          <li>Poor surface finish</li>
          <li>Incomplete documentation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conduct internal pre-testing</li>
          <li>Follow proper heat treatment procedures</li>
          <li>Maintain batch-wise quality records</li>
          <li>Take expert BIS consultancy support</li>
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
          <li>Full compliance with Indian regulations</li>
          <li>Protection from penalties and seizures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceptance by distributors and contractors</li>
          <li>Eligibility for bulk and institutional orders</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark enhances brand credibility</li>
          <li>Differentiation from unorganized suppliers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Entry into organized hardware retail chains</li>
          <li>Increased acceptance in export-oriented businesses</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance may lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy monetary fines</li>
          <li>Product seizure</li>
          <li>Business disruption</li>
          <li>Legal action under the BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Combination Side Cutting Pliers?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Authorized Indian Representative)</li>
          <li>Traders selling under own brand</li>
          <li>E-commerce sellers listing pliers</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Combination Side Cutting Pliers under
          IS 3650:1981 is a critical legal and quality requirement for selling
          these tools in India. BIS Certification for Combination Side Cutting
          Pliers ensures product safety, consistent performance, and regulatory
          compliance, while the BIS License for Combination Side Cutting Pliers
          strengthens brand credibility and market acceptance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and sellers, timely compliance not only
          avoids penalties but also opens doors to larger markets and long-term
          business growth. With expert guidance, the BIS certification process
          becomes smoother, faster, and fully compliant with Indian standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Combination Side Cutting Pliers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Is BIS certification mandatory for combination side cutting
              pliers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, compliance with IS 3650:1981 is mandatory in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q2. What is the BIS certificate full form?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Bureau of Indian Standards Certificate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q3. How long does the BIS certification process take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Typically 30–60 working days.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. What is the BIS certificate cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The cost depends on testing scope and product variants.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Can importers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, with proper authorization from the manufacturer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q6. Is the ISI Mark compulsory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, ISI marking is mandatory after certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q7. Can foreign manufacturers obtain BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, through an Authorized Indian Representative.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q8. What tests are required under IS 3650:1981?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Hardness, cutting performance, strength, and dimensional tests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q9. Is factory inspection mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS conducts a factory audit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q10. Can multiple sizes be covered under one license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, subject to testing and approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. What happens if non-certified pliers are sold?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Penalties, seizure, and legal action may occur.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Is BIS apply online mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, applications are submitted online only.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Are renewals required for BIS licenses?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, licenses must be renewed periodically.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Can consultants reduce approval delays?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, professional consultants help avoid errors and rejections.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-3650-1981-Sun-Certifications-India.pdf"
            title="BIS Certificate for Combination Side Cutting Pliers - IS 3650:1981 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
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
