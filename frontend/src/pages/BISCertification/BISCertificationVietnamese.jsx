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
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";
import { ISIMarkAndBISCommonTable } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableVietnamese";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterVietnamese from "@/components/manual/Footer/FooterVietnamese";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationVietnamese = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTable />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterVietnamese />
    </div>
  );
};

export default BISCertificationVietnamese;

const BISCertificationMetaTags = () => {
  const title = "Các loại chứng nhận BIS, Quy trình, Tài liệu, Phí";
  const description =
    "Chứng nhận BIS đề cập đến quy trình lấy giấy chứng nhận tiêu chuẩn chất lượng từ Cục Tiêu chuẩn Ấn Độ (BIS) để sản xuất và bán các sản phẩm khác nhau tại Ấn Độ.";
  const keywords =
    "Chứng nhận BIS, Quy trình chứng nhận BIS, Đăng ký BIS, Quy trình đăng ký BIS, Chương trình chứng nhận BIS, Chương trình chứng nhận sản phẩm, Chương trình chứng nhận bắt buộc, Danh sách sản phẩm bắt buộc BIS, Dấu ISI, BIS FMCS, Chương trình Hallmarking BIS, Chương trình Eco Mark, Tư vấn chứng nhận BIS, Tư vấn chứng nhận ISI, Tư vấn dấu BIS ISI, Chứng nhận BIS là gì, Tải xuống chứng nhận BIS, Chi phí chứng nhận BIS, Chứng nhận BIS Ấn Độ, Biểu mẫu đầy đủ chứng nhận BIS, Chứng nhận BIS Ấn Độ, Chứng nhận BIS Ấn Độ, Chứng nhận BIS có nghĩa là, Kiểm tra chứng nhận BIS, Giấy phép BIS trực tuyến tại Ấn Độ, Chứng nhận BIS trực tuyến, Giấy chứng nhận BIS, Giấy chứng nhận BIS trực tuyến.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Trưởng bộ phận Vận hành tại Sun Certification India";

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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Chứng nhận BIS Ấn Độ cho Nhà nhập khẩu và Nhà sản xuất
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
              Chuyên môn được chứng nhận
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Chứng nhận BIS Ấn Độ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            cho Nhà nhập khẩu và Nhà sản xuất
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Chứng nhận BIS đảm bảo chất lượng và an toàn sản phẩm tại Ấn Độ. Đây
            là bắt buộc đối với nhiều sản phẩm và yêu cầu kiểm tra, tài liệu, và
            phê duyệt.
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
                Xem Dịch vụ
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
    if (path.includes("/vi/chung-chi-bis-la-gi-bis-an-do"))
      return "Chứng nhận BIS - Trang tiếng Việt";
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
        Muốn liên hệ với đội ngũ của chúng tôi và lên lịch cuộc gọi?
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
            placeholder="Họ và tên *"
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
    overview: "Tổng quan",
    schemes: "Chương trình",
    process: "Quy trình",
    documents: "Tài liệu",
    cost: "Chi phí",
    air: "AIR",
    conclusion: "Kết luận",
    faqs: "Câu hỏi thường gặp",
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
          aria-label="Chuyển đổi menu"
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
        <ServicesRightSideContentVietnamese />
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
        <ServiceAuthorVietnamese />
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
      <h1 className="service-left-content-heading-two">
        Chứng nhận Dấu BIS ISI cho Nhà sản xuất Ấn Độ
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Chứng nhận BIS Ấn Độ"
          title="Giấy chứng nhận BIS cho nhà sản xuất Ấn Độ"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Giới thiệu: Tại sao Chứng nhận BIS lại Quan trọng
      </h2>

      <p className="service-left-content-paragraph">
        Ví dụ, một nhà sản xuất từ Đức đã phát minh ra một thiết bị điện tử độc
        đáo và đang có kế hoạch bán nó trên thị trường Ấn Độ phát triển nhanh.
        Thiết bị này là độc đáo, an toàn và cũng đã nhận được phê duyệt ở Châu
        Âu. Tuy nhiên, khi thiết bị được mang đến cảng ở Ấn Độ, các nhân viên
        hải quan giữ lại thiết bị. Câu hỏi là, "Tại sao?" Câu trả lời là, thiết
        bị phải có chứng nhận BIS, điều này là một phần quan trọng để bán sản
        phẩm điện tử tại Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Nhiều nhà sản xuất toàn cầu và Ấn Độ đối mặt với những trường hợp tương
        tự mỗi năm. Đối với người tiêu dùng Ấn Độ, dấu BIS trên một sản phẩm
        không chỉ là một logo, nó là một dấu hiệu của niềm tin rằng sản phẩm đã
        được kiểm tra về chất lượng, an toàn và độ tin cậy. Đối với một doanh
        nghiệp, nó là cửa ngõ để một trong những thị trường lớn nhất trên toàn
        thế giới.
      </p>

      <p className="service-left-content-paragraph">
        Bài viết này sẽ trả lời tất cả các câu hỏi về chứng nhận BIS, sự cần
        thiết, quy trình, lợi ích, chương trình, chi phí, và hệ thống và điều
        hướng có sẵn cho cả nhà sản xuất nước ngoài và trong nước.
      </p>

      <h2 className="service-left-content-heading-three">
        Chứng nhận BIS là gì đối với Nhà sản xuất và Nhà nhập khẩu?
      </h2>

      <p className="service-left-content-paragraph">
        Chứng nhận BIS là chứng nhận đảm bảo chất lượng và an toàn được cung cấp
        bởi Cục Tiêu chuẩn Ấn Độ (BIS), cơ quan chứng nhận quốc gia của Ấn Độ
        thuộc Bộ Công vụ Người tiêu dùng. Chứng nhận BIS đảm bảo rằng một sản
        phẩm tuân thủ các Tiêu chuẩn Ấn Độ (IS) về hiệu suất, an toàn và chất
        lượng.
      </p>
      <p className="service-left-content-paragraph">
        Khi một sản phẩm đáp ứng các yêu cầu tiêu chuẩn chất lượng này, Cục Tiêu
        chuẩn Ấn Độ sẽ cấp giấy phép BIS hoặc giấy chứng nhận BIS, có nghĩa là
        sản phẩm đủ điều kiện mang dấu ISI (cho các chương trình trong nước)
        hoặc một dấu CRS với số đăng ký duy nhất (theo Chương trình Đăng ký Bắt
        buộc BIS).
      </p>
      <p className="service-left-content-paragraph">
        Đối với nhiều nhà sản xuất và nhà nhập khẩu Ấn Độ, việc có được chứng
        nhận BIS là bắt buộc. Nó bao gồm một loạt sản phẩm bao gồm thiết bị
        điện, sản phẩm xi măng và thép, nước uống đóng gói, thiết bị điện tử như
        điện thoại di động, đèn LED, power banks, trang sức kim loại quý (thông
        qua hallmarking) và nhiều hơn nữa. Các nhà sản xuất và nhà nhập khẩu của
        những sản phẩm bắt buộc này không thể hợp pháp bán hoặc phân phối hàng
        hóa ở Ấn Độ mà không có sự công nhận BIS.
      </p>

      <h2 className="service-left-content-heading-three">
        Lịch sử Ngắn gọn của BIS ở Ấn Độ
      </h2>

      <p className="service-left-content-paragraph">
        Cục Tiêu chuẩn Ấn Độ (BIS) được thành lập vào năm 1986, tiếp quản Viện
        Tiêu chuẩn Ấn Độ (ISI), được thành lập vào năm 1947. BIS hiện được coi
        là người bảo vệ chất lượng cho các tiêu chuẩn ở Ấn Độ và đã căn chỉnh
        các thực hành của họ với mức độ quốc tế và thực hiện các sửa đổi cần
        thiết cho các điều kiện Ấn Độ.
      </p>

      <div className="service-left-content-heading-three">Cột mốc Đáng chú ý</div>

      <PointsListWithoutHeading
        points={[
          "Vào năm 1947, ISI được thành lập để hỗ trợ hệ thống kiểm soát chất lượng sau khi đất nước giành được độc lập.",
          "Vào năm 1955, dấu ISI được trao, trở thành một trong những biểu tượng chất lượng nổi tiếng nhất ở Ấn Độ.",
          "Vào năm 1986, Đạo luật BIS được thông qua, thay thế ISI bằng Cục Tiêu chuẩn Ấn Độ.",
          "Vào năm 2016 và 2018, các sửa đổi tiếp theo đã làm phong phú thêm trách nhiệm của BIS, làm cho hallmarking và chứng nhận sản phẩm trở nên toàn diện hơn.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Hiện tại, BIS đảm bảo an toàn, độ tin cậy và tiêu chuẩn hóa của hàng
        nghìn công cụ và máy móc cho người dùng Ấn Độ trên nhiều ngành công
        nghiệp.
      </p>

      <h2 className="service-left-content-heading-three">
        Tại sao Chứng nhận BIS lại bắt buộc ở Ấn Độ?
      </h2>
      <p className="service-left-content-paragraph">
        Thị trường Ấn Độ rất lớn, luôn thay đổi và nhạy cảm với sự thay đổi giá.
        Tuy nhiên, sự cởi mở này cũng để thị trường tiếp xúc với hàng hóa rẻ
        tiền và không an toàn. Trong bối cảnh này, chứng nhận BIS hoạt động như
        một rào cản bảo vệ.
      </p>
      <PointsListWithoutHeading
        points={[
          "An toàn Người tiêu dùng - bảo vệ mọi người khỏi các tai nạn tiềm ẩn, vấn đề sức khỏe và sự lừa dối.",
          "Quy định Thị trường - đảm bảo rằng các sản phẩm không tuân thủ không được vào thị trường Ấn Độ.",
          "Niềm tin và Sự tự tin - củng cố niềm tin của người tiêu dùng vào sản phẩm địa phương và quốc tế.",
          "Sắp xếp Toàn cầu - hỗ trợ các công ty nước ngoài trong việc căn chỉnh với cấu trúc quy định của Ấn Độ.",
          "Cạnh tranh Công bằng - mọi người tham gia thị trường, bất kể quy mô, được đảm bảo cạnh tranh hoàn toàn dựa trên chất lượng.",
        ]}
      />
      <p className="service-left-content-paragraph">
        Chứng nhận BIS cho nước uống đóng gói là một ví dụ về nơi thiếu chứng
        nhận có thể gây ra các vấn đề sức khỏe. Các tiêu chuẩn thiếu sót tương
        đương khác của chứng nhận sản phẩm cho máy sưởi, máy nướng bánh mì và
        các thiết bị điện khác có thể dẫn đến hỏa hoạn. Do đó, bằng cách có
        chứng nhận BIS, chính phủ đảm bảo rằng những thách thức này được giải
        quyết.
      </p>
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

      <h2 className="service-left-content-heading-two">
        Quy trình Chứng nhận BIS
      </h2>

      <p className="service-left-content-paragraph">
        Quy trình chứng nhận BIS tuân theo một luồng có cấu trúc:
      </p>

      <PointsListWithoutHeading
        points={[
          "Xác định Tiêu chuẩn Liên quan: Chọn Tiêu chuẩn Ấn Độ (IS) áp dụng.",
          "Nộp Đơn: Gửi cho BIS và đính kèm bất kỳ tài liệu liên quan nào.",
          "Kiểm tra Sản phẩm: Kiểm tra được thực hiện tại các phòng thí nghiệm BIS được phê duyệt.",
          "Thanh tra Nhà máy: Cơ sở được thanh tra bởi các nhân viên BIS.",
          "Giấy phép BIS: giấy chứng nhận được trao cho đánh giá đánh giá thành công.",
          "Giám sát: tuân thủ liên tục cùng với thay đổi giấy phép là tiêu chuẩn mới.",
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
        <span className="service-left-content-index-heading">Tài liệu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Tài liệu Cần thiết cho Chứng nhận BIS
      </h2>

      <p className="service-left-content-paragraph">
        Một gói tài liệu mạnh mẽ đảm bảo xử lý suôn sẻ. Các yêu cầu chính bao
        gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Giấy phép kinh doanh hoặc tài liệu đăng ký công ty.",
          "Sơ đồ quy trình sản xuất.",
          "Danh sách máy móc và thiết bị.",
          "Chi tiết sản phẩm và thông số kỹ thuật.",
          "Báo cáo kiểm tra từ các phòng thí nghiệm được BIS công nhận.",
          "Sổ tay kiểm soát chất lượng.",
          "Giấy chứng nhận nhãn hiệu.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Đối với nhà sản xuất nước ngoài:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Bổ nhiệm Đại diện Ấn Độ được Ủy quyền (AIR).",
          "Bằng chứng đại diện và tài liệu nhận dạng.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Chi phí</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Chi phí Chứng nhận BIS
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Thành phần Chi phí
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Chi tiết
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí Đăng ký
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí một lần, không hoàn lại tùy thuộc vào loại sản phẩm
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí Kiểm tra
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Dựa trên độ phức tạp; trả cho các phòng thí nghiệm được BIS công
                nhận
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí Giấy phép Hàng năm
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Trả hàng năm để duy trì giấy phép BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí Thanh tra/Kiểm toán Nhà máy
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tính phí nếu nhân viên BIS đến thăm nhà máy (di chuyển trong
                nước hoặc quốc tế tính thêm)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Phí Tư vấn (nếu áp dụng)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tùy chọn, cho sự trợ giúp tuân thủ end-to-end từ các tư vấn viên
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
        Vai trò của Đại diện Ấn Độ được Ủy quyền (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Đối với nhà sản xuất nước ngoài, Đại diện Ấn Độ được Ủy quyền (AIR) là
        quan trọng.
      </p>

      <PointsListWithoutHeading
        points={[
          "Xử lý tất cả giao tiếp với BIS.",
          "Thu thập và nộp tài liệu, sau đó tạo điều kiện cho quy trình thanh tra.",
          "Đảm bảo tuân thủ liên quan đến chứng nhận, trước, và sau.",
          "Phải là công dân Ấn Độ hoặc một tổ chức có địa chỉ địa phương đã đăng ký.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Trong trường hợp không có AIR, việc có được chứng nhận BIS cho các công
        ty nước ngoài là không thể.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kết luận</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">Kết luận</div>

      <p className="service-left-content-paragraph">
        Có chứng nhận BIS là điều cần thiết để làm kinh doanh ở Ấn Độ. Nó không
        còn là chứng nhận tùy chọn trong kinh doanh. Nó là quan trọng cho thành
        công kinh doanh và xây dựng niềm tin. BIS là thiết yếu cho an toàn và
        thành công ở Ấn Độ. Đối với nhà sản xuất và nhà nhập khẩu, nó cung cấp
        một môi trường thiết lập kinh doanh dễ dàng và an toàn. Các vấn đề pháp
        lý và tiền phạt không còn là mối quan tâm. Với dấu BIS, niềm tin của
        người tiêu dùng được đảm bảo.
      </p>

      <p className="service-left-content-paragraph">
        Ấn Độ là một trong những nền kinh tế phát triển lớn nhất thế giới và
        việc có được quyền truy cập để bán ở đó có thể giúp một nhà xuất khẩu
        phát triển. Bất kể bạn là một nhà sản xuất ở Ấn Độ hay nước ngoài, giấy
        phép BIS là cần thiết để sản xuất hoặc bán sản phẩm trên thị trường Ấn
        Độ. Nó là bắt buộc, và nó mở khóa triển vọng kinh doanh với dân số ngày
        càng tăng của Ấn Độ. Đó là một khoản đầu tư vào an toàn, niềm tin của
        người tiêu dùng, danh tiếng thương hiệu, uy tín, và tăng trưởng dài hạn.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Chương trình</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Chương trình Chứng nhận BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS có nhiều chương trình chứng nhận được thiết kế cho các ngành công
        nghiệp và loại sản phẩm đa dạng. Mỗi chương trình được thiết kế để giải
        quyết các nhu cầu cụ thể của ngành công nghiệp và sản phẩm.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Chương trình Chứng nhận Nhà sản xuất Nước ngoài",
          "Chương trình Dấu ISI (Nhà sản xuất Trong nước)",
          "Scheme X dưới BIS Ấn Độ",
          "CRS – Chương trình Đăng ký Bắt buộc",
          "Chương trình Hallmarking (Trang sức & Kim loại Quý)",
          "Chứng nhận Eco Mark",
          "Chương trình Chứng nhận Hệ thống Quản lý (MSCS)",
          "LRS (Chương trình Công nhận Phòng thí nghiệm)",
        ]}
        linkMap={{
          "FMCS – Chương trình Chứng nhận Nhà sản xuất Nước ngoài":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "Chương trình Dấu ISI (Nhà sản xuất Trong nước)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X dưới BIS Ấn Độ": "indian-bis-certification-under-scheme-x",
          "CRS – Chương trình Đăng ký Bắt buộc":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        Chương trình Dấu ISI (Nhà sản xuất Trong nước)
      </h3>

      <p className="service-left-content-paragraph">
        Đối với nhà sản xuất Ấn Độ, việc có được giấy phép BIS là điều kiện tiên
        quyết để đảm bảo bán hợp pháp sản phẩm của họ trong nước. Chứng nhận này
        được cấp bởi Cục Tiêu chuẩn Ấn Độ (BIS) để chứng nhận sự đáp ứng các
        Tiêu chuẩn Ấn Độ liên quan đến chất lượng, an toàn và các tiêu chuẩn
        hiệu suất cho sản phẩm. Điều này bao gồm kiểm tra nhà máy, kiểm tra sản
        phẩm và kiểm tra tuân thủ với các thông số BIS. Một khi sản phẩm được
        thông qua, các nhà sản xuất được phép đặt dấu ISI trên sản phẩm. Dấu này
        là nhãn hiệu thương mại cho nhà sản xuất và giúp khách hàng nhận biết
        một sản phẩm chính hãng, được chứng nhận ISI.
      </p>

      <p className="service-left-content-paragraph">
        Bất kể đó là cho thiết bị điện tử, thép, xi măng, nhựa, hay vật liệu xây
        dựng, việc có được giấy chứng nhận BIS là điều cần thiết cho việc tiếp
        cận thị trường. Khác với việc có được sự tin tưởng của người tiêu dùng,
        giấy chứng nhận BIS tăng cường danh tiếng của các nhà sản xuất Ấn Độ,
        cho phép họ tham gia vào các hợp đồng chính phủ, và mở ra một loạt cơ
        hội kinh doanh khác. Quan trọng nhất, việc thiếu chứng nhận BIS có thể
        có những hậu quả nghiêm trọng, từ tiền phạt pháp lý và thu hồi sản phẩm
        đến lệnh cấm bán hoàn toàn ở Ấn Độ. Do đó, tuân thủ BIS không chỉ là yêu
        cầu pháp lý, mà là một chiến lược có mục tiêu để mở rộng và duy trì sự
        tin tưởng của người tiêu dùng.
      </p>

      <p className="service-left-content-paragraph">
        Đối với nhà sản xuất Ấn Độ, chương trình dấu ISI là dấu uy tín nhất.
        Theo chương trình, các nhà sản xuất Ấn Độ được yêu cầu có sản phẩm của
        họ được kiểm tra tại các cơ sở kiểm tra được BIS công nhận. Các địa điểm
        sản xuất phải chịu kiểm tra và thử nghiệm. Các sản phẩm tuân thủ được
        cấp phép sử dụng dấu ISI. Đó là một hành vi phạm tội để cung cấp các sản
        phẩm như xi măng, bình LPG, cáp điện, nước uống đóng gói và nhiều hơn
        nữa, mà không có dấu ISI.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Chương trình Chứng nhận Nhà sản xuất Nước ngoài
      </h3>

      <p className="service-left-content-paragraph">
        Chương trình Chứng nhận Nhà sản xuất Nước ngoài (FMCS) là một chương
        trình được phát triển bởi Cục Tiêu chuẩn Ấn Độ cho các công ty nước
        ngoài muốn tham gia vào Thị trường Ấn Độ. Chương trình này đảm bảo an
        toàn, chất lượng, và đảm bảo hiệu suất của các sản phẩm được sản xuất ở
        nước ngoài tuân thủ các tiêu chuẩn Ấn Độ yêu cầu. Theo FMCS, các công ty
        nước ngoài muốn bán sản phẩm ở Ấn Độ trước tiên phải có được giấy chứng
        nhận Cục Tiêu chuẩn Ấn Độ hoặc giấy phép. Giống như các nhà sản xuất Ấn
        Độ, các nhà sản xuất nước ngoài cũng được yêu cầu có được giấy phép BIS
        để sử dụng dấu ISI trên sản phẩm của họ. Dấu ISI mong muốn được cấp sau
        đánh giá toàn diện bao gồm kiểm tra nhà máy và mẫu sản phẩm nghiêm ngặt
        theo các Tiêu chuẩn Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Một nhà sản xuất nước ngoài được yêu cầu bổ nhiệm một Đại diện Ấn Độ
        được Ủy quyền (AIR), người chịu trách nhiệm về giao tiếp và phối hợp,
        như điểm liên hệ đầu tiên với Cục Tiêu chuẩn Ấn Độ (BIS) cho chương
        trình. Nó bao gồm việc nộp đơn, đánh giá tuân thủ sâu, và việc đảm nhận
        tất cả các nghĩa vụ cần thiết để đạt được tuân thủ trong thời hạn. Như
        một kết quả của việc tuân theo các hướng dẫn FMCS, các công ty nước
        ngoài có thể tham gia vào thị trường Ấn Độ, cũng như có được thiện chí
        với khách hàng. Bất kỳ sản phẩm nào có dấu ISI đều thể hiện mức độ cao
        về chất lượng, an toàn, và đảm bảo độ tin cậy ở Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Không có sản phẩm nước ngoài nào thuộc các danh mục được quy định được
        phép vào Ấn Độ mà không có chứng nhận FMCS.
      </p>

      <h3 className="service-left-content-heading-three">
        Scheme X (Quy định Kỹ thuật Tổng hợp)
      </h3>

      <p className="service-left-content-paragraph">
        Scheme X, hay Quy định Kỹ thuật Tổng hợp, là một Chương trình chứng nhận
        BIS khác được thiết kế bởi Cục Tiêu chuẩn Ấn Độ để giúp đơn giản hóa các
        thủ tục tuân thủ của các ngành công nghiệp trong lĩnh vực cơ khí và
        điện. Khác với các chương trình chứng nhận khác, Scheme X tập trung vào
        việc giảm tài liệu, đánh giá, và phê duyệt trong khi đảm bảo rằng sản
        phẩm tuân thủ các Tiêu chuẩn Ấn Độ. Các sản phẩm có dấu tiêu chuẩn có
        chất lượng và an toàn đặc biệt và có thể được bán sau khi trải qua kiểm
        tra loại, kiểm tra nhà máy, và chứng nhận đơn giản các yêu cầu bắt buộc.
      </p>

      <p className="service-left-content-paragraph">
        Chương trình X bao gồm các hướng dẫn an toàn máy móc nặng và thiết bị
        điện cho các sản phẩm như máy bơm, cần cẩu, máy biến áp, dụng cụ máy và
        các sản phẩm kỹ thuật nặng khác. Đây là những ngành công nghiệp phù hợp
        nhất và tất cả nơi độ tin cậy và an toàn là điều cần thiết. Scheme X
        tiện lợi vì nó rút ngắn thời gian và chi phí của chứng nhận BIS phức
        tạp. Nó nhằm mục đích hợp lý hóa quy trình tuân thủ để tạo điều kiện
        giải phóng nhanh hơn cho tiếp thị và danh tiếng nâng cao mà không ảnh
        hưởng đến các tiêu chuẩn chất lượng và an toàn. Danh tiếng lâu dài và
        truyền thống của Cục Tiêu chuẩn Ấn Độ cho phép thương mại quốc tế dễ
        dàng hơn, không thể thiếu cho các công ty để đáp ứng các yêu cầu tuân
        thủ và tăng cường khả năng cạnh tranh.
      </p>

      <p className="service-left-content-paragraph">
        BIS Scheme X là bắt buộc để tiếp cận ngành công nghiệp máy móc nặng Ấn
        Độ. Chương trình mới này quan trọng cho cạnh tranh thị trường được cải
        thiện, đổi mới và tuân thủ các quy định được hợp lý hóa thông qua cấu
        trúc đơn giản nhưng mạnh mẽ này.
      </p>

      <h3 className="service-left-content-heading-three">
        Chương trình Đăng ký Bắt buộc (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Cục Tiêu chuẩn Ấn Độ (BIS) đã phát triển một chương trình chứng nhận BIS
        gọi là Chương trình Đăng ký Bắt buộc (CRS) nhằm điều chỉnh các sản phẩm
        IT và điện tử ở Ấn Độ. Nó tập trung vào đánh giá an toàn và chất lượng
        của các sản phẩm rủi ro cao như đèn LED, điện thoại di động, laptop,
        power banks, và các thiết bị điện tử tiêu dùng khác theo Tiêu chuẩn Ấn
        Độ. CRS, trái ngược với chương trình ISI, không cấp một dấu ISI, nhưng
        các sản phẩm được chứng nhận, tuân thủ với chương trình, mang một dấu
        CRS với số đăng ký duy nhất. Tất cả các sản phẩm điện tử và IT cần được
        kiểm tra tại các phòng thí nghiệm được BIS công nhận và đăng ký chính
        thức với BIS CRS, được sử dụng để đảm bảo tuân thủ trước khi chúng có
        thể được bán hoặc nhập khẩu vào Ấn Độ.
      </p>

      <p className="service-left-content-paragraph">
        Chương trình này là điều cần thiết để bảo vệ người tiêu dùng Ấn Độ khỏi
        các thiết bị điện tử không an toàn, kém chất lượng, hoặc giả mạo, đặc
        biệt trong trường hợp thị trường kỹ thuật số phát triển nhanh. Cả nhà
        sản xuất Ấn Độ và nước ngoài đều cần có được chứng nhận CRS. Các công ty
        nước ngoài phải bổ nhiệm một Đại diện Ấn Độ được Ủy quyền AIR để đảm bảo
        tuân thủ. BIS liên tục cập nhật danh sách sản phẩm được bao phủ dưới CRS
        để bao gồm các sản phẩm và công nghệ mới và các vấn đề an toàn mới nổi.
        Đối với nhà sản xuất, việc có được đăng ký BIS theo CRS là một lợi thế
        vì nó giúp trong tuân thủ quy định và nó cũng tăng niềm tin của khách
        hàng, danh tiếng công ty, và tiếp cận thị trường trong ngành công nghiệp
        điện tử ở Ấn Độ.
      </p>

      <h3 className="service-left-content-heading-three">
        Chương trình Hallmarking
      </h3>

      <p className="service-left-content-paragraph">
        Ở Ấn Độ, hallmarking của trang sức vàng và bạc là bắt buộc theo Chương
        trình Hallmarking và được quy định bởi Cục Tiêu chuẩn Ấn Độ (BIS) đảm
        bảo độ tinh khiết và tính xác thực của trang sức. Các sản phẩm Kim loại
        Quý được kiểm tra tại các Trung tâm Kiểm định và Hallmarking được BIS
        phê duyệt (AHC) và sau đó được đóng dấu với các dấu hallmark. Quy trình
        này chỉ được hoàn thành nếu các sản phẩm đáp ứng các Tiêu chuẩn Ấn Độ
        được đặt ra từ đầu. Các thợ kim hoàn trước tiên phải có được giấy phép
        BIS cho phép họ bán trang sức có dấu hallmark. Đây là cách duy nhất để
        làm như vậy hợp pháp. Thợ kim hoàn có nghĩa vụ trải qua và hoàn thành
        kiểm tra sản phẩm, kiểm tra BIS, và giám sát tuân thủ liên tục để bán
        trang sức có dấu hallmark. Quy trình, cuối cùng, bảo vệ người tiêu dùng
        và đảm bảo độ tinh khiết, trọng lượng và chất lượng và hạn chế hành vi
        sai trái cũng như gian lận trong thị trường trang sức.
      </p>

      <p className="service-left-content-paragraph">
        Đối với người tiêu dùng Ấn Độ, vàng và bạc không chỉ là đồ trang sức mà
        còn là khoản đầu tư lớn, điều này làm cho niềm tin và minh bạch trở nên
        cần thiết. Trang sức hallmarking là một dấu hiệu đảm bảo cho người dân
        thường trong đất nước rằng mỗi mảnh trang sức để bán đã trải qua kiểm
        tra toàn diện theo các tiêu chuẩn quốc gia khác nhau và thực hành thương
        mại công bằng. Các thợ kim hoàn có thể thể hiện uy tín và danh tiếng thị
        trường của họ bằng hallmarking trang sức. Không có khả năng tuân thủ các
        quy tắc đặt ra sẽ mang lại hình phạt có thể bao gồm đình chỉ giấy phép.
        Đối với hallmarking dưới BIS, nó phục vụ như một sự hoàn thành các nghĩa
        vụ dựa trên nguyên tắc và pháp lý. Điều này không chỉ tăng sự hài lòng
        của người tiêu dùng mà còn nâng cao thị trường trang sức Ấn Độ như một
        tổng thể. Điều này cũng áp dụng cho các nhà bán lẻ nhỏ hơn cũng như các
        nhà sản xuất quy mô lớn hơn.
      </p>

      <h3 className="service-left-content-heading-three">
        Chứng nhận Eco Mark
      </h3>

      <p className="service-left-content-paragraph">
        Eco Mark là một chương trình công nhận tập trung vào đổi mới được tạo
        bởi Cục Tiêu chuẩn Ấn Độ (BIS) nhằm thúc đẩy các hàng hóa thân thiện với
        môi trường. Khác với chứng nhận truyền thống tập trung nổi bật với các
        thông số an toàn và chất lượng, Eco Mark được trao cho các hàng hóa tuân
        thủ Tiêu chuẩn Ấn Độ và thể hiện ít nhất một số mức giảm tác động môi
        trường bất lợi trong một hoặc nhiều các giai đoạn khác nhau của vòng đời
        hàng hóa. Chứng nhận Eco Mark chỉ được trao sau khi kiểm tra đáng kể và
        chứng minh tiêu chí - tuân thủ bao gồm mức phát thải, không độc hại, tỷ
        lệ phân hủy sinh học, khả năng tái chế và tương tác tổng thể với hệ
        thống. Eco Mark, giống như dấu ISI, là một biểu tượng của sự đảm bảo từ
        chính phủ đã được cấp trạng thái của một dấu chứng nhận, mặc dù với các
        mục tiêu rõ ràng hơn về tính bền vững môi trường.
      </p>

      <p className="service-left-content-paragraph">
        Giấy phép BIS với Eco Mark chứng nhận rằng một công ty tham gia vào sản
        xuất có trách nhiệm và quan tâm đến môi trường. Nó đảm bảo tuân thủ pháp
        luật và tạo ra lợi thế cạnh tranh với người tiêu dùng bảo vệ và các
        doanh nghiệp định hướng tính bền vững. Eco Mark giúp cho ngành công
        nghiệp tin tưởng và áp dụng các thực hành xanh và cho người tiêu dùng
        tin tưởng rằng các sản phẩm họ mua là an toàn và có trách nhiệm với môi
        trường. Eco Mark hỗ trợ tầm nhìn của Ấn Độ về bảo vệ chất lượng nâng cao
        với bảo vệ môi trường dưới BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Chương trình Chứng nhận Hệ thống Quản lý (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        Chương trình Chứng nhận Hệ thống Quản lý (MSCS) được khởi xướng bởi Cục
        Tiêu chuẩn Ấn Độ (BIS) là một quy trình từng bước đánh giá và công nhận
        các công ty liên quan để triển khai các hệ thống quản lý được quốc tế
        chấp nhận và công nhận. Khung MSCS bao gồm Tiêu chuẩn ISO như ISO 9001
        Quản lý Chất lượng, ISO 14001 Quản lý Môi trường, ISO 45001 Hệ thống
        Quản lý Sức khỏe và An toàn Nghề nghiệp và những tiêu chuẩn khác. MSCS
        chứng nhận công ty cho các hoạt động hợp pháp, tính nhất quán, và cải
        tiến liên tục của các hoạt động. Các công ty được chứng nhận trải qua
        nhiều đánh giá và kiểm tra giúp họ xây dựng niềm tin giữa khách hàng, cơ
        quan quản lý, và các bên liên quan tăng cường đảm bảo an toàn, chất
        lượng, và tính bền vững.
      </p>

      <p className="service-left-content-paragraph">
        BIS là cơ quan tiêu chuẩn quốc gia của Ấn Độ và là cơ quan chứng nhận để
        nâng cao danh tiếng và uy tín của tổ chức trong nước và bên ngoài Ấn Độ.
        MSCS bên cạnh việc thúc đẩy trách nhiệm giải trình thông qua giám sát
        định kỳ và chứng nhận lại cũng giải phóng một doanh nghiệp để tích cực
        hỗ trợ các chương trình công như Make in India và Atmanirbhar Bharat.
        Bên cạnh nghĩa vụ pháp lý, chương trình cũng giúp nuôi dưỡng văn hóa
        toàn vẹn, hiệu quả và thương mại công bằng. MSCS khuyến khích thương mại
        và đầu tư của các công ty được chứng nhận và BIS đóng một phần quan
        trọng trong việc phát triển hệ sinh thái chất lượng của đất nước.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Chương trình Công nhận Phòng thí nghiệm
      </h3>

      <p className="service-left-content-paragraph">
        Dưới Cục Tiêu chuẩn Ấn Độ (BIS), Chương trình Công nhận Phòng thí nghiệm
        (LRS) là một phần tích hợp của hệ thống đảm bảo tính đáng tin cậy và
        năng lực tổng thể của các phòng thí nghiệm kiểm tra và chứng nhận sản
        phẩm để được BIS phê duyệt. Các phòng thí nghiệm như vậy được đánh giá
        quan trọng về các thuộc tính đa dạng bao gồm kiến thức kỹ thuật, chất
        lượng lực lượng lao động, cơ sở hạ tầng, và năng lực tổng thể và sự hài
        lòng của phòng thí nghiệm với tiêu chuẩn ISO/ IEC 17025. Các phòng thí
        nghiệm này, một khi được phê duyệt, được phép thực hiện kiểm tra trên
        sản phẩm mà đánh giá sự phù hợp được thực hiện như một phần của các
        chương trình chứng nhận BIS khác nhau như Chương trình Dấu ISI và Chương
        trình Đăng ký Bắt buộc (CRS). Rõ ràng là đối với nhà sản xuất, đặc biệt
        là người nhập khẩu và xuất khẩu, các báo cáo thu được từ phòng thí
        nghiệm được LRS phê duyệt là yêu cầu quan trọng để đạt được giấy chứng
        nhận BIS là yêu cầu pháp lý cho một số sản phẩm.
      </p>

      <p className="service-left-content-paragraph">
        LRS đang trao quyền cho các hệ thống đảm bảo của Ấn Độ bằng cách duy trì
        công bằng trong kết quả kiểm tra và đảm bảo rằng tất cả kết quả nhất
        quán và được đánh giá chuẩn toàn cầu, trong khi chỉ công nhận các phòng
        thí nghiệm đáng tin cậy và vững chắc. Để duy trì tính toàn vẹn và minh
        bạch, BIS thực hiện kiểm tra định kỳ, kiểm tra trình độ, và giám sát các
        phòng thí nghiệm sơ đồ được công nhận. Công nhận chứng nhận này cho phép
        BIS cải thiện niềm tin từ người tiêu dùng trong khi làm cho quy trình
        chứng nhận hiệu quả hơn cho các ngành công nghiệp, vì chỉ các sản phẩm
        an toàn, tuân thủ, và chất lượng cao mới được cung cấp trên thị trường
        Ấn Độ. Đối với các tổ chức nhằm mục đích nhận chứng nhận BIS, hợp tác
        với các phòng thí nghiệm được LRS phê duyệt là điều cần thiết nhất để
        đạt được tuân thủ và tiếp cận thị trường.
      </p>

      <h3 className="service-left-content-heading-three">
        Sản phẩm Yêu cầu Chứng nhận BIS
      </h3>

      <p className="service-left-content-paragraph">
        Chứng nhận BIS áp dụng cho nhiều loại sản phẩm. Ví dụ bao gồm:
      </p>

      <PointsListWithoutHeading
        points={[
          "Điện & Điện tử – Đèn LED, điện thoại di động, bộ chuyển đổi, laptop.",
          "Vật liệu Xây dựng – Xi măng, thanh thép, sản phẩm cấu trúc.",
          "Hàng tiêu dùng – Nước uống đóng gói, bình gas nấu ăn.",
          "Trang sức & Kim loại Quý – Các sản phẩm vàng và bạc dưới hallmarking.",
          "Thiết bị Công nghiệp – Máy bơm, máy biến áp, dụng cụ máy.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Danh sách tiếp tục phát triển khi các rủi ro và công nghệ mới xuất hiện.
      </p>

      <h3 className="service-left-content-heading-three">
        Lợi ích của Chứng nhận BIS
      </h3>

      <p className="service-left-content-paragraph">
        Đối với các công ty, giấy chứng nhận BIS cung cấp nhiều hơn chỉ là tuân
        thủ với pháp luật.
      </p>

      <PointsListWithoutHeading
        points={[
          "Tuân thủ pháp luật: không phạt, không cấm, không tịch thu.",
          "Tiếp cận thị trường: cần thiết để bán các sản phẩm được quy định ở Ấn Độ.",
          "Niềm tin của người tiêu dùng: xây dựng với dấu ISI được công nhận rộng rãi như một dấu hiệu chứng minh.",
          "Lợi thế cạnh tranh: khi các công ty được chứng nhận dễ dàng phân biệt với đối thủ không được chứng nhận.",
          "Tạo điều kiện xuất khẩu: nhiều người mua quốc tế hiểu và đánh giá cao chứng nhận BIS.",
          "Tham gia Đấu thầu: nhiều dự án chính phủ trao hợp đồng cho hàng hóa được chứng nhận BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Chứng nhận BIS ở Ấn Độ là gì?",
      answer:
        "Chứng nhận BIS là chứng nhận đảm bảo chất lượng được cấp bởi Cục Tiêu chuẩn Ấn Độ (BIS) để đảm bảo rằng sản phẩm tuân thủ các tiêu chuẩn Ấn Độ về an toàn, hiệu suất và chất lượng. Nó là bắt buộc đối với các danh mục sản phẩm khác nhau và giúp bảo vệ người tiêu dùng và tuân thủ quy định.",
    },
    {
      question: "Tại sao tôi cần giấy chứng nhận BIS?",
      answer:
        "Giấy chứng nhận BIS là điều cần thiết để hợp pháp sản xuất, nhập khẩu, phân phối hoặc bán một số sản phẩm nhất định ở Ấn Độ. Nó đảm bảo cho người tiêu dùng rằng sản phẩm đáp ứng các hướng dẫn an toàn và chất lượng của tiêu chuẩn Ấn Độ.",
    },
    {
      question: "Dấu ISI dưới chứng nhận BIS là gì?",
      answer:
        "Dấu ISI là biểu tượng chứng nhận được cung cấp theo chương trình chứng nhận BIS. Nó chỉ ra rằng sản phẩm tuân thủ các tiêu chuẩn Ấn Độ và đã được chứng nhận bởi BIS Ấn Độ thông qua kiểm tra và đăng ký phù hợp.",
    },
    {
      question: "Ai cấp giấy phép BIS ở Ấn Độ?",
      answer:
        "Giấy phép BIS được cấp bởi Cục Tiêu chuẩn Ấn Độ (BIS Ấn Độ), cơ quan tiêu chuẩn quốc gia thuộc Bộ Công vụ Người tiêu dùng, Thực phẩm và Phân phối Công cộng.",
    },
    {
      question: "Các loại chương trình chứng nhận BIS khác nhau là gì?",
      answer:
        "Các chương trình chứng nhận BIS chính bao gồm chương trình dấu ISI, Chương trình Đăng ký Bắt buộc (CRS), Chương trình Chứng nhận Nhà sản xuất Nước ngoài (FMCS), Hallmarking cho trang sức, chứng nhận Eco Mark, và Scheme X là gì cho máy móc công nghiệp.",
    },
    {
      question: "Scheme X dưới chứng nhận BIS là gì?",
      answer:
        "Scheme X là quy trình chứng nhận BIS đơn giản hóa áp dụng cho các sản phẩm công nghiệp như máy bơm, máy biến áp, dụng cụ máy, và cần cẩu. Nó đảm bảo phê duyệt nhanh hơn mà không ảnh hưởng đến việc tuân thủ các tiêu chuẩn Ấn Độ.",
    },
    {
      question: "Sản phẩm nào cần chứng nhận BIS ở Ấn Độ?",
      answer:
        "Các sản phẩm như thiết bị điện, thiết bị điện tử, đồ dùng nhà bếp, xi măng, thép, trang sức vàng, điện thoại di động, và máy biến áp yêu cầu chứng nhận BIS theo yêu cầu của BIS Ấn Độ.",
    },
    {
      question: "Đăng ký BIS có bắt buộc cho tất cả sản phẩm không?",
      answer:
        "Không, đăng ký BIS chỉ bắt buộc đối với các sản phẩm được liệt kê trong chương trình chứng nhận bắt buộc. Tuy nhiên, chứng nhận BIS tự nguyện cũng có sẵn để tăng uy tín sản phẩm.",
    },
    {
      question: "Giấy phép BIS có hiệu lực trong bao lâu?",
      answer:
        "Giấy phép BIS thường có hiệu lực từ một đến hai năm và phải được gia hạn trước khi hết hạn để tiếp tục sử dụng dấu ISI hoặc duy trì trạng thái đăng ký BIS.",
    },
    {
      question: "Các bước để có được chứng nhận BIS ở Ấn Độ là gì?",
      answer:
        "Quy trình chứng nhận BIS bao gồm xác định các tiêu chuẩn Ấn Độ áp dụng, nộp đơn, kiểm tra sản phẩm, thanh tra nhà máy, và cấp giấy chứng nhận BIS sau khi phê duyệt.",
    },
    {
      question:
        "Nhà sản xuất nước ngoài có thể nộp đơn xin giấy phép BIS không?",
      answer:
        "Có, theo Chương trình Chứng nhận Nhà sản xuất Nước ngoài (FMCS), các công ty nước ngoài có thể nộp đơn xin giấy phép BIS để bán sản phẩm ở Ấn Độ. Họ phải bổ nhiệm một Đại diện Ấn Độ được Ủy quyền (AIR).",
    },
    {
      question: "Vai trò của AIR trong chứng nhận BIS là gì?",
      answer:
        "AIR (Đại diện Ấn Độ được Ủy quyền) hoạt động như một người liên lạc giữa nhà sản xuất nước ngoài và BIS Ấn Độ. Họ chịu trách nhiệm về tài liệu, giao tiếp, và tuân thủ các yêu cầu chứng nhận BIS.",
    },
    {
      question: "Làm thế nào tôi có thể nộp đơn đăng ký BIS trực tuyến?",
      answer:
        "Bạn có thể nộp đơn đăng ký BIS trực tuyến thông qua cổng thông tin chính thức của BIS. Quy trình bao gồm nộp biểu mẫu, tải lên tài liệu, báo cáo kiểm tra, và thanh toán phí.",
    },
    {
      question: "Những tài liệu nào được yêu cầu cho giấy chứng nhận BIS?",
      answer:
        "Tài liệu cần thiết bao gồm giấy phép kinh doanh, thông số kỹ thuật sản phẩm, quy trình sản xuất, báo cáo kiểm tra phòng thí nghiệm, bố trí nhà máy, sổ tay chất lượng, và biểu mẫu ủy quyền (cho nhà sản xuất nước ngoài).",
    },
    {
      question: "Chi phí chứng nhận BIS ở Ấn Độ là bao nhiêu?",
      answer:
        "Chi phí chứng nhận BIS phụ thuộc vào loại sản phẩm, yêu cầu kiểm tra, loại chương trình (ISI, CRS, FMCS), và liệu người nộp đơn là trong nước hay nước ngoài. Chi phí bao gồm phí đăng ký, phí kiểm tra, và chi phí thanh tra.",
    },
    {
      question:
        "Dấu ISI có bắt buộc cho tất cả sản phẩm được chứng nhận BIS không?",
      answer:
        "Không, chỉ các sản phẩm dưới chương trình ISI được yêu cầu mang dấu ISI. Các sản phẩm dưới chương trình CRS hoặc Hallmarking tuân theo các giao thức dán nhãn khác nhau theo quy chuẩn đăng ký BIS.",
    },
    {
      question:
        "Tôi có thể có được chứng nhận BIS cho sản phẩm thân thiện với môi trường không?",
      answer:
        "Có, các sản phẩm đáp ứng tiêu chuẩn môi trường có thể có được chứng nhận BIS theo chương trình Eco Mark, điều này đảm bảo tuân thủ các tiêu chuẩn Ấn Độ về an toàn môi trường.",
    },
    {
      question: "Sự khác biệt giữa chứng nhận BIS và đăng ký BIS là gì?",
      answer:
        "Chứng nhận BIS thường đề cập đến việc phê duyệt theo các chương trình ISI, FMCS, hoặc Hallmarking, trong khi đăng ký BIS thường được liên kết với chương trình CRS cho sản phẩm điện tử.",
    },
    {
      question: "Chương trình Đăng ký Bắt buộc (CRS) là gì?",
      answer:
        "CRS là chương trình đăng ký BIS cho hàng hóa IT và điện tử như đèn LED, điện thoại di động, và power banks. Nó đảm bảo sự tuân thủ sản phẩm với các tiêu chuẩn Ấn Độ liên quan đến an toàn.",
    },
    {
      question:
        "Dấu ISI và giấy chứng nhận BIS có nghĩa là cùng một thứ không?",
      answer:
        "Không hoàn toàn. Dấu ISI là biểu tượng được cấp cho các sản phẩm được chứng nhận theo chương trình chứng nhận BIS. Giấy chứng nhận BIS là tài liệu pháp lý được cấp cho nhà sản xuất.",
    },
    {
      question: "Một giấy phép BIS có thể bao gồm nhiều sản phẩm không?",
      answer:
        "Không, một giấy phép BIS riêng biệt được yêu cầu cho mỗi loại sản phẩm và mỗi địa điểm sản xuất, ngay cả khi các sản phẩm tương tự.",
    },
    {
      question: "Điều gì xảy ra nếu tôi bán sản phẩm không có chứng nhận BIS?",
      answer:
        "Bán các sản phẩm yêu cầu chứng nhận BIS mà không có giấy phép BIS hợp lệ là bất hợp pháp ở Ấn Độ và có thể dẫn đến tiền phạt, thu hồi sản phẩm, hoặc lệnh cấm.",
    },
    {
      question: "Mất bao lâu để có được chứng nhận BIS?",
      answer:
        "Quy trình chứng nhận BIS thường mất từ 30 đến 90 ngày, tùy thuộc vào loại sản phẩm, yêu cầu kiểm tra, và liệu người nộp đơn là trong nước hay nước ngoài.",
    },
    {
      question: "Chứng nhận BIS có được chấp nhận trên toàn cầu không?",
      answer:
        "Mặc dù chứng nhận BIS dành riêng cho Ấn Độ, nó tăng cường uy tín toàn cầu bằng cách thể hiện sự tuân thủ các tiêu chuẩn Ấn Độ nghiêm ngặt. Một số sản phẩm được chứng nhận BIS cũng được chấp nhận theo các thỏa thuận công nhận lẫn nhau.",
    },
    {
      question: "Tôi cần gia hạn giấy phép BIS bao lâu một lần?",
      answer:
        "Giấy phép BIS phải được gia hạn hàng năm hoặc hai năm một lần. Các nhà sản xuất phải duy trì tuân thủ các tiêu chuẩn Ấn Độ và vượt qua các cuộc kiểm tra giám sát để gia hạn giấy chứng nhận BIS của họ.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Câu hỏi Thường gặp"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Câu hỏi Thường gặp – Chứng nhận BIS ở Ấn Độ
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Không tìm thấy câu trả lời bạn đang tìm?{" "}
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
    // {
    //   code: "vi",
    //   name: "Vietnamese",
    //   flag: "https://flagcdn.com/w320/vn.png",
    //   path: "/vi/chung-chi-bis-la-gi-bis-an-do",
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
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Dịch vụ của Chúng tôi
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Tư vấn Chứng nhận Tốt nhất Ấn Độ
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
                src={BISCRS}
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
                src={PlasticWasteManagement}
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
                src={EPRCertificate}
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Chứng nhận Giấy chứng nhận EPR
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
              Chứng nhận Giấy chứng nhận LMPC
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
              Giấy chứng nhận Đăng ký BIS
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
              DẤU ISI MARK (BIS) cho Nhà sản xuất Ấn Độ
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
