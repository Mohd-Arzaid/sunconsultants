import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon } from "lucide-react";
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
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import FooterThai from "@/components/manual/Footer/FooterThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMThai = () => {
  return (
    <div className="relative">
      <MetaTags />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="product-table">
        <BISFMProductTable />
      </div>
      <LanguageSelector />
      <div id="services">
        <Services />
      </div>
      <FooterThai />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMThai;

const MetaTags = () => {
  const title =
    "การรับรอง BIS FMCS | โครงการรับรองผู้ผลิตต่างประเทศ | Sun Certifications";
  const description =
    "บริการรับรอง BIS FMCS สำหรับผู้ผลิตต่างประเทศ เชี่ยวชาญ รับใบรับรอง ISI Mark สำหรับการส่งออกไปยังอินเดีย รับรอง BIS ที่เชื่อถือได้ตั้งแต่ปี 2013 ✓ ประมวลผลเร็ว ✓ คำแนะนำจากผู้เชี่ยวชาญ";
  const keywords =
    "ใบรับรอง BIS สำหรับผู้ผลิตต่างประเทศ, ใบอนุญาต BIS, เครื่องหมาย ISI";
  const canonicalUrl =
    "https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle = "การรับรอง BIS FMCS | โครงการรับรองผู้ผลิตต่างประเทศ";
  const ogDescription =
    "บริการรับรอง BIS FMCS สำหรับผู้ผลิตต่างประเทศ เชี่ยวชาญ รับใบรับรอง ISI Mark สำหรับการส่งออกไปยังอินเดีย ✓ ประมวลผลเร็ว ✓ คำแนะนำจากผู้เชี่ยวชาญ";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">หน้าแรก</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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

const HeroSection = () => {
  return (
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              ความเชี่ยวชาญที่ได้รับการรับรอง
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              การรับรอง BIS อินเดีย
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            สำหรับผู้ผลิตต่างประเทศ
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            ผู้ผลิตต่างประเทศต้องมีเครื่องหมาย ISI สำหรับการส่งออกไปยังอินเดีย
            ครอบคลุมผลิตภัณฑ์บังคับ 600+ รายการ และผลิตภัณฑ์สมัครใจ 20,000+
            รายการ
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
                ดูบริการ
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india"
      )
    )
      return "BISFM (Foreign Manufacturers) - Thai Page";
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
        description: "El nombre solo debe contener letras y espacios.",
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
        title: "¡Formulario de contacto enviado con éxito!",
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
          "Algo salió mal. Por favor verifique sus datos e intente nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contáctenos
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Reserve una Cita
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ¿Desea contactar a nuestro equipo y programar una llamada?
        <span className="text-black"> Pruebe Ahora</span>
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

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "standardization",
      "representation",
      "document",
      "process",
      "costing",
      "surveillance",
      "facilitator",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Resumen",
    standardization: "Estandarización",
    representation: "Representación",
    document: "Documento",
    process: "Proceso",
    costing: "Costos",
    surveillance: "Vigilancia",
    facilitator: "Facilitador",
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
      {/* Mobile Menu Button */}
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentThai />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two">
            Información completa sobre la certificación BIS India bajo el
            Esquema FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            ¿Qué es BIS India?
          </h2>

          <p className="service-left-content-paragraph">
            La Oficina de Normas de la India (BIS) es el organismo nacional de
            normalización de la India bajo el Ministerio de Asuntos del
            Consumidor, Alimentación y Distribución Pública. Establecida bajo la
            Ley BIS de 1986, y revisada en 2016, BIS desempeña un papel
            fundamental en la estandarización, marcado y certificación de
            calidad de productos. Su objetivo es garantizar la calidad,
            seguridad y confiabilidad de los productos ofrecidos a los
            consumidores indios.
          </p>

          <p className="service-left-content-paragraph">
            BIS opera a través de varios esquemas que incluyen certificación de
            productos, marcado para joyería, servicios de prueba y programas de
            capacitación. Sin embargo, uno de sus marcos más significativos a
            nivel internacional es el Esquema de Certificación para Fabricantes
            Extranjeros (FMCS).
          </p>
        </div>

        <OverviewSection />
        <div className="service-left-content-divider" />
        <StandardizationSection />
        <div className="service-left-content-divider" />
        <RepresentationSection />
        <div className="service-left-content-divider" />
        <DocumentSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CostingSection />
        <div className="service-left-content-divider" />
        <SurveillanceSection />
        <div className="service-left-content-divider" />
        <FacilitatorSection />
        <ServiceAuthorThai />
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

      <h2 className="service-left-content-heading-two">
        ¿Qué es el certificado BIS bajo FMCS?
      </h2>

      <p className="service-left-content-paragraph">
        Introducido en el año 2000, FMCS es un mecanismo mediante el cual los
        fabricantes extranjeros pueden obtener una licencia BIS para usar la
        marca ISI en sus productos, indicando conformidad con los estándares
        indios. El proceso de certificación FMCS permite a las entidades
        extranjeras vender legalmente sus productos en India sin establecer una
        unidad de fabricación local.
      </p>

      <p className="service-left-content-paragraph">
        Hasta ahora, más de 1,650 fabricantes extranjeros están operando en
        India bajo el sistema de certificación BIS a través de FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Por qué es crucial la certificación BIS?
      </h2>

      <p className="service-left-content-paragraph">
        Obtener un certificado BIS es más que un requisito legal: es una puerta
        de entrada al vasto mercado consumidor de India. Aquí hay algunas
        razones clave por las que es esencial:
      </p>

      <PointsListWithoutHeading
        points={[
          "Cumplimiento Legal: Los productos deben cumplir con los estándares indios relevantes.",
          "Credibilidad de la Marca: La marca ISI sirve como prueba de calidad y aumenta la confianza del consumidor.",
          "Despacho Aduanero: Sin una licencia BIS válida, los productos pueden ser rechazados en aduanas.",
          "Acceso al Mercado: Ayuda a las marcas extranjeras a obtener entrada fluida y aceptación generalizada en India.",
          "Mitigación de Riesgos: Garantiza que los productos sean seguros, evitando así posibles retiros y problemas de responsabilidad.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Alcance de productos cubiertos en BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS ha listado más de 600 productos bajo certificación obligatoria, y
        más de 20,000 artículos son elegibles para certificado BIS voluntario.
        Estos abarcan una amplia gama de industrias:
      </p>

      <PointsListWithoutHeading
        points={[
          "Electrónica y hardware de TI",
          "Piezas automotrices",
          "Electrodomésticos",
          "Productos de acero",
          "Cemento y materiales de construcción, etc.",
        ]}
      />

      <p className="service-left-content-paragraph">
        La lista creciente indica el alcance y relevancia cada vez mayores del
        certificado BIS en el comercio global.
      </p>

      <h2 className="service-left-content-heading-three">
        Objetivos o beneficios de la certificación BIS para fabricantes
        extranjeros bajo FMCS
      </h2>

      <p className="service-left-content-paragraph">
        El régimen FMCS y certificado BIS tiene como objetivo:
      </p>

      <PointsListWithoutHeading
        points={[
          "El uso de la marca ISI sin una licencia BIS válida es punible por ley.",
          "Los productos certificados deben mostrar tanto el logotipo ISI como el número CM/L (Certificado de Licencia de Fabricación).",
          "Los infractores pueden enfrentar prohibiciones de productos, multas o incluso enjuiciamiento penal.",
          "Construir confianza entre los consumidores y las marcas importadas.",
          "Facilitar el comercio justo y un campo de juego nivelado.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Características clave del certificado BIS para fabricantes extranjeros
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CARACTERÍSTICA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                DESCRIPCIÓN
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Aplicabilidad
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Solo fabricantes extranjeros
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Marcado
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Marca ISI + número CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Requisito de Auditoría
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Inspección obligatoria de fábrica
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Pruebas
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Realizadas en laboratorios indios aprobados por BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Validez
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Licencia BIS válida por 1-2 años
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Renovación
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Requerida al vencimiento o actualizaciones del producto
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Representante Indio Autorizado)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Debe ser designado para comunicarse con BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garantía Bancaria de Rendimiento
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Requerida de banco indio aprobado por RBI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const StandardizationSection = () => {
  return (
    <div id="standardization" className="flex flex-col scroll-mt-20">
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Estandarización
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ¿Qué es BIS India y por qué es importante?
      </h2>

      <p className="service-left-content-paragraph">
        BIS India es el sello de calidad y seguridad emitido por la Oficina de
        Normas de la India (BIS). Hoy en día, la marca ISI se usa exclusivamente
        para designar productos que cumplen con los estándares indios bajo el
        esquema oficial de certificación BIS.
      </p>

      <p className="service-left-content-paragraph">
        Para que un producto lleve la marca BIS India o ISI, debe pasar por un
        riguroso proceso de certificación BIS, que incluye pruebas de
        laboratorio, inspección de fábrica, auditorías de documentación y
        verificaciones de cumplimiento con las directrices BIS India.
      </p>

      <p className="service-left-content-paragraph">
        Estatus Legal de la certificación BIS en India
      </p>

      <p className="service-left-content-paragraph">
        La licencia BIS no es meramente una herramienta de marketing: es un
        requisito legal para todos los productos que caen bajo el esquema de
        certificación BIS obligatorio.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Según la Ley BIS, 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "El uso de la marca ISI sin una licencia BIS válida es punible por ley.",
          "Los productos certificados deben mostrar tanto el logotipo ISI como el número CM/L (Certificado de Licencia de Fabricación).",
          "Los infractores pueden enfrentar prohibiciones de productos, multas o incluso enjuiciamiento penal.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="Logotipo de marca ISI"
        title="Logotipo de marca ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <div className="service-left-content-heading-three">
        El logotipo ISI típicamente consiste en:
      </div>

      <PointsListWithoutHeading
        points={[
          'Las letras estilizadas "ISI" dentro de un rectángulo con esquinas redondeadas',
          "El número CM/L mostrado debajo o adyacente a la marca",
          "El número de código del estándar indio de referencia (p. ej., IS 302 para electrodomésticos)",
        ]}
      />

      <div className="service-left-content-heading-three">
        La colocación debe ser:
      </div>

      <PointsListWithoutHeading
        points={[
          "Permanente y claramente visible en el producto",
          "En el empaque si no es posible en el producto",
          "En los manuales de usuario en algunas categorías de productos",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Categorías de productos que requieren certificado BIS
      </h2>

      <p className="service-left-content-paragraph">
        Más de 600 productos requieren la marca ISI bajo el esquema de registro
        obligatorio en India. Los ejemplos incluyen:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CATEGORÍA DE PRODUCTO
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CÓDIGO IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ESTADO
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Electrodomésticos
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Acero e Hierro
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Contenedores de Alimentos
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Cascos
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Cemento
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorio
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Cada categoría requiere el cumplimiento de su estándar indio
        correspondiente, que se prueba durante el proceso de certificación BIS.
        La lista completa de productos se puede consultar{" "}
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Haciendo clic aquí
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS India vs. Otras Certificaciones Globales
      </h2>

      <p className="service-left-content-paragraph">
        Comparemos la marca ISI con otros símbolos internacionales:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MARCA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                PAÍS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ¿OBLIGATORIO?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                ENFOQUE
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                India
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sí
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Seguridad y calidad del producto
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sí (para categorías específicas)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Salud, seguridad, medio ambiente
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                EE. UU.
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                No
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Estándares de seguridad (voluntario)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                China
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sí
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Seguridad de productos eléctricos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        A diferencia de UL (voluntario) o CE (específico de región), la marca
        ISI bajo el esquema de registro BIS es tanto obligatoria como aplicada
        localmente.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Es obligatoria la certificación BIS o la licencia BIS para importar a
        India?
      </h2>

      <p className="service-left-content-paragraph">
        Naturaleza Obligatoria del Certificado BIS
      </p>

      <p className="service-left-content-paragraph">
        El Gobierno de India ha hecho obligatorio que ciertos productos sean
        certificados por la Oficina de Normas de la India (BIS) antes de que
        puedan ser importados, vendidos o distribuidos en el mercado indio. Esta
        obligación surge de:
      </p>

      <PointsListWithoutHeading
        points={[
          "Objetivos de protección al consumidor",
          "Armonización con estándares indios",
          "Regulaciones nacionales de seguridad",
        ]}
      />

      <p className="service-left-content-paragraph">
        Si un producto cae bajo el requisito obligatorio de BIS India, debe
        tener un certificado BIS y llevar la marca ISI antes de que pueda pasar
        por aduanas indias.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Se requiere certificación BIS solo para importaciones?
      </h2>

      <p className="service-left-content-paragraph">
        No. La certificación BIS es obligatoria para:
      </p>

      <PointsListWithoutHeading
        points={[
          "Fabricantes nacionales que producen productos regulados",
          "Fabricantes extranjeros que exportan productos regulados a India",
        ]}
      />

      <p className="service-left-content-paragraph">
        Ya sea que esté ubicado en India o en el extranjero, si su producto está
        en la lista obligatoria, debe tener una licencia BIS y mostrar la marca
        ISI.
      </p>

      <p className="service-left-content-paragraph">
        Las aduanas indias ahora usan sistemas de datos avanzados para marcar
        automáticamente los envíos que no cumplen. Todos los bienes bajo
        categorías reguladas son escaneados para verificar la presencia de un
        certificado BIS válido.
      </p>

      <p className="service-left-content-paragraph">
        Exenciones de la Certificación BIS
      </p>

      <p className="service-left-content-paragraph">
        La certificación BIS es obligatoria en la mayoría de los casos, pero se
        pueden otorgar exenciones bajo escenarios específicos:
      </p>

      <PointsListWithoutHeading
        points={[
          "Para prototipos de I+D o pruebas de muestra",
          "Para importaciones personales de cantidad limitada",
        ]}
      />

      <p className="service-left-content-paragraph">
        Sin embargo, estas son raras y requieren cartas de exención formales de
        BIS o ministerios relacionados.
      </p>

      <h2 className="service-left-content-heading-three">
        ¿Cómo saber si su producto necesita certificado BIS o licencia BIS?
      </h2>

      <p className="service-left-content-paragraph">
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Haciendo clic aquí
        </span>
        Haga clic aquí para verificar si su producto está cubierto bajo el
        esquema de certificación BIS India obligatorio.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Representación
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Rol del Representante Indio Autorizado (AIR) en la Certificación BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        ¿Qué es un Representante Indio Autorizado (AIR)?
      </h3>

      <p className="service-left-content-paragraph">
        Un Representante Indio Autorizado (AIR) es un intermediario crucial
        designado por un fabricante extranjero que busca certificación BIS bajo
        el esquema de registro FMCS. El AIR sirve como enlace oficial entre la
        Oficina de Normas de la India (BIS) y el fabricante, asegurando una
        comunicación fluida, manejo de documentación y coordinación del proceso
        de certificación.
      </p>

      <h3 className="service-left-content-heading-three">
        Requisito Legal para la Designación de AIR
      </h3>

      <p className="service-left-content-paragraph">
        Según las directrices BIS, cualquier fabricante extranjero que no tenga
        una oficina registrada en India debe designar un AIR. Este requisito
        asegura que BIS tenga un punto de contacto confiable y accesible dentro
        de la jurisdicción india.
      </p>

      <h3 className="service-left-content-heading-three">
        Responsabilidades Clave del AIR
      </h3>

      <p className="service-left-content-paragraph">
        El rol del AIR abarca todo el proceso de certificación BIS, desde la
        documentación y presentación de solicitudes hasta la coordinación de
        auditorías y el cumplimiento post-certificación:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Responsabilidad
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Descripción
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Comunicación
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Actúa como punto de contacto con funcionarios y departamentos de
                BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Soporte de Solicitud
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ayuda a completar formularios, compilar documentos y presentar
                la solicitud
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordinación de Auditoría
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Coordina los horarios de inspección de fábrica y responde a las
                consultas del auditor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Monitoreo de Cumplimiento
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Asegura que todas las actividades de prueba y certificación
                cumplan con las normas BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gestión de Renovación
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supervisa la renovación de la licencia BIS, actualizaciones de
                documentación y pagos de tarifas
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Criterios de Elegibilidad para Convertirse en AIR
      </h3>

      <p className="service-left-content-paragraph">
        Para servir como AIR, un individuo u organización debe:
      </p>

      <PointsListWithoutHeading
        points={[
          "Ser un ciudadano indio o una entidad comercial legalmente registrada en India",
          "Tener una dirección física en India con un código postal válido",
          "Ser capaz de comunicarse con fluidez en inglés e idiomas locales",
          "Comprender el esquema de certificación, protocolos de documentación BIS y expectativas regulatorias",
          "Ser capaz de responder a auditorías y correspondencia oportunamente en nombre del fabricante extranjero",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Por qué el Rol del AIR es Vital
      </h3>

      <p className="service-left-content-paragraph">
        El AIR asegura continuidad y responsabilidad a lo largo del proceso de
        certificación BIS. Sin un AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS no tiene jurisdicción para actuar contra un fabricante extranjero que no cumple",
          "Las consultas urgentes y los horarios de auditoría pueden retrasarse",
          "El proceso de certificación puede quedar estancado, revocado o rechazado",
        ]}
      />

      <p className="service-left-content-paragraph">
        Un AIR proactivo y experimentado aumenta significativamente las
        posibilidades de una certificación BIS exitosa.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documento</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Documentación Requerida para Certificación BIS bajo FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Tipo de Documento
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Propósito
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Formulario de Solicitud FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Solicitud oficial de certificación
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lista de Equipos de Fabricación
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Muestra las capacidades de producción
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lista de Materias Primas
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Asegura la calidad del material de entrada
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lista de Equipos de Prueba
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Evalúa la preparación para pruebas y cumplimiento
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificados de Calibración
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prueba la precisión del equipo de prueba
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Diseño de Fábrica y Flujo de Proceso
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ayuda a los auditores a entender las etapas de fabricación
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificados de Prueba
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prueba la calidad de materias primas y producto final
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Perfil de Control de Calidad
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verifica las calificaciones del personal y los SOP
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Comprobante de Pago
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Valida el envío de tarifas a BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garantía Bancaria de Rendimiento
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Actúa como garantía financiera para BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Desglose Detallado de Cada documento requerido para certificación BIS
        India
      </h3>

      <div className="service-left-content-heading-three">
        1. Formulario de Solicitud FMCS
      </div>

      <p className="service-left-content-paragraph">
        Este documento proporciona detalles generales sobre el fabricante
        extranjero, incluyendo:
      </p>

      <PointsListWithoutHeading
        points={[
          "Detalles del producto (tipo, categoría, modelo)",
          "Estándar Indio previsto",
          "Detalles de contacto de fábrica y AIR",
          "Capacidad de fabricación y alcance de pruebas",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Lista de Equipos de Fabricación
      </div>

      <PointsListWithoutHeading
        points={[
          "Nombre y marca de la máquina",
          "Capacidad de producción",
          "Detalles de contacto de fábrica y AIR",
          "Registros de mantenimiento (si aplica)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Lista de Materias Primas
      </div>

      <PointsListWithoutHeading
        points={[
          "Fuente de adquisición",
          "Grados y especificaciones",
          "Protocolo de prueba (si lo hay)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Lista de Equipos de Prueba
      </div>

      <PointsListWithoutHeading
        points={[
          "Nombre del equipo y fabricante",
          "Cumplimiento con parámetros de prueba en Estándar Indio",
          "Ubicación dentro de la fábrica",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Certificados de Calibración
      </div>

      <PointsListWithoutHeading
        points={[
          "Fecha de última calibración",
          "Período de validez",
          "Número de certificado",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Diseño de Fábrica y Diagrama de Flujo de Proceso
      </div>

      <PointsListWithoutHeading
        points={[
          "Puntos de entrada y salida",
          "Áreas de laboratorio de pruebas",
          "Puntos de control de calidad",
          "Secciones de almacenamiento y empaque",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Garantía Bancaria de Rendimiento
      </div>

      <p className="service-left-content-paragraph">
        Emitida por un banco indio aprobado por RBI, la Garantía Bancaria de
        Rendimiento (PBG) cubre la responsabilidad en caso de incumplimiento.
        Este documento debe:
      </p>

      <PointsListWithoutHeading
        points={[
          "Estar en papel membretado oficial del banco",
          "Indicar el período de garantía y el monto",
          "Estar firmado y sellado",
        ]}
      />

      <div className="service-left-content-heading-three">
        Errores comunes de documentación a evitar al solicitar certificado BIS o
        BIS India.
      </div>

      <PointsListWithoutHeading
        points={[
          "Desajuste entre datos del formulario y la realidad de la fábrica",
          "Enviar informes de calibración vencidos",
          "Falta de comprobante de tarifa BIS",
          "Flujos de proceso incompletos o vagos",
          "Inconsistencias de nomenclatura entre documentos",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">กระบวนการ</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        กระบวนการรับรอง BIS แบบทีละขั้นตอนภายใต้ FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        ภาพรวมของการเดินทางรับรอง BIS
      </h3>

      <p className="service-left-content-paragraph">
        กระบวนการรับรอง BIS ภายใต้โครงการรับรองผู้ผลิตต่างประเทศ (FMCS)
        เป็นกระบวนการที่มีระเบียบ มีโครงสร้าง และมีหลายขั้นตอน
        มันรับประกันว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดียที่เกี่ยวข้อง
        กระบวนการผลิตมีความแข็งแกร่ง และการทดสอบมีความแม่นยำ
      </p>

      <h3 className="service-left-content-heading-three">
        ตารางสรุปกระบวนการใบอนุญาต BIS แบบทีละขั้นตอน
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ขั้นตอน
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                คำอธิบาย
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การยื่นใบสมัครไปยัง BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การตรวจสอบเอกสารและการทบทวนเบื้องต้น
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การแก้ไขคำถามและการยื่นคำชี้แจง
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การแต่งตั้งผู้ตรวจสอบทางเทคนิค BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การจัดตารางการตรวจสอบโรงงานและการประสานงานผ่าน AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การตรวจสอบโรงงานและการปิดผนึกตัวอย่างโดยผู้ตรวจสอบ BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การทดสอบผลิตภัณฑ์ภายใน (ถ้ามี)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การทดสอบตัวอย่างที่ปิดผนึกในห้องปฏิบัติการที่ได้รับอนุมัติจาก
                BIS ในอินเดีย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การทบทวนรายงานการทดสอบและผลการตรวจสอบ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การออกใบอนุญาต BIS และการใช้เครื่องหมาย ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="ตัวอย่างใบรับรอง BIS สำหรับ FMCS"
        title="ตัวอย่างใบรับรอง BIS สำหรับ FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        ระยะเวลาในการได้รับใบรับรอง BIS
      </h3>

      <div className="service-left-content-heading-three">
        ระยะเวลาทั่วไปตั้งแต่การยื่นใบสมัครจนถึงใบรับรอง
      </div>

      <p className="service-left-content-paragraph">
        กระบวนการรับรอง BIS ภายใต้ FMCS โดยทั่วไปใช้เวลาประมาณ 120 วันทำการ
        (ประมาณ 3–4 เดือน) นับจากวันที่ยื่นใบสมัครที่ถูกต้อง
        ความล่าช้ามักเกิดขึ้นเมื่อเอกสารไม่ชัดเจนหรือเมื่อโรงงานยังไม่พร้อมสำหรับการตรวจสอบ
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">ต้นทุน</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        อธิบายโครงสร้างต้นทุนการรับรอง BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        ภาพรวมของต้นทุนการรับรอง BIS
      </h3>

      <p className="service-left-content-paragraph">
        การได้รับใบรับรอง BIS ภายใต้โครงการรับรองผู้ผลิตต่างประเทศ (FMCS)
        เกี่ยวข้องกับต้นทุนหลายประเภท ครอบคลุมทุกอย่างตั้งแต่การยื่นใบสมัคร
        การตรวจสอบ ไปจนถึงการทดสอบผลิตภัณฑ์และการใช้เครื่องหมาย
      </p>

      <p className="service-left-content-paragraph">
        ผู้ผลิตต่างประเทศต้องจัดทำงบประมาณอย่างเพียงพอเพื่อให้แน่ใจว่ามีการชำระเงินทันเวลา
        เนื่องจากความล้มเหลวในการชำระเงินอาจนำไปสู่การปฏิเสธการรับรอง BIS
        ในระหว่างทาง
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                หมวดหมู่ต้นทุน
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                คำอธิบาย
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ค่าธรรมเนียมการสมัคร (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                จ่ายระหว่างการยื่นแบบฟอร์มใบสมัคร FMCS เพื่อรับ BIS อินเดีย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ค่าธรรมเนียมการตรวจสอบ (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ครอบคลุมค่าเดินทางของผู้ตรวจสอบ BIS อัตราต่อวัน
                และค่าใช้จ่ายที่เกี่ยวข้อง
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ค่าธรรมเนียมการทดสอบผลิตภัณฑ์ (ตามผลิตภัณฑ์)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                สำหรับการทดสอบตัวอย่างที่ปิดผนึกในห้องปฏิบัติการที่รับรองโดย BIS
                ในอินเดีย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ค่าธรรมเนียมใบอนุญาต (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ค่าธรรมเนียมครั้งเดียวที่จ่ายเมื่อได้รับใบรับรอง BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ค่าธรรมเนียมเครื่องหมาย (ตามผลิตภัณฑ์)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ค่าธรรมเนียมรายปีสำหรับการใช้เครื่องหมาย ISI
                บนผลิตภัณฑ์ที่รับรองแล้ว
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                หลักประกันประสิทธิภาพ (USD 10,000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                หลักประกันทางการเงินที่ฝากผ่านธนาคารอินเดียเพื่อให้แน่ใจว่ามีการปฏิบัติตาม
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const SurveillanceSection = () => {
  return (
    <div id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">การเฝ้าระวัง</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        ข้อกำหนดการเฝ้าระวังและการปฏิบัติตามหลังการรับรอง BIS
      </h2>

      <p className="service-left-content-paragraph">
        เมื่อได้รับใบรับรอง BIS แล้ว ความรับผิดชอบไม่ได้จบลงที่นั่น การรับรอง
        BIS รวมถึงระบบการเฝ้าระวังและการปฏิบัติตามอย่างต่อเนื่อง
        เพื่อให้แน่ใจว่ามีการปฏิบัติตามมาตรฐานอินเดียอย่างต่อเนื่อง
        ระยะเวลาหลังการรับรองนี้มีความสำคัญต่อการรักษาใบอนุญาต BIS ของคุณ
        การรักษาสิทธิ์ในการใช้เครื่องหมาย ISI
        และการหลีกเลี่ยงบทลงโทษทางกฎหมายหรือการระงับ
      </p>

      <p className="service-left-content-paragraph">
        องค์ประกอบหลักของการเฝ้าระวังหลังจากได้รับใบรับรอง BIS การเฝ้าระวังตลาด:
        การสุ่มตัวอย่างผลิตภัณฑ์จากตลาดอินเดียเพื่อการทดสอบในห้องปฏิบัติการอิสระ
        หากตัวอย่างล้มเหลว ใบรับรอง BIS จะถูกระงับ ทำปีละสองครั้ง
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          ผู้ให้คำปรึกษา
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        ทำไมต้องเลือกที่ปรึกษาการรับรอง BIS?
      </h2>

      <p className="service-left-content-paragraph">
        การรับรอง BIS ภายใต้โครงการลงทะเบียน FMCS มีความซับซ้อน
        มีความเชี่ยวชาญทางเทคนิคสูง และมีความไวต่อเวลา
        แม้ว่าจะเป็นไปได้ที่จะดำเนินการรับรองด้วยตนเอง
        แต่ผู้ผลิตต่างประเทศที่ประสบความสำเร็จส่วนใหญ่พึ่งพาที่ปรึกษา BIS
        เพื่อทำให้กระบวนการราบรื่นและลดความเสี่ยง
      </p>

      <h3 className="service-left-content-heading-three">
        ที่ปรึกษา BIS ทำอะไรบ้าง?
      </h3>

      <p className="service-left-content-paragraph">
        ที่ปรึกษาการรับรอง BIS ให้คำแนะนำแบบครบวงจรในทุกขั้นตอนของกระบวนการ
        หน้าที่หลักของพวกเขารวมถึง:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                งาน
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                คำอธิบาย
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                เอกสาร
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                เตรียม ทบทวน และจัดรูปแบบเอกสารที่จำเป็นทั้งหมด
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การสนับสนุนการสมัคร
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ยื่นและติดตามใบสมัคร BIS ของคุณ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การเตรียมการตรวจสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ให้คำแนะนำทีมโรงงานเพื่อให้แน่ใจว่าพร้อมสำหรับการตรวจสอบ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การประสานงานตัวอย่าง
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                จัดการการปิดผนึกและการจัดส่งตัวอย่างไปยังอินเดีย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การช่วยเหลือการทดสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ประสานงานกับห้องปฏิบัติการและช่วยตีความผลลัพธ์
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การต่ออายุและการเฝ้าระวัง
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ดูแลการขยายใบอนุญาตและการตรวจสอบการปฏิบัติตาม
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        พวกเขาทำหน้าที่เป็นหุ้นส่วนเชิงกลยุทธ์ของคุณ
        มักจะทำหน้าที่เป็นตัวแทนอินเดียที่ได้รับอนุญาต (AIR) ของคุณด้วย
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "การรับรอง BIS คืออะไร และทำไมจึงสำคัญสำหรับผู้ผลิตต่างประเทศในการรับ BIS อินเดีย?",
      answer:
        "การรับรอง BIS เป็นกระบวนการกำกับดูแลที่ดำเนินการโดยสำนักงานมาตรฐานอินเดียเพื่อให้แน่ใจว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดีย มันมีความจำเป็นสำหรับผู้ผลิตต่างประเทศในการเข้าถึงตลาด การผ่านศุลกากร และความไว้วางใจของผู้บริโภคในอินเดีย",
    },
    {
      question: "เครื่องหมาย ISI แสดงถึงอะไร?",
      answer:
        "เครื่องหมาย ISI บ่งบอกถึงการเป็นไปตามมาตรฐานอินเดียเฉพาะ เป็นข้อบังคับสำหรับผลิตภัณฑ์ภายใต้การรับรอง BIS และต้องพิมพ์บนบรรจุภัณฑ์และผลิตภัณฑ์",
    },
    {
      question:
        "การรับรอง BIS เป็นข้อบังคับสำหรับการนำเข้าทั้งหมดไปยังอินเดียหรือไม่?",
      answer:
        "ไม่ใช่ การรับรอง BIS เป็นข้อบังคับสำหรับผลิตภัณฑ์ที่อยู่ในรายการภายใต้โครงการรับรอง BIS อินเดียที่บังคับ อย่างไรก็ตาม การรับรองโดยสมัครใจมีให้สำหรับผลิตภัณฑ์อื่นๆ",
    },
    {
      question: "ใครสามารถสมัครรับรอง BIS ภายใต้ FMCS ได้?",
      answer:
        "เฉพาะผู้ผลิตต่างประเทศจริงๆ (ไม่ใช่ผู้นำเข้าหรือผู้ค้า) เท่านั้นที่สามารถสมัครได้ ตัวแทนอินเดียที่ได้รับอนุญาต (AIR) เป็นข้อบังคับเพื่อเป็นตัวแทนพวกเขาในอินเดีย",
    },
    {
      question: "ใช้เวลานานแค่ไหนในการรับใบรับรอง BIS?",
      answer:
        "กระบวนการรับรอง BIS โดยเฉลี่ยภายใต้ FMCS ใช้เวลา 120 วัน ขึ้นอยู่กับความพร้อมของเอกสาร การจัดตารางการตรวจสอบ และเวลาการทดสอบ",
    },
    {
      question: "ต้นทุนหลักที่เกี่ยวข้องกับการรับรอง BIS คืออะไร?",
      answer:
        "ต้นทุนรวมถึงค่าธรรมเนียมการสมัคร ค่าธรรมเนียมการตรวจสอบ ค่าธรรมเนียมการทดสอบในห้องปฏิบัติการ ค่าธรรมเนียมใบอนุญาตและเครื่องหมาย และหลักประกันประสิทธิภาพ (PBG) จากธนาคารอินเดียที่ได้รับอนุมัติจาก RBI",
    },
    {
      question: "ใบอนุญาต BIS สามารถต่ออายุได้หรือไม่?",
      answer:
        "ได้ ใบอนุญาต BIS โดยทั่วไปมีอายุ 1–2 ปี และสามารถต่ออายุได้เมื่อปฏิบัติตามข้อกำหนดการปฏิบัติตามและการอัปเดตเอกสาร",
    },
    {
      question:
        "จะเกิดอะไรขึ้นหากผลิตภัณฑ์ล้มเหลวระหว่างการทดสอบในห้องปฏิบัติการ BIS?",
      answer:
        "หากผลิตภัณฑ์ล้มเหลว BIS อาจอนุญาตให้ดำเนินการแก้ไขและการทดสอบใหม่ ความล้มเหลวอย่างต่อเนื่องอาจส่งผลให้การปฏิเสธใบสมัคร",
    },
    {
      question: "จำเป็นต้องจ้างที่ปรึกษาการรับรอง BIS หรือไม่?",
      answer:
        "ไม่ใช่ข้อบังคับแต่แนะนำอย่างยิ่ง ที่ปรึกษาช่วยลดความล่าช้า จัดการการปฏิบัติตาม และเพิ่มโอกาสในการอนุมัติโดยการให้แน่ใจว่ามีการจัดแนวอย่างเต็มที่กับโปรโตคอล BIS",
    },
    {
      question: "ใบอนุญาต BIS สามารถถูกระงับหรือยกเลิกได้หรือไม่?",
      answer:
        "ได้ BIS อาจระงับหรือยกเลิกใบอนุญาตสำหรับการไม่ปฏิบัติตาม ความล้มเหลวของผลิตภัณฑ์ การใช้โลโก้ ISI อย่างผิดๆ หรือความไม่สอดคล้องในการตรวจสอบ",
    },
    {
      question: "ต้องใช้เอกสารอะไรบ้างสำหรับกระบวนการรับรอง BIS?",
      answer:
        "เอกสารรวมถึงแบบฟอร์มใบสมัคร FMCS รายงานการทดสอบ รายการอุปกรณ์ ใบรับรองการสอบเทียบ แผนผังโรงงาน จดหมายแต่งตั้ง AIR และหลักฐานการชำระค่าธรรมเนียม",
    },
    {
      question: "AIR คนเดียวสามารถเป็นตัวแทนใบสมัคร BIS หลายรายการได้หรือไม่?",
      answer:
        "ได้ ตราบเท่าที่พวกเขาได้รับอนุญาตสำหรับแต่ละโครงการและมีแบนด์วิดท์ในการจัดการเอกสาร การตรวจสอบ และการสื่อสารสำหรับแต่ละการรับรอง",
    },
    {
      question: "บทบาทของหลักประกันประสิทธิภาพคืออะไร?",
      answer:
        "PBG ให้ความมั่นใจกับ BIS ว่าผู้ผลิตจะปฏิบัติตามมาตรฐานอินเดีย สามารถคืนเงินได้เมื่อยกเลิกใบอนุญาตและเป็นข้อบังคับสำหรับใบสมัคร FMCS ทั้งหมดที่ได้รับ BIS อินเดีย",
    },
    {
      question: "การรับรอง BIS ได้รับการยอมรับนอกอินเดียหรือไม่?",
      answer:
        "แม้ว่าใบรับรอง BIS จะเป็นมาตรฐานอินเดีย แต่ก็ได้รับการยอมรับในบริบททางการค้าในหลายภูมิภาคที่ยอมรับการปฏิบัติตามของอินเดีย โดยเฉพาะในเอเชียและแอฟริกา",
    },
    {
      question: "ฉันจะรู้ได้อย่างไรว่าผลิตภัณฑ์ของฉันต้องการการรับรอง BIS?",
      answer:
        "ตรวจสอบรายการที่อัปเดตบนเว็บไซต์ BIS อย่างเป็นทางการหรือปรึกษากับที่ปรึกษา BIS เพื่อยืนยันว่าผลิตภัณฑ์ของคุณอยู่ภายใต้การรับรองที่บังคับหรือไม่",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="คำถามที่พบบ่อย"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          คำถามที่พบบ่อย
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          หาคำตอบที่คุณกำลังมองหาไม่เจอ?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            ติดต่อเรา!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    },
    // {
    //   code: "th",
    //   name: "Thai",
    //   flag: "https://flagcdn.com/w320/th.png",
    //   path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    // },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              บริการของเรา
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                ที่ปรึกษาใบรับรองที่ดีที่สุดในอินเดีย
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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
              การรับรองการลงทะเบียน CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS Logo"
                title="BISCRS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การลงทะเบียน BIS (CRS)
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การจัดการขยะพลาสติก
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองใบรับรอง EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC Logo"
                title="LMPC Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองใบรับรอง LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ใบรับรองการลงทะเบียน BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
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
