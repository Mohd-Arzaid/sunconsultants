import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import ROHSimg from "../assets/images/CDSCOOne.png";
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
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ROHS = () => {
  return (
    <>
      <main className="relative w-full">
        <Helmet>
          <title>RoHS Certification (Restriction of Hazardous Substance)</title>
          <meta name="description" content="RoHS certification (Restriction of Hazardous Substances) confirms that electronic and electrical products do not exceed maximum permitted levels of 10 restricted hazardous substances" />
          <meta name="keywords" content="RoHS Certification, RoHS Certificate, RoHS Compliance, RoHS Compliant, RoHS Certification online, RoHS Certification cost, RoHS Certification fee, RoHS Certification requirement" />
          
          {/* Open Graph Tags */}
          <meta property="og:title" content="RoHS Certification (Restriction of Hazardous Substance)" />
          <meta property="og:description" content="RoHS certification (Restriction of Hazardous Substances) confirms that electronic and electrical products do not exceed maximum permitted levels of 10 restricted hazardous substances" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bis-certifications.com/restriction-of-hazardous-substance-rohs-certificate" />
         
          <meta property="og:site_name" content="Sun Certifications India" />
          
          {/* Twitter Card Tags */}
       
          <meta name="twitter:title" content="RoHS Certification (Restriction of Hazardous Substance)" />
          <meta name="twitter:description" content="RoHS certification (Restriction of Hazardous Substances) confirms that electronic and electrical products do not exceed maximum permitted levels of 10 restricted hazardous substances" />

          
          {/* Additional Meta Tags */}
          <meta name="author" content="Sun Certifications India" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <link rel="canonical" href="https://bis-certifications.com/restriction-of-hazardous-substance-rohs-certificate" />
          
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
                  name: "ROHS Registration Certification",
                  item: "https://bis-certifications.com/restriction-of-hazardous-substance-rohs-certificate",
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
                      ROHS Registration Certification
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <ROHSHero />
        <ROHSIndex />
        <ROHSContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default ROHS;

const ROHSHero = () => {
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
              ROHS Registration
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certification
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Comprehensive RoHS Certification services for electronic products to ensure global market access and environmental compliance.
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

const ROHSIndex = () => {
  // Observe each section
  const SECTIONS = [
    "overview",
    "standardization",
    "authority",
    "registration",
    "verification",
    "process",
    "testing",
    "costs",
    "faqs",
  ];

  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("Overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const stickyRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const toggleButtonRef = useRef(null)

  const handleItemClick = (item) => {
    let targetId = item.toLowerCase();
    
    // Map display names to actual section IDs
    const idMapping = {
      "rohs meaning": "standardization",
      "necessity": "authority",
      "applicability": "registration",
      "restricted substances": "verification",
      "costs & benefits": "costs"
    };
    
    if (idMapping[targetId]) {
      targetId = idMapping[targetId];
    }
    
    const element = document.getElementById(targetId);
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
            } else if (entry.target.id === "costs") {
              setActiveSection("Costs & Benefits");
            } else if (entry.target.id === "testing") {
              setActiveSection("Testing");
            } else if (entry.target.id === "standardization") {
              setActiveSection("RoHS Meaning");
            } else if (entry.target.id === "authority") {
              setActiveSection("Necessity");
            } else if (entry.target.id === "registration") {
              setActiveSection("Applicability");
            } else if (entry.target.id === "verification") {
              setActiveSection("Restricted Substances");
            } else if (entry.target.id === "process") {
              setActiveSection("Process");
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
            {[
              "Overview",
              "RoHS Meaning",
              "Necessity",
              "Applicability",
              "Restricted Substances",
              "Process",
              "Testing",
              "Costs & Benefits",
              "FAQs",
            ].map((item) => (
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
        {[
          "Overview",
          "RoHS Meaning",
          "Necessity",
          "Applicability",
          "Restricted Substances",
          "Process",
          "Testing",
          "Costs & Benefits",
          "FAQs",
        ].map((item) => (
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

const ROHSContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <ROHSContentLeft />

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
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is RoHS?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                RoHS stands for Restriction of Hazardous Substances. RoHS, also known as Directive 2002/95/EC, originated in the European Union and restricts the use of specific hazardous materials found in electrical and electronic products (known as EEE). All applicable products in the EU market after July 1, 2006 must pass RoHS compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is RoHS mandatory in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes, RoHS compliance (Restriction of Hazardous Substances) is mandatory in India for many electronic and electrical equipment (EEE) manufacturers and importers primarily through the E-Waste (Management) Rules, which mirror the EU directive and require reducing hazardous substances like lead, mercury, and cadmium in products sold in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the restricted materials mandated under RoHS?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The substances banned under RoHS are lead (Pb), mercury (Hg), cadmium (Cd), hexavalent chromium (CrVI), polybrominated biphenyls (PBB), polybrominated diphenyl ethers (PBDE), and four different phthalates (DEHP, BBP, BBP, DIBP).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Why is RoHS compliance important?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The restricted materials are hazardous to the environment and pollute landfills, and are dangerous in terms of occupational exposure during manufacturing and recycling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who issues the RoHS certificate?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Central Pollution Control Board (CPCB) shall conduct random sampling of electrical and electronic equipment placed on the market to monitor and verify the compliance of Reduction of Hazardous Substances provisions and the cost for sample and testing shall be borne by the Producer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How are products tested for RoHS compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Portable RoHS analyzers, also known as X-ray fluorescence or XRF metal analyzers, are used for screening and verification of the restricted metals. With the advent of RoHS 3 and the four added phthalates, different testing is needed to ascertain levels of these compounds, which are extracted with a solvent. For more information, see RoHS Testing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Which companies are affected by the RoHS Directive?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Any business that sells or distributes applicable EEE products, sub-assemblies, components, or cables directly to EU countries, or sells to resellers, distributors or integrators that in turn sell products to EU countries, is impacted if they utilize any of the restricted materials. Since RoHS-like regulations have spread to a number of other countries, this just doen't apply to EU countries anymore.
                RoHS also applies to the metal industry for any application of metal plating, anodizing, chromating or other finishes on EEE components, heatsinks, or connectors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What happens if a product is not RoHS compliant?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Suppose a product is not compliant with RoHS and placed on the European Union (EU) market. In that case, there can be legal and financial consequences for the manufacturer, importer, distributor, or any party responsible for the non-compliant product.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the cost of RoHS certification in India?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The cost of RoHS certification varies across India, and the price range is between Rs. 25,000 and Rs. 1,50,000 or more, and this varies because of the scope and testing required. Considerations include product types, complexity, number of parts, testing methodologies, laboratory fees, inspections, and documentation costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does RoHS certification take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The duration for RoHS certification is approximately 2 weeks, however, this highly depends on the complexity of the product. The certification is valid for 5 years from the date of issue.
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

const ROHSContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="flex flex-col  gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <StandardizationSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AuthoritySection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RegistrationSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <VerificationSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <TestingMethodsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostsBenefitsSection />
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
        RoHS Certification in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Essential compliance for electronic products in the global market
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Rapid growth in the electronics and electrical equipment industry, coupled with an increasing concern for the environment and the impact on human health, can be seen on a global scale. Hazardous materials in electronic products can adversely affect ecosystems and human life at all stages of a product's lifecycle from the manufacturing of the product, to its disposal, and everything in between. This and other similar global concerns have prompted the introduction of regulatory frameworks across the world, with one of the most noteworthy being the introduction of the RoHS Certification.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In India, the surge in electronic consumption, the resultant increase in e-waste, and the regulation of the environment in India for the purpose of protecting it has made RoHS compliance essential. As a manufacturer, importer, distributor, or exporter of electrical and electronic equipment, gaining an understanding of RoHS certification is essential in order to be legally compliant and gain access to the European Union (EU) and other markets.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This guide examines RoHS Certification in India in an all inclusive manner, explaining its meaning and scope, benefits, process, methods, costs, duration, and outlining steps that can be taken to obtain RoHS certification in India in the most streamlined manner.
      </div>
    </section>
  );
};

const StandardizationSection = () => {
  return (
    <section id="standardization" className="flex flex-col scroll-mt-20">
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          RoHS Meaning
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        RoHS Certification Meaning and Full Form
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Understanding the Restriction of Hazardous Substances Directive
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        RoHS stands for 'Restriction of Hazardous Substances'. In order to obtain the certification, it is necessary to comply with the RoHS Enforcement Regulation that requires the restriction of certain hazardous substances in electrical and electronic equipment (EEE).
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As part of the European Union's effort to address issues of health and environmental dangers of pollution stemming from the disposal of electronic equipment, the Restriction of Hazardous Substances (RoHS) Directive 2002/95/EC, was introduced. This directive came into effect on July 1, 2006, and all products that fall under its regulations and are sold in the EU must comply with its guidelines.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Additionally, the directive has evolved through the years expanding its scope and imposition of additional restricted materials, including the RoHS 2 (2011/65/EU) and RoHS 3 (EU 2015/863) directives.
      </div>
    </section>
  );
};

const AuthoritySection = () => {
  return (
    <section id="authority" className="flex flex-col scroll-mt-20">
      {/* Authority */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Necessity
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Why RoHS Certification in India is Necessary
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Environmental protection and legal compliance requirements
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Rapid technological advancements, coupled with shorter life cycles of electronic products, are significantly increasing the volume of electronic waste in India. The Ministry of Environment, Forest and Climate Change (MoEFCC) enacted the E-Waste (Management) Rules which now also require RoHS compliance for electrical and electronic equipment to be sold, manufactured, or imported into India.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        RoHS and E-Waste Rules in India
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Enforcement of RoHS compliance in India is done through the:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● E-Waste (Management) Rules, 2016<br />
        ● Amended E-Waste Rules (2018 & 2022)
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        These regulations require producers to guarantee that the restricted materials are in compliance with the prescribed limits and to keep technical documentation for compliance verification.
      </div>
    </section>
  );
};

const RegistrationSection = () => {
  return (
    <section id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Applicability
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Who Needs to Obtain RoHS Certification?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Companies requiring RoHS compliance certification
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Any company that engages with the production, import, sale, or distribution of electrical and electronic equipment must ensure RoHS compliance, including:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        - Manufacturers of electronic products<br />
        - Importers of electrical and electronic products<br />
        - Exporters to the European Union<br />
        - Component and OEM manufacturers<br />
        - Distributors, traders, and resellers<br />
        - Assemblers and contract manufacturers
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Even if you don't sell directly to the European Union, you may need RoHS compliant certification if your customers or integrators sell to RoHS regulated countries.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Products Covered Under RoHS
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        RoHS covers a variety of electrical and electronic products such as:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        - Consumer electronics<br />
        - Telecommunications and IT equipment<br />
        - Electrical equipment used in industry<br />
        - Medical equipment<br />
        - Control and monitoring instruments<br />
        - Equipment used in lighting<br />
        - Electrical and electronic appliances<br />
        - Electrical tools and machines<br />
        - Power adapters and supplies<br />
        - PCBs<br />
        - Connectors, cables, and other components
      </div>
    </section>
  );
};

const CostsBenefitsSection = () => {
  return (
    <section id="costs" className="flex flex-col scroll-mt-20">
      {/* Costs */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Costs & Benefits
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Cost, Timeline and Benefits of RoHS Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Understanding investment requirements and returns for RoHS compliance
      </p>

      {/* Content */}
      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Cost of RoHS Certification in India
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The first question businesses have is pertaining to the cost of the RoHS certification. Considerations for RoHS Certification Cost in India:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Product types or their variants<br />
        ● Product intricacy<br />
        ● Amount of parts<br />
        ● Required testing methodologies<br />
        ● Fees for laboratory services<br />
        ● Inspections and audits<br />
        ● Costs for documentation
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The cost of RoHS certification varies across India, and the price range is between Rs. 25,000 and Rs. 1,50,000 or more, and this varies because of the scope and testing required.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Best practice is to work with a certification body that has enough experience in the industry, as they will reduce costs for you by avoiding documentation mistakes that lead to re-testing.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Timeline and Duration of RoHS Certifications
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Duration:</strong> Approximately 2 weeks (however, this highly depends on the complexity of the product)
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Duration of Validity:</strong> 5 years
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        What Are the RoHS Certification Benefits?
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Legal & Market Benefits</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        - Compulsory for EU exports<br />
        - Stops product recalls and penalties<br />
        - Prevents €1 million fines and 2% of annual company revenue fines
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Business & Competition</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        - Heightens the reputation of the brand<br />
        - Increases the trust of customers<br />
        - Opens the door to more global sales
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>Social Responsibility</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        - Decreases manufacturing waste<br />
        - Encourages responsible and sustainable manufacturing processes
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Conclusion
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Obtaining RoHS certificates is a requirement that businesses operating in the spheres of electrical and electronic equipment must meet. The advantages that RoHS compliance has, including market growth and environmental sustainability, far exceed the effort and expense for compliance.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To obtain RoHS certification, proper documentation must be completed, and working with a certification body with experience is a good strategy for businesses to optimize compliance, minimize risk, and achieve sustainability.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As the global market continues to experience tighter regulations, obtaining RoHS compliant certification is an investment in the future of your business.
      </div>
    </section>
  );
};

const TestingMethodsSection = () => {
  return (
    <section id="testing" className="flex flex-col scroll-mt-20">
      {/* Testing */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Testing
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Technologies and Methods for Testing Compliance with ROHS
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing methods and technologies for RoHS compliance verification
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Testing is the foundation of compliance verification ROHS certification check.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Common Testing Methods
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>1. X-Ray Fluorescence (XRF)</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Can be done without damaging product<br />
        ● Quick screening technique<br />
        ● Best suited for metals, connectors, pins, and terminals
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>2. Destructive Testing</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Used for PCBs, relays, and switches.<br />
        ● Components get destroyed during analysis.<br />
        ● Results are very accurate.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>3. Eddy Current Testing</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Used for coils, transformers, and inductors.<br />
        ● Can be done with or without damaging the parts.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>4. Mechanical Sorting</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Used for differentiating plastic and metal components.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>5. Metal Detection</strong>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Used for ensuring critical metals don't get into production lines.<br />
        ● On-site screening makes use of Portable RoHS analyzers and XRF metal analyzers.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Technical File Requirements for RoHS Certification
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To be compliant with RoHS, a complete technical file is necessary. Important technical documents are the following:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Description and specs of product<br />
        ● Drawings of design and structure<br />
        ● Risk assessment of materials, parts, and subassemblies<br />
        ● Conformity declarations of the suppliers<br />
        ● Records of manufacturing processes<br />
        ● Reports of tests and evidence of compliance<br />
        ● Standards and specifications that are applicable
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        These documents should be kept and made available to the authorities when they ask for them.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        RoHS Certification logo and the CE Mark
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The logo for RoHS certifies that the product has complied with the restriction of hazardous substances, and it can be used once the product has been certified.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In addition to meeting the RoHS requirements, for products that are to be sold in the EU, the products must also be CE marked, which shows compliance with the safety, health, and environmental protection requirements of the EU.
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
        Procedure to Obtain RoHS Certification in India
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step-by-step certification process for RoHS compliance
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For businesses that wish to achieve compliance and expand their market, knowing the procedure to obtain RoHS certification in India is essential.
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Step-by-Step Certification Process for RoHS
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>1. Product Finalization:</strong> Specify and finalize the product(s) that needs to be certified. This may include:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        i. Single products<br />
        ii. Product lines<br />
        iii. Multiple variants that share the same design and materials
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>2. Submission of Application:</strong> Fill out the application form and send it to a certifying body like Sun Certifications to begin the process along with a few basic details about the product and the company.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>3. Review of Documents:</strong> The initial documents are scanned to evaluate the readiness of the applicant for compliance. These include:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Bills of materials<br />
        ● Supplier declarations<br />
        ● Material safety data sheets<br />
        ● Prior test reports (if any)
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>4. Testing and Verification for ROHS:</strong> Testing is done per the given guidelines to check the level of restricted substances.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>5. Product Audit and Evaluation:</strong> The audit of the manufacturing company and the processes is done to check for the evidence of continuing compliance.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>6. Final Submission of Documentation:</strong> All the extra explanation and corrective action documents are submitted.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>7. Review and Evaluation:</strong> The certifying body reviews the documentation with respect to the tests and audit results.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <strong>8. Distribution of ROHS Certificate:</strong> The Document of Compliance and covering certificate is provided to the applicant after successful evaluations.
      </div>

    
    </section>
  );
};

const VerificationSection = () => {
  return (
    <section id="verification" className="flex flex-col scroll-mt-20">
      {/* Verification */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Restricted Substances
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Substances Restricted Under RoHS Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Hazardous materials limited by RoHS compliance
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        RoHS has set certain limits that regulate the use of hazardous substances. The substances that are presently restricted under the RoHS directive include:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Lead (Pb)<br />
        ● Mercury (Hg)<br />
        ● Cadmium (Cd)<br />
        ● Hexavalent Chromium (Cr⁶⁺)<br />
        ● Polybrominated Biphenyls (PBB)<br />
        ● Polybrominated Diphenyl Ethers (PBDE)
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Environmental and Health Impact
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        These substances are known to:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Leach contaminants into landfill sites<br />
        ● Pollute the groundwater with toxic contaminants<br />
        ● Cause neurological disorders, respiratory disorders, and reproductive disorders<br />
        ● Create an occupational hazard during the manufacturing and recycling process
      </div>

      <div className="mt-[24px] font-bold font-geist text-sm md:text-lg text-black tracking-wide text-left max-w-full leading-loose">
        Products Exempted from RoHS Certification
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The following product categories are exempt from RoHS compliance:
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        ● Military and national defense products<br />
        ● Products that do not use electricity<br />
        ● Equipment that does not use electricity to accomplish its primary purpose<br />
        ● Sub-assemblies or components of exempt products<br />
        ● Products that assist Micro, Small, and Medium Enterprises (MSMEs) under the MSME Development Act, 2006<br />
        ● Batteries<br />
        ● Equipment that contains radioactive waste
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
