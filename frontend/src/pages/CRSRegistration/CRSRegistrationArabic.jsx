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
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
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
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationArabic = () => {
  return (
    <div className="relative" dir="rtl">
      {/* CRS Registration Meta Tags */}
      <CRSRegistrationMetaTagsArabic />
      {/* CRS Registration Breadcrumb */}
      <CRSRegistrationBreadcrumbArabic />
      {/* CRS Registration Hero Section */}
      <CRSRegistrationHeroArabic />
      {/* CRS Registration Index Section */}
      <CRSRegistrationIndexArabic />
      {/* CRS Registration Main Content Section */}
      <CRSRegistrationMainContentArabic />
      {/* Footer Section */}
      <FooterArabic />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationArabic;

const CRSRegistrationMetaTagsArabic = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "تسجيل BIS CRS",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>تسجيل BIS - مخطط التسجيل الإلزامي (CRS)</title>
      <meta
        name="description"
        content="تسجيل BIS هو الحصول على ترخيص من BIS للمنتجات الإلكترونية وتقنية المعلومات التي تتوافق مع المعايير الهندية المعمول بها بموجب مخطط CRS."
      />
      <meta
        name="keywords"
        content="شهادة BIS، عملية تسجيل BIS، تسجيل BIS، عملية تسجيل BIS عبر الإنترنت، شهادة BIS للمنتجات الإلكترونية، عملية تسجيل BIS في الهند، تسجيل BIS للمنتجات الإلكترونية، مخطط التسجيل الإلزامي"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="تسجيل BIS - مخطط التسجيل الإلزامي (CRS)"
      />
      <meta
        property="og:description"
        content="تسجيل BIS هو الحصول على ترخيص من BIS للمنتجات الإلكترونية وتقنية المعلومات التي تتوافق مع المعايير الهندية المعمول بها بموجب مخطط CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="تسجيل BIS - مخطط التسجيل الإلزامي (CRS)"
      />
      <meta
        name="twitter:description"
        content="تسجيل BIS هو الحصول على ترخيص من BIS للمنتجات الإلكترونية وتقنية المعلومات التي تتوافق مع المعايير الهندية المعمول بها بموجب مخطط CRS."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const CRSRegistrationBreadcrumbArabic = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">الرئيسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>تسجيل BIS CRS</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationHeroArabic = () => {
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
        {/* Right Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] ml-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              خبرة معتمدة
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              تسجيل BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            إلزامي للمنتجات الإلكترونية لضمان السلامة والجودة. احصل على موافقة
            BIS بمساعدة خبير!
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
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 ml-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                عرض الخدمات
              </span>
            </div>
          </div>
        </div>

        {/* Left Side */}
        <CRSRegistrationHeroContactFormArabic />
      </div>
    </main>
  );
};

const CRSRegistrationHeroContactFormArabic = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/ar/ma-huwa-crs-bis-aw-tasjeel-crs"))
      return "تسجيل CRS (العربية)";
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
        title: "يرجى إدخال اسم كامل صحيح.",
        description: "يجب أن يحتوي الاسم على أحرف ومسافات فقط.",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
        description: "تحقق من صحة تنسيق بريدك الإلكتروني",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال رقم هاتف صحيح",
        description: "يجب أن يحتوي رقم الهاتف على (8-15 رقم)",
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
        title: "تم إرسال نموذج الاتصال بنجاح!",
        description: "شكراً لتواصلك معنا. سيتواصل معك فريقنا قريباً.",
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
        error.response?.data?.message || "فشل في إرسال تفاصيل نموذج الاتصال!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description: "حدث خطأ ما. يرجى التحقق من تفاصيلك والمحاولة مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          اتصل بنا
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        احجز موعد
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        هل تريد الاتصال بفريقنا وزيادة مكالمة؟
        <span className="text-black"> جرب الآن</span>
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
            placeholder="الاسم الكامل *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="عنوان البريد الإلكتروني *"
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
            placeholder="رقم الاتصال *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="اسم الشركة *"
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
            placeholder="اسم المنتج *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="الشهادة المطلوبة*"
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
              <span>جاري الإرسال</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>احجز موعد</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const CRSRegistrationIndexArabic = () => {
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
    overview: "نظرة عامة",
    eligibility: "الأهلية",
    documents: "المستندات",
    registration: "التسجيل",
    fees: "رسوم التسجيل",
    elabelling: "التوسيم الإلكتروني",
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

const CRSRegistrationMainContentArabic = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Right Side */}
          <CRSRegistrationMainContentRightArabic />
          {/* Left Side */}
          <ServiceContentRight />
        </div>
      </div>
      <CRSRegistrationServiceFaqArabic />
      <CISProductTableArabic />
      <LanguageSelector />
      <div id="services">
        <ServicesArabic />
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
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-crs-bis-o-registrazione-crs",
    },
    // {
    //   code: "ar",
    //   name: "Arabic",
    //   flag: "https://flagcdn.com/w320/sa.png",
    //   path: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    // },
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

