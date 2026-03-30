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

const BISCertificationforClothesDryers = () => {
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

export default BISCertificationforClothesDryers;

const MetaTags = () => {
  const title =
    "BIS Certificate for Clothes Dryers - Process, Cost, Documents";
  const ogTitle =
    "BIS Certificate for Clothes Dryers - Process, Cost, Documents";
  const twitterTitle =
    "BIS Certificate for Clothes Dryers - Process, Cost, Documents";
  const metaDescription =
    "Get BIS Certificate for Clothes Dryers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Clothes Dryers as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Clothes Dryers under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Clothes Dryers, BIS License for Clothes Dryers, IS 302 (Part 1):2024, BIS Certification for Clothes Dryers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/clothes-dryers";
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
                    BIS Certification for Clothes Dryers
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
          BIS Certification for Clothes Dryers – Complete Guide
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicensefor%20lothesDryers.png"
            title="BIS License for Clothes Dryers"
            alt="BIS Certification and ISI Mark for Clothes Dryers in India - Safety and Compliance Guide"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Clothes Dryers ensures that electric drying
          appliances meet safety and performance requirements defined under IS
          302 (Part 1):2024. This certification is essential in India to prevent
          electrical hazards, overheating risks, and mechanical failures,
          ensuring safe usage for consumers and regulatory approval for
          manufacturers and importers.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          Clothes dryers have become an essential appliance in modern
          households, laundromats, hotels, and commercial laundry facilities.
          With increasing urbanization and limited drying space, the demand for
          efficient and fast drying solutions is rising rapidly across India.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          However, clothes dryers operate using high electrical loads, heating
          elements, rotating drums, and ventilation systems, making them
          inherently sensitive appliances from a safety perspective. Risks such
          as overheating, electrical short circuits, fire hazards, and improper
          insulation make regulatory compliance critical.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          To address these concerns, Indian regulations require that clothes
          dryers meet specific safety benchmarks under IS 302 (Part 1):2024,
          ensuring that every unit entering the market performs reliably under
          Indian operating conditions.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and sellers, obtaining a BIS Certificate
          for Clothes Dryers is not just a regulatory formality—it is a
          structured process that validates product design, testing, and
          production quality before market entry.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Clothes Dryers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          When it comes to appliances like clothes dryers, certification is not
          just about ticking regulatory boxes—it directly relates to real-world
          safety and performance scenarios.
        </p>
        <p className="text-gray-600 text-base font-geist mb-2">
          A clothes dryer works by circulating heated air through rotating
          clothes. If not properly designed or tested, several issues can
          arise:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Internal wiring may overheat under continuous load</li>
          <li>Heating elements may fail or cause thermal imbalance</li>
          <li>Moisture exposure can increase shock risks</li>
          <li>Poor insulation can lead to electrical leakage</li>
          <li>Mechanical parts may fail under repeated cycles</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS Certification for Clothes Dryers addresses these concerns by
          ensuring:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The appliance can handle prolonged heating cycles safely</li>
          <li>Electrical components are insulated and protected</li>
          <li>The design prevents accidental contact with live parts</li>
          <li>Materials used can withstand high temperatures</li>
          <li>Safety mechanisms like thermal cut-offs function correctly</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          In simple terms, the certification ensures that a clothes dryer
          performs safely not just in ideal conditions, but in everyday Indian
          usage scenarios, including voltage fluctuations, humidity, and
          extended usage.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Clothes Dryers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for this product category is:
        </p>
        <p className="text-gray-600 text-base font-geist font-semibold mb-4">
          IS 302 (Part 1):2024
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          This standard forms the foundation for evaluating electrical safety
          requirements of household and similar electrical appliances, including
          clothes dryers.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The standard applies to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrically operated clothes dryers</li>
          <li>Domestic and commercial drying machines</li>
          <li>Appliances operating on single-phase or three-phase supply</li>
          <li>Products intended for indoor use</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What the Standard Covers
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          IS 302 (Part 1):2024 focuses on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical insulation and protection</li>
          <li>Heating element safety</li>
          <li>Mechanical stability</li>
          <li>Resistance to heat and fire</li>
          <li>Protection against electric shock</li>
          <li>Performance under abnormal conditions</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Clothes Dryers
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Clothes dryers may appear simple, but they combine electric heating,
          airflow systems, and moving parts, which introduces multiple risk
          factors.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          1. Electrical Safety Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Improper wiring or insulation can lead to:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shocks</li>
          <li>Short circuits</li>
          <li>Appliance failure</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          2. Fire Hazards
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Lint accumulation combined with heating elements can cause:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Internal overheating</li>
          <li>Fire outbreaks</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          3. Mechanical Risks
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Rotating drums and motors may:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Malfunction</li>
          <li>Cause vibration or structural damage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          4. Consumer Protection
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Certification ensures:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Safe usage in homes</li>
          <li>Reliable performance over time</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          5. Legal Market Access
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Without a BIS Licence for Clothes Dryers, products may:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Be restricted from sale</li>
          <li>Face regulatory action</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          6. Brand Trust
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          A BIS-certified product signals:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Compliance with Indian standards</li>
          <li>Commitment to safety</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Clothes Dryers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The first step is identifying whether your clothes dryer falls under
          IS 302 (Part 1):2024. This includes understanding:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product type</li>
          <li>Voltage rating</li>
          <li>Intended use</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Manufacturers must submit an application with:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product details</li>
          <li>Manufacturing unit information</li>
          <li>Technical specifications</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          The BIS certification cost for Clothes Dryers includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application fees</li>
          <li>Testing charges</li>
          <li>Inspection fees</li>
          <li>Annual license fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Clothes Dryers varies depending on
          product complexity and testing requirements.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          Samples are tested in BIS recognized laboratories to verify:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electrical safety</li>
          <li>Thermal performance</li>
          <li>Mechanical durability</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-2">
          BIS officials assess:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing processes</li>
          <li>Quality control systems</li>
          <li>Testing facilities</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After successful evaluation, a BIS License for Clothes Dryers is
          issued, allowing the manufacturer to use the ISI mark.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Factory registration</li>
          <li>Manufacturing details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Business license</li>
          <li>Authorization letters</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product specifications</li>
          <li>Circuit diagrams</li>
          <li>Design details</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application forms</li>
          <li>Test reports</li>
          <li>Undertakings</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          These BIS certification documents for Clothes Dryers must be accurate
          and complete.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          Testing ensures that clothes dryers perform safely under real
          conditions.
        </p>
        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Safety Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Electric shock protection</li>
          <li>Insulation resistance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Performance Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heating efficiency</li>
          <li>Drying consistency</li>
        </ul>
        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Durability Tests
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Continuous operation cycles</li>
          <li>Mechanical endurance</li>
        </ul>
        <p className="text-gray-600 text-base font-geist font-semibold mb-2">
          Quality Verification
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Material resistance</li>
          <li>Fire safety</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          All tests must be conducted in BIS-approved laboratories.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>
        <p className="text-gray-600 text-base font-geist mb-4">
          The growing demand for clothes dryers in India makes safety compliance
          more important than ever. Obtaining a BIS Certification for Clothes
          Dryers under IS 302 (Part 1):2024 ensures that products meet strict
          safety and performance standards.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, securing a BIS License for Clothes
          Dryers is essential not only for regulatory compliance but also for
          building long-term trust in the Indian market.
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          If you are planning to enter or expand in this segment, now is the
          right time to initiate your BIS Certification process for Clothes Dryers
          and stay ahead in compliance and credibility.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Clothes Dryers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why are clothes dryers considered high-risk appliances under BIS
              certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Clothes dryers combine heating elements, rotating drums, and
              airflow systems, which makes them more complex than standard
              appliances. During operation, they generate continuous heat and
              handle moisture simultaneously. If insulation fails or airflow is
              blocked (for example due to lint accumulation), it can lead to
              overheating or even fire.
            </p>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS Certification for Clothes Dryers ensures that such risks
              are minimized by testing the appliance under extreme and abnormal
              conditions, not just normal usage.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. How does IS 302 (Part 1):2024 specifically apply to clothes
              dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              IS 302 (Part 1):2024 evaluates the electrical and thermal safety
              framework of appliances like clothes dryers. For this product, the
              standard checks:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Whether heating elements maintain controlled temperatures</li>
              <li>If the outer body remains safe to touch</li>
              <li>Protection against electric shock in humid conditions</li>
              <li>Stability during drum rotation</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              This ensures that even during long drying cycles, the appliance
              remains safe.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What types of clothes dryers require a BIS Certificate in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The requirement applies to:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Domestic tumble dryers</li>
              <li>
                Washer-dryer combo units (if drying function is included)
              </li>
              <li>Industrial or commercial dryers</li>
              <li>Wall-mounted or portable dryers</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Any electrically operated clothes drying equipment intended for
              Indian consumers must obtain a BIS Certificate for Clothes Dryers
              before sale.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Does a washer-dryer combo need separate BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              No separate certification is required if the product is a combined
              unit, but the drying function must be tested as per IS 302 (Part
              1):2024.
            </p>
            <p className="text-gray-600 text-base font-geist mb-2">
              This means the product will be evaluated not only as a washing
              machine but also as a clothes dryer, especially for heating safety,
              moisture exposure, and electrical insulation.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. What are the most common failures during BIS testing for clothes
              dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Many manufacturers face failures due to:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Excessive surface temperature</li>
              <li>Poor insulation in moist environments</li>
              <li>Overheating of internal wiring</li>
              <li>Inefficient thermal cut-off systems</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              To avoid rejection, it is recommended to conduct pre-compliance
              testing before applying for BIS certification.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. How does BIS testing simulate real usage of clothes dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Testing is not limited to lab conditions—it replicates real-life
              usage such as:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Continuous drying cycles</li>
              <li>Overloading the drum</li>
              <li>Blocked airflow scenarios</li>
              <li>Voltage fluctuations</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              This ensures that the BIS Licence for Clothes Dryers is granted only
              to products that perform safely under actual Indian household
              conditions.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. What safety features must be present in BIS-certified clothes
              dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              To meet BIS requirements, clothes dryers typically include:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Thermal cut-off protection</li>
              <li>Overload protection</li>
              <li>Insulated wiring</li>
              <li>Grounding (earthing) system</li>
              <li>Fire-resistant materials</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              These features are evaluated during the BIS certification process
              for Clothes Dryers.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. Is BIS certification required for imported clothes dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, imported products must also comply. Foreign manufacturers
              must:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Appoint an Authorized Indian Representative (AIR)</li>
              <li>Apply for BIS registration</li>
              <li>Ensure product testing in BIS-recognized labs</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              Without a BIS License for Clothes Dryers, imported units cannot be
              legally sold in India.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. How does BIS certification impact product design for clothes
              dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers often need to modify designs to meet BIS
              requirements, such as:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Improving insulation materials</li>
              <li>Adding safety cut-off devices</li>
              <li>Redesigning airflow systems</li>
              <li>Enhancing electrical protection</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              This makes the product safer and more reliable in long-term use.
            </p>
          </div>

          <div className="h-px w-full bg-gray-300 my-4"></div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What is the typical BIS certification cost for Clothes Dryers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The BIS certification cost for Clothes Dryers depends on:
            </p>
            <ul className="list-disc ml-6 mb-2 space-y-2 text-gray-600 text-base font-geist">
              <li>Product type and complexity</li>
              <li>Number of models</li>
              <li>Testing requirements</li>
              <li>Factory inspection charges</li>
            </ul>
            <p className="text-gray-600 text-base font-geist mb-2">
              On average, the cost of BIS certification for Clothes Dryers
              includes testing fees, application fees, and annual license
              charges.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={10} />
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
