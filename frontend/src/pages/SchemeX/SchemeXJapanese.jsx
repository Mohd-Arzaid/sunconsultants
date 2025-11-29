import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon, Search } from "lucide-react";
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
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
import ScrollToTopButton from "@/components/common/ScrollToTop";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXJapanese = () => {
  return (
    <div className="relative">
      {/* Scheme X Japanese Meta Tags */}
      <SchemeXJapaneseMetaTags />
      {/* Scheme X Japanese Breadcrumb */}
      <SchemeXJapaneseBreadcrumb />
      {/* Scheme X Japanese Hero Section */}
      <SchemeXJapaneseHero />
      {/* Scheme X Japanese Index Section */}
      <SchemeXJapaneseIndex />
      {/* Scheme X Japanese Main Content Section */}
      <SchemeXJapaneseMainContent />
      {/* Footer Section */}
      <FooterJapanese />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXJapanese;

const SchemeXJapaneseMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "スキームXに基づくインドBIS認証",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>BISスキームX認証 | 機械・電気機器の安全性</title>
      <meta
        name="description"
        content="BISスキームX認証は、低電圧開閉装置、制御装置、機械、電気機器の品質と安全性を確保するために必要です。"
      />
      <meta
        name="keywords"
        content="スキームX, BISスキームX, BISスキームX認証, スキームX認証, 機械認証, 電気機器認証"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="BISスキームX認証 | 機械・電気機器の安全性"
      />
      <meta
        property="og:description"
        content="BISスキームX認証は、低電圧開閉装置、制御装置、機械、電気機器の品質と安全性を確保するために必要です。"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="BISスキームX認証 | 機械・電気機器の安全性"
      />
      <meta
        name="twitter:description"
        content="BISスキームX認証は、低電圧開閉装置、制御装置、機械、電気機器の品質と安全性を確保するために必要です。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const SchemeXJapaneseBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">ホーム</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>スキームXに基づくインドBIS認証</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXJapaneseHero = () => {
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
              認定された専門知識
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BISスキームX認証
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BISスキームX認証は、包括的技術規則（OTR）に基づく機械、電気機器、コンポーネント、アセンブリ、およびサブアセンブリを対象としています。
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
                サービスを見る
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SchemeXJapaneseHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXJapaneseHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/ja/indo-no-bis-nintei-sukimu-x"))
      return "Scheme X Japanese";
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
        title: "有効な氏名を入力してください。",
        description: "名前には文字とスペースのみを含める必要があります。",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "有効なメールアドレスを入力してください。",
        description: "メール形式が正しいか確認してください",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "有効な電話番号を入力してください",
        description: "電話番号は8〜15桁である必要があります",
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
        title: "お問い合わせフォームが正常に送信されました！",
        description:
          "お問い合わせいただきありがとうございます。担当者よりご連絡いたします。",
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
        error.response?.data?.message || "問題が発生しました";
      toast({
        variant: "destructive",
        title: errorMessage || "お問い合わせフォームの送信に失敗しました！",
        description: "問題が発生しました。詳細を確認して再試行してください。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          お問い合わせ
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        予約する
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        チームに連絡して通話をスケジュールしますか？
        <span className="text-black"> 今すぐ試す</span>
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
            placeholder="氏名 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="メールアドレス *"
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
            placeholder="電話番号 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="会社名 *"
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
            placeholder="製品名 *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="必要な認証 *"
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
              <span>送信中</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>予約する</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const SchemeXJapaneseIndex = () => {
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
    overview: "概要",
    process: "プロセス",
    documents: "書類",
    conclusion: "結論",
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
          aria-label="メニューを開く"
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

const SchemeXJapaneseMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXJapaneseMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentJapanese />
        </div>
      </div>
      <SchemeXJapaneseServiceFaq />
      <SchemeXJapaneseProductTable />
      <div id="services">
        <ServicesJapanese />
      </div>
    </div>
  );
};

const SchemeXJapaneseMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <SchemeXJapaneseMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Process Section */}
        <SchemeXJapaneseMainContentLeftProcessSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <SchemeXJapaneseMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Conclusion Section */}
        <SchemeXJapaneseMainContentLeftConclusionSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        <ServiceAuthorJapanese />
      </div>
    </div>
  );
};

