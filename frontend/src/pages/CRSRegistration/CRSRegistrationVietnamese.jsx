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
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
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
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationVietnamese = () => {
  return (
    <div className="relative">
      {/* CRS Registration Meta Tags */}
      <CRSRegistrationMetaTags />
      {/* CRS Registration Breadcrumb */}
      <CRSRegistrationBreadcrumb />
      {/* CRS Registration Hero Section */}
      <CRSRegistrationHero />
      {/* CRS Registration Index Section */}
      <CRSRegistrationIndex />
      {/* CRS Registration Main Content Section */}
      <CRSRegistrationMainContent />
      {/* Footer Section */}
      <FooterVietnamese />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationVietnamese;

const CRSRegistrationMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Đăng ký BIS CRS",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Đăng Ký BIS - Chương Trình Đăng Ký Bắt Buộc (CRS)</title>
      <meta
        name="description"
        content="Đăng ký BIS là việc có được giấy phép từ BIS cho các sản phẩm điện tử và CNTT tuân thủ các tiêu chuẩn Ấn Độ áp dụng theo chương trình CRS."
      />
      <meta
        name="keywords"
        content="Giấy chứng nhận BIS, Quy trình đăng ký BIS, Đăng ký BIS, Quy trình đăng ký BIS trực tuyến, Chứng nhận BIS cho sản phẩm điện tử, Quy trình đăng ký BIS tại Ấn Độ, Đăng ký BIS cho sản phẩm điện tử, Chương trình đăng ký bắt buộc"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Đăng Ký BIS - Chương Trình Đăng Ký Bắt Buộc (CRS)"
      />
      <meta
        property="og:description"
        content="Đăng ký BIS là việc có được giấy phép từ BIS cho các sản phẩm điện tử và CNTT tuân thủ các tiêu chuẩn Ấn Độ áp dụng theo chương trình CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Đăng Ký BIS - Chương Trình Đăng Ký Bắt Buộc (CRS)"
      />
      <meta
        name="twitter:description"
        content="Đăng ký BIS là việc có được giấy phép từ BIS cho các sản phẩm điện tử và CNTT tuân thủ các tiêu chuẩn Ấn Độ áp dụng theo chương trình CRS."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const CRSRegistrationBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Trang chủ</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Đăng ký BIS CRS</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationHero = () => {
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
              Chuyên Gia Được Chứng Nhận
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Đăng Ký BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Bắt buộc đối với sản phẩm điện tử để đảm bảo an toàn & chất lượng.
            Nhận sự chấp thuận BIS với sự hỗ trợ chuyên gia!
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
                Xem Dịch Vụ
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <CRSRegistrationHeroContactForm />
      </div>
    </main>
  );
};

const CRSRegistrationHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/vi/crs-bis-la-gi-hoac-dang-ky-crs"))
      return "Đăng ký CRS";
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
        title: "Vui lòng nhập họ tên hợp lệ.",
        description: "Họ tên chỉ nên chứa chữ cái và khoảng trắng.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập địa chỉ email hợp lệ.",
        description: "Kiểm tra xem định dạng email của bạn có đúng không",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập số điện thoại hợp lệ",
        description: "Số điện thoại phải chứa (8-15 chữ số)",
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
        title: "Gửi biểu mẫu liên hệ thành công!",
        description:
          "Cảm ơn bạn đã liên hệ với chúng tôi. Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm.",
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
      const errorMessage = error.response?.data?.message || "Đã xảy ra lỗi";
      toast({
        variant: "destructive",
        title: errorMessage || "Không thể gửi chi tiết biểu mẫu liên hệ!",
        description:
          "Đã xảy ra lỗi. Vui lòng kiểm tra chi tiết của bạn và thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Liên Hệ Chúng Tôi
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Đặt Lịch Hẹn
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Bạn muốn liên hệ với đội ngũ của chúng tôi và lên lịch cuộc gọi?
        <span className="text-black"> Thử Ngay</span>
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
            placeholder="Họ tên *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Địa chỉ email *"
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
            placeholder="Số điện thoại *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Tên công ty *"
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
            placeholder="Tên sản phẩm *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Chứng nhận yêu cầu*"
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
              <span>Đang gửi</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Đặt lịch hẹn</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const CRSRegistrationIndex = () => {
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
    overview: "Tổng quan",
    eligibility: "Đủ điều kiện",
    documents: "Tài liệu",
    registration: "Đăng ký",
    fees: "Phí đăng ký",
    elabelling: "E-Labelling",
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

const CRSRegistrationMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <CRSRegistrationMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentVietnamese />
        </div>
      </div>
      <CRSRegistrationServiceFaq />
      <CISProductTable />
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
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    },
    // {
    //   code: "vi",
    //   name: "Vietnamese",
    //   flag: "https://flagcdn.com/w320/vn.png",
    //   path: "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
    // },
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
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Dịch Vụ Của Chúng Tôi
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Chuyên Gia Chứng Nhận Tốt Nhất Ấn Độ
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
              Dấu BIS (Giấy Phép ISI) Cho Nhà Sản Xuất Nước Ngoài
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
              Chứng Nhận Đăng Ký CDSCO
            </p>
          </Link>

          <Link
            to="/vi/crs-bis-la-gi-hoac-dang-ky-crs"
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
              Đăng Ký BIS (CRS)
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
              Quản Lý Chất Thải Nhựa
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
              Chứng Nhận Giấy Chứng Nhận EPR
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
              Chứng Nhận Giấy Chứng Nhận LMPC
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
              Giấy Chứng Nhận Đăng Ký BIS
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
              DẤU ISI (BIS) CHO CÁC NHÀ SẢN XUẤT ẤN ĐỘ
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
      question: "1. Đăng ký BIS là gì?",
      answer:
        "Chứng nhận BIS là quá trình tuân thủ do Bureau of Indian Standards quản lý, xác minh rằng sản phẩm đáp ứng Tiêu chuẩn Ấn Độ (IS) áp dụng về chất lượng, an toàn và độ tin cậy.",
    },
    {
      id: "item-2",
      question: "2. Đăng ký CRS dưới BIS là gì?",
      answer:
        "CRS là viết tắt của Chương trình Đăng ký Bắt buộc. Đây là quy trình đăng ký bắt buộc cho các danh mục sản phẩm cụ thể như điện tử, điện, pin và mặt trời. Sản phẩm dưới CRS phải được kiểm tra và đăng ký với BIS trước khi có thể bán ở Ấn Độ.",
    },
    {
      id: "item-3",
      question: "3. Chứng nhận BIS có bắt buộc ở Ấn Độ không?",
      answer:
        "Có. Đối với tất cả các sản phẩm được liệt kê dưới danh sách sản phẩm CRS (hiện tại có hơn 80 mặt hàng), đăng ký BIS là bắt buộc để sản xuất, nhập khẩu hoặc bán ở Ấn Độ.",
    },
    {
      id: "item-4",
      question: "4. Sự khác biệt giữa BIS CRS và dấu ISI là gì?",
      answer:
        "BIS CRS: Cho hàng hóa điện tử và CNTT, chỉ cho các sản phẩm bắt buộc được thông báo dưới QCO. <br />Dấu ISI: Được sử dụng cho phạm vi sản phẩm rộng hơn, có thể tự nguyện hoặc bắt buộc tùy thuộc vào danh mục sản phẩm.",
    },
    {
      id: "item-5",
      question: "5. Ai có thể đăng ký chứng nhận BIS CRS?",
      answer:
        "Chỉ các nhà sản xuất mới có thể đăng ký. Điều này bao gồm cả các nhà sản xuất Ấn Độ và nước ngoài. Thương hiệu nước ngoài phải bổ nhiệm một Đại diện Ấn Độ được ủy quyền (AIR).",
    },
    {
      id: "item-6",
      question: "6. Vai trò của AIR là gì?",
      answer:
        "Đại diện Ấn Độ được ủy quyền (AIR) chịu trách nhiệm pháp lý về việc nộp đơn BIS thay mặt cho nhà sản xuất nước ngoài. Họ đóng vai trò là liên lạc chính thức giữa BIS và người nộp đơn ở nước ngoài.",
    },
    {
      id: "item-7",
      question: "7. Đăng ký BIS CRS mất bao lâu?",
      answer:
        "Quá trình thường mất 3–4 tuần, giả định tất cả các tài liệu và báo cáo kiểm tra được gửi đúng cách và không có ý kiến nào được BIS đưa ra.",
    },
    {
      id: "item-8",
      question: "8. Giấy chứng nhận BIS CRS có giá bao nhiêu?",
      answer:
        "Chi phí bao gồm: <br />Phí kiểm tra: ₹10,000–₹20,000 + GST <br />Phí Chính phủ: ₹53,000 + GST mỗi báo cáo kiểm tra <br />Phí bổ sung: Affidavit, chuyển phát nhanh, tài liệu AIR, v.v. <br />Giảm giá áp dụng cho các nhà sản xuất đã đăng ký MSME Ấn Độ",
    },
    {
      id: "item-9",
      question: "9. Hiệu lực của giấy chứng nhận BIS CRS là bao lâu?",
      answer:
        "Giấy phép BIS ban đầu có hiệu lực trong 2 năm. Nó có thể được gia hạn lên đến 5 năm nếu sản phẩm và chi tiết sản xuất không thay đổi.",
    },
    {
      id: "item-10",
      question: "10. Chứng nhận BIS có thể tự nguyện không?",
      answer:
        "Không. Dưới CRS, bạn không thể tự nguyện đăng ký các sản phẩm không được liệt kê dưới QCO. Chứng nhận tự nguyện chỉ áp dụng cho các sản phẩm không phải CRS thông qua chương trình ISI.",
    },
    {
      id: "item-11",
      question: "11. Tôi có thể tìm danh sách sản phẩm BIS CRS ở đâu?",
      answer:
        'Bạn có thể truy cập trang web BIS chính thức <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> và điều hướng đến phần "Sản phẩm dưới CRS" để xem danh sách đầy đủ các sản phẩm được bảo hiểm.',
    },
    {
      id: "item-12",
      question: "12. Dấu BIS có thể hiển thị điện tử không?",
      answer:
        "Có, thông qua e-labelling, nhưng phải tuân thủ các quy tắc nghiêm ngặt của BIS: Thông tin nhãn phải được nhúng trong phần sụn <br />Truy cập dễ dàng trong 4 bước trong menu thiết bị <br />Bao bì vật lý vẫn phải mang thông tin quy định",
    },
    {
      id: "item-13",
      question:
        "13. Điều gì xảy ra nếu tôi không đăng ký BIS cho sản phẩm bắt buộc?",
      answer:
        "Hình phạt nghiêm trọng, bao gồm: <br />Tịch thu sản phẩm <br />Từ chối Hải quan <br />Phạt pháp lý <br />Xóa khỏi các cổng thương mại điện tử <br />Cấm vĩnh viễn khỏi thị trường Ấn Độ",
    },
    {
      id: "item-14",
      question:
        "14. Một giấy chứng nhận BIS có thể bao gồm nhiều mô hình hoặc thương hiệu không?",
      answer:
        "Không. Mỗi thương hiệu và vị trí nhà máy phải được chứng nhận riêng biệt. Nhiều mô hình có thể được thêm bằng cách sử dụng báo cáo bổ sung, nhưng chỉ dưới cùng một ứng dụng và thương hiệu.",
    },
    {
      id: "item-15",
      question: "15. Sun Certifications India có thể giúp tôi như thế nào?",
      answer:
        "Chúng tôi cung cấp: <br />Hỗ trợ tài liệu đầy đủ <br />Phối hợp phòng thí nghiệm <br />Xử lý đơn đăng ký cổng BIS <br />Giải quyết truy vấn và theo dõi BIS <br />Gia hạn và hướng dẫn dán nhãn <br />Đảm bảo tuân thủ cho thương hiệu nước ngoài thông qua dịch vụ AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Câu Hỏi Thường Gặp
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Không tìm thấy câu trả lời bạn đang tìm?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Liên hệ với chúng tôi!
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
                  Hiển thị ít câu hỏi hơn
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
                  Hiển thị thêm câu hỏi
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
    product: "BỘ KHUẾCH ĐẠI CÓ CÔNG SUẤT ĐẦU VÀO 2000W TRỞ LÊN",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 2,
    product: "MÁY XỬ LÝ DỮ LIỆU TỰ ĐỘNG",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 3,
    product: "ĐỒNG HỒ ĐIỆN TỬ CHẠY BẰNG NGUỒN ĐIỆN LƯỚI",
    isNumber: "IS 302-2-26:2014",
    date: "03 July 2013",
  },
  {
    id: 4,
    product: "TRÒ CHƠI ĐIỆN TỬ (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 5,
    product: "HỆ THỐNG NHẠC ĐIỆN TỬ CÓ CÔNG SUẤT ĐẦU VÀO 200W TRỞ LÊN",
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
    product: "LÒ VI SÓNG",
    isNumber: "IS 302-2-25:2014",
    date: "03 July 2013",
  },
  {
    id: 8,
    product:
      "MÁY PHÁT ĐĨA QUANG CÓ BỘ KHUẾCH ĐẠI TÍCH HỢP CÔNG SUẤT ĐẦU VÀO 200W TRỞ LÊN",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 9,
    product: 'TIVI PLASMA/LCD/LED MÀN HÌNH 32" TRỞ LÊN',
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 10,
    product: "MÁY IN, MÁY VẼ",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 11,
    product: "MÁY QUÉT",
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
    product: "MÁY TRẢ LỜI ĐIỆN THOẠI",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 14,
    product: 'ĐƠN VỊ HIỂN THỊ HÌNH ẢNH, MÀN HÌNH VIDEO 32" TRỞ LÊN',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 15,
    product: "BÀN PHÍM KHÔNG DÂY",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 16,
    product: "MÁY TÍNH TIỀN",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 17,
    product: "MÁY SAO CHÉP/MÁY NHÂN BẢN",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 18,
    product: "MÁY ĐỌC HỘ CHIẾU",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 19,
    product: "MÁY ĐIỂM BÁN HÀNG",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 20,
    product: "MÁY XỬ LÝ THƯ/MÁY TEM THƯ/MÁY ĐÓNG DẤU",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 21,
    product: "PIN SẠC DỰ PHÒNG CHO ỨNG DỤNG DI ĐỘNG",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 22,
    product: "MÁY ĐỌC THẺ THÔNG MINH",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 23,
    product: "ĐIỆN THOẠI DI ĐỘNG",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "ĐÈN LED TỰ ỔN ĐỊNH CHO DỊCH VỤ CHIẾU SÁNG TỔNG QUÁT",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "BỘ ĐIỀU KHIỂN ĐIỆN TỬ DC HOẶC AC CHO MÔ-ĐUN LED",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 December 2015",
  },
  {
    id: 26,
    product:
      "BỘ CHUYỂN ĐỔI NGUỒN CHO THIẾT BỊ ÂM THANH, VIDEO & THIẾT BỊ ĐIỆN TỬ TƯƠNG TỰ",
    isNumber: "IS 616:2010",
    date: "01 December 2015",
  },
  {
    id: 27,
    product: "BỘ CHUYỂN ĐỔI NGUỒN CHO THIẾT BỊ CNTT",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 December 2015",
  },
  {
    id: 28,
    product: "ĐÈN LED MỤC ĐÍCH TỔNG QUÁT CỐ ĐỊNH",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 March 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTER CỦA <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 March 2016",
  },
  {
    id: 30,
    product:
      "TẾ BÀO/PIN THỨ CẤP KÍN CHỨA ALKALINE HOẶC ĐIỆN GIẢI KHÔNG AXIT KHÁC CHO ỨNG DỤNG DI ĐỘNG PHẦN 1 HỆ THỐNG NICKEL",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 June 2016",
  },
  {
    id: 31,
    product:
      "TẾ BÀO/PIN THỨ CẤP KÍN CHỨA ALKALINE HOẶC ĐIỆN GIẢI KHÔNG AXIT KHÁC CHO ỨNG DỤNG DI ĐỘNG PHẦN 2 HỆ THỐNG LITHIUM",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 June 2016",
  },
  {
    id: 32,
    product: "HỖ TRỢ NGÔN NGỮ ẤN ĐỘ CHO ĐIỆN THOẠI DI ĐỘNG",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 May 2018",
  },
  {
    id: 33,
    product: "Đèn LED Lắp Âm",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 May 2018",
  },
  {
    id: 34,
    product: "Đèn LED Cho Chiếu Sáng Đường và Phố",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 May 2018",
  },
  {
    id: 35,
    product: "Đèn LED Pha",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 May 2018",
  },
  {
    id: 36,
    product: "Đèn LED Cầm Tay",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 May 2018",
  },
  {
    id: 37,
    product: "Dây Đèn LED",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 May 2018",
  },
  {
    id: 38,
    product: "Đèn LED Chiếu Sáng Khẩn Cấp",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 May 2018",
  },
  {
    id: 39,
    product: "UPS/Inverter cấp <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 May 2018",
  },
  {
    id: 40,
    product: "Tivi Plasma/LCD/LED màn hình lên đến 32",
    isNumber: "IS 616 : 2017",
    date: "23 May 2018",
  },
  {
    id: 41,
    product: "Đơn Vị Hiển Thị Hình Ảnh, Màn Hình Video có màn hình lên đến 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 42,
    product: "Camera CCTV/Máy Ghi CCTV",
    isNumber: "IS 13252 (Part 1) : 2010, Yêu Cầu Thiết Yếu Cho Bảo Mật CCTV",
    date: "23 May 2018",
  },
  {
    id: 43,
    product: "Bộ Chuyển Đổi Cho Thiết Bị Điện Gia Dụng và Tương Tự",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 May 2018",
  },
  {
    id: 44,
    product:
      "Máy Đọc Mã Vạch USB, Máy Quét Mã Vạch, Máy Quét Mống Mắt, Máy Quét Vân Tay Quang Học",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 45,
    product: "Đồng Hồ Thông Minh",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 46,
    product:
      "Mô-Đun Quang Điện (PV) Terrestrial Silicon Tinh Thể (Dựa Trên Wafer Si)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 47,
    product:
      "Mô-Đun Quang Điện (PV) Terrestrial Màng Mỏng (a-Si, CiGs và CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 48,
    product: "Bộ Chuyển Đổi Nguồn Cho Hệ Thống Nguồn Quang Điện",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 June 2021",
  },
  {
    id: 49,
    product: "Inverter Quang Điện Kết Nối Tiện Ích",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 June 2021",
  },
  {
    id: 50,
    product: "Pin Sạc",
    isNumber: "IS 16270 : 2014",
    date: "01 January 2019",
  },
  {
    id: 51,
    product: "Mô-Đun LED Độc Lập Cho Chiếu Sáng Tổng Quát",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Dây Đèn (Đèn Rope)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Bàn Phím",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Bếp Từ",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Máy Rút Tiền Tự Động (ATM)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "Ổ Cứng Ngoài USB",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Tai Nghe Không Dây và Earphone",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product:
      "Thiết Bị Lưu Trữ Trạng Thái Rắn Ngoài USB (dung lượng trên 256 GB)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Hệ Thống Nhạc Điện Tử có công suất đầu vào dưới 200 Watts",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product:
      "Nguồn Cung Ứng Chế Độ Chuyển Mạch Độc Lập (SMPS) có điện áp đầu ra 48V (tối đa)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Tivi Khác Với Plasma/LCD/LED",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Nồi Cơm Điện",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Micrô Không Dây",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 64,
    product: "Máy Ảnh Số",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 October 2021",
  },
  {
    id: 65,
    product: "Máy Quay Video",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 66,
    product: "Webcam (Sản Phẩm Hoàn Chỉnh)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 67,
    product: "Loa Thông Minh (Có và Không Có Màn Hình)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 68,
    product: "Bộ Điều Chỉnh Sáng Cho Sản Phẩm LED",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 October 2021",
  },
  {
    id: 69,
    product: "Loa Bluetooth",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 70,
    product: "Axit Orthophosphoric",
    isNumber: "IS 798 : 2020",
    date: "12 December 2021",
  },
  {
    id: 71,
    product: "Axit Polyphosphoric",
    isNumber: "IS 17439:2020",
    date: "24 December 2021",
  },
  {
    id: 72,
    product: "Kiện Bông",
    isNumber: "IS 12171:2019",
    date: "03 March 2023",
  },
  {
    id: 73,
    product: "Trimethyl Phosphite Cấp Kỹ Thuật",
    isNumber: "IS 17412:2020",
    date: "03 March 2023",
  },
  {
    id: 74,
    product: "Bộ Tivi",
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
          Danh Sách Sản Phẩm Chính Thức Dưới Đăng Ký BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Bảng sau đây liệt kê các sản phẩm yêu cầu đăng ký BIS CRS tại Ấn Độ
          cùng với số Tiêu chuẩn Ấn Độ (IS) áp dụng và ngày triển khai.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm theo tên hoặc số IS..."
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
                  STT
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Sản Phẩm
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Số IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Ngày Triển Khai
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
                Trước
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Trang {currentPage} / {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const CRSRegistrationMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">
            Đăng Ký BIS Là Gì?
          </h2>

          <p className="service-left-content-paragraph">
            Bureau of Indian Standards (BIS) là cơ quan tiêu chuẩn hóa quốc gia
            ở Ấn Độ và hoạt động dưới Bộ Tiêu dùng, Thực phẩm và Phân phối Công
            cộng, Chính phủ Ấn Độ. BIS chịu trách nhiệm duy trì chất lượng, an
            toàn và các tiêu chuẩn hiệu suất cho các sản phẩm và dịch vụ khác
            nhau ở Ấn Độ theo Tiêu chuẩn Ấn Độ (IS) có liên quan.
          </p>

          <p className="service-left-content-paragraph">
            BIS chịu trách nhiệm giám sát và thực hiện các chương trình khác
            nhau ở Ấn Độ. Chương trình Đăng ký Bắt buộc (CRS) là một chương
            trình chứng nhận nổi bật và bắt buộc của BIS bao gồm các danh mục
            sản phẩm điện tử và CNTT khác nhau.
          </p>

          <p className="service-left-content-paragraph">
            Hiệu suất và an toàn của sản phẩm Ấn Độ là vấn đề quan trọng đối với
            Ấn Độ. Chứng nhận BIS CRS đảm bảo rằng các sản phẩm điện tử và CNTT
            tuân thủ các tiêu chuẩn Ấn Độ và giúp bảo vệ người tiêu dùng khỏi
            các sản phẩm không tuân thủ và kém chất lượng.
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
        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tổng quan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Chương Trình Đăng Ký Bắt Buộc (CRS) Là Gì?
      </h2>

      <p className="service-left-content-paragraph">
        Chương trình Đăng ký Bắt buộc (CRS) là một chương trình đăng ký sản phẩm
        BIS được khởi động năm 2012 và chủ yếu tập trung vào sản phẩm điện tử.
        Trong những năm qua, khi nhiều sản phẩm được phát hành, CRS đã được mở
        rộng để bao gồm nhiều danh mục sản phẩm hơn, bao gồm các sản phẩm điện
        như thiết bị gia dụng, thiết bị năng lượng mặt trời, pin và hơn nữa.
        Đăng ký CRS là bắt buộc đối với các sản phẩm được chỉ định dưới Lệnh
        Kiểm soát Chất lượng (QCO) do các bộ khác nhau ban hành.
      </p>

      <p className="service-left-content-paragraph">
        Bất kỳ sản phẩm nào thuộc chương trình CRS bắt buộc phải được bán, nhập
        khẩu hoặc phân phối ở Ấn Độ chỉ sau khi có được đăng ký với BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Lịch Sử Chứng Nhận CRS Tại Ấn Độ
      </h3>

      <p className="service-left-content-paragraph">
        Vào năm 2012, QCO đầu tiên dưới chương trình CRS được phát hành và tập
        trung vào thiết bị điện tử và CNTT. Kể từ đó, các QCO bổ sung đã được
        ban hành trong các lĩnh vực sau:
      </p>

      <PointsListWithoutHeading
        points={[
          "Điện Tử Tiêu Dùng",
          "Đèn & Đèn LED",
          "Pin & Pin",
          "Thiết Bị Truyền Thông Không Dây",
          "Tấm Năng Lượng Mặt Trời Và Linh Kiện",
          "Thiết Bị Điện Gia Dụng",
        ]}
      />

      <p className="service-left-content-paragraph">
        Danh sách Chứng nhận CRS đang mở rộng nhanh chóng, vì vậy các nhà sản
        xuất rất cần chủ động và nhận thức được các cập nhật gần đây.
      </p>

      <h2 className="service-left-content-heading-three">
        Đăng Ký CRS vs Dấu ISI: Sự Khác Biệt Là Gì?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Tính Năng
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Đăng Ký CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  Dấu ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Bản Chất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Bắt buộc (chỉ cho sản phẩm được liệt kê trong QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Tự nguyện hoặc Bắt buộc (tùy thuộc vào sản phẩm)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phạm Vi Sản Phẩm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Điện tử, CNTT, Điện, Pin, v.v.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Thực phẩm, xi măng, thép, điện, v.v.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Đơn Đăng Ký
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Trực tuyến, Cổng BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Thủ công + Trực tuyến, Hệ thống BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Linh Hoạt
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Chỉ cho hàng hóa được QCO bao phủ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Có thể tự nguyện cho hàng hóa không phải QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Dán Nhãn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Yêu cầu logo BIS CRS và số đăng ký
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Yêu cầu logo ISI với mã tiêu chuẩn
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        Tại Sao Bạn Cần Biết Khung BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        Nếu bạn là nhà sản xuất ở Ấn Độ hoặc một công ty nước ngoài đang cố gắng
        gia nhập thị trường Ấn Độ, biết các bước BIS CRS là điều bắt buộc. Nó
        giúp bạn:
      </p>

      <PointsListWithoutHeading
        points={[
          "Tránh phạt vì không tuân thủ.",
          "Chuẩn bị lịch trình sản xuất (tính đến thời gian kiểm tra phòng thí nghiệm).",
          "Tạo điều kiện xử lý hải quan dễ dàng hơn.",
          "Giành được lòng tin thương hiệu lâu dài của khách hàng Ấn Độ.",
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
        <span className="service-left-content-index-heading">Đủ điều kiện</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Tiêu Chí Đủ Điều Kiện Cho Đăng Ký BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        Ai Có Thể Đăng Ký Chứng Nhận BIS Theo CRS?
      </p>

      <p className="service-left-content-paragraph">
        Ở Ấn Độ, giấy chứng nhận BIS dưới Chương trình Đăng ký Bắt buộc (CRS)
        chỉ có thể được cấp cho các nhà sản xuất đáp ứng các yêu cầu do Bureau
        of Indian Standards đưa ra. Điều này đảm bảo chỉ các nhà sản xuất xác
        thực mới có đặc quyền đăng ký cũng như dán logo BIS CRS trên sản phẩm
        của họ.
      </p>

      <div className="service-left-content-heading-three">
        Danh Sách Kiểm Tra Tiêu Chí Đủ Điều Kiện
      </div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Yêu Cầu
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Mô Tả
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Người Nộp Đơn Phải Là Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Chỉ nhà sản xuất gốc (không phải người buôn bán hoặc người bán
                  lại) của sản phẩm mới đủ điều kiện đăng ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Vị Trí Có Thể Là Ấn Độ Hoặc Nước Ngoài
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Cả nhà sản xuất Ấn Độ và thương hiệu quốc tế đều có thể đăng
                  ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (Đại Diện Ấn Độ Được Ủy Quyền)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Nhà sản xuất nước ngoài phải bổ nhiệm một AIR — có thể là chi
                  nhánh Ấn Độ của họ hoặc bên thứ ba được ủy quyền chính thức.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Kiểm Tra Từ Phòng Thí Nghiệm Được BIS Phê Duyệt
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Sản phẩm phải được kiểm tra tại phòng thí nghiệm được BIS công
                  nhận và đáp ứng Tiêu chuẩn Ấn Độ (IS) áp dụng.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tài Liệu Đúng Cách
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Tất cả các tài liệu bắt buộc phải được gửi theo định dạng quy
                  định (chi tiết trong phần tiếp theo).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Một Đăng Ký Cho Mỗi Thương Hiệu & Vị Trí
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải nộp đơn riêng cho mỗi loại sản phẩm, vị trí sản xuất và
                  tên thương hiệu.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Ai Là Đại Diện Ấn Độ Được Ủy Quyền (AIR)?
      </h2>

      <p className="service-left-content-paragraph">
        Đối với các nhà sản xuất nước ngoài, một trong những nghĩa vụ là bổ
        nhiệm một Đại diện Ấn Độ được Ủy quyền (AIR) để giao tiếp và đại diện
        tại Ấn Độ.
      </p>

      <div className="service-left-content-heading-three">
        Trách Nhiệm Của AIR:
      </div>

      <PointsListWithoutHeading
        points={[
          "Hoạt động như đại diện pháp lý cho người nộp đơn nước ngoài",
          "Giao tiếp và quản lý tất cả nghĩa vụ với BIS thay mặt cho nhà sản xuất",
          "Chịu trách nhiệm pháp lý về tuân thủ và tài liệu",
          "Không thể là đại lý hoặc nhà phân phối trừ khi được nhà sản xuất ủy quyền rõ ràng",
        ]}
      />

      <p className="service-left-content-paragraph">
        Như một phần của thỏa thuận, AIR phải nộp thỏa thuận đã ký từ cả hai bên
        cùng với bằng chứng địa chỉ Ấn Độ.
      </p>

      <div className="service-left-content-heading-three">
        Tình Huống Thực Tế:
      </div>

      <p className="service-left-content-paragraph">
        Công ty ABC đang lên kế hoạch giới thiệu một mẫu pin dự phòng mới tại Ấn
        Độ.
      </p>

      <PointsListWithoutHeading
        points={[
          "Công ty ABC là nhà sản xuất.",
          "Họ đã kiểm tra sản phẩm tại một trong các phòng thí nghiệm được BIS công nhận ở Ấn Độ.",
          "Văn phòng chi nhánh ở Delhi của họ phục vụ như AIR đã đăng ký.",
          "Họ tải đơn đăng ký lên cổng BIS cùng với tài liệu cần thiết.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Kết quả là giấy chứng nhận BIS được cấp theo CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tài liệu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Tài Liệu Cần Thiết Cho Đăng Ký BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Danh sách tài liệu cần thiết để có được đăng ký BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Điền đơn đăng ký BIS CRS hoàn toàn bằng kỹ thuật số, tuy nhiên, nó vẫn
        yêu cầu tài liệu hoàn chỉnh để có được sự phê duyệt. Mọi sai sót nhỏ và
        việc không tuân thủ bất kỳ khía cạnh nào, chẳng hạn như loại tài liệu,
        định dạng không đúng, hoặc loại tệp sai có thể khiến đơn bị từ chối hoặc
        trì hoãn.
      </p>

      <p className="service-left-content-paragraph">
        Để xử lý tài liệu BIS đúng cách và nhanh hơn, cần có tài liệu phù hợp
        với bạn ở mỗi bước. Có tài liệu phù hợp sẵn sàng đảm bảo rằng chứng chỉ
        BIS của bạn được xử lý đúng thời hạn và tuân thủ pháp lý khỏi bất kỳ
        cuộc kiểm tra tuân thủ nào, kiểm tra hải quan, hoặc phê duyệt thị
        trường.
      </p>

      <div className="service-left-content-heading-three">
        Danh Sách Kiểm Tra Tài Liệu Cho Đăng Ký BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Tài Liệu
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Ai Nộp?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Ghi Chú
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Bằng Chứng Địa Chỉ Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Hợp đồng thuê nhà máy, hóa đơn tiện ích, hoặc giấy phép
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Kiểm Tra Từ Phòng Thí Nghiệm Được BIS Phê Duyệt
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất/Phòng Thí Nghiệm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải gần đây (trong vòng 90 ngày) và tham chiếu mã IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Cam Kết (Theo Định Dạng BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Người Nộp Đơn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bao gồm trách nhiệm pháp lý, tuân thủ, và trách nhiệm sản phẩm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Giấy Chứng Nhận Nhãn Hiệu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Yêu cầu nếu thương hiệu đã được đăng ký
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thỏa Thuận AIR (Cho người nộp đơn nước ngoài)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất Nước Ngoài & AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Đã ký và được công chứng
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Bản Tuyên Thệ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất hoặc AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Định dạng có thể tải xuống từ cổng BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Biên Lai Phí
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Người Nộp Đơn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bằng chứng thanh toán phí chính phủ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thư Ủy Quyền
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Ủy quyền AIR thay mặt họ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Giấy Chứng Nhận Đăng Ký Công Ty
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bằng chứng đăng ký kinh doanh (GST, ROC, v.v.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn/Sản Phẩm Đánh Dấu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Nhà Sản Xuất
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải hiển thị logo BIS, tiêu chuẩn IS, và khoảng đăng ký
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
          Quy Trình Đăng Ký
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Quy Trình Đăng Ký BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        Đăng ký BIS CRS là một quy trình hoàn toàn trực tuyến thông qua Cổng
        Đăng ký BIS. Nó không chỉ bao gồm các thủ tục tải lên tài liệu. Nó cũng
        yêu cầu sự chú ý đặc biệt về bản chất kỹ thuật, hiểu biết về các quy
        định, cũng như tuân thủ hoàn toàn Tiêu chuẩn Ấn Độ (IS).
      </p>

      <p className="service-left-content-paragraph">
        Quy Trình BIS CRS, chúng tôi gọi nó là Hệ Thống Chứng Nhận và Đăng Ký
        (CRS) hiện tại, và đây là cách hành trình Chứng nhận BIS diễn ra.
      </p>

      <div className="service-left-content-heading-three">
        Bước 1: Kiểm Tra Sản Phẩm Tại Phòng Thí Nghiệm Được BIS Ủy Quyền
      </div>

      <PointsListWithoutHeading
        points={[
          "Chọn một phòng thí nghiệm từ danh sách được BIS phê duyệt",
          "Nộp mẫu sản phẩm mà kiểm tra sẽ được thực hiện cho IS liên quan",
          "Nhận báo cáo kiểm tra cho mẫu theo định dạng báo cáo kiểm tra BIS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 2: Chuẩn Bị Tài Liệu
      </div>

      <PointsListWithoutHeading
        points={[
          "Thu thập các tài liệu cần thiết, như đã được nêu",
          "Đảm bảo tài liệu được đặt tên, định dạng, ký tên và ghi ngày tháng đúng cách",
          "Tạo nhãn sản phẩm là một nhãn dán giả chứa khoảng trống cho logo BIS và khoảng trống cho tiêu chuẩn IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 3: Điền Đơn Đăng Ký Trực Tuyến
      </div>

      <PointsListWithoutHeading
        points={[
          "Đi đến Cổng BIS CRS (https://www.bis.org.in/) và đăng nhập hoặc đăng ký",
          "Hoàn thành sản phẩm, số model, thương hiệu, và đơn vị sản xuất của AIR, nếu cần",
          "Làm theo các bước thanh toán phí Chính phủ",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 4: Xem Xét Đơn Đăng Ký BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS kiểm tra tài liệu hỗ trợ và báo cáo phòng thí nghiệm",
          "Nếu cần, một yêu cầu làm rõ được đưa ra thông qua cổng",
          "Trả lời với tài liệu đúng hoặc giải thích logic",
        ]}
      />

      <p className="service-left-content-paragraph">
        Nếu đó là câu hỏi làm rõ, nó phải được trả lời trong vòng 30 ngày, hoặc
        đơn sẽ đi vào kho lưu trữ, có nghĩa là bị từ chối.
      </p>

      <div className="service-left-content-heading-three">
        Bước 5: Cấp Giấy Đăng Ký BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Giấy chứng nhận BIS sẽ được cấp nếu các quan chức BIS hài lòng với kết quả của các đánh giá họ thực hiện",
        ]}
      />

      <p className="service-left-content-paragraph">
        Chứng chỉ của bạn sẽ bao gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Số đăng ký BIS",
          "Tên thương hiệu",
          "Model của sản phẩm",
          "Mã Tiêu Chuẩn IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "Nhãn sản phẩm của bạn phải chứa hoặc có e-labelling chi tiết chứng chỉ.",
        ]}
      />

      <div className="service-left-content-heading-three">
        Bước 6: Dán Nhãn Và Phân Phối
      </div>

      <PointsListWithoutHeading
        points={[
          "Sản phẩm được chứng nhận BIS phải mang:",
          "Logo BIS CRS",
          "Mã IS liên quan đến sản phẩm",
          "Số đăng ký BIS",
          "Số đăng ký và logo BIS phải được in hoặc nhúng số theo quy định BIS.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Thời Gian Dự Kiến</h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Hoạt Động
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Thời Gian Dự Kiến
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Kiểm Tra Sản Phẩm
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  7-10 ngày làm việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thu Thập Tài Liệu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-3 ngày
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nộp Đơn Đăng Ký
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  1 ngày
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Xem Xét BIS + Giải Quyết Truy Vấn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  10-15 ngày làm việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Cấp Chứng Chỉ Cuối Cùng
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-4 ngày làm việc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  TỔNG CỘNG
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                  ~4 tuần
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
        <span className="service-left-content-index-heading">Phí Đăng Ký</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Phí Đăng Ký BIS CRS, Hiệu Lực & Hướng Dẫn Gia Hạn
      </h2>

      <p className="service-left-content-paragraph">
        Để có được chứng chỉ BIS dưới CRS, người đăng ký phải trả phí chính phủ
        cũng như khoản thanh toán cho sản phẩm cần kiểm tra. Mặc dù quy trình là
        trực tuyến và giao diện được tối ưu hóa, nhiều người đăng ký vẫn gặp
        chậm trễ trong yêu cầu của họ và bị từ chối do thanh toán thiếu và đơn
        đăng ký nộp sai.
      </p>

      <h3 className="service-left-content-heading-three">
        Cơ Cấu Phí Cho Đăng Ký CRS
      </h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Loại Phí
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Số Tiền
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Chính Phủ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% GST mỗi báo cáo kiểm tra
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Kiểm Tra
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹10.000 – ₹20.000 + 18% GST (thay đổi tùy theo sản phẩm/phòng
                  thí nghiệm)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Báo Cáo Bổ Sung Trong Cùng Đơn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹20.000 + 18% GST mỗi báo cáo
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Phí Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          Giá có thể được cập nhật — xác nhận trên cổng BIS hoặc với cố vấn của
          bạn.
        </em>
      </p>

      <h3 className="service-left-content-heading-three">
        Hiệu Lực & Gia Hạn Chứng Chỉ CRS
      </h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Tham Số
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Chi Tiết
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Hiệu Lực Ban Đầu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2 Năm
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Thời Hạn Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Lên đến 5 năm (nếu không có thay đổi sản phẩm)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Quy Trình Gia Hạn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Trực tuyến, dựa trên tờ khai tuyên thệ mới + phí gia hạn
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Kiểm Tra Lại Cần Thiết?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Không, trừ khi thông số kỹ thuật sản phẩm/tiêu chuẩn IS thay
                  đổi
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
        <span className="service-left-content-index-heading">E-Labelling</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">
        Hướng Dẫn E-Labelling Cho Sản Phẩm Được Chứng Nhận CRS
      </div>

      <div className="service-left-content-heading-three">
        E-Labelling Là Gì?
      </div>

      <p className="service-left-content-paragraph">
        E-Labelling là việc hiển thị thông tin tuân thủ bên trong thiết bị bằng
        điện tử thay vì in và dán trên thiết bị. Dưới Chương Trình Đăng Ký Bắt
        Buộc (CRS) của BIS, các sản phẩm được chỉ định, đặc biệt là thiết bị nhỏ
        gọn hoặc kỹ thuật số, có thể hiển thị chi tiết chứng chỉ BIS, nhãn hiệu
        tiêu chuẩn và mã IS thông qua giao diện phần mềm hoặc bao bì kỹ thuật
        số.
      </p>

      <div className="service-left-content-heading-three">
        Hướng Dẫn BIS Về E-Labelling: E-Labelling Điện Tử (BIS CMD 3/8:1/6975.
        Ngày 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">
        Yêu Cầu Đối Với E-Labelling:
      </h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Quy Tắc
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Mô Tả
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn Vật Lý Trên Bao Bì
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Hộp sản phẩm hoặc bao bì bên ngoài phải hiển thị Logo BIS CRS
                  và chi tiết đăng ký.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Nhãn Dán Có Thể Gỡ Cho Bao Bì Số Lượng Lớn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Nếu sản phẩm được vận chuyển với số lượng lớn, nhãn dán có thể
                  gỡ trên bao bì bên ngoài được chấp nhận.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Không Yêu Cầu Công Cụ Để Truy Cập
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Người dùng phải có thể truy cập thông tin nhãn e mà không cần
                  công cụ hoặc phụ kiện (ví dụ: không cho phép tháo thẻ SIM).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Lập Trình An Toàn
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Thông tin nhãn e phải được nhúng vào firmware/phần mềm, khóa
                  chống thay đổi bởi bất kỳ bên thứ ba nào.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Truy Cập Theo Menu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Người dùng phải truy cập thông tin trong không quá 4 bước
                  thông qua giao diện menu của thiết bị.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Hướng Dẫn Yêu Cầu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Phải cung cấp hướng dẫn về cách truy cập chi tiết nhãn e.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        Cách Sun Certifications India Có Thể Giúp Bạn Đăng Ký BIS Dưới Chương
        Trình CRS
      </p>

      <div className="service-left-content-heading-three">
        Tại Sao Chọn Cố Vấn BIS?
      </div>

      <p className="service-left-content-paragraph">
        Toàn bộ đăng ký BIS CRS rất kỹ thuật và toàn diện về quy tắc và khối
        lượng tài liệu. Thiếu sự hiểu biết thấu đáo về Tiêu Chuẩn Ấn Độ, các QCO
        gần đây, cấu trúc của báo cáo kiểm tra và quy trình làm việc trong giao
        diện cổng, người đăng ký có nguy cơ mất đáng kể về các hành động tiếp
        theo như chậm trễ, bị từ chối hoặc không tuân thủ kéo dài. Đây là nơi
        Sun Certifications India xuất hiện với một đối tác uy tín và đáng tin
        cậy để hỗ trợ người đăng ký trong mọi chi tiết của chương trình chứng
        nhận bắt buộc.
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
