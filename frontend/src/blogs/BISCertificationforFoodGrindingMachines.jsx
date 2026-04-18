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

const BISCertificateforFoodGrindingMachines = () => {    
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

export default BISCertificateforFoodGrindingMachines;

const MetaTags = () => {
  const title =
    "BIS Certificate for Food Grinding Machines - Process, Cost, Documentation";
  const ogTitle =
    "BIS Certificate for Food Grinding Machines - Process, Cost, Documentation";
  const twitterTitle =
    "BIS Certificate for Food Grinding Machines - Process, Cost, Documentation";
  const metaDescription =
    "Get BIS Certificate for Food Grinding Machines under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Food Grinding Machines as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Food Grinding Machines under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Food Grinding Machines, BIS License for Food Grinding Machines, IS 302 (Part 1):2024, BIS Certification for Food Grinding Machines";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/food-grinding-machines";
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
                    BIS Certification for Food Grinding Machines – Complete Guide
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
          BIS Certification for Food Grinding Machines - Complete Guide
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFoodGrindingMachines.webp"
            title="BIS License for Food Grinding Machines"
            alt="BIS Certificate for Food Grinding Machines - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS certification for Food Grinding Machines confirms that these electrically operated kitchen appliances comply with IS 302 (Part 1):2024 safety requirements. It ensures protection against electrical hazards, overheating, and mechanical risks, making grinders safe for continuous use in Indian households, commercial kitchens, and food processing environments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Food grinding machines have become an essential part of modern kitchens and food processing setups across India. From domestic mixer grinders used for preparing chutneys and spices to heavy-duty commercial grinders used in restaurants and food industries, these machines play a critical role in food preparation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          These appliances operate using high-speed motors, rotating blades, and electrical systems that generate mechanical force to grind, mix, or pulverize food materials. While this functionality enhances efficiency, it also introduces significant safety concerns. Improper insulation, overheating motors, loose wiring, or unstable components can lead to electrical shock, fire hazards, or mechanical injuries.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Additionally, food grinding machines often operate under heavy loads and for extended durations. In commercial environments, they may run continuously, increasing the risk of wear and tear on electrical and mechanical components. This makes standardized safety evaluation essential.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure that such appliances function safely within Indian conditions, compliance with IS 302 (Part 1):2024 is required. This standard defines safety benchmarks for electrical appliances, including grinders used in food preparation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Food Grinding Machines demonstrates that the product has undergone rigorous evaluation for electrical safety, structural stability, and operational reliability. It assures that the grinder can handle real-world usage scenarios without compromising user safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, securing a BIS License for Food Grinding Machines is a crucial step toward entering the Indian market. It not only fulfills regulatory expectations but also strengthens product credibility among consumers and commercial buyers.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Food Grinding Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Food grinding machines are unique because they combine electrical power with mechanical force. Unlike simple electrical appliances, grinders involve rotating blades or grinding stones that operate at high speeds. This combination creates multiple layers of risk that must be addressed during product design and manufacturing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Food Grinding Machines evaluates how safely these machines can perform their intended function-grinding food-without exposing users to hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, when a mixer grinder processes hard ingredients like spices or grains, the motor experiences high torque. If the internal wiring or insulation is not designed properly, this can lead to overheating or electrical failure. Similarly, if the outer body is not adequately insulated, users may face electric shock when touching the appliance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Certification focuses on ensuring:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electrical insulation remains intact during operation</li>
          <li>motors operate within safe temperature limits</li>
          <li>rotating components are securely enclosed</li>
          <li>appliances remain stable during high-speed operation</li>
          <li>internal wiring is protected from mechanical stress</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate for Food Grinding Machines confirms that these safety parameters have been verified through standardized testing.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another important aspect is consistency. A grinder that passes testing must be produced in the same manner during mass production. Certification ensures that manufacturing processes maintain uniform quality across all units.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Food Grinding Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable standard for these appliances is IS 302 (Part 1):2024, which provides safety requirements for electrical appliances used in households and similar environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          This standard applies to appliances that operate on electricity and are used for domestic or similar purposes. Food grinding machines fall within this category because they are commonly used in kitchens for food preparation.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">The standard addresses safety aspects such as:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>protection against electric shock</li>
          <li>safe operation under load conditions</li>
          <li>resistance to heat and moisture</li>
          <li>mechanical stability during operation</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">Within the scope of food grinding machines, the standard includes:</p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>mixer grinders</li>
          <li>wet grinders</li>
          <li>food processors with grinding functionality</li>
          <li>commercial grinding appliances</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These products must comply with general electrical safety requirements outlined in the standard.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>operate safely without exposing users to electrical risks</li>
          <li>maintain structural integrity during grinding operations</li>
          <li>prevent overheating of motors and electrical components</li>
          <li>function reliably under repeated usage</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must design grinders with proper insulation, durable materials, and protective enclosures. Testing verifies these features under controlled conditions to ensure compliance.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Meeting these requirements is essential for obtaining a BIS Licence for Food Grinding Machines.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Food Grinding Machines
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must first confirm that their grinder falls under IS 302 (Part 1):2024. This involves evaluating product features such as motor capacity, electrical components, and intended usage.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Applicants submit detailed information about the product, including specifications, manufacturing details, and technical data.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certification cost for Food Grinding Machines depends on:
        </p>
        <p className="text-gray-600 text-base font-geist mb-4">
          For a deeper understanding of the BIS framework, you can <a href="https://bis-certifications.com/what-is-bis-certificate-indian-bis" className="text-blue-600 hover:underline">Check complete details about documentation, cost, and process</a> of BIS certification in India.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>product complexity</li>
          <li>number of variants</li>
          <li>testing requirements</li>
          <li>inspection fees</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of bis certification for Food Grinding Machines varies based on these factors.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Samples are tested in BIS recognized laboratories to evaluate electrical safety, motor performance, and structural stability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Quality Audit
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Inspectors assess manufacturing processes to ensure consistent quality across production.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          After successful evaluation, the manufacturer receives the BIS License for Food Grinding Machines, allowing use of the ISI mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must maintain quality standards and undergo periodic audits to retain certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Food grinding machines are powerful appliances that combine electrical systems with mechanical force to process food efficiently. However, this combination also introduces safety risks that must be carefully managed.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certification for Food Grinding Machines under IS 302 (Part 1):2024 ensures that these appliances meet essential safety requirements. A valid BIS License for Food Grinding Machines allows manufacturers and importers to confidently introduce their products into the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          By following the proper bis certification process for Food Grinding Machines, preparing accurate documentation, and ensuring successful testing, businesses can secure a BIS Certificate for Food Grinding Machines and build a strong, compliant presence in the industry.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Food Grinding Machines
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. Why is BIS Certification for Food Grinding Machines important for high-speed motor appliances?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Food grinding machines operate using high-speed motors that generate significant torque to crush, grind, and mix food materials like spices, grains, and pulses. During operation, the motor experiences load fluctuations, which can lead to overheating or electrical stress if not properly designed. BIS certification ensures that the motor winding, insulation, and thermal protection systems are capable of handling such stress safely. It also verifies that the outer body remains electrically safe even during prolonged use. This is especially critical in Indian kitchens where grinders are used frequently, often for heavy-duty applications like wet grinding or spice blending.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. How does BIS Certification address blade and mechanical safety in food grinding machines?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Food grinding machines use sharp blades or grinding stones that rotate at high speeds. If these components are not securely fitted or properly enclosed, they can pose serious injury risks. BIS certification evaluates the structural integrity of blade assemblies, locking mechanisms of jars, and stability of the machine during operation. It ensures that the appliance does not operate unless properly assembled and that protective covers prevent accidental contact with moving parts. For example, a mixer grinder must not start if the jar is not correctly locked. This reduces the risk of accidents in both domestic and commercial environments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What electrical risks are evaluated during BIS Certification for Food Grinding Machines?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The certification process focuses on risks such as electrical leakage, insulation failure, short circuits, and overheating. Food grinding machines often operate in kitchens where moisture and spills are common. BIS testing ensures that internal wiring remains insulated even if the appliance is exposed to humidity or minor liquid splashes. It also checks leakage current limits to prevent electric shock when users touch the appliance body. Additionally, protection against voltage fluctuations is considered, as Indian power supply conditions can vary. These evaluations ensure that the grinder remains safe even under demanding electrical conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. Does BIS Certification cover wet grinders differently from dry grinders?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, wet grinders are subjected to stricter evaluation because they operate with water and semi-liquid food materials. The presence of water increases the risk of electrical faults if the design does not include proper sealing and insulation. BIS certification ensures that wet grinders have adequate protection against water ingress into electrical components. It also verifies that the motor housing is sealed and that wiring is protected from moisture exposure. In contrast, dry grinders are evaluated more for dust resistance and heat generation. Both types must meet IS 302 (Part 1):2024, but testing emphasis varies based on usage conditions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              5. How does BIS Certification ensure durability of food grinding machines under continuous use?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              In many Indian households and commercial kitchens, food grinding machines are used repeatedly throughout the day. BIS certification includes durability testing to simulate long-term usage conditions. The appliance is operated continuously to evaluate motor endurance, heat buildup, and component wear. This ensures that the grinder can handle repeated grinding cycles without failure. For example, a commercial grinder used in a restaurant must operate for extended hours without overheating. Certification verifies that the machine maintains consistent performance and safety over time, reducing the risk of breakdowns and enhancing product reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              6. What role does BIS Certification play in preventing overheating in food grinding machines?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Overheating is a common issue in grinders due to continuous motor operation under load. BIS certification ensures that appliances are equipped with thermal protection systems such as overload protectors or automatic cut-off mechanisms. Testing evaluates how the machine behaves when subjected to heavy grinding tasks, such as processing hard spices or thick batters. The appliance must maintain temperature within safe limits and shut down automatically if overheating occurs. This prevents damage to internal components and reduces fire risks. Proper heat dissipation design is also evaluated, ensuring safe operation even during prolonged usage.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              7. Are commercial food grinding machines also required to have BIS Certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, commercial grinders used in restaurants, hotels, and food processing units must also comply with BIS requirements if they fall under the applicable category. These machines often have higher capacity and operate for longer durations compared to domestic appliances. Certification ensures that they are designed to handle heavy workloads without compromising safety. For example, a commercial wet grinder used for batter preparation must maintain insulation integrity and motor stability even under continuous operation. BIS certification helps ensure that such machines are safe for operators and suitable for high-demand environments.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              8. How does BIS Certification address vibration and stability in food grinding machines?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Food grinding machines generate vibrations due to high-speed motor rotation and uneven load distribution. Excessive vibration can cause the appliance to move or topple, leading to accidents. BIS certification evaluates the stability of the machine during operation, ensuring that it remains firmly in place. It also checks the design of anti-slip feet and overall weight distribution. For instance, a mixer grinder must remain stable even when grinding tough ingredients. Proper vibration control not only enhances safety but also improves user comfort and appliance longevity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              9. Can multiple jar configurations of a mixer grinder be covered under one BIS License?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, multiple jar configurations can be included under a single BIS License if they are part of the same product model and share similar design characteristics. For example, a mixer grinder may come with different jars for grinding, blending, and juicing. As long as the base unit and safety features remain the same, these variations can be evaluated together. However, if there are significant design differences, separate evaluation may be required. This ensures that all configurations meet safety requirements without compromising performance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. How does BIS Certification ensure safety during voltage fluctuations in India?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Voltage fluctuations are common in many parts of India and can affect the performance of electrical appliances. BIS certification ensures that food grinding machines can operate safely within a specified voltage range. Testing evaluates how the appliance responds to sudden voltage changes, ensuring that it does not overheat or malfunction. Protective features such as voltage stabilizing components or overload protection are assessed. This ensures that even in areas with unstable power supply, the grinder continues to function safely without causing damage to internal components or posing risks to users.
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