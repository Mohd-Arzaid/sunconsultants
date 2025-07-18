import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import WPCimg from "../assets/images/cdsco-organizational-structure-diagram.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import Services from "../components/manual/Services";
import AboutAuthor from "../components/common/AboutAuthor";

const WPC = () => {
  return (
    <>
      <WPCHero />
      <WPCIndex />
      <WPCContent />
      <Footer />
      <ScrollToTopButton />
      {/*      <Footer/> */}
    </>
  );
};

export default WPC


const WPCHero = () => {
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
              WPC Registration Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Get hassle-free WPC certification with Sun certifications – your
            trusted compliance partner!
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
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("Overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const stickyRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const toggleButtonRef = useRef(null)

  const SECTIONS = [
    "Overview",
    "Product",
    "Approval",
    "Registration",
    "Role",
    "Process",
    "certifications",
    "Regulations",
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
  }

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
          Can't find the answer you are looking for?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                What services do you offer for CDSCO compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                We offer comprehensive CDSCO regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for pharmaceuticals, medical devices, and
                cosmetics in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                How long does the CDSCO approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                CDSCO approval timelines vary based on product category and
                application type. Typically, drug approvals take 6-12 months,
                medical device registrations 3-6 months, and cosmetic
                registrations 2-4 months. Our certifications work to expedite these
                timelines through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                What documents are required for CDSCO registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, stability data, clinical trial results (if
                applicable), Good Manufacturing Practice (GMP) certificates,
                Certificate of Pharmaceutical Product (CoPP), and various
                application forms specific to your product category. Our team
                assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                Do you assist with clinical trial approvals in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for clinical trial
                applications in India, including protocol development, ethics
                committee submissions, CDSCO applications, site selection
                assistance, and regulatory compliance throughout the trial
                process. We also help navigate the New Drugs and Clinical Trials
                Rules, 2019.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                What are the costs associated with CDSCO registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                CDSCO registration costs include official government fees (which
                vary by product type), testing fees, consultant fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements, with options
                for different service levels to fit various budgets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                How do you handle post-approval regulatory requirements?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Our post-approval services include pharmacovigilance support,
                periodic safety update reports, variation applications, renewal
                submissions, compliance with labeling requirements, adverse
                event reporting, and ongoing regulatory intelligence to keep you
                informed of regulatory changes affecting your products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                Can you help with import licenses for pharmaceuticals and
                medical devices?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Yes, we specialize in obtaining Import Licenses (Form 10) for
                drugs and Registration Certificates for medical devices. Our
                services include preparing all necessary documentation,
                coordinating with Indian authorized agents, liaising with CDSCO,
                and handling post-approval compliance requirements for imported
                products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                What experience does your consulting team have with CDSCO
                regulations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Our consulting team consists of regulatory experts with 10+
                years of experience in Indian pharmaceutical regulations. Team
                members include former regulatory professionals, pharmacists,
                and industry specialists who maintain close relationships with
                regulatory authorities and stay updated on the latest regulatory
                developments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px]  text-[#3f3f46] font-medium">
                How do recent regulatory changes affect pharmaceutical
                registrations in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
                Recent regulatory changes include the New Drugs and Clinical
                Trials Rules (2019), Medical Device Rules (2017), and ongoing
                updates to the Drugs and Cosmetics Act. These changes have
                streamlined some processes while adding new requirements for
                safety monitoring and quality control. Our certifications keep
                abreast of all changes and adjust strategies accordingly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[18px] md:text-[20px] text-[#3f3f46] font-medium">
                Do you offer support for manufacturing facility inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[18px] md:text-[20px] text-[#5e5f6e]">
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

const WPCContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProductsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ApprovalSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RegistrationSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RoleSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <certificationsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RegulationsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ReviewSection />

        <AboutAuthor />
      </div>
    </div>
  );
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
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Wireless Planning and Coordination (WPC)
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Wireless devices in India need an ETA certificate from WPC.
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Products with radio and/or wireless functionalities which are imported
        or manufactured and marketed in India must have an equipment type
        approval (ETA) certificate from the Wireless Planning and Coordination
        (WPC) wing of the Ministry of Communications of the government of
        India.This includes products with Bluetooth, wireless local area network
        access technology (Wi Fi), small digital radios (Zigbee), and radio
        frequency identification (RFID) among others.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "Mandatory for all radio/wireless products in India",
              "Bluetooth, Wi-Fi, Zigbee, RFID.",
              "Needed for most wireless devices under DoT guidelines.",
            ]}
            heading="Key Points on WPC License and ETA Certification"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={WPCimg}
            alt="WPC Certificate and ETA Approval Process - Sun Certifications India"
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

const ProductsSection = () => {
  return (
    <section id="product" className="flex flex-col scroll-mt-20">
      {/* Product */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Product
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Products Covered Under WPC Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        WPC certification is mandatory for all wireless products in India.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Mandatory requirements for all wireless products (transceivers,
        transmitters and receivers) entering the Indian market. Note: only
        receivers do not need approval, for example GPS products.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Product examples: Wireless Bluetooth-Watches, Wireless Water Heaters,
        Wireless Home Appliances, Wireless Car Radio, Radio Frequency
        Identification (RFID) tags and readers, Wireless Medical products used
        for patient profiling, Laptops, Mobile Phones, Wireless Mouse and
        Keyboard, Remote Key for entry, Wireless Headphones and/or Earplugs,
        Wireless Music Players, and any other Radio Frequency Modules
      </div>
    </section>
  );
};

const ApprovalSection = () => {
  return (
    <section id="approval" className="flex flex-col scroll-mt-20">
      {/* Approval */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Approval
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Guide to Equipment Type Approval (ETA)
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ETA approval is required to import wireless devices in India.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Equipment Type Approval (ETA) is an approval that has to be obtained
        from WPC before importing any wireless device in India which functions
        in the de-licensed frequency band. Such equipment include products like
        Bluetooth devices, mobile phones, Wi-Fi technology, RFID and others.{" "}
        <br /> <br />
        To obtain an ETA for de-licensed frequency band devices, a detailed test
        report of the equipment obtained from a well-recognized laboratory has
        to be submitted to WPC for evaluation. We help our clients with testing
        of their equipment and obtaining the test report in proper format for
        submission to WPC.
      </div>
    </section>
  );
};

const RegistrationSection = () => {
  return (
    <section id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Registration
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        How to Register for WPC License in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Complete WPC license assistance, from paperwork to approval.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Liaison with WPC which includes detailed application preparation, submission, replying to queries, and providing clarifications.",
            "Sending pre-registration request and documentation.",
            "Online submission of fee.",
            "Hardcopy submission of all documents to WPC.",
            "Multiple visits to the WPC office and agreement document signing.",
            "Time-to-time miscellaneous/incidental works throughout the license granting process.",
            "Complete solution for WPC-related queries with the help of a highly experienced professional team.",
          ]}
          heading="WPC License Assistance Steps"
        />
      </div>
    </section>
  );
};

const RoleSection = () => {
  return (
    <section id="role" className="flex flex-col scroll-mt-20">
      {/*Role */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Role
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        WPC license and ETA certification assistance.
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        We assist with WPC license and ETA certification as per ETSI and FCC
        standards.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        We assist in testing such products as per the European
        Telecommunications Standards Institute (ETSI, Europe) and Federal
        Communications Commission (FCC, US) standards. Our authorized agents
        connect applicants with local representative support and assist them in
        obtaining ETA certification. We support you in completing the required
        documentation for filling an application at the WPC.
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const tableData = [
    {
      step: "Determine the Requirement",
      description:
        "Identify whether your product requires an ETA (Equipment Type Approval) or a WPC Import License based on its usage and frequency range. Products operating on unlicensed ISM (Industrial, Scientific, and Medical) bands typically need an ETA certificate.",
    },
    {
      step: "Document Preparation",
      description:
        "Prepare the required documents, which may include:\n• Product specifications (datasheet).\n• Manufacturer's authorization letter.\n• Test reports (e.g., RF Test Report) from an authorized laboratory.\n• Import-Export Code (IEC) for import licenses.",
    },
    {
      step: "Application Submission",
      description:
        "Submit the application to the Wireless Planning and Coordination (WPC) Wing, a division of the Department of Telecommunications (DoT). Upload required documents through the SACFA (Standing Advisory Committee on Radio Frequency Allocation) portal.",
    },
    {
      step: "Testing and Validation",
      description:
        "Products must undergo RF testing to ensure compliance with technical and frequency standards. Use NABL-accredited labs in India or internationally recognized labs.",
    },
    {
      step: "Fee Payment",
      description:
        "Pay the prescribed application and license fees based on the product category and approval type.",
    },
    {
      step: "Approval and Issuance",
      description:
        "Upon successful evaluation, the WPC will grant the required license or ETA certificate. This certificate confirms that your product is approved for sale and use in India.",
    },
    {
      step: "Timeline",
      description:
        "The process generally takes 2–4 weeks, depending on document accuracy and application completeness.",
    },
    {
      step: "Why Professional Guidance",
      description:
        "Navigating the WPC process can be complex due to technical and regulatory requirements.",
    },
  ];

  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process header */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Process for WPC License Approval
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        We assist with WPC license and ETA certification as per ETSI and FCC
        standards.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "RF-Test Report Verification and Frequency Check",
            "Document Preparation for WPC License Application",
            "Online Government Fee Payment",
            "Online Submission of Documents to WPC Authority",
            "Offline (Hardcopy) Submission to WPC Office",
            "Document Scrutiny and Review by WPC",
            "Document Verification and Compliance Check",
            "Grant of ETA Certificate for Wireless Devices",
          ]}
          heading="WPC License and ETA Certification Process"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] w-full overflow-x-auto">
        <div className="overflow-hidden border border-gray-200 rounded-lg min-w-[300px]">
          <table className="w-full border-collapse bg-white text-left">
            <thead>
              <tr className="bg-[#1A8781]">
                <th className="w-1/4 px-4 md:px-6 py-3 md:py-4 text-white text-sm md:text-base font-medium">
                  Step
                </th>
                <th className="px-4 md:px-6 py-3 md:py-4 text-white text-sm md:text-base font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-[15px] font-medium text-gray-900">
                    {row.step}
                  </td>
                  <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-[15px] text-gray-700">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

const certificationsSection = () => {
  return (
    <section id="certifications" className="flex flex-col scroll-mt-20">
      {/* certifications */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          certifications
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        WPC License Consulting Services
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Expert guidance for WPC license and ETA certification process.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Our team of experienced WPC certifications provides comprehensive support throughout the entire certification process. We understand the complexities of wireless device regulations and help you navigate the WPC approval process efficiently.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Expert consultation on WPC license requirements",
            "Document preparation and verification",
            "Liaison with WPC authorities",
            "Test report coordination and validation",
            "Application submission and follow-up",
            "Query resolution and compliance support",
            "Post-approval assistance and renewal support",
          ]}
          heading="Our Consulting Services Include"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        With years of experience in wireless device certification, our certifications ensure that your products meet all regulatory requirements while minimizing time-to-market. We maintain strong relationships with WPC authorities and testing laboratories, enabling us to provide efficient and reliable services.
      </div>
    </section>
  );
};