const SchemeXJapaneseMainContentLeftOverviewSection = () => {
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
        <span className="service-left-content-index-heading">概要</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BISスキームX認証の紹介
      </h2>

      <p className="service-left-content-paragraph">
        インド規格局（BIS）は、2022年3月16日に「スキームX」を導入しました。これは、インドにおける製品の安全性と品質のコンプライアンスを向上させることを目的としています。インド国内および海外の製造業者は、スキームXのスケジュールIIに規定されている機械および電気機器、組立品、サブアセンブリ、コンポーネント、工具について、インドでの輸出、販売、流通前にBIS認証を申請できます。
      </p>

      <p className="service-left-content-paragraph">
        スキームXの下で、製造業者は低電圧開閉装置および制御装置、機械、電気機器についてBISライセンスまたは適合証明書（CoC）を申請できます。製造業者が認証を取得すると、BIS規格マークの使用が許可され、製品がインドで定められた規格に準拠していることを示すことができます。
      </p>

      <p className="service-left-content-paragraph">
        この認証は、製品とインド規格および政府規制への準拠を促進しながら、認証製品に対する消費者の信頼と信頼性を構築するのに役立ちます。
      </p>

      <h2 className="service-left-content-heading-three">
        スキームX認証とは？
      </h2>

      <p className="service-left-content-paragraph">
        スキームXは、BIS適合性評価規則2018年の下で開発された製品認証スキームであり、その後、BIS適合性評価（改正）規則2022年の下で簡素化されました。
      </p>

      <p className="service-left-content-paragraph">
        主な目標は、特に産業機械および電気機器に関して、インドの安全性と品質基準を国際基準に適合させることです。このスキームの下でインドで製造または輸入される製品は、技術、安全性、性能基準を証明するために厳格な審査と評価を受けます。
      </p>

      <p className="service-left-content-paragraph">
        スキームX認証の元の範囲に関する規定は、重工業省の管轄下にあり、BISによって施行された新しく発行された機械および電気機器安全（包括的技術規制）命令2024によって改訂および拡大されました。この命令は2026年9月1日に発効し、液体処理用ポンプ、圧縮機、クレーン、回転電気機械、変圧器、開閉装置および制御装置など、幅広い機械および電気機器をカバーします。
      </p>

      <p className="service-left-content-paragraph">
        このような機械または機器の組立品、サブアセンブリ、コンポーネントも、インド規格局法2016年の第16条に従って認証範囲の一部です。
      </p>

      <p className="service-left-content-paragraph">
        さらに、1989年CMVR規則（建設および製造バルブ規制）の下で、スキームXの管轄下にあるボウザーおよびその他の種類の建設機器は、安全性と技術基準の要件を欠く機器が市場に出回らないことを保証しています。
      </p>

      <h2 className="service-left-content-heading-three">
        包括的技術規制（OTR）
      </h2>

      <p className="service-left-content-paragraph">
        重工業省は、2024年8月28日の電子官報通知を通じて「安全命令に関する包括的技術規制（機械および電気機器の安全性）」を発表しました。この革新的な規制は、BIS規則2016年のスキームXの下で、機械、電気機器、およびそれらの組立品、サブアセンブリ、コンポーネントの安全性、品質、コンプライアンスを向上させることを目的としています。
      </p>

      <p className="service-left-content-paragraph">
        OTRの下では、すべてのカテゴリーの機械および電気機器、ならびにそのすべての部品およびコンポーネントが含まれます。ただし、いくつかのカテゴリーは特に除外されています：
      </p>

      <PointsListWithoutHeading
        points={[
          "インド規格局法2016年に基づいて発行された第16条の下での他の命令の一部である機械およびコンポーネント。",
          "輸出のみを目的とした国内製造品および物品。",
          "道路交通・高速道路省（MoRTH）によって規定されたCMVR規則1989年の下にある建設機械および機器。",
        ]}
      />

      <p className="service-left-content-paragraph">
        これらの例外は、コンプライアンスを促進し、ビジネスの容易さを促進するために規制の不必要な重複を避けるために設けられています。
      </p>

      <p className="service-left-content-paragraph">
        包括的技術規制2024は、重工業省によって通知された低電圧開閉装置および制御装置を含むすべての機械および電気機器をカバーし、BIS認証のスキームXフレームワークの下で扱われます。この命令は、製造業者および輸入業者が発行された命令に従って業務を変更するのに十分な時間を確保するため、2026年9月1日に発効します。
      </p>

      <h2 className="service-left-content-heading-three">
        包括的技術規制に基づくBIS認証
      </h2>

      <p className="service-left-content-paragraph">
        OTR
        2024によると、ポンプ、圧縮機、遠心分離機、クレーン、変圧器、開閉装置を含む機械および電気機器の製造業者および輸入業者は、スキームXの下でBIS認証を申請する必要があります。
      </p>

      <p className="service-left-content-paragraph">
        スキームXの下で、製造業者は以下のいずれかを申請することができます：
      </p>

      <PointsListWithoutHeading
        points={["BISライセンス、または", "適合証明書（CoC）"]}
      />

      <p className="service-left-content-paragraph">
        BIS規格マークを付けた製品は、製品が安全で信頼性が高く、高品質であることをユーザーに認証および保証する適合マークです。それはまた、信頼と優れた性能のマークでもあります。
      </p>

      <h3 className="service-left-content-heading-three">MSMEsへの特別注記</h3>

      <p className="service-left-content-paragraph">
        他の多くのセクターと同様に、零細・中小企業（MSMEs）もスキームXに準拠し、機械および電気機器についてBIS認証を取得する必要があります。規制要件への準拠は困難に見えるかもしれませんが、スキームX証明書は以下の理由でMSMEsに付加価値と利点をもたらします：
      </p>

      <PointsListWithoutHeading
        points={[
          "政府によって設定された法的およびその他の必要な義務への遵守を証明します。",
          "製品の評判と消費者の信頼を高めます。",
          "より大きな国内および海外市場へのアクセスを促進します。",
          "競争力、安全性、品質に関してMSMEの世界的地位を向上させます。",
        ]}
      />

      <h3 className="service-left-content-heading-three">BISスキームXロゴ</h3>

      <p className="service-left-content-paragraph">
        スキームXのBIS規格マークは、品質マークおよび信頼の原則を形成します。ロゴには以下が含まれます：
      </p>

      <PointsListWithoutHeading
        points={[
          "ロゴの上部に規格番号が表示されます；および",
          "ロゴの下部に次の形式でライセンス番号が表示されます：CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        このマークは、製造業者にBISライセンスが正常に発行されたことを示します。これにより、製造業者はBISマークを配置する権利が与えられ、製品が本物で安全であることを消費者に保証します。
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Scheme X logo"
          title="BIS Scheme X Certification"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h3 className="service-left-content-heading-three">法的影響</h3>

      <p className="service-left-content-paragraph">
        BIS規格マークは、信頼と品質のマークです。このマークは、有効な契約が成立した後にのみ利用可能です。有効な契約のみが所有者にマークの使用を許可します。有効な契約なしでマークを使用することは、インド憲法の下での違反であり、法的マークを持つことと同等です。マークの所有者は、BIS認証を持たない製品のライセンスCM/L-XXXXXXXXXXの使用について重い制限が課されます。
      </p>

      <p className="service-left-content-paragraph">
        したがって、すべての生産者は以下の義務があります：
      </p>

      <PointsListWithoutHeading
        points={[
          "スキームXの下で有効なBISライセンスを取得する。",
          "インド規格の関連要件を満たす；および",
          "承認されたBISロゴで製品を適切に貼付する。",
        ]}
      />

      <p className="service-left-content-paragraph">
        この規制フレームワークは、消費者およびビジネス関係者の利益を保護するために拡張され、安全性、透明性、信頼を強調する市場を促進します。
      </p>

      <h2 className="service-left-content-heading-three">
        スキームIとスキームXの主な違い
      </h2>

      <h3 className="service-left-content-heading-three">スキームI</h3>

      <PointsListWithoutHeading
        points={[
          "電子機器、家電製品、さらには工業製品など、より広いカテゴリーの消費者製品が含まれます。",
          "このスキームの下で証明書が発行された製品には、標準ISIマークが必要です。",
          "国内および海外の製造業者の両方に関連します。",
          "品質とインド規格への適合性を判断するための工場監査およびサンプル試験が含まれます。",
        ]}
      />

      <h3 className="service-left-content-heading-three">スキームX</h3>

      <PointsListWithoutHeading
        points={[
          "高リスクの産業および安全性が重要なエンジニアリング製品を対象としており、これには電気機器、機械、および重要な産業システムが含まれます。",
          "認証はスキームIよりも厳格です。高度な技術報告、コンプライアンスチェック、および広範な認証監査が含まれます。",
          "スキームXは、追加のコンプライアンス文書のため、スキームIよりも高価になる傾向があります。",
          "電気機器または産業機械を扱うビジネスは、スキームXの下で認証を取得することが義務付けられています。",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                特徴
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISIマーク
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                スキームX
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                管理者
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                インドBIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                インドBIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                認証タイプ
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BISライセンス
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS証明書 / BISライセンス
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                対象製品
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                消費財
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                機械および電気機器
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                使用マーク
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISIマーク
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS規格マーク（スキームXの下）
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                コンプライアンスレベル
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                インド規格への適合性
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                高度な技術および安全性への適合性
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        スキームXでカバーされる製品
      </h3>

      <p className="service-left-content-paragraph">
        スキームXは、安全性と性能に対して最も高いリスクを持つ製品をカバーしています：
      </p>

      <PointsListWithoutHeading
        points={[
          "電気機器：産業用変圧器、電源装置など、低電圧開閉装置および制御装置、その他の高電圧機器。",
          "重機：油圧プレス、産業用クレーン、自動工作機械、大規模産業向けの特殊機器。",
          "生命維持装置：消火器、圧力容器、緊急電気システム、およびその他の生命安全のための機器とシステム。",
          "特殊消費者および産業用電子機器：高度な保護対策を組み込んだ医療グレードの電子機器および装置。",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                シリアル番号
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                機械および電気機器の説明
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HSコード
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
                  All types of Pumps for handling liquids, liquid elevators and
                  (or)their assemblies /sub-assemblies /components
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
                  All types of compressors and(or)their assemblies
                  /sub-assemblies /components
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
                  All types of machinery for treatment of material by a process
                  involving a change of temperature and(or)their assemblies
                  /sub-assemblies /components
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
                  All types of centrifuges, filtering or purifying machinery for
                  liquid and gas and(or)their assemblies /sub-assemblies
                  /components
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
                  All types of machinery for filling, closing, sealing,
                  labelling bottles, packing or wrapping and(or)their
                  assemblies/sub-assemblies/components
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
                  All types of cranes and (or) their assemblies
                  /sub-assemblies/components
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
                  All types of machinery for construction, earthmoving, Mining
                  and (or)their assemblies /sub-assemblies/components
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
                  All types of weaving machines (looms) and (or)their
                  assemblies/sub-assemblies / components
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
                  All types of machinery for making embroidery and(or)their
                  assemblies /sub-assemblies /components
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
                  All types of metal cutting machines tools covered under the
                  heading 8456 to 8461 and(or)their assemblies
                  /sub-assemblies/components
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
                  All types of machine tools for working stone, ceramics,
                  concrete, asbestos cement or like mineral glass and (or)their
                  assemblies /sub-assemblies /components
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
                  All types of machinery for working rubber and plastics and(or)
                  their assemblies /sub-assemblies /components
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
                  All types of Machines including the machines for public works
                  & building and the machinery & mechanical appliances having
                  individual functions, not specified Or included elsewhere in
                  Chapter 84 and(or)their assemblies/sub-assemblies /components
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
                  All types of gears and gearing, toothed wheels, chain
                  sprocket, transmission elements ball or roller screws, gear
                  boxes and speed changers, including torque converters And
                  (or)their assemblies /sub-assemblies /components
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
                  All types of Rotary electrical machines such as Generator,
                  etc. and (or) their assemblies /sub-assemblies /components
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
                  All types of Diesel Generator and (or)their assemblies
                  /sub-assemblies /components
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
                  All types of Transformers and (or)their assemblies
                  /sub-assemblies /components
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
                  All types of Power Semiconductor Converter and (or)their
                  assemblies /sub-assemblies /components
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
                  All types of switch gear and control gear equipment operating
                  at voltages not exceeding 1000 volts and (or)their assemblies
                  /sub-assemblies /components
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
                  All types of switch gear and control gear equipment operating
                  at voltages exceeding 1000 volts and (or) their assemblies
                  /sub-assemblies /components
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
            製品別安全基準
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            機械および電気機器の説明
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
            PDFをダウンロード
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        BISスキームXに基づく安全基準
      </h2>

      <p className="service-left-content-paragraph">
        BISスキームX認証は、単なる法的要件以上のものであり、安全性、品質、信頼性の約束を提供します。この認証は、国内および国際規範への厳格な遵守を伴い、ユーザーに提供される機械および電気装置が安全で環境に優しく、技術的に健全であることを保証します。
      </p>

      <p className="service-left-content-paragraph">
        スキームXの下で認証を受けるために、製造業者は以下の主要な安全要素に準拠する必要があります：
      </p>

      <PointsListWithoutHeading
        points={[
          "電気安全性：適用可能なIECおよびインド規格への準拠。認証は、短絡、感電、絶縁破壊、保護接地の喪失、周囲の可燃性物質の発火、火災から保護します。",
          "機械安全性：機械の構造的完全性、可動部品の完全性、新材料の完全性の評価。機器が機械的ストレス、摩耗、作業上の危険に安全にさらされることを保証します。",
          "火災安全性：耐火材料で設計および構築された材料の使用。火災に関連するリスクを制御するための炎伝播性能の基準への準拠。",
          "環境コンプライアンス：機器の生産における制御された電力と環境に優しい材料の使用。製造業者が機器の環境への影響を軽減することを奨励します。",
          "品質管理：事前に設定された基準と規範を維持するための生産プロセスに対する支配的かつ自律的な管理。プロセス監査を含む工場条件の規制と継続的な遵守に焦点を当てています。",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        スキームXに基づく規制基準
      </h2>

      <p className="service-left-content-paragraph">
        製造業者は、国際基準と整合した関連インド規格に準拠する必要があります。これには以下が含まれます：
      </p>

      <h3 className="service-left-content-heading-three">タイプA基準：</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – 機械の安全性：設計、リスクアセスメント、およびリスク低減の一般原則。",
        ]}
      />

      <h3 className="service-left-content-heading-three">タイプB基準：</h3>

      <PointsListWithoutHeading
        points={["包括的技術規制（OTR）命令2024の第2付則に記載されています。"]}
      />

      <h3 className="service-left-content-heading-three">タイプC基準：</h3>

      <PointsListWithoutHeading
        points={["包括的技術規制（OTR）命令2024の第3付則に記載されています。"]}
      />

      <h3 className="service-left-content-heading-three">
        IS/IEC 60947シリーズ：
      </h3>

      <PointsListWithoutHeading
        points={[
          "複数の部分とセクションで低電圧開閉装置および制御装置をカバーしています。",
        ]}
      />
    </div>
  );
};

const SchemeXJapaneseMainContentLeftProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">プロセス</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BISスキームXで認証を取得する手順
      </h2>

      <p className="service-left-content-paragraph">
        スキームXの下でBIS証明書を発行することは、製造業者が適用可能な安全性、品質、コンプライアンス基準を満たしていることを保証するための体系的な活動です。プロセスは以下の通りです：
      </p>

      <PointsListWithoutHeading
        points={[
          "範囲の確認：製品がスキームXの範囲内にあるか、BIS安全要件を満たしているかを判断します。関連するインド規格と技術スケジュールを確認して、準拠できるかどうかを判断します。",
          "必要書類の準備：製造業者は以下の書類を収集して整理する必要があります：登録事業証明書、設計基準書類、工場およびプロセスフロー文書、サービステストレポート（該当する場合）、品質保証および管理文書。",
          "技術ファイルの作成：技術ファイルは証明書の延長申請に不可欠です。以下を含む必要があります：製品の技術仕様、方法と技術情報、コンプライアンスとテスト文書、製品の制限と意図された目的、品質保証文書、原材料のトレーサビリティ、下請け契約のトレーサビリティ、その他の証拠、範囲内の基準への適合性。",
          "申請フォーム：申請フォームは、指定された場所のBISウェブサイトで電子的に提出できます。申請料の決済が必須です。適切な評価のために、申請を確認する残りの文書を含める必要があります。",
          "工場検査：国内製造業者の場合：検査は最大2日間にわたって実施されます。海外製造業者の場合：検査は最大3日間にわたって実施されます（追加のリクエストにより追加日数が発生する場合があります）。",
          "製品サンプルの試験：サンプル試験は、製造業者のサイトまたは外注されたBIS承認ラボのいずれかで実施されます（外注試験が許可されています）。試験は、関連するインド規格の充足を証明します。",
          "認証の発行：製品がすべての条件を満たす場合、BISはすべての製品にライセンスまたは適合証明書（CoC）を付与します。BIS標準マークは、認証されたすべての製品で製造業者が自由に使用できます。",
        ]}
      />

      <p className="service-left-content-paragraph">
        このファイルは、製品主張の技術的および統計的証拠として、安全トレース基準への実質化を提供します。
      </p>

      <p className="service-left-content-paragraph">
        検査期間中、BIS職員は以下を行うことが期待されます：技術ファイルの分析、品質保証システムをサポートする製造方法の評価、製品の試験の観察、不適合（ある場合）の判断および是正措置の提供。訪問後、詳細な監査報告書が申請者に提供されます。
      </p>

      <p className="service-left-content-paragraph">
        この戦略は、BIS基準へのコンプライアンスを維持し、インドおよび国際的なコンプライアンスの認識であり、安全性と品質に対する消費者の信頼に向けて業界をコーナリングします。
      </p>

      <h2 className="service-left-content-heading-three">国内製造業者の手順</h2>

      <p className="service-left-content-paragraph">
        国内製造業者は、スキームXの下でBISライセンスを取得することにより、直接的なアプローチに従います。従うべき直接的な手順は以下の通りです：
      </p>

      <PointsListWithoutHeading
        points={[
          "文書化：スキームに関連するすべての文書を収集して準備する必要があります。",
          "申請の実行：申請は関連料金とともに提出されます。",
          "申請の調査：提出された申請は審査の対象となり、BISによって後続の質問が生成されます。",
          "監査人の任命：監査人はBISによって任命されますが、指名された個人は監査料の支払いの対象となります。",
          "工場監査：現場で検査および調査作業監査が実施され、関連サンプルが収集されます。",
          "サンプル評価：サンプルはBIS認定ラボで評価されます。申請者はすべてのBIS認定ラボ試験料を支払います。",
          "ライセンスおよびマーキング料の支払い：必要な支払いがBISに完了します。",
          "ライセンスの付与：BISマークの使用許可を与える証明書がBISによって授与されます。",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>標準的なタイムライン：</strong>{" "}
        BISの慣行によると、約90営業日が必要です。これは、重大な不適合がない場合に提供されます。
      </p>

      <h2 className="service-left-content-heading-three">海外製造業者の手順</h2>

      <p className="service-left-content-paragraph">
        国内製造業者とは異なり、スキームXの下でBIS証明書を申請する海外製造業者は、より厳格なプロセスと追加の手順に準拠する必要があります。手順は以下のように詳しく説明されています。
      </p>

      <PointsListWithoutHeading
        points={[
          "文書化の準備：事業登録、製品および工場レイアウト、テストレポート、関連する品質管理文書はすべて、準拠するために設定されたフォルダーにある必要があります。",
          "申請の提出：申請、必要な料金、およびすべての申請資料は、BISオンラインポータルを通じて提出されます。",
          "申請の記録および審査：申請はBISによって記録され、文書の確認が実施されます。BISが抱える可能性のある問題は、申請者がタイムリーに解決する必要があります。",
          "監査人の割り当ておよび支払い：工場検査を担当するBISの監査人が、監査のために申請者に割り当てられます。申請者は、適用される法律によって決定される実施された監査に対して設定された料金を支払う必要があります。",
          "監査の準備：海外製造業者は、BIS職員のビザ発行、航空券、ホテル予約などの監査のロジスティクス手配を担当し、支払いを行います。",
          "工場監査およびサンプル選択：BIS職員は3日間にわたる工場監査を実施します（より多くの申請が必要な場合は、より多くの日数を追加できます）。",
          "製品試験：選択されたサンプルは、BIS認定ラボに転送されて試験されます。場合によっては、試験が他の試験ラボに外注され、支払いは主要な試験ラボを通じて決済されます。",
          "マーキングおよびライセンス料の支払い：監査および試験結果が成功した後、製造業者はBISに必要なマーキング料とライセンス料を支払う必要があります。",
          "ライセンスの付与：すべての条件が完全に遵守されると、BISはライセンス/適合証明書（CoC）を発行します。BISは、コンプライアンスが確認されると、製造業者に他の認証製品で使用されるBIS標準マークを許可します。",
        ]}
      />

      <p className="service-left-content-paragraph">
        監査には以下が含まれます：品質保証システムおよび製造プロセスのワークフローの評価、コンプライアンスおよび技術文書の評価、独立した試験サンプルの選択。
      </p>

      <p className="service-left-content-paragraph">
        BISの慣行に基づいて、全体のプロセスには約6〜7か月かかります。
      </p>

      <h3 className="service-left-content-heading-three">
        海外製造業者向けの主要な追加ポイント：
      </h3>

      <PointsListWithoutHeading
        points={[
          "分類FMCS：すべての海外製造業者は、海外製造業者認証スキームの下で「大規模」として分類されます。この分類は、実施されている業務の規模に関係ありません。",
          "インド認定代理人（AIR）：すべての海外製造業者は、インド認定代理人（AIR）を指定する必要があります。AIRは、海外申請者とBISの主要な連絡先であり、コンプライアンス、協力、BISライセンスの維持を担当します。",
          "工場監査：海外製造業者の工場監査は包括的で、通常3日間続きます。また、複数の製品申請が提出された場合には、より多くの日数が必要になります。",
        ]}
      />
    </div>
  );
};

const SchemeXJapaneseMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">書類</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BISスキームX認証に必要な主要文書
      </h2>

      <p className="service-left-content-paragraph">
        BIS認証プロセスを効率化するために、製造業者は登録フェーズ中に以下の文書を収集して提出する必要があります：
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                番号
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                必要書類
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                詳細
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                名前と住所（工場とオフィス）
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                製造サイトとオフィスの完全な法的名称と物理的住所
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PANおよびGST情報
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                永続アカウント番号（PAN）およびGST登録詳細
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                連絡先詳細
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                公式通信用のメールアドレス、携帯電話番号、固定電話
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                経営詳細
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                主要幹部および認定署名者の名前、役割、ID
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                製品説明
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                包括的技術規制の第1附則に記載されている機械および機器の詳細
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                製品分類
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BISライセンスが要求されている特定のタイプ、モデル、およびバリエーション
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                技術ファイル
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                製品に関連するすべての技術詳細および製造ユニットに関する詳細
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        スキームX証明書の有効性および更新プロセス：
      </h3>

      <PointsListWithoutHeading
        points={[
          "ライセンスの有効性と更新：スキームXの下でのBISライセンスは、継続的な生産のために3〜6年間発行されます。期間が満了すると、更新申請、必要な料金、コンプライアンス文書の提出により、同じ期間のライセンスを更新できます。",
          "適合証明書（CoC）：CoCは1回限りの生産に対して発行され、国内および海外の製造業者に適用されます。単一バッチにのみ適用されるため、CoCには更新オプションがありません。",
          "製品試験レポート：試験レポートが製造業者のラボで作成される場合、BIS職員は工場検査中に立会試験を実施してそれらを確認します。外注施設で試験が行われる場合、それらの施設もBISによって検査および承認されます。",
          "更新申請のレビュー：中断のない有効性のために、製造業者はスキームXの規定に継続的に準拠する必要があります。BIS適合性評価規則の規則8に従って、インド規格局はフォームVIIIで更新申請を処理します。更新は、満足のいくコンプライアンスが確認された後にのみ行われます。",
        ]}
      />
    </div>
  );
};

const SchemeXJapaneseMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">結論</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">結論</h2>

      <p className="service-left-content-paragraph">
        BISスキームX認証は、低電圧開閉装置および制御装置、機械および電気機器の安全性、信頼性、品質を維持する上で重要です。石、セラミック、コンクリート、アスファルトセメント、鉱物ガラスの加工に適用される工作機械の製造業者にとって、BISスキームX認証は義務です。
      </p>

      <p className="service-left-content-paragraph">
        これらの義務を果たすことにより、製造業者は製品の適合性を保証し、消費者の信頼を高め、市場での信頼性を向上させます。スキームXは、生産が可能な限りスムーズであることを保証し、世界中の安全基準が満たされ、認知されたブランドが肯定的な評判を得ることを保証します。
      </p>
    </div>
  );
};

const SchemeXJapaneseProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const table2Ref = useRef(null);
  const table3Ref = useRef(null);

  return (
    <div className="w-full pb-12">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            製品別安全基準
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            機械および電気機器の説明
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="説明またはHSコードで検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>
      </div>

      <div ref={table2Ref}>
        <TypeBTableJapanese tableRef={table2Ref} searchQuery={searchQuery} />
      </div>
      <div ref={table3Ref}>
        <TypeCTableJapanese searchQuery={searchQuery} />
      </div>
    </div>
  );
};

