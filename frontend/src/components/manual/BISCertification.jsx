import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import BISSRimg from "../../assets/images/BISSRimg.png";
import { Helmet } from "react-helmet-async";

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

export const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS Certification Services | ISI Mark | BIS License | Sun Consultants
        </title>
        <meta
          name="description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, ISI Mark, BIS License, BIS registration, Indian Standards, product certification"
        />
        <meta name="author" content="Sun Consultants & Engineers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          property="og:description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Consultants & Engineers" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ConsultantsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          name="twitter:description"
          content="Expert BIS certification services for Indian and foreign manufacturers."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Consultants & Engineers",
              url: window.location.href,
              logo: "https://sunconsultants.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ISI Mark Certification",
                    description:
                      "ISI Mark certification for Indian manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS License for Foreign Manufacturers",
                    description:
                      "BIS License certification for foreign manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Registration Certificate",
                    description: "BIS Registration certification for products",
                  },
                },
              ],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is BIS Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="w-full">
        <BISCHero />
        <BISCIndex />
        <BISCContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

// BISC Hero Section
const BISCHero = () => {
  return (
    <section
      className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Indian BIS License
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS Registration
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Certification ensures product quality and safety in India. It is
            mandatory for many products and requires testing, documentation, and
            approval.
          </p>

          <nav className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </section>
  );
};

// BISC Index Section
const BISCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
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
            {[
              "Overview",
              "Benefits",
              "Schemes",
              "Types",
              "Documents",
              "Procedure",
              "Process",
              "Cost",
              "Consultant",
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
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {[
          "Overview",
          "Benefits",
          "Schemes",
          "Types",
          "Documents",
          "Procedure",
          "Process",
          "Cost",
          "Consultant",
          "FAQs",
        ].map((item) => (
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

// BISC Content Section
const BISCContent = () => {
  return (
    <section
      className="w-full overflow-x-hidden"
      aria-label="BIS Certification Content"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISCContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
    </section>
  );
};

// BISC FAQs Section
const ServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2 bg-gray-50 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What services do you offer for BIS compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                We offer comprehensive BIS regulatory compliance services
                including product registration, license applications, regulatory
                strategy, documentation preparation, and post-approval
                compliance monitoring for various products in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does the BIS approval process typically take?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS approval timelines vary based on product category and
                application type. Typically, it takes 4-6 months for standard
                products. Our consultants work to expedite these timelines
                through proper documentation and regulatory strategy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What documents are required for BIS registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Required documents include product dossiers, manufacturing
                information, test reports, quality control documents, and
                various application forms specific to your product category. Our
                team assists in preparing all necessary documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do you assist with factory inspections?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes, we provide end-to-end support for BIS factory inspections,
                including pre-inspection readiness assessments, gap analysis,
                preparation of required documentation, mock inspections, and
                assistance during actual inspections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the costs associated with BIS registrations?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS registration costs include official government fees (which
                vary by product type), testing fees, consultant fees, and
                potential inspection costs. We provide transparent quotations
                based on your specific product and requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISCContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Benefits Section */}
        <BenefitsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Schemes Section */}
        <SchemesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Types  Section */}
        <TypesSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*Documents  Section */}
        <DocumentsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/*procedure  Section */}
        <ProcedureSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConsultantSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />
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
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Full Form & Meaning
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures product quality, safety, and compliance in India.
      </p>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS' full form is{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Bureau of Indian Standard,
        </span>{" "}
        an Indian National Standard Body established in 1986. It was created to
        harmonize the quality of consumer and industrial products being sold in
        India . BIS Certification or BIS License on a product ensures its
        quality and that the product is as per BIS Standardswhich are set by the
        Indian government to meet international quality standards. To obtain BIS
        certificate in India the manufacturer must first identify in which
        scheme of BIS the product is falling and then follow the procedure to
        obtain the BIS Certificate so that their products can be sold in India.{" "}
        <br />
        <br />
        BIS product certification ensures integrity, trustworthiness, and
        reliability of any product.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          To apply for BIS certification the applicant has to be a manufacturer,{" "}
        </span>{" "}
        either of Indian or foreign origin. In some cases BIS registration can
        be optional or mandatory depending upon the nature of the product and
        the BIS scheme in which it lies.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "It protects the general public's health",
              "It offers quality control at the manufacturer's end",
              "It safeguards consumers from dangerous goods",
              "It increases consumer trust on the standard marked products",
            ]}
            heading="Why BIS Certification is Recommended?"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src={BISSRimg}
            alt="BIS Certification Process"
            loading="lazy"
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