export const ServicesArabic = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              خدماتنا
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                أفضل مستشار الشهادات في الهند
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
              علامة BIS (ترخيص ISI) للمصنعين الأجانب
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
              شهادة تسجيل CDSCO
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
              تسجيل BIS (CRS)
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
              إدارة النفايات البلاستيكية
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
              شهادات شهادة EPR
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
              شهادات شهادة LMPC
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
              شهادة تسجيل BIS
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
              علامة ISI (BIS) للمصنعين الهنود
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationServiceFaqArabic = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. ما هو تسجيل BIS؟",
      answer:
        "تعد شهادة BIS عملية امتثال تحكمها هيئة المعايير الهندية، والتي تتحقق من أن المنتج يفي بالمعايير الهندية (IS) المعمول بها للجودة والسلامة والموثوقية.",
    },
    {
      id: "item-2",
      question: "2. ما هو تسجيل CRS تحت BIS؟",
      answer:
        "CRS تعني Compulsory Registration Scheme (مخطط التسجيل الإلزامي). وهي عملية تسجيل إلزامية لفئات معينة من المنتجات مثل الإلكترونيات والأجهزة الكهربائية والبطاريات والمنتجات الشمسية. يجب اختبار المنتجات تحت CRS وتسجيلها مع BIS قبل أن يمكن بيعها في الهند.",
    },
    {
      id: "item-3",
      question: "3. هل شهادة BIS إلزامية في الهند؟",
      answer:
        "نعم. لجميع المنتجات المدرجة في قائمة منتجات CRS (حالياً 80+ عنصر)، تسجيل BIS إلزامي للتصنيع أو الاستيراد أو البيع في الهند.",
    },
    {
      id: "item-4",
      question: "4. ما هو الفرق بين BIS CRS وعلامة ISI؟",
      answer:
        "BIS CRS: للإلكترونيات وبضائع تكنولوجيا المعلومات، فقط للمنتجات الإلزامية المبلغ عنها بموجب QCO. <br />علامة ISI: تُستخدم لمجموعة أوسع من المنتجات، قد تكون طوعية أو إلزامية اعتماداً على فئة المنتج.",
    },
    {
      id: "item-5",
      question: "5. من يمكنه التقدم للحصول على تسجيل BIS CRS؟",
      answer:
        "الشركات المصنعة فقط يمكنها التقديم. يتضمن ذلك المصنعين الهنود والأجانب. يجب على العلامات التجارية الأجنبية تعيين ممثل هندي مخول (AIR).",
    },
    {
      id: "item-6",
      question: "6. ما هو دور AIR؟",
      answer:
        "الممثل الهندي المخول (AIR) مسؤول قانونياً عن تقديم طلب BIS نيابة عن مصنع أجنبي. يعمل كالمكتب الرسمي للاتصال بين BIS والمتقدم الأجنبي.",
    },
    {
      id: "item-7",
      question: "7. كم من الوقت يستغرق تسجيل BIS CRS؟",
      answer:
        "تستغرق العملية عادة 3-4 أسابيع، بافتراض تقديم جميع المستندات وتقارير الاختبار بشكل صحيح ولا يتم رفع أي اعتراضات من قبل BIS.",
    },
    {
      id: "item-8",
      question: "8. كم تكلفة شهادة BIS CRS؟",
      answer:
        "التكاليف تشمل: <br />رسوم الاختبار: ₹10,000-₹20,000 + GST <br />الرسوم الحكومية: ₹53,000 + GST لكل تقرير اختبار <br />رسوم إضافية: الإفادة، البريد السريع، وثائق AIR، إلخ. <br />خصم متاح للمصنعين الهنود المسجلين في MSME",
    },
    {
      id: "item-9",
      question: "9. ما هي صلاحية شهادات BIS CRS؟",
      answer:
        "ترخيص BIS الأولي ساري لمدة سنتين. يمكن تجديده لمدة تصل إلى 5 سنوات إذا ظلت تفاصيل المنتج والتصنيع دون تغيير.",
    },
    {
      id: "item-10",
      question: "10. هل يمكن الحصول على شهادة BIS بشكل طوعي؟",
      answer:
        "لا. تحت CRS، لا يمكنك التقديم بشكل طوعي للمنتجات التي لم يتم إدراجها تحت QCOs. الشهادة الطوعية تنطبق فقط على المنتجات غير CRS عبر مخطط ISI.",
    },
    {
      id: "item-11",
      question: "11. أين يمكنني العثور على قائمة منتجات BIS CRS؟",
      answer:
        'يمكنك زيارة موقع BIS الرسمي <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> والتنقل إلى قسم "المنتجات تحت CRS" لعرض القائمة الكاملة للمنتجات المغطاة.',
    },
    {
      id: "item-12",
      question: "12. هل يمكن عرض علامة BIS إلكترونياً؟",
      answer:
        "نعم، من خلال التوسيم الإلكتروني، ولكن يجب أن يلبي قواعد BIS الصارمة: يجب تضمين معلومات التسمية في البرامج الثابتة <br />وصول سهل خلال 4 خطوات في قائمة الجهاز <br />يجب أن تحمل التعبئة الفيزيائية معلومات تنظيمية",
    },
    {
      id: "item-13",
      question: "13. ماذا يحدث إذا لم أحصل على تسجيل BIS لمنتج إلزامي؟",
      answer:
        "عقوبات شديدة، بما في ذلك: <br />مصادرة المنتج <br />رفض الجمارك <br />غرامات قانونية <br />إلغاء الإدراج من بوابات التجارة الإلكترونية <br />حظر دائم من السوق الهندي",
    },
    {
      id: "item-14",
      question:
        "14. هل يمكن أن تغطي شهادة BIS واحدة عدة نماذج أو علامات تجارية؟",
      answer:
        "لا. يجب أن يتم تصنيف كل علامة تجارية وموقع المصنع بشكل منفصل. يمكن إضافة نماذج متعددة باستخدام تقارير إضافية، ولكن فقط تحت نفس الطلب والعلامة التجارية.",
    },
    {
      id: "item-15",
      question: "15. كيف يمكن أن تساعد Sun Certifications India؟",
      answer:
        "نقدم: <br />دعم المستندات الكامل <br />تنسيق المختبر <br />معالجة طلب بوابة BIS <br />حل الاستفسارات ومتابعات BIS <br />إرشاد التجديد والتوسيم <br />ضمان الامتثال للعلامات التجارية الأجنبية عبر خدمات AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          لا يمكنك العثور على الإجابة التي تبحث عنها؟{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            اتصل بنا!
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
                  عرض عدد أقل من الأسئلة
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
                  عرض المزيد من الأسئلة
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
    product: "المكبرات بقوة إدخال 2000W وأعلى",
    isNumber: "IS 616:2017",
    date: "03 يوليو 2013",
  },
  {
    id: 2,
    product: "آلة معالجة البيانات التلقائية",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 3,
    product: "الساعات الإلكترونية مع التيار الرئيسي",
    isNumber: "IS 302-2-26:2014",
    date: "03 يوليو 2013",
  },
  {
    id: 4,
    product: "الألعاب الإلكترونية (الفيديو)",
    isNumber: "IS 616:2017",
    date: "03 يوليو 2013",
  },
  {
    id: 5,
    product: "الأنظمة الموسيقية الإلكترونية بقوة إدخال 200W وأعلى",
    isNumber: "IS 616:2017",
    date: "03 يوليو 2013",
  },
  {
    id: 6,
    product: "الحاسوب المحمول/الكمبيوتر الشخصي/التابلت",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 7,
    product: "أفران الميكروويف",
    isNumber: "IS 302-2-25:2014",
    date: "03 يوليو 2013",
  },
  {
    id: 8,
    product: "مشغلات الأقراص الضوئية مع مضخمات مدمجة بقوة إدخال 200W وأعلى",
    isNumber: "IS 616:2017",
    date: "03 يوليو 2013",
  },
  {
    id: 9,
    product: 'تلفزيونات البلازما/LCD/LED بحجم شاشة 32" وأعلى',
    isNumber: "IS 616:2017",
    date: "03 يوليو 2013",
  },
  {
    id: 10,
    product: "الطابعات، آلات الرسم",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 11,
    product: "الماسحات الضوئية",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 12,
    product: "صندوق الاستقبال (Set Top Box)",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 13,
    product: "آلات الرد على الهاتف",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 14,
    product: 'وحدات العرض المرئي، شاشات الفيديو بحجم شاشة 32" وأعلى',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 15,
    product: "لوحات المفاتيح اللاسلكية",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 يوليو 2013",
  },
  {
    id: 16,
    product: "آلات الصراف",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 17,
    product: "آلات النسخ/المكررات",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 18,
    product: "قارئ جوازات السفر",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 19,
    product: "محطات نقاط البيع",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 20,
    product: "آلات معالجة البريد/آلات الطوابع/آلات الختم",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 21,
    product: "بنوك الطاقة للاستخدام في التطبيقات المحمولة",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 22,
    product: "قارئ البطاقة الذكية",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 مايو 2015",
  },
  {
    id: 23,
    product: "الهواتف المحمولة",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 سبتمبر 2015",
  },
  {
    id: 24,
    product: "مصابيح LED ذاتية التثبيت للخدمات الإضاءة العامة",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 سبتمبر 2015",
  },
  {
    id: 25,
    product: "معدات تحكم إلكترونية مزودة بـ DC أو AC لمواد LED",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 ديسمبر 2015",
  },
  {
    id: 26,
    product:
      "محولات الطاقة للأجهزة الصوتية والفيديو والأجهزة الإلكترونية المشابهة",
    isNumber: "IS 616:2010",
    date: "01 ديسمبر 2015",
  },
  {
    id: 27,
    product: "محولات الطاقة لمعدات تقنية المعلومات",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 ديسمبر 2015",
  },
  {
    id: 28,
    product: "مصابيح LED ثابتة للأغراض العامة",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 مارس 2016",
  },
  {
    id: 29,
    product: "UPS/العواكس بقوة <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 مارس 2016",
  },
  {
    id: 30,
    product:
      "الخلايا الثانوية المغلقة/البطاريات المحتوية على إلكتروليت قلوي أو غير حامضي آخر للاستخدام في التطبيقات المحمولة الجزء 1 أنظمة النيكل",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 يونيو 2016",
  },
  {
    id: 31,
    product:
      "الخلايا الثانوية المغلقة/البطاريات المحتوية على إلكتروليت قلوي أو غير حامضي آخر للاستخدام في التطبيقات المحمولة الجزء 2 أنظمة الليثيوم",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 يونيو 2016",
  },
  {
    id: 32,
    product: "دعم اللغة الهندية للهواتف المحمولة",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 مايو 2018",
  },
  {
    id: 33,
    product: "مصابيح LED المدمجة",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 مايو 2018",
  },
  {
    id: 34,
    product: "مصابيح LED لإضاءة الطرق والشوارع",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 مايو 2018",
  },
  {
    id: 35,
    product: "أضواء الفيض LED",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 مايو 2018",
  },
  {
    id: 36,
    product: "مصابيح LED اليدوية",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 مايو 2018",
  },
  {
    id: 37,
    product: "سلاسل إضاءة LED",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 مايو 2018",
  },
  {
    id: 38,
    product: "مصابيح LED لإضاءة الطوارئ",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 مايو 2018",
  },
  {
    id: 39,
    product: "UPS/العواكس بقوة <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 مايو 2018",
  },
  {
    id: 40,
    product: "تلفزيونات البلازما/LCD/LED بحجم شاشة حتى 32",
    isNumber: "IS 616 : 2017",
    date: "23 مايو 2018",
  },
  {
    id: 41,
    product: "وحدات العرض المرئي، شاشات الفيديو بحجم شاشة حتى 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 مايو 2018",
  },
  {
    id: 42,
    product: "كاميرات CCTV/مسجلات CCTV",
    isNumber:
      "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
    date: "23 مايو 2018",
  },
  {
    id: 43,
    product: "المحولات للأجهزة الكهربائية المنزلية والمشابهة",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 مايو 2018",
  },
  {
    id: 44,
    product:
      "قارئات الباركود التي تعمل بـ USB، ماسحات الباركود، ماسحات القزحية، ماسحات البصمة الضوئية",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 مايو 2018",
  },
  {
    id: 45,
    product: "الساعات الذكية",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 مايو 2018",
  },
  {
    id: 46,
    product:
      "وحدات الطاقة الكهروضوئية البرية السيليكون البلورية (PV) (قائمة على رقاقة Si)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 مارس 2019",
  },
  {
    id: 47,
    product:
      "وحدات الطاقة الكهروضوئية البرية ذات الأغشية الرقيقة (PV) (a-Si، CiGs و CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 مارس 2019",
  },
  {
    id: 48,
    product: "محولات الطاقة للاستخدام في نظام الطاقة الكهروضوئية",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 يونيو 2021",
  },
  {
    id: 49,
    product: "العواكس الكهروضوئية المتصلة بالشبكة",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 يونيو 2021",
  },
  {
    id: 50,
    product: "بطارية التخزين",
    isNumber: "IS 16270 : 2014",
    date: "01 يناير 2019",
  },
  {
    id: 51,
    product: "وحدات LED المستقلة للإضاءة العامة",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 أبريل 2021",
  },
  {
    id: 52,
    product: "سلسلة الإضاءة (أضواء الحبل)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 أبريل 2021",
  },
  {
    id: 53,
    product: "لوحة المفاتيح",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أبريل 2021",
  },
  {
    id: 54,
    product: "موقد الحث",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 أبريل 2021",
  },
  {
    id: 55,
    product: "آلات صراف الصراف الآلي",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أبريل 2021",
  },
  {
    id: 56,
    product: "قرص صلب خارجي من نوع USB",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أبريل 2021",
  },
  {
    id: 57,
    product: "سماعة الرأس والسماعة اللاسلكية",
    isNumber: "IS 616 : 2017",
    date: "01 أبريل 2021",
  },
  {
    id: 58,
    product: "أجهزة التخزين الصلبة الخارجية من نوع USB (سعة أعلى من 256 GB)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أبريل 2021",
  },
  {
    id: 59,
    product: "النظام الموسيقي الإلكتروني بقوة إدخال أقل من 200 واط",
    isNumber: "IS 616 : 2017",
    date: "01 أبريل 2021",
  },
  {
    id: 60,
    product:
      "مزودات الطاقة المستقلة من نوع Switch Mode (SMPS) بجهد خرج 48 فولت (الحد الأقصى)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أبريل 2021",
  },
  {
    id: 61,
    product: "التلفزيونات بخلاف تلفزيونات البلازما/LCD/LED",
    isNumber: "IS 616 : 2017",
    date: "01 أبريل 2021",
  },
  {
    id: 62,
    product: "طباخ الأرز",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 أبريل 2021",
  },
  {
    id: 63,
    product: "الميكروفون اللاسلكي",
    isNumber: "IS 616 : 2017",
    date: "01 أكتوبر 2021",
  },
  {
    id: 64,
    product: "الكاميرا الرقمية",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 أكتوبر 2021",
  },
  {
    id: 65,
    product: "كاميرا الفيديو",
    isNumber: "IS 616 : 2017",
    date: "01 أكتوبر 2021",
  },
  {
    id: 66,
    product: "كاميرا الويب (المنتج النهائي)",
    isNumber: "IS 616 : 2017",
    date: "01 أكتوبر 2021",
  },
  {
    id: 67,
    product: "مكبرات الصوت الذكية (مع الشاشة وبدونها)",
    isNumber: "IS 616 : 2017",
    date: "01 أكتوبر 2021",
  },
  {
    id: 68,
    product: "خافتات مصابيح LED",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 أكتوبر 2021",
  },
  {
    id: 69,
    product: "مكبرات الصوت البلوتوث",
    isNumber: "IS 616 : 2017",
    date: "01 أكتوبر 2021",
  },
  {
    id: 70,
    product: "حمض الفوسفوريك أورثو",
    isNumber: "IS 798 : 2020",
    date: "12 ديسمبر 2021",
  },
  {
    id: 71,
    product: "حمض البولي فوسفوريك",
    isNumber: "IS 17439:2020",
    date: "24 ديسمبر 2021",
  },
  {
    id: 72,
    product: "بالات القطن",
    isNumber: "IS 12171:2019",
    date: "03 مارس 2023",
  },
  {
    id: 73,
    product: "الفوسفيت ثلاثي الميثيل الصف التقني",
    isNumber: "IS 17412:2020",
    date: "03 مارس 2023",
  },
  {
    id: 74,
    product: "أجهزة التلفزيون",
    isNumber: "IS 18112:2022",
    date: "26 أبريل 2023",
  },
];

