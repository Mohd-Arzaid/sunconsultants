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

const BISCertificationforOutdoorBarbecues = () => {
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

export default BISCertificationforOutdoorBarbecues;

const MetaTags = () => {
  const title = "BIS Certificate for Outdoor Barbecues - Complete Guide";
  const ogTitle = "BIS Certificate for Outdoor Barbecues - Complete Guide";
  const twitterTitle = "BIS Certificate for Outdoor Barbecues - Complete Guide";
  const metaDescription =
    "Get BIS Certificate for Outdoor Barbecues under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Outdoor Barbecues as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Outdoor Barbecues under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Outdoor Barbecues , BIS License for Outdoor Barbecues, IS 302 (Part 1):2024 , BIS Certification for Outdoor Barbecues";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/outdoor-barbecues";
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
                    BIS Certificate for Outdoor Barbecues
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
          BIS Certification for Outdoor Barbecues – Complete Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforOutdoorBarbecues.png"
            title="BIS License for Outdoor Barbecues"
            alt="BIS Certificate for Outdoor Barbecues - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Outdoor Barbecues confirms that electrically
          operated barbecue grills and cooking appliances comply with the safety
          requirements defined under IS 302 (Part 1):2024. Certification ensures
          that electrical components, heating elements, wiring systems, and
          temperature controls used in outdoor cooking equipment operate safely
          and reliably in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor barbecues have gained significant popularity in India over the
          last decade. What was once considered a niche appliance mainly used in
          Western countries has now become common in homes, resorts, rooftop
          restaurants, cafes, and outdoor event spaces. Whether it is a weekend
          gathering in a backyard, a barbecue station at a resort, or a live
          grill counter at a restaurant, outdoor barbecue appliances play an
          important role in modern outdoor cooking experiences.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Many outdoor barbecue systems today use electric heating elements
          instead of charcoal or gas. Electric barbecues offer several
          advantages such as faster heating, controlled temperature settings,
          easy cleaning, and smoke reduction. Because of these benefits,
          electric outdoor grills are widely used in balconies, terraces,
          gardens, and camping areas.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, the use of electricity in outdoor cooking appliances
          introduces several safety challenges. Outdoor barbecue grills are
          exposed to environmental conditions such as moisture, dust, wind, and
          fluctuating temperatures. Electrical circuits operating in these
          environments must be designed carefully to prevent electrical hazards,
          overheating, and mechanical failures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, rainwater or condensation could reach electrical wiring
          if the grill housing is not properly insulated. Similarly, the heating
          elements inside the barbecue unit generate extremely high temperatures,
          which may damage electrical insulation or nearby components if not
          properly controlled.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To address these safety concerns, outdoor cooking appliances must meet
          specific electrical safety standards before entering the Indian market.
          The BIS Certification for Outdoor Barbecues ensures that these
          appliances comply with the technical safety requirements outlined under
          IS 302 (Part 1):2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS Certificate for
          Outdoor Barbecues demonstrates that the appliance has been tested for
          electrical safety, heat resistance, structural stability, and
          operational reliability. Certification also confirms that the
          manufacturing process consistently produces appliances that meet these
          safety standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This detailed guide explains the BIS Certification process for Outdoor
          Barbecues, including the applicable BIS standard, product testing
          procedures, documentation requirements, certification costs, and
          compliance obligations for companies involved in manufacturing or
          importing these appliances in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Outdoor Barbecues
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor barbecues designed with electrical heating systems function by
          converting electrical energy into heat through internal heating
          elements. These heating components are typically located beneath grill
          plates or cooking racks, allowing food to cook evenly while maintaining
          controlled temperature levels.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Although electric barbecues simplify outdoor cooking, their design
          must carefully balance several safety factors. The appliance must
          generate sufficient heat for cooking while preventing electrical
          hazards or structural damage caused by excessive temperatures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Outdoor Barbecues evaluates whether the
          appliance design safely manages these challenges. Certification focuses
          on electrical safety, temperature stability, insulation protection, and
          mechanical durability.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, heating elements inside the barbecue grill must be
          properly isolated from the appliance frame to prevent electrical
          leakage. The external metal body of the grill should also be grounded
          to ensure that users are protected in case of electrical faults.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another important aspect involves temperature regulation. Outdoor
          barbecue appliances often operate at very high temperatures for
          extended periods. The internal components must be capable of
          withstanding these conditions without degrading or posing safety risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Outdoor Barbecues confirms that the appliance has
          undergone rigorous testing to verify:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electrical insulation strength</li>
          <li>resistance to overheating</li>
          <li>durability of heating elements</li>
          <li>stability of temperature control systems</li>
          <li>protection against electrical leakage</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In addition to product testing, certification also examines
          manufacturing practices. Factories producing outdoor barbecue
          appliances must demonstrate that their production systems consistently
          manufacture products that meet safety requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Licence for Outdoor Barbecues therefore represents both
          product safety verification and quality assurance in manufacturing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For consumers and commercial users, certified barbecue appliances
          provide confidence that the product can safely operate in outdoor
          cooking environments.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Outdoor Barbecues
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The safety requirements for electrical outdoor barbecue appliances are
          defined under <strong>IS 302 (Part 1):2024</strong>, which establishes
          general safety requirements for electrical appliances.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor barbecues powered by electricity fall within this framework
          because they contain heating elements, electrical circuits, and
          temperature control systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          IS 302 (Part 1):2024 provides safety guidelines for appliances that
          operate using electricity and perform heating or mechanical functions.
          The standard addresses hazards that may arise during normal appliance
          operation or foreseeable misuse. Outdoor barbecue appliances fall
          within this scope because they generate high temperatures through
          electrical heating systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to appliances that include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric heating elements</li>
          <li>temperature regulating components</li>
          <li>electrical wiring and insulation</li>
          <li>protective enclosures</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Electric barbecue grills incorporating these components must comply
          with the safety provisions defined in the standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The objectives of the standard include:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>preventing electric shock during appliance use</li>
          <li>controlling excessive temperature rise</li>
          <li>ensuring safe electrical insulation</li>
          <li>protecting users from contact with live electrical parts</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These objectives are particularly important for appliances used
          outdoors.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard evaluates several aspects of appliance construction,
          including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>insulation resistance</li>
          <li>heat resistance of materials</li>
          <li>durability of electrical connections</li>
          <li>protection against moisture ingress</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These design principles help ensure that outdoor barbecues operate
          safely even in challenging environmental conditions.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Outdoor Barbecues
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor cooking appliances that use electricity must handle extreme
          temperatures while operating safely in open environments. Without
          proper safety controls, these appliances may pose serious hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          One major concern is excessive heat buildup. Electric barbecue grills
          generate intense heat to cook food. If the temperature control system
          fails, the appliance could overheat and damage surrounding components.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another risk is moisture exposure. Outdoor appliances may be exposed
          to rain, humidity, or accidental water spills. Electrical circuits
          inside the barbecue grill must be protected against moisture ingress.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Electrical leakage is also a concern. Since many barbecue grills have
          metal frames, improper insulation could allow electrical current to
          pass through the outer surface.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Outdoor Barbecues addresses these issues by
          verifying that the appliance design includes protective mechanisms
          against overheating, electrical leakage, and structural failure.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          From a regulatory standpoint, certification ensures that electrical
          cooking appliances sold in India meet recognized safety requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS License for Outdoor
          Barbecues demonstrates compliance with these safety requirements and
          strengthens consumer confidence.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Outdoor Barbecues
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability &amp; Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process begins with determining whether the product
          falls under IS 302 (Part 1):2024. Manufacturers evaluate the
          appliance&apos;s electrical design and heating mechanism to confirm
          applicability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers submit their application through the BIS online portal.
          The application includes product specifications, company information,
          and supporting documents.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for Outdoor Barbecues typically includes:
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For a deeper understanding of the BIS framework, you can <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process</a> of BIS certification in India.
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application fee</li>
          <li>product testing charges</li>
          <li>factory inspection costs</li>
          <li>license fees</li>
          <li>marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Outdoor Barbecues may vary depending
          on product models and testing requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Product samples are tested in BIS recognized laboratories to verify
          electrical safety and heating performance.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection &amp; Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials may inspect the manufacturing facility to evaluate
          production processes and quality control systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once the appliance successfully meets safety requirements, BIS grants
          the BIS Licence for Outdoor Barbecues, allowing the product to carry
          the ISI mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must maintain product quality after certification. BIS
          may conduct surveillance inspections and sample testing.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Outdoor Barbecues requires several
          types of documentation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          These documents confirm the identity and operational status of the
          manufacturing facility. Examples include factory licenses and
          manufacturing registration certificates.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Legal documents establish company ownership and authorization.
          Examples include incorporation certificates and authorized signatory
          details.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Technical documentation explains the design and functionality of the
          appliance. Examples include electrical circuit diagrams, heating
          element specifications, and product drawings.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These include the BIS application form, quality control plans, and
          test reports. Preparing accurate bis certification documents for
          Outdoor Barbecues helps avoid delays in the certification process.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor barbecue appliances must undergo several tests before
          certification. Testing must be conducted in BIS recognized
          laboratories.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Electrical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests evaluate insulation resistance, leakage current levels,
          and grounding protection.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Performance testing verifies that the appliance generates heat
          effectively while maintaining safe temperature limits.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durability testing evaluates the appliance&apos;s ability to withstand
          repeated heating cycles.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality verification ensures that appliance components meet required
          manufacturing standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Outdoor barbecue appliances provide a convenient way to cook food in
          open environments, but their electrical heating systems must be
          designed carefully to ensure safe operation. These appliances generate
          high temperatures and operate outdoors where environmental conditions
          may vary.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Outdoor Barbecues ensures that these
          appliances comply with the safety requirements defined under IS 302
          (Part 1):2024. Through product testing, factory inspections, and
          regulatory evaluation, certification confirms that the appliance
          operates safely without electrical hazards or overheating risks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, obtaining a BIS
          Certificate for Outdoor Barbecues is essential for regulatory
          compliance and market access. A valid BIS License for Outdoor
          Barbecues not only fulfills legal obligations but also enhances product
          credibility and consumer trust in the competitive outdoor cooking
          appliance market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Outdoor Barbecues
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is BIS Certification for Outdoor Barbecues?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is a certification confirming that outdoor barbecue appliances
              comply with safety requirements defined under IS 302 (Part
              1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for outdoor barbecues?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, electrically powered barbecue appliances must comply with
              applicable safety standards before being sold in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the bis certification process for Outdoor Barbecues?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process includes application submission, product testing,
              factory inspection, and license approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What is the bis certificate cost for Outdoor Barbecues?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The cost depends on testing charges, application fees, and
              inspection expenses.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How long does certification take?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process may take several weeks to a few months depending on
              testing and documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What documents are required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers must submit company documents, product
              specifications, and technical details.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Where are barbecue appliances tested?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing is conducted in BIS recognized laboratories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Is factory inspection required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS may inspect the manufacturing facility.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Can foreign manufacturers apply?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, overseas manufacturers exporting barbecue appliances to India
              must obtain certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What is the bis license cost for Outdoor Barbecues?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs vary depending on product models and testing requirements.
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
