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
import ServiceAuthorSpanish from "@/components/manual/ServiceAuthor/ServiceAuthorSpanish";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXSpanish = () => {
  return (
    <div className="relative">
      {/* Scheme X English Meta Tags */}
      <SchemeXSpanishMetaTags />
      {/* Scheme X English Breadcrumb */}
      <SchemeXSpanishBreadcrumb />
      {/* Scheme X English Hero Section */}
      <SchemeXSpanishHero />
      {/* Scheme X English Index Section */}
      <SchemeXSpanishIndex />
      {/* Scheme X English Main Content Section */}
      <SchemeXSpanishMainContent />
      {/* Footer English Section */}
      <FooterSpanish />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXSpanish;

const SchemeXSpanishMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Certificación BIS India bajo Scheme-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        Certificación BIS Scheme X | Seguridad de Maquinaria y Equipos
        Eléctricos
      </title>
      <meta
        name="description"
        content="La Certificación BIS Scheme X es requerida para garantizar la calidad y seguridad de tableros de distribución de baja tensión, engranajes de control, maquinaria y equipos eléctricos."
      />
      <meta
        name="keywords"
        content="Scheme X, BIS Scheme X, Certificación BIS Scheme X, Certificación Scheme X, certificación de maquinaria, certificación de equipos eléctricos"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Certificación BIS Scheme X | Seguridad de Maquinaria y Equipos Eléctricos"
      />
      <meta
        property="og:description"
        content="La Certificación BIS Scheme X es requerida para garantizar la calidad y seguridad de tableros de distribución de baja tensión, engranajes de control, maquinaria y equipos eléctricos."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Certificación BIS Scheme X | Seguridad de Maquinaria y Equipos Eléctricos"
      />
      <meta
        name="twitter:description"
        content="La Certificación BIS Scheme X es requerida para garantizar la calidad y seguridad de tableros de distribución de baja tensión, engranajes de control, maquinaria y equipos eléctricos."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};
const SchemeXSpanishBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  Certificación BIS India bajo Scheme-X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXSpanishHero = () => {
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
              Certificación BIS Scheme X
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            La Certificación BIS Scheme X cubre Maquinaria, Equipos Eléctricos y
            Ensamblajes de Componentes, y Subensamblajes bajo el Reglamento
            Técnico Omnibus (OTR).
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
        <SchemeXSpanishHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXSpanishHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/es/certificacion-bis-india-bajo-esquema-x"))
      return "Scheme X Spanish";
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
        title: "Por favor, ingrese un nombre completo válido.",
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
        title: "Por favor, ingrese una dirección de correo electrónico válida.",
        description: "Verifique si el formato de su correo es correcto",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Por favor, ingrese un número de teléfono válido",
        description: "El número de teléfono debe tener (8-15 dígitos)",
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
          "Gracias por contactarnos. Nuestro equipo se pondrá en contacto con usted pronto.",
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
      const errorMessage = error.response?.data?.message || "Algo salió mal";
      toast({
        variant: "destructive",
        title:
          errorMessage ||
          "¡Error al enviar los detalles del formulario de contacto!",
        description:
          "Algo salió mal. Por favor, verifique sus detalles e intente nuevamente.",
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Reserva una Cita
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ¿Quieres contactar a nuestro equipo y programar una llamada?
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
            placeholder="Dirección de Correo Electrónico *"
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

const SchemeXSpanishIndex = () => {
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
    overview: "Resumen",
    process: "Proceso",
    documents: "Documentos",
    conclusion: "Conclusión",
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

const SchemeXSpanishMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentSpanish />
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
    // {
    //   code: "es",
    //   name: "Spanish",
    //   flag: "https://flagcdn.com/w320/es.png",
    //   path: "/es/certificacion-bis-india-bajo-esquema-x",
    // },
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

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Nuestros Servicios
            </div>
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
                src="/services-images/CDSCO.jpg"
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
              ISI MARK (BIS) para Fabricantes Indios
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
            Estándar de Seguridad por Producto
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Descripción de Maquinaria y Equipos Eléctricos
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"Buscar por descripción o código HS..."}
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
      "Todos los tipos de Bombas para manejo de líquidos, elevadores de líquidos",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 y 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "Todos los tipos de compresores",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 y 84149090",
    indianStandard:
      "Cláusula 16 de IS 17093:2019\nCláusula 6.6 de IS 12258:1987",
    title:
      "Condiciones de suministro técnico para compresores de aire alternativos para propósitos generales y aplicaciones industriales\nCondición de suministro técnico para compresores de tornillo de aire (Inundado de Aceite) para propósitos generales y aplicaciones industriales",
  },
  {
    id: 3,
    description:
      "Todos los tipos de maquinaria para Tratamiento de material por un proceso que implica un Cambio de temperatura",
    hsCode: "841932, 841939, 841940, 841950, 841960, 841981, 841989 y 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "o maquinaria de purificación para líquido y gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 y 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "Todos los tipos de maquinaria para llenado, cierre, sellado, etiquetado de botellas, empaquetado o envoltura",
    hsCode: "842220, 842230, 842240 y 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "Todos los tipos de grúas",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 y 84269990",
    indianStandard:
      "Cláusula 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 y 66.6 de IS 3177:2020\nCláusula 8.1, 8.2, 8.3 y 45 de IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Grúa Eléctrica de Viaje Superior y Grúa Pórtico para todas las Aplicaciones Código de Práctica\nEspecificación de Grúas Móviles Impulsadas por Potencia\nGrúas - Requisitos de Seguridad para grúas cargadoras",
  },
  {
    id: 7,
    description: "Todos los tipos de maquinaria para construcción",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Parte 7): 2020\nIS 17055 (Parte 8): 2020\nIS 17055 (Parte 12): 2020",
    title:
      "Maquinaria de Movimiento de Tierras Seguridad Parte 7 Raspatradores\nRequisitos de Maquinaria de Movimiento de Tierras para Niveladoras\nMaquinaria de Movimiento de Tierras Seguridad Parte 12 Pavimentadoras de Carreteras",
  },
  {
    id: 8,
    description: "Todos los tipos de máquinas de tejer (telar)",
    hsCode: "8446, 844811, 844819, 844842 y 844849",
    indianStandard: "IS 17361 (Parte 6) : 2020 / ISO 11111 (Parte 6) : 2005",
    title:
      "Requisitos de Seguridad de Maquinaria Textil Parte 6 Maquinaria de Fabricación de Telas",
  },
  {
    id: 9,
    description: "Todos los tipos de maquinaria para hacer bordados.",
    hsCode: "84479020 y 844859",
    indianStandard: "IS 17361 (Parte 1): 2020 / ISO 11111 (Parte 1) : 2016",
    title:
      "Requisitos de Seguridad de Maquinaria Textil Parte 1 Requisitos Comunes",
  },
  {
    id: 10,
    description: "Todos los tipos de máquinas de corte de metal",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 y 846693",
    indianStandard:
      "IS 17277 (Parte 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Parte 1): 2019\nISO 16090-1 : 2017",
    title:
      "Herramientas de Máquina Seguridad Prensas Parte 1 Requisitos Generales de Seguridad\nHerramientas de Máquina Seguridad Máquinas de Descarga Eléctrica\nHerramientas de Máquina Seguridad Máquinas de Torneado\nHerramientas de Máquina Seguridad Máquinas de Sierra para Metal Frío\nHerramientas de Máquina Seguridad Centros de Maquinado, Máquinas de Fresado, Máquinas de Transferencia Parte 1 Requisitos de Seguridad",
  },
  {
    id: 11,
    description:
      "Todos los tipos de herramientas de máquina para trabajar piedra, cerámica, concreto, cemento de asbesto o vidrio mineral similar",
    hsCode: "8464 y 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description:
      "Todos los tipos de maquinaria para trabajar caucho y plásticos",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Máquinas de Plásticos y Caucho-Máquinas de Moldeo por Inyección-Requisitos de Seguridad",
  },
  {
    id: 13,
    description:
      "Todos los tipos de máquinas incluyendo las máquinas para obras públicas y Construcción y la maquinaria y aparatos mecánicos con funciones individuales, no especificadas",
    hsCode: "84791000, 84798999 y 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "Todos los tipos de engranajes y engranajes, ruedas dentadas, piñón de cadena, elementos de transmisión bolas o tornillos de rodillo, cajas de engranajes y cambiadores de velocidad, incluyendo convertidores de par Y (o) sus ensamblajes /subensamblajes /componentes",
    hsCode: "84834000 y 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "Todos los tipos de Máquinas eléctricas rotativas como Generador, etc. Construcción y la maquinaria y aparatos mecánicos con funciones individuales, no especificadas",
    hsCode: "8501 y 8503",
    indianStandard:
      "Cláusula 4.7, 4.8 y 4.12 de la sección 2,\ncláusula 7.4 de la Sección 3, cláusula 8.6 de la Sección 4,\nCláusula 9.4 de la sección 5 de IS 5422:1996\nCláusula 11, 21, 22, 23, 25 y 26 de IS 13364\n(Parte 1): 1992\nCláusula 11, 21, 22 23 25 y 26 de IS 13364\n(Parte 2): 1992",
    title:
      "Generación de tipo turbina\nGeneradores CA impulsados por motores de combustión interna alternativos - Especificación: Parte 1\nalternadores clasificados hasta 20 kVa\nGeneradores CA impulsados por motores de combustión interna alternativos - Especificación: Parte 2\nalternadores clasificados por encima de 20 kVa y hasta 1250 kVa",
  },
  {
    id: 16,
    description: "Todos los tipos de Generador Diésel",
    hsCode: "8502 y 8503",
    indianStandard:
      "Cláusula 5,6,7,8, 9 y 10 de IS/ISO 8528 (Parte 2) : 2018\nCláusula 6 y 10 de IS/ISO 8528 (Parte 3)\nCláusula 4, 5.5, 7.3.5, 7.3.7 y 7.4 de IS/ISO 8528 (Parte 4): 2005\nCláusula 12, 13, 14, 15 de IS/ISO 8528-5: 2018\nCláusula 6.4 de IS/ISO 8528 (Parte 8): 2016\nCláusula 9.1 de IS/ISO 8528 (Parte 12): 1997",
    title:
      "Conjuntos Generadores de Corriente Alterna Impulsados por Motor de Combustión Interna Alternativo : Parte 2 Motores\nConjuntos generadores de corriente alterna impulsados por motor de combustión interna alternativo: Parte 3 generadores de corriente alterna para conjuntos generadores\nConjuntos generadores de corriente alterna impulsados por motor de combustión interna alternativo: Parte 4 equipo de control y tableros de distribución\nConjuntos Generadores de Corriente Alterna Impulsados por Motor de Combustión Interna Alternativo Parte 5 Conjuntos Generadores\nConjuntos generadores de corriente alterna impulsados por motor de combustión interna alternativo: Parte 8\nConjuntos generadores de corriente alterna impulsados por motor de combustión interna alternativo: Parte 12 suministro de energía de emergencia a la seguridad",
  },
  {
    id: 17,
    description: "Todos los tipos de Transformador",
    hsCode: "850421, 850422, 850423, 850431, 850432, 850433, 850434 y 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nCláusula 5.6 y Cl 10 de IS 2026 (Parte 1)\nCláusula 7.5, 7.6, 7.7 de IS 2026 (Parte 6)",
    title:
      "Seguridad de Transformadores, Reactores, Unidades de Alimentación y Productos Similares para Voltajes de Suministro hasta 1100 V Parte 2-4: Requisitos y Pruebas Particulares para Transformadores Aislantes y Unidades de Alimentación Incorporadas\nSeguridad de transformadores de potencia, unidades de alimentación y similares: Parte 2 requisito particular: Sec 6 transformadores aislantes de seguridad para uso general\nSeguridad de transformadores de potencia, suministros de energía reactores y productos similares: Parte 2-7 requisitos y pruebas particulares para transformadores y suministros de energía para juguetes\nTransformadores de potencia: Parte 1 general\nTransformadores de potencia: Parte 6 reactores",
  },
  {
    id: 18,
    description:
      "Todos los tipos de Convertidor de Semiconductores de Potencia",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Cláusula 7 de Convertidores de Semiconductores Parte 1 Requisitos Generales y Convertidores Comutados en Línea Sección 1 Especificación de requisitos básicos",
  },
  {
    id: 19,
    description:
      "Todos los tipos de equipos de tableros de distribución y engranajes de control que operan a voltajes no superiores a 1000 voltios y (o) sus ensamblajes /subensamblajes /componentes",
    hsCode: "8536, 8537 y 8538",
    indianStandard: "Cláusula 8 de IS/IEC 61439 (Parte 3): 2012",
    title:
      "Tableros de distribución y engranajes de control de bajo voltaje: Parte 3 tableros de distribución destinados a ser operados por personas ordinarias (DBO)",
  },
  {
    id: 20,
    description:
      "Todos los tipos de equipos de tableros de distribución y engranajes de control que operan a voltajes superiores a 1000 voltios y (o) sus ensamblajes /subensamblajes /componentes",
    hsCode: "8535, 8537 y 8538",
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
        TIPO C (Estándares de Seguridad de Máquinas que tratan requisitos de
        seguridad detallados para una máquina particular o grupo de máquinas)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                N.º S.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Descripción de Maquinaria y Equipos Eléctricos
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Código HS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Estándar Indio/Cláusula Específica del Estándar Indio
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Título del Estándar Indio
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
                  No se encontraron resultados para &quot;{searchQuery}&quot;
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
    isNumber: "IS 16504 (Parte 1):2019/IEC 60204-1:2016",
    title:
      "Seguridad de Maquinaria Equipo Eléctrico de Máquinas Parte 1 Requisitos Generales",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Parte 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Seguridad de Maquinaria - Equipo Eléctrico de Máquinas Parte 11 Requisitos para Equipos para Voltajes superiores a 1 000 V CA o 1 500 V CC y no superiores a 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Parte 1): 2010",
    title:
      "Seguridad Funcional de Sistemas Eléctricos-Electrónicos-Programables Electrónicos Relacionados con la Seguridad Parte 1- Requisitos Generales",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Grado de Protección Proporcionado por Recintos (Código IP)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Parte 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 1: Selección de métodos de prueba",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Parte 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Seguridad de Maquinaria Evaluación de la Emisión de Sustancias Peligrosas en el Aire Parte 2 Método de Gas Rastreador para la Medición de la Tasa de Emisión de un Contaminante Determinado",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Parte 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 3: Método de banco de pruebas para la medición de la tasa de emisión de un contaminante determinado",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Parte 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 4: Método de rastreador para la medición de la eficiencia de captura de un sistema de escape",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Parte 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 5: Método de banco de pruebas para la medición de la eficiencia de separación por masa de sistemas de limpieza de aire con salida sin conducto",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Parte 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 6 : Método de banco de pruebas para la medición de la eficiencia de separación por masa de sistemas de limpieza de aire con salida con conducto",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Parte 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 7: Método de banco de pruebas para la medición del parámetro de concentración de contaminantes",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Parte 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 8: Método de habitación para la medición del parámetro de concentración de contaminantes",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Parte 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Seguridad de maquinaria - Evaluación de la emisión de sustancias peligrosas en el aire - Parte 9: Índice de descontaminación",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Potencia de Fluido Hidráulico- Reglas Generales y Requisitos de Seguridad para Sistemas y sus Componentes",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Potencia de Fluido Neumático- Reglas Generales y Requisitos de Seguridad para Sistemas y sus Componentes",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title:
      "Maquinaria de Movimiento de Tierras - Guardias - Definiciones y Requisitos",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Seguridad de Maquinaria-Seguridad Funcional de Sistemas de Control Eléctricos Electrónicos y Programables Relacionados con la Seguridad",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Parte 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Seguridad de Maquinaria - Equipo Protector Electro-Sensible Parte 2 Requisitos Particulares para Equipos que Usan Dispositivos Protectores Opto-Electrónicos Activos AOPDs",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Parte 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Seguridad de Maquinaria- Indicación Marcado y Actuación Parte 3 Requisitos para la Ubicación y Operación de Actuadores",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Parte 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Seguridad de Maquinaria-Equipo Eléctrico de Máquinas Parte 32 Requisitos para Máquinas de Elevación",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Parte 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Seguridad de Maquinaria - Indicación Marcado y Actuación Parte 1 Requisitos para Señales Visuales Acústicas y Táctiles",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Parte 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Seguridad de Maquinaria - Equipo Protector Electro-Sensible Parte 1 Requisitos Generales y Pruebas",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Seguridad de Maquinaria Guías para el Uso de Sistemas de Comunicación en Aplicaciones Relacionadas con la Seguridad",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Parte 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Seguridad de Maquinaria - Indicación Marcado y Actuación Parte 2 Requisitos para Marcado",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title:
      "Seguridad de Maquinaria Prevención de Incendios y Protección contra Incendios",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Seguridad de Maquinaria Requisitos de Higiene para el Diseño de Maquinaria",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Parte 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Seguridad de Maquinaria Medios Permanentes de Acceso a Maquinaria Parte 1 Elección de Medios Fijos y Requisitos Generales de Acceso",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Parte 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Seguridad de Maquinaria Medios Permanentes de Acceso a Maquinaria Parte 2 Plataformas de Trabajo y Pasarelas",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Parte 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Seguridad de Maquinaria Medios Permanentes de Acceso a Maquinaria Parte 3 Escaleras Escaleras de Mano y Barandales",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Parte 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Seguridad de Maquinaria Medios Permanentes de Acceso a Maquinaria Parte 4 Escaleras Fijas",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Parte 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Seguridad de Maquinaria Partes Relacionadas con la Seguridad de Sistemas de Control Parte 1 Principios Generales para el Diseño",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Parte 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Seguridad de Maquinaria Partes Relacionadas con la Seguridad de Sistemas de Control Parte 2 Validación",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Seguridad de Maquinaria Guardias Requisitos Generales para el Diseño y Construcción de Guardias Fijos y Móviles",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Seguridad de Maquinaria Dispositivos de Bloqueo Asociados con Guardias Principios para Diseño y Selección",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Seguridad de Maquinaria Prevención de Arranque Inesperado",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Seguridad de Maquinaria Distancias de Seguridad para Prevenir Zonas de Peligro Alcanzadas por Miembros Superiores e Inferiores",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Seguridad de Maquinaria Posicionamiento de Salvaguardas con Respeto a las Velocidades de Enfoque de Partes del Cuerpo Humano",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Seguridad de Maquinaria Brechas Mínimas para Evitar Aplastamiento de Partes del Cuerpo Humano",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Seguridad de Maquinaria Dispositivos de Control de Dos Manos Principios para Diseño y Selección",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title:
      "Seguridad de Maquinaria Función de Parada de Emergencia Principios para Diseño",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Seguridad de Maquinaria Lubricantes con Contacto Incidental de Producto -- Requisitos de Higiene",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Parte 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Seguridad de maquinaria - Reducción de riesgos para la salud resultantes de sustancias peligrosas emitidas por maquinaria - Parte 1: Principios y especificaciones para fabricantes de maquinaria",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Parte 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Seguridad de maquinaria - Reducción de riesgos para la salud resultantes de sustancias peligrosas emitidas por maquinaria - Parte 2: Metodología que lleva a procedimientos de verificación",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Parte 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Seguridad de maquinaria - Dispositivos protectores sensibles a la presión - Parte 1: Principios generales para diseño y prueba de esteras sensibles a la presión y pisos sensibles a la presión",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Parte 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Seguridad de maquinaria - Dispositivos protectores sensibles a la presión - Parte 2: Principios generales para diseño y prueba de bordes sensibles a la presión y barras sensibles a la presión",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Parte 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Seguridad de maquinaria - Dispositivos protectores sensibles a la presión - Parte 3: Principios generales para diseño y prueba de parachoques sensibles a la presión, placas, cables y dispositivos similares.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomía- Sistema de Señales de Peligro e Información Auditivas y Visuales",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Parte 2) : 2017/ ISO 9355-2:1999",
    title:
      "Requisitos Ergonómicos para el Diseño de Pantallas y Actuadores de Control Parte 2 Pantallas",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Parte 3) 2017 / ISO 9355-3:2006",
    title:
      "Requisitos Ergonómicos para el Diseño de Pantallas y Actuadores de Control Parte 3 Actuadores de Control",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Seguridad de Maquinaria - Requisitos Antropométricos para el Diseño de Estaciones de Trabajo en Maquinaria",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Parte 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomía - Maniquíes de Computadora y Plantillas de Cuerpo Parte 1 Requisitos Generales",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomía - Sistema de señales de peligro e información auditivas y visuales",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Sistemas de Automatización Industrial - Seguridad de Sistemas de Manufactura Integrados - Requisitos Básicos",
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
        TIPO B (Estándares de Seguridad Genéricos que tratan un aspecto de
        seguridad o más de un tipo de salvaguarda que se puede usar en un amplio
        rango de maquinaria)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                N.º S.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Número IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Título
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
                  No se encontraron resultados para &quot;{searchQuery}&quot;
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
  );
};

