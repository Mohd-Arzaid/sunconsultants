import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

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
import Services from "../components/manual/Services";
import AboutAuthor from "../components/common/AboutAuthor";
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
  {
    id: 1,
    product: "AMPLIFIERS WITH INPUT POWER 2000W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 2,
    product: "AUTOMATIC DATA PROCESSING MACHINE",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 3,
    product: "ELECTRONIC CLOCKS WITH MAINS POWER",
    isNumber: "IS 302-2-26:2014",
    date: "03 July 2013",
  },
  {
    id: 4,
    product: "ELECTRONIC GAMES (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 5,
    product: "ELECTRONIC MUSICAL SYSTEMS WITH INPUT POWER 200W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 6,
    product: "LAPTOP/NOTEBOOK/TABLET",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 7,
    product: "MICROWAVE OVENS",
    isNumber: "IS 302-2-25:2014",
    date: "03 July 2013",
  },
  {
    id: 8,
    product:
      "OPTICAL DISC PLAYERS WITH BUILT IN AMPLIFIERS OF INPUT POWER 200W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 9,
    product: 'PLASMA/LCD/LED TELEVISIONS OF SCREEN SIZE 32"; AND ABOVE',
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 10,
    product: "PRINTERS, PLOTTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 11,
    product: "SCANNERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 12,
    product: "SET TOP BOX",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 13,
    product: "TELEPHONE ANSWERING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 14,
    product:
      'VISUAL DISPLAY UNITS, VIDEOS MONITORS OF SCREEN SIZE 32" AND ABOVE',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 15,
    product: "WIRELESS KEYBOARDS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 16,
    product: "CASH REGISTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 17,
    product: "COPYING MACHINES/DUPLICATORS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 18,
    product: "PASSPORT READER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 19,
    product: "POINT OF SALE TERMINALS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 20,
    product: "MAIL PROCESSING MACHINES/POSTAGE MACHINES/FRANKING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 21,
    product: "POWER BANKS FOR USE IN PORTABLE APPLICATIONS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 22,
    product: "SMART CARD READER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 23,
    product: "MOBILE PHONES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "SELF-BALLASTED LED LAMPS FOR GENERAL LIGHTING SERVICES",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "DC OR AC SUPPLIED ELECTRONIC CONTROLGEAR FOR LED MODULES",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 December 2015",
  },
  {
    id: 26,
    product: "POWER ADAPTORS FOR AUDIO,VIDEO & SIMILAR ELECTRONIC APPARATUS",
    isNumber: "IS 616:2010",
    date: "01 December 2015",
  },
  {
    id: 27,
    product: "POWER ADAPTORS FOR IT EQUIPMENTS",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 December 2015",
  },
  {
    id: 28,
    product: "FIXED GENERAL PURPOSE LED LUMINAIRES",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 March 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTORS OF RATING <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 March 2016",
  },
  {
    id: 30,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 1 NICKEL SYSTEMS",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 June 2016",
  },
  {
    id: 31,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 2 LITHIUM SYSTEMS",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 June 2016",
  },
  {
    id: 32,
    product: "INDIAN LANGUAGE SUPPORT FOR MOBILE PHONE HANDSETS",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 May 2018",
  },
  {
    id: 33,
    product: "Recessed LED Luminaries",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 May 2018",
  },
  {
    id: 34,
    product: "LED Luminaires for Road and Street lighting",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 May 2018",
  },
  {
    id: 35,
    product: "LED Flood Lights",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 May 2018",
  },
  {
    id: 36,
    product: "LED Hand lamps",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 May 2018",
  },
  {
    id: 37,
    product: "LED Lighting Chains",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 May 2018",
  },
  {
    id: 38,
    product: "LED Luminaires for Emergency Lighting",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 May 2018",
  },
  {
    id: 39,
    product: "UPS/Inverters of rating <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 May 2018",
  },
  {
    id: 40,
    product: "Plasma/ LCD/LED Television of screen size up-to 32",
    isNumber: "IS 616 : 2017",
    date: "23 May 2018",
  },
  {
    id: 41,
    product: "Visual Display Units, Video Monitors of screen size upto 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 42,
    product: "CCTV Cameras/CCTV Recorders",
    isNumber:
      "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
    date: "23 May 2018",
  },
  {
    id: 43,
    product: "Adapters for household and similar electrical appliances",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 May 2018",
  },
  {
    id: 44,
    product:
      "USB driven Barcode readers, barcode scanners, Iris scanners, Optical fingerprint scanners",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 45,
    product: "Smart watches",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 46,
    product:
      "Crystalline Silicon Terrestrial Photovoltaic (PV) modules (Si wafer based)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 47,
    product:
      "Thin-Film Terrestrial Photovoltaic (PV) Modules (a-Si, CiGs and CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 48,
    product: "Power converters for use in photovoltaic power system",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 June 2021",
  },
  {
    id: 49,
    product: "Utility-Interconnected Photovoltaic inverters",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 June 2021",
  },
  {
    id: 50,
    product: "Storage battery",
    isNumber: "IS 16270 : 2014",
    date: "01 January 2019",
  },
  {
    id: 51,
    product: "Independent LED Modules for General Lighting",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Lighting Chain (Rope Lights)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Keyboard",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Induction Stove",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Automatic Teller Cash dispensing machines",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "USB Type External Hard Disk Drive",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Wireless Headphone and Earphone",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product:
      "USB Type External Solid-State Storage Devices (above 256 GB capacity)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Electronic Musical System with input power below 200 Watts",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product:
      "Standalone Switch Mode Power Supplies (SMPS) with output voltage 48V (max)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Television other than Plasma/ LCD/LED TVs",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Rice Cooker",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Wireless Microphone",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 64,
    product: "Digital Camera",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 October 2021",
  },
  {
    id: 65,
    product: "Video Camera",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 66,
    product: "Webcam (Finished Product)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 67,
    product: "Smart Speakers (with and without Display)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 68,
    product: "Dimmers for LED products",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 October 2021",
  },
  {
    id: 69,
    product: "Bluetooth Speakers",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 70,
    product: "Ortho Phosphoric Acid",
    isNumber: "IS 798 : 2020",
    date: "12 December 2021",
  },
  {
    id: 71,
    product: "Polyphosphoric Acid",
    isNumber: "IS 17439:2020",
    date: "24 December 2021",
  },
  {
    id: 72,
    product: "Cotton Bales",
    isNumber: "IS 12171:2019",
    date: "03 March 2023",
  },
  {
    id: 73,
    product: "Trimethyl Phosphite Technical Grade",
    isNumber: "IS 17412:2020",
    date: "03 March 2023",
  },
  {
    id: 74,
    product: "Television Sets",
    isNumber: "IS 18112:2022",
    date: "26 April 2023",
  },
];

