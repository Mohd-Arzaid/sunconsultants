import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const DPIITNotification2026 = () => {
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

export default DPIITNotification2026;

const MetaTags = () => {
  const title =
    "DPIIT Notification 2026: Major Relief on BIS QCO Compliance for Transitional Imports";
  const ogTitle =
    "DPIIT Notification 2026: Major Relief on BIS QCO Compliance for Transitional Imports";
  const twitterTitle =
    "DPIIT Notification 2026: Major Relief on BIS QCO Compliance for Transitional Imports";
  const metaDescription =
    "DPIIT issues Notification S.O. 776(E) dated 12 February 2026, granting exemption from BIS QCO compliance for imports where the purchase order was placed before implementation and shipping documents are filed within 180 days.";
  const ogDescription =
    "DPIIT issues Notification S.O. 776(E) dated 12 February 2026, granting exemption from BIS QCO compliance for imports where the purchase order was placed before implementation and shipping documents are filed within 180 days.";
  const twitterDescription =
    "DPIIT issues Notification S.O. 776(E) dated 12 February 2026, granting exemption from BIS QCO compliance for imports where the purchase order was placed before implementation and shipping documents are filed within 180 days.";
  const metaKeywords =
    "DPIIT Notification 2026, BIS QCO exemption, S.O. 776(E), transitional imports, BIS compliance, Quality Control Order, DPIIT, Ministry of Commerce";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/latest-bis-qco-update-for-import-products";
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
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    DPIIT Notification 2026 – BIS QCO Exemption
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
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          DPIIT Notification 2026: Major Relief on BIS QCO Compliance for
          Transitional Imports
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Department for Promotion of Industry and Internal Trade (DPIIT),
          under the Ministry of Commerce &amp; Industry, issued a major relief
          notification (S.O. 776(E), dated 12 February 2026) to simplify
          compliance with multiple Bureau of Indian Standards (BIS) Quality
          Control Orders (QCOs). This move is aimed at easing trade disruptions
          and providing clarity for importers dealing with transitional
          shipments.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Under the new order, imports of products covered under specified QCOs
          will be exempt from mandatory BIS compliance provided two key
          conditions are met. First, the Purchase Order must have been issued
          before the QCO implementation date. Second, the Bill of Lading and
          Bill of Entry must be filed within 180 days from the enforcement date
          of the respective QCO.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Scope of the Exemption
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          This exemption applies across a wide range of regulated products,
          including electrical appliances, construction materials, aluminium
          products, fasteners, kitchen appliances, and other notified goods
          listed in the Gazette tables. The objective is to prevent shipment
          rejections and financial losses for consignments already in the
          supply chain before enforcement.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Overall, this DPIIT notification is a significant trade-facilitation
          step, ensuring smoother transition to mandatory BIS certification while
          maintaining regulatory intent. Importers, manufacturers, and
          compliance professionals should review applicability carefully and
          maintain proper documentation to claim the exemption benefits.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
        The quality control orders covered under this notification are mentioned in the table below.
        </h2>


        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
          <table className="w-full min-w-[640px] font-geist text-sm text-left">
            <thead className="bg-[#1A8781] text-white">
              <tr>
                <th className="px-3 py-3 font-semibold whitespace-nowrap">
                  Sl. No.
                </th>
                <th className="px-3 py-3 font-semibold">
                  Title of Quality Control Order
                </th>
                <th className="px-3 py-3 font-semibold whitespace-nowrap">
                  Date of notification in the Official Gazette
                </th>
                <th className="px-3 py-3 font-semibold whitespace-nowrap">
                  Date of implementation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">1.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Aluminium and Aluminium Alloy Products (Quality Control)
                  Order, 2025
                </td>
                <td className="px-3 py-2.5 text-gray-600">6th May, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">1st October, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">2.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances for Commercial Dispensing and Vending
                  (Quality Control) Order, 2025
                </td>
                <td className="px-3 py-2.5 text-gray-600">21st May, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">1st October, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">3.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Flashlight (Quality Control) Order, 2025
                </td>
                <td className="px-3 py-2.5 text-gray-600">28th January, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">27th July, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">4.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Hinges (Quality Control) Order, 2025
                </td>
                <td className="px-3 py-2.5 text-gray-600">24th March, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">1st July, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">5.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electric Fence Energizers (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">
                  19th November, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">18th May, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">6.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Air Cooler and Air Filters (Quality Control) Order, 2025
                </td>
                <td className="px-3 py-2.5 text-gray-600">30th January, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">1st April, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">7.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances for Domestic Clothes Washing (Quality
                  Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">5th November, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">1st April, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">8.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances for Skin or Hair Care (Quality Control)
                  Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th March, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">9.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances for Domestic Water Heating (Quality
                  Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">21st January, 2025</td>
                <td className="px-3 py-2.5 text-gray-600">1st March, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">10.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Plywood and Wooden flush door shutters (Quality Control)
                  Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">15th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">28th February, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">11.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Wood Based Boards (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">12th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">11th February, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">12.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Resin treated compressed wood laminates (Quality Control)
                  Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">5th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">14th January, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">13.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Telescopic Ball Bearing Drawer Slide (Quality Control) Order,
                  2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">8th May, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">7th November, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">14.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Copper Products (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">26th April, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">19th October, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">15.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Self-Contained Drinking Water Cooler (Quality Control) Order,
                  2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">28th May, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">1st October, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">16.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  V-Belt (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">11th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">10th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">17.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Water Meters and Accessories (Quality Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">18.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances for Kitchen (Quality Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">19.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Appliances Fans (Quality Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">20.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Gypsum based Building Materials (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">21.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Asbestos or Fibre Cement based Products (Quality Control)
                  Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">7th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">6th September, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">22.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Footwear made from Leather and other Materials (Quality
                  Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">15th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">1st August, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">23.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Footwear made from All Rubber and all Polymeric Material and
                  its Components (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">15th March, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">1st August, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">24.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Electrical Accessories (Quality Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">3rd January, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">2nd July, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">25.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Laboratory Glassware (Quality Control) Order, 2023
                </td>
                <td className="px-3 py-2.5 text-gray-600">3rd January, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">2nd July, 2024</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2.5 text-gray-700 font-medium">26.</td>
                <td className="px-3 py-2.5 text-gray-600">
                  Bottled Water Dispenser (Quality Control) Order, 2024
                </td>
                <td className="px-3 py-2.5 text-gray-600">4th June, 2024</td>
                <td className="px-3 py-2.5 text-gray-600">1st July, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-lg bg-amber-50/80 border border-amber-200 p-4 mb-6">
          <h3 className="text-base font-geist font-semibold text-[#1e1e1e] mb-2">
            Note (as per the Gazette):
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm font-geist">
            <li>
              For availing the exemption, the importer shall provide to the
              Bureau (BIS) a letter on letterhead duly signed by an authorised
              signatory, a copy of the Purchase Order, Bill of Lading, and Bill
              of Entry along with its supporting documents within seven days of
              consignment clearance.
            </li>
            <li>
              This notification shall come into force on the date of its
              publication in the Official Gazette.
            </li>
          </ol>
        </div>

        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
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
