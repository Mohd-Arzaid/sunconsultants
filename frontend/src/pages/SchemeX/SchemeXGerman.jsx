/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
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
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServiceAuthorGerman from "@/components/manual/ServiceAuthor/ServiceAuthorGerman";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import FooterGerman from "@/components/manual/Footer/FooterGerman";
import ScrollToTopButton from "@/components/common/ScrollToTop";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXGerman = () => {
  return (
    <div className="relative">
      {/* Scheme X Meta Tags */}
      <SchemeXGermanMetaTags />
      {/* Scheme X Breadcrumb */}
      <SchemeXGermanBreadcrumb />
      {/* Scheme X Hero Section */}
      <SchemeXGermanHero />
      {/* Scheme X Index Section */}
      <SchemeXGermanIndex />
      {/* Scheme X Main Content Section */}
      <SchemeXGermanMainContent />
      {/* Footer Section */}
      <FooterGerman />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXGerman;

const SchemeXGermanMetaTags = () => {
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
        name: "Indische BIS-Zertifizierung nach Schema-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        BIS Schema X Zertifizierung | Sicherheit von Maschinen & Elektrischen
        Geräten
      </title>
      <meta
        name="description"
        content="Die BIS Schema X Zertifizierung ist erforderlich, um die Qualität und Sicherheit von Niederspannungsschaltanlagen, Steuergeräten, Maschinen und elektrischen Geräten zu gewährleisten."
      />
      <meta
        name="keywords"
        content="Schema X, BIS Schema X, BIS Schema X Zertifizierung, Schema X Zertifizierung, Maschinenzertifizierung, elektrische Gerätezertifizierung"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="BIS Schema X Zertifizierung | Sicherheit von Maschinen & Elektrischen Geräten"
      />
      <meta
        property="og:description"
        content="Die BIS Schema X Zertifizierung ist erforderlich, um die Qualität und Sicherheit von Niederspannungsschaltanlagen, Steuergeräten, Maschinen und elektrischen Geräten zu gewährleisten."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="BIS Schema X Zertifizierung | Sicherheit von Maschinen & Elektrischen Geräten"
      />
      <meta
        name="twitter:description"
        content="Die BIS Schema X Zertifizierung ist erforderlich, um die Qualität und Sicherheit von Niederspannungsschaltanlagen, Steuergeräten, Maschinen und elektrischen Geräten zu gewährleisten."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const SchemeXGermanBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Startseite</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  Indische BIS-Zertifizierung nach Schema-X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXGermanHero = () => {
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
              BIS Schema X Zertifizierung
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Die BIS Schema X Zertifizierung umfasst Maschinen, elektrische
            Geräte sowie Komponenten, Baugruppen und Unterbaugruppen gemäß der
            Omnibus-Technischen Verordnung (OTR).
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
                Dienstleistungen ansehen
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SchemeXGermanHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXGermanHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/de/indische-bis-zertifizierung-nach-schema-x"))
      return "Scheme X German";
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
        description:
          "Der Name sollte nur Buchstaben und Leerzeichen enthalten.",
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
        description: "Die Telefonnummer muss 8-15 Ziffern haben",
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
        title: "Kontaktformular erfolgreich gesendet!",
        description:
          "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich bald bei Ihnen melden.",
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
        error.response?.data?.message || "Etwas ist schief gelaufen";
      toast({
        variant: "destructive",
        title: errorMessage || "Fehler beim Absenden des Kontaktformulars!",
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Termin buchen
      </div>

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
            placeholder="Telefonnummer *"
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
            placeholder="Erforderliche Zertifizierung *"
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
              <span>Senden</span>
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

const SchemeXGermanIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "process", "documents", "conclusion"],
    []
  );

  const MENU_ITEMS = {
    overview: "Übersicht",
    process: "Prozess",
    documents: "Dokumente",
    conclusion: "Fazit",
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
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
          aria-label="Menü umschalten"
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
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[item]}
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

const SchemeXGermanMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXGermanMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentGerman />
        </div>
      </div>
      <SchemeXGermanServiceFaq />
      <SchemeXGermanProductTable />
      <LanguageSelector />
      <div id="services">
        <ServicesGerman />
      </div>
    </div>
  );
};

const SchemeXGermanMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <SchemeXGermanMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Process Section */}
        <SchemeXGermanMainContentLeftProcessSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <SchemeXGermanMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Conclusion Section */}
        <SchemeXGermanMainContentLeftConclusionSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const SchemeXGermanMainContentLeftOverviewSection = () => {
  // Download function for table data
  const downloadTableData = () => {
    const link = document.createElement("a");
    link.href = "/pdf/schemeXproduct.pdf";
    link.download = "SchemeXproduct.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Übersicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Einführung in die BIS Schema X Zertifizierung
      </h2>

      <p className="service-left-content-paragraph">
        Das Bureau of Indian Standards (BIS) führte am 16. März 2022 das
        &ldquo;Schema X&rdquo; ein, um die Einhaltung der Produkt sicherheit und
        -qualität in Indien zu verbessern. Indische und ausländische Hersteller
        können eine BIS-Zertifizierung für Maschinen und elektrische Geräte,
        Komponenten wie Baugruppen, Unterbaugruppen und Werkzeuge beantragen,
        die in Anhang II von Schema X aufgeführt sind, bevor sie nach Indien
        exportiert, verkauft oder dort vertrieben werden.
      </p>

      <p className="service-left-content-paragraph">
        Im Rahmen von Schema X können Hersteller eine BIS-Lizenz oder eine
        Konformitätserklärung (CoC) für Niederspannungsschaltanlagen und
        Steuergeräte, Maschinen und elektrische Geräte beantragen. Nach
        erfolgter Zertifizierung dürfen die Hersteller das BIS-Standardzeichen
        verwenden, was anzeigt, dass ihre Produkte den in Indien festgelegten
        Standards entsprechen.
      </p>

      <p className="service-left-content-paragraph">
        Die Zertifizierung fördert nicht nur das Produkt und die Einhaltung der
        indischen Standards und staatlichen Vorschriften, sondern trägt auch
        dazu bei, Vertrauen und Zuversicht der Verbraucher in die zertifizierten
        Produkte aufzubauen.
      </p>

      <h2 className="service-left-content-heading-three">
        Was ist die Schema X Zertifizierung?
      </h2>

      <p className="service-left-content-paragraph">
        Schema X ist ein Produktzertifizierungssystem, das gemäß den
        BIS-Konformitätsbewertungsvorschriften von 2018 entwickelt und später
        durch die BIS-Konformitätsbewertungs-Änderungsvorschriften von 2022
        vereinfacht wurde.
      </p>

      <p className="service-left-content-paragraph">
        Das Hauptziel besteht darin, die indischen Sicherheits- und
        Qualitätsstandards auf globale Standards anzugleichen, insbesondere in
        Bezug auf Industriemaschinen und elektrische Geräte. Produkte, die im
        Rahmen dieses Systems in Indien hergestellt oder importiert werden,
        werden einer strengen Prüfung und Bewertung unterzogen, um technische,
        Sicherheits- und Leistungsstandards nachzuweisen.
      </p>

      <p className="service-left-content-paragraph">
        Die Bestimmungen zum ursprünglichen Umfang der Schema X Zertifizierung
        wurden durch die neu erlassene Verordnung über Maschinen- und
        Elektrogerätesicherheit (Omnibus-Technische Verordnung) von 2024
        überarbeitet und erweitert, die unter der Zuständigkeit des Ministeriums
        für Schwerindustrie steht und vom BIS durchgesetzt wird. Die Verordnung
        tritt am 1. September 2026 in Kraft und umfasst eine breite Palette von
        Maschinen und elektrischen Geräten wie Pumpen zur
        Flüssigkeitshandhabung, Kompressoren, Krane, rotierende elektrische
        Maschinen, Transformatoren sowie Schaltanlagen und Steuergeräte.
      </p>

      <p className="service-left-content-paragraph">
        Baugruppen, Unterbaugruppen und Komponenten solcher Maschinen oder
        Geräte sind ebenfalls gemäß Abschnitt 16 des Bureau of Indian Standards
        Act von 2016 Teil des Zertifizierungsumfangs.
      </p>

      <p className="service-left-content-paragraph">
        Darüber hinaus wird im Rahmen der CMVR-Vorschriften von 1989 (Bau und
        Herstellung von Ventilregulierung) sichergestellt, dass Bowser und
        andere Arten von Baumaschinen, die unter die Zuständigkeit von Schema X
        fallen, nicht auf den Markt gelangen, wenn sie die erforderlichen
        Sicherheits- und technischen Standards nicht erfüllen.
      </p>

      <h2 className="service-left-content-heading-three">
        Omnibus-Technische Verordnung (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        Das Ministerium für Schwerindustrie veröffentlichte die
        &ldquo;Omnibus-Technische Verordnung über Sicherheitsverordnungen
        (Maschinen- und Elektrogerätesicherheit)&rdquo; durch eine
        E-Gazette-Bekanntmachung vom 28. August 2024. Diese innovative
        Verordnung zielt darauf ab, die Sicherheit, Qualität und Einhaltung von
        Maschinen, elektrischen Geräten und deren Baugruppen, Unterbaugruppen
        und Komponenten gemäß Schema X der BIS-Verordnung von 2016 zu
        verbessern.
      </p>

      <p className="service-left-content-paragraph">
        Im Rahmen der OTR sind alle Kategorien von Maschinen und elektrischen
        Geräten sowie alle ihre Teile und Komponenten enthalten. Einige
        Kategorien sind jedoch ausdrücklich ausgenommen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Jegliche Maschinen und Komponenten, die Teil einer anderen Verordnung gemäß Abschnitt 16 sind, die gemäß dem Bureau of Indian Standards Act von 2016 erlassen wurde.",
          "Für den Export bestimmte hergestellte Inlandsgüter und Artikel.",
          "Baumaschinen und -geräte, die den CMVR-Vorschriften von 1989 unterliegen, die vom Ministerium für Straßenverkehr und Autobahnen (MoRTH) vorgeschrieben sind.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Diese Ausnahmen dienen dazu, die Einhaltung zu erleichtern und unnötige
        Doppelregelungen zu vermeiden, um die Geschäftstätigkeit zu fördern.
      </p>

      <p className="service-left-content-paragraph">
        Die Omnibus-Technische Verordnung 2024 umfasst alle vom Ministerium für
        Schwerindustrie gemeldeten Maschinen und elektrischen Geräte,
        einschließlich Niederspannungsschaltanlagen und Steuergeräten, die im
        Rahmen von Schema X der BIS-Zertifizierung behandelt werden. Die
        Verordnung tritt am 1. September 2026 in Kraft, sodass Hersteller und
        Importeure ausreichend Zeit haben, ihre Abläufe gemäß den erlassenen
        Verordnungen zu ändern.
      </p>

      <h2 className="service-left-content-heading-three">
        BIS-Zertifizierung gemäß der Omnibus-Technischen Verordnung
      </h2>

      <p className="service-left-content-paragraph">
        Gemäß der OTR 2024 müssen Hersteller sowie Importeure von Maschinen und
        elektrischen Geräten, einschließlich Pumpen, Kompressoren, Zentrifugen,
        Kranen, Transformatoren und Schaltanlagen, eine BIS-Zertifizierung gemäß
        Schema X beantragen.
      </p>

      <p className="service-left-content-paragraph">
        Im Rahmen von Schema X können Hersteller einen Antrag stellen für:
      </p>

      <PointsListWithoutHeading
        points={["Eine BIS-Lizenz, oder", "Eine Konformitätserklärung (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Produkte mit dem BIS-Standardzeichen, das ein Konformitätszeichen ist,
        das den Benutzern zertifiziert und versichert, dass das Produkt sicher,
        zuverlässig und von guter Qualität ist. Es ist auch ein Zeichen für
        Vertrauen und wirklich gute Leistung.
      </p>

      <div className="service-left-content-heading-three">
        Besonderer Hinweis für KMU
      </div>

      <p className="service-left-content-paragraph">
        Wie in vielen anderen Sektoren müssen auch Mikro-, Klein- und
        Mittelunternehmen (KMU) Schema X einhalten und eine BIS-Zertifizierung
        für ihre Maschinen und elektrischen Geräte erhalten. Obwohl die
        Einhaltung der regulatorischen Anforderungen herausfordernd erscheinen
        mag, ist das Schema X Zertifikat aus folgenden Gründen ein Mehrwert und
        Vorteil für KMU:
      </p>

      <PointsListWithoutHeading
        points={[
          "Nachweis der Einhaltung gesetzlicher und anderer erforderlicher Verpflichtungen, die von der Regierung festgelegt wurden.",
          "Erhöhung des Ansehens des Produkts und des Verbrauchervertrauens.",
          "Erleichterung des Zugangs zu größeren inländischen und ausländischen Märkten.",
          "Verbesserung der globalen Position des KMU in Bezug auf Wettbewerbsfähigkeit, Sicherheit und Qualität.",
        ]}
      />

      <h2 className="service-left-content-heading-three">BIS Schema X Logo</h2>

      <p className="service-left-content-paragraph">
        Das BIS-Standardzeichen von Schema X bildet ein Qualitätszeichen und ein
        Prinzip des Vertrauens. Das Logo enthält:
      </p>

      <PointsListWithoutHeading
        points={[
          "die Standardnummer wird im oberen Teil des Logos angezeigt; und",
          "die Lizenznummer wird im unteren Teil des Logos im Format: CM/L-XXXXXXXXXX angezeigt",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dieses Zeichen bedeutet, dass dem Hersteller erfolgreich eine BIS-Lizenz
        erteilt wurde. Es berechtigt den Hersteller, das BIS-Zeichen anzubringen
        und versichert den Verbrauchern, dass das Produkt authentisch und sicher
        ist.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Schema X Logo"
          title="BIS Schema X Zertifizierung"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">
        Rechtliche Auswirkungen
      </div>

      <p className="service-left-content-paragraph">
        Das BIS-Standardzeichen ist ein Zeichen für Vertrauen und Qualität. Das
        Zeichen ist erst verfügbar, nachdem ein gültiger Vertrag vorliegt. Nur
        ein gültiger Vertrag erlaubt dem Eigentümer die Verwendung des Zeichens.
        Die Verwendung des Zeichens ohne gültigen Vertrag ist ein Verstoß nach
        der indischen Verfassung und entspricht einem rechtlichen Zeichen. Der
        Eigentümer des Zeichens unterliegt schweren Beschränkungen für die
        Verwendung der Lizenz CM/L-XXXXXXXXXX für Produkte, die keine
        BIS-Zertifizierung haben.
      </p>

      <p className="service-left-content-paragraph">
        Es folgt, dass jeder Hersteller verpflichtet ist:
      </p>

      <PointsListWithoutHeading
        points={[
          "Eine gültige BIS-Lizenz gemäß Schema X zu erwerben.",
          "Die relevanten Anforderungen der indischen Standards zu erfüllen; und",
          "Die Produkte ordnungsgemäß mit dem genehmigten BIS-Logo zu versehen.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dieser regulatorische Rahmen dient dem Schutz der Interessen von
        Verbrauchern und Geschäftsleuten und fördert einen Markt, der
        Sicherheit, Offenheit und Vertrauen betont.
      </p>

      <h2 className="service-left-content-heading-three">
        Hauptunterschiede zwischen Schema-I und Schema-X
      </h2>

      <h3 className="service-left-content-heading-three">Schema-I</h3>

      <PointsListWithoutHeading
        points={[
          "Umfasst eine breitere Kategorie von Verbraucherprodukten wie Elektronik, Haushaltsgeräte und sogar Industrieprodukte.",
          "Produkte, denen im Rahmen dieses Systems ein Zertifikat ausgestellt wurde, müssen das Standard-ISI-Zeichen tragen.",
          "Bezieht sich sowohl auf inländische als auch auf ausländische Hersteller.",
          "Umfasst Werksaudits und Probenprüfungen zur Bestimmung der Qualität und Einhaltung der indischen Standards.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Schema-X</h3>

      <PointsListWithoutHeading
        points={[
          "Betrifft hochriskante industrielle und sicherheitskritische technische Produkte, einschließlich elektrischer Geräte, Maschinen und wichtiger Industriesysteme.",
          "Die Zertifizierung ist strenger als Schema-I. Sie umfasst erweiterte technische Berichterstattung, Compliance-Prüfungen und umfassende Zertifizierungsaudits.",
          "Schema-X ist aufgrund der zusätzlichen Compliance-Dokumentation tendenziell teurer als Schema-I.",
          "Jedes Unternehmen, das mit elektrischen Geräten oder Industriemaschinen handelt, ist verpflichtet, eine Zertifizierung gemäß Schema-X zu erhalten.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Merkmal
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI-Zeichen
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Schema X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Verwaltet von
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indisches BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indisches BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Zertifizierungsart
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS-Lizenz
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS-Zertifikat / BIS-Lizenz
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Zielprodukte
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Verbrauchsgüter
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Maschinen & elektrische Geräte
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Verwendetes Zeichen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISI-Zeichen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS-Standardzeichen (gemäß Schema X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Compliance-Niveau
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Einhaltung indischer Standards
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Hochwertige technische und Sicherheits-Compliance
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">
        Von Schema-X abgedeckte Produkte
      </h2>

      <p className="service-left-content-paragraph">
        Schema-X umfasst Produkte mit dem höchsten Risiko für Sicherheit und
        Leistung, einschließlich:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektrische Geräte: Industrielle Transformatoren, Netzteile und dergleichen, Niederspannungsschaltanlagen und Steuergeräte sowie andere Hochspannungsgeräte.",
          "Schwere Maschinen: Hydraulikpressen, Industriekrane, automatisierte Werkzeugmaschinen und spezielle Ausrüstung für großmaßstäbliche Industrien.",
          "Lebenskritische Geräte: Feuerlöscher, Druckbehälter, elektrische Notfallsysteme und andere Geräte und Systeme für die Lebenssicherheit.",
          "Spezialisierte Verbraucher- und Industrieelektronik: Medizintechnische elektronische Geräte und Ausrüstung mit fortschrittlichen Schutzmaßnahmen.",
        ]}
      />

      {/* Schema X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Seriennr.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Beschreibung von Maschinen und elektrischen Geräten
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HS-Code
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-pumpen-und-fluessigkeitsaufzuege"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Pumpen zur Flüssigkeitshandhabung,
                  Flüssigkeitshebevorrichtungen und (oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 and
                841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-kompressoren"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Kompressoren und(oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                and 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-waermebehandlungsausruestung"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen zur Behandlung von Material durch
                  einen Prozess mit Temperaturänderung und(oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 and
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-zentrifugen-und-filter-oder-reinigungsmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Zentrifugen, Filter- oder Reinigungsmaschinen
                  für Flüssigkeit und Gas und(oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 and 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-verpackungsmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen zum Füllen, Verschließen, Versiegeln,
                  Etikettieren von Flaschen, Verpacken oder Umwickeln und(oder)
                  ihre Baugruppen/Unterbaugruppen/Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 and 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-kranen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Kranen und (oder) ihre Baugruppen
                  /Unterbaugruppen/Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                and 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-baumaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen für Bau, Erdarbeiten, Bergbau und
                  (oder) ihre Baugruppen /Unterbaugruppen/Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 and 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-webmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Webmaschinen (Webstühlen) und (oder) ihre
                  Baugruppen/Unterbaugruppen / Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 and 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-stickmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen zur Stickereiherstellung und(oder)
                  ihre Baugruppen /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 and 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-metallschneidemaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Metallschneidewerkzeugmaschinen, die unter die
                  Überschrift 8456 bis 8461 fallen und(oder) ihre Baugruppen
                  /Unterbaugruppen/Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 and 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-werkzeugmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Werkzeugmaschinen zur Bearbeitung von Stein,
                  Keramik, Beton, Asbestzement oder ähnlichem Mineralglas und
                  (oder) ihre Baugruppen /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 and 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-kautschuk-und-kunststoffmaschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen zur Bearbeitung von Gummi und
                  Kunststoff und(oder) ihre Baugruppen /Unterbaugruppen
                  /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8477
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                13
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-baumaschinen-und-mechanische-geraete"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Maschinen einschließlich der Maschinen für
                  öffentliche Arbeiten & Bauwesen und die Maschinen &
                  mechanischen Geräte mit individuellen Funktionen, nicht
                  spezifiziert oder anderweitig in Kapitel 84 enthalten
                  und(oder) ihre Baugruppen/Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 and 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-zahnraeder-getriebe-und-uebertragungselemente"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Zahnrädern und Getrieben, Zahnrädern,
                  Kettenrädern, Übertragungselementen Kugel- oder Rollschrauben,
                  Getrieben und Geschwindigkeitswechslern, einschließlich
                  Drehmomentwandlern Und (oder) ihre Baugruppen /Unterbaugruppen
                  /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 and 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-rotierende-elektrische-maschinen"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von rotierenden elektrischen Maschinen wie
                  Generator usw. und (oder) ihre Baugruppen /Unterbaugruppen
                  /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-dieselgeneratoren"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Dieselgeneratoren und (oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-transformatoren"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Transformatoren und (oder) ihre Baugruppen
                  /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 and
                850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-leistungshalbleiter-wandler"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Leistungshalbleiterumrichtern und (oder) ihre
                  Baugruppen /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850440
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                19
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-bis-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Schaltanlagen und Steuergeräten, die bei
                  Spannungen von nicht mehr als 1000 Volt betrieben werden und
                  (oder) ihre Baugruppen /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 and 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-schema-x-zertifizierung-fuer-schalt-und-steuergeraete-ueber-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle Arten von Schaltanlagen und Steuergeräten, die bei
                  Spannungen von mehr als 1000 Volt betrieben werden und (oder)
                  ihre Baugruppen /Unterbaugruppen /Komponenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 and 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <div className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Produktweise Sicherheitsstandards
          </div>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Beschreibung von Maschinen und elektrischen Geräten
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={downloadTableData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            PDF herunterladen
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Sicherheitsstandards gemäß BIS Schema - X
      </h2>

      <p className="service-left-content-paragraph">
        Mehr als nur eine gesetzliche Notwendigkeit bietet die BIS Schema - X
        Zertifizierung ein Versprechen für Sicherheit, Qualität und
        Zuverlässigkeit. Diese Zertifizierung, die eine strikte Einhaltung
        nationaler und internationaler Normen erfordert, stellt sicher, dass die
        Maschinen und elektrischen Geräte, die den Benutzern angeboten werden,
        sicher, umweltfreundlich und technisch einwandfrei sind.
      </p>

      <p className="service-left-content-paragraph">
        Um nach Schema - X zu zertifizieren, müssen Hersteller die folgenden
        wichtigen Sicherheitskomponenten einhalten:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektrische Sicherheit: Einhaltung der geltenden IEC- und indischen Standards. Die Zertifizierung schützt vor Kurzschlüssen, elektrischen Schlägen, Isolationsdurchbruch, Verlust der Schutzerde, Zündung von umgebenden brennbaren Materialien und Feuer.",
          "Mechanische Sicherheit: Bewertung der strukturellen Integrität der Maschine und der Integrität beweglicher Teile und neuer Materialien. Stellt sicher, dass Geräte sicher mechanischem Stress, Verschleiß und betrieblichen Gefahren ausgesetzt sind.",
          "Brandschutz: Die Verwendung von Materialien, die mit feuerbeständigem Material entworfen und gebaut sind. Einhaltung von Standards für die Flammenausbreitungsleistung zur Kontrolle der mit Feuer verbundenen Risiken.",
          "Umwelt-Compliance: Die Verwendung von kontrollierter Energie und umweltfreundlichen Materialien in der Produktion von Geräten. Ermutigt Hersteller, die Umweltauswirkungen ihrer Geräte zu verringern.",
          "Qualitätsmanagement: Dominante und autonome Kontrolle der Produktionsprozesse zur Aufrechterhaltung der voreingestellten Standards und Normen. Fokus auf Regulierung der Werksbedingungen, einschließlich Prozessaudits und kontinuierlicher Einhaltung.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Regulierungsstandards gemäß Schema-X
      </h2>

      <p className="service-left-content-paragraph">
        Hersteller müssen die relevanten indischen Standards einhalten, die mit
        den internationalen Standards übereinstimmen, einschließlich:
      </p>

      <h3 className="service-left-content-heading-three">Typ A Standards:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Sicherheit von Maschinen: Allgemeine Grundsätze für die Konstruktion, Risikobeurteilung und Risikominderung.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Typ B Standards:</h3>

      <PointsListWithoutHeading
        points={[
          "Beschrieben im zweiten Anhang der Omnibus-Technischen Verordnung (OTR) von 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Typ C Standards:</h3>

      <PointsListWithoutHeading
        points={["Beschrieben im dritten Anhang der OTR-Verordnung von 2024."]}
      />

      <h3 className="service-left-content-heading-three">
        IS/IEC 60947 Serie:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Abdeckung von Niederspannungsschaltanlagen und Steuergeräten in mehreren Teilen und Abschnitten.",
        ]}
      />
    </div>
  );
};

const SchemeXGermanMainContentLeftProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Prozess</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Schritte zur Zertifizierung nach BIS Schema-X
      </h2>

      <p className="service-left-content-paragraph">
        Die Ausstellung eines BIS-Zertifikats gemäß Schema-X ist eine
        systematische Aktivität, die sicherstellen soll, dass der Hersteller die
        anwendbaren Sicherheits-, Qualitäts- und Compliance-Standards erfüllt
        hat. Der Prozess verläuft wie folgt:
      </p>

      <PointsListWithoutHeading
        points={[
          "Umfang verifizieren: Bestimmen Sie, ob Ihr Produkt in den Umfang von Schema-X fällt und ob es den BIS-Sicherheitsanforderungen entspricht. Überprüfen Sie die relevanten indischen Standards und den technischen Zeitplan, um festzustellen, ob Sie in der Lage sein werden, die Einhaltung zu gewährleisten.",
          "Erforderliche Dokumente vorbereiten: Hersteller müssen die folgenden Dokumente sammeln und arrangieren: Registrierte Geschäftszertifikate, Entwurfsgrundlagendokumente, Werks- und Prozessablauffokumente, Service-Testberichte (falls zutreffend), Qualitätssicherungs- und Kontrolldokumente.",
          "Technische Akte erstellen: Eine technische Akte ist ein unverzichtbarer Bestandteil des Antrags auf Verlängerung eines Zertifikats. Sie sollte enthalten: Technische Spezifikationen des Produkts, Methoden- und Technikinformationen, Compliance- und Testdokumente, Einschränkung und beabsichtigter Zweck des Produkts, Qualitätssicherungsdokumentation, Rückverfolgbarkeit von Rohstoffen, Unterauftragsverfolgbarkeit und der Rest der Nachweise, Konformität mit den Standards im festgelegten Rahmen.",
          "Das Antragsformular: Das Antragsformular kann elektronisch auf der BIS-Website für den angegebenen Ort eingereicht werden. Die Begleichung der Antragsgebühr ist ein Muss. Die restlichen Dokumente zur Überprüfung des Antrags sollten für eine ordnungsgemäße Bewertung beigefügt werden.",
          "Werksinspektion: Für inländische Hersteller: Die Inspektion wird über einen Zeitraum von maximal 2 Tagen durchgeführt. Für ausländische Hersteller: Die Inspektion wird über einen Zeitraum von maximal 3 Tagen durchgeführt (zusätzliche Tage können aufgrund zusätzlicher Anfragen anfallen).",
          "Prüfung von Produktmustern: Die Musterprüfung wird entweder am Standort des Herstellers oder in ausgelagerten BIS-genehmigten Labors durchgeführt (Auslagerungstests sind zulässig). Die Prüfung zeigt die Erfüllung der relevanten indischen Standards.",
          "Ausstellung der Zertifizierung: Wenn ein Produkt alle Bedingungen erfüllt, erteilt BIS jedem Produkt eine Lizenz oder eine Konformitätserklärung (CoC). Das BIS-Standardzeichen kann vom Hersteller frei auf allen zertifizierten Produkten verwendet werden.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Diese Akte dient als technischer und statistischer Beweis für die
        Produktbehauptung, die die Sicherheitsverfolgungsstandards unterstützt.
      </p>

      <p className="service-left-content-paragraph">
        Während des Inspektionszeitraums wird von den BIS-Beamten erwartet, dass
        sie: Die technische Akte analysieren, Die Herstellungsweisen zusammen
        mit unterstützenden Qualitätssicherungssystemen bewerten, Die Prüfung
        des Produkts beobachten, Nichtkonformität (falls vorhanden) bestimmen
        und Abhilfemaßnahmen angeben. Ein detaillierter Bericht der Prüfung wird
        dem Antragsteller nach dem Besuch zur Verfügung gestellt.
      </p>

      <p className="service-left-content-paragraph">
        Diese Strategie hält die Einhaltung des BIS-Standards aufrecht und ist
        eine Anerkennung der indischen und internationalen Compliance, die die
        Branche auf das Verbrauchervertrauen in Sicherheit und Qualität
        ausrichtet.
      </p>

      <h2 className="service-left-content-heading-three">
        Verfahren für inländische Hersteller
      </h2>

      <p className="service-left-content-paragraph">
        Inländische Hersteller folgen einem direkten Ansatz zur Erlangung der
        BIS-Lizenz gemäß Schema-X. Die direkten Schritte umfassen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Dokumentation: Alle Dokumente, die das Schema betreffen, müssen gesammelt und vorbereitet werden.",
          "Ausführung des Antrags: Der Antrag ist zusammen mit den relevanten Gebühren vorzulegen.",
          "Anfrage zum Antrag: Jeder eingereichte Antrag wird geprüft und eine anschließende Reihe von Fragen wird von BIS generiert.",
          "Ernennung von Prüfern: Prüfer werden von BIS ernannt, aber die nominierte Person unterliegt der Zahlung der Prüfgebühren.",
          "Werksaudit: Eine Untersuchungs- und Vermessungsarbeitsaudit wird vor Ort durchgeführt und relevante Proben werden gesammelt.",
          "Probenbewertung: Die Proben werden in einem BIS-anerkannten Labor bewertet. Der Antragsteller zahlt alle BIS-anerkannten Laborprüfgebühren.",
          "Zahlung von Lizenz- und Kennzeichnungsgebühren: Die erforderlichen Zahlungen werden an BIS geleistet.",
          "Erteilung der Lizenzierung: Das Zertifikat zur Erteilung der Erlaubnis zur Verwendung des BIS-Zeichens wird von BIS verliehen.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Typische Zeitlinie:</strong> Nahe 90 Arbeitstage (gemäß
        BIS-Praxis) werden benötigt. Dies setzt voraus, dass keine wesentlichen
        Nichtkonformitäten vorliegen.
      </p>

      <h2 className="service-left-content-heading-three">
        Verfahren für ausländische Hersteller
      </h2>

      <p className="service-left-content-paragraph">
        Im Gegensatz zu inländischen Herstellern müssen ausländische Hersteller,
        die ein BIS-Zertifikat gemäß Schema-X beantragen, ein strengeres
        Verfahren und zusätzliche Schritte einhalten. Das Verfahren ist wie
        folgt ausführlich beschrieben.
      </p>

      <PointsListWithoutHeading
        points={[
          "Vorbereitung der Dokumentation: Geschäftsregistrierung, das Produkt und Werkslayout, Testberichte und die zugehörigen Qualitätsmanagementdokumente müssen alle im konfigurierten Ordner zur Einhaltung vorliegen.",
          "Einreichung des Antrags: Der Antrag, die erforderliche Gebühr und alle Antragsunterlagen sind über das BIS-Online-Portal einzureichen.",
          "Aufzeichnung des Antrags und Prüfung: Der Antrag wird von BIS aufgezeichnet und eine Überprüfung der Dokumente wird durchgeführt. Alle Probleme, die BIS haben könnte, müssen vom Antragsteller rechtzeitig gelöst werden.",
          "Prüferzuweisung und Zahlung: BIS-Prüfer, die für Werksinspektionen verantwortlich sind, werden dem Antragsteller für die Prüfung zugewiesen. Der Antragsteller muss die festgelegten Gebühren für die durchgeführte Prüfung zahlen, wie durch die anwendbaren Rechtsvorschriften festgelegt.",
          "Prüfungsvorbereitung: Ausländische Hersteller sind für logistische Arrangements für die Prüfung verantwortlich, wie z.B. Visumausstellung, Flugtickets und Hotelreservierungen für BIS-Beamte werden arrangiert und bezahlt.",
          "Werksaudit & Probenauswahl: BIS-Beamte führen ein Werksaudit über 3 Tage durch (weitere Tage können hinzugefügt werden, wenn weitere Anträge benötigt werden).",
          "Produktprüfung: Ausgewählte Proben werden zur Prüfung an ein BIS-akkreditiertes Labor weitergeleitet. In einigen Fällen wird die Prüfung an andere Prüflabore vergeben, und die Zahlung erfolgt über das Hauptprüflabor.",
          "Zahlung von Kennzeichnungs- und Lizenzgebühren: Nach erfolgreicher Prüfung und Testergebnissen muss der Hersteller die erforderliche Kennzeichnungsgebühr und Lizenzgebühr an BIS zahlen.",
          "Erteilung der Lizenz: BIS erteilt die Lizenz/Konformitätserklärung (CoC), sobald alle Bedingungen vollständig befolgt wurden. BIS erlaubt dem Hersteller dann die Verwendung des BIS-Standardzeichens auf anderen zertifizierten Produkten, sobald die Konformität bestätigt ist.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Das Audit umfasst: Bewertung der Qualitätssicherungssysteme und der
        Arbeitsabläufe in den Herstellungsprozessen, Bewertung der Compliance
        und der technischen Dokumentation, Unabhängige Testprobenauswahl.
      </p>

      <p className="service-left-content-paragraph">
        Der gesamte Prozess dauert, basierend auf den Praktiken von BIS,
        ungefähr 6-7 Monate.
      </p>

      <h3 className="service-left-content-heading-three">
        Wichtige zusätzliche Hinweise für ausländische Hersteller:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Klassifizierung FMCS: Alle ausländischen Hersteller werden als 'Großbetrieb' im Rahmen des Foreign Manufacturers Certification Scheme klassifiziert. Diese Klassifizierung erfolgt unabhängig vom Umfang der durchgeführten Operationen.",
          "Autorisierter indischer Vertreter (AIR): Jeder ausländische Hersteller muss einen autorisierten indischen Vertreter (AIR) benennen. Der AIR ist die primäre Kontaktstelle für den ausländischen Antragsteller und BIS, verantwortlich für Compliance, Zusammenarbeit und die Aufrechterhaltung der BIS-Lizenz.",
          "Werksaudits: Werksaudits für ausländische Hersteller sind umfassend und dauern in der Regel 3 Tage. Außerdem sind im Falle mehrerer eingereichter Produktanträge weitere Tage erforderlich.",
        ]}
      />
    </div>
  );
};

const SchemeXGermanMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumente</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Hauptdokumente, die für die BIS Schema X Zertifizierung erforderlich
        sind
      </h2>

      <p className="service-left-content-paragraph">
        Um den BIS-Zertifizierungsprozess zu optimieren, müssen Hersteller die
        folgenden Dokumente während der Registrierungsphase sammeln und
        einreichen:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Nr.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Erforderliches Dokument
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Name und Adresse (Werk & Büro)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Vollständiger rechtlicher Name und physische Adressen des
                Produktionsstandorts und Büros
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PAN- und GST-Informationen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Permanent Account Number (PAN) und GST-Registrierungsdetails
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Kontaktdaten
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                E-Mail-Adresse, Handynummer und Festnetz für offizielle
                Kommunikation
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Managementdetails
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Namen, Rollen und IDs von Schlüsselverantwortlichen und
                bevollmächtigten Unterzeichnern
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Produktbeschreibung
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Details zu Maschinen und Geräten, die unter das Erste Schedule
                der Omnibus-Technischen Verordnung fallen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Produktklassifizierung
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Spezifischer Typ, Modell und Sorte, für die eine BIS-Lizenz
                beantragt wird
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Technische Akte
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Alle technischen Details zum Produkt und Details über die
                Produktionseinheit.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Gültigkeit und Erneuerungsprozess des Schema-X-Zertifikats:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Lizenzgültigkeit und Erneuerung: BIS-Lizenzen gemäß Schema-X werden für einen Zeitraum von 3 bis 6 Jahren für die kontinuierliche Produktion ausgestellt. Nach Ablauf des Zeitraums kann die Lizenz für denselben Zeitraum durch Einreichung eines Erneuerungsantrags, der erforderlichen Gebühr und Compliance-Dokumente erneuert werden.",
          "Konformitätserklärung (CoC): Eine CoC wird für einmalige Produktion ausgestellt und gilt sowohl für inländische als auch für ausländische Hersteller. Da sie nur für eine einzelne Charge gilt, hat eine CoC keine Erneuerungsoption.",
          "Bericht über Produkttests: Wenn Testberichte im Labor des Herstellers erstellt werden, überprüfen die BIS-Beamten sie während der Werksinspektion durch Durchführung von Zeugenprüfungen. Wenn Tests in ausgelagerten Einrichtungen durchgeführt werden, werden auch diese Einrichtungen von BIS inspiziert und genehmigt.",
          "Überprüfung des Erneuerungsantrags: Für ununterbrochene Gültigkeit muss ein Hersteller weiterhin die Bestimmungen von Schema-X einhalten. Gemäß Verordnung 8 der BIS-Konformitätsbewertungsvorschriften bearbeitet das Bureau of Indian Standards den Erneuerungsantrag in Formular VIII. Die Erneuerung erfolgt erst nach zufriedenstellender Überprüfung der Einhaltung.",
        ]}
      />
    </div>
  );
};

const SchemeXGermanMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Fazit</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Fazit</h2>

      <p className="service-left-content-paragraph">
        Die BIS Schema-X Zertifizierung bleibt entscheidend für die
        Aufrechterhaltung der Sicherheit, Zuverlässigkeit und Qualität von
        Niederspannungsschaltanlagen und Steuergeräten, Maschinen und
        elektrischen Geräten. Für die Hersteller von Werkzeugmaschinen, die für
        die Bearbeitung von Stein, Keramik, Beton, Asphaltbindemittel und
        Mineralglas gelten, ist die BIS Schema-X Zertifizierung obligatorisch.
      </p>

      <p className="service-left-content-paragraph">
        Durch die Erfüllung dieser Verpflichtungen garantieren Hersteller die
        Produktkonformität, erhöhen das Verbrauchervertrauen und verbessern ihre
        Glaubwürdigkeit auf dem Markt. Schema-X stellt sicher, dass die
        Produktion so reibungslos wie möglich verläuft, weltweite
        Sicherheitsstandards erfüllt werden und die anerkannten Marken einen
        positiven Ruf erlangen.
      </p>
    </div>
  );
};

const SchemeXGermanServiceFaq = () => {
  const faqData = [
    {
      question: "1. Was ist Schema X im Rahmen der BIS-Zertifizierung?",
      answer:
        "Schema X ist ein Konformitätsbewertungssystem, das von der indischen BIS für Maschinen und elektrische Geräte eingeführt wurde. Es gewährleistet die Einhaltung strenger Sicherheits- und technischer Standards, wie in der Omnibus-Technischen Verordnung festgelegt.",
    },
    {
      question:
        "2. Unterscheidet sich Schema X von der ISI-Zeichen-Zertifizierung?",
      answer:
        "Ja. Das ISI-Zeichen ist im Allgemeinen für Verbrauchsgüter und grundlegende Produktkonformität gedacht, während Schema X für komplexe und industrietaugliche Produkte gilt, die fortgeschrittene Tests und Zertifizierung durch ein BIS-Zertifikat oder eine BIS-Lizenz erfordern.",
    },
    {
      question: "3. Wer muss eine Schema X Zertifizierung beantragen?",
      answer:
        "Hersteller und Importeure von Maschinen und elektrischen Geräten, die gemäß der Omnibus-Technischen Verordnung aufgeführt sind, müssen Schema X beantragen und eine gültige BIS-Zertifizierung erhalten, um ihre Produkte in Indien legal zu verkaufen oder zu vertreiben. Globale Hersteller oder ausländische Hersteller, die beabsichtigen, Produkte in Indien zu verkaufen, müssen ebenfalls diese Vorschriften einhalten.",
    },
    {
      question:
        "4. Wie hoch sind die Kosten für die BIS Schema X Zertifizierung?",
      answer:
        "Die Kosten für Schema X umfassen Antragsgebühren, Zertifizierungsgebühren, Gebühren für die Überprüfung der technischen Akte, Kosten für Werksinspektionen und Produktprüfgebühren. Im Durchschnitt beginnt es bei ₹2.000 für den Antrag und kann je nach Produktkomplexität steigen. Für weitere Details kontaktieren Sie uns unter info@sunconsultants.co.in.",
    },
    {
      question:
        "5. Wie lange dauert es, eine BIS-Lizenz gemäß Schema X zu erhalten?",
      answer:
        "Die Zeitspanne variiert je nach Dokumentation, Testanforderungen und Werksinspektionen. Typischerweise dauert es 4-6 Wochen ab dem Datum der erfolgreichen BIS-Registrierung und Antragseinreichung für indische Hersteller und 60-90 Tage für ausländische Hersteller.",
    },
    {
      question:
        "6. Können KMU auch eine BIS-Zertifizierung gemäß Schema X beantragen?",
      answer:
        "Absolut. Tatsächlich ermutigt die indische BIS KMU, eine BIS-Lizenz oder Konformitätserklärung gemäß Schema X zu beantragen, um Qualität, Compliance und Wettbewerbsfähigkeit im Industriesektor zu fördern.",
    },
    {
      question:
        "7. Ist die BIS-Zertifizierung gemäß Schema X für Exporte obligatorisch?",
      answer:
        "Nein. Produkte, die ausschließlich für den Export hergestellt werden, sind gemäß der Omnibus-Technischen Verordnung ausgenommen. Produkte, die für indische Märkte bestimmt sind, müssen jedoch gemäß Schema X zertifiziert werden.",
    },
    {
      question: "8. Was ist die Gültigkeit der BIS-Lizenz gemäß Schema X?",
      answer:
        "Eine BIS-Lizenz gemäß Schema X ist in der Regel 3-6 Jahre gültig und muss entsprechend erneuert werden. Die Erneuerung beinhaltet die Zahlung der jährlichen BIS-Zertifizierungsgebühr und kann je nach Änderungen im Produktumfang oder den Standards eine Neubewertung erfordern.",
    },
    {
      question:
        "9. Können ausländische Hersteller eine Schema X Zertifizierung beantragen?",
      answer:
        "Ja, ausländische Hersteller können eine Schema X Zertifizierung über einen autorisierten indischen Vertreter beantragen. Die indische BIS erfordert eine Werksinspektion, die für ausländische Antragsteller 3 Tage dauern kann, zusammen mit Standard-BIS-Registrierungs- und Testverfahren.",
    },
    {
      question:
        "10. Was ist eine technische Akte und warum ist sie erforderlich?",
      answer:
        "Eine technische Akte ist ein detailliertes Compliance-Dossier, das gemäß Schema X erforderlich ist. Sie umfasst Herstellungsprozesse, Produktdetails, Testberichte und Qualitätskontrolldokumente. Sie unterstützt die Konformität des Produkts mit relevanten indischen Standards während des BIS-Zertifizierungsprozesses.",
    },
    {
      question:
        "11. Wie hängt Schema X mit der Omnibus-Technischen Verordnung zusammen?",
      answer:
        "Die Omnibus-Technische Verordnung schreibt die Verwendung von Schema X für bestimmte Kategorien von Maschinen und elektrischen Geräten in Indien vor. Produkte, die gemäß der Verordnung aufgeführt sind, müssen gemäß Schema X zertifiziert werden, um ein gültiges BIS-Zertifikat oder eine BIS-Lizenz zu erhalten.",
    },
    {
      question: "12. Kann ein BIS-Zertifikat gemäß Schema X widerrufen werden?",
      answer:
        "Ja. Die indische BIS kann eine BIS-Lizenz oder ein Zertifikat gemäß Schema X aussetzen oder widerrufen, wenn während der Überwachung Nichtkonformität festgestellt wird oder wenn das Produkt die erforderlichen indischen Standards nicht erfüllt.",
    },
    {
      question:
        "13. Was ist der Unterschied zwischen BIS-Lizenz und BIS-Zertifikat gemäß Schema X?",
      answer:
        "Eine BIS-Lizenz wird typischerweise an indische Hersteller ausgegeben, während eine BIS-Konformitätserklärung (CoC) häufig an ausländische Hersteller oder für bestimmte Fälle ausgegeben wird. Beide dienen demselben Zweck - die Gewährleistung der Produktkonformität gemäß Schema X.",
    },
    {
      question:
        "14. Ist das ISI-Zeichen für Produkte zulässig, die gemäß Schema X zertifiziert sind?",
      answer:
        "Nein. Produkte gemäß Schema X tragen nicht das ISI-Zeichen. Stattdessen zeigen sie das BIS-Standardzeichen, das für das Zertifizierungssystem relevant ist, wie von der indischen BIS verwaltet.",
    },
    {
      question:
        "15. Wie kann ich feststellen, ob meine Maschine eine Schema X Zertifizierung erfordert?",
      answer:
        "Überprüfen Sie die offizielle Liste in der Omnibus-Technischen Verordnung oder konsultieren Sie einen BIS-Berater, um zu überprüfen, ob Ihre Maschine unter die obligatorischen Schema X Zertifizierungsanforderungen fällt.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Häufig gestellte Fragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Häufig gestellte Fragen
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Sie finden die gesuchte Antwort nicht?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Kontaktieren Sie uns!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
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

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper function to get country name from flag URL
  const getCountryName = (flagUrl) => {
    const countryMap = {
      cn: "China",
      de: "Germany",
      nl: "Netherlands",
      jp: "Japan",
      kr: "South Korea",
      fr: "France",
      es: "Spain",
      th: "Thailand",
      id: "Indonesia",
      it: "Italy",
      sa: "Saudi Arabia",
      vn: "Vietnam",
      gb: "United Kingdom",
    };
    // Extract country code from URL (e.g., "cn" from "https://flagcdn.com/w320/cn.png")
    const match = flagUrl.match(/\/([a-z]{2})\.png$/);
    const countryCode = match ? match[1] : null;
    return countryMap[countryCode] || "Flag";
  };

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/indian-bis-certification-under-scheme-x",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/yin-du-bis-fang-an-x-ren-zheng",
    },
    // {
    //   code: "de",
    //   name: "German",
    //   flag: "https://flagcdn.com/w320/de.png",
    //   path: "/de/indische-bis-zertifizierung-nach-schema-x",
    // },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/indiaas-bis-certificaat-volgens-schema-x",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/indo-no-bis-nintei-sukimu-x",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-injeung-scheme-x-haenghaeng",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-indienne-selon-schema-x",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/certificacion-bis-india-bajo-esquema-x",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-prathiap-india-taem-dai-tae-skema-x",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/sertifikasi-bis-india-di-bawah-skema-x",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-indiana-secondo-schema-x",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/shahadat-bis-alhind-tahata-almukhatat-x",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-an-do-theo-scheme-x",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.path === currentPath);

  return (
    <div className=" bg-white">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
              View This Page in Your Language
            </p>
          </div>

          {/* Language Flags Grid */}
          <div className="w-full max-w-[1400px]">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {languages.map((language) => {
                const isActive = currentPath === language.path;
                return (
                  <Link
                    key={language.code}
                    to={language.path}
                    className="group relative flex flex-col items-center justify-center transition-all duration-300"
                  >
                    {/* Flag */}
                    <div
                      className={`w-[42px] h-[28px] md:w-[64px] md:h-[42px] transition-transform duration-300 flex items-center justify-center ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={`${getCountryName(language.flag)} Flag`}
                        title={`${getCountryName(language.flag)} Flag`}
                        className="w-full h-full object-cover rounded-sm border border-neutral-500"
                      />
                    </div>
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1A8781] rounded-full border-2 border-white"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServicesGerman = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Unsere Dienstleistungen
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifizierungsberater
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Zeichen (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS Logo"
                title="BISCRS Logo"
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
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfallmanagement
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC Logo"
                title="LMPC Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifizierungen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS-Registrierungszertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-ZEICHEN (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SchemeXGermanProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const table2Ref = useRef(null);
  const table3Ref = useRef(null);

  return (
    <div className="w-full pb-12">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            Produktweise Sicherheitsstandards
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Beschreibung von Maschinen und elektrischen Geräten
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Nach Beschreibung oder HS-Code suchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>
      </div>

      <div ref={table2Ref}>
        <TypeBTableGerman tableRef={table2Ref} searchQuery={searchQuery} />
      </div>
      <div ref={table3Ref}>
        <TypeCTableGerman searchQuery={searchQuery} />
      </div>
    </div>
  );
};

const productDataTableSecond = [
  {
    id: 1,
    isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
    title:
      "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Degree of Protection Provided by Enclosures (IP Code)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "Earth Moving Machinery - Guards - Definitions and Requirements",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "Safety of Machinery Fire Prevention and Fire Protection",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Safety of Machinery Hygiene Requirements for the Design of Machinery",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Safety of Machinery Prevention of Unexpected Start-Up",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "Safety of Machinery Emergency Stop Function Principles for Design",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomics- System of Auditory and Visual Danger and Information Signals",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomics - System of auditory and visual danger and information signals",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements",
  },
];

const TypeBTableGerman = ({ tableRef, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter data based on search query
  const filteredData = productDataTableSecond.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.isNumber.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query)
    );
  });

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const scrollToTableTop = () => {
    if (tableRef?.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYP B (Generische Sicherheitsstandards, die sich mit einem
        Sicherheitsaspekt oder mehr als einer Art von Schutzvorrichtung
        befassen, die in einer Vielzahl von Maschinen verwendet werden kann)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                Nr.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS-Nummer
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titel
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.title}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center py-8 font-geist text-gray-500"
                >
                  Keine Ergebnisse für &quot;{searchQuery}&quot; gefunden
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-end items-center mt-6">
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
  );
};

const productDataTableThird = [
  {
    id: 1,
    description: "All types of Pumps for handling liquids, liquid elevators",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "All types of compressors",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications",
  },
  {
    id: 3,
    description:
      "All types of machinery for Treatment of material by a process involving a Change of temperature",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "or purifying machinery for liquid and gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "All types of cranes",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes",
  },
  {
    id: 7,
    description: "All types of machinery for construction",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers",
  },
  {
    id: 8,
    description: "All types of weaving machines (looms)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery",
  },
  {
    id: 9,
    description: "All types of machinery for making embroidery.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "Textile Machiner Safety Requirements Part 1 Common Requirements",
  },
  {
    id: 10,
    description: "All types of metal cutting machines",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements",
  },
  {
    id: 11,
    description:
      "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "All types of machinery for working rubber and plastics",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements",
  },
  {
    id: 13,
    description:
      "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
  },
  {
    id: 16,
    description: "All types of Diesel Generator",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
  },
  {
    id: 17,
    description: "All types of Transformer",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
  },
  {
    id: 18,
    description: "All types of Power Semiconductor Converter",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
  },
  {
    id: 19,
    description:
      "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
  },
  {
    id: 20,
    description:
      "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8535, 8537 and 8538",
    indianStandard: "-",
    title: "-",
  },
];

const TypeCTableGerman = ({ searchQuery }) => {
  // Filter data based on search query
  const filteredData = productDataTableThird.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.description.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.indianStandard.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYP C (Maschinensicherheitsstandards, die detaillierte
        Sicherheitsanforderungen für eine bestimmte Maschine oder
        Maschinengruppe behandeln)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                Nr.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Beschreibung von Maschinen und elektrischen Geräten
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HS-Code
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Indischer Standard/Spezifische Klausel des indischen Standards
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titel des indischen Standards
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.hsCode}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.indianStandard.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.title.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 font-geist text-gray-500"
                >
                  Keine Ergebnisse für &quot;{searchQuery}&quot; gefunden
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
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