const SchemeXServiceFaq = () => {
  const faqData = [
    {
      question: "1. ¿Qué es Scheme X bajo la certificación BIS?",
      answer:
        "Scheme X es un esquema de evaluación de conformidad introducido por el BIS indio para maquinaria y equipos eléctricos. Asegura el cumplimiento de estrictos estándares de seguridad y técnicos según lo especificado en el Reglamento Técnico Omnibus.",
    },
    {
      question: "2. ¿Es Scheme X diferente de la certificación de marca ISI?",
      answer:
        "Sí. La marca ISI es generalmente para bienes de consumo y cumplimiento básico de productos, mientras que Scheme X se aplica a productos complejos e industriales que requieren pruebas y certificación avanzadas a través de un certificado BIS o licencia BIS.",
    },
    {
      question: "3. ¿Quién necesita solicitar la certificación Scheme X?",
      answer:
        "Los fabricantes e importadores de maquinaria y equipos eléctricos listados bajo el Reglamento Técnico Omnibus deben solicitar Scheme X y obtener una certificación BIS válida para vender o distribuir legalmente sus productos en India. Los fabricantes globales o extranjeros que deseen vender productos en India también deben cumplir con estos reglamentos.",
    },
    {
      question: "4. ¿Cuál es el costo de la certificación BIS Scheme X?",
      answer:
        "El costo de Scheme X incluye tarifas de solicitud, tarifas de certificación, cargos por revisión de archivo técnico, costos de inspección de fábrica y cargos por pruebas de productos. En promedio, comienza en ₹2,000 para la solicitud y puede aumentar dependiendo de la complejidad del producto. Para más detalles, contáctenos en admin@bis-certifications.com.",
    },
    {
      question:
        "5. ¿Cuánto tiempo toma obtener una licencia BIS bajo Scheme X?",
      answer:
        "El cronograma varía dependiendo de la documentación, requisitos de prueba e inspecciones de fábrica. Típicamente, toma 4–6 semanas desde la fecha de registro exitoso BIS y envío de la solicitud para fabricantes indios y 60-90 días para fabricantes extranjeros.",
    },
    {
      question:
        "6. ¿Pueden las PYMEs también solicitar la certificación BIS bajo Scheme X?",
      answer:
        "Absolutamente. De hecho, el BIS indio alienta a las PYMEs a solicitar una licencia BIS o certificado de conformidad bajo Scheme X para impulsar la calidad, el cumplimiento y la competitividad en el sector industrial.",
    },
    {
      question:
        "7. ¿Es la certificación BIS bajo Scheme X obligatoria para exportaciones?",
      answer:
        "No. Los productos fabricados exclusivamente para exportación están exentos bajo el Reglamento Técnico Omnibus. Sin embargo, los productos destinados a mercados indios deben certificarse bajo Scheme X.",
    },
    {
      question: "8. ¿Cuál es la validez de la licencia BIS bajo Scheme X?",
      answer:
        "Una licencia BIS bajo Scheme X es generalmente válida por 3-6 años y debe renovarse en consecuencia. La renovación implica el pago de la tarifa anual de certificación BIS y puede requerir re-evaluación dependiendo de cambios en el alcance del producto o estándares.",
    },
    {
      question:
        "9. ¿Pueden los fabricantes extranjeros solicitar la certificación Scheme X?",
      answer:
        "Sí, los fabricantes extranjeros pueden solicitar la certificación Scheme X a través de un representante autorizado indio. El BIS indio requiere una inspección de fábrica, que puede tomar 3 días para solicitantes extranjeros, junto con procesos estándar de registro BIS y pruebas.",
    },
    {
      question: "10. ¿Qué es un Archivo Técnico y por qué es requerido?",
      answer:
        "Un Archivo Técnico es un dosier detallado de cumplimiento requerido bajo Scheme X. Incluye procesos de fabricación, detalles del producto, informes de pruebas y documentos de control de calidad. Apoya la conformidad del producto con los Estándares Indios relevantes durante el proceso de certificación BIS.",
    },
    {
      question:
        "11. ¿Cómo se relaciona Scheme X con el Reglamento Técnico Omnibus?",
      answer:
        "El Reglamento Técnico Omnibus manda el uso de Scheme X para categorías específicas de maquinaria y equipos eléctricos en India. Los productos listados bajo el reglamento deben certificarse bajo Scheme X para obtener un certificado BIS o licencia BIS válido.",
    },
    {
      question: "12. ¿Puede revocarse un certificado BIS bajo Scheme X?",
      answer:
        "Sí. El BIS indio puede suspender o cancelar una licencia BIS o certificado bajo Scheme X si se encuentra incumplimiento durante la vigilancia o si el producto no cumple con los Estándares Indios requeridos.",
    },
    {
      question:
        "13. ¿Cuál es la diferencia entre licencia BIS y certificado BIS bajo Scheme X?",
      answer:
        "Una licencia BIS se emite típicamente a fabricantes indios, mientras que un certificado de conformidad BIS (CoC) se emite a menudo a fabricantes extranjeros o para casos específicos. Ambos sirven el mismo propósito—asegurar el cumplimiento del producto bajo Scheme X.",
    },
    {
      question:
        "14. ¿Está permitida la marca ISI para productos certificados bajo Scheme X?",
      answer:
        "No. Los productos bajo Scheme X no llevan la marca ISI. En su lugar, muestran la marca estándar BIS relevante para el esquema de certificación, según lo gobernado por el BIS indio.",
    },
    {
      question: "¿Cómo sé si mi maquinaria requiere certificación Scheme X?",
      answer:
        "Verifique la lista oficial en el Reglamento Técnico Omnibus o consulte con un consultor BIS para verificar si su maquinaria cae bajo los requisitos obligatorios de certificación Scheme X.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Preguntas Frecuentes"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Preguntas Frecuentes
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          ¿No puede encontrar la respuesta que busca?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            ¡Contáctenos!
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

        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusión</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">Conclusión</div>

      <p className="service-left-content-paragraph">
        La Certificación BIS Scheme-X sigue siendo vital para mantener la
        seguridad, confiabilidad y calidad de tableros de distribución de baja
        tensión y engranajes de control, Maquinaria y equipos eléctricos. Para
        los fabricantes de herramientas de máquina aplicables al procesamiento
        de piedra, cerámica, concreto, cemento asfáltico y vidrio mineral, la
        certificación BIS Scheme-X es obligatoria.
      </p>

      <p className="service-left-content-paragraph">
        Al cumplir con estas obligaciones, los fabricantes garantizan la
        conformidad del producto, mejoran la confianza del consumidor, así como
        su credibilidad en el mercado. Scheme-X se asegura de que la producción
        sea lo más fluida posible, se cumplan estándares de seguridad en todo el
        mundo y las marcas reconocidas ganen una reputación positiva.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documentos</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documentos Clave Requeridos para la Certificación BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        Para agilizar el proceso de certificación BIS, los fabricantes están
        obligados a recopilar y presentar los siguientes documentos durante la
        fase de registro:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                N.º Sl.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Documento Requerido
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Detalles
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Nombre y Dirección (Fábrica y Oficina)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nombre legal completo y direcciones físicas del sitio de
                fabricación y oficina
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Información PAN y GST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Número de Cuenta Permanente (PAN) y detalles de registro GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Detalles de Contacto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Dirección de correo electrónico, número de móvil y línea fija
                para comunicaciones oficiales
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Detalles de Gestión
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nombres, roles e IDs de ejecutivos clave y firmante autorizado
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Descripción del Producto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Detalles de maquinaria y equipo cubiertos bajo el Primer Anexo
                del Reglamento Técnico Omnibus
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Clasificación del Producto
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tipo, modelo y variedad específica para la que se solicita la
                licencia BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Archivo Técnico
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Todos los detalles técnicos relacionados con el producto y
                detalles sobre la unidad de fabricación.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Validez y Proceso de Renovación del Certificado Scheme-X:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Validez de la Licencia y Renovación: Las Licencias BIS bajo Scheme-X se emiten por un período de 3 a 6 años para producción continua. Una vez que el período ha expirado, la licencia puede renovarse por la misma duración mediante la presentación de una solicitud de renovación, la tarifa requerida y documentos de cumplimiento.",
          "Certificado de Conformidad (CoC): Un CoC se emite para producción única, y es aplicable para fabricantes nacionales e internacionales. Dado que se aplica solo a un lote único, un CoC no tiene opción de renovación.",
          "Informe de Pruebas de Producto: Cuando los informes de prueba se preparan en el laboratorio del fabricante, los funcionarios BIS los verifican durante la inspección de fábrica realizando pruebas de testigo. Si las pruebas se realizan en instalaciones subcontratadas, esas instalaciones también son inspeccionadas y aprobadas por BIS.",
          "Revisión de Solicitud de Renovación: Para validez ininterrumpida, un fabricante está obligado a continuar cumpliendo con las disposiciones de Scheme-X. Según el Reglamento 8 de los Reglamentos de Evaluación de Conformidad BIS, la Oficina de Estándares Indios procesa la solicitud de renovación en el formulario VIII. La renovación se realiza solo después de verificar el cumplimiento satisfactorio.",
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
        <span className="service-left-content-index-heading">Proceso</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Pasos para Obtener Certificación Bajo BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Emitir Certificado BIS bajo Scheme-X es una actividad sistemática
        destinada a asegurar que el fabricante cumpla con los estándares de
        seguridad, calidad y cumplimiento aplicables. El proceso es el
        siguiente:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verificar Alcance: Determine si su producto está en el alcance de Scheme-X y si cumple con los requisitos de seguridad BIS. Verifique los Estándares Indios relevantes y el cronograma técnico para determinar si podrá cumplir.",
          "Preparar los Documentos Requeridos: Los fabricantes necesitan recopilar y organizar los siguientes documentos: Certificados de Negocio Registrados, Documentos de Base de Diseño, Documentos de Flujo de Fábrica y Proceso, Informes de Pruebas de Servicio (si aplica), Documentos de Aseguramiento y Control de Calidad.",
          "Construir el Archivo Técnico: Un archivo técnico es una parte indispensable para la reclamación de extensión de un certificado. Debe contener: Especificaciones Técnicas del Producto, Información de Métodos y Técnicas, Documentos de Cumplimiento y Pruebas, Limitación y Propósito Pretendido del producto, Documentación de Aseguramiento de Calidad, Trazabilidad de Materias Primas, Trazabilidad de Subcontratación, y el resto de la evidencia, Conformidad con los estándares dentro del alcance enmarcado.",
          "El Formulario de Solicitud: El formulario de solicitud puede presentarse electrónicamente en el Sitio Web BIS para el lugar designado. El pago de la tarifa de solicitud es obligatorio. El resto de los documentos que verifican la solicitud deben incluirse para una evaluación adecuada.",
          "Inspección de Fábrica: Para fabricantes nacionales: La inspección se realiza durante un período máximo de 2 días. Para fabricantes extranjeros: La inspección se realiza durante un período máximo de 3 días (días adicionales pueden acumularse debido a solicitudes adicionales).",
          "Pruebas de Muestras de Producto: La prueba de muestras se realiza ya sea en el sitio del fabricante o en laboratorios aprobados por BIS subcontratados (se permite la prueba subcontratada). La prueba demuestra el cumplimiento de los estándares indios relevantes.",
          "Emisión de Certificación: Si un producto cumple con todas las condiciones, BIS otorga a cada producto una Licencia o un Certificado de Conformidad (CoC). El Fabricante puede usar libremente la Marca Estándar BIS en todos los productos certificados.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Este archivo sirve como evidencia técnica y estadística de la
        reclamación del producto que sustenta los estándares de trazabilidad de
        seguridad.
      </p>

      <p className="service-left-content-paragraph">
        Durante el período de inspección, se espera que los funcionarios BIS:
        Analicen el archivo técnico, Evalúen los métodos de fabricación junto
        con sistemas de aseguramiento de calidad de apoyo, Observen la prueba
        del producto, Determinen incumplimiento (si lo hay) y den pasos
        remediales. Un informe detallado de la auditoría se proporciona al
        solicitante después de la visita.
      </p>

      <p className="service-left-content-paragraph">
        Esta estrategia mantiene el cumplimiento con el Estándar BIS y es un
        reconocimiento de cumplimiento indio e internacional, acorralando a la
        industria en la confianza del consumidor hacia la seguridad y calidad.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedimiento para Fabricantes Nacionales
      </h2>

      <p className="service-left-content-paragraph">
        Los fabricantes nacionales siguen un enfoque directo obteniendo la
        Licencia BIS bajo Scheme-X. Los pasos directos a seguir incluyen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Documentación: Todos los documentos pertinentes al esquema deben recopilarse y prepararse.",
          "Ejecución de la Solicitud: La solicitud debe presentarse junto con las tarifas relevantes.",
          "Investigación de la Solicitud: cualquier solicitud presentada está sujeta a escrutinio y un conjunto subsiguiente de preguntas es generado por BIS.",
          "Nombramiento de Auditores: Los auditores son nombrados por BIS pero el individuo nominado está sujeto al pago de las tarifas de auditoría.",
          "Auditoría de Fábrica: Se realiza una auditoría de examen y encuesta en sitio y se recopilan muestras relevantes.",
          "Evaluación de Muestras: Las muestras se evalúan en un laboratorio reconocido por BIS. El solicitante paga todas las tarifas de prueba de laboratorio reconocido por BIS.",
          "Pago de Tarifas de Licencia y Marcado: Se realizan los pagos requeridos a BIS.",
          "Concesión de Licencia: El certificado que otorga permiso para usar la Marca BIS es otorgado por BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Cronograma Típico:</strong> Cerca de 90 días hábiles (según la
        práctica BIS) son necesarios. Esto se proporciona que no haya no
        conformidades clave.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedimiento para Fabricantes Extranjeros
      </h2>

      <p className="service-left-content-paragraph">
        A diferencia de los fabricantes nacionales, los fabricantes extranjeros
        que solicitan un certificado BIS bajo Scheme-X están obligados a cumplir
        con un proceso más estricto y pasos adicionales. El procedimiento se
        detalla a continuación.
      </p>

      <PointsListWithoutHeading
        points={[
          "Preparación de Documentación: Negocio registrado, el producto y diseño de fábrica, informes de prueba, y los documentos de gestión de calidad asociados todos deben estar en la carpeta configurada para cumplir.",
          "Presentación de la Solicitud: La solicitud, la tarifa requerida y todos los materiales de solicitud deben presentarse a través del portal en línea BIS.",
          "Registro de Solicitud y Escrutinio: La solicitud es registrada por BIS y se realiza una verificación de los documentos. Cualquier problema que BIS pueda tener debe resolverse por el solicitante de manera oportuna.",
          "Asignación de Auditor y Pago: Los auditores de BIS responsables de inspecciones de fábrica son asignados al solicitante para la auditoría. El solicitante debe pagar las tarifas establecidas para la auditoría realizada, según lo determine la legislación aplicable.",
          "Preparación de Auditoría: Los fabricantes extranjeros son responsables de los arreglos logísticos para la auditoría como emisión de Visa, boletos aéreos y reservas de hotel para funcionarios BIS son arreglados y pagados.",
          "Auditoría de Fábrica y Selección de Muestras: Los funcionarios BIS realizan una auditoría de fábrica que abarca 3 días (más días pueden agregarse si se necesitan más solicitudes).",
          "Pruebas de Producto: Las muestras seleccionadas se envían a un laboratorio acreditado por BIS para pruebas. En algunas instancias, las pruebas se contratan a otros laboratorios de prueba y por lo tanto el pago se liquida a través del laboratorio de prueba principal.",
          "Pago de Tarifas de Marcado y Licencia: Después de una auditoría exitosa y resultados de prueba, el fabricante debe pagar la tarifa de marcado requerida y la tarifa de licencia a BIS.",
          "Concesión de Licencia: BIS emite la Licencia/Certificado de Conformidad (CoC) una vez que se han seguido todas las condiciones en total. BIS entonces permite al fabricante con una Marca Estándar BIS usada en otros productos certificados, una vez confirmado el cumplimiento.",
        ]}
      />

      <p className="service-left-content-paragraph">
        La auditoría comprende: Evaluación de los sistemas de aseguramiento de
        calidad y los flujos de trabajo en los procesos de fabricación,
        Evaluación del cumplimiento y la documentación técnica, Selección de
        muestras de prueba independiente.
      </p>

      <p className="service-left-content-paragraph">
        Todo el proceso toma, basado en las prácticas de BIS, aproximadamente
        6-7 meses.
      </p>

      <h3 className="service-left-content-heading-three">
        Puntos Clave Adicionales para Fabricantes Extranjeros:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Clasificación FMCS: Todos los fabricantes extranjeros se clasifican como 'Gran Escala' bajo el Esquema de Certificación de Fabricantes Extranjeros. Esta clasificación es independientemente de la escala de operaciones realizadas.",
          "Representante Autorizado Indio (AIR): Cada fabricante extranjero está obligado a designar un Representante Autorizado Indio (AIR). El AIR es el punto de contacto principal para el solicitante extranjero y BIS, responsable del cumplimiento, colaboración y mantenimiento de la licencia BIS.",
          "Auditorías de Fábrica: Las auditorías de fábrica para fabricantes extranjeros son exhaustivas y tienden a durar 3 días. También, se requieren más días en caso de múltiples solicitudes de productos presentadas.",
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
        <span className="service-left-content-index-heading">Resumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Introducción a la Certificación BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        La Oficina de Estándares Indios, o BIS por sus siglas en inglés, lanzó
        &ldquo;Scheme X&rdquo; el 16 de marzo de 2022, con el objetivo de
        mejorar el cumplimiento en seguridad y calidad de productos en India.
        Fabricantes indios y extranjeros pueden solicitar certificación BIS para
        Máquinas y Equipos Eléctricos, componentes Como ensamblajes,
        subensamblajes y, y Herramientas especificadas en el Anexo-II de
        Scheme-X y obtener certificación antes de exportar, vender o distribuir
        en India.
      </p>

      <p className="service-left-content-paragraph">
        Bajo Scheme X, los fabricantes pueden solicitar una Licencia BIS o un
        Certificado de Conformidad (CoC) para engranajes de conmutación de bajo
        voltaje y control engranaje, maquinaria y equipo eléctrico. Una vez que
        los fabricantes están certificados, se les permite usar la marca
        Estándar BIS, indicando que sus productos están de acuerdo con los
        estándares establecidos en India.
      </p>

      <p className="service-left-content-paragraph">
        La certificación, al promover el producto y el cumplimiento con los
        Estándares Indios y Reglamentos Gubernamentales, ayuda a desarrollar
        confianza y confianza de los consumidores en los productos certificados.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Qué es la Certificación Scheme X?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X es un esquema de certificación de productos desarrollado bajo
        los Reglamentos de Evaluación de Conformidad BIS, 2018 y más tarde,
        simplificado bajo los Reglamentos de Enmienda de Evaluación de
        Conformidad BIS, 2022.
      </p>

      <p className="service-left-content-paragraph">
        El objetivo principal es llevar los estándares de seguridad y calidad
        indios a estándares globales, especialmente con respecto a la maquinaria
        industrial y equipos eléctricos. Los productos fabricados en o
        importados a India bajo este esquema están sujetos a escrutinio y
        evaluación rigurosos para probar estándares técnicos, de seguridad, así
        como de rendimiento.
      </p>

      <p className="service-left-content-paragraph">
        Las disposiciones bajo el alcance original de la Certificación Scheme X
        han sido revisadas y ampliadas con la recién emitida Orden de Seguridad
        de Maquinaria y Equipos Eléctricos (Reglamento Técnico Omnibus), 2024,
        que está bajo la jurisdicción del Ministerio de Industrias Pesadas y ha
        sido puesta en vigor por el BIS. La orden entra en vigor el 1 de
        septiembre de 2026, y cubre un amplio espectro de maquinaria y equipos
        eléctricos como bombas para manejo de líquidos, compresores, grúas,
        máquinas eléctricas rotativas, transformadores y tableros de
        distribución y engranajes de control.
      </p>

      <p className="service-left-content-paragraph">
        Ensamblajes, subensamblajes y componentes de dicha maquinaria o equipo
        también forman parte del alcance de certificación según la Sección 16 de
        la Ley de la Oficina de Estándares Indios, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Además, bajo las Reglas CMVR de 1989 (Construcción y Fabricación de
        Regulación de Válvula), Bowser y otros tipos de equipo de construcción
        bajo la jurisdicción de Scheme X, se asegura que el mercado no se
        exponga a equipo que carece de los requisitos de seguridad y estándares
        técnicos.
      </p>

      <h2 className="service-left-content-heading-three">
        Reglamento Técnico Omnibus (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        El Ministerio de Industrias Pesadas lanzó el &ldquo;Reglamento Técnico
        Omnibus sobre Órdenes de Seguridad (Seguridad de Maquinaria y Equipo
        Eléctrico)&rdquo; a través de notificación E-Gaceta del 28 de agosto de
        2024. Este reglamento innovador pretende mejorar - seguridad, calidad y
        cumplimiento de maquinaria, equipos eléctricos y sus ensamblajes, sub
        ensamblajes y componentes, bajo Scheme X de la Regulación BIS, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Bajo el OTR, todas las categorías de maquinaria y equipos eléctricos, y
        todas sus partes y componentes están incluidas. Sin embargo, algunas
        categorías están específicamente excluidas:
      </p>

      <PointsListWithoutHeading
        points={[
          "Cualquier maquinaria y componentes que formen parte de cualquier otra orden bajo la Sección 16 emitida bajo la Ley de la Oficina de Estándares Indios, 2016.",
          "Bienes y artículos domésticos fabricados que solo están destinados a exportación.",
          "Maquinaria y equipo de construcción que están bajo las Reglas CMVR, 1989, prescritas por el Ministerio de Transporte por Carretera y Carreteras (MoRTH).",
        ]}
      />

      <p className="service-left-content-paragraph">
        Estas excepciones se hacen para facilitar el cumplimiento y evitar
        duplicación innecesaria de regulación con el fin de promover la
        facilidad de hacer negocios.
      </p>

      <p className="service-left-content-paragraph">
        El Reglamento Técnico Omnibus, 2024 cubre toda la maquinaria y equipos
        eléctricos, incluyendo tableros de distribución de bajo voltaje y
        engranajes de control notificados por el Ministerio de Industrias
        Pesadas, serán tratados bajo el marco de Scheme X de Certificación BIS.
        La Orden entrará en vigor el 1 de septiembre de 2026 para que los
        fabricantes e importadores tengan suficiente tiempo para modificar sus
        operaciones según las Órdenes emitidas.
      </p>

      <h2 className="service-left-content-heading-three">
        Certificación BIS bajo el Reglamento Técnico Omnibus
      </h2>

      <p className="service-left-content-paragraph">
        Según el OTR 2024, fabricantes, así como importadores, de maquinaria y
        equipos eléctricos que incluyen bombas, compresores, centrífugas, grúas,
        transformadores y tableros de distribución deben solicitar Certificación
        BIS bajo Scheme X.
      </p>

      <p className="service-left-content-paragraph">
        Bajo Scheme X, los fabricantes pueden optar por solicitar:
      </p>

      <PointsListWithoutHeading
        points={["Una Licencia BIS, o", "Un Certificado de Conformidad (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Productos que llevan la Marca Estándar BIS que es una Marca de
        Conformidad que certifica y asegura a los usuarios que el producto es
        seguro, confiable y de buena calidad. También es una marca de confianza
        y realmente buen rendimiento.
      </p>

      <div className="service-left-content-heading-three">
        Nota Especial para PYMEs
      </div>

      <p className="service-left-content-paragraph">
        Como en muchos otros sectores, Micro, Pequeñas y Medianas Empresas
        (PYMEs) también deben cumplir con Scheme X y obtener Certificación BIS
        para su maquinaria y equipos eléctricos. Aunque puede parecer que el
        cumplimiento con los requisitos regulatorios puede ser desafiante, el
        certificado Scheme X es una adición de valor y ventaja para las PYMEs
        por las siguientes razones:
      </p>

      <PointsListWithoutHeading
        points={[
          "Prueba el cumplimiento de obligaciones legales y otras requeridas establecidas por el gobierno.",
          "Aumenta la reputación del producto y la confianza del consumidor.",
          "Facilita el acceso a un mercado doméstico y extranjero más grande.",
          "Mejora la posición global de la PYME con respecto a la competitividad, seguridad y calidad.",
        ]}
      />

      <h2 className="service-left-content-heading-three">Logo BIS Scheme X</h2>

      <p className="service-left-content-paragraph">
        La marca estándar BIS de Scheme X forma una marca de calidad y un
        principio de confianza. El Logo contiene:
      </p>

      <PointsListWithoutHeading
        points={[
          "el número de estándar se muestra en la porción superior del logo; y",
          "el número de licencia mostrado en la porción inferior del Logo en el formato: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        Esta marca significa que se ha emitido exitosamente una Licencia BIS al
        fabricante. Entitula al fabricante a colocar la Marca BIS y asegura a
        los consumidores que el producto es auténtico y seguro.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="Logo BIS Scheme X"
          title="Certificación BIS Scheme X"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">
        Implicaciones Legales
      </div>

      <p className="service-left-content-paragraph">
        La Marca Estándar BIS es una marca de confianza y calidad. La marca solo
        está disponible después de que un contrato válido esté en vigor. Solo un
        contrato válido permite al propietario usar la marca. Usar la marca sin
        un contrato válido es una ofensa bajo la constitución india y es igual a
        tener una marca legal. El propietario de la marca se coloca bajo
        restricciones pesadas para el uso de la licencia CM/L-XXXXXXXXXX para
        productos que no tienen certificación BIS.
      </p>

      <p className="service-left-content-paragraph">
        Sigue que cada productor está obligado a:
      </p>

      <PointsListWithoutHeading
        points={[
          "Obtener una Licencia BIS válida bajo Scheme X.",
          "Satisfacer los requisitos relevantes de Estándares Indios; y",
          "Afijar correctamente los productos con el Logo BIS aprobado.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Este marco regulatorio se extiende para proteger los intereses de
        consumidores y personas de negocios, fomentando un mercado que enfatiza
        seguridad, apertura y confianza.
      </p>

      <h2 className="service-left-content-heading-three">
        Diferencias Clave Entre Scheme-I y Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "Incluye una categoría más amplia de productos de consumo como electrónicos, electrodomésticos e incluso productos industriales.",
          "Los productos emitidos un certificado bajo este esquema deben tener la Marca Estándar ISI.",
          "Se relaciona tanto con fabricantes nacionales como extranjeros.",
          "Involucra auditorías de fábrica y pruebas de muestras para determinar calidad y cumplimiento con Estándares Indios.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "Aborda productos de ingeniería industrial y críticos de seguridad de alto riesgo, que incluyen equipos eléctricos, maquinaria y sistemas industriales de considerable deber.",
          "La certificación es de mayor rigor que Scheme-I. Involucra informes técnicos avanzados, verificación de cumplimiento y auditorías de certificación extensas.",
          "Scheme-X tiende a ser más costoso que Scheme-I debido a la documentación adicional de cumplimiento.",
          "Cualquier negocio que trate con equipos eléctricos o maquinaria industrial está obligado a obtener certificación bajo Scheme-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Característica
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Marca ISI
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Gestionado por
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Indio
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Indio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Tipo de Certificación
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Licencia BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Certificado BIS / Licencia BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Productos Objetivo
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Bienes de consumo
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Maquinaria y equipos eléctricos
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Marca Usada
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Marca ISI
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Marca estándar BIS (bajo Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Nivel de Cumplimiento
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Cumplimiento de estándar indio
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Cumplimiento técnico y de seguridad de alto nivel
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">
        Productos Cubiertos por Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Scheme-X cubre productos con el mayor riesgo para la seguridad y
        rendimiento, incluyendo:
      </p>

      <PointsListWithoutHeading
        points={[
          "Equipo Eléctrico: Transformadores industriales, unidades de suministro de energía y similares, tableros de distribución de bajo voltaje y engranajes de control, más otros dispositivos de alto voltaje.",
          "Maquinaria Pesada: Prensas hidráulicas, grúas industriales, herramientas de máquina automatizadas y equipo especializado para industrias a gran escala.",
          "Equipo Crítico para la Vida: Extintores de incendios, recipientes a presión, sistemas eléctricos de emergencia y otros dispositivos y sistemas para seguridad de vida.",
          "Electrónicos de Consumo e Industrial Especializados: Electrodomésticos electrónicos de grado médico y equipo que incorpora medidas protectoras avanzadas.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                N.º Serial
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Descripción de Maquinaria y Equipos Eléctricos
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Código HS
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
                  to="/certificacion-bis-esquema-x-para-bombas-y-elevadores-de-liquidos"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Bombas para manejo de líquidos, elevadores
                  de líquidos y (o)sus ensamblajes /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 y 841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-compresores"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de compresores y(o)sus ensamblajes
                  /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                y 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-equipos-de-tratamiento-termico"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de maquinaria para tratamiento de material por
                  un proceso que implica un cambio de temperatura y(o)sus
                  ensamblajes /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 y
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-centrifugas-y-maquinaria-de-filtrado-o-purificacion"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de centrífugas, maquinaria de filtrado o
                  purificación para líquido y gas y(o)sus ensamblajes
                  /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 y 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinaria-de-empaque"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de maquinaria para llenado, cierre, sellado,
                  etiquetado botellas, empaquetado o envoltura y(o)sus
                  ensamblajes/subensamblajes/componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 y 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-gruas"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de grúas y (o) sus ensamblajes
                  /subensamblajes/componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 y
                84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinaria-de-construccion"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de maquinaria para construcción, movimiento de
                  tierras, Minería y (o)sus ensamblajes
                  /subensamblajes/componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 y 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinas-de-tejido"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de máquinas de tejer (telares) y (o)sus
                  ensamblajes/subensamblajes / componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 y 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinaria-de-bordado"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de maquinaria para hacer bordados y(o)sus
                  ensamblajes /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 y 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-herramientas-de-corte-de-metal"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de herramientas de máquina de corte de metal
                  cubiertas bajo el encabezado 8456 a 8461 y(o)sus ensamblajes
                  /subensamblajes/componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 y 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-herramientas-de-maquina"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de herramientas de máquina para trabajar
                  piedra, cerámica, concreto, cemento de asbesto o vidrio
                  mineral similar y (o)sus ensamblajes /subensamblajes
                  /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 y 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinaria-de-caucho-y-plasticos"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de maquinaria para trabajar caucho y plásticos
                  y(o) sus ensamblajes /subensamblajes /componentes
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
                  to="/certificacion-bis-scheme-x-para-obras-publicas-y-aparatos-mecanicos"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Máquinas incluyendo las máquinas para obras
                  públicas y construcción y la maquinaria y aparatos mecánicos
                  con funciones individuales, no especificadas O incluidas en
                  otro lugar en Capítulo 84 y(o)sus ensamblajes/subensamblajes
                  /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 y 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-engranajes-engranajes-y-elementos-de-transmision"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de engranajes y engranajes, ruedas dentadas,
                  piñón de cadena, elementos de transmisión bolas o tornillos de
                  rodillo, cajas de engranajes y cambiadores de velocidad,
                  incluyendo convertidores de par Y (o)sus ensamblajes
                  /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 y 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-maquinas-electricas-rotativas"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Máquinas eléctricas rotativas como
                  Generador, etc. y (o) sus ensamblajes /subensamblajes
                  /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 y 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-generadores-diesel"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Generador Diésel y (o)sus ensamblajes
                  /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 y 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-transformadores"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Transformadores y (o)sus ensamblajes
                  /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 y 850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-convertidores-de-semiconductores-de-potencia"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de Convertidor de Semiconductores de Potencia
                  y (o)sus ensamblajes /subensamblajes /componentes
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
                  to="/certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-hasta-1000-voltios"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de tableros de distribución y engranajes de
                  control que operan a voltajes no superiores a 1000 voltios y
                  (o)sus ensamblajes /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 y 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/certificacion-bis-scheme-x-para-equipos-de-interruptores-y-controladores-por-encima-de-1000-voltios"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Todos los tipos de tableros de distribución y engranajes de
                  control que operan a voltajes superiores a 1000 voltios y (o)
                  sus ensamblajes /subensamblajes /componentes
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 y 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <div className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Estándar de Seguridad por Producto
          </div>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Descripción de Maquinaria y Equipos Eléctricos
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
            Descargar PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Estándares de Seguridad Bajo BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        Más que una mera necesidad legal, la Certificación BIS Scheme - X ofrece
        una promesa de seguridad, calidad y confiabilidad. Esta Certificación,
        que implica estricta adherencia a normas nacionales e internacionales,
        asegura que la maquinaria y aparatos eléctricos ofrecidos a los usuarios
        sean seguros, amigables con el medio ambiente y técnicamente sólidos.
      </p>

      <p className="service-left-content-paragraph">
        Para certificar bajo Scheme - X, los fabricantes necesitan cumplir con
        los siguientes componentes principales de seguridad:
      </p>

      <PointsListWithoutHeading
        points={[
          "Seguridad Eléctrica: Cumplimiento con los IEC y Estándares Indios aplicables. La certificación protege contra cortocircuitos, choques eléctricos, fallos de aislamiento, pérdida en tierra protectora, ignición de material combustible circundante e incendio.",
          "Seguridad Mecánica: Evaluación de la integridad estructural de la maquinaria y la integridad de partes móviles y de nuevos materiales. Asegura que el equipo sea sometido de manera segura a estrés mecánico, desgaste y peligros operativos.",
          "Seguridad contra Incendios: El uso de materiales que están diseñados y construidos con material resistente al fuego. Cumplimiento con estándares para rendimiento de propagación de llamas para controlar los riesgos asociados con fuego.",
          "Cumplimiento Ambiental: El uso de potencia controlada y materiales ecológicos en la producción de equipo. Alienta a los fabricantes a reducir el impacto ambiental de su equipo.",
          "Gestión de Calidad: Control dominante y autónomo en los procesos de producción para mantener los estándares y normas preestablecidos. Enfoque en la regulación de condiciones de fábrica, incluyendo auditorías de proceso y adherencia continua.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Estándares Regulatorios Bajo Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Los fabricantes están obligados a cumplir con los Estándares Indios
        Relevantes que están alineados con los Estándares Internacionales,
        incluyendo:
      </p>

      <h3 className="service-left-content-heading-three">Estándares Tipo A:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Seguridad de Maquinaria: Principios Generales para el Diseño, Evaluación de Riesgos y Reducción de Riesgos.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Estándares Tipo B:</h3>

      <PointsListWithoutHeading
        points={[
          "Descrito en el Segundo Anexo de la Orden de Reglamento Técnico Omnibus (OTR), 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Estándares Tipo C:</h3>

      <PointsListWithoutHeading
        points={["Descrito en el Tercer Anexo de la Orden OTR, 2024."]}
      />

      <h3 className="service-left-content-heading-three">
        Serie IS/IEC 60947:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Cubre tableros de distribución y engranajes de control de bajo voltaje en múltiples partes y secciones.",
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
