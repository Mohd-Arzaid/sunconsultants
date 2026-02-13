import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Check, SlashIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import Services from "../components/manual/Services";
import AboutAuthor from "../components/common/AboutAuthor";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Tec = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>TEC Registration for Telecom Equipment | MTCTE Scheme</title>
        <meta
          name="description"
          content="TEC Certification is Important to Manufacture, Import or Sell Telecommunication Equipment in India under MTCTE Scheme of the Government of India."
        />
        <meta
          name="keywords"
          content="TEC MTCTE certification, TEC Registration, TEC Certificate, TEC Certification, MTCTE Registration, TEC Registration free, MTCTE Portal"
        />

        <meta name="author" content="Dhruv Aggarwal" />
        <meta name="publisher" content="Sun Certifications India" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="TEC Registration for Telecom Equipment | MTCTE Scheme"
        />
        <meta
          property="og:description"
          content="TEC Certification is Important to Manufacture, Import or Sell Telecommunication Equipment in India under MTCTE Scheme of the Government of India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="TEC Registration for Telecom Equipment | MTCTE Scheme"
        />
        <meta
          name="twitter:description"
          content="TEC Certification is Important to Manufacture, Import or Sell Telecommunication Equipment in India under MTCTE Scheme of the Government of India."
        />
        <meta name="twitter:card" content="summary_large_image" />

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
                name: "TEC Registration",
                item: "https://bis-certifications.com/information-about-tec-certificate-mtcte",
              },
            ],
          })}
        </script>
        {/* FAQ Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is TEC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TEC is short for Telecommunication Engineering Center, a section of the Department of Telecommunications (DoT), Government of India. It focuses on the creation of technical standards and specifications for telecom equipment to help ensure the protection, quality, and reliability of the equipment for end users.",
                },
              },
              {
                "@type": "Question",
                name: "What is TEC Certification?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TEC Certification is an approval that is necessary and mandatory for telecom equipment that is sold, manufactured, or imported into India, and is given by TEC. Under the MTCTE scheme, a valid TEC Certificate is necessary for any manufacturer or importer to market telecom products in India.",
                },
              },
              {
                "@type": "Question",
                name: "Are consumer products required to be certified under MTCTE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Currently, consumer products that are not primary telecom products, such as TVs or refrigerators, are excluded from MTCTE Registration, even if they have telecom functionalities such as Wi-Fi or Bluetooth. However, manufacturers are advised to monitor the MTCTE Portal for any updates in scope.",
                },
              },
              {
                "@type": "Question",
                name: "Who can be considered an applicant for MTCTE Registration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The applicant is the company's authorized executive as stated in the authorization letter. In the MTCTE Portal registration, their name and title are to be stated accurately in the profile section.",
                },
              },
              {
                "@type": "Question",
                name: "What is your TEC Certification advantage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TEC MTCTE certification is proof that the telecom equipment has satisfied the requirements set by the government. The advantages are: Legally authorized manufacturing and importing, Enhanced credibility for the product, Improved confidence for the customer, Assurance of safety and performance, Uncut market access into India.",
                },
              },
              {
                "@type": "Question",
                name: "What should an AIR do in case there are several foreign OEMs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If there is one Authorized Indian Representative (AIR) for several foreign OEMs, different MoUs or authorization letters should be given for each OEM. Furthermore, distinct MTCTE Registration accounts should be created for each foreign manufacturer on the MTCTE Portal.",
                },
              },
              {
                "@type": "Question",
                name: "What types of business entities can act as an AIR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An AIR can be a registered business entity in India as a: Proprietorship Firm – Establishment License needed, Partnership Firm – Notarized Partnership Deed needed, Private or Public Limited Company – Required is a Certificate of Incorporation from the ROC. Registration documents should be complete when submitting the TEC Registration.",
                },
              },
              {
                "@type": "Question",
                name: "How can an applicant make offline payment on the MTCTE Portal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While submitting an application for TEC Certification, an applicant can decide on an online payment method or an offline payment method. The MTCTE applicant user instructions on the portal details the steps for offline payment.",
                },
              },
              {
                "@type": "Question",
                name: "Is multiple simultaneous login allowed on the same MTCTE account?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Multiple users cannot log into the same account simultaneously on the MTCTE Portal. Each account can only have one active session.",
                },
              },
              {
                "@type": "Question",
                name: "What is the TEC Registration fee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TEC Registration fee consists of: Government charges, Testing fees, Evaluation of Test Report fees, Professional or consultancy fees, if any. Depending on the type of equipment and the Essential Requirements that need to be met for TEC MTCTE certification, the fees can vary.",
                },
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
                  <BreadcrumbPage>TEC Registration</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <TECHero />
      <TECIndex />
      <TECContent />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Tec;

const TECHero = () => {
  return (
    <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              TEC Registration in India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            <br />
            <span className="text-[#1A8781]">MTCTE Scheme</span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            TEC Registration is an important means of regulating telecom
            equipment in India under the MTCTE Scheme.
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

const TECIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = [
    "Overview",
    "Products",
    "Applicants",
    "Scope",
    "Process",
    "Consultancy",
    "FAQs",
  ];
  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
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
      const element = document.getElementById(
        section.toLowerCase().replace(/\s+/g, "-")
      );
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
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
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

const TECContent = () => {
  return (
    <div className="">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <TECContentLeft />

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
                What is TEC?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                TEC is short for Telecommunication Engineering Center, a
                section of the Department of Telecommunications (DoT),
                Government of India. It focuses on the creation of technical
                standards and specifications for telecom equipment to help
                ensure the protection, quality, and reliability of the equipment
                for end users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is TEC Certification?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                TEC Certification is an approval that is necessary and mandatory
                for telecom equipment that is sold, manufactured, or imported
                into India, and is given by TEC. Under the MTCTE scheme, a
                valid TEC Certificate is necessary for any manufacturer or
                importer to market telecom products in India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Are consumer products required to be certified under MTCTE?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                Currently, consumer products that are not primary telecom
                products, such as TVs or refrigerators, are excluded from MTCTE
                Registration, even if they have telecom functionalities such as
                Wi-Fi or Bluetooth. However, manufacturers are advised to
                monitor the MTCTE Portal for any updates in scope.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Who can be considered an applicant for MTCTE Registration?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                The applicant is the company's authorized executive as stated in
                the authorization letter. In the MTCTE Portal registration,
                their name and title are to be stated accurately in the profile
                section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is your TEC Certification advantage?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                TEC MTCTE certification is proof that the telecom equipment has
                satisfied the requirements set by the government. The advantages
                are: Legally authorized manufacturing and importing, Enhanced
                credibility for the product, Improved confidence for the
                customer, Assurance of safety and performance, and Uncut market
                access into India.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What should an AIR do in case there are several foreign OEMs?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                If there is one Authorized Indian Representative (AIR) for
                several foreign OEMs, different MoUs or authorization letters
                should be given for each OEM. Furthermore, distinct MTCTE
                Registration accounts should be created for each foreign
                manufacturer on the MTCTE Portal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What types of business entities can act as an AIR?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                An AIR can be a registered business entity in India as a:
                Proprietorship Firm – Establishment License needed, Partnership
                Firm – Notarized Partnership Deed needed, Private or Public
                Limited Company – Required is a Certificate of Incorporation
                from the ROC. Registration documents should be complete when
                submitting the TEC Registration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                How can an applicant make offline payment on the MTCTE Portal?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                While submitting an application for TEC Certification, an
                applicant can decide on an online payment method or an offline
                payment method. The MTCTE applicant user instructions on the
                portal details the steps for offline payment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                Is multiple simultaneous login allowed on the same MTCTE
                account?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                No. Multiple users cannot log into the same account
                simultaneously on the MTCTE Portal. Each account can only have
                one active session.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                What is the TEC Registration fee?
              </AccordionTrigger>
              <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                TEC Registration fee consists of: Government charges, Testing
                fees, Evaluation of Test Report fees, Professional or
                consultancy fees, if any. Depending on the type of equipment and
                the Essential Requirements that need to be met for TEC MTCTE
                certification, the fees can vary.
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

const TECContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Products Section */}
        <ProductsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Applicants Section */}
        <ApplicantsSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Scope Section */}
        <ScopeSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Process Section */}
        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Consultancy Section */}
        <ConsultancySection />
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
        What is TEC?
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Full form of TEC: Telecommunication Engineering Centre
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The evolution of the telecommunication industry has been implemented in
        various ways across the globe. From the first telegram service in the
        1830s to the advanced communication satellites and wireless networking
        systems of today. The Indian telecom industry started to evolve in the
        90's with industry liberalization and the subsequent rise of innovation
        and global participation and the fast pace growth of infrastructure in
        India.
        <br />
        <br />
        With the growth of telecom infrastructure, there became a greater need
        for a framework of standards and practices for the functional and formal
        regulation of the telecom ecosystem. To ensure secure communication,
        privacy of data, stability of the network, and interoperability among
        devices, systems and networks, the Minister of Communications of the
        Government of India set up the Telecommunication Engineering Centre
        (TEC) of the Department of Telecommunications (DoT) to provide for the
        secure and reliable ecosystem of telecommunications.
        <br />
        <br />
        TEC Registration is an important means of regulating telecom equipment
        in India. No manufacturer or importer can sell telecom products in the
        Indian marketplace unless a TEC Certificate is obtained under the
        Mandatory Testing and Certification of Telecom Equipment (MTCTE Scheme)
        of the Government of India.
        <br />
        <br />
        This comprehensive guide elaborates and simplifies TEC Certification,
        MTCTE Registration, its eligibility, products, application procedure,
        cost, time, exemptions, compliance, and other constraints.
      </div>

      {/* TEC Safeguards and Specifications */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={[
              "Safe and secure telecom networks",
              "Telecom equipment quality control",
              "Adherence to the Essential Requirements (ERs)",
              "Global standards",
              "The interests of consumers",
            ]}
            heading="TEC safeguards the following:"
          />
        </div>

        {/* Image */}
        <div className="w-full md:w-auto">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="TEC Registration in India"
            title="TEC Registration in India - MTCTE Scheme"
            className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1
              ring-gray-900/7.5 transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)]
              hover:ring-gray-900/12.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5
              "
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Generic Requirements (GR)",
            "Interface Requirements (IR)",
            "Service Requirements (SR)",
          ]}
          heading="Examples of specifications published by TEC:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        These technical standards govern the performance, safety,
        electro-magnetic compatibility, and environmental concerns regarding
        telecom equipment.
      </div>

      {/* What is a TEC Certificate? */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        What is a TEC Certificate?
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        A TEC Certificate is an approval/authorization given by the
        Telecommunication Engineering Centre for telecom equipment. A TEC
        certificate ensures the conformity of telecom devices with the essential
        requirements required by MTCTE.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Manufacture telecom equipment in India",
            "Import telecom equipment to India",
            "Trade telecom equipment in the Indian market",
          ]}
          heading="The TEC certificate is compulsory to:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Telecom products that do not possess a valid TEC Certification cannot
        legally be marketed or used in India. After the TEC Registration process
        is completed successfully, a unique registration number is generated.
        This number acts as an identifier for the product and can be affixed on
        the apparatus as proof of compliance with regulations.
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="flex flex-col scroll-mt-20">
      {/* Products */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Products
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        What is MTCTE Certification
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        MTCTE refers to Mandatory Testing and Certification of Telecom
        Equipment.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        As per the Indian Telegraph (Amendment) Rules, 2017, telecom equipment
        has to go through mandatory testing and certification before it can be
        sold, imported, or used in India.
        <br />
        <br />
        This certification scheme framework is aimed at assuring compliance of
        telecom equipment against the following Essential Requirements:
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Safety",
            "Electromagnetic compatibility (EMC)",
            "Technical performance",
            "Environmental",
            "Security of the networks",
          ]}
          heading="Essential Requirements under MTCTE:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The process of becoming compliant to these rules is commonly known as
        MTCTE certification.
      </div>

      {/* Importance of MTCTE */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        What is the importance of MTCTE Registration?
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The telecommunications space comprises very sensitive infrastructure,
        including mobile networks, the internet, satellites, and enterprise
        communication systems. Non-compliant or faulty equipment can result in
        the following situations:
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Disrupt Network Services",
            "Cause Interference",
            "Endanger National Security",
            "Cause Safety Risks",
          ]}
          heading="Risks of non-compliant equipment:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To mitigate these risks, MTCTE Registration ensures all telecom
        equipment within the borders of the Indian subcontinent is compliant
        with the standards set forth by the Indian Member of Parliament.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Telecom service providers",
            "Consumers",
            "Network operators",
            "National infrastructure",
          ]}
          heading="The Regulatory framework outlines the benefits for:"
        />
      </div>
    </section>
  );
};

