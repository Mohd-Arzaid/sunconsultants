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
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXItalian = () => {
  return (
    <div className="relative">
      {/* Scheme X Meta Tags */}
      <SchemeXMetaTags />
      {/* Scheme X Breadcrumb */}
      <SchemeXBreadcrumb />
      {/* Scheme X Hero Section */}
      <SchemeXHero />
      {/* Scheme X Index Section */}
      <SchemeXIndex />
      {/* Scheme X Main Content Section */}
      <SchemeXMainContent />
      {/* Footer Section */}
      <FooterItalian />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXItalian;

const SchemeXMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Certificazione BIS Indiana sotto Scheme-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        Certificazione BIS Scheme X | Sicurezza Macchinari e Attrezzature
        Elettriche
      </title>
      <meta
        name="description"
        content="La Certificazione BIS Scheme X è richiesta per garantire la qualità e la sicurezza di interruttori a bassa tensione, apparecchiature di controllo, macchinari e attrezzature elettriche."
      />
      <meta
        name="keywords"
        content="Scheme X, BIS Scheme X, Certificazione BIS Scheme X, Certificazione Scheme X, certificazione macchinari, certificazione attrezzature elettriche"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Certificazione BIS Scheme X | Sicurezza Macchinari e Attrezzature Elettriche"
      />
      <meta
        property="og:description"
        content="La Certificazione BIS Scheme X è richiesta per garantire la qualità e la sicurezza di interruttori a bassa tensione, apparecchiature di controllo, macchinari e attrezzature elettriche."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Certificazione BIS Scheme X | Sicurezza Macchinari e Attrezzature Elettriche"
      />
      <meta
        name="twitter:description"
        content="La Certificazione BIS Scheme X è richiesta per garantire la qualità e la sicurezza di interruttori a bassa tensione, apparecchiature di controllo, macchinari e attrezzature elettriche."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};
const SchemeXBreadcrumb = () => {
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
                <BreadcrumbPage>
                  Certificazione BIS Indiana sotto Scheme-X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXHero = () => {
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
              Esperienza Certificata
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificazione BIS Scheme X
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            La Certificazione BIS Scheme X copre Macchinari, Attrezzature
            Elettriche e Assiemi di Componenti, e Sotto-assiemi secondo il
            Regolamento Tecnico Omnibus (OTR).
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
                Visualizza Servizi
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SchemeXHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/it/certificazione-bis-indiana-secondo-schema-x"))
      return "Scheme X Italian";
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
        title: "Inserire un nome completo valido.",
        description: "Il nome dovrebbe contenere solo lettere e spazi.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Inserire un indirizzo email valido.",
        description: "Controllare se il formato dell'email è corretto",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Inserire un numero di telefono valido",
        description: "Il numero di telefono deve essere (8-15 cifre)",
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
        title: "Modulo di contatto inviato con successo!",
        description:
          "Grazie per averci contattato. Il nostro team ti ricontatterà presto.",
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
        error.response?.data?.message || "Qualcosa è andato storto";
      toast({
        variant: "destructive",
        title:
          errorMessage ||
          "Impossibile inviare i dettagli del modulo di contatto!",
        description:
          "Qualcosa è andato storto. Controlla i tuoi dettagli e riprova.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contattaci
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Prenota un Appuntamento
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Vuoi contattare il nostro team e fissare una chiamata?
        <span className="text-black"> Prova Ora</span>
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
            placeholder="Nome Completo *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Indirizzo Email *"
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
            placeholder="Numero di Contatto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nome Azienda *"
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
            placeholder="Nome Prodotto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certificazione Richiesta*"
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
              <span>Invio</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Prenota Appuntamento</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const SchemeXIndex = () => {
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
    overview: "Panoramica",
    process: "Processo",
    documents: "Documenti",
    conclusion: "Conclusione",
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

const SchemeXMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentItalian />
        </div>
      </div>
      <SchemeXServiceFaq />
      <SchemeXProductTable />
      <LanguageSelector />
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
              I Nostri Servizi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Il Miglior Consulente per Certificati in India
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
              Marchio BIS (Licenza ISI) per Produttori Esteri
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
              Certificazione di Registrazione CDSCO
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
              Registrazione BIS (CRS)
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
              Gestione dei Rifiuti Plastici
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
              Certificazioni Certificato EPR
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
              Certificazioni Certificato LMPC
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
              Certificato di Registrazione BIS
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
              MARCHIO ISI (BIS) per Produttori Indiani
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SchemeXProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const table2Ref = useRef(null);
  const table3Ref = useRef(null);

  return (
    <div className="w-full pb-12">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            Standard di Sicurezza per Prodotto
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Descrizione di Macchinari e Attrezzature Elettriche
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"Cerca per descrizione o codice HS..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>
      </div>

      <div ref={table2Ref}>
        <TypeBTable tableRef={table2Ref} searchQuery={searchQuery} />
      </div>
      <div ref={table3Ref}>
        <TypeCTable searchQuery={searchQuery} />
      </div>
    </div>
  );
};

const productDataTableThird = [
  {
    id: 1,
    description:
      "Tutti i tipi di Pompe per la gestione di liquidi, ascensori per liquidi",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "Tutti i tipi di compressori",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "Condizioni di fornitura tecnica per compressori d'aria alternativi per scopi generali e applicazioni industriali\nCondizioni di fornitura tecnica per compressori a vite ad aria (Inondati d'olio) per scopi generali e applicazioni industriali",
  },
  {
    id: 3,
    description:
      "Tutti i tipi di macchinari per il trattamento dei materiali attraverso un processo che coinvolge un Cambiamento di temperatura",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "o macchinari per la purificazione di liquidi e gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "Tutti i tipi di macchinari per riempimento, chiusura, sigillatura, etichettatura bottiglie, imballaggio o avvolgimento",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "Tutti i tipi di gru",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Gru Elettriche Sopra Testa Viaggianti e Gru a Cavalletto per tutte le Applicazioni Codice di Pratica\nSpecifica per Gru Mobili Azionate Meccanicamente\nGru - Requisiti di Sicurezza per Gru Caricatrici",
  },
  {
    id: 7,
    description: "Tutti i tipi di macchinari per la costruzione",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "Macchinari per Movimenti Terra Sicurezza Parte 7 Raschiatori\nRequisiti per Macchinari per Movimenti Terra per Riallineatori\nMacchinari per Movimenti Terra Sicurezza Parte 12 Spianatrici Stradali",
  },
  {
    id: 8,
    description: "Tutti i tipi di macchine per tessitura (telai)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "Requisiti di Sicurezza per Macchinari Tessili Parte 6 Macchinari per la Produzione di Tessuti",
  },
  {
    id: 9,
    description: "Tutti i tipi di macchinari per la realizzazione di ricami.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title:
      "Requisiti di Sicurezza per Macchinari Tessili Parte 1 Requisiti Comuni",
  },
  {
    id: 10,
    description: "Tutti i tipi di macchine per il taglio del metallo",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "Sicurezza Macchine Utensili Presse Parte 1 Requisiti Generali di Sicurezza\nSicurezza Macchine Utensili Macchine per Scarica Elettrica\nSicurezza Macchine Utensili Macchine per Tornitura\nSicurezza Macchine Utensili Macchine per Segatura per Metallo Freddo\nSicurezza Macchine Utensili Centri di Lavorazione, Macchine per Fresatura, Macchine Trasferimento Parte 1 Requisiti di Sicurezza",
  },
  {
    id: 11,
    description:
      "Tutti i tipi di macchine utensili per lavorare pietra, ceramiche, calcestruzzo, cemento amianto o simile vetro minerale",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "Tutti i tipi di macchinari per lavorare gomma e plastiche",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Macchine per Plastiche e Gomma - Macchine per Stampaggio a Iniezione - Requisiti di Sicurezza",
  },
  {
    id: 13,
    description:
      "Tutti i tipi di macchine inclusi i macchinari per lavori pubblici & Edilizia e i macchinari & apparecchiature meccaniche con funzioni individuali, non specificate",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "Tutti i tipi di ingranaggi e trasmissioni, ruote dentate, pignoni a catena, elementi di trasmissione viti a sfere o rulli, scatole degli ingranaggi e cambi di velocità, inclusi convertitori di coppia E (o) i loro assemblaggi /sotto-assemblaggi /componenti",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "Tutti i tipi di macchine elettriche rotanti come Generatore, ecc. Edilizia e i macchinari & apparecchiature meccaniche con funzioni individuali, non specificate",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "Generazione di tipo turbina\nGeneratori AC azionati da motori a combustione interna alternativi - Specifica: Parte 1\nalternatori con potenza fino a 20 kVa\nGeneratori AC azionati da motori a combustione interna alternativi - Specifica: Parte 2\nalternatori con potenza superiore a 20 kVa e fino a 1250 kVa",
  },
  {
    id: 16,
    description: "Tutti i tipi di Generatore Diesel",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "Gruppi Generatori di Corrente Alternata Azionati da Motori a Combustione Interna Alternativi: Parte 2 Motori\nGruppi generatori di corrente alternata azionati da motori a combustione interna alternativi: Parte 3 generatori di corrente alternata per gruppi generatori\nGruppi generatori di corrente alternata azionati da motori a combustione interna alternativi: Parte 4 apparecchiature di controllo e interruttori\nGruppi Generatori di Corrente Alternata Azionati da Motori a Combustione Interna Alternativi Parte 5 Gruppi Generatori\nGruppi generatori di corrente alternata azionati da motori a combustione interna alternativi: Parte 8\nGruppi generatori di corrente alternata azionati da motori a combustione interna alternativi: Parte 12 alimentazione di emergenza per la sicurezza",
  },
  {
    id: 17,
    description: "Tutti i tipi di Trasformatore",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "Sicurezza di Trasformatori, Reattori, Unità di Alimentazione e Prodotti Simili per Tensioni di Alimentazione fino a 1100 V Parte 2-4: Requisiti Particolari e Prove per Trasformatori Isolanti e Unità di Alimentazione Incorporate\nSicurezza di trasformatori di potenza, unità di alimentazione e simili: Parte 2 requisito particolare: Sez 6 trasformatori isolanti di sicurezza per uso generale\nSicurezza di trasformatori di potenza, alimentatori reattori e prodotti simili: Parte 2-7 requisiti particolari e prove per trasformatori e alimentatori per giocattoli\nTrasformatori di Potenza: Parte 1 generale\nTrasformatori di Potenza: Parte 6 reattori",
  },
  {
    id: 18,
    description: "Tutti i tipi di Convertitore a Semiconduttori di Potenza",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
  },
  {
    id: 19,
    description:
      "Tutti i tipi di apparecchiature per interruttori e apparecchiature di controllo che operano a tensioni non superiori a 1000 volt e (o) i loro assemblaggi /sotto-assemblaggi /componenti",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Quadri e apparecchiature di controllo a bassa tensione: Parte 3 quadri di distribuzione destinati a essere operati da persone ordinarie (DBO)",
  },
  {
    id: 20,
    description:
      "Tutti i tipi di apparecchiature per interruttori e apparecchiature di controllo che operano a tensioni superiori a 1000 volt e (o) i loro assemblaggi /sotto-assemblaggi /componenti",
    hsCode: "8535, 8537 and 8538",
    indianStandard: "-",
    title: "-",
  },
];

const TypeCTable = ({ searchQuery }) => {
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
        TIPO C (Standard di Sicurezza per Macchine che trattano requisiti di
        sicurezza dettagliati per una macchina particolare o un gruppo di
        macchine)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                N. Seq.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Descrizione di Macchinari e Attrezzature Elettriche
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Codice HS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Standard Indiano/Clausola di Standard Indiano
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titolo dello Standard Indiano
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
                  Nessun risultato trovato per &quot;{searchQuery}&quot;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const productDataTableSecond = [
  {
    id: 1,
    isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
    title:
      "Sicurezza di Macchinari Attrezzature Elettriche delle Macchine Parte 1 Requisiti Generali",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Sicurezza di Macchinari - Attrezzature Elettriche delle Macchine Parte 11 Requisiti per Attrezzature per Tensioni superiori a 1 000 V CA o 1 500 V CC e non superiori a 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "Sicurezza Funzionale di Elettrici-Elettronici-Programmabili Elettronici Sistemi Correlati alla Sicurezza Parte 1- Requisiti Generali",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Grado di Protezione Fornito da Recinti (Codice IP)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 1: Selezione dei metodi di prova",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Sicurezza di Macchinari Valutazione dell'Emissione di Sostanze Pericolose Aerotrasportate Parte 2 Metodo del Gas Tracciante per la Misurazione del Tasso di Emissione di un Inquinante Specifico",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 3: Metodo banco di prova per la misurazione del tasso di emissione di un inquinante specifico",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 4: Metodo tracciante per la misurazione dell'efficienza di cattura di un sistema di scarico",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 5: Metodo banco di prova per la misurazione dell'efficienza di separazione per massa dei sistemi di pulizia dell'aria con uscita non canalizzata",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 6 : Metodo banco di prova per la misurazione dell'efficienza di separazione per massa dei sistemi di pulizia dell'aria con uscita canalizzata",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 7: Metodo banco di prova per la misurazione del parametro di concentrazione dell'inquinante",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 8: Metodo stanza per la misurazione del parametro di concentrazione dell'inquinante",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Sicurezza di macchinari - Valutazione dell'emissione di sostanze pericolose aerotrasportate - Parte 9: Indice di decontaminazione",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Potenza Fluido Idraulico- Regole Generali e Requisiti di Sicurezza per Sistemi e Loro Componenti",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Potenza Fluido Pneumatico- Regole Generali e Requisiti di Sicurezza per Sistemi e Loro Componenti",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title:
      "Macchinari per Movimenti Terra - Protezioni - Definizioni e Requisiti",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Sicurezza di Macchinari-Sicurezza Funzionale di Elettrici Elettronici e Programmabili Elettronici Sistemi di Controllo Correlati alla Sicurezza",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Sicurezza di Macchinari - Attrezzature Protettive Elettro-Sensibili Parte 2 Requisiti Particolari per Attrezzature che Utilizzano Dispositivi Protettivi Ottico-Elettronici Attivi AOPD",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Sicurezza di Macchinari- Indicazione Marcatura e Azionamento Parte 3 Requisiti per la Posizione e l'Operazione degli Attuatori",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Sicurezza di Macchinari-Attrezzature Elettriche delle Macchine Parte 32 Requisiti per Macchine per Sollevamento",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Sicurezza di Macchinari - Indicazione Marcatura e Azionamento Parte 1 Requisiti per Segnali Visivi Acustici e Tattili",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Sicurezza di Macchinari - Attrezzature Protettive Elettro-Sensibili Parte 1 Requisiti Generali e Prove",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Sicurezza di Macchinari Linee Guida per l'Uso di Sistemi di Comunicazione in Applicazioni Correlate alla Sicurezza",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Sicurezza di Macchinari - Indicazione Marcatura e Azionamento Parte 2 Requisiti per la Marcatura",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title:
      "Sicurezza di Macchinari Prevenzione Incendi e Protezione Antincendio",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Sicurezza di Macchinari Requisiti Igienici per la Progettazione di Macchinari",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Sicurezza di Macchinari Mezzi Permanenti di Accesso ai Macchinari Parte 1 Scelta dei Mezzi Fissi e Requisiti Generali di Accesso",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Sicurezza di Macchinari Mezzi Permanenti di Accesso ai Macchinari Parte 2 Piattaforme di Lavoro e Passerelle",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Sicurezza di Macchinari Mezzi Permanenti di Accesso ai Macchinari Parte 3 Scale Scaffali e Parapetti",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Sicurezza di Macchinari Mezzi Permanenti di Accesso ai Macchinari Parte 4 Scale Fisse",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Sicurezza di Macchinari Parti Correlate alla Sicurezza dei Sistemi di Controllo Parte 1 Principi Generali per la Progettazione",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Sicurezza di Macchinari Parti Correlate alla Sicurezza dei Sistemi di Controllo Parte 2 Validazione",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Sicurezza di Macchinari Protezioni Requisiti Generali per la Progettazione e Costruzione di Protezioni Fisse e Mobili",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Sicurezza di Macchinari Dispositivi di Blocco Associati alle Protezioni Principi per la Progettazione e la Selezione",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Sicurezza di Macchinari Prevenzione dell'Avvio Inatteso",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Sicurezza di Macchinari Distanze di Sicurezza per Prevenire il Raggiungimento delle Zone di Pericolo da Arti Superiori e Inferiori",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Sicurezza di Macchinari Posizionamento delle Salvaguardie Rispetto alle Velocità di Avvicinamento delle Parti del Corpo Umano",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Sicurezza di Macchinari Spazi Minimi per Evitare la Schiacciamento delle Parti del Corpo Umano",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Sicurezza di Macchinari Dispositivi di Controllo a Due Mani Principi per la Progettazione e la Selezione",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title:
      "Sicurezza di Macchinari Funzione di Arresto di Emergenza Principi per la Progettazione",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Sicurezza di Macchinari Lubrificanti con Contatto Incidentale Prodotto -- Requisiti Igienici",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Sicurezza di macchinari - Riduzione dei rischi per la salute derivanti da sostanze pericolose emesse da macchinari - Parte 1: Principi e specifiche per i produttori di macchinari",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Sicurezza di macchinari - Riduzione dei rischi per la salute derivanti da sostanze pericolose emesse da macchinari - Parte 2: Metodologia che conduce a procedure di verifica",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Sicurezza di macchinari - Dispositivi protettivi sensibili alla pressione - Parte 1: Principi generali per la progettazione e la prova di tappetini sensibili alla pressione e pavimenti sensibili alla pressione",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Sicurezza di macchinari - Dispositivi protettivi sensibili alla pressione - Parte 2: Principi generali per la progettazione e la prova di bordi sensibili alla pressione e barre sensibili alla pressione",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Sicurezza di macchinari - Dispositivi protettivi sensibili alla pressione - Parte 3: Principi generali per la progettazione e la prova di paraurti sensibili alla pressione, piastre, fili e dispositivi simili.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomia- Sistema di Segnali di Pericolo e Informazione Uditive e Visive",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "Requisiti Ergonomici per la Progettazione di Display e Attuatori di Controllo Parte 2 Display",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "Requisiti Ergonomici per la Progettazione di Display e Attuatori di Controllo Parte 3 Attuatori di Controllo",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Sicurezza di Macchinari - Requisiti Antropometrici per la Progettazione di Postazioni di Lavoro presso Macchinari",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomia - Manichini Computer e Modelli del Corpo Parte 1 Requisiti Generali",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomia - Sistema di segnali di pericolo e informazione uditivi e visivi",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Sistemi di Automazione Industriale - Sicurezza di Sistemi di Produzione Integrati - Requisiti Base",
  },
];
const TypeBTable = ({ tableRef, searchQuery }) => {
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
        TIPO B (Standard di Sicurezza Generici che trattano un aspetto di
        sicurezza o più di un tipo di salvaguardia che può essere utilizzato su
        un'ampia gamma di macchinari)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                N. Seq.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Numero IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titolo
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
                  Nessun risultato trovato per &quot;{searchQuery}&quot;
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
              Precedente
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              Pagina {currentPage} di {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Successiva
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SchemeXServiceFaq = () => {
  const faqData = [
    {
      question: "1. Cos'è lo Scheme X sotto la certificazione BIS?",
      answer:
        "Lo Scheme X è uno schema di valutazione della conformità introdotto dall'indiana BIS per macchinari e attrezzature elettriche. Garantisce la conformità a standard di sicurezza e tecnici rigorosi come specificato nel Regolamento Tecnico Omnibus.",
    },
    {
      question:
        "2. Lo Scheme X è diverso dalla certificazione del marchio ISI?",
      answer:
        "Sì. Il marchio ISI è generalmente per beni di consumo e conformità di base del prodotto, mentre lo Scheme X si applica a prodotti complessi e di grado industriale che richiedono test e certificazione avanzati attraverso un certificato BIS o licenza BIS.",
    },
    {
      question: "3. Chi deve richiedere la certificazione Scheme X?",
      answer:
        "Produttori e importatori di macchinari e attrezzature elettriche elencati sotto il Regolamento Tecnico Omnibus devono richiedere lo Scheme X e ottenere una certificazione BIS valida per vendere o distribuire legalmente i loro prodotti in India. I produttori globali o esteri intenzionati a vendere prodotti in India devono anche rispettare questi regolamenti.",
    },
    {
      question: "4. Qual è il costo della certificazione BIS Scheme X?",
      answer:
        "Il costo dello Scheme X include tariffe di domanda, tariffe di certificazione, costi di revisione del file tecnico, costi di ispezione della fabbrica e costi di test del prodotto. In media, parte da ₹2.000 per la domanda e può aumentare a seconda della complessità del prodotto. Per maggiori dettagli contattaci all'indirizzo admin@bis-certifications.com.",
    },
    {
      question:
        "5. Quanto tempo ci vuole per ottenere una licenza BIS sotto Scheme X?",
      answer:
        "La tempistica varia a seconda della documentazione, dei requisiti di test e delle ispezioni della fabbrica. Tipicamente, richiede 4–6 settimane dalla data di registrazione e invio della domanda BIS riuscita per i produttori indiani e 60-90 giorni per i produttori esteri.",
    },
    {
      question:
        "6. Le PMI possono anche richiedere la certificazione BIS sotto Scheme X?",
      answer:
        "Assolutamente. Di fatto, l'indiana BIS incoraggia le PMI a richiedere una licenza BIS o certificato di conformità sotto lo Scheme X per aumentare qualità, conformità e competitività nel settore industriale.",
    },
    {
      question:
        "7. La certificazione BIS sotto Scheme X è obbligatoria per le esportazioni?",
      answer:
        "No. I prodotti fabbricati esclusivamente per l'esportazione sono esenti sotto il Regolamento Tecnico Omnibus. Tuttavia, i prodotti destinati ai mercati indiani devono essere certificati sotto Scheme X.",
    },
    {
      question: "8. Qual è la validità della licenza BIS sotto Scheme X?",
      answer:
        "Una licenza BIS sotto Scheme X è generalmente valida per 3-6 anni e deve essere rinnovata di conseguenza. Il rinnovo prevede il pagamento della tariffa annuale di certificazione BIS e potrebbe richiedere una rivalutazione a seconda dei cambiamenti nell'ambito del prodotto o negli standard.",
    },
    {
      question:
        "9. I produttori esteri possono richiedere la certificazione Scheme X?",
      answer:
        "Sì, i produttori esteri possono richiedere la certificazione Scheme X attraverso un rappresentante indiano autorizzato. L'indiana BIS richiede un'ispezione della fabbrica, che potrebbe richiedere 3 giorni per i richiedenti esteri, insieme ai processi standard di registrazione BIS e test.",
    },
    {
      question: "10. Cos'è un File Tecnico e perché è richiesto?",
      answer:
        "Un File Tecnico è un dossier dettagliato di conformità richiesto sotto Scheme X. Include processi di produzione, dettagli del prodotto, rapporti di test e documenti di controllo qualità. Supporta la conformità del prodotto agli standard indiani pertinenti durante il processo di certificazione BIS.",
    },
    {
      question:
        "11. Come è correlato lo Scheme X al Regolamento Tecnico Omnibus?",
      answer:
        "Il Regolamento Tecnico Omnibus impone l'uso dello Scheme X per categorie specifiche di macchinari e attrezzature elettriche in India. I prodotti elencati nel regolamento devono essere certificati sotto Scheme X per ottenere un certificato BIS o licenza BIS valido.",
    },
    {
      question: "12. Un certificato BIS sotto Scheme X può essere revocato?",
      answer:
        "Sì. L'indiana BIS può sospendere o annullare una licenza BIS o certificato sotto Scheme X se viene rilevata non conformità durante la sorveglianza o se il prodotto non soddisfa gli standard indiani richiesti.",
    },
    {
      question:
        "13. Qual è la differenza tra licenza BIS e certificato BIS sotto Scheme X?",
      answer:
        "Una licenza BIS è tipicamente emessa a produttori indiani, mentre un certificato di conformità BIS (CoC) è spesso emesso a produttori esteri o per casi specifici. Entrambi servono lo stesso scopo: garantire la conformità del prodotto sotto Scheme X.",
    },
    {
      question:
        "14. Il marchio ISI è consentito per i prodotti certificati sotto Scheme X?",
      answer:
        "No. I prodotti sotto Scheme X non portano il marchio ISI. Invece, visualizzano il marchio standard BIS rilevante per lo schema di certificazione, come governato dall'indiana BIS.",
    },
    {
      question:
        "Come so se la mia macchina richiede la certificazione Scheme X?",
      answer:
        "Controlla l'elenco ufficiale nel Regolamento Tecnico Omnibus o consulta un consulente BIS per verificare se la tua macchina rientra nei requisiti obbligatori di certificazione Scheme X.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Domande Frequenti"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Domande Frequenti
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Non riesci a trovare la risposta che stai cercando?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Contattaci!
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

const SchemeXMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <SchemeXMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Process Section */}
        <SchemeXMainContentLeftProcessSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <SchemeXMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Conclusion Section */}
        <SchemeXMainContentLeftConclusionSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        <ServiceAuthorItalian />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusione</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusione</h2>

      <p className="service-left-content-paragraph">
        La Certificazione BIS Scheme-X rimane vitale per mantenere la sicurezza,
        l'affidabilità e la qualità degli interruttori a bassa tensione e
        apparecchiature di controllo, Macchinari e attrezzature elettriche. Per
        i produttori di macchine utensili applicabili alla lavorazione di
        pietra, ceramiche, calcestruzzo, cemento asfaltico e vetro minerale, la
        certificazione BIS Scheme-X è obbligatoria.
      </p>

      <p className="service-left-content-paragraph">
        Adempiendo a questi obblighi, i produttori garantiscono la conformità
        del prodotto, migliorano la fiducia dei consumatori, nonché migliorano
        la loro credibilità sul mercato. Lo Scheme-X assicura che la produzione
        sia il più fluida possibile, che gli standard di sicurezza in tutto il
        mondo siano soddisfatti e che i marchi riconosciuti guadagnino una
        reputazione positiva.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documenti</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documenti Chiave Richiesti per la Certificazione BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        Per snellire il processo di certificazione BIS, i produttori sono tenuti
        a raccogliere e inviare i seguenti documenti durante la fase di
        registrazione:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                N. Seq.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Documento Richiesto
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Dettagli
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Nome e Indirizzo (Fabbrica & Ufficio)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nome legale completo e indirizzi fisici del sito di produzione e
                ufficio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Informazioni PAN e GST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Numero di Conto Permanente (PAN) e dettagli di registrazione GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Dettagli di Contatto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indirizzo email, numero di cellulare e fisso per comunicazioni
                ufficiali
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Dettagli Gestionali
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nomi, ruoli e ID di dirigenti chiave e firmatario autorizzato
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Descrizione Prodotto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Dettagli di macchinari e attrezzature coperti sotto il Primo
                Allegato del Regolamento Tecnico Omnibus
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Classificazione Prodotto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tipo, modello e varietà specifica per cui viene richiesta la
                licenza BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                File Tecnico
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tutti i dettagli tecnici relativi al prodotto e dettagli
                sull'unità di produzione.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Validità e Processo di Rinnovo del Certificato Scheme-X:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Validità Licenza e Rinnovo: Le Licenze BIS sotto Scheme-X sono emesse per un periodo di 3 a 6 anni per produzione continua. Una volta scaduto il periodo, la licenza può essere rinnovata per la stessa durata mediante la presentazione di una domanda di rinnovo, la tariffa richiesta e i documenti di conformità.",
          "Certificato di Conformità (CoC): Un CoC è emesso per produzione una tantum, ed è applicabile sia per produttori domestici che esteri. Poiché si applica solo a un singolo lotto, un CoC non ha opzione di rinnovo.",
          "Rapporto di Test Prodotto: Quando i rapporti di test sono preparati nel laboratorio del produttore, i funzionari BIS li verificano durante l'ispezione della fabbrica conducendo test di testimonianza. Se i test sono eseguiti in strutture subappaltate, anche quelle strutture sono ispezionate e approvate da BIS.",
          "Revisione della Domanda per Rinnovo: Per una validità ininterrotta, un produttore è tenuto a continuare a rispettare le disposizioni dello Scheme-X. Secondo il Regolamento 8 del Regolamento di Valutazione della Conformità BIS, il Bureau of Indian Standards elabora la domanda di rinnovo in modulo VIII. Il rinnovo è effettuato solo dopo che è stata verificata una conformità soddisfacente.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Processo</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Passi per Ottenere la Certificazione sotto BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        L'emissione del Certificato BIS sotto Scheme-X è un'attività sistematica
        volta a garantire che il produttore abbia soddisfatto gli standard di
        sicurezza, qualità e conformità applicabili. Il processo è il seguente:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verifica Ambito: Determina se il tuo prodotto rientra nell'ambito dello Scheme-X e se è conforme ai requisiti di sicurezza BIS. Controlla gli standard indiani pertinenti e l'allegato tecnico per determinare se sarai in grado di conformarti.",
          "Prepara i Documenti Richiesti: I produttori devono raccogliere e organizzare i seguenti documenti: Certificati di Attività Registrazione, Documenti Base di Progettazione, Documenti di Flusso Fabbrica e Processo, Rapporti di Test di Servizio (se applicabile), Documenti di Assicurazione e Controllo Qualità.",
          "Costruisci il File Tecnico: Un file tecnico è una parte indispensabile per la domanda di estensione di un certificato. Deve contenere: Specifiche Tecniche del Prodotto, Informazioni su Metodi e Tecniche, Documenti di Conformità e Test, Limitazioni e scopo previsto del prodotto, Documentazione di assicurazione qualità, Tracciabilità materie prime, tracciabilità subappalto, e il resto delle prove, Conformità agli standard nell'ambito definito.",
          "Il Modulo di Domanda: Il modulo di domanda può essere presentato elettronicamente sul Sito Web BIS per il luogo designato. Il regolamento della tariffa di domanda è un must. Il resto dei documenti che verificano la domanda devono essere inclusi per una valutazione adeguata.",
          "Ispezione Fabbrica: Per i produttori domestici: L'ispezione è condotta per un periodo massimo di 2 giorni. Per i produttori esteri: L'ispezione è condotta per un periodo massimo di 3 giorni (giorni aggiuntivi possono accumularsi a causa di richieste aggiuntive).",
          "Test di Campioni Prodotto: Il test dei campioni è effettuato sia sul sito del produttore o in laboratori approvati BIS esternalizzati (il test esternalizzato è consentito). Il test dimostra il soddisfacimento degli standard indiani pertinenti.",
          "Emissione della Certificazione: Se un prodotto soddisfa tutte le condizioni, BIS concede a ogni prodotto una Licenza o un Certificato di Conformità (CoC). Il Marchio Standard BIS può essere utilizzato liberamente dal produttore su tutti i prodotti certificati.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Questo file funge da prova tecnica e statistica della rivendicazione del
        prodotto che sostanziano gli standard di tracciabilità di sicurezza.
      </p>

      <p className="service-left-content-paragraph">
        Durante il periodo di ispezione, ci si aspetta che i funzionari BIS:
        Analizzino il file tecnico, Valutino i metodi di produzione insieme ai
        sistemi di assicurazione qualità di supporto, Osservino il test del
        prodotto, Determinino non conformità (se presenti) e forniscano passi
        remediali. Un rapporto dettagliato dell'audit è fornito al richiedente
        dopo la visita.
      </p>

      <p className="service-left-content-paragraph">
        Questa strategia mantiene la conformità con lo Standard BIS ed è un
        riconoscimento della conformità indiana e internazionale, ponendo
        l'industria sulla fiducia dei consumatori verso sicurezza e qualità.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedura per Produttori Domestici
      </h2>

      <p className="service-left-content-paragraph">
        I produttori domestici seguono un approccio diretto ottenendo la Licenza
        BIS sotto Scheme-X. I passi diretti da seguire includono:
      </p>

      <PointsListWithoutHeading
        points={[
          "Documentazione: Tutti i documenti pertinenti allo schema devono essere raccolti e preparati.",
          "Esecuzione della Domanda: La domanda deve essere presentata insieme alle tariffe pertinenti.",
          "Indagine sulla Domanda: Qualsiasi domanda presentata è soggetta a scrutinio e un successivo set di domande è generato da BIS.",
          "Nomina di Auditor: Gli auditor sono nominati da BIS ma l'individuo nominato è soggetto al pagamento delle tariffe di audit.",
          "Audit Fabbrica: Un esame e audit di indagine è condotto in loco e i campioni pertinenti sono raccolti.",
          "Valutazione Campione: I campioni sono valutati in un laboratorio riconosciuto BIS. Il richiedente paga tutte le tariffe di test del laboratorio riconosciuto BIS.",
          "Pagamento di Tariffe di Licenza & Marcatura: I pagamenti richiesti sono completati a BIS.",
          "Concessione di Licenza: Il certificato che concede il permesso di usare il Marchio BIS è assegnato da BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Tempistica Tipica:</strong> Vicino a 90 giorni lavorativi
        (secondo la pratica BIS) sono necessari. Questo è fornito che non ci
        siano non conformità chiave.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedura per Produttori Esteri
      </h2>

      <p className="service-left-content-paragraph">
        A differenza dei produttori domestici, i produttori esteri che
        richiedono un Certificato BIS sotto Scheme-X sono tenuti a rispettare un
        processo più rigoroso e passi aggiuntivi. La procedura è dettagliata
        come segue.
      </p>

      <PointsListWithoutHeading
        points={[
          "Preparazione Documentazione: Attività registrata, il prodotto e layout fabbrica, rapporti di test, e i documenti di gestione qualità associati devono tutti essere nella cartella configurata per conformarsi.",
          "Invio della Domanda: La domanda, la tariffa richiesta e tutti i materiali della domanda devono essere inviati attraverso il portale online BIS.",
          "Registrazione della Domanda e Scrutinio: La domanda è registrata da BIS e viene condotto un controllo dei documenti. Qualsiasi problema che BIS potrebbe avere deve essere risolto dal richiedente in modo tempestivo.",
          "Assegnazione Auditor e Pagamento: Gli auditor di BIS responsabili per le ispezioni della fabbrica sono assegnati al richiedente per l'audit. Il richiedente deve pagare le tariffe stabilite per l'audit condotto, come determinato dalla legislazione applicabile.",
          "Preparazione Audit: I produttori esteri sono responsabili per gli accordi logistici per l'audit come emissione Visa, biglietti aerei e prenotazioni hotel per i funzionari BIS sono organizzati e pagati.",
          "Audit Fabbrica & Selezione Campione: I funzionari BIS conducono un audit fabbrica che dura 3 giorni (più giorni possono essere aggiunti se sono necessarie più applicazioni).",
          "Test Prodotto: I campioni selezionati sono inviati a un laboratorio accreditato BIS per i test. In alcuni casi, i test sono contratti ad altri laboratori di test e quindi il pagamento è regolato attraverso il laboratorio di test principale.",
          "Pagamento di Tariffe di Marcatura & Licenza: Dopo un audit riuscito e risultati di test, il produttore deve pagare la tariffa di marcatura richiesta e la tariffa di licenza a BIS.",
          "Concessione di Licenza: BIS emette la Licenza/Certificato di Conformità (CoC) una volta che tutte le condizioni sono state seguite in totale. BIS poi permette al produttore con un Marchio Standard BIS utilizzato su altri prodotti certificati, una volta confermata la conformità.",
        ]}
      />

      <p className="service-left-content-paragraph">
        L'audit comprende: Valutazione dei sistemi di assicurazione qualità e
        dei flussi di lavoro nei processi di produzione, Valutazione della
        conformità e della documentazione tecnica, Selezione campione di test
        indipendente.
      </p>

      <p className="service-left-content-paragraph">
        L'intero processo richiede, basandosi sulle pratiche da BIS, circa 6-7
        mesi.
      </p>

      <h3 className="service-left-content-heading-three">
        Punti Chiave Aggiuntivi per Produttori Esteri:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Classificazione FMCS: Tutti i produttori esteri sono classificati come 'Grande Scala' sotto lo Schema di Certificazione per Produttori Esteri. Questa classificazione è indipendentemente dalla scala delle operazioni condotte.",
          "Rappresentante Indiano Autorizzato (AIR): Ogni produttore estero è tenuto a designare un Rappresentante Indiano Autorizzato (AIR). L'AIR è il punto di contatto principale per il richiedente estero e BIS, responsabile per conformità, collaborazione e manutenzione della licenza BIS.",
          "Audit Fabbrica: Gli audit fabbrica per produttori esteri sono completi e tendono a durare 3 giorni. Inoltre, più giorni sono richiesti nel caso di più applicazioni di prodotto depositate.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftOverviewSection = () => {
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
        <span className="service-left-content-index-heading">Panoramica</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Introduzione alla Certificazione BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        Il Bureau of Indian Standards, o BIS per breve, ha lanciato
        &ldquo;Scheme X&rdquo; il 16 marzo 2022, mirato a migliorare la
        conformità sulla sicurezza e qualità del prodotto in India. Produttori
        indiani ed esteri possono richiedere la certificazione BIS per Macchine
        ed Attrezzature Elettriche, componenti Come assemblaggi,
        sotto-assemblaggi e, e Utensili specificati in Allegato-II dello
        Scheme-X e ottenere certificazione prima di esportare, vendere o
        distribuire in India.
      </p>

      <p className="service-left-content-paragraph">
        Sotto Scheme X, i produttori possono richiedere una Licenza BIS o un
        Certificato di Conformità (CoC) per interruttori a bassa tensione e
        apparecchiature di controllo, macchinari e attrezzature elettriche. Una
        volta certificati i produttori, sono autorizzati a utilizzare il Marchio
        Standard BIS, indicando che i loro prodotti sono conformi agli standard
        stabiliti in India.
      </p>

      <p className="service-left-content-paragraph">
        La certificazione, promuovendo il prodotto e la conformità con gli
        Standard Indiani e Regolamenti Governativi, aiuta a sviluppare fiducia e
        sicurezza dei consumatori nei prodotti certificati.
      </p>

      <h2 className="service-left-content-heading-three">
        Cos'è la Certificazione Scheme X?
      </h2>

      <p className="service-left-content-paragraph">
        Lo Scheme X è uno schema di certificazione prodotto sviluppato sotto il
        Regolamento di Valutazione della Conformità BIS, 2018 e successivamente
        semplificato sotto il Regolamento di Valutazione della Conformità BIS
        (Emendamento), 2022.
      </p>

      <p className="service-left-content-paragraph">
        L'obiettivo principale è portare gli standard indiani di sicurezza e
        qualità a standard globali, specialmente per quanto riguarda i
        macchinari industriali ed attrezzature elettriche. I prodotti fabbricati
        in o importati in India sotto questo schema sono sottoposti a scrutinio
        e valutazione rigorosi per dimostrare standard tecnici, di sicurezza,
        nonché di performance.
      </p>

      <p className="service-left-content-paragraph">
        Le disposizioni sotto l'ambito originale della Certificazione Scheme X
        sono state riviste e ampliate con il nuovo Ordine di Sicurezza
        Macchinari ed Attrezzature Elettriche (Regolamento Tecnico Omnibus),
        2024, che è sotto la giurisdizione del Ministero delle Industrie Pesanti
        ed è stato portato in vigore dal BIS. L'ordine entra in vigore il 1°
        Settembre 2026, e copre un ampio spettro di macchinari ed attrezzature
        elettriche come pompe per la gestione di liquidi, compressori, gru,
        macchine elettriche rotanti, trasformatori e interruttori e
        apparecchiature di controllo.
      </p>

      <p className="service-left-content-paragraph">
        Assiemaggi, sotto-assiemaggi e componenti di tali macchinari o
        attrezzature fanno parte anche dell'ambito di certificazione secondo la
        Sezione 16 del Bureau of Indian Standards Act, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Inoltre, sotto le Regole CMVR 1989 (Costruzione e Fabbricazione di
        Regolazione Valvola), Bowser e altri tipi di attrezzature da costruzione
        sotto la giurisdizione dello Scheme X, assicurano che il mercato non sia
        esposto ad attrezzature che mancano dei requisiti di sicurezza e
        standard tecnici.
      </p>

      <h2 className="service-left-content-heading-three">
        Regolamento Tecnico Omnibus (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        Il Ministero delle Industrie Pesanti ha rilasciato il &ldquo;Regolamento
        Tecnico Omnibus sugli Ordini di Sicurezza (Sicurezza Macchinari ed
        Elettrici attrezzature)&rdquo; tramite notifica E-Gazette dell'28 agosto
        2024. Questo regolamento innovativo intende migliorare - sicurezza,
        qualità e conformità di macchinari, attrezzature elettriche e i loro
        assemblaggi, sub assemblaggi e componenti, sotto Scheme X del
        Regolamento BIS, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Sotto l'OTR, tutte le categorie di macchinari e attrezzature elettriche,
        e tutte le loro parti e componenti sono incluse. Tuttavia, alcune
        categorie sono specificamente escluse:
      </p>

      <PointsListWithoutHeading
        points={[
          "Qualsiasi macchinario e componenti che fanno parte di qualsiasi altro ordine sotto la Sezione 16 che è emesso sotto il Bureau of Indian Standards Act, 2016.",
          "Beni domestici fabbricati e articoli che sono destinati solo all'esportazione.",
          "Macchinari e attrezzature da costruzione che sono sotto le Regole CMVR, 1989, prescritte dal Ministero dei Trasporti Stradali e Autostrade (MoRTH).",
        ]}
      />

      <p className="service-left-content-paragraph">
        Queste eccezioni sono fatte per facilitare la conformità ed evitare
        duplicazioni non necessarie di regolamentazione al fine di promuovere la
        facilità di fare business.
      </p>

      <p className="service-left-content-paragraph">
        Il Regolamento Tecnico Omnibus, 2024 copre tutti i macchinari ed
        attrezzature elettriche, inclusi interruttori a bassa tensione e
        apparecchiature di controllo notificati dal Ministero delle Industrie
        Pesanti, saranno trattati sotto il framework Scheme X della
        Certificazione BIS. L'Ordine entrerà in vigore il 1° Settembre 2026 in
        modo che i produttori e importatori abbiano abbastanza tempo per
        modificare le loro operazioni secondo gli Ordini emessi.
      </p>

      <h2 className="service-left-content-heading-three">
        Certificazione BIS sotto il Regolamento Tecnico Omnibus
      </h2>

      <p className="service-left-content-paragraph">
        Secondo l'OTR 2024, i produttori, nonché gli importatori, di macchinari
        e attrezzature elettriche che includono pompe, pompe, compressori,
        centrifughe, gru, trasformatori e interruttori devono richiedere la
        Certificazione BIS sotto Scheme X.
      </p>

      <p className="service-left-content-paragraph">
        Sotto Scheme X, i produttori possono optare per richiedere:
      </p>

      <PointsListWithoutHeading
        points={["Una Licenza BIS, o", "Un Certificato di Conformità (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Prodotti che portano il Marchio Standard BIS che è un Marchio di
        Conformità che certifica e assicura agli utenti che il prodotto è
        sicuro, affidabile e di buona qualità. È anche un marchio di fiducia e
        davvero buone prestazioni.
      </p>

      <h3 className="service-left-content-heading-three">
        Nota Speciale per le PMI
      </h3>

      <p className="service-left-content-paragraph">
        Come in molti altri settori, Micro, Piccole e Medie Imprese (PMI) devono
        anche conformarsi a Scheme X e ottenere la Certificazione BIS per i loro
        macchinari e attrezzature elettriche. Sebbene possa sembrare che la
        conformità ai requisiti regolatori possa essere challenging, il
        certificato Scheme X è un valore aggiunto e un vantaggio per le PMI per
        i seguenti motivi:
      </p>

      <PointsListWithoutHeading
        points={[
          "Dimostra l'adesione agli obblighi legali e altri requisiti stabiliti dal governo.",
          "Aumenta la reputazione del prodotto e la fiducia dei consumatori.",
          "Facilita l'accesso a un mercato domestico e estero più ampio.",
          "Migliora la posizione globale della PMI in termini di competitività, sicurezza e qualità.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Logo BIS Scheme X</h3>

      <p className="service-left-content-paragraph">
        Il marchio standard BIS dello Scheme X forma un marchio di qualità e un
        principio di fiducia. Il Logo contiene:
      </p>

      <PointsListWithoutHeading
        points={[
          "il numero standard è visualizzato nella parte superiore del logo; e",
          "il numero di licenza visualizzato nella parte inferiore del Logo nel formato: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        Questo marchio significa che una Licenza BIS è stata emessa con successo
        al produttore. Esenta il produttore a posizionare il Marchio BIS e
        assicura ai consumatori che il prodotto è autentico e sicuro.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="Logo BIS Scheme X"
          title="Certificazione BIS Scheme X"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h3 className="service-left-content-heading-three">
        Implicazioni Legali
      </h3>

      <p className="service-left-content-paragraph">
        Il Marchio Standard BIS è un marchio di fiducia e qualità. Il marchio è
        disponibile solo dopo che un contratto valido è in atto. Solo un
        contratto valido permette al proprietario di usare il marchio. Usare il
        marchio senza un contratto valido è un reato secondo la costituzione
        indiana ed è uguale a avere un marchio legale. Il proprietario del
        marchio è posto sotto restrizioni pesanti per l'uso della licenza
        CM/L-XXXXXXXXXX per prodotti che non hanno certificazione BIS.
      </p>

      <p className="service-left-content-paragraph">
        Ne consegue che ogni produttore è obbligato a:
      </p>

      <PointsListWithoutHeading
        points={[
          "Ottenere una Licenza BIS valida sotto Scheme X.",
          "Soddisfare i requisiti pertinenti degli Standard Indiani; e",
          "Affiggere correttamente i prodotti con il Logo BIS approvato.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Questo framework regolatorio è esteso per proteggere gli interessi di
        consumatori e persone d'affari, favorendo un mercato che enfatizza
        sicurezza, apertura e fiducia.
      </p>

      <h2 className="service-left-content-heading-three">
        Differenze Chiave Tra Scheme-I e Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "Include una categoria più ampia di prodotti di consumo come elettronica, elettrodomestici e persino prodotti industriali.",
          "I prodotti emessi un certificato sotto questo schema devono avere il Marchio Standard ISI.",
          "Riguarda sia produttori domestici che esteri.",
          "Coinvolge audit fabbrica e test campione per determinare qualità e conformità agli Standard Indiani.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "Affronta prodotti ingegneristici industriali ad alto rischio e critici per la sicurezza, che includono attrezzature elettriche, macchinari e sistemi industriali di notevole dovere.",
          "La certificazione è più rigorosa di Scheme-I. Coinvolge report tecnici avanzati, controllo conformità e audit di certificazione estesi.",
          "Lo Scheme-X tende a essere più costoso di Scheme-I a causa della documentazione di conformità extra.",
          "Qualsiasi attività che tratta attrezzature elettriche o macchinari industriali è obbligata a ottenere certificazione sotto Scheme-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Caratteristica
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Marchio ISI
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Gestito da
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Indiana
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Indiana
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Tipo di Certificazione
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Licenza BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Certificato BIS / Licenza BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Prodotti Target
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Beni di consumo
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Macchinari & attrezzature elettriche
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Marchio Utilizzato
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Marchio ISI
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Marchio standard BIS (sotto Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Livello di Conformità
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Conformità standard indiano
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Conformità tecnica e di sicurezza di alto livello
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Prodotti Coperti da Scheme-X
      </h3>

      <p className="service-left-content-paragraph">
        Lo Scheme-X copre prodotti con il più alto rischio per sicurezza e
        performance, inclusi:
      </p>

      <PointsListWithoutHeading
        points={[
          "Attrezzature Elettriche: Trasformatori industriali, unità di alimentazione e simili, interruttori a bassa tensione e apparecchiature di controllo, più altri dispositivi ad alta tensione.",
          "Macchinari Pesanti: Presse idrauliche, gru industriali, macchine utensili automatizzate e attrezzature specializzate per industrie su larga scala.",
          "Attrezzature Critiche per la Vita: Estintori, recipienti a pressione, sistemi elettrici di emergenza e altri dispositivi e sistemi per la sicurezza della vita.",
          "Elettronica Specializzata per Consumatori & Industriali: Elettrodomestici elettronici di grado medico e attrezzature che incorporano misure protettive avanzate.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                N. Seq.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Descrizione di Macchinari e Attrezzature Elettriche
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Codice HS
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
                  to="/certificazione-bis-schema-x-per-pompe-e-elevatori-di-liquidi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di Pompe per la gestione di liquidi, ascensori
                  per liquidi e (o)i loro assemblaggi /sotto-assemblaggi
                  /componenti
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
                  to="/certificazione-bis-schema-x-per-compressori"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di compressori e(o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-apparecchiature-di-trattamento-termico"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchinari per il trattamento dei materiali
                  attraverso un processo che coinvolge un cambiamento di
                  temperatura e(o)i loro assemblaggi /sotto-assemblaggi
                  /componenti
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
                  to="/certificazione-bis-schema-x-per-centrifughe-e-macchinari-di-filtrazione-o-purificazione"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di centrifughe, macchinari per filtraggio o
                  purificazione per liquidi e gas e(o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-macchinari-per-imballaggio"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchinari per riempimento, chiusura,
                  sigillatura, etichettatura bottiglie, imballaggio o
                  avvolgimento e(o)i loro
                  assemblaggi/sotto-assemblaggi/componenti
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
                  to="/certificazione-bis-schema-x-per-gru"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di gru e (o) i loro assemblaggi
                  /sotto-assemblaggi/componenti
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
                  to="/certificazione-bis-schema-x-per-macchinari-da-costruzione"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchinari per costruzione, movimenti terra,
                  Estrazione e (o)i loro assemblaggi
                  /sotto-assemblaggi/componenti
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
                  to="/certificazione-bis-schema-x-per-macchine-per-tessitura-telai"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchine per tessitura (telai) e (o)i loro
                  assemblaggi/sotto-assemblaggi / componenti
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
                  to="/certificazione-bis-schema-x-per-macchine-da-ricamo"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchinari per la realizzazione di ricami
                  e(o)i loro assemblaggi /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-utensili-per-macchine-da-taglio-metalli"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchine utensili per il taglio del metallo
                  coperti sotto l'intestazione 8456 a 8461 e(o)i loro
                  assemblaggi /sotto-assemblaggi/componenti
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
                  to="/certificazione-bis-schema-x-per-utensili-per-macchine"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchine utensili per lavorare pietra,
                  ceramiche, calcestruzzo, cemento amianto o simile vetro
                  minerale e (o)i loro assemblaggi /sotto-assemblaggi
                  /componenti
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
                  to="/certificazione-bis-schema-x-per-macchinari-di-gomma-e-plastica"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchinari per lavorare gomma e plastiche e(o)
                  i loro assemblaggi /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-lavori-pubblici-e-apparecchiature-meccaniche"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di Macchine inclusi i macchinari per lavori
                  pubblici & edilizia e i macchinari & apparecchiature
                  meccaniche con funzioni individuali, non specificate O incluse
                  altrove in Capitolo 84 e(o)i loro
                  assemblaggi/sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-ingranaggi-ingranamento-ed-elementi-di-trasmissione"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di ingranaggi e trasmissioni, ruote dentate,
                  pignoni a catena, elementi di trasmissione viti a sfere o
                  rulli, scatole degli ingranaggi e cambi di velocità, inclusi
                  convertitori di coppia E (o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-macchine-elettriche-rotanti"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di macchine elettriche rotanti come Generatore,
                  ecc. e (o) i loro assemblaggi /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-generatori-diesel"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di Generatore Diesel e (o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-trasformatori"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di Trasformatori e (o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-convertitori-a-semiconduttore-di-potenza"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di Convertitore a Semiconduttori di Potenza e
                  (o)i loro assemblaggi /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-fino-a-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di apparecchiature per interruttori e
                  apparecchiature di controllo che operano a tensioni non
                  superiori a 1000 volt e (o)i loro assemblaggi
                  /sotto-assemblaggi /componenti
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
                  to="/certificazione-bis-schema-x-per-apparecchiature-di-interruttori-e-controllori-oltre-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tutti i tipi di apparecchiature per interruttori e
                  apparecchiature di controllo che operano a tensioni superiori
                  a 1000 volt e (o) i loro assemblaggi /sotto-assemblaggi
                  /componenti
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
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Standard di Sicurezza per Prodotto
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Descrizione di Macchinari e Attrezzature Elettriche
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
            Scarica PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Standard di Sicurezza Sotto BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        Più che una semplice necessità legale, la Certificazione BIS Scheme - X
        offre una promessa di sicurezza, qualità e affidabilità. Questa
        Certificazione, che comporta un'adesione rigorosa a norme nazionali e
        internazionali, assicura che i macchinari e le apparecchiature
        elettriche offerti agli utenti siano sicuri, ecologici e tecnicamente
        solidi.
      </p>

      <p className="service-left-content-paragraph">
        Per certificare sotto Scheme - X, i produttori devono conformarsi ai
        seguenti componenti principali di sicurezza:
      </p>

      <PointsListWithoutHeading
        points={[
          "Sicurezza Elettrica: Conformità agli standard IEC e Indiani applicabili. La certificazione protegge contro cortocircuiti, scosse elettriche, guasti all'isolamento, perdita nella terra protettiva, accensione di materiali combustibili circostanti e incendio.",
          "Sicurezza Meccanica: Valutazione dell'integrità strutturale della macchina e dell'integrità delle parti mobili e dei nuovi materiali. Assicura che l'attrezzatura sia sottoposta in sicurezza a stress meccanico, usura e pericoli operativi.",
          "Sicurezza Antincendio: L'uso di materiali progettati e costruiti con materiale resistente al fuoco. Conformità agli standard per le prestazioni di propagazione della fiamma per controllare i rischi associati all'incendio.",
          "Conformità Ambientale: L'uso di potenza controllata e materiali eco - amichevoli nella produzione di attrezzature. Incoraggia i produttori a ridurre l'impatto ambientale delle loro attrezzature.",
          "Gestione Qualità: Controllo dominante e autonomo sui processi di produzione per mantenere gli standard e le norme preimpostati. Focus sulla regolamentazione delle condizioni della fabbrica, inclusi audit di processo e adesione continua.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Standard Regolatori Sotto Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        I produttori sono tenuti a conformarsi agli Standard Indiani Pertinenti
        che sono allineati agli Standard Internazionali, inclusi:
      </p>

      <h3 className="service-left-content-heading-three">Standard Tipo A:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Sicurezza di Macchinari: Principi Generali per la Progettazione, Valutazione del Rischio e Riduzione del Rischio.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Standard Tipo B:</h3>

      <PointsListWithoutHeading
        points={[
          "Descritti nel Secondo Allegato dell'Ordine Regolamento Tecnico Omnibus (OTR), 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Standard Tipo C:</h3>

      <PointsListWithoutHeading
        points={["Descritti nel Terzo Allegato dell'Ordine OTR, 2024."]}
      />

      <h3 className="service-left-content-heading-three">
        Serie IS/IEC 60947:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Coprono interruttori e apparecchiature di controllo a bassa tensione in più parti e sezioni.",
        ]}
      />
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

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/indische-bis-zertifizierung-nach-schema-x",
    },
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
    // {
    //   code: "it",
    //   name: "Italian",
    //   flag: "https://flagcdn.com/w320/it.png",
    //   path: "/it/certificazione-bis-indiana-secondo-schema-x",
    // },
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
                        alt={`${language.country} Flag`}
                        title={`${language.country} Flag`}
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
