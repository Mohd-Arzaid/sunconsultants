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
        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "EPR Registration for Battery Waste Management",
                item: "https://bis-certifications.com/epr-certificate-for-battery-waste-management-bwm",
              },
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
                  <BreadcrumbPage>EPR Registration for Battery Waste</BreadcrumbPage>
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
            <span className="text-[#1A8781] font-poppins text-sm md:text-base font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              EPR Registration for
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Battery Waste
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Get EPR certification for battery waste management. Ensure CPCB compliance
            with proper recycling & disposal plans for all battery types
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

const EPRIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "FAQs",
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

const EPRContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
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
                What is Battery?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                'Battery' means new or refurbished cell and/or Battery and/or their component, including accumulator, which is any source of electrical energy generated by direct conversion of chemical energy and includes disposable primary and/or secondary battery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What does 'Waste Battery' include?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Waste Battery includes: 
                (i) Used and/or End of Life Battery and/or its components or spares or parts or consumables which may or may not be hazardous in nature; 
                (ii) Pre-consumer Off-Spec Battery and its components or spares or parts or consumables; 
                (iii) Battery whose date for appropriate use has expired; 
                (iv) Battery which has been discarded by the user.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the meaning of EPR?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                EPR stands for 'Extended Producer Responsibility' which means responsibility of any Producer of Battery for Environmentally sound management of Waste Battery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are EPR targets for Producers/Manufacturers?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                EPR targets is the quantity of battery placed in the market by the Producer/Manufacturers. Details are given in Schedule II of the Battery Waste Management Rules, 2022.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who all comes under the definition of 'Producer'?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                'Producer' means an entity who engages in: 
                (i) manufacture and sale of Battery including refurbished Battery, including in equipment, under its own brand; or 
                (ii) sale of Battery including refurbished Battery, including in equipment, under its own brand produced by other manufacturers or suppliers; 
                (iii) import of Battery as well as equipment containing Battery
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do manufacturers of batteries need to obtain registration from CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                As per Rule 4 (4), The person or an entity involved in manufacturing of Battery shall have to register through the online centralised portal as Producer in Form 1(A). The certificate of registration shall be issued in Form 1(B).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Does importer of batteries need to obtain registration from CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                As per rule 3(1) (u), Importer of Battery as well as equipment containing Battery will be called 'Producer'. The importer has to obtain registration from CPCB to carry out import activities related to batteries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which entities shall register on the online portal developed by CPCB?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following entities shall register on the online portal developed by CPCB: 
                (i) Producer (Importers comes under the definition of Producer as per Rules) 
                (ii) Manufacturers of Battery 
                (iii) Recyclers and Refurbishers
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the documents required for KYC for registration of Producers/Manufactures?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                PDF copy of Company's PAN, CIN & GST of the Producer/Manufacturers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which type of batteries are covered under The Battery Waste Management Rules, 2022?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                All types of batteries regardless of chemistry, shape, volume, weight, material composition and use.
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
        
        {/* Review Section */}
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
        EPR Registration for Battery Waste Management in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        A Complete Guide to Battery Waste EPR under Battery Waste Management Rules, 2022
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        With the recent focus on digitalization, clean energy, and electric mobility, the demand for batteries in every sector has skyrocketed. Batteries are now everywhere, found in mobile phones, laptops, electric vehicles, solar energy storage systems, industrial apparatus, and even medical devices. While this transition is supportive of underlying sustainability and reduces dependency on fossil fuels, it also poses a significant environmental hazard in the form of battery waste.
        <br /><br />
        A waste battery is composed of highly toxic and environmentally harmful decomposition products. These include lead, lithium, cadmium, mercury, and nickel, among others. These materials, if untreated, threaten to poison the soil, water, and the air we breathe, and therefore, endanger our lives and the lives of all living beings on the planet. Given the exponential expansion of battery consumption in India, the waste counterpart of discarded batteries will also increase significantly in the future.
        <br /><br />
        India's government replaced the earlier Battery (Management & Handling) Rules, 2001 with the new Battery Waste Management Rules, 2022, acknowledging the importance of effective regulation. These new rules focus on Extended Producer Responsibility (EPR), which means producers must take responsibility for the proper disposal and management of battery waste.
        <br /><br />
        This article is meant to guide readers through the complexities of EPR registration for battery waste management to the extent that it is comprehensible and straightforward. This article will also cover the legal scope, applicability, registration steps, documents required, compliance, benefits, and the functions of the EPR portal for battery waste management.
      </div>

      {/* What is Battery Waste Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          What is Battery Waste and Why is it Harmful?
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Battery waste is a term that describes used, discarded, or abandoned batteries. Batteries may contain a variety of chemicals that are extremely hazardous. Batteries that are discarded and leak chemicals into the environment can cause detrimental changes to ecosystems and can cause environmental problems that can last for generations.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Major Environmental Concerns Related to Battery Waste</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          Without proper monitoring and recycling systems, battery debris can be an underestimated but serious environmental risk. This is the reason battery waste EPR as a concept has gained importance in India's waste management policy.
        </div>
      </div>

      {/* Battery Waste Management Rules Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          What are the Battery Waste Management Rules, 2022?
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The rules in the Battery Waste Management Rules 2022 were published by the Ministry of Environment, Forest and Climate Change (MoEF&CC) on August 22, 2022. Each of these rules focuses on the management of waste batteries in a manner that is environmentally sound, focused on accountability, and incorporates the principles of traceability and circular economy.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Goals of the Rules</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          These rules are applicable to all of India and cover all primary types of batteries in the commercial, industrial, and consumer sectors.
        </div>
      </div>

      {/* Types of Batteries Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Types of Batteries Covered Under the Rules
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Battery Waste Management Rules, 2022 cover all types of batteries, including:
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
          <h5 className="text-[18px] md:text-[20px] font-roboto font-bold text-[#131316] mb-3">
            Exempted Batteries
          </h5>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          What is Extended Producer Responsibility (EPR) with regard to Battery Waste?
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          With Extended Producer Responsibility (EPR), producers are assigned responsibility for the entire lifecycle of their products, specifically after the consumer is done with the products.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          According to the Battery Waste Management Rules, EPR in relation to battery waste means that the battery producers are liable for the collection, recycling, refurbishment, and safe disposal of any used batteries that are the result of, or are the waste from their products.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Put simply, if a company sells batteries in the Indian market, it is obligated to deal with the consequences of the batteries when they are disposed of as waste.
        </div>
      </div>

      {/* Producer Definition Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Who is Considered a Producer in the Battery Waste EPR?
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          With this definition, battery EPR applies to the respective manufacturers, brand owners, and importers.
        </div>
      </div>

      {/* Significance Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Significance of EPR Registration on Battery Waste Management
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          EPR registration for battery waste management is a necessity, and legally so. It is a necessity for producers based in India.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Why Is EPR Registration So Important?</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          For the absence of EPR authorization for battery waste management, producers could be subjected to legal action and be penalized, or they could directly be limited in operations.
        </div>
      </div>

      {/* EPR Framework Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Battery Waste EPR Explained
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          EPR on battery waste consists of a more or less structured relationship between producers, recyclers, refurbishers, and the regulators.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Important Features of the EPR Framework</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          This framework achieves transparency, accountability, and tracking.
        </div>
      </div>

      {/* EPR Portal Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          EPR Portal for Battery Waste Management
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The EPR portal for battery waste management is a simplified system created by the Central Pollution Control Board (CPCB) where each participant can register without any complications. Reporting and compliance can be tracked for each participant.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">EPR Portal Features</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          Although the portal was initially under development, it is designed to bring complete digital transparency to battery waste EPR compliance.
        </div>
      </div>

      {/* Registration Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Registration of Producers Under Battery Waste Management Rules
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Who Needs to Register?</span>
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Any producer engaged in the manufacture, sale, or import of batteries must obtain EPR registration for battery waste management from CPCB.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Legal Basis</span>
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Registration via the CPCB-managed centralized system is compulsory per the Battery Waste Management Rules, 2022, Rule 4.
        </div>
      </div>

      {/* Application Process Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          EPR Registration for Battery Waste Management: Application Process
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Prior to the complete functionality of the centralized portal, the CPCB accepted offline registrations. The procedure is typically as follows:
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Recyclers and Refurbishers Registration
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Battery recyclers and refurbishers, in particular, must register with the SPCB (State Pollution Control Board) via the centralized portal.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          EPR Compliance Obligations and Targets
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Based on the number of batteries placed in the market, producers must comply with specific EPR targets.
        </div>

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Compliance includes</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4">
          Targets that aren't achieved in time lead to penalties or restrictions in place.
        </div>
      </div>

      {/* Penalties Section */}
      <div className="mt-[32px] md:mt-[48px]">
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Penalties for Non-Compliance
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          If you do not follow the battery waste EPR regulations, you might face the following penalties:
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Benefits of Battery Waste EPR Registration
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          <span className="font-semibold text-gray-950">Environmental gains</span>
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

        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mt-4 mb-4">
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Role of Professional Consultants in Battery EPR Compliance
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The process of EPR registration for Waste Management Business Batteries is complicated because of the numerous rules, documents, and reports that need to be maintained and submitted. Compliance consultants offer to manage the following:
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
        <h4 className="text-[22px] md:text-[26px] font-roboto font-bold text-[#131316] mb-4">
          Conclusion
        </h4>
        
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          The use of batteries in India is currently skyrocketing, and that makes the need for effective management of battery waste a crucial social and environmental responsibility. The Battery Waste Management Rules, 2022 is a robust regulation based on Extended Producer Responsibility that holds producers accountable for the waste that their products create.
          <br /><br />
          It's super important for all battery makers, importers, and brand owners to get proper registration and get EPR authorization for battery waste management. Following battery EPR guidelines helps safeguard the environment, aids in resource recovery, and facilitates India's journey to a circular economy.
          <br /><br />
          With well-defined policies, the EPR system for battery waste management is central, and professional compliance assistance, your business can fulfill its obligations and help create a cleaner, sustainable environment.
        </div>
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
