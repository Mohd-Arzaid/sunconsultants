import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import { BISCProductTable } from "@/components/manual/BISCertification";
import { Services } from "./Home";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Search } from "lucide-react";

const productsData = [
  { id: 1, product: "AMPLIFIERS WITH INPUT POWER 2000W AND ABOVE", isNumber: "IS 616:2017", date: "03 July 2013" },
  { id: 2, product: "AUTOMATIC DATA PROCESSING MACHINE", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 3, product: "ELECTRONIC CLOCKS WITH MAINS POWER", isNumber: "IS 302-2-26:2014", date: "03 July 2013" },
  { id: 4, product: "ELECTRONIC GAMES (VIDEO)", isNumber: "IS 616:2017", date: "03 July 2013" },
  { id: 5, product: "ELECTRONIC MUSICAL SYSTEMS WITH INPUT POWER 200W AND ABOVE", isNumber: "IS 616:2017", date: "03 July 2013" },
  { id: 6, product: "LAPTOP/NOTEBOOK/TABLET", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 7, product: "MICROWAVE OVENS", isNumber: "IS 302-2-25:2014", date: "03 July 2013" },
  { id: 8, product: "OPTICAL DISC PLAYERS WITH BUILT IN AMPLIFIERS OF INPUT POWER 200W AND ABOVE", isNumber: "IS 616:2017", date: "03 July 2013" },
  { id: 9, product: "PLASMA/LCD/LED TELEVISIONS OF SCREEN SIZE 32\"; AND ABOVE", isNumber: "IS 616:2017", date: "03 July 2013" },
  { id: 10, product: "PRINTERS, PLOTTERS", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 11, product: "SCANNERS", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 12, product: "SET TOP BOX", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 13, product: "TELEPHONE ANSWERING MACHINES", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 14, product: "VISUAL DISPLAY UNITS, VIDEOS MONITORS OF SCREEN SIZE 32\" AND ABOVE", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 15, product: "WIRELESS KEYBOARDS", isNumber: "IS 13252(Part 1):2010", date: "03 July 2013" },
  { id: 16, product: "CASH REGISTERS", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 17, product: "COPYING MACHINES/DUPLICATORS", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 18, product: "PASSPORT READER", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 19, product: "POINT OF SALE TERMINALS", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 20, product: "MAIL PROCESSING MACHINES/POSTAGE MACHINES/FRANKING MACHINES", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 21, product: "POWER BANKS FOR USE IN PORTABLE APPLICATIONS", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 22, product: "SMART CARD READER", isNumber: "IS 13252(Part 1):2010", date: "13 May 2015" },
  { id: 23, product: "MOBILE PHONES", isNumber: "IS 13252(Part 1):2010", date: "13 September 2015" },
  { id: 24, product: "SELF-BALLASTED LED LAMPS FOR GENERAL LIGHTING SERVICES", isNumber: "IS 16102(Part 1):2012", date: "13 September 2015" },
  { id: 25, product: "DC OR AC SUPPLIED ELECTRONIC CONTROLGEAR FOR LED MODULES", isNumber: "IS 15885(Part 2/Sec 13):2012", date: "01 December 2015" },
  { id: 26, product: "POWER ADAPTORS FOR AUDIO,VIDEO & SIMILAR ELECTRONIC APPARATUS", isNumber: "IS 616:2010", date: "01 December 2015" },
  { id: 27, product: "POWER ADAPTORS FOR IT EQUIPMENTS", isNumber: "IS 13252(Part 1):2010", date: "01 December 2015" },
  { id: 28, product: "FIXED GENERAL PURPOSE LED LUMINAIRES", isNumber: "IS 10322(Part 5/Sec 1):2012", date: "01 March 2016" },
  { id: 29, product: "UPS/INVERTORS OF RATING <= 5KVA", isNumber: "IS 16242(Part 1):2014", date: "01 March 2016" },
  { id: 30, product: "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 1 NICKEL SYSTEMS", isNumber: "IS 16046(Part 1): 2018", date: "01 June 2016" },
  { id: 31, product: "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 2 LITHIUM SYSTEMS", isNumber: "IS 16046(Part 2): 2018", date: "01 June 2016" },
  { id: 32, product: "INDIAN LANGUAGE SUPPORT FOR MOBILE PHONE HANDSETS", isNumber: "IS 16333 (Part 3) : 2022", date: "01 May 2018" },
  { id: 33, product: "Recessed LED Luminaries", isNumber: "IS 10322 (Part 5/Section 2) : 2012", date: "23 May 2018" },
  { id: 34, product: "LED Luminaires for Road and Street lighting", isNumber: "IS 10322 (Part 5/Section 3) : 2012", date: "23 May 2018" },
  { id: 35, product: "LED Flood Lights", isNumber: "IS 10322 (Part 5/Section 5) : 2013", date: "23 May 2018" },
  { id: 36, product: "LED Hand lamps", isNumber: "IS 10322 (Part 5/Section 6) : 2013", date: "23 May 2018" },
  { id: 37, product: "LED Lighting Chains", isNumber: "IS 10322 (Part 5/Section 7) : 2017", date: "23 May 2018" },
  { id: 38, product: "LED Luminaires for Emergency Lighting", isNumber: "IS 10322 (Part 5/Section 8) : 2013", date: "23 May 2018" },
  { id: 39, product: "UPS/Inverters of rating <= 10kVA", isNumber: "IS 16242 (Part 1) : 2014", date: "23 May 2018" },
  { id: 40, product: "Plasma/ LCD/LED Television of screen size up-to 32", isNumber: "IS 616 : 2017", date: "23 May 2018" },
  { id: 41, product: "Visual Display Units, Video Monitors of screen size upto 32", isNumber: "IS 13252 (Part 1) : 2010", date: "23 May 2018" },
  { id: 42, product: "CCTV Cameras/CCTV Recorders", isNumber: "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV", date: "23 May 2018" },
  { id: 43, product: "Adapters for household and similar electrical appliances", isNumber: "IS 302 (Part 1) : 2008", date: "23 May 2018" },
  { id: 44, product: "USB driven Barcode readers, barcode scanners, Iris scanners, Optical fingerprint scanners", isNumber: "IS 13252 (Part 1) : 2010", date: "23 May 2018" },
  { id: 45, product: "Smart watches", isNumber: "IS 13252 (Part 1) : 2010", date: "23 May 2018" },
  { id: 46, product: "Crystalline Silicon Terrestrial Photovoltaic (PV) modules (Si wafer based)", isNumber: "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004", date: "31 March 2019" },
  { id: 47, product: "Thin-Film Terrestrial Photovoltaic (PV) Modules (a-Si, CiGs and CdTe)", isNumber: "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004", date: "31 March 2019" },
  { id: 48, product: "Power converters for use in photovoltaic power system", isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011", date: "30 June 2021" },
  { id: 49, product: "Utility-Interconnected Photovoltaic inverters", isNumber: "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008", date: "30 June 2021" },
  { id: 50, product: "Storage battery", isNumber: "IS 16270 : 2014", date: "01 January 2019" },
  { id: 51, product: "Independent LED Modules for General Lighting", isNumber: "IS 16103 (Part 1) : 2012", date: "01 April 2021" },
  { id: 52, product: "Lighting Chain (Rope Lights)", isNumber: "IS 10322 (Part 5/Sec 9) : 2017", date: "01 April 2021" },
  { id: 53, product: "Keyboard", isNumber: "IS 13252 (Part 1) : 2010", date: "01 April 2021" },
  { id: 54, product: "Induction Stove", isNumber: "IS 302-2-6 : 2009", date: "01 April 2021" },
  { id: 55, product: "Automatic Teller Cash dispensing machines", isNumber: "IS 13252 (Part 1) : 2010", date: "01 April 2021" },
  { id: 56, product: "USB Type External Hard Disk Drive", isNumber: "IS 13252 (Part 1) : 2010", date: "01 April 2021" },
  { id: 57, product: "Wireless Headphone and Earphone", isNumber: "IS 616 : 2017", date: "01 April 2021" },
  { id: 58, product: "USB Type External Solid-State Storage Devices (above 256 GB capacity)", isNumber: "IS 13252 (Part 1) : 2010", date: "01 April 2021" },
  { id: 59, product: "Electronic Musical System with input power below 200 Watts", isNumber: "IS 616 : 2017", date: "01 April 2021" },
  { id: 60, product: "Standalone Switch Mode Power Supplies (SMPS) with output voltage 48V (max)", isNumber: "IS 13252 (Part 1) : 2010", date: "01 April 2021" },
  { id: 61, product: "Television other than Plasma/ LCD/LED TVs", isNumber: "IS 616 : 2017", date: "01 April 2021" },
  { id: 62, product: "Rice Cooker", isNumber: "IS 302-2-15 : 2009", date: "01 April 2021" },
  { id: 63, product: "Wireless Microphone", isNumber: "IS 616 : 2017", date: "01 October 2021" },
  { id: 64, product: "Digital Camera", isNumber: "IS 13252 (Part 1) : 2010", date: "01 October 2021" },
  { id: 65, product: "Video Camera", isNumber: "IS 616 : 2017", date: "01 October 2021" },
  { id: 66, product: "Webcam (Finished Product)", isNumber: "IS 616 : 2017", date: "01 October 2021" },
  { id: 67, product: "Smart Speakers (with and without Display)", isNumber: "IS 616 : 2017", date: "01 October 2021" },
  { id: 68, product: "Dimmers for LED products", isNumber: "IS 60669-2-1: 2008", date: "01 October 2021" },
  { id: 69, product: "Bluetooth Speakers", isNumber: "IS 616 : 2017", date: "01 October 2021" },
  { id: 70, product: "Ortho Phosphoric Acid", isNumber: "IS 798 : 2020", date: "12 December 2021" },
  { id: 71, product: "Polyphosphoric Acid", isNumber: "IS 17439:2020", date: "24 December 2021" },
  { id: 72, product: "Cotton Bales", isNumber: "IS 12171:2019", date: "03 March 2023" },
  { id: 73, product: "Trimethyl Phosphite Technical Grade", isNumber: "IS 17412:2020", date: "03 March 2023" },
  { id: 74, product: "Television Sets", isNumber: "IS 18112:2022", date: "26 April 2023" }
];

const CRSRegistration = () => {
  return (
    <>
      <BISCRSHero />
      <BISCRSIndex />
      <BISCRSContent />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CRSRegistration;

const BISCRSHero = () => {
  return (
    <main className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}

        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS CRS Registration
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Mandatory for electronic products to ensure safety & quality. Get
            BIS approval with expert assistance!
          </p>

          <div className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </main>
  );
};

const BISCRSIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Observe each section
  const SECTIONS = [
    "overview",
    "products",
    "eligibility",
    "documents",
    "process",
    "E-labellingSection",
    "support",
    "services"
  ];


  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase().replace(/\s+/g, "-"));
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
      const element = document.getElementById(section.toLowerCase().replace(/\s+/g, "-"));
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);


  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 sm:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
            {[
              "Overview",
              "Products",
              "Eligibility",
              "Documents",
              "Process",
              "ELabelling",
              "Support",
              "Services",
            ].map((item) => (
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
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {[
          "Overview",
          "Products",
          "Eligibility",
          "Documents",
          "Process",
          "ELabelling",
          "Support",
          "Services",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection ? "text-blue-900" : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BISCRSContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <BISCRSContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <Services />
      <CISProductTable />
      <ServiceFaq />
    </div>
  );
};

const CISProductTable = () => {
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
    <section className="w-full pb-12">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Products Under BIS CRS Registration
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          The following table lists products that require BIS CRS registration in India along with their applicable Indian Standard (IS) numbers and implementation dates.
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
                  Product
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS No.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Date of Implementation
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
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.date}
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

const ServiceFaq = () => {
  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What services do you offer for CDSCO compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                We offer comprehensive CDSCO regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for pharmaceuticals, medical devices, and
                cosmetics in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does the CDSCO approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                CDSCO approval timelines vary based on product category and
                application type. Typically, drug approvals take 6-12 months,
                medical device registrations 3-6 months, and cosmetic
                registrations 2-4 months. Our certifications work to expedite these
                timelines through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for CDSCO registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, stability data, clinical trial results (if
                applicable), Good Manufacturing Practice (GMP) certificates,
                Certificate of Pharmaceutical Product (CoPP), and various
                application forms specific to your product category. Our team
                assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you assist with clinical trial approvals in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for clinical trial
                applications in India, including protocol development, ethics
                committee submissions, CDSCO applications, site selection
                assistance, and regulatory compliance throughout the trial
                process. We also help navigate the New Drugs and Clinical Trials
                Rules, 2019.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the costs associated with CDSCO registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                CDSCO registration costs include official government fees (which
                vary by product type), testing fees, consultant fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements, with options
                for different service levels to fit various budgets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How do you handle post-approval regulatory requirements?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Our post-approval services include pharmacovigilance support,
                periodic safety update reports, variation applications, renewal
                submissions, compliance with labeling requirements, adverse
                event reporting, and ongoing regulatory intelligence to keep you
                informed of regulatory changes affecting your products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can you help with import licenses for pharmaceuticals and
                medical devices?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes, we specialize in obtaining Import Licenses (Form 10) for
                drugs and Registration Certificates for medical devices. Our
                services include preparing all necessary documentation,
                coordinating with Indian authorized agents, liaising with CDSCO,
                and handling post-approval compliance requirements for imported
                products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What experience does your consulting team have with CDSCO
                regulations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Our consulting team consists of regulatory experts with 10+
                years of experience in Indian pharmaceutical regulations. Team
                members include former regulatory professionals, pharmacists,
                and industry specialists who maintain close relationships with
                regulatory authorities and stay updated on the latest regulatory
                developments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How do recent regulatory changes affect pharmaceutical
                registrations in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Recent regulatory changes include the New Drugs and Clinical
                Trials Rules (2019), Medical Device Rules (2017), and ongoing
                updates to the Drugs and Cosmetics Act. These changes have
                streamlined some processes while adding new requirements for
                safety monitoring and quality control. Our certifications keep
                abreast of all changes and adjust strategies accordingly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you offer support for manufacturing facility inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes, we provide comprehensive support for CDSCO manufacturing
                facility inspections, including pre-inspection readiness
                assessments, gap analysis, preparation of required
                documentation, mock inspections, training of personnel, and
                assistance during actual inspections to ensure a successful
                outcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* <div className="w-[768px] mt-14  mx-auto">
          <h3 className="text-center font-geist text-[48px]  text-[#181818] leading-[48px] font-semibold  ">
            Have questions, feedback or anything to say?
          </h3>

          <div className="text-center mt-[16px] text-[20px] leading-[28px] font-geist text-[#52525b]">
            Email us at{" "}
            <span className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4">
              info@sunconsultants.co.in
            </span>{" "}
            or use one of the options below. We usually get back within a day or
            two.
          </div>

          <div className="flex items-center my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              or
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-x-6">
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="mailto:info@sunconsultants.co.in"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                </svg>
                <span className="sr-only">Email</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://www.github.com/suncertifications"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://x.com/suncertifications"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
                    className=""
                  ></path>
                </svg>
                <span className="sr-only">Twitter / X</span>
              </a>
              <a
                className="transition-colors underline-offset-[3.5px] break-words text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-brand hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 dark:focus-visible:outline-brand"
                href="https://www.linkedin.com/company/suncertifications"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <div></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-[441px]">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[24px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col ">
      <p className="font-semibold font-geist text-[20px]  text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[20px] gap-2 ">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className=" font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const BISCRSContentLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-col gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProductsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <EligibilitySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ELabellingSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <SupportSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ServicesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />

      </div>
    </div>
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
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5" />
            </svg>

            <span>It was helpful</span>
          </button>

          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5" />
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


const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal my-3 md:my-0">
        BIS CRS Registration Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        BIS CRS ensures product quality and safety compliance.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        BIS Stands for Bureau of Indian Standards and CRS stands for Compulsory
        Registration Scheme. CRS registration is a product registration scheme
        under BIS which was originally launched for Electronic goods under which
        later on Electrical and other types of goods also have been included.BIS
        is the implementation body for the quality control orders known as
        Gazette notifications released by various ministries of government of
        India. <br className="hidden md:block" />
        <br className="hidden md:block" />
        government of India. First quality control order for CRS certification
        was released for implementation in the year 2012 and since then the
        products have been added in a phase-wise manner in this scheme over the
        years. After the recent notifications more than 80 products under
        various Indian Standards are covered under BIS CRS registration
        procedure.
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="flex flex-col scroll-mt-20">
      {/* Products */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Products
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        Compulsory Registration Scheme Products
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        BIS CRS is mandatory for listed products. Check BIS for details.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        BIS CRS certification can only be taken in case of mandatory products,
        unlike ISI mark it cannot be taken on products voluntarily for which no
        QCO's have been released. Products covered under CRS scheme can be
        accessed from the link below to BIS{" "}
        <Link
          to="https://www.crsbis.in/BIS/products-bis.do"
          className="text-blue-400 hover:text-blue-600 transition-colors"
        >
          website on this link
        </Link>
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        BIS CRS Registration Eligibility
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        BIS CRS is for manufacturers; foreign applicants need an AIR with a
        BIS-approved test report.
      </p>

      {/* Content */}
      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "The applicant must be a manufacturer, either Indian or foreign.",
              "For foreign manufacturers, an Authorized Indian Representative (AIR) is required, which can be their own branch office or an authorized company.",
              "A test report from a BIS-approved laboratory is required as per the applicable Indian Standard (IS).",
            ]}
            heading="Below are the eligibility criterias for applying for CRS registration :"
          />
        </div>
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        Required Documents for BIS CRS
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        CRS certification needs address proof, BIS test report, undertakings,
        and fee receipt.
      </p>

      {/* Content */}
      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Address proof of the manufacturer.",
              "Test report from a BIS-recognized test lab.",
              "Undertakings as per BIS formats.",
              "Trademark certificate (if the brand is registered).",
              "Agreement between the foreign manufacturer and AIR (in case of import).",
              "Affidavit in the applicable format.",
              "Fee receipt, etc.",
            ]}
            heading="The following documents are required for obtaining of CRS certification :"
          />
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        CRS Registration Process
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        BIS CRS registration takes 4 weeks, costs ₹53,000+GST, and is valid for
        2 years.
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Getting the product tested as per Indian Standard (IS) from a BIS-approved laboratory.",
            "Preparation of documents as per BIS guidelines.",
            "Payment of requisite fees as per the fee structure.",
            "Filing of the online application.",
            "Clearing of queries if raised by the department.",
            "Grant of registration number.",
            "Mentioning the registration number along with Indian Standard and BIS logo.",
          ]}
          heading="Obtaining a BIS CRS registration certificate is completely an online procedure. The steps involved in the same are as follows:"
        />
      </div>

      <div className="mt-[24px] md:mt-[46px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Timeline
        </span>
        The certificate can be obtained in approx 4 weeks from the date of
        application.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Government Fees: INR 53,000 + GST@18% per report (INR 20,000 + GST@18% extra for every additional report in one application, or as applicable case to case).",
            "Testing Charges: Approx INR 10,000 - 20,000 + GST@18% (Depends on the product to be tested).",
          ]}
          heading="Fees Structure:"
        />
      </div>

      <div className="mt-[24px] md:mt-[46px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Validity
        </span>
        Initially CRS certificate is granted for 2 years and after that it can
        be renewed upto 5 years by paying the requisite fee online.
      </div>
    </section>
  );
};

