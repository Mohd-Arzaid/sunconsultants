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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
import { ISIMarkAndBISCommonTableIndonesian } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableIndonesian";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationIndonesian = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableIndonesian />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterIndonesian />
    </div>
  );
};

export default BISCertificationIndonesian;

const BISCertificationMetaTags = () => {
  const title = "Jenis, Proses, Dokumen, dan Biaya Sertifikasi BIS";
  const description =
    "Sertifikasi BIS mengacu pada proses memperoleh sertifikat standar kualitas dari Bureau of Indian Standards (BIS) untuk memproduksi dan menjual berbagai produk di India.";
  const keywords =
    "Sertifikasi BIS, Proses Sertifikasi BIS, Registrasi BIS, Proses Registrasi BIS, Skema Sertifikasi BIS, Skema Sertifikasi Produk, Skema Sertifikasi Wajib, Daftar Produk Wajib BIS, Tanda ISI, BIS FMCS, Skema Hallmarking BIS, Skema Eco Mark, Konsultan Sertifikasi BIS, Konsultan Sertifikasi ISI, Konsultan Tanda ISI BIS, Apa itu Sertifikasi BIS, Unduh Sertifikasi BIS, Biaya Sertifikasi BIS, Sertifikasi BIS India, Kepanjangan Sertifikasi BIS, Sertifikasi BIS India, Sertifikasi BIS India, Arti Sertifikasi BIS, Cek Sertifikasi BIS, Lisensi BIS Online di India, Sertifikasi BIS Online, Sertifikat BIS, Sertifikat BIS Online.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Kepala Operasi di Sun Certification India";

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
                    <Link to="/">Beranda</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Sertifikasi BIS India untuk Importir dan Produsen
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
              Keahlian Bersertifikat
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Sertifikasi BIS India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            untuk Importir dan Produsen
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Sertifikasi BIS menjamin kualitas dan keamanan produk di India. Ini
            wajib untuk banyak produk dan memerlukan pengujian, dokumentasi, dan
            persetujuan.
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
                Lihat Layanan
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
    if (path.includes("/id/apa-itu-sertifikat-bis-bis-india"))
      return "Sertifikasi BIS - Halaman Indonesia";
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
        title: "Harap masukkan nama lengkap yang valid.",
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
        title: "Harap masukkan alamat email yang valid.",
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
        title: "Harap masukkan nomor telepon yang valid",
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
          "Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda kembali.",
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
        title: errorMessage || "Gagal mengirim detail formulir kontak!",
        description:
          "Terjadi kesalahan. Harap periksa detail Anda dan coba lagi.",
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
        Buat Janji Temu
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
              <span>Buat Janji Temu</span>
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
    overview: "Ringkasan",
    schemes: "Skema",
    process: "Proses",
    documents: "Dokumen",
    cost: "Biaya",
    air: "AIR",
    conclusion: "Kesimpulan",
    faqs: "Tanya Jawab",
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentIndonesian />
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
        <ServiceAuthorIndonesian />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Ringkasan</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Sertifikasi BIS Tanda ISI untuk Produsen India
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Sertifikasi BIS India"
          title="Sertifikat BIS untuk produsen India"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Pengenalan: Mengapa Sertifikasi BIS Penting
      </h2>

      <p className="service-left-content-paragraph">
        Sebagai contoh, seorang produsen dari Jerman yang telah menciptakan
        perangkat elektronik unik dan berencana menjualnya di Pasar India yang
        cepat. Perangkat ini unik, aman, dan juga telah mendapatkan persetujuan di
        Eropa. Namun, ketika perangkat dibawa ke pelabuhan di India, petugas
        bea cukai menahan perangkat tersebut. Pertanyaannya adalah, "Mengapa?" Jawabannya adalah,
        perangkat tersebut seharusnya memiliki sertifikasi BIS, yang merupakan bagian penting
        untuk menjual produk elektronik di India.
      </p>

      <p className="service-left-content-paragraph">
        Banyak produsen global dan India menghadapi kasus yang sama setiap
        tahun. Bagi konsumen India, tanda BIS pada produk bukan hanya sekadar
        logo, ini adalah tanda kepercayaan bahwa produk telah diuji untuk
        kualitas, keamanan, dan keandalan. Bagi bisnis, ini adalah pintu gerbang ke
        salah satu pasar terbesar di seluruh dunia.
      </p>

      <p className="service-left-content-paragraph">
        Artikel ini akan menjawab semua pertanyaan tentang sertifikasi BIS, termasuk
        kebutuhan, proses, manfaat, skema, biaya, dan sistem serta
        navigasinya yang tersedia untuk produsen asing maupun domestik.
      </p>

      <h2 className="service-left-content-heading-three">
        Apa itu Sertifikasi BIS untuk Produsen dan Importir?
      </h2>

      <p className="service-left-content-paragraph">
        Sertifikasi BIS adalah sertifikasi jaminan kualitas dan keamanan
        yang diberikan oleh Bureau of Indian Standards (BIS), badan
        sertifikasi nasional India di bawah Kementerian Urusan Konsumen. 
        Sertifikasi BIS memastikan bahwa suatu produk mematuhi Standar
        India (IS) dalam hal kinerja, keamanan, dan kualitas.
      </p>
      <p className="service-left-content-paragraph">
        Ketika suatu produk memenuhi persyaratan standar kualitas ini, Bureau
        of Indian Standards menerbitkan lisensi BIS atau sertifikat BIS, yang menandakan
        produk tersebut memenuhi syarat untuk membawa tanda ISI (untuk skema domestik) atau
        tanda CRS dengan nomor registrasi unik (di bawah Skema Registrasi Wajib
        BIS).
      </p>
      <p className="service-left-content-paragraph">
        Bagi banyak produsen dan importir India, memperoleh sertifikasi BIS
        adalah suatu keharusan. Ini mencakup berbagai produk termasuk peralatan
        listrik, produk semen dan baja, air minum kemasan,
        elektronik seperti ponsel, lampu LED, power bank, perhiasan logam mulia
        (melalui hallmarking) dan banyak lagi. Produsen dan
        importir produk wajib ini tidak dapat secara legal menjual atau mendistribusikan
        barang di India tanpa pengakuan BIS.
      </p>

      <h2 className="service-left-content-heading-three">
        Sejarah Singkat BIS di India
      </h2>

      <p className="service-left-content-paragraph">
        Bureau of Indian Standards (BIS) dibentuk pada tahun 1986 mengambil alih
        Indian Standards Institution (ISI) yang dibentuk pada tahun 1947. BIS sekarang
        dianggap sebagai penjaga kualitas standar di India dan telah
        menyelaraskan praktik mereka ke tingkat internasional dan membuat perubahan yang diperlukan
        untuk kondisi India.
      </p>

      <h3 className="service-left-content-heading-three">
        Pencapaian Luar Biasa
      </h3>

      <PointsListWithoutHeading
        points={[
          "Pada tahun 1947, ISI didirikan untuk mendukung sistem pengendalian kualitas setelah negara meraih kemerdekaan.",
          "Pada tahun 1955, tanda ISI diberikan, menjadi salah satu simbol kualitas paling terkenal di India.",
          "Pada tahun 1986, Undang-Undang BIS disahkan, menggantikan ISI dengan Bureau of Indian Standards.",
          "Pada tahun 2016 dan 2018, amendemen lebih lanjut memperkaya tanggung jawab BIS, membuat hallmarking dan sertifikasi produk lebih menyeluruh.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Saat ini, BIS menjamin keamanan, keandalan, dan standardisasi
        ribuan alat dan mesin untuk pengguna India di berbagai
        industri.
      </p>

      <h2 className="service-left-content-heading-three">
        Mengapa Sertifikasi BIS wajib di India?
      </h2>
      <p className="service-left-content-paragraph">
        Pasar India sangat besar, terus berubah, dan sensitif terhadap pergeseran
        harga. Namun, keterbukaan ini juga membuat pasar terpapar pada barang murah
        dan tidak aman. Dalam konteks ini, sertifikasi BIS berfungsi sebagai
        penghalang pelindung.
      </p>
      <PointsListWithoutHeading
        points={[
          "Keamanan Konsumen - melindungi orang dari potensi kecelakaan, masalah kesehatan, dan penipuan.",
          "Regulasi Pasar - memastikan bahwa produk yang tidak sesuai tidak memasuki pasar India.",
          "Kepercayaan dan Keyakinan - memperkuat keyakinan konsumen terhadap produk lokal dan internasional.",
          "Keselarasan Global - membantu perusahaan asing dalam menyelaraskan dengan struktur regulasi India.",
          "Persaingan yang Adil - setiap peserta pasar, terlepas dari ukurannya, dijamin bersaing murni berdasarkan kualitas.",
        ]}
      />
      <p className="service-left-content-paragraph">
        Sertifikasi BIS untuk air minum kemasan adalah contoh di mana
        kurangnya sertifikasi dapat menimbulkan masalah kesehatan. Standar yang sama kurangnya
        sertifikasi produk untuk pemanas, pemanggang roti, dan
        peralatan listrik lainnya dapat menyebabkan kebakaran. Oleh karena itu, dengan memiliki sertifikasi
        BIS, pemerintah memastikan tantangan-tantangan ini ditangani.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Proses</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Proses Sertifikasi BIS
      </h2>

      <p className="service-left-content-paragraph">
        Proses sertifikasi BIS mengikuti alur terstruktur:
      </p>

      <PointsListWithoutHeading
        points={[
          "Identifikasi Standar yang Relevan: Pilih Standar India (IS) yang berlaku.",
          "Pengajuan Aplikasi: File ke BIS dan sertakan dokumen terkait.",
          "Pengujian Produk: Pengujian dilakukan di laboratorium BIS yang disetujui.",
          "Inspeksi Pabrik: Fasilitas diinspeksi oleh petugas BIS.",
          "Lisensi BIS: sertifikat diberikan untuk evaluasi penilaian yang berhasil.",
          "Pengawasan: kepatuhan berkelanjutan bersama dengan perubahan lisensi adalah norma baru.",
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
        <span className="service-left-content-index-heading">Dokumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Dokumen yang Diperlukan untuk Sertifikasi BIS
      </h2>

      <p className="service-left-content-paragraph">
        Paket dokumentasi yang kuat memastikan pemrosesan yang lancar. Persyaratan
        utama meliputi:
      </p>

      <PointsListWithoutHeading
        points={[
          "Lisensi bisnis atau dokumen registrasi perusahaan.",
          "Diagram alir proses manufaktur.",
          "Daftar mesin dan peralatan.",
          "Detail produk dan spesifikasi teknis.",
          "Laporan pengujian dari laboratorium yang diakui BIS.",
          "Manual pengendalian kualitas.",
          "Sertifikat merek dagang.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Untuk produsen asing:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Penunjukan Perwakilan India yang Berwenang (AIR).",
          "Bukti perwakilan dan dokumen identitas.",
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
        <span className="service-left-content-index-heading">Biaya</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Biaya Sertifikasi BIS
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Komponen Biaya
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Detail
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya Aplikasi
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya satu kali, tidak dapat dikembalikan tergantung pada jenis produk
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya Pengujian
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Berdasarkan kompleksitas; dibayar ke laboratorium yang diakui BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya Lisensi Tahunan
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Dibayar setiap tahun untuk mempertahankan lisensi BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya Inspeksi/Audit Pabrik
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Dibebankan jika petugas BIS mengunjungi pabrik (perjalanan domestik atau
                internasional tambahan)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Biaya Konsultasi (jika berlaku)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Opsional, untuk bantuan kepatuhan end-to-end dari konsultan
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
        Peran Perwakilan India yang Berwenang (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Bagi produsen asing, Perwakilan India yang Berwenang (AIR) sangat
        penting.
      </p>

      <PointsListWithoutHeading
        points={[
          "Menangani semua komunikasi dengan BIS.",
          "Mengumpulkan dan mengajukan dokumen, kemudian memfasilitasi proses inspeksi.",
          "Memastikan kepatuhan terkait sertifikasi, sebelum, dan sesudah.",
          "Harus merupakan warga negara India atau organisasi dengan alamat lokal terdaftar.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Tanpa adanya AIR, memperoleh sertifikasi BIS untuk perusahaan
        asing adalah tidak mungkin.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kesimpulan</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Kesimpulan</h2>

      <p className="service-left-content-paragraph">
        Memiliki sertifikasi BIS adalah suatu kebutuhan untuk melakukan bisnis di India.
        Ini tidak lagi merupakan sertifikasi opsional dalam bisnis. Ini sangat penting untuk
        kesuksesan bisnis dan membangun kepercayaan. BIS sangat penting untuk keamanan dan
        kesuksesan di India. Bagi produsen dan importir, ini menawarkan lingkungan
        pengaturan bisnis yang mudah dan aman. Masalah hukum dan denda tidak lagi menjadi
        perhatian. Dengan tanda BIS, kepercayaan konsumen dijamin.
      </p>

      <p className="service-left-content-paragraph">
        India adalah salah satu ekonomi yang tumbuh paling besar di dunia dan mendapatkan
        akses untuk menjual di sana dapat membantu eksportir berkembang. Tidak peduli jika Anda adalah
        produsen di India atau di luar negeri, lisensi BIS diperlukan untuk
        memproduksi atau menjual produk di pasar India. Ini diperlukan, dan ini
        membuka prospek bisnis dengan populasi India yang terus bertumbuh. Ini adalah
        investasi dalam keamanan, kepercayaan konsumen, reputasi merek, kredibilitas, dan
        pertumbuhan jangka panjang.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Skema</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Skema Sertifikasi BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS memiliki berbagai skema sertifikasi yang dirancang untuk berbagai industri
        dan jenis produk. Masing-masing dirancang untuk memenuhi kebutuhan khusus
        industri dan produk tersebut.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Skema Sertifikasi Produsen Asing",
          "Skema Tanda ISI (Produsen Domestik)",
          "Skema X di bawah BIS India",
          "CRS – Skema Registrasi Wajib",
          "Skema Hallmarking (Perhiasan & Logam Mulia)",
          "Sertifikasi Eco Mark",
          "Skema Sertifikasi Sistem Manajemen (MSCS)",
          "LRS (Skema Pengakuan Laboratorium)",
        ]}
        linkMap={{
          "FMCS – Skema Sertifikasi Produsen Asing":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "Skema Tanda ISI (Produsen Domestik)":
            "a-guide-to-bis-certification-indian-bis",
          "Skema X di bawah BIS India":
            "indian-bis-certification-under-scheme-x",
          "CRS – Skema Registrasi Wajib":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        Skema Tanda ISI (Produsen Domestik)
      </h3>

      <p className="service-left-content-paragraph">
        Bagi produsen India, mendapatkan lisensi BIS adalah prasyarat untuk
        memastikan penjualan legal produk mereka di dalam negeri. 
        Sertifikasi ini diterbitkan oleh Bureau of Indian Standards (BIS) untuk
        mensertifikasi pemenuhan Standar India terkait tolok ukur kualitas, keamanan
        dan kinerja untuk produk. Ini mencakup audit
        pabrik, pengujian produk dan pemeriksaan kepatuhan dengan parameter BIS.
        Setelah produk lulus, produsen diizinkan untuk menempatkan tanda ISI
        pada produk. Tanda ini adalah merek dagang untuk produsen dan
        membantu pelanggan mengidentifikasi produk yang asli dan bersertifikat ISI.
      </p>

      <p className="service-left-content-paragraph">
        Terlepas dari apakah itu untuk elektronik, baja, semen, plastik, atau
        bahan konstruksi, memperoleh sertifikat BIS sangat penting untuk
        mendapatkan akses pasar. Tidak seperti mendapatkan kepercayaan konsumen, sertifikat BIS
        meningkatkan reputasi produsen India, memungkinkan
        mereka untuk berpartisipasi dalam kontrak pemerintah, dan membuka banyak
        peluang bisnis lainnya. Yang paling penting, tidak adanya sertifikasi
        BIS dapat memiliki konsekuensi yang merusak, mulai dari denda hukum
        dan penarikan produk hingga larangan penjualan di India. Oleh karena itu, kepatuhan
        BIS lebih dari sekadar persyaratan hukum, ini adalah strategi yang ditargetkan
        untuk memperluas dan mempertahankan kepercayaan konsumen.
      </p>

      <p className="service-left-content-paragraph">
        Bagi produsen India, skema tanda ISI adalah tanda paling bergengsi.
        Di bawah skema ini, produsen India diwajibkan untuk menguji
        produk mereka di fasilitas pengujian yang diakui BIS. Situs
        manufaktur tunduk pada inspeksi dan pengujian. Produk yang patuh diberikan
        persetujuan untuk menggunakan tanda ISI. Merupakan pelanggaran untuk menyuplai
        produk seperti semen, tabung LPG, kabel listrik, air minum
        kemasan dan lainnya, tanpa tanda ISI.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Skema Sertifikasi Produsen Asing
      </h3>

      <p className="service-left-content-paragraph">
        Skema Sertifikasi Produsen Asing (FMCS) adalah skema
        yang dikembangkan oleh Bureau of Indian Standards untuk perusahaan asing
        yang ingin memasuki Pasar India. Skema ini menjamin keamanan,
        kualitas, dan jaminan kinerja produk yang diproduksi di luar negeri
        yang mematuhi standar India yang diperlukan. Sesuai dengan FMCS, perusahaan
        asing yang ingin menjual produk di India harus terlebih dahulu memperoleh sertifikat
        Bureau of Indian Standards atau lisensi. Seperti produsen India,
        produsen asing juga diwajibkan untuk memperoleh lisensi BIS untuk menggunakan
        tanda ISI pada produk mereka. Tanda ISI yang diinginkan diberikan setelah
        evaluasi ekstensif yang mencakup pengujian pabrik dan sampel produk yang ketat
        terhadap Standar India.
      </p>

      <p className="service-left-content-paragraph">
        Produsen asing diwajibkan untuk menunjuk Perwakilan India
        yang Berwenang (AIR), yang bertanggung jawab untuk komunikasi dan
        koordinasi, sebagai titik kontak pertama dengan Bureau of Indian
        Standards (BIS) untuk skema ini. Ini mencakup pengajuan
        aplikasi, evaluasi kepatuhan mendalam, dan asumsi semua
        kewajiban yang diperlukan untuk mencapai kepatuhan dalam tenggat waktu. Sebagai
        hasil dari mengikuti pedoman FMCS, perusahaan asing dapat
        memasuki pasar India, serta memperoleh niat baik dengan pelanggan.
        Produk apa pun dengan tanda ISI menunjukkan tingkat kualitas, keamanan, dan
        jaminan keandalan yang tinggi di India.
      </p>

      <p className="service-left-content-paragraph">
        Tidak ada produk asing yang termasuk dalam kategori yang diatur
        diizinkan memasuki India tanpa sertifikasi FMCS.
      </p>

      <h3 className="service-left-content-heading-three">
        Skema X (Peraturan Teknis Omnibus)
      </h3>

      <p className="service-left-content-paragraph">
        Skema X, atau Peraturan Teknis Omnibus, adalah Skema sertifikasi BIS
        lain yang dirancang oleh Bureau of Indian Standards untuk membantu
        menyederhanakan prosedur kepatuhan industri di bidang mekanis dan
        listrik. Tidak seperti skema sertifikasi lainnya, Skema X
        berfokus pada mengurangi dokumentasi, penilaian, dan persetujuan sambil
        memastikan bahwa produk mematuhi Standar India. Produk dengan
        tanda standar memiliki kualitas dan keamanan yang luar biasa dan dapat dijual
        setelah menjalani pengujian tipe, inspeksi pabrik, dan
        sertifikasi sederhana dari persyaratan wajib.
      </p>

      <p className="service-left-content-paragraph">
        Skema X mencakup pedoman keamanan mesin berat dan peralatan listrik
        untuk produk seperti pompa, crane, transformator, mesin
        perkakas dan produk rekayasa berat lainnya. Ini adalah industri yang paling relevan
        dan semua di mana keandalan dan keamanan adalah kebutuhan. Skema X
        nyaman karena memperpendek waktu dan biaya sertifikasi BIS yang kompleks.
        Ini bertujuan untuk merampingkan proses kepatuhan untuk
        memfasilitasi izin lebih cepat untuk pemasaran dan reputasi yang ditingkatkan
        tanpa mengorbankan standar kualitas dan keamanan. Reputasi yang abadi dan
        tradisional dari Bureau of Indian Standards memungkinkan perdagangan internasional
        yang lebih mudah, sangat diperlukan bagi perusahaan untuk memenuhi persyaratan kepatuhan
        dan meningkatkan daya saing.
      </p>

      <p className="service-left-content-paragraph">
        Skema X BIS wajib untuk mengakses industri mesin berat India.
        Skema baru ini penting untuk peningkatan persaingan pasar, inovasi
        dan kepatuhan terhadap peraturan yang disederhanakan melalui
        struktur yang disederhanakan namun kuat ini.
      </p>

      <h3 className="service-left-content-heading-three">
        Skema Registrasi Wajib (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Bureau of Indian Standards (BIS) telah mengembangkan program sertifikasi BIS
        yang disebut Skema Registrasi Wajib (CRS) yang bertujuan untuk
        mengatur produk IT dan elektronik di India. Ini berfokus pada menilai
        keamanan dan kualitas produk berisiko tinggi seperti lampu LED, ponsel,
        laptop, power bank, dan elektronik konsumen lainnya terhadap
        Standar India. CRS, berbeda dengan skema ISI, tidak menerbitkan
        tanda ISI, tetapi produk yang disertifikasi, sesuai dengan skema, membawa
        tanda CRS dengan nomor registrasi unik. Semua produk elektronik dan IT
        perlu diuji di laboratorium yang diakui BIS dan
        terdaftar secara formal dengan BIS CRS, digunakan untuk memastikan kepatuhan sebelum mereka
        dapat dijual atau diimpor ke India.
      </p>

      <p className="service-left-content-paragraph">
        Skema ini sangat penting untuk melindungi konsumen India dari produk elektronik yang tidak aman,
        di bawah standar, atau palsu, terutama dalam kasus
        pasar digital yang berkembang pesat. Baik produsen India maupun asing
        perlu memperoleh sertifikasi CRS. Perusahaan asing harus menunjuk
        Perwakilan India yang Berwenang AIR untuk memastikan kepatuhan. BIS
        terus memperbarui daftar produk yang tercakup di bawah CRS untuk
        memasukkan produk dan teknologi baru serta masalah keamanan yang muncul. Bagi
        produsen, memperoleh registrasi BIS di bawah CRS adalah keuntungan
        tambahan karena membantu dalam kepatuhan regulasi dan juga meningkatkan
        kepercayaan pelanggan, reputasi perusahaan, dan akses pasar di
        industri elektronik di India.
      </p>

      <h3 className="service-left-content-heading-three">Skema Hallmarking</h3>

      <p className="service-left-content-paragraph">
        Di India, hallmarking perhiasan emas dan perak adalah wajib di bawah
        Skema Hallmarking dan diatur oleh Bureau of Indian Standards
        (BIS) yang menjamin kemurnian dan keaslian perhiasan.
        Artikel Logam Mulia diuji di Pusat Assaying dan
        Hallmarking (AHC) yang disetujui BIS dan kemudian dicap dengan tanda hallmark. Proses
        ini hanya selesai jika artikel memenuhi Standar India
        yang ditetapkan di awal. Perhiasan harus terlebih dahulu memperoleh lisensi BIS yang
        memungkinkan mereka untuk menjual perhiasan berhallmark. Ini adalah satu-satunya cara untuk melakukannya
        secara legal. Perhiasan wajib menjalani dan menyelesaikan pengujian produk,
        audit BIS, dan pemantauan kepatuhan berkelanjutan untuk menjual perhiasan
        berhallmark. Proses ini, pada akhirnya, melindungi konsumen dan memastikan
        kemurnian, berat dan kualitas serta membatasi malpraktek dan penipuan
        di pasar perhiasan.
      </p>

      <p className="service-left-content-paragraph">
        Bagi konsumen India, emas dan perak bukan hanya perhiasan tetapi juga
        investasi besar, yang membuat kepercayaan dan transparansi sangat penting. 
        Hallmarking perhiasan adalah tanda jaminan bagi warga biasa di
        negara bahwa setiap potongan perhiasan yang dijual telah melalui pengujian
        ekstensif terhadap berbagai tolok ukur nasional dan praktik perdagangan yang adil.
        Perhiasan dapat memamerkan kredibilitas dan reputasi pasar mereka dengan
        hallmarking perhiasan. Ketidakmampuan untuk mematuhi aturan yang ditetapkan membawa
        hukuman yang dapat mencakup penangguhan lisensi. Untuk hallmarking
        di bawah BIS, ini berfungsi sebagai pemenuhan kewajiban berbasis prinsip dan legal.
        Ini tidak hanya meningkatkan kepuasan konsumen tetapi juga
        meningkatkan pasar perhiasan India secara keseluruhan. Ini juga berlaku
        untuk pengecer yang lebih kecil maupun produsen skala besar.
      </p>

      <h3 className="service-left-content-heading-three">
        Sertifikasi Eco Mark
      </h3>

      <p className="service-left-content-paragraph">
        Eco Mark adalah skema pengakuan yang berpusat pada inovasi yang dibuat oleh
        Bureau of Indian Standards (BIS) yang bertujuan untuk promosi barang
        ramah lingkungan. Tidak seperti sertifikasi tradisional yang berkonsentrasi
        terutama pada parameter keamanan dan kualitas, Eco Mark diberikan
        kepada barang yang sesuai dengan Standar India dan yang menunjukkan setidaknya beberapa
        tingkat penurunan dampak lingkungan yang merugikan selama satu atau lebih
        dari berbagai tahap siklus hidup barang. Sertifikasi Eco Mark
        diberikan hanya setelah pengujian yang cukup dan pembuktian
        kriteria - kepatuhan yang mencakup tingkat emisi, non-toksisitas,
        tingkat biodegradasi, kapasitas untuk didaur ulang dan interaksi keseluruhan
        dengan sistem. Eco Mark, sama seperti tanda ISI, adalah lambang
        jaminan dari pemerintah yang telah diberikan status
        tanda sertifikasi, meskipun dengan tujuan keberlanjutan lingkungan yang lebih jelas.
      </p>

      <p className="service-left-content-paragraph">
        Lisensi BIS dengan Eco Mark mensertifikasi bahwa suatu perusahaan terlibat dalam
        manufaktur yang bertanggung jawab dan peduli terhadap lingkungan. Ini memastikan
        kepatuhan terhadap hukum dan menciptakan keuntungan kompetitif dengan
        konsumen yang protektif dan bisnis yang berorientasi keberlanjutan. Eco Mark
        membantu industri untuk mempercayai dan mengadopsi praktik ramah lingkungan dan untuk
        konsumen untuk mempercayai bahwa produk yang mereka beli aman dan
        bertanggung jawab terhadap lingkungan. Eco Mark mendukung visi India untuk
        perlindungan kualitas yang ditingkatkan dengan perlindungan lingkungan di bawah BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Skema Sertifikasi Sistem Manajemen (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        Skema Sertifikasi Sistem Manajemen (MSCS) yang diinisiasi oleh
        Bureau of Indian Standards (BIS) adalah prosedur bertahap yang mengevaluasi
        dan mengakui perusahaan terkait untuk implementasi sistem manajemen yang
        diterima dan diakui secara internasional. Kerangka kerja MSCS terdiri dari
        Standar ISO seperti ISO 9001 Manajemen Kualitas, ISO 14001 Manajemen Lingkungan,
        ISO 45001 Sistem Manajemen Kesehatan dan Keselamatan Kerja
        dan lainnya. MSCS mensertifikasi perusahaan untuk operasi legal,
        konsistensi, dan perbaikan berkelanjutan dari operasi. Perusahaan yang disertifikasi
        menjalani berbagai penilaian dan audit yang membantu mereka membangun
        kepercayaan di antara pelanggan, regulator, dan pemangku kepentingan yang
        memperkuat jaminan keamanan, kualitas, dan keberlanjutan.
      </p>

      <p className="service-left-content-paragraph">
        BIS adalah badan standar nasional India dan merupakan badan sertifikasi
        untuk peningkatan reputasi dan kredibilitas organisasi
        di dalam maupun di luar India. MSCS selain mendorong akuntabilitas
        melalui pengawasan berkala dan resertifikasi juga membebaskan
        bisnis untuk secara aktif mendukung program yang dipimpin publik seperti Make in India dan
        Atmanirbhar Bharat. Selain kewajiban hukum, skema ini juga membantu dalam
        menumbuhkan budaya integritas, efisiensi dan perdagangan yang adil. MSCS
        mendorong perdagangan dan investasi oleh perusahaan yang disertifikasi dan BIS
        memainkan peran penting dalam pengembangan ekosistem kualitas
        negara.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Skema Pengakuan Laboratorium
      </h3>

      <p className="service-left-content-paragraph">
        Di bawah Bureau of Indian Standards (BIS), Skema Pengakuan Laboratorium
        (LRS) adalah bagian integral dari sistem yang menjamin keandalan
        dan kompetensi keseluruhan laboratorium yang menguji dan mensertifikasi produk
        untuk persetujuan BIS. Laboratorium semacam itu dinilai secara kritis pada berbagai
        atribut yang mencakup pengetahuan teknis, kualitas tenaga kerja,
        infrastruktur, dan kompetensi keseluruhan serta kepuasan laboratorium
        dengan standar ISO/ IEC 17025. Laboratorium ini, setelah disetujui,
        diizinkan untuk melakukan pengujian pada produk yang penilaian konformitasnya
        dilakukan sebagai bagian dari berbagai program sertifikasi BIS seperti
        Skema Tanda ISI dan Skema Registrasi Wajib (CRS). Sudah
        jelas bahwa bagi produsen, khususnya bagi importir dan eksportir,
        laporan yang diperoleh dari laboratorium yang disetujui LRS adalah persyaratan kritis
        untuk mencapai sertifikat BIS yang merupakan persyaratan hukum untuk produk tertentu.
      </p>

      <p className="service-left-content-paragraph">
        LRS memberdayakan sistem jaminan India dengan mempertahankan kesetaraan dalam
        hasil pengujian dan memastikan bahwa semua hasil konsisten dan
        di-benchmark secara global, sambil mengakreditasi hanya laboratorium yang andal dan solid.
        Untuk menjaga integritas dan transparansi, BIS melakukan audit
        rutin, uji kompetensi, dan pengawasan laboratorium skematik yang diakui.
        Pengakuan sertifikasi ini memungkinkan BIS untuk meningkatkan kepercayaan
        dari konsumen sambil membuat proses sertifikasi lebih efisien bagi
        industri, karena hanya produk yang aman, patuh, dan berkualitas tinggi yang akan
        ditawarkan di pasar India. Bagi organisasi yang bertujuan untuk menerima sertifikasi
        BIS, kolaborasi dengan laboratorium yang disetujui LRS adalah yang paling
        penting untuk mencapai kepatuhan dan akses pasar.
      </p>

      <h3 className="service-left-content-heading-three">
        Produk yang Memerlukan Sertifikasi BIS
      </h3>

      <p className="service-left-content-paragraph">
        Sertifikasi BIS berlaku untuk berbagai macam produk. Contohnya
        termasuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Listrik & Elektronik – Lampu LED, ponsel, adapter, laptop.",
          "Bahan Konstruksi – Semen, batang baja, produk struktural.",
          "Barang Konsumen – Air minum kemasan, tabung gas memasak.",
          "Perhiasan & Logam Mulia – Artikel emas dan perak di bawah hallmarking.",
          "Peralatan Industri – Pompa, transformator, mesin perkakas.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Daftar ini terus berkembang seiring munculnya risiko dan teknologi baru.
      </p>

      <h3 className="service-left-content-heading-three">
        Manfaat Sertifikasi BIS
      </h3>

      <p className="service-left-content-paragraph">
        Bagi perusahaan, sertifikat BIS menawarkan lebih dari sekadar kepatuhan
        terhadap hukum.
      </p>

      <PointsListWithoutHeading
        points={[
          "Kepatuhan hukum: tidak ada denda, tidak ada larangan, tidak ada penyitaan.",
          "Akses pasar: diperlukan untuk menjual produk yang diatur di India.",
          "Kepercayaan konsumen: dibangun dengan tanda ISI yang dikenal baik sebagai tanda bukti.",
          "Keuntungan kompetitif: karena perusahaan yang disertifikasi mudah dibedakan dari pesaing yang tidak disertifikasi.",
          "Fasilitasi ekspor: banyak pembeli internasional memahami dan menghargai sertifikasi BIS.",
          "Partisipasi dalam Tender: banyak proyek pemerintah memberikan kontrak untuk barang yang bersertifikat BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Apa itu sertifikasi BIS di India?",
      answer:
        "Sertifikasi BIS adalah sertifikasi jaminan kualitas yang dikeluarkan oleh Bureau of Indian Standards (BIS) untuk memastikan bahwa produk mematuhi standar India untuk keamanan, kinerja, dan kualitas. Ini wajib untuk berbagai kategori produk dan membantu dalam perlindungan konsumen dan kepatuhan regulasi.",
    },
    {
      question: "Mengapa saya memerlukan sertifikat BIS?",
      answer:
        "Sertifikat BIS sangat penting untuk secara legal memproduksi, mengimpor, mendistribusikan, atau menjual produk tertentu di India. Ini meyakinkan konsumen bahwa produk memenuhi pedoman keamanan dan kualitas standar India.",
    },
    {
      question: "Apa itu tanda ISI di bawah sertifikasi BIS?",
      answer:
        "Tanda ISI adalah simbol sertifikasi yang diberikan di bawah skema sertifikasi BIS. Ini menunjukkan bahwa produk mematuhi standar India dan telah disertifikasi oleh BIS India melalui pengujian dan registrasi yang tepat.",
    },
    {
      question: "Siapa yang mengeluarkan lisensi BIS di India?",
      answer:
        "Lisensi BIS dikeluarkan oleh Bureau of Indian Standards (BIS India), badan standar nasional di bawah Kementerian Urusan Konsumen, Pangan dan Distribusi Publik.",
    },
    {
      question: "Apa saja jenis skema sertifikasi BIS yang berbeda?",
      answer:
        "Skema sertifikasi BIS utama meliputi skema tanda ISI, Skema Registrasi Wajib (CRS), Skema Sertifikasi Produsen Asing (FMCS), Hallmarking untuk perhiasan, sertifikasi Eco Mark, dan apa itu Skema X untuk mesin industri.",
    },
    {
      question: "Apa itu Skema X di bawah sertifikasi BIS?",
      answer:
        "Skema X adalah proses sertifikasi BIS yang disederhanakan yang berlaku untuk produk industri seperti pompa, transformator, alat mesin, dan crane. Ini memastikan persetujuan yang lebih cepat tanpa mengorbankan kepatuhan terhadap standar India.",
    },
    {
      question: "Produk mana yang memerlukan sertifikasi BIS di India?",
      answer:
        "Produk seperti peralatan listrik, elektronik, peralatan dapur, semen, baja, perhiasan emas, ponsel, dan transformator memerlukan sertifikasi BIS sesuai dengan mandat BIS India.",
    },
    {
      question: "Apakah registrasi BIS wajib untuk semua produk?",
      answer:
        "Tidak, registrasi BIS hanya wajib untuk produk yang tercantum dalam skema sertifikasi wajib. Namun, sertifikasi BIS sukarela juga tersedia untuk meningkatkan kredibilitas produk.",
    },
    {
      question: "Berapa lama lisensi BIS berlaku?",
      answer:
        "Lisensi BIS biasanya berlaku selama satu hingga dua tahun dan harus diperpanjang sebelum berakhirnya untuk melanjutkan penggunaan tanda ISI atau mempertahankan status registrasi BIS.",
    },
    {
      question: "Apa saja langkah-langkah untuk mendapatkan sertifikasi BIS di India?",
      answer:
        "Proses sertifikasi BIS mencakup mengidentifikasi standar India yang berlaku, mengajukan aplikasi, pengujian produk, inspeksi pabrik, dan penerbitan sertifikat BIS setelah persetujuan.",
    },
    {
      question: "Bisakah produsen asing mengajukan lisensi BIS?",
      answer:
        "Ya, di bawah Skema Sertifikasi Produsen Asing (FMCS), perusahaan asing dapat mengajukan lisensi BIS untuk menjual produk di India. Mereka harus menunjuk Perwakilan India yang Berwenang (AIR).",
    },
    {
      question: "Apa peran AIR dalam sertifikasi BIS?",
      answer:
        "AIR (Perwakilan India yang Berwenang) bertindak sebagai penghubung antara produsen asing dan BIS India. Mereka bertanggung jawab atas dokumentasi, komunikasi, dan kepatuhan dengan persyaratan sertifikasi BIS.",
    },
    {
      question: "Bagaimana cara saya mengajukan registrasi BIS secara online?",
      answer:
        "Anda dapat mengajukan registrasi BIS secara online melalui portal resmi BIS. Prosesnya melibatkan pengiriman formulir, mengunggah dokumen, laporan uji, dan pembayaran biaya.",
    },
    {
      question: "Dokumen apa yang diperlukan untuk sertifikat BIS?",
      answer:
        "Dokumen yang diperlukan meliputi lisensi bisnis, spesifikasi produk, proses manufaktur, laporan uji lab, tata letak pabrik, manual kualitas, dan formulir otorisasi (untuk produsen asing).",
    },
    {
      question: "Berapa biaya sertifikasi BIS di India?",
      answer:
        "Biaya sertifikasi BIS tergantung pada jenis produk, persyaratan pengujian, jenis skema (ISI, CRS, FMCS), dan apakah pemohon domestik atau asing. Biaya mencakup biaya aplikasi, biaya pengujian, dan biaya inspeksi.",
    },
    {
      question: "Apakah tanda ISI wajib untuk semua produk yang bersertifikat BIS?",
      answer:
        "Tidak, hanya produk di bawah skema ISI yang diwajibkan untuk membawa tanda ISI. Produk di bawah skema CRS atau Hallmarking mengikuti protokol pelabelan yang berbeda sesuai dengan norma registrasi BIS.",
    },
    {
      question: "Bisakah saya mendapatkan sertifikasi BIS untuk produk ramah lingkungan?",
      answer:
        "Ya, produk yang memenuhi standar lingkungan dapat memperoleh sertifikasi BIS di bawah skema Eco Mark, yang memastikan kepatuhan dengan standar India untuk keamanan lingkungan.",
    },
    {
      question:
        "Apa perbedaan antara sertifikasi BIS dan registrasi BIS?",
      answer:
        "Sertifikasi BIS umumnya mengacu pada persetujuan di bawah skema ISI, FMCS, atau Hallmarking, sedangkan registrasi BIS umumnya dikaitkan dengan skema CRS untuk produk elektronik.",
    },
    {
      question: "Apa itu Skema Registrasi Wajib (CRS)?",
      answer:
        "CRS adalah program registrasi BIS untuk barang IT dan elektronik seperti lampu LED, ponsel, dan power bank. Ini memastikan kepatuhan produk dengan standar India yang terkait keamanan.",
    },
    {
      question: "Apakah tanda ISI dan sertifikat BIS berarti hal yang sama?",
      answer:
        "Tidak persis. Tanda ISI adalah simbol yang diberikan kepada produk yang disertifikasi di bawah skema sertifikasi BIS. Sertifikat BIS adalah dokumen hukum yang dikeluarkan kepada produsen.",
    },
    {
      question: "Bisakah satu lisensi BIS mencakup beberapa produk?",
      answer:
        "Tidak, lisensi BIS terpisah diperlukan untuk setiap jenis produk dan setiap lokasi manufaktur, bahkan jika produknya serupa.",
    },
    {
      question: "Apa yang terjadi jika saya menjual produk tanpa sertifikasi BIS?",
      answer:
        "Menjual produk yang memerlukan sertifikasi BIS tanpa lisensi BIS yang valid adalah ilegal di India dan dapat menyebabkan denda, penarikan produk, atau larangan.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan sertifikasi BIS?",
      answer:
        "Proses sertifikasi BIS umumnya memakan waktu 30 hingga 90 hari, tergantung pada jenis produk, persyaratan pengujian, dan apakah pemohon domestik atau asing.",
    },
    {
      question: "Apakah sertifikasi BIS diterima secara global?",
      answer:
        "Meskipun sertifikasi BIS spesifik untuk India, ini meningkatkan kredibilitas global dengan menunjukkan kepatuhan terhadap standar India yang ketat. Beberapa produk yang bersertifikat BIS juga diterima di bawah perjanjian saling pengakuan.",
    },
    {
      question: "Seberapa sering saya perlu memperpanjang lisensi BIS saya?",
      answer:
        "Lisensi BIS harus diperpanjang setiap tahun atau setiap dua tahun. Produsen harus mempertahankan kepatuhan dengan standar India dan lulus audit pengawasan untuk memperpanjang sertifikat BIS mereka.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Tanya Jawab – Sertifikasi BIS di India
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

const BISCertificationServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                alt="BISCRS"
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
              Sertifikat Registrasi BIS
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
              TANDA ISI (BIS) untuk Produsen India
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
