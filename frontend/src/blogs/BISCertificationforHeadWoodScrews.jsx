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
import InterlinkSection from "@/components/common/InterlinkSection";
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

const BISCertificationforHeadWoodScrews = () => {
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

export default BISCertificationforHeadWoodScrews;

const MetaTags = () => {
  const title =
    "BIS Certificate for Cross-recessed Countersunk Head Wood Screws - Process, Cost, Documentation";
  const ogTitle =
    "BIS Certificate for Cross-recessed Countersunk Head Wood Screws - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Cross-recessed Countersunk Head Wood Screws - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Cross-recessed Countersunk Head Wood Screws under IS 18509:2023. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Cross-recessed Countersunk Head Wood Screws as per IS 18509:2023. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Cross-recessed Countersunk Head Wood Screws under IS 18509:2023. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certification for Cross-recessed Countersunk Head Wood Screws, BIS License for Cross-recessed Countersunk Head Wood Screws, IS 18509:2023, BIS Certification for Cross-recessed Countersunk Head Wood Screws";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/cross-recessed-countersunk-head-wood-screws";
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
                    BIS Certification for Head Wood Screws – IS 18509:2023
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
          BIS Certification for Head Wood Screws – Complete Guide to IS 18509:2023
        </h1>



        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Cross-recessed Countersunk Head Wood Screws confirms that these fasteners comply with IS 18509:2023, ensuring dimensional accuracy, mechanical strength, and corrosion resistance. It is required in India to ensure reliable fastening performance in wood applications, prevent structural failures, and maintain consistency across manufacturing batches.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cross-recessed countersunk head wood screws are among the most widely used fastening components in construction, furniture manufacturing, carpentry, and interior applications. These screws are specifically designed to embed flush with wooden surfaces while providing strong holding power. Their cross-recessed head allows better torque transmission during installation, reducing slippage and improving efficiency.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          From assembling modular furniture and wooden frames to fixing panels and structural elements, these screws play a crucial role in ensuring durability and stability. A single defective screw can compromise the integrity of an entire assembly—whether it is a wardrobe, wooden door frame, or flooring structure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike electrical appliances, the risks associated with these screws are mechanical and structural. Poor thread design, inadequate hardness, or substandard material can lead to issues such as stripping, breakage, or loosening over time. In critical applications like construction or heavy furniture, such failures can result in safety hazards, financial losses, and reputational damage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To prevent these issues, India has introduced specific requirements under IS 18509:2023, which defines technical specifications for cross-recessed countersunk head wood screws. This standard ensures uniformity in dimensions, mechanical strength, thread quality, and surface finish.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Head Wood Screws confirms that the product meets these stringent requirements. For manufacturers and importers, securing a BIS License for Head Wood Screws is essential to ensure compliance, product reliability, and acceptance in the Indian market.
        </p>

        {/* ============================================ */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <Link
            to="/bis-qco-updates/bis-certificate-for-cross-recessed-countersunk-head-wood-screws-specification"
            className="text-blue-700 hover:underline"
          >
            Also read the QCO Notification for Cross-recessed Countersunk Head
            Wood Screws (IS 18509)
          </Link>
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Head Wood Screws – IS 18509:2023
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Wood screws may appear simple, but their performance depends on precise engineering. Factors such as thread pitch, head geometry, material strength, and surface coating directly influence how well the screw performs in real-world applications.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Head Wood Screws evaluates whether these parameters meet defined standards to ensure consistent performance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          For example, when a carpenter uses a countersunk wood screw, it must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Penetrate wood smoothly without splitting it</li>
          <li>Provide strong grip and resistance against pull-out forces</li>
          <li>Sit flush with the surface for aesthetic and functional purposes</li>
          <li>Resist corrosion when exposed to environmental conditions</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          If any of these characteristics are compromised, the screw may fail during installation or over time.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Certification ensures that:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Threads are precisely formed for proper engagement with wood</li>
          <li>The head design allows efficient torque transfer</li>
          <li>Material hardness is balanced to prevent brittleness or deformation</li>
          <li>Surface coatings provide adequate corrosion resistance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate for Head Wood Screws confirms that these factors have been tested and verified.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Additionally, certification ensures uniformity across production batches. In large-scale projects, thousands of screws are used. Consistency in quality is critical to avoid failures in assembled structures.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Cross-recessed Countersunk Head Wood Screws
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard is <strong>IS 18509:2023</strong>, which specifies requirements for cross-recessed countersunk head wood screws.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard covers screws designed for fastening wood and wood-based materials. It defines requirements related to dimensions, mechanical properties, and surface finish.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Cross-recessed countersunk head wood screws</li>
          <li>Screws used in furniture and carpentry</li>
          <li>Fasteners used in wooden structures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 18509:2023 ensures that screws:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Provide reliable fastening without failure</li>
          <li>Maintain structural integrity under load</li>
          <li>Resist corrosion and environmental degradation</li>
          <li>Fit accurately with tools and mating materials</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard defines parameters such as:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Thread geometry for optimal grip</li>
          <li>Head dimensions for proper seating</li>
          <li>Material composition for strength and durability</li>
          <li>Coating requirements for corrosion resistance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Compliance is required to obtain a BIS Licence for Head Wood Screws.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Head Wood Screws – IS 18509:2023
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Risks Related to the Product
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Although small in size, wood screws are critical load-bearing components. Failure can lead to collapse of furniture or structural elements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Consumer Protection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Consumers expect furniture and wooden installations to remain stable over time. Certification ensures reliability and long-term performance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Regulatory Enforcement in India
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Authorities regulate fasteners to ensure quality and prevent substandard products from entering the market.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Access Requirements
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and suppliers often require certified products for large projects and institutional supply.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Brand Credibility
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Certified screws are perceived as reliable, enhancing brand trust.
        </p>

        <p className="text-gray-600 text-base font-geist mt-4 mb-4">
          <a
            href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
            className="text-blue-600 hover:underline"
          >
            Check complete details about documentation, cost, and process etc.
          </a>
        </p>
       

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Cross-recessed countersunk head wood screws are critical components in construction, furniture, and carpentry applications. Their performance directly impacts the safety and durability of assembled structures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Head Wood Screws under IS 18509:2023 ensures that these fasteners meet strict quality and performance requirements. A valid BIS License for Head Wood Screws enables manufacturers and importers to confidently supply their products in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By following the correct bis certification process for Head Wood Screws, ensuring proper documentation, and meeting testing requirements, businesses can secure a BIS Certificate for Head Wood Screws and establish a strong, compliant presence in the industry.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Head Wood Screws – IS 18509:2023
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Why is BIS Certification important for cross-recessed countersunk head wood screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          These screws are used in load-bearing wooden assemblies where failure can weaken structures. BIS certification ensures proper thread design, head strength, and material quality so the screw holds firmly, resists stripping during installation, and performs reliably in furniture, doors, and structural wood applications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. What does IS 18509:2023 specifically check in wood screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 18509:2023 evaluates dimensions, thread accuracy, head design, and material strength. It ensures screws fit correctly with tools, penetrate wood smoothly, and provide consistent holding power. It also checks surface finish and coatings to prevent rust, which is critical for long-term durability in wooden installations.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. How does BIS Certification ensure proper grip in wood?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The certification verifies thread geometry and pitch, which directly affect how well the screw grips wood fibers. Proper testing ensures the screw neither loosens over time nor damages the wood during insertion, making it suitable for applications like cabinetry, flooring, and structural joinery.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Are corrosion-resistant coatings tested under BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, coatings such as zinc plating or other finishes are tested to ensure resistance against rust and environmental exposure. This is especially important for screws used in humid areas or outdoor wooden structures, where corrosion can weaken the screw and reduce its holding capacity.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Can different sizes of head wood screws be covered under one BIS License?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, multiple sizes can be included under a single BIS License if they follow the same design, material specifications, and manufacturing process. However, all variants must meet the requirements of IS 18509:2023 to ensure consistent performance across sizes.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. What happens if wood screws fail torque or strength testing?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          If screws fail torque or tensile strength tests, it indicates poor material quality or incorrect manufacturing. The manufacturer must improve material composition or production processes and resubmit samples. Certification is granted only after the screws meet required strength and performance standards.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          7. How does BIS Certification help in furniture manufacturing?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Certified screws ensure strong and reliable fastening in furniture assemblies. They reduce the risk of loosening, breakage, or stripping during installation. This improves the durability of products like wardrobes, beds, and cabinets, ensuring long-term structural stability and customer satisfaction.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          8. Are imported wood screws required to have BIS Certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Yes, imported cross-recessed countersunk head wood screws must comply with IS 18509:2023 before being sold in India. Importers must obtain a BIS Certificate for Head Wood Screws to ensure the product meets Indian quality and performance requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          9. How does BIS Certification ensure dimensional accuracy in screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Testing verifies critical dimensions such as length, diameter, thread pitch, and head angle. Accurate dimensions ensure compatibility with tools and proper fit in wooden materials, preventing installation issues like misalignment or improper seating of the screw head.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          10. Why do construction and carpentry professionals prefer BIS-certified screws?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Professionals prefer certified screws because they offer consistent quality, reliable strength, and proper fit. This reduces installation errors and ensures long-lasting performance in wooden structures, making them a dependable choice for both small carpentry tasks and large construction projects.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

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

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/pdf/18509_2024.pdf"
            title="BIS Certification for Head Wood Screws - IS 18509:2024 PDF"
            className="w-full h-[800px] bg-white"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </div>

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
