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
import { Link, useLocation } from "react-router-dom";
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
import ServicesRightSideContentJapanese from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentJapanese";
import ServiceAuthorJapanese from "@/components/manual/ServiceAuthor/ServiceAuthorJapanese";
import { ISIMarkAndBISCommonTableJapanese } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableJapanese";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterJapanese from "@/components/manual/Footer/FooterJapanese";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationJapanese = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableJapanese />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterJapanese />
    </div>
  );
};

export default BISCertificationJapanese;

const BISCertificationMetaTags = () => {
  const title = "BIS認証の種類、プロセス、書類、料金";
  const description =
    "BIS認証は、インドで様々な製品を製造・販売するために、インド標準局（BIS）から品質標準証明書を取得するプロセスを指します。";
  const keywords =
    "BIS認証, BIS認証プロセス, BIS登録, BIS登録プロセス, BIS認証スキーム, 製品認証スキーム, 必須認証スキーム, BIS必須製品リスト, ISIマーク, BIS FMCS, BISハルマーキングスキーム, エコマークスキーム, BIS認証コンサルタント, ISI認証コンサルタント, BIS ISIマークコンサルタント, BIS認証とは, BIS認証ダウンロード, BIS認証費用, インドBIS認証, BIS認証正式名称, BIS認証インド, インドBIS認証, BIS認証の意味, BIS認証チェック, インドでのBISライセンスオンライン, BIS認証オンライン, BIS証明書, BIS証明書オンライン.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Sun Certification India オペレーション責任者";

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
                    <Link to="/">ホーム</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    輸入業者および製造業者向けインドBIS認証
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
      aria-label="BIS認証ヒーロー"
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
              認定専門知識
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              インドBIS認証
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            輸入業者および製造業者向け
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS認証はインドにおける製品の品質と安全性を保証します。多くの製品に必須であり、テスト、書類、承認が必要です。
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
                サービスを見る
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
    if (path.includes("/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"))
      return "BIS common (Japanese)";
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
        description: "名前は文字とスペースのみを含む必要があります。",
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
        description: "電話番号は（8-15桁）である必要があります",
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
          "お問い合わせいただき、ありがとうございます。私たちのチームがすぐにご連絡いたします。",
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
        title:
          errorMessage || "お問い合わせフォームの詳細を送信できませんでした！",
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
        予約を取る
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        チームに連絡して電話を予約したいですか？
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
            placeholder="フルネーム *"
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
            placeholder="連絡先電話番号 *"
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
            placeholder="必要な認証*"
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
              <span>予約を取る</span>
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
    overview: "概要",
    schemes: "スキーム",
    process: "プロセス",
    documents: "書類",
    cost: "コスト",
    air: "AIR",
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
          aria-label="メニューの切り替え"
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
        <ServicesRightSideContentJapanese />
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
        インド製造業者向けBIS ISIマーク認証
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="インドBIS認証"
          title="インド製造業者向けBIS証明書"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        導入：BIS認証が重要な理由
      </h2>

      <p className="service-left-content-paragraph">
        例えば、ドイツの製造業者が独自の電子デバイスを発明し、急速に発展しているインド市場で販売する計画があるとします。このデバイスは独自で安全であり、ヨーロッパでも承認を得ています。しかし、インドの港にデバイスが持ち込まれると、税関職員がデバイスを差し止めます。質問は「なぜ？」です。答えは、デバイスにはBIS認証が必要であり、これはインドで電子製品を販売する上で重要な部分だからです。
      </p>

      <p className="service-left-content-paragraph">
        多くのグローバルおよびインドの製造業者が毎年同じ事例に対処しています。インドの消費者にとって、製品上のBISマークは単なるロゴではなく、製品が品質、安全性、信頼性についてテストされた信頼の印です。ビジネスにとって、それは世界最大の市場の1つへの入り口です。
      </p>

      <p className="service-left-content-paragraph">
        この記事は、BIS認証、その必要性、プロセス、利点、スキーム、コスト、および外国および国内の製造業者の両方に利用可能なシステムとそのナビゲーションに関するすべての質問に答えます。
      </p>

      <h2 className="service-left-content-heading-three">
        製造業者および輸入業者向けBIS認証とは何ですか？
      </h2>

      <p className="service-left-content-paragraph">
        BIS認証は、消費者問題省の下にあるインドの国家認証機関であるインド標準局（BIS）が提供する品質保証および安全性認証です。BIS認証は、製品が性能、安全性、品質に関してインド標準（IS）に準拠していることを保証します。
      </p>
      <p className="service-left-content-paragraph">
        製品がこれらの品質基準要件を満たすと、インド標準局はBISライセンスまたはBIS証明書を発行し、製品がISIマーク（国内スキームの場合）または一意の登録番号付きのCRSマーク（BIS必須登録スキームの場合）を表示する資格があることを示します。
      </p>
      <p className="service-left-content-paragraph">
        多くのインドの製造業者および輸入業者にとって、BIS認証の取得は必須です。電気器具、セメントおよび鋼製品、パッケージ飲料水、携帯電話、LEDライト、パワーバンク、貴金属ジュエリー（ハルマーキングを通じて）などの電子機器など、幅広い製品をカバーしています。これらの必須製品の製造業者および輸入業者は、BISの承認なしにはインドで合法的に製品を販売または流通させることはできません。
      </p>

      <h2 className="service-left-content-heading-three">
        インドにおけるBISの簡単な歴史
      </h2>

      <p className="service-left-content-paragraph">
        インド標準局（BIS）は、1947年に設立されたインド標準機関（ISI）を引き継いで1986年に設立されました。BISは現在、インドにおける標準の品質守護者と見なされ、その慣行を国際レベルに合わせ、インドの条件に必要な改正を行っています。
      </p>

      <h3 className="service-left-content-heading-three">
        注目すべきマイルストーン
      </h3>

      <PointsListWithoutHeading
        points={[
          "1947年、独立後に品質管理システムをサポートするためにISIが設立されました。",
          "1955年、ISIマークが授与され、インドで最も有名な品質シンボルの1つになりました。",
          "1986年、BIS法が可決され、ISIがインド標準局に置き換えられました。",
          "2016年と2018年に、さらなる改正によりBISの責任が強化され、ハルマーキングと製品認証がより徹底的になりました。",
        ]}
      />

      <p className="service-left-content-paragraph">
        現在、BISは複数の産業にわたってインドのユーザー向けに何千もの工具および機械の安全性、信頼性、標準化を保証しています。
      </p>

      <h2 className="service-left-content-heading-three">
        インドでBIS認証が必須なのはなぜですか？
      </h2>
      <p className="service-left-content-paragraph">
        インド市場は巨大で、常に変化し、価格変動に敏感です。しかし、この開放性は市場を安価で安全でない商品にさらすことにもなります。この文脈において、BIS認証は保護的な障壁として機能します。
      </p>
      <PointsListWithoutHeading
        points={[
          "消費者安全 - 潜在的な事故、健康問題、欺瞞から人々を保護します。",
          "市場規制 - 非準拠製品がインド市場に入らないようにします。",
          "信頼と自信 - 地元および国際製品に対する消費者の信頼を強化します。",
          "グローバル連携 - 外国企業がインドの規制構造に適合するのを支援します。",
          "公正な競争 - 規模に関係なく、すべての市場参加者が品質のみで競争できることを保証します。",
        ]}
      />
      <p className="service-left-content-paragraph">
        パッケージ飲料水のBIS認証は、認証がないことが健康問題を引き起こす可能性がある例です。ヒーター、トースター、その他の電化製品の製品認証基準が同様に不足していると、火災につながる可能性があります。したがって、BIS認証を取得することで、政府はこれらの課題に対処することを確実にします。
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">プロセス</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS認証プロセス</h2>

      <p className="service-left-content-paragraph">
        BIS認証プロセスは構造化された流れに従います：
      </p>

      <PointsListWithoutHeading
        points={[
          "関連標準の特定：適用可能なインド標準（IS）を選択します。",
          "申請書の提出：BISに申請し、関連文書を添付します。",
          "製品テスト：承認されたBISラボでテストを実施します。",
          "工場検査：施設はBIS職員によって検査されます。",
          "BISライセンス：評価評価が成功した場合に証明書が授与されます。",
          "監視：ライセンス変更とともに継続的な準拠が新たな規範です。",
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
        <span className="service-left-content-index-heading">書類</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS認証に必要な書類</h2>

      <p className="service-left-content-paragraph">
        強力な書類パッケージにより、スムーズな処理が保証されます。主な要件には以下が含まれます：
      </p>

      <PointsListWithoutHeading
        points={[
          "事業ライセンスまたは会社登録書類。",
          "製造プロセスフローチャート。",
          "機械および設備のリスト。",
          "製品詳細および技術仕様。",
          "BIS承認ラボからのテストレポート。",
          "品質管理マニュアル。",
          "商標証明書。",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        外国製造業者向け：
      </h3>

      <PointsListWithoutHeading
        points={[
          "認可インド代表者（AIR）の任命。",
          "代表権の証明および身分証明書類。",
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
        <span className="service-left-content-index-heading">コスト</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS認証費用</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                コスト構成要素
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                詳細
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                申請料
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                製品タイプに応じた一度限りの返金不可の料金
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                テスト料金
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                複雑さに基づく；BIS承認ラボに支払われる
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                年間ライセンス料
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                BISライセンスを維持するために年間で支払われる
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                検査/工場監査料金
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                BIS職員が工場を訪問する場合に課金される（国内または国際的な旅行は別途）
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                コンサルティング料金（該当する場合）
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                オプション、コンサルタントからのエンドツーエンド準拠支援のため
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
        認可インド代表者（AIR）の役割
      </h2>

      <p className="service-left-content-paragraph">
        外国製造業者にとって、認可インド代表者（AIR）は重要です。
      </p>

      <PointsListWithoutHeading
        points={[
          "BISとのすべての通信を処理します。",
          "文書を収集して提出し、検査プロセスを促進します。",
          "認証に関して、前後で準拠を確保します。",
          "インド市民または登録された現地住所を持つ組織でなければなりません。",
        ]}
      />

      <p className="service-left-content-paragraph">
        AIRがない場合、外国企業がBIS認証を取得することは不可能です。
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
        BIS認証を取得することは、インドでビジネスを行うための必要性です。もはやビジネスにおけるオプションの認証ではありません。ビジネスの成功と信頼の構築に不可欠です。BISはインドにおける安全性と成功に不可欠です。製造業者および輸入業者にとって、それは簡単で安全なビジネスセットアップ環境を提供します。法的問題や罰金はもはや懸念事項ではありません。BISマークにより、消費者の信頼が保証されます。
      </p>

      <p className="service-left-content-paragraph">
        インドは世界最大の成長経済の1つであり、そこで販売するためのアクセスを獲得することは、輸出業者の成長に役立ちます。インドまたは海外の製造業者であるかどうかに関わらず、インド市場で製品を製造または販売するにはBISライセンスが必要です。それは必要であり、インドの増加する人口とのビジネス見通しを解き放ちます。それは安全性、消費者の信頼、ブランドの評判、信頼性、および長期的な成長への投資です。
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">スキーム</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">BIS認証スキーム</h2>

      <p className="service-left-content-paragraph">
        BISには、様々な産業および製品タイプ向けに設計された多数の認証スキームがあります。それぞれは産業と製品の特定のニーズに対処するために設計されています。
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – 外国製造業者認証スキーム",
          "ISIマークスキーム（国内製造業者）",
          "インドBISのスキームX",
          "CRS – 必須登録スキーム",
          "ハルマーキングスキーム（ジュエリーおよび貴金属）",
          "エコマーク認証",
          "管理システム認証スキーム（MSCS）",
          "LRS（ラボ承認スキーム）",
        ]}
        linkMap={{
          "FMCS – 外国製造業者認証スキーム":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISIマークスキーム（国内製造業者）":
            "a-guide-to-bis-certification-indian-bis",
          インドBISのスキームX: "indian-bis-certification-under-scheme-x",
          "CRS – 必須登録スキーム": "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISIマークスキーム（国内製造業者）
      </h3>

      <p className="service-left-content-paragraph">
        インドの製造業者にとって、BISライセンスの取得は、国内での製品の合法的な販売を確保するための前提条件です。この認証は、製品の品質、安全性、性能基準に関するインド標準の満足を証明するために、インド標準局（BIS）によって発行されます。これには、工場監査、製品テスト、およびBISパラメータとの準拠チェックが含まれます。製品が合格すると、製造業者は製品にISIマークを付けることが許可されます。このマークは製造業者の商標であり、顧客が真正のISI認証製品を識別するのに役立ちます。
      </p>

      <p className="service-left-content-paragraph">
        電子機器、鋼、セメント、プラスチック、または建設材料であっても、BIS証明書の取得は市場へのアクセスを得るために不可欠です。消費者の信頼を得ることとは異なり、BIS証明書はインド製造業者の評判を高め、政府契約への参加を可能にし、多くのその他のビジネス機会を開きます。最も重要なのは、BIS認証の欠如は、法的罰金や製品リコールから、インドでの販売の完全な禁止まで、深刻な影響を与える可能性があることです。したがって、BIS準拠は法的要件以上のものであり、消費者の信頼を拡大し維持するための標的戦略です。
      </p>

      <p className="service-left-content-paragraph">
        インドの製造業者にとって、ISIマークスキームは最も権威のあるマークです。このスキームの下では、インドの製造業者は、製品をBIS承認のテスト施設でテストする必要があります。製造現場は検査とテストの対象となります。準拠製品には、ISIマークの使用が承認されます。セメント、LPGシリンダー、電気ケーブル、パッケージ飲料水などの製品をISIマークなしで供給することは違法です。
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – 外国製造業者認証スキーム
      </h3>

      <p className="service-left-content-paragraph">
        外国製造業者認証スキーム（FMCS）は、インド市場に参入したい外国企業のためにインド標準局が開発したスキームです。このスキームは、海外で製造され、必要なインド標準に準拠する製品の安全性、品質、性能保証を保証します。FMCSによると、インドで製品を販売したい外国企業は、まずインド標準局の証明書またはライセンスを取得する必要があります。インドの製造業者と同様に、外国の製造業者も製品にISIマークを使用するためにBISライセンスを取得する必要があります。望ましいISIマークは、工場とインド標準に対する厳格な製品サンプルテストを含む広範な評価の後に与えられます。
      </p>

      <p className="service-left-content-paragraph">
        外国製造業者は、スキームのためのインド標準局（BIS）との最初の連絡先として、通信と調整を担当する認可インド代表者（AIR）を任命する必要があります。これには、申請の提出、詳細な準拠評価、および期限以内に準拠を達成するためのすべての必要な義務の仮定が含まれます。FMCSガイドラインに従うことで、外国企業はインド市場に参入できるだけでなく、顧客との信頼関係も獲得できます。ISIマークが付いた製品は、インドで高レベルの品質、安全性、信頼性保証を示します。
      </p>

      <p className="service-left-content-paragraph">
        規制対象カテゴリに該当する外国製品は、FMCS認証なしではインドに入国することは許可されていません。
      </p>

      <h3 className="service-left-content-heading-three">
        スキームX（包括的技術規制）
      </h3>

      <p className="service-left-content-paragraph">
        スキームX、または包括的技術規制は、機械および電気分野の産業の準拠手順を簡素化するために、インド標準局が設計した別のBIS認証スキームです。他の認証スキームとは異なり、スキームXは、製品がインド標準に準拠していることを確保しながら、書類、評価、承認を削減することに焦点を当てています。標準マークが付いた製品は、卓越した品質と安全性を備えており、タイプテスト、工場検査、および必須要件の簡単な認証を受けた後に販売できます。
      </p>

      <p className="service-left-content-paragraph">
        スキームXは、ポンプ、クレーン、変圧器、工作機械、その他の重工業製品などの製品の重機械および電気機器の安全性ガイドラインをカバーしています。これらは最も関連性の高い産業であり、信頼性と安全性が必要なすべての分野です。スキームXは、複雑なBIS認証の時間とコストを短縮するため便利です。品質と安全性の基準を損なうことなく、マーケティングのための迅速な承認と強化された評判を促進するために、準拠プロセスを合理化することを目的としています。インド標準局の永続的かつ伝統的な評判により、国際貿易が容易になり、企業が準拠要件を満たし、競争力を高めるために不可欠です。
      </p>

      <p className="service-left-content-paragraph">
        BISスキームXは、インドの重機械産業にアクセスするために必須です。この新しいスキームは、改善された市場競争、革新、およびこの簡素化されたが堅牢な構造を通じて合理化された規制への準拠にとって重要です。
      </p>

      <h3 className="service-left-content-heading-three">
        必須登録スキーム（CRS）
      </h3>

      <p className="service-left-content-paragraph">
        インド標準局（BIS）は、インドのITおよび電子製品を規制することを目的とした、必須登録スキーム（CRS）と呼ばれるBIS認証プログラムを開発しました。LEDライト、携帯電話、ノートパソコン、パワーバンク、その他の消費電子機器などの高リスク製品の安全性と品質をインド標準に対して評価することに焦点を当てています。CRSは、ISIスキームとは対照的に、ISIマークを発行しませんが、スキームに準拠した認証製品には、一意の登録番号付きのCRSマークが付けられます。すべての電子機器およびIT製品は、BIS承認のラボでテストされ、BIS
        CRSに正式に登録される必要があり、インドで販売または輸入される前に準拠を確保するために使用されます。
      </p>

      <p className="service-left-content-paragraph">
        このスキームは、特に急速に成長しているデジタル市場において、インドの消費者を安全でない、標準以下の、または偽造の電子機器から保護するために不可欠です。インドと外国の両方の製造業者がCRS認証を取得する必要があります。外国企業は、準拠を確保するために認可インド代表者（AIR）を任命する必要があります。BISは、新しい製品と技術、および新興の安全性問題を含めるために、CRSの対象となる製品のリストを継続的に更新しています。製造業者にとって、CRSの下でBIS登録を取得することは、規制準拠に役立つだけでなく、顧客の信頼、会社の評判、およびインドの電子機器業界での市場アクセスを増加させるため、追加の利点です。
      </p>

      <h3 className="service-left-content-heading-three">
        ハルマーキングスキーム
      </h3>

      <p className="service-left-content-paragraph">
        インドでは、ハルマーキングスキームの下で、金および銀のジュエリーのハルマーキングが義務付けられており、ジュエリーの純度と真正性を保証するインド標準局（BIS）によって規制されています。貴金属製品は、BIS承認の試金およびハルマーキングセンター（AHC）でテストされ、その後ハルマーキング記号が刻印されます。このプロセスは、製品が最初に設定されたインド標準を満たす場合にのみ完了します。宝石商は、ハルマーキングジュエリーを販売することを許可するBISライセンスを最初に取得する必要があります。これは合法的に行う唯一の方法です。宝石商は、ハルマーキングジュエリーを販売するために、製品テスト、BIS監査、継続的な準拠監視を受けて完了する義務があります。このプロセスは、最終的に消費者を保護し、純度、重量、品質を確保し、ジュエリー市場での不正行為および詐欺を制限します。
      </p>

      <p className="service-left-content-paragraph">
        インドの消費者にとって、金と銀は単なる装飾品ではなく、主要な投資でもあり、信頼と透明性が不可欠です。ハルマーキングジュエリーは、国の一般市民にとって、販売されるすべてのジュエリーが様々な国家ベンチマークおよび公正な取引慣行に対して広範なテストを受けていることを保証するマークです。宝石商は、ジュエリーにハルマーキングを行うことで、信頼性と市場の評判を示すことができます。設定された規則に準拠できないことは、ライセンスの停止を含む可能性のある罰則をもたらします。BISの下でのハルマーキングは、原則に基づく法的義務の履行として機能します。これは消費者の満足度を高めるだけでなく、インドのジュエリー市場全体を強化します。これは小規模な小売業者だけでなく、大規模な製造業者にも当てはまります。
      </p>

      <h3 className="service-left-content-heading-three">エコマーク認証</h3>

      <p className="service-left-content-paragraph">
        エコマークは、環境に優しい商品の促進を目的として、インド標準局（BIS）によって作成された、革新を中心とした承認スキームです。安全性と品質パラメータに主に関心を持つ従来の認証とは異なり、エコマークはインド標準に準拠し、商品のライフサイクルの様々な段階のいずれか1つまたは複数の段階で、有害な環境への影響の少なくともいくらかの低減レベルを示す商品に授与されます。エコマーク認証は、排出レベル、非毒性、生分解率、リサイクル能力、システムとの全体的な相互作用を含む基準準拠の相当なテストと証明の後にのみ授与されます。エコマークは、ISIマークと同様に、より顕著な環境持続可能性の目標を持つ認証マークの地位が付与された政府からの保証の象徴です。
      </p>

      <p className="service-left-content-paragraph">
        エコマーク付きのBISライセンスは、企業が責任ある製造に従事し、環境を気にかけていることを証明します。それは法律への準拠を確保し、保護的な消費者および持続可能性志向のビジネスとの競争優位性を生み出します。エコマークは、産業がグリーン慣行を信頼し採用するのを助け、消費者が購入する製品が安全で環境に責任があると信頼するのを助けます。エコマークは、BISの下で環境保護とともに強化された品質保護のためのインドのビジョンをサポートします。
      </p>

      <h3 className="service-left-content-heading-three">
        管理システム認証スキーム（MSCS）
      </h3>

      <p className="service-left-content-paragraph">
        インド標準局（BIS）によって開始された管理システム認証スキーム（MSCS）は、国際的に受け入れられ認識された管理システムの実装について、関連企業を評価し認識する段階的な手順です。MSCSフレームワークは、ISO
        9001品質管理、ISO 14001環境管理、ISO
        45001職業健康安全管理システムなどのISO標準で構成されています。MSCSは、法的運用、一貫性、および運用の継続的改善について企業を認証します。認証された企業は、多数の評価と監査を受け、顧客、規制当局、およびステークホルダー間の信頼を構築し、安全性、品質、持続可能性の保証を強化します。
      </p>

      <p className="service-left-content-paragraph">
        BISはインドの国家標準機関であり、組織の評判と信頼性を国内およびインド国外で向上させるための認証機関です。MSCSは、定期的な監督と再認証を通じて説明責任を促進するだけでなく、Make
        in IndiaやAtmanirbhar
        Bharatなどの公的プログラムを積極的にサポートするビジネスを解放します。法的義務に加えて、このスキームは、誠実さ、効率、公正な取引の文化を育むのにも役立ちます。MSCSは認証された企業による貿易と投資を促進し、BISは国の品質エコシステムの開発において重要な役割を果たします。
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – ラボ承認スキーム
      </h3>

      <p className="service-left-content-paragraph">
        インド標準局（BIS）の下で、ラボ承認スキーム（LRS）は、BIS承認のために製品をテストおよび認証するラボの信頼性と全体的な能力を保証するシステムの不可欠な部分です。そのようなラボは、技術知識、労働力の品質、インフラストラクチャ、およびISO/IEC
        17025標準とのラボの全体的な能力と満足度を含む様々な属性について批判的に評価されます。これらのラボは、承認されると、ISIマークスキームや必須登録スキーム（CRS）などの様々なBIS認証プログラムの一部として適合性評価が行われる製品についてテストを実施することが許可されます。製造業者、特に輸入業者および輸出業者にとって、LRS承認ラボから得られたレポートは、特定の製品に法的要件であるBIS証明書を達成するための重要な要件であることは明らかです。
      </p>

      <p className="service-left-content-paragraph">
        LRSは、テスト結果の公平性を維持し、すべての結果が一貫していてグローバルにベンチマークされていることを確保しながら、信頼性が高く健全なラボのみを承認することにより、インドの保証システムを強化しています。誠実さと透明性を維持するために、BISは定期的な監査、熟練度テスト、および承認されたスキームラボの監視を実施します。この認証の承認により、BISは消費者の信頼を向上させるとともに、認証プロセスを産業にとってより効率的にし、安全で準拠した高品質な製品のみがインド市場で提供されるようにします。BIS認証を受けようとする組織にとって、LRS承認ラボとの協力は、準拠と市場アクセスを達成するために最も不可欠です。
      </p>

      <h3 className="service-left-content-heading-three">
        BIS認証が必要な製品
      </h3>

      <p className="service-left-content-paragraph">
        BIS認証は、幅広い製品に適用されます。例には以下が含まれます：
      </p>

      <PointsListWithoutHeading
        points={[
          "電気・電子機器 – LEDライト、携帯電話、アダプター、ノートパソコン。",
          "建設材料 – セメント、鋼材、構造製品。",
          "消費者製品 – パッケージ飲料水、調理用ガスシリンダー。",
          "ジュエリーおよび貴金属 – ハルマーキングの対象となる金および銀製品。",
          "産業機器 – ポンプ、変圧器、工作機械。",
        ]}
      />

      <p className="service-left-content-paragraph">
        新しいリスクと技術が出現するにつれて、リストは継続的に成長しています。
      </p>

      <h3 className="service-left-content-heading-three">BIS認証の利点</h3>

      <p className="service-left-content-paragraph">
        企業にとって、BIS証明書は単なる法律への準拠よりもはるかに多くのものを提供します。
      </p>

      <PointsListWithoutHeading
        points={[
          "法的準拠：罰金なし、禁止なし、押収なし。",
          "市場アクセス：インドで規制製品を販売するために必要。",
          "消費者の信頼：証明の印としてよく認識されているISIマークで構築されます。",
          "競争優位性：認証された企業は、認証されていない競合他社と容易に差別化できます。",
          "輸出促進：多くの国際的な買い手がBIS認証を理解し評価しています。",
          "入札への参加：多くの政府プロジェクトは、BIS認証された商品に契約を授与します。",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "インドにおけるBIS認証とは何ですか？",
      answer:
        "BIS認証は、製品が安全性、性能、品質に関してインド標準に準拠していることを確保するために、インド標準局（BIS）によって発行される品質保証認証です。様々な製品カテゴリに必須であり、消費者保護および規制準拠に役立ちます。",
    },
    {
      question: "なぜBIS証明書が必要なのですか？",
      answer:
        "BIS証明書は、インドで特定の製品を合法的に製造、輸入、流通、または販売するために不可欠です。製品がインド標準の安全性および品質ガイドラインを満たしていることを消費者に保証します。",
    },
    {
      question: "BIS認証の下でのISIマークとは何ですか？",
      answer:
        "ISIマークは、BIS認証スキームの下で提供される認証シンボルです。製品がインド標準に準拠しており、適切なテストおよび登録を通じてインドBISによって認証されたことを示します。",
    },
    {
      question: "インドでBISライセンスを発行するのは誰ですか？",
      answer:
        "BISライセンスは、消費者問題・食料・公共配給省の下にある国家標準機関であるインド標準局（インドBIS）によって発行されます。",
    },
    {
      question: "BIS認証スキームの異なるタイプは何ですか？",
      answer:
        "主要なBIS認証スキームには、ISIマークスキーム、必須登録スキーム（CRS）、外国製造業者認証スキーム（FMCS）、ジュエリーのハルマーキング、エコマーク認証、および産業機械向けのスキームXが含まれます。",
    },
    {
      question: "BIS認証の下でのスキームXとは何ですか？",
      answer:
        "スキームXは、ポンプ、変圧器、工作機械、クレーンなどの産業製品に適用される簡素化されたBIS認証プロセスです。インド標準への準拠を損なうことなく、より迅速な承認を確保します。",
    },
    {
      question: "インドでBIS認証が必要な製品はどれですか？",
      answer:
        "電気器具、電子機器、台所用品、セメント、鋼、金のジュエリー、携帯電話、変圧器などの製品は、インドBISの指示に従ってBIS認証が必要です。",
    },
    {
      question: "すべての製品にBIS登録は必須ですか？",
      answer:
        "いいえ、BIS登録は必須認証スキームにリストされている製品のみに必須です。ただし、製品の信頼性を高めるための自発的なBIS認証も利用できます。",
    },
    {
      question: "BISライセンスの有効期間はどのくらいですか？",
      answer:
        "BISライセンスは通常1〜2年間有効で、ISIマークの使用を継続するか、BIS登録ステータスを維持するには、有効期限前に更新する必要があります。",
    },
    {
      question: "インドでBIS認証を取得するための手順は何ですか？",
      answer:
        "BIS認証プロセスには、適用可能なインド標準の特定、申請書の提出、製品テスト、工場検査、承認時のBIS証明書の発行が含まれます。",
    },
    {
      question: "外国製造業者はBISライセンスを申請できますか？",
      answer:
        "はい、外国製造業者認証スキーム（FMCS）の下で、外国企業はインドで製品を販売するためのBISライセンスを申請できます。認可インド代表者（AIR）を任命する必要があります。",
    },
    {
      question: "BIS認証におけるAIRの役割は何ですか？",
      answer:
        "AIR（認可インド代表者）は、外国製造業者とインドBISの間の連絡役として機能します。書類作成、通信、およびBIS認証要件への準拠を担当します。",
    },
    {
      question: "オンラインでBIS登録を申請する方法は？",
      answer:
        "公式BISポータルを通じてオンラインでBIS登録を申請できます。プロセスには、フォームの提出、書類のアップロード、テストレポート、料金の支払いが含まれます。",
    },
    {
      question: "BIS証明書に必要な書類は何ですか？",
      answer:
        "必要な書類には、事業ライセンス、製品仕様、製造プロセス、ラボテストレポート、工場レイアウト、品質マニュアル、および承認フォーム（外国製造業者向け）が含まれます。",
    },
    {
      question: "インドでのBIS認証の費用はいくらですか？",
      answer:
        "BIS認証の費用は、製品タイプ、テスト要件、スキームタイプ（ISI、CRS、FMCS）、申請者が国内か外国かによって異なります。費用には、申請料、テスト料金、検査費用が含まれます。",
    },
    {
      question: "すべてのBIS認証製品にISIマークは必須ですか？",
      answer:
        "いいえ、ISIスキームの下にある製品のみがISIマークを表示する必要があります。CRSまたはハルマーキングスキームの下にある製品は、BIS登録規範に従って異なるラベリングプロトコルに従います。",
    },
    {
      question: "環境に優しい製品のBIS認証を取得できますか？",
      answer:
        "はい、環境基準を満たす製品は、環境安全性に関するインド標準への準拠を確保するエコマークスキームの下でBIS認証を取得できます。",
    },
    {
      question: "BIS認証とBIS登録の違いは何ですか？",
      answer:
        "BIS認証は一般に、ISI、FMCS、またはハルマーキングスキームの下での承認を指しますが、BIS登録は一般に電子製品向けのCRSスキームに関連付けられています。",
    },
    {
      question: "必須登録スキーム（CRS）とは何ですか？",
      answer:
        "CRSは、LEDライト、携帯電話、パワーバンクなどのITおよび電子機器向けのBIS登録プログラムです。製品が安全性関連のインド標準に準拠していることを確保します。",
    },
    {
      question: "ISIマークとBIS証明書は同じ意味ですか？",
      answer:
        "正確には違います。ISIマークは、BIS認証スキームの下で認証製品に付与されるシンボルです。BIS証明書は、製造業者に発行される法的文書です。",
    },
    {
      question: "1つのBISライセンスで複数の製品をカバーできますか？",
      answer:
        "いいえ、製品が類似している場合でも、製品タイプと製造場所ごとに別々のBISライセンスが必要です。",
    },
    {
      question: "BIS認証なしで製品を販売するとどうなりますか？",
      answer:
        "有効なBISライセンスなしでBIS認証が必要な製品を販売することは、インドでは違法であり、罰金、製品リコール、または禁止につながる可能性があります。",
    },
    {
      question: "BIS認証を取得するのにどのくらい時間がかかりますか？",
      answer:
        "BIS認証プロセスは、製品タイプ、テスト要件、申請者が国内か外国かによって、通常30〜90日かかります。",
    },
    {
      question: "BIS認証は世界的に受け入れられていますか？",
      answer:
        "BIS認証はインド固有のものですが、厳格なインド標準への準拠を示すことにより、世界的な信頼性を高めます。一部のBIS認証製品は、相互承認協定の下でも受け入れられています。",
    },
    {
      question: "BISライセンスはどのくらいの頻度で更新する必要がありますか？",
      answer:
        "BISライセンスは、毎年または2年ごとに更新する必要があります。製造業者は、インド標準への準拠を維持し、監視監査に合格してBIS証明書を更新する必要があります。",
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
          よくある質問 – インドにおけるBIS認証
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

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/what-is-bis-certificate-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/was-ist-das-bis-zertifikat-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    },
    // {
    //   code: "ja",
    //   name: "Japanese",
    //   flag: "https://flagcdn.com/w320/jp.png",
    //   path: "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    // },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/quest-ce-que-le-certificat-bis-indien",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/que-es-el-certificado-bis-bis-indio",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-certificate-khue-a-rai-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/apa-itu-sertifikat-bis-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-certificato-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-chi-bis-la-gi-bis-an-do",
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
                        alt={`${language.name} flag`}
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

const BISCertificationServices = () => {
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
              外国製造向けBISマーク（ISIライセンス）
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
              BIS (CRS) 登録
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
                src={ISIMarkImage}
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
