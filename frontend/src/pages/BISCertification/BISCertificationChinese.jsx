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
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
import { ISIMarkAndBISCommonTableChinese } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableChinese";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationChinese = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableChinese />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterChinese />
    </div>
  );
};

export default BISCertificationChinese;

const BISCertificationMetaTags = () => {
  const title = "BIS认证类型、流程、文件和费用";
  const description =
    "BIS认证是指从印度标准局（BIS）获得质量标准证书的过程，用于在印度制造和销售各种产品。";
  const keywords =
    "BIS认证, BIS认证流程, BIS注册, BIS注册流程, BIS认证计划, 产品认证计划, 强制性认证计划, BIS强制性产品清单, ISI标志, BIS FMCS, BIS标志计划, 生态标志计划, BIS认证顾问, ISI认证顾问, BIS ISI标志顾问, 什么是BIS认证, BIS认证下载, BIS认证费用, 印度BIS认证, BIS认证全称, BIS认证印度, 印度BIS认证, BIS认证含义, BIS认证检查, 印度BIS许可证在线, BIS认证在线, BIS证书, BIS证书在线。";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    <Link to="/">首页</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    面向进口商和制造商的印度BIS认证
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
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              认证专业知识
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              印度BIS认证
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            面向进口商和制造商
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS认证确保产品在印度的质量和安全。许多产品都需要此认证，需要进行测试、文件准备和审批。
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
                查看服务
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <BISCertificationContactForm />
      </div>
    </section>
  );
};

const BISCertificationContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/zh/bis-zheng-shu-shi-shen-me-yin-du-bis"))
      return "BIS Certification - Chinese Page";
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
      const errorMessage = error.response?.data?.message || "出了些问题";
      toast({
        variant: "destructive",
        title: errorMessage || "提交联系表单详细信息失败！",
        description: "出了些问题。请检查您的详细信息并重试。",
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
    overview: "概述",
    schemes: "计划",
    process: "流程",
    documents: "文件",
    cost: "费用",
    air: "授权代表",
    conclusion: "结论",
    faqs: "常见问题",
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentChinese />
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
        <ServiceAuthorChinese />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">概述</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        面向印度制造商的BIS ISI标志认证
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Indian BIS Certification"
          title="BIS Certificate for Indian manufactures"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        简介：为什么BIS认证很重要
      </h2>

      <p className="service-left-content-paragraph">
        例如，一位来自德国的制造商发明了一种独特的电子设备，并计划在快速发展的印度市场销售。该设备独特、安全，并在欧洲获得了批准。然而，当该设备被带到印度港口时，海关官员扣留了该设备。问题是，"为什么？"答案是，该设备应该具有BIS认证，这是在印度销售电子产品的关键部分。
      </p>

      <p className="service-left-content-paragraph">
        许多全球和印度制造商每年都面临同样的情况。对于印度消费者来说，产品上的BIS标志不仅仅是一个标志，它是信任的标志，表明产品已经过质量、安全性和可靠性的测试。对于企业来说，它是进入世界上最大市场之一的门户。
      </p>

      <p className="service-left-content-paragraph">
        本文将回答有关BIS认证的所有问题，包括其必要性、流程、好处、计划、成本，以及面向外国和国内制造商的系统和导航。
      </p>

      <h2 className="service-left-content-heading-three">
        什么是面向制造商和进口商的BIS认证？
      </h2>

      <p className="service-left-content-paragraph">
        BIS认证是由印度标准局（BIS）提供的质量保证和安全认证，BIS是印度消费者事务部下属的国家认证机构。BIS认证确保产品在性能、安全性和质量方面符合印度标准（IS）。
      </p>
      <p className="service-left-content-paragraph">
        当产品满足这些质量标准要求时，印度标准局会颁发BIS许可证或BIS证书，表明产品有资格使用ISI标志（适用于国内计划）或带有唯一注册号的CRS标志（根据BIS强制性注册计划）。
      </p>
      <p className="service-left-content-paragraph">
        对于许多印度制造商和进口商来说，获得BIS认证是必须的。它涵盖广泛的产品，包括电器、水泥和钢铁产品、包装饮用水、手机、LED灯、移动电源等电子产品、贵金属珠宝（通过标志）等等。这些强制性产品的制造商和进口商在没有BIS认可的情况下不能在印度合法销售或分销商品。
      </p>

      <h2 className="service-left-content-heading-three">印度BIS的简要历史</h2>

      <p className="service-left-content-paragraph">
        印度标准局（BIS）成立于1986年，接管了1947年成立的印度标准协会（ISI）。BIS现在被认为是印度标准的质量守护者，已将其做法与国际水平接轨，并为印度条件做出了必要的修正。
      </p>

      <h3 className="service-left-content-heading-three">重要里程碑</h3>

      <PointsListWithoutHeading
        points={[
          "1947年，ISI成立，以支持国家独立后的质量控制体系。",
          "1955年，ISI标志被授予，成为印度最著名的质量标志之一。",
          "1986年，通过了BIS法案，用印度标准局取代了ISI。",
          "2016年和2018年，进一步的修正丰富了BIS的职责，使标志和产品认证更加彻底。",
        ]}
      />

      <p className="service-left-content-paragraph">
        目前，BIS保证跨多个行业的数千种工具和机械为印度用户提供安全、可靠和标准化。
      </p>

      <h2 className="service-left-content-heading-three">
        为什么BIS认证在印度是强制性的？
      </h2>
      <p className="service-left-content-paragraph">
        印度市场庞大、不断变化，对价格变化敏感。然而，这种开放性也使市场暴露于廉价和不安全的商品。在这种情况下，BIS认证起到了保护屏障的作用。
      </p>
      <PointsListWithoutHeading
        points={[
          "消费者安全 - 保护人们免受潜在事故、健康问题和欺骗。",
          "市场监管 - 确保不符合标准的产品不进入印度市场。",
          "信任和信心 - 增强消费者对本地和国际产品的信任。",
          "全球对接 - 帮助外国公司与印度的监管结构对接。",
          "公平竞争 - 每个市场参与者，无论规模大小，都保证纯粹在质量上竞争。",
        ]}
      />
      <p className="service-left-content-paragraph">
        包装饮用水的BIS认证是缺乏认证可能造成健康问题的一个例子。加热器、烤面包机和其他电器产品认证标准的同样缺乏可能导致火灾。因此，通过BIS认证，政府确保这些挑战得到解决。
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">流程</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS认证流程</h2>

      <p className="service-left-content-paragraph">
        BIS认证流程遵循结构化流程：
      </p>

      <PointsListWithoutHeading
        points={[
          "确定相关标准：选择适用的印度标准（IS）。",
          "提交申请：向BIS提交文件并附上任何相关文件。",
          "产品测试：在BIS认可的实验室进行测试。",
          "工厂检查：BIS官员检查设施。",
          "BIS许可证：成功评估后颁发证书。",
          "监督：持续合规以及许可证变更成为新常态。",
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
        <span className="service-left-content-index-heading">文件</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS认证所需文件</h2>

      <p className="service-left-content-paragraph">
        完整的文件包确保流程顺利进行。主要要求包括：
      </p>

      <PointsListWithoutHeading
        points={[
          "营业执照或公司注册文件。",
          "制造工艺流程图。",
          "机械和设备清单。",
          "产品详情和技术规格。",
          "BIS认可实验室的测试报告。",
          "质量控制手册。",
          "商标证书。",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        对于外国制造商：
      </h3>

      <PointsListWithoutHeading
        points={["指定授权印度代表（AIR）。", "代表证明和身份文件。"]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">费用</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS认证费用</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                费用组成部分
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                详情
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                申请费
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                一次性、不可退还的费用，取决于产品类型
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                测试费用
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                根据复杂程度；支付给BIS认可的实验室
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                年度许可证费
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                每年支付以维持BIS许可证
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                检查/工厂审计费用
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                如果BIS官员访问工厂则收费（国内或国际差旅费另计）
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                咨询费（如适用）
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                可选，用于顾问提供的端到端合规帮助
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
      {/* AIR */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">授权代表</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        授权印度代表（AIR）的作用
      </h2>

      <p className="service-left-content-paragraph">
        对于外国制造商来说，授权印度代表（AIR）至关重要。
      </p>

      <PointsListWithoutHeading
        points={[
          "处理与BIS的所有沟通。",
          "收集并提交文件，然后促进检查过程。",
          "确保认证前后的合规性。",
          "必须是印度公民或具有注册本地地址的组织。",
        ]}
      />

      <p className="service-left-content-paragraph">
        在没有AIR的情况下，外国公司获得BIS认证是不可能的。
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">结论</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">结论</h2>

      <p className="service-left-content-paragraph">
        拥有BIS认证是在印度开展业务的必要条件。它不再是业务中的可选认证。它对于业务成功和建立信任至关重要。BIS对于在印度的安全和成功至关重要。对于制造商和进口商来说，它提供了一个简单安全的业务设置环境。法律问题和罚款不再是问题。有了BIS标志，消费者信任得到保证。
      </p>

      <p className="service-left-content-paragraph">
        印度是世界上最大的增长经济体之一，获得在那里销售的机会可以帮助出口商成长。无论您是印度还是国外的制造商，都需要BIS许可证才能在印度市场制造或销售产品。这是必需的，它开启了与印度不断增长人口相关的商业前景。这是对安全、消费者信任、品牌声誉、可信度和长期增长的投资。
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">计划</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS认证计划</h2>

      <p className="service-left-content-paragraph">
        BIS设计了多种认证计划，适用于不同的行业和产品类型。每个计划都旨在满足行业和产品的特定需求。
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – 外国制造商认证计划",
          "ISI标志计划（国内制造商）",
          "印度BIS下的X计划",
          "CRS – 强制性注册计划",
          "标志计划（珠宝和贵金属）",
          "生态标志认证",
          "管理体系认证计划（MSCS）",
          "LRS（实验室认可计划）",
        ]}
        linkMap={{
          "FMCS – 外国制造商认证计划":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISI标志计划（国内制造商）":
            "a-guide-to-bis-certification-indian-bis",
          印度BIS下的X计划: "indian-bis-certification-under-scheme-x",
          "CRS – 强制性注册计划": "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISI标志计划（国内制造商）
      </h3>

      <p className="service-left-content-paragraph">
        对于印度制造商来说，获得BIS许可证是确保其产品在国内合法销售的先决条件。此认证由印度标准局（BIS）颁发，以证明产品满足与质量、安全性和性能基准相关的印度标准。这包括工厂审计、产品测试和与BIS参数的合规性检查。一旦产品通过，制造商就可以在产品上使用ISI标志。这个标志是制造商的商标，帮助客户识别真正的ISI认证产品。
      </p>

      <p className="service-left-content-paragraph">
        无论是电子产品、钢铁、水泥、塑料还是建筑材料，获得BIS证书对于获得市场准入至关重要。与获得消费者信心不同，BIS证书增强了印度制造商的声誉，使他们能够参与政府合同，并开辟了许多其他商业机会。最重要的是，缺乏BIS认证可能会产生破坏性后果，从法律罚款和产品召回到在印度完全禁止销售。因此，BIS合规性不仅仅是法律要求，它是扩大和维持消费者信心的有针对性的策略。
      </p>

      <p className="service-left-content-paragraph">
        对于印度制造商来说，ISI标志计划是最负盛名的标志。根据该计划，印度制造商需要在其产品在BIS认可的测试设施进行测试。制造场所需要接受检查和测试。合规产品被批准使用ISI标志。在没有ISI标志的情况下供应水泥、液化石油气瓶、电缆、包装饮用水等产品是违法行为。
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – 外国制造商认证计划
      </h3>

      <p className="service-left-content-paragraph">
        外国制造商认证计划（FMCS）是印度标准局为希望进入印度市场的外国公司制定的计划。该计划保证在国外制造的产品符合所需印度标准的安全性、质量和性能保证。根据FMCS，希望在印度销售产品的外国公司必须首先获得印度标准局证书或许可证。与印度制造商一样，外国制造商也需要获得BIS许可证才能在其产品上使用ISI标志。理想的ISI标志是在包括工厂和严格的产品样品测试（对照印度标准）的广泛评估后授予的。
      </p>

      <p className="service-left-content-paragraph">
        外国制造商需要指定一名授权印度代表（AIR），他负责沟通和协调，作为与印度标准局（BIS）就该计划进行联系的第一联系人。它包括提交申请、深入合规评估以及承担所有必要义务以在截止日期内实现合规。通过遵循FMCS指南，外国公司能够进入印度市场，并获得客户的商誉。任何带有ISI标志的产品都显示出在印度的高质量、安全性和可靠性保证。
      </p>

      <p className="service-left-content-paragraph">
        属于受监管类别的外国产品在没有FMCS认证的情况下不允许进入印度。
      </p>

      <h3 className="service-left-content-heading-three">
        X计划（综合技术法规）
      </h3>

      <p className="service-left-content-paragraph">
        X计划，或综合技术法规，是印度标准局设计的另一个BIS认证计划，旨在帮助简化机械和电气领域的行业合规程序。与其他认证计划不同，X计划专注于减少文件、评估和审批，同时确保产品符合印度标准。带有标准标志的产品具有卓越的质量和安全性，在通过型式测试、工厂检查和强制性要求的简单认证后可以销售。
      </p>

      <p className="service-left-content-paragraph">
        X计划涵盖重型机械和电气设备的安全指南，适用于泵、起重机、变压器、机床和其他重型工程产品。这些是最相关的行业，所有行业都需要可靠性和安全性。X计划很方便，因为它缩短了复杂BIS认证的时间和成本。它旨在简化合规流程，以便在不影响质量和安全标准的情况下促进更快的营销许可和增强声誉。印度标准局的持久和传统声誉使国际贸易更容易，这对公司满足合规要求和提高竞争力至关重要。
      </p>

      <p className="service-left-content-paragraph">
        BIS
        X计划是进入印度重型机械行业的强制性要求。这个新计划对于改善市场竞争、创新和法规合规性很重要，这些通过这种简化而强大的结构得到简化。
      </p>

      <h3 className="service-left-content-heading-three">
        强制性注册计划（CRS）
      </h3>

      <p className="service-left-content-paragraph">
        印度标准局（BIS）制定了一个名为强制性注册计划（CRS）的BIS认证计划，旨在规范印度的IT和电子产品。它专注于评估高风险产品（如LED灯、手机、笔记本电脑、移动电源和其他消费电子产品）对照印度标准的安全性和质量。与ISI计划不同，CRS不颁发ISI标志，但符合该计划的认证产品带有带有唯一注册号的CRS标志。所有电子和IT产品都需要在BIS认可的实验室进行测试，并在BIS
        CRS正式注册，用于确保在销售或进口到印度之前的合规性。
      </p>

      <p className="service-left-content-paragraph">
        该计划对于保护印度消费者免受不安全、不合格或假冒电子产品的影响至关重要，特别是在快速发展的数字市场的情况下。印度和外国制造商都需要获得CRS认证。外国公司必须指定授权印度代表AIR以确保合规。BIS不断更新CRS涵盖的产品清单，以包括新产品和技术以及新兴的安全问题。对于制造商来说，在CRS下获得BIS注册是一个额外的优势，因为它有助于法规合规，还增加了客户信任、公司声誉以及在印度电子行业的市场准入。
      </p>

      <h3 className="service-left-content-heading-three">标志计划</h3>

      <p className="service-left-content-paragraph">
        在印度，根据标志计划，黄金和白银珠宝的标志是强制性的，由印度标准局（BIS）监管，BIS保证珠宝的纯度和真实性。贵金属制品在BIS认可的检测和标志中心（AHC）进行测试，然后加盖标志。只有在制品满足最初制定的印度标准时，此过程才能完成。珠宝商必须首先获得BIS许可证，才能销售带标志的珠宝。这是合法这样做的唯一方式。珠宝商有义务接受并完成产品测试、BIS审计和持续合规监控，以销售带标志的珠宝。最终，该过程保护消费者，确保纯度、重量和质量，并限制珠宝市场的违规行为和欺诈。
      </p>

      <p className="service-left-content-paragraph">
        对于印度消费者来说，黄金和白银不仅是装饰品，也是主要投资，这使得信任和透明度至关重要。标志珠宝是该国普通公民的保证标志，表明每件待售珠宝都经过了对照各种国家基准和公平交易实践的广泛测试。珠宝商可以通过标志珠宝来展示其可信度和市场声誉。无法遵守既定规则会带来惩罚，可能包括暂停许可证。对于BIS下的标志，它作为基于原则和法律义务的履行。这不仅提高了消费者满意度，还增强了整个印度珠宝市场。对于小型零售商和大型制造商都是如此。
      </p>

      <h3 className="service-left-content-heading-three">生态标志认证</h3>

      <p className="service-left-content-paragraph">
        生态标志是由印度标准局（BIS）创建的以创新为中心的认可计划，旨在推广环保商品。与主要关注安全性和质量参数的传统认证不同，生态标志授予符合印度标准并在商品生命周期的任何一个或多个阶段显示出至少某种程度减少不利环境影响水平的商品。生态标志认证只有在经过大量测试和证明标准合规性后才授予，包括排放水平、无毒性、生物降解率、回收能力以及与系统的整体相互作用。生态标志，就像ISI标志一样，是政府保证的标志，已被授予认证标志的地位，尽管具有更明显的环境可持续性目标。
      </p>

      <p className="service-left-content-paragraph">
        带有生态标志的BIS许可证证明公司从事负责任的制造并关心环境。它确保法律合规，并为保护性消费者和面向可持续发展的企业创造竞争优势。生态标志有助于行业信任和采用绿色实践，并有助于消费者信任他们购买的产品是安全且对环境负责的。生态标志支持印度在BIS下加强质量保护与环境保护的愿景。
      </p>

      <h3 className="service-left-content-heading-three">
        管理体系认证计划（MSCS）
      </h3>

      <p className="service-left-content-paragraph">
        由印度标准局（BIS）发起的管理体系认证计划（MSCS）是一个逐步程序，用于评估和认可相关公司实施国际接受和认可的管理体系。MSCS框架包括ISO标准，如ISO
        9001质量管理、ISO 14001环境管理、ISO
        45001职业健康与安全管理体系等。MSCS认证公司的合法运营、一致性和持续改进。认证公司经过大量评估和审计，这有助于他们在客户、监管机构和利益相关者中建立信任，从而加强安全、质量和可持续性的保证。
      </p>

      <p className="service-left-content-paragraph">
        BIS是印度的国家标准机构，是增强组织在印度国内外声誉和可信度的认证机构。MSCS除了通过定期监督和重新认证促进问责制外，还使企业能够积极支持公共主导的计划，如"印度制造"和"自力更生的印度"。除了法律义务外，该计划还有助于培养诚信、效率和公平交易的文化。MSCS鼓励认证公司的贸易和投资，BIS在该国质量生态系统的发展中发挥着关键作用。
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – 实验室认可计划
      </h3>

      <p className="service-left-content-paragraph">
        在印度标准局（BIS）下，实验室认可计划（LRS）是保证为BIS批准测试和认证产品的实验室的可靠性和整体能力的系统的组成部分。这些实验室在多个属性上受到严格评估，包括技术知识、劳动力质量、基础设施以及实验室与ISO/IEC
        17025标准的整体能力和满意度。这些实验室一旦获得批准，就被允许对产品进行测试，这些产品的符合性评估是各种BIS认证计划（如ISI标志计划和强制性注册计划（CRS））的一部分。很明显，对于制造商，特别是进出口商来说，从LRS认可的实验室获得的报告是实现BIS证书的关键要求，这对某些产品是法律要求。
      </p>

      <p className="service-left-content-paragraph">
        LRS通过保持测试结果的公平性并确保所有结果一致且符合全球基准，同时仅认可可靠和健全的实验室，从而增强了印度的保证系统。为了维护诚信和透明度，BIS对认可的实验室进行定期审计、能力测试和监督。这种认证的认可使BIS能够提高消费者的信任，同时使认证过程对行业更加高效，因为只有安全、合规和高质量的产品才会在印度市场提供。对于旨在获得BIS认证的组织来说，与LRS认可的实验室合作是实现合规和市场准入的最重要条件。
      </p>

      <h3 className="service-left-content-heading-three">需要BIS认证的产品</h3>

      <p className="service-left-content-paragraph">
        BIS认证适用于多种产品。示例包括：
      </p>

      <PointsListWithoutHeading
        points={[
          "电气和电子产品 – LED灯、手机、适配器、笔记本电脑。",
          "建筑材料 – 水泥、钢筋、结构产品。",
          "消费品 – 包装饮用水、烹饪气瓶。",
          "珠宝和贵金属 – 标志下的黄金和白银制品。",
          "工业设备 – 泵、变压器、机床。",
        ]}
      />

      <p className="service-left-content-paragraph">
        随着新风险和新技术的出现，清单继续增长。
      </p>

      <h3 className="service-left-content-heading-three">BIS认证的好处</h3>

      <p className="service-left-content-paragraph">
        对于公司来说，BIS证书提供的不仅仅是法律合规性。
      </p>

      <PointsListWithoutHeading
        points={[
          "法律合规：无罚款、无禁令、无扣押。",
          "市场准入：在印度销售受监管产品所需。",
          "消费者信任：以广为人知的ISI标志作为证明标志建立。",
          "竞争优势：认证公司很容易与未认证的竞争对手区分开来。",
          "出口便利：许多国际买家理解并赞赏BIS认证。",
          "参与投标：许多政府项目为BIS认证的商品授予合同。",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "什么是印度的BIS认证？",
      answer:
        "BIS认证是由印度标准局（BIS）颁发的质量保证认证，以确保产品符合印度在安全、性能和质量方面的标准。它对各种产品类别是强制性的，有助于消费者保护和法规合规。",
    },
    {
      question: "为什么我需要BIS证书？",
      answer:
        "BIS证书对于在印度合法制造、进口、分销或销售某些产品至关重要。它向消费者保证产品符合印度标准的安全和质量指南。",
    },
    {
      question: "BIS认证下的ISI标志是什么？",
      answer:
        "ISI标志是BIS认证计划下提供的认证符号。它表明产品符合印度标准，并已通过印度BIS的适当测试和注册获得认证。",
    },
    {
      question: "谁在印度颁发BIS许可证？",
      answer:
        "BIS许可证由印度标准局（印度BIS）颁发，这是消费者事务、食品和公共分配部下属的国家标准机构。",
    },
    {
      question: "BIS认证计划有哪些不同类型？",
      answer:
        "主要的BIS认证计划包括ISI标志计划、强制性注册计划（CRS）、外国制造商认证计划（FMCS）、珠宝标志、生态标志认证，以及工业机械的X计划。",
    },
    {
      question: "BIS认证下的X计划是什么？",
      answer:
        "X计划是适用于工业产品的简化BIS认证流程，如泵、变压器、机床和起重机。它确保在不影响对印度标准合规性的情况下更快获得批准。",
    },
    {
      question: "哪些产品在印度需要BIS认证？",
      answer:
        "根据印度BIS的要求，电器、电子产品、厨具、水泥、钢铁、黄金珠宝、手机和变压器等产品需要BIS认证。",
    },
    {
      question: "所有产品都必须进行BIS注册吗？",
      answer:
        "不，BIS注册仅对强制性认证计划中列出的产品是强制性的。但是，也可以选择自愿BIS认证以增强产品可信度。",
    },
    {
      question: "BIS许可证有效期多长？",
      answer:
        "BIS许可证通常有效期为一年到两年，必须在到期前续签才能继续使用ISI标志或维持BIS注册状态。",
    },
    {
      question: "在印度获得BIS认证的步骤是什么？",
      answer:
        "BIS认证流程包括确定适用的印度标准、提交申请、产品测试、工厂检查，以及批准后颁发BIS证书。",
    },
    {
      question: "外国制造商可以申请BIS许可证吗？",
      answer:
        "是的，根据外国制造商认证计划（FMCS），外国公司可以申请BIS许可证以在印度销售产品。他们必须指定授权印度代表（AIR）。",
    },
    {
      question: "AIR在BIS认证中的作用是什么？",
      answer:
        "AIR（授权印度代表）充当外国制造商和印度BIS之间的联络人。他们负责文件、沟通以及遵守BIS认证要求。",
    },
    {
      question: "如何在线申请BIS注册？",
      answer:
        "您可以通过官方BIS门户在线申请BIS注册。该流程包括提交表格、上传文件、测试报告和支付费用。",
    },
    {
      question: "BIS证书需要哪些文件？",
      answer:
        "所需文件包括营业执照、产品规格、制造流程、实验室测试报告、工厂布局、质量手册和授权表格（适用于外国制造商）。",
    },
    {
      question: "在印度BIS认证费用是多少？",
      answer:
        "BIS认证的费用取决于产品类型、测试要求、计划类型（ISI、CRS、FMCS）以及申请人是国内还是国外。费用包括申请费、测试费和检查费用。",
    },
    {
      question: "所有BIS认证产品都必须使用ISI标志吗？",
      answer:
        "不，只有ISI计划下的产品才需要携带ISI标志。CRS或标志计划下的产品根据BIS注册规范遵循不同的标签协议。",
    },
    {
      question: "我可以为环保产品获得BIS认证吗？",
      answer:
        "是的，符合环境标准的产品可以在生态标志计划下获得BIS认证，这确保符合印度在环境安全方面的标准。",
    },
    {
      question: "BIS认证和BIS注册有什么区别？",
      answer:
        "BIS认证通常指在ISI、FMCS或标志计划下的批准，而BIS注册通常与电子产品的CRS计划相关。",
    },
    {
      question: "什么是强制性注册计划（CRS）？",
      answer:
        "CRS是面向IT和电子产品的BIS注册计划，如LED灯、手机和移动电源。它确保产品符合与安全相关的印度标准。",
    },
    {
      question: "ISI标志和BIS证书是同一回事吗？",
      answer:
        "不完全一样。ISI标志是授予BIS认证计划下认证产品的符号。BIS证书是颁发给制造商的法律文件。",
    },
    {
      question: "一个BIS许可证可以涵盖多个产品吗？",
      answer:
        "不，即使产品相似，每种产品类型和每个制造地点都需要单独的BIS许可证。",
    },
    {
      question: "如果我在没有BIS认证的情况下销售产品会怎样？",
      answer:
        "在没有有效BIS许可证的情况下销售需要BIS认证的产品在印度是非法的，可能导致罚款、产品召回或禁令。",
    },
    {
      question: "获得BIS认证需要多长时间？",
      answer:
        "BIS认证流程通常需要30到90天，具体取决于产品类型、测试要求以及申请人是国内还是国外。",
    },
    {
      question: "BIS认证在全球范围内被接受吗？",
      answer:
        "虽然BIS认证是印度特有的，但它通过展示对严格印度标准的合规性来增强全球可信度。一些BIS认证的产品也在相互认可协议下被接受。",
    },
    {
      question: "我需要多久更新一次BIS许可证？",
      answer:
        "BIS许可证必须每年或每两年更新一次。制造商必须保持对印度标准的合规性，并通过监督审计以更新其BIS证书。",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          常见问题 – 印度BIS认证
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
    // {
    //   code: "zh",
    //   name: "Chinese",
    //   flag: "https://flagcdn.com/w320/cn.png",
    //   path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    // },
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
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/que-es-el-certificado-bis-bis-indio",
    },
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
              外国制造商的BIS标志（ISI许可证）
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
                src={ISIMarkImage}
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
