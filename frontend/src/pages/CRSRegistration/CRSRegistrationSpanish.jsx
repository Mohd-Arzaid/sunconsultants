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
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
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
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
import ServiceAuthorSpanish from "@/components/manual/ServiceAuthor/ServiceAuthorSpanish";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationSpanish = () => {
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
      <FooterSpanish />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationSpanish;

const CRSRegistrationMetaTags = () => {
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
        name: "BIS CRS Registration",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Registro BIS - Esquema de Registro Obligatorio (CRS)</title>
      <meta
        name="description"
        content="El registro BIS es obtener una licencia del BIS para Productos Electrónicos e IT que cumplan con los Estándares Indios aplicables bajo el esquema CRS."
      />
      <meta
        name="keywords"
        content="Certificado BIS, Proceso de Registro BIS, Registro BIS, Proceso de registro online BIS, Certificación BIS para productos electrónicos, Proceso de registro BIS en India, Registro BIS para Productos Electrónicos, Esquema de registro obligatorio"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Registro BIS - Esquema de Registro Obligatorio (CRS)"
      />
      <meta
        property="og:description"
        content="El registro BIS es obtener una licencia del BIS para Productos Electrónicos e IT que cumplan con los Estándares Indios aplicables bajo el esquema CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Registro BIS - Esquema de Registro Obligatorio (CRS)"
      />
      <meta
        name="twitter:description"
        content="El registro BIS es obtener una licencia del BIS para Productos Electrónicos e IT que cumplan con los Estándares Indios aplicables bajo el esquema CRS."
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
                <BreadcrumbPage>Registro BIS CRS</BreadcrumbPage>
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
              Experiencia Certificada
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Registro BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Obligatorio para productos electrónicos para garantizar seguridad y
            calidad. ¡Obtenga aprobación BIS con asistencia experta!
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
                Ver Servicios
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
    if (path.includes("/es/que-es-crs-bis-o-registro-crs"))
      return "CRS Registration Spanish";
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
        title: "Por favor ingrese un nombre completo válido.",
        description: "El nombre debe contener solo letras y espacios.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Por favor ingrese una dirección de correo electrónico válida.",
        description:
          "Verifique si el formato de su correo electrónico es correcto",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Por favor ingrese un número de teléfono válido",
        description: "El número de teléfono debe contener (8-15 dígitos)",
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
        title: "¡Formulario de contacto enviado exitosamente!",
        description:
          "Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo pronto.",
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
        title:
          errorMessage ||
          "¡Error al enviar los detalles del formulario de contacto!",
        description:
          "Algo salió mal. Por favor verifique sus detalles e intente nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contáctanos
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Reservar una Cita
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ¿Quieres contactar con nuestro equipo y programar una llamada?
        <span className="text-black"> Prueba Ahora</span>
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
            placeholder="Nombre Completo *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Dirección de Correo *"
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
            placeholder="Número de Contacto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nombre de la Empresa *"
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
            placeholder="Nombre del Producto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certificación Requerida*"
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
              <span>Enviando</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Reservar Cita</span>
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
    overview: "Resumen",
    eligibility: "Elegibilidad",
    documents: "Documentos",
    registration: "Registro",
    fees: "Tarifas de Registro",
    elabelling: "E-Etiquetado",
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
          <ServicesRightSideContentSpanish />
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
    // {
    //   code: "es",
    //   name: "Spanish",
    //   flag: "https://flagcdn.com/w320/es.png",
    //   path: "/es/que-es-crs-bis-o-registro-crs",
    // },
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
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-crs-bis-o-registrazione-crs",
    },
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
                        alt={`${language.name} flag`}
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
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Nuestros Servicios
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                El Mejor Consultor de Certificados de India
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
              Marca BIS (Licencia ISI) para Fabricantes Extranjeros
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
              Certificación de Registro CDSCO
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
              Registro BIS (CRS)
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
              Gestión de Residuos Plásticos
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
              Certificaciones de Certificado EPR
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
              Certificaciones de Certificado LMPC
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
              Certificado de Registro BIS
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
              MARCA ISI (BIS) para Fabricantes Indios
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
      question: "1. ¿Qué es el registro BIS?",
      answer:
        "La certificación BIS es un proceso de cumplimiento gobernado por la Oficina de Estándares Indios, que verifica que un producto cumpla con los Estándares Indios (IS) aplicables para calidad, seguridad y confiabilidad.",
    },
    {
      id: "item-2",
      question: "2. ¿Qué es el registro CRS bajo BIS?",
      answer:
        "CRS significa Esquema de Registro Obligatorio. Es un proceso de registro obligatorio para categorías específicas de productos como electrónicos, eléctricos, baterías y artículos solares. Los productos bajo CRS deben ser probados y registrados con BIS antes de poder ser vendidos en India.",
    },
    {
      id: "item-3",
      question: "3. ¿Es obligatoria la certificación BIS en India?",
      answer:
        "Sí. Para todos los productos listados bajo la lista de productos CRS (actualmente 80+ artículos), el registro BIS es obligatorio para fabricar, importar o vender en India.",
    },
    {
      id: "item-4",
      question: "4. ¿Cuál es la diferencia entre BIS CRS y marca ISI?",
      answer:
        "BIS CRS: Para bienes electrónicos e IT, solo para productos obligatorios notificados bajo QCO. <br />Marca ISI: Usada para una gama más amplia de productos, puede ser voluntaria u obligatoria dependiendo de la categoría del producto.",
    },
    {
      id: "item-5",
      question: "5. ¿Quién puede solicitar el registro BIS CRS?",
      answer:
        "Solo los fabricantes pueden solicitar. Esto incluye tanto fabricantes indios como extranjeros. Las marcas extranjeras deben nombrar un Representante Indio Autorizado (AIR).",
    },
    {
      id: "item-6",
      question: "6. ¿Cuál es el papel de un AIR?",
      answer:
        "Un Representante Indio Autorizado (AIR) es legalmente responsable de presentar la solicitud BIS en nombre de un fabricante extranjero. Actúan como enlace oficial entre BIS y el solicitante en el extranjero.",
    },
    {
      id: "item-7",
      question: "7. ¿Cuánto tiempo tarda el registro BIS CRS?",
      answer:
        "El proceso generalmente toma 3–4 semanas, asumiendo que todos los documentos y reportes de prueba se presenten correctamente y no se presenten objeciones por parte de BIS.",
    },
    {
      id: "item-8",
      question: "8. ¿Cuánto cuesta el certificado BIS CRS?",
      answer:
        "Los costos incluyen: <br />Cargos de Prueba: ₹10,000–₹20,000 + IVA <br />Tarifa Gubernamental: ₹53,000 + IVA por reporte de prueba <br />Cargos Adicionales: Afidávit, mensajería, documentación AIR, etc. <br />Descuento aplicable para fabricantes registrados MSME indios",
    },
    {
      id: "item-9",
      question: "9. ¿Cuál es la validez de los certificados BIS CRS?",
      answer:
        "La licencia BIS inicial es válida por 2 años. Puede renovarse hasta 5 años si los detalles del producto y fabricación permanecen sin cambios.",
    },
    {
      id: "item-10",
      question: "10. ¿Se puede obtener la certificación BIS voluntariamente?",
      answer:
        "No. Bajo CRS, no puede solicitar voluntariamente productos que no están listados bajo QCO. La certificación voluntaria solo es aplicable para productos no-CRS a través del esquema ISI.",
    },
    {
      id: "item-11",
      question: "11. ¿Dónde puedo encontrar la lista de productos BIS CRS?",
      answer:
        'Puede visitar el sitio web oficial de BIS <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> y navegar a la sección "Productos bajo CRS" para ver la lista completa de productos cubiertos.',
    },
    {
      id: "item-12",
      question: "12. ¿Se puede mostrar la marca BIS electrónicamente?",
      answer:
        "Sí, a través de e-etiquetado, pero debe cumplir con reglas estrictas de BIS: La información de la etiqueta debe estar integrada en el firmware <br />Acceso fácil dentro de 4 pasos en el menú del dispositivo <br />El empaque físico aún debe llevar información regulatoria",
    },
    {
      id: "item-13",
      question:
        "13. ¿Qué sucede si no obtengo el registro BIS para un producto obligatorio?",
      answer:
        "Sanciones severas, incluyendo: <br />Incautación de productos <br />Rechazos aduaneros <br />Multas legales <br />Eliminación de portales de comercio electrónico <br />Prohibición permanente del mercado indio",
    },
    {
      id: "item-14",
      question:
        "14. ¿Puede un certificado BIS cubrir múltiples modelos o marcas?",
      answer:
        "No. Cada marca y ubicación de fábrica debe certificarse por separado. Se pueden agregar múltiples modelos usando reportes adicionales, pero solo bajo la misma solicitud y marca.",
    },
    {
      id: "item-15",
      question: "15. ¿Cómo puede Sun Certifications India ayudarme?",
      answer:
        "Ofrecemos: <br />Soporte completo de documentación <br />Coordinación de laboratorio <br />Manejo de solicitud de portal BIS <br />Resolución de consultas y seguimientos BIS <br />Guía de renovación y etiquetado <br />Garantía de cumplimiento para marcas extranjeras a través de servicios AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Preguntas Frecuentes
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          ¿No encuentra la respuesta que busca?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            ¡Contáctenos!
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
                  Mostrar Menos Preguntas
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
                  Mostrar Más Preguntas
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
    product: "AMPLIFIERS WITH INPUT POWER 2000W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 2,
    product: "AUTOMATIC DATA PROCESSING MACHINE",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 3,
    product: "ELECTRONIC CLOCKS WITH MAINS POWER",
    isNumber: "IS 302-2-26:2014",
    date: "03 July 2013",
  },
  {
    id: 4,
    product: "ELECTRONIC GAMES (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 5,
    product: "ELECTRONIC MUSICAL SYSTEMS WITH INPUT POWER 200W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 6,
    product: "LAPTOP/NOTEBOOK/TABLET",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 7,
    product: "MICROWAVE OVENS",
    isNumber: "IS 302-2-25:2014",
    date: "03 July 2013",
  },
  {
    id: 8,
    product:
      "OPTICAL DISC PLAYERS WITH BUILT IN AMPLIFIERS OF INPUT POWER 200W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 9,
    product: 'PLASMA/LCD/LED TELEVISIONS OF SCREEN SIZE 32"; AND ABOVE',
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 10,
    product: "PRINTERS, PLOTTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 11,
    product: "SCANNERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 12,
    product: "SET TOP BOX",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 13,
    product: "TELEPHONE ANSWERING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 14,
    product:
      'VISUAL DISPLAY UNITS, VIDEOS MONITORS OF SCREEN SIZE 32" AND ABOVE',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 15,
    product: "WIRELESS KEYBOARDS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 16,
    product: "CASH REGISTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 17,
    product: "COPYING MACHINES/DUPLICATORS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 18,
    product: "PASSPORT READER",
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
    product: "MAIL PROCESSING MACHINES/POSTAGE MACHINES/FRANKING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 21,
    product: "POWER BANKS FOR USE IN PORTABLE APPLICATIONS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 22,
    product: "SMART CARD READER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 23,
    product: "MOBILE PHONES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "SELF-BALLASTED LED LAMPS FOR GENERAL LIGHTING SERVICES",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "DC OR AC SUPPLIED ELECTRONIC CONTROLGEAR FOR LED MODULES",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 December 2015",
  },
  {
    id: 26,
    product: "POWER ADAPTORS FOR AUDIO,VIDEO & SIMILAR ELECTRONIC APPARATUS",
    isNumber: "IS 616:2010",
    date: "01 December 2015",
  },
  {
    id: 27,
    product: "POWER ADAPTORS FOR IT EQUIPMENTS",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 December 2015",
  },
  {
    id: 28,
    product: "FIXED GENERAL PURPOSE LED LUMINAIRES",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 March 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTORS OF RATING <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 March 2016",
  },
  {
    id: 30,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 1 NICKEL SYSTEMS",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 June 2016",
  },
  {
    id: 31,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 2 LITHIUM SYSTEMS",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 June 2016",
  },
  {
    id: 32,
    product: "INDIAN LANGUAGE SUPPORT FOR MOBILE PHONE HANDSETS",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 May 2018",
  },
  {
    id: 33,
    product: "Recessed LED Luminaries",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 May 2018",
  },
  {
    id: 34,
    product: "LED Luminaires for Road and Street lighting",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 May 2018",
  },
  {
    id: 35,
    product: "LED Flood Lights",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 May 2018",
  },
  {
    id: 36,
    product: "LED Hand lamps",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 May 2018",
  },
  {
    id: 37,
    product: "LED Lighting Chains",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 May 2018",
  },
  {
    id: 38,
    product: "LED Luminaires for Emergency Lighting",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 May 2018",
  },
  {
    id: 39,
    product: "UPS/Inverters of rating <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 May 2018",
  },
  {
    id: 40,
    product: "Plasma/ LCD/LED Television of screen size up-to 32",
    isNumber: "IS 616 : 2017",
    date: "23 May 2018",
  },
  {
    id: 41,
    product: "Visual Display Units, Video Monitors of screen size upto 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 42,
    product: "CCTV Cameras/CCTV Recorders",
    isNumber:
      "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
    date: "23 May 2018",
  },
  {
    id: 43,
    product: "Adapters for household and similar electrical appliances",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 May 2018",
  },
  {
    id: 44,
    product:
      "USB driven Barcode readers, barcode scanners, Iris scanners, Optical fingerprint scanners",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 45,
    product: "Smart watches",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 46,
    product:
      "Crystalline Silicon Terrestrial Photovoltaic (PV) modules (Si wafer based)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 47,
    product:
      "Thin-Film Terrestrial Photovoltaic (PV) Modules (a-Si, CiGs and CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 48,
    product: "Power converters for use in photovoltaic power system",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 June 2021",
  },
  {
    id: 49,
    product: "Utility-Interconnected Photovoltaic inverters",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 June 2021",
  },
  {
    id: 50,
    product: "Storage battery",
    isNumber: "IS 16270 : 2014",
    date: "01 January 2019",
  },
  {
    id: 51,
    product: "Independent LED Modules for General Lighting",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Lighting Chain (Rope Lights)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Keyboard",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Induction Stove",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Automatic Teller Cash dispensing machines",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "USB Type External Hard Disk Drive",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Wireless Headphone and Earphone",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product:
      "USB Type External Solid-State Storage Devices (above 256 GB capacity)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Electronic Musical System with input power below 200 Watts",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product:
      "Standalone Switch Mode Power Supplies (SMPS) with output voltage 48V (max)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Television other than Plasma/ LCD/LED TVs",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Rice Cooker",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Wireless Microphone",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 64,
    product: "Digital Camera",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 October 2021",
  },
  {
    id: 65,
    product: "Video Camera",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 66,
    product: "Webcam (Finished Product)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 67,
    product: "Smart Speakers (with and without Display)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 68,
    product: "Dimmers for LED products",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 October 2021",
  },
  {
    id: 69,
    product: "Bluetooth Speakers",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 70,
    product: "Ortho Phosphoric Acid",
    isNumber: "IS 798 : 2020",
    date: "12 December 2021",
  },
  {
    id: 71,
    product: "Polyphosphoric Acid",
    isNumber: "IS 17439:2020",
    date: "24 December 2021",
  },
  {
    id: 72,
    product: "Cotton Bales",
    isNumber: "IS 12171:2019",
    date: "03 March 2023",
  },
  {
    id: 73,
    product: "Trimethyl Phosphite Technical Grade",
    isNumber: "IS 17412:2020",
    date: "03 March 2023",
  },
  {
    id: 74,
    product: "Television Sets",
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
          Lista Oficial de Productos Bajo Registro BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          La siguiente tabla enumera los productos que requieren registro BIS
          CRS en India junto con sus números de Estándar Indio (IS) aplicables y
          fechas de implementación.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar Productos por nombre o número IS..."
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
                  No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Producto
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  No. IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Fecha de Implementación
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
                Anterior
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
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
          <h2 className="service-left-content-heading-two">
            ¿Qué es el Registro BIS?
          </h2>

          <p className="service-left-content-paragraph">
            La Oficina de Estándares Indios (BIS) es el organismo nacional de
            estandarización en India y trabaja bajo el Ministerio de Asuntos del
            Consumidor, Alimentación y Distribución Pública del Gobierno de
            India. BIS es responsable de mantener los puntos de referencia de
            calidad, seguridad y rendimiento para varios productos y servicios
            en India según los Estándares Indios (IS) relevantes.
          </p>

          <p className="service-left-content-paragraph">
            BIS es responsable de supervisar e implementar varios esquemas en
            India. El Esquema de Registro Obligatorio (CRS) es un esquema de
            certificación BIS muy prominente y obligatorio que cubre varias
            categorías de productos electrónicos e IT.
          </p>

          <p className="service-left-content-paragraph">
            El rendimiento y la seguridad de los productos indios es un problema
            importante para India. La Certificación BIS CRS garantiza que los
            productos electrónicos e IT cumplan con los estándares indios y
            ayuda a proteger a los consumidores contra productos que no cumplen
            y productos de calidad inferior.
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
        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Resumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ¿Qué es un Esquema de Registro Obligatorio (CRS)?
      </h2>

      <p className="service-left-content-paragraph">
        El Esquema de Registro Obligatorio (CRS) es un esquema de registro de
        productos BIS que se lanzó en 2012 y se enfocó principalmente en
        productos electrónicos. A lo largo de los años, a medida que se han
        lanzado más productos, CRS se ha expandido para incluir una gama más
        amplia de categorías de productos, que incluyen productos eléctricos
        como electrodomésticos, equipos solares, baterías y más. El registro CRS
        es obligatorio para productos especificados bajo Órdenes de Control de
        Calidad (QCO) emitidas por diferentes ministerios.
      </p>

      <p className="service-left-content-paragraph">
        Cualquier producto que caiga bajo el esquema CRS obligatorio debe
        venderse, importarse o distribuirse en India solo después de obtener el
        registro con BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Historia de la Certificación CRS en India
      </h3>

      <p className="service-left-content-paragraph">
        En 2012, se lanzó el primer QCO bajo el esquema CRS y se enfocó en
        equipos electrónicos e IT. Desde entonces, se han emitido QCO
        adicionales en los siguientes sectores:
      </p>

      <PointsListWithoutHeading
        points={[
          "Electrónicos de Consumo",
          "Iluminación y LED",
          "Baterías y Celdas",
          "Dispositivos de Comunicación Inalámbrica",
          "Paneles Solares y Componentes",
          "Electrodomésticos Eléctricos para Hogares",
        ]}
      />

      <p className="service-left-content-paragraph">
        La lista para Certificación CRS se está expandiendo rápidamente, por lo
        que es muy importante que los fabricantes sean proactivos y conscientes
        de las actualizaciones recientes.
      </p>

      <h2 className="service-left-content-heading-three">
        Registro CRS vs Marca ISI: ¿Cuál es la Diferencia?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Característica
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Registro CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  Marca ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Naturaleza
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Obligatorio (solo para productos listados en QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Voluntario u Obligatorio (según el producto)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Alcance del Producto
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Electrónicos, IT, Eléctricos, Baterías, etc.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Alimentos, cemento, acero, eléctricos, etc.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Aplicación
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  En línea, Portal BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Manual + En línea, Sistema BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Flexibilidad
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Solo para bienes cubiertos por QCO
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Puede ser voluntario para bienes no-QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etiquetado
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Requiere logo BIS CRS y número de registro
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Requiere logo ISI con código estándar
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        Por Qué Necesita Conocer el Marco BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        Si es un productor en India, o una empresa extranjera que intenta
        ingresar al mercado indio, conocer los pasos BIS CRS es imprescindible.
        Le ayuda a:
      </p>

      <PointsListWithoutHeading
        points={[
          "Evitar sanciones por incumplimiento.",
          "Preparar horarios de producción (considerando el tiempo de prueba del laboratorio).",
          "Facilitar el procesamiento aduanero más fácil.",
          "Ganar la confianza de marca a largo plazo del cliente indio.",
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
        <span className="service-left-content-index-heading">Elegibilidad</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Criterios de Elegibilidad para Registro BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        ¿Quién Puede Solicitar Certificación BIS Bajo CRS?
      </p>

      <p className="service-left-content-paragraph">
        En India, un certificado BIS bajo el Esquema de Registro Obligatorio
        (CRS) solo puede ser otorgado a fabricantes que cumplan con los
        requisitos establecidos por la Oficina de Estándares Indios. Esto es
        para asegurar que solo los fabricantes auténticos obtengan el privilegio
        de poder Registrarse así como colocar el logo BIS CRS en sus productos.
      </p>

      <div className="service-left-content-heading-three">
        Lista de Verificación de Criterios de Elegibilidad
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
                  Descripción
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  El Solicitante Debe Ser un Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Solo el fabricante original (no comerciante o revendedor) del
                  producto es elegible para solicitar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  La Ubicación Puede Ser India o Extranjera
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Tanto los fabricantes indios como las marcas internacionales
                  pueden solicitar.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (Representante Indio Autorizado)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Los fabricantes extranjeros deben nombrar un AIR — ya sea su
                  sucursal india o un tercero formalmente autorizado.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Reportes de Prueba de Laboratorios Aprobados por BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  El producto debe ser probado en un laboratorio reconocido por
                  BIS y cumplir con el Estándar Indio (IS) aplicable.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Documentación Adecuada
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Todos los documentos requeridos deben presentarse en formatos
                  prescritos (detalles en la siguiente sección).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Un Registro Por Marca y Ubicación
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Se debe presentar una solicitud separada para cada tipo de
                  producto, ubicación de fabricación y nombre de marca.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        ¿Quién es un Representante Indio Autorizado (AIR)?
      </h2>

      <p className="service-left-content-paragraph">
        Para fabricantes extranjeros, una de las obligaciones es nombrar un
        Representante Indio Autorizado (AIR) para comunicación y representación
        en India.
      </p>

      <div className="service-left-content-heading-three">
        Responsabilidades del AIR:
      </div>

      <PointsListWithoutHeading
        points={[
          "Actúa como representante legal para el solicitante extranjero",
          "Se comunica y gestiona todas las obligaciones con BIS en nombre del fabricante",
          "Legalmente responsable de todo el cumplimiento y documentación",
          "No puede ser un agente o distribuidor a menos que esté claramente autorizado por el fabricante",
        ]}
      />

      <p className="service-left-content-paragraph">
        Como parte del acuerdo, el AIR debe presentar un acuerdo firmado de
        ambas partes junto con una prueba de dirección india.
      </p>

      <div className="service-left-content-heading-three">
        Escenario de la Vida Real:
      </div>

      <p className="service-left-content-paragraph">
        La Compañía ABC está planeando introducir un nuevo modelo de un power
        bank en India.
      </p>

      <PointsListWithoutHeading
        points={[
          "La Compañía ABC es el fabricante.",
          "Tienen el producto probado en uno de los laboratorios acreditados por BIS en India.",
          "Su oficina sucursal en Delhi sirve como AIR registrado.",
          "Suben la solicitud al portal BIS junto con la documentación requerida.",
        ]}
      />

      <p className="service-left-content-paragraph">
        El resultado es que se emite un certificado BIS bajo CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documentos</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documentos Requeridos para Registro BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Lista de documentos requeridos para obtener registro BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Completar la solicitud BIS CRS para registro es completamente digital,
        sin embargo, aún requiere documentos completamente completados para
        obtener aprobación. Cada error minúsculo y un fallo en adherirse a
        cualquier aspecto, como el tipo de documento, formatos inadecuados o
        tipos de archivo incorrectos puede causar que la solicitud sea rechazada
        o retrasada.
      </p>

      <p className="service-left-content-paragraph">
        Para el procesamiento adecuado y más rápido de los documentos BIS, es
        necesario tener los documentos adecuados con usted en cada paso del
        camino. Tener los documentos adecuados listos asegura que su certificado
        bis se procese a tiempo y permanezca legalmente claro de cualquier
        auditoría de cumplimiento, inspecciones aduaneras o aprobaciones del
        mercado.
      </p>

      <div className="service-left-content-heading-three">
        Lista de Verificación de Documentos para Registro BIS CRS
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
                  ¿Quién Presenta?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Notas
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Prueba de Dirección del Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Arrendamiento de fábrica, factura de servicios públicos o
                  licencia
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Reporte de Prueba de Laboratorio Aprobado por BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante/Laboratorio
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Debe ser reciente (dentro de 90 días) y referenciar código IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Compromisos (según Formato BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Solicitante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Incluye responsabilidad, cumplimiento y responsabilidad del
                  producto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Certificado de Marca Registrada
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Requerido si la marca está registrada
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Acuerdo AIR (Para solicitantes extranjeros)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante Extranjero y AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Firmado y notariado
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Afidávit
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante o AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Formato descargable del portal BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Recibo de Tarifa
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Solicitante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Prueba de pago de tarifa gubernamental
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Carta de Autorización
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Autoriza a AIR para actuar en su nombre
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Certificado de Registro de Empresa
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Prueba de registro comercial (IVA, ROC, etc.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Etiquetas/Marcas del Producto
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Fabricante
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Debe mostrar logo BIS, estándar IS y espacio de registro
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
          Registration Process
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS CRS Registration Process
      </h2>

      <p className="service-left-content-paragraph">
        BIS CRS Registration is a totally online process through the BIS
        Registration Portal. It does not solely procedures that include the
        uploading of documents. It also requires special attention of a
        technical nature, the understanding of the regulations, as well as total
        compliance with the Indian Standard (IS).
      </p>

      <p className="service-left-content-paragraph">
        BIS CRS Process, We&apos;re calling it Certification and Registration
        System (CRS) for now, and here&apos;s how the journey for BIS
        Certification unfolds.
      </p>

      <div className="service-left-content-heading-three">
        Step 1: Product Testing at BIS Authorized Lab
      </div>

      <PointsListWithoutHeading
        points={[
          "Select a lab from the BIS approved list",
          "Submit a sample of the product for which the testing is to be performed for relevant IS",
          "Obtain the test report for the sample as per BIS test report format",
        ]}
      />

      <div className="service-left-content-heading-three">
        Step 2: Document Preparation
      </div>

      <PointsListWithoutHeading
        points={[
          "Collect the requisite documents, as already outlined",
          "Make sure the documents are properly named, formatted, signed and dated",
          "Develop a product label which is a mock sticker that contains a space for a BIS logo and space for IS standard",
        ]}
      />

      <div className="service-left-content-heading-three">
        Step 3: Filling the Online Application
      </div>

      <PointsListWithoutHeading
        points={[
          "Go to the BIS CRS Portal (https://www.bis.org.in/) and login or register",
          "Complete the product, model number, brand, and manufacturing unit of the AIR, if necessary",
          "Follow the steps for the payment of the Government fee",
        ]}
      />

      <div className="service-left-content-heading-three">
        Step 4: BIS&apos;s Review of the Application
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS checks the supporting documents and lab reports",
          "If needed, a clarification is raised through the portal",
          "Respond with the right documents or logical explanations",
        ]}
      />

      <p className="service-left-content-paragraph">
        If it is a clarification query, it must be answered within 30 days, or
        the application goes to archive files, which means rejected.
      </p>

      <div className="service-left-content-heading-three">
        Step 5: Grant of BIS Registration
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS Certificate will be issued if BIS officials are satisfied with the results of the assessments they conducted",
        ]}
      />

      <p className="service-left-content-paragraph">
        Your certificate will include:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS registration number",
          "Brand name",
          "Model of the product",
          "IS Standard Code",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "Your product label must contain or have e-labelling of the  certificate&apos;s details.",
        ]}
      />

      <div className="service-left-content-heading-three">
        Step 6: Labeling and Distribution
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS certified products must carry:",
          "BIS CRS logo  ",
          "IS code that relates to the product",
          "BIS registration number",
          "The registration number and BIS logo must be printed or digitally embedded according to the BIS regulations.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Approximate Timeline
      </h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Activity
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Estimated Time
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Product Testing
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  7-10 working days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Document Collection
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-3 days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Application Submission
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  1 day
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  BIS Review + Query Resolution
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  10-15 working days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Final Certificate Issue
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-4 working days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  TOTAL
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                  ~4 weeks
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
          Registration Fees
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS CRS Registration Fees, Validity & Renewal Guidelines
      </h2>

      <p className="service-left-content-paragraph">
        Getting a BIS certificate under the CRS, the applicant is required to
        pay the government charges as well as the payment for the product to be
        tested. Even though the process is online and the interface is
        streamlined, many applicants face delays on their requests and
        rejections due to underpayment and applications misfiled.
      </p>

      <h3 className="service-left-content-heading-three">
        Fee Structure for CRS Registration
      </h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Fee Type
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Government Fee
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST per test report
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Testing Charges
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹10,000 – ₹20,000 + 18% GST (varies by product/lab)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Additional Report in Same App
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹20,000 + 18% GST per report
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Renewal Fee
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          Prices subject to update — confirm on the BIS portal or with your
          consultant.
        </em>
      </p>

      <h3 className="service-left-content-heading-three">
        CRS Certificate Validity & Renewal
      </h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Parameter
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Initial Validity
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2 Years
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Renewal Duration
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Upto 5 Years (if no product changes)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Renewal Process
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Online, based on new affidavit + renewal fee
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Re-testing Required?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Not unless product specs/IS standard changes
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
        E-Labelling Guidelines for CRS Certified Products
      </div>

      <div className="service-left-content-heading-three">
        What is E-Labelling?
      </div>

      <p className="service-left-content-paragraph">
        E-labelling is the practice of showing regulatory information within a
        device electronically instead of printing and affixing it to the device.
        Under the Compulsory Registration Scheme (CRS) of BIS, specified
        products, especially compact or digital devices, are able to display the
        BIS certificate details, standard mark and IS code through the software
        interface or digital packaging.
      </p>

      <div className="service-left-content-heading-three">
        BIS Guidelines on E-Labelling: Electronic E-Labelling (BIS CMD
        3/8:1/6975. dated 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">
        Requirements for E-Labelling:
      </h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Rule
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Physical Label on Packaging
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Product box or external packaging must display the BIS CRS
                  logo and registration details.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Removable Labels for Bulk Packaging
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  If products are shipped in bulk, a removable adhesive label on
                  the outer package is acceptable.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  No Tools Needed for Access
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Users must be able to access the e-label info without needing
                  tools or accessories (e.g., SIM card removal not allowed).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Secure Programming
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  E-label info must be embedded in firmware/software, locked
                  from modification by any third party.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Menu-Based Access
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Users must access the info in no more than 4 steps through the
                  device&apos;s menu interface.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Instructions Required
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Instructions on how to access e-label details must be
                  provided.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        How Sun Certifications India Can Help You with BIS Registration under
        CRS Scheme
      </p>

      <div className="service-left-content-heading-three">
        Why Choose a BIS Consultant?
      </div>

      <p className="service-left-content-paragraph">
        The entire BIS CRS registration is very technical and exhaustive with
        regard to rules and the volume of documentation. In the absence of a
        thorough understanding of the Indian Standards, recent QCOs, the
        structure of the test report, and the workflows in the portal interface,
        applicants stand to lose substantially in terms of the subsequent
        actions of delays, rejection, or long-standing active non-compliance.
        This is where Sun Certifications India comes in with a reputable and
        reliable associate to assist the applicant in every detail of the
        compulsory certification scheme.
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
