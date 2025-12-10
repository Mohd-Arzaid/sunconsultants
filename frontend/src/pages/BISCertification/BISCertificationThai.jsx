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
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationThai = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableThai />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterThai />
    </div>
  );
};

export default BISCertificationThai;

const BISCertificationMetaTags = () => {
  const title = "การรับรอง BIS ประเภท กระบวนการ เอกสาร ค่าธรรมเนียม";
  const description =
    "การรับรอง BIS หมายถึงกระบวนการขอใบรับรองมาตรฐานคุณภาพจากสำนักงานมาตรฐานอินเดีย (BIS) สำหรับการผลิตและจำหน่ายผลิตภัณฑ์ต่างๆ ในอินเดีย";
  const keywords =
    "การรับรอง BIS, กระบวนการรับรอง BIS, การลงทะเบียน BIS, กระบวนการลงทะเบียน BIS, โครงการรับรอง BIS, โครงการรับรองผลิตภัณฑ์, โครงการรับรองบังคับ, รายการผลิตภัณฑ์บังคับ BIS, เครื่องหมาย ISI, BIS FMCS, โครงการ Hallmarking BIS, โครงการ Eco Mark, ที่ปรึกษาการรับรอง BIS, ที่ปรึกษาการรับรอง ISI, ที่ปรึกษาเครื่องหมาย BIS ISI, การรับรอง BIS คืออะไร, ดาวน์โหลดการรับรอง BIS, ค่าใช้จ่ายการรับรอง BIS, การรับรอง BIS อินเดีย, ชื่อเต็มการรับรอง BIS, การรับรอง BIS อินเดีย, การรับรอง BIS อินเดีย, การรับรอง BIS หมายถึง, ตรวจสอบการรับรอง BIS, ใบอนุญาต BIS ออนไลน์ในอินเดีย, การรับรอง BIS ออนไลน์, ใบรับรอง BIS, ใบรับรอง BIS ออนไลน์";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal หัวหน้าฝ่ายปฏิบัติการที่ Sun Certification India";

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
                    การรับรอง BIS อินเดียสำหรับผู้นำเข้าและผู้ผลิต
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
              ความเชี่ยวชาญที่ได้รับการรับรอง
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              การรับรอง BIS อินเดีย
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            สำหรับผู้นำเข้าและผู้ผลิต
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            การรับรอง BIS รับประกันคุณภาพและความปลอดภัยของผลิตภัณฑ์ในอินเดีย
            มันเป็น บังคับสำหรับผลิตภัณฑ์หลายชนิดและต้องมีการทดสอบ เอกสาร และ
            การอนุมัติ
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
                ดูบริการ
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
    if (path.includes("/th/bis-certificate-khue-a-rai-bis-india"))
      return "การรับรอง BIS - หน้าไทย";
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
        description: "หมายเลขโทรศัพท์ควรมี (8-15 หลัก)",
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
        title: "ส่งแบบฟอร์มติดต่อสำเร็จ!",
        description: "ขอบคุณที่ติดต่อเรา ทีมของเราจะติดต่อกลับในไม่ช้า",
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        จองนัดหมาย
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        ต้องการติดต่อทีมของเราและกำหนดเวลาสำหรับการโทร?
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
    overview: "ภาพรวม",
    schemes: "โครงการ",
    process: "กระบวนการ",
    documents: "เอกสาร",
    cost: "ค่าใช้จ่าย",
    air: "AIR",
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
          aria-label="สลับเมนู"
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
        <ServicesRightSideContentThai />
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
        การรับรองเครื่องหมาย BIS ISI สำหรับผู้ผลิตอินเดีย
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="การรับรอง BIS อินเดีย"
          title="ใบรับรอง BIS สำหรับผู้ผลิตอินเดีย"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        บทนำ: ทำไมการรับรอง BIS จึงสำคัญ
      </h2>

      <p className="service-left-content-paragraph">
        ยกตัวอย่างเช่น
        ผู้ผลิตจากเยอรมนีที่คิดค้นอุปกรณ์อิเล็กทรอนิกส์ที่เป็นเอกลักษณ์
        และวางแผนที่จะขายในตลาดอินเดียที่เปลี่ยนไปอย่างรวดเร็ว
        อุปกรณ์นี้เป็นเอกลักษณ์ ปลอดภัย และได้รับการอนุมัติใน ยุโรป อย่างไรก็ตาม
        เมื่ออุปกรณ์ถูกนำไปที่ท่าเรือในอินเดีย เจ้าหน้าที่ศุลกากรยึดอุปกรณ์
        คำถามคือ "ทำไม?" คำตอบคือ อุปกรณ์ควรมีการรับรอง BIS ซึ่งเป็นส่วนสำคัญ
        เพื่อขายผลิตภัณฑ์อิเล็กทรอนิกส์ในอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        ผู้ผลิตทั่วโลกและผู้ผลิตอินเดียหลายรายต้องเผชิญกับกรณีเดียวกันทุก ปี
        สำหรับผู้บริโภคอินเดีย เครื่องหมาย BIS บนผลิตภัณฑ์ไม่ใช่แค่ โลโก้
        มันเป็นเครื่องหมายแห่งความไว้วางใจที่ผลิตภัณฑ์ได้รับการทดสอบสำหรับ
        คุณภาพ ความปลอดภัย และความน่าเชื่อถือ สำหรับธุรกิจ มันคือประตูสู่
        ตลาดที่ใหญ่ที่สุดแห่งหนึ่งในโลกทั้งโลก
      </p>

      <p className="service-left-content-paragraph">
        บทความนี้จะตอบคำถามทั้งหมดเกี่ยวกับการรับรอง BIS ความ จำเป็น กระบวนการ
        ประโยชน์ โครงการ ต้นทุน และระบบและ
        การนำทางที่มีให้สำหรับทั้งผู้ผลิตต่างประเทศและผู้ผลิตในประเทศ
      </p>

      <h2 className="service-left-content-heading-three">
        การรับรอง BIS คืออะไรสำหรับผู้ผลิตและผู้นำเข้า?
      </h2>

      <p className="service-left-content-paragraph">
        การรับรอง BIS คือการรับรองความมั่นใจในคุณภาพและความปลอดภัย
        ที่จัดทำโดยสำนักงานมาตรฐานอินเดีย (BIS) ซึ่งเป็นองค์กร
        รับรองระดับชาติของอินเดียภายใต้กระทรวงกิจการผู้บริโภค การรับรอง BIS
        รับประกันว่าผลิตภัณฑ์เป็นไปตามมาตรฐาน อินเดีย (IS) ในด้านประสิทธิภาพ
        ความปลอดภัย และคุณภาพ
      </p>
      <p className="service-left-content-paragraph">
        เมื่อผลิตภัณฑ์เป็นไปตามข้อกำหนดมาตรฐานคุณภาพเหล่านี้ สำนักงาน
        มาตรฐานอินเดียจะออกใบอนุญาต BIS หรือใบรับรอง BIS ซึ่งหมายความว่า
        ผลิตภัณฑ์มีสิทธิ์ในการใช้เครื่องหมาย ISI (สำหรับโครงการภายในประเทศ) หรือ
        เครื่องหมาย CRS พร้อมหมายเลขทะเบียนที่ไม่ซ้ำกัน (ภายใต้โครงการ
        การลงทะเบียนบังคับ BIS)
      </p>
      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตและผู้นำเข้าอินเดียหลายราย การรับรอง BIS เป็นสิ่งจำเป็น
        ครอบคลุมผลิตภัณฑ์ที่หลากหลายรวมถึงเครื่องใช้ไฟฟ้า
        ผลิตภัณฑ์ปูนซีเมนต์และเหล็ก น้ำดื่มบรรจุภัณฑ์
        อุปกรณ์อิเล็กทรอนิกส์เช่นโทรศัพท์มือถือ ไฟ LED power banks
        เครื่องประดับโลหะมีค่า (ผ่าน hallmarking) และอีกมากมาย ผู้ผลิตและ
        ผู้นำเข้าของผลิตภัณฑ์บังคับเหล่านี้ไม่สามารถขายหรือจำหน่ายได้ตามกฎหมาย
        สินค้าในอินเดียโดยไม่ได้รับการยอมรับ BIS
      </p>

      <h2 className="service-left-content-heading-three">
        ประวัติย่อของ BIS ในอินเดีย
      </h2>

      <p className="service-left-content-paragraph">
        สำนักงานมาตรฐานอินเดีย (BIS) ก่อตั้งขึ้นในปี 1986 โดยรับช่วงต่อจาก
        สถาบันมาตรฐานอินเดีย (ISI) ซึ่งก่อตั้งขึ้นในปี 1947 BIS ในขณะนี้
        ถือเป็นผู้พิทักษ์คุณภาพสำหรับมาตรฐานในอินเดียและได้
        จัดแนวปฏิบัติของพวกเขาให้สอดคล้องกับระดับสากลและทำการแก้ไขที่จำเป็น
        สำหรับเงื่อนไขอินเดีย
      </p>

      <div className="service-left-content-heading-three">
        จุดสำคัญที่โดดเด่น
      </div>

      <PointsListWithoutHeading
        points={[
          "ในปี 1947 ISI ก่อตั้งขึ้นเพื่อสนับสนุนระบบควบคุมคุณภาพหลังจากประเทศได้รับเอกราช",
          "ในปี 1955 เครื่องหมาย ISI ได้รับการมอบให้กลายเป็นหนึ่งในสัญลักษณ์คุณภาพที่มีชื่อเสียงที่สุดในอินเดีย",
          "ในปี 1986 พระราชบัญญัติ BIS ได้รับการอนุมัติแทนที่ ISI ด้วยสำนักงานมาตรฐานอินเดีย",
          "ในปี 2016 และ 2018 การแก้ไขเพิ่มเติมทำให้หน้าที่รับผิดชอบของ BIS ร่ำรวยยิ่งขึ้น ทำให้การ hallmarking และการรับรองผลิตภัณฑ์มีความละเอียดถี่ถ้วนมากขึ้น",
        ]}
      />

      <p className="service-left-content-paragraph">
        ปัจจุบัน BIS รับประกันความปลอดภัย ความน่าเชื่อถือ และการทำให้เป็นมาตรฐาน
        ของเครื่องมือและเครื่องจักรหลายพันรายการสำหรับผู้ใช้ชาวอินเดียทั่วหลาย
        อุตสาหกรรม
      </p>

      <h2 className="service-left-content-heading-three">
        ทำไมการรับรอง BIS จึงเป็นบังคับในอินเดีย?
      </h2>
      <p className="service-left-content-paragraph">
        ตลาดอินเดียมีขนาดใหญ่มาก เปลี่ยนแปลงตลอดเวลา และไวต่อราคา การเปลี่ยนแปลง
        อย่างไรก็ตาม ความเปิดกว้างนี้ยังทำให้ตลาดเสี่ยงต่อสินค้าราคาถูก
        และไม่ปลอดภัย ในบริบทนี้ การรับรอง BIS ทำหน้าที่เป็น เกราะป้องกัน
      </p>
      <PointsListWithoutHeading
        points={[
          "ความปลอดภัยของผู้บริโภค - ป้องกันผู้คนจากอุบัติเหตุที่อาจเกิดขึ้น ปัญหาสุขภาพ และการหลอกลวง",
          "การควบคุมตลาด - รับประกันว่าผลิตภัณฑ์ที่ไม่เป็นไปตามมาตรฐานจะไม่เข้าสู่ตลาดอินเดีย",
          "ความไว้วางใจและความมั่นใจ - เสริมสร้างความเชื่อมั่นของผู้บริโภคในผลิตภัณฑ์ในประเทศและต่างประเทศ",
          "การจัดแนวระดับโลก - ช่วยให้บริษัทต่างประเทศจัดแนวกับโครงสร้างการกำกับดูแลของอินเดีย",
          "การแข่งขันที่ยุติธรรม - ผู้เข้าร่วมตลาดทุกคน โดยไม่คำนึงถึงขนาด รับประกันว่าจะแข่งขันกันอย่างแท้จริงในเรื่องคุณภาพ",
        ]}
      />
      <p className="service-left-content-paragraph">
        การรับรอง BIS สำหรับน้ำดื่มบรรจุภัณฑ์เป็นตัวอย่างที่
        ขาดการรับรองอาจก่อให้เกิดปัญหาสุขภาพ อื่นๆ ที่ขาดอย่างเท่าเทียมกัน
        มาตรฐานการรับรองผลิตภัณฑ์สำหรับเครื่องทำน้ำอุ่น เครื่องปิ้งขนมปัง
        และอื่นๆ เครื่องใช้ไฟฟ้าสามารถนำไปสู่ไฟไหม้ได้ ดังนั้น โดยการมี
        การรับรอง BIS รัฐบาลทำให้แน่ใจว่าสิ่งท้าทายเหล่านี้ได้รับการแก้ไข
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">กระบวนการ</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">กระบวนการรับรอง BIS</h2>

      <p className="service-left-content-paragraph">
        กระบวนการรับรอง BIS ตามลำดับที่มีโครงสร้าง:
      </p>

      <PointsListWithoutHeading
        points={[
          "ระบุมาตรฐานที่เกี่ยวข้อง: เลือกมาตรฐานอินเดีย (IS) ที่ใช้ได้",
          "การยื่นคำขอ: ยื่นต่อ BIS และแนบเอกสารที่เกี่ยวข้อง",
          "การทดสอบผลิตภัณฑ์: การทดสอบทำในห้องปฏิบัติการ BIS ที่ได้รับการอนุมัติ",
          "การตรวจสอบโรงงาน: สถานที่ได้รับการตรวจสอบโดยเจ้าหน้าที่ BIS",
          "ใบอนุญาต BIS: ใบรับรองจะได้รับรางวัลสำหรับการประเมินที่ประสบความสำเร็จ",
          "การเฝ้าระวัง: การปฏิบัติตามอย่างต่อเนื่องพร้อมกับการเปลี่ยนแปลงใบอนุญาตเป็นบรรทัดฐานใหม่",
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
        <span className="service-left-content-index-heading">เอกสาร</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        เอกสารที่จำเป็นสำหรับการรับรอง BIS
      </h2>

      <p className="service-left-content-paragraph">
        ชุดเอกสารที่เข้มแข็งรับประกันการประมวลผลที่ราบรื่น ข้อกำหนด หลัก ได้แก่:
      </p>

      <PointsListWithoutHeading
        points={[
          "ใบอนุญาตธุรกิจหรือเอกสารการจดทะเบียนบริษัท",
          "แผนผังกระบวนการผลิต",
          "รายการเครื่องจักรและอุปกรณ์",
          "รายละเอียดผลิตภัณฑ์และข้อกำหนดทางเทคนิค",
          "รายงานการทดสอบจากห้องปฏิบัติการที่ได้รับการยอมรับจาก BIS",
          "คู่มือควบคุมคุณภาพ",
          "ใบรับรองเครื่องหมายการค้า",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        สำหรับผู้ผลิตต่างประเทศ:
      </h3>

      <PointsListWithoutHeading
        points={[
          "การแต่งตั้งตัวแทนอินเดียที่ได้รับอนุญาต (AIR)",
          "หลักฐานการเป็นตัวแทนและเอกสารประจำตัว",
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
        <span className="service-left-content-index-heading">ค่าใช้จ่าย</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ค่าใช้จ่ายการรับรอง BIS
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                ส่วนประกอบค่าใช้จ่าย
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                รายละเอียด
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมการสมัคร
              </TableCell>
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมครั้งเดียว ไม่สามารถคืนได้
                ขึ้นอยู่กับประเภทผลิตภัณฑ์
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมการทดสอบ
              </TableCell>
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ขึ้นอยู่กับความซับซ้อน;
                จ่ายให้กับห้องปฏิบัติการที่ได้รับการยอมรับจาก BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมใบอนุญาตรายปี
              </TableCell>
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                จ่ายรายปีเพื่อรักษาใบอนุญาต BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมการตรวจสอบ/การตรวจสอบโรงงาน
              </TableCell>
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                เรียกเก็บหากเจ้าหน้าที่ BIS เยี่ยมชมโรงงาน
                (การเดินทางภายในประเทศหรือ ต่างประเทศเพิ่มเติม)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ค่าธรรมเนียมที่ปรึกษา (ถ้าใช้ได้)
              </TableCell>
              <TableCell className="px-6 py-4  text-sm md:text-base font-geist text-[#42434d]">
                ทางเลือก สำหรับความช่วยเหลือการปฏิบัติตามแบบ end-to-end
                จากที่ปรึกษา
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
        บทบาทของตัวแทนอินเดียที่ได้รับอนุญาต (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตต่างประเทศ ตัวแทนอินเดียที่ได้รับอนุญาต (AIR) เป็น
        สิ่งสำคัญ
      </p>

      <PointsListWithoutHeading
        points={[
          "จัดการการสื่อสารทั้งหมดกับ BIS",
          "รวบรวมและส่งเอกสาร จากนั้นอำนวยความสะดวกกระบวนการตรวจสอบ",
          "รับประกันการปฏิบัติตามเกี่ยวกับการรับรอง ก่อน และหลัง",
          "ต้องเป็นพลเมืองอินเดียหรือองค์กรที่มีที่อยู่ท้องถิ่นที่จดทะเบียน",
        ]}
      />

      <p className="service-left-content-paragraph">
        ในกรณีที่ไม่มี AIR การได้รับใบรับรอง BIS สำหรับบริษัท
        ต่างประเทศเป็นไปไม่ได้
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

      <div className="service-left-content-heading-two">สรุป</div>

      <p className="service-left-content-paragraph">
        การมีใบรับรอง BIS เป็นสิ่งจำเป็นสำหรับการทำธุรกิจในอินเดีย
        มันไม่ใช่การรับรองทางเลือกในธุรกิจอีกต่อไป มันมีความสำคัญสำหรับ
        ความสำเร็จทางธุรกิจและการสร้างความไว้วางใจ BIS
        เป็นสิ่งจำเป็นสำหรับความปลอดภัยและ ความสำเร็จในอินเดีย
        สำหรับผู้ผลิตและผู้นำเข้า มันให้สภาพแวดล้อมการตั้งค่าธุรกิจที่ง่ายและ
        ปลอดภัย ปัญหาทางกฎหมายและค่าปรับไม่ใช่เรื่องกังวลอีกต่อไป
        ด้วยเครื่องหมาย BIS ความไว้วางใจของผู้บริโภคได้รับการรับประกัน
      </p>

      <p className="service-left-content-paragraph">
        อินเดียเป็นหนึ่งในเศรษฐกิจที่เติบโตเร็วที่สุดในโลกและการได้รับ
        การเข้าถึงเพื่อขายที่นั่นสามารถช่วยให้ผู้ส่งออกเติบโต ไม่ว่าคุณจะเป็น
        ผู้ผลิตในอินเดียหรือต่างประเทศ ใบอนุญาต BIS จำเป็นสำหรับ
        การผลิตหรือขายผลิตภัณฑ์ในตลาดอินเดีย มันเป็นสิ่งจำเป็น และมัน
        ปลดล็อกโอกาสทางธุรกิจกับประชากรที่เพิ่มขึ้นของอินเดีย มันคือ
        การลงทุนในความปลอดภัย ความไว้วางใจของผู้บริโภค ชื่อเสียงแบรนด์
        ความน่าเชื่อถือ และ การเติบโตในระยะยาว
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">โครงการ</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">โครงการรับรอง BIS</h2>

      <p className="service-left-content-paragraph">
        BIS มีโครงการรับรองมากมายที่ออกแบบมาสำหรับอุตสาหกรรมที่หลากหลาย
        และประเภทผลิตภัณฑ์
        แต่ละโครงการได้รับการออกแบบมาเพื่อตอบสนองความต้องการเฉพาะของ
        อุตสาหกรรมและผลิตภัณฑ์
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – โครงการรับรองผู้ผลิตต่างประเทศ",
          "โครงการเครื่องหมาย ISI (ผู้ผลิตในประเทศ)",
          "Scheme X ภายใต้ BIS อินเดีย",
          "CRS – โครงการการลงทะเบียนบังคับ",
          "โครงการ Hallmarking (เครื่องประดับ & โลหะมีค่า)",
          "การรับรอง Eco Mark",
          "โครงการรับรองระบบการจัดการ (MSCS)",
          "LRS (โครงการการยอมรับห้องปฏิบัติการ)",
        ]}
        linkMap={{
          "FMCS – โครงการรับรองผู้ผลิตต่างประเทศ":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "โครงการเครื่องหมาย ISI (ผู้ผลิตในประเทศ)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X ภายใต้ BIS อินเดีย":
            "indian-bis-certification-under-scheme-x",
          "CRS – โครงการการลงทะเบียนบังคับ":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        โครงการเครื่องหมาย ISI (ผู้ผลิตในประเทศ)
      </h3>

      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตอินเดีย การได้รับใบอนุญาต BIS เป็นข้อกำหนดเบื้องต้นสำหรับ
        การรับประกันการขายตามกฎหมายของผลิตภัณฑ์ของพวกเขาภายในประเทศ ใบรับรองนี้
        ออกโดยสำนักงานมาตรฐานอินเดีย (BIS) เพื่อ
        รับรองการตอบสนองมาตรฐานอินเดียที่เกี่ยวข้องกับคุณภาพ ความปลอดภัย
        และเกณฑ์ประสิทธิภาพสำหรับผลิตภัณฑ์ ซึ่งรวมถึงการตรวจสอบโรงงาน
        การทดสอบผลิตภัณฑ์และการตรวจสอบการปฏิบัติตามพารามิเตอร์ BIS
        เมื่อผลิตภัณฑ์ผ่าน ผู้ผลิตได้รับอนุญาตให้ใส่เครื่องหมาย ISI บนผลิตภัณฑ์
        เครื่องหมายนี้เป็นเครื่องหมายการค้าสำหรับผู้ผลิตและ
        ช่วยลูกค้าระบุผลิตภัณฑ์ที่รับรอง ISI จริง
      </p>

      <p className="service-left-content-paragraph">
        ไม่ว่าจะเป็นสำหรับอุปกรณ์อิเล็กทรอนิกส์ เหล็ก ปูนซีเมนต์ พลาสติก หรือ
        วัสดุก่อสร้าง การได้รับใบรับรอง BIS เป็นสิ่งจำเป็นสำหรับ การเข้าถึงตลาด
        แตกต่างจากการได้รับความเชื่อมั่นของผู้บริโภค ใบรับรอง BIS
        เพิ่มชื่อเสียงของผู้ผลิตอินเดีย ช่วยให้
        พวกเขาสามารถมีส่วนร่วมในสัญญาของรัฐบาล และเปิดโอกาสทางธุรกิจอื่นๆ
        อีกมากมาย สิ่งสำคัญที่สุด คือการขาดการรับรอง BIS อาจมีผลกระทบที่เสียหาย
        ตั้งแต่ค่าปรับทางกฎหมาย
        และการเรียกคืนผลิตภัณฑ์ไปจนถึงการห้ามขายในอินเดียอย่างสมบูรณ์ ดังนั้น
        การปฏิบัติตาม BIS ไม่เพียงแต่เป็นข้อกำหนดทางกฎหมาย
        แต่ยังเป็นกลยุทธ์ที่มีเป้าหมาย
        สำหรับการขยายและรักษาความเชื่อมั่นของผู้บริโภค
      </p>

      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตอินเดีย โครงการเครื่องหมาย ISI
        เป็นเครื่องหมายที่มีชื่อเสียงที่สุด ภายใต้โครงการ
        ผู้ผลิตอินเดียจำเป็นต้องให้
        ผลิตภัณฑ์ของพวกเขาทดสอบที่สถานที่ทดสอบที่ได้รับการยอมรับจาก BIS สถานที่
        ผลิตเป็นเรื่องของการตรวจสอบและการทดสอบ ผลิตภัณฑ์ที่ปฏิบัติตาม
        ได้รับการอนุมัติให้ใช้เครื่องหมาย ISI เป็นความผิดในการจัดหา
        ผลิตภัณฑ์เช่นปูนซีเมนต์ ถังก๊าซ LPG สายเคเบิลไฟฟ้า น้ำดื่มบรรจุภัณฑ์
        และอื่นๆ โดยไม่มีเครื่องหมาย ISI
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – โครงการรับรองผู้ผลิตต่างประเทศ
      </h3>

      <p className="service-left-content-paragraph">
        โครงการรับรองผู้ผลิตต่างประเทศ (FMCS) เป็นโครงการ
        ที่พัฒนาขึ้นโดยสำนักงานมาตรฐานอินเดียสำหรับบริษัทต่างประเทศ
        ที่ต้องการเข้าสู่ตลาดอินเดีย โครงการนี้รับประกันความปลอดภัย คุณภาพ
        และการประกันประสิทธิภาพของผลิตภัณฑ์ที่ผลิตในต่างประเทศ
        ที่เป็นไปตามมาตรฐานอินเดียที่ต้องการ ตาม FMCS บริษัท
        ต่างประเทศที่ต้องการขายผลิตภัณฑ์ในอินเดียต้องได้รับใบรับรองสำนักงาน
        มาตรฐานอินเดียหรือใบอนุญาตก่อน เช่นเดียวกับผู้ผลิตอินเดีย
        ผู้ผลิตต่างประเทศยังจำเป็นต้องได้รับใบอนุญาต BIS เพื่อใช้ เครื่องหมาย
        ISI บนผลิตภัณฑ์ของพวกเขา เครื่องหมาย ISI ที่ต้องการจะได้รับหลังจาก
        การประเมินอย่างละเอียดซึ่งรวมถึงการตรวจสอบโรงงานและการทดสอบตัวอย่างผลิตภัณฑ์อย่างเข้มงวด
        กับมาตรฐานอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        ผู้ผลิตต่างประเทศจำเป็นต้องแต่งตั้งตัวแทนอินเดียที่ได้รับอนุญาต (AIR)
        ซึ่งรับผิดชอบต่อการสื่อสารและ การประสานงาน
        เป็นจุดติดต่อแรกกับสำนักงานมาตรฐาน อินเดีย (BIS) สำหรับโครงการ
        รวมถึงการยื่น คำขอ การประเมินการปฏิบัติตามอย่างลึกซึ้ง
        และการรับภาระทั้งหมด
        ภาระผูกพันที่จำเป็นเพื่อให้บรรลุการปฏิบัติตามภายในกำหนดเวลา จากการ
        ปฏิบัติตามแนวทาง FMCS บริษัทต่างประเทศสามารถ เข้าสู่ตลาดอินเดียได้
        รวมถึงได้รับความนิยมจากลูกค้า ผลิตภัณฑ์ใดๆ ที่มีเครื่องหมาย ISI
        แสดงระดับคุณภาพ ความปลอดภัย และ การรับประกันความน่าเชื่อถือในอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        ไม่มีผลิตภัณฑ์ต่างประเทศที่อยู่ในหมวดหมู่ที่ถูกควบคุม
        ได้รับอนุญาตให้เข้าสู่อินเดียโดยไม่มีการรับรอง FMCS
      </p>

      <h3 className="service-left-content-heading-three">
        Scheme X (ข้อบังคับทางเทคนิค Omnibus)
      </h3>

      <p className="service-left-content-paragraph">
        Scheme X หรือข้อบังคับทางเทคนิค Omnibus เป็นโครงการรับรอง BIS
        อีกโครงการหนึ่งที่ออกแบบโดยสำนักงานมาตรฐานอินเดียเพื่อช่วย
        ลดความซับซ้อนของขั้นตอนการปฏิบัติตามของอุตสาหกรรมในด้านกลไกและ ไฟฟ้า
        แตกต่างจากโครงการรับรองอื่นๆ Scheme X มุ่งเน้นที่การลดเอกสาร การประเมิน
        และการอนุมัติในขณะที่ รับประกันว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดีย
        ผลิตภัณฑ์ที่มี
        เครื่องหมายมาตรฐานมีคุณภาพและความปลอดภัยที่ยอดเยี่ยมและสามารถขายได้
        หลังจากผ่านการทดสอบประเภท การตรวจสอบโรงงาน และการรับรองอย่างง่าย
        ของข้อกำหนดบังคับ
      </p>

      <p className="service-left-content-paragraph">
        Scheme X ครอบคลุมเครื่องจักรหนักและแนวทางความปลอดภัยอุปกรณ์ไฟฟ้า
        สำหรับผลิตภัณฑ์เช่นปั๊ม เครน หม้อแปลง เครื่อง
        เครื่องมือและผลิตภัณฑ์วิศวกรรมหนักอื่นๆ
        เหล่านี้เป็นอุตสาหกรรมที่เกี่ยวข้องมากที่สุด
        และทั้งหมดที่ความน่าเชื่อถือและความปลอดภัยเป็นสิ่งจำเป็น Scheme X
        สะดวกเนื่องจากช่วยลดเวลาและต้นทุนของการรับรอง BIS ที่ซับซ้อน
        มันมุ่งหวังที่จะปรับปรุงกระบวนการปฏิบัติตามเพื่อ
        อำนวยความสะดวกการเคลียร์ที่เร็วกว่าสำหรับการตลาดและชื่อเสียงที่เพิ่มขึ้น
        โดยไม่กระทบต่อมาตรฐานคุณภาพและความปลอดภัย ชื่อเสียงที่ยั่งยืนและ
        แบบดั้งเดิมของสำนักงานมาตรฐานอินเดียทำให้การค้าระหว่างประเทศง่ายขึ้น
        ซึ่งจำเป็นสำหรับบริษัทเพื่อให้เป็นไปตามข้อกำหนด
        การปฏิบัติตามและเพิ่มขีดความสามารถในการแข่งขัน
      </p>

      <p className="service-left-content-paragraph">
        BIS Scheme X เป็นบังคับเพื่อเข้าถึงอุตสาหกรรมเครื่องจักรหนักอินเดีย
        โครงการใหม่นี้มีความสำคัญสำหรับการแข่งขันทางการตลาดที่ดีขึ้น นวัตกรรม
        และการปฏิบัติตามกฎระเบียบซึ่งถูกปรับปรุงผ่าน โครงสร้างที่เรียบง่าย
        แต่แข็งแกร่งนี้
      </p>

      <h3 className="service-left-content-heading-three">
        โครงการการลงทะเบียนบังคับ (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        สำนักงานมาตรฐานอินเดีย (BIS) ได้พัฒนาโปรแกรมการรับรอง BIS
        ที่เรียกว่าโครงการการลงทะเบียนบังคับ (CRS) โดยมีเป้าหมายที่
        การควบคุมผลิตภัณฑ์ IT และอิเล็กทรอนิกส์ในอินเดีย
        มันมุ่งเน้นที่การประเมิน
        ความปลอดภัยและคุณภาพของผลิตภัณฑ์ที่มีความเสี่ยงสูงเช่นไฟ LED
        โทรศัพท์มือถือ แล็ปท็อป power banks
        และอุปกรณ์อิเล็กทรอนิกส์สำหรับผู้บริโภคอื่นๆ เทียบกับ มาตรฐานอินเดีย CRS
        ตรงกันข้ามกับโครงการ ISI ไม่ได้ออก เครื่องหมาย ISI แต่ผลิตภัณฑ์ที่รับรอง
        ตามโครงการ มี เครื่องหมาย CRS พร้อมหมายเลขทะเบียนที่ไม่ซ้ำกัน
        อุปกรณ์อิเล็กทรอนิกส์และ IT ทั้งหมด
        ผลิตภัณฑ์ต้องได้รับการทดสอบในห้องปฏิบัติการที่ได้รับการยอมรับจาก BIS และ
        ลงทะเบียนอย่างเป็นทางการกับ BIS CRS
        ใช้เพื่อให้แน่ใจว่ามีการปฏิบัติตามก่อนที่พวกเขา
        สามารถขายหรือนำเข้าสู่อินเดีย
      </p>

      <p className="service-left-content-paragraph">
        โครงการนี้มีความจำเป็นสำหรับการปกป้องผู้บริโภคอินเดียจากอุปกรณ์อิเล็กทรอนิกส์ที่ไม่ปลอดภัย
        คุณภาพต่ำ หรือของปลอม โดยเฉพาะในกรณีของ ตลาดดิจิทัลที่เติบโตอย่างรวดเร็ว
        ทั้งผู้ผลิตอินเดียและต่างประเทศ จำเป็นต้องได้รับใบรับรอง CRS
        บริษัทต่างประเทศต้องแต่งตั้ง ตัวแทนอินเดียที่ได้รับอนุญาต AIR
        เพื่อให้แน่ใจว่ามีการปฏิบัติตาม BIS
        อัปเดตรายการผลิตภัณฑ์ที่ครอบคลุมภายใต้ CRS อย่างต่อเนื่องเพื่อ
        รวมผลิตภัณฑ์และเทคโนโลยีใหม่และปัญหาความปลอดภัยที่เกิดขึ้นใหม่ สำหรับ
        ผู้ผลิต การได้รับ registration BIS ภายใต้ CRS เป็นข้อได้เปรียบ
        เพิ่มเติมเนื่องจากช่วยในการปฏิบัติตามกฎระเบียบและยังเพิ่ม
        ความไว้วางใจของลูกค้า ชื่อเสียงของบริษัท และการเข้าถึงตลาดใน
        อุตสาหกรรมอิเล็กทรอนิกส์ในอินเดีย
      </p>

      <h3 className="service-left-content-heading-three">
        โครงการ Hallmarking
      </h3>

      <p className="service-left-content-paragraph">
        ในอินเดีย การ hallmarking ของเครื่องประดับทองและเงินเป็นบังคับภายใต้
        โครงการ Hallmarking และควบคุมโดยสำนักงานมาตรฐานอินเดีย (BIS)
        ซึ่งรับประกันความบริสุทธิ์และความแท้ของเครื่องประดับ
        บทความโลหะมีค่าถูกทดสอบที่ศูนย์การ Assaying และ Hallmarking (AHC)
        ที่ได้รับการอนุมัติจาก BIS และถูกประทับด้วยเครื่องหมาย hallmark
        กระบวนการนี้ เสร็จสมบูรณ์เฉพาะเมื่อบทความเป็นไปตามมาตรฐานอินเดีย
        ที่กำหนดไว้ตั้งแต่ต้น ต้องได้รับใบอนุญาต BIS ก่อนซึ่ง
        อนุญาตให้พวกเขาขายเครื่องประดับที่มี hallmark นี่เป็นวิธีเดียวที่จะทำได้
        ตามกฎหมาย ต้องผ่านและเสร็จสิ้นการทดสอบผลิตภัณฑ์ การตรวจสอบ BIS
        และการตรวจสอบการปฏิบัติตามอย่างต่อเนื่องเพื่อขายเครื่องประดับที่มี
        hallmark กระบวนการ ในที่สุด ป้องกันผู้บริโภคและรับประกัน ความบริสุทธิ์
        น้ำหนักและคุณภาพและจำกัดการปฏิบัติที่ไม่ถูกต้องรวมถึงการฉ้อโกง
        ในตลาดเครื่องประดับ
      </p>

      <p className="service-left-content-paragraph">
        สำหรับผู้บริโภคอินเดีย ทองและเงินไม่ใช่แค่เครื่องประดับแต่ยังเป็น
        การลงทุนหลัก ซึ่งทำให้ความไว้วางใจและความโปร่งใสเป็นสิ่งจำเป็น การ
        hallmarking
        เครื่องประดับเป็นเครื่องหมายแห่งความมั่นใจสำหรับพลเมืองทั่วไปใน
        ประเทศที่ชิ้นเครื่องประดับทุกชิ้นสำหรับการขายได้ผ่านการทดสอบอย่างละเอียด
        กับเกณฑ์มาตรฐานระดับชาติต่างๆ และการปฏิบัติทางการค้าที่ยุติธรรม
        สามารถแสดงความน่าเชื่อถือและชื่อเสียงทางการตลาดโดย การ hallmarking
        เครื่องประดับ การไม่สามารถปฏิบัติตามกฎที่กำหนดนำ
        การลงโทษซึ่งอาจรวมถึงการระงับใบอนุญาต สำหรับการ hallmarking ภายใต้ BIS
        มันทำหน้าที่เป็นการเติมเต็มภาระผูกพันตามหลักการและกฎหมาย
        นี่ไม่เพียงแต่เพิ่มความพึงพอใจของผู้บริโภคเท่านั้น แต่ยัง
        เพิ่มตลาดเครื่องประดับอินเดียโดยรวม นี่ก็เป็นกรณี
        สำหรับผู้ค้าปลีกขนาดเล็กและผู้ผลิตขนาดใหญ่
      </p>

      <h3 className="service-left-content-heading-three">การรับรอง Eco Mark</h3>

      <p className="service-left-content-paragraph">
        Eco Mark เป็นโครงการการยอมรับที่เน้นนวัตกรรมที่สร้างขึ้นโดย
        สำนักงานมาตรฐานอินเดีย (BIS) โดยมีเป้าหมายที่การส่งเสริมสินค้า
        ที่เป็นมิตรต่อสิ่งแวดล้อม
        แตกต่างจากการรับรองแบบดั้งเดิมซึ่งเกี่ยวข้องกับตัวเอง
        อย่างเด่นชัดกับพารามิเตอร์ความปลอดภัยและคุณภาพ Eco Mark จะได้รับรางวัล
        ให้กับสินค้าที่เป็นไปตามมาตรฐานอินเดียและแสดงอย่างน้อยบางอย่าง
        ระดับที่ลดลงของผลกระทบด้านสิ่งแวดล้อมที่ไม่ดีระหว่างหนึ่งหรือมากกว่า
        ของขั้นตอนต่างๆ ของวงจรชีวิตของสินค้า การรับรอง Eco Mark
        ได้รับรางวัลเฉพาะหลังจากทดสอบอย่างมากและพิสูจน์ เกณฑ์ -
        การปฏิบัติตามซึ่งรวมถึงระดับการปล่อย ความไม่เป็นพิษ
        อัตราการย่อยสลายทางชีวภาพ ความสามารถในการรีไซเคิลและการโต้ตอบโดยรวม
        กับระบบ Eco Mark เช่นเดียวกับเครื่องหมาย ISI เป็นสัญลักษณ์ของ
        การรับประกันจากรัฐบาลซึ่งได้รับสถานะของ เครื่องหมายรับรอง
        แต่มีเป้าหมายที่ชัดเจนยิ่งขึ้นของความยั่งยืนด้านสิ่งแวดล้อม
      </p>

      <p className="service-left-content-paragraph">
        ใบอนุญาต BIS พร้อม Eco Mark รับรองว่าบริษัทมีส่วนร่วมใน
        การผลิตที่มีความรับผิดชอบและใส่ใจสิ่งแวดล้อม มันรับประกัน
        การปฏิบัติตามกฎหมายและสร้างข้อได้เปรียบในการแข่งขันกับ
        ผู้บริโภคที่ป้องกันและธุรกิจที่มุ่งเน้นความยั่งยืน Eco Mark
        ช่วยสำหรับอุตสาหกรรมที่จะไว้วางใจและนำไปใช้แนวทางที่เป็นมิตรต่อสิ่งแวดล้อมและสำหรับ
        ผู้บริโภคที่จะไว้วางใจว่าผลิตภัณฑ์ที่พวกเขาซื้อปลอดภัยและ
        มีความรับผิดชอบต่อสิ่งแวดล้อม Eco Mark
        สนับสนุนวิสัยทัศน์ของอินเดียสำหรับ
        การปกป้องคุณภาพที่เพิ่มขึ้นพร้อมกับการปกป้องสิ่งแวดล้อมภายใต้ BIS
      </p>

      <h3 className="service-left-content-heading-three">
        โครงการรับรองระบบการจัดการ (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        โครงการรับรองระบบการจัดการ (MSCS) ที่ริเริ่มโดย สำนักงานมาตรฐานอินเดีย
        (BIS) เป็นขั้นตอนทีละขั้นตอนซึ่งประเมิน
        และยอมรับบริษัทที่เกี่ยวข้องสำหรับการดำเนินการระบบการจัดการที่ยอมรับและรับรองในระดับสากล
        กรอบ MSCS ประกอบด้วย มาตรฐาน ISO เช่น ISO 9001 การจัดการคุณภาพ ISO 14001
        การจัดการสิ่งแวดล้อม ISO 45001 ระบบการจัดการอาชีวอนามัยและความปลอดภัย
        และอื่นๆ MSCS รับรองบริษัทสำหรับการดำเนินการทางกฎหมาย ความสอดคล้อง
        และการปรับปรุงอย่างต่อเนื่องของการดำเนินการ บริษัทที่ได้รับ
        การรับรองผ่านการประเมินและการตรวจสอบมากมายซึ่งช่วยให้พวกเขาสร้าง
        ความไว้วางใจในหมู่ลูกค้า ผู้ควบคุม และผู้มีส่วนได้ส่วนเสียซึ่ง
        เสริมสร้างการรับประกันความปลอดภัย คุณภาพ และความยั่งยืน
      </p>

      <p className="service-left-content-paragraph">
        BIS เป็นองค์กรมาตรฐานระดับชาติของอินเดียและเป็นองค์กรรับรอง
        สำหรับการเพิ่มชื่อเสียงและความน่าเชื่อถือขององค์กร ในประเทศและนอกอินเดีย
        MSCS นอกเหนือจากการส่งเสริมความรับผิดชอบ
        ผ่านการดูแลเป็นระยะและการรับรองใหม่ยังช่วยปลดปล่อย
        ธุรกิจเพื่อสนับสนุนโปรแกรมที่นำโดยสาธารณะอย่างแข็งขันเช่น Make in India
        และ Atmanirbhar Bharat นอกจากภาระผูกพันทางกฎหมาย โครงการยังช่วยใน
        การปลูกฝังวัฒนธรรมของความซื่อสัตย์ ประสิทธิภาพและการค้าที่ยุติธรรม MSCS
        ส่งเสริมการค้าและการลงทุนโดยบริษัทที่ได้รับการรับรองและ BIS
        มีบทบาทสำคัญในการพัฒนาระบบนิเวศคุณภาพของ ประเทศ
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – โครงการการยอมรับห้องปฏิบัติการ
      </h3>

      <p className="service-left-content-paragraph">
        ภายใต้สำนักงานมาตรฐานอินเดีย (BIS) โครงการการยอมรับห้องปฏิบัติการ (LRS)
        เป็นส่วนสำคัญของระบบที่รับประกันความน่าเชื่อถือ
        และความสามารถโดยรวมของห้องปฏิบัติการที่ทดสอบและรับรองผลิตภัณฑ์
        สำหรับการอนุมัติ BIS
        ห้องปฏิบัติการดังกล่าวได้รับการประเมินอย่างสำคัญในคุณลักษณะที่หลากหลาย
        ซึ่งรวมถึงความรู้ทางเทคนิค คุณภาพของกำลังแรงงาน โครงสร้างพื้นฐาน
        และความสามารถโดยรวมและความพึงพอใจของห้องปฏิบัติการ กับมาตรฐาน ISO/IEC
        17025 ห้องปฏิบัติการเหล่านี้เมื่อได้รับการอนุมัติแล้วจะ
        ได้รับอนุญาตให้ทำการทดสอบบนผลิตภัณฑ์ที่การประเมินความสอดคล้อง
        ถูกทำเป็นส่วนหนึ่งของโปรแกรมการรับรอง BIS ต่างๆ เช่น โครงการเครื่องหมาย
        ISI และโครงการการลงทะเบียนบังคับ (CRS) เป็นที่ ชัดเจนว่าสำหรับผู้ผลิต
        โดยเฉพาะสำหรับผู้นำเข้าและผู้ส่งออก
        รายงานที่ได้จากห้องปฏิบัติการที่ได้รับการอนุมัติจาก LRS
        เป็นข้อกำหนดที่สำคัญ เพื่อให้บรรลุใบรับรอง BIS
        ซึ่งเป็นข้อกำหนดทางกฎหมายสำหรับบาง ผลิตภัณฑ์
      </p>

      <p className="service-left-content-paragraph">
        LRS กำลังเสริมพลังระบบการรับประกันของอินเดียโดยรักษาความยุติธรรมใน
        ผลการทดสอบและรับประกันว่าผลลัพธ์ทั้งหมดมีความสอดคล้องและ
        ถูกเปรียบเทียบระดับโลก ในขณะที่ให้การรับรองเฉพาะที่น่าเชื่อถือและดี
        ห้องปฏิบัติการ เพื่อยึดมั่นในความซื่อสัตย์และความโปร่งใส BIS
        ดำเนินการปกติ การตรวจสอบ การทดสอบความสามารถ
        และการเฝ้าระวังของแผนผังที่ได้รับการยอมรับ ห้องปฏิบัติการ
        การยอมรับการรับรองนี้ช่วยให้ BIS ปรับปรุงความไว้วางใจ
        จากผู้บริโภคในขณะที่ทำให้กระบวนการรับรองมีประสิทธิภาพมากขึ้นสำหรับ
        อุตสาหกรรม เนื่องจากเฉพาะผลิตภัณฑ์ที่ปลอดภัย เป็นไปตามมาตรฐาน
        และมีคุณภาพสูงเท่านั้นที่จะ นำเสนอในตลาดอินเดีย
        สำหรับองค์กรที่มีเป้าหมายเพื่อรับ การรับรอง BIS
        การทำงานร่วมกับห้องปฏิบัติการที่ได้รับการอนุมัติจาก LRS
        เป็นสิ่งสำคัญที่สุด เพื่อให้บรรลุการปฏิบัติตามและการเข้าถึงตลาด
      </p>

      <h3 className="service-left-content-heading-three">
        ผลิตภัณฑ์ที่ต้องการการรับรอง BIS
      </h3>

      <p className="service-left-content-paragraph">
        การรับรอง BIS ใช้กับผลิตภัณฑ์ที่หลากหลาย ตัวอย่าง รวมถึง:
      </p>

      <PointsListWithoutHeading
        points={[
          "ไฟฟ้า & อิเล็กทรอนิกส์ – ไฟ LED โทรศัพท์มือถือ ตัวแปลง แล็ปท็อป",
          "วัสดุก่อสร้าง – ปูนซีเมนต์ เหล็กเส้น ผลิตภัณฑ์โครงสร้าง",
          "สินค้าอุปโภคบริโภค – น้ำดื่มบรรจุภัณฑ์ ถังก๊าซหุงต้ม",
          "เครื่องประดับ & โลหะมีค่า – บทความทองและเงินภายใต้ hallmarking",
          "อุปกรณ์อุตสาหกรรม – ปั๊ม หม้อแปลง เครื่องมือเครื่องจักร",
        ]}
      />

      <p className="service-left-content-paragraph">
        รายการยังคงเติบโตต่อไปเมื่อความเสี่ยงและเทคโนโลยีใหม่เกิดขึ้น
      </p>

      <h3 className="service-left-content-heading-three">
        ประโยชน์ของการรับรอง BIS
      </h3>

      <p className="service-left-content-paragraph">
        สำหรับบริษัท ใบรับรอง BIS ให้ประโยชน์มากกว่าการปฏิบัติตามกฎหมาย
        ตามกฎหมาย
      </p>

      <PointsListWithoutHeading
        points={[
          "การปฏิบัติตามกฎหมาย: ไม่มีค่าปรับ ไม่มีการห้าม ไม่มีการยึด",
          "การเข้าถึงตลาด: จำเป็นสำหรับการขายผลิตภัณฑ์ที่ถูกควบคุมในอินเดีย",
          "ความไว้วางใจของผู้บริโภค: สร้างด้วยเครื่องหมาย ISI ที่ได้รับการยอมรับอย่างดีเป็นสัญลักษณ์ของการพิสูจน์",
          "ข้อได้เปรียบในการแข่งขัน: ในฐานะบริษัทที่ได้รับการรับรองสามารถแยกแยะจากคู่แข่งที่ไม่ได้รับการรับรองได้อย่างง่ายดาย",
          "การอำนวยความสะดวกการส่งออก: ผู้ซื้อต่างประเทศจำนวนมากเข้าใจและชื่นชมการรับรอง BIS",
          "การเข้าร่วมในงานเสนอราคา: โครงการของรัฐบาลจำนวนมากมอบสัญญาสำหรับสินค้าที่รับรอง BIS",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "การรับรอง BIS ในอินเดียคืออะไร?",
      answer:
        "การรับรอง BIS เป็นการรับรองการประกันคุณภาพที่ออกโดยสำนักงานมาตรฐานอินเดีย (BIS) เพื่อให้แน่ใจว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดียด้านความปลอดภัย ประสิทธิภาพ และคุณภาพ เป็นข้อบังคับสำหรับหมวดหมู่ผลิตภัณฑ์ต่างๆ และช่วยในการปกป้องผู้บริโภคและการปฏิบัติตามกฎระเบียบ",
    },
    {
      question: "ทำไมฉันต้องมีใบรับรอง BIS?",
      answer:
        "ใบรับรอง BIS เป็นสิ่งจำเป็นในการผลิต นำเข้า จัดจำหน่าย หรือขายผลิตภัณฑ์บางอย่างในอินเดียอย่างถูกกฎหมาย มันให้ความมั่นใจแก่ผู้บริโภคว่าผลิตภัณฑ์เป็นไปตามแนวทางความปลอดภัยและคุณภาพของมาตรฐานอินเดีย",
    },
    {
      question: "เครื่องหมาย ISI ภายใต้การรับรอง BIS คืออะไร?",
      answer:
        "เครื่องหมาย ISI เป็นสัญลักษณ์การรับรองที่ให้ภายใต้โครงการรับรอง BIS มันบ่งชี้ว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดียและได้รับการรับรองโดย BIS อินเดียผ่านการทดสอบและการลงทะเบียนที่เหมาะสม",
    },
    {
      question: "ใครเป็นผู้ออกใบอนุญาต BIS ในอินเดีย?",
      answer:
        "ใบอนุญาต BIS ออกโดยสำนักงานมาตรฐานอินเดีย (BIS อินเดีย) ซึ่งเป็นองค์กรมาตรฐานระดับชาติภายใต้กระทรวงกิจการผู้บริโภค อาหาร และการกระจายสินค้าสาธารณะ",
    },
    {
      question: "โครงการรับรอง BIS มีกี่ประเภท?",
      answer:
        "โครงการรับรอง BIS หลัก ได้แก่ โครงการเครื่องหมาย ISI โครงการการลงทะเบียนบังคับ (CRS) โครงการรับรองผู้ผลิตต่างประเทศ (FMCS) การทำเครื่องหมายสำหรับเครื่องประดับ การรับรอง Eco Mark และโครงการ X สำหรับเครื่องจักรอุตสาหกรรม",
    },
    {
      question: "โครงการ X ภายใต้การรับรอง BIS คืออะไร?",
      answer:
        "โครงการ X เป็นกระบวนการรับรอง BIS ที่เรียบง่ายซึ่งใช้กับผลิตภัณฑ์อุตสาหกรรม เช่น ปั๊ม หม้อแปลง เครื่องมือเครื่องจักร และเครน มันรับประกันการอนุมัติที่เร็วกว่าโดยไม่กระทบต่อการปฏิบัติตามมาตรฐานอินเดีย",
    },
    {
      question: "ผลิตภัณฑ์ใดบ้างที่ต้องการการรับรอง BIS ในอินเดีย?",
      answer:
        "ผลิตภัณฑ์ เช่น เครื่องใช้ไฟฟ้า อิเล็กทรอนิกส์ เครื่องครัว ปูนซีเมนต์ เหล็ก เครื่องประดับทอง โทรศัพท์มือถือ และหม้อแปลง ต้องการการรับรอง BIS ตามคำสั่งของ BIS อินเดีย",
    },
    {
      question: "การลงทะเบียน BIS เป็นข้อบังคับสำหรับผลิตภัณฑ์ทั้งหมดหรือไม่?",
      answer:
        "ไม่ การลงทะเบียน BIS เป็นข้อบังคับเฉพาะสำหรับผลิตภัณฑ์ที่อยู่ในรายการโครงการรับรองบังคับเท่านั้น อย่างไรก็ตาม การรับรอง BIS โดยสมัครใจก็มีให้เพื่อเพิ่มความน่าเชื่อถือของผลิตภัณฑ์",
    },
    {
      question: "ใบอนุญาต BIS มีอายุการใช้งานนานแค่ไหน?",
      answer:
        "ใบอนุญาต BIS โดยทั่วไปมีอายุการใช้งานหนึ่งถึงสองปีและต้องต่ออายุก่อนหมดอายุเพื่อใช้เครื่องหมาย ISI ต่อไปหรือรักษาสถานะการลงทะเบียน BIS",
    },
    {
      question: "ขั้นตอนในการรับการรับรอง BIS ในอินเดียคืออะไร?",
      answer:
        "กระบวนการรับรอง BIS รวมถึงการระบุมาตรฐานอินเดียที่ใช้ได้ การส่งใบสมัคร การทดสอบผลิตภัณฑ์ การตรวจสอบโรงงาน และการออกใบรับรอง BIS หลังการอนุมัติ",
    },
    {
      question: "ผู้ผลิตต่างประเทศสามารถสมัครใบอนุญาต BIS ได้หรือไม่?",
      answer:
        "ได้ ภายใต้โครงการรับรองผู้ผลิตต่างประเทศ (FMCS) บริษัทต่างประเทศสามารถสมัครใบอนุญาต BIS เพื่อขายผลิตภัณฑ์ในอินเดีย พวกเขาต้องแต่งตั้งผู้แทนอินเดียที่ได้รับอนุญาต (AIR)",
    },
    {
      question: "บทบาทของ AIR ในการรับรอง BIS คืออะไร?",
      answer:
        "AIR (ผู้แทนอินเดียที่ได้รับอนุญาต) ทำหน้าที่เป็นตัวเชื่อมระหว่างผู้ผลิตต่างประเทศและ BIS อินเดีย พวกเขามีความรับผิดชอบในการจัดทำเอกสาร การสื่อสาร และการปฏิบัติตามข้อกำหนดการรับรอง BIS",
    },
    {
      question: "ฉันสามารถสมัครการลงทะเบียน BIS ออนไลน์ได้อย่างไร?",
      answer:
        "คุณสามารถสมัครการลงทะเบียน BIS ออนไลน์ผ่านพอร์ทัล BIS อย่างเป็นทางการ กระบวนการเกี่ยวข้องกับการส่งแบบฟอร์ม การอัปโหลดเอกสาร รายงานการทดสอบ และการชำระค่าธรรมเนียม",
    },
    {
      question: "เอกสารใดบ้างที่จำเป็นสำหรับใบรับรอง BIS?",
      answer:
        "เอกสารที่จำเป็น ได้แก่ ใบอนุญาตธุรกิจ ข้อกำหนดผลิตภัณฑ์ กระบวนการผลิต รายงานการทดสอบในห้องปฏิบัติการ แผนผังโรงงาน คู่มือคุณภาพ และแบบฟอร์มการอนุญาต (สำหรับผู้ผลิตต่างประเทศ)",
    },
    {
      question: "การรับรอง BIS ในอินเดียมีค่าใช้จ่ายเท่าไร?",
      answer:
        "ค่าใช้จ่ายของการรับรอง BIS ขึ้นอยู่กับประเภทผลิตภัณฑ์ ข้อกำหนดการทดสอบ ประเภทโครงการ (ISI, CRS, FMCS) และว่าผู้สมัครเป็นในประเทศหรือต่างประเทศ ค่าใช้จ่ายรวมถึงค่าธรรมเนียมการสมัคร ค่าธรรมเนียมการทดสอบ และค่าใช้จ่ายในการตรวจสอบ",
    },
    {
      question:
        "เครื่องหมาย ISI เป็นข้อบังคับสำหรับผลิตภัณฑ์ที่รับรอง BIS ทั้งหมดหรือไม่?",
      answer:
        "ไม่ มีเพียงผลิตภัณฑ์ภายใต้โครงการ ISI เท่านั้นที่ต้องติดเครื่องหมาย ISI ผลิตภัณฑ์ภายใต้โครงการ CRS หรือ Hallmarking ปฏิบัติตามโปรโตคอลการติดฉลากที่แตกต่างกันตามมาตรฐานการลงทะเบียน BIS",
    },
    {
      question:
        "ฉันสามารถรับการรับรอง BIS สำหรับผลิตภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อมได้หรือไม่?",
      answer:
        "ได้ ผลิตภัณฑ์ที่ตรงตามมาตรฐานสิ่งแวดล้อมสามารถรับการรับรอง BIS ภายใต้โครงการ Eco Mark ซึ่งรับประกันการปฏิบัติตามมาตรฐานอินเดียด้านความปลอดภัยด้านสิ่งแวดล้อม",
    },
    {
      question: "ความแตกต่างระหว่างการรับรอง BIS และการลงทะเบียน BIS คืออะไร?",
      answer:
        "การรับรอง BIS โดยทั่วไปหมายถึงการอนุมัติภายใต้โครงการ ISI, FMCS หรือ Hallmarking ในขณะที่การลงทะเบียน BIS มักเกี่ยวข้องกับโครงการ CRS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์",
    },
    {
      question: "โครงการการลงทะเบียนบังคับ (CRS) คืออะไร?",
      answer:
        "CRS เป็นโปรแกรมการลงทะเบียน BIS สำหรับสินค้า IT และอิเล็กทรอนิกส์ เช่น ไฟ LED โทรศัพท์มือถือ และแบตเตอรี่สำรอง มันรับประกันการปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้องกับความปลอดภัยของผลิตภัณฑ์",
    },
    {
      question: "เครื่องหมาย ISI และใบรับรอง BIS หมายถึงสิ่งเดียวกันหรือไม่?",
      answer:
        "ไม่ใช่ทั้งหมด เครื่องหมาย ISI เป็นสัญลักษณ์ที่มอบให้กับผลิตภัณฑ์ที่รับรองภายใต้โครงการรับรอง BIS ใบรับรอง BIS เป็นเอกสารทางกฎหมายที่ออกให้กับผู้ผลิต",
    },
    {
      question:
        "ใบอนุญาต BIS หนึ่งใบสามารถครอบคลุมผลิตภัณฑ์หลายรายการได้หรือไม่?",
      answer:
        "ไม่ได้ ต้องใช้ใบอนุญาต BIS แยกสำหรับแต่ละประเภทผลิตภัณฑ์และแต่ละสถานที่ผลิต แม้ว่าผลิตภัณฑ์จะคล้ายกันก็ตาม",
    },
    {
      question: "จะเกิดอะไรขึ้นถ้าฉันขายผลิตภัณฑ์โดยไม่มีการรับรอง BIS?",
      answer:
        "การขายผลิตภัณฑ์ที่ต้องการการรับรอง BIS โดยไม่มีใบอนุญาต BIS ที่ถูกต้องเป็นสิ่งผิดกฎหมายในอินเดียและอาจนำไปสู่การลงโทษ การเรียกคืนผลิตภัณฑ์ หรือการห้าม",
    },
    {
      question: "ใช้เวลานานแค่ไหนในการรับการรับรอง BIS?",
      answer:
        "กระบวนการรับรอง BIS โดยทั่วไปใช้เวลา 30 ถึง 90 วัน ขึ้นอยู่กับประเภทผลิตภัณฑ์ ข้อกำหนดการทดสอบ และว่าผู้สมัครเป็นในประเทศหรือต่างประเทศ",
    },
    {
      question: "การรับรอง BIS ถูกยอมรับทั่วโลกหรือไม่?",
      answer:
        "แม้ว่าการรับรอง BIS จะเฉพาะเจาะจงสำหรับอินเดีย แต่ก็เพิ่มความน่าเชื่อถือระดับโลกโดยแสดงการปฏิบัติตามมาตรฐานอินเดียที่เข้มงวด ผลิตภัณฑ์ที่รับรอง BIS บางรายการยังได้รับการยอมรับภายใต้ข้อตกลงการยอมรับร่วมกัน",
    },
    {
      question: "ฉันต้องต่ออายุใบอนุญาต BIS บ่อยแค่ไหน?",
      answer:
        "ใบอนุญาต BIS ต้องต่ออายุทุกปีหรือทุกสองปี ผู้ผลิตต้องรักษาการปฏิบัติตามมาตรฐานอินเดียและผ่านการตรวจสอบการเฝ้าระวังเพื่อต่ออายุใบรับรอง BIS ของพวกเขา",
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
          คำถามที่พบบ่อย – การรับรอง BIS ในอินเดีย
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          หาคำตอบที่คุณกำลังมองหาไม่เจอ?{" "}
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
              <AccordionItem
                key={`faq-${index}-${faq.question
                  .substring(0, 15)
                  .replace(/\s+/g, "-")}`}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
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
    // {
    //   code: "th",
    //   name: "Thai",
    //   flag: "https://flagcdn.com/w320/th.png",
    //   path: "/th/bis-certificate-khue-a-rai-bis-india",
    // },
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

const BISCertificationServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              บริการของเรา
            </div>
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
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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
                alt="BISCRS Logo"
                title="BISCRS Logo"
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
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
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
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
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
                alt="LMPC Logo"
                title="LMPC Logo"
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
                alt="BIS Logo"
                title="BIS Logo"
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
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              เครื่องหมาย ISI MARK (BIS) สำหรับผู้ผลิตอินเดีย
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
