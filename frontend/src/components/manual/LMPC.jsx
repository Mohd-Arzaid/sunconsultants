import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import LMPCimg from "../../assets/images/LMPCimg.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "../common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import Services from "./Services";
import AboutAuthor from "../common/AboutAuthor";

export const LMPC = () => {
  return (
    <>
      <Helmet>
        <title>LMPC Certificate Guide | Legal Metrology Packaged Commodities | Sun Certifications</title>
        <meta
          name="description"
          content="Complete guide to LMPC certification for importers, manufacturers & packers. Get expert assistance with Legal Metrology Packaged Commodities registration in India."
        />
        <meta
          name="keywords"
          content="LMPC certificate, Legal Metrology, packaged commodities, importers registration, manufacturers registration, packers registration"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="LMPC Certificate Guide | Legal Metrology Packaged Commodities"
        />
        <meta
          property="og:description"
          content="Complete guide to LMPC certification for importers, manufacturers & packers. Get expert assistance with Legal Metrology Packaged Commodities registration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="LMPC Certificate Guide | Legal Metrology Packaged Commodities"
        />
        <meta
          name="twitter:description"
          content="Complete guide to LMPC certification for importers, manufacturers & packers."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "LMPC Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
              url: window.location.href,
              logo: "https://suncertifications.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "LMPC Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LMPC Registration for Importers",
                    description: "Registration services for importers of packaged commodities",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LMPC Registration for Manufacturers",
                    description: "Registration services for manufacturers of packaged commodities",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LMPC Registration for Packers",
                    description: "Registration services for packers of packaged commodities",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <article className="lmpc-page">
        <LMPCHero />
        <LMPCIndex />
        <LMPCContent />
        <Footer />
        <ScrollToTopButton />
      </article>
    </>
  );
};

// LMPC Hero Section
const LMPCHero = () => {
  return (
    <header className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco" aria-hidden="true"></div>

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
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4" aria-hidden="true"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              LMPC Certificate Guide for
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full" aria-hidden="true"></span>
            </span>{" "}
            Importers and Manufacturers
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Regulates pre-packaged goods for importers, manufacturers, and
            packers under Legal Metrology Act.
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

// LMPC Index Section
const LMPCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Importers",
    "Labeling",
    "Application",
    "Documents",
    "Procedure",
    "Importance",
    "Penalties",
    "Consultant",
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

// LMPC Content Section
const LMPCContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <LMPCContentLeft />

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

// LMPC FAQs Section
const ServiceFaq = () => {
  return (
    <section id="faqs" className="my-2 bg-gray-50 scroll-mt-20" aria-labelledby="faq-title">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 id="faq-title" className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a href="#contact" className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Reach out to us!
          </a>
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
                registrations 2-4 months. Our Certifications work to expedite these
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
                vary by product type), testing fees, Certifications fees, and
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
                safety monitoring and quality control. Our Certifications keep
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
    </section>
  );
};

const LMPCContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ImportersSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <LabelingSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ApplicationSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcedureSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ImportanceSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <PenaltiesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CertificationsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ReviewSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
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

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20" aria-labelledby="overview-title">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h2 id="overview-title" className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        What is LMPC Certification? A Complete Overview
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Mandatory for labeling & fair trade.
      </p>

      {/* Nomination Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In India, the import, sale, and distribution of pre-packaged goods are
        all governed by the Legal Metrology Act 2009 and{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Legal Metrology Packaged Commodities (LMPC) Rules
        </span>{" "}
        , 2011 or LMPC certificate. A pre-packaged product is any item assembled
        in advance and packaged without any customization. LMPC certification
        guidelines regulates the exchange of items distributed or sold by
        weight, measure, or number. The Act aims to encourage fair trade
        practices and safeguard consumer rights by establishing stringent rules
        and regulations, notably for pre-packaged goods.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          LMPC certificate's full form is Legal Metrology Packaged Commodities.
        </span>{" "}
        Which clearly indicates that LMPC license is applicable on all types of
        packed items sold in the market and regulates the details mentioned on
        prouduct's MRP Label.
        <br />
        <br />{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          LMPC product list:
        </span>{" "}
        Pre-packaged products include, for instance, baby food, gasoline, food
        items, paint, bagged cement, cables, wires, chemicals, wool, electrical
        and electronic products, etc.
        <br />
        <br />
        Trade conflicts are eliminated when the measurement is subject to
        regulatory monitoring. For instance, if a customer purchases 1 kilogram
        of lentils, they should receive exactly that amount and nothing less.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Legal metrology or a product containing LMPC certificate
        </span>{" "}
        also ensures catering to international standards using fundamental
        measuring tools.
        <br />
        <br />{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          LMPC certificate registration is generated under rule 27
        </span>{" "}
        of the Legal Metrology Packed Commodities ( LMPC ) Rules,2011.It ensures
        that the product has adequate details on its MRP label to educate the
        consumers about the product they are willing to purchase.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={["Importers", "Manufacturer and Packer", "Packer"]}
            heading="It is granted in three categories, namely:"
          />
        </div>

        {/* Image */}
        <figure className="w-full md:w-auto">
          <img
            src={LMPCimg}
            alt="LMPC certification process and documentation requirements for importers and manufacturers"

            width="400"
            height="250"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
            ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
            hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
            "
          />
          <figcaption className="sr-only">LMPC certification documentation and process overview</figcaption>
        </figure>
      </div>
    </section>
  );
};

