/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,  
  TableRow,
  TableHead,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Contact Form Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import BISImage from "../../assets/images/BIS.jpg";
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationVietnamese = () => {
  return (
    <div className="relative">
      {/* CRS Registration Meta Tags */}
      <CRSRegistrationMetaTags />
      {/* CRS Registration Breadcrumb */}
      <CRSRegistrationBreadcrumb />
      {/* CRS Registration Hero Section */}
      <CRSRegistrationHero />
      {/* CRS Registration Index Section */}
      <CRSRegistrationIndex />
      {/* CRS Registration Main Content Section */}
      <CRSRegistrationMainContent />
      {/* Footer Section */}
      <FooterVietnamese />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationVietnamese;


const CRSRegistrationMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "BIS CRS Registrierung",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>BIS Registrierung - Pflichtregistrierungsschema (CRS)</title>
      <meta
        name="description"
        content="Die BIS-Registrierung ist der Erwerb einer Lizenz vom BIS für elektronische und IT-Produkte, die den anwendbaren indischen Standards unter dem CRS-Schema entsprechen."
      />
      <meta
        name="keywords"
        content="BIS Zertifikat, BIS Registrierungsprozess, BIS Registrierung, BIS Online-Registrierungsprozess, BIS Zertifizierung für elektronische Produkte, BIS Registrierungsprozess in Indien, BIS Registrierung für elektronische Produkte, Pflichtregistrierungsschema"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="BIS Registrierung - Pflichtregistrierungsschema (CRS)"
      />
      <meta
        property="og:description"
        content="Die BIS-Registrierung ist der Erwerb einer Lizenz vom BIS für elektronische und IT-Produkte, die den anwendbaren indischen Standards unter dem CRS-Schema entsprechen."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="BIS Registrierung - Pflichtregistrierungsschema (CRS)"
      />
      <meta
        name="twitter:description"
        content="Die BIS-Registrierung ist der Erwerb einer Lizenz vom BIS für elektronische und IT-Produkte, die den anwendbaren indischen Standards unter dem CRS-Schema entsprechen."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const CRSRegistrationBreadcrumb = () => {
  return (
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
                  <BreadcrumbPage>BIS CRS Registrierung</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationHero = () => {
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
              Zertifizierte Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS CRS Registrierung
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Pflicht für elektronische Produkte zur Gewährleistung von Sicherheit und Qualität. 
            Erhalten Sie die BIS-Genehmigung mit fachkundiger Unterstützung!
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
                Dienstleistungen anzeigen
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <CRSRegistrationHeroContactForm />
      </div>
    </main>
  );
};

const CRSRegistrationHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registrierung";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("Form Data:", formData);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie einen gültigen vollständigen Namen ein.",
        description: "Der Name sollte nur Buchstaben und Leerzeichen enthalten.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        description: "Überprüfen Sie, ob Ihr E-Mail-Format korrekt ist",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige Telefonnummer ein",
        description: "Die Telefonnummer muss (8-15 Ziffern) enthalten",
      });
      setLoading(false);
      return;
    }

    //  console.log(BASE_URL);
    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Kontaktformular erfolgreich übermittelt!",
        description:
          "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich in Kürze bei Ihnen melden.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: errorMessage || "Fehler beim Übermitteln der Kontaktformulardaten!",
        description:
          "Etwas ist schief gelaufen. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Kontaktieren Sie uns
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Einen Termin buchen
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Möchten Sie unser Team kontaktieren und einen Anruf planen?
        <span className="text-black"> Jetzt versuchen</span>
      </p>

      <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Vollständiger Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="E-Mail-Adresse *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Kontaktnummer *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Firmenname *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Produktname *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Erforderliche Zertifizierung*"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          {loading ? (
            <div className="flex gap-3 items-center justify-center">
              <ClockLoader size={22} color="#fff" />
              <span>Wird gesendet</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Termin buchen</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const CRSRegistrationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "eligibility",
      "documents",
      "registration",
      "fees",
      "elabelling",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Übersicht",
    eligibility: "Anspruchsberechtigung",
    documents: "Dokumente",
    registration: "Registrierung",
    fees: "Registrierungsgebühren",
    elabelling: "E-Kennzeichnung",
  };

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
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
        }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
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
                  {MENU_ITEMS[item]}
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
              {MENU_ITEMS[item]}
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

const CRSRegistrationMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <CRSRegistrationMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentVietnamese />
        </div>
      </div>
      <CRSRegistrationServiceFaq />
      <CISProductTable />
      <div id="services">
        <Services />
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifikatsberater
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Kennzeichen (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registrierungs-Zertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registrierung
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfall-Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Zertifikats-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Zertifikats-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registrierungs-Zertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI KENNZEICHEN (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};


const CRSRegistrationServiceFaq = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. Was ist eine BIS-Registrierung?",
      answer:
        "Die BIS-Zertifizierung ist ein Compliance-Prozess, der vom Bureau of Indian Standards geregelt wird und verifiziert, dass ein Produkt den anwendbaren indischen Normen (IS) für Qualität, Sicherheit und Zuverlässigkeit entspricht.",
    },
    {
      id: "item-2",
      question: "2. Was ist eine CRS-Registrierung unter BIS?",
      answer:
        "CRS steht für Compulsory Registration Scheme (Pflichtregistrierungsschema). Es ist ein verpflichtender Registrierungsprozess für spezifische Produktkategorien wie Elektronik, Elektrik, Batterien und Solargüter. Produkte unter CRS müssen getestet und bei BIS registriert werden, bevor sie in Indien verkauft werden können.",
    },
    {
      id: "item-3",
      question: "3. Ist BIS-Zertifizierung in Indien verpflichtend?",
      answer:
        "Ja. Für alle Produkte, die unter der CRS-Produktliste aufgeführt sind (derzeit 80+ Artikel), ist die BIS-Registrierung für die Herstellung, den Import oder den Verkauf in Indien verpflichtend.",
    },
    {
      id: "item-4",
      question: "4. Was ist der Unterschied zwischen BIS CRS und ISI-Kennzeichen?",
      answer:
        "BIS CRS: Für Elektronik- und IT-Güter, nur für obligatorische Produkte, die unter QCO benachrichtigt wurden. <br />ISI-Kennzeichen: Wird für ein breiteres Spektrum von Produkten verwendet und kann je nach Produktkategorie freiwillig oder verpflichtend sein.",
    },
    {
      id: "item-5",
      question: "5. Wer kann eine BIS CRS-Registrierung beantragen?",
      answer:
        "Nur Hersteller können sich bewerben. Dies umfasst sowohl indische als auch ausländische Hersteller. Ausländische Marken müssen einen Autorisierten Indischen Vertreter (AIR) ernennen.",
    },
    {
      id: "item-6",
      question: "6. Welche Rolle hat ein AIR?",
      answer:
        "Ein Autorierter Indischer Vertreter (AIR) ist rechtlich verantwortlich für die Einreichung des BIS-Antrags im Namen eines ausländischen Herstellers. Er fungiert als offizieller Verbindungsmann zwischen BIS und dem ausländischen Antragsteller.",
    },
    {
      id: "item-7",
      question: "7. Wie lange dauert eine BIS CRS-Registrierung?",
      answer:
        "Der Prozess dauert in der Regel 3-4 Wochen, vorausgesetzt, alle Dokumente und Testberichte werden korrekt eingereicht und von BIS keine Einwände erhoben.",
    },
    {
      id: "item-8",
      question: "8. Wie viel kostet ein BIS CRS-Zertifikat?",
      answer:
        "Die Kosten umfassen: <br />Testgebühren: ₹10.000–₹20.000 + GST <br />Regierungsgebühr: ₹53.000 + GST pro Testbericht <br />Zusätzliche Gebühren: Eidestattliche Erklärung, Kurier, AIR-Dokumentation usw. <br />Rabatt für registrierte indische KMU-Hersteller",
    },
    {
      id: "item-9",
      question: "9. Wie lange sind BIS CRS-Zertifikate gültig?",
      answer:
        "Die anfängliche BIS-Lizenz ist 2 Jahre gültig. Sie kann für bis zu 5 Jahre verlängert werden, wenn die Produkt- und Herstellungsdetails unverändert bleiben.",
    },
    {
      id: "item-10",
      question: "10. Kann die BIS-Zertifizierung freiwillig erworben werden?",
      answer:
        "Nein. Unter CRS können Sie sich nicht freiwillig für Produkte bewerben, die nicht unter QCOs aufgeführt sind. Die freiwillige Zertifizierung gilt nur für Nicht-CRS-Produkte über das ISI-Schema.",
    },
    {
      id: "item-11",
      question: "11. Wo finde ich die BIS CRS-Produktliste?",
      answer:
        'Sie können die offizielle BIS-Website besuchen <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> und zum Bereich "Produkte unter CRS" navigieren, um die vollständige Liste der abgedeckten Produkte anzuzeigen.',
    },
    {
      id: "item-12",
      question: "12. Kann das BIS-Kennzeichen elektronisch angezeigt werden?",
      answer:
        "Ja, durch E-Kennzeichnung, aber es muss strenge BIS-Regeln erfüllen: Kennzeichnungsinformationen müssen in der Firmware eingebettet sein <br />Einfacher Zugang innerhalb von 4 Schritten im Geräte-Menü <br />Die physische Verpackung muss weiterhin regulatorische Informationen tragen",
    },
    {
      id: "item-13",
      question:
        "13. Was passiert, wenn ich keine BIS-Registrierung für ein obligatorisches Produkt erhalte?",
      answer:
        "Schwere Strafen, einschließlich: <br />Produktbeschlagnahme <br />Zoll-ablehnungen <br />Rechtliche Geldbußen <br />Abmeldung von E-Commerce-Portalen <br />Permanentes Verbot vom indischen Markt",
    },
    {
      id: "item-14",
      question: "14. Kann ein BIS-Zertifikat mehrere Modelle oder Marken abdecken?",
      answer:
        "Nein. Jede Marke und jeder Fabrikstandort muss separat zertifiziert werden. Mehrere Modelle können unter Verwendung zusätzlicher Berichte hinzugefügt werden, aber nur unter der gleichen Anwendung und Marke.",
    },
    {
      id: "item-15",
      question: "15. Wie kann Sun Certifications India mir helfen?",
      answer:
        "Wir bieten: <br />Vollständige Dokumentationsunterstützung <br />Laborkoordination <br />BIS-Portal-Anwendungsbearbeitung <br />Anfragebeantwortung und BIS-Nachverfolgung <br />Verlängerungs- und Kennzeichnungsberatung <br />Compliance-Gewährleistung für ausländische Marken über AIR-Dienstleistungen",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Häufig gestellte Fragen
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Können Sie die Antwort nicht finden, die Sie suchen?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Kontaktieren Sie uns!
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {visibleFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Show More/Show Less Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {showAllFaqs ? (
                <>
                  <svg
                    className="w-5 h-5 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Weniger FAQs anzeigen
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Mehr FAQs anzeigen
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const productsData = [
  {
    id: 1,
    product: "VERSTÄRKER MIT EINGANGSLEISTUNG 2000W UND MEHR",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 2,
    product: "AUTOMATISCHE DATENVERARBEITUNGSMASCHINE",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 3,
    product: "ELEKTRONISCHE UHREN MIT NETZANSCHLUSS",
    isNumber: "IS 302-2-26:2014",
    date: "03 July 2013",
  },
  {
    id: 4,
    product: "ELEKTRONISCHE SPIELE (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 5,
    product: "ELEKTRONISCHE MUSIKSYSTEME MIT EINGANGSLEISTUNG 200W UND MEHR",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 6,
    product: "LAPTOP/NOTEBOOK/TABLETT",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 7,
    product: "MIKROWELLENÖFEN",
    isNumber: "IS 302-2-25:2014",
    date: "03 July 2013",
  },
  {
    id: 8,
    product:
      "OPTISCHE PLATTENSPIELER MIT EINGEBAUTEN VERSTÄRKERN VON EINGANGSLEISTUNG 200W UND MEHR",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 9,
    product: 'PLASMA/LCD/LED FERNSEHER MIT BILDSCHIRMGRÖSSE 32" UND MEHR',
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 10,
    product: "DRUCKER, PLOTTER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 11,
    product: "SCANNER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 12,
    product: "RECEIVERBOX",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 13,
    product: "TELEFONANRUFBEANTWORTER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 14,
    product:
      'BILDSCHIRME, VIDEOMONITORE MIT BILDSCHIRMGRÖSSE 32" UND MEHR',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 15,
    product: "DRAHTLOSE TASTATUREN",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 16,
    product: "KASSEN",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 17,
    product: "KOPIERGERÄTE/DUPLIZIERER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 18,
    product: "REISEPASS-LESEGERÄT",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 19,
    product: "POINT OF SALE TERMINALS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 20,
    product: "POSTBEARBEITUNGSMASCHINEN/PORTORECHNUNGEN/FRANKIERMASCHINEN",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 21,
    product: "POWERBANKS FÜR TRAGBARE ANWENDUNGEN",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 22,
    product: "SMARTKARTEN-LESEGERÄT",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 23,
    product: "MOBILE TELEFONE",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "SELBSTBALLASTIERTE LED-LAMPEN FÜR ALLGEMEINE BELEUCHTUNGSDIENSTLEISTUNGEN",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "ELEKTRONISCHE STEUERGERÄTE GLEICH- ODER WECHSELSTROM FÜR LED-MODULE",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 December 2015",
  },
  {
    id: 26,
    product: "STROMVERSORGUNGSADAPTER FÜR AUDIO, VIDEO & ÄHNLICHE ELEKTRONISCHE GERÄTE",
    isNumber: "IS 616:2010",
    date: "01 December 2015",
  },
  {
    id: 27,
    product: "STROMVERSORGUNGSADAPTER FÜR IT-AUSRÜSTUNGEN",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 December 2015",
  },
  {
    id: 28,
    product: "FESTE ALLZWECK-LED-LEUCHTEN",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 March 2016",
  },
  {
    id: 29,
    product: "USV/WECHSELRICHTER DER BEWERTUNG <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 March 2016",
  },
  {
    id: 30,
    product:
      "VERSIEGELTE SEKUNDÄRZELLEN/BATTERIEN MIT ALKALISCHEN ODER ANDEREN NICHTSAURES ELEKTROLYT FÜR TRAGBARE ANWENDUNGEN TEIL 1 NICKELSYSTEME",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 June 2016",
  },
  {
    id: 31,
    product:
      "VERSIEGELTE SEKUNDÄRZELLEN/BATTERIEN MIT ALKALISCHEN ODER ANDEREN NICHTSAURES ELEKTROLYT FÜR TRAGBARE ANWENDUNGEN TEIL 2 LITHIUMSYSTEME",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 June 2016",
  },
  {
    id: 32,
    product: "INDISCHE SPRACHUNTERSTÜTZUNG FÜR MOBILTELEFONE",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 May 2018",
  },
  {
    id: 33,
    product: "Eingesenkte LED-Leuchten",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 May 2018",
  },
  {
    id: 34,
    product: "LED-Leuchten für Straßen- und Wegebeleuchtung",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 May 2018",
  },
  {
    id: 35,
    product: "LED-Flutlichter",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 May 2018",
  },
  {
    id: 36,
    product: "LED-Taschenlampen",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 May 2018",
  },
  {
    id: 37,
    product: "LED-Lichtketten",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 May 2018",
  },
  {
    id: 38,
    product: "LED-Leuchten für Notbeleuchtung",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 May 2018",
  },
  {
    id: 39,
    product: "USV/Wechselrichter mit Bewertung <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 May 2018",
  },
  {
    id: 40,
    product: "Plasma/LCD/LED-Fernseher mit Bildschirmgröße bis zu 32",
    isNumber: "IS 616 : 2017",
    date: "23 May 2018",
  },
  {
    id: 41,
    product: "Bildschirme, Videomonitore mit Bildschirmgröße bis zu 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 42,
    product: "CCTV-Kameras/CCTV-Rekorder",
    isNumber:
      "IS 13252 (Part 1) : 2010, Wesentliche Anforderung(en) für die Sicherheit von CCTV",
    date: "23 May 2018",
  },
  {
    id: 43,
    product: "Adapter für Haushalts- und ähnliche Elektrogeräte",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 May 2018",
  },
  {
    id: 44,
    product:
      "USB-gesteuerte Barcode-Leser, Barcode-Scanner, Iris-Scanner, optische Fingerabdruck-Scanner",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 45,
    product: "Smartwatches",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 46,
    product:
      "Kristalline Silizium-Terrestrische Photovoltaik(PV)-Module (Si-Wafer-basiert)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 47,
    product:
      "Dünnschicht-Terrestrische Photovoltaik(PV)-Module (a-Si, CiGs und CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 48,
    product: "Stromwandler für den Einsatz in Photovoltaik-Stromsystemen",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 June 2021",
  },
  {
    id: 49,
    product: "Netzgekoppelte Photovoltaik-Wechselrichter",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 June 2021",
  },
  {
    id: 50,
    product: "Speicherbatterie",
    isNumber: "IS 16270 : 2014",
    date: "01 January 2019",
  },
  {
    id: 51,
    product: "Unabhängige LED-Module für Allgemeinbeleuchtung",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Lichtkette (Lichtschläuche)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Tastatur",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Induktionsherd",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Bankautomaten mit Bargeldausgabe",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "USB-Typ Externe Festplatte",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Drahtlose Kopfhörer und Ohrhörer",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product:
      "USB-Typ Externe Solid-State-Speichergeräte (über 256 GB Kapazität)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Elektronisches Musiksystem mit Eingangsleistung unter 200 Watt",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product:
      "Standalone-Schaltnetzteile (SMPS) mit Ausgangsspannung 48V (max)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Fernseher außer Plasma/LCD/LED-Fernseher",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Reiskocher",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Drahtloses Mikrofon",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 64,
    product: "Digitale Kamera",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 October 2021",
  },
  {
    id: 65,
    product: "Videokamera",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 66,
    product: "Webcam (Fertigerzeugnis)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 67,
    product: "Smart-Lautsprecher (mit und ohne Display)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 68,
    product: "Dimmer für LED-Produkte",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 October 2021",
  },
  {
    id: 69,
    product: "Bluetooth-Lautsprecher",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 70,
    product: "Ortho-Phosphorsäure",
    isNumber: "IS 798 : 2020",
    date: "12 December 2021",
  },
  {
    id: 71,
    product: "Polyphosphorsäure",
    isNumber: "IS 17439:2020",
    date: "24 December 2021",
  },
  {
    id: 72,
    product: "Baumwollballen",
    isNumber: "IS 12171:2019",
    date: "03 March 2023",
  },
  {
    id: 73,
    product: "Trimethylphosphit technische Qualität",
    isNumber: "IS 17412:2020",
    date: "03 March 2023",
  },
  {
    id: 74,
    product: "Fernseher",
    isNumber: "IS 18112:2022",
    date: "26 April 2023",
  },
];

export const CISProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const filteredProducts = productsData.filter(
    (product) =>
      product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const scrollToTable = () => {
    const tableSection = document.querySelector(".product-table-section");
    if (tableSection) {
      tableSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTable();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTable();
    }
  };

  return (
    <section className="w-full pb-12 product-table-section">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Offizielle Produktliste unter BIS CRS Registrierung
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Die folgende Tabelle listet Produkte auf, die eine BIS CRS-Registrierung
          in Indien erfordern, zusammen mit ihren anwendbaren Indischen Normen (IS)-Nummern und
          Umsetzungsdaten.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Nach Produkten nach Name oder IS-Nummer suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  Nr.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Produkt
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS Nr.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Umsetzungsdatum
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Zurück
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Seite {currentPage} von {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const CRSRegistrationMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">Was ist eine BIS-Registrierung?</h2>

          <p className="service-left-content-paragraph">
            Das Bureau of Indian Standards (BIS) ist die nationale Standardisierungs-
            organisation in Indien und arbeitet unter dem Ministerium für Verbraucherangelegenheiten, Ernährung
            und öffentliche Verteilung der indischen Regierung. BIS ist für die
            Aufrechterhaltung der Qualitäts-, Sicherheits- und Leistungsstandards für
            verschiedene Produkte und Dienstleistungen in Indien gemäß den relevanten indischen
            Normen (IS) verantwortlich.
          </p>

          <p className="service-left-content-paragraph">
            BIS ist für die Überwachung und Umsetzung verschiedener Programme
            in Indien verantwortlich. Das Pflichtregistrierungsschema (CRS) ist ein sehr
            prominentes und verpflichtendes Zertifizierungsschema von BIS, das verschiedene
            Kategorien von elektronischen und IT-Produkten abdeckt.
          </p>

          <p className="service-left-content-paragraph">
            Die Leistung und Sicherheit indischer Produkte ist ein wichtiges Anliegen
            für Indien. Die BIS CRS-Zertifizierung garantiert, dass elektronische und IT-
            Produkte den indischen Standards entsprechen und hilft, Verbraucher
            vor nicht konformen und minderwertigen Produkten zu schützen.
          </p>
        </div>

        {/* Overview Section */}
        <CRSRegistrationMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Eligibility Section */}
        <CRSRegistrationMainContentLeftEligibilitySection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <CRSRegistrationMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Registration Section */}
        <CRSRegistrationMainContentLeftRegistrationSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Fees Section */}
        <CRSRegistrationMainContentLeftFeesSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* E-Labelling  */}
        <CRSRegistrationMainContentLeftELabellingSection />

        {/* Divider */}
        <div className="service-left-content-divider" />
        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};



const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Übersicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Was ist ein Pflichtregistrierungsschema (CRS)?
      </h2>

      <p className="service-left-content-paragraph">
        Das Pflichtregistrierungsschema (CRS) ist ein BIS-Produktregistrierungs-
        schema, das 2012 eingeführt wurde und sich zunächst auf elektronische
        Produkte konzentrierte. Im Laufe der Jahre wurde CRS erweitert, um
        eine breitere Palette von Produktkategorien einzuschließen, darunter
        Elektroprodukte wie Haushaltsgeräte, Solargeräte,
        Batterien und mehr. Die CRS-Registrierung ist für Produkte vorgeschrieben
        unter Qualitätskontrollverordnungen (QCOs), die von verschiedenen Ministerien herausgegeben werden.
      </p>

      <p className="service-left-content-paragraph">
        Jedes Produkt, das unter das obligatorische CRS-Schema fällt, muss verkauft,
        importiert oder in Indien nur nach Erhalt der Registrierung bei
        BIS vertrieben werden.
      </p>

      <h3 className="service-left-content-heading-three">
        Geschichte der CRS-Zertifizierung in Indien
      </h3>

      <p className="service-left-content-paragraph">
        Im Jahr 2012 wurde die erste QCO unter dem CRS-Schema veröffentlicht und konzentrierte sich auf
        elektronische und IT-Ausrüstung. Seitdem wurden zusätzliche QCOs
        in den folgenden Sektoren herausgegeben:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verbraucherelektronik",
          "Beleuchtung & LEDs",
          "Batterien & Zellen",
          "Drahtlose Kommunikationsgeräte",
          "Solarmodule und Komponenten",
          "Elektrogeräte für Haushalte",
        ]}
      />

      <p className="service-left-content-paragraph">
        Die Liste für die CRS-Zertifizierung wird rapide erweitert, daher ist es sehr
        wichtig für Hersteller, proaktiv zu sein und sich über aktuelle Updates bewusst zu sein.
      </p>

      <h2 className="service-left-content-heading-three">
        CRS-Registrierung vs. ISI-Marke: Was ist der Unterschied?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Merkmal
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  CRS Registrierung
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  ISI-Marke
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Art
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Pflicht (nur für QCO-gelistete Produkte)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Freiwillig oder Pflicht (abhängig vom Produkt)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Produktumfang
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Elektronik, IT, Elektro, Batterien, usw.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Lebensmittel, Zement, Stahl, Elektro, usw.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Anwendung
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Online, BIS CRS Portal
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Manuell + Online, BIS ISI System
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Flexibilität
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nur für QCO-abgedeckte Waren
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Kann freiwillig für Nicht-QCO-Waren sein
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Kennzeichnung
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Erfordert BIS CRS Logo und Registrierungsnummer
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Erfordert ISI Logo mit Standardcode
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        Warum müssen Sie das BIS CRS Rahmenwerk kennen?
      </h3>

      <p className="service-left-content-paragraph">
        Wenn Sie ein Produzent in Indien sind oder ein ausländisches Unternehmen, das versucht, den
        indischen Markt zu betreten, ist das Wissen über die BIS CRS-Schritte ein Muss. Es hilft Ihnen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Bußgelder für Nichteinhaltung vermeiden.",
          "Produktionszeitpläne vorbereiten (unter Berücksichtigung der Labortestzeit).",
          "Einfachere Zollabfertigung ermöglichen.",
          "Langfristiges Markenvertrauen des indischen Kunden gewinnen.",
        ]}
      />
    </div>
  );
};

