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
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
  
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  
  const CRSRegistration = () => {
    return (
      <div className="relative">
        <MetaTags />
        <BreadcrumbContent />
        <HeroSection />
        <IndexSection />
        <MainContent />
        <CRSRegistrationServiceFaq />
        <CISProductTable />
        <div id="services">
          <Services />
        </div>
        <FooterChinese />
        <ScrollToTopButton />
      </div>
    );
  };
  
  export default CRSRegistration;
  
  const MetaTags = () => {
    const title = "BIS注册 - 强制注册计划 (CRS)";
    const description =
      "BIS注册是从BIS获得电子和IT产品的许可证，这些产品符合CRS计划下的适用印度标准。";
    const keywords =
      "BIS证书, BIS注册流程, BIS注册, BIS在线注册流程, 电子产品的BIS认证, 印度的BIS注册流程, 电子产品的BIS注册, 强制注册计划";
    const canonicalUrl =
      "https://bis-certifications.com/zh/crs-bis-shi-shen-me-huo-crs-deng-ji";
    const author = "Dhruv Aggarwal";
    const publisher = "Sun Certifications India";
    const ogTitle = "BIS注册 - 强制注册计划 (CRS)";
    const ogDescription =
      "BIS注册是从BIS获得电子和IT产品的许可证，这些产品符合CRS计划下的适用印度标准。";
  
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "首页",
          item: "https://bis-certifications.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "BIS CRS注册",
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
                      <Link to="/">首页</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="flex-shrink-0">
                    <SlashIcon />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="flex-shrink-0">
                    <BreadcrumbPage className="whitespace-nowrap">
                      BIS CRS注册
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
                认证专业知识
              </span>
            </div>

            <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
              <span className="relative">
                BIS CRS注册
                <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
              </span>
            </h1>

            <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
              电子产品的强制性要求，确保安全与质量。在专家协助下获得BIS批准！
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
          <ContactForm />
        </div>
      </main>
    );
  };
  
  const ContactForm = () => {
    const [loading, setLoading] = useState(false);
  
    // Function to get page name based on URL
    const getPageName = () => {
      const path = window.location.pathname;
  
      // Service pages
      if (path.includes("/what-is-crs-bis-or-crs-registration"))
        return "CRS Registration - English Page";
      if (path.includes("/zh/crs-bis-shi-shen-me-huo-crs-deng-ji"))
        return "CRS注册 - 中文页面";
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
          description: "电话号码必须为（8-15位数字）",
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
        "eligibility",
        "documents",
        "registration",
        "fees",
        "elabelling",
      ],
      []
    );
  
    const MENU_ITEMS = {
      overview: "概述",
      eligibility: "资格",
      documents: "文件",
      registration: "注册",
      fees: "注册费用",
      elabelling: "电子标签",
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
  
  const MainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <MainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentChinese />
        </div>
      </div>
    );
  };
  
  const MainContentLeft = () => {
    return (
      <div className="flex-1">
        <div className="flex flex-col gap-[20px] md:gap-[40px]">
          <div className="flex flex-col gap-2">
            <h2 className="service-left-content-heading-two">
              BIS注册是什么？
            </h2>

            <p className="service-left-content-paragraph">
              印度标准局（BIS）是印度的国家标准化机构，隶属于印度消费者事务、食品和公共分配部。BIS负责根据相关印度标准（IS）维护印度各种产品和服务的质量、安全和性能基准。
            </p>

            <p className="service-left-content-paragraph">
              BIS负责监督和实施印度的各种计划。强制注册计划（CRS）是BIS的一个非常突出和强制性的认证计划，涵盖各种电子和IT产品类别。
            </p>

            <p className="service-left-content-paragraph">
              印度产品的性能和安全对印度来说是一个重要问题。BIS CRS认证保证电子和IT产品符合印度标准，并有助于保护消费者免受不合规和劣质产品的侵害。
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
          <ServiceAuthorChinese />
        </div>
      </div>
    );
  };
  
  const CRSRegistrationMainContentLeftOverviewSection = () => {
    return (
      <div id="overview" className="flex flex-col scroll-mt-20">
        {/* Overview */}
        <div className="flex w-full items-center gap-3">
          <span className="service-left-content-index-heading">概述</span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <h2 className="service-left-content-heading-two">
          什么是强制注册计划（CRS）？
        </h2>

        <p className="service-left-content-paragraph">
          强制注册计划（CRS）是BIS于2012年推出的产品注册计划，主要关注电子产品。多年来，随着更多产品的发布，CRS已扩展到包括更广泛的产品类别，包括电器、太阳能设备、电池等电气产品。对于不同部委发布的质量控制令（QCO）中规定的产品，CRS注册是强制性的。
        </p>

        <p className="service-left-content-paragraph">
          任何属于强制性CRS计划的产品都必须在获得BIS注册后才能在印度销售、进口或分销。
        </p>

        <h3 className="service-left-content-heading-three">
          CRS认证在印度的历史
        </h3>

        <p className="service-left-content-paragraph">
          2012年，CRS计划下的第一个QCO发布，重点关注电子和IT设备。此后，在以下行业发布了额外的QCO：
        </p>

        <PointsListWithoutHeading
          points={[
            "消费电子产品",
            "照明和LED",
            "电池和电芯",
            "无线通信设备",
            "太阳能电池板和组件",
            "家用电器",
          ]}
        />

        <p className="service-left-content-paragraph">
          CRS认证的清单正在迅速扩大，因此制造商积极主动并了解最新更新非常重要。
        </p>

        <h2 className="service-left-content-heading-three">
          CRS注册与ISI标志：有什么区别？
        </h2>
  
        {/* Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                    特性
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                    CRS注册
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                    ISI标志
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    性质
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    强制性（仅适用于QCO列出的产品）
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    自愿或强制性（取决于产品）
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    产品范围
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    电子产品、IT、电气、电池等
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    食品、水泥、钢铁、电气产品等
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    申请方式
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    在线，BIS CRS门户
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    手动+在线，BIS ISI系统
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    灵活性
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    仅适用于QCO涵盖的商品
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    对于非QCO商品可以是自愿的
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    标签
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    需要BIS CRS标志和注册号
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    需要带标准代码的ISI标志
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
  
        <h3 className="service-left-content-heading-three">
          为什么您需要了解BIS CRS框架
        </h3>

        <p className="service-left-content-paragraph">
          如果您是印度的生产商，或试图进入印度市场的外国公司，了解BIS CRS步骤是必须的。它可以帮助您：
        </p>

        <PointsListWithoutHeading
          points={[
            "避免不合规的处罚。",
            "准备生产计划（考虑实验室测试时间）。",
            "促进更便捷的海关处理。",
            "赢得印度客户的长期品牌信任。",
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
          <span className="service-left-content-index-heading">资格</span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <h2 className="service-left-content-heading-two">
          BIS CRS注册的资格标准
        </h2>

        <p className="service-left-content-paragraph">
          谁可以申请CRS下的BIS认证？
        </p>

        <p className="service-left-content-paragraph">
          在印度，强制注册计划（CRS）下的BIS证书只能授予符合印度标准局规定要求的制造商。这是为了确保只有真正的制造商才能获得注册并在其产品上粘贴BIS CRS标志的特权。
        </p>

        <div className="service-left-content-heading-three">
          资格标准清单
        </div>
  
        {/* Eligibility Requirements Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                    要求
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    说明
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    申请人必须是制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    只有产品的原始制造商（不是贸易商或转售商）才有资格申请。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    位置可以是印度或外国
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    印度制造商和国际品牌都可以申请。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    AIR（授权印度代表）
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    外国制造商必须指定AIR——可以是其印度分支机构或正式授权的第三方。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    来自BIS认可实验室的测试报告
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    产品必须在BIS认可的实验室进行测试，并符合适用的印度标准（IS）。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    适当的文件
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    所有必需的文件必须以规定的格式提交（详情见下一节）。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    每个品牌和位置一个注册
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    必须为每种产品类型、制造地点和品牌名称单独提交申请。
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
  
        <h2 className="service-left-content-heading-three">
          什么是授权印度代表（AIR）？
        </h2>

        <p className="service-left-content-paragraph">
          对于外国制造商，义务之一是指定授权印度代表（AIR）在印度进行沟通和代表。
        </p>

        <div className="service-left-content-heading-three">
          AIR的职责：
        </div>

        <PointsListWithoutHeading
          points={[
            "作为外国申请人的法律代表",
            "代表制造商与BIS沟通和管理所有义务",
            "对所有合规和文件承担法律责任",
            "除非制造商明确授权，否则不能是代理商或分销商",
          ]}
        />

        <p className="service-left-content-paragraph">
          作为协议的一部分，AIR必须提交双方签署的协议以及印度地址证明。
        </p>

        <div className="service-left-content-heading-three">
          真实场景：
        </div>

        <p className="service-left-content-paragraph">
          ABC公司计划在印度推出新型移动电源。
        </p>

        <PointsListWithoutHeading
          points={[
            "ABC公司是制造商。",
            "他们在印度的一家BIS认可实验室对产品进行了测试。",
            "他们在德里的分支机构作为注册AIR。",
            "他们将申请连同所需文件上传到BIS门户。",
          ]}
        />

        <p className="service-left-content-paragraph">
          结果是根据CRS颁发BIS证书。
        </p>
      </div>
    );
  };
  
  const CRSRegistrationMainContentLeftDocumentsSection = () => {
    return (
      <div id="documents" className="flex flex-col scroll-mt-20">
        {/* Documents */}
        <div className="flex w-full items-center gap-3">
          <span className="service-left-content-index-heading">文件</span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <h2 className="service-left-content-heading-two">
          BIS CRS注册所需的文件
        </h2>

        <div className="service-left-content-heading-three">
          获得BIS CRS注册所需的文件清单。
        </div>

        <p className="service-left-content-paragraph">
          填写BIS CRS注册申请完全是数字化的，但是，它仍然需要完全完成的文件才能获得批准。每一个细微的错误和未能遵守任何方面，如文件类型、格式不当或错误的文件类型，都可能导致申请被拒绝或延迟。
        </p>

        <p className="service-left-content-paragraph">
          为了正确和更快地处理BIS文件，有必要在每一步都准备好适当的文件。准备好适当的文件可确保您的BIS证书按时处理，并在任何合规审计、海关检查或市场批准方面保持法律清晰。
        </p>

        <div className="service-left-content-heading-three">
          BIS CRS注册文件清单
        </div>
  
        {/* Documents Requirements Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                    文件
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                    谁提交？
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    备注
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    制造商地址证明
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    工厂租赁、水电费账单或许可证
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    来自BIS认可实验室的测试报告
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商/实验室
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    必须是最新的（90天内）并参考IS代码
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    承诺书（按BIS格式）
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    申请人
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    包括责任、合规和产品责任
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    商标证书
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    如果品牌已注册则需要
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    AIR协议（适用于外国申请人）
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    外国制造商和AIR
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    已签署并公证
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    宣誓书
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商或AIR
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    格式可从BIS门户下载
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    费用收据
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    申请人
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    政府费用支付证明
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    授权书
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    授权AIR代表其行事
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    公司注册证书
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    商业注册证明（GST、ROC等）
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    产品标签/标记
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                    制造商
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    必须显示BIS标志、IS标准和注册空间
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
            注册流程
          </span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <h2 className="service-left-content-heading-two">
          BIS CRS注册流程
        </h2>

        <p className="service-left-content-paragraph">
          BIS CRS注册是通过BIS注册门户完全在线进行的流程。它不仅仅是包括上传文件的程序。它还需要特别注意技术性质、对法规的理解以及对印度标准（IS）的完全合规。
        </p>

        <p className="service-left-content-paragraph">
          BIS CRS流程，我们现在称之为认证和注册系统（CRS），以下是BIS认证的流程。
        </p>

        <div className="service-left-content-heading-three">
          步骤1：在BIS授权实验室进行产品测试
        </div>

        <PointsListWithoutHeading
          points={[
            "从BIS批准列表中选择实验室",
            "提交要测试的产品样品以进行相关IS测试",
            "根据BIS测试报告格式获得样品的测试报告",
          ]}
        />

        <div className="service-left-content-heading-three">
          步骤2：文件准备
        </div>

        <PointsListWithoutHeading
          points={[
            "收集所需的文件，如已概述的",
            "确保文件正确命名、格式化、签名和注明日期",
            "开发产品标签，这是一个包含BIS标志空间和IS标准空间的模拟贴纸",
          ]}
        />
  
        <div className="service-left-content-heading-three">
          步骤3：填写在线申请
        </div>

        <PointsListWithoutHeading
          points={[
            "访问BIS CRS门户（https://www.bis.org.in/）并登录或注册",
            "完成产品、型号、品牌和AIR的制造单位信息（如需要）",
            "按照步骤支付政府费用",
          ]}
        />

        <div className="service-left-content-heading-three">
          步骤4：BIS审查申请
        </div>

        <PointsListWithoutHeading
          points={[
            "BIS检查支持文件和实验室报告",
            "如需要，通过门户提出澄清",
            "用正确的文件或合理的解释回应",
          ]}
        />

        <p className="service-left-content-paragraph">
          如果是澄清查询，必须在30天内回答，否则申请将进入归档文件，这意味着被拒绝。
        </p>

        <div className="service-left-content-heading-three">
          步骤5：授予BIS注册
        </div>

        <PointsListWithoutHeading
          points={[
            "如果BIS官员对他们进行的评估结果满意，将颁发BIS证书",
          ]}
        />

        <p className="service-left-content-paragraph">
          您的证书将包括：
        </p>

        <PointsListWithoutHeading
          points={[
            "BIS注册号",
            "品牌名称",
            "产品型号",
            "IS标准代码",
          ]}
        />

        <PointsListWithoutHeading
          points={[
            "您的产品标签必须包含或具有证书详情的电子标签。",
          ]}
        />

        <div className="service-left-content-heading-three">
          步骤6：标签和分销
        </div>

        <PointsListWithoutHeading
          points={[
            "BIS认证产品必须携带：",
            "BIS CRS标志",
            "与产品相关的IS代码",
            "BIS注册号",
            "注册号和BIS标志必须根据BIS法规打印或数字嵌入。",
          ]}
        />

        <h3 className="service-left-content-heading-three">
          大致时间表
        </h3>
  
        {/* Timeline Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                    活动
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    预计时间
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    产品测试
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    7-10个工作日
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    文件收集
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    2-3天
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    申请提交
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    1天
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    BIS审查+查询解决
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    10-15个工作日
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    最终证书颁发
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    2-4个工作日
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    总计
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                    ~4周
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
            注册费用
          </span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <h2 className="service-left-content-heading-two">
          BIS CRS注册费用、有效期和续期指南
        </h2>

        <p className="service-left-content-paragraph">
          在CRS下获得BIS证书，申请人需要支付政府费用以及产品测试费用。尽管流程是在线的，界面也很简化，但许多申请人由于付款不足和申请文件错误而面临请求延迟和拒绝。
        </p>

        <h3 className="service-left-content-heading-three">
          CRS注册费用结构
        </h3>
  
        {/* Fee Structure Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                    费用类型
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    金额
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    政府费用
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    ₹53,000 + 18% GST per test report
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    测试费用
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    ₹10,000 – ₹20,000 + 18% GST (varies by product/lab)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    同一申请中的额外报告
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    ₹20,000 + 18% GST per report
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    续期费用
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
            价格可能更新——请在BIS门户或与您的顾问确认。
          </em>
        </p>

        <h3 className="service-left-content-heading-three">
          CRS证书有效期和续期
        </h3>
  
        {/* Certificate Validity & Renewal Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                    参数
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    详情
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    初始有效期
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    2年
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    续期期限
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    最多5年（如果产品没有变化）
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    续期流程
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    在线，基于新的宣誓书+续期费用
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    需要重新测试吗？
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    除非产品规格/IS标准发生变化
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
          <span className="service-left-content-index-heading">电子标签</span>
          <Separator className="service-left-content-separator" />
        </div>
  
        <div className="service-left-content-heading-two">
          CRS认证产品的电子标签指南
        </div>

        <div className="service-left-content-heading-three">
          什么是电子标签？
        </div>

        <p className="service-left-content-paragraph">
          电子标签是在设备内以电子方式显示监管信息的做法，而不是打印并粘贴到设备上。在BIS的强制注册计划（CRS）下，指定的产品，特别是紧凑型或数字设备，能够通过软件界面或数字包装显示BIS证书详情、标准标志和IS代码。
        </p>

        <div className="service-left-content-heading-three">
          BIS关于电子标签的指南：电子标签（BIS CMD 3/8:1/6975. 日期：2015年12月3日）
        </div>

        <h3 className="service-left-content-heading-three">
          电子标签的要求：
        </h3>
  
        {/* E-Labelling Requirements Table */}
        <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
          <div className="rounded-md border bg-white shadow-sm min-w-full">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                    规则
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                    说明
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    包装上的物理标签
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    产品盒或外包装必须显示BIS CRS标志和注册详情。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    散装包装的可移除标签
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    如果产品以散装方式运输，外包装上的可移除粘性标签是可以接受的。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    无需工具即可访问
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    用户必须能够在不需要工具或配件的情况下访问电子标签信息（例如，不允许移除SIM卡）。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    安全编程
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    电子标签信息必须嵌入固件/软件中，锁定以防止任何第三方修改。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    基于菜单的访问
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    用户必须通过设备的菜单界面在不超过4步的情况下访问信息。
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                    需要说明
                  </TableCell>
                  <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                    必须提供如何访问电子标签详情的说明。
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
  
        <p className="service-left-content-paragraph">
          太阳认证印度如何帮助您在CRS计划下进行BIS注册
        </p>

        <div className="service-left-content-heading-three">
          为什么选择BIS顾问？
        </div>

        <p className="service-left-content-paragraph">
          整个BIS CRS注册在规则和文件量方面都非常技术性和详尽。如果对印度标准、最近的QCO、测试报告的结构以及门户界面中的工作流程缺乏透彻的理解，申请人可能会在后续的延迟、拒绝或长期主动不合规方面遭受重大损失。这就是太阳认证印度发挥作用的地方，提供值得信赖和可靠的合作伙伴，协助申请人处理强制认证计划的每一个细节。
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
                  印度最佳证书顾问
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
                外国制造商BIS标志（ISI许可证）
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
                  alt="BISCRS"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                BIS (CRS) 注册
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
                  alt="EPRCertificate"
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
                  alt="LMPC"
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
                  alt="ISIMark"
                  className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
                />
              </div>
              <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
                印度制造商ISI标志（BIS）
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
        question: "1. 什么是BIS注册？",
        answer:
          "BIS认证是由印度标准局管理的合规流程，用于验证产品是否符合适用的印度标准（IS）的质量、安全性和可靠性要求。",
      },
      {
        id: "item-2",
        question: "2. 什么是BIS下的CRS注册？",
        answer:
          "CRS代表强制性注册计划。这是针对特定产品类别的强制性注册流程，如电子产品、电气产品、电池和太阳能产品。CRS下的产品在印度销售前必须经过测试并在BIS注册。",
      },
      {
        id: "item-3",
        question: "3. BIS认证在印度是强制性的吗？",
        answer:
          "是的。对于CRS产品清单中列出的所有产品（目前有80多种），在印度制造、进口或销售都必须进行BIS注册。",
      },
      {
        id: "item-4",
        question: "4. BIS CRS和ISI标志有什么区别？",
        answer:
          "BIS CRS：适用于电子产品和IT产品，仅针对QCO下通知的强制性产品。<br />ISI标志：用于更广泛的产品范围，根据产品类别可能是自愿性或强制性的。",
      },
      {
        id: "item-5",
        question: "5. 谁可以申请BIS CRS注册？",
        answer:
          "只有制造商可以申请。这包括印度和外国制造商。外国品牌必须指定一名授权印度代表（AIR）。",
      },
      {
        id: "item-6",
        question: "6. AIR的作用是什么？",
        answer:
          "授权印度代表（AIR）在法律上负责代表外国制造商提交BIS申请。他们充当BIS与海外申请人之间的官方联络人。",
      },
      {
        id: "item-7",
        question: "7. BIS CRS注册需要多长时间？",
        answer:
          "该流程通常需要3-4周，前提是所有文件和测试报告都正确提交，且BIS没有提出异议。",
      },
      {
        id: "item-8",
        question: "8. BIS CRS证书的费用是多少？",
        answer:
          "费用包括：<br />测试费用：₹10,000–₹20,000 + GST<br />政府费用：每个测试报告₹53,000 + GST<br />额外费用：宣誓书、快递、AIR文件等<br />印度MSME注册制造商可享受折扣",
      },
      {
        id: "item-9",
        question: "9. BIS CRS证书的有效期是多长？",
        answer:
          "初始BIS许可证有效期为2年。如果产品和制造细节保持不变，可以续签最多5年。",
      },
      {
        id: "item-10",
        question: "10. 可以自愿获得BIS认证吗？",
        answer:
          "不可以。在CRS下，您不能自愿申请未在QCO下列出的产品。自愿认证仅适用于通过ISI计划的非CRS产品。",
      },
      {
        id: "item-11",
        question: "11. 在哪里可以找到BIS CRS产品清单？",
        answer:
          '您可以访问BIS官方网站 <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> 并导航至"CRS下的产品"部分，查看涵盖产品的完整清单。',
      },
      {
        id: "item-12",
        question: "12. BIS标志可以电子显示吗？",
        answer:
          "可以，通过电子标签，但必须符合严格的BIS规则：标签信息必须嵌入固件<br />在设备菜单中4步内轻松访问<br />物理包装仍必须携带监管信息",
      },
      {
        id: "item-13",
        question:
          "13. 如果我没有为强制性产品获得BIS注册会怎样？",
        answer:
          "将面临严厉处罚，包括：<br />产品扣押<br />海关拒绝<br />法律罚款<br />从电商平台下架<br />永久禁止进入印度市场",
      },
      {
        id: "item-14",
        question: "14. 一个BIS证书可以涵盖多个型号或品牌吗？",
        answer:
          "不可以。每个品牌和工厂位置必须单独认证。可以使用额外报告添加多个型号，但只能在同一个申请和品牌下。",
      },
      {
        id: "item-15",
        question: "15. Sun Certifications India如何帮助我？",
        answer:
          "我们提供：<br />完整的文件支持<br />实验室协调<br />BIS门户申请处理<br />查询解决和BIS跟进<br />续签和标签指导<br />通过AIR服务为外国品牌提供合规保证",
      },
    ];
  
    const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);
  
    return (
      <div id="faqs" className="my-2 scroll-mt-20">
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
          <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
            常见问题
          </h2>
          <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
            找不到您要找的答案？{" "}
            <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
              联系我们！
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
                    显示更少常见问题
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
                    显示更多常见问题
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
            BIS CRS注册下的官方产品清单
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
            下表列出了在印度需要BIS CRS注册的产品及其适用的印度标准（IS）编号和实施日期。
          </p>
  
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="按名称或IS编号搜索产品..."
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
                    序号
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                    产品
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                    IS编号
                  </TableHead>
                  <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                    实施日期
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
      </section>
    );
  };
  