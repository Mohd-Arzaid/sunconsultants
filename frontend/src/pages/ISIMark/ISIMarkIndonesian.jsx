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

const ISIMarkIndonesian = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableIndonesian />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterIndonesian />
    </div>
  );
};

export default ISIMarkIndonesian;

const ISIMarkMetaTags = () => {
  const title = "Proses Sertifikasi BIS ISI Mark, Dokumen, Biaya";
  const description =
    "Sertifikasi tanda ISI yang dikeluarkan oleh Biro Standar India diberikan kepada produk yang menjalani pengujian dan inspeksi ketat untuk memenuhi standar dan kepatuhan yang diperlukan";
  const keywords =
    "Tanda ISI, Sertifikasi Tanda ISI, Sertifikat Tanda ISI, Sertifikasi ISI, Sertifikat ISI, Pendaftaran Tanda ISI, Lisensi ISI, Tanda BIS ISI, Sertifikasi Tanda BIS ISI";
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
                    <Link to="/">Beranda</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Proses Sertifikasi BIS ISI Mark, Dokumen, Biaya
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
              Keahlian Bersertifikat
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Sertifikasi BIS untuk
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Produsen India
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Sebagai bagian dari visi 'Make in India', sertifikasi BIS membantu
            produsen memastikan keselamatan, kualitas, dan kepatuhan produk. Dapatkan
            sertifikasi dan kembangkan merek Anda dengan percaya diri.
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
    if (path.includes("/id/sertifikasi-bis-isi-mark"))
      return "ISI Mark - Indonesian Page";
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
        error.response?.data?.message || "Ada yang salah";
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
    overview: "Ikhtisar",
    requirement: "Persyaratan",
    documents: "Dokumen",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentIndonesian />
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
        <span className="service-left-content-index-heading">Ikhtisar</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Sertifikasi BIS ISI Mark untuk Produsen India
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Skema Sertifikasi BIS India"
          title="Skema Lisensi BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        Dalam dinamika pasar saat ini, reputasi merek di pasar saat ini, kepercayaan konsumen memiliki
        pentingnya yang signifikan. Setiap konsumen
        menginginkan jaminan mengenai keselamatan dan keandalan suatu produk, bersama
        dengan langkah-langkah kontrol kualitas yang diambil selama pembuatannya. Biro
        Standar India menangani masalah dan kekhawatiran ini dengan memastikan
        tolok ukur kualitas untuk produk yang dijual di India. Sertifikasi Tanda ISI
        adalah salah satu sertifikat paling terpercaya yang diberikan di bawah
        BIS.
      </p>
      <p className="service-left-content-paragraph">
        Untuk produsen domestik, memperoleh Sertifikasi BIS ISI Mark bukan
        hanya tentang memperoleh sertifikat kepatuhan, tetapi juga tentang
        mendapatkan penerimaan pasar, kepercayaan merek dan perlindungan hukum. Tanda
        ISI diakui secara universal dan memperkuat kredibilitas di India
        ketika menyangkut produksi peralatan listrik, bahan konstruksi,
        bahan kimia atau barang-barang rumah tangga.
      </p>
      <p className="service-left-content-paragraph">
        Artikel ini bertujuan untuk menjelajahi Sertifikasi BIS ISI Mark untuk produsen
        domestik, secara khusus berfokus pada pentingnya, persyaratan,
        keuntungan, dan seluruh proses perolehan sertifikat.
      </p>
      <h2 className="service-left-content-heading-three">
        Memahami BIS dan Perannya
      </h2>
      <p className="service-left-content-paragraph">
        Biro Standar India (BIS) adalah badan Standardisasi dan
        Sertifikasi Nasional di India di bawah Kementerian Urusan Konsumen dan
        Publik. Sebagai badan pengatur, ia menetapkan dan mempertahankan standar
        kualitas dan penegakannya di berbagai industri sebagaimana diarahkan di bawah
        Undang-Undang BIS tahun 1986.
      </p>
      <p className="service-left-content-paragraph">
        BIS bertindak sebagai otoritas verifikasi pihak ketiga yang mengaudit apakah
        suatu produk memenuhi standar India tertentu. Sertifikasi BIS
        memberikan kepada produsen bukan hanya persyaratan hukum, tetapi juga
        tanda persetujuan kepercayaan dan kredibilitas dari pelanggan.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Apa itu Tanda ISI?
      </h2>
      <p className="service-left-content-paragraph">
        Sertifikasi tanda ISI (tanda Institut Standar India) adalah
        tanda sertifikasi tertua dan paling diakui dari Biro
        Standar India (BIS) di India. Sertifikasi ISI berfokus pada
        konfirmasi bahwa suatu produk memenuhi persyaratan dasar standar kualitas
        yang ditetapkan oleh BIS sehubungan dengan keselamatan, kualitas, kinerja dan
        keandalan.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Produk yang membawa tanda ISI telah menyelesaikan pengujian laboratorium menyeluruh dan
        inspeksi pabrik. Ini menjamin bahwa prosedur kontrol kualitas yang tepat
        sedang diimplementasikan dan diikuti selama tahap
        produksi. Konsumen dapat memperoleh dan menggunakan produk yang aman dan andal
        yang diberi label dengan tanda ISI. Tanda ISI adalah alat untuk kepercayaan antara
        konsumen dan produsen dan tanda ini melampaui standar.
      </p>
      <p className="service-left-content-paragraph">
        Beberapa contoh produk yang memerlukan sertifikasi ISI wajib adalah
        sebagai berikut:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Peralatan dari semua jenis (Setrika listrik, pemanas listrik, kabel listrik, lemari es, unit pendingin udara)",
          "Semen dan baja, pipa UPVC, sepatu plastik, dan produk plastik lainnya",
          "Pupuk, bahan kimia, dan asam",
          "Helm keselamatan dan kacamata, serta beberapa jenis mainan anak-anak",
        ]}
      />
      <p className="service-left-content-paragraph">
        Ada lebih dari 650 produk yang memerlukan sertifikasi BIS wajib
        untuk menggunakan tanda standar (Tanda ISI) menurut Skema I
        Jadwal I dari Biro Standar India. Produk yang dikelola di bawah
        skema sertifikasi wajib tidak dapat diproduksi, diimpor atau dijual
        di pasar India tanpa tanda ISI. Daftar produk wajib
        dapat diakses di{" "}
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
          tautan Daftar Produk
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Apa Perbedaan Antara Sertifikasi BIS dan Tanda ISI?
      </h2>
      <p className="service-left-content-paragraph">
        Meskipun sering membingungkan dan digunakan sebagai sinonim, Sertifikasi BIS dan Tanda ISI
        memiliki definisi dan tujuan tertentu:
      </p>
      <p className="service-left-content-paragraph">
        <strong>Sertifikasi BIS :</strong> Proses pemberian persetujuan kepada
        suatu produk setelah memastikan bahwa produk tersebut memenuhi Standar India yang diperlukan. Ini
        adalah kerangka di mana penilaian kesesuaian dikelola.
      </p>

      <p className="service-left-content-paragraph">
        <strong>Tanda ISI :</strong> Simbol kualitas atau tanda standar yang
        diberikan kepada suatu produk setelah sertifikasi BIS diperoleh. Ini
        menunjukkan bahwa produk telah sepenuhnya disertifikasi dan memenuhi
        Standar India yang diperlukan.
      </p>
      <p className="service-left-content-paragraph">
        Dengan cara ini, ISI merupakan komitmen sertifikasi fisik,
        sementara sertifikasi BIS menawarkan kerangka administratif yang diperlukan.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Mengapa Sertifikasi BIS ISI Mark Penting untuk Produsen?
      </h2>

      <p className="service-left-content-paragraph">
        Sertifikasi BIS ISI Mark memiliki nilai signifikan untuk produsen
        domestik, seperti:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Jaminan Kualitas:</strong> Tanda ISI menandakan bahwa produk telah
        lulus pengujian dan inspeksi yang ketat, sehingga mempertahankan standar
        kualitas tertinggi yang ditetapkan. Ini, pada gilirannya, meningkatkan keandalan
        dan keandalan produk sambil meminimalkan kemungkinan cacat.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Kepercayaan Konsumen:</strong> Produk yang diberi label dengan tanda ISI
        umumnya dianggap aman dan efektif. Ini
        berkontribusi pada loyalitas merek, dan dengan demikian merek yang lebih kuat dan terpercaya.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Akses ke Pasar:</strong> Pasar India memiliki
        banyak item yang dilarang keras jika seseorang tidak memiliki
        sertifikat ISI yang valid. Dalam kasus seperti itu, tanda ISI berfungsi sebagai
        gerbang untuk memfasilitasi penjualan.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Mendapatkan Penerimaan Pasar:</strong> Dalam lingkungan yang sangat
        kompetitif, produk yang disertifikasi ISI dianggap memiliki
        reputasi positif, sehingga memiliki keunggulan kompetitif yang lebih tinggi dibandingkan
        dengan yang tidak disertifikasi.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Kepatuhan Regulasi:</strong> Standar BIS sedemikian rupa sehingga
        produsen yang produknya selaras dengan standar tersebut memiliki operasi
        yang lancar, tanpa hambatan, bebas dari kompleksitas hukum.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Promosi Ekspor:</strong> Produk yang disertifikasi ISI
        dan dengan demikian memiliki reputasi merek yang kuat lebih cenderung disukai
        oleh pasar asing karena persepsi bahwa produk tersebut berkualitas tinggi dan
        memenuhi standar global.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Keselamatan Konsumen:</strong> Produk apa pun dengan sertifikasi ISI
        menjamin keselamatan konsumen dari potensi bahaya,
        kecelakaan, atau kinerja produk yang buruk.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Kontrol Kualitas:</strong> Kebutuhan untuk melakukan
        pemeriksaan dan pemeriksaan konstan menjamin bahwa produsen dapat
        mencapai kualitas konstan untuk semua batch yang diproduksi.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Persyaratan</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Persyaratan Dasar untuk Sertifikasi BIS ISI Mark
      </h2>
      <p className="service-left-content-paragraph">
        Untuk memperoleh sertifikasi BIS, produsen domestik harus memenuhi
        kewajiban utama berikut.
      </p>
      <PointsListWithoutHeading
        points={[
          "Harus ada kepatuhan terhadap Spesifikasi Standar India (ISS).",
          "Lisensi dikeluarkan dan diberikan hanya kepada produsen, bukan kepada distributor atau pengecer.",
          "Ada kebutuhan untuk mengajukan aplikasi terpisah untuk setiap lokasi pabrik untuk sertifikasi.",
          "Pabrik harus memiliki personel yang memenuhi syarat dan laboratorium pengujian internal.",
          "Semua mode produksi harus dilakukan di unit produksi yang sama dari bahan baku hingga pengemasan akhir (Outsourcing harus diotorisasi terlebih dahulu oleh BIS).",
          "Panduan teknis disediakan dalam Manual Produk yang merinci standar untuk inspeksi, pengujian, dan dokumentasi yang diperlukan.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Proses Sertifikasi BIS ISI untuk Produsen Domestik
      </h2>
      <p className="service-left-content-paragraph">
        Mengamankan sertifikasi BIS adalah proses multi-langkah. Ada dua
        prosedur utama untuk mendekati proses sertifikasi BIS: Prosedur
        Normal dan Prosedur Sederhana.{" "}
      </p>
      <h3 className="service-left-content-heading-three">
        1. Prosedur Normal (60-65 Hari)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Produsen mendirikan laboratorium internal dan membawa produk ke kepatuhan dengan Standar India.",
          "Aplikasi beserta dokumentasi yang diperlukan diserahkan.",
          "Inspeksi Pabrik oleh pejabat BIS.",
          "Pengujian produk di laboratorium yang disetujui BIS.",
          "Lisensi diberikan jika semua kondisi terpenuhi.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. Prosedur Sederhana (35-40 Hari)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Produsen mengirimkan dokumen produk yang telah diuji sebelumnya dari laboratorium yang diakui BIS.",
          "Aplikasi beserta biaya diserahkan.",
          "Pemeriksaan dokumen dan inspeksi pabrik.",
          "Pengujian akhir dan Pemberian lisensi dalam periode 35-40 hari.",
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
          Dokumen yang Diperlukan
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Dokumen yang Diperlukan untuk Sertifikasi Tanda ISI
      </h2>
      <p className="service-left-content-paragraph">
        Dokumen berikut harus diserahkan oleh Produsen:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Formulir Aplikasi yang Lengkap (Formulir V atau VI tergantung pada skema)",
          "2. Sertifikat Pendaftaran Bisnis (mis., Pendaftaran Udyam, MSME, Sertifikat GST)",
          "3. Lisensi Pabrik atau Lisensi Perdagangan Kotamadya",
          "4. Daftar Mesin Produksi",
          "5. Flowchart Proses Produksi",
          "6. Rencana Tata Letak Tempat Produksi",
          "7. Detail Staf Kontrol Kualitas Internal",
          "8. Detail Peralatan Pengujian",
          "9. Perjanjian Kolaborasi Teknis (jika berlaku)",
          "10. Surat Kuasa/Pengesahan",
          "11. Surat Otorisasi Nama Merek (jika mengajukan dengan merek berbeda)",
          "12. Laporan Uji dari laboratorium yang disetujui BIS",
          "13. Faktur Pengadaan Bahan Baku",
          "14. Fotografi Produk dan Kemasan",
          "15. Deklarasi Kesesuaian terhadap Standar",
          "16. Pernyataan Mengenai Produk Non-Standar",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Manfaat Sertifikasi BIS ISI Mark
      </h3>
      <p className="service-left-content-paragraph">
        Untuk produsen India, memperoleh Sertifikasi BIS ISI Mark
        memberikan keuntungan spesifik:
      </p>
      <PointsListWithoutHeading
        points={[
          "Otorisasi Nasional: Produsen memiliki izin untuk menjual produk yang disertifikasi di seluruh negeri.",
          "Menghindari Penalti: Mematuhi standar BIS menghindari denda besar dan masalah hukum.",
          "Pendapatan yang Meningkat: Permintaan lebih tinggi untuk produk yang disertifikasi.",
          "Potensi Ekspor: Pasar asing tertentu mengidentifikasi ISI sebagai standar keunggulan.",
          "Fokus pada Kualitas: Perusahaan yang Disertifikasi menunjukkan komitmen terhadap prinsip produksi berkualitas.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Pencabutan Lisensi BIS{" "}
      </h3>
      <p className="service-left-content-paragraph">
        Lisensi untuk menyertifikasi adalah kepemilikan eksklusif dari otoritas BIS dan itu
        dapat membatalkan lisensi tersebut jika:
      </p>
      <PointsListWithoutHeading
        points={[
          "Ada penurunan kualitas produk yang telah disertifikasi.",
          "Ada penggunaan tanda ISI yang tidak tepat oleh produsen.",
          "Produsen tidak mengikuti aspek tertentu dari lisensi.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Menurut Peraturan 11 dari Peraturan BIS (Penilaian Kesesuaian),
        2018, tidak ada keraguan bahwa lisensi dapat ditangguhkan atau dibatalkan karena
        kegagalan untuk mematuhi peraturan yang dicatat.
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
        Untuk Sertifikasi BIS ISI Mark, sekali lagi, tidak ada keraguan bahwa ini memiliki
        lebih dari sekadar langkah-langkah birokrasi untuk produsen di India. Ini membantu
        dalam membangun reputasi positif dan mencapai pertumbuhan berkelanjutan
        dalam bisnis. Jika standar BIS dipatuhi, maka ada
        jaminan sertifikasi maksimal bahwa produk dapat diandalkan dan siap untuk
        dijual.
      </p>

      <p className="service-left-content-paragraph">
        Sebagai kesimpulan, tanda ISI telah menjadi lebih dari sekadar kepatuhan
        hukum, ia telah menjadi tanda jaminan dalam lingkungan bisnis
        di mana kepercayaan sulit didapat. Ini adalah tanda daya saing di
        pasar bersama dengan kepatuhan terhadap peraturan.
      </p>

      <p className="service-left-content-paragraph">
        Tidak peduli apakah Anda memproduksi produk elektronik, elemen bangunan, atau
        produk lain untuk dijual, Sertifikasi BIS ISI memastikan produk Anda
        selaras dengan standar kelas atas India sambil melindungi
        reputasi Anda serta konsumen Anda.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "Apa itu sertifikasi BIS dan mengapa penting?",
      answer:
        "Sertifikasi BIS dikeluarkan oleh Biro Standar India untuk memastikan produk mematuhi standar keselamatan dan kualitas India. Ini penting untuk kepatuhan hukum, kepercayaan konsumen, dan penerimaan pasar.",
    },
    {
      question: "Apa perbedaan antara lisensi BIS dan tanda ISI?",
      answer:
        "Lisensi BIS adalah dokumen hukum yang mengotorisasi produsen untuk menggunakan tanda ISI. Tanda ISI adalah label yang terlihat pada produk yang menunjukkan sertifikasi BIS.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapatkan sertifikasi BIS?",
      answer:
        "Biasanya, 6 hingga 10 minggu tergantung pada jenis produk, persyaratan pengujian, dan hasil audit",
    },
    {
      question: "Berapa periode validitas lisensi BIS?",
      answer:
        "Biasanya 1 hingga 2 tahun, setelah itu harus diperpanjang. Perpanjangan harus dimulai setidaknya 30 hari sebelum kedaluwarsa.",
    },
    {
      question: "Berapa biaya sertifikasi BIS?",
      answer:
        "Biaya bervariasi tetapi dapat berkisar dari ₹25,000 hingga ₹100,000+, termasuk pengujian, audit, dan biaya lisensi.",
    },
    {
      question: "Apakah sertifikasi BIS wajib untuk semua produk?",
      answer:
        "Tidak. Ini wajib hanya untuk produk yang tercantum di bawah skema 1 sertifikasi BIS.",
    },
    {
      question: "Bagaimana saya dapat menemukan standar IS yang tepat untuk produk saya?",
      answer:
        "Kunjungi situs web BIS atau konsultasikan dengan laboratorium pengujian dan konsultan yang diakui BIS untuk mengidentifikasi standar yang berlaku.",
    },
    {
      question: "Dapatkah produsen asing mengajukan sertifikasi BIS?",
      answer:
        "Ya. Melalui Skema Sertifikasi Produsen Asing (FMCS), entitas luar negeri dapat memperoleh lisensi BIS untuk penggunaan tanda ISI.",
    },
    {
      question: "Apa yang terjadi jika produk saya gagal pengujian BIS?",
      answer:
        "Anda perlu memperbaiki masalah dan mengirimkan ulang untuk pengujian. Aplikasi dapat dijeda sampai kepatuhan yang berhasil didemonstrasikan.",
    },
    {
      question: "Apakah sertifikasi BIS diperlukan untuk ekspor?",
      answer:
        "Meskipun tidak selalu wajib untuk ekspor, sertifikasi BIS meningkatkan kredibilitas dan dapat memuaskan pembeli internasional atau badan pengatur.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Pertanyaan yang Sering Diajukan
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Tidak dapat menemukan jawaban yang Anda cari?{" "}
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

const ISIMarkServices = () => {
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

