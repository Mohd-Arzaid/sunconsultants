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
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const BISCertificationforFabricSteamers = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default BISCertificationforFabricSteamers;

const MetaTags = () => {
  const title = "BIS Certificate for Fabric Streamers - Complete Guide";
  const ogTitle = "BIS Certificate for Fabric Streamers - Complete Guide";
  const twitterTitle = "BIS Certificate for Fabric Streamers - Complete Guide";
  const metaDescription =
    "Get BIS Certificate for Fabric Streamers under IS 302 (Part 1):2024. Process, documents, testing, cost & timeline for BIS Certification in India.";
  const ogDescription =
    "Complete guide to BIS Certification for Fabric Streamers as per IS 302 (Part 1):2024. Process, Cost, Documents, Testing & BIS license benefits.";
  const twitterDescription =
    "Apply for BIS Certificate for Fabric Streamers under IS 302 (Part 1):2024. Learn BIS process, documents, testing, fees & timeline in India.";
  const metaKeywords =
    "BIS Certificate for Fabric Streamers, BIS License for Fabric Streamers, IS 302 (Part 1):2024, BIS Certification for Fabric Streamers";
  const websiteUrl =
    "https://bis-certifications.com/blogs/isi-products/fabric-streamers";
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

const BreadcrumbContentVariant = () => {
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
                    BIS Certification for Fabric Steamers – Complete Guide to IS
                    302 (Part 1):2024
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

const MainContentVariant = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <MainContentLeftVariant />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeftVariant = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Fabric Steamers – Complete Guide to IS 302 (Part
          1):2024
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFabricStreamers.png"
            title="BIS License for Fabric Steamers"
            alt="BIS Certificate for Fabric Steamers - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Fabric Steamers confirms that these electrically
          powered garment-care appliances comply with the safety requirements
          defined under IS 302 (Part 1):2024. Certification verifies that fabric
          steamers operate safely while producing high-temperature steam,
          ensuring protection against electrical hazards, overheating, and
          insulation failure in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers have become an essential garment care appliance in
          modern households, fashion studios, hotels, and commercial laundry
          facilities. Unlike traditional irons that press clothing through
          direct contact, fabric steamers release high-temperature steam to
          remove wrinkles, refresh fabrics, and sanitize garments. The
          convenience of steaming delicate fabrics without damaging them has
          made these appliances extremely popular.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With the growth of e-commerce and the fashion industry, the demand for
          garment care equipment like fabric steamers has increased
          significantly in India. Portable handheld steamers are commonly used
          at home, while larger upright units are used in garment stores,
          tailoring shops, and textile showrooms.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Despite their convenience, fabric steamers operate using electrical
          heating elements and pressurized steam systems. Water stored inside
          the appliance is heated to produce steam that exits through nozzles or
          steam plates. This combination of electricity, water, and high
          temperatures introduces multiple safety concerns.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For instance, if a steamer&apos;s internal wiring is poorly insulated,
          moisture may cause electrical leakage. Similarly, overheating of
          heating elements may damage the appliance or create fire risks. Steam
          pressure buildup inside poorly designed appliances could also cause
          mechanical failures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because of these risks, electrical garment-care appliances must meet
          safety and performance requirements before being sold to consumers. In
          India, the BIS Certification for Fabric Steamers ensures that these
          appliances are tested and verified according to the technical safety
          framework defined under IS 302 (Part 1):2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, obtaining a BIS
          Certificate for Fabric Steamers demonstrates that the appliance design
          has been evaluated for electrical safety, temperature control, and
          structural reliability. Certification also indicates that the
          manufacturer maintains consistent quality standards in production.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains the BIS Certification process for
          Fabric Steamers, including the applicable BIS standard, product
          testing procedures, documentation requirements, certification costs,
          and compliance responsibilities for businesses operating in the
          garment-care appliance sector.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers appear simple from the outside, but their internal
          mechanisms involve complex electrical and thermal components. Most
          fabric steamers include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric heating elements</li>
          <li>water reservoirs</li>
          <li>steam generation chambers</li>
          <li>electrical wiring and insulation</li>
          <li>temperature control systems</li>
          <li>steam nozzles or plates</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS License for Fabric Steamers confirms that the appliance has
          undergone technical testing and that manufacturers maintain quality
          control procedures to ensure consistent compliance in production.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The safety framework applicable to fabric steamers is{" "}
          <strong>IS 302 (Part 1):2024</strong>, which specifies safety
          requirements for electrically operated appliances.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers generate hot steam by heating water inside an
          electrically powered chamber. If the appliance design is not properly
          engineered, the combination of heat, electricity, and moisture can
          create serious hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Fabric Steamers helps address these risks by
          verifying that the appliance design includes protective features such
          as temperature control systems, insulation barriers, and safe
          electrical wiring.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Fabric Steamers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is BIS Certification for Fabric Steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is a certification confirming that fabric steamers meet safety
              requirements defined under IS 302 (Part 1):2024.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for fabric steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, electrically operated garment-care appliances must comply
              with applicable safety standards.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={1} />
      </div>
    </div>
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
                    BIS Certification for Fabric Steamers – Complete Guide to IS
                    302 (Part 1):2024
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
          BIS Certification for Fabric Steamers – Complete Guide to IS 302 (Part
          1):2024
        </h1>

        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFabricStreamers.png"
            title="BIS License for Fabric Steamers"
            alt="BIS Certificate for Fabric Steamers - IS 302 (Part 1):2024 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Fabric Steamers confirms that these electrically
          powered garment-care appliances comply with the safety requirements
          defined under IS 302 (Part 1):2024. Certification verifies that fabric
          steamers operate safely while producing high-temperature steam,
          ensuring protection against electrical hazards, overheating, and
          insulation failure in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers have become an essential garment care appliance in
          modern households, fashion studios, hotels, and commercial laundry
          facilities. Unlike traditional irons that press clothing through
          direct contact, fabric steamers release high-temperature steam to
          remove wrinkles, refresh fabrics, and sanitize garments. The
          convenience of steaming delicate fabrics without damaging them has
          made these appliances extremely popular.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With the growth of e-commerce and the fashion industry, the demand for
          garment care equipment like fabric steamers has increased
          significantly in India. Portable handheld steamers are commonly used
          at home, while larger upright units are used in garment stores,
          tailoring shops, and textile showrooms.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Despite their convenience, fabric steamers operate using electrical
          heating elements and pressurized steam systems. Water stored inside
          the appliance is heated to produce steam that exits through nozzles or
          steam plates. This combination of electricity, water, and high
          temperatures introduces multiple safety concerns.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For instance, if a steamer&apos;s internal wiring is poorly insulated,
          moisture may cause electrical leakage. Similarly, overheating of
          heating elements may damage the appliance or create fire risks. Steam
          pressure buildup inside poorly designed appliances could also cause
          mechanical failures.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Because of these risks, electrical garment-care appliances must meet
          safety and performance requirements before being sold to consumers. In
          India, the BIS Certification for Fabric Steamers ensures that these
          appliances are tested and verified according to the technical safety
          framework defined under IS 302 (Part 1):2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and distributors, obtaining a BIS
          Certificate for Fabric Steamers demonstrates that the appliance design
          has been evaluated for electrical safety, temperature control, and
          structural reliability. Certification also indicates that the
          manufacturer maintains consistent quality standards in production.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains the BIS Certification process for
          Fabric Steamers, including the applicable BIS standard, product
          testing procedures, documentation requirements, certification costs,
          and compliance responsibilities for businesses operating in the
          garment-care appliance sector.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Understanding BIS Certification for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers appear simple from the outside, but their internal
          mechanisms involve complex electrical and thermal components. Most
          fabric steamers include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric heating elements</li>
          <li>water reservoirs</li>
          <li>steam generation chambers</li>
          <li>electrical wiring and insulation</li>
          <li>temperature control systems</li>
          <li>steam nozzles or plates</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These components work together to convert water into steam and deliver
          it safely onto fabrics. However, because water is heated electrically,
          proper insulation and structural design are critical.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Fabric Steamers evaluates whether these
          appliances are designed to safely manage the interaction between
          water, electricity, and heat.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For example, the heating element must be properly isolated from the
          water tank to prevent electrical leakage. The appliance housing must
          also withstand high temperatures generated during steam production
          without deforming or exposing internal wiring.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          A BIS License for Fabric Steamers confirms that the appliance has
          undergone technical testing to verify several safety aspects, such as:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electrical insulation strength</li>
          <li>protection against water leakage</li>
          <li>stability of temperature control systems</li>
          <li>mechanical durability of the appliance body</li>
          <li>safe operation of steam outlets</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another important part of the certification process involves
          evaluating manufacturing practices. A product that passes laboratory
          testing must be consistently reproduced during mass production.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Therefore, the BIS Licence for Fabric Steamers also requires
          manufacturers to maintain quality control procedures that ensure every
          unit manufactured meets the same safety specifications as the tested
          sample.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For consumers, the presence of certified fabric steamers in the market
          means that the appliance has been evaluated for safe operation while
          generating high-temperature steam—an essential requirement for
          garment-care appliances.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The safety framework applicable to fabric steamers is{" "}
          <strong>IS 302 (Part 1):2024</strong>, which specifies safety
          requirements for electrically operated appliances. Fabric steamers
          fall within this framework because they rely on electrical heating
          systems to produce steam and are commonly used in residential or
          commercial environments.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of the Standard
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          IS 302 (Part 1):2024 establishes safety guidelines for appliances that
          use electrical energy to perform heating, mechanical, or electronic
          functions. The standard addresses hazards that may occur during normal
          appliance operation as well as conditions that may arise from
          foreseeable misuse. Fabric steamers fall under this scope because
          they combine electrical heating with water handling systems.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Categories Covered
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard covers appliances that include:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>electric heating components</li>
          <li>electronic control circuits</li>
          <li>temperature regulating systems</li>
          <li>protective insulation structures</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety and Performance Objectives
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          The standard focuses on several safety objectives relevant to fabric
          steamers:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>preventing electric shock caused by moisture exposure</li>
          <li>controlling excessive temperature rise in heating elements</li>
          <li>ensuring stable operation of electrical circuits</li>
          <li>protecting users from accidental contact with live parts</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Design and Testing Principles
        </h3>

        <p className="text-gray-600 text-base font-geist mb-3">
          IS 302 (Part 1):2024 evaluates multiple aspects of appliance design,
          including:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>insulation resistance</li>
          <li>protection against moisture ingress</li>
          <li>heat resistance of appliance materials</li>
          <li>structural durability of enclosures</li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Fabric Steamers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers generate hot steam by heating water inside an
          electrically powered chamber. If the appliance design is not properly
          engineered, the combination of heat, electricity, and moisture can
          create serious hazards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          One major concern is steam pressure buildup. If the steam chamber
          lacks adequate pressure release mechanisms, excessive pressure could
          cause leaks or structural damage.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Another potential risk is water contact with electrical components.
          Moisture entering the internal electrical circuitry can result in
          short circuits or electric shock.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Overheating is also a significant issue. Heating elements inside
          steamers operate at high temperatures. Without proper thermal
          regulation, these components may exceed safe operating limits.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate for Fabric Steamers helps address these risks by
          verifying that the appliance design includes protective features such
          as temperature control systems, insulation barriers, and safe
          electrical wiring.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          From a regulatory perspective, certification allows authorities to
          ensure that electrical appliances entering the market meet established
          safety benchmarks.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers and importers, obtaining a BIS License for Fabric
          Steamers demonstrates compliance with Indian safety regulations and
          strengthens consumer trust in the product.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Fabric Steamers
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability &amp; Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The certification process begins with confirming that the appliance
          qualifies under IS 302 (Part 1):2024. Manufacturers review the
          electrical design and operational characteristics of the fabric
          steamer to determine compliance requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Submission
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers submit the certification application through the BIS
          digital portal. The application includes product details,
          manufacturing information, and supporting documentation.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certification Cost Structure
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The bis certificate cost for Fabric Steamers generally includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application fee</li>
          <li>product testing charges</li>
          <li>inspection costs</li>
          <li>license fees</li>
          <li>marking fees</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The cost of BIS certification for Fabric Steamers may vary depending
          on product variants and testing complexity.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing as per IS 302 (Part 1):2024
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Samples of the fabric steamer are tested in BIS recognized
          laboratories. Testing verifies electrical safety, temperature
          stability, and mechanical durability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection &amp; Quality Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          BIS officials may conduct a factory inspection to evaluate production
          facilities, quality control systems, and testing equipment.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License and ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After successful completion of testing and inspection, BIS grants the
          BIS Licence for Fabric Steamers, allowing the manufacturer to use the
          ISI mark.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must maintain compliance even after receiving the BIS
          License for Fabric Steamers. Periodic audits and sample testing may be
          conducted to ensure ongoing product quality.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Documents Required for BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Obtaining a BIS Certificate for Fabric Steamers requires several
          categories of documents.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Manufacturer Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These documents confirm the identity and operational status of the
          manufacturing unit. Examples include factory licenses and
          manufacturing registration certificates.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Legal records verify company ownership and authorization. Examples
          include incorporation certificates and authorized signatory documents.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Technical documentation explains the design and operation of the
          appliance. Examples include electrical diagrams, component lists, and
          product specifications.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These include the BIS application form, quality control plans, and
          test reports. Preparing accurate bis certification documents for
          Fabric Steamers helps streamline the approval process.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 302 (Part 1):2024
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers must undergo several tests to ensure safe operation.
          Testing must be conducted in BIS recognized laboratories.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Electrical Safety Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          These tests evaluate insulation resistance, leakage current, and
          grounding protection.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Performance Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Performance tests verify that the steamer produces steam effectively
          while maintaining electrical stability.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Durability Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Durability testing assesses whether the appliance can withstand
          repeated heating cycles.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Quality Verification Tests
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Quality verification ensures that components used in the appliance
          meet required manufacturing standards.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Fabric Steamers?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The requirement for BIS Certification for Fabric Steamers applies to
          multiple stakeholders.
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            <strong>Manufacturers</strong> — Domestic manufacturers producing
            fabric steamers must obtain certification.
          </li>
          <li>
            <strong>Importers</strong> — Importers bringing garment steamers
            into India must ensure the product is certified.
          </li>
          <li>
            <strong>Foreign Manufacturers</strong> — Overseas manufacturers
            exporting fabric steamers to India must obtain certification through
            BIS procedures.
          </li>
          <li>
            <strong>Private Label Brands</strong> — Companies selling steamers
            under their own brand must ensure the manufacturing unit is
            certified.
          </li>
          <li>
            <strong>Online Sellers and Distributors</strong> — E-commerce
            platforms must verify certification before selling fabric steamers.
          </li>
        </ul>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Fabric steamers are widely used for garment care in homes, fashion
          stores, and commercial laundry facilities. Because these appliances
          generate high-temperature steam using electrically powered heating
          systems, their design must carefully manage the interaction between
          water, heat, and electricity.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification for Fabric Steamers ensures that these
          appliances meet safety requirements defined under IS 302 (Part
          1):2024. Through laboratory testing, factory inspections, and
          regulatory evaluation, certification confirms that the product can
          operate safely while producing steam for garment care.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          For manufacturers, importers, and brand owners, obtaining a BIS
          Certificate for Fabric Steamers is an essential step for regulatory
          compliance and market access. A valid BIS License for Fabric Steamers
          not only fulfills legal obligations but also strengthens consumer
          trust and brand credibility in the competitive garment-care appliance
          industry.
        </p>

        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Fabric Steamers
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              1. What is BIS Certification for Fabric Steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              It is a certification confirming that fabric steamers meet safety
              requirements defined under IS 302 (Part 1):2024.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              2. Is BIS certification mandatory for fabric steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, electrically operated garment-care appliances must comply
              with applicable safety standards.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              3. What is the bis certification process for Fabric Steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              The process includes application submission, product testing,
              factory inspection, and license approval.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              4. What is the bis certificate cost for Fabric Steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs depend on testing charges, application fees, and inspection
              expenses.
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
              7. Where are fabric steamers tested?
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
              Yes, overseas manufacturers exporting to India must obtain
              certification.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              10. What is the bis license cost for Fabric Steamers?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Costs vary depending on the product model and testing
              requirements.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              11. What happens if the product fails testing?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Manufacturers must correct design issues and resubmit the product.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              12. Does each model require certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Different models may require separate evaluation depending on
              design variations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              13. Can BIS certification be renewed?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, licenses require periodic renewal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              14. Is certification required for online sales?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, products sold through online platforms must comply with BIS
              regulations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              15. Can consultants assist with certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, professional consultants can help manage documentation,
              testing coordination, and application procedures.
            </p>
          </div>
        </div>

        <ManyUsersAlsoRead />
        <FaqAuthorEng questionNumber={1} />
      </div>
    </div>
  );
};

