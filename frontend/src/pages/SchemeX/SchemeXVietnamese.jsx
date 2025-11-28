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
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import { ServicesVietnamese } from "@/schemeXProducts/PumpsAndLiquidElevators/PumpsAndLiquidElevatorsVietnamese";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXVietnamese = () => {
  return (
    <div className="relative">
      {/* Scheme X Meta Tags */}
      <SchemeXMetaTags />
      {/* Scheme X Breadcrumb */}
      <SchemeXBreadcrumb />
      {/* Scheme X Hero Section */}
      <SchemeXHero />
      {/* Scheme X Index Section */}
      <SchemeXIndex />
      {/* Scheme X Main Content Section */}
      <SchemeXMainContent />
      {/* Footer Section */}
      <FooterVietnamese />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXVietnamese;

const SchemeXMetaTags = () => {
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
        name: "Chứng nhận BIS Scheme X tại Ấn Độ",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Chứng nhận BIS Scheme X | An toàn thiết bị cơ khí và điện</title>
      <meta
        name="description"
        content="Chứng nhận BIS Scheme X cần thiết để đảm bảo chất lượng và an toàn cho thiết bị đóng cắt điện áp thấp, thiết bị điều khiển, máy móc và thiết bị điện."
      />
      <meta
        name="keywords"
        content="Scheme X, Chứng nhận Scheme X, BIS Scheme X, Chứng nhận BIS Scheme X, chứng nhận máy móc, chứng nhận thiết bị điện"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Chứng nhận BIS Scheme X | An toàn thiết bị cơ khí và điện"
      />
      <meta
        property="og:description"
        content="Chứng nhận BIS Scheme X cần thiết để đảm bảo chất lượng và an toàn cho thiết bị đóng cắt điện áp thấp, thiết bị điều khiển, máy móc và thiết bị điện."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Chứng nhận BIS Scheme X | An toàn thiết bị cơ khí và điện"
      />
      <meta
        name="twitter:description"
        content="Chứng nhận BIS Scheme X cần thiết để đảm bảo chất lượng và an toàn cho thiết bị đóng cắt điện áp thấp, thiết bị điều khiển, máy móc và thiết bị điện."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const SchemeXBreadcrumb = () => {
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
                <BreadcrumbPage>
                  Chứng nhận BIS của Ấn Độ theo Chương trình-X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXHero = () => {
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
              Chuyên môn được chứng nhận
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Chứng nhận BIS Scheme X
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Chứng nhận BIS Scheme X bao gồm Máy móc, Thiết bị điện và các Cụm
            linh kiện, Bộ phận lắp ráp phụ trong phạm vi Quy định Kỹ thuật Tổng
            hợp (OTR).
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
        <SchemeXHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/vi/chung-nhan-bis-an-do-theo-scheme-x"))
      return "Scheme X Vietnamese";
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
        description: "Tên chỉ nên chứa chữ cái và khoảng trắng.",
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
        description: "Số điện thoại phải có (8-15 chữ số)",
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
        title: "Mẫu liên hệ đã được gửi thành công!",
        description:
          "Cảm ơn bạn đã liên hệ. Đội ngũ của chúng tôi sẽ liên lạc lại với bạn sớm.",
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
      const errorMessage = error.response?.data?.message || "Có gì đó không ổn";
      toast({
        variant: "destructive",
        title: errorMessage || "Không thể gửi chi tiết mẫu liên hệ!",
        description:
          "Có gì đó không ổn. Vui lòng kiểm tra chi tiết và thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Liên Hệ Với Chúng Tôi
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Đặt Lịch Hẹn
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Bạn muốn liên hệ với đội ngũ của chúng tôi và đặt lịch gọi?
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
            placeholder="Họ Và Tên *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Địa Chỉ Email *"
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
            placeholder="Số Điện Thoại *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Tên Công Ty *"
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
            placeholder="Tên Sản Phẩm *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Chứng Nhận Yêu Cầu*"
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
              <span>Gửi</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Đặt Lịch Hẹn</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const SchemeXIndex = () => {
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
    overview: "Tổng Quan",
    process: "Quy Trình",
    documents: "Tài Liệu",
    conclusion: "Kết Luận",
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

const SchemeXMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentVietnamese />
        </div>
      </div>
      <SchemeXServiceFaq />
      <SchemeXProductTable />
      <div id="services">
        <ServicesVietnamese />
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
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
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
              BIS Mark (ISI License) for Foreign Manufacture
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
                alt="BIS Logo"
                title="BIS Logo"
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
            Tiêu chuẩn An toàn Theo Sản phẩm
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Mô tả Máy móc và Thiết bị Điện
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"Tìm kiếm theo mô tả hoặc mã HS..."}
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
    description: "Tất cả các loại Bơm xử lý chất lỏng, thang máy chất lỏng",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "Tất cả các loại máy nén",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications",
  },
  {
    id: 3,
    description:
      "Tất cả các loại máy móc Xử lý vật liệu bằng quy trình liên quan đến Thay đổi nhiệt độ",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "hoặc máy lọc cho chất lỏng và khí",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "Tất cả các loại máy móc cho việc đổ đầy, đóng, niêm phong, dán nhãn chai, đóng gói hoặc bọc",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "Tất cả các loại cần cẩu",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes",
  },
  {
    id: 7,
    description: "Tất cả các loại máy móc cho xây dựng",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers",
  },
  {
    id: 8,
    description: "Tất cả các loại máy dệt (khung dệt)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery",
  },
  {
    id: 9,
    description: "Tất cả các loại máy móc làm thêu.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "Textile Machiner Safety Requirements Part 1 Common Requirements",
  },
  {
    id: 10,
    description: "Tất cả các loại máy cắt kim loại",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements",
  },
  {
    id: 11,
    description:
      "Tất cả các loại công cụ máy cho việc gia công đá, gốm, bê tông, xi măng amiăng hoặc kính khoáng tương tự",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "Tất cả các loại máy móc gia công cao su và nhựa",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements",
  },
  {
    id: 13,
    description:
      "Tất cả các loại máy bao gồm các máy cho công trình công cộng & Xây dựng và máy móc & thiết bị cơ khí có chức năng riêng lẻ, không được quy định",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "Tất cả các loại bánh răng và cơ cấu bánh răng, bánh răng có răng, xích sprocket, các yếu tố truyền động vít bi hoặc con lăn, hộp số và bộ thay đổi tốc độ, bao gồm bộ chuyển đổi mô-men xoắn Và (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "Tất cả các loại Máy điện quay như Máy phát, v.v. Xây dựng và máy móc & thiết bị cơ khí có chức năng riêng lẻ, không được quy định",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
  },
  {
    id: 16,
    description: "Tất cả các loại Máy phát Diesel",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
  },
  {
    id: 17,
    description: "Tất cả các loại Máy biến áp",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
  },
  {
    id: 18,
    description: "Tất cả các loại Bộ chuyển đổi Bán dẫn Công suất",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
  },
  {
    id: 19,
    description:
      "Tất cả các loại thiết bị chuyển mạch và điều khiển hoạt động tại điện áp không vượt quá 1000 vôn và (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
  },
  {
    id: 20,
    description:
      "Tất cả các loại thiết bị chuyển mạch và điều khiển hoạt động tại điện áp vượt quá 1000 vôn và (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng",
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
        LOẠI C (Tiêu chuẩn An toàn Máy móc xử lý các yêu cầu an toàn chi tiết
        cho một máy cụ thể hoặc nhóm máy)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                STT.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Mô tả Máy móc và Thiết bị Điện
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Mã HS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Tiêu chuẩn Ấn Độ/Điều khoản của Tiêu chuẩn Ấn Độ
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Tiêu đề Tiêu chuẩn Ấn Độ
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
                  Không tìm thấy kết quả cho &quot;{searchQuery}&quot;
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
        LOẠI B (Tiêu chuẩn An toàn Chung xử lý một khía cạnh an toàn hoặc nhiều
        loại biện pháp bảo vệ hơn có thể được sử dụng trên một loạt máy móc
        rộng)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                STT.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS Number
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Tiêu đề
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
                  Không tìm thấy kết quả cho &quot;{searchQuery}&quot;
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
              Trước
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              Trang {currentPage} của {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tiếp theo
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
      question: "1. Scheme X dưới chứng nhận BIS là gì?",
      answer:
        "Scheme X là chương trình đánh giá tuân thủ được giới thiệu bởi BIS Ấn Độ cho máy móc và thiết bị điện. Nó đảm bảo tuân thủ các tiêu chuẩn an toàn và kỹ thuật nghiêm ngặt được quy định trong Quy định Kỹ thuật Tổng hợp.",
    },
    {
      question: "2. Scheme X có khác với chứng nhận dấu ISI không?",
      answer:
        "Có. Dấu ISI thường dành cho hàng tiêu dùng và tuân thủ sản phẩm cơ bản, trong khi Scheme X áp dụng cho các sản phẩm phức tạp và cấp công nghiệp yêu cầu kiểm tra và chứng nhận nâng cao thông qua chứng nhận BIS hoặc giấy phép BIS.",
    },
    {
      question: "3. Ai cần nộp đơn xin chứng nhận Scheme X?",
      answer:
        "Các nhà sản xuất và nhà nhập khẩu máy móc và thiết bị điện được liệt kê theo Quy định Kỹ thuật Tổng hợp phải nộp đơn xin Scheme X và nhận chứng nhận BIS hợp lệ để hợp pháp bán hoặc phân phối sản phẩm của họ tại Ấn Độ. Các nhà sản xuất toàn cầu hoặc nhà sản xuất nước ngoài dự định bán sản phẩm tại Ấn Độ cũng phải tuân thủ các quy định này.",
    },
    {
      question: "4. Chi phí chứng nhận BIS Scheme X là bao nhiêu?",
      answer:
        "Chi phí của Scheme X bao gồm phí nộp đơn, phí chứng nhận, phí xem xét hồ sơ kỹ thuật, chi phí kiểm tra nhà máy và phí kiểm tra sản phẩm. Trung bình, nó bắt đầu từ ₹2,000 cho nộp đơn và có thể tăng tùy theo độ phức tạp của sản phẩm. Để biết thêm chi tiết, liên hệ với chúng tôi tại admin@bis-certifications.com.",
    },
    {
      question: "5. Mất bao lâu để nhận giấy phép BIS theo Scheme X?",
      answer:
        "Thời gian biểu thay đổi tùy theo tài liệu, yêu cầu kiểm tra và kiểm tra nhà máy. Thông thường, nó mất 4–6 tuần kể từ ngày đăng ký và nộp đơn BIS thành công đối với nhà sản xuất Ấn Độ và 60-90 ngày đối với nhà sản xuất nước ngoài.",
    },
    {
      question:
        "6. MSMEs cũng có thể nộp đơn xin chứng nhận BIS theo Scheme X không?",
      answer:
        "Hoàn toàn có thể. Trên thực tế, BIS Ấn Độ khuyến khích MSMEs nộp đơn xin giấy phép BIS hoặc chứng nhận tuân thủ theo Scheme X để nâng cao chất lượng, tuân thủ và tính cạnh tranh trong lĩnh vực công nghiệp.",
    },
    {
      question:
        "7. Chứng nhận BIS theo Scheme X có bắt buộc cho xuất khẩu không?",
      answer:
        "Không. Sản phẩm được sản xuất hoàn toàn cho xuất khẩu được miễn trừ theo Quy định Kỹ thuật Tổng hợp. Tuy nhiên, sản phẩm dành cho thị trường Ấn Độ phải được chứng nhận theo Scheme X.",
    },
    {
      question: "8. Hiệu lực của giấy phép BIS theo Scheme X là bao lâu?",
      answer:
        "Giấy phép BIS theo Scheme X thường có hiệu lực 3-6 năm và phải được gia hạn tương ứng. Gia hạn liên quan đến thanh toán phí chứng nhận BIS hàng năm và có thể yêu cầu đánh giá lại tùy theo thay đổi trong phạm vi sản phẩm hoặc tiêu chuẩn.",
    },
    {
      question:
        "9. Nhà sản xuất nước ngoài có thể nộp đơn xin chứng nhận Scheme X không?",
      answer:
        "Có, nhà sản xuất nước ngoài có thể nộp đơn xin chứng nhận Scheme X thông qua đại diện Ấn Độ được ủy quyền. BIS Ấn Độ yêu cầu kiểm tra nhà máy, có thể mất 3 ngày đối với người nộp đơn nước ngoài, cùng với quy trình đăng ký và kiểm tra BIS tiêu chuẩn.",
    },
    {
      question: "10. Hồ sơ Kỹ thuật là gì và tại sao nó được yêu cầu?",
      answer:
        "Hồ sơ Kỹ thuật là một hồ sơ tuân thủ chi tiết được yêu cầu theo Scheme X. Nó bao gồm quy trình sản xuất, chi tiết sản phẩm, báo cáo kiểm tra và tài liệu kiểm soát chất lượng. Nó hỗ trợ sự tuân thủ của sản phẩm với các Tiêu chuẩn Ấn Độ liên quan trong quy trình chứng nhận BIS.",
    },
    {
      question:
        "11. Scheme X liên quan như thế nào đến Quy định Kỹ thuật Tổng hợp?",
      answer:
        "Quy định Kỹ thuật Tổng hợp bắt buộc sử dụng Scheme X cho các loại máy móc và thiết bị điện cụ thể tại Ấn Độ. Các sản phẩm được liệt kê theo quy định phải được chứng nhận theo Scheme X để nhận chứng nhận BIS hoặc giấy phép BIS hợp lệ.",
    },
    {
      question: "12. Chứng nhận BIS theo Scheme X có thể bị thu hồi không?",
      answer:
        "Có. BIS Ấn Độ có thể tạm dừng hoặc hủy giấy phép hoặc chứng nhận BIS theo Scheme X nếu phát hiện không tuân thủ trong giám sát hoặc nếu sản phẩm không đáp ứng Tiêu chuẩn Ấn Độ yêu cầu.",
    },
    {
      question:
        "13. Sự khác biệt giữa giấy phép BIS và chứng nhận BIS theo Scheme X là gì?",
      answer:
        "Giấy phép BIS thường được cấp cho nhà sản xuất Ấn Độ, trong khi chứng nhận tuân thủ BIS (CoC) thường được cấp cho nhà sản xuất nước ngoài hoặc các trường hợp cụ thể. Cả hai đều phục vụ mục đích giống nhau—đảm bảo tuân thủ sản phẩm theo Scheme X.",
    },
    {
      question:
        "14. Dấu ISI có được phép cho sản phẩm được chứng nhận theo Scheme X không?",
      answer:
        "Không. Sản phẩm theo Scheme X không mang dấu ISI. Thay vào đó, chúng hiển thị dấu tiêu chuẩn BIS liên quan đến chương trình chứng nhận, theo quy định của BIS Ấn Độ.",
    },
    {
      question:
        "Làm thế nào để biết máy móc của tôi có yêu cầu chứng nhận Scheme X không?",
      answer:
        "Kiểm tra danh sách chính thức trong Quy định Kỹ thuật Tổng hợp hoặc tham khảo ý kiến chuyên gia tư vấn BIS để xác minh xem máy móc của bạn có thuộc yêu cầu chứng nhận Scheme X bắt buộc không.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Câu Hỏi Thường Gặp
        </h4>
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

        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kết Luận</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Kết Luận</h2>

      <p className="service-left-content-paragraph">
        Chứng nhận BIS Scheme-X vẫn rất quan trọng trong việc duy trì an toàn,
        độ tin cậy và chất lượng của thiết bị chuyển mạch và điều khiển điện áp
        thấp, Máy móc và thiết bị điện. Đối với các nhà sản xuất công cụ máy áp
        dụng cho việc gia công đá, gốm, bê tông, xi măng asphalt và kính khoáng,
        chứng nhận BIS Scheme-X là bắt buộc.
      </p>

      <p className="service-left-content-paragraph">
        Bằng cách đáp ứng các nghĩa vụ này, các nhà sản xuất đảm bảo sự phù hợp
        sản phẩm, nâng cao lòng tin của người tiêu dùng, cũng như cải thiện uy
        tín của họ trên thị trường. Scheme-X đảm bảo sản xuất diễn ra suôn sẻ
        nhất có thể, đáp ứng các tiêu chuẩn an toàn trên toàn thế giới, và các
        thương hiệu được công nhận đạt được danh tiếng tích cực.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tài Liệu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Các Tài Liệu Chính Yêu Cầu Cho Chứng Nhận BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        Để đơn giản hóa quy trình chứng nhận BIS, các nhà sản xuất được yêu cầu
        thu thập và nộp các tài liệu sau trong giai đoạn đăng ký:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                STT.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Tài Liệu Yêu Cầu
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Chi Tiết
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Tên và Địa Chỉ (Nhà Máy & Văn Phòng)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tên pháp lý đầy đủ và địa chỉ vật lý của địa điểm sản xuất và
                văn phòng
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Thông Tin PAN và GST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Số Tài Khoản Vĩnh Viễn (PAN) và chi tiết đăng ký GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Chi Tiết Liên Hệ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Địa chỉ email, số điện thoại di động và số điện thoại cố định
                cho giao tiếp chính thức
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Chi Tiết Quản Lý
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tên, vai trò và ID của các giám đốc điều hành chính và người ký
                ủy quyền
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Mô Tả Sản Phẩm
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Chi tiết về máy móc và thiết bị được bao phủ theo Lịch Đầu Tiên
                của Quy Định Kỹ Thuật Tổng Hợp
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Phân Loại Sản Phẩm
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Loại cụ thể, mô hình và biến thể mà Giấy phép BIS đang được yêu
                cầu
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Hồ Sơ Kỹ Thuật
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tất cả chi tiết kỹ thuật liên quan đến sản phẩm và chi tiết về
                đơn vị sản xuất.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Hiệu Lực và Quy Trình Gia Hạn Chứng Nhận Scheme-X:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Hiệu Lực Giấy Phép và Gia Hạn: Giấy phép BIS theo Scheme-X được cấp trong thời hạn 3 đến 6 năm cho sản xuất liên tục. Một khi thời hạn hết hạn, giấy phép có thể được gia hạn trong cùng thời hạn bằng cách nộp đơn gia hạn, phí yêu cầu và tài liệu tuân thủ.",
          "Giấy Chứng Nhận Tuân Thủ (CoC): Một CoC được cấp cho Sản xuất Một Lần, và áp dụng cho nhà sản xuất trong nước cũng như nước ngoài. Vì nó chỉ áp dụng cho một lô duy nhất, CoC không có tùy chọn gia hạn.",
          "Báo Cáo Kiểm Tra Sản Phẩm: Khi báo cáo kiểm tra được chuẩn bị trong phòng thí nghiệm của nhà sản xuất, các quan chức BIS xác minh chúng trong kiểm tra nhà máy bằng cách tiến hành kiểm tra chứng kiến. Nếu kiểm tra được thực hiện tại các cơ sở thuê ngoài, các cơ sở đó cũng được kiểm tra và phê duyệt bởi BIS.",
          "Xem Xét Đơn Gia Hạn: Để hiệu lực không gián đoạn, nhà sản xuất được yêu cầu tiếp tục tuân thủ các quy định của Scheme-X. Theo Quy định 8 của Quy định Đánh Giá Tuân Thủ BIS, Cục Tiêu Chuẩn Ấn Độ xử lý đơn gia hạn theo mẫu VIII. Gia hạn chỉ được thực hiện sau khi xác minh tuân thủ hài lòng.",
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
        <span className="service-left-content-index-heading">Quy Trình</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Các Bước Để Được Chứng Nhận Theo BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Việc cấp Chứng nhận BIS theo Scheme-X là một hoạt động có hệ thống nhằm
        đảm bảo nhà sản xuất đáp ứng các tiêu chuẩn an toàn, chất lượng và tuân
        thủ áp dụng. Quy trình như sau:
      </p>

      <PointsListWithoutHeading
        points={[
          "Xác minh Phạm vi: Xác định xem sản phẩm của bạn có nằm trong phạm vi của Scheme-X và có đáp ứng yêu cầu an toàn BIS không. Kiểm tra các Tiêu chuẩn Ấn Độ liên quan và lịch kỹ thuật để xác định xem bạn có thể tuân thủ không.",
          "Chuẩn bị Tài liệu Yêu cầu: Các nhà sản xuất cần thu thập và sắp xếp các tài liệu sau: Chứng nhận Đăng ký Kinh doanh, Tài liệu Cơ sở Thiết kế, Tài liệu Nhà máy và Quy trình Sản xuất, Báo cáo Kiểm tra Dịch vụ (nếu áp dụng), Tài liệu Đảm bảo và Kiểm soát Chất lượng.",
          "Xây dựng Hồ sơ Kỹ thuật: Hồ sơ kỹ thuật là phần không thể thiếu cho yêu cầu gia hạn chứng nhận. Nó nên chứa: Thông số Kỹ thuật của Sản phẩm, Thông tin Phương pháp và Kỹ thuật, Tài liệu Tuân thủ và Kiểm tra, Giới hạn và Mục đích Dự định của sản phẩm, Tài liệu Đảm bảo Chất lượng, Theo dõi Nguyên liệu Thô, Theo dõi Hợp đồng, và các bằng chứng còn lại, Tuân thủ các tiêu chuẩn trong phạm vi được quy định.",
          "Mẫu Đơn: Mẫu đơn có thể được nộp điện tử trên Trang web BIS tại nơi được chỉ định. Việc thanh toán phí đơn là bắt buộc. Các tài liệu còn lại xác minh đơn nên được bao gồm để đánh giá đúng.",
          "Kiểm tra Nhà máy: Đối với nhà sản xuất trong nước: Kiểm tra được tiến hành trong khoảng thời gian tối đa 2 ngày. Đối với nhà sản xuất nước ngoài: Kiểm tra được tiến hành trong khoảng thời gian tối đa 3 ngày (các ngày bổ sung có thể phát sinh do các yêu cầu bổ sung).",
          "Kiểm tra Mẫu Sản phẩm: Kiểm tra mẫu được thực hiện tại chỗ của nhà sản xuất hoặc tại các phòng thí nghiệm được BIS phê duyệt thuê ngoài (kiểm tra thuê ngoài được phép). Việc kiểm tra chứng minh việc đáp ứng các tiêu chuẩn Ấn Độ liên quan.",
          "Cấp Chứng nhận: Nếu sản phẩm đáp ứng tất cả các điều kiện, BIS cấp cho mỗi sản phẩm một Giấy phép hoặc Giấy chứng nhận Tuân thủ (CoC). Nhà sản xuất có thể tự do sử dụng Dấu hiệu Tiêu chuẩn BIS trên tất cả các sản phẩm được chứng nhận.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Hồ sơ này đóng vai trò là bằng chứng kỹ thuật và thống kê của yêu cầu
        sản phẩm chứng minh tiêu chuẩn theo dõi an toàn.
      </p>

      <p className="service-left-content-paragraph">
        Trong thời gian kiểm tra, các quan chức BIS dự kiến sẽ: Phân tích hồ sơ
        kỹ thuật, Đánh giá các phương pháp sản xuất cùng với các hệ thống đảm
        bảo chất lượng hỗ trợ, Quan sát kiểm tra sản phẩm, Xác định không tuân
        thủ (nếu có) và đưa ra các bước khắc phục. Báo cáo chi tiết về kiểm toán
        được cung cấp cho người nộp đơn sau chuyến thăm.
      </p>

      <p className="service-left-content-paragraph">
        Chiến lược này duy trì tuân thủ Tiêu chuẩn BIS và là sự công nhận tuân
        thủ Ấn Độ và quốc tế, tập trung ngành công nghiệp vào lòng tin của người
        tiêu dùng đối với an toàn và chất lượng.
      </p>

      <h2 className="service-left-content-heading-three">
        Quy trình cho Nhà sản xuất Trong nước
      </h2>

      <p className="service-left-content-paragraph">
        Các nhà sản xuất trong nước tuân theo cách tiếp cận trực tiếp bằng cách
        nhận Giấy phép BIS theo Scheme-X. Các bước trực tiếp cần tuân theo bao
        gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Tài liệu: Tất cả tài liệu liên quan đến chương trình phải được thu thập và chuẩn bị.",
          "Thực hiện Đơn: Đơn phải được trình bày kèm theo các phí liên quan.",
          "Thẩm tra Đơn: Bất kỳ đơn nào được nộp đều phải trải qua kiểm tra và một loạt câu hỏi tiếp theo được tạo bởi BIS.",
          "Bổ nhiệm Thẩm tra viên: Thẩm tra viên được bổ nhiệm bởi BIS nhưng cá nhân được đề cử phải chịu phí kiểm toán.",
          "Kiểm toán Nhà máy: Một cuộc kiểm tra và khảo sát kiểm toán được tiến hành tại chỗ và các mẫu liên quan được thu thập.",
          "Đánh giá Mẫu: Các mẫu được đánh giá trong phòng thí nghiệm được BIS công nhận. Người nộp đơn thanh toán tất cả phí kiểm tra phòng thí nghiệm được BIS công nhận.",
          "Thanh toán Phí Cấp phép & Đánh dấu: Các khoản thanh toán cần thiết được hoàn tất cho BIS.",
          "Cấp Giấy phép: Chứng nhận cho phép sử dụng Dấu hiệu BIS được trao bởi BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Lịch trình Thông thường:</strong> Gần 90 ngày làm việc (theo
        thực tiễn BIS) là cần thiết. Điều này được cung cấp không có các không
        tuân thủ chính.
      </p>

      <h2 className="service-left-content-heading-three">
        Quy trình cho Nhà sản xuất Nước ngoài
      </h2>

      <p className="service-left-content-paragraph">
        Không giống như nhà sản xuất trong nước, các nhà sản xuất nước ngoài nộp
        đơn xin chứng nhận BIS theo Scheme-X được yêu cầu tuân thủ quy trình
        nghiêm ngặt hơn và các bước bổ sung. Quy trình được chi tiết hóa như
        sau.
      </p>

      <PointsListWithoutHeading
        points={[
          "Chuẩn bị Tài liệu: Đăng ký kinh doanh, bố trí sản phẩm và nhà máy, báo cáo kiểm tra và các tài liệu quản lý chất lượng liên quan tất cả phải được trong thư mục được cấu hình để tuân thủ.",
          "Nộp Đơn: Đơn, phí cần thiết và tất cả tài liệu đơn phải được nộp qua cổng trực tuyến BIS.",
          "Ghi nhận Đơn và Thẩm tra: Đơn được ghi nhận bởi BIS và kiểm tra tài liệu được tiến hành. Bất kỳ vấn đề nào BIS có thể có phải được giải quyết bởi người nộp đơn một cách kịp thời.",
          "Phân công Thẩm tra viên và Thanh toán: Các thẩm tra viên của BIS chịu trách nhiệm kiểm tra nhà máy được phân công cho người nộp đơn để kiểm toán. Người nộp đơn phải thanh toán phí kiểm toán được đặt theo luật áp dụng.",
          "Chuẩn bị Kiểm toán: Các nhà sản xuất nước ngoài chịu trách nhiệm sắp xếp hậu cần cho kiểm toán như cấp visa, vé máy bay và đặt chỗ khách sạn cho các quan chức BIS được sắp xếp và thanh toán.",
          "Kiểm toán Nhà máy & Lựa chọn Mẫu: Các quan chức BIS tiến hành kiểm toán nhà máy kéo dài 3 ngày (có thể thêm ngày nếu cần thêm đơn).",
          "Kiểm tra Sản phẩm: Các mẫu được chọn được chuyển đến phòng thí nghiệm được BIS công nhận để kiểm tra. Trong một số trường hợp, kiểm tra được ký hợp đồng với các phòng thí nghiệm kiểm tra khác và thanh toán được giải quyết qua phòng thí nghiệm kiểm tra chính.",
          "Thanh toán Phí Đánh dấu & Giấy phép: Sau kiểm toán thành công và kết quả kiểm tra, nhà sản xuất phải thanh toán phí đánh dấu cần thiết và phí giấy phép cho BIS.",
          "Cấp Giấy phép: BIS cấp Giấy phép / Giấy chứng nhận Tuân thủ (CoC) một khi tất cả các điều kiện đã được tuân thủ hoàn toàn. BIS sau đó cho phép nhà sản xuất với Dấu hiệu Tiêu chuẩn BIS được sử dụng trên các sản phẩm được chứng nhận khác, một khi tuân thủ được xác nhận.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Kiểm toán bao gồm: Đánh giá các hệ thống đảm bảo chất lượng và quy trình
        làm việc trong quy trình sản xuất, Đánh giá tuân thủ và tài liệu kỹ
        thuật, Lựa chọn mẫu kiểm tra độc lập.
      </p>

      <p className="service-left-content-paragraph">
        Toàn bộ quy trình mất, dựa trên thực tiễn từ BIS, khoảng 6-7 tháng.
      </p>

      <h3 className="service-left-content-heading-three">
        Các Chỉ dẫn Bổ sung Chính cho Nhà sản xuất Nước ngoài:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Phân loại FMCS: Tất cả các nhà sản xuất nước ngoài được phân loại là 'Quy mô Lớn' theo Chương trình Chứng nhận Nhà sản xuất Nước ngoài. Phân loại này không phụ thuộc vào quy mô hoạt động được thực hiện.",
          "Đại diện Ấn Độ Được ủy quyền (AIR): Mọi nhà sản xuất nước ngoài được yêu cầu chỉ định Đại diện Ấn Độ Được ủy quyền (AIR). AIR là điểm liên hệ chính cho người nộp đơn nước ngoài và BIS, chịu trách nhiệm tuân thủ, hợp tác và bảo trì giấy phép BIS.",
          "Kiểm toán Nhà máy: Kiểm toán nhà máy cho nhà sản xuất nước ngoài là toàn diện và thường kéo dài 3 ngày. Ngoài ra, cần thêm ngày trong trường hợp nộp nhiều đơn sản phẩm.",
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
        <span className="service-left-content-index-heading">Tổng Quan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Giới thiệu về Chứng nhận Scheme X của BIS
      </h2>

      <p className="service-left-content-paragraph">
        Cục Tiêu chuẩn Ấn Độ, hay viết tắt là BIS, đã triển khai &ldquo;Scheme
        X&rdquo; vào ngày 16 tháng 3 năm 2022, nhằm cải thiện việc tuân thủ an
        toàn và chất lượng sản phẩm tại Ấn Độ. Các nhà sản xuất Ấn Độ và nước
        ngoài có thể nộp đơn xin chứng nhận BIS cho Thiết bị và Máy móc Điện,
        các thành phần như lắp ráp, lắp ráp con và Công cụ được quy định trong
        Lịch II của Scheme-X và nhận chứng nhận trước khi xuất khẩu, bán hoặc
        phân phối tại Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Theo Scheme X, các nhà sản xuất có thể nộp đơn xin Giấy phép BIS hoặc
        Giấy chứng nhận Tuân thủ (CoC) cho thiết bị chuyển mạch và điều khiển
        điện áp thấp, máy móc và thiết bị điện. Một khi các nhà sản xuất được
        chứng nhận, họ được phép sử dụng Dấu hiệu Tiêu chuẩn BIS, cho biết rằng
        sản phẩm của họ tuân thủ các tiêu chuẩn được quy định tại Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Chứng nhận này, đồng thời thúc đẩy sản phẩm và tuân thủ Tiêu chuẩn Ấn Độ
        và Quy định Chính phủ, giúp xây dựng lòng tin và sự tự tin của người
        tiêu dùng đối với các sản phẩm được chứng nhận.
      </p>

      <h2 className="service-left-content-heading-three">
        Scheme X Certification là gì?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X là chương trình chứng nhận sản phẩm được phát triển theo Quy
        định Đánh giá Tuân thủ BIS, 2018 và sau đó được đơn giản hóa theo Quy
        định Đánh giá Tuân thủ (Sửa đổi) BIS, 2022.
      </p>

      <p className="service-left-content-paragraph">
        Mục tiêu chính là đưa các tiêu chuẩn an toàn và chất lượng Ấn Độ lên
        tiêu chuẩn toàn cầu, đặc biệt liên quan đến máy móc công nghiệp và thiết
        bị điện. Các sản phẩm được sản xuất hoặc nhập khẩu vào Ấn Độ theo chương
        trình này phải trải qua kiểm tra và đánh giá nghiêm ngặt để chứng minh
        tiêu chuẩn kỹ thuật, an toàn cũng như hiệu suất.
      </p>

      <p className="service-left-content-paragraph">
        Các quy định trong phạm vi ban đầu của Chứng nhận Scheme X đã được sửa
        đổi và mở rộng với Lệnh Quy định Kỹ thuật Tổng hợp (Quy định An toàn Máy
        móc và Thiết bị Điện), 2024 mới được ban hành, thuộc thẩm quyền của Bộ
        Công nghiệp Nặng và được thực thi bởi BIS. Lệnh này có hiệu lực từ ngày
        1 tháng 9 năm 2026, và bao gồm một loạt máy móc và thiết bị điện như bơm
        xử lý chất lỏng, máy nén, cần cẩu, máy điện quay, máy biến áp và thiết
        bị chuyển mạch và điều khiển.
      </p>

      <p className="service-left-content-paragraph">
        Các lắp ráp, lắp ráp con và thành phần của máy móc hoặc thiết bị như vậy
        cũng là một phần của phạm vi chứng nhận theo Phần 16 của Đạo luật Cục
        Tiêu chuẩn Ấn Độ, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Hơn nữa, theo Quy tắc CMVR 1989 (Xây dựng và Sản xuất Quy định Van),
        Bowser và các loại thiết bị xây dựng khác thuộc thẩm quyền của Scheme X,
        đảm bảo rằng thị trường không bị tiếp xúc với thiết bị thiếu các yêu cầu
        an toàn và tiêu chuẩn kỹ thuật cần thiết.
      </p>

      <h2 className="service-left-content-heading-three">
        Quy định Kỹ thuật Tổng hợp (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        Bộ Công nghiệp Nặng đã ban hành &ldquo;Quy định Kỹ thuật Tổng hợp về
        Lệnh An toàn (An toàn Máy móc và Thiết bị Điện)&rdquo; qua thông báo
        E-Gazette ngày 28 tháng 8 năm 2024. Quy định sáng tạo này nhằm cải thiện
        - an toàn, chất lượng và tuân thủ của máy móc, thiết bị điện và các lắp
        ráp, lắp ráp con và thành phần của chúng, theo Scheme X của Quy định
        BIS, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Theo OTR, tất cả các loại máy móc và thiết bị điện, và tất cả các bộ
        phận và thành phần của chúng được bao gồm. Tuy nhiên, một số loại được
        loại trừ cụ thể:
      </p>

      <PointsListWithoutHeading
        points={[
          "Bất kỳ máy móc và thành phần nào là một phần của bất kỳ lệnh nào khác theo Phần 16 được ban hành theo Đạo luật Cục Tiêu chuẩn Ấn Độ, 2016.",
          "Hàng hóa và sản phẩm gia dụng được sản xuất chỉ dành cho xuất khẩu.",
          "Máy móc và thiết bị xây dựng thuộc Quy tắc CMVR, 1989, do Bộ Giao thông Vận tải và Đường cao tốc (MoRTH) quy định.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Những ngoại lệ này được thực hiện để hỗ trợ tuân thủ và tránh trùng lặp
        không cần thiết quy định nhằm thúc đẩy dễ dàng kinh doanh.
      </p>

      <p className="service-left-content-paragraph">
        Quy định Kỹ thuật Tổng hợp, 2024 bao gồm tất cả máy móc và thiết bị
        điện, bao gồm thiết bị chuyển mạch và điều khiển điện áp thấp được thông
        báo bởi Bộ Công nghiệp Nặng, sẽ được xử lý theo khung Scheme X của Chứng
        nhận BIS. Lệnh này sẽ có hiệu lực vào ngày 1 tháng 9 năm 2026 để các nhà
        sản xuất và nhà nhập khẩu có đủ thời gian để điều chỉnh hoạt động theo
        các Lệnh được ban hành.
      </p>

      <h2 className="service-left-content-heading-three">
        Chứng nhận BIS theo Quy định Kỹ thuật Tổng hợp
      </h2>

      <p className="service-left-content-paragraph">
        Theo OTR 2024, các nhà sản xuất cũng như nhà nhập khẩu của máy móc và
        thiết bị điện bao gồm bơm, máy nén, máy ly tâm, cần cẩu, máy biến áp và
        thiết bị chuyển mạch phải nộp đơn xin Chứng nhận BIS theo Scheme X.
      </p>

      <p className="service-left-content-paragraph">
        Theo Scheme X, các nhà sản xuất có thể chọn nộp đơn xin:
      </p>

      <PointsListWithoutHeading
        points={["Giấy phép BIS, hoặc", "Giấy chứng nhận Tuân thủ (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Các sản phẩm mang Dấu hiệu Tiêu chuẩn BIS là Dấu hiệu Tuân thủ chứng
        nhận và đảm bảo với người dùng rằng sản phẩm an toàn, đáng tin cậy và
        chất lượng tốt. Nó cũng là dấu hiệu của lòng tin và hiệu suất thực sự
        tốt.
      </p>

      <h3 className="service-left-content-heading-three">
        Lưu Ý Đặc Biệt cho MSMEs
      </h3>

      <p className="service-left-content-paragraph">
        Giống như nhiều lĩnh vực khác, Các Doanh nghiệp Nhỏ và Vừa (MSMEs) cũng
        phải tuân thủ Scheme X và nhận Chứng nhận BIS cho máy móc và thiết bị
        điện của họ. Mặc dù có thể có vẻ rằng việc tuân thủ các yêu cầu quy định
        có thể khó khăn, chứng nhận Scheme X là một giá trị gia tăng và lợi thế
        cho MSMEs vì các lý do sau:
      </p>

      <PointsListWithoutHeading
        points={[
          "Chứng minh tuân thủ các nghĩa vụ pháp lý và các yêu cầu khác do chính phủ đặt ra.",
          "Tăng cường danh tiếng sản phẩm và lòng tin của người tiêu dùng.",
          "Tạo điều kiện tiếp cận thị trường trong nước và quốc tế lớn hơn.",
          "Cải thiện vị thế toàn cầu của MSME về tính cạnh tranh, an toàn và chất lượng.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Logo Scheme X của BIS
      </h3>

      <p className="service-left-content-paragraph">
        Dấu hiệu tiêu chuẩn BIS của Scheme X tạo thành một dấu hiệu chất lượng
        và nguyên tắc lòng tin. Logo chứa:
      </p>

      <PointsListWithoutHeading
        points={[
          "số tiêu chuẩn được hiển thị ở phần trên của logo; và",
          "số giấy phép được hiển thị ở phần dưới của Logo theo định dạng: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dấu hiệu này cho biết rằng Giấy phép BIS đã được cấp thành công cho nhà
        sản xuất. Nó cho phép nhà sản xuất đặt Dấu hiệu BIS và đảm bảo với người
        tiêu dùng rằng sản phẩm là chính hãng và an toàn.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="Logo Scheme X của BIS"
          title="Chứng nhận Scheme X của BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h3 className="service-left-content-heading-three">Hậu Quả Pháp Lý</h3>

      <p className="service-left-content-paragraph">
        Dấu hiệu Tiêu chuẩn BIS là dấu hiệu của lòng tin và chất lượng. Dấu hiệu
        chỉ có sẵn sau khi có hợp đồng hợp lệ. Chỉ hợp đồng hợp lệ cho phép chủ
        sở hữu sử dụng dấu hiệu. Sử dụng dấu hiệu mà không có hợp đồng hợp lệ là
        tội phạm theo hiến pháp Ấn Độ và tương đương với có dấu hiệu pháp lý.
        Chủ sở hữu của dấu hiệu bị đặt dưới các hạn chế nặng nề cho việc sử dụng
        giấy phép CM/L-XXXXXXXXXX cho sản phẩm không có chứng nhận BIS.
      </p>

      <p className="service-left-content-paragraph">
        Do đó, mọi nhà sản xuất đều có nghĩa vụ:
      </p>

      <PointsListWithoutHeading
        points={[
          "Nhận Giấy phép BIS hợp lệ theo Scheme X.",
          "Đáp ứng các yêu cầu liên quan của Tiêu chuẩn Ấn Độ; và",
          "Gắn đúng cách sản phẩm với Logo BIS được phê duyệt.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Khung quy định này được mở rộng để bảo vệ lợi ích của người tiêu dùng và
        doanh nhân, thúc đẩy một thị trường nhấn mạnh an toàn, minh bạch và lòng
        tin.
      </p>

      <h2 className="service-left-content-heading-three">
        Sự Khác Biệt Chính Giữa Scheme-I và Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "Bao gồm một loạt sản phẩm tiêu dùng rộng hơn như điện tử, thiết bị gia dụng và thậm chí sản phẩm công nghiệp.",
          "Sản phẩm được cấp chứng nhận theo chương trình này phải có Dấu hiệu ISI Tiêu chuẩn.",
          "Liên quan đến cả nhà sản xuất trong nước và nước ngoài.",
          "Bao gồm kiểm toán nhà máy và kiểm tra mẫu để xác định chất lượng và tuân thủ Tiêu chuẩn Ấn Độ.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "Địa chỉ các sản phẩm kỹ thuật công nghiệp và an toàn quan trọng rủi ro cao, bao gồm thiết bị điện, máy móc và hệ thống công nghiệp có nhiệm vụ đáng kể.",
          "Chứng nhận nghiêm ngặt hơn Scheme-I. Nó liên quan đến báo cáo kỹ thuật nâng cao, kiểm tra tuân thủ và kiểm toán chứng nhận rộng rãi.",
          "Scheme-X có xu hướng đắt hơn Scheme-I vì tài liệu tuân thủ bổ sung.",
          "Bất kỳ doanh nghiệp nào kinh doanh thiết bị điện hoặc máy móc công nghiệp đều được yêu cầu nhận chứng nhận theo Scheme-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Tính năng
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Dấu hiệu ISI
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Quản lý bởi
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Ấn Độ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS Ấn Độ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Loại Chứng nhận
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Giấy phép BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Chứng nhận BIS / Giấy phép BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Sản phẩm Mục tiêu
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Hàng tiêu dùng
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Máy móc & thiết bị điện
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Dấu hiệu Sử dụng
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Dấu hiệu ISI
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Dấu hiệu tiêu chuẩn BIS (theo Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Mức độ Tuân thủ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tuân thủ tiêu chuẩn Ấn Độ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tuân thủ kỹ thuật và an toàn cao cấp
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Các Sản phẩm Được Bao Phủ bởi Scheme-X
      </h3>

      <p className="service-left-content-paragraph">
        Scheme-X bao gồm các sản phẩm có rủi ro cao nhất đối với an toàn và hiệu
        suất, bao gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Thiết bị Điện: Máy biến áp công nghiệp, đơn vị nguồn điện và tương tự, thiết bị chuyển mạch và điều khiển điện áp thấp, cộng với các thiết bị điện áp cao khác.",
          "Máy móc Nặng: Máy ép thủy lực, cần cẩu công nghiệp, công cụ máy tự động và thiết bị chuyên dụng cho các ngành công nghiệp quy mô lớn.",
          "Thiết bị Quan trọng Đời sống: Bình chữa cháy, bình áp lực, hệ thống điện khẩn cấp và các thiết bị và hệ thống khác cho an toàn đời sống.",
          "Điện tử Tiêu dùng & Công nghiệp Chuyên dụng: Thiết bị và thiết bị điện tử cấp y tế kết hợp các biện pháp bảo vệ nâng cao.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Số Thứ Tự
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Mô tả Máy móc và Thiết bị Điện
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Mã HS
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
                  to="/chung-nhan-bis-ke-hoach-x-cho-may-bom-va-thang-may-chat-long"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Bơm xử lý chất lỏng, thang máy chất lỏng và
                  (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 và 841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-nen-khi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy nén và (hoặc) các lắp ráp / lắp ráp con /
                  thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                và 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-thiet-bi-xu-ly-nhiet"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy móc xử lý vật liệu bằng quy trình liên
                  quan đến thay đổi nhiệt độ và (hoặc) các lắp ráp / lắp ráp con
                  / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 và
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-ly-tam-va-thiet-bi-loc-hoac-tinh-che"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy ly tâm, máy lọc hoặc làm sạch cho chất
                  lỏng và khí và (hoặc) các lắp ráp / lắp ráp con / thành phần
                  của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 và 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-moc-dong-goi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy móc cho việc đổ đầy, đóng, niêm phong, dán
                  nhãn chai, đóng gói hoặc bọc và (hoặc) các lắp ráp / lắp ráp
                  con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 và 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-can-cau"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại cần cẩu và (hoặc) các lắp ráp / lắp ráp con /
                  thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                và 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-moc-xay-dung"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy móc cho xây dựng, di chuyển đất, Khai thác
                  và (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 và 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-det"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy dệt (khung dệt) và (hoặc) các lắp ráp /
                  lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 và 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-moc-theu"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy móc làm thêu và (hoặc) các lắp ráp / lắp
                  ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 và 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-cong-cu-cat-kim-loai"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại công cụ máy cắt kim loại được bao phủ theo
                  tiêu đề 8456 đến 8461 và (hoặc) các lắp ráp / lắp ráp con /
                  thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 và 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-cong-cu"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại công cụ máy cho việc gia công đá, gốm, bê
                  tông, xi măng amiăng hoặc kính khoáng tương tự và (hoặc) các
                  lắp ráp / lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 và 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-moc-cao-su-va-nhua"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại máy móc gia công cao su và nhựa và (hoặc) các
                  lắp ráp / lắp ráp con / thành phần của chúng
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
                  to="/chung-nhan-bis-scheme-x-cho-cong-trinh-cong-cong-va-thiet-bi-co-khi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Máy bao gồm các máy cho công trình công cộng &
                  xây dựng và máy móc & thiết bị cơ khí có chức năng riêng lẻ,
                  không được quy định Hoặc bao gồm ở nơi khác trong Chương 84 và
                  (hoặc) các lắp ráp / lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 và 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-banh-rang-he-thong-truyen-dong-va-cac-bo-phan-truyen-tai"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại bánh răng và cơ cấu bánh răng, bánh răng có
                  răng, xích sprocket, các yếu tố truyền động vít bi hoặc con
                  lăn, hộp số và bộ thay đổi tốc độ, bao gồm bộ chuyển đổi
                  mô-men xoắn Và (hoặc) các lắp ráp / lắp ráp con / thành phần
                  của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 và 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-dien-quay"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Máy điện quay như Máy phát, v.v. và (hoặc) các
                  lắp ráp / lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 và 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-phat-dien-diesel"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Máy phát Diesel và (hoặc) các lắp ráp / lắp
                  ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 và 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-may-bien-ap"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Máy biến áp và (hoặc) các lắp ráp / lắp ráp
                  con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 và 850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-bo-chuyen-doi-ban-dan-cong-suat"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại Bộ chuyển đổi Bán dẫn Công suất và (hoặc) các
                  lắp ráp / lắp ráp con / thành phần của chúng
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
                  to="/chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-len-den-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại thiết bị chuyển mạch và điều khiển hoạt động
                  tại điện áp không vượt quá 1000 vôn và (hoặc) các lắp ráp /
                  lắp ráp con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 và 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/chung-nhan-bis-scheme-x-cho-thiet-bi-chuyen-mach-va-dieu-khien-tren-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Tất cả các loại thiết bị chuyển mạch và điều khiển hoạt động
                  tại điện áp vượt quá 1000 vôn và (hoặc) các lắp ráp / lắp ráp
                  con / thành phần của chúng
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 và 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Tiêu chuẩn An toàn Theo Sản phẩm
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Mô tả Máy móc và Thiết bị Điện
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
            Tải xuống PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Tiêu chuẩn An toàn Theo BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        Hơn cả một nhu cầu pháp lý, Chứng nhận BIS Scheme - X mang lại lời hứa
        về an toàn, chất lượng và độ tin cậy. Chứng nhận này, đòi hỏi tuân thủ
        nghiêm ngặt các tiêu chuẩn quốc gia và quốc tế, đảm bảo rằng máy móc và
        thiết bị điện được cung cấp cho người dùng là an toàn, thân thiện với
        môi trường và kỹ thuật vững chắc.
      </p>

      <p className="service-left-content-paragraph">
        Để chứng nhận theo Scheme - X, các nhà sản xuất cần tuân thủ các thành
        phần an toàn chính sau:
      </p>

      <PointsListWithoutHeading
        points={[
          "An toàn Điện: Tuân thủ các Tiêu chuẩn IEC và Ấn Độ áp dụng. Chứng nhận bảo vệ chống ngắn mạch, sốc điện, phân hủy cách điện, mất đất bảo vệ, đánh lửa vật liệu dễ cháy xung quanh và cháy.",
          "An toàn Cơ khí: Đánh giá tính toàn vẹn cấu trúc của máy móc và tính toàn vẹn của các bộ phận chuyển động và vật liệu mới. Đảm bảo rằng thiết bị được chịu an toàn ứng suất cơ học, mài mòn và rủi ro vận hành.",
          "An toàn Cháy: Sử dụng vật liệu được thiết kế và xây dựng với vật liệu chống cháy. Tuân thủ tiêu chuẩn cho hiệu suất lan truyền ngọn lửa để kiểm soát rủi ro liên quan đến cháy.",
          "Tuân thủ Môi trường: Sử dụng công suất kiểm soát và vật liệu thân thiện với môi trường trong sản xuất thiết bị. Khuyến khích các nhà sản xuất giảm tác động môi trường của thiết bị.",
          "Quản lý Chất lượng: Kiểm soát thống trị và độc lập đối với quy trình sản xuất để duy trì các tiêu chuẩn và quy tắc đã đặt trước. Tập trung vào quy định điều kiện nhà máy, bao gồm kiểm toán quy trình và tuân thủ liên tục.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Tiêu chuẩn Quy định Theo Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Các nhà sản xuất được yêu cầu tuân thủ Các Tiêu chuẩn Ấn Độ Liên quan
        phù hợp với Tiêu chuẩn Quốc tế, bao gồm:
      </p>

      <h3 className="service-left-content-heading-three">Tiêu chuẩn Loại A:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – An toàn Máy móc: Nguyên tắc Chung cho Thiết kế, Đánh giá Rủi ro và Giảm Rủi ro.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Tiêu chuẩn Loại B:</h3>

      <PointsListWithoutHeading
        points={[
          "Được mô tả trong Lịch Thứ hai của Lệnh Quy định Kỹ thuật Tổng hợp (OTR), 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Tiêu chuẩn Loại C:</h3>

      <PointsListWithoutHeading
        points={["Được mô tả trong Lịch Thứ ba của Lệnh OTR, 2024."]}
      />

      <h3 className="service-left-content-heading-three">Loạt IS/IEC 60947:</h3>

      <PointsListWithoutHeading
        points={[
          "Bao gồm thiết bị chuyển mạch và điều khiển điện áp thấp ở nhiều phần và phần.",
        ]}
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
