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
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import FooterThai from "@/components/manual/Footer/FooterThai";
import ServicesRightSideContentThai from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentThai";
import ServiceAuthorThai from "@/components/manual/ServiceAuthor/ServiceAuthorThai";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXThai = () => {
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
      <FooterThai />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXThai;

const SchemeXMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "การรับรอง BIS ของอินเดียภายใต้ Scheme-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        การรับรอง BIS Scheme X | ความปลอดภัยของเครื่องจักรและอุปกรณ์ไฟฟ้า
      </title>
      <meta
        name="description"
        content="การรับรอง BIS Scheme X จำเป็นต้องใช้เพื่อให้มั่นใจในคุณภาพและความปลอดภัยของสวิตช์เกียร์แรงดันต่ำ อุปกรณ์ควบคุม เครื่องจักร และอุปกรณ์ไฟฟ้า"
      />
      <meta
        name="keywords"
        content="Scheme X, BIS Scheme X, การรับรอง BIS Scheme X, การรับรอง Scheme X, การรับรองเครื่องจักร, การรับรองอุปกรณ์ไฟฟ้า"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="การรับรอง BIS Scheme X | ความปลอดภัยของเครื่องจักรและอุปกรณ์ไฟฟ้า"
      />
      <meta
        property="og:description"
        content="การรับรอง BIS Scheme X จำเป็นต้องใช้เพื่อให้มั่นใจในคุณภาพและความปลอดภัยของสวิตช์เกียร์แรงดันต่ำ อุปกรณ์ควบคุม เครื่องจักร และอุปกรณ์ไฟฟ้า"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="การรับรอง BIS Scheme X | ความปลอดภัยของเครื่องจักรและอุปกรณ์ไฟฟ้า"
      />
      <meta
        name="twitter:description"
        content="การรับรอง BIS Scheme X จำเป็นต้องใช้เพื่อให้มั่นใจในคุณภาพและความปลอดภัยของสวิตช์เกียร์แรงดันต่ำ อุปกรณ์ควบคุม เครื่องจักร และอุปกรณ์ไฟฟ้า"
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
                  <Link to="/">หน้าแรก</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  การรับรอง BIS ของอินเดียภายใต้ Scheme-X
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
              ความเชี่ยวชาญที่ได้รับการรับรอง
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              การรับรอง BIS Scheme X
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            การรับรอง BIS Scheme X ครอบคลุมเครื่องจักร อุปกรณ์ไฟฟ้า
            และส่วนประกอบ การประกอบ
            และส่วนย่อยภายใต้กฎระเบียบทางเทคนิคแบบครอบคลุม (OTR)
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
    if (path.includes("/th/bis-prathiap-india-taem-dai-tae-skema-x"))
      return "Scheme X Thai";
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
        description: "ชื่อควรประกอบด้วยตัวอักษรและช่องว่างเท่านั้น",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "กรุณาใส่อีเมลที่ถูกต้อง",
        description: "ตรวจสอบรูปแบบอีเมลของคุณให้ถูกต้อง",
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
        title: "ส่งฟอร์มติดต่อเรียบร้อยแล้ว!",
        description: "ขอบคุณที่ติดต่อเรา ทีมของเราจะติดต่อกลับในเร็ว ๆ นี้",
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
        error.response?.data?.message || "เกิดข้อผิดพลาดบางอย่าง";
      toast({
        variant: "destructive",
        title: errorMessage || "ส่งข้อมูลฟอร์มติดต่อล้มเหลว!",
        description: "เกิดข้อผิดพลาด กรุณาตรวจสอบข้อมูลและลองอีกครั้ง",
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
        ต้องการติดต่อทีมของเราและนัดหมายการโทรหรือไม่?
        <span className="text-black"> ลองตอนนี้</span>
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
            placeholder="การรับรองที่จำเป็น*"
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
    overview: "ภาพรวม",
    process: "กระบวนการ",
    documents: "เอกสาร",
    conclusion: "สรุป",
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
          <ServicesRightSideContentThai />
        </div>
      </div>
      <SchemeXServiceFaq />
      <SchemeXProductTable />
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
                ที่ปรึกษาใบรับรองที่ดีที่สุดของอินเดีย
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
              BIS Mark (ใบอนุญาต ISI) สำหรับผู้ผลิตต่างชาติ
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
              การจัดการของเสียพลาสติก
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
              การรับรอง EPR
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
              การรับรอง LMPC
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
                src={ISIMark}
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) สำหรับผู้ผลิตในอินเดีย
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
            มาตรฐานความปลอดภัยตามผลิตภัณฑ์
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            คำอธิบายของเครื่องจักรและอุปกรณ์ไฟฟ้า
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"ค้นหาตามคำอธิบายหรือรหัส HS..."}
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
    description: "ทุกประเภทของปั๊มสำหรับการจัดการของเหลว ลิฟต์ของเหลว",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "ทุกประเภทของคอมเพรสเซอร์",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "มาตรา 16 ของ IS 17093:2019\nมาตรา 6.6 ของ IS 12258:1987",
    title:
      "เงื่อนไขการจัดหาทางเทคนิคสำหรับคอมเพรสเซอร์อากาศแบบลูกสูบสำหรับวัตถุประสงค์ทั่วไปและการใช้งานอุตสาหกรรม\nเงื่อนไขการจัดหาทางเทคนิคสำหรับคอมเพรสเซอร์สกรูอากาศ (น้ำมันท่วม) สำหรับวัตถุประสงค์ทั่วไปและการใช้งานอุตสาหกรรม",
  },
  {
    id: 3,
    description:
      "ทุกประเภทของเครื่องจักรสำหรับการบำบัดวัสดุโดยกระบวนการที่เกี่ยวข้องกับการเปลี่ยนแปลงอุณหภูมิ",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description:
      "หรือเครื่องจักรสำหรับการกรองหรือทำให้บริสุทธิ์สำหรับของเหลวและก๊าซ",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "ทุกประเภทของเครื่องจักรสำหรับการบรรจุ การปิดผนึก การติดฉลากขวด การบรรจุหรือห่อ",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "ทุกประเภทของเครน",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "มาตรา 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nมาตรา 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "รอกไฟฟ้าแบบโอเวอร์เฮดและรอกกอนทรีสำหรับการใช้งานทั้งหมด รหัสปฏิบัติ\nข้อกำหนดสำหรับเครนเคลื่อนที่ที่ขับเคลื่อนด้วยพลังงาน\nเครน - ข้อกำหนดด้านความปลอดภัยสำหรับเครนโหลด",
  },
  {
    id: 7,
    description: "ทุกประเภทของเครื่องจักรสำหรับการก่อสร้าง",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "เครื่องจักรขุดดินความปลอดภัย ส่วนที่ 7 สแครปเปอร์\nข้อกำหนดเครื่องจักรขุดดินสำหรับเกรดเดอร์\nเครื่องจักรขุดดินความปลอดภัย ส่วนที่ 12 เครื่องปูถนน",
  },
  {
    id: 8,
    description: "ทุกประเภทของเครื่องทอ (looms)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "ข้อกำหนดด้านความปลอดภัยเครื่องจักรสิ่งทอ ส่วนที่ 6 เครื่องจักรผลิตผ้า",
  },
  {
    id: 9,
    description: "ทุกประเภทของเครื่องจักรสำหรับการปักลาย.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "ข้อกำหนดด้านความปลอดภัยเครื่องจักรสิ่งทอ ส่วนที่ 1 ข้อกำหนดทั่วไป",
  },
  {
    id: 10,
    description: "ทุกประเภทของเครื่องตัดโลหะ",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "เครื่องมือด้านความปลอดภัยเครื่องกด ส่วนที่ 1 ข้อกำหนดด้านความปลอดภัยทั่วไป\nเครื่องมือด้านความปลอดภัยเครื่องจักรไฟฟ้าดิสชาร์จ\nเครื่องมือด้านความปลอดภัยเครื่องกลึง\nเครื่องมือด้านความปลอดภัยเครื่องเลื่อยสำหรับโลหะเย็น\nเครื่องมือด้านความปลอดภัยศูนย์เครื่องจักรกลึง เครื่องมิลลิ่ง เครื่องถ่ายโอน ส่วนที่ 1 ข้อกำหนดด้านความปลอดภัย",
  },
  {
    id: 11,
    description:
      "ทุกประเภทของเครื่องมือสำหรับการทำงานหิน เซรามิก คอนกรีต อะสเบสตัสซีเมนต์ หรือแก้วแร่คล้ายกัน",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "ทุกประเภทของเครื่องจักรสำหรับการทำงานยางและพลาสติก",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title: "เครื่องจักรพลาสติกและยาง-เครื่องฉีดขึ้นรูป-ข้อกำหนดด้านความปลอดภัย",
  },
  {
    id: 13,
    description:
      "ทุกประเภทของเครื่องจักรรวมถึงเครื่องจักรสำหรับงานสาธารณะและอาคารและเครื่องจักรและเครื่องใช้ทางกลที่มีฟังก์ชันเดี่ยว ไม่ระบุ",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "ทุกประเภทของเฟืองและเกียร์ ล้อฟัน โซ่สปร็อกเก็ต องค์ประกอบการส่งกำลังลูกบอลหรือสกรูโรลเลอร์ เกียร์บ็อกซ์และตัวเปลี่ยนความเร็ว รวมถึงตัวแปลงแรงบิด และ (หรือ) การประกอบ/ส่วนย่อย/ส่วนประกอบของพวกเขา",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "ทุกประเภทของเครื่องจักรไฟฟ้าหมุนเวียนเช่นเครื่องกำเนิด ฯลฯ อาคารและเครื่องจักรและเครื่องใช้ทางกลที่มีฟังก์ชันเดี่ยว ไม่ระบุ",
    hsCode: "8501 and 8503",
    indianStandard:
      "มาตรา 4.7, 4.8 and 4.12 of section 2,\nมาตรา 7.4 of Section 3, มาตรา 8.6 of Section 4,\nมาตรา 9.4 of section 5 of IS 5422:1996\nมาตรา 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nมาตรา 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "การกำเนิดแบบกังหัน\nเครื่องกำเนิด AC ที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ - ข้อกำหนด: ส่วนที่ 1\nอัลเทอร์เนเตอร์ที่มีกำลังถึง 20 kVa\nเครื่องกำเนิด AC ที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ - ข้อกำหนด: ส่วนที่ 2\nอัลเทอร์เนเตอร์ที่มีกำลังเกิน 20 kVa และถึง 1250 kVa",
  },
  {
    id: 16,
    description: "ทุกประเภทของเครื่องกำเนิดดีเซล",
    hsCode: "8502 and 8503",
    indianStandard:
      "มาตรา 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nมาตรา 6 & 10 of IS/ISO 8528 (Part 3)\nมาตรา 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nมาตรา 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nมาตรา 6.4 of IS/ISO 8528 (Part 8): 2016\nมาตรา 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "ชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ : ส่วนที่ 2 เครื่องยนต์\nชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ: ส่วนที่ 3 เครื่องกำเนิดกระแสสลับสำหรับชุดกำเนิด\nชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ: ส่วนที่ 4 อุปกรณ์ควบคุมและสวิตช์เกียร์\nชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ ส่วนที่ 5 ชุดกำเนิด\nชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ: ส่วนที่ 8\nชุดกำเนิดกระแสสลับที่ขับเคลื่อนโดยเครื่องยนต์สันดาปภายในแบบลูกสูบ: ส่วนที่ 12 การจ่ายพลังงานสำรองฉุกเฉินเพื่อความปลอดภัย",
  },
  {
    id: 17,
    description: "ทุกประเภทของหม้อแปลง",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nมาตรา 5.6 & Cl 10 of IS 2026 (Part 1)\nมาตรา 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "ความปลอดภัยของหม้อแปลง รีแอคเตอร์ หน่วยจ่ายพลังงาน และผลิตภัณฑ์คล้ายกันสำหรับแรงดันไฟฟ้าจ่ายถึง 1100 V ส่วนที่ 2-4: ข้อกำหนดเฉพาะและการทดสอบสำหรับหม้อแปลงแยกและหน่วยจ่ายพลังงานที่รวม\nความปลอดภัยของหม้อแปลงกำลัง หน่วยจ่ายพลังงาน และคล้ายกัน: ส่วนที่ 2 ข้อกำหนดเฉพาะ: Sec 6 หม้อแปลงแยกสำหรับการใช้งานทั่วไป\nความปลอดภัยของหม้อแปลงกำลัง หน่วยจ่ายพลังงาน รีแอคเตอร์ และผลิตภัณฑ์คล้ายกัน: ส่วนที่ 2-7 ข้อกำหนดเฉพาะและการทสอบสำหรับหม้อแปลงและหน่วยจ่ายพลังงานสำหรับของเล่น\nหม้อแปลงกำลัง: ส่วนที่ 1 ทั่วไป\nหม้อแปลงกำลัง: ส่วนที่ 6 รีแอคเตอร์",
  },
  {
    id: 18,
    description: "ทุกประเภทของตัวแปลงเซมิคอนดักเตอร์กำลัง",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "มาตรา 7 ของตัวแปลงเซมิคอนดักเตอร์ ส่วนที่ 1 ข้อกำหนดทั่วไปและตัวแปลงคอมมิวเทตแบบไลน์ ส่วนที่ 1 ข้อกำหนดพื้นฐาน",
  },
  {
    id: 19,
    description:
      "ทุกประเภทของอุปกรณ์สวิตช์เกียร์และควบคุมที่ทำงานที่แรงดันไม่เกิน 1000 โวลต์ และ (หรือ) การประกอบ/ส่วนย่อย/ส่วนประกอบของพวกเขา",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "มาตรา 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "สวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำ: ส่วนที่ 3 แผงกระจายที่ตั้งใจให้ใช้งานโดยบุคคลทั่วไป (DBO)",
  },
  {
    id: 20,
    description:
      "ทุกประเภทของอุปกรณ์สวิตช์เกียร์และควบคุมที่ทำงานที่แรงดันเกิน 1000 โวลต์ และ (หรือ) การประกอบ/ส่วนย่อย/ส่วนประกอบของพวกเขา",
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
        TYPE C
        (มาตรฐานความปลอดภัยเครื่องจักรที่จัดการกับข้อกำหนดด้านความปลอดภัยโดยละเอียดสำหรับเครื่องจักรเฉพาะหรือกลุ่มเครื่องจักร)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                ลำดับที่
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                คำอธิบายของเครื่องจักรและอุปกรณ์ไฟฟ้า
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                รหัส HS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                มาตรฐานอินเดีย/มาตราเฉพาะของมาตรฐานอินเดีย
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                ชื่อของมาตรฐานอินเดีย
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
                  ไม่พบผลลัพธ์สำหรับ &quot;{searchQuery}&quot;
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
      "ความปลอดภัยของเครื่องจักร อุปกรณ์ไฟฟ้าของเครื่องจักร ส่วนที่ 1 ข้อกำหนดทั่วไป",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ไฟฟ้าของเครื่องจักร ส่วนที่ 11 ข้อกำหนดสำหรับอุปกรณ์สำหรับแรงดันเกิน 1 000 V AC หรือ 1 500 V DC และไม่เกิน 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "ความปลอดภัยทางฟังก์ชันของระบบไฟฟ้า-อิเล็กทรอนิกส์-โปรแกรมอิเล็กทรอนิกส์ที่เกี่ยวข้องกับความปลอดภัย ส่วนที่ 1- ข้อกำหนดทั่วไป",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "ระดับการป้องกันที่ให้โดยเปลือก (รหัส IP)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 1: การเลือกวิธีการทดสอบ",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "ความปลอดภัยของเครื่องจักร การประเมินการปล่อยสารอันตรายทางอากาศ ส่วนที่ 2 วิธีการก๊าซติดตามสำหรับการวัดอัตราการปล่อยของมลพิษที่กำหนด",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 3: วิธีการทดสอบบนม้านั่งสำหรับการวัดอัตราการปล่อยของมลพิษที่กำหนด",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 4: วิธีการติดตามสำหรับการวัดประสิทธิภาพการดักจับของระบบไอเสีย",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 5: วิธีการทดสอบบนม้านั่งสำหรับการวัดประสิทธิภาพการแยกตามมวลของระบบทำความสะอาดอากาศที่มีทางออกไม่ต่อท่อ",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 6 : วิธีการทดสอบบนม้านั่งสำหรับการวัดประสิทธิภาพการแยกตามมวลของระบบทำความสะอาดอากาศที่มีทางออกต่อท่อ",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 7: วิธีการทดสอบบนม้านั่งสำหรับการวัดพารามิเตอร์ความเข้มข้นของมลพิษ",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 8: วิธีการห้องสำหรับการวัดพารามิเตอร์ความเข้มข้นของมลพิษ",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "ความปลอดภัยของเครื่องจักร - การประเมินการปล่อยสารอันตรายทางอากาศ - ส่วนที่ 9: ดัชนีการกำจัดสารปนเปื้อน",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "พลังงานของเหลวไฮดรอลิก- กฎทั่วไปและข้อกำหนดด้านความปลอดภัยสำหรับระบบและส่วนประกอบของพวกเขา",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "พลังงานของเหลวลม- กฎทั่วไปและข้อกำหนดด้านความปลอดภัยสำหรับระบบและส่วนประกอบของพวกเขา",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "เครื่องจักรขุดดิน - ตัวป้องกัน - คำจำกัดความและข้อกำหนด",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "ความปลอดภัยของเครื่องจักร-ความปลอดภัยทางฟังก์ชันของระบบควบคุมไฟฟ้าอิเล็กทรอนิกส์และโปรแกรมอิเล็กทรอนิกส์ที่เกี่ยวข้องกับความปลอดภัย",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ป้องกันที่ไวต่อไฟฟ้าสถิต ส่วนที่ 2 ข้อกำหนดเฉพาะสำหรับอุปกรณ์ที่ใช้อุปกรณ์ป้องกันทางแสงออปโตอิเล็กทรอนิกส์แบบแอคทีฟ AOPDs",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "ความปลอดภัยของเครื่องจักร- การบ่งชี้ การทำเครื่องหมาย และการกระตุ้น ส่วนที่ 3 ข้อกำหนดสำหรับตำแหน่งและการทำงานของตัวกระตุ้น",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "ความปลอดภัยของเครื่องจักร-อุปกรณ์ไฟฟ้าของเครื่องจักร ส่วนที่ 32 ข้อกำหนดสำหรับเครื่องยก",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "ความปลอดภัยของเครื่องจักร - การบ่งชี้ การทำเครื่องหมาย และการกระตุ้น ส่วนที่ 1 ข้อกำหนดสำหรับสัญญาณภาพ เสียง และสัมผัส",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ป้องกันที่ไวต่อไฟฟ้าสถิต ส่วนที่ 1 ข้อกำหนดทั่วไปและการทดสอบ",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "ความปลอดภัยของเครื่องจักร แนวทางสำหรับการใช้ระบบสื่อสารในแอปพลิเคชันที่เกี่ยวข้องกับความปลอดภัย",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "ความปลอดภัยของเครื่องจักร - การบ่งชี้ การทำเครื่องหมาย และการกระตุ้น ส่วนที่ 2 ข้อกำหนดสำหรับการทำเครื่องหมาย",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "ความปลอดภัยของเครื่องจักร การป้องกันไฟและการป้องกันไฟ",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "ความปลอดภัยของเครื่องจักร ข้อกำหนดด้านสุขอนามัยสำหรับการออกแบบเครื่องจักร",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "ความปลอดภัยของเครื่องจักร วิธีการเข้าถึงถาวรไปยังเครื่องจักร ส่วนที่ 1 การเลือกวิธีการคงที่และข้อกำหนดทั่วไปของการเข้าถึง",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "ความปลอดภัยของเครื่องจักร วิธีการเข้าถึงถาวรไปยังเครื่องจักร ส่วนที่ 2 แพลตฟอร์มการทำงานและทางเดิน",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "ความปลอดภัยของเครื่องจักร วิธีการเข้าถึงถาวรไปยังเครื่องจักร ส่วนที่ 3 ทางบันได เก้าอี้บันได และรั้วกัน",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "ความปลอดภัยของเครื่องจักร วิธีการเข้าถึงถาวรไปยังเครื่องจักร ส่วนที่ 4 ทางบันไดคงที่",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "ความปลอดภัยของเครื่องจักร ส่วนที่เกี่ยวข้องกับความปลอดภัยของระบบควบคุม ส่วนที่ 1 หลักการทั่วไปสำหรับการออกแบบ",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "ความปลอดภัยของเครื่องจักร ส่วนที่เกี่ยวข้องกับความปลอดภัยของระบบควบคุม ส่วนที่ 2 การตรวจสอบความถูกต้อง",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "ความปลอดภัยของเครื่องจักร ตัวป้องกัน ข้อกำหนดทั่วไปสำหรับการออกแบบและการก่อสร้างตัวป้องกันคงที่และเคลื่อนที่",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "ความปลอดภัยของเครื่องจักร อุปกรณ์ล็อคที่เกี่ยวข้องกับตัวป้องกัน หลักการสำหรับการออกแบบและการเลือก",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "ความปลอดภัยของเครื่องจักร การป้องกันการเริ่มต้นที่ไม่คาดคิด",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "ความปลอดภัยของเครื่องจักร ระยะห่างด้านความปลอดภัยเพื่อป้องกันการเข้าถึงโซนอันตรายโดยแขนขาและขา",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "ความปลอดภัยของเครื่องจักร ตำแหน่งของตัวป้องกันในความสัมพันธ์กับความเร็วในการเข้าใกล้ของส่วนต่างๆ ของร่างกายมนุษย์",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "ความปลอดภัยของเครื่องจักร ช่องว่างขั้นต่ำเพื่อหลีกเลี่ยงการบดขยี้ส่วนต่างๆ ของร่างกายมนุษย์",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "ความปลอดภัยของเครื่องจักร อุปกรณ์ควบคุมสองมือ หลักการสำหรับการออกแบบและการเลือก",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title:
      "ความปลอดภัยของเครื่องจักร ฟังก์ชันหยุดฉุกเฉิน หลักการสำหรับการออกแบบ",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "ความปลอดภัยของเครื่องจักร น้ำมันหล่อลื่นที่มีการสัมผัสผลิตภัณฑ์โดยบังเอิญ -- ข้อกำหนดด้านสุขอนามัย",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "ความปลอดภัยของเครื่องจักร - การลดความเสี่ยงต่อสุขภาพที่เกิดจากสารอันตรายที่ปล่อยออกมาจากเครื่องจักร - ส่วนที่ 1: หลักการและข้อกำหนดสำหรับผู้ผลิตเครื่องจักร",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "ความปลอดภัยของเครื่องจักร - การลดความเสี่ยงต่อสุขภาพที่เกิดจากสารอันตรายที่ปล่อยออกมาจากเครื่องจักร - ส่วนที่ 2: วิธีการที่นำไปสู่ขั้นตอนการตรวจสอบ",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ป้องกันที่ไวต่อแรงดัน - ส่วนที่ 1: หลักการทั่วไปสำหรับการออกแบบและการทดสอบของเสื่อที่ไวต่อแรงดันและพื้นผิวที่ไวต่อแรงดัน",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ป้องกันที่ไวต่อแรงดัน - ส่วนที่ 2: หลักการทั่วไปสำหรับการออกแบบและการทดสอบของขอบที่ไวต่อแรงดันและแท่งที่ไวต่อแรงดัน",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "ความปลอดภัยของเครื่องจักร - อุปกรณ์ป้องกันที่ไวต่อแรงดัน - ส่วนที่ 3: หลักการทั่วไปสำหรับการออกแบบและการทดสอบของกันชนที่ไวต่อแรงดัน แผ่น ลวด และอุปกรณ์คล้ายกัน",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "การออกแบบทางเออร์โกโนมิกส์- ระบบสัญญาณอันตรายและข้อมูลทางหูและทางตา",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "ข้อกำหนดทางเออร์โกโนมิกส์สำหรับการออกแบบการแสดงผลและตัวกระตุ้นควบคุม ส่วนที่ 2 การแสดงผล",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "ข้อกำหนดทางเออร์โกโนมิกส์สำหรับการออกแบบการแสดงผลและตัวกระตุ้นควบคุม ส่วนที่ 3 ตัวกระตุ้นควบคุม",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "ความปลอดภัยของเครื่องจักร - ข้อกำหนดทางมานุษยวิทยาสำหรับการออกแบบสถานีทำงานที่เครื่องจักร",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "การออกแบบทางเออร์โกโนมิกส์ - มนุษย์จำลองคอมพิวเตอร์และเทมเพลตสำหรับร่างกาย ส่วนที่ 1 ข้อกำหนดทั่วไป",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "การออกแบบทางเออร์โกโนมิกส์ - ระบบสัญญาณอันตรายและข้อมูลทางหูและทางตา",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "ระบบอัตโนมัติอุตสาหกรรม - ความปลอดภัยของระบบการผลิตแบบบูรณาการ - ข้อกำหนดพื้นฐาน",
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
        TYPE B
        (มาตรฐานความปลอดภัยทั่วไปที่จัดการกับด้านความปลอดภัยหนึ่งด้านหรือมากกว่าหนึ่งประเภทของตัวป้องกันที่สามารถใช้ได้ในเครื่องจักรหลากหลาย)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                ลำดับที่
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                หมายเลข IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                ชื่อ
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
                  ไม่พบผลลัพธ์สำหรับ &quot;{searchQuery}&quot;
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
  );
};

