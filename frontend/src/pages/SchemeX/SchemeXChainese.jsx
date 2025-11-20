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
  import { Link } from "react-router-dom";
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
  import CDSCO from "../../assets/images/CDSCO.jpg";
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
    )
  }
  
  export default SchemeXChinese
  
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
        <title>
          BIS方案X认证 | 机械和电气设备安全
        </title>
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
        <meta
          property="og:title"
          content="BIS方案X认证 | 机械和电气设备安全"
        />
        <meta
          property="og:description"
          content="BIS方案X认证是确保低压开关设备、控制设备、机械和电气设备质量和安全所必需的。"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Meta Tags */}
        <meta
          name="twitter:title"
          content="BIS方案X认证 | 机械和电气设备安全"
        />
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
    )
  }
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
                  <BreadcrumbPage>印度BIS方案X认证
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    )
  }
  
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
    )
  }
  
  const SchemeXChineseHeroContactForm = () => {
    const [loading, setLoading] = useState(false);

    // Function to get page name based on URL
    const getPageName = () => {
      const path = window.location.pathname;
      // Service pages
      if (path.includes("/zh/yin-du-bis-fang-an-x-ren-zheng") || path.includes("/indian-bis-certification-under-scheme-x"))
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
          description:
            "感谢您联系我们。我们的团队将很快与您联系。",
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
          description:
            "出了点问题。请检查您的详细信息并重试。",
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

        <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
          预约咨询
        </h3>

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
      () => [
        "overview",
        "process",
        "documents",
        "conclusion",
      ],
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
        className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
                  className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
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
                className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
                  }`}
              >
                {MENU_ITEMS[item]}
              </div>
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
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
        <div id="services">
          <Services />
        </div>
      </div>
    )
  }
  
  export const Services = () => {
    return (
      <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
        <div className="max-w-[80rem] w-full mx-auto">
          <div className="flex flex-col items-center justify-center">
            <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
              <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
                我们的服务
              </h2>
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
                  alt="BIS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS Mark (ISI License) for Foreign Manufacture
              </p>
            </Link>
  
            <Link
              to="/cdsco-registration-certification"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={CDSCO}
                  alt="CDSCO"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                CDSCO Registration Certification
              </p>
            </Link>
  
            <Link
              to="/what-is-crs-bis-or-crs-registration"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={BISCRS}
                  alt="BISCRS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS (CRS) Registration
              </p>
            </Link>
  
            <Link
              to="/epr-certificate-for-plastic-waste-management-pwm"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={PlasticWasteManagement}
                  alt="PlasticWasteManagement"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                Plastic Waste Management
              </p>
            </Link>
  
            <Link
              to="/a-guide-on-how-to-obtain-epr-certificate"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={EPRCertificate}
                  alt="EPRCertificate"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                EPR Certificate certifications
              </p>
            </Link>
  
            <Link
              to="/a-guide-on-how-to-obtain-lmpc-certificate"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={LMPC}
                  alt="LMPC"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                LMPC Certificate certifications
              </p>
            </Link>
  
            <Link
              to="/what-is-bis-certificate-indian-bis"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={BISImage}
                  alt="BIS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS Registration Certificate
              </p>
            </Link>
  
            <Link
              to="/a-guide-to-bis-certification-indian-bis"
              className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={ISIMark}
                  alt="ISIMark"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                ISI MARK (BIS) for Indian Manufactures
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
              产品安全标准
            </h2>

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
              placeholder={
                "按描述或HS编码搜索..."
              }
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
    )
  }
  
  const productDataTableThird = [
    {
      id: 1,
      description: "All types of Pumps for handling liquids, liquid elevators",
      hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 2,
      description: "All types of compressors",
      hsCode:
        "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
      indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
      title:
        "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications",
    },
    {
      id: 3,
      description:
        "All types of machinery for Treatment of material by a process involving a Change of temperature",
      hsCode:
        "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 4,
      description: "or purifying machinery for liquid and gas",
      hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 5,
      description:
        "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping",
      hsCode: "842220, 842230, 842240 and 842290",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 6,
      description: "All types of cranes",
      hsCode:
        "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
      indianStandard:
        "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
      title:
        "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes",
    },
    {
      id: 7,
      description: "All types of machinery for construction",
      hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
      indianStandard:
        "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
      title:
        "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers",
    },
    {
      id: 8,
      description: "All types of weaving machines (looms)",
      hsCode: "8446, 844811, 844819, 844842 and 844849",
      indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
      title:
        "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery",
    },
    {
      id: 9,
      description: "All types of machinery for making embroidery.",
      hsCode: "84479020 and 844859",
      indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
      title: "Textile Machiner Safety Requirements Part 1 Common Requirements",
    },
    {
      id: 10,
      description: "All types of metal cutting machines",
      hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
      indianStandard:
        "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
      title:
        "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements",
    },
    {
      id: 11,
      description:
        "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
      hsCode: "8464 and 84669100",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 12,
      description: "All types of machinery for working rubber and plastics",
      hsCode: "8477",
      indianStandard: "IS/ISO 20430: 2020",
      title:
        "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements",
    },
    {
      id: 13,
      description:
        "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
      hsCode: "84791000, 84798999 and 84799090",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 14,
      description:
        "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
      hsCode: "84834000 and 84839000",
      indianStandard: "-",
      title: "-",
    },
    {
      id: 15,
      description:
        "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
      hsCode: "8501 and 8503",
      indianStandard:
        "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
      title:
        "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
    },
    {
      id: 16,
      description: "All types of Diesel Generator",
      hsCode: "8502 and 8503",
      indianStandard:
        "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
      title:
        "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
    },
    {
      id: 17,
      description: "All types of Transformer",
      hsCode:
        "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
      indianStandard:
        "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
      title:
        "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
    },
    {
      id: 18,
      description: "All types of Power Semiconductor Converter",
      hsCode: "850440",
      indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
      title: "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
    },
    {
      id: 19,
      description:
        "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
      hsCode: "8536, 8537 and 8538",
      indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
      title:
        "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
    },
    {
      id: 20,
      description:
        "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
      hsCode: "8535, 8537 and 8538",
      indianStandard: "-",
      title: "-",
    },
  ];
  
  const TypeCTable = ({ searchQuery }) => {
    // Filter data based on search query
    const filteredData = productDataTableThird.filter(item => {
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
                  <TableCell colSpan={5} className="text-center py-8 font-geist text-gray-500">
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
      title:
        "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements",
    },
    {
      id: 2,
      isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
      title:
        "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV",
    },
    {
      id: 3,
      isNumber: "IS/IEC 61508 (Part 1): 2010",
      title:
        "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements",
    },
    {
      id: 4,
      isNumber: "IS/IEC 60529 : 2001",
      title: "Degree of Protection Provided by Enclosures (IP Code)",
    },
    {
      id: 5,
      isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods",
    },
    {
      id: 6,
      isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
      title:
        "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant",
    },
    {
      id: 7,
      isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant",
    },
    {
      id: 8,
      isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system",
    },
    {
      id: 9,
      isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet",
    },
    {
      id: 10,
      isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet",
    },
    {
      id: 11,
      isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter",
    },
    {
      id: 12,
      isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter",
    },
    {
      id: 13,
      isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
      title:
        "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index",
    },
    {
      id: 14,
      isNumber: "IS 10481:2020/ ISO 4413:2010",
      title:
        "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
    },
    {
      id: 15,
      isNumber: "IS 12725:2021/ ISO 4414:2010",
      title:
        "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
    },
    {
      id: 16,
      isNumber: "IS ISO 3457 : 2003",
      title: "Earth Moving Machinery - Guards - Definitions and Requirements",
    },
    {
      id: 17,
      isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
      title:
        "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems",
    },
    {
      id: 18,
      isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
      title:
        "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs",
    },
    {
      id: 19,
      isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
      title:
        "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators",
    },
    {
      id: 20,
      isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
      title:
        "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines",
    },
    {
      id: 21,
      isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
      title:
        "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals",
    },
    {
      id: 22,
      isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
      title:
        "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests",
    },
    {
      id: 23,
      isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
      title:
        "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications",
    },
    {
      id: 24,
      isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
      title:
        "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking",
    },
    {
      id: 25,
      isNumber: "IS 16807: 2020/",
      title: "Safety of Machinery Fire Prevention and Fire Protection",
    },
    {
      id: 26,
      isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
      title:
        "Safety of Machinery Hygiene Requirements for the Design of Machinery",
    },
    {
      id: 27,
      isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
      title:
        "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access",
    },
    {
      id: 28,
      isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
      title:
        "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways",
    },
    {
      id: 29,
      isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
      title:
        "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails",
    },
    {
      id: 30,
      isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
      title:
        "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders",
    },
    {
      id: 31,
      isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
      title:
        "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design",
    },
    {
      id: 32,
      isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
      title:
        "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation",
    },
    {
      id: 33,
      isNumber: "IS 16811: 2018/ 14120 : 2015",
      title:
        "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards",
    },
    {
      id: 34,
      isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
      title:
        "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection",
    },
    {
      id: 35,
      isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
      title: "Safety of Machinery Prevention of Unexpected Start-Up",
    },
    {
      id: 36,
      isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
      title:
        "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs",
    },
    {
      id: 37,
      isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
      title:
        "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body",
    },
    {
      id: 38,
      isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
      title:
        "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body",
    },
    {
      id: 39,
      isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
      title:
        "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection",
    },
    {
      id: 40,
      isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
      title: "Safety of Machinery Emergency Stop Function Principles for Design",
    },
    {
      id: 41,
      isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
      title:
        "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements",
    },
    {
      id: 42,
      isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
      title:
        "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers",
    },
    {
      id: 43,
      isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
      title:
        "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures",
    },
    {
      id: 44,
      isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
      title:
        "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors",
    },
    {
      id: 45,
      isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
      title:
        "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars",
    },
    {
      id: 46,
      isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
      title:
        "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices.",
    },
    {
      id: 47,
      isNumber: "IS 16569: 2018/ ISO 11429:1996",
      title:
        "Ergonomics- System of Auditory and Visual Danger and Information Signals",
    },
    {
      id: 48,
      isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
      title:
        "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays",
    },
    {
      id: 49,
      isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
      title:
        "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators",
    },
    {
      id: 50,
      isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
      title:
        "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery",
    },
    {
      id: 51,
      isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
      title:
        "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements",
    },
    {
      id: 52,
      isNumber: "IS 16569:2018/ ISO 11429: 1996",
      title:
        "Ergonomics - System of auditory and visual danger and information signals",
    },
    {
      id: 53,
      isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
      title:
        "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements",
    },
  ];
  const TypeBTable = ({ tableRef, searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
  
    // Filter data based on search query
    const filteredData = productDataTableSecond.filter(item => {
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
    const currentItems = filteredData.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  
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
                  <TableCell colSpan={3} className="text-center py-8 font-geist text-gray-500">
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
        question: "1. What is Scheme X under BIS certification?",
        answer: "Scheme X is a conformity assessment scheme introduced by the Indian BIS for machinery and electrical equipment. It ensures compliance with stringent safety and technical standards as specified in the Omnibus Technical Regulation."
      },
      {
        question: "2. Is Scheme X different from the ISI mark certification?",
        answer: "Yes. The ISI mark is generally for consumer goods and basic product compliance, while Scheme X applies to complex and industrial-grade products that require advanced testing and certification through a BIS certificate or BIS license."
      },
      {
        question: "3. Who needs to apply for Scheme X certification?",
        answer: "Manufacturers and importers of machinery and electrical equipment listed under the Omnibus Technical Regulation must apply for Scheme X and obtain a valid BIS certification to legally sell or distribute their products in India. Global manufacturers or foreign manufacturers intending to sell product in India must also comply with these regulations."
      },
      {
        question: "4. What is the cost of BIS Scheme X certification?",
        answer: "The cost of Scheme X includes application fees, certification fees, technical file review charges, factory inspection costs, and product testing charges. On average, it starts at ₹2,000 for application and can go up depending on product complexity. For more details contact us at admin@bis-certifications.com."
      },
      {
        question: "5. How long does it take to get a BIS licence under Scheme X?",
        answer: "The timeline varies depending on documentation, testing requirements, and factory inspections. Typically, it takes 4–6 weeks from the date of successful BIS registration and application submission for Indian manufacturers and 60-90 days for foreign manufacturers."
      },
      {
        question: "6. Can MSMEs also apply for BIS certification under Scheme X?",
        answer: "Absolutely. In fact, the Indian BIS encourages MSMEs to apply for a BIS licence or certificate of conformity under Scheme X to boost quality, compliance, and competitiveness in the industrial sector."
      },
      {
        question: "7. Is BIS certification under Scheme X mandatory for exports?",
        answer: "No. Products manufactured exclusively for export are exempt under the Omnibus Technical Regulation. However, products meant for Indian markets must be certified under Scheme X."
      },
      {
        question: "8. What is the validity of the BIS license under Scheme X?",
        answer: "A BIS licence under Scheme X is generally valid for 3-6 years and must be renewed accordingly. Renewal involves payment of the annual BIS certification fee and may require re-evaluation depending on changes in product scope or standards."
      },
      {
        question: "9. Can foreign manufacturers apply for Scheme X certification?",
        answer: "Yes, foreign manufacturers can apply for Scheme X certification through an authorized Indian representative. The Indian BIS requires a factory inspection, which may take 3 days for foreign applicants, along with standard BIS registration and testing processes."
      },
      {
        question: "10. What is a Technical File and why is it required?",
        answer: "A Technical File is a detailed compliance dossier required under Scheme X. It includes manufacturing processes, product details, test reports, and quality control documents. It supports the product's conformity to relevant Indian Standards during the BIS certification process."
      },
      {
        question: "11. How is Scheme X related to the Omnibus Technical Regulation?",
        answer: "The Omnibus Technical Regulation mandates the use of Scheme X for specific categories of machinery and electrical equipment in India. Products listed under the regulation must be certified under Scheme X to obtain a valid BIS certificate or BIS licence."
      },
      {
        question: "12. Can a BIS certificate under Scheme X be revoked?",
        answer: "Yes. The Indian BIS can suspend or cancel a BIS licence or certificate under Scheme X if non-compliance is found during surveillance or if the product fails to meet required Indian Standards."
      },
      {
        question: "13. What is the difference between BIS license and BIS certificate under Scheme X?",
        answer: "A BIS license is typically issued to Indian manufacturers, while a BIS certificate of conformity (CoC) is often issued to foreign manufacturers or for specific cases. Both serve the same purpose—ensuring product compliance under Scheme X."
      },
      {
        question: "14. Is the ISI mark allowed for products certified under Scheme X?",
        answer: "No. Products under Scheme X do not carry the ISI mark. Instead, they display the BIS standard mark relevant to the certification scheme, as governed by the Indian BIS."
      },
      {
        question: "How do I know if my machinery requires Scheme X certification?",
        answer: "Check the official list in the Omnibus Technical Regulation or consult with a BIS consultant to verify if your machinery falls under mandatory Scheme X certification requirements."
      }
    ];
  
    return (
      <section
        id="faqs"
        className="my-2 scroll-mt-20"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
          <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
            常见问题
          </h4>
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
    )
  }
  
  const SchemeXMainContentLeftConclusionSection = () => {
    return (
      <div id="conclusion" className="flex flex-col scroll-mt-20">
        {/* Conclusion */}
        <div className="flex w-full items-center gap-3">
          <span className="service-left-content-index-heading">结论</span>
          <Separator className="service-left-content-separator" />
        </div>

        <h2 className="service-left-content-heading-two">
          结论
        </h2>
  
        <p className="service-left-content-paragraph">
          BIS方案X认证对于维护低压开关设备和控制设备、机械和电气设备的安全性、可靠性和质量仍然至关重要。对于适用于加工石材、陶瓷、混凝土、沥青水泥和矿物玻璃的机床制造商，BIS方案X认证是强制性的。
        </p>
  

        <p className="service-left-content-paragraph">
          通过履行这些义务，制造商保证产品符合性，增强消费者信心，并提高其在市场上的信誉。方案X确保生产尽可能顺利，满足全球安全标准，并获得认可的品牌获得良好声誉。
        </p>
  
      </div>
    )
  }
  
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
    )
  }
  
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
          Issuing BIS Certificate under Scheme-X is a systematic activity meant to
          ensure the manufacturer has the applicable safety, quality, and
          compliance standards fulfilled. The process is as follows:
        </p>
  
  
        <PointsListWithoutHeading
          points={[
            "Verify Scope: Determine whether your product is in the scope of Scheme-X and if it is with BIS safety requirements. Check the relevant Indian Standards and technical schedule to determine if you will be able to comply.",
            "Prepare The Required Documents: Manufacturers need to collect and arrange the following documents: Registered Business certificates, Basis of design documents, Factory and Process flow documents, Service Test Reports (if applicable), Quality assurance and Control Documents.",
            "Construct the Technical File: A technical file is an indispensable part for the claim for extension of a certificate. It should contain: Technical Specifications of the Product, Methods and Techniques Information, Compliance and Test Documents, Limitation and the Intended purpose of the product, Quality assurance documentation, Raw materials traceability, subcontract traceability, and the rest of the evidence, Conformance to the standards within the scope framed.",
            "The Application Form: The application form can be submitted electronically on the BIS Website for the designated place. Settlement of the application fee is a must. The rest of the documents verifying application should be included for proper assessment.",
            "Factory Inspection: For domestic manufacturers: Inspection is conducted over a period of a maximum of 2 days. For foreign manufacturers: Inspection is conducted over a period of a maximum of 3 days (additional days may accrue due to additional requests).",
            "Testing of Product Samples: Sample testing is either carried out at the manufacturers site or at outsourced BIS approved labs (outsource testing is allowed). The testing demonstrates the fulfillment of the relevant Indian standards.",
            "Issuance of Certification: If a product meets all the conditions, BIS grants every product a License or a Certificate of Conformity (CoC). The BIS Standard Mark may be used freely by the manufacturer on all certified products.",
          ]}
        />
  
  
        <p className="service-left-content-paragraph">
          This file serves as the technical and statistical evidence of the
          product claim substantiating to safety trace standards.
        </p>
  
  
        <p className="service-left-content-paragraph">
          During the period of inspection, the BIS officials are expected to:
          Analyze the technical file, Evaluate the ways of manufacturing along
          with supporting quality assurance systems, Observe the testing of the
          product, Determine non-compliance (if any) and give remedial steps. A
          detailed report of the audit is provided to the applicant after the
          visit.
        </p>
  
  
  
        <p className="service-left-content-paragraph">
          This strategy maintains compliance with BIS Standard and is a
          recognition of Indian and international compliance, cornering the
          industry on consumer trust towards safety and quality.
        </p>
  
  
        <h2 className="service-left-content-heading-three">
          Procedure for Domestic Manufacturers
        </h2>
  
  
        <p className="service-left-content-paragraph">
          Domestic manufacturers follow a direct approach by obtaining the BIS
          License under Scheme-X. The direct steps to follow include:
        </p>
  
  
        <PointsListWithoutHeading
          points={[
            "Documentation: All documents pertaining to the scheme must be gathered and prepared.",
            "Execution of the Application: The application is to be presented alongside the relevant fees.",
            "Inquiry on the Application: any application submitted is subject to scrutiny and a subsequent set of questions is generated by BIS.",
            "Appointing Auditors: Auditors are appointed by BIS but the nominated individual is subject to the payment of the audit fees.",
            "Factory Audit: An examination and survey works audit is conducted onsite and relevant samples are collected.",
            "Sample Evaluation: The samples are evaluated in a BIS-recognized laboratory. The applicant pays all BIS-recognized laboratory testing fees.",
            "Payment of Licencing & Marking Fees: The requisite payments are accomplished to BIS.",
            "Grant of Licencing: The certificate granting permission to use the BIS Mark is awarded by BIS.",
          ]}
        />
  
  
        <p className="service-left-content-paragraph">
          <strong>Typical Timeline:</strong> Close to 90 working days (as per BIS
          practice) are needed. This is provided there are no key
          non-conformities.
        </p>
  
  
        <h2 className="service-left-content-heading-three">
          Procedure for Foreign Manufacturers
        </h2>
  
  
        <p className="service-left-content-paragraph">
          Unlike domestic manufacturers, foreign manufacturers applying for a BIS
          certificate under Scheme-X are required to comply with a more stringent
          process and additional steps. The procedure is elaborated as follows.
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
    )
  }
  
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


        <h2 className="service-left-content-heading-two">
          BIS方案X认证简介
        </h2>
  
        <p className="service-left-content-paragraph">
          印度标准局（简称BIS）于2022年3月16日推出了"方案X"，旨在提高印度产品安全和质量的合规性。印度和外国制造商可以为机械和电气设备、组件（如装配件、子装配件）以及方案X附表II中指定的工具申请BIS认证，并在出口、销售或分销到印度之前获得认证。
        </p>
  
  
        <p className="service-left-content-paragraph">
          在方案X下，制造商可以为低压开关设备和控制设备、机械和电气设备申请BIS许可证或符合性证书（CoC）。一旦制造商获得认证，他们可以使用BIS标准标记，表明其产品符合印度制定的标准。
        </p>
  
  
        <p className="service-left-content-paragraph">
          该认证在推广产品和遵守印度标准和政府法规的同时，有助于建立消费者对认证产品的信任和信心。
        </p>
  
  
        <h2 className="service-left-content-heading-three">
          什么是方案X认证？
        </h2>
  
  
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
          根据OTR 2024，包括泵、压缩机、离心机、起重机、变压器和开关设备在内的机械和电气设备的制造商以及进口商必须申请方案X下的BIS认证。
        </p>
  
  
  
        <p className="service-left-content-paragraph">
          Under Scheme X, manufacturers can opt to apply for:
        </p>
  
  
        <PointsListWithoutHeading
          points={["BIS许可证，或", "符合性证书（CoC）"]}
        />
  
  
        <p className="service-left-content-paragraph">
          带有BIS标准标记的产品是符合性标记，证明并向用户保证产品安全、可靠且质量良好。它也是信任和真正良好性能的标记。
        </p>
  
  
        <h3 className="service-left-content-heading-three">
          中小微企业特别说明
        </h3>
  
  
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
  
  
        <h3 className="service-left-content-heading-three">
          BIS方案X标志
        </h3>
  
  
  
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
  
  
        <h3 className="service-left-content-heading-three">
          法律影响
        </h3>
  
  
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
  
  
        <h3 className="service-left-content-heading-three">
          Scheme-I
        </h3>
  
  
        <PointsListWithoutHeading
          points={[
            "包括更广泛的消费产品类别，如电子产品、家用电器，甚至工业产品。",
            "在此方案下颁发证书的产品必须具有标准ISI标记。",
            "涉及国内和外国制造商。",
            "涉及工厂审计和样品测试，以确定质量和是否符合印度标准。",
          ]}
        />
  
        <h3 className="service-left-content-heading-three">
          Scheme-X
        </h3>
  
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
  
  
        <h3 className="service-left-content-heading-three">
          方案X涵盖的产品
        </h3>
  
  
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
                    All types of Pumps for handling liquids, liquid elevators and
                    (or)their assemblies /sub-assemblies /components
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
                    All types of compressors and(or)their assemblies /sub-assemblies
                    /components
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
                    All types of machinery for treatment of material by a process
                    involving a change of temperature and(or)their assemblies
                    /sub-assemblies /components
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
                    All types of centrifuges, filtering or purifying machinery for
                    liquid and gas and(or)their assemblies /sub-assemblies
                    /components
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
                    All types of machinery for filling, closing, sealing, labelling
                    bottles, packing or wrapping and(or)their
                    assemblies/sub-assemblies/components
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
                    All types of cranes and (or) their assemblies
                    /sub-assemblies/components
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
                    All types of machinery for construction, earthmoving, Mining and
                    (or)their assemblies /sub-assemblies/components
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
                    All types of weaving machines (looms) and (or)their
                    assemblies/sub-assemblies / components
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
                    All types of machinery for making embroidery and(or)their
                    assemblies /sub-assemblies /components
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
                    All types of metal cutting machines tools covered under the
                    heading 8456 to 8461 and(or)their assemblies
                    /sub-assemblies/components
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
                    All types of machine tools for working stone, ceramics,
                    concrete, asbestos cement or like mineral glass and (or)their
                    assemblies /sub-assemblies /components
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
                    All types of machinery for working rubber and plastics and(or)
                    their assemblies /sub-assemblies /components
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
                    All types of Machines including the machines for public works &
                    building and the machinery & mechanical appliances having
                    individual functions, not specified Or included elsewhere in
                    Chapter 84 and(or)their assemblies/sub-assemblies /components
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
                    All types of gears and gearing, toothed wheels, chain sprocket,
                    transmission elements ball or roller screws, gear boxes and
                    speed changers, including torque converters And (or)their
                    assemblies /sub-assemblies /components
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
                    All types of Rotary electrical machines such as Generator, etc.
                    and (or) their assemblies /sub-assemblies /components
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
                    All types of Diesel Generator and (or)their assemblies
                    /sub-assemblies /components
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
                    All types of Transformers and (or)their assemblies
                    /sub-assemblies /components
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
                    All types of Power Semiconductor Converter and (or)their
                    assemblies /sub-assemblies /components
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
                    All types of switch gear and control gear equipment operating at
                    voltages not exceeding 1000 volts and (or)their assemblies
                    /sub-assemblies /components
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
                    All types of switch gear and control gear equipment operating at
                    voltages exceeding 1000 volts and (or) their assemblies
                    /sub-assemblies /components
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
            <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
              产品安全标准
            </h3>
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
  
  
  
        <h2 className="service-left-content-heading-three">
          方案X下的监管标准
        </h2>
  
  
        <p className="service-left-content-paragraph">
          制造商需要遵守与国际标准一致的 relevant 印度标准，包括：
        </p>
  
  
        <h3 className="service-left-content-heading-three">
          A类标准：
        </h3>
  
  
        <PointsListWithoutHeading
          points={[
            "IS 16819:2018 / ISO 12100:2010 – 机械安全：设计、风险评估和风险降低的一般原则。",
          ]}
        />
  
  
        <h3 className="service-left-content-heading-three">
          B类标准：
        </h3>
  
  
        <PointsListWithoutHeading
          points={[
            "在2024年综合技术法规（OTR）令的第二附表中描述。",
          ]}
        />
  
  
  
        <h3 className="service-left-content-heading-three">
          C类标准：
        </h3>
  
  
        <PointsListWithoutHeading
          points={["在2024年OTR令的第三附表中描述。"]}
        />
  
  
        <h3 className="service-left-content-heading-three">
          IS/IEC 60947系列：
        </h3>
  
  
        <PointsListWithoutHeading
          points={[
            "涵盖多个部分和章节的低压开关设备和控制设备。",
          ]} />
      </div>
    )
  }
  
  
  
  
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