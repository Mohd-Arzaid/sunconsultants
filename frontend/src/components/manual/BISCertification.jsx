import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../../assets/images/BISSRimg.png";
import { Helmet } from "react-helmet-async";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check, Search } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "../common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import PropTypes from "prop-types";
import Services from "./Services";
import AboutAuthor from "../common/AboutAuthor";
import SEOBreadcrumbs from "../common/SEOBreadcrumbs";


export const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS Certification Services | ISI Mark | BIS License | Sun
          Certifications And Engineers
        </title>
        <meta
          name="description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, ISI Mark, BIS License, BIS registration, Indian Standards, product certification"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          property="og:description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          name="twitter:description"
          content="Expert BIS certification services for Indian and foreign manufacturers."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
              url: window.location.href,
              logo: "https://suncertifications.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ISI Mark Certification",
                    description:
                      "ISI Mark certification for Indian manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS License for Foreign Manufacturers",
                    description:
                      "BIS License certification for foreign manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Registration Certificate",
                    description: "BIS Registration certification for products",
                  },
                },
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is BIS Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="w-full">
        <SEOBreadcrumbs customTitle="BIS Certification Services | ISI Mark | BIS License" />
        <BISCHero />
        <BISCIndex />
        <BISCContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

// BISC Product Table Section
const productsData = [
  {
    id: 1,
    isNumber: "IS 12330",
    product: "Sulphate Resisting Portland Cement",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "Low heat Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Portland Pozzolana Cement-Part1 Fly-ash based",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Portland Pozzolana Cement-Part 2 Calcined clay based",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "Ordinary Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "Masonry Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "Portland Slag Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "High Alumina Cement for Structural use",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "Super sulphated cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "Rapid hardening Portland cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "White Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "Hydrophobic Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "Oil well Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Composite Cement- Specification.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Microfine Ordinary Portland Cement- Specification.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "High Alumina Refractory Cement.",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Residual current operated circuit breakers for house hold and similar uses-Part 1 Circuit breakers without integral overcurrent protection (RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Residual current operated circuit breakers for household and similar uses-Part 2 Circuit breakers with integral overcurrent protection(RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "AC watt-hour meters, class 0.5, 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "AC static watt-hour meters, class 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "AC static transformer operated watt-hour and VAR-hour meters, class 0.2S & 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Self Ballasted Lamps for General Lighting Services – Part 1 : Safety Requirements & Part 2 : Performance Requirements",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Safety of household and similar electrical appliances – Electric iron",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Safety of household and similar electrical appliances– Electric immersion water-heaters",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Safety of household and similar electrical appliances –Electric stoves",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Safety of household and similar electrical appliances-Room heaters",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Switches for domestic and similar purposes",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Tungsten filament general service electric lamps (upto100 W )",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 29,
    isNumber: "IS 694",
    product:
      "PVC insulated cables for working voltages up to and including 1100V",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 30,
    isNumber: "IS 8828",
    product:
      "Electrical Accessories-Circuit breakers for overcurrent protection for household and similar installations",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Elastomer insulated cables (Part.1): For working voltages up to and including1100 V",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "Multi-Purpose dry batteries",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Follow-up formula –complimentary foods",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Processed cereal based complementary foods",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "Milk-powder",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Condensed milk, partly skimmed and skimmed condensed milk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Sweetened ultra high temperature treated condensed milk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Skimmed milk-powder, standard grade",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Skimmed milk-powder, extra grade",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "Packaged Natural Mineral Water",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "Infant milk substitutes",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "Food for Special Medical Purpose intended for Infants",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "Plastic Feeding Bottles",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "Glass Feeding Bottles",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "Oil pressure stove, offset burner type",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "Multi-burner oil pressure stoves",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "Oil pressure stoves",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "Automotive vehicles –Tubes for pneumatic tyres",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "Automotive vehicles– Pneumatic tyres for two and three-wheeled motor vehicles",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "Automotive vehicles-Pneumatic tyres for passenger car vehicles– Diagonal and radial ply",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "Automotive vehicles- Pneumatic tyres for commercial vehicles-Diagonal and radial ply",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "Liquefied petroleum gas containers for automotive use",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "Multifunction valve assembly for permanently fixed liquefied petroleum gas (LPG) containers for automotive use",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Welded low carbon steel cylinders exceeding 5 litre Water capacity for low pressure liquefiable gases Part 4 cylinders for toxic and corrosive gases",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5 litre water capacity for low pressure liquefiable gases Part 1 cylinders for liquefied petroleum gas (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5-litre water capacity for low pressure liquefiable gases Part 2 cylinders for liquefiable gases other than LPG.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "Valve fittings for compressed gas cylinder excluding liquefied petroleum gas cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "Yoke Type Valve Connection for Small Medical Gas Cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "Welded low carbon steel cylinders for low pressure liquefiable gases not exceeding 5 litre water capacity",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Refillable Seamless steel gas cylinders Part1 Normalized steel cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Refillable Seamless steel gas cylinders Part 2 Quenched and tempered steel cylinders with tensile strength less than 1100 MPa (112 kgf/mm2)",
    notificationText: "",
    notificationLink: "",
  },
];

export const BISCProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const filteredProducts = productsData.filter(
    (product) =>
      product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="w-full pb-12 ">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Products Under BIS Certification as per Indian Standards
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          The following table lists products that require BIS certification in
          India along with their applicable Indian Standard (IS) numbers. These
          standards ensure quality, safety, and reliability of products in the
          Indian market.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for Products by name or IS number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  S.No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS No.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  Product
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  For Notification Details Please click on the given link
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.notificationText ? (
                      <>
                        {item.notificationText.split("\n").map((line, idx) =>
                          idx === 1 && item.notificationLink ? (
                            <div key={idx}>
                              <a
                                href={item.notificationLink}
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {line}
                              </a>
                            </div>
                          ) : (
                            <div key={idx}>{line}</div>
                          )
                        )}
                      </>
                    ) : (
                      " "
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <div className="font-geist text-sm text-gray-700">
              Showing {indexOfFirstProduct + 1} to{" "}
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </div>
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// BISC Hero Section
const BISCHero = () => {
  return (
    <section
      className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px]  z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Certification India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            for Importers, Manufacturer
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Certification ensures product quality and safety in India. It is
            mandatory for many products and requires testing, documentation, and
            approval.
          </p>

          <nav className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </section>
  );
};

// BISC Index Section
const BISCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Types",
    "Documents",
    "Process",
    "Cost",
    "Role",
    "Conclusion",
    "FAQs",
  ];

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sticky behavior detection
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Filter entries that are intersecting and sort by intersection ratio
        const intersectingEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries[0];
          const targetId = mostVisibleEntry.target.id;

          // Handle special case for FAQs
          if (targetId === "faqs") {
            setActiveSection("FAQs");
          } else {
            // Capitalize first letter for other sections
            const sectionName = targetId.charAt(0).toUpperCase() + targetId.slice(1);
            setActiveSection(sectionName);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: "-20% 0px -70% 0px" // Only trigger when section is in the middle portion of viewport
      }
    );

    // Observe all sections
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
        }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {activeSection}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