const BenefitsSection = () => {
  return (
    <section id="benefits" className="flex flex-col scroll-mt-20">
      {/* Benefits */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Benefits
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Benefits
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Ensures quality, safety, market edge, and global compliance.
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Ensures high levels of quality because goods with a BIS registration are produced per BIS standards and are tested during the process.",
              "If the products are marked with BIS license number, it ensures that no harmful chemicals / components are being used in consumer products.",
              "Gives market edge over the manufacturers who are not certified.",
              "Helps Indian manufacturers to export the product, due to their products being developed and tested as per ISS (Indian Standard Specifications) which are at par with international standards.",
              "Enables Foreign manufacturers to understand requirements of the Indian market and standards so that they can develop the products according to the BIS product certification regulations.",
            ]}
            heading="BIS Certification: Quality, Safety & Market Advantage"
          />
        </div>
      </div>
    </section>
  );
};

const SchemesSection = () => {
  return (
    <section id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes  */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Schemes
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Schemes under the purview of BIS are as follows:
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "BIS License for Indian manufacturers (For obtaining BIS certification on electrical, Metal, Industrial, and other types of products.)",
              "BIS License for Foreign Manufacturers / Indian Importers under FMCS (For obtaining BIS License on electrical, Metal, Industrial, and other types of products.)",
              "BIS Certificate under Compulsory Registration Scheme - CRS (For obtaining BIS registration for electronic products)",
              "Recognition of Hallmarking Centres",
              "Hallmark for all types of gold and silver jewellery",
              "ECO Mark Certification",
              "BIS Laboratory Recognition Scheme (LRS)",
              "Management System Certification Scheme (MSCS)",
              "Development of BIS Standards for new products.",
            ]}
            heading="Types of BIS Certification Schemes"
          />
        </div>

        {/* Image */}
      </div>
    </section>
  );
};

