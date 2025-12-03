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
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import ServiceAuthorKorean from "@/components/manual/ServiceAuthor/ServiceAuthorKorean";
import FooterKorean from "@/components/manual/Footer/FooterKorean";
import { ISIMarkAndBISCommonTableKorean } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableKorean";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkKorean = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableKorean />
      </div>
      <LanguageSelector />
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterKorean />
    </div>
  );
};

export default ISIMarkKorean;

const ISIMarkMetaTags = () => {
  const title = "BIS ISI 마크 인증 프로세스, 서류, 수수료";
  const description =
    "인도 표준국에서 발행하는 ISI 마크 인증은 필요한 표준 및 규정을 충족하기 위해 엄격한 테스트와 검사를 거친 제품에 부여됩니다";
  const keywords =
    "ISI 마크, ISI 마크 인증, ISI 마크 인증서, ISI 인증, ISI 인증서, ISI 마크 등록, ISI 라이선스, BIS ISI 마크, BIS ISI 마크 인증";
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
                    <Link to="/">홈</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS ISI 마크 인증 프로세스, 서류, 수수료
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
              공인 전문 지식
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              인도 제조업체를 위한
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS 인증
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            '메이크 인 인디아' 비전의 일부로서, BIS 인증은 제조업체가 제품의
            안전성, 품질 및 규정 준수를 보장하는 데 도움을 줍니다. 인증을 받고
            브랜드를 자신 있게 성장시키세요.
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
    if (path.includes("/ko/bis-isi-mark-injeung"))
      return "ISI Mark - Korean Page";
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
        title: "유효한 성명을 입력해주세요.",
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
        title: "유효한 이메일 주소를 입력해주세요.",
        description: "이메일 형식이 올바른지 확인해주세요",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "유효한 전화번호를 입력해주세요",
        description: "전화번호는 8~15자리 숫자여야 합니다",
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
        title: "문의 폼이 성공적으로 제출되었습니다!",
        description: "문의해주셔서 감사합니다. 담당자가 곧 연락 드리겠습니다.",
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
        title: errorMessage || "문의 폼 제출에 실패했습니다!",
        description:
          "문제가 발생했습니다. 세부 정보를 확인하고 다시 시도해주세요.",
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
        상담 예약하기
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        팀과 연락하고 통화 일정을 잡으시겠습니까?
        <span className="text-black"> 지금 시도하세요</span>
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
            placeholder="성명 *"
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
            placeholder="연락처 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="회사명 *"
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
            placeholder="제품명 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="필요한 인증 *"
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
              <span>상담 예약하기</span>
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
    overview: "개요",
    requirement: "요구사항",
    documents: "서류",
    conclusion: "결론",
    faqs: "자주 묻는 질문",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentKorean />
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
        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">개요</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">인도의 BIS 인증 제도</h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="인도 BIS 인증 체계"
          title="BIS 라이선스 체계"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        현재의 시장 역학에서 브랜드의 평판과 오늘날 시장에서의 소비자 신뢰는
        매우 중요합니다. 모든 소비자는 제품의 안전성과 신뢰성에 대한 보장을
        원하며, 제조 과정에서 취해진 품질 관리 단계도 중요하게 생각합니다. 인도
        표준국은 인도에서 판매되는 제품의 품질 기준을 보장하여 이러한 문제와
        우려를 해결합니다. ISI 마크 인증은 BIS에서 수여하는 가장 명성 높은
        인증서 중 하나입니다.
      </p>
      <p className="service-left-content-paragraph">
        국내 제조업체에게 BIS ISI 마크 인증을 취득하는 것은 단순히 규정 준수
        인증서를 받는 것뿐만 아니라 시장 수용성, 브랜드 신뢰 및 법적 보호를 얻는
        것이기도 합니다. ISI 마크는 전 세계적으로 인정받으며, 전기 제품, 건축
        자재, 화학 제품 또는 가정용품의 생산에 있어 인도에서의 신뢰성을
        강화합니다.
      </p>
      <p className="service-left-content-paragraph">
        본 문서는 국내 제조업체를 위한 BIS ISI 마크 인증을 탐구하며, 특히
        중요성, 요구사항, 장점 및 인증서 취득의 전체 프로세스에 중점을 둡니다.
      </p>
      <h2 className="service-left-content-heading-three">
        BIS와 그 역할 이해하기
      </h2>
      <p className="service-left-content-paragraph">
        인도 표준국(BIS)은 소비자 문제 및 공공 서비스부 산하의 인도 국립 표준화
        및 인증 기관입니다. 규제 기관으로서 1986년 BIS법에 따라 지시된 대로
        다양한 산업에서 품질 기준을 설정하고 유지하며 시행합니다.
      </p>
      <p className="service-left-content-paragraph">
        BIS는 제품이 특정 인도 표준을 충족하는지 감사하는 제3자 검증 기관으로
        작용합니다. BIS 인증은 제조업체에게 법적 요구사항뿐만 아니라
        고객으로부터의 신뢰와 신뢰성에 대한 승인 마크도 제공합니다.
      </p>
      <h2 className="service-left-content-heading-three">
        ISI 마크란 무엇인가?
      </h2>
      <p className="service-left-content-paragraph">
        ISI 마크(인도 표준 협회 마크) 인증은 인도 표준국(BIS)에서 발행하는 가장
        오래되고 가장 인정받은 인증 마크입니다. ISI 인증은 제품이 안전성, 품질,
        성능 및 신뢰성과 관련하여 BIS가 설정한 품질 표준의 기본 요구사항을
        충족하는지 확인하는 것에 중점을 둡니다.
      </p>
      <p className="service-left-content-paragraph">
        ISI 마크를 표시한 제품은 철저한 실험실 테스트와 공장 검사를
        완료했습니다. 생산 단계에서 적절한 품질 관리 절차가 시행되고 준수되고
        있음을 보장합니다. 소비자는 ISI 마크가 부착된 안전하고 신뢰할 수 있는
        제품을 획득하고 사용할 수 있습니다. ISI 마크는 소비자와 제조업체 간의
        신뢰를 위한 도구이며, 이 마크는 표준을 넘어섭니다.
      </p>
      <p className="service-left-content-paragraph">
        필수 ISI 인증이 필요한 제품의 몇 가지 예는 다음과 같습니다:
      </p>
      <PointsListWithoutHeading
        points={[
          "모든 유형의 가전제품(전기 다리미, 전기 난로, 전선, 냉장고, 에어컨 유닛)",
          "시멘트 및 강철, UPVC 파이프, 플라스틱 신발 및 기타 플라스틱 제품",
          "비료, 화학 제품 및 산",
          "안전 헬멧 및 안경, 그리고 일부 유형의 어린이용 장난감",
        ]}
      />
      <p className="service-left-content-paragraph">
        인도 표준국의 스키ーム I 일정 I에 따라 표준 마크(ISI 마크)를 사용하기
        위해 필수 BIS 인증이 필요한 제품이 650개 이상 있습니다. 필수 인증
        스키ーム에 포함된 제품은 ISI 마크 없이는 인도 시장에서 제조, 수입 또는
        판매할 수 없습니다. 필수 제품 목록은 이{" "}
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
          제품 목록 링크
        </a>
        에서 확인할 수 있습니다.
      </p>
      <h2 className="service-left-content-heading-three">
        BIS 인증과 ISI 마크의 차이점은?
      </h2>
      <p className="service-left-content-paragraph">
        종종 혼동되어 동의어로 사용되지만, BIS 인증과 ISI 마크에는 특정 정의와
        목적이 있습니다:
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS 인증:</strong> 제품이 필요한 인도 표준을 충족하는지 확인한
        후 승인을 부여하는 프로세스입니다. 적합성 평가가 관리되는
        프레임워크입니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISI 마크:</strong> BIS 인증을 받은 후 제품에 부여되는 품질 기호
        또는 표준 마크입니다. 제품이 완전히 인증되었으며 필요한 인도 표준을
        충족함을 나타냅니다.
      </p>
      <p className="service-left-content-paragraph">
        이러한 방식으로, ISI는 물리적 인증 가능한 약속을 구성하는 반면, BIS
        인증은 필요한 관리 프레임워크를 제공합니다.
      </p>

      <h2 className="service-left-content-heading-three">
        제조업체에게 BIS ISI 마크 인증이 중요한 이유
      </h2>

      <p className="service-left-content-paragraph">
        BIS ISI 마크 인증은 국내 제조업체에게 중요한 가치를 지니고 있습니다:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. 품질 보증:</strong> ISI 마크는 엄격한 테스트와 검사를
        통과했음을 나타내며, 따라서 확립된 최고 품질 기준을 유지합니다. 이는
        차례로 제품의 신뢰성과 신뢰성을 높이면서 결함의 가능성을 최소화합니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. 소비자의 신뢰:</strong> ISI 마크가 부착된 제품은 일반적으로
        안전하고 효과적인 것으로 간주됩니다. 이는 브랜드 충성도에 기여하며,
        따라서 더 견고하고 평판 좋은 브랜드를 만듭니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. 시장 접근:</strong> 인도 시장에는 유효한 ISI 인증서가 없으면
        엄격히 금지되는 품목이 풍부합니다. 이러한 경우, ISI 마크는 판매를
        용이하게 하는 관문 역할을 합니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. 시장 진입 획득:</strong> 매우 경쟁이 치열한 환경에서 ISI 인증
        제품은 긍정적인 평판을 갖는 것으로 간주되며, 따라서 인증을 받지 않은
        다른 제품보다 더 높은 경쟁 우위를 갖습니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. 규제 준수:</strong> BIS 표준은 이러한 표준에 부합하는 제품을
        생산하는 제조업체가 법적 복잡성 없이 원활하고 자유로운 운영을 할 수
        있도록 합니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. 수출 촉진:</strong> ISI 인증을 받아 강한 브랜드 평판을 갖는
        제품은 고품질이며 글로벌 표준을 충족한다는 인식 때문에 해외 시장에서
        선호될 가능성이 높습니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. 소비자 안전:</strong> ISI 인증을 받은 모든 제품은 잠재적
        위험, 사고 또는 제품 성능 저하로부터 소비자의 안전을 보장합니다.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. 품질 관리:</strong> 지속적인 검사와 확인의 필요성은
        제조업체가 생산된 모든 배치에 대해 일정한 품질을 달성할 수 있도록
        보장합니다.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">요구사항</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        BIS ISI 마크 인증의 기본 요구사항
      </h2>
      <p className="service-left-content-paragraph">
        BIS 인증을 취득하려면 국내 제조업체는 다음 주요 의무를 이행해야 합니다.
      </p>
      <PointsListWithoutHeading
        points={[
          "인도 표준 규격(ISS)을 준수해야 합니다.",
          "라이선스는 제조업체에게만 발급 및 부여되며, 유통업체나 소매업체에게는 부여되지 않습니다.",
          "인증을 위해 각 공장 위치마다 별도의 신청서를 제출해야 합니다.",
          "공장은 자격 있는 인력과 사내 테스트 실험실을 보유해야 합니다.",
          "모든 생산 모드는 원자재부터 최종 포장까지 동일한 생산 단위에서 수행되어야 합니다(아웃소싱은 사전에 BIS로부터 승인되어야 함).",
          "기술 지침은 제품 매뉴얼에서 제공되며, 검사, 테스트 및 필요한 서류에 대한 표준을 상세히 설명합니다.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        국내 제조업체를 위한 BIS ISI 인증 프로세스
      </h2>
      <p className="service-left-content-paragraph">
        BIS 인증을 확보하는 것은 다단계 프로세스입니다. BIS 인증 프로세스에는
        일반 절차와 간소화 절차라는 두 가지 주요 절차가 있습니다.
      </p>
      <div className="service-left-content-heading-three">
        1. 일반 절차(60-65일)
      </div>
      <PointsListWithoutHeading
        points={[
          "제조업체는 사내 실험실을 설치하고 제품을 인도 표준에 부합시킵니다.",
          "필요한 서류와 함께 신청서를 제출합니다.",
          "BIS 공무원에 의한 공장 검사.",
          "BIS 승인 실험실에서 제품 테스트.",
          "모든 조건이 충족되면 라이선스가 부여됩니다.",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. 간소화 절차(35-40일)
      </div>
      <PointsListWithoutHeading
        points={[
          "제조업체는 BIS에서 인정한 실험실에서 사전 테스트된 제품의 서류를 제출합니다.",
          "수수료와 함께 신청서를 제출합니다.",
          "서류 심사 및 공장 검사.",
          "35-40일 이내에 최종 테스트 및 라이선스 부여.",
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
        <span className="service-left-content-index-heading">필요 서류</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        ISI 마크 인증에 필요한 서류
      </h2>
      <p className="service-left-content-paragraph">
        제조업체가 다음 서류를 제시해야 합니다:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. 완성된 신청서(스키ーム에 따라 양식 V 또는 VI)",
          "2. 사업자 등록 증명서(예: Udyam 등록, MSME, GST 증명서)",
          "3. 공장 라이선스 또는 시립 무역 라이선스",
          "4. 제조 기계 목록",
          "5. 제조 공정 흐름도",
          "6. 제조 시설 배치도",
          "7. 사내 품질 관리 직원 세부 정보",
          "8. 테스트 장비 세부 정보",
          "9. 기술 협력 계약서(해당하는 경우)",
          "10. 위임장/인가서",
          "11. 브랜드명 인가서(다른 브랜드로 신청하는 경우)",
          "12. BIS 승인 실험실의 테스트 보고서",
          "13. 원자재 조달 송장",
          "14. 제품 및 포장 사진",
          "15. 표준 준수 선언서",
          "16. 비표준 제품에 대한 약속서",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        BIS ISI 마크 인증의 장점
      </h3>
      <p className="service-left-content-paragraph">
        인도 제조업체에게 BIS ISI 마크 인증을 취득하는 것은 특정한 장점을
        제공합니다:
      </p>
      <PointsListWithoutHeading
        points={[
          "전국 승인: 제조업체는 인증된 제품을 전국에서 판매할 수 있는 권한을 갖습니다.",
          "벌금 회피: BIS 표준을 준수하면 막대한 벌금과 법적 문제를 피할 수 있습니다.",
          "수익 증대: 인증된 제품에 대한 수요가 더 높습니다.",
          "수출 잠재력: 특정 해외 시장은 ISI를 우수성의 표준으로 인정합니다.",
          "품질 중시: 인증된 회사는 품질 생산 원칙에 대한 헌신을 보여줍니다.",
        ]}
      />

      <h3 className="service-left-content-heading-three">BIS 라이선스 취소</h3>
      <p className="service-left-content-paragraph">
        인증을 위한 라이선스는 BIS 당국의 단독 권한이며 다음과 같은 경우 해당
        라이선스를 취소할 수 있습니다:
      </p>
      <PointsListWithoutHeading
        points={[
          "인증된 제품의 품질이 저하되는 경우.",
          "제조업체가 ISI 마크를 부적절하게 사용하는 경우.",
          "제조업체가 라이선스의 특정 측면을 따르지 않는 경우.",
        ]}
      />

      <p className="service-left-content-paragraph">
        BIS(적합성 평가) 규정 2018의 규정 11에 따르면, 명시된 규정을 준수하지
        못한 경우 라이선스가 정지되거나 취소될 수 있다는 데 의심의 여지가
        없습니다.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">결론</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">결론</h2>

      <p className="service-left-content-paragraph">
        BIS ISI 마크 인증에 대해 다시 한번 말하면, 인도의 제조업체에게 이것은
        단순히 관료적인 절차 그 이상입니다. 긍정적인 평판을 구축하고
        비즈니스에서 지속 가능한 성장을 달성하는 데 도움이 됩니다. BIS 표준을
        준수하면 제품이 신뢰할 수 있고 판매 준비가 완료되었다는 최상의 인증
        보장이 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        결론적으로, ISI 마크는 단순한 법적 규정 준수 이상이 되었으며, 신뢰를
        얻기 어려운 비즈니스 환경에서 보장의 마크가 되었습니다. 이것은 규정
        준수와 함께 시장에서의 경쟁력을 나타내는 신호입니다.
      </p>

      <p className="service-left-content-paragraph">
        전자 제품, 건축 요소 또는 판매용 기타 제품을 제조하든 상관없이, BIS ISI
        인증은 귀하의 평판과 소비자를 보호하면서 제품이 인도의 최고 수준 표준에
        부합하도록 보장합니다.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "BIS 인증이란 무엇이며 왜 중요한가요?",
      answer:
        "BIS 인증은 인도 표준국에서 발행하여 제품이 인도의 안전 및 품질 표준을 준수하도록 보장합니다. 법적 규정 준수, 소비자 신뢰 및 시장 수용에 필수적입니다.",
    },
    {
      question: "BIS 라이선스와 ISI 마크의 차이점은 무엇인가요?",
      answer:
        "BIS 라이선스는 제조업체가 ISI 마크를 사용할 수 있도록 인가하는 법적 문서입니다. ISI 마크는 제품에 부착되는 BIS 인증을 나타내는 눈에 보이는 라벨입니다.",
    },
    {
      question: "BIS 인증을 받는 데 얼마나 걸리나요?",
      answer:
        "제품 유형, 테스트 요구사항 및 감사 결과에 따라 일반적으로 6~10주가 소요됩니다.",
    },
    {
      question: "BIS 라이선스의 유효 기간은 얼마인가요?",
      answer:
        "보통 1~2년이며, 그 이후 갱신해야 합니다. 갱신은 만료일 최소 30일 전에 시작해야 합니다.",
    },
    {
      question: "BIS 인증 비용은 얼마인가요?",
      answer:
        "비용은 다양하지만 테스트, 감사 및 라이선스 수수료를 포함하여 ₹25,000~₹100,000 이상이 될 수 있습니다.",
    },
    {
      question: "모든 제품에 BIS 인증이 필수인가요?",
      answer: "아니요. BIS 인증 스키ーム 1에 나열된 제품에만 필수입니다.",
    },
    {
      question: "제품에 적합한 IS 표준을 어떻게 찾을 수 있나요?",
      answer:
        "BIS 웹사이트를 방문하거나 BIS 인정 테스트 실험실 및 컨설턴트와 상담하여 적용 가능한 표준을 확인하세요.",
    },
    {
      question: "외국 제조업체가 BIS 인증을 신청할 수 있나요?",
      answer:
        "예. 외국 제조업체 인증 스키ーム(FMCS)을 통해 해외 기업은 ISI 마크 사용을 위한 BIS 라이선스를 취득할 수 있습니다.",
    },
    {
      question: "제품이 BIS 테스트에 실패하면 어떻게 되나요?",
      answer:
        "문제를 수정하고 테스트를 위해 다시 제출해야 합니다. 성공적인 규정 준수가 입증될 때까지 신청이 일시 중지될 수 있습니다.",
    },
    {
      question: "수출에 BIS 인증이 필요한가요?",
      answer:
        "수출에 항상 필수는 아니지만, BIS 인증은 신뢰성을 높이고 국제적인 구매자나 규제 기관을 만족시킬 수 있습니다.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="자주 묻는 질문"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          자주 묻는 질문
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          찾고 계신 답변이 없나요?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            문의하기
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
      path: "/a-guide-to-bis-certification-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-isi-mark-renzheng",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/bis-isi-mark-zertifizierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/bis-isi-mark-certificering",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-isi-mark-shounin",
    },
    // {
    //   code: "ko",
    //   name: "Korean",
    //   flag: "https://flagcdn.com/w320/kr.png",
    //   path: "/ko/bis-isi-mark-injeung",
    // },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-marque-isi",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/certificacion-bis-marca-isi",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-isi-mark-raprong",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/sertifikasi-bis-isi-mark",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-isi-mark",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-isi-mark",
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

const ISIMarkServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              우리의 서비스
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
              외국 제조업체용 BIS 마크 (ISI 라이선스)
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
              EPR 인증서
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
              LMPC 인증서
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
                src={ISIMarkImage}
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              인도 제조업체용 ISI 마크 (BIS)
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