// BISC Content Section
const BISCContent = () => {
  return (
    <section className="" aria-label="BIS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISCContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="product-table">
        <BISCProductTable />
      </div>

      <div id="services">
        <Services />
      </div>
    </section>
  );
};

// BISC FAQs Section
const ServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2 bg-white scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQs – BIS Certification in India
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is BIS certification in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS certification is a quality assurance certification issued by
                the Bureau of Indian Standards (BIS) to ensure that products
                comply with Indian standards for safety, performance, and
                quality. It is mandatory for various product categories and
                helps in consumer protection and regulatory compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Why do I need a BIS certificate?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                A BIS certificate is essential to legally manufacture, import,
                distribute, or sell certain products in India. It assures
                consumers that the product meets the safety and quality
                guidelines of Indian standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the ISI mark under BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The ISI mark is a certification symbol provided under the BIS
                certification scheme. It indicates that a product complies with
                Indian standards and has been certified by the Indian BIS
                through proper testing and registration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who issues BIS licenses in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS licenses are issued by the Bureau of Indian Standards
                (Indian BIS), the national standards body under the Ministry of
                Consumer Affairs, Food and Public Distribution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the different types of BIS certification schemes?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The major BIS certification schemes include the ISI mark scheme,
                Compulsory Registration Scheme (CRS), Foreign Manufacturers
                Certification Scheme (FMCS), Hallmarking for jewelry, Eco Mark
                certification, and what is Scheme X for industrial machinery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Scheme X under BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Scheme X is a simplified BIS certification process applicable to
                industrial products like pumps, transformers, machine tools, and
                cranes. It ensures quicker approval without compromising
                compliance to Indian standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which products require BIS certification in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Products like electrical appliances, electronics, kitchenware,
                cement, steel, gold jewelry, mobile phones, and transformers
                require BIS certification as per the Indian BIS mandate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is BIS registration mandatory for all products?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                No, BIS registration is mandatory only for products listed in
                the compulsory certification scheme. However, voluntary BIS
                certification is also available to enhance product credibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long is a BIS licence valid?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                A BIS licence is typically valid for one to two years and must
                be renewed before its expiry to continue using the ISI mark or
                maintain BIS registration status.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the steps to get BIS certification in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The BIS certification process includes identifying applicable
                Indian standards, submitting an application, product testing,
                factory inspection, and issuance of a BIS certificate upon
                approval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can foreign manufacturers apply for a BIS license?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes, under the Foreign Manufacturers Certification Scheme
                (FMCS), foreign companies can apply for a BIS license to sell
                products in India. They must appoint an Authorized Indian
                Representative (AIR).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the role of the AIR in BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                An AIR (Authorized Indian Representative) acts as a liaison
                between the foreign manufacturer and the Indian BIS. They are
                responsible for documentation, communication, and compliance
                with BIS certification requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How can I apply for BIS registration online?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                You can apply for BIS registration online through the official
                BIS portal. The process involves form submission, uploading
                documents, test reports, and payment of fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for a BIS certificate?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Documents needed include business license, product
                specifications, manufacturing process, lab test reports, factory
                layout, quality manual, and authorization forms (for foreign
                manufacturers).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How much does BIS certification cost in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The cost of BIS certification depends on product type, testing
                requirements, scheme type (ISI, CRS, FMCS), and whether the
                applicant is domestic or foreign. Costs include application
                fees, testing charges, and inspection expenses.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is the ISI mark mandatory for all BIS-certified products?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                No, only products under the ISI scheme are required to carry the
                ISI mark. Products under CRS or Hallmarking schemes follow
                different labeling protocols as per BIS registration norms.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can I get BIS certification for eco-friendly products?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes, products that meet environmental standards can get BIS
                certification under the Eco Mark scheme, which ensures
                compliance with Indian standards for environmental safety.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the difference between BIS certification and BIS
                registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS certification generally refers to the approval under ISI,
                FMCS, or Hallmarking schemes, while BIS registration is commonly
                associated with the CRS scheme for electronic products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the Compulsory Registration Scheme (CRS)?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                CRS is a BIS registration program for IT and electronic goods
                like LED lights, mobile phones, and power banks. It ensures
                product compliance with safety-related Indian standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do ISI mark and BIS certificate mean the same thing?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Not exactly. The ISI mark is the symbol granted to certified
                products under the BIS certification scheme. A BIS certificate
                is the legal document issued to the manufacturer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-21">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can one BIS license cover multiple products?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                No, a separate BIS licence is required for each product type and
                each manufacturing location, even if the products are similar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-22">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What happens if I sell products without BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Selling products that require BIS certification without a valid
                BIS licence is illegal in India and can lead to penalties,
                product recalls, or bans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-23">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does it take to get BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The BIS certification process generally takes 30 to 90 days,
                depending on the product type, testing requirements, and whether
                the applicant is domestic or foreign.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-24">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is BIS certification accepted globally?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                While BIS certification is specific to India, it enhances global
                credibility by showcasing compliance with stringent Indian
                standards. Some BIS-certified products are also accepted under
                mutual recognition agreements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-25">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How often do I need to renew my BIS license?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS licenses must be renewed annually or biennially.
                Manufacturers must maintain compliance with Indian standards and
                pass surveillance audits to renew their BIS certificate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISCContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="flex flex-col  gap-[20px] md:gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Types Section */}
        <TypesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Documents Section */}
        <DocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RoleSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConclusionSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full  md:w-[441px]">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[24px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

