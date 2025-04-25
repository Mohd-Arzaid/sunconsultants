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
import Footer from "@/common/Footer";

const Peso = () => {
  return (
    <>
      <PESOHero />
      <PESOIndex />
      <PESOContent />
      <Footer />
    </>
  );
};

export default Peso;

const PESOHero = () => {
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
              PESO Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            for Hazardous Goods
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            PESO certification ensures safety compliance for hazardous materials
            like petroleum, gas, and explosives.
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
        <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
          <div className="flex w-full items-center gap-3">
            <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
              Contact Us
            </span>
            <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
          </div>

          <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
            Make an Appointment
          </h3>

          <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
            Want to contact our team and book a call?
            <span className="text-black"> Try it now</span>
          </p>

          <div className="flex flex-col mt-5 gap-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <Input
                placeholder="Full Name"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Email Address"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <Input
                placeholder="Contact Number"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Company Name"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              <Input
                placeholder="Product Name"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />

              <Input
                placeholder="Type Message"
                className="w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold text-[15px] md:text-[16px] placeholder:leading-[24px] placeholder:tracking-wide px-5"
              />
            </div>

            <Button className="mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

const PESOIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Products",
    "Licensees",
    "Documents",
    "Process",
    "Stakeholders",
    "Rules",
    "FAQs",
  ];

  const handleItemClick = (item) => {
    const elementId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1;
        setIsSticky(
          !entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1)
        );
      },
      {
        threshold: [0, 1],
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (entry.target.id === "faqs") {
              setActiveSection("FAQs");
            } else {
              const sectionName = entry.target.id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    SECTIONS.forEach((section) => {
      const elementId = section.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(elementId);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${
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
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
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
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
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

const PESOContent = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <PESOContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
    </div>
  );
};

const ServiceFaq = () => {
  return (
    <div id="faqs" className="my-2 bg-gray-50 scroll-mt-20">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                CDSCO approval timelines vary based on product category and
                application type. Typically, drug approvals take 6-12 months,
                medical device registrations 3-6 months, and cosmetic
                registrations 2-4 months. Our consultants work to expedite these
                timelines through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for CDSCO registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Recent regulatory changes include the New Drugs and Clinical
                Trials Rules (2019), Medical Device Rules (2017), and ongoing
                updates to the Drugs and Cosmetics Act. These changes have
                streamlined some processes while adding new requirements for
                safety monitoring and quality control. Our consultants keep
                abreast of all changes and adjust strategies accordingly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you offer support for manufacturing facility inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
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
    <div className="flex flex-col w-full md:w-auto">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PESOContentLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-col gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProductsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <LicenseesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <StakeholdersSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RulesSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultancySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
     
      {/* Review Section */}
      <ReviewSection />
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
        PESO Certification: Safety First
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        PESO ensures safety in handling petroleum, gases, and explosives.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Petroleum and Explosives Safety Organization, abbreviated as PESO, is a mid-level Nodal organization founded in September 1898. This organization is mainly responsible for managing and administering risky substances such as bio-chemicals, gas cylinders, petroleum, and explosives that possess their own significance and risk to several human lives.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Explosive Act 1884",
            "Petroleum Act 1934 & Rules 2002",
            "Cinematographic Film Rules 1948",
            "Inflammable Substance Act 1952",
            "Calcium Carbide Rules 1987",
            "Ammonium Nitrate Rules 1987",
            "Gas Cylinders Rules 2002",
          ]}
          heading="PESO Divisions & Safety Regulations"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        We are all aware of how dangerous petroleum and compressed gases are and how even a single ignite coming into contact with them can cause a catastrophe that puts human life in danger. Hazards associated with compressed gases are combustible, poisonous, oxidizing, and corrosive.
        <br />
        <br />
        For more than a century, the PESO has achieved a legendary grade as an organization of distinction in the regions connected to risky material safety in refining/ manufacturing, storage, handling, transportation, and usage. Today, the PESO organization works on various topics such as petroleum, compressed gases, explosives, gas cylinders, cross-country pipelines, Ammonium Nitrate, Flame Proof electric fittings, and others.
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="flex flex-col scroll-mt-20">
      {/* Products */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Products
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Products Covered by PESO
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        PESO certification is required for hazardous equipment.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Here is a comprehensive list of the products that require certification. A PESO registration is necessary for electrical equipment that must endure extremely corrosive seawater or extremely hot situations in addition to the aforementioned products. Purely mechanical parts that are employed in hazardous regions in India must also get PESO certification.
        <br />
        <br />
        For explosion-proof products, one may often adhere to a pretty straightforward rule: PESO is required for all items that require either IECEx or ATEX certification.
      </div>
    </section>
  );
};

const LicenseesSection = () => {
  return (
    <section id="licensees" className="flex flex-col scroll-mt-20">
      {/* Licensees */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Licensees
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Process of PESO Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        PESO certifies products for three years through review and audits.
      </p>

      <div className="mt-[16px] md:mt-[25px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Documentation <br /> <br />
        </span>
        Prepare the application with the necessary paperwork, including the test results and ATEX/IECEx certificates. Test results must be at least two years old. Equipment that has undergone thorough testing and been given the all-clear to operate safely in an explosive or hazardous environment is given an ATEX certificate. IECEx is a certification to Standards for equipment used in explosive or dangerous environments.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Submission of Application <br /> <br />
        </span>
        Submit your application to the PESO authorities together with the necessary business information, such as sales figures, client lists, and client testimonials.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Scrutiny <br /> <br />
        </span>
        The paperwork and application are reviewed by PESO officials.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Audit
          <br /> <br />
        </span>
        Only specific products, such as pressure vessels, are subject to factory audits.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          PESO Certification
          <br /> <br />
        </span>
        he PESO Certificate will be issued if PESO personnel are satisfied with the supporting documentation and test results.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Licence to Authorized Indian Representatives
          <br /> <br />
        </span>
        Additionally, the Authorized Indian Representative receives a license.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Please Note
          <br /> <br />
        </span>
        Once the PESO license has been approved, the product may be imported. The authorities typically accept test reports that have received international recognition, such as IECEx or ATEX. In any case, the products must be assessed in India if you don't have these test findings.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          TAT
          <br /> <br />
        </span>
        90 - 100 Days
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          License Validity <br /> <br />
        </span>
        After three years have passed, the license must be renewed. Static pressure vessel PESO licenses are only good for three years before they need to be renewed.
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
        PESO License: Required Documents
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Required: Application, licenses, certificates, test reports, and sales data.
      </p>

      {/* Content */}
      <div className="mt-[10px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex mt-[24px] gap-10">
          {/* Points */}
          <PointsListTwo
            points={[
              "Application materials (application form, contract with AIR for min. 5 years, technical competence proof of AIR, etc.)",
              "Business licenses for plants, manufacturers, and AIR",
              "Global Organization Chart",
              "Certificates for ATEX/IECEx products",
              "Reports on Tests, QAR/QAN",
              "Profile of the manufacturer",
              "A list of testing and production equipment",
              "Certified by ISO",
              "Production facility video",
              "Commercial data containing sales data for the previous three years, a list of Indian clients, and installation details for hazardous areas, such as the equipment's intended use and installation location.",
            ]}
            heading="PESO License Requirements: Essential Documents & Certifications"
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
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        PESO Certification: Meaning & Importance
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        PESO: Ensuring Explosives & Petroleum Safety
      </p>

      <div className="mt-[46px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Chief Controller of Explosives (CCOE) is another name for the Petroleum and Explosive Safety Organization (PESO). The safety requirements for the manufacture, importers, exporters, sellers, storage, transit, and handling of explosives, combustible materials, pressure vessels, petroleum, and compressed gases are managed, controlled, and looked after by this organization. Additionally, it controls and manages Indian petrol stations. The Department for Promotion of Industry and Internal Trade and the Ministry of Commerce and Industry is in charge of PESO, an independent regulatory authority.
        <br /> <br />
        The oil and gas industry's mandatory approval mechanism for products that deal with gases, are used in the oil industry, or must withstand severely corrosive environments is described in PESO Certification. Nagpur, Maharashtra, is home to PESO's headquarters.
      </div>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "The Chief Controller must approve all 1981 drawings, designs, specifications, and codes. They are responsible for tests, examinations, inspections, and certifications of installations and transport vehicles.",
            "District authorities must issue no-objection certificates or notify applicants of refusal within two months, stating reasons as per Rule 47(7).",
            "General Exemptions - Vessels in processing facilities are exempt from regulations if they perform unit operations and contain compressed gas used within the same plant.",
            "Children aged under 18 and intoxicated persons is prohibited",
            "Fires, lights, and smoking, etc., at any time in proximity to the places are prohibited where any compressed gas is stored, transported or handled in a vessel.",
            "Person in charge of supervision and operation on the licensed property must be knowledgeable about the machinery and should be trained enough in handling hazardous materials.",
            "Vessels except when they are opened for the purposes of filling, cleaning, or making them gas-free, all empty vessels carrying combustible or toxic gases must be kept securely closed until they have been cleaned or released of the gas, as the case may be.",
            "Any alterations to machines or pressure vessels must be inspected before reuse.",
          ]}
          heading="Key SMPV (U) Rules, 1981 for PESO Certification"
        />
      </div>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "No one is allowed to transport or fill a vessel with compressed gas unless it complies with the types, standards, or codes listed in Rule 12.",
            "No vessel permitted under sub-rule (1) may be produced without prior approval from the Chief Controller.",
            "No one may import a vessel without prior consent from the Chief Controller.",
          ]}
          heading="Limitation on Manufacturer, Filling and Import"
        />
      </div>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Compressed gas loaded into a vessel may only be sent to the owner of a valid storage permit, a port administration, or a railroad administration.",
            "The quantity of compressed gas delivered must not exceed the amount allowed by the recipient's license.",
          ]}
          heading="Restraint on Delivery & Dispatch"
        />
      </div>
    </section>
  );
};

