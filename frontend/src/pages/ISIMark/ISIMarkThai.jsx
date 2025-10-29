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
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";
import { ISIMarkAndBISCommonTableThai } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableThai";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterThai from "@/components/manual/Footer/FooterThai";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkThai = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableThai />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterThai />
    </div>
  );
};

export default ISIMarkThai;

const ISIMarkMetaTags = () => {
  const title = "กระบวนการรับรอง BIS ISI Mark เอกสาร และค่าใช้จ่าย";
  const description =
    "การรับรองเครื่องหมาย ISI ที่ออกโดยสำนักมาตรฐานอินเดียจะมอบให้กับผลิตภัณฑ์ที่ผ่านการทดสอบและการตรวจสอบอย่างเข้มงวดเพื่อให้ตรงตามมาตรฐานและความสอดคล้องที่กำหนด";
  const keywords =
    "ISI Mark, การรับรอง ISI Mark, ใบรับรอง ISI Mark, การรับรอง ISI, ใบรับรอง ISI, การลงทะเบียน ISI Mark, ใบอนุญาต ISI, BIS ISI Mark, การรับรอง BIS ISI Mark";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, หัวหน้าฝ่ายปฏิบัติการที่ Sun Certification India";

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
                    <Link to="/">หน้าแรก</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    กระบวนการรับรอง BIS ISI Mark เอกสาร และค่าใช้จ่าย
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
              ความเชี่ยวชาญที่ได้รับการรับรอง
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              การรับรอง BIS สำหรับ
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            ผู้ผลิตอินเดีย
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            ในส่วนของวิสัยทัศน์ 'Make in India' การรับรอง BIS ช่วยให้
            ผู้ผลิตมั่นใจในความปลอดภัยของผลิตภัณฑ์ คุณภาพ และการปฏิบัติตาม
            กฎระเบียบ ได้รับการรับรองและเติบโตแบรนด์ของคุณด้วยความมั่นใจ
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
                ดูบริการ
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
    if (path.includes("/th/bis-isi-mark-raprong")) return "ISI Mark - Thai Page";
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

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่ชื่อเต็มที่ถูกต้อง",
        description: "ชื่อควรมีเฉพาะตัวอักษรและช่องว่าง",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่ที่อยู่อีเมลที่ถูกต้อง",
        description: "ตรวจสอบว่าฟอร์แมตอีเมลของคุณถูกต้องหรือไม่",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่หมายเลขโทรศัพท์ที่ถูกต้อง",
        description: "หมายเลขโทรศัพท์ต้องมี (8-15 หลัก)",
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
        title: "ส่งแบบฟอร์มติดต่อสำเร็จ!",
        description:
          "ขอบคุณที่ติดต่อเรา ทีมของเราจะติดต่อกลับในไม่ช้า",
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
        error.response?.data?.message || "เกิดข้อผิดพลาด";
      toast({
        variant: "destructive",
        title: errorMessage || "ไม่สามารถส่งรายละเอียดแบบฟอร์มติดต่อได้!",
        description:
          "เกิดข้อผิดพลาด กรุณาตรวจสอบรายละเอียดของคุณและลองอีกครั้ง",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          ติดต่อเรา
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        จองนัดหมาย
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ต้องการติดต่อทีมของเราและนัดหมายการโทร?
        <span className="text-black"> ลองเลย</span>
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
            placeholder="ชื่อเต็ม *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="ที่อยู่อีเมล *"
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
            placeholder="หมายเลขติดต่อ *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="ชื่อบริษัท *"
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
            placeholder="ชื่อผลิตภัณฑ์ *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="การรับรองที่ต้องการ*"
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
              <span>กำลังส่ง</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>จองนัดหมาย</span>
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
    overview: "ภาพรวม",
    requirement: "ข้อกำหนด",
    documents: "เอกสาร",
    conclusion: "สรุป",
    faqs: "คำถามที่พบบ่อย",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentThai />
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
        <ServiceAuthorThai />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">ภาพรวม</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        การรับรอง BIS ISI Mark สำหรับผู้ผลิตอินเดีย
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="โครงการรับรอง BIS ของอินเดีย"
          title="โครงการใบอนุญาต BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        ในพลวัตของตลาดปัจจุบัน ชื่อเสียงของแบรนด์ในตลาดปัจจุบัน
        ความไว้วางใจของผู้บริโภคมีความสำคัญอย่างมาก ทุกคน
        ผู้บริโภคต้องการความมั่นใจเกี่ยวกับความปลอดภัยและความน่าเชื่อถือของผลิตภัณฑ์
        พร้อมกับขั้นตอนการควบคุมคุณภาพที่ดำเนินการระหว่างการผลิต
        สำนักมาตรฐานอินเดียแก้ไขปัญหาและข้อกังวลเหล่านี้เพื่อให้แน่ใจว่า
        เกณฑ์มาตรฐานคุณภาพสำหรับผลิตภัณฑ์ที่ขายในอินเดีย การรับรองเครื่องหมาย ISI
        เป็นหนึ่งในใบรับรองที่มีชื่อเสียงที่สุดที่ได้รับภายใต้ BIS
      </p>
      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตในประเทศ การได้รับใบรับรอง BIS ISI Mark
        ไม่ได้เป็นเพียงการได้รับใบรับรองการปฏิบัติตามกฎระเบียบเท่านั้น
        แต่ยังเกี่ยวกับการได้รับการยอมรับในตลาด ความมั่นใจในแบรนด์ และการปกป้องทางกฎหมาย
        เครื่องหมาย ISI ถูกยอมรับอย่างแพร่หลายและเสริมสร้างความน่าเชื่อถือในอินเดีย
        เมื่อพูดถึงการผลิตเครื่องใช้ไฟฟ้า วัสดุก่อสร้าง
        สารเคมีหรือสินค้าภายในครัวเรือน
      </p>
      <p className="service-left-content-paragraph">
        บทความนี้มีจุดมุ่งหมายเพื่อสำรวจการรับรอง BIS ISI Mark สำหรับ
        ผู้ผลิตในประเทศ โดยเน้นถึงความสำคัญ ข้อกำหนด
        ข้อดี และกระบวนการทั้งหมดของการได้รับใบรับรอง
      </p>
      <h2 className="service-left-content-heading-three">
        ทำความเข้าใจ BIS และบทบาทของมัน
      </h2>
      <p className="service-left-content-paragraph">
        สำนักมาตรฐานอินเดีย (BIS) เป็นองค์กรมาตรฐานแห่งชาติและ
        การรับรองในอินเดียภายใต้กระทรวงการแข่งขันและ
        สาธารณะ ในฐานะหน่วยงานกำกับดูแล มันกำหนดและรักษามาตรฐานของ
        คุณภาพและการบังคับใช้ในอุตสาหกรรมต่างๆ ตามที่กำหนดภายใต้
        พระราชบัญญัติ BIS ปี 1986
      </p>
      <p className="service-left-content-paragraph">
        BIS ทำหน้าที่เป็นหน่วยงานตรวจสอบบุคคลที่สามที่ตรวจสอบว่า
        ผลิตภัณฑ์ตรงตามมาตรฐานอินเดียเฉพาะหรือไม่ การรับรอง BIS
        ให้กับผู้ผลิตไม่เพียงแต่เป็นข้อกำหนดทางกฎหมาย แต่ยัง
        ด้วยเครื่องหมายการอนุมัติของความไว้วางใจและความน่าเชื่อถือจากลูกค้า{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        เครื่องหมาย ISI คืออะไร?
      </h2>
      <p className="service-left-content-paragraph">
        การรับรองเครื่องหมาย ISI (เครื่องหมายสถาบันมาตรฐานอินเดีย) คือ
        เครื่องหมายการรับรองที่เก่าแก่ที่สุดและเป็นที่ยอมรับมากที่สุดจากสำนัก
        มาตรฐานอินเดีย (BIS) ในอินเดีย การรับรอง ISI มุ่งเน้นไปที่
        การยืนยันว่าผลิตภัณฑ์ตรงตามข้อกำหนดพื้นฐานของมาตรฐานคุณภาพ
        ที่กำหนดโดย BIS ในเรื่องความปลอดภัย คุณภาพ ประสิทธิภาพ และ
        ความน่าเชื่อถือ{" "}
      </p>
      <p className="service-left-content-paragraph">
        ผลิตภัณฑ์ที่ติดเครื่องหมาย ISI ได้ผ่านการทดสอบในห้องปฏิบัติการและ
        การตรวจสอบโรงงานอย่างละเอียด มันรับประกันว่าการควบคุมคุณภาพที่เหมาะสม
        ขั้นตอนการดำเนินการอยู่ระหว่างการดำเนินการและปฏิบัติตามระหว่างการผลิต
        ขั้นตอน ผู้บริโภคสามารถรับและใช้ผลิตภัณฑ์ที่ปลอดภัยและน่าเชื่อถือได้
        ติดป้ายด้วยเครื่องหมาย ISI เครื่องหมาย ISI
        เป็นเครื่องมือสำหรับความไว้วางใจระหว่าง
        ผู้บริโภคและผู้ผลิต และเครื่องหมายนี้เกินมาตรฐาน
      </p>
      <p className="service-left-content-paragraph">
        ตัวอย่างผลิตภัณฑ์บางส่วนที่ต้องการการรับรอง ISI บังคับคือ
        ดังนี้:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "เครื่องใช้ทุกประเภท (เตารีดไฟฟ้า เครื่องทำความร้อนไฟฟ้า สายไฟฟ้า ตู้เย็น เครื่องปรับอากาศ)",
          "ปูนซีเมนต์และเหล็ก ท่อ UPVC รองเท้าพลาสติก และผลิตภัณฑ์พลาสติกอื่นๆ",
          "ปุ๋ย สารเคมี และกรด",
          "หมวกนิรภัยและแว่นตา ตลอดจนของเล่นเด็กบางประเภท",
        ]}
      />
      <p className="service-left-content-paragraph">
        มีผลิตภัณฑ์มากกว่า 650 รายการที่ต้องการ BIS บังคับ
        การรับรองเพื่อใช้เครื่องหมายมาตรฐาน (ISI Mark) ภายใต้โครงการ I
        ตาราง I ของสำนักมาตรฐานอินเดีย ผลิตภัณฑ์ที่เก็บไว้ภายใต้
        โครงการรับรองบังคับไม่สามารถผลิต นำเข้า หรือขายได้
        ในตลาดอินเดียโดยไม่มีเครื่องหมาย ISI รายการผลิตภัณฑ์บังคับ
        สามารถเข้าถึงได้ที่{" "}
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
          ลิงก์รายการผลิตภัณฑ์
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        อะไรคือความแตกต่างระหว่างการรับรอง BIS และเครื่องหมาย ISI?
      </h2>
      <p className="service-left-content-paragraph">
        แม้ว่าจะสับสนบ่อยครั้งและใช้เป็นคำพ้องความหมาย แต่การรับรอง BIS และ ISI
        เครื่องหมายมีคำจำกัดความและวัตถุประสงค์เฉพาะ:
      </p>
      <p className="service-left-content-paragraph">
        <strong>การรับรอง BIS :</strong> กระบวนการของการอนุมัติให้
        ผลิตภัณฑ์หลังจากแน่ใจว่าตรงตามมาตรฐานอินเดียที่กำหนด มัน
        เป็นกรอบการทำงานที่ใช้ประเมินการปฏิบัติตามกฎระเบียบ
      </p>

      <p className="service-left-content-paragraph">
        <strong>เครื่องหมาย ISI :</strong> สัญลักษณ์คุณภาพหรือเครื่องหมายมาตรฐานที่
        มอบให้กับผลิตภัณฑ์หลังจากได้รับการรับรอง BIS มัน
        บ่งชี้ว่าผลิตภัณฑ์ได้รับการรับรองอย่างสมบูรณ์และตรงตาม
        มาตรฐานอินเดียที่กำหนด
      </p>
      <p className="service-left-content-paragraph">
        ในลักษณะนี้ ISI เป็นการแสดงความมุ่งมั่นที่รับรองได้จริงๆ
        ในขณะที่การรับรอง BIS เสนอกรอบการบริหารงานที่จำเป็น{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        ทำไมการรับรอง BIS ISI Mark จึงสำคัญสำหรับผู้ผลิต?
      </h2>

      <p className="service-left-content-paragraph">
        การรับรอง BIS ISI Mark มีค่าสำคัญสำหรับ
        ผู้ผลิตในประเทศ เช่น:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. การรับประกันคุณภาพ:</strong> เครื่องหมาย ISI หมายความว่ามันมี
        ผ่านการทดสอบและการตรวจสอบที่เข้มงวด
        จึงรักษามาตรฐานคุณภาพที่สูงสุดที่กำหนดไว้
        ในทางกลับกันนี้ช่วยเพิ่มความน่าเชื่อถือ
        และความน่าเชื่อถือของผลิตภัณฑ์ในขณะที่ลดโอกาสของข้อบกพร่อง
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. ความไว้วางใจของผู้บริโภค:</strong> ผลิตภัณฑ์ที่มีป้ายกำกับ ISI
        เครื่องหมายโดยทั่วไปถือว่าปลอดภัยและมีประสิทธิภาพ นี่
        มีส่วนช่วยในการสร้างความภักดีต่อแบรนด์
        และส่งผลให้แบรนด์มีความแข็งแกร่งและมีชื่อเสียงมากขึ้น
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. การเข้าถึงตลาด:</strong> ตลาดอินเดียมี
        สิ่งของมากมายที่ถูกห้ามอย่างเคร่งครัดหากบุคคลไม่มี
        ใบรับรอง ISI ที่ถูกต้อง ในกรณีดังกล่าว เครื่องหมาย ISI ทำหน้าที่เป็น
        ประตูสู่การอำนวยความสะดวกในการขาย
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. การได้รับอนุญาตเข้าสู่ตลาด:</strong> ภายในที่สูง
        สภาพแวดล้อมที่มีการแข่งขัน ผลิตภัณฑ์ที่ได้รับการรับรอง ISI
        ถือว่ามีชื่อเสียงที่ดี
        จึงมีข้อได้เปรียบในการแข่งขันสูงกว่าผู้อื่นที่ไม่ได้รับการรับรอง
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. การปฏิบัติตามกฎระเบียบ:</strong> มาตรฐาน BIS เป็นอย่างนั้น
        ผู้ผลิตที่ผลิตภัณฑ์สอดคล้องกับมาตรฐานดังกล่าวมีการทำงานที่ราบรื่น
        ไม่มีการยับยั้ง ปราศจากความซับซ้อนทางกฎหมาย
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. การส่งเสริมการส่งออก:</strong> ผลิตภัณฑ์ที่ได้รับการรับรอง ISI
        และดังนั้นจึงมีชื่อเสียงแบรนด์ที่แข็งแกร่งมีแนวโน้มที่จะได้รับความนิยม
        โดยตลาดต่างประเทศเนื่องจากการรับรู้ว่ามีคุณภาพสูงและ
        ตรงตามมาตรฐานระดับโลก
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. ความปลอดภัยของผู้บริโภค:</strong> ผลิตภัณฑ์ใดๆ ที่มี ISI
        การรับรองรับประกันความปลอดภัยของผู้บริโภคจากความเสี่ยงใดๆ
        อันตราย อุบัติเหตุ หรือประสิทธิภาพผลิตภัณฑ์ที่ไม่ดี
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. การควบคุมคุณภาพ:</strong> ความต้องการในการดำเนินการอย่างต่อเนื่อง
        การตรวจสอบและการตรวจสอบรับประกันว่าผู้ผลิตสามารถ
        บรรลุคุณภาพคงที่สำหรับทุกชุดที่ผลิต
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">ข้อกำหนด</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        ข้อกำหนดพื้นฐานสำหรับการรับรอง BIS ISI Mark
      </h2>
      <p className="service-left-content-paragraph">
        เพื่อให้ได้รับใบรับรอง BIS ผู้ผลิตในประเทศต้องปฏิบัติตาม
        ภาระผูกพันหลักต่อไปนี้
      </p>
      <PointsListWithoutHeading
        points={[
          "ต้องมีการปฏิบัติตามข้อกำหนดมาตรฐานอินเดีย (ISS)",
          "ใบอนุญาตจะออกและมอบให้เฉพาะผู้ผลิตเท่านั้น ไม่ใช่ผู้จัดจำหน่ายหรือผู้ขายปลีก",
          "มีความจำเป็นต้องส่งใบสมัครแยกสำหรับแต่ละสถานที่โรงงานสำหรับการรับรอง",
          "โรงงานต้องมีบุคลากรที่มีคุณสมบัติและห้องปฏิบัติการทดสอบภายใน",
          "โหมดการผลิตทั้งหมดจะต้องดำเนินการในหน่วยการผลิตเดียวกันตั้งแต่ วัตถุดิบไปจนถึงบรรจุภัณฑ์สุดท้าย (การส่งงานไปยังภายนอกต้องได้รับอนุญาตล่วงหน้าจาก BIS)",
          "คำแนะนำด้านเทคนิคมีอยู่ในคู่มือผลิตภัณฑ์ซึ่งอธิบายมาตรฐานสำหรับการตรวจสอบ การทดสอบ และเอกสารที่จำเป็น",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        กระบวนการรับรอง BIS ISI สำหรับผู้ผลิตในประเทศ
      </h2>
      <p className="service-left-content-paragraph">
        การรับประกันการรับรอง BIS เป็นกระบวนการหลายขั้นตอน มีสอง
        ขั้นตอนหลักในการเข้าสู่กระบวนการรับรอง BIS: ปกติ
        ขั้นตอนและขั้นตอนแบบง่าย{" "}
      </p>
      <h3 className="service-left-content-heading-three">
        1. ขั้นตอนปกติ (60-65 วัน)
      </h3>
      <PointsListWithoutHeading
        points={[
          "ผู้ผลิตจัดตั้งห้องปฏิบัติการภายในและนำผลิตภัณฑ์เข้าสู่การปฏิบัติตามมาตรฐานอินเดีย",
          "ส่งใบสมัครพร้อมเอกสารที่ต้องการ",
          "การตรวจสอบโรงงานโดยเจ้าหน้าที่ BIS",
          "การทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่ได้รับอนุมัติจาก BIS",
          "จะได้รับใบอนุญาตหากตรงตามเงื่อนไขทั้งหมด",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. ขั้นตอนแบบง่าย (35-40 วัน)
      </h3>
      <PointsListWithoutHeading
        points={[
          "ผู้ผลิตส่งเอกสารของผลิตภัณฑ์ที่ทดสอบล่วงหน้าจากห้องปฏิบัติการที่รับรองโดย BIS",
          "ส่งใบสมัครพร้อมค่าธรรมเนียม",
          "การตรวจสอบเอกสารและการตรวจสอบโรงงาน",
          "การทดสอบสุดท้ายและการอนุมัติใบอนุญาตภายในระยะเวลา 35-40 วัน",
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
        <span className="service-left-content-index-heading">
          เอกสารที่จำเป็น
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        เอกสารที่จำเป็นสำหรับการรับรองเครื่องหมาย ISI
      </h2>
      <p className="service-left-content-paragraph">
        เอกสารต่อไปนี้ต้องนำเสนอโดยผู้ผลิต:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. แบบฟอร์มใบสมัครที่กรอกเสร็จแล้ว (แบบฟอร์ม V หรือ VI ขึ้นอยู่กับโครงการ)",
          "2. ใบรับรองการลงทะเบียนธุรกิจ (เช่น การลงทะเบียน Udyam, MSME, ใบรับรอง GST)",
          "3. ใบอนุญาตโรงงานหรือใบอนุญาตค้าขายเทศบาล",
          "4. รายการเครื่องจักรการผลิต",
          "5. ผังงานกระบวนการผลิต",
          "6. แผนผังสถานที่ผลิต",
          "7. รายละเอียดพนักงานควบคุมคุณภาพภายใน",
          "8. รายละเอียดอุปกรณ์ทดสอบ",
          "9. ข้อตกลงความร่วมมือทางเทคนิค (ถ้ามี)",
          "10. หนังสือมอบอำนาจ/จดหมายอนุญาต",
          "11. จดหมายอนุญาตชื่อแบรนด์ (หากสมัครภายใต้แบรนด์อื่น)",
          "12. รายงานการทดสอบจากห้องปฏิบัติการที่ได้รับอนุมัติจาก BIS",
          "13. ใบแจ้งหนี้ของการจัดซื้อวัตถุดิบ",
          "14. รูปภาพผลิตภัณฑ์และบรรจุภัณฑ์",
          "15. คำประกาศการปฏิบัติตามมาตรฐาน",
          "16. ข้อตกลงเกี่ยวกับผลิตภัณฑ์ที่ไม่เป็นไปตามมาตรฐาน",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        ประโยชน์ของการรับรอง BIS ISI Mark
      </h3>
      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตอินเดีย การได้รับใบรับรอง BIS ISI Mark
        ให้ข้อได้เปรียบเฉพาะ:
      </p>
      <PointsListWithoutHeading
        points={[
          "การอนุญาตทั่วประเทศ: ผู้ผลิตมีสิทธิ์ขายผลิตภัณฑ์ที่ได้รับการรับรองทั่วประเทศ",
          "การหลีกเลี่ยงค่าปรับ: การปฏิบัติตามมาตรฐาน BIS ช่วยหลีกเลี่ยงค่าปรับที่สูงและปัญหาทางกฎหมาย",
          "รายได้ที่เพิ่มขึ้น: ความต้องการสูงขึ้นสำหรับผลิตภัณฑ์ที่ได้รับการรับรอง",
          "ศักยภาพการส่งออก: ตลาดต่างประเทศบางแห่งระบุว่า ISI เป็นมาตรฐานความเป็นเลิศ",
          "มุ่งเน้นคุณภาพ: บริษัทที่ได้รับการรับรองแสดงความมุ่งมั่นต่อหลักการของ การผลิตที่มีคุณภาพ",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        การถอนใบอนุญาต BIS{" "}
      </h3>
      <p className="service-left-content-paragraph">
        ใบอนุญาตเพื่อรับรองเป็นกรรมสิทธิ์ของหน่วยงาน BIS และมัน
        สามารถยกเลิกใบอนุญาตดังกล่าวได้หาก:
      </p>
      <PointsListWithoutHeading
        points={[
          "มีการลดลงของคุณภาพของผลิตภัณฑ์ที่ได้รับการรับรอง",
          "มีการใช้เครื่องหมาย ISI อย่างไม่ถูกต้องโดยผู้ผลิต",
          "ผู้ผลิตไม่ปฏิบัติตามแง่มุมหนึ่งของใบอนุญาต",
        ]}
      />

      <p className="service-left-content-paragraph">
        ตามข้อบังคับ 11 ของ BIS (การประเมินการปฏิบัติตาม) ข้อบังคับ
        2018 ไม่มีข้อสงสัยว่าใบอนุญาตสามารถระงับหรือยกเลิกได้สำหรับ
        ความล้มเหลวในการปฏิบัติตามข้อบังคับที่ระบุไว้
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">สรุป</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">สรุป</h2>

      <p className="service-left-content-paragraph">
        สำหรับการรับรอง BIS ISI Mark อีกครั้ง ไม่มีข้อสงสัยว่ามันมี
        มากกว่าแค่ขั้นตอนราชการสำหรับผู้ผลิตในอินเดีย มัน
        ช่วยในการสร้างชื่อเสียงเชิงบวกและบรรลุความยั่งยืน
        การเติบโตในธุรกิจ หากปฏิบัติตามมาตรฐาน BIS ก็จะมี
        การรับประกันที่ผ่านการรับรองสูงสุดว่าผลิตภัณฑ์น่าเชื่อถือและพร้อมสำหรับ
        ขาย
      </p>

      <p className="service-left-content-paragraph">
        โดยสรุป เครื่องหมาย ISI ได้กลายเป็นมากกว่าแค่กฎหมาย
        การปฏิบัติตามกฎหมาย มันกลายเป็นเครื่องหมายของการรับประกันในสภาพแวดล้อมทางธุรกิจ
        โดยที่ความไว้วางใจหาได้ยาก มันเป็นสัญลักษณ์ของการแข่งขันใน
        ตลาดพร้อมกับการปฏิบัติตามกฎระเบียบ
      </p>

      <p className="service-left-content-paragraph">
        ไม่ว่าคุณจะผลิตผลิตภัณฑ์อิเล็กทรอนิกส์ องค์ประกอบอาคาร หรือ
        ผลิตภัณฑ์อื่นๆ สำหรับขาย การรับรอง BIS ISI
        รับประกันว่าผลิตภัณฑ์ของคุณ
        สอดคล้องกับมาตรฐานระดับสูงของอินเดียในขณะที่ปกป้องของคุณ
        ชื่อเสียงตลอดจนผู้บริโภคของคุณ
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "การรับรอง BIS คืออะไรและทำไมจึงสำคัญ?",
      answer:
        "การรับรอง BIS ออกโดยสำนักมาตรฐานอินเดียเพื่อให้แน่ใจว่าผลิตภัณฑ์ปฏิบัติตามมาตรฐานความปลอดภัยและคุณภาพของอินเดีย มันสำคัญสำหรับการปฏิบัติตามกฎหมาย ความไว้วางใจของผู้บริโภค และการยอมรับในตลาด",
    },
    {
      question: "ความแตกต่างระหว่างใบอนุญาต BIS และเครื่องหมาย ISI คืออะไร?",
      answer:
        "ใบอนุญาต BIS เป็นเอกสารทางกฎหมายที่อนุญาตให้ผู้ผลิตใช้เครื่องหมาย ISI เครื่องหมาย ISI คือป้ายที่มองเห็นได้บนผลิตภัณฑ์ที่บ่งชี้การรับรอง BIS",
    },
    {
      question: "ใช้เวลานานแค่ไหนในการรับการรับรอง BIS?",
      answer:
        "โดยทั่วไป 6-10 สัปดาห์ขึ้นอยู่กับประเภทผลิตภัณฑ์ ข้อกำหนดการทดสอบ และผลการตรวจสอบ",
    },
    {
      question: "ระยะเวลาการบังคับใช้ของใบอนุญาต BIS คืออะไร?",
      answer:
        "โดยปกติ 1 ถึง 2 ปี หลังจากนั้นต้องต่ออายุ ควรเริ่มต่ออายุอย่างน้อย 30 วันก่อนวันหมดอายุ",
    },
    {
      question: "ค่าใช้จ่ายในการรับรอง BIS คือเท่าไหร่?",
      answer:
        "ต้นทุนแตกต่างกันไปแต่สามารถอยู่ในช่วงตั้งแต่ ₹25,000 ถึง ₹100,000+ รวมถึงค่าทดสอบ ค่าตรวจสอบ และค่าธรรมเนียมใบอนุญาต",
    },
    {
      question: "การรับรอง BIS เป็นข้อบังคับสำหรับผลิตภัณฑ์ทั้งหมดหรือไม่?",
      answer:
        "ไม่ใช่ เป็นข้อบังคับเฉพาะสำหรับผลิตภัณฑ์ที่ระบุไว้ภายใต้โครงการ 1 ของการรับรอง BIS",
    },
    {
      question: "ฉันจะหามาตรฐาน IS ที่เหมาะสมสำหรับผลิตภัณฑ์ของฉันได้อย่างไร?",
      answer:
        "เยี่ยมชมเว็บไซต์ BIS หรือปรึกษากับห้องปฏิบัติการทดสอบและที่ปรึกษาที่ได้รับการยอมรับจาก BIS เพื่อระบุมาตรฐานที่ใช้บังคับ",
    },
    {
      question: "ผู้ผลิตต่างประเทศสามารถสมัครการรับรอง BIS ได้หรือไม่?",
      answer:
        "ได้ ผ่านโครงการรับรองผู้ผลิตต่างประเทศ (FMCS) หน่วยงานต่างประเทศสามารถรับใบอนุญาต BIS สำหรับการใช้งานเครื่องหมาย ISI",
    },
    {
      question: "จะเกิดอะไรขึ้นหากผลิตภัณฑ์ของฉันไม่ผ่านการทดสอบ BIS?",
      answer:
        "คุณจะต้องแก้ไขปัญหาและส่งกลับเพื่อทำการทดสอบ ใบสมัครอาจถูกระงับจนกว่าจะแสดงการปฏิบัติตามที่สำเร็จ",
    },
    {
      question: "การรับรอง BIS จำเป็นสำหรับการส่งออกหรือไม่?",
      answer:
        "แม้ว่าจะไม่ใช่ข้อบังคับเสมอไปสำหรับการส่งออก แต่การรับรอง BIS เพิ่มความน่าเชื่อถือและสามารถตอบสนองผู้ซื้อหรือหน่วยงานกำกับดูแลระหว่างประเทศ",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="คำถามที่พบบ่อย"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          คำถามที่พบบ่อย
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          ไม่พบคำตอบที่คุณกำลังมองหา?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            ติดต่อเรา!
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
              บริการของเรา
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                ที่ปรึกษาใบรับรองที่ดีที่สุดในอินเดีย
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
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับการผลิตต่างประเทศ
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              การรับรองการลงทะเบียน CDSCO
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
              การลงทะเบียน BIS (CRS)
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
              การจัดการขยะพลาสติก
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
              การรับรองใบรับรอง EPR
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
              การรับรองใบรับรอง LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ใบรับรองการลงทะเบียน BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
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
              เครื่องหมาย ISI (BIS) สำหรับผู้ผลิตอินเดีย
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

