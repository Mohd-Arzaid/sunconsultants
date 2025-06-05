import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import BISSRimg from "../../assets/images/BISSRimg.png";
import { Helmet } from 'react-helmet-async';

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

export const BISFM = () => {
  return (
    <>
      <Helmet>
        <title>BIS FMCS Certification | Foreign Manufacturer Certification Scheme | Sun Consultants</title>
        <meta name="description" content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. Trusted BIS consultants since 2013. ✓ Fast Processing ✓ Expert Guidance" />
        <meta name="keywords" content="BIS FMCS, Foreign Manufacturer Certification Scheme, ISI Mark for foreign manufacturers, BIS certification for exports, BIS license for foreign companies, BIS compliance, Indian Standards certification" />
        <meta name="author" content="Sun Consultants & Engineers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BIS FMCS Certification | Foreign Manufacturer Certification Scheme" />
        <meta property="og:description" content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. ✓ Fast Processing ✓ Expert Guidance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Consultants & Engineers" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://sunconsultants.com/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ConsultantsSun" />
        <meta name="twitter:title" content="BIS FMCS Certification | Foreign Manufacturer Certification Scheme" />
        <meta name="twitter:description" content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India." />
        <meta name="twitter:image" content="https://sunconsultants.com/twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "BIS FMCS Certification",
            "provider": {
              "@type": "Organization",
              "name": "Sun Consultants & Engineers",
              "url": window.location.href,
              "logo": "https://sunconsultants.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9315973373",
                "contactType": "customer service",
                "email": "info@sunconsultants.co.in"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "BIS FMCS Certification Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "BIS FMCS Certification",
                    "description": "BIS certification for foreign manufacturers exporting to India"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AIR Nomination",
                    "description": "Authorized Indian Representative nomination services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "BIS Compliance Support",
                    "description": "Ongoing BIS compliance and surveillance support"
                  }
                }
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is BIS FMCS Certification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BIS FMCS (Foreign Manufacturer Certification Scheme) is mandatory for foreign manufacturers exporting products to India. It ensures products meet Indian Standards and requires ISI Mark certification."
                }
              },
              {
                "@type": "Question",
                "name": "How long does BIS FMCS certification take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The BIS FMCS certification process typically takes approximately 3 months from application submission to license grant, including testing and factory audit."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for BIS FMCS certification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Required documents include application form, plant and machinery list, raw materials list, test equipment details, calibration certificates, plant layout, and quality control documentation."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="w-full" role="main">
        <BISFMHero />
        <BISFMIndex />
        <BISFMContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

// BIS Hero Section
const BISFMHero = () => {
  return (
    <section className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]" aria-label="BIS FMCS Certification Hero">
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
              BIS Certificate
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            For Foreign Manufacturers
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Foreign manufacturers need ISI mark for exports to India. Covers
            600+ mandatory & 20,000+ voluntary products.
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

// BIS Index Section
const BISFMIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Nomination");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Nomination",
    "Documents",
    "Process",
    "Validity",
    "Payment",
    "Surveillance",
    "Consulting",
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
        const rect = entry.boundingClientRect;
        const isAtTop = rect.top <= 1;
        setIsSticky(
          !entry.isIntersecting || (isAtTop && entry.intersectionRatio < 1)
        );
      },
      {
        threshold: [0, 1],
        rootMargin: "-1px 0px 0px 0px",
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
      className={`sticky top-0 z-[60] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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

// BIS Content Section
const BISFMContent = () => {
  return (
    <section className="w-full overflow-x-hidden" aria-label="BIS FMCS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISFMContentLeft />
          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
    </section>
  );
};

// BIS FAQs Section
const ServiceFaq = () => {
  return (
    <section id="faqs" className="my-2 bg-gray-50 scroll-mt-20" aria-label="Frequently Asked Questions">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a href="/contact" className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors">
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

const BISFMContentLeft = () => {
  return (
    <article className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <NominationSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <DocumentsSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ProcessSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ValiditySection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <PaymentSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <SurveillanceSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ConsultingSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
      </div>
    </article>
  );
};

const NominationSection = () => {
  return (
    <section 
      id="nomination" 
      className="flex flex-col scroll-mt-20" 
      aria-label="Authorized Indian Representative Nomination"
    >
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Nomination
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Authorized Indian Representative Nomination
      </h2>

      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Pre-requisites of nomination of an Authorized Indian Representative
      </p>

      <article className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In case of FMCS certificate, the foreign manufacturer has to mandatorily appoint an{" "}
        <strong className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          Authorized Indian Representative (Also known as AIR)
        </strong>{" "}
        who is the official representative of the firm to BIS, the following points must be checked by the manufacturer before appointing an AIR:
      </article>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsList
          points={[
            "Must be an Indian resident.",
            "Should have a basic educational background to understand procedures.",
            "Well-versed with the BIS certification process.",
            "Must have a valid address for certificate documentation.",
          ]}
          heading="Eligibility Criteria for AIR in BIS Certification"
        />

        <figure className="w-full md:w-auto">
          <img
            src={BISSRimg}
            alt="BIS Certification Process Flow Diagram"
            loading="lazy"
            width="400"
            height="250"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/12.5 w-[400px] h-[250px] mt-2.5"
          />
          <figcaption className="sr-only">BIS Certification Process Flow Diagram</figcaption>
        </figure>
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
        Documents Required For FMCS BIS Certification
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS Certification Documents | Sun Consultants & Engineers
      </p>

      {/* Eligibility Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Majority of the documents required for application are from the
        manufacturers and and a few documents of Indian representative are
        required, the{" "}
        <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950">
          list of documents are as follows:
        </span>

        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
          {/* Points */}
          <div className="w-full md:w-auto">
            <PointsListTwo
              points={[
                "Application form",
                "List of plant and machinery",
                "List of raw materials",
                "List of test equipments in factory as per Indian Standard issued by BIS",
                "Calibration certificates for all the instruments",
                "Plant layout",
                "Test certificates of raw materials",
                "Details of Quality in-charge appointed in the factory",
                "Bank Guarantee, etc.",
              ]}
              heading="Essential Documents for BIS Certification Application :"
            />
          </div>

        </div>

        <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
          All of the above documents are required in certain formats given by
          BIS which are to be submitted during the application. As FMCS
          consultants, we at Sun Consultants and Engineers are experts for
          preparation of all the documents above in formats prescribed by BIS,
          contact us for more details at
          <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              Email
            </span>
            info@sunconsultants.co.in , sunconsultantsinfo@gmail.com
          </div>
        </div>
        <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
          <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Phone
          </span>
          +91-9315973373 , +91-7303745057
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
      BIS License Process for Foreign Manufacturers
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
      BIS FMCS Process: Application, audit, testing, and approval. Contact us!
      </p>

      {/* Eligibility Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
         <div className="flex mt-[-20px] gap-10">
          {/* Points */}
          <PointsListTwo
            points={[
              "Stage-1: Submission of application to BIS in hard copy",
              "Stage-2: The application will be scrutinized by BIS officials in-line with the Indian standard (IS) and then the shortcomings will be communicated",
              "Stage-3: Clearing of queries (if any) by submitting the reply to BIS",
              "Stage-4: Assignment of the BIS auditor for conducting audit at the manufacturing premises",
              "Stage-5: Finalization of audit date with mutual consent of the manufacturer",
              "Stage-6: Conduction of audit at the manufacturing premises in foreign and sealing of samples by the auditor",
              "Stage-7: Testing of sample as per the Indian Standard at the manufacturer's in house test lab",
              "Stage-8: Sending of the sealed sample to selected BIS lab in India",
              "Stage-9: Clearing of queries (if any) raised during the audit",
              "Stage-10: After BIS receives the test report of the sample sent for testing, the license is granted",
            ]}
          />
        </div>

        <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              Note
            </span>
            1) Performance Bank guarantee must be issued by any bank worldwide
            that has a RBI approved branch in India.
          </div>
        </div>

        <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
          <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            Note
          </span>
          2) Time to obtain BIS certification for foreign manufacturers is
          approx. 3 months
        </div>

        <div className="mt-[12px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
          <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
            IMP
          </span>
          The BIS license legibly and clearly marks the scope in the license,
          mentioning the products on which you can mention the license number,
          Violation of the same ensures stringent actions like license being
          cancelled. There are provisions of upto imprisonment in BIS
          regulations.
        </div>
      </div>
    </section>
  );
};

const ValiditySection = () => {
  return (
    <section id="validity" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
      <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
      Validity
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
      BIS License Validity, Renewal & Fees
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
      Valid for 1 or 2 years, renewal requires documents & fees. Late
        applications incur a fee.
      </p>

      <div className="mt-[-5px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
          BIS license initially can be granted for 1 or 2 years, depending upon
          the request of the manufacturer, and it has to be renewed after
          that.During renewal various mandatory documents have to be submitted
          along with the payment of minimum marking fee and licence free. If the
          application is submitted after the due date, late fee is also
          applicable.
        </div>
      </div>
    </section>
  );
};

const PaymentSection = () => {
  return (
    <section id="payment" className="flex flex-col scroll-mt-20">
      {/* Payment */}
      <div className="flex w-full items-center gap-3">
      <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
      Payment
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
      Stages of payment of BIS fees:
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        BIS Fees: Application, audit, and license fees, paid in USD. Contact us!
      </p>

      {/* Eligibility Content */}
      <div className="mt-[35px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        <div className="flex mt-[-20px] gap-10">
          {/* Points */}
          <PointsListTwo
            points={[
              "Payment of application fee during the submission of application",
              "Payment of Audit charges after allotment of the auditor (Eg: Man day charges, Per diem fees, Officer travel charges, etc.)",
              "Payment of Minimum marking fee and license fee before the grant of licence",
            ]}
            heading="Eligibility Criteria for AIR in BIS Certification"
          />
        </div>

        <div className="mt-[24px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
          <div className="mt-[20px] font-geist text-sm sm:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose ">
            <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
              Note
            </span>
            All the payments have to be done by the manufacturer directly to
            BIS' bank account in USD
          </div>
        </div>
      </div>
    </section>
  );
};

const SurveillanceSection = () => {
  return (
    <section id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
      <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
      Surveillance
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
      BIS Certificate Surveillance Process :
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
      BIS Surveillance: Routine checks ensure compliance; failures risk
        cancellation.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
      BIS conducts surveillance on the manufacturers to ensure that the
        standards are being followed as per the guidelines.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
      <span className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
          This is done in 2 ways:
        </span>
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        1. Market surveillance:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        This is done twice yearly. Samples are randomly picked from market and
        sent to government labs for testing as per the standards, If the sample
        passes, no problem, but if the sample fails , the manufacturer is
        informed and they have to take corrective action.Subsequent failure of
        market sample can lead to suspension or cancellation of the licence.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        2. Factory surveillance:
      </div>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        After obtaining the licence, there are certain formalities like
        maintenance of test records, regular testing of the product and so on.To
        keep a check that all the protocols are followed, BIS conducts random
        factory surveillance twice in a year to keep a check on the
        manufacturer. If subsequent mistakes are observed during several visits,
        the license is liable to be suspended / cancelled.
      </div>
    </section>
  );
};

const ConsultingSection = () => {
  return (
    <section id="consulting" className="flex flex-col scroll-mt-20">
      {/* Consulting */}
      <div className="flex w-full items-center gap-3">
      <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
      Consulting
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Role of Sun Consultants & Engineers?
      </h3>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Sun Consultants & Engineers ensure hassle-free BIS FMCS licensing
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        From collection of documents to getting the final license, it is a
        exhaustive and tedious procedure, and requires technical know-how and
        experience. Being a FMCS Consultant, this is exactly where Sun
        Consultants and Engineers come into the picture.
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide  text-left max-w-full  leading-loose">
        With over 10 years of experience in this field and after providing
        assistance to numerous manufacturers and importers we can help you in
        smoothening of this process, by complete hand-holding solution, right
        from the beginning of the procedure to the grant of BIS license.
      </div>

        <div className="flex mt-[16px] md:mt-[24px] gap-10">
        {/* Points */}
        <PointsListTwo
          points={[
            "Preparation of documents as per BIS guidelines",
            "Submission of application to the department",
            "Clearing the queries from BIS (if any)",
            "Coordinating with the BIS official and the manufacturer for audit dates",
            "Assistance during the audit",
            "Follow-up with the department for grant of license",
            "Technical assistance for the setup of in-house lab as per the standard requirements",
            "Assisting the manufacturer in understanding the post license compliances to be followed",
          ]}
          heading="Below is the scope of work of Sun Consultants & Engineers:"
        />
      </div>
    </section>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full md:w-[441px]" role="list">
      <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </h3>
      <ul className="flex flex-col mt-[16px] md:mt-[24px] gap-2" role="list">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2" role="listitem">
            <div className="bg-green-500/10 p-2 rounded-full" aria-hidden="true">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </h3>
      <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