const SchemeXJapaneseServiceFaq = () => {
  const faqData = [
    {
      question: "1. BIS認証におけるスキームXとは何ですか？",
      answer:
        "スキームXは、機械および電気機器のためにインドBISによって導入された適合性評価スキームです。包括的技術規制で指定された厳格な安全性と技術基準への準拠を保証します。",
    },
    {
      question: "2. スキームXはISIマーク認証とは異なりますか？",
      answer:
        "はい。ISIマークは一般的に消費財と基本的な製品コンプライアンス用ですが、スキームXは、BIS証明書またはBISライセンスを通じて高度な試験と認証を必要とする複雑で産業グレードの製品に適用されます。",
    },
    {
      question: "3. スキームX認証を申請する必要があるのは誰ですか？",
      answer:
        "包括的技術規制の下にリストされている機械および電気機器の製造業者および輸入業者は、スキームXを申請し、インドで製品を合法的に販売または流通するために有効なBIS認証を取得する必要があります。インドで製品を販売しようとするグローバル製造業者または海外製造業者もこれらの規制に準拠する必要があります。",
    },
    {
      question: "4. BISスキームX認証の費用はいくらですか？",
      answer:
        "スキームXの費用には、申請料、認証料、技術ファイルレビュー料、工場検査費用、製品試験料が含まれます。平均して、申請には₹2,000から始まり、製品の複雑さに応じて増加する可能性があります。詳細については、admin@bis-certifications.comまでお問い合わせください。",
    },
    {
      question:
        "5. スキームXの下でBISライセンスを取得するのにどのくらい時間がかかりますか？",
      answer:
        "タイムラインは、文書化、試験要件、工場検査によって異なります。通常、インドの製造業者の場合、BIS登録と申請提出が成功した日から4〜6週間かかり、海外製造業者の場合は60〜90日かかります。",
    },
    {
      question: "6. MSMEもスキームXの下でBIS認証を申請できますか？",
      answer:
        "もちろんです。実際、インドBISは、産業セクターにおける品質、コンプライアンス、競争力を高めるために、MSMEがスキームXの下でBISライセンスまたは適合証明書を申請することを奨励しています。",
    },
    {
      question: "7. スキームXの下でのBIS認証は輸出に必須ですか？",
      answer:
        "いいえ。輸出専用に製造された製品は、包括的技術規制の下で免除されます。ただし、インド市場向けの製品はスキームXで認証される必要があります。",
    },
    {
      question: "8. スキームXの下でのBISライセンスの有効性は何ですか？",
      answer:
        "スキームXの下でのBISライセンスは一般的に3〜6年間有効であり、それに応じて更新する必要があります。更新には、年間BIS認証料の支払いが含まれ、製品の範囲または基準の変更に応じて再評価が必要になる場合があります。",
    },
    {
      question: "9. 海外製造業者はスキームX認証を申請できますか？",
      answer:
        "はい、海外製造業者は、認定されたインド代理人を通じてスキームX認証を申請できます。インドBISは、標準的なBIS登録および試験プロセスとともに、海外申請者に3日かかる可能性がある工場検査を要求します。",
    },
    {
      question: "10. 技術ファイルとは何ですか？なぜ必要ですか？",
      answer:
        "技術ファイルは、スキームXの下で必要な詳細なコンプライアンス書類です。製造プロセス、製品の詳細、試験レポート、品質管理文書が含まれます。BIS認証プロセス中に関連するインド規格への製品の適合性をサポートします。",
    },
    {
      question: "11. スキームXは包括的技術規制とどのように関連していますか？",
      answer:
        "包括的技術規制は、インドの特定のカテゴリーの機械および電気機器にスキームXの使用を義務付けています。規制の下にリストされている製品は、有効なBIS証明書またはBISライセンスを取得するためにスキームXで認証される必要があります。",
    },
    {
      question: "12. スキームXの下でのBIS証明書は取り消すことができますか？",
      answer:
        "はい。インドBISは、監視中に不適合が見つかった場合、または製品が必要なインド規格を満たさない場合、スキームXの下でBISライセンスまたは証明書を一時停止または取り消すことができます。",
    },
    {
      question:
        "13. スキームXの下でのBISライセンスとBIS証明書の違いは何ですか？",
      answer:
        "BISライセンスは通常インドの製造業者に発行されますが、BIS適合証明書（CoC）は海外製造業者または特定のケースに発行されることがよくあります。両方とも同じ目的を果たします—スキームXの下で製品のコンプライアンスを保証します。",
    },
    {
      question:
        "14. スキームXで認証された製品にはISIマークが許可されていますか？",
      answer:
        "いいえ。スキームXの下での製品はISIマークを付けません。代わりに、インドBISによって管理されている認証スキームに関連するBIS標準マークを表示します。",
    },
    {
      question:
        "15. 私の機械がスキームX認証を必要とするかどうかはどうすればわかりますか？",
      answer:
        "包括的技術規制の公式リストを確認するか、BISコンサルタントに相談して、機械が義務的なスキームX認証要件に該当するかどうかを確認してください。",
    },
  ];

  return (
    <section id="faqs" className="my-2 scroll-mt-20" aria-label="よくある質問">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          よくある質問
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          お探しの回答が見つかりませんか？{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            お問い合わせください！
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

export const ServicesJapanese = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              私たちのサービス
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                インド最高の証明書コンサルタント
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
              海外製造業者向けBISマーク（ISIライセンス）
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
              CDSCO登録認証
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
              BIS（CRS）登録
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
              プラスチック廃棄物管理
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
              EPR証明書認証
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
              LMPC証明書認証
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
              BIS登録証明書
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
              インド製造業者向けISIマーク（BIS）
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
const productDataTableSecond = [
  {
    id: 1,
    isNumber: "IS 16504 (Part 1):2019/IEC 60204-1:2016",
    title:
      "Safety of Machinery Electrical Equipment of Machines Part 1 General Requirements",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Part 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Safety of Machinery - Electrical Equipment of Machines Part 11 Requirements for Equipment for Voltages above 1 000 V AC or 1 500 V DC and not Exceeding 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Part 1): 2010",
    title:
      "Functional Safety of Electrical-Electronic-Programmable Electronic Safety-related Systems Part 1- General Requirements",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Degree of Protection Provided by Enclosures (IP Code)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Part 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 1: Selection of test methods",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Part 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Safety of Machinery Evaluation of the Emission of Airborne Hazardous Substances Part 2 Tracer Gas Method for the Measurement of the Emission Rate of a Given Pollutant",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Part 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 3: Test bench method for the measurement of the emission rate of a given pollutant",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Part 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 4: Tracer method for the measurement of the capture efficiency of an exhaust system",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Part 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 5: Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with unducted outlet",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Part 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 6 : Test bench method for the measurement of the separation efficiency by mass of air cleaning systems with ducted outlet",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Part 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 7: Test bench method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Part 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 8: Room method for the measurement of the pollutant concentration parameter",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Part 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Safety of machinery - Evaluation of the emission of airborne hazardous substances - Part 9: Decontamination index",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Hydraulic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Pneumatic Fluid Power- General Rules and Safety Requirements for Systems and their Components",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "Earth Moving Machinery - Guards - Definitions and Requirements",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Safety of Machinery-Functional Safety of Safety-Related Electrical Electronic and Programmable Electronic Control Systems",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Part 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 2 Particular Requirements for Equipment Using Active Opto-Electronic Protective Devices AOPDs",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Part 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Safety of Machinery- Indication Marking and Actuation Part 3 Requirements for the Location and Operation of Actuators",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Part 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Safety of Machinery-Electrical Equipment of Machines Part 32 Requirements for Hoisting Machines",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Part 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 1 Requirements for Visual Acoustic and Tactile Signals",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Part 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Safety of Machinery - Electro-Sensitive Protective Equipment Part 1 General Requirements and Tests",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Safety of Machinery Guidelines for the Use of Communication Systems in Safety Related Applications",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Part 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Safety of Machinery - Indication Marking and Actuation Part 2 Requirements for Marking",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "Safety of Machinery Fire Prevention and Fire Protection",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Safety of Machinery Hygiene Requirements for the Design of Machinery",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Part 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 1 Choice of Fixed Means and General Requirements of Access",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Part 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 2 Working Platforms and Walkways",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Part 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 3 Stairs Stepladders and Guard-Rails",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Part 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Safety of Machinery Permanent Means of Access to Machinery Part 4 Fixed Ladders",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Part 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 1 General Principles for Design",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Part 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Safety of Machinery Safety Related Parts of Control Systems Part 2 Validation",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Safety of Machinery Guards General Requirements for the Design and Construction of Fixed and Movable Guards",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Safety of Machinery Interlocking Devices Associated with Guards Principles for Design and Selection",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Safety of Machinery Prevention of Unexpected Start-Up",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Safety of Machinery Safety Distances to Prevent Hazard Zones Being Reached by Upper and Lower Limbs",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Safety of Machinery Positioning of Safeguards with Respect to the Approach Speeds of Parts of the Human Body",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Safety of Machinery Minimum Gaps to Avoid Crushing of Parts of the Human Body",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Safety of Machinery Two-Hand Control Devices Principles for Design and Selection",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "Safety of Machinery Emergency Stop Function Principles for Design",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Safety of Machinery Lubricants with Incidental Product -- Contact Hygiene Requirements",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Part 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 1: Principles and specifications for machinery manufacturers",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Part 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Safety of machinery - Reduction of risks to health resulting from hazardous substances emitted by machinery - Part 2: Methodology leading to verification procedures",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Part 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 1: General principles for design and testing of pressure- sensitive mats and pressure-sensitive floors",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Part 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 2: General principles for design and testing of pressure- sensitive edges and pressure-sensitive bars",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Part 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Safety of machinery - Pressure-sensitive protective devices - Part 3: General principles for design and testing of pressure-sensitive bumpers, plates, wires and similar devices.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomics- System of Auditory and Visual Danger and Information Signals",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Part 2) : 2017/ ISO 9355-2:1999",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 2 Displays",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Part 3) 2017 / ISO 9355-3:2006",
    title:
      "Ergonomic Requirements for the Design of Displays and Control Actuators Part 3 Control Actuators",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Safety of Machinery - Anthropometric Requirements for the Design of Workstations at Machinery",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Part 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomics - Computer Manikins and Body Templates Part 1 General Requirements",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomics - System of auditory and visual danger and information signals",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Industrial Automation Systems - Safety of Integrated Manufacturing Systems - Basic Requirements",
  },
];

const productDataTableThird = [
  {
    id: 1,
    description: "All types of Pumps for handling liquids, liquid elevators",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 and 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "All types of compressors",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 and 84149090",
    indianStandard: "Clause 16 of IS 17093:2019\nClause 6.6 of IS 12258:1987",
    title:
      "Technical supply conditions for reciprocating air compressors for general purpose and industrial applications\nTechnical supply condition for air screw compressors (Oil Flooded) for general purpose and industrial applications",
  },
  {
    id: 3,
    description:
      "All types of machinery for Treatment of material by a process involving a Change of temperature",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 and 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "or purifying machinery for liquid and gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 and 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "All types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping",
    hsCode: "842220, 842230, 842240 and 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "All types of cranes",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 and 84269990",
    indianStandard:
      "Clause 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 and 66.6 of IS 3177:2020\nClause 8.1, 8.2, 8.3 & 45 of IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Electric Overhead Travelling Crane and Gantry Crane for all Applications Code of Practice\nPower Driven Mobile Cranes Specification\nCranes - Safety requirements for loader cranes",
  },
  {
    id: 7,
    description: "All types of machinery for construction",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Part 7): 2020\nIS 17055 (Part 8): 2020\nIS 17055 (Part 12): 2020",
    title:
      "Earth-Moving Machinery Safety Part 7 Scrapers\nEarth-Moving Machinery Requirements For Graders\nEarth-Moving Machinery Safety Part 12 Road Pavers",
  },
  {
    id: 8,
    description: "All types of weaving machines (looms)",
    hsCode: "8446, 844811, 844819, 844842 and 844849",
    indianStandard: "IS 17361 (Part 6) : 2020 / ISO 11111 (Part 6) : 2005",
    title:
      "Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery",
  },
  {
    id: 9,
    description: "All types of machinery for making embroidery.",
    hsCode: "84479020 and 844859",
    indianStandard: "IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016",
    title: "Textile Machiner Safety Requirements Part 1 Common Requirements",
  },
  {
    id: 10,
    description: "All types of metal cutting machines",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 and 846693",
    indianStandard:
      "IS 17277 (Part 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Part 1): 2019\nISO 16090-1 : 2017",
    title:
      "Machine Tools Safety Presses Part 1 General Safety Requirements\nMachine Tools Safety Electro-Discharge Machines\nMachine Tools Safety Turning Machines\nMachine Tools Safety Sawing Machines for Cold Metal\nMachine Tools Safety Machining Centres, Milling Machines, Transfer Machines Part 1 Safety Requirements",
  },
  {
    id: 11,
    description:
      "All types of machine tools for working stone, ceramics, concrete, asbestos cement or like mineral glass",
    hsCode: "8464 and 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description: "All types of machinery for working rubber and plastics",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Plastics and Rubber Machines-Injection Moulding Machines-Safety Requirements",
  },
  {
    id: 13,
    description:
      "All types of machines including the machines for public works & Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "84791000, 84798999 and 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "All types of gears and gearing, toothed wheels, chain sprocket, transmission elements ball or roller screws, gear boxes and speed changers, including torque converters And (or)their assemblies /sub-assemblies /components",
    hsCode: "84834000 and 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "All types of Rotary electrical machines such as Generator, etc. Building and the machinery & mechanical appliances having individual functions, not specified",
    hsCode: "8501 and 8503",
    indianStandard:
      "Clause 4.7, 4.8 and 4.12 of section 2,\nclause 7.4 of Section 3, clause 8.6 of Section 4,\nClause 9.4 of section 5 of IS 5422:1996\nClause 11, 21, 22, 23, 25 and 26 of IS 13364\n(Part 1): 1992\nClause 11, 21, 22 23 25 and 26 of IS 13364\n(Part 2): 1992",
    title:
      "Turbine type generation\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 1\nalternators rated up to 20 kVa\nAc generators driven by reciprocating internal\ncombustion engines - Specification: Part 2\nalternators rated above 20 kVa and up to 1250 kVa",
  },
  {
    id: 16,
    description: "All types of Diesel Generator",
    hsCode: "8502 and 8503",
    indianStandard:
      "Clause 5,6,7,8, 9 & 10 of IS/ISO 8528 (Part 2) : 2018\nClause 6 & 10 of IS/ISO 8528 (Part 3)\nClause 4, 5.5, 7.3.5, 7.3.7 & 7.4 of IS/ISO 8528 (Part 4): 2005\nClause 12, 13, 14, 15 of IS/ISO 8528-5: 2018\nClause 6.4 of IS/ISO 8528 (Part 8): 2016\nClause 9.1 of IS/ISO 8528 (Part 12): 1997",
    title:
      "Reciprocating Internal Combustion Engine Driven Alternating Current Generating Sets : Part 2 Engines\nReciprocating internal combustion engine driven alternating current generating sets: Part 3 alternating current generators for generating sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 4 control gear and switchgear\nReciprocating Internal Combustion Engine Driven Alternating Current Generating Sets Part 5 Generating Sets\nReciprocating internal combustion engine driven alternating current generating sets: Part 8\nReciprocating internal combustion engine driven alternating current generating sets: Part 12 emergency power supply to safety",
  },
  {
    id: 17,
    description: "All types of Transformer",
    hsCode:
      "850421, 850422, 850423, 850431, 850432, 850433, 850434 and 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nClause 5.6 & Cl 10 of IS 2026 (Part 1)\nClause 7.5, 7.6, 7.7 of IS 2026 (Part 6)",
    title:
      "Safety of Transformers, Reactors, Power Supply Units and Similar Product for Supply Voltages up to 1100 V Part 2-4: Particular Requirements and Tests for Isolating Transformers and Power Supply Units Incorporating\nSafety of power transformers, power supply units and similar: Part 2 particular requirement: Sec 6 safety isolating transformers for general use\nSafety of power transformers, power supplies reactors and similar products: Part 2-7 particular requirements and tests for transformers and power supplies for toys\nPower transformers: Part 1 general\nPower transformers: Part 6 reactors",
  },
  {
    id: 18,
    description: "All types of Power Semiconductor Converter",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Clause 7 of Semicounductor Converters Part 1 General Requirements and Line Commutated Converters Section 1 Specification of basic requirements",
  },
  {
    id: 19,
    description:
      "All types of switch gear and control gear equipment operating at voltages not exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8536, 8537 and 8538",
    indianStandard: "Clause 8 of IS/IEC 61439 (Part 3): 2012",
    title:
      "Low-Voltage switchgear and control gear assemblies: Part 3 distribution boards intended to be operated by ordinary persons (DBO)",
  },
  {
    id: 20,
    description:
      "All types of switch gear and control gear equipment operating at voltages exceeding 1000 volts and (or) their assemblies /sub-assemblies /components",
    hsCode: "8535, 8537 and 8538",
    indianStandard: "-",
    title: "-",
  },
];

const TypeBTableJapanese = ({ tableRef, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredData = productDataTableSecond.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.isNumber.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query)
    );
  });

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
        タイプB（幅広い機械に使用できる1つまたは複数のタイプの安全装置の1つの安全面を扱う一般安全基準）
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                番号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS番号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                タイトル
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
                  「{searchQuery}」の検索結果が見つかりませんでした
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
              前へ
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              ページ {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              次へ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const TypeCTableJapanese = ({ searchQuery }) => {
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
        タイプC（特定の機械または機械グループの詳細な安全要件を扱う機械安全基準）
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                番号
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                機械および電気機器の説明
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HSコード
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                インド規格/インド規格の特定条項
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                インド規格のタイトル
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
                  「{searchQuery}」の検索結果が見つかりませんでした
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
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
