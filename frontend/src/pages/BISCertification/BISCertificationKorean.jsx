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
import ServicesRightSideContentKorean from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentKorean";
import ServiceAuthorKorean from "@/components/manual/ServiceAuthor/ServiceAuthorKorean";
import { ISIMarkAndBISCommonTableKorean } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableKorean";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterKorean from "@/components/manual/Footer/FooterKorean";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationKorean = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableKorean />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterKorean />
    </div>
  );
};

export default BISCertificationKorean;

const BISCertificationMetaTags = () => {
  const title = "BIS 인증 유형, 절차, 문서, 수수료";
  const description =
    "BIS 인증은 인도에서 다양한 제품을 제조 및 판매하기 위해 인도 표준국(BIS)으로부터 품질 표준 인증서를 취득하는 과정을 의미합니다.";
  const keywords =
    "BIS 인증, BIS 인증 절차, BIS 등록, BIS 등록 절차, BIS 인증 제도, 제품 인증 제도, 필수 인증 제도, BIS 필수 제품 목록, ISI 마크, BIS FMCS, BIS 품질 보증 제도, 에코 마크 제도, BIS 인증 컨설턴트, ISI 인증 컨설턴트, BIS ISI 마크 컨설턴트, BIS 인증이란 무엇인가, BIS 인증 다운로드, BIS 인증 비용, 인도 BIS 인증, BIS 인증 전체 형식, BIS 인증 인도, 인도 BIS 인증, BIS 인증 의미, BIS 인증 확인, 인도 BIS 라이센스 온라인, BIS 인증 온라인, BIS 인증서, BIS 인증서 온라인.";
  const canonicalUrl = window.location.href;
  const author = "선 인증 인도";
  const publisher = "Dhruv Aggarwal, Sun Certification India 운영 책임자";

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
      <meta property="og:site_name" content="선 인증 인도" />
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
                    <Link to="/">홈</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    수입업체 및 제조업체를 위한 인도 BIS 인증
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
              인증된 전문 지식
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              인도 BIS 인증
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            수입업체 및 제조업체용
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS 인증은 인도에서 제품 품질과 안전을 보장합니다. 많은 제품에
            필수이며 테스트, 문서화 및 승인이 필요합니다.
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
                서비스 보기
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
    if (path.includes("/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"))
      return "BIS common (Korean)";
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
        title: "유효한 전체 이름을 입력해주세요.",
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
        title: "연락처 양식이 성공적으로 제출되었습니다!",
        description: "문의해주셔서 감사합니다. 저희 팀이 곧 연락드리겠습니다.",
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
        title: errorMessage || "연락처 양식 세부사항을 제출할 수 없습니다!",
        description:
          "문제가 발생했습니다. 세부사항을 확인하고 다시 시도해주세요.",
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

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        약속 예약하기
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        저희 팀과 연락하고 통화를 예약하고 싶으신가요?
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
    overview: "개요",
    schemes: "제도",
    process: "절차",
    documents: "문서",
    cost: "비용",
    air: "AIR",
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentKorean />
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
      <h1 className="service-left-content-heading-two">
        인도 제조업체를 위한 BIS ISI 마크 인증
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="인도 BIS 인증"
          title="인도 제조업체를 위한 BIS 인증서"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        소개: BIS 인증이 중요한 이유
      </h2>

      <p className="service-left-content-paragraph">
        예를 들어, 독일의 제조업체가 독특한 전자 장치를 발명하고 빠르게 변화하는
        인도 시장에서 판매할 계획이라고 가정해보자. 이 장치는 독특하고 안전하며
        유럽에서도 승인을 받았다. 그러나 이 장치가 인도 항구로 반입될 때 세관
        직원들이 이 장치를 보류한다. 질문은 "왜일까?"이다. 답은 이 장치가 BIS
        인증을 받아야 한다는 것이며, 이는 인도에서 전자 제품을 판매하기 위한
        중요한 부분이다.
      </p>

      <p className="service-left-content-paragraph">
        많은 글로벌 및 인도 제조업체들이 매년 같은 상황을 겪는다. 인도
        소비자들에게 제품의 BIS 마크는 단순한 로고가 아니라 제품이 품질, 안전성
        및 신뢰성에 대해 테스트되었다는 신뢰의 표시이다. 사업에 있어서 이것은 전
        세계에서 가장 큰 시장 중 하나로의 관문이다.
      </p>

      <p className="service-left-content-paragraph">
        이 기사는 BIS 인증, 그 필요성, 절차, 혜택, 제도, 비용, 그리고 외국 및
        국내 제조업체 모두에게 제공되는 시스템과 그 네비게이션에 대한 모든
        질문에 답할 것이다.
      </p>

      <h2 className="service-left-content-heading-three">
        제조업체 및 수입업체를 위한 BIS 인증이란 무엇인가요?
      </h2>

      <p className="service-left-content-paragraph">
        BIS 인증은 소비자 업무부 산하 인도의 국가 인증 기관인 인도 표준국(BIS)이
        제공하는 품질 보증 및 안전 인증이다. BIS 인증은 제품이 성능, 안전성 및
        품질 측면에서 인도 표준(IS)을 준수하도록 보장한다.
      </p>
      <p className="service-left-content-paragraph">
        제품이 이러한 품질 표준 요구사항을 충족하면 인도 표준국은 BIS 라이센스
        또는 BIS 인증서를 발급하며, 이는 제품이 ISI 마크(국내 제도의 경우) 또는
        고유 등록 번호가 있는 CRS 마크(BIS 필수 등록 제도 하에서)를 표시할
        자격이 있음을 의미한다.
      </p>
      <p className="service-left-content-paragraph">
        많은 인도 제조업체 및 수입업체에게 BIS 인증을 받는 것은 필수이다.
        여기에는 전기 제품, 시멘트 및 강철 제품, 포장된 음용수, 휴대폰, LED
        조명, 파워뱅크와 같은 전자 제품, 귀금속 주얼리(품질 보증을 통해) 및 기타
        많은 제품이 포함된다. 이러한 필수 제품의 제조업체 및 수입업체는 BIS 승인
        없이는 인도에서 합법적으로 제품을 판매하거나 유통할 수 없다.
      </p>

      <h2 className="service-left-content-heading-three">
        인도 BIS의 간단한 역사
      </h2>

      <p className="service-left-content-paragraph">
        인도 표준국(BIS)은 1947년에 설립된 인도 표준 기관(ISI)을 인수하여
        1986년에 설립되었다. BIS는 이제 인도의 표준에 대한 품질 수호자로
        간주되며 그들의 관행을 국제 수준에 맞추고 인도 조건에 필요한 수정을
        했다.
      </p>

      <h3 className="service-left-content-heading-three">주목할 만한 이정표</h3>

      <PointsListWithoutHeading
        points={[
          "1947년에 국가가 독립을 얻은 후 품질 관리 시스템을 지원하기 위해 ISI가 설립되었다.",
          "1955년에 ISI 마크가 수여되어 인도에서 가장 유명한 품질 상징 중 하나가 되었다.",
          "1986년에 BIS 법이 통과되어 ISI를 인도 표준국으로 대체했다.",
          "2016년과 2018년에 추가 수정안으로 BIS의 책임이 강화되어 품질 보증 및 제품 인증이 더욱 철저해졌다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        현재 BIS는 여러 산업에 걸쳐 인도 사용자를 위한 수천 개의 도구 및 기계의
        안전성, 신뢰성 및 표준화를 보장한다.
      </p>

      <h2 className="service-left-content-heading-three">
        인도에서 BIS 인증이 필수인 이유는 무엇인가요?
      </h2>
      <p className="service-left-content-paragraph">
        인도 시장은 거대하고 끊임없이 변화하며 가격 변동에 민감하다. 그러나
        이러한 개방성은 시장을 저렴하고 불안전한 상품에 노출시킨다. 이러한
        맥락에서 BIS 인증은 보호 장벽으로 작용한다.
      </p>
      <PointsListWithoutHeading
        points={[
          "소비자 안전 - 잠재적 사고, 건강 문제 및 기만으로부터 사람들을 보호한다.",
          "시장 규제 - 부적합 제품이 인도 시장에 진입하지 않도록 보장한다.",
          "신뢰와 확신 - 지역 및 국제 제품에 대한 소비자 신뢰를 강화한다.",
          "글로벌 정렬 - 외국 기업이 인도의 규제 구조에 맞추는 것을 지원한다.",
          "공정 경쟁 - 규모와 관계없이 모든 시장 참여자는 품질만으로 경쟁할 수 있도록 보장받는다.",
        ]}
      />
      <p className="service-left-content-paragraph">
        포장된 음용수에 대한 BIS 인증은 인증이 없으면 건강 문제가 발생할 수 있는
        예시이다. 히터, 토스터 및 기타 전기 제품에 대한 제품 인증 표준이 부족한
        것도 화재로 이어질 수 있다. 따라서 BIS 인증을 통해 정부는 이러한
        문제들이 해결되도록 보장한다.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">절차</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS 인증 절차</h2>

      <p className="service-left-content-paragraph">
        BIS 인증 절차는 구조화된 흐름을 따릅니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "관련 표준 식별: 적용 가능한 인도 표준(IS)을 선택합니다.",
          "신청서 제출: BIS에 파일을 제출하고 관련 문서를 첨부합니다.",
          "제품 테스트: 승인된 BIS 실험실에서 테스트를 수행합니다.",
          "공장 검사: 시설이 BIS 관리자에 의해 검사됩니다.",
          "BIS 라이센스: 성공적인 평가 평가에 대해 인증서가 수여됩니다.",
          "감시: 라이센스 변경과 함께 지속적인 준수는 새로운 표준입니다.",
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
        <span className="service-left-content-index-heading">문서</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS 인증에 필요한 문서
      </h2>

      <p className="service-left-content-paragraph">
        강력한 문서 패키지는 원활한 처리를 보장합니다. 주요 요구사항은 다음과
        같습니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "사업 라이센스 또는 회사 등록 문서.",
          "제조 공정 흐름도.",
          "기계 및 장비 목록.",
          "제품 세부사항 및 기술 사양.",
          "BIS 인정 실험실의 테스트 보고서.",
          "품질 관리 매뉴얼.",
          "상표 인증서.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        외국 제조업체의 경우:
      </h3>

      <PointsListWithoutHeading
        points={["인정된 인도 대리인(AIR) 임명.", "대리 증명 및 신분 문서."]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">비용</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS 인증 비용</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                비용 구성 요소
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                세부사항
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                신청 수수료
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                제품 유형에 따라 일회성, 환불 불가 수수료
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                테스트 비용
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                복잡성에 따라 다름; BIS 인정 실험실에 지불
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                연간 라이센스 수수료
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                BIS 라이센스를 유지하기 위해 매년 지불
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                검사/공장 감사 비용
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                BIS 관리자가 공장을 방문할 경우 청구됨 (국내 또는 국제 여행 추가
                요금)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                컨설팅 비용 (해당되는 경우)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                선택사항, 컨설턴트로부터 엔드투엔드 규정 준수 지원
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
        <span className="service-left-content-index-heading">AIR</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        인정된 인도 대리인(AIR)의 역할
      </h2>

      <p className="service-left-content-paragraph">
        외국 제조업체에게 인정된 인도 대리인(AIR)은 매우 중요합니다.
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS와의 모든 의사소통을 처리합니다.",
          "문서를 수집하고 제출한 후 검사 과정을 용이하게 합니다.",
          "인증 전후의 규정 준수를 보장합니다.",
          "인도 시민이거나 등록된 현지 주소가 있는 조직이어야 합니다.",
        ]}
      />

      <p className="service-left-content-paragraph">
        AIR가 없으면 외국 기업이 BIS 인증을 받는 것은 불가능합니다.
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
        BIS 인증을 보유하는 것은 인도에서 사업을 하는 데 필수적입니다. 더 이상
        사업에서 선택적 인증이 아닙니다. 사업 성공과 신뢰 구축에 매우
        중요합니다. BIS는 인도에서 안전과 성공에 필수적입니다. 제조업체와
        수입업체에게는 쉬우면서도 안전한 사업 설정 환경을 제공합니다. 법적
        문제와 벌금은 더 이상 걱정거리가 아닙니다. BIS 마크를 통해 소비자 신뢰가
        보장됩니다.
      </p>

      <p className="service-left-content-paragraph">
        인도는 세계에서 가장 큰 성장 경제 중 하나이며 그곳에서 판매할 수 있는
        접근 권한을 얻는 것은 수출업체의 성장에 도움이 될 수 있습니다. 인도 또는
        해외의 제조업체이든 관계없이 인도 시장에서 제품을 제조하거나 판매하려면
        BIS 라이센스가 필요합니다. 이것은 필수이며 인도의 증가하는 인구와 함께
        사업 전망을 열어줍니다. 이것은 안전, 소비자 신뢰, 브랜드 평판, 신뢰성 및
        장기 성장에 대한 투자입니다.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">제도</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS 인증 제도</h2>

      <p className="service-left-content-paragraph">
        BIS는 다양한 산업 및 제품 유형을 위해 설계된 수많은 인증 제도를 보유하고
        있습니다. 각 제도는 산업과 제품의 특정 요구사항을 해결하도록
        설계되었습니다.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – 외국 제조업체 인증 제도",
          "ISI 마크 제도 (국내 제조업체)",
          "인도 BIS 하에서 제도 X",
          "CRS – 필수 등록 제도",
          "품질 보증 제도 (주얼리 및 귀금속)",
          "에코 마크 인증",
          "관리 시스템 인증 제도 (MSCS)",
          "LRS (실험실 인정 제도)",
        ]}
        linkMap={{
          "FMCS – 외국 제조업체 인증 제도":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISI 마크 제도 (국내 제조업체)":
            "a-guide-to-bis-certification-indian-bis",
          "인도 BIS 하에서 제도 X": "indian-bis-certification-under-scheme-x",
          "CRS – 필수 등록 제도": "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISI 마크 제도 (국내 제조업체)
      </h3>

      <p className="service-left-content-paragraph">
        인도 제조업체에게 BIS 라이센스를 받는 것은 국내에서 제품의 합법적 판매를
        보장하기 위한 전제 조건입니다. 이 인증은 제품의 품질, 안전성 및 성능
        기준과 관련된 인도 표준의 충족을 인증하기 위해 인도 표준국(BIS)이
        발급합니다. 여기에는 공장 감사, 제품 테스트 및 BIS 매개변수와의 규정
        준수 확인이 포함됩니다. 제품이 통과되면 제조업체는 제품에 ISI 마크를
        표시할 수 있습니다. 이 마크는 제조업체의 상표이며 고객이 진정한 ISI 인증
        제품을 식별하는 데 도움이 됩니다.
      </p>

      <p className="service-left-content-paragraph">
        전자 제품, 강철, 시멘트, 플라스틱 또는 건축 자재를 위한 것이든 관계없이
        BIS 인증서를 얻는 것은 시장 접근을 얻기 위해 필수적입니다. 소비자 신뢰를
        얻는 것과 달리, BIS 인증서는 인도 제조업체의 평판을 향상시키고 정부
        계약에 참여할 수 있게 하며 다양한 다른 사업 기회를 열어줍니다. 가장
        중요한 것은 BIS 인증이 없으면 법적 벌금과 제품 리콜부터 인도에서 판매
        완전 금지에 이르기까지 해로운 영향을 미칠 수 있다는 것입니다. 따라서 BIS
        규정 준수는 단순한 법적 요구사항이 아니라 소비자 신뢰를 확장하고
        유지하기 위한 목표 지향적 전략입니다.
      </p>

      <p className="service-left-content-paragraph">
        인도 제조업체에게 ISI 마크 제도는 가장 권위 있는 마크입니다. 이 제도
        하에서 인도 제조업체는 제품을 BIS 인정 테스트 시설에서 테스트해야
        합니다. 제조 현장은 검사 및 테스트 대상입니다. 규정 준수 제품은 ISI 마크
        사용 승인을 받습니다. 시멘트, LPG 실린더, 전선, 포장된 음용수 등을 ISI
        마크 없이 공급하는 것은 위법입니다.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – 외국 제조업체 인증 제도
      </h3>

      <p className="service-left-content-paragraph">
        외국 제조업체 인증 제도(FMCS)는 인도 시장에 진입하기를 원하는 외국
        기업을 위해 인도 표준국이 개발한 제도입니다. 이 제도는 해외에서 제조된
        제품의 안전성, 품질 및 성능 보증을 보장하며 필요한 인도 표준을
        준수합니다. FMCS에 따라 인도에서 제품을 판매하기를 원하는 외국 기업은
        먼저 인도 표준국 인증서 또는 라이센스를 취득해야 합니다. 인도 제조업체와
        마찬가지로, 외국 제조업체도 제품에 ISI 마크를 사용하기 위해 BIS
        라이센스를 취득해야 합니다. 바람직한 ISI 마크는 공장 및 엄격한 제품 샘플
        테스트를 포함한 광범위한 평가 후 인도 표준에 대해 부여됩니다.
      </p>

      <p className="service-left-content-paragraph">
        외국 제조업체는 인도 표준국(BIS)과의 첫 접촉 지점으로 통신 및 조정을
        담당하는 인정된 인도 대리인(AIR)을 임명해야 합니다. 여기에는 신청서
        제출, 심층 규정 준수 평가, 마감일 내 규정 준수를 달성하기 위한 모든
        필요한 의무의 인수가 포함됩니다. FMCS 지침을 따르는 결과, 외국 기업은
        인도 시장에 진입할 수 있을 뿐만 아니라 고객과의 평판을 획득할 수
        있습니다. ISI 마크가 있는 모든 제품은 인도에서 높은 수준의 품질, 안전성
        및 신뢰성 보증을 보여줍니다.
      </p>

      <p className="service-left-content-paragraph">
        규제 카테고리에 속하는 외국 제품은 FMCS 인증 없이는 인도에 들어올 수
        없습니다.
      </p>

      <h3 className="service-left-content-heading-three">
        제도 X (종합 기술 규정)
      </h3>

      <p className="service-left-content-paragraph">
        제도 X 또는 종합 기술 규정은 기계 및 전기 분야의 산업 규정 준수 절차를
        단순화하는 데 도움을 주기 위해 인도 표준국이 설계한 또 다른 BIS 인증
        제도입니다. 다른 인증 제도와 달리, 제도 X 는 제품이 인도 표준을
        준수하도록 보장하면서 문서화, 평가 및 승인을 줄이는 데 중점을 둡니다.
        표준 마크가 있는 제품은 탁월한 품질과 안전성을 가지며 유형 테스트, 공장
        검사 및 필수 요구사항의 간단한 인증을 거친 후 판매할 수 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        제도 X는 펌프, 크레인, 변압기, 공작 기계 및 기타 중공업 제품과 같은
        제품에 대한 중장비 기계 및 전기 장비 안전 가이드라인을 다룹니다.
        이것들은 가장 관련성이 높은 산업이며 신뢰성과 안전성이 필수적인 모든
        분야입니다. 제도 X 는 복잡한 BIS 인증의 시간과 비용을 단축하기 때문에
        편리합니다. 이것은 품질과 안전 표준을 훼손하지 않으면서 마케팅을 위한 더
        빠른 승인과 향상된 평판을 용이하게 하기 위해 규정 준수 프로세스를
        간소화하는 것을 목표로 합니다. 인도 표준국의 지속적이고 전통적인 평판은
        기업이 규정 준수 요구사항을 충족하고 경쟁력을 높이는 데 필수적인 더 쉬운
        국제 무역을 가능하게 합니다.
      </p>

      <p className="service-left-content-paragraph">
        BIS 제도 X는 인도 중공업 산업에 접근하기 위해 필수입니다. 이 새로운
        제도는 이 간소화되었지만 강력한 구조를 통해 간소화되는 규정에 대한
        개선된 시장 경쟁, 혁신 및 규정 준수에 중요합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        필수 등록 제도 (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        인도 표준국(BIS)은 인도의 IT 및 전자 제품을 규제하기 위해 필수 등록
        제도(CRS)라는 BIS 인증 프로그램을 개발했습니다. 이것은 LED 조명, 휴대폰,
        노트북, 파워뱅크 및 기타 소비자 전자 제품과 같은 고위험 제품의 안전성과
        품질을 인도 표준에 대해 평가하는 데 중점을 둡니다. CRS는 ISI 제도와 달리
        ISI 마크를 발급하지 않지만, 이 제도에 따라 규정을 준수하는 인증 제품에는
        고유 등록 번호가 있는 CRS 마크가 표시됩니다. 모든 전자 제품 및 IT 제품은
        BIS 인정 실험실에서 테스트되어야 하며 BIS CRS에 공식적으로 등록되어야
        하며, 인도에서 판매되거나 수입되기 전에 규정 준수를 보장하는 데
        사용됩니다.
      </p>

      <p className="service-left-content-paragraph">
        이 제도는 특히 급속히 성장하는 디지털 시장의 경우 인도 소비자를
        불안전한, 부적합하거나 위조된 전자 제품으로부터 보호하는 데
        필수적입니다. 인도 및 외국 제조업체 모두 CRS 인증을 취득해야 합니다.
        외국 기업은 규정 준수를 보장하기 위해 인정된 인도 대리인 AIR를 임명해야
        합니다. BIS 는 CRS 하에서 다루는 제품 목록을 지속적으로 업데이트하여
        새로운 제품 및 기술과 새로운 안전 문제를 포함합니다. 제조업체에게 CRS
        하에서 BIS 등록을 취득하는 것은 추가적인 장점입니다. 규정 준수에 도움이
        될 뿐만 아니라 인도의 전자 산업에서 고객의 신뢰, 회사의 평판 및 시장
        접근을 증가시키기 때문입니다.
      </p>

      <h3 className="service-left-content-heading-three">품질 보증 제도</h3>

      <p className="service-left-content-paragraph">
        인도에서 금 및 은 주얼리의 품질 보증은 품질 보증 제도 하에서 필수이며
        주얼리의 순도와 진정성을 보장하는 인도 표준국 (BIS)에 의해 규제됩니다.
        귀금속 제품은 BIS 승인된 분석 및 품질 보증 센터(AHC)에서 테스트된 후
        품질 보증 기호로 인쇄됩니다. 이 프로세스는 제품이 처음에 제시된 인도
        표준을 충족하는 경우에만 완료됩니다. 주얼리상은 먼저 품질 보증 주얼리를
        판매할 수 있는 BIS 라이센스를 취득해야 합니다. 이것이 합법적으로 그렇게
        하는 유일한 방법입니다. 주얼리상은 품질 보증 주얼리를 판매하기 위해 제품
        테스트를 거치고 완료하며, BIS 감사 및 지속적인 규정 준수 모니터링을 해야
        합니다. 이 프로세스는 결국 소비자를 보호하고 순도, 무게 및 품질을
        보장하며 주얼리 시장의 부정행위 및 사기를 제한합니다.
      </p>

      <p className="service-left-content-paragraph">
        인도 소비자에게 금과 은은 단순한 장식품이 아니라 주요 투자이기도 하며,
        이는 신뢰와 투명성을 필수적으로 만듭니다. 품질 보증 주얼리는 국가의 일반
        시민에게 판매용 모든 주얼리가 다양한 국가 기준 및 공정한 거래 관행에
        대해 광범위한 테스트를 거쳤다는 보증의 표시입니다. 주얼리상은 품질 보증
        주얼리를 통해 그들의 신뢰성과 시장 평판을 보여줄 수 있습니다. 설정된
        규칙을 준수하지 못하면 라이센스 정지를 포함할 수 있는 처벌을 받습니다.
        BIS 하에서 품질 보증의 경우, 이것은 원칙 기반 및 법적 의무의 이행으로
        작용합니다. 이것은 소비자 만족도를 높일 뿐만 아니라 인도 주얼리 시장
        전체를 향상시킵니다. 이것은 더 작은 소매업체뿐만 아니라 대규모
        제조업체에게도 마찬가지입니다.
      </p>

      <h3 className="service-left-content-heading-three">에코 마크 인증</h3>

      <p className="service-left-content-paragraph">
        에코 마크는 친환경 제품의 촉진을 목표로 인도 표준국 (BIS)이 만든 혁신
        중심 인정 제도입니다. 안전 및 품질 매개변수에 주로 관심을 갖는 전통적인
        인증과 달리, 에코 마크는 인도 표준을 준수하고 제품의 생명 주기의 여러
        단계 중 하나 이상에서 불리한 환경 영향을 최소한 어느 정도 감소시킨
        것으로 보여주는 제품에 수여됩니다. 에코 마크 인증은 상당한 테스트 및
        기준 - 배출 수준, 비독성, 생분해율, 재활용 능력 및 시스템과의 전체적
        상호작용을 포함하는 규정 준수 증명 후에만 수여됩니다. 에코 마크는 ISI
        마크와 마찬가지로 정부로부터 인증 마크 지위를 부여받은 보증의 상징이지만
        환경 지속가능성의 더 명확한 목표를 가지고 있습니다.
      </p>

      <p className="service-left-content-paragraph">
        에코 마크가 있는 BIS 라이센스는 회사가 책임 있는 제조에 참여하고 환경을
        신경 쓰고 있음을 인증합니다. 이것은 법률 준수를 보장하고 보호적인
        소비자와 지속가능성 지향적 기업과의 경쟁 우위를 만듭니다. 에코 마크 는
        산업이 녹색 관행을 신뢰하고 채택하는 데 도움이 되며 소비자가 구매하는
        제품이 안전하고 환경적으로 책임 있다고 신뢰하는 데 도움이 됩니다. 에코
        마크는 BIS 하에서 환경 보호와 함께 향상된 품질 보호에 대한 인도의 비전을
        지원합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        관리 시스템 인증 제도 (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        인도 표준국(BIS)이 시작한 관리 시스템 인증 제도(MSCS)는 국제적으로
        인정받고 인정된 관리 시스템의 구현에 대해 관련 기업을 평가하고 인정하는
        단계별 절차입니다. MSCS 프레임워크는 ISO 9001 품질 관리, ISO 14001 환경
        관리, ISO 45001 직업 건강 및 안전 관리 시스템 및 기타와 같은 ISO
        표준으로 구성됩니다. MSCS는 법적 운영, 일관성 및 운영의 지속적인 개선에
        대해 기업을 인증합니다. 인증된 기업은 고객, 규제 기관 및 이해관계자 간의
        신뢰를 구축하는 데 도움이 되는 수많은 평가 및 감사를 거치며 이것이 안전,
        품질 및 지속가능성 보장을 강화합니다.
      </p>

      <p className="service-left-content-paragraph">
        BIS는 인도의 국가 표준 기관이며 조직의 평판과 신뢰성을 인도 내외에서
        향상시키기 위한 인증 기관입니다. MSCS는 주기적 감독 및 재인증을 통해
        책임감을 조성하는 것 외에도 기업이 인도 제조 및 아트마니르바르 바랏과
        같은 공공 주도 프로그램을 적극적으로 지원할 수 있게 해줍니다. 법적 의무
        외에도 이 제도는 무결성, 효율성 및 공정 거래 문화를 조성하는 데 도움이
        됩니다. MSCS 는 인증된 기업의 무역 및 투자를 장려하며 BIS 는 국가의 품질
        생태계 발전에 중요한 역할을 합니다.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – 실험실 인정 제도
      </h3>

      <p className="service-left-content-paragraph">
        인도 표준국(BIS) 하에서 실험실 인정 제도 (LRS)는 BIS 승인을 위해 제품을
        테스트하고 인증하는 실험실의 신뢰성 및 전반적인 역량을 보장하는 시스템의
        핵심 부분입니다. 이러한 실험실은 기술적 지식, 인력의 품질, 인프라 및
        ISO/ IEC 17025 표준에 대한 실험실의 전반적인 역량 및 만족도를 포함한
        다양한 속성에 대해 비판적으로 평가됩니다. 이러한 실험실은 승인되면 ISI
        마크 제도 및 필수 등록 제도(CRS)와 같은 다양한 BIS 인증 프로그램의
        일부로 적합성 평가가 수행되는 제품에 대한 테스트를 수행할 수 있습니다.
        제조업체, 특히 수입업체 및 수출업체에게 LRS 승인 실험실에서 얻은
        보고서는 특정 제품에 대한 법적 요구사항인 BIS 인증서를 취득하기 위한
        중요한 요구사항임이 명확합니다.
      </p>

      <p className="service-left-content-paragraph">
        LRS는 테스트 결과의 형평성을 유지하고 모든 결과가 일관되고 글로벌 기준을
        기준으로 하도록 보장하면서 신뢰할 수 있고 건전한 실험실만 인정함으로써
        인도의 보증 시스템을 강화하고 있습니다. 무결성과 투명성을 유지하기 위해
        BIS는 정기적인 감사, 숙련도 테스트 및 인정된 제도 실험실의 감시를
        수행합니다. 이 인증의 인정은 BIS가 소비자로부터의 신뢰를 향상시키면서
        산업에 대한 인증 프로세스를 더 효율적으로 만들 수 있게 합니다. 안전하고
        규정을 준수하며 고품질 제품만이 인도 시장에 제공되기 때문입니다. BIS
        인증을 받으려는 조직에게 LRS 승인 실험실과의 협력이 규정 준수 및 시장
        접근을 달성하기 위한 가장 필수적인 것입니다.
      </p>

      <h3 className="service-left-content-heading-three">
        BIS 인증이 필요한 제품
      </h3>

      <p className="service-left-content-paragraph">
        BIS 인증은 다양한 제품에 적용됩니다. 예시로는 다음이 포함됩니다:
      </p>

      <PointsListWithoutHeading
        points={[
          "전기 및 전자 제품 – LED 조명, 휴대폰, 어댑터, 노트북.",
          "건축 자재 – 시멘트, 강철 막대, 구조 제품.",
          "소비재 – 포장된 음용수, 조리 가스 실린더.",
          "주얼리 및 귀금속 – 품질 보증 하의 금 및 은 제품.",
          "산업 장비 – 펌프, 변압기, 공작 기계.",
        ]}
      />

      <p className="service-left-content-paragraph">
        새로운 위험과 기술이 등장함에 따라 목록은 계속 증가하고 있습니다.
      </p>

      <h3 className="service-left-content-heading-three">BIS 인증의 혜택</h3>

      <p className="service-left-content-paragraph">
        기업에게 BIS 인증서는 단순한 법률 준수 이상을 제공합니다.
      </p>

      <PointsListWithoutHeading
        points={[
          "법적 규정 준수: 벌금 없음, 금지 없음, 압수 없음.",
          "시장 접근: 인도에서 규제 제품을 판매하는 데 필요.",
          "소비자 신뢰: 증거의 표시로 잘 알려진 ISI 마크로 구축.",
          "경쟁 우위: 인증된 기업이 인증되지 않은 경쟁자와 쉽게 차별화됨.",
          "수출 촉진: 많은 국제 구매자가 BIS 인증을 이해하고 감사함.",
          "입찰 참여: 많은 정부 프로젝트가 BIS 인증 제품에 대해 계약을 수주함.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "인도에서 BIS 인증이란 무엇인가요?",
      answer:
        "BIS 인증은 제품이 안전성, 성능 및 품질에 대한 인도 표준을 준수하도록 보장하기 위해 인도 표준국(BIS)이 발급하는 품질 보증 인증입니다. 다양한 제품 카테고리에 필수이며 소비자 보호 및 규정 준수에 도움이 됩니다.",
    },
    {
      question: "BIS 인증서가 필요한 이유는 무엇인가요?",
      answer:
        "BIS 인증서는 인도에서 특정 제품을 합법적으로 제조, 수입, 유통 또는 판매하는 데 필수적입니다. 제품이 인도 표준의 안전 및 품질 가이드라인을 충족함을 소비자에게 보장합니다.",
    },
    {
      question: "BIS 인증 하에서 ISI 마크란 무엇인가요?",
      answer:
        "ISI 마크는 BIS 인증 제도 하에서 제공되는 인증 기호입니다. 제품이 인도 표준을 준수하며 적절한 테스트 및 등록을 통해 인도 BIS에 의해 인증되었음을 나타냅니다.",
    },
    {
      question: "인도에서 누가 BIS 라이센스를 발급하나요?",
      answer:
        "BIS 라이센스는 소비자 업무부, 식품 및 공공 유통부 산하의 국가 표준 기관인 인도 표준국(인도 BIS)이 발급합니다.",
    },
    {
      question: "BIS 인증 제도의 다양한 유형은 무엇인가요?",
      answer:
        "주요 BIS 인증 제도에는 ISI 마크 제도, 필수 등록 제도(CRS), 외국 제조업체 인증 제도(FMCS), 주얼리 품질 보증, 에코 마크 인증, 산업 기계에 대한 제도 X가 포함됩니다.",
    },
    {
      question: "BIS 인증 하에서 제도 X란 무엇인가요?",
      answer:
        "제도 X는 펌프, 변압기, 공작 기계 및 크레인과 같은 산업 제품에 적용되는 간소화된 BIS 인증 프로세스입니다. 인도 표준 준수를 훼손하지 않으면서 더 빠른 승인을 보장합니다.",
    },
    {
      question: "인도에서 어떤 제품이 BIS 인증이 필요한가요?",
      answer:
        "전기 제품, 전자 제품, 주방 용품, 시멘트, 강철, 금 주얼리, 휴대폰 및 변압기와 같은 제품은 인도 BIS 지침에 따라 BIS 인증이 필요합니다.",
    },
    {
      question: "모든 제품에 BIS 등록이 필수인가요?",
      answer:
        "아니요, BIS 등록은 필수 인증 제도에 나열된 제품에만 필수입니다. 그러나 제품 신뢰성을 높이기 위해 자발적인 BIS 인증도 제공됩니다.",
    },
    {
      question: "BIS 라이센스는 얼마 동안 유효한가요?",
      answer:
        "BIS 라이센스는 일반적으로 1년에서 2년 동안 유효하며, ISI 마크를 계속 사용하거나 BIS 등록 상태를 유지하려면 만료 전에 갱신해야 합니다.",
    },
    {
      question: "인도에서 BIS 인증을 받는 단계는 무엇인가요?",
      answer:
        "BIS 인증 프로세스에는 적용 가능한 인도 표준 식별, 신청서 제출, 제품 테스트, 공장 검사 및 승인 시 BIS 인증서 발급이 포함됩니다.",
    },
    {
      question: "외국 제조업체가 BIS 라이센스를 신청할 수 있나요?",
      answer:
        "네, 외국 제조업체 인증 제도(FMCS) 하에서 외국 기업은 인도에서 제품을 판매하기 위해 BIS 라이센스를 신청할 수 있습니다. 인정된 인도 대리인(AIR)을 임명해야 합니다.",
    },
    {
      question: "BIS 인증에서 AIR의 역할은 무엇인가요?",
      answer:
        "AIR(인정된 인도 대리인)는 외국 제조업체와 인도 BIS 사이의 연락 담당자 역할을 합니다. 문서화, 의사소통 및 BIS 인증 요구사항 준수를 담당합니다.",
    },
    {
      question: "온라인으로 BIS 등록을 신청하는 방법은 무엇인가요?",
      answer:
        "공식 BIS 포털을 통해 온라인으로 BIS 등록을 신청할 수 있습니다. 프로세스에는 양식 제출, 문서 업로드, 테스트 보고서 및 수수료 지불이 포함됩니다.",
    },
    {
      question: "BIS 인증서에 필요한 문서는 무엇인가요?",
      answer:
        "필요한 문서에는 사업 라이센스, 제품 사양, 제조 공정, 실험실 테스트 보고서, 공장 배치, 품질 매뉴얼 및 승인 양식(외국 제조업체의 경우)이 포함됩니다.",
    },
    {
      question: "인도에서 BIS 인증 비용은 얼마인가요?",
      answer:
        "BIS 인증 비용은 제품 유형, 테스트 요구사항, 제도 유형(ISI, CRS, FMCS) 및 신청자가 국내인지 외국인지에 따라 다릅니다. 비용에는 신청 수수료, 테스트 비용 및 검사 비용이 포함됩니다.",
    },
    {
      question: "BIS 인증 제품 모두에 ISI 마크가 필수인가요?",
      answer:
        "아니요, ISI 제도 하의 제품만 ISI 마크를 표시해야 합니다. CRS 또는 품질 보증 제도 하의 제품은 BIS 등록 규범에 따라 다른 라벨링 프로토콜을 따릅니다.",
    },
    {
      question: "친환경 제품에 대해 BIS 인증을 받을 수 있나요?",
      answer:
        "네, 환경 표준을 충족하는 제품은 환경 안전에 대한 인도 표준 준수를 보장하는 에코 마크 제도 하에서 BIS 인증을 받을 수 있습니다.",
    },
    {
      question: "BIS 인증과 BIS 등록의 차이점은 무엇인가요?",
      answer:
        "BIS 인증은 일반적으로 ISI, FMCS 또는 품질 보증 제도 하의 승인을 의미하는 반면, BIS 등록은 일반적으로 전자 제품에 대한 CRS 제도와 연관되어 있습니다.",
    },
    {
      question: "필수 등록 제도(CRS)란 무엇인가요?",
      answer:
        "CRS는 LED 조명, 휴대폰 및 파워뱅크와 같은 IT 및 전자 제품에 대한 BIS 등록 프로그램입니다. 제품이 안전 관련 인도 표준을 준수하도록 보장합니다.",
    },
    {
      question: "ISI 마크와 BIS 인증서가 같은 의미인가요?",
      answer:
        "정확히는 아닙니다. ISI 마크는 BIS 인증 제도 하에서 인증 제품에 부여된 기호입니다. BIS 인증서는 제조업체에게 발급된 법적 문서입니다.",
    },
    {
      question: "하나의 BIS 라이센스로 여러 제품을 포함할 수 있나요?",
      answer:
        "아니요, 제품이 유사하더라도 각 제품 유형과 각 제조 위치에 대해 별도의 BIS 라이센스가 필요합니다.",
    },
    {
      question: "BIS 인증 없이 제품을 판매하면 어떻게 되나요?",
      answer:
        "유효한 BIS 라이센스 없이 BIS 인증이 필요한 제품을 판매하는 것은 인도에서 불법이며 벌금, 제품 리콜 또는 금지를 초래할 수 있습니다.",
    },
    {
      question: "BIS 인증을 받는 데 얼마나 걸리나요?",
      answer:
        "BIS 인증 프로세스는 일반적으로 제품 유형, 테스트 요구사항 및 신청자가 국내인지 외국인지에 따라 30일에서 90일이 걸립니다.",
    },
    {
      question: "BIS 인증이 전 세계적으로 인정되나요?",
      answer:
        "BIS 인증은 인도에 특정되어 있지만 엄격한 인도 표준 준수를 보여줌으로써 글로벌 신뢰성을 향상시킵니다. 일부 BIS 인증 제품은 상호 인정 협정에 따라 인정되기도 합니다.",
    },
    {
      question: "BIS 라이센스를 얼마나 자주 갱신해야 하나요?",
      answer:
        "BIS 라이센스는 매년 또는 격년으로 갱신해야 합니다. 제조업체는 인도 표준을 준수하고 감시 감사를 통과하여 BIS 인증서를 갱신해야 합니다.",
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
          자주 묻는 질문 – 인도 BIS 인증
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          찾고 계신 답을 찾을 수 없으신가요?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            저희에게 연락하세요!
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
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    },
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
    // {
    //   code: "ko",
    //   name: "Korean",
    //   flag: "https://flagcdn.com/w320/kr.png",
    //   path: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    // },
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

const BISCertificationServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              저희 서비스
            </h2>
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
              외국 제조를 위한 BIS 마크(ISI 라이센스)
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
              EPR 인증서 인증
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
              LMPC 인증서 인증
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
              인도 제조업체를 위한 ISI 마크 (BIS)
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