const CRSRegistrationMainContentLeftEligibilitySection = () => {
  return (
    <div id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Anspruchsberechtigung</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Anspruchskriterien für die BIS CRS-Registrierung
      </h2>

      <p className="service-left-content-paragraph">
        Wer kann eine BIS-Zertifizierung unter CRS beantragen?
      </p>

      <p className="service-left-content-paragraph">
        In Indien kann ein BIS-Zertifikat unter dem Pflichtregistrierungsschema
        (CRS) nur Herstellern gewährt werden, die die vom Bureau of Indian Standards festgelegten
        Anforderungen erfüllen. Dies soll sicherstellen, dass nur authentische
        Hersteller das Privileg erhalten, sich zu registrieren und
        das BIS CRS-Logo auf ihren Produkten anzubringen.
      </p>

      <div className="service-left-content-heading-three">Anspruchskriterien-Checkliste</div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Anforderung
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Beschreibung
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Người đăng ký phải là Nhà sản xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Chỉ nhà sản xuất gốc (không phải người bán hoặc nhà bán lẻ) của sản phẩm mới đủ điều kiện đăng ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Địa Điểm Có Thể Ở Ấn Độ Hoặc Nước Ngoài
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Cả nhà sản xuất Ấn Độ và thương hiệu quốc tế đều có thể đăng ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (Đại Diện Ấn Độ Được Ủy Quyền)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Nhà sản xuất nước ngoài phải bổ nhiệm AIR - hoặc là chi nhánh Ấn Độ của họ 
                  hoặc bên thứ ba được ủy quyền chính thức.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Kiểm Tra Từ Phòng Thí Nghiệm Được BIS Phê Duyệt
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Sản phẩm phải được kiểm tra tại phòng thí nghiệm được BIS công nhận và 
                  đáp ứng Tiêu chuẩn Ấn Độ (IS) áp dụng.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tài Liệu Đúng Chuẩn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Tất cả tài liệu yêu cầu phải được nộp theo định dạng quy định (chi tiết trong phần tiếp theo).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Một Đăng Ký Cho Mỗi Thương Hiệu & Địa Điểm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải nộp đơn riêng cho mỗi loại sản phẩm, địa điểm sản xuất và tên thương hiệu.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        AIR (Đại Diện Ấn Độ Được Ủy Quyền) Là Ai?
      </h2>

      <p className="service-left-content-paragraph">
        Đối với nhà sản xuất nước ngoài, một trong những nghĩa vụ là bổ nhiệm một 
        Đại Diện Ấn Độ Được Ủy Quyền (AIR) để giao tiếp và đại diện tại Ấn Độ.
      </p>

      <div className="service-left-content-heading-three">Trách Nhiệm Của AIR:</div>

      <PointsListWithoutHeading
        points={[
          "Đóng vai trò là đại diện pháp lý cho người đăng ký nước ngoài",
          "Giao tiếp và quản lý tất cả nghĩa vụ với BIS thay mặt cho nhà sản xuất",
          "Chịu trách nhiệm pháp lý về tất cả tuân thủ và tài liệu",
          "Không thể là đại lý hoặc nhà phân phối trừ khi được nhà sản xuất ủy quyền rõ ràng",
        ]}
      />

      <p className="service-left-content-paragraph">
        Như một phần của thỏa thuận, AIR phải nộp thỏa thuận đã ký từ cả hai bên 
        cùng với bằng chứng địa chỉ Ấn Độ.
      </p>

      <div className="service-left-content-heading-three">Tình Huống Thực Tế:</div>

      <p className="service-left-content-paragraph">
        Công ty ABC đang lên kế hoạch giới thiệu một model mới của power bank tại Ấn Độ.
      </p>

      <PointsListWithoutHeading
        points={[
          "Công ty ABC là nhà sản xuất.",
          "Họ cho sản phẩm được kiểm tra tại một trong các phòng thí nghiệm được BIS công nhận tại Ấn Độ.",
          "Chi nhánh của họ tại Delhi đóng vai trò là AIR đã đăng ký.",
          "Họ tải đơn đăng ký lên cổng BIS cùng với tài liệu yêu cầu.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Kết quả là một chứng chỉ BIS được cấp dưới CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tài Liệu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Tài Liệu Cần Thiết Để Đăng Ký BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Danh sách tài liệu cần thiết để đăng ký BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Điền đơn đăng ký BIS CRS hoàn toàn trực tuyến, tuy nhiên vẫn cần tài liệu được điền 
        đầy đủ để có được phê duyệt. Mọi sai sót nhỏ và không tuân thủ bất kỳ khía cạnh nào, 
        chẳng hạn như loại tài liệu, định dạng sai hoặc loại tệp sai có thể khiến đơn đăng ký 
        bị từ chối hoặc trì hoãn.
      </p>

      <p className="service-left-content-paragraph">
        Để xử lý tài liệu BIS đúng cách và nhanh hơn, điều cần thiết là có tài liệu đúng 
        trong mỗi bước. Có tài liệu đúng sẵn sàng đảm bảo chứng chỉ BIS của bạn được xử lý 
        đúng giờ và luôn rõ ràng về mặt pháp lý khỏi bất kỳ cuộc kiểm tra tuân thủ, kiểm tra hải quan, 
        hoặc phê duyệt thị trường.
      </p>

      <div className="service-left-content-heading-three">
        Danh Sách Kiểm Tra Tài Liệu Cho Đăng Ký BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Tài Liệu
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Ai Nộp?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Lưu Ý
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Bằng Chứng Địa Chỉ Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Thuê nhà máy, hóa đơn tiện ích hoặc giấy phép
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Kiểm Tra Từ Phòng Thí Nghiệm Được BIS Phê Duyệt
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất/Phòng Thí Nghiệm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải mới (trong vòng 90 ngày) và tham chiếu mã IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Cam Kết (Theo Định Dạng BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Người Đăng Ký
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bao gồm trách nhiệm, tuân thủ và trách nhiệm sản phẩm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Giấy Chứng Nhận Thương Hiệu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bắt buộc nếu thương hiệu đã đăng ký
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thỏa Thuận AIR (Cho Người Đăng Ký Nước Ngoài)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất Nước Ngoài & AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Đã ký và công chứng
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tờ Khai Có Tuyên Thệ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất Hoặc AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Định dạng có thể tải xuống từ cổng BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Biên Lai Phí
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Người Đăng Ký
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bằng chứng thanh toán phí chính phủ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thư Ủy Quyền
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Ủy quyền AIR hành động thay mặt họ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Giấy Đăng Ký Công Ty
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bằng chứng đăng ký kinh doanh (GST, ROC, v.v.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn/Nhãn Sản Phẩm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải hiển thị logo BIS, tiêu chuẩn IS và không gian đăng ký
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftRegistrationSection = () => {
  return (
    <div id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Registrierungsprozess</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Quy Trình Đăng Ký BIS CRS</h2>

      <p className="service-left-content-paragraph">
        Đăng ký BIS CRS là một quy trình hoàn toàn trực tuyến thông qua cổng Đăng ký BIS. 
        Nó không chỉ bao gồm các thủ tục tải lên tài liệu. Nó cũng yêu cầu sự chú ý đặc biệt 
        về bản chất kỹ thuật, sự hiểu biết về quy định và tuân thủ hoàn toàn với 
        Tiêu chuẩn Ấn Độ (IS).
      </p>

      <p className="service-left-content-paragraph">
        Quy Trình BIS CRS, chúng tôi gọi nó là Hệ Thống Chứng Nhận và Đăng Ký (CRS) 
        cho bây giờ, và đây là cách hành trình Chứng nhận BIS diễn ra.
      </p>

      <div className="service-left-content-heading-three">
        Bước 1: Kiểm Tra Sản Phẩm Tại Phòng Thí Nghiệm Được BIS Phê Duyệt
      </div>

      <PointsListWithoutHeading
        points={[
          "Chọn một phòng thí nghiệm từ danh sách được BIS phê duyệt",
          "Nộp mẫu sản phẩm cần kiểm tra theo IS liên quan",
          "Nhận báo cáo kiểm tra cho mẫu theo định dạng báo cáo kiểm tra BIS",
        ]}
      />

      <div className="service-left-content-heading-three">Bước 2: Chuẩn Bị Tài Liệu</div>

      <PointsListWithoutHeading
        points={[
          "Thu thập các tài liệu cần thiết, như đã nêu",
          "Đảm bảo tài liệu được đặt tên, định dạng, ký và ghi ngày tháng đúng cách",
          "Phát triển nhãn sản phẩm là nhãn dán mô phỏng chứa không gian cho logo BIS và tiêu chuẩn IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 3: Điền Đơn Đăng Ký Trực Tuyến
      </div>

      <PointsListWithoutHeading
        points={[
          "Truy cập Cổng BIS CRS (https://www.bis.org.in/) và đăng nhập hoặc đăng ký",
          "Hoàn thành sản phẩm, số model, thương hiệu và đơn vị sản xuất của AIR, nếu cần",
          "Thực hiện theo các bước để thanh toán phí chính phủ",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 4: BIS Xem Xét Đơn
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS kiểm tra tài liệu hỗ trợ và báo cáo phòng thí nghiệm",
          "Nếu cần, một yêu cầu làm rõ được đưa ra thông qua cổng",
          "Trả lời bằng tài liệu đúng hoặc giải thích hợp lý",
        ]}
      />

      <p className="service-left-content-paragraph">
        Nếu là truy vấn làm rõ, phải được trả lời trong vòng 30 ngày, nếu không đơn đăng ký 
        chuyển sang tệp lưu trữ, có nghĩa là bị từ chối.
      </p>

      <div className="service-left-content-heading-three">Bước 5: Cấp Đăng Ký BIS</div>

      <PointsListWithoutHeading
        points={[
          "Chứng chỉ BIS sẽ được cấp nếu các quan chức BIS hài lòng với kết quả đánh giá họ đã tiến hành",
        ]}
      />

      <p className="service-left-content-paragraph">Chứng chỉ của bạn sẽ bao gồm:</p>

      <PointsListWithoutHeading
        points={[
          "Số đăng ký BIS",
          "Tên thương hiệu",
          "Model của sản phẩm",
          "Mã Tiêu Chuẩn IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "Nhãn sản phẩm của bạn phải chứa hoặc có e-labelling của chi tiết chứng chỉ.",
        ]}
      />

      <div className="service-left-content-heading-three">Bước 6: Dán Nhãn và Phân Phối</div>

      <PointsListWithoutHeading
        points={[
          "Sản phẩm được chứng nhận BIS phải mang:",
          "Logo BIS CRS  ",
          "Mã IS liên quan đến sản phẩm",
          "Số đăng ký BIS",
          "Số đăng ký và logo BIS phải được in hoặc nhúng kỹ thuật số theo quy định BIS.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Thời Gian Ước Tính</h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Hoạt Động
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Thời Gian Ước Tính
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Kiểm Tra Sản Phẩm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  7-10 Ngày Làm Việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thu Thập Tài Liệu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-3 Ngày
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nộp Đơn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  1 Ngày
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Xem Xét BIS + Xử Lý Truy Vấn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  10-15 Ngày Làm Việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Cấp Chứng Chỉ Cuối Cùng
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-4 Ngày Làm Việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  TỔNG CỘNG
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                  ~4 Tuần
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftFeesSection = () => {
  return (
    <div id="fees" className="flex flex-col scroll-mt-20">
      {/* Fees */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Phí Đăng Ký</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Phí Đăng Ký BIS CRS, Hiệu Lực & Hướng Dẫn Gia Hạn
      </h2>

      <p className="service-left-content-paragraph">
        Để có được chứng chỉ BIS dưới CRS, người đăng ký phải trả phí chính phủ cũng như 
        khoản thanh toán cho sản phẩm cần kiểm tra. Mặc dù quy trình là trực tuyến và giao diện 
        được tối ưu hóa, nhiều người đăng ký vẫn gặp chậm trễ trong yêu cầu của họ và 
        bị từ chối do thanh toán thiếu và đơn đăng ký nộp sai.
      </p>

      <h3 className="service-left-content-heading-three">Cơ Cấu Phí Cho Đăng Ký CRS</h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Loại Phí
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Số Tiền
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Chính Phủ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% GST mỗi báo cáo kiểm tra
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Kiểm Tra
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹10.000 – ₹20.000 + 18% GST (thay đổi tùy theo sản phẩm/phòng thí nghiệm)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Bổ Sung Trong Cùng Đơn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹20.000 + 18% GST mỗi báo cáo
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          Giá có thể được cập nhật — xác nhận trên cổng BIS hoặc với cố vấn của bạn.
        </em>
      </p>

      <h3 className="service-left-content-heading-three">Hiệu Lực & Gia Hạn Chứng Chỉ CRS</h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Tham Số
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Chi Tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Hiệu Lực Ban Đầu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2 Năm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thời Hạn Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Lên đến 5 năm (nếu không có thay đổi sản phẩm)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Quy Trình Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Trực tuyến, dựa trên tờ khai tuyên thệ mới + phí gia hạn
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Kiểm Tra Lại Cần Thiết?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Không, trừ khi thông số kỹ thuật sản phẩm/tiêu chuẩn IS thay đổi
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftELabellingSection = () => {
  return (
    <div id="elabelling" className="flex flex-col scroll-mt-20">
      {/* E-Labelling */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">E-Labelling</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">
        Hướng Dẫn E-Labelling Cho Sản Phẩm Được Chứng Nhận CRS
      </div>

      <div className="service-left-content-heading-three">E-Labelling Là Gì?</div>

      <p className="service-left-content-paragraph">
        E-Labelling là việc hiển thị thông tin tuân thủ điện tử bên trong thiết bị thay vì in và đính kèm trên thiết bị. 
        Dưới Chương Trình Đăng Ký Bắt Buộc (CRS) của BIS, một số sản phẩm, đặc biệt là thiết bị nhỏ gọn hoặc kỹ thuật số, 
        có thể hiển thị chi tiết chứng chỉ BIS, nhãn hiệu tiêu chuẩn và mã IS thông qua 
        giao diện người dùng phần mềm hoặc bao bì kỹ thuật số.
      </p>

      <div className="service-left-content-heading-three">
        Hướng Dẫn BIS Về E-Labelling: E-Labelling Điện Tử (BIS CMD 3/8:1/6975. Ngày 03.12.2015)
      </div>

      <h3 className="service-left-content-heading-three">Yêu Cầu Đối Với E-Labelling:</h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Quy Tắc
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Mô Tả
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn Vật Lý Trên Bao Bì
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Hộp sản phẩm hoặc bao bì bên ngoài phải hiển thị Logo BIS CRS 
                  và chi tiết đăng ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn Dán Có Thể Gỡ Cho Bao Bì Số Lượng Lớn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Nếu sản phẩm được vận chuyển trong bao bì số lượng lớn, nhãn dán có thể gỡ 
                  trên bao bì bên ngoài được chấp nhận.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Không Yêu Cầu Công Cụ Để Truy Cập
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Người dùng phải có thể truy cập thông tin nhãn E mà không cần công cụ 
                  hoặc phụ kiện (ví dụ: không cho phép tháo thẻ SIM).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Lập Trình An Toàn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Thông tin nhãn E phải được nhúng vào firmware/phần mềm, khóa 
                  chống thay đổi bởi bên thứ ba.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Truy Cập Theo Menu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Người dùng phải có thể truy cập thông tin trong không quá 4 bước thông qua 
                  giao diện menu của thiết bị.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Hướng Dẫn Yêu Cầu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Anweisungen zum Zugriff auf E-Etikettdetails müssen bereitgestellt werden.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        Cách Sun Certifications India có thể giúp bạn trong Đăng Ký BIS dưới 
        Chương Trình CRS
      </p>

      <div className="service-left-content-heading-three">Tại Sao Chọn Cố Vấn BIS?</div>

      <p className="service-left-content-paragraph">
        Die gesamte BIS CRS-Registrierung ist sehr technisch und umfangreich in Bezug auf
        Regeln und das Volumen der Dokumentation. Ohne gründliches
        Verständnis der indischen Standards, aktueller QCOs, der
        Struktur des Testberichts und der Workflows in der Portaloberfläche
        riskieren Antragsteller erhebliche Verluste in Form von nachfolgenden
        Maßnahmen von Verzögerungen, Ablehnung oder langfristiger aktiver Nichteinhaltung.
        Hier kommt Sun Certifications India mit einem renommierten und
        zuverlässigen Partner ins Spiel, um den Antragsteller in jedem Detail des
        Pflichtzertifizierungsschemas zu unterstützen.
      </p>
    </div>
  );
};

const PointsListWithoutHeading = ({ points }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};