export const CISProductTableArabic = () => {
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
          القائمة الرسمية للمنتجات تحت تسجيل BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-loose mb-8">
          يدرج الجدول التالي المنتجات التي تتطلب تسجيل BIS CRS في الهند جنباً
          إلى جنب مع أرقام المعايير الهندية (IS) المعمول بها ومواعيد التنفيذ.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ابحث عن المنتجات بالاسم أو رقم IS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pr-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
            dir="rtl"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-l border-gray-300">
                  الرقم
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-l border-gray-300">
                  المنتج
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-l border-gray-300">
                  رقم IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  تاريخ التنفيذ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-l border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-l border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-l border-gray-200">
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
                السابق
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                صفحة {currentPage} من {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                التالي
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ... continuing with more components (MainContentLeft, etc.)
// I'll create the remaining components in a follow-up due to length constraints

const CRSRegistrationMainContentRightArabic = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">ما هو تسجيل BIS؟</h2>

          <p className="service-left-content-paragraph">
            هيئة المعايير الهندية (BIS) هي هيئة التوحيد القياسي الوطنية في الهند
            وتعمل تحت وزارة شؤون المستهلك والأغذية والتوزيع العام حكومة الهند.
            BIS مسؤولة عن الحفاظ على معايير الجودة والسلامة والأداء لمختلف
            المنتجات والخدمات في الهند وفقاً للمعايير الهندية (IS) ذات الصلة.
          </p>

          <p className="service-left-content-paragraph">
            BIS مسؤولة عن الإشراف على وتنفيذ مخططات مختلفة في الهند. مخطط
            التسجيل الإلزامي (CRS) هو مخطط شهادة بارز وإلزامي من BIS يغطي فئات
            مختلفة من المنتجات الإلكترونية وتقنية المعلومات.
          </p>

          <p className="service-left-content-paragraph">
            أداء وسلامة المنتجات الهندية مسألة مهمة للهند. تضمن شهادة BIS CRS أن
            المنتجات الإلكترونية وتقنية المعلومات متوافقة مع المعايير الهندية،
            وتساعد في حماية المستهلكين من المنتجات غير المتوافقة وذات النوعية
            الرديئة.
          </p>
        </div>

        {/* Overview Section */}
        <CRSRegistrationMainContentLeftOverviewSectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Eligibility Section */}
        <CRSRegistrationMainContentLeftEligibilitySectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <CRSRegistrationMainContentLeftDocumentsSectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Registration Section */}
        <CRSRegistrationMainContentLeftRegistrationSectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Fees Section */}
        <CRSRegistrationMainContentLeftFeesSectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* E-Labelling  */}
        <CRSRegistrationMainContentLeftELabellingSectionArabic />

        {/* Divider */}
        <div className="service-left-content-divider" />
        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftOverviewSectionArabic = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">نظرة عامة</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ما هو مخطط التسجيل الإلزامي (CRS)؟
      </h2>

      <p className="service-left-content-paragraph">
        Compulsory Registration Scheme (مخطط التسجيل الإلزامي) هو مخطط تسجيل
        منتجات BIS تم إطلاقه في عام 2012 وكان يركز بشكل أساسي على المنتجات
        الإلكترونية. على مر السنين، مع إطلاق المزيد من المنتجات، تم توسيع CRS
        لتشمل مجموعة أوسع من فئات المنتجات، بما في ذلك المنتجات الكهربائية مثل
        الأجهزة والمعدات الشمسية والبطاريات والمزيد. تسجيل CRS إلزامي للمنتجات
        المحددة بموجب أوامر ضبط الجودة (QCOs) الصادرة عن مختلف الوزارات.
      </p>

      <p className="service-left-content-paragraph">
        أي منتج يخضع لمخطط CRS الإلزامي يجب أن يتم بيعه أو استيراده أو توزيعه في
        الهند فقط بعد الحصول على التسجيل مع BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        تاريخ شهادة CRS في الهند
      </h3>

      <p className="service-left-content-paragraph">
        في عام 2012، تم إطلاق أول QCO تحت مخطط CRS وتركز على المعدات الإلكترونية
        وتقنية المعلومات. منذ ذلك الحين، تم إصدار QCOs إضافية في القطاعات
        التالية:
      </p>

      <PointsListWithoutHeading
        points={[
          "الإلكترونيات الاستهلاكية",
          "الإضاءة وLEDs",
          "البطاريات والخلايا",
          "أجهزة الاتصالات اللاسلكية",
          "الألواح الشمسية والمكونات",
          "الأجهزة الكهربائية للاستخدام المنزلي",
        ]}
      />

      <p className="service-left-content-paragraph">
        قائمة شهادة CRS تتوسع بسرعة، لذا من المهم جداً للمصنعين أن يكونوا
        استباقيين وواعين بالتحديثات الأخيرة.
      </p>

      <h2 className="service-left-content-heading-three">
        تسجيل CRS مقابل علامة ISI: ما الفرق؟
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[200px] border-l border-gray-300 tracking-wide leading-loose">
                  الميزة
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] border-l border-gray-300 tracking-wide leading-loose">
                  تسجيل CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] tracking-wide leading-loose">
                  علامة ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الطبيعة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  إلزامي (فقط للمنتجات المدرجة في QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  طوعي أو إلزامي (حسب المنتج)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  نطاق المنتج
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  الإلكترونيات، تقنية المعلومات، الكهرباء، البطاريات، إلخ.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  الغذاء، الأسمنت، الصلب، الكهرباء، إلخ.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  التطبيق
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  عبر الإنترنت، بوابة BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يدوي + عبر الإنترنت، نظام BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  المرونة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  فقط للبضائع المشمولة بـ QCO
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يمكن أن يكون طوعياً للبضائع غير QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  التوسيم
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  يتطلب شعار BIS CRS ورقم التسجيل
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يتطلب شعار ISI مع رمز المعيار
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        لماذا تحتاج إلى معرفة إطار BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        إذا كنت منتجاً في الهند، أو شركة أجنبية تحاول دخول السوق الهندي، معرفة
        خطوات BIS CRS ضرورية. يساعدك ذلك على:
      </p>

      <PointsListWithoutHeading
        points={[
          "تجنب العقوبات لعدم الامتثال.",
          "إعداد جداول الإنتاج (مع مراعاة وقت اختبار المختبر).",
          "تسهيل عملية الجمارك.",
          "كسب ثقة العلامة التجارية طويلة الأمد للعميل الهندي.",
        ]}
      />
    </div>
  );
};

