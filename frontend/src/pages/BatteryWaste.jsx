import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../assets/images/BISSRimg.png"


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import ServiceContentRight from "@/components/manual/CDSCOContentRight";
  import { Check } from "lucide-react";
  import Footer from "@/common/Footer";

  
const BatteryWaste = () => {
  return (
    <>
      <EPRHero />
       <EPRIndex />
     <EPRContent />
      {/* <Footer/> */}
    </>
  )
}

export default BatteryWaste


const EPRHero = () => {
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
              <span className="text-[#1A8781] font-poppins text-sm md:text-base font-medium tracking-wider uppercase">
                Certified Expertise
              </span>
            </div>
  
            <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
              <span className="relative">
                EPR Registration for
                <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
              </span>{" "}
              E-Waste
            </h1>
  
            <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
              Get EPR certification for e-waste management. Ensure CPCB compliance
              with proper recycling & disposal plans
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
  
  const EPRIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("Overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);
  
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
      setIsMobileMenuOpen(prevState => !prevState);
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
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Check if the element is intersecting and its position relative to viewport
          const rect = entry.boundingClientRect;
          const isAtTop = rect.top <= 1; // Added small buffer
          setIsSticky(
            !entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1)
          );
        },
        {
          threshold: [0, 1], // Observe both when fully visible and when starting to intersect
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
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              if (entry.target.id === "faqs") {
                setActiveSection("FAQs");
              } else {
                // Convert id like "overview" to "Overview"
                const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
                setActiveSection(sectionName);
              }
            }
          });
        },
        { threshold: 0.5 }
      );
  
      // Observe each section
      [
        "Overview",
        "Eligibility",
        "E-Waste",
        "Documents",
        "Synopsis",
        "Process",
        "Consultancy",
        "FAQs",
      ].forEach(section => {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                "E-Waste",
                "Documents",
                "Synopsis",
                "Process",
                "Consultancy",
                "FAQs",
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
            "E-Waste",
            "Documents",
            "Synopsis",
            "Process",
            "Consultancy",
            "FAQs",
          ].map((item) => (
            <div
              key={item}
              onClick={() => handleItemClick(item)}
              className={`relative cursor-pointer group ${
                item === activeSection
                  ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900"
                  : ""
              }`}
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
              {item !== activeSection && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const EPRContent = () => {
    return (
      <div className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
            {/* Left Side */}
  
            <EPRContentLeft />
  
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
                  href="https://www.github.com/sunconsultants"
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
                  href="https://x.com/sunconsultants"
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
                  href="https://www.linkedin.com/company/sunconsultants"
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
  
  const EPRContentLeft = () => {
    return (
      <div className="flex-1">
        <div className="flex flex-col gap-[20px] md:gap-[40px]">
          {/* Overview Section */}
          <OverviewSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <EligibilitySection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <EWasteSection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <DocumentsSection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <SynopsisSection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <ProcessSection />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <ConsultingSection />
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
          E-Waste Management & EPR Certification
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          E-Waste Management & EPR Certification for CPCB compliance.
        </p>
  
        {/* Overview Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          E-waste" is a popular, informal name for electronic products nearing the
          end of their "useful life. "E-wastes are considered dangerous, as
          certain components of some electronic products contain materials that
          are hazardous, depending on their condition and density. The hazardous
          content of these materials pose a threat to human health and
          environment. <br></br>
          <br></br>
          Discarded computers, televisions, VCRs, stereos, copiers, fax machines,
          electric lamps, cell phones, audio equipment and batteries if improperly
          disposed can leach lead and other substances into soil and groundwater.
          Many of these products can be reused, refurbished, or recycled in an
          environmentally sound manner so that they are less harmful to the
          ecosystem. This article highlights the hazards of e-wastes, the need for
          its appropriate management and options that can be implemented.
        </div>
  
        {/* Important Points And Image */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Mandatory by CPCB for e-waste management in India.",
                "Applies to manufacturers & importers of electronic products.",
                "Requires a future disposal plan for e-waste submission to CPCB.",
                "Tie-up with authorized recyclers for proper disposal.",
                "Submit estimated e-waste quantity & disposal methods for EPR approval.",
              ]}
              heading="Eligibility Criteria for AIR in BIS Certification"
            />
          </div>
        </div>
      </section>
    );
  };
  
  const EligibilitySection = () => {
    return (
      <section id="eligibility" className="flex flex-col scroll-mt-20">
        {/* Eligibility */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Eligibility
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Who can Apply
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          EPR certification is required for electronics makers & importers via
          CPCB.
        </p>
  
        {/* Eligibility Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          All manufacturers, whether of Indian or foreign origin, as well as
          importers of electronics, are required to apply for an EPR certificate
          under the E-waste Management Rules. This application must be submitted
          through the CPCB portal to comply with regulations
        </div>
      </section>
    );
  };
  
  const EWasteSection = () => {
    return (
      <section id="e-waste" className="flex flex-col scroll-mt-20">
        {/* E-Waste */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            E-Waste
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          E-waste Item List
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          E-Waste Management & EPR Certification for CPCB compliance.
        </p>
  
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsList
              points={[
                "LCD and LED Television Sets; ",
                "Refrigerators;",
                "Washing Machines;",
                " Air-Conditioners excluding Centralized Air conditioning plants;",
                "Fluorescent and other Mercury containig lamps;",
              ]}
              heading="Consumer Electrical & Electronics"
            />
          </div>
  
          <img
            src={BISSRimg}
            alt="Medical laboratory equipment"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
            ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
            hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
            "
          />
        </div>
  
        {/* Important Points  */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Centralized Data Processing: Mainframe , Mini-Computer, Personal Computer, Laptop, Notebook Computer and accessories, Notepad; ",
                "Printers including components;",
                " Copying Equipment;",
                "Electrical and Electronic Typewriters;",
                "User terminal and systems;",
                "Facsimile;",
                "Telex;",
                "Telephones;",
                "Pay Telephones;",
                "Cordless Telephones;",
                "Cellular Telephones;",
                "Answering Systems;",
              ]}
              heading="Information Technology & Telecommunication Equipment"
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
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Documents
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Vital Documents Required for :
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          E-Waste Management & EPR Certification for CPCB compliance.
        </p>
  
        {/* Documents Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          We require duly signed and stamped document in hard copies so that we
          can submit in E-waste Management-Office for the further process.
          importe's Name , Product Name, Model Number and Docments should be
          accurate to avoid any sort of query from E-waste Officials.
        </div>
  
        {/* Important Points And Image */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "23 Letter Heads of the company",
                "GSTIN",
                "PAN Details",
                "Incorporation Certificate",
                "Copy IEC in case of importers",
                "Copy of Aadhar Card",
                "Product Details",
              ]}
              heading="Eligibility Criteria for AIR in BIS Certification"
            />
          </div>
        </div>
      </section>
    );
  };
  
  const SynopsisSection = () => {
    return (
      <section id="synopsis" className="flex flex-col scroll-mt-20">
        {/* Synopsis */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Synopsis
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Synopsis for control of E-waste
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          Control materials & track inventory to reduce waste in manufacturing.
          CPCB.
        </p>
  
        {/* Synopsis Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          Proper control over the materials used in the manufacturing process is
          an important way to reduce waste generation (Freeman, 1989). By reducing
          both the quantity of hazardous materials used in the process and the
          amount of excess raw materials in stock, the quantity of waste generated
          can be reduced. This can be done in two ways i.e. establishing
          material-purchase review and control procedures and inventory tracking
          system.Developing review procedures for all material purchased is the
          first step in establishing an inventory management program. <br />{" "}
          <br />
          Procedures should require that all materials be approved prior to
          purchase. In the approval process all production materials are evaluated
          to examine if they contain hazardous constituents and whether
          alternative non-hazardous materials are available.Another inventory
          management procedure for waste reduction is to ensure that only the
          needed quantity of a material is ordered. This will require the
          establishment of a strict inventory tracking system. Purchase procedures
          must be implemented which ensure that materials are ordered only on an
          as-needed basis and that only the amount needed for a specific period of
          time is ordered.
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
          Process for EPR license and post compliances :
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          EPR registration involves CPCB application, certification, recycling,
          and yearly renewal.
        </p>
  
        {/* Process Content */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Identifying if the product falls under EPR E-waste guidelines.",
                "Creating data as to how much E-waste is generated by the firm",
                "Filing online application on the CPCB portal",
                "Payment of requisite fees to the govt.",
                "Final submission of application",
                "Generation of EPR certificate",
                "Getting the products re-cycled as per the plan",
                "Submission of re-cycling certificate on yearly/quarterly basis.",
              ]}
              heading="EPR Registration Process for E-Waste Compliance"
            />
          </div>
        </div>
  
        <div className="mt-[30px] md:mt-[46px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Timeline
          </span>
          Approx 1-2 weeks after submission of application
        </div>
        <div className="mt-[16px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Validity
          </span>
          It is granted for 1 year initially and has to be renewed after that by
          paying the government fees.
        </div>
      </section>
    );
  };
  
  const ConsultingSection = () => {
    return (
      <section id="consultancy" className="flex flex-col scroll-mt-20">
        {/* Consultancy */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Consultancy
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Role of Sun Consultants & Engineers?
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          Sun Consultants & Engineers ensure hassle-free EPR licensing
        </p>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          As EPR registration consultants, our job is to ensure that the tiring
          procedures that we have listed above become a cake-walk for you. Right
          from the beginning i.e. from the stage of collection of documents from
          the foreign manufacturers or preparation of documents for the Indian
          manufacturer and following up with the department for grant of license
          is under our scope.
        </div>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          We are one of the most experienced EPR consultants in the field of
          E-waste management,we provide apex quality of services possible to all
          our national and international clients.
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