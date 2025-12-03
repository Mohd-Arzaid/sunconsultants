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
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
import { ISIMarkAndBISCommonTable } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableArabic";
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

const BISCertificationArabic = () => {
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
      <FooterArabic />
    </div>
  );
};

export default BISCertificationArabic;

const BISCertificationMetaTags = () => {
  const title = "أنواع شهادة BIS، العملية، المستندات، الرسوم";
  const description =
    "تشير شهادة BIS إلى عملية الحصول على شهادة معيار الجودة من مكتب المعايير الهندية (BIS) لتصنيع وبيع منتجات مختلفة في الهند.";
  const keywords =
    "شهادة BIS، عملية شهادة BIS، تسجيل BIS، عملية تسجيل BIS، مخطط شهادة BIS، مخطط شهادة المنتج، مخطط الشهادة الإلزامية، قائمة منتجات BIS الإلزامية، علامة ISI، BIS FMCS، مخطط BIS Hallmarking، مخطط Eco Mark، مستشار شهادة BIS، مستشار شهادة ISI، مستشار علامة BIS ISI، ما هي شهادة BIS، تنزيل شهادة BIS، تكلفة شهادة BIS، شهادة BIS الهند، النموذج الكامل لشهادة BIS، شهادة BIS الهند، شهادة BIS الهندية، معنى شهادة BIS، فحص شهادة BIS، ترخيص BIS عبر الإنترنت في الهند، شهادة BIS عبر الإنترنت، شهادة BIS، شهادة BIS عبر الإنترنت.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal، رئيس العمليات في Sun Certification India";

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
                    شهادة BIS الهند للمستوردين والشركات المصنعة
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
              الخبرة المعتمدة
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              شهادة BIS الهند
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            للمستوردين والشركات المصنعة
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            تضمن شهادة BIS جودة وسلامة المنتجات في الهند. إنها إلزامية للعديد من
            المنتجات وتتطلب الاختبار والتوثيق و الموافقة.
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
                عرض الخدمات
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
    if (path.includes("/ar/ma-huwa-shahadat-bis-bis-alhind"))
      return "BIS common (Arabic)";
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
        title: "يرجى إدخال اسم كامل صحيح.",
        description: "يجب أن يحتوي الاسم على أحرف ومسافات فقط.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
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

    // Phone number validation
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
        title: "تم إرسال نموذج الاتصال بنجاح!",
        description: "شكراً لتواصلك معنا. سيتواصل معك فريقنا قريباً.",
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
        title: errorMessage || "فشل في إرسال تفاصيل نموذج الاتصال!",
        description: "حدث خطأ ما. يرجى التحقق من تفاصيلك والمحاولة مرة أخرى.",
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
        تريد الاتصال بفريقنا وترتيب مكالمة؟
        <span className="text-black"> جرب الآن</span>
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
            placeholder="رقم الهاتف *"
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
            placeholder="الشهادة المطلوبة*"
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
              <span>احجز موعداً</span>
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
    overview: "نظرة عامة",
    schemes: "المخططات",
    process: "العملية",
    documents: "المستندات",
    cost: "التكلفة",
    air: "AIR",
    conclusion: "الخلاصة",
    faqs: "الأسئلة الشائعة",
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
          aria-label="تبديل القائمة"
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
        <ServicesRightSideContentArabic />
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
        <ServiceAuthorArabic />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">نظرة عامة</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        شهادة علامة BIS ISI للشركات المصنعة الهندية
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="شهادة BIS الهند"
          title="شهادة BIS للشركات المصنعة الهندية"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        المقدمة: لماذا تهم شهادة BIS
      </h2>

      <p className="service-left-content-paragraph">
        خذ على سبيل المثال، مصنعاً من ألمانيا اخترع جهازاً إلكترونياً فريداً
        ويخطط لبيعه في السوق الهندية سريعة النمو. الجهاز فريد وآمن وقد حصل أيضاً
        على الموافقات في أوروبا. ومع ذلك، عندما يُحضر الجهاز إلى الميناء في
        الهند، يوقف موظفو الجمارك الجهاز. السؤال هو، "لماذا؟" الإجابة هي، من
        المفترض أن يكون للجهاز شهادة BIS، وهي جزء حاسم لبيع المنتجات الإلكترونية
        في الهند.
      </p>

      <p className="service-left-content-paragraph">
        يتعامل العديد من الشركات المصنعة العالمية والهندية مع نفس الحالات كل
        عام. بالنسبة للمستهلكين الهنود، علامة BIS على المنتج ليست مجرد شعار، بل
        هي علامة ثقة على أن المنتج تم اختباره من حيث الجودة والسلامة والموثوقية.
        بالنسبة للأعمال التجارية، إنها بوابة إلى واحدة من أكبر الأسواق في العالم
        بأكمله.
      </p>

      <p className="service-left-content-paragraph">
        سيجيب هذا المقال على جميع الاستفسارات حول شهادة BIS، ضرورتها، العمليات،
        الفوائد، المخططات، التكاليف، والنظام و التنقل المتاح لكل من الشركات
        المصنعة الأجنبية والمحلية.
      </p>

      <h2 className="service-left-content-heading-three">
        ما هي شهادة BIS للشركات المصنعة والمستوردين؟
      </h2>

      <p className="service-left-content-paragraph">
        شهادة BIS هي شهادة ضمان الجودة والسلامة المقدمة من مكتب المعايير الهندية
        (BIS)، الهيئة الوطنية للشهادة في الهند تحت وزارة شؤون المستهلك. تضمن
        شهادة BIS أن المنتج يتوافق مع المعايير الهندية (IS) فيما يتعلق بالأداء
        والسلامة والجودة.
      </p>
      <p className="service-left-content-paragraph">
        عندما يفي المنتج بمتطلبات معايير الجودة هذه، يصدر مكتب المعايير الهندية
        ترخيص BIS أو شهادة BIS، مما يعني أن المنتج مؤهل لحمل علامة ISI (للمخططات
        المحلية) أو علامة CRS برقم تسجيل فريد (تحت مخطط التسجيل الإلزامي BIS).
      </p>
      <p className="service-left-content-paragraph">
        بالنسبة للعديد من الشركات المصنعة والمستوردين الهنود، فإن الحصول على
        شهادة BIS أمر ضروري. إنها تغطي مجموعة واسعة من المنتجات بما في ذلك
        الأجهزة الكهربائية، منتجات الأسمنت والصلب، مياه الشرب المعبأة،
        الإلكترونيات مثل الهواتف المحمولة، مصابيح LED، power banks، مجوهرات
        المعادن الثمينة (من خلال hallmarking) وأكثر من ذلك بكثير. الشركات
        المصنعة و مستوردي هذه المنتجات الإلزامية لا يمكنهم قانونياً بيع أو توزيع
        البضائع في الهند دون الاعتراف بـ BIS.
      </p>

      <h2 className="service-left-content-heading-three">
        تاريخ موجز لـ BIS في الهند
      </h2>

      <p className="service-left-content-paragraph">
        تم تشكيل مكتب المعايير الهندية (BIS) في عام 1986، متولياً معهد المعايير
        الهندية (ISI)، الذي تم إنشاؤه في عام 1947. يُعتبر BIS الآن حارس الجودة
        للمعايير في الهند وقد محاذاة ممارساتهم مع المستوى الدولي وإجراء
        التعديلات اللازمة للظروف الهندية.
      </p>

      <div className="service-left-content-heading-three">معالم ملحوظة</div>

      <PointsListWithoutHeading
        points={[
          "في عام 1947، تم تأسيس ISI لدعم أنظمة مراقبة الجودة بعد حصول البلاد على الاستقلال.",
          "في عام 1955، تم منح علامة ISI، لتصبح واحدة من أشهر رموز الجودة في الهند.",
          "في عام 1986، تم تمرير قانون BIS، ليحل محل ISI بمكتب المعايير الهندية.",
          "في عامي 2016 و 2018، أثرت التعديلات الإضافية مسؤوليات BIS، مما جعل hallmarking وشهادة المنتج أكثر شمولية.",
        ]}
      />

      <p className="service-left-content-paragraph">
        حالياً، يضمن BIS السلامة والموثوقية والتوحيد القياسي لآلاف الأدوات
        والآلات للمستخدمين الهنود عبر عدة صناعات.
      </p>

      <h2 className="service-left-content-heading-three">
        لماذا شهادة BIS إلزامية في الهند؟
      </h2>
      <p className="service-left-content-paragraph">
        السوق الهندية ضخمة ومتغيرة باستمرار وحساسة للتغييرات السعر. ومع ذلك، فإن
        هذا الانفتاح أيضاً يعرّض السوق للسلع الرخيصة وغير الآمنة. في هذا السياق،
        تعمل شهادة BIS كحاجز وقائي.
      </p>
      <PointsListWithoutHeading
        points={[
          "سلامة المستهلك - تحمي الناس من الحوادث المحتملة ومشاكل الصحة والخداع.",
          "تنظيم السوق - يضمن أن المنتجات غير المتوافقة لا تدخل السوق الهندية.",
          "الثقة والثقة - يعزز اعتقاد المستهلك في المنتجات المحلية والدولية.",
          "المحاذاة العالمية - تساعد الشركات الأجنبية في المحاذاة مع هيكل اللوائح الهندية.",
          "المنافسة العادلة - كل مشارك في السوق، بغض النظر عن الحجم، يُضمن له المنافسة فقط على الجودة.",
        ]}
      />
      <p className="service-left-content-paragraph">
        شهادة BIS لمياه الشرب المعبأة هي مثال على المكان الذي قد يسبب فيه نقص
        الشهادة مشاكل صحية. معايير أخرى ناقصة مماثلة من شهادة المنتج للسخانات
        والمواقد وغيرها من الأجهزة الكهربائية يمكن أن تؤدي إلى الحرائق. لذلك، من
        خلال الحصول على شهادة BIS، تتأكد الحكومة من معالجة هذه التحديات.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">العملية</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">عملية شهادة BIS</h2>

      <p className="service-left-content-paragraph">
        تتبع عملية شهادة BIS تدفقاً منظم:
      </p>

      <PointsListWithoutHeading
        points={[
          "تحديد المعيار ذي الصلة: اختر المعيار الهندي (IS) المنطبق.",
          "تقديم الطلب: قدم إلى BIS وأرفق أي مستندات ذات صلة.",
          "اختبار المنتج: يتم الاختبار في مختبرات BIS المعتمدة.",
          "تفتيش المصنع: يتم تفتيش المرافق من قبل مسؤولي BIS.",
          "ترخيص BIS: يتم منح الشهادة للتقييم الناجح.",
          "المراقبة: الامتثال المستدام مع تغييرات الترخيص هو المعيار الجديد.",
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
        <span className="service-left-content-index-heading">المستندات</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        المستندات المطلوبة لشهادة BIS
      </h2>

      <p className="service-left-content-paragraph">
        تضمن حزمة الوثائق القوية معالجة سلسة. المتطلبات الرئيسية تشمل:
      </p>

      <PointsListWithoutHeading
        points={[
          "ترخيص العمل أو مستندات تسجيل الشركة.",
          "مخطط تدفق عملية التصنيع.",
          "قائمة الآلات والمعدات.",
          "تفاصيل المنتج والمواصفات التقنية.",
          "تقارير الاختبار من مختبرات BIS المعترف بها.",
          "دليل مراقبة الجودة.",
          "شهادة العلامة التجارية.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        للشركات المصنعة الأجنبية:
      </h3>

      <PointsListWithoutHeading
        points={[
          "تعيين ممثل هندي معتمد (AIR).",
          "إثبات التمثيل ومستندات الهوية.",
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
        <span className="service-left-content-index-heading">التكلفة</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">تكلفة شهادة BIS</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                مكون التكلفة
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                التفاصيل
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم التقديم
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم لمرة واحدة، غير قابلة للاسترداد حسب نوع المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الاختبار
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                بناءً على التعقيد؛ تُدفع لمختبرات BIS المعترف بها
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الترخيص السنوية
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تُدفع سنوياً للحفاظ على ترخيص BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم التفتيش/مراجعة المصنع
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                تُفرض إذا زار مسؤولو BIS المصنع (السفر المحلي أو الدولي إضافي)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                رسوم الاستشارة (إن وجدت)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                اختياري، للمساعدة في الامتثال الشامل من المستشارين
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
        دور الممثل الهندي المعتمد (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        بالنسبة للشركات المصنعة الأجنبية، الممثل الهندي المعتمد (AIR) هو أمر
        حاسم.
      </p>

      <PointsListWithoutHeading
        points={[
          "يتعامل مع جميع الاتصالات مع BIS.",
          "يجمع ويقدم المستندات، ثم يسهل عملية التفتيش.",
          "يضمن الامتثال فيما يتعلق بالشهادة، قبل وبعد.",
          "يجب أن يكون مواطناً هندياً أو منظمة بعنوان محلي مسجل.",
        ]}
      />

      <p className="service-left-content-paragraph">
        في حالة عدم وجود AIR، الحصول على شهادة BIS للشركات الأجنبية مستحيل.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">الخلاصة</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">الخلاصة</div>

      <p className="service-left-content-paragraph">
        الحصول على شهادة BIS أمر ضروري لممارسة الأعمال في الهند. لم تعد شهادة
        اختيارية في الأعمال التجارية. إنها حاسمة لنجاح الأعمال التجارية وبناء
        الثقة. BIS ضروري للسلامة و النجاح في الهند. بالنسبة للشركات المصنعة
        والمستوردين، فإنه يوفر بيئة إعداد أعمال سهلة وآمنة. المشاكل القانونية
        والغرامات لم تعد مصدر قلق. مع علامة BIS، الثقة من المستهلك مضمونة.
      </p>

      <p className="service-left-content-paragraph">
        الهند هي واحدة من أكبر الاقتصادات النامية في العالم والحصول على الوصول
        للبيع هناك يمكن أن يساعد مصدراً على النمو. بغض النظر عما إذا كنت مصنعاً
        في الهند أو في الخارج، ترخيص BIS مطلوب لتصنيع أو بيع المنتجات في السوق
        الهندية. إنه مطلوب، وهو يفتح آفاق الأعمال مع سكان الهند المتزايدين. إنه
        استثمار في السلامة وثقة المستهلك وسمعة العلامة التجارية والمصداقية و
        النمو طويل الأجل.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">المخططات</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">مخططات شهادة BIS</h2>

      <p className="service-left-content-paragraph">
        لدى BIS العديد من مخططات الشهادة المصممة لصناعات متنوعة وأنواع المنتجات.
        كل مخطط مصمم لمعالجة الاحتياجات الخاصة للصناعة والمنتج.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – مخطط شهادة الشركات المصنعة الأجنبية",
          "مخطط علامة ISI (الشركات المصنعة المحلية)",
          "المخطط X تحت BIS الهند",
          "CRS – مخطط التسجيل الإلزامي",
          "مخطط Hallmarking (المجوهرات والمعادن الثمينة)",
          "شهادة Eco Mark",
          "مخطط شهادة أنظمة الإدارة (MSCS)",
          "LRS (مخطط اعتماد المختبر)",
        ]}
        linkMap={{
          "FMCS – مخطط شهادة الشركات المصنعة الأجنبية":
            "ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
          "مخطط علامة ISI (الشركات المصنعة المحلية)":
            "ar/dalil-shahadat-bis-bis-alhind",
          "المخطط X تحت BIS الهند":
            "ar/shahadat-bis-alhind-tahata-almukhatat-x",
          "CRS – مخطط التسجيل الإلزامي": "ar/ma-huwa-crs-bis-aw-tasjeel-crs",
        }}
      />

      <h3 className="service-left-content-heading-three">
        مخطط علامة ISI (الشركات المصنعة المحلية)
      </h3>

      <p className="service-left-content-paragraph">
        بالنسبة للشركات المصنعة الهندية، الحصول على ترخيص BIS هو شرط مسبق لضمان
        المبيعات القانونية لمنتجاتهم داخل البلاد. تصدر هذه الشهادة من مكتب
        المعايير الهندية (BIS) لتوثيق رضا المعايير الهندية المتعلقة بالجودة
        والسلامة ومعايير الأداء للمنتجات. يتضمن ذلك تدقيق المصانع واختبار المنتج
        وفحوصات الامتثال مع معايير BIS. بمجرد اجتياز المنتج، يُسمح للشركات
        المصنعة بوضع علامة ISI على المنتج. هذه العلامة هي علامة تجارية للمصنع و
        تساعد العميل على تحديد منتج أصيل معتمد ISI.
      </p>

      <p className="service-left-content-paragraph">
        بغض النظر عما إذا كان للإلكترونيات أو الصلب أو الأسمنت أو البلاستيك أو
        مواد البناء، الحصول على شهادة BIS ضروري ل الحصول على الوصول إلى السوق.
        على عكس كسب ثقة المستهلك، تعزز شهادة BIS سمعة الشركات المصنعة الهندية،
        وتمكن لهم من المشاركة في العقود الحكومية، ويفتح مجموعة من الفرص التجارية
        الأخرى. الأهم من ذلك، غياب BIS يمكن أن يكون للشهادة عواقب مدمرة، تتراوح
        من الغرامات القانونية واستدعاء المنتج إلى حظر كامل للبيع في الهند. لذلك،
        الامتثال BIS هو أكثر من مجرد متطلب قانوني، إنها استراتيجية مستهدفة
        لتوسيع والحفاظ على ثقة المستهلك.
      </p>

      <p className="service-left-content-paragraph">
        بالنسبة للشركات المصنعة الهندية، مخطط علامة ISI هو العلامة الأكثر شهرة.
        بموجب المخطط، يُطلب من الشركات المصنعة الهندية اختبار منتجاتهم في مرافق
        الاختبار المعترف بها من BIS. مواقع التصنيع تخضع للتفتيش والاختبار.
        المنتجات الممتثلة تُمنح الموافقة لاستخدام علامة ISI. إنه جريمة توريد
        منتجات مثل الأسمنت، اسطوانات LPG، الكابلات الكهربائية، مياه الشرب
        المعبأة وأكثر من ذلك، دون علامة ISI.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – مخطط شهادة الشركات المصنعة الأجنبية
      </h3>

      <p className="service-left-content-paragraph">
        مخطط شهادة الشركات المصنعة الأجنبية (FMCS) هو مخطط طوره مكتب المعايير
        الهندية للشركات الأجنبية الراغبة في دخول السوق الهندية. يضمن هذا المخطط
        السلامة، الجودة، وضمان الأداء للمنتجات المصنعة في الخارج المتوافقة مع
        المعايير الهندية المطلوبة. وفقاً لـ FMCS، يجب على الشركات الأجنبية
        الراغبة في بيع المنتجات في الهند أولاً الحصول على شهادة مكتب المعايير
        الهندية أو ترخيص. مثل الشركات المصنعة الهندية، يُطلب أيضاً من الشركات
        المصنعة الأجنبية الحصول على ترخيص BIS لاستخدام علامة ISI على منتجهم.
        تُمنح علامة ISI المرغوبة بعد تقييم شامل يتضمن المصنع واختبار عينات
        المنتج الصارم مقابل المعايير الهندية.
      </p>

      <p className="service-left-content-paragraph">
        يُطلب من الشركة المصنعة الأجنبية تعيين ممثل هندي معتمد (AIR)، الذي يكون
        مسؤولاً عن الاتصال و التنسيق، كنقطة اتصال أولى مع مكتب المعايير الهندية
        (BIS) للمخطط. يتضمن تقديم طلب، تقييم الامتثال المتعمق، وافتراض جميع
        الالتزامات اللازمة لتحقيق الامتثال في المواعيد النهائية. نتيجة لاتباع
        إرشادات FMCS، تتمكن الشركات الأجنبية من دخول السوق الهندية، وكذلك اكتساب
        السمعة الطيبة مع العملاء. أي منتج يحمل علامة ISI يُظهر مستوى عالٍ من
        الجودة والسلامة و ضمان الموثوقية في الهند.
      </p>

      <p className="service-left-content-paragraph">
        لا يُسمح للمنتجات الأجنبية التي تقع ضمن الفئات المنظمة بدخول الهند دون
        شهادة FMCS.
      </p>

      <h3 className="service-left-content-heading-three">
        المخطط X (اللائحة الفنية الشاملة)
      </h3>

      <p className="service-left-content-paragraph">
        المخطط X، أو اللائحة الفنية الشاملة، هو مخطط شهادة BIS آخر مصمم من قبل
        مكتب المعايير الهندية للمساعدة في تبسيط إجراءات الامتثال للصناعات في
        المجالات الميكانيكية و الكهربائية. على عكس مخططات الشهادة الأخرى، يركز
        المخطط X على تقليل التوثيق والتقييمات والموافقات مع ضمان أن المنتجات
        تلتزم بالمعايير الهندية. المنتجات ذات العلامة القياسية تتمتع بجودة
        وسلامة استثنائية ويمكن بيعها بعد الخضوع لاختبار النوع وتفتيشات المصنع
        وشهادة بسيطة للمتطلبات الإلزامية.
      </p>

      <p className="service-left-content-paragraph">
        يغطي المخطط X إرشادات السلامة للآلات الثقيلة والمعدات الكهربائية
        للمنتجات مثل المضخات والرافعات والمحولات وأدوات الآلة ومنتجات الهندسة
        الثقيلة الأخرى. هذه هي الصناعات الأكثر صلة وجميع الصناعات التي تكون
        الموثوقية والسلامة فيها ضرورة. المخطط X مناسب لأنه يقصر الوقت وتكاليف
        شهادة BIS المعقدة. يهدف إلى تبسيط عملية الامتثال من أجل تسهيل التخليص
        الأسرع للتسويق والسمعة المحسنة دون المساس بمعايير الجودة والسلامة.
        السمعة الدائمة و التقليدية لمكتب المعايير الهندية تمكن التجارة الدولية
        الأسهل، ضرورية للشركات لتلبية متطلبات الامتثال وتعزيز التنافسية.
      </p>

      <p className="service-left-content-paragraph">
        المخطط X لـ BIS إلزامي للوصول إلى صناعة الآلات الثقيلة الهندية. هذا
        المخطط الجديد مهم لتحسين المنافسة في السوق والابتكار والامتثال للوائح
        التي يتم تبسيطها من خلال هذا الهيكل المبسط لكن القوي.
      </p>

      <h3 className="service-left-content-heading-three">
        مخطط التسجيل الإلزامي (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        طور مكتب المعايير الهندية (BIS) برنامج شهادة BIS يسمى مخطط التسجيل
        الإلزامي (CRS) يهدف إلى تنظيم منتجات تكنولوجيا المعلومات والإلكترونيات
        في الهند. يركز على تقييم السلامة والجودة للمنتجات عالية المخاطر مثل
        مصابيح LED والهواتف المحمولة وأجهزة الكمبيوتر المحمولة وpower banks
        والإلكترونيات الاستهلاكية الأخرى مقابل المعايير الهندية. CRS، على عكس
        مخطط ISI، لا يصدر علامة ISI، لكن المنتجات المعتمدة، المتوافقة مع المخطط،
        تحمل علامة CRS برقم تسجيل فريد. جميع منتجات الإلكترونيات وتكنولوجيا
        المعلومات تحتاج إلى الاختبار في المختبرات المعترف بها من BIS و التسجيل
        الرسمي مع BIS CRS، تُستخدم لضمان الامتثال قبل أن يمكن بيعها أو استيرادها
        إلى الهند.
      </p>

      <p className="service-left-content-paragraph">
        هذا المخطط ضروري لحماية المستهلكين الهنود من الإلكترونيات غير الآمنة،
        الرديئة، أو المزيفة، خاصة في حالة السوق الرقمية سريعة النمو. يحتاج كل من
        الشركات المصنعة الهندية والأجنبية إلى الحصول على شهادة CRS. يجب على
        الشركات الأجنبية تعيين ممثل هندي معتمد AIR لضمان الامتثال. يقوم BIS
        بتحديث قائمة المنتجات المشمولة تحت CRS باستمرار ل تشمل المنتجات
        والتقنيات الجديدة وقضايا السلامة الناشئة. بالنسبة للشركات المصنعة،
        الحصول على تسجيل BIS تحت CRS هو ميزة إضافية لأنه يساعد في الامتثال
        التنظيمي ويزيد أيضاً من ثقة العملاء وسمعة الشركة والوصول إلى السوق في
        صناعة الإلكترونيات في الهند.
      </p>

      <h3 className="service-left-content-heading-three">مخطط Hallmarking</h3>

      <p className="service-left-content-paragraph">
        في الهند، hallmarking المجوهرات الذهبية والفضية إلزامي بموجب مخطط
        Hallmarking وينظمه مكتب المعايير الهندية (BIS) الذي يضمن نقاء وأصالة
        المجوهرات. يتم اختبار مقالات المعادن الثمينة في مراكز الفحص و
        Hallmarking المعتمدة من BIS (AHC) ثم يتم ختمها بعلامات hallmark. هذه
        العملية تُكمل فقط إذا استوفت المقالات المعايير الهندية الموضوعة في
        البداية. يجب على المجوهرات أولاً الحصول على ترخيص BIS الذي يسمح لهم بيع
        المجوهرات ذات العلامة hallmark. هذه هي الطريقة الوحيدة للقيام بذلك
        قانونياً. المجوهر ملزم بالخضوع وإكمال اختبار المنتج، تدقيقات BIS،
        ومراقبة الامتثال المستمرة لبيع المجوهرات ذات العلامة hallmark. العملية،
        في النهاية، تحمي المستهلك وتضمن النقاء والوزن والجودة وتحد من سوء
        الممارسة وكذلك الاحتيال في سوق المجوهرات.
      </p>

      <p className="service-left-content-paragraph">
        بالنسبة للمستهلكين الهنود، الذهب والفضة ليسا مجرد زينة بل أيضاً
        استثمارات كبيرة، مما يجعل الثقة والشفافية ضرورية. ال hallmarking
        المجوهرات هو علامة ضمان للمواطن العادي في البلاد أن كل قطعة مجوهرات
        للبيع قد مرت باختبارات شاملة مقابل معايير وطنية مختلفة وممارسات تجارية
        عادلة. يمكن للمجوهرات إظهار مصداقيتهم وسمعة السوق من خلال hallmarking
        المجوهرات. عدم القدرة على الامتثال للقواعد الموضوعة يجلب العقاب الذي
        يمكن أن يشمل تعليق الترخيص. بالنسبة لـ hallmarking تحت BIS، يعمل كتحقيق
        للالتزامات القائمة على المبادئ والقانونية. هذا لا يزيد فقط من رضا
        المستهلك بل أيضاً يعزز سوق المجوهرات الهندية ككل. ينطبق هذا أيضاً على
        تجار التجزئة الأصغر وكذلك الشركات المصنعة الكبرى.
      </p>

      <h3 className="service-left-content-heading-three">شهادة Eco Mark</h3>

      <p className="service-left-content-paragraph">
        Eco Mark هو مخطط اعتراف يركز على الابتكار أنشأه مكتب المعايير الهندية
        (BIS) يهدف إلى تعزيز السلع الصديقة للبيئة. على عكس الشهادة التقليدية
        التي تهتم بشكل بارز بمعايير السلامة والجودة، يُمنح Eco Mark للسلع التي
        تتوافق مع المعايير الهندية والتي تظهر على الأقل بعض المستوى المخفض من
        التأثير البيئي الضار أثناء أي مرحلة واحدة أو أكثر من المراحل المختلفة
        لدورة حياة السلع. تُمنح شهادة Eco Mark فقط بعد اختبار كبير وإثبات معايير
        - الامتثال التي تشمل مستويات الانبعاثات وعدم السمية، معدل التحلل
        البيولوجي، القدرة على إعادة التدوير والتفاعلات الشاملة مع النظام. Eco
        Mark، تماماً مثل علامة ISI، هو رمز ضمان من الحكومة والذي تم منحه حالة
        علامة شهادة، وإن كان بأهداف أكثر وضوحاً للاستدامة البيئية.
      </p>

      <p className="service-left-content-paragraph">
        ترخيص BIS مع Eco Mark يثبت أن الشركة تشارك في التصنيع المسؤول وتهتم
        بالبيئة. يضمن الامتثال للقانون وينشئ ميزة تنافسية مع المستهلكين
        الحمائيين والشركات الموجهة نحو الاستدامة. Eco Mark يساعد الصناعة على
        الثقة واعتماد الممارسات الخضراء وللمستهلكين على الثقة أن المنتجات التي
        يشترونها آمنة و مسؤولة بيئياً. Eco Mark يدعم رؤية الهند ل حماية الجودة
        المحسنة مع الحماية البيئية تحت BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        مخطط شهادة أنظمة الإدارة (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        مخطط شهادة أنظمة الإدارة (MSCS) الذي بدأه مكتب المعايير الهندية (BIS) هو
        إجراء تدريجي يقيم ويعترف بالشركات المعنية لتنفيذ أنظمة الإدارة المقبولة
        دولياً والمعترف بها. يتكون إطار MSCS من معايير ISO مثل ISO 9001 إدارة
        الجودة وISO 14001 إدارة البيئة وISO 45001 نظام إدارة الصحة والسلامة
        المهنية وغيرها. يصدق MSCS الشركة على العمليات القانونية، الاتساق،
        والتحسين المستمر للعمليات. الشركات المعتمدة تمر بتقييمات وتدقيقات عديدة
        مما يساعدها على بناء الثقة بين العملاء والمنظمين وأصحاب المصلحة مما يعزز
        ضمان السلامة والجودة والاستدامة.
      </p>

      <p className="service-left-content-paragraph">
        BIS هو هيئة المعايير الوطنية في الهند وهو هيئة الشهادة لتعزيز سمعة
        ومصداقية المنظمة محلياً وخارج الهند. MSCS بالإضافة إلى تعزيز المساءلة من
        خلال الإشراف الدوري وإعادة الشهادة أيضاً يحرر الأعمال لدعم البرامج
        العامة القيادية بنشاط مثل Make in India و Atmanirbhar Bharat. بجانب
        الالتزام القانوني، يساعد المخطط أيضاً في تنمية ثقافة النزاهة والكفاءة
        والتجارة العادلة. يشجع MSCS التجارة والاستثمار من قبل الشركات المعتمدة
        ويلعب BIS دوراً حاسماً في تطوير النظام البيئي للجودة في البلاد.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – مخطط اعتماد المختبر
      </h3>

      <p className="service-left-content-paragraph">
        تحت مكتب المعايير الهندية (BIS)، مخطط اعتماد المختبر (LRS) هو جزء لا
        يتجزأ من نظام يضمن الاعتمادية والكفاءة الشاملة للمختبرات التي تختبر
        وتصدق المنتجات للحصول على موافقة BIS. يتم تقييم مثل هذه المختبرات بشكل
        نقدي على خصائص متنوعة تشمل المعرفة التقنية وجودة القوى العاملة، البنية
        التحتية، والكفاءة الشاملة ورضا المختبر مع معيار ISO/ IEC 17025. هذه
        المختبرات، بمجرد الموافقة عليها، يُسمح لها بإجراء الاختبار على المنتج
        الذي يتم تقييم المطابقة له كجزء من برامج شهادة BIS المختلفة مثل مخطط
        علامة ISI ومخطط التسجيل الإلزامي (CRS). من الواضح أنه بالنسبة للشركات
        المصنعة، خاصة للمستوردين والمصدرين، التقارير التي يتم الحصول عليها من
        مختبر معتمد LRS هي متطلب حاسم لتحقيق شهادة BIS التي هي متطلب قانوني
        لمنتجات معينة.
      </p>

      <p className="service-left-content-paragraph">
        LRS يعزز أنظمة الضمان في الهند من خلال الحفاظ على الإنصاف في نتائج
        الاختبار وضمان أن جميع النتائج متسقة و معيارية عالمياً، بينما يعتمد فقط
        مختبرات موثوقة وصحيحة. للحفاظ على النزاهة والشفافية، يقوم BIS بإجراء
        تدقيقات منتظمة واختبارات الكفاءة ومراقبة المختبرات المخططية المعترف بها.
        الاعتراف بهذه الشهادة يمكّن BIS من تحسين الثقة من المستهلكين بينما يجعل
        عملية الشهادة أكثر كفاءة لل الصناعات، حيث سيتم تقديم المنتجات الآمنة
        والممتثلة وعالية الجودة فقط في السوق الهندية. بالنسبة للمنظمات التي تهدف
        إلى الحصول على شهادة BIS، التعاون مع المختبرات المعتمدة LRS هو الأكثر
        ضرورة لتحقيق الامتثال والوصول إلى السوق.
      </p>

      <h3 className="service-left-content-heading-three">
        المنتجات التي تتطلب شهادة BIS
      </h3>

      <p className="service-left-content-paragraph">
        تنطبق شهادة BIS على مجموعة واسعة من المنتجات. أمثلة تشمل:
      </p>

      <PointsListWithoutHeading
        points={[
          "الكهربائية والإلكترونية – مصابيح LED، الهواتف المحمولة، المحولات، أجهزة الكمبيوتر المحمولة.",
          "مواد البناء – الأسمنت، قضبان الصلب، المنتجات الهيكلية.",
          "سلع المستهلك – مياه الشرب المعبأة، اسطوانات غاز الطهي.",
          "المجوهرات والمعادن الثمينة – المقالات الذهبية والفضية تحت hallmarking.",
          "المعدات الصناعية – المضخات، المحولات، أدوات الآلة.",
        ]}
      />

      <p className="service-left-content-paragraph">
        تستمر القائمة في النمو مع ظهور المخاطر والتقنيات الجديدة.
      </p>

      <h3 className="service-left-content-heading-three">فوائد شهادة BIS</h3>

      <p className="service-left-content-paragraph">
        بالنسبة للشركات، توفر شهادة BIS أكثر بكثير من مجرد الامتثال للقانون.
      </p>

      <PointsListWithoutHeading
        points={[
          "الامتثال القانوني: لا غرامات، لا حظر، لا مصادرة.",
          "الوصول إلى السوق: ضروري لبيع المنتجات المنظمة في الهند.",
          "ثقة المستهلك: تبني مع علامة ISI المعترف بها على نطاق واسع كدليل.",
          "الميزة التنافسية: حيث تتميز الشركات المعتمدة بسهولة عن المنافسين غير المعتمدين.",
          "تسهيل التصدير: العديد من المشترين الدوليين يفهمون ويقدرون شهادة BIS.",
          "المشاركة في المناقصات: العديد من المشاريع الحكومية تمنح عقوداً للبضائع المعتمدة BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "ما هي شهادة BIS في الهند؟",
      answer:
        "شهادة BIS هي شهادة ضمان الجودة الصادرة من مكتب المعايير الهندية (BIS) لضمان أن المنتجات تتوافق مع المعايير الهندية للسلامة والأداء والجودة. إنها إلزامية لفئات المنتجات المختلفة وتساعد في حماية المستهلك والامتثال التنظيمي.",
    },
    {
      question: "لماذا أحتاج إلى شهادة BIS؟",
      answer:
        "شهادة BIS ضرورية لتصنيع أو استيراد أو توزيع أو بيع منتجات معينة بشكل قانوني في الهند. تضمن للمستهلكين أن المنتج يلبي إرشادات السلامة والجودة للمعايير الهندية.",
    },
    {
      question: "ما هي علامة ISI تحت شهادة BIS؟",
      answer:
        "علامة ISI هي رمز شهادة يتم توفيره تحت مخطط شهادة BIS. تشير إلى أن المنتج يتوافق مع المعايير الهندية وتم تصديقه من قبل BIS الهندي من خلال الاختبار والتسجيل المناسبين.",
    },
    {
      question: "من يصدر تراخيص BIS في الهند؟",
      answer:
        "يتم إصدار تراخيص BIS من قبل مكتب المعايير الهندية (BIS الهندي)، هيئة المعايير الوطنية تحت وزارة شؤون المستهلك والغذاء والتوزيع العام.",
    },
    {
      question: "ما هي أنواع مخططات شهادة BIS المختلفة؟",
      answer:
        "تشمل مخططات شهادة BIS الرئيسية مخطط علامة ISI، ومخطط التسجيل الإلزامي (CRS)، ومخطط شهادة الشركات المصنعة الأجنبية (FMCS)، وHallmarking للمجوهرات، وشهادة Eco Mark، وما هو المخطط X للمعدات الصناعية.",
    },
    {
      question: "ما هو المخطط X تحت شهادة BIS؟",
      answer:
        "المخطط X هو عملية شهادة BIS مبسطة تنطبق على المنتجات الصناعية مثل المضخات والمحولات وأدوات الآلة والرافعات. يضمن الموافقة الأسرع دون المساس بالامتثال للمعايير الهندية.",
    },
    {
      question: "أي منتجات تتطلب شهادة BIS في الهند؟",
      answer:
        "المنتجات مثل الأجهزة الكهربائية والإلكترونيات وأدوات المطبخ والأسمنت والصلب ومجوهرات الذهب والهواتف المحمولة والمحولات تتطلب شهادة BIS وفقاً لتفويض BIS الهندي.",
    },
    {
      question: "هل تسجيل BIS إلزامي لجميع المنتجات؟",
      answer:
        "لا، تسجيل BIS إلزامي فقط للمنتجات المدرجة في مخطط الشهادة الإلزامية. ومع ذلك، تتوفر أيضاً شهادة BIS الطوعية لتعزيز مصداقية المنتج.",
    },
    {
      question: "كم من الوقت تبقى ترخيص BIS ساري المفعول؟",
      answer:
        "عادة ما يكون ترخيص BIS ساري المفعول لمدة عام إلى عامين ويجب تجديده قبل انتهاء صلاحيته لمواصلة استخدام علامة ISI أو الحفاظ على حالة تسجيل BIS.",
    },
    {
      question: "ما هي الخطوات للحصول على شهادة BIS في الهند؟",
      answer:
        "تتضمن عملية شهادة BIS تحديد المعايير الهندية المنطبق عليها، وتقديم طلب، واختبار المنتج، وتفتيش المصنع، وإصدار شهادة BIS عند الموافقة.",
    },
    {
      question: "هل يمكن للشركات المصنعة الأجنبية التقدم للحصول على ترخيص BIS؟",
      answer:
        "نعم، تحت مخطط شهادة الشركات المصنعة الأجنبية (FMCS)، يمكن للشركات الأجنبية التقدم للحصول على ترخيص BIS لبيع المنتجات في الهند. يجب عليهم تعيين ممثل هندي معتمد (AIR).",
    },
    {
      question: "ما هو دور AIR في شهادة BIS؟",
      answer:
        "AIR (الممثل الهندي المعتمد) يعمل كحلقة وصل بين الشركة المصنعة الأجنبية وBIS الهندي. هم مسؤولون عن التوثيق والاتصال والامتثال لمتطلبات شهادة BIS.",
    },
    {
      question: "كيف يمكنني التقدم لتسجيل BIS عبر الإنترنت؟",
      answer:
        "يمكنك التقدم لتسجيل BIS عبر الإنترنت من خلال بوابة BIS الرسمية. تتضمن العملية تقديم النموذج وتحميل المستندات وتقارير الاختبار ودفع الرسوم.",
    },
    {
      question: "ما هي المستندات المطلوبة لشهادة BIS؟",
      answer:
        "المستندات المطلوبة تشمل ترخيص العمل، ومواصفات المنتج، وعملية التصنيع، وتقارير اختبار المختبر، وتخطيط المصنع، ودليل الجودة، ونماذج التفويض (للشركات المصنعة الأجنبية).",
    },
    {
      question: "كم تكلفة شهادة BIS في الهند؟",
      answer:
        "تعتمد تكلفة شهادة BIS على نوع المنتج ومتطلبات الاختبار ونوع المخطط (ISI، CRS، FMCS)، وما إذا كان مقدم الطلب محلياً أم أجنبياً. تشمل التكاليف رسوم التقديم ورسوم الاختبار ومصاريف التفتيش.",
    },
    {
      question: "هل علامة ISI إلزامية لجميع المنتجات المعتمدة BIS؟",
      answer:
        "لا، يُطلب فقط من المنتجات تحت مخطط ISI حمل علامة ISI. المنتجات تحت مخططات CRS أو Hallmarking تتبع بروتوكولات وضع العلامات المختلفة وفقاً لقواعد تسجيل BIS.",
    },
    {
      question: "هل يمكنني الحصول على شهادة BIS للمنتجات الصديقة للبيئة؟",
      answer:
        "نعم، المنتجات التي تلبي المعايير البيئية يمكنها الحصول على شهادة BIS تحت مخطط Eco Mark، والذي يضمن الامتثال للمعايير الهندية للسلامة البيئية.",
    },
    {
      question: "ما هو الفرق بين شهادة BIS وتسجيل BIS؟",
      answer:
        "تشير شهادة BIS بشكل عام إلى الموافقة تحت مخططات ISI أو FMCS أو Hallmarking، بينما يرتبط تسجيل BIS عادة بمخطط CRS للمنتجات الإلكترونية.",
    },
    {
      question: "ما هو مخطط التسجيل الإلزامي (CRS)؟",
      answer:
        "CRS هو برنامج تسجيل BIS لمنتجات تكنولوجيا المعلومات والإلكترونيات مثل مصابيح LED والهواتف المحمولة وpower banks. يضمن امتثال المنتج للمعايير الهندية المتعلقة بالسلامة.",
    },
    {
      question: "هل تعني علامة ISI وشهادة BIS نفس الشيء؟",
      answer:
        "ليس تماماً. علامة ISI هي الرمز الممنوح للمنتجات المعتمدة تحت مخطط شهادة BIS. شهادة BIS هي الوثيقة القانونية الصادرة للمصنع.",
    },
    {
      question: "هل يمكن لترخيص BIS واحد أن يغطي منتجات متعددة؟",
      answer:
        "لا، يُطلب ترخيص BIS منفصل لكل نوع منتج وكل موقع تصنيع، حتى لو كانت المنتجات متشابهة.",
    },
    {
      question: "ماذا يحدث إذا بعت منتجات بدون شهادة BIS؟",
      answer:
        "بيع المنتجات التي تتطلب شهادة BIS بدون ترخيص BIS ساري المفعول غير قانوني في الهند ويمكن أن يؤدي إلى غرامات أو استدعاء المنتج أو الحظر.",
    },
    {
      question: "كم من الوقت يستغرق الحصول على شهادة BIS؟",
      answer:
        "تستغرق عملية شهادة BIS بشكل عام من 30 إلى 90 يوماً، اعتماداً على نوع المنتج ومتطلبات الاختبار وما إذا كان مقدم الطلب محلياً أم أجنبياً.",
    },
    {
      question: "هل شهادة BIS مقبولة عالمياً؟",
      answer:
        "بينما شهادة BIS خاصة بالهند، فإنها تعزز المصداقية العالمية من خلال إظهار الامتثال للمعايير الهندية الصارمة. بعض المنتجات المعتمدة BIS مقبولة أيضاً بموجب اتفاقيات الاعتراف المتبادل.",
    },
    {
      question: "كم مرة أحتاج إلى تجديد ترخيص BIS؟",
      answer:
        "يجب تجديد تراخيص BIS سنوياً أو كل سنتين. يجب على الشركات المصنعة الحفاظ على الامتثال للمعايير الهندية واجتياز تدقيقات المراقبة لتجديد شهادة BIS الخاصة بهم.",
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
          الأسئلة الشائعة – شهادة BIS في الهند
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
    // {
    //   code: "ar",
    //   name: "Arabic",
    //   flag: "https://flagcdn.com/w320/sa.png",
    //   path: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    // },
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
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              خدماتنا
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                أفضل مستشار الشهادات في الهند
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
              علامة BIS (ترخيص ISI) للشركات المصنعة الأجنبية
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
              إدارة النفايات البلاستيكية
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
              شهادات شهادة EPR
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
              شهادات شهادة LMPC
            </p>
          </Link>

          <Link
            to="/ar/ma-huwa-shahadat-bis-bis-alhind"
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
            to="/ar/dalil-shahadat-bis-bis-alhind"
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
              علامة ISI (BIS) للشركات المصنعة الهندية
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
