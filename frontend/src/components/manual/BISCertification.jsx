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
import { Services } from "@/pages/Home";

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
        <meta
          property="og:site_name"
          content="Sun Certifications India"
        />
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
  // Cement (any variety of cement manufactured or sold in India)
  { id: 1, isNumber: "IS 12330", product: "Sulphate Resisting Portland Cement", notificationText: "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003", notificationLink: "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf" },
  { id: 2, isNumber: "IS 12600", product: "Low heat Portland Cement", notificationText: "", notificationLink: "" },
  { id: 3, isNumber: "IS 1489 (Part 1)", product: "Portland Pozzolana Cement-Part1 Fly-ash based", notificationText: "", notificationLink: "" },
  { id: 4, isNumber: "IS 1489 (Part 2)", product: "Portland Pozzolana Cement-Part 2 Calcined clay based", notificationText: "", notificationLink: "" },
  { id: 5, isNumber: "IS 269", product: "Ordinary Portland Cement", notificationText: "", notificationLink: "" },
  { id: 6, isNumber: "IS 3466", product: "Masonry Cement", notificationText: "", notificationLink: "" },
  { id: 7, isNumber: "IS 455", product: "Portland Slag Cement", notificationText: "", notificationLink: "" },
  { id: 8, isNumber: "IS 6452", product: "High Alumina Cement for Structural use", notificationText: "", notificationLink: "" },
  { id: 9, isNumber: "IS 6909", product: "Super sulphated cement", notificationText: "", notificationLink: "" },
  { id: 10, isNumber: "IS 8041", product: "Rapid hardening Portland cement", notificationText: "", notificationLink: "" },
  { id: 11, isNumber: "IS 8042", product: "White Portland Cement", notificationText: "", notificationLink: "" },
  { id: 12, isNumber: "IS 8043", product: "Hydrophobic Portland Cement", notificationText: "", notificationLink: "" },
  { id: 13, isNumber: "IS 8229", product: "Oil well Cement", notificationText: "", notificationLink: "" },
  { id: 14, isNumber: "IS 16415: 2015", product: "Composite Cement- Specification.", notificationText: "", notificationLink: "" },
  { id: 15, isNumber: "IS 16993: 2018", product: "Microfine Ordinary Portland Cement- Specification.", notificationText: "", notificationLink: "" },
  { id: 16, isNumber: "IS 15895: 2018", product: "High Alumina Refractory Cement.", notificationText: "", notificationLink: "" },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  { id: 17, isNumber: "IS 12640 (Part 1)", product: "Residual current operated circuit breakers for house hold and similar uses-Part 1 Circuit breakers without integral overcurrent protection (RCCBs)", notificationText: "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010", notificationLink: "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf" },
  { id: 18, isNumber: "IS 12640 (Part 2)", product: "Residual current operated circuit breakers for household and similar uses-Part 2 Circuit breakers with integral overcurrent protection(RCVOs)", notificationText: "", notificationLink: "" },
  { id: 19, isNumber: "IS 13010", product: "AC watt-hour meters, class 0.5, 1 & 2", notificationText: "", notificationLink: "" },
  { id: 20, isNumber: "IS 13779", product: "AC static watt-hour meters, class 1 & 2", notificationText: "", notificationLink: "" },
  { id: 21, isNumber: "IS 14697", product: "AC static transformer operated watt-hour and VAR-hour meters, class 0.2S & 0.5S", notificationText: "", notificationLink: "" },
  { id: 22, isNumber: "IS 15111 (Part 1 & 2)", product: "Self Ballasted Lamps for General Lighting Services – Part 1 : Safety Requirements & Part 2 : Performance Requirements", notificationText: "", notificationLink: "" },
  { id: 23, isNumber: "IS 302 (Part 2/Sec 3)", product: "Safety of household and similar electrical appliances – Electric iron", notificationText: "", notificationLink: "" },
  { id: 24, isNumber: "IS 302 (Part 2/Sec 201)", product: "Safety of household and similar electrical appliances– Electric immersion water-heaters", notificationText: "", notificationLink: "" },
  { id: 25, isNumber: "IS 302 (Part 2/Sec 202)", product: "Safety of household and similar electrical appliances –Electric stoves", notificationText: "", notificationLink: "" },
  { id: 26, isNumber: "IS 302 (Part 2/Sec 30)", product: "Safety of household and similar electrical appliances-Room heaters", notificationText: "", notificationLink: "" },
  { id: 27, isNumber: "IS 3854", product: "Switches for domestic and similar purposes", notificationText: "", notificationLink: "" },
  { id: 28, isNumber: "IS 418", product: "Tungsten filament general service electric lamps (upto100 W )", notificationText: "", notificationLink: "" },
  { id: 29, isNumber: "IS 694", product: "PVC insulated cables for working voltages up to and including 1100V", notificationText: "", notificationLink: "" },
  { id: 30, isNumber: "IS 8828", product: "Electrical Accessories-Circuit breakers for overcurrent protection for household and similar installations", notificationText: "", notificationLink: "" },
  { id: 31, isNumber: "IS 9968 (Part 1)", product: "Elastomer insulated cables (Part.1): For working voltages up to and including1100 V", notificationText: "", notificationLink: "" },

  // Batteries
  { id: 32, isNumber: "IS 8144", product: "Multi-Purpose dry batteries", notificationText: "3. SO 516(E), dated 25th May 1987", notificationLink: "" },

  // Food & Related Products (De-notified from compulsory BIS certification)
  { id: 33, isNumber: "IS 15757", product: "Follow-up formula –complimentary foods", notificationText: "", notificationLink: "" },
  { id: 34, isNumber: "IS 11536", product: "Processed cereal based complementary foods", notificationText: "", notificationLink: "" },
  { id: 35, isNumber: "IS 1165", product: "Milk-powder", notificationText: "", notificationLink: "" },
  { id: 36, isNumber: "IS 1166", product: "Condensed milk, partly skimmed and skimmed condensed milk", notificationText: "", notificationLink: "" },
  { id: 37, isNumber: "IS 12176", product: "Sweetened ultra high temperature treated condensed milk", notificationText: "", notificationLink: "" },
  { id: 38, isNumber: "IS 13334 (Part 1)", product: "Skimmed milk-powder, standard grade", notificationText: "", notificationLink: "" },
  { id: 39, isNumber: "IS 13334 (Part 2)", product: "Skimmed milk-powder, extra grade", notificationText: "", notificationLink: "" },
  { id: 40, isNumber: "IS 13428", product: "Packaged Natural Mineral Water", notificationText: "", notificationLink: "" },
  { id: 41, isNumber: "IS 14433", product: "Infant milk substitutes", notificationText: "", notificationLink: "" },
  { id: 42, isNumber: "IS 17945: 2022", product: "Food for Special Medical Purpose intended for Infants", notificationText: "", notificationLink: "" },

  // Feeding Bottles
  { id: 43, isNumber: "IS 14625", product: "Plastic Feeding Bottles", notificationText: "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992", notificationLink: "" },
  { id: 44, isNumber: "IS 5168", product: "Glass Feeding Bottles", notificationText: "", notificationLink: "" },

  // Oil Pressure Stoves
  { id: 45, isNumber: "IS 10109", product: "Oil pressure stove, offset burner type", notificationText: "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997", notificationLink: "" },
  { id: 46, isNumber: "IS 2787", product: "Multi-burner oil pressure stoves", notificationText: "", notificationLink: "" },
  { id: 47, isNumber: "IS 1342", product: "Oil pressure stoves", notificationText: "", notificationLink: "" },

  // Automobile Accessories
  { id: 48, isNumber: "IS 13098", product: "Automotive vehicles –Tubes for pneumatic tyres", notificationText: "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010", notificationLink: "" },
  { id: 49, isNumber: "IS 15627", product: "Automotive vehicles– Pneumatic tyres for two and three-wheeled motor vehicles", notificationText: "", notificationLink: "" },
  { id: 50, isNumber: "IS 15633", product: "Automotive vehicles-Pneumatic tyres for passenger car vehicles– Diagonal and radial ply", notificationText: "", notificationLink: "" },
  { id: 51, isNumber: "IS 15636", product: "Automotive vehicles- Pneumatic tyres for commercial vehicles-Diagonal and radial ply", notificationText: "", notificationLink: "" },

  // Cylinder, Valves and Regulator
  { id: 52, isNumber: "IS 14899", product: "Liquefied petroleum gas containers for automotive use", notificationText: "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016", notificationLink: "" },
  { id: 53, isNumber: "IS 15100", product: "Multifunction valve assembly for permanently fixed liquefied petroleum gas (LPG) containers for automotive use", notificationText: "", notificationLink: "" },
  { id: 54, isNumber: "IS 3196 (Part 4)", product: "Welded low carbon steel cylinders exceeding 5 litre Water capacity for low pressure liquefiable gases Part 4 cylinders for toxic and corrosive gases", notificationText: "", notificationLink: "" },
  { id: 55, isNumber: "IS 3196 (Part 1)", product: "Welded low carbon steel gas cylinder exceeding 5 litre water capacity for low pressure liquefiable gases Part 1 cylinders for liquefied petroleum gas (LPG)", notificationText: "", notificationLink: "" },
  { id: 56, isNumber: "IS 3196 (Part 2)", product: "Welded low carbon steel gas cylinder exceeding 5-litre water capacity for low pressure liquefiable gases Part 2 cylinders for liquefiable gases other than LPG.", notificationText: "", notificationLink: "" },
  { id: 57, isNumber: "IS 3224", product: "Valve fittings for compressed gas cylinder excluding liquefied petroleum gas cylinders", notificationText: "", notificationLink: "" },
  { id: 58, isNumber: "IS 3745", product: "Yoke Type Valve Connection for Small Medical Gas Cylinders", notificationText: "", notificationLink: "" },
  { id: 59, isNumber: "IS 7142", product: "Welded low carbon steel cylinders for low pressure liquefiable gases not exceeding 5 litre water capacity", notificationText: "", notificationLink: "" },
  { id: 60, isNumber: "IS 7285 (Part 1)", product: "Refillable Seamless steel gas cylinders Part1 Normalized steel cylinders", notificationText: "", notificationLink: "" },
  { id: 61, isNumber: "IS 7285 (Part 2)", product: "Refillable Seamless steel gas cylinders Part 2 Quenched and tempered steel cylinders with tensile strength less than 1100 MPa (112 kgf/mm2)", notificationText: "", notificationLink: "" }
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
                        {item.notificationText.split("\n").map((line, idx) => (
                          idx === 1 && item.notificationLink ? (
                            <div key={idx}>
                              <a href={item.notificationLink} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
                                {line}
                              </a>
                            </div>
                          ) : (
                            <div key={idx}>{line}</div>
                          )
                        ))}
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

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Indian BIS License
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS Registration
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Certification ensures product quality and safety in India. It is
            mandatory for many products and requires testing, documentation, and
            approval.
          </p>

          <nav className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
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
    "Benefits",
    "Schemes",
    "Types",
    "Documents",
    "Procedure",
    "Process",
    "Cost",
    "Certifications",
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

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (entry.target.id === "faqs") {
              setActiveSection("FAQs");
            } else {
              const sectionName =
                entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1);
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

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
      className={`sticky  top-0 sm:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

      <Services />

      <BISCProductTable />
      <ServiceFaq />
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
          Frequently Asked Questions
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
                What services do you offer for BIS compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                We offer comprehensive BIS regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for various products in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does the BIS approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS approval timelines vary based on product category and
                application type. Typically, it takes 4-6 months for standard
                products. Our Certifications work to expedite these timelines
                through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for BIS registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, test reports, quality control documents, and
                various application forms specific to your product category. Our
                team assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you assist with factory inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for BIS factory inspections,
                including pre-inspection readiness assessments, gap analysis,
                preparation of required documentation, mock inspections, and
                assistance during actual inspections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the costs associated with BIS registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS registration costs include official government fees (which
                vary by product type), testing fees, Certifications fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements.
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

        {/* Benefits Section */}
        <BenefitsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Schemes Section */}
        <SchemesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Types  Section */}
        <TypesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Documents  Section */}
        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*procedure  Section */}
        <ProcedureSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CertificationsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />
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
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </div>
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
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </div>
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

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Full Form & Meaning
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures product quality, safety, and compliance in India.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS&apos;s full form is{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Bureau of Indian Standard,
        </span>{" "}
        an Indian National Standard Body established in 1986. It was created to
        harmonize the quality of consumer and industrial products being sold in
        India . BIS Certification or BIS License on a product ensures its
        quality and that the product is as per BIS Standardswhich are set by the
        Indian government to meet international quality standards. To obtain BIS
        certificate in India the manufacturer must first identify in which
        scheme of BIS the product is falling and then follow the procedure to
        obtain the BIS Certificate so that their products can be sold in India.{" "}
        <br />
        <br />
        BIS product certification ensures integrity, trustworthiness, and
        reliability of any product.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          To apply for BIS certification the applicant has to be a manufacturer,{" "}
        </span>{" "}
        either of Indian or foreign origin. In some cases BIS registration can
        be optional or mandatory depending upon the nature of the product and
        the BIS scheme in which it lies.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "It protects the general public's health",
              "It offers quality control at the manufacturer's end",
              "It safeguards consumers from dangerous goods",
              "It increases consumer trust on the standard marked products",
            ]}
            heading="Why BIS Certification is Recommended?"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={BISSRimg}
            alt="BIS Certification Process"
            loading="lazy"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
          ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
          hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
          "
          />
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="flex flex-col scroll-mt-20">
      {/* Benefits */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Benefits
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Benefits
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures quality, safety, market edge, and global compliance.
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Ensures high levels of quality because goods with a BIS registration are produced per BIS standards and are tested during the process.",
              "If the products are marked with BIS license number, it ensures that no harmful chemicals / components are being used in consumer products.",
              "Gives market edge over the manufacturers who are not certified.",
              "Helps Indian manufacturers to export the product, due to their products being developed and tested as per ISS (Indian Standard Specifications) which are at par with international standards.",
              "Enables Foreign manufacturers to understand requirements of the Indian market and standards so that they can develop the products according to the BIS product certification regulations.",
            ]}
            heading="BIS Certification: Quality, Safety & Market Advantage"
          />
        </div>
      </div>
    </section>
  );
};

const SchemesSection = () => {
  return (
    <section id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes  */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Schemes
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Schemes under the purview of BIS are as follows:
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "BIS License for Indian manufacturers (For obtaining BIS certification on electrical, Metal, Industrial, and other types of products.)",
              "BIS License for Foreign Manufacturers / Indian Importers under FMCS (For obtaining BIS License on electrical, Metal, Industrial, and other types of products.)",
              "BIS Certificate under Compulsory Registration Scheme - CRS (For obtaining BIS registration for electronic products)",
              "Recognition of Hallmarking Centres",
              "Hallmark for all types of gold and silver jewellery",
              "ECO Mark Certification",
              "BIS Laboratory Recognition Scheme (LRS)",
              "Management System Certification Scheme (MSCS)",
              "Development of BIS Standards for new products.",
            ]}
            heading="Types of BIS Certification Schemes"
          />
        </div>

        {/* Image */}
      </div>
    </section>
  );
};

const TypesSection = () => {
  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* types */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          types
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Schemes Explained
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        1. BIS License for Indian manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certification or ISI Mark is granted to{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Indian Manufacturers under schedule II and scheme I of BIS
        </span>{" "}
        ISI Mark is mandatory for 650+ products under the Product Certification
        Scheme. Over 40,000 manufacturers have BIS certification for steel,
        glass, footwear, toys, electronics, and more.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS License is initially granted for 1 year and after that it can be
          renewed from 1-5 years,
        </span>{" "}
        by payment of the requisite fees. To check the products that require
        mandatory BIS certification for Indian manufacturers.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        2. BIS Licence for Foreign Manufacturers / Indian Importers under FMCS:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        FMCS Standards for Foreign Manufacturer Certification Scheme, under this
        scheme{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          ISI Mark Certification is granted to manufacturers based out of India
        </span>{" "}
        Governed by the BIS Act 2016, it allows manufacturers (not importers) to
        export to India. Importers can be Authorized Indian Representatives
        (AIR). Over 1,850 licenses granted since 2000.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        3. BIS Certificate under Compulsory Registration Scheme ( CRS ) for
        Indian and Foreign Manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Most of the electronic products{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          like mobile phones, adaptors, televisions, li-ion batteries, UPS, LED
          bulbs, etc
        </span>{" "}
        require BIS registration under the CRS scheme. In which, the product has
        to be tested as per the BIS standards and the statutory documents of the
        manufacturer have to be filed along with the application, once the
        registration is granted R.no. is generated which has to be mentioned on
        the products that are registered with BIS.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        4. Recognition of Hallmarking Centres
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All the gold and silver jewellery sold in India must have{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          hallmark certification from BIS, and hallmark is grante
        </span>{" "}
        after the product is tested in a BIS approved Hallmarking centre,
        therefore it is the duty of BIS to recognize hallmarking centres that
        can test as per the BIS standards.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        5. Hallmark for all types of gold and silver jewellery
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS formulates standards as per the international norms according to
        which{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          all types of gold and silver jewellery must be tested.
        </span>{" "}
        Hallmark helps the consumer to ensure the purity of product that they
        are buying and also helps them to know what they are paying for.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        6. ECO Mark Certification
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The products carrying ECO mark by BIS ensures that they are
        environmentally safe and are not polluting earth.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          The major product heads covered under this BIS registration schem
        </span>{" "}
        are Includes paints, beverages, infant foods, cosmetics, batteries,
        edible oils, electronics, leather, fire extinguishers, and food
        additives.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        7. BIS Laboratory Recognition Scheme ( LRS )
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS-approved labs test products to ensure compliance with BIS standards
        for certification. quality.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS certification is granted after the test report from BIS laboratory
          is submitted
        </span>{" "}
        to the concerned branch office or headquarters, however the case maybe.
        Laboratories that require BIS certification must have prior approval
        from NABL.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        8. Management System Certification Scheme:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This scheme for BIS Certification of management systems{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          was started in the year 1991,
        </span>{" "}
        and BIS, India&apos;s sole certification body under the Parliament Act,
        grants certifications from its Delhi headquarters.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        9. Development of BIS Standards for new products.
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification requires product testing as per specific Indian
        Standards set by the Bureau of Indian Standards. Standards ( BIS. )
        Currently,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          there are more than 20,000 BIS Standards developed by various
          sectional
        </span>{" "}
        there are more than 20,000 BIS Standards developed by various sectional
        committees incorporated within the department.
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

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        ISI Mark BIS Certification Documents
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          ISI: GST, MSME, test report.&nbsp;&nbsp;&nbsp;&nbsp;CRS: GST, brand,
          test report.
        </p>
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "GST certificate of the applicant",
              "MSME certificate (if applicable)",
              "List of machinery used for manufacturing the specific product for which BIS Certification is applied for.",
              "List of raw materials used for manufacturing.",
              "List of instruments in the in-house test laboratory.",
              "Plant layout of the factory",
              "Test report from BIS' lab or OSL (Outside privately owned laboratories appointed by BIS as per BIS standards.)",
              "Calibration certificates, etc.",
            ]}
            heading="For BIS license of manufacturers the following documents are a must:"
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To apply for a BIS certificate, the manufacturer must visit
      </div>
    </section>
  );
};

const ProcedureSection = () => {
  return (
    <section id="procedure" className="flex flex-col scroll-mt-20">
      {/* Procedure*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Identifying the Indian Standard (IS) applicable on the product.",
                "Setting up of in-house lab as per the standard.",
                "Creation of BIS portal (in case of Indian manufacturers).",
                "Getting the product tested as per ISS (Indian Standard Specifications).",
                "Filing of BIS application with test report and other requisite documents.",
                "Clearing of queries (if any) raised by the department.",
                "Audit of the factory by a BIS officer allotted to the firm.",
                "Sample testing in the in-house test lab.",
                "Sealing of samples for re-verification by the officer during the audit. (The applicant does not have to wait for this test report, as the test report is already submitted during the application. This sample is just for re-verification purposes.)",
                "Completion of audit.",
                "Grant of BIS Licence.",
              ]}
              heading="BIS Certification Process for Manufacturers"
            />
          </div>
        </div>

        <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Note
          </span>
          After grant of BIS certificate, there are 4 surveillances conducted
          annually on all manufacturers, the details are as below: <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            A
          </span>
          Random market sample testing in done 2 times in a year ( every 6
          months ), <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            B
          </span>
          Random factory surveillances are conducted twice to check if all the
          formalities are met by the licensee ( every 6 months).
        </div>
      </div>
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

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Creation of BIS portal.",
                "Testing of samples as per BIS' allocated Indian Standard (IS).",
                "Preparation of application documents.",
                "Filing of BIS application.",
                "Clearing of queries (if any).",
                "Grant of BIS registration.",
              ]}
              heading="BIS/CRS Registration Process for Manufacturers"
            />
          </div>
        </div>
      </div>
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

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Cost Or BIS License Fees.
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Starts from ₹1,000 + testing & audit charges.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certificate fees depends on various factors such as product, Indian
        Standard ( IS ) applicable, Nature of the manufacturer ( Indian or
        overseas ), etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Government fees: INR 53,000 + GST @18% per test report (Additional INR 20,000 for each test report in one application).",
              "Testing charges: As per actuals (vary based on product and lab).",
            ]}
            heading="Fee structure for BIS registration ( CRS ):"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        Certain discounts on Govt.fee are provided to companies registered under
        the MSME act.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Application fee: INR 1,000 + GST @18%",
              "License fee: INR 1,000 + GST @18%",
              "Audit charges: INR 7,000 per man-day + GST @18%",
              "Testing charges: As per actuals (vary based on product and lab)",
              "Minimum Marking Fee: As per actuals (varies according to the product)",
            ]}
            heading="Fee Structure for BIS Certification or BIS licence:"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification cost in case of Foreign manufacturers has certain
        other charges that are payable, please contact us for more details for
        the complete schedule of charges to obtain BIS License under FMCS.
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="flex flex-col scroll-mt-20">
      {/* Certifications*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Certifications
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Role of BIS Certifications in Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Guides manufacturers through BIS certification for hassle-free approval.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certifications help you to understand all the requirements that are to
        be fulfilled by the manufacturers lawfully, and completely hand-holds
        you in the BIS certification process right from the start till the BIS
        license is granted. <br />
        <br />
        We at Sun Certifications & Engineers ( Best BIS Certifications in India ),
        being in this field for over a decade now, have the greatest possible
        knowledge, resources, manpower and technical know-how to assist our
        clients , and ensure them a feeling of cake-walk while going through the
        process to obtain BIS certificate.
        <br />
        <br />
        For detailed details on all of the above you can contact our experts on
        the details below:
      </div>
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
