import ScrollToTopButton from "@/components/common/ScrollToTop"
// CDSCO Hero Import 
import ServiceContactForm from "@/common/ServiceContactForm";
// Index Import 
import { useState, useEffect, useRef } from 'react'
// CDSCOContent Import 
import Footer from "@/common/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import CDSCOOne from "../assets/images/CDSCOOne.png";
import CDSCOContentRight from "@/components/manual/CDSCOContentRight";


const CDSCO = () => {
  return (
    <article className="cdsco-page">
      <CDSCOHero />
      <Index/>
      <CDSCOContent/>
      <ScrollToTopButton />
    </article>
  )
}

export default CDSCO


// CDSCOHero 
const CDSCOHero = () => {
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

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[56px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              CDSCO
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Registration Certificate
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            CDSCO license is mandatory for the manufacturing, import, sale, and
            distribution of all medical devices in India.
          </p>

          <div className="flex items-center -mt-2">
            <div className="flex items-center cursor-pointer group">
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
      <ServiceContactForm/>
      
      </div>
    </header>
  );
};

const SECTIONS = [
  "Overview",
  "Eligibility",
  "Classification",
  "Documents",
  "Registration",
  "Licensing",
  "Consulting",
  "FAQs",
];

// Index
const Index = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState("Overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const stickyRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const toggleButtonRef = useRef(null)

  // Helper function to convert section name to element ID
  const getSectionElementId = (section) => section === "FAQs" ? "faqs" : section.toLowerCase();

  const handleItemClick = (item) => {
    const elementId = getSectionElementId(item);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting and its position relative to viewport
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1; // Added small buffer
        setIsSticky(!entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1));
      },
      {
        threshold: [0, 1],  // Observe both when fully visible and when starting to intersect
        rootMargin: '-1px 0px 0px 0px'
      }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (entry.target.id === "faqs") {
              setActiveSection("FAQs");
            } else {
              // Convert id like "overview" to "Overview"
              const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
              setActiveSection(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    SECTIONS.forEach(section => {
      const elementId = getSectionElementId(section);
      const element = document.getElementById(elementId);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? 'bg-white/70 backdrop-blur-lg' : 'bg-[#B9DEEB]'
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
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection ? "text-blue-900" : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {item}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// CDSCOContent
const CDSCOContent = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          <nav className="flex-1" aria-label="CDSCO Content Navigation">
            <CDSCOContentLeft />
          </nav>
          <aside className="w-full md:w-[400px]">
            <CDSCOContentRight />
          </aside>
        </div>
      </div>
      <ServiceFaq />
      <Footer/>
    </main>
  );
};

const ServiceFaq = () => {
  return (
    <section id="faqs" className="py-2 bg-gray-50 scroll-mt-20" aria-labelledby="faq-title">
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
                registrations 2-4 months. Our consultants work to expedite these
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
                vary by product type), testing fees, consultant fees, and
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
                safety monitoring and quality control. Our consultants keep
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


// CDSCOContentLeft
const CDSCOContentLeft = () => {
  return (

    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Eligibilty Section */}
        <EligibilitySection />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Classification Section */}
        <ClassificationSection />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Documents Section */}
        <Documents />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Registration Section */}
        <Registration />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Licensing Section */}
        <Licensing />

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Licensing Section */}
        <Consulting />

        {/* Review Section */}
        <ReviewSection />
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
        CDSCO Overview
      </h2>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        CDSCO stands for{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Central Drugs Standard Control Organisation
        </span>{" "}
        (which comes under the Ministry of Health and Family Welfare),
        headquartered in Delhi and has 6 zonal offices in India namely at
        Mumbai, Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and various
        other sub-zonal offices. It is the national regulatory body for products
        like cosmetics, drugs, medical devices, etc.
      </div>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "Medical device division (Drugs)",
              "Drugs",
              "Cosmetics",
              "Clinical Trial on medical devices division",
              "Vaccines",
              "BA/BE",
            ]}
            heading="Different divisions of the CDSCO are as below"
          />
        </div>

        {/* Image */}
        <figure className="w-full md:w-auto">
          <img
            src={CDSCOOne}
            alt="CDSCO organizational structure showing different divisions including medical devices, drugs, cosmetics, clinical trials, vaccines, and BA/BE"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
              "
          />
          <figcaption className="sr-only">CDSCO organizational structure and divisions</figcaption>
        </figure>
      </div>
    </section>
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

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20" aria-labelledby="eligibility-title">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>
      
      {/* Title */}
      <h2 id="eligibility-title" className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        CDSCO Certificate Eligibility
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Eligibility for a CDSCO Certificate requires meeting regulatory guidelines.
      </p>

      {/* Eligibility Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        All manufacturers, either of Indian or foreign origin, can apply for the{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          CDSCO license
        </span>
        . In the case of a{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          foreign manufacturer
        </span>
        , the license will be granted to the manufacturer, and the Indian
        counterpart of the manufacturer will act as its authorized Indian
        Representative. The Indian representative of the manufacturer must have
        a valid state drugs license under Form 20-B/21-B or Form 42 (applied
        under Form 41) as per the latest guidelines released by CDSCO.
      </div>
    </section>
  );
};

const ClassificationSection = () => {
  return (
    <section id="classification" className="flex flex-col scroll-mt-20" aria-labelledby="classification-title">
      {/* Classification */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Classification
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>
      
      {/* Title */}
      <h2 id="classification-title" className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        CDSCO Device Classification
      </h2>

      {/* Important Points */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Class A ( least risk )",
              " Class B ( Moderate risk )",
              "Class C ( Moderate to high risk )",
              "Class D ( High risk )",
            ]}
            heading=" Medical devices are categorized into four classes by the Medical Device Rules 2017"
          />
        </div>
      </div>

      {/* Important Points 2nd*/}
      <div className="mt-[20px] md:mt-[32px]">
        <PointsListTwo
          points={[
            "Class A ( non sterile and non measuring ) products come under registration scheme.",
            "Class A ( Sterile or measuring ) products require license.",
          ]}
          heading="CDSCO Registration can be obtained through online portal registration"
        />
      </div>

      {/* Conclusion */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This brings us to the conclusion that products which are under{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class A ( sterile or measuring )
        </span>{" "}
        ,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class B
        </span>
        ,{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class C
        </span>{" "}
        and{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Class D
        </span>{" "}
        require a license from CDSCO.
      </div>
    </section>
  );
};

const Documents = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20" aria-labelledby="documents-title">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h2 id="documents-title" className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Required Documents for CDSCO LICENSE
      </h2>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Drugs license of importer (Required only for foreign manufacturer)",
              "Free sales certificate (Required only for foreign manufacturer)",
              "ISO certificate (Required only for foreign manufacturer)",
              "List of products to be registered",
              "Basic details about the product (example: storage temperature, shelf life, model number, etc.)",
            ]}
            heading="CDSCO registration for Class A products ( non-sterile and non-measuring )"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Plant Master File (PMF)",
              "Device Master File (DMF)",
              "Manufacturing process flowchart",
              "Labels and user manual",
              "Design verification and validation",
              "Stability validation data",
              "Challan of the government fee paid",
            ]}
            heading="Class A ( sterile or measuring ), Class B, Class C and Class D"
          />
        </div>
      </div>
    </section>
  );
};

