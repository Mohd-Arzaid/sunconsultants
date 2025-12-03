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
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
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
import CDSCO from "../../assets/images/CDSCO.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationItalian = () => {
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
      <FooterItalian />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

const CRSRegistrationMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Casa",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Registrazione BIS CRS",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        Registrazione BIS - Schema di Registrazione Obbligatorio (CRS)
      </title>
      <meta
        name="description"
        content="La registrazione BIS è ottenere una licenza dal BIS per prodotti elettronici e IT che sono conformi agli standard indiani applicabili sotto lo schema CRS."
      />
      <meta
        name="keywords"
        content="Certificato BIS, Processo di Registrazione BIS, Registrazione BIS, Processo di registrazione BIS online, Certificazione BIS per prodotti elettronici, Processo di registrazione BIS in India, Registrazione BIS per prodotti elettronici, Schema di registrazione obbligatorio"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Registrazione BIS - Schema di Registrazione Obbligatorio (CRS)"
      />
      <meta
        property="og:description"
        content="La registrazione BIS è ottenere una licenza dal BIS per prodotti elettronici e IT che sono conformi agli standard indiani applicabili sotto lo schema CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Registrazione BIS - Schema di Registrazione Obbligatorio (CRS)"
      />
      <meta
        name="twitter:description"
        content="La registrazione BIS è ottenere una licenza dal BIS per prodotti elettronici e IT che sono conformi agli standard indiani applicabili sotto lo schema CRS."
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
                  <Link to="/">Casa</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Registrazione BIS CRS</BreadcrumbPage>
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
              Competenza Certificata
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Registrazione BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Obbligatorio per i prodotti elettronici per garantire sicurezza e
            qualità. Ottieni l'approvazione BIS con assistenza esperta!
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
    if (path.includes("/it/cose-il-crs-bis-o-registrazione-crs"))
      return "Registrazione CRS Italian";
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

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Inserisci un nome completo valido.",
        description: "Il nome deve contenere solo lettere e spazi.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Inserisci un indirizzo email valido.",
        description: "Controlla se il formato della tua email è corretto",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Inserisci un numero di telefono valido",
        description: "Il numero di telefono deve essere (8-15 cifre)",
      });
      setLoading(false);
      return;
    }

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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Prenota un Appuntamento
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Vuoi contattare il nostro team e programmare una chiamata?
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
    overview: "Panoramica",
    eligibility: "Idoneità",
    documents: "Documenti",
    registration: "Registrazione",
    fees: "Tariffe di Registrazione",
    elabelling: "E-Etichettatura",
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

const CRSRegistrationMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <CRSRegistrationMainContentLeft />
          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <CRSRegistrationServiceFaq />
      <CISProductTable />
      <LanguageSelector />
      <div id="services">
        <Services />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">
            Cos'è la Registrazione BIS?
          </h2>

          <p className="service-left-content-paragraph">
            Il Bureau of Indian Standards (BIS) è l'organismo nazionale di
            standardizzazione in India e opera sotto il Ministero degli Affari
            dei Consumatori, Alimentari e Distribuzione Pubblica del Governo
            dell'India. Il BIS è responsabile del mantenimento dei parametri di
            qualità, sicurezza e prestazioni per vari prodotti e servizi in
            India secondo gli Standard Indiani (IS) pertinenti.
          </p>

          <p className="service-left-content-paragraph">
            Il BIS è responsabile della supervisione e dell'implementazione di
            vari schemi in India. Lo Schema di Registrazione Obbligatorio (CRS)
            è uno schema di certificazione molto prominente e obbligatorio del
            BIS che copre varie categorie di prodotti elettronici e IT.
          </p>

          <p className="service-left-content-paragraph">
            Le prestazioni e la sicurezza dei prodotti indiani è una questione
            importante per l'India. La Certificazione BIS CRS garantisce che i
            prodotti elettronici e IT siano conformi agli standard indiani e
            aiuta a salvaguardare i consumatori da prodotti non conformi e di
            qualità inferiore.
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
        <ServiceAuthorItalian />
      </div>
    </div>
  );
};