PointsList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
      What Is BIS Certificate? A Complete Guide to the Indian BIS Certification for Indian & Foreign Manufacturers.
      </h1>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
      BIS Certification in India: Ensuring Quality with ISI Mark
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certification in India is a mandatory quality standard issued by the
        Bureau of Indian Standards (BIS), the national standardization body
        under the Ministry of Consumer Affairs. A BIS certificate confirms that
        a product complies with Indian safety, quality, and performance
        benchmarks. Products that meet these standards are granted the ISI mark,
        a symbol of trust and reliability for Indian consumers. BIS Certificate
        or ISI mark not only boosts consumer confidence but also ensures that
        manufacturers follow regulated production practices. For many product
        categories, such as electrical appliances, cement, steel, and packaged
        drinking water, BIS certification is compulsory under various government
        regulations. Without this mark, the sale or import of such goods is
        prohibited in India. The BIS certification process involves product
        testing in BIS-recognized laboratories, factory audits, and continued
        surveillance after the license is granted. Whether you're an Indian
        manufacturer or a foreign company aiming to enter the Indian market,
        obtaining the Indian BIS license is critical for compliance and market
        access. With the growing emphasis on consumer safety and product
        quality, the BIS certificate has become a key requirement across
        industries. By obtaining BIS certificate or BIS licence, businesses not
        only ensure legal compliance but also gain a competitive advantage in
        the Indian marketplace.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS Certification Scheme
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The BIS certification scheme is a regulatory framework by the Indian BIS
        to ensure products meet quality and safety benchmarks as per Indian
        standards. Under this scheme, a BIS certificate or BIS licence is issued
        after successful testing, factory inspection, and compliance
        verification. The goal of BIS registration is to enhance consumer trust
        and ensure that the product carries the ISI mark, a symbol of assured
        quality. Whether you are an Indian or foreign manufacturer, BIS
        certification is mandatory for many products, including electronics,
        food-grade plastic, and construction materials. This scheme ensures
        manufacturers comply with defined norms and helps avoid unsafe or
        substandard goods in the Indian market. Getting a BIS certificate not
        only enables market access but also demonstrates that the product aligns
        with mandatory Indian standards. Through its surveillance mechanism and
        periodic factory assessments, Indian BIS ensures continued compliance.
        This organized and standardized approach helps streamline product
        quality control across sectors. Ultimately, BIS certification safeguards
        public health, promotes fair trade, and builds industrial
        accountability. Without a valid BIS licence, companies risk legal
        consequences and market exclusion in India, making BIS registration a
        critical component of responsible manufacturing and importation in the
        Indian economy.
      </p>
    </section>
  );
};

