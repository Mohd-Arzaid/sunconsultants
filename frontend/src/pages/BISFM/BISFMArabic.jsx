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
import FooterArabic from "@/components/manual/Footer/FooterArabic";
import ServiceAuthorArabic from "@/components/manual/ServiceAuthor/ServiceAuthorArabic";
import ServicesRightSideContentArabic from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentArabic";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMArabic = () => {
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
      <FooterArabic />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMArabic;

const MetaTags = () => {
  const title =
    "شهادة BIS FMCS | مخطط شهادة المصنعين الأجانب | Sun Certifications";
  const description =
    "خدمات شهادة BIS FMCS الخبيرة للمصنعين الأجانب. احصل على شهادة علامة ISI للتصدير إلى الهند. شهادات BIS الموثوقة منذ 2013. ✓ معالجة سريعة ✓ إرشاد خبير";
  const keywords = "شهادة BIS للمصنعين الأجانب، ترخيص BIS، علامة ISI";
  const canonicalUrl =
    "https://bis-certifications.com/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind";
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
        name: "علامة BIS (ترخيص ISI) للمصنعين الأجانب",
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
                    علامة BIS (ترخيص ISI) للمصنعين الأجانب
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
              الخبرة المعتمدة
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              شهادة BIS الهندية
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            للمصنعين الأجانب
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            يحتاج المصنعون الأجانب إلى علامة ISI للتصدير إلى الهند. يغطي أكثر من
            600 منتج إلزامي وأكثر من 20,000 منتج طوعي.
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
                عرض الخدمات
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
      path.includes("/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind")
    )
      return "BISFM Arabic Page";
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
        احجز موعداً
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        تريد التواصل مع فريقنا وترتيب مكالمة؟
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
              <span>احجز موعداً</span>
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
    overview: "نظرة عامة",
    standardization: "التوحيد القياسي",
    representation: "التمثيل",
    document: "الوثائق",
    process: "العملية",
    costing: "التكلفة",
    surveillance: "المراقبة",
    facilitator: "الميسر",
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
        <ServicesRightSideContentArabic />
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
            معلومات كاملة عن شهادة BIS الهندية تحت مخطط FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            ما هو BIS الهندي؟
          </h2>

          <p className="service-left-content-paragraph">
            مكتب المعايير الهندية (BIS) هو هيئة المعايير الوطنية في الهند تحت
            وزارة شؤون المستهلك والغذاء والتوزيع العام. تم إنشاؤه بموجب قانون
            BIS لعام 1986، وتمت مراجعته في 2016، يلعب BIS دوراً محورياً في
            التوحيد القياسي والعلامات و شهادة جودة السلع. يهدف إلى ضمان الجودة،
            السلامة والموثوقية للمنتجات المقدمة للمستهلكين الهنود.
          </p>

          <p className="service-left-content-paragraph">
            يعمل BIS من خلال مخططات مختلفة تشمل شهادة المنتجات، وسم المجوهرات،
            وخدمات الاختبار، و برامج التدريب. ومع ذلك، فإن أحد أكثر أطرها أهمية
            دولياً هو مخطط شهادة المصنعين الأجانب (FMCS).
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

      <h2 className="service-left-content-heading-two">
        ما هي شهادة BIS تحت FMCS؟
      </h2>

      <p className="service-left-content-paragraph">
        تم تقديمه في عام 2000، FMCS هو آلية يمكن من خلالها للمصنعين الأجانب
        الحصول على ترخيص BIS لاستخدام علامة ISI على منتجاتهم، مما يشير إلى
        الامتثال للمعايير الهندية. عملية الشهادة FMCS تمكن الكيانات الخارجية من
        بيع منتجاتها قانونياً في الهند دون إنشاء وحدة تصنيع محلية.
      </p>

      <p className="service-left-content-paragraph">
        حتى الآن، يعمل أكثر من 1,650 مصنعاً أجنبياً في الهند تحت نظام شهادة BIS
        من خلال FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        لماذا شهادة BIS حاسمة؟
      </h2>

      <p className="service-left-content-paragraph">
        الحصول على شهادة BIS هو أكثر من متطلب قانوني—إنه بوابة إلى السوق
        الاستهلاكية الواسعة في الهند. فيما يلي بعض الأسباب الرئيسية التي تجعلها
        ضرورية:
      </p>

      <PointsListWithoutHeading
        points={[
          "الامتثال القانوني: يجب أن تمتثل المنتجات للمعايير الهندية ذات الصلة.",
          "مصداقية العلامة التجارية: تعمل علامة ISI كدليل على الجودة وتعزز ثقة المستهلك.",
          "التخليص الجمركي: بدون ترخيص BIS صالح، قد يتم رفض المنتجات في الجمارك.",
          "الوصول إلى السوق: يساعد العلامات التجارية الأجنبية على الحصول على دخول سلس وقبول واسع في الهند.",
          "تخفيف المخاطر: يضمن أن المنتجات آمنة، وبالتالي تجنب عمليات الاستدعاء المحتملة ومشاكل المسؤولية.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        نطاق المنتجات المشمولة في BIS
      </h2>

      <p className="service-left-content-paragraph">
        أدرج BIS أكثر من 600 منتج تحت الشهادة الإلزامية، وأكثر من 20,000 عنصر
        مؤهل لشهادة BIS الطوعية. تمتد هذه عبر مجموعة واسعة من الصناعات:
      </p>

      <PointsListWithoutHeading
        points={[
          "الإلكترونيات وأجهزة IT",
          "قطع السيارات",
          "الأجهزة المنزلية",
          "منتجات الصلب",
          "الأسمنت ومواد البناء إلخ.",
        ]}
      />

      <p className="service-left-content-paragraph">
        تشير القائمة المتزايدة إلى النطاق المتزايد وأهمية شهادة BIS في التجارة
        العالمية.
      </p>

      <h2 className="service-left-content-heading-three">
        أهداف أو فوائد شهادة BIS للمصنعين الأجانب تحت FMCS
      </h2>

      <p className="service-left-content-paragraph">
        يهدف نظام FMCS وشهادة BIS إلى:
      </p>

      <PointsListWithoutHeading
        points={[
          "استخدام علامة ISI بدون ترخيص BIS صالح يعاقب عليه القانون.",
          "يجب أن تعرض المنتجات المعتمدة كل من شعار ISI ورقم CM/L (شهادة ترخيص التصنيع).",
          "قد يواجه المخالفون حظراً على المنتجات أو غرامات أو حتى ملاحقة جنائية.",
          "بناء الثقة بين المستهلكين والعلامات التجارية المستوردة.",
          "تسهيل التجارة العادلة وميدان لعب متكافئ.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        الميزات الرئيسية لشهادة BIS للمصنعين الأجانب
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                الميزة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                القابلية للتطبيق
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                المصنعون الأجانب فقط
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                العلامة
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                علامة ISI + رقم CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                متطلب التدقيق
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                تفتيش المصنع الإلزامي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الاختبار
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يتم إجراؤه في مختبرات هندية معتمدة من BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الصلاحية
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ترخيص BIS صالح لمدة 1-2 سنوات
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                التجديد
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                مطلوب عند انتهاء الصلاحية أو تحديثات المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (الممثل الهندي المعتمد)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يجب تعيينه للتواصل مع BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ضمان الأداء المصرفي
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                مطلوب من بنك هندي معتمد من RBI
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
          التوحيد القياسي
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        ما هو BIS الهندي ولماذا يهم؟
      </h2>

      <p className="service-left-content-paragraph">
        BIS الهندي هو علامة الجودة والسلامة الصادرة عن مكتب المعايير الهندية
        (BIS). اليوم، يتم استخدام علامة ISI حصرياً لتعيين المنتجات المطابقة
        للمعايير الهندية تحت مخطط شهادة BIS الرسمي.
      </p>

      <p className="service-left-content-paragraph">
        لكي يحمل المنتج علامة BIS أو ISI الهندية، يجب أن يمر عبر عملية شهادة BIS
        صارمة، بما في ذلك اختبارات المختبر، تفتيش المصنع، تدقيق الوثائق، وفحوصات
        الامتثال لإرشادات BIS الهندية.
      </p>

      <p className="service-left-content-paragraph">
        الوضع القانوني لشهادة BIS في الهند
      </p>

      <p className="service-left-content-paragraph">
        ترخيص BIS ليس مجرد أداة تسويقية—إنه متطلب قانوني لجميع المنتجات التي تقع
        تحت مخطط شهادة BIS الإلزامي.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        وفقاً لقانون BIS، 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "استخدام علامة ISI بدون ترخيص BIS صالح يعاقب عليه القانون.",
          "يجب أن تعرض المنتجات المعتمدة كل من شعار ISI ورقم CM/L (شهادة ترخيص التصنيع).",
          "قد يواجه المخالفون حظراً على المنتجات أو غرامات أو حتى ملاحقة جنائية.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="شعار علامة ISI"
        title="شعار علامة ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        يتكون شعار ISI عادة من:
      </p>

      <PointsListWithoutHeading
        points={[
          'الحروف المزخرفة "ISI" داخل مستطيل بزوايا مستديرة',
          "رقم CM/L المعروض أسفل العلامة أو بجانبها",
          "رقم كود المعيار الهندي المرجعي (مثلاً، IS 302 للأجهزة الكهربائية)",
        ]}
      />

      <p className="service-left-content-heading-three">يجب أن يكون الموضع:</p>

      <PointsListWithoutHeading
        points={[
          "دائماً وواضحاً على المنتج",
          "على العبوة إذا لم يكن ممكناً على المنتج",
          "على دليل المستخدم في بعض فئات المنتجات",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        فئات المنتجات التي تتطلب شهادة BIS
      </h2>

      <p className="service-left-content-paragraph">
        أكثر من 600 منتج تتطلب علامة ISI تحت مخطط التسجيل الإلزامي في الهند.
        تشمل الأمثلة:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                فئة المنتج
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                كود IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                الحالة
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الأجهزة الكهربائية
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إلزامي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الصلب والحديد
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إلزامي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                حاويات الطعام
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إلزامي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الخوذات
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إلزامي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الأسمنت
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إلزامي
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        تتطلب كل فئة الالتزام بالمعيار الهندي المقابل لها، والذي يتم اختباره
        أثناء عملية شهادة BIS، يمكن الوصول إلى القائمة الكاملة للمنتجات من خلال{" "}
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
          اضغط هنا
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS الهندي مقابل الشهادات العالمية الأخرى
      </h2>

      <p className="service-left-content-paragraph">
        دعنا نقارن علامة ISI مع الرموز الدولية الأخرى:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                العلامة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                البلد
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                إلزامي؟
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                التركيز
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الهند
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                نعم
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                سلامة وجودة المنتج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الاتحاد الأوروبي
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                نعم (لفئات محددة)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                الصحة، السلامة، البيئة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الولايات المتحدة
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                لا
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                معايير السلامة (طوعي)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الصين
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                نعم
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                سلامة البضائع الكهربائية
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        على عكس UL (طوعي) أو CE (خاص بمنطقة معينة)، علامة ISI تحت مخطط تسجيل BIS
        إلزامية ومفروضة محلياً.
      </p>

      <h2 className="service-left-content-heading-three">
        هل شهادة BIS أو ترخيص BIS إلزامي للاستيراد إلى الهند؟
      </h2>

      <p className="service-left-content-paragraph">
        الطبيعة الإلزامية لشهادة BIS
      </p>

      <p className="service-left-content-paragraph">
        جعلت حكومة الهند إلزامياً لبعض المنتجات أن تكون معتمدة من قبل مكتب
        المعايير الهندية (BIS) قبل أن يمكن استيرادها أو بيعها أو توزيعها في
        السوق الهندية. هذا الالتزام ينبع من:
      </p>

      <PointsListWithoutHeading
        points={[
          "أهداف حماية المستهلك",
          "المواءمة مع المعايير الهندية",
          "اللوائح الوطنية للسلامة",
        ]}
      />

      <p className="service-left-content-paragraph">
        إذا كان المنتج يندرج تحت المتطلب الإلزامي لـ BIS الهندي، يجب أن يكون
        لديه شهادة BIS ويحمل علامة ISI قبل أن يتمكن من التخليص الجمركي الهندي.
      </p>

      <h2 className="service-left-content-heading-three">
        هل شهادة BIS مطلوبة فقط للواردات؟
      </h2>

      <p className="service-left-content-paragraph">
        لا. شهادة BIS إلزامية لـ:
      </p>

      <PointsListWithoutHeading
        points={[
          "المصنعون المحليون الذين ينتجون منتجات منظمة",
          "المصنعون الأجانب الذين يصدرون منتجات منظمة إلى الهند",
        ]}
      />

      <p className="service-left-content-paragraph">
        سواء كنت موجوداً في الهند أو في الخارج، إذا كان منتجك في القائمة
        الإلزامية، يجب أن يكون لديه ترخيص BIS ويحمل علامة ISI.
      </p>

      <p className="service-left-content-paragraph">
        تستخدم الجمارك الهندية الآن أنظمة بيانات متقدمة لوضع علامة على الشحنات
        غير الممتثلة تلقائياً. يتم فحص جميع البضائع تحت الفئات المنظمة للتحقق من
        وجود شهادة BIS صالحة.
      </p>

      <p className="service-left-content-paragraph">الإعفاءات من شهادة BIS</p>

      <p className="service-left-content-paragraph">
        شهادة BIS إلزامية في معظم الحالات، ولكن قد يتم منح إعفاءات في سيناريوهات
        محددة:
      </p>

      <PointsListWithoutHeading
        points={[
          "لنماذج البحث والتطوير أو اختبار العينات",
          "للاستيراد الشخصي بكمية محدودة",
        ]}
      />

      <p className="service-left-content-paragraph">
        ومع ذلك، هذه نادرة وتتطلب خطابات إعفاء رسمية من BIS أو الوزارات ذات
        الصلة.
      </p>

      <h2 className="service-left-content-heading-three">
        كيف تعرف إذا كان منتجك يحتاج إلى شهادة BIS أو ترخيص BIS؟
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
          اضغط هنا
        </span>
        اضغط هنا للتحقق مما إذا كان منتجك مشمولاً في مخطط شهادة BIS الهندية
        الإلزامي.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">التمثيل</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        دور الممثل الهندي المعتمد (AIR) في شهادة BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        ما هو الممثل الهندي المعتمد (AIR)؟
      </h3>

      <p className="service-left-content-paragraph">
        الممثل الهندي المعتمد (AIR) هو وسيط حاسم يعينه مصنع أجنبي يسعى للحصول
        على شهادة BIS تحت مخطط تسجيل FMCS. يعمل AIR كحلقة وصل رسمية بين مكتب
        المعايير الهندية (BIS) والمصنع، مما يضمن التواصل السلس، ومعالجة الوثائق،
        وتنسيق عملية الشهادة.
      </p>

      <h3 className="service-left-content-heading-three">
        المتطلب القانوني لتعيين AIR
      </h3>

      <p className="service-left-content-paragraph">
        وفقاً لإرشادات BIS، يجب على أي مصنع أجنبي ليس لديه مكتب مسجل في الهند أن
        يعين AIR. يضمن هذا المتطلب أن BIS لديه نقطة اتصال موثوقة ويمكن الوصول
        إليها داخل الولاية القضائية الهندية.
      </p>

      <h3 className="service-left-content-heading-three">
        المسؤوليات الرئيسية لـ AIR
      </h3>

      <p className="service-left-content-paragraph">
        يمتد دور AIR عبر عملية شهادة BIS بأكملها، من الوثائق وتقديم الطلب إلى
        تنسيق التدقيق و الامتثال بعد الشهادة:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                المسؤولية
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                التواصل
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يعمل كنقطة اتصال مع مسؤولي BIS والإدارات
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                دعم الطلب
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يساعد في ملء النماذج، وتجميع الوثائق، وتقديم الطلب
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                تنسيق التدقيق
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ينسق جداول تفتيش المصنع ويعالج استفسارات المدقق
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                مراقبة الامتثال
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يضمن أن جميع أنشطة الاختبار والشهادة تلبي معايير BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                إدارة التجديد
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يشرف على تجديد ترخيص BIS، وتحديثات الوثائق، ودفع الرسوم
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        معايير الأهلية لتصبح AIR
      </h3>

      <p className="service-left-content-paragraph">
        للعمل كـ AIR، يجب على الفرد أو المنظمة:
      </p>

      <PointsListWithoutHeading
        points={[
          "أن يكون مواطناً هندياً أو كياناً تجارياً مسجلاً قانونياً في الهند",
          "أن يكون لديه عنوان فعلي في الهند برمز بريدي صالح",
          "أن يكون قادراً على التواصل بطلاقة باللغة الإنجليزية واللغات المحلية",
          "أن يفهم مخطط الشهادة، بروتوكولات وثائق BIS، والتوقعات التنظيمية",
          "أن يكون قادراً على الرد على التدقيقات والمراسلات بسرعة نيابة عن المصنع الأجنبي",
        ]}
      />

      <h3 className="service-left-content-heading-three">لماذا دور AIR حيوي</h3>

      <p className="service-left-content-paragraph">
        يضمن AIR الاستمرارية والمساءلة طوال عملية شهادة BIS. بدون AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "ليس لدى BIS ولاية قضائية للتصرف ضد مصنع أجنبي غير متوافق",
          "قد تتأخر الاستفسارات الحساسة للوقت وجداول التدقيق",
          "قد تتعطل عملية الشهادة أو تُلغى أو تُرفض",
        ]}
      />

      <p className="service-left-content-paragraph">
        يزيد AIR استباقي وذو خبرة بشكل كبير من فرصة نجاح شهادة BIS.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">الوثائق</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        الوثائق المطلوبة لشهادة BIS تحت FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                نوع الوثيقة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الغرض
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                نموذج طلب FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                طلب رسمي للحصول على الشهادة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                قائمة معدات التصنيع
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يوضح قدرات الإنتاج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                قائمة المواد الخام
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يضمن جودة المواد المدخلة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                قائمة معدات الاختبار
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يقيم جاهزية الاختبار والامتثال
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                شهادات المعايرة
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يثبت دقة معدات الاختبار
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                تخطيط المصنع وتدفق العملية
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يساعد المدققين على فهم مراحل التصنيع
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                شهادات الاختبار
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يثبت جودة المواد الخام والمنتج النهائي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ملف مراقبة الجودة
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يتحقق من مؤهلات الموظفين وإجراءات التشغيل القياسية
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                إثبات الدفع
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يتحقق من تقديم الرسوم إلى BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ضمان الأداء المصرفي
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يعمل كضمان مالي لـ BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Detailed Breakdown of Each document required to Indian BIS certification
      </h3>

      <div className="service-left-content-heading-three">
        1. FMCS Application Form
      </div>

      <p className="service-left-content-paragraph">
        This document provides general details about the foreign manufacturer,
        including:
      </p>

      <PointsListWithoutHeading
        points={[
          "Product details (type, category, model)",
          "Intended Indian Standard",
          "Contact details of factory and AIR",
          "Manufacturing capacity and testing scope",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. List of Manufacturing Equipment
      </div>

      <PointsListWithoutHeading
        points={[
          "Machine name and make",
          "Production capacity",
          "Contact details of factory and AIR",
          "Maintenance records (if applicable)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. List of Raw Materials
      </div>

      <PointsListWithoutHeading
        points={[
          "Source of procurement",
          "Grades and specifications",
          "Testing protocol (if any)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. List of Testing Equipment
      </div>

      <PointsListWithoutHeading
        points={[
          "Equipment name and manufacturer",
          "Compliance with test parameters in Indian Standard",
          "Location within the factory",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Calibration Certificates
      </div>

      <PointsListWithoutHeading
        points={[
          "Date of last calibration",
          "Validity period",
          "Certificate number",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Factory Layout & Process Flow Diagram
      </div>

      <PointsListWithoutHeading
        points={[
          "Entry and exit points",
          "Testing lab areas",
          "QC checkpoints",
          "Storage and packaging sections",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Performance Bank Guarantee
      </div>

      <p className="service-left-content-paragraph">
        Issued by an RBI-approved Indian bank, the Performance Bank Guarantee
        (PBG) covers liability in case of non-compliance. This document must:
      </p>

      <PointsListWithoutHeading
        points={[
          "Be on official bank letterhead",
          "Indicate guarantee period and amount",
          "Be signed and sealed",
        ]}
      />

      <div className="service-left-content-heading-three">
        Common documentation mistakes to avoid while applying for BIS
        certificate or Indian BIS.
      </div>

      <PointsListWithoutHeading
        points={[
          "Mismatch between form data and factory reality",
          "Submitting expired calibration reports",
          "Missing BIS fee proof",
          "Incomplete or vague process flows",
          "Naming inconsistencies between documents",
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
        <span className="service-left-content-index-heading">العملية</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        عملية شهادة BIS خطوة بخطوة تحت FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        نظرة عامة على رحلة شهادة BIS
      </h3>

      <p className="service-left-content-paragraph">
        عملية شهادة BIS تحت مخطط شهادة المصنعين الأجانب (FMCS) منهجية ومنظمة
        ومتعددة المراحل. تضمن أن المنتجات تمتثل للمعايير الهندية المعمول بها،
        عمليات التصنيع قوية، والاختبار دقيق.
      </p>

      <h3 className="service-left-content-heading-three">
        جدول ملخص عملية ترخيص BIS خطوة بخطوة
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                الخطوة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                تقديم الطلب إلى BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                فحص الوثائق والمراجعة الأولية
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                حل الاستفسارات وتقديم التوضيحات
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ترشيح مدقق BIS التقني
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                جدولة وتنسيق تدقيق المصنع عبر AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                تفتيش المصنع وختم العينات من قبل مدقق BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                اختبار المنتج داخل المنزل (إن أمكن)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                اختبار العينات المختومة في مختبرات معتمدة من BIS في الهند
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                مراجعة تقارير الاختبار ونتائج التدقيق
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                إصدار ترخيص BIS واستخدام علامة ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="عينة من شهادة BIS لـ FMCS"
        title="عينة من شهادة BIS لـ FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        الإطار الزمني للحصول على شهادة BIS
      </h3>

      <p className="service-left-content-heading-three">
        المدة النموذجية من التقديم إلى الشهادة
      </p>

      <p className="service-left-content-paragraph">
        عملية شهادة BIS تحت FMCS تستغرق عادة حوالي 120 يوم عمل (حوالي 3-4 أشهر)
        من تاريخ تقديم الطلب الصحيح. غالباً ما تحدث التأخيرات عندما تكون الوثائق
        غير واضحة أو إذا لم يكن المصنع جاهزاً للتدقيق.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">التكلفة</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        هيكل تكلفة شهادة BIS موضح
      </h2>

      <h3 className="service-left-content-heading-three">
        نظرة عامة على تكاليف شهادة BIS
      </h3>

      <p className="service-left-content-paragraph">
        الحصول على شهادة BIS تحت مخطط شهادة المصنعين الأجانب (FMCS) يتضمن عدة
        أنواع من التكاليف. تغطي هذه كل شيء من تقديم الطلب والتدقيقات إلى اختبار
        المنتج واستخدام العلامة.
      </p>

      <p className="service-left-content-paragraph">
        يجب على المصنعين الأجانب وضع ميزانية كافية لضمان المدفوعات في الوقت
        المحدد، حيث أن الفشل في الدفع يمكن أن يؤدي إلى رفض شهادة BIS في منتصف
        الطريق.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                فئة التكلفة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Application Fee (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يتم الدفع أثناء تقديم نموذج طلب FMCS للحصول على BIS الهندي
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                رسوم التدقيق (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يغطي سفر مدقق BIS، معدلات يوم الرجل، والمصروفات ذات الصلة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                رسوم اختبار المنتج (حسب المنتج)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                لاختبار العينات المختومة في مختبرات معترف بها من BIS في الهند
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                رسوم الترخيص (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                رسوم لمرة واحدة يتم دفعها عند منح شهادة BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                رسوم العلامة (حسب المنتج)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                رسوم سنوية لاستخدام علامة ISI على المنتجات المعتمدة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ضمان الأداء المصرفي (USD 10,000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ضمان مالي مودع عبر بنك هندي لضمان الامتثال
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
        <span className="service-left-content-index-heading">المراقبة</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        متطلبات المراقبة والامتثال بعد شهادة BIS
      </h2>

      <p className="service-left-content-paragraph">
        بمجرد منح شهادة BIS، لا تنتهي المسؤولية هناك. تتضمن شهادة BIS نظام
        مراقبة وامتثال مستمر لضمان الالتزام المستمر بالمعايير الهندية. هذه
        المرحلة بعد الشهادة حاسمة للحفاظ على ترخيص BIS الخاص بك، والاحتفاظ بالحق
        في استخدام علامة ISI، وتجنب العقوبات القانونية أو التعليقات.
      </p>

      <p className="service-left-content-paragraph">
        مكونات المراقبة الرئيسية بعد الحصول على شهادة BIS مراقبة السوق: أخذ
        عينات عشوائية من المنتجات من السوق الهندية لـ اختبارات مختبرية مستقلة،
        إذا فشلت العينة يتم تعليق شهادة BIS. يتم ذلك مرتين كل عام.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">الميسر</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        لماذا تختار مستشار شهادة BIS؟
      </h2>

      <p className="service-left-content-paragraph">
        شهادة BIS تحت مخطط تسجيل FMCS معقدة، تقنية للغاية، وحساسة للوقت. بينما
        من الممكن متابعة الشهادة بشكل مستقل، يعتمد معظم المصنعين الأجانب
        الناجحين على مستشاري BIS لتبسيط الرحلة وتقليل المخاطر.
      </p>

      <h3 className="service-left-content-heading-three">
        ماذا يفعل مستشار BIS؟
      </h3>

      <p className="service-left-content-paragraph">
        يوفر مستشار شهادة BIS إرشاداً شاملاً عبر كل خطوة من العملية. تشمل
        مسؤولياتهم الأساسية:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                المهمة
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                الوصف
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                الوثائق
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يعد ويراجع ويصيغ جميع الوثائق المطلوبة
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                دعم الطلب
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يقدم ويتتبع طلب BIS الخاص بك
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                إعداد التدقيق
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يوجه فرق المصنع لضمان جاهزية التدقيق
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                تنسيق العينات
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يدير ختم وشحن العينات إلى الهند
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                مساعدة الاختبار
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يتواصل مع المختبرات ويساعد في تفسير النتائج
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                التجديد والمراقبة
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                يشرف على تمديدات الترخيص وفحوصات الامتثال
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        يعملون كشريك استراتيجي لك، غالباً ما يعملون أيضاً كـ الممثل الهندي
        المعتمد (AIR) الخاص بك.
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "ما هي شهادة BIS ولماذا من المهم للمصنعين الأجانب الحصول على BIS الهندي؟",
      answer:
        "شهادة BIS هي عملية تنظيمية تجريها مكتب المعايير الهندية لضمان أن المنتجات تلبي المعايير الهندية. إنها ضرورية للمصنعين الأجانب للحصول على الوصول إلى السوق، والتخليص الجمركي، وثقة المستهلك في الهند.",
    },
    {
      question: "ماذا تمثل علامة ISI؟",
      answer:
        "تشير علامة ISI إلى الامتثال لمعيار هندي محدد. إنها إلزامية للمنتجات تحت شهادة BIS ويجب طباعتها على العبوات والمنتجات.",
    },
    {
      question: "هل شهادة BIS إلزامية لجميع الواردات إلى الهند؟",
      answer:
        "لا. شهادة BIS إلزامية للمنتجات المدرجة تحت مخطط شهادة BIS الهندية الإلزامي. ومع ذلك، الشهادة الطوعية متاحة للمنتجات الأخرى.",
    },
    {
      question: "من يمكنه التقدم بطلب للحصول على شهادة BIS تحت FMCS؟",
      answer:
        "فقط المصنعون الأجانب الفعليون (وليس المستوردون أو التجار) يمكنهم التقدم. الممثل الهندي المعتمد (AIR) إلزامي لتمثيلهم في الهند.",
    },
    {
      question: "كم من الوقت يستغرق الحصول على شهادة BIS؟",
      answer:
        "عملية شهادة BIS المتوسطة تحت FMCS تستغرق 120 يوماً، اعتماداً على جاهزية الوثائق، وجدولة التدقيق، وأوقات إرجاع الاختبار.",
    },
    {
      question: "ما هي التكاليف الرئيسية المتضمنة في شهادة BIS؟",
      answer:
        "تشمل التكاليف رسوم الطلب، ورسوم التدقيق، ورسوم اختبار المختبر، ورسوم الترخيص والعلامة، وضمان الأداء المصرفي (PBG) من بنك هندي معتمد من RBI.",
    },
    {
      question: "هل يمكن تجديد ترخيص BIS؟",
      answer:
        "نعم. ترخيص BIS صالح عادة لمدة 1-2 سنوات ويمكن تجديده عند استيفاء متطلبات الامتثال وتحديث الوثائق.",
    },
    {
      question: "ماذا يحدث إذا فشل المنتج أثناء اختبار مختبر BIS؟",
      answer:
        "إذا فشل منتج، قد يسمح BIS بإجراء تصحيحي وإعادة اختبار. الفشل المستمر يمكن أن يؤدي إلى رفض الطلب.",
    },
    {
      question: "هل من الضروري توظيف مستشار شهادة BIS؟",
      answer:
        "إنه ليس إلزامياً ولكنه موصى به بشدة. يساعد المستشار في تقليل التأخيرات، وإدارة الامتثال، وتحسين فرص الموافقة من خلال ضمان المحاذاة الكاملة مع بروتوكولات BIS.",
    },
    {
      question: "هل يمكن تعليق أو إلغاء ترخيص BIS؟",
      answer:
        "نعم. قد يعلق BIS أو يلغي ترخيصاً لعدم الامتثال، أو فشل المنتج، أو سوء استخدام شعار ISI، أو التناقضات في التدقيق.",
    },
    {
      question: "ما هي الوثائق المطلوبة لعملية شهادة BIS؟",
      answer:
        "تشمل الوثائق نموذج طلب FMCS، وتقارير الاختبار، وقوائم المعدات، وشهادات المعايرة، وتخطيط المصنع، وخطاب تعيين AIR، وإثبات دفع الرسوم.",
    },
    {
      question: "هل يمكن لـ AIR واحد تمثيل عدة طلبات BIS؟",
      answer:
        "نعم، بشرط أن يكونوا مخولين لكل مشروع ولديهم القدرة على التعامل مع الوثائق، والتدقيقات، والتواصل لكل شهادة.",
    },
    {
      question: "ما هو دور ضمان الأداء المصرفي؟",
      answer:
        "PBG يضمن لـ BIS أن المصنع سيمتثل للمعايير الهندية. إنه قابل للاسترداد عند إلغاء الترخيص وإلزامي لجميع طلبات FMCS التي تحصل على BIS الهندي.",
    },
    {
      question: "هل شهادة BIS معترف بها خارج الهند؟",
      answer:
        "بينما شهادة BIS هي معيار هندي، فهي محترمة في السياقات التجارية في العديد من المناطق التي تقبل الامتثال الهندي، خاصة في آسيا وأفريقيا.",
    },
    {
      question: "كيف أعرف إذا كان منتجي يتطلب شهادة BIS؟",
      answer:
        "تحقق من القائمة المحدثة على موقع BIS الرسمي أو استشر مستشار BIS للتحقق مما إذا كان منتجك يندرج تحت الشهادة الإلزامية.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          الأسئلة الشائعة
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          لا تجد الإجابة التي تبحث عنها؟{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            تواصل معنا!
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة BIS (ترخيص ISI) للمصنعين الأجانب
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
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
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
                src="/services-images/EPRCertificate.jpg"
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
                src="/services-images/LMPC.jpg"
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
              شهادة تسجيل BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              علامة ISI (BIS) للمصنعين الهنود
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