const CRSRegistration = () => {
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>What is CRS Registration - Everything You Need to Know</title>
        <meta
          name="description"
          content="Understand BIS CRS registration, eligible products, and the step-by-step process to get your Compulsory Registration Scheme Registration."
        />
        <meta
          name="keywords"
          content="bis crs, crs certification, bis certification, registration scheme, indian standards, crs registration, bis certificate, bis crs certification, compulsory registration scheme, bis crs registration, bis crs process, bis crs logo, indian bis, process for crs registration, cost of crs, cost of crs certificate, documents of crs registration"
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="BIS CRS Registration Guide: Process, Cost, Purpose, Documentation & Benefits Explained"
        />
        <meta
          property="og:description"
          content="Explore the complete guide to BIS CRS registration—purpose, eligible products, and step-by-step compliance process."
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/en/bis/what-is-crs-bis-or-crs-registration"
        />
        <meta property="og:site_name" content="Sun Certifications India" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BIS CRS Registration Guide: Process, Cost, Purpose, Documentation & Benefits Explained"
        />
        <meta
          name="twitter:description"
          content="Explore the complete guide to BIS CRS registration—purpose, eligible products, and step-by-step compliance process."
        />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sun Certifications India" />
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis/what-is-crs-bis-or-crs-registration"
        />
      </Helmet>

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
    "eligibility",
    "documents",
    "registration",
    "feeStructure",
    "elabelling",
    "expertise",
  ];

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
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

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      const element = document.getElementById(
        section.toLowerCase().replace(/\s+/g, "-")
      );
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
            {[
              "Overview",
              "Eligibility",
              "Documents",
              "Registration",
              "Financials",
              "ELabelling",
              "Expertise",
            ].map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
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
          "Eligibility",
          "Documents",
          "Registration",
          "Financials",
          "ELabelling",
          "Expertise",
        ].map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
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
      <ServiceFaq />
      <CISProductTable />
      <div id="services">
        <Services />
      </div>
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
          Official Product List Under BIS CRS Registration
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          The following table lists products that require BIS CRS registration
          in India along with their applicable Indian Standard (IS) numbers and
          implementation dates.
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
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. What is BIS registration?",
      answer:
        "BIS certification is a compliance process governed by the Bureau of Indian Standards, which verifies that a product meets the applicable Indian Standards (IS) for quality, safety, and reliability.",
    },
    {
      id: "item-2",
      question: "2. What is CRS registration under BIS?",
      answer:
        "CRS stands for Compulsory Registration Scheme. It is a mandatory registration process for specific product categories such as electronics, electricals, batteries, and solar items. Products under CRS must be tested and registered with BIS before they can be sold in India.",
    },
    {
      id: "item-3",
      question: "3. Is BIS certification mandatory in India?",
      answer:
        "Yes. For all products listed under the CRS product list (currently 80+ items), BIS registration is mandatory for manufacturing, importing, or selling in India.",
    },
    {
      id: "item-4",
      question: "4. What is the difference between BIS CRS and ISI mark?",
      answer:
        "BIS CRS: For electronics and IT goods, only for mandatory products notified under QCO. <br />ISI mark: Used for a broader range of products, may be voluntary or mandatory depending on the product category.",
    },
    {
      id: "item-5",
      question: "5. Who can apply for BIS CRS registration?",
      answer:
        "Only manufacturers can apply. This includes both Indian and foreign manufacturers. Foreign brands must appoint an Authorized Indian Representative (AIR).",
    },
    {
      id: "item-6",
      question: "6. What is the role of an AIR?",
      answer:
        "An Authorized Indian Representative (AIR) is legally responsible for filing the BIS application on behalf of a foreign manufacturer. They act as the official liaison between BIS and the overseas applicant.",
    },
    {
      id: "item-7",
      question: "7. How long does BIS CRS registration take?",
      answer:
        "The process typically takes 3–4 weeks, assuming all documents and test reports are submitted correctly and no objections are raised by BIS.",
    },
    {
      id: "item-8",
      question: "8. How much does BIS CRS certificate cost?",
      answer:
        "Costs include: <br />Testing Charges: ₹10,000–₹20,000 + GST <br />Government Fee: ₹53,000 + GST per test report <br />Additional Charges: Affidavit, courier, AIR documentation, etc. <br />Discount applicable for Indian MSME registered manufacturers",
    },
    {
      id: "item-9",
      question: "9. What is the validity of BIS CRS certificates?",
      answer:
        "The initial BIS license is valid for 2 years. It can be renewed for up to 5 years if the product and manufacturing details remain unchanged.",
    },
    {
      id: "item-10",
      question: "10. Can BIS certification be obtained voluntarily?",
      answer:
        "No. Under CRS, you cannot apply voluntarily for products that are not listed under QCOs. Voluntary certification is only applicable for non-CRS products via the ISI scheme.",
    },
    {
      id: "item-11",
      question: "11. Where can I find the BIS CRS product list?",
      answer:
        'You can visit the official BIS website <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> and navigate to the "Products under CRS" section to view the complete list of covered products.',
    },
    {
      id: "item-12",
      question: "12. Can the BIS mark be displayed electronically?",
      answer:
        "Yes, through e-labelling, but it must meet strict BIS rules: Label info must be embedded in firmware <br />Easy access within 4 steps in device menu <br />Physical packaging must still carry regulatory info",
    },
    {
      id: "item-13",
      question:
        "13. What happens if I don't get BIS registration for a mandatory product?",
      answer:
        "Severe penalties, including: <br />Product seizure <br />Customs rejections <br />Legal fines <br />Delisting from e-commerce portals <br />Permanent ban from Indian market",
    },
    {
      id: "item-14",
      question: "14. Can one BIS certificate cover multiple models or brands?",
      answer:
        "No. Each brand, and factory location must be certified separately. Multiple models may be added using additional reports, but only under the same application and brand.",
    },
    {
      id: "item-15",
      question: "15. How can Sun Certifications India help me?",
      answer:
        "We offer: <br />Full documentation support <br />Lab coordination <br />BIS portal application handling <br />Query resolution and BIS follow-ups <br />Renewal and labeling guidance <br />Compliance assurance for foreign brands via AIR services",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

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
            {visibleFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Show More/Show Less Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {showAllFaqs ? (
                <>
                  <svg
                    className="w-5 h-5 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Show Less FAQs
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Show More FAQs
                </>
              )}
            </button>
          </div>
        </div>
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

const PointsListTwo = ({
  points,
  heading,
  headingTag = "h3", // Default to h3
  pointTag = "h3", // Default to h3
}) => {
  // Create dynamic components based on the tag props
  const HeadingTag = headingTag;
  const PointTag = pointTag;

  return (
    <div className="flex flex-col ">
      <HeadingTag className="font-semibold font-geist text-[20px] text-[#131316]">
        {heading}
      </HeadingTag>
      <ul className="flex flex-col mt-[20px] gap-2 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
              <Check size={12} className="text-[#020817]" />
            </div>
            <PointTag className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </PointTag>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BISCRSContentLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section className="flex flex-col gap-2 md:gap-4 mb-6">
          <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Complete Guide to BIS Certification & CRS Registration in India
          </h1>

          <h2 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
            What is BIS Registration?
          </h2>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
            The Bureau of Indian Standards (BIS) is the national standards body
            of India, functioning under the Ministry of Consumer Affairs, Food &
            Public Distribution, Government of India. Its core responsibility is
            to ensure that products in the Indian market conform to specific
            quality, safety, and performance standards outlined in the Indian
            Standards (IS).
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            One of the most important schemes governed by BIS is the Compulsory
            Registration Scheme (CRS) — a regulatory framework mandating product
            registration for certain categories, particularly electronic and IT
            goods.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            BIS Certification provides a formal guarantee that the product
            complies with Indian safety and performance standards, which helps
            protect Indian consumers from unsafe or substandard products.
          </p>
        </section>

        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <Eligibility />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <Documents />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <Registration />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <Financials />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ELabelling />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <Expertise />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />

        <AboutAuthor />
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
      <h2 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal my-3 md:my-0">
        What is CRS – Compulsory Registration Scheme?
      </h2>

      {/* Content */}
      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Launched in 2012, the Compulsory Registration Scheme (CRS) is a product
        registration scheme under BIS that initially targeted electronic goods.
        Over the years, it has expanded to include a wide array of product
        categories such as electrical appliaxnces, solar equipment, batteries,
        and more CRS is mandatory for notified products through Quality Control
        Orders (QCOs) issued by various ministries.
      </p>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        CRS Registration ensures that any product covered under the scheme must
        be registered with BIS before it is sold, imported, or distributed in
        India.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        History of CRS Certification in India
      </h2>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Consumer Electronics",
              "Lighting & LEDs",
              "Batteries & Cells",
              "Wireless Communication Devices",
              "Solar Panels and Components",
              "Household Electrical Appliances",
            ]}
            heading="The first QCO under the CRS scheme was released in 2012, targeting electronic and IT equipment. Since then, additional QCOs have been issued across sectors including:"
          />
        </div>
      </div>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        The CRS list keeps growing, making it critical for manufacturers to stay
        updated with new notifications.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        CRS Registration vs ISI Mark: What's the Difference?
      </h2>

      {/* Comparison Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[200px] border-r border-gray-300">
                  Feature
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  CRS Registration
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px]">
                  ISI Mark
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Nature
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Compulsory (only for QCO-listed products)
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Voluntary or Compulsory (based on product)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Product Scope
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Electronics, IT, Electrical, Batteries, etc.
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Food, cement, steel, electricals, etc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Application
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Online, BIS CRS portal
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Manual + Online, BIS ISI system
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Flexibility
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Only for QCO-covered goods
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Can be voluntary for non-QCO goods
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Labelling
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Requires BIS CRS logo and registration number
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Requires ISI logo with standard code
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Why You Need to Know the BIS CRS Framework
      </h2>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Avoid non-compliance penalties",
              "Plan for production timelines (considering lab testing duration)",
              "Ensure smoother customs clearance",
              "Build long-term brand trust with Indian consumers",
            ]}
            heading="Whether you're a manufacturer in India or an international brand looking to expand into the Indian market, understanding the BIS CRS process is essential. It helps you:"
          />
        </div>
      </div>
    </section>
  );
};

const Eligibility = () => {
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Products */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[24px] md:text-[40px] font-roboto font-bold text-[#131316] leading-tight md:leading-normal">
        Eligibility Criteria for BIS CRS Registration
      </h2>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Who Can Apply for BIS Certification Under CRS?
      </h3>

      {/* Content */}
      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        To obtain a BIS certificate under the Compulsory Registration Scheme
        (CRS), the applicant must meet specific eligibility requirements
        outlined by the Bureau of Indian Standards. These conditions ensure that
        only genuine manufacturers are permitted to register and label products
        with the BIS CRS logo.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Eligibility Criteria Checklist
      </h3>

      {/*  table for eligibility criteria */}

      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Requirement
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Applicant must be a Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Only the original manufacturer (not trader or reseller) of the
                  product is eligible to apply.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Location Can Be Indian or Foreign
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Both Indian manufacturers and international brands can apply.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  AIR (Authorized Indian Representative)
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Foreign manufacturers{" "}
                  <span className="font-semibold">must appoint an AIR</span> —
                  either their Indian branch or a formally authorized third
                  party.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Test Reports from BIS-Approved Labs
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  The product must be tested at a{" "}
                  <span className="font-semibold">BIS-recognized lab</span> and
                  meet the Indian Standard (IS) applicable.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Proper Documentation
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  All required documents must be submitted in prescribed formats
                  (details in next section).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  One Registration Per Brand & Location
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  A separate application must be filed for each{" "}
                  <span className="font-semibold">
                    product type, manufacturing location, and brand name
                  </span>
                  .
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Who is an Authorized Indian Representative (AIR)?
      </h2>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        If you're a foreign manufacturer, BIS requires you to appoint an
        Authorized Indian Representative (AIR) as your official contact in
        India.
      </p>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Acts as the legal representative of the foreign applicant",
              "Handles all BIS communications and obligations on behalf of the manufacturer",
              "Takes legal responsibility for compliance and documentation",
              "Must not be a trader or reseller unless explicitly appointed by the manufacturer",
            ]}
            heading="AIR Responsibilities:"
          />
        </div>
      </div>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        The AIR must submit an agreement signed by both parties and must have an
        Indian address.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Real-World Example:
      </h3>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Company ABC is the manufacturer",
              "They test the product in a BIS-approved lab in India",
              "Their Delhi office is registered as AIR",
              "They submit the application through the BIS portal with required documents",
            ]}
            heading="Company ABC wants to launch a new power bank model in India:"
          />
        </div>
      </div>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Result: A valid BIS certificate is issued under CRS.
      </p>
    </section>
  );
};

