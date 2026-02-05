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
import BISImage from "../../assets/images/BIS.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXIndonesian = () => {
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
      <FooterIndonesian />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXIndonesian;

const SchemeXMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sertifikasi BIS India di bawah Skema-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        Sertifikasi Skema X BIS | Keselamatan Mesin & Peralatan Listrik
      </title>
      <meta
        name="description"
        content="Sertifikasi Skema X BIS diperlukan untuk memastikan kualitas dan keselamatan sakelar tegangan rendah, peralatan kontrol, mesin, dan peralatan listrik."
      />
      <meta
        name="keywords"
        content="Skema X, Skema X BIS, Sertifikasi Skema X BIS, Sertifikasi Skema X, sertifikasi mesin, sertifikasi peralatan listrik"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Sertifikasi Skema X BIS | Keselamatan Mesin & Peralatan Listrik"
      />
      <meta
        property="og:description"
        content="Sertifikasi Skema X BIS diperlukan untuk memastikan kualitas dan keselamatan sakelar tegangan rendah, peralatan kontrol, mesin, dan peralatan listrik."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Sertifikasi Skema X BIS | Keselamatan Mesin & Peralatan Listrik"
      />
      <meta
        name="twitter:description"
        content="Sertifikasi Skema X BIS diperlukan untuk memastikan kualitas dan keselamatan sakelar tegangan rendah, peralatan kontrol, mesin, dan peralatan listrik."
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
                  <Link to="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  Sertifikasi BIS India di bawah Skema-X
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
              Keahlian Bersertifikat
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Sertifikasi Skema X BIS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Sertifikasi Skema X BIS mencakup Mesin, Peralatan Listrik, dan
            Rakitan Komponen, serta Sub-rakitan di bawah Peraturan Teknis
            Omnibus (OTR).
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
                Lihat Layanan
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
    if (path.includes("/id/sertifikasi-bis-india-di-bawah-skema-x"))
      return "Scheme X Indonesian";
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
        title: "Silakan masukkan nama lengkap yang valid.",
        description: "Nama hanya boleh berisi huruf dan spasi.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Silakan masukkan alamat email yang valid.",
        description: "Periksa apakah format email Anda benar",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Silakan masukkan nomor telepon yang valid",
        description: "Nomor telepon harus (8-15 digit)",
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
        title: "Formulir kontak berhasil dikirim!",
        description:
          "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.",
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
      const errorMessage = error.response?.data?.message || "Ada yang salah";
      toast({
        variant: "destructive",
        title: errorMessage || "Gagal mengirim detail formulir kontak!",
        description:
          "Ada yang salah. Silakan periksa detail Anda dan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Hubungi Kami
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Pesan Janji Temu
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Ingin menghubungi tim kami dan menjadwalkan panggilan?
        <span className="text-black"> Coba Sekarang</span>
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
            placeholder="Nama Lengkap *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Alamat Email *"
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
            placeholder="Nomor Kontak *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nama Perusahaan *"
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
            placeholder="Nama Produk *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Sertifikasi yang Diperlukan*"
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
              <span>Mengirim</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Pesan Janji Temu</span>
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
    overview: "Gambaran Umum",
    process: "Proses",
    documents: "Dokumen",
    conclusion: "Kesimpulan",
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
          <ServicesRightSideContentIndonesian />
        </div>
      </div>
      <SchemeXServiceFaq />
      <SchemeXProductTable />
      <LanguageSelector />
      <div id="services">
        <Services />
      </div>
    </div>
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
      path: "/indian-bis-certification-under-scheme-x",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/yin-du-bis-fang-an-x-ren-zheng",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/indische-bis-zertifizierung-nach-schema-x",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/indiaas-bis-certificaat-volgens-schema-x",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/indo-no-bis-nintei-sukimu-x",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-injeung-scheme-x-haenghaeng",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-indienne-selon-schema-x",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/certificacion-bis-india-bajo-esquema-x",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-prathiap-india-taem-dai-tae-skema-x",
    },
    // {
    //   code: "id",
    //   name: "Indonesian",
    //   flag: "https://flagcdn.com/w320/id.png",
    //   path: "/id/sertifikasi-bis-india-di-bawah-skema-x",
    // },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-indiana-secondo-schema-x",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/shahadat-bis-alhind-tahata-almukhatat-x",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-an-do-theo-scheme-x",
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

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Layanan Kami
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Konsultan Sertifikat Terbaik di India
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
              Tanda BIS (Lisensi ISI) untuk Produsen Asing
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
              Sertifikasi Registrasi CDSCO
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
              Registrasi BIS (CRS)
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
              Pengelolaan Limbah Plastik
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
              Sertifikasi Sertifikat EPR
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
              Sertifikasi Sertifikat LMPC
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
              Sertifikat Registrasi BIS
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
              TANDA ISI (BIS) untuk Produsen India
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
            Standar Keselamatan Berdasarkan Produk
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Deskripsi Mesin dan Peralatan Listrik
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"Cari berdasarkan deskripsi atau kode HS..."}
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
    description: "Semua jenis Pompa untuk menangani cairan, elevator cairan",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 dan 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "Semua jenis kompresor",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 dan 84149090",
    indianStandard:
      "Klausul 16 dari IS 17093:2019\nKlausul 6.6 dari IS 12258:1987",
    title:
      "Kondisi pasokan teknis untuk kompresor udara bolak-balik untuk aplikasi umum dan industri\nKondisi pasokan teknis untuk kompresor sekrup udara (banjir minyak) untuk aplikasi umum dan industri",
  },
  {
    id: 3,
    description:
      "Semua jenis mesin untuk Pengolahan bahan dengan proses yang melibatkan Perubahan suhu",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 dan 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "atau mesin pemurnian untuk cairan dan gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 dan 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "Semua jenis mesin untuk mengisi, menutup, menyegel, memberi label botol, mengemas atau membungkus",
    hsCode: "842220, 842230, 842240 dan 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "Semua jenis derek",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 dan 84269990",
    indianStandard:
      "Klausul 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 dan 66.6 dari IS 3177:2020\nKlausul 8.1, 8.2, 8.3 & 45 dari IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Derek Perjalanan Overhead Listrik dan Derek Gantri untuk semua Aplikasi Kode Praktik\nSpesifikasi Derek Bergerak yang Didorong Daya\nDerek - Persyaratan keselamatan untuk derek pemuat",
  },
  {
    id: 7,
    description: "Semua jenis mesin untuk konstruksi",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Bagian 7): 2020\nIS 17055 (Bagian 8): 2020\nIS 17055 (Bagian 12): 2020",
    title:
      "Mesin Penggerak Tanah Keselamatan Bagian 7 Pengikis\nMesin Penggerak Tanah Persyaratan Untuk Grader\nMesin Penggerak Tanah Keselamatan Bagian 12 Pengeruk Jalan",
  },
  {
    id: 8,
    description: "Semua jenis mesin tenun (loom)",
    hsCode: "8446, 844811, 844819, 844842 dan 844849",
    indianStandard: "IS 17361 (Bagian 6) : 2020 / ISO 11111 (Bagian 6) : 2005",
    title:
      "Persyaratan Keselamatan Mesin Tekstil Bagian 6 Mesin Pembuatan Kain",
  },
  {
    id: 9,
    description: "Semua jenis mesin untuk membuat bordir.",
    hsCode: "84479020 dan 844859",
    indianStandard: "IS 17361 (Bagian 1): 2020 / ISO 11111 (Bagian 1) : 2016",
    title: "Persyaratan Keselamatan Mesin Tekstil Bagian 1 Persyaratan Umum",
  },
  {
    id: 10,
    description: "Semua jenis mesin pemotong logam",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 dan 846693",
    indianStandard:
      "IS 17277 (Bagian 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Bagian 1): 2019\nISO 16090-1 : 2017",
    title:
      "Keselamatan Mesin Alat Bagian 1 Persyaratan Keselamatan Umum\nKeselamatan Mesin Alat Mesin Pelepasan Listrik\nKeselamatan Mesin Alat Mesin Pembubutan\nKeselamatan Mesin Alat Mesin Gergaji untuk Logam Dingin\nKeselamatan Mesin Alat Pusat Mesin, Mesin Penggilingan, Mesin Transfer Bagian 1 Persyaratan Keselamatan",
  },
  {
    id: 11,
    description:
      "Semua jenis alat mesin untuk bekerja batu, keramik, beton, semen asbes atau seperti mineral kaca",
    hsCode: "8464 dan 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "Semua jenis mesin untuk bekerja karet dan plastik",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Mesin Karet dan Plastik-Mesin Cetak Injeksi-Persyaratan Keselamatan",
  },
  {
    id: 13,
    description:
      "Semua jenis mesin termasuk mesin untuk pekerjaan umum & Bangunan dan mesin & peralatan mekanik yang memiliki fungsi individu, tidak ditentukan",
    hsCode: "84791000, 84798999 dan 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "Semua jenis roda gigi dan roda gigi, roda bergigi, sproket rantai, elemen transmisi sekrup bola atau rol, kotak gigi dan pengubah kecepatan, termasuk konverter torsi Dan (atau) rakitan /sub-rakitan /komponennya",
    hsCode: "84834000 dan 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "Semua jenis mesin listrik putar seperti Generator, dll. Bangunan dan mesin & peralatan mekanik yang memiliki fungsi individu, tidak ditentukan",
    hsCode: "8501 dan 8503",
    indianStandard:
      "Klausul 4.7, 4.8 dan 4.12 dari bagian 2,\nklausul 7.4 dari Bagian 3, klausul 8.6 dari Bagian 4,\nKlausul 9.4 dari bagian 5 dari IS 5422:1996\nKlausul 11, 21, 22, 23, 25 dan 26 dari IS 13364\n(Bagian 1): 1992\nKlausul 11, 21, 22 23 25 dan 26 dari IS 13364\n(Bagian 2): 1992",
    title:
      "Generasi jenis turbin\nGenerator Ac yang digerakkan oleh mesin pembakaran internal bolak-balik - Spesifikasi: Bagian 1\nalternator dengan peringkat hingga 20 kVa\nGenerator Ac yang digerakkan oleh mesin pembakaran internal bolak-balik - Spesifikasi: Bagian 2\nalternator dengan peringkat di atas 20 kVa dan hingga 1250 kVa",
  },
  {
    id: 16,
    description: "Semua jenis Generator Diesel",
    hsCode: "8502 dan 8503",
    indianStandard:
      "Klausul 5,6,7,8, 9 & 10 dari IS/ISO 8528 (Bagian 2) : 2018\nKlausul 6 & 10 dari IS/ISO 8528 (Bagian 3)\nKlausul 4, 5.5, 7.3.5, 7.3.7 & 7.4 dari IS/ISO 8528 (Bagian 4): 2005\nKlausul 12, 13, 14, 15 dari IS/ISO 8528-5: 2018\nKlausul 6.4 dari IS/ISO 8528 (Bagian 8): 2016\nKlausul 9.1 dari IS/ISO 8528 (Bagian 12): 1997",
    title:
      "Set Pembangkit Arus Bolak-Balik yang Digerakkan Mesin Pembakaran Internal Bolak-Balik : Bagian 2 Mesin\nSet pembangkit arus bolak-balik yang digerakkan mesin pembakaran internal bolak-balik: Bagian 3 generator arus bolak-balik untuk set pembangkit\nSet pembangkit arus bolak-balik yang digerakkan mesin pembakaran internal bolak-balik: Bagian 4 peralatan kontrol dan switchgear\nSet Pembangkit Arus Bolak-Balik yang Digerakkan Mesin Pembakaran Internal Bolak-Balik Bagian 5 Set Pembangkit\nSet pembangkit arus bolak-balik yang digerakkan mesin pembakaran internal bolak-balik: Bagian 8\nSet pembangkit arus bolak-balik yang digerakkan mesin pembakaran internal bolak-balik: Bagian 12 pasokan daya darurat untuk keselamatan",
  },
  {
    id: 17,
    description: "Semua jenis Transformator",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 dan 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nKlausul 5.6 & Kl 10 dari IS 2026 (Bagian 1)\nKlausul 7.5, 7.6, 7.7 dari IS 2026 (Bagian 6)",
    title:
      "Keselamatan Transformator, Reaktor, Unit Catu Daya dan Produk Serupa untuk Tegangan Pasokan hingga 1100 V Bagian 2-4: Persyaratan dan Pengujian Khusus untuk Transformator Isolasi dan Unit Catu Daya yang Menggabungkan\nKeselamatan transformator daya, unit catu daya dan serupa: Bagian 2 persyaratan khusus: Sek 6 transformator isolasi keselamatan untuk penggunaan umum\nKeselamatan transformator daya, catu daya reaktor dan produk serupa: Bagian 2-7 persyaratan dan pengujian khusus untuk transformator dan catu daya untuk mainan\nTransformator daya: Bagian 1 umum\nTransformator daya: Bagian 6 reaktor",
  },
  {
    id: 18,
    description: "Semua jenis Konverter Semikonduktor Daya",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Klausul 7 dari Konverter Semikonduktor Bagian 1 Persyaratan Umum dan Konverter Komutasi Jalur Bagian 1 Spesifikasi persyaratan dasar",
  },
  {
    id: 19,
    description:
      "Semua jenis peralatan switch gear dan control gear yang beroperasi pada tegangan tidak melebihi 1000 volt dan (atau) rakitannya /sub-rakitan /komponennya",
    hsCode: "8536, 8537 dan 8538",
    indianStandard: "Klausul 8 dari IS/IEC 61439 (Bagian 3): 2012",
    title:
      "Rakit switchgear dan controlgear Tegangan Rendah: Bagian 3 papan distribusi yang dimaksudkan untuk dioperasikan oleh orang biasa (DBO)",
  },
  {
    id: 20,
    description:
      "Semua jenis peralatan switch gear dan control gear yang beroperasi pada tegangan melebihi 1000 volt dan (atau) rakitannya /sub-rakitan /komponennya",
    hsCode: "8535, 8537 dan 8538",
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
        TIPE C (Standar Keselamatan Mesin yang membahas persyaratan keselamatan
        rinci untuk mesin tertentu atau kelompok mesin)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Deskripsi Mesin dan Peralatan Listrik
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Kode HS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Standar India/Klausul Spesifik dari Standar India
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Judul Standar India
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
                  Tidak ada hasil ditemukan untuk &quot;{searchQuery}&quot;
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
      "Keselamatan Mesin Peralatan Listrik Mesin Bagian 1 Persyaratan Umum",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Keselamatan Mesin - Peralatan Listrik Mesin Bagian 11 Persyaratan untuk Peralatan untuk Tegangan di atas 1 000 V AC atau 1 500 V DC dan tidak Melebihi 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "Keselamatan Fungsional Sistem Keamanan Elektronik-Programmable Elektronik yang Terkait Keselamatan Bagian 1- Persyaratan Umum",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Derajat Perlindungan yang Disediakan oleh Penutup (Kode IP)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 1: Pemilihan metode pengujian",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Keselamatan Mesin Evaluasi Emisi Zat Berbahaya di Udara Bagian 2 Metode Gas Pelacak untuk Pengukuran Tingkat Emisi Polutan Tertentu",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 3: Metode bangku pengujian untuk pengukuran tingkat emisi polutan tertentu",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 4: Metode pelacak untuk pengukuran efisiensi tangkapan sistem pembuangan",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 5: Metode bangku pengujian untuk pengukuran efisiensi pemisahan berdasarkan massa sistem pembersih udara dengan outlet tidak berpipa",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 6 : Metode bangku pengujian untuk pengukuran efisiensi pemisahan berdasarkan massa sistem pembersih udara dengan outlet berpipa",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 7: Metode bangku pengujian untuk pengukuran parameter konsentrasi polutan",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 8: Metode ruangan untuk pengukuran parameter konsentrasi polutan",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Keselamatan mesin - Evaluasi emisi zat berbahaya di udara - Bagian 9: Indeks dekontaminasi",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Daya Fluida Hidraulik- Aturan Umum dan Persyaratan Keselamatan untuk Sistem dan komponennya",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Daya Fluida Pneumatik- Aturan Umum dan Persyaratan Keselamatan untuk Sistem dan komponennya",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "Mesin Penggerak Tanah - Penjaga - Definisi dan Persyaratan",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Keselamatan Mesin-Keselamatan Fungsional Sistem Kontrol Elektronik, Elektronik dan Programmable yang Terkait Keselamatan",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Keselamatan Mesin - Peralatan Pelindung Sensitif Elektro Bagian 2 Persyaratan Khusus untuk Peralatan yang Menggunakan Perangkat Pelindung Opto-Elektronik Aktif AOPD",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Keselamatan Mesin- Indikasi Penandaan dan Aktuasi Bagian 3 Persyaratan untuk Lokasi dan Operasi Aktuator",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Keselamatan Mesin-Peralatan Listrik Mesin Bagian 32 Persyaratan untuk Mesin Pengangkat",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Keselamatan Mesin - Indikasi Penandaan dan Aktuasi Bagian 1 Persyaratan untuk Sinyal Visual Akustik dan Taktil",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Keselamatan Mesin - Peralatan Pelindung Sensitif Elektro Bagian 1 Persyaratan Umum dan Pengujian",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Keselamatan Mesin Pedoman untuk Penggunaan Sistem Komunikasi dalam Aplikasi yang Terkait Keselamatan",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Keselamatan Mesin - Indikasi Penandaan dan Aktuasi Bagian 2 Persyaratan untuk Penandaan",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "Keselamatan Mesin Pencegahan Kebakaran dan Perlindungan Kebakaran",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title: "Keselamatan Mesin Persyaratan Kebersihan untuk Desain Mesin",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Keselamatan Mesin Sarana Akses Permanen ke Mesin Bagian 1 Pilihan Sarana Tetap dan Persyaratan Umum Akses",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Keselamatan Mesin Sarana Akses Permanen ke Mesin Bagian 2 Platform Kerja dan Jalur Pejalan Kaki",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Keselamatan Mesin Sarana Akses Permanen ke Mesin Bagian 3 Tangga Tangga Langkah dan Rel Pengaman",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Keselamatan Mesin Sarana Akses Permanen ke Mesin Bagian 4 Tangga Tetap",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Keselamatan Mesin Bagian yang Terkait Keselamatan dari Sistem Kontrol Bagian 1 Prinsip Umum untuk Desain",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Keselamatan Mesin Bagian yang Terkait Keselamatan dari Sistem Kontrol Bagian 2 Validasi",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Keselamatan Mesin Penjaga Persyaratan Umum untuk Desain dan Konstruksi Penjaga Tetap dan Bergerak",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Keselamatan Mesin Perangkat Pengunci yang Terkait dengan Penjaga Prinsip untuk Desain dan Pemilihan",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Keselamatan Mesin Pencegahan Mulai yang Tidak Terduga",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Keselamatan Mesin Jarak Keselamatan untuk Mencegah Zona Bahaya Dicapai oleh Anggota Badan Atas dan Bawah",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Keselamatan Mesin Penempatan Pengaman Sehubungan dengan Kecepatan Pendekatan Bagian Tubuh Manusia",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Keselamatan Mesin Celah Minimum untuk Menghindari Penghancuran Bagian Tubuh Manusia",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Keselamatan Mesin Perangkat Kontrol Dua Tangan Prinsip untuk Desain dan Pemilihan",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "Keselamatan Mesin Fungsi Berhenti Darurat Prinsip untuk Desain",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Keselamatan Mesin Pelumas dengan Kontak Produk Insidental -- Persyaratan Kebersihan",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Keselamatan mesin - Pengurangan risiko terhadap kesehatan akibat zat berbahaya yang dipancarkan oleh mesin - Bagian 1: Prinsip dan spesifikasi untuk produsen mesin",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Keselamatan mesin - Pengurangan risiko terhadap kesehatan akibat zat berbahaya yang dipancarkan oleh mesin - Bagian 2: Metodologi yang mengarah pada prosedur verifikasi",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Keselamatan mesin - Perangkat pelindung sensitif tekanan - Bagian 1: Prinsip umum untuk desain dan pengujian tikar sensitif tekanan dan lantai sensitif tekanan",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Keselamatan mesin - Perangkat pelindung sensitif tekanan - Bagian 2: Prinsip umum untuk desain dan pengujian tepi sensitif tekanan dan batang sensitif tekanan",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Keselamatan mesin - Perangkat pelindung sensitif tekanan - Bagian 3: Prinsip umum untuk desain dan pengujian bumper sensitif tekanan, pelat, kawat dan perangkat serupa.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title: "Ergonomi- Sistem Sinyal Bahaya Auditori dan Visual serta Informasi",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "Persyaratan Ergonomi untuk Desain Tampilan dan Aktuator Kontrol Bagian 2 Tampilan",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "Persyaratan Ergonomi untuk Desain Tampilan dan Aktuator Kontrol Bagian 3 Aktuator Kontrol",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Keselamatan Mesin - Persyaratan Antropometri untuk Desain Stasiun Kerja di Mesin",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomi - Manikin Komputer dan Templat Tubuh Bagian 1 Persyaratan Umum",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomi - Sistem sinyal bahaya auditori dan visual serta informasi",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Sistem Otomatisasi Industri - Keselamatan Sistem Manufaktur Terintegrasi - Persyaratan Dasar",
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
        TIPE B (Standar Keselamatan Generik yang membahas satu aspek keselamatan
        atau lebih dari satu jenis pengaman yang dapat digunakan di berbagai
        jenis mesin)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                No.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Nomor IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Judul
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
                  Tidak ada hasil ditemukan untuk &quot;{searchQuery}&quot;
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
              Sebelumnya
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              Halaman {currentPage} dari {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Selanjutnya
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
      question: "1. Apa itu Skema X di bawah sertifikasi BIS?",
      answer:
        "Skema X adalah skema penilaian kesesuaian yang diperkenalkan oleh BIS India untuk mesin dan peralatan listrik. Ini memastikan kepatuhan dengan standar keselamatan dan teknis yang ketat seperti yang ditentukan dalam Peraturan Teknis Omnibus.",
    },
    {
      question: "2. Apakah Skema X berbeda dari sertifikasi tanda ISI?",
      answer:
        "Ya. Tanda ISI umumnya untuk barang konsumen dan kepatuhan produk dasar, sementara Skema X berlaku untuk produk kelas industri dan kompleks yang memerlukan pengujian dan sertifikasi lanjutan melalui sertifikat BIS atau lisensi BIS.",
    },
    {
      question: "3. Siapa yang perlu mengajukan sertifikasi Skema X?",
      answer:
        "Produsen dan importir mesin dan peralatan listrik yang tercantum di bawah Peraturan Teknis Omnibus harus mengajukan Skema X dan mendapatkan sertifikasi BIS yang valid untuk menjual atau mendistribusikan produk mereka secara legal di India. Produsen global atau produsen asing yang bermaksud menjual produk di India juga harus mematuhi peraturan ini.",
    },
    {
      question: "4. Berapa biaya sertifikasi BIS Skema X?",
      answer:
        "Biaya Skema X mencakup biaya aplikasi, biaya sertifikasi, biaya tinjauan file teknis, biaya inspeksi pabrik, dan biaya pengujian produk. Rata-rata, dimulai dari ₹2.000 untuk aplikasi dan bisa naik tergantung pada kompleksitas produk. Untuk detail lebih lanjut hubungi kami di info@sunconsultants.co.in.",
    },
    {
      question:
        "5. Berapa lama waktu yang dibutuhkan untuk mendapatkan lisensi BIS di bawah Skema X?",
      answer:
        "Waktu yang dibutuhkan bervariasi tergantung pada dokumentasi, persyaratan pengujian, dan inspeksi pabrik. Biasanya, dibutuhkan 4–6 minggu dari tanggal pendaftaran BIS yang berhasil dan pengajuan aplikasi untuk produsen India dan 60-90 hari untuk produsen asing.",
    },
    {
      question:
        "6. Apakah UMKM juga bisa mengajukan sertifikasi BIS di bawah Skema X?",
      answer:
        "Tentu saja. Bahkan, BIS India mendorong UMKM untuk mengajukan lisensi BIS atau sertifikat kesesuaian di bawah Skema X untuk meningkatkan kualitas, kepatuhan, dan daya saing di sektor industri.",
    },
    {
      question:
        "7. Apakah sertifikasi BIS di bawah Skema X wajib untuk ekspor?",
      answer:
        "Tidak. Produk yang diproduksi secara eksklusif untuk ekspor dikecualikan di bawah Peraturan Teknis Omnibus. Namun, produk yang dimaksudkan untuk pasar India harus disertifikasi di bawah Skema X.",
    },
    {
      question: "8. Berapa validitas lisensi BIS di bawah Skema X?",
      answer:
        "Lisensi BIS di bawah Skema X umumnya berlaku selama 3-6 tahun dan harus diperbarui sesuai. Pembaruan melibatkan pembayaran biaya sertifikasi BIS tahunan dan mungkin memerlukan evaluasi ulang tergantung pada perubahan ruang lingkup produk atau standar.",
    },
    {
      question: "9. Apakah produsen asing bisa mengajukan sertifikasi Skema X?",
      answer:
        "Ya, produsen asing bisa mengajukan sertifikasi Skema X melalui perwakilan India yang berwenang. BIS India memerlukan inspeksi pabrik, yang mungkin memakan waktu 3 hari untuk pelamar asing, beserta proses pendaftaran BIS standar dan pengujian.",
    },
    {
      question: "10. Apa itu File Teknis dan mengapa diperlukan?",
      answer:
        "File Teknis adalah dossier kepatuhan rinci yang diperlukan di bawah Skema X. Ini mencakup proses manufaktur, detail produk, laporan pengujian, dan dokumen kontrol kualitas. Ini mendukung kesesuaian produk dengan Standar India yang relevan selama proses sertifikasi BIS.",
    },
    {
      question:
        "11. Bagaimana Skema X terkait dengan Peraturan Teknis Omnibus?",
      answer:
        "Peraturan Teknis Omnibus mewajibkan penggunaan Skema X untuk kategori mesin dan peralatan listrik tertentu di India. Produk yang tercantum di bawah peraturan harus disertifikasi di bawah Skema X untuk mendapatkan sertifikat BIS atau lisensi BIS yang valid.",
    },
    {
      question: "12. Apakah sertifikat BIS di bawah Skema X bisa dicabut?",
      answer:
        "Ya. BIS India bisa menangguhkan atau membatalkan lisensi BIS atau sertifikat di bawah Skema X jika ditemukan ketidaksesuaian selama pengawasan atau jika produk gagal memenuhi Standar India yang diperlukan.",
    },
    {
      question:
        "13. Apa perbedaan antara lisensi BIS dan sertifikat BIS di bawah Skema X?",
      answer:
        "Lisensi BIS biasanya dikeluarkan untuk produsen India, sementara sertifikat kesesuaian BIS (CoC) sering dikeluarkan untuk produsen asing atau untuk kasus spesifik. Keduanya memiliki tujuan yang sama—memastikan kepatuhan produk di bawah Skema X.",
    },
    {
      question:
        "14. Apakah tanda ISI diizinkan untuk produk yang disertifikasi di bawah Skema X?",
      answer:
        "Tidak. Produk di bawah Skema X tidak membawa tanda ISI. Sebaliknya, mereka menampilkan tanda standar BIS yang relevan dengan skema sertifikasi, seperti yang diatur oleh BIS India.",
    },
    {
      question:
        "Bagaimana saya tahu jika mesin saya memerlukan sertifikasi Skema X?",
      answer:
        "Periksa daftar resmi dalam Peraturan Teknis Omnibus atau konsultasikan dengan konsultan BIS untuk memverifikasi apakah mesin Anda termasuk dalam persyaratan sertifikasi Skema X yang wajib.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Tidak menemukan jawaban yang Anda cari?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Hubungi kami!
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

        <ServiceAuthorIndonesian />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kesimpulan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Kesimpulan</h2>

      <p className="service-left-content-paragraph">
        Sertifikasi BIS Skema-X tetap vital dalam menjaga keselamatan,
        keandalan, dan kualitas sakelar tegangan rendah, peralatan kontrol,
        mesin, dan peralatan listrik. Untuk produsen alat mesin yang berlaku
        untuk memproses batu, keramik, beton, semen asbes dan kaca mineral,
        sertifikasi BIS Skema-X adalah wajib.
      </p>

      <p className="service-left-content-paragraph">
        Dengan memenuhi kewajiban ini, produsen menjamin kesesuaian produk,
        meningkatkan kepercayaan konsumen, serta meningkatkan kredibilitas
        mereka di pasar. Skema-X memastikan produksi berjalan lancar, standar
        keselamatan global terpenuhi, dan merek yang diakui mendapatkan reputasi
        positif.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Dokumen Utama yang Diperlukan untuk Sertifikasi BIS Skema X
      </h2>

      <p className="service-left-content-paragraph">
        Untuk menyederhanakan proses sertifikasi BIS, produsen diwajibkan untuk
        mengumpulkan dan mengajukan dokumen berikut selama fase pendaftaran:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                No. Urut
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Dokumen yang Diperlukan
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Detail
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Nama dan Alamat (Pabrik & Kantor)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nama hukum lengkap dan alamat fisik situs manufaktur dan kantor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Informasi PAN dan GST
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nomor Akun Permanen (PAN) dan detail registrasi GST
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Detail Kontak
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Alamat email, nomor ponsel, dan telepon rumah untuk komunikasi
                resmi
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Detail Manajemen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Nama, peran, dan ID eksekutif kunci dan penandatangan berwenang
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Deskripsi Produk
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Detail mesin dan peralatan yang dicakup di bawah Jadwal Pertama
                Peraturan Teknis Omnibus
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Klasifikasi Produk
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Jenis, model, dan variasi spesifik di mana lisensi BIS diminta
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                File teknis
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Semua detail teknis terkait produk dan detail tentang unit
                manufaktur.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Validitas dan Proses Pembaruan Sertifikat Skema-X:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Validitas Lisensi dan Pembaruan: Lisensi BIS di bawah Skema-X dikeluarkan untuk periode 3 hingga 6 tahun untuk produksi berkelanjutan. Setelah periode berakhir, lisensi dapat diperbarui untuk durasi yang sama dengan pengajuan aplikasi pembaruan, biaya yang diperlukan, dan dokumen kepatuhan.",
          "Sertifikat Kesesuaian (CoC): CoC dikeluarkan untuk Produksi satu kali, dan berlaku untuk produsen domestik maupun luar negeri. Karena hanya berlaku untuk satu batch, CoC tidak memiliki opsi pembaruan.",
          "Laporan Pengujian Produk: Ketika laporan pengujian disiapkan di laboratorium produsen, pejabat BIS memverifikasinya selama inspeksi pabrik dengan melakukan pengujian saksi. Jika pengujian dilakukan di fasilitas subkontrak, fasilitas tersebut juga diperiksa dan disetujui oleh BIS.",
          "Tinjauan Aplikasi Pembaruan: Untuk validitas tanpa gangguan, produsen diwajibkan untuk terus mematuhi ketentuan Skema-X. Sesuai Regulasi 8 dari Peraturan Penilaian Kesesuaian BIS, Biro Standar India memproses aplikasi pembaruan dalam bentuk VIII. Pembaruan dilakukan hanya setelah kepatuhan yang memuaskan diverifikasi.",
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
        <span className="service-left-content-index-heading">Proses</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Langkah-langkah untuk Mendapatkan Sertifikasi di bawah BIS Skema-X
      </h2>

      <p className="service-left-content-paragraph">
        Mengeluarkan Sertifikat BIS di bawah Skema-X adalah kegiatan sistematis
        yang dimaksudkan untuk memastikan produsen memiliki standar keselamatan,
        kualitas, dan kepatuhan yang berlaku terpenuhi. Prosesnya adalah sebagai
        berikut:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verifikasi Ruang Lingkup: Tentukan apakah produk Anda berada dalam ruang lingkup Skema-X dan apakah sesuai dengan persyaratan keselamatan BIS. Periksa Standar India yang relevan dan jadwal teknis untuk menentukan apakah Anda akan dapat mematuhi.",
          "Siapkan Dokumen yang Diperlukan: Produsen perlu mengumpulkan dan mengatur dokumen berikut: Sertifikat Bisnis Terdaftar, Dokumen dasar desain, Dokumen pabrik dan alur proses, Laporan Pengujian Layanan (jika berlaku), Dokumen jaminan dan Kontrol Kualitas.",
          "Bangun File Teknis: File teknis adalah bagian yang tak terpisahkan untuk klaim perpanjangan sertifikat. Ini harus berisi: Spesifikasi Teknis Produk, Informasi Metode dan Teknik, Dokumen Kepatuhan dan Pengujian, Batasan dan tujuan yang dimaksudkan dari produk, Dokumentasi jaminan kualitas, Ketertelusuran bahan baku, ketertelusuran subkontrak, dan bukti sisanya, Kesesuaian dengan standar dalam ruang lingkup yang dibingkai.",
          "Formulir Aplikasi: Formulir aplikasi dapat diajukan secara elektronik di Situs Web BIS untuk tempat yang ditentukan. Pembayaran biaya aplikasi adalah wajib. Sisanya dokumen yang memverifikasi aplikasi harus disertakan untuk penilaian yang tepat.",
          "Inspeksi Pabrik: Untuk produsen domestik: Inspeksi dilakukan selama periode maksimum 2 hari. Untuk produsen asing: Inspeksi dilakukan selama periode maksimum 3 hari (hari tambahan mungkin bertambah karena permintaan tambahan).",
          "Pengujian Sampel Produk: Pengujian sampel dilakukan baik di situs produsen atau di laboratorium BIS yang disetujui yang dialihdayakan (pengujian alih daya diizinkan). Pengujian menunjukkan pemenuhan standar India yang relevan.",
          "Penerbitan Sertifikasi: Jika produk memenuhi semua kondisi, BIS memberikan setiap produk Lisensi atau Sertifikat Kesesuaian (CoC). Tanda Standar BIS dapat digunakan secara bebas oleh produsen pada semua produk bersertifikat.",
        ]}
      />

      <p className="service-left-content-paragraph">
        File ini berfungsi sebagai bukti teknis dan statistik dari klaim produk
        yang membuktikan standar ketertelusuran keselamatan.
      </p>

      <p className="service-left-content-paragraph">
        Selama periode inspeksi, pejabat BIS diharapkan untuk: Menganalisis file
        teknis, Menilai cara manufaktur bersama dengan sistem jaminan kualitas
        pendukung, Mengamati pengujian produk, Menentukan ketidaksesuaian (jika
        ada) dan memberikan langkah remedial. Laporan audit rinci disediakan
        kepada pemohon setelah kunjungan.
      </p>

      <p className="service-left-content-paragraph">
        Strategi ini mempertahankan kepatuhan dengan Standar BIS dan merupakan
        pengakuan kepatuhan India dan internasional, membatasi industri pada
        kepercayaan konsumen terhadap keselamatan dan kualitas.
      </p>

      <h2 className="service-left-content-heading-three">
        Prosedur untuk Produsen Domestik
      </h2>

      <p className="service-left-content-paragraph">
        Produsen domestik mengikuti pendekatan langsung dengan mendapatkan
        Lisensi BIS di bawah Skema-X. Langkah-langkah langsung yang harus
        diikuti termasuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Dokumentasi: Semua dokumen yang berkaitan dengan skema harus dikumpulkan dan disiapkan.",
          "Pelaksanaan Aplikasi: Aplikasi harus disajikan bersama biaya yang relevan.",
          "Pertanyaan pada Aplikasi: aplikasi yang diajukan tunduk pada pengawasan dan serangkaian pertanyaan selanjutnya dihasilkan oleh BIS.",
          "Penunjukan Auditor: Auditor ditunjuk oleh BIS tetapi individu yang dinominasikan tunduk pada pembayaran biaya audit.",
          "Audit Pabrik: Pemeriksaan dan survei audit dilakukan di tempat dan sampel yang relevan dikumpulkan.",
          "Evaluasi Sampel: Sampel dievaluasi di laboratorium yang diakui BIS. Pemohon membayar semua biaya pengujian laboratorium yang diakui BIS.",
          "Pembayaran Biaya Lisensi & Penandaan: Pembayaran yang diperlukan diselesaikan ke BIS.",
          "Pemberian Lisensi: Sertifikat yang memberikan izin untuk menggunakan Tanda BIS diberikan oleh BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Waktu Tipikal:</strong> Dekat dengan 90 hari kerja (sesuai
        praktik BIS) diperlukan. Ini disediakan tidak ada ketidaksesuaian kunci.
      </p>

      <h2 className="service-left-content-heading-three">
        Prosedur untuk Produsen Asing
      </h2>

      <p className="service-left-content-paragraph">
        Tidak seperti produsen domestik, produsen asing yang mengajukan
        sertifikat BIS di bawah Skema-X diwajibkan mematuhi proses yang lebih
        ketat dan langkah tambahan. Prosedurnya diuraikan sebagai berikut.
      </p>

      <PointsListWithoutHeading
        points={[
          "Persiapan Dokumentasi: Bisnis terdaftar, tata letak produk dan pabrik, laporan pengujian, dan dokumen manajemen kualitas terkait semuanya harus berada dalam folder yang dikonfigurasi untuk mematuhi.",
          "Pengajuan Aplikasi: Aplikasi, biaya yang diperlukan dan semua bahan aplikasi diserahkan melalui portal online BIS.",
          "Pencatatan Aplikasi dan Pengawasan: Aplikasi dicatat oleh BIS dan pemeriksaan dokumen dilakukan. Masalah apa pun yang mungkin dimiliki BIS harus diselesaikan oleh pemohon secara tepat waktu.",
          "Penugasan Auditor dan Pembayaran: Auditor BIS yang bertanggung jawab atas inspeksi pabrik ditugaskan kepada pemohon untuk audit. Pemohon harus membayar biaya audit yang ditetapkan, sebagaimana ditentukan oleh undang-undang yang berlaku.",
          "Persiapan Audit: Produsen asing bertanggung jawab atas pengaturan logistik untuk audit seperti penerbitan Visa, tiket pesawat, dan reservasi hotel untuk pejabat BIS diatur dan dibayar.",
          "Audit Pabrik & Pemilihan Sampel: Pejabat BIS melakukan audit pabrik yang berlangsung 3 hari (hari lebih banyak dapat ditambahkan jika aplikasi produk lebih banyak diajukan).",
          "Pengujian Produk: Sampel yang dipilih diteruskan ke laboratorium terakreditasi BIS untuk pengujian. Dalam beberapa kasus, pengujian dikontrak ke laboratorium pengujian lain sehingga pembayaran diselesaikan melalui laboratorium pengujian utama.",
          "Pembayaran Biaya Penandaan & Lisensi: Setelah audit dan hasil pengujian berhasil, produsen harus membayar biaya penandaan dan biaya lisensi yang diperlukan ke BIS.",
          "Pemberian Lisensi: BIS mengeluarkan Lisensi/Sertifikat Kesesuaian (CoC) setelah semua kondisi diikuti secara total. BIS kemudian mengizinkan produsen dengan Tanda Standar BIS yang digunakan pada produk bersertifikat lainnya, setelah kepatuhan dikonfirmasi.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Audit terdiri dari: Evaluasi sistem jaminan kualitas dan alur kerja
        dalam proses manufaktur, Penilaian kepatuhan dan dokumentasi teknis,
        Pemilihan sampel pengujian independen.
      </p>

      <p className="service-left-content-paragraph">
        Seluruh proses memakan waktu, berdasarkan praktik dari BIS, kira-kira
        6-7 bulan.
      </p>

      <h3 className="service-left-content-heading-three">
        Poin Tambahan Utama untuk Produsen Asing:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Klasifikasi FMCS: Semua produsen asing diklasifikasikan sebagai 'Skala Besar' di bawah Skema Sertifikasi Produsen Asing. Klasifikasi ini terlepas dari skala operasi yang dilakukan.",
          "Perwakilan India yang Berwenang (AIR): Setiap produsen asing diwajibkan untuk menunjuk Perwakilan India yang Berwenang (AIR). AIR adalah titik kontak utama untuk pemohon asing dan BIS, bertanggung jawab atas kepatuhan, kolaborasi dan pemeliharaan lisensi BIS.",
          "Audit Pabrik: Audit pabrik untuk produsen asing komprehensif dan cenderung berlangsung 3 hari. Juga, hari lebih banyak diperlukan dalam kasus beberapa aplikasi produk diajukan.",
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
        <span className="service-left-content-index-heading">
          Gambaran Umum
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Pengenalan Sertifikasi BIS Skema X
      </h2>

      <p className="service-left-content-paragraph">
        Biro Standar India, atau BIS singkatnya, meluncurkan &ldquo;Skema
        X&rdquo; pada 16 Maret 2022, bertujuan untuk meningkatkan kepatuhan pada
        keselamatan dan kualitas produk di India. Produsen India dan asing dapat
        mengajukan sertifikasi BIS untuk Mesin dan peralatan listrik, komponen
        Seperti rakitan, sub-rakitan dan, dan Alat yang ditentukan dalam
        Jadwal-II Skema-X dan mengambil sertifikasi sebelum mengekspor, menjual,
        atau mendistribusikan di India.
      </p>

      <p className="service-left-content-paragraph">
        Di bawah Skema X, produsen dapat mengajukan Lisensi BIS atau Sertifikat
        Kesesuaian (CoC) untuk sakelar tegangan rendah dan peralatan kontrol,
        mesin, dan peralatan listrik. Setelah produsen disertifikasi, mereka
        diizinkan menggunakan tanda Standar BIS, menunjukkan bahwa produk mereka
        sesuai dengan standar yang ditetapkan di India.
      </p>

      <p className="service-left-content-paragraph">
        Sertifikasi, sambil mempromosikan produk dan kepatuhan dengan Standar
        India dan Peraturan Pemerintah, membantu mengembangkan kepercayaan dan
        keyakinan konsumen dalam produk bersertifikat.
      </p>

      <h2 className="service-left-content-heading-three">
        Apa itu Sertifikasi Skema X?
      </h2>

      <p className="service-left-content-paragraph">
        Skema X adalah skema sertifikasi produk yang dikembangkan di bawah
        Peraturan Penilaian Kesesuaian BIS, 2018 dan kemudian disederhanakan di
        bawah Peraturan Penilaian Kesesuaian BIS (Amandemen), 2022.
      </p>

      <p className="service-left-content-paragraph">
        Tujuan utama adalah membawa standar keselamatan dan kualitas India ke
        standar global, terutama berkaitan dengan mesin industri dan peralatan
        listrik. Produk yang diproduksi di atau diimpor ke India di bawah skema
        ini tunduk pada pengawasan dan penilaian ketat untuk membuktikan standar
        teknis, keselamatan, serta kinerja.
      </p>

      <p className="service-left-content-paragraph">
        Ketentuan di bawah ruang lingkup asli Sertifikasi Skema X telah direvisi
        untuk dan diperluas dengan Perintah Peraturan Teknis Omnibus
        (Keselamatan Mesin dan Peralatan Listrik) yang baru dikeluarkan, 2024,
        yang berada di bawah yurisdiksi Kementerian Industri Berat dan telah
        diberlakukan oleh BIS. Perintah ini berlaku mulai 1 September 2026, dan
        mencakup spektrum luas mesin dan peralatan listrik seperti pompa untuk
        menangani cairan, kompresor, derek, mesin listrik putar, transformator,
        dan switchgear dan control gear.
      </p>

      <p className="service-left-content-paragraph">
        Rakitan, sub-rakitan dan komponen mesin atau peralatan tersebut juga
        merupakan bagian dari ruang lingkup sertifikasi sesuai Bagian 16
        Undang-Undang Biro Standar India, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Selain itu, di bawah Aturan CMVR 1989 (Konstruksi dan Manufaktur
        Peraturan Katup), Bowser dan jenis peralatan konstruksi lainnya di bawah
        yurisdiksi Skema X, memastikan pasar tidak terpapar peralatan yang tidak
        memiliki persyaratan keselamatan dan standar teknis.
      </p>

      <h2 className="service-left-content-heading-three">
        Peraturan Teknis Omnibus (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        Kementerian Industri Berat merilis &ldquo;Peraturan Teknis Omnibus
        tentang Perintah Keselamatan (Keselamatan Mesin dan Peralatan
        Listrik)&rdquo; melalui pemberitahuan E-Gazette tanggal 28 Agustus 2024.
        Peraturan inovatif ini dimaksudkan untuk meningkatkan - keselamatan,
        kualitas dan kepatuhan mesin, peralatan listrik dan rakitannya, sub
        rakitan dan komponen, di bawah Skema X Peraturan BIS, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Di bawah OTR, semua kategori mesin dan peralatan listrik, dan semua
        bagian dan komponennya disertakan. Namun, beberapa kategori secara
        khusus dikecualikan:
      </p>

      <PointsListWithoutHeading
        points={[
          "Mesin dan komponen apa pun yang merupakan bagian dari perintah lain di bawah Bagian 16 yang dikeluarkan di bawah Undang-Undang Biro Standar India, 2016.",
          "Barang dan artikel domestik yang diproduksi hanya dimaksudkan untuk ekspor.",
          "Mesin dan peralatan konstruksi yang berada di bawah Aturan CMVR, 1989, yang ditentukan oleh Kementerian Transportasi Jalan dan Jalan Raya (MoRTH).",
        ]}
      />

      <p className="service-left-content-paragraph">
        Pengecualian ini dibuat untuk memfasilitasi kepatuhan dan menghindari
        duplikasi regulasi yang tidak perlu untuk mempromosikan kemudahan
        berusaha.
      </p>

      <p className="service-left-content-paragraph">
        Peraturan Teknis Omnibus, 2024 mencakup semua mesin dan peralatan
        listrik, termasuk sakelar tegangan rendah dan peralatan kontrol yang
        diberitahukan oleh Kementerian Industri Berat, akan diperlakukan di
        bawah kerangka Skema X Sertifikasi BIS. Perintah ini akan berlaku pada
        tanggal 1 September 2026 sehingga produsen dan importir memiliki cukup
        untuk memodifikasi operasi mereka sesuai dengan Perintah yang
        dikeluarkan.
      </p>

      <h2 className="service-left-content-heading-three">
        Sertifikasi BIS di bawah Peraturan Teknis Omnibus
      </h2>

      <p className="service-left-content-paragraph">
        Sesuai OTR 2024, produsen, serta importir, mesin dan peralatan listrik
        yang mencakup pompa, pompa, kompresor, centrifuge, derek, transformator,
        dan switchgear harus mengajukan Sertifikasi BIS di bawah Skema X.
      </p>

      <p className="service-left-content-paragraph">
        Di bawah Skema X, produsen dapat memilih untuk mengajukan:
      </p>

      <PointsListWithoutHeading
        points={["Lisensi BIS, atau", "Sertifikat Kesesuaian (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Produk yang membawa Tanda Standar BIS yang merupakan Tanda Kesesuaian
        yang mensertifikasi dan meyakinkan pengguna bahwa produk tersebut aman,
        andal, dan berkualitas baik. Ini juga merupakan tanda kepercayaan dan
        kinerja yang benar-benar baik.
      </p>

      <div className="service-left-content-heading-three">
        Catatan Khusus untuk UMKM
      </div>

      <p className="service-left-content-paragraph">
        Seperti halnya banyak sektor lain, Usaha Mikro, Kecil, dan Menengah
        (UMKM) juga harus mematuhi Skema X dan mendapatkan Sertifikasi BIS untuk
        mesin dan peralatan listrik mereka. Meskipun tampak bahwa kepatuhan
        dengan persyaratan regulasi mungkin menantang, sertifikat Skema X adalah
        penambahan nilai dan keuntungan bagi UMKM karena alasan berikut:
      </p>

      <PointsListWithoutHeading
        points={[
          "Membuktikan kepatuhan terhadap kewajiban hukum dan kewajiban lain yang ditetapkan oleh pemerintah.",
          "Meningkatkan reputasi produk dan kepercayaan konsumen.",
          "Memfasilitasi akses ke pasar domestik dan luar negeri yang lebih besar.",
          "Meningkatkan posisi UMKM secara global sehubungan dengan daya saing, keselamatan, dan kualitas.",
        ]}
      />

      <h2 className="service-left-content-heading-three">Logo BIS Skema X</h2>

      <p className="service-left-content-paragraph">
        Tanda standar BIS Skema X membentuk tanda kualitas dan prinsip
        kepercayaan. Logo berisi:
      </p>

      <PointsListWithoutHeading
        points={[
          "nomor standar ditampilkan di bagian atas logo; dan",
          "nomor lisensi ditampilkan di bagian bawah Logo dalam format: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        Tanda ini menandakan bahwa Lisensi BIS telah berhasil dikeluarkan ke
        produsen. Ini memberi hak kepada produsen untuk menempatkan Tanda BIS
        dan meyakinkan konsumen bahwa produk tersebut asli dan aman.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="Logo BIS Skema X"
          title="Sertifikasi BIS Skema X"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">Implikasi Hukum</div>

      <p className="service-left-content-paragraph">
        Tanda Standar BIS adalah tanda kepercayaan dan kualitas. Tanda hanya
        tersedia setelah kontrak yang valid ada. Hanya kontrak yang valid
        mengizinkan pemilik untuk menggunakan tanda. Menggunakan tanda tanpa
        kontrak yang valid adalah pelanggaran di bawah konstitusi India dan sama
        dengan memiliki tanda hukum. Pemilik tanda ditempatkan di bawah
        pembatasan berat untuk penggunaan lisensi CM/L-XXXXXXXXXX untuk produk
        yang tidak memiliki sertifikasi BIS.
      </p>

      <p className="service-left-content-paragraph">
        Oleh karena itu, setiap produsen diwajibkan untuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Memperoleh Lisensi BIS yang valid di bawah Skema X.",
          "Memenuhi persyaratan yang relevan dari Standar India; dan",
          "Menempelkan produk dengan benar dengan Logo BIS yang disetujui.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Kerangka regulasi ini diperluas untuk melindungi kepentingan konsumen
        dan pebisnis, memupuk pasar yang menekankan keselamatan, keterbukaan,
        dan kepercayaan.
      </p>

      <h2 className="service-left-content-heading-three">
        Perbedaan Utama Antara Skema-I dan Skema-X
      </h2>

      <h3 className="service-left-content-heading-three">Skema-I</h3>

      <PointsListWithoutHeading
        points={[
          "Termasuk kategori produk konsumen yang lebih luas seperti elektronik, peralatan rumah tangga, dan bahkan produk industri.",
          "Produk yang dikeluarkan sertifikat di bawah skema ini harus memiliki Tanda ISI Standar.",
          "Berhubungan dengan produsen domestik maupun asing.",
          "Melibatkan audit pabrik dan pengujian sampel untuk menentukan kualitas dan kepatuhan dengan Standar India.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Skema-X</h3>

      <PointsListWithoutHeading
        points={[
          "Membahas produk rekayasa industri dan kritis keselamatan berisiko tinggi, yang mencakup peralatan listrik, mesin, dan sistem industri dengan tugas yang cukup besar.",
          "Sertifikasi lebih ketat daripada Skema-I. Ini melibatkan pelaporan teknis lanjutan, pemeriksaan kepatuhan, dan audit sertifikasi yang luas.",
          "Skema-X cenderung lebih mahal daripada Skema-I karena dokumentasi kepatuhan ekstra.",
          "Setiap bisnis yang berurusan dengan peralatan listrik atau mesin industri diwajibkan untuk mendapatkan sertifikasi di bawah Skema-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Fitur
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Tanda ISI
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Skema X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Dikelola oleh
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS India
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Jenis Sertifikasi
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Lisensi BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Sertifikat BIS / Lisensi BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Produk Target
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Barang konsumen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Mesin & peralatan listrik
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Tanda yang Digunakan
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tanda ISI
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Tanda standar BIS (di bawah Skema X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Tingkat Kepatuhan
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Kepatuhan standar India
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Kepatuhan teknis dan keselamatan tingkat tinggi
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">
        Produk yang Dicakup oleh Skema-X
      </h2>

      <p className="service-left-content-paragraph">
        Skema-X mencakup produk dengan risiko tertinggi terhadap keselamatan dan
        kinerja, termasuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Peralatan Listrik: Transformator industri, unit catu daya, dan sejenisnya, switchgear dan control gear tegangan rendah, ditambah perangkat tegangan tinggi lainnya.",
          "Mesin Berat: Press hidraulik, derek industri, alat mesin otomatis, dan peralatan khusus untuk industri skala besar.",
          "Peralatan Kritis Hidup: Pemadam api, bejana tekan, sistem listrik darurat, dan perangkat serta sistem lain untuk keselamatan hidup.",
          "Elektronik Konsumen & Industri Khusus: Peralatan dan perangkat elektronik kelas medis yang menggabungkan langkah-langkah pelindung lanjutan.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                No. Seri
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Deskripsi Mesin dan Peralatan Listrik
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Kode HS
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
                  to="/sertifikasi-bis-skema-x-untuk-pompa-dan-elevator-cairan"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis Pompa untuk menangani cairan, elevator cairan dan
                  (atau) rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 dan
                841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-kompresor"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis kompresor dan(atau) rakitannya /sub-rakitan
                  /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                dan 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-peralatan-perlakuan-panas"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin untuk pengolahan bahan dengan proses yang
                  melibatkan perubahan suhu dan(atau) rakitannya /sub-rakitan
                  /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 dan
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-sentrifus-dan-mesin-penyaring-atau-pemurnian"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis centrifuge, mesin penyaringan atau pemurnian untuk
                  cairan dan gas dan(atau) rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 dan 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-pengemasan"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin untuk mengisi, menutup, menyegel, memberi
                  label botol, mengemas atau membungkus dan(atau) rakitannya
                  /sub-rakitan/komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 dan 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-derek"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis derek dan (atau) rakitannya
                  /sub-rakitan/komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                dan 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-konstruksi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin untuk konstruksi, penggerak tanah,
                  Penambangan dan (atau) rakitannya /sub-rakitan/komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 dan 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-tenun-alat-tenun"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin tenun (loom) dan (atau) rakitannya
                  /sub-rakitan / komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 dan 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-bordir"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin untuk membuat bordir dan(atau) rakitannya
                  /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 dan 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-perkakas-mesin-pemotong-logam"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis alat mesin pemotong logam yang dicakup di bawah
                  heading 8456 hingga 8461 dan(atau) rakitannya
                  /sub-rakitan/komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 dan 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-perkakas-mesin"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis alat mesin untuk bekerja batu, keramik, beton,
                  semen asbes atau seperti mineral kaca dan (atau) rakitannya
                  /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 dan 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-karet-dan-plastik"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin untuk bekerja karet dan plastik dan(atau)
                  rakitannya /sub-rakitan /komponennya
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
                  to="/sertifikasi-bis-skema-x-untuk-pekerjaan-umum-dan-peralatan-mekanik"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis Mesin termasuk mesin untuk pekerjaan umum &
                  bangunan dan mesin & peralatan mekanik yang memiliki fungsi
                  individu, tidak ditentukan Atau disertakan di tempat lain di
                  Bab 84 dan(atau) rakitannya/sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 dan 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-roda-gigi-dan-elemen-transmisi"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis roda gigi dan roda gigi, roda bergigi, sproket
                  rantai, elemen transmisi sekrup bola atau rol, kotak gigi dan
                  pengubah kecepatan, termasuk konverter torsi Dan (atau)
                  rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 dan 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-mesin-listrik-rotary"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis mesin listrik putar seperti Generator, dll. dan
                  (atau) rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 dan 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-generator-diesel"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis Generator Diesel dan (atau) rakitannya
                  /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 dan 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-transformator"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis Transformator dan (atau) rakitannya /sub-rakitan
                  /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 dan
                850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-konverter-semikonduktor-daya"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis Konverter Semikonduktor Daya dan (atau) rakitannya
                  /sub-rakitan /komponennya
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
                  to="/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-hingga-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis peralatan switch gear dan control gear yang
                  beroperasi pada tegangan tidak melebihi 1000 volt dan (atau)
                  rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 dan 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/sertifikasi-bis-skema-x-untuk-peralatan-switchgear-dan-controlgear-di-atas-1000-volt"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Semua jenis peralatan switch gear dan control gear yang
                  beroperasi pada tegangan melebihi 1000 volt dan (atau)
                  rakitannya /sub-rakitan /komponennya
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 dan 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <h2 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Standar Keselamatan Berdasarkan Produk
          </h2>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Deskripsi Mesin dan Peralatan Listrik
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
            Unduh PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Standar Keselamatan di bawah BIS Skema - X
      </h2>

      <p className="service-left-content-paragraph">
        Lebih dari sekadar kebutuhan hukum, Sertifikasi BIS Skema - X menawarkan
        janji keselamatan, kualitas, dan keandalan. Sertifikasi ini, yang
        melibatkan kepatuhan ketat terhadap norma nasional dan internasional,
        memastikan bahwa mesin dan peralatan listrik yang ditawarkan kepada
        pengguna aman, ramah lingkungan, dan secara teknis baik.
      </p>

      <p className="service-left-content-paragraph">
        Untuk mensertifikasi di bawah Skema - X, produsen perlu mematuhi
        komponen keselamatan utama berikut:
      </p>

      <PointsListWithoutHeading
        points={[
          "Keselamatan Listrik: Kepatuhan dengan Standar IEC dan India yang berlaku. Sertifikasi melindungi terhadap hubung singkat, kejutan listrik, kerusakan isolasi, hilangnya bumi pelindung, penyalaan bahan mudah terbakar sekitar, dan kebakaran.",
          "Keselamatan Mekanis: Penilaian integritas struktural mesin dan integritas bagian bergerak dan bahan baru. Memastikan bahwa peralatan aman terhadap tekanan mekanis, keausan, dan bahaya operasional.",
          "Keselamatan Kebakaran: Penggunaan bahan yang dirancang dan dibangun dengan bahan tahan api. Kepatuhan dengan standar kinerja propagasi api untuk mengendalikan risiko yang terkait dengan kebakaran.",
          "Kepatuhan Lingkungan: Penggunaan daya yang terkendali dan bahan ramah lingkungan dalam produksi peralatan. Mendorong produsen untuk mengurangi dampak lingkungan dari peralatan mereka.",
          "Manajemen Kualitas: Kontrol dominan dan otonom pada proses produksi untuk mempertahankan standar dan norma yang telah ditetapkan. Fokus pada regulasi kondisi pabrik, termasuk audit proses, dan kepatuhan berkelanjutan.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Standar Regulasi di bawah Skema-X
      </h2>

      <p className="service-left-content-paragraph">
        Produsen diwajibkan mematuhi Standar India yang Relevan yang selaras
        dengan Standar Internasional, termasuk:
      </p>

      <h3 className="service-left-content-heading-three">Standar Tipe A:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Keselamatan Mesin: Prinsip Umum untuk Desain, Penilaian Risiko, dan Pengurangan Risiko.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Standar Tipe B:</h3>

      <PointsListWithoutHeading
        points={[
          "Diuraikan dalam Jadwal Kedua Peraturan Teknis Omnibus (OTR) Order, 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Standar Tipe C:</h3>

      <PointsListWithoutHeading
        points={["Diuraikan dalam Jadwal Ketiga OTR Order, 2024."]}
      />

      <h3 className="service-left-content-heading-three">Seri IS/IEC 60947:</h3>

      <PointsListWithoutHeading
        points={[
          "Mencakup switchgear dan control gear tegangan rendah dalam beberapa bagian dan seksi.",
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
