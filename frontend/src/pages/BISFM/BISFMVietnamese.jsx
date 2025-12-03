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
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMVietnamese = () => {
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
      <FooterVietnamese />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMVietnamese;

const MetaTags = () => {
  const title =
    "Chứng nhận BIS FMCS | Chương trình Chứng nhận Nhà sản xuất Nước ngoài | Sun Certifications";
  const description =
    "Dịch vụ chứng nhận BIS FMCS chuyên nghiệp cho nhà sản xuất nước ngoài. Nhận chứng nhận Dấu ISI để xuất khẩu sang Ấn Độ. Chứng nhận BIS đáng tin cậy từ năm 2013. ✓ Xử lý nhanh ✓ Hướng dẫn chuyên gia";
  const keywords =
    "Chứng chỉ BIS cho nhà sản xuất nước ngoài, Giấy phép BIS, Dấu ISI";
  const canonicalUrl =
    "https://bis-certifications.com/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "Chứng nhận BIS FMCS | Chương trình Chứng nhận Nhà sản xuất Nước ngoài";
  const ogDescription =
    "Dịch vụ chứng nhận BIS FMCS chuyên nghiệp cho nhà sản xuất nước ngoài. Nhận chứng nhận Dấu ISI để xuất khẩu sang Ấn Độ. ✓ Xử lý nhanh ✓ Hướng dẫn chuyên gia";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dấu BIS (Giấy phép ISI) cho Nhà sản xuất Nước ngoài",
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
                    <Link to="/">Trang chủ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Dấu BIS (Giấy phép ISI) cho Nhà sản xuất Nước ngoài
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
              Chuyên môn được chứng nhận
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Chứng nhận BIS Ấn Độ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            cho nhà sản xuất nước ngoài
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Nhà sản xuất nước ngoài cần dấu ISI để xuất khẩu sang Ấn Độ. Bao gồm
            hơn 600 sản phẩm bắt buộc và hơn 20.000 sản phẩm tự nguyện.
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
                Xem Dịch vụ
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

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do"
      )
    )
      return "BISFM Vietnamese Page";
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
        title: "Vui lòng nhập tên đầy đủ hợp lệ.",
        description: "Tên chỉ được chứa chữ cái và khoảng trắng.",
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
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
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
          Liên hệ với chúng tôi
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Đặt lịch hẹn
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Bạn muốn liên hệ với đội ngũ của chúng tôi và đặt lịch gọi?
        <span className="text-black"> Thử ngay</span>
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
            placeholder="Họ và Tên *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Địa chỉ Email *"
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
    overview: "Tổng quan",
    standardization: "Tiêu chuẩn hóa",
    representation: "Đại diện",
    document: "Tài liệu",
    process: "Quy trình",
    costing: "Chi phí",
    surveillance: "Giám sát",
    facilitator: "Người hỗ trợ",
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
        <ServicesRightSideContentVietnamese />
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
            Thông tin đầy đủ về chứng nhận BIS Ấn Độ theo Chương trình FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            BIS Ấn Độ là gì?
          </h2>

          <p className="service-left-content-paragraph">
            Cục Tiêu chuẩn Ấn Độ (BIS) là cơ quan tiêu chuẩn quốc gia của Ấn Độ
            thuộc Bộ Tiêu dùng, Thực phẩm và Phân phối Công cộng. Được thành lập
            theo Đạo luật BIS năm 1986 và được sửa đổi vào năm 2016, BIS đóng
            vai trò quan trọng trong việc tiêu chuẩn hóa, đánh dấu và chứng nhận
            chất lượng hàng hóa. Nó nhằm đảm bảo chất lượng, an toàn và độ tin
            cậy của các sản phẩm được cung cấp cho người tiêu dùng Ấn Độ.
          </p>

          <p className="service-left-content-paragraph">
            BIS hoạt động thông qua các chương trình khác nhau bao gồm chứng
            nhận sản phẩm, đánh dấu cho đồ trang sức, dịch vụ kiểm tra và chương
            trình đào tạo. Tuy nhiên, một trong những khuôn khổ có ý nghĩa quốc
            tế nhất của nó là Chương trình Chứng nhận Nhà sản xuất Nước ngoài
            (FMCS).
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
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tổng quan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Chứng chỉ BIS theo FMCS là gì?
      </h2>

      <p className="service-left-content-paragraph">
        Được giới thiệu vào năm 2000, FMCS là một cơ chế mà các nhà sản xuất
        nước ngoài có thể được cấp giấy phép BIS để sử dụng dấu ISI trên sản
        phẩm của họ, cho thấy sự phù hợp với tiêu chuẩn Ấn Độ. Quy trình chứng
        nhận FMCS cho phép các thực thể ở nước ngoài bán hợp pháp sản phẩm của
        họ tại Ấn Độ mà không cần thành lập đơn vị sản xuất địa phương.
      </p>

      <p className="service-left-content-paragraph">
        Tính đến nay, hơn 1.650 nhà sản xuất nước ngoài đang hoạt động tại Ấn Độ
        theo hệ thống chứng nhận BIS thông qua FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Tại sao Chứng nhận BIS là Quan trọng?
      </h2>

      <p className="service-left-content-paragraph">
        Việc có được chứng chỉ BIS không chỉ là yêu cầu pháp lý—nó là cánh cửa
        dẫn đến thị trường tiêu dùng rộng lớn của Ấn Độ. Dưới đây là một số lý
        do chính tại sao nó là cần thiết:
      </p>

      <PointsListWithoutHeading
        points={[
          "Tuân thủ Pháp lý: Sản phẩm phải tuân thủ các tiêu chuẩn Ấn Độ liên quan.",
          "Uy tín Thương hiệu: Dấu ISI phục vụ như bằng chứng về chất lượng và tăng cường niềm tin của người tiêu dùng.",
          "Thông quan Hải quan: Không có giấy phép BIS hợp lệ, sản phẩm có thể bị từ chối tại hải quan.",
          "Tiếp cận Thị trường: Giúp các thương hiệu nước ngoài có được sự tiếp cận liền mạch và chấp nhận rộng rãi tại Ấn Độ.",
          "Giảm thiểu Rủi ro: Đảm bảo rằng sản phẩm an toàn, do đó tránh các vấn đề thu hồi và trách nhiệm pháp lý tiềm ẩn.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Phạm vi Sản phẩm được Bao gồm trong BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS đã liệt kê hơn 600 sản phẩm dưới chứng nhận bắt buộc, và hơn 20.000
        mặt hàng đủ điều kiện cho chứng chỉ BIS tự nguyện. Những sản phẩm này
        bao gồm nhiều ngành công nghiệp:
      </p>

      <PointsListWithoutHeading
        points={[
          "Điện tử & Phần cứng IT",
          "Phụ tùng Ô tô",
          "Thiết bị Gia dụng",
          "Sản phẩm Thép",
          "Xi măng và Vật liệu xây dựng v.v.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Danh sách ngày càng tăng cho thấy phạm vi và tầm quan trọng ngày càng
        tăng của chứng chỉ BIS trong thương mại toàn cầu.
      </p>

      <h2 className="service-left-content-heading-three">
        Mục tiêu hoặc lợi ích của Chứng nhận BIS cho Nhà sản xuất Nước ngoài
        theo FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Chế độ FMCS và chứng chỉ BIS nhằm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Việc sử dụng dấu ISI mà không có giấy phép BIS hợp lệ sẽ bị pháp luật trừng phạt.",
          "Sản phẩm được chứng nhận phải hiển thị cả logo ISI và số CM/L (Giấy chứng nhận Giấy phép Sản xuất).",
          "Người vi phạm có thể phải đối mặt với lệnh cấm sản phẩm, tiền phạt hoặc thậm chí là truy tố hình sự.",
          "Xây dựng niềm tin giữa người tiêu dùng và thương hiệu nhập khẩu.",
          "Tạo điều kiện cho thương mại công bằng và sân chơi bình đẳng.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Tính năng Chính của Chứng chỉ BIS cho nhà sản xuất nước ngoài
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                TÍNH NĂNG
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                MÔ TẢ
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Khả năng áp dụng
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Chỉ dành cho nhà sản xuất nước ngoài
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Đánh dấu
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dấu ISI + số CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Yêu cầu Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kiểm tra nhà máy bắt buộc
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Được thực hiện tại các phòng thí nghiệm Ấn Độ được BIS phê duyệt
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hiệu lực
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Giấy phép BIS có hiệu lực trong 1-2 năm
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gia hạn
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Yêu cầu khi hết hạn hoặc cập nhật sản phẩm
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Đại diện Ấn Độ được Ủy quyền)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Phải được bổ nhiệm để liên hệ với BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bảo lãnh Ngân hàng Hiệu suất
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Yêu cầu từ ngân hàng Ấn Độ được RBI phê duyệt
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
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Tiêu chuẩn hóa
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Ấn Độ là gì và Tại sao Nó Quan trọng?
      </h2>

      <p className="service-left-content-paragraph">
        BIS Ấn Độ là dấu hiệu của chất lượng và an toàn được cấp bởi Cục Tiêu
        chuẩn Ấn Độ (BIS). Ngày nay, dấu ISI được sử dụng độc quyền để chỉ định
        các sản phẩm tuân thủ tiêu chuẩn Ấn Độ theo chương trình chứng nhận BIS
        chính thức.
      </p>

      <p className="service-left-content-paragraph">
        Để một sản phẩm mang dấu BIS Ấn Độ hoặc ISI, nó phải trải qua quy trình
        chứng nhận BIS nghiêm ngặt, bao gồm kiểm tra phòng thí nghiệm, kiểm tra
        nhà máy, kiểm tra tài liệu và kiểm tra tuân thủ với các hướng dẫn BIS Ấn
        Độ.
      </p>

      <p className="service-left-content-paragraph">
        Tư cách Pháp lý của chứng nhận BIS tại Ấn Độ
      </p>

      <p className="service-left-content-paragraph">
        Giấy phép BIS không chỉ là công cụ tiếp thị—nó là yêu cầu pháp lý cho
        tất cả các sản phẩm thuộc chương trình chứng nhận BIS bắt buộc.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Theo Đạo luật BIS, 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Việc sử dụng dấu ISI mà không có giấy phép BIS hợp lệ sẽ bị pháp luật trừng phạt.",
          "Sản phẩm được chứng nhận phải hiển thị cả logo ISI và số CM/L (Giấy chứng nhận Giấy phép Sản xuất).",
          "Người vi phạm có thể phải đối mặt với lệnh cấm sản phẩm, tiền phạt hoặc thậm chí là truy tố hình sự.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="ISI Mark logo"
        title="ISI Mark logo"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Logo ISI thường bao gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          'Các chữ cái cách điệu "ISI" bên trong hình chữ nhật có góc bo tròn',
          "Số CM/L được hiển thị bên dưới hoặc bên cạnh dấu",
          "Số mã tiêu chuẩn Ấn Độ tham chiếu (ví dụ: IS 302 cho thiết bị điện)",
        ]}
      />

      <p className="service-left-content-heading-three">Vị trí đặt phải là:</p>

      <PointsListWithoutHeading
        points={[
          "Vĩnh viễn và rõ ràng trên sản phẩm",
          "Trên bao bì nếu không thể đặt trên sản phẩm",
          "Trên sách hướng dẫn sử dụng trong một số danh mục sản phẩm",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Danh mục Sản phẩm Yêu cầu Chứng chỉ BIS
      </h2>

      <p className="service-left-content-paragraph">
        Hơn 600 sản phẩm yêu cầu dấu ISI theo chương trình đăng ký bắt buộc tại
        Ấn Độ. Ví dụ bao gồm:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                DANH MỤC SẢN PHẨM
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MÃ IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                TRẠNG THÁI
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Thiết bị Điện
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bắt buộc
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Thép & Sắt
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bắt buộc
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hộp đựng Thực phẩm
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bắt buộc
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Mũ bảo hiểm
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bắt buộc
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Xi măng
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bắt buộc
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Mỗi danh mục yêu cầu tuân thủ tiêu chuẩn Ấn Độ tương ứng, được kiểm tra
        trong quá trình chứng nhận BIS, danh sách đầy đủ các sản phẩm có thể
        được truy cập bằng{" "}
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
          Nhấp vào đây
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS Ấn Độ so với Các Chứng nhận Toàn cầu Khác
      </h2>

      <p className="service-left-content-paragraph">
        Hãy so sánh dấu ISI với các biểu tượng quốc tế khác:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                DẤU
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                QUỐC GIA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                BẮT BUỘC?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                TRỌNG TÂM
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ấn Độ
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Có
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                An toàn và chất lượng sản phẩm
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
                Có (cho các danh mục cụ thể)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sức khỏe, an toàn, môi trường
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hoa Kỳ
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Không
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tiêu chuẩn an toàn (tự nguyện)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Trung Quốc
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Có
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                An toàn hàng điện
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Không giống như UL (tự nguyện) hoặc CE (theo khu vực), dấu ISI theo
        chương trình đăng ký BIS vừa bắt buộc vừa được thực thi tại địa phương.
      </p>

      <h2 className="service-left-content-heading-three">
        Chứng nhận BIS hoặc Giấy phép BIS có Bắt buộc cho Nhập khẩu vào Ấn Độ
        không?
      </h2>

      <p className="service-left-content-paragraph">
        Bản chất Bắt buộc của Chứng chỉ BIS
      </p>

      <p className="service-left-content-paragraph">
        Chính phủ Ấn Độ đã làm cho việc chứng nhận bởi Cục Tiêu chuẩn Ấn Độ
        (BIS) trở thành bắt buộc đối với một số sản phẩm nhất định trước khi
        chúng có thể được nhập khẩu, bán hoặc phân phối trên thị trường Ấn Độ.
        Nghĩa vụ này xuất phát từ:
      </p>

      <PointsListWithoutHeading
        points={[
          "Mục tiêu bảo vệ người tiêu dùng",
          "Hài hòa với tiêu chuẩn Ấn Độ",
          "Quy định an toàn quốc gia",
        ]}
      />

      <p className="service-left-content-paragraph">
        Nếu một sản phẩm thuộc yêu cầu bắt buộc của BIS Ấn Độ, nó phải có chứng
        chỉ BIS và mang dấu ISI trước khi có thể thông quan hải quan Ấn Độ.
      </p>

      <h2 className="service-left-content-heading-three">
        Chứng nhận BIS có Chỉ Yêu cầu cho Nhập khẩu không?
      </h2>

      <p className="service-left-content-paragraph">
        Không. Chứng nhận BIS là bắt buộc cho:
      </p>

      <PointsListWithoutHeading
        points={[
          "Nhà sản xuất trong nước sản xuất sản phẩm được quy định",
          "Nhà sản xuất nước ngoài xuất khẩu sản phẩm được quy định sang Ấn Độ",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dù bạn ở Ấn Độ hay nước ngoài, nếu sản phẩm của bạn nằm trong danh sách
        bắt buộc, nó phải có giấy phép BIS và có dấu ISI.
      </p>

      <p className="service-left-content-paragraph">
        Hải quan Ấn Độ hiện sử dụng hệ thống dữ liệu tiên tiến để tự động đánh
        dấu các lô hàng không tuân thủ. Tất cả hàng hóa thuộc các danh mục được
        quy định đều được quét để kiểm tra sự hiện diện của chứng chỉ BIS hợp
        lệ.
      </p>

      <p className="service-left-content-paragraph">
        Miễn trừ khỏi Chứng nhận BIS
      </p>

      <p className="service-left-content-paragraph">
        Chứng nhận BIS là bắt buộc trong hầu hết các trường hợp, nhưng có thể
        được miễn trừ trong các tình huống cụ thể:
      </p>

      <PointsListWithoutHeading
        points={[
          "Cho nguyên mẫu R&D hoặc kiểm tra mẫu",
          "Cho nhập khẩu cá nhân số lượng hạn chế",
        ]}
      />

      <p className="service-left-content-paragraph">
        Tuy nhiên, những trường hợp này rất hiếm và yêu cầu thư miễn trừ chính
        thức từ BIS hoặc các bộ liên quan.
      </p>

      <h2 className="service-left-content-heading-three">
        Làm thế nào để Biết Sản phẩm của Bạn có Cần Chứng chỉ BIS hoặc Giấy phép
        BIS không?
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
          Nhấp vào đây
        </span>
        Nhấp vào đây để kiểm tra xem sản phẩm của bạn có được bao gồm trong
        chương trình chứng nhận BIS Ấn Độ bắt buộc không.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Đại diện</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Vai trò của Đại diện Ấn Độ được Ủy quyền (AIR) trong Chứng nhận BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        Đại diện Ấn Độ được Ủy quyền (AIR) là gì?
      </h3>

      <p className="service-left-content-paragraph">
        Đại diện Ấn Độ được Ủy quyền (AIR) là một trung gian quan trọng được bổ
        nhiệm bởi nhà sản xuất nước ngoài tìm kiếm chứng nhận BIS theo chương
        trình đăng ký FMCS. AIR phục vụ như liên hệ chính thức giữa Cục Tiêu
        chuẩn Ấn Độ (BIS) và nhà sản xuất, đảm bảo giao tiếp suôn sẻ, xử lý tài
        liệu và phối hợp quy trình chứng nhận.
      </p>

      <h3 className="service-left-content-heading-three">
        Yêu cầu Pháp lý cho Việc Bổ nhiệm AIR
      </h3>

      <p className="service-left-content-paragraph">
        Theo hướng dẫn BIS, bất kỳ nhà sản xuất nước ngoài nào không có văn
        phòng đăng ký tại Ấn Độ phải bổ nhiệm một AIR. Yêu cầu này đảm bảo rằng
        BIS có một điểm liên hệ đáng tin cậy, có thể tiếp cận trong phạm vi
        quyền tài phán Ấn Độ.
      </p>

      <h3 className="service-left-content-heading-three">
        Trách nhiệm Chính của AIR
      </h3>

      <p className="service-left-content-paragraph">
        Vai trò của AIR bao trùm toàn bộ quy trình chứng nhận BIS, từ tài liệu
        và nộp đơn đến phối hợp kiểm tra và tuân thủ sau chứng nhận:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Trách nhiệm
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Mô tả
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Giao tiếp
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hoạt động như điểm liên hệ với các cán bộ và phòng ban BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hỗ trợ Đơn đăng ký
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hỗ trợ điền biểu mẫu, biên soạn tài liệu và nộp đơn đăng ký
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phối hợp Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Phối hợp lịch kiểm tra nhà máy và giải đáp các câu hỏi của kiểm
                tra viên
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Giám sát Tuân thủ
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Đảm bảo tất cả các hoạt động kiểm tra và chứng nhận đáp ứng các
                quy chuẩn BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Quản lý Gia hạn
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Giám sát gia hạn giấy phép BIS, cập nhật tài liệu và thanh toán
                phí
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Tiêu chí Đủ điều kiện để Trở thành AIR
      </h3>

      <p className="service-left-content-paragraph">
        Để phục vụ như một AIR, một cá nhân hoặc tổ chức phải:
      </p>

      <PointsListWithoutHeading
        points={[
          "Là công dân Ấn Độ hoặc thực thể kinh doanh được đăng ký hợp pháp tại Ấn Độ",
          "Có địa chỉ thực tế tại Ấn Độ với mã bưu điện hợp lệ",
          "Có khả năng giao tiếp trôi chảy bằng tiếng Anh và ngôn ngữ địa phương",
          "Hiểu chương trình chứng nhận, giao thức tài liệu BIS và kỳ vọng quy định",
          "Có thể phản hồi các cuộc kiểm tra và thư từ kịp thời thay mặt nhà sản xuất nước ngoài",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Tại sao Vai trò AIR là Quan trọng
      </h3>

      <p className="service-left-content-paragraph">
        AIR đảm bảo tính liên tục và trách nhiệm trong suốt quy trình chứng nhận
        BIS. Không có AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS không có quyền tài phán để hành động chống lại nhà sản xuất nước ngoài không tuân thủ",
          "Các truy vấn nhạy cảm về thời gian và lịch kiểm tra có thể bị trì hoãn",
          "Quy trình chứng nhận có thể bị kẹt, thu hồi hoặc từ chối",
        ]}
      />

      <p className="service-left-content-paragraph">
        Một AIR chủ động và có kinh nghiệm làm tăng đáng kể cơ hội chứng nhận
        BIS thành công.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tài liệu</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Tài liệu Yêu cầu cho Chứng nhận BIS theo FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Loại Tài liệu
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Mục đích
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biểu mẫu Đăng ký FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Yêu cầu chính thức cho chứng nhận
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Danh sách Thiết bị Sản xuất
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Cho thấy khả năng sản xuất
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Danh sách Nguyên liệu Thô
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Đảm bảo chất lượng vật liệu đầu vào
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Danh sách Thiết bị Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Đánh giá sự sẵn sàng kiểm tra và tuân thủ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Chứng chỉ Hiệu chuẩn
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Chứng minh độ chính xác của thiết bị kiểm tra
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bố trí Nhà máy & Sơ đồ Quy trình
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Giúp kiểm tra viên hiểu các giai đoạn sản xuất
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Chứng chỉ Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Chứng minh chất lượng của nguyên liệu thô và sản phẩm cuối cùng
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hồ sơ Kiểm soát Chất lượng
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Xác minh trình độ nhân viên và SOP
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bằng chứng Thanh toán
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Xác thực việc nộp phí cho BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bảo lãnh Ngân hàng Hiệu suất
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hoạt động như đảm bảo tài chính cho BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Phân tích Chi tiết từng Tài liệu Yêu cầu cho Chứng nhận BIS Ấn Độ
      </h3>

      <div className="service-left-content-heading-three">
        1. Biểu mẫu Đăng ký FMCS
      </div>

      <p className="service-left-content-paragraph">
        Tài liệu này cung cấp thông tin chung về nhà sản xuất nước ngoài, bao
        gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Chi tiết sản phẩm (loại, danh mục, model)",
          "Tiêu chuẩn Ấn Độ dự định",
          "Chi tiết liên hệ của nhà máy và AIR",
          "Năng lực sản xuất và phạm vi kiểm tra",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Danh sách Thiết bị Sản xuất
      </div>

      <PointsListWithoutHeading
        points={[
          "Tên máy và nhà sản xuất",
          "Năng lực sản xuất",
          "Chi tiết liên hệ của nhà máy và AIR",
          "Hồ sơ bảo trì (nếu có)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Danh sách Nguyên liệu Thô
      </div>

      <PointsListWithoutHeading
        points={[
          "Nguồn mua sắm",
          "Cấp độ và thông số kỹ thuật",
          "Giao thức kiểm tra (nếu có)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Danh sách Thiết bị Kiểm tra
      </div>

      <PointsListWithoutHeading
        points={[
          "Tên thiết bị và nhà sản xuất",
          "Tuân thủ các thông số kiểm tra trong Tiêu chuẩn Ấn Độ",
          "Vị trí trong nhà máy",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Chứng chỉ Hiệu chuẩn
      </div>

      <PointsListWithoutHeading
        points={[
          "Ngày hiệu chuẩn cuối cùng",
          "Thời hạn hiệu lực",
          "Số chứng chỉ",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Bố trí Nhà máy & Sơ đồ Quy trình
      </div>

      <PointsListWithoutHeading
        points={[
          "Điểm vào và ra",
          "Khu vực phòng thí nghiệm kiểm tra",
          "Điểm kiểm tra QC",
          "Khu vực lưu trữ và đóng gói",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Bảo lãnh Ngân hàng Hiệu suất
      </div>

      <p className="service-left-content-paragraph">
        Được phát hành bởi ngân hàng Ấn Độ được RBI phê duyệt, Bảo lãnh Ngân
        hàng Hiệu suất (PBG) bao gồm trách nhiệm trong trường hợp không tuân
        thủ. Tài liệu này phải:
      </p>

      <PointsListWithoutHeading
        points={[
          "Được in trên tiêu đề ngân hàng chính thức",
          "Chỉ ra thời hạn và số tiền bảo lãnh",
          "Được ký và đóng dấu",
        ]}
      />

      <div className="service-left-content-heading-three">
        Các lỗi tài liệu phổ biến cần tránh khi đăng ký chứng chỉ BIS hoặc BIS
        Ấn Độ.
      </div>

      <PointsListWithoutHeading
        points={[
          "Không khớp giữa dữ liệu biểu mẫu và thực tế nhà máy",
          "Nộp báo cáo hiệu chuẩn đã hết hạn",
          "Thiếu bằng chứng phí BIS",
          "Quy trình không đầy đủ hoặc mơ hồ",
          "Sự không nhất quán về tên giữa các tài liệu",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Quy trình</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Quy trình Chứng nhận BIS Từng Bước theo FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Tổng quan về Hành trình Chứng nhận BIS
      </h3>

      <p className="service-left-content-paragraph">
        Quy trình chứng nhận BIS theo Chương trình Chứng nhận Nhà sản xuất Nước
        ngoài (FMCS) có phương pháp, có cấu trúc và nhiều giai đoạn. Nó đảm bảo
        rằng sản phẩm tuân thủ các tiêu chuẩn Ấn Độ áp dụng, quy trình sản xuất
        mạnh mẽ và kiểm tra chính xác.
      </p>

      <h3 className="service-left-content-heading-three">
        Bảng Tóm tắt Quy trình Giấy phép BIS Từng Bước
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Bước
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Mô tả
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nộp Đơn đăng ký cho BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kiểm tra Tài liệu và Xem xét Ban đầu
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Giải quyết Truy vấn & Nộp Làm rõ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bổ nhiệm Kiểm tra viên Kỹ thuật BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Lập lịch Kiểm tra Nhà máy & Phối hợp qua AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kiểm tra Nhà máy & Niêm phong Mẫu bởi Kiểm tra viên BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kiểm tra Sản phẩm Nội bộ (nếu áp dụng)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kiểm tra Mẫu Niêm phong tại Phòng thí nghiệm được BIS Phê duyệt
                ở Ấn Độ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Xem xét Báo cáo Kiểm tra & Phát hiện Kiểm tra
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Cấp Giấy phép BIS và Sử dụng Dấu ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="Mẫu chứng chỉ BIS cho FMCS"
        title="Mẫu chứng chỉ BIS cho FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Khung thời gian để Có được Chứng chỉ BIS
      </h3>

      <p className="service-left-content-heading-three">
        Thời gian Điển hình từ Đơn đăng ký đến Chứng chỉ
      </p>

      <p className="service-left-content-paragraph">
        Quy trình chứng nhận BIS theo FMCS thường mất khoảng 120 ngày làm việc
        (khoảng 3–4 tháng) từ ngày nộp đơn đăng ký đúng. Sự chậm trễ thường xảy
        ra khi tài liệu không rõ ràng hoặc nếu nhà máy chưa sẵn sàng cho kiểm
        tra.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Chi phí</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Cấu trúc Chi phí Chứng nhận BIS được Giải thích
      </h2>

      <h3 className="service-left-content-heading-three">
        Tổng quan về Chi phí Chứng nhận BIS
      </h3>

      <p className="service-left-content-paragraph">
        Việc có được chứng chỉ BIS theo Chương trình Chứng nhận Nhà sản xuất
        Nước ngoài (FMCS) liên quan đến nhiều loại chi phí. Những chi phí này
        bao gồm mọi thứ từ nộp đơn đăng ký và kiểm tra đến kiểm tra sản phẩm và
        sử dụng dấu.
      </p>

      <p className="service-left-content-paragraph">
        Nhà sản xuất nước ngoài phải lập ngân sách đầy đủ để đảm bảo thanh toán
        kịp thời, vì việc không thanh toán có thể dẫn đến việc từ chối chứng
        nhận BIS giữa chừng.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Danh mục Chi phí
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Mô tả
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phí Đăng ký (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Thanh toán khi nộp biểu mẫu đăng ký FMCS để có được BIS Ấn Độ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phí Kiểm tra (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bao gồm chi phí đi lại của kiểm tra viên BIS, tỷ lệ ngày công và
                các chi phí liên quan
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phí Kiểm tra Sản phẩm (Theo sản phẩm)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Để kiểm tra mẫu niêm phong tại các phòng thí nghiệm được BIS
                công nhận ở Ấn Độ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phí Giấy phép (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Phí một lần thanh toán khi cấp chứng chỉ BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phí Đánh dấu (Theo sản phẩm)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Phí hàng năm cho việc sử dụng dấu ISI trên sản phẩm được chứng
                nhận
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bảo lãnh Ngân hàng Hiệu suất (USD 10,000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Đảm bảo tài chính được gửi qua ngân hàng Ấn Độ để đảm bảo tuân
                thủ
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
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Giám sát</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Yêu cầu Giám sát và Tuân thủ Sau Chứng nhận BIS
      </h2>

      <p className="service-left-content-paragraph">
        Một khi chứng chỉ BIS được cấp, trách nhiệm không kết thúc ở đó. Chứng
        nhận BIS bao gồm một hệ thống giám sát và tuân thủ liên tục để đảm bảo
        tuân thủ liên tục các tiêu chuẩn Ấn Độ. Giai đoạn sau chứng nhận này rất
        quan trọng để duy trì giấy phép BIS của bạn, giữ quyền sử dụng dấu ISI
        và tránh các hình phạt pháp lý hoặc đình chỉ.
      </p>

      <p className="service-left-content-paragraph">
        Các Thành phần Giám sát Chính sau khi có được chứng chỉ BIS Giám sát Thị
        trường: Lấy mẫu sản phẩm ngẫu nhiên từ thị trường Ấn Độ để kiểm tra
        phòng thí nghiệm độc lập, nếu mẫu thất bại thì chứng chỉ BIS sẽ bị đình
        chỉ. Nó được thực hiện hai lần mỗi năm.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Người hỗ trợ</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Tại sao Chọn Tư vấn viên Chứng nhận BIS?
      </h2>

      <p className="service-left-content-paragraph">
        Chứng nhận BIS theo chương trình đăng ký FMCS phức tạp, có tính kỹ thuật
        cao và nhạy cảm về thời gian. Mặc dù có thể theo đuổi chứng nhận độc
        lập, hầu hết các nhà sản xuất nước ngoài thành công đều dựa vào các tư
        vấn viên BIS để đơn giản hóa hành trình và giảm thiểu rủi ro.
      </p>

      <h3 className="service-left-content-heading-three">
        Tư vấn viên BIS Làm gì?
      </h3>

      <p className="service-left-content-paragraph">
        Một tư vấn viên chứng nhận BIS cung cấp hướng dẫn từ đầu đến cuối trong
        mọi bước của quy trình. Trách nhiệm cốt lõi của họ bao gồm:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Nhiệm vụ
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Mô tả
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tài liệu
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Chuẩn bị, xem xét và định dạng tất cả tài liệu yêu cầu
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hỗ trợ Đơn đăng ký
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nộp và theo dõi đơn đăng ký BIS của bạn
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Chuẩn bị Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hướng dẫn các đội nhà máy để đảm bảo sẵn sàng cho kiểm tra
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Phối hợp Mẫu
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Quản lý việc niêm phong và vận chuyển mẫu đến Ấn Độ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Hỗ trợ Kiểm tra
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Liên hệ với các phòng thí nghiệm và giúp giải thích kết quả
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gia hạn & Giám sát
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Giám sát gia hạn giấy phép và kiểm tra tuân thủ
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Họ hoạt động như đối tác chiến lược của bạn, thường đóng vai trò kép như
        Đại diện Ấn Độ được Ủy quyền (AIR) của bạn.
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Chứng nhận BIS là gì và tại sao nó quan trọng đối với nhà sản xuất nước ngoài để có được BIS Ấn Độ?",
      answer:
        "Chứng nhận BIS là quy trình quy định được thực hiện bởi Cục Tiêu chuẩn Ấn Độ để đảm bảo sản phẩm đáp ứng các tiêu chuẩn Ấn Độ. Nó là cần thiết cho nhà sản xuất nước ngoài để có được quyền tiếp cận thị trường, thông quan hải quan và niềm tin của người tiêu dùng tại Ấn Độ.",
    },
    {
      question: "Dấu ISI đại diện cho điều gì?",
      answer:
        "Dấu ISI cho biết sự phù hợp với một Tiêu chuẩn Ấn Độ cụ thể. Nó là bắt buộc đối với các sản phẩm dưới chứng nhận BIS và phải được in trên bao bì và sản phẩm.",
    },
    {
      question:
        "Chứng nhận BIS có bắt buộc cho tất cả hàng nhập khẩu vào Ấn Độ không?",
      answer:
        "Không. Chứng nhận BIS là bắt buộc đối với các sản phẩm được liệt kê theo chương trình chứng nhận BIS Ấn Độ bắt buộc. Tuy nhiên, chứng nhận tự nguyện có sẵn cho các sản phẩm khác.",
    },
    {
      question: "Ai có thể đăng ký chứng nhận BIS theo FMCS?",
      answer:
        "Chỉ các nhà sản xuất nước ngoài thực tế (không phải nhà nhập khẩu hoặc thương nhân) mới có thể đăng ký. Đại diện Ấn Độ được Ủy quyền (AIR) là bắt buộc để đại diện cho họ tại Ấn Độ.",
    },
    {
      question: "Mất bao lâu để có được chứng chỉ BIS?",
      answer:
        "Quy trình chứng nhận BIS trung bình theo FMCS mất 120 ngày, tùy thuộc vào việc sẵn sàng tài liệu, lịch kiểm tra và thời gian quay vòng kiểm tra.",
    },
    {
      question: "Các chi phí chính liên quan đến chứng nhận BIS là gì?",
      answer:
        "Chi phí bao gồm phí đăng ký, phí kiểm tra, phí kiểm tra phòng thí nghiệm, phí giấy phép và đánh dấu, và Bảo lãnh Ngân hàng Hiệu suất (PBG) từ ngân hàng Ấn Độ được RBI phê duyệt.",
    },
    {
      question: "Giấy phép BIS có thể được gia hạn không?",
      answer:
        "Có. Giấy phép BIS thường có hiệu lực trong 1–2 năm và có thể được gia hạn khi đáp ứng các yêu cầu tuân thủ và cập nhật tài liệu.",
    },
    {
      question:
        "Điều gì xảy ra nếu sản phẩm thất bại trong quá trình kiểm tra phòng thí nghiệm BIS?",
      answer:
        "Nếu sản phẩm thất bại, BIS có thể cho phép hành động khắc phục và kiểm tra lại. Thất bại liên tục có thể dẫn đến việc từ chối đơn đăng ký.",
    },
    {
      question: "Có cần thiết phải thuê tư vấn viên chứng nhận BIS không?",
      answer:
        "Nó không bắt buộc nhưng được khuyến nghị cao. Một tư vấn viên giúp giảm sự chậm trễ, quản lý tuân thủ và cải thiện cơ hội phê duyệt bằng cách đảm bảo sự phù hợp hoàn toàn với các giao thức BIS.",
    },
    {
      question: "Giấy phép BIS có thể bị đình chỉ hoặc hủy bỏ không?",
      answer:
        "Có. BIS có thể đình chỉ hoặc hủy bỏ giấy phép vì không tuân thủ, sản phẩm thất bại, lạm dụng logo ISI hoặc sự khác biệt trong kiểm tra.",
    },
    {
      question: "Những tài liệu nào cần thiết cho quy trình chứng nhận BIS?",
      answer:
        "Tài liệu bao gồm biểu mẫu đăng ký FMCS, báo cáo kiểm tra, danh sách thiết bị, chứng chỉ hiệu chuẩn, bố trí nhà máy, thư bổ nhiệm AIR và bằng chứng thanh toán phí.",
    },
    {
      question: "Một AIR có thể đại diện cho nhiều đơn đăng ký BIS không?",
      answer:
        "Có, với điều kiện họ được ủy quyền cho từng dự án và có băng thông để xử lý tài liệu, kiểm tra và giao tiếp cho từng chứng nhận.",
    },
    {
      question: "Vai trò của Bảo lãnh Ngân hàng Hiệu suất là gì?",
      answer:
        "PBG đảm bảo với BIS rằng nhà sản xuất sẽ tuân thủ các tiêu chuẩn Ấn Độ. Nó có thể hoàn lại khi hủy bỏ giấy phép và bắt buộc cho tất cả các đơn đăng ký FMCS có được BIS Ấn Độ.",
    },
    {
      question: "Chứng nhận BIS có được công nhận bên ngoài Ấn Độ không?",
      answer:
        "Mặc dù chứng chỉ BIS là tiêu chuẩn Ấn Độ, nó được tôn trọng trong bối cảnh thương mại ở nhiều khu vực chấp nhận tuân thủ Ấn Độ, đặc biệt là ở châu Á và châu Phi.",
    },
    {
      question:
        "Làm thế nào để biết sản phẩm của tôi có cần chứng nhận BIS không?",
      answer:
        "Kiểm tra danh sách cập nhật trên trang web chính thức của BIS hoặc tham khảo ý kiến với tư vấn viên BIS để xác minh xem sản phẩm của bạn có thuộc chứng nhận bắt buộc hay không.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Câu hỏi thường gặp"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Câu hỏi thường gặp
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Không tìm thấy câu trả lời bạn đang tìm kiếm?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Liên hệ với chúng tôi!
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
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
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
    // {
    //   code: "vi",
    //   name: "Vietnamese",
    //   flag: "https://flagcdn.com/w320/vn.png",
    //   path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
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
              Xem Trang này bằng Ngôn ngữ của Bạn
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Dịch vụ của chúng tôi
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Tư vấn Chứng chỉ Tốt nhất Ấn Độ
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
              Dấu BIS (Giấy phép ISI) cho Nhà sản xuất Nước ngoài
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
              Chứng nhận Đăng ký CDSCO
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
              Đăng ký BIS (CRS)
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
              Quản lý Chất thải Nhựa
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
              Chứng nhận Chứng chỉ EPR
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
              Chứng nhận Chứng chỉ LMPC
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
              Chứng chỉ Đăng ký BIS
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
              DẤU ISI (BIS) cho Nhà sản xuất Ấn Độ
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