const TypesSection = () => {
  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* types */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          types
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Schemes Explained
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark, FMCS, CRS, Hallmarking, ECO Mark, LRS, MSCS.
      </p>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        1. BIS License for Indian manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certification or ISI Mark is granted to{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Indian Manufacturers under schedule II and scheme I of BIS
        </span>{" "}
        ISI Mark is mandatory for 650+ products under the Product Certification
        Scheme. Over 40,000 manufacturers have BIS certification for steel,
        glass, footwear, toys, electronics, and more.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS License is initially granted for 1 year and after that it can be
          renewed from 1-5 years,
        </span>{" "}
        by payment of the requisite fees. To check the products that require
        mandatory BIS certification for Indian manufacturers.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        2. BIS Licence for Foreign Manufacturers / Indian Importers under FMCS:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        FMCS Standards for Foreign Manufacturer Certification Scheme, under this
        scheme{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          ISI Mark Certification is granted to manufacturers based out of India
        </span>{" "}
        Governed by the BIS Act 2016, it allows manufacturers (not importers) to
        export to India. Importers can be Authorized Indian Representatives
        (AIR). Over 1,850 licenses granted since 2000.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        3. BIS Certificate under Compulsory Registration Scheme ( CRS ) for
        Indian and Foreign Manufacturers:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Most of the electronic products{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          like mobile phones, adaptors, televisions, li-ion batteries, UPS, LED
          bulbs, etc
        </span>{" "}
        require BIS registration under the CRS scheme. In which, the product has
        to be tested as per the BIS standards and the statutory documents of the
        manufacturer have to be filed along with the application, once the
        registration is granted R.no. is generated which has to be mentioned on
        the products that are registered with BIS.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        4. Recognition of Hallmarking Centres
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All the gold and silver jewellery sold in India must have{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          hallmark certification from BIS, and hallmark is grante
        </span>{" "}
        after the product is tested in a BIS approved Hallmarking centre,
        therefore it is the duty of BIS to recognize hallmarking centres that
        can test as per the BIS standards.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        5. Hallmark for all types of gold and silver jewellery
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS formulates standards as per the international norms according to
        which{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          all types of gold and silver jewellery must be tested.
        </span>{" "}
        Hallmark helps the consumer to ensure the purity of product that they
        are buying and also helps them to know what they are paying for.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        6. ECO Mark Certification
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The products carrying ECO mark by BIS ensures that they are
        environmentally safe and are not polluting earth.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          The major product heads covered under this BIS registration schem
        </span>{" "}
        are Includes paints, beverages, infant foods, cosmetics, batteries,
        edible oils, electronics, leather, fire extinguishers, and food
        additives.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        7. BIS Laboratory Recognition Scheme ( LRS )
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS-approved labs test products to ensure compliance with BIS standards
        for certification. quality.{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          BIS certification is granted after the test report from BIS laboratory
          is submitted
        </span>{" "}
        to the concerned branch office or headquarters, however the case maybe.
        Laboratories that require BIS certification must have prior approval
        from NABL.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        8. Management System Certification Scheme:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This scheme for BIS Certification of management systems{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          was started in the year 1991,
        </span>{" "}
        and BIS, India's sole certification body under the Parliament Act,
        grants certifications from its Delhi headquarters.
      </div>

      <div className="font-semibold mt-[16px] md:mt-[24px] font-geist text-[#131316] tracking-wide text-left max-w-full leading-tight text-[16px] md:text-[20px]">
        9. Development of BIS Standards for new products.
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification requires product testing as per specific Indian
        Standards set by the Bureau of Indian Standards. Standards ( BIS. )
        Currently,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          there are more than 20,000 BIS Standards developed by various
          sectional
        </span>{" "}
        there are more than 20,000 BIS Standards developed by various sectional
        committees incorporated within the department.
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
        ISI Mark BIS Certification Documents
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {/* Description */}
        <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
          ISI: GST, MSME, test report.&nbsp;&nbsp;&nbsp;&nbsp;CRS: GST, brand,
          test report.
        </p>
      </p>

      {/* Nomination Content */}

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "GST certificate of the applicant",
              "MSME certificate (if applicable)",
              "List of machinery used for manufacturing the specific product for which BIS Certification is applied for.",
              "List of raw materials used for manufacturing.",
              "List of instruments in the in-house test laboratory.",
              "Plant layout of the factory",
              "Test report from BIS' lab or OSL (Outside privately owned laboratories appointed by BIS as per BIS standards.)",
              "Calibration certificates, etc.",
            ]}
            heading="For BIS license of manufacturers the following documents are a must:"
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To apply for a BIS certificate, the manufacturer must visit
      </div>
    </section>
  );
};

const ProcedureSection = () => {
  return (
    <section id="procedure" className="flex flex-col scroll-mt-20">
      {/* Procedure*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Identifying the Indian Standard (IS) applicable on the product.",
                "Setting up of in-house lab as per the standard.",
                "Creation of BIS portal (in case of Indian manufacturers).",
                "Getting the product tested as per ISS (Indian Standard Specifications).",
                "Filing of BIS application with test report and other requisite documents.",
                "Clearing of queries (if any) raised by the department.",
                "Audit of the factory by a BIS officer allotted to the firm.",
                "Sample testing in the in-house test lab.",
                "Sealing of samples for re-verification by the officer during the audit. (The applicant does not have to wait for this test report, as the test report is already submitted during the application. This sample is just for re-verification purposes.)",
                "Completion of audit.",
                "Grant of BIS Licence.",
              ]}
              heading="BIS Certification Process for Manufacturers"
            />
          </div>
        </div>

        <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Note
          </span>
          After grant of BIS certificate, there are 4 surveillances conducted
          annually on all manufacturers, the details are as below: <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            A
          </span>
          Random market sample testing in done 2 times in a year ( every 6
          months ), <br />
          <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            B
          </span>
          Random factory surveillances are conducted twice to check if all the
          formalities are met by the licensee ( every 6 months).
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Proccdrure of BIS Certification
      </h3>
      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Testing, application, audit, approval, and compliance checks.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[15px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Creation of BIS portal.",
                "Testing of samples as per BIS' allocated Indian Standard (IS).",
                "Preparation of application documents.",
                "Filing of BIS application.",
                "Clearing of queries (if any).",
                "Grant of BIS registration.",
              ]}
              heading="BIS/CRS Registration Process for Manufacturers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CostSection = () => {
  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Cost
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Cost Or BIS License Fees.
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Starts from ₹1,000 + testing & audit charges.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certificate fees depends on various factors such as product, Indian
        Standard ( IS ) applicable, Nature of the manufacturer ( Indian or
        overseas ), etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Government fees: INR 53,000 + GST @18% per test report (Additional INR 20,000 for each test report in one application).",
              "Testing charges: As per actuals (vary based on product and lab).",
            ]}
            heading="Fee structure for BIS registration ( CRS ):"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Note
        </span>
        Certain discounts on Govt.fee are provided to companies registered under
        the MSME act.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Application fee: INR 1,000 + GST @18%",
              "License fee: INR 1,000 + GST @18%",
              "Audit charges: INR 7,000 per man-day + GST @18%",
              "Testing charges: As per actuals (vary based on product and lab)",
              "Minimum Marking Fee: As per actuals (varies according to the product)",
            ]}
            heading="Fee Structure for BIS Certification or BIS licence:"
          />
        </div>
      </div>

      <div className="mt-[12px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification cost in case of Foreign manufacturers has certain
        other charges that are payable, please contact us for more details for
        the complete schedule of charges to obtain BIS License under FMCS.
      </div>
    </section>
  );
};

const ConsultantSection = () => {
  return (
    <section id="consultant" className="flex flex-col scroll-mt-20">
      {/* Consultant*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consultant
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Role of BIS Consultant in Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Guides manufacturers through BIS certification for hassle-free approval.
      </p>

      {/* Nomination Content */}

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS consultantshelp you to understand all the requirements that are to
        be fulfilled by the manufacturers lawfully, and completely hand-holds
        you in the BIS certification process right from the start till the BIS
        license is granted. <br />
        <br />
        We at Sun Consultants & Engineers ( Best BIS Consultant in India ),
        being in this field for over a decade now, have the greatest possible
        knowledge, resources, manpower and technical know-how to assist our
        clients , and ensure them a feeling of cake-walk while going through the
        process to obtain BIS certificate.
        <br />
        <br />
        For detailed details on all of the above you can contact our experts on
        the details below:
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
