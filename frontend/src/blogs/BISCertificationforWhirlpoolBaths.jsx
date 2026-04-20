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

const BISCertificationforWhirlpoolBaths = () => {
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

export default BISCertificationforWhirlpoolBaths;

const MetaTags = () => {
  const title = "BIS Certificate for Whirlpool Baths & Whirlpool Spas";
  const ogTitle = "BIS Certificate for Whirlpool Baths & Whirlpool Spas";
  const twitterTitle = "BIS Certificate for Whirlpool Baths & Whirlpool Spas";
  const metaDescription =
    "Get BIS Certificate for Whirlpool Baths & Whirlpool Spas under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Whirlpool Baths & Whirlpool Spas as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Whirlpool Baths & Whirlpool Spas under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Whirlpool Baths & Whirlpool Spas, BIS License for Whirlpool Baths & Whirlpool Spas, IS 302 (Part 1):2024, BIS Certification for Whirlpool Baths & Whirlpool Spas";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/whirlpool-baths-and-whirlpool-spas";
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
                    BIS Certificate for Whirlpool Baths &amp; Whirlpool Spas
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
          BIS Certification for Whirlpool Baths and Whirlpool Spas
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforWhirlpoolBaths&WhirlpoolSpas.png"
            title="BIS License for Whirlpool Baths & Whirlpool Spas"
            alt="BIS Certificate for Whirlpool Baths & Whirlpool Spas - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Whirlpool Baths and Whirlpool Spas ensures that
          electrically powered hydrotherapy bathing systems comply with the
          electrical safety requirements defined in IS 302 (Part 1):2024.
          Certification verifies that these spa systems, which combine water
          circulation pumps, heaters, and electrical controls, operate safely in
          wet environments across India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool baths and whirlpool spas are widely used in wellness
          centers, luxury hotels, fitness facilities, medical therapy clinics,
          and premium residential bathrooms. These systems create therapeutic
          water circulation through jets that massage the body, offering
          relaxation, muscle recovery, and hydrotherapy benefits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Unlike standard bathtubs, whirlpool systems rely on multiple
          electrically powered components such as pumps, heaters, air blowers,
          electronic controllers, and lighting systems. Water is drawn into the
          system through intake ports, circulated through pumps, and forced back
          into the tub through jets to create a massaging effect.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because these appliances operate with electricity in direct proximity
          to water, safety becomes a critical concern. Electrical pumps and
          heating systems must operate reliably while being fully insulated from
          the water used by the bather.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If poorly designed, whirlpool systems can create several safety
          hazards:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electrical leakage into water</li>
          <li>overheating of pump motors</li>
          <li>insulation breakdown due to moisture exposure</li>
          <li>electrical faults in control panels</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These risks are particularly significant because users are immersed
          in water during operation. To ensure safe operation of such systems,
          electrical safety compliance becomes essential. The BIS Certification
          for Whirlpool Baths and Whirlpool Spas ensures that these appliances
          comply with the safety requirements defined under IS 302 (Part
          1):2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS Certificate for
          Whirlpool Baths and Whirlpool Spas confirms that the product has been
          tested for electrical safety, insulation reliability, operational
          stability, and durability. Certification also demonstrates that the
          manufacturing process maintains consistent product quality.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains the BIS Certification process for
          Whirlpool Baths and Whirlpool Spas, including applicable standards,
          testing requirements, documentation procedures, certification costs,
          and regulatory compliance responsibilities for businesses supplying
          these systems in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Whirlpool Baths and Whirlpool Spas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool baths and spas are hydrotherapy systems that combine
          plumbing, electrical components, and mechanical circulation equipment.
          Their primary function is to circulate water through high-pressure
          jets to create a relaxing massage effect.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          A typical whirlpool system includes several integrated components:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric water circulation pumps</li>
          <li>heating systems to maintain water temperature</li>
          <li>air blowers that enhance jet pressure</li>
          <li>electronic control panels</li>
          <li>electrical wiring and insulation systems</li>
          <li>water intake and jet outlet assemblies</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because these components operate simultaneously in a water-filled
          environment, the design must ensure complete electrical safety. The
          BIS Certification for Whirlpool Baths and Whirlpool Spas evaluates
          whether the system can safely perform its functions without exposing
          users to electrical hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          For example, pumps used to circulate water must be electrically
          isolated from the tub’s water supply. Similarly, heaters that
          maintain water temperature must operate within safe temperature
          limits to prevent overheating.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Whirlpool Baths and Whirlpool Spas confirms that the
          appliance has undergone testing to verify critical safety parameters,
          including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>insulation resistance between electrical components and water</li>
          <li>protection against electrical leakage in wet environments</li>
          <li>durability of motors and pumps during prolonged operation</li>
          <li>safe operation of electronic control systems</li>
          <li>resistance of structural materials to moisture and heat</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another important aspect of certification is evaluating the
          manufacturer’s quality control processes. The product tested in a
          laboratory must be identical to the units produced during large-scale
          manufacturing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Therefore, the BIS Licence for Whirlpool Baths and Whirlpool Spas
          includes inspection of manufacturing facilities, production
          procedures, and quality assurance systems.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For hotels, wellness centers, and residential users, certified
          whirlpool systems provide assurance that the equipment can operate
          safely in a water-based environment.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Whirlpool Baths and Whirlpool Spas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The safety requirements governing these appliances are defined under{" "}
          <strong>IS 302 (Part 1):2024</strong>, which establishes general safety
          requirements for electrical appliances.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool systems fall within this framework because they use
          electrical components such as pumps, heaters, and control circuits.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1):2024 outlines safety requirements for appliances that
          operate using electricity and produce heating or mechanical functions.
          The standard focuses on preventing hazards related to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electrical shock</li>
          <li>overheating of internal components</li>
          <li>insulation failure</li>
          <li>mechanical failure</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool baths and spas fall within this scope because they
          incorporate electric motors and heating systems in wet environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard applies to appliances containing:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric pumps and motors</li>
          <li>heating elements</li>
          <li>electronic control systems</li>
          <li>electrical wiring and insulation</li>
          <li>protective housings</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool baths and spa systems incorporating these components must
          comply with the safety provisions defined in the standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard aims to ensure that appliances:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>prevent electrical shock during operation</li>
          <li>maintain safe temperature limits in heating systems</li>
          <li>ensure reliable insulation between electrical parts and water</li>
          <li>protect users from accidental contact with live components</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These objectives are especially important for appliances used while
          the user is immersed in water.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The standard evaluates multiple aspects of system design, including:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>insulation resistance</li>
          <li>moisture protection</li>
          <li>durability of electrical connections</li>
          <li>structural stability of the appliance housing</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These design principles ensure safe operation of whirlpool bathing
          systems.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Whirlpool Baths and Whirlpool
          Spas
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool systems present unique safety challenges because they
          combine electricity and water in the same environment.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          One major risk is electrical leakage. If insulation fails and
          electrical current enters the water, users may be exposed to
          dangerous electrical shock.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another concern is pump motor overheating. Circulation pumps must
          operate continuously to maintain jet pressure. If these motors
          overheat, the system may malfunction or become unsafe.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          There is also the possibility of moisture infiltration into
          electrical control units. Since whirlpool systems operate in humid
          environments, proper sealing and insulation are essential.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Whirlpool Baths and Whirlpool Spas ensures
          that these risks are addressed through proper design and testing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          From a regulatory standpoint, certification helps ensure that
          whirlpool systems entering the Indian market comply with recognized
          safety standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and suppliers, obtaining a BIS License for
          Whirlpool Baths and Whirlpool Spas demonstrates compliance with these
          safety requirements and enhances market credibility.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Whirlpool Baths and
          Whirlpool Spas
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability &amp; Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process begins by confirming that the product falls
          under IS 302 (Part 1):2024 based on its electrical and mechanical
          design.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers submit the certification application through the BIS
          online portal with product specifications and company information.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for Whirlpool Baths and Whirlpool Spas
          generally includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application fees</li>
          <li>laboratory testing charges</li>
          <li>inspection costs</li>
          <li>license fees</li>
          <li>marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Whirlpool Baths and Whirlpool Spas
          may vary depending on system complexity and testing requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Product samples are tested in BIS recognized laboratories to verify
          electrical safety and operational reliability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection &amp; Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials may inspect the manufacturing facility to verify
          production processes and quality control systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once the product meets safety requirements, BIS grants the BIS Licence
          for Whirlpool Baths and Whirlpool Spas, allowing the product to carry
          the ISI mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must maintain product quality and comply with periodic
          inspections or random product testing.
        </p>

        <p className="text-gray-600 text-base font-geist mt-4 mb-4">
          <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process etc.</a>
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Whirlpool Baths and Whirlpool Spas
          requires submission of several documents.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          These documents confirm the identity and operational status of the
          manufacturing facility. Examples include factory registration
          certificates and manufacturing licenses.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Legal records establish company ownership and authorization. Examples
          include company incorporation certificates and authorized signatory
          letters.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Technical documentation explains the design and functionality of the
          system. Examples include electrical circuit diagrams, pump
          specifications, and product drawings.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These include the BIS application form, quality control plans, and
          laboratory test reports. Preparing accurate bis certification documents
          for Whirlpool Baths and Whirlpool Spas helps avoid delays during
          certification.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool systems must undergo several safety tests before
          certification. Testing must be conducted in BIS recognized
          laboratories.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Electrical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests verify insulation resistance, leakage current levels, and
          grounding protection.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Performance testing evaluates pump operation and water circulation
          systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durability testing evaluates the system’s ability to operate
          continuously in wet environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality verification ensures that components meet required
          manufacturing standards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whirlpool baths and whirlpool spas combine hydrotherapy systems with
          electrical components such as pumps, heaters, and control panels.
          Because these appliances operate in water-filled environments, their
          design must meet strict electrical safety standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Whirlpool Baths and Whirlpool Spas ensures
          that these systems comply with the safety requirements defined under
          IS 302 (Part 1):2024. Through laboratory testing, factory inspections,
          and regulatory evaluation, certification confirms that the equipment
          operates safely without electrical hazards or operational failures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, obtaining a BIS
          Certificate for Whirlpool Baths and Whirlpool Spas is essential for
          regulatory compliance and market access. A valid BIS License for
          Whirlpool Baths and Whirlpool Spas not only fulfills legal obligations
          but also strengthens product credibility and builds trust among
          consumers and hospitality businesses in India.
        </p>

        <div className="h-px w-full bg-gray-300 my-6" />

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Whirlpool Baths and Whirlpool Spas
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is BIS Certification for Whirlpool Baths and Whirlpool
              Spas?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is a certification confirming that whirlpool bathing systems
              comply with electrical safety requirements under IS 302 (Part
              1):2024.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for whirlpool systems?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, electrically powered bathing systems must comply with
              applicable safety standards before being sold in India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the bis certification process for Whirlpool Baths and
              Whirlpool Spas?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process includes application submission, product testing,
              factory inspection, and license approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What is the bis certificate cost for Whirlpool Baths and
              Whirlpool Spas?
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
              testing and documentation readiness.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What documents are required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers must submit company documents, technical
              specifications, and application forms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Where are whirlpool systems tested?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing must be conducted in BIS recognized laboratories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Is factory inspection required?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS may inspect the manufacturing facility before granting
              certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Can foreign manufacturers apply?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, overseas manufacturers exporting whirlpool systems to India
              must obtain certification.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What is the bis license cost for Whirlpool Baths and Whirlpool
              Spas?
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
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for foreign manufacturers</a>
          </li>
          <li>
            <a href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis" className="text-blue-600 hover:underline">Get details about BIS certification for Indian manufacturers</a>
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