const TypesSection = () => {
  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* Benefits */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Types
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      {/* Title */}

      <h2 className="mainHeading">Types of BIS Certification</h2>
      <p className="simpleParagraph">
        There are various types of BIS certification issued by the Indian BIS,
        each designed to cater to different product categories and market needs
        under Indian standards.
      </p>

      <div className="pointList">
        <PointsListTwo
          points={[
            "FMCS – Foreign Manufacturers Certification SchemeElectronics & IT hardware",
            "Scheme X under Indian BIS",
            "CRS – Compulsory Registration Scheme",
            "Hallmarking Scheme (Jewellery & Precious Metals)",
            "Cement and construction materials etc.",
            "Eco Mark Certification",
          ]}
        />
      </div>

      <h2 className="normalHeading">FMCS Scheme under Indian BIS</h2>

      <p className="simpleParagraph">
        The Foreign Manufacturers Certification Scheme (FMCS) is a special BIS
        certification scheme designed by the Indian BIS for foreign
        manufacturers who want to sell their products in the Indian market.
        Under this scheme, overseas manufacturers must obtain a BIS licence or
        BIS certificate to prove that their products meet applicable Indian
        standards. Just like in the domestic scheme, the ISI mark is granted
        after a detailed assessment that includes product sample testing and
        factory inspections. FMCS is vital for ensuring that imported goods
        align with safety and performance expectations in India. Without proper
        BIS registration, foreign goods cannot legally enter the Indian market.
        The FMCS process involves submitting an application, appointing an
        Authorized Indian Representative (AIR), and undergoing a stringent
        verification process. Compliance with BIS certification norms under this
        scheme not only protects Indian consumers but also boosts credibility
        for foreign companies. All certified products must display the ISI mark,
        signifying trust and standard compliance. For any global business
        looking to expand into India, the FMCS scheme under Indian BIS is a
        crucial gateway to market entry, assuring that products fulfill both
        regulatory and quality benchmarks under Indian standards.
      </p>

      <h2 className="normalHeading">
        BIS License for Domestic Manufacturer (Indian BIS)
      </h2>

      <div className="simpleParagraph">
        Domestic manufacturers must obtain BIS certification through the Indian
        BIS to sell regulated products in India. This involves securing a valid
        BIS certificate or BIS licence after meeting the criteria laid down
        under Indian standards. For Indian manufacturers, getting BIS
        registration means their products are tested and verified for safety,
        quality, and reliability. Once certified, the products bear the ISI
        mark, indicating they are compliant with national benchmarks. Indian BIS
        conducts rigorous audits, including factory inspections and product
        testing, before granting the certification. The scheme is essential for
        ensuring only standard-compliant goods reach the Indian market. The
        presence of the ISI mark helps consumers identify genuine, safe, and
        government-approved products. Indian manufacturers benefit from enhanced
        market credibility and consumer trust by acquiring a BIS licence.
        Whether producing electronics, steel, plastic items, or construction
        goods, manufacturers must follow the mandatory certification process.
        The BIS certificate also facilitates participation in government tenders
        and large-scale commercial contracts. Overall, BIS certification plays a
        key role in quality control, consumer safety, and brand reputation for
        Indian producers. Failing to comply with BIS registration norms can lead
        to legal action and product bans in India, making this certification
        mandatory for business success.
      </div>

      <h2 className="normalHeading">What is ISI Mark ?</h2>

      <p className="simpleParagraph">
        The ISI mark is one of the most recognized symbols of quality in India
        and is issued under the BIS certification scheme. Managed by the Indian
        BIS, the ISI mark indicates that a product complies with the relevant
        Indian standards for safety, performance, and quality. To obtain the ISI
        mark, manufacturers—whether domestic or foreign—must secure a valid BIS
        licence or BIS certificate through rigorous testing and factory audits.
        Only after successful BIS registration can the mark be legally used on
        products. The ISI mark is mandatory for numerous product categories like
        electrical appliances, cement, LPG cylinders, and packaged drinking
        water. Without it, companies cannot manufacture, import, or sell such
        goods in India. A product carrying the ISI mark assures consumers that
        it meets national regulatory norms and is safe for use. This contributes
        significantly to consumer confidence and brand reputation. The ISI mark
        also helps regulatory bodies enforce quality control across industries.
        Whether you're applying for a new BIS certification or renewing a BIS
        licence, ensuring that your product qualifies for the ISI mark is
        crucial. For any business aiming to operate successfully in India,
        compliance with Indian BIS standards and use of the ISI mark is
        non-negotiable.
      </p>

      <h2 className="normalHeading">
        What is Scheme X ? ( Omnibus Technical Regulation )
      </h2>

      <p className="simpleParagraph">
        It is a streamlined BIS certification scheme launched by the Indian BIS
        to ease the process for certain manufacturers, especially in the
        mechanical and industrial sectors. Scheme X simplifies documentation and
        evaluation while ensuring products still meet all applicable Indian
        standards. Under this scheme, the BIS certificate is granted after type
        approval testing, factory audit, and conformity to mandatory guidelines.
        What is Scheme X intended for? It is designed for industries such as
        pumps, cranes, machine tools, and transformers etc. —sectors where
        product standardization plays a vital role. Products certified under
        Scheme X are eligible to bear the ISI mark, offering market credibility
        and regulatory clearance. The scheme is particularly useful for
        large-scale manufacturers and those dealing with complex industrial
        goods. By reducing the time and cost associated with regular BIS
        certification, Scheme X enables faster market entry and ensures
        compliance with Indian BIS requirements. The simplified structure also
        encourages innovation while maintaining strict quality control. A valid
        BIS licence or BIS registration under Scheme X helps businesses align
        with consumer expectations and regulatory demands. Understanding what is
        Scheme X and how it functions is essential for manufacturers looking for
        efficient pathways to secure a BIS certificate in India.
      </p>

      <h2 className="normalHeading">Compulsory Registration Scheme ( CRS )</h2>

      <p className="simpleParagraph">
        The Compulsory Registration Scheme (CRS) is a specialized BIS
        certification program implemented by the Indian BIS for electronic and
        IT products. Under CRS, manufacturers must obtain a BIS certificate
        before selling or importing products such as LED lights, mobile phones,
        power banks, and laptops in India. This scheme ensures that such
        high-risk products comply with Indian standards to ensure safety and
        functionality. CRS is not as extensive as the ISI scheme, but it still
        mandates testing in BIS-recognized labs and mandatory BIS registration
        before products can enter the market. While products under CRS do not
        carry the ISI mark, they still must display a BIS licence number and
        comply with defined quality norms. The CRS program helps reduce unsafe
        or counterfeit products in India, especially in the booming electronics
        market. Foreign and Indian manufacturers both must appoint an Authorized
        Indian Representative (AIR) and complete the BIS certification process
        to ensure compliance. The Indian BIS routinely updates the list of
        products under CRS to keep up with technological changes and emerging
        safety concerns. Obtaining a BIS certificate under CRS not only ensures
        regulatory approval but also boosts customer trust and enables broader
        market reach for electronics manufacturers.
      </p>

      <h2 className="normalHeading">Hallmarking</h2>

      <p className="simpleParagraph">
        Hallmarking under BIS certification is mandatory for gold and silver
        jewelry in India to ensure purity and authenticity. Managed by the
        Indian BIS, hallmarking is a quality assurance process where precious
        metal articles are tested and stamped with the ISI mark (or hallmark
        symbol) once they meet the required Indian standards. Jewelers must
        obtain a BIS licence or BIS certificate to legally sell hallmarked
        products. This includes BIS registration, testing at BIS-approved
        Assaying and Hallmarking Centers (AHCs), and regular audits. Hallmarked
        jewelry gives consumers confidence about the purity and weight of the
        metal, minimizing fraud and market malpractice. With gold being a major
        investment for Indian consumers, BIS certification through hallmarking
        plays a crucial role in maintaining transparency and trust. Every piece
        marked is verified against Indian standards, and non-compliance can
        result in severe penalties, including license suspension. Hallmarking
        not only protects consumers but also boosts the credibility of jewelers
        and exporters. By holding a valid BIS licence, businesses demonstrate
        their commitment to fair trade practices. Whether you're a small jeweler
        or a large manufacturer, securing a BIS certificate through hallmarking
        is essential for legal compliance and consumer satisfaction in India's
        precious metals market.
      </p>

      <h2 className="normalHeading">Eco Mark</h2>

      <p className="simpleParagraph">
        Eco Mark is a unique certification under the BIS certification system
        offered by the Indian BIS for environmentally friendly products. It is
        granted to products that not only conform to Indian standards for
        quality but also demonstrate minimal environmental impact throughout
        their lifecycle. Products bearing the Eco Mark must undergo rigorous
        testing and meet criteria related to energy efficiency, recyclability,
        and reduced emissions. Just like the ISI mark, the Eco Mark is a
        government-approved assurance symbol. To receive this mark,
        manufacturers must obtain a valid BIS licence or BIS certificate and
        complete the BIS registration process under the relevant standards. The
        goal is to encourage sustainable manufacturing practices and promote
        environmental responsibility among industries. The Indian BIS assesses
        each application based on strict parameters, including biodegradability,
        non-toxicity, and eco-friendliness of raw materials. By securing a BIS
        certificate with an Eco Mark, businesses not only comply with legal
        norms but also gain credibility among environmentally conscious
        consumers. This form of BIS certification helps companies align with
        global sustainability goals while promoting products that meet both
        safety and ecological standards. The Eco Mark offers a competitive edge
        to brands aiming to combine quality with environmental responsibility
        under the umbrella of BIS certification.
      </p>

      <h2 className="normalHeading">
        Management Systems Certification Scheme (MSCS)
      </h2>

      <p className="simpleParagraph">
        The Management Systems Certification Scheme (MSCS) by the Bureau of
        Indian Standards (BIS) is a structured program designed to assess and
        certify organizations that implement various internationally recognized
        management systems. These systems include standards like ISO 9001
        (Quality Management), ISO 14001 (Environmental Management), ISO 45001
        (Occupational Health & Safety), among others. The MSCS ensures that
        organizations maintain consistency in their operational processes,
        comply with legal and regulatory requirements, and continually improve
        performance and customer satisfaction. BIS, being a national standards
        body, provides this third-party certification as a mark of trust and
        compliance, enhancing an organization’s market credibility both
        domestically and globally. Through rigorous audits, surveillance, and
        recertification processes, the MSCS builds confidence among stakeholders
        and promotes a culture of quality, safety, and sustainability. Moreover,
        the certification aligns with government initiatives like Make in India
        and Atmanirbhar Bharat, encouraging Indian businesses to meet global
        benchmarks. The scheme also promotes fair trade, enhances consumer
        trust, and contributes to a more transparent and competitive industrial
        ecosystem. With a focus on competence, impartiality, and continual
        improvement, BIS’s MSCS plays a vital role in shaping India’s quality
        infrastructure.
      </p>

      <h2 className="normalHeading">LRS (Lab Recognition Scheme)</h2>

      <div className="simpleParagraph">
        The LRS (Lab Recognition Scheme) of the Bureau of Indian Standards (BIS)
        is a crucial mechanism to ensure the quality and credibility of testing
        laboratories that evaluate products for BIS certification. Under this
        scheme, laboratories are assessed and granted recognition by BIS based
        on their technical competence, infrastructure, personnel, and compliance
        with ISO/IEC 17025 standards. Laboratories recognized under LRS play a
        key role in the BIS certification process, as their test reports are
        accepted for product conformity assessments under schemes like the ISI
        Mark and Compulsory Registration Scheme (CRS). Obtaining an LRS-approved
        lab report is often a prerequisite for manufacturers—especially
        importers and exporters—seeking a BIS certificate for regulated products
        in India. The scheme ensures that only technically sound, reliable, and
        impartial labs are involved in testing, thus strengthening India’s
        product quality ecosystem. BIS regularly monitors these labs through
        audits, proficiency testing, and surveillance to maintain global
        standards. By promoting transparency and trust, the LRS scheme
        contributes to faster processing of BIS certifications, ensuring that 
        only safe and standard-compliant products enter the Indian market. For 
        any business aiming to obtain a BIS certificate, partnering with an
        LRS-recognized lab is an essential first step toward compliance.
      </div>

      <h2 className="normalHeading">Products under BIS Certification</h2>

      <div className="simpleParagraph">
      Many products in India require BIS certification to ensure they conform to safety and performance benchmarks established by Indian BIS. These products span various industries such as electronics, electrical appliances, cement, automotive parts, steel, kitchenware, and more. All these categories must meet specific Indian standards, and companies must secure a BIS licence or BIS certificate before they can be sold in the Indian market. Products certified under the ISI mark scheme include items like electric cables, switches, packaged drinking water, and LPG cylinders, where quality control is critical. The CRS scheme applies to electronic products like LED lights, mobile phones, and power adapters. Even environmental and industrial goods, such as pumps and transformers, are included under Scheme X. Each product type has a specific standard, and BIS registration ensures that these products are verified through testing and inspection. The Indian BIS updates its product list periodically to keep up with technological and market developments. Securing BIS certification is not just a regulatory requirement—it is essential for market access, brand trust, and consumer safety. Without a valid BIS licence, businesses cannot legally manufacture, import, or sell these products, making certification vital for compliance and growth.
      </div>


      <h2 className="normalHeading">Benefits of BIS Certification</h2>

      <div className="simpleParagraph">
      Obtaining BIS certification offers multiple benefits for manufacturers, consumers, and the broader Indian economy. For businesses, a valid BIS licence or BIS certificate allows legal sale and distribution of regulated products within India. The ISI mark, granted through BIS registration, assures customers of the product’s safety, reliability, and compliance with Indian standards. For consumers, BIS certification provides confidence that the product they are purchasing is of tested quality and free from defects or safety hazards. The Indian BIS plays a vital role in ensuring that certified products undergo strict testing, regular audits, and continuous surveillance to maintain quality. For exporters and foreign manufacturers, BIS certification acts as a market gateway and boosts their brand’s credibility among Indian consumers. It also helps avoid penalties, import restrictions, or legal issues arising from non-compliance. Environmental certifications like the Eco Mark and specialized schemes like Scheme X further enhance product acceptability. Whether under CRS, FMCS, or ISI mark schemes, obtaining a BIS licence enables smoother trade operations and builds trust with distributors and retailers. Thus, the benefits of BIS certification go far beyond compliance—they foster brand loyalty, improve safety, and ensure adherence to Indian standards across various sectors.
      </div>

      <h2 className="normalHeading">Documents Required for BIS Certificate</h2>

      <div className="simpleParagraph">
      To apply for a BIS certificate, businesses must prepare a comprehensive set of documents that demonstrate compliance with Indian standards and eligibility for BIS certification. Key documents include the company’s business license, manufacturing layout, list of machinery, raw material sources, product technical details, and quality control manual. If applying under the ISI mark scheme, the applicant must also provide test reports from BIS-recognized labs. A valid trademark certificate is required for brand protection during BIS registration. For foreign manufacturers, an Authorized Indian Representative (AIR) must submit additional documentation like proof of representation and identity. The Indian BIS uses these documents to assess whether the product and facility meet the criteria for a BIS licence. Incomplete or inaccurate submissions can delay the BIS certification process or lead to outright rejection. Depending on the product category, additional documents may be needed under CRS, FMCS, or what is Scheme X guidelines. Accurate documentation ensures a smooth audit, reduces approval time, and facilitates faster market access. By compiling all required paperwork correctly, businesses demonstrate their commitment to product quality and safety. Hence, preparing the right documents is a critical step in securing a valid BIS licence and succeeding in the Indian market under BIS certification norms.
      </div>

     









    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="mainHeading">Documents Required for BIS Certificate</h1>

      <p className="simpleParagraph">
        To apply for a BIS certificate, businesses must prepare a comprehensive
        set of documents that demonstrate compliance with Indian standards and
        eligibility for BIS certification. Key documents include the company’s
        business license, manufacturing layout, list of machinery, raw material
        sources, product technical details, and quality control manual. If
        applying under the ISI mark scheme, the applicant must also provide test
        reports from BIS-recognized labs. A valid trademark certificate is
        required for brand protection during BIS registration. For foreign
        manufacturers, an Authorized Indian Representative (AIR) must submit
        additional documentation like proof of representation and identity. The
        Indian BIS uses these documents to assess whether the product and
        facility meet the criteria for a BIS licence. Incomplete or inaccurate
        submissions can delay the BIS certification process or lead to outright
        rejection. Depending on the product category, additional documents may
        be needed under CRS, FMCS, or what is Scheme X guidelines. Accurate
        documentation ensures a smooth audit, reduces approval time, and
        facilitates faster market access. By compiling all required paperwork
        correctly, businesses demonstrate their commitment to product quality
        and safety. Hence, preparing the right documents is a critical step in
        securing a valid BIS licence and succeeding in the Indian market under
        BIS certification norms.
      </p>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">Process of BIS Certification</h2>

      <p className="simpleParagraph">
        The BIS certification process follows a structured approach to ensure
        products meet mandatory Indian standards for quality, safety, and
        performance. Here's a comprehensive overview of the complete process:
      </p>

      <h3 className="normalHeading">Purpose of BIS Certification</h3>
      <p className="simpleParagraph">
        The BIS certification process is structured by the Indian BIS to ensure
        products meet mandatory Indian standards for quality, safety, and
        performance.
      </p>

      <h3 className="normalHeading">Identify Applicable Standard</h3>
      <p className="simpleParagraph">
        Manufacturers must first identify the relevant Indian standard and
        determine the product category under the BIS scheme.
      </p>

      <h3 className="normalHeading">Application Submission</h3>
      <p className="simpleParagraph">
        Submit a formal application to the Indian BIS, including required
        documents such as:
      </p>
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Manufacturing flow chart",
              "Quality control plan",
              "Product test reports",
            ]}
            heading="Required Documents:"
          />
        </div>
      </div>

      <h3 className="normalHeading">BIS Registration & Product Testing</h3>
      <p className="simpleParagraph">
        Apply for BIS registration and get the product tested in BIS-approved
        laboratories. This step is mandatory under all BIS schemes, including
        ISI, CRS, FMCS, and what is Scheme X.
      </p>

      <h3 className="normalHeading">Factory Inspection</h3>
      <p className="simpleParagraph">
        The Indian BIS conducts a factory inspection to assess the production
        setup, quality control, and compliance with Indian standards.
      </p>

      <h3 className="normalHeading">Grant of BIS Certificate / BIS License</h3>
      <p className="simpleParagraph">
        After successful evaluation, the manufacturer is granted a BIS license
        (or BIS licence) and can use the ISI mark on the product.
      </p>
    </section>
  );
};

