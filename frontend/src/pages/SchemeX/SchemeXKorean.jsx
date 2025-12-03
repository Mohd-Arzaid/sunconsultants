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
import FooterKorean from "@/components/manual/Footer/FooterKorean";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import ServiceAuthorKorean from "@/components/manual/ServiceAuthor/ServiceAuthorKorean";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXKorean = () => {
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
      <FooterKorean />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXKorean;

const SchemeXMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Scheme-X 하의 인도 BIS 인증",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>BIS Scheme X 인증 | 기계 및 전기 장비 안전</title>
      <meta
        name="description"
        content="BIS Scheme X 인증은 저전압 개폐기, 제어 기어, 기계 및 전기 장비의 품질과 안전을 보장하기 위해 필요합니다."
      />
      <meta
        name="keywords"
        content="Scheme X, BIS Scheme X, BIS Scheme X 인증, Scheme X 인증, 기계 인증, 전기 장비 인증"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="BIS Scheme X 인증 | 기계 및 전기 장비 안전"
      />
      <meta
        property="og:description"
        content="BIS Scheme X 인증은 저전압 개폐기, 제어 기어, 기계 및 전기 장비의 품질과 안전을 보장하기 위해 필요합니다."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="BIS Scheme X 인증 | 기계 및 전기 장비 안전"
      />
      <meta
        name="twitter:description"
        content="BIS Scheme X 인증은 저전압 개폐기, 제어 기어, 기계 및 전기 장비의 품질과 안전을 보장하기 위해 필요합니다."
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
                  <Link to="/">홈</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Scheme-X 하의 인도 BIS 인증</BreadcrumbPage>
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
              인증 전문 지식
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Scheme X 인증
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Scheme X 인증은 옴니버스 기술 규정(OTR) 하의 기계, 전기 장비 및
            구성품 어셈블리와 하위 어셈블리를 다룹니다.
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
                서비스 보기
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
    if (path.includes("/ko/indo-bis-injeung-scheme-x-haenghaeng"))
      return "Scheme X Korean";
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
        title: "유효한 전체 이름을 입력하세요.",
        description: "이름은 문자와 공백만 포함해야 합니다.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "유효한 이메일 주소를 입력하세요.",
        description: "이메일 형식을 확인하세요",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "유효한 전화번호를 입력하세요",
        description: "전화번호는 (8-15자리)여야 합니다",
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
        title: "연락 양식이 성공적으로 제출되었습니다!",
        description: "문의해 주셔서 감사합니다. 팀에서 곧 연락드리겠습니다.",
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
        error.response?.data?.message || "문제가 발생했습니다";
      toast({
        variant: "destructive",
        title: errorMessage || "연락 양식 세부 정보를 제출하지 못했습니다!",
        description:
          "문제가 발생했습니다. 세부 정보를 확인하고 다시 시도하세요.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          문의하기
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        약속 예약
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        팀에 연락하여 통화를 예약하시겠습니까?
        <span className="text-black"> 지금 시도해보세요</span>
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
            placeholder="전체 이름 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="이메일 주소 *"
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
            placeholder="연락처 번호 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="회사 이름 *"
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
            placeholder="제품 이름 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="필요한 인증*"
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
              <span>전송 중</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>약속 예약</span>
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
    overview: "개요",
    process: "프로세스",
    documents: "문서",
    conclusion: "결론",
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
          aria-label="메뉴 토글"
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
          <ServicesRightSideContentKorean />
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
    // {
    //   code: "ko",
    //   name: "Korean",
    //   flag: "https://flagcdn.com/w320/kr.png",
    //   path: "/ko/indo-bis-injeung-scheme-x-haenghaeng",
    // },
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
              우리 서비스
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                인도 최고의 인증 컨설턴트
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
              외국 제조업체를 위한 BIS 마크 (ISI 라이선스)
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
              CDSCO 등록 인증
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
              BIS (CRS) 등록
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
              플라스틱 폐기물 관리
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
              EPR 인증 인증
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
              LMPC 인증 인증
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
              BIS 등록 인증서
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
              인도 제조업체를 위한 ISI 마크 (BIS)
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
            제품별 안전 표준
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            기계 및 전기 장비 설명
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"설명 또는 HS 코드로 검색..."}
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
    description: "액체 처리용 펌프, 액체 엘리베이터의 모든 유형",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 및 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "컴프레서의 모든 유형",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 및 84149090",
    indianStandard: "IS 17093:2019의 조항 16\nIS 12258:1987의 조항 6.6",
    title:
      "일반 및 산업 응용을 위한 왕복 공기 컴프레서의 기술 공급 조건\n일반 및 산업 응용을 위한 공기 스크류 컴프레서 (오일 플러드) 기술 공급 조건",
  },
  {
    id: 3,
    description: "온도 변화 과정을 포함한 재료 처리 기계의 모든 유형",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 및 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "액체 및 가스용 정화 기계",
    hsCode: "842122, 842129, 842131, 842139, 842191 및 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description: "병 충전, 밀봉, 라벨링, 포장 또는 랩핑 기계의 모든 유형",
    hsCode: "842220, 842230, 842240 및 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "크레인의 모든 유형",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 및 84269990",
    indianStandard:
      "IS 3177:2020의 조항 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 및 66.6\nIS 4573:2020의 조항 8.1, 8.2, 8.3 및 45\nIS/ISO 15442:2012",
    title:
      "모든 응용을 위한 전기 오버헤드 트래블링 크레인 및 갠트리 크레인 실무 코드\n동력 구동 모바일 크레인 사양\n크레인 - 로더 크레인 안전 요구사항",
  },
  {
    id: 7,
    description: "건설용 기계의 모든 유형",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "토공 기계 안전 Part 7 스크레이퍼\n토공 기계 그레이더 요구사항\n토공 기계 안전 Part 12 로드 페이버",
  },
  {
    id: 8,
    description: "직조 기계 (직기)의 모든 유형",
    hsCode: "8446, 844811, 844819, 844842 및 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title: "섬유 기계 안전 요구사항 Part 6 직물 제조 기계",
  },
  {
    id: 9,
    description: "자수 제작 기계의 모든 유형.",
    hsCode: "84479020 및 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "섬유 기계 안전 요구사항 Part 1 공통 요구사항",
  },
  {
    id: 10,
    description: "금속 절단 기계의 모든 유형",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 및 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "기계 도구 안전 프레스 Part 1 일반 안전 요구사항\n기계 도구 안전 전기 방전 기계\n기계 도구 안전 선반 기계\n기계 도구 안전 냉간 금속용 톱 기계\n기계 도구 안전 가공 센터, 밀링 기계, 이송 기계 Part 1 안전 요구사항",
  },
  {
    id: 11,
    description:
      "석재, 세라믹, 콘크리트, 석면 시멘트 또는 유사한 광물 유리를 가공하는 기계 도구의 모든 유형",
    hsCode: "8464 및 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "고무 및 플라스틱 가공 기계의 모든 유형",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title: "플라스틱 및 고무 기계 - 사출 성형 기계 - 안전 요구사항",
  },
  {
    id: 13,
    description:
      "공공 사업 및 건물용 기계와 개별 기능을 가진 기계 및 기계 장치의 모든 유형, 지정되지 않음",
    hsCode: "84791000, 84798999 및 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "기어 및 기어링, 톱니바퀴, 체인 스프로킷, 변속 요소 볼 또는 롤러 나사, 기어박스 및 속도 변경기, 토크 컨버터를 포함한 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품",
    hsCode: "84834000 및 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "발전기 등과 같은 회전 전기 기계의 모든 유형, 건물 및 개별 기능을 가진 기계 및 기계 장치, 지정되지 않음",
    hsCode: "8501 및 8503",
    indianStandard:
      "섹션 2의 조항 4.7, 4.8 및 4.12,\n섹션 3의 조항 7.4, 섹션 4의 조항 8.6,\n섹션 5의 조항 9.4 IS 5422:1996\nIS 13364\n(Part 1): 1992의 조항 11, 21, 22, 23, 25 및 26\nIS 13364\n(Part 2): 1992의 조항 11, 21, 22 23 25 및 26",
    title:
      "터빈 유형 발전\n왕복 내연 기관 구동 AC 발전기 - 사양: Part 1\n20kVa까지 교류 발전기\n왕복 내연 기관 구동 AC 발전기 - 사양: Part 2\n20kVa 이상 1250kVa까지 교류 발전기",
  },
  {
    id: 16,
    description: "디젤 발전기의 모든 유형",
    hsCode: "8502 및 8503",
    indianStandard:
      "IS/ISO 8528 (Part 2) : 2018의 조항 5,6,7,8, 9 및 10\nIS/ISO 8528 (Part 3)의 조항 6 및 10\nIS/ISO 8528 (Part 4): 2005의 조항 4, 5.5, 7.3.5, 7.3.7 및 7.4\nIS/ISO 8528-5: 2018의 조항 12, 13, 14, 15\nIS/ISO 8528 (Part 8): 2016의 조항 6.4\nIS/ISO 8528 (Part 12): 1997의 조항 9.1",
    title:
      "왕복 내연 기관 구동 교류 발전 세트 : Part 2 엔진\n왕복 내연 기관 구동 교류 발전 세트: Part 3 발전 세트용 교류 발전기\n왕복 내연 기관 구동 교류 발전 세트: Part 4 제어 기어 및 개폐기\n왕복 내연 기관 구동 교류 발전 세트 Part 5 발전 세트\n왕복 내연 기관 구동 교류 발전 세트: Part 8\n왕복 내연 기관 구동 교류 발전 세트: Part 12 안전용 비상 전원 공급",
  },
  {
    id: 17,
    description: "변압기의 모든 유형",
    hsCode: "850421, 850422, 850423, 850431, 850432, 850433, 850434 및 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nIS 2026 (Part 1)의 조항 5.6 및 Cl 10\nIS 2026 (Part 6)의 조항 7.5, 7.6, 7.7",
    title:
      "변압기, 리액터, 전원 공급 장치 및 유사 제품의 안전 공급 전압 최대 1100V Part 2-4: 절연 변압기 및 전원 공급 장치 통합 요구사항 및 테스트\n전원 변압기, 전원 공급 장치 및 유사: Part 2 특정 요구사항: Sec 6 일반 용도 절연 변압기\n전원 변압기, 전원 공급, 리액터 및 유사 제품의 안전: Part 2-7 장난감용 변압기 및 전원 공급 요구사항 및 테스트\n전원 변압기: Part 1 일반\n전원 변압기: Part 6 리액터",
  },
  {
    id: 18,
    description: "전력 반도체 변환기의 모든 유형",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "반도체 변환기 Part 1 일반 요구사항 및 라인 교류 변환기 섹션 1 기본 요구사항 사양의 조항 7",
  },
  {
    id: 19,
    description:
      "1000볼트 이하 전압에서 작동하는 개폐기 및 제어 기어 장비의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품",
    hsCode: "8536, 8537 및 8538",
    indianStandard: "IS/IEC 61439 (Part 3): 2012의 조항 8",
    title:
      "저전압 개폐기 및 제어 기어 어셈블리: Part 3 일반인 작동용 배전반 (DBO)",
  },
  {
    id: 20,
    description:
      "1000볼트 초과 전압에서 작동하는 개폐기 및 제어 기어 장비의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품",
    hsCode: "8535, 8537 및 8538",
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
        TYPE C (특정 기계 또는 기계 그룹에 대한 상세한 안전 요구사항을 다루는
        기계 안전 표준)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                일련 번호
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                기계 및 전기 장비 설명
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HS 코드
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                인도 표준/인도 표준 조항
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                인도 표준 제목
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
                  &quot;{searchQuery}&quot;에 대한 결과가 없습니다
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
    title: "기계 전기 장비 안전 Part 1 일반 요구사항",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "기계 안전 - 기계 전기 장비 Part 11 1 000 V AC 또는 1 500 V DC 초과 36 kV 이하 전압 장비 요구사항",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "전기-전자-프로그래머블 전자 안전 관련 시스템 기능 안전 Part 1- 일반 요구사항",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "인클로저가 제공하는 보호 정도 (IP 코드)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title: "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 1: 테스트 방법 선택",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "기계 안전 공기 중 유해 물질 방출 평가 Part 2 주어진 오염물질 방출률 측정을 위한 추적 가스 방법",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 3: 주어진 오염물질 방출률 측정을 위한 테스트 벤치 방법",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 4: 배기 시스템 포획 효율 측정을 위한 추적 방법",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 5: 덕트 없는 공기 청정 시스템 질량 분리 효율 측정을 위한 테스트 벤치 방법",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 6 : 덕트 있는 공기 청정 시스템 질량 분리 효율 측정을 위한 테스트 벤치 방법",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 7: 오염물질 농도 매개변수 측정을 위한 테스트 벤치 방법",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 8: 오염물질 농도 매개변수 측정을 위한 실내 방법",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title: "기계 안전 - 공기 중 유해 물질 방출 평가 - Part 9: 오염 제거 지수",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title: "유압 유체 전력- 시스템 및 구성품의 일반 규칙 및 안전 요구사항",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title: "공압 유체 전력- 시스템 및 구성품의 일반 규칙 및 안전 요구사항",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "토공 기계 - 가드 - 정의 및 요구사항",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "기계 안전- 안전 관련 전기 전자 및 프로그래머블 전자 제어 시스템 기능 안전",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "기계 안전 - 전기 감지 보호 장비 Part 2 능동 광전자 보호 장치 AOPD를 사용하는 장비 특정 요구사항",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "기계 안전- 표시 마킹 및 작동 Part 3 액추에이터 위치 및 작동 요구사항",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title: "기계 안전- 기계 전기 장비 Part 32 호이스팅 기계 요구사항",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "기계 안전 - 표시 마킹 및 작동 Part 1 시각 음향 및 촉각 신호 요구사항",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title: "기계 안전 - 전기 감지 보호 장비 Part 1 일반 요구사항 및 테스트",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title: "기계 안전 안전 관련 응용을 위한 통신 시스템 사용 지침",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title: "기계 안전 - 표시 마킹 및 작동 Part 2 마킹 요구사항",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "기계 안전 화재 예방 및 화재 보호",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title: "기계 안전 기계 설계 위생 요구사항",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title: "기계 안전 기계 접근 고정 수단 선택 및 일반 접근 요구사항 Part 1",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title: "기계 안전 기계 접근 고정 수단 작업 플랫폼 및 보행로 Part 2",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title: "기계 안전 기계 접근 고정 수단 계단 스텝 래더 및 가드레일 Part 3",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title: "기계 안전 기계 접근 고정 수단 고정 사다리 Part 4",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title: "기계 안전 제어 시스템 안전 관련 부품 Part 1 설계 일반 원칙",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title: "기계 안전 제어 시스템 안전 관련 부품 Part 2 검증",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title: "기계 안전 가드 고정 및 이동 가드 설계 및 제작 일반 요구사항",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title: "기계 안전 가드와 관련된 연동 장치 설계 및 선택 원칙",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "기계 안전 예기치 않은 시작 방지",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title: "기계 안전 상지 및 하지로 위험 구역 도달 방지 안전 거리",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title: "기계 안전 인간 신체 부위 접근 속도에 대한 보호 장치 위치",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title: "기계 안전 인간 신체 부위 압착 방지 최소 간격",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title: "기계 안전 양손 제어 장치 설계 및 선택 원칙",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "기계 안전 비상 정지 기능 설계 원칙",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title: "기계 안전 우발적 제품 접촉 윤활제 위생 요구사항",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "기계 안전 기계에서 방출되는 유해 물질로 인한 건강 위험 감소 - Part 1: 기계 제조업체 원칙 및 사양",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "기계 안전 기계에서 방출되는 유해 물질로 인한 건강 위험 감소 - Part 2: 검증 절차로 이어지는 방법론",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "기계 안전 압력 감지 보호 장치 - Part 1: 압력 감지 매트 및 압력 감지 바닥 설계 및 테스트 일반 원칙",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "기계 안전 압력 감지 보호 장치 - Part 2: 압력 감지 가장자리 및 압력 감지 바 설계 및 테스트 일반 원칙",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "기계 안전 압력 감지 보호 장치 - Part 3: 압력 감지 범퍼, 플레이트, 와이어 및 유사 장치 설계 및 테스트 일반 원칙.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title: "인간공학- 청각 및 시각 위험 및 정보 신호 시스템",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "디스플레이 및 제어 액추에이터 설계 인간공학 요구사항 Part 2 디스플레이",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "디스플레이 및 제어 액추에이터 설계 인간공학 요구사항 Part 3 제어 액추에이터",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title: "기계 안전 기계 작업 스테이션 설계 인체 측정 요구사항",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title: "인간공학 - 컴퓨터 매니킨 및 신체 템플릿 Part 1 일반 요구사항",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title: "인간공학 - 청각 및 시각 위험 및 정보 신호 시스템",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title: "산업 자동화 시스템 - 통합 제조 시스템 안전 - 기본 요구사항",
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
        TYPE B (광범위한 기계에 걸쳐 사용될 수 있는 하나의 안전 측면 또는 하나
        이상의 보호 장치를 다루는 일반 안전 표준)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                일련 번호
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS 번호
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                제목
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
                  &quot;{searchQuery}&quot;에 대한 결과가 없습니다
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
              이전
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              페이지 {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              다음
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
      question: "1. BIS 인증 하의 Scheme X는 무엇인가요?",
      answer:
        "Scheme X는 인도 BIS가 기계 및 전기 장비를 위해 도입한 적합성 평가 제도로, 옴니버스 기술 규정에 명시된 엄격한 안전 및 기술 표준 준수를 보장합니다.",
    },
    {
      question: "2. Scheme X는 ISI 마크 인증과 다른가요?",
      answer:
        "네. ISI 마크는 일반적으로 소비재 및 기본 제품 준수를 위한 것이며, Scheme X는 BIS 인증서 또는 BIS 라이선스를 통해 고급 테스트 및 인증이 필요한 복잡하고 산업 등급 제품에 적용됩니다.",
    },
    {
      question: "3. 누가 Scheme X 인증을 신청해야 하나요?",
      answer:
        "옴니버스 기술 규정에 나열된 기계 및 전기 장비의 제조업체 및 수입업체는 인도에서 제품을 합법적으로 판매 또는 유통하기 위해 Scheme X를 신청하고 유효한 BIS 인증을 취득해야 합니다. 인도에서 제품을 판매하려는 글로벌 제조업체 또는 외국 제조업체도 이러한 규정을 준수해야 합니다.",
    },
    {
      question: "4. BIS Scheme X 인증 비용은 얼마인가요?",
      answer:
        "Scheme X 비용에는 신청 수수료, 인증 수수료, 기술 파일 검토 비용, 공장 검사 비용, 제품 테스트 비용이 포함됩니다. 평균적으로 신청은 ₹2,000부터 시작하며 제품 복잡성에 따라 증가할 수 있습니다. 자세한 내용은 admin@bis-certifications.com으로 문의하세요.",
    },
    {
      question: "5. Scheme X 하의 BIS 라이선스를 받는 데 얼마나 걸리나요?",
      answer:
        "타임라인은 문서화, 테스트 요구사항 및 공장 검사에 따라 다릅니다. 일반적으로 인도 제조업체의 경우 성공적인 BIS 등록 및 신청 제출 날짜로부터 4–6주, 외국 제조업체의 경우 60-90일이 소요됩니다.",
    },
    {
      question: "6. MSME도 Scheme X 하의 BIS 인증을 신청할 수 있나요?",
      answer:
        "물론입니다. 실제로 인도 BIS는 산업 부문의 품질, 준수 및 경쟁력을 강화하기 위해 MSME가 Scheme X 하의 BIS 라이선스 또는 적합성 인증서를 신청하도록 장려합니다.",
    },
    {
      question: "7. Scheme X 하의 BIS 인증은 수출에 필수인가요?",
      answer:
        "아니요. 수출 전용으로 제조된 제품은 옴니버스 기술 규정 하에서 면제됩니다. 그러나 인도 시장용 제품은 Scheme X 하에서 인증되어야 합니다.",
    },
    {
      question: "8. Scheme X 하의 BIS 라이선스 유효 기간은 무엇인가요?",
      answer:
        "Scheme X 하의 BIS 라이선스는 일반적으로 3-6년 동안 유효하며 적절히 갱신되어야 합니다. 갱신에는 연간 BIS 인증 수수료 지불이 포함되며 제품 범위 또는 표준 변경에 따라 재평가가 필요할 수 있습니다.",
    },
    {
      question: "9. 외국 제조업체가 Scheme X 인증을 신청할 수 있나요?",
      answer:
        "네, 외국 제조업체는 승인된 인도 대리인을 통해 Scheme X 인증을 신청할 수 있습니다. 인도 BIS는 공장 검사를 요구하며, 외국 신청자의 경우 3일이 소요될 수 있으며 표준 BIS 등록 및 테스트 프로세스와 함께 진행됩니다.",
    },
    {
      question: "10. 기술 파일이란 무엇이며 왜 필요한가요?",
      answer:
        "기술 파일은 Scheme X 하에서 요구되는 상세한 준수 문서로, 제조 프로세스, 제품 세부 사항, 테스트 보고서 및 품질 관리 문서를 포함합니다. BIS 인증 프로세스 동안 관련 인도 표준에 대한 제품 적합성을 지원합니다.",
    },
    {
      question: "11. Scheme X는 옴니버스 기술 규정과 어떻게 관련되나요?",
      answer:
        "옴니버스 기술 규정은 인도에서 특정 기계 및 전기 장비 카테고리에 대해 Scheme X 사용을 의무화합니다. 규정에 나열된 제품은 유효한 BIS 인증서 또는 BIS 라이선스를 취득하기 위해 Scheme X 하에서 인증되어야 합니다.",
    },
    {
      question: "12. Scheme X 하의 BIS 인증서가 취소될 수 있나요?",
      answer:
        "네. 인도 BIS는 감시 중 비준수가 발견되거나 제품이 요구된 인도 표준을 충족하지 못하는 경우 Scheme X 하의 BIS 라이선스 또는 인증서를 정지 또는 취소할 수 있습니다.",
    },
    {
      question:
        "13. Scheme X 하의 BIS 라이선스와 BIS 인증서의 차이는 무엇인가요?",
      answer:
        "BIS 라이선스는 일반적으로 인도 제조업체에게 발급되며, BIS 적합성 인증서 (CoC)는 외국 제조업체 또는 특정 사례에 발급됩니다. 둘 다 Scheme X 하에서 제품 준수를 보장하는 동일한 목적을 합니다.",
    },
    {
      question: "14. Scheme X 인증 제품에 ISI 마크가 허용되나요?",
      answer:
        "아니요. Scheme X 하의 제품은 ISI 마크를 사용하지 않습니다. 대신 인도 BIS가 관리하는 인증 제도에 관련된 BIS 표준 마크를 표시합니다.",
    },
    {
      question: "내 기계가 Scheme X 인증을 필요로 하는지 어떻게 알 수 있나요?",
      answer:
        "옴니버스 기술 규정의 공식 목록을 확인하거나 BIS 컨설턴트와 상담하여 기계가 필수 Scheme X 인증 요구사항에 해당하는지 확인하세요.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="자주 묻는 질문"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          자주 묻는 질문
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          찾으시는 답변을 찾지 못하셨나요?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            문의하세요!
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

        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">결론</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">결론</h2>

      <p className="service-left-content-paragraph">
        BIS Scheme-X 인증은 저전압 개폐기 및 제어 기어, 기계 및 전기 장비의
        안전, 신뢰성 및 품질을 유지하는 데 필수적입니다. 석재, 세라믹, 콘크리트,
        아스팔트 시멘트 및 광물 유리 가공에 적용되는 공구 제조업체의 경우 BIS
        Scheme-X 인증이 의무적입니다.
      </p>

      <p className="service-left-content-paragraph">
        이러한 의무를 이행함으로써 제조업체는 제품 적합성을 보장하고 소비자
        신뢰를 높이며 시장 신뢰성을 향상시킵니다. Scheme-X는 생산이 원활하게
        진행되도록 하고, 전 세계 안전 표준을 충족하며, 인정받은 브랜드가
        긍정적인 평판을 얻도록 합니다.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">문서</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Scheme X 인증에 필요한 주요 문서
      </h2>

      <p className="service-left-content-paragraph">
        BIS 인증 프로세스를 간소화하기 위해 제조업체는 등록 단계에서 다음 문서를
        수집 및 제출해야 합니다:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                일련 번호
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                필요한 문서
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                세부 사항
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                이름 및 주소 (공장 및 사무실)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                제조 사이트 및 사무실의 전체 법적 이름 및 물리적 주소
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PAN 및 GST 정보
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                영구 계좌 번호 (PAN) 및 GST 등록 세부 사항
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                연락처 세부 사항
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                공식 커뮤니케이션을 위한 이메일 주소, 휴대전화 번호 및 유선 전화
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                관리 세부 사항
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                주요 임원 및 승인 서명인의 이름, 역할 및 ID
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                제품 설명
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                옴니버스 기술 규정 제1 부록에 포함된 기계 및 장비 세부 사항
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                제품 분류
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS 라이선스가 요청되는 특정 유형, 모델 및 품종
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                기술 파일
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                제품 및 제조 단위에 관련된 모든 기술 세부 사항.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Scheme-X 인증서 유효 기간 및 갱신 프로세스:
      </h3>

      <PointsListWithoutHeading
        points={[
          "라이선스 유효 기간 및 갱신: Scheme-X 하의 BIS 라이선스는 연속 생산을 위해 3~6년 기간으로 발급됩니다. 기간이 만료되면 갱신 신청, 필요 수수료 및 준수 문서 제출로 동일 기간 동안 갱신할 수 있습니다.",
          "적합성 인증서 (CoC): CoC는 일회 생산용으로 발급되며 국내 및 해외 제조업체에 적용됩니다. 단일 배치에만 적용되므로 CoC에는 갱신 옵션이 없습니다.",
          "제품 테스트 보고서: 제조업체 실험실에서 테스트 보고서가 준비되면 BIS 직원이 공장 검사 중 증인 테스트를 실시하여 검증합니다. 하청 시설에서 테스트가 수행되면 해당 시설도 BIS에 의해 검사 및 승인됩니다.",
          "갱신 신청 검토: 중단 없는 유효성을 위해 제조업체는 Scheme-X 규정을 지속적으로 준수해야 합니다. BIS 적합성 평가 규정 규정 8에 따라 인도 표준국은 VIII 양식으로 갱신 신청을 처리합니다. 만족스러운 준수가 검증된 후에만 갱신됩니다.",
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
        <span className="service-left-content-index-heading">프로세스</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Scheme-X 하에서 인증 받는 단계
      </h2>

      <p className="service-left-content-paragraph">
        Scheme-X 하에서 BIS 인증서를 발급하는 것은 제조업체가 적용 가능한 안전,
        품질 및 준수 표준을 충족하도록 보장하는 체계적인 활동입니다. 프로세스는
        다음과 같습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "범위 확인: 제품이 Scheme-X 범위에 있으며 BIS 안전 요구사항과 일치하는지 확인하세요. 관련 인도 표준 및 기술 일정을 확인하여 준수할 수 있는지 결정하세요.",
          "필요 문서 준비: 제조업체는 등록된 사업 인증서, 설계 기반 문서, 공장 및 프로세스 흐름 문서, 서비스 테스트 보고서 (해당되는 경우), 품질 보증 및 제어 문서를 수집 및 준비해야 합니다.",
          "기술 파일 구성: 기술 파일은 인증 연장을 위한 필수 부분입니다. 다음을 포함해야 합니다: 제품 기술 사양, 방법 및 기술 정보, 준수 및 테스트 문서, 제품 제한 및 의도된 목적, 품질 보증 문서, 원자재 추적성, 하청 추적성 및 기타 증거, 범위 내 표준 준수.",
          "신청 양식: 신청 양식은 지정된 장소에서 BIS 웹사이트를 통해 전자적으로 제출할 수 있습니다. 신청 수수료 정산이 필수입니다. 신청을 검토하기 위한 나머지 문서를 포함해야 합니다.",
          "공장 검사: 국내 제조업체: 최대 2일 동안 검사 실시. 외국 제조업체: 최대 3일 동안 검사 실시 (추가 요청으로 인해 추가 일정이 발생할 수 있음).",
          "제품 샘플 테스트: 샘플 테스트는 제조업체 사이트 또는 아웃소싱된 BIS 승인 랩에서 수행됩니다 (아웃소싱 테스트 허용). 테스트는 관련 인도 표준 충족을 입증합니다.",
          "인증 발급: 제품이 모든 조건을 충족하면 BIS는 모든 제품에 라이선스 또는 적합성 인증서 (CoC)를 부여합니다. 제조업체는 인증된 모든 제품에 BIS 표준 마크를 자유롭게 사용할 수 있습니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        이 파일은 안전 추적 표준을 입증하는 제품 주장의 기술적 및 통계적 증거로
        사용됩니다.
      </p>

      <p className="service-left-content-paragraph">
        검사 기간 동안 BIS 직원은 다음을 수행해야 합니다: 기술 파일 분석, 제조
        방식 평가 및 지원 품질 보증 시스템, 제품 테스트 관찰, 비준수 (있는 경우)
        결정 및 수정 단계 제공. 방문 후 신청자에게 상세 감사 보고서가
        제공됩니다.
      </p>

      <p className="service-left-content-paragraph">
        이 전략은 BIS 표준 준수를 유지하고 인도 및 국제 준수를 인정하며 산업이
        소비자 신뢰를 향한 안전 및 품질에 초점을 맞추도록 합니다.
      </p>

      <h2 className="service-left-content-heading-three">
        국내 제조업체를 위한 절차
      </h2>

      <p className="service-left-content-paragraph">
        국내 제조업체는 Scheme-X 하에서 BIS 라이선스를 직접 취득하는 직접적인
        접근 방식을 따릅니다. 따를 직접적인 단계는 다음과 같습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "문서화: 제도에 관련된 모든 문서를 수집 및 준비해야 합니다.",
          "신청 실행: 신청은 관련 수수료와 함께 제출됩니다.",
          "신청 문의: 제출된 모든 신청은 BIS에 의해 검토되며 후속 질문 세트가 생성됩니다.",
          "감사인 지정: 감사인은 BIS에 의해 지정되지만 지정된 개인은 감사 수수료 지불 대상입니다.",
          "공장 감사: 현장에서 감사 및 설문 조사가 실시되며 관련 샘플이 수집됩니다.",
          "샘플 평가: 샘플은 BIS 인정 실험실에서 평가됩니다. 신청자는 모든 BIS 인정 실험실 테스트 수수료를 지불합니다.",
          "라이선스 및 마킹 수수료 지불: BIS에 필요한 지불이 완료됩니다.",
          "라이선스 부여: BIS 마크 사용 권한을 부여하는 인증서가 BIS에 의해 수여됩니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>일반 타임라인:</strong> BIS 관행에 따라 약 90 근무일이
        필요합니다. 주요 비적합이 없는 경우입니다.
      </p>

      <h2 className="service-left-content-heading-three">
        외국 제조업체를 위한 절차
      </h2>

      <p className="service-left-content-paragraph">
        국내 제조업체와 달리 Scheme-X 하에서 BIS 인증서를 신청하는 외국
        제조업체는 더 엄격한 프로세스와 추가 단계를 준수해야 합니다. 절차는
        다음과 같습니다.
      </p>

      <PointsListWithoutHeading
        points={[
          "문서 준비: 사업 등록, 제품 및 공장 레이아웃, 테스트 보고서 및 관련 품질 관리 문서를 준수하기 위해 구성된 폴더에 모두 포함해야 합니다.",
          "신청 제출: 신청, 필요 수수료 및 모든 신청 자료를 BIS 온라인 포털을 통해 제출합니다.",
          "신청 기록 및 검토: 신청은 BIS에 의해 기록되며 문서 확인이 실시됩니다. BIS가 가질 수 있는 모든 문제를 신청자가 적시에 해결해야 합니다.",
          "감사인 지정 및 지불: 공장 검사 담당 BIS 감사인이 신청자에게 지정됩니다. 신청자는 적용 법률에 따라 실시된 감사에 대한 설정 수수료를 지불해야 합니다.",
          "감사 준비: 외국 제조업체는 감사 물류를 책임지며 BIS 직원을 위한 비자 발급, 항공권 및 호텔 예약을 준비 및 지불합니다.",
          "공장 감사 및 샘플 선택: BIS 직원은 3일 동안 공장 감사를 실시합니다 (더 많은 신청이 필요한 경우 더 많은 일수가 추가될 수 있음).",
          "제품 테스트: 선택된 샘플은 테스트를 위해 BIS 인증 실험실로 전달됩니다. 일부 경우 테스트는 다른 테스트 실험실에 계약되며 지불은 주요 테스트 실험실을 통해 정산됩니다.",
          "마킹 및 라이선스 수수료 지불: 성공적인 감사 및 테스트 결과 후 제조업체는 BIS에 필요한 마킹 수수료 및 라이선스 수수료를 지불해야 합니다.",
          "라이선스 부여: 모든 조건이 완전히 준수되면 BIS는 라이선스/적합성 인증서 (CoC)를 발급합니다. 준수가 확인되면 BIS는 제조업체가 다른 인증된 제품에 BIS 표준 마크를 사용하도록 허용합니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        감사는 품질 보증 시스템 및 제조 프로세스 워크플로 평가, 준수 및 기술
        문서 평가, 독립 테스트 샘플 선택을 포함합니다.
      </p>

      <p className="service-left-content-paragraph">
        전체 프로세스는 BIS 관행에 따라 대략 6-7개월이 소요됩니다.
      </p>

      <h3 className="service-left-content-heading-three">
        외국 제조업체를 위한 주요 추가 포인터:
      </h3>

      <PointsListWithoutHeading
        points={[
          "FMCS 분류: 모든 외국 제조업체는 외국 제조업체 인증 제도 하에서 '대규모'로 분류됩니다. 이 분류는 수행되는 운영 규모와 무관합니다.",
          "승인된 인도 대리인 (AIR): 모든 외국 제조업체는 승인된 인도 대리인 (AIR)을 지정해야 합니다. AIR은 외국 신청자와 BIS 간의 주요 연락 지점으로 준수, 협력 및 BIS 라이선스 유지에 책임을 집니다.",
          "공장 감사: 외국 제조업체의 공장 감사는 포괄적이며 3일 동안 지속됩니다. 또한 여러 제품 신청이 제출된 경우 더 많은 일수가 필요합니다.",
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
        <span className="service-left-content-index-heading">개요</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Scheme X 인증 소개
      </h2>

      <p className="service-left-content-paragraph">
        인도 표준국, 또는 BIS는 2022년 3월 16일 인도에서 제품 안전 및 품질
        준수를 개선하기 위해 &ldquo;Scheme X&rdquo;를 출시했습니다. 인도 및 외국
        제조업체는 Scheme-X의 Schedule-II에 명시된 기계 및 전기 장비, 구성품
        어셈블리, 하위 어셈블리 및 도구에 대한 BIS 인증을 신청하고 인도로 수출,
        판매 또는 유통 전에 인증을 받을 수 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        Scheme X 하에서 제조업체는 저전압 개폐기 및 제어 기어, 기계 및 전기
        장비에 대한 BIS 라이선스 또는 적합성 인증서 (CoC)를 신청할 수 있습니다.
        제조업체가 인증되면 인도에서 정한 표준에 따라 제품이 준수됨을 나타내는
        BIS 표준 마크를 사용할 수 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        이 인증은 제품 및 인도 표준 및 정부 규정 준수를 촉진하며 인증된 제품에
        대한 소비자 신뢰와 자신감을 개발하는 데 도움이 됩니다.
      </p>

      <h2 className="service-left-content-heading-three">
        Scheme X 인증이란 무엇인가요?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X는 BIS 적합성 평가 규정, 2018 하에서 개발된 제품 인증 제도로,
        나중에 BIS 적합성 평가 (개정) 규정, 2022 하에서 간소화되었습니다.
      </p>

      <p className="service-left-content-paragraph">
        주요 목표는 산업 기계 및 전기 장비와 관련하여 인도 안전 및 품질 표준을
        글로벌 표준으로 끌어올리는 것입니다. 이 제도 하에서 인도에서 제조되거나
        수입된 제품은 기술, 안전 및 성능 표준을 입증하기 위해 엄격한 검토 및
        평가를 받습니다.
      </p>

      <p className="service-left-content-paragraph">
        Scheme X 인증의 원래 범위는 중량 산업부 관할 하에 있으며 BIS에 의해
        시행된 새로 발행된 기계 및 전기 장비 안전 (옴니버스 기술 규정) 명령,
        2024에 의해 수정 및 확장되었습니다. 이 명령은 2026년 9월 1일부터
        발효되며 액체 처리용 펌프, 컴프레서, 크레인, 회전 전기 기계, 변압기 및
        개폐기 및 제어 기어와 같은 광범위한 기계 및 전기 장비를 다룹니다.
      </p>

      <p className="service-left-content-paragraph">
        이러한 기계 또는 장비의 어셈블리, 하위 어셈블리 및 구성품도 인도 표준국
        법, 2016 섹션 16에 따라 인증 범위에 포함됩니다.
      </p>

      <p className="service-left-content-paragraph">
        또한 1989 CMVR 규칙 (밸브 규제 제조 및 건설) 하에서 Scheme X 관할의
        보우저 및 기타 건설 장비 유형은 시장이 안전 및 기술 표준이 부족한 장비에
        노출되지 않도록 보장합니다.
      </p>

      <h2 className="service-left-content-heading-three">
        옴니버스 기술 규정 (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        중량 산업부는 2024년 8월 28일 E-Gazette 통지를 통해 &ldquo;안전 명령
        (기계 및 전기 장비 안전)에 대한 옴니버스 기술 규정&rdquo;을
        발표했습니다. 이 혁신적인 규정은 BIS 규정, 2016의 Scheme X 하에서 기계,
        전기 장비 및 어셈블리, 하위 어셈블리 및 구성품의 안전, 품질 및 준수를
        개선하려 합니다.
      </p>

      <p className="service-left-content-paragraph">
        OTR 하에서 모든 카테고리의 기계 및 전기 장비 및 모든 부품 및 구성품이
        포함됩니다. 그러나 몇 가지 카테고리는 특별히 제외됩니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "인도 표준국 법, 2016 하에서 발행된 섹션 16 하의 다른 명령의 일부인 기계 및 구성품.",
          "수출 전용으로 의도된 제조 국내 상품 및 물품.",
          "도로 교통 및 고속도로부 (MoRTH)가 규정한 1989 CMVR 규칙 하의 건설 기계 및 장비.",
        ]}
      />

      <p className="service-left-content-paragraph">
        이러한 예외는 준수를 용이하게 하고 불필요한 규제 중복을 피하여 사업
        편의성을 촉진하기 위해 만들어졌습니다.
      </p>

      <p className="service-left-content-paragraph">
        옴니버스 기술 규정, 2024는 중량 산업부가 통지한 저전압 개폐기 및 제어
        기어를 포함한 모든 기계 및 전기 장비를 다루며 BIS 인증의 Scheme X
        프레임워크 하에서 처리됩니다. 명령은 제조업체 및 수입업체가 발행된
        명령에 따라 운영을 수정할 충분한 시간을 가지도록 2026년 9월 1일부터
        발효됩니다.
      </p>

      <h2 className="service-left-content-heading-three">
        옴니버스 기술 규정 하의 BIS 인증
      </h2>

      <p className="service-left-content-paragraph">
        OTR 2024에 따라 펌프, 컴프레서, 원심분리기, 크레인, 변압기 및 개폐기를
        포함한 기계 및 전기 장비의 제조업체 및 수입업체는 Scheme X 하에서 BIS
        인증을 신청해야 합니다.
      </p>

      <p className="service-left-content-paragraph">
        Scheme X 하에서 제조업체는 다음을 신청할 수 있습니다:
      </p>

      <PointsListWithoutHeading
        points={["BIS 라이선스, 또는", "적합성 인증서 (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        BIS 표준 마크를 사용하는 제품은 적합성 마크로, 사용자에게 제품이
        안전하고 신뢰할 수 있으며 우수한 품질임을 인증하고 보장합니다. 또한
        신뢰의 마크이자 정말 우수한 성능입니다.
      </p>

      <div className="service-left-content-heading-three">
        MSME를 위한 특별 참고
      </div>

      <p className="service-left-content-paragraph">
        다른 많은 부문과 마찬가지로 중소기업 (MSME)은 Scheme X를 준수하고 기계
        및 전기 장비에 대한 BIS 인증을 취득해야 합니다. 규제 요구사항 준수가
        도전적으로 보일 수 있지만 Scheme X 인증서는 다음 이유로 MSME에 가치 추가
        및 이점입니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "정부가 설정한 법적 및 기타 필수 의무 준수를 증명합니다.",
          "제품 평판 및 소비자 신뢰를 높입니다.",
          "더 큰 국내 및 해외 시장 접근을 용이하게 합니다.",
          "경쟁력, 안전 및 품질과 관련하여 MSME의 글로벌 위상을 향상시킵니다.",
        ]}
      />

      <h2 className="service-left-content-heading-three">BIS Scheme X 로고</h2>

      <p className="service-left-content-paragraph">
        BIS Scheme X의 표준 마크는 품질 마크이자 신뢰의 원칙을 형성합니다.
        로고에는 다음이 포함됩니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "로고 상단 부분에 표준 번호가 표시되며;",
          "로고 하단 부분에 라이선스 번호가 CM/L-XXXXXXXXXX 형식으로 표시됩니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        이 마크는 제조업체에게 성공적으로 BIS 라이선스가 발급되었음을
        나타냅니다. 제조업체는 BIS 마크를 배치할 권한을 부여받으며 소비자에게
        제품이 진짜이고 안전함을 보장합니다.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Scheme X 로고"
          title="BIS Scheme X 인증"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">법적 함의</div>

      <p className="service-left-content-paragraph">
        BIS 표준 마크는 신뢰와 품질의 마크입니다. 마크는 유효한 계약이 체결된
        후에만 사용할 수 있습니다. 유효한 계약만이 소유자에게 마크 사용을
        허용합니다. 유효한 계약 없이 마크를 사용하는 것은 인도 헌법 하의
        범죄이며 법적 마크를 사용하는 것과 같습니다. 마크 소유자는 BIS 인증이
        없는 제품에 라이선스 CM/L-XXXXXXXXXX 사용에 대해 엄중한 제한을 받습니다.
      </p>

      <p className="service-left-content-paragraph">
        따라서 모든 생산자는 다음을 의무적으로 수행해야 합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "Scheme X 하에서 유효한 BIS 라이선스를 취득합니다.",
          "인도 표준의 관련 요구사항을 충족합니다; 및",
          "제품에 승인된 BIS 로고를 적절히 부착합니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        이 규제 프레임워크는 소비자 및 사업자 이익을 보호하고 안전, 개방성 및
        신뢰를 강조하는 시장을 육성하기 위해 확장됩니다.
      </p>

      <h2 className="service-left-content-heading-three">
        Scheme-I와 Scheme-X 간 주요 차이점
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "전자제품, 가전제품 및 산업 제품을 포함한 더 넓은 소비재 카테고리를 포함합니다.",
          "이 제도 하에서 인증된 제품은 표준 ISI 마크를 가져야 합니다.",
          "국내 및 외국 제조업체 모두와 관련됩니다.",
          "인도 표준 준수 및 품질을 결정하기 위해 공장 감사 및 샘플 테스트를 포함합니다.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "전기 장비, 기계 및 상당한 임무의 산업 시스템을 포함한 고위험 산업 및 안전 중요 공학 제품을 다룹니다.",
          "Scheme-I보다 더 엄격한 인증입니다. 고급 기술 보고, 준수 확인 및 광범위한 인증 감사를 포함합니다.",
          "추가 준수 문서로 인해 Scheme-X는 Scheme-I보다 더 비쌉니다.",
          "전기 장비 또는 산업 기계를 다루는 모든 사업은 Scheme-X 하에서 인증을 취득해야 합니다.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                기능
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI 마크
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                관리
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                인도 BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                인도 BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                인증 유형
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS 라이선스
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS 인증서 / BIS 라이선스
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                대상 제품
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                소비재
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                기계 및 전기 장비
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                사용 마크
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISI 마크
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Scheme X 하 BIS 표준 마크
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                준수 수준
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                인도 표준 준수
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                고급 기술 및 안전 준수
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">
        Scheme-X가 다루는 제품
      </h2>

      <p className="service-left-content-paragraph">
        Scheme-X는 안전 및 성능에 대한 최고 위험을 가진 제품을 다루며, 다음을
        포함합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "전기 장비: 산업 변압기, 전원 공급 장치 등, 저전압 개폐기 및 제어 기어, 기타 고전압 장치.",
          "중장비: 유압 프레스, 산업 크레인, 자동화 공구 기계 및 대규모 산업용 전문 장비.",
          "생명 중요 장비: 소화기, 압력 용기, 비상 전기 시스템 및 기타 생명 안전 장치 및 시스템.",
          "전문 소비자 및 산업 전자제품: 고급 보호 조치를 통합한 의료 등급 전자 기기 및 장비.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                일련 번호
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                기계 및 전기 장비 설명
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HS 코드
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
                  to="/bis-seukim-x-injeung-peomp-mich-aegche-seunggangi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  액체 처리용 펌프, 액체 엘리베이터 및 (또는) 어셈블리 / 하위
                  어셈블리 / 구성품의 모든 유형
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 및 841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-apchukgi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  컴프레서의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 /
                  구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                및 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-yeolcheori-jangbi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  온도 변화 과정을 포함한 재료 처리 기계의 모든 유형 및 (또는)
                  어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 및
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  액체 및 가스용 원심분리기, 여과 또는 정화 기계의 모든 유형 및
                  (또는) 어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 및 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-pojang-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  병 충전, 밀봉, 라벨링, 포장 또는 랩핑 기계의 모든 유형 및
                  (또는) 어셈블리/하위 어셈블리/구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 및 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-keurein"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  크레인의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리/구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                및 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-geonseol-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  건설, 토공, 채굴용 기계의 모든 유형 및 (또는) 어셈블리 / 하위
                  어셈블리/구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 및 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-jigjo-gi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  직조 기계 (직기)의 모든 유형 및 (또는) 어셈블리/하위 어셈블리
                  / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 및 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-jasu-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  자수 제작 기계의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리
                  / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 및 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-geumsog-jeoldan-gongjag-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  제목 8456~8461 하에 포함된 금속 절단 기계 도구의 모든 유형 및
                  (또는) 어셈블리 / 하위 어셈블리/구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 및 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-gongjag-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  석재, 세라믹, 콘크리트, 석면 시멘트 또는 유사한 광물 유리
                  가공용 기계 도구의 모든 유형 및 (또는) 어셈블리 / 하위
                  어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 및 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-gomu-mich-peullaseutig-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  고무 및 플라스틱 가공 기계의 모든 유형 및 (또는) 어셈블리 /
                  하위 어셈블리 / 구성품
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
                  to="/bis-seukim-x-injeung-gonggong-sa-eob-mich-gigye-gigu"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  공공 사업 및 건물용 기계와 챕터 84의 다른 곳에 지정되지 않거나
                  포함되지 않은 개별 기능을 가진 기계 및 기계 장치의 모든 유형
                  및 (또는) 어셈블리/하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 및 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-gie-gearing-jeonseung-yosu"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  기어 및 기어링, 톱니바퀴, 체인 스프로킷, 변속 요소 볼 또는
                  롤러 나사, 기어박스 및 속도 변경기, 토크 컨버터를 포함한 모든
                  유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 및 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-hojeon-jeongi-gigye"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  발전기 등과 같은 회전 전기 기계의 모든 유형 및 (또는) 어셈블리
                  / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 및 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-dijel-baljeongi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  디젤 발전기의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 /
                  구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 및 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-byeonab-gi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  변압기의 모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 및 850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-jeonlyeog-bandojeo-byeonhwan-gi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  전력 반도체 변환기의 모든 유형 및 (또는) 어셈블리 / 하위
                  어셈블리 / 구성품
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
                  to="/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-iha"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  1000볼트 이하 전압에서 작동하는 개폐기 및 제어 기어 장비의
                  모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 및 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-seukim-x-injeung-gaepye-gi-mich-jejeo-jangbi-1000-bolteu-chogo"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  1000볼트 초과 전압에서 작동하는 개폐기 및 제어 기어 장비의
                  모든 유형 및 (또는) 어셈블리 / 하위 어셈블리 / 구성품
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 및 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <div className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            제품별 안전 표준
          </div>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            기계 및 전기 장비 설명
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
            PDF 다운로드
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        BIS Scheme - X 하의 안전 표준
      </h2>

      <p className="service-left-content-paragraph">
        단순한 법적 필요 이상으로 BIS Scheme - X 인증은 안전, 품질 및 신뢰성의
        약속을 제공합니다. 국가 및 국제 규범에 대한 엄격한 준수를 포함하는 이
        인증은 사용자에게 제공되는 기계 및 전기 장치가 안전하고 환경 친화적이며
        기술적으로 건전함을 보장합니다.
      </p>

      <p className="service-left-content-paragraph">
        Scheme - X 하에서 인증하기 위해 제조업체는 다음 주요 안전 구성 요소를
        준수해야 합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "전기 안전: 적용 가능한 IEC 및 인도 표준 준수. 단락, 전기 충격, 절연 파괴, 보호 접지 손실, 주변 가연성 물질 점화 및 화재에 대한 보호를 제공하는 인증.",
          "기계 안전: 기계의 구조적 무결성 및 이동 부품과 신규 재료의 무결성 평가. 기계적 응력, 마모 및 운영 위험에 안전하게 노출되도록 장비를 보장합니다.",
          "화재 안전: 화재 저항 재료로 설계 및 제작된 재료 사용. 화재 관련 위험을 제어하기 위한 화염 전파 성능 표준 준수.",
          "환경 준수: 장비 생산에 제어된 전력 및 친환경 재료 사용. 제조업체가 장비의 환경 영향을 줄이도록 장려합니다.",
          "품질 관리: 사전 설정된 표준 및 규범을 유지하기 위한 생산 프로세스에 대한 지배적 및 자율적 제어. 공장 조건 규제에 초점, 프로세스 감사 및 지속 준수 포함.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Scheme-X 하의 규제 표준
      </h2>

      <p className="service-left-content-paragraph">
        제조업체는 국제 표준과 조화된 관련 인도 표준을 준수해야 하며, 다음을
        포함합니다:
      </p>

      <h3 className="service-left-content-heading-three">Type A 표준:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – 기계 안전: 설계, 위험 평가 및 위험 감소 일반 원칙.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Type B 표준:</h3>

      <PointsListWithoutHeading
        points={["옴니버스 기술 규정 (OTR) 명령, 2024의 제2 부록에 설명됨."]}
      />

      <h3 className="service-left-content-heading-three">Type C 표준:</h3>

      <PointsListWithoutHeading
        points={["OTR 명령, 2024의 제3 부록에 설명됨."]}
      />

      <h3 className="service-left-content-heading-three">
        IS/IEC 60947 시리즈:
      </h3>

      <PointsListWithoutHeading
        points={[
          "여러 부품 및 섹션에서 저전압 개폐기 및 제어 기어를 다룹니다.",
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
