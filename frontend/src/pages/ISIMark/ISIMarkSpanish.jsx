import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
import ServiceAuthorSpanish from "@/components/manual/ServiceAuthor/ServiceAuthorSpanish";
import { ISIMarkAndBISCommonTableSpanish } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableSpanish";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterSpanish from "@/components/manual/Footer/FooterSpanish";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkSpanish = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableSpanish />
      </div>
      <LanguageSelector />
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterSpanish />
    </div>
  );
};

export default ISIMarkSpanish;

const ISIMarkMetaTags = () => {
  const title = "Proceso de Certificación de Marca BIS ISI, Documentos, Tarifa";
  const description =
    "La certificación de marca ISI emitida por la Oficina de Normas de la India se otorga a productos que se someten a pruebas e inspecciones rigurosas para cumplir con los estándares y cumplimientos requeridos";
  const keywords =
    "Marca ISI, Certificación de Marca ISI, Certificado de Marca ISI, Certificación ISI, Certificado ISI, Registro de Marca ISI, Licencia ISI, Marca BIS ISI, Certificación de Marca BIS ISI";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Jefe de Operaciones en Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const ISIMarkBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Proceso de Certificación de Marca BIS ISI, Documentos,
                    Tarifa
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const ISIMarkHero = () => {
  return (
    <section className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificación BIS para
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Fabricantes Indios
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Como parte de la visión 'Make in India', la certificación BIS ayuda
            a los fabricantes a garantizar la seguridad, calidad y cumplimiento
            de los productos. Obtenga la certificación y haga crecer su marca
            con confianza.
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
        <ISIMarkContactForm />
      </div>
    </section>
  );
};

const ISIMarkContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/es/certificacion-bis-marca-isi"))
      return "ISI Mark - Spanish Page";
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
        description: "El número de teléfono debe ser (8-15 dígitos)",
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
      const errorMessage = error.response?.data?.message || "Algo salió mal";
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Reservar una Cita
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

const ISIMarkIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "requirement", "documents", "conclusion", "faqs"],
    []
  );

  const MENU_ITEMS = {
    overview: "Resumen",
    requirement: "Requisitos",
    documents: "Documentos",
    conclusion: "Conclusión",
    faqs: "Preguntas Frecuentes",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentSpanish />
        </div>
      </div>
    </>
  );
};

const ISIMarkContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <RequirementSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
        <ServiceAuthorSpanish />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Resumen</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Esquemas de Certificación BIS en India
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Esquemas de Certificación BIS de la India"
          title="Esquema de Licencia BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        En la dinámica actual del mercado, la reputación de una marca en el
        mercado actual, la confianza de los consumidores tiene una importancia
        significativa. Cada consumidor quiere garantías con respecto a la
        seguridad y confiabilidad de un producto, junto con los pasos de control
        de calidad tomados durante su fabricación. La Oficina de Normas de la
        India aborda estos problemas y preocupaciones asegurando puntos de
        referencia de calidad para los productos vendidos en la India. La
        Certificación de Marca ISI es uno de los certificados más reconocidos
        otorgados bajo BIS.
      </p>
      <p className="service-left-content-paragraph">
        Para los fabricantes nacionales, obtener una Certificación de Marca BIS
        ISI no se trata solo de obtener el certificado de cumplimiento, también
        se trata de ganar aceptación en el mercado, confianza en la marca y
        protección legal. La marca ISI es reconocida universalmente y fortalece
        la credibilidad en la India cuando se trata de la producción de aparatos
        eléctricos, materiales de construcción, productos químicos o bienes de
        consumo.
      </p>
      <p className="service-left-content-paragraph">
        Este artículo tiene como objetivo explorar la Certificación de Marca BIS
        ISI para fabricantes nacionales, enfocándose específicamente en la
        importancia, requisitos, ventajas y todo el proceso de obtención del
        certificado.
      </p>
      <h2 className="service-left-content-heading-three">
        Entendiendo BIS y Su Rol
      </h2>
      <p className="service-left-content-paragraph">
        La Oficina de Normas de la India (BIS) es un organismo Nacional de
        Normalización y Certificación en la India bajo el Ministerio de Asuntos
        del Consumidor y Públicos. Al ser un organismo regulador, establece y
        mantiene estándares de calidad y su aplicación en diversas industrias
        según lo establecido en la Ley BIS de 1986.
      </p>
      <p className="service-left-content-paragraph">
        El BIS actúa como una autoridad de verificación de terceros que audita
        si un producto cumple con los estándares indios particulares. La
        certificación BIS proporciona al fabricante no solo un requisito legal,
        sino también una marca de aprobación de confianza y credibilidad de los
        clientes.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        ¿Qué es una Marca ISI?
      </h2>
      <p className="service-left-content-paragraph">
        La certificación de marca ISI (marca del Instituto de Normas de la
        India) es la marca de certificación más antigua y reconocida de la
        Oficina de Normas de la India (BIS) en la India. La certificación ISI se
        enfoca en la confirmación de que un producto cumple con los requisitos
        básicos de los estándares de calidad establecidos por BIS en relación
        con seguridad, calidad, rendimiento y confiabilidad.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Los productos que llevan la marca ISI han completado pruebas exhaustivas
        en laboratorio y inspecciones de fábrica. Garantiza que se están
        implementando y siguiendo procedimientos adecuados de control de calidad
        durante las etapas de producción. Los consumidores pueden obtener y usar
        productos seguros y confiables etiquetados con la marca ISI. La marca
        ISI es una herramienta de confianza entre el consumidor y el fabricante
        y esta marca va más allá del estándar.
      </p>
      <p className="service-left-content-paragraph">
        Algunos ejemplos de productos para los cuales se requiere certificación
        ISI obligatoria son los siguientes:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Aparatos de todo tipo (Planchas eléctricas, calentadores eléctricos, cables eléctricos, refrigeradores, unidades de aire acondicionado)",
          "Cemento y acero, tuberías UPVC, calzado de plástico y otros productos plásticos",
          "Fertilizantes, productos químicos y ácidos",
          "Cascos de seguridad y gafas, así como algunos tipos de juguetes para niños",
        ]}
      />
      <p className="service-left-content-paragraph">
        Hay más de 650 productos que requieren certificación BIS obligatoria
        para usar la marca estándar (Marca ISI) según el Esquema I Anexo I de la
        Oficina de Normas de la India. Los productos mantenidos bajo el esquema
        de certificación obligatoria no pueden ser fabricados, importados o
        vendidos en el mercado indio sin la marca ISI. La lista de productos
        obligatorios se puede acceder en este{" "}
        <a
          href="#product-table"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("product-table")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-blue-900 font-semibold hover:text-[#1A8781] uppercase transition-colors cursor-pointer"
        >
          enlace de Lista de Productos
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        ¿Cuál es la Diferencia Entre Certificación BIS y Marca ISI?
      </h2>
      <p className="service-left-content-paragraph">
        Aunque a menudo se confunden y se usan como sinónimos, la Certificación
        BIS y la Marca ISI tienen definiciones y propósitos específicos:
      </p>
      <p className="service-left-content-paragraph">
        <strong>Certificación BIS:</strong> El proceso de otorgar aprobación a
        un producto después de asegurar que cumple con los Estándares Indios
        requeridos. Es el marco bajo el cual se administran las evaluaciones de
        conformidad.
      </p>

      <p className="service-left-content-paragraph">
        <strong>Marca ISI:</strong> El símbolo de calidad o la marca estándar
        que se otorga a un producto después de obtener la certificación BIS.
        Indica que el producto ha sido completamente certificado y cumple con
        los Estándares Indios requeridos.
      </p>
      <p className="service-left-content-paragraph">
        De esta manera, ISI constituye el compromiso certificable físico,
        mientras que la certificación BIS ofrece el marco administrativo
        necesario.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Por qué es Importante la Certificación de Marca BIS ISI para los
        Fabricantes?
      </h2>

      <p className="service-left-content-paragraph">
        La Certificación de Marca BIS ISI tiene un valor significativo para los
        fabricantes nacionales, tales como:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Garantía de Calidad:</strong> La marca ISI significa que ha
        pasado pruebas e inspecciones rigurosas, manteniendo así los estándares
        más altos establecidos de calidad. Esto, a su vez, aumenta la
        confiabilidad y la fiabilidad del producto mientras minimiza las
        posibilidades de defectos.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Confianza del Consumidor:</strong> Los productos etiquetados
        con marca ISI generalmente se consideran seguros y efectivos. Esto
        contribuye hacia la lealtad a la marca, y por lo tanto una marca más
        robusta y reconocida.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Acceso al Mercado:</strong> El mercado indio tiene una
        abundancia de artículos que están estrictamente prohibidos si uno no
        posee un certificado ISI válido. En tales instancias, la marca ISI sirve
        como la puerta de entrada para facilitar las ventas.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Obtención de Admisión en el Mercado:</strong> Dentro de un
        ambiente altamente competitivo, los productos certificados ISI se ven
        como teniendo una reputación positiva, teniendo así una ventaja
        competitiva más alta sobre otros que no están certificados.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Cumplimientos Regulatorios:</strong> Los estándares BIS son
        tales que un fabricante cuyos productos se alinean con tales estándares
        tiene una operación suave, sin obstáculos, libre de complejidad legal.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Promoción de Exportación:</strong> Los productos que están
        certificados ISI y por lo tanto poseen una fuerte reputación de marca
        son más propensos a ser favorecidos por mercados extranjeros debido a la
        percepción de ser de alta calidad y cumplir con estándares globales.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Seguridad del Consumidor:</strong> Cualquier producto con
        certificación ISI garantiza la seguridad del consumidor de cualquier
        peligro potencial, accidentes o mal rendimiento del producto.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Control de Calidad:</strong> La necesidad de llevar a cabo
        constantes exámenes y verificaciones garantiza que los fabricantes
        puedan lograr calidad constante para todos los lotes producidos.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Requisitos</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Requisitos Básicos para la Certificación de Marca BIS ISI
      </h2>
      <p className="service-left-content-paragraph">
        Para obtener la certificación BIS, los fabricantes nacionales deben
        cumplir con las siguientes obligaciones clave.
      </p>
      <PointsListWithoutHeading
        points={[
          "Debe haber cumplimiento con la Especificación de Estándar Indio (ISS).",
          "Una licencia se emite y otorga solo a los fabricantes, no a los distribuidores o minoristas.",
          "Hay una necesidad de presentar solicitudes separadas para cada ubicación de fábrica para la certificación.",
          "Las fábricas deben poseer personal calificado y laboratorios de prueba internos.",
          "Todos los modos de producción se realizarán en la misma unidad de producción desde la materia prima hasta el empaque final (La subcontratación debe estar autorizada de antemano por BIS).",
          "La guía técnica se proporciona en los Manuales de Producto que detallan los estándares para inspección, pruebas y documentación necesaria.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Proceso de Certificación BIS ISI para Fabricantes Nacionales
      </h2>
      <p className="service-left-content-paragraph">
        Obtener la certificación BIS es un proceso de múltiples pasos. Hay dos
        procedimientos principales para abordar el proceso de certificación BIS:
        Procedimiento Normal y Procedimiento Simplificado.{" "}
      </p>
      <div className="service-left-content-heading-three">
        1. Procedimiento Normal (60-65 Días)
      </div>
      <PointsListWithoutHeading
        points={[
          "El fabricante establece laboratorios internos y lleva los productos al cumplimiento con los Estándares Indios.",
          "Se presenta la solicitud junto con la documentación requerida.",
          "Inspección de Fábrica por funcionarios de BIS.",
          "Pruebas de productos en laboratorios aprobados por BIS.",
          "Se otorga la licencia si se cumplen todas las condiciones.",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Procedimiento Simplificado (35-40 Días)
      </div>
      <PointsListWithoutHeading
        points={[
          "El fabricante presenta documentos de productos pre-probados de laboratorios reconocidos por BIS.",
          "Se presenta la solicitud junto con la tarifa.",
          "Escrutinio de documentos e inspección de fábrica.",
          "Pruebas finales y Otorgamiento de licencia en un período de 35-40 días.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Documentos Requeridos
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Documentos Requeridos para la Certificación de Marca ISI
      </h2>
      <p className="service-left-content-paragraph">
        Los siguientes documentos deben ser presentados por los Fabricantes:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Formulario de Solicitud Completado (Formulario V o VI dependiendo del esquema)",
          "2. Certificado de Registro Comercial (por ejemplo, Registro Udyam, MSME, Certificado GST)",
          "3. Licencia de Fábrica o Licencia Comercial Municipal",
          "4. Lista de Maquinaria de Fabricación",
          "5. Diagrama de Flujo del Proceso de Fabricación",
          "6. Plan de Diseño de las Instalaciones de Fabricación",
          "7. Detalles del Personal de Control de Calidad Interno",
          "8. Detalles del Equipo de Pruebas",
          "9. Acuerdo de Colaboración Técnica (si aplica)",
          "10. Poder Legal/Carta de Autorización",
          "11. Carta de Autorización de Nombre de Marca (si se solicita bajo una marca diferente)",
          "12. Informe de Pruebas del laboratorio aprobado por BIS",
          "13. Factura de Adquisición de Materia Prima",
          "14. Fotografías del Producto y Empaque",
          "15. Declaración de Conformidad con los Estándares",
          "16. Compromiso Respecto a Productos No Estándar",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Beneficios de la Certificación de Marca BIS ISI
      </h3>
      <p className="service-left-content-paragraph">
        Para los fabricantes indios, obtener la Certificación de Marca BIS ISI
        proporciona ventajas específicas:
      </p>
      <PointsListWithoutHeading
        points={[
          "Autorización a Nivel Nacional: Los fabricantes tienen permiso para vender los productos certificados en todo el país.",
          "Evitar Penalizaciones: Adherirse a los estándares BIS evita multas cuantiosas y problemas legales.",
          "Ingresos Aumentados: La demanda es mayor para productos que están certificados.",
          "Potencial de Exportación: Ciertos mercados extranjeros identifican ISI como un estándar de excelencia.",
          "Enfoque en la Calidad: Una empresa certificada muestra compromiso con los principios de producción de calidad.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Revocación de Licencia BIS{" "}
      </h3>
      <p className="service-left-content-paragraph">
        La licencia para certificar es la propiedad exclusiva de la autoridad
        BIS y puede cancelar dicha licencia si:
      </p>
      <PointsListWithoutHeading
        points={[
          "Hay una disminución en la calidad de los productos que han sido certificados.",
          "Hay un uso indebido de la marca ISI por parte de los productores.",
          "El productor no sigue un cierto aspecto de la licencia.",
        ]}
      />

      <p className="service-left-content-paragraph">
        De acuerdo con la Regulación 11 de las Regulaciones BIS (Evaluación de
        Conformidad), 2018, no hay duda de que la licencia puede ser suspendida
        o cancelada por incumplimiento de las regulaciones señaladas.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusión</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusión</h2>

      <p className="service-left-content-paragraph">
        Para la Certificación de Marca BIS ISI, nuevamente, no hay duda de que
        tiene más que solo pasos burocráticos para los fabricantes en la India.
        Ayuda a establecer una reputación positiva y lograr un crecimiento
        sostenible en el negocio. Si se adhieren a los estándares BIS, entonces
        hay una garantía certificada máxima de que los productos son confiables
        y están listos para la venta.
      </p>

      <p className="service-left-content-paragraph">
        En conclusión, la marca ISI se ha convertido en algo más que solo un
        cumplimiento legal, se ha convertido en una marca de garantía en un
        ambiente empresarial donde es difícil conseguir confianza. Es una señal
        de competitividad en el mercado junto con el cumplimiento de las
        regulaciones.
      </p>

      <p className="service-left-content-paragraph">
        No importa si fabrica productos electrónicos, elementos de construcción
        o cualquier otro producto para la venta, la Certificación BIS ISI
        asegura que sus productos estén alineados con los estándares de primer
        nivel de la India mientras salvaguarda su reputación así como sus
        consumidores.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "¿Qué es la certificación BIS y por qué es importante?",
      answer:
        "La certificación BIS es emitida por la Oficina de Normas de la India para asegurar que los productos cumplan con los estándares de seguridad y calidad de la India. Es vital para el cumplimiento legal, la confianza del consumidor y la aceptación en el mercado.",
    },
    {
      question: "¿Cuál es la diferencia entre licencia BIS y marca ISI?",
      answer:
        "La licencia BIS es un documento legal que autoriza a un fabricante a usar la marca ISI. La marca ISI es la etiqueta visible en los productos que indica certificación BIS.",
    },
    {
      question: "¿Cuánto tiempo se tarda en obtener la certificación BIS?",
      answer:
        "Típicamente, de 6 a 10 semanas dependiendo del tipo de producto, requisitos de prueba y resultados de auditoría",
    },
    {
      question: "¿Cuál es el período de validez de una licencia BIS?",
      answer:
        "Usualmente de 1 a 2 años, después de lo cual debe renovarse. La renovación debe iniciarse al menos 30 días antes de la expiración.",
    },
    {
      question: "¿Cuál es el costo de la certificación BIS?",
      answer:
        "Los costos varían pero pueden oscilar desde ₹25,000 hasta ₹100,000+, incluyendo pruebas, auditoría y tarifas de licencia.",
    },
    {
      question:
        "¿Es la certificación BIS obligatoria para todos los productos?",
      answer:
        "No. Es obligatoria solo para productos listados bajo el esquema 1 de certificación BIS.",
    },
    {
      question:
        "¿Cómo puedo encontrar el estándar IS correcto para mi producto?",
      answer:
        "Visite el sitio web de BIS o consulte con laboratorios de prueba y consultores reconocidos por BIS para identificar el estándar aplicable.",
    },
    {
      question:
        "¿Pueden los fabricantes extranjeros solicitar certificación BIS?",
      answer:
        "Sí. A través del Esquema de Certificación de Fabricantes Extranjeros (FMCS), las entidades en el extranjero pueden obtener licencias BIS para uso de marca ISI.",
    },
    {
      question: "¿Qué pasa si mi producto falla las pruebas BIS?",
      answer:
        "Necesitará corregir los problemas y volver a presentar para pruebas. Las solicitudes pueden pausarse hasta que se demuestre cumplimiento exitoso.",
    },
    {
      question: "¿Se necesita certificación BIS para exportar?",
      answer:
        "Aunque no siempre es obligatoria para exportaciones, la certificación BIS aumenta la credibilidad y puede satisfacer a compradores internacionales o organismos reguladores.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Preguntas Frecuentes"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Preguntas Frecuentes
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          ¿No encuentras la respuesta que buscas?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            ¡Contáctanos!
          </a>
        </p>
        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </h3>
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

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/a-guide-to-bis-certification-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-isi-mark-renzheng",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/bis-isi-mark-zertifizierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/bis-isi-mark-certificering",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-isi-mark-shounin",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-isi-mark-injeung",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-marque-isi",
    },
    // {
    //   code: "es",
    //   name: "Spanish",
    //   flag: "https://flagcdn.com/w320/es.png",
    //   path: "/es/certificacion-bis-marca-isi",
    // },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-isi-mark-raprong",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/sertifikasi-bis-isi-mark",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-isi-mark",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-isi-mark",
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

const ISIMarkServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                El Mejor Consultor de Certificados de la India
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
                src={ISIMarkImage}
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
