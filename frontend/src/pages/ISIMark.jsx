import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import { BISCProductTable } from "@/components/manual/BISCertification";
import Services from "../components/manual/Services";

import AboutAuthor from "../components/common/AboutAuthor";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const ISIMark = () => {
  return (
    <>
      <Helmet>
        <title>BIS ISI Mark Certification Process, Documents, Fee</title>
        <meta
          name="description"
          content=" ISI mark certification issued by the Bureau of Indian Standards is given to products undergoing stringent testing and inspection to meet the required standards and compliances"
        />
        <meta
          name="keywords"
          content="ISI Mark, ISI Mark Certification, ISI Mark Certificate, ISI Certification, ISI Certificate, ISI Mark Registration, ISI License, BIS ISI Mark, BIS ISI Mark Certification"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS ISI Mark Certification Process, Documents, Fee"
        />
        <meta
          property="og:description"
          content=" ISI mark certification issued by the Bureau of Indian Standards is given to products undergoing stringent testing and inspection to meet the required standards and compliances"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card Tags */}

        <meta name="twitter:title" content="BIS ISI Mark Certification Process, Documents, Fee" />
        <meta name="twitter:description" content=" ISI mark certification issued by the Bureau of Indian Standards is given to products undergoing stringent testing and inspection to meet the required standards and compliances" />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />

        {/* Hreflang Links for International Pages */}
        <link
          rel="alternate"
          href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/it/certificazione-bis-isi-mark"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/fr/certification-bis-marque-isi"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/de/bis-isi-mark-zertifizierung"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/nl/bis-isi-mark-certificering"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ja/bis-isi-mark-shounin"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ko/bis-isi-mark-injeung"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/id/sertifikasi-bis-isi-mark"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/th/bis-isi-mark-raprong"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/vi/chung-nhan-bis-isi-mark"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/es/certificacion-bis-marca-isi"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/a-guide-to-bis-certification-indian-bis"
          hrefLang="x-default"
        />
        <meta name="robots" content="index, follow" />

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
                name: "BIS ISI Mark Certification Process, Documents, Fee",
                item: "https://bis-certifications.com/a-guide-to-bis-certification-indian-bis",
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="w-full relative">
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
                      BIS ISI Mark Certification Process, Documents, Fee
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <BISISIHero />
        <BISISIIndex />
        <BISISIContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default ISIMark;

// BIS Hero Section
const BISISIHero = () => {
  const { t } = useTranslation("ISIMark");

  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="ISI Mark Certification Hero"
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
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              {t("hero.badge")}
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              {t("hero.title.part1")}
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            {t("hero.title.part2")}
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            {t("hero.description")}
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
                {t("hero.viewServices")}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </section>
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
  const { t } = useTranslation("ISIMark");

  const SECTIONS = [
    "overview",
    "requirement",
    "document",
    "conclusion",
    "faqs",
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
        const element = document.getElementById(section);
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
          {t(`navigation.${activeSection.toLowerCase()}`)}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label={t("navigation.toggleMenu")}
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
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection.toLowerCase()
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {t(`navigation.${item}`)}
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection.toLowerCase()
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {t(`navigation.${item}`)}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection.toLowerCase()
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
  const { t } = useTranslation("ISIMark");

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          {t("faq.title")}
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          {t("faq.subtitle")}{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            {t("faq.contactLink")}
          </a>
        </p>
        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {t("faq.questions", { returnObjects: true }).map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>{faq.question}</h3>
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

const BISISIContentLeft = () => {
  return (
    <article className=" flex-1 ">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RequirementSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <DocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConclusionSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
      </div>
    </article>
  );
};

const PointsListTwo = ({ points, heading, tagType = "h3" }) => {
  const TagComponent = tagType;

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
            <TagComponent className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </TagComponent>
          </li>
        ))}
      </div>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
  tagType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"]),
};

const OverviewSection = () => {
  const { t } = useTranslation("ISIMark");

  return (
    <section
      id="overview"
      className="flex flex-col scroll-mt-20"
      aria-label="BIS ISI Mark Certification Overview"
    >
      <header className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("overview.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </header>

      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("overview.mainHeading")}
      </h1>
{/* 
      <img
        src="/services-main-images/IndianBisCertification.jpg"
        alt="Indian BIS Certification"
        title="BIS Certificate for Indian manufactures"
        className="mt-4 md:mt-6 w-full max-w-[600px] h-auto rounded-lg shadow-md"
      /> */}

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.introduction.paragraph1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.introduction.paragraph2")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.introduction.paragraph3")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.understandingBIS.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.understandingBIS.paragraph1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.understandingBIS.paragraph2")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.whatIsISI.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.whatIsISI.paragraph1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.whatIsISI.paragraph2")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.whatIsISI.paragraph3")}
      </p>

      {/* ISI Mark Image */}
      {/* <div className="flex justify-center my-6 md:my-8">
        <img
          src="/isi-mark-img/IndianBISCertification.png"
          alt="BIS Certification, BIS Certificate, BIS License - Indian BIS"
          className="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
          loading="lazy"
        />
      </div> */}

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("overview.whatIsISI.productExamples", {
            returnObjects: true,
          })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.whatIsISI.paragraph4")}{" "}
        <a
          href="#product-table"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('product-table')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          className="text-[#125E5A] underline hover:text-[#1A8781] transition-colors cursor-pointer"
        >
          {t("overview.whatIsISI.linkText")}
        </a>
        .
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.difference.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.difference.paragraph1")}
      </p>

      <p
        className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose"
        dangerouslySetInnerHTML={{ __html: t("overview.difference.bisCertification") }}
      />

      <p
        className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose"
        dangerouslySetInnerHTML={{ __html: t("overview.difference.isiMark") }}
      />

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.difference.paragraph2")}
      </p>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.importance.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.importance.paragraph1")}
      </p>

      {t("overview.importance.benefits", { returnObjects: true }).map(
        (benefit, index) => (
          <p
            key={index}
            className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose"
          >
            <strong>{benefit.title}</strong> {benefit.description}
          </p>
        )
      )}
    </section>
  );
};

const RequirementSection = () => {
  const { t } = useTranslation("ISIMark");

  return (
    <section id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirements */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("requirement.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("requirement.basicRequirements.title")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("requirement.basicRequirements.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("requirement.basicRequirements.requirements", {
            returnObjects: true,
          })}
        />
      </div>

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("requirement.certificationProcess.title")}
      </h2>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("requirement.certificationProcess.description")}
      </p>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("requirement.certificationProcess.normalProcedure.title")}
      </h3>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("requirement.certificationProcess.normalProcedure.steps", {
            returnObjects: true,
          })}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("requirement.certificationProcess.simplifiedProcedure.title")}
      </h3>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t(
            "requirement.certificationProcess.simplifiedProcedure.steps",
            { returnObjects: true }
          )}
        />
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  const { t } = useTranslation("ISIMark");

  return (
    <section id="document" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("document.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("document.mainHeading")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.documentsList", { returnObjects: true })}
          tagType="h4"
        />
      </div>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.benefits.title")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.benefits.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.benefits.benefitsList", { returnObjects: true })}
        />
      </div>

      <h3 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("document.revocation.title")}
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.revocation.description")}
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <PointsListTwo
          points={t("document.revocation.reasons", { returnObjects: true })}
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("document.revocation.regulation")}
      </p>
    </section>
  );
};

const ConclusionSection = () => {
  const { t } = useTranslation("ISIMark");

  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("conclusion.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("conclusion.title")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.paragraph1")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.paragraph2")}
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("conclusion.paragraph3")}
      </p>
    </section>
  );
};