import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

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
import BISFMProductTable from "@/pages/BISFMProductTable.jsx";
import AboutAuthor from "../common/AboutAuthor";

export const BISFM = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS FMCS Certification | Foreign Manufacturer Certification Scheme |
          Sun Certifications
        </title>
        <meta
          name="description"
          content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. Trusted BIS Certifications since 2013. ✓ Fast Processing ✓ Expert Guidance"
        />
        <meta
          name="keywords"
          content="BIS FMCS, Foreign Manufacturer Certification Scheme, ISI Mark for foreign manufacturers, BIS certification for exports, BIS license for foreign companies, BIS compliance, Indian Standards certification"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS FMCS Certification | Foreign Manufacturer Certification Scheme"
        />
        <meta
          property="og:description"
          content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. ✓ Fast Processing ✓ Expert Guidance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://suncertifications.com/og-image.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="BIS FMCS Certification | Foreign Manufacturer Certification Scheme"
        />
        <meta
          name="twitter:description"
          content="Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India."
        />
        <meta
          name="twitter:image"
          content="https://suncertifications.com/twitter-image.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS FMCS Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
              url: window.location.href,
              logo: "https://suncertifications.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8010505057",
                contactType: "customer service",
                email: "admin@bis-certifications.com",
              },
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS FMCS Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS FMCS Certification",
                    description:
                      "BIS certification for foreign manufacturers exporting to India",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AIR Nomination",
                    description:
                      "Authorized Indian Representative nomination services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Compliance Support",
                    description:
                      "Ongoing BIS compliance and surveillance support",
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
                name: "What is BIS FMCS Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BIS FMCS (Foreign Manufacturer Certification Scheme) is mandatory for foreign manufacturers exporting products to India. It ensures products meet Indian Standards and requires ISI Mark certification.",
                },
              },
              {
                "@type": "Question",
                name: "How long does BIS FMCS certification take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The BIS FMCS certification process typically takes approximately 3 months from application submission to license grant, including testing and factory audit.",
                },
              },
              {
                "@type": "Question",
                name: "What documents are required for BIS FMCS certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Required documents include application form, plant and machinery list, raw materials list, test equipment details, calibration certificates, plant layout, and quality control documentation.",
                },
              },
            ],
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
  const { t } = useTranslation();

  return (
    <section
      className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS FMCS Certification Hero"
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
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              {t("hero.titlePart1")}
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            {t("hero.titlePart2")}
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            {t("hero.description")}
          </p>

          <nav className="flex items-center -mt-2">
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
                {t("hero.viewServices")}
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
export const BISFMIndex = () => {
  const { t } = useTranslation("BISFM");
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "overview",
    "standardization",
    "representation",
    "document",
    "process",
    "costing",
    "surveillance",
    "facilitator",
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
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {t(`sections.${activeSection}`)}
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
            viewBox="0 24 24"
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
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {t(`sections.${item}`)}
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
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {t(`sections.${item}`)}
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

// BIS Content Section
const BISFMContent = () => {
  return (
    <section className="" aria-label="BIS FMCS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISFMContentLeft />
          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="product-table">
        <BISFMProductTable />
      </div>

      <div id="services">
        <Services />
      </div>
    </section>
  );
};

// BIS FAQs Section
export const ServiceFaq = () => {
  const { t } = useTranslation("BISFMServiceFaq");

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          {t("title")}
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          {t("subtitle")}{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            {t("contactLink")}
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {t("faqs", { returnObjects: true }).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export const BISFMContentLeft = () => {
  const { t } = useTranslation("BISFM");

  return (
    <article className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <section
          className="flex flex-col gap-2 md:gap-4 mb-6"
          aria-label="BIS Certificate for Foreign Manufacturers"
        >
          <article className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
            {t("overview.mainTitle")}
          </article>

          <h1 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] ">
            {t("overview.whatIsBIS.title")}
          </h1>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-1">
            {t("overview.whatIsBIS.description1")}
          </p>

          <p className="font-geist text-[16px] md:text-[20px] text-[#42434d] max-w-3xl mt-2">
            {t("overview.whatIsBIS.description2")}
          </p>

          {/* <div className="bg-[#F9F7F2] border-l-4 border-[#1A8781] p-4 mt-2 md:mt-4 rounded-md shadow-sm">
            <h4 className="font-geist text-[18px] md:text-[22px] font-semibold text-[#1A8781] mb-1">Is obtaining an ISI mark for Indian importers mandatory?</h4>
            <p className="font-geist text-[16px] md:text-[20px] text-[#42434d]">
              For the products falling under the mandatory list, FMCS BIS certification is mandatory. The list of mandatory products can be accessed on this <a href="https://www.bis.gov.in/product-certification/products-under-compulsory-certification/" target="_blank" rel="noopener noreferrer" className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors">link</a>.
            </p>
          </div> */}
        </section>

        <OverviewSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <StandardizationSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <RepresentationSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <DocumentSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <ProcessSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <CostingSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <SurveillanceSection />
        <Separator className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <FacilitatorSection />

        <AboutAuthor />
      </div>
    </article>
  );
};

const OverviewSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section
      id="overview"
      className="flex flex-col scroll-mt-20"
      aria-label="Authorized Indian Representative Nomination"
    >
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("overview.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
        {t("overview.mainHeading")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.intro")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.currentStats")}
      </p>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.whyBISTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.whyBISDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("overview.whyBISPoints", { returnObjects: true })}
        />
      </div>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.scopeTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.scopeDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("overview.scopePoints", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.scopeEndNote")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.objectivesTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.objectivesDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("overview.objectivesPoints", { returnObjects: true })}
        />
      </div>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.featuresTitle")}
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200  shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("overview.tableHeaders.feature")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("overview.tableHeaders.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("overview.tableRows", { returnObjects: true }).map(
              (row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.feature}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.description}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const StandardizationSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="standardization" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("standardization.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("standardization.mainHeading")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.intro")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.process")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.legalStandingTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.legalStandingDesc")}
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.bisActTitle")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.bisActPoints", { returnObjects: true })}
        />
      </div>

      <img
        src={ISIMARKImage}
        alt="ISI Mark"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.isiLogoTitle")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.isiLogoPoints", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.placementTitle")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.placementPoints", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.productCategoriesTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.productCategoriesDesc")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200  shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("standardization.productTable.headers.category")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("standardization.productTable.headers.code")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("standardization.productTable.headers.status")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("standardization.productTable.rows", {
              returnObjects: true,
            }).map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.category}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.code}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.productTableNote")}{" "}
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          {t("standardization.clickHere")}
        </span>
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.globalCertTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.globalCertDesc")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("standardization.globalCertTable.headers.mark")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("standardization.globalCertTable.headers.country")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                {t("standardization.globalCertTable.headers.mandatory")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("standardization.globalCertTable.headers.focus")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("standardization.globalCertTable.rows", {
              returnObjects: true,
            }).map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.mark}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.country}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.mandatory}
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.focus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.globalCertNote")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.importTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.mandatoryNatureTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.mandatoryNatureDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.mandatoryNaturePoints", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.importNote")}
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.onlyImportsTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.onlyImportsDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.onlyImportsPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.onlyImportsNote1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.onlyImportsNote2")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.exemptionsTitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.exemptionsDesc")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("standardization.exemptionsPoints", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("standardization.exemptionsNote")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("standardization.checkProductTitle")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          {t("standardization.clickHere")}
        </span>{" "}
        {t("standardization.checkProductDesc")}
      </p>
    </section>
  );
};

const RepresentationSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="representation" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("representation.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("representation.mainHeading")}
      </h3>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representation.whatIsAIR.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.whatIsAIR.description")}
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representation.legalRequirement.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.legalRequirement.description")}
      </p>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representation.responsibilities.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.responsibilities.description")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t(
                  "representation.responsibilities.table.headers.responsibility"
                )}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("representation.responsibilities.table.headers.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("representation.responsibilities.table.rows", {
              returnObjects: true,
            }).map((row, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                  {row.responsibility}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {row.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representation.eligibility.title")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.eligibility.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representation.eligibility.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("representation.importance.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.importance.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("representation.importance.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("representation.importance.conclusion")}
      </p>
    </section>
  );
};

const DocumentSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="document" className="flex flex-col scroll-mt-20">
      {/* Validity */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("document.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("document.mainHeading")}
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("document.table.headers.documentType")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("document.table.headers.purpose")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("document.table.rows", { returnObjects: true }).map(
              (row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.type}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                    {row.purpose}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.fmcsForm.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.detailedBreakdown.fmcsForm.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.fmcsForm.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.manufacturingEquipment.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t(
            "document.detailedBreakdown.manufacturingEquipment.points",
            { returnObjects: true }
          )}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.rawMaterials.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.rawMaterials.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.testingEquipment.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.testingEquipment.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.calibration.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.calibration.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.factoryLayout.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.factoryLayout.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.bankGuarantee.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.detailedBreakdown.bankGuarantee.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.bankGuarantee.points", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.detailedBreakdown.commonMistakes.title")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.detailedBreakdown.commonMistakes.points", {
            returnObjects: true,
          })}
        />
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("process.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("process.mainHeading")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("process.overview.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("process.overview.description")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("process.stepTable.title")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("process.stepTable.headers.step")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("process.stepTable.headers.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("process.stepTable.steps", { returnObjects: true }).map(
              (step) => (
                <TableRow key={step.step} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {step.step}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {step.description}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="BIS Certificate Process Flow"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("process.timeframe.title")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("process.timeframe.subtitle")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("process.timeframe.description")}
      </p>
    </section>
  );
};

const CostingSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("costing.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("costing.mainHeading")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("costing.overview.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("costing.overview.description1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("costing.overview.description2")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("costing.costTable.headers.category")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("costing.costTable.headers.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("costing.costTable.rows", { returnObjects: true }).map(
              (row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.category}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                    {row.description}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const SurveillanceSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("surveillance.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("surveillance.mainHeading")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("surveillance.overview.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("surveillance.overview.description1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("surveillance.overview.description2")}
      </p>
    </section>
  );
};

const FacilitatorSection = () => {
  const { t } = useTranslation("BISFM");

  return (
    <section id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("facilitator.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("facilitator.mainHeading")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("facilitator.intro.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("facilitator.intro.description")}
      </p>

      <p className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("facilitator.consultantRole.title")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("facilitator.consultantRole.description")}
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("facilitator.taskTable.headers.task")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("facilitator.taskTable.headers.description")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("facilitator.taskTable.rows", { returnObjects: true }).map(
              (row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.task}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                    {row.description}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("facilitator.conclusion")}
      </p>
    </section>
  );
};

// const PointsList = ({ points, heading }) => {
//   return (
//     <div className="flex flex-col w-full md:w-[441px]" role="list">
//       <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
//         {heading}
//       </h3>
//       <ul className="flex flex-col mt-[16px] md:mt-[24px] gap-2" role="list">
//         {points.map((point, index) => (
//           <li key={index} className="flex items-start gap-2" role="listitem">
//             <div
//               className="bg-green-500/10 p-2 rounded-full"
//               aria-hidden="true"
//             >
//               <Check size={12} className="text-[#020817]" />
//             </div>
//             <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
//               {point}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

const PointsListTwo = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </h3>
      <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
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
      </ul>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
};
