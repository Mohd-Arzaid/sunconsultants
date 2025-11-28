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

const SteelProductsAmendment2025Eng = () => {
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

export default SteelProductsAmendment2025Eng;

const MetaTags = () => {
  const title = "BIS License Extension for Steel Products - QCO Amendment 2025";
  const ogTitle =
    "BIS Implementation Extension Announced Steel QCO Amendment Order 2025";
  const twitterTitle =
    "Steel & Steel Products QCO Amendment 2025 - BIS License Extension";
  const metaDescription =
    "The Ministry of Steel issues QCO extending BIS Certification enforcement timelines for multiple steel products under the Steel QCO 2024. Check updated IS standards and compliance requirements.";
  const ogDescription =
    "The Ministry of Steel has released the Steel and Steel Products (Quality Control) Amendment Order, 2025, extending enforcement of select IS standards by 1 to 3 years. Explore the updated list of steel products and compliance timelines.";
  const twitterDescription =
    "The Ministry of Steel has released the Steel and Steel Products (Quality Control) Amendment Order, 2025, extending enforcement of select IS standards by 1 to 3 years. Explore the updated list of steel products and compliance timelines.";
  const metaKeywords =
    "Steel QCO 2025, Steel QCO Amendment, BIS Certification for Steel, Ministry of Steel Notification";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/steel-products-amendment-2025";
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
                    Steel & Steel Products Amendment Order for BIS Certification
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
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          Steel & Steel Products Amendment Order for BIS Certification
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Steel has issued a new notification S.O. 5134(E)
          introducing the Steel and Steel Products (Quality Control) Amendment
          Order, 2025. This amendment brings significant relief to
          manufacturers, importers, and industry stakeholders by extending the
          implementation dates of several Indian Standards (IS) which were
          earlier notified under the original Steel and Steel Products (Quality
          Control) Order, 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Under this new amendment, multiple steel grades and products listed in
          Schedule 1 of the 2024 order will now remain non-operative for an
          extended period—either 1 year or 3 years from the date of publication
          of the notification. This provides industries more time to upgrade
          testing infrastructure, align production, and complete BIS
          certification formalities.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          This update is particularly important for companies dealing in
          structural steels, alloy steels, stainless steel products, engineering
          steels, wire rods, billets, coils, plates, strips, and other steel
          categories that were previously mandated to carry the BIS Standard
          Mark under Scheme-I.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What This Amendment of BIS Certificate means for manufacturers &
          importers
        </h2>

        <div className="mb-4">
          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
            1. More Time to Obtain BIS Certification
          </h3>
          <p className="text-gray-600 text-base font-geist mb-4">
            The biggest advantage is the extension of time for compliance.
            Manufacturers now have 1 to 3 additional years to:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
            <li>Apply for BIS License</li>
            <li>Complete factory testing</li>
            <li>Modify production processes</li>
            <li>Set up in-house labs or tie-up with BIS recognized labs</li>
            <li>Obtain ISI Mark approval</li>
          </ul>
          <p className="text-gray-600 text-base font-geist mb-4">
            This reduces the immediate pressure created by the 2024 QCO.
          </p>

          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
            2. Importers Can Continue Operations Without Immediate ISI Mark
            Compliance
          </h3>
          <p className="text-gray-600 text-base font-geist mb-4">
            Importers dealing in products under extended categories can now
            continue importing these items without BIS certification for the
            specified period. This prevents shipment delays and detentions at
            customs.
          </p>

          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
            3. Industries get time for transition for BIS License
          </h3>
          <p className="text-gray-600 text-base font-geist mb-3">
            Companies in sectors like:
          </p>
          <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
            <li>Construction</li>
            <li>Automotive</li>
            <li>Engineering & fabrication</li>
            <li>Infrastructure</li>
            <li>Electrical & power</li>
            <li>General manufacturing</li>
          </ul>
          <p className="text-gray-600 text-base font-geist mb-4">
            …will benefit from this relaxation while they prepare for long-term
            compliance.
          </p>

          <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-2">
            4. BIS Licensing Will Still Be Mandatory After the Extension Period
          </h3>
          <p className="text-gray-600 text-base font-geist mb-3">
            It is important to note:
          </p>
          <p className="text-gray-600 text-base font-geist mb-2">
            ❗ The amendment does not remove the BIS License requirement.
          </p>
          <p className="text-gray-600 text-base font-geist mb-4">
            It only postpones it.
          </p>
          <p className="text-gray-600 text-base font-geist mb-4">
            Companies must ensure that they begin the BIS certification process
            early, as Schemes under BIS may take months to complete depending on
            testing cycles and factory audits.
          </p>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Steel Products with 1-Year Extension
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  IS Standard
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Product Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6528:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wires
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6603:2001
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Bars & Flats
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3748:1990
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Tool & Die Steels
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 12146:1987
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Carbon-Manganese Steel Forgings for Pressure Vessels
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 8952:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Ingots/Blooms for Mild Steel Wire Rod
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 14491:1997
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Low-Carbon High-Strength Cold-Rolled Steel Sheets/Coils
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15997:2012
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Low-Nickel Austenitic Stainless Steel Sheet/Strip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1110:1990
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wire Rods and Bars for Utensils
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3024:2015
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Grain-Oriented Electrical Steel Sheet/Strip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 2062:2011
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Hot Rolled Structural Steel
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1786:2008
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  High Strength Deformed Bars for Concrete Reinforcement
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15391:2003
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Cold Rolled Non-Oriented Electrical Steel
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Steel Products with 3-Year Extension
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  IS Standard
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-geist font-medium text-[#1e1e1e]">
                  Product Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5872:1990
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Cold Rolled Steel Strips (Box Strappings)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3975:1999
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Mild Steel Wire for General Engineering Purposes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6527:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wire Rod
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 4409:1973
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Tubes for Structural Purposes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1673:1984
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Mild Steel Wire, Cold Heading Quality
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1812:1982
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Carbon Steel Wire for Manufacture of Wood Screws
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3431:1982
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Tubes for Automobile Purposes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3885 (Part 1):1992
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire Ropes – Part 1
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3885 (Part 2):1992
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire Ropes – Part 2
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 4223:1975
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wires for Mechanical Springs
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 4224:1972
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire for Nails
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 4398:1994
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Alloy Steel Ingots, Billets & Blooms
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6967:1973
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Hot Rolled Steel Strip for Welded Tubes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 7226:1974
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Mild Steel Wire Rods
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 7557:1982
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire – Cold Heading Quality
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 9476:1980
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Cold-Rolled Steel Strips for Razor Blades
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 9962:1981
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Wire for Needles
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 14331:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steels for High-Temperature Bolting
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 16585:2016
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Magnetic Fe-Based Amorphous Strip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 2831:2012
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Carbon Steel Cast Billet Ingots/Blooms/Slabs
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1148:2009
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Rivet Bars
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 2507:1975
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Cold-Rolled Steel Strips for Springs
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 2255:1977
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Mild Steel Wire Rod for Machine Screws
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 3195:1992
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel for Volute & Helical Springs
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 8052:2006
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Ingots/Billets/Blooms for Springs, Rivets & Screws
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 8951:2001
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Cast Billet Ingots for High Carbon Wire Rods
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 8952:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel Ingots for Mild Steel Wire Rods
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 12367:1988
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Cold-Rolled Carbon Steel Strips/Coils for Welded Tubes
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15914:2011
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  High-Tensile Steel Plates/Sheets for Gas Cylinders
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15961:2012
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Aluminium-Zinc Alloy Coated Steel Sheet/Strip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 15962:2012
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Structural Steel for Earthquake-Resistant Structures
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5522:2014
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Sheets/Strips for Utensils
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6527:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wire Rod
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6528:1995
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wire
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6603:2001
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Bars & Flats
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5522:2014
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Sheets/Strips for Utensils
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 6911:2017
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Plate/Sheet/Strip
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 280:2006
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Mild Steel Wire for General Engineering
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 1835:1976
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel for Hardening and Tempering
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 4824:2006
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Stainless Steel Wire for Cold Heading
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 9550:2001
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Bright Steel Bars
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  IS 5517:1993
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-600 font-geist">
                  Steel for Hardening & Tempering
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Steel and Steel Products (Quality Control) Amendment Order, 2025
          offers an important compliance window by extending implementation
          timelines for several IS standards under the Steel QCO 2024.
          Industries dealing with affected steel products get additional time of
          1 year or 3 years, allowing them to prepare for mandatory BIS
          certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          However, BIS licensing will become compulsory once the extension
          period ends. Manufacturers, importers, and stakeholders should use
          this transition period wisely to ensure smooth compliance without
          business disruption.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/sun-certification-steel-and-steel-products-quality-control-amendment-order-2025.pdf"
          title="Steel and Steel Products Quality Control Amendment Order 2025 PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
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
                alt="BISCRS"
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
                alt="EPRCertificate"
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
                alt="LMPC"
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
                alt="ISIMark"
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
