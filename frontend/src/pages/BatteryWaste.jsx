import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../assets/images/BISSRimg.png";

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BatteryWaste = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>EPR Registration for Battery Waste Management</title>
        <meta name="description" content="EPR Registration for battery waste is a regulatory authorization that holds producers responsible for sustainable collection, recycling and disposal of used batteries." />
        <meta name="keywords" content="epr portal for battery waste management, epr authorization for battery waste management, battery waste epr, epr for battery waste, epr registration for battery waste management, battery epr, battery waste epr certificate, CPCB battery waste registration, battery waste management rules 2022, extended producer responsibility battery" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bis-certifications.com/epr-certificate-for-battery-waste-management-bwm" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="EPR Registration for Battery Waste Management " />
        <meta property="og:description" content="EPR Registration for battery waste is a regulatory authorization that holds producers responsible for sustainable collection, recycling and disposal of used batteries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bis-certifications.com/epr-certificate-for-battery-waste-management-bwm" />
        <meta property="og:site_name" content="BIS Certifications" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EPR Registration for Battery Waste Management " />
        <meta name="twitter:description" content="EPR Registration for battery waste is a regulatory authorization that holds producers responsible for sustainable collection, recycling and disposal of used batteries." />
        
        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json"> 
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "EPR Registration for Battery Waste Management",
                "item": "https://bis-certifications.com/epr-certificate-for-battery-waste-management-bwm",
              },
            ],
          })}
        </script>
        
        {/* JSON-LD Service structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "EPR Registration for Battery Waste Management",
            "description": "EPR Registration for battery waste is a regulatory authorization that holds producers responsible for sustainable collection, recycling and disposal of used batteries. Complete assistance for EPR authorization for battery waste management compliance.",
            "provider": {
              "@type": "Organization",
              "name": "BIS Certifications",
              "url": "https://bis-certifications.com"
            },
            "serviceType": "Regulatory Compliance Service",
            "areaServed": "India",
            "keywords": "epr portal for battery waste management, epr authorization for battery waste management, battery waste epr, epr for battery waste, epr registration for battery waste management, battery epr, battery waste epr"
          })}
        </script>
      </Helmet>

      <div className="absolute left-0 top-3 z-30 w-full md:top-5">
        <div className="mx-auto max-w-[80rem] px-4">
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
                    EPR Registration for Battery Waste
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <EPRHero />
      <EPRIndex />
      <EPRContent />
      <Footer />
      <ScrollToTopButton />
      {/* <Footer/> */}
    </div>
  );
};

export default BatteryWaste;