const ApplicantsSection = () => {
  return (
    <section id="applicants" className="flex flex-col scroll-mt-20">
      {/*Applicants*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Applicants
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Types of TEC Certifications
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        In addition to the compulsory MTCTE Registration, TEC provides optional
        certification, which varies according to the nature of the product and
        the technical regulations.
      </p>

      {/* 1. Type Approval */}
      <h3 className="text-[20px] md:text-[26px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-2 md:mb-0">
        1. Type Approval
      </h3>
      <div className="mt-[8px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Type approval consists of the testing and certification of
        telecommunications equipment, according to TEC's Test Schedule & Test
        Procedure (TSTP), to evaluate compliance with the Generic Requirement
        (GR). It verifies safety, reliability, and functionality for public
        network use.
      </div>
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "At the original equipment manufacturer (OEM) location",
            "In specific laboratories",
            "At laboratories that are recognized by the International Laboratory Accreditation Cooperation (ILAC) for testing on electromagnetic compatibility (EMC) and for safety and environmental testing.",
          ]}
          heading="Testing could be done:"
        />
      </div>

      {/* 2. Interface Approval */}
      <h3 className="text-[20px] md:text-[26px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-2 md:mb-0">
        2. Interface Approval
      </h3>
      <div className="mt-[8px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Interface Approval determines that the equipment meets the Interface
        Requirements (IR). This is usually demanded by Services Providers,
        Government agencies, and Authorities in charge of licensing.
        <br />
        <br />
        Testing is done according to TEC's Test Schedule & Test Procedure (TSTP)
        and is mandatory in certain situations. It ensures that equipment
        connects correctly with existing public networks, focusing on interface
        compatibility.
      </div>

      {/* 3. Certificate of Approval (CoA) */}
      <h3 className="text-[20px] md:text-[26px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-2 md:mb-0">
        3. Certificate of Approval (CoA)
      </h3>
      <div className="mt-[8px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        A Certificate of Approval (CoA) is a type of certification issued for
        products—particularly in the telecommunications sector—when no standard
        Generic Requirements (GR) or Interface Requirements (IR) exist. This
        type of approval bases the certification on the manufacturer's own
        technical specifications rather than established industry standards.
      </div>

      {/* 4. Technology Approval */}
      <h3 className="text-[20px] md:text-[26px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-2 md:mb-0">
        4. Technology Approval
      </h3>
      <div className="mt-[8px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Technology Approval is granted for prototype telecommunications products
        approved by C-DoT or other Research and Development Organizations. This
        Approval validates new or emerging technologies developed by
        organizations like C-DoT to ensure they meet standards for
        implementation in networks.
      </div>
    </section>
  );
};

