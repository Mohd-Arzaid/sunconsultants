import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import BISSRimg from "../assets/images/BISSRimg.png";

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
import { BISCProductTable } from "@/components/manual/BISCertification";


const ISIMark = () => {
    return (
        <>
          <BISFMHero />
          <BISFMIndex />
          <BISFMContent />
          <Footer/>
          <ScrollToTopButton />
        </>
  )
}

export default ISIMark



// BIS Hero Section
const BISFMHero = () => {
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
                BIS Certificate
                <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
              </span>{" "}
              For Foreign Manufactures
            </h1>
  
            <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
              Foreign manufacturers need ISI mark for exports to India. Covers
              1,000+ mandatory & 20,000+ voluntary products.
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
          <ServiceContactForm/>
        </div>
      </main>
    );
  };
  
  // BIS Index Section
  const BISFMIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("Nomination");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);
  
    const SECTIONS = [
      "Nomination",
      "Documents",
      "Process",
      "Validity",
      "Payment",
      "Surveillance",
      "Consulting",
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
        className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
  
  // BIS Content Section
  const BISFMContent = () => {
    return (
      <div className="">
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
            {/* Left Side */}
  
            <BISFMContentLeft />
  
            {/* Right Side */}
            <ServiceContentRight />
          </div>
        </div>
        <BISCProductTable />
        <ServiceFaq />
      </div>
    );
  };
  
  // BIS FAQs Section
  const ServiceFaq = () => {
    return (
      <div id="faqs" className="my-2  scroll-mt-20">
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
  
  const BISFMContentLeft = () => {
    return (
      <div className=" flex-1 ">
        <div className="flex flex-col gap-[20px] md:gap-[40px]">
          {/* Nomination Section */}
          <NominationSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <DocumentsSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <ProcessSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <ValiditySection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <PaymentSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <SurveillanceSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
  
          <ConsultingSection />
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
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
  
  const NominationSection = () => {
    return (
      <section id="nomination" className="flex flex-col scroll-mt-20">
        {/* Nomination */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Nomination
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
  
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Authorized Indian Representative Nomination
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          Pre-requisites of nomination of an Authorized Indian Representative
        </p>
  
        {/* Nomination Content */}
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          In case of FMCS certificate , the foreign manufacturer has to
          mandatorily appoint an{" "}
          <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
            Authorized Indian Representative ( Also known as AIR )
          </span>{" "}
          who is the official representative of the firm to BIS, the following
          points must be checked by the manufacturer before appointing an AIR:
        </div>
  
        {/* Important Points And Image */}
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsList
              points={[
                "Must be an Indian resident.",
                "Should have a basic educational background to understand procedures.",
                "Well-versed with the BIS certification process.",
                "Must have a valid address for certificate documentation.",
              ]}
              heading="Eligibility Criteria for AIR in BIS Certification"
            />
          </div>
  
          {/* Image */}
          <div className="w-full md:w-auto">
            <img
              src={BISSRimg}
              alt="Medical laboratory equipment"
              className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
            ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
            hover:ring-gray-900/12.5 w-[400px] h-[250px] mt-2.5
            "
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
          Documents Required For FMCS BIS Certification
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          BIS Certification Documents | Sun Certifications And Engineers
        </p>
  
        {/* Eligibility Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          Majority of the documents required for application are from the
          manufacturers and and a few documents of Indian representative are
          required, the{" "}
          <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
            list of documents are as follows:
          </span>
  
          <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
            {/* Points */}
            <div className="w-full md:w-auto">
              <PointsListTwo
                points={[
                  "Application form",
                  "List of plant and machinery",
                  "List of raw materials",
                  "List of test equipments in factory as per Indian Standard issued by BIS",
                  "Calibration certificates for all the instruments",
                  "Plant layout",
                  "Test certificates of raw materials",
                  "Details of Quality in-charge appointed in the factory",
                  "Bank Guarantee, etc.",
                ]}
                heading="Essential Documents for BIS Certification Application :"
              />
            </div>
  
          </div>
  
          <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            All of the above documents are required in certain formats given by
            BIS which are to be submitted during the application. As FMCS
            consultants, we at Sun Certifications And Engineers are experts for
            preparation of all the documents above in formats prescribed by BIS,
            contact us for more details at
            <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
              <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
                Email
              </span>
              info@sunconsultants.co.in , sunconsultantsinfo@gmail.com
            </div>
          </div>
          <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              Phone
            </span>
            +91-9315973373 , +91-7303745057
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
        BIS License Process for Foreign Manufacturers
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS FMCS Process: Application, audit, testing, and approval. Contact us!
        </p>
  
        {/* Eligibility Content */}
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
           <div className="flex mt-[-20px] gap-10">
            {/* Points */}
            <PointsListTwo
              points={[
                "Stage-1: Submission of application to BIS in hard copy",
                "Stage-2: The application will be scrutinized by BIS officials in-line with the Indian standard (IS) and then the shortcomings will be communicated",
                "Stage-3: Clearing of queries (if any) by submitting the reply to BIS",
                "Stage-4: Assignment of the BIS auditor for conducting audit at the manufacturing premises",
                "Stage-5: Finalization of audit date with mutual consent of the manufacturer",
                "Stage-6: Conduction of audit at the manufacturing premises in foreign and sealing of samples by the auditor",
                "Stage-7: Testing of sample as per the Indian Standard at the manufacturer's in house test lab",
                "Stage-8: Sending of the sealed sample to selected BIS lab in India",
                "Stage-9: Clearing of queries (if any) raised during the audit",
                "Stage-10: After BIS receives the test report of the sample sent for testing, the license is granted",
              ]}
            />
          </div>
  
          <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
            <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
              <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
                Note
              </span>
              1) Performance Bank guarantee must be issued by any bank worldwide
              that has a RBI approved branch in India.
            </div>
          </div>
  
          <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              Note
            </span>
            2) Time to obtain BIS certification for foreign manufacturers is
            approx. 3 months
          </div>
  
          <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              IMP
            </span>
            The BIS license legibly and clearly marks the scope in the license,
            mentioning the products on which you can mention the license number,
            Violation of the same ensures stringent actions like license being
            cancelled. There are provisions of upto imprisonment in BIS
            regulations.
          </div>
        </div>
      </section>
    );
  };
  
  const ValiditySection = () => {
    return (
      <section id="validity" className="flex flex-col scroll-mt-20">
        {/* Validity */}
        <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
        Validity
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS License Validity, Renewal & Fees
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Valid for 1 or 2 years, renewal requires documents & fees. Late
          applications incur a fee.
        </p>
  
        <div className="mt-[-5px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            BIS license initially can be granted for 1 or 2 years, depending upon
            the request of the manufacturer, and it has to be renewed after
            that.During renewal various mandatory documents have to be submitted
            along with the payment of minimum marking fee and licence free. If the
            application is submitted after the due date, late fee is also
            applicable.
          </div>
        </div>
      </section>
    );
  };
  
  const PaymentSection = () => {
    return (
      <section id="payment" className="flex flex-col scroll-mt-20">
        {/* Payment */}
        <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
        Payment
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Stages of payment of BIS fees:
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          BIS Fees: Application, audit, and license fees, paid in USD. Contact us!
        </p>
  
        {/* Eligibility Content */}
        <div className="mt-[35px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          <div className="flex mt-[-20px] gap-10">
            {/* Points */}
            <PointsListTwo
              points={[
                "Payment of application fee during the submission of application",
                "Payment of Audit charges after allotment of the auditor (Eg: Man day charges, Per diem fees, Officer travel charges, etc.)",
                "Payment of Minimum marking fee and license fee before the grant of licence",
              ]}
              heading="Eligibility Criteria for AIR in BIS Certification"
            />
          </div>
  
          <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
            <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
              <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
                Note
              </span>
              All the payments have to be done by the manufacturer directly to
              BIS' bank account in USD
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const SurveillanceSection = () => {
    return (
      <section id="surveillance" className="flex flex-col scroll-mt-20">
        {/* Surveillance */}
        <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
        Surveillance
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certificate Surveillance Process :
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS Surveillance: Routine checks ensure compliance; failures risk
          cancellation.
        </p>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS conducts surveillance on the manufacturers to ensure that the
          standards are being followed as per the guidelines.
        </div>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            This is done in 2 ways:
          </span>
        </div>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          1. Market surveillance:
        </div>
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          This is done twice yearly. Samples are randomly picked from market and
          sent to government labs for testing as per the standards, If the sample
          passes, no problem, but if the sample fails , the manufacturer is
          informed and they have to take corrective action.Subsequent failure of
          market sample can lead to suspension or cancellation of the licence.
        </div>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          2. Factory surveillance:
        </div>
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          After obtaining the licence, there are certain formalities like
          maintenance of test records, regular testing of the product and so on.To
          keep a check that all the protocols are followed, BIS conducts random
          factory surveillance twice in a year to keep a check on the
          manufacturer. If subsequent mistakes are observed during several visits,
          the license is liable to be suspended / cancelled.
        </div>
      </section>
    );
  };
  
  const ConsultingSection = () => {
    return (
      <section id="consulting" className="flex flex-col scroll-mt-20">
        {/* Consulting */}
        <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
        Consulting
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>
  
        {/* Title */}
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Role of Sun Certifications And Engineers?
        </h3>
  
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          Sun Certifications And Engineers ensure hassle-free BIS FMCS licensing
        </p>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          From collection of documents to getting the final license, it is a
          exhaustive and tedious procedure, and requires technical know-how and
          experience. Being a FMCS Consultant, this is exactly where Sun
          Certifications And Engineers come into the picture.
        </div>
  
        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          With over 10 years of experience in this field and after providing
          assistance to numerous manufacturers and importers we can help you in
          smoothening of this process, by complete hand-holding solution, right
          from the beginning of the procedure to the grant of BIS license.
        </div>
  
          <div className="flex mt-[16px] md:mt-[24px] gap-10">
          {/* Points */}
          <PointsListTwo
            points={[
              "Preparation of documents as per BIS guidelines",
              "Submission of application to the department",
              "Clearing the queries from BIS (if any)",
              "Coordinating with the BIS official and the manufacturer for audit dates",
              "Assistance during the audit",
              "Follow-up with the department for grant of license",
              "Technical assistance for the setup of in-house lab as per the standard requirements",
              "Assisting the manufacturer in understanding the post license compliances to be followed",
            ]}
            heading="Below is the scope of work of Sun Certifications And Engineers:"
          />
        </div>
      </section>
    );
  };
  