const CostSection = () => {
  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Cost
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">Cost of BIS Certification</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Cost Component
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Application Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                One-time, non-refundable fee depending on product type
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Testing Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Based on complexity; paid to BIS-recognized labs
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Annual License Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Paid annually to maintain BIS license
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Inspection/Factory Audit Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Charged if BIS officials visit factory (domestic or
                international travel extra)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Consultancy Charges (if applicable)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optional, for end-to-end compliance help from consultants
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const RoleSection = () => {
  return (
    <section id="role" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Role
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">
        What is the Role of Authorized Indian Representative (AIR)
      </h2>

      <p className="simpleParagraph">
        The role of the Authorized Indian Representative (AIR) is crucial in the
        BIS certification process for foreign manufacturers. As per Indian BIS
        regulations, companies located outside India must appoint an AIR to act
        as their official liaison with the BIS. The AIR is responsible for
        submitting applications, managing BIS registration, communicating with
        officials, and coordinating inspections or audits. They play a pivotal
        role in ensuring that the foreign manufacturer meets all Indian
        standards and complies with scheme-specific guidelines such as CRS,
        FMCS, or what is Scheme X. Without a valid AIR, the BIS certificate
        application cannot proceed. The AIR is also held accountable for
        post-certification compliance, including surveillance audits and renewal
        of the BIS licence. Appointing an experienced AIR can significantly
        streamline the BIS certification process and reduce approval delays.
        It’s essential that the AIR be an Indian citizen or entity with a
        physical address in India. This makes communication between foreign
        applicants and the Indian BIS transparent and efficient. In summary, the
        AIR acts as the official channel for ensuring that all certification
        steps—from testing to issuing the ISI mark—are completed without
        complications, making them an indispensable part of the BIS registration
        process.
      </p>
    </section>
  );
};

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Conclusion
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">BIS Certification Summary & Key Takeaways</h2>

      <p className="simpleParagraph">
        In conclusion, BIS certification is a legal and strategic necessity for
        manufacturers looking to access the Indian market. Issued by the Indian
        BIS, this certification guarantees that a product complies with
        established Indian standards for safety, performance, and quality.
        Whether it's through the ISI Mark Scheme, CRS, FMCS, or what is Scheme
        X, obtaining a BIS certificate enhances consumer trust and ensures
        product reliability. From electronics and construction materials to gold
        jewelry and eco-friendly products, BIS licence requirements span across
        multiple sectors. The presence of the ISI mark signals adherence to
        national regulations and serves as a mark of quality assurance. For
        foreign manufacturers, an Authorized Indian Representative (AIR) plays a
        crucial role in fulfilling compliance under the BIS certification
        process. While the cost and documentation may appear extensive, the
        long-term benefits of BIS registration far outweigh the initial
        investment. Legal access to India’s vast market, improved brand
        credibility, and reduced regulatory risks make the BIS licence
        indispensable. Whether you’re a domestic producer or a global exporter,
        aligning your products with Indian standards through proper BIS
        certification ensures business sustainability, consumer safety, and
        regulatory approval in one of the world's largest and most dynamic
        markets.
      </p>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
        What did you think of this content?
      </span>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
              />
            </svg>

            <span>It was helpful</span>
          </button>

          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
              />
            </svg>

            <span>It was not helpful</span>
          </button>
        </div>

        <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
          Last updated on Mar 19, 2025
        </p>
      </div>
    </section>
  );
};