const MainContentFlatWovenWebbing = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeftFlatWovenWebbing />

        {/* Right Side Content */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeftFlatWovenWebbing = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Flat Woven Webbing Slings – Complete Guide to IS
          15041:2001
        </h1>

        {/* Featured Image */}
        <div className="mb-6">
          <img
            src="/blogImages/BISLicenseforFlatWovenWebbingSlings.png"
            title="BIS License for Flat Woven Webbing Slings"
            alt="BIS Certificate for Flat Woven Webbing Slings - IS 15041:2001 BIS Certification"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Flat woven webbing slings are widely used across industrial lifting,
          material handling, construction, ports, warehouses, manufacturing
          units, power plants, and logistics operations. These slings are
          preferred over traditional chains and wire ropes due to their
          lightweight nature, flexibility, load distribution capability, and
          reduced risk of surface damage to lifted goods. However, because flat
          woven webbing slings are directly involved in load-bearing and lifting
          operations, any compromise in quality or strength can result in
          serious accidents, equipment damage, or loss of life.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure safety, reliability, and uniform quality, the Government of
          India mandates compliance with IS 15041:2001 through BIS Certification
          for Flat Woven Webbing Slings. A valid BIS Certificate for Flat Woven
          Webbing Slings confirms that the product meets the prescribed Indian
          Standard for design, construction, performance, testing, and marking
          requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This comprehensive guide explains everything you need to know about
          BIS License for Flat Woven Webbing Slings, including applicability,
          certification process, testing requirements, documents, cost,
          timelines, penalties, and benefits. This page is specifically written
          for manufacturers, foreign manufacturers, importers, industrial
          suppliers, traders, and compliance professionals seeking accurate and
          practical compliance guidance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          What is BIS Certification?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification is a product conformity assessment scheme governed
          by the Bureau of Indian Standards, which functions under the Ministry
          of Consumer Affairs, Food & Public Distribution. BIS certification
          ensures that products sold in India comply with Indian Standards (IS)
          related to safety, performance, reliability, and quality consistency.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Certificate Meaning
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certificate meaning refers to an official authorization issued
          by BIS that permits a manufacturer to produce and sell a product
          bearing the ISI Mark, confirming conformity with a specific Indian
          Standard.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          The core objective of BIS certification is to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Protect end users from unsafe products</li>
          <li>Ensure uniform quality benchmarks</li>
          <li>Support fair trade and regulatory enforcement</li>
          <li>Promote industrial standardization</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          ISI Mark and Its Importance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification mark (ISI Mark) is the visible assurance of
          compliance. For flat woven webbing slings, the ISI Mark confirms that:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The sling has adequate breaking strength</li>
          <li>The material and stitching meet safety requirements</li>
          <li>
            The product has passed laboratory testing and factory inspection
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Applicable BIS Standard for Flat Woven Webbing Slings
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          <strong>IS 15041:2001</strong> – Flat Woven Webbing Slings –
          Specification
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The applicable Indian Standard for flat woven webbing slings is IS
          15041:2001, which specifies requirements for synthetic flat woven
          slings used for lifting and handling loads.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Scope of IS 15041:2001
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          This standard covers:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Flat woven webbing slings made from synthetic fibres (such as
            polyester)
          </li>
          <li>Slings with different end fittings and loop configurations</li>
          <li>Slings intended for industrial lifting and material handling</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety, Performance & Testing Intent
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          IS 15041:2001 is designed to ensure:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Adequate minimum breaking force</li>
          <li>Uniform load-bearing capacity</li>
          <li>Resistance to wear, abrasion, and stitching failure</li>
          <li>Safe performance under rated working load limits</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Who Must Comply
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturers of flat woven webbing slings in India</li>
          <li>Importers and distributors of such slings</li>
          <li>Foreign manufacturers supplying to the Indian market</li>
          <li>Traders selling under private or own brands</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Why BIS Certification is Mandatory for Flat Woven Webbing Slings
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Safety Risks in Lifting Operations
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Flat woven webbing slings are used to lift heavy machinery, steel
          structures, containers, and industrial equipment. Failure can result
          in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sudden load drop</li>
          <li>Workplace injuries or fatalities</li>
          <li>Damage to high-value goods</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Regulatory and Government Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          As per BIS notifications and quality control regulations, products
          covered under IS 15041:2001 must be BIS certified before sale or
          distribution in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Legal Implications
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Selling or importing non-certified slings can lead to:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Seizure of goods</li>
          <li>Monetary penalties</li>
          <li>Prosecution under the BIS Act</li>
          <li>Blacklisting from government and PSU tenders</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market and Commercial Advantages
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          A valid BIS License for Flat Woven Webbing Slings provides:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Buyer confidence</li>
          <li>Access to organized industrial markets</li>
          <li>Eligibility for large infrastructure and EPC projects</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Step-by-Step BIS Certification Process for Flat Woven Webbing Slings
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Applicability & Standard Identification
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The first step is confirming:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product category (flat woven webbing sling)</li>
          <li>Applicable standard: IS 15041:2001</li>
          <li>Sling types, widths, and load capacities</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Online Application Process
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers must:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Register on the BIS portal</li>
          <li>Select IS 15041:2001 during application</li>
          <li>Upload documents and product details</li>
          <li>Pay the applicable BIS application fee</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          This step is commonly referred to as BIS apply online or BIS
          certificate registration.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Fees & Cost Structure for BIS Licence
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          The BIS certification cost includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Application and processing fees</li>
          <li>Testing charges at BIS-recognized labs</li>
          <li>Factory inspection charges</li>
          <li>Annual license and marking fees</li>
        </ul>
        <p className="text-gray-600 text-base font-geist mb-4">
          The overall cost of BIS certification depends on:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Number of sling variants</li>
          <li>Load capacities</li>
          <li>Testing complexity</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Product Sample Testing (As per IS 15041:2001)
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Product samples are tested for:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Breaking strength</li>
          <li>Elongation</li>
          <li>Stitching efficiency</li>
          <li>Width and thickness</li>
          <li>Workmanship and finish</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Factory Inspection & Audit
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          BIS officials inspect:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Manufacturing process</li>
          <li>Stitching and finishing operations</li>
          <li>Quality control system</li>
          <li>In-house testing equipment</li>
          <li>Raw material traceability</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Grant of BIS License & ISI Mark
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Once testing and inspection are satisfactory:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS grants the Bureau of Indian Standards License</li>
          <li>
            Manufacturer is authorized to affix the ISI Mark on certified slings
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Post-Certification Compliance
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          After certification:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Regular surveillance audits are conducted</li>
          <li>Market samples may be tested</li>
          <li>License renewal must be done on time</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Scope of BIS License as per IS 15041:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS license specifies:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Sling construction and material</li>
          <li>Approved widths and load ratings</li>
          <li>Manufacturing location</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The license covers slings used in:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Industrial lifting</li>
          <li>Warehousing and logistics</li>
          <li>Construction and infrastructure projects</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Any change in design or process requires prior BIS approval.
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
          <li>Trademark authorization (if applicable)</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Technical Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product drawings and specifications</li>
          <li>Raw material details</li>
          <li>Quality control plan</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          BIS Application Documents
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>BIS application form</li>
          <li>Test request details</li>
          <li>Undertakings and declarations</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These are collectively known as BIS CERTIFICATE DOCUMENTS or BIS
          CERTIFICATION DOCUMENTS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Testing Requirements as per IS 15041:2001
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory testing includes:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Minimum breaking force test</li>
          <li>Elongation test</li>
          <li>Stitching efficiency test</li>
          <li>Dimensional checks</li>
          <li>Visual inspection and workmanship</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Testing must be conducted only at BIS-recognized laboratories.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Common Challenges & How to Avoid Them
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Common Issues
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Failure in breaking strength</li>
          <li>Improper stitching patterns</li>
          <li>Inadequate documentation</li>
          <li>Incorrect marking or labeling</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Best Practices
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Conduct internal pre-testing</li>
          <li>Follow standard-approved stitching methods</li>
          <li>Maintain proper batch records</li>
          <li>Take expert compliance guidance</li>
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
          <li>Protection from enforcement actions</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Commercial Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Acceptance by industrial buyers</li>
          <li>Eligibility for PSU and government projects</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Branding Benefits
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>ISI Mark builds trust and credibility</li>
          <li>Differentiation from unorganized suppliers</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Market Expansion
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Easier entry into large-scale lifting and infrastructure projects
          </li>
          <li>Improved export credibility</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Penalties for Non-Compliance
        </h2>

        <p className="text-gray-600 text-base font-geist mb-3">
          Non-compliance may result in:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Heavy fines</li>
          <li>Seizure of goods</li>
          <li>Suspension of business operations</li>
          <li>Legal prosecution under the BIS Act</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Who Needs BIS Certification for Flat Woven Webbing Slings?
        </h2>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Indian manufacturers</li>
          <li>Importers</li>
          <li>Foreign manufacturers (with Indian representative)</li>
          <li>Traders selling under own brand</li>
          <li>E-commerce sellers supplying industrial slings</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Certification for Flat Woven Webbing Slings under IS 15041:2001 is
          essential for ensuring lifting safety, regulatory compliance, and
          long-term market credibility. With increasing scrutiny on industrial
          safety products, holding a valid BIS Certificate for Flat Woven
          Webbing Slings protects businesses from legal risks while opening
          doors to high-value industrial and infrastructure projects.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you manufacture, import, or sell flat woven webbing slings in
          India, obtaining a BIS License for Flat Woven Webbing Slings is not
          optional—it is a critical compliance requirement. Professional BIS
          consulting ensures faster approvals, error-free documentation, and
          sustainable compliance success.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
          FAQs – BIS Certification for Flat Woven Webbing Slings
        </h2>

        <div className="space-y-4 mb-4">
          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q1. Is BIS certification mandatory for flat woven webbing slings?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, BIS certification under IS 15041:2001 is mandatory in India.
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
              Usually 30–60 working days.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q4. What is the BIS certification cost?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Cost varies depending on sling types and testing scope.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q5. Can importers apply for BIS certification?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, importers can apply with proper authorization.
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
              Q8. What tests are required under IS 15041:2001?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Breaking strength, elongation, stitching efficiency, and
              dimensional checks.
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
              Q10. Can multiple sling capacities be covered under one license?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, subject to testing and approval.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q11. What happens if non-certified slings are sold?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Penalties, seizures, and legal action may follow.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q12. Are renewals required for BIS licenses?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, licenses must be renewed periodically.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q13. Is BIS apply online mandatory?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, applications are submitted online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
              Q14. Can consultants reduce approval time?
            </h3>
            <p className="text-gray-600 text-base font-geist mb-2">
              Yes, experienced consultants help avoid delays.
            </p>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          <iframe
            src="/BIS-Product-Pdf/IS-15041-Sun-Certifications-India.pdf"
            title="BIS Certificate for Flat Woven Webbing Slings - IS 15041:2001 PDF"
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