const CRSRegistrationMainContentLeftEligibilitySectionArabic = () => {
  return (
    <div id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">الأهلية</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        معايير الأهلية لتسجيل BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        من يمكنه التقدم للحصول على شهادة BIS تحت CRS؟
      </p>

      <p className="service-left-content-paragraph">
        في الهند، يمكن منح شهادة BIS تحت مخطط التسجيل الإلزامي (CRS) فقط
        للمصنعين الذين يفيون بالمتطلبات المحددة من قبل هيئة المعايير الهندية.
        هذا لضمان أن المصنعين الأصليين فقط يحصلون على امتياز القدرة على التسجيل
        وكذلك إرفاق شعار BIS CRS على منتجاتهم.
      </p>

      <div className="service-left-content-heading-three">
        قائمة التحقق من معايير الأهلية
      </div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[250px] border-l border-gray-300 tracking-wide leading-loose">
                  المتطلب
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  الوصف
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  المتقدم يجب أن يكون مصنعاً
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  فقط مصنع المنتج الأصلي (وليس التاجر أو الموزع) مؤهل للتقديم.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الموقع يمكن أن يكون هندياً أو أجنبياً
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  المصنعون الهنود والدوليون يمكنهم التقديم.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (الممثل الهندي المخول)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  المصنعون الأجانب يجب أن يعينوا AIR - إما فرعهم الهندي أو طرف
                  ثالث مخول رسمياً.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  تقارير الاختبار من مختبرات BIS المعتمدة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب اختبار المنتج في مختبر معترف به من BIS والتأكد من أنه يفي
                  بالمعيار الهندي (IS) المعمول به.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الوثائق المناسبة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب تقديم جميع الوثائق المطلوبة بالأشكال المقررة (التفاصيل في
                  القسم التالي).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  تسجيل واحد لكل علامة تجارية وموقع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب تقديم طلب منفصل لكل نوع منتج وموقع تصنيع واسم العلامة
                  التجارية.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        من هو الممثل الهندي المخول (AIR)؟
      </h2>

      <p className="service-left-content-paragraph">
        للمصنعين الأجانب، أحد الالتزامات هو تعيين ممثل هندي مخول (AIR) للتواصل
        والتمثيل في الهند.
      </p>

      <div className="service-left-content-heading-three">مسؤوليات AIR:</div>

      <PointsListWithoutHeading
        points={[
          "ي充当 المتقدم الأجنبي كالممثل القانوني",
          "يتواصل ويدير جميع الالتزامات مع BIS نيابة عن المصنع",
          "مسؤول قانونياً عن جميع الامتثال والوثائق",
          "لا يمكن أن يكون وكيلاً أو موزعاً ما لم يكن مصرحاً به بوضوح من قبل المصنع",
        ]}
      />

      <p className="service-left-content-paragraph">
        كجزء من الاتفاقية، يجب على AIR تقديم اتفاقية موقعة من كلا الجانبين مع
        دليل على العنوان الهندي.
      </p>

      <div className="service-left-content-heading-three">
        سيناريو الحياة الواقعية:
      </div>

      <p className="service-left-content-paragraph">
        شركة ABC تخطط لإدخال نموذج جديد من محطة الطاقة في الهند.
      </p>

      <PointsListWithoutHeading
        points={[
          "شركة ABC هي المصنع.",
          "يحصلون على المنتج مختبراً في أحد مختبرات BIS المعتمدة في الهند.",
          "مكتبهم الفرعي في دلهي يخدم كـ AIR المسجل.",
          "يرفعون الطلب إلى بوابة BIS مع الوثائق المطلوبة.",
        ]}
      />

      <p className="service-left-content-paragraph">
        النتيجة هي إصدار شهادة BIS تحت CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSectionArabic = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">المستندات</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        المستندات المطلوبة لتسجيل BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        قائمة المستندات المطلوبة للحصول على تسجيل BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        تعبئة طلب BIS CRS للتسجيل رقمي بالكامل، ومع ذلك، لا يزال يتطلب مستندات
        مكتملة بالكامل للحصول على الموافقة. كل خطأ بسيط وفشل في الالتزام بأي
        جانب، مثل نوع المستند، والأشكال غير الصحيحة، أو أنواع الملفات الخاطئة
        يمكن أن يسبب رفض أو تأخير الطلب.
      </p>

      <p className="service-left-content-paragraph">
        للمعالجة الصحيحة والأسرع لمستندات BIS، من الضروري أن يكون لديك المستندات
        الصحيحة معك في كل خطوة من الطريقة. الحصول على المستندات الصحيحة الجاهزة
        يضمن أن شهادة BIS الخاصة بك تتم معالجتها في الوقت المناسب وتبقى واضحة
        قانونياً من أي عمليات تدقيق امتثال أو تفتيشات جمركية أو موافقات السوق.
      </p>

      <div className="service-left-content-heading-three">
        قائمة التحقق من المستندات لتسجيل BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[250px] border-l border-gray-300 tracking-wide leading-loose">
                  المستند
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[200px] border-l border-gray-300 tracking-wide leading-loose">
                  من يقدم؟
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  ملاحظات
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  إثبات عنوان المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  عقد المصنع، فاتورة مرافق، أو ترخيص
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  تقرير الاختبار من مختبر BIS المعتمد
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع/المختبر
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب أن يكون حديثاً (خلال 90 يوم) ويشير إلى كود IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  التعهدات (وفقاً لشكل BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المتقدم
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يتضمن المسؤولية والامتثال ومسؤولية المنتج
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  شهادة العلامة التجارية
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  مطلوب إذا كانت العلامة التجارية مسجلة
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  اتفاقية AIR (للمتقدمين الأجانب)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع الأجنبي وAIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  موقع وموثق
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الإفادة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع أو AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  شكل قابل للتحميل من بوابة BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  إيصال الرسوم
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المتقدم
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  دليل دفع الرسوم الحكومية
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  رسالة التفويض
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يفوض AIR للعمل نيابة عنه
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  شهادة تسجيل الشركة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  دليل تسجيل الأعمال (GST، ROC، إلخ.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ملصقات/علامات المنتج
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right border-l border-gray-200 tracking-wide leading-loose max-w-full">
                  المصنع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب أن يظهر شعار BIS ومعيار IS ومساحة التسجيل
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftRegistrationSectionArabic = () => {
  return (
    <div id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          عملية التسجيل
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">عملية تسجيل BIS CRS</h2>

      <p className="service-left-content-paragraph">
        تسجيل BIS CRS هو عملية عبر الإنترنت بالكامل من خلال بوابة تسجيل BIS. لا
        تقتصر على الإجراءات التي تتضمن رفع المستندات. يتطلب أيضاً اهتماماً خاصاً
        من الناحية التقنية، وفهم اللوائح، بالإضافة إلى الامتثال الكامل للمعيار
        الهندي (IS).
      </p>

      <p className="service-left-content-paragraph">
        عملية BIS CRS، نسميها الآن نظام الشهادة والتسجيل (CRS)، وإليك كيف تنطلق
        رحلة شهادة BIS.
      </p>

      <div className="service-left-content-heading-three">
        الخطوة 1: اختبار المنتج في مختبر BIS المعتمد
      </div>

      <PointsListWithoutHeading
        points={[
          "اختر مختبراً من قائمة BIS المعتمدة",
          "قدّم عينة من المنتج الذي سيتم إجراء الاختبار عليه للمعيار الهندي ذي الصلة",
          "احصل على تقرير الاختبار للعينة وفقاً لشكل تقرير اختبار BIS",
        ]}
      />

      <div className="service-left-content-heading-three">
        الخطوة 2: إعداد المستندات
      </div>

      <PointsListWithoutHeading
        points={[
          "اجمع المستندات المطلوبة كما هو موضح بالفعل",
          "تأكد من أن المستندات مسماة بشكل صحيح، وتنسيقها، وموقعاً ومؤرخة",
          "تطوير ملصق منتج وهو ملصق مزيف يحتوي على مساحة لشعار BIS ومساحة لمعيار IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        الخطوة 3: ملء الطلب عبر الإنترنت
      </div>

      <PointsListWithoutHeading
        points={[
          "انتقل إلى بوابة BIS CRS (https://www.bis.org.in/) وقم بتسجيل الدخول أو التسجيل",
          "اكمل المنتج ورقم الموديل والعلامة التجارية والوحدة التصنيعية للـ AIR، إذا لزم الأمر",
          "اتبع الخطوات لدفع الرسوم الحكومية",
        ]}
      />

      <div className="service-left-content-heading-three">
        الخطوة 4: مراجعة BIS للطلب
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS يفحص المستندات الداعمة وتقارير المختبر",
          "إذا لزم الأمر، يتم رفع استفسار من خلال البوابة",
          "رد بالمستندات الصحيحة أو الشروحات المنطقية",
        ]}
      />

      <p className="service-left-content-paragraph">
        إذا كان استفسار توضيح، يجب الإجابة عليه خلال 30 يوماً، وإلا يذهب الطلب
        إلى ملفات الأرشيف، مما يعني الرفض.
      </p>

      <div className="service-left-content-heading-three">
        الخطوة 5: منح تسجيل BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "سيتم إصدار شهادة BIS إذا كان مسؤولو BIS راضين عن نتائج التقييمات التي أجروها",
        ]}
      />

      <p className="service-left-content-paragraph">ستشمل شهادتك:</p>

      <PointsListWithoutHeading
        points={[
          "رقم تسجيل BIS",
          "اسم العلامة التجارية",
          "موديل المنتج",
          "كود المعيار IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "يجب أن يحتوي ملصق منتجك أو يكون لديه توسيم إلكتروني لتفاصيل الشهادة.",
        ]}
      />

      <div className="service-left-content-heading-three">
        الخطوة 6: التوسيم والتوزيع
      </div>

      <PointsListWithoutHeading
        points={[
          "يجب أن تحمل المنتجات المعتمدة من BIS:",
          "شعار BIS CRS",
          "كود IS الذي يتعلق بالمنتج",
          "رقم تسجيل BIS",
          "يجب طباعة أو تضمين رقم التسجيل وشعار BIS رقمياً وفقاً لقواعد BIS.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        الجدول الزمني التقريبي
      </h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] border-l border-gray-300 tracking-wide leading-loose">
                  النشاط
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  الوقت المتوقع
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  اختبار المنتج
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  7-10 أيام عمل
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  جمع المستندات
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  2-3 أيام
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  تقديم الطلب
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يوم واحد
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  مراجعة BIS + حل الاستفسار
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  10-15 يوم عمل
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  إصدار الشهادة النهائية
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  2-4 أيام عمل
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  المجموع
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full font-semibold">
                  ~4 أسابيع
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftFeesSectionArabic = () => {
  return (
    <div id="fees" className="flex flex-col scroll-mt-20">
      {/* Fees */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">رسوم التسجيل</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        رسوم تسجيل BIS CRS، الصلاحية وإرشادات التجديد
      </h2>

      <p className="service-left-content-paragraph">
        للحصول على شهادة BIS تحت CRS، يجب على المتقدم دفع الرسوم الحكومية
        بالإضافة إلى الدفع لتتم معالجة المنتج. على الرغم من أن العملية عبر
        الإنترنت والواجهة مبسطة، يواجه العديد من المتقدمين تأخيرات في طلباتهم
        ورفضاً بسبب الدفع الناقص والطلبات المقدمة بشكل خاطئ.
      </p>

      <h3 className="service-left-content-heading-three">
        هيكل الرسوم لتسجيل CRS
      </h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] border-l border-gray-300 tracking-wide leading-loose">
                  نوع الرسوم
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  المبلغ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الرسوم الحكومية
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST لكل تقرير اختبار
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  رسوم الاختبار
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  ₹10,000 – ₹20,000 + 18% GST (يختلف حسب المنتج/المختبر)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  تقرير إضافي في نفس الطلب
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  ₹20,000 + 18% GST لكل تقرير
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  رسوم التجديد
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>الأسعار قابلة للتحديث — تأكد من بوابة BIS أو مع مستشارك.</em>
      </p>

      <h3 className="service-left-content-heading-three">
        صلاحية شهادة CRS والتجديد
      </h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] border-l border-gray-300 tracking-wide leading-loose">
                  المعامل
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  التفاصيل
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الصلاحية الأولية
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  2 سنوات
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  مدة التجديد
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  حتى 5 سنوات (إذا لم يتغير المنتج)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  عملية التجديد
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  عبر الإنترنت، بناءً على إفادة جديدة + رسوم التجديد
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  هل الإختبار المطلوب مرة أخرى؟
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  لا ما لم تتغير مواصفات المنتج/معيار IS
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftELabellingSectionArabic = () => {
  return (
    <div id="elabelling" className="flex flex-col scroll-mt-20">
      {/* E-Labelling */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          التوسيم الإلكتروني
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">
        إرشادات التوسيم الإلكتروني للمنتجات المعتمدة من CRS
      </div>

      <div className="service-left-content-heading-three">
        ما هو التوسيم الإلكتروني؟
      </div>

      <p className="service-left-content-paragraph">
        التوسيم الإلكتروني هو ممارسة عرض المعلومات التنظيمية داخل الجهاز
        إلكترونياً بدلاً من طباعتها ووضعها على الجهاز. تحت مخطط التسجيل الإلزامي
        (CRS) لـ BIS، المنتجات المحددة، خاصة الأجهزة المدمجة أو الرقمية، قادرة
        على عرض تفاصيل شهادة BIS، علامة المعيار وكود IS من خلال واجهة البرمجيات
        أو التعبئة الرقمية.
      </p>

      <div className="service-left-content-heading-three">
        إرشادات BIS حول التوسيم الإلكتروني: التوسيم الإلكتروني الإلكتروني (BIS
        CMD 3/8:1/6975. بتاريخ 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">
        متطلبات التوسيم الإلكتروني:
      </h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right w-[300px] border-l border-gray-300 tracking-wide leading-loose">
                  القاعدة
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-right tracking-wide leading-loose">
                  الوصف
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ملصق فيزيائي على التعبئة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  صندوق المنتج أو التعبئة الخارجية يجب أن تعرض شعار BIS CRS
                  وتفاصيل التسجيل.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ملصقات قابلة للإزالة للتعبئة السائبة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  إذا تم شحن المنتجات بشكل سائب، ملصق لاصق قابل للإزالة على
                  الحزمة الخارجية مقبول.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  لا حاجة للأدوات للوصول
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  المستخدمون يجب أن يكونوا قادرين على الوصول إلى معلومات الملصق
                  الإلكتروني دون الحاجة إلى أدوات أو ملحقات (مثل إزالة بطاقة SIM
                  غير مسموح).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  البرمجة الآمنة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  معلومات الملصق الإلكتروني يجب أن تكون مدمجة في البرامج
                  الثابتة/البرمجيات، محمية من التعديل من قبل أي طرف ثالث.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  الوصول المستند على القائمة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  المستخدمون يجب أن يكونوا قادرين على الوصول إلى المعلومات في لا
                  أكثر من 4 خطوات من خلال واجهة قائمة الجهاز.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-right border-l border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  التعليمات مطلوبة
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-right tracking-wide leading-loose max-w-full">
                  يجب توفير التعليمات حول كيفية الوصول إلى تفاصيل الملصق
                  الإلكتروني.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        كيف يمكن لـ Sun Certifications India مساعدتك في تسجيل BIS تحت مخطط CRS
      </p>

      <div className="service-left-content-heading-three">
        لماذا تختار مستشار BIS؟
      </div>

      <p className="service-left-content-paragraph">
        تسجيل BIS CRS بالكامل تقني ومكثف جداً فيما يتعلق بالقواعد وحجم التوثيق.
        في غياب فهم شامل للمعايير الهندية، QCOs الأخيرة، هيكل تقرير الاختبار،
        وسير العمل في واجهة البوابة، المتقدمون عرضة للخسارة بشكل كبير من حيث
        الإجراءات اللاحقة للتأخير والرفض أو عدم الامتثال النشط طويل الأمد. هذا
        هو المكان الذي تأتي فيه Sun Certifications India كشريك موثوق وموثوق
        لمساعدة المتقدم في كل تفاصيل مخطط الشهادة الإلزامي.
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
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-right max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