const ScopeSection = () => {
  return (
    <section id="scope" className="flex flex-col scroll-mt-20">
      {/* Scope */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Scope
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Products Covered under MTCTE Scheme
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        A wide range of telecom equipment falls under the MTCTE certification
        scheme.
      </p>

      {/* PRODUCTS COVERED UNDER Phase I of MTCTE Table */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg w-[60px]">
                S. No.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Product Name
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Product Variant Name
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Category of Product (GCS/SCS)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {[
              { sno: 1, product: "2-Wire Telephone Equipment", variant: "2-Line Feature Phone", category: "SCS" },
              { sno: 2, product: "2-Wire Telephone Equipment", variant: "CLIP Phone", category: "SCS" },
              { sno: 3, product: "2-Wire Telephone Equipment", variant: "Coin Box Telephone", category: "SCS" },
              { sno: 4, product: "2-Wire Telephone Equipment", variant: "Coin Box Telephone - Table Top Interface", category: "SCS" },
              { sno: 5, product: "2-Wire Telephone Equipment", variant: "Electronic Telephone Instrument", category: "SCS" },
              { sno: 6, product: "2-Wire Telephone Equipment", variant: "Executive Telephone Systems", category: "SCS" },
              { sno: 7, product: "2-Wire Telephone Equipment", variant: "Key Telephone System", category: "SCS" },
              { sno: 8, product: "2-Wire Telephone Equipment", variant: "Key Telephone Systems with proprietary interface", category: "SCS" },
              { sno: 9, product: "2-Wire Telephone Equipment", variant: "NSD or ISD Payphone", category: "SCS" },
              { sno: 10, product: "2-Wire Telephone Equipment", variant: "Terminals for connecting to PSTN", category: "SCS" },
              { sno: 11, product: "G3 Fax Machine", variant: "FAX machine with handset", category: "SCS" },
              { sno: 12, product: "G3 Fax Machine", variant: "FAX machine without handset", category: "SCS" },
              { sno: 13, product: "Modem", variant: "V.90 or V.92 or V.21 to V.34 Modem", category: "SCS" },
              { sno: 14, product: "Cordless Telephone", variant: "Cordless Telephone", category: "SCS" },
              { sno: 15, product: "ISDN Customer Premises Equipment", variant: "ISDN Gateway", category: "SCS" },
              { sno: 16, product: "ISDN Customer Premises Equipment", variant: "ISDN NT-1 Network Termination", category: "SCS" },
              { sno: 17, product: "ISDN Customer Premises Equipment", variant: "ISDN Terminal", category: "SCS" },
              { sno: 18, product: "ISDN Customer Premises Equipment", variant: "ISDN Terminal Adapter", category: "SCS" },
              { sno: 19, product: "ISDN Customer Premises Equipment", variant: "Multipoint Conferencing Server", category: "SCS" },
              { sno: 20, product: "ISDN Customer Premises Equipment", variant: "PC card based ISDN Terminal", category: "SCS" },
              { sno: 21, product: "Private Automatic Branch Exchange", variant: "Private Automatic Branch Exchange", category: "SCS" },
            ].map((item) => (
              <TableRow key={item.sno} className="hover:bg-gray-50">
                <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                  {item.sno}.
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                  {item.product}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {item.variant}
                </TableCell>
                <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                  {item.category}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* MTCTE Exempted Products */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        MTCTE Exempted Products
      </h3>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        On January 8, 2024 the Telecommunication Engineering Centre (TEC) under
        the Department of Telecommunication published a Notification regarding
        certain products being exempted from the compulsory TEC Certification. A
        wide array of exemption from the submission of test reports for specific
        test parameters/interfaces pertaining to various Essential Requirements
        (ERs) under MTCTE has been granted an extension till 30th June 2024, or
        further notice.
      </div>

      {/* Who is Required */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        Who is Required to Get MTCTE/TEC Registration?
      </h3>
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Under the Telecommunication Engineering Centre (TEC), Telecommunication
        Equipment (MTCTE) testing and certification are prerequisites for
        Original Equipment Manufacturers (OEMs), importers, and Indian
        authorized representatives for the sale, import, or use of certain
        telecom equipment in India. Mobile handsets, routers, and switches, and
        modems are included, and they must comply with Indian safety and
        performance standards.
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "OEMs: Includes all telecom equipment manufacturers in India.",
            "Foreign Manufacturers: Foreign OEMs must get their equipment certified, usually through an Authorized Indian Representative (AIR).",
            "Importers & Dealers: Any person importing or selling telecom equipment listed in the notification.",
          ]}
          heading="Who needs to register:"
        />
      </div>

      {/* Basic Requirements */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        Basic Requirements for TEC Certification
      </h3>
      <div className="mt-[8px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The following must be in order to obtain a TEC Certificate:
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Authorized signatory of an Indian company",
            "Company registration certificate",
            "MoU between foreign OEM and Indian representative (if applicable)",
            "TEC-designated laboratory test report",
            "Brand and trademark registration",
            "Manufacturing address",
          ]}
          heading="Required for TEC Certificate:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For the TEC certification, proper and complete documentation is required
        for a successful approval.
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
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        TEC Registration Process on MTCTE Portal
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Step-by-step guide to completing your TEC Registration.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        To initiate the MTCTE registration process, one must create an account
        on an official TEC portal. Next, they must enter company and product
        details, upload the Bill of Materials (BoM), and pay registration fees.
        Products undergo testing at TEC's approved laboratories, known as CABs,
        and reports on EMI/EMC, safety, and performance are evaluated to
        determine eligibility for certification.
      </div>

      {/* Steps */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        Steps to MTCTE Registration and Certification
      </h3>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Step 1. Portal Registration: Register on the MTCTE portal using a company email ID to create a user account. You may be asked to provide a company and manufacturing location.",
            "Step 2. Approval of Product & BoM: You may be required to choose the product category, product type, and product variants. Submit the Bill of Materials and product specifications for initial review.",
            "Step 3. Payment of Application & Fees: Complete the application, and pay the administrative and evaluation fees on the Bharat Kosh portal.",
            "Step 4. Testing of Products: Send product samples to a Designated Conformity Assessment Body (CAB) for ER testing.",
            "Step 5. Submission of Test Report: Upload to the Portal the user's test report, and other technical documentation.",
            "Step 6. TEC Certification and Evaluation: After review of the test reports and other documentation, if TEC finds the documentation to be compliant, a certificate that is valid for 10 years is issued to the user.",
          ]}
          heading="MTCTE Registration Steps:"
        />
      </div>

      {/* Required Documents */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        Required Documents for TEC Registration
      </h3>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Company registration certificate",
            "Authorization letter",
            "Memorandum of Association (MoA)",
            "Articles of Association (AoA)",
            "Shareholding pattern",
            "MOU between foreign OEM and AIR",
            "Test reports",
            "Product data sheet",
          ]}
          heading="The following are required of the applicants:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Delays in the MTCTE Registration process will be caused by incomplete
        documentation.
      </div>

      {/* Timeline */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        TEC Certification Timeline
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The certification process can take a maximum of 60 days which is
        determined by:
      </div>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Complexity of the product",
            "Number of parameters to be tested",
            "Time available at the laboratory",
            "Completeness of documents",
          ]}
          heading="Factors affecting timeline:"
        />
      </div>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Most delays are attributed to insufficient documents or tests that do
        not meet the required standard.
      </div>
    </section>
  );
};