const ImportersSection = () => {
  return (
    <section id="importers" className="flex flex-col scroll-mt-20">
      {/* Importers */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Importers
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        LMPC Certificate for Importers
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Required for importers, manufacturers & packers, issued via NSWS, valid
        PAN India.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        LMPC registration is applicable to traders who intend to import,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          manufacturer and re-packers of pre-packaged goods
        </span>{" "}
        for sale or distribution. They have to apply for LMPC certificate online
        at the National Single Window System or NSWS.If the application for LMPC
        registration is approved, the director/controller of legal metrology
        (the registering authority) will register the importer/manufacturer and
        packer/packer's name and address and issue a LMPC certificate.
        <br />
        <br />
        LMPC certificate validity is perpetual i.e. it does not have any end
        date and it is neither mentioned on the certificate received.
        <br />
        <br />
        Earlier the application was to be submitted to the{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          state legal metrology department,
        </span>{" "}
        now the same has to be applied through LMPC registration online portal
        named NSWS, and the LMPC certificate issued is valid for sales PAN
        India.
        <br />
        <br />
        This transition to an online process for obtaining LMPC certificate has
        made it more efficient and transparent, reducing the turnaround time to
        for the LMPC licence .{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          The above details are the same for importers/ manufacturers
        </span>{" "}
        and packers too. Once the LMPC registration is completed and LMPC
        certificate is released businesses are
        <br />
        <br />
        free to import, manufacture, or pack their pre-packaged goods without
        facing any legal obstacles in the Indian market from Legal Metrology
        Department.
      </div>
    </section>
  );
};

const LabelingSection = () => {
  return (
    <section id="labeling" className="flex flex-col scroll-mt-20">
      {/* Labeling */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Labeling
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Legal Metrology Labeling Requirements
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Requires manufacturer details, MRP, weight, origin & contact info for
        compliance.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To ensure that the supplier has enough details on MRP label that is
        required to educate the consumer about the product, Legal metrology
        guidelines helps maintain transparency and trust between the supplier
        and the consumer. Proper labelling is also essential for meeting the
        requirements of the LMPC certificate, ensuring that the product complies
        with all legal metrology regulations, below are the guidelines on
        details to be mentioned after the manufacturer/importer/packer obtains
        their respective LMPC certificate:
        <br />
        <br />
        1.Name and address of the manufacturer / importer / packer: This ensures
        traceability and accountability of the product's origin and responsible
        party. Including this information is mandatory under the LMPC
        registration guidelines.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Name and address of the manufacturer/importer/packer: Ensures traceability and accountability of the product's origin and responsible party. Mandatory under LMPC registration guidelines.",
              "Name of goods in the package.",
              "Country of import (in case of importer): Required as per LMPC license rules to provide transparency about the product's origin.",
              "Total quantity with respect to standard units of weight or measurement (e.g., Kg, meters): Helps avoid quantity-related disputes and ensures compliance with the Legal Metrology Act.",
              "Date of import (in case of importer).",
              "Manufacturing date.",
              "Maximum Retail Price (MRP): Rounded-up decimals, inclusive of all taxes.",
              "Dimension of goods (if applicable).",
              "Email ID and phone number of a concerned person or office for consumer complaints.",
            ]}
            heading="Mandatory Details for LMPC Product Labeling "
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The declaration must adhere to a predetermined structure in order to be
        presented on the box, whether it is printed in Hindi or English.
        <br />
        <br />
        The Legal Metrology Packaged Commodity Rules include fines of up to Rs.
        25,000 for violations depending upon the nature of the product and the
        firm committing the violation of law. Additionally, a late fee will be
        imposed if an importer requests for an LMPC certificate more than 90
        days after beginning imports.
      </div>
    </section>
  );
};

const ApplicationSection = () => {
  return (
    <section id="application" className="flex flex-col scroll-mt-20">
      {/* Application */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Application
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        How to apply for LMPC certificate?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Apply via NSWS with required documents & fees.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To obtain an LMPC certificate online, the application has to be
        submitted on the National Single Window System ( NSWS ) with the
        requisite fee and the documents related to the products and the firm
        importing / manufacturing / packing those products.
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
        Required Documents for LMPC Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Requires IEC, GST, ID proof, Aadhaar, label sample & digital signature.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Importer Exporter Code (IEC) (for importers only)",
              "GST Registration Certificate",
              "Proof of Identity & Address",
              "Aadhaar Number of applicant/authorized signatory",
              "Sample of declaration (label) to be placed on the commodity",
              "Registered partnership deed (for partnership firm) / Memorandum of Articles (for company)",
              "Digital signature of the applicant",
            ]}
            heading="Key Documents Required for LMPC Certification"
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To get the exact details , kindly contact our experts on the details as
        below:
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Email
        </span>
        admin@indiancertifications.com
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Phone
        </span>
        +91-8010505057
      </div>
    </section>
  );
};

const ProcedureSection = () => {
  return (
    <section id="procedure" className="flex flex-col scroll-mt-20">
      {/* Procedure */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Procedure
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        How to Apply for an LMPC Certificate?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Apply via NSWS, submit documents, pay fees, clear queries & get
        registration.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Preparation of documents as per the guidelines",
              "Making the label that has all the information as per the rules",
              "Creation of login credentials on NSWS portal",
              "Submission of the application",
              "Payment of government fees",
              "Clearing of queries (if any) raised by the department",
              "Grant of LMPC online registration",
            ]}
            heading="Step-by-Step Process to Get LMPC Certification"
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        1.) After the LMPC certification is complete, a registration number is
        generated which may also be mentioned on the product's MRP label or
        packaging.
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        2.) In case of imports, the LMPC certificate also has to be submitted
        with the Bill of Entry ( BOE ) to custom officials.
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        3.) Timeline : If you apply through us, we can get the registration done
        within 2 working days, irrespective of importer / manufacturer / packer.
        <br />
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        4.) No LMPC Mark is to be present on the product.
      </div>
    </section>
  );
};

