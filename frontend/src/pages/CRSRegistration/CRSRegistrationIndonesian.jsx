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
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
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
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";


const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationIndonesian = () => {
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
      <FooterIndonesian />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationIndonesian;


const CRSRegistrationMetaTags = () => {
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
        name: "Pendaftaran BIS CRS",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Pendaftaran BIS - Skema Pendaftaran Wajib (CRS)</title>
      <meta
        name="description"
        content="Pendaftaran BIS adalah mendapatkan lisensi dari BIS untuk Produk Elektronik dan IT yang sesuai dengan Standar India yang berlaku di bawah skema CRS."
      />
      <meta
        name="keywords"
        content="Sertifikat BIS, Proses Pendaftaran BIS, Pendaftaran BIS, Proses pendaftaran online BIS, Sertifikasi BIS untuk produk elektronik, Proses pendaftaran BIS di India, Pendaftaran BIS untuk Produk Elektronik, Skema pendaftaran wajib"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Pendaftaran BIS - Skema Pendaftaran Wajib (CRS)"
      />
      <meta
        property="og:description"
        content="Pendaftaran BIS adalah mendapatkan lisensi dari BIS untuk Produk Elektronik dan IT yang sesuai dengan Standar India yang berlaku di bawah skema CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Pendaftaran BIS - Skema Pendaftaran Wajib (CRS)"
      />
      <meta
        name="twitter:description"
        content="Pendaftaran BIS adalah mendapatkan lisensi dari BIS untuk Produk Elektronik dan IT yang sesuai dengan Standar India yang berlaku di bawah skema CRS."
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
                  <Link to="/">Beranda</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Pendaftaran BIS CRS</BreadcrumbPage>
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
              Keahlian Bersertifikat
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Pendaftaran BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Wajib untuk produk elektronik untuk memastikan keselamatan & kualitas. Dapatkan persetujuan BIS dengan bantuan ahli!
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
        description: "Nomor telepon harus berisi (8-15 digit)",
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
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: errorMessage || "Gagal mengirimkan detail formulir kontak!",
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

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Pesan Janji Temu
      </h3>

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
    overview: "Ikhtisar",
    eligibility: "Kelayakan",
    documents: "Dokumen",
    registration: "Pendaftaran",
    fees: "Biaya Pendaftaran",
    elabelling: "E-Labeling",
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
          <ServicesRightSideContentIndonesian />
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
              Layanan Kami
            </h2>
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
                alt="BIS"
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
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikasi Pendaftaran CDSCO
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
              Pendaftaran BIS (CRS)
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
              Manajemen Limbah Plastik
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
                alt="LMPC"
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
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Sertifikat Pendaftaran BIS
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
              TANDA ISI (BIS) untuk Produsen India
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
      question: "1. Apa itu pendaftaran BIS?",
      answer:
        "Sertifikasi BIS adalah proses kepatuhan yang diatur oleh Biro Standar India, yang memverifikasi bahwa produk memenuhi Standar India (IS) yang berlaku untuk kualitas, keselamatan, dan keandalan.",
    },
    {
      id: "item-2",
      question: "2. Apa itu pendaftaran CRS di bawah BIS?",
      answer:
        "CRS adalah singkatan dari Skema Pendaftaran Wajib. Ini adalah proses pendaftaran wajib untuk kategori produk tertentu seperti elektronik, listrik, baterai, dan item surya. Produk di bawah CRS harus diuji dan terdaftar dengan BIS sebelum dapat dijual di India.",
    },
    {
      id: "item-3",
      question: "3. Apakah sertifikasi BIS wajib di India?",
      answer:
        "Ya. Untuk semua produk yang tercantum dalam daftar produk CRS (saat ini 80+ item), pendaftaran BIS wajib untuk memproduksi, mengimpor, atau menjual di India.",
    },
    {
      id: "item-4",
      question: "4. Apa perbedaan antara BIS CRS dan tanda ISI?",
      answer:
        "BIS CRS: Untuk barang elektronik dan IT, hanya untuk produk wajib yang diberitahukan di bawah QCO. <br />Tanda ISI: Digunakan untuk berbagai produk yang lebih luas, mungkin sukarela atau wajib tergantung pada kategori produk.",
    },
    {
      id: "item-5",
      question: "5. Siapa yang dapat mengajukan pendaftaran BIS CRS?",
      answer:
        "Hanya produsen yang dapat mengajukan. Ini termasuk produsen India dan asing. Merek asing harus menunjuk Perwakilan India yang Berwenang (AIR).",
    },
    {
      id: "item-6",
      question: "6. Apa peran AIR?",
      answer:
        "Perwakilan India yang Berwenang (AIR) secara hukum bertanggung jawab untuk mengajukan aplikasi BIS atas nama produsen asing. Mereka bertindak sebagai penghubung resmi antara BIS dan pemohon luar negeri.",
    },
    {
      id: "item-7",
      question: "7. Berapa lama pendaftaran BIS CRS memakan waktu?",
      answer:
        "Proses biasanya memakan waktu 3–4 minggu, dengan asumsi semua dokumen dan laporan pengujian diajukan dengan benar dan tidak ada keberatan yang diajukan oleh BIS.",
    },
    {
      id: "item-8",
      question: "8. Berapa biaya sertifikat BIS CRS?",
      answer:
        "Biaya termasuk: <br />Biaya Pengujian: ₹10.000–₹20.000 + PPN <br />Biaya Pemerintah: ₹53.000 + PPN per laporan pengujian <br />Biaya Tambahan: Afidavit, kurir, dokumentasi AIR, dll. <br />Diskon berlaku untuk produsen terdaftar MSME India",
    },
    {
      id: "item-9",
      question: "9. Berapa lama masa berlaku sertifikat BIS CRS?",
      answer:
        "Lisensi BIS awal berlaku selama 2 tahun. Dapat diperpanjang hingga 5 tahun jika detail produk dan manufaktur tetap tidak berubah.",
    },
    {
      id: "item-10",
      question: "10. Bisakah sertifikasi BIS diperoleh secara sukarela?",
      answer:
        "Tidak. Di bawah CRS, Anda tidak dapat mengajukan secara sukarela untuk produk yang tidak tercantum di bawah QCO. Sertifikasi sukarela hanya berlaku untuk produk non-CRS melalui skema ISI.",
    },
    {
      id: "item-11",
      question: "11. Di mana saya dapat menemukan daftar produk BIS CRS?",
      answer:
        'Anda dapat mengunjungi situs web resmi BIS <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> dan navigasi ke bagian "Produk di bawah CRS" untuk melihat daftar lengkap produk yang dicakup.',
    },
    {
      id: "item-12",
      question: "12. Bisakah tanda BIS ditampilkan secara elektronik?",
      answer:
        "Ya, melalui e-labelling, tetapi harus memenuhi aturan BIS yang ketat: Info label harus tertanam dalam firmware <br />Akses mudah dalam 4 langkah di menu perangkat <br />Kemasan fisik masih harus membawa info regulasi",
    },
    {
      id: "item-13",
      question:
        "13. Apa yang terjadi jika saya tidak mendapatkan pendaftaran BIS untuk produk wajib?",
      answer:
        "Sanksi berat, termasuk: <br />Penyitaan produk <br />Penolakan bea cukai <br />Denda hukum <br />Penghapusan dari portal e-commerce <br />Larangan permanen dari pasar India",
    },
    {
      id: "item-14",
      question: "14. Bisakah satu sertifikat BIS mencakup beberapa model atau merek?",
      answer:
        "Tidak. Setiap merek dan lokasi pabrik harus disertifikasi secara terpisah. Beberapa model dapat ditambahkan menggunakan laporan tambahan, tetapi hanya di bawah aplikasi dan merek yang sama.",
    },
    {
      id: "item-15",
      question: "15. Bagaimana Sun Certifications India dapat membantu saya?",
      answer:
        "Kami menawarkan: <br />Dukungan dokumentasi lengkap <br />Koordinasi lab <br />Penanganan aplikasi portal BIS <br />Resolusi kueri dan tindak lanjut BIS <br />Bimbingan perpanjangan dan pelabelan <br />Jaminan kepatuhan untuk merek asing melalui layanan AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Tidak dapat menemukan jawaban yang Anda cari?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Hubungi kami!
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
                  Tampilkan Lebih Sedikit FAQ
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
                  Tampilkan Lebih Banyak FAQ
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
    product: "AMPLIFIER DENGAN DAYA INPUT 2000W DAN LEBIH",
    isNumber: "IS 616:2017",
    date: "03 Juli 2013",
  },
  {
    id: 2,
    product: "MESIN PENGOLAHAN DATA OTOMATIS",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 3,
    product: "JAM ELEKTRONIK DENGAN DAYA UTAMA",
    isNumber: "IS 302-2-26:2014",
    date: "03 Juli 2013",
  },
  {
    id: 4,
    product: "PERMAINAN ELEKTRONIK (VIDEO)",
    isNumber: "IS 616:2017",
    date: "03 Juli 2013",
  },
  {
    id: 5,
    product: "SISTEM MUSIK ELEKTRONIK DENGAN DAYA INPUT 200W DAN LEBIH",
    isNumber: "IS 616:2017",
    date: "03 Juli 2013",
  },
  {
    id: 6,
    product: "LAPTOP/NOTEBOOK/TABLET",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 7,
    product: "OVEN MIKROGELOMBANG",
    isNumber: "IS 302-2-25:2014",
    date: "03 Juli 2013",
  },
  {
    id: 8,
    product: "PEMUTAR DISK OPTIK DENGAN AMPLIFIER TERPASANG DENGAN DAYA INPUT 200W DAN LEBIH",
    isNumber: "IS 616:2017",
    date: "03 Juli 2013",
  },
  {
    id: 9,
    product: 'TELEVISI PLASMA/LCD/LED DENGAN UKURAN LAYAR 32" DAN LEBIH',
    isNumber: "IS 616:2017",
    date: "03 Juli 2013",
  },
  {
    id: 10,
    product: "PRINTER, PLOTTER",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 11,
    product: "SCANNER",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 12,
    product: "SET TOP BOX",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 13,
    product: "MESIN PENJAWAB TELEPON",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 14,
    product: 'UNIT TAMPILAN VISUAL, MONITOR VIDEO DENGAN UKURAN LAYAR 32" DAN LEBIH',
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 15,
    product: "KEYBOARD NIRKABEL",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "03 Juli 2013",
  },
  {
    id: 16,
    product: "KASIR",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 17,
    product: "MESIN FOTOKOPI/DUPLIKATOR",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 18,
    product: "PEMBACA PASSPORT",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 19,
    product: "TERMINAL POINT OF SALE",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 20,
    product: "MESIN PENGOLAHAN SURAT/MESIN FRANKIR/MESIN FRANKIR",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 21,
    product: "BANK DAYA UNTUK PENGGUNAAN DALAM APLIKASI PORTABEL",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 22,
    product: "PEMBACA KARTU PINTAR",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 Mei 2015",
  },
  {
    id: 23,
    product: "TELEPON SELULER",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "13 September 2015",
  },
  {
    id: 24,
    product: "LAMPU LED AUTO-BALLASTED UNTUK LAYANAN PENERANGAN UMUM",
    isNumber: "IS 16102(Bagian 1):2012",
    date: "13 September 2015",
  },
  {
    id: 25,
    product: "PERALATAN KONTROL ELEKTRONIK YANG DIPASOK DC ATAU AC UNTUK MODUL LED",
    isNumber: "IS 15885(Bagian 2/Sec 13):2012",
    date: "01 Desember 2015",
  },
  {
    id: 26,
    product: "ADAPTER DAYA UNTUK PERALATAN ELEKTRONIK AUDIO, VIDEO & SEJENISNYA",
    isNumber: "IS 616:2010",
    date: "01 Desember 2015",
  },
  {
    id: 27,
    product: "ADAPTER DAYA UNTUK PERALATAN IT",
    isNumber: "IS 13252(Bagian 1):2010",
    date: "01 Desember 2015",
  },
  {
    id: 28,
    product: "LUMINAIRE LED TUJUAN UMUM TETAP",
    isNumber: "IS 10322(Bagian 5/Sec 1):2012",
    date: "01 Maret 2016",
  },
  {
    id: 29,
    product: "UPS/INVERTER DENGAN RATING <= 5KVA",
    isNumber: "IS 16242(Bagian 1):2014",
    date: "01 Maret 2016",
  },
  {
    id: 30,
    product: "SEL/BATERAI SEKUNDER TERSEGEL MENGANDUNG ELEKTROLIT ALKALI ATAU NON-ASAM LAINNYA UNTUK PENGGUNAAN DALAM APLIKASI PORTABEL BAGIAN 1 SISTEM NIKEL",
    isNumber: "IS 16046(Bagian 1): 2018",
    date: "01 Juni 2016",
  },
  {
    id: 31,
    product: "SEL/BATERAI SEKUNDER TERSEGEL MENGANDUNG ELEKTROLIT ALKALI ATAU NON-ASAM LAINNYA UNTUK PENGGUNAAN DALAM APLIKASI PORTABEL BAGIAN 2 SISTEM LITHIUM",
    isNumber: "IS 16046(Bagian 2): 2018",
    date: "01 Juni 2016",
  },
  {
    id: 32,
    product: "DUKUNGAN BAHASA INDIA UNTUK HANDPHONE TELEPON SELULER",
    isNumber: "IS 16333 (Bagian 3) : 2022",
    date: "01 Mei 2018",
  },
  {
    id: 33,
    product: "Luminair LED Tertanam",
    isNumber: "IS 10322 (Bagian 5/Bagian 2) : 2012",
    date: "23 Mei 2018",
  },
  {
    id: 34,
    product: "Luminair LED untuk Penerangan Jalan dan Jalan",
    isNumber: "IS 10322 (Bagian 5/Bagian 3) : 2012",
    date: "23 Mei 2018",
  },
  {
    id: 35,
    product: "Lampu Sorot LED",
    isNumber: "IS 10322 (Bagian 5/Bagian 5) : 2013",
    date: "23 Mei 2018",
  },
  {
    id: 36,
    product: "Lampu Tangan LED",
    isNumber: "IS 10322 (Bagian 5/Bagian 6) : 2013",
    date: "23 Mei 2018",
  },
  {
    id: 37,
    product: "Rantai Penerangan LED",
    isNumber: "IS 10322 (Bagian 5/Bagian 7) : 2017",
    date: "23 Mei 2018",
  },
  {
    id: 38,
    product: "Luminair LED untuk Penerangan Darurat",
    isNumber: "IS 10322 (Bagian 5/Bagian 8) : 2013",
    date: "23 Mei 2018",
  },
  {
    id: 39,
    product: "UPS/Inverter dengan rating <= 10kVA",
    isNumber: "IS 16242 (Bagian 1) : 2014",
    date: "23 Mei 2018",
  },
  {
    id: 40,
    product: "Televisi Plasma/LCD/LED dengan ukuran layar hingga 32",
    isNumber: "IS 616 : 2017",
    date: "23 Mei 2018",
  },
  {
    id: 41,
    product: "Unit Tampilan Visual, Monitor Video dengan ukuran layar hingga 32",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "23 Mei 2018",
  },
  {
    id: 42,
    product: "Kamera CCTV/Perekam CCTV",
    isNumber: "IS 13252 (Bagian 1) : 2010, Persyaratan Penting untuk Keamanan CCTV",
    date: "23 Mei 2018",
  },
  {
    id: 43,
    product: "Adapter untuk peralatan listrik rumah tangga dan sejenisnya",
    isNumber: "IS 302 (Bagian 1) : 2008",
    date: "23 Mei 2018",
  },
  {
    id: 44,
    product: "Pembaca barcode USB, pemindai barcode, pemindai iris, pemindai sidik jari optik",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "23 Mei 2018",
  },
  {
    id: 45,
    product: "Jam tangan pintar",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "23 Mei 2018",
  },
  {
    id: 46,
    product: "Modul fotovoltaik terestrial silikon kristal (PV) (berbasis wafer Si)",
    isNumber: "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Bagian 1) : 2004 & IS/IEC 61730 (Bagian 2) : 2004",
    date: "31 Maret 2019",
  },
  {
    id: 47,
    product: "Modul fotovoltaik terestrial film tipis (PV) (a-Si, CiGs dan CdTe)",
    isNumber: "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Bagian 1) : 2004 & IS/IEC 61730 (Bagian 2) : 2004",
    date: "31 Maret 2019",
  },
  {
    id: 48,
    product: "Konverter daya untuk digunakan dalam sistem tenaga fotovoltaik",
    isNumber: "IS 16221 (Bagian 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 Juni 2021",
  },
  {
    id: 49,
    product: "Inverter fotovoltaik yang terhubung ke utilitas",
    isNumber: "IS 16221 (Bagian 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 Juni 2021",
  },
  {
    id: 50,
    product: "Baterai penyimpanan",
    isNumber: "IS 16270 : 2014",
    date: "01 Januari 2019",
  },
  {
    id: 51,
    product: "Modul LED independen untuk penerangan umum",
    isNumber: "IS 16103 (Bagian 1) : 2012",
    date: "01 April 2021",
  },
  {
    id: 52,
    product: "Rantai penerangan (lampu tali)",
    isNumber: "IS 10322 (Bagian 5/Sec 9) : 2017",
    date: "01 April 2021",
  },
  {
    id: 53,
    product: "Keyboard",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 54,
    product: "Kompor induksi",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 April 2021",
  },
  {
    id: 55,
    product: "Mesin pengeluaran uang tunai teller otomatis",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 56,
    product: "Hard disk drive eksternal tipe USB",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 57,
    product: "Headphone dan earphone nirkabel",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 58,
    product: "Perangkat penyimpanan solid-state eksternal tipe USB (kapasitas di atas 256 GB)",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 59,
    product: "Sistem musik elektronik dengan daya input di bawah 200 Watt",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 60,
    product: "Catuan daya mode sakelar mandiri (SMPS) dengan tegangan keluaran 48V (maks)",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 April 2021",
  },
  {
    id: 61,
    product: "Televisi selain TV Plasma/LCD/LED",
    isNumber: "IS 616 : 2017",
    date: "01 April 2021",
  },
  {
    id: 62,
    product: "Penanak nasi",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 April 2021",
  },
  {
    id: 63,
    product: "Mikrofon nirkabel",
    isNumber: "IS 616 : 2017",
    date: "01 Oktober 2021",
  },
  {
    id: 64,
    product: "Kamera digital",
    isNumber: "IS 13252 (Bagian 1) : 2010",
    date: "01 Oktober 2021",
  },
  {
    id: 65,
    product: "Kamera video",
    isNumber: "IS 616 : 2017",
    date: "01 Oktober 2021",
  },
  {
    id: 66,
    product: "Webcam (produk jadi)",
    isNumber: "IS 616 : 2017",
    date: "01 Oktober 2021",
  },
  {
    id: 67,
    product: "Speaker pintar (dengan dan tanpa layar)",
    isNumber: "IS 616 : 2017",
    date: "01 Oktober 2021",
  },
  {
    id: 68,
    product: "Dimmer untuk produk LED",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 Oktober 2021",
  },
  {
    id: 69,
    product: "Speaker Bluetooth",
    isNumber: "IS 616 : 2017",
    date: "01 Oktober 2021",
  },
  {
    id: 70,
    product: "Asam ortofosfat",
    isNumber: "IS 798 : 2020",
    date: "12 Desember 2021",
  },
  {
    id: 71,
    product: "Asam polifosfat",
    isNumber: "IS 17439:2020",
    date: "24 Desember 2021",
  },
  {
    id: 72,
    product: "Bale kapas",
    isNumber: "IS 12171:2019",
    date: "03 Maret 2023",
  },
  {
    id: 73,
    product: "Trimetil fosfit kelas teknis",
    isNumber: "IS 17412:2020",
    date: "03 Maret 2023",
  },
  {
    id: 74,
    product: "Set televisi",
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
          Daftar Produk Resmi Di Bawah Pendaftaran BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Tabel berikut mencantumkan produk yang memerlukan pendaftaran BIS CRS di India beserta nomor Standar India (IS) yang berlaku dan tanggal implementasinya.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Cari Produk berdasarkan nama atau nomor IS..."
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
                  No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Produk
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  No. IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Tanggal Implementasi
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
    </section>
  );
};

const CRSRegistrationMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">Apa itu Pendaftaran BIS?</h2>

          <p className="service-left-content-paragraph">
            Biro Standar India (BIS) adalah badan standardisasi nasional di India dan bekerja di bawah Kementerian Urusan Konsumen, Pangan dan Distribusi Publik Pemerintah India. BIS bertanggung jawab untuk mempertahankan tolok ukur kualitas, keselamatan, dan kinerja untuk berbagai produk dan layanan di India sesuai dengan Standar India (IS) yang relevan.
          </p>

          <p className="service-left-content-paragraph">
            BIS bertanggung jawab untuk mengawasi dan mengimplementasikan berbagai skema di India. Skema Pendaftaran Wajib (CRS) adalah skema sertifikasi BIS yang sangat menonjol dan wajib yang mencakup berbagai kategori produk elektronik dan IT.
          </p>

          <p className="service-left-content-paragraph">
            Kinerja dan keselamatan produk India adalah masalah penting bagi India. Sertifikasi BIS CRS menjamin bahwa produk elektronik dan IT sesuai dengan standar India, dan membantu melindungi konsumen dari produk yang tidak sesuai dan tidak standar.
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
        <ServiceAuthorIndonesian />
      </div>
    </div>
  );
};



const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Ikhtisar</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Apa itu Skema Pendaftaran Wajib (CRS)?
      </h2>

      <p className="service-left-content-paragraph">
        Skema Pendaftaran Wajib (CRS) adalah skema pendaftaran produk BIS yang diluncurkan pada tahun 2012 dan terutama difokuskan pada produk elektronik. Selama bertahun-tahun, karena lebih banyak produk yang dirilis, CRS telah diperluas untuk mencakup berbagai kategori produk yang lebih luas, yang mencakup produk listrik seperti peralatan, peralatan surya, baterai dan lainnya. Pendaftaran CRS wajib untuk produk yang ditentukan di bawah Perintah Kontrol Kualitas (QCO) yang dikeluarkan oleh berbagai kementerian.
      </p>

      <p className="service-left-content-paragraph">
        Setiap produk yang termasuk dalam skema CRS wajib harus dijual, diimpor, atau didistribusikan di India hanya setelah memperoleh pendaftaran dengan BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Sejarah Sertifikasi CRS di India
      </h3>

      <p className="service-left-content-paragraph">
        Pada tahun 2012, QCO pertama di bawah skema CRS dirilis dan difokuskan pada peralatan elektronik dan IT. Sejak itu, QCO tambahan telah dikeluarkan di sektor berikut:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektronik Konsumen",
          "Pencahayaan & LED",
          "Baterai & Sel",
          "Perangkat Komunikasi Nirkabel",
          "Panel Surya dan Komponen",
          "Peralatan Listrik untuk Rumah Tangga",
        ]}
      />

      <p className="service-left-content-paragraph">
        Daftar untuk Sertifikasi CRS berkembang pesat, jadi sangat penting bagi produsen untuk proaktif dan menyadari pembaruan terbaru.
      </p>

      <h2 className="service-left-content-heading-three">
        Pendaftaran CRS vs Tanda ISI: Apa Perbedaannya?
      </h2>

      {/* Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Fitur
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Pendaftaran CRS
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                  Tanda ISI
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Sifat
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Wajib (hanya untuk produk yang tercantum dalam QCO)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Sukarela atau Wajib (berdasarkan produk)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Ruang Lingkup Produk
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Elektronik, IT, Listrik, Baterai, dll.
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Makanan, semen, baja, listrik, dll.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Aplikasi
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Online, Portal BIS CRS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Manual + Online, Sistem BIS ISI
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Fleksibilitas
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Hanya untuk barang yang dicakup oleh QCO
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Dapat menjadi sukarela untuk barang non-QCO
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pelabelan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Membutuhkan logo BIS CRS dan nomor pendaftaran
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Membutuhkan logo ISI dengan kode standar
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h3 className="service-left-content-heading-three">
        Mengapa Anda Perlu Mengetahui Kerangka Kerja BIS CRS
      </h3>

      <p className="service-left-content-paragraph">
        Jika Anda adalah produsen di India, atau perusahaan asing yang mencoba memasuki pasar India, mengetahui langkah-langkah BIS CRS adalah suatu keharusan. Ini membantu Anda untuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Menghindari sanksi karena tidak patuh.",
          "Mempersiapkan jadwal produksi (mempertimbangkan waktu pengujian lab).",
          "Memfasilitasi pemrosesan bea cukai yang lebih mudah.",
          "Mendapatkan kepercayaan merek jangka panjang pelanggan India.",
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
        <span className="service-left-content-index-heading">Kelayakan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Kriteria Kelayakan untuk Pendaftaran BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        Siapa yang Dapat Mengajukan Sertifikasi BIS Di Bawah CRS?
      </p>

      <p className="service-left-content-paragraph">
        Di India, sertifikat BIS di bawah Skema Pendaftaran Wajib (CRS) hanya dapat diberikan kepada produsen yang memenuhi persyaratan yang ditetapkan oleh Biro Standar India. Ini untuk memastikan hanya produsen autentik yang mendapatkan hak istimewa untuk dapat Mendaftar serta menempelkan logo BIS CRS pada produk mereka.
      </p>

      <div className="service-left-content-heading-three">Daftar Periksa Kriteria Kelayakan</div>

      {/* Eligibility Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Persyaratan
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Deskripsi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pemohon harus menjadi Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Hanya produsen asli (bukan pedagang atau pengecer) dari produk yang memenuhi syarat untuk mengajukan.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Lokasi Dapat India atau Asing
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Baik produsen India maupun merek internasional dapat mengajukan.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  AIR (Perwakilan India yang Berwenang)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Produsen asing harus menunjuk AIR — baik cabang India mereka atau pihak ketiga yang secara resmi diotorisasi.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Laporan Pengujian dari Lab yang Disetujui BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Produk harus diuji di lab yang diakui BIS dan memenuhi Standar India (IS) yang berlaku.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Dokumentasi yang Tepat
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Semua dokumen yang diperlukan harus diajukan dalam format yang ditentukan (detail di bagian berikutnya).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Satu Pendaftaran Per Merek & Lokasi
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Aplikasi terpisah harus diajukan untuk setiap jenis produk, lokasi manufaktur, dan nama merek.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Siapa Perwakilan India yang Berwenang (AIR)?
      </h2>

      <p className="service-left-content-paragraph">
        Untuk produsen asing, salah satu kewajiban adalah menunjuk Perwakilan India yang Berwenang (AIR) untuk komunikasi dan perwakilan di India.
      </p>

      <div className="service-left-content-heading-three">Tanggung Jawab AIR:</div>

      <PointsListWithoutHeading
        points={[
          "Bertindak sebagai perwakilan hukum untuk pemohon asing",
          "Berkomunikasi dan mengelola semua kewajiban dengan BIS atas nama produsen",
          "Bertanggung jawab secara hukum atas semua kepatuhan dan dokumentasi",
          "Tidak dapat menjadi agen atau distributor kecuali secara jelas diotorisasi oleh produsen",
        ]}
      />

      <p className="service-left-content-paragraph">
        Sebagai bagian dari perjanjian, AIR harus mengajukan perjanjian yang ditandatangani dari kedua belah pihak bersama dengan bukti alamat India.
      </p>

      <div className="service-left-content-heading-three">Skenario Kehidupan Nyata:</div>

      <p className="service-left-content-paragraph">
        Perusahaan ABC berencana memperkenalkan model baru power bank di India.
      </p>

      <PointsListWithoutHeading
        points={[
          "Perusahaan ABC adalah produsen.",
          "Mereka menguji produk di salah satu lab terakreditasi BIS di India.",
          "Kantor cabang mereka di Delhi berfungsi sebagai AIR terdaftar.",
          "Mereka mengunggah aplikasi ke portal BIS bersama dengan dokumentasi yang diperlukan.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Hasilnya adalah sertifikat BIS diterbitkan di bawah CRS.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Dokumen yang Diperlukan untuk Pendaftaran BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Daftar dokumen yang diperlukan untuk memperoleh pendaftaran BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Mengisi aplikasi BIS CRS untuk pendaftaran sepenuhnya digital, namun tetap memerlukan dokumen yang lengkap untuk memperoleh persetujuan. Setiap kesalahan kecil dan kegagalan untuk mematuhi aspek apa pun, seperti jenis dokumen, format yang tidak tepat, atau jenis file yang salah dapat menyebabkan aplikasi ditolak atau tertunda.
      </p>

      <p className="service-left-content-paragraph">
        Untuk pemrosesan dokumen BIS yang tepat dan lebih cepat, perlu memiliki dokumen yang tepat di setiap langkah. Memiliki dokumen yang tepat siap memastikan bahwa sertifikat bis Anda diproses tepat waktu dan tetap jelas secara hukum dari audit kepatuhan, inspeksi bea cukai, atau persetujuan pasar.
      </p>

      <div className="service-left-content-heading-three">
        Daftar Periksa Dokumen untuk Pendaftaran BIS CRS
      </div>

      {/* Documents Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                  Dokumen
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                  Siapa yang Mengajukan?
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Catatan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Bukti Alamat Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Sewa pabrik, tagihan utilitas, atau lisensi
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Laporan Pengujian dari Lab yang Disetujui BIS
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen/Lab
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Harus baru (dalam 90 hari) dan referensi kode IS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pernyataan (sesuai Format BIS)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Pemohon
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Termasuk tanggung jawab, kepatuhan, dan tanggung jawab produk
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Sertifikat Merek Dagang
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Diperlukan jika merek terdaftar
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Perjanjian AIR (Untuk pemohon asing)
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen Asing & AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Ditandatangani dan disahkan
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Afidavit
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen atau AIR
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Format dapat diunduh dari portal BIS
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tanda Terima Biaya
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Pemohon
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bukti pembayaran biaya pemerintah
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Surat Otorisasi
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Mengesahkan AIR untuk bertindak atas nama mereka
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Sertifikat Pendaftaran Perusahaan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Bukti pendaftaran bisnis (PPN, ROC, dll.)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Label/Mark Produk
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                  Produsen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Harus menunjukkan logo BIS, standar IS, dan ruang pendaftaran
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
        <span className="service-left-content-index-heading">Proses Pendaftaran</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Proses Pendaftaran BIS CRS</h2>

      <p className="service-left-content-paragraph">
        Pendaftaran BIS CRS adalah proses yang sepenuhnya online melalui Portal Pendaftaran BIS. Ini tidak hanya mencakup prosedur yang meliputi pengunggahan dokumen. Ini juga memerlukan perhatian khusus dari segi teknis, pemahaman peraturan, serta kepatuhan total terhadap Standar India (IS).
      </p>

      <p className="service-left-content-paragraph">
        Proses BIS CRS, kami menyebutnya Sistem Sertifikasi dan Pendaftaran (CRS) untuk saat ini, dan berikut adalah bagaimana perjalanan untuk Sertifikasi BIS berlangsung.
      </p>

      <div className="service-left-content-heading-three">
        Langkah 1: Pengujian Produk di Laboratorium yang Diberikan BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Pilih laboratorium dari daftar yang disetujui BIS",
          "Kirimkan sampel produk yang akan diuji untuk IS yang relevan",
          "Dapatkan laporan pengujian untuk sampel sesuai format laporan pengujian BIS",
        ]}
      />

      <div className="service-left-content-heading-three">Langkah 2: Persiapan Dokumen</div>

      <PointsListWithoutHeading
        points={[
          "Kumpulkan dokumen yang diperlukan, seperti yang telah diuraikan",
          "Pastikan dokumen diberi nama, diformat, ditandatangani dan diberi tanggal dengan benar",
          "Buat label produk yang merupakan stiker tiruan yang berisi ruang untuk logo BIS dan ruang untuk standar IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Langkah 3: Mengisi Aplikasi Online
      </div>

      <PointsListWithoutHeading
        points={[
          "Kunjungi Portal BIS CRS (https://www.bis.org.in/) dan masuk atau daftar",
          "Lengkapi produk, nomor model, merek, dan unit manufaktur AIR, jika perlu",
          "Ikuti langkah-langkah untuk pembayaran biaya Pemerintah",
        ]}
      />

      <div className="service-left-content-heading-three">
        Langkah 4: Tinjauan BIS terhadap Aplikasi
      </div>

      <PointsListWithoutHeading
        points={[
          "BIS memeriksa dokumen pendukung dan laporan laboratorium",
          "Jika diperlukan, klarifikasi diajukan melalui portal",
          "Tanggapi dengan dokumen yang benar atau penjelasan logis",
        ]}
      />

      <p className="service-left-content-paragraph">
        Jika ini adalah kueri klarifikasi, harus dijawab dalam 30 hari, atau aplikasi akan masuk ke arsip, yang berarti ditolak.
      </p>

      <div className="service-left-content-heading-three">Langkah 5: Pemberian Pendaftaran BIS</div>

      <PointsListWithoutHeading
        points={[
          "Sertifikat BIS akan diterbitkan jika pejabat BIS puas dengan hasil penilaian yang mereka lakukan",
        ]}
      />

      <p className="service-left-content-paragraph">Sertifikat Anda akan mencakup:</p>

      <PointsListWithoutHeading
        points={[
          "Nomor pendaftaran BIS",
          "Nama merek",
          "Model produk",
          "Kode Standar IS",
        ]}
      />

      <PointsListWithoutHeading
        points={[
          "Label produk Anda harus berisi atau memiliki e-labelling dari detail sertifikat.",
        ]}
      />

      <div className="service-left-content-heading-three">Langkah 6: Pelabelan dan Distribusi</div>

      <PointsListWithoutHeading
        points={[
          "Produk bersertifikat BIS harus membawa:",
          "Logo BIS CRS",
          "Kode IS yang terkait dengan produk",
          "Nomor pendaftaran BIS",
          "Nomor pendaftaran dan logo BIS harus dicetak atau disematkan secara digital sesuai dengan peraturan BIS.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Perkiraan Waktu</h3>

      {/* Timeline Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Aktivitas
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Waktu Perkiraan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pengujian Produk
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  7-10 hari kerja
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pengumpulan Dokumen
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-3 hari
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pengajuan Aplikasi
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  1 hari
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tinjauan BIS + Resolusi Kueri
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  10-15 hari kerja
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Penerbitan Sertifikat Akhir
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2-4 hari kerja
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  TOTAL
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                  ~4 minggu
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
        <span className="service-left-content-index-heading">Biaya Pendaftaran</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Biaya Pendaftaran BIS CRS, Validitas & Pedoman Perpanjangan
      </h2>

      <p className="service-left-content-paragraph">
        Untuk mendapatkan sertifikat BIS di bawah CRS, pemohon diharuskan membayar biaya pemerintah serta pembayaran untuk produk yang akan diuji. Meskipun prosesnya online dan antarmukanya disederhanakan, banyak pemohon menghadapi penundaan pada permintaan mereka dan penolakan karena pembayaran kurang dan aplikasi yang salah diajukan.
      </p>

      <h3 className="service-left-content-heading-three">Struktur Biaya untuk Pendaftaran CRS</h3>

      {/* Fee Structure Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Jenis Biaya
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Jumlah
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Biaya Pemerintah
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% PPN per laporan pengujian
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Biaya Pengujian
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹10.000 – ₹20.000 + 18% PPN (bervariasi berdasarkan produk/lab)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Laporan Tambahan dalam Aplikasi yang Sama
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹20.000 + 18% PPN per laporan
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Biaya Perpanjangan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  ₹53.000 + 18% PPN
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph italic text-center">
        <em>
          Harga dapat berubah — konfirmasi di portal BIS atau dengan konsultan Anda.
        </em>
      </p>

      <h3 className="service-left-content-heading-three">Validitas & Perpanjangan Sertifikat CRS</h3>

      {/* Certificate Validity & Renewal Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Parameter
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Detail
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Validitas Awal
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  2 Tahun
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Durasi Perpanjangan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Hingga 5 Tahun (jika tidak ada perubahan produk)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Proses Perpanjangan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Online, berdasarkan afidavit baru + biaya perpanjangan
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pengujian Ulang Diperlukan?
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Tidak kecuali spesifikasi produk/standar IS berubah
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
        Pedoman E-Labelling untuk Produk Bersertifikat CRS
      </div>

      <div className="service-left-content-heading-three">Apa itu E-Labelling?</div>

      <p className="service-left-content-paragraph">
        E-labelling adalah praktik menampilkan informasi regulasi dalam perangkat secara elektronik alih-alih mencetak dan menempelkannya pada perangkat. Di bawah Skema Pendaftaran Wajib (CRS) BIS, produk tertentu, terutama perangkat kompak atau digital, dapat menampilkan detail sertifikat BIS, tanda standar dan kode IS melalui antarmuka perangkat lunak atau kemasan digital.
      </p>

      <div className="service-left-content-heading-three">
        Pedoman BIS tentang E-Labelling: E-Labelling Elektronik (BIS CMD
        3/8:1/6975. tanggal 03/12/2015)
      </div>

      <h3 className="service-left-content-heading-three">Persyaratan untuk E-Labelling:</h3>

      {/* E-Labelling Requirements Table */}
      <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
        <div className="rounded-md border bg-white shadow-sm min-w-full">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                  Aturan
                </TableHead>
                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                  Deskripsi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Label Fisik pada Kemasan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Kotak produk atau kemasan eksternal harus menampilkan logo BIS CRS dan detail pendaftaran.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Label Lepas untuk Kemasan Massal
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Jika produk dikirim dalam jumlah besar, label perekat yang dapat dilepas pada kemasan luar dapat diterima.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Tidak Perlu Alat untuk Akses
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Pengguna harus dapat mengakses info e-label tanpa memerlukan alat atau aksesori (misalnya, pengangkatan kartu SIM tidak diizinkan).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Pemrograman Aman
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Info e-label harus tertanam dalam firmware/perangkat lunak, terkunci dari modifikasi oleh pihak ketiga mana pun.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Akses Berbasis Menu
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Pengguna harus mengakses info dalam tidak lebih dari 4 langkah melalui antarmuka menu perangkat.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                  Instruksi Diperlukan
                </TableCell>
                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                  Instruksi tentang cara mengakses detail e-label harus disediakan.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <p className="service-left-content-paragraph">
        Bagaimana Sun Certifications India Dapat Membantu Anda dengan Pendaftaran BIS di bawah Skema CRS
      </p>

      <div className="service-left-content-heading-three">Mengapa Memilih Konsultan BIS?</div>

      <p className="service-left-content-paragraph">
        Seluruh pendaftaran BIS CRS sangat teknis dan melelahkan dalam hal aturan dan volume dokumentasi. Tanpa pemahaman menyeluruh tentang Standar India, QCO terbaru, struktur laporan pengujian, dan alur kerja dalam antarmuka portal, pemohon berisiko kehilangan secara substansial dalam hal tindakan selanjutnya berupa penundaan, penolakan, atau ketidakpatuhan aktif jangka panjang. Di sinilah Sun Certifications India hadir dengan mitra yang terpercaya dan andal untuk membantu pemohon dalam setiap detail skema sertifikasi wajib.
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