const ELabellingSection = () => {
  return (
    <section id="E-labellingSection" className="flex flex-col scroll-mt-20">
      {/*E-Labelling*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          E-Labelling
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        BIS CRS E-Labelling Guidelines
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        E-labelling needs a physical label, secure compliance info, and easy
        user access as per BIS guidelines.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Devices must have a physical label on packaging at import, sale, or distribution. Bulk devices can use a removable adhesive label.",
            "No special tools or accessories (e.g., SIM installation) should be required to access the e-label.",
            "Compliance information must be securely stored in firmware/software, preventing third-party modifications.",
            "Users must access the e-label within four menu steps, without special codes or permissions.",
            "Access instructions should be included in the user manual, packaging insert, or product website.",
            "Regulatory information must still be provided on packaging/user manuals, even if displayed electronically.",
            "Digital user manuals (CD, online) can also include the e-label.",
            "The 'Standard Mark' must follow BIS guidelines (CMD 3/8:1/6975, dated Dec 3, 2015).",
          ]}
          heading="The requirements for e-labelling are as given below:"
        />
      </div>
    </section>
  );
};

const SupportSection = () => {
  return (
    <section id="support" className="flex flex-col scroll-mt-20">
      {/* Support */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Support
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        Sun certifications: BIS CRS Expert
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        Sun certifications & Engineers ensure a hassle-free BIS CRS registration
        process.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        From collection of documents to getting the final registration / license
        is an exhaustive and tedious procedure, and requires technical know-how
        and experience, this is exactly where Sun Certifications India come
        into the picture.With over 10 years of experience in this field and
        after providing assistance to numerous manufacturers and importers , we
        can help you in smoothening of this process, by complete hand-holding
        solution, right from the beginning of the procedure to the grant of
        registration/license. procedure.
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="flex flex-col scroll-mt-20">
      {/*Services*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Services
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        Scope of Work: Sun certifications & Engineers
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[14px] md:text-[20px] text-[#131316]">
        Sun certifications & Engineers ensure hassle-free BIS CRS registration and
        compliance.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Preparation of documents as per BIS guidelines.",
            "Submission of application to the department.",
            "Clearing queries from BIS (if any).",
            "Follow-up with the department for grant of license.",
            "Follow-up with the test lab for releasing test reports as per IS.",
            "Checking if the manufacturer's labels comply with BIS guidelines.",
          ]}
          heading="BIS CRS Registration Process by Sun certifications & Engineers"
        />
      </div>
    </section>
  );
};