const ImportanceSection = () => {
  return (
    <section id="importance" className="flex flex-col scroll-mt-20">
      {/* Importance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Importance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Why Importers Need an LMPC Certificate?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Without an LMPC certificate, customs may seize imports. Register to sell
        hassle-free in India.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        If you don't have an LMPC certificate or don't follow the legal
        metrology guidelines, customs may hold your imported products or
        penalize the products manufacturer/packed in India. A customs seizure
        might cause delays, costs, and other problems, so be careful to register
        as an importer before your products arrive in India.
        <br />
        <br />
        After completion of LMPC registration and complying with the norms of
        MRP label, the importer / manufacturer / packer can sell the products in
        the Indian market without any hassle.
      </div>
    </section>
  );
};

const PenaltiesSection = () => {
  return (
    <section id="penalties" className="flex flex-col scroll-mt-20">
      {/* Penalties*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Penalties
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Rule Violations & Penalties
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Penalties range from ₹4,000 to ₹25,000; repeat violations may lead to
        jail.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Provisions of different combinations of penalties, depending upon the
        extent of violations have been laid down by the department, ranging from
        INR 4,000 - 25,000 or provisions of imprisonment are also present on
        subsequent violation.
      </div>
    </section>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="flex flex-col scroll-mt-20">
      {/* Certifications*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Certifications
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        LMPC Certifications's Role in Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        An LMPC Certifications ensures quick and error-free registration.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To obtain LMPC registration services , the applicant can hire a LMPC
        agent to apply on the behalf of their company. LMPC Certifications help in
        getting the work done error-free, at a faster pace with more accuracy.
        At Sun Certifications, we provide LMPC certificate consultancy services to
        all importers/manufacturers/packers.
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