const EPRHero = () => {
  return (
    <main className="relative overflow-x-hidden bg-[#F9F7F2] pb-[30px] pt-[60px] md:pb-[106px] md:pt-[104px]">
      {/* Background gradient */}
      <div className="custom-radial-gradient-cdsco absolute inset-0 z-10 hidden translate-x-1/2 transform rounded-bl-full md:block"></div>

      {/* Decorative elements */}
      <div
        className="animate-float absolute right-[15%] top-[20%] z-[10] h-[20px] w-[20px] rounded-full bg-[#1A8781]/30"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="mx-auto flex h-full w-full max-w-[84rem] flex-col items-center justify-center gap-[40px] px-4 md:flex-row md:gap-[90px] md:px-0">
        {/* Left Side */}
        <div className="relative flex w-full flex-col items-start gap-6 md:w-[533px] md:gap-8">
          <div className="inline-flex items-center">
            <div className="mr-4 h-[3px] w-[40px] bg-[#1A8781]"></div>
            <span className="font-poppins text-sm font-medium uppercase tracking-wider text-[#1A8781] md:text-base">
              Certified Expertise
            </span>
          </div>

          <h1 className="z-[10] -mt-2 font-playfair text-[40px] font-bold leading-[1.2] text-[#1E1E1E] md:text-[52px] md:leading-[70px]">
            <span className="relative">
              EPR Registration for
              <span className="absolute -bottom-2 left-0 h-[8px] w-[120px] rounded-full bg-[#1A8781]/10"></span>
            </span>{" "}
            Battery Waste Management
          </h1>

<<<<<<< HEAD
          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Get EPR registration for battery waste management. Expert assistance for EPR authorization for battery waste, battery waste EPR compliance, and CPCB portal registration for all battery types
=======
          <p className="z-[10] -mt-2 max-w-[490px] font-poppins text-[18px] leading-[1.6] text-[#332156] md:text-[20px] md:leading-[40px]">
            Get EPR certification for battery waste management. Ensure CPCB
            compliance with proper recycling & disposal plans for all battery
            types
>>>>>>> 2fb125bd51c05199b5cfbd413a324c7f5f2b7736
          </p>

          <div className="-mt-2 flex items-center">
            <div
              className="group flex cursor-pointer items-center"
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
              <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#125E5A]/30 transition-all duration-300 group-hover:border-[#125E5A]">
                <div className="h-3 w-3 translate-x-[-1px] rotate-45 border-r-2 border-t-2 border-[#125E5A]"></div>
              </div>
              <span className="font-geist text-[18px] font-medium text-[#125E5A] transition-all duration-300 group-hover:translate-x-1">
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

const EPRIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = ["Overview", "FAQs"];

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-"),
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
      { threshold: 0.5 },
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(
        section.toLowerCase().replace(/\s+/g, "-"),
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
      className={`sticky top-0 z-[50] h-auto w-full transition-colors duration-300 md:top-[44px] md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="flex h-20 items-center justify-between px-4 md:hidden">
        <div className="font-geist text-base font-semibold uppercase tracking-wider text-blue-900">
          {activeSection}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="rounded-md p-2 transition-colors hover:bg-blue-100"
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
          className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg md:hidden"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`cursor-pointer px-4 py-3 transition-colors ${
                  item === activeSection
                    ? "bg-blue-50 font-semibold text-blue-900"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist uppercase tracking-wider">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="mx-auto hidden h-full max-w-[88rem] items-center justify-between overflow-x-auto px-12 md:flex">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="group relative cursor-pointer whitespace-nowrap px-2"
          >
            <div
              className={`font-geist text-base font-semibold uppercase tracking-wider transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-blue-900 transition-transform duration-300 ${
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

const EPRContent = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-[88rem] px-4 py-8 md:px-12 md:py-12">
        <div className="flex w-full flex-col gap-6 md:flex-row md:gap-[48px]">
          {/* Left Side */}

          <EPRContentLeft />

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
    <div id="faqs" className="my-2 scroll-mt-20 bg-gray-50">
      <div className="mx-auto max-w-[88rem] px-4 py-8 md:p-12">
        <h2 className="text-center font-geist text-[32px] font-semibold text-[#181818] md:text-[48px]">
          Frequently Asked Questions
        </h2>
        <p className="text-center font-geist text-[16px] text-[#52525b] md:text-[20px]">
          Can't find the answer you are looking for?{" "}
          <span className="font-geist text-[20px] font-medium text-[#27272a] underline underline-offset-4">
            Reach out to us!
          </span>
        </p>

        <div className="mx-auto mt-[16px] w-full max-w-[1104px] md:mt-[24px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                What is Battery?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                'Battery' means new or refurbished cell and/or Battery and/or
                their component, including accumulator, which is any source of
                electrical energy generated by direct conversion of chemical
                energy and includes disposable primary and/or secondary battery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                What does 'Waste Battery' include?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                Waste Battery includes: (i) Used and/or End of Life Battery
                and/or its components or spares or parts or consumables which
                may or may not be hazardous in nature; (ii) Pre-consumer
                Off-Spec Battery and its components or spares or parts or
                consumables; (iii) Battery whose date for appropriate use has
                expired; (iv) Battery which has been discarded by the user.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                What is the meaning of EPR?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                EPR stands for 'Extended Producer Responsibility' which means
                responsibility of any Producer of Battery for Environmentally
                sound management of Waste Battery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                What are EPR targets for Producers/Manufacturers?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                EPR targets is the quantity of battery placed in the market by
                the Producer/Manufacturers. Details are given in Schedule II of
                the Battery Waste Management Rules, 2022.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                Who all comes under the definition of 'Producer'?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                'Producer' means an entity who engages in: (i) manufacture and
                sale of Battery including refurbished Battery, including in
                equipment, under its own brand; or (ii) sale of Battery
                including refurbished Battery, including in equipment, under its
                own brand produced by other manufacturers or suppliers; (iii)
                import of Battery as well as equipment containing Battery
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                Do manufacturers of batteries need to obtain registration from
                CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                As per Rule 4 (4), The person or an entity involved in
                manufacturing of Battery shall have to register through the
                online centralised portal as Producer in Form 1(A). The
                certificate of registration shall be issued in Form 1(B).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                Does importer of batteries need to obtain registration from
                CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                As per rule 3(1) (u), Importer of Battery as well as equipment
                containing Battery will be called 'Producer'. The importer has
                to obtain registration from CPCB to carry out import activities
                related to batteries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                Which entities shall register on the online portal developed by
                CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                The following entities shall register on the online portal
                developed by CPCB: (i) Producer (Importers comes under the
                definition of Producer as per Rules) (ii) Manufacturers of
                Battery (iii) Recyclers and Refurbishers
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                What are the documents required for KYC for registration of
                Producers/Manufactures?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                PDF copy of Company's PAN, CIN & GST of the
                Producer/Manufacturers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] font-medium text-[#3f3f46] md:text-[18px]">
                Which type of batteries are covered under The Battery Waste
                Management Rules, 2022?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] text-[#5e5f6e] md:text-[18px]">
                All types of batteries regardless of chemistry, shape, volume,
                weight, material composition and use.
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
                    strokeWidth="0"
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
                    strokeWidth="0"
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
                  href="https://www.linkedin.com/company/sun-consultants-engineers/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
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
    <div className="flex w-[441px] flex-col">
      <p className="font-geist text-[20px] font-semibold text-[#131316]">
        {heading}
      </p>
      <div className="mt-[24px] flex flex-col gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/10 p-2">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] sm:text-lg">
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
    <div className="flex flex-col">
      <p className="font-geist text-[20px] font-semibold text-[#131316]">
        {heading}
      </p>
      <div className="mt-[20px] flex flex-col gap-2">
        {points.map((point, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/10 p-2">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] sm:text-lg">
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

        {/* Review Section */}
        <ReviewSection />

        <AboutAuthor />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex scroll-mt-20 flex-col">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="font-geist text-[16px] font-semibold uppercase text-gray-700 md:text-[20px]">
          Overview
        </span>
        <Separator className="h-[1.5px] w-[94.46px] bg-gray-700" />
      </div>

      {/* Title */}
<<<<<<< HEAD
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        EPR Registration for Battery Waste Management in India | Battery Waste EPR Certificate
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        A Complete Guide to Battery Waste EPR under Battery Waste Management Rules, 2022 - EPR Portal for Battery Waste Management
=======
      <h3 className="my-3 font-roboto text-[28px] font-bold leading-none text-[#131316] md:my-0 md:text-[40px] md:leading-normal">
        EPR Registration for Battery Waste Management in India
      </h3>

      {/* Description */}
      <p className="font-geist text-[16px] font-semibold text-[#131316] md:text-[20px]">
        A Complete Guide to Battery Waste EPR under Battery Waste Management
        Rules, 2022
>>>>>>> 2fb125bd51c05199b5cfbd413a324c7f5f2b7736
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:mt-[24px] md:text-lg">
        With the recent focus on digitalization, clean energy, and electric
        mobility, the demand for batteries in every sector has skyrocketed.
        Batteries are now everywhere, found in mobile phones, laptops, electric
        vehicles, solar energy storage systems, industrial apparatus, and even
        medical devices. While this transition is supportive of underlying
        sustainability and reduces dependency on fossil fuels, it also poses a
        significant environmental hazard in the form of battery waste.
        <br />
        <br />
        A waste battery is composed of highly toxic and environmentally harmful
        decomposition products. These include lead, lithium, cadmium, mercury,
        and nickel, among others. These materials, if untreated, threaten to
        poison the soil, water, and the air we breathe, and therefore, endanger
        our lives and the lives of all living beings on the planet. Given the
        exponential expansion of battery consumption in India, the waste
        counterpart of discarded batteries will also increase significantly in
        the future.
        <br />
        <br />
        India's government replaced the earlier Battery (Management & Handling)
        Rules, 2001 with the new Battery Waste Management Rules, 2022,
        acknowledging the importance of effective regulation. These new rules
        focus on Extended Producer Responsibility (EPR), which means producers
        must take responsibility for the proper disposal and management of
        battery waste.
        <br />
        <br />
        This article is meant to guide readers through the complexities of EPR
        registration for battery waste management to the extent that it is
        comprehensible and straightforward. This article will also cover the
        legal scope, applicability, registration steps, documents required,
        compliance, benefits, and the functions of the EPR portal for battery
        waste management.
      </div>

      {/* What is Battery Waste Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          What is Battery Waste and Why is it Harmful?
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Battery waste is a term that describes used, discarded, or abandoned
          batteries. Batteries may contain a variety of chemicals that are
          extremely hazardous. Batteries that are discarded and leak chemicals
          into the environment can cause detrimental changes to ecosystems and
          can cause environmental problems that can last for generations.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Major Environmental Concerns Related to Battery Waste
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Heavy Metal Leakage - Contamination of soils.",
              "Groundwater Contamination - Polluted water sources become water for consumption.",
              "Improper disassembly or open incineration - Activated Air Pollution",
              "Neurological issues, breathing difficulties, and organ failure - Hazards Health",
              "Especially with lithium-ion batteries - Battery Explosions and Fire",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Without proper monitoring and recycling systems, battery debris can be
          an underestimated but serious environmental risk. This is the reason
          battery waste EPR as a concept has gained importance in India's waste
          management policy.
        </div>
      </div>

      {/* Battery Waste Management Rules Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          What are the Battery Waste Management Rules, 2022?
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The rules in the Battery Waste Management Rules 2022 were published by
          the Ministry of Environment, Forest and Climate Change (MoEF&CC) on
          August 22, 2022. Each of these rules focuses on the management of
          waste batteries in a manner that is environmentally sound, focused on
          accountability, and incorporates the principles of traceability and
          circular economy.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Goals of the Rules
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Encourage the safe collection, recycling, and refurbishing of used batteries",
              "Minimize the negative effects of battery waste on the environment and human health.",
              "Implement digital tracking via the EPR portal for battery waste management",
              "Build upon the principle of Extended Producer Responsibility.",
              "Foster the recovery and recycling of valuable materials in spent batteries",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          These rules are applicable to all of India and cover all primary types
          of batteries in the commercial, industrial, and consumer sectors.
        </div>
      </div>

      {/* Types of Batteries Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Types of Batteries Covered Under the Rules
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The Battery Waste Management Rules, 2022 cover all types of batteries,
          including:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Portable Batteries: batteries used in mobile devices, laptops, remotes, toys, and power banks.",
              "Automotive Batteries: batteries for ignition and power in conventional vehicles.",
              "Electric Vehicle (EV) Batteries: batteries used in electric cars, two-wheelers, buses, and commercial electric vehicles.",
              "Industrial Batteries: batteries found in telecom towers, data centers, solar energy systems, and industrial equipment.",
            ]}
            heading=""
          />
        </div>

        <div className="mt-6">
          <h5 className="mb-3 font-roboto text-[18px] font-bold text-[#131316] md:text-[20px]">
            Exempted Batteries
          </h5>
          <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
            The rules do not apply to batteries used in:
          </div>

          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Equipment relating to important security interests",
                "Arms, ammunition, and other wartime materials",
                "Equipment manufactured exclusively for military applications",
                "Space craft designed to go beyond the Earth's atmosphere",
              ]}
              heading=""
            />
          </div>
        </div>
      </div>

      {/* EPR Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          What is Extended Producer Responsibility (EPR) with regard to Battery
          Waste?
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          With Extended Producer Responsibility (EPR), producers are assigned
          responsibility for the entire lifecycle of their products,
          specifically after the consumer is done with the products.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          According to the Battery Waste Management Rules, EPR in relation to
          battery waste means that the battery producers are liable for the
          collection, recycling, refurbishment, and safe disposal of any used
          batteries that are the result of, or are the waste from their
          products.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Put simply, if a company sells batteries in the Indian market, it is
          obligated to deal with the consequences of the batteries when they are
          disposed of as waste.
        </div>
      </div>

      {/* Producer Definition Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Who is Considered a Producer in the Battery Waste EPR?
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          According to the law, a producer can mean any entity that:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Produces and retails batteries under their own label",
              "Distributes batteries produced by other manufacturers under their label",
              "Sells batteries or battery-containing devices from other manufacturers",
              "Engages in the sale of refurbished batteries",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          With this definition, battery EPR applies to the respective
          manufacturers, brand owners, and importers.
        </div>
      </div>

      {/* Significance Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Significance of EPR Registration on Battery Waste Management
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          EPR registration for battery waste management is a necessity, and
          legally so. It is a necessity for producers based in India.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Why Is EPR Registration So Important?
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Legislative approval to manufacture, distribute, or import batteries",
              "Adherence to set standards in the protection of the environment",
              "The avoidance of potential penalties or disruptions in business operations",
              "Participation in the Circular Economy and sustainability objectives",
              "Improved brand image and taking social responsibility.",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          For the absence of EPR authorization for battery waste management,
          producers could be subjected to legal action and be penalized, or they
          could directly be limited in operations.
        </div>
      </div>

      {/* EPR Framework Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Battery Waste EPR Explained
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          EPR on battery waste consists of a more or less structured
          relationship between producers, recyclers, refurbishers, and the
          regulators.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Important Features of the EPR Framework
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Battery waste management has to be EPR portal bound",
              "Collection and recycling targets for each EPR cycle",
              "Interactions with recyclers and refurbishers",
              "Preparation and submission of compliance and reporting returns",
              "Batteries waste tracking movement",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          This framework achieves transparency, accountability, and tracking.
        </div>
      </div>

      {/* EPR Portal Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          EPR Portal for Battery Waste Management
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The EPR portal for battery waste management is a simplified system
          created by the Central Pollution Control Board (CPCB) where each
          participant can register without any complications. Reporting and
          compliance can be tracked for each participant.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            EPR Portal Features
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Producers, recyclers, and refurbishers can register online",
              "EPR plans and targets can be submitted",
              "Quarterly and yearly returns can be filed",
              "EPR certificates can be issued",
              "Battery waste can be monitored",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Although the portal was initially under development, it is designed to
          bring complete digital transparency to battery waste EPR compliance.
        </div>
      </div>

      {/* Registration Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Registration of Producers Under Battery Waste Management Rules
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Who Needs to Register?
          </span>
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Any producer engaged in the manufacture, sale, or import of batteries
          must obtain EPR registration for battery waste management from CPCB.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">Legal Basis</span>
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Registration via the CPCB-managed centralized system is compulsory per
          the Battery Waste Management Rules, 2022, Rule 4.
        </div>
      </div>

      {/* Application Process Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          EPR Registration for Battery Waste Management: Application Process
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Prior to the complete functionality of the centralized portal, the
          CPCB accepted offline registrations. The procedure is typically as
          follows:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Step 1: Preparation of Documents - All business details and documents are prepared as directed by the CPCB.",
              "Step 2: Submission of Application - The application is sent to CPCB by email and in a hard copy. The application form is Form1(A).",
              "Step 3: Review of Application - CPCB will assess the application and may reach out for some questions or to obtain further documents.",
              "Step 4: Registration Approval - Registration is approved for the first time for a period of 6 months, and this is extendable via the online portal.",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Documents Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Documents for EPR Battery Waste Registration:
        </h4>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "GST Registration Certificate (Self-attested)",
              "Company PAN Card",
              "Company's CIN number",
              "Company TIN number (if applicable)",
              "Authorized signatory's Aadhaar Card",
              "Authorization letter",
              "Information about batteries sold in the market",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Recyclers Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Recyclers and Refurbishers Registration
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Battery recyclers and refurbishers, in particular, must register with
          the SPCB (State Pollution Control Board) via the centralized portal.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">Main Points</span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Registration only once",
              "Meets the specified environmental standards",
              "Adherence to the quarterly return policy in Form 4",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The returns must provide information about:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Collected batteries (used) (in quantity)",
              "Recycled or refurbished (in quantity)",
              "Generated and disposed (in quantity) hazardous waste",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Compliance Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          EPR Compliance Obligations and Targets
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Based on the number of batteries placed in the market, producers must
          comply with specific EPR targets.
        </div>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Compliance includes
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Waste batteries collection",
              "Recycling with registered recyclers",
              "Recovered materials use",
              "Periodic Compliance Reporting",
            ]}
            heading=""
          />
        </div>

        <div className="mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          Targets that aren't achieved in time lead to penalties or restrictions
          in place.
        </div>
      </div>

      {/* Penalties Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Penalties for Non-Compliance
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          If you do not follow the battery waste EPR regulations, you might face
          the following penalties:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Payment of environmental compensation",
              "EPR authorizations are suspended or canceled",
              "Environmental laws are enforced",
              "Restriction of business activities",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Benefits of Battery Waste EPR Registration
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">
            Environmental gains
          </span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Handles waste and pollution less",
              "Handles waste but no pollution",
              "Handles hazardous waste, and encourages recycling and reuse",
            ]}
            heading=""
          />
        </div>

        <div className="mb-4 mt-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          <span className="font-semibold text-gray-950">Business gains</span>
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Legal risk and no compliance",
              "Corporate reputation is enhanced",
              "Sustainability-oriented markets provide increased business",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Professional Consultants Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Role of Professional Consultants in Battery EPR Compliance
        </h4>

        <div className="mb-4 max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The process of EPR registration for Waste Management Business
          Batteries is complicated because of the numerous rules, documents, and
          reports that need to be maintained and submitted. Compliance
          consultants offer to manage the following:
        </div>

        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Documentation and submission",
              "Communications with the CPCB and SPCBs",
              "Compliance reports and renewals within deadlines",
              "Compliance risks management",
            ]}
            heading=""
          />
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="mb-4 font-roboto text-[22px] font-bold text-[#131316] md:text-[26px]">
          Conclusion
        </h4>

        <div className="max-w-full text-left font-geist text-sm leading-loose tracking-wide text-[#42434d] md:text-lg">
          The use of batteries in India is currently skyrocketing, and that
          makes the need for effective management of battery waste a crucial
          social and environmental responsibility. The Battery Waste Management
          Rules, 2022 is a robust regulation based on Extended Producer
          Responsibility that holds producers accountable for the waste that
          their products create.
          <br />
          <br />
          It's super important for all battery makers, importers, and brand
          owners to get proper registration and get EPR authorization for
          battery waste management. Following battery EPR guidelines helps
          safeguard the environment, aids in resource recovery, and facilitates
          India's journey to a circular economy.
          <br />
          <br />
          With well-defined policies, the EPR system for battery waste
          management is central, and professional compliance assistance, your
          business can fulfill its obligations and help create a cleaner,
          sustainable environment.
        </div>
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      <span className="font-geist text-[20px] font-semibold tracking-normal text-[#131316] md:text-[25px]">
        What did you think of this content?
      </span>
      <div className="mt-2 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
        <div className="flex gap-6">
          <button className="group flex cursor-pointer items-center gap-3 font-geist text-sm text-[#42434d] transition-colors hover:text-blue-600 md:text-lg">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="group h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="transition-colors duration-200 group-hover:text-blue-500"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="transition-colors duration-200 group-hover:text-blue-500"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
              />
            </svg>

            <span>It was helpful</span>
          </button>

          <button className="group flex cursor-pointer items-center gap-3 font-geist text-sm text-[#42434d] transition-colors hover:text-red-600 md:text-lg">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="group h-5 w-5 text-gray-700 md:h-6 md:w-6"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="transition-colors duration-200 group-hover:text-red-500"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="transition-colors duration-200 group-hover:text-red-500"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
              />
            </svg>

            <span>It was not helpful</span>
          </button>
        </div>

        <p className="font-geist text-[14px] tracking-normal text-[#5e5f6e] md:text-[17px]">
          Last updated on Mar 19, 2025
        </p>
      </div>
    </section>
  );
};
