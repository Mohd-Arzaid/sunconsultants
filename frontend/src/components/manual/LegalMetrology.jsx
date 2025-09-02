import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import PWMRimg from "../../assets/images/PWMRimg.png";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
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

export const LegalMetrology = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>
          Legal Metrology Certification Services | Weights & Measures | Sun
          certifications
        </title>
        <meta
          name="description"
          content="Expert Legal Metrology certification services for weights and measures. Get certification for weighing and measuring instruments. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="Legal Metrology, weights and measures, metrology certification, weighing instruments, measuring instruments"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Legal Metrology Certification Services | Weights & Measures"
        />
        <meta
          property="og:description"
          content="Expert Legal Metrology certification services for weights and measures. Get certification for weighing and measuring instruments."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@certificationsSun" />
        <meta
          name="twitter:title"
          content="Legal Metrology Certification Services | Weights & Measures"
        />
        <meta
          name="twitter:description"
          content="Expert Legal Metrology certification services for weights and measures."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Legal Metrology Certification",
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
              name: "Legal Metrology Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Weights and Measures Certification",
                    description:
                      "Certification for weighing and measuring instruments",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Legal Metrology Registration",
                    description:
                      "Registration for weights and measures manufacturers",
                  },
                },
              ],
            },
          })}
        </script>

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
                name: "Legal Metrology Certification certifications",
                item: "https://bis-certifications.com/what-is-legal-metrology-or-lmpc-certificate",
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
                    Legal Metrology Certification certifications
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <article className="legal-metrology-page">
        <LMCHero />
        <LMCIndex />
        <LMCContent />
        <Footer />
        <ScrollToTopButton />
      </article>
    </div>
  );
};

