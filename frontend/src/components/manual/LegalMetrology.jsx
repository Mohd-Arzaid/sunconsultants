import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";


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
    "Importance",
    "Trade Impact",
    "Legal Act",
    "LMPC Rules",
    "LMPC Process",
    "Documents",
    "LM Office",
    "FAQs",
  ];

  const handleItemClick = (item) => {
    let targetId = item.toLowerCase();

    // Map section names to their corresponding IDs
    const sectionIdMap = {
      "overview": "overview",
      "importance": "eligibility", // Using existing eligibility id
      "trade impact": "compliance", // Using existing compliance id
      "legal act": "process", // Using existing process id
      "lmpc rules": "lmpc-rules",
      "lmpc process": "lmpc-process",
      "documents": "lmpc-documents",
      "lm office": "legal-metrology-office",
      "faqs": "faqs"
    };

    targetId = sectionIdMap[targetId] || targetId;

    const element = document.getElementById(targetId);
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
            // Map element IDs back to section names
            const idToSectionMap = {
              "overview": "Overview",
              "eligibility": "Importance",
              "compliance": "Trade Impact",
              "process": "Legal Act",
              "lmpc-rules": "LMPC Rules",
              "lmpc-process": "LMPC Process",
              "lmpc-documents": "Documents",
              "legal-metrology-office": "LM Office",
              "faqs": "FAQs"
            };

            const sectionName = idToSectionMap[entry.target.id];
            if (sectionName) {
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all the actual element IDs
    const elementIds = ["overview", "eligibility", "compliance", "process", "lmpc-rules", "lmpc-process", "lmpc-documents", "legal-metrology-office", "faqs"];

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
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

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto prose prose-lg max-w-none">

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">1. What is Legal Metrology?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Legal Metrology is the field of law that deals with units of measurement, weighing and measuring instruments, and their verification to ensure fairness in trade and consumer protection.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">2. What does an LMPC certificate mean?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            An LMPC (Legal Metrology Packaged Commodities) certificate is a mandatory document for importers and packers of pre-packaged goods in India. It certifies compliance with labeling and packaging rules under the Legal Metrology Act.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">3. Who needs LMPC registration?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Anyone who imports, manufactures, or packages pre-packed commodities for sale in India must obtain LMPC registration, including private label owners and e-commerce brands.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">4. What is the LMPC registration process?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            The process includes document preparation, submission of an application form, inspection by Legal Metrology Officers, and issuance of the certificate upon approval.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">5. What are the penalties for non-compliance with Legal Metrology rules?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Penalties range from ₹2,000 to over ₹50,000 and may include seizure of goods, cancellation of licenses, or prosecution.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">6. How long does an LMPC certificate remain valid?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            It is valid for a period of 1 to 5 years, depending on state policies. Timely renewal is essential to maintain compliance.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">7. Can I apply for LMPC registration online?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Some states offer online portals for LMPC registration. However, many still require physical submission and verification.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">8. What is the role of the Legal Metrology Office?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            It registers manufacturers, dealers, and repairers of weighing/measuring devices, verifies instruments, processes LMPC applications, and enforces compliance through inspections.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">9. Do I need separate LMPC registration for each product?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            No, a single registration can cover multiple products, but all must be declared in the application.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">10. What are the waste management laws that apply to my business?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Depending on your operations, you may need to comply with the Environment Protection Act, E-Waste Rules, Plastic Waste Rules, and Battery Waste Management Rules, among others.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">11. Is waste management legally mandatory for all companies?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Yes, especially for manufacturing units, importers, and entities that generate electronic, plastic, or hazardous waste.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">12. What happens if I fail to manage waste properly?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Consequences include fines, suspension of business operations, and in severe cases, criminal prosecution.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">13. Can consultants help with LMPC and waste compliance?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Absolutely. Experts like Sun Certifications India provide comprehensive services for LMPC registration, documentation, packaging audits, and waste management compliance.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">14. Do I need to display my LMPC certificate?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Yes. It must be prominently displayed at your place of business and presented during inspections or customs clearance.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">15. How can I get started with legal metrology or waste management compliance?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Start by evaluating your product and waste types, gathering necessary documents, and consulting with professionals to guide you through registration and ongoing obligations.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">16. What is the difference between LMPC certificate and Legal Metrology registration?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            The LMPC certificate is for packaged commodities, especially importers and packers, while Legal Metrology registration is required by manufacturers, dealers, or repairers of weighing and measuring devices.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">17. How often should weighing instruments be verified?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Most commercial instruments must be verified annually. Some specialized equipment may require more frequent verification depending on usage and state-specific guidelines.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">18. Can I sell a product online without LMPC compliance?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            No. All e-commerce platforms operating in India require sellers to comply with LMPC regulations. Non-compliance can result in delisting or legal notices.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">19. What is Battery Waste Management compliance?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Battery waste management includes proper disposal, recycling, and documentation of used batteries. Businesses handling batteries must comply with the Battery Waste Management Rules, 2022.
          </p>

          <h3 className="font-geist text-[20px] md:text-[24px] font-semibold text-[#3f3f46] mt-8 mb-4">20. Is electronic waste management mandatory for IT companies?</h3>
          <p className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e] mb-6">
            Yes. Any organization generating e-waste, including IT firms, must comply with the E-Waste Management Rules, ensure safe disposal, and maintain disposal records.
          </p>

        </div>
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
      <h1
        id="overview-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        What is Legal Metrology?
      </h1>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Legal Metrology governs the scientific, regulatory, and legal framework applied to weights and measurements. In India, this is overseen by the Department of Consumer Affairs under the Ministry of Consumer Affairs, Food and Public Distribution. The Legal Metrology Act, 2009 was introduced to consolidate laws relating to weights and measures and other goods which are sold or distributed by weight, measure, or number.
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Objectives of Legal Metrology:
        </h3>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Protect consumers by ensuring the accuracy of measurements</li>
          <li>Prevent fraud in commercial transactions</li>
          <li>Promote fair trade and confidence in trade practices</li>
          <li>Facilitate transparency and compliance in product labeling</li>
        </ul>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Legal Metrology includes standardization of measurement units, approval and calibration of measuring instruments, licensing for businesses handling weights and measures, and enforcement of penalties for violations.
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Where It Applies:
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Legal metrology applies to any industry where goods are bought and sold by weight or measure. This includes sectors like:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Retail trade</li>
          <li>Food and beverage</li>
          <li>E-commerce</li>
          <li>Pharmaceuticals</li>
          <li>Manufacturing</li>
          <li>Transportation and logistics</li>
        </ul>
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
      {/* Importance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Importance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="eligibility-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Why Legal Metrology Matters in India
      </h2>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Legal Metrology is not just a regulatory obligation; it is a foundational component of a fair and transparent economy. In India's rapidly expanding marketplace, with booming sectors like e-commerce, pharmaceuticals, and packaged goods, the relevance of Legal Metrology has increased multifold.
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Economic Significance
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          Legal Metrology ensures trust in the market by guaranteeing that a product's weight or volume is accurate. This assurance is vital to:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Maintain fairness in trade</li>
          <li>Protect consumers from deception</li>
          <li>Build business credibility</li>
          <li>Prevent disputes among commercial parties</li>
        </ul>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          Each time a consumer buys a liter of milk, a packet of rice, or a cylinder of gas, they rely on the integrity of the weight and measurement systems. Legal Metrology makes that trust possible.
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Government's Role in Consumer Protection
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Indian government has made Legal Metrology compliance mandatory to:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Enforce fair pricing</li>
          <li>Standardize labeling</li>
          <li>Monitor imported goods</li>
          <li>Detect fraud and manipulation</li>
        </ul>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          The Legal Metrology Packaged Commodities Rules are frequently updated to reflect current market practices. These rules impact pricing disclosures, nutritional labeling, use-by dates, and country-of-origin declarations.
        </div>
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
      {/* Trade Impact */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Trade Impact
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="compliance-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        How Legal Metrology Influences Trade
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          For manufacturers and importers, proper Legal Metrology compliance means:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Easy customs clearance</li>
          <li>Seamless onboarding on e-commerce platforms</li>
          <li>Avoidance of legal penalties</li>
          <li>Improved product marketability</li>
        </ul>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Empowering Consumers Through Regulation
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          A well-informed consumer is a protected consumer. Legal Metrology provides transparency in pricing and quantity, especially:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>On electronic weighing scales at grocery shops</li>
          <li>On price labels of pre-packed items</li>
          <li>On meters for LPG, electricity, and water</li>
        </ul>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          When consumers know what they're paying for is accurate, confidence in the system grows.
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          National and International Trade Impact
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          For exporters and importers:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>LMPC registration ensures that products meet global standards</li>
          <li>Non-compliance can result in customs hold-ups, product rejections, and loss of trade licenses</li>
        </ul>
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
      {/* Legal Act */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Legal Act
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2
        id="process-title"
        className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
      >
        Legal Metrology Act: Complete Breakdown
      </h2>

      {/* Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Legal Metrology Act, 2009 is a transformative statute that governs units of measurement, measuring instruments, and the protection of consumer rights in India. This act lays the foundation for ensuring accuracy, fairness, and transparency in all commercial and industrial transactions that rely on measurement.
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Purpose of the Act
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Legal Metrology Act serves several key purposes:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Standardization of weights and measures</li>
          <li>Regulation of manufacturing, import, sale, and repair of weighing/measuring instruments</li>
          <li>Consumer protection through verified and certified measurements</li>
          <li>Legal enforcement through penalties for non-compliance</li>
        </ul>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Key Definitions
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Act defines critical terms such as:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Weight or measure: Standard units prescribed by the government</li>
          <li>Pre-packaged commodity: Products packed without buyer presence and labeled for sale</li>
          <li>Manufacturer: Any entity that manufactures or assembles weights or measures</li>
          <li>Legal Metrology Officer (LMO): An officer authorized to inspect, verify, and enforce the Act</li>
        </ul>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          Understanding these definitions helps stakeholders determine their obligations and rights.
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Applicability
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Act applies to:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>All goods sold or distributed by weight, measure, or number</li>
          <li>Every entity dealing with packaged commodities, including importers and e-commerce sellers</li>
          <li>Manufacturers, repairers, and dealers of weighing/measuring devices</li>
        </ul>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Structure of the Act
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Act is supported by three important rules:
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold font-geist text-[14px] md:text-[16px] text-[#131316]">
            1. Legal Metrology (General) Rules, 2011
          </h4>
          <h4 className="font-semibold font-geist text-[14px] md:text-[16px] text-[#131316]">
            2. Legal Metrology (Packaged Commodities) Rules, 2011
          </h4>
          <h4 className="font-semibold font-geist text-[14px] md:text-[16px] text-[#131316]">
            3. Legal Metrology (National Standards) Rules, 2011
          </h4>
        </div>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          These rules elaborate on:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Registration and licensing procedures</li>
          <li>Labeling requirements</li>
          <li>Penalties for violations</li>
          <li>Methods for standardization and calibration</li>
        </ul>
      </div>

      <div className="mt-[16px] md:mt-[24px]">
        <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
          Enforcement Mechanism
        </h3>
        <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          The Act is enforced through a well-structured hierarchy:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Central Government: Establishes policy and coordination</li>
          <li>State Governments: Appoint Controllers and LMOs</li>
          <li>Legal Metrology Officers: Conduct inspections, seize goods, issue fines</li>
        </ul>
        <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
          They have authority to:
        </div>
        <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
          <li>Inspect premises without prior notice</li>
          <li>Seize non-compliant goods</li>
          <li>File prosecution for violations</li>
        </ul>
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <div className="space-y-8">
      {/* LMPC Rules Section */}
      <section
        id="lmpc-rules"
        className="flex flex-col scroll-mt-20"
        aria-labelledby="lmpc-rules-title"
      >
        {/* LMPC Rules */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            LMPC Rules
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>

        <h2
          id="lmpc-rules-title"
          className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
        >
          Legal Metrology Packaged Commodities Rules (LMPC Rules)
        </h2>

        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          The Legal Metrology (Packaged Commodities) Rules, 2011—commonly referred to as LMPC Rules—are an extension of the Legal Metrology Act, 2009. These rules ensure that every pre-packaged commodity is labeled with accurate, transparent, and standardized information to protect consumers from misleading practices.
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Why LMPC Rules Exist
          </h3>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            Pre-packaged goods are often purchased without direct interaction between the buyer and seller. The LMPC Rules enforce labeling that makes sure the buyer receives accurate and essential product details.
          </div>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            These rules are mandatory for:
          </div>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Manufacturers</li>
            <li>Packers</li>
            <li>Importers</li>
            <li>E-commerce sellers</li>
          </ul>
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Applicability
          </h3>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            The LMPC Rules apply to any commodity that is:
          </div>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Pre-packed in a sealed container</li>
            <li>Intended for retail sale</li>
            <li>Labeled for direct consumer purchase</li>
          </ul>
          <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            This includes a wide range of products:
          </div>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Food and beverages</li>
            <li>Pharmaceuticals</li>
            <li>Cosmetics</li>
            <li>Consumer electronics</li>
            <li>Household goods</li>
          </ul>
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Key Labeling Requirements
          </h3>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            Each package must clearly bear the following:
          </div>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Name and address of the manufacturer/packer/importer</li>
            <li>Net quantity expressed in standard units (kg, g, L, mL, etc.)</li>
            <li>Retail Sale Price (MRP) including all taxes</li>
            <li>Date of manufacture/import/packing</li>
            <li>Customer care contact</li>
            <li>Country of origin (mandatory for imported goods)</li>
          </ul>
        </div>
      </section>

      {/* LMPC Process Section */}
      <section
        id="lmpc-process"
        className="flex flex-col scroll-mt-20"
        aria-labelledby="lmpc-process-title"
      >
        {/* LMPC Process */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            LMPC Process
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>

        <h2
          id="lmpc-process-title"
          className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
        >
          LMPC Process: Step-by-Step Detailed Application Guide
        </h2>

        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          The LMPC certification process involves a series of legal, documentation, and inspection procedures. It must be completed by every importer, manufacturer, or packer of pre-packaged commodities before their goods can be sold in the Indian retail market.
        </div>

        <div className="mt-[16px] md:mt-[24px] space-y-6">
          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 1: Identify Applicability
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              Before beginning the process, determine whether your product falls under the Legal Metrology (Packaged Commodities) Rules. If your product is packaged and meant for retail sale, LMPC applies.
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 2: Gather LMPC Documents
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              Prepare the following documents:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>Copy of IEC code (for importers)</li>
              <li>GST registration certificate</li>
              <li>PAN card of business entity</li>
              <li>Address proof of premises</li>
              <li>Sample label or packaging</li>
              <li>Product list with net quantities</li>
              <li>Declaration letter</li>
              <li>Authorization letter (if applying via consultant)</li>
            </ul>
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <div className="font-geist text-sm md:text-base text-blue-800">
                📂 <strong>TIP:</strong> Keep both hard copies and soft copies scanned in advance to save time.
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 3: Choose Registration Type
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              Depending on your business scope:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>Apply for Central Registration with the Director of Legal Metrology (for inter-state trade)</li>
              <li>Apply for State Registration with the Controller of Legal Metrology (for intra-state only)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 4: Fill the Application Form
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              Obtain and fill the LMPC application form:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>Include accurate product names</li>
              <li>State correct pack sizes and weights</li>
              <li>Mention trade name/brand clearly</li>
              <li>Sign and stamp with official seal</li>
            </ul>
            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="font-geist text-sm md:text-base text-yellow-800">
                💡 Ensure there are no spelling errors, mismatched details, or inconsistent units.
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 5: Submit the Application
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              Submit the application along with the required fee:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>Via post to the respective department</li>
              <li>In-person at the Legal Metrology Office</li>
              <li>Online (where available)</li>
            </ul>
            <div className="mt-4 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              Make sure to obtain an acknowledgment receipt or reference number.
            </div>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 6: Department Review & Inspection
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              The Legal Metrology Department will:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>Scrutinize your application</li>
              <li>Inspect packaging samples</li>
              <li>Conduct a physical visit (if required)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-2">
              Step 7: Certificate Issuance
            </h3>
            <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
              If all criteria are met:
            </div>
            <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
              <li>LMPC certificate is granted</li>
              <li>You will receive it via post or email (depending on the portal)</li>
              <li>It includes validity period, pack sizes, and authority seal</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const ConsultingSection = () => {
  return (
    <div className="space-y-8">
      {/* LMPC Certificate Documents Section */}
      <section
        id="lmpc-documents"
        className="flex flex-col scroll-mt-20"
        aria-labelledby="lmpc-documents-title"
      >
        {/* Documents */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            Documents
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>

        <h2
          id="lmpc-documents-title"
          className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
        >
          LMPC Certificate Documents
        </h2>

        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          To ensure a smooth application process, here is a consolidated LMPC document checklist:
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Mandatory Documents:
          </h3>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Business incorporation certificate (Company/LLP/Partnership)</li>
            <li>Import Export Code (for importers)</li>
            <li>PAN card (Entity)</li>
            <li>GST certificate</li>
            <li>Rent agreement or property ownership proof</li>
            <li>Packaging label (actual or draft)</li>
            <li>Board resolution/Authorization letter (if applicable)</li>
            <li>Demand Draft or fee payment receipt</li>
          </ul>
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Optional But Recommended:
          </h3>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Product catalog with specifications</li>
            <li>Client invoices (if available)</li>
            <li>ISO certificates (if applicable)</li>
          </ul>
          <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4 rounded">
            <div className="font-geist text-sm md:text-base text-green-800">
              📋 <strong>Pro Tip:</strong> Arrange documents in the order specified by your state's Legal Metrology Office.
            </div>
          </div>
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Sample Label Format
          </h3>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-4">
            Every product label must include:
          </div>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li>Name & address of importer/packer</li>
            <li>Net weight or volume</li>
            <li>MRP (inclusive of all taxes)</li>
            <li>Month & year of packing/import</li>
            <li>Customer care contact</li>
            <li>Country of origin (for imported goods)</li>
          </ul>
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h4 className="font-semibold font-geist text-[16px] md:text-[18px] text-[#131316] mb-4">
            LMPC Certificate Cost: State-Wise Fee Structure Explained
          </h4>
          <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            The cost of obtaining an LMPC certificate can vary by state and type of application.
          </div>
        </div>
      </section>

      {/* Legal Metrology Office Section */}
      <section
        id="legal-metrology-office"
        className="flex flex-col scroll-mt-20"
        aria-labelledby="legal-metrology-office-title"
      >
        {/* LM Office */}
        <div className="flex w-full items-center gap-3">
          <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
            LM Office
          </span>
          <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
        </div>

        <h4
          id="legal-metrology-office-title"
          className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0"
        >
          Role & Functions of the Legal Metrology Office
        </h4>

        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          The Legal Metrology Office plays a pivotal role in upholding consumer rights and fair trade practices through the implementation of standards related to weight and measurement. This office, operating under the Department of Consumer Affairs, ensures that the Legal Metrology Act and related rules are properly enforced.
        </div>

        <div className="mt-[16px] md:mt-[24px]">
          <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316] mb-4">
            Core Responsibilities
          </h3>
          <ul className="list-disc pl-6 font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose space-y-2">
            <li><strong>Registration & Licensing:</strong> Issues licenses to manufacturers, dealers, and repairers of weights and measures.</li>
            <li><strong>LMPC Certification:</strong> Processes applications and grants LMPC certificates to importers and packers.</li>
            <li><strong>Verification & Stamping:</strong> Conducts inspection, verification, and stamping of measuring instruments.</li>
            <li><strong>Surveillance & Enforcement:</strong> Carries out raids, inspections, and enforcement actions against non-compliance.</li>
          </ul>
        </div>
      </section>
    </div>
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
