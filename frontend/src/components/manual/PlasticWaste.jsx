import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";

import PWMRimg from "../../assets/images/PWMRimg.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Check, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "../common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import Services from "./Services";
import AboutAuthor from "../common/AboutAuthor";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router-dom";

export const PlasticWaste = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>EPR Certificate for Plastic Waste Management | Sun Certifications</title>
        <meta name="description" content="Get EPR certificate for plastic waste management (PWM). Complete CPCB compliance guide for plastic recycling and waste management plans." />
        <meta name="keywords" content="EPR Certificate, Plastic Waste Management, PWM, CPCB Compliance, Plastic Recycling" />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
                name: "Plastic Waste Certification and Compliance",
                item: "https://bis-certifications.com/epr-certificate-for-plastic-waste-management-pwm",
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
                  <BreadcrumbPage>
                    Plastic Waste Certification and Compliance
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <PWMRHero />
      <PWMRIndex />
      <PWMRContent />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

const PWMRHero = () => {
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
              Plastic Waste
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certification and Compliance
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Required for plastic producers, recyclers & raw material
            manufacturers to ensure eco-friendly disposal. Valid for 5 years,
            processed in 6-8 weeks.
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

const PWMRIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Eligibility",
    "Compliance",
    "Process",
    "Documents",
    "Consultancy",
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

const PWMRContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <PWMRContentLeft />

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
                What is Extended Producer Responsibility (EPR)?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Extended Producer Responsibility (EPR) is a type of policy in which producers take on responsibility of managing environmental impact of their products, including disposal and management of product after the consumer is done using it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which entities are required to register on CPCB EPR Portal?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following entities must register on the CPCB EPR portal and obtain EPR certificates:
                <br /><br />
                <strong>1. Producers</strong><br />
                <strong>2. Importers</strong><br />
                <strong>3. Brand Owners</strong><br />
                <strong>4. Plastic Waste Processors</strong> involved in:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Recycling</li>
                  <li>• Waste to Energy</li>
                  <li>• Waste to Oil</li>
                  <li>• Industrial Composting</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who is required to register with CPCB / SPCB / PCC?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                <strong>• PIBOs operating in one or two States/UTs</strong> are required to register with State Pollution Control Board (SPCB) or Pollution Control Committee (PCC).
                <br /><br />
                <strong>• PIBOs in more than two States/UTs</strong> are required to register with the Central Pollution Control Board (CPCB).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are documents required for KYC for registration of PIBOs?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following documentation is necessary for KYC while registering:
                <br /><br />
                <strong>1. PDF versions of company's PAN, CIN, and GST certificates</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• GST invoices covering all States/UTs that PIBO service are to be added.</li>
                </ul>
                <br />
                <strong>2. A PDF version of Authorized Person's PAN and Aadhaar.</strong>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which are plastic packaging categories covered under EPR?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following plastic packaging categories fall under EPR:
                <br /><br />
                <strong>1. Category I:</strong> Rigid plastic packaging.
                <br /><br />
                <strong>2. Category II:</strong> Flexible plastic packaging, including:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Individual or composite multi-layer plastics (of varying plastic types)</li>
                  <li>• Plastic sheets, covers, carry bags, sachets, and pouches</li>
                </ul>
                <br />
                <strong>3. Category III:</strong> Multilayer plastic packaging that contains:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• At least one layer of plastic, and</li>
                  <li>• At least one layer of material that is not plastic</li>
                </ul>
                <br />
                <strong>4. Category IV:</strong> Compostable plastic packaging that includes:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Compostable plastic sheets, and carry bags.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Pre-consumer Plastic Packaging Waste?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Pre-consumer plastic packaging waste is defined as plastic waste that occurs before reaching the end-use consumer. This includes:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Rejected or discarded plastic packaging materials made during manufacturing.</li>
                  <li>• Lost or discarded packaging materials created during the packaging of products.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Meaning of Post-consumer Plastic Packaging Waste?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Post-consumer plastic packaging waste is waste created after a customer has used packaging for its intended use and does not have any further need for the packaging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are EPR Targets for Producers and Importers?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The EPR target relates to the volume of plastic packaging placed onto the market by PIBO. Targets and obligations are detailed in Section 7 of the EPR Guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What if a PIBO has an in-house recycling unit?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                If a PIBO has its own recycling unit:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• The entity will have to register separately as a PIBO and as a Recycler</li>
                  <li>• Both registrations will require relevant supporting documents</li>
                  <li>• EPR credits are only able to be given to recyclers</li>
                  <li>• There has to be a record of credit transfer from recycler to PIBO</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are needed if an entity falls under multiple categories?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                If an entity falls under multiple sub-categories:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• It will be necessary to have a separate email ID for each category during registration</li>
                  <li>• The same Company KYC documents (PAN, GST, CIN) will apply to all categories</li>
                </ul>
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

const PWMRContentLeft = () => {
  return (
    <div className=" flex-1 ">
      <div className="flex flex-col gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <EligibilitySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ComplianceSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultingSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ReviewSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

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
        EPR Registration for Plastic Packaging Waste in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Extended Producer Responsibility for sustainable plastic waste management.
      </p>

      {/* Nomination Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <p className="mb-4">
          <strong>What is EPR Registration?</strong>
        </p>
        <p className="mb-4">
          EPR stands for Extended Producers Responsibility. Extended Producer Responsibility (EPR) is a significant environmental policy introduced under the Plastic Waste Management Rules, 2016, by the Ministry of Environment, Forest and Climate Change (MoEFCC). It aims to make manufacturers, importers, and brand owners accountable for the management of plastic waste, especially from packaging materials.
        </p>
        <p>
          The entities who introduce plastic waste in India have to apply for EPR registration. These entities have to register themselves with the Central Pollution Control Board (CPCB) and provide accurate information about the generation and consumption of plastic packaging. Additionally the registered entities will be given targets for recycling of plastic packaging introduced and also ensuring its safe disposal.
        </p>
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
        Why is EPR Crucial for India?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Addressing plastic pollution through producer accountability.
      </p>

      {/* Nomination Content */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <p className="mb-4">
          The mass production of plastic that began six decades ago has created a plastic generation of around 8.3 billion metric tons and most of it ends up as plastic waste. Around 79% of the plastic waste that is generated settles in the land fills of our planet which eventually ends up in the ocean. If this situation is not handled responsibly then by 2050 there will be more plastic in the ocean than fishes. Plastic packaging is a significant chunk of the plastic waste generated because it is often designed for single use and then discarded. Once plastic packaging is discarded it takes around 400 years to degrade. Most of the plastic packaging generated decades ago still exists on our planet and has now become a global priority to drastically minimize the use of it.
        </p>
        <p>
          Considering the facts discussed, it is very important for each country to make laws towards limiting the use of plastic, recycling the plastic waste and ensuring its safe disposal. Therefore the government introduced Extended Producers Responsibility (EPR) as a part of Plastic Waste Management Rules, 2016.
        </p>
      </div>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section id="compliance" className="flex flex-col scroll-mt-20">
      {/* Compliance*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Compliance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Who Needs EPR Registration?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Required for Producers, Importers, Brand Owners, and Plastic Waste Processors.
      </p>

      {/* Nomination Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <p className="mb-4">
          As per the EPR guidelines, it is necessary for all Producers, Importers and Brand Owners (PIBOs) to get EPR Registration. Additionally Plastic Waste Processors (PWPs) are also required to get EPR registration.
        </p>
        <div className="space-y-4">
          <div>
            <strong>Producers (P):</strong> As defined in the EPR guidelines, a producer is an entity that is involved in manufacturing of plastic packaging only.
          </div>
          <div>
            <strong>Importers (I):</strong> Importer is an entity that imports either plastic packaging or any product that is wrapped in plastic packaging.
          </div>
          <div>
            <strong>Brand Owners (BO):</strong> Brand Owner is an entity who sells any commodity wrapped in plastic packaging under any registered brand label or trademark.
          </div>
          <div>
            <strong>Plastic Waste Processors (PWPs):</strong> Plastic waste processor is an entity that recycles plastic waste and is engaged in safe disposal of plastic waste.
          </div>
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
        Types of Plastic Packaging Under EPR
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        CPCB classifies plastic packaging into four categories for EPR compliance.
      </p>

      {/* Nomination Content */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Category I</td>
                <td className="border border-gray-300 px-4 py-2">Rigid Plastic Packaging</td>
                <td className="border border-gray-300 px-4 py-2">Used for food, beverages, pharmaceuticals, cosmetics, etc.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Category II</td>
                <td className="border border-gray-300 px-4 py-2">Flexible Plastic Packaging</td>
                <td className="border border-gray-300 px-4 py-2">Includes carry bags, wraps, pouches; made of high-grade polymers</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Category III</td>
                <td className="border border-gray-300 px-4 py-2">Multi-layered Plastic (MLP)</td>
                <td className="border border-gray-300 px-4 py-2">Combines multiple materials like PET, PE, foil, paper</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Category IV</td>
                <td className="border border-gray-300 px-4 py-2">Plastic Sheets & Films</td>
                <td className="border border-gray-300 px-4 py-2">Used in bags, sashes, and customized plastic films</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* EPR Targets Section */}
      <div className="mt-[24px]">
        {/* Main Heading */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            What Are EPR Targets?
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>

        {/* Introduction */}
        <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <p>
            EPR targets are specific goals set by CPCB to ensure that producers, importers, and Brand Owners who manufacture, import or sell plastic packaging or products wrapped in plastic packaging take responsibility for recycling or its eco-friendly disposal. It basically gives an exact amount of plastic that an entity should recycle or dispose of in a particular financial year.
          </p>
        </div>

        {/* EPR Target for Producer and Importers */}
        <div className="mt-[24px]">
          <h3 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-4">
            EPR Target for Producer and Importers
          </h3>
          <div className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-6">
            <p>
              A producer is someone who manufactures plastic packaging and an importer is someone who imports plastic packaging or products that are wrapped in plastic packaging. EPR target is majorly dependent on Gross plastic waste generated by a producer or an importer.
            </p>
          </div>
          
          {/* Formula Box */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mb-6">
            <p className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose font-mono mb-2">
              <strong>Gross Plastic Waste Generated =</strong>
            </p>
            <div className="ml-4 space-y-1 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              <p>(Avg. weight of plastic packaging manufactured/imported in the last 2 FYs) +</p>
              <p>(Avg. pre-consumer plastic waste generated) -</p>
              <p>(Plastic packaging sold to other EPR-registered entities)</p>
            </div>
          </div>

          {/* Financial Year Targets Table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Financial Year</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">EPR Targets for Producers and Importers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">FY 2021-22</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">25% of Gross Plastic Waste Generated</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">FY 2022-23</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">70% of Gross Plastic Waste Generated</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">FY 2023-24</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">100% of Gross Plastic Waste Generated</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Transfer Logic */}
          <div className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            <p>
              In the event that a Producer sells their manufactured plastic packaging materials to an EPR registered Brand Owner, the corresponding quantity of plastic packaging material sold will be reduced from the producer's target and transferred to the same EPR registered brand owner's target. This logic also holds true for Importers. If an importer sells plastic packaging or products that are wrapped in plastic packaging to an EPR registered brand owner, the equivalent target will likewise be transferred to the same brand owner and reduced from the target of the importer. But this logic does not apply to a brand owner. Brand owners can not pass on their target to any other registered entity.
            </p>
          </div>
        </div>

        {/* EPR Target for Brand Owners */}
        <div className="mt-[24px]">
          <h3 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-4">
            EPR Target for Brand Owners
          </h3>
          <div className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-6">
            <p>
              A brand owner is someone who buys plastic wrap products or plastic packaging locally and sells it domestically or exports it under a registered brand name. EPR target for a brand owner is majorly dependent on the Gross Plastic Waste Generated.
            </p>
          </div>
          
          {/* Brand Owner Formula Box */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
            <p className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose font-mono mb-2">
              <strong>Gross Plastic Waste Generated =</strong>
            </p>
            <div className="ml-4 space-y-1 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              <p>(Avg. weight of plastic packaging manufactured/imported in the last 2 FYs) +</p>
              <p>(Avg. pre-consumer plastic waste generated)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        EPR Obligations Explained
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        EPR obligations represent distinct sub-targets within the broader framework of EPR targets.
      </p>

      {/* EPR Obligations Content */}
      <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <p className="mb-6">
          There are four primary categories of EPR Obligations, each allocated to Producers, Importers, and Brand Owners following EPR Registration:
        </p>
        
        {/* 1. End of Life Disposal */}
        <div className="mb-6">
          <h4 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-3">
            1. End of Life Disposal
          </h4>
          <p>
            The plastic that cannot be recycled should be sent for end of life disposal. Currently the end of life of disposal of plastics can happen in the following ways: Usage in road construction, Waste to energy and Waste to oil as per relevant guidelines issued by CPCB from time to time.
          </p>
        </div>

        {/* 2. Minimum Level of Recycling Target */}
        <div className="mb-6">
          <h4 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-3">
            2. Minimum Level of Recycling Target
          </h4>
          <p className="mb-4">
            This target will be applicable to importers from financial year 2024-2025. The importer shall ensure minimum level of recycling excluding end of life disposal of plastic packaging waste collected under EPR target.
          </p>
          
          {/* Minimum Recycling Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Plastic Packaging Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2024-25</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2025-26</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2026-27</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2027-28 and onwards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category I</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">50%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">70%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">80%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category II</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">30%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">40%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">50%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category III</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">30%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">40%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">50%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category IV</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">50%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">70%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Obligation for use of Recycled Content */}
        <div className="mb-6">
          <h4 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-3">
            3. Obligation for use of Recycled Content
          </h4>
          <p className="mb-4">
            This target will be applicable to importers from the financial year 2025-26. The importer shall ensure use of recycled plastic in the imported plastic packaging categorywise as shown in the table.
          </p>
          
          {/* Recycled Content Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Plastic Packaging Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2021-25</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2025-26</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2026-27</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">2027-28 and onwards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category I</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">30%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">40%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">50%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category II</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">10%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">10%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">20%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Category III</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">5%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">5%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">10%</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Obligation to reuse */}
        <div className="mb-6">
          <h4 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-3">
            4. Obligation to reuse which only applies to brand owners
          </h4>
        </div>
      </div>

      {/* Environmental Compensation */}
      <div className="mt-[24px]">
        <h3 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-4">
          Environmental Compensation for Non-Compliance
        </h3>
        <div className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <p className="mb-4">
            If an importer exceeds his target and recycles more than the given target then in this case the importer will get a surplus EPR certificate which he can transfer or sell it to another entity who has not met the target at the end of the financial year. Another way to meet the target is buying an EPR certificate of the value equivalent to the target from any other entity who has surplus.
          </p>
          <p className="mb-4">
            If an importer does not meet the target an environmental compensation (EC) will be imposed on the importer. Once the importer pays the EC, the unfulfilled target for that year will be carried forward to the next year for a period of three years. A certain amount of EC shall be returned or refunded depending on how early the pending target is met.
          </p>
        </div>

        {/* EC Refund Table */}
        <div className="mt-6">
          <h4 className="font-geist text-lg md:text-xl font-semibold text-[#181818] mb-3">
            Environmental Compensation Return Schedule
          </h4>
          <p className="font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            Partial refunds of EC are available if targets are later fulfilled:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Time of Compliance</th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">EC Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Within 1 year</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">75%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Within 2 years</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">Within 3 years</td>
                  <td className="border border-gray-300 px-4 py-2 font-geist text-sm sm:text-lg text-[#42434d] tracking-wide">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
        EPR Registration Process
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step-by-step procedure for EPR registration and compliance.
      </p>

      {/* Registration Process */}
      <div className="mt-[24px]">
        <PointsListTwo
          points={[
            "Prepare Documents",
            "Submit Initial Application & KYC on EPR Portal",
            "Pay Application Fee",
            "Address Deficiencies (within 15 days)",
            "Receive Approval & Assigned Targets",
            "Start Complying & Receive EPR Certificate",
          ]}
          heading="Step-by-Step Procedure"
        />
      </div>

      {/* Fee Structure */}
      <div className="mt-[24px]">
        <p className="font-semibold font-geist text-[20px] text-[#131316] mb-4">
          Fee Structure
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Sr. No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plastic Waste Generation in Tonnes per annum</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Application Fees (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Less than 1,000</td>
                <td className="border border-gray-300 px-4 py-2">10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">Between 1,000 - 10,000</td>
                <td className="border border-gray-300 px-4 py-2">20,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">Greater than 10,000</td>
                <td className="border border-gray-300 px-4 py-2">50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Required Documents */}
      <div className="mt-[24px]">
        <PointsListTwo
          points={[
            "Company PAN Card",
            "Company CIN",
            "Company GST Certificate",
            "Company IEC",
            "Authorized Person's PAN Card",
            "Authorized Person's Aadhaar",
            "Details (Type & Quantity) of products Imported",
            "Picture of packaged covering",
            "Industrial Registration Certificate i.e. (IEM) or MSME Certificate",
            "Total Capital Invested Amount in Crores (Format will be shared)",
            "Total Quantity of Plastic Packaging Imported in the preceding two financial years",
            "Thickness (in microns) of the plastic packaging imported",
            "Invoice details of the Imported products for the preceding two financial years",
            "Invoice details of local sales of the preceding two financial years",
          ]}
          heading="Documents Required for EPR Registration"
        />
      </div>

      <div className="mt-[46px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Submitting Annual Returns
        </span>
        Submitting Annual Returns plays a major part in EPR Compliance and basically involves three activities: 1. Fulfilling the EPR Target: Recycling the plastic waste equivalent to the target or Buy the certificates or credit points equivalent to the target, 2. Updating Procurement and Sales Data, 3. Payment of Annual Processing Fee which is 25% of the application fees paid during EPR registration.
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section>
      {/* Conclusion Content */}
      <div className="mb-8">
        <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
          Conclusion
        </h3>
        <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <p className="mb-4">
            One of the key aspects of plastic waste management in India is incorporating the Extended Producer Responsibility (EPR) System into the plastic waste management framework. EPR covers a wide range of mechanisms that integrate the 'polluter pays' principle and business liability in the management of plastic waste produced by their products. This is a key step in transitioning to a circular economy. In the CPCB EPR Portal, the CPCB has designed an EPR framework that assists in the identification of various stakeholders and offers modules for enhancing transparency, accountability, and compliance for each of the waste management stakeholders. India is still in the early phases of implementing the EPR framework; still, it has the ability to greatly improve the sustainability of India's plastic waste management in the coming years.
          </p>
          <p>
            Sun Certifications is a pioneer in the Indian market for assisting businesses in obtaining Extended Producer Responsibility (EPR) registration and for guiding businesses in meeting the various legal requirements associated with the management of plastic waste in India. As one of the industry leaders in assisting with the management of EPR compliance, Sun Certifications aids producers, importers, and brand owners (PIBOs) in obtaining EPR registration in compliance with the Indian country's Plastic Waste Management Rules. In addition, Sun Certifications offers entities assistance with registration, compliance management, and responsible waste management to help improve the environment.
          </p>
        </div>
      </div>

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