const Registration = () => {
  return (
    <section id="registration" className="flex flex-col scroll-mt-20" aria-labelledby="registration-title">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Registration
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h2 id="registration-title" className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Class A Product Registration Process
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Process for CDSCO registration for Class A products ( non-sterile and non-measuring )
      </p>

      {/* Important Points And Image */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-7">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsList
            points={[
              "Generation of login Credentials",
              "Registration of Indian / foreign manufacturer",
              "Registration of importer ( in case of import only )",
              "Addition of product details",
              "Submission of details to CDSCO",
              "Grant of registration",
            ]}
          />
        </div>

        {/* Image */}
        <figure className="w-full md:w-auto">
          <img
            src={CDSCOOne}
            alt="CDSCO registration process flow diagram showing steps from login credentials to grant of registration"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[240px] mt-2.5 md:mt-5
              "
          />
          <figcaption className="sr-only">CDSCO registration process flow diagram</figcaption>
        </figure>
      </div>

      <div className="mt-[30px] md:mt-[46px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          TIMELINE
        </span>
        CDSCO registration process will take 1 day after the documents are submitted to us.
      </div>
    </section>
  );
};

const Licensing = () => {
  return (
    <section id="licensing" className="flex flex-col scroll-mt-20">
      {/* Licensing */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Licensing
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Process For CDSCO License
      </h3>

      {/* Points */}
      <div className="w-full md:w-auto">
        <PointsListTwo
          points={[
            "Identifying the class of the medical device",
            "Making groups as per the guidelines mentioned as per CDSCO guidelines",
            "Creation of login credentials for the manufacturer",
            "Collection of documents from the overseas manufacturer",
            "Collection of documents from Indian importer",
            "Checking and vetting of documents as per the rules",
            "Payment of government fees",
            "Submission of Application online",
            "Clearing of queries ( if any )",
            "Audit of the firm",
            "Clearing of queries ( if any ) after the audit",
            "Grant of license",
            "Generation of CDSCO certificate",
          ]}
        />
      </div>

      <div className="mt-[20px] md:mt-[28px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          TIMELINE
        </span>
        Approx 6-8 weeks after submission of application.
      </div>

      <div className="mt-[16px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          VALIDITY
        </span>
        It is granted for 5 years initially and renewed thereafter by paying the
        government fees.
      </div>

      <div className="flex flex-col md:flex-row mt-[10px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "In case of CDSCO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
              "License number mentioned on the CDSCO registration certificate has to be mentioned on the products / packaging.",
              "Test license is also required in case of Indian manufacturers.",
            ]}
          />
        </div>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span className="font-semibold uppercase text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          Specialized Licenses
        </span>
        If you are applying for a license for a new drug, biological product, or
        innovative medical device, additional approvals such as clinical trials
        or safety testing may be required.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For further assistance or to ensure proper filing, you can consult a
        regulatory consultant experienced in CDSCO processes.
      </div>
    </section>
  );
};

const Consulting = () => {
  return (
    <section id="consulting" className="flex flex-col scroll-mt-20">
      {/* Consulting */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consulting
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        CDSCO License Consulting Services
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As CDSCO registration consultants, our job is to ensure that the tiring
        procedures listed above become a cakewalk for you. Right from the
        beginning, i.e., from the stage of collection of documents from foreign
        manufacturers or preparation of documents for Indian manufacturers,
        conducting thorough compliance checks, coordinating submissions,
        addressing department queries, and following up with the department for
        the grant of a license, everything is under our scope of work.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        We are one of the most experienced CDSCO consultants in the field of
        medical products,we provide apex quality of services possible to all our
        national and international clients.
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section aria-labelledby="review-title">
      <h2 id="review-title" className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
        What did you think of this content?
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button 
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group"
            aria-label="Mark content as helpful"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5" />
            </svg>
            <span>It was helpful</span>
          </button>

          <button 
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group"
            aria-label="Mark content as not helpful"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group">
              <path fillOpacity="0.15" strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z" />
              <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5" />
            </svg>
            <span>It was not helpful</span>
          </button>
        </div>

        <time className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal" dateTime="2025-03-19">
          Last updated on Mar 19, 2025
        </time>
      </div>
    </section>
  );
};
