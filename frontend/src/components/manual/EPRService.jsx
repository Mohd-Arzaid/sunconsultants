import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../../assets/images/BISSRimg.png";

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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const EPRService = () => {
  return (
    <article className="epr-service-page relative">
      <Helmet>
        <title>Guide to EPR Registration for E-Waste Management in India</title>
        <meta name="description" content="EPR guidelines for E Waste Management obligates Producers, Manufacturers, recyclers and Refurbishers to register through the EPR portal meet their Recycling Targets." />
        <meta name="keywords" content="epr e-waste, epr e waste cpcb, e waste epr portal, epr registration for e waste, epr e waste management, epr e waste certificate, extended producer responsibility epr e waste, epr certificate for e waste, epr registration for e waste, epr authorization for e waste" />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Guide to EPR Registration for E-Waste Management in India" />
        <meta property="og:description" content="EPR guidelines for E Waste Management obligates Producers, Manufacturers, recyclers and Refurbishers to register through the EPR portal meet their Recycling Targets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bis-certifications.com/epr-registration-for-plastic-packaging-waste" />
        <meta property="og:site_name" content="Sun Certifications India" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="Guide to EPR Registration for E-Waste Management in India" />
        <meta name="twitter:description" content="EPR guidelines for E Waste Management obligates Producers, Manufacturers, recyclers and Refurbishers to register through the EPR portal meet their Recycling Targets." />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bis-certifications.com/epr-registration-for-plastic-packaging-waste" />

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
                name: "EPR Registration for Plastic Waste Management",
                item: "https://bis-certifications.com/epr-registration-for-plastic-packaging-waste",
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
                    EPR Registration for Plastic Packaging Waste
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
    </article>
  );
};

const EPRHero = () => {
  return (
    <header className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div
        className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"
        aria-hidden="true"
      ></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div
              className="h-[3px] w-[40px] bg-[#1A8781] mr-4"
              aria-hidden="true"
            ></div>
            <span className="text-[#1A8781] font-poppins text-sm md:text-base font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              EPR Registration for
              <span
                className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"
                aria-hidden="true"
              ></span>
            </span>{" "}
            E-Waste Management in India
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Get EPR registration for e-waste management. Ensure CPCB compliance
            under E-Waste Management Rules, 2022
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
    </header>
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
    "Eligibility",
    "Documents",
    "Consultancy",
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
    <main className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* <nav className="flex-1" aria-label="EPR Content Navigation"> */}
          <EPRContentLeft />
          {/* </nav> */}
          {/* <aside className="w-full md:w-[400px]"> */}
          <ServiceContentRight />
          {/* </aside>. */}
        </div>
      </div>
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
    </main>
  );
};

const ServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2 bg-gray-50 scroll-mt-20"
      aria-labelledby="faq-title"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2
          id="faq-title"
          className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a
            href="#contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Extended Producer Responsibility (EPR)?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Extended Producer Responsibility (EPR) is a type of policy in which producers take on the responsibility of managing the environmental impact of their products, including disposal and management of the product after the consumer is done using it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which entities are required to register on the CPCB EPR Portal?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following entities must register on the CPCB EPR portal and obtain EPR certificates:
                <br /><br />
                1. Producers
                <br />
                2. Importers
                <br />
                3. Brand Owners
                <br />
                4. Plastic Waste Processors involved in:
                <br />
                ● Recycling
                <br />
                ● Waste to Energy
                <br />
                ● Waste to Oil
                <br />
                ● Industrial Composting
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who is required to register with CPCB / SPCB / PCC?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                ● PIBOs operating in one or two States/UTs are required to register with the State Pollution Control Board (SPCB) or Pollution Control Committee (PCC).
                <br /><br />
                ● PIBOs in more than two States/UTs are required to register with the Central Pollution Control Board (CPCB).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the documents required for KYC for registration of PIBOs?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following documentation is necessary for KYC while registering:
                <br /><br />
                1. PDF versions of the company's PAN, CIN, and GST certificates
                <br />
                ● GST invoices covering all States/UTs that the PIBO service are to be added.
                <br /><br />
                2. A PDF version of the Authorized Person's PAN and Aadhaar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which are the plastic packaging categories covered under EPR?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The following plastic packaging categories fall under EPR:
                <br /><br />
                1. Category I: Rigid plastic packaging.
                <br /><br />
                2. Category II: Flexible plastic packaging, including:
                <br />
                ● Individual or composite multi-layer plastics (of varying plastic types)
                <br />
                ● Plastic sheets, covers, carry bags, sachets, and pouches
                <br /><br />
                3. Category III: Multilayer plastic packaging that contains:
                <br />
                ● At least one layer of plastic, and
                <br />
                ● At least one layer of material that is not plastic
                <br /><br />
                4. Category IV: Compostable plastic packaging that includes:
                <br />
                ● Compostable plastic sheets, and carry bags.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Pre-consumer Plastic Packaging Waste?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Pre-consumer plastic packaging waste is defined as the plastic waste that occurs before reaching the end-use consumer. This includes:
                <br /><br />
                ● Rejected or discarded plastic packaging materials made during manufacturing.
                <br />
                ● Lost or discarded packaging materials created during the packaging of products.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the Meaning of Post-consumer Plastic Packaging Waste?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Post-consumer plastic packaging waste is the waste created after a customer has used the packaging for its intended use and does not have any further need for the packaging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are EPR Targets for Producers and Importers?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The EPR target relates to the volume of plastic packaging placed onto the market by the PIBO. Targets and obligations are detailed in Section 7 of the EPR Guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What if a PIBO has an in-house recycling unit?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                If a PIBO has its own recycling unit:
                <br /><br />
                * The entity will have to register separately as a PIBO and as a Recycler
                <br />
                * Both registrations will require relevant supporting documents
                <br />
                * EPR credits are only able to be given to recyclers
                <br />
                * There has to be a record of the credit transfer from the recycler to the PIBO
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are needed if an entity falls under multiple categories?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                If an entity falls under multiple sub-categories:
                <br /><br />
                * It will be necessary to have a separate email ID for each category during registration
                <br />
                * The same Company KYC documents (PAN, GST, CIN) will apply to all categories
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
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

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultingSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

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
        EPR Registration for E-Waste Management in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        EPR Registration for E-Waste Management in India
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Mobile phones, laptops, medical instruments, and a variety of electronic household products comprise the electronic waste (e-waste) stream in India which includes the fastest growing waste categories from a global perspective, as a result of India's rapid digital expansion and growing dependence on consumer electronics.
        <br /><br />
        Electronic waste (e-waste) comprises mobile phones, laptops, medical devices, and electronics from various household products. The rapid digital expansion and growing dependence on consumer electronics in India resulted in the largest growing waste stream in the country.
        <br /><br />
        Electronic waste contains product components that are highly toxic and dangerous to human life such as lead, mercury, cadmium, and flame retardant. These components can poison and toxic waters, and the poison can spread, and children and other susceptible people can receive poisoning as a result. The Government of India realized the risks of electronic waste and implemented several regulations to mitigate it. The most important of them is the Extended Producer Responsibility (EPR) for E-Waste Management in India.
        <br /><br />
        In this article, we will analyze the details of EPR registration for e-waste management in the country, covering the relevant laws, the importance of the EPR, EPR obligations and compliances, and the EPR registration process.
      </div>

      {/* What is E-Waste Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What is E-Waste?
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        E-waste refers to the discarded end user electronic equipment, samples rejected from manufacturing, refurbishment, and repair activities. It includes:
        <br /><br />
        ● computers, laptops, and tablets
        <br />
        ● mobile devices and accessories
        <br />
        ● TVs and other home appliances
        <br />
        ● IT and telecommunications devices
        <br />
        ● medical and laboratory equipment
        <br /><br />
        The large quantity of such waste and the dangerous substances it contains necessitate the need for appropriate management. That's why EPR e-waste management is so important.
      </div>

      {/* Understanding EPR Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Understanding Extended Producer Responsibility (EPR) for E-Waste
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Extended Producer Responsibility EPR e-waste is an eco-political approach assigning the responsibility of e-waste management to the manufacturers of electronic and electrical equipment. Therefore, these manufacturers take care of the collection, storage, transport, recycling, and safe disposal of the e-waste from their products.
        <br /><br />
        In India, the EPR for e-waste concept was first introduced in 2011 and has since undergone multiple changes in succession. The most recent of these is the E-Waste Management Rules, 2022 in the context of the Environment (Protection) Act, 1986.
        <br /><br />
        The EPR management system is within the purview of the Central Pollution Control Board (CPCB) for EPR implementation, monitoring, and approvals.
      </div>

      {/* EPR Registration Meaning Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What does it mean to have EPR Registration for E-Waste Management?
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR registration for e-waste means that an entity gets permission from the Central Pollution Control Board (CPCB) to work with the electrical and electronic devices and obtain an e-waste registration and is legally operating in India only if they have a valid registration.
        <br /><br />
        The following entities must have EPR authorization for e-waste:
        <br /><br />
        ● Producers of electrical and electronic equipment
        <br />
        ● Suppliers of electronic goods to the country
        <br />
        ● Brand owners that offer products in their own name
        <br />
        ● Companies that create e-waste
        <br />
        ● Companies that reprocess
        <br />
        ● Companies that recycle
        <br /><br />
        When the entity registration is approved, it is issued an EPR e-waste certificate, confirming that the entity has fulfilled their regulatory obligations.
      </div>

      {/* E-Waste EPR Portal Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What is the use of the E-Waste EPR Portal?
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Central Pollution Control Board (CPCB) has created the e-waste EPR Portal to enhance compliance and transparency. For streamlined oversight, the e-waste EPR Portal serves the following purposes:
        <br /><br />
        ● The Application for EPR Registration and issuance of EPR Certificates
        <br />
        ● Annual and quarterly return filings
        <br />
        ● Collection, recycling, and disposal data submissions
        <br />
        ● EPR target and achievement tracking
        <br /><br />
        In order to provide the CPCB with regulatory oversight and real-time tracking, all users of the portal must validate their registrations to track their EPR obligations.
      </div>

      {/* Why EPR Essential Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Why EPR is Essential for Managing E-Waste
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR encourages responsible product design to counteract waste before it becomes harmful. Rather than dealing with the negative outcomes of pollution, EPR focuses on stopping the problem before it starts.
        <br /><br />
        With EPR e-waste management, companies are encouraged to:
        <br /><br />
        ● Design easy to recycle products
        <br />
        ● Eliminate the use of toxic materials
        <br />
        ● Encourage longer lasting products
        <br />
        ● Create structured collection and recycling systems
        <br /><br />
        All of these contribute to making environmental impact lower while helping achieve India's sustainable development goals and circular economy.
      </div>

      {/* Benefits Section */}
      <h4 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Benefits of EPR Registration for E-Waste
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>1. Legal Compliance and Business Continuity</strong>
        <br />
        An EPR certificate for e-waste protects businesses from the consequences of non-compliance with India's environmental laws. Businesses can be fined, their operations can be suspended, and criminal and civil actions can be taken against them under the Environment (Protection) Act of 1986 if adequate EPR authorization is not present.
        <br /><br />
        
        <strong>2. Waste Management Costs</strong>
        <br />
        EPR registration for e-waste, while it may appear to be a traditional compliance cost, is a counter to waste practices that result in over expenditure. Keeping costs down over the long run is achieved with guided collection, transport, and recycling.
        <br /><br />
        
        <strong>3. Protection of Ecosystem</strong>
        <br />
        EPR is a great help in controlling the circulation of dangerous materials that may produce pollution and threaten the ecosystem. This also allows the systemic diversion of waste from informal waste management to formal recycling.
        <br /><br />
        
        <strong>4. Improved Brand Image</strong>
        <br />
        Branding also has its positive aspects. The presence of an EPR e-waste certificate endorses a brand as environmentally responsible and thus attracts and retains the trade of customers.
        <br /><br />
        
        <strong>5. Support to Circular Economy</strong>
        <br />
        EPR focuses on recycling and recovery of materials that can be reused and is useful in conserving and lessening the need to extract more from the earth.
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
        The E-Waste Management Rules, 2022, Obligations
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        E-Waste Management Rules, 2022, clearly state what is expected from the various actors involved.
      </p>

      {/* Responsibilities Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Responsibilities of Manufacturers</strong>
        <br />
        ● Ensuring proper collection and recycling or disposal of e-waste created while manufacturing.
        <br />
        ● Registering on the e-waste EPR portal.
        <br />
        ● Filing annual and quarterly returns within the set deadlines.
        <br /><br />
        
        <strong>Responsibilities of Producers</strong>
        <br />
        Producers listed in Schedule I should:
        <br />
        ● Get EPR authorization for e-waste.
        <br />
        ● Meet EPR obligations as provided in the regulation.
        <br />
        ● Generate awareness through ads, publications, and other media.
        <br />
        ● Submit return statements periodically on the portal.
        <br /><br />
        
        <strong>Responsibilities of Refurbishers</strong>
        <br />
        ● Collect e-waste that occurs during the refurbishment process.
        <br />
        ● Only give the waste to registered recyclers.
        <br />
        ● Provide information on the epr e waste cpcb portal.
        <br />
        ● Ensure that the refurbished items are safe and of good quality.
        <br /><br />
        
        <strong>Responsibilities of Bulk Consumers</strong>
        <br />
        Bulk consumers like government entities, public sector undertakings, healthcare systems, and big companies are required to:
        <br />
        ● Only give e-waste to authorized producers, refurbishers, or recyclers.
        <br />
        ● Keep e-waste disposal records.
        <br /><br />
        
        <strong>Responsibilities of Recyclers</strong>
        <br />
        ● Keep and maintain recycling centers based on the CPCB guidance.
        <br />
        ● Dispose of leftover waste in authorized TSDFs.
        <br />
        ● Keep detailed records of collection, dismantling, and recycling.
        <br />
        ● Upload information on the EPR portal frequently.
        <br />
        ● Teach people about proper e-waste disposal.
      </div>

      {/* Storage Section */}
      <h4 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Storage of E-Waste Under EPR Regulations
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The E-Waste Management Rules, 2022 have brought up specific regulations that impose a maximum on the length of time that waste may be kept.
        <br /><br />
        ● E-waste can only be kept for 180 days
        <br />
        ● Keep records of sales, transfers, and storage
        <br />
        ● CPCB can grant recycling or reuse development extensions for 365 days
        <br /><br />
        When transporting e-waste, the 2016 Hazardous and Other Waste (Management and Transboundary Movement) Rules must be followed.
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
        E-Waste EPR Registration Documents
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        When applying for an EPR e-waste certificate, you will need the following documents:
      </p>

      {/* Important Points */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "If applicable, Importer Exporter Code (IEC)",
              "GST Registration",
              "KYC documents for the authorized signatory or proprietor",
              "Lease, rental agreement, or ownership proof for the business location",
              "An Excel sheet with imported products information",
              "A record of sales related to electrical and electronic equipment",
            ]}
            heading="Documents Required for EPR Registration"
          />
        </div>
      </div>

      {/* Registration Steps */}
      <h4 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Steps to Register E-Waste EPR
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR e-waste registration steps are entirely online through CPCB.
        <br /><br />
        
        <strong>Step 1: Go to the CPCB Website</strong>
        <br />
        Go to the Central Pollution Control Board's e-waste EPR portal.
        <br /><br />
        
        <strong>Step 2: Complete Form-1</strong>
        <br />
        Enter your business information, the types of products you offer, and how much e-waste you produce.
        <br /><br />
        
        <strong>Step 3: Set EPR Objectives</strong>
        <br />
        Provide the expected collection targets for the upcoming year, broken down by item, and for each collection.
        <br /><br />
        
        <strong>Step 4: Upload Documents</strong>
        <br />
        Please attach necessary documents and declarations.
        <br /><br />
        
        <strong>Step 5: CPCB Verification</strong>
        <br />
        CPCB is responsible for reviewing the application and confirming the details.
        <br /><br />
        
        <strong>Step 6: Grant of EPR Certificate</strong>
        <br />
        Once the verification has been completed successfully, the CPCB will issue the EPR e-waste certificate.
      </div>

      {/* Cancellation Section */}
      <h4 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Cancellation or Suspension of EPR Authorization
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In the case that an entity violates environmental law or misses an obligation under EPR, CPCB has the power to suspend or cancel an EPR certificate for e-waste.
        <br /><br />
        ● Action notice is sent within 25 days
        <br />
        ● The entity can deliver an explanation
        <br />
        ● Penalties and restrictions on operations may follow non-compliance
      </div>

      {/* Future Section */}
      <h4 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Future of EPR E-Waste Management in India
      </h4>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Projected growth in the generation of e-waste in India will give cause to strengthen EPR e-waste management. The introduction of digital tracking via the EPR portal, along with tighter policies and increased involvement of the industry will improve the sustainable management of e-waste in India.
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
          Conclusion
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Conclusion
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Getting EPR authorization for e-waste is one of the first steps a business should take to formally protect the environment while practicing responsible business.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Keeping a business legally compliant means that they can reduce health risks for the community and assist the country in moving towards a circular economy.
        <br /><br />
        The EPR portal is simple to use and is the main reason the e-waste EPR system is so effective. Companies that take the time to register with the EPR portal will be able to save themselves the hassle of regulatory issues and will be able to enjoy flexible and unrestrained operational capabilities for as long as they want to stay within the limit of the regulations.
        <br /><br />
        The rapid growth of electronics in the world means that effective EPR e-waste management is a shared responsibility. More importantly, it is a positive step towards a sustainable future.
      </div>

     
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section aria-labelledby="review-title">
      <h2
        id="review-title"
        className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal"
      >
        What did you think of this content?
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group"
            aria-label="Mark content as helpful"
          >
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

          <button
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group"
            aria-label="Mark content as not helpful"
          >
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

        <time
          className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal"
          dateTime="2025-03-19"
        >
          Last updated on Mar 19, 2025
        </time>
      </div>
    </section>
  );
};
