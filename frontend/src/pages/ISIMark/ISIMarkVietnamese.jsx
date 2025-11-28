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
import ServicesRightSideContentVietnamese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentVietnamese";
import ServiceAuthorVietnamese from "@/components/manual/ServiceAuthor/ServiceAuthorVietnamese";
import { ISIMarkAndBISCommonTable as ISIMarkAndBISCommonTableVietnamese } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableVietnamese";
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

const ISIMarkVietnamese = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableVietnamese />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterVietnamese />
    </div>
  );
};

export default ISIMarkVietnamese;

const ISIMarkMetaTags = () => {
  const title = "Quy trình chứng nhận BIS ISI Mark, Tài liệu, Phí";
  const description =
    "Chứng nhận dấu ISI do Cục Tiêu chuẩn Ấn Độ cấp cho các sản phẩm trải qua thử nghiệm và kiểm tra nghiêm ngặt để đáp ứng các tiêu chuẩn và quy định.";
  const keywords =
    "ISI Mark, Chứng nhận ISI Mark, Giấy chứng nhận ISI, Chứng nhận ISI, Đăng ký ISI Mark, Giấy phép ISI, BIS ISI Mark";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Trưởng phòng Vận hành tại Sun Certification India";

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
                    <Link to="/">Trang chủ</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Quy trình chứng nhận BIS ISI Mark, Tài liệu, Phí
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
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Chuyên môn được chứng nhận
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Chứng nhận BIS cho
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Nhà sản xuất Ấn Độ
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Là một phần của tầm nhìn 'Make in India', chứng nhận BIS giúp các
            nhà sản xuất đảm bảo an toàn sản phẩm, chất lượng và tuân thủ. Hãy
            được chứng nhận và phát triển thương hiệu của bạn với sự tự tin.
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
                Xem dịch vụ
              </span>
            </div>
          </div>
        </div>

        <ISIMarkContactForm />
      </div>
    </section>
  );
};

const ISIMarkContactForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/vi/chung-nhan-bis-isi-mark"))
      return "ISI Mark - Vietnamese Page";
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

    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Gửi biểu mẫu thành công!",
        description:
          "Cảm ơn bạn đã liên hệ với chúng tôi. Đội ngũ sẽ sớm phản hồi.",
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
        title: errorMessage || "Gửi biểu mẫu thất bại!",
        description: "Vui lòng kiểm tra thông tin của bạn và thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Liên hệ
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Đặt lịch hẹn
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Muốn liên hệ với đội ngũ của chúng tôi và đặt lịch gọi?
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
            placeholder="Chứng nhận yêu cầu *"
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
    overview: "Tổng quan",
    requirement: "Yêu cầu",
    documents: "Tài liệu",
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = [
        "overview",
        "requirement",
        "documents",
        "conclusion",
        "faqs",
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
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
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={() => setIsMobileMenuOpen((p) => !p)}
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

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {Object.keys(MENU_ITEMS).map((itemKey) => (
              <div
                key={itemKey}
                onClick={() => handleItemClick(itemKey)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  itemKey === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {MENU_ITEMS[itemKey]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {Object.keys(MENU_ITEMS).map((itemKey) => (
          <div
            key={itemKey}
            onClick={() => handleItemClick(itemKey)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                itemKey === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[itemKey]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                itemKey === activeSection
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
          <ISIMarkContentLeft />
          <ServicesRightSideContentVietnamese />
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
        <ServiceAuthorVietnamese />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Tổng quan</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Chứng nhận BIS ISI Mark cho Nhà sản xuất Ấn Độ
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Indian Bis Certification Schemes"
          title="BIS License Scheme"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        Trong bối cảnh thị trường hiện nay, danh tiếng thương hiệu và niềm tin
        của người tiêu dùng có vai trò rất quan trọng. Người tiêu dùng muốn đảm
        bảo về an toàn và độ tin cậy của sản phẩm, cùng với các bước kiểm soát
        chất lượng trong quá trình sản xuất. Cục Tiêu chuẩn Ấn Độ (BIS) giải
        quyết các vấn đề này và đảm bảo các chuẩn mực chất lượng cho sản phẩm
        bán tại Ấn Độ. Chứng nhận ISI là một trong những chứng chỉ uy tín nhất
        thuộc BIS.
      </p>
      <p className="service-left-content-paragraph">
        Đối với nhà sản xuất trong nước, nhận Chứng nhận BIS ISI Mark không chỉ
        là tuân thủ mà còn là sự chấp nhận của thị trường, củng cố niềm tin
        thương hiệu và bảo vệ pháp lý. Dấu ISI được công nhận rộng rãi và tăng
        cường uy tín tại Ấn Độ khi sản xuất thiết bị điện, vật liệu xây dựng,
        hóa chất hoặc hàng gia dụng.
      </p>
      <p className="service-left-content-paragraph">
        Bài viết này giới thiệu Chứng nhận BIS ISI Mark cho nhà sản xuất trong
        nước, tập trung vào tầm quan trọng, yêu cầu, lợi ích và toàn bộ quy
        trình.
      </p>
      <h2 className="service-left-content-heading-three">
        Hiểu về BIS và vai trò của nó
      </h2>
      <p className="service-left-content-paragraph">
        BIS là cơ quan Tiêu chuẩn hóa và Chứng nhận Quốc gia của Ấn Độ thuộc Bộ
        Các vấn đề Người tiêu dùng và Công cộng. Với vai trò cơ quan quản lý,
        BIS đặt ra và duy trì các tiêu chuẩn chất lượng và thực thi trong nhiều
        ngành theo Luật BIS 1986.
      </p>
      <p className="service-left-content-paragraph">
        BIS là cơ quan xác minh bên thứ ba đánh giá sản phẩm có đáp ứng các tiêu
        chuẩn Ấn Độ cụ thể hay không. Chứng nhận BIS không chỉ là yêu cầu pháp
        lý mà còn là dấu chứng nhận về lòng tin và uy tín từ khách hàng.
      </p>
      <h2 className="service-left-content-heading-three">Dấu ISI là gì?</h2>
      <p className="service-left-content-paragraph">
        Dấu ISI là chứng nhận lâu đời và được công nhận rộng rãi nhất của BIS.
        Chứng nhận này xác nhận sản phẩm đáp ứng các yêu cầu cơ bản về an toàn,
        chất lượng, hiệu suất và độ tin cậy theo tiêu chuẩn BIS.
      </p>
      <p className="service-left-content-paragraph">
        Sản phẩm mang dấu ISI đã trải qua kiểm thử phòng thí nghiệm và đánh giá
        nhà máy nghiêm ngặt, đảm bảo quy trình kiểm soát chất lượng được thực
        thi trong sản xuất. Dấu ISI là cầu nối niềm tin giữa người tiêu dùng và
        nhà sản xuất.
      </p>
      <p className="service-left-content-paragraph">
        Một số ví dụ sản phẩm bắt buộc chứng nhận ISI:
      </p>
      <PointsListWithoutHeading
        points={[
          "Thiết bị các loại (bàn ủi, bộ sưởi, dây điện, tủ lạnh, điều hòa)",
          "Xi măng và thép, ống UPVC, giày dép nhựa và sản phẩm nhựa khác",
          "Phân bón, hóa chất và axit",
          "Mũ và kính an toàn, cùng một số loại đồ chơi trẻ em",
        ]}
      />
      <p className="service-left-content-paragraph">
        Có hơn 650 sản phẩm yêu cầu chứng nhận BIS bắt buộc để sử dụng dấu chuẩn
        (ISI) theo Chương trình I, Phụ lục I của BIS. Danh sách sản phẩm bắt
        buộc có tại{" "}
        <a
          href="#product-table"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("product-table")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="text-blue-900 font-semibold hover:text-[#1A8781] uppercase transition-colors cursor-pointer"
        >
          liên kết Danh sách Sản phẩm
        </a>
        .
      </p>
      <h2 className="service-left-content-heading-three">
        Khác biệt giữa Chứng nhận BIS và Dấu ISI?
      </h2>
      <p className="service-left-content-paragraph">
        Mặc dù thường bị nhầm lẫn, hai khái niệm có định nghĩa và mục đích
        riêng:
      </p>
      <p className="service-left-content-paragraph">
        <strong>Chứng nhận BIS:</strong> Quy trình phê duyệt sản phẩm sau khi
        đảm bảo đáp ứng Tiêu chuẩn Ấn Độ; là khung đánh giá sự phù hợp.
      </p>
      <p className="service-left-content-paragraph">
        <strong>Dấu ISI:</strong> Biểu tượng chất lượng được cấp cho sản phẩm
        sau khi có chứng nhận BIS, thể hiện sản phẩm đáp ứng tiêu chuẩn Ấn Độ.
      </p>
      <p className="service-left-content-paragraph">
        Nói cách khác, ISI là cam kết hữu hình; BIS cung cấp khung quản trị.
      </p>
      <h2 className="service-left-content-heading-three">
        Tại sao Chứng nhận BIS ISI Mark quan trọng?
      </h2>
      <p className="service-left-content-paragraph">
        Một số lợi ích cho nhà sản xuất trong nước:
      </p>
      <p className="service-left-content-paragraph">
        <strong>1. Đảm bảo chất lượng:</strong> Vượt qua thử nghiệm nghiêm ngặt,
        giảm lỗi.
      </p>
      <p className="service-left-content-paragraph">
        <strong>2. Niềm tin người tiêu dùng:</strong> Tăng trung thành và uy tín
        thương hiệu.
      </p>
      <p className="service-left-content-paragraph">
        <strong>3. Truy cập thị trường:</strong> Dấu ISI là chìa khóa bán hàng
        với các mặt hàng bắt buộc.
      </p>
      <p className="service-left-content-paragraph">
        <strong>4. Lợi thế cạnh tranh:</strong> Nâng cao danh tiếng trong môi
        trường cạnh tranh.
      </p>
      <p className="service-left-content-paragraph">
        <strong>5. Tuân thủ quy định:</strong> Hoạt động trơn tru, hạn chế rủi
        ro pháp lý.
      </p>
      <p className="service-left-content-paragraph">
        <strong>6. Thúc đẩy xuất khẩu:</strong> Tăng ưu thế trên thị trường quốc
        tế.
      </p>
      <p className="service-left-content-paragraph">
        <strong>7. An toàn người tiêu dùng:</strong> Bảo vệ khỏi rủi ro, tai
        nạn, hiệu năng kém.
      </p>
      <p className="service-left-content-paragraph">
        <strong>8. Kiểm soát chất lượng:</strong> Kiểm tra thường xuyên đảm bảo
        chất lượng ổn định.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Yêu cầu</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Yêu cầu cơ bản để được chứng nhận BIS ISI Mark
      </h2>
      <p className="service-left-content-paragraph">
        Để được chứng nhận BIS, nhà sản xuất cần đáp ứng:
      </p>
      <PointsListWithoutHeading
        points={[
          "Tuân thủ Tiêu chuẩn Ấn Độ (ISS)",
          "Giấy phép chỉ cấp cho nhà sản xuất, không cho nhà phân phối/ bán lẻ",
          "Nộp hồ sơ riêng cho từng địa điểm nhà máy",
          "Có nhân sự phù hợp và phòng thí nghiệm nội bộ",
          "Sản xuất trong cùng nhà máy, từ nguyên liệu đến đóng gói cuối (gia công ngoài phải được BIS phê duyệt trước)",
          "Hướng dẫn kỹ thuật trong Sổ tay Sản phẩm cho kiểm tra, thử nghiệm và tài liệu",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Quy trình chứng nhận BIS ISI cho nhà sản xuất nội địa
      </h2>
      <p className="service-left-content-paragraph">
        Có hai thủ tục: Thông thường và Đơn giản hóa.
      </p>
      <h3 className="service-left-content-heading-three">
        1. Thông thường (60-65 ngày)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Thiết lập PTN nội bộ, sản phẩm phù hợp tiêu chuẩn Ấn Độ",
          "Nộp hồ sơ cùng tài liệu",
          "BIS kiểm tra nhà máy",
          "Thử nghiệm tại PTN được BIS phê duyệt",
          "Cấp giấy phép khi đạt đủ điều kiện",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        2. Đơn giản hóa (35-40 ngày)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Nộp tài liệu sản phẩm đã thử nghiệm từ PTN được BIS công nhận",
          "Nộp hồ sơ và lệ phí",
          "Rà soát tài liệu và kiểm tra nhà máy",
          "Thử nghiệm cuối và cấp phép trong 35-40 ngày",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Tài liệu cần thiết
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Tài liệu cần cho Chứng nhận Dấu ISI
      </h2>
      <p className="service-left-content-paragraph">
        Nhà sản xuất cần cung cấp:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Đơn đăng ký (Mẫu V hoặc VI tùy chương trình)",
          "2. Giấy đăng ký kinh doanh (Udyam, MSME, GST...)",
          "3. Giấy phép nhà máy hoặc giấy phép thương mại đô thị",
          "4. Danh sách máy móc sản xuất",
          "5. Lưu đồ quy trình sản xuất",
          "6. Sơ đồ mặt bằng cơ sở sản xuất",
          "7. Thông tin nhân sự QC nội bộ",
          "8. Thông tin thiết bị thử nghiệm",
          "9. Hợp đồng hợp tác kỹ thuật (nếu có)",
          "10. Giấy ủy quyền/Thư ủy quyền",
          "11. Thư ủy quyền nhãn hiệu (nếu đăng ký dưới nhãn khác)",
          "12. Báo cáo thử nghiệm từ PTN được BIS phê duyệt",
          "13. Hóa đơn mua nguyên liệu",
          "14. Ảnh sản phẩm và bao bì",
          "15. Tuyên bố phù hợp tiêu chuẩn",
          "16. Cam kết về sản phẩm không tiêu chuẩn",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Lợi ích của Chứng nhận BIS ISI Mark
      </h3>
      <p className="service-left-content-paragraph">Một số lợi ích chính:</p>
      <PointsListWithoutHeading
        points={[
          "Được phép bán trên toàn quốc",
          "Tránh phạt và rủi ro pháp lý",
          "Tăng doanh thu nhờ nhu cầu cao",
          "Tiềm năng xuất khẩu tốt hơn",
          "Tập trung chất lượng, thể hiện cam kết",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Thu hồi Giấy phép BIS
      </h3>
      <p className="service-left-content-paragraph">BIS có thể thu hồi nếu:</p>
      <PointsListWithoutHeading
        points={[
          "Chất lượng sản phẩm suy giảm",
          "Sử dụng sai dấu ISI",
          "Không tuân thủ điều khoản giấy phép",
        ]}
      />
      <p className="service-left-content-paragraph">
        Theo Quy định 11 của Quy định Đánh giá Sự phù hợp BIS 2018.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kết luận</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">Kết luận</h2>
      <p className="service-left-content-paragraph">
        Chứng nhận BIS ISI Mark không chỉ là thủ tục hành chính mà còn góp phần
        xây dựng uy tín và tăng trưởng bền vững. Tuân thủ tiêu chuẩn BIS đảm bảo
        sản phẩm sẵn sàng đưa ra thị trường.
      </p>
      <p className="service-left-content-paragraph">
        Dấu ISI đã trở thành biểu tượng đảm bảo trong môi trường kinh doanh đòi
        hỏi niềm tin cao, thể hiện năng lực cạnh tranh và tuân thủ quy định.
      </p>
      <p className="service-left-content-paragraph">
        Dù bạn sản xuất điện tử, vật liệu xây dựng hay sản phẩm khác, chứng nhận
        BIS ISI đảm bảo phù hợp tiêu chuẩn hàng đầu của Ấn Độ và bảo vệ danh
        tiếng, người tiêu dùng của bạn.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "Chứng nhận BIS là gì và tại sao quan trọng?",
      answer:
        "Chứng nhận BIS đảm bảo sản phẩm tuân thủ tiêu chuẩn an toàn và chất lượng Ấn Độ; quan trọng cho tuân thủ pháp lý, niềm tin người tiêu dùng và chấp nhận thị trường.",
    },
    {
      question: "Khác biệt giữa giấy phép BIS và dấu ISI?",
      answer:
        "Giấy phép BIS cho phép sử dụng dấu ISI; dấu ISI là nhãn hiển thị chứng nhận BIS trên sản phẩm.",
    },
    {
      question: "Mất bao lâu để có chứng nhận BIS?",
      answer:
        "Thường 6–10 tuần tùy loại sản phẩm, yêu cầu thử nghiệm, và đánh giá.",
    },
    {
      question: "Hiệu lực giấy phép BIS?",
      answer:
        "Thường 1–2 năm, sau đó cần gia hạn; nên bắt đầu ít nhất 30 ngày trước khi hết hạn.",
    },
    {
      question: "Chi phí chứng nhận BIS?",
      answer:
        "Biến thiên: ~₹25,000 đến ₹100,000+, gồm phí thử nghiệm, đánh giá, và giấy phép.",
    },
    {
      question: "Có bắt buộc cho mọi sản phẩm?",
      answer:
        "Không. Chỉ bắt buộc với các sản phẩm trong Chương trình 1 của BIS.",
    },
    {
      question: "Tìm tiêu chuẩn IS phù hợp bằng cách nào?",
      answer:
        "Xem website BIS hoặc tư vấn PTN/đơn vị tư vấn được BIS công nhận.",
    },
    {
      question: "Nhà sản xuất nước ngoài có thể xin chứng nhận BIS?",
      answer:
        "Có. Theo FMCS, tổ chức nước ngoài có thể nhận giấy phép BIS để sử dụng dấu ISI.",
    },
    {
      question: "Nếu sản phẩm trượt thử nghiệm BIS?",
      answer:
        "Cần khắc phục và thử nghiệm lại; hồ sơ có thể tạm dừng tới khi đạt yêu cầu.",
    },
    {
      question: "Có cần cho xuất khẩu?",
      answer:
        "Không luôn bắt buộc, nhưng tăng uy tín và đáp ứng yêu cầu người mua/cơ quan quản lý quốc tế.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Câu hỏi thường gặp"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Câu hỏi thường gặp
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Không tìm thấy câu trả lời bạn cần?{" "}
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

const ISIMarkServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Dịch vụ của chúng tôi
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Tư vấn chứng nhận tốt nhất tại Ấn Độ
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
              Dấu BIS (Giấy phép ISI) cho Nhà sản xuất nước ngoài
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
                alt="BISCRS"
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
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Quản lý rác thải nhựa
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
              Chứng nhận EPR
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
              Chứng nhận LMPC
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
              Giấy chứng nhận đăng ký BIS
            </p>
          </Link>
          <Link
            to="/vi/chung-nhan-bis-isi-mark"
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
              ISI MARK (BIS) cho Nhà sản xuất Ấn Độ
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
