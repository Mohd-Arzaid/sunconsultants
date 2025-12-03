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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ServicesRightSideContentSpanish from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentSpanish";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
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

const BISCertificationSpanish = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableSpanish />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterSpanish />
    </div>
  );
};

export default BISCertificationSpanish;

const BISCertificationMetaTags = () => {
  const title = "BIS Certificación: Tipos, Proceso, Documentos, Costos";
  const description =
    "La certificación BIS asegura que los productos cumplan con las normas indias para seguridad, rendimiento y calidad.";
  const keywords =
    "Certificación BIS, Registro BIS, Marca ISI, Proceso BIS, Costos BIS, Normas Indias, BIS India, Licencia BIS";
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

const BISCertificationBreadcrumb = () => {
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
                    Certificación BIS en India para Importadores y Fabricantes
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

const BISCertificationHero = () => {
  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Experiencia Certificada
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificación BIS en India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            para Importadores y Fabricantes
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            La certificación BIS garantiza la calidad y seguridad de los
            productos en India. Es obligatoria para muchos productos y requiere
            pruebas, documentación y aprobación.
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
                Ver Servicios
              </span>
            </div>
          </nav>
        </article>

        <BISCertificationContactForm />
      </div>
    </section>
  );
};

const BISCertificationContactForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/es/que-es-el-certificado-bis-bis-indio"))
      return "Certificación BIS - Spanish Page";
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

    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "¡Formulario enviado exitosamente!",
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
        title: errorMessage || "¡No se pudo enviar el formulario!",
        description: "Verifica tus datos e inténtalo nuevamente.",
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
        <span className="text-black"> Inténtalo ahora</span>
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
            placeholder="Nombre completo *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Correo electrónico *"
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
            placeholder="Número de contacto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nombre de la empresa *"
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
            placeholder="Nombre del producto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certificación requerida *"
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

const BISCertificationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "schemes",
      "process",
      "documents",
      "cost",
      "air",
      "conclusion",
      "faqs",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Resumen",
    schemes: "Esquemas",
    process: "Proceso",
    documents: "Documentos",
    cost: "Costos",
    air: "AIR",
    conclusion: "Conclusión",
    faqs: "FAQs",
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

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
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Alternar menú"
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <BISCertificationContentLeft />
        <ServicesRightSideContentSpanish />
      </div>
    </div>
  );
};

const BISCertificationContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <SchemesSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <AIRSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Resumen</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Certificación BIS Marca ISI para Fabricantes Indios
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Certificación BIS en India"
          title="Certificado BIS para fabricantes indios"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Introducción: Por qué importa la Certificación BIS
      </h2>

      <p className="service-left-content-paragraph">
        Imagine un fabricante de Alemania que ha inventado un dispositivo
        electrónico único y planea venderlo en el dinámico mercado indio. Aunque
        el dispositivo es seguro y ya cuenta con aprobaciones europeas, es
        retenido en el puerto de India. ¿Por qué? Porque el producto requiere la
        certificación BIS, crucial para vender muchos productos electrónicos en
        India.
      </p>

      <p className="service-left-content-paragraph">
        Muchos fabricantes internacionales e indios enfrentan situaciones
        similares cada año. Para los consumidores, la marca BIS no es solo un
        logo: es un sello de confianza de que el producto ha sido probado en
        calidad, seguridad y fiabilidad. Para las empresas, es la puerta de
        entrada a uno de los mercados más grandes del mundo.
      </p>

      <p className="service-left-content-paragraph">
        Este artículo responde a las preguntas sobre la certificación BIS: su
        necesidad, procesos, beneficios, esquemas, costos y la navegación del
        sistema para fabricantes extranjeros y nacionales.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Qué es la Certificación BIS para fabricantes e importadores?
      </h2>

      <p className="service-left-content-paragraph">
        La Certificación BIS es una certificación de seguridad y calidad
        otorgada por el Bureau of Indian Standards (BIS), el organismo nacional
        de normalización de India. Garantiza que un producto cumpla con las
        Normas Indias (IS) en rendimiento, seguridad y calidad.
      </p>
      <p className="service-left-content-paragraph">
        Cuando un producto cumple con estos requisitos, el BIS emite una
        licencia o certificado, que permite usar la marca ISI (para esquemas
        domésticos) o un número de registro bajo el esquema CRS.
      </p>
      <p className="service-left-content-paragraph">
        Para muchos fabricantes e importadores, la certificación BIS es
        obligatoria. Cubre una amplia gama de productos: electrodomésticos,
        cemento y acero, agua potable envasada, electrónica como teléfonos
        móviles, luces LED, bancos de energía y joyería (mediante hallmarking),
        entre otros. Sin reconocimiento BIS, no se puede vender ni distribuir
        legalmente en India.
      </p>

      <h2 className="service-left-content-heading-three">
        Breve historia del BIS en India
      </h2>

      <p className="service-left-content-paragraph">
        El Bureau of Indian Standards (BIS) se formó en 1986, reemplazando a la
        Indian Standards Institution (ISI) creada en 1947. Hoy, el BIS es el
        garante de la calidad y la normalización en India, alineado con
        prácticas internacionales y adaptado al contexto local.
      </p>

      <div className="service-left-content-heading-three">Hitos destacados</div>

      <PointsListWithoutHeading
        points={[
          "1947: Fundación de la ISI para apoyar sistemas de control de calidad tras la independencia.",
          "1955: Se otorga la marca ISI, convirtiéndose en un símbolo de calidad en India.",
          "1986: Se promulga la Ley BIS, reemplazando la ISI por el Bureau of Indian Standards.",
          "2016 y 2018: Enmiendas que ampliaron responsabilidades, incluyendo hallmarking y esquemas de certificación.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Actualmente, el BIS garantiza seguridad, fiabilidad y estandarización de
        miles de productos para los usuarios en India.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Por qué es obligatoria la Certificación BIS en India?
      </h2>
      <p className="service-left-content-paragraph">
        El mercado indio es enorme, dinámico y sensible a los precios. Esto lo
        hace vulnerable a productos baratos e inseguros. En este contexto, la
        certificación BIS actúa como barrera protectora.
      </p>
      <PointsListWithoutHeading
        points={[
          "Seguridad del consumidor – protege contra accidentes, problemas de salud y engaños.",
          "Regulación del mercado – evita la entrada de productos no conformes.",
          "Confianza – refuerza la credibilidad de productos nacionales e internacionales.",
          "Alineación global – ayuda a empresas extranjeras a adaptarse a la normativa india.",
          "Competencia justa – todos compiten en base a la calidad.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Por ejemplo, la certificación BIS para agua potable envasada evita
        riesgos de salud. Estándares para calentadores, tostadoras y otros
        electrodomésticos reducen incendios. La certificación BIS aborda estos
        riesgos.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Proceso</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Proceso de Certificación BIS
      </h2>

      <p className="service-left-content-paragraph">
        El proceso de certificación BIS sigue un flujo estructurado:
      </p>

      <PointsListWithoutHeading
        points={[
          "Identificar la Norma Relevante: seleccionar la norma india (IS) aplicable.",
          "Presentación de la Solicitud: envío al BIS con documentos requeridos.",
          "Pruebas del Producto: realizadas en laboratorios reconocidos por BIS.",
          "Inspección de Fábrica: realizada por funcionarios del BIS.",
          "Licencia BIS: emitida tras evaluación satisfactoria.",
          "Vigilancia: cumplimiento continuo y mantenimiento de la licencia.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documentos</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documentos Requeridos para la Certificación BIS
      </h2>

      <p className="service-left-content-paragraph">
        Un paquete documental sólido asegura una tramitación fluida. Requisitos
        clave:
      </p>

      <PointsListWithoutHeading
        points={[
          "Licencia comercial o documentos de registro de la empresa.",
          "Diagrama de flujo del proceso de fabricación.",
          "Lista de maquinaria y equipos.",
          "Detalles del producto y especificaciones técnicas.",
          "Informes de pruebas de laboratorios reconocidos por BIS.",
          "Manual de control de calidad.",
          "Registro de marca.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Para fabricantes extranjeros:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Nombramiento de un Representante Autorizado en India (AIR).",
          "Pruebas de representación y documentos de identidad.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Costos</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Costos de la Certificación BIS
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Componente de Costo
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Detalles
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tarifa de Solicitud
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tarifa única y no reembolsable según el tipo de producto
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Cargos de Pruebas
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Dependiendo de la complejidad; pagaderos a laboratorios
                reconocidos por BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tarifa Anual de Licencia
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Pagada anualmente para mantener la licencia BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Cargos de Inspección/Auditoría
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Si oficiales del BIS visitan la fábrica (viajes internacionales
                adicionales)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Honorarios de Consultoría (si aplica)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Opcional, para apoyo de cumplimiento integral
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const AIRSection = () => {
  return (
    <div id="air" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">AIR</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Rol del Representante Autorizado en India (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Para fabricantes extranjeros, el AIR es fundamental.
      </p>

      <PointsListWithoutHeading
        points={[
          "Gestiona la comunicación con el BIS.",
          "Reúne y presenta documentos, facilita la inspección.",
          "Asegura el cumplimiento antes, durante y después de la certificación.",
          "Debe ser ciudadano indio u organización con domicilio registrado en India.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Sin un AIR, obtener la certificación BIS para empresas extranjeras es
        imposible.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusión</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">Conclusión</div>

      <p className="service-left-content-paragraph">
        Contar con la certificación BIS es imprescindible para hacer negocios en
        India. No es opcional: es esencial para el éxito y la confianza. Para
        fabricantes e importadores, ofrece un entorno de negocio seguro y
        conforme a la ley, reduciendo riesgos legales. Con la marca BIS, la
        confianza del consumidor está garantizada.
      </p>

      <p className="service-left-content-paragraph">
        India es una de las economías de más rápido crecimiento. Acceder a este
        mercado puede impulsar el crecimiento de cualquier exportador. Ya sea
        que fabriques en India o en el extranjero, la licencia BIS es necesaria
        para fabricar o vender en el mercado indio. Es una inversión en
        seguridad, confianza, reputación, credibilidad y crecimiento sostenible.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Esquemas</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Esquemas de Certificación BIS
      </h2>

      <p className="service-left-content-paragraph">
        El BIS cuenta con diversos esquemas de certificación diseñados para
        múltiples industrias y productos, cada uno con objetivos específicos.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Foreign Manufacturers Certification Scheme",
          "Esquema de Marca ISI (Fabricantes nacionales)",
          "Scheme X bajo BIS de India",
          "CRS – Compulsory Registration Scheme",
          "Esquema de Hallmarking (Joyas y metales preciosos)",
          "Certificación Eco Mark",
          "MSCS – Management Systems Certification Scheme",
          "LRS – Lab Recognition Scheme",
        ]}
        linkMap={{
          "FMCS – Foreign Manufacturers Certification Scheme":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "Esquema de Marca ISI (Fabricantes nacionales)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X bajo BIS de India":
            "indian-bis-certification-under-scheme-x",
          "CRS – Compulsory Registration Scheme":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        Esquema de Marca ISI (Fabricantes nacionales)
      </h3>

      <p className="service-left-content-paragraph">
        Para fabricantes indios, obtener una licencia BIS es requisito para
        vender legalmente sus productos en el país. La licencia certifica el
        cumplimiento de las Normas Indias en calidad, seguridad y rendimiento.
        Incluye auditorías de fábrica, pruebas de producto y verificaciones de
        conformidad. Tras aprobar, se permite el uso de la marca ISI.
      </p>

      <p className="service-left-content-paragraph">
        Ya sea electrónica, acero, cemento, plástico o materiales de
        construcción, la certificación BIS es esencial para el acceso al
        mercado. Incrementa la reputación, permite participar en licitaciones y
        abre oportunidades. La falta de certificación puede llevar a multas,
        retiros o prohibiciones de venta.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Foreign Manufacturers Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        El FMCS está diseñado para empresas extranjeras que desean ingresar al
        mercado indio. Asegura el cumplimiento de las Normas Indias por parte de
        productos fabricados en el extranjero. Al igual que los fabricantes
        nacionales, se requiere licencia BIS para usar la marca ISI. La
        aprobación incluye inspección de fábrica y pruebas rigurosas.
      </p>

      <p className="service-left-content-paragraph">
        Los fabricantes extranjeros deben nombrar un Representante Autorizado en
        India (AIR), responsable de la comunicación, la presentación de
        solicitudes y el seguimiento de obligaciones y plazos ante el BIS.
      </p>

      <h3 className="service-left-content-heading-three">Scheme X</h3>

      <p className="service-left-content-paragraph">
        Scheme X (Reglamento Técnico Ómnibus) simplifica la evaluación de
        conformidad para industrias mecánicas y eléctricas, reduciendo
        documentación y tiempos sin comprometer los estándares indios.
      </p>

      <p className="service-left-content-paragraph">
        Cubre productos como bombas, grúas, transformadores, máquinas
        herramienta y otros equipos industriales. Facilita una salida al mercado
        más rápida manteniendo calidad y seguridad.
      </p>

      <h3 className="service-left-content-heading-three">
        Compulsory Registration Scheme (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        El CRS regula productos de TI y electrónicos (luces LED, teléfonos
        móviles, laptops, power banks, etc.). A diferencia del esquema ISI, no
        otorga la marca ISI; los productos registrados llevan un número de
        registro BIS. Las pruebas se realizan en laboratorios reconocidos por
        BIS.
      </p>

      <h3 className="service-left-content-heading-three">Hallmarking</h3>

      <p className="service-left-content-paragraph">
        En India, el marcado de joyería de oro y plata es obligatorio bajo el
        esquema de Hallmarking regulado por el BIS, garantizando pureza y
        autenticidad. Requiere licencia BIS y auditorías periódicas.
      </p>

      <h3 className="service-left-content-heading-three">Eco Mark</h3>

      <p className="service-left-content-paragraph">
        Eco Mark reconoce productos que reducen el impacto ambiental, cumpliendo
        criterios de emisiones, no toxicidad, biodegradabilidad y
        reciclabilidad. Refuerza confianza y promueve producción sostenible.
      </p>

      <h3 className="service-left-content-heading-three">
        MSCS – Management Systems Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        MSCS certifica sistemas de gestión (ISO 9001, ISO 14001, ISO 45001,
        etc.), mejorando reputación, cumplimiento y mejora continua mediante
        auditorías periódicas.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Lab Recognition Scheme
      </h3>

      <p className="service-left-content-paragraph">
        LRS garantiza competencia de laboratorios (por ejemplo, ISO/IEC 17025).
        Solo se aceptan informes de laboratorios reconocidos para certificación
        BIS. Auditorías recurrentes aseguran calidad y consistencia.
      </p>

      <h3 className="service-left-content-heading-three">
        Productos que requieren Certificación BIS
      </h3>

      <p className="service-left-content-paragraph">Ejemplos:</p>

      <PointsListWithoutHeading
        points={[
          "Eléctrica y Electrónica – Luces LED, teléfonos móviles, adaptadores, laptops.",
          "Materiales de Construcción – Cemento, barras de acero, productos estructurales.",
          "Bienes de Consumo – Agua potable envasada, cilindros de gas.",
          "Joyería y Metales preciosos – Oro y plata (Hallmarking).",
          "Equipos Industriales – Bombas, transformadores, máquinas herramienta.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Beneficios</h3>

      <PointsListWithoutHeading
        points={[
          "Cumplimiento legal: sin multas, prohibiciones ni decomisos.",
          "Acceso al mercado: necesario para vender productos regulados en India.",
          "Confianza del consumidor: la marca ISI es un símbolo reconocido.",
          "Ventaja competitiva: diferenciación frente a competidores no certificados.",
          "Facilitación de exportaciones: compradores internacionales reconocen BIS.",
          "Participación en licitaciones: muchos proyectos exigen productos con BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "¿Qué es la certificación BIS en India?",
      answer:
        "La certificación BIS es un sistema de aseguramiento de calidad emitido por el Bureau of Indian Standards para garantizar que los productos cumplan con las normas indias de seguridad, rendimiento y calidad.",
    },
    {
      question: "¿Por qué necesito un certificado BIS?",
      answer:
        "Es necesario para fabricar, importar, distribuir o vender ciertos productos en India de forma legal. Genera confianza en los consumidores.",
    },
    {
      question: "¿Qué es la marca ISI bajo la certificación BIS?",
      answer:
        "La marca ISI es el símbolo de que el producto cumple con las normas indias y ha sido certificado por el BIS mediante pruebas y registros adecuados.",
    },
    {
      question: "¿Quién emite las licencias BIS en India?",
      answer:
        "El Bureau of Indian Standards (BIS), el organismo nacional de normalización bajo el Ministerio de Asuntos del Consumidor.",
    },
    {
      question: "¿Cuáles son los diferentes esquemas de certificación BIS?",
      answer:
        "Incluyen el esquema de marca ISI, el Compulsory Registration Scheme (CRS), el Foreign Manufacturers Certification Scheme (FMCS), Hallmarking, Eco Mark y Scheme X.",
    },
    {
      question: "¿Qué productos requieren certificación BIS en India?",
      answer:
        "Electrodomésticos, electrónica, menaje, cemento, acero, joyería, teléfonos móviles, transformadores, entre otros.",
    },
    {
      question: "¿Cuánto dura la validez de una licencia BIS?",
      answer:
        "Generalmente de uno a dos años; debe renovarse antes de su vencimiento.",
    },
    {
      question: "¿Cuáles son los pasos para obtener la certificación BIS?",
      answer:
        "Seleccionar la norma aplicable, presentar la solicitud, realizar pruebas, inspección de fábrica y emisión del certificado.",
    },
    {
      question:
        "¿Pueden los fabricantes extranjeros solicitar una licencia BIS?",
      answer:
        "Sí, bajo el FMCS. Deben nombrar un Representante Autorizado en India (AIR).",
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
          FAQs – Certificación BIS en India
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
      path: "/what-is-bis-certificate-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/was-ist-das-bis-zertifikat-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/quest-ce-que-le-certificat-bis-indien",
    },
    // {
    //   code: "es",
    //   name: "Spanish",
    //   flag: "https://flagcdn.com/w320/es.png",
    //   path: "/es/que-es-el-certificado-bis-bis-indio",
    // },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-certificate-khue-a-rai-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/apa-itu-sertifikat-bis-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-certificato-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-chi-bis-la-gi-bis-an-do",
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

const BISCertificationServices = () => {
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
                El mejor consultor de certificación de India
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
              Marca BIS (Licencia ISI) para fabricantes extranjeros
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
              Registro y Certificación CDSCO
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
              Gestión de Residuos Plásticos (EPR)
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
              Certificado EPR
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
              Certificado LMPC
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

const PointsListWithoutHeading = ({ points, linkMap }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            {linkMap && linkMap[point] ? (
              <Link
                to={`/${linkMap[point]}`}
                className="font-geist text-sm md:text-lg text-[#0b6b67] hover:text-[#084c49] underline underline-offset-4 tracking-wide text-left max-w-full leading-loose flex-1"
              >
                {point}
              </Link>
            ) : (
              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                {point}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