const SchemeXServiceFaq = () => {
  const faqData = [
    {
      question: "1. Scheme X ภายใต้การรับรอง BIS คืออะไร?",
      answer:
        "Scheme X คือแผนการประเมินความสอดคล้องที่นำเสนอโดย BIS ของอินเดียสำหรับเครื่องจักรและอุปกรณ์ไฟฟ้า มันทำให้มั่นใจในความสอดคล้องกับมาตรฐานความปลอดภัยและทางเทคนิคที่เข้มงวดตามที่กำหนดในกฎระเบียบทางเทคนิคแบบครอบคลุม",
    },
    {
      question: "2. Scheme X แตกต่างจากการรับรองเครื่องหมาย ISI หรือไม่?",
      answer:
        "ใช่ เครื่องหมาย ISI ใช้สำหรับสินค้าอุปโภคบริโภคและการปฏิบัติตามผลิตภัณฑ์พื้นฐาน ในขณะที่ Scheme X ใช้กับผลิตภัณฑ์ที่ซับซ้อนและเกรดอุตสาหกรรมที่ต้องการการทดสอบและการรับรองขั้นสูงผ่านใบรับรอง BIS หรือใบอนุญาต BIS",
    },
    {
      question: "3. ใครต้องสมัครการรับรอง Scheme X?",
      answer:
        "ผู้ผลิตและผู้นำเข้าของเครื่องจักรและอุปกรณ์ไฟฟ้าที่ระบุในกฎระเบียบทางเทคนิคแบบครอบคลุมต้องสมัคร Scheme X และได้รับการรับรอง BIS ที่ถูกต้องเพื่อขายหรือแจกจ่ายผลิตภัณฑ์ของตนในอินเดียอย่างถูกกฎหมาย ผู้ผลิตทั่วโลกหรือผู้ผลิตต่างชาติที่ตั้งใจขายผลิตภัณฑ์ในอินเดียต้องปฏิบัติตามกฎระเบียบเหล่านี้ด้วย",
    },
    {
      question: "4. ค่าใช้จ่ายในการรับรอง BIS Scheme X คือเท่าไร?",
      answer:
        "ค่าใช้จ่ายของ Scheme X รวมถึงค่าธรรมเนียมการสมัคร ค่าธรรมเนียมการรับรอง ค่าทบทวนไฟล์ทางเทคนิค ค่าโรงงานตรวจสอบ และค่าทดสอบผลิตภัณฑ์ โดยเฉลี่ยเริ่มต้นที่ ₹2,000 สำหรับการสมัครและอาจสูงขึ้นตามความซับซ้อนของผลิตภัณฑ์ สำหรับรายละเอียดเพิ่มเติม ติดต่อเราที่ admin@bis-certifications.com",
    },
    {
      question: "5. ใช้เวลานานแค่ไหนในการรับใบอนุญาต BIS ภายใต้ Scheme X?",
      answer:
        "ระยะเวลาขึ้นอยู่กับเอกสาร ข้อกำหนดการทดสอบ และการตรวจสอบโรงงาน โดยปกติใช้เวลา 4–6 สัปดาห์นับจากวันที่ลงทะเบียน BIS และส่งใบสมัครสำเร็จสำหรับผู้ผลิตในอินเดีย และ 60-90 วันสำหรับผู้ผลิตต่างชาติ",
    },
    {
      question: "6. MSMEs สามารถสมัครการรับรอง BIS ภายใต้ Scheme X ได้หรือไม่?",
      answer:
        "แน่นอน ในความเป็นจริง BIS ของอินเดียสนับสนุนให้ MSMEs สมัครใบอนุญาต BIS หรือใบรับรองความสอดคล้องภายใต้ Scheme X เพื่อเพิ่มคุณภาพ การปฏิบัติตาม และความสามารถในการแข่งขันในภาคอุตสาหกรรม",
    },
    {
      question:
        "7. การรับรอง BIS ภายใต้ Scheme X จำเป็นสำหรับการส่งออกหรือไม่?",
      answer:
        "ไม่ ผลิตภัณฑ์ที่ผลิตสำหรับการส่งออกเท่านั้นได้รับการยกเว้นภายใต้กฎระเบียบทางเทคนิคแบบครอบคลุม อย่างไรก็ตาม ผลิตภัณฑ์ที่ตั้งใจสำหรับตลาดอินเดียต้องได้รับการรับรองภายใต้ Scheme X",
    },
    {
      question: "8. อายุการใช้งานของใบอนุญาต BIS ภายใต้ Scheme X คือเท่าไร?",
      answer:
        "ใบอนุญาต BIS ภายใต้ Scheme X มีอายุการใช้งานโดยทั่วไป 3-6 ปี และต้องต่ออายุตามนั้น การต่ออายุเกี่ยวข้องกับการชำระค่าธรรมเนียมการรับรอง BIS ประจำปีและอาจต้องมีการประเมินใหม่ขึ้นอยู่กับการเปลี่ยนแปลงในขอบเขตผลิตภัณฑ์หรือมาตรฐาน",
    },
    {
      question: "9. ผู้ผลิตต่างชาติสามารถสมัครการรับรอง Scheme X ได้หรือไม่?",
      answer:
        "ใช่ ผู้ผลิตต่างชาติสามารถสมัครการรับรอง Scheme X ผ่านตัวแทนอินเดียที่ได้รับอนุญาต BIS ของอินเดียต้องการการตรวจสอบโรงงาน ซึ่งอาจใช้เวลา 3 วันสำหรับผู้สมัครต่างชาติ พร้อมกับกระบวนการลงทะเบียน BIS และการทดสอบมาตรฐาน",
    },
    {
      question: "10. ไฟล์ทางเทคนิคคืออะไรและทำไมจึงจำเป็น?",
      answer:
        "ไฟล์ทางเทคนิคคือเอกสารการปฏิบัติตามโดยละเอียดที่จำเป็นภายใต้ Scheme X มันรวมถึงกระบวนการผลิต รายละเอียดผลิตภัณฑ์ รายงานการทดสอบ และเอกสารควบคุมคุณภาพ มันสนับสนุนความสอดคล้องของผลิตภัณฑ์กับมาตรฐานอินเดียที่เกี่ยวข้องในระหว่างกระบวนการรับรอง BIS",
    },
    {
      question:
        "11. Scheme X เกี่ยวข้องกับกฎระเบียบทางเทคนิคแบบครอบคลุมอย่างไร?",
      answer:
        "กฎระเบียบทางเทคนิคแบบครอบคลุมกำหนดให้ใช้ Scheme X สำหรับหมวดหมู่เฉพาะของเครื่องจักรและอุปกรณ์ไฟฟ้าในอินเดีย ผลิตภัณฑ์ที่ระบุในกฎระเบียบต้องได้รับการรับรองภายใต้ Scheme X เพื่อรับใบรับรอง BIS หรือใบอนุญาต BIS ที่ถูกต้อง",
    },
    {
      question: "12. ใบรับรอง BIS ภายใต้ Scheme X สามารถถูกเพิกถอนได้หรือไม่?",
      answer:
        "ใช่ BIS ของอินเดียสามารถระงับหรือยกเลิกใบอนุญาต BIS หรือใบรับรองภายใต้ Scheme X หากพบการไม่ปฏิบัติตามระหว่างการเฝ้าระวังหรือหากผลิตภัณฑ์ไม่ตรงตามมาตรฐานอินเดียที่จำเป็น",
    },
    {
      question:
        "13. ความแตกต่างระหว่างใบอนุญาต BIS และใบรับรอง BIS ภายใต้ Scheme X คืออะไร?",
      answer:
        "ใบอนุญาต BIS มักออกให้ผู้ผลิตในอินเดีย ในขณะที่ใบรับรองความสอดคล้อง BIS (CoC) มักออกให้ผู้ผลิตต่างชาติหรือกรณีเฉพาะ ทั้งสองมีวัตถุประสงค์เดียวกัน—การทำให้มั่นใจในการปฏิบัติตามผลิตภัณฑ์ภายใต้ Scheme X",
    },
    {
      question:
        "14. เครื่องหมาย ISI อนุญาตสำหรับผลิตภัณฑ์ที่ได้รับการรับรองภายใต้ Scheme X หรือไม่?",
      answer:
        "ไม่ ผลิตภัณฑ์ภายใต้ Scheme X ไม่ใช้เครื่องหมาย ISI แทนที่จะใช้เครื่องหมายมาตรฐาน BIS ที่เกี่ยวข้องกับแผนการรับรอง ตามที่กำกับโดย BIS ของอินเดีย",
    },
    {
      question:
        "ฉันจะรู้ได้อย่างไรว่าเครื่องจักรของฉันต้องการการรับรอง Scheme X?",
      answer:
        "ตรวจสอบรายการอย่างเป็นทางการในกฎระเบียบทางเทคนิคแบบครอบคลุมหรือปรึกษาที่ปรึกษา BIS เพื่อยืนยันว่าเครื่องจักรของคุณตกอยู่ภายใต้ข้อกำหนดการรับรอง Scheme X ที่บังคับ",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="คำถามที่พบบ่อย"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          คำถามที่พบบ่อย
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          ไม่พบคำตอบที่คุณกำลังมองหาหรือ?{" "}
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

        <ServiceAuthorThai />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">สรุป</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">สรุป</h2>

      <p className="service-left-content-paragraph">
        การรับรอง BIS Scheme-X ยังคงสำคัญในการรักษาความปลอดภัย ความน่าเชื่อถือ
        และคุณภาพของสวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำ
        เครื่องจักรและอุปกรณ์ไฟฟ้า สำหรับผู้ผลิตเครื่องมือที่ใช้ในการแปรรูปหิน
        เซรามิก คอนกรีต ยางมะตอยซีเมนต์และแก้วแร่ การรับรอง BIS Scheme-X
        เป็นสิ่งบังคับ
      </p>

      <p className="service-left-content-paragraph">
        โดยการปฏิบัติตามข้อผูกพันเหล่านี้
        ผู้ผลิตรับประกันความสอดคล้องของผลิตภัณฑ์ เพิ่มความเชื่อมั่นของผู้บริโภค
        และปรับปรุงความน่าเชื่อถือในตลาด Scheme-X
        ทำให้มั่นใจว่าการผลิตราบรื่นที่สุด
        มาตรฐานความปลอดภัยทั่วโลกได้รับการตอบสนอง
        และแบรนด์ที่ได้รับการยอมรับมีชื่อเสียงในเชิงบวก
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">เอกสาร</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        เอกสารสำคัญที่จำเป็นสำหรับการรับรอง BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        เพื่อให้กระบวนการรับรอง BIS เป็นไปอย่างราบรื่น
        ผู้ผลิตจำเป็นต้องรวบรวมและส่งเอกสารต่อไปนี้ในขั้นตอนการลงทะเบียน:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                ลำดับที่
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                เอกสารที่จำเป็น
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                รายละเอียด
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                ชื่อและที่อยู่ (โรงงานและสำนักงาน)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ชื่อทางกฎหมายเต็มและที่อยู่ทางกายภาพของสถานที่ผลิตและสำนักงาน
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                ข้อมูล PAN และ GST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                หมายเลขบัญชีถาวร (PAN) และรายละเอียดการลงทะเบียน GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                รายละเอียดการติดต่อ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ที่อยู่อีเมล หมายเลขโทรศัพท์มือถือ
                และสายโทรศัพท์พื้นสำหรับการสื่อสารอย่างเป็นทางการ
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                รายละเอียดการจัดการ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ชื่อ บทบาท และ ID ของผู้บริหารหลักและผู้เซ็นชื่อที่ได้รับอนุญาต
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                คำอธิบายผลิตภัณฑ์
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                รายละเอียดของเครื่องจักรและอุปกรณ์ที่ครอบคลุมภายใต้ตารางแรกของกฎระเบียบทางเทคนิคแบบครอบคลุม
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                การจำแนกประเภทผลิตภัณฑ์
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ประเภท โมเดล และความหลากหลายเฉพาะสำหรับที่ขอใบอนุญาต BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                ไฟล์ทางเทคนิค
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                รายละเอียดทางเทคนิคทั้งหมดที่เกี่ยวข้องกับผลิตภัณฑ์และรายละเอียดเกี่ยวกับหน่วยผลิต
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        อายุการใช้งานและกระบวนการต่ออายุใบรับรอง Scheme-X:
      </h3>

      <PointsListWithoutHeading
        points={[
          "อายุการใช้งานใบอนุญาตและการต่ออายุ: ใบอนุญาต BIS ภายใต้ Scheme-X ออกสำหรับระยะเวลา 3 ถึง 6 ปีสำหรับการผลิตต่อเนื่อง เมื่อระยะเวลาหมดอายุ ใบอนุญาตสามารถต่ออายุสำหรับระยะเวลาเดียวกันโดยการส่งใบสมัครต่ออายุ ค่าธรรมเนียมที่จำเป็น และเอกสารปฏิบัติตาม",
          "ใบรับรองความสอดคล้อง (CoC): CoC ออกสำหรับการผลิตครั้งเดียว และใช้ได้สำหรับผู้ผลิตในประเทศและต่างประเทศ เนื่องจากใช้เฉพาะสำหรับชุดเดียว CoC ไม่มีตัวเลือกการต่ออายุ",
          "รายงานการทดสอบผลิตภัณฑ์: เมื่อรายงานการทดสอบจัดทำในห้องปฏิบัติการของผู้ผลิต เจ้าหน้าที่ BIS จะตรวจสอบระหว่างการตรวจสอบโรงงานโดยการทดสอบผู้เห็น หากการทดสอบทำที่สถานที่ที่รับจ้าง สถานที่เหล่านั้นจะถูกตรวจสอบและอนุมัติโดย BIS",
          "การทบทวนใบสมัครสำหรับการต่ออายุ: เพื่อความถูกต้องโดยไม่ขาดตอน ผู้ผลิตจำเป็นต้องปฏิบัติตามข้อกำหนดของ Scheme-X ต่อไป ตามกฎระเบียบ 8 ของกฎระเบียบการประเมินความสอดคล้อง BIS สำนักมาตรฐานอินเดียประมวลผลใบสมัครต่ออายุในแบบฟอร์ม VIII การต่ออายุทำหลังจากตรวจสอบความปฏิบัติตามที่น่าพอใจ",
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
        <span className="service-left-content-index-heading">กระบวนการ</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ขั้นตอนในการรับการรับรองภายใต้ BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        การออกใบรับรอง BIS ภายใต้ Scheme-X
        เป็นกิจกรรมระบบที่ตั้งใจให้มั่นใจว่าผู้ผลิตปฏิบัติตามมาตรฐานความปลอดภัย
        คุณภาพ และการปฏิบัติตามที่เกี่ยวข้อง กระบวนการดังนี้:
      </p>

      <PointsListWithoutHeading
        points={[
          "ตรวจสอบขอบเขต: กำหนดว่าผลิตภัณฑ์ของคุณอยู่ในขอบเขตของ Scheme-X และหากเป็นไปได้กับข้อกำหนดความปลอดภัย BIS ตรวจสอบมาตรฐานอินเดียที่เกี่ยวข้องและตารางทางเทคนิคเพื่อกำหนดว่าคุณจะปฏิบัติตามได้",
          "เตรียมเอกสารที่จำเป็น: ผู้ผลิตจำเป็นต้องรวบรวมและจัดเรียงเอกสารต่อไปนี้: ใบรับรองธุรกิจที่ลงทะเบียน เอกสารพื้นฐานการออกแบบ เอกสารกระบวนการโรงงานและการไหล รายงานการทดสอบบริการ (หากใช้ได้) เอกสารรับประกันคุณภาพและควบคุม",
          "สร้างไฟล์ทางเทคนิค: ไฟล์ทางเทคนิคเป็นส่วนสำคัญสำหรับการอ้างสิทธิ์การขยายใบรับรอง มันควรประกอบด้วย: ข้อกำหนดทางเทคนิคของผลิตภัณฑ์ ข้อมูลวิธีการและเทคนิค เอกสารปฏิบัติตามและทดสอบ  limitation และวัตถุประสงค์ที่ตั้งใจของผลิตภัณฑ์ เอกสารรับประกันคุณภาพ การติดตามวัตถุดิบ การติดตามสัญญาย่อย และหลักฐานที่เหลือ การสอดคล้องกับมาตรฐานในขอบเขตที่กำหนด",
          "แบบฟอร์มใบสมัคร: แบบฟอร์มใบสมัครสามารถส่งทางอิเล็กทรอนิกส์บนเว็บไซต์ BIS สำหรับสถานที่ที่กำหนด การชำระค่าธรรมเนียมใบสมัครเป็นสิ่งจำเป็น เอกสารที่เหลือที่ตรวจสอบใบสมัครควรรวมไว้สำหรับการประเมินที่เหมาะสม",
          "การตรวจสอบโรงงาน: สำหรับผู้ผลิตในประเทศ: การตรวจสอบดำเนินการในระยะเวลาสูงสุด 2 วัน สำหรับผู้ผลิตต่างชาติ: การตรวจสอบดำเนินการในระยะเวลาสูงสุด 3 วัน (วันเพิ่มเติมอาจเกิดขึ้นเนื่องจากคำขอเพิ่มเติม)",
          "การทดสอบตัวอย่างผลิตภัณฑ์: การทดสอบตัวอย่างดำเนินการที่สถานที่ของผู้ผลิตหรือที่ห้องปฏิบัติการที่ BIS อนุมัติภายนอก (อนุญาตให้ทดสอบภายนอก) การทดสอบแสดงให้เห็นถึงการปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้อง",
          "การออกใบรับรอง: หากผลิตภัณฑ์ตรงตามเงื่อนไขทั้งหมด BIS มอบใบอนุญาตหรือใบรับรองความสอดคล้อง (CoC) สำหรับผลิตภัณฑ์แต่ละชิ้น ผู้ผลิตสามารถใช้เครื่องหมายมาตรฐาน BIS ได้อย่างอิสระบนผลิตภัณฑ์ที่ได้รับการรับรองทั้งหมด",
        ]}
      />

      <p className="service-left-content-paragraph">
        ไฟล์นี้ทำหน้าที่เป็นหลักฐานทางเทคนิคและสถิติของการอ้างสิทธิ์ผลิตภัณฑ์ที่สนับสนุนมาตรฐานการติดตามความปลอดภัย
      </p>

      <p className="service-left-content-paragraph">
        ในช่วงการตรวจสอบ เจ้าหน้าที่ BIS คาดว่าจะ: วิเคราะห์ไฟล์ทางเทคนิค
        ประเมินวิธีการผลิตพร้อมกับระบบรับประกันคุณภาพที่สนับสนุน
        สังเกตการทดสอบผลิตภัณฑ์ กำหนดการไม่ปฏิบัติตาม (หากมี)
        และให้ขั้นตอนการแก้ไข
        รายงานการตรวจสอบโดยละเอียดจะให้แก่ผู้สมัครหลังการเยี่ยมชม
      </p>

      <p className="service-left-content-paragraph">
        กลยุทธ์นี้รักษาการปฏิบัติตามมาตรฐาน BIS
        และเป็นการยอมรับการปฏิบัติตามของอินเดียและนานาชาติ
        ทำให้อุตสาหกรรมมุ่งเน้นไปที่ความเชื่อมั่นของผู้บริโภคต่อความปลอดภัยและคุณภาพ
      </p>

      <h2 className="service-left-content-heading-three">
        ขั้นตอนสำหรับผู้ผลิตในประเทศ
      </h2>

      <p className="service-left-content-paragraph">
        ผู้ผลิตในประเทศปฏิบัติตามแนวทางโดยตรงโดยการรับใบอนุญาต BIS ภายใต้
        Scheme-X ขั้นตอนโดยตรงที่ต้องปฏิบัติตามรวมถึง:
      </p>

      <PointsListWithoutHeading
        points={[
          "เอกสาร: เอกสารทั้งหมดที่เกี่ยวข้องกับแผนการต้องรวบรวมและเตรียม",
          "การดำเนินการใบสมัคร: ใบสมัครต้องนำเสนอพร้อมค่าธรรมเนียมที่เกี่ยวข้อง",
          "การสอบถามใบสมัคร: ใบสมัครที่ส่งจะถูกตรวจสอบและชุดคำถามต่อไปจะถูกสร้างโดย BIS",
          "การแต่งตั้งผู้ตรวจสอบ: ผู้ตรวจสอบถูกแต่งตั้งโดย BIS แต่บุคคลที่เสนอชื่อต้องชำระค่าธรรมเนียมการตรวจสอบ",
          "การตรวจสอบโรงงาน: การตรวจสอบและการสำรวจดำเนินการที่ไซต์และตัวอย่างที่เกี่ยวข้องถูกเก็บรวบรวม",
          "การประเมินตัวอย่าง: ตัวอย่างถูกประเมินในห้องปฏิบัติการที่ BIS รับรู้ ผู้สมัครชำระค่าทดสอบห้องปฏิบัติการที่ BIS รับรู้ทั้งหมด",
          "การชำระค่าธรรมเนียมใบอนุญาตและเครื่องหมาย: การชำระเงินที่จำเป็นสำเร็จแก่ BIS",
          "การมอบใบอนุญาต: ใบรับรองที่อนุญาตให้ใช้เครื่องหมาย BIS ถูกมอบโดย BIS",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>ระยะเวลาทั่วไป:</strong> ใกล้เคียง 90 วันทำงาน (ตามแนวปฏิบัติ
        BIS) จำเป็น นี้ให้ไม่มี non-conformities หลัก
      </p>

      <h2 className="service-left-content-heading-three">
        ขั้นตอนสำหรับผู้ผลิตต่างชาติ
      </h2>

      <p className="service-left-content-paragraph">
        แตกต่างจากผู้ผลิตในประเทศ ผู้ผลิตต่างชาติที่สมัครใบรับรอง BIS ภายใต้
        Scheme-X จำเป็นต้องปฏิบัติตามกระบวนการที่เข้มงวดกว่าและขั้นตอนเพิ่มเติม
        กระบวนการอธิบายดังนี้
      </p>

      <PointsListWithoutHeading
        points={[
          "การเตรียมเอกสาร: ธุรกิจที่ลงทะเบียน ผลิตภัณฑ์และเลย์เอาท์โรงงาน รายงานการทดสอบ และเอกสารการจัดการคุณภาพที่เกี่ยวข้องทั้งหมดต้องอยู่ในโฟลเดอร์ที่กำหนดให้ปฏิบัติตาม",
          "การส่งใบสมัคร: ใบสมัคร ค่าธรรมเนียมที่จำเป็น และวัสดุใบสมัครทั้งหมดต้องส่งผ่านพอร์ทัลออนไลน์ BIS",
          "การบันทึกใบสมัครและการตรวจสอบ: ใบสมัครถูกบันทึกโดย BIS และตรวจสอบเอกสาร ทุกปัญหาที่ BIS อาจมีต้องแก้ไขโดยผู้สมัครในเวลาที่เหมาะสม",
          "การมอบหมายผู้ตรวจสอบและการชำระเงิน: ผู้ตรวจสอบของ BIS ที่รับผิดชอบการตรวจสอบโรงงานถูกมอบหมายให้ผู้สมัครสำหรับการตรวจสอบ ผู้สมัครต้องชำระค่าธรรมเนียมที่กำหนดสำหรับการตรวจสอบที่ดำเนินการ ตามที่กำหนดโดยกฎหมายที่ใช้",
          "การเตรียมการตรวจสอบ: ผู้ผลิตต่างชาติรับผิดชอบการจัดเรียงโลจิสติกส์สำหรับการตรวจสอบ เช่น การออกวีซ่า ตั๋วเครื่องบิน และการจองโรงแรมสำหรับเจ้าหน้าที่ BIS ถูกจัดและชำระเงิน",
          "การตรวจสอบโรงงานและการเลือกตัวอย่าง: เจ้าหน้าที่ BIS ดำเนินการตรวจสอบโรงงานที่ครอบคลุม 3 วัน (วันเพิ่มเติมสามารถเพิ่มได้หากต้องการแอปพลิเคชันเพิ่มเติม)",
          "การทดสอบผลิตภัณฑ์: ตัวอย่างที่เลือกถูกส่งไปยังห้องปฏิบัติการที่ BIS รับรองสำหรับการทดสอบ ในบางกรณี การทดสอบถูกทำสัญญากับห้องปฏิบัติการทดสอบอื่นและการชำระเงินถูกจัดการผ่านห้องปฏิบัติการทดสอบหลัก",
          "การชำระค่าธรรมเนียมเครื่องหมายและใบอนุญาต: หลังจากการตรวจสอบและผลการทดสอบที่สำเร็จ ผู้ผลิตต้องชำระค่าธรรมเนียมเครื่องหมายที่จำเป็นและค่าธรรมเนียมใบอนุญาตแก่ BIS",
          "การมอบใบอนุญาต: BIS ออกใบอนุญาต/ใบรับรองความสอดคล้อง (CoC) เมื่อปฏิบัติตามเงื่อนไขทั้งหมด BIS จากนั้นอนุญาตให้ผู้ผลิตใช้เครื่องหมายมาตรฐาน BIS บนผลิตภัณฑ์ที่ได้รับการรับรองอื่นๆ เมื่อยืนยันการปฏิบัติตาม",
        ]}
      />

      <p className="service-left-content-paragraph">
        การตรวจสอบประกอบด้วย:
        การประเมินระบบรับประกันคุณภาพและกระบวนการทำงานในกระบวนการผลิต
        การประเมินการปฏิบัติตามและเอกสารทางเทคนิค การเลือกตัวอย่างทดสอบอิสระ
      </p>

      <p className="service-left-content-paragraph">
        กระบวนการทั้งหมดใช้ โดยอิงจากแนวปฏิบัติจาก BIS โดยประมาณ 6-7 เดือน
      </p>

      <h3 className="service-left-content-heading-three">
        เคล็ดลับเพิ่มเติมสำคัญสำหรับผู้ผลิตต่างชาติ:
      </h3>

      <PointsListWithoutHeading
        points={[
          "การจำแนก FMCS: ผู้ผลิตต่างชาติทั้งหมดถูกจำแนกเป็น 'ขนาดใหญ่' ภายใต้แผนการรับรองผู้ผลิตต่างชาติ การจำแนกนี้ไม่คำนึงถึงขนาดการดำเนินงาน",
          "ตัวแทนอินเดียที่ได้รับอนุญาต (AIR): ผู้ผลิตต่างชาติทุกคนจำเป็นต้องกำหนดตัวแทนอินเดียที่ได้รับอนุญาต (AIR) AIR เป็นจุดติดต่อหลักสำหรับผู้สมัครต่างชาติและ BIS รับผิดชอบการปฏิบัติตาม การทำงานร่วมกัน และการบำรุงรักษาใบอนุญาต BIS",
          "การตรวจสอบโรงงาน: การตรวจสอบโรงงานสำหรับผู้ผลิตต่างชาติครอบคลุมและมักใช้เวลา 3 วัน นอกจากนี้ วันเพิ่มเติมจำเป็นในกรณีที่ยื่นแอปพลิเคชันผลิตภัณฑ์หลายรายการ",
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
        <span className="service-left-content-index-heading">ภาพรวม</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        บทนำสู่การรับรอง BIS Scheme X
      </h2>

      <p className="service-left-content-paragraph">
        สำนักมาตรฐานอินเดีย หรือ BIS สั้นๆ ได้เปิดตัว &ldquo;Scheme X&rdquo;
        เมื่อวันที่ 16 มีนาคม 2022
        เพื่อปรับปรุงการปฏิบัติตามความปลอดภัยและคุณภาพผลิตภัณฑ์ในอินเดีย
        ผู้ผลิตในอินเดียและต่างชาติสามารถสมัครการรับรอง BIS
        สำหรับเครื่องจักรและอุปกรณ์ไฟฟ้า ส่วนประกอบ เช่น การประกอบ ส่วนย่อย และ
        เครื่องมือที่ระบุในตาราง-II ของ Scheme-X และรับการรับรองก่อนส่งออก ขาย
        หรือแจกจ่ายในอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        ภายใต้ Scheme X ผู้ผลิตสามารถสมัครใบอนุญาต BIS หรือใบรับรองความสอดคล้อง
        (CoC) สำหรับสวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำ เครื่องจักร
        และอุปกรณ์ไฟฟ้า เมื่อผู้ผลิตได้รับการรับรอง
        พวกเขาจะได้รับอนุญาตให้ใช้เครื่องหมายมาตรฐาน BIS
        ซึ่งบ่งชี้ว่าผลิตภัณฑ์ของพวกเขาสอดคล้องกับมาตรฐานที่กำหนดในอินเดีย
      </p>

      <p className="service-left-content-paragraph">
        การรับรอง
        ในขณะที่ส่งเสริมผลิตภัณฑ์และการปฏิบัติตามมาตรฐานอินเดียและกฎระเบียบของรัฐบาล
        ช่วยพัฒนาความเชื่อมั่นและความเชื่อมั่นของผู้บริโภคในผลิตภัณฑ์ที่ได้รับการรับรอง
      </p>

      <h2 className="service-left-content-heading-three">
        การรับรอง Scheme X คืออะไร?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X
        คือแผนการรับรองผลิตภัณฑ์ที่พัฒนาภายใต้กฎระเบียบการประเมินความสอดคล้อง
        BIS, 2018 และต่อมา
        ได้รับการปรับปรุงให้ง่ายขึ้นภายใต้กฎระเบียบการประเมินความสอดคล้อง BIS
        (แก้ไข) 2022
      </p>

      <p className="service-left-content-paragraph">
        เป้าหมายหลักคือการนำมาตรฐานความปลอดภัยและคุณภาพของอินเดียไปสู่มาตรฐานสากล
        โดยเฉพาะอย่างยิ่งเกี่ยวกับเครื่องจักรอุตสาหกรรมและอุปกรณ์ไฟฟ้า
        ผลิตภัณฑ์ที่ผลิตในหรือนำเข้าสู่อินเดียภายใต้แผนการนี้ถูกตรวจสอบและประเมินอย่างเข้มงวดเพื่อพิสูจน์มาตรฐานทางเทคนิค
        ความปลอดภัย และประสิทธิภาพ
      </p>

      <p className="service-left-content-paragraph">
        ข้อกำหนดภายใต้ขอบเขตดั้งเดิมของการรับรอง Scheme X
        ได้รับการปรับปรุงและขยายด้วยคำสั่งความปลอดภัยเครื่องจักรและอุปกรณ์ไฟฟ้า
        (กฎระเบียบทางเทคนิคแบบครอบคลุม) 2024 ใหม่
        ซึ่งอยู่ภายใต้เขตอำนาจของกระทรวงอุตสาหกรรมหนักและถูกบังคับใช้โดย BIS
        คำสั่งมีผลบังคับใช้เมื่อวันที่ 1 กันยายน 2026
        และครอบคลุมสเปกตรัมกว้างของเครื่องจักรและอุปกรณ์ไฟฟ้า เช่น
        ปั๊มสำหรับจัดการของเหลว คอมเพรสเซอร์ เครน เครื่องจักรไฟฟ้าหมุนเวียน
        หม้อแปลง และสวิตช์เกียร์และอุปกรณ์ควบคุม
      </p>

      <p className="service-left-content-paragraph">
        การประกอบ ส่วนย่อย
        และส่วนประกอบของเครื่องจักรหรืออุปกรณ์ดังกล่าวเป็นส่วนหนึ่งของขอบเขตการรับรองตามมาตรา
        16 ของพระราชบัญญัติสำนักมาตรฐานอินเดีย 2016
      </p>

      <p className="service-left-content-paragraph">
        นอกจากนี้ ภายใต้กฎ CMVR 1989 (การก่อสร้างและการผลิตของวาล์วกำกับ) Bowser
        และประเภทอื่นๆ ของอุปกรณ์ก่อสร้างภายใต้เขตอำนาจของ Scheme X
        ทำให้มั่นใจว่าตลาดไม่ถูกเปิดเผยต่ออุปกรณ์ที่ขาดความปลอดภัยและมาตรฐานทางเทคนิคที่จำเป็น
      </p>

      <h2 className="service-left-content-heading-three">
        กฎระเบียบทางเทคนิคแบบครอบคลุม (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        กระทรวงอุตสาหกรรมหนักได้ออก
        &ldquo;กฎระเบียบทางเทคนิคแบบครอบคลุมเกี่ยวกับคำสั่งความปลอดภัย
        (ความปลอดภัยเครื่องจักรและอุปกรณ์ไฟฟ้า)&rdquo; ผ่านการแจ้งเตือน
        E-Gazette เมื่อวันที่ 28 สิงหาคม 2024 กฎระเบียบใหม่นี้ตั้งใจปรับปรุง -
        ความปลอดภัย คุณภาพ และการปฏิบัติตามของเครื่องจักร อุปกรณ์ไฟฟ้า
        และการประกอบ ส่วนย่อย และส่วนประกอบของพวกเขา ภายใต้ Scheme X
        ของกฎระเบียบ BIS, 2016
      </p>

      <p className="service-left-content-paragraph">
        ภายใต้ OTR หมวดหมู่ทั้งหมดของเครื่องจักรและอุปกรณ์ไฟฟ้า
        และส่วนและส่วนประกอบทั้งหมดของพวกเขาถูกรวมไว้ อย่างไรก็ตาม
        หมวดหมู่ไม่กี่หมวดถูกยกเว้นโดยเฉพาะ:
      </p>

      <PointsListWithoutHeading
        points={[
          "เครื่องจักรและส่วนประกอบใดๆ ที่เป็นส่วนหนึ่งของคำสั่งอื่นภายใต้มาตรา 16 ที่ออกภายใต้พระราชบัญญัติสำนักมาตรฐานอินเดีย 2016",
          "สินค้าบริโภคในประเทศที่ผลิตและบทความที่ตั้งใจสำหรับการส่งออกเท่านั้น",
          "เครื่องจักรและอุปกรณ์ก่อสร้างที่อยู่ภายใต้กฎ CMVR, 1989 ที่กำหนดโดยกระทรวงคมนาคมและทางหลวง (MoRTH)",
        ]}
      />

      <p className="service-left-content-paragraph">
        ข้อยกเว้นเหล่านี้ทำเพื่ออำนวยความสะดวกในการปฏิบัติตามและหลีกเลี่ยงการซ้ำซ้อนของกฎระเบียบที่ไม่จำเป็นเพื่อส่งเสริมความสะดวกในการทำธุรกิจ
      </p>

      <p className="service-left-content-paragraph">
        กฎระเบียบทางเทคนิคแบบครอบคลุม 2024
        ครอบคลุมเครื่องจักรและอุปกรณ์ไฟฟ้าทั้งหมด
        รวมถึงสวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำที่แจ้งโดยกระทรวงอุตสาหกรรมหนัก
        จะถูกจัดการภายใต้กรอบ Scheme X ของการรับรอง BIS
        คำสั่งจะมีผลบังคับใช้เมื่อวันที่ 1 กันยายน 2026
        เพื่อให้ผู้ผลิตและผู้นำเข้ามีเวลาพอในการปรับปรุงการดำเนินงานตามคำสั่งที่ออก
      </p>

      <h2 className="service-left-content-heading-three">
        การรับรอง BIS ภายใต้กฎระเบียบทางเทคนิคแบบครอบคลุม
      </h2>

      <p className="service-left-content-paragraph">
        ตาม OTR 2024
        ผู้ผลิตและผู้นำเข้าของเครื่องจักรและอุปกรณ์ไฟฟ้าซึ่งรวมถึงปั๊ม
        คอมเพรสเซอร์ เซนทริฟูจ เครน หม้อแปลง และสวิตช์เกียร์ต้องสมัครการรับรอง
        BIS ภายใต้ Scheme X
      </p>

      <p className="service-left-content-paragraph">
        ภายใต้ Scheme X ผู้ผลิตสามารถเลือกสมัคร:
      </p>

      <PointsListWithoutHeading
        points={["ใบอนุญาต BIS หรือ", "ใบรับรองความสอดคล้อง (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        ผลิตภัณฑ์ที่ติดเครื่องหมายมาตรฐาน BIS
        ซึ่งเป็นเครื่องหมายของความสอดคล้องที่รับรองและรับประกันผู้ใช้ว่าผลิตภัณฑ์ปลอดภัย
        น่าเชื่อถือ และมีคุณภาพดี
        มันยังเป็นเครื่องหมายของความเชื่อมั่นและประสิทธิภาพที่ดีจริงๆ
      </p>

      <h3 className="service-left-content-heading-three">
        หมายเหตุพิเศษสำหรับ MSMEs
      </h3>

      <p className="service-left-content-paragraph">
        เช่นเดียวกับภาคส่วนอื่นๆ องค์กรขนาดกลางขนาดเล็กและขนาดย่อม (MSMEs)
        ต้องปฏิบัติตาม Scheme X และรับการรับรอง BIS
        สำหรับเครื่องจักรและอุปกรณ์ไฟฟ้าของพวกเขา
        ในขณะที่อาจดูว่าการปฏิบัติตามข้อกำหนดทางกฎระเบียบอาจท้าทาย ใบรับรอง
        Scheme X เป็นการเพิ่มมูลค่าและข้อได้เปรียบสำหรับ MSMEs
        ด้วยเหตุผลต่อไปนี้:
      </p>

      <PointsListWithoutHeading
        points={[
          "พิสูจน์การยึดติดกับข้อผูกพันทางกฎหมายและอื่นๆ ที่กำหนดโดยรัฐบาล",
          "เพิ่มชื่อเสียงผลิตภัณฑ์และความเชื่อมั่นของผู้บริโภค",
          "อำนวยความสะดวกในการเข้าถึงตลาดในประเทศและต่างประเทศที่ใหญ่กว่า",
          "ปรับปรุงสถานะของ MSME ทั่วโลกในด้านความสามารถในการแข่งขัน ความปลอดภัย และคุณภาพ",
        ]}
      />

      <h3 className="service-left-content-heading-three">โลโก้ BIS Scheme X</h3>

      <p className="service-left-content-paragraph">
        เครื่องหมายมาตรฐาน BIS ของ Scheme X
        เป็นเครื่องหมายคุณภาพและหลักการของความเชื่อมั่น โลโก้ประกอบด้วย:
      </p>

      <PointsListWithoutHeading
        points={[
          "หมายเลขมาตรฐานแสดงในส่วนบนของโลโก้; และ",
          "หมายเลขใบอนุญาตแสดงในส่วนล่างของโลโก้ในรูปแบบ: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        เครื่องหมายนี้บ่งชี้ว่าผู้ผลิตได้รับใบอนุญาต BIS สำเร็จ
        มันให้สิทธิ์ผู้ผลิตในการวางเครื่องหมาย BIS
        และรับประกันผู้บริโภคว่าผลิตภัณฑ์เป็นของแท้และปลอดภัย
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="โลโก้ BIS Scheme X"
          title="การรับรอง BIS Scheme X"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h3 className="service-left-content-heading-three">ผลกระทบทางกฎหมาย</h3>

      <p className="service-left-content-paragraph">
        เครื่องหมายมาตรฐาน BIS เป็นเครื่องหมายของความเชื่อมั่นและคุณภาพ
        เครื่องหมายนี้มีให้หลังจากสัญญาที่ถูกต้องมีผลบังคับใช้เท่านั้น
        สัญญาที่ถูกต้องเท่านั้นที่อนุญาตให้เจ้าของใช้เครื่องหมาย
        การใช้เครื่องหมายโดยไม่มีสัญญาที่ถูกต้องเป็นความผิดตามรัฐธรรมนูญอินเดียและเท่ากับการมีเครื่องหมายทางกฎหมาย
        เจ้าของเครื่องหมายถูกจำกัดอย่างหนักสำหรับการใช้ใบอนุญาต CM/L-XXXXXXXXXX
        สำหรับผลิตภัณฑ์ที่ไม่มีรับรอง BIS
      </p>

      <p className="service-left-content-paragraph">
        มันตามมาว่าผู้ผลิตทุกคนมีหน้าที่:
      </p>

      <PointsListWithoutHeading
        points={[
          "รับใบอนุญาต BIS ที่ถูกต้องภายใต้ Scheme X",
          "ปฏิบัติตามข้อกำหนดที่เกี่ยวข้องของมาตรฐานอินเดีย; และ",
          "ติดผลิตภัณฑ์ด้วยโลโก้ BIS ที่อนุมัติอย่างเหมาะสม",
        ]}
      />

      <p className="service-left-content-paragraph">
        กรอบกฎระเบียบนี้ขยายเพื่อปกป้องผลประโยชน์ของผู้บริโภคและนักธุรกิจ
        ส่งเสริมตลาดที่เน้นความปลอดภัย ความโปร่งใส และความเชื่อมั่น
      </p>

      <h2 className="service-left-content-heading-three">
        ความแตกต่างหลักระหว่าง Scheme-I และ Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "รวมหมวดหมู่สินค้าอุปโภคบริโภคที่กว้างกว่า เช่น อิเล็กทรอนิกส์ เครื่องใช้ในบ้าน และแม้แต่ผลิตภัณฑ์อุตสาหกรรม",
          "ผลิตภัณฑ์ที่ออกใบรับรองภายใต้แผนการนี้ต้องมีเครื่องหมายมาตรฐาน ISI",
          "เกี่ยวข้องกับทั้งผู้ผลิตในประเทศและต่างชาติ",
          "เกี่ยวข้องกับการตรวจสอบโรงงานและการทดสอบตัวอย่างเพื่อกำหนดคุณภาพและการปฏิบัติตามมาตรฐานอินเดีย",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "จัดการกับผลิตภัณฑ์วิศวกรรมอุตสาหกรรมและความปลอดภัยที่เสี่ยงสูง ซึ่งรวมถึงอุปกรณ์ไฟฟ้า เครื่องจักร และระบบอุตสาหกรรมที่สำคัญ",
          "การรับรองมีความเข้มงวดมากกว่า Scheme-I มันเกี่ยวข้องกับรายงานทางเทคนิคขั้นสูง การตรวจสอบการปฏิบัติตาม และการตรวจสอบการรับรองที่กว้างขวาง",
          "Scheme-X มักมีราคาแพงกว่า Scheme-I เนื่องจากเอกสารการปฏิบัติตามเพิ่มเติม",
          "ธุรกิจใดๆ ที่จัดการกับอุปกรณ์ไฟฟ้าหรือเครื่องจักรอุตสาหกรรมถูกบังคับให้รับการรับรองภายใต้ Scheme-X",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                คุณสมบัติ
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                เครื่องหมาย ISI
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                จัดการโดย
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS ของอินเดีย
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS ของอินเดีย
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                ประเภทการรับรอง
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ใบอนุญาต BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ใบรับรอง BIS / ใบอนุญาต BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                ผลิตภัณฑ์เป้าหมาย
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                สินค้าอุปโภคบริโภค
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                เครื่องจักรและอุปกรณ์ไฟฟ้า
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                เครื่องหมายที่ใช้
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                เครื่องหมาย ISI
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                เครื่องหมายมาตรฐาน BIS (ภายใต้ Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                ระดับการปฏิบัติตาม
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                การปฏิบัติตามมาตรฐานอินเดีย
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                การปฏิบัติตามทางเทคนิคและความปลอดภัยขั้นสูง
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        ผลิตภัณฑ์ที่ครอบคลุมโดย Scheme-X
      </h3>

      <p className="service-left-content-paragraph">
        Scheme-X
        ครอบคลุมผลิตภัณฑ์ที่มีความเสี่ยงสูงสุดต่อความปลอดภัยและประสิทธิภาพ
        รวมถึง:
      </p>

      <PointsListWithoutHeading
        points={[
          "อุปกรณ์ไฟฟ้า: หม้อแปลงอุตสาหกรรม หน่วยจ่ายพลังงาน และคล้ายกัน สวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำ บวกอุปกรณ์แรงดันสูงอื่นๆ",
          "เครื่องจักรหนัก: เครื่องกดไฮดรอลิก เครนอุตสาหกรรม เครื่องมืออัตโนมัติ และอุปกรณ์เฉพาะสำหรับอุตสาหกรรมขนาดใหญ่",
          "อุปกรณ์ที่สำคัญต่อชีวิต: เครื่องดับเพลิง ภาชนะรับแรงดัน ระบบไฟฟ้าฉุกเฉิน และอุปกรณ์และระบบอื่นๆ สำหรับความปลอดภัยชีวิต",
          "อิเล็กทรอนิกส์ผู้บริโภคและอุตสาหกรรมเฉพาะ: เครื่องใช้ไฟฟ้าเกรดการแพทย์และอุปกรณ์ที่รวมมาตรการป้องกันขั้นสูง",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                ลำดับที่
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                คำอธิบายของเครื่องจักรและอุปกรณ์ไฟฟ้า
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                รหัส HS
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
                  to="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของปั๊มสำหรับการจัดการของเหลว ลิฟต์ของเหลว และ (หรือ)
                  การประกอบ/ส่วนย่อย/ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 and
                841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-compressors"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของคอมเพรสเซอร์ และ (หรือ) การประกอบ/ส่วนย่อย
                  /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                and 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-heat-treatment-equipment"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรสำหรับการบำบัดวัสดุโดยกระบวนการ
                  ที่เกี่ยวข้องกับการเปลี่ยนแปลงอุณหภูมิ และ (หรือ) การประกอบ
                  /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 and
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเซนทริฟูจ
                  เครื่องกรองหรือเครื่องทำให้บริสุทธิ์สำหรับ ของเหลวและก๊าซ และ
                  (หรือ) การประกอบ /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 and 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-packing-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรสำหรับการบรรจุ การปิดผนึก การติดฉลาก
                  ขวด การบรรจุหรือห่อ และ (หรือ) การประกอบ/ส่วนย่อย/ส่วนประกอบ
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 and 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-cranes"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครน และ (หรือ) การประกอบ
                  /ส่วนย่อย/ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                and 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-construction-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรสำหรับการก่อสร้าง การขุดดิน การขุด และ
                  (หรือ) การประกอบ /ส่วนย่อย/ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 and 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-weaving-machines-looms"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องทอ (looms) และ (หรือ) การประกอบ/ส่วนย่อย /
                  ส่วนประกอบ
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 and 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-embroidery-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรสำหรับการปักลาย และ (หรือ) การประกอบ
                  /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 and 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องมือตัดโลหะที่ครอบคลุมภายใต้ หัวข้อ 8456 ถึง
                  8461 และ (หรือ) การประกอบ /ส่วนย่อย/ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 and 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องมือสำหรับการทำงานหิน เซรามิก, คอนกรีต
                  อะสเบสตัสซีเมนต์ หรือแก้วแร่คล้ายกัน และ (หรือ) การประกอบ
                  /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 and 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรสำหรับการทำงานยางและพลาสติก และ (หรือ)
                  การประกอบ /ส่วนย่อย /ส่วนประกอบของพวกเขา
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
                  to="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรรวมถึงเครื่องจักรสำหรับงานสาธารณะและ
                  อาคารและเครื่องจักรและเครื่องใช้ทางกลที่มี ฟังก์ชันเดี่ยว
                  ไม่ระบุหรือรวมที่อื่นใน บทที่ 84 และ (หรือ) การประกอบ/ส่วนย่อย
                  /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 and 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเฟืองและเกียร์ ล้อฟัน โซ่สปร็อกเก็ต,
                  องค์ประกอบการส่งกำลังลูกบอลหรือสกรูโรลเลอร์ เกียร์บ็อกซ์และ
                  ตัวเปลี่ยนความเร็ว รวมถึงตัวแปลงแรงบิด และ (หรือ) การประกอบ
                  /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 and 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-rotary-electrical-machines"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องจักรไฟฟ้าหมุนเวียนเช่นเครื่องกำเนิด ฯลฯ และ
                  (หรือ) การประกอบ /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-diesel-generators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของเครื่องกำเนิดดีเซล และ (หรือ) การประกอบ /ส่วนย่อย
                  /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-transformers"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของหม้อแปลง และ (หรือ) การประกอบ /ส่วนย่อย
                  /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 and
                850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-power-semiconductor-converters"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของตัวแปลงเซมิคอนดักเตอร์กำลัง และ (หรือ) การประกอบ
                  /ส่วนย่อย /ส่วนประกอบของพวกเขา
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
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของสวิตช์เกียร์และอุปกรณ์ควบคุมที่ทำงานที่
                  แรงดันไม่เกิน 1000 โวลต์ และ (หรือ) การประกอบ /ส่วนย่อย
                  /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 and 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  ทุกประเภทของสวิตช์เกียร์และอุปกรณ์ควบคุมที่ทำงานที่ แรงดันเกิน
                  1000 โวลต์ และ (หรือ) การประกอบ /ส่วนย่อย /ส่วนประกอบของพวกเขา
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 and 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            มาตรฐานความปลอดภัยตามผลิตภัณฑ์
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            คำอธิบายของเครื่องจักรและอุปกรณ์ไฟฟ้า
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
            ดาวน์โหลด PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        มาตรฐานความปลอดภัยภายใต้ BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        มากกว่าเพียงความจำเป็นทางกฎหมาย การรับรอง BIS Scheme - X
        ให้คำมั่นสัญญาด้านความปลอดภัย คุณภาพ และความน่าเชื่อถือ การรับรองนี้
        ซึ่งเกี่ยวข้องกับการยึดติดอย่างเข้มงวดกับบรรทัดฐานแห่งชาติและนานาชาติ
        ทำให้มั่นใจว่าเครื่องจักรและเครื่องมือไฟฟ้าที่นำเสนอให้ผู้ใช้ปลอดภัย
        เป็นมิตรกับสิ่งแวดล้อม และมีเสียงทางเทคนิค
      </p>

      <p className="service-left-content-paragraph">
        เพื่อรับรองภายใต้ Scheme - X
        ผู้ผลิตจำเป็นต้องปฏิบัติตามส่วนประกอบความปลอดภัยหลักต่อไปนี้:
      </p>

      <PointsListWithoutHeading
        points={[
          "ความปลอดภัยทางไฟฟ้า: การปฏิบัติตามมาตรฐาน IEC และอินเดียที่ใช้ การรับรองป้องกันการลัดวงจร การช็อกไฟฟ้า การทะลุฉนวน การสูญเสียพื้นดินป้องกัน การจุดติดของวัสดุติดไฟรอบข้าง และไฟ",
          "ความปลอดภัยทางกลไก: การประเมินความสมบูรณ์โครงสร้างของเครื่องจักรและความสมบูรณ์ของชิ้นส่วนเคลื่อนไหวและวัสดุใหม่ ทำให้มั่นใจว่าอุปกรณ์ถูกสัมผัสกับความเครียดทางกล การสึกหรอ และอันตรายจากการทำงานอย่างปลอดภัย",
          "ความปลอดภัยจากไฟ: การใช้วัสดุที่ออกแบบและก่อสร้างด้วยวัสดุทนไฟ การปฏิบัติตามมาตรฐานสำหรับประสิทธิภาพการแพร่กระจายเปลวไฟเพื่อควบคุมความเสี่ยงที่เกี่ยวข้องกับไฟ",
          "การปฏิบัติตามสิ่งแวดล้อม: การใช้พลังงานที่ควบคุมและวัสดุที่เป็นมิตรกับสิ่งแวดล้อมในการผลิตอุปกรณ์ สนับสนุนให้ผู้ผลิตลดผลกระทบต่อสิ่งแวดล้อมของอุปกรณ์ของพวกเขา",
          "การจัดการคุณภาพ: การควบคุมที่โดดเด่นและอิสระบนกระบวนการผลิตเพื่อรักษามาตรฐานและบรรทัดฐานที่กำหนดไว้ มุ่งเน้นที่การกำกับสภาพโรงงาน รวมถึงการตรวจสอบกระบวนการ และการยึดติดต่อเนื่อง",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        มาตรฐานกฎระเบียบภายใต้ Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        ผู้ผลิตจำเป็นต้องปฏิบัติตามมาตรฐานอินเดียที่เกี่ยวข้องซึ่งสอดคล้องกับมาตรฐานสากล
        รวมถึง:
      </p>

      <h3 className="service-left-content-heading-three">มาตรฐานประเภท A:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – ความปลอดภัยของเครื่องจักร: หลักการทั่วไปสำหรับการออกแบบ การประเมินความเสี่ยง และการลดความเสี่ยง",
        ]}
      />

      <h3 className="service-left-content-heading-three">มาตรฐานประเภท B:</h3>

      <PointsListWithoutHeading
        points={[
          "อธิบายในตารางที่สองของคำสั่งกฎระเบียบทางเทคนิคแบบครอบคลุม (OTR) 2024",
        ]}
      />

      <h3 className="service-left-content-heading-three">มาตรฐานประเภท C:</h3>

      <PointsListWithoutHeading
        points={["อธิบายในตารางที่สามของคำสั่ง OTR 2024"]}
      />

      <h3 className="service-left-content-heading-three">ชุด IS/IEC 60947:</h3>

      <PointsListWithoutHeading
        points={[
          "ครอบคลุมสวิตช์เกียร์และอุปกรณ์ควบคุมแรงดันต่ำในส่วนและมาตราเหล่านี้",
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