const LMCHero = () => {
  return (
    <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Legal Metrology Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            certifications
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

const LMCIndex = () => {
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
    "consultancy",
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

const LMCContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <LMCContentLeft />

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
                What is Legal Metrology?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Legal Metrology is the field of law that deals with units of measurement, weighing and measuring instruments, and their verification to ensure fairness in trade and consumer protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What does an LMPC certificate mean?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                An LMPC (Legal Metrology Packaged Commodities) certificate is a mandatory document for importers and packers of pre-packaged goods in India. It certifies compliance with labeling and packaging rules under the Legal Metrology Act.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who needs LMPC registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Anyone who imports, manufactures, or packages pre-packed commodities for sale in India must obtain LMPC registration, including private label owners and e-commerce brands.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the LMPC registration process?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The process includes document preparation, submission of an application form, inspection by Legal Metrology Officers, and issuance of the certificate upon approval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the penalties for non-compliance with Legal Metrology rules?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Penalties range from ₹2,000 to over ₹50,000 and may include seizure of goods, cancellation of licenses, or prosecution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does an LMPC certificate remain valid?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                It is valid for a period of 1 to 5 years, depending on state policies. Timely renewal is essential to maintain compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can I apply for LMPC registration online?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Some states offer online portals for LMPC registration. However, many still require physical submission and verification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the role of the Legal Metrology Office?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                It registers manufacturers, dealers, and repairers of weighing/measuring devices, verifies instruments, processes LMPC applications, and enforces compliance through inspections.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do I need separate LMPC registration for each product?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                No, a single registration can cover multiple products, but all must be declared in the application.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What are the waste management laws that apply to my business?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Depending on your operations, you may need to comply with the Environment Protection Act, E-Waste Rules, Plastic Waste Rules, and Battery Waste Management Rules, among others.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is waste management legally mandatory for all companies?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes, especially for manufacturing units, importers, and entities that generate electronic, plastic, or hazardous waste.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What happens if I fail to manage waste properly?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Consequences include fines, suspension of business operations, and in severe cases, criminal prosecution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can consultants help with LMPC and waste compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Absolutely. Experts like SUN CONSULTANTS & ENGINEERS provide comprehensive services for LMPC registration, documentation, packaging audits, and waste management compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Do I need to display my LMPC certificate?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes. It must be prominently displayed at your place of business and presented during inspections or customs clearance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How can I get started with legal metrology or waste management compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Start by evaluating your product and waste types, gathering necessary documents, and consulting with professionals to guide you through registration and ongoing obligations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the difference between LMPC certificate and Legal Metrology registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                The LMPC certificate is for packaged commodities, especially importers and packers, while Legal Metrology registration is required by manufacturers, dealers, or repairers of weighing and measuring devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How often should weighing instruments be verified?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Most commercial instruments must be verified annually. Some specialized equipment may require more frequent verification depending on usage and state-specific guidelines.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can I sell a product online without LMPC compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                No. All e-commerce platforms operating in India require sellers to comply with LMPC regulations. Non-compliance can result in delisting or legal notices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is Battery Waste Management compliance?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Battery waste management includes proper disposal, recycling, and documentation of used batteries. Businesses handling batteries must comply with the Battery Waste Management Rules, 2022.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is electronic waste management mandatory for IT companies?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                Yes. Any organization generating e-waste, including IT firms, must comply with the E-Waste Management Rules, ensure safe disposal, and maintain disposal records.
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

const LMCContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
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

        {/* Review Section */}
        <ReviewSection />

        <AboutAuthor />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section
      id="overview"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="overview-title"
    >
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="overview-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Plastic Waste Management & Recycling
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Promotes eco-friendly disposal, reduces pollution & boosts recycling.
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The initiative aims to establish environment-friendly plastic waste
        disposal solutions. In the process it seeks to ban the use of plastic
        bags and plastic products, and reduce plastic littering across the
        state. It has been observed that disposal of plastic waste is a serious
        concern due to improper collection and segregation system. Only 60% of
        the plastic produced is recycled, balance 9400 Tones of plastic is left
        unattended in environment causing land, air and water pollution
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  return (
    <section
      id="eligibility"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="eligibility-title"
    >
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="eligibility-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Plastic License Eligibility
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Required for manufacturers; foreign applicants need an Indian
        representative.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All manufacturers, either of Indian or foreign origin can apply for the
        Plastic licence.In case of foreign manufacturer license will be granted
        to the manufacturer and the Indian counterpart of the manufacturer will
        act as it's Indian Representative. The Indian representative of the
        manufacturer must have a valid state drugs license under Form 20-B/21-B
        or Form 42 ( applied under Form 41 ) as per the latest guidelines
        released by CDSCO.
      </div>
    </section>
  );
};

const ComplianceSection = () => {
  return (
    <section
      id="compliance"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="compliance-title"
    >
      {/* Compliance*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Compliance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="compliance-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Businesses That Need Plastic Waste Certification
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Required for recyclers, producers & raw material manufacturers.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "Units engaged in processing or recycling of plastic waste",
              "Producers or brand owners of plastic products",
              "Manufacturers of plastic raw materials",
            ]}
            heading="Consumer Electrical & Electronics"
          />
        </div>

        <img
          src={PWMRimg}
          alt="Medical laboratory equipment"
          width="400"
          height="250"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
          ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
          hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
          "
        />
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="process-title"
    >
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="process-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Plastic Waste Management Rules 2016
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Regulates plastic collection, EPR, reuse, and awareness to reduce
        environmental impact.
      </p>

      {/* Process Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Plastic Waste Management Rules, 2016 make an arrangement to reduce
        the negative impact on the environment-related to plastic waste, if we
        talk about these days scenario plastic is a vital material and almost
        impossible to ban. Under the PWM rules, authorities such Urban Local
        Bodies should provide separate collection, storage, and processing of
        plastic waste in respected areas.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Plastic waste has spread to rural areas, expanding its applicability beyond municipal regions.",
              "Establishes producer and generator responsibility for plastic waste under Extended Producer Responsibility (EPR).",
              "Promotes plastic waste usage in road construction, energy recovery, and waste-to-oil as per Indian Road Congress guidelines.",
              "Monitors and facilitates the use of plastic carry bags above 50 microns.",
              "Encourages awareness in civil society to reduce plastic usage.",
            ]}
            heading="Key Provisions of Plastic Waste Management Rules "
          />
        </div>
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section
      id="documents"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="documents-title"
    >
      {/* Documents*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="documents-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Process for EPR license and post compliances
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        EPR registration involves CPCB application, certification, recycling,
        and yearly renewal.
      </p>

      {/* Documents Content */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Authorization Letter (except Proprietorship)",
              "Layout Plan",
              "Agreement with Authorized Recycler",
              "Rent Agreement/Proof of Location",
              "PAN Card and Aadhaar Card of Authorized Person",
              "Consent to Operate (CTO) from State Pollution Control Authority",
              "Cost of Project",
            ]}
            heading="Required Documents for Plastic Waste Certification "
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[46px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Timeline
        </span>
        Approx 6-8 weeks after submission of application.
      </div>
      <div className="mt-[16px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Validity
        </span>
        It is granted for 5 years initially and has to be renewed after that by
        paying the government fees.
      </div>
    </section>
  );
};

const ConsultingSection = () => {
  return (
    <section
      id="consultancy"
      className="flex flex-col scroll-mt-20"
      aria-labelledby="consultancy-title"
    >
      {/* Consultancy */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consultancy
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="consultancy-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Sun certifications: Plastic Waste License Experts
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        We make Plastic Waste Management registration easy and compliant.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As Plastic Waste Management registration certifications, our job is to
        ensure that the tiring procedures that we have listed above become a
        cake-walk for you. Right from the beginning, i.e. from the stage of
        collection of documents from the foreign manufacturers or preparation of
        documents for the Indian manufacturer and following up with the
        department for grant of license is under our scope. Additionally, we
        provide expert guidance throughout the process, ensuring compliance with
        all regulations, addressing any concerns, and facilitating smooth
        communication with the concerned authorities.
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
