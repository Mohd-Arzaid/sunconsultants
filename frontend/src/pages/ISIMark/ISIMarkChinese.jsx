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
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ISIMarkAndBISCommonTableChinese } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableChinese";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterChinese from "@/components/manual/Footer/FooterChinese";
import ServicesRightSideContentChinese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentChinese";
import ServiceAuthorChinese from "@/components/manual/ServiceAuthor/ServiceAuthorChinese";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkChinese = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableChinese />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterChinese />
    </div>
  );
};

export default ISIMarkChinese;

const ISIMarkMetaTags = () => {
  const title = "BIS ISI标志认证流程、文件和费用";
  const description =
    "印度标准局颁发的ISI标志认证授予经过严格测试和检验以符合所需标准和合规性的产品";
  const keywords =
    "ISI标志, ISI标志认证, ISI标志证书, ISI认证, ISI证书, ISI标志注册, ISI许可证, BIS ISI标志, BIS ISI标志认证";
  const canonicalUrl =
    "https://bis-certifications.com/zh/bis-isi-mark-renzheng";
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
                    <Link to="/">首页</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS ISI标志认证流程、文件和费用
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
              认证专业
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              印度制造商的
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS认证
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            作为"印度制造"愿景的一部分，BIS认证帮助制造商确保产品安全、质量和合规性。获得认证，自信地发展您的品牌。
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
    if (path.includes("/zh/bis-isi-mark-renzheng"))
      return "ISI Mark - Chinese Page";
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
    overview: "概述",
    requirement: "要求",
    documents: "文件",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentChinese />
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
        印度制造商的BIS ISI标志认证
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="印度BIS认证方案"
          title="BIS许可证方案"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        在当今的市场动态中，品牌声誉和消费者信任具有重大意义。每个消费者都希望获得关于产品安全性和可靠性的保证，以及在制造过程中采取的质量控制措施。印度标准局解决这些问题和关切，确保在印度销售的产品达到质量标准。ISI标志认证是BIS颁发的最负盛名的证书之一。
      </p>
      <p className="service-left-content-paragraph">
        对于国内制造商而言，获得BIS
        ISI标志认证不仅是为了获得合规证书，还涉及获得市场认可、品牌信心和法律保护。ISI标志在全球范围内得到认可，在电气设备、建筑材料、化学品或家用产品的生产方面增强了在印度的可信度。
      </p>
      <p className="service-left-content-paragraph">
        本文旨在探讨国内制造商的BIS
        ISI标志认证，特别关注重要性、要求、优势以及证书获取的整个过程。
      </p>
      <h2 className="service-left-content-heading-three">了解BIS及其作用</h2>
      <p className="service-left-content-paragraph">
        印度标准局（BIS）是印度消费者事务和公共部下属的国家标准化和认证机构。作为一个监管机构，它根据1986年《BIS法案》的指示，制定并维护质量标准及其在各个行业的执行。
      </p>
      <p className="service-left-content-paragraph">
        BIS作为第三方验证机构，审核产品是否符合特定的印度标准。BIS认证不仅为制造商提供法律要求，还为客户提供信任和可信度的认可标志。
      </p>
      <h2 className="service-left-content-heading-three">什么是ISI标志？</h2>
      <p className="service-left-content-paragraph">
        ISI标志（印度标准协会标志）认证是印度标准局（BIS）在印度颁发的最古老和最受认可的认证标志。ISI认证侧重于确认产品满足BIS在安全、质量、性能和可靠性方面设定的质量标准的基本要求。
      </p>
      <p className="service-left-content-paragraph">
        带有ISI标志的产品已完成彻底的实验室测试和工厂检查。它保证在生产阶段正在实施和遵循适当的质量控制程序。消费者能够获得和使用带有ISI标志的安全可靠产品。ISI标志是消费者和制造商之间信任的工具，这个标志超越了标准。
      </p>
      <p className="service-left-content-paragraph">
        需要强制性ISI认证的产品的一些示例如下：
      </p>
      <PointsListWithoutHeading
        points={[
          "各种类型的电器（电熨斗、电暖器、电线、冰箱、空调设备）",
          "水泥和钢材、UPVC管道、塑料鞋类和其他塑料产品",
          "化肥、化学品和酸类",
          "安全帽和眼镜，以及某些类型的儿童玩具",
        ]}
      />
      <p className="service-left-content-paragraph">
        有超过650种产品需要强制性BIS认证才能使用标准标志（ISI标志），这些产品属于印度标准局方案I附表I。在强制性认证方案下的产品如果没有ISI标志，不能在印度市场制造、进口或销售。强制性产品列表可通过此{" "}
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
          产品列表链接
        </a>
        访问。
      </p>
      <h2 className="service-left-content-heading-three">
        BIS认证和ISI标志有什么区别？
      </h2>
      <p className="service-left-content-paragraph">
        尽管经常被混淆并用作同义词，但BIS认证和ISI标志有特定的定义和目的：
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS认证：</strong>
        在确保产品满足所需印度标准后授予产品批准的过程。这是进行符合性评估的框架。
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISI标志：</strong>
        在获得BIS认证后授予产品的质量符号或标准标志。它表明产品已完全认证并满足所需的印度标准。
      </p>
      <p className="service-left-content-paragraph">
        这样，ISI构成了物理可认证承诺，而BIS认证提供了所需的行政框架。
      </p>

      <h2 className="service-left-content-heading-three">
        为什么BIS ISI标志认证对制造商很重要？
      </h2>

      <p className="service-left-content-paragraph">
        BIS ISI标志认证对国内制造商具有重要价值，例如：
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. 质量保证：</strong>
        ISI标志表示它已通过严格的测试和检查，从而保持了既定的最高质量标准。这反过来又提高了产品的可靠性和可信度，同时最大限度地减少了缺陷的可能性。
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. 消费者信任：</strong>
        带有ISI标志的产品通常被认为是安全有效的。这有助于品牌忠诚度，从而建立更强大和知名的品牌。
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. 市场准入：</strong>
        印度市场有大量产品，如果没有有效的ISI证书，这些产品将被严格禁止。在这种情况下，ISI标志是促进销售的门户。
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. 获得市场认可：</strong>
        在高度竞争的环境中，ISI认证产品被认为具有良好的声誉，因此比未认证的产品具有更高的竞争优势。
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. 监管合规：</strong>
        BIS标准使得产品符合这些标准的制造商能够顺利、无阻碍地运营，不受法律复杂性的影响。
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. 出口促进：</strong>
        经过ISI认证并因此拥有强大品牌声誉的产品更可能受到外国市场的青睐，因为它被认为是高质量的并符合全球标准。
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. 消费者安全：</strong>
        任何带有ISI认证的产品都保证消费者免受任何潜在危险、事故或产品性能不佳的影响。
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. 质量控制：</strong>
        进行持续检查和审查的需要保证了制造商能够为所有生产批次实现持续的质量。
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">要求</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        BIS ISI标志认证的基本要求
      </h2>
      <p className="service-left-content-paragraph">
        要获得BIS认证，国内制造商必须满足以下关键义务。
      </p>
      <PointsListWithoutHeading
        points={[
          "必须符合印度标准规范（ISS）。",
          "许可证仅颁发给制造商，不颁发给分销商或零售商。",
          "需要为每个工厂地点提交单独的认证申请。",
          "工厂必须拥有合格的人员和内部测试实验室。",
          "所有生产模式应在同一生产单位进行，从原材料到最终包装（外包必须事先获得BIS授权）。",
          "产品手册中提供了技术指导，详细说明了检查、测试和必要文件的标准。",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        国内制造商BIS ISI认证流程
      </h2>
      <p className="service-left-content-paragraph">
        获得BIS认证是一个多步骤的过程。有两种主要程序来处理BIS认证过程：正常程序和简化程序。
      </p>
      <h3 className="service-left-content-heading-three">
        1. 正常程序（60-65天）
      </h3>
      <PointsListWithoutHeading
        points={[
          "制造商建立内部实验室并使产品符合印度标准。",
          "提交申请以及所需文件。",
          "BIS官员进行工厂检查。",
          "在BIS认可的实验室进行产品测试。",
          "如果满足所有条件，则授予许可证。",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. 简化程序（35-40天）
      </h3>
      <PointsListWithoutHeading
        points={[
          "制造商提交来自BIS认可实验室的预测试产品文件。",
          "提交申请和费用。",
          "文件审查和工厂检查。",
          "在35-40天内进行最终测试并授予许可证。",
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
        <span className="service-left-content-index-heading">所需文件</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        ISI标志认证所需的文件
      </h2>
      <p className="service-left-content-paragraph">制造商需要提交以下文件：</p>
      <PointsListWithoutHeading
        points={[
          "1. 填写的申请表（根据方案，表格V或VI）",
          "2. 商业注册证书（例如，Udyam注册、MSME、GST证书）",
          "3. 工厂许可证或市政贸易许可证",
          "4. 制造机械清单",
          "5. 制造工艺流程图",
          "6. 制造场所的布局图",
          "7. 内部质量控制人员详细信息",
          "8. 测试设备详细信息",
          "9. 技术合作协议（如适用）",
          "10. 授权书/授权函",
          "11. 品牌名称授权书（如果以不同品牌申请）",
          "12. BIS认可实验室的测试报告",
          "13. 原材料采购发票",
          "14. 产品和包装照片",
          "15. 符合标准的声明",
          "16. 关于非标准产品的承诺书",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        BIS ISI标志认证的好处
      </h3>
      <p className="service-left-content-paragraph">
        对于印度制造商而言，获得BIS ISI标志认证提供特定优势：
      </p>
      <PointsListWithoutHeading
        points={[
          "全国授权：制造商有权在全国范围内销售认证产品。",
          "避免处罚：遵守BIS标准可避免巨额罚款和法律问题。",
          "增加收入：认证产品的需求更高。",
          "出口潜力：某些外国市场将ISI视为卓越标准。",
          "注重质量：认证公司显示了对质量生产原则的承诺。",
        ]}
      />

      <h3 className="service-left-content-heading-three">BIS许可证的撤销</h3>
      <p className="service-left-content-paragraph">
        认证许可证是BIS机构的唯一专有权，如果出现以下情况，它可以取消此类许可证：
      </p>
      <PointsListWithoutHeading
        points={[
          "已认证产品的质量下降。",
          "生产者不当使用ISI标志。",
          "生产者不遵守许可证的某些方面。",
        ]}
      />

      <p className="service-left-content-paragraph">
        根据2018年BIS（符合性评估）法规第11条，毫无疑问，如果未能遵守所述法规，许可证可能会被暂停或取消。
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
        对于BIS
        ISI标志认证，毫无疑问，对于印度的制造商来说，它不仅仅是官僚步骤。它有助于建立良好的声誉并实现业务的可持续增长。如果遵守BIS标准，那么就有最大的认证保证，产品是可靠的并可以销售。
      </p>

      <p className="service-left-content-paragraph">
        总之，ISI标志已不仅仅是法律合规，它已成为在信任难以获得的商业环境中的保证标志。它是市场竞争力的标志，同时也是对法规的遵守。
      </p>

      <p className="service-left-content-paragraph">
        无论您制造电子产品、建筑构件还是任何其他待售产品，BIS
        ISI认证都确保您的产品符合印度的顶级标准，同时保护您的声誉以及您的消费者。
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "什么是BIS认证，为什么它很重要？",
      answer:
        "BIS认证由印度标准局颁发，以确保产品符合印度安全和质量标准。它对法律合规、消费者信任和市场接受至关重要。",
    },
    {
      question: "BIS许可证和ISI标志有什么区别？",
      answer:
        "BIS许可证是授权制造商使用ISI标志的法律文件。ISI标志是产品上表示BIS认证的可见标签。",
    },
    {
      question: "获得BIS认证需要多长时间？",
      answer: "通常需要6-10周，具体取决于产品类型、测试要求和审计结果",
    },
    {
      question: "BIS许可证的有效期是多长？",
      answer: "通常为1到2年，之后必须续签。续签应在到期前至少30天开始。",
    },
    {
      question: "BIS认证的费用是多少？",
      answer:
        "费用各不相同，但可能在₹25,000到₹100,000+之间，包括测试、审计和许可证费用。",
    },
    {
      question: "所有产品都必须进行BIS认证吗？",
      answer: "不是。只有BIS认证方案1下列出的产品才是强制性的。",
    },
    {
      question: "如何为我的产品找到正确的IS标准？",
      answer: "访问BIS网站或咨询BIS认可的测试实验室和顾问，以确定适用的标准。",
    },
    {
      question: "外国制造商可以申请BIS认证吗？",
      answer:
        "可以。通过外国制造商认证计划（FMCS），海外实体可以获得BIS许可证以使用ISI标志。",
    },
    {
      question: "如果我的产品未通过BIS测试会怎样？",
      answer:
        "您需要纠正问题并重新提交测试。申请可能会暂停，直到证明成功合规。",
    },
    {
      question: "出口需要BIS认证吗？",
      answer:
        "虽然出口并不总是强制性的，但BIS认证可以提高可信度，并可以满足国际买家或监管机构的要求。",
    },
  ];

  return (
    <section id="faqs" className="my-2 scroll-mt-20" aria-label="常见问题">
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
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

const ISIMarkServices = () => {
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
              外国制造的BIS标志（ISI许可证）
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
                src={ISIMarkImage}
                alt="ISIMark"
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