const RegulationsSection = () => {
  return (
    <section id="regulations" className="flex flex-col scroll-mt-20">
      {/* Regulations */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Regulations
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        WPC Regulatory Framework
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Understanding the regulatory requirements for wireless devices in India.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Wireless Planning and Coordination (WPC) wing operates under the Ministry of Communications and regulates the use of radio frequency spectrum in India. The regulatory framework ensures that wireless devices comply with technical standards and do not cause harmful interference.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Indian Wireless Telegraphy Act, 1933",
            "Indian Telegraph Act, 1885",
            "WPC Guidelines for Equipment Type Approval",
            "Frequency Allocation and Usage Rules",
            "Technical Standards for Wireless Equipment",
            "Import and Manufacturing Regulations",
            "Spectrum Management Guidelines",
          ]}
          heading="Key Regulatory Documents"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The WPC regulatory framework is designed to ensure the efficient use of radio frequency spectrum while protecting against interference. All wireless devices must comply with these regulations to be legally imported, manufactured, or sold in India. Our certifications help you understand and comply with these requirements.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          IMPORTANT
        </span>
        Non-compliance with WPC regulations can result in penalties, confiscation of equipment, and legal consequences. It's crucial to ensure your wireless devices meet all regulatory requirements before entering the Indian market.
      </div>
    </section>
  );
};