const StakeholdersSection = () => {
  return (
    <section id="stakeholders" className="flex flex-col scroll-mt-20">
      {/* Stakeholders*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Stakeholders
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        PESO Licensing & Stakeholders
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        PESO certifies petroleum, gas, and explosives with one-day registration.
      </p>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Petroleum / Gas Cylinders / SMPV (U)",
            "Explosives / Ammonium Nitrate",
            "Degassing and Purging under SMPV (U)",
            "Gas Cylinder Testing Stations",
            "Fabrication Shops",
          ]}
          heading="PESO covers these licensed businesses:"
        />
      </div>

      <div className="mt-[46px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Timeline
        </span>
        PESO registration process will take 1 day after the documents are submitted to us.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Validity
        </span>
        Validity of PESO online registration is perpetual i.e. no end date and requires no renewal.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        After the registration is completed, a unique file number is generated, which has to be mentioned on the product / packaging, in case of registration there is no certificate
      </div>
    </section>
  );
};

const RulesSection = () => {
  return (
    <section id="rules" className="flex flex-col scroll-mt-20">
      {/* Rules */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Rules
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        SMPV (Unfired) Rules for PESO Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        SMPV PESO Certification: High-pressure storage, 6-8 weeks, 5-year validity.
      </p>

      {/* Content */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Static and Mobile Pressure Vessels are referred to as SMPVs. Static pressure containers are made to store linear loads with mass and volume variations that significantly exceed the features of the material's ambient pressure. This type of fabrication is justified by safety considerations, with the prevention of contaminating pure contents coming in second. The purpose of pressure vessels is to store liquids, gases, or vapors under high pressure.
        <br />
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Timeline
        </span>
        Approx 6-8 weeks after submission of application.
        <br /> <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Validity
        </span>
        It is granted for 5 years initially and has to be renewed after that by paying the government fees.
      </div>

      <div className="flex mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "In case of PESO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
            "License number mentioned on the CDSCO registration certificate has to be mentioned on the products/packaging.",
            "Test license is also required in case of Indian manufacturers.",
          ]}
          heading="Note:"
        />
      </div>
    </section>
  );
};

const ConsultancySection = () => {
  return (
    <section id="consultancy" className="flex flex-col scroll-mt-20">
      {/* Consultancy*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consultancy
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        PESO License Experts - Sun Consultants
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        We make PESO registration easy with expert support.
      </p>

      <div className="mt-[30px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As PESO registration consultants, our job is to ensure that the tiring procedures that we have listed above become a cake-walk for you. Right from the beginning i.e. from the stage of collection of documents from the foreign manufacturers or preparation of documents for the Indian manufacturer and following up with the department for grant of license is under our scope.
        <br />
        <br />
        We are one of the most experienced PESO consultants in the field of medical products,we provide apex quality of services possible to all our national and international clients.
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
