import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon } from "lucide-react";
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
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentIndonesian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentIndonesian";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import ServiceAuthorIndonesian from "@/components/manual/ServiceAuthor/ServiceAuthorIndonesian";
import FooterIndonesian from "@/components/manual/Footer/FooterIndonesian";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMIndonesian = () => {
  // Prevent auto-scroll on mount - ensure page stays at top
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);

    // Also check if there's a hash in URL that might cause scroll
    // If hash exists and it's not intentional, remove it
    if (window.location.hash === "#product-table") {
      // Clear hash to prevent auto-scroll to product table
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Additional safeguard: ensure scroll stays at top after a brief delay
    const timeoutId = setTimeout(() => {
      // Only scroll to top if we're not already there (to avoid unnecessary scroll)
      if (window.scrollY > 50) {
        window.scrollTo(0, 0);
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative">
      <MetaTags />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="product-table">
        <BISFMProductTable />
      </div>
      <div id="services">
        <Services />
      </div>
      <FooterIndonesian />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMIndonesian;

const MetaTags = () => {
  const title =
    "Sertifikasi BIS FMCS | Skema Sertifikasi Pabrikan Asing | Sun Certifications";
  const description =
    "Layanan sertifikasi BIS FMCS ahli untuk pabrikan asing. Dapatkan sertifikasi ISI Mark untuk ekspor ke India. Sertifikasi BIS Terpercaya sejak 2013. ✓ Pemrosesan Cepat ✓ Panduan Ahli";
  const keywords =
    "Sertifikat BIS untuk pabrikan asing, Lisensi BIS, Tanda ISI";
  const canonicalUrl =
    "https://bis-certifications.com/id/panduan-sertifikasi-bis-untuk-pabrikan-asing-bis-india";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "BIS FMCS Certification | Foreign Manufacturer Certification Scheme";
  const ogDescription =
    "Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. ✓ Fast Processing ✓ Expert Guidance";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tanda BIS (Lisensi ISI) untuk Pabrikan Asing",
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
    </Helmet>
  );
};

const BreadcrumbContent = () => {
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
                    Tanda BIS (Lisensi ISI) untuk Pabrikan Asing
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

const HeroSection = () => {
  return (
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              Sertifikasi BIS India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            untuk pabrikan asing
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Pabrikan asing memerlukan tanda ISI untuk ekspor ke India. Mencakup
            600+ produk wajib dan 20.000+ produk sukarela.
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
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    if (
      path.includes(
        "/id/panduan-sertifikasi-bis-untuk-pabrikan-asing-bis-india"
      )
    )
      return "BIS FMCS Certification - Indonesian Page";
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
        title: "Please enter a valid full name.",
        description: "Name should only contain letters and spaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
        description: "Check if your email format is correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid phone number",
        description: "Phone number must be (8-15 digits)",
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
        title: "Contact form submitted successfully!",
        description:
          "Thank you for contacting us. Our team will get back to you soon.",
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
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something went wrong. Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact Us
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Buat Janji Temu
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
            placeholder="Full Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
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
            placeholder="Contact Number *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
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
            placeholder="Product Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
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
              <span>Sending</span>
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

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "standardization",
      "representation",
      "document",
      "process",
      "costing",
      "surveillance",
      "facilitator",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Ringkasan",
    standardization: "Standardisasi",
    representation: "Perwakilan",
    document: "Dokumen",
    process: "Proses",
    costing: "Biaya",
    surveillance: "Pengawasan",
    facilitator: "Fasilitator",
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

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
    handleScrollSpy();

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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentIndonesian />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two">
            Informasi lengkap tentang sertifikasi BIS India di bawah Skema FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            Apa itu BIS India?
          </h2>

          <p className="service-left-content-paragraph">
            Bureau of Indian Standards (BIS) adalah badan standar nasional India
            di bawah Kementerian Urusan Konsumen, Pangan dan Distribusi Publik.
            Didirikan berdasarkan Undang-Undang BIS 1986, dan direvisi pada
            2016, BIS memainkan peran penting dalam standardisasi, penandaan,
            dan sertifikasi kualitas barang. Tujuannya adalah memastikan
            kualitas, keamanan, dan keandalan produk yang ditawarkan kepada
            konsumen India.
          </p>

          <p className="service-left-content-paragraph">
            BIS beroperasi melalui berbagai skema yang mencakup sertifikasi
            produk, penandaan untuk perhiasan, layanan pengujian, dan program
            pelatihan. Namun, salah satu kerangka kerja yang paling signifikan
            secara internasional adalah Skema Sertifikasi Pabrikan Asing (FMCS).
          </p>
        </div>

        <OverviewSection />
        <div className="service-left-content-divider" />
        <StandardizationSection />
        <div className="service-left-content-divider" />
        <RepresentationSection />
        <div className="service-left-content-divider" />
        <DocumentSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CostingSection />
        <div className="service-left-content-divider" />
        <SurveillanceSection />
        <div className="service-left-content-divider" />
        <FacilitatorSection />
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

      <h2 className="service-left-content-heading-two">
        Apa itu sertifikat BIS di bawah FMCS?
      </h2>

      <p className="service-left-content-paragraph">
        Diperkenalkan pada tahun 2000, FMCS adalah mekanisme di mana pabrikan
        asing dapat diberikan lisensi BIS untuk menggunakan tanda ISI pada
        produk mereka, menunjukkan kesesuaian dengan standar India. Proses
        sertifikasi FMCS memungkinkan entitas luar negeri untuk secara legal
        menjual produk mereka di India tanpa mendirikan unit manufaktur lokal.
      </p>

      <p className="service-left-content-paragraph">
        Hingga saat ini, lebih dari 1.650 pabrikan asing beroperasi di India di
        bawah sistem sertifikasi BIS melalui FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Mengapa Sertifikasi BIS Sangat Penting?
      </h2>

      <p className="service-left-content-paragraph">
        Memperoleh sertifikat BIS lebih dari sekadar persyaratan hukum—ini
        adalah pintu gerbang ke pasar konsumen India yang luas. Berikut adalah
        beberapa alasan utama mengapa ini penting:
      </p>

      <PointsListWithoutHeading
        points={[
          "Kepatuhan Hukum: Produk harus mematuhi standar India yang relevan.",
          "Kredibilitas Merek: Tanda ISI berfungsi sebagai bukti kualitas dan meningkatkan kepercayaan konsumen.",
          "Clearance Bea Cukai: Tanpa lisensi BIS yang valid, produk dapat ditolak di bea cukai.",
          "Akses Pasar: Membantu merek asing mendapatkan masuk tanpa hambatan dan penerimaan luas di India.",
          "Mitigasi Risiko: Memastikan produk aman, sehingga menghindari potensi penarikan kembali dan masalah tanggung jawab.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Ruang Lingkup Produk yang Dicakup dalam BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS telah mencantumkan lebih dari 600 produk di bawah sertifikasi wajib,
        dan lebih dari 20.000 item memenuhi syarat untuk sertifikat BIS
        sukarela. Ini mencakup berbagai industri:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektronik & perangkat keras IT",
          "Suku cadang otomotif",
          "Peralatan rumah tangga",
          "Produk baja",
          "Semen dan bahan konstruksi dll.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Daftar yang terus bertambah menunjukkan ruang lingkup dan relevansi
        sertifikat BIS yang semakin meningkat dalam perdagangan global.
      </p>

      <h2 className="service-left-content-heading-three">
        Tujuan atau manfaat Sertifikasi BIS untuk Pabrikan Asing di bawah FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Rezim FMCS dan sertifikat BIS bertujuan untuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Penggunaan tanda ISI tanpa lisensi BIS yang valid dapat dihukum oleh hukum.",
          "Produk bersertifikat harus menampilkan logo ISI dan nomor CM/L (Sertifikat Lisensi Manufaktur).",
          "Pelanggar dapat menghadapi larangan produk, denda, atau bahkan penuntutan pidana.",
          "Membangun kepercayaan antara konsumen dan merek impor.",
          "Memfasilitasi perdagangan yang adil dan lapangan bermain yang setara.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Fitur Utama Sertifikat BIS untuk pabrikan asing
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                FITUR
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                DESKRIPSI
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Penerapan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hanya untuk pabrikan asing
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Penandaan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tanda ISI + nomor CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Persyaratan Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Inspeksi pabrik wajib
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Pengujian
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dilakukan di laboratorium India yang disetujui BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Validitas
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Lisensi BIS berlaku selama 1-2 tahun
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Perpanjangan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Diperlukan saat kedaluwarsa atau pembaruan produk
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Perwakilan India yang Berwenang)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Harus ditunjuk untuk berhubungan dengan BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Jaminan Bank Kinerja
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Diperlukan dari bank India yang disetujui RBI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const StandardizationSection = () => {
  return (
    <div id="standardization" className="flex flex-col scroll-mt-20">
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Standardisasi
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Apa itu BIS India dan Mengapa Penting?
      </h2>

      <p className="service-left-content-paragraph">
        BIS India adalah tanda kualitas dan keamanan yang dikeluarkan oleh
        Bureau of Indian Standards (BIS). Saat ini, tanda ISI digunakan secara
        eksklusif untuk menunjuk produk yang sesuai dengan standar India di
        bawah skema sertifikasi BIS resmi.
      </p>

      <p className="service-left-content-paragraph">
        Agar produk dapat menggunakan tanda BIS India atau ISI, produk harus
        melalui proses sertifikasi BIS yang ketat, termasuk pengujian
        laboratorium, inspeksi pabrik, audit dokumentasi, dan pemeriksaan
        kepatuhan dengan pedoman BIS India.
      </p>

      <p className="service-left-content-paragraph">
        Kedudukan Hukum Sertifikasi BIS di India
      </p>

      <p className="service-left-content-paragraph">
        Lisensi BIS bukan hanya alat pemasaran—ini adalah persyaratan statutori
        untuk semua produk yang termasuk dalam skema sertifikasi BIS wajib.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Menurut Undang-Undang BIS, 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Penggunaan tanda ISI tanpa lisensi BIS yang valid dapat dihukum oleh hukum.",
          "Produk bersertifikat harus menampilkan logo ISI dan nomor CM/L (Sertifikat Lisensi Manufaktur).",
          "Pelanggar dapat menghadapi larangan produk, denda, atau bahkan penuntutan pidana.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="Logo Tanda ISI"
        title="Logo Tanda ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Logo ISI biasanya terdiri dari:
      </p>

      <PointsListWithoutHeading
        points={[
          'Huruf bergaya "ISI" di dalam persegi panjang dengan sudut membulat',
          "Nomor CM/L ditampilkan di bawah atau di samping tanda",
          "Nomor kode standar India referensi (misalnya, IS 302 untuk peralatan listrik)",
        ]}
      />

      <p className="service-left-content-heading-three">Penempatan harus:</p>

      <PointsListWithoutHeading
        points={[
          "Permanen dan jelas terlihat pada produk",
          "Pada kemasan jika tidak memungkinkan pada produk",
          "Pada manual pengguna di beberapa kategori produk",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Kategori Produk yang Memerlukan Sertifikat BIS
      </h2>

      <p className="service-left-content-paragraph">
        Lebih dari 600 produk memerlukan tanda ISI di bawah skema registrasi
        wajib di India. Contohnya termasuk:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                KATEGORI PRODUK
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                KODE IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STATUS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Peralatan Listrik
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wajib
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Baja & Besi
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wajib
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Wadah Makanan
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wajib
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Helm
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wajib
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Semen
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wajib
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Each category requires adherence to its corresponding Indian standard,
        which is tested during the BIS certification process, complete list of
        the products can be reached by{" "}
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Clicking Here
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS India vs. Sertifikasi Global Lainnya
      </h2>

      <p className="service-left-content-paragraph">
        Mari kita bandingkan tanda ISI dengan simbol internasional lainnya:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                TANDA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                NEGARA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                WAJIB?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                FOKUS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                India
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ya
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Keamanan dan kualitas produk
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                EU
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ya (untuk kategori tertentu)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Kesehatan, keselamatan, lingkungan
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                USA
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tidak
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Standar keselamatan (sukarela)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                China
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ya
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Keamanan barang listrik
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Tidak seperti UL (sukarela) atau CE (spesifik wilayah), tanda ISI di
        bawah skema registrasi BIS bersifat wajib dan ditegakkan secara lokal.
      </p>

      <h2 className="service-left-content-heading-three">
        Apakah Sertifikasi BIS atau Lisensi BIS Wajib untuk Impor ke India?
      </h2>

      <p className="service-left-content-paragraph">
        Sifat Wajib Sertifikat BIS
      </p>

      <p className="service-left-content-paragraph">
        Pemerintah India telah mewajibkan produk tertentu untuk disertifikasi
        oleh Bureau of Indian Standards (BIS) sebelum dapat diimpor, dijual,
        atau didistribusikan di pasar India. Kewajiban ini berasal dari:
      </p>

      <PointsListWithoutHeading
        points={[
          "Tujuan perlindungan konsumen",
          "Harmonisasi dengan standar India",
          "Peraturan keselamatan nasional",
        ]}
      />

      <p className="service-left-content-paragraph">
        Jika produk termasuk dalam persyaratan wajib BIS India, produk tersebut
        harus memiliki sertifikat BIS dan membawa tanda ISI sebelum dapat
        melewati bea cukai India.
      </p>

      <h2 className="service-left-content-heading-three">
        Apakah Sertifikasi BIS Hanya Diperlukan untuk Impor?
      </h2>

      <p className="service-left-content-paragraph">
        Tidak. Sertifikasi BIS wajib untuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Pabrikan domestik yang memproduksi produk yang diatur",
          "Pabrikan asing yang mengekspor produk yang diatur ke India",
        ]}
      />

      <p className="service-left-content-paragraph">
        Baik Anda berada di India atau di luar negeri, jika produk Anda ada
        dalam daftar wajib, produk tersebut harus memiliki lisensi BIS dan
        menampilkan tanda ISI.
      </p>

      <p className="service-left-content-paragraph">
        Bea cukai India sekarang menggunakan sistem data canggih untuk menandai
        pengiriman yang tidak patuh secara otomatis. Semua barang dalam kategori
        yang diatur dipindai untuk kehadiran sertifikat BIS yang valid.
      </p>

      <p className="service-left-content-paragraph">
        Exemptions from BIS Certification
      </p>

      <p className="service-left-content-paragraph">
        BIS certification is mandatory in most cases, but exemptions may be
        granted under specific scenarios:
      </p>

      <PointsListWithoutHeading
        points={[
          "For R&D prototypes or sample testing",
          "For personal imports of limited quantity",
        ]}
      />

      <p className="service-left-content-paragraph">
        However, these are rare and require formal exemption letters from BIS or
        related ministries.
      </p>

      <h2 className="service-left-content-heading-three">
        How to Know If Your Product Needs BIS Certificate or BIS License?
      </h2>

      <p className="service-left-content-paragraph">
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Clicking Here
        </span>
        Click here to check if your product covered under mandatory Indian BIS
        certification scheme.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Perwakilan</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Peran Perwakilan India yang Berwenang (AIR) dalam Sertifikasi BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        Apa itu Perwakilan India yang Berwenang (AIR)?
      </h3>

      <p className="service-left-content-paragraph">
        Perwakilan India yang Berwenang (AIR) adalah perantara penting yang
        ditunjuk oleh pabrikan asing yang mencari sertifikasi BIS di bawah skema
        registrasi FMCS. AIR berfungsi sebagai penghubung resmi antara Bureau of
        Indian Standards (BIS) dan pabrikan, memastikan komunikasi yang lancar,
        penanganan dokumentasi, dan koordinasi proses sertifikasi.
      </p>

      <h3 className="service-left-content-heading-three">
        Persyaratan Hukum untuk Penunjukan AIR
      </h3>

      <p className="service-left-content-paragraph">
        Sesuai dengan pedoman BIS, setiap pabrikan asing yang tidak memiliki
        kantor terdaftar di India harus menunjuk AIR. Persyaratan ini memastikan
        bahwa BIS memiliki titik kontak yang dapat diandalkan dan dapat diakses
        dalam yurisdiksi India.
      </p>

      <h3 className="service-left-content-heading-three">
        Tanggung Jawab Utama AIR
      </h3>

      <p className="service-left-content-paragraph">
        Peran AIR mencakup seluruh proses sertifikasi BIS, dari dokumentasi dan
        pengajuan aplikasi hingga koordinasi audit dan kepatuhan
        pasca-sertifikasi:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Tanggung Jawab
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Deskripsi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Komunikasi
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bertindak sebagai titik kontak dengan pejabat dan departemen BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Dukungan Aplikasi
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Membantu mengisi formulir, menyusun dokumen, dan mengajukan
                aplikasi
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Koordinasi Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengoordinasikan jadwal inspeksi pabrik dan menangani pertanyaan
                auditor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Pemantauan Kepatuhan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Memastikan semua kegiatan pengujian dan sertifikasi memenuhi
                norma BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Manajemen Perpanjangan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengawasi perpanjangan lisensi BIS, pembaruan dokumentasi, dan
                pembayaran biaya
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Kriteria Kelayakan untuk Menjadi AIR
      </h3>

      <p className="service-left-content-paragraph">
        Untuk bertugas sebagai AIR, individu atau organisasi harus:
      </p>

      <PointsListWithoutHeading
        points={[
          "Menjadi warga negara India atau entitas bisnis yang terdaftar secara hukum di India",
          "Memiliki alamat fisik di India dengan kode pos yang valid",
          "Mampu berkomunikasi dengan lancar dalam bahasa Inggris dan bahasa lokal",
          "Memahami skema sertifikasi, protokol dokumentasi BIS, dan harapan regulasi",
          "Mampu menanggapi audit dan korespondensi dengan cepat atas nama pabrikan asing",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Mengapa Peran AIR Sangat Penting
      </h3>

      <p className="service-left-content-paragraph">
        AIR memastikan kontinuitas dan akuntabilitas sepanjang proses
        sertifikasi BIS. Tanpa AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "BIS tidak memiliki yurisdiksi untuk bertindak melawan pabrikan asing yang tidak patuh",
          "Pertanyaan yang sensitif terhadap waktu dan jadwal audit mungkin tertunda",
          "Proses sertifikasi dapat macet, dicabut, atau ditolak",
        ]}
      />

      <p className="service-left-content-paragraph">
        AIR yang proaktif dan berpengalaman secara signifikan meningkatkan
        peluang sertifikasi BIS yang berhasil.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumen</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Dokumentasi yang Diperlukan untuk Sertifikasi BIS di bawah FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Jenis Dokumen
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Tujuan
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Formulir Aplikasi FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Permintaan resmi untuk sertifikasi
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Daftar Peralatan Manufaktur
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Menunjukkan kemampuan produksi
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Daftar Bahan Baku
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Memastikan kualitas bahan baku
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Daftar Peralatan Pengujian
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengevaluasi kesiapan pengujian dan kepatuhan
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sertifikat Kalibrasi
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Membuktikan akurasi peralatan uji
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tata Letak Pabrik & Alur Proses
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Membantu auditor memahami tahapan manufaktur
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sertifikat Uji
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Membuktikan kualitas bahan baku dan produk akhir
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Profil Kontrol Kualitas
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Memverifikasi kualifikasi staf dan SOP
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bukti Pembayaran
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Memvalidasi pengajuan biaya ke BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Jaminan Bank Kinerja
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bertindak sebagai jaminan keuangan untuk BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Rincian Setiap Dokumen yang Diperlukan untuk Sertifikasi BIS India
      </h3>

      <div className="service-left-content-heading-three">
        1. Formulir Aplikasi FMCS
      </div>

      <p className="service-left-content-paragraph">
        Dokumen ini memberikan detail umum tentang pabrikan asing, termasuk:
      </p>

      <PointsListWithoutHeading
        points={[
          "Detail produk (tipe, kategori, model)",
          "Standar India yang dimaksud",
          "Detail kontak pabrik dan AIR",
          "Kapasitas manufaktur dan ruang lingkup pengujian",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Daftar Peralatan Manufaktur
      </div>

      <PointsListWithoutHeading
        points={[
          "Nama mesin dan pembuat",
          "Kapasitas produksi",
          "Detail kontak pabrik dan AIR",
          "Catatan pemeliharaan (jika berlaku)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Daftar Bahan Baku
      </div>

      <PointsListWithoutHeading
        points={[
          "Sumber pengadaan",
          "Grade dan spesifikasi",
          "Protokol pengujian (jika ada)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Daftar Peralatan Pengujian
      </div>

      <PointsListWithoutHeading
        points={[
          "Nama peralatan dan pabrikan",
          "Kepatuhan dengan parameter uji dalam Standar India",
          "Lokasi di dalam pabrik",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Sertifikat Kalibrasi
      </div>

      <PointsListWithoutHeading
        points={[
          "Tanggal kalibrasi terakhir",
          "Periode validitas",
          "Nomor sertifikat",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Tata Letak Pabrik & Diagram Alur Proses
      </div>

      <PointsListWithoutHeading
        points={[
          "Titik masuk dan keluar",
          "Area laboratorium pengujian",
          "Titik pemeriksaan QC",
          "Bagian penyimpanan dan pengemasan",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Jaminan Bank Kinerja
      </div>

      <p className="service-left-content-paragraph">
        Dikeluarkan oleh bank India yang disetujui RBI, Jaminan Bank Kinerja
        (PBG) mencakup tanggung jawab jika terjadi ketidakpatuhan. Dokumen ini
        harus:
      </p>

      <PointsListWithoutHeading
        points={[
          "Di atas kop surat bank resmi",
          "Menunjukkan periode jaminan dan jumlah",
          "Ditandatangani dan disegel",
        ]}
      />

      <div className="service-left-content-heading-three">
        Kesalahan dokumentasi umum yang harus dihindari saat mengajukan
        sertifikat BIS atau BIS India.
      </div>

      <PointsListWithoutHeading
        points={[
          "Ketidaksesuaian antara data formulir dan kenyataan pabrik",
          "Mengirimkan laporan kalibrasi yang kedaluwarsa",
          "Bukti biaya BIS hilang",
          "Alur proses tidak lengkap atau samar",
          "Ketidakkonsistenan penamaan antar dokumen",
        ]}
      />
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

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Proses Sertifikasi BIS Langkah demi Langkah di bawah FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Ringkasan Perjalanan Sertifikasi BIS
      </h3>

      <p className="service-left-content-paragraph">
        Proses sertifikasi BIS di bawah Skema Sertifikasi Pabrikan Asing (FMCS)
        bersifat metodis, terstruktur, dan multi-fase. Ini memastikan bahwa
        produk mematuhi standar India yang berlaku, proses manufaktur kuat, dan
        pengujian akurat.
      </p>

      <h3 className="service-left-content-heading-three">
        Tabel Ringkasan Proses Lisensi BIS Langkah demi Langkah
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Langkah
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Deskripsi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pengajuan Aplikasi ke BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pemeriksaan Dokumentasi dan Tinjauan Awal
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Resolusi Pertanyaan & Pengajuan Klarifikasi
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Penunjukan Auditor Teknis BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Penjadwalan & Koordinasi Audit Pabrik melalui AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Inspeksi Pabrik & Penyegelan Sampel oleh Auditor BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pengujian Produk In-House (jika berlaku)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pengujian Sampel Tersegel di Laboratorium yang Disetujui BIS di
                India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tinjauan Laporan Uji & Temuan Audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Penerbitan Lisensi BIS dan Penggunaan Tanda ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="Contoh sertifikat BIS untuk FMCS"
        title="Contoh sertifikat BIS untuk FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Kerangka Waktu untuk Memperoleh Sertifikat BIS
      </h3>

      <p className="service-left-content-heading-three">
        Durasi Khas dari Aplikasi hingga Sertifikat
      </p>

      <p className="service-left-content-paragraph">
        Proses sertifikasi BIS di bawah FMCS umumnya memakan waktu sekitar 120
        hari kerja (sekitar 3–4 bulan) dari tanggal pengajuan aplikasi yang
        benar. Penundaan sering terjadi ketika dokumen tidak jelas atau jika
        pabrik tidak siap untuk audit.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Biaya</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Struktur Biaya Sertifikasi BIS Dijelaskan
      </h2>

      <h3 className="service-left-content-heading-three">
        Ringkasan Biaya Sertifikasi BIS
      </h3>

      <p className="service-left-content-paragraph">
        Memperoleh sertifikat BIS di bawah Skema Sertifikasi Pabrikan Asing
        (FMCS) melibatkan beberapa jenis biaya. Ini mencakup semuanya dari
        pengajuan aplikasi dan audit hingga pengujian produk dan penggunaan
        tanda.
      </p>

      <p className="service-left-content-paragraph">
        Pabrikan asing harus menganggarkan dengan memadai untuk memastikan
        pembayaran tepat waktu, karena kegagalan membayar dapat menyebabkan
        penolakan sertifikasi BIS di tengah jalan.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Kategori Biaya
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Deskripsi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biaya Aplikasi (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dibayar saat pengajuan formulir aplikasi FMCS untuk memperoleh
                BIS India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biaya Audit (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mencakup perjalanan auditor BIS, tarif hari kerja, dan biaya
                terkait
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biaya Pengujian Produk (Sesuai produk)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Untuk pengujian sampel tersegel di laboratorium yang diakui BIS
                di India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biaya Lisensi (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Biaya satu kali yang dibayar saat pemberian sertifikat BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Biaya Penandaan (Sesuai produk)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Biaya tahunan untuk penggunaan tanda ISI pada produk
                bersertifikat
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Jaminan Bank Kinerja (USD 10.000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Jaminan keuangan yang disetor melalui bank India untuk
                memastikan kepatuhan
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const SurveillanceSection = () => {
  return (
    <div id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Pengawasan</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Pengawasan dan Persyaratan Kepatuhan Pasca Sertifikasi BIS
      </h2>

      <p className="service-left-content-paragraph">
        Setelah sertifikat BIS diberikan, tanggung jawab tidak berakhir di sana.
        Sertifikasi BIS mencakup sistem pengawasan dan kepatuhan yang
        berkelanjutan untuk memastikan kepatuhan terus-menerus terhadap standar
        India. Fase pasca-sertifikasi ini sangat penting untuk mempertahankan
        lisensi BIS Anda, mempertahankan hak untuk menggunakan tanda ISI, dan
        menghindari hukuman hukum atau penangguhan.
      </p>

      <p className="service-left-content-paragraph">
        Komponen Pengawasan Utama setelah memperoleh sertifikat BIS Pengawasan
        Pasar: Pengambilan sampel produk acak dari pasar India untuk pengujian
        laboratorium independen, jika sampel gagal, sertifikat BIS ditangguhkan.
        Ini dilakukan dua kali setiap tahun.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Fasilitator</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Mengapa Memilih Konsultan Sertifikasi BIS?
      </h2>

      <p className="service-left-content-paragraph">
        Sertifikasi BIS di bawah skema registrasi FMCS rumit, sangat teknis, dan
        sensitif terhadap waktu. Meskipun dimungkinkan untuk mengejar
        sertifikasi secara independen, sebagian besar pabrikan asing yang
        berhasil mengandalkan konsultan BIS untuk merampingkan perjalanan dan
        meminimalkan risiko.
      </p>

      <h3 className="service-left-content-heading-three">
        Apa yang Dilakukan Konsultan BIS?
      </h3>

      <p className="service-left-content-paragraph">
        Konsultan sertifikasi BIS memberikan panduan end-to-end di setiap
        langkah proses. Tanggung jawab inti mereka meliputi:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Tugas
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Deskripsi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Dokumentasi
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Menyiapkan, meninjau, dan memformat semua dokumen yang
                diperlukan
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Dukungan Aplikasi
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengajukan dan melacak aplikasi BIS Anda
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Persiapan Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Membimbing tim pabrik untuk memastikan kesiapan audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Koordinasi Sampel
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengelola penyegelan dan pengiriman sampel ke India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Bantuan Pengujian
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Berhubungan dengan laboratorium dan membantu menafsirkan hasil
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Perpanjangan & Pengawasan
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mengawasi perpanjangan lisensi dan pemeriksaan kepatuhan
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Mereka bertindak sebagai mitra strategis Anda, sering kali juga berperan
        sebagai Perwakilan India yang Berwenang (AIR) Anda.
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Apa itu sertifikasi BIS dan mengapa penting bagi pabrikan asing untuk memperoleh BIS India?",
      answer:
        "Sertifikasi BIS adalah proses regulasi yang dilakukan oleh Bureau of Indian Standards untuk memastikan produk memenuhi standar India. Ini penting bagi pabrikan asing untuk mendapatkan akses pasar, clearance bea cukai, dan kepercayaan konsumen di India.",
    },
    {
      question: "Apa yang diwakili oleh tanda ISI?",
      answer:
        "Tanda ISI menunjukkan kesesuaian dengan Standar India tertentu. Ini wajib untuk produk di bawah sertifikasi BIS dan harus dicetak pada kemasan dan produk.",
    },
    {
      question: "Apakah sertifikasi BIS wajib untuk semua impor ke India?",
      answer:
        "Tidak. Sertifikasi BIS wajib untuk produk yang tercantum di bawah skema sertifikasi BIS India wajib. Namun, sertifikasi sukarela tersedia untuk produk lain.",
    },
    {
      question: "Siapa yang dapat mengajukan sertifikasi BIS di bawah FMCS?",
      answer:
        "Hanya pabrikan asing yang sebenarnya (bukan importir atau pedagang) yang dapat mengajukan. Perwakilan India yang Berwenang (AIR) wajib untuk mewakili mereka di India.",
    },
    {
      question:
        "Berapa lama waktu yang dibutuhkan untuk mendapatkan sertifikat BIS?",
      answer:
        "Proses sertifikasi BIS rata-rata di bawah FMCS memakan waktu 120 hari, tergantung pada kesiapan dokumen, penjadwalan audit, dan waktu putaran pengujian.",
    },
    {
      question: "Apa saja biaya utama yang terlibat dalam sertifikasi BIS?",
      answer:
        "Biaya termasuk biaya aplikasi, biaya audit, biaya pengujian laboratorium, biaya lisensi dan penandaan, dan Jaminan Bank Kinerja (PBG) dari bank India yang disetujui RBI.",
    },
    {
      question: "Bisakah lisensi BIS diperpanjang?",
      answer:
        "Ya. Lisensi BIS umumnya berlaku selama 1–2 tahun dan dapat diperpanjang setelah memenuhi persyaratan kepatuhan dan pembaruan dokumen.",
    },
    {
      question:
        "Apa yang terjadi jika produk gagal selama pengujian laboratorium BIS?",
      answer:
        "Jika produk gagal, BIS dapat mengizinkan tindakan korektif dan pengujian ulang. Kegagalan yang terus-menerus dapat mengakibatkan penolakan aplikasi.",
    },
    {
      question: "Apakah perlu menyewa konsultan sertifikasi BIS?",
      answer:
        "Ini tidak wajib tetapi sangat direkomendasikan. Konsultan membantu mengurangi penundaan, mengelola kepatuhan, dan meningkatkan peluang persetujuan dengan memastikan keselarasan penuh dengan protokol BIS.",
    },
    {
      question: "Bisakah lisensi BIS ditangguhkan atau dibatalkan?",
      answer:
        "Ya. BIS dapat menangguhkan atau membatalkan lisensi karena ketidakpatuhan, kegagalan produk, penyalahgunaan logo ISI, atau perbedaan audit.",
    },
    {
      question:
        "Dokumen apa saja yang diperlukan untuk proses sertifikasi BIS?",
      answer:
        "Dokumen termasuk formulir aplikasi FMCS, laporan uji, daftar peralatan, sertifikat kalibrasi, tata letak pabrik, surat penunjukan AIR, dan bukti pembayaran biaya.",
    },
    {
      question: "Bisakah satu AIR mewakili beberapa aplikasi BIS?",
      answer:
        "Ya, asalkan mereka diotorisasi untuk setiap proyek dan memiliki bandwidth untuk menangani dokumentasi, audit, dan komunikasi untuk setiap sertifikasi.",
    },
    {
      question: "Apa peran Jaminan Bank Kinerja?",
      answer:
        "PBG meyakinkan BIS bahwa pabrikan akan mematuhi standar India. Ini dapat dikembalikan saat pembatalan lisensi dan wajib untuk semua aplikasi FMCS yang memperoleh BIS India.",
    },
    {
      question: "Apakah sertifikasi BIS diakui di luar India?",
      answer:
        "Meskipun sertifikat BIS adalah standar India, ini dihormati dalam konteks perdagangan di banyak wilayah yang menerima kepatuhan India, terutama di Asia dan Afrika.",
    },
    {
      question:
        "Bagaimana saya tahu apakah produk saya memerlukan sertifikasi BIS?",
      answer:
        "Periksa daftar terbaru di situs web resmi BIS atau konsultasikan dengan konsultan BIS untuk memverifikasi apakah produk Anda termasuk dalam sertifikasi wajib.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Pertanyaan yang Sering Diajukan"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
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
            {faqs.map((faq, index) => (
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                Konsultan Sertifikat Terbaik India
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Tanda BIS (Lisensi ISI) untuk Pabrikan Asing
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
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
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
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
                src="/services-images/EPRCertificate.jpg"
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
                src="/services-images/LMPC.jpg"
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
                src="/services-images/BIS.jpg"
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
                src="/services-images/ISIMark.jpg"
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              TANDA ISI (BIS) untuk Pabrikan India
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