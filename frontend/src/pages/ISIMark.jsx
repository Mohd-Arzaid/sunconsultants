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
import Services from "../components/manual/Services";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AboutAuthor from "../components/common/AboutAuthor";

const ISIMark = () => {
  return (
    <>
      <BISISIHero />
      <BISISIIndex />
      <BISISIContent />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default ISIMark;

// BIS Hero Section
const BISISIHero = () => {
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
              BIS Certification for
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Indian Manufacturers
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            As part of the ‘Make in India’ vision, BIS certification helps
            manufacturers guarantee product safety, quality, and compliance. Get
            certified and grow your brand with confidence.
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

// BIS Index Section
const BISISIIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = ["Overview", "Process", "Document", "Costing", "FAQs"];

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
    const handleScroll = () => {
      const sections = SECTIONS.map((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section,
            top: rect.top,
            bottom: rect.bottom,
            element,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently most visible in viewport
      // Check which section's top is closest to the top of viewport (with some offset)
      const currentSection = sections.find((section) => {
        return section.top <= 150 && section.bottom > 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        // If no section is in the sweet spot, find the one closest to top
        const closestSection = sections.reduce((closest, section) => {
          if (!closest) return section;

          const currentDistance = Math.abs(section.top - 150);
          const closestDistance = Math.abs(closest.top - 150);

          return currentDistance < closestDistance ? section : closest;
        }, null);

        if (closestSection) {
          setActiveSection(closestSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
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

// BIS Content Section
const BISISIContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}

          <BISISIContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="product-table">
        <BISCProductTable />
      </div>

      <div id="services">
        <Services />
      </div>
    </div>
  );
};

// BIS FAQs Section
export const ServiceFaq = () => {
  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
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
                What is BIS certification and why is it important?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                BIS certification is issued by the Bureau of Indian Standards to
                ensure products comply with Indian safety and quality standards.
                It’s vital for legal compliance, consumer trust, and market
                acceptance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the difference between BIS license and ISI mark?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The BIS license is a legal document that authorizes a
                manufacturer to use the ISI mark. The ISI mark is the visible
                label on products indicating BIS certification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How long does it take to get BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Typically, 6–10 weeks depending on product type, testing
                requirements, and audit outcomes
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the validity period of a BIS license?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Usually 1 to 2 years, after which it must be renewed. Renewal
                should be initiated at least 30 days before expiry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the cost of BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Costs vary but can range from ₹25,000 to ₹100,000+, including
                testing, audit, and license fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is BIS certification mandatory for all products?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                No. It is mandatory only for products listed under the scheme 1
                of BIS certification.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How can I find the right IS standard for my product?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Visit the BIS website or consult with BIS-recognized testing
                labs and consultants to identify the applicable standard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Can foreign manufacturers apply for BIS certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Yes. Through the Foreign Manufacturers Certification Scheme
                (FMCS), overseas entities can obtain BIS licenses for ISI mark
                usage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What happens if my product fails BIS testing?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                You’ll need to correct the issues and re-submit for testing.
                Applications may be paused until successful compliance is
                demonstrated..
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is BIS certification needed for export?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                While not always mandatory for exports, BIS certification boosts
                credibility and can satisfy international buyers or regulatory
                bodies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISISIContentLeft = () => {
  return (
    <article className=" flex-1 ">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section
          className="flex flex-col gap-2 md:gap-4 mb-6"
          aria-label="BIS Certificate for Foreign Manufacturers"
        >
          <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            Introduction to BIS Certification in India for Indian Manufacturers
          </h1>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
            India's manufacturing ecosystem is undergoing a dynamic
            transformation, and with the government's push for "Make in India,"
            ensuring product quality and compliance has never been more vital.
            One of the most crucial steps for any domestic manufacturer aiming
            to thrive in the Indian market is obtaining the BIS certification.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            The Bureau of Indian Standards (BIS) is the national body
            responsible for establishing and maintaining product quality
            standards. The BIS certificate ensures that a product meets specific
            Indian standards and is safe, reliable, and of good quality.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            For domestic manufacturers, BIS certification is not merely a legal
            requirement; it's a mark of trust. The BIS license signals
            compliance, opens access to wider markets, and enhances brand
            credibility. With the widespread emphasis on quality assurance and
            customer safety, the Indian BIS system has emerged as a regulatory
            backbone for industrial and consumer product sectors alike.
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            The BIS certification also includes the ISI mark, a key indicator
            that a product conforms to the Indian Standards Institute's
            specifications. ISI mark products are often mandatory in sectors
            such as electronics, cement, steel, automotive components, and
            household goods. For manufacturers, acquiring the ISI mark via BIS
            registration can be the difference between market success and
            regulatory setbacks.
          </p>

          {/* <div className="bg-[#F9F7F2] border-l-4 border-[#1A8781] p-4 mt-2 md:mt-4 rounded-md shadow-sm">
            <h4 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-1">Is obtaining an ISI mark for Indian importers mandatory?</h4>
            <p className="font-geist text-[16px] md:text-[20px] text-[#42434d]">
              For the products falling under the mandatory list, FMCS BIS certification is mandatory. The list of mandatory products can be accessed on this <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/" target="_blank" rel="noopener noreferrer" className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors">link</a>.
            </p>
          </div> */}
        </section>

        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ProcessSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostingSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
      </div>
    </article>
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
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
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
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Nomination */}
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      {/* Title */}

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        What is the ISI Mark?
      </h2>

      {/* Description */}
      {/* <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Pre-requisites of nomination of an Authorized Indian Representative
      </p> */}

      {/* Nomination Content */}

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The ISI mark is the hallmark of quality and safety for products
        manufactured and sold in India. Short for the{" "}
        <span className="font-semibold">Indian Standards Institute</span> , the
        ISI mark signifies that a product conforms to the Indian standard (IS)
        specified by BIS. This mark ensures consumers that the product has been
        tested and certified by a BIS license and complies with national safety,
        performance, and reliability standards.
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Common ISI mark products include:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Electrical appliances like electric irons, room heaters, and water geysers",
            "Cement",
            "Steel products",
            "Pressure cookers",
            "Automotive components, etc.",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In many cases, having the ISI mark is mandatory under Indian law.
        Products falling under the Compulsory Certification Scheme must not be
        sold in India without this certification.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        What is a BIS License?
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        A BIS license is the formal authorization issued by the Bureau of Indian
        Standards that allows a manufacturer to use the ISI mark on their
        product. The license certifies that the product, manufacturing process,
        and facilities have all met BIS’s rigorous quality control criteria.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To obtain a BIS license, a manufacturer must go through the BIS
        registration process, which includes submitting documentation, product
        testing, factory inspections, and ongoing surveillance.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Once issued, the license is valid for a specific period and must be
        renewed before expiration. Non-compliance with BIS norms can lead to
        suspension or cancellation of the BIS certificate.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Why Both ISI Mark and BIS license matters ?
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        While the ISI mark is what the consumer sees and trusts, the BIS license
        is the back-end approval that allows manufacturers to affix this mark
        legally. Without a valid BIS license, using the ISI mark constitutes a
        legal offense.
      </p>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This makes BIS registration not just a regulatory hurdle but a
        fundamental step in ensuring your products can be legally marketed and
        sold in India.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Key Differences Between ISI Mark and BIS License:
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Feature
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI Mark
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                BIS License
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Purpose
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Quality mark on product
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Approval to use ISI mark
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Issued By
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Used under BIS authorization
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Issued by Bureau of Indian Standards
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Visibility
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Seen on the product
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Document held by manufacturer
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Mandatory?
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Yes, for listed products
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Yes, to obtain ISI mark
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Renewal
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                N/A
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Required periodically
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Understanding these distinctions is essential before starting the BIS
        license process or calculating your bis certification cost. Both play
        crucial roles in the compliance and credibility of domestic
        manufacturing operations.
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Why Domestic Manufacturers Need BIS Certification
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In India’s competitive manufacturing environment, BIS certification
        isn’t just a regulatory necessity — it’s a strategic asset. Here’s why
        obtaining a BIS certificate is indispensable for domestic manufacturers:
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        1. Legal Compliance
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Many products in India cannot be legally sold without BIS certification.
        Government regulations, mandate that manufacturers obtain a valid BIS
        license to affix the ISI mark on products. Non-compliance can lead to
        hefty fines, product recalls, and bans.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        2. Quality Assurance
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The BIS license confirms that a manufacturer follows standardized
        quality protocols. BIS certification involves routine product testing
        and factory audits, ensuring that only safe and reliable products reach
        consumers. For domestic manufacturers, it enhances internal quality
        control and reduces the risk of defects or liabilities.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        3. Brand Credibility and Consumer Trust
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Displaying the ISI mark on your products builds trust among consumers.
        It communicates that the product has been certified by the Indian BIS —
        a mark of integrity and reliability. This perceived value translates
        into increased sales and improved brand loyalty.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        4. Access to Broader Markets
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        With a BIS certificate, manufacturers can distribute their goods across
        India without legal restrictions. Retailers, wholesalers, and e-commerce
        platforms often require BIS-certified products before onboarding them.
        For export-oriented units, BIS certification may also help satisfy
        international quality expectations.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        5. Competitive Advantage
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Having a BIS license distinguishes a manufacturer from unregistered
        competitors. It signals a commitment to quality and compliance, helping
        businesses win public contracts, participate in tenders, and gain
        preferential access in government procurement schemes.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        6. Long-Term Cost Savings
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        While the BIS certification cost may seem high upfront, it pays off by
        minimizing legal risks, product failures, and reputational damage.
        Additionally, improved manufacturing efficiency and fewer customer
        complaints can result in long-term operational savings.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        7. Support Government Initiatives
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        By participating in BIS registration, domestic manufacturers contribute
        to India’s mission of standardization and quality upliftment. Aligning
        with national programs like "Make in India" or "Aatmanirbhar Bharat"
        enhances goodwill and governmental support.
      </p>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Process
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        BIS Certification Process for Domestic Manufacturers
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Obtaining a BIS certification can be a game-changer for domestic
        manufacturers — but it requires navigating a well-defined and detailed
        process. Below is a step-by-step breakdown of the BIS license process,
        tailored specifically for Indian businesses.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 1: Identify Applicable Indian Standard (IS)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Before initiating the BIS registration process, manufacturers must
        determine whether their product falls under mandatory certification. If
        so, they need to identify the relevant Indian Standard (IS code)
        associated with that product.
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Resources:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Visit the official BIS website",
            "Refer to product-specific notifications",
            "Consult BIS-recognized consultants or testing labs",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 2: Prepare Required Documentation
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Compile and submit essential documents, including:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Application form (Form V or VI, based on scheme)",
            "Business registration certificate",
            "Factory license",
            "List of manufacturing equipment",
            "Quality control personnel details",
            "Manufacturing process flowchart",
            "Layout of manufacturing unit",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 3: Product Testing in BIS-Recognized Lab
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Manufacturers must send product samples to a BIS-recognized laboratory
        for testing. The lab will evaluate the product based on relevant IS
        codes and issue a test report.
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Important Tips:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Use only BIS-authorized labs",
            "Ensure sample labeling and packaging follow BIS norms",
            "Maintain a record of all testing documentation",
          ]}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 4: Submit Online Application
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        With documents and test reppplication
      </p>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        With documents and test reports in hand, manufacturers must apply via
        the BIS portal. The application should include:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Company profile",
            "Manufacturing and quality control details",
            "Product specifications",
            "Testing certificates and other documents",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The online process allows for uploading documents and tracking status in
        real time.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 5: Factory Audit by BIS Officials
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        After document verification, BIS officials conduct an on-site inspection
        of the manufacturing premises. They verify:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Manufacturing infrastructure",
            "Testing equipment",
            "Raw material storage",
            "In-process and final quality control procedures",
          ]}
        />
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The audit ensures compliance with BIS standards and evaluates the
        capacity to consistently produce conforming products.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 6: Grant of BIS License
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        If the product passes testing and the factory audit is satisfactory, BIS
        grants the license to use the ISI mark. The manufacturer receives an
        official BIS certificate, valid for one or two years depending on the
        scheme.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 7: Marking of ISI Symbol
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The ISI mark must be affixed on each product unit, packaging, and
        sometimes in marketing literature, as per BIS marking guidelines.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step 8: Ongoing Surveillance and Renewal
      </h3>

      <div className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS certification is subject to:
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Surveillance inspections",
            "Re-testing of samples",
            "Annual renewal",
          ]}
        />
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="document" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Required Documents for BIS Registration
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The success of your BIS registration depends heavily on accurate and
        complete documentation. Below is a list of the key documents domestic
        manufacturers need to gather and submit during the BIS certification
        process.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        General Document Checklist
      </h3>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "1. Completed Application Form (Form V or VI depending on the scheme)",
            "2. Business Registration Certificate (e.g., Udyam Registration, MSME, GST Certificate)",
            "3. Factory License or Municipal Trade License",
            "4. List of Manufacturing Machinery",
            "5. Manufacturing Process Flowchart",
            "6. Layout Plan of the Manufacturing Premises",
            "7. Details of In-House Quality Control Staff",
            "8. Details of Testing Equipment",
            "9. Agreement of Technical Collaboration (if applicable)",
            "10. Power of Attorney/Authorization Letter",
            "11. Brand Name Authorization Letter (if applying under a different brand)",
            "12. Test Report from BIS-approved lab",
            "13. Invoice of Raw Material Procurement",
            "14. Photographs of Product and Packaging",
            "15. Declaration of Conformity to Standards",
            "16. Undertaking Regarding Non-Standard Products",
          ]}
        />
      </div>
    </section>
  );
};

const CostingSection = () => {
  return (
    <section id="costing" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Costing
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Cost of BIS Certification (bis certification cost)
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Understanding the financial commitment of BIS certification is vital for
        proper planning. The overall BIS certification cost for domestic
        manufacturers can vary based on product type, scheme, testing
        requirements, and the size of the production unit. Below is a detailed
        breakdown of common cost components.
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Standard BIS Certification Cost Breakdown
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Cost Component
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Estimated Amount (INR)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Application Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹1,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Product Testing Fee (per product)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹15,000 – ₹50,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Factory Inspection Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹7,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                License Fee (Initial Grant)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                ₹1,000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Marking Fee (per product/year)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Depends on product
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Renewal Fee (biennial/annual)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Depends on product
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

    </section>
  );
};
