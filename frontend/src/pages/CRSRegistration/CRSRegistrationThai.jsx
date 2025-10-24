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
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
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
import CDSCO from "../../assets/images/CDSCO.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterThai from "@/components/manual/Footer/FooterThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistration = () => {
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
      <FooterThai />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistration;


const CRSRegistrationMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "BIS CRS Registration",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>การลงทะเบียน BIS - โครงการการลงทะเบียนบังคับ (CRS)</title>
      <meta
        name="description"
        content="การลงทะเบียน BIS คือการได้รับใบอนุญาตจาก BIS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์และไอทีที่สอดคล้องกับมาตรฐานอินเดียที่ใช้ภายใต้โครงการ CRS"
      />
      <meta
        name="keywords"
        content="ใบรับรอง BIS, กระบวนการลงทะเบียน BIS, การลงทะเบียน BIS, กระบวนการลงทะเบียน BIS ออนไลน์, การรับรอง BIS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์, กระบวนการลงทะเบียน BIS ในอินเดีย, การลงทะเบียน BIS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์, โครงการการลงทะเบียนบังคับ"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="การลงทะเบียน BIS - โครงการการลงทะเบียนบังคับ (CRS)"
      />
      <meta
        property="og:description"
        content="การลงทะเบียน BIS คือการได้รับใบอนุญาตจาก BIS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์และไอทีที่สอดคล้องกับมาตรฐานอินเดียที่ใช้ภายใต้โครงการ CRS"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="การลงทะเบียน BIS - โครงการการลงทะเบียนบังคับ (CRS)"
      />
      <meta
        name="twitter:description"
        content="การลงทะเบียน BIS คือการได้รับใบอนุญาตจาก BIS สำหรับผลิตภัณฑ์อิเล็กทรอนิกส์และไอทีที่สอดคล้องกับมาตรฐานอินเดียที่ใช้ภายใต้โครงการ CRS"
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
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>การลงทะเบียน BIS CRS</BreadcrumbPage>
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
              ความเชี่ยวชาญที่ได้รับการรับรอง
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              การลงทะเบียน BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            จำเป็นสำหรับผลิตภัณฑ์อิเล็กทรอนิกส์เพื่อความปลอดภัยและคุณภาพ รับการอนุมัติ BIS พร้อมความช่วยเหลือจากผู้เชี่ยวชาญ!
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
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration";
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
        description: "หมายเลขโทรศัพท์ต้องมี (8-15 หลัก)",
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
    overview: "ภาพรวม",
    eligibility: "คุณสมบัติ",
    documents: "เอกสาร",
    registration: "การลงทะเบียน",
    fees: "ค่าธรรมเนียมการลงทะเบียน",
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
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
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
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {MENU_ITEMS[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
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
          <ServicesRightSideContentThai />
        </div>
      </div>
      <CRSRegistrationServiceFaq />
      <CISProductTable />
      <div id="services">
        <Services />
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
              เครื่องหมาย BIS (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างประเทศ
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
                src={ISIMark}
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


const CRSRegistrationServiceFaq = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. การลงทะเบียน BIS คืออะไร?",
      answer:
        "การรับรอง BIS เป็นกระบวนการปฏิบัติตามกฎระเบียบที่ควบคุมโดยสำนักงานมาตรฐานอินเดีย ซึ่งตรวจสอบว่าผลิตภัณฑ์เป็นไปตามมาตรฐานอินเดีย (IS) ที่ใช้สำหรับคุณภาพ ความปลอดภัย และความน่าเชื่อถือ",
    },
    {
      id: "item-2",
      question: "2. การลงทะเบียน CRS ภายใต้ BIS คืออะไร?",
      answer:
        "CRS ย่อมาจากโครงการการลงทะเบียนบังคับ เป็นกระบวนการลงทะเบียนบังคับสำหรับหมวดหมู่ผลิตภัณฑ์เฉพาะ เช่น อิเล็กทรอนิกส์ เครื่องใช้ไฟฟ้า แบตเตอรี่ และอุปกรณ์พลังงานแสงอาทิตย์ ผลิตภัณฑ์ภายใต้ CRS ต้องได้รับการทดสอบและลงทะเบียนกับ BIS ก่อนที่จะสามารถขายในอินเดียได้",
    },
    {
      id: "item-3",
      question: "3. การรับรอง BIS เป็นข้อบังคับในอินเดียหรือไม่?",
      answer:
        "ใช่ สำหรับผลิตภัณฑ์ทั้งหมดที่อยู่ในรายการผลิตภัณฑ์ CRS (ปัจจุบันมากกว่า 80 รายการ) การลงทะเบียน BIS เป็นข้อบังคับสำหรับการผลิต นำเข้า หรือขายในอินเดีย",
    },
    {
      id: "item-4",
      question: "4. ความแตกต่างระหว่าง BIS CRS และเครื่องหมาย ISI คืออะไร?",
      answer:
        "BIS CRS: สำหรับสินค้าอิเล็กทรอนิกส์และไอที เฉพาะสำหรับผลิตภัณฑ์บังคับที่แจ้งภายใต้ QCO <br />เครื่องหมาย ISI: ใช้สำหรับผลิตภัณฑ์ที่หลากหลายมากขึ้น อาจเป็นแบบสมัครใจหรือบังคับขึ้นอยู่กับหมวดหมู่ผลิตภัณฑ์",
    },
    {
      id: "item-5",
      question: "5. ใครสามารถสมัครการลงทะเบียน BIS CRS ได้?",
      answer:
        "เฉพาะผู้ผลิตเท่านั้นที่สามารถสมัครได้ ซึ่งรวมถึงผู้ผลิตอินเดียและต่างประเทศ แบรนด์ต่างประเทศต้องแต่งตั้งผู้แทนอินเดียที่ได้รับอนุญาต (AIR)",
    },
    {
      id: "item-6",
      question: "6. บทบาทของ AIR คืออะไร?",
      answer:
        "ผู้แทนอินเดียที่ได้รับอนุญาต (AIR) มีความรับผิดชอบทางกฎหมายในการยื่นคำขอ BIS ในนามของผู้ผลิตต่างประเทศ พวกเขาทำหน้าที่เป็นตัวเชื่อมต่ออย่างเป็นทางการระหว่าง BIS และผู้สมัครต่างประเทศ",
    },
    {
      id: "item-7",
      question: "7. การลงทะเบียน BIS CRS ใช้เวลานานแค่ไหน?",
      answer:
        "กระบวนการนี้ใช้เวลาประมาณ 3–4 สัปดาห์ โดยสมมติว่าเอกสารและรายงานการทดสอบทั้งหมดถูกส่งอย่างถูกต้องและ BIS ไม่มีข้อคัดค้าน",
    },
    {
      id: "item-8",
      question: "8. ใบรับรอง BIS CRS ราคาเท่าไหร่?",
      answer:
        "ค่าใช้จ่ายรวมถึง: <br />ค่าธรรมเนียมการทดสอบ: ₹10,000–₹20,000 + GST <br />ค่าธรรมเนียมของรัฐบาล: ₹53,000 + GST ต่อรายงานการทดสอบ <br />ค่าธรรมเนียมเพิ่มเติม: คำสัตย์สาบาน จดหมายเอกสาร AIR ฯลฯ <br />ส่วนลดสำหรับผู้ผลิตที่จดทะเบียน MSME ของอินเดีย",
    },
    {
      id: "item-9",
      question: "9. ความถูกต้องของใบรับรอง BIS CRS คืออะไร?",
      answer:
        "ใบอนุญาต BIS เริ่มต้นใช้ได้ 2 ปี สามารถต่ออายุได้สูงสุด 5 ปีหากรายละเอียดผลิตภัณฑ์และการผลิตไม่เปลี่ยนแปลง",
    },
    {
      id: "item-10",
      question: "10. สามารถรับการรับรอง BIS แบบสมัครใจได้หรือไม่?",
      answer:
        "ไม่ได้ ภายใต้ CRS คุณไม่สามารถสมัครแบบสมัครใจสำหรับผลิตภัณฑ์ที่ไม่อยู่ในรายการ QCOs การรับรองแบบสมัครใจใช้ได้เฉพาะสำหรับผลิตภัณฑ์ที่ไม่ใช่ CRS ผ่านโครงการ ISI",
    },
    {
      id: "item-11",
      question: "11. ฉันจะหารายการผลิตภัณฑ์ BIS CRS ได้ที่ไหน?",
      answer:
        'คุณสามารถเยี่ยมชมเว็บไซต์ BIS อย่างเป็นทางการ <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> และไปที่ส่วน "ผลิตภัณฑ์ภายใต้ CRS" เพื่อดูรายการผลิตภัณฑ์ที่ครอบคลุมทั้งหมด',
    },
    {
      id: "item-12",
      question: "12. สามารถแสดงเครื่องหมาย BIS แบบอิเล็กทรอนิกส์ได้หรือไม่?",
      answer:
        "ได้ ผ่าน e-labelling แต่ต้องเป็นไปตามกฎ BIS ที่เข้มงวด: ข้อมูลป้ายต้องฝังอยู่ในเฟิร์มแวร์ <br />เข้าถึงได้ง่ายภายใน 4 ขั้นตอนในเมนูอุปกรณ์ <br />บรรจุภัณฑ์จริงยังต้องมีข้อมูลกฎระเบียบ",
    },
    {
      id: "item-13",
      question:
        "13. จะเกิดอะไรขึ้นหากฉันไม่ได้รับการลงทะเบียน BIS สำหรับผลิตภัณฑ์บังคับ?",
      answer:
        "บทลงโทษรุนแรง รวมถึง: <br />การยึดผลิตภัณฑ์ <br />การปฏิเสธจากศุลกากร <br />ค่าปรับทางกฎหมาย <br />การถอดออกจากพอร์ทัลอีคอมเมิร์ซ <br />การห้ามถาวรจากตลาดอินเดีย",
    },
    {
      id: "item-14",
      question: "14. ใบรับรอง BIS หนึ่งใบสามารถครอบคลุมหลายรุ่นหรือแบรนด์ได้หรือไม่?",
      answer:
        "ไม่ได้ แต่ละแบรนด์และสถานที่โรงงานต้องรับรองแยกกัน สามารถเพิ่มหลายรุ่นโดยใช้รายงานเพิ่มเติม แต่เฉพาะภายใต้ใบสมัครและแบรนด์เดียวกัน",
    },
    {
      id: "item-15",
      question: "15. Sun Certifications India สามารถช่วยฉันได้อย่างไร?",
      answer:
        "เรานำเสนอ: <br />การสนับสนุนเอกสารแบบเต็มรูปแบบ <br />การประสานงานห้องปฏิบัติการ <br />การจัดการใบสมัครพอร์ทัล BIS <br />การแก้ไขคำถามและการติดตามผล BIS <br />คำแนะนำการต่ออายุและการติดฉลาก <br />การรับประกันการปฏิบัติตามกฎระเบียบสำหรับแบรนด์ต่างประเทศผ่านบริการ AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          คำถามที่พบบ่อย
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          หาคำตอบที่คุณต้องการไม่เจอ?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            ติดต่อเรา!
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
                  แสดงคำถามน้อยลง
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
                  แสดงคำถามเพิ่มเติม
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
    product: "AMPLIFIERS WITH INPUT POWER 2000W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 2,
    product: "AUTOMATIC DATA PROCESSING MACHINE",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 3,
    product: "ELECTRONIC CLOCKS WITH MAINS POWER",
    isNumber: "IS 302-2-26:2014",
    date: "03 July 2013",
  },
  {
    id: 4,
    product: "ELECTRONIC GAMES (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 5,
    product: "ELECTRONIC MUSICAL SYSTEMS WITH INPUT POWER 200W AND ABOVE",
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
    product: "MICROWAVE OVENS",
    isNumber: "IS 302-2-25:2014",
    date: "03 July 2013",
  },
  {
    id: 8,
    product:
      "OPTICAL DISC PLAYERS WITH BUILT IN AMPLIFIERS OF INPUT POWER 200W AND ABOVE",
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 9,
    product: 'PLASMA/LCD/LED TELEVISIONS OF SCREEN SIZE 32"; AND ABOVE',
    isNumber: "IS 616:2017",
    date: "03 July 2013",
  },
  {
    id: 10,
    product: "PRINTERS, PLOTTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 11,
    product: "SCANNERS",
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
    product: "TELEPHONE ANSWERING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 14,
    product:
      'VISUAL DISPLAY UNITS, VIDEOS MONITORS OF SCREEN SIZE 32" AND ABOVE',
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 15,
    product: "WIRELESS KEYBOARDS",
    isNumber: "IS 13252(Part 1):2010",
    date: "03 July 2013",
  },
  {
    id: 16,
    product: "CASH REGISTERS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 17,
    product: "COPYING MACHINES/DUPLICATORS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 18,
    product: "PASSPORT READER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 19,
    product: "POINT OF SALE TERMINALS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 20,
    product: "MAIL PROCESSING MACHINES/POSTAGE MACHINES/FRANKING MACHINES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 21,
    product: "POWER BANKS FOR USE IN PORTABLE APPLICATIONS",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 22,
    product: "SMART CARD READER",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 May 2015",
  },
  {
    id: 23,
    product: "MOBILE PHONES",
    isNumber: "IS 13252(Part 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "SELF-BALLASTED LED LAMPS FOR GENERAL LIGHTING SERVICES",
    isNumber: "IS 16102(Part 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "DC OR AC SUPPLIED ELECTRONIC CONTROLGEAR FOR LED MODULES",
    isNumber: "IS 15885(Part 2/Sec 13):2012",
    date: "01 December 2015",
  },
  {
    id: 26,
    product: "POWER ADAPTORS FOR AUDIO,VIDEO & SIMILAR ELECTRONIC APPARATUS",
    isNumber: "IS 616:2010",
    date: "01 December 2015",
  },
  {
    id: 27,
    product: "POWER ADAPTORS FOR IT EQUIPMENTS",
    isNumber: "IS 13252(Part 1):2010",
    date: "01 December 2015",
  },
  {
    id: 28,
    product: "FIXED GENERAL PURPOSE LED LUMINAIRES",
    isNumber: "IS 10322(Part 5/Sec 1):2012",
    date: "01 March 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTORS OF RATING <= 5KVA",
    isNumber: "IS 16242(Part 1):2014",
    date: "01 March 2016",
  },
  {
    id: 30,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 1 NICKEL SYSTEMS",
    isNumber: "IS 16046(Part 1): 2018",
    date: "01 June 2016",
  },
  {
    id: 31,
    product:
      "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 2 LITHIUM SYSTEMS",
    isNumber: "IS 16046(Part 2): 2018",
    date: "01 June 2016",
  },
  {
    id: 32,
    product: "INDIAN LANGUAGE SUPPORT FOR MOBILE PHONE HANDSETS",
    isNumber: "IS 16333 (Part 3) : 2022",
    date: "01 May 2018",
  },
  {
    id: 33,
    product: "Recessed LED Luminaries",
    isNumber: "IS 10322 (Part 5/Section 2) : 2012",
    date: "23 May 2018",
  },
  {
    id: 34,
    product: "LED Luminaires for Road and Street lighting",
    isNumber: "IS 10322 (Part 5/Section 3) : 2012",
    date: "23 May 2018",
  },
  {
    id: 35,
    product: "LED Flood Lights",
    isNumber: "IS 10322 (Part 5/Section 5) : 2013",
    date: "23 May 2018",
  },
  {
    id: 36,
    product: "LED Hand lamps",
    isNumber: "IS 10322 (Part 5/Section 6) : 2013",
    date: "23 May 2018",
  },
  {
    id: 37,
    product: "LED Lighting Chains",
    isNumber: "IS 10322 (Part 5/Section 7) : 2017",
    date: "23 May 2018",
  },
  {
    id: 38,
    product: "LED Luminaires for Emergency Lighting",
    isNumber: "IS 10322 (Part 5/Section 8) : 2013",
    date: "23 May 2018",
  },
  {
    id: 39,
    product: "UPS/Inverters of rating <= 10kVA",
    isNumber: "IS 16242 (Part 1) : 2014",
    date: "23 May 2018",
  },
  {
    id: 40,
    product: "Plasma/ LCD/LED Television of screen size up-to 32",
    isNumber: "IS 616 : 2017",
    date: "23 May 2018",
  },
  {
    id: 41,
    product: "Visual Display Units, Video Monitors of screen size upto 32",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 42,
    product: "CCTV Cameras/CCTV Recorders",
    isNumber:
      "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
    date: "23 May 2018",
  },
  {
    id: 43,
    product: "Adapters for household and similar electrical appliances",
    isNumber: "IS 302 (Part 1) : 2008",
    date: "23 May 2018",
  },
  {
    id: 44,
    product:
      "USB driven Barcode readers, barcode scanners, Iris scanners, Optical fingerprint scanners",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 45,
    product: "Smart watches",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "23 May 2018",
  },
  {
    id: 46,
    product:
      "Crystalline Silicon Terrestrial Photovoltaic (PV) modules (Si wafer based)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 47,
    product:
      "Thin-Film Terrestrial Photovoltaic (PV) Modules (a-Si, CiGs and CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
    date: "31 March 2019",
  },
  {
    id: 48,
    product: "Power converters for use in photovoltaic power system",
    isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 June 2021",
  },
  {
    id: 49,
    product: "Utility-Interconnected Photovoltaic inverters",
    isNumber:
      "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 June 2021",
  },
  {
    id: 50,
    product: "Storage battery",
    isNumber: "IS 16270 : 2014",
    date: "01 January 2019",
  },
  {
    id: 51,
    product: "Independent LED Modules for General Lighting",
    isNumber: "IS 16103 (Part 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Lighting Chain (Rope Lights)",
    isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Keyboard",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Induction Stove",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Automatic Teller Cash dispensing machines",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "USB Type External Hard Disk Drive",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Wireless Headphone and Earphone",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product:
      "USB Type External Solid-State Storage Devices (above 256 GB capacity)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Electronic Musical System with input power below 200 Watts",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product:
      "Standalone Switch Mode Power Supplies (SMPS) with output voltage 48V (max)",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Television other than Plasma/ LCD/LED TVs",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Rice Cooker",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Wireless Microphone",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 64,
    product: "Digital Camera",
    isNumber: "IS 13252 (Part 1) : 2010",
    date: "01 October 2021",
  },
  {
    id: 65,
    product: "Video Camera",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 66,
    product: "Webcam (Finished Product)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 67,
    product: "Smart Speakers (with and without Display)",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 68,
    product: "Dimmers for LED products",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 October 2021",
  },
  {
    id: 69,
    product: "Bluetooth Speakers",
    isNumber: "IS 616 : 2017",
    date: "01 October 2021",
  },
  {
    id: 70,
    product: "Ortho Phosphoric Acid",
    isNumber: "IS 798 : 2020",
    date: "12 December 2021",
  },
  {
    id: 71,
    product: "Polyphosphoric Acid",
    isNumber: "IS 17439:2020",
    date: "24 December 2021",
  },
  {
    id: 72,
    product: "Cotton Bales",
    isNumber: "IS 12171:2019",
    date: "03 March 2023",
  },
  {
    id: 73,
    product: "Trimethyl Phosphite Technical Grade",
    isNumber: "IS 17412:2020",
    date: "03 March 2023",
  },
  {
    id: 74,
    product: "Television Sets",
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
          รายการผลิตภัณฑ์อย่างเป็นทางการภายใต้การลงทะเบียน BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          ตารางต่อไปนี้แสดงรายการผลิตภัณฑ์ที่ต้องการการลงทะเบียน BIS CRS
          ในอินเดียพร้อมกับหมายเลขมาตรฐานอินเดีย (IS) ที่ใช้และวันที่ดำเนินการ
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาผลิตภัณฑ์ตามชื่อหรือหมายเลข IS..."
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
                  ลำดับ
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  ผลิตภัณฑ์
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  หมายเลข IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  วันที่ดำเนินการ
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
                ก่อนหน้า
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                หน้า {currentPage} จาก {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ถัดไป
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
          <h2 className="service-left-content-heading-two">การลงทะเบียน BIS คืออะไร?</h2>

          <p className="service-left-content-paragraph">
            สำนักงานมาตรฐานอินเดีย (BIS) เป็นองค์กรมาตรฐานแห่งชาติในอินเดียและทำงานภายใต้กระทรวงกิจการผู้บริโภค อาหาร และการกระจายสาธารณะของรัฐบาลอินเดีย BIS มีหน้าที่รับผิดชอบในการรักษามาตรฐานคุณภาพ ความปลอดภัย และประสิทธิภาพสำหรับผลิตภัณฑ์และบริการต่างๆ ในอินเดียตามมาตรฐานอินเดีย (IS) ที่เกี่ยวข้อง
          </p>

          <p className="service-left-content-paragraph">
            BIS มีหน้าที่รับผิดชอบในการดูแลและดำเนินโครงการต่างๆ ในอินเดีย โครงการการลงทะเบียนบังคับ (CRS) เป็นโครงการรับรองที่มีชื่อเสียงและบังคับของ BIS ที่ครอบคลุมหมวดหมู่ผลิตภัณฑ์อิเล็กทรอนิกส์และไอทีต่างๆ
          </p>

          <p className="service-left-content-paragraph">
            ประสิทธิภาพและความปลอดภัยของผลิตภัณฑ์อินเดียเป็นประเด็นสำคัญสำหรับอินเดีย การรับรอง BIS CRS รับประกันว่าผลิตภัณฑ์อิเล็กทรอนิกส์และไอทีสอดคล้องกับมาตรฐานอินเดีย และช่วยปกป้องผู้บริโภคจากผลิตภัณฑ์ที่ไม่เป็นไปตามมาตรฐานและไม่ได้มาตรฐาน
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
        <ServiceAuthorThai />
      </div>
    </div>
  );
};



const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">ภาพรวม</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        โครงการการลงทะเบียนบังคับ (CRS) คืออะไร?
      </h2>

      <p className="service-left-content-paragraph">
        โครงการการลงทะเบียนบังคับ (CRS) เป็นโครงการลงทะเบียนผลิตภัณฑ์ BIS ที่เปิดตัวในปี 2012 และมุ่งเน้นที่ผลิตภัณฑ์อิเล็กทรอนิกส์เป็นหลัก ตลอดหลายปีที่ผ่านมา เมื่อมีการเปิดตัวผลิตภัณฑ์เพิ่มเติม CRS ได้ขยายเพื่อรวมประเภทผลิตภัณฑ์ที่หลากหลายมากขึ้น ซึ่งรวมถึงผลิตภัณฑ์ไฟฟ้า เช่น เครื่องใช้ไฟฟ้า อุปกรณ์พลังงานแสงอาทิตย์ แบตเตอรี่ และอื่นๆ การลงทะเบียน CRS เป็นข้อบังคับสำหรับผลิตภัณฑ์ที่ระบุภายใต้คำสั่งควบคุมคุณภาพ (QCOs) ที่ออกโดยกระทรวงต่างๆ
      </p>

      <p className="service-left-content-paragraph">
        ผลิตภัณฑ์ใดๆ ที่อยู่ภายใต้โครงการ CRS บังคับจะต้องขาย นำเข้า หรือจำหน่ายในอินเดียได้หลังจากได้รับลงทะเบียนกับ BIS เท่านั้น
      </p>

      <h3 className="service-left-content-heading-three">
        ประวัติการรับรอง CRS ในอินเดีย
      </h3>

      <p className="service-left-content-paragraph">
        ในปี 2012 QCO แรกภายใต้โครงการ CRS ได้รับการเปิดตัวและมุ่งเน้นที่อุปกรณ์อิเล็กทรอนิกส์และไอที ตั้งแต่นั้นมา QCOs เพิ่มเติมได้ถูกออกในภาคส่วนต่อไปนี้:
      </p>

      <PointsListWithoutHeading
        points={[
          "อิเล็กทรอนิกส์ผู้บริโภค",
          "ไฟและ LED",
          "แบตเตอรี่และเซลล์",
          "อุปกรณ์สื่อสารไร้สาย",
          "แผงโซลาร์และส่วนประกอบ",
          "เครื่องใช้ไฟฟ้าสำหรับครัวเรือน",
        ]}
      />

      <p className="service-left-content-paragraph">
        รายการสำหรับการรับรอง CRS กำลังขยายตัวอย่างรวดเร็ว ดังนั้นจึงเป็นสิ่งสำคัญมากสำหรับผู้ผลิตที่จะต้องเป็นเชิงรุกและตระหนักถึงการอัปเดตล่าสุด
      </p>

      <h2 className="service-left-content-heading-three">
        การลงทะเบียน CRS เทียบกับเครื่องหมาย ISI: อะไรคือความแตกต่าง?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  คุณสมบัติ
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  การลงทะเบียน CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  เครื่องหมาย ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ลักษณะ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  บังคับ (เฉพาะสำหรับผลิตภัณฑ์ที่อยู่ในรายการ QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  สมัครใจหรือบังคับ (ขึ้นอยู่กับผลิตภัณฑ์)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ขอบเขตผลิตภัณฑ์
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  อิเล็กทรอนิกส์ ไอที ไฟฟ้า แบตเตอรี่ ฯลฯ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  อาหาร ปูนซีเมนต์ เหล็ก เครื่องใช้ไฟฟ้า ฯลฯ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การสมัคร
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ออนไลน์ พอร์ทัล BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  แบบสั่งด้วยมือ + ออนไลน์ ระบบ BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ความยืดหยุ่น
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  เฉพาะสำหรับสินค้าที่ครอบคลุมโดย QCO
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  สามารถเป็นแบบสมัครใจสำหรับสินค้าที่ไม่ใช่ QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การติดฉลาก
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ต้องมีโลโก้ BIS CRS และหมายเลขลงทะเบียน
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องมีโลโก้ ISI พร้อมรหัสมาตรฐาน
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        ทำไมคุณต้องรู้เกี่ยวกับกรอบงาน BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        หากคุณเป็นผู้ผลิตในอินเดีย หรือบริษัทต่างประเทศที่พยายามเข้าสู่ตลาดอินเดีย การรู้ขั้นตอน BIS CRS เป็นสิ่งจำเป็น จะช่วยให้คุณ:
      </p>

      <PointsListWithoutHeading
        points={[
          "หลีกเลี่ยงบทลงโทษสำหรับการไม่ปฏิบัติตามกฎระเบียบ",
          "เตรียมตารางการผลิต (พิจารณาเวลาทดสอบในห้องปฏิบัติการ)",
          "อำนวยความสะดวกในการจัดการศุลกากรที่ง่ายขึ้น",
          "ได้รับความไว้วางใจในแบรนด์จากลูกค้าอินเดียในระยะยาว",
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
        <span className="service-left-content-index-heading">คุณสมบัติ</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        เกณฑ์คุณสมบัติสำหรับการลงทะเบียน BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        ใครสามารถสมัครรับการรับรอง BIS ภายใต้ CRS ได้?
      </p>

      <p className="service-left-content-paragraph">
        ในอินเดีย ใบรับรอง BIS ภายใต้โครงการการลงทะเบียนบังคับ (CRS) จะได้รับเพียงผู้ผลิตที่ตรงตามข้อกำหนดที่กำหนดโดยสำนักงานมาตรฐานอินเดียเท่านั้น นี่คือเพื่อให้แน่ใจว่ามีเพียงผู้ผลิตที่แท้จริงเท่านั้นที่จะได้รับสิทธิพิเศษในการลงทะเบียนและติดโลโก้ BIS CRS บนผลิตภัณฑ์ของตน
      </p>

      <div className="service-left-content-heading-three">รายการตรวจสอบเกณฑ์คุณสมบัติ</div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  ข้อกำหนด
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  คำอธิบาย
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ผู้สมัครต้องเป็นผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  เฉพาะผู้ผลิตดั้งเดิม (ไม่ใช่ผู้ค้าหรือผู้ขายต่อ) ของผลิตภัณฑ์เท่านั้นที่มีสิทธิ์สมัคร
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  สถานที่สามารถเป็นอินเดียหรือต่างประเทศ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ทั้งผู้ผลิตอินเดียและแบรนด์ระหว่างประเทศสามารถสมัครได้
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (ผู้แทนอินเดียที่ได้รับอนุญาต)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ผู้ผลิตต่างประเทศต้องแต่งตั้ง AIR ซึ่งอาจเป็นสาขาอินเดียของตนหรือบุคคลที่สามที่ได้รับอนุญาตอย่างเป็นทางการ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  รายงานการทดสอบจากห้องปฏิบัติการที่ BIS อนุมัติ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ผลิตภัณฑ์ต้องได้รับการทดสอบที่ห้องปฏิบัติการที่ BIS รับรองและเป็นไปตามมาตรฐานอินเดีย (IS) ที่ใช้
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  เอกสารที่เหมาะสม
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  เอกสารที่ต้องการทั้งหมดต้องส่งในรูปแบบที่กำหนด (รายละเอียดในส่วนถัดไป)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การลงทะเบียนหนึ่งครั้งต่อแบรนด์และสถานที่
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องยื่นคำขอแยกสำหรับแต่ละประเภทผลิตภัณฑ์ สถานที่ผลิต และชื่อแบรนด์
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        ผู้แทนอินเดียที่ได้รับอนุญาต (AIR) คือใคร?
      </h2>

      <p className="service-left-content-paragraph">
        สำหรับผู้ผลิตต่างประเทศ หนึ่งในข้อผูกพันคือการแต่งตั้งผู้แทนอินเดียที่ได้รับอนุญาต (AIR) สำหรับการสื่อสารและการเป็นตัวแทนในอินเดีย
      </p>

      <div className="service-left-content-heading-three">ความรับผิดชอบของ AIR:</div>

      <PointsListWithoutHeading
        points={[
          "ทำหน้าที่เป็นตัวแทนทางกฎหมายสำหรับผู้สมัครต่างประเทศ",
          "สื่อสารและจัดการภาระผูกพันทั้งหมดกับ BIS ในนามของผู้ผลิต",
          "รับผิดชอบทางกฎหมายสำหรับการปฏิบัติตามกฎระเบียบและเอกสารทั้งหมด",
          "ไม่สามารถเป็นตัวแทนหรือผู้จัดจำหน่ายได้เว้นแต่จะได้รับอนุญาตอย่างชัดเจนจากผู้ผลิต",
        ]}
      />

      <p className="service-left-content-paragraph">
        เป็นส่วนหนึ่งของข้อตกลง AIR ต้องส่งข้อตกลงที่ลงนามจากทั้งสองฝ่ายพร้อมกับหลักฐานที่อยู่ในอินเดีย
      </p>

      <div className="service-left-content-heading-three">สถานการณ์จริง:</div>

      <p className="service-left-content-paragraph">
        บริษัท ABC กำลังวางแผนเปิดตัวรุ่นใหม่ของ Power Bank ในอินเดีย
      </p>

      <PointsListWithoutHeading
        points={[
          "บริษัท ABC เป็นผู้ผลิต",
          "พวกเขาทำการทดสอบผลิตภัณฑ์ในห้องปฏิบัติการที่ BIS รับรองแห่งหนึ่งในอินเดีย",
          "สำนักงานสาขาของพวกเขาในเดลีทำหน้าที่เป็น AIR ที่ลงทะเบียน",
          "พวกเขาอัปโหลดคำขอไปยังพอร์ทัล BIS พร้อมกับเอกสารที่ต้องการ",
        ]}
      />

      <p className="service-left-content-paragraph">
        ผลลัพธ์คือการออกใบรับรอง BIS ภายใต้ CRS
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">เอกสาร</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        เอกสารที่ต้องการสำหรับการลงทะเบียน BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        รายการเอกสารที่ต้องการเพื่อให้ได้การลงทะเบียน BIS CRS
      </div>

      <p className="service-left-content-paragraph">
        การกรอกใบสมัคร BIS CRS สำหรับการลงทะเบียนเป็นแบบดิจิทัลทั้งหมด อย่างไรก็ตาม มันยังต้องการเอกสารที่สมบูรณ์เพื่อให้ได้การอนุมัติ ความผิดพลาดเล็กน้อยและการไม่ปฏิบัติตามทุกแง่มุม เช่น ประเภทเอกสาร รูปแบบที่ไม่เหมาะสม หรือประเภทไฟล์ที่ผิด อาจทำให้คำขอถูกปฏิเสธหรือล่าช้า
      </p>

      <p className="service-left-content-paragraph">
        สำหรับการประมวลผลเอกสาร BIS ที่เหมาะสมและรวดเร็ว จำเป็นต้องมีเอกสารที่เหมาะสมกับคุณในแต่ละขั้นตอน การมีเอกสารที่เหมาะสมพร้อมหมายความว่าใบรับรอง BIS ของคุณจะได้รับการประมวลผลตรงเวลาและปลอดภัยทางกฎหมายจากการตรวจสอบการปฏิบัติตามกฎระเบียบ การตรวจสอบศุลกากร หรือการอนุมัติตลาด
      </p>

      <div className="service-left-content-heading-three">
        รายการตรวจสอบเอกสารสำหรับการลงทะเบียน BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  เอกสาร
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  ใครส่ง?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  หมายเหตุ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  หลักฐานที่อยู่ของผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  สัญญาเช่าโรงงาน ใบแจ้งค่าใช้จ่ายสาธารณูปโภค หรือใบอนุญาต
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  รายงานการทดสอบจากห้องปฏิบัติการที่ BIS อนุมัติ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต/ห้องปฏิบัติการ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องเป็นล่าสุด (ภายใน 90 วัน) และอ้างอิงรหัส IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ข้อผูกพัน (ตามรูปแบบ BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้สมัคร
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  รวมถึงความรับผิดชอบ การปฏิบัติตามกฎระเบียบ และความรับผิดชอบของผลิตภัณฑ์
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ใบรับรองเครื่องหมายการค้า
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องการหากแบรนด์จดทะเบียน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ข้อตกลง AIR (สำหรับผู้สมัครต่างประเทศ)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิตต่างประเทศและ AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ลงนามและรับรองโดยทนายความ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  คำสัตย์สาบาน
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิตหรือ AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  รูปแบบสามารถดาวน์โหลดได้จากพอร์ทัล BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ใบเสร็จค่าธรรมเนียม
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้สมัคร
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  หลักฐานการชำระค่าธรรมเนียมของรัฐบาล
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  จดหมายอนุญาต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  อนุญาตให้ AIR ทำหน้าที่ในนามของตน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ใบรับรองการจดทะเบียนบริษัท
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  หลักฐานการจดทะเบียนธุรกิจ (GST, ROC, ฯลฯ)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ป้ายผลิตภัณฑ์/เครื่องหมาย
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  ผู้ผลิต
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องแสดงโลโก้ BIS มาตรฐาน IS และช่องว่างสำหรับการลงทะเบียน
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
        <span className="service-left-content-index-heading">กระบวนการลงทะเบียน</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">กระบวนการลงทะเบียน BIS CRS</h2>

      <p className="service-left-content-paragraph">
        การลงทะเบียน BIS CRS เป็นกระบวนการออนไลน์ทั้งหมดผ่านพอร์ทัลการลงทะเบียน BIS ไม่ใช่เพียงแค่ขั้นตอนที่รวมถึงการอัปโหลดเอกสาร แต่ยังต้องให้ความสนใจเป็นพิเศษในด้านเทคนิค การทำความเข้าใจกฎระเบียบ รวมถึงการปฏิบัติตามมาตรฐานอินเดีย (IS) อย่างสมบูรณ์
      </p>

      <p className="service-left-content-paragraph">
        กระบวนการ BIS CRS เราเรียกมันว่าระบบการรับรองและการลงทะเบียน (CRS) สำหรับตอนนี้ และนี่คือวิธีที่การเดินทางสู่การรับรอง BIS เริ่มต้นขึ้น
      </p>

      <div className="service-left-content-heading-three">
        ขั้นตอนที่ 1: การทดสอบผลิตภัณฑ์ที่ห้องปฏิบัติการที่ BIS อนุมัติ
      </div>

      <PointsListWithoutHeading
        points={[
          "เลือกห้องปฏิบัติการจากรายการที่ BIS อนุมัติ",
          "ส่งตัวอย่างผลิตภัณฑ์ที่จะทำการทดสอบสำหรับ IS ที่เกี่ยวข้อง",
          "ได้รับรายงานการทดสอบสำหรับตัวอย่างตามรูปแบบรายงานการทดสอบ BIS",
        ]}
      />

      <div className="service-left-content-heading-three">ขั้นตอนที่ 2: การเตรียมเอกสาร</div>

      <PointsListWithoutHeading
        points={[
          "รวบรวมเอกสารที่จำเป็น ตามที่ระบุไว้แล้ว",
          "ให้แน่ใจว่าเอกสารมีชื่อรูปแบบการลงนามและวันที่อย่างถูกต้อง",
          "พัฒนาป้ายผลิตภัณฑ์ซึ่งเป็นสติกเกอร์จำลองที่มีช่องว่างสำหรับโลโก้ BIS และช่องว่างสำหรับมาตรฐาน IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        ขั้นตอนที่ 3: การกรอกใบสมัครออนไลน์
      </div>

      <PointsListWithoutHeading
        points={[
          "ไปที่พอร์ทัล BIS CRS (https://www.bis.org.in/) และเข้าสู่ระบบหรือลงทะเบียน",
          "กรอกข้อมูลผลิตภัณฑ์ หมายเลขรุ่น แบรนด์ และหน่วยการผลิตของ AIR หากจำเป็น",
          "ทำตามขั้นตอนสำหรับการชำระค่าธรรมเนียมของรัฐบาล",
        ]}
      />

      <div className="service-left-content-heading-three">
        ขั้นตอนที่ 4: การตรวจสอบใบสมัครของ BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS ตรวจสอบเอกสารประกอบและรายงานห้องปฏิบัติการ",
          "หากจำเป็น จะมีการขอคำชี้แจงผ่านพอร์ทัล",
          "ตอบกลับด้วยเอกสารที่ถูกต้องหรือคำอธิบายที่มีเหตุผล",
        ]}
      />

      <p className="service-left-content-paragraph">
        หากเป็นคำถามขอคำชี้แจง ต้องตอบภายใน 30 วัน ไม่เช่นนั้นคำขอจะไปยังไฟล์เก็บถาวร ซึ่งหมายถึงการปฏิเสธ
      </p>

      <div className="service-left-content-heading-three">ขั้นตอนที่ 5: การอนุมัติการลงทะเบียน BIS</div>

      <PointsListWithoutHeading
        points={[
          "ใบรับรอง BIS จะออกให้หากเจ้าหน้าที่ BIS พึงพอใจกับผลการประเมินที่พวกเขาดำเนินการ",
        ]}
      />

      <p className="service-left-content-paragraph">ใบรับรองของคุณจะรวมถึง:</p>

      <PointsListWithoutHeading
        points={[
          "หมายเลขลงทะเบียน BIS",
          "ชื่อแบรนด์",
          "รุ่นของผลิตภัณฑ์",
          "รหัสมาตรฐาน IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "ป้ายผลิตภัณฑ์ของคุณต้องมีหรือมี e-labelling ของรายละเอียดใบรับรอง",
        ]}
      />

      <div className="service-left-content-heading-three">ขั้นตอนที่ 6: การติดฉลากและการจำหน่าย</div>

      <PointsListWithoutHeading
        points={[
          "ผลิตภัณฑ์ที่รับรองโดย BIS ต้องติด:",
          "โลโก้ BIS CRS",
          "รหัส IS ที่เกี่ยวข้องกับผลิตภัณฑ์",
          "หมายเลขลงทะเบียน BIS",
          "หมายเลขลงทะเบียนและโลโก้ BIS ต้องพิมพ์หรือฝังแบบดิจิทัลตามกฎระเบียบ BIS",
        ]}
      />

      <h3 className="service-left-content-heading-three">ระยะเวลาโดยประมาณ</h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  กิจกรรม
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  ระยะเวลาโดยประมาณ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การทดสอบผลิตภัณฑ์
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  7-10 วันทำการ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การรวบรวมเอกสาร
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-3 วัน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การส่งใบสมัคร
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  1 วัน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การตรวจสอบ BIS + การแก้ไขคำถาม
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  10-15 วันทำการ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การออกใบรับรองขั้นสุดท้าย
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-4 วันทำการ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  รวมทั้งหมด
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                  ~4 สัปดาห์
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
        <span className="service-left-content-index-heading">ค่าธรรมเนียมการลงทะเบียน</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ค่าธรรมเนียมการลงทะเบียน BIS CRS ความถูกต้องและแนวทางการต่ออายุ
      </h2>

      <p className="service-left-content-paragraph">
        การได้รับใบรับรอง BIS ภายใต้ CRS ผู้สมัครจะต้องจ่ายค่าธรรมเนียมของรัฐบาลรวมถึงค่าทดสอบผลิตภัณฑ์ แม้ว่ากระบวนการจะเป็นแบบออนไลน์และอินเทอร์เฟซจะได้รับการปรับปรุง แต่ผู้สมัครหลายคนยังคงประสบความล่าช้าในการขอและถูกปฏิเสธเนื่องจากค่าธรรมเนียมไม่ครบและใบสมัครไม่ถูกต้อง
      </p>

      <h3 className="service-left-content-heading-three">โครงสร้างค่าธรรมเนียมสำหรับการลงทะเบียน CRS</h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  ประเภทค่าธรรมเนียม
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  จำนวนเงิน
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ค่าธรรมเนียมของรัฐบาล
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST ต่อรายงานการทดสอบ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ค่าธรรมเนียมการทดสอบ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹10,000 – ₹20,000 + 18% GST (แตกต่างกันตามผลิตภัณฑ์/ห้องปฏิบัติการ)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  รายงานเพิ่มเติมในแอปเดียวกัน
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹20,000 + 18% GST ต่อรายงาน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ค่าธรรมเนียมต่ออายุ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53,000 + 18% GST
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          ราคาอาจมีการเปลี่ยนแปลง — ยืนยันบนพอร์ทัล BIS หรือกับที่ปรึกษาของคุณ
        </em>
      </p>

      <h3 className="service-left-content-heading-three">ความถูกต้องและการต่ออายุใบรับรอง CRS</h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  พารามิเตอร์
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  รายละเอียด
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ความถูกต้องเริ่มต้น
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2 ปี
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ระยะเวลาต่ออายุ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  สูงสุด 5 ปี (หากไม่มีการเปลี่ยนแปลงผลิตภัณฑ์)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  กระบวนการต่ออายุ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ออนไลน์ ตามคำสัตย์สาบานใหม่ + ค่าธรรมเนียมต่ออายุ
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ต้องทดสอบใหม่หรือไม่?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ไม่เว้นแต่จะมีการเปลี่ยนแปลงข้อมูลจำเพาะผลิตภัณฑ์/มาตรฐาน IS
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
        แนวทาง E-Labelling สำหรับผลิตภัณฑ์ที่รับรอง CRS
      </div>

      <div className="service-left-content-heading-three">E-Labelling คืออะไร?</div>

      <p className="service-left-content-paragraph">
        E-labelling คือการแสดงข้อมูลกฎระเบียบภายในอุปกรณ์แบบอิเล็กทรอนิกส์แทนการพิมพ์และติดบนอุปกรณ์ ภายใต้โครงการการลงทะเบียนบังคับ (CRS) ของ BIS ผลิตภัณฑ์ที่ระบุโดยเฉพาะอุปกรณ์ขนาดกะทัดรัดหรือดิจิทัลสามารถแสดงรายละเอียดใบรับรอง BIS เครื่องหมายมาตรฐานและรหัส IS ผ่านอินเทอร์เฟซซอฟต์แวร์หรือบรรจุภัณฑ์ดิจิทัล
      </p>

      <div className="service-left-content-heading-three">
        แนวทาง BIS เกี่ยวกับ E-Labelling: E-Labelling แบบอิเล็กทรอนิกส์ (BIS CMD
        3/8:1/6975. วันที่ 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">ข้อกำหนดสำหรับ E-Labelling:</h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  กฎ
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  คำอธิบาย
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ป้ายบนบรรจุภัณฑ์
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  กล่องผลิตภัณฑ์หรือบรรจุภัณฑ์ภายนอกต้องแสดงโลโก้ BIS CRS
                  และรายละเอียดการลงทะเบียน
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ป้ายที่ถอดได้สำหรับบรรจุภัณฑ์จำนวนมาก
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  หากผลิตภัณฑ์ถูกจัดส่งจำนวนมาก ป้ายกาวที่ถอดได้บน
                  บรรจุภัณฑ์ภายนอกเป็นที่ยอมรับได้
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ไม่ต้องใช้เครื่องมือสำหรับการเข้าถึง
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ผู้ใช้ต้องสามารถเข้าถึงข้อมูล e-label ได้โดยไม่ต้องใช้
                  เครื่องมือหรืออุปกรณ์เสริม (เช่น ไม่สามารถนำซิมการ์ดออก)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การเขียนโปรแกรมที่ปลอดภัย
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ข้อมูล e-label ต้องฝังอยู่ในเฟิร์มแวร์/ซอฟต์แวร์ ล็อค
                  ไม่ให้บุคคลที่สามแก้ไข
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  การเข้าถึงผ่านเมนู
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ผู้ใช้ต้องเข้าถึงข้อมูลไม่เกิน 4 ขั้นตอนผ่านอินเทอร์เฟซเมนูของอุปกรณ์
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  ต้องมีคำแนะนำ
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ต้องให้คำแนะนำเกี่ยวกับวิธีเข้าถึงรายละเอียด e-label
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        Sun Certifications India สามารถช่วยคุณในการลงทะเบียน BIS ภายใต้โครงการ CRS ได้อย่างไร
      </p>

      <div className="service-left-content-heading-three">ทำไมต้องเลือกที่ปรึกษา BIS?</div>

      <p className="service-left-content-paragraph">
        การลงทะเบียน BIS CRS ทั้งหมดมีความซับซ้อนทางเทคนิคมากและครอบคลุมในแง่ของกฎระเบียบและปริมาณเอกสาร ในกรณีที่ไม่มีความเข้าใจอย่างถ่องแท้เกี่ยวกับมาตรฐานอินเดีย QCOs ล่าสุด โครงสร้างของรายงานการทดสอบ และลำดับงานในอินเทอร์เฟซพอร์ทัล ผู้สมัครอาจสูญเสียอย่างมากในแง่ของการดำเนินการที่ตามมาของความล่าช้า การปฏิเสธ หรือการไม่ปฏิบัติตามกฎระเบียบที่ดำเนินอยู่เป็นเวลานาน นี่คือที่ที่ Sun Certifications India เข้ามามีส่วนร่วมด้วยพนักงานที่มีชื่อเสียงและเชื่อถือได้เพื่อช่วยเหลือผู้สมัครในทุกรายละเอียดของโครงการรับรองบังคับ
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