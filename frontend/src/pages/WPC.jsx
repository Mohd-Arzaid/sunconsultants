import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import WPCimg from "../assets/images/CDSCOOne.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Check, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import Services from "../components/manual/Services";
import AboutAuthor from "../components/common/AboutAuthor";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const WPC_PRODUCTS_BASE = "https://alephindia.in/product";

// Product images from Unsplash (free to use, one image per product)
const UNSPLASH_IMG = (id) => `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop`;

const WPC_PRODUCTS = [
  { name: "Wireless Hotspot Device", img: "hotspot-device.webp", slug: "wireless-hotspot.php" },
  { name: "Laptop", img: "laptop.webp", slug: "notebook-tablet-pc.php" },
  { name: "Wireless Microphone", img: "wireless-microphone.webp", slug: "wireless-microphone.php" },
  { name: "RFID Reader", img: "radio-frequency-identification-tags-and-readers.webp", slug: "passport-reader.php" },
  { name: "Wireless Mouse", img: "wireless-mouse.webp", slug: "wireless-mouse.php" },
  { name: "WiFi Router", img: "wifi-router.webp", slug: "wifi-router.php" },
  { name: "Wireless Keyboard", img: "wireless-keyboard.webp", slug: "wireless-keyboard.php" },
  { name: "Wireless Music Player", img: "wireless-music-players.webp", slug: "wireless-music-players.php" },
  { name: "Wireless POS Terminal", img: "wireless-pos-terminal.webp", slug: "wireless-pos-terminal.php" },
  { name: "Wireless Speaker", img: "wireless-speaker.webp", slug: "bluetooth-speakers.php" },
  { name: "Wireless Terminal", img: "wireless-terminals.webp", slug: "wireless-terminals.php" },
  { name: "Wireless Transmitters", img: "wireless-transmitters.webp", slug: "wireless-transmitters.php" },
  { name: "Gigabit Dual Band Wireless Router", img: "gigabit-dual-band-wireless-router.webp", slug: "gigabit-dual-band-wireless-router.php" },
  { name: "Bluetooth Speaker", img: "bluetooth-speaker.webp", slug: "bluetooth-speaker.php" },
  { name: "Bluetooth Headphone", img: "bluetooth-headphones.webp", slug: "bluetooth-headphone.php" },
  { name: "Bluetooth Earphone", img: "bluetooth-earphone.webp", slug: "bluetooth-earphone.php" },
  { name: "Tablet", img: "tablet.webp", slug: "tablet.php" },
  { name: "RFID Reader", img: "rfid-reader.webp", slug: "rfid-reader.php" },
  { name: "RFID Antenna", img: "rfid-antenna.webp", slug: "rfid-antenna.php" },
  { name: "Wireless Transmitter And Receiver", img: "wireless-transmitter-and-receiver.webp", slug: "wireless-transmitter-and-receiver.php" },
  { name: "Smart Meter", img: "smart-meter.webp", slug: "smart-meter.php" },
  { name: "Smartwatch", img: "smartwatch.webp", slug: "smartwatch.php" },
  { name: "Digital Lock", img: "digital-lock.webp", slug: "digital-lock.php" },
  { name: "Water Meter", img: "water-meter.webp", slug: "water-meter.php" },
  { name: "True Wireless Earphones (TWS)", img: "true-wireless-earphones.webp", slug: "true-wireless-earphones.php" },
  { name: "Wireless Barcode Scanner", img: "wireless-barcode-scanner.webp", slug: "wireless-barcode-scanner.php" },
  { name: "Wireless Access Point", img: "wireless-access-point.webp", slug: "wireless-access-point.php" },
  { name: "LoRaWAN Gateway", img: "lorawan-gateway.webp", slug: "lorawan-gateway.php" },
];

