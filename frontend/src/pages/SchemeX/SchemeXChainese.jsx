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
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXChinese = () => {
  return (
    <div className="relative">
      {/* Scheme X Chinese Meta Tags */}
      <SchemeXChineseMetaTags />
      {/* Scheme X Chinese Breadcrumb */}
      <SchemeXChineseBreadcrumb />
      {/* Scheme X Chinese Hero Section */}
      <SchemeXChineseHero />
      {/* Scheme X Chinese Index Section */}
      <SchemeXChineseIndex />
      {/* Scheme X Chinese Main Content Section */}
      <SchemeXChineseMainContent />
      {/* Footer Chinese Section */}
      <FooterChinese />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXChinese;

const SchemeXChineseMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "印度BIS方案X认证",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>BIS方案X认证 | 机械和电气设备安全</title>
      <meta
        name="description"
        content="BIS方案X认证是确保低压开关设备、控制设备、机械和电气设备质量和安全所必需的。"
      />
      <meta
        name="keywords"
        content="方案X, BIS方案X, BIS方案X认证, 方案X认证, 机械认证, 电气设备认证"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="BIS方案X认证 | 机械和电气设备安全" />
      <meta
        property="og:description"
        content="BIS方案X认证是确保低压开关设备、控制设备、机械和电气设备质量和安全所必需的。"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:title" content="BIS方案X认证 | 机械和电气设备安全" />
      <meta
        name="twitter:description"
        content="BIS方案X认证是确保低压开关设备、控制设备、机械和电气设备质量和安全所必需的。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};
const SchemeXChineseBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">首页</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>印度BIS方案X认证</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXChineseHero = () => {
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
              认证专长
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS方案X认证
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS方案X认证涵盖综合技术法规（OTR）下的机械、电气设备以及组件装配和子装配。
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
                查看服务
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SchemeXChineseHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXChineseHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (
      path.includes("/zh/yin-du-bis-fang-an-x-ren-zheng") ||
      path.includes("/indian-bis-certification-under-scheme-x")
    )
      return "方案X";
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
        title: "请输入有效的全名。",
        description: "姓名应仅包含字母和空格。",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "请输入有效的电子邮件地址。",
        description: "请检查您的电子邮件格式是否正确",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "请输入有效的电话号码",
        description: "电话号码应为（8-15位数字）",
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
        title: "联系表单提交成功！",
        description: "感谢您联系我们。我们的团队将很快与您联系。",
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
        title: errorMessage || "提交联系表单详细信息失败！",
        description: "出了点问题。请检查您的详细信息并重试。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          联系我们
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        预约咨询
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        想联系我们的团队并安排通话？
        <span className="text-black"> 立即尝试</span>
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
            placeholder="全名 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="电子邮件地址 *"
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
            placeholder="联系电话 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="公司名称 *"
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
            placeholder="产品名称 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="所需认证*"
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
              <span>发送中</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>预约咨询</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const SchemeXChineseIndex = () => {
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
    overview: "概述",
    process: "流程",
    documents: "文件",
    conclusion: "结论",
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

const SchemeXChineseMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentChinese />
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
    // {
    //   code: "zh",
    //   name: "Chinese",
    //   flag: "https://flagcdn.com/w320/cn.png",
    //   path: "/zh/yin-du-bis-fang-an-x-ren-zheng",
    // },
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
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              我们的服务
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                印度最佳证书咨询公司
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
              外国制造的BIS标志（ISI许可证）
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
              CDSCO注册认证
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
              BIS（CRS）注册
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
              塑料废物管理
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
              EPR证书认证
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
              LMPC证书认证
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
              BIS注册证书
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
              印度制造商的ISI标志（BIS）
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
          <div className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            产品安全标准
          </div>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            机械和电气设备描述
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"按描述或HS编码搜索..."}
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
    description: "所有类型的液体处理泵、液体提升机",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "所有类型的压缩机",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "通用和工业应用往复式空气压缩机的技术供应条件\n通用和工业应用空气螺杆压缩机（油浸式）的技术供应条件",
  },
  {
    id: 3,
    description: "所有类型的通过涉及温度变化过程处理材料的机械",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "或用于液体和气体的净化机械",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description: "所有类型的用于填充、封闭、密封、贴标签、包装或包裹的机械",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "所有类型的起重机",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "所有应用电动桥式起重机和龙门起重机实践规范\n动力驱动移动式起重机规范\n起重机 - 装载起重机的安全要求",
  },
  {
    id: 7,
    description: "所有类型的建筑机械",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "土方机械安全 第7部分 铲运机\n土方机械 平地机要求\n土方机械安全 第12部分 摊铺机",
  },
  {
    id: 8,
    description: "所有类型的织机",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title: "纺织机械安全要求 第6部分 织物制造机械",
  },
  {
    id: 9,
    description: "所有类型的刺绣机械",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "纺织机械安全要求 第1部分 通用要求",
  },
  {
    id: 10,
    description: "所有类型的金属切削机床",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "机床安全 压力机 第1部分 通用安全要求\n机床安全 电火花加工机床\n机床安全 车床\n机床安全 冷金属锯床\n机床安全 加工中心、铣床、传输机床 第1部分 安全要求",
  },
  {
    id: 11,
    description:
      "所有类型的用于加工石材、陶瓷、混凝土、石棉水泥或类似矿物玻璃的机床",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "所有类型的橡胶和塑料加工机械",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title: "塑料和橡胶机械 - 注塑成型机 - 安全要求",
  },
  {
    id: 13,
    description:
      "所有类型的机器，包括公共工程和建筑用机器以及具有单独功能但未指定的机械和机械器具",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "所有类型的齿轮和传动装置、齿轮、链轮、传动元件滚珠或滚柱丝杠、齿轮箱和变速器，包括扭矩转换器及其组件/子组件/部件",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "所有类型的旋转电机，如发电机等。建筑和具有单独功能但未指定的机械和机械器具",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "汽轮机型发电\n往复式内燃机驱动的交流发电机 - 规范：第1部分\n额定功率高达20 kVa的交流发电机\n往复式内燃机驱动的交流发电机 - 规范：第2部分\n额定功率超过20 kVa且高达1250 kVa的交流发电机",
  },
  {
    id: 16,
    description: "所有类型的柴油发电机",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "往复式内燃机驱动的交流发电机组：第2部分 发动机\n往复式内燃机驱动的交流发电机组：第3部分 发电机组用交流发电机\n往复式内燃机驱动的交流发电机组：第4部分 控制装置和开关设备\n往复式内燃机驱动的交流发电机组 第5部分 发电机组\n往复式内燃机驱动的交流发电机组：第8部分\n往复式内燃机驱动的交流发电机组：第12部分 安全应急电源",
  },
  {
    id: 17,
    description: "所有类型的变压器",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "变压器、电抗器、电源单元和类似产品的安全，适用于高达1100 V的供电电压 第2-4部分：隔离变压器和包含电源单元的特定要求和测试\n电力变压器、电源单元和类似产品的安全：第2部分特定要求：第6节 通用安全隔离变压器\n电力变压器、电源电抗器和类似产品的安全：第2-7部分 玩具用变压器和电源的特定要求和测试\n电力变压器：第1部分 通用\n电力变压器：第6部分 电抗器",
  },
  {
    id: 18,
    description: "所有类型的功率半导体转换器",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title: "半导体转换器第1部分通用要求和线路换向转换器第1节基本要求规范 第7条",
  },
  {
    id: 19,
    description:
      "所有类型的在不超过1000伏电压下运行的开关设备和控制设备及其组件/子组件/部件",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title: "低压开关设备和控制设备组件：第3部分 供普通人员操作的配电盘（DBO）",
  },
  {
    id: 20,
    description:
      "所有类型的在超过1000伏电压下运行的开关设备和控制设备及其组件/子组件/部件",
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
        类型C（处理特定机器或机器组详细安全要求的机器安全标准）
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                序号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                机械和电气设备描述
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HS编码
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                印度标准/印度标准具体条款
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                印度标准标题
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
                  No results found for &quot;{searchQuery}&quot;
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
    title: "机械安全 机械电气设备 第1部分 通用要求",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "机械安全 - 机械电气设备 第11部分 电压超过1000 V交流或1500 V直流且不超过36 kV的设备要求",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title: "电气-电子-可编程电子安全相关系统的功能安全 第1部分 通用要求",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "外壳提供的防护等级（IP代码）",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title: "机械安全 - 空气传播有害物质排放的评估 - 第1部分：测试方法的选择",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "机械安全 空气传播有害物质排放的评估 第2部分 测量给定污染物排放率的示踪气体法",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第3部分：测量给定污染物排放率的试验台方法",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第4部分：测量排气系统捕获效率的示踪方法",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第5部分：测量无管道出口空气净化系统质量分离效率的试验台方法",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第6部分：测量有管道出口空气净化系统质量分离效率的试验台方法",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第7部分：测量污染物浓度参数的试验台方法",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "机械安全 - 空气传播有害物质排放的评估 - 第8部分：测量污染物浓度参数的房间方法",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title: "机械安全 - 空气传播有害物质排放的评估 - 第9部分：去污指数",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title: "液压流体动力 - 系统及其组件的通用规则和安全要求",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title: "气动流体动力 - 系统及其组件的通用规则和安全要求",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "土方机械 - 防护装置 - 定义和要求",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title: "机械安全 - 安全相关电气电子和可编程电子控制系统的功能安全",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "机械安全 - 电敏保护设备 第2部分 使用有源光电保护装置（AOPD）设备的特定要求",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title: "机械安全 - 指示、标记和驱动 第3部分 驱动器的位置和操作要求",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title: "机械安全 - 机械电气设备 第32部分 起重机械的要求",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title: "机械安全 - 指示、标记和驱动 第1部分 视觉、听觉和触觉信号的要求",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title: "机械安全 - 电敏保护设备 第1部分 通用要求和测试",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title: "机械安全 安全相关应用中通信系统使用指南",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title: "机械安全 - 指示、标记和驱动 第2部分 标记要求",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "机械安全 防火和消防",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title: "机械安全 机械设计的卫生要求",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "机械安全 机械的永久性通道方式 第1部分 固定通道方式的选择和通道的通用要求",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title: "机械安全 机械的永久性通道方式 第2部分 工作平台和走道",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title: "机械安全 机械的永久性通道方式 第3部分 楼梯、阶梯和护栏",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title: "机械安全 机械的永久性通道方式 第4部分 固定式梯子",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title: "机械安全 控制系统的安全相关部分 第1部分 设计通用原则",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title: "机械安全 控制系统的安全相关部分 第2部分 验证",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title: "机械安全 防护装置 固定式和移动式防护装置设计和构造的通用要求",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title: "机械安全 与防护装置相关的联锁装置 设计和选择原则",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "机械安全 防止意外启动",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title: "机械安全 防止上下肢触及危险区域的安全距离",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title: "机械安全 相对于人体部位接近速度的安全防护装置定位",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title: "机械安全 避免人体部位被挤压的最小间隙",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title: "机械安全 双手控制装置 设计和选择原则",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "机械安全 急停功能 设计原则",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title: "机械安全 与产品偶然接触的润滑剂 - 卫生要求",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "机械安全 - 降低机械排放的有害物质对健康造成的风险 - 第1部分：机械制造商的原则和规范",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "机械安全 - 降低机械排放的有害物质对健康造成的风险 - 第2部分：导致验证程序的方法",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "机械安全 - 压敏保护装置 - 第1部分：压敏垫和压敏地板设计和测试的通用原则",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "机械安全 - 压敏保护装置 - 第2部分：压敏边缘和压敏杆设计和测试的通用原则",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "机械安全 - 压敏保护装置 - 第3部分：压敏缓冲器、板、线和类似装置设计和测试的通用原则。",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title: "人机工程学 - 听觉和视觉危险及信息信号系统",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title: "显示器和控制驱动器设计的人机工程学要求 第2部分 显示器",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title: "显示器和控制驱动器设计的人机工程学要求 第3部分 控制驱动器",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title: "机械安全 - 机械工作台设计的人体测量要求",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title: "人机工程学 - 计算机人体模型和身体模板 第1部分 通用要求",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title: "人机工程学 - 听觉和视觉危险及信息信号系统",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title: "工业自动化系统 - 集成制造系统的安全 - 基本要求",
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
        类型B（处理一个安全方面或多种可在广泛机械中使用的安全保护装置的通用安全标准）
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                序号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS编号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                标题
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
                  No results found for &quot;{searchQuery}&quot;
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
              上一页
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              第 {currentPage} 页，共 {totalPages} 页
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              下一页
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
      question: "1. BIS认证下的方案X是什么？",
      answer:
        "方案X是印度BIS为机械和电气设备引入的符合性评估方案。它确保符合综合技术法规中规定的严格安全和技术标准。",
    },
    {
      question: "2. 方案X与ISI标志认证不同吗？",
      answer:
        "是的。ISI标志通常用于消费品和基本产品合规性，而方案X适用于需要通过BIS证书或BIS许可证进行高级测试和认证的复杂和工业级产品。",
    },
    {
      question: "3. 谁需要申请方案X认证？",
      answer:
        "综合技术法规下列出的机械和电气设备的制造商和进口商必须申请方案X并获得有效的BIS认证，才能在印度合法销售或分销其产品。打算在印度销售产品的全球制造商或外国制造商也必须遵守这些法规。",
    },
    {
      question: "4. BIS方案X认证的费用是多少？",
      answer:
        "方案X的费用包括申请费、认证费、技术文件审查费、工厂检查费和产品测试费。平均而言，申请费用从₹2,000开始，根据产品复杂程度可能会增加。更多详情请联系我们：admin@bis-certifications.com。",
    },
    {
      question: "5. 在方案X下获得BIS许可证需要多长时间？",
      answer:
        "时间表因文件、测试要求和工厂检查而异。通常，对于印度制造商，从成功BIS注册和申请提交之日起需要4-6周，对于外国制造商需要60-90天。",
    },
    {
      question: "6. 中小微企业也可以申请方案X下的BIS认证吗？",
      answer:
        "绝对可以。事实上，印度BIS鼓励中小微企业申请方案X下的BIS许可证或符合性证书，以提高工业部门的质量、合规性和竞争力。",
    },
    {
      question: "7. 方案X下的BIS认证对出口是强制性的吗？",
      answer:
        "不是。专门为出口制造的产品在综合技术法规下是豁免的。但是，面向印度市场的产品必须在方案X下获得认证。",
    },
    {
      question: "8. 方案X下BIS许可证的有效期是多长？",
      answer:
        "方案X下的BIS许可证通常有效期为3-6年，必须相应续签。续签涉及支付年度BIS认证费，并可能根据产品范围或标准的变化需要进行重新评估。",
    },
    {
      question: "9. 外国制造商可以申请方案X认证吗？",
      answer:
        "是的，外国制造商可以通过授权印度代表申请方案X认证。印度BIS要求进行工厂检查，对于外国申请人可能需要3天，以及标准的BIS注册和测试流程。",
    },
    {
      question: "10. 什么是技术文件，为什么需要它？",
      answer:
        "技术文件是方案X下要求的详细合规档案。它包括制造过程、产品详情、测试报告和质量控制文件。它在BIS认证过程中支持产品符合相关印度标准。",
    },
    {
      question: "11. 方案X与综合技术法规有什么关系？",
      answer:
        "综合技术法规要求在印度特定类别的机械和电气设备使用方案X。法规下列出的产品必须在方案X下获得认证，才能获得有效的BIS证书或BIS许可证。",
    },
    {
      question: "12. 方案X下的BIS证书可以被撤销吗？",
      answer:
        "是的。如果在监督期间发现不合规或产品未能满足所需的印度标准，印度BIS可以暂停或取消方案X下的BIS许可证或证书。",
    },
    {
      question: "13. 方案X下BIS许可证和BIS证书有什么区别？",
      answer:
        "BIS许可证通常颁发给印度制造商，而BIS符合性证书（CoC）通常颁发给外国制造商或用于特定情况。两者都服务于同一目的——确保方案X下的产品合规性。",
    },
    {
      question: "14. 方案X下认证的产品是否允许使用ISI标志？",
      answer:
        "不允许。方案X下的产品不携带ISI标志。相反，它们显示与认证方案相关的BIS标准标记，由印度BIS管理。",
    },
    {
      question: "如何知道我的机械是否需要方案X认证？",
      answer:
        "查看综合技术法规中的官方列表，或咨询BIS顾问以验证您的机械是否属于强制性方案X认证要求。",
    },
  ];

  return (
    <section id="faqs" className="my-2 scroll-mt-20" aria-label="常见问题">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          常见问题
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          找不到您要找的答案？{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            联系我们！
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

        <ServiceAuthorChinese />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">结论</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">结论</h2>

      <p className="service-left-content-paragraph">
        BIS方案X认证对于维护低压开关设备和控制设备、机械和电气设备的安全性、可靠性和质量仍然至关重要。对于适用于加工石材、陶瓷、混凝土、沥青水泥和矿物玻璃的机床制造商，BIS方案X认证是强制性的。
      </p>

      <p className="service-left-content-paragraph">
        通过履行这些义务，制造商保证产品符合性，增强消费者信心，并提高其在市场上的信誉。方案X确保生产尽可能顺利，满足全球安全标准，并获得认可的品牌获得良好声誉。
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">文件</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS方案X认证所需的关键文件
      </h2>

      <p className="service-left-content-paragraph">
        为了简化BIS认证流程，制造商需要在注册阶段收集并提交以下文件：
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                序号
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                所需文件
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                详情
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                名称和地址（工厂和办公室）
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                制造场地和办公室的完整法定名称和实际地址
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PAN和GST信息
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                永久账户号码（PAN）和GST注册详情
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                联系方式
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                用于官方通信的电子邮件地址、手机号码和固定电话
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                管理详情
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                主要管理人员和授权签字人的姓名、职务和身份证件
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                产品描述
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                综合技术法规第一附表所涵盖的机械和设备详情
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                产品分类
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                申请BIS许可证的具体类型、型号和品种
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                技术文件
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                与产品相关的所有技术详情以及制造单位的详情。
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        方案X证书的有效期和续签流程：
      </h3>

      <PointsListWithoutHeading
        points={[
          "许可证有效期和续签：方案X下的BIS许可证为连续生产颁发，有效期为3至6年。有效期届满后，可通过提交续签申请、所需费用和合规文件，续签相同期限。",
          "符合性证书（CoC）：CoC为一次性生产颁发，适用于国内和海外制造商。由于它仅适用于单一批次，CoC没有续签选项。",
          "产品测试报告：当测试报告在制造商实验室准备时，BIS官员在工厂检查期间通过进行见证测试来验证。如果在分包设施进行测试，这些设施也会被BIS检查和批准。",
          "续签申请审查：为了保持不间断的有效性，制造商需要继续遵守方案X的规定。根据BIS符合性评估法规第8条，印度标准局以VIII表格处理续签申请。只有在验证了令人满意的合规性后才进行续签。",
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
        <span className="service-left-content-index-heading">流程</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        获得BIS方案X认证的步骤
      </h2>

      <p className="service-left-content-paragraph">
        在方案X下颁发BIS证书是一项系统性活动，旨在确保制造商满足适用的安全、质量和合规标准。流程如下：
      </p>

      <PointsListWithoutHeading
        points={[
          "验证范围：确定您的产品是否在方案X的范围内，以及是否符合BIS安全要求。检查相关的印度标准和技术附表，以确定您是否能够合规。",
          "准备所需文件：制造商需要收集并整理以下文件：注册业务证书、设计基础文件、工厂和工艺流程文件、服务测试报告（如适用）、质量保证和控制文件。",
          "构建技术文件：技术文件是证书延期申请不可或缺的一部分。它应包含：产品技术规格、方法和技巧信息、合规和测试文件、产品的限制和预期用途、质量保证文件、原材料可追溯性、分包可追溯性以及其他证据、符合框架范围内的标准。",
          "申请表：申请表可以通过BIS网站以电子方式提交到指定地点。必须结算申请费。其他验证申请的文件应包含在内以便进行适当评估。",
          "工厂检查：对于国内制造商：检查最多进行2天。对于外国制造商：检查最多进行3天（由于额外请求可能会增加天数）。",
          "产品样品测试：样品测试可以在制造商现场进行，也可以在分包给BIS认可的实验室进行（允许外包测试）。测试证明符合相关印度标准。",
          "颁发认证：如果产品满足所有条件，BIS为每个产品授予许可证或符合性证书（CoC）。制造商可以在所有认证产品上自由使用BIS标准标记。",
        ]}
      />

      <p className="service-left-content-paragraph">
        该文件作为产品声明的技术和统计证据，证明符合安全追溯标准。
      </p>

      <p className="service-left-content-paragraph">
        在检查期间，BIS官员将：分析技术文件，评估制造方法以及支持的质量保证系统，观察产品测试，确定不合规情况（如有）并提供补救措施。访问后向申请人提供详细的审计报告。
      </p>

      <p className="service-left-content-paragraph">
        该策略保持与BIS标准的合规性，是对印度和国际合规性的认可，使行业在消费者对安全和质量的信任方面处于领先地位。
      </p>

      <h2 className="service-left-content-heading-three">国内制造商程序</h2>

      <p className="service-left-content-paragraph">
        国内制造商通过获得方案X下的BIS许可证采用直接方法。要遵循的直接步骤包括：
      </p>

      <PointsListWithoutHeading
        points={[
          "文件准备：必须收集和准备与方案相关的所有文件。",
          "申请执行：申请应与相关费用一起提交。",
          "申请查询：提交的任何申请都要经过审查，BIS会生成一系列后续问题。",
          "指定审计员：审计员由BIS指定，但被提名的个人需要支付审计费用。",
          "工厂审计：在现场进行审查和调查工作审计，并收集相关样品。",
          "样品评估：样品在BIS认可的实验室进行评估。申请人支付所有BIS认可的实验室测试费用。",
          "许可证和标记费用支付：向BIS完成所需付款。",
          "许可证授予：BIS颁发允许使用BIS标记的证书。",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>典型时间表：</strong>
        根据BIS的惯例，需要接近90个工作日。这是在没有任何关键不合规情况的前提下。
      </p>

      <h2 className="service-left-content-heading-three">外国制造商程序</h2>

      <p className="service-left-content-paragraph">
        与国内制造商不同，申请方案X下BIS证书的外国制造商需要遵守更严格的过程和额外步骤。程序详述如下。
      </p>

      <PointsListWithoutHeading
        points={[
          "文件准备：已注册业务、产品和工厂布局、测试报告以及相关的质量管理文件都必须放在配置的文件夹中以符合要求。",
          "申请提交：申请、所需费用和所有申请材料通过BIS在线门户提交。",
          "申请记录和审查：BIS记录申请并进行文件检查。BIS可能存在的任何问题必须由申请人及时解决。",
          "审计员指定和付款：BIS负责工厂检查的审计员被分配给申请人进行审计。申请人必须根据适用法律支付已进行审计的设定费用。",
          "审计准备：外国制造商负责审计的后勤安排，如为BIS官员安排和支付签证签发、机票和酒店预订。",
          "工厂审计和样品选择：BIS官员进行为期3天的工厂审计（如果需要更多申请，可以增加天数）。",
          "产品测试：选定的样品被送往BIS认可的实验室进行测试。在某些情况下，测试被外包给其他测试实验室，因此通过主要测试实验室结算付款。",
          "标记和许可证费用支付：在成功的审计和测试结果后，制造商必须向BIS支付所需的标记费和许可证费。",
          "许可证授予：一旦所有条件都完全满足，BIS颁发许可证/符合性证书（CoC）。一旦确认合规性，BIS允许制造商在其他认证产品上使用BIS标准标记。",
        ]}
      />

      <p className="service-left-content-paragraph">
        审计包括：评估质量保证系统和制造过程中的工作流程，评估合规性和技术文件，独立测试样品选择。
      </p>

      <p className="service-left-content-paragraph">
        根据BIS的惯例，整个过程大约需要6-7个月。
      </p>

      <h3 className="service-left-content-heading-three">
        外国制造商的关键附加要点：
      </h3>

      <PointsListWithoutHeading
        points={[
          "FMCS分类：所有外国制造商在外国制造商认证方案下被分类为'大型'。此分类与正在进行的运营规模无关。",
          "授权印度代表（AIR）：每个外国制造商都需要指定一个授权印度代表（AIR）。AIR是外国申请人和BIS之间的主要联系点，负责合规、协作和维护BIS许可证。",
          "工厂审计：外国制造商的工厂审计是全面的，通常持续3天。此外，在提交多个产品申请的情况下需要更多天数。",
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
        <span className="service-left-content-index-heading">概述</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS方案X认证简介</h2>

      <p className="service-left-content-paragraph">
        印度标准局（简称BIS）于2022年3月16日推出了"方案X"，旨在提高印度产品安全和质量的合规性。印度和外国制造商可以为机械和电气设备、组件（如装配件、子装配件）以及方案X附表II中指定的工具申请BIS认证，并在出口、销售或分销到印度之前获得认证。
      </p>

      <p className="service-left-content-paragraph">
        在方案X下，制造商可以为低压开关设备和控制设备、机械和电气设备申请BIS许可证或符合性证书（CoC）。一旦制造商获得认证，他们可以使用BIS标准标记，表明其产品符合印度制定的标准。
      </p>

      <p className="service-left-content-paragraph">
        该认证在推广产品和遵守印度标准和政府法规的同时，有助于建立消费者对认证产品的信任和信心。
      </p>

      <h2 className="service-left-content-heading-three">什么是方案X认证？</h2>

      <p className="service-left-content-paragraph">
        方案X是根据BIS符合性评估法规2018年制定的产品认证方案，后来在BIS符合性评估（修订）法规2022年下进行了简化。
      </p>

      <p className="service-left-content-paragraph">
        主要目标是将印度安全和质量标准提升到全球标准，特别是在工业机械和电气设备方面。在此方案下在印度制造或进口到印度的产品需要经过严格的审查和评估，以证明技术、安全以及性能标准。
      </p>

      <p className="service-left-content-paragraph">
        方案X认证原始范围内的规定已根据新发布的机械和电气设备安全（综合技术法规）令2024年进行了修订和扩展，该令由重工业部管辖，并由BIS生效。该令将于2026年9月1日生效，涵盖广泛的机械和电气设备，如液体处理泵、压缩机、起重机、旋转电机、变压器以及开关设备和控制设备。
      </p>

      <p className="service-left-content-paragraph">
        根据2016年印度标准局法案第16条，此类机械或设备的装配件、子装配件和组件也是认证范围的一部分。
      </p>

      <p className="service-left-content-paragraph">
        此外，根据1989年CMVR规则（建筑和制造阀门法规），方案X管辖下的Bowser和其他类型的建筑设备，确保市场不会接触到缺乏必要安全和技术标准的设备。
      </p>

      <h2 className="service-left-content-heading-three">
        综合技术法规（OTR）
      </h2>

      <p className="service-left-content-paragraph">
        重工业部通过2024年8月28日的电子公报通知发布了"安全令综合技术法规（机械和电气设备安全）"。这项创新法规旨在改善机械、电气设备及其装配件、子装配件和组件在2016年BIS法规方案X下的安全性、质量和合规性。
      </p>

      <p className="service-left-content-paragraph">
        在OTR下，所有类别的机械和电气设备及其所有部件和组件都包括在内。但是，明确排除了一些类别：
      </p>

      <PointsListWithoutHeading
        points={[
          "根据2016年印度标准局法案第16条发布的任何其他命令下的任何机械和组件。",
          "仅用于出口的国内制造商品和物品。",
          "根据道路运输和公路部（MoRTH）规定的1989年CMVR规则下的建筑机械和设备。",
        ]}
      />

      <p className="service-left-content-paragraph">
        这些例外是为了促进合规性并避免不必要的法规重复，以促进营商便利。
      </p>

      <p className="service-left-content-paragraph">
        2024年综合技术法规涵盖所有机械和电气设备，包括重工业部通知的低压开关设备和控制设备，将在BIS认证的方案X框架下处理。该令将于2026年9月1日生效，以便制造商和进口商有足够时间根据发布的命令修改其运营。
      </p>

      <h2 className="service-left-content-heading-three">
        综合技术法规下的BIS认证
      </h2>

      <p className="service-left-content-paragraph">
        根据OTR
        2024，包括泵、压缩机、离心机、起重机、变压器和开关设备在内的机械和电气设备的制造商以及进口商必须申请方案X下的BIS认证。
      </p>

      <p className="service-left-content-paragraph">
        在方案X下，制造商可以选择申请：
      </p>

      <PointsListWithoutHeading
        points={["BIS许可证，或", "符合性证书（CoC）"]}
      />

      <p className="service-left-content-paragraph">
        带有BIS标准标记的产品是符合性标记，证明并向用户保证产品安全、可靠且质量良好。它也是信任和真正良好性能的标记。
      </p>

      <div className="service-left-content-heading-three">中小微企业特别说明</div>

      <p className="service-left-content-paragraph">
        与许多其他行业一样，微型、小型和中型企业（MSME）也必须遵守方案X并为其机械和电气设备获得BIS认证。虽然遵守监管要求可能看起来具有挑战性，但方案X证书对MSME来说是一个增值和优势，原因如下：
      </p>

      <PointsListWithoutHeading
        points={[
          "证明遵守政府制定的法律和其他必要义务。",
          "提高产品的声誉和消费者信任。",
          "促进进入更大的国内和海外市场。",
          "提高MSME在全球的竞争力、安全性和质量方面的地位。",
        ]}
      />

      <h2 className="service-left-content-heading-three">BIS方案X标志</h2>

      <p className="service-left-content-paragraph">
        方案X的BIS标准标记构成了质量标记和信任原则。标志包含：
      </p>

      <PointsListWithoutHeading
        points={[
          "标准编号显示在标志的上部；以及",
          "许可证编号显示在标志的下部，格式为：CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        此标记表示已成功向制造商颁发BIS许可证。它授权制造商使用BIS标记，并向消费者保证产品是真实和安全的。
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Scheme X logo"
          title="BIS Scheme X Certification"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">法律影响</div>

      <p className="service-left-content-paragraph">
        BIS标准标记是信任和质量的标记。只有在有效合同到位后才能使用该标记。只有有效合同才允许所有者使用该标记。在没有有效合同的情况下使用该标记是违反印度宪法的违法行为，等同于拥有法律标记。标记的所有者在使用许可证CM/L-XXXXXXXXXX用于没有BIS认证的产品时受到严格限制。
      </p>

      <p className="service-left-content-paragraph">
        因此，每个生产者都有义务：
      </p>

      <PointsListWithoutHeading
        points={[
          "获得方案X下的有效BIS许可证。",
          "满足印度标准的相关要求；以及",
          "在产品上正确粘贴批准的BIS标志。",
        ]}
      />

      <p className="service-left-content-paragraph">
        这一监管框架旨在保护消费者和商人的利益，培育一个强调安全、开放和信心的市场。
      </p>

      <h2 className="service-left-content-heading-three">
        方案I和方案X之间的主要区别
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "包括更广泛的消费产品类别，如电子产品、家用电器，甚至工业产品。",
          "在此方案下颁发证书的产品必须具有标准ISI标记。",
          "涉及国内和外国制造商。",
          "涉及工厂审计和样品测试，以确定质量和是否符合印度标准。",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "针对高风险工业和安全关键工程产品，包括电气设备、机械和大量工业系统。",
          "认证比方案I更加严格。它涉及先进的技术报告、合规性检查和广泛的认证审计。",
          "由于额外的合规文件，方案X往往比方案I更昂贵。",
          "任何处理电气设备或工业机械的企业都必须获得方案X下的认证。",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                特征
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI标记
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                方案X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                管理方
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                印度BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                印度BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                认证类型
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS许可证
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS证书 / BIS许可证
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                目标产品
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                消费品
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                机械和电气设备
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                使用的标记
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISI标记
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS标准标记（方案X下）
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                合规级别
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                印度标准合规
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                高端技术和安全合规
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">方案X涵盖的产品</h2>

      <p className="service-left-content-paragraph">
        方案X涵盖对安全和性能风险最高的产品，包括：
      </p>

      <PointsListWithoutHeading
        points={[
          "电气设备：工业变压器、电源单元等，低压开关设备和控制设备，以及其他高压设备。",
          "重型机械：液压机、工业起重机、自动化机床以及大型工业的专业设备。",
          "生命关键设备：灭火器、压力容器、应急电气系统以及其他生命安全的设备和系统。",
          "专业消费和工业电子产品：采用先进保护措施的医疗级电子设备和设备。",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                序号
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                机械和电气设备描述
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HS编码
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
                  to="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的液体处理泵、液体提升机及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-compressors"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的压缩机及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-heat-treatment-equipment"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的通过涉及温度变化过程处理材料的机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的用于液体和气体的离心机、过滤或净化机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-packing-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的用于填充、封闭、密封、贴标签、包装或包裹的机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-cranes"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的起重机及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-construction-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的建筑、土方、采矿机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-weaving-machines-looms"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的织机及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-embroidery-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的刺绣机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的金属切削机床（标题8456至8461）及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的用于加工石材、陶瓷、混凝土、石棉水泥或类似矿物玻璃的机床及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的橡胶和塑料加工机械及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的机器，包括公共工程和建筑用机器以及具有单独功能但未指定或未在第84章其他地方包含的机械和机械器具及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的齿轮和传动装置、齿轮、链轮、传动元件滚珠或滚柱丝杠、齿轮箱和变速器，包括扭矩转换器及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-rotary-electrical-machines"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的旋转电机，如发电机等及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-diesel-generators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的柴油发电机及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-transformers"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的变压器及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-power-semiconductor-converters"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的功率半导体转换器及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的在不超过1000伏电压下运行的开关设备和控制设备及其组件/子组件/部件
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
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  所有类型的在超过1000伏电压下运行的开关设备和控制设备及其组件/子组件/部件
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
          <h2 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            产品安全标准
          </h2>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            机械和电气设备描述
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
            下载PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        BIS方案X下的安全标准
      </h2>

      <p className="service-left-content-paragraph">
        BIS方案X认证不仅仅是法律要求，它还承诺安全、质量和可靠性。该认证要求严格遵守国家和国际规范，确保向用户提供的机械和电气设备安全、环保且技术可靠。
      </p>

      <p className="service-left-content-paragraph">
        要在方案X下获得认证，制造商需要遵守以下主要安全组件：
      </p>

      <PointsListWithoutHeading
        points={[
          "电气安全：遵守适用的IEC和印度标准。认证可防止短路、电击、绝缘击穿、保护接地丢失、周围可燃材料着火和火灾。",
          "机械安全：评估机械的结构完整性以及运动部件和新材料的完整性。确保设备能够安全承受机械应力、磨损和操作危险。",
          "消防安全：使用设计和构造具有防火性能的材料。遵守火焰传播性能标准，以控制与火灾相关的风险。",
          "环境合规：在设备生产中使用受控电源和环保材料。鼓励制造商减少其设备对环境的影响。",
          "质量管理：对生产过程进行主导和自主控制，以维持预设的标准和规范。重点关注工厂条件的监管，包括过程审计和持续遵守。",
        ]}
      />

      <h2 className="service-left-content-heading-three">方案X下的监管标准</h2>

      <p className="service-left-content-paragraph">
        制造商需要遵守与国际标准一致的 relevant 印度标准，包括：
      </p>

      <h3 className="service-left-content-heading-three">A类标准：</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – 机械安全：设计、风险评估和风险降低的一般原则。",
        ]}
      />

      <h3 className="service-left-content-heading-three">B类标准：</h3>

      <PointsListWithoutHeading
        points={["在2024年综合技术法规（OTR）令的第二附表中描述。"]}
      />

      <h3 className="service-left-content-heading-three">C类标准：</h3>

      <PointsListWithoutHeading points={["在2024年OTR令的第三附表中描述。"]} />

      <h3 className="service-left-content-heading-three">IS/IEC 60947系列：</h3>

      <PointsListWithoutHeading
        points={["涵盖多个部分和章节的低压开关设备和控制设备。"]}
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