const ConsultancySection = () => {
  return (
    <section id="consultancy" className="flex flex-col scroll-mt-20">
      {/* Consultancy*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Consultancy
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        TEC MTCTE Certification Benefits for Enterprises
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Key advantages of obtaining TEC MTCTE Certification.
      </p>

      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <PointsListTwo
          points={[
            "Accessing Markets: Certifications legally permit firms to sell, import, and distribute telecom products within Indian borders.",
            "Compliance with Laws and Mitigating Risks: Certifications mean compliance with Indian Laws (EMI/EMC, safety) and mitigates the risk of bans, monetary fines, and customs hold.",
            "Company Image and Reputation: Certification of a Company's product will portray the product as safe and reliable which will help in building a Company's Image and Reputation.",
            "Edge Over Competitors: The product certification will help the company gain preference in government, B2B and operator tenders.",
            "Hardware Quality: Quality of the hardware will be better as the testing helps in recognizing all shortfalls.",
            "Modernized Networks: The public network performance will be at its peak as the equipment will not compromise its performance.",
          ]}
          heading="Benefits of TEC MTCTE Certification:"
        />
      </div>

      {/* Conclusion */}
      <h3 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-6 md:mt-8 mb-3 md:mb-0">
        Conclusion
      </h3>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The telecommunications sector is the most crucial for the functioning of
        the entire communication system, the entire business system, and the
        system for protecting the nation. In order to protect the quality,
        safety and integrity of the networks, the Indian government strictly
        enforces compliance with the TEC MTCTE certification.
        <br />
        <br />
        Based on the telecom regulations, obtaining a TEC Certificate by a TEC
        Registration and MTCTE Registration is not just fulfilling a compliance
        requirement, but also an entry strategy for businesses who want to be
        competitive in the telecom sector in India.
        <br />
        <br />
        The process of documentation, testing and evaluation provides assurance
        that the telecom equipment is compliant with the prescribed technical
        standards. Thus, it applies to telecom equipment and compliance to the
        TEC Certification standards applies to both domestic manufacturers and
        foreign OEMs.
        <br />
        <br />
        For businesses to retain their TEC Registration, compliance to the
        requirements for testing, documentation, and evaluation is essential.
        Businesses must also monitor the updates on the MTCTE Portal to
        facilitate this.
        <br />
        <br />
        As India's telecom landscape is rapidly evolving, TEC Certification,
        along with regulatory compliance, will continue to contribute to a safe
        and effective communication ecosystem.
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
          Last updated on Feb 12, 2026
        </p>
      </div>
    </section>
  );
};
