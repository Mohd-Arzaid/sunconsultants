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
          ติดต่อเรา
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        จองนัดหมาย
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ต้องการติดต่อทีมของเราและนัดหมายการโทรหรือไม่?
        <span className="text-black"> ลองเลย</span>
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
            placeholder="ชื่อเต็ม *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="ที่อยู่อีเมล *"
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
            placeholder="เบอร์ติดต่อ *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="ชื่อบริษัท *"
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
            placeholder="ชื่อผลิตภัณฑ์ *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="การรับรองที่ต้องการ*"
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
              <span>กำลังส่ง</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>จองนัดหมาย</span>
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
    overview: "ภาพรวม",
    standardization: "การกำหนดมาตรฐาน",
    representation: "การเป็นตัวแทน",
    document: "เอกสาร",
    process: "กระบวนการ",
    costing: "ต้นทุน",
    surveillance: "การตรวจสอบ",
    facilitator: "ผู้ให้ความช่วยเหลือ",
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
            ข้อมูลครบถ้วนเกี่ยวกับการรับรอง BIS India ภายใต้โครงการ FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            BIS India คืออะไร?
          </h2>

          <p className="service-left-content-paragraph">
            สำนักงานมาตรฐานอินเดีย (BIS)
            เป็นองค์กรมาตรฐานแห่งชาติของอินเดียภายใต้กระทรวงกิจการผู้บริโภค
            อาหาร และการจัดจำหน่ายสาธารณะ ก่อตั้งขึ้นภายใต้พระราชบัญญัติ BIS ปี
            1986 และแก้ไขในปี 2016 BIS มีบทบาทสำคัญในการกำหนดมาตรฐาน
            การทำเครื่องหมาย และการรับรองคุณภาพผลิตภัณฑ์
            เป้าหมายคือการรับประกันคุณภาพ ความปลอดภัย
            และความน่าเชื่อถือของผลิตภัณฑ์ที่เสนอให้กับผู้บริโภคชาวอินเดีย
          </p>

          <p className="service-left-content-paragraph">
            BIS ดำเนินงานผ่านโครงการต่างๆ ที่รวมถึงการรับรองผลิตภัณฑ์
            การทำเครื่องหมายสำหรับเครื่องประดับ บริการทดสอบ และโปรแกรมการฝึกอบรม
            อย่างไรก็ตาม
            กรอบงานที่สำคัญที่สุดในระดับสากลอย่างหนึ่งคือโครงการรับรองสำหรับผู้ผลิตต่างประเทศ
            (FMCS)
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
        <span className="service-left-content-index-heading">ภาพรวม</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ใบรับรอง BIS ภายใต้ FMCS คืออะไร?
      </h2>

      <p className="service-left-content-paragraph">
        FMCS ถูกนำมาใช้ในปี 2000
        เป็นกลไกที่ผู้ผลิตต่างประเทศสามารถได้รับใบอนุญาต BIS เพื่อใช้เครื่องหมาย
        ISI บนผลิตภัณฑ์ของตน แสดงถึงการปฏิบัติตามมาตรฐานอินเดีย กระบวนการรับรอง
        FMCS
        อนุญาตให้องค์กรต่างประเทศขายผลิตภัณฑ์ในอินเดียได้อย่างถูกกฎหมายโดยไม่ต้องตั้งหน่วยการผลิตในท้องถิ่น
      </p>

      <p className="service-left-content-paragraph">
        จนถึงปัจจุบัน มีผู้ผลิตต่างประเทศมากกว่า 1,650
        รายที่ดำเนินงานในอินเดียภายใต้ระบบรับรอง BIS ผ่าน FMCS{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        ทำไมการรับรอง BIS จึงมีความสำคัญ?
      </h2>

      <p className="service-left-content-paragraph">
        การได้รับใบรับรอง BIS ไม่เพียงแต่เป็นข้อกำหนดทางกฎหมาย
        แต่ยังเป็นประตูสู่ตลาดผู้บริโภคขนาดใหญ่ของอินเดีย
        นี่คือเหตุผลสำคัญบางประการที่จำเป็น:
      </p>

      <PointsListWithoutHeading
        points={[
          "การปฏิบัติตามกฎหมาย: ผลิตภัณฑ์ต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง",
          "ความน่าเชื่อถือของแบรนด์: เครื่องหมาย ISI ทำหน้าที่เป็นหลักฐานคุณภาพและเพิ่มความมั่นใจของผู้บริโภค",
          "การผ่านศุลกากร: หากไม่มีใบอนุญาต BIS ที่ถูกต้อง ผลิตภัณฑ์อาจถูกปฏิเสธที่ด่านศุลกากร",
          "การเข้าถึงตลาด: ช่วยให้แบรนด์ต่างประเทศได้รับเข้าถึงอย่างราบรื่นและการยอมรับอย่างกว้างขวางในอินเดีย",
          "การลดความเสี่ยง: รับประกันว่าผลิตภัณฑ์มีความปลอดภัย จึงหลีกเลี่ยงการเรียกคืนและการรับผิดชอบที่อาจเกิดขึ้น",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        ขอบเขตผลิตภัณฑ์ที่ครอบคลุมใน BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS ได้จัดทำรายชื่อผลิตภัณฑ์มากกว่า 600 รายการภายใต้การรับรองบังคับ
        และมีรายการมากกว่า 20,000 รายการที่สามารถรับใบรับรอง BIS แบบสมัครใจได้
        สิ่งเหล่านี้ครอบคลุมอุตสาหกรรมที่หลากหลาย:
      </p>

      <PointsListWithoutHeading
        points={[
          "อิเล็กทรอนิกส์และฮาร์ดแวร์ไอที",
          "ชิ้นส่วนยานยนต์",
          "เครื่องใช้ไฟฟ้า",
          "ผลิตภัณฑ์เหล็ก",
          "ปูนซีเมนต์และวัสดุก่อสร้าง ฯลฯ",
        ]}
      />

      <p className="service-left-content-paragraph">
        รายการที่เพิ่มขึ้นบ่งชี้ถึงขอบเขตและความเกี่ยวข้องที่เพิ่มขึ้นของใบรับรอง
        BIS ในการค้าโลก
      </p>

      <h2 className="service-left-content-heading-three">
        วัตถุประสงค์หรือประโยชน์ของการรับรอง BIS สำหรับผู้ผลิตต่างประเทศภายใต้
        FMCS
      </h2>

      <p className="service-left-content-paragraph">
        ระบอบ FMCS และใบรับรอง BIS มีวัตถุประสงค์เพื่อ:
      </p>

      <PointsListWithoutHeading
        points={[
          "การใช้เครื่องหมาย ISI โดยไม่มีใบอนุญาต BIS ที่ถูกต้องเป็นความผิดตามกฎหมาย",
          "ผลิตภัณฑ์ที่รับรองแล้วต้องแสดงทั้งโลโก้ ISI และหมายเลข CM/L (ใบรับรองใบอนุญาตการผลิต)",
          "ผู้ละเมิดอาจต้องเผชิญกับการห้ามผลิตภัณฑ์ ค่าปรับ หรือแม้กระทั่งการดำเนินคดีทางอาญา",
          "สร้างความไว้วางใจระหว่างผู้บริโภคและแบรนด์ที่นำเข้า",
          "อำนวยความสะดวกในการค้าที่เป็นธรรมและสนามแข่งขันที่เท่าเทียม",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        คุณสมบัติสำคัญของใบรับรอง BIS สำหรับผู้ผลิตต่างประเทศ
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                คุณสมบัติ
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                คำอธิบาย
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การบังคับใช้
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                เฉพาะผู้ผลิตต่างประเทศ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การทำเครื่องหมาย
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                เครื่องหมาย ISI + หมายเลข CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ข้อกำหนดการตรวจสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                การตรวจสอบโรงงานบังคับ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การทดสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ดำเนินการในห้องปฏิบัติการอินเดียที่ BIS อนุมัติ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ความถูกต้อง
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ใบอนุญาต BIS ใช้ได้ 1-2 ปี
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การต่ออายุ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                จำเป็นเมื่อหมดอายุหรือมีการอัปเดตผลิตภัณฑ์
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (ตัวแทนอินเดียที่ได้รับอนุญาต)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ต้องได้รับการแต่งตั้งเพื่อสื่อสารกับ BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                หนังสือค้ำประกันธนาคารเพื่อการปฏิบัติงาน
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                จำเป็นจากธนาคารอินเดียที่ RBI อนุมัติ
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
          การกำหนดมาตรฐาน
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS India คืออะไรและทำไมจึงสำคัญ?
      </h2>

      <p className="service-left-content-paragraph">
        BIS India
        เป็นตราประทับคุณภาพและความปลอดภัยที่ออกโดยสำนักงานมาตรฐานอินเดีย (BIS)
        ปัจจุบัน เครื่องหมาย ISI
        ใช้เฉพาะเพื่อระบุผลิตภัณฑ์ที่ปฏิบัติตามมาตรฐานอินเดียภายใต้โครงการรับรอง
        BIS อย่างเป็นทางการ
      </p>

      <p className="service-left-content-paragraph">
        เพื่อให้ผลิตภัณฑ์มีเครื่องหมาย BIS India หรือ ISI
        ต้องผ่านกระบวนการรับรอง BIS ที่เข้มงวด
        ซึ่งรวมถึงการทดสอบในห้องปฏิบัติการ การตรวจสอบโรงงาน การตรวจสอบเอกสาร
        และการตรวจสอบการปฏิบัติตามแนวทาง BIS India
      </p>

      <p className="service-left-content-paragraph">
        สถานะทางกฎหมายของการรับรอง BIS ในอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        ใบอนุญาต BIS ไม่ใช่เพียงเครื่องมือทางการตลาด
        แต่เป็นข้อกำหนดทางกฎหมายสำหรับผลิตภัณฑ์ทั้งหมดที่อยู่ภายใต้โครงการรับรอง
        BIS บังคับ{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        ตามพระราชบัญญัติ BIS ปี 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "การใช้เครื่องหมาย ISI โดยไม่มีใบอนุญาต BIS ที่ถูกต้องเป็นความผิดตามกฎหมาย",
          "ผลิตภัณฑ์ที่รับรองแล้วต้องแสดงทั้งโลโก้ ISI และหมายเลข CM/L (ใบรับรองใบอนุญาตการผลิต)",
          "ผู้ละเมิดอาจต้องเผชิญกับการห้ามผลิตภัณฑ์ ค่าปรับ หรือแม้กระทั่งการดำเนินคดีทางอาญา",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="โลโก้เครื่องหมาย ISI"
        title="โลโก้เครื่องหมาย ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <div className="service-left-content-heading-three">
        โลโก้ ISI โดยทั่วไปประกอบด้วย:
      </div>

      <PointsListWithoutHeading
        points={[
          'ตัวอักษร "ISI" ที่ออกแบบภายในสี่เหลี่ยมมุมมน',
          "หมายเลข CM/L ที่แสดงด้านล่างหรือติดกับเครื่องหมาย",
          "หมายเลขรหัสมาตรฐานอินเดียอ้างอิง (เช่น IS 302 สำหรับเครื่องใช้ไฟฟ้า)",
        ]}
      />

      <div className="service-left-content-heading-three">การวางต้องเป็น:</div>

      <PointsListWithoutHeading
        points={[
          "ถาวรและมองเห็นได้ชัดเจนบนผลิตภัณฑ์",
          "บนบรรจุภัณฑ์หากไม่สามารถทำบนผลิตภัณฑ์ได้",
          "ในคู่มือผู้ใช้สำหรับบางประเภทผลิตภัณฑ์",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        หมวดหมู่ผลิตภัณฑ์ที่ต้องใช้ใบรับรอง BIS
      </h2>

      <p className="service-left-content-paragraph">
        ผลิตภัณฑ์มากกว่า 600 รายการต้องใช้เครื่องหมาย ISI
        ภายใต้โครงการลงทะเบียนบังคับในอินเดีย ตัวอย่างรวมถึง:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                หมวดหมู่ผลิตภัณฑ์
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                รหัส IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                สถานะ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                เครื่องใช้ไฟฟ้า
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                บังคับ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                เหล็กและเหล็กกล้า
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                บังคับ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ภาชนะบรรจุอาหาร
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                บังคับ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                หมวกกันน็อค
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                บังคับ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ปูนซีเมนต์
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                บังคับ
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        แต่ละหมวดหมู่ต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง
        ซึ่งได้รับการทดสอบระหว่างกระบวนการรับรอง BIS
        รายการผลิตภัณฑ์ทั้งหมดสามารถดูได้{" "}
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
          คลิกที่นี่
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS India เทียบกับการรับรองระดับโลกอื่นๆ
      </h2>

      <p className="service-left-content-paragraph">
        เปรียบเทียบเครื่องหมาย ISI กับสัญลักษณ์สากลอื่นๆ:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                เครื่องหมาย
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ประเทศ
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                บังคับหรือไม่?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                จุดเน้น
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                อินเดีย
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ใช่
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ความปลอดภัยและคุณภาพของผลิตภัณฑ์
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                สหภาพยุโรป
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ใช่ (สำหรับหมวดหมู่เฉพาะ)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                สุขภาพ ความปลอดภัย สิ่งแวดล้อม
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                สหรัฐอเมริกา
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ไม่
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                มาตรฐานความปลอดภัย (สมัครใจ)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                จีน
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ใช่
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ความปลอดภัยของผลิตภัณฑ์ไฟฟ้า
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        แตกต่างจาก UL (สมัครใจ) หรือ CE (เฉพาะภูมิภาค) เครื่องหมาย ISI
        ภายใต้โครงการลงทะเบียน BIS เป็นทั้งบังคับและใช้ในท้องถิ่น
      </p>

      <h2 className="service-left-content-heading-three">
        การรับรอง BIS หรือใบอนุญาต BIS
        เป็นข้อบังคับสำหรับการนำเข้าอินเดียหรือไม่?
      </h2>

      <p className="service-left-content-paragraph">
        ลักษณะบังคับของใบรับรอง BIS
      </p>

      <p className="service-left-content-paragraph">
        รัฐบาลอินเดียได้กำหนดให้ผลิตภัณฑ์บางประเภทต้องได้รับการรับรองจากสำนักงานมาตรฐานอินเดีย
        (BIS) ก่อนที่จะสามารถนำเข้า ขาย หรือจำหน่ายในตลาดอินเดียได้
        ข้อผูกพันนี้เกิดจาก:
      </p>

      <PointsListWithoutHeading
        points={[
          "วัตถุประสงค์ในการคุ้มครองผู้บริโภค",
          "การประสานกับมาตรฐานอินเดีย",
          "กฎระเบียบความปลอดภัยระดับชาติ",
        ]}
      />

      <p className="service-left-content-paragraph">
        หากผลิตภัณฑ์อยู่ภายใต้ข้อกำหนดบังคับของ BIS India ต้องมีใบรับรอง BIS
        และแสดงเครื่องหมาย ISI ก่อนที่จะผ่านด่านศุลกากรอินเดีย
      </p>

      <h2 className="service-left-content-heading-three">
        ต้องใช้การรับรอง BIS เฉพาะการนำเข้าหรือไม่?
      </h2>

      <p className="service-left-content-paragraph">
        ไม่ การรับรอง BIS เป็นข้อบังคับสำหรับ:
      </p>

      <PointsListWithoutHeading
        points={[
          "ผู้ผลิตในประเทศที่ผลิตผลิตภัณฑ์ที่ถูกควบคุม",
          "ผู้ผลิตต่างประเทศที่ส่งออกผลิตภัณฑ์ที่ถูกควบคุมไปยังอินเดีย",
        ]}
      />

      <p className="service-left-content-paragraph">
        ไม่ว่าคุณจะอยู่ในอินเดียหรือต่างประเทศ
        หากผลิตภัณฑ์ของคุณอยู่ในรายการบังคับ คุณต้องมีใบอนุญาต BIS
        และแสดงเครื่องหมาย ISI
      </p>

      <p className="service-left-content-paragraph">
        ด่านศุลกากรอินเดียใช้ระบบข้อมูลขั้นสูงเพื่อทำเครื่องหมายการจัดส่งที่ไม่ปฏิบัติตามโดยอัตโนมัติ
        สินค้าทั้งหมดภายใต้หมวดหมู่ที่ถูกควบคุมจะถูกสแกนเพื่อตรวจสอบการมีอยู่ของใบรับรอง
        BIS ที่ถูกต้อง
      </p>

      <p className="service-left-content-paragraph">
        ข้อยกเว้นของการรับรอง BIS
      </p>

      <p className="service-left-content-paragraph">
        การรับรอง BIS เป็นข้อบังคับในกรณีส่วนใหญ่
        แต่สามารถให้ข้อยกเว้นภายใต้สถานการณ์เฉพาะ:
      </p>

      <PointsListWithoutHeading
        points={[
          "สำหรับต้นแบบ R&D หรือตัวอย่างทดสอบ",
          "สำหรับการนำเข้าส่วนตัวจำนวนจำกัด",
        ]}
      />

      <p className="service-left-content-paragraph">
        อย่างไรก็ตาม สิ่งเหล่านี้หายากและต้องมีจดหมายยกเว้นอย่างเป็นทางการจาก
        BIS หรือกระทรวงที่เกี่ยวข้อง
      </p>

      <h2 className="service-left-content-heading-three">
        จะทราบได้อย่างไรว่าผลิตภัณฑ์ของคุณต้องใช้ใบรับรอง BIS หรือใบอนุญาต BIS?
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
          คลิกที่นี่
        </span>
        คลิกที่นี่เพื่อตรวจสอบว่าผลิตภัณฑ์ของคุณครอบคลุมภายใต้โครงการรับรอง BIS
        India บังคับหรือไม่
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
          การเป็นตัวแทน
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        บทบาทของตัวแทนอินเดียที่ได้รับอนุญาต (AIR) ในการรับรอง BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        ตัวแทนอินเดียที่ได้รับอนุญาต (AIR) คืออะไร?
      </h3>

      <p className="service-left-content-paragraph">
        ตัวแทนอินเดียที่ได้รับอนุญาต (AIR)
        เป็นตัวกลางที่สำคัญซึ่งได้รับการแต่งตั้งโดยผู้ผลิตต่างประเทศที่แสวงหาการรับรอง
        BIS ภายใต้โครงการลงทะเบียน FMCS AIR
        ทำหน้าที่เป็นตัวเชื่อมอย่างเป็นทางการระหว่างสำนักงานมาตรฐานอินเดีย (BIS)
        กับผู้ผลิต เพื่อให้มั่นใจว่ามีการสื่อสารที่ราบรื่น การจัดการเอกสาร
        และการประสานงานกระบวนการรับรอง
      </p>

      <h3 className="service-left-content-heading-three">
        ข้อกำหนดทางกฎหมายสำหรับการแต่งตั้ง AIR
      </h3>

      <p className="service-left-content-paragraph">
        ตามแนวทาง BIS ผู้ผลิตต่างประเทศใดๆ
        ที่ไม่มีสำนักงานจดทะเบียนในอินเดียต้องแต่งตั้ง AIR
        ข้อกำหนดนี้ทำให้มั่นใจว่า BIS
        มีจุดติดต่อที่เชื่อถือได้และเข้าถึงได้ภายในเขตอำนาจของอินเดีย
      </p>

      <h3 className="service-left-content-heading-three">
        ความรับผิดชอบหลักของ AIR
      </h3>

      <p className="service-left-content-paragraph">
        บทบาทของ AIR ครอบคลุมกระบวนการรับรอง BIS ทั้งหมด
        ตั้งแต่การจัดทำเอกสารและการยื่นคำขอ
        ไปจนถึงการประสานงานการตรวจสอบและการปฏิบัติตามหลังการรับรอง:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ความรับผิดชอบ
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                คำอธิบาย
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การสื่อสาร
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ทำหน้าที่เป็นจุดติดต่อกับเจ้าหน้าที่และแผนกของ BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การสนับสนุนคำขอ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ช่วยกรอกแบบฟอร์ม รวบรวมเอกสาร และยื่นคำขอ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การประสานงานการตรวจสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ประสานตารางการตรวจสอบโรงงานและตอบคำถามของผู้ตรวจสอบ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การตรวจสอบการปฏิบัติตาม
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ให้มั่นใจว่ากิจกรรมการทดสอบและการรับรองทั้งหมดปฏิบัติตามมาตรฐาน
                BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การจัดการการต่ออายุ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ดูแลการต่ออายุใบอนุญาต BIS การอัปเดตเอกสารและการชำระค่าธรรมเนียม
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        เกณฑ์คุณสมบัติในการเป็น AIR
      </h3>

      <p className="service-left-content-paragraph">
        เพื่อทำหน้าที่เป็น AIR บุคคลหรือองค์กรต้อง:
      </p>

      <PointsListWithoutHeading
        points={[
          "เป็นพลเมืองอินเดียหรือนิติบุคคลที่จดทะเบียนอย่างถูกกฎหมายในอินเดีย",
          "มีที่อยู่ทางกายภาพในอินเดียพร้อมรหัสไปรษณีย์ที่ถูกต้อง",
          "สามารถสื่อสารได้อย่างคล่องแคล่วทั้งภาษาอังกฤษและภาษาท้องถิ่น",
          "เข้าใจโครงการรับรอง โปรโตคอลเอกสาร BIS และความคาดหวังด้านกฎระเบียบ",
          "สามารถตอบสนองการตรวจสอบและการติดต่อได้ทันเวลานามผู้ผลิตต่างประเทศ",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        ทำไมบทบาทของ AIR จึงสำคัญ
      </h3>

      <p className="service-left-content-paragraph">
        AIR ให้ความต่อเนื่องและความรับผิดชอบตลอดกระบวนการรับรอง BIS หากไม่มี
        AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS ไม่มีเขตอำนาจในการดำเนินการกับผู้ผลิตต่างประเทศที่ไม่ปฏิบัติตาม",
          "การสอบถามเร่งด่วนและตารางการตรวจสอบอาจล่าช้า",
          "กระบวนการรับรองอาจหยุดชะงัก ถูกเพิกถอน หรือถูกปฏิเสธ",
        ]}
      />

      <p className="service-left-content-paragraph">
        AIR ที่กระตือรือร้นและมีประสบการณ์เพิ่มโอกาสในการรับรอง BIS
        ที่ประสบความสำเร็จอย่างมาก
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">เอกสาร</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        เอกสารที่จำเป็นสำหรับการรับรอง BIS ภายใต้ FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ประเภทเอกสาร
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                วัตถุประสงค์
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                แบบฟอร์มคำขอ FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                คำขอรับรองอย่างเป็นทางการ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                รายการอุปกรณ์การผลิต
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                แสดงความสามารถในการผลิต
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                รายการวัตถุดิบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                รับประกันคุณภาพของวัสดุที่นำเข้า
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                รายการอุปกรณ์ทดสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ประเมินความพร้อมสำหรับการทดสอบและการปฏิบัติตาม
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ใบรับรองการสอบเทียบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                พิสูจน์ความแม่นยำของอุปกรณ์ทดสอบ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                การออกแบบโรงงานและแผนภาพกระบวนการ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ช่วยให้ผู้ตรวจสอบเข้าใจขั้นตอนการผลิต
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ใบรับรองการทดสอบ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                พิสูจน์คุณภาพของวัตถุดิบและผลิตภัณฑ์สุดท้าย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                โปรไฟล์การควบคุมคุณภาพ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ตรวจสอบคุณสมบัติของบุคลากรและ SOP
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                หลักฐานการชำระเงิน
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ตรวจสอบการส่งค่าธรรมเนียมไปยัง BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                หนังสือค้ำประกันธนาคารเพื่อการปฏิบัติงาน
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ทำหน้าที่เป็นหลักประกันทางการเงินสำหรับ BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        รายละเอียดของเอกสารแต่ละฉบับที่จำเป็นสำหรับการรับรอง BIS India
      </h3>

      <div className="service-left-content-heading-three">
        1. แบบฟอร์มคำขอ FMCS
      </div>

      <p className="service-left-content-paragraph">
        เอกสารนี้ให้รายละเอียดทั่วไปเกี่ยวกับผู้ผลิตต่างประเทศ รวมถึง:
      </p>

      <PointsListWithoutHeading
        points={[
          "รายละเอียดผลิตภัณฑ์ (ประเภท หมวดหมู่ รุ่น)",
          "มาตรฐานอินเดียที่ตั้งใจไว้",
          "รายละเอียดการติดต่อของโรงงานและ AIR",
          "ความสามารถในการผลิตและขอบเขตการทดสอบ",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. รายการอุปกรณ์การผลิต
      </div>

      <PointsListWithoutHeading
        points={[
          "ชื่อและยี่ห้อของเครื่องจักร",
          "ความสามารถในการผลิต",
          "รายละเอียดการติดต่อของโรงงานและ AIR",
          "บันทึกการบำรุงรักษา (ถ้ามี)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. รายการวัตถุดิบ
      </div>

      <PointsListWithoutHeading
        points={[
          "แหล่งที่มาของการจัดหา",
          "เกรดและข้อกำหนด",
          "โปรโตคอลการทดสอบ (ถ้ามี)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. รายการอุปกรณ์ทดสอบ
      </div>

      <PointsListWithoutHeading
        points={[
          "ชื่ออุปกรณ์และผู้ผลิต",
          "การปฏิบัติตามพารามิเตอร์การทดสอบในมาตรฐานอินเดีย",
          "ตำแหน่งภายในโรงงาน",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. ใบรับรองการสอบเทียบ
      </div>

      <PointsListWithoutHeading
        points={[
          "วันที่สอบเทียบล่าสุด",
          "ระยะเวลาที่ใช้ได้",
          "หมายเลขใบรับรอง",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. การออกแบบโรงงานและแผนภาพกระบวนการ
      </div>

      <PointsListWithoutHeading
        points={[
          "จุดเข้าและออก",
          "พื้นที่ห้องปฏิบัติการทดสอบ",
          "จุดควบคุมคุณภาพ",
          "ส่วนจัดเก็บและบรรจุภัณฑ์",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. หนังสือค้ำประกันธนาคารเพื่อการปฏิบัติงาน
      </div>

      <p className="service-left-content-paragraph">
        ออกโดยธนาคารอินเดียที่ RBI อนุมัติ
        หนังสือค้ำประกันธนาคารเพื่อการปฏิบัติงาน (PBG)
        ครอบคลุมความรับผิดชอบในกรณีที่ไม่ปฏิบัติตาม เอกสารนี้ต้อง:
      </p>

      <PointsListWithoutHeading
        points={[
          "อยู่บนกระดาษหัวจดหมายอย่างเป็นทางการของธนาคาร",
          "ระบุระยะเวลาค้ำประกันและจำนวนเงิน",
          "มีการลงนามและประทับตรา",
        ]}
      />

      <div className="service-left-content-heading-three">
        ข้อผิดพลาดทั่วไปของเอกสารที่ควรหลีกเลี่ยงเมื่อยื่นขอใบรับรอง BIS หรือ
        BIS India
      </div>

      <PointsListWithoutHeading
        points={[
          "ข้อมูลในแบบฟอร์มไม่ตรงกับความเป็นจริงของโรงงาน",
          "ส่งรายงานการสอบเทียบที่หมดอายุ",
          "ขาดหลักฐานค่าธรรมเนียม BIS",
          "กระบวนการที่ไม่สมบูรณ์หรือคลุมเครือ",
          "ความไม่สอดคล้องของชื่อระหว่างเอกสาร",
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
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
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