const productsData = [
  {
    id: 1,
    product: "AMPLIFICATORI CON POTENZA DI INGRESSO 2000W E SUPERIORE",
    isNumber: "IS 616:2017",
    date: "03 luglio 2013",
  },
  {
    id: 2,
    product: "MACCHINA DI ELABORAZIONE DATI AUTOMATICA",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 3,
    product: "OROLOGI ELETTRONICI CON ALIMENTAZIONE DI RETE",
    isNumber: "IS 302-2-26:2014",
    date: "03 luglio 2013",
  },
  {
    id: 4,
    product: "GIOCHI ELETTRONICI (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 luglio 2013",
  },
  {
    id: 5,
    product:
      "SISTEMI MUSICALI ELETTRONICI CON POTENZA DI INGRESSO 200W E SUPERIORE",
    isNumber: "IS 616:2017",
    date: "03 luglio 2013",
  },
  {
    id: 6,
    product: "LAPTOP/NOTEBOOK/TABLET",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 7,
    product: "FORNI A MICROONDE",
    isNumber: "IS 302-2-25:2014",
    date: "03 luglio 2013",
  },
  {
    id: 8,
    product:
      "LETTORI DISCO OTTICO CON AMPLIFICATORI INTEGRATI DI POTENZA DI INGRESSO 200W E SUPERIORE",
    isNumber: "IS 616:2017",
    date: "03 luglio 2013",
  },
  {
    id: 9,
    product: 'TELEVISORI PLASMA/LCD/LED DI DIMENSIONE SCHERMO 32" E SUPERIORE',
    isNumber: "IS 616:2017",
    date: "03 luglio 2013",
  },
  {
    id: 10,
    product: "STAMPANTI, PLOTTER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 11,
    product: "SCANNER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 12,
    product: "DECODER",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 13,
    product: "SEGRETERIE TELEFONICHE",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 14,
    product:
      'UNITÀ DI VISUALIZZAZIONE, MONITOR VIDEO DI DIMENSIONE SCHERMO 32" E SUPERIORE',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 15,
    product: "TASTIERE WIRELESS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 luglio 2013",
  },
  {
    id: 16,
    product: "REGISTRATORI DI CASSA",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 17,
    product: "MACCHINE COPIATRICI/DUPLICATRICI",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 18,
    product: "LETTORE PASSAPORTI",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 19,
    product: "TERMINALI PUNTO VENDITA",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 20,
    product:
      "MACCHINE ELABORAZIONE POSTA/MACCHINE FRANCOBOLLI/MACCHINE FRANCOBOLI",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 21,
    product: "BANCHI DI POTENZA PER USO IN APPLICAZIONI PORTATILI",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 22,
    product: "LETTORE SMART CARD",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 maggio 2015",
  },
  {
    id: 23,
    product: "TELEFONI CELLULARI",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 settembre 2015",
  },
  {
    id: 24,
    product: "LAMPADE LED AUTOCOMPENSATE PER SERVIZI ILLUMINAZIONE GENERALE",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 settembre 2015",
  },
  {
    id: 25,
    product:
      "APPARECCHIATURA DI CONTROLLO ELETTRONICA ALIMENTATA IN CC O CA PER MODULI LED",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 dicembre 2015",
  },
  {
    id: 26,
    product: "ADATTATORI DI POTENZA PER APPARECCHI AUDIO, VIDEO E SIMILI",
    isNumber: "IS 616:2010",
    date: "01 dicembre 2015",
  },
  {
    id: 27,
    product: "ADATTATORI DI POTENZA PER ATTREZZATURE IT",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 dicembre 2015",
  },
  {
    id: 28,
    product: "LUMINARI LED FISSI PER USO GENERALE",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 marzo 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTER DI POTENZA <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 marzo 2016",
  },
  {
    id: 30,
    product:
      "CELLE/BATTERIE SECONDARIE SIGILLATE CONTENENTI ELETTROLITI ALCALINI O ALTRI NON ACIDI PER USO IN APPLICAZIONI PORTATILI PARTE 1 SISTEMI NICHEL",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 giugno 2016",
  },
  {
    id: 31,
    product:
      "CELLE/BATTERIE SECONDARIE SIGILLATE CONTENENTI ELETTROLITI ALCALINI O ALTRI NON ACIDI PER USO IN APPLICAZIONI PORTATILI PARTE 2 SISTEMI LITIO",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 giugno 2016",
  },
  {
    id: 32,
    product: "SUPPORTO LINGUA INDIANA PER APPARECCHI TELEFONICI CELLULARI",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 maggio 2018",
  },
  {
    id: 33,
    product: "LUMINARI LED INCASSATI",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 maggio 2018",
  },
  {
    id: 34,
    product: "LUMINARI LED PER ILLUMINAZIONE STRADALE E URBANA",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 maggio 2018",
  },
  {
    id: 35,
    product: "FARI LED",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 maggio 2018",
  },
  {
    id: 36,
    product: "LAMPADE LED PORTATILI",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 maggio 2018",
  },
  {
    id: 37,
    product: "CATENE ILLUMINAZIONE LED",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 maggio 2018",
  },
  {
    id: 38,
    product: "LUMINARI LED PER ILLUMINAZIONE DI EMERGENZA",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 maggio 2018",
  },
  {
    id: 39,
    product: "UPS/INVERTER DI POTENZA <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 maggio 2018",
  },
  {
    id: 40,
    product: "TELEVISORI PLASMA/LCD/LED DI DIMENSIONE SCHERMO FINO A 32",
    isNumber: "IS 616 : 2017",
    date: "23 maggio 2018",
  },
  {
    id: 41,
    product:
      "UNITÀ DI VISUALIZZAZIONE, MONITOR VIDEO DI DIMENSIONE SCHERMO FINO A 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 maggio 2018",
  },
  {
    id: 42,
    product: "TELECAMERE CCTV/REGISTRATORI CCTV",
    isNumber:
      "IS 13252 (Part 1) : 2010, Requisiti Essenziali per Sicurezza CCTV",
    date: "23 maggio 2018",
  },
  {
    id: 43,
    product: "ADATTATORI PER ELETTRODOMESTICI E SIMILI",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 maggio 2018",
  },
  {
    id: 44,
    product:
      "LETTORI CODICE A BARRE USB, SCANNER CODICE A BARRE, SCANNER IRIDE, SCANNER IMPRONTE DIGITALI OTTICI",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 maggio 2018",
  },
  {
    id: 45,
    product: "OROLOGI INTELLIGENTI",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 maggio 2018",
  },
  {
    id: 46,
    product:
      "MODULI FOTOVOLTAICI TERRESTRI SILICIO CRISTALLINO (PV) (BASATI SU WAFER SI)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 marzo 2019",
  },
  {
    id: 47,
    product: "MODULI FOTOVOLTAICI TERRESTRI A FILM SOTTILE (a-Si, CiGs e CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 marzo 2019",
  },
  {
    id: 48,
    product: "CONVERTITORI DI POTENZA PER USO IN SISTEMI FOTOVOLTAICI",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 giugno 2021",
  },
  {
    id: 49,
    product: "INVERTER FOTOVOLTAICI INTERCONNESSI ALLA RETE",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 giugno 2021",
  },
  {
    id: 50,
    product: "BATTERIA DI ACCUMULO",
    isNumber: "IS 16270 : 2014",
    date: "01 gennaio 2019",
  },
  {
    id: 51,
    product: "MODULI LED INDIPENDENTI PER ILLUMINAZIONE GENERALE",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 aprile 2021",
  },
  {
    id: 52,
    product: "CATENA ILLUMINAZIONE (LUCI A CORDA)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 aprile 2021",
  },
  {
    id: 53,
    product: "TASTIERA",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 aprile 2021",
  },
  {
    id: 54,
    product: "PIANO COTTURA AD INDUZIONE",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 aprile 2021",
  },
  {
    id: 55,
    product: "MACCHINE AUTOMATICHE DISTRIBUTRICI CONTANTI",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 aprile 2021",
  },
  {
    id: 56,
    product: "DISCO RIGIDO ESTERNO USB",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 aprile 2021",
  },
  {
    id: 57,
    product: "CUFFIE E AURICOLARI WIRELESS",
    isNumber: "IS 616 : 2017",
    date: "01 aprile 2021",
  },
  {
    id: 58,
    product:
      "DISPOSITIVI DI ARCHIVIAZIONE SOLIDA ESTERNI USB (CAPACITÀ SUPERIORE A 256 GB)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 aprile 2021",
  },
  {
    id: 59,
    product:
      "SISTEMA MUSICALE ELETTRONICO CON POTENZA DI INGRESSO SOTTO 200 WATT",
    isNumber: "IS 616 : 2017",
    date: "01 aprile 2021",
  },
  {
    id: 60,
    product:
      "ALIMENTATORI STANDALONE A COMMUTAZIONE (SMPS) CON TENSIONE DI USCITA 48V (MAX)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 aprile 2021",
  },
  {
    id: 61,
    product: "TELEVISORI DIVERSI DA TV PLASMA/LCD/LED",
    isNumber: "IS 616 : 2017",
    date: "01 aprile 2021",
  },
  {
    id: 62,
    product: "CUOCO RISO",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 aprile 2021",
  },
  {
    id: 63,
    product: "MICROFONO WIRELESS",
    isNumber: "IS 616 : 2017",
    date: "01 ottobre 2021",
  },
  {
    id: 64,
    product: "FOTOCAMERA DIGITALE",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 ottobre 2021",
  },
  {
    id: 65,
    product: "VIDEOCAMERA",
    isNumber: "IS 616 : 2017",
    date: "01 ottobre 2021",
  },
  {
    id: 66,
    product: "WEBCAM (PRODOTTO FINITO)",
    isNumber: "IS 616 : 2017",
    date: "01 ottobre 2021",
  },
  {
    id: 67,
    product: "ALTOPARLANTI INTELLIGENTI (CON E SENZA DISPLAY)",
    isNumber: "IS 616 : 2017",
    date: "01 ottobre 2021",
  },
  {
    id: 68,
    product: "DIMMER PER PRODOTTI LED",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 ottobre 2021",
  },
  {
    id: 69,
    product: "ALTOPARLANTI BLUETOOTH",
    isNumber: "IS 616 : 2017",
    date: "01 ottobre 2021",
  },
  {
    id: 70,
    product: "ACIDO ORTOFOSFORICO",
    isNumber: "IS 798 : 2020",
    date: "12 dicembre 2021",
  },
  {
    id: 71,
    product: "ACIDO POLIFOSFORICO",
    isNumber: "IS 17439:2020",
    date: "24 dicembre 2021",
  },
  {
    id: 72,
    product: "BALLE DI COTONE",
    isNumber: "IS 12171:2019",
    date: "03 marzo 2023",
  },
  {
    id: 73,
    product: "TRIMETIL FOSFITO GRADO TECNICO",
    isNumber: "IS 17412:2020",
    date: "03 marzo 2023",
  },
  {
    id: 74,
    product: "TELEVISORI",
    isNumber: "IS 18112:2022",
    date: "26 aprile 2023",
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
          Elenco Ufficiale Prodotti Sotto Registrazione BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          La seguente tabella elenca i prodotti che richiedono la registrazione
          BIS CRS in India insieme ai loro numeri di Standard Indiano (IS)
          applicabili e alle date di implementazione.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cerca prodotti per nome o numero IS..."
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
                  N.Seq
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Prodotto
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  N.IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Data di Implementazione
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
                Successivo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
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
      path: "/what-is-crs-bis-or-crs-registration",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/crs-bis-shi-shen-me-huo-crs-deng-ji",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/was-ist-crs-bis-oder-crs-registrierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/wat-is-crs-bis-of-crs-registratie",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/crs-bis-toha-nani-ka-crs-toroku",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/crs-bis-i-mueos-inga-crs-deunglog",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/que-es-crs-bis-o-registro-crs",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/crs-bis-khue-a-rai-rab-phit-thab-crs",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/apa-itu-crs-bis-atau-registrasi-crs",
    },
    // {
    //   code: "it",
    //   name: "Italian",
    //   flag: "https://flagcdn.com/w320/it.png",
    //   path: "/it/cose-il-crs-bis-o-registrazione-crs",
    // },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
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

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              I Nostri Servizi
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Il Miglior Consulente Certificazioni dell'India
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
              Marchio BIS (Licenza ISI) per Produttori Stranieri
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificazione Registrazione CDSCO
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
              Gestione Rifiuti Plastici
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
              Certificato Registrazione BIS
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

const CRSRegistrationServiceFaq = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. Cos'è la registrazione BIS?",
      answer:
        "La certificazione BIS è un processo di conformità governato dal Bureau of Indian Standards, che verifica che un prodotto soddisfi gli Standard Indiani (IS) applicabili per qualità, sicurezza e affidabilità.",
    },
    {
      id: "item-2",
      question: "2. Cos'è la registrazione CRS sotto BIS?",
      answer:
        "CRS sta per Schema di Registrazione Obbligatorio. È un processo di registrazione obbligatorio per categorie specifiche di prodotti come elettronica, elettrici, batterie e articoli solari. I prodotti sotto CRS devono essere testati e registrati con BIS prima di poter essere venduti in India.",
    },
    {
      id: "item-3",
      question: "3. La certificazione BIS è obbligatoria in India?",
      answer:
        "Sì. Per tutti i prodotti elencati nella lista dei prodotti CRS (attualmente 80+ articoli), la registrazione BIS è obbligatoria per la produzione, importazione o vendita in India.",
    },
    {
      id: "item-4",
      question: "4. Qual è la differenza tra BIS CRS e marchio ISI?",
      answer:
        "BIS CRS: Per elettronica e beni IT, solo per prodotti obbligatori notificati sotto QCO. <br />Marchio ISI: Utilizzato per una gamma più ampia di prodotti, può essere volontario o obbligatorio a seconda della categoria del prodotto.",
    },
    {
      id: "item-5",
      question: "5. Chi può richiedere la registrazione BIS CRS?",
      answer:
        "Solo i produttori possono richiedere. Questo include sia produttori indiani che stranieri. I marchi stranieri devono nominare un Rappresentante Indiano Autorizzato (AIR).",
    },
    {
      id: "item-6",
      question: "6. Qual è il ruolo di un AIR?",
      answer:
        "Un Rappresentante Indiano Autorizzato (AIR) è legalmente responsabile per la presentazione dell'applicazione BIS per conto di un produttore straniero. Agiscono come collegamento ufficiale tra BIS e il richiedente estero.",
    },
    {
      id: "item-7",
      question: "7. Quanto tempo richiede la registrazione BIS CRS?",
      answer:
        "Il processo richiede tipicamente 3-4 settimane, assumendo che tutti i documenti e i rapporti di test siano presentati correttamente e non siano sollevate obiezioni da BIS.",
    },
    {
      id: "item-8",
      question: "8. Quanto costa il certificato BIS CRS?",
      answer:
        "I costi includono: <br />Spese di Test: ₹10,000–₹20,000 + GST <br />Tassa Governativa: ₹53,000 + GST per rapporto di test <br />Spese Aggiuntive: Dichiarazione giurata, corriere, documentazione AIR, ecc. <br />Sconto applicabile per produttori indiani registrati MSME",
    },
    {
      id: "item-9",
      question: "9. Qual è la validità dei certificati BIS CRS?",
      answer:
        "La licenza BIS iniziale è valida per 2 anni. Può essere rinnovata fino a 5 anni se i dettagli del prodotto e della produzione rimangono invariati.",
    },
    {
      id: "item-10",
      question:
        "10. La certificazione BIS può essere ottenuta volontariamente?",
      answer:
        "No. Sotto CRS, non puoi richiedere volontariamente prodotti che non sono elencati sotto QCO. La certificazione volontaria è applicabile solo per prodotti non-CRS tramite lo schema ISI.",
    },
    {
      id: "item-11",
      question: "11. Dove posso trovare la lista dei prodotti BIS CRS?",
      answer:
        'Puoi visitare il sito web ufficiale BIS <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> e navigare alla sezione "Prodotti sotto CRS" per visualizzare la lista completa dei prodotti coperti.',
    },
    {
      id: "item-12",
      question: "12. Il marchio BIS può essere visualizzato elettronicamente?",
      answer:
        "Sì, tramite e-etichettatura, ma deve soddisfare rigorose regole BIS: Le informazioni dell'etichetta devono essere incorporate nel firmware <br />Accesso facile entro 4 passaggi nel menu del dispositivo <br />L'imballaggio fisico deve ancora portare informazioni normative",
    },
    {
      id: "item-13",
      question:
        "13. Cosa succede se non ottengo la registrazione BIS per un prodotto obbligatorio?",
      answer:
        "Gravi penalità, inclusi: <br />Sequestro del prodotto <br />Rifiuti doganali <br />Multe legali <br />Rimozione dai portali e-commerce <br />Divieto permanente dal mercato indiano",
    },
    {
      id: "item-14",
      question: "14. Un certificato BIS può coprire più modelli o marchi?",
      answer:
        "No. Ogni marchio e ubicazione della fabbrica deve essere certificato separatamente. Più modelli possono essere aggiunti utilizzando rapporti aggiuntivi, ma solo sotto la stessa applicazione e marchio.",
    },
    {
      id: "item-15",
      question: "15. Come può Sun Certifications India aiutarmi?",
      answer:
        "Offriamo: <br />Supporto completo per la documentazione <br />Coordinamento laboratorio <br />Gestione applicazione portale BIS <br />Risoluzione query e follow-up BIS <br />Guida per rinnovo e etichettatura <br />Garanzia di conformità per marchi stranieri tramite servizi AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Domande Frequenti
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Non riesci a trovare la risposta che stai cercando?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Contattaci!
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
                  Mostra Meno FAQ
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
                  Mostra Più FAQ
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Panoramica</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Cos'è uno Schema di Registrazione Obbligatorio (CRS)?
      </h2>

      <p className="service-left-content-paragraph">
        Lo Schema di Registrazione Obbligatorio (CRS) è uno schema di
        registrazione prodotti BIS che è stato lanciato nel 2012 ed era
        principalmente focalizzato sui prodotti elettronici. Nel corso degli
        anni, con il rilascio di più prodotti, il CRS è stato espanso per
        includere una gamma più ampia di categorie di prodotti, che includono
        prodotti elettrici come elettrodomestici, attrezzature solari, batterie
        e altro ancora. La registrazione CRS è obbligatoria per i prodotti
        specificati sotto gli Ordini di Controllo Qualità (QCO) emessi da
        diversi ministeri.
      </p>

      <p className="service-left-content-paragraph">
        Qualsiasi prodotto che rientra nello schema CRS obbligatorio deve essere
        venduto, importato o distribuito in India solo dopo aver ottenuto la
        registrazione con BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Storia della Certificazione CRS in India
      </h3>

      <p className="service-left-content-paragraph">
        Nel 2012, il primo QCO sotto lo schema CRS è stato rilasciato e
        focalizzato su attrezzature elettroniche e IT. Da allora, QCO aggiuntivi
        sono stati emessi nei seguenti settori:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elettronica di Consumo",
          "Illuminazione e LED",
          "Batterie e Celle",
          "Dispositivi di Comunicazione Wireless",
          "Pannelli Solari e Componenti",
          "Elettrodomestici per Famiglie",
        ]}
      />

      <p className="service-left-content-paragraph">
        L'elenco per la Certificazione CRS si sta espandendo rapidamente, quindi
        è molto importante per i produttori essere proattivi e consapevoli degli
        aggiornamenti recenti.
      </p>

      <h2 className="service-left-content-heading-two">
        Registrazione CRS vs Marchio ISI: Qual è la Differenza?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Caratteristica
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Registrazione CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  Marchio ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Natura
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Obbligatorio (solo per prodotti elencati QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Volontario o Obbligatorio (basato sul prodotto)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Ambito Prodotto
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Elettronica, IT, Elettrici, Batterie, ecc.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Cibo, cemento, acciaio, elettrici, ecc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Applicazione
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Online, Portale BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Manuale + Online, Sistema BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Flessibilità
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Solo per beni coperti QCO
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Può essere volontario per beni non-QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etichettatura
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Richiede logo BIS CRS e numero di registrazione
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Richiede logo ISI con codice standard
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        Perché Devi Conoscere il Framework BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        Se sei un produttore in India, o un'azienda straniera che cerca di
        entrare nel mercato indiano, conoscere i passaggi BIS CRS è un must. Ti
        aiuta a:
      </p>

      <PointsListWithoutHeading
        points={[
          "Evitare sanzioni per non conformità.",
          "Preparare programmi di produzione (considerando il tempo di test in laboratorio).",
          "Facilitare l'elaborazione doganale più facile.",
          "Guadagnare la fiducia del marchio a lungo termine del cliente indiano.",
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
        <span className="service-left-content-index-heading">Idoneità</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Criteri di Idoneità per la Registrazione BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        Chi Può Richiedere la Certificazione BIS Sotto CRS?
      </p>

      <p className="service-left-content-paragraph">
        In India, un certificato BIS sotto lo Schema di Registrazione
        Obbligatorio (CRS) può essere concesso solo ai produttori che soddisfano
        i requisiti stabiliti dal Bureau of Indian Standards. Questo per
        garantire che solo produttori autentici ottengano il privilegio di poter
        registrare e apporre il logo BIS CRS sui loro prodotti.
      </p>

      <div className="service-left-content-heading-three">
        Lista di Controllo Criteri di Idoneità
      </div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Requisito
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Descrizione
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Il Richiedente deve essere un Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Solo il produttore originale (non commerciante o rivenditore)
                  del prodotto è idoneo a richiedere.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  La Posizione Può Essere Indiana o Straniera
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Sia i produttori indiani che i marchi internazionali possono
                  richiedere.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (Rappresentante Indiano Autorizzato)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  I produttori stranieri devono nominare un AIR — sia il loro
                  ufficio indiano che una terza parte formalmente autorizzata.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Rapporti di Test da Laboratori Approvati BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Il prodotto deve essere testato in un laboratorio riconosciuto
                  BIS e soddisfare lo Standard Indiano (IS) applicabile.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Documentazione Appropriata
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Tutti i documenti richiesti devono essere presentati nei
                  formati prescritti (dettagli nella prossima sezione).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Una Registrazione Per Marchio e Posizione
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Una domanda separata deve essere presentata per ogni tipo di
                  prodotto, ubicazione di produzione e nome del marchio.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-two">
        Chi è un Rappresentante Indiano Autorizzato (AIR)?
      </h2>

      <p className="service-left-content-paragraph">
        Per i produttori stranieri, uno degli obblighi è nominare un
        Rappresentante Indiano Autorizzato (AIR) per la comunicazione e
        rappresentanza in India.
      </p>

      <div className="service-left-content-heading-three">
        Responsabilità dell'AIR:
      </div>

      <PointsListWithoutHeading
        points={[
          "Agisce come rappresentante legale per il richiedente straniero",
          "Comunica e gestisce tutti gli obblighi con BIS per conto del produttore",
          "Legalmente responsabile per tutta la conformità e documentazione",
          "Non può essere un agente o distributore a meno che non sia chiaramente autorizzato dal produttore",
        ]}
      />

      <p className="service-left-content-paragraph">
        Come parte dell'accordo, l'AIR deve presentare un accordo firmato da
        entrambe le parti insieme a una prova dell'indirizzo indiano.
      </p>

      <div className="service-left-content-heading-three">
        Scenario di Vita Reale:
      </div>

      <p className="service-left-content-paragraph">
        L'Azienda ABC sta pianificando di introdurre un nuovo modello di power
        bank in India.
      </p>

      <PointsListWithoutHeading
        points={[
          "L'Azienda ABC è il produttore.",
          "Hanno il prodotto testato in uno dei laboratori accreditati BIS in India.",
          "Il loro ufficio di filiale a Delhi serve come AIR registrato.",
          "Caricano l'applicazione sul portale BIS insieme alla documentazione richiesta.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Il risultato è che viene emesso un certificato BIS sotto CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documenti</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documenti Richiesti per la Registrazione BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Elenco dei documenti richiesti per ottenere la registrazione BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Compilare l'applicazione BIS CRS per la registrazione è completamente
        digitale, tuttavia, richiede ancora documenti completamente completati
        per ottenere l'approvazione. Ogni errore minuto e un fallimento
        nell'aderire a qualsiasi aspetto, come il tipo di documento, formati
        impropri o tipi di file sbagliati può causare il rifiuto o il ritardo
        dell'applicazione.
      </p>

      <p className="service-left-content-paragraph">
        Per l'elaborazione corretta e più veloce dei documenti BIS, è necessario
        avere i documenti appropriati con te in ogni fase del percorso. Avere i
        documenti appropriati pronti garantisce che il tuo certificato BIS venga
        elaborato in tempo e rimanga legalmente chiaro da qualsiasi audit di
        conformità, ispezioni doganali o approvazioni del marketplace.
      </p>

      <div className="service-left-content-heading-three">
        Lista di Controllo Documenti per la Registrazione BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Documento
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Chi Presenta?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Note
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Prova dell'Indirizzo del Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Contratto di affitto fabbrica, bolletta utenze o licenza
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Rapporto di Test da Laboratorio Approvato BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore/Laboratorio
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Deve essere recente (entro 90 giorni) e riferire il codice IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Dichiarazioni (secondo Formato BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Richiedente
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Include responsabilità, conformità e responsabilità del
                  prodotto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Certificato Marchio
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Richiesto se il marchio è registrato
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Accordo AIR (Per richiedenti stranieri)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore Straniero e AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Firmato e autenticato
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Dichiarazione Giurata
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore o AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Formato scaricabile dal portale BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Ricevuta Tassa
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Richiedente
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Prova di pagamento della tassa governativa
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Lettera di Autorizzazione
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Autorizza AIR ad agire per loro conto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Certificato di Registrazione Azienda
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Prova di registrazione aziendale (GST, ROC, ecc.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etichette/Marcature Prodotto
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produttore
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Deve mostrare logo BIS, standard IS e spazio registrazione
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
        <span className="service-left-content-index-heading">
          Processo di Registrazione
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Processo di Registrazione BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        La Registrazione BIS CRS è un processo completamente online attraverso
        il Portale di Registrazione BIS. Non include solo procedure che
        includono il caricamento di documenti. Richiede anche attenzione
        speciale di natura tecnica, la comprensione delle normative, nonché
        totale conformità con lo Standard Indiano (IS).
      </p>

      <p className="service-left-content-paragraph">
        Processo BIS CRS, lo chiamiamo Sistema di Certificazione e Registrazione
        (CRS) per ora, ed ecco come si svolge il viaggio per la Certificazione
        BIS.
      </p>

      <div className="service-left-content-heading-three">
        Passo 1: Test del Prodotto presso Laboratorio Autorizzato BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Seleziona un laboratorio dall'elenco approvato BIS",
          "Presenta un campione del prodotto per il quale deve essere eseguito il test per l'IS pertinente",
          "Ottieni il rapporto di test per il campione secondo il formato rapporto di test BIS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Passo 2: Preparazione Documenti
      </div>

      <PointsListWithoutHeading
        points={[
          "Raccogli i documenti richiesti, come già delineato",
          "Assicurati che i documenti siano nominati, formattati, firmati e datati correttamente",
          "Sviluppa un'etichetta prodotto che è un adesivo mock che contiene uno spazio per un logo BIS e spazio per standard IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Passo 3: Compilazione dell'Applicazione Online
      </div>

      <PointsListWithoutHeading
        points={[
          "Vai al Portale BIS CRS (https://www.bis.org.in/) e accedi o registrati",
          "Completa il prodotto, numero modello, marchio e unità di produzione dell'AIR, se necessario",
          "Segui i passaggi per il pagamento della tassa governativa",
        ]}
      />

      <div className="service-left-content-heading-three">
        Passo 4: Revisione dell'Applicazione da parte di BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS controlla i documenti di supporto e i rapporti di laboratorio",
          "Se necessario, viene sollevata una chiarificazione attraverso il portale",
          "Rispondi con i documenti giusti o spiegazioni logiche",
        ]}
      />

      <p className="service-left-content-paragraph">
        Se è una query di chiarificazione, deve essere risposta entro 30 giorni,
        o l'applicazione va ai file di archivio, il che significa rifiutata.
      </p>

      <div className="service-left-content-heading-three">
        Passo 5: Concessione della Registrazione BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Il Certificato BIS sarà emesso se i funzionari BIS sono soddisfatti dei risultati delle valutazioni che hanno condotto",
        ]}
      />

      <p className="service-left-content-paragraph">
        Il tuo certificato includerà:
      </p>

      <PointsListWithoutHeading
        points={[
          "Numero di registrazione BIS",
          "Nome del marchio",
          "Modello del prodotto",
          "Codice Standard IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "L'etichetta del tuo prodotto deve contenere o avere e-etichettatura dei dettagli del certificato.",
        ]}
      />

      <div className="service-left-content-heading-three">
        Passo 6: Etichettatura e Distribuzione
      </div>

      <PointsListWithoutHeading
        points={[
          "I prodotti certificati BIS devono portare:",
          "Logo BIS CRS",
          "Codice IS che si riferisce al prodotto",
          "Numero di registrazione BIS",
          "Il numero di registrazione e il logo BIS devono essere stampati o incorporati digitalmente secondo le normative BIS.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Timeline Approssimativa
      </h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Attività
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Tempo Stimato
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Test del Prodotto
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  7-10 giorni lavorativi
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Raccolta Documenti
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  2-3 giorni
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Presentazione Applicazione
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  1 giorno
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Revisione BIS + Risoluzione Query
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  10-15 giorni lavorativi
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Emissione Certificato Finale
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  2-4 giorni lavorativi
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  TOTALE
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full font-semibold">
                  ~4 settimane
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
        <span className="service-left-content-index-heading">
          Tariffe di Registrazione
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Tariffe di Registrazione BIS CRS, Validità e Linee Guida di Rinnovo
      </h2>

      <p className="service-left-content-paragraph">
        Ottenere un certificato BIS sotto il CRS, il richiedente è tenuto a
        pagare le tasse governative così come il pagamento per il prodotto da
        testare. Anche se il processo è online e l'interfaccia è semplificata,
        molti richiedenti affrontano ritardi sulle loro richieste e rifiuti
        dovuti a pagamenti insufficienti e applicazioni mal archiviate.
      </p>

      <h3 className="service-left-content-heading-three">
        Struttura Tariffe per la Registrazione CRS
      </h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Tipo di Tassa
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Importo
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tassa Governativa
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST per rapporto di test
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Spese di Test
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ₹10,000 – ₹20,000 + 18% GST (varia per prodotto/laboratorio)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Rapporto Aggiuntivo nella Stessa App
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ₹20,000 + 18% GST per rapporto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tassa di Rinnovo
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          Prezzi soggetti ad aggiornamento — conferma sul portale BIS o con il
          tuo consulente.
        </em>
      </p>

      <h3 className="service-left-content-heading-three">
        Validità e Rinnovo Certificato CRS
      </h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Parametro
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Dettagli
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Validità Iniziale
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  2 Anni
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Durata Rinnovo
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fino a 5 Anni (se nessun cambiamento prodotto)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Processo di Rinnovo
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Online, basato su nuova dichiarazione giurata + tassa di
                  rinnovo
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Re-testing Richiesto?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Non a meno che le specifiche del prodotto/standard IS cambino
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
        <span className="service-left-content-index-heading">
          E-Etichettatura
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Linee Guida E-Etichettatura per Prodotti Certificati CRS
      </h2>

      <h3 className="service-left-content-heading-three">
        Cos'è l'E-Etichettatura?
      </h3>

      <p className="service-left-content-paragraph">
        L'e-etichettatura è la pratica di mostrare informazioni normative
        all'interno di un dispositivo elettronicamente invece di stamparle e
        apporle al dispositivo. Sotto lo Schema di Registrazione Obbligatorio
        (CRS) di BIS, prodotti specificati, specialmente dispositivi compatti o
        digitali, sono in grado di visualizzare i dettagli del certificato BIS,
        il marchio standard e il codice IS attraverso l'interfaccia software o
        l'imballaggio digitale.
      </p>

      <div className="service-left-content-heading-three">
        Linee Guida BIS sull'E-Etichettatura: E-Etichettatura Elettronica (BIS
        CMD 3/8:1/6975. datato 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">
        Requisiti per l'E-Etichettatura:
      </h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Regola
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Descrizione
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etichetta Fisica sull'Imballaggio
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  La scatola del prodotto o l'imballaggio esterno deve
                  visualizzare il logo BIS CRS e i dettagli di registrazione.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etichette Rimovibili per Imballaggio All'ingrosso
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Se i prodotti sono spediti all'ingrosso, un'etichetta adesiva
                  rimovibile sull' imballaggio esterno è accettabile.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nessun Strumento Necessario per l'Accesso
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Gli utenti devono essere in grado di accedere alle
                  informazioni e-etichetta senza bisogno di strumenti o
                  accessori (ad es. rimozione SIM card non consentita).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Programmazione Sicura
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Le informazioni e-etichetta devono essere incorporate nel
                  firmware/software, bloccate dalla modifica da parte di
                  qualsiasi terza parte.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Accesso Basato su Menu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Gli utenti devono accedere alle informazioni in non più di 4
                  passaggi attraverso l' interfaccia menu del dispositivo.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Istruzioni Richieste
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Le istruzioni su come accedere ai dettagli e-etichetta devono
                  essere fornite.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        Come Sun Certifications India Può Aiutarti con la Registrazione BIS
        sotto Schema CRS
      </p>

      <h2 className="service-left-content-heading-two">
        Perché Scegliere un Consulente BIS?
      </h2>

      <p className="service-left-content-paragraph">
        L'intera registrazione BIS CRS è molto tecnica ed esaustiva per quanto
        riguarda le regole e il volume della documentazione. In assenza di una
        comprensione approfondita degli Standard Indiani, QCO recenti, la
        struttura del rapporto di test e i flussi di lavoro nell'interfaccia del
        portale, i richiedenti rischiano di perdere sostanzialmente in termini
        di azioni successive di ritardi, rifiuto o non conformità attiva di
        lunga durata. È qui che Sun Certifications India entra con un socio
        affidabile e affidabile per assistere il richiedente in ogni dettaglio
        dello schema di certificazione obbligatorio.
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

export default CRSRegistrationItalian;