const WPC = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>WPC Approval | WPC ETA Certification, Process, Cost, and Requirements</title>
        <meta
          name="description"
          content="WPC Equipment Type Approval (ETA) is a certification issued by the Wireless Planning & Coordination (WPC) Wing of the Department of Telecommunications (DoT) mandatory for all wireless devices."
        />
        <meta
          name="keywords"
          content="WPC license requirement, WPC india approval, WPC Certification india, WPC, WPC ETA product approval certificate, WPC certificate and rf testing consultants in india, Radiofrequency Testing Lab, RF Test Report for WPC, Equipment type Approval, WPC Licence for Import, 2.4 Ghz WPC ETA, Bluetooth WPC, RFID WPC ETA, RF test facility in INDIA, Eta certificate india, WPC services, WPC license india, WPC certification services, WPC consultant, WPC approval india, WPC consultancy, WPC approval consultant, WPC certificate consultant, WPC certificate for bluetooth, procedure for WPC certificate"
        />
        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bis-certifications.com" },
              { "@type": "ListItem", position: 2, name: "WPC Approval | WPC ETA Certification", item: "https://bis-certifications.com/information-about-wpc-certificate-eta-approval" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What are the radio frequency bands?", acceptedAnswer: { "@type": "Answer", text: "A radio frequency band is a part of the radio frequency spectrum that is allocated for a specific type of wireless communication. There are several different communications that use different bands for wireless communication including mobile communications, Wi-Fi, Bluetooth, satellite communication, broadcasting, etc. Each band is allocated limits technically, to eliminate interference and to allow for proper functioning of different devices and services." } },
              { "@type": "Question", name: "What is a WPC certificate?", acceptedAnswer: { "@type": "Answer", text: "A WPC certificate is a type of compliance certificate that is required for the import, sale, and usage of wireless products within the geographical boundary of India. This includes all devices that are radio frequency signal emitters such as Bluetooth devices, wi-fi devices, wi-fi routers, and other such devices like smart speakers. A WPC certified device cannot be marketed or operated in India." } },
              { "@type": "Question", name: "What is WPC Certification in India?", acceptedAnswer: { "@type": "Answer", text: "WPC certification is to ensure that a wireless device is operating according to the compliance of India's spectrum control and wireless devices regulations. It is an approval that is given to a product for operating within the limits of frequency bands that are assigned for a particular domain of usage to ensure that there is no jamming of other communication systems. Any wireless device manufacturer in India is required to have an approval from the Wireless Planning and Coordination Wing before entering the Indian market." } },
              { "@type": "Question", name: "Who is the issuer of WPC certificates in India?", acceptedAnswer: { "@type": "Answer", text: "The WPC certificate is provided by the Wireless Planning and Coordination Wing, which is a part of the Department of Telecommunications. This body oversees the management of radio frequencies and provides Equipment Type Approval for wireless devices." } },
              { "@type": "Question", name: "What is WPC ETA approval?", acceptedAnswer: { "@type": "Answer", text: "WPC ETA refers to Equipment Type Approval. This is mandatory for wireless devices that function in the de-licensed frequency ranges, i.e. the ranges which include Bluetooth and Wi-Fi. Thus, for the import of these devices into India, ETA approval is necessary. Also, in many instances, even wireless devices manufactured in India using wireless modules might require ETA certification, depending upon the configurations." } },
              { "@type": "Question", name: "Can WPC ETA certification be obtained by a foreign manufacturer?", acceptedAnswer: { "@type": "Answer", text: "Yes, WPC ETA Certification can be obtained by a foreign manufacturer. An Authorized Indian Representative has to be appointed for the application. The representative is in charge of submitting the documentation, liaising with the concerned authorities, and completing the approval process on behalf of the foreign entity." } },
              { "@type": "Question", name: "What is the period of validity of a WPC License?", acceptedAnswer: { "@type": "Answer", text: "A WPC License is valid for the lifetime of the approved model of the product. However, if the wireless specifications of the product change, e.g. frequency range or transmission power, etc., new approval will be required." } },
              { "@type": "Question", name: "Who needs WPC certification in India?", acceptedAnswer: { "@type": "Answer", text: "WPC certification is a must for all persons or companies in the business of manufacturing, importing, distributing, or selling wireless devices in India. This also includes businesses in the trade of Bluetooth, Wi-Fi, RFID, or any other products using radio frequency." } },
              { "@type": "Question", name: "How much are the government charges for WPC ETA approval?", acceptedAnswer: { "@type": "Answer", text: "The government charges for WPC ETA approval are around ₹10,000 for each product. This is for each finished product or each separate RF module, and payment of this fee is mandatory for submission of the application." } },
              { "@type": "Question", name: "Is the application fee refunded if the application is withdrawn?", acceptedAnswer: { "@type": "Answer", text: "No, in case of application withdrawal or rejection, the application fee is forfeited. It is advisable for applicants to cross-check all technical and application information to eliminate any mistakes." } },
            ],
          })}
        </script>
      </Helmet>

      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    WPC Approval | WPC ETA Certification
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <WPCHero />
      <WPCIndex />
      <WPCContent />
      <Footer />
      <ScrollToTopButton />
      {/*      <Footer/> */}
    </div>
  );
};