const Documents = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        Documents Required for BIS CRS Registration
      </h2>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        List of documents required to obtain BIS CRS registration.
      </h2>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        The BIS CRS registration process is completely online but demands
        precise documentation for successful approval. Even minor errors in
        forms, formats, or file types can lead to rejections or delays.
      </p>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Proper documentation also ensures your bis certificate is processed
        faster and remains legally valid across compliance audits, customs
        checks, and marketplace approvals.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Master Checklist: Documents Required for BIS CRS Registration
      </h2>

      {/* table for master checklist */}

      {/* Master Checklist Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Document
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Who Submits?
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Notes
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Manufacturer's Address Proof
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Factory lease, utility bill, or license
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Test Report from BIS-Approved Lab
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Manufacturer/Lab
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Must be recent (within 90 days) and reference IS code
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Undertakings (as per BIS Format)
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Applicant
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Includes liability, compliance, and product responsibility
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Trademark Certificate
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Required if brand is registered
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  AIR Agreement (For foreign applicants)
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Foreign Manufacturer & AIR
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Signed and notarized
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Affidavit
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Manufacturer or AIR
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Format downloadable from BIS portal
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Fee Receipt
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Applicant
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Payment proof of government fee
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Authorization Letter
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Authorizes AIR to act on their behalf
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Company Registration Certificate
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Proof of business registration (GST, ROC, etc.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Product Labels/Markings
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Manufacturer
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Must show BIS logo, IS standard, and registration space
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const Registration = () => {
  return (
    <section id="registration" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Registration
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS CRS Registration Process: Step-by-Step Guide
      </h2>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Overview
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        The BIS CRS registration is a fully online process conducted via the BIS
        Registration Portal. However, it's not just about uploading documents —
        it requires technical precision, regulatory understanding, and strict
        adherence to Indian Standards (IS).
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step-by-Step BIS CRS Process
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Here's how the BIS certification journey unfolds under the CRS:
      </p>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Choose a lab from the BIS-approved list",
              "Submit your product sample for testing under the relevant IS",
              "Receive the final test report, formatted per BIS requirements",
            ]}
            heading="Step 1: Product Testing at BIS-Recognized Lab"
            headingTag="h4"
            pointTag="h5"
          />
        </div>
      </div>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Gather all required documents (as detailed in Section 7)",
              "Ensure correct naming, formatting, signatures, and dates",
              "Create a product label mockup showing BIS logo space + IS standard",
            ]}
            heading="Step 2: Preparation of Documents"
            headingTag="h4"
            pointTag="h5"
          />
        </div>
      </div>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "Log in or register on the BIS CRS Portal (https://www.bis.org.in/)", /// ye change karna hai
              "Fill in key fields: product, model number, brand, manufacturing unit, and AIR (if applicable)",
              "Upload all documents and test report in correct sections",
              "Pay the government fee online",
            ]}
            heading="Step 3: Online Application Filing"
            headingTag="h4"
            pointTag="h5"
          />
        </div>
      </div>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <PointsListTwo
            points={[
              "BIS reviews submitted documents and verifies lab reports",
              "If any clarification is required, a query will be raised through the portal",
              "Respond with appropriate documentation or explanations",
            ]}
            heading="Step 4: Application Review by BIS"
            headingTag="h4"
            pointTag="h5"
          />
        </div>
      </div>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Queries must be cleared within 30 days or application will be
        auto-rejected.
      </p>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <div className="flex flex-col">
            <h4 className="font-semibold font-geist text-[20px] text-[#131316]">
              Step 5: Grant of BIS Registration
            </h4>
            <ul className="flex flex-col mt-[20px] gap-2 list-none">
              <li className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check size={12} className="text-[#020817]" />
                </div>
                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                  If everything is in order, BIS issues the Registration
                  Certificate
                </h5>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check size={12} className="text-[#020817]" />
                </div>
                <div className="flex flex-col">
                  <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                    Your certificate will mention:
                  </h5>
                  <ul className="flex flex-col mt-2 gap-1 list-none ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        BIS registration number
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Brand name
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Product model
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        IS standard code
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check size={12} className="text-[#020817]" />
                </div>
                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                  You must print this info on the product label or apply
                  e-labelling
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[10px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          <div className="flex flex-col">
            <h4 className="font-semibold font-geist text-[20px] text-[#131316]">
              Step 6: Labeling and Distribution
            </h4>
            <ul className="flex flex-col mt-[20px] gap-2 list-none">
              <li className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check size={12} className="text-[#020817]" />
                </div>
                <div className="flex flex-col">
                  <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                    All certified products must carry the:
                  </h5>
                  <ul className="flex flex-col mt-2 gap-1 list-none ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        BIS CRS logo
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        IS code applicable to the product
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#1A8781] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Registration number
                      </span>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-full flex-shrink-0 mt-1">
                  <Check size={12} className="text-[#020817]" />
                </div>
                <h5 className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                  Label must be printed or digitally embedded as per BIS
                  guidelines
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Approximate Timeline
      </h2>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Activity
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Estimated Time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Product Testing
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  7-10 working days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Document Collection
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  2-3 days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Application Submission
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  1 day
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  BIS Review + Query Resolution
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  10-15 working days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Final Certificate Issue
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  2-4 working days
                </TableCell>
              </TableRow>
              <TableRow className="bg-[#1A8781]/5">
                <TableCell className="font-bold font-geist text-base md:text-lg text-left border-r border-gray-200">
                  TOTAL
                </TableCell>
                <TableCell className="font-bold font-geist text-base md:text-lg text-left">
                  ~4 weeks
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Fee Structure for CRS Registration
      </h2>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Fee Type
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Government Fee
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  ₹53,000 + 18% GST per test report
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Additional Report in Same App
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  ₹20,000 + 18% GST per report
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Testing Charges
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  ₹10,000 – ₹20,000 + 18% GST (varies by product/lab)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="mt-4 font-geist text-sm md:text-base text-[#42434d] italic text-center">
        Prices subject to update — confirm on the BIS portal or with your
        consultant.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        CRS Certificate Validity & Renewal
      </h2>

      {/* Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Parameter
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Initial Validity
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  2 Years
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Renewal Duration
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Upto 5 Years (if no product changes)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Renewal Process
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Online, based on new affidavit + renewal fee
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Re-testing Required?
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Not unless product specs/IS standard changes
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const Financials = () => {
  return (
    <section id="financials" className="flex flex-col scroll-mt-20">
      {/* Financials */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Financials
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS CRS Registration Fees, Validity & Renewal Guidelines
      </h2>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Understanding the Financials
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Getting a BIS certificate under the Compulsory Registration Scheme (CRS)
        involves both government-mandated charges and product testing fees.
        While the process is online and streamlined, it's important to budget
        accurately to avoid delays or rejections due to underpayment or misfiled
        applications.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Fee Structure Breakdown
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        Government Fees (Payable to BIS)
      </p>

      {/* Government Fees Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Type
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[150px] border-r border-gray-300">
                  Fee (INR)
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[150px] border-r border-gray-300">
                  GST (18%)
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Total (INR)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  First Test Report
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  ₹53,000
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  ₹9,540
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  ₹62,540
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Additional Test Report (Same Application)
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  ₹20,000
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  ₹3,600
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  ₹23,600
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Renewal Fee
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  ₹53,000
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                  ₹9,540
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  ₹62,540
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const ELabelling = () => {
  return (
    <section id="elabelling" className="flex flex-col scroll-mt-20">
      {/*E-Labelling*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          E-Labelling
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        E-Labelling Guidelines for BIS CRS Certified Products
      </h2>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        What is E-Labelling?
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        E-labelling refers to the practice of displaying regulatory information
        electronically within a device rather than printing it on physical
        surfaces. Under the BIS Compulsory Registration Scheme (CRS), certain
        products — particularly compact or digital devices — can present the BIS
        certificate details, standard mark, and IS code through their software
        interface or digital packaging.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Official BIS Guidelines on E-Labelling (CMD 3/8:1/6975 dated 3 Dec 2015)
      </h3>

      <h4 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Core Requirements for E-Labelling:
      </h4>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[300px] border-r border-gray-300">
                  Rule
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Physical Label on Packaging
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Product box or external packaging{" "}
                  <strong>
                    must display the BIS CRS logo and registration details
                  </strong>
                  .
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Removable Labels for Bulk Packaging
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  If products are shipped in bulk, a{" "}
                  <strong>removable adhesive label</strong> on the outer package
                  is acceptable.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  No Tools Needed for Access
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Users must be able to access the e-label info{" "}
                  <strong>without needing tools or accessories</strong> (e.g.,
                  SIM card removal not allowed).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Secure Programming
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  E-label info must be{" "}
                  <strong>embedded in firmware/software</strong>, locked from
                  modification by any third party.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200 bg-gray-50">
                  Menu-Based Access
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left bg-gray-50">
                  Users must access the info in{" "}
                  <strong>no more than 4 steps</strong> through the device's
                  menu interface.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                  Instructions Required
                </TableCell>
                <TableCell className="font-geist text-base md:text-lg text-left">
                  Instructions on how to access e-label details must be
                  provided:
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="flex flex-col scroll-mt-20">
      {/* Expertise */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[14px] md:text-[20px] text-gray-700">
          Expertise
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        How Sun Certifications India Can Help You with BIS Registration under
        CRS Scheme
      </h2>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Why Choose a BIS Consultant?
      </h3>

      <p className="mt-[16px] md:mt-[24px] font-geist text-[14px] md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-relaxed md:leading-loose">
        The BIS CRS registration process is highly technical, regulated, and
        documentation-heavy. Without deep knowledge of Indian Standards, QCO
        updates, test report formats, and portal workflows, applicants risk
        delays, rejection, or even long-term non-compliance. That's where Sun
        Certifications India comes in — your trusted, experienced partner in
        navigating every step of the compulsory certification scheme.
      </p>
    </section>
  );
};
