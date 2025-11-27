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
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
import { ISIMarkAndBISCommonTable } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTable";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import { ISIMarkAndBISCommonTableJapanese } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableJapanese";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkJapanese = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableJapanese />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterJapanese />
    </div>
  );
};

export default ISIMarkJapanese;

const ISIMarkMetaTags = () => {
  const title = "BIS ISIマーク認証プロセス、書類、費用";
  const description =
    "インド標準局が発行するISIマーク認証は、必要な基準とコンプライアンスを満たすために厳格なテストと検査を受けた製品に付与されます";
  const keywords =
    "ISIマーク, ISIマーク認証, ISIマーク証明書, ISI認証, ISI証明書, ISIマーク登録, ISIライセンス, BIS ISIマーク, BIS ISIマーク認証";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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
                    <Link to="/">ホーム</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS ISIマーク認証プロセス、書類、費用
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
              認定専門知識
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              インド製造業者のための
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            BIS認証
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            「メイド・イン・インディア」ビジョンの一環として、BIS認証は製造業者が製品の安全性、品質、コンプライアンスを確保するのに役立ちます。認証を取得し、自信を持ってブランドを成長させましょう。
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
    if (path.includes("/ja/bis-isi-mark-shounin"))
      return "ISI Mark - Japanese Page";
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
        title: "有効な氏名を入力してください",
        description: "名前は文字とスペースのみを含む必要があります",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "有効なメールアドレスを入力してください",
        description: "メールアドレスの形式が正しいか確認してください",
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
        title: "お問い合わせフォームの送信に成功しました！",
        description:
          "お問い合わせいただきありがとうございます。担当者より後日ご連絡いたします。",
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
        error.response?.data?.message || "何か問題が発生しました";
      toast({
        variant: "destructive",
        title: errorMessage || "お問い合わせフォームの送信に失敗しました！",
        description:
          "何か問題が発生しました。詳細を確認して、もう一度お試しください。",
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
        チームに連絡して電話をスケジュールしますか？
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
    overview: "概要",
    requirement: "要件",
    documents: "書類",
    conclusion: "結論",
    faqs: "よくある質問",
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
          aria-label="メニューを切り替え"
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
          <ServicesRightSideContentJapanese />
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
        <ServiceAuthorJapanese />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">概要</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        インド製造業者のためのBIS ISIマーク認証
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="インドBIS認証スキーム"
          title="BISライセンススキーム"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        現在の市場動向において、ブランドの評判と今日の市場における消費者の信頼は極めて重要です。すべての消費者は、製品の安全性と信頼性についての保証を求めています。同時に、製造過程で行われた品質管理の手順も求めています。インド標準局は、インド国内で販売される製品の品質基準を確保することで、これらの問題と懸念に対処しています。ISIマーク認証は、BISが授与する最も信頼性の高い証明書の1つです。
      </p>
      <p className="service-left-content-paragraph">
        国内製造業者にとって、BIS
        ISIマーク認証の取得は、コンプライアンス証明書の取得に留まらず、市場の受容、ブランドの信頼、法的保護の獲得でもあります。ISIマークは世界的に認知されており、電気機器、建築材料、化学製品、家庭用品の生産において、インドでの信頼性を強化します。
      </p>
      <p className="service-left-content-paragraph">
        本稿は、国内製造業者向けのBIS
        ISIマーク認証について調査し、特に重要性、要件、利点、および証明書取得の全プロセスに焦点を当てます。
      </p>
      <h2 className="service-left-content-heading-three">
        BISとその役割の理解
      </h2>
      <p className="service-left-content-paragraph">
        インド標準局（BIS）は、消費者問題・公共サービス省の下にあるインドの国立標準化および認証機関です。規制機関として、1986年BIS法の下で指示されたように、様々な業界における品質基準の設定と維持、その執行を行っています。
      </p>
      <p className="service-left-content-paragraph">
        BISは第三者検証機関として機能し、製品が特定のインド標準を満たしているかどうかを監査します。BIS認証は、製造業者に法的要件だけでなく、顧客からの信頼と信頼性の承認マークも提供します。
      </p>
      <h2 className="service-left-content-heading-three">
        ISIマークとは何ですか？
      </h2>
      <p className="service-left-content-paragraph">
        ISIマーク（インド標準協会マーク）認証は、インド標準局（BIS）が授与する、最も古く最も認知された認証マークです。ISI認証は、製品が安全性、品質、性能、信頼性に関してBISが設定した品質基準の基本的な要件を満たしていることの確認に焦点を当てています。
      </p>
      <p className="service-left-content-paragraph">
        ISIマークを付けた製品は、徹底的なラボテストと工場検査を完了しています。生産段階で適切な品質管理手順が実施され、遵守されていることを保証します。消費者は、ISIマークが付けられた安全で信頼性の高い製品を入手して使用できます。ISIマークは、消費者と製造業者間の信頼のツールであり、このマークは標準を超えたものです。
      </p>
      <p className="service-left-content-paragraph">
        必須ISI認証が必要な製品の例は以下の通りです：
      </p>
      <PointsListWithoutHeading
        points={[
          "すべてのタイプの電化製品（電気アイロン、電気ヒーター、電線、冷蔵庫、エアコンユニット）",
          "セメントと鋼材、UPVCパイプ、プラスチック靴、その他のプラスチック製品",
          "肥料、化学製品、酸",
          "安全ヘルメットと眼鏡、および一部の子供用玩具",
        ]}
      />
      <p className="service-left-content-paragraph">
        インド標準局のスキームI
        スケジュールIの下で標準マーク（ISIマーク）を使用するには、650を超える製品に必須BIS認証が必要です。必須認証スキームに含まれる製品は、ISIマークなしではインド市場で製造、輸入、販売することはできません。必須製品のリストは、この{" "}
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
          製品リストリンク
        </a>{" "}
        で確認できます。
      </p>
      <h2 className="service-left-content-heading-three">
        BIS認証とISIマークの違いは何ですか？
      </h2>
      <p className="service-left-content-paragraph">
        しばしば混同され、同義語として使用されることがありますが、BIS認証とISIマークには特定の定義と目的があります：
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS認証：</strong>{" "}
        必要なインド標準を満たしていることを確認した後、製品に承認を授与するプロセスです。適合性評価が実施される枠組みです。
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISIマーク：</strong>{" "}
        BIS認証を取得した後に製品に授与される品質シンボルまたは標準マークです。製品が完全に認証され、必要なインド標準を満たしていることを示します。
      </p>
      <p className="service-left-content-paragraph">
        このように、ISIは物理的な認証コミットメントを構成し、一方でBIS認証は必要な管理フレームワークを提供します。
      </p>

      <h2 className="service-left-content-heading-three">
        製造業者にとってBIS ISIマーク認証が重要な理由
      </h2>

      <p className="service-left-content-paragraph">
        BIS ISIマーク認証は、国内製造業者にとって重要な価値を持っています：
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. 品質保証：</strong>{" "}
        ISIマークは、厳格なテストと検査に合格し、確立された最高品質基準を維持していることを示します。これにより、製品の信頼性と信頼性が向上し、欠陥の可能性を最小限に抑えます。
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. 消費者の信頼：</strong>{" "}
        ISIマークが付けられた製品は、一般的に安全で効果的であると見なされます。これはブランドロイヤルティに貢献し、より堅牢で評判の良いブランドとなります。
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. 市場へのアクセス：</strong>{" "}
        インド市場には、有効なISI証明書を持たない場合に厳しく禁止される製品が多数あります。このような場合、ISIマークは販売を促進するための門戸として機能します。
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. 市場参入の獲得：</strong>{" "}
        非常に競争の激しい環境において、ISI認証製品は前向きな評判を持つと見なされ、認証を受けていない他者よりも高い競争優位性を持ちます。
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. 規制遵守：</strong>{" "}
        BIS標準は、製品がこのような基準に適合する製造業者にとって、法的な複雑さから解放され、スムーズで制約のない運用が可能となります。
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. 輸出促進：</strong>{" "}
        ISI認証を受け、強いブランド評判を持つ製品は、高品質でグローバル標準を満たしているという認識から、海外市場で好まれる可能性が高くなります。
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. 消費者の安全性：</strong>{" "}
        ISI認証を取得した製品は、潜在的な危険、事故、または製品性能の低下から消費者の安全性を保証します。
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. 品質管理：</strong>{" "}
        一定の検査とチェックを実施する必要性により、製造業者は生産されたすべてのバッチで一定の品質を達成できることが保証されます。
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">要件</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        BIS ISIマーク認証の基本要件
      </h2>
      <p className="service-left-content-paragraph">
        BIS認証を取得するには、国内製造業者は以下の重要な義務を果たす必要があります。
      </p>
      <PointsListWithoutHeading
        points={[
          "インド標準仕様（ISS）への準拠が必要です。",
          "ライセンスは製造業者にのみ発行・付与され、卸売業者や小売業者には付与されません。",
          "認証のために各工場の場所ごとに別々の申請書を提出する必要があります。",
          "工場は資格のある人材と社内テスト研究所を有している必要があります。",
          "すべての生産プロセスは、原料から最終包装まで同じ生産ユニットで実施する必要があります（アウトソーシングは事前にBISによって承認されている必要があります）。",
          "技術的なガイダンスは製品マニュアルで提供され、検査、テスト、および必要な文書に関する基準が詳述されています。",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        国内製造業者のためのBIS ISI認証プロセス
      </h2>
      <p className="service-left-content-paragraph">
        BIS認証の取得は多段階のプロセスです。BIS認証プロセスには、通常手順と簡略手順という2つの主要な手順があります。
      </p>
      <h3 className="service-left-content-heading-three">
        1. 通常手順（60-65日）
      </h3>
      <PointsListWithoutHeading
        points={[
          "製造業者は社内研究所を設置し、製品をインド標準に準拠させます。",
          "必要書類とともに申請書を提出します。",
          "BIS職員による工場検査。",
          "BIS承認研究所での製品テスト。",
          "すべての条件が満たされた場合、ライセンスが付与されます。",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. 簡略手順（35-40日）
      </h3>
      <PointsListWithoutHeading
        points={[
          "製造業者はBIS承認の研究所からの事前テスト済み製品の文書を提出します。",
          "料金とともに申請書を提出します。",
          "文書の審査と工場検査。",
          "35-40日以内に最終テストとライセンスの付与。",
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
        <span className="service-left-content-index-heading">必要書類</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        ISIマーク認証に必要な書類
      </h2>
      <p className="service-left-content-paragraph">
        製造業者は以下の書類を提示する必要があります：
      </p>
      <PointsListWithoutHeading
        points={[
          "1. 記入済み申請書（スキームに応じてフォームVまたはVI）",
          "2. 事業登録証明書（例：Udyam登録、MSME、GST証明書）",
          "3. 工場ライセンスまたは市町村商取引ライセンス",
          "4. 製造機械リスト",
          "5. 製造プロセスフローチャート",
          "6. 製造施設の配置計画図",
          "7. 社内品質管理スタッフの詳細",
          "8. テスト設備の詳細",
          "9. 技術提携契約書（該当する場合）",
          "10. 委任状/承認書",
          "11. ブランド名承認書（別のブランド名で申請する場合）",
          "12. BIS承認研究所からのテストレポート",
          "13. 原材料調達の請求書",
          "14. 製品と包装の写真",
          "15. 基準への適合宣言書",
          "16. 非標準製品に関する約束書",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        BIS ISIマーク認証の利点
      </h3>
      <p className="service-left-content-paragraph">
        インドの製造業者にとって、BIS
        ISIマーク認証を取得することは、特定の利点を提供します：
      </p>
      <PointsListWithoutHeading
        points={[
          "全国規模の承認：製造業者は認証製品を全国で販売する許可を得ます。",
          "罰則の回避：BIS基準に準拠することで、多額の罰金や法的問題を回避できます。",
          "収益の向上：認証された製品に対する需要は高くなります。",
          "輸出の可能性：特定の海外市場では、ISIは卓越性の標準として認識されています。",
          "品質重視：認証された会社は、品質生産の原則へのコミットメントを示します。",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        BISライセンスの取り消し
      </h3>
      <p className="service-left-content-paragraph">
        認証のライセンスはBIS機関の専有権であり、以下の場合にそのようなライセンスを取り消すことができます：
      </p>
      <PointsListWithoutHeading
        points={[
          "認証された製品の品質が低下した場合。",
          "製造業者がISIマークを不適切に使用した場合。",
          "製造業者がライセンスの特定の側面に従わない場合。",
        ]}
      />

      <p className="service-left-content-paragraph">
        BIS（適合性評価）規制2018の規制11によれば、指定された規制に準拠しない場合、ライセンスが停止または取り消されることになります。
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">結論</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">結論</h2>

      <p className="service-left-content-paragraph">
        BIS
        ISIマーク認証について、また、インドの製造業者にとって単なる官僚的手続き以上の意味を持つことは間違いありません。前向きな評判を確立し、事業の持続的な成長を達成するのに役立ちます。BIS基準に準拠していれば、製品が信頼でき、販売準備ができているという最上の認証保証があります。
      </p>

      <p className="service-left-content-paragraph">
        結論として、ISIマークは単なる法的コンプライアンスを超え、信頼が得にくいビジネス環境において保証のマークとなっています。規制への遵守とともに、市場での競争力の証でもあります。
      </p>

      <p className="service-left-content-paragraph">
        電子製品、建築要素、または販売するその他の製品を製造している場合でも、BIS
        ISI認証により、製品がインドの最高品質基準に適合し、同時にあなたの評判と消費者を保護します。
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "BIS認証とは何か、なぜ重要ですか？",
      answer:
        "BIS認証はインド標準局によって発行され、製品がインドの安全性および品質基準に準拠することを保証します。法的遵守、消費者信頼、市場受容にとって不可欠です。",
    },
    {
      question: "BISライセンスとISIマークの違いは何ですか？",
      answer:
        "BISライセンスは、製造業者がISIマークを使用することを承認する法的文書です。ISIマークは、BIS認証を示す製品の目に見えるラベルです。",
    },
    {
      question: "BIS認証を取得するにはどのくらいかかりますか？",
      answer:
        "通常、製品の種類、テスト要件、監査結果に応じて6〜10週間かかります。",
    },
    {
      question: "BISライセンスの有効期間はどのくらいですか？",
      answer:
        "通常1〜2年で、その後更新する必要があります。更新は有効期限の少なくとも30日前に開始する必要があります。",
    },
    {
      question: "BIS認証の費用はいくらですか？",
      answer:
        "費用は異なりますが、テスト、監査、ライセンス料を含めて25,000ルピーから100,000ルピー以上になります。",
    },
    {
      question: "すべての製品でBIS認証は必須ですか？",
      answer: "いいえ。BIS認証のスキーム1に記載されている製品のみが必須です。",
    },
    {
      question: "製品に適したIS標準を見つけるにはどうすればよいですか？",
      answer:
        "BISウェブサイトにアクセスするか、BIS承認のテスト研究室やコンサルタントに相談して、該当する標準を特定してください。",
    },
    {
      question: "外国の製造業者はBIS認証を申請できますか？",
      answer:
        "はい。外国製造業者認証スキーム（FMCS）を通じて、海外の事業体はISIマーク使用のためのBISライセンスを取得できます。",
    },
    {
      question: "製品がBISテストに不合格になった場合はどうなりますか？",
      answer:
        "問題を修正し、テストのために再提出する必要があります。成功した準拠が実証されるまで、申請が一時停止される場合があります。",
    },
    {
      question: "輸出のためにBIS認証は必要ですか？",
      answer:
        "輸出に常に必須ではありませんが、BIS認証は信頼性を高め、国際的な買い手や規制機関を満足させることができます。",
    },
  ];

  return (
    <section id="faqs" className="my-2 scroll-mt-20" aria-label="よくある質問">
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          よくある質問
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          お探しの答えが見つかりませんか？{" "}
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
              外国製造用BISマーク（ISIライセンス）
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
                alt="BISCRS"
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
                alt="PlasticWasteManagement"
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
                alt="EPRCertificate"
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
                alt="LMPC"
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
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              インド製造向けISIマーク（BIS）
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