export default WPC;

const WPCHero = () => {
  return (
    <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              WPC Approval | WPC ETA Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Process, Cost, and Requirements for WPC ETA Certification in India – your trusted compliance partner!
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

const WPCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "WPC Approval",
    "ETA",
    "Categories",
    "Eligibility",
    "Process",
    "FAQs",
  ];
  const getSectionId = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const handleItemClick = (item) => {
    const id = item === "FAQs" ? "faqs" : getSectionId(item);
    const element = document.getElementById(id);
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
            const id = entry.target.id;
            const match = SECTIONS.find((s) => (s === "FAQs" ? "faqs" : getSectionId(s)) === id);
            setActiveSection(match || id);
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((section) => {
      const id = section === "FAQs" ? "faqs" : getSectionId(section);
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky  top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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

const WPCContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <WPCContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
    </div>
  );
};

const ServiceFaq = () => {
  return (
    <div id="faqs" className="py-2 bg-gray-50 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">What are the radio frequency bands?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">A radio frequency band is a part of the radio frequency spectrum that is allocated for a specific type of wireless communication. There are several different communications that use different bands for wireless communication including mobile communications, WiFi, Bluetooth, satellite communication, broadcasting, etc. Each band is allocated limits technically, to eliminate interference and to allow for proper functioning of different devices and services.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">What is a WPC certificate?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">A WPC certificate is a type of compliance certificate that is required for the import, sale, and usage of wireless products within the geographical boundary of India. This includes all devices that are radio frequency signal emitters such as bluetooth devices, wi fi devices, wi fi routers, and other such devices like smart speakers. A WPC certified device cannot be marketed or operated in India.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">What is WPC Certification in India?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">WPC certification is to ensure that a wireless device is operating according to the compliance of India&apos;s spectrum control and wireless devices regulations. It is an approval that is given to a product for operating within the limits of frequency bands that are assigned for a particular domain of usage to ensure that there is no jamming of other communication systems. Any wireless device manufacturer in India is required to have an approval from the Wireless Planning and Coordination Wing before entering the Indian market.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">Who is the issuer of WPC certificates in India?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">The WPC certificate is provided by the Wireless Planning and Coordination Wing, which is a part of the Department of Telecommunications. This body oversees the management of radio frequencies and provides Equipment Type Approval for wireless devices.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">What is WPC ETA approval?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">WPC ETA refers to Equipment Type Approval. This is mandatory for wireless devices that function in the de-licensed frequency ranges, i.e. the ranges which include Bluetooth and Wi-Fi. Thus, for the import of these devices into India, ETA approval is necessary. Also, in many instances, even wireless devices manufactured in India using wireless modules might require ETA certification, depending upon the configurations.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">Can WPC ETA certification be obtained by a foreign manufacturer?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">Yes, WPC ETA Certification can be obtained by a foreign manufacturer. An Authorized Indian Representative has to be appointed for the application. The representative is in charge of submitting the documentation, liaising with the concerned authorities, and completing the approval process on behalf of the foreign entity.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">What is the period of validity of a WPC License?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">A WPC License is valid for the lifetime of the approved model of the product. However, if the wireless specifications of the product change, e.g. frequency range or transmission power, etc., new approval will be required.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">Who needs WPC certification in India?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">WPC certification is a must for all persons or companies in the business of manufacturing, importing, distributing, or selling wireless devices in India. This also includes businesses in the trade of Bluetooth, Wi-Fi, RFID, or any other products using radio frequency.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">How much are the government charges for WPC ETA approval?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">The government charges for WPC ETA approval are around ₹10,000 for each product. This is for each finished product or each separate RF module, and payment of this fee is mandatory for submission of the application.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">Is the application fee refunded if the application is withdrawn?</AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">No, in case of application withdrawal or rejection, the application fee is forfeited. It is advisable for applicants to cross-check all technical and application information to eliminate any mistakes.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full md:w-[441px]">
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

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      {heading ? <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">{heading}</p> : null}
      <div className={`flex flex-col gap-2 ${heading ? "mt-[16px] md:mt-[20px]" : "mt-2"}`}>
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

const WPCContentLeft = () => {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <WPCApprovalSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ETASection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <CategoriesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <EligibilitySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ProcessSection />
        <ReviewSection />
        <AboutAuthor />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Overview</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        WPC Approval | WPC ETA Certification
      </h2>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-4">
        <p>Modern communication has widely relied on wireless technologies. Many electronics such as mobile phones, Bluetooth headsets, Wi-Fi routers, smartwatches, IoT devices, RFID tags, and even wireless medical devices rely on radio frequency (RF) communication. The Government of India has made WPC approval devices mandatory to ensure the safe and interference-free use of the radio spectrum.</p>
        <p>As a manufacturer, importer, trader, or startup, knowledge over WPC Approval or WPC ETA Certification is vital in order to be compliant to the Indian wireless market regulations.</p>
        <p>The following guide covers WPC ETA Certification thoroughly including its definition, importance, types, eligibility, steps, documents, costs, benefits, and the entire process to obtaining WPC ETA Certification in India.</p>
      </div>
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        
      
      </div>
    </section>
  );
};

const WPCApprovalSection = () => {
  return (
    <section id="wpc-approval" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">WPC Approval</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">What is WPC Approval in India?</h2>
      <p className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        WPC Approval in India is defined as the approval given by the Wireless Planning and Coordination (WPC) Wing of the Department of Telecommunications (DoT), Government of India. WPC approval is a requisite approval for every device that operates on Bluetooth, WiFi, RFID, Zigbee, NFC or any other wireless technology spectrum.
      </p>
      <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] font-semibold">The WPC Wing is tasked with the following responsibilities:</p>
      <PointsListTwo points={["Management of radio frequency spectrum in India", "Licensing of wireless and issuing ETA certificates", "Certification of devices to ensure operations within allocated frequency bands", "Mitigation of radio interference", "Safeguarding the interests of national security", "No wireless product can be imported, sold, or used in India without the approval of WPC"]} heading="" />
    </section>
  );
};

const ETASection = () => {
  return (
    <section id="eta" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">ETA & Necessity</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">What is WPC ETA Certification?</h2>
      <p className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ETA certification (Equipment Type Approval certification) is a WPC approval needed for wireless equipment that operates within de-licensed frequency bands.
      </p>
      <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] font-semibold">The de-licensed frequency bands are:</p>
      <ul className="list-disc pl-6 mt-2 font-geist text-sm md:text-lg text-[#42434d] space-y-1">
        <li>2.4 GHz (Bluetooth, Wi-Fi)</li>
        <li>5 GHz (Wi-Fi)</li>
        <li>865-867 MHz (RFID)</li>
        <li>NFC</li>
        <li>Zigbee</li>
      </ul>
      <p className="mt-4 font-geist text-sm md:text-lg text-[#42434d]">ETA certification is a mandatory certification for all wireless devices sold in India, and certifies that the device is compliant with India&apos;s RF standards and operates within the allowed frequency bands.</p>
      <h3 className="text-[22px] md:text-[28px] font-roboto font-bold text-[#131316] mt-6 mb-2">What is the necessity of WPC Approval in India?</h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] font-semibold mb-2">The following are the reasons for WPC approval:</p>
      <ol className="list-decimal pl-6 font-geist text-sm md:text-lg text-[#42434d] space-y-2">
        <li><strong>Legal Requirement:</strong> WPC approval is a legal requirement under Indian telecom laws to import or sell wireless devices.</li>
        <li><strong>Spectrum Management:</strong> The radio frequency spectrum is finite; WPC approval ensures optimal utilization.</li>
        <li><strong>Interference Mitigation:</strong> Unauthorized wireless devices can cause interference to aviation, defense, and emergency services.</li>
        <li><strong>National Security:</strong> Unregulated wireless devices can pose security threats.</li>
        <li><strong>Market Access:</strong> Customs clearance will be denied in the absence of WPC ETA certification.</li>
      </ol>
    </section>
  );
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Categories</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Various Categories of WPC Certification in India
      </h2>
      <p className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        WPC Certification in India is not a singular certification. It is divided into different categories according to the kind of device and its purpose. It is important to understand each of them in depth.
      </p>

      {/* 1. WPC ETA Certificate */}
      <div className="mt-8">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316]">
          1. WPC ETA Certificate (Equipment Type Approval)
        </h3>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          For the largest portion of consumer and wireless products, WPC ETA certification is required. ETA stands for Equipment Type Approval and is to be obtained by any device that works within the so-called &apos;de-licensed&apos; frequency bands or ranges.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          De-licensed frequency bands are ranges that do not require individual users to hold a spectrum license, prejudicing the equipment&apos;s approval. Examples of such technologies are Bluetooth, Wi-Fi, RFID, and other similar technologies.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] font-semibold">The ETA certificate signifies that the device:</p>
        <ul className="mt-2 space-y-2 font-geist text-sm md:text-lg text-[#42434d] pl-6 list-none">
          <li className="flex items-start gap-2">
            <span className="text-[#1A8781] mt-1">●</span>
            <span>Functions within the permissible frequency within the Indian Territory</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1A8781] mt-1">●</span>
            <span>Power transmission is within the approved limits</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#1A8781] mt-1">●</span>
            <span>Does not cause harmful interference</span>
          </li>
        </ul>
        <p className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          Therefore, WPC ETA approval is required for the importation of Bluetooth speakers and Wi-Fi routers.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          Approval for ETA is usually given based on RF test reports from accredited laboratories. There is no need for spectrum auctions or individual frequency assignments as the product is operating in de-licensed bands. Products using a pre-approved RF module, manufactured in India, may not need separate ETA approvals; however, fully imported finished products usually require approvals.
        </p>
      </div>

      {/* 2. Non-Network WPC License */}
      <div className="mt-10">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316]">
          2. Non-Network WPC License
        </h3>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          The Non-Network WPC License is for a business that works in wireless equipment but does not provide telecom or communication services to the public. This license category fits companies that import, trade, distribute, or own wireless devices.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          In contrast to ETA, which is product-specific, a Non-Network License may cover wider business activities with respect to the controlled wireless devices.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] font-semibold">This category consists of three sub-types:</p>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-[17px] md:text-[20px] font-roboto font-semibold text-[#131316]">Import License</h4>
            <p className="mt-1 font-geist text-sm md:text-lg text-[#42434d] leading-loose">This is needed for businesses that import wireless equipment that is outside the scope of ETA or is subject to regulation. It allows the import of certain equipment to India.</p>
          </div>
          <div>
            <h4 className="text-[17px] md:text-[20px] font-roboto font-semibold text-[#131316]">Dealer Possession License</h4>
            <p className="mt-1 font-geist text-sm md:text-lg text-[#42434d] leading-loose">This license is necessary for businesses that deal in the sale of wireless devices. It allows the possession and sale of licensed wireless devices.</p>
          </div>
          <div>
            <h4 className="text-[17px] md:text-[20px] font-roboto font-semibold text-[#131316]">Non-Dealer Possession License</h4>
            <p className="mt-1 font-geist text-sm md:text-lg text-[#42434d] leading-loose">This applies to certain businesses that need to use wireless devices internally but do not sell them. Institutions that use certain types of special communication devices may need to obtain this type of license.</p>
          </div>
        </div>
        <p className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          In order to qualify for a Non-Network License, the applicant must be a company that has been incorporated legally, and may be required to have personnel with technical qualifications.
        </p>
      </div>

      {/* 3. Network License */}
      <div className="mt-10">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316]">
          3. Network License
        </h3>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          Network Licenses are for businesses offering communication services using a part of the radio frequency spectrum that has been licensed for that purpose. Network licenses are for the use of the licensed spectrum, unlike ETA approvals that are for the use of consumer devices in de-licensed bands.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          This type of license applies to telecom service providers, internet service providers, and broadcasting service providers.
        </p>
        <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] font-semibold">A couple of examples are as follows:</p>
        <div className="mt-4 space-y-4">
          <div>
            <h4 className="text-[17px] md:text-[20px] font-roboto font-semibold text-[#131316]">Internet Service Provider (ISP) License</h4>
            <p className="mt-1 font-geist text-sm md:text-lg text-[#42434d] leading-loose">An Internet Service Provider license authorizes a company to provide internet services in India. The ISP license is issued by the Department of Telecommunications, and WPC governs the spectrum usage.</p>
          </div>
          <div>
            <h4 className="text-[17px] md:text-[20px] font-roboto font-semibold text-[#131316]">Experimental License</h4>
            <p className="mt-1 font-geist text-sm md:text-lg text-[#42434d] leading-loose">An Experimental License authorizes temporary use of a portion of the spectrum for research, testing, or demonstration. This license is often used for technology trials or pilot wireless systems.</p>
          </div>
        </div>
        <p className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
          Network Licenses have more compliance obligations because they are for the use of regulated and licensed frequency bands.
        </p>

        {/* PRODUCTS UNDER WPC */}
        <div className="mt-12 md:mt-16 w-full max-w-full min-w-0 overflow-x-hidden">
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-6">
            Products under WPC
          </h3>
          <p className="font-geist text-sm md:text-base text-[#42434d] mb-6 max-w-3xl">
            Wireless devices that typically require WPC ETA certification include the following:
          </p>
          <div
            className="marquee-container overflow-hidden w-full min-w-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative py-4 pb-8"
            aria-label="Products under WPC certification"
          >
            <div className="marquee-track flex flex-nowrap items-center gap-6">
              {[...WPC_PRODUCTS, ...WPC_PRODUCTS].map((product, i) => (
                <a
                  key={`wpc-product-${product.slug}-copy-${Math.floor(i / WPC_PRODUCTS.length)}`}
                  href={`${WPC_PRODUCTS_BASE}/${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col shrink-0 w-[200px] md:w-[220px] rounded-xl bg-white border border-[#e8e6e1] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#1A8781]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A8781] focus-visible:ring-offset-2"
                >
                  <div className="aspect-square bg-[#F9F7F2] flex items-center justify-center p-4 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <span
                      className="hidden text-[#42434d] text-sm font-geist text-center px-2"
                      aria-hidden
                    >
                      {product.name}
                    </span>
                  </div>
                  <div className="py-3 px-3 text-center border-t border-[#e8e6e1] bg-white">
                    <p className="font-geist text-sm font-medium text-[#131316] line-clamp-2 group-hover:text-[#1A8781] transition-colors">
                      {product.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  const bullet = (text) => (
    <li className="flex items-start gap-2">
      <span className="text-[#1A8781] mt-1 shrink-0">●</span>
      <span>{text}</span>
    </li>
  );
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Eligibility</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Eligibility for WPC Approvals
      </h2>
      <p className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
        When applying for WPC ETA certification, applicants must meet the following criteria:
      </p>
      <ul className="mt-4 space-y-2 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
        {bullet("Legally registered company")}
        {bullet("Product must function within non-licensed frequency bands")}
        {bullet("RF test report from a recognized accredited laboratory")}
        {bullet("Technical specifications must be submitted by the applicant")}
        {bullet("For importers, the Import Export Code (IEC) is necessary")}
        {bullet("Foreign manufacturers must have an Indian representative")}
      </ul>

      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-8 mb-3">
        WPC ETA Certification Requirements
      </h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] font-semibold mb-2">The following documentation is necessary:</p>
      <ul className="space-y-2 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
        {bullet("Company Documentation")}
        <li className="pl-6 mt-1 space-y-1">
          <ul className="list-none space-y-1">
            {bullet("Company Incorporation Certificate")}
            {bullet("GST Certificate")}
            {bullet("Import Export Code (IEC) + PAN Card")}
          </ul>
        </li>
        {bullet("Documentation for the Product")}
        <li className="pl-6 mt-1 space-y-1">
          <ul className="list-none space-y-1">
            {bullet("Technical specifications")}
            {bullet("RF test report")}
            {bullet("Product data sheet")}
            {bullet("Product label + user manual")}
          </ul>
        </li>
        {bullet("Authorization Documentation")}
        <li className="pl-6 mt-1">
          <ul className="list-none space-y-1">
            {bullet("Authorization Letter + Letter from the Authorized Indian Representative (for foreign firms)")}
          </ul>
        </li>
        {bullet("Additional Documentation")}
        <li className="pl-6 mt-1">
          <ul className="list-none space-y-1">
            {bullet("ID proof of the authorized individual + Address proof + Fee payment receipt")}
          </ul>
        </li>
      </ul>

      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-8 mb-3">
        RF Test Report Prerequisite
      </h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
        The WPC approval requirement is strongly dominated by the RF test report.
      </p>
      <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] font-semibold">The RF report must contain data regarding:</p>
      <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-6 list-disc">
        <li>Frequency range</li>
        <li>Bandwidth</li>
        <li>Power output</li>
        <li>Modulation type</li>
        <li>RF exposure</li>
      </ul>
      <p className="mt-3 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
        The laboratory that performs the testing must be certified.
      </p>
    </section>
  );
};

const ProcessSection = () => {
  const bullet = (text) => (
    <li className="flex items-start gap-2">
      <span className="text-[#1A8781] mt-1 shrink-0">●</span>
      <span>{text}</span>
    </li>
  );
  const timelineData = [
    { process: "RF testing", duration: "5-10 days" },
    { process: "Application submission", duration: "1-2 days" },
    { process: "WPC review", duration: "10-20 days" },
    { process: "ETA certificate issuance", duration: "15-30 days" },
  ];
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">Process</span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Process of WPC ETA Certification
      </h2>
      <p className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide leading-loose">
        Here is the procedure.
      </p>

      {/* Step 1 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 1. Create an account on the Saral Sanchar portal.</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          All applicants must register on the Saral Sanchar portal of the Department of Telecommunications. After registration, an Import ID is created.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 2: Determine Exemption Status</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          Applicants need to determine whether the product is exempt or requires the ETA.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 3: Acquire RF Test Report</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          An accredited lab must demonstrate that the product complies with:
        </p>
        <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
          {bullet("Indian frequency bands")}
          {bullet("Allowed power levels")}
        </ul>
      </div>

      {/* Step 4 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 4: Submit New ETA Application</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          The New ETA Application must be completed online with the following:
        </p>
        <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
          {bullet("Technical Papers")}
          {bullet("RF test report")}
          {bullet("Company documents")}
        </ul>
      </div>

      {/* Step 5 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 5: Government Fees Payment</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          Applicable government fees must be paid online.
        </p>
      </div>

      {/* Step 6 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 6: Documents Review</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          WPC Reviewers will examine the:
        </p>
        <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
          {bullet("RF parameters")}
          {bullet("Technical compliance")}
          {bullet("Frequency band compliance")}
        </ul>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          If further explanation is needed, they may request more documents.
        </p>
      </div>

      {/* Step 7 */}
      <div className="mt-6">
        <h4 className="font-geist text-base md:text-lg font-semibold text-[#131316]">Step 7: Receiving WPC ETA Certificate</h4>
        <p className="mt-2 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
          WPC will issue an ETA certificate after successful review. The product becomes eligible for importation and sale in India once the certificate is issued.
        </p>
      </div>

      {/* Timeline */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-10 mb-3">
        Timeline to Get WPC ETA Certification
      </h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] leading-loose mb-3">
        Typical time to complete each step is shown below:
      </p>
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full border-collapse bg-white text-left">
          <thead>
            <tr className="bg-[#1A8781]">
              <th className="px-4 md:px-6 py-3 text-white text-sm md:text-base font-medium">Process Step</th>
              <th className="px-4 md:px-6 py-3 text-white text-sm md:text-base font-medium">Duration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {timelineData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-4 md:px-6 py-3 text-sm md:text-[15px] text-gray-900">{row.process}</td>
                <td className="px-4 md:px-6 py-3 text-sm md:text-[15px] text-gray-700">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-geist text-sm md:text-lg text-[#42434d] mt-3 font-semibold">Total time: 2 to 4 weeks</p>

      {/* Costs */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-8 mb-3">
        Costs of WPC ETA Certification in India
      </h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] leading-loose">Costs can vary based on:</p>
      <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
        {bullet("Product type")}
        {bullet("Testing needed")}
        {bullet("Consultant costs")}
      </ul>

      {/* Validity */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-8 mb-3">
        Validity of WPC ETA Certificate
      </h3>
      <p className="font-geist text-sm md:text-lg text-[#42434d] leading-loose">
        ETA certificate has lifetime validity. No renewal required unless:
      </p>
      <ul className="mt-2 space-y-1 font-geist text-sm md:text-lg text-[#42434d] pl-0 list-none">
        {bullet("Product design changes")}
        {bullet("RF module changes")}
        {bullet("Frequency changes")}
      </ul>

      {/* Conclusion */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-8 mb-3">
        Conclusion
      </h3>
      <div className="space-y-3 font-geist text-sm md:text-lg text-[#42434d] leading-loose">
        <p>
          WPC Approval is a regulatory necessity for all wireless products in India. This includes products such as Bluetooth speakers, IoT devices, Wi-Fi-enabled devices, and other devices. WPC ETA Compliance is important for regulatory requirements.
        </p>
        <p>
          The Wireless Planning and Coordination (WPC) keeps an eye on the use of the Indian radio frequency spectrum and manages interference. As technology advances and the use of wireless technology in devices, WPC compliance is critical for businesses that want to conduct wireless operations in India.
        </p>
        <p>
          Manufacturers and importers of wireless devices should begin the WPC ETA certification process as soon as possible to ensure compliance. This includes document preparation, RF testing, and other regulatory compliance to ensure a smooth market entry. WPC Compliance is the ticket to responsible and hassle-free use of wireless technology in India.
        </p>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <span className="font-geist text-[18px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
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
          Last updated on Feb 18, 2025
        </p>
      </div>
    </section>
  );
};

