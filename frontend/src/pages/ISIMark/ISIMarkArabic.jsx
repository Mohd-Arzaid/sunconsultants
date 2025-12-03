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
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
import { ISIMarkAndBISCommonTable as ISIMarkAndBISCommonTableArabic } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableArabic";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterArabic from "@/components/manual/Footer/FooterArabic";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkArabic = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableArabic />
      </div>
      <LanguageSelector />
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterArabic />
    </div>
  );
};

export default ISIMarkArabic;

const ISIMarkMetaTags = () => {
  const title = "عملية اعتماد BIS ISI Mark والمستندات والرسوم";
  const description =
    "شهادة علامة ISI الصادرة عن مكتب المعايير الهندية تُمنح للمنتجات التي تخضع لاختبارات وفحوصات صارمة لتلبية المعايير والمتطلبات المطلوبة.";
  const keywords =
    "علامة ISI، شهادة علامة ISI، شهادة ISI، اعتماد ISI، تسجيل علامة ISI، ترخيص ISI، BIS ISI Mark";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher = "دهروف أغروال، رئيس العمليات في Sun Certification India";

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
                    <Link to="/">الصفحة الرئيسية</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    عملية اعتماد BIS ISI Mark والمستندات والرسوم
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
              خبرة معتمدة
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              اعتماد BIS لـ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            المصنعين الهنود
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            كجزء من رؤية "اصنع في الهند"، يساعد اعتماد BIS المصنعين على ضمان
            سلامة المنتجات وجودتها والامتثال. احصل على الاعتماد ونمِّ علامتك
            التجارية بثقة.
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
                عرض الخدمات
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
    if (path.includes("/ar/dalil-shahadat-bis-bis-alhind"))
      return "ISI Mark - Arabic Page";
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
        title: "يرجى إدخال اسم كامل صحيح.",
        description: "يجب أن يحتوي الاسم على أحرف ومسافات فقط.",
      });
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
        description: "تحقق من صحة تنسيق بريدك الإلكتروني",
      });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "يرجى إدخال رقم هاتف صحيح",
        description: "يجب أن يحتوي رقم الهاتف على (8-15 رقم)",
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
        title: "تم إرسال نموذج الاتصال بنجاح!",
        description: "شكراً لتواصلك معنا. سيتواصل فريقنا معك قريباً.",
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
      const errorMessage = error.response?.data?.message || "حدث خطأ ما";
      toast({
        variant: "destructive",
        title: errorMessage || "تعذر إرسال تفاصيل نموذج الاتصال!",
        description: "حدث خطأ ما. يرجى التحقق من التفاصيل والمحاولة مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          اتصل بنا
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        احجز موعداً
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        هل ترغب في التواصل مع فريقنا وتحديد موعد مكالمة؟
        <span className="text-black"> جرّب الآن</span>
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
            placeholder="الاسم الكامل *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="عنوان البريد الإلكتروني *"
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
            placeholder="رقم الاتصال *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="اسم الشركة *"
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
            placeholder="اسم المنتج *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="شهادة مطلوبة *"
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
              <span>جاري الإرسال</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>احجز الموعد</span>
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
    overview: "نظرة عامة",
    requirement: "المتطلبات",
    documents: "الوثائق",
    conclusion: "الخلاصة",
    faqs: "الأسئلة الشائعة",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <ServicesRightSideContentArabic />
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
        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">نظرة عامة</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        مخططات شهادة BIS في الهند
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
        في ديناميكيات السوق الحالية، تعد سمعة العلامة التجارية وثقة المستهلك ذات
        أهمية كبيرة. يرغب كل مستهلك في الاطمئنان إلى سلامة المنتج وموثوقيته،
        جنباً إلى جنب مع خطوات مراقبة الجودة التي يتم اتخاذها أثناء التصنيع.
        يتولى مكتب المعايير الهندية معالجة هذه القضايا لضمان معايير جودة
        للمنتجات المباعة في الهند. تعد شهادة علامة ISI واحدة من أكثر الشهادات
        المرموقة ضمن BIS.
      </p>
      <p className="service-left-content-paragraph">
        بالنسبة للمصنعين المحليين، فإن الحصول على شهادة BIS ISI Mark لا يتعلق
        فقط بالحصول على شهادة الامتثال، بل يتعلق أيضاً بقبول السوق وثقة العلامة
        التجارية والحماية القانونية. تُعترف علامة ISI عالمياً وتعزز المصداقية في
        الهند في ما يتعلق بإنتاج الأجهزة الكهربائية ومواد البناء والمواد
        الكيميائية أو السلع المنزلية.
      </p>
      <p className="service-left-content-paragraph">
        يهدف هذا المقال إلى استكشاف شهادة BIS ISI Mark للمصنعين المحليين، مع
        التركيز على الأهمية والمتطلبات والمزايا والعملية الكاملة للحصول على
        الشهادة.
      </p>
      <h2 className="service-left-content-heading-three">فهم BIS ودوره</h2>
      <p className="service-left-content-paragraph">
        مكتب المعايير الهندية (BIS) هو هيئة التقييس والاعتماد الوطنية في الهند
        تحت وزارة شؤون المستهلكين. كهيئة تنظيمية، فهو يضع ويطبق معايير الجودة في
        الصناعات المختلفة وفقاً لقانون BIS لعام 1986.
      </p>
      <p className="service-left-content-paragraph">
        يعمل BIS كجهة تحقق طرف ثالث تراجع مدى مطابقة المنتج للمعايير الهندية
        المحددة. توفر شهادة BIS للمصنعين متطلبات قانونية وعلامة قبول وثقة من
        العملاء.
      </p>
      <h2 className="service-left-content-heading-three">ما هي علامة ISI؟</h2>
      <p className="service-left-content-paragraph">
        تُعد علامة ISI (معهد المعايير الهندية) أقدم علامة اعتماد وأكثرها
        اعترافاً من BIS في الهند. تركز شهادة ISI على التأكيد بأن المنتج يستوفي
        المتطلبات الأساسية لمعايير الجودة المتعلقة بالسلامة والجودة والأداء
        والاعتمادية.
      </p>
      <p className="service-left-content-paragraph">
        تمر المنتجات الحاملة لعلامة ISI باختبارات معملية صارمة وتفتيشات للمصانع.
        وهذا يضمن تطبيق ومتابعة إجراءات صارمة لمراقبة الجودة أثناء الإنتاج.
      </p>
      <p className="service-left-content-paragraph">
        أمثلة لبعض المنتجات التي تتطلب شهادة ISI الإلزامية:
      </p>
      <PointsListWithoutHeading
        points={[
          "جميع أنواع الأجهزة (مكاوي كهربائية، سخانات كهربائية، أسلاك كهربائية، ثلاجات، مكيفات)",
          "الأسمنت والصلب، أنابيب UPVC، الأحذية البلاستيكية ومنتجات البلاستيك الأخرى",
          "الأسمدة والمواد الكيميائية والأحماض",
          "خوذات ونظارات السلامة وبعض أنواع ألعاب الأطفال",
        ]}
      />
      <p className="service-left-content-paragraph">
        هناك أكثر من 650 منتجاً تتطلب شهادة BIS الإلزامية لاستخدام العلامة
        القياسية (ISI) ضمن المخطط الأول من BIS. لا يمكن تصنيع أو استيراد أو بيع
        المنتجات الخاضعة لمخطط الاعتماد الإلزامي في السوق الهندية دون علامة ISI.
        يمكن الوصول إلى قائمة المنتجات الإلزامية من خلال{" "}
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
          رابط قائمة المنتجات
        </a>
        .
      </p>
      <h2 className="service-left-content-heading-three">
        ما الفرق بين شهادة BIS وعلامة ISI؟
      </h2>
      <p className="service-left-content-paragraph">
        على الرغم من الخلط بينهما غالباً، إلا أن لكل منهما تعريفاً وغرضاً
        محددين:
      </p>
      <p className="service-left-content-paragraph">
        <strong>شهادة BIS:</strong> هي عملية منح الموافقة على المنتج بعد التأكد
        من مطابقته للمعايير الهندية المطلوبة؛ وهي الإطار الذي تُدار ضمنه تقييمات
        المطابقة.
      </p>
      <p className="service-left-content-paragraph">
        <strong>علامة ISI:</strong> رمز الجودة أو العلامة القياسية التي تُمنح
        للمنتج بعد الحصول على شهادة BIS، وتشير إلى أن المنتج معتمد تماماً ويلبي
        المعايير الهندية اللازمة.
      </p>
      <p className="service-left-content-paragraph">
        بذلك تشكل ISI الالتزام القابل للتصديق مادياً، بينما توفر شهادة BIS
        الإطار الإداري المطلوب.
      </p>
      <h2 className="service-left-content-heading-three">
        لماذا تعتبر شهادة BIS ISI Mark مهمة للمصنعين؟
      </h2>
      <p className="service-left-content-paragraph">
        تُعد شهادة BIS ISI Mark ذات قيمة كبيرة للمصنعين المحليين، مثل:
      </p>
      <p className="service-left-content-paragraph">
        <strong>1. ضمان الجودة:</strong> تشير علامة ISI إلى اجتياز اختبارات
        صارمة، مما يعزز الاعتمادية ويقلل العيوب.
      </p>
      <p className="service-left-content-paragraph">
        <strong>2. ثقة المستهلك:</strong> تُعتبر المنتجات الحاملة لعلامة ISI
        آمنة وفعّالة، مما يعزز الولاء للعلامة التجارية.
      </p>
      <p className="service-left-content-paragraph">
        <strong>3. الوصول إلى السوق:</strong> في السوق الهندية توجد منتجات تُحظر
        دون شهادة ISI صالحة؛ وتعد علامة ISI بوابة للبيع.
      </p>
      <p className="service-left-content-paragraph">
        <strong>4. ميزة تنافسية:</strong> تتمتع المنتجات المعتمدة بسمعة أفضل
        وبالتالي أفضلية تنافسية.
      </p>
      <p className="service-left-content-paragraph">
        <strong>5. الامتثال التنظيمي:</strong> يضمن اتباع معايير BIS سير
        العمليات بسلاسة دون تعقيدات قانونية.
      </p>
      <p className="service-left-content-paragraph">
        <strong>6. تعزيز التصدير:</strong> تُفضَّل المنتجات المعتمدة ذات السمعة
        القوية في الأسواق الخارجية.
      </p>
      <p className="service-left-content-paragraph">
        <strong>7. سلامة المستهلك:</strong> تضمن الشهادة سلامة المستهلك من
        المخاطر والحوادث وضعف الأداء.
      </p>
      <p className="service-left-content-paragraph">
        <strong>8. مراقبة الجودة:</strong> تضمن الفحوصات المستمرة ثبات جودة
        الدُفعات المنتجة.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">المتطلبات</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        المتطلبات الأساسية لشهادة BIS ISI Mark
      </h2>
      <p className="service-left-content-paragraph">
        للحصول على شهادة BIS، يجب على المصنعين المحليين الالتزام بما يلي:
      </p>
      <PointsListWithoutHeading
        points={[
          "الامتثال لمواصفة المعيار الهندي (ISS)",
          "يُصدر الترخيص للمصنعين فقط وليس للموزعين أو بائعي التجزئة",
          "يلزم تقديم طلبات منفصلة لكل موقع مصنع",
          "امتلاك أفراد مؤهلين ومختبرات اختبار داخلية",
          "يجب إجراء جميع عمليات الإنتاج داخل نفس وحدة التصنيع (ويستلزم الاستعانة الخارجية موافقة مسبقة من BIS)",
          "إرشادات فنية مفصلة في أدلة المنتجات للفحص والاختبار والوثائق اللازمة",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        عملية شهادة BIS ISI للمصنعين المحليين
      </h2>
      <p className="service-left-content-paragraph">
        هناك طريقتان: الإجراء العادي والإجراء المبسط.
      </p>
      <div className="service-left-content-heading-three">
        1. الإجراء العادي (60–65 يوماً)
      </div>
      <PointsListWithoutHeading
        points={[
          "إنشاء مختبرات داخلية ومواءمة المنتجات مع المعايير الهندية",
          "تقديم الطلب مع المستندات المطلوبة",
          "تفتيش المصنع من مسؤولي BIS",
          "اختبار المنتجات في مختبرات معتمدة من BIS",
          "منح الترخيص عند استيفاء الشروط",
        ]}
      />
      <div className="service-left-content-heading-three">
        2. الإجراء المبسط (35–40 يوماً)
      </div>
      <PointsListWithoutHeading
        points={[
          "تقديم مستندات لمنتجات مختبرة مسبقاً من مختبرات معترف بها من BIS",
          "تقديم الطلب مع الرسوم",
          "مراجعة المستندات وتفتيش المصنع",
          "الاختبار النهائي ومنح الترخيص خلال 35–40 يوماً",
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
          الوثائق المطلوبة
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        الوثائق المطلوبة لشهادة علامة ISI
      </h2>
      <p className="service-left-content-paragraph">
        على المصنعين تقديم ما يلي:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. استمارة طلب مكتملة (النموذج V أو VI حسب المخطط)",
          "2. شهادة تسجيل الأعمال (مثل Udyam، MSME، شهادة GST)",
          "3. رخصة المصنع أو رخصة التجارة البلدية",
          "4. قائمة آلات التصنيع",
          "5. مخطط انسيابي لعملية التصنيع",
          "6. مخطط موقع منشأة التصنيع",
          "7. تفاصيل موظفي ضبط الجودة الداخلي",
          "8. تفاصيل معدات الاختبار",
          "9. اتفاقية تعاون فني (إن وجدت)",
          "10. توكيل/خطاب تفويض",
          "11. خطاب تفويض العلامة التجارية (إذا كان التقديم تحت علامة مختلفة)",
          "12. تقرير اختبار من مختبر معتمد من BIS",
          "13. فاتورة شراء المواد الخام",
          "14. صور المنتج والتعبئة",
          "15. إعلان المطابقة للمعايير",
          "16. تعهد بخصوص المنتجات غير المطابقة",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        فوائد شهادة BIS ISI Mark
      </h3>
      <p className="service-left-content-paragraph">
        للمصنعين الهنود فوائد محددة، منها:
      </p>
      <PointsListWithoutHeading
        points={[
          "التصريح بالبيع في جميع أنحاء البلاد",
          "تجنب الغرامات والمشكلات القانونية",
          "زيادة الإيرادات بسبب ارتفاع الطلب",
          "إمكانات تصدير أفضل",
          "تركيز على الجودة وإظهار الالتزام",
        ]}
      />
      <h3 className="service-left-content-heading-three">إلغاء ترخيص BIS</h3>
      <p className="service-left-content-paragraph">
        قد يتم إلغاء الترخيص إذا:
      </p>
      <PointsListWithoutHeading
        points={[
          "انخفضت جودة المنتجات المعتمدة",
          "أسيء استخدام علامة ISI من قبل المنتجين",
          "عدم الالتزام بجوانب معينة من الترخيص",
        ]}
      />
      <p className="service-left-content-paragraph">
        وفقاً للائحة 11 من لوائح BIS (تقييم المطابقة) 2018.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">الخلاصة</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">الخلاصة</h2>
      <p className="service-left-content-paragraph">
        لا تقتصر شهادة BIS ISI Mark على الإجراءات الإدارية فحسب، بل تُسهم أيضاً
        في بناء سمعة قوية وتحقيق نمو مستدام للأعمال. يضمن اتباع معايير BIS
        جاهزية المنتجات للبيع مع أعلى درجات الاعتمادية.
      </p>
      <p className="service-left-content-paragraph">
        أصبحت علامة ISI أكثر من مجرد امتثال قانوني؛ إنها رمز للثقة والميزة
        التنافسية في السوق إلى جانب الامتثال التنظيمي.
      </p>
      <p className="service-left-content-paragraph">
        بغض النظر عمّا إذا كنت تصنع منتجات إلكترونية أو مواد بناء أو غيرها، تضمن
        شهادة BIS ISI توافق منتجاتك مع أعلى المعايير الهندية مع حماية سمعتك
        ومستهلكيك.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "ما هي شهادة BIS ولماذا هي مهمة؟",
      answer:
        "تصدر شهادة BIS من مكتب المعايير الهندية لضمان امتثال المنتجات لمعايير السلامة والجودة الهندية. وهي ضرورية للامتثال القانوني وثقة المستهلك وقبول السوق.",
    },
    {
      question: "ما الفرق بين رخصة BIS وعلامة ISI؟",
      answer:
        "رخصة BIS هي وثيقة قانونية تسمح للمصنع باستخدام علامة ISI. علامة ISI هي الملصق الظاهر على المنتجات الذي يشير إلى شهادة BIS.",
    },
    {
      question: "كم يستغرق الحصول على شهادة BIS؟",
      answer:
        "عادةً 6–10 أسابيع حسب نوع المنتج ومتطلبات الاختبار ونتائج التدقيق.",
    },
    {
      question: "ما مدة صلاحية رخصة BIS؟",
      answer:
        "عادة من سنة إلى سنتين، وبعدها يجب تجديدها. يُفضّل البدء قبل 30 يوماً على الأقل من الانتهاء.",
    },
    {
      question: "ما تكلفة شهادة BIS؟",
      answer:
        "تختلف التكاليف وقد تتراوح بين ₹25,000 و₹100,000+ وتشمل رسوم الاختبار والتدقيق والترخيص.",
    },
    {
      question: "هل شهادة BIS إلزامية لجميع المنتجات؟",
      answer: "لا. هي إلزامية فقط للمنتجات المدرجة ضمن المخطط 1 من شهادة BIS.",
    },
    {
      question: "كيف أجد معيار IS المناسب لمنتجي؟",
      answer:
        "قم بزيارة موقع BIS أو استشر مختبرات اختبار معترف بها من BIS ومستشارين لتحديد المعيار المناسب.",
    },
    {
      question: "هل يمكن للمصنّعين الأجانب التقدم لشهادة BIS؟",
      answer:
        "نعم. من خلال برنامج شهادة المصنّعين الأجانب (FMCS) يمكن للجهات الخارجية الحصول على رخصة BIS لاستخدام علامة ISI.",
    },
    {
      question: "ماذا يحدث إذا فشل منتجي في اختبارات BIS؟",
      answer:
        "ستحتاج إلى تصحيح المشكلات وإعادة التقديم للاختبار؛ قد يُعلّق الطلب حتى تحقيق الامتثال بنجاح.",
    },
    {
      question: "هل تُطلب شهادة BIS للتصدير؟",
      answer:
        "ليست مطلوبة دائماً للتصدير، لكنها تعزز المصداقية وقد تفي بمتطلبات المشترين أو الجهات التنظيمية الدولية.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="الأسئلة الشائعة"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          لم تجد الإجابة التي تبحث عنها؟{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            تواصل معنا!
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
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-isi-mark-injeung",
    },
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
    // {
    //   code: "ar",
    //   name: "Arabic",
    //   flag: "https://flagcdn.com/w320/sa.png",
    //   path: "/ar/dalil-shahadat-bis-bis-alhind",
    // },
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
              خدماتنا
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                أفضل مستشاري الشهادات في الهند
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
              علامة BIS (ترخيص ISI) للمصنعين الأجانب
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
              شهادة تسجيل CDSCO
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
              تسجيل BIS (CRS)
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
              إدارة نفايات البلاستيك
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
              شهادات EPR
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
              شهادات LMPC
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
              شهادة تسجيل BIS
            </p>
          </Link>
          <Link
            to="/ar/shahadat-bis-isi-mark"
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
              ISI MARK (BIS) للمصنعين الهنود
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
