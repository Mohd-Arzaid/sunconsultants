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
import ServiceAuthorKorean from "@/components/manual/ServiceAuthor/ServiceAuthorKorean";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import FooterKorean from "@/components/manual/Footer/FooterKorean";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMKorean = () => {
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
      <FooterKorean />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMKorean;

const MetaTags = () => {
  const title = "BIS FMCS 인증 | 외국 제조업체 인증 제도 | 선 인증";
  const description =
    "외국 제조업체를 위한 전문 BIS FMCS 인증 서비스. 인도 수출을 위한 ISI 마크 인증을 받으세요. 2013년부터 신뢰받는 BIS 인증. ✓ 빠른 처리 ✓ 전문 지도";
  const keywords = "외국 제조업체용 BIS 인증서, BIS 라이선스, ISI 마크";
  const canonicalUrl =
    "https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle = "BIS FMCS 인증 | 외국 제조업체 인증 제도";
  const ogDescription =
    "외국 제조업체를 위한 전문 BIS FMCS 인증 서비스. 인도 수출을 위한 ISI 마크 인증을 받으세요. ✓ 빠른 처리 ✓ 전문 지도";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "외국 제조업체용 BIS 마크(ISI 라이선스)",
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
                    <Link to="/">홈</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    외국 제조업체용 BIS 마크(ISI 라이선스)
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
              인증된 전문성
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              인도 BIS 인증
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            외국 제조업체용
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            외국 제조업체는 인도 수출을 위해 ISI 마크가 필요합니다. 600개 이상의
            필수 제품과 20,000개 이상의 자발적 제품을 포함합니다.
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
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  // URL 기반 페이지 이름 가져오기 함수
  const getPageName = () => {
    const path = window.location.pathname;

    // BISFM (FMCS - Foreign Manufacturers) Korean Page
    if (
      path.includes("/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu")
    )
      return "BISFM (FMCS - Foreign Manufacturers) Korean Page";
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

    // 전체 이름 유효성 검사
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "유효한 전체 이름을 입력해주세요.",
        description: "이름은 문자와 공백만 포함해야 합니다.",
      });
      setLoading(false);
      return;
    }

    // 이메일 유효성 검사 - 모든 도메인 허용
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

    // 전화번호 유효성 검사
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "유효한 전화번호를 입력해주세요",
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
        title: "문의 양식이 성공적으로 제출되었습니다!",
        description: "문의해 주셔서 감사합니다. 저희 팀이 곧 연락드리겠습니다.",
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
        title: errorMessage || "문의 양식 제출에 실패했습니다!",
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
        약속 예약하기
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        저희 팀에 연락하고 통화를 예약하고 싶으신가요?
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
            placeholder="필수 인증*"
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
              <span>약속 예약하기</span>
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
    overview: "개요",
    standardization: "표준화",
    representation: "대리인",
    document: "문서",
    process: "절차",
    costing: "비용",
    surveillance: "감시",
    facilitator: "촉진자",
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

  // 외부 클릭 시 모바일 메뉴 닫기
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentKorean />
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
            FMCS 제도 하의 인도 BIS 인증에 대한 완전한 정보
          </h1>

          <h2 className="service-left-content-heading-three">
            인도 BIS란 무엇인가요?
          </h2>

          <p className="service-left-content-paragraph">
            인도표준청(BIS)은 소비자 사무, 식품 및 공공 유통부 산하의 인도 국가
            표준 기관입니다. 1986년 BIS법에 따라 설립되었으며 2016년에
            개정되었으며, BIS는 상품의 표준화, 마킹 및 품질 인증에서 중요한
            역할을 합니다. 인도 소비자에게 제공되는 제품의 품질, 안전성 및
            신뢰성을 보장하는 것을 목표로 합니다.
          </p>

          <p className="service-left-content-paragraph">
            BIS는 제품 인증, 보석류 할마킹, 테스트 서비스 및 교육 프로그램을
            포함한 다양한 제도를 통해 운영됩니다. 그러나 국제적으로 가장 중요한
            프레임워크 중 하나는 외국 제조업체 인증 제도(FMCS)입니다.
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
        <ServiceAuthorKorean />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* 개요 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">개요</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        FMCS 하의 BIS 인증서란 무엇인가요?
      </h2>

      <p className="service-left-content-paragraph">
        2000년에 도입된 FMCS는 외국 제조업체가 제품에 ISI 마크를 사용할 수 있는
        BIS 라이선스를 부여받을 수 있는 메커니즘으로, 인도 표준 준수를
        나타냅니다. 인증 프로세스 FMCS를 통해 해외 기업은 현지 제조 단위를
        설립하지 않고도 인도에서 합법적으로 제품을 판매할 수 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        현재 1,650개 이상의 외국 제조업체가 FMCS를 통해 BIS 인증 시스템 하에서
        인도에서 운영되고 있습니다.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        BIS 인증이 중요한 이유는 무엇인가요?
      </h2>

      <p className="service-left-content-paragraph">
        BIS 인증서를 취득하는 것은 법적 요구사항 이상입니다. 인도의 광대한
        소비자 시장으로 가는 관문입니다. 필수적인 몇 가지 주요 이유는 다음과
        같습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "법적 준수: 제품은 관련 인도 표준을 준수해야 합니다.",
          "브랜드 신뢰성: ISI 마크는 품질의 증거 역할을 하며 소비자 신뢰를 높입니다.",
          "세관 통관: 유효한 BIS 라이선스 없이는 제품이 세관에서 거부될 수 있습니다.",
          "시장 접근: 외국 브랜드가 인도에서 원활한 진입과 광범위한 수용을 얻는 데 도움이 됩니다.",
          "위험 완화: 제품이 안전하도록 보장하여 잠재적인 리콜 및 책임 문제를 피합니다.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        BIS에서 다루는 제품 범위
      </h2>

      <p className="service-left-content-paragraph">
        BIS는 필수 인증 하에 600개 이상의 제품을 나열했으며, 20,000개 이상의
        항목이 자발적 BIS 인증서 자격이 있습니다. 이들은 광범위한 산업에 걸쳐
        있습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "전자제품 및 IT 하드웨어",
          "자동차 부품",
          "가전제품",
          "강철 제품",
          "시멘트 및 건축 자재 등",
        ]}
      />

      <p className="service-left-content-paragraph">
        증가하는 목록은 글로벌 무역에서 BIS 인증서의 범위와 관련성이 증가하고
        있음을 나타냅니다.
      </p>

      <h2 className="service-left-content-heading-three">
        FMCS 하의 외국 제조업체를 위한 BIS 인증의 목표 또는 이점
      </h2>

      <p className="service-left-content-paragraph">
        FMCS 및 BIS 인증서 제도는 다음을 목표로 합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "유효한 BIS 라이선스 없이 ISI 마크 사용은 법적으로 처벌받을 수 있습니다.",
          "인증된 제품은 ISI 로고와 CM/L 번호(제조 라이선스 인증서)를 모두 표시해야 합니다.",
          "위반자는 제품 금지, 벌금 또는 형사 기소에 직면할 수 있습니다.",
          "소비자와 수입 브랜드 간의 신뢰 구축.",
          "공정한 무역과 평등한 경쟁 환경 조성.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        외국 제조업체를 위한 BIS 인증서의 주요 특징
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                특징
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                설명
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                적용 범위
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                외국 제조업체만 해당
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                마킹
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ISI 마크 + CM/L 번호
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                감사 요구사항
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수 공장 검사
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                테스트
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 승인 인도 실험실에서 수행
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                유효기간
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 라이선스 1-2년 유효
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                갱신
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                만료 시 또는 제품 업데이트 시 필요
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (인도 공인 대리인)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS와 연락하기 위해 반드시 임명되어야 함
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                성과 은행 보증
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                RBI 승인 인도 은행에서 필요
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
      {/* 표준화 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">표준화</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        인도 BIS란 무엇이며 왜 중요한가요?
      </h2>

      <p className="service-left-content-paragraph">
        인도 BIS는 인도표준청(BIS)이 발급하는 품질과 안전의 상징입니다. 오늘날
        ISI 마크는 공식 BIS 인증 제도 하에서 인도 표준을 준수하는 제품을
        지정하는 데 독점적으로 사용됩니다.
      </p>

      <p className="service-left-content-paragraph">
        제품이 인도 BIS 또는 ISI 마크를 표시하려면 실험실 테스트, 공장 검사,
        문서 감사 및 인도 BIS 지침 준수 확인을 포함한 엄격한 BIS 인증 프로세스를
        통과해야 합니다.
      </p>

      <p className="service-left-content-paragraph">
        인도에서 BIS 인증의 법적 지위
      </p>

      <p className="service-left-content-paragraph">
        BIS 라이선스는 단순한 마케팅 도구가 아닙니다. 필수 BIS 인증 제도에
        해당하는 모든 제품에 대한 법적 요구사항입니다.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        BIS법 2016에 따르면:
      </h3>

      <PointsListWithoutHeading
        points={[
          "유효한 BIS 라이선스 없이 ISI 마크 사용은 법적으로 처벌받을 수 있습니다.",
          "인증된 제품은 ISI 로고와 CM/L 번호(제조 라이선스 인증서)를 모두 표시해야 합니다.",
          "위반자는 제품 금지, 벌금 또는 형사 기소에 직면할 수 있습니다.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="ISI 마크 로고"
        title="ISI 마크 로고"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <div className="service-left-content-heading-three">
        ISI 로고는 일반적으로 다음으로 구성됩니다:
      </div>

      <PointsListWithoutHeading
        points={[
          '둥근 모서리가 있는 직사각형 안의 스타일화된 문자 "ISI"',
          "마크 아래 또는 옆에 표시된 CM/L 번호",
          "참조 인도 표준 코드 번호(예: 전기 제품의 경우 IS 302)",
        ]}
      />

      <div className="service-left-content-heading-three">
        배치는 다음이어야 합니다:
      </div>

      <PointsListWithoutHeading
        points={[
          "제품에 영구적이고 명확하게 보이는 위치",
          "제품에 불가능한 경우 포장재에",
          "일부 제품 카테고리의 사용자 매뉴얼에",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        BIS 인증서가 필요한 제품 카테고리
      </h2>

      <p className="service-left-content-paragraph">
        인도의 필수 등록 제도 하에서 600개 이상의 제품에 ISI 마크가 필요합니다.
        예를 들어:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                제품 카테고리
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                IS 코드
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                상태
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                전기 제품
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                강철 및 철
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                식품 용기
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                헬멧
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                시멘트
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필수
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        각 카테고리는 해당 인도 표준을 준수해야 하며, 이는 BIS 인증 프로세스
        중에 테스트됩니다. 제품의 전체 목록은{" "}
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
          여기를 클릭
        </span>
        하여 확인할 수 있습니다.
      </p>

      <h2 className="service-left-content-heading-three">
        인도 BIS vs. 기타 글로벌 인증
      </h2>

      <p className="service-left-content-paragraph">
        ISI 마크를 다른 국제 기호와 비교해보겠습니다:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                마크
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                국가
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                필수?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                초점
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                인도
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                예
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                제품 안전 및 품질
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                EU
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                예 (특정 카테고리)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                건강, 안전, 환경
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                미국
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                아니오
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                안전 표준 (자발적)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                중국
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                예
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                전기 제품 안전
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        UL(자발적) 또는 CE(지역별)와 달리 BIS 등록 제도 하의 ISI 마크는
        의무적이며 현지에서 강제됩니다.
      </p>

      <h2 className="service-left-content-heading-three">
        인도 수입을 위해 BIS 인증 또는 BIS 라이선스가 필수인가요?
      </h2>

      <p className="service-left-content-paragraph">BIS 인증서의 필수 성격</p>

      <p className="service-left-content-paragraph">
        인도 정부는 특정 제품이 인도 시장에서 수입, 판매 또는 유통되기 전에
        인도표준청(BIS)의 인증을 받도록 의무화했습니다. 이 의무는 다음에서
        비롯됩니다:
      </p>

      <PointsListWithoutHeading
        points={["소비자 보호 목표", "인도 표준과의 조화", "국가 안전 규정"]}
      />

      <p className="service-left-content-paragraph">
        제품이 인도 BIS의 필수 요구사항에 해당하는 경우, 인도 세관을 통과하기
        전에 BIS 인증서를 보유하고 ISI 마크를 표시해야 합니다.
      </p>

      <h2 className="service-left-content-heading-three">
        BIS 인증은 수입품에만 필요한가요?
      </h2>

      <p className="service-left-content-paragraph">
        아닙니다. BIS 인증은 다음에 필수입니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "규제 제품을 생산하는 국내 제조업체",
          "규제 제품을 인도로 수출하는 외국 제조업체",
        ]}
      />

      <p className="service-left-content-paragraph">
        인도에 있든 해외에 있든, 제품이 필수 목록에 있으면 BIS 라이선스를
        보유하고 ISI 마크를 표시해야 합니다.
      </p>

      <p className="service-left-content-paragraph">
        인도 세관은 이제 고급 데이터 시스템을 사용하여 비준수 선적을 자동으로
        표시합니다. 규제 카테고리에 속한 모든 상품은 유효한 BIS 인증서 존재
        여부를 스캔합니다.
      </p>

      <p className="service-left-content-paragraph">BIS 인증 면제</p>

      <p className="service-left-content-paragraph">
        BIS 인증은 대부분의 경우 필수이지만, 특정 시나리오에서 면제가 부여될 수
        있습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "R&D 프로토타입 또는 샘플 테스트용",
          "제한된 수량의 개인 수입용",
        ]}
      />

      <p className="service-left-content-paragraph">
        그러나 이러한 경우는 드물며 BIS 또는 관련 부처의 공식 면제 서한이
        필요합니다.
      </p>

      <h2 className="service-left-content-heading-three">
        제품에 BIS 인증서 또는 BIS 라이선스가 필요한지 어떻게 알 수 있나요?
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
          여기를 클릭
        </span>
        하여 제품이 필수 인도 BIS 인증 제도에 포함되는지 확인하세요.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* 대리인 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">대리인</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        BIS 인증에서 인도 공인 대리인(AIR)의 역할
      </h2>

      <h3 className="service-left-content-heading-three">
        인도 공인 대리인(AIR)이란 무엇인가요?
      </h3>

      <p className="service-left-content-paragraph">
        인도 공인 대리인(AIR)은 FMCS 등록 제도 하에서 BIS 인증을 추구하는 외국
        제조업체가 임명하는 중요한 중개인입니다. AIR은 인도표준청(BIS)과
        제조업체 간의 공식 연락 담당자 역할을 하며, 원활한 소통, 문서 처리 및
        인증 프로세스 조정을 보장합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        AIR 임명의 법적 요구사항
      </h3>

      <p className="service-left-content-paragraph">
        BIS 지침에 따르면, 인도에 등록된 사무소가 없는 모든 외국 제조업체는
        AIR을 임명해야 합니다. 이 요구사항은 BIS가 인도 관할권 내에서 신뢰할 수
        있고 접근 가능한 연락처를 갖도록 보장합니다.
      </p>

      <h3 className="service-left-content-heading-three">AIR의 주요 책임</h3>

      <p className="service-left-content-paragraph">
        AIR의 역할은 문서화 및 신청서 제출부터 감사 조정 및 인증 후 준수에
        이르기까지 전체 BIS 인증 프로세스에 걸쳐 있습니다:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                책임
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                설명
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                소통
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 담당자 및 부서와의 연락 담당자 역할
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                신청 지원
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                양식 작성, 문서 편집 및 신청서 제출 지원
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                감사 조정
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                공장 검사 일정 조정 및 감사원 문의 처리
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                준수 모니터링
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                모든 테스트 및 인증 활동이 BIS 규범을 충족하도록 보장
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                갱신 관리
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 라이선스 갱신, 문서 업데이트 및 수수료 지불 관리
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        AIR이 되기 위한 자격 기준
      </h3>

      <p className="service-left-content-paragraph">
        AIR으로 활동하려면 개인 또는 조직이 다음을 충족해야 합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "인도 시민이거나 인도에서 합법적으로 등록된 사업체여야 함",
          "유효한 우편 번호가 있는 인도의 실제 주소를 보유해야 함",
          "영어 및 현지 언어로 유창하게 소통할 수 있어야 함",
          "인증 제도, BIS 문서 프로토콜 및 규제 기대사항을 이해해야 함",
          "외국 제조업체를 대신하여 감사 및 서신에 신속하게 응답할 수 있어야 함",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        AIR 역할이 중요한 이유
      </h3>

      <p className="service-left-content-paragraph">
        AIR은 BIS 인증 프로세스 전반에 걸쳐 연속성과 책임을 보장합니다. AIR이
        없으면:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS는 비준수 외국 제조업체에 대해 조치할 권한이 없습니다",
          "시급한 문의 및 감사 일정이 지연될 수 있습니다",
          "인증 프로세스가 중단되거나 취소되거나 거부될 수 있습니다",
        ]}
      />

      <p className="service-left-content-paragraph">
        적극적이고 경험이 풍부한 AIR은 BIS 인증 성공 가능성을 크게 높입니다.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* 문서 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">문서</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        FMCS 하의 BIS 인증에 필요한 문서
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                문서 유형
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                목적
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                FMCS 신청서
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인증에 대한 공식 요청
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                제조 장비 목록
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                생산 능력 표시
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                원자재 목록
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                투입 재료 품질 보장
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                테스트 장비 목록
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                테스트 및 준수 준비 상태 평가
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                교정 인증서
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                테스트 장비 정확도 증명
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                공장 배치 및 프로세스 흐름
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                감사원이 제조 단계를 이해하는 데 도움
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                테스트 인증서
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                원자재 및 최종 제품의 품질 증명
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                품질 관리 프로필
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                직원 자격 및 표준 운영 절차(SOP) 확인
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                결제 증명
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS에 대한 수수료 제출 검증
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                성과 은행 보증
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS에 대한 재정적 보증 역할
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        인도 BIS 인증에 필요한 각 문서의 상세 분석
      </h3>

      <div className="service-left-content-heading-three">1. FMCS 신청서</div>

      <p className="service-left-content-paragraph">
        이 문서는 외국 제조업체에 대한 일반 정보를 제공하며 다음을 포함합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "제품 세부 정보(유형, 카테고리, 모델)",
          "의도된 인도 표준",
          "공장 및 AIR의 연락처 정보",
          "제조 능력 및 테스트 범위",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. 제조 장비 목록
      </div>

      <PointsListWithoutHeading
        points={[
          "기계명 및 제조사",
          "생산 능력",
          "공장 및 AIR의 연락처 정보",
          "유지보수 기록(해당되는 경우)",
        ]}
      />

      <div className="service-left-content-heading-three">3. 원자재 목록</div>

      <PointsListWithoutHeading
        points={["조달 출처", "등급 및 사양", "테스트 프로토콜(있는 경우)"]}
      />

      <div className="service-left-content-heading-three">
        4. 테스트 장비 목록
      </div>

      <PointsListWithoutHeading
        points={[
          "장비명 및 제조사",
          "인도 표준의 테스트 매개변수 준수",
          "공장 내 위치",
        ]}
      />

      <div className="service-left-content-heading-three">5. 교정 인증서</div>

      <PointsListWithoutHeading
        points={["마지막 교정 날짜", "유효 기간", "인증서 번호"]}
      />

      <div className="service-left-content-heading-three">
        6. 공장 배치 및 프로세스 흐름도
      </div>

      <PointsListWithoutHeading
        points={[
          "입구 및 출구 지점",
          "테스트 실험실 영역",
          "QC 체크포인트",
          "저장 및 포장 섹션",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. 성과 은행 보증
      </div>

      <p className="service-left-content-paragraph">
        RBI 승인 인도 은행에서 발행하는 성과 은행 보증(PBG)은 비준수 시 책임을
        포함합니다. 이 문서는 다음을 충족해야 합니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "공식 은행 문구지에 있어야 함",
          "보증 기간 및 금액을 표시해야 함",
          "서명 및 인증이 있어야 함",
        ]}
      />

      <div className="service-left-content-heading-three">
        BIS 인증서 또는 인도 BIS 신청 시 피해야 할 일반적인 문서 오류
      </div>

      <PointsListWithoutHeading
        points={[
          "양식 데이터와 공장 현실 간의 불일치",
          "만료된 교정 보고서 제출",
          "BIS 수수료 증명 누락",
          "불완전하거나 모호한 프로세스 흐름",
          "문서 간 명명 불일치",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* 절차 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">절차</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        FMCS 하의 단계별 BIS 인증 프로세스
      </h2>

      <h3 className="service-left-content-heading-three">BIS 인증 여정 개요</h3>

      <p className="service-left-content-paragraph">
        외국 제조업체 인증 제도(FMCS) 하의 BIS 인증 프로세스는 체계적이고
        구조화되어 있으며 다단계입니다. 제품이 적용 가능한 인도 표준을 준수하고,
        제조 프로세스가 견고하며, 테스트가 정확하도록 보장합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        단계별 BIS 라이선스 프로세스 요약표
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                단계
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                설명
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS FMCD에 신청서 제출
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                문서 검토 및 초기 심사
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                문의 해결 및 설명 제출
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 기술 감사원 지명
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                AIR을 통한 공장 감사 일정 조정 및 조율
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 감사원의 공장 검사 및 샘플 봉인
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                사내 제품 테스트(해당되는 경우)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인도 BIS 승인 실험실에서 봉인된 샘플 테스트
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                테스트 보고서 및 감사 결과 검토
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 라이선스 발급 및 ISI 마크 사용
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="FMCS용 BIS 인증서 샘플"
        title="FMCS용 BIS 인증서 샘플"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        BIS 인증서 취득 기간
      </h3>

      <div className="service-left-content-heading-three">
        신청부터 인증서까지의 일반적인 기간
      </div>

      <p className="service-left-content-paragraph">
        FMCS 하의 BIS 인증 프로세스는 일반적으로 올바른 신청서 제출일로부터 약
        120 근무일(약 3-4개월)이 소요됩니다. 문서가 불명확하거나 공장이 감사
        준비가 되지 않은 경우 지연이 자주 발생합니다.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* 비용 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">비용</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        BIS 인증 비용 구조 설명
      </h2>

      <h3 className="service-left-content-heading-three">BIS 인증 비용 개요</h3>

      <p className="service-left-content-paragraph">
        외국 제조업체 인증 제도(FMCS) 하에서 BIS 인증서를 확보하는 것은 여러
        유형의 비용이 포함됩니다. 신청서 제출 및 감사부터 제품 테스트 및 마크
        사용에 이르기까지 모든 것을 포함합니다.
      </p>

      <p className="service-left-content-paragraph">
        외국 제조업체는 적시에 지불할 수 있도록 충분히 예산을 책정해야 하며,
        지불 실패는 BIS 인증이 중간에 거부될 수 있습니다.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                비용 카테고리
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                설명
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                신청 수수료 (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인도 BIS 취득을 위한 FMCS 신청서 제출 시 지불
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                감사 수수료 (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 감사원 여행, 인일당 및 관련 비용 포함
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                제품 테스트 수수료 (제품별)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인도 BIS 인정 실험실에서 봉인된 샘플 테스트용
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                라이선스 수수료 (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 인증서 부여 시 일회성 수수료
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                마킹 수수료 (제품별)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인증된 제품에 ISI 마크 사용에 대한 연간 수수료
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                성과 은행 보증 (USD 10,000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                준수를 보장하기 위해 인도 은행을 통해 예치되는 재정 보증
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
      {/* 감시 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">감시</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        BIS 인증 후 감시 및 준수 요구사항
      </h2>

      <p className="service-left-content-paragraph">
        BIS 인증서가 부여되면 책임이 거기서 끝나지 않습니다. BIS 인증은 인도
        표준에 대한 지속적인 준수를 보장하기 위한 지속적인 감시 및 준수 시스템을
        포함합니다. 이 인증 후 단계는 BIS 라이선스 유지, ISI 마크 사용 권한 유지
        및 법적 처벌이나 정지를 피하는 데 중요합니다.
      </p>

      <p className="service-left-content-paragraph">
        BIS 인증서 취득 후 주요 감시 구성 요소 시장 감시: 독립 실험실 테스트를
        위해 인도 시장에서 무작위 제품 샘플링, 샘플이 실패하면 BIS 인증서가
        정지됩니다. 연간 2회 수행됩니다.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* 촉진자 */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">촉진자</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* 제목 */}
      <h2 className="service-left-content-heading-two">
        BIS 인증 컨설턴트를 선택하는 이유는 무엇인가요?
      </h2>

      <p className="service-left-content-paragraph">
        FMCS 등록 제도 하의 BIS 인증은 복잡하고 매우 기술적이며 시급합니다.
        독립적으로 인증을 추진하는 것이 가능하지만, 대부분의 성공적인 외국
        제조업체는 여정을 간소화하고 위험을 최소화하기 위해 BIS 컨설턴트에
        의존합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        BIS 컨설턴트는 무엇을 하나요?
      </h3>

      <p className="service-left-content-paragraph">
        BIS 인증 컨설턴트는 프로세스의 모든 단계에 걸쳐 종합적인 지도를
        제공합니다. 핵심 책임은 다음을 포함합니다:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                작업
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                설명
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                문서화
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                필요한 모든 문서를 준비, 검토 및 형식화
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                신청 지원
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS 신청서를 제출하고 추적
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                감사 준비
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                공장 팀이 감사 준비를 할 수 있도록 안내
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                샘플 조정
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                인도로 샘플 봉인 및 배송 관리
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                테스트 지원
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                실험실과 연락하고 결과 해석 지원
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                갱신 및 감시
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                라이선스 연장 및 준수 확인 관리
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        그들은 전략적 파트너 역할을 하며, 종종 인도 공인 대리인(AIR) 역할도
        겸합니다.
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "BIS 인증이란 무엇이며 외국 제조업체가 인도 BIS를 취득하는 것이 중요한 이유는 무엇인가요?",
      answer:
        "BIS 인증은 제품이 인도 표준을 충족하도록 보장하기 위해 인도표준청에서 수행하는 규제 프로세스입니다. 외국 제조업체가 인도에서 시장 접근, 세관 통관 및 소비자 신뢰를 얻는 데 필수적입니다.",
    },
    {
      question: "ISI 마크는 무엇을 나타내나요?",
      answer:
        "ISI 마크는 특정 인도 표준에 대한 준수를 나타냅니다. BIS 인증 하의 제품에 필수이며 포장 및 제품에 인쇄되어야 합니다.",
    },
    {
      question: "인도로의 모든 수입품에 BIS 인증이 필수인가요?",
      answer:
        "아닙니다. BIS 인증은 필수 인도 BIS 인증 제도에 나열된 제품에만 필수입니다. 그러나 다른 제품에 대해서는 자발적 인증이 가능합니다.",
    },
    {
      question: "FMCS 하에서 누가 BIS 인증을 신청할 수 있나요?",
      answer:
        "실제 외국 제조업체(수입업체나 무역업체가 아님)만 신청할 수 있습니다. 인도 공인 대리인(AIR)은 인도에서 그들을 대표하기 위해 필수입니다.",
    },
    {
      question: "BIS 인증서를 받는 데 얼마나 걸리나요?",
      answer:
        "FMCS 하의 평균 BIS 인증 프로세스는 문서 준비 상태, 감사 일정 및 테스트 처리 시간에 따라 120일이 소요됩니다.",
    },
    {
      question: "BIS 인증에 관련된 주요 비용은 무엇인가요?",
      answer:
        "비용에는 신청 수수료, 감사 수수료, 실험실 테스트 수수료, 라이선스 및 마킹 수수료, RBI 승인 인도 은행의 성과 은행 보증(PBG)이 포함됩니다.",
    },
    {
      question: "BIS 라이선스를 갱신할 수 있나요?",
      answer:
        "예. BIS 라이선스는 일반적으로 1-2년 동안 유효하며, 준수 및 문서 업데이트 요구사항을 충족하면 갱신할 수 있습니다.",
    },
    {
      question: "BIS 실험실 테스트 중 제품이 실패하면 어떻게 되나요?",
      answer:
        "제품이 실패하면 BIS는 시정 조치 및 재테스트를 허용할 수 있습니다. 지속적인 실패는 신청 거부로 이어질 수 있습니다.",
    },
    {
      question: "BIS 인증 컨설턴트를 고용하는 것이 필요한가요?",
      answer:
        "필수는 아니지만 강력히 권장됩니다. 컨설턴트는 BIS 프로토콜과의 완전한 정렬을 보장하여 지연을 줄이고, 준수를 관리하며, 승인 가능성을 향상시키는 데 도움이 됩니다.",
    },
    {
      question: "BIS 라이선스가 정지되거나 취소될 수 있나요?",
      answer:
        "예. BIS는 비준수, 제품 실패, ISI 로고 오용 또는 감사 불일치로 인해 라이선스를 정지하거나 취소할 수 있습니다.",
    },
    {
      question: "BIS 인증 프로세스에 필요한 문서는 무엇인가요?",
      answer:
        "문서에는 FMCS 신청서, 테스트 보고서, 장비 목록, 교정 인증서, 공장 배치, AIR 임명 서한 및 수수료 지불 증명이 포함됩니다.",
    },
    {
      question: "한 AIR이 여러 BIS 신청을 대표할 수 있나요?",
      answer:
        "예, 각 프로젝트에 대해 승인을 받고 각 인증에 대한 문서화, 감사 및 소통을 처리할 수 있는 역량이 있는 경우 가능합니다.",
    },
    {
      question: "성과 은행 보증의 역할은 무엇인가요?",
      answer:
        "PBG는 제조업체가 인도 표준을 준수할 것임을 BIS에 보장합니다. 라이선스 취소 시 환불 가능하며 인도 BIS를 취득하는 모든 FMCS 신청에 필수입니다.",
    },
    {
      question: "BIS 인증이 인도 외부에서 인정되나요?",
      answer:
        "BIS 인증서는 인도 표준이지만, 특히 아시아와 아프리카에서 인도 준수를 수용하는 많은 지역의 무역 맥락에서 존중받습니다.",
    },
    {
      question: "제품에 BIS 인증이 필요한지 어떻게 알 수 있나요?",
      answer:
        "공식 BIS 웹사이트의 업데이트된 목록을 확인하거나 BIS 컨설턴트와 상담하여 제품이 필수 인증에 해당하는지 확인하세요.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="자주 묻는 질문"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          자주 묻는 질문
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          찾고 계신 답변을 찾을 수 없나요?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            저희에게 연락하세요!
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
    // {
    //   code: "ko",
    //   name: "Korean",
    //   flag: "https://flagcdn.com/w320/kr.png",
    //   path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    // },
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
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    },
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              저희 서비스
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              외국 제조업체용 BIS 마크(ISI 라이선스)
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
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR 인증서 인증
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
              LMPC 인증서 인증
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
              BIS 등록 인증서
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
              인도 제조업체용 ISI 마크(BIS)
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
